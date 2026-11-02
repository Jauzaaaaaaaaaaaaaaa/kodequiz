// ============ DASHBOARD & BI — Power BI / Looker Studio ============
// 4 bab. Dataset: penjualan, bulanan (js/data/dataset.js)

const SOAL_BI = [
// ---- BAB 1: Dashboard, KPI, dimensi & metrik ----
{k:"bidasar",t:"mc",lv:1,q:"Langkah PERTAMA membuat dashboard yang berguna adalah…",o:["Menentukan pertanyaan bisnis yang harus dijawab dan siapa yang akan membacanya","Memilih template dengan warna paling menarik","Memasukkan sebanyak mungkin grafik","Belajar semua fitur Power BI dulu"],a:0,
 e:"Dashboard adalah alat untuk mengambil keputusan. Mulai dari pertanyaan seperti 'Sales mana yang tertinggal dari target bulan ini?' dan 'Siapa pembacanya — direktur atau tim sales?'. Pertanyaan menentukan metrik, metrik menentukan grafik.",
 w:[null,"Warna menarik tidak berguna jika dashboard tidak menjawab apa pun.","Terlalu banyak grafik membuat pembaca bingung harus melihat ke mana.","Kamu cukup menguasai fitur yang dibutuhkan untuk menjawab pertanyaannya."]},
{k:"bidasar",t:"mc",lv:1,q:"KPI (Key Performance Indicator) adalah…",o:["Sedikit angka utama yang mengukur apakah tujuan bisnis tercapai, misalnya pendapatan vs target","Semua kolom yang ada di database","Nama lain untuk grafik batang","Laporan keuangan tahunan"],a:0,
 e:"KPI dipilih karena terhubung langsung dengan tujuan. Untuk tim sales: pendapatan vs target, jumlah deal, conversion rate. Biasanya cukup 3–5 KPI di bagian atas dashboard.",
 w:[null,"KPI justru hasil seleksi — hanya yang paling penting.","KPI adalah angka; grafik hanya cara menampilkannya.","Laporan tahunan bisa memuat KPI, tapi KPI bukan laporan."]},
{k:"bidasar",t:"mc",lv:1,tb:"penjualan",q:"Di data penjualan, kolom 'Wilayah' disebut…",o:["Dimensi — kategori untuk mengelompokkan/memfilter","Metrik — angka yang dihitung","KPI","Measure"],a:0,
 e:"DIMENSI = 'per apa' (wilayah, sales, produk, tanggal). METRIK/MEASURE = 'berapa' (total penjualan, jumlah transaksi, rata-rata). Kalimat 'Total penjualan PER wilayah' → metrik = total penjualan, dimensi = wilayah. Di Looker Studio disebut Dimension & Metric; di Power BI kolom & measure.",
 w:[null,"Wilayah tidak dijumlah atau dirata-rata; ia dipakai untuk mengelompokkan.","KPI adalah metrik penting, sedangkan wilayah adalah kategori.","Measure = perhitungan angka, seperti SUM(Total)."]},
{k:"bidasar",t:"mc",lv:1,q:"Mana yang merupakan METRIK?",o:["Jumlah pesanan","Nama sales","Kategori produk","Kota pelanggan"],a:0,
 e:"Metrik bisa dihitung (dijumlah, dihitung, dirata-rata). Nama sales, kategori, dan kota adalah dimensi.",
 w:[null,"Nama sales adalah dimensi.","Kategori adalah dimensi.","Kota adalah dimensi."]},
{k:"bidasar",t:"mc",lv:2,q:"Direktur dan staf sales sama-sama butuh dashboard penjualan. Pendekatan yang tepat:",o:["Direktur: ringkasan KPI & tren per wilayah. Sales: pencapaian pribadi vs target dan daftar pelanggan yang perlu di-follow up","Satu dashboard yang sama persis untuk keduanya","Direktur cukup diberi tabel mentah","Sales tidak perlu dashboard"],a:0,
 e:"Audiens berbeda = pertanyaan berbeda. Direktur memantau gambaran besar dan mengambil keputusan strategis; staf sales butuh detail yang bisa langsung ditindaklanjuti hari ini. Ini persis yang kamu lakukan saat magang membuat dashboard untuk salesperson.",
 w:[null,"Bisa, tapi biasanya salah satu pihak akan kebanjiran detail atau kekurangan detail.","Direktur tidak punya waktu membaca tabel mentah.","Sales justru pengguna dashboard yang paling sering."]},
{k:"bidasar",t:"mc",lv:2,q:"Angka 'Pendapatan Juni: Rp140,8 jt' di kartu KPI akan lebih bermakna jika…",o:["Disandingkan dengan pembanding: target, bulan lalu (+4,3%), atau tahun lalu","Ditulis dengan huruf lebih besar","Diberi animasi","Ditampilkan dalam pie chart"],a:0,
 e:"Angka tanpa pembanding tidak bisa dinilai: bagus atau buruk? Kartu KPI yang baik selalu punya konteks: '▲ 4,3% vs Mei' atau '88% dari target'.",
 w:[null,"Ukuran huruf tidak menambah makna.","Animasi tidak menjawab apakah angkanya baik.","Pie chart untuk satu angka justru membingungkan."]},
{k:"bidasar",t:"mc",lv:2,q:"Tabel penjualan berisi 1 baris per transaksi. Istilah untuk 'tingkat detail per baris' ini adalah…",o:["Granularitas (grain)","Normalisasi","Dimensi","Agregasi"],a:0,
 e:"Granularitas menentukan pertanyaan apa yang bisa dijawab. Data per transaksi bisa diringkas per hari/bulan/sales, tapi data yang sudah diringkas per bulan TIDAK bisa dipecah lagi menjadi per hari. Selalu tanyakan: 1 baris = 1 apa?",
 w:[null,"Normalisasi adalah teknik menata tabel database atau menskalakan angka.","Dimensi adalah kolom kategori.","Agregasi adalah proses meringkas (SUM, COUNT)."]},
{k:"bidasar",t:"mc",lv:1,q:"Tool BI gratis berbasis web yang cukup memakai akun Google dan bisa membaca Google Sheets:",o:["Looker Studio","Power BI Desktop","Microsoft Access","Photoshop"],a:0,
 e:"Looker Studio (dulu Google Data Studio) berjalan di browser, gratis, dan mudah dibagikan lewat link — cocok untuk dashboard portofolio. Power BI Desktop juga gratis, tapi aplikasinya hanya untuk Windows.",
 w:[null,"Power BI Desktop adalah aplikasi Windows, bukan berbasis web (versi web-nya, Power BI Service, butuh akun kerja/sekolah).","Access adalah aplikasi database, bukan tool dashboard.","Photoshop untuk edit gambar."]},
{k:"bidasar",t:"mc",lv:2,q:"Kamu memakai MacBook dan ingin segera membuat dashboard untuk portofolio. Pilihan paling praktis:",o:["Looker Studio di browser (atau Tableau Public)","Power BI Desktop langsung di macOS","Membuat grafik di Paint","Menunggu punya laptop Windows"],a:0,
 e:"Power BI Desktop hanya tersedia untuk Windows (di Mac butuh virtual machine). Looker Studio dan Tableau Public berjalan tanpa Windows. Konsepnya sama: dimensi, metrik, filter, dan memilih grafik yang tepat.",
 w:[null,"Power BI Desktop tidak punya versi macOS.","Grafik statis tidak bisa difilter dan terlihat tidak profesional.","Tidak perlu menunggu — konsep BI bisa dilatih di tool mana pun."]},
{k:"bidasar",t:"mc",lv:3,tb:"bulanan",q:"Tim marketing bangga karena pengunjung Juni naik ke 32.000 (tertinggi). Apa yang perlu kamu tambahkan di dashboard agar tidak menyesatkan?",o:["Conversion rate: pengunjung naik, tapi konversi turun ke 1,6% (terendah)","Tidak perlu apa-apa, angka pengunjung sudah cukup","Hapus angka pengunjung","Ganti warna grafik pengunjung menjadi hijau"],a:0,
 e:"Pengunjung saja bisa menjadi 'vanity metric' — terlihat bagus tapi tidak langsung berarti uang. Juni: 512 pesanan ÷ 32.000 pengunjung = 1,6%, turun dari 2% di Januari. Dashboard yang jujur menampilkan metrik yang terhubung ke keputusan: pengunjung → konversi → pesanan → pendapatan.",
 w:[null,"Angka pengunjung tanpa konversi bisa membuat keputusan keliru.","Pengunjung tetap berguna, asal tidak berdiri sendiri.","Warna tidak mengubah fakta bahwa konversi turun."]},
{k:"bidasar",t:"mc",lv:2,q:"Di mana sebaiknya KPI paling penting diletakkan di dashboard?",o:["Kiri atas — area yang pertama kali dilihat mata","Kanan bawah","Di halaman terakhir","Di tengah, di antara banyak grafik"],a:0,
 e:"Orang membaca layar dari kiri atas (pola F/Z). Susunan umum: baris atas = kartu KPI, tengah = tren dan perbandingan, bawah = tabel detail. Pembaca harus menangkap pesan utama dalam ±5 detik.",
 w:[null,"Kanan bawah adalah area yang paling akhir dilihat.","Banyak orang tidak membuka halaman terakhir.","KPI akan tenggelam di antara grafik lain."]},
{k:"bidasar",t:"is",lv:1,q:"Kepanjangan KPI: Key Performance ________",a:["indicator","indikator"],
 h:"Artinya 'penunjuk'.",
 e:"Key Performance Indicator = indikator kinerja utama. 'Key' menegaskan bahwa yang dipilih hanya yang paling penting."},

// ---- BAB 2: Memilih grafik yang tepat ----
{k:"visual",t:"mc",lv:1,tb:"bulanan",q:"Grafik terbaik untuk menunjukkan TREN pendapatan Januari–Juni:",o:["Line chart","Pie chart","Scatter plot","Tabel"],a:0,
 e:"Line chart menghubungkan titik waktu sehingga arah naik-turun langsung terlihat. Aturan sederhana: sumbu X = waktu → line chart.",
 w:[null,"Pie untuk proporsi bagian dari keseluruhan, bukan perubahan dari waktu ke waktu.","Scatter untuk hubungan dua variabel angka.","Tabel bagus untuk angka persis, tapi tren sulit terlihat."]},
{k:"visual",t:"mc",lv:1,q:"Grafik terbaik untuk MEMBANDINGKAN total penjualan 4 sales:",o:["Bar chart, diurutkan dari terbesar","Line chart","Pie chart 3D","Peta"],a:0,
 e:"Mata manusia paling akurat membandingkan PANJANG batang yang berawal dari titik nol yang sama. Urutkan dari besar ke kecil supaya peringkat langsung terbaca. Bar horizontal cocok jika nama kategorinya panjang.",
 w:[null,"Line chart menyiratkan urutan/waktu, padahal nama sales bukan urutan waktu.","3D mendistorsi ukuran dan pie menyulitkan perbandingan.","Peta untuk data lokasi geografis."]},
{k:"visual",t:"mc",lv:2,q:"Pie chart paling tepat dipakai jika…",o:["Menunjukkan bagian dari keseluruhan (total 100%) dengan sedikit kategori, misalnya 2–5","Menunjukkan tren bulanan","Membandingkan 20 produk","Menunjukkan hubungan dua angka"],a:0,
 e:"Mata kesulitan membandingkan sudut dan luas irisan, apalagi jika irisannya banyak dan mirip. Untuk lebih dari ~5 kategori, bar chart hampir selalu lebih jelas.",
 w:[null,"Tren → line chart.","20 irisan tidak terbaca; pakai bar chart top 10 + 'lainnya'.","Hubungan dua angka → scatter plot."]},
{k:"visual",t:"mc",lv:2,q:"Kamu ingin melihat apakah besarnya diskon berhubungan dengan jumlah barang yang dibeli per transaksi. Grafik yang tepat:",o:["Scatter plot (diskon di sumbu X, jumlah barang di sumbu Y)","Pie chart","Kartu KPI","Line chart per bulan"],a:0,
 e:"Scatter plot menempatkan setiap transaksi sebagai titik. Jika titik membentuk pola naik, ada korelasi positif. Ingat bab statistik: korelasi belum tentu sebab-akibat.",
 w:[null,"Pie tidak bisa menunjukkan hubungan dua variabel.","Kartu hanya menampilkan satu angka.","Line per bulan menunjukkan tren waktu, bukan hubungan diskon–jumlah barang."]},
{k:"visual",t:"mc",lv:1,q:"Untuk menampilkan SATU angka penting (misal total pendapatan bulan ini), gunakan…",o:["Card / scorecard","Pie chart","Scatter plot","Peta"],a:0,
 e:"Card (Power BI) atau Scorecard (Looker Studio) menampilkan satu angka besar, idealnya dengan pembanding (vs target / vs bulan lalu).",
 w:[null,"Pie untuk proporsi.","Scatter untuk hubungan dua variabel.","Peta untuk data lokasi."]},
{k:"visual",t:"mc",lv:3,q:"Bar chart pendapatan Feb (90 jt) vs Mar (117 jt) dibuat dengan sumbu Y mulai dari 85 jt. Batang Maret terlihat ±6× lebih tinggi. Masalahnya:",o:["Sumbu yang tidak dimulai dari 0 membesar-besarkan perbedaan; untuk bar chart sumbu harus mulai dari 0","Tidak ada masalah, justru perbedaan jadi jelas","Seharusnya memakai pie chart","Warnanya kurang kontras"],a:0,
 e:"Panjang batang dibaca sebagai nilai. Dari 0, kenaikannya 30% (117 vs 90). Dari 85 jt, batang terlihat 32 vs 5 → seperti 6×. Ini cara klasik grafik menyesatkan. (Line chart boleh tidak mulai dari 0 karena yang dibaca adalah kemiringan, bukan panjang.)",
 w:[null,"Perbedaannya jadi DILEBIH-LEBIHKAN, bukan diperjelas.","Pie tidak cocok untuk membandingkan dua bulan.","Masalahnya di skala, bukan warna."]},
{k:"visual",t:"mc",lv:2,q:"Judul grafik mana yang paling membantu pembaca?",o:["\"Pendapatan naik 41% dari Januari ke Juni\"","\"Grafik Pendapatan\"","\"Chart 1\"","\"Data Bulanan Jan–Jun 2026 (Sumber: Sistem)\""],a:0,
 e:"Judul yang menyatakan insight (action title) memberi tahu pembaca apa yang harus dilihat. 100 jt → 140,8 jt = naik 40,8% ≈ 41%. Sumber data tetap bisa ditulis kecil di bawah grafik.",
 w:[null,"Hanya menyebut jenis isi, bukan pesannya.","Tidak bermakna apa pun.","Informasi sumber berguna, tapi tidak memberi tahu pesan utamanya."]},
{k:"visual",t:"mc",lv:2,q:"Cara menggunakan warna yang paling efektif di dashboard:",o:["Pakai warna netral untuk sebagian besar data, dan SATU warna aksen untuk menyorot yang penting (misal sales yang di bawah target)","Setiap batang diberi warna berbeda supaya ramai","Merah-hijau di semua grafik","Warna acak setiap kali refresh"],a:0,
 e:"Warna adalah alat untuk mengarahkan perhatian. Kalau semuanya berwarna, tidak ada yang menonjol. Hindari mengandalkan merah-hijau saja karena sebagian orang buta warna; tambahkan label atau ikon (▲▼).",
 w:[null,"Pelangi warna membuat pembaca mengira setiap warna punya arti.","Tidak ramah buta warna dan berlebihan.","Warna harus konsisten agar bisa dibaca."]},
{k:"visual",t:"mc",lv:2,q:"Kenapa pie chart atau bar chart 3D sebaiknya dihindari?",o:["Efek 3D mendistorsi ukuran — irisan/batang di depan terlihat lebih besar dari nilainya","3D tidak bisa dicetak","3D membuat file terlalu besar","3D hanya ada di Excel lama"],a:0,
 e:"Perspektif 3D membuat bagian depan tampak lebih besar. Grafik datar (2D) selalu lebih jujur dan lebih mudah dibaca.",
 w:[null,"Bisa dicetak — tapi tetap menyesatkan.","Ukuran file bukan masalah utamanya.","Efek 3D masih ada di banyak tool."]},
{k:"visual",t:"mc",lv:3,q:"Kamu ingin menunjukkan KOMPOSISI kategori (Komputer vs Aksesoris) di tiap wilayah, dan yang penting adalah PERSENTASE-nya. Grafik yang tepat:",o:["100% stacked bar chart (satu batang per wilayah)","Tiga pie chart terpisah","Line chart","Scatter plot"],a:0,
 e:"100% stacked bar membuat setiap batang = 100% sehingga proporsi antar wilayah mudah dibandingkan berdampingan. Kalau yang penting angka absolutnya, pakai stacked bar biasa atau grouped bar.",
 w:[null,"Membandingkan sudut di beberapa pie terpisah sulit dilakukan dengan akurat.","Line chart untuk tren waktu.","Scatter untuk hubungan dua variabel angka."]},
{k:"visual",t:"mc",lv:2,q:"Kapan TABEL lebih tepat daripada grafik?",o:["Saat pembaca perlu mencari dan membaca nilai persis, misal daftar pelanggan yang harus di-follow up","Saat ingin menunjukkan tren","Saat ingin menarik perhatian","Tidak pernah — tabel selalu lebih buruk"],a:0,
 e:"Grafik untuk melihat pola, tabel untuk mencari detail. Dashboard yang baik sering diakhiri dengan tabel detail di bagian bawah — bisa ditambah conditional formatting atau bar mini di dalam sel.",
 w:[null,"Tren lebih cepat terlihat di line chart.","Tabel jarang menarik perhatian; grafik dan kartu yang melakukannya.","Tabel sangat berguna untuk angka persis."]},
{k:"visual",t:"mc",lv:2,q:"Ada 20 produk dan kamu ingin menunjukkan kontribusi penjualannya. Pilihan terbaik:",o:["Bar chart horizontal top 10, sisanya digabung jadi 'Lainnya'","Pie chart 20 irisan","20 kartu KPI","Line chart 20 garis"],a:0,
 e:"Fokus pada yang paling penting. Biasanya sebagian kecil produk menyumbang sebagian besar penjualan (prinsip Pareto). Bar yang diurutkan memperlihatkannya dengan jelas.",
 w:[null,"20 irisan tidak terbaca.","Terlalu banyak angka, tidak ada fokus.","20 garis menjadi 'spaghetti chart' yang tidak terbaca."]},

// ---- BAB 3: Model data & Power Query ----
{k:"model",t:"mc",lv:1,q:"Power Query (di Power BI dan Excel) dipakai untuk…",o:["Mengambil, membersihkan, dan membentuk data sebelum dianalisis (ETL)","Membuat animasi","Menulis email otomatis","Mendesain logo"],a:0,
 e:"ETL = Extract (ambil data), Transform (bersihkan, ubah), Load (muat ke model). Setiap langkah dicatat sebagai 'Applied Steps', sehingga saat data baru datang kamu cukup klik Refresh — semua pembersihan diulang otomatis.",
 w:[null,"Power Query tidak untuk animasi.","Email otomatis memakai tool lain (Power Automate, dsb.).","Desain grafis bukan fungsi Power Query."]},
{k:"model",t:"mc",lv:2,tb:["pelanggan","produk","pesanan"],q:"Dalam star schema, tabel mana yang menjadi FACT TABLE?",o:["pesanan — berisi kejadian/transaksi dan angka yang dihitung (qty)","pelanggan","produk","Semua tabel adalah fact table"],a:0,
 e:"Fact table menyimpan kejadian (transaksi) beserta angka-angkanya dan id yang menunjuk ke tabel lain. Dimension table (pelanggan, produk, tanggal) menyimpan deskripsi untuk mengelompokkan dan memfilter. Bentuknya seperti bintang: fact di tengah, dimensi di sekeliling.",
 w:[null,"pelanggan menjelaskan 'siapa' → dimension table.","produk menjelaskan 'apa' → dimension table.","Hanya tabel transaksi yang menjadi fact."]},
{k:"model",t:"mc",lv:2,q:"Relasi antara tabel produk dan pesanan adalah…",o:["One-to-many: satu produk bisa muncul di banyak pesanan","One-to-one","Many-to-many","Tidak berelasi"],a:0,
 e:"Kolom produk.id unik (sisi 'one'), sedangkan pesanan.produk_id bisa berulang (sisi 'many'). Di Power BI, relasi one-to-many dari dimensi ke fact adalah bentuk paling ideal; filter mengalir dari dimensi ke fact.",
 w:[null,"Satu produk dipesan berkali-kali, jadi bukan satu-satu.","Many-to-many terjadi jika kedua sisi tidak unik — sebaiknya dihindari.","Mereka terhubung lewat produk_id."]},
{k:"model",t:"mc",lv:2,q:"Di Power Query, 'Merge Queries' setara dengan … dan 'Append Queries' setara dengan …",o:["JOIN (atau XLOOKUP) dan UNION","UNION dan JOIN","SUM dan COUNT","Sort dan Filter"],a:0,
 e:"Merge = menyambung tabel ke SAMPING berdasarkan kolom kunci (seperti JOIN/XLOOKUP). Append = menumpuk tabel ke BAWAH (seperti UNION), misalnya menggabungkan penjualan Januari dan Februari.",
 w:[null,"Terbalik.","Itu fungsi agregat.","Itu operasi pengurutan dan penyaringan."]},
{k:"model",t:"mc",lv:2,q:"Data target berbentuk LEBAR: kolom Sales, Jan, Feb, Mar. Supaya mudah dianalisis per bulan, sebaiknya diubah menjadi PANJANG (Sales, Bulan, Target) dengan fitur…",o:["Unpivot Columns","Pivot Column","Remove Duplicates","Split Column"],a:0,
 e:"Tool BI bekerja paling baik dengan data 'panjang' (tidy): satu kolom = satu variabel. Unpivot mengubah judul kolom (Jan, Feb, Mar) menjadi nilai di kolom Bulan. Dengan begitu menambah bulan baru tidak perlu menambah kolom.",
 w:[null,"Pivot justru melakukan kebalikannya (panjang → lebar).","Remove Duplicates menghapus baris ganda.","Split Column memecah satu kolom teks."]},
{k:"model",t:"mc",lv:2,q:"Kenapa model Power BI butuh tabel kalender (date table) tersendiri?",o:["Agar analisis waktu konsisten (per bulan/kuartal/tahun) dan fungsi time intelligence seperti YTD atau 'tahun lalu' bekerja benar","Supaya file lebih besar","Karena Power BI tidak mengenal tanggal","Hanya untuk mempercantik tampilan"],a:0,
 e:"Tabel kalender berisi setiap tanggal tanpa bolong, lengkap dengan kolom bulan, kuartal, tahun, dan nama hari. Semua fact table dihubungkan ke tabel ini, sehingga filter waktu bekerja sama di semua grafik.",
 w:[null,"Ukuran file bukan tujuannya.","Power BI mengenal tanggal; tabel kalender membuat analisisnya lengkap dan konsisten.","Fungsinya analitis, bukan kosmetik."]},
{k:"model",t:"mc",lv:3,q:"Kenapa tidak menggabungkan semua data ke dalam SATU tabel raksasa saja?",o:["Data deskriptif (nama, kategori) berulang di setiap baris — boros, rawan tidak konsisten, dan sulit dirawat. Star schema lebih efisien dan rapi","Satu tabel selalu lebih baik","Power BI tidak bisa membaca tabel besar","Karena star schema wajib menurut hukum"],a:0,
 e:"Jika kategori produk berubah, di tabel raksasa kamu harus mengubah ribuan baris. Di star schema cukup satu baris di tabel produk. Untuk data kecil satu tabel datar masih wajar, tapi star schema adalah standar praktik BI.",
 w:[null,"Untuk data kecil memang praktis, tapi tidak 'selalu lebih baik'.","Power BI bisa membaca jutaan baris.","Ini praktik terbaik, bukan aturan hukum."]},
{k:"model",t:"mc",lv:3,q:"Tabel target (1 baris per sales per BULAN) di-join ke tabel transaksi (1 baris per TRANSAKSI) lalu targetnya dijumlah. Hasil total target jadi berlipat-lipat. Kenapa?",o:["Granularitasnya berbeda: target bulanan ikut terulang di setiap baris transaksi, jadi terhitung berkali-kali","Rumus SUM rusak","Target harus berupa teks","Karena memakai Looker Studio"],a:0,
 e:"Ini bug paling umum di BI. Jika Andi punya 3 transaksi di Januari, target Januari-nya muncul 3 kali. Solusi: ringkas transaksi dulu ke granularitas yang sama (per sales per bulan), baru dibandingkan dengan target. Atau hubungkan keduanya ke tabel dimensi bersama (sales & kalender).",
 w:[null,"SUM bekerja benar; datanya yang terduplikasi.","Target harus angka agar bisa dijumlah.","Masalah ini bisa terjadi di tool BI, SQL, maupun Excel."]},
{k:"model",t:"mc",lv:1,q:"Di Power Query, setiap langkah pembersihan (hapus kolom, ganti tipe, filter) tercatat di…",o:["Applied Steps — dan diulang otomatis saat Refresh","Recycle Bin","Komentar sel","Tidak tercatat sama sekali"],a:0,
 e:"Inilah kekuatan Power Query dibanding membersihkan data manual di Excel: proses pembersihan jadi resep yang bisa diulang. Data minggu depan cukup di-Refresh.",
 w:[null,"Recycle Bin untuk file yang dihapus.","Komentar sel adalah fitur Excel biasa.","Justru semua langkah tercatat."]},
{k:"model",t:"mc",lv:2,q:"Di Looker Studio, menggabungkan dua sumber data (misal Google Sheets penjualan dan Sheets target) menggunakan fitur…",o:["Blend data","Pivot table","Scorecard","Theme"],a:0,
 e:"Blend data di Looker Studio mirip JOIN: pilih kunci penghubung (misal nama sales dan bulan). Prinsip granularitas tetap berlaku — samakan tingkat detailnya dulu.",
 w:[null,"Pivot table di Looker Studio adalah jenis tabel ringkasan, bukan penggabung sumber data.","Scorecard menampilkan satu angka.","Theme mengatur tampilan."]},
{k:"model",t:"mc",lv:2,q:"Sumber data paling sederhana untuk dashboard portofolio di Looker Studio adalah…",o:["Google Sheets (atau unggah CSV)","Database perusahaan klien","Screenshot tabel","File PDF"],a:0,
 e:"Upload data skripsimu (yang sudah dianonimkan) ke Google Sheets, lalu hubungkan ke Looker Studio. Saat Sheets diperbarui, dashboard ikut berubah.",
 w:[null,"Kamu tidak boleh memakai data klien untuk portofolio pribadi.","Gambar tidak bisa dibaca sebagai data.","PDF bukan sumber data yang bisa langsung dihubungkan."]},

// ---- BAB 4: Kalkulasi — DAX & calculated field ----
{k:"dax",t:"mc",lv:1,q:"Di Power BI, beda MEASURE dan CALCULATED COLUMN:",o:["Measure dihitung saat ditampilkan, mengikuti filter yang aktif (misal total). Calculated column dihitung per baris dan disimpan di tabel","Tidak ada bedanya","Measure hanya untuk teks","Calculated column selalu lebih cepat"],a:0,
 e:"Aturan praktis: angka ringkasan untuk visual (Total Penjualan, Conversion Rate) → measure. Atribut per baris untuk mengelompokkan/memfilter (Label 'Mahal/Murah', Bulan) → calculated column (atau lebih baik dibuat di Power Query).",
 w:[null,"Bedanya besar: kapan dihitung dan bagaimana merespons filter.","Measure biasanya berupa angka.","Calculated column menambah ukuran model; measure sering lebih efisien."]},
{k:"dax",t:"mc",lv:1,q:"Measure DAX untuk total kolom Total di tabel Penjualan:",o:["Total Penjualan = SUM(Penjualan[Total])","=SUM(F2:F11)","SELECT SUM(Total) FROM Penjualan","Total Penjualan = Penjualan + Total"],a:0,
 e:"DAX merujuk kolom dengan format NamaTabel[NamaKolom]. Measure ini otomatis menyesuaikan filter: pilih wilayah Bandung di slicer → kartu menampilkan total Bandung saja.",
 w:[null,"Itu rumus Excel dengan alamat sel; DAX tidak memakai alamat sel.","Itu SQL.","Bukan sintaks DAX yang valid."]},
{k:"dax",t:"mc",lv:2,q:"Kenapa analis memakai DIVIDE(a, b) daripada a / b di DAX?",o:["DIVIDE aman dari pembagian dengan nol — hasilnya BLANK (atau nilai alternatif) alih-alih error","DIVIDE lebih akurat","a / b tidak didukung di DAX","DIVIDE otomatis membulatkan"],a:0,
 e:"Saat sebuah filter membuat penyebut bernilai 0 (misal bulan tanpa pengunjung), a / b menghasilkan error/tak hingga. DIVIDE(a, b, 0) mengembalikan 0 (atau BLANK jika argumen ketiga dikosongkan). Mirip IFERROR di Excel, tapi khusus untuk pembagian.",
 w:[null,"Akurasinya sama untuk penyebut yang bukan nol.","Operator / tetap bisa dipakai.","DIVIDE tidak membulatkan."]},
{k:"dax",t:"mc",lv:2,tb:"penjualan",q:"Hasil measure ini adalah…",kode:'Penjualan Jakarta =\nCALCULATE( SUM(Penjualan[Total]), Penjualan[Wilayah] = "Jakarta" )',o:["25.200.000","45.250.000","4","18.000.000"],a:0,
 e:"CALCULATE menghitung ekspresi dengan filter tambahan — seperti SUMIFS. Jakarta: 14.000.000 + 6.000.000 + 1.200.000 + 4.000.000 = 25.200.000. CALCULATE adalah fungsi DAX paling penting karena mengubah 'konteks filter'.",
 w:[null,"Itu total tanpa filter.","4 adalah BANYAKNYA transaksi Jakarta.","Itu total Andi di Jakarta saja (bab SUMIFS)."]},
{k:"dax",t:"mc",lv:2,tb:"penjualan",q:"Kartu 'Total Penjualan = SUM(Penjualan[Total])'. Pengguna memilih Wilayah = Bandung di slicer. Angka di kartu menjadi…",o:["10.500.000","45.250.000","3","7.000.000"],a:0,
 e:"Slicer mengubah konteks filter, dan measure dihitung ulang hanya untuk baris Bandung: 1.500.000 + 7.000.000 + 2.000.000 = 10.500.000. Inilah keunggulan measure dibanding angka yang diketik manual.",
 w:[null,"Itu total semua wilayah — measure ikut berubah saat slicer dipilih.","3 adalah jumlah transaksi Bandung.","Itu hanya transaksi Dewi (Laptop)."]},
{k:"dax",t:"mc",lv:2,tb:"penjualan",q:"Hasil DISTINCTCOUNT(Penjualan[Sales]) adalah…",o:["4","10","3","1"],a:0,
 e:"DISTINCTCOUNT menghitung nilai unik: Andi, Bima, Citra, Dewi → 4. Setara COUNT(DISTINCT sales) di SQL dan COUNTA(UNIQUE()) di Excel.",
 w:[null,"10 adalah jumlah baris (COUNTROWS).","Ada 3 wilayah, tapi sales ada 4.","DISTINCTCOUNT menghitung semua nilai unik."]},
{k:"dax",t:"mc",lv:3,tb:"bulanan",q:"Conversion rate Jan–Jun yang BENAR (seluruh periode) adalah… (total pengunjung 149.000, total pesanan 2.742)",o:["1,84% — total pesanan ÷ total pengunjung","1,87% — rata-rata dari 6 conversion rate bulanan","2,00%","1,60%"],a:0,
 e:"Rasio harus dihitung dari total: 2.742 ÷ 149.000 = 1,84%. Rata-rata dari rasio bulanan (2,0; 2,0; 1,8; 2,0; 1,8; 1,6 → 1,87%) memberi bobot yang sama pada bulan sepi dan ramai — itu keliru. Di DAX: Conversion = DIVIDE(SUM(Data[Pesanan]), SUM(Data[Pengunjung])). Di Looker Studio: SUM(Pesanan)/SUM(Pengunjung).",
 w:[null,"Average of ratios mengabaikan bahwa Mei–Juni punya pengunjung jauh lebih banyak.","2% adalah konversi beberapa bulan saja, bukan seluruh periode.","1,6% adalah konversi Juni saja."]},
{k:"dax",t:"mc",lv:2,tb:"bulanan",q:"AOV (Average Order Value) bulan Juni adalah…",o:["275.000","4.400","250.000","1,6%"],a:0,
 e:"AOV = Pendapatan ÷ Pesanan = 140.800.000 ÷ 512 = 275.000. Calculated field di Looker Studio: SUM(Pendapatan) / SUM(Pesanan).",
 w:[null,"Itu pendapatan ÷ pengunjung (pendapatan per pengunjung).","250.000 adalah AOV Januari, Februari, April, dan Mei — bukan Juni.","1,6% adalah conversion rate Juni."]},
{k:"dax",t:"mc",lv:2,q:"Fungsi time intelligence seperti TOTALYTD atau SAMEPERIODLASTYEAR membutuhkan…",o:["Tabel kalender yang lengkap dan terhubung ke fact table","Koneksi internet","Data tanpa tanggal","Grafik line"],a:0,
 e:"Fungsi-fungsi ini 'berjalan' di sepanjang tanggal (awal tahun sampai sekarang, periode yang sama tahun lalu). Tanpa tabel kalender yang lengkap, hasilnya bisa salah atau kosong.",
 w:[null,"Perhitungan berjalan lokal di model.","Justru butuh tanggal.","Fungsi ini bisa dipakai di visual apa pun."]},
{k:"dax",t:"mc",lv:1,q:"Slicer (Power BI) atau filter control/date range control (Looker Studio) berguna untuk…",o:["Membiarkan pembaca memfilter sendiri seluruh dashboard (wilayah, sales, periode)","Menambah warna","Mengunci dashboard","Menghapus data"],a:0,
 e:"Satu dashboard dengan filter interaktif bisa menggantikan puluhan laporan statis. Pembaca bisa menjawab pertanyaan lanjutan sendiri tanpa meminta laporan baru.",
 w:[null,"Warna diatur lewat tema/format.","Mengunci akses diatur lewat sharing/permission.","Filter hanya menyaring tampilan, tidak menghapus data."]},
{k:"dax",t:"mc",lv:2,q:"Kamu ingin menaruh dashboard di halaman portofolio. Hal yang WAJIB diperhatikan sebelum membagikannya secara publik:",o:["Datanya tidak berisi informasi pribadi/rahasia, karena link publik bisa dibuka siapa saja","Dashboard harus memakai tema gelap","Harus ada minimal 10 grafik","Tidak ada yang perlu diperhatikan"],a:0,
 e:"Looker Studio bisa dibagikan 'Anyone with the link' dan di-embed. Power BI 'Publish to web' membuat laporan bisa diakses SIAPA PUN di internet — jangan pernah dipakai untuk data perusahaan/klien. Untuk portofolio, pakai data publik atau data skripsi yang sudah dianonimkan.",
 w:[null,"Tema bebas.","Jumlah grafik bukan ukuran kualitas.","Kebocoran data adalah risiko nyata."]},
{k:"dax",t:"is",lv:2,q:"Fungsi DAX untuk pembagian yang aman dari bagi-nol: ______(a, b)",a:["divide"],
 h:"Bahasa Inggris untuk 'bagi'.",
 e:"DIVIDE(pembilang, penyebut, [alternatif]). Contoh: Conversion = DIVIDE(SUM(Data[Pesanan]), SUM(Data[Pengunjung]))."}
];

