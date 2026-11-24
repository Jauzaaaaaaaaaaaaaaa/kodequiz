# -*- coding: utf-8 -*-
# Studi Kasus Koding SQL (bahasa "sql"): query pengguna dibandingkan dengan hasil query acuan di SQLite browser
# (dataset yang sama dengan Lab SQL). Nama kolom boleh beda; urutan baris dicek bila urut=True.

def Q(id, judul, tingkat, soal, solusi, tabel, petunjuk, jelas, urut=False, cerita="", awal="-- tulis query-mu di sini\n"):
    return dict(id=id, judul=judul, tingkat=tingkat, bahasa="sql", soal=soal, solusi=solusi, tabel=tabel, urut=urut,
                petunjuk=petunjuk, jelas=jelas, cerita=cerita, awal=awal)

T_TRX = ["transaksi"]
# ---------------------------------------------------------------- 1. select
studi(id="sql-select", topik="sql", setelah="select", judul="Menyaring dan mengurutkan transaksi", bahasa="sql",
  contoh=dict(judul="Contoh: WHERE dengan AND, ORDER BY, LIMIT",
    penjelasan="<p>Pilih kolom yang perlu saja, saring baris dengan <code>WHERE</code> (gabungkan syarat dengan <code>AND</code>/<code>OR</code>, teks pakai kutip tunggal), urutkan dengan <code>ORDER BY ... DESC</code>, lalu batasi dengan <code>LIMIT</code>.</p>",
    kode="SELECT id, kategori, nilai\nFROM transaksi\nWHERE status = 'selesai' AND kanal = 'web'\nORDER BY nilai DESC\nLIMIT 3;",
    kunci="Urutan klausa: SELECT → FROM → WHERE → ORDER BY → LIMIT."),
  langkah=[
    Q("sql-sel-1", "Transaksi Fashion yang selesai", 1,
      "Tampilkan <b>id</b>, <b>tanggal</b>, dan <b>nilai</b> transaksi berkategori <code>Fashion</code> yang statusnya <code>selesai</code>, diurutkan dari tanggal <b>terbaru</b>.",
      "SELECT id, tanggal, nilai\nFROM transaksi\nWHERE kategori = 'Fashion' AND status = 'selesai'\nORDER BY tanggal DESC;", T_TRX,
      ["Dua syarat di WHERE digabung AND; teks memakai kutip tunggal.", "Tanggal berformat YYYY-MM-DD bisa diurutkan seperti teks: DESC = terbaru dulu."],
      "Format tanggal ISO membuat ORDER BY pada teks tetap benar secara kronologis.", urut=True),
    Q("sql-sel-2", "Lima transaksi terbesar via app", 2,
      "Tampilkan <b>id</b>, <b>kategori</b>, dan <b>nilai</b> dari 5 transaksi bernilai <b>terbesar</b> yang dilakukan lewat kanal <code>app</code>, tidak berstatus <code>batal</code>, dan tidak memakai voucher (<code>voucher = 0</code>).",
      "SELECT id, kategori, nilai\nFROM transaksi\nWHERE kanal = 'app' AND status <> 'batal' AND voucher = 0\nORDER BY nilai DESC\nLIMIT 5;", T_TRX,
      ["Tiga syarat: kanal, status (pakai <> atau !=), dan voucher.", "ORDER BY nilai DESC lalu LIMIT 5."],
      "LIMIT tanpa ORDER BY memberi baris acak; selalu urutkan dulu sebelum mengambil 'teratas'.", urut=True),
  ])

