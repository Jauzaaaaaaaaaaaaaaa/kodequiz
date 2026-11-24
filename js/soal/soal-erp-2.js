// ============ ERP & ODOO lanjutan — bab 6–19 (Odoo 17) ============
// Fungsional: antarmuka, CRM, Sales, Purchase, gudang & rute, manufaktur, akuntansi, SDM & proyek, POS & website.
// Developer: ORM lanjut, view XML & QWeb, keamanan & struktur modul, OWL & integrasi. Ditutup studi kasus konsultan.
// Disusun dari dokumentasi resmi Odoo 17 (odoo.com/documentation/17.0), kurikulum Odoo eLearning
// (odoo.com/slides: Getting Started, CRM, Sales, Purchase, Inventory, MRP, Accounting, POS, HR, Project),
// tutorial developer "Server Framework 101", dan pembacaan kode sumber Odoo 17 lokal.
// Bab hitungan angka ada di soal-erp-hitung.js (dibuat alat/buat-soal-odoo.py).

SOAL_ERP.push(
// ---- BAB 6: Antarmuka Odoo ----
{k:"antarmuka",t:"mc",lv:1,q:"Tampilan Odoo yang menampilkan record sebagai kartu dalam kolom-kolom tahap (misalnya pipeline CRM) disebut…",o:["Kanban","List","Pivot","Calendar"],a:0,
 e:"Kanban = kartu per kolom; bisa digeser antar-tahap (drag and drop). List = tabel baris, Pivot = tabel ringkasan seperti PivotTable Excel, Calendar = berdasarkan tanggal.",
 w:[null,"List menampilkan baris tabel.","Pivot meringkas angka.","Calendar memakai tanggal."]},
{k:"antarmuka",t:"mc",lv:1,q:"Kamu ingin melihat total penjualan per salesperson per bulan dalam bentuk tabel silang. View yang tepat:",o:["Pivot","Form","Kanban","Activity"],a:0,
 e:"Pivot = tabel silang: baris salesperson, kolom bulan, nilai Total. Bisa diekspor ke Excel. Graph menampilkan hal yang sama sebagai grafik.",
 w:[null,"Form menampilkan satu record.","Kanban tidak meringkas angka.","Activity menampilkan jadwal tugas."]},
{k:"antarmuka",t:"mc",lv:1,q:"Beda Filter dan Group By di kotak pencarian Odoo:",o:["Filter menyaring record yang tampil; Group By mengelompokkan record yang tersisa","Keduanya sama","Group By menghapus record","Filter hanya untuk tanggal"],a:0,
 e:"Contoh: filter 'My Quotations' lalu Group By 'Customer'. Kombinasi filter + group by bisa disimpan sebagai Favorites (bahkan dibagikan ke pengguna lain).",
 w:[null,"Fungsinya berbeda.","Group By tidak menghapus apa pun.","Filter bisa untuk field apa pun."]},
{k:"antarmuka",t:"mc",lv:2,q:"Di chatter sebuah Sales Order, beda 'Send message' dan 'Log note':",o:["Send message dikirim ke followers (termasuk pelanggan bila ia follower); Log note hanya catatan internal","Log note dikirim ke pelanggan","Keduanya hanya internal","Send message tidak tersimpan"],a:0,
 e:"Kesalahan klasik pengguna baru: menulis komentar internal (misalnya soal harga modal) lewat Send message sehingga terkirim ke email pelanggan. Gunakan Log note untuk diskusi internal.",
 w:[null,"Terbalik.","Send message bisa keluar ke email.","Semua tercatat di riwayat."]},
{k:"antarmuka",t:"mc",lv:2,q:"Cara paling aman memasukkan 2.000 data produk dari Excel lama ke Odoo:",o:["Ekspor dulu beberapa produk dari Odoo sebagai template, isi Excel sesuai kolom itu, lalu Import dan klik Test sebelum Import","Ketik manual satu per satu","Salin langsung ke database PostgreSQL","Import tanpa mencocokkan kolom"],a:0,
 e:"Fitur Import (Favorites ▸ Import records) mencocokkan kolom file ke field. Tombol Test mengecek kesalahan tanpa menyimpan. Kolom 'External ID' memungkinkan impor ulang untuk memperbarui data, bukan membuat duplikat.",
 w:[null,"Lambat dan rawan salah.","Melewati validasi dan logika Odoo, berbahaya.","Data akan salah masuk."]},
{k:"antarmuka",t:"mc",lv:2,q:"Saat mengimpor Sales Order lewat file, kolom pelanggan diisi nama pelanggan yang sudah ada. Odoo mencocokkannya dengan…",o:["Nama tampilan (display name) record res.partner; bisa juga External ID atau Database ID","Nomor telepon","Alamat email saja","Tidak bisa, harus manual"],a:0,
 e:"Untuk field Many2one, impor menerima nama, External ID (kolom/id), atau Database ID (kolom/.id). Nama yang tidak unik bisa salah cocok, karena itu External ID lebih aman untuk migrasi besar.",
 w:[null,"Telepon tidak dipakai untuk pencocokan.","Bukan hanya email.","Odoo mendukung relasi saat impor."]},
{k:"antarmuka",t:"mc",lv:1,q:"Hak akses pengguna (misalnya Sales: 'User: Own Documents Only') diatur di…",o:["Settings ▸ Users & Companies ▸ Users, tab Access Rights","Form produk","Menu Website","File odoo.conf"],a:0,
 e:"Setiap aplikasi punya tingkat akses (grup). Contoh Sales: Own Documents Only, All Documents, Administrator. Ini dasar 'segregation of duties' yang sering ditanyakan auditor.",
 w:[null,"Produk tidak mengatur akses pengguna.","Website untuk situs.","odoo.conf untuk konfigurasi server."]},
{k:"antarmuka",t:"mc",lv:2,q:"Perusahaan punya dua PT dalam satu database Odoo. Fitur yang dipakai:",o:["Multi-company: tiap record punya company_id, pengguna bisa diizinkan ke beberapa company dan berpindah lewat pemilih company","Install Odoo dua kali di komputer yang sama wajib","Membuat dua menu Sales","Tidak bisa di Odoo"],a:0,
 e:"Multi-company memisahkan data (faktur, jurnal, gudang) per perusahaan tetapi tetap satu database, sehingga transaksi antar-perusahaan bisa diotomasi (inter-company rules).",
 w:[null,"Tidak wajib.","Menu tidak memisahkan data.","Odoo mendukung multi-company."]},
{k:"antarmuka",t:"mc",lv:1,q:"Fitur 'Activities' (ikon jam) di Odoo berfungsi untuk…",o:["Menjadwalkan tugas lanjutan (Call, Email, Meeting, To-Do) dengan tenggat dan penanggung jawab pada sebuah record","Menghapus record","Mengubah bahasa","Membuat backup"],a:0,
 e:"Activity muncul di record, di view Activity, dan di ikon jam bilah atas. Warna: hijau = mendatang, oranye = hari ini, merah = terlambat. Ini kebiasaan kerja yang membuat tim tidak lupa follow-up.",
 w:[null,"Bukan penghapusan.","Bahasa diatur di preferensi.","Backup di Database Manager."]},
{k:"antarmuka",t:"mc",lv:2,q:"Archive (arsipkan) produk lama berbeda dengan Delete karena…",o:["Archive hanya menyembunyikan record (active=False) dan menjaga riwayat transaksi; Delete menghapus dan sering ditolak bila sudah dipakai transaksi","Archive menghapus permanen","Delete bisa dibatalkan","Tidak ada bedanya"],a:0,
 e:"Produk yang sudah punya Sales Order tidak boleh dihapus karena merusak riwayat. Archive adalah praktik yang benar; record bisa dimunculkan lagi dengan filter Archived lalu Unarchive.",
 w:[null,"Terbalik.","Delete permanen.","Bedanya besar."]},
{k:"antarmuka",t:"is",lv:1,q:"Parameter URL untuk mengaktifkan developer mode adalah ?debug=___",a:["1"],h:"Angka satu.",
 e:"?debug=1 mengaktifkan developer mode; ?debug=assets juga memuat aset tanpa minify untuk debugging JavaScript."},
{k:"antarmuka",t:"mc",lv:2,q:"Di developer mode, cara cepat mengetahui nama teknis sebuah field di form:",o:["Arahkan kursor ke label field; tooltip menampilkan Field, Model, dan tipe","Buka database","Tanya pengguna","Tidak mungkin diketahui"],a:0,
 e:"Tooltip developer mode menunjukkan nama field (misalnya partner_id), model (sale.order), tipe, dan modul asal. Ini dipakai functional consultant untuk menulis spesifikasi ke developer.",
 w:[null,"Tidak perlu membuka database.","Pengguna biasanya tidak tahu.","Bisa lewat tooltip."]},

// ---- BAB 7: CRM lanjut ----
{k:"crmlanjut",t:"mc",lv:1,q:"Beda Lead dan Opportunity di Odoo CRM:",o:["Lead = calon yang belum dikualifikasi; Opportunity = lead yang sudah dikualifikasi dan masuk pipeline penjualan","Lead sudah pasti membeli","Opportunity adalah faktur","Keduanya sama persis"],a:0,
 e:"Fitur Leads diaktifkan di CRM ▸ Settings. Lead dikualifikasi (misalnya lewat telepon), lalu dikonversi menjadi Opportunity dengan tombol Convert to Opportunity. Tanpa fitur Leads, semua masuk langsung sebagai opportunity.",
 w:[null,"Lead belum pasti.","Faktur ada di Accounting.","Tahapannya berbeda."]},
{k:"crmlanjut",t:"mc",lv:2,q:"Opportunity batal karena harga terlalu mahal. Tindakan yang benar di Odoo:",o:["Klik Lost dan pilih Lost Reason 'Too expensive' agar alasan kekalahan bisa dianalisis","Hapus opportunity","Biarkan saja di stage awal","Pindahkan ke stage Won"],a:0,
 e:"Lost Reason membuat manajer bisa melihat laporan 'kenapa kita kalah'. Opportunity yang lost bisa dipulihkan (Restore) bila pelanggan kembali.",
 w:[null,"Menghapus menghilangkan data analisis.","Pipeline jadi tidak akurat.","Itu data palsu."]},
{k:"crmlanjut",t:"mc",lv:2,q:"Probability opportunity diisi otomatis oleh Predictive Lead Scoring. Apa yang terjadi bila sales mengubah angkanya manual?",o:["Pembaruan otomatis berhenti untuk opportunity itu sampai dikembalikan lewat ikon roda gigi","Odoo menolak perubahan","Semua opportunity ikut berubah","Opportunity terhapus"],a:0,
 e:"Menurut dokumentasi Odoo 17, model naive Bayes memakai data won/lost lama dengan variabel wajib Stage dan Team (opsional: Country, Source, Tags, kualitas email/telepon, dll).",
 w:[null,"Perubahan manual diperbolehkan.","Hanya opportunity itu.","Tidak ada yang terhapus."]},
{k:"crmlanjut",t:"mc",lv:1,q:"Stage di pipeline yang ditandai 'Is Won Stage' berarti…",o:["Opportunity yang masuk stage itu dianggap menang (probability 100%)","Stage pertama","Stage untuk lead yang kalah","Stage tersembunyi"],a:0,
 e:"Memindahkan kartu ke stage Won (atau klik tombol Won) mengisi probability 100% dan tanggal tutup. Biasanya disusul membuat quotation.",
 w:[null,"Stage pertama biasanya 'New'.","Yang kalah memakai Lost.","Stage Won terlihat."]},
{k:"crmlanjut",t:"mc",lv:2,q:"Email masuk ke alamat info@perusahaan otomatis menjadi lead di tim 'Sales Jakarta'. Pengaturannya:",o:["Isi Email Alias pada Sales Team (CRM ▸ Configuration ▸ Sales Teams), dengan server email masuk terkonfigurasi","Mengetik ulang email setiap hari","Install modul Website saja","Tidak mungkin otomatis"],a:0,
 e:"Alias email membuat setiap email baru menjadi record (lead) dan balasan berikutnya masuk ke chatter record yang sama.",
 w:[null,"Bisa diotomasi.","Website untuk formulir kontak, bukan email.","Odoo mendukung alias."]},
{k:"crmlanjut",t:"mc",lv:2,q:"Dua lead ternyata dari perusahaan yang sama. Fitur Odoo untuk menyatukannya:",o:["Merge (pilih beberapa lead di list ▸ Action ▸ Merge); Odoo juga menandai kemungkinan duplikat","Hapus salah satu tanpa melihat","Ubah nama keduanya","Export lalu import ulang"],a:0,
 e:"Merge menggabungkan informasi dan riwayat chatter ke satu record sehingga tidak ada dua sales yang menghubungi orang yang sama.",
 w:[null,"Riwayat bisa hilang.","Masih dua record.","Berisiko dan lambat."]},
{k:"crmlanjut",t:"mc",lv:1,q:"Dari opportunity, tombol 'New Quotation' akan…",o:["Membuat quotation di aplikasi Sales yang terhubung ke opportunity dan pelanggannya","Membuat faktur langsung","Membuat PO ke vendor","Menghapus opportunity"],a:0,
 e:"Ini titik sambung CRM → Sales. Jumlah quotation tampil sebagai smart button di opportunity, dan saat quotation dikonfirmasi opportunity bisa otomatis ditandai Won.",
 w:[null,"Faktur dibuat dari Sales Order.","PO untuk pembelian.","Tidak menghapus apa pun."]},
{k:"crmlanjut",t:"mc",lv:2,q:"Manajer ingin lead baru dibagikan otomatis ke sales berdasarkan wilayah. Fitur Odoo 17:",o:["Rule-based Assignment: domain per tim/anggota (misalnya Country = Indonesia, Probability ≥ 20) dijalankan manual atau berkala","Membagi lewat grup WhatsApp","Hanya bisa manual","Membuat database terpisah per wilayah"],a:0,
 e:"Diaktifkan di CRM ▸ Settings. Setiap anggota tim bisa diberi kapasitas (jumlah lead per 30 hari) dan domain sendiri.",
 w:[null,"Tidak tercatat di sistem.","Ada fitur otomatis.","Berlebihan."]},
{k:"crmlanjut",t:"is",lv:1,q:"Nilai expected revenue dikali probability disebut ___ revenue di Odoo.",a:["prorated"],h:"Kata Inggris, diawali 'pro…'.",
 e:"Prorated Revenue = expected revenue × probability ÷ 100. Latihan hitungnya ada di bab Lab Hitung: CRM Pipeline."},
{k:"crmlanjut",t:"mc",lv:2,q:"KPI yang paling tepat untuk menilai disiplin follow-up tim sales di Odoo:",o:["Jumlah activity yang terlambat (overdue) per salesperson","Jumlah produk di katalog","Ukuran logo perusahaan","Jumlah gudang"],a:0,
 e:"Laporan Activities (CRM ▸ Reporting ▸ Activities) bisa di-group by salesperson dan status. Activity merah yang menumpuk = lead yang terabaikan.",
 w:[null,"Tidak terkait follow-up.","Tidak relevan.","Tidak relevan."]},

// ---- BAB 8: Sales lanjut ----
{k:"saleslanjut",t:"mc",lv:1,q:"Quotation Template berguna untuk…",o:["Membuat quotation standar (produk, opsi, syarat, masa berlaku) dengan sekali pilih","Mencetak faktur pajak","Mengatur gaji","Mengunci gudang"],a:0,
 e:"Aktifkan di Sales ▸ Settings ▸ Quotation Templates. Template bisa berisi produk wajib, Optional Products (upsell yang bisa ditambah pelanggan di portal), dan Quotation Validity.",
 w:[null,"Faktur pajak dari Accounting.","Gaji di Payroll.","Tidak terkait gudang."]},
{k:"saleslanjut",t:"mc",lv:2,q:"Produk dengan Invoicing Policy 'Delivered quantities'. Pesanan 10 unit, baru dikirim 6. Saat Create Invoice, kuantitas yang ditagih:",o:["6","10","4","0"],a:0,
 e:"Delivered quantities = tagih sesuai yang sudah dikirim. Ordered quantities = tagih sesuai pesanan walau belum dikirim (cocok untuk pembayaran di muka).",
 w:[null,"Itu kebijakan Ordered quantities.","Itu sisa yang belum dikirim.","Sudah ada yang terkirim."]},
{k:"saleslanjut",t:"mc",lv:2,q:"Pelanggan proyek harus membayar 30% di depan sebelum barang dikirim. Fitur Sales yang dipakai:",o:["Create Invoice ▸ Down payment (percentage) 30%","Diskon 30%","Pricelist khusus","Membatalkan pesanan"],a:0,
 e:"Faktur down payment memakai produk khusus 'Down Payment'. Di faktur akhir DP otomatis dikurangkan sebagai baris negatif.",
 w:[null,"Diskon mengurangi harga, bukan uang muka.","Pricelist mengatur harga.","Tidak perlu batal."]},
{k:"saleslanjut",t:"mc",lv:1,q:"Status Sales Order setelah quotation dikonfirmasi:",o:["Sales Order","Draft","Cancelled","Posted"],a:0,
 e:"Alur: Quotation → Quotation Sent → Sales Order (confirmed). Posted adalah status faktur di Accounting.",
 w:[null,"Draft = quotation belum dikirim.","Cancelled = dibatalkan.","Posted untuk faktur/jurnal."]},
{k:"saleslanjut",t:"mc",lv:2,q:"Pelanggan menyetujui quotation lewat portal dengan tanda tangan online. Pengaturannya:",o:["Sales ▸ Settings ▸ Online Signature (dan/atau Online Payment) lalu kirim quotation lewat email","Mencetak dan scan","Hanya bisa di Enterprise Studio","Tidak bisa"],a:0,
 e:"Pelanggan membuka link portal, melihat quotation, menandatangani atau membayar, dan Sales Order langsung terkonfirmasi. Mempercepat siklus Lead-to-Cash.",
 w:[null,"Bisa digital.","Fitur standar Sales.","Tersedia."]},
{k:"saleslanjut",t:"mc",lv:2,q:"Sales Order sudah dikonfirmasi dan pengiriman sudah dibuat. Pelanggan menambah 5 unit. Langkah yang benar:",o:["Tambah kuantitas di baris Sales Order; Odoo menyesuaikan delivery order (membuat pergerakan tambahan)","Buat Sales Order baru wajib","Edit langsung tabel database","Ubah delivery order tanpa mengubah SO"],a:0,
 e:"Mengubah SO terkonfirmasi diperbolehkan (kecuali dikunci dengan 'Lock Confirmed Sales'). Mengubah hanya delivery membuat SO, pengiriman, dan faktur tidak sinkron.",
 w:[null,"Tidak wajib.","Berbahaya.","Data jadi tidak sinkron."]},
{k:"saleslanjut",t:"mc",lv:2,q:"Pelanggan grosir otomatis mendapat harga khusus setiap kali dipilih di quotation. Konfigurasinya:",o:["Isi field Pricelist di tab Sales & Purchase pada form kontak pelanggan","Ubah Sales Price produk setiap pesanan","Buat produk duplikat","Pasang diskon manual tiap baris"],a:0,
 e:"Pricelist default pelanggan terisi otomatis di quotation. Pricelist juga bisa ditentukan per negara (country group).",
 w:[null,"Merepotkan dan rawan lupa.","Membuat stok terpecah.","Rawan salah."]},
{k:"saleslanjut",t:"mc",lv:3,q:"Penjualan jasa konsultasi ditagih sesuai jam kerja aktual. Konfigurasi produk Service yang tepat:",o:["Invoicing Policy 'Based on Timesheets' dan Create on Order 'Project & Task' sehingga timesheet menjadi kuantitas terkirim","Invoicing Policy Ordered quantities","Produk Storable","Pricelist 0%"],a:0,
 e:"Modul sale_timesheet menghubungkan Sales–Project–Timesheet. Jam yang dicatat di task masuk ke kolom Delivered pada baris SO, lalu ditagih.",
 w:[null,"Itu menagih di depan, bukan sesuai jam.","Jasa bukan barang stok.","Tidak terkait."]},
{k:"saleslanjut",t:"mc",lv:2,q:"Fitur 'Margins' di Sales menampilkan…",o:["Margin per baris dan per pesanan = harga jual − cost produk","Margin halaman cetak","Jarak antar baris","Pajak"],a:0,
 e:"Berguna agar sales tidak memberi diskon yang membuat rugi. Latihan rumus margin vs markup ada di Lab Hitung: Pricelist.",
 w:[null,"Bukan tata letak.","Bukan tata letak.","Pajak terpisah."]},
{k:"saleslanjut",t:"is",lv:1,q:"Dokumen penawaran harga ke pelanggan sebelum dikonfirmasi disebut ___",a:["quotation","quotations","penawaran"],h:"Bahasa Inggrisnya diawali 'quot…'.",
 e:"Quotation berubah menjadi Sales Order setelah dikonfirmasi."},

// ---- BAB 9: Purchase lanjut ----
{k:"belilanjut",t:"mc",lv:1,q:"Harga beli dan lead time per vendor disimpan di…",o:["Tab Purchase pada form produk (vendor pricelist / supplierinfo)","Form karyawan","Menu Website","Faktur pelanggan"],a:0,
 e:"Satu produk bisa punya beberapa vendor dengan Min. Quantity, harga, dan Delivery Lead Time berbeda. Odoo memakai baris vendor pertama yang cocok saat membuat RFQ otomatis.",
 w:[null,"Tidak terkait.","Tidak terkait.","Itu sisi penjualan."]},
{k:"belilanjut",t:"mc",lv:2,q:"Bill Control 'Received quantities': PO 100 unit, diterima 70. Kuantitas yang bisa ditagihkan vendor bill:",o:["70","100","30","0"],a:0,
 e:"Received quantities mencegah membayar barang yang belum datang (cocok untuk stok). Ordered quantities dipakai bila pembayaran di muka atau untuk jasa.",
 w:[null,"Itu Ordered quantities.","Itu yang belum diterima.","Sudah ada penerimaan."]},
{k:"belilanjut",t:"mc",lv:2,q:"Three-way matching di Purchase Settings membandingkan…",o:["Purchase Order, Receipt, dan Vendor Bill sebelum bill boleh dibayar","Tiga vendor termurah","Tiga gudang","Tiga mata uang"],a:0,
 e:"Bila jumlah atau harga di bill berbeda dengan PO/penerimaan, status pembayaran ditahan. Ini kontrol internal penting untuk mencegah kecurangan.",
 w:[null,"Bukan perbandingan vendor.","Bukan gudang.","Bukan kurs."]},
{k:"belilanjut",t:"mc",lv:2,q:"Perusahaan menyepakati kontrak setahun dengan harga tetap untuk 1.000 unit, diambil bertahap. Fitur Purchase:",o:["Purchase Agreement tipe Blanket Order, lalu buat PO bertahap dari perjanjian itu","Call for Tenders","Satu PO 1.000 unit langsung diterima","Dropship"],a:0,
 e:"Blanket Order = kontrak jangka panjang dengan harga tetap. Call for Tenders = meminta penawaran beberapa vendor lalu memilih yang terbaik.",
 w:[null,"Itu untuk lelang/penawaran.","Tidak bertahap.","Dropship untuk pengiriman langsung ke pelanggan."]},
{k:"belilanjut",t:"mc",lv:2,q:"PO di atas nominal tertentu harus disetujui manajer. Pengaturan standar Odoo:",o:["Purchase ▸ Settings ▸ Purchase Order Approval dengan Minimum Amount; PO berstatus 'To Approve' sampai manajer menyetujui","Tidak bisa tanpa kode","Membatasi menu Purchase","Membuat dua company"],a:0,
 e:"Ini 'double validation'. Bila butuh aturan lebih rumit (beberapa tingkat, alasan penolakan), barulah dibuat modul kustom, seperti modul purchase_amount_approval di portofoliomu.",
 w:[null,"Ada pengaturan standar.","Bukan cara persetujuan.","Berlebihan."]},
{k:"belilanjut",t:"mc",lv:1,q:"Status dokumen pembelian sebelum dikonfirmasi:",o:["RFQ (Request for Quotation)","Purchase Order","Vendor Bill","Receipt"],a:0,
 e:"RFQ → RFQ Sent → Purchase Order (confirmed) → Receipt → Bill → Paid.",
 w:[null,"Itu setelah dikonfirmasi.","Bill dari vendor.","Receipt penerimaan barang."]},
{k:"belilanjut",t:"mc",lv:2,q:"Vendor mengirim barang sebagian (60 dari 100). Saat validasi Receipt, Odoo menawarkan…",o:["Create Backorder (sisa 40 ditunggu) atau No Backorder (sisa dibatalkan)","Menghapus PO","Mengubah harga","Membuat faktur pelanggan"],a:0,
 e:"Backorder adalah dokumen penerimaan baru untuk sisa barang. Pilih No Backorder bila vendor memastikan sisanya tidak akan dikirim.",
 w:[null,"PO tetap ada.","Harga tidak berubah.","Tidak terkait penjualan."]},
{k:"belilanjut",t:"mc",lv:3,q:"Bagaimana Odoo otomatis membuat RFQ ketika stok menipis?",o:["Reordering rule pada produk dengan route Buy dan vendor terisi; scheduler membuat RFQ","Odoo menelepon vendor","Tidak bisa otomatis","Lewat modul Website"],a:0,
 e:"Syarat: produk Storable, route Buy aktif, ada vendor di tab Purchase, dan reordering rule (Min/Max). Latihan angka To Order ada di Lab Hitung: Reordering Rule.",
 w:[null,"Tidak ada telepon otomatis.","Bisa otomatis.","Tidak terkait."]},
{k:"belilanjut",t:"mc",lv:2,q:"Membandingkan beberapa RFQ dari vendor berbeda untuk kebutuhan yang sama di Odoo 17:",o:["Fitur Alternatives / Call for Tenders, lalu Compare Product Lines dan pilih penawaran terbaik","Membuka banyak tab browser","Ekspor ke Excel wajib","Tidak tersedia"],a:0,
 e:"Purchase Agreements menyediakan pembanding baris produk antar-RFQ; RFQ yang tidak dipilih bisa dibatalkan otomatis.",
 w:[null,"Tidak efisien.","Tidak wajib.","Tersedia."]},
{k:"belilanjut",t:"is",lv:1,q:"Dokumen tagihan dari pemasok di Odoo disebut Vendor ___",a:["bill"],h:"Empat huruf.",
 e:"Vendor Bill dibuat dari PO (tombol Create Bill) agar kuantitas dan harga sesuai PO."},

// ---- BAB 10: Gudang, lokasi & rute ----
{k:"gudang",t:"mc",lv:1,q:"Di Odoo 17, tipe produk yang stoknya dihitung (on hand) adalah…",o:["Storable Product","Consumable","Service","Kit"],a:0,
 e:"Odoo 17: Storable (stok dihitung), Consumable (dipakai tanpa hitung stok), Service (jasa). Mulai Odoo 18 tipenya menjadi Goods/Service/Combo dengan centang 'Track Inventory'. Perhatikan versi klien!",
 w:[null,"Consumable tidak dilacak jumlahnya.","Jasa tidak punya stok.","Kit adalah jenis BoM."]},
{k:"gudang",t:"mc",lv:2,q:"Lokasi 'Partners/Vendors', 'Partners/Customers', dan 'Virtual Locations/Inventory adjustment' disebut lokasi virtual karena…",o:["Tidak ada barang fisik di sana; lokasi itu menjadi asal/tujuan pergerakan agar setiap perpindahan tercatat ganda","Lokasinya di internet","Hanya untuk produk digital","Bisa dihapus bebas"],a:0,
 e:"Odoo memakai pencatatan ganda untuk stok: penerimaan = Vendors → WH/Stock, pengiriman = WH/Stock → Customers, selisih opname = Inventory adjustment ↔ WH/Stock.",
 w:[null,"Bukan lokasi online.","Untuk semua produk.","Lokasi sistem tidak boleh dihapus."]},
{k:"gudang",t:"mc",lv:2,q:"Gudang ingin barang dipindah dulu ke area Input, dicek QC, baru masuk rak. Pengaturan Incoming Shipments:",o:["Receive goods in input, then quality and then stock (3 steps)","Receive goods directly (1 step)","Receive in 2 steps","Dropship"],a:0,
 e:"Aktifkan Storage Locations dan Multi-Step Routes di Inventory Settings, lalu atur di Configuration ▸ Warehouses. 3 langkah = Input → Quality Control → Stock.",
 w:[null,"Tanpa area QC.","2 langkah tanpa QC.","Dropship tidak melewati gudang."]},
{k:"gudang",t:"mc",lv:2,q:"Pengiriman 3 langkah (3 steps) di Odoo berarti…",o:["Pick → Pack → Ship","Order → Invoice → Pay","Input → QC → Stock","Buy → Make → Sell"],a:0,
 e:"Outgoing: 1 step (ship langsung), 2 steps (pick + ship), 3 steps (pick + pack + ship). Input → QC → Stock adalah penerimaan 3 langkah.",
 w:[null,"Itu alur penjualan.","Itu penerimaan.","Itu bukan rute pengiriman."]},
{k:"gudang",t:"mc",lv:2,q:"Produk makanan harus dikirim berdasarkan tanggal kedaluwarsa terdekat. Removal Strategy yang dipakai:",o:["FEFO (First Expiry, First Out)","LIFO","FIFO","Closest Location"],a:0,
 e:"FEFO butuh pelacakan Lot dan Expiration Dates aktif. Strategi diatur di Product Category atau lokasi.",
 w:[null,"LIFO keluarkan yang terakhir masuk.","FIFO berdasar tanggal masuk, bukan kedaluwarsa.","Berdasar jarak rak."]},
{k:"gudang",t:"mc",lv:1,q:"Laptop bergaransi harus dilacak per unit. Tracking yang tepat:",o:["By Unique Serial Number","By Lots","No tracking","By Weight"],a:0,
 e:"Serial = satu nomor per unit (laptop, HP). Lot = satu nomor per kelompok produksi (obat, makanan).",
 w:[null,"Lot untuk kelompok.","Tidak bisa dilacak.","Tidak ada opsi itu."]},
{k:"gudang",t:"mc",lv:2,q:"Barang yang dibeli dari vendor dikirim langsung ke pelanggan tanpa masuk gudang. Route-nya:",o:["Dropship","Make To Order + Manufacture","Buy saja","Resupply Subcontractor"],a:0,
 e:"Dropship membuat PO otomatis dari Sales Order dan satu transfer Vendors → Customers. Stok gudang tidak berubah.",
 w:[null,"Itu produksi.","Buy saja tetap masuk gudang.","Itu subkontrak."]},
{k:"gudang",t:"mc",lv:2,q:"Putaway Rule digunakan untuk…",o:["Menentukan otomatis rak/lokasi tujuan barang yang diterima, misalnya semua 'Minuman' ke WH/Stock/Rak-Dingin","Menghapus stok","Menentukan harga","Membuat faktur"],a:0,
 e:"Putaway rule bisa per produk atau per kategori, dan di Odoo 17 juga mempertimbangkan kapasitas (Storage Category).",
 w:[null,"Tidak menghapus.","Tidak terkait harga.","Tidak terkait faktur."]},
{k:"gudang",t:"mc",lv:2,q:"Hasil stock opname berbeda dengan sistem. Cara resmi mengoreksinya di Odoo 17:",o:["Inventory ▸ Operations ▸ Physical Inventory, isi Counted Quantity lalu Apply","Ubah angka On Hand di form produk langsung","Buat Sales Order","Hapus produk"],a:0,
 e:"Apply membuat stock move ke/dari lokasi Inventory adjustment sehingga ada jejak audit (dan jurnal bila valuasi otomatis).",
 w:[null,"Tidak ada jejak audit.","Itu penjualan.","Merusak riwayat."]},
{k:"gudang",t:"mc",lv:3,q:"Route Make To Order (MTO) di Odoo 17 tidak terlihat di form produk. Penyebab paling umum:",o:["Route MTO diarsipkan secara default; aktifkan Multi-Step Routes lalu unarchive route 'Replenish on Order (MTO)'","Fitur MTO dihapus Odoo","Harus Enterprise","Produk bertipe Storable"],a:0,
 e:"MTO + Buy membuat PO khusus untuk setiap Sales Order; MTO + Manufacture membuat MO khusus. Cocok untuk barang mahal atau pesanan khusus.",
 w:[null,"Masih ada.","Tersedia di Community.","Storable justru cocok."]},
{k:"gudang",t:"is",lv:1,q:"Dokumen sisa barang yang belum terkirim/diterima disebut ___",a:["backorder","back order"],h:"Back…",
 e:"Backorder dibuat saat transfer divalidasi sebagian dan pengguna memilih Create Backorder."},
{k:"gudang",t:"mc",lv:2,q:"Lokasi bertipe 'View' (misalnya WH) dipakai untuk…",o:["Mengelompokkan lokasi anak dalam hierarki; barang tidak boleh disimpan langsung di lokasi View","Menyimpan barang rusak","Tempat pelanggan","Lokasi produksi"],a:0,
 e:"Hierarki contoh: WH (View) ▸ Stock (Internal) ▸ Rak A. Laporan stok per WH menjumlah semua lokasi anak.",
 w:[null,"Barang rusak di lokasi Scrap.","Itu Partners/Customers.","Itu Virtual Locations/Production."]},

// ---- BAB 11: Manufaktur ----
{k:"mrpkonsep",t:"mc",lv:1,q:"Tiga tipe BoM di Odoo 17:",o:["Manufacture this product, Kit, Subcontracting","Sales, Purchase, Stock","Draft, Done, Cancel","FIFO, AVCO, Standard"],a:0,
 e:"Manufacture = diproduksi lewat MO; Kit = paket yang meledak jadi komponen saat dikirim; Subcontracting = diproduksi pihak ketiga.",
 w:[null,"Itu nama aplikasi.","Itu status.","Itu metode valuasi."]},
{k:"mrpkonsep",t:"mc",lv:1,q:"Urutan status Manufacturing Order:",o:["Draft → Confirmed → In Progress → To Close → Done","Done → Draft","Quotation → Sales Order","RFQ → PO"],a:0,
 e:"Confirmed = komponen dipesan/dicadangkan; In Progress = sedang dikerjakan; To Close = jumlah diproduksi sudah diisi; Done = stok produk jadi bertambah dan komponen terpakai.",
 w:[null,"Terbalik.","Itu Sales.","Itu Purchase."]},
{k:"mrpkonsep",t:"mc",lv:2,q:"Penggilingan tebu menghasilkan gula dan juga ampas yang bisa dijual. Fitur BoM untuk ampas:",o:["By-Products (aktifkan di Manufacturing Settings)","Scrap","Kit","Backorder"],a:0,
 e:"By-product dicatat bersama hasil utama dan bisa diberi porsi biaya (cost share %).",
 w:[null,"Scrap = barang dibuang.","Kit bukan produksi.","Backorder untuk sisa pengiriman."]},
{k:"mrpkonsep",t:"mc",lv:2,q:"Work center di Odoo menyimpan…",o:["Kapasitas, efisiensi, setup/cleanup time, biaya per jam, dan jam kerja (working hours)","Daftar pelanggan","Harga jual","Akun bank"],a:0,
 e:"Data work center dipakai untuk menjadwalkan work order dan menghitung biaya produksi. Rumus durasinya ada di Lab Hitung: Manufaktur.",
 w:[null,"Tidak terkait.","Tidak terkait.","Tidak terkait."]},
{k:"mrpkonsep",t:"mc",lv:2,q:"Produk jadi ternyata cacat dan ingin dibongkar kembali menjadi komponen. Fitur Odoo:",o:["Unbuild Order","Scrap Order","Return","Credit Note"],a:0,
 e:"Unbuild mengurangi stok produk jadi dan mengembalikan komponen sesuai BoM. Scrap membuang barang ke lokasi Scrap.",
 w:[null,"Scrap membuang, tidak mengembalikan komponen.","Return untuk pelanggan/vendor.","Credit Note dokumen keuangan."]},
{k:"mrpkonsep",t:"mc",lv:2,q:"Perusahaan mengirim kain ke penjahit luar dan menerima kemeja jadi. Tipe BoM:",o:["Subcontracting, dengan subcontractor sebagai vendor","Kit","Manufacture this product di gudang sendiri","Dropship"],a:0,
 e:"Subcontracting membuat PO ke subcontractor; komponen dikirim (resupply) ke lokasi subcontractor dan dikonsumsi saat kemeja diterima.",
 w:[null,"Kit tidak diproduksi.","Produksi terjadi di luar.","Dropship tanpa produksi."]},
{k:"mrpkonsep",t:"mc",lv:3,q:"MO dibuat otomatis setiap ada Sales Order untuk produk pesanan khusus. Konfigurasi route produk:",o:["Manufacture + Replenish on Order (MTO)","Buy","Dropship","Hanya Manufacture tanpa MTO dan tanpa reordering rule"],a:0,
 e:"Manufacture + MTO = setiap SO memicu MO. Manufacture tanpa MTO butuh reordering rule atau MO manual (make to stock).",
 w:[null,"Buy membuat PO.","Dropship tidak memproduksi.","Tidak ada pemicu otomatis per SO."]},
{k:"mrpkonsep",t:"mc",lv:2,q:"Komponen di MO belum tersedia sebagian. Tombol yang mengecek dan mencadangkan stok komponen:",o:["Check availability","Mark as Done","Unbuild","Cancel"],a:0,
 e:"Status ketersediaan komponen: Available, Not Available, atau Waiting. Pengaturan 'Manufacturing Readiness' menentukan apakah MO boleh mulai bila hanya komponen operasi pertama yang tersedia.",
 w:[null,"Itu menyelesaikan MO.","Itu membongkar.","Itu membatalkan."]},
{k:"mrpkonsep",t:"mc",lv:2,q:"Aplikasi Odoo Enterprise untuk mengelola perubahan desain BoM dengan persetujuan dan versi:",o:["PLM (Product Lifecycle Management) dengan Engineering Change Order","Quality","Maintenance","Barcode"],a:0,
 e:"PLM menyimpan versi BoM dan memaksa perubahan melalui ECO yang disetujui. Quality untuk inspeksi, Maintenance untuk perawatan mesin.",
 w:[null,"Quality untuk pemeriksaan mutu.","Maintenance untuk mesin.","Barcode untuk pemindaian."]},
{k:"mrpkonsep",t:"is",lv:1,q:"Singkatan dari Manufacturing Order adalah ___",a:["mo"],h:"Dua huruf.",
 e:"MO adalah perintah produksi sejumlah produk sesuai BoM."},

// ---- BAB 12: Akuntansi di Odoo ----
{k:"akunodoo",t:"mc",lv:2,q:"Odoo Community 17 memasang aplikasi 'Invoicing'. Yang umumnya hanya ada di Accounting Enterprise:",o:["Laporan keuangan lengkap (Balance Sheet, P&L, Aged reports dinamis), rekonsiliasi bank lanjutan, aset, budget","Membuat faktur pelanggan","Mencatat pembayaran","Membuat vendor bill"],a:0,
 e:"Modul account_reports dan account_asset adalah Enterprise. Karena itu banyak proyek Community memakai modul pihak ketiga (misalnya base_accounting_kit seperti di Odoo lokalmu).",
 w:[null,"Faktur ada di Community.","Pembayaran ada di Community.","Vendor bill ada di Community."]},
{k:"akunodoo",t:"mc",lv:1,q:"Lima tipe jurnal (journal) standar di Odoo:",o:["Sales, Purchase, Bank, Cash, Miscellaneous","Debit, Kredit, Saldo, Laba, Rugi","Lead, Opportunity, Won, Lost, Stage","Draft, Posted, Cancelled, Paid, Partial"],a:0,
 e:"Setiap dokumen akuntansi masuk jurnal: faktur → Sales, vendor bill → Purchase, mutasi bank → Bank, kas kecil → Cash, jurnal penyesuaian → Miscellaneous.",
 w:[null,"Itu istilah akuntansi umum, bukan jenis jurnal.","Itu CRM.","Itu status."]},
{k:"akunodoo",t:"mc",lv:2,q:"Faktur pelanggan yang sudah Posted ternyata salah harga. Cara yang benar:",o:["Buat Credit Note (Add Credit Note/Reverse) lalu terbitkan faktur baru; atau Reset to Draft bila belum ada lock date dan belum dilaporkan","Hapus jurnalnya dari database","Ubah angka faktur posted langsung","Abaikan"],a:0,
 e:"Dokumen posted tidak boleh diubah diam-diam. Credit note menjaga jejak audit. Lock date (Accounting ▸ Lock Dates) mencegah perubahan periode yang sudah ditutup.",
 w:[null,"Merusak integritas data.","Tidak bisa saat posted.","Laporan salah."]},
{k:"akunodoo",t:"mc",lv:2,q:"Penjualan ekspor tidak dikenai PPN 11%, tetapi pelanggan lokal tetap 11%. Fitur Odoo agar pajak berganti otomatis:",o:["Fiscal Position (memetakan pajak 11% → 0% dan akun tertentu), bisa terdeteksi otomatis berdasarkan negara pelanggan","Membuat produk ekspor terpisah","Menghapus pajak manual tiap faktur","Pricelist"],a:0,
 e:"Fiscal position memetakan pajak dan akun. Bisa dipasang di kontak atau 'Detect Automatically' berdasarkan negara/grup negara.",
 w:[null,"Produk dobel merepotkan.","Rawan lupa.","Pricelist untuk harga."]},
{k:"akunodoo",t:"mc",lv:2,q:"Rekonsiliasi bank di Odoo artinya…",o:["Mencocokkan baris mutasi bank (bank statement line) dengan faktur, bill, atau pembayaran di sistem","Menghapus mutasi bank","Mengubah kurs","Membuat produk"],a:0,
 e:"Model reconciliation (aturan otomatis) bisa mencocokkan berdasarkan nomor referensi atau nominal. Setelah cocok, faktur berstatus Paid.",
 w:[null,"Tidak menghapus.","Tidak mengubah kurs.","Tidak terkait produk."]},
{k:"akunodoo",t:"mc",lv:2,q:"Tipe akun (account type) untuk akun Piutang Usaha:",o:["Receivable","Payable","Income","Equity"],a:0,
 e:"Receivable dan Payable wajib memakai partner dan bisa direkonsiliasi. Income/Expense masuk laba rugi; Equity masuk neraca bagian modal.",
 w:[null,"Payable untuk utang.","Income untuk pendapatan.","Equity untuk modal."]},
{k:"akunodoo",t:"mc",lv:2,q:"Manajer ingin melihat laba per proyek/cabang tanpa membuat chart of accounts terpisah. Fitur:",o:["Analytic Accounting (analytic account dan analytic distribution di baris transaksi)","Membuat company baru per cabang","Menambah akun per cabang di CoA","Tidak bisa"],a:0,
 e:"Analytic tidak mengubah akun keuangan; ia menandai baris dengan 'dimensi' tambahan (proyek, cabang, departemen). Odoo 17 memakai analytic plans dan distribusi persen.",
 w:[null,"Berlebihan.","Membuat CoA membengkak.","Fitur tersedia."]},
{k:"akunodoo",t:"mc",lv:1,q:"Laporan untuk melihat piutang yang sudah jatuh tempo dikelompokkan 1–30, 31–60, 61–90 hari:",o:["Aged Receivable","Balance Sheet","General Ledger","Tax Report"],a:0,
 e:"Aged Receivable menjadi dasar penagihan (follow-up). Aged Payable untuk utang ke vendor.",
 w:[null,"Neraca tidak mengelompokkan umur.","Buku besar per akun.","Laporan pajak."]},
{k:"akunodoo",t:"mc",lv:3,q:"Payment pelanggan sudah dicatat, tetapi faktur masih 'In Payment', belum 'Paid'. Artinya:",o:["Pembayaran tercatat di akun Outstanding Receipts dan belum direkonsiliasi dengan mutasi bank","Faktur dibatalkan","Pajak salah","Faktur masih draft"],a:0,
 e:"Odoo 17 memakai akun outstanding sebagai perantara. Setelah mutasi bank dicocokkan dengan payment itu, status berubah menjadi Paid.",
 w:[null,"Tidak dibatalkan.","Tidak terkait pajak.","Faktur sudah posted."]},
{k:"akunodoo",t:"is",lv:1,q:"Dokumen pengurang faktur (retur/koreksi) disebut Credit ___",a:["note"],h:"Empat huruf.",
 e:"Credit note membalik sebagian atau seluruh faktur dan bisa direkonsiliasi dengan faktur asal."},

// ---- BAB 13: SDM, proyek, timesheet, expenses ----
{k:"hrproyek",t:"mc",lv:1,q:"Aplikasi Odoo untuk mencatat cuti karyawan beserta saldo dan persetujuannya:",o:["Time Off","Attendances","Recruitment","Payroll"],a:0,
 e:"Time Off: tipe cuti, Allocation (jatah), Request (pengajuan), approval manajer/HR, dan Accrual Plan (jatah bertambah bertahap, misalnya 1 hari per bulan).",
 w:[null,"Attendances untuk jam masuk/pulang.","Recruitment untuk pelamar.","Payroll untuk gaji."]},
{k:"hrproyek",t:"mc",lv:2,q:"Karyawan membayar taksi kantor dengan uang pribadi. Alur Expenses yang benar:",o:["Buat Expense (Paid By: Employee) → Expense Report → disetujui manajer → Post Journal Entries → Register Payment (reimburse)","Buat Sales Order","Buat vendor bill ke taksi","Tidak perlu dicatat"],a:0,
 e:"Bila dibayar kartu perusahaan, pilih Paid By: Company sehingga tidak ada penggantian ke karyawan.",
 w:[null,"Bukan penjualan.","Karyawan yang dibayar kembali, bukan taksi.","Harus dicatat untuk akuntansi."]},
{k:"hrproyek",t:"mc",lv:2,q:"Timesheet di Odoo dicatat pada…",o:["Task/proyek (modul hr_timesheet), sehingga jam kerja bisa dipakai untuk biaya proyek dan penagihan","Produk","Gudang","Faktur pajak"],a:0,
 e:"Setiap baris timesheet adalah analytic line: jam × biaya karyawan per jam menjadi biaya proyek. Bila proyek billable, jam itu bisa ditagih.",
 w:[null,"Tidak pada produk.","Tidak pada gudang.","Tidak pada faktur pajak."]},
{k:"hrproyek",t:"mc",lv:2,q:"Service Invoicing Policy untuk produk jasa di Odoo 17 mencakup…",o:["Prepaid/Fixed Price, Based on Timesheets, Based on Milestones, Based on Delivered Quantity (Manual)","FIFO, AVCO, Standard","Pick, Pack, Ship","Lead, Opportunity"],a:0,
 e:"Pilih sesuai kontrak: harga tetap, per jam, per tahap pekerjaan (milestone), atau manual.",
 w:[null,"Itu valuasi stok.","Itu rute gudang.","Itu CRM."]},
{k:"hrproyek",t:"mc",lv:1,q:"Payroll Odoo umumnya…",o:["Aplikasi Enterprise dan perhitungannya bergantung paket lokalisasi negara (aturan gaji, pajak, BPJS)","Tersedia lengkap di Community untuk semua negara","Bagian dari aplikasi Sales","Tidak ada di Odoo"],a:0,
 e:"Untuk Indonesia, perhitungan PPh 21 dan BPJS sering membutuhkan konfigurasi atau modul tambahan. Konsultan wajib memeriksa ini saat gap analysis.",
 w:[null,"Tidak lengkap di Community.","Bukan bagian Sales.","Ada sebagai aplikasi."]},
{k:"hrproyek",t:"mc",lv:2,q:"Project ▸ Reporting ▸ Project Profitability (atau panel Profitability di proyek) menunjukkan…",o:["Pendapatan (faktur/SO) dikurangi biaya (timesheet, expenses, pembelian) per proyek","Jumlah karyawan","Daftar produk","Saldo bank"],a:0,
 e:"Dasarnya analytic account proyek. Latihan hitung margin proyek dari timesheet ada di Lab Hitung: KPI.",
 w:[null,"Tidak terkait.","Tidak terkait.","Tidak terkait."]},
{k:"hrproyek",t:"mc",lv:2,q:"Karyawan absen dengan kartu RFID di tablet pintu masuk. Fitur Odoo:",o:["Attendances dengan Kiosk Mode","Time Off","Recruitment","Appraisal"],a:0,
 e:"Kiosk mode menerima badge, PIN, atau pemilihan nama. Data check-in/check-out bisa dipakai untuk lembur dan payroll.",
 w:[null,"Time Off untuk cuti.","Recruitment untuk pelamar.","Appraisal untuk penilaian kinerja."]},
{k:"hrproyek",t:"mc",lv:1,q:"Struktur organisasi (atasan–bawahan) di Odoo Employees ditentukan oleh field…",o:["Manager (parent_id) dan Department","Pricelist","Fiscal Position","Route"],a:0,
 e:"Manager dipakai untuk alur persetujuan cuti, expenses, dan ditampilkan di Org Chart.",
 w:[null,"Itu harga.","Itu pajak.","Itu gudang."]},
{k:"hrproyek",t:"is",lv:1,q:"Aplikasi Odoo untuk mengelola lowongan dan pelamar kerja: ___",a:["recruitment","rekrutmen"],h:"Bahasa Inggris, diawali 'Recr…'.",
 e:"Recruitment: job position, applicant, stage wawancara, dan pembuatan karyawan dari pelamar yang diterima."},

// ---- BAB 14: POS & Website ----
{k:"posweb",t:"mc",lv:1,q:"Di Odoo Point of Sale, satu periode kerja kasir dari buka sampai tutup kas disebut…",o:["Session","Wave","Batch","Lot"],a:0,
 e:"Session dibuka dengan Opening Cash dan ditutup dengan menghitung uang (closing). Saat closing, Odoo memposting jurnal ringkasan penjualan.",
 w:[null,"Wave untuk picking gudang.","Batch transfer gudang.","Lot untuk pelacakan barang."]},
{k:"posweb",t:"mc",lv:2,q:"Internet kasir POS mati selama 1 jam. Yang terjadi pada Odoo POS:",o:["POS tetap bisa berjualan secara offline; pesanan disinkronkan saat koneksi kembali","Semua transaksi hilang","Kasir wajib menutup toko","Stok langsung negatif"],a:0,
 e:"POS memuat data produk di browser. Yang tidak bisa offline antara lain pembayaran terminal online tertentu dan pencarian pelanggan baru di server.",
 w:[null,"Disimpan lokal di browser.","Tidak wajib tutup.","Stok diperbarui saat sinkron."]},
{k:"posweb",t:"mc",lv:2,q:"Restoran ingin denah meja dan pesanan langsung tercetak di dapur. Konfigurasi POS:",o:["Aktifkan Is a Bar/Restaurant, atur Floors & Tables dan Kitchen Printers (preparation printers)","Gunakan aplikasi Purchase","Pakai Website","Tidak bisa"],a:0,
 e:"Mode restoran menambah fitur split bill, tips, dan pesanan per meja.",
 w:[null,"Purchase untuk pembelian.","Website untuk toko online.","Tersedia."]},
{k:"posweb",t:"mc",lv:2,q:"Pelanggan POS meminta faktur resmi. Caranya:",o:["Pilih pelanggan di POS lalu tombol Invoice sebelum validasi pembayaran","Buat Sales Order baru","Kirim foto struk","Tidak bisa dari POS"],a:0,
 e:"POS membuat faktur yang terhubung dengan pesanan POS; tanpa faktur, penjualan dicatat sebagai ringkasan sesi.",
 w:[null,"Duplikasi transaksi.","Bukan faktur resmi.","Bisa dari POS."]},
{k:"posweb",t:"mc",lv:1,q:"Pesanan dari toko online Odoo (eCommerce) masuk ke sistem sebagai…",o:["Sales Order di aplikasi Sales (dengan pembayaran dari payment provider)","Vendor Bill","Manufacturing Order","Lead saja"],a:0,
 e:"Karena itu stok, faktur, dan laporan penjualan online dan offline langsung menyatu. Keranjang yang ditinggalkan bisa dilihat sebagai Abandoned Carts.",
 w:[null,"Itu pembelian.","Itu produksi.","Pesanan bukan hanya lead."]},
{k:"posweb",t:"mc",lv:2,q:"Produk sudah ada di Odoo tetapi tidak muncul di toko online. Penyebab paling umum:",o:["Produk belum di-Publish di website (atau Can be Sold tidak dicentang)","Harga terlalu mahal","Stok terlalu banyak","Nama produk terlalu panjang"],a:0,
 e:"Tombol Unpublished/Published ada di halaman produk website dan di form produk (smart button Go to Website).",
 w:[null,"Harga tidak menyembunyikan produk.","Stok banyak tidak menyembunyikan.","Nama tidak berpengaruh."]},
{k:"posweb",t:"is",lv:1,q:"Program poin/kupon/diskon di POS dan eCommerce Odoo 17 dikelola aplikasi ___ (Promotions & Loyalty).",a:["loyalty","sale_loyalty","promotions"],h:"Kata Inggris untuk 'kesetiaan'.",
 e:"Loyalty program mengatur aturan (beli X), hadiah (diskon/produk gratis), kartu poin, dan kupon."},

// ---- BAB 15: Developer — ORM lanjut ----
{k:"ormlanjut",t:"mc",lv:1,q:"Tiga jenis model Odoo dan kegunaannya:",o:["models.Model (tersimpan permanen), TransientModel (wizard sementara), AbstractModel (kumpulan fitur untuk diwarisi, tanpa tabel)","Model, View, Controller","Sales, Purchase, Stock","Char, Integer, Float"],a:0,
 e:"Contoh TransientModel: wizard 'Create Invoice' di Sales. Contoh AbstractModel: mail.thread yang memberi chatter ke model lain.",
 w:[null,"Itu pola MVC umum.","Itu aplikasi.","Itu tipe field."]},
{k:"ormlanjut",t:"mc",lv:2,q:"Apa beda kedua bentuk pewarisan ini?",kode:"# A\nclass SaleOrder(models.Model):\n    _inherit = 'sale.order'\n\n# B\nclass Arsip(models.Model):\n    _name = 'sale.order.arsip'\n    _inherit = 'sale.order'",o:["A menambah/mengubah model sale.order yang sama; B membuat model baru yang menyalin field dan method sale.order ke tabel sendiri","Keduanya sama","A membuat tabel baru","B mengubah sale.order"],a:0,
 e:"A = extension (paling sering, misalnya menambah field). B = prototype inheritance. Ada juga _inherits (delegation) yang menyambung lewat Many2one, seperti product.product ke product.template.",
 w:[null,"Hasilnya berbeda.","A tidak membuat tabel baru.","B tidak mengubah sale.order."]},
{k:"ormlanjut",t:"mc",lv:2,q:"Field compute tanpa store=True tidak bisa…",o:["Dipakai Group By atau dicari/diurutkan langsung (kecuali diberi method search)","Ditampilkan di form","Dihitung","Dibaca Python"],a:0,
 e:"Nilai non-stored dihitung saat dibaca dan tidak ada di kolom database. Tambah store=True (dengan @api.depends yang benar) agar bisa difilter, dikelompokkan, dan cepat di laporan.",
 w:[null,"Tetap bisa tampil.","Tetap dihitung.","Tetap bisa dibaca."]},
{k:"ormlanjut",t:"mc",lv:2,q:"Output kode ini (order punya 3 baris dengan price_subtotal 100, 250, 50):",kode:"total = sum(order.order_line.mapped('price_subtotal'))\nbesar = order.order_line.filtered(lambda l: l.price_subtotal > 80)\nprint(total, len(besar))",o:["400 2","400 3","350 2","3 400"],a:0,
 e:"mapped mengambil nilai field dari setiap record → [100, 250, 50], dijumlah 400. filtered menyaring baris > 80 → 100 dan 250 → 2 record.",
 w:[null,"50 tidak lolos syarat > 80.","Jumlahnya 400.","Urutan cetaknya total dulu."]},
{k:"ormlanjut",t:"mc",lv:2,q:"Cara benar memastikan nomor NPWP pelanggan tepat 15 atau 16 digit saat disimpan:",kode:"@api.constrains('vat')\ndef _cek_npwp(self):\n    for rec in self:\n        if rec.vat and len(rec.vat) not in (15, 16):\n            raise ValidationError('NPWP harus 15/16 digit')",o:["Kode ini: @api.constrains + ValidationError, dijalankan setiap create/write yang mengubah vat","@api.onchange saja sudah cukup","Cek di laporan PDF","Tidak bisa divalidasi"],a:0,
 e:"@api.onchange hanya berjalan di form UI, sehingga data dari impor atau API lolos. Constraint berjalan di level ORM. Untuk keunikan sederhana bisa juga _sql_constraints = [('vat_uniq', 'unique(vat)', 'NPWP sudah dipakai')].",
 w:[null,"onchange tidak melindungi impor/API.","Terlambat.","Bisa."]},
{k:"ormlanjut",t:"mc",lv:3,q:"Domain ini mencari…",kode:"[('state', '=', 'sale'), '|', ('amount_total', '>', 10000000), ('partner_id.country_id.code', '!=', 'ID')]",o:["SO terkonfirmasi yang totalnya > 10 juta ATAU pelanggannya dari luar Indonesia","SO apa pun dari luar negeri","SO draft di atas 10 juta","SO terkonfirmasi di atas 10 juta DAN dari luar negeri"],a:0,
 e:"Domain memakai notasi prefix (Polish). Antar-kondisi tanpa operator otomatis AND. '|' berlaku untuk DUA kondisi setelahnya. Jadi: state = sale AND (total > 10jt OR negara ≠ ID). Titik di 'partner_id.country_id.code' menelusuri relasi.",
 w:[null,"State tetap disyaratkan.","State = sale, bukan draft.","'|' artinya OR."]},
{k:"ormlanjut",t:"mc",lv:2,q:"Method yang membuat kode berjalan dengan hak superuser (melewati access rights dan record rules):",o:["sudo()","with_context()","ensure_one()","browse()"],a:0,
 e:"Pakai sudo() hemat dan hati-hati, misalnya membaca data konfigurasi yang tidak boleh diakses pengguna biasa. Penyalahgunaan sudo() adalah celah keamanan umum di modul kustom.",
 w:[null,"with_context mengubah konteks.","ensure_one memastikan satu record.","browse mengambil record dari ID."]},
{k:"ormlanjut",t:"mc",lv:2,q:"Sejak Odoo 17, override method create disarankan memakai decorator…",kode:"@api.___\ndef create(self, vals_list):\n    for vals in vals_list:\n        vals.setdefault('note', 'baru')\n    return super().create(vals_list)",o:["model_create_multi","onchange","depends","constrains"],a:0,
 e:"create menerima list dictionary (batch) agar impor ribuan record lebih cepat. Selalu panggil super() dan kembalikan hasilnya.",
 w:[null,"onchange untuk UI.","depends untuk compute.","constrains untuk validasi."]},
{k:"ormlanjut",t:"mc",lv:2,q:"Mengambil record dari XML ID (misalnya grup Sales Manager) di kode Python:",o:["self.env.ref('sales_team.group_sale_manager')","self.env['res.groups'].search([('name','=','Manager')])","self.browse('sales_team.group_sale_manager')","Tidak bisa"],a:0,
 e:"XML ID stabil antar-database, sedangkan nama dan database ID bisa berbeda. env.ref adalah cara yang aman.",
 w:[null,"Nama bisa dobel/diterjemahkan.","browse butuh ID angka.","Bisa."]},
{k:"ormlanjut",t:"mc",lv:3,q:"Kenapa kode ini lambat untuk 10.000 pelanggan, dan perbaikannya?",kode:"for p in partners:\n    total = sum(self.env['sale.order'].search([('partner_id', '=', p.id)]).mapped('amount_total'))",o:["Satu query per pelanggan (N+1); gunakan satu read_group/_read_group yang dikelompokkan per partner_id","Python memang lambat, tidak bisa diperbaiki","Harus pakai sudo()","Tambahkan print"],a:0,
 e:"10.000 search = 10.000 query. Agregasi di database sekali: self.env['sale.order']._read_group([('partner_id','in',partners.ids)], ['partner_id'], ['amount_total:sum']). Pola N+1 adalah pertanyaan wawancara developer yang klasik.",
 w:[null,"Bisa diperbaiki.","sudo tidak mempercepat.","Tidak membantu."]},
{k:"ormlanjut",t:"mc",lv:2,q:"Field Many2one dengan ondelete='restrict' berarti…",o:["Record tujuan tidak boleh dihapus selama masih dirujuk","Record yang merujuk ikut terhapus","Nilainya dikosongkan","Tidak berpengaruh"],a:0,
 e:"Pilihan ondelete: 'set null' (default, dikosongkan), 'restrict' (tolak hapus), 'cascade' (ikut terhapus, misalnya baris SO ketika SO dihapus).",
 w:[null,"Itu cascade.","Itu set null.","Berpengaruh."]},
{k:"ormlanjut",t:"is",lv:2,q:"Method recordset yang memastikan self berisi tepat satu record (bila tidak, galat) adalah ___()",a:["ensure_one","self.ensure_one"],h:"ensure_…",
 e:"Dipakai di awal method tombol yang hanya masuk akal untuk satu record, misalnya action_confirm khusus."},
{k:"ormlanjut",t:"mc",lv:2,q:"Field related ini menampilkan…",kode:"kota_pelanggan = fields.Char(related='partner_id.city')",o:["Kota dari partner pada record ini, tanpa menulis method compute","Nama partner","Kota perusahaan","Selalu kosong"],a:0,
 e:"related adalah compute singkat yang mengikuti rantai relasi. Tambahkan store=True bila ingin bisa di-group by (dengan biaya penyimpanan dan pembaruan).",
 w:[null,"Mengambil field city.","Dari partner record ini.","Terisi bila partner punya kota."]},

// ---- BAB 16: Developer — View XML, action, QWeb ----
{k:"viewxml",t:"mc",lv:2,q:"Di Odoo 17, atribut attrs dan states di view XML…",o:["Dihapus; kondisi ditulis langsung sebagai ekspresi Python, misalnya invisible=\"state != 'draft'\"","Masih wajib","Diganti JavaScript","Hanya untuk tree view"],a:0,
 e:"Ini perubahan besar saat migrasi 16 → 17. Contoh lama: attrs=\"{'invisible': [('state','!=','draft')]}\" → baru: invisible=\"state != 'draft'\". Berlaku juga untuk readonly dan required.",
 w:[null,"Sudah dihapus.","Tetap XML.","Berlaku di semua view."]},
{k:"viewxml",t:"mc",lv:2,q:"XPath ini menyisipkan field baru…",kode:"<xpath expr=\"//field[@name='partner_id']\" position=\"after\">\n    <field name=\"nomor_po_pelanggan\"/>\n</xpath>",o:["Tepat setelah field partner_id di view induk","Menggantikan partner_id","Di dalam partner_id","Di awal form"],a:0,
 e:"position: after, before, inside (sebagai anak terakhir), replace (mengganti), attributes (mengubah atribut). View turunan memakai inherit_id ke view asli.",
 w:[null,"Itu replace.","Itu inside.","Tidak."]},
{k:"viewxml",t:"mc",lv:1,q:"Di Odoo 17, tag XML untuk list view adalah…",o:["<tree>","<list>","<table>","<grid>"],a:0,
 e:"Odoo 17 masih memakai <tree>; Odoo 18 mengganti namanya menjadi <list>. view_mode di action juga 'tree,form' pada 17.",
 w:[null,"Itu Odoo 18.","Bukan tag view Odoo.","Grid adalah view Enterprise lain."]},
{k:"viewxml",t:"mc",lv:2,q:"Record XML yang membuka list/form sebuah model ketika menu diklik:",o:["ir.actions.act_window (res_model, view_mode)","ir.cron","ir.rule","res.users"],a:0,
 e:"Menu (menuitem) menunjuk ke action. Action lain: ir.actions.server (menjalankan kode), ir.actions.report (PDF), ir.actions.client (komponen JS).",
 w:[null,"ir.cron = tugas terjadwal.","ir.rule = record rule.","Itu model pengguna."]},
{k:"viewxml",t:"mc",lv:2,q:"Di QWeb, perbedaan t-out dan t-field:",o:["t-out mencetak nilai (aman di-escape); t-field memformat field record sesuai tipenya (mata uang, tanggal) dan bisa diedit di website","Sama persis","t-field hanya untuk angka","t-out menghapus data"],a:0,
 e:"t-esc sudah usang (diganti t-out). Struktur lain: t-foreach + t-as, t-if/t-elif/t-else, t-set, t-call (misalnya web.external_layout untuk kop surat).",
 w:[null,"Berbeda.","Untuk semua tipe field.","Tidak menghapus."]},
{k:"viewxml",t:"mc",lv:2,q:"Search view (view tipe search) digunakan untuk…",o:["Mendefinisikan field yang bisa dicari, filter siap pakai, dan pilihan Group By","Mencari file di server","Membuat laporan PDF","Mengatur hak akses"],a:0,
 e:"Contoh: <filter name=\"bulan_ini\" domain=\"[('date_order','>=', ...)]\"/> dan <filter name=\"by_customer\" context=\"{'group_by': 'partner_id'}\"/>.",
 w:[null,"Bukan pencarian file.","PDF lewat report.","Akses lewat security."]},
{k:"viewxml",t:"mc",lv:2,q:"Tombol di form yang memanggil method Python 'action_approve' ditulis…",o:["<button name=\"action_approve\" type=\"object\" string=\"Approve\"/>","<button onclick=\"action_approve()\"/>","<a href=\"action_approve\"/>","<field name=\"action_approve\"/>"],a:0,
 e:"type=\"object\" memanggil method model; type=\"action\" membuka action berdasarkan XML ID (misalnya %(modul.action_wizard)d).",
 w:[null,"Odoo tidak memakai onclick di view.","Bukan tautan.","Itu field."]},
{k:"viewxml",t:"mc",lv:3,q:"Laporan PDF kustom tidak tercetak, muncul galat wkhtmltopdf. Penyebab paling mungkin di server lokal:",o:["wkhtmltopdf (versi yang didukung, 0.12.x patched qt) belum terpasang atau tidak ada di PATH","Template QWeb terlalu pendek","Model tidak punya field name","Browser memblokir pop-up"],a:0,
 e:"Odoo merender HTML lewat QWeb lalu mengubahnya ke PDF dengan wkhtmltopdf. Di Odoo lokalmu, catatan sebelumnya menyebut wkhtmltopdf belum terpasang.",
 w:[null,"Panjang template tidak masalah.","Tidak terkait PDF.","Galatnya dari server."]},
{k:"viewxml",t:"is",lv:2,q:"Atribut XPath yang mengganti seluruh elemen induk adalah position=\"___\"",a:["replace"],h:"Mengganti = …",
 e:"replace mengganti elemen; gunakan hati-hati karena modul lain yang menargetkan elemen itu bisa rusak."},
{k:"viewxml",t:"mc",lv:2,q:"Model dengan banyak record per tanggal dan status ingin dilihat seperti papan proses. View yang tepat dan syarat field-nya:",o:["Kanban dengan default_group_by pada field stage/state","Pivot tanpa group","Calendar tanpa field tanggal","Graph"],a:0,
 e:"Kanban dikelompokkan per stage, dan bila stage berupa Many2one dengan group_expand, kolom kosong tetap tampil.",
 w:[null,"Pivot untuk angka.","Calendar butuh field tanggal.","Graph untuk grafik."]},

// ---- BAB 17: Developer — keamanan, struktur modul, CLI & testing ----
{k:"keamanan",t:"mc",lv:1,q:"File wajib yang menandai folder sebagai modul Odoo dan berisi nama, versi, dependensi, dan daftar file data:",o:["__manifest__.py","setup.py","package.json","odoo.conf"],a:0,
 e:"Kunci penting: name, version, depends, data, demo, assets, license (misalnya LGPL-3), application, installable. Urutan di data penting: grup keamanan sebelum ir.model.access.csv, lalu view dan menu.",
 w:[null,"setup.py untuk paket Python.","package.json untuk Node.","odoo.conf konfigurasi server."]},
{k:"keamanan",t:"mc",lv:2,q:"Baris ir.model.access.csv ini memberi grup Sales User hak…",kode:"id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink\naccess_kursus_user,kursus user,model_akademi_kursus,sales_team.group_sale_salesman,1,1,1,0",o:["Baca, ubah, buat, tetapi tidak boleh hapus record akademi.kursus","Hanya baca","Semua hak termasuk hapus","Tidak ada hak"],a:0,
 e:"Kolom terakhir perm_unlink = 0 → tidak boleh menghapus. model_id memakai format model_ + nama model dengan titik diganti garis bawah. Model baru tanpa baris akses akan memunculkan peringatan dan tidak bisa diakses pengguna biasa.",
 w:[null,"Write dan create juga 1.","Unlink 0.","Ada tiga hak."]},
{k:"keamanan",t:"mc",lv:2,q:"Sales hanya boleh melihat pelanggannya sendiri. Mekanisme yang tepat:",o:["Record rule (ir.rule) dengan domain_force [('user_id','=',user.id)] untuk grup Sales User","ir.model.access.csv saja","Menyembunyikan menu","Field invisible"],a:0,
 e:"Access rights (CSV) mengatur model apa yang boleh diakses; record rules mengatur record MANA. Rule global (tanpa grup) membatasi semua orang dan saling AND; rule per grup saling OR.",
 w:[null,"CSV tidak menyaring per record.","Data tetap bisa dibuka lewat jalan lain.","Hanya tampilan, bukan keamanan."]},
{k:"keamanan",t:"mc",lv:2,q:"Perintah untuk meng-upgrade modul setelah mengubah file XML/Python:",o:["odoo-bin -c odoo.conf -d nama_db -u nama_modul","odoo-bin -i semua","pip install nama_modul","Restart browser"],a:0,
 e:"-i = install, -u = update. Perubahan Python butuh restart server; perubahan XML/data butuh -u. Saat pengembangan, --dev=xml memuat ulang view tanpa upgrade.",
 w:[null,"-i untuk install.","Modul Odoo bukan paket pip.","Server yang harus diperbarui."]},
{k:"keamanan",t:"mc",lv:2,q:"Kelas tes yang setiap tes-nya dijalankan dalam transaksi lalu di-rollback:",o:["TransactionCase","HttpCase","SingleTransactionCase","unittest.Mock"],a:0,
 e:"Jalankan: odoo-bin -d db_uji --test-enable --test-tags=/nama_modul -u nama_modul --stop-after-init. HttpCase untuk tes lewat browser (tour). Di Git Bash, --test-tags=/modul butuh MSYS_NO_PATHCONV=1.",
 w:[null,"HttpCase untuk tes UI.","Satu transaksi untuk seluruh kelas.","Bukan kelas tes Odoo."]},
{k:"keamanan",t:"mc",lv:1,q:"Perintah membuat kerangka modul baru otomatis:",o:["odoo-bin scaffold nama_modul folder_addons","odoo-bin new","django-admin startapp","npm init"],a:0,
 e:"scaffold membuat __init__.py, __manifest__.py, models, views, security, controllers, demo.",
 w:[null,"Tidak ada perintah new.","Itu Django.","Itu Node."]},
{k:"keamanan",t:"mc",lv:2,q:"Modul kustom tidak muncul di daftar Apps padahal foldernya sudah ada. Pemeriksaan pertama:",o:["Apakah folder induknya ada di addons_path odoo.conf, lalu Apps ▸ Update Apps List (developer mode)","Menghapus database","Install ulang PostgreSQL","Mengganti nama perusahaan"],a:0,
 e:"Penyebab lain: __manifest__.py salah sintaks, installable False, atau filter 'Apps' masih aktif (hapus filter untuk melihat modul non-aplikasi).",
 w:[null,"Berbahaya.","Tidak terkait.","Tidak terkait."]},
{k:"keamanan",t:"mc",lv:3,q:"Mengapa kustomisasi sebaiknya dibuat sebagai modul terpisah, bukan mengedit file inti Odoo?",o:["Upgrade/patch Odoo akan menimpa file inti; modul terpisah (pewarisan) tetap aman dan bisa dipindah ke versi baru","Agar lebih lambat","Odoo melarang membaca file inti","Supaya tidak perlu testing"],a:0,
 e:"Prinsip: never touch core. Ubah lewat _inherit dan xpath. Ini juga memudahkan code review dan versioning di Git.",
 w:[null,"Bukan tujuan.","File inti bisa dibaca.","Tetap perlu testing."]},
{k:"keamanan",t:"is",lv:1,q:"Nama file CSV standar untuk hak akses model adalah ir.model.access.___",a:["csv"],h:"Ekstensi file.",
 e:"Letaknya biasanya security/ir.model.access.csv dan harus dicantumkan di data manifest."},
{k:"keamanan",t:"mc",lv:2,q:"Tugas terjadwal (misalnya mengarsipkan opportunity basi setiap malam) dibuat dengan…",o:["ir.cron (Scheduled Action) yang memanggil method model","Cron Linux wajib","Activity","Automated email saja"],a:0,
 e:"Di developer mode: Settings ▸ Technical ▸ Scheduled Actions. Dalam modul, didefinisikan di XML dengan interval_number, interval_type, dan code 'model._nama_method()'.",
 w:[null,"Tidak wajib.","Activity untuk pengguna.","Email bukan eksekusi kode."]},

// ---- BAB 18: Developer — OWL, controller & integrasi ----
{k:"owl",t:"mc",lv:1,q:"Framework JavaScript frontend Odoo (sejak 14–15, dipakai penuh di 17) adalah…",o:["OWL (Odoo Web Library)","React","Angular","jQuery UI"],a:0,
 e:"OWL berbasis komponen dengan template XML (QWeb), hooks (useState, onWillStart, useService), dan reaktivitas, mirip React/Vue.",
 w:[null,"Odoo tidak memakai React.","Tidak dipakai.","Bukan framework utama."]},
{k:"owl",t:"mc",lv:2,q:"Dalam komponen OWL, cara memanggil server untuk membaca data:",kode:"setup() {\n    this.orm = useService('orm');\n    onWillStart(async () => {\n        this.data = await this.orm.searchRead('res.partner', [['customer_rank','>',0]], ['name']);\n    });\n}",o:["useService('orm') lalu searchRead di hook onWillStart","fetch ke database PostgreSQL langsung","document.querySelector","localStorage"],a:0,
 e:"Service orm membungkus JSON-RPC ke server sehingga hak akses tetap berlaku. onWillStart menunggu data sebelum komponen dirender.",
 w:[null,"Browser tidak boleh ke database langsung.","Itu manipulasi DOM.","Itu penyimpanan lokal."]},
{k:"owl",t:"mc",lv:2,q:"Agar file JS/SCSS modul dimuat di backend Odoo 17, daftarkan di manifest pada…",o:["'assets': {'web.assets_backend': ['modul/static/src/**/*']}","'data'","'depends'","odoo.conf"],a:0,
 e:"Bundle lain: web.assets_frontend (website), point_of_sale._assets_pos (POS 17), web.report_assets_common (laporan).",
 w:[null,"data untuk XML/CSV.","depends untuk modul.","Bukan di konfigurasi server."]},
{k:"owl",t:"mc",lv:2,q:"Route HTTP kustom untuk menerima webhook JSON dari marketplace:",kode:"@http.route('/api/pesanan', type='json', auth='none', methods=['POST'], csrf=False)\ndef terima(self, **kw):\n    ...",o:["Controller Python di folder controllers dengan decorator http.route","View XML","Record rule","QWeb report"],a:0,
 e:"type='http' untuk halaman/berkas, type='json' untuk JSON-RPC. auth: 'user' (wajib login), 'public' (boleh tamu), 'none' (tanpa sesi). Endpoint publik wajib divalidasi (token/tanda tangan) dan memakai sudo() seperlunya saja.",
 w:[null,"View hanya tampilan.","Record rule untuk akses data.","QWeb untuk laporan."]},
{k:"owl",t:"mc",lv:2,q:"Aplikasi Python eksternal ingin membaca daftar produk dari Odoo lewat XML-RPC. Urutan yang benar:",kode:"common = xmlrpc.client.ServerProxy(url + '/xmlrpc/2/common')\nuid = common.authenticate(db, user, api_key, {})\nmodels = xmlrpc.client.ServerProxy(url + '/xmlrpc/2/object')\nmodels.execute_kw(db, uid, api_key, 'product.product', 'search_read', [[]], {'fields': ['name'], 'limit': 5})",o:["authenticate di /common untuk mendapat uid, lalu execute_kw di /object","Langsung execute_kw tanpa uid","Masuk ke PostgreSQL","Scraping halaman web"],a:0,
 e:"Gunakan API key (Preferences ▸ Account Security) alih-alih password. Hak akses pengguna API tetap berlaku.",
 w:[null,"uid wajib.","Melewati keamanan Odoo.","Rapuh dan tidak resmi."]},
{k:"owl",t:"mc",lv:3,q:"Mengubah perilaku komponen JS bawaan Odoo tanpa menyalin seluruh kodenya:",o:["patch(Komponen.prototype, { ... }) dari @web/core/utils/patch","Mengedit file JS inti","Membuat ulang seluruh web client","Menambah CSS saja"],a:0,
 e:"patch adalah padanan _inherit di sisi JavaScript. Panggil super.method(...) agar perilaku asli tetap jalan.",
 w:[null,"Tertimpa saat upgrade.","Berlebihan.","CSS tidak mengubah perilaku."]},
{k:"owl",t:"mc",lv:2,q:"Registry di frontend Odoo (registry.category('fields'), ('actions'), ('views')) berfungsi untuk…",o:["Mendaftarkan komponen kustom (widget field, client action, view) agar bisa dipakai dari XML/action","Menyimpan password","Membuat tabel database","Mengatur cron"],a:0,
 e:"Contoh: registry.category('actions').add('dashboard_saya', DashboardSaya) lalu ir.actions.client dengan tag 'dashboard_saya'. Seperti dashboard CRM di Odoo lokalmu.",
 w:[null,"Tidak.","Tabel dibuat ORM Python.","Cron di ir.cron."]},
{k:"owl",t:"is",lv:1,q:"Hook OWL untuk membuat state reaktif (tampilan ikut berubah saat data berubah) adalah use___",a:["state","usestate"],h:"use…State",
 e:"useState({ jumlah: 0 }) — mengubah this.state.jumlah otomatis merender ulang komponen."},

// ---- BAB 19: Studi kasus konsultan ----
{k:"studikasus",t:"mc",lv:2,q:"Klien: 'Stok di Odoo selalu lebih banyak dari fisik.' Langkah investigasi pertama yang paling tepat:",o:["Bandingkan pergerakan stok (Moves History) per produk bermasalah: cari pengiriman yang tidak divalidasi, salah UoM, atau scrap yang tidak dicatat","Langsung Physical Inventory untuk menyamakan","Ganti metode valuasi","Install ulang Odoo"],a:0,
 e:"Menyamakan angka tanpa mencari penyebab hanya menunda masalah. Konsultan mencari akar masalah proses, lalu memperbaiki SOP dan konfigurasi, baru koreksi stok.",
 w:[null,"Mengobati gejala, bukan penyebab.","Tidak terkait selisih kuantitas.","Berlebihan."]},
{k:"studikasus",t:"mc",lv:2,q:"Klien minta 'tambahkan kolom diskon kedua di Sales Order'. Respons konsultan terbaik:",o:["Tanya alasan bisnisnya; mungkin cukup pricelist (diskon pertama) + kolom Disc.% (diskon kedua) tanpa kode","Langsung buat modul baru","Tolak karena tidak standar","Sarankan Excel"],a:0,
 e:"Fit-gap: cek dulu apakah kebutuhan bisa dipenuhi standar. Hitungan diskon bertingkat (bukan dijumlah) ada di Lab Hitung: Pricelist.",
 w:[null,"Belum tentu perlu kode.","Konsultan mencari solusi.","Kembali ke masalah lama."]},
{k:"studikasus",t:"mc",lv:3,q:"Setelah go-live, laporan laba bulanan tiba-tiba turun drastis karena HPP melonjak. Di gudang ada penerimaan dengan harga PO salah ketik (Rp 1.500.000 seharusnya Rp 150.000), kategori AVCO. Dampaknya:",o:["Cost rata-rata naik tajam, sehingga semua pengiriman setelahnya membawa HPP terlalu tinggi; perbaiki harga lewat koreksi valuasi/landed cost atau revaluasi, bukan hanya mengubah PO","Hanya PO itu yang salah, laporan tidak terpengaruh","FIFO otomatis memperbaiki","Tidak ada dampak karena belum dibayar"],a:0,
 e:"AVCO 'menyebarkan' harga salah ke seluruh stok. Inilah alasan pentingnya Three-way matching dan approval PO. Latihan rumus AVCO di Lab Hitung: Valuasi.",
 w:[null,"Cost rata-rata ikut berubah.","Kategorinya AVCO.","Valuasi terjadi saat penerimaan."]},
{k:"studikasus",t:"mc",lv:2,q:"Perusahaan distribusi ingin tahu produk mana yang perlu dipesan minggu depan. Solusi Odoo standar yang paling tepat:",o:["Reordering rule (Min/Max berdasarkan rata-rata keluar dan lead time) + Replenishment report","Membuat dashboard kustom dulu","Menghitung manual di Excel setiap hari","Membeli semua produk tiap minggu"],a:0,
 e:"Isi Min = permintaan harian × lead time + safety stock (lihat Lab Hitung: Reordering Rule). Laporan Replenishment menampilkan saran To Order.",
 w:[null,"Standar sudah cukup.","Menghabiskan waktu.","Pemborosan modal."]},
{k:"studikasus",t:"mc",lv:2,q:"Saat migrasi data, urutan impor master data yang benar:",o:["Chart of accounts & pajak → kontak (pelanggan/vendor) → kategori & produk → saldo awal stok dan saldo awal akuntansi → transaksi terbuka (faktur belum lunas)","Transaksi dulu, master belakangan","Produk sebelum kategori produk tidak masalah","Saldo awal sebelum chart of accounts"],a:0,
 e:"Data transaksi merujuk master data (Many2one). Kalau master belum ada, impor gagal atau membuat data dobel. Gunakan External ID agar bisa diulang.",
 w:[null,"Transaksi butuh master.","Kategori harus ada dulu.","Saldo butuh akun."]},
{k:"studikasus",t:"mc",lv:3,q:"Owner minta semua sales bisa melihat cost produk, tapi tidak boleh mengubah harga jual di Sales Order. Solusi yang paling bersih:",o:["Grup akses + view turunan yang membuat field price_unit readonly untuk grup sales (atau aturan diskon/pricelist yang dikunci), dan tampilkan cost lewat Margins","Beri semua sales hak Administrator","Sembunyikan menu Sales","Minta sales berjanji"],a:0,
 e:"Kontrol lewat sistem lebih kuat daripada SOP lisan. Field readonly berdasarkan grup bisa dibuat di view (groups=, readonly=\"...\") tanpa mengubah kode inti.",
 w:[null,"Berbahaya.","Mereka tidak bisa bekerja.","Tidak bisa diaudit."]},
{k:"studikasus",t:"mc",lv:2,q:"Dalam wawancara Odoo Functional Consultant ditanya: 'Apa yang kamu lakukan sebelum go-live?' Jawaban terkuat:",o:["Menyelesaikan UAT dengan skenario nyata, migrasi dan rekonsiliasi saldo awal, pelatihan per peran, rencana cut-over, dan dukungan pasca go-live (hypercare)","Menginstal semua modul","Mengganti logo","Langsung menyuruh pengguna mencoba sendiri"],a:0,
 e:"Rekonsiliasi saldo awal (stok, piutang, utang, kas) memastikan laporan pertama setelah go-live bisa dipercaya.",
 w:[null,"Modul berlebih menambah kebingungan.","Kosmetik.","Berisiko tinggi."]},
{k:"studikasus",t:"mc",lv:2,q:"Faktur PPN klien selisih Rp 1–3 dengan hitungan e-Faktur di beberapa faktur. Pengaturan yang perlu dicek pertama:",o:["Tax Calculation Rounding Method (Round per Line vs Round Globally) di Accounting Settings","Logo faktur","Payment term","Bahasa pengguna"],a:0,
 e:"Pembulatan per baris vs global menghasilkan selisih kecil. Contoh hitungannya ada di Lab Hitung: Pajak.",
 w:[null,"Tidak berpengaruh.","Mengatur jatuh tempo.","Tidak berpengaruh."]},
{k:"studikasus",t:"is",lv:2,q:"Analisis untuk membandingkan kebutuhan klien dengan fitur standar Odoo disebut ___ analysis.",a:["fit-gap","fit gap","gap","fitgap"],h:"Fit-…",
 e:"Fit-gap analysis: setiap kebutuhan diberi status Fit (standar), Configure, atau Gap (perlu kustomisasi atau perubahan proses)."}
);

