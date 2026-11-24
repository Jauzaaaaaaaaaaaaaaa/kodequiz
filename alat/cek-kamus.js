// Pemeriksa kamus konsep Python (js/data/kamus-py.js):
// 1. setiap contoh dijalankan dengan Python sungguhan dan hasilnya harus sama dengan yang tertulis;
// 2. setiap pemanggilan bawaan di solusi soal Python (nama(...) atau .nama(...)) harus dijelaskan minimal satu entri.
// Pakai: node alat/cek-kamus.js
const fs = require("fs"), path = require("path"), cp = require("child_process"), os = require("os");
const ROOT = path.join(__dirname, "..");
const muat = f => fs.readFileSync(path.join(ROOT, f), "utf8");
const c = {};
new Function("c", muat("js/data/kamus-py.js") + "\n" + muat("js/soal/lab-python.js") + ";c.K=KAMUS_PY;c.S=STUDI_PY;c.T=TANTANGAN_PY;")(c);
let salah = 0;
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "kamus-"));

// 1. contoh harus benar
for (const k of c.K) {
  const f = path.join(tmp, k.k + ".py");
  fs.writeFileSync(f, k.contoh);
  let out;
  try { out = cp.execFileSync(process.platform === "win32" ? "python" : "python3", ["-I", f], { timeout: 60000 }).toString().replace(/\r/g, "").trim(); }
  catch (e) { out = "ERROR " + (e.stderr || e.message).toString().split("\n").slice(-2).join(" "); }
  if (out !== k.hasil.trim()) { salah++; console.log(`✗ contoh ${k.k}: keluar ${JSON.stringify(out)} ≠ tertulis ${JSON.stringify(k.hasil)}`); }
}

// 2. cakupan konsep
const pola = c.K.map(k => new RegExp(k.pola, "m"));
const soal = [...c.T, ...c.S.flatMap(S => S.langkah)].filter(L => (L.bahasa || "py") === "py");
const belum = {};
for (const L of soal) {
  const kode = L.solusi.replace(/"""[\s\S]*?"""/g, '""'), semua = kode + "\n" + (L.pre || "");   // isi XML/teks panjang bukan Python
  // nama buatan sendiri: def/class, parameter fungsi, dan variabel yang diberi nilai (termasuk lambda)
  const lokal = new Set([
    ...[...semua.matchAll(/\b(?:def|class)\s+(\w+)/g)].map(m => m[1]),
    ...[...semua.matchAll(/\bdef\s+\w+\(([^)]*)\)/g)].flatMap(m => m[1].split(",").map(x => x.replace(/[=*:].*/, "").trim())),
    ...[...semua.matchAll(/^\s*(\w+)\s*=/gm)].map(m => m[1]),
  ]);
  const juga = c.K.filter((k, i) => k.juga && pola[i].test(kode)).flatMap(k => k.juga);   // method milik modul yang sudah dijelaskan
  for (const m of kode.matchAll(/(\.?)\b([A-Za-z_]\w*)\(/g)) {
    const nama = m[2], cuplik = m[1] + nama + "(";
    if (lokal.has(nama) || juga.includes(nama) || /^(print|Record|rs|Recordset|ValidationError|UserError|SaleOrderBase|Uang|Produk|Gudang|Tiket|Baris|Karyawan|Rekening|Keranjang)$/.test(nama)) continue;
    if (!pola.some(p => p.test(cuplik) || p.test(m[0]))) (belum[cuplik] = belum[cuplik] || new Set()).add(L.id);
  }
}
for (const [k, ids] of Object.entries(belum)) { salah++; console.log(`✗ belum dijelaskan: ${k} (dipakai ${[...ids].slice(0, 4).join(", ")}${ids.size > 4 ? " …" : ""})`); }
console.log(`\n${c.K.length} konsep, ${soal.length} soal Python diperiksa, ${salah} masalah`);
process.exit(salah ? 1 : 0);
