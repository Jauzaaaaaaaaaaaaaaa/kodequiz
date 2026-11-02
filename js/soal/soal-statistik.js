// ============ STATISTIK & METRIK BISNIS ============
// 4 bab: statistik deskriptif, metrik bisnis, berpikir kritis (bias & A/B test),
// segmentasi & clustering (terhubung dengan skripsi K-Means vs K-Medoids).

const SOAL_STAT = [
// ---- BAB 1: Statistik deskriptif ----
{k:"deskriptif",t:"mc",lv:1,q:"Pesanan harian sebuah toko selama seminggu: 12, 15, 14, 13, 16, 15, 85 (hari ke-7 ada flash sale). Rata-ratanya (mean) adalah…",o:["± 24,3","15","14","85"],a:0,
 e:"Mean = jumlah ÷ banyak data = 170 ÷ 7 ≈ 24,3. Perhatikan: hampir semua hari hanya 12–16 pesanan, tapi rata-ratanya 24 karena 'ditarik' oleh satu hari flash sale.",
 w:[null,"15 adalah median dan modus, bukan mean.","14 hanya salah satu nilai di data.","85 adalah nilai maksimum (hari flash sale)."]},
{k:"deskriptif",t:"mc",lv:1,q:"Untuk data yang sama (12, 15, 14, 13, 16, 15, 85), MEDIAN-nya adalah…",o:["15","14","24,3","13"],a:0,
 e:"Urutkan dulu: 12, 13, 14, 15, 15, 16, 85. Median = nilai tengah = data ke-4 = 15. Jika jumlah datanya genap, median = rata-rata dua nilai tengah.",
 w:[null,"14 adalah data ke-3 setelah diurutkan.","24,3 adalah mean.","Data harus diurutkan dulu sebelum mencari nilai tengah."]},
{k:"deskriptif",t:"mc",lv:2,q:"Manajer bertanya: 'Biasanya sehari kita dapat berapa pesanan?' Dari data 12, 15, 14, 13, 16, 15, 85, angka yang paling jujur untuk dilaporkan:",o:["Median 15, dengan catatan ada 1 hari flash sale (85)","Mean 24,3","Maksimum 85","Total 170"],a:0,
 e:"Median tahan terhadap outlier, sehingga lebih menggambarkan 'hari biasa'. Mean 24,3 membuat orang mengira tiap hari ada ±24 pesanan, padahal tidak pernah terjadi selain saat flash sale. Laporan yang baik menyebut keduanya beserta konteksnya.",
 w:[null,"Mean terdistorsi oleh satu hari yang ekstrem.","Maksimum hanya terjadi sekali.","Total tidak menjawab 'biasanya per hari'."]},
{k:"deskriptif",t:"mc",lv:1,q:"Modus (mode) dari 12, 15, 14, 13, 16, 15, 85 adalah…",o:["15","85","12","Tidak ada"],a:0,
 e:"Modus = nilai yang paling sering muncul. 15 muncul dua kali. Modus berguna untuk data kategori, misalnya ukuran baju yang paling sering dibeli.",
 w:[null,"85 hanya muncul sekali.","12 hanya muncul sekali.","15 muncul dua kali, jadi modusnya ada."]},
{k:"deskriptif",t:"mc",lv:2,q:"Kamu menemukan outlier (nilai 85) di data pesanan harian. Tindakan yang tepat:",o:["Selidiki penyebabnya dulu. Kalau nyata (flash sale), simpan dan beri catatan atau analisis terpisah; kalau salah input, perbaiki","Langsung hapus karena merusak rata-rata","Abaikan saja","Ganti dengan rata-rata"],a:0,
 e:"Outlier bisa berupa kesalahan data ATAU kejadian penting. Flash sale yang menghasilkan 85 pesanan adalah insight berharga! Menghapusnya tanpa alasan berarti membuang informasi.",
 w:[null,"Menghapus tanpa menyelidiki bisa membuang insight paling penting.","Outlier harus dipahami, bukan diabaikan.","Mengganti nilai nyata dengan rata-rata berarti memalsukan data."]},
{k:"deskriptif",t:"mc",lv:2,q:"Tim A dan Tim B sama-sama rata-rata menjual 10 unit/hari. Standar deviasi Tim A = 1, Tim B = 8. Artinya…",o:["Penjualan Tim A stabil (sekitar 9–11), Tim B naik-turun tajam","Tim B lebih hebat","Tim A menjual lebih banyak","Tidak ada bedanya karena rata-ratanya sama"],a:0,
 e:"Standar deviasi mengukur seberapa jauh data menyebar dari rata-ratanya. Kecil = konsisten, besar = bervariasi. Rata-rata yang sama bisa menyembunyikan perilaku yang sangat berbeda — ini penting untuk perencanaan stok dan target.",
 w:[null,"Variasi tinggi bukan berarti lebih hebat.","Rata-ratanya sama.","Penyebarannya sangat berbeda."]},
{k:"deskriptif",t:"mc",lv:1,q:"Range (jangkauan) dari 12, 15, 14, 13, 16, 15, 85 adalah…",o:["73","85","12","4"],a:0,
 e:"Range = maksimum − minimum = 85 − 12 = 73. Ukuran sebaran yang paling sederhana, tapi sangat terpengaruh outlier. Tanpa hari flash sale, range-nya hanya 4.",
 w:[null,"85 adalah maksimumnya saja.","12 adalah minimumnya saja.","4 adalah range jika outlier 85 tidak ada."]},
{k:"deskriptif",t:"mc",lv:2,q:"Dalam aturan IQR, data dianggap outlier jika > Q3 + 1,5 × IQR atau < Q1 − 1,5 × IQR. IQR adalah…",o:["Q3 − Q1: rentang 50% data yang di tengah","Maksimum − minimum","Mean − median","Rata-rata dari Q1 dan Q3"],a:0,
 e:"Q1 = batas 25% data terbawah, Q3 = batas 75%. IQR (Interquartile Range) = Q3 − Q1. Karena hanya memakai bagian tengah data, IQR tidak mudah terpengaruh outlier. Box plot menggambarkan Q1, median, Q3, dan outlier sekaligus.",
 w:[null,"Itu range.","Itu selisih dua ukuran pusat.","Itu bukan definisi IQR."]},
{k:"deskriptif",t:"mc",lv:2,q:"Berita: 'Rata-rata gaji di perusahaan X Rp25 juta'. Ternyata 1 direktur bergaji Rp500 juta dan 49 staf rata-rata Rp15 juta. Ukuran yang lebih mewakili gaji staf:",o:["Median","Mean","Maksimum","Total"],a:0,
 e:"Data gaji, harga rumah, dan nilai transaksi biasanya miring (skewed): segelintir nilai sangat besar menarik mean ke atas. Median memberi gambaran yang lebih jujur untuk orang 'biasa'.",
 w:[null,"Mean ditarik ke atas oleh gaji direktur.","Maksimum hanya milik satu orang.","Total tidak menggambarkan gaji per orang."]},
{k:"deskriptif",t:"mc",lv:3,q:"Pada data nilai transaksi, mean jauh LEBIH BESAR dari median. Artinya distribusinya…",o:["Miring ke kanan (right-skewed): ada beberapa transaksi bernilai sangat besar","Simetris sempurna","Miring ke kiri","Datanya pasti salah"],a:0,
 e:"Mean > median → ekor panjang ke kanan (nilai besar yang jarang). Ini sangat umum di e-commerce: kebanyakan pembeli belanja kecil, sedikit pembeli belanja besar. Itulah sebabnya segmentasi pelanggan penting.",
 w:[null,"Kalau simetris, mean ≈ median.","Miring ke kiri berarti mean < median.","Ini pola yang wajar di data penjualan."]},
{k:"deskriptif",t:"mc",lv:1,q:"Persentil ke-90 waktu pengiriman = 3 hari. Artinya…",o:["90% pengiriman selesai dalam 3 hari atau kurang","Rata-rata pengiriman 3 hari","90 pengiriman memakan 3 hari","Pengiriman tercepat 3 hari"],a:0,
 e:"Persentil ke-p = nilai yang di bawahnya ada p% data. P90 sering dipakai untuk SLA (janji layanan): '90% pesanan sampai dalam 3 hari'. Median adalah persentil ke-50.",
 w:[null,"Rata-rata adalah mean, bukan persentil.","Persentil berbicara tentang persentase, bukan jumlah pesanan.","Yang tercepat adalah minimum."]},
{k:"deskriptif",t:"is",lv:1,q:"Fungsi Excel untuk mencari nilai tengah: =______(B2:B8)",a:["median"],
 h:"Namanya sama dengan istilah statistiknya.",
 e:"MEDIAN(B2:B8). Fungsi lain: AVERAGE (mean), MODE.SNGL (modus), STDEV.S (standar deviasi sampel), QUARTILE.INC atau PERCENTILE.INC (kuartil & persentil)."},

// ---- BAB 2: Metrik bisnis ----
{k:"metrik",t:"mc",lv:1,tb:"bulanan",q:"Conversion rate bulan Januari adalah…",o:["2%","400%","0,5%","20%"],a:0,
 e:"Conversion rate = pesanan ÷ pengunjung = 400 ÷ 20.000 = 0,02 = 2%. Artinya dari 100 pengunjung, 2 orang membeli.",
 w:[null,"Pembagiannya terbalik.","Hitungannya meleset; cek lagi 400 ÷ 20.000.","Kurang satu nol: 400 ÷ 20.000 = 0,02."]},
{k:"metrik",t:"mc",lv:1,tb:"bulanan",q:"AOV (Average Order Value) bulan Januari adalah…",o:["250.000","5.000","2%","100.000.000"],a:0,
 e:"AOV = pendapatan ÷ jumlah pesanan = 100.000.000 ÷ 400 = 250.000. Artinya rata-rata satu pesanan bernilai Rp250 ribu.",
 w:[null,"Itu pendapatan ÷ pengunjung (pendapatan per pengunjung).","2% adalah conversion rate.","Itu total pendapatan, belum dibagi jumlah pesanan."]},
{k:"metrik",t:"mc",lv:2,tb:"bulanan",q:"Pertumbuhan pendapatan Maret dibanding Februari (MoM growth) adalah…",o:["30%","27%","23%","117%"],a:0,
 e:"Growth = (baru − lama) ÷ lama = (117 − 90) ÷ 90 = 0,30 = 30%. Penyebutnya selalu nilai LAMA (pembanding).",
 w:[null,"27 juta adalah selisih rupiahnya, bukan persentase.","Itu jika dibagi nilai baru: 27 ÷ 117 ≈ 23%. Penyebut harus nilai lama.","117 adalah pendapatan Maret (dalam juta), bukan persentase pertumbuhan."]},
{k:"metrik",t:"mc",lv:2,tb:"bulanan",q:"Conversion rate turun dari 2% (Jan) ke 1,6% (Jun). Pernyataan yang BENAR:",o:["Turun 0,4 poin persentase, atau turun 20% secara relatif","Turun 0,4%","Turun 20 poin persentase","Turun 1,6%"],a:0,
 e:"Bedakan poin persentase (selisih langsung: 2 − 1,6 = 0,4 pp) dan persen relatif (0,4 ÷ 2 = 20%). Kalimat 'turun 0,4%' ambigu dan sering membuat salah paham di rapat.",
 w:[null,"Ambigu — 0,4 itu poin persentase, bukan persen relatif.","20 adalah persen relatif, bukan poin.","1,6% adalah nilai akhirnya, bukan penurunannya."]},
{k:"metrik",t:"mc",lv:2,q:"Pendapatan toko online bisa dipecah menjadi tiga 'pengungkit' (driver). Rumus yang benar:",o:["Pendapatan = Pengunjung × Conversion rate × AOV","Pendapatan = Pengunjung + Pesanan","Pendapatan = AOV ÷ Conversion rate","Pendapatan = Pesanan × Pengunjung"],a:0,
 e:"Pengunjung × konversi = jumlah pesanan; pesanan × AOV = pendapatan. Cek Juni: 32.000 × 1,6% × 275.000 = 512 × 275.000 = 140,8 juta ✓. Memecah metrik seperti ini membantu menemukan APA yang sebenarnya berubah.",
 w:[null,"Menjumlah orang dan pesanan tidak menghasilkan rupiah.","Satuannya tidak cocok.","Pesanan × pengunjung tidak bermakna."]},
{k:"metrik",t:"mc",lv:3,tb:"bulanan",q:"Juni: konversi turun (1,8% → 1,6%), tapi pendapatan tetap naik 4,3% dibanding Mei. Penyebabnya:",o:["Pengunjung naik ±6,7% dan AOV naik 10% (250.000 → 275.000), menutupi turunnya konversi","Konversi sebenarnya naik","Data pasti salah","Karena jumlah hari di Juni lebih banyak"],a:0,
 e:"Pakai pohon driver: 1,067 (pengunjung) × 0,889 (konversi) × 1,10 (AOV) ≈ 1,043 → naik 4,3%. Insight untuk manajemen: pendapatan naik karena orang belanja lebih besar per pesanan, tapi lebih sedikit pengunjung yang jadi pembeli — konversi perlu diperbaiki.",
 w:[null,"Konversi turun: 540 ÷ 30.000 = 1,8% → 512 ÷ 32.000 = 1,6%.","Datanya konsisten; pohon driver menjelaskannya.","Juni justru punya 30 hari, lebih sedikit daripada Mei (31)."]},
{k:"metrik",t:"mc",lv:2,q:"Pendapatan Rp100 juta, harga pokok penjualan (HPP) Rp70 juta. Gross margin-nya:",o:["30%","70%","43%","Rp30"],a:0,
 e:"Gross margin = (pendapatan − HPP) ÷ pendapatan = 30 ÷ 100 = 30%. Pendapatan besar belum tentu menguntungkan — produk berharga tinggi bisa saja bermargin tipis.",
 w:[null,"70% adalah porsi HPP terhadap pendapatan.","Itu 30 ÷ 70 (markup terhadap biaya), bukan margin.","Gross margin dinyatakan dalam persen; laba kotornya Rp30 juta."]},
{k:"metrik",t:"mc",lv:2,q:"Januari ada 100 pelanggan aktif. Di Februari, 80 di antaranya masih membeli. Retention rate dan churn rate-nya:",o:["Retention 80%, churn 20%","Retention 20%, churn 80%","Retention 80%, churn 80%","Retention 100%, churn 0%"],a:0,
 e:"Retention = yang bertahan ÷ awal = 80%. Churn = yang hilang ÷ awal = 20%. Mempertahankan pelanggan biasanya lebih murah daripada mencari pelanggan baru, jadi kedua metrik ini sering ada di dashboard.",
 w:[null,"Terbalik.","Retention + churn = 100%.","20 pelanggan tidak kembali."]},
{k:"metrik",t:"mc",lv:2,q:"Biaya iklan bulan ini Rp10 juta dan menghasilkan 200 pelanggan baru. CAC (Customer Acquisition Cost)-nya:",o:["Rp50.000","Rp200.000","Rp2.000","Rp10.000.000"],a:0,
 e:"CAC = biaya akuisisi ÷ jumlah pelanggan baru = 10.000.000 ÷ 200 = 50.000. Bisnis sehat jika nilai pelanggan sepanjang hubungannya (LTV/CLV) jauh di atas CAC — banyak perusahaan memakai patokan kasar LTV minimal ±3× CAC.",
 w:[null,"Hitungan meleset satu digit.","Pembagiannya keliru.","Itu total biayanya, belum dibagi per pelanggan."]},
{k:"metrik",t:"mc",lv:2,q:"Toko pakaian muslim selalu ramai menjelang Lebaran. Untuk menilai apakah penjualan bulan Lebaran tahun ini BAGUS, pembanding terbaik:",o:["Year-over-Year (YoY): bulan Lebaran tahun lalu","Month-over-Month (MoM): bulan sebelumnya","Rata-rata semua bulan","Bulan dengan penjualan terendah"],a:0,
 e:"Bisnis musiman pasti melonjak dibanding bulan sebelumnya — itu bukan prestasi. YoY membandingkan musim yang sama sehingga lebih adil. (Perhatikan juga bahwa tanggal Lebaran bergeser tiap tahun, jadi kadang perlu menyamakan periodenya.)",
 w:[null,"MoM akan selalu terlihat naik drastis karena efek musim.","Rata-rata tahunan mencampur musim ramai dan sepi.","Membandingkan dengan bulan terburuk membuat semuanya tampak bagus."]},
{k:"metrik",t:"mc",lv:1,tb:"bulanan",q:"Total pendapatan Januari–Juni adalah…",o:["702,8 juta","702 juta","140,8 juta","117,1 juta"],a:0,
 e:"100 + 90 + 117 + 120 + 135 + 140,8 = 702,8 juta. Rata-rata per bulan ≈ 117,1 juta.",
 w:[null,"Juni bernilai 140,8 juta, jadi ada tambahan 0,8 juta.","Itu pendapatan Juni saja.","Itu rata-rata per bulan, bukan total."]},
{k:"metrik",t:"is",lv:1,q:"Singkatan untuk rata-rata nilai per pesanan: ___ (Average Order Value)",a:["aov"],
 h:"Tiga huruf, huruf depan dari Average Order Value.",
 e:"AOV = pendapatan ÷ jumlah pesanan. Cara menaikkan AOV: bundling, gratis ongkir dengan minimal belanja, dan rekomendasi produk."},

// ---- BAB 3: Berpikir kritis — korelasi, bias, A/B test ----
{k:"kritis",t:"mc",lv:1,q:"Data menunjukkan penjualan es krim dan kasus tenggelam naik bersamaan. Kesimpulan yang tepat:",o:["Keduanya berkorelasi, kemungkinan karena faktor ketiga (cuaca panas/liburan) — bukan es krim yang menyebabkan tenggelam","Es krim menyebabkan tenggelam","Tenggelam menyebabkan orang membeli es krim","Datanya pasti salah"],a:0,
 e:"Korelasi ≠ kausalitas. Variabel ketiga yang memengaruhi keduanya disebut confounder. Pertanyaan wajib sebelum menyimpulkan sebab-akibat: adakah faktor lain yang bisa menjelaskan keduanya?",
 w:[null,"Tidak ada mekanisme masuk akal; ini contoh klasik korelasi palsu.","Arah sebab-akibat ini juga tidak masuk akal.","Datanya bisa benar; yang keliru adalah kesimpulannya."]},
{k:"kritis",t:"mc",lv:2,q:"'Pengguna aplikasi mobile kita belanja 2× lebih banyak daripada pengguna web. Jadi, aplikasi membuat orang belanja lebih banyak.' Kelemahan argumen ini:",o:["Bisa terbalik: pelanggan yang sudah setia/sering belanja cenderung meng-install aplikasi (seleksi diri)","Tidak ada kelemahan","Aplikasi mobile pasti lebih buruk","Harus memakai pie chart"],a:0,
 e:"Orang memilih sendiri memakai aplikasi, jadi kedua kelompok tidak sebanding sejak awal. Untuk membuktikan efek aplikasi, perlu eksperimen (misal A/B test promosi aplikasi) atau membandingkan perilaku pelanggan yang sama sebelum dan sesudah install.",
 w:[null,"Ada masalah serius: kelompoknya tidak acak.","Argumennya tidak membuktikan aplikasi lebih buruk juga.","Jenis grafik tidak memperbaiki logika."]},
{k:"kritis",t:"mc",lv:2,q:"Survei kepuasan dikirim lewat email, dan 90% yang MEMBALAS mengaku puas. Masalah utamanya:",o:["Bias seleksi — yang membalas mungkin bukan gambaran semua pelanggan (yang kecewa bisa saja sudah pergi dan tidak membuka email)","Tidak ada masalah, 90% sudah tinggi","Email terlalu modern","Harusnya ditampilkan dengan grafik 3D"],a:0,
 e:"Sampel yang tidak mewakili populasi menghasilkan kesimpulan yang keliru, sebanyak apa pun datanya. Laporkan juga response rate-nya (berapa yang membalas dari yang dikirimi).",
 w:[null,"Angka tinggi dari sampel yang bias tetap bias.","Media bukan masalahnya; siapa yang membalas yang jadi masalah.","Grafik tidak memperbaiki bias sampel."]},
{k:"kritis",t:"mc",lv:2,q:"'Semua startup sukses yang diberitakan pendirinya drop-out kuliah, jadi drop-out meningkatkan peluang sukses.' Ini contoh…",o:["Survivorship bias — hanya melihat yang berhasil, tidak melihat yang gagal","Korelasi sempurna","A/B test","Statistik deskriptif yang benar"],a:0,
 e:"Ribuan pendiri yang drop-out lalu gagal tidak pernah diberitakan. Di bisnis: menganalisis hanya pelanggan yang masih aktif (dan melupakan yang sudah churn) juga survivorship bias.",
 w:[null,"Tidak ada data kelompok pembanding sama sekali.","A/B test membandingkan kelompok yang dibagi secara acak.","Kesimpulannya keliru karena datanya hanya dari yang selamat."]},
{k:"kritis",t:"mc",lv:1,q:"Cara melakukan A/B test yang benar untuk dua desain halaman checkout:",o:["Bagi pengunjung SECARA ACAK ke desain A atau B pada periode yang SAMA, lalu bandingkan conversion rate-nya","Pakai desain A minggu ini, desain B minggu depan","Tanya pendapat bos","Tampilkan desain B hanya ke pelanggan setia"],a:0,
 e:"Acak + bersamaan memastikan satu-satunya perbedaan antar kelompok adalah desainnya. Jika berbeda minggu, hasil bisa dipengaruhi hari gajian, promo, atau cuaca.",
 w:[null,"Perbedaan minggu mencampuradukkan efek desain dengan faktor lain.","Opini bukan data.","Pelanggan setia memang lebih mudah membeli — perbandingannya jadi tidak adil."]},
{k:"kritis",t:"mc",lv:2,q:"A/B test dengan 20 pengunjung per versi: A mendapat 2 pesanan, B mendapat 4. Kesimpulan yang bijak:",o:["Belum bisa disimpulkan — sampelnya terlalu kecil, selisih ini bisa terjadi karena kebetulan","B pasti 2× lebih baik","A harus langsung dihapus","Hasilnya signifikan karena 4 > 2"],a:0,
 e:"Dengan sampel kecil, selisih 2 pesanan sangat mungkin hanya kebetulan. Tentukan ukuran sampel sebelum tes dimulai dan jalankan sampai cukup data (biasanya ribuan pengunjung untuk konversi beberapa persen).",
 w:[null,"'2× lebih baik' dari 2 vs 4 pesanan sangat rapuh.","Terlalu dini untuk mengambil keputusan.","Signifikansi tidak ditentukan hanya dari angka mana yang lebih besar."]},
{k:"kritis",t:"mc",lv:3,q:"Hasil A/B test: p-value = 0,03. Interpretasi yang BENAR:",o:["Jika sebenarnya tidak ada perbedaan antara A dan B, peluang mendapat selisih sebesar ini (atau lebih) hanya karena kebetulan sekitar 3%","Peluang B lebih baik adalah 97%","Selisih conversion rate-nya 3%","B pasti lebih baik"],a:0,
 e:"p-value kecil (umumnya < 0,05) berarti hasil seperti ini jarang terjadi jika memang tidak ada perbedaan, sehingga kita menyimpulkan perbedaannya 'signifikan secara statistik'. p-value BUKAN peluang hipotesis benar, dan tidak menyatakan seberapa BESAR efeknya.",
 w:[null,"Salah kaprah paling umum; p-value tidak menyatakan peluang B lebih baik.","p-value bukan ukuran besarnya selisih.","Statistik tidak memberi kepastian mutlak."]},
{k:"kritis",t:"mc",lv:3,q:"Desain B menang di HP (21% vs 20%) DAN di laptop (5,5% vs 5%), tapi kalah secara total (8,6% vs 15,7%). Bagaimana mungkin?",o:["Paradoks Simpson: B lebih banyak ditampilkan ke pengguna laptop (yang konversinya rendah), sehingga totalnya terseret turun","Hitungannya pasti salah","B sebenarnya lebih buruk di semua segmen","Total selalu lebih akurat daripada segmen"],a:0,
 e:"A: HP 200/1.000 + laptop 20/400 = 220/1.400 = 15,7%. B: HP 63/300 + laptop 66/1.200 = 129/1.500 = 8,6%. Komposisi kelompoknya berbeda! Pelajaran: selalu cek apakah pembagian kelompok seimbang, dan lihat data per segmen sebelum menyimpulkan dari total.",
 w:[null,"Angkanya benar; inilah paradoksnya.","B unggul di setiap segmen.","Total bisa menyesatkan jika komposisi kelompok tidak sama."]},
{k:"kritis",t:"mc",lv:2,q:"Confounding variable adalah…",o:["Faktor ketiga yang memengaruhi dua variabel sekaligus sehingga keduanya tampak berhubungan","Variabel yang nilainya selalu nol","Kolom yang berisi NULL","Nama lain dari outlier"],a:0,
 e:"Contoh: daerah dengan banyak toko juga punya penjualan online tinggi — mungkin karena keduanya dipengaruhi jumlah penduduk dan pendapatan warga, bukan karena toko fisik mendorong penjualan online.",
 w:[null,"Bukan soal nilainya nol.","NULL adalah data kosong.","Outlier adalah nilai ekstrem."]},
{k:"kritis",t:"mc",lv:1,q:"Sebelum mempercayai klaim 'Data menunjukkan…' di sebuah presentasi, pertanyaan pertama yang sebaiknya kamu ajukan:",o:["Datanya dari mana, berapa banyak, dan periode kapan?","Grafiknya pakai warna apa?","Siapa yang membuat slide-nya?","Berapa halaman presentasinya?"],a:0,
 e:"Sumber, ukuran sampel, dan periode menentukan seberapa bisa dipercaya sebuah kesimpulan. Kebiasaan bertanya seperti ini membuat analis dipercaya — dan melindungi perusahaan dari keputusan yang keliru.",
 w:[null,"Warna tidak memengaruhi kebenaran data.","Siapa pembuatnya kurang penting dibanding dari mana datanya.","Panjang presentasi tidak berhubungan dengan kualitas data."]},

// ---- BAB 4: Segmentasi & clustering (skripsimu) ----
{k:"segmentasi",t:"mc",lv:1,q:"Tujuan bisnis segmentasi pelanggan adalah…",o:["Mengelompokkan pelanggan yang perilakunya mirip agar strategi (promo, layanan) bisa disesuaikan per kelompok","Mengurutkan pelanggan berdasarkan nama","Menghapus pelanggan yang jarang belanja","Menghitung total penjualan"],a:0,
 e:"Promo yang sama untuk semua orang membuang anggaran. Pelanggan setia butuh program loyalitas; pelanggan yang lama tidak belanja butuh kampanye 'kami rindu kamu'. Kalimat ini adalah inti pembuka portofolio skripsimu.",
 w:[null,"Mengurutkan bukan mengelompokkan berdasarkan perilaku.","Segmentasi bukan untuk membuang pelanggan.","Total penjualan cukup dihitung dengan SUM."]},
{k:"segmentasi",t:"mc",lv:1,q:"RFM adalah singkatan dari…",o:["Recency, Frequency, Monetary","Revenue, Funnel, Margin","Rating, Feedback, Marketing","Region, Format, Media"],a:0,
 e:"Recency = berapa lama sejak pembelian terakhir. Frequency = seberapa sering membeli. Monetary = total nilai belanja. Tiga angka ini adalah fitur klasik untuk segmentasi pelanggan e-commerce, termasuk sebagai input clustering.",
 w:[null,"Bukan; walau istilah-istilah ini juga umum di bisnis.","Bukan.","Bukan."]},
{k:"segmentasi",t:"mc",lv:2,q:"Dalam RFM, nilai Recency yang LEBIH KECIL berarti…",o:["Lebih baik — pelanggan baru saja berbelanja","Lebih buruk — pelanggan jarang berbelanja","Pelanggan belanja lebih sedikit","Tidak ada artinya"],a:0,
 e:"Recency diukur dalam hari sejak pembelian terakhir. 3 hari = masih 'hangat'; 300 hari = hampir pasti sudah pergi. Perhatikan arahnya berlawanan dengan F dan M (yang semakin besar semakin baik) — ini perlu dijelaskan saat menginterpretasi cluster.",
 w:[null,"Jarang belanja diukur oleh Frequency.","Jumlah belanja diukur oleh Monetary.","Recency sangat penting untuk memprediksi pelanggan yang akan pergi."]},
{k:"segmentasi",t:"mc",lv:2,q:"Kenapa data perlu dinormalisasi sebelum K-Means/K-Medoids?",o:["Fitur berskala besar (Monetary: jutaan rupiah) akan mendominasi perhitungan jarak dibanding fitur berskala kecil (Frequency: puluhan)","Supaya datanya jadi lebih sedikit","Agar algoritma tidak butuh nilai k","Normalisasi tidak diperlukan"],a:0,
 e:"Clustering mengelompokkan berdasarkan JARAK. Selisih Rp1.000.000 akan 'terlihat' jauh lebih besar daripada selisih 10 kali belanja, padahal belum tentu lebih penting. Normalisasi (min-max ke 0–1, atau z-score) menyamakan skalanya.",
 w:[null,"Jumlah baris tidak berubah.","Nilai k tetap harus ditentukan.","Tanpa normalisasi, hasil cluster hampir hanya mencerminkan Monetary."]},
{k:"segmentasi",t:"mc",lv:2,q:"Total belanja 4 pelanggan: 750.000; 4.300.000; 7.600.000; 9.450.000. Nilai 4.300.000 setelah normalisasi min-max adalah…",o:["± 0,41","± 0,46","4,3","0,5"],a:0,
 e:"Min-max: (x − min) ÷ (max − min) = (4.300.000 − 750.000) ÷ (9.450.000 − 750.000) = 3.550.000 ÷ 8.700.000 ≈ 0,41. Hasilnya selalu di antara 0 (minimum) dan 1 (maksimum).",
 w:[null,"Itu 4,3 ÷ 9,45 — lupa mengurangi nilai minimum.","Itu nilai aslinya dalam juta, belum dinormalisasi.","0,5 hanya kalau nilainya tepat di tengah min dan max."]},
{k:"segmentasi",t:"mc",lv:2,q:"Pada K-Means, pusat cluster (centroid) adalah…",o:["Rata-rata (mean) dari semua anggota cluster — bisa berupa titik yang tidak ada di data","Data asli yang paling di tengah","Data dengan nilai terbesar","Data pertama di tabel"],a:0,
 e:"K-Means memperbarui centroid sebagai rata-rata anggota, lalu mengelompokkan ulang data ke centroid terdekat, berulang sampai stabil. Karena memakai rata-rata, centroid mudah tertarik oleh outlier.",
 w:[null,"Itu medoid — dipakai K-Medoids.","Nilai terbesar bukan pusat cluster.","Urutan data tidak menentukan centroid akhir."]},
{k:"segmentasi",t:"mc",lv:2,q:"Pada K-Medoids, pusat cluster (medoid) adalah…",o:["Data ASLI di dalam cluster yang total jaraknya ke anggota lain paling kecil","Rata-rata semua anggota","Titik acak di luar data","Median dari Recency saja"],a:0,
 e:"Karena medoid selalu berupa data nyata dan tidak dihitung dari rata-rata, K-Medoids lebih TAHAN terhadap outlier. Kelemahannya: komputasinya lebih berat untuk data yang sangat besar.",
 w:[null,"Itu centroid pada K-Means.","Medoid selalu salah satu data yang ada.","Medoid memakai semua fitur, bukan satu fitur."]},
{k:"segmentasi",t:"mc",lv:3,q:"Data e-commerce berisi beberapa pembeli grosir dengan belanja SANGAT besar (outlier). Algoritma mana yang cenderung lebih stabil, dan kenapa?",o:["K-Medoids, karena pusat cluster-nya data nyata yang tidak ikut tertarik oleh nilai ekstrem","K-Means, karena rata-rata selalu akurat","Keduanya pasti identik","Tidak bisa dibandingkan"],a:0,
 e:"Rata-rata (dasar K-Means) sensitif terhadap outlier — ingat bab statistik deskriptif. Jawaban seperti ini menunjukkan pewawancara bahwa kamu paham ALASAN di balik hasil skripsimu, bukan sekadar menjalankan kode. (Jawaban akhirnya tetap harus didukung metrik evaluasi pada datamu.)",
 w:[null,"Rata-rata justru mudah terdistorsi nilai ekstrem.","Hasilnya bisa berbeda cukup jauh pada data berpencilan.","Bisa dibandingkan dengan metrik seperti Silhouette atau Davies-Bouldin."]},
{k:"segmentasi",t:"mc",lv:2,q:"Pada Elbow Method, jumlah cluster (k) dipilih di titik…",o:["'Siku' — saat penurunan WCSS/inertia mulai melandai ketika k ditambah","Saat WCSS bernilai 0","k terbesar yang dicoba","Saat grafik naik paling tajam"],a:0,
 e:"Menambah k selalu menurunkan WCSS (jarak dalam cluster). Di titik siku, menambah cluster tidak lagi memberi perbaikan berarti. Karena siku kadang tidak jelas, biasanya dikonfirmasi dengan Silhouette score dan pertimbangan bisnis (apakah segmennya bisa ditindaklanjuti).",
 w:[null,"WCSS 0 terjadi jika setiap data menjadi cluster sendiri — tidak berguna.","k terbesar membuat segmen terlalu banyak untuk dikelola.","Grafik elbow menurun, bukan naik."]},
{k:"segmentasi",t:"mc",lv:2,q:"Silhouette score berkisar dari −1 sampai 1. Nilai yang menandakan cluster BAIK:",o:["Mendekati 1","Mendekati 0","Mendekati −1","Tepat 0,5 selalu"],a:0,
 e:"Mendekati 1: data dekat dengan cluster-nya sendiri dan jauh dari cluster lain. Sekitar 0: cluster saling tumpang tindih. Negatif: banyak data yang kemungkinan salah cluster.",
 w:[null,"Sekitar 0 berarti cluster saling tumpang tindih.","Negatif berarti banyak data salah tempat.","Tidak ada nilai 'selalu' yang ideal."]},
{k:"segmentasi",t:"mc",lv:2,q:"Davies-Bouldin Index (DBI): nilai yang lebih baik adalah…",o:["Lebih KECIL","Lebih besar","Tepat 1","Negatif"],a:0,
 e:"DBI mengukur rasio sebaran di dalam cluster terhadap jarak antar cluster. Semakin kecil, semakin rapat dan terpisah cluster-nya. Kebalikan dari Silhouette (yang semakin besar semakin baik) — pastikan kamu menyebutkan arah ini dengan benar saat interview.",
 w:[null,"Itu arah Silhouette, bukan DBI.","Tidak ada nilai ideal tepat 1.","DBI tidak bernilai negatif."]},
{k:"segmentasi",t:"mc",lv:3,q:"Pewawancara non-teknis bertanya: 'Hasil skripsimu apa gunanya buat bisnis?' Jawaban terbaik:",o:["\"Saya membagi pelanggan jadi beberapa kelompok, misalnya pelanggan setia yang sering dan besar belanjanya, dan pelanggan yang lama tidak kembali. Tiap kelompok butuh promo berbeda, jadi anggaran marketing lebih tepat sasaran.\"","\"Saya membandingkan K-Means dan K-Medoids dengan Davies-Bouldin Index pada data yang dinormalisasi min-max.\"","\"Skripsi saya mendapat nilai A.\"","\"Clustering adalah unsupervised learning.\""],a:0,
 e:"Beri nama segmen dengan bahasa bisnis, sebutkan ciri dan aksinya. Detail teknis disiapkan untuk pertanyaan lanjutan dari interviewer teknis. Rumus: masalah → apa yang kamu lakukan → hasil → dampak.",
 w:[null,"Benar secara teknis, tapi tidak menjawab 'apa gunanya buat bisnis'.","Nilai tidak menjelaskan manfaat.","Definisi tidak menjawab pertanyaan."]},
{k:"segmentasi",t:"is",lv:1,q:"Pada K-Means dan K-Medoids, jumlah cluster harus ditentukan di awal dan dilambangkan dengan huruf ___",a:["k"],
 h:"Ada di nama algoritmanya.",
 e:"k = jumlah cluster. Dipilih dengan Elbow, Silhouette, atau metrik lain, ditambah pertimbangan bisnis: 3–5 segmen biasanya cukup untuk ditindaklanjuti tim marketing."}
];

