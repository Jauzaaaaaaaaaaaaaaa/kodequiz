// ============ BI, STATISTIK, KARIER, GIT — tambahan 2x lipat ============
// Dimuat SETELAH soal-latihan-ekstra.js. Soal konsep dan hitungan kecil (angka dicek manual). Kunci di indeks 0 (opsi diacak).
(function () {
  const mk = BANK => (k, lv, q, o, e, kode) => BANK.push({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}) });
  const ik = BANK => (k, lv, q, a, e) => BANK.push({ k, t: "is", lv, q, a, e });
  const dk = MAT => (k, html) => { const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  /* =================== BI (+47) =================== */
  let M = mk(SOAL_BI), I = ik(SOAL_BI), D = dk(MATERI_BI);
  // bidasar (+12)
  M("bidasar", 1, "Beda KPI dan metrik biasa:", ["KPI adalah metrik yang terikat langsung pada tujuan utama dan punya target", "Sama saja", "KPI selalu dalam persen", "Metrik selalu lebih penting"], "Semua KPI adalah metrik, tapi tidak semua metrik adalah KPI.");
  M("bidasar", 1, "Dalam laporan 'Penjualan per Wilayah per Bulan', Wilayah dan Bulan disebut…", ["Dimensi (cara mengelompokkan)", "Measure", "KPI", "Filter rusak"], "Dimensi = kategori; measure = angka yang dihitung (jumlah penjualan).");
  M("bidasar", 1, "Contoh measure:", ["Total penjualan, jumlah pesanan, rata-rata nilai pesanan", "Nama pelanggan", "Kota", "Kategori produk"], "Measure bisa dijumlah, dirata-rata, atau dihitung.");
  M("bidasar", 2, "Dashboard yang baik untuk manajer sebaiknya…", ["Menampilkan sedikit KPI terpenting di atas, lalu rincian untuk ditelusuri", "Memuat semua grafik yang mungkin", "Hanya tabel angka", "Penuh warna agar menarik"], "Pertanyaan utama dijawab dalam 5 detik pertama.");
  M("bidasar", 2, "Beda dashboard operasional dan strategis:", ["Operasional dipantau harian untuk tindakan cepat; strategis memantau tren jangka panjang", "Sama saja", "Strategis diperbarui tiap menit", "Operasional untuk direksi saja"], "Frekuensi dan audiens menentukan isi.");
  M("bidasar", 2, "Angka KPI 'Penjualan bulan ini 450 jt' paling berguna bila disertai…", ["Pembanding: target, bulan lalu, atau tahun lalu", "Warna merah", "Font besar saja", "Animasi"], "Angka tanpa pembanding tidak menjawab 'baik atau buruk?'.");
  M("bidasar", 2, "Filter global di dashboard berfungsi untuk…", ["Mengubah semua grafik sekaligus sesuai pilihan (periode, wilayah)", "Menghapus data", "Mengunci dashboard", "Mencetak"], "Konsisten di semua visual.");
  M("bidasar", 2, "Leading indicator berbeda dengan lagging indicator karena…", ["Leading memberi sinyal lebih awal (misalnya jumlah lead), lagging melihat hasil akhir (penjualan)", "Sama saja", "Lagging lebih awal", "Leading hanya untuk keuangan"], "Dashboard sehat memuat keduanya.");
  M("bidasar", 2, "Refresh data dashboard sebaiknya…", ["Sesuai kebutuhan keputusan (harian/mingguan) dan tanggal pembaruan ditampilkan", "Setiap detik", "Manual setahun sekali", "Tidak perlu"], "Pengguna perlu tahu seberapa baru datanya.");
  M("bidasar", 3, "Manajer minta 'semua angka' di satu halaman. Respons analis yang tepat:", ["Tanya keputusan apa yang ingin dibuat, lalu pilih KPI yang mendukungnya dan sisanya di halaman rinci", "Masukkan semua", "Tolak", "Kirim data mentah"], "Dashboard alat keputusan, bukan gudang angka.");
  I("bidasar", 1, "Singkatan indikator kinerja utama: ____", ["kpi"], "Key Performance Indicator.");
  I("bidasar", 2, "Kategori untuk mengelompokkan angka (wilayah, bulan) disebut ____", ["dimensi", "dimension"], "Dimensi.");
  // visual (+12)
  M("visual", 1, "Grafik terbaik untuk tren penjualan 12 bulan:", ["Line chart", "Pie chart", "Peta", "Tabel saja"], "Garis menunjukkan naik-turun sepanjang waktu.");
  M("visual", 1, "Membandingkan penjualan 6 wilayah:", ["Bar chart (diurutkan dari terbesar)", "Pie chart 6 irisan", "Line chart", "Scatter"], "Bar mudah dibandingkan; urutkan agar langsung terbaca.");
  M("visual", 2, "Pie chart masih wajar dipakai bila…", ["Hanya 2–3 bagian dari satu keseluruhan", "Ada 12 kategori", "Data tren waktu", "Angka negatif"], "Mata manusia sulit membandingkan sudut kecil.");
  M("visual", 2, "Hubungan biaya iklan dan penjualan per minggu digambarkan dengan…", ["Scatter plot", "Pie", "Donut", "Gauge"], "Setiap titik satu minggu; pola menunjukkan korelasi.");
  M("visual", 2, "Sebaran nilai ujian 300 siswa paling tepat dengan…", ["Histogram", "Pie", "Line", "Tabel"], "Histogram menunjukkan bentuk distribusi (miring, dua puncak).");
  M("visual", 2, "Sumbu Y bar chart dimulai dari 90 padahal nilainya 92 dan 95. Akibatnya:", ["Perbedaan kecil terlihat sangat besar (menyesatkan)", "Lebih jujur", "Tidak ada efek", "Grafik error"], "Bar chart sebaiknya mulai dari 0.");
  M("visual", 2, "Warna di dashboard sebaiknya…", ["Sedikit dan bermakna: satu warna sorotan untuk hal penting, sisanya netral", "Setiap batang beda warna", "Merah dan hijau saja", "Acak"], "Perhatikan juga pembaca buta warna.");
  M("visual", 2, "Menampilkan target vs realisasi per bulan:", ["Bar realisasi dengan garis/penanda target", "Pie", "Peta", "Donut"], "Kombinasi bar + line umum dipakai.");
  M("visual", 2, "Data dengan nilai sangat berbeda (1 juta vs 10) dalam satu grafik membuat…", ["Nilai kecil tidak terlihat; pisahkan grafik atau pakai skala yang sesuai", "Lebih rapi", "Tidak masalah", "Error"], "Jangan memaksakan semua dalam satu visual.");
  M("visual", 3, "Grafik 3D dan bayangan berlebihan sebaiknya dihindari karena…", ["Mengubah kesan ukuran dan menyulitkan membaca angka", "Lambat dimuat saja", "Dilarang software", "Terlalu sederhana"], "Prinsip data-ink: buang hiasan yang tidak membawa informasi.");
  I("visual", 1, "Grafik garis dalam bahasa Inggris: ____ chart", ["line"], "Line chart.");
  I("visual", 2, "Grafik sebaran dua angka: ____ plot", ["scatter"], "Scatter plot.");
  // model (+11)
  M("model", 1, "Star schema terdiri dari…", ["Satu tabel fakta di tengah yang terhubung ke beberapa tabel dimensi", "Satu tabel besar", "Banyak tabel tanpa relasi", "Hanya tabel dimensi"], "Bentuknya seperti bintang.");
  M("model", 1, "Tabel fakta berisi…", ["Kejadian/transaksi dengan angka (qty, total) dan kunci ke dimensi", "Daftar kota saja", "Nama produk saja", "Pengaturan"], "Contoh: tabel penjualan per baris transaksi.");
  M("model", 2, "Relasi tabel dimensi Produk ke fakta Penjualan biasanya…", ["One-to-many (satu produk, banyak transaksi)", "Many-to-many", "One-to-one", "Tanpa relasi"], "Filter mengalir dari dimensi ke fakta.");
  M("model", 2, "Tabel kalender (date table) penting karena…", ["Memungkinkan analisis per bulan/kuartal/tahun dan fungsi time intelligence", "Wajib untuk semua tabel", "Membuat file kecil", "Untuk warna"], "Tandai sebagai Date Table di Power BI.");
  M("model", 2, "Power Query digunakan untuk…", ["Mengambil, membersihkan, dan membentuk data sebelum dimuat ke model", "Membuat grafik", "Menulis DAX", "Mengirim email"], "Setiap langkah tersimpan dan diulang saat refresh.");
  M("model", 2, "Unpivot di Power Query mengubah…", ["Kolom per bulan (Jan, Feb, …) menjadi baris Bulan + Nilai", "Baris jadi grafik", "Teks jadi angka", "Tabel jadi gambar"], "Data panjang (long) lebih mudah dianalisis.");
  M("model", 2, "Merge queries di Power Query mirip dengan…", ["JOIN di SQL atau XLOOKUP di Excel", "SUM", "Pivot", "Filter"], "Append mirip UNION.");
  M("model", 2, "Kenapa kolom kunci dengan spasi tersembunyi merusak relasi?", ["Nilai 'P01 ' dan 'P01' dianggap berbeda sehingga tidak cocok", "Spasi membuat file besar", "Tidak berpengaruh", "Relasi butuh spasi"], "Trim di Power Query sebelum dimuat.");
  M("model", 3, "Relasi many-to-many langsung antara dua tabel fakta sebaiknya dihindari karena…", ["Hasil agregat bisa ganda/ambigu; gunakan tabel dimensi bersama", "Tidak didukung sama sekali", "Lebih cepat", "Wajib"], "Rancang ulang menjadi star schema.");
  I("model", 1, "Tabel transaksi berisi angka di tengah star schema: tabel ____", ["fakta", "fact"], "Fact table.");
  I("model", 2, "Fitur pembersih data di Excel/Power BI: Power ____", ["query"], "Power Query.");
  // dax (+12)
  M("dax", 1, "Measure DAX Total Penjualan = SUM(Penjualan[Total]) dihitung…", ["Sesuai filter yang aktif di visual (filter context)", "Sekali saat data dimuat", "Per baris dan disimpan", "Hanya untuk Jakarta"], "Measure berubah mengikuti slicer, baris, dan kolom visual.");
  M("dax", 2, "Beda calculated column dan measure:", ["Column dihitung per baris dan disimpan; measure dihitung saat ditampilkan sesuai filter", "Sama saja", "Measure disimpan per baris", "Column lebih fleksibel untuk total"], "Pakai measure untuk angka agregat di visual.");
  M("dax", 2, "DIVIDE([Laba], [Penjualan], 0) lebih aman daripada [Laba]/[Penjualan] karena…", ["Memberi 0 (atau nilai lain) saat pembagi nol, tanpa error", "Lebih cepat dua kali", "Membulatkan", "Wajib"], "Pembagian nol sering terjadi saat filter kosong.");
  M("dax", 2, "CALCULATE(SUM(Penjualan[Total]), Penjualan[Wilayah] = \"Jakarta\") menghasilkan…", ["Total penjualan Jakarta, apa pun filter wilayah di visual", "Total semua wilayah", "Jumlah baris Jakarta", "Error"], "CALCULATE mengubah filter context.");
  M("dax", 2, "SUMX(Penjualan, Penjualan[Qty] * Penjualan[Harga]) bekerja dengan…", ["Menghitung qty × harga per baris, lalu menjumlahkan hasilnya", "Menjumlah qty lalu dikali total harga", "Rata-rata", "Error"], "Fungsi berakhiran X adalah iterator baris.");
  M("dax", 2, "Persentase dari total semua wilayah memakai…", ["DIVIDE([Total], CALCULATE([Total], ALL(Wilayah)))", "SUM / SUM", "COUNT", "FILTER saja"], "ALL menghapus filter wilayah untuk penyebut.");
  M("dax", 2, "Penjualan tahun lalu di periode yang sama:", ["CALCULATE([Total], SAMEPERIODLASTYEAR(Kalender[Tanggal]))", "SUM(TahunLalu)", "[Total] - 1", "PREVIOUS()"], "Butuh tabel kalender yang benar.");
  M("dax", 2, "TOTALYTD([Total], Kalender[Tanggal]) menghasilkan…", ["Total kumulatif dari awal tahun sampai tanggal di konteks", "Total semua tahun", "Rata-rata", "Total hari ini"], "Year-to-date.");
  M("dax", 2, "Di Looker Studio, calculated field untuk margin ditulis…", ["(Revenue - Cost) / Revenue", "=SUMIFS()", "CALCULATE()", "SELECT margin"], "Rumus memakai nama field sumber data.");
  M("dax", 3, "Measure memberi angka sama di setiap baris tabel per produk. Penyebab umum:", ["Tidak ada relasi (atau relasi salah) antara tabel produk dan tabel fakta", "Font salah", "DAX rusak", "Data terlalu banyak"], "Filter produk tidak sampai ke fakta.");
  I("dax", 1, "Fungsi DAX untuk mengubah filter context: ____", ["calculate"], "CALCULATE.");
  I("dax", 2, "Fungsi DAX pembagian aman: ____", ["divide"], "DIVIDE(a, b, alternatif).");
  D("bidasar", `<h4>Dari pertanyaan bisnis ke dashboard</h4><ol><li>Tulis keputusan yang akan dibuat ("perlu tambah stok wilayah mana?").</li><li>Pilih 3–5 KPI yang menjawabnya.</li><li>Tentukan pembanding (target, bulan lalu).</li><li>Pilih dimensi untuk menelusuri (wilayah, produk, bulan).</li><li>Baru pilih grafik.</li></ol><table class="mini-pivot"><tr><th>Istilah</th><th>Contoh</th></tr><tr><td>Measure</td><td>Total penjualan, jumlah pesanan</td></tr><tr><td>Dimensi</td><td>Wilayah, produk, tanggal</td></tr><tr><td>KPI</td><td>Penjualan vs target bulan ini</td></tr></table>`);
  D("visual", `<h4>Memilih grafik dari pertanyaannya</h4><table class="mini-pivot"><tr><th>Pertanyaan</th><th>Grafik</th></tr><tr><td>Bagaimana tren dari waktu ke waktu?</td><td>Line</td></tr><tr><td>Mana yang paling besar?</td><td>Bar terurut</td></tr><tr><td>Berapa porsi dari keseluruhan (2–3 bagian)?</td><td>Pie/donut atau bar 100%</td></tr><tr><td>Apakah dua angka berhubungan?</td><td>Scatter</td></tr><tr><td>Bagaimana sebaran nilai?</td><td>Histogram/box plot</td></tr><tr><td>Di mana lokasinya?</td><td>Peta</td></tr><tr><td>Satu angka penting</td><td>Kartu KPI + pembanding</td></tr></table><p>Grafik jujur: sumbu bar mulai dari nol, label jelas, satuan tertulis, dan warna tidak menipu.</p>`);
  D("model", `<h4>Star schema dengan contoh</h4><pre><code>         Dim_Produk          Dim_Tanggal
              \\                  /
               Fakta_Penjualan (produk_id, tanggal, pelanggan_id, qty, total)
              /
       Dim_Pelanggan</code></pre><p>Dimensi menyaring, fakta dijumlah. Bersihkan data di Power Query (trim, ubah tipe, unpivot, merge) sebelum masuk model, supaya relasi cocok dan rumus sederhana.</p>`);
  D("dax", `<h4>Tiga ide kunci DAX</h4><ol><li><b>Filter context</b>: measure dihitung ulang untuk setiap sel visual sesuai filter baris, kolom, dan slicer.</li><li><b>CALCULATE</b>: mengubah filter itu (tambah, hapus dengan ALL, atau ganti periode).</li><li><b>Iterator (SUMX, AVERAGEX)</b>: menghitung per baris lalu menggabungkan.</li></ol><pre><code>Total      = SUM(Penjualan[Total])
Margin %   = DIVIDE([Total] - [Total Biaya], [Total])
% Wilayah  = DIVIDE([Total], CALCULATE([Total], ALL(Dim_Wilayah)))
Total YoY  = [Total] - CALCULATE([Total], SAMEPERIODLASTYEAR(Dim_Tanggal[Tanggal]))</code></pre>`);

  /* =================== STATISTIK (+47) =================== */
  M = mk(SOAL_STAT); I = ik(SOAL_STAT); D = dk(MATERI_STAT);
  // deskriptif (+12)
  M("deskriptif", 1, "Rata-rata dari 2, 4, 4, 4, 5, 5, 7, 9:", ["5", "4", "4,5", "40"], "Jumlah 40 ÷ 8 data = 5.");
  M("deskriptif", 1, "Median dari 2, 4, 4, 4, 5, 5, 7, 9:", ["4,5", "5", "4", "4,4"], "Data genap: rata-rata dua nilai tengah (4 dan 5).");
  M("deskriptif", 1, "Modus dari 2, 4, 4, 4, 5, 5, 7, 9:", ["4", "5", "2", "9"], "Nilai yang paling sering muncul.");
  M("deskriptif", 2, "Gaji karyawan (juta): 3, 3, 4, 4, 50. Ukuran pusat yang lebih mewakili:", ["Median (4 juta) karena ada nilai ekstrem", "Rata-rata (12,8 juta)", "Maksimum", "Jumlah"], "Rata-rata tertarik oleh outlier.");
  M("deskriptif", 2, "Simpangan baku (populasi) dari 2, 4, 4, 4, 5, 5, 7, 9:", ["2", "4", "5", "1"], "Varians = rata-rata kuadrat selisih dari mean = 32 ÷ 8 = 4; akar 4 = 2.");
  M("deskriptif", 2, "Range dari 2, 4, 4, 4, 5, 5, 7, 9:", ["7", "9", "5", "2"], "Maksimum − minimum = 9 − 2.");
  M("deskriptif", 2, "Q1 = 10, Q3 = 20. Batas atas outlier menurut aturan 1,5 × IQR:", ["35", "30", "25", "40"], "IQR = 10; batas atas = Q3 + 1,5 × 10 = 35.");
  M("deskriptif", 2, "Distribusi miring ke kanan (ekor panjang di kanan) biasanya membuat…", ["Rata-rata lebih besar dari median", "Rata-rata = median", "Median lebih besar", "Tidak ada hubungan"], "Contoh: pendapatan, nilai transaksi.");
  M("deskriptif", 2, "Nilai 70 dari data dengan rata-rata 60 dan simpangan baku 5 punya z-score…", ["2", "10", "0,5", "-2"], "z = (70 − 60) ÷ 5.");
  M("deskriptif", 3, "Persentil ke-90 waktu kirim = 3 hari berarti…", ["90% pengiriman selesai dalam 3 hari atau kurang", "Rata-rata 3 hari", "10% selesai 3 hari", "Maksimum 3 hari"], "Persentil berguna untuk janji layanan (SLA).");
  I("deskriptif", 1, "Nilai tengah data yang diurutkan: ____", ["median"], "Median.");
  I("deskriptif", 2, "Selisih Q3 dan Q1 (singkatan): ____", ["iqr"], "Interquartile range.");
  // metrik (+12)
  M("metrik", 1, "Penjualan naik dari 80 juta ke 100 juta. Pertumbuhannya:", ["25%", "20%", "80%", "125%"], "(100 − 80) ÷ 80 = 25%.");
  M("metrik", 1, "Penjualan turun dari 100 juta ke 80 juta. Penurunannya:", ["20%", "25%", "80%", "-25%"], "(80 − 100) ÷ 100 = −20%. Basisnya nilai awal.");
  M("metrik", 1, "1.200 pengunjung, 30 membeli. Conversion rate:", ["2,5%", "25%", "4%", "30%"], "30 ÷ 1.200 = 0,025.");
  M("metrik", 2, "Biaya pemasaran 10 juta menghasilkan 50 pelanggan baru. CAC:", ["Rp 200.000", "Rp 50.000", "Rp 500.000", "Rp 2.000.000"], "Customer Acquisition Cost = biaya ÷ pelanggan baru.");
  M("metrik", 2, "Pendapatan 45,25 juta dari 10 pesanan. AOV:", ["Rp 4.525.000", "Rp 452.500", "Rp 45.250.000", "10"], "Average Order Value = pendapatan ÷ jumlah pesanan.");
  M("metrik", 2, "Awal bulan 1.000 pelanggan, 50 berhenti. Churn rate:", ["5%", "50%", "95%", "0,5%"], "Retention = 95%.");
  M("metrik", 2, "Pendapatan 100 juta, HPP 60 juta. Gross margin:", ["40%", "60%", "66,7%", "160%"], "(100 − 60) ÷ 100.");
  M("metrik", 2, "Rata-rata pelanggan belanja 100 ribu, 4 kali setahun, selama 2 tahun. LTV kasar (pendapatan):", ["Rp 800.000", "Rp 400.000", "Rp 200.000", "Rp 100.000"], "100 rb × 4 × 2.");
  M("metrik", 2, "LTV 800 ribu dan CAC 200 ribu. Rasio LTV:CAC:", ["4 : 1 (umumnya dianggap sehat bila ≥ 3:1)", "1 : 4", "600 ribu", "0,25"], "Pelanggan menghasilkan 4× biaya mendapatkannya.");
  M("metrik", 2, "Kenaikan dari 2% ke 3% conversion rate adalah…", ["Naik 1 poin persentase, atau naik 50% relatif", "Naik 1%", "Naik 3%", "Naik 150%"], "Bedakan poin persentase dan persen relatif.");
  I("metrik", 1, "Singkatan rata-rata nilai pesanan: ____", ["aov"], "Average Order Value.");
  I("metrik", 2, "Persentase pelanggan yang berhenti: ____ rate", ["churn"], "Churn rate.");
  // kritis (+10)
  M("kritis", 1, "Penjualan es krim dan kasus tenggelam naik bersamaan. Kesimpulan yang tepat:", ["Keduanya mungkin dipengaruhi faktor ketiga (cuaca panas); korelasi bukan sebab-akibat", "Es krim menyebabkan tenggelam", "Tenggelam menyebabkan beli es krim", "Datanya salah"], "Cari variabel pengganggu (confounder).");
  M("kritis", 2, "Survei kepuasan hanya diisi pelanggan yang masih aktif. Bias yang muncul:", ["Survivorship/selection bias: pelanggan yang kecewa dan pergi tidak terwakili", "Tidak ada bias", "Bias konfirmasi saja", "Bias angka"], "Hasilnya terlihat lebih baik dari kenyataan.");
  M("kritis", 2, "A/B test dengan p-value 0,03 (ambang 0,05) berarti…", ["Perbedaan kecil kemungkinannya terjadi karena kebetulan saja, jadi dianggap signifikan", "Versi B pasti 3% lebih baik", "Tes gagal", "Butuh p-value 0,5"], "Signifikan secara statistik belum tentu besar dampaknya.");
  M("kritis", 2, "Menghentikan A/B test segera setelah hasil terlihat bagus di hari kedua berisiko…", ["Kesimpulan palsu karena data belum cukup (peeking)", "Hemat waktu tanpa risiko", "Membuat hasil lebih akurat", "Tidak berpengaruh"], "Tentukan ukuran sampel dan durasi sebelum mulai.");
  M("kritis", 2, "Simpson's paradox terjadi saat…", ["Tren di setiap kelompok berbalik ketika data digabung", "Data terlalu sedikit", "Rata-rata = median", "Grafik salah warna"], "Selalu periksa data per segmen.");
  M("kritis", 2, "Rata-rata nilai pesanan naik setelah fitur baru. Pertanyaan kritis pertama:", ["Apakah ada perubahan lain bersamaan (promo, musim) dan apakah ada kelompok pembanding?", "Berapa warna tombolnya?", "Siapa yang membuat fitur?", "Langsung disimpulkan berhasil"], "Tanpa pembanding, sebab tidak bisa dipastikan.");
  M("kritis", 2, "Sampel 20 responden untuk menyimpulkan kebiasaan seluruh kota:", ["Terlalu kecil dan mungkin tidak acak, jadi kesimpulannya lemah", "Cukup", "Terlalu besar", "Selalu akurat"], "Ukuran dan cara memilih sampel sama penting.");
  M("kritis", 3, "Dalam A/B test, kelompok kontrol berfungsi untuk…", ["Menjadi pembanding yang mengalami kondisi sama kecuali perubahan yang diuji", "Mendapat diskon", "Menguji dua perubahan sekaligus", "Tidak perlu"], "Pembagian acak menyeimbangkan faktor lain.");
  I("kritis", 1, "Kalimat terkenal: korelasi bukan ____", ["kausalitas", "sebab akibat", "sebab-akibat"], "Correlation is not causation.");
  I("kritis", 2, "Ambang p-value yang umum dipakai: 0,0____", ["5"], "0,05.");
  // segmentasi (+13)
  M("segmentasi", 1, "RFM dalam segmentasi pelanggan adalah…", ["Recency, Frequency, Monetary", "Revenue, Forecast, Margin", "Region, Funnel, Market", "Rate, Fee, Money"], "Seberapa baru, seberapa sering, seberapa besar belanja.");
  M("segmentasi", 2, "Pelanggan dengan Recency buruk tapi Frequency dan Monetary tinggi sebaiknya…", ["Diprioritaskan untuk kampanye win-back (dulu loyal, kini menghilang)", "Diabaikan", "Diberi harga lebih mahal", "Dihapus"], "Segmen 'at risk'.");
  M("segmentasi", 2, "K-Means mengelompokkan data dengan…", ["Mencari k titik pusat dan memasukkan setiap data ke pusat terdekat", "Mengurutkan abjad", "Memakai label yang sudah ada", "Menghitung median"], "Termasuk unsupervised learning (tanpa label).");
  M("segmentasi", 2, "Kenapa fitur perlu distandardisasi (misalnya z-score) sebelum K-Means?", ["Agar fitur berskala besar (rupiah) tidak mendominasi jarak dibanding fitur kecil (frekuensi)", "Agar data berkurang", "Wajib untuk grafik", "Tidak perlu"], "Jarak Euclidean peka terhadap skala.");
  M("segmentasi", 2, "Metode elbow dipakai untuk…", ["Memilih jumlah cluster k saat penurunan inertia mulai melandai", "Menghapus outlier", "Menghitung rata-rata", "Memberi warna"], "Bisa dibantu silhouette score.");
  M("segmentasi", 2, "Silhouette score mendekati 1 berarti…", ["Cluster terpisah jelas dan anggotanya rapat", "Cluster tumpang tindih", "k terlalu besar", "Data salah"], "Rentang −1 sampai 1.");
  M("segmentasi", 2, "Hasil clustering baru berguna bila…", ["Setiap cluster diberi profil dan nama yang bisa ditindaklanjuti (misalnya 'Pembeli besar jarang')", "Jumlah cluster banyak", "Grafiknya berwarna", "Akurasinya 100%"], "Segmentasi adalah alat keputusan pemasaran.");
  M("segmentasi", 2, "K-Means sensitif terhadap outlier karena…", ["Titik pusat adalah rata-rata, yang mudah tertarik nilai ekstrem", "Memakai median", "Tidak memakai jarak", "Tidak berpengaruh"], "Tangani outlier atau gunakan metode lain.");
  M("segmentasi", 2, "Hasil K-Means bisa berbeda tiap dijalankan karena…", ["Titik pusat awal dipilih acak; atur random_state dan n_init", "Bug", "Data berubah sendiri", "Selalu sama"], "Untuk hasil yang bisa diulang, tetapkan benih.");
  M("segmentasi", 3, "Menjelaskan skripsi clustering ke perekrut non-teknis sebaiknya…", ["Fokus pada masalah bisnis, segmen yang ditemukan, dan rekomendasi tindakannya", "Membacakan rumus jarak", "Menampilkan kode saja", "Menyebut jumlah iterasi"], "Ceritakan dampaknya dengan bahasa sederhana.");
  M("segmentasi", 2, "Skor RFM 5-5-5 berarti pelanggan…", ["Baru belanja, sering, dan nilainya besar (champions)", "Tidak aktif", "Baru pertama", "Hilang"], "Skor 1–5 per dimensi berdasarkan kuantil.");
  I("segmentasi", 1, "Algoritma clustering paling populer: K-____", ["means"], "K-Means.");
  I("segmentasi", 2, "Metode memilih k dari grafik inertia: metode ____", ["elbow", "siku"], "Elbow method.");
  D("deskriptif", `<h4>Ringkasan data dalam empat angka</h4><table class="mini-pivot"><tr><th>Ukuran</th><th>Untuk</th><th>Catatan</th></tr><tr><td>Rata-rata</td><td>pusat</td><td>tertarik outlier</td></tr><tr><td>Median</td><td>pusat yang tahan outlier</td><td>pakai untuk gaji, harga rumah</td></tr><tr><td>Simpangan baku</td><td>seberapa menyebar</td><td>satuan sama dengan data</td></tr><tr><td>IQR & persentil</td><td>sebaran tengah, batas outlier</td><td>Q3 + 1,5 × IQR</td></tr></table><p>Selalu lihat grafiknya (histogram/box plot) sebelum percaya satu angka ringkasan.</p>`);
  D("metrik", `<h4>Rumus metrik bisnis</h4><table class="mini-pivot"><tr><th>Metrik</th><th>Rumus</th></tr><tr><td>Pertumbuhan</td><td>(baru − lama) ÷ lama</td></tr><tr><td>Conversion rate</td><td>pembeli ÷ pengunjung</td></tr><tr><td>AOV</td><td>pendapatan ÷ jumlah pesanan</td></tr><tr><td>CAC</td><td>biaya akuisisi ÷ pelanggan baru</td></tr><tr><td>Churn</td><td>pelanggan berhenti ÷ pelanggan awal</td></tr><tr><td>Gross margin</td><td>(pendapatan − HPP) ÷ pendapatan</td></tr><tr><td>LTV (sederhana)</td><td>nilai belanja × frekuensi × lama berlangganan</td></tr></table><p>Bedakan <b>poin persentase</b> (2% → 3% = +1 poin) dan <b>persen relatif</b> (+50%).</p>`);
  D("kritis", `<h4>Daftar periksa sebelum menyimpulkan</h4><ol><li>Apakah ini korelasi atau sudah terbukti sebab-akibat?</li><li>Siapa yang ada di data, siapa yang hilang (bias seleksi/survivorship)?</li><li>Ada pembanding/kelompok kontrol?</li><li>Ukuran sampel cukup? Durasi tes sudah ditetapkan sejak awal?</li><li>Apakah hasilnya konsisten di setiap segmen (cek Simpson's paradox)?</li><li>Signifikan secara statistik <b>dan</b> cukup besar untuk bisnis?</li></ol>`);
  D("segmentasi", `<h4>Alur segmentasi yang bisa diceritakan</h4><ol><li><b>Masalah</b>: promosi seragam boros.</li><li><b>Fitur</b>: RFM per pelanggan.</li><li><b>Siapkan</b>: tangani outlier, standardisasi.</li><li><b>Model</b>: K-Means, pilih k dengan elbow + silhouette.</li><li><b>Profil</b>: rata-rata RFM tiap cluster, beri nama.</li><li><b>Tindakan</b>: champions → program loyalitas; at risk → win-back; baru → onboarding.</li></ol><p>Langkah 5–6 yang membuat analisis bernilai di mata perekrut.</p>`);

  /* =================== KARIER (+43) =================== */
  M = mk(SOAL_KARIER); I = ik(SOAL_KARIER); D = dk(MATERI_KARIER);
  // portofolio (+7)
  M("portofolio", 1, "Struktur studi kasus portofolio yang mudah dibaca perekrut:", ["Masalah → data → metode → hasil/insight → dampak/rekomendasi", "Kode lengkap di awal", "Daftar software", "Riwayat hidup"], "Perekrut membaca cepat; mulai dari masalah dan hasil.");
  M("portofolio", 2, "Proyek portofolio yang paling meyakinkan untuk Data Analyst pemula:", ["Analisis data nyata/publik dengan pertanyaan bisnis jelas dan dashboard yang bisa dibuka", "Mengikuti tutorial tanpa perubahan", "Daftar sertifikat", "Kode tanpa penjelasan"], "Tunjukkan cara berpikir, bukan hanya alat.");
  M("portofolio", 2, "README proyek GitHub sebaiknya memuat…", ["Tujuan, cara menjalankan, sumber data, hasil utama, dan tangkapan layar", "Hanya judul", "Kata sandi database", "Biodata keluarga"], "README adalah halaman depan proyekmu.");
  M("portofolio", 2, "Data pelanggan asli dari tempat magang di portofolio sebaiknya…", ["Disamarkan/dibuat data contoh dan meminta izin; jangan menampilkan data sensitif", "Ditampilkan apa adanya", "Diunggah ke publik", "Dijual"], "Etika data dan kerahasiaan dinilai perekrut.");
  M("portofolio", 2, "Klaim di portofolio harus…", ["Bisa dibuktikan (tautan, angka, kode) dan jujur soal peran (sendiri/tim)", "Dibesar-besarkan", "Tanpa bukti", "Menyebut semua software"], "Pertanyaan wawancara sering menggali klaim ini.");
  M("portofolio", 3, "Mengubah skripsi menjadi studi kasus portofolio: bagian yang paling perlu ditulis ulang adalah…", ["Bahasa akademis menjadi cerita masalah-solusi-dampak dalam 1 halaman", "Daftar pustaka", "Kata pengantar", "Lampiran"], "Simpan detail teknis di tautan.");
  I("portofolio", 1, "Platform menyimpan kode portofolio: Git____", ["hub"], "GitHub.");
  // cv (+7)
  M("cv", 1, "Kalimat CV yang menunjukkan dampak:", ["Membuat dashboard penjualan yang mempercepat laporan bulanan dari 3 hari menjadi 2 jam", "Bertanggung jawab atas laporan", "Bisa Excel", "Pekerja keras"], "Gunakan rumus: hasil terukur + cara.");
  M("cv", 2, "ATS (Applicant Tracking System) membaca CV lebih baik bila…", ["Format sederhana satu kolom dengan kata kunci dari lowongan", "Penuh grafik dan tabel", "Berupa gambar", "Sangat berwarna"], "Simpan sebagai PDF teks, bukan hasil scan.");
  M("cv", 2, "Panjang CV ideal untuk lulusan baru:", ["1 halaman", "4 halaman", "Setengah paragraf", "10 halaman"], "Pilih pengalaman yang paling relevan dengan lowongan.");
  M("cv", 2, "Urutan bagian CV lulusan baru yang umum:", ["Kontak → ringkasan singkat → pengalaman/proyek → pendidikan → keterampilan", "Hobi dulu", "Foto besar dulu", "Referensi dulu"], "Pengalaman/proyek relevan di atas.");
  M("cv", 2, "Keterampilan di CV sebaiknya…", ["Spesifik dan dibuktikan di pengalaman/proyek (SQL, Python pandas, Power BI, Odoo)", "Daftar panjang semua aplikasi", "Bar persentase 90%", "Kata sifat"], "Bar persen tidak bermakna bagi perekrut.");
  M("cv", 3, "Satu CV untuk semua lowongan atau disesuaikan?", ["Sesuaikan ringkasan dan urutan poin dengan kata kunci tiap lowongan", "Satu untuk semua", "Tulis ulang total setiap kali", "Tidak perlu CV"], "Penyesuaian kecil meningkatkan lolos ATS.");
  I("cv", 1, "Singkatan sistem penyaring CV otomatis: ____", ["ats"], "Applicant Tracking System.");
  // lowongan (+7)
  M("lowongan", 1, "Membaca lowongan, bagian yang paling menentukan kata kunci CV:", ["Kualifikasi dan tanggung jawab yang disebut berulang", "Logo perusahaan", "Alamat kantor", "Jumlah karyawan"], "Cocokkan dengan bukti pengalamanmu.");
  M("lowongan", 2, "Memenuhi 70% syarat lowongan. Sebaiknya…", ["Tetap melamar sambil menonjolkan bukti yang relevan", "Tidak melamar", "Berbohong", "Menunggu 100%"], "Syarat lowongan sering berupa daftar ideal.");
  M("lowongan", 2, "Ciri lowongan yang perlu diwaspadai (penipuan):", ["Meminta biaya pelatihan/seragam di awal atau data rekening", "Wawancara daring", "Ada tes", "Gaji ditulis"], "Perusahaan sah tidak memungut biaya melamar.");
  M("lowongan", 2, "Strategi melamar yang terukur:", ["Catat lamaran di spreadsheet (tanggal, posisi, status, tindak lanjut)", "Melamar acak tanpa catatan", "Hanya satu lamaran sebulan", "Menunggu dihubungi"], "Data membantu memperbaiki strategi.");
  M("lowongan", 2, "Judul 'Junior Data Analyst' vs 'Data Analyst Intern' berbeda pada…", ["Status (karyawan vs magang) dan tingkat pengalaman yang diharapkan", "Tidak berbeda", "Gaji selalu sama", "Bahasa"], "Baca juga jenis kontrak.");
  M("lowongan", 3, "Lowongan Odoo Developer meminta 'XML, Python, PostgreSQL'. Bukti terkuat bagi lulusan baru:", ["Modul Odoo kecil di GitHub dengan model, view XML, ACL, dan tes", "Sertifikat kursus saja", "Kata 'menguasai'", "Foto"], "Bukti kode lebih kuat dari klaim.");
  I("lowongan", 1, "Persentase syarat yang umumnya cukup untuk tetap melamar: ____%", ["70"], "Sekitar 70%.");
  // wawancara (+12)
  M("wawancara", 1, "STAR dalam menjawab pertanyaan perilaku adalah…", ["Situation, Task, Action, Result", "Skill, Talent, Attitude, Rank", "Start, Talk, Answer, Repeat", "Strength, Task, Ability, Role"], "Fokus terbesar pada Action dan Result.");
  M("wawancara", 1, "Jawaban 'Ceritakan tentang dirimu' yang baik berdurasi…", ["Sekitar 1–2 menit: latar singkat, pengalaman relevan, alasan melamar", "10 menit kisah hidup", "Satu kata", "Membaca CV"], "Siapkan versi singkat yang relevan dengan posisi.");
  M("wawancara", 2, "Ditanya kelemahan, jawaban yang paling baik:", ["Kelemahan nyata yang relevan kecil plus langkah perbaikan yang sedang dilakukan", "Tidak punya kelemahan", "Perfeksionis tanpa penjelasan", "Kelemahan yang fatal untuk posisi"], "Tunjukkan kesadaran diri dan perbaikan.");
  M("wawancara", 2, "Studi kasus: 'Penjualan turun 20% bulan ini, apa yang kamu lakukan?' Langkah pertama:", ["Bertanya/memecah: di produk, wilayah, kanal mana penurunannya dan sejak kapan", "Langsung menyalahkan tim sales", "Membuat dashboard baru", "Menebak penyebab"], "Pecah masalah sebelum memberi solusi.");
  M("wawancara", 2, "Tidak tahu jawaban teknis saat wawancara. Respons terbaik:", ["Jujur, jelaskan cara kamu akan mencari tahu atau pendekatan yang terpikir", "Mengarang", "Diam", "Mengganti topik"], "Kejujuran dan cara berpikir dinilai.");
  M("wawancara", 2, "Pertanyaan yang baik diajukan ke pewawancara di akhir:", ["Seperti apa keberhasilan di 3 bulan pertama posisi ini?", "Berapa lama cuti?", "Tidak ada pertanyaan", "Kapan saya naik gaji?"], "Menunjukkan minat pada pekerjaan.");
  M("wawancara", 2, "Ditanya ekspektasi gaji, pendekatan yang aman:", ["Sebut rentang berdasarkan riset pasar posisi & kota, tetap terbuka pada paket keseluruhan", "Sebut angka sangat tinggi", "Bilang terserah tanpa angka sama sekali", "Menolak menjawab"], "Riset dari lowongan sejenis dan laporan gaji.");
  M("wawancara", 2, "Setelah wawancara, kirim ucapan terima kasih…", ["Dalam 24 jam, singkat, menyebut satu hal spesifik yang dibahas", "Seminggu kemudian", "Tidak perlu", "Setiap hari sampai dijawab"], "Profesional dan meninggalkan kesan baik.");
  M("wawancara", 2, "Ditanya 'Kenapa melamar di sini?', jawaban terkuat:", ["Hubungkan produk/klien perusahaan dengan pengalaman dan minatmu secara spesifik", "Karena butuh kerja", "Karena dekat rumah", "Gaji besar"], "Riset perusahaan sebelum wawancara.");
  M("wawancara", 3, "Live coding: kamu buntu. Yang sebaiknya dilakukan:", ["Ucapkan pemikiranmu, tulis solusi sederhana dulu, minta klarifikasi bila perlu", "Diam lama", "Menyerah", "Menyalin dari internet"], "Pewawancara menilai proses.");
  I("wawancara", 1, "Metode cerita Situation-Task-Action-Result: ____", ["star"], "STAR.");
  I("wawancara", 2, "Bagian STAR yang paling banyak porsinya: ____", ["action"], "Action (yang kamu lakukan).");
  // melamar (+10)
  M("melamar", 1, "Headline LinkedIn yang efektif:", ["Peran yang dituju + keahlian kunci, misalnya 'Data Analyst | SQL, Python, Power BI | ERP Odoo'", "Mencari kerja", "Mahasiswa", "Kosong"], "Headline muncul di hasil pencarian perekrut.");
  M("melamar", 2, "Bagian About LinkedIn sebaiknya berisi…", ["Ringkasan singkat siapa kamu, keahlian, contoh hasil, dan tujuan karier", "Daftar semua kursus", "Biodata lengkap", "Kata motivasi"], "Tulis dengan orang pertama, 3–5 paragraf pendek.");
  M("melamar", 2, "Menghubungi orang di perusahaan tujuan lewat LinkedIn sebaiknya…", ["Pesan singkat, sopan, dan spesifik (bertanya pengalaman kerja/tim), bukan langsung minta pekerjaan", "Langsung minta referral", "Mengirim CV tanpa pesan", "Spam setiap hari"], "Membangun hubungan dulu.");
  M("melamar", 2, "Mengukur strategi melamar memakai…", ["Rasio balasan: lamaran → panggilan → wawancara → tawaran", "Jumlah like", "Jumlah teman", "Lama online"], "Kalau rasio balasan rendah, perbaiki CV; kalau gagal di wawancara, latih wawancara.");
  M("melamar", 2, "Posting proyek di LinkedIn yang efektif:", ["Masalah singkat, satu gambar hasil, pelajaran, dan tautan proyek", "Hanya tautan", "Teks sangat panjang tanpa gambar", "Hashtag saja"], "Konsisten lebih penting dari viral.");
  M("melamar", 2, "Open to Work di LinkedIn bisa diatur…", ["Hanya terlihat perekrut atau publik dengan bingkai hijau", "Tidak bisa diatur", "Wajib publik", "Berbayar"], "Pilih sesuai kenyamanan.");
  M("melamar", 2, "Rekomendasi LinkedIn paling bernilai datang dari…", ["Atasan/mentor yang benar-benar melihat hasil kerjamu", "Teman yang tidak pernah bekerja bersama", "Orang acak", "Diri sendiri"], "Minta dengan menyebut proyek yang dikerjakan bersama.");
  M("melamar", 3, "Mendapat dua tawaran. Cara membandingkan yang matang:", ["Bandingkan gaji total, pembelajaran, mentor, jenjang, lokasi, dan stabilitas, bukan gaji saja", "Pilih gaji tertinggi tanpa pertimbangan", "Pilih acak", "Tolak keduanya"], "Di awal karier, pembelajaran sangat bernilai.");
  I("melamar", 1, "Kalimat di bawah nama profil LinkedIn: head____", ["line"], "Headline.");
  I("melamar", 2, "Status LinkedIn mencari kerja: Open to ____", ["work"], "Open to Work.");
  D("portofolio", `<h4>Template studi kasus satu halaman</h4><ol><li><b>Judul hasil</b>: "Segmentasi 2.000 pelanggan untuk promosi yang lebih tepat".</li><li><b>Masalah</b> (2 kalimat).</li><li><b>Data</b>: sumber, ukuran, pembersihan.</li><li><b>Metode</b>: alat dan teknik.</li><li><b>Hasil</b>: satu grafik + 3 insight.</li><li><b>Rekomendasi</b>: tindakan bisnis.</li><li><b>Tautan</b>: GitHub, dashboard.</li></ol>`);
  D("cv", `<h4>Rumus kalimat pengalaman</h4><p><b>Kata kerja + apa yang dikerjakan + hasil terukur + alat.</b></p><table class="mini-pivot"><tr><th>Lemah</th><th>Kuat</th></tr><tr><td>Membuat laporan</td><td>Mengotomatiskan laporan stok mingguan dengan Python, memangkas waktu dari 4 jam menjadi 15 menit</td></tr><tr><td>Mengikuti magang ERP</td><td>Mengonfigurasi modul Sales dan Inventory Odoo untuk 3 cabang dan melatih 12 pengguna</td></tr></table>`);
  D("lowongan", `<h4>Membedah lowongan dalam 10 menit</h4><ol><li>Tandai kata yang muncul berulang (SQL, dashboard, stakeholder).</li><li>Pisahkan wajib vs nilai tambah.</li><li>Untuk setiap kata kunci, siapkan satu bukti (proyek, angka).</li><li>Sesuaikan ringkasan CV dan 2–3 poin teratas.</li><li>Catat di tracker lamaran.</li></ol>`);
  D("wawancara", `<h4>Bank cerita STAR</h4><p>Siapkan 5 cerita yang bisa dipakai ulang: (1) menyelesaikan masalah data, (2) bekerja dalam tim, (3) tenggat ketat, (4) membuat kesalahan dan memperbaikinya, (5) belajar alat baru dengan cepat. Setiap cerita: Situasi (1 kalimat), Tugas (1 kalimat), Aksi (3–4 kalimat, pakai "saya"), Hasil (angka atau dampak).</p>`);
  D("melamar", `<h4>Corong lamaran dan cara memperbaikinya</h4><table class="mini-pivot"><tr><th>Masalah</th><th>Kemungkinan penyebab</th><th>Perbaikan</th></tr><tr><td>Lamaran tidak dibalas</td><td>CV tidak cocok kata kunci</td><td>Sesuaikan CV, perkuat portofolio</td></tr><tr><td>Gagal di tes</td><td>Keterampilan teknis</td><td>Latihan Lab & studi kasus KodeQuiz</td></tr><tr><td>Gagal di wawancara</td><td>Cerita kurang terstruktur</td><td>Latih STAR, simulasi</td></tr></table>`);

  /* =================== GIT (+54) =================== */
  M = mk(SOAL_GIT); I = ik(SOAL_GIT); D = dk(MATERI_GIT);
  // dasar (+14)
  M("dasar", 1, "Git adalah…", ["Sistem pencatat versi (version control) yang menyimpan riwayat perubahan kode", "Situs web", "Bahasa pemrograman", "Database"], "GitHub adalah layanan online untuk menyimpan repository Git.");
  M("dasar", 1, "Membuat repository Git baru di folder proyek:", ["git init", "git start", "git new", "git create"], "Membuat folder tersembunyi .git.");
  M("dasar", 1, "Melihat file mana yang berubah dan belum di-commit:", ["git status", "git log", "git show", "git ls"], "Perintah yang paling sering dipakai.");
  M("dasar", 1, "Tiga area kerja Git:", ["Working directory → staging area → repository (commit)", "Draft → final → publish", "Lokal → cloud → server", "Kiri → tengah → kanan"], "git add memindah ke staging, git commit menyimpan ke riwayat.");
  M("dasar", 1, "Memasukkan file ke staging area:", ["git add nama_file", "git stage-in", "git push", "git commit nama_file"], "git add . untuk semua perubahan di folder.");
  M("dasar", 1, "Menyimpan staging sebagai satu titik riwayat dengan pesan:", ["git commit -m \"Tambah fitur login\"", "git save", "git push -m", "git add -m"], "Pesan menjelaskan apa yang berubah.");
  M("dasar", 2, "Melihat riwayat commit secara ringkas satu baris per commit:", ["git log --oneline", "git status -s", "git history", "git show --all"], "Tambahkan --graph untuk melihat cabang.");
  M("dasar", 2, "Melihat perubahan yang SUDAH di-staging (belum di-commit):", ["git diff --staged", "git diff saja", "git status", "git log -p"], "git diff tanpa opsi menampilkan perubahan yang belum di-staging.");
  M("dasar", 2, "File .gitignore berfungsi untuk…", ["Mencegah file tertentu (node_modules, .env, file sementara) ikut dilacak Git", "Menghapus file", "Menyembunyikan dari Windows", "Membuat backup"], "Isi .gitignore dibuat sebelum commit pertama.");
  M("dasar", 2, "Pesan commit yang baik:", ["Kalimat perintah singkat yang menjelaskan alasan/isi: 'Perbaiki total pajak saat diskon 100%'", "update", "asdf", "fix fix fix"], "Riwayat yang jelas memudahkan mencari kapan bug masuk.");
  M("dasar", 2, "Mengatur nama dan email untuk commit:", ["git config --global user.name \"…\" dan user.email \"…\"", "git login", "git user add", "Tidak perlu"], "Untuk privasi, pakai email noreply GitHub.");
  M("dasar", 2, "Satu commit sebaiknya berisi…", ["Satu perubahan yang utuh dan berhubungan (atomic)", "Semua pekerjaan seminggu", "Satu baris saja selalu", "File acak"], "Commit kecil mudah ditinjau dan dibatalkan.");
  I("dasar", 1, "Perintah melihat status file: git ____", ["status"], "git status.");
  I("dasar", 1, "Nama file daftar yang diabaikan Git: .git____", ["ignore"], ".gitignore.");
  // cabang (+13)
  M("cabang", 1, "Branch (cabang) dipakai untuk…", ["Mengerjakan fitur/perbaikan terpisah tanpa mengganggu cabang utama", "Menghapus riwayat", "Membuat folder", "Menyimpan password"], "Setelah selesai, digabung (merge) ke main.");
  M("cabang", 1, "Membuat branch baru dan langsung pindah ke sana:", ["git switch -c fitur-login", "git branch -d fitur-login", "git merge fitur-login", "git push fitur-login"], "Cara lama: git checkout -b fitur-login.");
  M("cabang", 2, "Menggabungkan branch fitur-login ke main:", ["Pindah ke main lalu git merge fitur-login", "Di fitur-login jalankan git main", "git push merge", "git combine"], "Merge membawa perubahan cabang lain ke cabang yang sedang aktif.");
  M("cabang", 2, "Fast-forward merge terjadi bila…", ["main tidak punya commit baru sejak cabang dibuat, jadi penunjuk main cukup digeser maju", "Ada konflik", "Cabang dihapus", "Selalu"], "Tidak ada commit merge tambahan.");
  M("cabang", 2, "Tanda <<<<<<< HEAD, =======, >>>>>>> di file menandakan…", ["Konflik merge: dua cabang mengubah baris yang sama", "File rusak", "Komentar", "Kode baru yang benar"], "Pilih/gabung isinya, hapus penanda, lalu git add dan commit.");
  M("cabang", 2, "Setelah menyelesaikan konflik di file, langkahnya:", ["git add file lalu git commit (atau git merge --continue)", "git push langsung", "Hapus repository", "git init ulang"], "Git menunggu konfirmasi bahwa konflik sudah beres.");
  M("cabang", 2, "Menghapus branch yang sudah digabung:", ["git branch -d nama", "git delete nama", "git rm nama", "git branch --hapus"], "-D memaksa hapus walau belum digabung (hati-hati).");
  M("cabang", 2, "Melihat semua branch lokal:", ["git branch", "git log", "git status", "git show"], "Tanda * menunjukkan branch aktif.");
  M("cabang", 2, "Rebase berbeda dengan merge karena…", ["Rebase memindahkan commit cabang ke ujung cabang lain sehingga riwayat lurus; merge membuat commit gabungan", "Sama saja", "Rebase menghapus cabang", "Merge mengubah riwayat lama"], "Jangan rebase commit yang sudah dibagikan ke orang lain.");
  M("cabang", 3, "Kebiasaan aman sebelum merge cabang fitur ke main:", ["Tarik main terbaru, uji, lalu merge (lebih baik lewat pull request)", "Langsung merge tanpa uji", "Hapus main", "Force push"], "Konflik diselesaikan di cabang fitur.");
  M("cabang", 2, "Nama branch yang baik:", ["fitur/kalkulator-pajak atau perbaikan/login-error", "branch1", "baru", "aaa"], "Nama menjelaskan tujuan.");
  I("cabang", 1, "Perintah menggabungkan cabang: git ____", ["merge"], "git merge.");
  I("cabang", 2, "Opsi git switch untuk membuat cabang baru: -____", ["c"], "git switch -c nama.");
  // remote (+14)
  M("remote", 1, "Menghubungkan repository lokal ke GitHub:", ["git remote add origin https://github.com/user/repo.git", "git link github", "git connect", "git push --new"], "origin = nama panggilan remote utama.");
  M("remote", 1, "Mengirim commit lokal ke GitHub:", ["git push", "git pull", "git fetch", "git clone"], "Pertama kali: git push -u origin main.");
  M("remote", 1, "Mengambil dan menggabungkan perubahan terbaru dari GitHub:", ["git pull", "git push", "git commit", "git init"], "git pull = git fetch + git merge.");
  M("remote", 1, "Menyalin repository dari GitHub ke komputer:", ["git clone URL", "git copy URL", "git download", "git pull URL pertama kali"], "Clone membawa seluruh riwayat.");
  M("remote", 2, "Beda git fetch dan git pull:", ["fetch hanya mengunduh perubahan tanpa menggabung; pull mengunduh lalu menggabung", "Sama saja", "fetch mengirim", "pull menghapus"], "fetch aman untuk melihat dulu.");
  M("remote", 2, "Push ditolak (rejected) karena remote punya commit yang belum ada di lokal. Langkah benar:", ["git pull (selesaikan konflik bila ada) lalu git push", "git push --force selalu", "Hapus repository", "Buat repository baru"], "Force push bisa menghapus kerja orang lain.");
  M("remote", 2, "Pull Request (PR) di GitHub adalah…", ["Permintaan agar perubahan di cabang ditinjau lalu digabung ke cabang utama", "Perintah git pull", "Laporan bug", "Hapus cabang"], "Tempat diskusi dan code review.");
  M("remote", 2, "Fork di GitHub berarti…", ["Salinan repository orang lain ke akunmu untuk diubah, lalu bisa dikirim PR", "Menghapus repo", "Membuat cabang lokal", "Mengunduh zip"], "Umum di proyek open source.");
  M("remote", 2, "Issue di GitHub dipakai untuk…", ["Mencatat bug, permintaan fitur, dan diskusi tugas", "Menyimpan kode", "Menjalankan program", "Login"], "PR bisa menutup issue otomatis dengan kata 'Fixes #12'.");
  M("remote", 2, "GitHub Pages bisa dipakai untuk…", ["Menayangkan situs statis (HTML/CSS/JS) langsung dari repository", "Menjalankan database", "Server Python", "Email"], "Cocok untuk portofolio statis.");
  M("remote", 2, "Token akses pribadi GitHub sebaiknya…", ["Dirahasiakan, tidak pernah di-commit; cabut bila bocor", "Ditulis di README", "Dibagikan ke teman", "Disimpan di kode"], "Pakai credential manager.");
  M("remote", 3, "Kamu tidak sengaja meng-commit file .env berisi kata sandi dan sudah di-push. Langkah terpenting:", ["Segera ganti (rotate) kata sandi/kunci itu, lalu hapus dari riwayat dan tambahkan ke .gitignore", "Hapus file di commit berikutnya saja", "Biarkan karena repo privat", "Rename file"], "Riwayat lama tetap menyimpan rahasia sampai dibersihkan.");
  I("remote", 1, "Nama remote utama bawaan: ____", ["origin"], "origin.");
  I("remote", 2, "Singkatan permintaan penggabungan di GitHub: ____", ["pr"], "Pull Request.");
  // rapi (+13)
  M("rapi", 1, "Membatalkan perubahan file yang belum di-staging (kembali ke versi commit terakhir):", ["git restore nama_file", "git reset --hard semua", "git delete", "git revert nama_file"], "Perubahan itu hilang, jadi hati-hati.");
  M("rapi", 2, "Mengeluarkan file dari staging tanpa menghapus perubahannya:", ["git restore --staged nama_file", "git rm", "git reset --hard", "git clean"], "File kembali ke status 'modified'.");
  M("rapi", 2, "Memperbaiki pesan commit terakhir yang belum di-push:", ["git commit --amend -m \"pesan baru\"", "git revert", "git reset --hard", "Buat repo baru"], "Jangan amend commit yang sudah dibagikan.");
  M("rapi", 2, "Membatalkan commit yang SUDAH di-push dengan aman:", ["git revert <commit> (membuat commit baru yang membalik perubahan)", "git reset --hard lalu force push", "Hapus repository", "git commit --amend"], "Riwayat tetap utuh dan aman untuk tim.");
  M("rapi", 2, "git reset --soft HEAD~1 akan…", ["Membatalkan commit terakhir tapi perubahannya tetap di staging", "Menghapus semua perubahan", "Mengirim ke GitHub", "Membuat cabang"], "--hard membuang perubahan; gunakan dengan sangat hati-hati.");
  M("rapi", 2, "git stash berguna untuk…", ["Menyimpan sementara perubahan yang belum selesai agar bisa pindah cabang, lalu git stash pop", "Menghapus perubahan", "Commit otomatis", "Push"], "Seperti menaruh pekerjaan di laci.");
  M("rapi", 2, "Mencari commit mana yang memasukkan bug dengan pencarian biner:", ["git bisect", "git blame", "git log", "git find"], "git blame menunjukkan siapa terakhir mengubah setiap baris.");
  M("rapi", 2, "Tag (git tag v1.0) dipakai untuk…", ["Menandai versi rilis tertentu di riwayat", "Membuat cabang", "Menghapus commit", "Login"], "GitHub Releases memakai tag.");
  M("rapi", 2, "Kebiasaan sebelum commit:", ["Cek git status dan git diff agar tidak ikut file yang tidak sengaja", "Langsung git add . tanpa melihat", "Commit sekali sebulan", "Tidak pernah commit"], "Mencegah rahasia atau file besar ikut masuk.");
  M("rapi", 3, "Kenapa git push --force ke main bersama sangat berbahaya?", ["Bisa menimpa dan menghilangkan commit orang lain di remote", "Lebih lambat", "Membuat cabang baru", "Tidak ada risiko"], "Bila perlu, pakai --force-with-lease di cabang sendiri.");
  M("rapi", 2, "Conventional commits seperti 'feat: tambah ekspor CSV' dan 'fix: pembulatan pajak' berguna untuk…", ["Riwayat yang konsisten dan bisa dibuat changelog otomatis", "Wajib Git", "Mempercepat push", "Mengganti PR"], "Banyak tim memakai aturan ini.");
  I("rapi", 1, "Perintah menyimpan sementara perubahan: git ____", ["stash"], "git stash.");
  I("rapi", 2, "Perintah aman membatalkan commit yang sudah dibagikan: git ____", ["revert"], "git revert.");
  D("dasar", `<h4>Siklus harian Git</h4><pre><code>git status                 # apa yang berubah?
git diff                   # lihat detail perubahan
git add file.py            # pilih yang akan disimpan
git commit -m "Tambah validasi email"
git log --oneline          # lihat riwayat</code></pre><p>Bayangkan staging area sebagai keranjang: kamu memilih perubahan mana yang masuk ke satu "foto" riwayat (commit).</p>`);
  D("cabang", `<h4>Alur fitur dengan cabang</h4><pre><code>git switch -c fitur/ekspor-csv     # cabang baru
# ... kerja, commit beberapa kali ...
git switch main
git pull                            # ambil main terbaru
git merge fitur/ekspor-csv          # gabung
git branch -d fitur/ekspor-csv      # bersihkan</code></pre><p>Konflik bukan bencana: buka file, pilih isi yang benar di antara penanda &lt;&lt;&lt;&lt;&lt;&lt;&lt; ======= &gt;&gt;&gt;&gt;&gt;&gt;&gt;, simpan, git add, git commit.</p>`);
  D("remote", `<h4>Lokal ↔ GitHub</h4><table class="mini-pivot"><tr><th>Perintah</th><th>Arah</th><th>Fungsi</th></tr><tr><td>git clone</td><td>GitHub → lokal</td><td>salin pertama kali</td></tr><tr><td>git fetch</td><td>GitHub → lokal</td><td>unduh tanpa gabung</td></tr><tr><td>git pull</td><td>GitHub → lokal</td><td>unduh + gabung</td></tr><tr><td>git push</td><td>lokal → GitHub</td><td>kirim commit</td></tr></table><p>Di tim: buat cabang → push → buka Pull Request → review → merge.</p>`);
  D("rapi", `<h4>Memilih cara membatalkan</h4><table class="mini-pivot"><tr><th>Situasi</th><th>Perintah</th></tr><tr><td>Batalkan perubahan file belum di-add</td><td>git restore file</td></tr><tr><td>Keluarkan dari staging</td><td>git restore --staged file</td></tr><tr><td>Perbaiki commit terakhir (belum push)</td><td>git commit --amend</td></tr><tr><td>Batalkan commit terakhir, simpan perubahan</td><td>git reset --soft HEAD~1</td></tr><tr><td>Batalkan commit yang sudah dibagikan</td><td>git revert &lt;hash&gt;</td></tr><tr><td>Simpan sementara</td><td>git stash / git stash pop</td></tr></table>`);
})();
