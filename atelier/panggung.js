/* KodeQuiz — "Panggung" beranda (28 November 2026), mengikuti pola referensi "Interactive Website • Cards Opening":
   latar layar penuh, judul besar kapital ramping di kiri, deretan kartu potret di kanan; kartu yang diklik "membuka"
   menjadi latar, antrean bergeser, tombol panah bulat, garis progres, nomor slide besar.
   Gambar: foto HD Unsplash (permintaan pengguna 28 Nov 2026), WebP 1920 px untuk latar dan 800 px untuk kartu.
   Animasi hanya clip-path pada satu lapisan, transform, dan opacity.
   Putar otomatis berhenti saat kursor/fokus di panggung, tab tersembunyi, panggung tidak terlihat, atau prefers-reduced-motion. */
(function () {
  const S = document.getElementById("panggung");
  if (!S || typeof BANK === "undefined") return;
  const KURANG_GERAK = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DURASI = 8000;

  /* ---------- isi slide: 3 jalur karier + 5 topik inti ---------- */
  const J = typeof JALUR !== "undefined" ? JALUR : {};
  const soal = t => (BANK[t] || []).length.toLocaleString("id-ID"), bab = t => (MATERI[t] || []).length;
  const jalur = (t, judul) => ({ t, judul, meta: `Jalur karier · ${J[t] ? J[t].tahap.length : ""} tahap · ${soal(t)} soal`, ket: J[t] ? J[t].slogan : "", buka: () => go("jalur", { j: t }) });
  const topik = (t, judul, meta, ket) => ({ t, judul, meta: `${meta} · ${bab(t)} bab · ${soal(t)} soal`, ket, buka: () => go("topik", { t }) });
  const SLIDE = [
    jalur("da", ["Data", "Analyst"]),
    jalur("ds", ["Data", "Scientist"]),
    jalur("cyber", ["Cyber", "Security"]),
    topik("python", ["Python"], "Bahasa prioritas", "Dari dasar sampai OOP, pandas, dan otomasi data. Setiap bab punya Lab menulis kode dengan petunjuk per langkah."),
    topik("sql", ["SQL"], "Bahasa prioritas", "JOIN, GROUP BY, CTE, dan window function, langsung dicoba di Lab SQL tanpa memasang apa pun."),
    topik("excel", ["Excel"], "Data & bisnis", "SUMIFS, XLOOKUP, pivot, dan dynamic array untuk laporan yang rapi dan cepat."),
    topik("erp", ["ERP &", "Odoo"], "Data & bisnis", "Proses bisnis sampai developer Odoo 17, ditambah Lab Hitung pricelist, pajak, valuasi, dan penyusutan."),
    topik("js", ["Java", "Script"], "Bahasa prioritas", "DOM, event, async, sampai React, dengan tombol Run untuk mencoba kode di tempat."),
  ];
  // foto HD dari Unsplash (Unsplash License: bebas dipakai, termasuk situs publik); daftar sumber di atelier/foto/SUMBER.md
  const URL_ = SLIDE.map(s => `atelier/foto/${s.t}-1920.webp`), KECIL = SLIDE.map(s => `atelier/foto/${s.t}-800.webp`);

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
        <img src="${KECIL[i]}" alt="" loading="lazy" decoding="async"><span class="pg-k-meta">${esc(s.meta.split(" · ")[0])}</span><b>${s.judul.map(esc).join("<br>")}</b></button>`;
    }).join("");
  }
  function zoom() { if (KURANG_GERAK) return; latar.classList.remove("pg-zoom"); void latar.offsetWidth; latar.classList.add("pg-zoom"); }
  function mulaiProgres() {
    if (KURANG_GERAK) return;
    garis.classList.remove("jalan"); void garis.offsetWidth; garis.classList.add("jalan");
  }
  function selesai() { latar.src = URL_[urut[0]]; zoom(); new Image().src = URL_[urut[1]];   /* pramuat foto berikutnya agar buka kartu tidak menunggu */ buka.classList.remove("tampil"); buka.style.clipPath = ""; isiKartu(true); sibuk = false; mulaiProgres(); }

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