# ---------------------------------------------------------------- 2. group by
studi(id="sql-groupby", topik="sql", setelah="groupby", judul="Meringkas dengan GROUP BY", bahasa="sql",
  contoh=dict(judul="Contoh: COUNT, SUM, AVG per kelompok",
    penjelasan="<p><code>GROUP BY</code> mengelompokkan baris yang nilainya sama, lalu fungsi agregat (<code>COUNT</code>, <code>SUM</code>, <code>AVG</code>) dihitung per kelompok. Syarat untuk hasil agregat memakai <code>HAVING</code>, bukan WHERE.</p>",
    kode="SELECT kanal, COUNT(*) AS jumlah, SUM(nilai) AS omzet\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY kanal\nORDER BY omzet DESC;",
    kunci="WHERE menyaring baris SEBELUM dikelompokkan; HAVING menyaring kelompok SESUDAHNYA."),
  langkah=[
    Q("sql-gb-1", "Omzet per kategori", 1,
      "Untuk transaksi berstatus <code>selesai</code>, tampilkan <b>kategori</b>, <b>jumlah transaksi</b>, dan <b>total nilai</b> per kategori, diurutkan dari total terbesar.",
      "SELECT kategori, COUNT(*) AS jumlah, SUM(nilai) AS total\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY kategori\nORDER BY total DESC;", T_TRX,
      ["Saring status di WHERE, lalu GROUP BY kategori.", "Beri alias pada SUM(nilai) agar bisa dipakai di ORDER BY."],
      "Ini query 'omzet per kategori' yang menjadi dasar hampir semua dashboard penjualan.", urut=True),
    Q("sql-gb-2", "Kota dengan banyak pengguna", 2,
      "Dari tabel <code>pengguna</code>, tampilkan <b>kota</b> dan <b>jumlah pengguna</b> hanya untuk kota yang punya <b>minimal 2</b> pengguna dari sumber selain <code>iklan</code>, urutkan jumlah terbanyak lalu nama kota.",
      "SELECT kota, COUNT(*) AS jumlah\nFROM pengguna\nWHERE sumber <> 'iklan'\nGROUP BY kota\nHAVING COUNT(*) >= 2\nORDER BY jumlah DESC, kota;", ["pengguna"],
      ["Sumber disaring di WHERE (per baris), jumlah disaring di HAVING (per kelompok).", "ORDER BY dua kolom: jumlah DESC, kota."],
      "Menaruh syarat agregat di WHERE akan error; menaruh syarat baris di HAVING bisa jalan tetapi lebih lambat dan membingungkan.", urut=True),
  ])

# ---------------------------------------------------------------- 3. join
studi(id="sql-join", topik="sql", setelah="join", judul="Menggabungkan tabel dengan JOIN", bahasa="sql",
  contoh=dict(judul="Contoh: INNER JOIN dan LEFT JOIN",
    penjelasan="<p><code>JOIN ... ON</code> menyambungkan baris dua tabel lewat kolom kunci. <code>INNER JOIN</code> hanya baris yang punya pasangan; <code>LEFT JOIN</code> mempertahankan semua baris tabel kiri (pasangan kosong menjadi NULL).</p>",
    kode="SELECT p.nama, COUNT(o.id) AS jumlah_pesanan\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nGROUP BY p.id, p.nama\nORDER BY jumlah_pesanan DESC;",
    kunci="COUNT(o.id) (bukan COUNT(*)) agar pelanggan tanpa pesanan dihitung 0 pada LEFT JOIN."),
  langkah=[
    Q("sql-join-1", "Detail pesanan", 1,
      "Tampilkan <b>id pesanan</b>, <b>nama pelanggan</b>, <b>nama produk</b>, dan <b>subtotal</b> (qty × harga) untuk setiap pesanan, diurutkan berdasarkan id pesanan.",
      "SELECT o.id, p.nama, pr.nama, o.qty * pr.harga AS subtotal\nFROM pesanan o\nJOIN pelanggan p ON p.id = o.pelanggan_id\nJOIN produk pr ON pr.id = o.produk_id\nORDER BY o.id;", ["pesanan", "pelanggan", "produk"],
      ["JOIN dua kali: ke pelanggan dan ke produk.", "Kedua tabel punya kolom nama; beri alias tabel (p.nama, pr.nama)."],
      "Alias tabel wajib ketika nama kolom sama di beberapa tabel, misalnya id dan nama.", urut=True),
    Q("sql-join-2", "Penjualan per kategori, termasuk yang nol", 2,
      "Tampilkan setiap <b>kategori produk</b> dan <b>total qty terjual</b>; kategori tanpa penjualan tetap tampil dengan 0. Urutkan dari qty terbanyak.",
      "SELECT pr.kategori, COALESCE(SUM(o.qty), 0) AS qty\nFROM produk pr\nLEFT JOIN pesanan o ON o.produk_id = pr.id\nGROUP BY pr.kategori\nORDER BY qty DESC;", ["produk", "pesanan"],
      ["Mulai FROM produk lalu LEFT JOIN pesanan agar semua produk ikut.", "SUM dari baris NULL menghasilkan NULL; bungkus dengan COALESCE(..., 0)."],
      "Pada data ini semua kategori punya penjualan, tetapi pola LEFT JOIN + COALESCE melindungi laporan ketika ada produk baru yang belum laku.", urut=True),
  ])

