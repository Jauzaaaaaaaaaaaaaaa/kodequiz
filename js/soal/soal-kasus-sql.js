// ============ TANTANGAN KASUS KERJA (Lab SQL, nomor 19 dst.) ============
// Format mengikuti latihan interview SQL bercerita (terinspirasi video @ngulik.data):
// cerita rapat + tugas + skema + hasil yang diharapkan + 3 petunjuk bertahap + Jalankan vs Kumpulkan.
// Perusahaan "Pasarku" (marketplace) dan "TelkoNesia" (operator seluler) fiktif; datanya simulasi.
// Field: id unik (dipakai Jalur), jalur da/ds, tingkat 1–3, kategori = tag skill, tabel = kunci DATASET.
// Soal baru selalu ditambah di BELAKANG array, karena progres Lab disimpan per nomor urut.

const TANTANGAN_SQL_KASUS = [
  {id:"ekspansi5", jalur:"da", tingkat:1, kategori:"SQL Filtering", tabel:["tbPengguna"],
   judul:"Pengguna di 5 kota besar",
   cerita:`<p>Rapat strategi Senin pagi di Pasarku membahas ekspansi gudang. Pak Hadi (Direktur Operasional) membuka:</p>
<blockquote><b>Pak Hadi:</b> "Kita fokus ke 5 kota besar dulu: Jakarta, Surabaya, Bandung, Medan, dan Makassar. Tolong siapkan daftar pengguna kita di kota-kota itu."</blockquote>
<blockquote><b>Bu Sari (Marketing):</b> "Kalau ditulis <code>OR</code> lima kali, query-nya panjang dan rawan salah. Ada cara lebih ringkas?"</blockquote>
<blockquote><b>Kak Nadia (Senior Analyst):</b> "Ada. Pakai operator <code>IN</code>: cukup salah satu nilai cocok, barisnya ikut."</blockquote>`,
   soal:"Tampilkan <b>id</b>, <b>nama</b>, dan <b>kota</b> semua pengguna yang tinggal di Jakarta, Surabaya, Bandung, Medan, atau Makassar.",
   jawab:"SELECT id, nama, kota\nFROM pengguna\nWHERE kota IN ('Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Makassar');",
   petunjuk:["Datanya ada di tabel pengguna. Kamu hanya perlu menyaring kolom kota.",
     "IN menerima daftar nilai di dalam kurung, dipisah koma, masing-masing dengan kutip tunggal.",
     "Kerangka: SELECT id, nama, kota FROM pengguna WHERE kota IN ('…', '…', …);"],
   jelas:"WHERE kota IN (…) sama dengan lima syarat OR, tetapi lebih ringkas dan mudah dibaca. Dari 16 pengguna tersisa 11. Operator ini sering muncul di tes SQL tahap awal."},

  {id:"trxFeb", jalur:"da", tingkat:1, kategori:"SQL Filtering", tabel:["tbTransaksi"],
   judul:"Transaksi sukses bulan Februari",
   cerita:`<p>Bu Ratna (Finance) menyiapkan laporan bulanan untuk direksi.</p>
<blockquote><b>Bu Ratna:</b> "Saya butuh dua angka saja untuk Februari 2026: berapa transaksi yang <i>benar-benar selesai</i>, dan total nilainya (GMV). Pesanan batal dan retur jangan ikut, nanti angka saya ditegur auditor."</blockquote>`,
   soal:"Hitung <b>jumlah transaksi</b> dan <b>total nilai</b> (beri nama kolom bebas) untuk transaksi berstatus <code>selesai</code> dengan tanggal 1–28 Februari 2026.",
   jawab:"SELECT COUNT(*) AS jumlah, SUM(nilai) AS gmv\nFROM transaksi\nWHERE status = 'selesai'\n  AND tanggal BETWEEN '2026-02-01' AND '2026-02-28';",
   petunjuk:["Ada dua syarat yang harus terpenuhi bersamaan, jadi gabungkan dengan AND.",
     "Tanggal disimpan sebagai teks 'YYYY-MM-DD', jadi BETWEEN '2026-02-01' AND '2026-02-28' bekerja dengan benar.",
     "Kerangka: SELECT COUNT(*), SUM(nilai) FROM transaksi WHERE status = '…' AND tanggal BETWEEN '…' AND '…';"],
   jelas:"Hasilnya 9 transaksi dengan GMV Rp1.953.000. Format tanggal ISO (tahun-bulan-hari) bisa dibandingkan seperti teks karena urutan hurufnya sama dengan urutan waktu."},

  {id:"gmvKategori", jalur:"da", tingkat:1, kategori:"Agregasi", tabel:["tbTransaksi"], urut:true,
   judul:"GMV per kategori",
   cerita:`<p>Mas Bayu (Category Manager) sedang menyusun rencana promo kuartal depan.</p>
<blockquote><b>Mas Bayu:</b> "Kategori mana yang paling besar menyumbang GMV? Urutkan dari yang terbesar ya, saya mau taruh di slide pertama."</blockquote>`,
   soal:"Untuk transaksi <code>selesai</code>, tampilkan <b>kategori</b> dan <b>total nilai</b>-nya, urut dari <b>terbesar</b>.",
   jawab:"SELECT kategori, SUM(nilai) AS gmv\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY kategori\nORDER BY gmv DESC;",
   petunjuk:["Satu baris per kategori berarti GROUP BY kategori.",
     "Saring status dulu dengan WHERE, baru kelompokkan. Urutkan hasil agregat dengan ORDER BY … DESC.",
     "Kerangka: SELECT kategori, SUM(nilai) AS gmv FROM transaksi WHERE … GROUP BY … ORDER BY gmv DESC;"],
   jelas:"Elektronik Rp4.932.000 jauh di atas yang lain walau transaksinya sedikit, karena harga per barangnya tinggi. Pelajaran: GMV besar belum tentu berarti pembelinya banyak, jadi lihat juga jumlah transaksi."},

  {id:"gagalKanal", jalur:"da", tingkat:2, kategori:"CASE & Rasio", tabel:["tbTransaksi"],
   judul:"Tingkat gagal per kanal",
   cerita:`<p>Tim produk curiga checkout di web lebih sering gagal daripada di aplikasi.</p>
<blockquote><b>Mas Bayu:</b> "Developer web bilang tidak ada masalah. Saya butuh data: dari semua transaksi per kanal, berapa persen yang tidak selesai (batal atau retur)?"</blockquote>
<blockquote><b>Kak Nadia:</b> "Ingat, bandingkan <i>persentase</i>, bukan jumlah. Kanal app jelas punya transaksi lebih banyak."</blockquote>`,
   soal:"Per <b>kanal</b>, tampilkan <b>jumlah transaksi</b> dan <b>persentase transaksi yang statusnya bukan 'selesai'</b>, dibulatkan 1 desimal.",
   jawab:"SELECT kanal,\n       COUNT(*) AS total,\n       ROUND(AVG(CASE WHEN status <> 'selesai' THEN 1.0 ELSE 0 END) * 100, 1) AS persen_gagal\nFROM transaksi\nGROUP BY kanal;",
   petunjuk:["Ubah setiap baris jadi angka 1 (gagal) atau 0 (selesai) dengan CASE WHEN.",
     "Rata-rata dari kolom 1/0 sama dengan proporsi. Kalikan 100 untuk persen, lalu ROUND(…, 1).",
     "Kerangka: SELECT kanal, COUNT(*), ROUND(AVG(CASE WHEN status <> 'selesai' THEN 1.0 ELSE 0 END) * 100, 1) FROM transaksi GROUP BY kanal;"],
   jelas:"Keduanya 22,2% (app 6 dari 27, web 2 dari 9). Dugaan 'web lebih sering gagal' tidak didukung data. Menunjukkan bahwa hipotesis salah juga temuan yang berharga. Trik AVG(CASE … 1.0 ELSE 0) sangat sering dipakai untuk menghitung rasio."},

  {id:"belumBelanja", jalur:"da", tingkat:2, kategori:"JOIN", tabel:["tbPengguna","tbTransaksi"],
   judul:"Pengguna yang belum pernah belanja",
   cerita:`<p>Tim CRM ingin mengirim voucher aktivasi.</p>
<blockquote><b>Bu Sari:</b> "Saya mau kirim voucher hanya ke pengguna yang <i>sudah daftar tapi belum pernah bertransaksi sama sekali</i>. Jangan sampai pembeli lama ikut dapat, anggarannya terbatas."</blockquote>`,
   soal:"Tampilkan <b>id</b>, <b>nama</b>, dan <b>sumber</b> pengguna yang tidak punya satu pun baris di tabel transaksi.",
   jawab:"SELECT p.id, p.nama, p.sumber\nFROM pengguna p\nLEFT JOIN transaksi t ON t.pengguna_id = p.id\nWHERE t.id IS NULL;",
   petunjuk:["INNER JOIN hanya menyisakan pengguna yang punya transaksi. Kamu justru mencari yang TIDAK punya.",
     "LEFT JOIN mempertahankan semua pengguna; kolom transaksi bernilai NULL jika tidak ada pasangannya.",
     "Kerangka: SELECT … FROM pengguna p LEFT JOIN transaksi t ON t.pengguna_id = p.id WHERE t.id IS NULL;"],
   jelas:"Ada 7 pengguna (id 8, 11, 12, 13, 14, 15, 16). Pola 'LEFT JOIN … WHERE kanan IS NULL' adalah cara standar mencari yang belum aktif, belum bayar, atau belum dikirim. Cara lain: WHERE p.id NOT IN (SELECT pengguna_id FROM transaksi)."},

  {id:"aovSumber", jalur:"da", tingkat:2, kategori:"JOIN", tabel:["tbPengguna","tbTransaksi"], urut:true,
   judul:"Nilai belanja rata-rata per sumber akuisisi",
   cerita:`<p>Anggaran iklan kuartal depan sedang diperdebatkan.</p>
<blockquote><b>Bu Sari:</b> "Pengguna dari iklan itu mahal didapat. Apakah mereka belanja lebih besar daripada pengguna organik dan referral?"</blockquote>
<blockquote><b>Kak Nadia:</b> "Hitung AOV, average order value. Hanya transaksi selesai, dan sumbernya ada di tabel pengguna."</blockquote>`,
   soal:"Untuk transaksi <code>selesai</code>, tampilkan <b>sumber</b> pengguna, <b>jumlah transaksi</b>, dan <b>rata-rata nilai</b> (dibulatkan tanpa desimal), urut dari rata-rata terbesar.",
   jawab:"SELECT p.sumber, COUNT(*) AS jumlah_trx, ROUND(AVG(t.nilai)) AS aov\nFROM transaksi t\nJOIN pengguna p ON p.id = t.pengguna_id\nWHERE t.status = 'selesai'\nGROUP BY p.sumber\nORDER BY aov DESC;",
   petunjuk:["Kolom sumber ada di pengguna, nilai ada di transaksi, jadi JOIN lewat pengguna_id = id.",
     "AOV = AVG(nilai). ROUND(x) tanpa angka kedua membulatkan ke bilangan bulat.",
     "Kerangka: SELECT p.sumber, COUNT(*), ROUND(AVG(t.nilai)) AS aov FROM transaksi t JOIN pengguna p ON … WHERE … GROUP BY p.sumber ORDER BY aov DESC;"],
   jelas:"Iklan ±Rp457.571 (7 transaksi), referral ±Rp387.727 (11), organik Rp206.000 (10). Jangan langsung menyimpulkan 'iklan lebih bagus': sampelnya kecil dan satu transaksi elektronik bisa mengubah rata-rata. Analis yang baik menyebut ukuran sampel dan melihat median."},

  {id:"pembeliUlang", jalur:"da", tingkat:2, kategori:"Agregasi", tabel:["tbPengguna","tbTransaksi"], urut:true,
   judul:"Pembeli setia (≥ 3 transaksi)",
   cerita:`<p>Pasarku menyiapkan program loyalitas.</p>
<blockquote><b>Pak Hadi:</b> "Siapa saja pelanggan yang sudah belanja minimal 3 kali sampai selesai? Mereka kandidat member Gold."</blockquote>`,
   soal:"Tampilkan <b>nama</b> pengguna dan <b>jumlah transaksi selesai</b>-nya, hanya yang jumlahnya <b>minimal 3</b>, urut dari terbanyak.",
   jawab:"SELECT p.nama, COUNT(*) AS jumlah\nFROM transaksi t\nJOIN pengguna p ON p.id = t.pengguna_id\nWHERE t.status = 'selesai'\nGROUP BY p.id, p.nama\nHAVING COUNT(*) >= 3\nORDER BY jumlah DESC;",
   petunjuk:["Syarat 'minimal 3' berlaku untuk hasil hitungan per orang, bukan per baris.",
     "Syarat atas hasil agregat ditulis di HAVING, setelah GROUP BY.",
     "Kerangka: … WHERE t.status = 'selesai' GROUP BY p.id, p.nama HAVING COUNT(*) >= 3 ORDER BY jumlah DESC;"],
   jelas:"Lima orang: Dewi (8), Rina (5), Siti (4), Budi (3), Maya (3). Kelompokkan juga per id, bukan hanya nama, karena dua pelanggan bisa bernama sama."},

  {id:"momGmv", jalur:"da", tingkat:3, kategori:"Window Function", tabel:["tbTransaksi"], urut:true,
   judul:"Pertumbuhan GMV bulan ke bulan",
   cerita:`<p>Menjelang rapat evaluasi kuartal pertama:</p>
<blockquote><b>Pak Hadi:</b> "GMV kita naik atau turun tiap bulan? Saya mau lihat persentase pertumbuhannya, bukan hanya angkanya."</blockquote>
<blockquote><b>Kak Nadia:</b> "Pakai <code>LAG()</code> untuk mengambil GMV bulan sebelumnya di baris yang sama."</blockquote>`,
   soal:"Untuk transaksi <code>selesai</code>, tampilkan <b>bulan</b> (format YYYY-MM), <b>GMV</b>, dan <b>pertumbuhan %</b> dibanding bulan sebelumnya (1 desimal). Urut berdasarkan bulan.",
   jawab:"WITH b AS (\n  SELECT strftime('%Y-%m', tanggal) AS bulan, SUM(nilai) AS gmv\n  FROM transaksi\n  WHERE status = 'selesai'\n  GROUP BY bulan\n)\nSELECT bulan, gmv,\n       ROUND((gmv - LAG(gmv) OVER (ORDER BY bulan)) * 100.0 / LAG(gmv) OVER (ORDER BY bulan), 1) AS tumbuh_persen\nFROM b\nORDER BY bulan;",
   petunjuk:["Langkah 1: hitung GMV per bulan. strftime('%Y-%m', tanggal) mengambil tahun-bulan.",
     "Langkah 2: LAG(gmv) OVER (ORDER BY bulan) memberi GMV bulan sebelumnya. Pertumbuhan = (sekarang − lalu) × 100.0 ÷ lalu.",
     "Kerangka: WITH b AS (SELECT strftime(…) AS bulan, SUM(nilai) AS gmv … GROUP BY bulan) SELECT bulan, gmv, ROUND((gmv - LAG(gmv) OVER (ORDER BY bulan)) * 100.0 / LAG(gmv) OVER (ORDER BY bulan), 1) FROM b ORDER BY bulan;"],
   jelas:"Januari Rp4.844.000, Februari Rp1.953.000 (−59,7%), Maret Rp2.731.000 (+39,8%). Bulan pertama bernilai NULL karena tidak punya pembanding. Perhatikan: Januari besar karena dua transaksi elektronik. Sebelum panik soal −59,7%, cek apakah penurunannya terjadi merata atau hanya karena satu-dua transaksi besar."},

  {id:"topKategoriKota", jalur:"da", tingkat:3, kategori:"Window Function", tabel:["tbPengguna","tbTransaksi"], urut:true,
   judul:"Kategori terlaris di tiap kota",
   cerita:`<p>Tim gudang regional menentukan stok prioritas.</p>
<blockquote><b>Pak Hadi:</b> "Untuk tiap kota, kategori apa yang GMV-nya paling besar? Satu kategori saja per kota."</blockquote>
<blockquote><b>Kak Nadia:</b> "Ini soal klasik 'top-N per kelompok'. Jawabannya <code>ROW_NUMBER() OVER (PARTITION BY …)</code>."</blockquote>`,
   soal:"Untuk transaksi <code>selesai</code>, tampilkan <b>kota</b> pengguna, <b>kategori</b> dengan GMV terbesar di kota itu, dan <b>GMV</b>-nya. Urut dari GMV terbesar.",
   jawab:"WITH k AS (\n  SELECT p.kota, t.kategori, SUM(t.nilai) AS gmv\n  FROM transaksi t\n  JOIN pengguna p ON p.id = t.pengguna_id\n  WHERE t.status = 'selesai'\n  GROUP BY p.kota, t.kategori\n), r AS (\n  SELECT kota, kategori, gmv,\n         ROW_NUMBER() OVER (PARTITION BY kota ORDER BY gmv DESC) AS nomor\n  FROM k\n)\nSELECT kota, kategori, gmv\nFROM r\nWHERE nomor = 1\nORDER BY gmv DESC;",
   petunjuk:["Langkah 1: GMV per (kota, kategori) dengan JOIN dan GROUP BY dua kolom.",
     "Langkah 2: beri nomor urut di dalam setiap kota: ROW_NUMBER() OVER (PARTITION BY kota ORDER BY gmv DESC).",
     "Langkah 3: ambil hanya nomor = 1. Nomor tidak bisa disaring di query yang sama, jadi bungkus dengan CTE."],
   jelas:"Jakarta, Makassar, dan Bandung dipimpin Elektronik; Surabaya dan Medan dipimpin Fashion. Window function tidak bisa dipakai di WHERE pada SELECT yang sama, karena itu perlu CTE atau subquery."},

  {id:"kohort", jalur:"da", tingkat:3, kategori:"Kohort & Retensi", tabel:["tbTransaksi"], urut:true,
   judul:"Retensi kohort pembeli",
   cerita:`<p>Investor bertanya apakah pembeli Pasarku kembali lagi atau hanya sekali datang karena promo.</p>
<blockquote><b>Pak Hadi:</b> "Kelompokkan pembeli berdasarkan bulan pertama mereka belanja. Dari tiap kelompok, berapa persen yang belanja lagi di bulan berikutnya atau setelahnya?"</blockquote>
<blockquote><b>Kak Nadia:</b> "Ini analisis kohort. Langkahnya: cari bulan pertama tiap pembeli, lalu cek apakah ada transaksi di bulan yang lebih akhir."</blockquote>`,
   soal:"Hanya transaksi <code>selesai</code>. Tampilkan <b>kohort</b> (bulan pertama belanja, YYYY-MM), <b>jumlah pembeli</b>, <b>jumlah yang kembali</b> di bulan setelahnya, dan <b>retensi %</b> (1 desimal). Urut per kohort.",
   jawab:"WITH pertama AS (\n  SELECT pengguna_id, MIN(strftime('%Y-%m', tanggal)) AS kohort\n  FROM transaksi\n  WHERE status = 'selesai'\n  GROUP BY pengguna_id\n), ulang AS (\n  SELECT DISTINCT p.pengguna_id\n  FROM pertama p\n  JOIN transaksi t ON t.pengguna_id = p.pengguna_id\n   AND t.status = 'selesai'\n   AND strftime('%Y-%m', t.tanggal) > p.kohort\n)\nSELECT p.kohort, COUNT(*) AS pengguna, COUNT(u.pengguna_id) AS kembali,\n       ROUND(COUNT(u.pengguna_id) * 100.0 / COUNT(*), 1) AS retensi_persen\nFROM pertama p\nLEFT JOIN ulang u ON u.pengguna_id = p.pengguna_id\nGROUP BY p.kohort\nORDER BY p.kohort;",
   petunjuk:["CTE pertama: MIN(strftime('%Y-%m', tanggal)) per pengguna = bulan kohortnya.",
     "CTE kedua: pembeli yang punya transaksi selesai dengan bulan > kohortnya (pakai DISTINCT supaya tidak dobel).",
     "Gabungkan dengan LEFT JOIN. COUNT(u.pengguna_id) hanya menghitung yang tidak NULL, yaitu yang kembali."],
   jelas:"Kohort Januari: 4 pembeli, 3 kembali (75%). Kohort Februari: 4 pembeli, 3 kembali (75%). Kohort Maret belum muncul karena tidak ada pembeli baru di Maret. Kohort membuat kita membandingkan kelompok yang 'seumur', sehingga tidak tertipu oleh pertumbuhan pengguna baru."},

  {id:"rfm", jalur:"da", tingkat:3, kategori:"Segmentasi", tabel:["tbTransaksi"], urut:true,
   judul:"Bahan segmentasi RFM",
   cerita:`<p>Tim CRM ingin membagi pelanggan menjadi segmen.</p>
<blockquote><b>Bu Sari:</b> "Saya pernah dengar RFM: Recency, Frequency, Monetary. Bisa siapkan datanya? Anggap hari ini 31 Maret 2026. Tampilkan dulu 5 pelanggan dengan belanja terbesar."</blockquote>`,
   soal:"Untuk transaksi <code>selesai</code>, per <b>pengguna_id</b> tampilkan <b>recency_hari</b> (hari dari transaksi terakhir sampai 2026-03-31, bilangan bulat), <b>frequency</b> (jumlah transaksi), dan <b>monetary</b> (total nilai). Tampilkan 5 teratas berdasarkan monetary.",
   jawab:"SELECT pengguna_id,\n       CAST(julianday('2026-03-31') - julianday(MAX(tanggal)) AS INTEGER) AS recency_hari,\n       COUNT(*) AS frequency,\n       SUM(nilai) AS monetary\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY pengguna_id\nORDER BY monetary DESC\nLIMIT 5;",
   petunjuk:["Recency butuh tanggal transaksi TERAKHIR, yaitu MAX(tanggal).",
     "Di SQLite, selisih hari = julianday(a) − julianday(b). Ubah ke bilangan bulat dengan CAST(… AS INTEGER).",
     "Kerangka: SELECT pengguna_id, CAST(julianday('2026-03-31') - julianday(MAX(tanggal)) AS INTEGER), COUNT(*), SUM(nilai) … GROUP BY pengguna_id ORDER BY … DESC LIMIT 5;"],
   jelas:"Pengguna 3 belanja terbesar (Rp2.295.000, 8 kali) tetapi sudah 46 hari tidak belanja. Ini 'pelanggan bernilai yang mulai menjauh', target win-back yang ideal. Pengguna 5 baru belanja 4 hari lalu. Di PostgreSQL/BigQuery, fungsi tanggalnya berbeda (misal DATE_DIFF), tetapi logikanya sama."},

  {id:"voucher", jalur:"da", tingkat:2, kategori:"Agregasi", tabel:["tbTransaksi"],
   judul:"Apakah voucher menaikkan belanja?",
   cerita:`<p>Tim promo ingin membuktikan voucher bekerja.</p>
<blockquote><b>Mas Bayu:</b> "Bandingkan rata-rata nilai transaksi yang pakai voucher dan yang tidak. Kalau yang pakai voucher lebih tinggi, berarti voucher bikin orang belanja lebih banyak, kan?"</blockquote>
<blockquote><b>Kak Nadia:</b> "Hitung dulu. Setelah itu kita bahas apakah kesimpulan itu boleh ditarik."</blockquote>`,
   soal:"Untuk transaksi <code>selesai</code>, per nilai <b>voucher</b> (0/1), tampilkan <b>jumlah transaksi</b> dan <b>rata-rata nilai</b> (dibulatkan tanpa desimal).",
   jawab:"SELECT voucher, COUNT(*) AS jumlah, ROUND(AVG(nilai)) AS aov\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY voucher;",
   petunjuk:["Kelompokkan per kolom voucher.",
     "Hitung COUNT(*) dan ROUND(AVG(nilai)).",
     "Kerangka: SELECT voucher, COUNT(*), ROUND(AVG(nilai)) FROM transaksi WHERE status = 'selesai' GROUP BY voucher;"],
   jelas:"Tanpa voucher ±Rp373.389 (18 transaksi), dengan voucher ±Rp280.700 (10). Hasilnya justru terbalik dari dugaan. Tetapi ini tetap bukan bukti sebab-akibat: siapa yang memakai voucher tidak acak (bisa jadi voucher lebih sering dipakai untuk barang murah). Untuk tahu efek voucher yang sebenarnya, perlu A/B test."},

  {id:"churnPaket", jalur:"ds", tingkat:1, kategori:"EDA", tabel:["tbLangganan"], urut:true,
   judul:"Churn per paket",
   cerita:`<p>Kamu baru bergabung di tim data science TelkoNesia, operator seluler. Hari pertama:</p>
<blockquote><b>Pak Arief (Lead Data Scientist):</b> "Sebelum membangun model churn, kenali datanya. Paket mana yang pelanggannya paling banyak berhenti?"</blockquote>`,
   soal:"Per <b>paket</b>, tampilkan <b>jumlah pelanggan</b>, <b>jumlah yang churn</b>, dan <b>churn %</b> (1 desimal), urut dari churn % tertinggi.",
   jawab:"SELECT paket, COUNT(*) AS pelanggan, SUM(churn) AS berhenti,\n       ROUND(AVG(churn) * 100, 1) AS churn_persen\nFROM langganan\nGROUP BY paket\nORDER BY churn_persen DESC;",
   petunjuk:["Kolom churn berisi 1 (berhenti) atau 0 (bertahan).",
     "SUM(churn) = jumlah yang berhenti, AVG(churn) = proporsi yang berhenti.",
     "Kerangka: SELECT paket, COUNT(*), SUM(churn), ROUND(AVG(churn) * 100, 1) AS churn_persen FROM langganan GROUP BY paket ORDER BY churn_persen DESC;"],
   jelas:"Reguler 57,1% (4/7), Hemat 42,9% (3/7), Super 40,0% (4/10). Dengan hanya 7–10 pelanggan per paket, selisihnya bisa saja kebetulan. EDA memberi petunjuk, bukan kesimpulan."},

  {id:"churnKeluhan", jalur:"ds", tingkat:2, kategori:"EDA", tabel:["tbLangganan"], urut:true,
   judul:"Keluhan vs churn",
   cerita:`<blockquote><b>Pak Arief:</b> "Tim customer service yakin pelanggan yang sering mengeluh lebih mungkin berhenti. Buktikan dengan data. Kelompokkan jadi 0 keluhan, 1 keluhan, dan 2 keluhan atau lebih."</blockquote>`,
   soal:"Buat kolom <b>kelompok</b> ('0 keluhan', '1 keluhan', '2+ keluhan'), lalu tampilkan <b>jumlah pelanggan</b> dan <b>churn %</b> (1 desimal) per kelompok, urut berdasarkan kelompok.",
   jawab:"SELECT CASE WHEN keluhan = 0 THEN '0 keluhan'\n            WHEN keluhan = 1 THEN '1 keluhan'\n            ELSE '2+ keluhan' END AS kelompok,\n       COUNT(*) AS pelanggan,\n       ROUND(AVG(churn) * 100, 1) AS churn_persen\nFROM langganan\nGROUP BY kelompok\nORDER BY kelompok;",
   petunjuk:["Buat kelompok dengan CASE WHEN … THEN '…' … ELSE '…' END AS kelompok.",
     "SQLite mengizinkan GROUP BY memakai alias kolom (kelompok).",
     "Kerangka: SELECT CASE WHEN keluhan = 0 THEN '0 keluhan' WHEN keluhan = 1 THEN '1 keluhan' ELSE '2+ keluhan' END AS kelompok, COUNT(*), ROUND(AVG(churn) * 100, 1) FROM langganan GROUP BY kelompok ORDER BY kelompok;"],
   jelas:"0 keluhan 16,7%, 1 keluhan 60,0%, 2+ keluhan 85,7%. Polanya naik tajam, jadi jumlah keluhan kandidat fitur yang kuat. Catatan: ini hubungan (korelasi). Keluhan bisa jadi gejala, bukan penyebab."},

  {id:"konfusi", jalur:"ds", tingkat:2, kategori:"Evaluasi Model", tabel:["tbLangganan"],
   judul:"Confusion matrix di ambang 0,4",
   cerita:`<p>Model churn sudah memberi kolom <code>skor</code> (peluang berhenti 0–1).</p>
<blockquote><b>Pak Arief:</b> "Tim retensi hanya punya anggaran untuk menelepon pelanggan dengan skor ≥ 0,4. Berapa yang tertebak benar dan berapa yang meleset? Hitung TP, FP, FN, TN."</blockquote>`,
   soal:"Dengan ambang <b>skor ≥ 0,4</b> sebagai prediksi churn, hitung <b>tp</b>, <b>fp</b>, <b>fn</b>, dan <b>tn</b> dalam satu baris.",
   jawab:"SELECT\n  SUM(CASE WHEN skor >= 0.4 AND churn = 1 THEN 1 ELSE 0 END) AS tp,\n  SUM(CASE WHEN skor >= 0.4 AND churn = 0 THEN 1 ELSE 0 END) AS fp,\n  SUM(CASE WHEN skor < 0.4 AND churn = 1 THEN 1 ELSE 0 END) AS fn,\n  SUM(CASE WHEN skor < 0.4 AND churn = 0 THEN 1 ELSE 0 END) AS tn\nFROM langganan;",
   petunjuk:["TP = diprediksi churn DAN benar churn. FP = diprediksi churn padahal bertahan. FN = tidak diprediksi padahal churn.",
     "Hitung tiap kotak dengan SUM(CASE WHEN … THEN 1 ELSE 0 END).",
     "Kerangka: SELECT SUM(CASE WHEN skor >= 0.4 AND churn = 1 THEN 1 ELSE 0 END) AS tp, … (empat kolom) FROM langganan;"],
   jelas:"TP 6, FP 1, FN 5, TN 12. Presisi = 6/7 ≈ 0,86 (telepon jarang sia-sia), tetapi recall = 6/11 ≈ 0,55 (hampir separuh yang akan berhenti tidak ditelepon). Pilihan ambang adalah keputusan bisnis: biaya telepon dibanding nilai pelanggan yang hilang."},

  {id:"presisiRecall", jalur:"ds", tingkat:3, kategori:"Evaluasi Model", tabel:["tbLangganan"],
   judul:"Presisi & recall di ambang 0,3",
   cerita:`<blockquote><b>Bu Lina (Head of Retention):</b> "Anggaran kami naik. Kalau ambangnya diturunkan ke 0,3, berapa presisi dan recall-nya?"</blockquote>`,
   soal:"Dengan ambang <b>skor ≥ 0,3</b>, hitung <b>presisi</b> dan <b>recall</b>, masing-masing dibulatkan 3 desimal.",
   jawab:"WITH m AS (\n  SELECT SUM(CASE WHEN skor >= 0.3 AND churn = 1 THEN 1 ELSE 0 END) AS tp,\n         SUM(CASE WHEN skor >= 0.3 THEN 1 ELSE 0 END) AS prediksi_positif,\n         SUM(churn) AS positif_asli\n  FROM langganan\n)\nSELECT ROUND(tp * 1.0 / prediksi_positif, 3) AS presisi,\n       ROUND(tp * 1.0 / positif_asli, 3) AS recall\nFROM m;",
   petunjuk:["Presisi = TP ÷ semua yang DIPREDIKSI churn. Recall = TP ÷ semua yang BENAR-BENAR churn.",
     "Kalikan dengan 1.0 sebelum membagi, supaya tidak terjadi pembagian bilangan bulat (hasil 0).",
     "Kerangka: WITH m AS (SELECT SUM(…) AS tp, SUM(CASE WHEN skor >= 0.3 THEN 1 ELSE 0 END) AS prediksi_positif, SUM(churn) AS positif_asli FROM langganan) SELECT ROUND(tp * 1.0 / prediksi_positif, 3), ROUND(tp * 1.0 / positif_asli, 3) FROM m;"],
   jelas:"Presisi 0,889 (8/9) dan recall 0,727 (8/11). Di data kecil ini, menurunkan ambang menaikkan recall tanpa banyak mengorbankan presisi. Di data nyata biasanya ada tarik-ulur: recall naik, presisi turun."},

  {id:"labelChurn", jalur:"ds", tingkat:3, kategori:"Feature Engineering", tabel:["tbTransaksi"], urut:true,
   judul:"Membuat label churn Pasarku",
   cerita:`<p>Pasarku ingin model yang memprediksi pembeli yang akan menghilang.</p>
<blockquote><b>Kak Nadia:</b> "Definisikan dulu labelnya. Ambil pembeli yang bertransaksi di Januari–Februari. Kalau di Maret tidak bertransaksi sama sekali, label churn = 1. Sertakan juga fitur jumlah transaksinya di Januari–Februari."</blockquote>`,
   soal:"Untuk tiap <b>pengguna_id</b> yang punya transaksi sebelum 2026-03-01 (semua status), tampilkan <b>trx_jan_feb</b> (jumlah transaksinya sebelum Maret) dan <b>churn</b> (1 jika tidak punya transaksi mulai 2026-03-01, selain itu 0). Urut per pengguna_id.",
   jawab:"SELECT pengguna_id,\n       COUNT(*) AS trx_jan_feb,\n       CASE WHEN pengguna_id IN (SELECT pengguna_id FROM transaksi WHERE tanggal >= '2026-03-01')\n            THEN 0 ELSE 1 END AS churn\nFROM transaksi\nWHERE tanggal < '2026-03-01'\nGROUP BY pengguna_id\nORDER BY pengguna_id;",
   petunjuk:["Fitur dihitung hanya dari periode SEBELUM Maret, label dari periode Maret. Jangan dicampur.",
     "Label bisa dibuat dengan CASE WHEN pengguna_id IN (subquery transaksi Maret) THEN 0 ELSE 1 END.",
     "Kerangka: SELECT pengguna_id, COUNT(*), CASE WHEN pengguna_id IN (SELECT … WHERE tanggal >= '2026-03-01') THEN 0 ELSE 1 END FROM transaksi WHERE tanggal < '2026-03-01' GROUP BY pengguna_id ORDER BY pengguna_id;"],
   jelas:"Sembilan pembeli; empat berlabel churn (id 3, 4, 6, 10). Inilah cara mencegah kebocoran data (leakage): fitur hanya boleh memakai informasi yang tersedia SEBELUM saat prediksi. Kalau transaksi Maret ikut dihitung sebagai fitur, model akan tampak sangat akurat di latihan tetapi gagal di dunia nyata."},

  {id:"splitWaktu", jalur:"ds", tingkat:2, kategori:"Validasi Model", tabel:["tbTransaksi"], urut:true,
   judul:"Membagi data latih dan uji berdasarkan waktu",
   cerita:`<blockquote><b>Pak Arief:</b> "Untuk data transaksi, jangan bagi train-test secara acak. Model akan dipakai untuk masa depan, jadi ujilah di masa depan. Pakai Januari–Februari untuk latih dan Maret untuk uji. Cek jumlah baris dan rentang tanggal tiap bagian."</blockquote>`,
   soal:"Buat kolom <b>bagian</b> ('latih' jika tanggal sebelum 2026-03-01, selain itu 'uji'), lalu tampilkan <b>jumlah baris</b>, <b>tanggal paling awal</b>, dan <b>tanggal paling akhir</b> per bagian. Urut berdasarkan bagian.",
   jawab:"SELECT CASE WHEN tanggal < '2026-03-01' THEN 'latih' ELSE 'uji' END AS bagian,\n       COUNT(*) AS baris, MIN(tanggal) AS mulai, MAX(tanggal) AS akhir\nFROM transaksi\nGROUP BY bagian\nORDER BY bagian;",
   petunjuk:["Buat kolom bagian dengan CASE WHEN tanggal < '2026-03-01' THEN 'latih' ELSE 'uji' END.",
     "MIN dan MAX juga bekerja pada tanggal berformat ISO.",
     "Kerangka: SELECT CASE … END AS bagian, COUNT(*), MIN(tanggal), MAX(tanggal) FROM transaksi GROUP BY bagian ORDER BY bagian;"],
   jelas:"Latih 23 baris (5 Januari–23 Februari), uji 13 baris (3–27 Maret). Pembagian berdasarkan waktu meniru kondisi nyata: model dilatih dengan masa lalu lalu diuji pada periode yang belum pernah dilihatnya. Pembagian acak pada data deret waktu membuat model 'mengintip masa depan'."},
  // ---------- Kasus SOC (Jalur Cyber Security): tabel log_login dan log_web ----------
  {id:"gagalPerIp", jalur:"cyber", tingkat:1, kategori:"Analisis Log", tabel:["tbLogin"], urut:true,
   judul:"IP dengan login gagal terbanyak",
   cerita:`<p>Shift malam SOC Pasarku. Dasbor menunjukkan lonjakan login gagal di panel admin sejak dini hari.</p>
<blockquote><b>Mas Fajar (SOC Lead):</b> "Sebelum menebak-nebak, lihat datanya. IP mana yang paling banyak gagal login? Itu titik awal investigasi kita."</blockquote>`,
   soal:"Dari tabel <code>log_login</code>, tampilkan <b>ip</b> dan <b>jumlah login gagal</b>-nya untuk setiap IP yang pernah gagal, urut dari yang <b>terbanyak</b>.",
   jawab:"SELECT ip, COUNT(*) AS gagal\nFROM log_login\nWHERE status = 'gagal'\nGROUP BY ip\nORDER BY gagal DESC;",
   petunjuk:["Saring dulu baris yang status-nya 'gagal'.",
     "Kelompokkan per ip dengan GROUP BY, lalu hitung dengan COUNT(*).",
     "Kerangka: SELECT ip, COUNT(*) AS gagal FROM log_login WHERE status = 'gagal' GROUP BY ip ORDER BY gagal DESC;"],
   jelas:"203.0.113.66 gagal 8 kali, 192.0.2.45 6 kali, 198.51.100.91 5 kali, sedangkan dua IP internal (10.0.4.18 dan 10.0.4.35) hanya gagal 2 dan 1 kali karena salah ketik biasa. Tiga IP luar itulah yang diselidiki lebih dulu. Ini versi SQL dari perintah grep … | sort | uniq -c | sort -rn di Linux."},

  {id:"loginLuar", jalur:"cyber", tingkat:1, kategori:"Analisis Log", tabel:["tbLogin"],
   judul:"Login berhasil dari luar negeri",
   cerita:`<blockquote><b>Bu Laras (CISO):</b> "Semua karyawan kita bekerja dari Indonesia. Kalau ada login yang BERHASIL dari negara lain, saya mau tahu sekarang."</blockquote>`,
   soal:"Tampilkan <b>waktu</b>, <b>pengguna</b>, <b>ip</b>, dan <b>negara</b> untuk semua login yang <b>berhasil</b> dari negara selain <code>ID</code>.",
   jawab:"SELECT waktu, pengguna, ip, negara\nFROM log_login\nWHERE status = 'berhasil' AND negara <> 'ID';",
   petunjuk:["Ada dua syarat yang harus benar bersamaan: status berhasil DAN negara bukan ID.",
     "Operator 'tidak sama dengan' di SQL ditulis <> (atau !=).",
     "Kerangka: SELECT waktu, pengguna, ip, negara FROM log_login WHERE status = 'berhasil' AND negara <> 'ID';"],
   jelas:"Ada 2 baris. Akun dewi berhasil login dari Singapura (SG) pukul 09.22, padahal 21 menit sebelumnya ia login dari kantor (10.0.4.40): mustahil berpindah secepat itu (impossible travel), jadi kemungkinan kata sandinya bocor atau ia memakai VPN pribadi; konfirmasi langsung ke orangnya. Akun admin berhasil login dari Jerman (DE) pukul 02.14, tepat setelah rentetan login gagal. Keduanya perlu tiket insiden."},

  {id:"bruteForce", jalur:"cyber", tingkat:2, kategori:"Deteksi Serangan", tabel:["tbLogin"],
   judul:"Mendeteksi brute force per akun",
   cerita:`<blockquote><b>Mas Fajar:</b> "Aturan deteksi kita: satu IP gagal login ke akun yang SAMA lima kali atau lebih berarti brute force. Hitung per pasangan IP dan akun, jangan dicampur."</blockquote>`,
   soal:"Tampilkan <b>ip</b>, <b>pengguna</b>, dan <b>jumlah login gagal</b> untuk setiap pasangan ip–pengguna yang gagal <b>minimal 5 kali</b>.",
   jawab:"SELECT ip, pengguna, COUNT(*) AS gagal\nFROM log_login\nWHERE status = 'gagal'\nGROUP BY ip, pengguna\nHAVING COUNT(*) >= 5;",
   petunjuk:["Kelompokkan dengan dua kolom sekaligus: GROUP BY ip, pengguna.",
     "Syarat pada hasil agregasi memakai HAVING, bukan WHERE.",
     "Kerangka: SELECT ip, pengguna, COUNT(*) FROM log_login WHERE status = 'gagal' GROUP BY ip, pengguna HAVING COUNT(*) >= 5;"],
   jelas:"Dua pasangan: 203.0.113.66 → admin (8 kali) dan 198.51.100.91 → budi (5 kali). IP 192.0.2.45 tidak muncul walau gagal 6 kali, karena ia mencoba 6 akun berbeda masing-masing sekali; itu pola lain (password spraying) yang butuh aturan berbeda. Itulah sebabnya aturan deteksi harus dirancang untuk beberapa pola."},

  {id:"spraying", jalur:"cyber", tingkat:2, kategori:"Deteksi Serangan", tabel:["tbLogin"],
   judul:"Mendeteksi password spraying",
   cerita:`<blockquote><b>Bu Laras:</b> "Penyerang pintar tidak menebak satu akun berkali-kali karena akun bisa terkunci. Mereka mencoba satu password ke banyak akun. Cari IP yang gagal login ke banyak akun BERBEDA."</blockquote>`,
   soal:"Tampilkan <b>ip</b> dan <b>jumlah akun berbeda</b> yang gagal dicobanya, hanya untuk IP yang gagal pada <b>minimal 4 akun berbeda</b>.",
   jawab:"SELECT ip, COUNT(DISTINCT pengguna) AS akun_dicoba\nFROM log_login\nWHERE status = 'gagal'\nGROUP BY ip\nHAVING COUNT(DISTINCT pengguna) >= 4;",
   petunjuk:["Yang dihitung adalah akun yang BERBEDA, bukan jumlah baris.",
     "COUNT(DISTINCT kolom) menghitung nilai unik.",
     "Kerangka: SELECT ip, COUNT(DISTINCT pengguna) FROM log_login WHERE status = 'gagal' GROUP BY ip HAVING COUNT(DISTINCT pengguna) >= 4;"],
   jelas:"Hanya 192.0.2.45: mencoba 6 akun (rina, budi, sari, dewi, admin, joko) dalam 6 menit, masing-masing sekali. Penguncian per akun tidak akan pernah aktif karena tiap akun hanya gagal sekali; karena itu spraying harus dideteksi lintas akun seperti query ini. Pertahanan utamanya: tolak password umum dan wajibkan MFA."},

  {id:"scan404", jalur:"cyber", tingkat:2, kategori:"Analisis Log Web", tabel:["tbWeb"],
   judul:"Pemindaian direktori di log web",
   cerita:`<blockquote><b>Mas Fajar:</b> "Kalau satu IP mencari banyak halaman yang tidak ada (.env, backup.zip, phpmyadmin), dia sedang memindai celah. Server menjawab 404 untuk semua itu."</blockquote>`,
   soal:"Dari tabel <code>log_web</code>, tampilkan <b>ip</b> dan <b>jumlah respons 404</b>-nya, hanya untuk IP yang menerima <b>minimal 5</b> respons 404.",
   jawab:"SELECT ip, COUNT(*) AS jumlah_404\nFROM log_web\nWHERE status = 404\nGROUP BY ip\nHAVING COUNT(*) >= 5;",
   petunjuk:["Kolom status berisi angka, jadi tulis 404 tanpa tanda kutip.",
     "Hitung per ip, lalu saring hasil hitungan dengan HAVING.",
     "Kerangka: SELECT ip, COUNT(*) FROM log_web WHERE status = 404 GROUP BY ip HAVING COUNT(*) >= 5;"],
   jelas:"198.51.100.23 menerima 6 respons 404 dalam 4 detik untuk path khas pemindai: /admin, /.env, /wp-login.php, /backup.zip, /.git/config, dan /phpmyadmin, lalu menemukan /login (200). Satu 404 dari 114.124.3.9 hanyalah pengunjung yang salah buka produk. Tindak lanjut: pastikan file seperti .env dan .git memang tidak bisa diakses, lalu pantau IP itu."},

  {id:"jejakSqli", jalur:"cyber", tingkat:2, kategori:"Analisis Log Web", tabel:["tbWeb"],
   judul:"Jejak SQL injection di log web",
   cerita:`<blockquote><b>Bu Laras:</b> "Tim aplikasi melaporkan error 500 di halaman produk. Saya curiga ada yang mencoba SQL injection. SIEM sudah men-decode path-nya. Cari request yang mengandung tanda kutip tunggal atau kata UNION."</blockquote>`,
   soal:"Tampilkan <b>ip</b>, <b>jumlah percobaan</b>, dan <b>ukuran respons terbesar</b> untuk request yang path-nya mengandung <b>tanda kutip tunggal (')</b> atau kata <b>UNION</b>, dikelompokkan per ip.",
   jawab:"SELECT ip, COUNT(*) AS percobaan, MAX(ukuran) AS respons_terbesar\nFROM log_web\nWHERE path LIKE '%''%' OR path LIKE '%UNION%'\nGROUP BY ip;",
   petunjuk:["LIKE dengan % mencari teks di mana saja dalam kolom.",
     "Tanda kutip tunggal di dalam string SQL ditulis dua kali: '%''%' artinya 'mengandung satu tanda kutip'.",
     "Kerangka: SELECT ip, COUNT(*), MAX(ukuran) FROM log_web WHERE path LIKE '%''%' OR path LIKE '%UNION%' GROUP BY ip;"],
   jelas:"Satu IP, 203.0.113.9, mencoba 3 kali: id=1' (error 500, tanda input masuk ke query), lalu id=1' OR '1'='1 dan UNION SELECT nama, sandi. Respons terbesarnya 98.304 byte, jauh di atas halaman produk normal (±4.300 byte): kemungkinan besar injeksi berhasil mengeluarkan banyak data. Ini sudah insiden: eskalasi, perbaiki query dengan prepared statement, dan periksa data apa yang terbaca. Tanda kutip di dalam string SQL ditulis '' karena pola ini ditulis analis sendiri, bukan berasal dari input pengguna."},

  {id:"berhasilSetelahGagal", jalur:"cyber", tingkat:3, kategori:"Deteksi Serangan", tabel:["tbLogin"],
   judul:"Login berhasil setelah rentetan gagal",
   cerita:`<blockquote><b>Mas Fajar:</b> "Gagal berkali-kali itu mengganggu. Yang berbahaya adalah ketika setelah itu BERHASIL: berarti password-nya tertebak. Buat query yang mencari login berhasil yang didahului minimal lima kali gagal dari IP dan akun yang sama."</blockquote>`,
   soal:"Tampilkan <b>waktu</b>, <b>pengguna</b>, dan <b>ip</b> dari setiap login <b>berhasil</b> yang sebelumnya (waktu lebih awal) didahului <b>minimal 5</b> login gagal dari ip dan pengguna yang sama.",
   jawab:"SELECT b.waktu, b.pengguna, b.ip\nFROM log_login b\nWHERE b.status = 'berhasil'\n  AND (SELECT COUNT(*) FROM log_login g\n       WHERE g.ip = b.ip AND g.pengguna = b.pengguna\n         AND g.status = 'gagal' AND g.waktu < b.waktu) >= 5;",
   petunjuk:["Ambil baris berhasil sebagai b, lalu hitung baris gagal g yang cocok dengannya.",
     "Subquery berkorelasi: di dalamnya pakai g.ip = b.ip, g.pengguna = b.pengguna, dan g.waktu < b.waktu.",
     "Kerangka: SELECT b.waktu, b.pengguna, b.ip FROM log_login b WHERE b.status = 'berhasil' AND (SELECT COUNT(*) FROM log_login g WHERE … ) >= 5;"],
   jelas:"Satu kejadian: admin berhasil login dari 203.0.113.66 pada 2026-03-11 02:14:05 setelah 8 kali gagal dalam 4 menit. Ini pola brute force yang berhasil dan prioritas tertinggi: kunci akun admin, cabut sesinya, blokir IP, lalu periksa semua aktivitas akun itu setelah 02:14. Format waktu ISO (YYYY-MM-DD HH:MM:SS) bisa dibandingkan dengan < karena urutan teksnya sama dengan urutan waktunya."},
];

if (typeof module !== "undefined") module.exports = { TANTANGAN_SQL_KASUS };
