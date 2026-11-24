/* ============================================================
   Lab Coding Test Python & Studi Kasus Koding
   • Lab: tantangan bebas (TANTANGAN_PY) + simulasi coding test 60 menit.
   • Studi Kasus (STUDI_PY): muncul sebagai bab setelah bab pilihan ganda. Contoh terpandu dulu,
     lalu soal menulis kode yang makin sulit. Soal berikutnya terkunci sampai soal ini lulus,
     solusi TIDAK ditampilkan sebelum lulus, dan setiap kesalahan dijelaskan per tes.
   • Kode dijalankan dengan Pyodide di Web Worker; tes dan jawaban diharapkan dibuat oleh
     alat/buat-lab-python.py dari solusi acuan yang sudah diuji.
   ============================================================ */

const PL_PYODIDE = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
const PL_TINGKAT = ["", "Mudah", "Sedang", "Sulit"];

/* ---------- Penilai Python (dijalankan di dalam Pyodide) ---------- */
const PL_PENILAI = String.raw`
import ast, json, math, io, sys, traceback, contextlib
_d = json.loads(_MASUK)

def _sama(a, b):
    if isinstance(a, float) or isinstance(b, float):
        return (isinstance(a, (int, float)) and isinstance(b, (int, float)) and not isinstance(a, bool)
                and not isinstance(b, bool) and math.isclose(a, b, rel_tol=1e-9, abs_tol=1e-6))
    if type(a) is not type(b):
        return False
    if isinstance(a, (list, tuple)):
        return len(a) == len(b) and all(_sama(x, y) for x, y in zip(a, b))
    if isinstance(a, dict):
        return a.keys() == b.keys() and all(_sama(a[k], b[k]) for k in a)
    return a == b

def _tipe(x):
    return {"list": "list", "dict": "dict", "str": "str (teks)", "int": "int", "float": "float",
            "bool": "bool", "NoneType": "None", "tuple": "tuple", "set": "set"}.get(type(x).__name__, type(x).__name__)

def _diagnosa(dapat, harap):
    if dapat is None and harap is not None:
        return "Hasilmu None. Biasanya karena lupa menulis return, menulis print() alih-alih return, atau return berada di cabang if yang tidak terjalankan."
    if isinstance(harap, bool) and isinstance(dapat, bool):
        return "Hasilmu " + repr(dapat) + ", seharusnya " + repr(harap) + ". Cek syarat if/and/or untuk kasus ini."
    num = lambda x: isinstance(x, (int, float)) and not isinstance(x, bool)
    if num(dapat) and num(harap):
        if abs(dapat - harap) < 1:
            return "Angkanya hampir sama. Cek pembulatan (round) dan beda pembagian / dengan //."
        return "Angkanya berbeda. Cek rumusnya dan kasus tepi (data kosong, nol, negatif)."
    if type(dapat) is not type(harap):
        return "Tipe hasilmu " + _tipe(dapat) + ", seharusnya " + _tipe(harap) + "."
    if isinstance(harap, str):
        if dapat.strip().lower() == harap.strip().lower():
            return "Hampir benar: bedanya hanya huruf besar/kecil atau spasi di awal/akhir."
        if len(dapat) != len(harap):
            return "Panjang teksmu " + str(len(dapat)) + " karakter, seharusnya " + str(len(harap)) + "."
        for i, (x, y) in enumerate(zip(dapat, harap)):
            if x != y:
                return "Teks mulai berbeda di karakter ke-" + str(i + 1) + ": punyamu " + repr(x) + ", seharusnya " + repr(y) + "."
    if isinstance(harap, (list, tuple)):
        if len(dapat) != len(harap):
            return "Jumlah item hasilmu " + str(len(dapat)) + ", seharusnya " + str(len(harap)) + "."
        try:
            if sorted(map(repr, dapat)) == sorted(map(repr, harap)):
                return "Isinya sudah benar, tapi URUTANNYA berbeda. Cek cara mengurutkan (sorted, key, reverse)."
        except Exception:
            pass
        for i, (x, y) in enumerate(zip(dapat, harap)):
            if not _sama(x, y):
                return "Item indeks " + str(i) + " berbeda: punyamu " + repr(x)[:80] + ", seharusnya " + repr(y)[:80] + "."
    if isinstance(harap, dict):
        kurang = [k for k in harap if k not in dapat]
        lebih = [k for k in dapat if k not in harap]
        if kurang:
            return "Kunci yang belum ada di hasilmu: " + ", ".join(map(repr, kurang[:4])) + "."
        if lebih:
            return "Ada kunci yang tidak diharapkan: " + ", ".join(map(repr, lebih[:4])) + "."
        for k in harap:
            if not _sama(dapat[k], harap[k]):
                return "Nilai untuk kunci " + repr(k) + " berbeda: punyamu " + repr(dapat[k])[:80] + ", seharusnya " + repr(harap[k])[:80] + "."
    return "Hasilnya berbeda dari yang diharapkan."

_SARAN = {
    "NameError": "Ada nama yang belum dibuat atau salah ketik. Python membedakan huruf besar dan kecil.",
    "TypeError": "Tipe data tidak cocok, misalnya teks + angka, atau jumlah argumen fungsi tidak sesuai.",
    "IndexError": "Indeks di luar jangkauan. Indeks mulai dari 0 dan terakhir len - 1. Cek juga data kosong.",
    "KeyError": "Kunci dict tidak ada. Pakai .get(kunci, nilai_awal) atau cek dulu dengan in.",
    "ZeroDivisionError": "Ada pembagian dengan nol. Tangani data kosong atau nol sebelum membagi.",
    "AttributeError": "Atribut atau method tidak ada pada objek itu. Cek tipe datanya (misalnya list tidak punya .lower()).",
    "ValueError": "Nilainya tidak valid untuk operasi itu, misalnya int('abc').",
    "RecursionError": "Rekursi tidak pernah berhenti. Pastikan ada kasus dasar.",
    "UnboundLocalError": "Variabel dipakai sebelum diberi nilai di dalam fungsi.",
    "EOFError": "Jangan memakai input() di sini: data datang dari parameter fungsi.",
    "ValidationError": "Constraint-mu melempar ValidationError untuk data yang seharusnya valid. Cek syaratnya.",
    "UserError": "Method-mu melempar UserError padahal kasus ini seharusnya boleh. Cek syaratnya.",
}

def _galat(e):
    baris = None
    for fr in traceback.extract_tb(e.__traceback__):
        if fr.filename == "kode_kamu.py":
            baris = fr.lineno
    nama = type(e).__name__
    return {"galat": nama + ": " + str(e)[:300], "baris": baris, "saran": _SARAN.get(nama, "Baca pesan errornya pelan-pelan; biasanya ia menunjuk bagian yang bermasalah.")}

def _ns():
    ns = {"__name__": "__kq__"}
    if _d.get("pre"):
        exec(compile(_d["pre"], "pendukung.py", "exec"), ns)
    return ns

def _jalan_tes(kode_c, tes):
    ns = _ns()
    exec(kode_c, ns)
    if "\n" in tes or tes.startswith("hasil ="):
        exec(compile(tes, "tes.py", "exec"), ns)
        return ns["hasil"]
    return eval(compile(tes, "tes.py", "eval"), ns)

def _utama():
    try:
        kode_c = compile(_d["kode"], "kode_kamu.py", "exec")
    except SyntaxError as e:
        nama = type(e).__name__
        saran = "Cek indentasi (4 spasi) dan jangan campur Tab dengan spasi." if nama in ("IndentationError", "TabError") else "Cek titik dua di akhir def/if/for, kurung dan kutip yang belum ditutup."
        return {"sintaks": {"galat": nama + ": " + str(e.msg), "baris": e.lineno, "saran": saran}}
    keluar = {"hasil": []}
    if _d["mode"] in ("jalan", "contoh"):
        try:
            exec(kode_c, _ns())
        except Exception as e:
            keluar["galat_jalan"] = _galat(e)
        if _d["mode"] == "contoh":
            return keluar
    for ekspr, harap in _d["tes"]:
        h = ast.literal_eval(harap)
        try:
            with contextlib.redirect_stdout(io.StringIO()):
                dapat = _jalan_tes(kode_c, ekspr)
            ok = _sama(dapat, h)
            r = {"ok": ok, "dapat": repr(dapat)[:400]}
            if not ok:
                r["diag"] = _diagnosa(dapat, h)
                if h == [] and isinstance(dapat, list) and all(isinstance(x, str) for x in dapat):
                    r["daftar"] = dapat     # pesan dari pemeriksa XML/CSV
                    r["diag"] = "Pemeriksa menemukan " + str(len(dapat)) + " hal yang masih perlu diperbaiki:"
        except Exception as e:
            r = {"ok": False}
            r.update(_galat(e))
            if isinstance(e, NameError) and _d.get("fungsi") and _d["fungsi"] not in _d["kode"]:
                r["saran"] = "Nama " + _d["fungsi"] + " tidak ditemukan di kodemu. Jangan ganti nama fungsi/class dari kode awal."
        keluar["hasil"].append(r)
    return keluar

json.dumps(_utama())
`;

