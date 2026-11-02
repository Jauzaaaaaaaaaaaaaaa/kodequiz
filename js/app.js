/* ============================================================
   KodeQuiz v4 — Coding · Data · Karier
   • Navigasi: tombol Kembali & Beranda + tombol back browser/HP
   • Setiap soal: 💡 Petunjuk dan 🏳️ Menyerah → jawaban + penjelasan
   • Data & Bisnis: Excel, SQL, Dashboard & BI, Statistik, ERP & Odoo
   • Coding prioritas (SQL, Python, JavaScript) & opsional (HTML, CSS, Java, PHP)
   • Lab SQL, Belajar dari Awal, Book, Rencana, level & lencana, perayaan skor
   ============================================================ */

// Urutan kunci menentukan urutan di Book. ID soal = topik + indeks, jadi soal baru
// selalu ditambahkan di BELAKANG array supaya progres lama tidak bergeser.
const BANK = {
  excel: SOAL_EXCEL, sql: SOAL_SQL, bi: SOAL_BI, stat: SOAL_STAT, erp: SOAL_ERP,
  karier: SOAL_KARIER,
  python: SOAL_PYTHON, js: SOAL_JS,
  html: SOAL_HTML, css: SOAL_CSS, java: SOAL_JAVA, php: SOAL_PHP,
};
const MATERI = {
  excel: MATERI_EXCEL, sql: MATERI_SQL, bi: MATERI_BI, stat: MATERI_STAT, erp: MATERI_ERP,
  karier: MATERI_KARIER,
  python: MATERI_PYTHON, js: MATERI_JS,
  html: MATERI_HTML, css: MATERI_CSS, java: MATERI_JAVA, php: MATERI_PHP,
};
// prioritas: angka = urutan prioritas belajar coding, 0 = bukan prioritas (opsional)
const TOPIK_INFO = {
  excel:  { nama: "Excel",            ikon: "XL",  kelas: "t-excel",  grup: "data",   ket: "SUMIFS, XLOOKUP, pivot, teks & tanggal, INDEX-MATCH, FILTER" },
  sql:    { nama: "SQL",              ikon: "DB",  kelas: "t-sql",    grup: "data",   ket: "JOIN, GROUP BY, subquery, CASE, CTE, window function",
            prioritas: 1, alasan: "Dipakai di hampir semua lowongan data, dan Odoo menyimpan datanya di PostgreSQL." },
  bi:     { nama: "Dashboard & BI",   ikon: "BI",  kelas: "t-bi",     grup: "data",   ket: "KPI, memilih grafik, star schema, Power BI (DAX) & Looker Studio" },
  stat:   { nama: "Statistik & Metrik", ikon: "%", kelas: "t-stat",   grup: "data",   ket: "Mean/median, metrik bisnis, A/B test, clustering skripsimu" },
  erp:    { nama: "ERP & Odoo",       ikon: "ERP", kelas: "t-erp",    grup: "data",   ket: "Sales, Inventory, akuntansi dasar, metodologi implementasi" },
  karier: { nama: "Persiapan Karier", ikon: "CV",  kelas: "t-karier", grup: "karier", ket: "Portofolio, CV, lowongan, wawancara, LinkedIn" },
  python: { nama: "Python",           ikon: "Py",  kelas: "t-py",     grup: "coding", ket: "Dasar sampai OOP, pandas, Python untuk Odoo, latihan tes coding",
            prioritas: 2, alasan: "Analisis data (pandas) dan Odoo dibangun dengan Python." },
  js:     { nama: "JavaScript",       ikon: "JS",  kelas: "t-js",     grup: "coding", ket: "Dasar, DOM, async, ES6+ modern, jebakan interview",
            prioritas: 3, alasan: "Dashboard web, frontend Odoo (OWL), dan proyek SalesKu." },
  html:   { nama: "HTML",             ikon: "<>",  kelas: "t-html",   grup: "opsional", ket: "Struktur, form, semantik, aksesibilitas & SEO",
            prioritas: 0, alasan: "Cukup sampai bisa menyelesaikan proyek SalesKu dan halaman portofolio." },
  css:    { nama: "CSS",              ikon: "{}",  kelas: "t-css",    grup: "opsional", ket: "Box model, Flexbox, Grid, variabel, responsif",
            prioritas: 0, alasan: "Secukupnya untuk merapikan proyek dan portofolio." },
  java:   { nama: "Java",             ikon: "Jv",  kelas: "t-java",   grup: "opsional", ket: "Tipe data, kontrol, array & String, OOP, koleksi",
            prioritas: 0, alasan: "Banyak di lowongan backend & Android, tapi bukan jalur utamamu." },
  php:    { nama: "PHP",              ikon: "php", kelas: "t-php",    grup: "opsional", ket: "Dasar, array, form & keamanan web, OOP, Laravel",
            prioritas: 0, alasan: "Banyak di lowongan web (Laravel/WordPress). Rencana cadangan." },
};
const GRUP = {
  data:     { nama: "Data & Bisnis", ket: "Fokus utama: skill yang paling sering diminta lowongan Data Analyst, BI, dan ERP/Odoo Consultant." },
  karier:   { nama: "Persiapan Karier", ket: "Ubah skripsi jadi portofolio, tulis CV yang menjual dampak, latih wawancara, dan melamar dengan terukur." },
  coding:   { nama: "Bahasa Pemrograman Prioritas", label: "★ FOKUS UTAMA", ket: "Urutan belajar: SQL (di grup Data & Bisnis) → Python → JavaScript. Tiga bahasa ini paling berguna untuk jalur Data, BI, dan Odoo." },
  opsional: { nama: "Bahasa Pemrograman Bukan Prioritas", label: "OPSIONAL", ket: "Pelajari setelah yang prioritas, untuk proyek & portofolio, atau sebagai rencana cadangan jalur web/backend developer." },
};
function chipPrioritas(info) {
  if (info.prioritas === undefined) return "";
  return info.prioritas
    ? `<span class="chip-prio prio-ya" title="${esc(info.alasan)}">★ Prioritas #${info.prioritas}</span>`
    : `<span class="chip-prio prio-tidak" title="${esc(info.alasan)}">Bukan prioritas</span>`;
}
const LV_NAMA = { 1: "Dasar", 2: "Menengah", 3: "Mahir" };
const HURUF = ["A", "B", "C", "D", "E"];

/* ---------- Penyimpanan ---------- */
const KEY = "kodequiz_v2"; // kunci lama dipertahankan agar progresmu tidak hilang
function bacaData() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
function simpan() { try { localStorage.setItem(KEY, JSON.stringify(DATA)); } catch (e) {} }
let DATA = bacaData();
DATA.kartu = DATA.kartu || {};
DATA.bab = DATA.bab || {};
DATA.randomUsed = DATA.randomUsed || [];
DATA.streak = DATA.streak || { hari: 0, terakhir: null };
DATA.xp = DATA.xp || 0;
DATA.rencana = DATA.rencana || {};
DATA.pref = DATA.pref || { tema: "auto", lingkup: "data" };
DATA.lencana = DATA.lencana || {};
if (!DATA.statistik) {   // pengguna lama: hitung jawaban benar dari riwayat kartu
  const benar = Object.values(DATA.kartu).reduce((n, k) => n + (k.b || 0), 0);
  DATA.statistik = { benar, comboMax: 0 };
}

