/* KodeQuiz — latar pilihan sendiri (⚙️ Pengaturan → Warna latar & Desain latar).
   • Warna: pemilih warna (kotak gradasi + slider rona + HEX/RGB/HSL). Warna teks dan kartu dihitung otomatis
     supaya kontras teks tetap ≥ 7:1. Warna gelap/terang otomatis memilih tema Gelap/Terang (diatur app.js).
   • Desain: pola latar buatan sendiri dengan CSS (atelier/latar.css), memakai warna tema sehingga cocok di semua tema.
   • Warna latar 2 (28 Nov 2026): warna gradasi abstrak di belakang halaman (gumpalan --g1/--g2 di belula.css, tampil pada Desain = Bawaan).
     Kekuatannya (alfa) diturunkan otomatis sampai teks redup tetap ≥ 4,5:1 di puncak gradasi, untuk tema terang, gelap, dan warna latar 1.
   Disimpan di localStorage 'kq-latar' = { warna: "#rrggbb" | null, warna2: "#rrggbb" | null, pola: "polos" | ... }.
   Dimuat di <head> (tanpa defer) supaya latar sudah benar sebelum halaman tampil. */
(function () {
  "use strict";
  const KUNCI = "kq-latar";
  const POLA = [
    ["polos", "Bawaan"], ["kotak", "Kertas kotak"], ["garis", "Buku tulis"], ["titik", "Titik halftone"],
    ["kotakkotak", "Kotak-kotak"], ["diagonal", "Garis miring"], ["cetakbiru", "Cetak biru"], ["kontur", "Garis kontur"],
    ["sinar", "Sinar"], ["gradasi", "Gradasi lembut"], ["kertas", "Kertas bertekstur"],
  ];
  let S = { warna: null, warna2: null, pola: "polos" };
  try { S = Object.assign(S, JSON.parse(localStorage.getItem(KUNCI)) || {}); } catch (e) { /* mode privat */ }
  const simpan = () => { try { localStorage.setItem(KUNCI, JSON.stringify(S)); } catch (e) { /* abaikan */ } };

  /* ---------- Hitungan warna ---------- */
  const hexKeRgb = h => { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; };
  const rgbKeHex = c => "#" + c.map(v => Math.round(v).toString(16).padStart(2, "0")).join("");
  const campur = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);   // t = porsi warna b (0..1)
  const lum = c => { const [r, g, b] = c.map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return .2126 * r + .7152 * g + .0722 * b; };
  const kontras = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + .05) / (y + .05); };
  function hsvKeRgb(h, s, v) {
    const f = n => { const k = (n + h / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); };
    return [f(5) * 255, f(3) * 255, f(1) * 255];
  }
  function rgbKeHsv([r, g, b]) {
    r /= 255; g /= 255; b /= 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
    let h = 0;
    if (d) h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return [(h * 60 + 360) % 360, mx ? d / mx : 0, mx];
  }
  function rgbKeHsl([r, g, b]) {
    r /= 255; g /= 255; b /= 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
    const s = d ? d / (1 - Math.abs(2 * l - 1)) : 0;
    return [Math.round(rgbKeHsv([r * 255, g * 255, b * 255])[0]), Math.round(s * 100), Math.round(l * 100)];
  }

  // Dari satu warna latar: tentukan gelap/terang, warna teks, kartu, garis. Kartu digeser sampai teks ≥ 7:1.
  function turunan(hex) {
    const c = hexKeRgb(hex), PUTIH = [255, 255, 255], HITAM = [0, 0, 0];
    const gelap = kontras(c, PUTIH) > kontras(c, HITAM);
    const lembut = gelap ? [243, 241, 232] : [20, 24, 31], arah = gelap ? HITAM : PUTIH;
    const teks = kontras(c, lembut) >= 4.5 ? lembut : gelap ? PUTIH : HITAM, latarTeks = teks;
    const bulat = x => hexKeRgb(rgbKeHex(x));   // cek kontras pada warna yang benar-benar dipakai (setelah dibulatkan)
    // latar gelap: kartu sedikit lebih terang dari latar (seperti tema Gelap bawaan) bila teks masih ≥ 7:1
    let kartu = bulat(campur(c, PUTIH, gelap ? .07 : .55));
    let t = gelap ? 0 : .55;
    while (kontras(kartu, teks) < 7 && t < 1) { t = Math.min(1, t + .05); kartu = bulat(campur(c, arah, t)); }
    return {
      gelap,
      v: {
        "--bg": hex, "--bg-atas": rgbKeHex(campur(c, gelap ? PUTIH : HITAM, .06)),
        "--permukaan": rgbKeHex(kartu), "--permukaan-2": rgbKeHex(campur(kartu, c, .5)),
        "--garis": rgbKeHex(campur(kartu, teks, .18)), "--editor-bg": rgbKeHex(kartu),
        "--teks": rgbKeHex(latarTeks), "--redup": rgbKeHex(campur(latarTeks, c, .32)),
      },
    };
  }

  /* ---------- Menerapkan ---------- */
  const gaya = document.createElement("style");
  gaya.id = "kq-latar-gaya";
  // alfa terbesar (≤ .55) agar teks redup tetap ≥ 4,5:1 di atas latar yang tercampur warna latar 2
  function alfa2(hex2) {
    const c2 = hexKeRgb(hex2), pasangan = [["#f2f4f8", "#48445c"], ["#120f22", "#b3accc"]];   // latar & teks redup bawaan Belula, Luluba
    if (S.warna) { const v = turunan(S.warna).v; pasangan.push([v["--bg"], v["--redup"]]); }
    let a = .55;
    while (a > .05 && pasangan.some(([bg, redup]) => kontras(hexKeRgb(redup), campur(hexKeRgb(bg), c2, a)) < 4.5)) a -= .05;
    return +a.toFixed(2);
  }
  function terapkan() {
    document.documentElement.dataset.pola = S.pola || "polos";
    let css = "", tema = null;
    if (S.warna) {
      const d = turunan(S.warna); tema = d.gelap ? "dark" : "light";
      // hanya berlaku pada tema yang cocok: tombol ☀️/🌙 tetap bisa kembali ke palet bawaan
      css = `:root[data-theme="${tema}"]{${Object.entries(d.v).map(([k, v]) => `${k}:${v}`).join(";")};color-scheme:${tema}}`;
    }
    if (S.warna2) { const a = alfa2(S.warna2); css += `:root:root:root{--g1:${S.warna2};--g2:${S.warna2};--a1:${a};--a2:${(a * .7).toFixed(2)}}`; }
    gaya.textContent = css;
    return tema;
  }
  (document.head || document.documentElement).appendChild(gaya);
  terapkan();

  /* ---------- Pemilih warna (seperti color picker Google) ---------- */
  function pasangPicker(wadah, saatUbah, awal) {
    let [h, s, v] = rgbKeHsv(hexKeRgb(awal || S.warna || "#f2f4f8"));
    wadah.innerHTML = `<div class="lp">
      <div class="lp-atas">
        <div class="lp-contoh" aria-hidden="true"></div>
        <div class="lp-sv" tabindex="0" role="slider" aria-label="Kecerahan dan kepekatan warna (panah untuk menggeser)"><span class="lp-titik"></span></div>
      </div>
      <input type="range" class="lp-hue" min="0" max="359" step="1" aria-label="Rona warna">
      <label class="lp-kotak lp-hex"><span>HEX</span><input type="text" maxlength="7" spellcheck="false" autocomplete="off" aria-label="Kode HEX"></label>
      <div class="lp-nilai"><span class="lp-kotak"><span>RGB</span><b class="lp-rgb"></b></span><span class="lp-kotak"><span>HSL</span><b class="lp-hsl"></b></span></div>
    </div>`;
    const q = s_ => wadah.querySelector(s_), sv = q(".lp-sv"), titik = q(".lp-titik"), hue = q(".lp-hue"), hex = q(".lp-hex input");
    function gambar(dariHex) {
      const rgb = hsvKeRgb(h, s, v), kode = rgbKeHex(rgb);
      sv.style.setProperty("--rona", `hsl(${h} 100% 50%)`);
      titik.style.left = s * 100 + "%"; titik.style.top = (1 - v) * 100 + "%";
      titik.style.background = kode;
      q(".lp-contoh").style.background = kode;
      hue.value = Math.round(h);
      if (!dariHex) hex.value = kode;
      q(".lp-rgb").textContent = rgb.map(Math.round).join(", ");
      const [hh, ss, ll] = rgbKeHsl(rgb);
      q(".lp-hsl").textContent = `${hh}°, ${ss}%, ${ll}%`;
      sv.setAttribute("aria-valuetext", kode);
      return kode;
    }
    let tunda = null;
    const ubah = dariHex => { const kode = gambar(dariHex); clearTimeout(tunda); tunda = setTimeout(() => saatUbah(kode), 60); };
    const dariTitik = e => {
      const r = sv.getBoundingClientRect();
      s = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      v = 1 - Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      ubah();
    };
    sv.addEventListener("pointerdown", e => { sv.setPointerCapture(e.pointerId); dariTitik(e); });
    sv.addEventListener("pointermove", e => { if (sv.hasPointerCapture(e.pointerId)) dariTitik(e); });
    sv.addEventListener("keydown", e => {
      const d = { ArrowLeft: [-.02, 0], ArrowRight: [.02, 0], ArrowUp: [0, .02], ArrowDown: [0, -.02] }[e.key];
      if (!d) return;
      e.preventDefault();
      s = Math.min(1, Math.max(0, s + d[0])); v = Math.min(1, Math.max(0, v + d[1])); ubah();
    });
    hue.addEventListener("input", () => { h = +hue.value; ubah(); });
    hex.addEventListener("input", () => {
      const t = hex.value.trim().replace(/^#?/, "#");
      if (!/^#[0-9a-f]{6}$/i.test(t)) return;   // tunggu sampai 6 digit lengkap
      [h, s, v] = rgbKeHsv(hexKeRgb(t.toLowerCase()));
      ubah(true);
    });
    gambar();
  }

  window.KQLatar = {
    POLA,
    pola: () => S.pola || "polos",
    warna: () => S.warna,
    aturPola(p) { S.pola = p; simpan(); terapkan(); },
    aturWarna(hex) { S.warna = hex; simpan(); return terapkan(); },   // → "dark" | "light" | null
    warna2: () => S.warna2,
    aturWarna2(hex) { S.warna2 = hex; simpan(); terapkan(); },
    alfa2,     // dipakai alat/uji-latar.js
    pasangPicker,
    turunan,   // dipakai alat/uji-latar.js
  };
})();
