// ============ ERP & ODOO — jalur Functional Consultant / Implementation Specialist ============
// 5 bab: konsep ERP & Odoo, CRM & penjualan, pembelian & inventory,
// akuntansi dasar untuk konsultan, metodologi implementasi.
// Nama menu mengikuti Odoo versi 16–18; di versi lain letaknya bisa sedikit berbeda.

const SOAL_ERP = [
// ---- BAB 1: Konsep ERP & Odoo ----
{k:"erp",t:"mc",lv:1,q:"ERP (Enterprise Resource Planning) adalah…",o:["Sistem terintegrasi yang menyatukan proses bisnis (penjualan, pembelian, stok, keuangan, SDM) dalam satu database","Aplikasi untuk mendesain logo","Bahasa pemrograman","Jenis jaringan komputer"],a:0,
 e:"Kuncinya INTEGRASI: saat sales mengonfirmasi pesanan, gudang langsung melihat barang yang harus dikirim, dan keuangan langsung bisa menagih — tanpa input ulang di Excel yang berbeda-beda.",
 w:[null,"Itu aplikasi desain grafis.","ERP adalah sistem/aplikasi, bukan bahasa pemrograman.","Jaringan adalah infrastruktur, bukan sistem proses bisnis."]},
{k:"erp",t:"mc",lv:1,q:"Masalah utama yang diselesaikan ERP di perusahaan yang sebelumnya memakai banyak file Excel terpisah:",o:["Data diinput berulang di banyak tempat sehingga sering tidak cocok, lambat, dan sulit dilacak","Komputer terlalu lambat","Karyawan tidak punya email","Kantor kurang luas"],a:0,
 e:"Contoh nyata: stok di file gudang berbeda dengan file sales, dan invoice dibuat manual dari pesanan. ERP membuat satu sumber kebenaran (single source of truth).",
 w:[null,"Itu masalah perangkat keras.","Email tidak terkait dengan ERP.","Itu masalah fasilitas."]},
{k:"erp",t:"mc",lv:1,q:"Mana yang BUKAN sistem ERP?",o:["Figma","Odoo","SAP","Microsoft Dynamics 365"],a:0,
 e:"Odoo, SAP, Microsoft Dynamics 365, dan Oracle NetSuite adalah ERP. Figma adalah tool desain antarmuka. Di Indonesia, Odoo populer untuk UMKM sampai perusahaan menengah; SAP banyak dipakai perusahaan besar.",
 w:[null,"Odoo adalah ERP open-source yang populer di Indonesia.","SAP adalah ERP yang banyak dipakai perusahaan besar.","Dynamics 365 adalah ERP/CRM dari Microsoft."]},
{k:"erp",t:"mc",lv:2,q:"Mana yang termasuk MASTER DATA (bukan data transaksi)?",o:["Daftar produk, pelanggan, dan vendor","Sales Order","Invoice","Pembayaran"],a:0,
 e:"Master data = data 'acuan' yang jarang berubah dan dipakai berulang. Transaksi = kejadian yang memakai master data. Master data yang kotor (produk dobel, pelanggan salah ketik) merusak semua laporan — persis seperti di bab pembersihan data Excel.",
 w:[null,"Sales Order adalah transaksi.","Invoice adalah transaksi.","Pembayaran adalah transaksi."]},
{k:"erp",t:"mc",lv:2,q:"Beda Functional Consultant dan Technical Consultant (Developer) di proyek Odoo:",o:["Functional memahami proses bisnis, mengonfigurasi, melatih user. Technical menulis kode (Python/XML/JS) untuk kebutuhan yang tidak bisa dipenuhi konfigurasi standar","Keduanya sama persis","Functional menulis semua kode","Technical hanya mengurus jaringan"],a:0,
 e:"Functional = jembatan antara klien dan sistem. Lulusan TI yang paham kode tapi kuat komunikasi (seperti kamu) punya keunggulan sebagai functional: bisa bicara dengan klien DAN mengerti batasan teknis saat berdiskusi dengan developer.",
 w:[null,"Perannya berbeda walau saling membutuhkan.","Functional fokus pada konfigurasi dan proses bisnis.","Technical consultant mengembangkan modul, bukan jaringan."]},
{k:"erp",t:"mc",lv:2,q:"Beda Odoo Community dan Odoo Enterprise:",o:["Community gratis dan open-source; Enterprise berbayar dengan aplikasi/fitur tambahan (misal Studio, akuntansi lengkap) dan dukungan resmi","Community hanya untuk mahasiswa","Enterprise tidak bisa dikustomisasi","Tidak ada bedanya"],a:0,
 e:"Banyak implementasi di Indonesia memakai Community + modul tambahan, sebagian lain memakai Enterprise. Konsultan perlu tahu fitur mana yang ada di edisi klien sebelum menjanjikan solusi.",
 w:[null,"Community bisa dipakai siapa saja, termasuk perusahaan.","Enterprise tetap bisa dikustomisasi.","Fiturnya berbeda."]},
{k:"erp",t:"mc",lv:1,q:"Database yang dipakai Odoo adalah…",o:["PostgreSQL","MySQL","MongoDB","Microsoft Access"],a:0,
 e:"Odoo memakai PostgreSQL, backend Python, dan frontend JavaScript (framework OWL). Karena itu SQL, Python, dan JavaScript adalah bahasa prioritas untukmu.",
 w:[null,"Odoo tidak memakai MySQL.","MongoDB adalah database NoSQL; Odoo memakai database relasional.","Access tidak dipakai untuk aplikasi server."]},
{k:"erp",t:"mc",lv:2,q:"Klien meminta fitur baru. Urutan solusi yang paling disarankan seorang konsultan ERP:",o:["Cek fitur standar/konfigurasi dulu → modul yang sudah ada → kustomisasi kode sebagai pilihan terakhir","Langsung kustomisasi kode","Tolak semua permintaan","Minta klien mengganti ERP"],a:0,
 e:"Kustomisasi menambah biaya, waktu, dan risiko saat upgrade versi. Konsultan yang baik sering bertanya: 'Apakah prosesnya bisa sedikit disesuaikan agar memakai fitur standar?'",
 w:[null,"Mahal dan menyulitkan upgrade.","Konsultan harus mencari solusi, bukan menolak.","Berlebihan untuk satu kebutuhan."]},
{k:"erp",t:"mc",lv:2,q:"Odoo Studio adalah…",o:["Tool no-code (Enterprise) untuk menambah field, mengubah tampilan form/laporan, dan membuat aplikasi sederhana tanpa menulis kode","Aplikasi untuk mengedit video","IDE untuk menulis Python","Server database Odoo"],a:0,
 e:"Studio membantu functional consultant memenuhi kebutuhan kecil dengan cepat. Untuk logika yang kompleks tetap dibutuhkan modul kustom oleh developer.",
 w:[null,"Bukan editor video.","Developer biasanya memakai VS Code/PyCharm.","Database Odoo adalah PostgreSQL."]},
{k:"erp",t:"mc",lv:2,q:"Cara mengaktifkan Developer Mode di Odoo:",o:["Settings → Activate the developer mode (atau tambahkan ?debug=1 di URL)","Install ulang Odoo","Hanya bisa lewat database","Tekan F12"],a:0,
 e:"Developer mode membuka menu teknis: melihat nama field/model, mengedit view, membuat automated action, dan lainnya. Sangat berguna bagi functional consultant untuk menelusuri data dan konfigurasi.",
 w:[null,"Tidak perlu install ulang.","Ada tombolnya di Settings.","F12 membuka developer tools browser, bukan developer mode Odoo."]},
{k:"erp",t:"mc",lv:3,q:"Klien: 'Salesperson hanya boleh melihat quotation miliknya sendiri, tapi manajer bisa melihat semua.' Solusi standar di Odoo:",o:["Atur hak akses (Access Rights) user: Sales → 'User: Own Documents Only' untuk salesperson dan 'Administrator' untuk manajer","Buat database terpisah untuk tiap salesperson","Kustomisasi kode wajib","Tidak mungkin dilakukan"],a:0,
 e:"Odoo punya grup hak akses bawaan per aplikasi. Kebutuhan seperti ini cukup dengan konfigurasi — contoh nyata prinsip 'standar dulu, kode terakhir'.",
 w:[null,"Berlebihan dan merusak integrasi data.","Tidak perlu kode; fiturnya standar.","Bisa, dengan pengaturan hak akses."]},
{k:"erp",t:"is",lv:1,q:"Di Odoo, modul seperti Sales, Inventory, dan Purchase disebut ____ (kata dalam bahasa Inggris, 4 huruf)",a:["apps","app"],
 h:"Sama dengan sebutan aplikasi di HP.",
 e:"Odoo terdiri dari Apps yang bisa di-install sesuai kebutuhan. Saling terintegrasi: install Sales + Inventory + Invoicing/Accounting, dan alurnya langsung tersambung."},

// ---- BAB 2: CRM & penjualan ----
{k:"sales",t:"mc",lv:1,q:"Urutan alur penjualan standar di Odoo:",o:["Quotation → Sales Order → Delivery → Invoice → Payment","Invoice → Quotation → Delivery → Payment","Delivery → Quotation → Payment → Invoice","Payment → Invoice → Sales Order"],a:0,
 e:"Quotation (penawaran) dikonfirmasi menjadi Sales Order. Jika Inventory ter-install, Delivery Order dibuat otomatis untuk produk barang. Setelah itu invoice dibuat dan pembayaran dicatat. Ini disebut alur Order-to-Cash.",
 w:[null,"Invoice tidak dibuat sebelum ada penawaran yang disetujui.","Barang tidak dikirim sebelum ada pesanan.","Urutannya terbalik."]},
{k:"sales",t:"mc",lv:1,q:"Di aplikasi CRM Odoo, opportunity ditampilkan sebagai kartu yang dipindah antar tahap (New → Qualified → Proposition → Won). Tampilan ini disebut…",o:["Pipeline (tampilan kanban)","Neraca","Bill of Materials","Pivot table"],a:0,
 e:"Pipeline menunjukkan posisi setiap calon penjualan. Manajer bisa melihat berapa nilai yang sedang 'di jalan' di setiap tahap.",
 w:[null,"Neraca adalah laporan keuangan.","BoM adalah daftar bahan di Manufacturing.","Pivot adalah tampilan ringkasan angka."]},
{k:"sales",t:"mc",lv:2,q:"Beda Lead dan Opportunity di CRM:",o:["Lead = calon kontak yang belum dikualifikasi. Opportunity = sudah terkualifikasi dan punya potensi penjualan yang jelas","Keduanya sama","Lead adalah pelanggan yang sudah membayar","Opportunity adalah invoice"],a:0,
 e:"Banyak perusahaan menyaring lead dulu (dari form website, pameran) sebelum diteruskan ke sales sebagai opportunity. Di Odoo, fitur Leads diaktifkan di pengaturan CRM.",
 w:[null,"Statusnya berbeda dalam proses penjualan.","Pelanggan yang membayar sudah melewati tahap opportunity.","Invoice adalah dokumen penagihan."]},
{k:"sales",t:"mc",lv:2,q:"Quotation berisi produk barang dikonfirmasi dan aplikasi Inventory ter-install. Yang otomatis dibuat Odoo:",o:["Delivery Order (dokumen pengiriman) di Inventory","Vendor Bill","Purchase Order","Journal entry gaji"],a:0,
 e:"Integrasi Sales–Inventory: gudang langsung melihat apa yang harus dikirim. Produk jasa (service) tidak membuat delivery order.",
 w:[null,"Vendor Bill adalah tagihan dari pemasok (alur pembelian).","Purchase Order dibuat untuk membeli barang dari vendor.","Gaji tidak terkait dengan konfirmasi penjualan."]},
{k:"sales",t:"mc",lv:2,q:"Pelanggan memesan 10 unit, baru 6 unit yang dikirim. Kebijakan faktur produk adalah 'Delivered quantities'. Invoice yang bisa dibuat sekarang:",o:["6 unit","10 unit","4 unit","0 unit"],a:0,
 e:"Invoicing Policy di produk: 'Ordered quantities' = tagih sesuai pesanan (cocok untuk jasa/prabayar). 'Delivered quantities' = tagih sesuai yang sudah dikirim (cocok untuk barang). Pertanyaan ini sering muncul saat requirement gathering: 'Kapan Bapak/Ibu menagih pelanggan?'",
 w:[null,"Itu jika kebijakannya 'Ordered quantities'.","4 adalah sisa yang BELUM dikirim.","6 unit sudah dikirim dan bisa ditagih."]},
{k:"sales",t:"mc",lv:2,q:"Klien punya harga khusus untuk pelanggan grosir dan harga promo bulan tertentu. Fitur Odoo yang tepat:",o:["Pricelists","Lost reasons","Reordering rules","Chart of accounts"],a:0,
 e:"Pricelist mengatur harga berbeda per pelanggan/grup, per jumlah minimal, atau per periode. Diaktifkan di Sales → Settings.",
 w:[null,"Lost reasons mencatat alasan opportunity gagal.","Reordering rules untuk stok.","Chart of accounts adalah daftar akun akuntansi."]},
{k:"sales",t:"mc",lv:2,q:"Proyek bernilai besar meminta uang muka 30% sebelum barang dikirim. Di Odoo:",o:["Dari Sales Order → Create Invoice → Down payment (percentage) 30%","Buat Sales Order kedua","Ubah harga produk jadi 30%","Tidak didukung"],a:0,
 e:"Down payment bisa berupa persentase atau nominal tetap. Saat invoice final dibuat, uang muka otomatis dikurangkan.",
 w:[null,"Membuat SO kedua merusak laporan penjualan.","Mengubah harga produk memengaruhi semua pesanan lain.","Fitur ini standar di Sales."]},
{k:"sales",t:"mc",lv:2,q:"Agar dashboard bisa menampilkan penjualan PER SALESPERSON dengan benar, field yang wajib selalu terisi di setiap quotation/SO:",o:["Salesperson","Catatan internal","Lampiran PDF","Warna tag"],a:0,
 e:"Laporan hanya sebaik datanya. Jika field Salesperson kosong atau salah, angka per sales jadi keliru — pelajaran yang sama dengan bab pembersihan data. Pengalaman magangmu membangun dashboard salesperson bisa diceritakan dari sudut ini.",
 w:[null,"Catatan berguna, tapi tidak dipakai untuk mengelompokkan laporan.","Lampiran tidak memengaruhi laporan.","Tag opsional."]},
{k:"sales",t:"mc",lv:2,q:"Opportunity bernilai Rp50 juta dengan probabilitas 40%. Nilai pipeline tertimbangnya (weighted/prorated revenue):",o:["Rp20 juta","Rp50 juta","Rp30 juta","Rp90 juta"],a:0,
 e:"Expected revenue × probabilitas = 50 × 40% = 20 juta. Menjumlahkan nilai tertimbang semua opportunity memberi perkiraan penjualan yang lebih realistis daripada menjumlah nilai penuhnya.",
 w:[null,"Itu nilai penuh, belum dikalikan probabilitas.","Itu 60% dari 50 juta — kebalikan dari peluangnya.","Itu penjumlahan, bukan perkalian."]},
{k:"sales",t:"mc",lv:2,q:"Manajer ingin melihat total penjualan per salesperson per bulan tanpa coding. Di Odoo, gunakan…",o:["Sales → Reporting → tampilan Pivot (baris: Salesperson, kolom: bulan)","Kustomisasi modul baru","Ekspor ke Notepad","Menghitung manual"],a:0,
 e:"Hampir semua menu laporan Odoo punya tampilan List, Graph, dan Pivot — konsepnya sama dengan Pivot Table Excel. Hasilnya bisa disimpan sebagai Favorite atau ditambahkan ke dashboard.",
 w:[null,"Tidak perlu kode untuk ringkasan standar.","Notepad tidak bisa meringkas data.","Rawan salah dan memakan waktu."]},
{k:"sales",t:"mc",lv:2,q:"Kenapa sales sebaiknya mengisi 'Lost Reason' saat menandai opportunity sebagai gagal?",o:["Agar perusahaan bisa menganalisis penyebab kalah (harga, kompetitor, waktu) dan memperbaikinya","Supaya pelanggan tahu","Wajib secara hukum","Agar opportunity terhapus"],a:0,
 e:"Data alasan kalah adalah sumber insight: jika 60% kalah karena harga, mungkin strategi harga perlu ditinjau. Ini contoh bagaimana desain proses menentukan kualitas analisis.",
 w:[null,"Lost reason adalah catatan internal.","Bukan kewajiban hukum.","Opportunity tidak terhapus; statusnya menjadi Lost."]},
{k:"sales",t:"is",lv:1,q:"Penawaran harga yang dikirim ke pelanggan sebelum menjadi Sales Order disebut ________",a:["quotation","penawaran"],
 h:"Bahasa Inggris, diawali huruf Q.",
 e:"Quotation → (Confirm) → Sales Order. Statusnya di Odoo: Quotation, Quotation Sent, Sales Order, Cancelled."},

// ---- BAB 3: Pembelian & inventory ----
{k:"stok",t:"mc",lv:1,q:"Urutan alur pembelian standar di Odoo:",o:["RFQ → Purchase Order → Receipt → Vendor Bill → Payment","Vendor Bill → RFQ → Receipt","Receipt → RFQ → Payment","Payment → Purchase Order → RFQ"],a:0,
 e:"RFQ (Request for Quotation) dikirim ke vendor, dikonfirmasi menjadi Purchase Order, barang diterima (Receipt), tagihan vendor dicatat (Vendor Bill), lalu dibayar. Alur ini disebut Procure-to-Pay.",
 w:[null,"Tagihan tidak datang sebelum ada pesanan.","Barang tidak diterima sebelum dipesan.","Urutannya terbalik."]},
{k:"stok",t:"mc",lv:1,q:"RFQ (Request for Quotation) adalah…",o:["Permintaan penawaran harga kepada vendor sebelum memesan","Tagihan dari pelanggan","Laporan stok","Bukti pembayaran"],a:0,
 e:"RFQ adalah 'versi draft' dari Purchase Order. Setelah harga dan jumlah disepakati, RFQ dikonfirmasi menjadi PO.",
 w:[null,"Tagihan ke pelanggan adalah invoice.","Laporan stok ada di Inventory.","Bukti pembayaran dicatat di Accounting."]},
{k:"stok",t:"mc",lv:2,q:"Three-way matching sebelum membayar vendor artinya mencocokkan…",o:["Purchase Order, barang yang benar-benar diterima (Receipt), dan tagihan vendor (Vendor Bill)","Tiga tanda tangan direktur","Tiga vendor berbeda","Tiga bulan laporan"],a:0,
 e:"Mencegah membayar barang yang tidak dipesan atau belum diterima. Di Odoo, kebijakan Bill Control 'On received quantities' membuat tagihan mengikuti jumlah yang sudah diterima.",
 w:[null,"Bukan soal tanda tangan.","Bukan membandingkan vendor.","Bukan soal periode laporan."]},
{k:"stok",t:"mc",lv:2,q:"Produk punya reordering rule Min = 10, Max = 50. Perkiraan stok (forecast) turun menjadi 5. Odoo akan menyarankan pembelian sebanyak…",o:["45","5","10","50"],a:0,
 e:"Ketika perkiraan stok di bawah Min, Odoo membuat permintaan pengadaan untuk mengisi kembali sampai Max: 50 − 5 = 45. Pengaturan Min/Max yang tepat menghindari kehabisan stok tanpa menumpuk barang.",
 w:[null,"5 adalah stok yang tersisa, bukan jumlah yang dipesan.","10 hanya cukup untuk kembali ke batas Min.","50 adalah target akhir stok, bukan jumlah yang dibeli."]},
{k:"stok",t:"mc",lv:2,q:"On hand 20 unit. Ada Purchase Order masuk 30 unit dan Sales Order keluar 15 unit yang belum diproses. Forecasted quantity-nya:",o:["35","20","65","5"],a:0,
 e:"Forecasted = on hand + masuk − keluar = 20 + 30 − 15 = 35. Sales melihat forecast untuk menjanjikan stok; gudang melihat on hand untuk yang secara fisik ada.",
 w:[null,"20 adalah on hand (fisik saat ini).","Barang keluar belum dikurangkan.","Barang masuk belum ditambahkan."]},
{k:"stok",t:"mc",lv:2,q:"Beda rute Make To Stock (MTS) dan Make To Order (MTO):",o:["MTS: stok disiapkan lebih dulu. MTO: barang dibeli/diproduksi setelah ada pesanan pelanggan","Tidak ada bedanya","MTS hanya untuk jasa","MTO berarti barang gratis"],a:0,
 e:"MTS cocok untuk barang yang laku rutin. MTO cocok untuk barang mahal, khusus, atau jarang dipesan, supaya tidak menumpuk di gudang.",
 w:[null,"Pola pengadaannya berbeda.","Jasa tidak memiliki stok.","MTO tetap dibayar."]},
{k:"stok",t:"mc",lv:2,q:"Hasil stock opname: di gudang ada 47 unit, di sistem tercatat 50. Di Odoo, perbaikannya memakai…",o:["Inventory Adjustment / Physical Inventory","Membuat Sales Order fiktif 3 unit","Menghapus produk","Mengubah harga"],a:0,
 e:"Inventory adjustment mencatat selisih secara resmi (dan menghasilkan jurnal jika valuasi otomatis aktif). Membuat transaksi fiktif merusak laporan penjualan. Konsultan juga sebaiknya mencari tahu PENYEBAB selisihnya.",
 w:[null,"Transaksi fiktif merusak laporan dan audit.","Produknya tetap ada dan dijual.","Harga tidak berhubungan dengan jumlah fisik."]},
{k:"stok",t:"mc",lv:2,q:"Perusahaan menjual obat yang perlu dilacak tanggal kedaluwarsanya per batch, dan laptop yang perlu dilacak per unit. Pengaturannya:",o:["Obat: Lot number (per batch). Laptop: Serial number (unik per unit)","Keduanya tidak perlu dilacak","Keduanya memakai serial number","Obat memakai serial, laptop memakai lot"],a:0,
 e:"Lot = satu nomor untuk sekumpulan barang yang diproduksi bersama (cocok untuk tanggal kedaluwarsa dan penarikan produk). Serial = satu nomor untuk satu barang (cocok untuk garansi).",
 w:[null,"Pelacakan penting untuk keamanan dan garansi.","Memberi serial ke setiap butir obat tidak praktis.","Terbalik."]},
{k:"stok",t:"mc",lv:3,q:"Beli 10 unit @Rp100.000, lalu 10 unit @Rp120.000. Kemudian dijual 10 unit. Dengan metode FIFO, HPP (harga pokok) penjualan ini:",o:["Rp1.000.000","Rp1.100.000","Rp1.200.000","Rp2.200.000"],a:0,
 e:"FIFO (First In First Out): barang yang pertama masuk dianggap pertama keluar → 10 × 100.000 = 1.000.000. Dengan AVCO (rata-rata) = 10 × 110.000 = 1.100.000. Di Odoo, metode biaya (Standard, FIFO, AVCO) diatur di Product Category.",
 w:[null,"Itu metode AVCO (harga rata-rata 110.000).","Itu jika yang dianggap keluar duluan adalah pembelian TERAKHIR (LIFO, tidak didukung di Odoo).","Itu nilai seluruh 20 unit."]},
{k:"stok",t:"mc",lv:2,q:"Klien ingin setiap Purchase Order di atas Rp50 juta disetujui manajer dulu. Di Odoo:",o:["Aktifkan Purchase Order Approval di Purchase → Settings dengan batas nominal tertentu","Wajib membuat modul baru","Minta staf menelepon manajer","Tidak mungkin"],a:0,
 e:"Ini fitur standar (persetujuan bertingkat untuk pembelian). Pengetahuan fitur standar seperti ini membuat functional consultant cepat memberi solusi tanpa biaya development.",
 w:[null,"Tidak perlu kode.","Proses manual tidak tercatat di sistem.","Fiturnya tersedia."]},
{k:"stok",t:"is",lv:1,q:"Dokumen penerimaan barang dari vendor di Odoo Inventory disebut ________ (bahasa Inggris)",a:["receipt","receipts","goods receipt"],
 h:"Diawali huruf R, artinya 'penerimaan'.",
 e:"Receipt mencatat barang yang benar-benar diterima. Jika vendor mengirim sebagian, Odoo bisa membuat backorder untuk sisanya."},

// ---- BAB 4: Akuntansi dasar untuk konsultan ----
{k:"akuntansi",t:"mc",lv:1,q:"Persamaan dasar akuntansi:",o:["Aset = Liabilitas + Ekuitas","Pendapatan = Aset − Beban","Kas = Laba","Aset = Pendapatan + Beban"],a:0,
 e:"Semua yang dimiliki perusahaan (aset) dibiayai oleh utang (liabilitas) atau modal pemilik (ekuitas). Setiap transaksi menjaga persamaan ini tetap seimbang — itulah inti pencatatan debit-kredit.",
 w:[null,"Pendapatan dan beban masuk ke laporan laba rugi.","Kas tidak sama dengan laba.","Bukan persamaan akuntansi."]},
{k:"akuntansi",t:"mc",lv:1,q:"Piutang usaha (Accounts Receivable) adalah…",o:["Uang yang masih harus DITERIMA dari pelanggan atas invoice yang belum dibayar","Uang yang harus kita bayar ke vendor","Saldo bank","Gaji karyawan"],a:0,
 e:"Invoice ke pelanggan menambah piutang; pembayaran pelanggan menguranginya. Kebalikannya, Accounts Payable (hutang usaha) adalah kewajiban membayar vendor.",
 w:[null,"Itu hutang usaha (Accounts Payable).","Saldo bank adalah aset kas.","Gaji adalah beban."]},
{k:"akuntansi",t:"mc",lv:2,q:"Invoice penjualan Rp10 juta (tanpa pajak) di-posting. Jurnal yang dibuat otomatis:",o:["Debit Piutang 10 jt, Kredit Pendapatan 10 jt","Debit Pendapatan 10 jt, Kredit Piutang 10 jt","Debit Bank 10 jt, Kredit Pendapatan 10 jt","Debit Beban 10 jt, Kredit Hutang 10 jt"],a:0,
 e:"Aset (piutang) bertambah di DEBIT; pendapatan bertambah di KREDIT. Uang belum masuk ke bank, jadi yang bertambah adalah piutang. Konsultan tidak harus menjadi akuntan, tapi harus bisa membaca jurnal yang dibuat sistem.",
 w:[null,"Terbalik.","Bank baru bertambah saat pelanggan membayar.","Itu pola jurnal tagihan vendor."]},
{k:"akuntansi",t:"mc",lv:2,q:"Pelanggan membayar invoice Rp10 juta ke rekening bank perusahaan. Jurnalnya:",o:["Debit Bank 10 jt, Kredit Piutang 10 jt","Debit Piutang 10 jt, Kredit Bank 10 jt","Debit Pendapatan 10 jt, Kredit Bank 10 jt","Tidak ada jurnal"],a:0,
 e:"Kas/bank bertambah (debit), piutang berkurang (kredit). Pendapatan TIDAK dicatat lagi karena sudah diakui saat invoice di-posting.",
 w:[null,"Terbalik.","Pendapatan sudah diakui saat invoice.","Setiap penerimaan uang harus dicatat."]},
{k:"akuntansi",t:"mc",lv:2,q:"Misalkan tarif PPN 11%. Invoice berisi harga Rp10 juta + PPN Rp1,1 juta. Jurnal yang tepat:",o:["Debit Piutang 11,1 jt; Kredit Pendapatan 10 jt; Kredit PPN Keluaran 1,1 jt","Debit Piutang 10 jt; Kredit Pendapatan 10 jt","Debit Piutang 11,1 jt; Kredit Pendapatan 11,1 jt","Debit PPN 1,1 jt; Kredit Bank 1,1 jt"],a:0,
 e:"Pelanggan berutang total 11,1 jt (piutang), tapi yang menjadi pendapatan perusahaan hanya 10 jt. PPN 1,1 jt adalah titipan yang harus disetor ke negara (liabilitas). Di Odoo, akun pajak diatur di konfigurasi Taxes. Tarif dan aturan pajak bisa berubah — selalu cek aturan terbaru bersama tim pajak klien.",
 w:[null,"PPN belum dicatat.","PPN bukan pendapatan perusahaan.","Saat invoice diterbitkan belum ada uang yang keluar dari bank."]},
{k:"akuntansi",t:"mc",lv:2,q:"Rekonsiliasi bank (bank reconciliation) adalah…",o:["Mencocokkan mutasi di rekening koran bank dengan pembayaran/invoice yang tercatat di sistem","Membuka rekening bank baru","Menghitung gaji","Menghapus transaksi lama"],a:0,
 e:"Tujuannya memastikan saldo di sistem sama dengan saldo bank sungguhan, dan setiap uang masuk/keluar terhubung ke dokumen yang benar. Odoo bisa mengimpor mutasi bank lalu menyarankan pencocokannya.",
 w:[null,"Bukan soal membuka rekening.","Gaji diurus di Payroll.","Transaksi tidak dihapus; justru dicocokkan."]},
{k:"akuntansi",t:"mc",lv:2,q:"Pendapatan dan beban dilaporkan di … , sedangkan aset, liabilitas, dan ekuitas di …",o:["Laporan Laba Rugi; Neraca (Balance Sheet)","Neraca; Laporan Laba Rugi","Laporan stok; laporan penjualan","Invoice; Purchase Order"],a:0,
 e:"Laba rugi = kinerja selama satu PERIODE (bulan/tahun). Neraca = posisi keuangan pada satu TITIK waktu. Keduanya tersedia di menu Reporting aplikasi Accounting.",
 w:[null,"Terbalik.","Itu laporan operasional, bukan laporan keuangan utama.","Itu dokumen transaksi, bukan laporan."]},
{k:"akuntansi",t:"mc",lv:2,q:"Dengan basis akrual (accrual basis), pendapatan diakui saat…",o:["Penjualan terjadi/invoice diterbitkan, meskipun uangnya belum diterima","Uang diterima di bank","Akhir tahun","Pelanggan menandatangani kontrak 5 tahun"],a:0,
 e:"Akrual mencatat kejadian ekonominya, bukan aliran kasnya. Karena itu perusahaan bisa 'untung' di laporan laba rugi tapi kekurangan kas jika banyak pelanggan belum membayar — piutang perlu dipantau.",
 w:[null,"Itu basis kas (cash basis).","Pengakuan tidak menunggu akhir tahun.","Kontrak saja belum berarti pendapatan sudah diakui."]},
{k:"akuntansi",t:"mc",lv:2,q:"Pelanggan mengembalikan barang yang sudah di-invoice. Dokumen yang tepat di Odoo untuk membatalkan sebagian/seluruh tagihan:",o:["Credit Note","Menghapus invoice","Purchase Order","Vendor Bill"],a:0,
 e:"Invoice yang sudah di-posting tidak dihapus (jejak audit harus terjaga). Credit note membalik nilainya secara resmi.",
 w:[null,"Menghapus invoice yang sudah di-posting merusak jejak audit.","PO untuk membeli dari vendor.","Vendor bill adalah tagihan dari pemasok."]},
{k:"akuntansi",t:"mc",lv:2,q:"Journal standar di Odoo Accounting meliputi…",o:["Customer Invoices (Sales), Vendor Bills (Purchase), Bank, Cash, Miscellaneous","Hanya satu journal untuk semua","Journal per karyawan","Journal per produk"],a:0,
 e:"Journal mengelompokkan jurnal berdasarkan jenis transaksinya. Bank dan Cash biasanya dibuat per rekening/kas.",
 w:[null,"Odoo memisahkan jurnal per jenis transaksi.","Karyawan bukan dasar pengelompokan journal.","Produk tidak menjadi journal."]},
{k:"akuntansi",t:"is",lv:1,q:"Daftar seluruh akun yang dipakai perusahaan (kas, piutang, pendapatan, beban, dst.) disebut Chart of ________",a:["accounts","account"],
 h:"Chart of A…",
 e:"Chart of Accounts (bagan akun). Odoo menyediakan template per negara (localization), termasuk Indonesia, yang bisa disesuaikan."},

// ---- BAB 5: Metodologi implementasi ----
{k:"implementasi",t:"mc",lv:1,q:"Urutan tahap implementasi ERP yang umum:",o:["Analisis kebutuhan → Konfigurasi/desain → Migrasi data → UAT → Training → Go-live → Support","Go-live → Training → Analisis","Migrasi data → Go-live → Analisis kebutuhan","Training → Go-live → Konfigurasi"],a:0,
 e:"Setiap tahap bergantung pada tahap sebelumnya. Tahap setelah go-live (hypercare/support) sering dilupakan, padahal di situlah user paling banyak bertanya.",
 w:[null,"Go-live tanpa analisis = sistem tidak sesuai kebutuhan.","Data dimigrasi ke sistem yang sudah dikonfigurasi.","Training harus memakai sistem yang sudah dikonfigurasi."]},
{k:"implementasi",t:"mc",lv:1,q:"Cara terbaik melakukan requirement gathering:",o:["Wawancara pengguna dan amati proses kerja nyata (as-is), minta contoh dokumen/laporan yang mereka pakai sekarang","Langsung mengonfigurasi sesuai tebakan","Hanya bertanya ke direktur","Mengirim formulir panjang tanpa diskusi"],a:0,
 e:"Orang yang menjalankan proses tahu detail yang tidak diketahui manajemen. Contoh dokumen (faktur, laporan Excel) adalah 'harta karun' untuk memahami kebutuhan.",
 w:[null,"Tebakan menyebabkan pekerjaan ulang.","Direktur penting, tapi tidak tahu semua detail operasional.","Formulir tanpa diskusi sering diisi asal-asalan."]},
{k:"implementasi",t:"mc",lv:2,q:"Istilah 'as-is' dan 'to-be' dalam analisis proses:",o:["As-is = proses saat ini. To-be = proses yang diinginkan setelah memakai sistem baru","As-is = sistem lama dihapus","To-be = daftar karyawan baru","Keduanya nama modul Odoo"],a:0,
 e:"Memetakan as-is (sering dengan flowchart) membantu menemukan masalah. To-be menunjukkan bagaimana Odoo akan mengubah proses. Selisih keduanya menjadi bahan training dan manajemen perubahan.",
 w:[null,"As-is adalah dokumentasi kondisi sekarang.","To-be adalah proses, bukan daftar orang.","Itu istilah analisis bisnis, bukan modul."]},
{k:"implementasi",t:"mc",lv:2,q:"Fit-gap analysis adalah…",o:["Memetakan kebutuhan klien: mana yang sudah dipenuhi fitur standar (fit) dan mana yang belum (gap)","Mengukur ukuran baju karyawan","Menghitung selisih stok","Analisis kesehatan server"],a:0,
 e:"Hasil fit-gap menentukan biaya dan jadwal proyek. Setiap gap punya pilihan solusi: ubah proses, konfigurasi kreatif, modul yang sudah ada, atau kustomisasi kode.",
 w:[null,"Bukan soal 'fit' ukuran.","Selisih stok diselesaikan dengan inventory adjustment.","Itu pekerjaan infrastruktur."]},
{k:"implementasi",t:"mc",lv:2,q:"Urutan migrasi data yang benar ke Odoo:",o:["Master data dulu (akun, pelanggan, vendor, produk), lalu saldo awal (stok, piutang, hutang)","Saldo awal dulu, master data belakangan","Transaksi 10 tahun terakhir dulu","Urutan tidak berpengaruh"],a:0,
 e:"Transaksi dan saldo merujuk ke master data. Mengimpor saldo piutang sebelum data pelanggannya ada akan gagal. Odoo menyediakan Import (Excel/CSV) dengan template, dan External ID untuk menghubungkan antar data.",
 w:[null,"Saldo butuh master data sebagai acuan.","Biasanya hanya saldo awal yang dimigrasi, bukan seluruh riwayat transaksi.","Urutan sangat menentukan keberhasilan impor."]},
{k:"implementasi",t:"mc",lv:2,q:"UAT (User Acceptance Testing) sebaiknya dilakukan oleh…",o:["Key user dari pihak klien, memakai skenario dan data yang mirip pekerjaan nyata","Developer yang membuat sistem","Konsultan sendirian","Tidak perlu dilakukan"],a:0,
 e:"UAT memastikan sistem bisa dipakai oleh orang yang akan memakainya setiap hari. Developer cenderung menguji 'jalur yang benar', sedangkan user nyata menemukan kasus-kasus yang tidak terpikirkan.",
 w:[null,"Developer melakukan unit/system test, bukan acceptance test.","Konsultan mendampingi, tapi yang menyetujui adalah user.","Melewatkan UAT membuat masalah baru muncul setelah go-live."]},
{k:"implementasi",t:"mc",lv:2,q:"Di tengah proyek, klien meminta 5 fitur baru yang tidak ada di kesepakatan awal. Langkah yang profesional:",o:["Catat sebagai change request, analisis dampaknya ke biaya & jadwal, lalu sepakati bersama sebelum dikerjakan","Langsung kerjakan semua tanpa membahas","Tolak tanpa penjelasan","Diam-diam undur jadwal go-live"],a:0,
 e:"Ini disebut scope creep — penyebab utama proyek ERP molor dan rugi. Konsultan menjaga hubungan baik dengan transparan: 'Bisa, dampaknya +2 minggu dan biaya X. Mau dimasukkan fase 2?'",
 w:[null,"Proyek akan molor dan anggaran membengkak.","Menolak tanpa analisis merusak hubungan.","Tidak transparan dan merusak kepercayaan."]},
{k:"implementasi",t:"mc",lv:3,q:"Staf gudang menolak memakai sistem baru: 'Excel lebih cepat.' Pendekatan terbaik:",o:["Libatkan mereka sejak awal, tunjukkan manfaat untuk pekerjaan MEREKA (misal tidak perlu rekap manual), beri training praktis dan pendampingan setelah go-live","Laporkan ke direktur agar mereka diberi sanksi","Biarkan mereka tetap memakai Excel","Matikan komputer mereka"],a:0,
 e:"Kegagalan ERP lebih sering karena faktor manusia daripada teknologi. Change management — komunikasi, pelatihan, dan dukungan — adalah bagian inti pekerjaan konsultan. Kemampuanmu menjelaskan dan mengajar orang adalah modal besar di sini.",
 w:[null,"Paksaan menimbulkan resistensi diam-diam dan data asal input.","Data akan terpecah lagi di dua sistem.","Tidak menyelesaikan masalah."]},
{k:"implementasi",t:"mc",lv:2,q:"Teknik prioritas MoSCoW membagi kebutuhan menjadi…",o:["Must have, Should have, Could have, Won't have (for now)","Monday, Sunday, Couple, Week","Modul, Sistem, Cloud, Website","Manajer, Staf, Consultant, Warehouse"],a:0,
 e:"Membantu memutuskan apa yang wajib ada saat go-live dan apa yang bisa menyusul di fase berikutnya. Sangat berguna saat anggaran atau waktu terbatas.",
 w:[null,"Bukan nama hari.","Bukan komponen teknis.","Bukan peran dalam proyek."]},
{k:"implementasi",t:"mc",lv:2,q:"Beda go-live 'big bang' dan 'phased':",o:["Big bang: semua modul/cabang pindah sekaligus. Phased: bertahap (misal Sales & Inventory dulu, Accounting menyusul)","Big bang selalu lebih aman","Phased berarti tidak pernah go-live","Tidak ada bedanya"],a:0,
 e:"Big bang lebih cepat tapi berisiko tinggi; phased lebih aman tapi butuh integrasi sementara dengan sistem lama. Pilihannya tergantung ukuran perusahaan, kesiapan tim, dan toleransi risiko.",
 w:[null,"Big bang justru berisiko lebih tinggi.","Phased tetap go-live, hanya bertahap.","Strategi dan risikonya berbeda."]},
{k:"implementasi",t:"mc",lv:3,q:"Klien: 'Saya mau laporan penjualan per salesperson setiap Senin.' Respons pertama yang paling baik dari konsultan:",o:["Bertanya dulu: metrik apa saja, siapa yang membaca, dibandingkan dengan apa (target?), dan keputusan apa yang diambil dari laporan itu — lalu cek apakah laporan/pivot standar sudah cukup","Langsung meminta developer membuat modul laporan baru","Mengirim export Excel mentah setiap Senin","Menjawab bahwa itu tidak mungkin"],a:0,
 e:"Memahami 'kenapa' di balik permintaan menghasilkan solusi yang tepat dan murah. Sering kali pivot standar + filter tersimpan + email terjadwal sudah memenuhi kebutuhan. Inilah pola pikir yang dinilai saat interview functional consultant.",
 w:[null,"Mahal dan mungkin tidak perlu.","Data mentah membebani pembaca.","Kebutuhan ini sangat umum dan bisa dipenuhi."]},
{k:"implementasi",t:"is",lv:1,q:"Tahap pengujian oleh pengguna klien sebelum go-live disingkat ___",a:["uat"],
 h:"User Acceptance Testing.",
 e:"UAT (User Acceptance Testing). Hasilnya berupa daftar temuan (bug/kebutuhan) dan persetujuan resmi (sign-off) dari klien bahwa sistem siap dipakai."}
];