const idSoal = (t, i) => t + "-" + i;
const el = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
function acak(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/* ---------- Normalisasi jawaban isian ----------
   Tidak peka huruf besar/kecil & spasi, ; dianggap , (Excel Indonesia),
   kutip miring dianggap kutip lurus, "Rp 18.750.000" = "18750000". */
function norm(s) {
  let x = String(s).toLowerCase().trim()
    .replace(/[“”„]/g, '"').replace(/[‘’]/g, "'")
    .replace(/\s+/g, "").replace(/;/g, ",").replace(/^=/, "");
  const angka = x.replace(/^rp\.?/, "");
  if (/^\d{1,3}(\.\d{3})+$/.test(angka)) return angka.replace(/\./g, "");
  if (/^\d+$/.test(angka)) return angka;
  return x;
}

/* ---------- Spaced repetition ---------- */
function ambilKartu(id) { if (!DATA.kartu[id]) DATA.kartu[id] = { ef: 2.3, iv: 0, due: 0, b: 0, s: 0 }; return DATA.kartu[id]; }
function nilaiKartu(id, benar) {
  const k = ambilKartu(id), HARI = 86400000;
  if (benar) { k.b++; k.iv = k.iv === 0 ? 1 : k.iv === 1 ? 3 : Math.round(k.iv * k.ef); k.ef = Math.min(2.8, k.ef + 0.08); }
  else { k.s++; k.iv = 0; k.ef = Math.max(1.3, k.ef - 0.2); }
  k.due = Date.now() + k.iv * HARI;
}
function catatStreak() {
  const hariIni = new Date().toDateString();
  if (DATA.streak.terakhir === hariIni) return;
  const kemarin = new Date(Date.now() - 86400000).toDateString();
  DATA.streak.hari = DATA.streak.terakhir === kemarin ? DATA.streak.hari + 1 : 1;
  DATA.streak.terakhir = hariIni; simpan();
}

/* ---------- Bank soal ---------- */
function semuaSoal(grup) {
  const out = [];
  Object.keys(BANK).forEach(t => {
    if (grup && grup !== "semua" && TOPIK_INFO[t].grup !== grup) return;
    BANK[t].forEach((s, i) => out.push({ ...s, topik: t, id: idSoal(t, i) }));
  });
  return out;
}
const soalTopik = t => BANK[t].map((s, i) => ({ ...s, topik: t, id: idSoal(t, i) }));
const soalBab = (t, k) => soalTopik(t).filter(s => s.k === k);

function kumpulRandom(jumlah, grup) {
  const semua = semuaSoal(grup);
  let sisa = semua.filter(s => !DATA.randomUsed.includes(s.id));
  if (sisa.length < jumlah) {                         // habis → putaran baru untuk lingkup ini
    const ids = new Set(semua.map(s => s.id));
    DATA.randomUsed = DATA.randomUsed.filter(id => !ids.has(id));
    sisa = semua;
  }
  const pilih = acak(sisa).slice(0, jumlah);
  pilih.forEach(s => DATA.randomUsed.push(s.id));
  simpan();
  return pilih;
}
function kumpulPintar(jumlah) {
  const now = Date.now();
  const prio = s => {
    const k = DATA.kartu[s.id];
    if (!k) return ({ data: 60, karier: 55, coding: 52, opsional: 40 }[TOPIK_INFO[s.topik].grup] || 50) + Math.random() * 10;
    return (k.due <= now ? 100 : 0) + k.s * 20 - k.b * 5 + Math.random() * 5;
  };
  return acak(semuaSoal().sort((a, b) => prio(b) - prio(a)).slice(0, jumlah * 2)).slice(0, jumlah);
}

/* ---------- Tabel data (sheet Excel / tabel database) ---------- */
function renderDataset(nama) {
  const d = DATASET[nama];
  if (!d) return "";
  const fmt = (v, i) => d.format && d.format[i] === "angka" ? Number(v).toLocaleString("id-ID") : esc(v);
  if (d.jenis === "sheet") {
    const kol = d.kolom.map((_, i) => String.fromCharCode(65 + i));
    return `<div class="sheet-wrap"><div class="sheet-nama">📄 Sheet: ${esc(d.nama)}</div><div class="tabel-scroll"><table class="sheet">
      <thead><tr><th class="sheet-pojok"></th>${kol.map(k => `<th>${k}</th>`).join("")}</tr></thead>
      <tbody><tr><th>1</th>${d.kolom.map(k => `<td class="sheet-head">${esc(k)}</td>`).join("")}</tr>
      ${d.baris.map((b, r) => `<tr><th>${r + 2}</th>${b.map((v, i) => `<td class="${typeof v === "number" ? "num" : d.pre ? "pre" : ""}">${fmt(v, i)}</td>`).join("")}</tr>`).join("")}
      </tbody></table></div></div>`;
  }
  return `<div class="sheet-wrap"><div class="sheet-nama">🗄️ Tabel: <code>${esc(d.nama)}</code></div><div class="tabel-scroll"><table class="tabel-db">
    <thead><tr>${d.kolom.map(k => `<th>${esc(k)}</th>`).join("")}</tr></thead>
    <tbody>${d.baris.map(b => `<tr>${b.map(v => `<td class="${typeof v === "number" ? "num" : ""}">${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div></div>`;
}
const isiMateri = html => html.replace(/\{\{tb:(\w+)\}\}/g, (_, n) => renderDataset(n));

/* ============ Modal & toast ============ */
function tanya(o) {
  return new Promise(res => {
    const m = el("modal");
    el("modal-judul").textContent = o.judul || "";
    el("modal-isi").innerHTML = o.html || `<p>${esc(o.pesan || "").replace(/\n/g, "<br>")}</p>`;
    el("modal-kotak").classList.toggle("modal-lebar", !!o.lebar);
    const ya = el("modal-ya"), tidak = el("modal-tidak");
    ya.textContent = o.ya || "Ya";
    ya.className = "btn " + (o.bahaya ? "btn-bahaya" : "btn-utama");
    tidak.textContent = o.tidak || "Batal";
    tidak.classList.toggle("tersembunyi", !!o.tanpaBatal);
    const tutup = hasil => { m.classList.remove("buka"); document.removeEventListener("keydown", kunci); setTimeout(() => m.classList.add("tersembunyi"), 200); res(hasil); };
    const kunci = e => { if (e.key === "Escape") { e.stopPropagation(); tutup(false); } };
    ya.onclick = () => tutup(true);
    tidak.onclick = () => tutup(false);
    m.onclick = e => { if (e.target === m) tutup(false); };
    document.addEventListener("keydown", kunci);
    m.classList.remove("tersembunyi");
    requestAnimationFrame(() => m.classList.add("buka"));
    setTimeout(() => ya.focus(), 50);
  });
}
let timerToast = null;
function toast(pesan) {
  const t = el("toast");
  t.textContent = pesan;
  t.classList.add("tampil");
  clearTimeout(timerToast);
  timerToast = setTimeout(() => t.classList.remove("tampil"), 2800);
}

/* ============ Tema ============ */
function terapkanTema() {
  const t = DATA.pref.tema;
  if (t === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", t);
  const gelap = t === "dark" || (t === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
  el("btn-tema").textContent = gelap ? "☀️" : "🌙";
  el("btn-tema").title = gelap ? "Ganti ke mode terang" : "Ganti ke mode gelap";
}
function gantiTema() {
  const gelap = document.documentElement.getAttribute("data-theme") === "dark" ||
    (!document.documentElement.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
  DATA.pref.tema = gelap ? "light" : "dark";
  simpan(); terapkanTema();
}

/* ============ Navigasi ============
   NAV = tumpukan layar. Kembali = keluar dari layar teratas.
   Tombol back browser/HP juga diarahkan ke kembali(). */
let NAV = [];
const ROUTE = {
  beranda: { layar: "layar-beranda", render: () => renderBeranda() },
  topik:   { layar: "layar-topik",   render: a => renderTopik(a.t) },
  materi:  { layar: "layar-materi",  render: a => renderMateri(a.t, a.i) },
  kuis:    { layar: "layar-kuis",    render: null },
  hasil:   { layar: "layar-hasil",   render: null },
  proyek:  { layar: "layar-proyek",  render: () => renderProyekDaftar(), lebar: false },
  langkah: { layar: "layar-langkah", render: a => renderLangkah(a.i), lebar: true },
  sqllab:  { layar: "layar-sqllab",  render: a => renderSqlLab(a.i), lebar: true },
  rencana: { layar: "layar-rencana", render: () => renderRencana() },
  buku:    { layar: "layar-buku",    render: () => renderBuku() },
  bukubab: { layar: "layar-bukubab", render: a => renderBukuBab(a.t, a.i) },
  pdf:     { layar: "layar-pdf",     render: a => bukaPdf(a.b, a.hal) },
};
/* Transisi antarlayar: View Transitions API (Chrome/Edge/Safari baru) dengan
   efek fade + blur halus; browser lain memakai animasi CSS biasa. */
let VT_JALAN = false;
function denganTransisi(fn, arah) {
  if (!document.startViewTransition || !RAYA.efekAktif()) { fn(); return; }
  document.documentElement.dataset.arah = arah;
  VT_JALAN = true;
  try {
    const vt = document.startViewTransition(() => fn());
    vt.ready.catch(() => {});                  // transisi bisa di-skip saat klik beruntun — tidak masalah
    vt.updateCallbackDone.catch(() => {});
    vt.finished.catch(() => {}).finally(() => { VT_JALAN = false; });
  } catch (e) { VT_JALAN = false; fn(); }
}
function tampil(id, arah) {
  document.querySelectorAll(".layar").forEach(l => l.classList.add("tersembunyi"));
  const l = el(id);
  l.classList.remove("tersembunyi", "masuk-maju", "masuk-mundur");
  if (!VT_JALAN) {
    void l.offsetWidth;                                 // restart animasi
    l.classList.add(arah === "mundur" ? "masuk-mundur" : "masuk-maju");
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}
function terapkanRoute(rt, arah) {
  const R = ROUTE[rt.r];
  document.querySelector("main").classList.toggle("lebar", !!R.lebar);
  document.body.dataset.layar = rt.r;
  document.dispatchEvent(new CustomEvent("kq:layar", { detail: rt.r }));
  if (R.render) R.render(rt.a || {});
  tampil(R.layar, arah);
  const diBeranda = rt.r === "beranda";
  document.body.classList.toggle("bukan-beranda", !diBeranda);
  el("btn-nav-kembali").classList.toggle("tersembunyi", diBeranda);
  el("btn-nav-beranda").classList.toggle("tersembunyi", diBeranda);
  renderStat();
}
function go(r, a = {}, opt = {}) {
  if (opt.replace && NAV.length) NAV[NAV.length - 1] = { r, a };
  else if (opt.reset) NAV = [{ r, a }];
  else NAV.push({ r, a });
  denganTransisi(() => terapkanRoute(NAV[NAV.length - 1], "maju"), "maju");
  sinkronHistory();
}
function sinkronHistory() {
  // satu entri "penjaga" agar tombol back browser bisa ditangkap
  if (NAV.length > 1 && !(history.state && history.state.kq === 1)) history.pushState({ kq: 1 }, "");
}
async function kembali() {
  const atas = NAV[NAV.length - 1];
  if (atas && atas.r === "kuis" && SESI && !(await konfirmasiKeluarKuis())) return false;
  if (atas && atas.r === "kuis") SESI = null;
  if (NAV.length <= 1) { NAV = [{ r: "beranda", a: {} }]; denganTransisi(() => terapkanRoute(NAV[0], "mundur"), "mundur"); return true; }
  NAV.pop();
  while (NAV.length > 1 && ["kuis", "hasil"].includes(NAV[NAV.length - 1].r)) NAV.pop();
  denganTransisi(() => terapkanRoute(NAV[NAV.length - 1], "mundur"), "mundur");
  return true;
}
async function keBeranda() {
  const atas = NAV[NAV.length - 1];
  if (atas && atas.r === "kuis" && SESI && !(await konfirmasiKeluarKuis())) return;
  SESI = null;
  NAV = [{ r: "beranda", a: {} }];
  denganTransisi(() => terapkanRoute(NAV[0], "mundur"), "mundur");
}
window.addEventListener("popstate", async () => {
  await kembali();
  if (NAV.length > 1) history.pushState({ kq: 1 }, "");
});

/* ============ Sesi kuis ============ */
let SESI = null;
function mulaiSesi(soal, konteks) {
  if (!soal.length) return toast("Belum ada soal di sini.");
  SESI = { soal, konteks, idx: 0, benar: 0, salah: 0, menyerah: 0, jawaban: [], mulai: Date.now(), terjawab: false, petunjuk: false,
           xpAwal: DATA.xp, combo: 0, comboMax: 0 };
  catatStreak();
  if (NAV.length && NAV[NAV.length - 1].r === "hasil") NAV[NAV.length - 1] = { r: "kuis", a: {} };
  else NAV.push({ r: "kuis", a: {} });
  denganTransisi(() => { terapkanRoute({ r: "kuis" }, "maju"); renderSoal(); }, "maju");
  sinkronHistory();
  RAYA.combo(0);
}
function renderSoal() {
  const s = SESI.soal[SESI.idx];
  SESI.terjawab = false; SESI.petunjuk = false;
  const info = TOPIK_INFO[s.topik];
  el("kuis-topik").textContent = info.nama;
  el("kuis-topik").className = "chip " + info.kelas;
  el("kuis-level").textContent = LV_NAMA[s.lv];
  el("kuis-progres").textContent = (SESI.idx + 1) + " / " + SESI.soal.length;
  el("bar-isi").style.width = (SESI.idx / SESI.soal.length * 100) + "%";

  const tb = s.tb ? (Array.isArray(s.tb) ? s.tb : [s.tb]) : [];
  el("kuis-data").innerHTML = tb.map(renderDataset).join("");
  el("kuis-data").classList.toggle("tersembunyi", !tb.length);
  el("kuis-pertanyaan").textContent = s.q;
  el("kuis-kode").classList.toggle("tersembunyi", !s.kode);
  el("kuis-kode").innerHTML = s.kode ? `<code>${esc(s.kode)}</code>` : "";
  el("kuis-feedback").className = "feedback tersembunyi";
  el("btn-lanjut").classList.add("tersembunyi");
  el("kuis-bantuan").classList.remove("tersembunyi");
  el("btn-petunjuk").disabled = false;

  const kartu = el("kartu-soal");
  kartu.classList.remove("ganti"); void kartu.offsetWidth; kartu.classList.add("ganti");

  const wadah = el("kuis-jawaban");
  wadah.innerHTML = "";
  if (s.t === "mc") {
    s.o.forEach((opsi, i) => {
      const b = document.createElement("button");
      b.className = "opsi muncul" + (opsiKode(opsi) ? " opsi-kode" : "");
      b.style.animationDelay = (i * 50) + "ms";
      b.dataset.i = i;
      b.innerHTML = `<span class="opsi-huruf">${HURUF[i]}</span><span class="opsi-teks">${esc(opsi)}</span>`;
      b.onclick = () => jawabMC(i);
      wadah.appendChild(b);
    });
  } else {
    wadah.innerHTML = `<div class="isian-wrap muncul">
      <input type="text" id="isian-input" class="isian" placeholder="Ketik jawabanmu…" autocomplete="off" autocapitalize="off" spellcheck="false">
      <button class="btn btn-utama" id="isian-kirim">Jawab</button></div>`;
    const input = el("isian-input");
    setTimeout(() => input.focus(), 80);
    const kirim = () => jawabIsian(input.value);
    el("isian-kirim").onclick = kirim;
    input.onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); kirim(); } };
  }
}
function beriPetunjuk() {
  if (SESI.terjawab || SESI.petunjuk) return;
  const s = SESI.soal[SESI.idx];
  SESI.petunjuk = true;
  el("btn-petunjuk").disabled = true;
  const fb = el("kuis-feedback");
  let teks = s.h || "";
  if (s.t === "mc") {                                   // coret satu opsi yang salah
    const salah = acak(s.o.map((_, i) => i).filter(i => i !== s.a && !document.querySelector(`.opsi[data-i="${i}"]`).disabled))[0];
    const b = document.querySelector(`.opsi[data-i="${salah}"]`);
    if (b) { b.classList.add("dicoret"); b.disabled = true; }
    teks = (teks ? teks + " " : "") + `Satu pilihan yang pasti salah sudah dicoret (${HURUF[salah]}).`;
  } else if (!teks) {
    const j = s.a[0];
    teks = `Jawabannya diawali "${j[0].toUpperCase()}" dan terdiri dari ${j.replace(/\s/g, "").length} karakter.`;
  }
  fb.className = "feedback fb-petunjuk muncul";
  fb.innerHTML = `<strong>💡 Petunjuk:</strong> ${esc(teks)} <span class="kecil">(XP soal ini jadi setengah)</span>`;
}
function menyerah() {
  if (SESI.terjawab) return;
  const s = SESI.soal[SESI.idx];
  SESI.terjawab = true;
  if (s.t === "mc") {
    document.querySelectorAll(".opsi").forEach((b, i) => { b.disabled = true; if (i === s.a) b.classList.add("benar"); });
  } else {
    el("isian-input").disabled = true; el("isian-kirim").disabled = true;
    el("isian-input").value = s.a[0];
    el("isian-input").classList.add("dibuka");
  }
  selesaiJawab("menyerah", null);
}
function jawabMC(pilih) {
  if (SESI.terjawab) return;
  SESI.terjawab = true;
  const s = SESI.soal[SESI.idx];
  const benar = pilih === s.a;
  document.querySelectorAll(".opsi").forEach((b, i) => {
    b.disabled = true;
    if (i === s.a) b.classList.add("benar");
    else if (i === pilih) b.classList.add("salah");
  });
  selesaiJawab(benar ? "benar" : "salah", pilih);
}
function jawabIsian(teks) {
  if (SESI.terjawab) return;
  const s = SESI.soal[SESI.idx];
  if (!teks.trim()) return;
  SESI.terjawab = true;
  const benar = s.a.some(x => norm(x) === norm(teks));
  el("isian-input").disabled = true;
  el("isian-kirim").disabled = true;
  el("isian-input").classList.add(benar ? "benar" : "salah");
  selesaiJawab(benar ? "benar" : "salah", teks);
}
function teksJawabanBenar(s) { return s.t === "mc" ? `${HURUF[s.a]}. ${s.o[s.a]}` : s.a[0]; }
function panelPenjelasan(s, status, pilihan) {
  let h = "";
  if (status !== "benar") h += `<p class="jb-benar"><span>Jawaban benar</span><code>${esc(teksJawabanBenar(s))}</code></p>`;
  h += `<p class="jb-kenapa"><b>Kenapa?</b> ${esc(s.e)}</p>`;
  if (s.t === "mc" && s.w) {
    const urut = s.o.map((_, i) => i).filter(i => i !== s.a);
    if (typeof pilihan === "number" && pilihan !== s.a) urut.sort((a, b) => (b === pilihan) - (a === pilihan));
    h += `<details class="jb-lain" ${status !== "benar" ? "open" : ""}><summary>Kenapa pilihan lain salah</summary><ul>` +
      urut.filter(i => s.w[i]).map(i => `<li class="${i === pilihan ? "pilihanmu" : ""}"><b>${HURUF[i]}.</b> ${esc(s.w[i])}${i === pilihan ? ' <span class="tag-pilihanmu">pilihanmu</span>' : ""}</li>`).join("") +
      `</ul></details>`;
  }
  return h;
}
function selesaiJawab(status, jawabanUser) {
  const s = SESI.soal[SESI.idx];
  const benar = status === "benar";
  if (benar) SESI.benar++; else if (status === "menyerah") SESI.menyerah++; else SESI.salah++;
  SESI.jawaban.push({ soal: s, status, jawabanUser });
  nilaiKartu(s.id, benar);
  // combo: jawaban benar beruntun (tanpa petunjuk) memberi bonus kecil
  if (benar && !SESI.petunjuk) SESI.combo++; else if (!benar) SESI.combo = 0;
  SESI.comboMax = Math.max(SESI.comboMax, SESI.combo);
  DATA.statistik.comboMax = Math.max(DATA.statistik.comboMax || 0, SESI.combo);
  const bonus = benar && SESI.combo >= 3 ? Math.min(5, SESI.combo - 2) : 0;   // +1 … +5
  const xp = (benar ? (SESI.petunjuk ? Math.ceil(s.lv * 5) : s.lv * 10) : status === "salah" ? 2 : 0) + bonus;
  DATA.xp += xp;
  if (benar) DATA.statistik.benar++;
  simpan(); renderStat();
  el("kuis-bantuan").classList.add("tersembunyi");

  // efek
  const sasaran = s.t === "mc" ? document.querySelector(`.opsi[data-i="${s.a}"]`) : el("isian-input");
  if (benar) { RAYA.ledakan(sasaran); RAYA.nada("benar"); RAYA.melayang(sasaran, `+${xp} XP`); el("kartu-soal").classList.add("kilau-benar"); setTimeout(() => el("kartu-soal").classList.remove("kilau-benar"), 700); }
  else if (status === "salah") RAYA.nada("salah");
  RAYA.combo(SESI.combo);
  umumkanLencana(cekLencana());

  const fb = el("kuis-feedback");
  const judul = benar ? `✓ Benar! <span class="xp-dapat">+${xp} XP${bonus ? ` · 🔥 combo +${bonus}` : ""}</span>` :
    status === "menyerah" ? "🏳️ Tidak apa-apa — ini jawabannya, pahami pelan-pelan." : "✗ Kurang tepat.";
  fb.className = "feedback muncul " + (benar ? "fb-benar" : status === "menyerah" ? "fb-menyerah" : "fb-salah");
  fb.innerHTML = `<strong class="fb-judul">${judul}</strong>${panelPenjelasan(s, status, jawabanUser)}`;
  const btn = el("btn-lanjut");
  btn.classList.remove("tersembunyi");
  btn.textContent = SESI.idx + 1 < SESI.soal.length ? "Lanjut →" : "Lihat Hasil";
  setTimeout(() => btn.focus({ preventScroll: true }), 50);
  if (!benar) setTimeout(() => fb.scrollIntoView({ behavior: "smooth", block: "nearest" }), 120);
}
function lanjut() {
  if (!SESI || !SESI.terjawab) return;
  if (SESI.idx + 1 < SESI.soal.length) { SESI.idx++; renderSoal(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  else selesaiSesi();
}
async function konfirmasiKeluarKuis() {
  const sisa = SESI ? SESI.soal.length - SESI.jawaban.length : 0;
  if (!SESI || sisa === 0) return true;
  return tanya({
    judul: "Keluar dari kuis?",
    pesan: `${sisa} soal belum dikerjakan. Jawaban yang sudah kamu isi tetap tersimpan (XP & sistem pengulangan), tapi skor sesi ini tidak dihitung.`,
    ya: "Keluar", tidak: "Lanjut mengerjakan", bahaya: true,
  });
}

/* ---------- Hasil + perayaan ---------- */
const TINGKAT_SKOR = [
  { min: 100, medali: "🏆", judul: "Sempurna!",        kelas: "t-emas",   konfeti: 3, nada: "menang", pesan: "Semua benar. Kamu benar-benar menguasai bagian ini — pertahankan ritmenya!" },
  { min: 80,  medali: "🥇", judul: "Luar biasa!",      kelas: "t-emas",   konfeti: 2, nada: "menang", pesan: "Sedikit lagi menuju sempurna. Baca review di bawah untuk menutup celahnya." },
  { min: 60,  medali: "🥈", judul: "Bagus sekali!",    kelas: "t-perak",  konfeti: 1, nada: "benar",  pesan: "Fondasinya sudah kuat. Ulangi soal yang salah — di situlah ilmunya melekat." },
  { min: 40,  medali: "🌱", judul: "Terus tumbuh!",    kelas: "t-tumbuh", konfeti: 0, nada: "klik",   pesan: "Setengah jalan. Baca lagi materinya, lalu ulangi soal yang salah besok lewat Ulangan Pintar." },
  { min: 0,   medali: "💪", judul: "Jangan menyerah!", kelas: "t-tumbuh", konfeti: 0, nada: "klik",   pesan: "Salah itu bagian dari belajar. Baca penjelasan di bawah pelan-pelan — soal-soal ini akan kembali, dan lain kali kamu akan menjawabnya dengan benar." },
];
async function selesaiSesi() {
  if (SESI.selesai) return;
  SESI.selesai = true;
  const total = SESI.soal.length;
  const persen = Math.round(SESI.benar / total * 100);
  const detik = Math.round((Date.now() - SESI.mulai) / 1000);
  const xpSesi = DATA.xp - SESI.xpAwal;
  const lvAwal = infoLevel(SESI.xpAwal), lvAkhir = infoLevel(DATA.xp);
  let babBaru = null;
  if (SESI.konteks && SESI.konteks.tipe === "bab") {
    const kunci = SESI.konteks.topik + "-" + SESI.konteks.k;
    const lama = DATA.bab[kunci];
    if (persen >= 70 && !(lama && lama.persen >= 70)) babBaru = MATERI[SESI.konteks.topik].find(b => b.k === SESI.konteks.k);
    if (!lama || persen > lama.persen) DATA.bab[kunci] = { persen, t: Date.now() };
  }
  simpan();
  const lencanaBaru = cekLencana({ persen, total });
  const T = TINGKAT_SKOR.find(x => persen >= x.min);
  const bintang = persen >= 90 ? 3 : persen >= 70 ? 2 : persen >= 40 ? 1 : 0;

  const buka = await RAYA.tirai(el("btn-lanjut"), T.kelas);

  // --- isi layar hasil ---
  const kotak = el("hasil-kotak");
  kotak.className = "hasil-kotak " + T.kelas;
  el("hasil-medali").textContent = T.medali;
  el("hasil-judul").textContent = T.judul;
  el("hasil-bintang").innerHTML = [0, 1, 2].map(i => `<span class="bintang ${i < bintang ? "isi" : ""}" style="--d:${0.55 + i * 0.22}s">★</span>`).join("");
  el("hasil-bintang").setAttribute("aria-label", `${bintang} dari 3 bintang`);
  el("hasil-persen").textContent = RAYA.efekAktif() ? "0%" : persen + "%";
  const ring = el("cincin-isi"), K = 2 * Math.PI * 52;
  ring.style.transition = "none";
  ring.style.strokeDasharray = K;
  ring.style.strokeDashoffset = RAYA.efekAktif() ? K : K * (1 - persen / 100);
  ring.setAttribute("class", "cincin-isi " + (persen >= 80 ? "c-hijau" : persen >= 50 ? "c-kuning" : "c-merah"));
  el("hasil-chip").innerHTML = `
    <span class="hchip">✓ <b>${SESI.benar}</b>/${total} benar</span>
    <span class="hchip">🔥 combo terbaik <b>${SESI.comboMax}</b></span>
    <span class="hchip">⭐ <b id="hasil-xp">+${RAYA.efekAktif() ? 0 : xpSesi}</b> XP</span>
    <span class="hchip">⏱ ${Math.floor(detik / 60)}m ${detik % 60}d</span>`;
  const ekstra = [];
  if (lvAkhir.lv > lvAwal.lv) ekstra.push(`<div class="hasil-banner banner-level">⬆️ Naik ke <b>Level ${lvAkhir.lv}</b> — ${esc(lvAkhir.nama)}!</div>`);
  if (babBaru) ekstra.push(`<div class="hasil-banner banner-bab">🎓 Bab dikuasai: <b>${esc(babBaru.judul)}</b></div>`);
  if (lencanaBaru.length) ekstra.push(`<div class="hasil-banner banner-lencana">Lencana baru: ${lencanaBaru.map(l => `<span title="${esc(l.ket)}">${l.ikon} ${esc(l.nama)}</span>`).join("")}</div>`);
  el("hasil-ekstra").innerHTML = ekstra.join("");
  el("hasil-pesan").textContent = T.pesan;
  el("hasil-level").innerHTML = `<span>Level ${lvAkhir.lv} · ${esc(lvAkhir.nama)}</span>
    <div class="mini-bar"><div style="width:${lvAkhir.persen}%"></div></div><small>${lvAkhir.sisa} XP lagi ke Level ${lvAkhir.lv + 1}</small>`;

  const wadah = el("hasil-salah");
  wadah.innerHTML = "";
  const salah = SESI.jawaban.filter(j => j.status !== "benar");
  if (salah.length) {
    wadah.innerHTML = `<h3>Review — ${salah.length} soal untuk dipelajari lagi</h3>`;
    salah.forEach((j, k) => {
      const s = j.soal;
      const ju = j.status === "menyerah" ? "menyerah" : s.t === "mc" ? `${HURUF[j.jawabanUser]}. ${s.o[j.jawabanUser]}` : j.jawabanUser;
      const alasan = s.t === "mc" && s.w && j.status === "salah" && s.w[j.jawabanUser];
      const d = document.createElement("div");
      d.className = "review-item muncul";
      d.style.animationDelay = (900 + k * 60) + "ms";
      d.innerHTML = `<p class="review-q">${esc(s.q)}</p>${s.kode ? `<pre class="kode-soal kecil-kode"><code>${esc(s.kode)}</code></pre>` : ""}
        <p><span class="tag-salah">Jawabanmu: ${esc(ju || "-")}</span><span class="tag-benar">Benar: ${esc(teksJawabanBenar(s))}</span></p>
        ${alasan ? `<p class="review-e"><b>Kenapa pilihanmu salah:</b> ${esc(alasan)}</p>` : ""}
        <p class="review-e"><b>Penjelasan:</b> ${esc(s.e)}</p>`;
      wadah.appendChild(d);
    });
  }
  el("btn-ulangi-salah").textContent = salah.length ? `Ulangi ${salah.length} Soal yang Salah` : "Ulangi Sesi Ini";
  NAV[NAV.length - 1] = { r: "hasil", a: {} };
  terapkanRoute({ r: "hasil" }, "maju");
  buka();
  RAYA.combo(0);

  // --- animasi berurutan: medali → cincin & angka → bintang → konfeti → pop-up ---
  kotak.classList.remove("main"); void kotak.offsetWidth; kotak.classList.add("main");
  if (!RAYA.efekAktif()) { if (T.nada !== "klik") RAYA.nada(T.nada); return; }
  setTimeout(() => {
    ring.style.transition = "";
    ring.style.strokeDashoffset = K * (1 - persen / 100);
    RAYA.hitung(el("hasil-persen"), persen, 1200, v => Math.round(v) + "%");
    RAYA.hitung(el("hasil-xp"), xpSesi, 1200, v => "+" + Math.round(v));
  }, 300);
  setTimeout(() => { if (T.konfeti) RAYA.konfeti(T.konfeti, el("hasil-medali")); RAYA.nada(T.nada); }, 520);
  if (lvAkhir.lv > lvAwal.lv)
    setTimeout(() => RAYA.pop({ ikon: "⬆️", label: "Naik level!", judul: `Level ${lvAkhir.lv} — ${lvAkhir.nama}`, ket: `${lvAkhir.sisa} XP lagi ke Level ${lvAkhir.lv + 1}`, suara: "level", konfeti: true, kelas: "pop-level" }), 1600);
  setTimeout(() => umumkanLencana(lencanaBaru), 2100);
}

/* ============ Beranda ============ */
function renderStat() {
  el("stat-xp").textContent = DATA.xp.toLocaleString("id-ID");
  el("stat-streak").textContent = DATA.streak.hari;
  const L = infoLevel(DATA.xp);
  el("stat-level").textContent = L.lv;
  el("pil-xp").title = `Level ${L.lv} · ${L.nama} — ${DATA.xp} XP (${L.sisa} XP lagi ke Level ${L.lv + 1})`;
}
function persenTopik(t) {
  const bab = MATERI[t];
  const selesai = bab.filter(b => DATA.bab[t + "-" + b.k] && DATA.bab[t + "-" + b.k].persen >= 70).length;
  return { selesai, total: bab.length, persen: Math.round(selesai / bab.length * 100) };
}
function renderBeranda() {
  const jam = new Date().getHours();
  el("sapaan").textContent = jam < 11 ? "Selamat pagi 🌤️" : jam < 15 ? "Selamat siang ☀️" : jam < 19 ? "Selamat sore 🌇" : "Selamat malam 🌙";

  // level
  const L = infoLevel(DATA.xp);
  el("level-kartu").innerHTML = `
    <div class="level-lencana"><span>Lv</span><b>${L.lv}</b></div>
    <div class="level-isi"><b>${esc(L.nama)}</b><small>${DATA.xp.toLocaleString("id-ID")} XP · ${L.sisa} XP lagi ke Level ${L.lv + 1}</small>
      <div class="mini-bar level-bar"><div style="width:${L.persen}%"></div></div></div>
    <div class="level-mini"><span>🔥 ${DATA.streak.hari} hari</span><span>🏅 ${Object.keys(DATA.lencana).length}/${LENCANA.length}</span></div>`;

  // lingkup kuis random
  const lingkup = DATA.pref.lingkup || "data";
  document.querySelectorAll(".lingkup").forEach(b => b.classList.toggle("aktif", b.dataset.lingkup === lingkup));
  const pool = semuaSoal(lingkup);
  const sisa = pool.filter(s => !DATA.randomUsed.includes(s.id)).length;
  el("random-sisa").textContent = `${sisa} soal baru tersisa`;
  el("stat-total").textContent = semuaSoal().length.toLocaleString("id-ID");

  const now = Date.now();
  let due = 0;
  Object.values(DATA.kartu).forEach(k => { if (k.due <= now && (k.b + k.s) > 0) due++; });
  const badge = el("badge-ulang");
  badge.textContent = due; badge.classList.toggle("tersembunyi", due === 0);

  // fitur unggulan
  const p = dataProyek();
  el("fitur-proyek-prog").style.width = (p.lulus.length / PROYEK.langkah.length * 100) + "%";
  el("fitur-proyek-ket").textContent = p.lulus.length ? `${p.lulus.length}/${PROYEK.langkah.length} langkah selesai` : `${PROYEK.langkah.length} langkah · HTML, CSS, JavaScript`;
  const lab = (DATA.sqllab && DATA.sqllab.lulus.length) || 0;
  el("fitur-lab-ket").textContent = `${lab}/${TANTANGAN_SQL.length} tantangan`;
  el("fitur-lab-prog").style.width = (lab / TANTANGAN_SQL.length * 100) + "%";
  const r = progresRencana();
  el("fitur-rencana-ket").textContent = `${r.selesai}/${r.total} tugas`;
  el("fitur-rencana-prog").style.width = (r.selesai / r.total * 100) + "%";
  const bk = dataBuku(), totalBab = URUTAN_BAB().length, dibaca = Object.keys(bk.dibaca).length;
  const halPdf = halPdfDibaca();
  el("fitur-buku-ket").textContent = `6 buku PDF${halPdf ? ` · ${halPdf} hal dibaca` : ""} · ${dibaca}/${totalBab} bab interaktif`;
  el("fitur-buku-prog").style.width = (dibaca / totalBab * 100) + "%";

  // kartu topik per grup
  const wadah = el("grup-topik");
  wadah.innerHTML = "";
  Object.keys(GRUP).forEach(g => {
    const sec = document.createElement("section");
    sec.className = "grup grup-" + g;
    sec.innerHTML = `<h2 class="sec-judul">${GRUP[g].nama}${GRUP[g].label ? ` <span class="label-grup lg-${g}">${GRUP[g].label}</span>` : ""}</h2>
      <p class="sec-sub">${GRUP[g].ket}</p><div class="grid-topik"></div>`;
    const grid = sec.querySelector(".grid-topik");
    Object.keys(TOPIK_INFO).filter(t => TOPIK_INFO[t].grup === g)
      .sort((x, y) => g === "coding" ? (TOPIK_INFO[x].prioritas || 99) - (TOPIK_INFO[y].prioritas || 99) : 0)
      .forEach((t, k) => {
        const info = TOPIK_INFO[t], pr = persenTopik(t);
        const d = document.createElement("button");
        d.className = "kartu-t muncul " + info.kelas;
        d.style.animationDelay = (k * 50) + "ms";
        d.innerHTML = `
          <div class="kartu-atas"><span class="kartu-ikon">${info.ikon}</span>
            <div><span class="kartu-nama">${info.nama}</span>
            <span class="kartu-sub">${BANK[t].length} soal · ${MATERI[t].length} bab</span></div></div>
          ${chipPrioritas(info)}
          ${info.ket ? `<p class="kartu-desk">${info.ket}</p>` : ""}
          ${info.alasan ? `<p class="kartu-alasan">${info.prioritas ? "Kenapa prioritas: " : "Catatan: "}${esc(info.alasan)}</p>` : ""}
          <div class="mini-bar"><div style="width:${pr.persen}%"></div></div>
          <div class="kartu-ket">${pr.selesai}/${pr.total} bab dikuasai</div>`;
        d.onclick = () => go("topik", { t });
        grid.appendChild(d);
      });
    // SQL ada di grup Data, tapi juga bahasa prioritas → tampilkan pintasannya di grup Coding
    if (g === "coding") {
      const s = document.createElement("button");
      s.className = "kartu-t kartu-pintas muncul t-sql";
      s.innerHTML = `<div class="kartu-atas"><span class="kartu-ikon">DB</span><div><span class="kartu-nama">SQL</span>
        <span class="kartu-sub">ada di grup Data & Bisnis</span></div></div>${chipPrioritas(TOPIK_INFO.sql)}
        <p class="kartu-alasan">Kenapa prioritas: ${esc(TOPIK_INFO.sql.alasan)}</p><div class="kartu-ket">Buka SQL →</div>`;
      s.onclick = () => go("topik", { t: "sql" });
      grid.prepend(s);
    }
    wadah.appendChild(sec);
  });

  // lencana
  el("lencana-grid").innerHTML = LENCANA.map(l => {
    const ok = !!DATA.lencana[l.id];
    return `<div class="lencana ${ok ? "dapat" : "kunci"}" title="${esc(l.ket)}"><span class="lencana-ikon">${ok ? l.ikon : "🔒"}</span>
      <b>${esc(l.nama)}</b><small>${esc(l.ket)}</small></div>`;
  }).join("");
  el("lencana-hitung").textContent = `${Object.keys(DATA.lencana).length}/${LENCANA.length}`;
}

/* ============ Topik & materi ============ */
let TOPIK_AKTIF = null;
function renderTopik(t) {
  TOPIK_AKTIF = t;
  const info = TOPIK_INFO[t];
  el("topik-ikon").textContent = info.ikon;
  el("topik-ikon").className = "kartu-ikon besar " + info.kelas;
  el("topik-judul").textContent = info.nama;
  el("topik-sub").textContent = `${BANK[t].length} soal dalam ${MATERI[t].length} bab. Baca materinya dulu (±3 menit), lalu kerjakan soal bab itu. Bab dianggap dikuasai jika skormu ≥ 70%.`;
  el("topik-prio").innerHTML = info.prioritas !== undefined
    ? `<div class="banner-prio ${info.prioritas ? "prio-ya" : "prio-tidak"}"><b>${info.prioritas ? `★ Bahasa prioritas #${info.prioritas}` : "Bukan prioritas (opsional)"}</b> — ${esc(info.alasan)}</div>` : "";
  el("btn-topik-buku").onclick = () => go("bukubab", { t, i: 0 });
  const unduh = el("topik-unduh");
  unduh.classList.toggle("tersembunyi", t !== "excel");
  const wadah = el("daftar-bab");
  wadah.innerHTML = "";
  MATERI[t].forEach((bab, i) => {
    const prog = DATA.bab[t + "-" + bab.k];
    const jml = soalBab(t, bab.k).length;
    const d = document.createElement("button");
    d.className = "bab-item muncul" + (prog && prog.persen >= 70 ? " bab-selesai" : "");
    d.style.animationDelay = (i * 40) + "ms";
    d.innerHTML = `<span class="bab-no">${i + 1}</span>
      <span class="bab-isi"><b>${bab.judul}</b><small>${jml} soal${prog ? ` · skor terbaik ${prog.persen}%` : ""}</small></span>
      <span class="bab-status">${prog && prog.persen >= 70 ? "✓" : "→"}</span>`;
    d.onclick = () => go("materi", { t, i });
    wadah.appendChild(d);
  });
}
let BAB_AKTIF = null;
function renderMateri(t, i) {
  BAB_AKTIF = { t, i };
  const bab = MATERI[t][i];
  el("materi-eyebrow").textContent = `${TOPIK_INFO[t].nama} · Bab ${i + 1} dari ${MATERI[t].length}`;
  el("materi-judul").textContent = bab.judul;
  el("materi-isi").innerHTML = isiMateri(bab.materi);
  const jml = soalBab(t, bab.k).length;
  el("btn-mulai-bab").textContent = `Saya paham, lanjut ke soal (${jml}) →`;
  el("btn-materi-prev").disabled = i === 0;
  el("btn-materi-next").disabled = i === MATERI[t].length - 1;
}

/* ============ Rencana 30 hari ============ */
const linkBab = (t, k) => ["materi", { t, i: Math.max(0, MATERI[t].findIndex(b => b.k === k)) }];
const babLulus = (t, k) => !!(DATA.bab[t + "-" + k] && DATA.bab[t + "-" + k].persen >= 70);
const langkahLulus = (a, b) => { const l = dataProyek().lulus; for (let i = a - 1; i < b; i++) if (!l.includes(i)) return false; return true; };
const labLulus = (a, b) => { const l = (DATA.sqllab && DATA.sqllab.lulus) || []; for (let i = a - 1; i < b; i++) if (!l.includes(i)) return false; return true; };
const RENCANA = [
  { minggu: "Minggu 1 — Fondasi", item: [
    { id: "x1", teks: "Excel bab 1: rumus dasar & referensi $", link: ["materi", { t: "excel", i: 0 }], auto: () => babLulus("excel", "dasar") },
    { id: "x2", teks: "Excel bab 2: SUMIFS & COUNTIFS", link: ["materi", { t: "excel", i: 1 }], auto: () => babLulus("excel", "sumifs") },
    { id: "s1", teks: "SQL bab 1: SELECT & WHERE", link: ["materi", { t: "sql", i: 0 }], auto: () => babLulus("sql", "select") },
    { id: "l1", teks: "Lab SQL tantangan 1–2", link: ["sqllab", { i: 0 }], auto: () => labLulus(1, 2) },
    { id: "p1", teks: "Proyek SalesKu langkah 1–4 (HTML)", link: ["proyek", {}], auto: () => langkahLulus(1, 4) },
    { id: "c1", teks: "Baca materi CV, lalu tulis ulang bullet magang Odoo-mu", link: ["materi", { t: "karier", i: 1 }] },
  ]},
  { minggu: "Minggu 2 — Mengolah data", item: [
    { id: "x3", teks: "Excel bab 3: XLOOKUP", link: ["materi", { t: "excel", i: 2 }], auto: () => babLulus("excel", "xlookup") },
    { id: "x4", teks: "Excel bab 4: IF bertingkat", link: ["materi", { t: "excel", i: 3 }], auto: () => babLulus("excel", "if") },
    { id: "s2", teks: "SQL bab 2: GROUP BY & HAVING", link: ["materi", { t: "sql", i: 1 }], auto: () => babLulus("sql", "groupby") },
    { id: "l2", teks: "Lab SQL tantangan 3–4", link: ["sqllab", { i: 2 }], auto: () => labLulus(3, 4) },
    { id: "p2", teks: "Proyek SalesKu langkah 5–9 (CSS & awal JavaScript)", link: ["proyek", {}], auto: () => langkahLulus(5, 9) },
    { id: "c2", teks: "Tulis draf bagian 'Masalah' dan 'Data' untuk portofolio skripsi", link: ["materi", { t: "karier", i: 0 }] },
  ]},
  { minggu: "Minggu 3 — Meringkas & menggabungkan", item: [
    { id: "x5", teks: "Excel bab 5: Pivot Table", link: ["materi", { t: "excel", i: 4 }], auto: () => babLulus("excel", "pivot") },
    { id: "x6", teks: "Excel bab 6: Conditional Formatting", link: ["materi", { t: "excel", i: 5 }], auto: () => babLulus("excel", "cf") },
    { id: "s3", teks: "SQL bab 3: JOIN", link: ["materi", { t: "sql", i: 2 }], auto: () => babLulus("sql", "join") },
    { id: "l3", teks: "Lab SQL tantangan 5–7", link: ["sqllab", { i: 4 }], auto: () => labLulus(5, 7) },
    { id: "p3", teks: "Proyek SalesKu langkah 10–13 (tabel, KPI, form, ranking)", link: ["proyek", {}], auto: () => langkahLulus(10, 13) },
    { id: "c3", teks: "Buat 1 dashboard di Looker Studio dari data skripsi (anonimkan dulu)", link: ["materi", { t: "karier", i: 0 }] },
  ]},
  { minggu: "Minggu 4 — Publikasi & melamar", item: [
    { id: "s4", teks: "SQL bab 4: Subquery", link: ["materi", { t: "sql", i: 3 }], auto: () => babLulus("sql", "subquery") },
    { id: "l4", teks: "Lab SQL tantangan 8–10", link: ["sqllab", { i: 7 }], auto: () => labLulus(8, 10) },
    { id: "p4", teks: "Proyek SalesKu langkah 14–16, lalu publikasikan di GitHub & Netlify", link: ["proyek", {}], auto: () => langkahLulus(14, 16) },
    { id: "c4", teks: "Publikasikan halaman portofolio (templates/portofolio)", link: ["materi", { t: "karier", i: 0 }] },
    { id: "c5", teks: "Siapkan 2 versi CV: Consultant & Data Analyst", link: ["materi", { t: "karier", i: 1 }] },
    { id: "c6", teks: "Aktifkan notifikasi 8 kata kunci lowongan dan kirim 5 lamaran pertama", link: ["materi", { t: "karier", i: 2 }] },
  ]},
  { minggu: "Minggu 5 — Naik level (lanjutan)", item: [
    { id: "x7", teks: "Excel bab 7–8: teks, pembersihan data & tanggal", link: linkBab("excel", "teks"), auto: () => babLulus("excel", "teks") && babLulus("excel", "tanggal") },
    { id: "s5", teks: "SQL bab 5–6: CASE WHEN, NULL & fungsi bawaan", link: linkBab("sql", "case"), auto: () => babLulus("sql", "case") && babLulus("sql", "nullfungsi") },
    { id: "l5", teks: "Lab SQL tantangan 11–14", link: ["sqllab", { i: 10 }], auto: () => labLulus(11, 14) },
    { id: "e1", teks: "ERP & Odoo bab 1–2: konsep ERP, CRM & penjualan", link: linkBab("erp", "erp"), auto: () => babLulus("erp", "erp") && babLulus("erp", "sales") },
    { id: "b1", teks: "Dashboard & BI bab 1–2, lalu rapikan dashboard portofoliomu", link: linkBab("bi", "bidasar"), auto: () => babLulus("bi", "bidasar") && babLulus("bi", "visual") },
    { id: "w1", teks: "Karier bab 4: siapkan 5 cerita STAR dan latih dengan suara keras", link: linkBab("karier", "wawancara"), auto: () => babLulus("karier", "wawancara") },
  ]},
  { minggu: "Minggu 6 — Siap interview teknis", item: [
    { id: "x9", teks: "Excel bab 9–10: INDEX-MATCH, FILTER & error", link: linkBab("excel", "lookup2"), auto: () => babLulus("excel", "lookup2") && babLulus("excel", "error") },
    { id: "s7", teks: "SQL bab 7–8: CTE & window function", link: linkBab("sql", "cte"), auto: () => babLulus("sql", "cte") && babLulus("sql", "window") },
    { id: "l6", teks: "Lab SQL tantangan 15–18", link: ["sqllab", { i: 14 }], auto: () => labLulus(15, 18) },
    { id: "st", teks: "Statistik bab 4: kuasai penjelasan skripsimu (clustering)", link: linkBab("stat", "segmentasi"), auto: () => babLulus("stat", "segmentasi") },
    { id: "e2", teks: "ERP & Odoo bab 3–5: inventory, akuntansi, implementasi", link: linkBab("erp", "stok"), auto: () => babLulus("erp", "stok") && babLulus("erp", "akuntansi") && babLulus("erp", "implementasi") },
    { id: "pd", teks: "Python bab 12: pandas — ulangi analisis skripsimu di Colab", link: linkBab("python", "pandas"), auto: () => babLulus("python", "pandas") },
  ]},
];
function itemSelesai(it) { return (it.auto && it.auto()) || !!DATA.rencana[it.id]; }
function progresRencana() {
  const semua = RENCANA.flatMap(m => m.item);
  return { selesai: semua.filter(itemSelesai).length, total: semua.length };
}
function renderRencana() {
  const pr = progresRencana();
  el("rencana-prog-teks").textContent = `${pr.selesai} / ${pr.total} tugas selesai`;
  el("rencana-prog-isi").style.width = (pr.selesai / pr.total * 100) + "%";
  const w = el("rencana-isi");
  w.innerHTML = "";
  RENCANA.forEach((m, mi) => {
    const sec = document.createElement("div");
    sec.className = "minggu muncul";
    sec.style.animationDelay = (mi * 70) + "ms";
    const sel = m.item.filter(itemSelesai).length;
    sec.innerHTML = `<div class="minggu-head"><h3>${m.minggu}</h3><span class="chip-kecil">${sel}/${m.item.length}</span></div>`;
    m.item.forEach(it => {
      const ok = itemSelesai(it);
      const row = document.createElement("div");
      row.className = "tugas" + (ok ? " tugas-ok" : "");
      row.innerHTML = `<label class="cek-kotak"><input type="checkbox" ${ok ? "checked" : ""} ${it.auto && it.auto() ? "disabled" : ""}><span></span></label>
        <span class="tugas-teks">${esc(it.teks)}${it.auto ? ' <span class="chip-kecil" title="Tercentang otomatis saat kamu menyelesaikannya di aplikasi">otomatis</span>' : ""}</span>
        <button class="btn-mini">Buka →</button>`;
      row.querySelector("input").onchange = e => { DATA.rencana[it.id] = e.target.checked; simpan(); renderRencana(); };
      row.querySelector(".btn-mini").onclick = () => go(it.link[0], it.link[1]);
      sec.appendChild(row);
    });
    w.appendChild(sec);
  });
}

/* ============ Pengaturan & pindah progres ============ */
const keKode = o => btoa(unescape(encodeURIComponent(JSON.stringify(o))));
const dariKode = k => JSON.parse(decodeURIComponent(escape(atob(String(k).replace(/\s+/g, "")))));
function progresValid(o) { return o && typeof o === "object" && typeof o.xp === "number" && o.kartu && typeof o.kartu === "object"; }
function pakaiProgres(o) {
  setTimeout(() => tanya({
    judul: "Ganti progres di perangkat ini?",
    pesan: `Progres baru: ${o.xp.toLocaleString("id-ID")} XP, ${Object.keys(o.kartu).length} soal pernah dijawab.\nProgres yang sekarang ada di perangkat ini akan DIGANTI.`,
    ya: "Ya, ganti", bahaya: true,
  }).then(ok => {
    if (!ok) return;
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { return toast("Gagal menyimpan: penyimpanan browser tidak tersedia."); }
    toast("Progres dimuat. Memuat ulang…");
    setTimeout(() => location.reload(), 700);
  }), 260);
}
function bukaPengaturan() {
  const tema = DATA.pref.tema || "auto";
  tanya({
    judul: "⚙️ Pengaturan",
    ya: "Selesai", tanpaBatal: true,
    html: `<div class="atur">
      <div class="atur-baris"><span><b>Tema</b><small>Ikuti sistem, terang, atau gelap</small></span>
        <div class="segmen" id="atur-tema">${[["auto", "Otomatis"], ["light", "Terang"], ["dark", "Gelap"]].map(([v, n]) => `<button data-v="${v}" class="${tema === v ? "aktif" : ""}">${n}</button>`).join("")}</div></div>
      <div class="atur-baris"><span><b>Suara</b><small>Bunyi lembut saat benar, combo, dan naik level</small></span>
        <label class="saklar"><input type="checkbox" id="atur-suara" ${DATA.pref.suara !== false ? "checked" : ""}><span></span></label></div>
      <div class="atur-baris"><span><b>Efek perayaan</b><small>Konfeti, transisi antarlayar, dan animasi skor</small></span>
        <label class="saklar"><input type="checkbox" id="atur-efek" ${DATA.pref.efek !== false ? "checked" : ""}><span></span></label></div>
      <h4>Pindahkan progres (laptop ↔ HP)</h4>
      <p class="kecil">Progres tersimpan di browser masing-masing perangkat. Unduh atau salin dari satu perangkat, lalu muat di perangkat lain.</p>
      <div class="unduh-baris">
        <button class="btn btn-garis btn-kecil" id="atur-ekspor">⬇️ Unduh file progres</button>
        <button class="btn btn-garis btn-kecil" id="atur-salin">📋 Salin kode progres</button>
        <button class="btn btn-garis btn-kecil" id="atur-impor">⬆️ Muat dari file</button>
        <button class="btn btn-garis btn-kecil" id="atur-tempel">📥 Tempel kode</button>
      </div>
      <input type="file" id="atur-file" accept=".json,application/json" class="tersembunyi">
      <div id="atur-kode-wrap" class="tersembunyi"><textarea id="atur-kode" class="atur-kode" spellcheck="false" placeholder="Tempel kode progres di sini"></textarea>
        <button class="btn btn-utama btn-kecil" id="atur-muat-kode">Muat kode ini</button></div>
    </div>`,
  });
  document.querySelectorAll("#atur-tema button").forEach(b => b.onclick = () => {
    DATA.pref.tema = b.dataset.v; simpan(); terapkanTema();
    document.querySelectorAll("#atur-tema button").forEach(x => x.classList.toggle("aktif", x === b));
  });
  el("atur-suara").onchange = e => { DATA.pref.suara = e.target.checked; simpan(); if (e.target.checked) RAYA.nada("benar"); };
  el("atur-efek").onchange = e => { DATA.pref.efek = e.target.checked; simpan(); if (e.target.checked) RAYA.konfeti(1, e.target); };
  el("atur-ekspor").onclick = () => {
    const blob = new Blob([JSON.stringify(DATA)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `kodequiz-progres-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    toast("File progres diunduh. Kirim ke HP, lalu pilih 'Muat dari file' di sana.");
  };
  el("atur-salin").onclick = () => {
    const kode = keKode(DATA);
    const tampilkan = () => { el("atur-kode-wrap").classList.remove("tersembunyi"); el("atur-kode").value = kode; el("atur-kode").select(); };
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(kode).then(() => toast(`Kode disalin (${Math.round(kode.length / 1024)} KB). Tempel di Pengaturan perangkat lain.`), tampilkan);
    else tampilkan();
  };
  el("atur-impor").onclick = () => el("atur-file").click();
  el("atur-file").onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    f.text().then(t => {
      let o; try { o = JSON.parse(t); } catch (x) { o = null; }
      if (!progresValid(o)) return toast("File ini bukan file progres KodeQuiz.");
      el("modal-ya").click(); pakaiProgres(o);
    });
  };
  el("atur-tempel").onclick = () => { el("atur-kode-wrap").classList.remove("tersembunyi"); el("atur-kode").value = ""; el("atur-kode").focus(); };
  el("atur-muat-kode").onclick = () => {
    let o; try { o = dariKode(el("atur-kode").value); } catch (x) { o = null; }
    if (!progresValid(o)) return toast("Kode tidak valid. Pastikan seluruh kode tersalin.");
    el("modal-ya").click(); pakaiProgres(o);
  };
}

/* ============ Pintasan keyboard ============ */
document.addEventListener("keydown", e => {
  const tag = (e.target.tagName || "").toLowerCase();
  const mengetik = tag === "input" || tag === "textarea" || tag === "select";
  if (!el("modal").classList.contains("tersembunyi")) return;
  if (e.key === "Escape" && !mengetik) { e.preventDefault(); kembali(); return; }
  const atas = NAV[NAV.length - 1];
  if (!atas || atas.r !== "kuis" || !SESI || mengetik) return;
  const s = SESI.soal[SESI.idx];
  if (!SESI.terjawab && s.t === "mc") {
    const k = e.key.toLowerCase();
    const i = "1234".indexOf(k) >= 0 ? +k - 1 : "abcd".indexOf(k);
    if (i >= 0 && i < s.o.length) { const b = document.querySelector(`.opsi[data-i="${i}"]`); if (b && !b.disabled) { e.preventDefault(); jawabMC(i); } return; }
  }
  if (!SESI.terjawab && e.key.toLowerCase() === "h") { e.preventDefault(); beriPetunjuk(); }
  if (SESI.terjawab && e.key === "Enter") { e.preventDefault(); lanjut(); }
});

/* ============ Mulai ============ */
document.addEventListener("DOMContentLoaded", () => {
  terapkanTema();
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", terapkanTema);
  el("btn-tema").onclick = gantiTema;
  el("btn-nav-kembali").onclick = () => kembali();
  el("btn-nav-beranda").onclick = () => keBeranda();
  el("logo").onclick = () => keBeranda();

  el("btn-lanjut").onclick = lanjut;
  el("btn-petunjuk").onclick = beriPetunjuk;
  el("btn-menyerah").onclick = menyerah;
  el("btn-keluar").onclick = () => kembali();
  el("btn-random").onclick = () => mulaiSesi(kumpulRandom(10, DATA.pref.lingkup || "data"), { tipe: "random" });
  el("btn-ulang").onclick = () => mulaiSesi(kumpulPintar(15), { tipe: "pintar" });
  document.querySelectorAll(".lingkup").forEach(b => b.onclick = () => { DATA.pref.lingkup = b.dataset.lingkup; simpan(); renderBeranda(); });
  el("btn-latihan-topik").onclick = () => mulaiSesi(acak(soalTopik(TOPIK_AKTIF)).slice(0, 20), { tipe: "latihan", topik: TOPIK_AKTIF });
  el("btn-mulai-bab").onclick = () => { const { t, i } = BAB_AKTIF; mulaiSesi(acak(soalBab(t, MATERI[t][i].k)), { tipe: "bab", topik: t, k: MATERI[t][i].k }); };
  el("btn-materi-prev").onclick = () => go("materi", { t: BAB_AKTIF.t, i: BAB_AKTIF.i - 1 }, { replace: true });
  el("btn-materi-next").onclick = () => go("materi", { t: BAB_AKTIF.t, i: BAB_AKTIF.i + 1 }, { replace: true });
  el("btn-ulangi-salah").onclick = () => {
    const salah = SESI.jawaban.filter(j => j.status !== "benar").map(j => j.soal);
    mulaiSesi(acak(salah.length ? salah : SESI.soal), SESI.konteks);
  };
  el("btn-hasil-kembali").onclick = () => kembali();
  el("btn-hasil-beranda").onclick = () => keBeranda();
  el("fitur-proyek").onclick = () => go("proyek");
  el("fitur-lab").onclick = () => go("sqllab", {});
  el("fitur-rencana").onclick = () => go("rencana");
  el("fitur-buku").onclick = () => go("buku");
  el("btn-atur").onclick = bukaPengaturan;

  pasangProyek();
  pasangSqlLab();
  pasangBuku();
  pasangPdf();

  const ukurTopbar = () => document.documentElement.style.setProperty("--topbar-h", document.querySelector(".topbar").offsetHeight + "px");
  ukurTopbar(); addEventListener("resize", ukurTopbar);

  NAV = [{ r: "beranda", a: {} }];
  terapkanRoute(NAV[0], "maju");
  history.replaceState({ kq: 0 }, "");
  setTimeout(() => umumkanLencana(cekLencana()), 1200);   // misal lencana streak

  // PWA: bisa di-install & dipakai offline saat dibuka lewat http(s) (Netlify/GitHub Pages)
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol))
    navigator.serviceWorker.register("sw.js").catch(() => {});
});