const MATERI_STAT = [
{k:"deskriptif",judul:"Statistik Deskriptif — Membaca Data dengan Jujur",materi:`
<p>Statistik deskriptif meringkas data dengan beberapa angka. Kuncinya: memilih ringkasan yang <b>jujur</b>.</p>
<p>Contoh: pesanan harian seminggu — <code>12, 15, 14, 13, 16, 15, 85</code> (hari ke-7 ada flash sale).</p>
<table class="mini-pivot"><tr><th>Ukuran</th><th>Cara hitung</th><th>Hasil</th></tr>
<tr><td>Mean (rata-rata)</td><td>170 ÷ 7</td><td>24,3</td></tr>
<tr><td>Median (nilai tengah)</td><td>urutkan → data ke-4</td><td>15</td></tr>
<tr><td>Modus</td><td>paling sering muncul</td><td>15</td></tr>
<tr><td>Range</td><td>max − min</td><td>73</td></tr></table>
<p>Satu outlier menarik mean dari ±15 ke 24,3. <b>Median tahan outlier</b>, jadi lebih cocok untuk "hari biasa", gaji, harga rumah, dan nilai transaksi.</p>
<p><b>Sebaran data:</b></p>
<ul>
<li><b>Standar deviasi</b>: kecil = konsisten, besar = naik-turun. Rata-rata yang sama bisa punya perilaku sangat berbeda.</li>
<li><b>Kuartil & IQR</b>: Q1 (25%), median (50%), Q3 (75%). IQR = Q3 − Q1. Outlier: di luar Q1 − 1,5×IQR atau Q3 + 1,5×IQR.</li>
<li><b>Persentil</b>: P90 = 3 hari → 90% pengiriman selesai ≤ 3 hari.</li>
</ul>
<p>Mean &gt; median → data <b>miring ke kanan</b> (ada nilai sangat besar yang jarang). Ini sangat umum di data penjualan.</p>
<div class="catatan">🛠️ Di Excel: <code>AVERAGE</code>, <code>MEDIAN</code>, <code>MODE.SNGL</code>, <code>STDEV.S</code>, <code>QUARTILE.INC</code>, <code>PERCENTILE.INC</code>. Outlier jangan langsung dihapus — selidiki dulu, bisa jadi itu insight terpenting.</div>`},

{k:"metrik",judul:"Metrik Bisnis yang Wajib Dikuasai Analis",materi:`
{{tb:bulanan}}
<table class="mini-pivot"><tr><th>Metrik</th><th>Rumus</th><th>Contoh (Jan)</th></tr>
<tr><td>Conversion rate</td><td>pesanan ÷ pengunjung</td><td>400 ÷ 20.000 = 2%</td></tr>
<tr><td>AOV</td><td>pendapatan ÷ pesanan</td><td>100 jt ÷ 400 = 250.000</td></tr>
<tr><td>Growth (MoM/YoY)</td><td>(baru − lama) ÷ lama</td><td>Mar vs Feb = 30%</td></tr>
<tr><td>Gross margin</td><td>(pendapatan − HPP) ÷ pendapatan</td><td>100 jt, HPP 70 jt → 30%</td></tr>
<tr><td>Retention / churn</td><td>bertahan ÷ awal / hilang ÷ awal</td><td>80% / 20%</td></tr>
<tr><td>CAC</td><td>biaya akuisisi ÷ pelanggan baru</td><td>10 jt ÷ 200 = 50.000</td></tr></table>
<p><b>Pohon driver</b> — cara analis menjelaskan <i>kenapa</i> angka berubah:</p>
<pre><code>Pendapatan = Pengunjung × Conversion rate × AOV
Juni vs Mei:   +6,7%   ×     −11,1%      × +10%   ≈ +4,3%</code></pre>
<p>Pendapatan naik, tapi konversi turun — itulah insight yang perlu dilaporkan.</p>
<div class="catatan">⚠️ <b>Persen vs poin persentase:</b> konversi 2% → 1,6% = turun <b>0,4 poin persentase</b> = turun <b>20% relatif</b>. Sebutkan dengan jelas yang mana. Untuk bisnis musiman (Ramadan/Lebaran), bandingkan <b>YoY</b>, bukan MoM.</div>`},

{k:"kritis",judul:"Berpikir Kritis: Korelasi, Bias & A/B Test",materi:`
<p>Analis yang baik bukan hanya pandai menghitung, tapi juga pandai <b>meragukan kesimpulan yang terlalu cepat</b>.</p>
<ul>
<li><b>Korelasi ≠ kausalitas.</b> Es krim & kasus tenggelam naik bersamaan karena cuaca panas (<i>confounder</i>).</li>
<li><b>Seleksi diri / arah terbalik.</b> Pengguna aplikasi belanja lebih banyak — atau pelanggan setia yang memilih install aplikasi?</li>
<li><b>Bias sampel.</b> Hanya yang membalas survei yang terhitung.</li>
<li><b>Survivorship bias.</b> Hanya melihat yang berhasil/masih aktif.</li>
<li><b>Paradoks Simpson.</b> Menang di tiap segmen, kalah di total — karena komposisi kelompok berbeda.</li>
</ul>
<p><b>A/B test yang benar:</b></p>
<ol>
<li>Tentukan satu metrik utama (misal conversion rate checkout).</li>
<li>Bagi pengunjung <b>secara acak</b> ke A dan B, pada <b>periode yang sama</b>.</li>
<li>Tentukan ukuran sampel <b>sebelum</b> mulai; jangan berhenti saat hasilnya "kelihatan bagus".</li>
<li>Uji signifikansi: p-value &lt; 0,05 → selisihnya kecil kemungkinan hanya kebetulan.</li>
</ol>
<div class="catatan">❗ p-value <b>bukan</b> "peluang B lebih baik", dan bukan ukuran besarnya efek. Selalu laporkan juga besarnya selisih (misal +0,3 poin persentase) dan apakah itu bermakna untuk bisnis.</div>`},

{k:"segmentasi",judul:"Segmentasi & Clustering — Kuasai Skripsimu",materi:`
<p>Bab ini menyiapkanmu menjelaskan skripsi <b>K-Means vs K-Medoids</b> dengan percaya diri, baik ke interviewer teknis maupun non-teknis.</p>
<p><b>1. Fitur RFM</b> — Recency (hari sejak belanja terakhir; <i>kecil = baik</i>), Frequency, Monetary.</p>
<p><b>2. Normalisasi</b> — clustering memakai jarak, jadi skala harus disamakan:</p>
<pre><code>min-max:  (x − min) / (max − min)   → 0 sampai 1
z-score:  (x − mean) / std           → rata-rata 0, std 1</code></pre>
<p><b>3. Algoritma</b></p>
<table class="mini-pivot"><tr><th></th><th>K-Means</th><th>K-Medoids</th></tr>
<tr><td>Pusat cluster</td><td>centroid = rata-rata (titik virtual)</td><td>medoid = data asli paling "tengah"</td></tr>
<tr><td>Terhadap outlier</td><td>sensitif</td><td>lebih tahan</td></tr>
<tr><td>Kecepatan</td><td>cepat</td><td>lebih berat</td></tr></table>
<p><b>4. Memilih k & mengevaluasi</b></p>
<ul>
<li><b>Elbow</b>: titik "siku" pada grafik WCSS.</li>
<li><b>Silhouette</b>: −1 s.d. 1, <b>semakin besar semakin baik</b>.</li>
<li><b>Davies-Bouldin Index</b>: <b>semakin kecil semakin baik</b>.</li>
</ul>
<p><b>5. Terjemahkan ke bisnis</b> — beri nama dan aksi:</p>
<pre><code>Pelanggan Setia   : R kecil, F & M tinggi → program loyalitas
Potensial         : R kecil, F rendah     → voucher pembelian kedua
Hampir Hilang     : R besar               → kampanye win-back</code></pre>
<div class="catatan">🎤 <b>Latihan interview:</b> jelaskan skripsimu dalam 60 detik dengan urutan masalah → data → metode (1 kalimat) → hasil → rekomendasi. Lalu siapkan jawaban untuk "kenapa normalisasi?", "kenapa K-Medoids lebih cocok/tidak cocok untuk datamu?", dan "bagaimana memilih k?".</div>`}
];