# ---------------------------------------------------------------- 4. subquery
studi(id="sql-subquery", topik="sql", setelah="subquery", judul="Subquery: query di dalam query", bahasa="sql",
  contoh=dict(judul="Contoh: membandingkan dengan rata-rata",
    penjelasan="<p>Subquery dihitung lebih dulu, lalu hasilnya dipakai query luar. Bisa mengembalikan satu nilai (dibandingkan dengan <code>&gt;</code>) atau daftar (dipakai dengan <code>IN</code>).</p>",
    kode="SELECT id, nilai\nFROM transaksi\nWHERE nilai > (SELECT AVG(nilai) FROM transaksi)\nORDER BY nilai DESC;",
    kunci="Satu nilai → = < >. Daftar → IN / NOT IN."),
  langkah=[
    Q("sql-sub-1", "Di atas rata-rata kategorinya sendiri", 2,
      "Tampilkan <b>id</b>, <b>kategori</b>, dan <b>nilai</b> transaksi yang nilainya <b>lebih besar dari rata-rata kategori yang sama</b>. Urutkan berdasarkan kategori lalu nilai terbesar.",
      "SELECT t.id, t.kategori, t.nilai\nFROM transaksi t\nWHERE t.nilai > (SELECT AVG(x.nilai) FROM transaksi x WHERE x.kategori = t.kategori)\nORDER BY t.kategori, t.nilai DESC;", T_TRX,
      ["Ini subquery berkorelasi: subquery merujuk baris luar (t.kategori).", "Beri alias berbeda untuk tabel luar (t) dan dalam (x)."],
      "Subquery berkorelasi dijalankan per baris; untuk data besar sering diganti window function (bab 8).", urut=True),
    Q("sql-sub-2", "Pengguna yang belum pernah bertransaksi selesai", 2,
      "Tampilkan <b>nama</b> dan <b>kota</b> pengguna yang <b>tidak punya</b> satu pun transaksi berstatus <code>selesai</code>, urut nama.",
      "SELECT nama, kota\nFROM pengguna\nWHERE id NOT IN (SELECT pengguna_id FROM transaksi WHERE status = 'selesai')\nORDER BY nama;", ["pengguna", "transaksi"],
      ["Subquery mengembalikan daftar pengguna_id yang punya transaksi selesai.", "Query luar memakai NOT IN."],
      "Pengguna seperti ini adalah target kampanye aktivasi. Hati-hati: NOT IN dengan subquery yang berisi NULL menghasilkan kosong; di sini pengguna_id tidak pernah NULL.", urut=True),
  ])

