/* KodeQuiz — "Panggung" beranda (28 November 2026), mengikuti pola referensi "Interactive Website • Cards Opening":
   latar layar penuh, judul besar kapital ramping di kiri, deretan kartu potret di kanan; kartu yang diklik "membuka"
   menjadi latar, antrean bergeser, tombol panah bulat, garis progres, nomor slide besar.
   Gambar: pemandangan SVG buatan sendiri (bukan foto orang lain), dibuat sekali menjadi data URL lalu dipakai <img>,
   sehingga browser cukup merasterisasi sekali. Animasi hanya clip-path pada satu lapisan, transform, dan opacity.
   Putar otomatis berhenti saat kursor/fokus di panggung, tab tersembunyi, panggung tidak terlihat, atau prefers-reduced-motion. */
(function () {
  const S = document.getElementById("panggung");
  if (!S || typeof BANK === "undefined") return;
  const KURANG_GERAK = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DURASI = 8000;

  /* ---------- pemandangan SVG: langit, cakram, lapisan punggung bukit dari "bentuk data" ---------- */
  const rng = s => () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;   // acak berbenih: gambar selalu sama
  const BENTUK = {
    gunung: (x, r, k) => Math.abs(Math.sin(x / (170 + k * 40) + k)) * .7 + Math.sin(x / 61 + k * 3) * .12 + r() * .05,
    batang: (() => { let w = 0, h = 0; return (x, r) => { if (x >= w) { w = x + 30 + r() * 70; h = .25 + r() * .75; } return h; }; }),
    lonceng: (x, r, k) => [380, 820, 1260].reduce((t, m, i) => t + Math.exp(-((x - m - k * 60) ** 2) / (2 * (120 + i * 30) ** 2)) * (.6 + .4 * ((i + k) % 2)), 0),
    gelombang: (x, r, k) => .5 + Math.sin(x / 140 + k * 1.7) * .35 + Math.sin(x / 47 + k) * .06,
    teras: (x, r, k) => Math.round((.5 + Math.sin(x / 260 + k) * .45) * 6) / 6,
    gigi: (x, r, k) => { const p = 180 + k * 30, f = ((x + k * 77) % p) / p; return (f < .5 ? f : 1 - f) * 2 * (.7 + .3 * Math.sin(x / 400 + k)); },
  };
  function pemandangan(c) {
    const r = rng(c.benih), W = 1600, H = 900;
    let isi = `<defs><linearGradient id="l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.langit[0]}"/><stop offset="1" stop-color="${c.langit[1]}"/></linearGradient>` +
      `<radialGradient id="c"><stop offset="0" stop-color="${c.cakram[3]}" stop-opacity=".9"/><stop offset=".35" stop-color="${c.cakram[3]}" stop-opacity=".25"/><stop offset="1" stop-color="${c.cakram[3]}" stop-opacity="0"/></radialGradient></defs>` +
      `<rect width="${W}" height="${H}" fill="url(#l)"/>`;
    if (c.bintang) for (let i = 0; i < c.bintang; i++) isi += `<circle cx="${(r() * W) | 0}" cy="${(r() * H * .55) | 0}" r="${(r() * 1.6 + .4).toFixed(1)}" fill="#fff" opacity="${(r() * .6 + .2).toFixed(2)}"/>`;
    const [cx, cy, cr] = c.cakram;
    isi += `<circle cx="${cx}" cy="${cy}" r="${cr * 3.2}" fill="url(#c)"/><circle cx="${cx}" cy="${cy}" r="${cr}" fill="${c.cakram[3]}"/>`;
    c.lapis.forEach(([bentuk, dasar, tinggi, warna], k) => {
      const f = bentuk === "batang" ? BENTUK.batang() : BENTUK[bentuk];   // "batang" butuh status sendiri per lapisan
      let d = `M0 ${H}`;
      for (let x = 0; x <= W; x += bentuk === "batang" ? 5 : 16) d += `L${x} ${(dasar - tinggi * f(x, r, k)).toFixed(1)}`;
      isi += `<path d="${d}L${W} ${H}Z" fill="${warna}"/>`;
    });
    if (c.kisi)   // lantai kisi di atas bukit, di bawah garis cakrawala 620
      for (let i = 0; i <= 16; i++) isi += `<line x1="${800 + (i - 8) * 40}" y1="620" x2="${800 + (i - 8) * 260}" y2="900" stroke="${c.kisi}" stroke-opacity=".35"/>` + (i < 7 ? `<line x1="0" y1="${620 + i * i * 6.5}" x2="1600" y2="${620 + i * i * 6.5}" stroke="${c.kisi}" stroke-opacity=".3"/>` : "");
    if (c.titik) for (let i = 0; i < 60; i++) isi += `<circle cx="${(r() * W) | 0}" cy="${(300 + r() * 260) | 0}" r="${(r() * 3 + 1.5).toFixed(1)}" fill="${c.titik}" opacity="${(r() * .5 + .3).toFixed(2)}"/>`;
    if (c.jendela) for (let i = 0; i < 46; i++) isi += `<rect x="${(r() * W) | 0}" y="${(640 + r() * 200) | 0}" width="6" height="4" fill="${c.jendela}" opacity="${(r() * .6 + .3).toFixed(2)}"/>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">${isi}</svg>`);
  }

  /* ---------- isi slide: 3 jalur karier + 5 topik inti ---------- */
  const J = typeof JALUR !== "undefined" ? JALUR : {};
  const soal = t => (BANK[t] || []).length.toLocaleString("id-ID"), bab = t => (MATERI[t] || []).length;
  const jalur = (t, judul, adegan) => ({ t, judul, adegan, meta: `Jalur karier · ${J[t] ? J[t].tahap.length : ""} tahap · ${soal(t)} soal`, ket: J[t] ? J[t].slogan : "", buka: () => go("jalur", { j: t }) });
  const topik = (t, judul, meta, ket, adegan) => ({ t, judul, adegan, meta: `${meta} · ${bab(t)} bab · ${soal(t)} soal`, ket, buka: () => go("topik", { t }) });
  const SLIDE = [
    jalur("da", ["Data", "Analyst"], { benih: 11, langit: ["#849AAD", "#DCE5EB"], cakram: [1180, 250, 70, "#F1E9DE"], lapis: [["gunung", 520, 220, "#A9BCC9"], ["gunung", 620, 260, "#849AAD"], ["batang", 760, 240, "#605246"], ["batang", 900, 190, "#2B231E"]] }),
    jalur("ds", ["Data", "Scientist"], { benih: 23, langit: ["#2E2427", "#A1947F"], cakram: [420, 230, 46, "#E9EEF1"], bintang: 90, titik: "#DCE5EB", lapis: [["lonceng", 640, 260, "#7D705F"], ["lonceng", 760, 240, "#605246"], ["lonceng", 900, 210, "#2B231E"]] }),
    jalur("cyber", ["Cyber", "Security"], { benih: 37, langit: ["#0E0C0B", "#2E3A45"], cakram: [1260, 210, 34, "#B1C7D4"], bintang: 140, kisi: "#B1C7D4", lapis: [["gigi", 560, 200, "#2A3038"], ["gigi", 640, 160, "#1A1D21"]] }),
    topik("python", ["Python"], "Bahasa prioritas", "Dari dasar sampai OOP, pandas, dan otomasi data. Setiap bab punya Lab menulis kode dengan petunjuk per langkah.", { benih: 41, langit: ["#B1C7D4", "#EEF2F4"], cakram: [1240, 260, 64, "#F4EEE6"], lapis: [["gelombang", 600, 200, "#9DB1BF"], ["gelombang", 720, 210, "#849AAD"], ["gelombang", 840, 190, "#5D7183"], ["gelombang", 920, 120, "#3B4A57"]] }),
    topik("sql", ["SQL"], "Bahasa prioritas", "JOIN, GROUP BY, CTE, dan window function, langsung dicoba di Lab SQL tanpa memasang apa pun.", { benih: 53, langit: ["#605246", "#CDBFA9"], cakram: [360, 280, 58, "#EFE7DC"], lapis: [["teras", 620, 260, "#A1947F"], ["teras", 740, 250, "#7D705F"], ["teras", 880, 220, "#534538"], ["teras", 920, 110, "#2B231E"]] }),
    topik("excel", ["Excel"], "Data & bisnis", "SUMIFS, XLOOKUP, pivot, dan dynamic array untuk laporan yang rapi dan cepat.", { benih: 67, langit: ["#C5D3DC", "#EEF2F4"], cakram: [1120, 240, 60, "#F7F1E8"], lapis: [["teras", 600, 180, "#A9B9C4"], ["teras", 720, 200, "#849AAD"], ["teras", 850, 190, "#A1947F"], ["teras", 920, 120, "#605246"]] }),
    topik("erp", ["ERP &", "Odoo"], "Data & bisnis", "Proses bisnis sampai developer Odoo 17, ditambah Lab Hitung pricelist, pajak, valuasi, dan penyusutan.", { benih: 79, langit: ["#2B1A1D", "#7A5D5A"], cakram: [1300, 300, 40, "#E6D3BC"], jendela: "#E6D3BC", lapis: [["gunung", 620, 220, "#605246"], ["batang", 780, 230, "#3E2E2B"], ["batang", 900, 160, "#1C1412"]] }),
    topik("js", ["Java", "Script"], "Bahasa prioritas", "DOM, event, async, sampai React, dengan tombol Run untuk mencoba kode di tempat.", { benih: 97, langit: ["#5E1C23", "#D9C3B5"], cakram: [800, 520, 90, "#F1E4D6"], lapis: [["gigi", 640, 240, "#A1947F"], ["gigi", 760, 230, "#605246"], ["gigi", 900, 170, "#2B1B1E"]] }),
  ];
  const URL_ = SLIDE.map(s => pemandangan(s.adegan));
  window.KQ_ADEGAN = Object.fromEntries(SLIDE.map((s, i) => [s.t, URL_[i]]));   // dipakai ulang kartu heliks

  /* ---------- kerangka ---------- */
  const ikon = d => `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  S.innerHTML = `
    <div class="pg-latar"><img class="pg-img" alt="" decoding="async"></div>
    <div class="pg-buka" aria-hidden="true"><img alt="" decoding="async"></div>
    <div class="pg-redup" aria-hidden="true"></div>
    <div class="pg-teks">
      <p class="pg-meta"><i aria-hidden="true"></i><span></span></p>
      <h1 class="pg-judul" aria-live="polite"></h1>
      <p class="pg-ket"></p>
      <div class="pg-aksi">
        <button class="pg-putar" type="button" title="Kuis cepat 10 soal" aria-label="Kuis cepat 10 soal">${ikon("M8 5l11 7-11 7z")}</button>
        <button class="pg-mulai" type="button">Mulai belajar</button>
      </div>
    </div>
    <div class="pg-kartu" role="list" aria-label="Jalur dan topik lain"></div>
    <div class="pg-kendali">
      <button class="pg-panah" type="button" data-arah="-1" aria-label="Sebelumnya">${ikon("M15 5l-7 7 7 7")}</button>
      <button class="pg-panah" type="button" data-arah="1" aria-label="Berikutnya">${ikon("M9 5l7 7-7 7")}</button>
      <span class="pg-garis" aria-hidden="true"><i></i></span>
      <b class="pg-no" aria-hidden="true">01</b>
    </div>`;
  const $ = s => S.querySelector(s);
  const latar = $(".pg-img"), buka = $(".pg-buka"), bukaImg = buka.querySelector("img"), deret = $(".pg-kartu"), garis = $(".pg-garis i");
  let urut = SLIDE.map((_, i) => i), sibuk = false;

  const judulHTML = s => s.judul.map((b, i) => `<span class="pg-baris"><span style="--d:${i * 90}ms">${esc(b)}</span></span>`).join("");
  function isiTeks(animasi) {
    const s = SLIDE[urut[0]];
    $(".pg-meta span").textContent = s.meta;
    $(".pg-judul").innerHTML = judulHTML(s);
    $(".pg-ket").textContent = s.ket;
    const no = $(".pg-no"); no.textContent = String(urut[0] + 1).padStart(2, "0");
    if (animasi && !KURANG_GERAK) { no.classList.remove("pg-gulir"); void no.offsetWidth; no.classList.add("pg-gulir"); }
    S.style.setProperty("--pg-judul-n", s.judul.length);
    if (animasi && !KURANG_GERAK) { S.classList.remove("pg-masuk"); void S.offsetWidth; S.classList.add("pg-masuk"); }
  }
  function isiKartu(animasi) {
    deret.innerHTML = urut.slice(1).map((i, p) => {
      const s = SLIDE[i];
      return `<button class="pg-k${animasi && !KURANG_GERAK ? " pg-k-masuk" : ""}" type="button" role="listitem" data-p="${p + 1}" style="--d:${p * 60}ms" aria-label="Buka ${esc(s.judul.join(" "))}">
        <img src="${URL_[i]}" alt="" loading="lazy" decoding="async"><span class="pg-k-meta">${esc(s.meta.split(" · ")[0])}</span><b>${s.judul.map(esc).join("<br>")}</b></button>`;
    }).join("");
  }
  function zoom() { if (KURANG_GERAK) return; latar.classList.remove("pg-zoom"); void latar.offsetWidth; latar.classList.add("pg-zoom"); }
  function mulaiProgres() {
    if (KURANG_GERAK) return;
    garis.classList.remove("jalan"); void garis.offsetWidth; garis.classList.add("jalan");
  }
  function selesai() { latar.src = URL_[urut[0]]; zoom(); buka.classList.remove("tampil"); buka.style.clipPath = ""; isiKartu(true); sibuk = false; mulaiProgres(); }

  // kartu ke-p dibuka: lapisan atas dipotong seukuran kartu lalu dibuka sampai penuh
  function bukaKartu(p) {
    if (sibuk) return;
    sibuk = true;
    garis.classList.remove("jalan");   // hentikan progres agar putar otomatis tidak menyusul di tengah animasi
    const k = deret.querySelector(`[data-p="${p}"]`);
    urut = urut.slice(p).concat(urut.slice(0, p));
    bukaImg.src = URL_[urut[0]];
    if (!k || KURANG_GERAK) { isiTeks(false); selesai(); return; }
    const a = S.getBoundingClientRect(), b = k.getBoundingClientRect();
    const potong = `inset(${b.top - a.top}px ${a.right - b.right}px ${a.bottom - b.bottom}px ${b.left - a.left}px round 6px)`;
    buka.style.transition = "none"; buka.style.clipPath = potong; buka.classList.add("tampil");
    k.style.visibility = "hidden";
    S.classList.add("pg-keluar");
    const lanjut = () => {
      buka.style.transition = ""; buka.style.clipPath = "inset(0px 0px 0px 0px round 0px)";
      setTimeout(() => { S.classList.remove("pg-keluar"); isiTeks(true); }, 260);
      let beres = false; const akhir = () => { if (!beres) { beres = true; selesai(); } };
      buka.addEventListener("transitionend", akhir, { once: true }); setTimeout(akhir, 1100);
    };
    (bukaImg.decode ? bukaImg.decode().catch(() => {}) : Promise.resolve()).then(() => { void buka.offsetWidth; lanjut(); });   // reflow paksa: posisi awal terkunci sebelum transisi
  }
  function mundur() {
    if (sibuk) return;
    sibuk = true;
    garis.classList.remove("jalan");   // hentikan progres agar putar otomatis tidak menyusul di tengah animasi
    urut = [urut[urut.length - 1]].concat(urut.slice(0, -1));
    bukaImg.src = URL_[urut[0]];
    buka.style.transition = "none"; buka.style.clipPath = "inset(0px 0px 0px 0px)";
    buka.classList.add("pudar");
    void buka.offsetWidth; buka.style.transition = ""; buka.classList.add("tampil");
    isiTeks(true);
    setTimeout(() => { buka.classList.remove("pudar"); selesai(); }, KURANG_GERAK ? 0 : 520);
  }

  if (!KURANG_GERAK && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let kTilt = null, ev = null, antre = false;
    deret.addEventListener("pointermove", e => {
      ev = e; kTilt = e.target.closest(".pg-k");
      if (antre || !kTilt) return;
      antre = true;
      requestAnimationFrame(() => {
        antre = false; if (!kTilt) return;
        const r = kTilt.getBoundingClientRect(), x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
        kTilt.style.setProperty("--ry", ((x - .5) * 14).toFixed(2) + "deg");
        kTilt.style.setProperty("--rx", ((.5 - y) * 12).toFixed(2) + "deg");
        kTilt.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
        kTilt.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      });
    });
    deret.addEventListener("pointerout", e => { const k = e.target.closest(".pg-k"); if (k && !k.contains(e.relatedTarget)) { k.style.removeProperty("--rx"); k.style.removeProperty("--ry"); } });
  }
  deret.addEventListener("click", e => { const k = e.target.closest(".pg-k"); if (k) bukaKartu(+k.dataset.p); });
  S.querySelectorAll(".pg-panah").forEach(b => b.onclick = () => (+b.dataset.arah > 0 ? bukaKartu(1) : mundur()));
  $(".pg-mulai").onclick = () => SLIDE[urut[0]].buka();
  $(".pg-putar").onclick = () => mulaiSesi(acak(soalTopik(SLIDE[urut[0]].t)).slice(0, 10), { tipe: "random" });
  S.addEventListener("keydown", e => { if (e.key === "ArrowRight") bukaKartu(1); else if (e.key === "ArrowLeft") mundur(); });
  garis.addEventListener("animationend", () => bukaKartu(1));

  // jeda putar otomatis: kursor/fokus di panggung, tab tersembunyi, atau panggung di luar layar
  const jeda = new Set();
  const atur = (alasan, on) => { on ? jeda.add(alasan) : jeda.delete(alasan); S.classList.toggle("pg-jeda", jeda.size > 0); };
  S.addEventListener("pointerenter", () => atur("kursor", true));
  S.addEventListener("pointerleave", () => atur("kursor", false));
  S.addEventListener("focusin", () => atur("fokus", true));
  S.addEventListener("focusout", e => { if (!S.contains(e.relatedTarget)) atur("fokus", false); });
  document.addEventListener("visibilitychange", () => atur("tab", document.hidden));
  if ("IntersectionObserver" in window) new IntersectionObserver(([e]) => atur("layar", !e.isIntersecting), { threshold: .35 }).observe(S);

  latar.src = URL_[0]; zoom();
  isiTeks(true); isiKartu(true); mulaiProgres();
  S.tabIndex = -1;
})();
