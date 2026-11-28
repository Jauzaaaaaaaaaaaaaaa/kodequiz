/* KodeQuiz — gerak saat menggulir (28 November 2026): bagian, kartu, dan isi materi muncul bertahap ketika masuk layar.
   Berlaku juga untuk elemen yang dibuat belakangan oleh app.js/jalur.js (diawasi MutationObserver, diproses sekali per frame).
   Setelah selesai muncul, kelas dilepas sehingga transisi hover bawaan kartu kembali normal.
   Mati sendiri bila prefers-reduced-motion atau IntersectionObserver tidak ada (konten langsung tampil). */
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window) || !("MutationObserver" in window)) return;
  const KARTU = ".kartu-t, .bab-item, .jalur-kartu, .sesi-item, .metode-item, .cara-item, .kasus-kartu, .fitur";
  const PILIH = [KARTU, ".sec-judul", ".sec-sub", ".sesi-item", ".jalur-kartu", ".metode-item", ".cara-item", ".pernyataan", ".level-kartu",
    ".hero-ringkas .hero-sub", ".tahap", ".kasus-kartu", ".capstone", ".km-angka", ".grup-jalur",
    ".materi-kotak > h4", ".materi-kotak > pre", ".materi-kotak > table", ".materi-kotak > details", ".materi-kotak > ol.cek-paham"].join(",");
  const sudah = new WeakSet();
  const io = new IntersectionObserver(es => {
    let i = 0, iK = 0;
    // urutkan menurut posisi (atas→bawah, kiri→kanan) agar jeda kartu mengikuti urutan baca
    es.filter(e => e.isIntersecting).sort((x, y) => (x.boundingClientRect.top - y.boundingClientRect.top) || (x.boundingClientRect.left - y.boundingClientRect.left)).forEach(e => {
      const el = e.target;
      io.unobserve(el);
      // kartu dihitung terpisah dan berkelompok per 4 (kartu ke-5 mulai lagi tanpa jeda); judul/teks lain berjeda biasa
      el.style.setProperty("--gr-i", el.classList.contains("gr-kartu") ? iK++ % 4 : Math.min(i++, 4));
      el.classList.add("gr-in");
      const lepas = () => { el.classList.remove("gr", "gr-in", "gr-kartu"); el.style.removeProperty("--gr-i"); };
      // kartu: tunggu animasi lempar selesai; elemen lain: tunggu transisi transform (opacity lebih cepat selesai)
      const jenis = el.classList.contains("gr-kartu") ? "animationend" : "transitionend";
      const akhir = ev => { if (ev.target === el && (jenis === "animationend" || ev.propertyName === "transform")) { el.removeEventListener(jenis, akhir); lepas(); } };
      el.addEventListener(jenis, akhir);
      setTimeout(lepas, 2200);   // pengaman bila transitionend tidak datang
    });
  }, { threshold: .06, rootMargin: "0px 0px -4% 0px" });

  const daftar = akar => {
    const els = akar.matches && akar.matches(PILIH) ? [akar] : [];
    if (akar.querySelectorAll) els.push(...akar.querySelectorAll(PILIH));
    els.forEach(el => {
      if (sudah.has(el)) return;
      if (el.classList.contains("muncul")) { if (!el.matches(KARTU)) return; el.classList.remove("muncul"); }   // kartu: ganti animasi muncul biasa dengan masuk 3D
      sudah.add(el); el.classList.add("gr"); if (el.matches(KARTU)) el.classList.add("gr-kartu"); io.observe(el);
    });
  };
  let antre = [], dijadwal = false;
  const proses = () => { dijadwal = false; const a = antre; antre = []; a.forEach(daftar); };
  const mulai = () => {
    document.documentElement.classList.add("gr-siap");
    daftar(document.body);
    new MutationObserver(ms => {
      ms.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) antre.push(n); }));
      if (antre.length && !dijadwal) { dijadwal = true; requestAnimationFrame(proses); setTimeout(() => dijadwal && proses(), 120); }
    }).observe(document.querySelector("main") || document.body, { childList: true, subtree: true });
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", mulai) : mulai();
})();
