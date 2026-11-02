/* ============================================================
   Rayakan — efek perayaan KodeQuiz
   • konfeti & kembang api (canvas), ledakan kecil di tombol jawaban
   • suara lembut (Web Audio, tanpa file), bisa dimatikan
   • tirai melingkar untuk transisi ke layar skor
   • angka yang menghitung naik, pop-up lencana & naik level
   Semua efek otomatis mati jika pengguna memilih "kurangi gerakan"
   di sistem, atau mematikan "Efek perayaan" di ⚙️ Pengaturan.
   ============================================================ */

const RAYA = (() => {
  const kurangiGerak = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const efekAktif = () => DATA.pref.efek !== false && !kurangiGerak();
  const suaraAktif = () => DATA.pref.suara !== false;
  const WARNA = ["#4a8c7f", "#77b5a7", "#5f87b0", "#8eaed0", "#c9933a", "#e8c27a", "#c56b5a", "#a6dcb7", "#f4e7c9", "#b9a6d9"];

  /* ---------- kanvas partikel ---------- */
  let kanvas = null, ctx = null, partikel = [], jalan = false, tLalu = 0;
  function siapkan() {
    if (kanvas) return;
    kanvas = document.createElement("canvas");
    kanvas.className = "kanvas-raya";
    kanvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(kanvas);
    ctx = kanvas.getContext("2d");
    ukur();
    addEventListener("resize", ukur);
  }
  function ukur() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    kanvas.width = innerWidth * dpr; kanvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function bintang(c, r) {
    c.beginPath();
    for (let i = 0; i < 10; i++) {
      const rr = i % 2 ? r * 0.45 : r, a = -Math.PI / 2 + i * Math.PI / 5;
      c.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
    }
    c.closePath(); c.fill();
  }
  function langkah(t) {
    const dt = tLalu ? Math.min(2.2, (t - tLalu) / 16.67) : 1;
    tLalu = t;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    partikel = partikel.filter(p => p.umur < p.maks && p.y < innerHeight + 40);
    for (const p of partikel) {
      p.umur += dt;
      if (p.tunda > 0) { p.tunda -= dt; continue; }
      p.vx *= Math.pow(p.gesek, dt);
      p.vy = p.vy * Math.pow(p.gesek, dt) + p.grav * dt;
      p.x += (p.vx + Math.sin(p.umur * 0.08 + p.fase) * p.goyang) * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      const sisa = p.maks - p.umur;
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, sisa / 25));
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.warna;
      if (p.bentuk === 0) {                                   // pita kertas yang berputar
        const h = Math.max(1.2, p.uk * 0.55 * Math.abs(Math.cos(p.umur * 0.18 + p.fase)));
        ctx.fillRect(-p.uk / 2, -h / 2, p.uk, h);
      } else if (p.bentuk === 1) {                            // bulatan
        ctx.beginPath(); ctx.arc(0, 0, p.uk / 2.6, 0, Math.PI * 2); ctx.fill();
      } else {                                                // bintang
        bintang(ctx, p.uk / 1.7);
      }
      ctx.restore();
    }
    if (partikel.length) requestAnimationFrame(langkah);
    else { jalan = false; tLalu = 0; ctx.clearRect(0, 0, innerWidth, innerHeight); }
  }
  function tambah(arr) {
    if (partikel.length > 650) partikel.splice(0, arr.length);
    partikel.push(...arr);
    if (!jalan) { jalan = true; requestAnimationFrame(langkah); }
  }
  const acakDi = (a, b) => a + Math.random() * (b - a);
  function semprot(x, y, o = {}) {
    const n = o.jumlah || 60, arr = [];
    for (let i = 0; i < n; i++) {
      const sudut = (o.sudut ?? -Math.PI / 2) + acakDi(-1, 1) * (o.sebar ?? Math.PI);
      const v = acakDi(0.45, 1) * (o.kuat || 12);
      arr.push({
        x, y, vx: Math.cos(sudut) * v, vy: Math.sin(sudut) * v,
        grav: o.grav ?? 0.32, gesek: o.gesek ?? 0.965, goyang: o.goyang ?? 0.6,
        rot: Math.random() * 6, vr: acakDi(-0.25, 0.25), fase: Math.random() * 6,
        uk: acakDi(o.ukMin || 7, o.ukMaks || 12), bentuk: o.bentuk ?? (Math.random() < 0.62 ? 0 : Math.random() < 0.6 ? 1 : 2),
        warna: (o.warna || WARNA)[Math.floor(Math.random() * (o.warna || WARNA).length)],
        umur: 0, maks: acakDi(o.umurMin || 90, o.umurMaks || 150), tunda: o.tunda ? acakDi(0, o.tunda) : 0,
      });
    }
    tambah(arr);
  }
  function pusat(el) {
    if (!el) return { x: innerWidth / 2, y: innerHeight / 2 };
    if (el.x !== undefined && !el.getBoundingClientRect) return el;
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  /* konfeti(tingkat): 1 = kecil, 2 = meriah, 3 = sangat meriah (kembang api + hujan) */
  function konfeti(tingkat = 2, asal) {
    if (!efekAktif()) return;
    siapkan();
    const W = innerWidth, H = innerHeight;
    if (tingkat === 1) {
      const p = asal ? pusat(asal) : { x: W / 2, y: H * 0.42 };
      semprot(p.x, p.y, { jumlah: 55, kuat: 11, sebar: Math.PI * 0.85 });
      return;
    }
    // dua meriam dari sudut bawah
    semprot(-10, H + 10, { jumlah: 85, kuat: 23, sudut: -Math.PI / 3.1, sebar: 0.42, grav: 0.36 });
    semprot(W + 10, H + 10, { jumlah: 85, kuat: 23, sudut: -Math.PI + Math.PI / 3.1, sebar: 0.42, grav: 0.36 });
    if (tingkat >= 3) {
      // hujan konfeti dari atas
      const hujan = [];
      for (let i = 0; i < 140; i++) hujan.push({
        x: Math.random() * W, y: -20 - Math.random() * 140, vx: acakDi(-1, 1), vy: acakDi(1.5, 3.5),
        grav: 0.03, gesek: 0.995, goyang: 1.2, rot: Math.random() * 6, vr: acakDi(-0.2, 0.2), fase: Math.random() * 6,
        uk: acakDi(7, 12), bentuk: Math.random() < 0.75 ? 0 : 2, warna: WARNA[i % WARNA.length],
        umur: 0, maks: acakDi(200, 280), tunda: acakDi(0, 60),
      });
      tambah(hujan);
      // tiga kembang api berbintang
      [[0.25, 0.3, 300], [0.75, 0.26, 650], [0.5, 0.18, 1000]].forEach(([fx, fy, ms]) =>
        setTimeout(() => semprot(W * fx, H * fy, { jumlah: 60, kuat: 9, sebar: Math.PI, grav: 0.12, gesek: 0.95, bentuk: 2, ukMin: 6, ukMaks: 10, umurMin: 70, umurMaks: 110 }), ms));
    }
  }

  /* ledakan kecil di sebuah elemen (jawaban benar) */
  function ledakan(el, warna) {
    if (!efekAktif() || !el) return;
    siapkan();
    const p = pusat(el);
    semprot(p.x, p.y, { jumlah: 22, kuat: 7, sebar: Math.PI, grav: 0.16, gesek: 0.92, bentuk: Math.random() < 0.5 ? 1 : 2, ukMin: 5, ukMaks: 9, umurMin: 40, umurMaks: 70, warna });
  }

  /* ---------- suara (disintesis, tanpa file) ---------- */
  let ac = null;
  const LAGU = {
    benar:   [[659.25, 0, 0.12], [987.77, 0.08, 0.2]],
    salah:   [[246.94, 0, 0.18, "triangle"], [207.65, 0.1, 0.26, "triangle"]],
    combo:   [[783.99, 0, 0.09], [1046.5, 0.07, 0.09], [1318.5, 0.14, 0.18]],
    menang:  [[523.25, 0, 0.16], [659.25, 0.12, 0.16], [783.99, 0.24, 0.16], [1046.5, 0.38, 0.5]],
    lencana: [[880, 0, 0.1], [1318.5, 0.08, 0.12], [1760, 0.16, 0.3]],
    level:   [[392, 0, 0.12], [523.25, 0.1, 0.12], [659.25, 0.2, 0.12], [783.99, 0.3, 0.12], [1046.5, 0.42, 0.55]],
    klik:    [[1200, 0, 0.04]],
  };
  function nada(jenis) {
    if (!suaraAktif() || !LAGU[jenis]) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === "suspended") ac.resume();
      const now = ac.currentTime;
      LAGU[jenis].forEach(([f, mulai, dur, tipe]) => {
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = tipe || "sine";
        o.frequency.value = f;
        const t0 = now + mulai;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(jenis === "salah" ? 0.05 : 0.08, t0 + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(ac.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
      });
    } catch (e) { /* audio tidak tersedia — abaikan */ }
  }

  /* ---------- tirai melingkar (transisi ke layar skor) ---------- */
  function tirai(asal, kelas = "") {
    if (!efekAktif()) return Promise.resolve(() => {});
    const p = pusat(asal);
    const d = document.createElement("div");
    d.className = "tirai " + kelas;
    d.style.setProperty("--x", p.x + "px");
    d.style.setProperty("--y", p.y + "px");
    d.innerHTML = `<span class="tirai-ikon">✦</span>`;
    document.body.appendChild(d);
    void d.offsetWidth;
    d.classList.add("tutup");
    return new Promise(res => setTimeout(() => res(() => {
      d.classList.add("buka");
      setTimeout(() => d.remove(), 650);
    }), 560));
  }

  /* ---------- angka menghitung naik ---------- */
  function hitung(el, ke, durasi = 1000, format = v => Math.round(v)) {
    if (!el) return;
    if (!efekAktif()) { el.textContent = format(ke); return; }
    const mulai = performance.now();
    const step = t => {
      const k = Math.min(1, (t - mulai) / durasi), e = 1 - Math.pow(1 - k, 3);
      el.textContent = format(ke * e);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- teks melayang (+XP) ---------- */
  function melayang(el, teks) {
    if (!el) return;
    const p = pusat(el);
    const d = document.createElement("div");
    d.className = "teks-melayang";
    d.textContent = teks;
    d.style.left = p.x + "px"; d.style.top = p.y + "px";
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 1300);
  }

  /* ---------- pop-up lencana / level (antre satu per satu) ---------- */
  const antre = [];
  let tampilPop = false;
  function pop(o) { antre.push(o); if (!tampilPop) berikut(); }
  function berikut() {
    const o = antre.shift();
    if (!o) { tampilPop = false; return; }
    tampilPop = true;
    const d = document.createElement("div");
    d.className = "pop-raya " + (o.kelas || "");
    d.setAttribute("role", "status");
    d.innerHTML = `<span class="pop-ikon">${o.ikon}</span><span class="pop-teks"><small>${esc(o.label)}</small><b>${esc(o.judul)}</b>${o.ket ? `<span>${esc(o.ket)}</span>` : ""}</span>`;
    d.onclick = () => tutup();
    document.body.appendChild(d);
    nada(o.suara || "lencana");
    if (o.konfeti) konfeti(1, { x: innerWidth / 2, y: 70 });
    requestAnimationFrame(() => d.classList.add("tampil"));
    let selesai = false;
    const tutup = () => { if (selesai) return; selesai = true; d.classList.remove("tampil"); setTimeout(() => { d.remove(); berikut(); }, 380); };
    setTimeout(tutup, o.lama || 3400);
  }

  /* ---------- combo beruntun ---------- */
  function combo(n) {
    const c = document.getElementById("combo");
    if (!c) return;
    if (n < 3) { c.classList.remove("tampil"); return; }
    c.innerHTML = `🔥 <b>${n}×</b> beruntun`;
    c.classList.remove("tampil", "goyang-combo"); void c.offsetWidth;
    c.classList.add("tampil", "goyang-combo");
    if (n % 5 === 0) nada("combo");
  }

  return { konfeti, ledakan, nada, tirai, hitung, melayang, pop, combo, efekAktif };
})();

