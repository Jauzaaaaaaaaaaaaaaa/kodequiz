/* ============================================================
   📚 Pembaca buku PDF di dalam website (Book)
   • Memakai PDF.js (vendor/pdfjs, lisensi Apache-2.0) agar PDF bisa
     dibaca di HP — <iframe> PDF tidak berjalan di Chrome Android/Safari iOS
   • Hanya halaman di sekitar layar yang digambar (hemat memori HP)
   • Daftar isi per bab, lompat ke Uji Diri / Kunci, link di PDF bisa diketuk
   • Zoom, mode malam, ingat halaman terakhir, bisa offline (via service worker)
   ============================================================ */

const PDFV = {
  doc: null, id: null, set: null, versi: 0,
  hal: 1, total: 0, rasio: 1.78, lebar: 0, tinggi: 0, celah: 14,
  skala: 1, dest: {}, bab: [], antre: [], sibuk: false, cache: {}, simpanTimer: null, yLalu: 0,
};
const SKALA_PDF = [1, 1.25, 1.5, 2, 2.5];

function dataPdf(id) {
  const b = dataBuku();
  b.pdf = b.pdf || {};
  b.pdf[id] = b.pdf[id] || { hal: 1, maks: 0, total: 0 };
  return b.pdf[id];
}
const infoBukuPdf = id => (typeof BUKU_INFO !== "undefined" && BUKU_INFO[id]) || null;
function halPdfDibaca() {
  const b = dataBuku();
  return Object.values(b.pdf || {}).reduce((n, x) => n + (x.maks || 0), 0);
}

/* ---------- memuat PDF.js & file PDF ---------- */
function muatPdfJs() {
  if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  return new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = "vendor/pdfjs/pdf.min.js";
    s.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = "vendor/pdfjs/pdf.worker.min.js";
      res(window.pdfjsLib);
    };
    s.onerror = () => rej(new Error("Pembaca PDF (vendor/pdfjs) gagal dimuat."));
    document.head.appendChild(s);
  });
}
async function ambilPdf(url, kemajuan) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("File tidak ditemukan (" + res.status + ")");
  const total = +res.headers.get("content-length") || 0;
  if (!res.body || !res.body.getReader || !total) return new Uint8Array(await res.arrayBuffer());
  const r = res.body.getReader(), potong = [];
  let dapat = 0;
  for (;;) {
    const { done, value } = await r.read();
    if (done) break;
    potong.push(value); dapat += value.length;
    kemajuan(dapat / total);
  }
  const out = new Uint8Array(dapat);
  let pos = 0;
  potong.forEach(c => { out.set(c, pos); pos += c.length; });
  return out;
}
function statusPdf(html) {
  const st = el("pdf-status");
  st.innerHTML = html;
  st.classList.toggle("tersembunyi", !html);
}

