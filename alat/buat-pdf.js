// Membuat ulang semua PDF Book (ukuran layar HP) di folder buku/ dari isi aplikasi,
// memakai Google Chrome yang sudah terpasang lewat Chrome DevTools Protocol. Tanpa paket npm/pip tambahan.
// Pakai:  node alat/buat-pdf.js            (opsional: CHROME="C:\path\chrome.exe")
// Hasil sama dengan alat/buat-pdf.py: buku/*.pdf + js/data/buku-info.js (jumlah halaman & ukuran).
const fs = require("fs"), path = require("path"), os = require("os"), cp = require("child_process");
const ROOT = path.join(__dirname, "..");
const CHROME = process.env.CHROME || [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "/usr/bin/google-chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].find(f => fs.existsSync(f));
if (!CHROME) { console.error("Chrome tidak ditemukan. Set variabel CHROME ke chrome.exe."); process.exit(1); }

const PORT = 9300 + Math.floor(Math.random() * 500);
const profil = fs.mkdtempSync(path.join(os.tmpdir(), "kq-pdf-"));
const chrome = cp.spawn(CHROME, ["--headless=new", `--remote-debugging-port=${PORT}`, `--user-data-dir=${profil}`,
  "--no-first-run", "--no-default-browser-check", "about:blank"], { stdio: "ignore" });
const tidur = ms => new Promise(r => setTimeout(r, ms));

async function sambung() {
  for (let i = 0; i < 60; i++) {
    try { const t = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json(); const p = t.find(x => x.type === "page"); if (p) return p.webSocketDebuggerUrl; } catch (e) { /* belum siap */ }
    await tidur(250);
  }
  throw new Error("Chrome tidak merespons di port " + PORT);
}
function klien(url) {
  const ws = new WebSocket(url);
  let id = 0; const tunggu = new Map(), pendengar = [];
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if (m.id && tunggu.has(m.id)) { const [ok, gagal] = tunggu.get(m.id); tunggu.delete(m.id); m.error ? gagal(new Error(m.error.message)) : ok(m.result); }
    else if (m.method) pendengar.filter(p => p.method === m.method).forEach(p => p.fn(m.params));
  };
  return new Promise(res => ws.onopen = () => res({
    kirim: (method, params = {}) => new Promise((ok, gagal) => { const n = ++id; tunggu.set(n, [ok, gagal]); ws.send(JSON.stringify({ id: n, method, params })); }),
    sekali: method => new Promise(fn => pendengar.push({ method, fn })),
    tutup: () => ws.close(),
  }));
}

(async () => {
  try {
    const c = await klien(await sambung());
    await c.kirim("Page.enable");
    await c.kirim("Runtime.enable");
    // tanpa animasi: layar pembuka atelier tidak muncul dan tidak menutupi apa pun
    // media "print" sejak awal: isi buku langsung terlihat, jadi font webnya ikut dimuat (bukan font cadangan sistem)
    await c.kirim("Emulation.setEmulatedMedia", { media: "print", features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
    const dimuat = c.sekali("Page.loadEventFired");
    await c.kirim("Page.navigate", { url: "file:///" + path.join(ROOT, "index.html").replace(/\\/g, "/").replace(/ /g, "%20") });
    await dimuat; await tidur(1500);
    const nilai = async expr => { const r = await c.kirim("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || expr); return r.result.value; };
    await nilai("document.fonts.ready.then(() => true)");
    const sets = await nilai("KQBuku.BUKU_SET");
    for (const s of sets) {
      await nilai(`KQBuku.siapkanCetak(${JSON.stringify(s.topik)}, ${JSON.stringify(`Buku ${s.id} — ${s.judul}`)}, "hp")`);
      await nilai("document.fonts.ready.then(() => new Promise(r => setTimeout(r, 400)))");
      const pdf = await c.kirim("Page.printToPDF", { preferCSSPageSize: true, printBackground: true, generateDocumentOutline: true, generateTaggedPDF: true });
      fs.writeFileSync(path.join(ROOT, s.file), Buffer.from(pdf.data, "base64"));
      console.log("✓", s.file);
    }
    c.tutup();

    // info halaman & ukuran → js/data/buku-info.js (dipakai rak buku di aplikasi)
    const info = {};
    for (const s of sets) {
      const f = path.join(ROOT, s.file);
      let hal;
      try { hal = +cp.execFileSync(process.platform === "win32" ? "python" : "python3", ["-c", "import sys,pypdf;print(len(pypdf.PdfReader(sys.argv[1]).pages))", f]).toString().trim(); }
      catch (e) { hal = (fs.readFileSync(f).toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length; }
      info[s.id] = { hal, kb: Math.round(fs.statSync(f).size / 1024) };
    }
    fs.writeFileSync(path.join(ROOT, "js", "data", "buku-info.js"),
      "// Info buku PDF di folder buku/ (jumlah halaman & ukuran). Dibuat otomatis oleh alat/buat-pdf.js.\nconst BUKU_INFO = " + JSON.stringify(info) + ";\n");
    console.log("info:", JSON.stringify(info));
  } catch (e) { console.error("Gagal:", e.message); process.exitCode = 1; }
  finally {
    chrome.kill();
    await tidur(500);
    try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { /* profil sementara, boleh tertinggal */ }
  }
})();