# ---------------------------------------------------------------- 5. case
studi(id="sql-case", topik="sql", setelah="case", judul="CASE WHEN untuk segmentasi", bahasa="sql",
  contoh=dict(judul="Contoh: label dan hitung bersyarat",
    penjelasan="<p><code>CASE WHEN ... THEN ... ELSE ... END</code> adalah IF di dalam SQL. Dipakai untuk memberi label, atau di dalam <code>SUM</code> untuk menghitung bersyarat.</p>",
    kode="SELECT id, nilai,\n  CASE WHEN nilai >= 1000000 THEN 'besar'\n       WHEN nilai >= 300000 THEN 'sedang'\n       ELSE 'kecil' END AS ukuran\nFROM transaksi\nORDER BY nilai DESC\nLIMIT 5;",
    kunci="SUM(CASE WHEN syarat THEN 1 ELSE 0 END) = hitung baris yang memenuhi syarat."),
  langkah=[
    Q("sql-case-1", "Label ukuran transaksi", 1,
      "Untuk setiap label ukuran (<code>besar</code> ≥ 1.000.000; <code>sedang</code> ≥ 300.000; selain itu <code>kecil</code>), tampilkan <b>label</b> dan <b>jumlah transaksi</b>. Urutkan berdasarkan label.",
      "SELECT CASE WHEN nilai >= 1000000 THEN 'besar'\n            WHEN nilai >= 300000 THEN 'sedang'\n            ELSE 'kecil' END AS ukuran,\n       COUNT(*) AS jumlah\nFROM transaksi\nGROUP BY ukuran\nORDER BY ukuran;", T_TRX,
      ["Urutan WHEN penting: cek ambang terbesar dulu.", "GROUP BY alias kolom CASE (SQLite mengizinkan GROUP BY ukuran)."],
      "Mengelompokkan berdasarkan hasil CASE adalah cara cepat membuat segmen pelanggan atau ukuran transaksi.", urut=True),
    Q("sql-case-2", "Rasio retur per kategori", 2,
      "Per <b>kategori</b>, tampilkan <b>jumlah transaksi</b>, <b>jumlah retur</b>, dan <b>persen retur</b> (dibulatkan 1 desimal). Urutkan dari persen retur tertinggi, lalu kategori.",
      "SELECT kategori,\n       COUNT(*) AS jumlah,\n       SUM(CASE WHEN status = 'retur' THEN 1 ELSE 0 END) AS retur,\n       ROUND(100.0 * SUM(CASE WHEN status = 'retur' THEN 1 ELSE 0 END) / COUNT(*), 1) AS persen_retur\nFROM transaksi\nGROUP BY kategori\nORDER BY persen_retur DESC, kategori;", T_TRX,
      ["Hitung retur dengan SUM(CASE WHEN status = 'retur' THEN 1 ELSE 0 END).", "Kalikan 100.0 (desimal) sebelum membagi, supaya bukan pembagian bilangan bulat."],
      "Di SQLite, 3 / 8 = 0 (bilangan bulat). 100.0 * ... memaksa hasil desimal: jebakan klasik soal rasio.", urut=True),
  ])

# ---------------------------------------------------------------- 6. null & fungsi
studi(id="sql-null", topik="sql", setelah="nullfungsi", judul="NULL dan fungsi bawaan", bahasa="sql",
  contoh=dict(judul="Contoh: fungsi teks, tanggal, dan COALESCE",
    penjelasan="<p><code>substr(teks, mulai, panjang)</code> memotong teks, <code>strftime('%Y-%m', tanggal)</code> mengambil bulan, <code>UPPER</code>/<code>LOWER</code> mengubah huruf, <code>COALESCE(a, b)</code> memberi nilai pengganti NULL. Bandingkan NULL dengan <code>IS NULL</code>, bukan <code>= NULL</code>.</p>",
    kode="SELECT strftime('%Y-%m', tanggal) AS bulan, COUNT(*) AS jumlah\nFROM transaksi\nGROUP BY bulan\nORDER BY bulan;",
    kunci="strftime('%Y-%m', kolom_tanggal) untuk ringkasan bulanan. NULL tidak pernah = apa pun."),
  langkah=[
    Q("sql-null-1", "Omzet bulanan", 1,
      "Tampilkan <b>bulan</b> (format <code>YYYY-MM</code>) dan <b>total nilai</b> transaksi berstatus <code>selesai</code> per bulan, urut bulan.",
      "SELECT strftime('%Y-%m', tanggal) AS bulan, SUM(nilai) AS total\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY bulan\nORDER BY bulan;", T_TRX,
      ["strftime('%Y-%m', tanggal) atau substr(tanggal, 1, 7).", "GROUP BY bulan lalu ORDER BY bulan."],
      "Ringkasan bulanan adalah grafik pertama di hampir semua dashboard.", urut=True),
    Q("sql-null-2", "Login gagal per jam", 2,
      "Dari <code>log_login</code>, tampilkan <b>tanggal</b>, <b>jam</b> (2 digit, dari kolom waktu), dan <b>jumlah login gagal</b> untuk jam yang punya <b>minimal 3</b> login gagal. Urutkan dari jumlah terbanyak, lalu tanggal dan jam.",
      "SELECT date(waktu) AS tanggal, strftime('%H', waktu) AS jam, COUNT(*) AS gagal\nFROM log_login\nWHERE status = 'gagal'\nGROUP BY tanggal, jam\nHAVING COUNT(*) >= 3\nORDER BY gagal DESC, tanggal, jam;", ["log_login"],
      ["date(waktu) mengambil bagian tanggal; strftime('%H', waktu) mengambil jam.", "GROUP BY dua kolom, lalu HAVING untuk ambang 3."],
      "Lonjakan login gagal di jam tertentu adalah tanda serangan tebak password (brute force).", urut=True),
  ])