/* ---------- membuka buku ---------- */
async function bukaPdf(id, halMinta) {
  const set = BUKU_SET.find(s => s.id === id) || BUKU_SET[0];
  const dp = dataPdf(set.id);
  const b = dataBuku();
  b.terakhirPdf = { id: set.id, waktu: Date.now() };
  simpan();
  el("pdf-judul-bab").textContent = `Buku ${set.id} — ${set.judul}`;
  el("pdf-judul-bab").dataset.k = "";
  el("pdf-aksi-bab").innerHTML = "";
  el("pdf-unduh").href = set.file;
  el("pdf-alat").classList.remove("sembunyi");
  terapkanMalamPdf();

  if (PDFV.id === set.id && PDFV.doc) {           // buku yang sama masih di memori
    await Promise.resolve();
    tataLetakPdf();
    lompatHal(halMinta || dp.hal || 1, false);
    return;
  }
  PDFV.id = set.id; PDFV.set = set; PDFV.doc = null; PDFV.versi++;
  el("pdf-halaman").innerHTML = "";
  statusPdf(`<div class="pdf-muat"><b>📖 Membuka Buku ${set.id}…</b><div class="mini-bar"><div id="pdf-muat-bar" style="width:4%"></div></div><small id="pdf-muat-ket">menyiapkan pembaca</small></div>`);
  try {
    let doc = PDFV.cache[set.id];
    if (!doc) {
      await muatPdfJs();
      const data = await ambilPdf(set.file, p => {
        const bar = el("pdf-muat-bar"); if (bar) bar.style.width = Math.max(4, p * 100) + "%";
        const k = el("pdf-muat-ket"); if (k) k.textContent = `mengunduh ${Math.round(p * 100)}%`;
      });
      if (PDFV.id !== set.id) return;                // pengguna sudah pindah buku
      doc = await window.pdfjsLib.getDocument({ data, isEvalSupported: false }).promise;
      // simpan maksimal 2 buku di memori
      const kunci = Object.keys(PDFV.cache);
      if (kunci.length >= 2) { PDFV.cache[kunci[0]].destroy(); delete PDFV.cache[kunci[0]]; }
      PDFV.cache[set.id] = doc;
    }
    if (PDFV.id !== set.id) return;
    PDFV.doc = doc;
    PDFV.total = doc.numPages;
    const p1 = await doc.getPage(1), v = p1.getViewport({ scale: 1 });
    PDFV.rasio = v.height / v.width;
    dp.total = doc.numPages; simpan();
    await petakanBab(doc, set);
    statusPdf("");
    el("pdf-total").textContent = "/ " + PDFV.total;
    el("pdf-input").max = PDFV.total;
    tataLetakPdf();
    lompatHal(halMinta || dp.hal || 1, false);
  } catch (e) {
    const lokal = location.protocol === "file:";
    statusPdf(`<div class="pdf-muat pdf-gagal"><b>Buku belum bisa dibuka di sini.</b>
      <p>${lokal
        ? "Pembaca PDF di dalam website butuh dibuka lewat alamat web — misalnya setelah di-deploy ke <b>Netlify</b>, atau dengan server lokal (<code>python -m http.server</code>)."
        : esc(e.message || "Terjadi kesalahan saat memuat PDF.") + " Periksa koneksi, lalu coba lagi."}</p>
      <p>Sementara itu, kamu bisa membuka file PDF-nya langsung:</p>
      <a class="btn btn-utama btn-kecil" href="${set.file}" target="_blank" rel="noopener">📄 Buka PDF Buku ${set.id}</a></div>`);
  }
}

/* nama tujuan di PDF: c-<topik>, c-<topik>-<bab>, u-… (Uji Diri), k-… (Kunci), c-lab */
async function petakanBab(doc, set) {
  PDFV.dest = {};
  try {
    const d = await doc.getDestinations();
    await Promise.all(Object.keys(d).map(async nama => {
      try { PDFV.dest[nama] = (await doc.getPageIndex(d[nama][0])) + 1; } catch (e) { /* abaikan */ }
    }));
  } catch (e) { /* PDF tanpa tujuan bernama */ }
  PDFV.bab = [];
  set.topik.forEach(t => {
    MATERI[t].forEach((b, i) => {
      const id = `${t}-${b.k}`;
      if (PDFV.dest["c-" + id]) PDFV.bab.push({ t, i, judul: b.judul, hal: PDFV.dest["c-" + id], soal: PDFV.dest["u-" + id], kunci: PDFV.dest["k-" + id] });
    });
    if (t === "sql" && PDFV.dest["c-lab"]) PDFV.bab.push({ t, i: -1, judul: "Lampiran: Tantangan Lab SQL", hal: PDFV.dest["c-lab"] });
  });
  PDFV.bab.sort((a, b) => a.hal - b.hal);
}
const babDiHal = n => PDFV.bab.filter(b => b.hal <= n).pop() || null;

