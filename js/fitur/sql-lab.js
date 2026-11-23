/* ============================================================
   Lab SQL — tulis query sungguhan, hasilnya dicek otomatis.
   Memakai sql.js (SQLite di browser, vendor/sql-asm.js), jalan offline.
   Cara cek: hasil query-mu dibandingkan dengan hasil query jawaban.
   Nama kolom boleh beda; urutan baris hanya dicek jika tantangan memintanya.
   ============================================================ */

const TANTANGAN_SQL = [
  {judul:"Pelanggan dari Bandung", bab:"select",
   soal:"Tampilkan kolom <b>nama</b> dan <b>kota</b> dari semua pelanggan yang tinggal di Bandung.",
   jawab:"SELECT nama, kota\nFROM pelanggan\nWHERE kota = 'Bandung';",
   petunjuk:"SELECT dua kolom, FROM tabel pelanggan, WHERE kota = '...'. Teks memakai kutip tunggal.",
   jelas:"WHERE menyaring baris sebelum ditampilkan. Hasilnya Tono dan Lia."},
  {judul:"Produk dari termahal", bab:"select", urut:true,
   soal:"Tampilkan <b>nama</b> dan <b>harga</b> semua produk, diurutkan dari harga <b>termahal</b> ke termurah.",
   jawab:"SELECT nama, harga\nFROM produk\nORDER BY harga DESC;",
   petunjuk:"Gunakan ORDER BY harga lalu tentukan arahnya: ASC (kecil→besar) atau DESC (besar→kecil).",
   jelas:"DESC = descending (menurun). Tantangan ini mengecek URUTAN baris, karena urutan adalah inti pertanyaannya."},
  {judul:"Jumlah pesanan per pelanggan", bab:"groupby",
   soal:"Untuk setiap <b>pelanggan_id</b> di tabel pesanan, tampilkan berapa <b>banyak pesanannya</b>.",
   jawab:"SELECT pelanggan_id, COUNT(*) AS jumlah_pesanan\nFROM pesanan\nGROUP BY pelanggan_id;",
   petunjuk:"SELECT pelanggan_id, COUNT(*) … GROUP BY pelanggan_id",
   jelas:"GROUP BY mengelompokkan baris dengan pelanggan_id yang sama, lalu COUNT(*) dihitung per kelompok — seperti pivot table dengan Rows = pelanggan_id."},
  {judul:"Produk laris (HAVING)", bab:"groupby",
   soal:"Tampilkan <b>produk_id</b> dan <b>total qty</b> yang terjual, hanya untuk produk dengan total qty <b>minimal 3</b>.",
   jawab:"SELECT produk_id, SUM(qty) AS total_qty\nFROM pesanan\nGROUP BY produk_id\nHAVING SUM(qty) >= 3;",
   petunjuk:"Kelompokkan per produk_id, jumlahkan qty, lalu saring KELOMPOKNYA dengan HAVING (bukan WHERE).",
   jelas:"WHERE tidak bisa memakai SUM() karena dijalankan sebelum pengelompokan. HAVING menyaring setelah GROUP BY. Hasil: produk 2 (8), 3 (3), dan 4 (3)."},
  {judul:"Pesanan + nama pelanggan", bab:"join",
   soal:"Tampilkan <b>id pesanan</b> dan <b>nama pelanggan</b> untuk setiap pesanan.",
   jawab:"SELECT o.id, p.nama\nFROM pesanan o\nJOIN pelanggan p ON o.pelanggan_id = p.id;",
   petunjuk:"FROM pesanan o JOIN pelanggan p ON o.pelanggan_id = p.id",
   jelas:"JOIN menyambungkan pelanggan_id di tabel pesanan dengan id di tabel pelanggan — seperti XLOOKUP untuk mengambil nama."},
  {judul:"Total belanja per pelanggan", bab:"join", urut:true,
   soal:"Tampilkan <b>nama pelanggan</b> dan <b>total belanjanya</b> (qty × harga), urut dari belanja <b>terbesar</b>. Hanya pelanggan yang pernah memesan.",
   jawab:"SELECT p.nama, SUM(o.qty * pr.harga) AS belanja\nFROM pesanan o\nJOIN pelanggan p ON o.pelanggan_id = p.id\nJOIN produk pr ON o.produk_id = pr.id\nGROUP BY p.nama\nORDER BY belanja DESC;",
   petunjuk:"Butuh 3 tabel: pesanan (qty), pelanggan (nama), produk (harga). JOIN dua kali, lalu GROUP BY nama dan ORDER BY … DESC.",
   jelas:"Ini query 'pelanggan paling berharga' yang sering diminta tim sales. Hasil: Rina 9.450.000, Sari 7.600.000, Tono 4.300.000, Budi 750.000."},
  {judul:"Pelanggan pasif", bab:"join",
   soal:"Tampilkan <b>nama</b> pelanggan yang <b>belum pernah</b> memesan sama sekali.",
   jawab:"SELECT p.nama\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nWHERE o.id IS NULL;",
   petunjuk:"LEFT JOIN mempertahankan semua pelanggan. Pelanggan tanpa pesanan punya kolom pesanan yang NULL. (Cara lain: WHERE id NOT IN (SELECT …).)",
   jelas:"Pola anti-join. Hasilnya Lia — target follow-up untuk tim sales."},
  {judul:"Produk di atas rata-rata", bab:"subquery",
   soal:"Tampilkan <b>nama</b> dan <b>harga</b> produk yang harganya <b>lebih tinggi dari rata-rata</b> harga semua produk.",
   jawab:"SELECT nama, harga\nFROM produk\nWHERE harga > (SELECT AVG(harga) FROM produk);",
   petunjuk:"Hitung rata-rata di dalam kurung: (SELECT AVG(harga) FROM produk), lalu bandingkan dengan harga.",
   jelas:"Subquery dihitung dulu (rata-rata = 2.362.500), lalu dipakai sebagai pembanding. Hasil: hanya Laptop."},
  {judul:"Pembeli produk Komputer", bab:"subquery",
   soal:"Tampilkan <b>nama</b> pelanggan (tanpa duplikat) yang pernah membeli produk berkategori <b>Komputer</b>.",
   jawab:"SELECT nama\nFROM pelanggan\nWHERE id IN (\n  SELECT o.pelanggan_id\n  FROM pesanan o\n  JOIN produk pr ON o.produk_id = pr.id\n  WHERE pr.kategori = 'Komputer'\n);",
   petunjuk:"Bisa dengan subquery IN, atau JOIN 3 tabel + SELECT DISTINCT p.nama.",
   jelas:"IN otomatis tidak menghasilkan duplikat di query luar. Kalau memakai JOIN, tambahkan DISTINCT. Hasil: Rina, Tono, Sari."},
  {judul:"Pendapatan per kota", bab:"subquery", urut:true,
   soal:"Tampilkan <b>kota</b> pelanggan dan <b>total pendapatan</b> dari kota itu (qty × harga), urut dari <b>terbesar</b>.",
   jawab:"SELECT p.kota, SUM(o.qty * pr.harga) AS pendapatan\nFROM pesanan o\nJOIN pelanggan p ON o.pelanggan_id = p.id\nJOIN produk pr ON o.produk_id = pr.id\nGROUP BY p.kota\nORDER BY pendapatan DESC;",
   petunjuk:"Mirip tantangan 6, tapi kelompokkan berdasarkan p.kota.",
   jelas:"Jakarta 17.050.000, Bandung 4.300.000, Surabaya 750.000. Pertanyaan seperti ini (pendapatan per wilayah) sangat sering muncul di tes teknis data analyst."},
];
// Tantangan 11–18 didefinisikan di js/soal/soal-sql-2.js
if (typeof TANTANGAN_SQL_LANJUT !== "undefined") TANTANGAN_SQL.push(...TANTANGAN_SQL_LANJUT);
// Tantangan kasus kerja 19 dst. (cerita + 3 petunjuk) di js/soal/soal-kasus-sql.js
if (typeof TANTANGAN_SQL_KASUS !== "undefined") TANTANGAN_SQL.push(...TANTANGAN_SQL_KASUS);

