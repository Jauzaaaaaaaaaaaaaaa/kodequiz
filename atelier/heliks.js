/* KodeQuiz — "Heliks topik" (lihat heliks.css). Gulir = memutar cincin satu kartu; kartu dikelompokkan per 4.
   Per frame hanya membaca scrollY dan menulis satu transform; posisi bagian dihitung ulang hanya saat ukuran layar berubah. */
(function () {
  const S = document.getElementById("heliks");
  if (!S || typeof TOPIK_INFO === "undefined") return;
  const DATAR = () => matchMedia("(max-width: 760px), (max-height: 560px), (prefers-reduced-motion: reduce)").matches;
  const WARNA = [["#849AAD", "#2E3A45"], ["#A1947F", "#3E2E2B"], ["#5E1C23", "#1F1A16"], ["#B1C7D4", "#4C6274"], ["#605246", "#1C1412"]];
  const adegan = window.KQ_ADEGAN || {};
  const T = Object.keys(TOPIK_INFO).filter(t => typeof BANK !== "undefined" && BANK[t]);
  const n = T.length, GRUP = Math.ceil(n / 4);
  const buka = t => TOPIK_INFO[t].grup === "jalur" ? go("jalur", { j: t }) : go("topik", { t });

  S.style.setProperty("--hx-n", n);
  S.innerHTML = `<div class="hx-lekat">
      <div class="hx-info">
        <p class="eyebrow">Semua materi</p>
        <h2 class="sec-judul">Jelajahi ${n} topik</h2>
        <div class="hx-hitung" aria-hidden="true"><b>01</b><span>/ ${String(n).padStart(2, "0")}</span></div>
        <p class="hx-grup">Kelompok 1 dari ${GRUP}</p>
        <div class="hx-titik" aria-hidden="true">${Array.from({ length: GRUP }, () => "<i></i>").join("")}</div>
        <p class="hx-petunjuk">Gulir untuk memutar kartu satu per satu, empat kartu per kelompok.</p>
        <button class="hx-lewati" type="button">Lewati bagian ini ↓</button>
      </div>
      <div class="hx-ruang"><span class="hx-tiang" aria-hidden="true"></span><div class="hx-cincin" role="list"></div></div>
    </div>`;
  const cincin = S.querySelector(".hx-cincin"), hitung = S.querySelector(".hx-hitung b"), grupEl = S.querySelector(".hx-grup"), titik = [...S.querySelectorAll(".hx-titik i")];
  cincin.innerHTML = T.map((t, i) => {
    const I = TOPIK_INFO[t], [a, b] = WARNA[i % WARNA.length];
    const bg = adegan[t] ? `<img src="${adegan[t]}" alt="" loading="lazy" decoding="async">` : "";
    return `<button class="hx-k" type="button" role="listitem" data-i="${i}" style="--i:${i};--hx-bg:linear-gradient(135deg, ${a}, ${b})">
      ${bg}<span class="hx-isi"><span class="hx-kode">${String(i + 1).padStart(2, "0")} · KELOMPOK ${Math.floor(i / 4) + 1}</span>
      <span class="hx-ikon" aria-hidden="true">${esc(I.ikon || "")}</span>
      <b class="hx-nama" data-nama="${esc(I.nama)}">${esc(I.nama)}</b>
      <span class="hx-ket">${esc(I.ket || "")}</span>
      <span class="hx-bawah"><span><b>${(MATERI[t] || []).length}</b> bab · <b>${BANK[t].length.toLocaleString("id-ID")}</b> soal</span><span>Buka →</span></span></span></button>`;
  }).join("");
  const kartu = [...cincin.children];
  cincin.addEventListener("click", e => { const k = e.target.closest(".hx-k"); if (k) buka(T[+k.dataset.i]); });

  // judul "terurai": huruf acak berganti menjadi huruf asli dari kiri ke kanan (satu elemen, ±450 ms)
  const ACAK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*/<>";
  let urai = 0;
  function uraikan(el) {
    const asli = el.dataset.nama, mulai = performance.now(), id = ++urai;
    const langkah = t => {
      if (id !== urai) { el.textContent = asli; return; }
      const k = Math.min(1, (t - mulai) / 450), tetap = Math.floor(k * asli.length);
      el.textContent = asli.slice(0, tetap) + asli.slice(tetap).replace(/\S/g, () => ACAK[(Math.random() * ACAK.length) | 0]);
      if (k < 1) requestAnimationFrame(langkah); else el.textContent = asli;
    };
    requestAnimationFrame(langkah);
  }

  let aktif = -1;
  function setAktif(a) {
    if (a === aktif) return;
    aktif = a;
    kartu.forEach((k, i) => { const d = Math.abs(i - a); k.classList.toggle("dekat", d <= 4); k.classList.toggle("aktif", d === 0); k.tabIndex = d === 0 ? 0 : -1; });
    hitung.textContent = String(a + 1).padStart(2, "0");
    const g = Math.floor(a / 4);
    grupEl.textContent = `Kelompok ${g + 1} dari ${GRUP} · ${esc(TOPIK_INFO[T[a]].nama)}`;
    titik.forEach((x, i) => x.classList.toggle("on", i === g));
    uraikan(kartu[a].querySelector(".hx-nama"));
  }

  // gulir → p (0..n-1), dihaluskan dengan lerp; loop berhenti sendiri saat sudah sampai
  let atas = 0, panjang = 1, target = 0, p = 0, jalan = false, datar = false, ukW = 380, ukH = 243;
  function ukur() {
    datar = DATAR();
    S.classList.toggle("datar", datar);
    if (datar) { cincin.style.transform = ""; kartu.forEach(k => { k.classList.add("dekat", "aktif"); k.tabIndex = 0; }); aktif = -1; return; }
    const r = S.getBoundingClientRect();
    atas = r.top + scrollY - 72; panjang = Math.max(1, S.offsetHeight - (innerHeight - 72));
    ukW = kartu[0].offsetWidth || 380; ukH = kartu[0].offsetHeight || 243;
    baca(); p = target; aktif = -1; putar();
  }
  function baca() { target = Math.min(n - 1, Math.max(0, (scrollY - atas) / panjang * (n - 1))); }
  function putar() {
    p += (target - p) * .16;
    if (Math.abs(target - p) < .002) { p = target; jalan = false; }
    cincin.style.transform = `translate3d(0, ${(p * ukH * .36).toFixed(1)}px, ${(-ukW * .85).toFixed(1)}px) rotateY(${(-p * 50).toFixed(2)}deg)`;
    setAktif(Math.round(p));
    if (jalan) requestAnimationFrame(putar);
  }
  addEventListener("scroll", () => {
    if (datar || !S.offsetParent) return;           // layar beranda tersembunyi → diam
    baca();
    if (!jalan) { jalan = true; requestAnimationFrame(putar); }
  }, { passive: true });
  let tunda;
  addEventListener("resize", () => { clearTimeout(tunda); tunda = setTimeout(ukur, 150); });
  S.querySelector(".hx-lewati").onclick = () => scrollTo({ top: S.getBoundingClientRect().bottom + scrollY - 60, behavior: "smooth" });
  S.addEventListener("keydown", e => {
    if (datar || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
    const a = Math.max(0, Math.min(n - 1, aktif + (e.key === "ArrowRight" ? 1 : -1)));
    scrollTo({ top: atas + a / (n - 1) * panjang, behavior: "smooth" });
    requestAnimationFrame(() => kartu[a].focus({ preventScroll: true }));
  });
  // beranda bisa tersembunyi saat dimuat (buka #latihan dll.): ukur ulang setiap kali bagian ini mulai terlihat
  new IntersectionObserver(([e]) => { if (e.isIntersecting) ukur(); }).observe(S);
  ukur();
})();
