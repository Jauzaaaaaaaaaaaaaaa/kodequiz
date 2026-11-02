/* Service worker KodeQuiz — membuat aplikasi bisa dibuka OFFLINE setelah
   dikunjungi sekali lewat http(s) (Netlify / GitHub Pages).
   Dibuat otomatis; ganti VERSI setiap rilis agar cache diperbarui. */
const VERSI = "kodequiz-v4-202611021800";
const BUKU = "kodequiz-buku";   // cache PDF terpisah: tidak terhapus saat aplikasi diperbarui
const ASET = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/style.css",
  "atelier/atelier.css",
  "atelier/atelier.js",
  "atelier/theme.css",
  "atelier/theme.js",
  "js/app.js",
  "js/fitur/buku.js",
  "js/fitur/pdf-baca.js",
  "js/fitur/proyek-blok.js",
  "js/fitur/proyek-data.js",
  "js/fitur/proyek.js",
  "js/fitur/rayakan.js",
  "js/fitur/sql-lab.js",
  "js/data/buku-info.js",
  "js/data/dataset.js",
  "js/soal/soal-bi.js",
  "js/soal/soal-css.js",
  "js/soal/soal-erp.js",
  "js/soal/soal-excel-2.js",
  "js/soal/soal-excel.js",
  "js/soal/soal-html.js",
  "js/soal/soal-java.js",
  "js/soal/soal-js-2.js",
  "js/soal/soal-js.js",
  "js/soal/soal-karier-2.js",
  "js/soal/soal-karier.js",
  "js/soal/soal-php.js",
  "js/soal/soal-python-2.js",
  "js/soal/soal-python.js",
  "js/soal/soal-sql-2.js",
  "js/soal/soal-sql.js",
  "js/soal/soal-statistik.js",
  "js/soal/soal-web-2.js",
  "vendor/sql-asm.js",
  "vendor/pdfjs/pdf.min.js",
  "vendor/pdfjs/pdf.worker.min.js",
  "ikon/ikon-192.png",
  "ikon/ikon-512.png",
  "ikon/ikon.svg"
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
