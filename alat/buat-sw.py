# Membuat ulang sw.js (daftar file untuk mode offline/PWA). Jalankan setiap kali menambah file JS/CSS.
# Pakai:  python alat/buat-sw.py
import os, json, sys, datetime
ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
aset = ["./", "index.html", "manifest.webmanifest"]
for d in ["css", "js", "vendor", "ikon", "atelier"]:
    for dp, _, fs in os.walk(os.path.join(ROOT, d)):
        for f in sorted(fs):
            if f.endswith((".css", ".js", ".png", ".svg")):
                aset.append(os.path.relpath(os.path.join(dp, f), ROOT).replace(os.sep, "/"))
versi = "kodequiz-v4-" + datetime.datetime.now().strftime("%Y%m%d%H%M")
sw = f'''/* Service worker KodeQuiz — membuat aplikasi bisa dibuka OFFLINE setelah
   dikunjungi sekali lewat http(s) (Netlify / GitHub Pages).
   Dibuat otomatis; ganti VERSI setiap rilis agar cache diperbarui. */
const VERSI = "{versi}";
const BUKU = "kodequiz-buku";   // cache PDF terpisah: tidak terhapus saat aplikasi diperbarui
const ASET = {json.dumps(aset, indent=2)};

self.addEventListener("install", e => {{
  e.waitUntil(caches.open(VERSI).then(c => c.addAll(ASET)).then(() => self.skipWaiting()));
}});
self.addEventListener("activate", e => {{
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSI && k !== VERSI + "-font" && k !== BUKU).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
}});
self.addEventListener("fetch", e => {{
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Font Google: cache-first supaya tampilan tetap rapi saat offline
  if (/fonts\\.(googleapis|gstatic)\\.com$/.test(url.hostname)) {{
    e.respondWith(caches.open(VERSI + "-font").then(async c => {{
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === "opaque") c.put(req, res.clone());
      return res;
    }}).catch(() => caches.match(req)));
    return;
  }}
  if (url.origin !== location.origin) return;
  // Buku PDF: disimpan di cache BUKU (stale-while-revalidate)
  if (url.pathname.endsWith(".pdf")) {{
    e.respondWith(caches.open(BUKU).then(async c => {{
      const hit = await c.match(req, {{ ignoreSearch: true }});
      const jaringan = fetch(req).then(res => {{ if (res.status === 200) c.put(req, res.clone()); return res; }}).catch(() => hit);
      return hit || jaringan;
    }}));
    return;
  }}
  // Aset sendiri: stale-while-revalidate (cepat dari cache, diperbarui di belakang)
  e.respondWith(caches.open(VERSI).then(async c => {{
    const hit = await c.match(req, {{ ignoreSearch: true }});
    const jaringan = fetch(req).then(res => {{ if (res.ok) c.put(req, res.clone()); return res; }}).catch(() => hit);
    return hit || jaringan;
  }}));
}});
'''
open(os.path.join(ROOT, "sw.js"), "w").write(sw)
print(len(aset), "aset", versi)