# ---------------------------------------------------------------- 7. cte & union
studi(id="sql-cte", topik="sql", setelah="cte", judul="CTE: query bertahap", bahasa="sql",
  contoh=dict(judul="Contoh: WITH untuk langkah perantara",
    penjelasan="<p><code>WITH nama AS (SELECT ...)</code> membuat tabel sementara bernama yang bisa dipakai query berikutnya. Query panjang menjadi langkah-langkah yang mudah dibaca. <code>UNION ALL</code> menumpuk hasil dua query.</p>",
    kode="WITH per_pengguna AS (\n  SELECT pengguna_id, SUM(nilai) AS belanja\n  FROM transaksi\n  WHERE status = 'selesai'\n  GROUP BY pengguna_id\n)\nSELECT COUNT(*) AS jumlah_pembeli, AVG(belanja) AS rata_belanja\nFROM per_pengguna;",
    kunci="Satu CTE = satu langkah berpikir. Beberapa CTE dipisah koma."),
  langkah=[
    Q("sql-cte-1", "Pembeli di atas rata-rata", 2,
      "Pakai CTE untuk menghitung total belanja (transaksi <code>selesai</code>) per pengguna, lalu tampilkan <b>nama pengguna</b> dan <b>total belanja</b> yang lebih besar dari rata-rata total belanja semua pembeli. Urutkan dari terbesar.",
      "WITH belanja AS (\n  SELECT pengguna_id, SUM(nilai) AS total\n  FROM transaksi\n  WHERE status = 'selesai'\n  GROUP BY pengguna_id\n)\nSELECT p.nama, b.total\nFROM belanja b\nJOIN pengguna p ON p.id = b.pengguna_id\nWHERE b.total > (SELECT AVG(total) FROM belanja)\nORDER BY b.total DESC;", ["transaksi", "pengguna"],
      ["CTE belanja: SUM per pengguna_id dengan WHERE status = 'selesai'.", "Query akhir: JOIN ke pengguna untuk nama, dan bandingkan dengan (SELECT AVG(total) FROM belanja)."],
      "CTE dipakai dua kali (di FROM dan di subquery) tanpa menulis ulang logikanya.", urut=True),
    Q("sql-cte-2", "Laporan keamanan gabungan", 2,
      "Buat satu tabel berisi dua jenis kejadian: <b>login gagal</b> dari <code>log_login</code> (status <code>gagal</code>) dan <b>error server</b> dari <code>log_web</code> (status ≥ 400). Tampilkan kolom <b>jenis</b> (<code>'login_gagal'</code> atau <code>'http_error'</code>), <b>ip</b>, dan <b>jumlah</b> kejadian per jenis dan ip, hanya yang jumlahnya ≥ 2, urutkan dari jumlah terbanyak lalu jenis dan ip.",
      "WITH kejadian AS (\n  SELECT 'login_gagal' AS jenis, ip FROM log_login WHERE status = 'gagal'\n  UNION ALL\n  SELECT 'http_error', ip FROM log_web WHERE status >= 400\n)\nSELECT jenis, ip, COUNT(*) AS jumlah\nFROM kejadian\nGROUP BY jenis, ip\nHAVING COUNT(*) >= 2\nORDER BY jumlah DESC, jenis, ip;", ["log_login", "log_web"],
      ["UNION ALL menumpuk dua SELECT yang jumlah dan urutan kolomnya sama.", "Taruh gabungan di CTE, lalu GROUP BY jenis, ip dengan HAVING."],
      "Menggabungkan beberapa sumber log ke satu tabel adalah pekerjaan inti analis SOC dan juga tim data.", urut=True),
  ])

