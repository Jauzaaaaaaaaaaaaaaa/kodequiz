// ============ Materi 2x lipat (bagian 5): ERP & Odoo (31 bab) ============
// Format: studi kasus terpandu — skenario, langkah di Odoo, kesalahan umum, latihan, kunci.
(function () {
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const li = a => a.map(x => `<li>${x}</li>`).join("");
  const E = (k, judul, skenario, langkah, salah, latihan, kunci, kode) => {
    const b = MATERI_ERP.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k);
    b.materi += '<h4 class="pelengkap">Studi kasus terpandu &amp; kunci</h4>' +
      `<h4>Kasus: ${judul}</h4><p>${skenario}</p>` +
      (kode ? `<pre><code>${esc(kode)}</code></pre>` : "") +
      `<h4>Langkah demi langkah</h4><ol>${li(langkah)}</ol>` +
      `<h4>Kesalahan yang sering terjadi</h4><ul>${li(salah)}</ul>` +
      `<h4>Latihan mandiri</h4><ol>${li(latihan)}</ol>` +
      `<details class="kunci-latihan"><summary>Lihat kunci jawaban (coba dulu sendiri)</summary><ol>${li(kunci)}</ol></details>`;
  };

  E("erp", "toko bangunan yang datanya tersebar di Excel",
    "Toko bangunan di Batam punya 3 cabang. Penjualan dicatat di Excel kasir, stok di buku gudang, dan utang pemasok di catatan admin. Pemilik tidak tahu stok semen sebenarnya dan sering kehabisan barang laris.",
    ["Petakan proses: penjualan kasir, pembelian ke pemasok, mutasi stok antar-cabang, penagihan dan pembayaran.", "Pilih aplikasi Odoo yang sesuai: Sales/POS, Purchase, Inventory, Invoicing/Accounting.", "Satu database dengan multi-gudang (satu warehouse per cabang), satu daftar produk dan satu daftar kontak.", "Tetapkan data master dulu: produk, satuan, harga, pemasok, pelanggan, akun.", "Migrasi saldo awal (stok dan piutang/utang) pada tanggal potong yang disepakati."],
    ["Langsung memasang semua aplikasi sekaligus sehingga pengguna kewalahan.", "Membuat produk ganda karena tiap cabang mengetik sendiri.", "Tidak menentukan tanggal potong saldo awal, angka stok dan keuangan tidak cocok."],
    ["Sebutkan tiga manfaat utama ERP untuk pemilik toko ini.", "Aplikasi Odoo apa yang dipakai bila toko juga menjual lewat situs?", "Data master apa yang harus dibersihkan sebelum migrasi?"],
    ["Satu sumber data stok real-time, laporan keuangan otomatis dari transaksi, dan pembelian terencana dari reordering rule.", "Website dan eCommerce, terhubung ke Sales dan Inventory yang sama.", "Produk (kode unik, satuan, harga), kontak pelanggan/pemasok (tanpa duplikat), dan saldo awal stok serta piutang/utang."]);

  E("sales", "alur lead-to-cash satu pesanan kantor",
    "PT Sinar memesan 10 kursi kantor dari situs. Tim sales harus mengubahnya menjadi penawaran, pesanan, pengiriman, faktur, dan pembayaran tanpa input ulang.",
    ["CRM: lead masuk dari formulir web, sales mengubahnya menjadi opportunity.", "Buat Quotation dari opportunity: produk Kursi Kantor × 10, harga dari pricelist.", "Kirim penawaran lewat email; pelanggan menyetujui → Confirm menjadi Sales Order.", "Inventory membuat Delivery Order otomatis; gudang memvalidasi setelah barang dikirim.", "Buat Invoice dari Sales Order (berdasarkan jumlah terkirim), lalu Register Payment saat uang masuk."],
    ["Membuat faktur manual di Accounting sehingga tidak terhubung ke pesanan.", "Mengubah harga di faktur, bukan di pesanan, sehingga laporan penjualan tidak cocok.", "Lupa validasi pengiriman sehingga faktur 'berdasarkan terkirim' tidak bisa dibuat."],
    ["Dokumen apa yang dibuat otomatis setelah Confirm?", "Di mana melihat apakah pesanan sudah dibayar?", "Pelanggan minta 2 kursi dikirim minggu depan. Apa yang terjadi di pengiriman?"],
    ["Delivery Order (bila produk storable) dan aktivitas penagihan sesuai kebijakan faktur.", "Di Sales Order ada smart button Invoices; status pembayaran terlihat di faktur (Paid/In Payment).", "Validasi 8 kursi, pilih buat backorder; sisa 2 kursi menjadi pengiriman terpisah."]);

  E("stok", "procure-to-pay untuk barang yang hampir habis",
    "Stok kabel NYM tinggal 15 roll padahal minimum 20. Admin pembelian harus memesan ke pemasok, menerima barang, mencocokkan tagihan, dan membayar.",
    ["Buat RFQ (Request for Quotation) ke pemasok, misalnya 50 roll.", "Pemasok setuju → Confirm Order menjadi Purchase Order.", "Saat barang datang, gudang membuka Receipt dan memvalidasi jumlah yang diterima.", "Tagihan pemasok: Create Bill dari PO, cocokkan jumlah dan harga.", "Bayar tagihan lewat Register Payment sesuai jatuh tempo."],
    ["Menerima barang tanpa PO sehingga tidak ada pembanding harga.", "Validasi receipt 50 padahal datang 45 (stok jadi salah).", "Tagihan dibuat dari nol sehingga kontrol tiga arah (PO-penerimaan-tagihan) hilang."],
    ["Apa itu three-way match?", "Barang datang 45 dari 50. Apa yang dilakukan?", "Bagaimana agar RFQ dibuat otomatis saat stok di bawah 20?"],
    ["Mencocokkan Purchase Order, penerimaan barang, dan tagihan pemasok sebelum membayar.", "Ubah jumlah done menjadi 45 lalu buat backorder untuk 5 sisanya (atau tanpa backorder bila pemasok tidak mengirim lagi).", "Buat Reordering Rule: min 20, max misalnya 80, rute Buy; scheduler membuat RFQ otomatis."]);

  E("akuntansi", "jurnal dari satu penjualan dan pembayarannya",
    "Toko menjual barang Rp 1.000.000 + PPN 11%, harga pokok Rp 600.000. Pelanggan membayar seminggu kemudian. Konsultan harus bisa menjelaskan jurnal yang dibuat Odoo.",
    ["Faktur divalidasi: Piutang (D) 1.110.000; Pendapatan (K) 1.000.000; PPN Keluaran (K) 110.000.", "Pengiriman divalidasi (perpetual): HPP (D) 600.000; Persediaan (K) 600.000.", "Pembayaran diterima: Bank (D) 1.110.000; Piutang (K) 1.110.000.", "Cek Neraca Saldo: total debit = total kredit."],
    ["Mencatat PPN sebagai pendapatan.", "Mengira pembayaran menambah pendapatan lagi (padahal hanya memindahkan piutang ke bank).", "Lupa bahwa HPP hanya otomatis bila valuasi persediaan diatur automated."],
    ["Pelanggan membayar Rp 1.000.000 saja. Berapa sisa piutang?", "Akun apa yang bertambah saat membeli barang dagangan secara kredit?", "Kenapa laba kotor penjualan ini Rp 400.000?"],
    ["Rp 110.000; faktur berstatus Partial.", "Persediaan (atau akun stok sementara) di debit dan Utang Usaha di kredit.", "Pendapatan 1.000.000 dikurangi HPP 600.000; PPN bukan pendapatan."]);

  E("implementasi", "rencana implementasi 10 minggu",
    "Perusahaan distribusi 40 karyawan ingin memakai Sales, Purchase, Inventory, dan Accounting. Anda menjadi konsultan junior yang menyusun rencana.",
    ["Analisis (minggu 1–2): wawancara per divisi, gambar alur proses, kumpulkan contoh dokumen.", "Desain & konfigurasi (minggu 3–5): pasang modul, atur gudang, pajak, pricelist, hak akses.", "Migrasi data (minggu 5–6): template import produk, kontak, saldo awal.", "Pelatihan & UAT (minggu 7–8): pengguna kunci mencoba skenario nyata, catat temuan.", "Go-live & hypercare (minggu 9–10): tanggal potong, dukungan harian, evaluasi."],
    ["Mengkustomisasi sebelum mencoba fitur standar.", "Tidak menunjuk key user per divisi.", "Go-live di akhir bulan fiskal tanpa saldo awal yang siap."],
    ["Apa itu UAT dan siapa yang melakukannya?", "Kenapa fit-gap analysis penting?", "Dokumen apa yang menjadi bukti kebutuhan disepakati?"],
    ["User Acceptance Test; dilakukan pengguna kunci dengan skenario bisnis mereka sendiri untuk menyatakan sistem siap.", "Memisahkan kebutuhan yang dipenuhi fitur standar (fit) dan yang butuh konfigurasi/pengembangan (gap) sehingga biaya dan waktu jelas.", "Business Requirement Document atau daftar fit-gap yang ditandatangani klien."]);

  E("antarmuka", "mencari, mengelompokkan, dan mengimpor data",
    "Manajer sales minta daftar pesanan bulan ini yang belum difaktur, dikelompokkan per salesperson. Admin juga perlu mengimpor 300 produk dari Excel.",
    ["Buka Sales → Orders, pakai filter 'To Invoice' dan filter tanggal bulan ini.", "Group By → Salesperson; simpan sebagai Favorite agar bisa dipakai ulang.", "Ganti ke Pivot atau Graph view untuk total per orang.", "Untuk import: Favorites → Import records, unduh template, isi Excel, Test lalu Import.", "Pastikan kolom kategori dan satuan memakai nama yang sudah ada di Odoo."],
    ["Mengimpor tanpa tombol Test sehingga ratusan baris gagal.", "Kolom External ID dikosongkan lalu import ulang membuat produk ganda.", "Memberi semua pengguna grup Administrator agar 'tidak repot'."],
    ["Bagaimana memperbarui harga 300 produk yang sudah ada lewat import?", "Apa beda Filter dan Group By?", "Bagaimana membatasi staf gudang tidak melihat menu Accounting?"],
    ["Export dulu dengan kolom ID (External ID), ubah harga di file, lalu import kembali; Odoo memperbarui record yang ID-nya sama.", "Filter menyaring baris yang tampil; Group By mengelompokkan baris yang tersaring.", "Di pengaturan pengguna, kosongkan hak akses Accounting dan beri hanya Inventory: User."]);

  E("crmlanjut", "mengelola pipeline tim sales",
    "Tim sales punya 120 opportunity. Banyak yang terlantar tanpa aktivitas dan manajer tidak tahu prioritas.",
    ["Atur tahap pipeline: Baru → Kualifikasi → Proposal → Negosiasi → Won.", "Wajibkan Expected Revenue dan Probability di setiap opportunity.", "Jadwalkan Activity (telepon, email, rapat) dengan tenggat; pakai filter 'Late Activities'.", "Aktifkan Lead Scoring berdasarkan negara, sumber, dan ukuran perusahaan; tugaskan otomatis ke tim.", "Tandai Lost dengan alasan agar bisa dianalisis."],
    ["Menghapus opportunity yang gagal (data analisis hilang).", "Probability diisi asal sehingga forecast tidak bermakna.", "Satu tahap 'Proses' untuk semua sehingga tidak terlihat macetnya di mana."],
    ["Bagaimana melihat forecast pendapatan bulan depan?", "Apa fungsi Lost Reason?", "Opportunity sama masuk dua kali dari web. Apa yang dilakukan?"],
    ["Pipeline → Forecast view, atau pivot Expected Revenue × Probability per tanggal tutup.", "Mengetahui pola kegagalan (harga, pesaing, waktu) untuk perbaikan strategi.", "Pakai fitur Merge pada dua opportunity tersebut."]);

  E("saleslanjut", "proyek jasa dengan uang muka 30%",
    "Perusahaan menjual paket instalasi jaringan Rp 50 juta. Pelanggan membayar DP 30%, sisanya setelah pekerjaan selesai.",
    ["Buat Quotation Template 'Instalasi Jaringan' berisi produk jasa dan syarat.", "Confirm Sales Order, lalu Create Invoice → Down payment (percentage) 30%.", "Validasi faktur DP Rp 15 juta (ditambah pajak bila ada) dan catat pembayarannya.", "Setelah selesai, Create Invoice → Regular invoice; Odoo otomatis mengurangkan DP.", "Pastikan kebijakan faktur jasa: berdasarkan jumlah dipesan atau terkirim (milestone/timesheet)."],
    ["Membuat faktur DP sebagai produk biasa sehingga tidak terpotong di faktur akhir.", "Kebijakan faktur 'delivered' untuk jasa tanpa mengisi jumlah terkirim sehingga tidak ada yang bisa difaktur.", "Lupa menyalin syarat pembayaran ke template."],
    ["Berapa tagihan akhir sebelum pajak?", "Kapan memilih kebijakan faktur berdasarkan timesheet?", "Bagaimana memberi opsi tambahan (upsell) di penawaran?"],
    ["Rp 35 juta (50 juta dikurangi DP 15 juta).", "Untuk jasa yang ditagih per jam kerja yang dicatat karyawan.", "Tambahkan Optional Products di template agar pelanggan bisa memilih saat melihat penawaran online."]);

  E("belilanjut", "membandingkan harga pemasok dan menyetujui pembelian besar",
    "Bagian pembelian punya dua pemasok laptop dengan harga dan waktu kirim berbeda. Pembelian di atas Rp 50 juta harus disetujui manajer.",
    ["Isi Vendor Pricelist di produk: pemasok A Rp 9,5 jt (7 hari), pemasok B Rp 9,8 jt (2 hari), lengkap dengan jumlah minimum.", "Aktifkan Purchase → Settings → Order Approval dengan batas Rp 50 juta.", "Buat RFQ; Odoo mengambil harga sesuai pemasok dan jumlah.", "PO di atas batas berstatus 'To Approve' sampai manajer menyetujui.", "Atur Bill Control: berdasarkan jumlah diterima agar tidak membayar barang yang belum datang."],
    ["Harga pemasok tidak diisi sehingga setiap RFQ diketik manual.", "Bill control 'ordered' untuk pemasok yang sering mengirim sebagian.", "Pengguna pembelian juga diberi hak Manager sehingga persetujuan tidak berarti."],
    ["Butuh 3 unit besok. Pemasok mana yang dipilih?", "PO Rp 48 juta perlu persetujuan?", "Bagaimana membandingkan dua penawaran pemasok untuk barang sama?"],
    ["Pemasok B karena lead time 2 hari, walau sedikit lebih mahal.", "Tidak, karena di bawah batas Rp 50 juta.", "Buat dua RFQ lalu pakai fitur Alternatives (Purchase Agreements) untuk membandingkan dan memilih satu."]);

  E("gudang", "gudang 2 langkah dan barang ber-nomor seri",
    "Distributor elektronik ingin barang masuk diperiksa dulu di area QC sebelum disimpan, dan setiap TV dilacak nomor serinya.",
    ["Aktifkan Storage Locations dan Multi-Step Routes di Inventory Settings.", "Pada Warehouse, ubah Incoming Shipments menjadi 2 steps (Input → Stock).", "Aktifkan Lots & Serial Numbers; pada produk TV pilih Tracking: By Unique Serial Number.", "Saat Receipt, isi nomor seri setiap unit; lalu validasi transfer Input → Stock setelah QC.", "Lacak riwayat satu TV lewat Traceability report."],
    ["Mengaktifkan 3 langkah untuk gudang kecil sehingga pekerjaan berlipat.", "Tracking by Lots untuk barang yang perlu garansi per unit.", "Lupa memvalidasi langkah kedua sehingga stok tertahan di lokasi Input."],
    ["Apa beda lot dan serial?", "Pengiriman 3 langkah terdiri dari apa?", "Kapan memakai dropship?"],
    ["Lot untuk sekelompok barang (satu nomor banyak unit, misalnya batch obat); serial unik per unit.", "Pick (ambil dari rak) → Pack (kemas) → Output/Ship (kirim).", "Saat pemasok mengirim langsung ke pelanggan tanpa barang masuk gudang sendiri."]);

  E("mrpkonsep", "memproduksi meja dari Bill of Materials",
    "Bengkel mebel membuat meja: 1 papan atas, 4 kaki, 16 sekrup. Perakitan 30 menit di work center Perakitan.",
    ["Buat produk Meja dengan rute Manufacture; komponen papan, kaki, sekrup.", "Buat BoM: Meja × 1 = papan 1, kaki 4, sekrup 16; tambahkan operasi Rakit 30 menit di work center.", "Buat Manufacturing Order 5 meja; Odoo menghitung kebutuhan 20 kaki dan 80 sekrup.", "Check Availability; bila komponen kurang, reordering rule atau MTO membuat pembelian.", "Mulai work order, catat waktu, lalu Produce All; stok komponen berkurang dan stok meja bertambah."],
    ["BoM dibuat untuk varian salah sehingga MO tidak menemukan BoM.", "Komponen tidak berstatus storable sehingga stok tidak berkurang.", "Mengabaikan sisa produksi (by-product) yang bernilai."],
    ["Berapa sekrup untuk 12 meja?", "Apa itu Kit BoM?", "Kapan memakai subkontrak?"],
    ["12 × 16 = 192 sekrup.", "BoM yang tidak diproduksi; produk dijual sebagai paket dan komponennya yang dikirim.", "Saat perakitan dikerjakan pihak luar dengan komponen yang kita kirim ke mereka."]);

  E("akunodoo", "rekonsiliasi bank akhir bulan",
    "Rekening koran bank menunjukkan 25 transaksi bulan ini. Bagian keuangan harus mencocokkan semuanya dengan faktur dan tagihan di Odoo.",
    ["Import mutasi bank (CSV/OFX/CAMT) atau sambungkan feed bank ke jurnal Bank.", "Buka Accounting → Bank → Reconcile.", "Untuk setiap baris, Odoo menyarankan faktur yang cocok berdasarkan nominal dan referensi; terima atau pilih manual.", "Biaya admin bank dicatat dengan reconciliation model ke akun Beban Bank.", "Pastikan saldo akhir di Odoo sama dengan rekening koran."],
    ["Mencatat pembayaran manual lalu juga merekonsiliasi mutasi, sehingga ganda.", "Membiarkan Outstanding Receipts menumpuk tanpa dicocokkan.", "Mengubah faktur yang sudah dibayar alih-alih membuat credit note."],
    ["Pelanggan membayar dua faktur dalam satu transfer. Bagaimana?", "Apa fungsi Fiscal Position?", "Kenapa ada akun 'Bank Suspense'?"],
    ["Pilih kedua faktur pada baris mutasi yang sama sampai selisihnya nol.", "Mengganti pajak dan akun otomatis sesuai jenis pelanggan, misalnya pelanggan luar negeri tanpa PPN.", "Menampung mutasi bank yang sudah diimpor tapi belum direkonsiliasi."]);

  E("hrproyek", "proyek konsultan yang ditagih per jam",
    "Konsultan menagih klien per jam. Setiap konsultan mencatat timesheet, dan biaya perjalanan diganti klien.",
    ["Buat produk jasa 'Konsultasi per jam', kebijakan faktur berdasarkan timesheet, buat proyek & task otomatis.", "Confirm Sales Order; proyek baru muncul di aplikasi Project.", "Konsultan mencatat jam di task (Timesheets).", "Biaya perjalanan dicatat di Expenses dengan opsi Re-invoice ke Sales Order.", "Buat faktur: jam dan biaya yang disetujui masuk otomatis."],
    ["Timesheet dicatat di proyek internal sehingga tidak tertagih.", "Expense tanpa struk lampiran sehingga ditolak.", "Biaya karyawan per jam tidak diisi sehingga profitabilitas proyek tidak terlihat."],
    ["Konsultan mencatat 12 jam × Rp 400.000. Berapa tagihannya?", "Di mana melihat untung-rugi proyek?", "Bagaimana karyawan mengajukan cuti di Odoo?"],
    ["Rp 4.800.000 sebelum pajak.", "Project → Project Updates / laporan profitabilitas (pendapatan dikurangi biaya timesheet dan expense).", "Aplikasi Time Off: buat permintaan, atasan menyetujui."]);

  E("posweb", "kafe dengan POS dan pesan online",
    "Kafe ingin kasir memakai POS di tablet dan pelanggan bisa memesan lewat situs. Stok bahan harus berkurang otomatis.",
    ["Pasang Point of Sale, buat satu POS 'Kasir Depan' dengan metode bayar Tunai dan QRIS.", "Buka sesi: isi kas awal; tutup sesi: hitung kas akhir dan selisihnya.", "Produk minuman dibuat dengan BoM Kit agar bahan berkurang saat terjual.", "Pasang Website + eCommerce, tampilkan produk yang 'Published'.", "Pesanan web masuk sebagai Sales Order; bayar online lewat payment provider."],
    ["Tidak menutup sesi POS sehingga jurnal penjualan menumpuk.", "Produk minuman storable tanpa stok sehingga laporan stok minus.", "Harga web dan POS diatur di tempat berbeda tanpa pricelist yang jelas."],
    ["Kas awal 500 rb, penjualan tunai 2,3 jt, kas dihitung 2,78 jt. Berapa selisihnya?", "Bisakah POS berjalan saat internet putus?", "Bagaimana menampilkan promo hanya di website?"],
    ["Seharusnya 2,8 jt; selisih kurang Rp 20.000.", "Bisa, POS menyimpan pesanan offline dan menyinkronkan saat online kembali.", "Pakai pricelist khusus website atau Promotions/coupon yang hanya berlaku di eCommerce."]);

  E("ormlanjut", "menghitung total poin pelanggan dengan ORM",
    "Klien ingin field 'Total Poin' di kontak: 1 poin setiap Rp 10.000 penjualan yang sudah dikonfirmasi.",
    ["Tambahkan field compute di res.partner dengan @api.depends ke sale_order_ids.amount_total dan state.", "Hitung dengan filtered() untuk pesanan berstatus sale.", "Pakai store=True agar bisa diurutkan, dan tambahkan constraint poin tidak negatif.", "Tulis domain untuk mencari pelanggan poin ≥ 100."],
    ["Melakukan search di dalam loop per partner.", "Lupa state di depends sehingga poin tidak berubah saat pesanan dibatalkan.", "Membulatkan dengan int() pada float yang negatif."],
    ["Domain pelanggan poin ≥ 100 dan berada di Batam?", "Bagaimana menulis ke banyak record sekaligus?", "Beda browse dan search?"],
    ["[('total_poin', '>=', 100), ('city', '=', 'Batam')].", "records.write({...}) pada recordset, satu query untuk semua.", "browse mengambil record dari id yang sudah diketahui; search mencari id dengan domain."],
`class ResPartner(models.Model):
    _inherit = "res.partner"
    total_poin = fields.Integer(compute="_hitung_poin", store=True)

    @api.depends("sale_order_ids.amount_total", "sale_order_ids.state")
    def _hitung_poin(self):
        for p in self:
            jual = p.sale_order_ids.filtered(lambda s: s.state == "sale")
            p.total_poin = int(sum(jual.mapped("amount_total")) // 10000)

    @api.constrains("total_poin")
    def _cek_poin(self):
        if any(p.total_poin < 0 for p in self):
            raise ValidationError("Poin tidak boleh negatif")`);

  E("viewxml", "menampilkan field poin di form dan list kontak",
    "Field total_poin sudah ada. Sekarang harus terlihat di form kontak setelah field Email, di list view, dan hanya bisa dilihat grup Sales.",
    ["Buat view yang inherit_id-nya base.view_partner_form.", "Sisipkan field dengan xpath position=\"after\" pada field email.", "Tambahkan groups=\"sales_team.group_sale_salesman\" agar hanya tim sales yang melihat.", "Buat view list warisan dan tambahkan kolom optional=\"show\".", "Daftarkan file XML di manifest, upgrade modul."],
    ["Menyalin seluruh view asli alih-alih mewarisinya.", "Memakai attrs di Odoo 17 (sudah diganti atribut langsung).", "Lupa depends ke modul sale di manifest."],
    ["Sembunyikan field bila poin = 0.", "Buat menu 'Pelanggan Loyal' yang membuka kontak poin ≥ 100.", "Tampilkan poin sebagai badge di list."],
    ["invisible=\"total_poin == 0\".", "ir.actions.act_window res_model res.partner dengan domain [('total_poin','>=',100)], lalu menuitem dengan action itu.", "widget=\"badge\" pada field di list view."],
`<record id="view_partner_form_poin" model="ir.ui.view">
  <field name="name">res.partner.form.poin</field>
  <field name="model">res.partner</field>
  <field name="inherit_id" ref="base.view_partner_form"/>
  <field name="arch" type="xml">
    <xpath expr="//field[@name='email']" position="after">
      <field name="total_poin" groups="sales_team.group_sale_salesman"/>
    </xpath>
  </field>
</record>`);

  E("keamanan", "membuat model baru yang aman dipakai",
    "Modul baru punya model loyalty.reward. Pengguna Sales boleh membaca, manajer boleh mengubah, dan setiap tim hanya melihat hadiah perusahaannya.",
    ["Tambahkan baris di security/ir.model.access.csv untuk grup user (baca) dan manager (semua).", "Tambahkan record rule dengan domain company_id in company_ids.", "Daftarkan file security paling awal di 'data' manifest.", "Tulis tes TransactionCase untuk memastikan pengguna biasa tidak bisa menulis.", "Jalankan dengan --test-enable -i nama_modul --stop-after-init."],
    ["Model baru tanpa access rights → peringatan dan hanya admin yang bisa membuka.", "sudo() dipakai di mana-mana sehingga semua aturan terlewati.", "File view dimuat sebelum security di manifest."],
    ["Tulis baris CSV untuk manajer.", "Apa beda group dan record rule?", "Kenapa tes dijalankan di database terpisah?"],
    ["access_reward_manager,reward manager,model_loyalty_reward,sales_team.group_sale_manager,1,1,1,1", "Group menentukan boleh tidaknya operasi pada model; record rule menentukan baris mana yang terlihat/bisa diubah.", "Tes membuat dan mengubah data; database uji mencegah data asli rusak."],
`id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
access_reward_user,reward user,model_loyalty_reward,sales_team.group_sale_salesman,1,0,0,0
access_reward_manager,reward manager,model_loyalty_reward,sales_team.group_sale_manager,1,1,1,1`);

  E("owl", "tombol cek stok cepat dan endpoint API",
    "Klien ingin endpoint JSON untuk aplikasi gudang yang mengembalikan stok produk berdasarkan kode, serta komponen OWL kecil yang menampilkannya.",
    ["Buat controller dengan @http.route('/api/stok', type='json', auth='user').", "Cari produk dengan default_code, kembalikan qty_available.", "Di frontend, komponen OWL memanggil orm.call atau rpc ke endpoint.", "Daftarkan file JS di assets web.assets_backend pada manifest.", "Uji dengan curl atau Postman memakai sesi login."],
    ["auth='public' untuk data stok sehingga siapa saja bisa membaca.", "Mengembalikan recordset langsung (tidak bisa diubah ke JSON).", "Lupa menambahkan aset sehingga komponen tidak dimuat."],
    ["Apa yang dikembalikan bila kode tidak ada?", "Beda type='json' dan type='http'?", "Kenapa pakai sudo() hati-hati di controller?"],
    ["Pesan error atau {'ditemukan': False}; jangan melempar exception mentah.", "json menerima dan mengembalikan JSON-RPC; http untuk halaman/berkas biasa.", "sudo mengabaikan hak akses; hanya dipakai untuk data yang memang boleh dilihat pemanggil."],
`class StokApi(http.Controller):
    @http.route("/api/stok", type="json", auth="user")
    def stok(self, kode):
        p = request.env["product.product"].search([("default_code", "=", kode)], limit=1)
        if not p:
            return {"ditemukan": False}
        return {"ditemukan": True, "nama": p.display_name, "stok": p.qty_available}`);

  E("studikasus", "stok di laporan berbeda dengan stok fisik",
    "Klien mengeluh: laporan menunjukkan 120 unit, tapi hitungan fisik 105. Anda diminta mendiagnosis sebelum menyalahkan sistem.",
    ["Cek Moves Analysis produk: pengiriman mana yang belum divalidasi atau masih 'Ready'.", "Cek apakah ada penjualan POS yang sesinya belum ditutup.", "Cek lokasi: mungkin 15 unit ada di lokasi Input/QC atau gudang lain.", "Cek penyesuaian manual dan siapa yang melakukannya.", "Setelah sebab ketemu, lakukan Physical Inventory dan perbaiki prosesnya (bukan hanya angkanya)."],
    ["Langsung menyesuaikan stok tanpa mencari sebab.", "Menyalahkan bug sebelum memeriksa transaksi yang tertunda.", "Tidak mendokumentasikan temuan untuk klien."],
    ["Ditemukan 15 unit pada pengiriman berstatus Ready yang sudah dikirim fisik. Tindakan?", "Bagaimana mencegah terulang?", "Siapa yang perlu tahu hasil diagnosis?"],
    ["Validasi pengiriman tersebut; stok sistem menjadi 105.", "SOP: gudang wajib validasi saat barang keluar, laporan harian transfer tertunda, hak akses dibatasi.", "Key user gudang, manajer operasional, dan tim yang memegang SOP."]);

  E("hargajual", "pricelist bertingkat untuk grosir",
    "Harga eceran Rp 50.000. Grosir: diskon 10% untuk ≥ 10 unit, 15% untuk ≥ 50 unit. Margin minimal 20% dari HPP Rp 35.000.",
    ["Buat pricelist 'Grosir' dengan dua aturan: min qty 10 → diskon 10%; min qty 50 → diskon 15%.", "Hitung: 10 unit → 45.000/unit; 50 unit → 42.500/unit.", "Cek margin: (42.500 − 35.000) / 42.500 = 17,6% → di bawah batas 20%.", "Ubah aturan ≥ 50 menjadi harga tetap minimal 43.750 (margin tepat 20%).", "Pasang pricelist ke kontak grosir."],
    ["Menghitung margin dari HPP (markup) padahal yang diminta dari harga jual.", "Aturan qty besar ditaruh di bawah sehingga aturan qty 10 yang dipakai.", "Lupa pembulatan harga."],
    ["Harga jual minimal agar margin 25%?", "Markup 50% dari HPP 35.000 menghasilkan harga berapa?", "Berapa harga 100 unit dengan pricelist awal?"],
    ["35.000 / (1 − 0,25) = Rp 46.667.", "35.000 × 1,5 = Rp 52.500.", "100 × 42.500 = Rp 4.250.000."]);

  E("pajak", "PPN termasuk dan PPh 23 atas jasa",
    "Toko menjual barang dengan harga tertera Rp 111.000 sudah termasuk PPN 11%. Perusahaan juga membayar jasa servis Rp 2.000.000 yang dipotong PPh 23 2%.",
    ["PPN included: DPP = 111.000 / 1,11 = 100.000; PPN = 11.000.", "Di Odoo, pajak dengan opsi Included in Price menghitung mundur seperti itu.", "Tagihan jasa: subtotal 2.000.000; PPN 11% = 220.000; PPh 23 (−2%) = −40.000.", "Yang dibayar ke vendor: 2.000.000 + 220.000 − 40.000 = 2.180.000.", "PPh 23 40.000 menjadi utang pajak yang disetor perusahaan."],
    ["Menghitung PPN included sebagai 111.000 × 11%.", "PPh 23 dihitung dari total termasuk PPN (seharusnya dari DPP).", "Tanda pajak potongan positif sehingga total bertambah."],
    ["Harga Rp 55.500 termasuk PPN 11%. Berapa DPP dan PPN?", "Jasa Rp 5.000.000 dengan PPN 11% dan PPh 23 2%. Berapa dibayar?", "Kenapa PPh 23 dicatat sebagai utang?"],
    ["DPP 50.000; PPN 5.500.", "5.000.000 + 550.000 − 100.000 = Rp 5.450.000.", "Perusahaan memotong dari vendor dan wajib menyetorkannya ke negara."]);

  E("satuan", "membeli per dus, menjual per pcs",
    "Air mineral dibeli per dus isi 24 botol, harga dus Rp 48.000, dan dijual per botol Rp 3.000.",
    ["Aktifkan Units of Measure. Kategori Unit: Units (referensi), Dus = 24 Units (bigger).", "Produk: UoM jual = Units, UoM beli = Dus.", "PO 10 dus → stok bertambah 240 botol.", "HPP per botol = 48.000 / 24 = 2.000; margin per botol 1.000.", "Atur rounding precision agar tidak ada sisa pecahan aneh."],
    ["UoM beli dan jual di kategori berbeda (Odoo menolak).", "Faktor terbalik (Dus = 1/24) sehingga 10 dus menjadi 0,4 botol.", "Harga beli diisi per botol padahal pemasok menagih per dus."],
    ["Terjual 100 botol. Berapa dus yang setara?", "Pemasok menaikkan harga dus menjadi 54.000. HPP per botol?", "Kemasan Pack isi 6 botol. Bagaimana mendefinisikannya?"],
    ["100 / 24 = 4,17 dus.", "54.000 / 24 = Rp 2.250.", "Pack = 6 Units (bigger) di kategori yang sama, atau pakai Packaging produk."]);

  E("reorder", "menentukan min dan max reordering rule",
    "Penjualan rata-rata 20 unit/hari, lead time pemasok 5 hari, stok pengaman 40 unit, dan pesan untuk persediaan 10 hari.",
    ["Kebutuhan selama lead time = 20 × 5 = 100.", "Min = kebutuhan lead time + stok pengaman = 100 + 40 = 140.", "Max = min + kebutuhan 10 hari = 140 + 200 = 340.", "Saat forecast stok < 140, Odoo membuat RFQ sampai mencapai 340.", "Tinjau ulang angka tiap bulan sesuai tren penjualan."],
    ["Memakai stok saat ini, bukan forecast (pesanan terbuka diabaikan).", "Min terlalu kecil sehingga barang habis sebelum pesanan datang.", "Lupa lead time pemasok di vendor pricelist."],
    ["Lead time naik menjadi 8 hari. Min baru?", "Forecast stok 120, max 340. Berapa yang dipesan?", "Kenapa ada stok pengaman?"],
    ["20 × 8 + 40 = 200.", "340 − 120 = 220 unit (dibulatkan sesuai kelipatan pesanan).", "Menahan lonjakan permintaan atau keterlambatan pemasok."]);

  E("valuasi", "FIFO dibanding AVCO",
    "Pembelian: 10 unit @ 10.000, lalu 10 unit @ 14.000. Kemudian terjual 12 unit.",
    ["FIFO: 10 × 10.000 + 2 × 14.000 = 128.000 HPP; sisa 8 × 14.000 = 112.000.", "AVCO: rata-rata (100.000 + 140.000) / 20 = 12.000; HPP 12 × 12.000 = 144.000; sisa 8 × 12.000 = 96.000.", "Di Odoo, atur di Product Category: Costing Method dan Inventory Valuation (Automated).", "Bandingkan laba: FIFO memberi HPP lebih rendah saat harga naik."],
    ["Mengganti costing method di tengah tahun tanpa memahami dampaknya ke nilai stok.", "Valuation manual sehingga jurnal HPP tidak otomatis.", "Standard price dipakai untuk barang yang harganya sering berubah."],
    ["Total nilai sebelum penjualan?", "Laba kotor bila 12 unit dijual @ 20.000 dengan FIFO?", "Metode mana memberi stok akhir lebih tinggi saat harga naik?"],
    ["240.000.", "240.000 − 128.000 = 112.000.", "FIFO (112.000 dibanding 96.000)."]);

  E("landed", "membagi ongkos impor ke harga barang",
    "Impor 100 unit A (nilai 10 jt) dan 50 unit B (nilai 5 jt). Ongkos kirim dan bea total Rp 3 jt, dibagi berdasarkan nilai.",
    ["Total nilai 15 jt. Porsi A = 10/15 = 2/3 → 2 jt; porsi B = 1 jt.", "HPP A per unit = (10 jt + 2 jt) / 100 = 120.000.", "HPP B per unit = (5 jt + 1 jt) / 50 = 120.000.", "Di Odoo: aktifkan Landed Costs, buat produk jasa biaya, lalu Landed Cost dengan metode split By Current Cost.", "Validasi; nilai persediaan bertambah sesuai porsi."],
    ["Mencatat ongkos impor sebagai beban biasa sehingga HPP terlalu rendah.", "Membagi rata per unit padahal nilai barang berbeda jauh.", "Landed cost dibuat setelah semua barang terjual (nilai masuk ke HPP sekaligus)."],
    ["Bila dibagi berdasarkan jumlah unit, berapa porsi A?", "Kapan membagi berdasarkan berat?", "Akun apa yang di-debit saat landed cost divalidasi?"],
    ["100/150 × 3 jt = 2 jt (kebetulan sama karena nilai per unit sama).", "Saat ongkos kirim bergantung berat, misalnya kargo laut.", "Akun persediaan (stock valuation) untuk barang yang masih ada."]);

  E("produksi", "biaya satu meja dan OEE work center",
    "Meja: papan 150.000, kaki 4 × 20.000, sekrup 16 × 500. Perakitan 30 menit di work center biaya Rp 60.000/jam.",
    ["Biaya komponen = 150.000 + 80.000 + 8.000 = 238.000.", "Biaya kerja = 0,5 jam × 60.000 = 30.000.", "HPP meja = 268.000.", "OEE = availability × performance × quality, misalnya 0,9 × 0,95 × 0,98 = 83,8%.", "Odoo menghitung biaya dari BoM dan durasi work order (Cost Analysis)."],
    ["Lupa biaya work center sehingga HPP terlalu rendah.", "Durasi diisi per batch padahal per unit.", "Menghitung OEE dengan menjumlah, bukan mengalikan."],
    ["Biaya 10 meja?", "Durasi naik menjadi 45 menit. HPP baru?", "Availability 0,8, performance 0,9, quality 1. OEE?"],
    ["2.680.000.", "238.000 + 45.000 = 283.000.", "0,8 × 0,9 × 1 = 72%."]);

  E("jurnal", "penjualan dalam dolar dan selisih kurs",
    "Faktur USD 1.000 dibuat saat kurs 15.500. Pelanggan membayar saat kurs 15.800.",
    ["Faktur: Piutang 15.500.000, Pendapatan 15.500.000.", "Pembayaran: Bank 15.800.000.", "Selisih 300.000 dicatat sebagai Laba Selisih Kurs (exchange difference journal).", "Aktifkan multi-currency dan perbarui kurs otomatis di Odoo.", "Cek jurnal selisih kurs setelah rekonsiliasi."],
    ["Mengubah kurs faktur setelah divalidasi.", "Mencatat selisih ke pendapatan penjualan.", "Lupa memperbarui kurs sehingga semua transaksi memakai kurs lama."],
    ["Bila kurs saat bayar 15.300?", "DP 30% dari Rp 10 jt: jurnal saat faktur DP?", "Kenapa ada jurnal selisih kurs terpisah?"],
    ["Rugi selisih kurs 200.000.", "Piutang 3 jt / Uang Muka Pelanggan (atau pendapatan DP) 3 jt, sesuai konfigurasi akun DP.", "Supaya pendapatan tetap sesuai kurs transaksi dan untung/rugi kurs terlihat jelas."]);

  E("termin", "termin 2/10 net 30 dan cash rounding",
    "Faktur Rp 10.000.000 dengan termin: diskon 2% bila dibayar dalam 10 hari, jatuh tempo 30 hari. POS membulatkan ke Rp 100 terdekat.",
    ["Buat Payment Terms: 100% dalam 30 hari dengan early payment discount 2% dalam 10 hari.", "Dibayar hari ke-7: cukup 9.800.000; diskon 200.000 dicatat ke akun diskon.", "Dibayar hari ke-15: harus 10.000.000.", "Cash rounding: total 47.360 menjadi 47.400 (half-up ke 100)."],
    ["Memberi diskon manual dengan credit note setiap kali.", "Termin dibuat 30% + 70% padahal maksudnya diskon.", "Pembulatan di setiap baris, bukan di total."],
    ["Dibayar hari ke-10 tepat. Berapa?", "Total POS 23.940 dengan pembulatan ke 100?", "Termin 50% sekarang, 50% 30 hari dari 8 jt?"],
    ["9.800.000 (masih dalam 10 hari).", "23.900.", "4 jt sekarang dan 4 jt 30 hari kemudian."]);

  E("penyusutan", "menyusutkan laptop kantor",
    "Laptop dibeli Rp 18.000.000, umur 4 tahun, nilai sisa Rp 2.000.000, metode garis lurus.",
    ["Nilai disusutkan = 18 jt − 2 jt = 16 jt.", "Penyusutan per tahun = 16 jt / 4 = 4 jt; per bulan ≈ 333.333.", "Akhir tahun 2: nilai buku = 18 jt − 8 jt = 10 jt.", "Odoo: Assets → buat model aset, hubungkan ke akun aset; tagihan pembelian otomatis membuat aset.", "Jurnal bulanan: Beban Penyusutan (D) / Akumulasi Penyusutan (K)."],
    ["Lupa nilai sisa.", "Mencatat laptop sebagai beban langsung sehingga laba tahun pertama anjlok.", "Akumulasi penyusutan dicatat mengurangi akun aset langsung (seharusnya akun kontra)."],
    ["Metode saldo menurun 50%: penyusutan tahun 1 dan 2?", "Laptop dijual tahun ke-3 seharga 9 jt (nilai buku 10 jt). Untung/rugi?", "Kenapa dipakai akun kontra?"],
    ["Tahun 1: 9 jt; tahun 2: 50% × 9 jt = 4,5 jt.", "Rugi penjualan aset 1 jt.", "Harga perolehan tetap terlihat, sementara total penyusutan terkumpul di akun terpisah."]);

  E("pipeline", "forecast pipeline bulan depan",
    "Pipeline: 4 opportunity Rp 20 jt (probabilitas 25%), 2 × Rp 50 jt (60%), 1 × Rp 100 jt (90%).",
    ["Nilai tertimbang = Σ nilai × probabilitas.", "4 × 20 jt × 0,25 = 20 jt.", "2 × 50 jt × 0,6 = 60 jt.", "1 × 100 jt × 0,9 = 90 jt; total forecast 170 jt.", "Bandingkan dengan target dan win rate historis."],
    ["Menjumlah nilai penuh (280 jt) sebagai forecast.", "Probabilitas tidak diperbarui saat tahap berubah.", "Tanggal tutup lewat tapi opportunity tidak diperbarui."],
    ["Target 200 jt. Berapa kekurangan?", "Win rate 30% dan nilai rata-rata 25 jt. Berapa opportunity dibutuhkan untuk 150 jt?", "Apa arti conversion rate lead → opportunity 20%?"],
    ["30 jt.", "150 / 25 = 6 deal; 6 / 0,3 = 20 opportunity.", "Dari 100 lead, 20 menjadi opportunity."]);

  E("kpi", "KPI toko bulan ini",
    "Omzet 120 jt, HPP 78 jt, beban operasional 25 jt, 1.500 transaksi, rata-rata stok 60 jt.",
    ["Laba kotor = 120 − 78 = 42 jt; margin kotor 35%.", "Laba bersih operasional = 42 − 25 = 17 jt (14,2%).", "Nilai transaksi rata-rata = 120 jt / 1.500 = 80.000.", "Perputaran persediaan = HPP / rata-rata stok = 1,3 kali per bulan.", "Tampilkan di dashboard Odoo (Spreadsheet atau pivot)."],
    ["Menghitung margin dari HPP.", "Memakai omzet untuk perputaran persediaan (seharusnya HPP).", "KPI tanpa pembanding (bulan lalu atau target)."],
    ["Hari persediaan (30 hari / perputaran)?", "Omzet naik 10% dengan margin sama. Laba kotor?", "Kenapa KPI dibandingkan dengan periode sebelumnya?"],
    ["30 / 1,3 ≈ 23 hari.", "132 jt × 35% = 46,2 jt.", "Angka tunggal tidak menunjukkan arah; perbandingan memperlihatkan naik atau turun."]);
})();
