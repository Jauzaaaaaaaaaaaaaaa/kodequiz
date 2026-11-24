// Dipanggil alat/buat-lab-python.py: menjalankan kode JS + tes persis seperti penilai di browser (js/fitur/py-lab.js).
// Masukan (stdin): {"kode", "pre", "tes": [ekspresi], "contoh": true?}. Keluaran: {"hasil": [JSON atau {"error"}], "out"}.
const AF = Object.getPrototypeOf(async function () {}).constructor;
let teks = "";
process.stdin.on("data", d => teks += d).on("end", async () => {
  const { kode, pre = "", tes = [] } = JSON.parse(teks);
  let out = "";
  const tampil = x => { if (x === undefined) return "undefined"; try { return JSON.stringify(x); } catch (e) { return String(x); } };
  const konsol = { log: (...a) => { out += a.map(x => typeof x === "string" ? x : tampil(x)).join(" ") + "\n"; } };
  konsol.info = konsol.warn = konsol.error = konsol.table = konsol.log;
  const diam = { log() {}, info() {}, warn() {}, error() {}, table() {} };
  const kepala = pre ? pre + "\n" : "";
  try { await new AF("console", kepala + kode)(konsol); } catch (e) { out += "ERROR " + e.name + ": " + e.message + "\n"; }
  const hasil = [];
  for (const ekspr of tes) {
    const badan = kepala + kode + "\n;" + (ekspr.includes("\n") || /^(const|let)\s+hasil\b/.test(ekspr) ? ekspr + "\nreturn hasil;" : "return (" + ekspr + ");");
    try { const d = await new AF("console", badan)(diam); hasil.push(d === undefined ? { undef: true } : { nilai: JSON.parse(JSON.stringify(d)) }); }
    catch (e) { hasil.push({ error: e.name + ": " + e.message }); }
  }
  process.stdout.write(JSON.stringify({ hasil, out: out.replace(/\n$/, "") }));
});
