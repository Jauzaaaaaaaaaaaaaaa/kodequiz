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

function renderSqlLab(i) {
  const p = DATA.sqllab = DATA.sqllab || { lulus: [], draf: {} };
  TANTANGAN_AKTIF = i == null ? Math.max(0, TANTANGAN_SQL.findIndex((_, k) => !p.lulus.includes(k))) : i;
  if (TANTANGAN_AKTIF < 0) TANTANGAN_AKTIF = 0;
  const T = TANTANGAN_SQL[TANTANGAN_AKTIF];

  el("lab-progres").textContent = `${p.lulus.length} / ${TANTANGAN_SQL.length} tantangan selesai`;
  el("lab-nav").innerHTML = TANTANGAN_SQL.map((t, k) =>
    `<button class="lab-no ${k === TANTANGAN_AKTIF ? "aktif" : ""} ${p.lulus.includes(k) ? "lulus" : ""}" data-k="${k}" title="${esc(t.judul)}">${k + 1}</button>`).join("");
  document.querySelectorAll(".lab-no").forEach(b => b.onclick = () => go("sqllab", { i: +b.dataset.k }, { replace: true }));

  el("lab-judul").textContent = `${TANTANGAN_AKTIF + 1}. ${T.judul}`;
  el("lab-soal").innerHTML = T.soal + (T.urut ? ` <span class="chip-kecil">urutan dicek</span>` : "");
  el("lab-tabel").innerHTML = ["pelanggan", "produk", "pesanan"].map(n => renderDataset(n)).join("");
  el("lab-query").value = p.draf[TANTANGAN_AKTIF] || "";
  el("lab-hasil").innerHTML = `<p class="cek-kosong">Tulis query-mu, lalu tekan <b>▶ Jalankan</b> (atau Ctrl+Enter).</p>`;
  el("lab-status").className = "lab-status tersembunyi";

  muatSqlJs().then(() => el("lab-mesin").textContent = "✓ Mesin SQLite siap (offline)")
    .catch(e => el("lab-mesin").textContent = "⚠️ " + e.message);
}
function jalankanLab() {
  const T = TANTANGAN_SQL[TANTANGAN_AKTIF], q = el("lab-query").value.trim();
  const p = DATA.sqllab;
  p.draf[TANTANGAN_AKTIF] = el("lab-query").value; simpan();
  if (!q) return toast("Tulis query dulu, ya.");
  muatSqlJs().then(() => {
    let milikmu;
    try { milikmu = jalankanSQL(q); }
    catch (e) {
      el("lab-hasil").innerHTML = `<div class="feedback fb-salah"><strong>Error dari database:</strong> <code>${esc(e.message)}</code>
        <p class="kecil">${saranError(e.message)}</p></div>`;
      el("lab-status").className = "lab-status tersembunyi";
      return;
    }
    const kunci = jalankanSQL(T.jawab);
    const benar = samaHasil(milikmu, kunci, T.urut);
    el("lab-hasil").innerHTML = `<p class="hasil-label">Hasil query-mu:</p>` + tabelHasil(milikmu);
    const st = el("lab-status");
    st.className = "lab-status muncul " + (benar ? "fb-benar" : "fb-salah");
    if (benar) {
      const pertamaKali = !p.lulus.includes(TANTANGAN_AKTIF);
      if (pertamaKali) { p.lulus.push(TANTANGAN_AKTIF); DATA.xp += 20; catatStreak(); }
      simpan(); renderStat();
      if (p.lulus.length === TANTANGAN_SQL.length && pertamaKali) { RAYA.konfeti(3); RAYA.nada("menang"); }
      else { RAYA.konfeti(1, st); RAYA.nada("benar"); }
      if (pertamaKali) RAYA.melayang(el("btn-lab-jalankan"), "+20 XP");
      setTimeout(() => umumkanLencana(cekLencana()), 400);
      st.innerHTML = `<strong>✓ Benar!</strong> ${esc(T.jelas)}
        ${TANTANGAN_AKTIF + 1 < TANTANGAN_SQL.length ? `<br><button class="btn btn-utama btn-kecil" id="lab-lanjut">Tantangan berikutnya →</button>` : "<br>🎉 Semua tantangan selesai!"}`;
      const n = el("lab-lanjut"); if (n) n.onclick = () => go("sqllab", { i: TANTANGAN_AKTIF + 1 }, { replace: true });
      el("lab-progres").textContent = `${p.lulus.length} / ${TANTANGAN_SQL.length} tantangan selesai`;
      document.querySelector(`.lab-no[data-k="${TANTANGAN_AKTIF}"]`)?.classList.add("lulus");
    } else {
      RAYA.nada("salah");
      st.innerHTML = `<strong>Belum sama dengan hasil yang diharapkan.</strong> ${bedaHasil(milikmu, kunci, T.urut)}`;
    }
  });
}
function bedaHasil(a, b, urut) {
  if (a.columns.length !== b.columns.length) return `Jumlah kolommu ${a.columns.length}, seharusnya ${b.columns.length}. Cek bagian SELECT.`;
  if (a.values.length !== b.values.length) return `Jumlah barismu ${a.values.length}, seharusnya ${b.values.length}. Cek WHERE / JOIN / GROUP BY / HAVING.`;
  if (urut && samaHasil(a, b, false)) return "Isi barisnya sudah benar, tapi urutannya belum. Cek ORDER BY (ASC atau DESC?).";
  return "Jumlah kolom dan baris sudah pas, tapi isinya berbeda. Cek syarat dan perhitunganmu.";
}
function saranError(m) {
  if (/no such column/i.test(m)) return "💡 Nama kolom tidak ditemukan. Cek ejaannya, atau jika teks lupa diberi kutip tunggal ('Bandung').";
  if (/no such table/i.test(m)) return "💡 Nama tabel salah. Tabel yang ada: pelanggan, produk, pesanan.";
  if (/ambiguous/i.test(m)) return "💡 Kolom ini ada di lebih dari satu tabel. Beri awalan alias, misal p.id atau o.id.";
  if (/syntax error/i.test(m)) return "💡 Ada kesalahan penulisan. Cek koma antar kolom, urutan klausa (SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY), dan tanda kutip.";
  if (/aggregate|misuse/i.test(m)) return "💡 Fungsi agregat (SUM/COUNT) tidak boleh di WHERE. Pakai HAVING setelah GROUP BY.";
  return "💡 Baca pesan errornya pelan-pelan; biasanya ia menunjuk kata yang bermasalah.";
}
function petunjukLab() {
  tanya({ judul: "💡 Petunjuk", pesan: TANTANGAN_SQL[TANTANGAN_AKTIF].petunjuk, ya: "Oke", tanpaBatal: true });
}
function jawabanLab() {
  const T = TANTANGAN_SQL[TANTANGAN_AKTIF];
  tanya({
    judul: "🏳️ Jawaban & penjelasan",
    html: `<pre class="jawab-kode"><code>${esc(T.jawab)}</code></pre><p><b>Kenapa begini?</b> ${esc(T.jelas)}</p>
           <p class="kecil">Saran: tutup jendela ini, lalu ketik ulang query-nya sendiri tanpa melihat. Itu yang membuatnya melekat.</p>`,
    ya: "Salin ke editor", tidak: "Tutup",
  }).then(ok => { if (ok) { el("lab-query").value = T.jawab; el("lab-query").focus(); } });
}
function pasangSqlLab() {
  el("btn-lab-jalankan").onclick = jalankanLab;
  el("btn-lab-petunjuk").onclick = petunjukLab;
  el("btn-lab-jawaban").onclick = jawabanLab;
  el("lab-query").addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); jalankanLab(); }
    if (e.key === "Tab") { e.preventDefault(); const t = e.target, a = t.selectionStart; t.value = t.value.slice(0, a) + "  " + t.value.slice(t.selectionEnd); t.selectionStart = t.selectionEnd = a + 2; }
  });
}