const MATERI_ERP = [
{k:"erp",judul:"Konsep ERP & Mengenal Odoo",materi:`
<p><b>ERP</b> menyatukan proses bisnis dalam <b>satu database</b>. Tanpa ERP: sales, gudang, dan keuangan punya file sendiri yang sering tidak cocok. Dengan ERP: satu transaksi langsung terlihat oleh semua bagian.</p>
<pre><code>Sales Order dikonfirmasi
   ├─▶ Inventory : Delivery Order dibuat otomatis
   ├─▶ Accounting: siap dibuat invoice → piutang
   └─▶ Laporan   : penjualan per salesperson langsung ter-update</code></pre>
<p><b>Odoo</b> = ERP open-source yang sangat populer di Indonesia.</p>
<ul>
<li>Teknologi: <b>Python</b> (backend), <b>PostgreSQL</b> (database), <b>JavaScript/OWL</b> (tampilan).</li>
<li>Edisi: <b>Community</b> (gratis, open-source) dan <b>Enterprise</b> (berbayar, ada Studio, akuntansi lengkap, dan dukungan resmi).</li>
<li>Apps utama: CRM, Sales, Purchase, Inventory, Invoicing/Accounting, Manufacturing, Employees, Website.</li>
</ul>
<p><b>Master data vs transaksi:</b> produk, pelanggan, vendor, akun (master) ← dipakai oleh SO, PO, invoice, pembayaran (transaksi).</p>
<p><b>Peran di proyek Odoo:</b></p>
<table class="mini-pivot"><tr><th>Functional Consultant</th><th>Technical Consultant</th></tr>
<tr><td>Memahami proses bisnis klien, fit-gap, konfigurasi, training, UAT</td><td>Membuat modul kustom (Python, XML, JS), integrasi, migrasi data teknis</td></tr></table>
<div class="catatan">🧭 Prinsip emas konsultan: <b>standar dulu → konfigurasi → modul yang sudah ada → kustomisasi kode terakhir.</b> Developer Mode (Settings → Activate the developer mode, atau <code>?debug=1</code>) membantu menelusuri field dan konfigurasi.</div>
<div class="praktik">🧪 <b>Praktik:</b> buat database trial gratis di odoo.com atau install Odoo Community di laptop. Install Sales + Inventory + Invoicing, lalu jalankan satu alur penjualan lengkap.</div>`},

{k:"sales",judul:"CRM & Penjualan (Lead-to-Cash)",materi:`
<pre><code>CRM:   Lead → Opportunity → (New → Qualified → Proposition → Won / Lost)
Sales: Quotation → Sales Order → Delivery → Invoice → Payment</code></pre>
<p><b>Konfigurasi penting yang sering ditanyakan klien:</b></p>
<table class="mini-pivot"><tr><th>Kebutuhan klien</th><th>Fitur Odoo</th></tr>
<tr><td>Harga grosir / promo periode tertentu</td><td>Pricelists</td></tr>
<tr><td>Tagih sesuai pesanan atau sesuai yang dikirim?</td><td>Invoicing Policy: Ordered / Delivered quantities</td></tr>
<tr><td>Uang muka</td><td>Create Invoice → Down payment (% atau nominal)</td></tr>
<tr><td>Salesperson hanya melihat datanya sendiri</td><td>Access Rights: User: Own Documents Only</td></tr>
<tr><td>Analisis kenapa deal gagal</td><td>Lost Reasons</td></tr>
<tr><td>Penjualan per sales per bulan</td><td>Reporting → Pivot</td></tr></table>
<p><b>Pipeline tertimbang</b> = expected revenue × probabilitas. Rp50 jt × 40% = Rp20 jt.</p>
<div class="catatan">💼 <b>Hubungkan dengan magangmu:</b> dashboard salesperson bergantung pada data yang bersih — field Salesperson, Sales Team, dan tanggal konfirmasi harus selalu terisi. Di interview, ceritakan bagaimana kamu memastikan datanya benar, bukan hanya grafiknya.</div>`},

{k:"stok",judul:"Pembelian & Inventory (Procure-to-Pay)",materi:`
<pre><code>Purchase: RFQ → Purchase Order → Receipt → Vendor Bill → Payment
Stok:     On hand (fisik) | Forecasted = on hand + masuk − keluar</code></pre>
<table class="mini-pivot"><tr><th>Konsep</th><th>Arti singkat</th></tr>
<tr><td>Three-way matching</td><td>PO = Receipt = Vendor Bill sebelum membayar</td></tr>
<tr><td>Reordering rule Min/Max</td><td>Forecast &lt; Min → pesan sampai Max (Min 10, Max 50, stok 5 → beli 45)</td></tr>
<tr><td>MTS vs MTO</td><td>Stok disiapkan dulu vs beli/produksi setelah ada pesanan</td></tr>
<tr><td>Lot vs Serial</td><td>Per batch (obat, kedaluwarsa) vs per unit (laptop, garansi)</td></tr>
<tr><td>Inventory Adjustment</td><td>Koreksi resmi hasil stock opname</td></tr>
<tr><td>PO Approval</td><td>PO di atas nominal tertentu butuh persetujuan manajer</td></tr></table>
<p><b>Valuasi persediaan</b> (diatur di Product Category): Beli 10 @100rb lalu 10 @120rb, jual 10:</p>
<pre><code>FIFO     → HPP 1.000.000 (yang masuk duluan keluar duluan)
AVCO     → HPP 1.100.000 (harga rata-rata 110rb)
Standard → memakai harga standar yang ditetapkan</code></pre>
<div class="catatan">⚠️ Selisih stok sistem vs fisik adalah keluhan klien nomor satu. Penyebab umum: barang keluar-masuk tanpa dicatat, salah satuan (pcs vs box), dan penerimaan parsial yang tidak divalidasi.</div>`},

{k:"akuntansi",judul:"Akuntansi Dasar untuk Konsultan ERP",materi:`
<p>Kamu tidak harus menjadi akuntan, tapi harus bisa <b>membaca jurnal yang dibuat sistem</b> dan berbicara dengan tim finance klien.</p>
<pre><code>Aset = Liabilitas + Ekuitas
Debit menambah: aset, beban      | Kredit menambah: liabilitas, ekuitas, pendapatan</code></pre>
<table class="mini-pivot"><tr><th>Kejadian di Odoo</th><th>Debit</th><th>Kredit</th></tr>
<tr><td>Invoice pelanggan 10 jt</td><td>Piutang 10 jt</td><td>Pendapatan 10 jt</td></tr>
<tr><td>Invoice + PPN (contoh 11%)</td><td>Piutang 11,1 jt</td><td>Pendapatan 10 jt + PPN Keluaran 1,1 jt</td></tr>
<tr><td>Pelanggan membayar</td><td>Bank</td><td>Piutang</td></tr>
<tr><td>Tagihan vendor (beban)</td><td>Beban</td><td>Hutang usaha</td></tr>
<tr><td>Bayar vendor</td><td>Hutang usaha</td><td>Bank</td></tr></table>
<ul>
<li><b>Journal</b>: Customer Invoices, Vendor Bills, Bank, Cash, Miscellaneous.</li>
<li><b>Rekonsiliasi bank</b>: cocokkan mutasi rekening dengan pembayaran di sistem.</li>
<li><b>Credit note</b>: membatalkan/retur invoice yang sudah di-posting (jangan dihapus).</li>
<li><b>Akrual</b>: pendapatan diakui saat invoice, bukan saat uang diterima.</li>
<li><b>Laba Rugi</b> (periode) vs <b>Neraca</b> (posisi pada satu tanggal).</li>
</ul>
<div class="catatan">ℹ️ Tarif dan aturan pajak bisa berubah. Contoh PPN di sini hanya ilustrasi; saat implementasi, selalu konfirmasi aturan terbaru dengan tim pajak klien.</div>`},

{k:"implementasi",judul:"Metodologi Implementasi ERP",materi:`
<pre><code>1. Analisis kebutuhan (as-is → to-be, fit-gap)
2. Desain & konfigurasi
3. Migrasi data (master data → saldo awal)
4. UAT oleh key user klien
5. Training (key user / train-the-trainer + SOP)
6. Go-live (big bang atau bertahap)
7. Support / hypercare</code></pre>
<p><b>Fit-gap</b>: kebutuhan yang dipenuhi fitur standar (fit) vs belum (gap). Solusi gap, dari yang paling disarankan: ubah proses → konfigurasi → modul yang sudah ada → kustomisasi.</p>
<p><b>Keterampilan yang dinilai di interview Functional Consultant:</b></p>
<ul>
<li><b>Bertanya sebelum menjawab</b>: "Keputusan apa yang ingin Bapak/Ibu ambil dari laporan ini?"</li>
<li><b>Mengelola scope</b>: permintaan baru → change request (dampak biaya & jadwal) → MoSCoW.</li>
<li><b>Change management</b>: libatkan user sejak awal, tunjukkan manfaat untuk mereka, latih dengan contoh nyata.</li>
<li><b>Dokumentasi</b>: catatan rapat, BRD/FSD, SOP, dan panduan user.</li>
</ul>
<div class="catatan">🌟 Profilmu (lulusan TI + suka menjelaskan & mengajar + magang Odoo) sangat cocok untuk peran ini: kamu bisa berbicara dengan user bisnis sekaligus memahami batasan teknis saat berdiskusi dengan developer.</div>`}
];
