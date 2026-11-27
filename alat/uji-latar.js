// Uji atelier/latar.js: untuk warna latar apa pun, teks di kartu harus ≥ 7:1 dan teks di latar ≥ 4.5:1.
// Pakai: node alat/uji-latar.js
const fs = require("fs"), path = require("path"), assert = require("assert");
const gaya = { textContent: "" };
global.window = global;
global.localStorage = { getItem: () => null, setItem() {} };
global.document = { createElement: () => gaya, head: { appendChild() {} }, documentElement: { dataset: {} } };
eval(fs.readFileSync(path.join(__dirname, "../atelier/latar.js"), "utf8"));
const rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const lum = c => { const [r, g, b] = c.map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return .2126 * r + .7152 * g + .0722 * b; };
const kontras = (a, b) => { const [x, y] = [lum(rgb(a)), lum(rgb(b))].sort((p, q) => q - p); return (x + .05) / (y + .05); };
let n = 0;
for (let i = 0; i < 4096; i += 7) {
  const hex = "#" + [i * 37 % 256, i * 91 % 256, i * 53 % 256].map(v => v.toString(16).padStart(2, "0")).join("");
  const { v } = KQLatar.turunan(hex);
  assert(kontras(v["--teks"], v["--permukaan"]) >= 7, `${hex}: teks di kartu ${kontras(v["--teks"], v["--permukaan"]).toFixed(2)}`);
  assert(kontras(v["--teks"], v["--bg"]) >= 4.5, `${hex}: teks di latar ${kontras(v["--teks"], v["--bg"]).toFixed(2)}`);
  n++;
}
console.log(`✓ ${n} warna: kontras teks aman`);