const PL_WORKER = `
importScripts("${PL_PYODIDE}pyodide.js");
const siap = loadPyodide({ indexURL: "${PL_PYODIDE}" });
siap.then(() => postMessage({ t: "siap" }), e => postMessage({ t: "gagal", s: String(e) }));
onmessage = async e => {
  const py = await siap;
  let out = "";
  py.setStdout({ batched: s => { out += s + "\\n"; } });
  py.setStderr({ batched: s => { out += s + "\\n"; } });
  py.setStdin({ stdin: () => null });
  const g = py.globals.get("dict")();
  g.set("_MASUK", JSON.stringify(e.data));
  try {
    // pustaka seperti pandas diunduh otomatis saat pertama dipakai
    try { await py.loadPackagesFromImports((e.data.pre || "") + "\\n" + e.data.kode + "\\n" + (e.data.tes || []).map(t => t[0]).join("\\n")); } catch (_) {}
    const r = await py.runPythonAsync(e.data.penilai, { globals: g });
    postMessage({ t: "hasil", r: JSON.parse(r), out });
  } catch (err) {
    postMessage({ t: "hasil", r: { sintaks: { galat: String(err.message || err).split("\\n").slice(-2).join(" "), saran: "Galat di mesin penilai." } }, out });
  }
  g.destroy();
};`;

let PL_W = null, PL_SIAP = false;
function plWorker() {
  if (PL_W) return PL_W;
  const url = URL.createObjectURL(new Blob([PL_WORKER], { type: "text/javascript" }));
  PL_W = new Worker(url);
  URL.revokeObjectURL(url);
  PL_SIAP = false;
  PL_W.addEventListener("message", e => {
    if (e.data.t === "siap") { PL_SIAP = true; const m = el("pl-mesin"); if (m) m.textContent = "✓ Python siap"; }
    if (e.data.t === "gagal") { const m = el("pl-mesin"); if (m) m.textContent = "⚠️ Python gagal dimuat (butuh internet sekali)"; }
  });
  return PL_W;
}
// Menjalankan kode di worker. Perulangan tanpa akhir dihentikan dengan mematikan worker.
function plJalankanPy(data) {
  return new Promise(res => {
    const w = plWorker();
    if (!PL_SIAP) el("pl-mesin").textContent = "Memuat Python (± 10 MB, sekali saja)…";
    const batas = setTimeout(() => {
      w.terminate(); PL_W = null;
      res({ r: { waktuHabis: true }, out: "" });
    }, PL_SIAP ? 10000 : 120000);
    const dengar = e => {
      if (e.data.t === "gagal") { clearTimeout(batas); w.removeEventListener("message", dengar); PL_W = null; res({ r: { gagalMuat: e.data.s }, out: "" }); }
      if (e.data.t !== "hasil") return;
      clearTimeout(batas); w.removeEventListener("message", dengar); res(e.data);
    };
    w.addEventListener("message", dengar);
    w.postMessage({ ...data, penilai: PL_PENILAI });
  });
}

