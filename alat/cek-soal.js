// Verifikasi bank soal KodeQuiz: cek struktur semua soal + jalankan kode sungguhan.
// Pakai:  node alat/cek-soal.js
// Soal bertanda vr:"py"/"js"/"java"/"php"/"sql" dijalankan dan output-nya dicocokkan dengan kunci.
// Butuh: Node.js. Opsional (untuk soal yang dieksekusi): python3 + pandas, java (JDK 17+), php 8.
const fs = require("fs"), path = require("path"), vm = require("vm"), cp = require("child_process"), os = require("os");
// Di Windows perintahnya python, bukan python3
const PYTHON = process.platform === "win32" ? "python" : "python3";
const ROOT = process.argv[2] || path.join(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="(js\/[^"]+)"/g)].map(m => m[1]).filter(s => !/fitur\/proyek|app\.js|fitur\/(rayakan|buku|pengaturan)/.test(s));
const ctx = { console, module: undefined };
vm.createContext(ctx);
let src = scripts.map(s => fs.readFileSync(path.join(ROOT, s), "utf8")).join("\n;\n");
// ekspor konstanta ke context
src += "\n;this.__ = {DATASET, datasetSQL, TANTANGAN_SQL, BANK:{" +
  Object.entries({excel:"EXCEL",sql:"SQL",karier:"KARIER",python:"PYTHON",html:"HTML",css:"CSS",js:"JS",bi:"BI",stat:"STAT",erp:"ERP",java:"JAVA",php:"PHP"})
    .map(([k, v]) => `${k}: typeof SOAL_${v}!=="undefined"?[SOAL_${v},MATERI_${v}]:null`).join(",") + "}};";
vm.runInContext(src, ctx, { filename: "soal.js" });
const { DATASET, datasetSQL, TANTANGAN_SQL, BANK } = ctx.__;

let err = 0, cek = 0, jalan = 0;
const salah = m => { err++; console.log("✗ " + m); };
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "vs-"));

function jalankan(bahasa, kode, pre) {
  const full = (pre ? pre + "\n" : "") + kode;
  try {
    if (bahasa === "py") { fs.writeFileSync(tmp + "/a.py", full); return cp.execFileSync(PYTHON, ["-I", tmp + "/a.py"], { timeout: 20000, cwd: tmp }).toString(); }
    if (bahasa === "js") { fs.writeFileSync(tmp + "/a.js", full); return cp.execFileSync("node", [tmp + "/a.js"], { timeout: 20000 }).toString(); }
    if (bahasa === "php") { fs.writeFileSync(tmp + "/a.php", /^\s*<\?php/.test(full) ? full : "<?php\n" + full); return cp.execFileSync("php", [tmp + "/a.php"], { timeout: 20000 }).toString(); }
    if (bahasa === "java") {
      const body = /class\s+\w+/.test(full) ? full : `import java.util.*;\npublic class Main {\n public static void main(String[] args) {\n${full}\n }\n}`;
      const nama = (body.match(/public\s+class\s+(\w+)/) || [, "Main"])[1];
      fs.writeFileSync(`${tmp}/${nama}.java`, body);
      const dir = fs.mkdtempSync(tmp + "/j-");
      fs.writeFileSync(`${dir}/${nama}.java`, body);
      cp.execFileSync("javac", ["-d", dir, `${dir}/${nama}.java`], { timeout: 60000, stdio: ["ignore", "pipe", "pipe"] });
      return cp.execFileSync("java", ["-cp", dir, nama], { timeout: 30000, stdio: ["ignore", "pipe", "ignore"] }).toString();
    }
  } catch (e) { return "ERROR: " + (e.stderr ? e.stderr.toString() : e.message).split("\n").slice(-4).join(" | "); }
}
const rapi = s => String(s).replace(/\r/g, "").replace(/[ \t]+\n/g, "\n").trim();
// Bahasa yang tidak terpasang dilaporkan sebagai dilewati, bukan sebagai soal yang salah
const tersedia = (cmd, arg) => { try { cp.execFileSync(cmd, [arg], { stdio: "ignore", timeout: 15000 }); return true; } catch (e) { return false; } };
const ADA = { py: tersedia(PYTHON, "--version"), js: true, php: tersedia("php", "-v"), java: tersedia("javac", "-version") };
const lewat = {};