# ---------------------------------------------------------------- 8. window
studi(id="sql-window", topik="sql", setelah="window", judul="Window function: peringkat dan total berjalan", bahasa="sql",
  contoh=dict(judul="Contoh: RANK dan SUM OVER",
    penjelasan="<p>Window function menghitung nilai per baris <b>tanpa</b> meringkas baris. <code>RANK() OVER (PARTITION BY kategori ORDER BY nilai DESC)</code> memberi peringkat di dalam setiap kategori; <code>SUM(nilai) OVER (ORDER BY tanggal)</code> membuat total berjalan.</p>",
    kode="SELECT id, kategori, nilai,\n       RANK() OVER (PARTITION BY kategori ORDER BY nilai DESC) AS peringkat\nFROM transaksi\nWHERE kategori = 'Elektronik';",
    kunci="PARTITION BY = 'per kelompok', ORDER BY di dalam OVER = urutan perhitungan."),
  langkah=[
    Q("sql-win-1", "Transaksi terbesar per kategori", 2,
      "Tampilkan <b>kategori</b>, <b>id</b>, dan <b>nilai</b> dari transaksi dengan nilai <b>terbesar di setiap kategori</b> (bila seri, tampilkan semua yang seri). Urut kategori.",
      "WITH r AS (\n  SELECT kategori, id, nilai,\n         RANK() OVER (PARTITION BY kategori ORDER BY nilai DESC) AS rk\n  FROM transaksi\n)\nSELECT kategori, id, nilai\nFROM r\nWHERE rk = 1\nORDER BY kategori, id;", T_TRX,
      ["Window function tidak bisa langsung dipakai di WHERE; hitung di CTE dulu.", "RANK() OVER (PARTITION BY kategori ORDER BY nilai DESC), lalu saring rk = 1."],
      "Pola 'top-N per kelompok' (CTE + RANK) adalah soal window function paling sering di tes data analyst.", urut=True),
    Q("sql-win-2", "Total berjalan dan selisih harian", 2,
      "Untuk transaksi <code>selesai</code> di kanal <code>web</code>, tampilkan <b>tanggal</b>, <b>nilai</b>, <b>total berjalan</b> (urut tanggal lalu id), dan <b>selisih</b> nilai dengan transaksi sebelumnya (transaksi pertama selisihnya NULL). Urut tanggal lalu id.",
      "SELECT tanggal, nilai,\n       SUM(nilai) OVER (ORDER BY tanggal, id) AS total_berjalan,\n       nilai - LAG(nilai) OVER (ORDER BY tanggal, id) AS selisih\nFROM transaksi\nWHERE status = 'selesai' AND kanal = 'web'\nORDER BY tanggal, id;", T_TRX,
      ["SUM(nilai) OVER (ORDER BY tanggal, id) = total berjalan.", "LAG(nilai) mengambil nilai baris sebelumnya; baris pertama mendapat NULL."],
      "Total berjalan dan LAG dipakai untuk grafik pertumbuhan kumulatif dan deteksi lonjakan.", urut=True),
  ])

# ---------------------------------------------------------------- 🏁 SQL bab 1–5
def ujian_sql(id, setelah, judul, cakupan, cerita, bagian):
    langkah = []
    for n, b in enumerate(bagian):
        langkah.append(Q(f"{id}-{'abc'[n]}", f"Bagian {'ABC'[n]}: {b['judul']}", min(3, n + 2), b["soal"], b["solusi"], b["tabel"], b["petunjuk"], b["jelas"],
                         urut=b.get("urut", True), cerita=cerita if n == 0 else f"Lanjutan bagian {'AB'[n - 1]}: pertanyaan manajer berikutnya dari data yang sama."))
    studi(id=id, topik="sql", setelah=setelah, judul=judul, ujian=True, cakupan=cakupan, bahasa="sql",
          contoh=dict(PANDUAN, kode="-- Bagian A: pahami datanya dulu\nSELECT * FROM transaksi LIMIT 5;", penjelasan=PANDUAN["penjelasan"].replace("Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.", "Setiap bagian adalah query baru dari data yang sama; pakai ulang pola query bagian sebelumnya.")),
          langkah=langkah)