/* ---------- Data & status ---------- */
function dataPy() {
  const p = DATA.pylab = DATA.pylab || {};
  p.lulus = p.lulus || []; p.draf = p.draf || {}; p.riwayat = p.riwayat || {}; p.petunjuk = p.petunjuk || {};
  p.gagal = p.gagal || {}; p.lihat = p.lihat || []; p.contoh = p.contoh || {}; p.simRiwayat = p.simRiwayat || [];
  return p;
}
const PL_TPY = {};
TANTANGAN_PY.forEach(T => { PL_TPY[T.id] = T; });
STUDI_PY.forEach(S => S.langkah.forEach(T => { PL_TPY[T.id] = T; }));
const studiSetelah = (t, k) => STUDI_PY.filter(S => S.topik === t && S.setelah === k);
function statusStudi(S) {
  const p = dataPy(), lulus = S.langkah.filter(T => p.lulus.includes(T.id)).length;
  return { lulus, selesai: lulus === S.langkah.length };
}
// MODE aktif: { jenis: "lab" | "studi" | "sim", daftar: [T], i, S? }
let PL = null, PL_TIMER = null;

/* ---------- Lab bebas ---------- */
function plDaftarLab(f) {
  return TANTANGAN_PY.filter(T => f === "semua" || T.kategori === f);
}
function renderPyLab(a) {
  const p = dataPy();
  let f = a.f || DATA.pref.pyFilter || "semua";
  if (!(f === "semua" || f === "sim" || KATEGORI_PY[f])) f = "semua";
  const pil = { semua: "Semua", ...KATEGORI_PY, sim: "⏱️ Simulasi 60 menit" };
  el("pl-filter").innerHTML = Object.entries(pil).map(([k, n]) => {
    const d = k === "sim" ? null : plDaftarLab(k);
    return `<button class="lingkup ${k === f ? "aktif" : ""}" data-f="${k}">${n}${d ? ` <small>${d.filter(T => p.lulus.includes(T.id)).length}/${d.length}</small>` : ""}</button>`;
  }).join("");
  el("pl-filter").classList.remove("tersembunyi");
  el("pl-filter").querySelectorAll("button").forEach(b => b.onclick = () => { DATA.pref.pyFilter = b.dataset.f; simpan(); go("pylab", { f: b.dataset.f }, { replace: true }); });
  if (f === "sim") return renderSimulasi();
  const daftar = plDaftarLab(f);
  let i = a.id ? daftar.findIndex(T => T.id === a.id) : -1;
  if (i < 0) i = Math.max(0, daftar.findIndex(T => !p.lulus.includes(T.id)));
  PL = { jenis: "lab", daftar, i, f };
  el("pl-eyebrow").textContent = "🐍 Lab Coding Test · Python & Odoo";
  el("pl-h").textContent = "Tantangan Python dunia kerja";
  plProgres(TANTANGAN_PY.filter(T => p.lulus.includes(T.id)).length, TANTANGAN_PY.length);
  plTampilSim(false);
  plRender();
}

/* ---------- Studi kasus (berurutan, terkunci) ---------- */
function renderPraktik(a) {
  const S = STUDI_PY.find(x => x.id === a.id) || STUDI_PY[0], p = dataPy();
  const terbuka = S.langkah.findIndex(T => !p.lulus.includes(T.id));       // soal pertama yang belum lulus
  const batas = terbuka < 0 ? S.langkah.length - 1 : terbuka;
  let i = a.n != null ? Math.min(a.n, batas) : batas;
  PL = { jenis: "studi", daftar: S.langkah, i, S };
  const info = TOPIK_INFO[S.topik];
  el("pl-eyebrow").textContent = S.ujian ? `🏁 Coding Test Besar · ${S.cakupan}` : `✍️ Studi Kasus Koding · ${info ? info.nama : ""}`;
  el("pl-h").textContent = S.judul;
  const st = statusStudi(S);
  plProgres(st.lulus, S.langkah.length);
  el("pl-filter").classList.add("tersembunyi");
  plTampilSim(false);
  plRender();
  // Pertama kali membuka studi: tampilkan contoh terpandu dulu
  if (!p.contoh[S.id] && i === 0) plTab("contoh");
}