MATERI_ERP.push(
{k:"antarmuka",judul:"Navigasi Odoo: Views, Pencarian, Import & Hak Akses",materi:`
<!--pemula--><h4>Untuk pemula: Odoo itu seperti gedung dengan banyak ruangan</h4>
<p>Setiap <b>aplikasi</b> (Sales, Inventory, Accounting) adalah ruangan. Di dalamnya ada <b>menu</b>, dan setiap menu membuka daftar data (record). Satu record dibuka di <b>form</b>. Semua ruangan memakai gudang data yang sama (PostgreSQL), sehingga pesanan di Sales langsung terlihat di Inventory.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>record</td><td>satu baris data: satu pelanggan, satu faktur</td></tr>
<tr><td>view</td><td>cara menampilkan record: list, form, kanban, pivot, graph, calendar, activity</td></tr>
<tr><td>chatter</td><td>panel riwayat di kanan/bawah form: pesan, catatan, aktivitas, lampiran</td></tr>
<tr><td>archive</td><td>menyembunyikan record tanpa menghapus</td></tr></table><!--/pemula-->
<h4>Views dan kapan dipakai</h4>
<table class="mini-pivot"><tr><th>View</th><th>Dipakai untuk</th></tr>
<tr><td>List</td><td>banyak baris, edit cepat, ekspor</td></tr>
<tr><td>Form</td><td>satu record lengkap dengan tombol aksi</td></tr>
<tr><td>Kanban</td><td>proses bertahap (pipeline, task, MO)</td></tr>
<tr><td>Pivot / Graph</td><td>analisis angka (seperti PivotTable Excel)</td></tr>
<tr><td>Calendar / Activity</td><td>jadwal dan tindak lanjut</td></tr></table>
<h4>Pencarian</h4>
<p>Kotak pencarian menggabungkan <b>Filters</b> (menyaring), <b>Group By</b> (mengelompokkan), dan <b>Favorites</b> (menyimpan kombinasi, bisa dibagikan). Filter berbeda di satu grup saling OR; filter di grup berbeda saling AND.</p>
<h4>Chatter dan Activities</h4>
<p><b>Send message</b> dikirim ke followers (bisa termasuk pelanggan). <b>Log note</b> internal saja. <b>Activity</b> = tugas lanjutan dengan tenggat (hijau mendatang, oranye hari ini, merah terlambat).</p>
<h4>Import/Export data</h4>
<ol><li>Ekspor beberapa record sebagai template (centang "I want to update data (import-compatible export)").</li><li>Isi Excel/CSV sesuai kolom.</li><li>Import ▸ cocokkan kolom ▸ <b>Test</b> ▸ Import.</li><li>Gunakan kolom External ID (id) agar impor ulang memperbarui, bukan menggandakan.</li></ol>
<h4>Pengguna, hak akses, multi-company</h4>
<p>Settings ▸ Users &amp; Companies. Tiap aplikasi punya tingkat akses (misalnya Sales: Own Documents Only / All Documents / Administrator). Multi-company: satu database, data dipisah per company_id.</p>
<h4>Developer mode</h4>
<p>Settings ▸ Activate the developer mode, atau <code>?debug=1</code> di URL. Tooltip field menampilkan nama teknis dan model, berguna untuk menulis spesifikasi.</p>
<div class="praktik"><b>Coba sendiri:</b> di Odoo lokalmu buka Sales ▸ Orders, buat Favorites "Pesanan bulan ini per pelanggan" (filter tanggal + Group By Customer), lalu ekspor hasilnya ke Excel.</div>
`},
{k:"crmlanjut",judul:"CRM Lanjut: Lead, Opportunity, Tim & Lead Scoring",materi:`
<!--pemula--><h4>Untuk pemula: dari kenalan menjadi pelanggan</h4>
<p>Bayangkan corong (funnel): di atas banyak <b>lead</b> (orang yang menunjukkan minat), di tengah <b>opportunity</b> (yang benar-benar sedang bernegosiasi), di bawah <b>won</b> (jadi membeli). CRM membantu tim tidak kehilangan satu pun calon pembeli.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>lead</td><td>calon yang belum dikualifikasi</td></tr>
<tr><td>opportunity</td><td>calon yang layak dikejar, punya nilai dan peluang</td></tr>
<tr><td>stage</td><td>tahap di pipeline: New, Qualified, Proposition, Won</td></tr>
<tr><td>lost reason</td><td>alasan kalah, untuk analisis</td></tr>
<tr><td>sales team</td><td>kelompok sales dengan target dan alias email sendiri</td></tr></table><!--/pemula-->
<h4>Alur CRM di Odoo 17</h4>
<pre><code>Sumber lead: formulir website, alias email, impor, input manual
Lead → (kualifikasi) → Convert to Opportunity → stage demi stage
     → New Quotation (Sales) → konfirmasi → Won
     → atau Lost + Lost Reason</code></pre>
<h4>Fitur penting</h4>
<ul><li><b>Leads</b> (aktifkan di Settings) memisahkan lead dan opportunity.</li>
<li><b>Predictive Lead Scoring</b>: probability dihitung model naive Bayes dari data won/lost lama. Variabel wajib Stage dan Team; opsional State, Country, Phone/Email Quality, Source, Language, Tags. Mengubah probability manual menghentikan pembaruan otomatis untuk opp itu.</li>
<li><b>Rule-based Assignment</b>: lead dibagi otomatis ke tim/anggota berdasarkan domain (misalnya Country = Indonesia, Probability ≥ 20), manual atau berkala.</li>
<li><b>Merge</b>: menggabungkan lead/opportunity duplikat.</li>
<li><b>Email alias</b> per Sales Team: email masuk menjadi lead.</li>
<li><b>Activities</b> dan laporan Activities untuk mengukur disiplin follow-up.</li></ul>
<h4>Metrik yang sering ditanya</h4>
<p>Expected Revenue, Probability, Prorated Revenue (= expected × probability), win rate, siklus penjualan (hari dari dibuat sampai won). Hitungannya ada di bab Lab Hitung: CRM Pipeline.</p>
<div class="catatan">⚠️ Pipeline yang tidak dibersihkan (opportunity lama tidak pernah di-Lost) membuat forecast terlalu optimis. Buat kebiasaan review mingguan.</div>
<div class="praktik"><b>Coba sendiri:</b> buat 5 opportunity dengan nilai dan probability berbeda, tandai satu Lost dengan alasan "Too expensive", lalu buka CRM ▸ Reporting ▸ Pipeline dengan ukuran Prorated Revenue.</div>
`},
{k:"saleslanjut",judul:"Sales Lanjut: Template, Kebijakan Faktur, DP & Jasa",materi:`
<!--pemula--><h4>Untuk pemula: dari penawaran sampai tagihan</h4>
<p>Penjualan tidak selalu "bayar lalu ambil barang". Ada yang bayar uang muka, ada yang ditagih setelah barang dikirim sebagian, ada jasa yang ditagih per jam. Odoo mengatur semua itu dengan pengaturan yang tepat, tanpa kode.</p><!--/pemula-->
<h4>Siklus dokumen</h4>
<pre><code>Quotation → Quotation Sent → Sales Order → Delivery (Inventory) → Invoice (Accounting) → Payment</code></pre>
<h4>Fitur yang wajib dikuasai</h4>
<table class="mini-pivot"><tr><th>Fitur</th><th>Fungsi</th></tr>
<tr><td>Quotation Templates</td><td>penawaran standar: produk, Optional Products (upsell), masa berlaku, syarat</td></tr>
<tr><td>Online Signature / Payment</td><td>pelanggan menyetujui atau membayar lewat portal</td></tr>
<tr><td>Pricelists</td><td>harga per pelanggan/negara/jumlah; dipasang di kontak</td></tr>
<tr><td>Invoicing Policy</td><td>Ordered quantities (tagih sesuai pesanan) vs Delivered quantities (sesuai kiriman)</td></tr>
<tr><td>Down Payment</td><td>faktur uang muka % atau nominal; dikurangkan di faktur akhir</td></tr>
<tr><td>Margins</td><td>laba per baris = harga − cost</td></tr>
<tr><td>Lock Confirmed Sales</td><td>SO terkonfirmasi tidak bisa diubah lagi</td></tr></table>
<h4>Contoh Invoicing Policy</h4>
<pre><code>Pesan 10, terkirim 6
Ordered quantities   → bisa ditagih 10
Delivered quantities → bisa ditagih 6 (sisa 4 ditagih setelah dikirim)</code></pre>
<h4>Menjual jasa</h4>
<p>Produk Service dengan Service Invoicing Policy: Prepaid/Fixed Price, Based on Timesheets, Based on Milestones, atau manual. Create on Order bisa membuat Task atau Project otomatis (modul sale_timesheet).</p>
<div class="catatan">⚠️ Mengubah delivery order tanpa mengubah Sales Order membuat pesanan, kiriman, dan faktur tidak sinkron. Ubah dari dokumen sumbernya.</div>
<div class="praktik"><b>Coba sendiri:</b> buat quotation 10 unit produk Delivered quantities, kirim 6, lalu Create Invoice dan lihat kuantitasnya. Ulangi dengan Down payment 30%.</div>
`},
{k:"belilanjut",judul:"Purchase Lanjut: Vendor Pricelist, Kontrol Tagihan & Persetujuan",materi:`
<!--pemula--><h4>Untuk pemula: membeli dengan aman</h4>
<p>Bagian pembelian harus memastikan tiga hal: membeli dari vendor yang tepat dengan harga yang disepakati, hanya membayar barang yang benar-benar datang, dan pembelian besar disetujui atasan.</p><!--/pemula-->
<h4>Siklus dokumen</h4>
<pre><code>RFQ → RFQ Sent → Purchase Order (To Approve bila perlu persetujuan) → Receipt → Vendor Bill → Payment</code></pre>
<h4>Vendor pricelist (tab Purchase di produk)</h4>
<p>Berisi vendor, Min. Quantity, harga, mata uang, dan Delivery Lead Time. Odoo memilih baris vendor yang cocok saat membuat RFQ otomatis dari reordering rule.</p>
<h4>Kontrol tagihan</h4>
<table class="mini-pivot"><tr><th>Bill Control</th><th>Contoh PO 100, diterima 70</th></tr>
<tr><td>Ordered quantities</td><td>bill boleh 100 (bayar di muka, jasa)</td></tr>
<tr><td>Received quantities</td><td>bill hanya 70</td></tr></table>
<p><b>Three-way matching</b>: PO = Receipt = Bill sebelum boleh dibayar.</p>
<h4>Purchase Agreements</h4>
<ul><li><b>Blanket Order</b>: kontrak harga tetap jangka panjang, PO dibuat bertahap.</li>
<li><b>Call for Tenders / Alternatives</b>: beberapa RFQ untuk kebutuhan sama, dibandingkan per baris, pilih yang terbaik.</li></ul>
<h4>Persetujuan PO</h4>
<p>Purchase ▸ Settings ▸ Purchase Order Approval dengan Minimum Amount. Kebutuhan bertingkat atau alasan penolakan → modul kustom (contoh nyata: modul purchase_amount_approval milikmu).</p>
<h4>Penerimaan sebagian</h4>
<p>Validasi sebagian memunculkan pilihan Create Backorder (sisa ditunggu) atau No Backorder (sisa dibatalkan).</p>
<div class="praktik"><b>Coba sendiri:</b> aktifkan Purchase Order Approval 10.000.000, buat PO 12.000.000 dengan pengguna non-manajer, dan lihat statusnya "To Approve".</div>
`},
{k:"gudang",judul:"Gudang, Lokasi & Rute: Multi-step, Dropship, Lot & Serial",materi:`
<!--pemula--><h4>Untuk pemula: setiap barang pindah pasti tercatat</h4>
<p>Odoo mencatat stok seperti akuntansi mencatat uang: setiap pergerakan punya <b>asal</b> dan <b>tujuan</b>. Barang dari vendor bergerak dari lokasi "Vendors" ke "WH/Stock"; barang ke pelanggan dari "WH/Stock" ke "Customers". Lokasi Vendors dan Customers bukan tempat nyata, melainkan <b>lokasi virtual</b>.</p>
<table class="mini-pivot"><tr><th>Tipe lokasi</th><th>Contoh</th></tr>
<tr><td>View</td><td>WH (induk, tidak menyimpan barang)</td></tr>
<tr><td>Internal</td><td>WH/Stock, WH/Stock/Rak A</td></tr>
<tr><td>Partner</td><td>Partners/Vendors, Partners/Customers</td></tr>
<tr><td>Virtual</td><td>Inventory adjustment, Scrap, Production</td></tr>
<tr><td>Transit</td><td>barang di perjalanan antar-gudang/company</td></tr></table><!--/pemula-->
<h4>Tipe produk (perhatikan versi!)</h4>
<p>Odoo 17: Storable Product (stok dihitung), Consumable, Service. Odoo 18: Goods/Service/Combo + centang Track Inventory.</p>
<h4>Rute multi-langkah (aktifkan Storage Locations + Multi-Step Routes)</h4>
<table class="mini-pivot"><tr><th>Arah</th><th>1 step</th><th>2 steps</th><th>3 steps</th></tr>
<tr><td>Masuk</td><td>langsung ke Stock</td><td>Input → Stock</td><td>Input → Quality → Stock</td></tr>
<tr><td>Keluar</td><td>langsung kirim</td><td>Pick → Ship</td><td>Pick → Pack → Ship</td></tr></table>
<h4>Route penting</h4>
<ul><li><b>Buy</b> / <b>Manufacture</b>: cara barang diisi ulang.</li>
<li><b>Replenish on Order (MTO)</b>: setiap SO memicu PO/MO sendiri. Diarsipkan default; unarchive dulu.</li>
<li><b>Dropship</b>: vendor kirim langsung ke pelanggan, stok gudang tidak berubah.</li></ul>
<h4>Pelacakan dan strategi</h4>
<p>Tracking: By Unique Serial Number (per unit), By Lots (per kelompok), atau tidak dilacak. Removal Strategy: FIFO, LIFO, FEFO (butuh tanggal kedaluwarsa), Closest Location, Least Packages. Putaway Rules mengarahkan barang masuk ke rak tertentu.</p>
<h4>Koreksi stok</h4>
<p>Inventory ▸ Operations ▸ Physical Inventory ▸ isi Counted Quantity ▸ Apply. Pergerakan dibuat ke/dari Virtual Locations/Inventory adjustment sehingga ada jejak audit.</p>
<div class="catatan">⚠️ Jangan memperbaiki stok dengan mengedit angka sembarangan. Setiap koreksi harus punya pergerakan dan alasan.</div>
<div class="praktik"><b>Coba sendiri:</b> ubah gudang lokalmu ke pengiriman 2 steps, buat SO, lalu lihat dua transfer (Pick dan Delivery) yang tercipta.</div>
`},
{k:"mrpkonsep",judul:"Manufaktur: BoM, Work Center, MO, By-product & Subkontrak",materi:`
<!--pemula--><h4>Untuk pemula: pabrik roti mini</h4>
<p>Resep roti = <b>BoM</b>. Oven dan meja adon = <b>work center</b>. Perintah "buat 200 roti hari ini" = <b>Manufacturing Order (MO)</b>. Langkah membuat (mengadon, memanggang) = <b>operasi/work order</b>.</p><!--/pemula-->
<h4>Tipe BoM</h4>
<table class="mini-pivot"><tr><th>Tipe</th><th>Arti</th></tr>
<tr><td>Manufacture this product</td><td>diproduksi lewat MO</td></tr>
<tr><td>Kit</td><td>paket; komponen diambil saat dikirim/dipakai, kit tidak punya stok</td></tr>
<tr><td>Subcontracting</td><td>diproduksi vendor (subcontractor), komponen dikirim ke mereka</td></tr></table>
<h4>Status MO</h4>
<pre><code>Draft → Confirmed (komponen dicadangkan) → In Progress → To Close → Done
Done: komponen keluar ke Virtual Locations/Production, produk jadi masuk Stock</code></pre>
<h4>Fitur pendukung</h4>
<ul><li><b>Work Orders</b> (Settings): operasi per work center dengan durasi dan biaya.</li>
<li><b>By-Products</b>: hasil sampingan (ampas, potongan kain).</li>
<li><b>Unbuild</b>: membongkar produk jadi ke komponen; <b>Scrap</b>: membuang.</li>
<li><b>Manufacturing Readiness</b>: MO mulai bila semua komponen siap atau hanya untuk operasi pertama.</li>
<li>Enterprise: PLM (versi BoM + ECO), Quality, Maintenance, MPS (Master Production Schedule).</li></ul>
<h4>Pemicu produksi</h4>
<p>Make to Stock: reordering rule dengan route Manufacture. Make to Order: route Manufacture + MTO, setiap SO memicu MO.</p>
<p>Semua hitungan (kebutuhan komponen, durasi work order, biaya MO, yield, OEE) ada di bab Lab Hitung: Manufaktur.</p>
<div class="praktik"><b>Coba sendiri:</b> aktifkan Manufacturing, buat BoM "Roti (10 pcs)" dengan 2 kg tepung, lalu MO 35 roti dan cek kebutuhan tepungnya 7 kg.</div>
`},
{k:"akunodoo",judul:"Akuntansi di Odoo: CoA, Jurnal, Rekonsiliasi & Fiscal Position",materi:`
<!--pemula--><h4>Untuk pemula: Odoo menulis jurnal untukmu</h4>
<p>Di Odoo, pengguna jarang menulis jurnal manual. Faktur, vendor bill, pembayaran, dan pergerakan stok otomatis menjadi jurnal. Tugas konsultan adalah memastikan akun, pajak, dan jurnalnya dipetakan dengan benar sejak awal.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>Chart of Accounts (CoA)</td><td>daftar akun; tiap akun punya tipe (Receivable, Payable, Bank and Cash, Current Assets, Income, Expenses, Equity, dll.)</td></tr>
<tr><td>Journal</td><td>buku tempat jurnal dicatat: Sales, Purchase, Bank, Cash, Miscellaneous</td></tr>
<tr><td>Posted</td><td>jurnal/faktur sudah sah, tidak bisa diedit bebas</td></tr>
<tr><td>Lock date</td><td>tanggal sebelum itu tidak boleh diubah</td></tr></table><!--/pemula-->
<h4>Community vs Enterprise</h4>
<p>Community memasang <b>Invoicing</b> (faktur, bill, pembayaran). Laporan keuangan dinamis, rekonsiliasi lanjutan, aset, dan budget ada di <b>Accounting Enterprise</b>; di Community sering diganti modul pihak ketiga.</p>
<h4>Alur status faktur</h4>
<pre><code>Draft → Posted → (pembayaran dicatat) In Payment → (direkonsiliasi dengan bank) Paid
Salah? → Add Credit Note (Reverse) atau Reset to Draft (bila belum terkunci)</code></pre>
<h4>Fiscal Position</h4>
<p>Memetakan pajak dan akun berdasarkan pelanggan: 11% → 0% untuk ekspor, akun pendapatan lokal → pendapatan ekspor. Bisa Detect Automatically berdasarkan negara.</p>
<h4>Rekonsiliasi bank</h4>
<p>Mutasi bank (impor file atau sinkronisasi) dicocokkan dengan pembayaran/faktur. Reconciliation Models mengotomasi pencocokan (misalnya biaya admin bank).</p>
<h4>Analytic accounting</h4>
<p>Dimensi tambahan (proyek, cabang, departemen) tanpa menambah akun. Odoo 17 memakai Analytic Plans dan distribusi persen per baris.</p>
<h4>Laporan inti</h4>
<p>Balance Sheet, Profit and Loss, General Ledger, Trial Balance, Aged Receivable/Payable, Tax Report. Jurnal tiap dokumen dan hitungannya dilatih di Lab Hitung: Jurnal dan Termin.</p>
<div class="praktik"><b>Coba sendiri:</b> buat faktur 10.000.000 + PPN, catat pembayaran, lihat status In Payment, lalu pelajari akun Outstanding Receipts di Journal Items.</div>
`},
{k:"hrproyek",judul:"SDM, Proyek & Timesheet, Expenses",materi:`
<!--pemula--><h4>Untuk pemula: orang dan waktu juga sumber daya</h4>
<p>ERP tidak hanya soal barang dan uang. Data karyawan, cuti, absensi, jam kerja proyek, dan penggantian biaya juga dicatat agar biaya tenaga kerja terlihat jelas.</p><!--/pemula-->
<table class="mini-pivot"><tr><th>Aplikasi</th><th>Isi utama</th></tr>
<tr><td>Employees</td><td>data karyawan, Department, Job Position, Manager, Org Chart, biaya per jam</td></tr>
<tr><td>Time Off</td><td>tipe cuti, Allocation, Request, Accrual Plan, persetujuan</td></tr>
<tr><td>Attendances</td><td>check-in/out, Kiosk Mode, lembur</td></tr>
<tr><td>Recruitment</td><td>lowongan, pelamar, tahap wawancara</td></tr>
<tr><td>Project &amp; Timesheets</td><td>task, stage, jam kerja per task</td></tr>
<tr><td>Expenses</td><td>klaim biaya karyawan → laporan → setuju → jurnal → reimburse</td></tr>
<tr><td>Payroll (Enterprise)</td><td>slip gaji, aturan bergantung lokalisasi</td></tr></table>
<h4>Proyek yang ditagih</h4>
<pre><code>Produk jasa (Service Invoicing Policy: Based on Timesheets, Create on Order: Project & Task)
→ SO dikonfirmasi → proyek/task otomatis
→ karyawan mengisi timesheet → jam masuk kolom Delivered di SO
→ Create Invoice → ditagih sesuai jam</code></pre>
<p>Profitability proyek = pendapatan − (timesheet × biaya per jam + expenses + pembelian). Latihan angka di Lab Hitung: KPI.</p>
<h4>Expenses</h4>
<p>Paid By Employee → perlu reimburse; Paid By Company → tidak ada penggantian (kartu perusahaan).</p>
<div class="catatan">⚠️ Untuk Indonesia, PPh 21 dan BPJS sangat spesifik. Saat gap analysis, pastikan apakah payroll di Odoo atau tetap di sistem HR lain yang diintegrasikan.</div>
<div class="praktik"><b>Coba sendiri:</b> pasang Project dan Timesheets, buat proyek, isi 5 jam timesheet di sebuah task, dan lihat analytic line yang muncul.</div>
`},
{k:"posweb",judul:"Point of Sale & Website/eCommerce",materi:`
<!--pemula--><h4>Untuk pemula: kasir dan toko online di sistem yang sama</h4>
<p>Toko punya kasir fisik dan toko online. Kalau keduanya terpisah, stok cepat kacau. Di Odoo, <b>POS</b> dan <b>eCommerce</b> memakai produk, stok, harga, dan laporan yang sama.</p><!--/pemula-->
<h4>Point of Sale</h4>
<ul><li><b>Session</b>: buka (Opening Cash) → jualan → tutup (hitung uang, Difference dicatat) → jurnal ringkasan diposting.</li>
<li><b>Payment methods</b>: tunai, kartu/EDC, transfer, Customer Account.</li>
<li><b>Offline</b>: POS tetap jalan, sinkron saat online.</li>
<li><b>Restoran</b>: Floors &amp; Tables, Kitchen/Preparation Printers, split bill, tips.</li>
<li>Faktur dari POS: pilih pelanggan lalu tombol Invoice.</li>
<li>POS memakai pricelist, fiscal position, dan program Loyalty.</li></ul>
<h4>Website &amp; eCommerce</h4>
<ul><li>Pesanan online menjadi <b>Sales Order</b>, pembayaran lewat payment provider, pengiriman lewat shipping method.</li>
<li>Produk harus <b>Published</b> dan Can be Sold.</li>
<li>Abandoned Carts untuk mengingatkan pembeli yang belum checkout.</li></ul>
<p>Hitungan selisih kas POS ada di Lab Hitung: KPI.</p>
<div class="praktik"><b>Coba sendiri:</b> buka sesi POS dengan kas awal 500.000, jual tunai 3 produk, tutup sesi dengan hitungan uang yang sengaja selisih 2.000, lalu lihat jurnal selisihnya.</div>
`},
{k:"ormlanjut",judul:"Developer Odoo: ORM Lanjut (Recordset, Compute, Constraint, Domain)",materi:`
<!--pemula--><h4>Untuk pemula: ORM = penerjemah Python ke SQL</h4>
<p>Developer Odoo hampir tidak pernah menulis SQL. Mereka menulis kelas Python (model), dan ORM (<i>Object-Relational Mapping</i>) membuat tabel serta query PostgreSQL. Lanjutan dari bab Python "Python untuk Odoo".</p><!--/pemula-->
<h4>Jenis model dan pewarisan</h4>
<pre><code>models.Model          tabel permanen (sale.order)
models.TransientModel wizard sementara, dibersihkan otomatis
models.AbstractModel  fitur untuk diwarisi (mail.thread) tanpa tabel

_inherit = 'sale.order'                    → extension: ubah model yang sama
_name = 'baru' + _inherit = 'sale.order'   → prototype: salin ke model baru
_inherits = {'product.template': 'product_tmpl_id'} → delegation</code></pre>
<h4>Field dan atribut</h4>
<p>Char, Text, Html, Integer, Float, Monetary (currency_field), Boolean, Date, Datetime, Selection, Binary, Many2one (ondelete: set null / restrict / cascade), One2many (comodel, inverse), Many2many. Atribut: string, required, readonly, default, index, copy, tracking, groups, compute, store, related.</p>
<h4>Recordset</h4>
<pre><code>orders.mapped('amount_total')                 → list nilai
orders.filtered(lambda o: o.amount_total > 1e6)
orders.sorted('date_order', reverse=True)
order.ensure_one()
self.env['res.partner'].search(domain, limit=10, order='name')
self.env.ref('xml_id'), self.env.user, self.env.company
records.sudo() / with_context(lang='id_ID') / with_company(c)</code></pre>
<h4>Decorator</h4>
<table class="mini-pivot"><tr><th>Decorator</th><th>Kapan</th></tr>
<tr><td>@api.depends</td><td>field compute dihitung ulang bila field ini berubah</td></tr>
<tr><td>@api.constrains</td><td>validasi saat create/write (berlaku juga untuk impor & API)</td></tr>
<tr><td>@api.onchange</td><td>reaksi di form UI saja</td></tr>
<tr><td>@api.model_create_multi</td><td>override create batch (vals_list)</td></tr></table>
<h4>Domain (notasi prefix)</h4>
<pre><code>[('state','=','sale'), '|', ('amount_total','>',10e6), ('partner_id.country_id.code','!=','ID')]
= state = sale AND (total > 10 jt OR negara ≠ ID)
Operator: = != > >= < <= in, not in, like, ilike, =like, child_of, parent_of</code></pre>
<h4>Performa</h4>
<p>Hindari query di dalam loop (N+1). Gunakan agregasi <code>_read_group</code>, prefetch recordset, dan store=True untuk field yang sering difilter.</p>
<div class="praktik"><b>Coba sendiri:</b> di <code>odoo-bin shell -d db_uji</code>, jalankan <code>env['sale.order'].search([('state','=','sale')]).mapped('amount_total')</code> lalu hitung totalnya dengan sum. Jangan di database produksi.</div>
`},
{k:"viewxml",judul:"Developer Odoo: View XML, Action, Menu, Inheritance & QWeb",materi:`
<!--pemula--><h4>Untuk pemula: XML adalah denah tampilan</h4>
<p>Python mengatur data dan logika; <b>XML</b> mengatur tampilan (form, list, menu) dan data awal. Untuk mengubah tampilan bawaan, developer tidak mengedit file asli, tetapi membuat view turunan yang "menyisipkan" perubahan dengan XPath.</p><!--/pemula-->
<h4>Struktur record view</h4>
<pre><code>&lt;record id="view_order_form_inherit_po" model="ir.ui.view"&gt;
  &lt;field name="name"&gt;sale.order.form.po&lt;/field&gt;
  &lt;field name="model"&gt;sale.order&lt;/field&gt;
  &lt;field name="inherit_id" ref="sale.view_order_form"/&gt;
  &lt;field name="arch" type="xml"&gt;
    &lt;xpath expr="//field[@name='partner_id']" position="after"&gt;
      &lt;field name="nomor_po_pelanggan" invisible="state == 'cancel'"/&gt;
    &lt;/xpath&gt;
  &lt;/field&gt;
&lt;/record&gt;</code></pre>
<p>position: <b>after, before, inside, replace, attributes</b>.</p>
<h4>Perubahan penting Odoo 17</h4>
<ul><li><code>attrs</code> dan <code>states</code> dihapus: tulis <code>invisible="state != 'draft'"</code>, <code>readonly="..."</code>, <code>required="..."</code>.</li>
<li>List view masih <code>&lt;tree&gt;</code> (Odoo 18: <code>&lt;list&gt;</code>), view_mode "tree,form".</li></ul>
<h4>Action dan menu</h4>
<table class="mini-pivot"><tr><th>Model</th><th>Fungsi</th></tr>
<tr><td>ir.actions.act_window</td><td>membuka view model (res_model, view_mode, domain, context)</td></tr>
<tr><td>ir.actions.server</td><td>menjalankan kode Python</td></tr>
<tr><td>ir.actions.report</td><td>laporan PDF/HTML (QWeb)</td></tr>
<tr><td>ir.actions.client</td><td>komponen JavaScript (dashboard)</td></tr>
<tr><td>ir.cron</td><td>tugas terjadwal</td></tr></table>
<p>Tombol: <code>&lt;button name="action_approve" type="object"/&gt;</code> memanggil method Python.</p>
<h4>QWeb (template laporan dan website)</h4>
<pre><code>t-foreach="docs" t-as="o"   perulangan
t-if / t-elif / t-else      kondisi
t-out="o.name"               cetak aman (t-esc sudah usang)
t-field="o.amount_total"     cetak dengan format field (mata uang)
t-call="web.external_layout" kop surat perusahaan</code></pre>
<p>PDF dibuat oleh <b>wkhtmltopdf</b>; tanpa itu laporan PDF gagal.</p>
<div class="praktik"><b>Coba sendiri:</b> dalam modul latihan, tambahkan field "Nomor PO Pelanggan" ke Sales Order dan tampilkan setelah pelanggan, hanya terlihat bila status bukan cancel.</div>
`},
{k:"keamanan",judul:"Developer Odoo: Keamanan, Struktur Modul, CLI & Testing",materi:`
<!--pemula--><h4>Untuk pemula: modul = paket kustomisasi</h4>
<p>Semua kustomisasi Odoo dikemas dalam <b>modul</b>: satu folder berisi Python, XML, CSV, dan aset. Modul bisa dipasang, di-upgrade, dan dilepas tanpa menyentuh kode inti Odoo.</p><!--/pemula-->
<h4>Struktur modul</h4>
<pre><code>akademi/
├── __init__.py            from . import models, controllers
├── __manifest__.py        name, version, depends, data, assets, license
├── models/kursus.py
├── views/kursus_views.xml
├── security/
│   ├── security.xml       grup & record rules
│   └── ir.model.access.csv
├── data/ , demo/ , report/
├── static/src/            js, xml, scss (OWL)
├── controllers/main.py
└── tests/test_kursus.py</code></pre>
<p>Urutan <code>data</code> di manifest penting: grup → access CSV → view → menu.</p>
<h4>Dua lapis keamanan</h4>
<table class="mini-pivot"><tr><th>Lapis</th><th>Pertanyaan</th><th>Tempat</th></tr>
<tr><td>Access rights</td><td>model mana boleh dibaca/ditulis/dibuat/dihapus?</td><td>ir.model.access.csv</td></tr>
<tr><td>Record rules</td><td>record MANA yang boleh?</td><td>ir.rule (domain_force)</td></tr>
<tr><td>Field groups</td><td>field mana terlihat?</td><td>atribut groups= di field/view</td></tr></table>
<p>Rule global saling AND, rule per grup saling OR. sudo() melewati semuanya; gunakan seperlunya.</p>
<h4>Perintah penting</h4>
<pre><code>odoo-bin scaffold akademi addons_custom
odoo-bin -c odoo.conf -d db -i akademi           # install
odoo-bin -c odoo.conf -d db -u akademi           # upgrade
odoo-bin -c odoo.conf -d db --dev=xml            # muat ulang view saat develop
odoo-bin shell -c odoo.conf -d db                # konsol Python
odoo-bin -d db_uji -u akademi --test-enable --test-tags=/akademi --stop-after-init</code></pre>
<h4>Testing</h4>
<p><code>TransactionCase</code> (rollback per tes), <code>HttpCase</code> (tour browser), decorator <code>@tagged('post_install', '-at_install')</code>. Selalu uji di database salinan.</p>
<div class="catatan">⚠️ Prinsip "never touch core": ubah lewat _inherit, XPath, dan patch JS. Mengedit file inti akan hilang saat upgrade.</div>
`},
{k:"owl",judul:"Developer Odoo: OWL, Controller & Integrasi API",materi:`
<!--pemula--><h4>Untuk pemula: tampilan interaktif dan pintu masuk dari luar</h4>
<p>Bagian yang dilihat di browser dibuat dengan <b>OWL</b> (komponen JavaScript). Sistem lain (marketplace, aplikasi mobile, Python eksternal) berbicara dengan Odoo lewat <b>controller HTTP</b> atau <b>API XML-RPC/JSON-RPC</b>.</p><!--/pemula-->
<h4>Komponen OWL minimal</h4>
<pre><code>/** @odoo-module **/
import { Component, useState, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

class DashboardSaya extends Component {
    static template = "akademi.DashboardSaya";
    setup() {
        this.orm = useService("orm");
        this.state = useState({ jumlah: 0 });
        onWillStart(async () => {
            this.state.jumlah = await this.orm.searchCount("res.partner", []);
        });
    }
}
registry.category("actions").add("dashboard_saya", DashboardSaya);</code></pre>
<p>Daftarkan di manifest: <code>'assets': {'web.assets_backend': ['akademi/static/src/**/*']}</code>, lalu buat ir.actions.client dengan tag <code>dashboard_saya</code>. Mengubah komponen bawaan: <code>patch(Komponen.prototype, {...})</code>.</p>
<h4>Controller HTTP</h4>
<pre><code>from odoo import http
from odoo.http import request

class Api(http.Controller):
    @http.route('/api/kursus', type='json', auth='user')
    def daftar(self):
        return request.env['akademi.kursus'].search_read([], ['name'])</code></pre>
<p>auth: user / public / none. Endpoint publik wajib divalidasi token.</p>
<h4>XML-RPC dari luar</h4>
<pre><code>/xmlrpc/2/common  → authenticate(db, login, api_key, {}) → uid
/xmlrpc/2/object  → execute_kw(db, uid, api_key, model, method, args, kwargs)</code></pre>
<p>Pakai API key (Preferences ▸ Account Security). Hak akses pengguna tetap berlaku.</p>
<div class="praktik"><b>Coba sendiri:</b> dari Python di laptopmu, sambungkan ke Odoo lokal dengan XML-RPC dan cetak 5 nama produk pertama.</div>
`},
{k:"studikasus",judul:"Studi Kasus Konsultan Odoo: Diagnosis & Keputusan",materi:`
<!--pemula--><h4>Untuk pemula: konsultan adalah dokter proses bisnis</h4>
<p>Klien datang dengan keluhan ("stok selalu selisih", "laba tiba-tiba turun"). Konsultan tidak langsung mengobati gejala, tetapi mencari penyebab di proses, konfigurasi, atau data, lalu memilih solusi termurah yang tahan lama.</p><!--/pemula-->
<h4>Kerangka berpikir 5 langkah</h4>
<ol><li><b>Pahami kebutuhan bisnis</b>: tanya "kenapa?" sampai ketemu tujuan sebenarnya.</li>
<li><b>Fit-gap</b>: Fit (standar), Configure (pengaturan), Gap (kustom atau ubah proses).</li>
<li><b>Pilih solusi termurah</b>: konfigurasi → modul yang ada → kode kustom terakhir.</li>
<li><b>Uji dengan skenario nyata</b> (UAT) dan angka yang dihitung manual.</li>
<li><b>Dokumentasi dan pelatihan</b> per peran.</li></ol>
<h4>Pola masalah yang sering muncul</h4>
<table class="mini-pivot"><tr><th>Gejala</th><th>Tempat mencari</th></tr>
<tr><td>Stok sistem ≠ fisik</td><td>Moves History, transfer belum divalidasi, salah UoM, scrap tidak dicatat</td></tr>
<tr><td>HPP melonjak</td><td>harga penerimaan salah (AVCO menyebarkannya), landed cost salah</td></tr>
<tr><td>Faktur selisih 1–3 rupiah</td><td>Rounding Method pajak, cash rounding</td></tr>
<tr><td>Harga jual aneh</td><td>urutan aturan pricelist, Min. Quantity, pembulatan</td></tr>
<tr><td>RFQ otomatis berlebihan</td><td>Min/Max, Multiple Quantity, forecast negatif, lead time</td></tr>
<tr><td>Pengguna melihat data orang lain</td><td>grup akses dan record rules</td></tr></table>
<h4>Migrasi data</h4>
<p>CoA &amp; pajak → kontak → kategori &amp; produk → saldo awal stok dan akuntansi → transaksi terbuka. Gunakan External ID dan rekonsiliasi saldo setelah impor.</p>
<h4>Go-live</h4>
<p>UAT selesai dan ditandatangani, saldo awal cocok, pelatihan per peran, rencana cut-over (tanggal stop sistem lama), dan hypercare 2–4 minggu.</p>
<div class="praktik"><b>Latihan wawancara:</b> ceritakan proyek magangmu memakai kerangka 5 langkah di atas: masalah, fit-gap, solusi, pengujian, hasil (pakai angka bila ada).</div>
`}
);