ujian_sql("uji-sql-1", "case", "Laporan e-commerce untuk manajer", "Bab 1–5: SELECT, GROUP BY, JOIN, subquery, CASE",
  "Manajer e-commerce meminta tiga angka untuk rapat besok dari tabel <code>transaksi</code> dan <code>pengguna</code>.",
  [dict(judul="Kinerja kanal",
     soal="Per <b>kanal</b>, tampilkan <b>jumlah transaksi</b>, <b>omzet</b> (total nilai transaksi <code>selesai</code> saja), dan <b>persen batal</b> (status <code>batal</code> dibagi semua transaksi kanal itu, ×100, 1 desimal). Urut omzet terbesar.",
     solusi="SELECT kanal,\n       COUNT(*) AS jumlah,\n       SUM(CASE WHEN status = 'selesai' THEN nilai ELSE 0 END) AS omzet,\n       ROUND(100.0 * SUM(CASE WHEN status = 'batal' THEN 1 ELSE 0 END) / COUNT(*), 1) AS persen_batal\nFROM transaksi\nGROUP BY kanal\nORDER BY omzet DESC;",
     tabel=T_TRX,
     petunjuk=["Jangan saring status di WHERE: jumlah transaksi harus menghitung semua status.", "SUM(CASE WHEN status = 'selesai' THEN nilai ELSE 0 END) untuk omzet bersyarat."],
     jelas="Hitung bersyarat dengan CASE di dalam SUM memungkinkan beberapa metrik berbeda dalam satu GROUP BY."),
   dict(judul="Kota terbaik",
     soal="Tampilkan <b>kota</b> pengguna, <b>jumlah pembeli</b> (pengguna berbeda yang punya transaksi <code>selesai</code>), dan <b>omzet</b> transaksi selesai, hanya kota dengan omzet ≥ 1.000.000. Urut omzet terbesar.",
     solusi="SELECT p.kota, COUNT(DISTINCT t.pengguna_id) AS pembeli, SUM(t.nilai) AS omzet\nFROM transaksi t\nJOIN pengguna p ON p.id = t.pengguna_id\nWHERE t.status = 'selesai'\nGROUP BY p.kota\nHAVING SUM(t.nilai) >= 1000000\nORDER BY omzet DESC;",
     tabel=["transaksi", "pengguna"],
     petunjuk=["JOIN transaksi ke pengguna untuk mendapat kota.", "COUNT(DISTINCT t.pengguna_id) menghitung pembeli unik; ambang omzet di HAVING."],
     jelas="COUNT(DISTINCT ...) membedakan 'jumlah transaksi' dan 'jumlah pembeli', dua angka yang sering tertukar dalam laporan."),
   dict(judul="Segmen pembeli",
     soal="Beri setiap pengguna yang punya transaksi <code>selesai</code> segmen berdasarkan total belanjanya: <code>VIP</code> (≥ 2.000.000), <code>Reguler</code> (≥ 500.000), selain itu <code>Baru</code>. Tampilkan <b>segmen</b>, <b>jumlah pengguna</b>, dan <b>rata-rata belanja</b> (dibulatkan ke bilangan bulat). Urut rata-rata terbesar.",
     solusi="SELECT segmen, COUNT(*) AS jumlah, ROUND(AVG(total)) AS rata_belanja\nFROM (\n  SELECT pengguna_id, SUM(nilai) AS total,\n         CASE WHEN SUM(nilai) >= 2000000 THEN 'VIP'\n              WHEN SUM(nilai) >= 500000 THEN 'Reguler'\n              ELSE 'Baru' END AS segmen\n  FROM transaksi\n  WHERE status = 'selesai'\n  GROUP BY pengguna_id\n) s\nGROUP BY segmen\nORDER BY rata_belanja DESC;",
     tabel=T_TRX,
     petunjuk=["Langkah 1 (subquery di FROM): total belanja dan segmen per pengguna.", "Langkah 2: GROUP BY segmen dari hasil langkah 1."],
     jelas="Agregasi dua tingkat (per pengguna, lalu per segmen) adalah dasar segmentasi pelanggan, seperti di skripsimu dengan K-Means, tapi memakai aturan bisnis."),
  ])