/* ---------- Simulasi coding test ---------- */
const PL_SIM_MENIT = 60;
function renderSimulasi() {
  const p = dataPy(), sim = p.sim;
  el("pl-eyebrow").textContent = "⏱️ Simulasi Coding Test";
  el("pl-h").textContent = "3 soal · 60 menit · tanpa petunjuk";
  if (!sim || sim.selesai) {
    PL = { jenis: "sim-awal" };
    plTampilSim(true);
    const lalu = p.simRiwayat.slice(-5).reverse();
    el("pl-sim").innerHTML = `<div class="pl-sim-awal">
      <p><b>Seperti tes sungguhan.</b> Kamu mendapat 3 soal acak: 1 dasar/otomasi (mudah), 1 algoritma (sedang), dan 1 logika bisnis Odoo. Waktu 60 menit, petunjuk dan solusi dikunci sampai simulasi selesai.</p>
      <p class="kecil">Saran: baca ketiga soal dulu, kerjakan yang paling yakin lebih dulu, dan uji kasus tepi (data kosong, nol, negatif) sebelum mengumpulkan.</p>
      <button class="btn btn-utama" id="btn-pl-sim-mulai">Mulai simulasi 60 menit</button>
      ${lalu.length ? `<h4 class="lab-sub">Riwayat simulasi</h4><ul class="pl-sim-riwayat">${lalu.map(r => `<li>${tglJam(r.t)} · <b>${r.skor}/3</b> lulus · ${r.menit} menit</li>`).join("")}</ul>` : ""}
    </div>`;
    el("btn-pl-sim-mulai").onclick = mulaiSimulasi;
    document.querySelector("#layar-pylab .lab-grid").classList.add("tersembunyi");
    el("pl-nav").innerHTML = "";
    return;
  }
  document.querySelector("#layar-pylab .lab-grid").classList.remove("tersembunyi");
  const daftar = sim.daftar.map(id => PL_TPY[id]);
  PL = { jenis: "sim", daftar, i: Math.min(PL && PL.jenis === "sim" ? PL.i : 0, 2) };
  plProgres(sim.lulus.length, 3);
  plTampilSim(true);
  plDetakSim();
  plRender();
}
function mulaiSimulasi() {
  const p = dataPy();
  const pilih = (saring) => {
    const semua = TANTANGAN_PY.filter(saring), baru = semua.filter(T => !p.lulus.includes(T.id));
    const dari = baru.length ? baru : semua;
    return dari[Math.floor(Math.random() * dari.length)].id;
  };
  p.sim = {
    mulai: Date.now(), akhir: Date.now() + PL_SIM_MENIT * 60000, lulus: [], selesai: false,
    daftar: [pilih(T => T.tingkat === 1 && ["dasar", "otomasi"].includes(T.kategori)),
             pilih(T => T.kategori === "algo" && T.tingkat >= 2),
             pilih(T => T.kategori === "odoo" && T.tingkat >= 2)],
  };
  simpan();
  renderSimulasi();
}
function plDetakSim() {
  clearInterval(PL_TIMER);
  const tick = () => {
    const p = dataPy(), sim = p.sim;
    if (!sim || sim.selesai || document.body.dataset.layar !== "pylab") return clearInterval(PL_TIMER);
    const sisa = Math.max(0, sim.akhir - Date.now()), m = Math.floor(sisa / 60000), s = Math.floor(sisa % 60000 / 1000);
    el("pl-sim").innerHTML = `<span class="pl-jam ${sisa < 600000 ? "pl-jam-mepet" : ""}">⏱️ ${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}</span>
      <span>${sim.lulus.length}/3 soal lulus</span>
      <button class="btn btn-garis btn-kecil" id="btn-pl-sim-akhir">Akhiri simulasi</button>`;
    el("btn-pl-sim-akhir").onclick = () => tanya({ judul: "Akhiri simulasi?", pesan: "Skormu dihitung dari soal yang sudah lulus.", ya: "Akhiri", tidak: "Lanjut mengerjakan" }).then(ok => ok && akhiriSimulasi());
    if (!sisa) akhiriSimulasi();
  };
  tick();
  PL_TIMER = setInterval(tick, 1000);
}
function akhiriSimulasi() {
  const p = dataPy(), sim = p.sim;
  if (!sim || sim.selesai) return;
  clearInterval(PL_TIMER);
  sim.selesai = true;
  const menit = Math.min(PL_SIM_MENIT, Math.round((Date.now() - sim.mulai) / 60000));
  p.simRiwayat.push({ t: Date.now(), skor: sim.lulus.length, menit });
  simpan();
  const pesan = sim.lulus.length === 3 ? "Luar biasa, semua soal lulus. Kamu siap untuk coding test sungguhan."
    : sim.lulus.length === 2 ? "Bagus. Pelajari soal yang belum lulus, lalu ulangi simulasi besok."
    : "Tidak apa-apa. Kerjakan ulang soal-soal ini di Lab (petunjuk sekarang terbuka), lalu coba simulasi lagi.";
  tanya({ judul: `Simulasi selesai: ${sim.lulus.length}/3`, html: `<p>Waktu dipakai: <b>${menit} menit</b>.</p><p>${pesan}</p>
    <ul>${sim.daftar.map(id => `<li>${sim.lulus.includes(id) ? "✓" : "✗"} ${esc(PL_TPY[id].judul)}</li>`).join("")}</ul>`, ya: "Kembali ke Lab", tanpaBatal: true })
    .then(() => { DATA.pref.pyFilter = "semua"; simpan(); go("pylab", { f: "semua" }, { replace: true }); });
}
function plTampilSim(on) { el("pl-sim").classList.toggle("tersembunyi", !on); if (!on) document.querySelector("#layar-pylab .lab-grid").classList.remove("tersembunyi"); }