/* ============ Level ============
   Level n butuh 50 × n × (n − 1) XP: L2 = 100, L3 = 300, L4 = 600, L5 = 1000, … */
const NAMA_LEVEL = ["", "Pemula", "Penjelajah", "Pembelajar", "Praktisi Muda", "Analis Muda", "Analis", "Analis Andal",
  "Konsultan Muda", "Konsultan", "Ahli", "Ahli Senior", "Master", "Grand Master"];
const xpLevel = n => 50 * n * (n - 1);
function infoLevel(xp) {
  const lv = Math.max(1, Math.floor((1 + Math.sqrt(1 + 0.08 * xp)) / 2));
  const awal = xpLevel(lv), akhir = xpLevel(lv + 1);
  return { lv, nama: NAMA_LEVEL[Math.min(lv, NAMA_LEVEL.length - 1)], awal, akhir, persen: (xp - awal) / (akhir - awal) * 100, sisa: akhir - xp };
}

/* ============ Lencana ============ */
const LENCANA = [
  { id: "pertama",  ikon: "🌱", nama: "Langkah Pertama", ket: "Menjawab 1 soal dengan benar",        cek: s => s.benar >= 1 },
  { id: "combo5",   ikon: "🔥", nama: "Combo 5",          ket: "5 jawaban benar beruntun",            cek: s => s.comboMax >= 5 },
  { id: "combo10",  ikon: "⚡", nama: "Combo 10",         ket: "10 jawaban benar beruntun",           cek: s => s.comboMax >= 10 },
  { id: "sempurna", ikon: "🎯", nama: "Sempurna",         ket: "Skor 100% di sesi minimal 5 soal",    cek: (s, k) => !!(k && k.persen === 100 && k.total >= 5) },
  { id: "streak3",  ikon: "📅", nama: "Konsisten",        ket: "Belajar 3 hari berturut-turut",       cek: () => DATA.streak.hari >= 3 },
  { id: "streak7",  ikon: "🗓️", nama: "Seminggu Penuh",   ket: "Belajar 7 hari berturut-turut",       cek: () => DATA.streak.hari >= 7 },
  { id: "seratus",  ikon: "💯", nama: "Seratus",          ket: "100 jawaban benar",                   cek: s => s.benar >= 100 },
  { id: "limaratus",ikon: "🏅", nama: "Lima Ratus",       ket: "500 jawaban benar",                   cek: s => s.benar >= 500 },
  { id: "level5",   ikon: "⭐", nama: "Level 5",          ket: "Mencapai Level 5 (1.000 XP)",         cek: () => infoLevel(DATA.xp).lv >= 5 },
  { id: "excel",    ikon: "📊", nama: "Jago Excel",       ket: "Semua bab Excel dikuasai (≥ 70%)",    cek: () => topikTuntas("excel") },
  { id: "sql",      ikon: "🗄️", nama: "Jago SQL",         ket: "Semua bab SQL dikuasai (≥ 70%)",      cek: () => topikTuntas("sql") },
  { id: "erp",      ikon: "🏢", nama: "Siap Konsultan",   ket: "Semua bab ERP & Odoo dikuasai",       cek: () => topikTuntas("erp") },
  { id: "lab",      ikon: "🧪", nama: "Penakluk Lab",     ket: "Semua tantangan Lab SQL selesai",     cek: () => ((DATA.sqllab && DATA.sqllab.lulus.length) || 0) >= TANTANGAN_SQL.length },
  { id: "proyek",   ikon: "🚀", nama: "Builder",          ket: "Proyek SalesKu selesai 16 langkah",   cek: () => dataProyek().lulus.length >= PROYEK.langkah.length },
  { id: "pembaca",  ikon: "📚", nama: "Pembaca Setia",    ket: "Membaca 100 halaman buku PDF",        cek: () => halPdfDibaca() >= 100 },
  { id: "buku",     ikon: "📖", nama: "Kutu Buku",        ket: "Menandai 10 bab selesai dibaca di Book", cek: () => Object.keys((DATA.buku && DATA.buku.dibaca) || {}).length >= 10 },
  { id: "malam",    ikon: "🦉", nama: "Burung Hantu",     ket: "Menyelesaikan kuis setelah jam 21.00", cek: (s, k) => !!(k && new Date().getHours() >= 21) },
];
function topikTuntas(t) { return MATERI[t].every(b => DATA.bab[t + "-" + b.k] && DATA.bab[t + "-" + b.k].persen >= 70); }
function cekLencana(konteks) {
  DATA.lencana = DATA.lencana || {};
  const baru = [];
  LENCANA.forEach(l => {
    if (DATA.lencana[l.id]) return;
    let ok = false;
    try { ok = l.cek(DATA.statistik, konteks); } catch (e) { ok = false; }
    if (ok) { DATA.lencana[l.id] = Date.now(); baru.push(l); }
  });
  if (baru.length) simpan();
  return baru;
}
function umumkanLencana(daftar) {
  daftar.forEach(l => RAYA.pop({ ikon: l.ikon, label: "Lencana baru!", judul: l.nama, ket: l.ket, konfeti: true }));
}
