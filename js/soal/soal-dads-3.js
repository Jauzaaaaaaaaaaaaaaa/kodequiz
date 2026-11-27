// ============ JALUR DATA ANALYST & DATA SCIENTIST — tambahan 2x lipat ============
// Dimuat SETELAH soal-latihan-ekstra.js. Soal hitung memakai vjalan (kode Python tersembunyi) yang dijalankan
// alat/cek-soal.js dan hasilnya harus sama dengan opsi kunci. Kunci di indeks 0 (opsi diacak).
(function () {
  const mk = B => (k, lv, q, o, e, kode) => B.push({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}) });
  const nk = B => (k, lv, q, o, vjalan, e) => B.push({ k, t: "mc", lv, q, o, a: 0, vr: "py", vjalan, e });
  const ik = B => (k, lv, q, a, e) => B.push({ k, t: "is", lv, q, a, e });
  const dk = MAT => (k, html) => { const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };
  const RP = "def rp(x): return 'Rp' + format(round(x), ',').replace(',', '.')\n";

  /* =================== DATA ANALYST (+70) =================== */
  let M = mk(SOAL_DA), N = nk(SOAL_DA), I = ik(SOAL_DA), D = dk(MATERI_DA);
  // peran (+6)
  M("peran", 1, "Pertanyaan bisnis yang baik untuk dianalisis:", ["Kenapa repeat order pelanggan baru turun dari 30% ke 22% dalam 3 bulan terakhir?", "Bagaimana data kita?", "Buatkan dashboard semuanya", "Apakah data itu penting?"], "Spesifik, terukur, ada periode, dan terkait keputusan.");
  M("peran", 1, "Tugas utama Data Analyst sehari-hari:", ["Mengubah data menjadi jawaban untuk keputusan bisnis (query, analisis, laporan, rekomendasi)", "Membangun server", "Mendesain logo", "Menjual produk"], "Alatnya SQL, spreadsheet, BI, dan sedikit Python.");
  M("peran", 2, "Stakeholder minta 'data penjualan'. Langkah pertama analis:", ["Bertanya keputusan apa yang ingin dibuat dan periode/rinciannya", "Langsung kirim semua tabel", "Menolak", "Membuat model ML"], "Memperjelas kebutuhan mencegah kerja ulang.");
  M("peran", 2, "Beda Data Analyst dan Data Engineer:", ["Analyst menjawab pertanyaan dari data; engineer membangun pipa dan gudang data agar data siap dipakai", "Sama saja", "Engineer membuat dashboard saja", "Analyst mengelola server"], "Keduanya sering bekerja sama.");
  M("peran", 2, "Kerangka MECE dalam memecah masalah berarti…", ["Bagian-bagian tidak tumpang tindih dan bersama-sama mencakup semuanya", "Masalah diselesaikan cepat", "Memakai model ML", "Membuat 3 grafik"], "Contoh: pendapatan = pelanggan × frekuensi × nilai pesanan.");
  I("peran", 1, "Pihak yang memakai hasil analisis (manajer, tim): stake____", ["holder"], "Stakeholder.");
  // metrik (+6)
  N("metrik", 1, "50.000 sesi, konversi 2%, AOV Rp150.000. Pendapatan:", ["Rp150.000.000", "Rp15.000.000", "Rp1.500.000.000", "Rp7.500.000"], RP + "print(rp(50000 * 2 / 100 * 150000))", "Pendapatan = sesi × konversi × AOV.");
  N("metrik", 2, "1.200 pelanggan, 300 di antaranya belanja ≥ 2 kali. Repeat purchase rate:", ["25%", "4%", "300%", "75%"], "print(f'{300 / 1200 * 100:.0f}%')", "Pelanggan berulang ÷ semua pelanggan.");
  N("metrik", 2, "Kohort Januari 200 pelanggan; di bulan ke-3 masih aktif 50. Retensi bulan ke-3:", ["25%", "50%", "75%", "4%"], "print(f'{50 / 200 * 100:.0f}%')", "Aktif ÷ awal kohort.");
  M("metrik", 2, "Pohon metrik untuk 'pendapatan turun' memecah pendapatan menjadi…", ["Jumlah pembeli × rata-rata nilai pesanan (lalu pembeli = pengunjung × konversi)", "Satu angka saja", "Daftar produk", "Warna grafik"], "Setiap cabang bisa dicek untuk menemukan sumber penurunan.");
  M("metrik", 2, "North Star Metric adalah…", ["Satu metrik utama yang paling mencerminkan nilai yang dirasakan pelanggan", "Metrik keuangan saja", "Jumlah karyawan", "Grafik bintang"], "Contoh aplikasi musik: menit lagu didengar.");
  I("metrik", 2, "Singkatan rata-rata nilai pesanan: ____", ["aov"], "Average Order Value.");
  // bersih (+6)
  M("bersih", 1, "Langkah pertama memeriksa data baru:", ["Profil data: jumlah baris, tipe kolom, nilai kosong, duplikat, rentang nilai", "Langsung membuat grafik", "Menghapus kolom", "Membuat model"], "Kenali data sebelum mengolah.");
  M("bersih", 2, "Kolom tanggal berisi '2026-11-27', '27/11/2026', dan 'Nov 27'. Masalahnya:", ["Format tidak konsisten sehingga harus diseragamkan sebelum dianalisis", "Tidak ada masalah", "Terlalu banyak data", "Tipe angka"], "Seragamkan ke format ISO.");
  M("bersih", 2, "Nilai kosong di kolom diskon sebaiknya…", ["Dipahami dulu artinya (tidak ada diskon = 0, atau data hilang?) baru diisi/dibuang", "Selalu dihapus barisnya", "Selalu diisi rata-rata", "Diabaikan"], "Penanganan missing value tergantung makna bisnisnya.");
  M("bersih", 2, "Transaksi Rp 999.999.999 di data warung kopi kemungkinan…", ["Outlier/kesalahan input yang perlu dicek ke sumber", "Penjualan nyata biasa", "Harus dirata-rata", "Diskon"], "Jangan langsung dihapus; telusuri penyebabnya.");
  M("bersih", 2, "Mendeteksi duplikat transaksi yang benar:", ["Cek kombinasi kunci (id pesanan, atau pelanggan+waktu+nilai), bukan hanya nama", "Cek nama saja", "Hapus semua yang mirip", "Tidak perlu"], "Dua orang bisa punya nama sama.");
  I("bersih", 1, "Data yang hilang/kosong disebut missing ____", ["value", "values"], "Missing value.");
  // sqlbisnis (+6)
  M("sqlbisnis", 1, "Query jumlah pesanan per kota dari tabel pesanan JOIN pelanggan:", ["SELECT p.kota, COUNT(*) FROM pesanan o JOIN pelanggan p ON p.id = o.pelanggan_id GROUP BY p.kota", "SELECT kota FROM pesanan", "SELECT COUNT(kota)", "SELECT * GROUP BY"], "JOIN dulu, kelompokkan, hitung.");
  M("sqlbisnis", 2, "Pelanggan yang belum pernah memesan dicari dengan…", ["LEFT JOIN pesanan lalu WHERE pesanan.id IS NULL", "INNER JOIN", "COUNT(*) = 1", "ORDER BY"], "Pola anti-join.");
  M("sqlbisnis", 2, "Menghitung persentase pesanan dengan voucher:", ["SELECT 100.0 * SUM(CASE WHEN voucher IS NOT NULL THEN 1 ELSE 0 END) / COUNT(*) FROM transaksi", "SELECT COUNT(voucher)", "SELECT voucher / COUNT", "SELECT % voucher"], "100.0 mencegah pembagian bulat.");
  M("sqlbisnis", 2, "Pendapatan per bulan dari kolom tanggal di SQLite:", ["GROUP BY strftime('%Y-%m', tanggal)", "GROUP BY tanggal", "GROUP BY MONTH", "ORDER BY bulan"], "MySQL: DATE_FORMAT; PostgreSQL: DATE_TRUNC.");
  M("sqlbisnis", 3, "Jumlah pelanggan aktif per bulan (pernah transaksi di bulan itu):", ["COUNT(DISTINCT pengguna_id) per bulan", "COUNT(*) per bulan", "SUM(nilai)", "MAX(id)"], "DISTINCT mencegah satu pelanggan dihitung berkali-kali.");
  I("sqlbisnis", 1, "Kata kunci menghitung nilai unik: COUNT(____ kolom)", ["distinct"], "COUNT(DISTINCT …).");
  // sqllanjut (+6)
  M("sqllanjut", 2, "Peringkat produk terlaris per kategori:", ["ROW_NUMBER() OVER (PARTITION BY kategori ORDER BY total DESC)", "GROUP BY saja", "ORDER BY kategori", "COUNT(*)"], "Lalu ambil peringkat 1–3 di query luar.");
  M("sqllanjut", 2, "Bulan pertama transaksi setiap pelanggan (awal kohort):", ["MIN(strftime('%Y-%m', tanggal)) GROUP BY pengguna_id", "MAX(tanggal)", "COUNT(tanggal)", "AVG(tanggal)"], "Dasar analisis kohort.");
  M("sqllanjut", 2, "Pertumbuhan bulan ke bulan memakai…", ["LAG(pendapatan) OVER (ORDER BY bulan)", "LEAD saja tanpa urutan", "SUM", "RANK"], "(bulan ini − bulan lalu) ÷ bulan lalu.");
  M("sqllanjut", 2, "CTE (WITH) dipakai untuk…", ["Memecah query panjang menjadi langkah bernama yang mudah dibaca", "Menghapus tabel", "Membuat index", "Mengubah tipe"], "Satu CTE per langkah logika.");
  M("sqllanjut", 3, "Total berjalan pendapatan harian:", ["SUM(pendapatan) OVER (ORDER BY tanggal)", "SUM(pendapatan) GROUP BY tanggal", "CUMSUM()", "RUNNING()"], "Window function tanpa PARTITION = seluruh data.");
  I("sqllanjut", 2, "Fungsi window nilai baris sebelumnya: ____()", ["lag"], "LAG.");
  // banding (+6)
  M("banding", 1, "Toko A 10 komplain dari 100 pesanan, toko B 30 dari 1.000. Yang lebih buruk:", ["Toko A (10% vs 3%)", "Toko B karena 30 lebih banyak", "Sama", "Tidak bisa dibandingkan"], "Bandingkan rasio, bukan angka mentah.");
  N("banding", 2, "Kota X: 120 kasus dari 40.000 warga. Rate per 1.000 warga:", ["3", "0,3", "30", "120"], "print(f'{120 / 40000 * 1000:.0f}')", "Rate menormalkan perbedaan ukuran.");
  M("banding", 2, "Rata-rata waktu kirim 2 hari tapi pelanggan banyak mengeluh. Yang perlu dilihat:", ["Distribusi/persentil (misalnya 10% pesanan > 7 hari)", "Rata-rata lagi", "Jumlah kurir", "Warna aplikasi"], "Rata-rata menyembunyikan ekor distribusi.");
  M("banding", 2, "Simpson's paradox paling mungkin muncul saat…", ["Komposisi kelompok berbeda jauh (misalnya satu cabang didominasi produk mahal)", "Data sedikit", "Data rapi", "Grafik garis"], "Bandingkan per segmen sebelum menggabung.");
  M("banding", 2, "Membandingkan bulan Desember dengan November untuk toko oleh-oleh berisiko karena…", ["Efek musiman (liburan); bandingkan dengan Desember tahun lalu (YoY)", "Desember selalu sama", "Data Desember salah", "Tidak ada risiko"], "Pilih pembanding yang setara.");
  I("banding", 1, "Membandingkan dengan periode sama tahun lalu (singkatan): ____", ["yoy"], "Year over Year.");
  // abtest (+6)
  N("abtest", 2, "Kontrol: 100 dari 5.000 pengguna membeli; varian: 120 dari 5.000. Kenaikan relatif:", ["20%", "0,4%", "2%", "120%"], "a, b = 100 / 5000, 120 / 5000\nprint(f'{(b - a) / a * 100:.0f}%')", "2,0% → 2,4% = naik 0,4 poin atau 20% relatif.");
  M("abtest", 2, "Pengguna dibagi ke A/B secara acak supaya…", ["Faktor lain (perangkat, wilayah, kebiasaan) seimbang di kedua kelompok", "Lebih cepat", "Hasil pasti signifikan", "Hemat server"], "Pengacakan membuat perbedaan bisa diatribusikan ke perlakuan.");
  M("abtest", 2, "Metrik utama A/B test sebaiknya ditentukan…", ["Sebelum tes dimulai, beserta ukuran sampel dan durasi", "Setelah melihat hasil", "Oleh siapa pun", "Tidak perlu"], "Mencegah 'memilih metrik yang kebetulan bagus'.");
  M("abtest", 2, "Guardrail metric dalam A/B test adalah…", ["Metrik yang tidak boleh memburuk (misalnya komplain, waktu muat)", "Metrik utama", "Jumlah pengguna", "Durasi tes"], "Kemenangan konversi tidak berarti bila komplain melonjak.");
  M("abtest", 3, "Hasil tidak signifikan setelah tes cukup lama. Kesimpulan yang tepat:", ["Tidak ada bukti cukup bahwa varian lebih baik; efeknya mungkin kecil atau tidak ada", "Varian pasti lebih buruk", "Ulangi sampai signifikan", "Hapus data"], "Tidak signifikan ≠ terbukti sama.");
  I("abtest", 2, "Kelompok pembanding tanpa perubahan: ____", ["kontrol", "control"], "Kelompok kontrol.");
  // visual (+6)
  M("visual", 1, "Membandingkan pendapatan 8 kategori produk:", ["Bar chart horizontal diurutkan", "Pie 8 irisan", "Line chart", "Scatter"], "Label panjang lebih mudah dibaca horizontal.");
  M("visual", 2, "Grafik dengan dua sumbu Y (dual axis) berisiko…", ["Menyiratkan hubungan palsu karena skala bisa diatur seenaknya", "Selalu jujur", "Tidak bisa dibaca", "Lambat"], "Pertimbangkan dua grafik terpisah.");
  M("visual", 2, "Judul grafik yang paling membantu pembaca:", ["Kalimat kesimpulan: 'Pendapatan Jakarta naik 18% sejak promo ongkir'", "Grafik 1", "Pendapatan", "Data"], "Judul menyampaikan pesan, bukan hanya topik.");
  M("visual", 2, "Menyorot satu garis penting di antara banyak garis:", ["Garis penting berwarna, sisanya abu-abu", "Semua warna berbeda", "Semua tebal", "Hapus garis lain"], "Warna sebagai alat fokus.");
  M("visual", 2, "Menampilkan proporsi yang berubah dari waktu ke waktu:", ["Stacked bar 100% per periode", "Pie per bulan berjejer", "Scatter", "Gauge"], "Mudah membandingkan porsi antarperiode.");
  I("visual", 1, "Grafik batang dalam bahasa Inggris: ____ chart", ["bar"], "Bar chart.");
  // cerita (+6)
  M("cerita", 1, "Struktur memo rekomendasi yang efektif:", ["Kesimpulan/rekomendasi di awal, lalu bukti, lalu risiko dan langkah berikutnya", "Metode di awal", "Kode lengkap", "Daftar tabel"], "Prinsip piramida: jawaban dulu.");
  M("cerita", 2, "Presentasi ke direksi sebaiknya…", ["Fokus pada keputusan, dampak (rupiah/persen), dan pilihan tindakan", "Menjelaskan semua query", "Membaca slide penuh teks", "Tanpa angka"], "Detail teknis disimpan di lampiran.");
  M("cerita", 2, "Kalimat insight yang baik:", ["Pelanggan yang memakai voucher pertama 2× lebih mungkin belanja lagi dalam 30 hari", "Data menunjukkan sesuatu", "Ada perbedaan", "Grafik naik"], "Spesifik, terukur, dan bisa ditindaklanjuti.");
  M("cerita", 2, "Rekomendasi sebaiknya disertai…", ["Perkiraan dampak, biaya/upaya, risiko, dan cara mengukur keberhasilannya", "Hanya opini", "Warna menarik", "Tidak perlu"], "Memudahkan keputusan.");
  M("cerita", 3, "Data tidak cukup untuk kesimpulan kuat. Sikap profesional:", ["Sampaikan temuan sementara, tingkat keyakinan, dan data apa yang dibutuhkan", "Paksakan kesimpulan", "Sembunyikan", "Tunda tanpa kabar"], "Kejujuran membangun kepercayaan.");
  I("cerita", 1, "Prinsip menyampaikan kesimpulan dulu: prinsip ____", ["piramida", "pyramid"], "Pyramid principle.");
  // segmen (+5)
  M("segmen", 1, "R pada RFM diukur dengan…", ["Jumlah hari sejak transaksi terakhir (makin kecil makin baik)", "Total belanja", "Jumlah transaksi", "Umur pelanggan"], "Frequency = berapa kali, Monetary = berapa besar.");
  M("segmen", 2, "Segmen 'Champions' dalam RFM biasanya…", ["Baru belanja, sering, dan nilai besar", "Lama tidak belanja", "Sekali belanja kecil", "Belum pernah belanja"], "Target program loyalitas dan referal.");
  M("segmen", 2, "Skor RFM sering dibuat dengan kuantil karena…", ["Membagi pelanggan rata ke skor 1–5 tanpa menentukan batas manual", "Wajib", "Lebih indah", "Menghapus outlier"], "Batas mengikuti distribusi data.");
  M("segmen", 2, "Setelah segmentasi, langkah paling bernilai:", ["Rancang tindakan berbeda per segmen dan ukur hasilnya", "Membuat grafik lebih banyak", "Menghapus segmen kecil", "Selesai"], "Segmen tanpa tindakan tidak berdampak.");
  I("segmen", 1, "Singkatan Recency-Frequency-Monetary: ____", ["rfm"], "RFM.");
  // musiman (+6)
  N("musiman", 1, "Penjualan 3 bulan: 100, 120, 110 juta. Rata-rata bergerak 3 bulan:", ["110 juta", "120 juta", "330 juta", "100 juta"], "print(f'{(100 + 120 + 110) / 3:.0f} juta')", "Menghaluskan naik-turun jangka pendek.");
  N("musiman", 2, "Penjualan Oktober 80 juta, November 92 juta. Pertumbuhan MoM:", ["15%", "12%", "13%", "92%"], "print(f'{(92 - 80) / 80 * 100:.0f}%')", "(baru − lama) ÷ lama.");
  M("musiman", 2, "Pola penjualan naik setiap Lebaran disebut…", ["Musiman (seasonality)", "Tren", "Outlier", "Noise"], "Tren = arah jangka panjang; musiman = pola berulang.");
  M("musiman", 2, "Proyeksi sederhana untuk bulan depan yang jujur:", ["Rentang (misalnya 95–110 juta) dengan asumsi yang ditulis, bukan satu angka pasti", "Satu angka tanpa asumsi", "Angka bulan lalu dikali 2", "Tidak perlu"], "Ketidakpastian harus terlihat.");
  M("musiman", 2, "Hari kerja berbeda tiap bulan memengaruhi perbandingan penjualan B2B. Solusinya:", ["Bandingkan rata-rata per hari kerja", "Abaikan", "Pakai total saja", "Hapus bulan pendek"], "Normalisasi kalender.");
  I("musiman", 1, "Singkatan pertumbuhan bulan ke bulan: ____", ["mom"], "Month over Month.");
  // kerjada (+5)
  M("kerjada", 1, "Alat yang hampir selalu diminta lowongan Data Analyst di Indonesia:", ["SQL dan spreadsheet (Excel/Google Sheets), lalu BI (Power BI/Looker Studio/Tableau)", "Photoshop", "AutoCAD", "C++"], "Python menjadi nilai tambah yang makin umum.");
  M("kerjada", 2, "Tes teknis Data Analyst yang umum:", ["Soal SQL, studi kasus analisis, dan presentasi insight", "Membangun aplikasi mobile", "Menggambar", "Mengetik cepat saja"], "Latihan Lab SQL KodeQuiz mirip formatnya.");
  M("kerjada", 2, "Domain bisnis (e-commerce, keuangan, ERP) penting bagi analis karena…", ["Membantu memilih metrik yang tepat dan memahami konteks angka", "Tidak penting", "Hanya untuk manajer", "Menggantikan SQL"], "Pengalaman magang ERP bisa menjadi keunggulan.");
  M("kerjada", 2, "Portofolio Data Analyst pemula yang kuat berisi…", ["2–3 proyek dengan pertanyaan bisnis, SQL/Python, dashboard, dan rekomendasi", "Satu sertifikat", "Puluhan tutorial", "Kode tanpa penjelasan"], "Kualitas lebih penting dari jumlah.");
  I("kerjada", 1, "Bahasa query yang wajib dikuasai analis: ____", ["sql"], "SQL.");

  /* =================== DATA SCIENTIST (+78) =================== */
  M = mk(SOAL_DS); N = nk(SOAL_DS); I = ik(SOAL_DS); D = dk(MATERI_DS);
  // peranDs (+6)
  M("peranDs", 1, "Urutan siklus proyek data science (CRISP-DM):", ["Pahami bisnis → pahami data → siapkan data → modelkan → evaluasi → deploy", "Model dulu → data", "Deploy → evaluasi", "Grafik → model"], "Banyak proyek gagal karena melewatkan pemahaman bisnis.");
  M("peranDs", 2, "Kapan masalah TIDAK perlu machine learning?", ["Saat aturan sederhana atau query sudah menjawab dengan cukup baik", "Selalu perlu", "Saat data banyak", "Saat ada GPU"], "Mulai dari baseline sederhana.");
  M("peranDs", 2, "Baseline model adalah…", ["Solusi paling sederhana (misalnya tebak kelas terbanyak) sebagai pembanding", "Model terbaik", "Data mentah", "Grafik"], "Model rumit harus mengalahkan baseline.");
  M("peranDs", 2, "Metrik bisnis vs metrik model:", ["Metrik model (AUC, RMSE) harus diterjemahkan ke dampak bisnis (rupiah hemat, churn turun)", "Sama saja", "Hanya metrik model yang penting", "Hanya bisnis"], "Keduanya perlu dilaporkan.");
  M("peranDs", 2, "Supervised learning berarti…", ["Model belajar dari data berlabel (contoh jawaban sudah ada)", "Tanpa data", "Tanpa label", "Diawasi manusia setiap detik"], "Unsupervised: tanpa label (clustering).");
  I("peranDs", 1, "Model pembanding paling sederhana: base____", ["line"], "Baseline.");
  // prob (+6)
  N("prob", 1, "P(hujan) = 0,3 dan P(macet) = 0,5, saling bebas. P(hujan dan macet):", ["0,15", "0,8", "0,2", "0,65"], "print(f'{0.3 * 0.5:.2f}'.replace('.', ','))", "Kejadian bebas: kalikan peluangnya.");
  N("prob", 2, "Dua dadu adil dilempar. Peluang jumlahnya 7:", ["1/6", "1/12", "7/36", "1/36"], "from fractions import Fraction\nn = sum(1 for a in range(1, 7) for b in range(1, 7) if a + b == 7)\nprint(Fraction(n, 36))", "Ada 6 pasangan dari 36 kemungkinan.");
  N("prob", 2, "Penyakit dialami 1% orang. Tes: sensitivitas 90%, false positive 5%. Peluang benar sakit bila hasil positif:", ["15,4%", "90%", "95%", "1%"], "p = 0.01 * 0.9 / (0.01 * 0.9 + 0.99 * 0.05)\nprint(f'{p * 100:.1f}%'.replace('.', ','))", "Teorema Bayes: karena penyakit langka, kebanyakan hasil positif adalah positif palsu.");
  N("prob", 2, "Promo: 20% peluang untung Rp100.000, 80% peluang rugi Rp10.000. Nilai harapan:", ["Rp12.000", "Rp90.000", "Rp-8.000", "Rp20.000"], RP + "print(rp(0.2 * 100000 - 0.8 * 10000))", "E = Σ peluang × nilai.");
  M("prob", 2, "P(A|B) berarti…", ["Peluang A terjadi bila B sudah diketahui terjadi", "Peluang A dan B", "Peluang A atau B", "P(B|A)"], "P(A|B) umumnya tidak sama dengan P(B|A).");
  I("prob", 2, "Teorema untuk memperbarui peluang dengan bukti baru: teorema ____", ["bayes"], "Bayes.");
  // inferensi (+6)
  N("inferensi", 2, "Simpangan baku 10, ukuran sampel 100. Standard error rata-rata:", ["1", "0,1", "10", "100"], "import math\nprint(f'{10 / math.sqrt(100):g}')", "SE = s ÷ √n.");
  N("inferensi", 2, "Rata-rata sampel 50, SE 1. Interval kepercayaan 95% (≈ ±1,96 SE):", ["48,04 sampai 51,96", "49 sampai 51", "40 sampai 60", "50 sampai 51,96"], "lo, hi = 50 - 1.96, 50 + 1.96\nprint(f'{lo:.2f} sampai {hi:.2f}'.replace('.', ','))", "Rata-rata ± 1,96 × SE.");
  M("inferensi", 2, "Memperbesar ukuran sampel membuat interval kepercayaan…", ["Lebih sempit (lebih presisi)", "Lebih lebar", "Tidak berubah", "Hilang"], "SE turun sebanding 1/√n.");
  M("inferensi", 2, "p-value 0,2 dalam uji hipotesis berarti…", ["Data cukup cocok dengan hipotesis nol; tidak ada bukti kuat untuk menolaknya", "Hipotesis nol pasti benar", "Efeknya 20%", "Hasil signifikan"], "Tidak menolak H0 ≠ membuktikan H0.");
  M("inferensi", 2, "Kesalahan tipe I adalah…", ["Menolak hipotesis nol padahal benar (positif palsu)", "Gagal menolak hipotesis nol yang salah", "Salah hitung", "Data hilang"], "α (misalnya 0,05) adalah batas peluang kesalahan tipe I.");
  I("inferensi", 1, "Singkatan interval kepercayaan dalam bahasa Inggris: ____", ["ci"], "Confidence Interval.");
  // pandasDs (+6)
  N("pandasDs", 1, "Output kode ini:", ["3", "5", "2", "0"], "import pandas as pd\ndf = pd.DataFrame({'umur': [21, None, 30, None, 25], 'kota': ['A', 'B', None, 'A', 'B']})\nprint(df['umur'].notna().sum())", "notna().sum() menghitung nilai yang tidak kosong.");
  SOAL_DS[SOAL_DS.length - 1].kode = "df = pd.DataFrame({'umur': [21, None, 30, None, 25],\n                   'kota': ['A', 'B', None, 'A', 'B']})\nprint(df['umur'].notna().sum())";
  N("pandasDs", 2, "Output kode ini:", ["2", "3", "1", "5"], "import pandas as pd\ndf = pd.DataFrame({'kota': ['A', 'B', 'A', 'C', 'A']})\nprint(df['kota'].value_counts()['A'] - 1)", "value_counts menghitung kemunculan; A muncul 3 kali, dikurangi 1.");
  SOAL_DS[SOAL_DS.length - 1].kode = "df = pd.DataFrame({'kota': ['A', 'B', 'A', 'C', 'A']})\nprint(df['kota'].value_counts()['A'] - 1)";
  N("pandasDs", 2, "Output kode ini:", ["15.0", "10.0", "20.0", "45.0"], "import pandas as pd\ndf = pd.DataFrame({'g': ['x', 'x', 'y'], 'v': [10, 20, 15]})\nprint(df.groupby('g')['v'].mean()['x'])", "Rata-rata grup x = (10 + 20) ÷ 2.");
  SOAL_DS[SOAL_DS.length - 1].kode = "df = pd.DataFrame({'g': ['x', 'x', 'y'], 'v': [10, 20, 15]})\nprint(df.groupby('g')['v'].mean()['x'])";
  M("pandasDs", 2, "df.describe() menampilkan…", ["Ringkasan statistik kolom angka: count, mean, std, min, kuartil, max", "Semua baris", "Nama kolom saja", "Grafik"], "Langkah awal EDA.");
  M("pandasDs", 2, "Melihat korelasi antar kolom angka:", ["df.corr(numeric_only=True)", "df.relate()", "df.mean()", "df.info()"], "Korelasi tinggi bukan bukti sebab-akibat.");
  I("pandasDs", 1, "Method pandas untuk ringkasan statistik: df.____()", ["describe"], "describe().");
  // fitur (+6)
  M("fitur", 2, "Data leakage terjadi saat…", ["Fitur memuat informasi yang tidak tersedia saat prediksi (misalnya kolom 'tanggal_berhenti' untuk memprediksi churn)", "Data bocor ke internet", "Data terlalu sedikit", "Model terlalu sederhana"], "Model tampak hebat saat uji, gagal di dunia nyata.");
  M("fitur", 2, "Mengubah kolom kategori (kota) menjadi angka untuk model linear:", ["One-hot encoding (satu kolom 0/1 per kota)", "Memberi nomor 1, 2, 3 begitu saja", "Menghapus kolom", "Mengubah ke huruf besar"], "Nomor urut menyiratkan urutan palsu.");
  M("fitur", 2, "Scaler (StandardScaler) harus di-fit pada…", ["Data latih saja, lalu dipakai untuk mentransformasi data uji", "Semua data sekaligus", "Data uji saja", "Tidak perlu fit"], "Fit pada semua data = kebocoran informasi.");
  M("fitur", 2, "Fitur turunan yang sering berguna dari tanggal transaksi:", ["Hari dalam minggu, bulan, hari sejak transaksi terakhir", "Tanggal mentah sebagai teks", "Detik", "Zona waktu saja"], "Feature engineering menangkap pola bisnis.");
  M("fitur", 3, "Pipeline scikit-learn (Pipeline([...scaler, model])) membantu…", ["Mencegah kebocoran karena praproses di-fit ulang di setiap lipatan validasi", "Mempercepat 100 kali", "Membuat grafik", "Mengganti pandas"], "Pasangkan dengan cross_val_score.");
  I("fitur", 1, "Kebocoran informasi target ke fitur: data ____", ["leakage"], "Data leakage.");
  // regresi (+6)
  N("regresi", 1, "Model y = 2 + 3x. Prediksi untuk x = 4:", ["14", "12", "9", "20"], "print(2 + 3 * 4)", "Masukkan x ke persamaan.");
  M("regresi", 2, "Koefisien 3 pada x berarti…", ["Setiap kenaikan x sebesar 1, prediksi y naik 3 (dengan fitur lain tetap)", "y selalu 3", "x naik 3", "Model 3% akurat"], "Interpretasi slope.");
  M("regresi", 2, "R² = 0,7 berarti…", ["Sekitar 70% variasi y dijelaskan model", "Model 70% benar setiap prediksi", "Error 70%", "Korelasi 0,7 pasti"], "R² tinggi belum tentu model berguna atau kausal.");
  N("regresi", 2, "Prediksi 10, 20, 30; nilai asli 12, 18, 33. MAE:", ["2,33", "7", "3", "2"], "e = [abs(a - b) for a, b in zip([10, 20, 30], [12, 18, 33])]\nprint(f'{sum(e) / 3:.2f}'.replace('.', ','))", "Rata-rata selisih mutlak: (2 + 2 + 3) ÷ 3.");
  M("regresi", 2, "Multikolinearitas (fitur saling berkorelasi tinggi) membuat…", ["Koefisien tidak stabil dan sulit ditafsirkan", "Prediksi selalu salah", "Model lebih cepat", "Tidak ada efek"], "Pertimbangkan membuang salah satu atau regularisasi.");
  I("regresi", 2, "Singkatan rata-rata galat mutlak: ____", ["mae"], "Mean Absolute Error.");
  // klasifikasi (+6)
  M("klasifikasi", 1, "Regresi logistik dipakai untuk…", ["Memprediksi peluang kelas (misalnya churn ya/tidak)", "Memprediksi angka kontinu", "Clustering", "Mengurutkan data"], "Keluarannya peluang 0–1.");
  M("klasifikasi", 2, "Decision tree yang terlalu dalam cenderung…", ["Overfitting: menghafal data latih", "Underfitting", "Tidak bisa dilatih", "Selalu terbaik"], "Batasi max_depth atau pakai ensemble.");
  M("klasifikasi", 2, "Random forest bekerja dengan…", ["Menggabung banyak pohon yang dilatih pada sampel/fitur acak lalu voting", "Satu pohon besar", "Regresi linear", "Clustering"], "Lebih stabil dari satu pohon.");
  M("klasifikasi", 2, "Gradient boosting (XGBoost/LightGBM) membangun pohon…", ["Berurutan, setiap pohon memperbaiki kesalahan pohon sebelumnya", "Sekaligus independen", "Tanpa data", "Acak tanpa urutan"], "Sering juara di data tabular.");
  M("klasifikasi", 2, "Data churn hanya 3% kelas positif. Masalah yang muncul:", ["Ketidakseimbangan kelas: akurasi tinggi bisa menipu; pakai metrik precision/recall dan bobot kelas", "Tidak ada masalah", "Model tidak bisa dilatih", "Harus hapus kelas negatif"], "Model yang selalu menebak 'tidak churn' akurasinya 97%.");
  I("klasifikasi", 1, "Model klasifikasi berbentuk pohon keputusan: decision ____", ["tree"], "Decision tree.");
  // validasi (+6)
  M("validasi", 1, "Akurasi latih 99%, akurasi uji 70%. Diagnosis:", ["Overfitting", "Underfitting", "Model sempurna", "Data uji salah"], "Model menghafal data latih.");
  M("validasi", 2, "K-fold cross-validation berguna untuk…", ["Mengukur kinerja lebih stabil dengan melatih-menguji pada beberapa pembagian data", "Mempercepat pelatihan", "Menambah data", "Membersihkan data"], "Rata-rata skor dari k lipatan.");
  M("validasi", 2, "Data deret waktu (penjualan harian) sebaiknya dibagi…", ["Berdasarkan waktu: latih di masa lalu, uji di masa sesudahnya", "Acak", "Per abjad", "Tidak dibagi"], "Pembagian acak membocorkan masa depan.");
  M("validasi", 2, "Set validasi berbeda dengan set uji karena…", ["Validasi dipakai memilih model/parameter; uji dipakai sekali di akhir untuk penilaian jujur", "Sama saja", "Uji untuk tuning", "Validasi tidak perlu"], "Jangan tuning dengan set uji.");
  M("validasi", 2, "Regularisasi (L1/L2) membantu…", ["Mengurangi overfitting dengan menghukum koefisien besar", "Menambah fitur", "Menghapus data", "Mempercepat prediksi"], "L1 bisa membuat koefisien nol (seleksi fitur).");
  I("validasi", 1, "Model menghafal data latih: over____", ["fitting"], "Overfitting.");
  // evaluasi (+6)
  N("evaluasi", 2, "TP = 40, FP = 10, FN = 20, TN = 930. Precision:", ["0,8", "0,67", "0,97", "0,04"], "print(f'{40 / (40 + 10):g}'.replace('.', ','))", "Precision = TP ÷ (TP + FP).");
  N("evaluasi", 2, "TP = 40, FP = 10, FN = 20, TN = 930. Recall:", ["0,67", "0,8", "0,97", "0,04"], "print(f'{40 / (40 + 20):.2f}'.replace('.', ','))", "Recall = TP ÷ (TP + FN).");
  N("evaluasi", 2, "TP = 40, FP = 10, FN = 20, TN = 930. Accuracy:", ["97%", "80%", "67%", "93%"], "print(f'{(40 + 930) / 1000 * 100:.0f}%')", "Akurasi tinggi karena kelas negatif dominan.");
  M("evaluasi", 2, "Deteksi penipuan, melewatkan penipuan sangat mahal. Metrik yang diprioritaskan:", ["Recall (tangkap sebanyak mungkin penipuan)", "Precision saja", "Accuracy", "R²"], "Lalu sesuaikan ambang dengan biaya positif palsu.");
  M("evaluasi", 2, "Menurunkan ambang keputusan dari 0,5 ke 0,3 biasanya…", ["Menaikkan recall dan menurunkan precision", "Menaikkan keduanya", "Tidak berpengaruh", "Menurunkan recall"], "Lebih banyak kasus ditandai positif.");
  I("evaluasi", 2, "Rata-rata harmonik precision dan recall: F____ score", ["1"], "F1 score.");
  // unsup (+5)
  M("unsup", 2, "PCA dipakai untuk…", ["Mereduksi banyak fitur menjadi beberapa komponen yang menangkap variasi terbesar", "Klasifikasi", "Membersihkan teks", "Membuat label"], "Berguna untuk visualisasi dan mengurangi noise.");
  M("unsup", 2, "DBSCAN berbeda dengan K-Means karena…", ["Tidak perlu menentukan k dan bisa menemukan cluster berbentuk bebas serta menandai noise", "Selalu lebih cepat", "Butuh label", "Sama saja"], "Parameter utamanya eps dan min_samples.");
  M("unsup", 2, "Menilai hasil clustering tanpa label memakai…", ["Silhouette score dan kesesuaian dengan makna bisnis", "Akurasi", "Recall", "R²"], "Tidak ada kunci jawaban, jadi interpretasi penting.");
  M("unsup", 2, "Anomaly detection berguna untuk…", ["Menemukan transaksi/aktivitas yang tidak biasa (penipuan, kerusakan mesin)", "Menghitung rata-rata", "Membuat dashboard", "Menghapus data"], "Contoh: Isolation Forest.");
  I("unsup", 1, "Teknik reduksi dimensi paling populer (singkatan): ____", ["pca"], "Principal Component Analysis.");
  // kausal (+5)
  M("kausal", 2, "Pelanggan yang menerima email promo belanja lebih banyak. Kenapa belum tentu emailnya penyebab?", ["Email mungkin dikirim ke pelanggan yang memang sudah aktif (bias seleksi)", "Email pasti penyebab", "Data salah", "Promo tidak ada"], "Butuh eksperimen atau metode kausal.");
  M("kausal", 2, "Difference-in-differences membandingkan…", ["Perubahan kelompok yang dapat perlakuan dengan perubahan kelompok pembanding di periode yang sama", "Dua rata-rata saja", "Dua model ML", "Dua dashboard"], "Mengoreksi tren umum yang sama-sama terjadi.");
  M("kausal", 2, "Uplift modeling bertujuan…", ["Menemukan pelanggan yang perilakunya berubah KARENA perlakuan (bukan yang memang akan membeli)", "Menaikkan akurasi", "Mengurangi data", "Membuat grafik"], "Promo diarahkan ke yang benar-benar terpengaruh.");
  M("kausal", 2, "Confounder adalah…", ["Variabel yang memengaruhi perlakuan dan hasil sekaligus sehingga mengacaukan kesimpulan", "Fitur yang tidak berguna", "Error data", "Kelompok kontrol"], "Contoh: cuaca untuk es krim dan tenggelam.");
  I("kausal", 1, "Cara paling kuat membuktikan sebab-akibat: ekspe____", ["rimen"], "Eksperimen acak (A/B test).");
  // mlops (+5)
  M("mlops", 2, "Data drift berarti…", ["Distribusi data input di produksi berubah dibanding saat model dilatih", "Data hilang", "Model rusak permanen", "Server lambat"], "Pantau dan latih ulang berkala.");
  M("mlops", 2, "Menyajikan model sebagai layanan biasanya lewat…", ["API (misalnya FastAPI) yang menerima input dan mengembalikan prediksi", "Email", "Excel", "PDF"], "Versi model dicatat.");
  M("mlops", 2, "Hal yang dipantau model di produksi:", ["Kinerja prediksi, distribusi input, latensi, dan error", "Warna dashboard", "Jumlah karyawan", "Ukuran layar"], "Kinerja bisa turun diam-diam.");
  M("mlops", 2, "Menyimpan versi model, data, dan parameter berguna untuk…", ["Reproduksibilitas: hasil bisa diulang dan dibandingkan", "Menghemat listrik", "Membuat grafik", "Tidak berguna"], "Alat: MLflow, DVC.");
  I("mlops", 1, "Perubahan distribusi data produksi: data ____", ["drift"], "Data drift.");
  // etika (+5)
  M("etika", 2, "Model kredit memakai kode pos yang ternyata berkorelasi dengan kelompok tertentu. Risikonya:", ["Diskriminasi tidak langsung (proxy bias)", "Tidak ada risiko", "Model lebih adil", "Data terlalu sedikit"], "Audit fairness per kelompok.");
  M("etika", 2, "UU PDP (Pelindungan Data Pribadi) Indonesia mewajibkan…", ["Dasar pemrosesan yang sah, pembatasan tujuan, keamanan data, dan hak subjek data", "Data boleh dijual bebas", "Tidak ada aturan", "Hanya untuk bank"], "UU Nomor 27 Tahun 2022.");
  M("etika", 2, "Anonimisasi data pelanggan sebelum dianalisis tim lain berarti…", ["Menghapus/menyamarkan informasi yang bisa mengidentifikasi orang", "Mengenkripsi lalu membagikan kuncinya", "Mengganti nama kolom", "Tidak perlu"], "Waspadai kombinasi kolom yang tetap bisa mengidentifikasi.");
  M("etika", 2, "Model yang keputusannya berdampak besar (kredit, rekrutmen) sebaiknya…", ["Bisa dijelaskan, diaudit, dan ada jalur banding manusia", "Rahasia total", "Otomatis tanpa pengawasan", "Tidak diuji"], "Transparansi membangun kepercayaan.");
  I("etika", 1, "Singkatan UU Pelindungan Data Pribadi: UU ____", ["pdp"], "UU PDP.");
  // kerjads (+4)
  M("kerjads", 1, "Keterampilan inti Data Scientist pemula:", ["Python (pandas, scikit-learn), statistik, SQL, dan komunikasi hasil", "Desain grafis", "Akuntansi", "Jaringan"], "Ditambah pemahaman domain.");
  M("kerjads", 2, "Proyek portofolio DS yang meyakinkan:", ["Masalah nyata, data dibersihkan, baseline vs model, evaluasi jujur, dan rekomendasi", "Akurasi 100% tanpa penjelasan", "Menyalin notebook Kaggle", "Daftar library"], "Tunjukkan cara berpikir.");
  M("kerjads", 2, "Banyak lowongan 'Data Scientist' di Indonesia sebenarnya juga meminta…", ["Kemampuan analis: SQL, dashboard, eksperimen", "Hanya deep learning", "Desain UI", "Hardware"], "Baca deskripsi tugas, bukan judulnya.");
  I("kerjads", 1, "Library Python ML paling umum untuk data tabular: scikit-____", ["learn"], "scikit-learn.");

  const DA = dk(MATERI_DA), DS = dk(MATERI_DS);
  const ringkas = (fn, k, judul, isi) => fn(k, `<h4>${judul}</h4>${isi}`);
  ringkas(DA, "peran", "Dari permintaan ke pertanyaan analisis", "<ol><li>Keputusan apa yang akan dibuat?</li><li>Metrik apa yang menjawabnya?</li><li>Periode dan rincian (per wilayah/produk)?</li><li>Kapan dibutuhkan dan dalam bentuk apa?</li></ol><p>Pertanyaan yang jelas menghemat hari kerja.</p>");
  ringkas(DA, "metrik", "Pohon metrik pendapatan", "<pre><code>Pendapatan = Pembeli × AOV\nPembeli    = Pengunjung × Konversi\nAOV        = Item per pesanan × Harga rata-rata</code></pre><p>Saat pendapatan turun, cek setiap cabang untuk menemukan sumbernya.</p>");
  ringkas(DA, "bersih", "Daftar periksa kualitas data", "<ul><li>Tipe kolom benar (tanggal, angka).</li><li>Nilai kosong dipahami maknanya.</li><li>Duplikat berdasarkan kunci yang tepat.</li><li>Outlier dicek ke sumbernya.</li><li>Kategori diseragamkan (Jkt, Jakarta, JAKARTA).</li></ul>");
  ringkas(DA, "sqlbisnis", "Pola SQL pertanyaan bisnis", "<table class=\"mini-pivot\"><tr><th>Pertanyaan</th><th>Pola</th></tr><tr><td>Berapa per kategori?</td><td>GROUP BY</td></tr><tr><td>Siapa yang belum pernah?</td><td>LEFT JOIN … IS NULL</td></tr><tr><td>Berapa persen?</td><td>100.0 * SUM(CASE …) / COUNT(*)</td></tr><tr><td>Pelanggan unik</td><td>COUNT(DISTINCT …)</td></tr></table>");
  ringkas(DA, "sqllanjut", "Kohort dalam tiga langkah SQL", "<ol><li>CTE bulan pertama setiap pelanggan (MIN).</li><li>Gabung dengan transaksi untuk mendapat selisih bulan.</li><li>Hitung pelanggan aktif per kohort per selisih bulan.</li></ol>");
  ringkas(DA, "banding", "Membandingkan dengan adil", "<ul><li>Pakai rasio/rate, bukan angka mentah.</li><li>Lihat distribusi, bukan hanya rata-rata.</li><li>Bandingkan periode yang setara (YoY untuk musiman).</li><li>Cek per segmen (Simpson's paradox).</li></ul>");
  ringkas(DA, "abtest", "Rencana A/B test satu halaman", "<ol><li>Hipotesis dan metrik utama.</li><li>Guardrail metric.</li><li>Ukuran sampel dan durasi (tetapkan di awal).</li><li>Pengacakan dan pemeriksaan keseimbangan.</li><li>Analisis: selisih absolut, relatif, dan signifikansi.</li></ol>");
  ringkas(DA, "visual", "Grafik yang menyampaikan pesan", "<p>Judul berupa kesimpulan, satu warna sorotan, sumbu bar mulai nol, label langsung di grafik, dan buang hiasan yang tidak membawa informasi.</p>");
  ringkas(DA, "cerita", "Template memo satu halaman", "<ol><li><b>Rekomendasi</b> (1–2 kalimat).</li><li><b>Bukti</b> (3 poin + 1 grafik).</li><li><b>Dampak</b> perkiraan.</li><li><b>Risiko</b> dan cara mengukurnya.</li><li><b>Langkah berikutnya</b>.</li></ol>");
  ringkas(DA, "segmen", "RFM ke tindakan", "<table class=\"mini-pivot\"><tr><th>Segmen</th><th>Tindakan</th></tr><tr><td>Champions</td><td>loyalitas, referal</td></tr><tr><td>At risk</td><td>win-back</td></tr><tr><td>Baru</td><td>onboarding</td></tr><tr><td>Hibernasi</td><td>promo murah, atau biarkan</td></tr></table>");
  ringkas(DA, "musiman", "Memisahkan tren dan musiman", "<p>Bandingkan YoY untuk menghapus efek musim, pakai rata-rata bergerak untuk melihat tren, dan tulis proyeksi sebagai rentang dengan asumsi.</p>");
  ringkas(DA, "kerjada", "Rencana belajar 8 minggu", "<ol><li>SQL dasar–window (Lab SQL).</li><li>Excel/Sheets + pivot.</li><li>Satu alat BI.</li><li>Python pandas.</li><li>Dua proyek portofolio dengan memo rekomendasi.</li></ol>");
  ringkas(DS, "peranDs", "Mulai dari baseline", "<p>Sebelum model rumit, tulis baseline (aturan sederhana atau kelas terbanyak). Model hanya layak dipakai bila mengalahkan baseline secara berarti dan dampaknya terukur.</p>");
  ringkas(DS, "prob", "Bayes dengan angka 1.000 orang", "<p>Dari 1.000 orang, 10 sakit. Tes menangkap 9 dari mereka. Dari 990 sehat, 5% (≈ 50) positif palsu. Jadi dari ≈ 59 hasil positif, hanya 9 yang sakit (≈ 15%).</p>");
  ringkas(DS, "inferensi", "Membaca interval kepercayaan", "<p>Rata-rata ± 1,96 × SE memberi rentang 95%. Rentang sempit = presisi tinggi. Bila rentang selisih dua kelompok melewati nol, perbedaannya belum meyakinkan.</p>");
  ringkas(DS, "pandasDs", "EDA dalam lima perintah", "<pre><code>df.shape; df.info(); df.describe()\ndf.isna().sum(); df['kolom'].value_counts()\ndf.groupby('segmen')['nilai'].agg(['mean', 'count'])</code></pre>");
  ringkas(DS, "fitur", "Aturan anti-kebocoran", "<ul><li>Bagi data dulu, baru praproses.</li><li>Fit scaler/encoder di data latih saja.</li><li>Pastikan setiap fitur tersedia saat prediksi dibuat.</li><li>Pakai Pipeline.</li></ul>");
  ringkas(DS, "regresi", "Membaca output regresi", "<p>Koefisien = perubahan prediksi per satuan fitur (fitur lain tetap). R² = porsi variasi yang dijelaskan. MAE/RMSE = besar kesalahan dalam satuan target.</p>");
  ringkas(DS, "klasifikasi", "Memilih model tabular", "<table class=\"mini-pivot\"><tr><th>Model</th><th>Kelebihan</th></tr><tr><td>Logistik</td><td>mudah dijelaskan</td></tr><tr><td>Pohon</td><td>aturan terbaca</td></tr><tr><td>Random forest</td><td>stabil</td></tr><tr><td>Boosting</td><td>akurat di data tabular</td></tr></table>");
  ringkas(DS, "validasi", "Pembagian data yang jujur", "<p>Latih → validasi (tuning) → uji (sekali, di akhir). Untuk deret waktu, bagi berdasarkan waktu. Gunakan k-fold untuk skor yang stabil.</p>");
  ringkas(DS, "evaluasi", "Confusion matrix", "<table class=\"mini-pivot\"><tr><th></th><th>Prediksi +</th><th>Prediksi −</th></tr><tr><th>Asli +</th><td>TP</td><td>FN</td></tr><tr><th>Asli −</th><td>FP</td><td>TN</td></tr></table><p>Precision = TP/(TP+FP); Recall = TP/(TP+FN). Pilih ambang sesuai biaya kesalahan.</p>");
  ringkas(DS, "unsup", "Tanpa label, tetap terukur", "<p>Standardisasi fitur, coba beberapa k, nilai dengan silhouette, lalu beri nama setiap cluster berdasarkan profilnya.</p>");
  ringkas(DS, "kausal", "Dari korelasi ke sebab", "<p>Urutan kekuatan bukti: eksperimen acak → quasi-eksperimen (diff-in-diff) → model observasional dengan kontrol confounder.</p>");
  ringkas(DS, "mlops", "Siklus hidup model", "<p>Latih → versi → deploy (API) → pantau (kinerja, drift, latensi) → latih ulang. Model tanpa pemantauan perlahan rusak tanpa ketahuan.</p>");
  ringkas(DS, "etika", "Daftar periksa etika", "<ul><li>Data dikumpulkan dengan dasar sah (UU PDP).</li><li>Minimalkan data pribadi.</li><li>Uji bias per kelompok.</li><li>Jelaskan keputusan berdampak besar.</li></ul>");
  ringkas(DS, "kerjads", "Portofolio DS yang menonjol", "<p>Satu proyek end-to-end (data → model → API sederhana → laporan) lebih kuat daripada sepuluh notebook tutorial.</p>");
})();
