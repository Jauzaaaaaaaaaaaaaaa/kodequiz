/* KodeQuiz — gerak saat menggulir (28 November 2026): bagian, kartu, dan isi materi muncul bertahap ketika masuk layar.
   Berlaku juga untuk elemen yang dibuat belakangan oleh app.js/jalur.js (diawasi MutationObserver, diproses sekali per frame).
   Setelah selesai muncul, kelas dilepas sehingga transisi hover bawaan kartu kembali normal.
   Mati sendiri bila prefers-reduced-motion atau IntersectionObserver tidak ada (konten langsung tampil). */
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window) || !("MutationObserver" in window)) return;
  const PILIH = [".sec-judul", ".sec-sub", ".sesi-item", ".jalur-kartu", ".metode-item", ".cara-item", ".pernyataan", ".level-kartu",
    ".hero-ringkas .hero-sub", ".tahap", ".kasus-kartu", ".capstone", ".km-angka", ".grup-jalur",
    ".materi-kotak > h4", ".materi-kotak > pre", ".materi-kotak > table", ".materi-kotak > details", ".materi-kotak > ol.cek-paham"].join(",");
  const sudah = new WeakSet();
  const io = new IntersectionObserver(es => {
    let i = 0;
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      io.unobserve(el);
      el.style.setProperty("--gr-i", Math.min(i++, 6));
      el.classList.add("gr-in");
      const lepas = () => { el.classList.remove("gr", "gr-in"); el.style.removeProperty("--gr-i"); };
      el.addEventListener("transitionend", lepas, { once: true });
      setTimeout(lepas, 1800);   // pengaman bila transitionend tidak datang
    });
  }, { threshold: .06, rootMargin: "0px 0px -4% 0px" });

  const daftar = akar => {
    const els = akar.matches && akar.matches(PILIH) ? [akar] : [];
    if (akar.querySelectorAll) els.push(...akar.querySelectorAll(PILIH));
    els.forEach(el => { if (sudah.has(el) || el.classList.contains("muncul")) return; sudah.add(el); el.classList.add("gr"); io.observe(el); });
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