const MATERI_BI = [
{k:"bidasar",judul:"Dashboard, KPI, Dimensi & Metrik",materi:`
<p>Dashboard adalah <b>alat untuk mengambil keputusan</b>, bukan galeri grafik. Urutannya selalu:</p>
<pre><code>Pertanyaan bisnis → Metrik → Grafik → Desain</code></pre>
<p><b>Dua jenis kolom</b> yang harus kamu kenali di tool BI mana pun:</p>
<ul>
<li><b>Dimensi</b> = "per apa": wilayah, sales, produk, tanggal → untuk mengelompokkan & memfilter.</li>
<li><b>Metrik / Measure</b> = "berapa": total penjualan, jumlah pesanan, rata-rata → dihitung.</li>
</ul>
<p><b>KPI</b> = 3–5 metrik terpenting, selalu dengan <b>pembanding</b> (target, bulan lalu, tahun lalu).</p>
{{tb:bulanan}}
<p><b>Granularitas</b>: selalu tanya "1 baris = 1 apa?". Data di atas granularitasnya per bulan, jadi tidak bisa dipecah per hari.</p>
<p><b>Tata letak klasik</b> (dibaca dari kiri atas):</p>
<pre><code>[ KPI 1 ] [ KPI 2 ] [ KPI 3 ] [ KPI 4 ]     ← kartu + pembanding
[   Tren (line chart)   ] [ Perbandingan (bar) ]
[            Tabel detail + filter            ]</code></pre>
<p><b>Tool gratis untuk portofolio:</b> Looker Studio (browser, akun Google), Power BI Desktop (Windows), Tableau Public.</p>
<div class="catatan">💡 <b>Hubungannya dengan magangmu:</b> dashboard salesperson di Odoo adalah contoh nyata "audiens menentukan isi". Di interview, ceritakan: siapa penggunanya, pertanyaan apa yang dijawab, dan keputusan apa yang jadi lebih mudah.</div>`},

{k:"visual",judul:"Memilih Grafik yang Tepat (dan Jujur)",materi:`
<table class="mini-pivot"><tr><th>Pertanyaan</th><th>Grafik</th></tr>
<tr><td>Bagaimana trennya dari waktu ke waktu?</td><td><b>Line chart</b></td></tr>
<tr><td>Mana yang lebih besar/kecil?</td><td><b>Bar chart</b> (urutkan!)</td></tr>
<tr><td>Berapa bagian dari keseluruhan? (≤ 5 kategori)</td><td>Pie/donut atau 100% stacked bar</td></tr>
<tr><td>Apakah dua angka berhubungan?</td><td><b>Scatter plot</b></td></tr>
<tr><td>Satu angka penting</td><td><b>Card / scorecard</b> + pembanding</td></tr>
<tr><td>Perlu nilai persis untuk ditindaklanjuti</td><td><b>Tabel</b></td></tr>
<tr><td>Data lokasi</td><td>Peta</td></tr></table>
<p><b>Enam aturan grafik jujur & jelas:</b></p>
<ol>
<li>Bar chart <b>selalu mulai dari 0</b>. Memotong sumbu membesar-besarkan perbedaan.</li>
<li><b>Urutkan</b> bar dari besar ke kecil (kecuali urutannya waktu).</li>
<li><b>Hindari 3D</b> — mendistorsi ukuran.</li>
<li>Warna netral + <b>satu warna aksen</b> untuk menyorot hal penting. Jangan andalkan merah-hijau saja.</li>
<li><b>Judul = insight</b>: "Pendapatan naik 41% dari Jan ke Jun", bukan "Grafik Pendapatan".</li>
<li>Terlalu banyak kategori → tampilkan top 10 + "Lainnya".</li>
</ol>
<div class="catatan">🧪 <b>Latihan:</b> buka data bulanan di Google Sheets → buat line chart pendapatan dan bar chart konversi per bulan. Tulis judul berupa insight untuk keduanya.</div>`},

{k:"model",judul:"Model Data, Star Schema & Power Query",materi:`
<p>Sebelum membuat grafik, data harus dibentuk dengan benar. Di Power BI ini dikerjakan di <b>Power Query</b> (juga ada di Excel: Data → Get Data).</p>
<p><b>Star schema</b> — susunan standar model BI:</p>
<pre><code>        [ pelanggan ]
              │ 1
              │
[ produk ]──1─┼─*──[ pesanan (FACT) ]──*──1──[ kalender ]
              │
   dimensi = deskripsi       fact = transaksi + angka</code></pre>
<ul>
<li><b>Fact table</b>: transaksi (pesanan) — id, tanggal, qty, nilai.</li>
<li><b>Dimension table</b>: pelanggan, produk, kalender — untuk filter & kelompok.</li>
<li>Relasi ideal: <b>one-to-many</b> dari dimensi ke fact.</li>
</ul>
<p><b>Operasi Power Query yang paling sering dipakai</b> (dan padanannya):</p>
<table class="mini-pivot"><tr><th>Power Query</th><th>SQL / Excel</th></tr>
<tr><td>Merge Queries</td><td>JOIN / XLOOKUP</td></tr>
<tr><td>Append Queries</td><td>UNION ALL</td></tr>
<tr><td>Group By</td><td>GROUP BY / Pivot Table</td></tr>
<tr><td>Unpivot Columns</td><td>data lebar → panjang</td></tr>
<tr><td>Trim, Clean, Replace Values</td><td>TRIM, SUBSTITUTE</td></tr>
<tr><td>Change Type</td><td>CAST / angka-sebagai-teks</td></tr></table>
<div class="catatan">⚠️ <b>Bug BI nomor satu:</b> menggabungkan tabel dengan granularitas berbeda (target per bulan × transaksi per hari) → angka target terhitung berkali-kali. Samakan dulu tingkat detailnya.</div>`},

{k:"dax",judul:"Kalkulasi: DAX (Power BI) & Calculated Field (Looker Studio)",materi:`
<p><b>Measure</b> dihitung saat ditampilkan dan mengikuti filter. <b>Calculated column</b> dihitung per baris dan disimpan.</p>
<pre><code>Total Penjualan   = SUM(Penjualan[Total])
Jumlah Transaksi  = COUNTROWS(Penjualan)
Sales Aktif       = DISTINCTCOUNT(Penjualan[Sales])
AOV               = DIVIDE([Total Penjualan], [Jumlah Transaksi])
Penjualan Jakarta = CALCULATE([Total Penjualan], Penjualan[Wilayah] = "Jakarta")
Penjualan YTD     = TOTALYTD([Total Penjualan], Kalender[Tanggal])</code></pre>
<p><b>CALCULATE</b> = fungsi terpenting DAX: menghitung ulang dengan filter tambahan (mirip SUMIFS).</p>
<p><b>Looker Studio</b> memakai calculated field dengan sintaks mirip SQL:</p>
<pre><code>AOV        = SUM(Pendapatan) / SUM(Pesanan)
Conversion = SUM(Pesanan) / SUM(Pengunjung)
Segmen     = CASE WHEN Belanja &gt;= 5000000 THEN "VIP" ELSE "Reguler" END</code></pre>
<div class="catatan">⚠️ <b>Rasio dari total, bukan rata-rata rasio.</b> Conversion Jan–Jun = 2.742 ÷ 149.000 = <b>1,84%</b>, bukan rata-rata 6 angka bulanan (1,87%). Bulan ramai harus berbobot lebih besar.</div>
<p><b>Membagikan dashboard:</b> Looker Studio → Share/Embed. Power BI "Publish to web" = <b>publik untuk siapa saja</b>; hanya untuk data yang memang boleh publik.</p>`}
];
