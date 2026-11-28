/* Service worker KodeQuiz — membuat aplikasi bisa dibuka OFFLINE setelah
   dikunjungi sekali lewat http(s) (Netlify / GitHub Pages).
   Dibuat otomatis; ganti VERSI setiap rilis agar cache diperbarui. */
const VERSI = "kodequiz-v6-202611280925";
const BUKU = "kodequiz-buku";   // cache PDF terpisah: tidak terhapus saat aplikasi diperbarui
const ASET = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/runner.css",
  "css/style.css",
  "js/app.js",
  "js/data/buku-info.js",
  "js/data/dataset.js",
  "js/data/jalur.js",
  "js/data/kamus-koding.js",
  "js/data/kamus-py.js",
  "js/data/kasus.js",
  "js/data/kunci-gambar.js",
  "js/data/pustaka.js",
  "js/fitur/buku.js",
  "js/fitur/editor-bantu.js",
  "js/fitur/pdf-baca.js",
  "js/fitur/proyek-blok.js",
  "js/fitur/proyek-data.js",
  "js/fitur/proyek.js",
  "js/fitur/pustaka.js",
  "js/fitur/py-lab.js",
  "js/fitur/rayakan.js",
  "js/fitur/runner.js",
  "js/fitur/sql-lab.js",
  "js/soal/lab-python.js",
  "js/soal/materi-2x-1.js",
  "js/soal/materi-2x-2.js",
  "js/soal/materi-2x-3.js",
  "js/soal/materi-2x-4.js",
  "js/soal/materi-2x-5.js",
  "js/soal/materi-2x-6.js",
  "js/soal/materi-2x-7.js",
  "js/soal/materi-2x-8.js",
  "js/soal/materi-2x-9.js",
  "js/soal/soal-bi.js",
  "js/soal/soal-coding-test.js",
  "js/soal/soal-css.js",
  "js/soal/soal-ct-2.js",
  "js/soal/soal-cyber-2.js",
  "js/soal/soal-cyber-3.js",
  "js/soal/soal-cyber-4.js",
  "js/soal/soal-cyber.js",
  "js/soal/soal-da.js",
  "js/soal/soal-dads-3.js",
  "js/soal/soal-data-3.js",
  "js/soal/soal-ds.js",
  "js/soal/soal-erp-2.js",
  "js/soal/soal-erp-3.js",
  "js/soal/soal-erp-hitung.js",
  "js/soal/soal-erp.js",
  "js/soal/soal-excel-2.js",
  "js/soal/soal-excel-3.js",
  "js/soal/soal-excel.js",
  "js/soal/soal-git.js",
  "js/soal/soal-html.js",
  "js/soal/soal-java-2.js",
  "js/soal/soal-java.js",
  "js/soal/soal-jp-3.js",
  "js/soal/soal-js-2.js",
  "js/soal/soal-js-3.js",
  "js/soal/soal-js-4.js",
  "js/soal/soal-js-5.js",
  "js/soal/soal-js-6.js",
  "js/soal/soal-js.js",
  "js/soal/soal-karier-2.js",
  "js/soal/soal-karier.js",
  "js/soal/soal-kasus-sql.js",
  "js/soal/soal-latihan-ekstra.js",
  "js/soal/soal-php-2.js",
  "js/soal/soal-php.js",
  "js/soal/soal-python-2.js",
  "js/soal/soal-python-3.js",
  "js/soal/soal-python-4.js",
  "js/soal/soal-python-5.js",
  "js/soal/soal-python-6.js",
  "js/soal/soal-python-7.js",
  "js/soal/soal-python.js",
  "js/soal/soal-siber.js",
  "js/soal/soal-sql-2.js",
  "js/soal/soal-sql-3.js",
  "js/soal/soal-sql.js",
  "js/soal/soal-statistik.js",
  "js/soal/soal-web-2.js",
  "js/soal/soal-web-3.js",
  "js/soal/soal-web-4.js",
  "js/soal/soal-web-5.js",
  "vendor/sql-asm.js",
  "vendor/pdfjs/pdf.min.js",
  "vendor/pdfjs/pdf.worker.min.js",
  "ikon/ikon-192.png",
  "ikon/ikon-512.png",
  "ikon/ikon.svg",
  "atelier/atelier.css",
  "atelier/atelier.js",
  "atelier/belajar.css",
  "atelier/dingin.css",
  "atelier/gerak.css",
  "atelier/gerak.js",
  "atelier/holst.css",
  "atelier/latar.css",
  "atelier/latar.js",
  "atelier/lembah.css",
  "atelier/musik.js",
  "atelier/nyaman.js",
  "atelier/panggung.css",
  "atelier/panggung.js",
  "atelier/theme.css",
  "atelier/theme.js",
  "jalur/jalur.css",
  "jalur/jalur.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSI).then(c => c.addAll(ASET)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSI && k !== VERSI + "-font" && k !== BUKU).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Font Google: cache-first supaya tampilan tetap rapi saat offline
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(VERSI + "-font").then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === "opaque") c.put(req, res.clone());
      return res;
    }).catch(() => caches.match(req)));
    return;
  }
  if (url.origin !== location.origin) return;
  // Buku PDF: disimpan di cache BUKU (stale-while-revalidate)
  if (url.pathname.endsWith(".pdf")) {
    e.respondWith(caches.open(BUKU).then(async c => {
      const hit = await c.match(req, { ignoreSearch: true });
      const jaringan = fetch(req).then(res => { if (res.status === 200) c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || jaringan;
    }));
    return;
  }
  // Aset sendiri: stale-while-revalidate (cepat dari cache, diperbarui di belakang)
  e.respondWith(caches.open(VERSI).then(async c => {
    const hit = await c.match(req, { ignoreSearch: true });
    const jaringan = fetch(req).then(res => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || jaringan;
  }));
});