/* ---------- tata letak & menggambar halaman ---------- */
function tataLetakPdf() {
  const wadah = el("pdf-gulir");
  const dasar = Math.min(wadah.clientWidth || 360, 700);
  PDFV.lebar = Math.round(dasar * PDFV.skala);
  PDFV.tinggi = Math.round(PDFV.lebar * PDFV.rasio);
  PDFV.versi++;
  PDFV.antre = [];
  const hal = el("pdf-halaman");
  hal.style.width = PDFV.lebar + "px";
  if (hal.children.length !== PDFV.total) {
    hal.innerHTML = Array.from({ length: PDFV.total }, (_, i) => `<div class="pdf-p" data-n="${i + 1}"><span class="pdf-no">${i + 1}</span></div>`).join("");
  }
  [...hal.children].forEach(d => {
    d.style.width = PDFV.lebar + "px"; d.style.height = PDFV.tinggi + "px";
    d.querySelectorAll("canvas,.pdf-link").forEach(x => x.remove());
    delete d.dataset.v;
  });
}
function halSekarang() {
  const r = el("pdf-halaman").getBoundingClientRect();
  const n = Math.floor((-r.top + innerHeight * 0.35) / (PDFV.tinggi + PDFV.celah)) + 1;
  return Math.max(1, Math.min(PDFV.total, n));
}
function gambarSekitar() {
  if (!PDFV.doc || !PDFV.total) return;
  const n = halSekarang();
  for (let i = Math.max(1, n - 1); i <= Math.min(PDFV.total, n + 2); i++) antreHal(i);
  // lepaskan kanvas yang jauh dari layar (hemat memori HP)
  [...el("pdf-halaman").children].forEach(d => {
    const k = +d.dataset.n;
    if ((k < n - 4 || k > n + 5) && d.dataset.v) { d.querySelectorAll("canvas,.pdf-link").forEach(x => x.remove()); delete d.dataset.v; }
  });
}
function antreHal(n) {
  const d = el("pdf-halaman").children[n - 1];
  if (!d || d.dataset.v == PDFV.versi || PDFV.antre.includes(n)) return;
  PDFV.antre.push(n);
  prosesAntre();
}
async function prosesAntre() {
  if (PDFV.sibuk) return;
  PDFV.sibuk = true;
  while (PDFV.antre.length) {
    const sekarang = halSekarang();
    PDFV.antre.sort((a, b) => Math.abs(a - sekarang) - Math.abs(b - sekarang));
    const n = PDFV.antre.shift();
    if (Math.abs(n - sekarang) > 5) continue;
    try { await gambarHal(n); } catch (e) { /* halaman dilewati */ }
  }
  PDFV.sibuk = false;
}
async function gambarHal(n) {
  const versi = PDFV.versi, doc = PDFV.doc;
  const d = el("pdf-halaman").children[n - 1];
  if (!d || !doc) return;
  const page = await doc.getPage(n);
  const v1 = page.getViewport({ scale: 1 });
  const skalaCss = PDFV.lebar / v1.width;
  const dpr = Math.min(window.devicePixelRatio || 1, 2, 1700 / PDFV.lebar);
  const vp = page.getViewport({ scale: skalaCss * dpr });
  const c = document.createElement("canvas");
  c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
  c.style.width = PDFV.lebar + "px"; c.style.height = PDFV.tinggi + "px";
  await page.render({ canvasContext: c.getContext("2d", { alpha: false }), viewport: vp }).promise;
  if (versi !== PDFV.versi || doc !== PDFV.doc) return;      // zoom/buku berubah saat menggambar
  d.querySelectorAll("canvas,.pdf-link").forEach(x => x.remove());
  d.appendChild(c);
  d.dataset.v = versi;
  // link di dalam PDF (daftar isi, "Lompat ke") → bisa diketuk
  try {
    const vpCss = page.getViewport({ scale: skalaCss });
    (await page.getAnnotations()).filter(a => a.subtype === "Link").forEach(a => {
      const [x1, y1, x2, y2] = vpCss.convertToViewportRectangle(a.rect);
      const link = document.createElement(a.url ? "a" : "button");
      link.className = "pdf-link";
      Object.assign(link.style, { left: Math.min(x1, x2) + "px", top: Math.min(y1, y2) + "px", width: Math.abs(x2 - x1) + "px", height: Math.abs(y2 - y1) + "px" });
      if (a.url) { link.href = a.url; link.target = "_blank"; link.rel = "noopener"; }
      else if (a.dest) {
        link.setAttribute("aria-label", "Lompat");
        link.onclick = async () => {
          let tujuan = a.dest;
          if (typeof tujuan === "string") { if (PDFV.dest[tujuan]) return lompatHal(PDFV.dest[tujuan]); tujuan = await doc.getDestination(tujuan); }
          if (tujuan) lompatHal((await doc.getPageIndex(tujuan[0])) + 1);
        };
      } else return;
      d.appendChild(link);
    });
  } catch (e) { /* tanpa link */ }
}