let SQLJS = null, DB = null, TANTANGAN_AKTIF = 0;

function muatSqlJs() {
  if (SQLJS) return Promise.resolve(SQLJS);
  return new Promise((res, rej) => {
    const go = () => initSqlJs().then(S => { SQLJS = S; res(S); }).catch(rej);
    if (window.initSqlJs) return go();
    const s = document.createElement("script");
    s.src = "vendor/sql-asm.js";
    s.onload = go;
    s.onerror = () => rej(new Error("Gagal memuat vendor/sql-asm.js"));
    document.head.appendChild(s);
  });
}
function dbBaru() {
  if (DB) DB.close();
  DB = new SQLJS.Database();
  DB.run(datasetSQL());
}
function jalankanSQL(q) {
  dbBaru(); // database selalu segar, jadi DELETE/UPDATE tidak merusak latihan berikutnya
  const hasil = DB.exec(q);
  return hasil.length ? hasil[hasil.length - 1] : { columns: [], values: [] };
}
function samaHasil(a, b, urut) {
  if (a.columns.length !== b.columns.length || a.values.length !== b.values.length) return false;
  const norm = v => typeof v === "number" ? String(Math.round(v * 1000) / 1000) : String(v);
  let A = a.values.map(r => r.map(norm).join("\u0001"));
  let B = b.values.map(r => r.map(norm).join("\u0001"));
  if (!urut) { A = A.sort(); B = B.sort(); }
  return A.every((x, i) => x === B[i]);
}
function tabelHasil(r) {
  if (!r.columns.length) return `<p class="cek-kosong">Query berhasil, tapi tidak mengembalikan baris.</p>`;
  const fmt = v => v === null ? '<i class="nul">NULL</i>' : esc(typeof v === "number" ? v.toLocaleString("id-ID") : v);
  return `<div class="tabel-scroll"><table class="tabel-db"><thead><tr>${r.columns.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead>
    <tbody>${r.values.map(row => `<tr>${row.map(v => `<td>${fmt(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
    <p class="kecil">${r.values.length} baris</p>`;
}

/* ---------- Format tes interview bercerita (terinspirasi platform latihan di video @ngulik.data) ----------
   Tab Tantangan / Solusi / Riwayat, skema database, hasil yang diharapkan, 3 petunjuk bertahap,
   tombol Jalankan (hasil percobaan, tidak dinilai) terpisah dari Kumpulkan (dinilai). */
const INFO_BAB_LAB = { select: ["SQL Filtering", 1], groupby: ["Agregasi", 1], join: ["JOIN", 2], subquery: ["Subquery", 2],
  case: ["CASE & Rasio", 2], nullfungsi: ["Fungsi & NULL", 2], cte: ["CTE", 3], window: ["Window Function", 3] };
const TINGKAT_LAB = ["", "Mudah", "Sedang", "Sulit"];
const JALUR_LAB = { semua: "Semua", dasar: "Dasar SQL", da: "Kasus Data Analyst", ds: "Kasus Data Scientist", cyber: "Kasus Cyber Security" };
const KATA_SQL = new Set(("SELECT FROM WHERE AND OR NOT IN IS NULL AS JOIN LEFT INNER ON GROUP BY HAVING ORDER ASC DESC LIMIT WITH " +
  "CASE WHEN THEN ELSE END OVER PARTITION DISTINCT BETWEEN LIKE UNION ALL COUNT SUM AVG MIN MAX ROUND CAST INTEGER " +
  "ROW_NUMBER RANK DENSE_RANK LAG LEAD COALESCE IFNULL STRFTIME JULIANDAY").split(" "));
// Petunjuk ketiga untuk tantangan lama = kerangka jawaban: kata kunci SQL tetap, sisanya dikosongkan (contoh yang "dipudarkan").
function kerangkaSQL(q) {
  return q.replace(/'[^']*'/g, "'…'")
    .replace(/[A-Za-z_][A-Za-z0-9_]*/g, w => KATA_SQL.has(w.toUpperCase()) ? w : "…")
    .replace(/\b\d+(\.\d+)?\b/g, "…").replace(/…(\.…)+/g, "…");
}
function infoLab(T) {
  const b = INFO_BAB_LAB[T.bab] || ["SQL", 2];
  const bab = T.bab && typeof MATERI_SQL !== "undefined" && MATERI_SQL.find(m => m.k === T.bab);
  return {
    kategori: T.kategori || b[0], tingkat: T.tingkat || b[1], jalur: T.jalur || "dasar",
    tabel: T.tabel || ["pelanggan", "produk", "pesanan"],
    petunjuk: Array.isArray(T.petunjuk) ? T.petunjuk : [T.petunjuk,
      bab ? `Konsep yang dipakai ada di bab SQL "${bab.judul}". Ingat urutan klausa: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY.` : "Ingat urutan klausa: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY.",
      "Kerangka jawabannya:\n" + kerangkaSQL(T.jawab)],
  };
}
function dataLab() {
  const p = DATA.sqllab = DATA.sqllab || {};
  p.lulus = p.lulus || []; p.draf = p.draf || {}; p.riwayat = p.riwayat || {}; p.petunjuk = p.petunjuk || {}; p.lihat = p.lihat || [];
  return p;
}
const daftarLab = f => TANTANGAN_SQL.map((T, k) => k).filter(k => f === "semua" || infoLab(TANTANGAN_SQL[k]).jalur === f);
const tglJam = t => new Date(t).toLocaleString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

function renderSqlLab(i) {
  const p = dataLab();
  let f = DATA.pref.labFilter || "semua";
  if (i == null) i = Math.max(0, daftarLab(f).find(k => !p.lulus.includes(k)) ?? TANTANGAN_SQL.findIndex((_, k) => !p.lulus.includes(k)));
  TANTANGAN_AKTIF = Math.min(Math.max(0, i), TANTANGAN_SQL.length - 1);
  const T = TANTANGAN_SQL[TANTANGAN_AKTIF], I = infoLab(T);
  if (f !== "semua" && I.jalur !== f) { f = I.jalur; DATA.pref.labFilter = f; }
  const daftar = daftarLab(f), N = TANTANGAN_SQL.length, lulus = p.lulus.length;

  el("lab-progres").textContent = `${lulus} dari ${N} selesai · ${Math.round(lulus / N * 100)}%`;
  el("lab-prog-isi").style.width = (lulus / N * 100) + "%";
  el("lab-filter").innerHTML = Object.entries(JALUR_LAB).map(([k, n]) => {
    const d = daftarLab(k), ok = d.filter(x => p.lulus.includes(x)).length;
    return `<button class="lingkup ${k === f ? "aktif" : ""}" data-f="${k}">${n} <small>${ok}/${d.length}</small></button>`;
  }).join("");
  el("lab-filter").querySelectorAll("button").forEach(b => b.onclick = () => {
    DATA.pref.labFilter = b.dataset.f; simpan();
    const d = daftarLab(b.dataset.f);
    go("sqllab", { i: d.includes(TANTANGAN_AKTIF) ? TANTANGAN_AKTIF : (d.find(k => !p.lulus.includes(k)) ?? d[0]) }, { replace: true });
  });
  el("lab-nav").innerHTML = daftar.map(k =>
    `<button class="lab-no ${k === TANTANGAN_AKTIF ? "aktif" : ""} ${p.lulus.includes(k) ? "lulus" : ""}" data-k="${k}" title="${esc(TANTANGAN_SQL[k].judul)}">${k + 1}</button>`).join("");
  document.querySelectorAll(".lab-no").forEach(b => b.onclick = () => go("sqllab", { i: +b.dataset.k }, { replace: true }));
  setTimeout(() => document.querySelector(".lab-no.aktif")?.scrollIntoView({ block: "nearest", inline: "center" }), 60);   // layar baru tampil setelah render
  const pos = daftar.indexOf(TANTANGAN_AKTIF);
  el("btn-lab-prev").disabled = pos <= 0;
  el("btn-lab-next").disabled = pos < 0 || pos >= daftar.length - 1;
  el("btn-lab-prev").onclick = () => go("sqllab", { i: daftar[pos - 1] }, { replace: true });
  el("btn-lab-next").onclick = () => go("sqllab", { i: daftar[pos + 1] }, { replace: true });

  el("lab-posisi").textContent = `${JALUR_LAB[I.jalur].toUpperCase()} · Tantangan ${TANTANGAN_AKTIF + 1} dari ${N}`;
  el("lab-judul").textContent = T.judul;
  el("lab-label").innerHTML = `<span class="tk tk-${I.tingkat}">${TINGKAT_LAB[I.tingkat]}</span><span class="tag-skill">${esc(I.kategori)}</span>` +
    (p.lulus.includes(TANTANGAN_AKTIF) ? `<span class="tag-selesai">✓ Selesai</span>` : "");
  el("lab-cerita").innerHTML = T.cerita || "";
  el("lab-cerita").classList.toggle("tersembunyi", !T.cerita);
  el("lab-soal").innerHTML = T.soal + (T.urut ? ` <span class="chip-kecil">urutan baris dicek</span>` : "");
  el("lab-skema-n").textContent = `${I.tabel.length} tabel`;
  el("lab-tabel").innerHTML = I.tabel.map(n => {
    const d = DATASET[n];
    const tipe = (j) => typeof d.baris[0][j] !== "number" ? "TEXT" : d.baris.some(b => !Number.isInteger(b[j])) ? "REAL" : "INTEGER";
    return `<div class="skema-t"><p><code class="skema-nama">${esc(d.nama)}</code> <small>${d.baris.length} baris</small></p>
      <p class="skema-kolom">${d.kolom.map((k, j) => `<span><code>${esc(k)}</code> <i>${tipe(j)}</i></span>`).join("")}</p>
      <details><summary>Lihat isi tabel</summary>${renderDataset(n)}</details></div>`;
  }).join("");
  el("lab-harap").innerHTML = `<p class="cek-kosong">Memuat…</p>`;
  renderPetunjukLab();
  el("lab-query").value = p.draf[TANTANGAN_AKTIF] || "";
  hitungKarakterLab();
  el("lab-hasil").innerHTML = `<p class="cek-kosong">Tulis query-mu, tekan <b>▶ Jalankan</b> untuk mencoba (tidak dinilai), lalu <b>✓ Kumpulkan</b> untuk dinilai.</p>`;
  el("lab-status").className = "lab-status tersembunyi";
  tabLab("tantangan");
  renderSolusiLab(); renderRiwayatLab();

  muatSqlJs().then(() => {
    el("lab-mesin").textContent = "✓ Mesin SQLite siap (offline)";
    const r = jalankanSQL(T.jawab), maks = 8;
    el("lab-harap").innerHTML = tabelHasil({ columns: r.columns, values: r.values.slice(0, maks) }) +
      (r.values.length > maks ? `<p class="kecil">Menampilkan ${maks} dari ${r.values.length} baris.</p>` : "") +
      `<p class="kecil">Nama kolom boleh berbeda; yang dicek jumlah kolom, isi baris${T.urut ? ", dan urutannya" : ""}.</p>`;
  }).catch(e => { el("lab-mesin").textContent = "⚠️ " + e.message; el("lab-harap").innerHTML = ""; });
}
function tabLab(panel) {
  document.querySelectorAll(".lab-tab-btn").forEach(b => { const on = b.dataset.panel === panel; b.classList.toggle("aktif", on); b.setAttribute("aria-selected", on); });
  ["tantangan", "solusi", "riwayat"].forEach(x => el("lab-panel-" + x).classList.toggle("tersembunyi", x !== panel));
}
function renderPetunjukLab() {
  const p = dataLab(), I = infoLab(TANTANGAN_SQL[TANTANGAN_AKTIF]), n = p.petunjuk[TANTANGAN_AKTIF] || 0, total = I.petunjuk.length;
  el("lab-bantuan-n").textContent = `${total} petunjuk${n ? ` (${n} dibuka)` : ""}`;
  el("lab-petunjuk-isi").innerHTML = I.petunjuk.slice(0, n).map((h, k) => `<div class="petunjuk-lab"><b>Petunjuk ${k + 1}</b><p>${esc(h).replace(/\n/g, "<br>")}</p></div>`).join("") +
    (n < total ? `<button class="btn btn-garis btn-kecil" id="btn-petunjuk-lab">💡 Buka petunjuk ${n + 1} dari ${total}</button> <span class="kecil">XP berkurang 5 per petunjuk.</span>` : "");
  const b = el("btn-petunjuk-lab");
  if (b) b.onclick = () => { p.petunjuk[TANTANGAN_AKTIF] = n + 1; simpan(); renderPetunjukLab(); el("lab-bantuan").open = true; };
}
function renderSolusiLab() {
  const p = dataLab(), T = TANTANGAN_SQL[TANTANGAN_AKTIF], k = TANTANGAN_AKTIF;
  const buka = p.lulus.includes(k) || p.lihat.includes(k);
  el("lab-panel-solusi").innerHTML = buka
    ? `<h4 class="lab-sub">Solusi</h4><pre class="jawab-kode"><code>${esc(T.jawab)}</code></pre><p><b>Kenapa begini?</b> ${esc(T.jelas)}</p>
       <p class="kecil">Cara lain yang menghasilkan tabel yang sama juga dinilai benar.</p>
       <button class="btn btn-garis btn-kecil" id="btn-solusi-salin">Salin ke editor</button>`
    : `<div class="solusi-kunci"><p><b>🔒 Solusi terkunci.</b> Kumpulkan jawaban yang benar untuk membukanya, atau coba petunjuk di tab Tantangan dulu.</p>
       <p class="kecil">Mencoba dulu walau salah membuat ingatan lebih kuat daripada langsung melihat jawaban.</p>
       <button class="btn btn-garis btn-kecil" id="btn-solusi-buka">🏳️ Saya menyerah, buka solusi</button></div>`;
  const s = el("btn-solusi-salin");
  if (s) s.onclick = () => { el("lab-query").value = T.jawab; hitungKarakterLab(); tabLab("tantangan"); el("lab-query").focus(); toast("Tutup solusinya, lalu coba ketik ulang sendiri tanpa melihat."); };
  const b = el("btn-solusi-buka");
  if (b) b.onclick = () => tanya({ judul: "Buka solusi?", pesan: "XP tantangan ini menjadi 5 jika kamu menyelesaikannya setelah melihat solusi. Saran: buka satu petunjuk lagi dulu.", ya: "Buka solusi", tidak: "Coba lagi" })
    .then(ok => { if (!ok) return; p.lihat.push(k); simpan(); renderSolusiLab(); });
}
function renderRiwayatLab() {
  const r = (dataLab().riwayat[TANTANGAN_AKTIF] || []).slice().reverse();
  el("lab-riwayat-n").textContent = r.length || "";
  el("lab-panel-riwayat").innerHTML = r.length
    ? `<h4 class="lab-sub">Riwayat pengumpulan</h4>` + r.map((x, j) => `<div class="riwayat-item ${x.ok ? "ok" : ""}">
        <p><b>${x.ok ? "✓ Benar" : x.err ? "⚠️ Error" : "✗ Belum tepat"}</b> <small>${tglJam(x.t)}</small></p>
        <pre class="kode-soal kecil-kode"><code>${esc(x.q)}</code></pre>
        <button class="btn-mini" data-j="${j}">Pakai lagi</button></div>`).join("")
    : `<p class="cek-kosong">Belum ada jawaban yang dikumpulkan untuk tantangan ini.</p>`;
  el("lab-panel-riwayat").querySelectorAll("[data-j]").forEach(b => b.onclick = () => { el("lab-query").value = r[+b.dataset.j].q; hitungKarakterLab(); tabLab("tantangan"); });
}
function hitungKarakterLab() { el("lab-karakter").textContent = `${el("lab-query").value.length} karakter`; }

function eksekusiLab(q) {
  try { return { r: jalankanSQL(q) }; }
  catch (e) {
    el("lab-hasil").innerHTML = `<div class="feedback fb-salah"><strong>Error dari database:</strong> <code>${esc(e.message)}</code>
      <p class="kecil">${saranError(e.message)}</p></div>`;
    return { err: e.message };
  }
}
function jalankanLab() {   // ▶ Jalankan: hasil percobaan, tidak dinilai
  const p = dataLab(), q = el("lab-query").value.trim();
  p.draf[TANTANGAN_AKTIF] = el("lab-query").value; simpan();
  if (!q) return toast("Tulis query dulu, ya.");
  el("lab-status").className = "lab-status tersembunyi";
  muatSqlJs().then(() => {
    const h = eksekusiLab(q);
    if (h.err) return;
    el("lab-hasil").innerHTML = `<div class="info-percobaan">ⓘ <b>Hasil percobaan.</b> Belum dinilai. Klik <b>Kumpulkan jawaban</b> untuk validasi dan penilaian.</div>` + tabelHasil(h.r);
  });
}
function kumpulkanLab() {   // ✓ Kumpulkan: dinilai, tercatat di Riwayat
  const p = dataLab(), k = TANTANGAN_AKTIF, T = TANTANGAN_SQL[k], q = el("lab-query").value.trim();
  p.draf[k] = el("lab-query").value;
  if (!q) return toast("Tulis query dulu, ya.");
  muatSqlJs().then(() => {
    const h = eksekusiLab(q), catat = ok => { (p.riwayat[k] = p.riwayat[k] || []).push({ t: Date.now(), ok, err: !!h.err, q: q.slice(0, 1200) }); p.riwayat[k] = p.riwayat[k].slice(-12); };
    if (h.err) { catat(false); simpan(); renderRiwayatLab(); el("lab-status").className = "lab-status tersembunyi"; return; }
    const benar = samaHasil(h.r, jalankanSQL(T.jawab), T.urut);
    catat(benar);
    el("lab-hasil").innerHTML = `<p class="hasil-label">Hasil query-mu:</p>` + tabelHasil(h.r);
    const st = el("lab-status");
    st.className = "lab-status muncul " + (benar ? "fb-benar" : "fb-salah");
    if (!benar) {
      RAYA.nada("salah"); simpan(); renderRiwayatLab();
      st.innerHTML = `<strong>Belum sama dengan hasil yang diharapkan.</strong> ${bedaHasil(h.r, jalankanSQL(T.jawab), T.urut)}`;
      return;
    }
    const pertama = !p.lulus.includes(k);
    const xp = p.lihat.includes(k) ? 5 : Math.max(5, 20 - 5 * (p.petunjuk[k] || 0));
    if (pertama) { p.lulus.push(k); DATA.xp += xp; catatStreak(); catatAktivitas(); }
    simpan(); renderStat(); renderRiwayatLab(); renderSolusiLab();
    st.innerHTML = `<strong>✓ Benar!</strong> ${esc(T.jelas)}`;
    el("lab-label").insertAdjacentHTML("beforeend", pertama ? `<span class="tag-selesai">✓ Selesai</span>` : "");
    document.querySelector(`.lab-no[data-k="${k}"]`)?.classList.add("lulus");
    el("lab-progres").textContent = `${p.lulus.length} dari ${TANTANGAN_SQL.length} selesai · ${Math.round(p.lulus.length / TANTANGAN_SQL.length * 100)}%`;
    el("lab-prog-isi").style.width = (p.lulus.length / TANTANGAN_SQL.length * 100) + "%";
    if (!pertama) return RAYA.nada("benar");
    RAYA.konfeti(p.lulus.length === TANTANGAN_SQL.length ? 3 : 1, st); RAYA.nada("menang");
    const d = daftarLab(DATA.pref.labFilter || "semua"), lanjut = d.find(x => x > k && !p.lulus.includes(x)) ?? d.find(x => !p.lulus.includes(x));
    setTimeout(() => tanya({
      judul: "Sempurna! 🎉",
      html: `<p>Kamu menyelesaikan <b>${esc(T.judul)}</b> dan mendapat <b>+${xp} XP</b>.</p><p class="kecil">${esc(T.jelas)}</p>`,
      ya: lanjut != null ? "Tantangan berikutnya →" : "Selesai", tidak: "Tetap di sini",
    }).then(ok => { umumkanLencana(cekLencana()); if (ok && lanjut != null) go("sqllab", { i: lanjut }, { replace: true }); }), 450);
  });
}
function bedaHasil(a, b, urut) {
  if (a.columns.length !== b.columns.length) return `Jumlah kolommu ${a.columns.length}, seharusnya ${b.columns.length}. Cek bagian SELECT.`;
  if (a.values.length !== b.values.length) return `Jumlah barismu ${a.values.length}, seharusnya ${b.values.length}. Cek WHERE / JOIN / GROUP BY / HAVING.`;
  if (urut && samaHasil(a, b, false)) return "Isi barisnya sudah benar, tapi urutannya belum. Cek ORDER BY (ASC atau DESC?).";
  return "Jumlah kolom dan baris sudah pas, tapi isinya berbeda. Cek syarat dan perhitunganmu (pembulatan, status, rentang tanggal).";
}
function saranError(m) {
  if (/no such column/i.test(m)) return "💡 Nama kolom tidak ditemukan. Cek ejaannya di Skema database, atau jika teks lupa diberi kutip tunggal ('Bandung').";
  if (/no such table/i.test(m)) return "💡 Nama tabel salah. Lihat daftar tabel di bagian Skema database.";
  if (/ambiguous/i.test(m)) return "💡 Kolom ini ada di lebih dari satu tabel. Beri awalan alias, misal p.id atau t.id.";
  if (/syntax error/i.test(m)) return "💡 Ada kesalahan penulisan. Cek koma antar kolom, urutan klausa (SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY), dan tanda kutip.";
  if (/aggregate|misuse/i.test(m)) return "💡 Fungsi agregat (SUM/COUNT) tidak boleh di WHERE. Pakai HAVING setelah GROUP BY.";
  return "💡 Baca pesan errornya pelan-pelan; biasanya ia menunjuk kata yang bermasalah.";
}
function pasangSqlLab() {
  el("btn-lab-jalankan").onclick = jalankanLab;
  el("btn-lab-kumpul").onclick = kumpulkanLab;
  el("btn-lab-reset").onclick = () => { el("lab-query").value = ""; hitungKarakterLab(); el("lab-query").focus(); };
  document.querySelectorAll(".lab-tab-btn").forEach(b => b.onclick = () => tabLab(b.dataset.panel));
  el("lab-query").addEventListener("input", hitungKarakterLab);
  el("lab-query").addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); e.shiftKey ? kumpulkanLab() : jalankanLab(); }
    if (e.key === "Tab") { e.preventDefault(); const t = e.target, a = t.selectionStart; t.value = t.value.slice(0, a) + "  " + t.value.slice(t.selectionEnd); t.selectionStart = t.selectionEnd = a + 2; }
  });
}