/* ---------- Render bersama ---------- */
function plProgres(ok, n) {
  el("pl-progres").textContent = `${ok} dari ${n} lulus · ${n ? Math.round(ok / n * 100) : 0}%`;
  el("pl-prog-isi").style.width = (n ? ok / n * 100 : 0) + "%";
}
const plT = () => PL.daftar[PL.i];
function plTerkunci(k) {   // studi: soal setelah soal pertama yang belum lulus terkunci
  if (PL.jenis !== "studi") return false;
  const p = dataPy(), terbuka = PL.daftar.findIndex(T => !p.lulus.includes(T.id));
  return terbuka >= 0 && k > terbuka;
}
function plPindah(k) {
  if (PL.jenis === "studi") return go("praktik", { id: PL.S.id, n: k }, { replace: true });
  if (PL.jenis === "sim") { PL.i = k; return plRender(); }
  go("pylab", { f: PL.f, id: PL.daftar[k].id }, { replace: true });
}
function plRender() {
  const p = dataPy(), T = plT(), k = PL.i, studi = PL.jenis === "studi", sim = PL.jenis === "sim";
  plRenderNav();
  el("pl-posisi").textContent = studi ? `Soal ${k + 1} dari ${PL.daftar.length}` : sim ? `Simulasi · soal ${k + 1} dari 3` : `${KATEGORI_PY[T.kategori].toUpperCase()} · ${k + 1} dari ${PL.daftar.length}`;
  plRenderIsi(p, T, k, studi, sim);
}
// Nomor soal + gembok; dipanggil ulang setelah lulus supaya gembok soal berikutnya langsung hilang.
function plRenderNav() {
  const p = dataPy(), k = PL.i, sim = PL.jenis === "sim";
  el("pl-nav").innerHTML = PL.daftar.map((X, j) => {
    const kunci = plTerkunci(j);
    return `<button class="lab-no ${j === k ? "aktif" : ""} ${p.lulus.includes(X.id) || (sim && p.sim.lulus.includes(X.id)) ? "lulus" : ""} ${kunci ? "terkunci" : ""}" data-k="${j}" title="${esc(kunci ? "Terkunci: luluskan soal sebelumnya dulu" : X.judul)}" ${kunci ? "aria-disabled=\"true\"" : ""}>${kunci ? "🔒" : j + 1}</button>`;
  }).join("");
  el("pl-nav").querySelectorAll(".lab-no").forEach(b => b.onclick = () => {
    if (b.classList.contains("terkunci")) { plGetar(b); return toast("🔒 Luluskan soal sebelumnya dulu."); }
    plPindah(+b.dataset.k);
  });
  setTimeout(() => document.querySelector("#pl-nav .lab-no.aktif")?.scrollIntoView({ block: "nearest", inline: "center" }), 60);
  el("btn-pl-prev").disabled = k <= 0;
  el("btn-pl-next").disabled = k >= PL.daftar.length - 1 || plTerkunci(k + 1);
  el("btn-pl-prev").onclick = () => plPindah(k - 1);
  el("btn-pl-next").onclick = () => plPindah(k + 1);
}
function plRenderIsi(p, T, k, studi, sim) {
  el("pl-judul").textContent = T.judul;
  el("pl-label").innerHTML = `<span class="tk tk-${T.tingkat}">${PL_TINGKAT[T.tingkat]}</span><span class="tag-skill">${esc(KATEGORI_PY[T.kategori] || "Studi kasus")}</span>` +
    (T.kompleksitas ? `<span class="tag-skill">target ${esc(T.kompleksitas)}</span>` : "") +
    (p.lulus.includes(T.id) ? `<span class="tag-selesai">✓ Lulus</span>` : "");
  el("pl-cerita").innerHTML = T.cerita || "";
  el("pl-cerita").classList.toggle("tersembunyi", !T.cerita);
  el("pl-soal").innerHTML = T.soal;
  el("pl-contoh").innerHTML = T.tes.slice(0, T.contoh).map(([e, h]) =>
    `<div class="pl-contoh"><pre class="kode-soal kecil-kode"><code>${esc(plTampilEkspr(e))}</code></pre><p>→ <code>${esc(h)}</code></p></div>`).join("");
  el("pl-tes-ket").textContent = `Saat dikumpulkan, kodemu diuji dengan ${T.tes.length} tes: ${T.contoh} contoh di atas + ${T.tes.length - T.contoh} tes tambahan (kasus tepi).`;
  el("pl-bantuan").classList.toggle("tersembunyi", sim && !p.sim.selesai);
  plRenderPetunjuk();
  el("pl-kode").value = p.draf[T.id] != null ? p.draf[T.id] : plKodeAwal(T, k);
  el("pl-hasil").innerHTML = `<p class="cek-kosong">${studi ? "Tulis kodemu sendiri. ▶ Jalankan untuk mencoba dengan contoh (tidak dinilai), ✓ Kumpulkan untuk diuji dengan semua tes." : "▶ Jalankan = coba dengan contoh (tidak dinilai). ✓ Kumpulkan = diuji dengan semua tes."}</p>`;
  el("pl-status").className = "lab-status tersembunyi";
  // tab Contoh hanya ada di studi kasus
  document.querySelector('.pl-tab-btn[data-panel="contoh"]').classList.toggle("tersembunyi", !studi);
  if (studi) plRenderContoh();
  plTab("tantangan");
  plRenderSolusi(); plRenderRiwayat();
  el("pl-mesin").textContent = PL_SIAP ? "✓ Python siap" : "Python dimuat saat Jalankan pertama";
}
const plTampilEkspr = e => e;
// Coding test besar: bagian B/C diawali kode LULUS milik pengguna dari bagian sebelumnya, lalu kerangka bagian baru.
function plKodeAwal(T, k) {
  if (!T.awal_baru || !PL.S || !PL.S.ujian || k === 0) return T.awal;
  const prev = PL.daftar[k - 1], lulus = (dataPy().riwayat[prev.id] || []).filter(x => x.ok).pop();
  return lulus ? lulus.q.replace(/\s+$/, "") + "\n\n\n" + T.awal_baru : T.awal;
}
function plTab(panel) {
  document.querySelectorAll(".pl-tab-btn").forEach(b => { const on = b.dataset.panel === panel; b.classList.toggle("aktif", on); b.setAttribute("aria-selected", on); });
  ["contoh", "tantangan", "solusi", "riwayat"].forEach(x => el("pl-panel-" + x).classList.toggle("tersembunyi", x !== panel));
  if (panel === "contoh" && PL.S) { dataPy().contoh[PL.S.id] = Date.now(); simpan(); }
}
function plRenderContoh() {
  const C = PL.S.contoh;
  el("pl-panel-contoh").innerHTML = `<h3 class="lab-judul">${esc(C.judul)}</h3>${C.penjelasan}
    <pre class="jawab-kode"><code>${esc(C.kode)}</code></pre>
    <p><button class="btn btn-garis btn-kecil" id="btn-pl-contoh-jalan">▶ Jalankan contoh ini</button></p>
    <div id="pl-contoh-out"><p class="kecil">Output yang akan muncul:</p><pre class="pl-out">${esc(C.keluaran)}</pre></div>
    ${C.kunci ? `<div class="petunjuk-lab"><b>Yang perlu kamu ingat</b><p>${esc(C.kunci)}</p></div>` : ""}
    <button class="btn btn-utama" id="btn-pl-ke-tugas">Saya paham, kerjakan soalnya →</button>`;
  el("btn-pl-ke-tugas").onclick = () => plTab("tantangan");
  el("btn-pl-contoh-jalan").onclick = async () => {
    el("pl-contoh-out").innerHTML = `<p class="kecil">Menjalankan…</p>`;
    const h = await plJalankanPy({ mode: "contoh", kode: C.kode, tes: [] });
    el("pl-contoh-out").innerHTML = `<p class="kecil">Output:</p><pre class="pl-out">${esc(h.out || "(tidak ada output)")}</pre>`;
  };
}
function plRenderPetunjuk() {
  const p = dataPy(), T = plT(), n = p.petunjuk[T.id] || 0, total = T.petunjuk.length, studi = PL.jenis === "studi";
  const gagal = p.gagal[T.id] || 0, syarat = [1, 2, 4];   // studi: petunjuk terbuka setelah mencoba
  el("pl-bantuan-n").textContent = `${total} petunjuk${n ? ` (${n} dibuka)` : ""}`;
  let tombol = "";
  if (n < total) {
    if (studi && !p.lulus.includes(T.id) && gagal < syarat[n]) tombol = `<p class="kecil">🔒 Petunjuk ${n + 1} terbuka setelah kamu mengumpulkan ${syarat[n]} kali dan masih salah (sekarang ${gagal}). Coba dulu sendiri!</p>`;
    else tombol = `<button class="btn btn-garis btn-kecil" id="btn-pl-petunjuk">💡 Buka petunjuk ${n + 1} dari ${total}</button>${studi ? "" : ` <span class="kecil">XP berkurang 5 per petunjuk.</span>`}`;
  }
  el("pl-petunjuk-isi").innerHTML = T.petunjuk.slice(0, n).map((h, j) => `<div class="petunjuk-lab"><b>Petunjuk ${j + 1}</b><p>${esc(h)}</p></div>`).join("") + tombol;
  const b = el("btn-pl-petunjuk");
  if (b) b.onclick = () => { p.petunjuk[T.id] = n + 1; simpan(); plRenderPetunjuk(); el("pl-bantuan").open = true; };
}
function plRenderSolusi() {
  const p = dataPy(), T = plT(), lulus = p.lulus.includes(T.id), sim = PL.jenis === "sim" && !p.sim.selesai;
  const bolehMenyerah = PL.jenis === "lab" && (p.gagal[T.id] || 0) >= 3;
  el("pl-panel-solusi").innerHTML = (lulus || p.lihat.includes(T.id)) && !sim
    ? `<h4 class="lab-sub">Solusi acuan</h4><pre class="jawab-kode"><code>${esc(T.solusi)}</code></pre><p><b>Kenapa begini?</b> ${esc(T.jelas)}</p>
       <p class="kecil">Cara lain yang lulus semua tes juga benar. Bandingkan dengan kodemu: mana yang lebih mudah dibaca?</p>`
    : `<div class="solusi-kunci"><p><b>🔒 Solusi terkunci sampai kodemu lulus.</b> ${sim ? "Simulasi sedang berjalan." : "Kesalahanmu dijelaskan per tes di panel hasil, dan petunjuk ada di tab Tugas."}</p>
       ${bolehMenyerah ? `<button class="btn btn-garis btn-kecil" id="btn-pl-menyerah">🏳️ Sudah 3 kali gagal, buka solusi</button>` : ""}</div>`;
  const b = el("btn-pl-menyerah");
  if (b) b.onclick = () => tanya({ judul: "Buka solusi?", pesan: "XP tantangan ini menjadi 5. Setelah membaca, tutup solusinya dan ketik ulang sendiri tanpa melihat.", ya: "Buka solusi", tidak: "Coba lagi" })
    .then(ok => { if (!ok) return; p.lihat.push(T.id); simpan(); plRenderSolusi(); });
}
function plRenderRiwayat() {
  const T = plT(), r = (dataPy().riwayat[T.id] || []).slice().reverse();
  el("pl-riwayat-n").textContent = r.length || "";
  el("pl-panel-riwayat").innerHTML = r.length
    ? `<h4 class="lab-sub">Riwayat pengumpulan</h4>` + r.map((x, j) => `<div class="riwayat-item ${x.ok ? "ok" : ""}">
        <p><b>${x.ok ? "✓ Lulus" : `✗ ${x.lulus}/${x.n} tes`}</b> <small>${tglJam(x.t)}</small></p>
        <pre class="kode-soal kecil-kode"><code>${esc(x.q)}</code></pre>
        <button class="btn-mini" data-j="${j}">Pakai lagi</button></div>`).join("")
    : `<p class="cek-kosong">Belum ada kode yang dikumpulkan untuk soal ini.</p>`;
  el("pl-panel-riwayat").querySelectorAll("[data-j]").forEach(b => b.onclick = () => { el("pl-kode").value = r[+b.dataset.j].q; plTab("tantangan"); });
}