/* ---------- navigasi ---------- */
function lompatHal(n, halus = false) {
  PDFV.lompat = Date.now();                      // lompatan tidak menyembunyikan toolbar
  n = Math.max(1, Math.min(PDFV.total || 1, Math.round(n) || 1));
  const atas = el("pdf-halaman").getBoundingClientRect().top + scrollY;
  const offset = el("pdf-alat").offsetHeight + 8;
  scrollTo({ top: atas + (n - 1) * (PDFV.tinggi + PDFV.celah) - offset, behavior: halus && RAYA.efekAktif() ? "smooth" : "instant" });
  setTimeout(() => { perbaruiPdf(); gambarSekitar(); }, halus ? 350 : 30);
}
function perbaruiPdf() {
  if (!PDFV.doc || document.body.dataset.layar !== "pdf") return;
  const n = halSekarang();
  if (document.activeElement !== el("pdf-input")) el("pdf-input").value = n;
  el("pdf-bar-isi").style.width = (n / PDFV.total * 100) + "%";
  if (n !== PDFV.hal) {
    PDFV.hal = n;
    const dp = dataPdf(PDFV.id);
    dp.hal = n; dp.maks = Math.max(dp.maks || 0, n); dp.total = PDFV.total;
    clearTimeout(PDFV.simpanTimer);
    PDFV.simpanTimer = setTimeout(() => { simpan(); umumkanLencana(cekLencana()); }, 800);
  }
  const bab = babDiHal(n);
  const kunciBab = bab ? `${bab.judul}` : "";
  if (el("pdf-judul-bab").dataset.k !== kunciBab) {
    el("pdf-judul-bab").dataset.k = kunciBab;
    el("pdf-judul-bab").textContent = bab
      ? (bab.i >= 0 ? `📍 ${TOPIK_INFO[bab.t].nama} · Bab ${bab.i + 1}: ${bab.judul}` : `📍 ${bab.judul}`)
      : `Buku ${PDFV.set.id} — ${PDFV.set.judul}`;
    el("pdf-aksi-bab").innerHTML = bab && bab.i >= 0 ? `
      ${bab.soal ? `<button class="btn-mini" data-ke="${bab.soal}" title="Ke soal Uji Diri bab ini">🧠<span class="lbl"> Soal</span></button>` : ""}
      ${bab.kunci ? `<button class="btn-mini" data-ke="${bab.kunci}" title="Ke kunci & pembahasan bab ini">🔑<span class="lbl"> Kunci</span></button>` : ""}
      <button class="btn-mini btn-mini-utama" data-interaktif="1" title="Kerjakan soal bab ini secara interaktif (dinilai & dapat XP)">▶<span class="lbl"> Interaktif</span></button>` : "";
  }
}
function bukaLaciPdf() {
  if (!PDFV.set) return;
  const n = halSekarang(), aktif = babDiHal(n);
  const set = PDFV.set, dp = dataPdf(set.id);
  const isi = [`<div class="laci-kepala"><b>Buku ${set.id} — ${esc(set.judul)}</b><small>${PDFV.total} halaman · terjauh dibaca hal ${dp.maks || 1}</small></div>
    <button class="laci-item" data-ke="1">📘 Sampul</button><button class="laci-item" data-ke="2">📑 Daftar isi</button>`];
  set.topik.forEach(t => {
    if (PDFV.dest["c-" + t]) isi.push(`<button class="laci-topik" data-ke="${PDFV.dest["c-" + t]}">${esc(TOPIK_INFO[t].nama)}<span>hal ${PDFV.dest["c-" + t]}</span></button>`);
    PDFV.bab.filter(b => b.t === t).forEach(b => {
      const ini = aktif && aktif.t === b.t && aktif.i === b.i;
      isi.push(`<div class="laci-bab ${ini ? "aktif" : ""}"><button class="laci-item" data-ke="${b.hal}">${b.i >= 0 ? `<b>${b.i + 1}</b>` : "📎"} ${esc(b.judul)}<span>${b.hal}</span></button>
        ${b.soal ? `<span class="laci-sub"><button data-ke="${b.soal}">🧠 Soal</button><button data-ke="${b.kunci}">🔑 Kunci</button></span>` : ""}</div>`);
    });
  });
  isi.push(`<a class="laci-unduh" href="${set.file}" download>⤓ Unduh PDF ini</a>`);
  el("pdf-laci-isi").innerHTML = isi.join("");
  el("pdf-laci").classList.remove("tersembunyi");
  requestAnimationFrame(() => el("pdf-laci").classList.add("buka"));
  const ak = el("pdf-laci-isi").querySelector(".laci-bab.aktif");
  if (ak) ak.scrollIntoView({ block: "center" });
}
function tutupLaciPdf() {
  const l = el("pdf-laci");
  if (l.classList.contains("tersembunyi")) return false;
  l.classList.remove("buka");
  setTimeout(() => l.classList.add("tersembunyi"), 220);
  return true;
}
function ubahZoomPdf(arah) {
  const i = SKALA_PDF.indexOf(PDFV.skala);
  const baru = SKALA_PDF[Math.max(0, Math.min(SKALA_PDF.length - 1, i + arah))];
  if (baru === PDFV.skala || !PDFV.doc) return;
  const n = halSekarang();
  PDFV.skala = baru;
  tataLetakPdf();
  lompatHal(n, false);
  toast(`Zoom ${Math.round(baru * 100)}%`);
}
function gelapAktif() {
  const t = DATA.pref.tema;
  return t === "dark" || (t !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
}
function terapkanMalamPdf() {
  const b = dataBuku();
  const malam = b.pdfMalam === undefined ? gelapAktif() : b.pdfMalam;
  el("pdf-halaman").classList.toggle("malam", malam);
  el("btn-pdf-malam").textContent = malam ? "☀️" : "🌙";
  el("btn-pdf-malam").title = malam ? "Halaman terang" : "Mode malam (halaman gelap)";
}

/* ---------- simpan semua buku untuk offline ---------- */
async function cekOfflinePdf() {
  if (!("caches" in window) || !/^https?:$/.test(location.protocol)) return {};
  const ada = {};
  await Promise.all(BUKU_SET.map(async s => { try { ada[s.id] = !!(await caches.match(s.file)); } catch (e) { ada[s.id] = false; } }));
  return ada;
}
async function simpanSemuaOffline(btn) {
  if (!navigator.serviceWorker || !navigator.serviceWorker.controller) {
    return toast(location.protocol === "file:" ? "Simpan offline hanya bisa setelah di-deploy (Netlify/GitHub Pages)." : "Muat ulang halaman sekali, lalu coba lagi.");
  }
  btn.disabled = true;
  for (let i = 0; i < BUKU_SET.length; i++) {
    btn.textContent = `⬇️ Menyimpan buku ${i + 1}/${BUKU_SET.length}…`;
    try { await (await fetch(BUKU_SET[i].file, { cache: "reload" })).arrayBuffer(); } catch (e) { /* lanjut */ }
  }
  btn.disabled = false;
  btn.textContent = "✓ Semua buku tersimpan untuk offline";
  RAYA.konfeti(1, btn); RAYA.nada("benar");
  renderRakPdf();
}

/* ---------- rak buku di halaman Book ---------- */
async function renderRakPdf() {
  const rak = el("buku-rak");
  if (!rak) return;
  const offline = await cekOfflinePdf();
  rak.innerHTML = BUKU_SET.map((s, k) => {
    const dp = (dataBuku().pdf || {})[s.id] || {}, info = infoBukuPdf(s.id);
    const total = dp.total || (info && info.hal) || 0, maks = dp.maks || 0;
    const persen = total ? Math.round(maks / total * 100) : 0;
    return `<div class="rak-buku muncul rak-${s.id}" style="animation-delay:${k * 50}ms">
      <button class="sampul" data-buka="${s.id}" aria-label="Baca Buku ${s.id}: ${esc(s.judul)}">
        <span class="sampul-no">${s.id}</span><span class="sampul-judul">${esc(s.judul)}</span>
        <span class="sampul-logo">🌿 KodeQuiz Book</span>${offline[s.id] ? '<span class="sampul-offline" title="Tersimpan untuk dibaca offline">✓ offline</span>' : ""}</button>
      <div class="rak-info">
        <small>${total ? total + " halaman" : "PDF"}${info ? ` · ${(info.kb / 1024).toFixed(1)} MB` : ""}</small>
        <div class="mini-bar"><div style="width:${persen}%"></div></div>
        <button class="btn btn-kecil ${maks > 1 ? "btn-utama" : "btn-garis"}" data-buka="${s.id}">${maks > 1 ? `Lanjut hal ${dp.hal || 1} →` : "📖 Baca"}</button>
      </div></div>`;
  }).join("");
  rak.querySelectorAll("[data-buka]").forEach(b => b.onclick = () => go("pdf", { b: b.dataset.buka }));
}

/* ---------- pemasangan ---------- */
function pasangPdf() {
  let tunggu = false;
  addEventListener("scroll", () => {
    if (document.body.dataset.layar !== "pdf" || tunggu) return;
    tunggu = true;
    requestAnimationFrame(() => {
      tunggu = false;
      perbaruiPdf(); gambarSekitar();
      // toolbar sembunyi saat menggulir ke bawah, muncul lagi saat ke atas
      const y = scrollY, alat = el("pdf-alat");
      if (Date.now() - (PDFV.lompat || 0) < 900) { PDFV.yLalu = y; return; }
      if (y > PDFV.yLalu + 8 && y > 260) alat.classList.add("sembunyi");
      else if (y < PDFV.yLalu - 8 || y < 200) alat.classList.remove("sembunyi");
      PDFV.yLalu = y;
    });
  }, { passive: true });
  addEventListener("resize", () => {
    if (document.body.dataset.layar !== "pdf" || !PDFV.doc) return;
    const n = halSekarang();
    clearTimeout(PDFV.rTimer);
    PDFV.rTimer = setTimeout(() => { tataLetakPdf(); lompatHal(n, false); }, 200);
  });
  // keluar dari pembaca → lepaskan semua kanvas
  document.addEventListener("kq:layar", e => {
    if (e.detail !== "pdf") {
      tutupLaciPdf();
      el("pdf-halaman").querySelectorAll(".pdf-p").forEach(d => { d.querySelectorAll("canvas,.pdf-link").forEach(x => x.remove()); delete d.dataset.v; });
      PDFV.versi++;
    }
  });
  el("btn-pdf-isi").onclick = bukaLaciPdf;
  el("btn-pdf-tutup").onclick = () => kembali();
  el("btn-pdf-prev").onclick = () => lompatHal(halSekarang() - 1, true);
  el("btn-pdf-next").onclick = () => lompatHal(halSekarang() + 1, true);
  el("btn-pdf-kecil").onclick = () => ubahZoomPdf(-1);
  el("btn-pdf-besar").onclick = () => ubahZoomPdf(1);
  el("btn-pdf-malam").onclick = () => { const b = dataBuku(); b.pdfMalam = !el("pdf-halaman").classList.contains("malam"); simpan(); terapkanMalamPdf(); };
  el("pdf-input").addEventListener("change", e => lompatHal(+e.target.value));
  el("pdf-input").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); lompatHal(+e.target.value); e.target.blur(); } });
  el("pdf-laci").addEventListener("click", e => {
    const ke = e.target.closest("[data-ke]");
    if (ke) { tutupLaciPdf(); lompatHal(+ke.dataset.ke); return; }
    if (e.target === el("pdf-laci") || e.target.closest(".laci-tutup")) tutupLaciPdf();
  });
  el("pdf-aksi-bab").addEventListener("click", e => {
    const ke = e.target.closest("[data-ke]");
    if (ke) return lompatHal(+ke.dataset.ke);
    if (e.target.closest("[data-interaktif]")) { const b = babDiHal(halSekarang()); if (b && b.i >= 0) go("bukubab", { t: b.t, i: b.i }); }
  });
  el("btn-buku-offline").onclick = e => simpanSemuaOffline(e.currentTarget);
  // keyboard: ← → pindah halaman, Esc menutup daftar isi lebih dulu
  document.addEventListener("keydown", e => {
    if (document.body.dataset.layar !== "pdf") return;
    if (e.key === "Escape" && tutupLaciPdf()) { e.stopImmediatePropagation(); e.preventDefault(); return; }
    if (/input|textarea/i.test(e.target.tagName)) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); lompatHal(halSekarang() + 1, true); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); lompatHal(halSekarang() - 1, true); }
  }, true);
}