// ---- Tambahan agar tiap bab konsep ≥ 12 soal (konsepnya ada di materi bab yang sama) ----
SOAL_ERP.push(
{k:"crmlanjut",t:"mc",lv:1,q:"Sumber lead berikut bisa masuk otomatis ke Odoo CRM, KECUALI…",o:["Obrolan tatap muka yang tidak dicatat siapa pun","Formulir kontak website","Email ke alias Sales Team","File impor daftar peserta pameran"],a:0,
 e:"Lead otomatis datang dari formulir website, alias email, dan impor. Percakapan langsung tetap harus diinput manual oleh sales.",
 w:[null,"Formulir website membuat lead.","Alias email membuat lead.","Impor membuat lead massal."]},
{k:"crmlanjut",t:"mc",lv:2,q:"Pipeline berisi banyak opportunity lama yang sebenarnya sudah tidak aktif. Dampaknya pada laporan:",o:["Forecast (prorated revenue) terlalu optimis; bersihkan dengan menandai Lost secara berkala","Tidak ada dampak","Faktur jadi salah","Stok berkurang"],a:0,
 e:"Review pipeline mingguan menjaga forecast tetap realistis.",
 w:[null,"Forecast ikut menghitungnya.","Tidak terkait faktur.","Tidak terkait stok."]},
{k:"saleslanjut",t:"mc",lv:2,q:"Optional Products pada quotation template berguna untuk…",o:["Menawarkan produk tambahan (upsell) yang bisa ditambahkan sendiri oleh pelanggan di portal","Menghapus produk wajib","Mengatur pajak","Membuat PO"],a:0,
 e:"Pelanggan melihat bagian Optional Products di portal dan bisa menambahkannya ke pesanan dengan satu klik.",
 w:[null,"Produk wajib tetap ada.","Pajak diatur terpisah.","PO dari Purchase."]},
{k:"saleslanjut",t:"mc",lv:2,q:"Pengaturan 'Lock Confirmed Sales' membuat…",o:["Sales Order yang sudah dikonfirmasi terkunci dan tidak bisa diubah lagi","Quotation tidak bisa dikirim","Faktur tidak bisa dibuat","Pelanggan tidak bisa membayar"],a:0,
 e:"Cocok untuk perusahaan yang ingin perubahan pesanan melalui dokumen baru agar jejaknya jelas.",
 w:[null,"Quotation tetap bisa dikirim.","Faktur tetap bisa.","Pembayaran tetap bisa."]},
{k:"belilanjut",t:"mc",lv:2,q:"Bill Control 'Ordered quantities' paling cocok untuk…",o:["Pembelian jasa atau pembayaran di muka, ketika tagihan boleh dicatat sebelum barang/jasa diterima","Barang stok yang harus diperiksa dulu","Semua pembelian tanpa kecuali","Retur barang"],a:0,
 e:"Untuk barang stok, Received quantities lebih aman karena mencegah membayar barang yang belum datang.",
 w:[null,"Barang stok lebih cocok Received quantities.","Tidak untuk semua.","Retur memakai credit note vendor."]},
{k:"belilanjut",t:"mc",lv:1,q:"Delivery Lead Time di baris vendor pada tab Purchase produk berarti…",o:["Jumlah hari dari PO dikonfirmasi sampai barang diterima","Lama pembayaran","Masa garansi","Umur produk"],a:0,
 e:"Lead time vendor dipakai Odoo untuk menghitung tanggal forecast reordering rule dan jadwal penerimaan.",
 w:[null,"Itu payment term.","Tidak terkait.","Tidak terkait."]},
{k:"mrpkonsep",t:"mc",lv:2,q:"Saat MO ditandai Done, ke mana komponen bergerak?",o:["Dari WH/Stock ke lokasi virtual Production; produk jadi bergerak dari Production ke WH/Stock","Ke Partners/Customers","Ke Scrap","Tidak bergerak"],a:0,
 e:"Lokasi virtual Production menjadi 'tempat' bahan diubah menjadi produk jadi, sehingga setiap pergerakan tetap tercatat ganda.",
 w:[null,"Itu pengiriman ke pelanggan.","Itu barang dibuang.","Selalu ada pergerakan."]},
{k:"mrpkonsep",t:"mc",lv:2,q:"Pabrik memproduksi untuk stok setiap kali persediaan produk jadi di bawah batas. Pemicu yang dipakai:",o:["Reordering rule dengan route Manufacture (make to stock)","MTO pada setiap Sales Order","Dropship","Subcontracting"],a:0,
 e:"Reordering rule + Manufacture membuat MO otomatis saat forecast di bawah Min.",
 w:[null,"MTO memproduksi per pesanan.","Dropship tanpa produksi.","Subcontracting oleh pihak luar."]},
{k:"akunodoo",t:"mc",lv:2,q:"Lock date di Accounting berfungsi untuk…",o:["Mencegah perubahan jurnal pada periode yang sudah ditutup","Mengunci akun bank","Menghapus faktur lama","Mengatur kurs"],a:0,
 e:"Setelah laporan bulanan diserahkan, lock date menjaga angka periode itu tidak berubah diam-diam.",
 w:[null,"Bukan untuk bank.","Tidak menghapus.","Tidak terkait kurs."]},
{k:"akunodoo",t:"mc",lv:2,q:"Reconciliation Model di Odoo berguna untuk…",o:["Mengotomasi pencocokan mutasi bank yang berulang, misalnya biaya admin bank bulanan","Membuat chart of accounts","Menghitung gaji","Mengirim email"],a:0,
 e:"Aturan bisa mencocokkan berdasarkan teks label, nominal, atau partner, dan langsung membuat baris jurnal biaya.",
 w:[null,"CoA dibuat terpisah.","Itu payroll.","Tidak terkait email."]},
{k:"hrproyek",t:"mc",lv:2,q:"Accrual Plan di Time Off berfungsi untuk…",o:["Menambah jatah cuti karyawan secara bertahap, misalnya 1 hari setiap bulan bekerja","Menghapus cuti lama","Menghitung gaji","Mencatat absensi"],a:0,
 e:"Alternatifnya Allocation sekaligus (misalnya 12 hari di awal tahun).",
 w:[null,"Tidak menghapus.","Itu payroll.","Itu Attendances."]},
{k:"hrproyek",t:"mc",lv:1,q:"Expense yang dibayar dengan kartu kredit perusahaan dicatat dengan Paid By…",o:["Company","Employee","Customer","Vendor"],a:0,
 e:"Paid By Company tidak membuat utang penggantian ke karyawan.",
 w:[null,"Itu bila memakai uang pribadi.","Tidak ada pilihan itu.","Tidak ada pilihan itu."]},
{k:"hrproyek",t:"mc",lv:2,q:"Biaya per jam karyawan yang dipakai untuk menghitung biaya timesheet diisi di…",o:["Form karyawan (Employees), tab HR Settings","Form produk","Pricelist","Payment term"],a:0,
 e:"Jam timesheet × biaya per jam = biaya tenaga kerja proyek.",
 w:[null,"Bukan produk.","Bukan harga jual.","Bukan jatuh tempo."]},
{k:"posweb",t:"mc",lv:2,q:"Kapan jurnal akuntansi penjualan POS diposting?",o:["Saat sesi ditutup, dalam bentuk ringkasan per sesi (kecuali pesanan yang dibuatkan faktur)","Setiap kali produk dipindai","Sebulan sekali otomatis","Tidak pernah"],a:0,
 e:"Ringkasan per sesi membuat jurnal tidak membengkak oleh ribuan transaksi kecil.",
 w:[null,"Bukan per pindaian.","Bukan bulanan.","Selalu diposting."]},
{k:"posweb",t:"mc",lv:1,q:"Metode pembayaran POS 'Customer Account' berarti…",o:["Pembayaran dicatat sebagai piutang pelanggan (bayar nanti)","Uang tunai","Kartu debit","Voucher gratis"],a:0,
 e:"Pelanggan harus dipilih; piutangnya muncul di Accounting dan ditagih kemudian.",
 w:[null,"Tunai memakai Cash.","Kartu memakai Bank.","Bukan voucher."]},
{k:"posweb",t:"mc",lv:2,q:"Harga berbeda untuk member di kasir POS diatur dengan…",o:["Pricelist yang diizinkan di POS (dan dipilih otomatis dari pelanggan)","Mengubah Sales Price setiap hari","Membuat produk kembar","Tidak bisa"],a:0,
 e:"POS memakai pricelist dan fiscal position yang sama dengan Sales.",
 w:[null,"Merepotkan.","Stok terpecah.","Bisa."]},
{k:"posweb",t:"mc",lv:2,q:"Pembeli online menaruh barang di keranjang lalu pergi tanpa membayar. Fitur eCommerce Odoo untuk menindaklanjuti:",o:["Abandoned Carts (bisa dikirim email pengingat)","Lost Reason","Backorder","Scrap"],a:0,
 e:"Keranjang yang ditinggal adalah Sales Order draft dari website.",
 w:[null,"Itu CRM.","Itu gudang.","Itu barang dibuang."]},
{k:"posweb",t:"is",lv:1,q:"Uang kas yang dihitung kasir saat membuka sesi POS disebut Opening ___",a:["cash","kas"],h:"Bahasa Inggris untuk uang tunai.",
 e:"Opening Cash menjadi dasar perhitungan kas yang seharusnya ada saat sesi ditutup."},
{k:"viewxml",t:"mc",lv:2,q:"Tag QWeb untuk memanggil kop surat standar perusahaan di laporan PDF:",o:["<t t-call=\"web.external_layout\">","<t t-foreach=\"web.external_layout\">","<header>","<t t-out=\"layout\">"],a:0,
 e:"external_layout menambahkan logo, alamat perusahaan, dan nomor halaman sesuai Document Layout di Settings.",
 w:[null,"t-foreach untuk perulangan.","Bukan tag QWeb kop.","t-out mencetak nilai."]},
{k:"viewxml",t:"mc",lv:2,q:"Action server (ir.actions.server) dipakai untuk…",o:["Menjalankan kode Python atau aksi otomatis dari menu Action atau automasi","Membuka form saja","Mencetak PDF","Menyimpan gambar"],a:0,
 e:"Contoh: aksi 'Tandai semua terpilih sebagai prioritas' di menu Action pada list view.",
 w:[null,"Itu act_window.","Itu actions.report.","Tidak."]},
{k:"keamanan",t:"mc",lv:2,q:"Opsi --dev=xml saat menjalankan odoo-bin berguna untuk…",o:["Memuat ulang perubahan view XML tanpa upgrade modul saat pengembangan","Menghapus database","Memasang modul baru","Mempercepat produksi"],a:0,
 e:"Hanya untuk pengembangan; di server produksi tetap gunakan -u setelah mengubah XML.",
 w:[null,"Tidak menghapus.","Install memakai -i.","Bukan untuk produksi."]},
{k:"keamanan",t:"mc",lv:3,q:"Dua record rule global (tanpa grup) berlaku untuk model yang sama. Cara keduanya digabung:",o:["AND: record harus lolos kedua rule","OR: cukup lolos salah satu","Rule kedua diabaikan","Rule pertama diabaikan"],a:0,
 e:"Rule global saling AND (membatasi semua orang). Rule per grup saling OR (memperluas akses), lalu hasilnya di-AND dengan rule global.",
 w:[null,"OR berlaku untuk rule per grup.","Keduanya berlaku.","Keduanya berlaku."]},
{k:"owl",t:"mc",lv:2,q:"Hook onWillStart di komponen OWL dipakai untuk…",o:["Memuat data asinkron sebelum komponen pertama kali dirender","Menghapus komponen","Mengatur CSS","Membuat model Python"],a:0,
 e:"Contoh: membaca jumlah pelanggan dengan this.orm.searchCount sebelum tampilan muncul.",
 w:[null,"Itu onWillDestroy.","CSS lewat SCSS.","Model dibuat di Python."]},
{k:"owl",t:"mc",lv:2,q:"Pada route @http.route, auth='public' berarti…",o:["Bisa diakses tamu tanpa login (memakai pengguna publik), atau pengguna yang sedang login","Hanya admin","Tanpa sesi sama sekali","Wajib API key"],a:0,
 e:"auth='user' wajib login; auth='none' tanpa sesi dan tanpa pengguna (biasanya untuk webhook, dengan validasi sendiri).",
 w:[null,"Tidak.","Itu auth='none'.","Tidak wajib."]},
{k:"owl",t:"mc",lv:2,q:"Sebaiknya aplikasi eksternal login ke XML-RPC Odoo memakai…",o:["API key milik pengguna khusus integrasi dengan hak akses secukupnya","Password admin utama","Akun pribadi direktur","Akses langsung PostgreSQL"],a:0,
 e:"API key bisa dicabut tanpa mengganti password, dan pengguna khusus integrasi membatasi kerusakan bila bocor.",
 w:[null,"Terlalu berisiko.","Tidak aman.","Melewati keamanan Odoo."]},
{k:"owl",t:"mc",lv:2,q:"Tag ir.actions.client 'dashboard_saya' terhubung ke komponen OWL melalui…",o:["registry.category('actions').add('dashboard_saya', Komponen)","Nama file JS","Nama model Python","Menu XML saja"],a:0,
 e:"Registry adalah tempat web client mencari komponen berdasarkan tag.",
 w:[null,"Nama file tidak dipakai.","Bukan model.","Menu menunjuk ke action, bukan komponen."]},
{k:"studikasus",t:"mc",lv:2,q:"RFQ otomatis dari reordering rule terlalu sering dan jumlahnya kecil-kecil. Pengaturan yang perlu ditinjau:",o:["Jarak Max − Min (misalnya memakai EOQ) dan Multiple Quantity sesuai kemasan vendor","Logo perusahaan","Bahasa pengguna","Fiscal position"],a:0,
 e:"Jarak Min–Max yang sempit membuat pesanan kecil berulang. EOQ membantu menentukan jumlah pesanan yang ekonomis.",
 w:[null,"Tidak berpengaruh.","Tidak berpengaruh.","Untuk pajak."]},
{k:"studikasus",t:"mc",lv:2,q:"Sales bisa melihat faktur semua sales lain padahal seharusnya hanya miliknya. Yang pertama diperiksa:",o:["Tingkat akses aplikasi pengguna (All Documents vs Own Documents Only) dan record rules terkait","Harga produk","Gudang","Payment term"],a:0,
 e:"Hak akses diatur di Settings ▸ Users, tab Access Rights; batas per record diatur record rules.",
 w:[null,"Tidak terkait.","Tidak terkait.","Tidak terkait."]},
{k:"studikasus",t:"mc",lv:3,q:"Harga jual di quotation tiba-tiba berakhiran 000 padahal seharusnya 900. Kemungkinan penyebab di pricelist:",o:["Extra Fee −100 hilang atau aturan lain (Min. Quantity lebih besar) yang terpakai","PPN salah","Stok habis","Bahasa pengguna"],a:0,
 e:"Urutan formula: diskon → pembulatan → Extra Fee → margin. Periksa aturan mana yang terpakai dengan melihat Min. Quantity dan urutan aturan.",
 w:[null,"Harga sebelum pajak tidak dipengaruhi PPN.","Stok tidak memengaruhi harga.","Tidak berpengaruh."]}
);