/* ---------- Menjalankan & menilai ---------- */
function plGetar(node) {
  node.classList.remove("pl-goyang"); void node.offsetWidth; node.classList.add("pl-goyang");
  if (navigator.vibrate) navigator.vibrate([90, 50, 90]);
}
function plKotakGalat(g, judul) {
  return `<div class="feedback fb-salah"><strong>${esc(judul)}${g.baris ? ` (baris ${g.baris})` : ""}</strong><pre class="pl-out">${esc(g.galat)}</pre><p class="kecil">💡 ${esc(g.saran || "")}</p></div>`;
}
function plTabelTes(T, hasil, dariContoh) {
  return `<div class="pl-tes">${hasil.map((r, j) => {
    const [e, h] = T.tes[j], label = j < T.contoh ? `Contoh ${j + 1}` : `Tes ${j + 1}`;
    return `<div class="pl-tes-item ${r.ok ? "ok" : "gagal"}">
      <p class="pl-tes-kepala"><b>${r.ok ? "✓" : "✗"} ${label}</b></p>
      <pre class="kode-soal kecil-kode"><code>${esc(e)}</code></pre>
      ${r.ok ? `<p class="kecil">Hasil: <code>${esc(r.dapat)}</code></p>`
        : r.galat ? `<p class="kecil">Error${r.baris ? ` di baris ${r.baris}` : ""}: <code>${esc(r.galat)}</code></p><p class="kecil">💡 ${esc(r.saran)}</p>`
        : r.daftar ? `<p class="kecil">💡 ${esc(r.diag)}</p><ul class="pl-daftar">${r.daftar.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`
        : `<p class="kecil">Diharapkan: <code>${esc(h)}</code><br>Hasilmu: <code>${esc(r.dapat)}</code></p><p class="kecil">💡 ${esc(r.diag || "")}</p>`}
    </div>`;
  }).join("")}</div>${dariContoh ? `<p class="kecil">Ini baru contoh. Tes tambahan dijalankan saat kamu menekan ✓ Kumpulkan.</p>` : ""}`;
}
async function plJalankan() {
  const p = dataPy(), T = plT(), kode = el("pl-kode").value;
  p.draf[T.id] = kode; simpan();
  el("pl-status").className = "lab-status tersembunyi";
  el("pl-hasil").innerHTML = `<p class="cek-kosong">⏳ Menjalankan…</p>`;
  const h = await plJalankanPy({ mode: "jalan", kode, pre: T.pre || "", fungsi: T.fungsi, tes: T.tes.slice(0, T.contoh) });
  if (plPesanMesin(h.r)) return;
  let html = `<div class="info-percobaan">ⓘ <b>Percobaan</b>, belum dinilai.</div>`;
  if (h.out) html += `<p class="hasil-label">Output print():</p><pre class="pl-out">${esc(h.out)}</pre>`;
  if (h.r.sintaks) html += plKotakGalat(h.r.sintaks, "Kode belum bisa dibaca Python");
  else {
    if (h.r.galat_jalan) html += plKotakGalat(h.r.galat_jalan, "Error saat kode dijalankan");
    html += plTabelTes(T, h.r.hasil, true);
  }
  el("pl-hasil").innerHTML = html;
}
function plPesanMesin(r) {
  if (r.waktuHabis) {
    el("pl-hasil").innerHTML = plKotakGalat({ galat: "Kode berjalan lebih dari 10 detik dan dihentikan.", saran: "Kemungkinan ada perulangan tanpa akhir: syarat while yang tidak pernah False, atau variabel penghitung yang tidak berubah." }, "Waktu habis");
    plGetar(el("pl-editor")); return true;
  }
  if (r.gagalMuat) { el("pl-hasil").innerHTML = plKotakGalat({ galat: r.gagalMuat, saran: "Python (Pyodide) perlu internet saat dimuat pertama kali. Periksa koneksi lalu coba lagi." }, "Python gagal dimuat"); return true; }
  return false;
}
async function plKumpulkan() {
  const p = dataPy(), T = plT(), kode = el("pl-kode").value, studi = PL.jenis === "studi", sim = PL.jenis === "sim";
  p.draf[T.id] = kode;
  el("pl-hasil").innerHTML = `<p class="cek-kosong">⏳ Menguji dengan ${T.tes.length} tes…</p>`;
  const h = await plJalankanPy({ mode: "nilai", kode, pre: T.pre || "", fungsi: T.fungsi, tes: T.tes });
  if (plPesanMesin(h.r)) return;
  const hasil = h.r.hasil || [], lulusN = hasil.filter(r => r.ok).length, benar = !h.r.sintaks && lulusN === T.tes.length;
  (p.riwayat[T.id] = p.riwayat[T.id] || []).push({ t: Date.now(), ok: benar, lulus: lulusN, n: T.tes.length, q: kode.slice(0, 3000) });
  p.riwayat[T.id] = p.riwayat[T.id].slice(-12);
  const st = el("pl-status");
  if (!benar) {
    p.gagal[T.id] = (p.gagal[T.id] || 0) + 1;
    simpan(); plRenderRiwayat(); plRenderPetunjuk(); plRenderSolusi();
    el("pl-hasil").innerHTML = h.r.sintaks ? plKotakGalat(h.r.sintaks, "Kode belum bisa dibaca Python") : plTabelTes(T, hasil, false);
    st.className = "lab-status muncul fb-salah";
    st.innerHTML = h.r.sintaks
      ? `<strong>❌ Masih salah.</strong> Ada kesalahan penulisan${h.r.sintaks.baris ? ` di baris ${h.r.sintaks.baris}` : ""}, jadi belum ada tes yang bisa dijalankan.`
      : `<strong>❌ Masih salah: ${T.tes.length - lulusN} dari ${T.tes.length} tes gagal.</strong> Lihat rincian tiap tes di bawah, perbaiki, lalu kumpulkan lagi.${studi ? " Soal berikutnya terbuka setelah semua tes lulus." : ""}`;
    plGetar(el("pl-editor")); plGetar(st);
    if (typeof RAYA !== "undefined") RAYA.nada("salah");
    toast(`❌ Masih salah: ${T.tes.length - lulusN} tes gagal`);
    return;
  }
  const pertama = !p.lulus.includes(T.id);
  const xp = p.lihat.includes(T.id) ? 5 : studi ? 20 : Math.max(5, 25 - 5 * (p.petunjuk[T.id] || 0));
  if (pertama) { p.lulus.push(T.id); DATA.xp += xp; catatStreak(); catatAktivitas(); }
  if (sim && !p.sim.lulus.includes(T.id)) p.sim.lulus.push(T.id);
  simpan(); renderStat(); plRenderRiwayat(); plRenderSolusi(); plRenderPetunjuk();
  el("pl-hasil").innerHTML = plTabelTes(T, hasil, false);
  st.className = "lab-status muncul fb-benar";
  st.innerHTML = `<strong>✓ Semua ${T.tes.length} tes lulus!</strong> ${sim ? "" : esc(T.jelas)}`;
  if (typeof RAYA !== "undefined") { RAYA.nada(pertama ? "menang" : "benar"); if (pertama) RAYA.konfeti(1, st); }
  plRenderNav();
  if (sim) {
    plProgres(p.sim.lulus.length, 3);
    if (p.sim.lulus.length === 3) return setTimeout(akhiriSimulasi, 600);
    return;
  }
  if (studi) {
    const S = PL.S, stt = statusStudi(S);
    plProgres(stt.lulus, S.langkah.length);
    const lanjut = PL.i + 1 < S.langkah.length;
    setTimeout(() => tanya({
      judul: lanjut ? "Benar! Soal berikutnya terbuka 🔓" : "Studi kasus selesai! 🎉",
      html: `<p>${pertama ? `+${xp} XP. ` : ""}${esc(T.jelas)}</p>${lanjut ? `<p class="kecil">Soal berikutnya memakai cara yang sama, tapi sedikit lebih rumit.</p>` : `<p>Kamu menyelesaikan semua soal <b>${esc(S.judul)}</b>. Lanjutkan ke bab berikutnya di daftar bab.</p>`}`,
      ya: lanjut ? "Soal berikutnya →" : "Kembali ke daftar bab", tidak: "Tetap di sini",
    }).then(ok => { umumkanLencana(cekLencana()); if (!ok) return; lanjut ? go("praktik", { id: S.id, n: PL.i + 1 }, { replace: true }) : kembali(); }), 450);
    return;
  }
  plProgres(TANTANGAN_PY.filter(X => p.lulus.includes(X.id)).length, TANTANGAN_PY.length);
  if (!pertama) return;
  const k = PL.i, lanjut = PL.daftar.findIndex((X, j) => j > k && !p.lulus.includes(X.id));
  setTimeout(() => tanya({
    judul: "Lulus! 🎉", html: `<p>Kamu menyelesaikan <b>${esc(T.judul)}</b> dan mendapat <b>+${xp} XP</b>.</p><p class="kecil">Buka tab Solusi untuk membandingkan dengan solusi acuan.</p>`,
    ya: lanjut >= 0 ? "Tantangan berikutnya →" : "Selesai", tidak: "Tetap di sini",
  }).then(ok => { umumkanLencana(cekLencana()); if (ok && lanjut >= 0) plPindah(lanjut); }), 450);
}