(async () => {
  const initSqlJs = require(path.join(ROOT, "vendor/sql-asm.js"));
  const SQL = await initSqlJs();
  const q = s => { const db = new SQL.Database(); db.run(datasetSQL()); const r = db.exec(s); db.close(); return r.length ? r[r.length - 1].values : []; };

  let total = 0;
  for (const [t, pair] of Object.entries(BANK)) {
    if (!pair) continue;
    const [soal, materi] = pair;
    const babKeys = new Set(materi.map(m => m.k));
    if (babKeys.size !== materi.length) salah(`${t}: key bab duplikat`);
    materi.forEach(m => { if (!soal.some(s => s.k === m.k)) salah(`${t}/${m.k}: bab tanpa soal`); if (!m.judul || !m.materi) salah(`${t}/${m.k}: materi kosong`); });
    soal.forEach((s, i) => {
      total++;
      const id = `${t}#${i} (${s.k}) "${String(s.q).slice(0, 50)}"`;
      if (!babKeys.has(s.k)) salah(id + ": bab tidak ada di MATERI");
      if (![1, 2, 3].includes(s.lv)) salah(id + ": lv salah");
      if (!s.e) salah(id + ": tanpa penjelasan");
      if (s.tb) (Array.isArray(s.tb) ? s.tb : [s.tb]).forEach(n => { if (!DATASET[n]) salah(id + ": tb tidak dikenal " + n); });
      if (s.t === "mc") {
        if (!Array.isArray(s.o) || s.o.length < 2 || s.o.length > 5) salah(id + ": opsi");
        if (!(s.a >= 0 && s.a < s.o.length)) salah(id + ": indeks jawaban");
        if (new Set(s.o).size !== s.o.length) salah(id + ": opsi kembar");
        if (s.w) { if (s.w.length !== s.o.length) salah(id + ": panjang w"); if (s.w[s.a] !== null) salah(id + ": w[a] harus null"); }
      } else if (s.t === "is") {
        if (!Array.isArray(s.a) || !s.a.length) salah(id + ": jawaban isian");
      } else salah(id + ": tipe soal");

      // eksekusi
      if (s.vr === "sql" && s.kode) {
        jalan++;
        let hasil; try { hasil = q(s.kode); } catch (e) { salah(id + ": SQL error " + e.message); return; }
        if (Array.isArray(s.vx)) {
          const A = JSON.stringify(hasil.map(r => r.map(v => typeof v === "number" ? Math.round(v * 1000) / 1000 : v)));
          const B = JSON.stringify(s.vx);
          if (A !== B) salah(id + `: hasil SQL ${A} ≠ vx ${B}`); else cek++;
        } else console.log(`  · ${id}\n    → ${JSON.stringify(hasil)}`);
      } else if (["py", "js", "php", "java"].includes(s.vr)) {
        if (!ADA[s.vr]) { lewat[s.vr] = (lewat[s.vr] || 0) + 1; return; }
        jalan++;
        const out = rapi(jalankan(s.vr, s.vjalan || s.kode, s.vpre));
        const harap = rapi(s.vx !== undefined ? s.vx : s.t === "mc" ? s.o[s.a] : s.a[0]);
        if (out !== harap) salah(id + `: output\n      ${JSON.stringify(out)}\n    ≠ diharapkan\n      ${JSON.stringify(harap)}`); else cek++;
      }
    });
    console.log(`${t}: ${soal.length} soal, ${materi.length} bab`);
  }
  // Lab SQL
  TANTANGAN_SQL.forEach((T, i) => {
    try { const r = q(T.jawab); console.log(`  lab ${i + 1} ${T.judul}: ${JSON.stringify(r)}`); } catch (e) { salah(`lab ${i + 1}: ${e.message}`); }
  });
  console.log(`\nTotal ${total} soal · ${jalan} dieksekusi · ${cek} cocok · ${err} masalah`);
  Object.entries(lewat).forEach(([b, n]) => console.log(`Dilewati: ${n} soal ${b}, penerjemahnya belum terpasang`));
  process.exit(err ? 1 : 0);
})();
