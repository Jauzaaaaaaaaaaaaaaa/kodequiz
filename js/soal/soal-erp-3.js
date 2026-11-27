// ============ ERP & ODOO — tambahan 2x lipat untuk 19 bab non-hitung ============
// Dimuat SETELAH soal-erp-hitung.js dan soal-latihan-ekstra.js, jadi ID soal lama tidak bergeser.
// Bab Lab Hitung digandakan lewat generator (alat/buat-soal-odoo.py). Fakta mengikuti Odoo 17. Kunci di indeks 0 (opsi diacak).
(function () {
  const M = (k, lv, q, o, e, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_ERP.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_ERP.push(
  // ---- erp (+12) ----
  M("erp", 1, "ERP paling tepat diartikan sebagai…", ["Satu sistem terpadu yang menghubungkan penjualan, pembelian, stok, akuntansi, dan SDM dengan satu database", "Aplikasi akuntansi saja", "Website toko online", "Spreadsheet bersama"], "Kekuatan ERP: data dimasukkan sekali lalu dipakai semua bagian (pesanan → stok → jurnal otomatis)."),
  M("erp", 1, "Masalah utama yang diselesaikan ERP di perusahaan yang masih memakai banyak Excel terpisah:", ["Data ganda dan tidak sinkron antarbagian", "Komputer lambat", "Karyawan terlalu banyak", "Internet mahal"], "Contoh: stok di Excel gudang berbeda dengan angka yang dipakai tim sales."),
  M("erp", 1, "Beda Odoo Community dan Enterprise:", ["Community gratis dan open source; Enterprise berbayar dengan aplikasi/fitur tambahan dan dukungan resmi", "Sama persis", "Enterprise hanya untuk perusahaan besar dan tidak bisa diuji", "Community tidak punya modul Penjualan"], "Contoh fitur khas Enterprise: Studio, aplikasi mobile resmi, sebagian aplikasi akuntansi lanjutan."),
  M("erp", 2, "Satu 'aplikasi' di Odoo (Sales, Inventory, …) secara teknis adalah…", ["Modul yang dipasang dan bisa saling bergantung (depends)", "Program terpisah dengan database sendiri", "Halaman web statis", "Laporan Excel"], "Memasang Sales otomatis memasang modul yang dibutuhkannya."),
  M("erp", 2, "Dokumen bisnis di Odoo saling terhubung. Dari Sales Order kamu bisa membuka langsung…", ["Delivery order dan invoice yang dibuat darinya (smart button)", "Hanya data pelanggan", "Tidak ada", "Laporan pajak tahunan"], "Smart button di kanan atas form menunjukkan dokumen terkait dan jumlahnya."),
  M("erp", 2, "Model data pelanggan, pemasok, dan kontak di Odoo adalah…", ["res.partner (satu model untuk semua kontak)", "res.customer dan res.vendor terpisah", "crm.lead", "account.move"], "Peran ditentukan oleh pemakaian (customer_rank, supplier_rank), bukan model berbeda."),
  M("erp", 2, "Multi-company di Odoo berguna untuk…", ["Mengelola beberapa badan usaha dalam satu database dengan data dan akuntansi terpisah", "Banyak pengguna di satu perusahaan", "Banyak bahasa", "Banyak gudang di satu perusahaan"], "Banyak gudang cukup dengan multi-warehouse; multi-company untuk badan hukum berbeda."),
  M("erp", 2, "Odoo SaaS (odoo.com), Odoo.sh, dan on-premise berbeda dalam…", ["Tempat dan cara hosting serta kebebasan memasang modul kustom", "Bahasa pemrograman", "Jumlah aplikasi bawaan", "Warna tampilan"], "Odoo Online (SaaS) tidak mengizinkan modul Python kustom; Odoo.sh dan on-premise mengizinkan."),
  M("erp", 2, "Peran konsultan fungsional Odoo:", ["Memahami proses bisnis klien, memetakan ke fitur Odoo, mengonfigurasi, dan melatih pengguna", "Menulis semua kode Python", "Memperbaiki server", "Menjual laptop"], "Pengembang menulis modul untuk gap yang tidak bisa diselesaikan dengan konfigurasi."),
  M("erp", 3, "Kenapa disarankan 'konfigurasi dulu, kustomisasi belakangan'?", ["Kustomisasi menambah biaya perawatan dan menyulitkan upgrade versi", "Konfigurasi selalu gratis", "Kustomisasi dilarang Odoo", "Tidak ada bedanya"], "Banyak kebutuhan bisa dipenuhi dengan pengaturan, aturan otomatis, atau perubahan proses."),
  I("erp", 1, "Singkatan sistem perencanaan sumber daya perusahaan: ____", ["erp"], "Enterprise Resource Planning."),
  I("erp", 2, "Model Odoo untuk semua kontak (pelanggan, vendor, karyawan alamat): res.____", ["partner"], "res.partner."),

  // ---- sales (+12) ----
  M("sales", 1, "Urutan Lead-to-Cash di Odoo:", ["Lead/Opportunity → Quotation → Sales Order → Delivery → Invoice → Payment", "Invoice → Quotation → Delivery", "Payment → Lead → Invoice", "Delivery → Lead → Quotation"], "Setiap langkah membuat dokumen berikutnya, jadi jejaknya lengkap."),
  M("sales", 1, "Quotation berubah menjadi Sales Order saat…", ["Dikonfirmasi (tombol Confirm), atau pelanggan menandatangani/membayar online", "Dicetak", "Dikirim lewat email saja", "Invoice dibuat"], "Status berubah dari Quotation/Quotation Sent ke Sales Order."),
  M("sales", 2, "Setelah Sales Order produk fisik dikonfirmasi (Inventory terpasang), Odoo otomatis membuat…", ["Delivery order (transfer keluar) di gudang", "Invoice terbayar", "Purchase order selalu", "Jurnal penggajian"], "Tim gudang memvalidasi delivery saat barang dikirim."),
  M("sales", 2, "Pricelist di Sales berguna untuk…", ["Harga berbeda per pelanggan, jumlah, atau periode (grosir, promo)", "Daftar produk saja", "Pajak", "Ongkir"], "Aktifkan di Sales > Settings > Pricelists."),
  M("sales", 2, "Kebijakan faktur 'Delivered quantities' berarti…", ["Invoice hanya untuk jumlah yang sudah dikirim", "Invoice untuk semua yang dipesan", "Tidak bisa ditagih", "Invoice dibuat sebelum pesanan"], "'Ordered quantities' cocok untuk pembayaran di muka."),
  M("sales", 2, "Pelanggan membatalkan sebagian barang setelah invoice diposting. Cara benar:", ["Buat Credit Note (nota kredit) dari invoice tersebut", "Hapus invoice", "Ubah angka invoice yang sudah posted", "Buat sales order baru minus"], "Invoice yang sudah diposting tidak diedit; dikoreksi dengan credit note."),
  M("sales", 2, "Diskon per baris di Sales Order aktif setelah…", ["Mengaktifkan 'Discounts' di Sales > Settings", "Memasang modul akuntansi", "Selalu aktif", "Hanya di POS"], "Kolom Disc.% muncul di baris pesanan."),
  M("sales", 2, "Laporan Sales Analysis (pivot) paling cocok untuk…", ["Melihat penjualan per salesperson, produk, atau bulan", "Mencetak invoice", "Mengirim email", "Mengatur stok"], "Bisa diekspor ke Excel atau diubah ke grafik."),
  M("sales", 2, "Fitur 'Online Signature' dan 'Online Payment' pada quotation berarti…", ["Pelanggan bisa menyetujui dan membayar langsung dari tautan portal", "Salesperson menandatangani", "Pembayaran di kasir", "Wajib untuk semua"], "Mempercepat closing tanpa bolak-balik dokumen."),
  M("sales", 3, "Produk jasa (service) di Sales Order dengan pengaturan 'Create a task in a project' akan…", ["Membuat task di Project untuk dikerjakan tim saat pesanan dikonfirmasi", "Membuat delivery", "Membuat manufacturing order", "Tidak berbuat apa-apa"], "Timesheet di task bisa menjadi dasar invoice (delivered by timesheets)."),
  I("sales", 1, "Dokumen penawaran sebelum menjadi Sales Order: ____", ["quotation"], "Quotation."),
  I("sales", 2, "Dokumen koreksi untuk invoice yang sudah diposting: credit ____", ["note"], "Credit note."),

  // ---- stok (+11) ----
  M("stok", 1, "Urutan Procure-to-Pay:", ["RFQ → Purchase Order → Receipt → Vendor Bill → Payment", "Bill → RFQ → Receipt", "Payment → PO → RFQ", "Receipt → RFQ → Bill"], "RFQ (Request for Quotation) menjadi PO setelah dikonfirmasi."),
  M("stok", 1, "Saat Purchase Order dikonfirmasi, Odoo membuat…", ["Receipt (transfer masuk) yang menunggu barang datang", "Invoice pelanggan", "Delivery order", "Jurnal gaji"], "Gudang memvalidasi receipt sesuai jumlah yang diterima."),
  M("stok", 2, "Beda On Hand dan Forecasted quantity:", ["On Hand = fisik sekarang; Forecasted = On Hand + barang masuk - barang keluar yang sudah direncanakan", "Sama saja", "Forecasted = barang rusak", "On Hand = barang dipesan"], "Keputusan beli melihat forecasted, bukan hanya fisik."),
  M("stok", 2, "Reordering rule (min/max) membuat Odoo…", ["Otomatis membuat RFQ/MO saat stok perkiraan turun di bawah minimum", "Menghapus stok", "Mengubah harga jual", "Mengirim barang"], "Dijalankan scheduler atau tombol Replenishment."),
  M("stok", 2, "Barang yang datang kurang dari PO (backorder) ditangani dengan…", ["Validasi jumlah yang datang, lalu buat backorder untuk sisanya", "Batalkan PO", "Ubah PO jadi jumlah yang datang", "Buat PO baru manual"], "Odoo bertanya: Create Backorder atau No Backorder."),
  M("stok", 2, "Inventory adjustment (stock opname) dipakai untuk…", ["Menyamakan jumlah sistem dengan hitungan fisik dan mencatat selisihnya", "Membeli barang", "Menjual barang", "Mengganti nama produk"], "Selisih tercatat di lokasi Inventory adjustment."),
  M("stok", 2, "Tipe produk yang dihitung stoknya di Odoo 17:", ["Storable Product", "Consumable", "Service", "Semua tipe"], "Consumable tidak dilacak jumlahnya; service tidak punya stok."),
  M("stok", 2, "Unit of Measure (UoM) beli bisa berbeda dengan UoM jual, misalnya…", ["Beli per Dus isi 12, jual per Pcs", "Harus selalu sama", "Hanya untuk jasa", "UoM tidak bisa diubah"], "Kategori UoM harus sama (Unit) agar bisa dikonversi."),
  M("stok", 3, "Vendor bill dengan kontrol 'On received quantities' akan…", ["Hanya menagih jumlah yang sudah diterima di gudang", "Menagih semua jumlah PO", "Tidak bisa dibuat", "Menambah stok"], "Mencegah membayar barang yang belum datang (3-way matching)."),
  I("stok", 1, "Singkatan permintaan penawaran harga ke vendor: ____", ["rfq"], "Request for Quotation."),
  I("stok", 2, "Sisa barang yang belum datang dicatat sebagai ____order", ["back"], "Backorder."),

  // ---- akuntansi (+11) ----
  M("akuntansi", 1, "Persamaan dasar akuntansi:", ["Aset = Liabilitas + Ekuitas", "Aset = Pendapatan - Beban", "Laba = Aset + Utang", "Kas = Piutang"], "Setiap jurnal menjaga persamaan ini tetap seimbang."),
  M("akuntansi", 1, "Dalam double-entry, setiap transaksi dicatat…", ["Minimal di dua akun dengan total debit = total kredit", "Di satu akun saja", "Hanya di kas", "Dua kali di akun yang sama"], "Contoh penjualan tunai: debit Kas, kredit Pendapatan."),
  M("akuntansi", 2, "Penjualan kredit Rp 10 juta (tanpa pajak) dicatat…", ["Debit Piutang 10 jt, kredit Pendapatan 10 jt", "Debit Pendapatan, kredit Kas", "Debit Kas, kredit Piutang", "Debit Beban, kredit Utang"], "Saat dibayar: debit Bank, kredit Piutang."),
  M("akuntansi", 2, "Akun yang bertambah di sisi DEBIT:", ["Aset dan beban", "Utang dan pendapatan", "Modal", "Semua akun"], "Liabilitas, ekuitas, dan pendapatan bertambah di sisi kredit."),
  M("akuntansi", 2, "Laporan Laba Rugi berisi…", ["Pendapatan dikurangi beban dalam satu periode", "Aset dan utang pada satu tanggal", "Arus kas harian", "Daftar pelanggan"], "Neraca (Balance Sheet) memotret posisi pada satu tanggal."),
  M("akuntansi", 2, "Basis akrual berarti pendapatan dicatat saat…", ["Barang/jasa diserahkan (invoice), walau uang belum diterima", "Uang diterima saja", "Akhir tahun", "Pajak dibayar"], "Basis kas mencatat saat uang masuk/keluar."),
  M("akuntansi", 2, "PPN Keluaran muncul dari…", ["Penjualan (dipungut dari pelanggan)", "Pembelian", "Gaji", "Penyusutan"], "PPN Masukan dari pembelian; selisihnya disetor atau dikompensasi."),
  M("akuntansi", 2, "Rekonsiliasi bank artinya…", ["Mencocokkan mutasi rekening bank dengan transaksi di sistem", "Membuka rekening baru", "Menghitung pajak", "Membuat invoice"], "Pembayaran yang cocok menandai invoice lunas."),
  M("akuntansi", 3, "Piutang yang tidak tertagih dicatat sebagai…", ["Beban kerugian piutang (bad debt) mengurangi piutang", "Pendapatan", "Modal", "Diabaikan"], "Odoo: buat jurnal penghapusan atau gunakan write-off saat rekonsiliasi."),
  I("akuntansi", 1, "Sisi kiri jurnal disebut ____", ["debit"], "Debit kiri, kredit kanan."),
  I("akuntansi", 2, "Laporan posisi aset, liabilitas, ekuitas: balance ____", ["sheet"], "Balance sheet = neraca."),

  // ---- implementasi (+12) ----
  M("implementasi", 1, "Tahap pertama proyek implementasi ERP:", ["Analisis kebutuhan dan proses bisnis (discovery)", "Go-live", "Pelatihan akhir", "Migrasi data penuh"], "Tanpa analisis, konfigurasi menebak-nebak."),
  M("implementasi", 2, "Fit-gap analysis menghasilkan…", ["Daftar kebutuhan yang sudah dipenuhi standar (fit) dan yang butuh solusi lain (gap)", "Desain logo", "Daftar harga lisensi", "Jadwal libur"], "Gap diselesaikan dengan konfigurasi, perubahan proses, modul pihak ketiga, atau kustomisasi."),
  M("implementasi", 2, "UAT (User Acceptance Test) dilakukan oleh…", ["Pengguna kunci di sisi klien, memakai skenario nyata", "Developer saja", "Konsultan penjualan", "Pihak bank"], "UAT membuktikan sistem siap dipakai sebelum go-live."),
  M("implementasi", 2, "Data master yang biasanya dimigrasi pertama:", ["Produk, pelanggan, vendor, bagan akun", "Transaksi 10 tahun lalu", "Log login", "Email lama"], "Transaksi terbuka (piutang/utang, stok awal) menyusul saat cut-over."),
  M("implementasi", 2, "Cut-over adalah…", ["Periode peralihan dari sistem lama ke Odoo, termasuk memasukkan saldo awal", "Memotong anggaran", "Menghapus modul", "Pelatihan"], "Biasanya dilakukan di akhir bulan agar pembukuan rapi."),
  M("implementasi", 2, "Key user di proyek ERP berperan sebagai…", ["Wakil tiap departemen yang memahami proses dan menjadi pelatih rekan kerja", "Admin server", "Vendor", "Auditor eksternal"], "Key user mempercepat adopsi setelah go-live."),
  M("implementasi", 2, "Hypercare setelah go-live berarti…", ["Masa pendampingan intensif beberapa minggu untuk menangani masalah awal", "Asuransi kesehatan", "Backup harian", "Pelatihan dasar"], "Tiket diprioritaskan cepat agar pengguna tidak kembali ke cara lama."),
  M("implementasi", 2, "Risiko terbesar proyek ERP menurut banyak studi:", ["Perubahan kebiasaan pengguna dan dukungan manajemen yang lemah", "Warna tampilan", "Kecepatan internet", "Jumlah menu"], "Change management sama pentingnya dengan teknis."),
  M("implementasi", 2, "Environment staging/uji dipakai untuk…", ["Mencoba konfigurasi, modul, dan upgrade tanpa mengganggu data produksi", "Menyimpan backup saja", "Penjualan nyata", "Login pelanggan"], "Odoo.sh menyediakan cabang staging otomatis."),
  M("implementasi", 3, "Klien minta laporan khusus yang mirip pivot standar. Pendekatan terbaik:", ["Tunjukkan pivot/filter/grouping bawaan dan simpan sebagai favorit sebelum menulis laporan kustom", "Langsung kustom QWeb", "Tolak permintaan", "Ekspor manual setiap hari"], "Banyak 'laporan khusus' cukup dengan pivot + filter tersimpan."),
  I("implementasi", 1, "Singkatan uji penerimaan oleh pengguna: ____", ["uat"], "User Acceptance Test."),
  I("implementasi", 2, "Analisis kecocokan kebutuhan dengan fitur standar: fit-____ analysis", ["gap"], "Fit-gap."),

  // ---- antarmuka (+12) ----
  M("antarmuka", 1, "Jenis view untuk melihat data sebagai kartu yang bisa diseret antar kolom tahap:", ["Kanban", "List", "Pivot", "Form"], "Dipakai di CRM pipeline dan Project."),
  M("antarmuka", 1, "View untuk analisis silang (baris × kolom × angka):", ["Pivot", "Kanban", "Calendar", "Form"], "Bisa diekspor ke Excel."),
  M("antarmuka", 2, "Menyimpan kombinasi filter dan group by agar bisa dipakai lagi:", ["Save current search sebagai Favorite", "Ekspor ke Excel", "Membuat menu baru", "Tidak bisa"], "Favorit bisa dibagikan ke pengguna lain."),
  M("antarmuka", 2, "Import data pelanggan dari Excel yang aman:", ["Unduh template import, isi kolom, uji dengan beberapa baris, lalu import semua", "Ketik satu per satu", "Langsung import ribuan baris tanpa uji", "Salin ke database SQL"], "Tombol Test menunjukkan error sebelum benar-benar disimpan."),
  M("antarmuka", 2, "Kolom 'External ID' saat import berguna untuk…", ["Memperbarui record yang sama saat import ulang dan menghubungkan relasi antar file", "Kata sandi", "Warna", "Pajak"], "Tanpa External ID, import ulang bisa membuat data ganda."),
  M("antarmuka", 2, "Mengaktifkan mode developer dari antarmuka:", ["Settings → Activate the developer mode (atau ?debug=1 di URL)", "Tekan F5", "Hapus cache", "Install modul baru"], "Menampilkan menu Technical."),
  M("antarmuka", 2, "Hak akses pengguna diatur di…", ["Settings → Users → tab Access Rights (grup per aplikasi)", "Profil karyawan saja", "Pengaturan browser", "Menu Sales"], "Contoh: Sales: User - Own Documents Only."),
  M("antarmuka", 2, "Chatter di bawah form berisi…", ["Pesan, catatan internal, aktivitas terjadwal, dan riwayat perubahan dokumen", "Iklan", "Laporan pajak", "Kode Python"], "Log note internal tidak terkirim ke pelanggan."),
  M("antarmuka", 2, "Activities (aktivitas) dipakai untuk…", ["Menjadwalkan tindak lanjut (telepon, rapat, email) dengan tenggat dan penanggung jawab", "Menghitung pajak", "Menghapus data", "Membuat produk"], "Muncul di ikon jam di bilah atas."),
  M("antarmuka", 2, "Archive (arsip) record berbeda dengan Delete karena…", ["Arsip menyembunyikan tapi data dan riwayat tetap ada; bisa diaktifkan lagi", "Sama saja", "Arsip menghapus permanen", "Delete bisa dibatalkan"], "Produk yang pernah dijual sebaiknya diarsipkan, bukan dihapus."),
  I("antarmuka", 1, "Jenis view berbentuk kartu per tahap: ____", ["kanban"], "Kanban."),
  I("antarmuka", 2, "Kolom identitas import agar tidak ganda: External ____", ["id"], "External ID."),

  // ---- crmlanjut (+12) ----
  M("crmlanjut", 1, "Beda lead dan opportunity di Odoo CRM:", ["Lead = calon yang belum dikualifikasi; opportunity = peluang penjualan yang sudah layak dikejar", "Sama saja", "Opportunity = pelanggan lama", "Lead = invoice"], "Aktifkan 'Leads' di CRM Settings agar tahap kualifikasi terpisah."),
  M("crmlanjut", 2, "Expected revenue dan probability di opportunity dipakai untuk…", ["Forecast pendapatan berbobot (expected × probability)", "Menghitung gaji", "Menghapus lead", "Pajak"], "Opportunity 100 jt dengan probabilitas 30% bernilai 30 jt di forecast."),
  M("crmlanjut", 2, "Lost reason (alasan kalah) penting karena…", ["Bisa dianalisis untuk memperbaiki harga, produk, atau proses penjualan", "Wajib pajak", "Menghapus pelanggan", "Tidak berguna"], "Laporan alasan kalah sering membuka masalah harga atau respons lambat."),
  M("crmlanjut", 2, "Sales team di CRM berguna untuk…", ["Memisahkan pipeline, target, dan laporan per tim/wilayah", "Membuat akun bank", "Mengatur stok", "Menghitung pajak"], "Lead bisa dibagi otomatis ke tim berdasarkan aturan."),
  M("crmlanjut", 2, "Lead scoring/assignment otomatis membagi lead berdasarkan…", ["Aturan (domain) seperti negara, sumber, atau skor kemungkinan", "Urutan abjad saja", "Acak", "Jam login"], "Mengurangi lead yang terlupa dan mempercepat respons."),
  M("crmlanjut", 2, "Mengubah tahap pipeline di kanban dilakukan dengan…", ["Menyeret kartu ke kolom tahap lain", "Membuat invoice", "Menghapus kartu", "Mengubah nama pelanggan"], "Tahap bisa diatur sesuai proses perusahaan."),
  M("crmlanjut", 2, "UTM (campaign, medium, source) pada lead dipakai untuk…", ["Mengukur saluran pemasaran mana yang menghasilkan penjualan", "Mengatur pajak", "Mengirim barang", "Login"], "Contoh source: Instagram, medium: iklan, campaign: Promo Desember."),
  M("crmlanjut", 2, "Dari opportunity, tombol New Quotation membuat…", ["Quotation di Sales yang terhubung ke opportunity itu", "Invoice", "Lead baru", "Purchase order"], "Saat quotation dikonfirmasi, pendapatan nyata terlihat di opportunity."),
  M("crmlanjut", 3, "Pipeline penuh opportunity lama tanpa aktivitas. Tindakan terbaik konsultan:", ["Buat filter 'tanpa aktivitas 30 hari', tinjau bersama tim, tandai lost atau jadwalkan tindak lanjut", "Hapus semuanya", "Biarkan", "Ubah semua menjadi won"], "Pipeline yang bersih membuat forecast bisa dipercaya."),
  M("crmlanjut", 2, "Konversi rate pipeline yang umum dihitung:", ["Won ÷ (Won + Lost) dalam periode", "Lead ÷ produk", "Invoice ÷ gaji", "Stok ÷ order"], "Angka ini dipakai untuk memperkirakan jumlah lead yang dibutuhkan."),
  I("crmlanjut", 1, "Peluang penjualan yang sudah dikualifikasi: ____", ["opportunity"], "Opportunity."),
  I("crmlanjut", 2, "Alasan opportunity tidak berhasil: lost ____", ["reason"], "Lost reason."),

  // ---- saleslanjut (+12) ----
  M("saleslanjut", 1, "Quotation template berguna untuk…", ["Membuat penawaran berulang dengan produk, syarat, dan masa berlaku standar dengan cepat", "Mencetak invoice", "Membuat produk", "Menghitung stok"], "Aktifkan di Sales Settings > Quotation Templates."),
  M("saleslanjut", 2, "Down payment (uang muka) di Odoo dibuat dari Sales Order dengan…", ["Create Invoice → Down payment (percentage) atau (fixed amount)", "Membuat SO baru", "Diskon 100%", "Credit note"], "Invoice akhir otomatis mengurangi uang muka yang sudah ditagih."),
  M("saleslanjut", 2, "Optional products di quotation memungkinkan…", ["Pelanggan menambah produk tambahan sendiri dari portal saat melihat penawaran", "Menghapus produk wajib", "Mengubah harga", "Mengubah pajak"], "Cara mudah upselling."),
  M("saleslanjut", 2, "Produk varian (ukuran S/M/L, warna) dibuat dengan…", ["Attributes & Variants di produk (aktifkan Variants di Settings)", "Membuat produk terpisah tanpa hubungan", "Pricelist", "Kategori"], "Setiap kombinasi atribut menjadi varian dengan SKU dan stok sendiri."),
  M("saleslanjut", 2, "Penjualan jasa yang ditagih berdasarkan jam kerja memakai kebijakan invoice…", ["Based on Timesheets (delivered quantity dari timesheet)", "Ordered quantities", "Manual saja", "Fixed price saja"], "Jam yang dicatat di task menjadi jumlah yang ditagih."),
  M("saleslanjut", 2, "Margin di Sales Order aktif dengan mengaktifkan…", ["Margins di Sales Settings (memakai cost produk)", "Pajak", "Pricelist", "Diskon"], "Margin = harga jual - cost; berguna untuk persetujuan diskon."),
  M("saleslanjut", 2, "Delivery method (metode pengiriman) di SO berguna untuk…", ["Menambah biaya ongkir otomatis berdasarkan aturan atau tarif kurir", "Mengubah gudang", "Membuat invoice", "Mengubah pajak"], "Bisa fixed price, based on rules, atau terhubung kurir."),
  M("saleslanjut", 2, "Mengunci (Lock) Sales Order setelah dikonfirmasi berguna untuk…", ["Mencegah perubahan pesanan yang sudah disepakati", "Menghapus pesanan", "Membatalkan invoice", "Mengirim barang"], "Bisa diatur otomatis di Settings."),
  M("saleslanjut", 3, "Klien ingin pesanan di atas Rp 50 juta disetujui manajer sebelum dikonfirmasi. Solusi tanpa kode paling dulu dicoba:", ["Aturan persetujuan bawaan/Studio atau modul approval, bukan langsung kustom Python", "Langsung menulis modul Python", "Menolak kebutuhan", "Memakai Excel"], "Coba konfigurasi dulu; kustom bila memang gap."),
  M("saleslanjut", 2, "Subscription (berlangganan) cocok untuk…", ["Tagihan berulang otomatis setiap bulan/tahun", "Penjualan satu kali", "Stok opname", "Gaji"], "Modul Subscriptions (Enterprise)."),
  I("saleslanjut", 1, "Uang muka sebelum invoice akhir: down ____", ["payment"], "Down payment."),
  I("saleslanjut", 2, "Kombinasi atribut produk (ukuran, warna) disebut ____", ["varian", "variant"], "Product variant."),

  // ---- belilanjut (+12) ----
  M("belilanjut", 1, "Vendor pricelist di tab Purchase produk menyimpan…", ["Harga beli per vendor, jumlah minimum, dan lead time pengiriman", "Harga jual", "Pajak", "Gaji"], "Dipakai otomatis saat membuat RFQ."),
  M("belilanjut", 2, "Purchase Agreements (blanket order) berguna untuk…", ["Kontrak harga/jumlah dengan vendor untuk periode tertentu, lalu PO dibuat bertahap", "Membatalkan PO", "Mencetak bill", "Menjual barang"], "Call for tenders membandingkan beberapa vendor."),
  M("belilanjut", 2, "Persetujuan PO dua tingkat diatur di…", ["Purchase Settings > Purchase Order Approval dengan batas nilai minimum", "Sales Settings", "Inventory", "Tidak bisa"], "PO di atas batas menunggu persetujuan manajer."),
  M("belilanjut", 2, "3-way matching memastikan…", ["Jumlah di PO, penerimaan barang, dan vendor bill saling cocok sebelum dibayar", "Tiga vendor dibandingkan", "Tiga pajak", "Tiga gudang"], "Mencegah membayar lebih atau membayar barang yang belum diterima."),
  M("belilanjut", 2, "Lead time vendor 7 hari dipakai Odoo untuk…", ["Menghitung tanggal RFQ perlu dikirim agar barang datang tepat waktu", "Diskon", "Pajak", "Gaji"], "Bagian dari perhitungan replenishment."),
  M("belilanjut", 2, "Dropship berarti…", ["Vendor mengirim langsung ke pelanggan tanpa lewat gudang sendiri", "Barang jatuh", "Retur", "Barang rusak"], "Satu SO bisa membuat PO dropship otomatis."),
  M("belilanjut", 2, "Mengirim RFQ ke beberapa vendor lalu memilih harga terbaik dilakukan dengan…", ["Alternatives/Call for tenders di Purchase", "Membuat SO", "Inventory adjustment", "Credit note"], "Bandingkan baris per baris lalu konfirmasi pemenang."),
  M("belilanjut", 2, "Vendor bill dibuat dari PO agar…", ["Baris, harga, dan pajak otomatis sama dan terhubung untuk kontrol", "Lebih mahal", "Tidak tercatat", "Menghapus PO"], "Bill bisa juga dibuat dari email/scan dokumen (OCR, Enterprise)."),
  M("belilanjut", 3, "Harga beli naik setelah PO dikonfirmasi. Cara yang paling bisa ditelusuri:", ["Ubah harga di PO (bila belum ditagih) atau sesuaikan di bill dengan catatan; perbarui vendor pricelist", "Abaikan", "Hapus PO", "Ubah stok"], "Jejak perubahan tercatat di chatter."),
  M("belilanjut", 2, "Kontrol bill 'On ordered quantities' cocok untuk…", ["Pembelian jasa atau pembayaran di muka", "Semua barang fisik", "Retur", "Stok opname"], "Barang fisik biasanya 'On received quantities'."),
  I("belilanjut", 1, "Pengiriman langsung dari vendor ke pelanggan: ____ship", ["drop"], "Dropship."),
  I("belilanjut", 2, "Pencocokan PO, penerimaan, dan tagihan: ____-way matching", ["3", "three", "tiga"], "3-way matching."),

  // ---- gudang (+12) ----
  M("gudang", 1, "Receive in 3 steps berarti barang masuk melewati…", ["Input → Quality Control → Stock", "Langsung Stock", "Pack → Ship", "Customer → Vendor"], "Cocok untuk barang yang wajib diperiksa mutunya."),
  M("gudang", 1, "Deliver in 3 steps berarti…", ["Pick → Pack → Ship", "Input → QC → Stock", "Ship saja", "Pack → Pick"], "Picking mengambil barang, packing mengemas, shipping menyerahkan ke kurir."),
  M("gudang", 2, "Lokasi WH/Stock/Rak-A1 adalah…", ["Sub-lokasi internal di gudang untuk menyimpan barang lebih rinci", "Gudang baru", "Vendor", "Pelanggan"], "Aktifkan Storage Locations di Settings."),
  M("gudang", 2, "Lot number dipakai untuk…", ["Melacak sekelompok barang dari produksi/pembelian yang sama (batch)", "Satu unit unik", "Harga", "Pajak"], "Serial number untuk setiap unit (laptop, HP)."),
  M("gudang", 2, "Removal strategy FEFO berarti…", ["First Expired First Out: barang yang kedaluwarsa duluan dikeluarkan dulu", "First In First Out", "Last In First Out", "Acak"], "Butuh tanggal kedaluwarsa pada lot (Expiration Dates)."),
  M("gudang", 2, "Route Make To Order (MTO) membuat…", ["Pengadaan (PO/MO) khusus untuk setiap pesanan, bukan dari stok", "Stok minimum", "Diskon", "Retur"], "Cocok untuk barang mahal atau pesanan khusus."),
  M("gudang", 2, "Transfer antar gudang dilakukan dengan…", ["Internal transfer atau route antar gudang (resupply)", "Invoice", "Credit note", "Sales order"], "Stok berpindah tanpa mengubah total perusahaan."),
  M("gudang", 2, "Putaway rule berguna untuk…", ["Otomatis mengarahkan barang masuk ke lokasi rak tertentu", "Menghitung pajak", "Mengirim email", "Diskon"], "Contoh: semua minuman ke Rak-B."),
  M("gudang", 2, "Scrap di Inventory dipakai untuk…", ["Mencatat barang rusak/dibuang sehingga stok berkurang dan nilainya dibebankan", "Retur ke vendor", "Menjual barang", "Pindah gudang"], "Barang pindah ke lokasi virtual Scrap."),
  M("gudang", 3, "Stok fisik di Rak-A1 sering selisih. Langkah konsultan pertama:", ["Telusuri Moves History/stock moves produk itu untuk mencari transaksi yang tidak dicatat benar", "Langsung adjustment tanpa cek", "Hapus produk", "Ganti gudang"], "Data history menunjukkan siapa, kapan, dan dokumen apa yang menggerakkan stok."),
  I("gudang", 1, "Nomor unik per unit barang: ____ number", ["serial"], "Serial number."),
  I("gudang", 2, "Strategi keluarkan yang kedaluwarsa duluan (singkatan): ____", ["fefo"], "First Expired First Out."),

  // ---- mrpkonsep (+12) ----
  M("mrpkonsep", 1, "Bill of Materials (BoM) berisi…", ["Daftar bahan dan jumlahnya untuk membuat satu produk jadi (plus operasi bila ada)", "Daftar pelanggan", "Harga jual", "Invoice"], "Seperti resep produksi."),
  M("mrpkonsep", 2, "BoM tipe Kit berarti…", ["Produk dijual sebagai paket komponen tanpa proses produksi (komponen keluar saat dikirim)", "Wajib Manufacturing Order", "Produk jasa", "Subkontrak"], "Contoh: paket hampers yang tidak dirakit."),
  M("mrpkonsep", 2, "Manufacturing Order (MO) mengonsumsi…", ["Komponen sesuai BoM dan menghasilkan produk jadi ke stok", "Invoice", "Lead", "Gaji"], "Stok komponen berkurang, stok produk jadi bertambah."),
  M("mrpkonsep", 2, "Work center mewakili…", ["Tempat/mesin produksi dengan kapasitas, biaya per jam, dan efisiensi", "Gudang", "Vendor", "Pelanggan"], "Operasi di BoM dijadwalkan pada work center."),
  M("mrpkonsep", 2, "By-product adalah…", ["Hasil sampingan produksi yang ikut masuk stok (misalnya ampas yang bisa dijual)", "Bahan utama", "Produk gagal", "Pajak"], "Ditambahkan di BoM (aktifkan By-Products)."),
  M("mrpkonsep", 2, "Subcontracting berarti…", ["Pihak luar memproduksi memakai komponen yang kita kirimkan, lalu kita menerima produk jadi", "Membeli produk jadi biasa", "Menjual komponen", "Retur"], "BoM tipe Subcontracting dengan vendor subkontraktor."),
  M("mrpkonsep", 2, "Komponen kurang saat MO akan dimulai. Odoo menunjukkan…", ["Status komponen 'Not Available' dan bisa memicu replenishment", "Langsung selesai", "Menghapus MO", "Membuat invoice"], "Cek forecast dan reordering rule komponen."),
  M("mrpkonsep", 2, "OEE (Overall Equipment Effectiveness) mengukur…", ["Gabungan ketersediaan, kinerja, dan kualitas mesin", "Gaji operator", "Harga jual", "Stok"], "Tersedia di laporan work center (Enterprise/MRP)."),
  M("mrpkonsep", 2, "Biaya produk jadi di Odoo berasal dari…", ["Biaya komponen ditambah biaya operasi work center (jam × tarif)", "Harga jual", "Pajak saja", "Ongkir"], "Gunakan Compute Price from BoM untuk memperbarui cost."),
  M("mrpkonsep", 3, "Pabrik membuat roti setiap hari dalam jumlah besar tanpa pesanan khusus. Strategi pengadaan yang cocok:", ["Make To Stock dengan reordering rule produk jadi", "MTO untuk setiap roti", "Dropship", "Subkontrak"], "MTO cocok untuk pesanan khusus."),
  I("mrpkonsep", 1, "Singkatan daftar bahan produksi: ____", ["bom"], "Bill of Materials."),
  I("mrpkonsep", 2, "Dokumen perintah produksi: manufacturing ____", ["order"], "Manufacturing Order (MO)."),

  // ---- akunodoo (+12) ----
  M("akunodoo", 1, "Chart of Accounts (CoA) di Odoo biasanya dipasang dari…", ["Paket lokalisasi negara (misalnya Indonesia) yang menyediakan akun dan pajak standar", "Ketik manual semua", "Excel wajib", "Tidak ada"], "Bisa disesuaikan setelahnya."),
  M("akunodoo", 2, "Jenis journal bawaan di Odoo:", ["Sales, Purchase, Bank, Cash, Miscellaneous", "Hanya Bank", "Gaji dan Pajak", "Kas kecil saja"], "Setiap dokumen masuk ke journal sesuai jenisnya."),
  M("akunodoo", 2, "Status invoice Draft → Posted berarti…", ["Jurnal sudah tercatat resmi di buku besar dan nomor dokumen dikunci", "Sudah dibayar", "Dibatalkan", "Dihapus"], "Status pembayaran terpisah: Not Paid, In Payment, Paid."),
  M("akunodoo", 2, "Fiscal position berguna untuk…", ["Mengganti pajak/akun otomatis untuk kelompok pelanggan tertentu (misalnya ekspor tanpa PPN)", "Mengatur gudang", "Membuat produk", "Gaji"], "Dipasang di kontak atau dideteksi otomatis berdasarkan negara."),
  M("akunodoo", 2, "Bank reconciliation di Odoo 17 mencocokkan…", ["Baris mutasi bank (dari impor/sinkronisasi) dengan invoice/bill/pembayaran", "Dua invoice", "Stok", "Gaji"], "Reconciliation model membantu mencocokkan otomatis."),
  M("akunodoo", 2, "Lock date (tanggal kunci) dipakai untuk…", ["Mencegah perubahan jurnal pada periode yang sudah ditutup", "Mengunci pengguna", "Mengunci gudang", "Mengunci produk"], "Penting setelah laporan bulanan diserahkan."),
  M("akunodoo", 2, "Analytic accounting di Odoo dipakai untuk…", ["Melacak pendapatan/biaya per proyek, cabang, atau departemen tanpa menambah akun CoA", "Membuat pajak", "Mengganti bank", "Login"], "Analytic distribution bisa membagi persen ke beberapa analitik."),
  M("akunodoo", 2, "Pembayaran pelanggan dicatat dari invoice dengan tombol…", ["Register Payment", "Confirm", "Reset to Draft", "Send"], "Pembayaran menghasilkan jurnal Bank/Kas dan menandai invoice lunas setelah direkonsiliasi."),
  M("akunodoo", 2, "Multi-currency: invoice USD dibayar saat kurs berubah menghasilkan…", ["Selisih kurs (exchange difference) yang dicatat otomatis", "Error", "Invoice batal", "Tidak ada efek"], "Aktifkan Multi-Currencies dan kurs otomatis."),
  M("akunodoo", 3, "Akuntan ingin laporan laba rugi per cabang. Solusi standar Odoo:", ["Analytic account per cabang (atau multi-company bila badan hukum berbeda) lalu filter laporan", "Membuat CoA terpisah per cabang dalam satu perusahaan", "Excel", "Kustom Python"], "Analitik menjaga CoA tetap sederhana."),
  I("akunodoo", 1, "Tombol mencatat pembayaran pada invoice: Register ____", ["payment"], "Register Payment."),
  I("akunodoo", 2, "Pemetaan pajak otomatis per jenis pelanggan: fiscal ____", ["position"], "Fiscal position."),

  // ---- hrproyek (+12) ----
  M("hrproyek", 1, "Data karyawan di Odoo disimpan di aplikasi…", ["Employees (hr.employee)", "Contacts saja", "Sales", "Inventory"], "Bisa terhubung ke user agar karyawan login."),
  M("hrproyek", 2, "Timesheet di Odoo dicatat pada…", ["Task/proyek, dengan jam kerja per karyawan per hari", "Invoice", "Produk", "Gudang"], "Dasar penagihan jasa dan analisis profit proyek."),
  M("hrproyek", 2, "Expense (biaya karyawan) alurnya:", ["Karyawan input biaya + bukti → manajer menyetujui → akuntansi memposting → diganti (reimburse)", "Langsung dibayar tanpa bukti", "Masuk gaji otomatis", "Dihapus"], "Biaya juga bisa ditagihkan ulang ke pelanggan (re-invoice)."),
  M("hrproyek", 2, "Time Off (cuti) berguna untuk…", ["Mengajukan, menyetujui, dan menghitung sisa jatah cuti", "Absensi masuk", "Gaji", "Lembur proyek"], "Allocation menentukan jatah, request mengurangi."),
  M("hrproyek", 2, "Project stage di kanban task dipakai untuk…", ["Menunjukkan kemajuan task (To Do, In Progress, Done) yang bisa diseret", "Menghitung pajak", "Mengatur stok", "Membuat invoice otomatis"], "Tahap bisa berbeda per proyek."),
  M("hrproyek", 2, "Profitabilitas proyek dihitung dari…", ["Pendapatan yang ditagih dikurangi biaya (timesheet × cost karyawan, expenses, pembelian)", "Jumlah task", "Jumlah karyawan", "Jam login"], "Lihat Project > Reporting atau panel profitabilitas proyek."),
  M("hrproyek", 2, "Allocated hours pada task berguna untuk…", ["Membandingkan jam rencana dengan jam yang terpakai", "Gaji", "Cuti", "Pajak"], "Task merah bila melebihi alokasi."),
  M("hrproyek", 2, "Recruitment di Odoo mengelola…", ["Lowongan, pelamar, tahap seleksi, dan wawancara", "Gaji", "Stok", "Pajak"], "Pelamar bisa masuk lewat email atau halaman karier website."),
  M("hrproyek", 2, "Attendance (absensi) berbeda dengan timesheet karena…", ["Attendance mencatat jam masuk-pulang; timesheet mencatat jam kerja per proyek/task", "Sama saja", "Timesheet untuk cuti", "Attendance untuk biaya"], "Keduanya bisa dibandingkan untuk cek kelengkapan timesheet."),
  M("hrproyek", 3, "Agensi ingin menagih klien per jam dari timesheet. Konfigurasi utama:", ["Produk jasa dengan invoicing policy Based on Timesheets yang membuat task di proyek", "Produk fisik", "Expense", "Pricelist saja"], "Jam timesheet otomatis menjadi kuantitas yang siap ditagih."),
  I("hrproyek", 1, "Catatan jam kerja per task: time____", ["sheet"], "Timesheet."),
  I("hrproyek", 2, "Biaya yang dibayar karyawan lalu diganti perusahaan: ex____", ["pense"], "Expense."),

  // ---- posweb (+12) ----
  M("posweb", 1, "Session di Point of Sale adalah…", ["Periode buka-tutup kasir dari saldo awal sampai penutupan dan rekap kas", "Satu transaksi", "Satu produk", "Satu pelanggan"], "Penutupan sesi membuat jurnal penjualan dan kas."),
  M("posweb", 2, "Cash control saat menutup sesi POS membandingkan…", ["Uang tunai yang dihitung (counted) dengan yang seharusnya ada (expected)", "Stok dengan penjualan", "Pajak dengan gaji", "Dua kasir"], "Selisih dicatat sebagai profit/loss kas."),
  M("posweb", 2, "POS Odoo tetap bisa transaksi saat internet putus karena…", ["Data dimuat ke browser dan disinkronkan lagi saat koneksi kembali", "Tidak bisa sama sekali", "Memakai SMS", "Server di kasir"], "Penting untuk toko dengan internet kurang stabil."),
  M("posweb", 2, "Setiap transaksi POS mengurangi stok…", ["Ya, karena POS terhubung ke Inventory (picking dibuat per pesanan/sesi)", "Tidak pernah", "Hanya bulanan manual", "Hanya jasa"], "Stok di gudang toko berkurang otomatis."),
  M("posweb", 2, "Restoran memakai POS dengan fitur…", ["Floor plan meja, kirim pesanan ke dapur (printer/layar), dan split bill", "Rekrutmen", "Manufaktur", "Langganan"], "Aktifkan 'Is a Bar/Restaurant'."),
  M("posweb", 2, "Agar produk tampil di toko online, produk harus…", ["Dipublish di website (Published) dan bisa dijual (Can be Sold)", "Hanya punya stok", "Punya barcode", "Punya varian"], "Harga mengikuti pricelist website."),
  M("posweb", 2, "Payment provider di eCommerce berguna untuk…", ["Menerima pembayaran online (transfer, kartu, e-wallet) saat checkout", "Mengirim barang", "Membuat produk", "Menghitung pajak"], "Pembayaran sukses mengonfirmasi pesanan otomatis."),
  M("posweb", 2, "Pesanan dari website masuk ke Odoo sebagai…", ["Sales Order yang terhubung dengan pelanggan portal", "Lead saja", "Purchase order", "Jurnal manual"], "Alurnya sama dengan sales biasa: delivery, invoice."),
  M("posweb", 2, "Loyalty program di POS/eCommerce dipakai untuk…", ["Poin, kupon, promo beli-X-gratis-Y, dan kartu hadiah", "Gaji", "Stok minimum", "Pajak"], "Aplikasi Discount & Loyalty."),
  M("posweb", 3, "Toko punya tiga cabang dengan stok masing-masing dan satu website. Rancangan dasar:", ["Satu gudang per cabang, satu POS config per cabang, website memakai gudang pusat atau gabungan stok", "Satu gudang untuk semua", "Tiga database", "Excel"], "Laporan penjualan bisa digabung maupun dipisah per cabang."),
  I("posweb", 1, "Periode buka-tutup kasir POS: ____", ["session", "sesi"], "POS session."),
  I("posweb", 2, "Status produk agar tampil di toko online: Pub____", ["lished"], "Published."),

  // ---- ormlanjut (+13) ----
  M("ormlanjut", 1, "self di method model Odoo adalah…", ["Recordset (bisa nol, satu, atau banyak record)", "Selalu satu record", "Dict", "Database"], "Karena itu method harus aman untuk banyak record."),
  M("ormlanjut", 2, "records.exists() berguna untuk…", ["Menyaring record yang masih ada di database (yang terhapus dibuang)", "Membuat record", "Menghitung jumlah", "Login"], "Berguna setelah browse id dari luar."),
  M("ormlanjut", 2, "records.ids mengembalikan…", ["List id angka dari semua record", "Satu id", "Nama record", "Recordset"], "records.id hanya untuk satu record."),
  M("ormlanjut", 2, "Operator domain 'child_of' dipakai untuk…", ["Mencari record beserta seluruh turunannya di struktur hierarki (misalnya kategori)", "Mencari anak karyawan", "Mencari teks", "Mengurutkan"], "Bekerja pada model dengan parent_id."),
  M("ormlanjut", 2, "Operator domain '=ilike' berbeda dengan 'ilike' karena…", ["=ilike mencocokkan pola penuh tanpa menambah % otomatis", "Sama saja", "ilike membedakan huruf besar", "=ilike untuk angka"], "'ilike' otomatis membungkus nilai dengan %…%."),
  M("ormlanjut", 2, "Recordset a | b menghasilkan…", ["Gabungan tanpa kembar", "Irisan", "Selisih", "Error"], "a & b irisan, a - b selisih."),
  M("ormlanjut", 2, "env.ref('base.main_company') berguna untuk…", ["Mengambil record dari external id (xml id)", "Mencari teks", "Membuat record", "Login"], "Hindari id angka tetap di kode."),
  M("ormlanjut", 2, "with_company(company) dipakai untuk…", ["Menjalankan operasi dalam konteks perusahaan tertentu (multi-company)", "Ganti pengguna", "Ganti bahasa", "Menghapus"], "Penting untuk properti yang berbeda per perusahaan."),
  M("ormlanjut", 2, "flush dan invalidate cache diperlukan saat…", ["Menjalankan SQL mentah agar data ORM dan database sinkron", "Selalu setelah write", "Tidak pernah", "Saat login"], "Pakai SQL mentah hanya bila ORM benar-benar kurang."),
  M("ormlanjut", 2, "Field compute non-store yang memakai search di dalamnya dan ditampilkan di list 1.000 baris bisa…", ["Lambat karena dihitung per baris; batch dengan read_group atau simpan (store)", "Selalu cepat", "Error", "Tidak tampil"], "Pikirkan kinerja saat memakai compute di list."),
  M("ormlanjut", 3, "Kenapa SQL mentah dengan f-string berbahaya?", ["Rentan SQL injection; pakai parameter cr.execute(query, params)", "Lebih lambat", "Dilarang Python", "Tidak bisa di Odoo"], "Contoh aman: cr.execute('SELECT id FROM t WHERE name = %s', [nama])."),
  I("ormlanjut", 1, "Atribut recordset untuk daftar id: records.____", ["ids"], "records.ids."),
  I("ormlanjut", 2, "Method untuk mengambil record dari xml id: self.env.____('modul.xml_id')", ["ref"], "env.ref()."),

  // ---- viewxml (+12) ----
  M("viewxml", 1, "Elemen <sheet> di form view berfungsi sebagai…", ["Area 'kertas' utama berisi field-field dokumen", "Header tombol", "Chatter", "Menu"], "Header berisi tombol dan statusbar di atasnya."),
  M("viewxml", 2, "<group> di form view membuat…", ["Tata letak kolom label-field yang rapi", "Grup pengguna", "Filter", "Menu"], "Dua <group> bersebelahan membuat dua kolom."),
  M("viewxml", 2, "<notebook><page string=\"Detail\"> membuat…", ["Tab di dalam form", "Halaman website", "Laporan", "Menu"], "Cocok untuk memisahkan informasi panjang."),
  M("viewxml", 2, "widget=\"many2many_tags\" menampilkan field Many2many sebagai…", ["Label-label kecil (tag)", "Tabel", "Kalender", "Gambar"], "Widget lain: monetary, badge, handle, image."),
  M("viewxml", 2, "Field One2many di form ditampilkan sebagai tabel yang bisa diedit langsung dengan…", ["<field name=\"line_ids\"><tree editable=\"bottom\">…</tree></field>", "<table>", "<list>", "<grid>"], "editable=\"bottom\" menambah baris di bawah."),
  M("viewxml", 2, "Action window dengan target=\"new\" membuka…", ["Form sebagai jendela popup (dipakai wizard)", "Tab browser baru", "Halaman utama", "Email"], "target=\"current\" membuka di layar utama."),
  M("viewxml", 2, "Atribut domain pada action menyaring…", ["Record yang ditampilkan saat menu dibuka", "Field", "Pengguna", "Tombol"], "Contoh: hanya kursus aktif."),
  M("viewxml", 2, "xpath position=\"attributes\" dipakai untuk…", ["Mengubah atribut elemen yang sudah ada (misalnya membuat field readonly)", "Menghapus elemen", "Menambah tab", "Membuat menu"], "<attribute name=\"readonly\">1</attribute>."),
  M("viewxml", 2, "Kanban view memakai template dengan…", ["<templates><t t-name=\"kanban-box\"> berisi QWeb", "HTML biasa saja", "Python", "CSS saja"], "Odoo 17 masih memakai kanban-box; Odoo 18 berganti card."),
  M("viewxml", 3, "Menu tidak muncul padahal XML sudah dimuat. Penyebab umum:", ["Grup pengguna tidak punya akses ke model/menu atau parent menu salah", "XML terlalu panjang", "Warna salah", "Server lambat"], "Cek ACL dan atribut groups pada menuitem."),
  I("viewxml", 1, "Elemen pembungkus tab di form: <____>", ["notebook"], "notebook + page."),
  I("viewxml", 2, "Atribut agar tabel baris bisa diedit langsung: editable=\"____\"", ["bottom", "top"], "editable=\"bottom\" atau \"top\"."),

  // ---- keamanan (+12) ----
  M("keamanan", 1, "File yang WAJIB ada agar pengguna biasa bisa membuka model baru:", ["security/ir.model.access.csv", "README.md", "static/description/icon.png", "tests/__init__.py"], "Tanpa ACL, hanya superuser yang bisa mengakses."),
  M("keamanan", 2, "Grup keamanan baru didefinisikan di XML dengan model…", ["res.groups (dengan category dan implied_ids)", "ir.model.access", "res.users", "ir.rule"], "implied_ids membuat grup mewarisi hak grup lain."),
  M("keamanan", 2, "Perintah CLI untuk memperbarui modul setelah mengubah kode:", ["odoo-bin -c odoo.conf -d nama_db -u nama_modul", "odoo-bin --hapus", "pip update", "python manifest.py"], "-i untuk install pertama kali."),
  M("keamanan", 2, "Folder static/description/icon.png berfungsi sebagai…", ["Ikon modul di daftar Apps", "Logo perusahaan", "Favicon website", "Foto pengguna"], "Ditambah index.html untuk deskripsi modul di Apps."),
  M("keamanan", 2, "Data demo dimuat dari key manifest…", ["'demo': ['data/demo.xml']", "'data'", "'assets'", "'depends'"], "Hanya dimuat bila database dibuat dengan data demo."),
  M("keamanan", 2, "noupdate=\"1\" pada <data> XML berarti…", ["Record dibuat sekali dan tidak ditimpa saat modul di-upgrade", "Record tidak pernah dibuat", "Record dihapus", "Record privat"], "Dipakai untuk data yang boleh diubah pengguna (misalnya urutan nomor)."),
  M("keamanan", 2, "Menjalankan tes modul dari CLI:", ["odoo-bin -d db_tes -u nama_modul --test-enable --stop-after-init", "pytest saja tanpa Odoo", "python tests.py", "Tidak bisa"], "Gunakan database khusus tes."),
  M("keamanan", 2, "Nomor urut dokumen (misalnya KRS/2026/0001) dibuat dengan…", ["ir.sequence dan next_by_code() saat create", "random()", "id record", "Waktu sekarang"], "Didefinisikan di XML dengan prefix dan padding."),
  M("keamanan", 2, "Logger Odoo yang benar di modul:", ["_logger = logging.getLogger(__name__) lalu _logger.info(...)", "print()", "console.log", "sys.exit"], "Pesan muncul di log server dengan nama modul."),
  M("keamanan", 3, "Modul kustom memakai kata sandi API pihak ketiga. Tempat penyimpanan yang aman:", ["ir.config_parameter atau field di Settings yang hanya bisa dibaca grup admin, bukan di kode", "Ditulis di file Python", "Di README", "Di nama modul"], "Jangan commit rahasia ke Git."),
  I("keamanan", 1, "Opsi CLI untuk memperbarui modul: -____ nama_modul", ["u"], "-u = update."),
  I("keamanan", 2, "Model nomor urut dokumen di Odoo: ir.____", ["sequence"], "ir.sequence."),

  // ---- owl (+12) ----
  M("owl", 1, "OWL di Odoo adalah…", ["Framework komponen JavaScript buatan Odoo untuk antarmuka web", "Modul akuntansi", "Database", "Bahasa baru"], "Mirip React/Vue: komponen, state, template."),
  M("owl", 2, "Template komponen OWL ditulis dalam…", ["XML QWeb (t-name, t-if, t-foreach, t-on-click)", "HTML biasa tanpa direktif", "Python", "CSS"], "Template didaftarkan di aset modul."),
  M("owl", 2, "File JS/XML/SCSS modul didaftarkan ke antarmuka backend lewat manifest…", ["'assets': {'web.assets_backend': ['modul/static/src/**/*']}", "'data'", "'depends'", "'demo'"], "Tanpa ini, file tidak dimuat browser."),
  M("owl", 2, "State reaktif di komponen OWL dibuat dengan…", ["useState({...}) dari @odoo/owl", "let biasa", "localStorage", "useEffect"], "Perubahan state memicu render ulang."),
  M("owl", 2, "Memanggil ORM dari komponen OWL:", ["const orm = useService('orm'); await orm.searchRead(model, domain, fields)", "fetch SQL", "import odoo.models", "window.odoo.db"], "Service lain: notification, action, rpc."),
  M("owl", 2, "Controller HTTP di Odoo dibuat dengan dekorator…", ["@http.route('/api/kursus', type='json', auth='user')", "@app.get", "@api.depends", "@route.public"], "type='http' untuk halaman/file, 'json' untuk JSON-RPC."),
  M("owl", 2, "auth='public' pada route berarti…", ["Bisa diakses tanpa login (pengguna publik)", "Hanya admin", "Hanya API key", "Tidak bisa diakses"], "Hati-hati: data yang dikembalikan harus dibatasi."),
  M("owl", 2, "Membuat field widget kustom di Odoo 17 dilakukan dengan…", ["Komponen OWL yang didaftarkan ke registry 'fields'", "Override Python saja", "CSS", "Tidak bisa"], "Lalu dipakai di XML dengan widget=\"nama_widget\"."),
  M("owl", 2, "Webhook masuk dari sistem lain (misalnya payment gateway) biasanya ditangani dengan…", ["Controller http.route type='http' atau 'json' dengan auth='public' dan verifikasi tanda tangan", "Cron", "Wizard", "View XML"], "Selalu verifikasi asal permintaan."),
  M("owl", 3, "Integrasi data harian Odoo ↔ sistem lain: kapan memakai cron + API dibanding webhook?", ["Cron cocok untuk sinkron berkala/batch; webhook untuk kejadian segera (real-time)", "Selalu cron", "Selalu webhook", "Tidak ada bedanya"], "Banyak proyek memakai keduanya."),
  I("owl", 1, "Hook OWL untuk state reaktif: use____", ["state"], "useState."),
  I("owl", 2, "Dekorator rute controller: @http.____", ["route"], "@http.route."),

  // ---- studikasus (+12) ----
  M("studikasus", 1, "Klien mengeluh stok di Odoo selalu beda dengan fisik. Pertanyaan diagnosis pertama:", ["Apakah semua barang keluar-masuk benar-benar dicatat lewat dokumen Odoo (receipt, delivery, scrap)?", "Berapa harga lisensi?", "Apa warna logo?", "Siapa direkturnya?"], "Sebagian besar selisih berasal dari transaksi di luar sistem."),
  M("studikasus", 2, "Tim sales menolak memakai CRM karena 'menambah pekerjaan'. Pendekatan terbaik:", ["Sederhanakan tahap dan field wajib, tunjukkan manfaat langsung (pengingat, forecast), libatkan key user", "Wajibkan dengan ancaman", "Tambah field wajib", "Hentikan proyek"], "Adopsi naik bila pengguna merasakan manfaatnya."),
  M("studikasus", 2, "Klien distributor ingin harga khusus untuk 3 kelompok pelanggan. Solusi standar:", ["Pricelist per kelompok yang dipasang di kontak", "Membuat produk berbeda untuk tiap kelompok", "Diskon manual setiap SO", "Kustom Python"], "Pricelist juga bisa berbasis jumlah dan periode."),
  M("studikasus", 2, "Laporan laba kotor tidak masuk akal karena cost produk 0. Penyebab paling mungkin:", ["Cost produk tidak pernah diisi/dihitung (valuasi atau BoM) sehingga HPP nol", "Pajak salah", "Pelanggan salah", "Server rusak"], "Periksa costing method dan cost di produk."),
  M("studikasus", 2, "Gudang mengirim barang sebelum pelanggan membayar, padahal kebijakan 'bayar dulu'. Kontrol yang tepat:", ["Kebijakan proses: delivery divalidasi hanya setelah invoice dibayar (aturan/persetujuan atau pembayaran online di depan)", "Hapus modul inventory", "Biarkan", "Ganti pelanggan"], "Kontrol bisa berupa prosedur, hak akses, atau otomatisasi."),
  M("studikasus", 2, "Klien minta 'semua fitur seperti sistem lama'. Respons konsultan yang tepat:", ["Gali tujuan bisnis di balik tiap fitur, lalu tunjukkan cara Odoo mencapainya; kustom hanya untuk gap penting", "Salin semua fitur lama", "Tolak semua", "Langsung kustom"], "Fokus pada hasil, bukan meniru layar lama."),
  M("studikasus", 2, "Tagihan vendor sering dibayar dua kali. Pencegahan di Odoo:", ["Bill dibuat dari PO dengan kontrol jumlah diterima, cek referensi vendor ganda, dan rekonsiliasi pembayaran", "Bayar tunai", "Hapus vendor", "Matikan akuntansi"], "Odoo memperingatkan referensi bill yang sama dari vendor yang sama."),
  M("studikasus", 2, "Manajer ingin dashboard harian penjualan dan stok kritis. Solusi cepat:", ["Filter/pivot/grafik tersimpan sebagai favorit dan dashboard spreadsheet (Enterprise) atau papan My Dashboard", "Membangun aplikasi baru", "Excel manual", "Email harian manual"], "Mulai dari fitur bawaan."),
  M("studikasus", 2, "Go-live dijadwalkan pertengahan bulan. Saran konsultan yang paling umum:", ["Go-live di awal bulan/periode akuntansi agar saldo awal dan laporan rapi", "Tidak masalah kapan saja", "Go-live tengah malam hari Jumat tanpa uji", "Tunda setahun"], "Awal periode menyederhanakan cut-over."),
  M("studikasus", 3, "Klien manufaktur kecil: bahan sering habis mendadak. Rencana perbaikan berurutan:", ["Rapikan data BoM & lead time, pasang reordering rule bahan kritis, pantau forecast mingguan", "Beli bahan sebanyak mungkin", "Hapus BoM", "Pakai Excel lagi"], "Data dasar yang benar dulu, otomasi kemudian."),
  I("studikasus", 1, "Analisis akar masalah: root ____ analysis", ["cause"], "Root cause analysis."),
  I("studikasus", 2, "Peralihan data dari sistem lama ke baru: cut-____", ["over"], "Cut-over."),
  );

  // Pendalaman ringkas untuk 19 bab non-hitung (bab Lab Hitung sudah punya materi rumus per bab)
  const P = (k, isi) => dalami(k, isi);
  P("erp", `<h4>ERP dalam satu cerita</h4><p>Toko menerima pesanan 10 kopi (Sales) → stok gudang berkurang saat dikirim (Inventory) → invoice terbit dan piutang tercatat (Accounting) → saat stok menipis, RFQ ke pemasok dibuat otomatis (Purchase). Semua memakai <b>satu data produk dan satu data pelanggan</b>, jadi tidak ada angka yang berbeda antarbagian.</p>
<table class="mini-pivot"><tr><th>Sebelum ERP</th><th>Sesudah ERP</th></tr><tr><td>Excel per bagian, sering beda</td><td>Satu database</td></tr><tr><td>Input ulang di tiap bagian</td><td>Input sekali, mengalir ke dokumen berikutnya</td></tr><tr><td>Laporan butuh berhari-hari</td><td>Laporan langsung dari data terbaru</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> di Odoo lokalmu, buat satu Sales Order, lalu ikuti smart button-nya sampai delivery dan invoice. Catat dokumen apa saja yang terbentuk otomatis.</div>`);
  P("sales", `<h4>Lead-to-Cash dan dokumennya</h4><table class="mini-pivot"><tr><th>Langkah</th><th>Dokumen Odoo</th><th>Siapa</th></tr><tr><td>Peluang</td><td>Opportunity (CRM)</td><td>Sales</td></tr><tr><td>Penawaran</td><td>Quotation</td><td>Sales</td></tr><tr><td>Sepakat</td><td>Sales Order</td><td>Sales</td></tr><tr><td>Kirim</td><td>Delivery Order</td><td>Gudang</td></tr><tr><td>Tagih</td><td>Customer Invoice</td><td>Keuangan</td></tr><tr><td>Bayar</td><td>Payment + rekonsiliasi</td><td>Keuangan</td></tr></table>
<p><b>Kebijakan invoice</b> menentukan kapan bisa ditagih: <i>Ordered</i> (begitu dipesan) atau <i>Delivered</i> (setelah dikirim). Koreksi invoice yang sudah posted selalu lewat <b>credit note</b>.</p>`);
  P("stok", `<h4>Procure-to-Pay dan angka stok</h4><p>RFQ → PO → Receipt → Vendor Bill → Payment. Saat menilai perlu beli atau tidak, lihat <b>Forecasted</b> (On Hand + masuk terencana − keluar terencana), bukan hanya On Hand.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Arti</th></tr><tr><td>On Hand</td><td>fisik di gudang sekarang</td></tr><tr><td>Forecasted</td><td>perkiraan setelah semua rencana</td></tr><tr><td>Backorder</td><td>sisa yang belum datang/dikirim</td></tr><tr><td>Reordering rule</td><td>min/max pemicu pembelian otomatis</td></tr></table>`);
  P("akuntansi", `<h4>Debit-kredit tanpa hafalan</h4><p>Ingat kata <b>"ABe"</b>: <b>A</b>set dan <b>Be</b>ban bertambah di debit. Sisanya (liabilitas, ekuitas, pendapatan) bertambah di kredit.</p>
<table class="mini-pivot"><tr><th>Transaksi</th><th>Debit</th><th>Kredit</th></tr><tr><td>Jual kredit 10 jt</td><td>Piutang</td><td>Pendapatan</td></tr><tr><td>Pelanggan bayar</td><td>Bank</td><td>Piutang</td></tr><tr><td>Beli barang kredit</td><td>Persediaan</td><td>Utang usaha</td></tr><tr><td>Bayar listrik</td><td>Beban listrik</td><td>Bank</td></tr></table>
<p>Di Odoo, kamu jarang menulis jurnal manual: invoice, bill, dan pembayaran membuat jurnal ini otomatis. Tugas konsultan adalah memastikan akun dan pajak default-nya benar.</p>`);
  P("implementasi", `<h4>Peta proyek implementasi</h4><ol><li><b>Discovery</b>: wawancara per departemen, gambar alur proses sekarang.</li><li><b>Fit-gap</b>: tandai fit (standar), gap (perlu solusi).</li><li><b>Setup & build</b>: konfigurasi, modul tambahan, kustom bila perlu.</li><li><b>Migrasi data</b>: master dulu, lalu saldo awal saat cut-over.</li><li><b>Pelatihan & UAT</b>: key user menguji skenario nyata.</li><li><b>Go-live & hypercare</b>: pendampingan intensif awal.</li></ol><p>Prinsip: <b>proses dulu, sistem kemudian</b>. Sistem bagus tidak memperbaiki proses yang kacau.</p>`);
  P("antarmuka", `<h4>Tujuh jenis view</h4><table class="mini-pivot"><tr><th>View</th><th>Pakai untuk</th></tr><tr><td>List</td><td>banyak record, edit cepat</td></tr><tr><td>Form</td><td>satu dokumen lengkap</td></tr><tr><td>Kanban</td><td>tahap proses (pipeline, task)</td></tr><tr><td>Pivot</td><td>analisis silang angka</td></tr><tr><td>Graph</td><td>tren dan perbandingan</td></tr><tr><td>Calendar</td><td>jadwal</td></tr><tr><td>Activity</td><td>tindak lanjut tertunda</td></tr></table><p>Kombinasi <b>Filter + Group By + Favorite</b> menggantikan banyak permintaan "laporan khusus".</p>`);
  P("crmlanjut", `<h4>Corong (funnel) penjualan dalam angka</h4><p>Contoh: 100 lead → 40 opportunity → 15 quotation → 6 won. Konversi lead ke won = 6%. Untuk target 12 deal per bulan, tim butuh sekitar 200 lead. Data <b>lost reason</b> dan <b>UTM source</b> menjawab di mana kebocoran terbesar dan saluran mana yang paling menghasilkan.</p>`);
  P("saleslanjut", `<h4>Pilihan penagihan</h4><table class="mini-pivot"><tr><th>Kasus</th><th>Pengaturan</th></tr><tr><td>Bayar di muka penuh</td><td>Ordered quantities</td></tr><tr><td>Bayar setelah kirim</td><td>Delivered quantities</td></tr><tr><td>Uang muka 30%</td><td>Down payment (percentage)</td></tr><tr><td>Jasa per jam</td><td>Based on Timesheets</td></tr><tr><td>Langganan bulanan</td><td>Subscriptions</td></tr></table>`);
  P("belilanjut", `<h4>Kontrol pembelian</h4><p>Tiga lapis pengaman: <b>persetujuan PO</b> di atas nilai tertentu, <b>bill berdasarkan jumlah diterima</b>, dan <b>3-way matching</b> (PO = receipt = bill). Data vendor pricelist (harga, minimum, lead time) membuat RFQ otomatis memakai harga dan tanggal yang benar.</p>`);
  P("gudang", `<h4>Memilih alur gudang</h4><table class="mini-pivot"><tr><th>Kebutuhan</th><th>Pengaturan</th></tr><tr><td>Toko kecil</td><td>Receive/Deliver 1 step</td></tr><tr><td>Barang wajib dicek mutu</td><td>Receive 3 steps (Input → QC → Stock)</td></tr><tr><td>Banyak pesanan e-commerce</td><td>Deliver 3 steps (Pick → Pack → Ship)</td></tr><tr><td>Obat/makanan</td><td>Lot + Expiration + FEFO</td></tr><tr><td>Elektronik</td><td>Serial number</td></tr><tr><td>Pesanan khusus</td><td>Route MTO</td></tr></table>`);
  P("mrpkonsep", `<h4>Tiga jenis BoM</h4><table class="mini-pivot"><tr><th>Jenis</th><th>Artinya</th><th>Contoh</th></tr><tr><td>Manufacture</td><td>diproduksi lewat MO</td><td>roti, meja</td></tr><tr><td>Kit</td><td>paket tanpa produksi</td><td>hampers</td></tr><tr><td>Subcontracting</td><td>diproduksi pihak luar</td><td>jahit konveksi</td></tr></table><p>Biaya produk jadi = komponen + (jam operasi × tarif work center). Lab Hitung "Manufaktur" berisi latihan angka untuk rumus ini.</p>`);
  P("akunodoo", `<h4>Alur dokumen ke jurnal</h4><table class="mini-pivot"><tr><th>Dokumen</th><th>Journal</th><th>Jurnal otomatis</th></tr><tr><td>Customer invoice</td><td>Sales</td><td>Piutang / Pendapatan + PPN Keluaran</td></tr><tr><td>Vendor bill</td><td>Purchase</td><td>Persediaan/Beban + PPN Masukan / Utang</td></tr><tr><td>Payment</td><td>Bank/Cash</td><td>Bank / Piutang (atau Utang / Bank)</td></tr></table><p>Tutup bulan: rekonsiliasi bank selesai → cek laporan → pasang <b>lock date</b>.</p>`);
  P("hrproyek", `<h4>Menghubungkan SDM, proyek, dan uang</h4><p>Timesheet (jam × biaya karyawan) menjadi <b>biaya</b> proyek, dan bila produk jasanya berbasis timesheet, jam yang sama menjadi <b>pendapatan</b> yang ditagih. Expense yang ditandai re-invoice menambah tagihan ke pelanggan. Hasilnya: profit per proyek bisa dipantau tanpa Excel.</p>`);
  P("posweb", `<h4>POS dan website dalam satu sistem</h4><p>Stok, pelanggan, produk, dan loyalitas dipakai bersama. Penjualan POS ditutup per <b>sesi</b> (dengan hitung kas), sedangkan pesanan website menjadi <b>Sales Order</b> biasa. Laporan penjualan bisa digabung seluruh saluran atau dipisah per cabang/kanal.</p>`);
  P("ormlanjut", `<h4>Operasi recordset yang sering dipakai</h4><pre><code>recs.filtered(lambda r: r.state == "done")      # saring
recs.mapped("partner_id")                        # ambil relasi (recordset)
recs.sorted(key=lambda r: r.amount_total, reverse=True)
a | b, a &amp; b, a - b                              # gabung, irisan, selisih
recs.exists(), recs.ids, recs.ensure_one()</code></pre><p>Untuk agregat, gunakan <code>_read_group</code> (dikerjakan database), bukan loop Python di ribuan record.</p>`);
  P("viewxml", `<h4>Kerangka form yang rapi</h4><pre><code>&lt;form&gt;
  &lt;header&gt;tombol + &lt;field name="state" widget="statusbar"/&gt;&lt;/header&gt;
  &lt;sheet&gt;
    &lt;div class="oe_button_box"&gt;smart button&lt;/div&gt;
    &lt;group&gt;&lt;group&gt;kolom kiri&lt;/group&gt;&lt;group&gt;kolom kanan&lt;/group&gt;&lt;/group&gt;
    &lt;notebook&gt;&lt;page string="Baris"&gt;&lt;field name="line_ids"/&gt;&lt;/page&gt;&lt;/notebook&gt;
  &lt;/sheet&gt;
  &lt;div class="oe_chatter"&gt;&lt;field name="message_ids"/&gt;&lt;/div&gt;
&lt;/form&gt;</code></pre>`);
  P("keamanan", `<h4>Daftar periksa modul siap kirim</h4><ul><li>Manifest: nama, versi 17.0.x, depends lengkap, license, data berurutan (security dulu).</li><li>ACL untuk setiap model baru; record rule bila perlu.</li><li>Tes TransactionCase lulus dengan <code>--test-enable</code>.</li><li>Tidak ada print, rahasia, atau id angka tetap di kode.</li><li>Ikon dan deskripsi di static/description.</li></ul>`);
  P("owl", `<h4>Komponen OWL terkecil</h4><pre><code>/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

class Hitung extends Component {
  static template = "akademi.Hitung";
  setup() {
    this.state = useState({ n: 0 });
    this.orm = useService("orm");
  }
  async muat() { this.state.n = await this.orm.searchCount("akademi.kursus", []); }
}
registry.category("actions").add("akademi.hitung", Hitung);</code></pre><p>Template <code>akademi.Hitung</code> ditulis di file XML yang didaftarkan di <code>assets</code> manifest.</p>`);
  P("studikasus", `<h4>Kerangka diagnosis konsultan</h4><ol><li><b>Gejala</b>: apa yang dilihat pengguna (stok beda, laporan aneh)?</li><li><b>Data</b>: telusuri dokumen dan history (moves, jurnal, chatter).</li><li><b>Akar masalah</b>: proses di luar sistem? konfigurasi? data master salah?</li><li><b>Solusi bertingkat</b>: proses → konfigurasi → modul standar → kustom.</li><li><b>Ukur</b>: tetapkan indikator untuk memastikan masalah tidak kembali.</li></ol>`);
})();