/* ---------- Pasang event ---------- */
function pasangPyLab() {
  el("btn-pl-jalankan").onclick = plJalankan;
  el("btn-pl-kumpul").onclick = plKumpulkan;
  el("btn-pl-reset").onclick = () => tanya({ judul: "Kembalikan kode awal?", pesan: "Kode di editor diganti kode awal. Versi yang pernah dikumpulkan tetap ada di tab Riwayat.", ya: "Kembalikan", tidak: "Batal" })
    .then(ok => { if (!ok) return; const awal = plKodeAwal(plT(), PL.i); el("pl-kode").value = awal; dataPy().draf[plT().id] = awal; simpan(); el("pl-kode").focus(); });
  document.querySelectorAll(".pl-tab-btn").forEach(b => b.onclick = () => plTab(b.dataset.panel));
  const ed = el("pl-kode");
  let tunda = null;
  ed.addEventListener("input", () => { clearTimeout(tunda); tunda = setTimeout(() => { if (PL && PL.daftar) { dataPy().draf[plT().id] = ed.value; simpan(); } }, 600); });
  ed.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); e.shiftKey ? plKumpulkan() : plJalankan(); return; }
    const a = ed.selectionStart, z = ed.selectionEnd, v = ed.value;
    if (e.key === "Tab") {   // Tab = 4 spasi, Shift+Tab = kurangi indentasi baris
      e.preventDefault();
      if (e.shiftKey) {
        const awal = v.lastIndexOf("\n", a - 1) + 1, hapus = (v.slice(awal).match(/^ {1,4}/) || [""])[0].length;
        ed.value = v.slice(0, awal) + v.slice(awal + hapus); ed.selectionStart = ed.selectionEnd = Math.max(awal, a - hapus);
      } else { ed.value = v.slice(0, a) + "    " + v.slice(z); ed.selectionStart = ed.selectionEnd = a + 4; }
    }
    if (e.key === "Enter" && !e.ctrlKey && !e.metaKey) {   // Enter menjaga indentasi, +4 setelah titik dua
      e.preventDefault();
      const baris = v.slice(v.lastIndexOf("\n", a - 1) + 1, a), ind = baris.match(/^ */)[0] + (/:\s*$/.test(baris) ? "    " : "");
      ed.value = v.slice(0, a) + "\n" + ind + v.slice(z); ed.selectionStart = ed.selectionEnd = a + 1 + ind.length;
    }
  });
}
