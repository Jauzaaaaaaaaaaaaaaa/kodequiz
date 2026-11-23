// Membuat lembar kunci jawaban Jalur Cyber Security sebagai gambar PNG HD (lebar 2160 px) di kunci/cyber/,
// plus daftar gambarnya di js/data/kunci-gambar.js (dipakai halaman materi). Satu lembar berisi 4 soal:
// pertanyaan, jawaban, poin penting, cara menjawab, dan pegangan "Ingat".
// Memakai Google Chrome yang sudah terpasang lewat DevTools Protocol, sama seperti alat/buat-pdf.js.
// Pakai:  node alat/buat-kunci-gambar.js        (jalankan ulang setelah soal Jalur Cyber berubah)
const fs = require("fs"), path = require("path"), os = require("os"), cp = require("child_process"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const CHROME = process.env.CHROME || [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "/usr/bin/google-chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].find(f => fs.existsSync(f));
if (!CHROME) { console.error("Chrome tidak ditemukan. Set variabel CHROME ke chrome.exe."); process.exit(1); }

// ---------- data soal (dijalankan tanpa DOM, seperti alat/cek-soal.js)
const ctx = {}; vm.createContext(ctx);
vm.runInContext(["soal-cyber.js", "soal-cyber-2.js", "soal-cyber-3.js"].map(f => fs.readFileSync(path.join(ROOT, "js", "soal", f), "utf8")).join("\n;\n") +
  ";this.M = MATERI_CYBER; this.S = SOAL_CYBER;", ctx);
const { M, S } = ctx;
const PER_LEMBAR = 4, HURUF = "ABCDE", LV = { 1: "Dasar · 10 poin", 2: "Menengah · 20 poin", 3: "Mahir · 30 poin" };
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function kartu(s, no) {
  const b = s.e.split("\n");
  const poin = b.filter(x => x.startsWith("• ")).map(x => `<li>${esc(x.slice(2))}</li>`).join("");
  const langkah = b.filter(x => /^\d+\. /.test(x)).map(x => `<li>${esc(x.replace(/^\d+\. /, ""))}</li>`).join("");
  const ingat = b.find(x => x.startsWith("Ingat: "));
  const inti = b.filter(x => !x.startsWith("• ") && !/^\d+\. /.test(x) && !x.startsWith("Ingat: ")).map(esc).join("<br>");
  const opsi = s.t === "mc"
    ? `<ol class="opsi">${s.o.map((o, i) => `<li class="${i === s.a ? "benar" : ""}"><span>${HURUF[i]}</span>${esc(o)}${i === s.a ? " <b>✓</b>" : ""}</li>`).join("")}</ol>`
    : `<p class="isian">Jawaban isian: <b>${esc(s.a[0])}</b>${s.a.length > 1 ? ` <small>(juga diterima: ${s.a.slice(1).map(esc).join(", ")})</small>` : ""}</p>`;
  return `<section class="soal"><header><span class="no">${String(no).padStart(2, "0")}</span><span class="lv">${LV[s.lv]}</span></header>
    <h3>${esc(s.q)}</h3>${opsi}
    <p class="kenapa"><b>Kenapa?</b> ${inti}</p>
    ${poin ? `<div class="blok"><b>Poin penting</b><ul>${poin}</ul></div>` : ""}
    ${langkah ? `<div class="blok"><b>Cara menjawab</b><ol class="langkah">${langkah}</ol></div>` : ""}
    ${ingat ? `<p class="ingat"><b>Ingat:</b> ${esc(ingat.slice(7))}</p>` : ""}</section>`;
}
function halaman(m, iModul, soal, mulai, ke, dari) {
  return `<!doctype html><html lang="id"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400..700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
html{overflow:hidden}
body{width:1080px;background:#F4F1DE;color:#1B263B;font:400 21px/1.5 "Instrument Sans","Segoe UI",sans-serif;padding:0 0 40px}
.kepala{background:linear-gradient(160deg,#415A77,#1B263B 60%,#0D1B2A);color:#F4F1DE;padding:44px 56px 40px}
.strip{width:216px;height:12px;border-radius:99px;margin-bottom:22px;background:linear-gradient(90deg,#0D1B2A 0 16.66%,#1B263B 0 33.33%,#415A77 0 50%,#778D7A 0 66.66%,#D4C4A8 0 83.33%,#F4F1DE 0)}
.kepala p{font:600 17px/1.2 "Instrument Sans";letter-spacing:.08em;text-transform:uppercase;color:#D4C4A8}
.kepala h1{font:500 44px/1.1 "Instrument Sans";letter-spacing:-.02em;margin:10px 0 8px}
.kepala small{font-size:18px;color:#E6E0CA}
main{padding:28px 40px 0}
.soal{background:#FBF9F0;border:1px solid #D9CFB8;border-radius:26px;padding:28px 32px;margin-bottom:22px}
.soal header{display:flex;gap:12px;align-items:center;margin-bottom:10px}
.no{background:#1B263B;color:#F4F1DE;font:700 18px/1 "Instrument Sans";border-radius:99px;padding:8px 14px}
.lv{font:600 15px/1 "Instrument Sans";letter-spacing:.06em;text-transform:uppercase;color:#4A5A70}
h3{font:600 25px/1.35 "Instrument Sans";margin-bottom:14px}
.opsi{list-style:none;padding:0;display:grid;gap:8px;margin-bottom:14px}
.opsi li{display:flex;gap:12px;align-items:flex-start;padding:10px 14px;border-radius:14px;background:#EFEAD7}
.opsi li span{flex:none;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#E3DCC4;font:700 16px/1 "Instrument Sans"}
.opsi li.benar{background:#DFE7DA;outline:2px solid #4F6B55}
.opsi li.benar span{background:#4F6B55;color:#F4F1DE}
.opsi li b{color:#3A5240;margin-left:auto}
.isian{padding:10px 14px;border-radius:14px;background:#DFE7DA;margin-bottom:14px}
.kenapa{margin-bottom:10px}
.blok{margin-top:10px}
.blok>b{display:block;font:700 14px/1.3 "Instrument Sans";letter-spacing:.08em;text-transform:uppercase;color:#4A5A70;margin-bottom:4px}
.blok ul,.blok ol{padding-left:1.3em}
.blok li{margin:3px 0}
.langkah li::marker{font-weight:700;color:#4F6B55}
.ingat{margin-top:12px;padding:10px 16px;border-left:4px solid #4F6B55;border-radius:0 14px 14px 0;background:#E9E4CF}
.kaki{padding:6px 40px 0;font-size:16px;color:#4A5A70}
</style></head><body>
<div class="kepala"><div class="strip"></div><p>Kunci jawaban · Jalur Cyber Security · KodeQuiz</p>
<h1>Modul ${iModul + 1}: ${esc(m.judul)}</h1><small>Lembar ${ke} dari ${dari} · soal ${mulai + 1}–${mulai + soal.length}</small></div>
<main>${soal.map((s, i) => kartu(s, mulai + i + 1)).join("")}</main>
<p class="kaki">Urutan opsi di aplikasi diacak, jadi cocokkan dengan teks jawabannya, bukan hurufnya. Kerjakan soalnya dulu, baru buka lembar ini.</p>
</body></html>`;
}

// ---------- Chrome DevTools Protocol (pola yang sama dengan alat/buat-pdf.js)
const PORT = 9300 + Math.floor(Math.random() * 500);
const profil = fs.mkdtempSync(path.join(os.tmpdir(), "kq-kunci-"));
const chrome = cp.spawn(CHROME, ["--headless=new", `--remote-debugging-port=${PORT}`, `--user-data-dir=${profil}`, "--no-first-run", "--no-default-browser-check", "about:blank"], { stdio: "ignore" });
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
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "kq-kunci-html-"));
  const OUT = path.join(ROOT, "kunci", "cyber");
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const daftar = {};
  try {
    const c = await klien(await sambung());
    await c.kirim("Page.enable"); await c.kirim("Runtime.enable");
    const nilai = async expr => (await c.kirim("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true })).result.value;
    for (const [iModul, m] of M.entries()) {
      const soal = S.filter(s => s.k === m.k), dari = Math.ceil(soal.length / PER_LEMBAR);
      daftar[m.k] = [];
      for (let ke = 1; ke <= dari; ke++) {
        const mulai = (ke - 1) * PER_LEMBAR, f = path.join(tmp, "lembar.html");
        fs.writeFileSync(f, halaman(m, iModul, soal.slice(mulai, mulai + PER_LEMBAR), mulai, ke, dari));
        await c.kirim("Emulation.setDeviceMetricsOverride", { width: 1080, height: 1400, deviceScaleFactor: 2, mobile: false });
        const dimuat = c.sekali("Page.loadEventFired");
        await c.kirim("Page.navigate", { url: "file:///" + f.replace(/\\/g, "/") });
        await dimuat;
        await nilai("document.fonts.ready.then(() => new Promise(r => setTimeout(r, 150)))");
        const tinggi = Math.ceil(await nilai("document.documentElement.scrollHeight"));
        await c.kirim("Emulation.setDeviceMetricsOverride", { width: 1080, height: tinggi, deviceScaleFactor: 2, mobile: false });
        const shot = await c.kirim("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: 1080, height: tinggi, scale: 1 } });
        const nama = `${String(iModul + 1).padStart(2, "0")}-${m.k}-${ke}.png`;
        fs.writeFileSync(path.join(OUT, nama), Buffer.from(shot.data, "base64"));
        daftar[m.k].push("kunci/cyber/" + nama);
      }
      console.log("✓", m.k, daftar[m.k].length, "lembar");
    }
    c.tutup();
    fs.writeFileSync(path.join(ROOT, "js", "data", "kunci-gambar.js"),
      "// Lembar kunci jawaban bergambar (PNG 2160 px). Dibuat otomatis oleh alat/buat-kunci-gambar.js.\nconst KUNCI_GAMBAR = " + JSON.stringify({ cyber: daftar }) + ";\n");
    // Kecilkan berkas: palet 128 warna tanpa dither, tampak sama untuk teks di latar polos (±70% lebih kecil). Butuh Pillow; dilewati bila tidak ada.
    try {
      cp.execFileSync(process.platform === "win32" ? "python" : "python3", ["-I", "-c",
        ["import sys, os", "from PIL import Image", "for f in os.listdir(sys.argv[1]):",
         " p = os.path.join(sys.argv[1], f)",
         " Image.open(p).convert('RGB').quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(p, optimize=True)"].join("\n"), OUT]);
    } catch (e) { console.log("Pillow tidak tersedia; gambar tetap PNG penuh (lebih besar)."); }
    const total = Object.values(daftar).flat().length;
    const mb = fs.readdirSync(OUT).reduce((n, f) => n + fs.statSync(path.join(OUT, f)).size, 0) / 1048576;
    console.log(`Selesai: ${total} gambar, ${mb.toFixed(1)} MB`);
  } catch (e) { console.error("Gagal:", e.message); process.exitCode = 1; }
  finally {
    chrome.kill(); await tidur(500);
    for (const d of [profil, tmp]) try { fs.rmSync(d, { recursive: true, force: true }); } catch (e) { /* folder sementara */ }
  }
})();
