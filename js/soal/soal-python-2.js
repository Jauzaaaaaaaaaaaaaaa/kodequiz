// ============ PYTHON lanjutan — bab 12–14 ============
// pandas (analisis data), Python untuk Odoo, dan latihan membaca kode.
// vr:"py" → skrip verifikasi menjalankan kode sungguhan (vpre = kode persiapan yang tidak ditampilkan).

const PD_SETUP = `import pandas as pd
df = pd.DataFrame({
  "Sales":   ["Andi","Bima","Citra","Andi","Dewi","Bima","Citra","Andi","Dewi","Bima"],
  "Wilayah": ["Jakarta","Bandung","Jakarta","Surabaya","Bandung","Jakarta","Surabaya","Jakarta","Surabaya","Bandung"],
  "Produk":  ["Laptop","Mouse","Monitor","Mouse","Laptop","Keyboard","Laptop","Monitor","Keyboard","Monitor"],
  "Qty":     [2,10,3,5,1,4,1,2,6,1],
  "Total":   [14000000,1500000,6000000,750000,7000000,1200000,7000000,4000000,1800000,2000000]})`;

SOAL_PYTHON.push(
// ---- BAB 12: pandas ----
{k:"pandas",t:"mc",lv:1,q:"Cara import pandas yang menjadi konvensi di hampir semua tutorial dan perusahaan:",o:["import pandas as pd","import pandas as pa","from pandas import *","include pandas"],a:0,
 e:"Alias 'pd' adalah kesepakatan komunitas. Mengikuti konvensi membuat kodemu mudah dibaca orang lain.",
 w:[null,"Bisa jalan, tapi bukan konvensi — orang lain akan bingung.","Mengimpor semua nama ke ruang global; sulit dilacak asal fungsinya.","Itu sintaks bahasa lain, bukan Python."]},
{k:"pandas",t:"mc",lv:1,q:"pd.read_csv(\"penjualan.csv\") menghasilkan objek bertipe…",o:["DataFrame — tabel berbaris dan berkolom, mirip sheet Excel","List of strings","Dictionary","File teks biasa"],a:0,
 e:"DataFrame adalah inti pandas. Setiap kolom adalah Series. Hampir semua yang kamu lakukan di Excel (filter, sort, SUMIFS, pivot, VLOOKUP) bisa dilakukan di DataFrame dengan beberapa baris kode.",
 w:[null,"pandas sudah memecah baris dan kolom untukmu.","DataFrame bisa dibuat dari dict, tapi hasil read_csv adalah DataFrame.","pandas membaca dan memproses isinya, bukan sekadar teks."]},
{k:"pandas",t:"mc",lv:1,tb:"penjualan",q:"df berisi data penjualan di atas (10 baris, 5 kolom: Sales, Wilayah, Produk, Qty, Total). Output kode ini:",kode:"print(df.shape)",o:["(10, 5)","(5, 10)","10","50"],a:0,vr:"py",vpre:PD_SETUP,
 e:"shape = (jumlah baris, jumlah kolom). Biasakan cek shape setiap selesai filter atau merge — kalau jumlah baris tiba-tiba melonjak, mungkin ada join yang menduplikasi data.",
 w:[null,"Urutannya (baris, kolom).","shape mengembalikan tuple dua angka.","Itu jumlah sel (df.size)."]},
{k:"pandas",t:"mc",lv:1,q:"df.head() tanpa argumen menampilkan…",o:["5 baris pertama","10 baris pertama","Semua baris","Nama kolom saja"],a:0,
 e:"head(n) menampilkan n baris pertama (default 5); tail() menampilkan baris terakhir. Langkah pertama analisis: head(), shape, info(), dan describe().",
 w:[null,"Default-nya 5, kecuali kamu menulis head(10).","Untuk data besar, menampilkan semua baris tidak praktis.","Nama kolom: df.columns."]},
{k:"pandas",t:"mc",lv:1,tb:"penjualan",q:"Output kode ini:",kode:"print(df[\"Total\"].sum())",o:["45250000","10","4525000","14000000"],a:0,vr:"py",vpre:PD_SETUP,
 e:"df[\"Total\"] mengambil satu kolom (Series), lalu .sum() menjumlahkannya — setara =SUM(F2:F11) di Excel.",
 w:[null,"10 adalah jumlah baris (count).","Itu rata-ratanya (mean).","Itu nilai terbesar (max)."]},
{k:"pandas",t:"mc",lv:2,tb:"penjualan",q:"Output kode ini:",kode:"bandung = df[df[\"Wilayah\"] == \"Bandung\"]\nprint(len(bandung))",o:["3","4","10","1"],a:0,vr:"py",vpre:PD_SETUP,
 e:"df[kondisi] = filter baris (seperti AutoFilter di Excel atau WHERE di SQL). Bagian dalam menghasilkan deretan True/False untuk tiap baris; yang True dipertahankan. Bandung: Bima (Mouse), Dewi (Laptop), Bima (Monitor).",
 w:[null,"Jakarta yang punya 4 baris.","10 adalah semua baris sebelum filter.","Filter mempertahankan SEMUA baris yang cocok."]},
{k:"pandas",t:"mc",lv:2,q:"Cara menulis filter DUA syarat (Wilayah Jakarta DAN Total ≥ 5 juta) yang benar di pandas:",o:["df[(df[\"Wilayah\"] == \"Jakarta\") & (df[\"Total\"] >= 5000000)]","df[df[\"Wilayah\"] == \"Jakarta\" and df[\"Total\"] >= 5000000]","df[df[\"Wilayah\"] == \"Jakarta\" & df[\"Total\"] >= 5000000]","df.where(\"Jakarta\", 5000000)"],a:0,vr:"py",vpre:PD_SETUP,vjalan:"print(len(df[(df[\"Wilayah\"] == \"Jakarta\") & (df[\"Total\"] >= 5000000)]))",vx:"2",
 e:"Di pandas, DAN = &, ATAU = |, TIDAK = ~, dan setiap syarat WAJIB diberi kurung. Hasilnya 2 baris: Andi (14 jt) dan Citra (6 jt).",
 w:[null,"'and' Python tidak bisa dipakai untuk Series — muncul error 'truth value of a Series is ambiguous'.","Tanpa kurung, & dikerjakan lebih dulu daripada == sehingga error/salah.","where bekerja dengan cara lain dan tidak menerima argumen seperti itu."]},
{k:"pandas",t:"mc",lv:2,tb:"penjualan",q:"Output kode ini:",kode:"per_sales = df.groupby(\"Sales\")[\"Total\"].sum()\nprint(per_sales[\"Andi\"])",o:["18750000","14000000","3","45250000"],a:0,vr:"py",vpre:PD_SETUP,
 e:"groupby + sum = pivot table / SUMIFS per kategori / GROUP BY di SQL. Andi: 14.000.000 + 750.000 + 4.000.000 = 18.750.000.",
 w:[null,"Itu hanya transaksi pertama Andi.","3 adalah jumlah transaksi Andi (count).","Itu total semua sales."]},
{k:"pandas",t:"mc",lv:2,tb:"penjualan",q:"Output kode ini:",kode:"top = df.sort_values(\"Total\", ascending=False)\nprint(top.iloc[0][\"Sales\"])",o:["Andi","Bima","Dewi","Citra"],a:0,vr:"py",vpre:PD_SETUP,
 e:"sort_values mengurutkan; ascending=False = dari terbesar. iloc[0] mengambil baris pertama berdasarkan POSISI. Transaksi terbesar: Andi, 14 juta.",
 w:[null,"Bima tidak punya transaksi terbesar.","Dewi punya 7 juta, bukan yang terbesar.","Citra punya 7 juta, bukan yang terbesar."]},
{k:"pandas",t:"mc",lv:2,tb:"penjualan",q:"Output kode ini:",kode:"print(df[\"Sales\"].value_counts()[\"Bima\"])",o:["3","4700000","1","10"],a:0,vr:"py",vpre:PD_SETUP,
 e:"value_counts() menghitung kemunculan tiap nilai — seperti COUNTIF untuk setiap nama sekaligus. Bima muncul 3 kali.",
 w:[null,"Itu total rupiah Bima, bukan banyaknya transaksi.","Bima muncul lebih dari sekali.","10 adalah jumlah semua baris."]},
{k:"pandas",t:"mc",lv:2,tb:"penjualan",q:"Output kode ini:",kode:"df[\"Harga\"] = df[\"Total\"] / df[\"Qty\"]\nprint(df[\"Harga\"].iloc[0])",o:["7000000.0","14000000","2","7000000"],a:0,vr:"py",vpre:PD_SETUP,
 e:"Operasi antar kolom dikerjakan per baris sekaligus (vectorized) — tanpa loop, seperti rumus yang ditarik ke bawah di Excel. Pembagian / selalu menghasilkan float, jadi tampil 7000000.0.",
 w:[null,"Itu Total-nya, belum dibagi Qty.","Itu Qty-nya.","Pembagian di Python menghasilkan float, jadi ada .0."]},
{k:"pandas",t:"mc",lv:2,q:"Kamu punya df penjualan (kolom Produk) dan df_produk (kolom Produk, Kategori). Cara menambahkan Kategori ke df penjualan:",o:["pd.merge(df, df_produk, on=\"Produk\", how=\"left\")","df + df_produk","df.append(df_produk)","df.groupby(df_produk)"],a:0,vr:"py",vpre:PD_SETUP+"\ndf_produk = pd.DataFrame({\"Produk\":[\"Laptop\",\"Mouse\",\"Monitor\",\"Keyboard\"],\"Kategori\":[\"Komputer\",\"Aksesoris\",\"Komputer\",\"Aksesoris\"]})",vjalan:"print(pd.merge(df, df_produk, on=\"Produk\", how=\"left\").shape)",vx:"(10, 6)",
 e:"merge = JOIN di SQL = XLOOKUP di Excel. how=\"left\" mempertahankan semua baris penjualan. Cek shape setelahnya: tetap 10 baris, kolom bertambah satu menjadi 6.",
 w:[null,"Menjumlah dua DataFrame tidak menggabungkan berdasarkan kunci.","Menumpuk ke bawah (dan append sudah dihapus di pandas modern; gunakan pd.concat).","groupby untuk meringkas, bukan menggabungkan."]},
{k:"pandas",t:"mc",lv:2,q:"Kode untuk menghitung jumlah data KOSONG (missing) di setiap kolom:",o:["df.isna().sum()","df.count()","df.empty","df.dropna()"],a:0,
 e:"isna() memberi True untuk sel kosong; .sum() menghitung True per kolom. Ini salah satu langkah wajib di awal analisis. Lalu putuskan: isi (fillna), hapus (dropna), atau selidiki penyebabnya.",
 w:[null,"count() menghitung yang TIDAK kosong.","empty hanya memberi tahu apakah DataFrame tidak punya baris sama sekali.","dropna menghapus baris yang kosong, bukan menghitungnya."]},
{k:"pandas",t:"mc",lv:2,q:"Membuat tabel ringkasan seperti Pivot Table Excel (baris: Sales, kolom: Wilayah, nilai: jumlah Total):",o:["pd.pivot_table(df, values=\"Total\", index=\"Sales\", columns=\"Wilayah\", aggfunc=\"sum\")","df.pivot(\"Sales\")","df.sum(\"Sales\", \"Wilayah\")","df.sort_values([\"Sales\", \"Wilayah\"])"],a:0,vr:"py",vpre:PD_SETUP,vjalan:"t = pd.pivot_table(df, values=\"Total\", index=\"Sales\", columns=\"Wilayah\", aggfunc=\"sum\")\nprint(int(t.loc[\"Andi\",\"Jakarta\"]))",vx:"18000000",
 e:"index = Rows, columns = Columns, values = Values, aggfunc = cara meringkas. Contoh: sel Andi–Jakarta = 18.000.000 (sama dengan hasil SUMIFS di bab Excel).",
 w:[null,"pivot() tidak menerima argumen seperti itu dan tidak bisa meringkas nilai yang dobel.","sum tidak mengelompokkan seperti itu.","sort_values hanya mengurutkan."]},
{k:"pandas",t:"mc",lv:3,tb:"penjualan",q:"Output kode ini:",kode:"r = df.groupby(\"Wilayah\")[\"Total\"].agg([\"sum\", \"count\"])\nprint(r.loc[\"Jakarta\", \"count\"])",o:["4","25200000","3","10"],a:0,vr:"py",vpre:PD_SETUP,
 e:"agg menjalankan beberapa fungsi ringkasan sekaligus. Jakarta: sum = 25.200.000, count = 4 transaksi. loc mengambil berdasarkan LABEL (baris 'Jakarta', kolom 'count').",
 w:[null,"Itu nilai kolom 'sum'.","Bandung dan Surabaya yang punya 3 transaksi.","10 adalah semua transaksi."]},
{k:"pandas",t:"is",lv:1,q:"Fungsi pandas untuk membaca file CSV: pd.________(\"data.csv\")",a:["read_csv"],
 h:"read_…",
 e:"pd.read_csv() untuk CSV, pd.read_excel() untuk .xlsx, dan pd.read_sql() untuk hasil query database. Kebalikannya: df.to_csv() dan df.to_excel()."},

// ---- BAB 13: Python untuk Odoo ----
{k:"odoo",t:"mc",lv:1,q:"Pada model Odoo ini, baris _name = 'akademi.kursus' menentukan…",kode:"from odoo import models, fields\n\nclass Kursus(models.Model):\n    _name = 'akademi.kursus'\n    _description = 'Kursus'\n\n    nama  = fields.Char(string='Nama Kursus', required=True)\n    harga = fields.Float()\n    aktif = fields.Boolean(default=True)",o:["Nama teknis model, yang juga menentukan nama tabel di PostgreSQL","Judul halaman di browser","Nama file Python","Nama database"],a:0,
 e:"Odoo memakai ORM: setiap class model menjadi tabel. _name = 'akademi.kursus' → tabel akademi_kursus, dan setiap fields.* menjadi kolom. Kamu menulis Python, Odoo yang membuat tabel SQL-nya.",
 w:[null,"Judul tampilan diatur di view/menu.","Nama file bebas.","Nama database diatur saat instalasi."]},
{k:"odoo",t:"mc",lv:2,q:"Model dengan _name = 'akademi.kursus' disimpan di tabel PostgreSQL bernama…",o:["akademi_kursus","akademi.kursus","Kursus","kursus_akademi"],a:0,
 e:"Titik pada _name diganti garis bawah. Contoh lain: sale.order → sale_order, res.partner → res_partner. Berguna saat kamu perlu menulis query SQL langsung untuk analisis data Odoo.",
 w:[null,"Nama tabel SQL tidak memakai titik seperti itu.","Nama class Python tidak dipakai sebagai nama tabel.","Urutannya tidak dibalik."]},
{k:"odoo",t:"mc",lv:1,q:"Field Odoo yang tepat untuk menghubungkan kursus ke SATU pengajar dari daftar kontak (res.partner):",o:["fields.Many2one('res.partner')","fields.Char()","fields.One2many('res.partner')","fields.Integer()"],a:0,
 e:"Many2one = banyak kursus → satu pengajar (seperti foreign key/pelanggan_id di tabel pesanan). One2many = kebalikannya (satu order → banyak baris order line). Many2many = banyak ke banyak (misal tag).",
 w:[null,"Char hanya menyimpan teks; tidak terhubung ke data kontak.","One2many untuk satu-ke-banyak, butuh Many2one pasangannya di model lain.","Menyimpan angka id manual kehilangan fitur relasi ORM."]},
{k:"odoo",t:"mc",lv:2,q:"Di Odoo, Sales Order dan baris-baris produknya (order lines) berelasi…",o:["Sales Order → order_line adalah One2many; setiap line → order_id adalah Many2one","Many2many","Tidak berelasi","One2one"],a:0,
 e:"Pola header–detail ini ada di mana-mana: invoice & invoice lines, PO & PO lines. Di SQL: tabel sale_order_line punya kolom order_id yang menunjuk ke sale_order.id.",
 w:[null,"Satu baris produk hanya milik satu order, jadi bukan Many2many.","Mereka terhubung lewat order_id.","Odoo tidak memakai tipe One2one untuk ini."]},
{k:"odoo",t:"mc",lv:2,q:"Pada computed field ini, kenapa ada perulangan for rec in self?",kode:"total = fields.Float(compute='_compute_total')\n\n@api.depends('qty', 'harga')\ndef _compute_total(self):\n    for rec in self:\n        rec.total = rec.qty * rec.harga",o:["Karena self adalah RECORDSET — bisa berisi banyak record sekaligus (misal di tampilan list)","Karena Python mewajibkan for di setiap fungsi","Supaya lebih lambat","Tidak perlu, hanya gaya penulisan"],a:0,
 e:"Di Odoo, method dipanggil pada kumpulan record. Tanpa loop, kode akan error saat self berisi lebih dari satu record ('Expected singleton'). Ini kesalahan paling umum developer Odoo pemula.",
 w:[null,"Python tidak mewajibkan for.","Tujuannya kebenaran, bukan kecepatan.","Wajib — tanpa loop akan error 'Expected singleton'."]},
{k:"odoo",t:"mc",lv:2,q:"Fungsi decorator @api.depends('qty', 'harga') pada computed field:",o:["Memberi tahu Odoo untuk menghitung ulang field saat qty atau harga berubah","Membuat field wajib diisi","Menghapus field","Menyembunyikan field dari user"],a:0,
 e:"Tanpa depends yang benar, nilai computed field bisa 'basi' (tidak ter-update). Mirip rumus Excel yang otomatis berubah saat sel yang dirujuknya diubah.",
 w:[null,"Wajib diisi diatur dengan required=True.","Menghapus field dilakukan dengan menghapus definisinya.","Menyembunyikan field diatur di view (invisible)."]},
{k:"odoo",t:"mc",lv:2,q:"Kode ini menghasilkan…",kode:"pelanggan = self.env['res.partner'].search([('city', '=', 'Bandung')])",o:["Recordset berisi semua kontak dengan kota Bandung","Jumlah kontak di Bandung","Satu kontak pertama saja","Teks 'Bandung'"],a:0,
 e:"search(domain) = SELECT … WHERE. Domain ditulis sebagai list berisi tuple (field, operator, nilai). Untuk jumlahnya saja: search_count(domain). Untuk membatasi: search(domain, limit=1).",
 w:[null,"Jumlah didapat dari search_count().","search mengembalikan semua yang cocok, kecuali diberi limit.","Yang dikembalikan adalah record kontak."]},
{k:"odoo",t:"mc",lv:3,q:"Domain Odoo untuk kontak di Bandung ATAU Jakarta:",o:["['|', ('city', '=', 'Bandung'), ('city', '=', 'Jakarta')]","[('city', '=', 'Bandung'), ('city', '=', 'Jakarta')]","[('city', '=', 'Bandung' or 'Jakarta')]","['or', 'Bandung', 'Jakarta']"],a:0,
 e:"Domain Odoo memakai notasi prefix (Polish notation): operator '|' (OR) atau '&' (AND) ditulis SEBELUM dua syarat. Tanpa operator, syarat-syarat digabung dengan AND. Alternatif lain: [('city', 'in', ['Bandung', 'Jakarta'])].",
 w:[null,"Tanpa '|', keduanya digabung AND — tidak ada kota yang sekaligus Bandung dan Jakarta, jadi hasilnya kosong.","'Bandung' or 'Jakarta' dievaluasi Python menjadi 'Bandung' saja.","Bukan format domain yang valid."]},
{k:"odoo",t:"mc",lv:2,q:"Padanan method ORM Odoo dengan SQL:",o:["create = INSERT, write = UPDATE, unlink = DELETE, search/browse = SELECT","create = SELECT, write = DELETE","unlink = INSERT","Odoo tidak berhubungan dengan SQL"],a:0,
 e:"ORM menerjemahkan method Python menjadi SQL sekaligus menjalankan aturan bisnis (hak akses, computed field, constraint). Karena itu developer Odoo sebaiknya memakai ORM, bukan SQL langsung, untuk menulis data.",
 w:[null,"Salah padanan.","unlink artinya menghapus.","ORM menghasilkan SQL untuk PostgreSQL."]},
{k:"odoo",t:"mc",lv:2,q:"Klien ingin menambah field 'Nomor PO Pelanggan' di Sales Order. Cara standar di modul kustom:",kode:"class SaleOrder(models.Model):\n    _inherit = 'sale.order'\n\n    no_po_pelanggan = fields.Char('Nomor PO Pelanggan')",o:["Memakai _inherit = 'sale.order' untuk MENAMBAH field ke model yang sudah ada","Menyalin seluruh kode modul Sales lalu mengeditnya","Mengubah langsung file inti Odoo","Membuat database baru"],a:0,
 e:"Inheritance adalah inti kustomisasi Odoo: kamu memperluas model yang ada tanpa menyentuh kode intinya, sehingga upgrade versi tetap memungkinkan. Field baru lalu ditampilkan dengan inherit view di XML.",
 w:[null,"Menyalin kode membuatnya sulit dirawat dan di-upgrade.","Mengubah kode inti akan hilang saat update dan merusak sistem.","Tidak perlu database baru."]},
{k:"odoo",t:"mc",lv:2,q:"Tampilan Odoo (form, list, kanban, pivot, graph, search) didefinisikan dengan…",o:["XML","Python","CSS saja","Excel"],a:0,
 e:"Model & logika ditulis di Python, tampilan di XML, interaktivitas frontend di JavaScript (OWL). Catatan: tag tampilan daftar bernama <tree> sampai Odoo 17, dan menjadi <list> mulai Odoo 18.",
 w:[null,"Python untuk model dan logika bisnis.","CSS hanya untuk gaya tampilan.","Excel bisa dipakai untuk impor data, bukan definisi tampilan."]},
{k:"odoo",t:"mc",lv:2,q:"File __manifest__.py sebuah modul Odoo berisi…",o:["Informasi modul: nama, versi, depends (modul yang dibutuhkan), dan daftar file data (XML/CSV) yang dimuat","Semua data transaksi","Password database","Hanya komentar"],a:0,
 e:"Contoh: 'depends': ['sale'] berarti modulmu butuh Sales ter-install. Lupa mendaftarkan file XML di 'data' adalah penyebab umum 'view saya tidak muncul'.",
 w:[null,"Data transaksi ada di database.","Password tidak boleh disimpan di kode modul.","Manifest adalah dictionary Python yang dibaca Odoo."]},
{k:"odoo",t:"mc",lv:3,q:"Model baru sudah dibuat, tapi user biasa tidak bisa membuka menunya dan log menampilkan peringatan 'no access rules'. Yang terlupa:",o:["File security/ir.model.access.csv yang memberi hak baca/tulis model itu ke grup user","Restart komputer","Menambah CSS","Mengganti nama class"],a:0,
 e:"Setiap model baru butuh aturan akses (read, write, create, unlink) per grup, dan file CSV-nya harus didaftarkan di manifest. Tanpa itu, hanya superuser yang bisa mengaksesnya.",
 w:[null,"Restart tidak menambah hak akses.","CSS tidak berhubungan dengan hak akses.","Nama class tidak memengaruhi hak akses."]},
{k:"odoo",t:"mc",lv:2,q:"Invoice pelanggan di Odoo versi modern (13 ke atas) disimpan di model…",o:["account.move","account.invoice","sale.invoice","res.invoice"],a:0,
 e:"Sejak Odoo 13, invoice, vendor bill, dan jurnal umum digabung di account.move (barisnya: account.move.line). Model penting lain: res.partner (kontak), sale.order, purchase.order, stock.picking (pengiriman/penerimaan), product.template/product.product.",
 w:[null,"account.invoice adalah model lama (Odoo 12 ke bawah).","Tidak ada model ini.","Tidak ada model ini."]},
{k:"odoo",t:"mc",lv:2,q:"Hasil ekspresi orders.mapped('amount_total') adalah…",kode:"orders = self.env['sale.order'].search([('state', '=', 'sale')])\ntotal = sum(orders.mapped('amount_total'))",o:["List nilai amount_total dari setiap order, sehingga sum() menjumlahkannya","Satu angka total","Recordset partner","Error karena orders berisi banyak record"],a:0,
 e:"mapped mengambil satu field dari semua record dalam recordset. Pola ini sering dipakai untuk KPI di dashboard: total penjualan yang sudah dikonfirmasi (state = 'sale').",
 w:[null,"Angka totalnya baru didapat setelah sum().","Itu terjadi jika mapped berisi field relasi seperti 'partner_id'.","mapped justru dirancang untuk recordset berisi banyak record."]},
{k:"odoo",t:"is",lv:2,q:"Lengkapi decorator agar computed field dihitung ulang saat field lain berubah: @api.________('qty', 'harga')",a:["depends"],
 h:"Artinya 'bergantung pada'.",
 e:"@api.depends. Decorator lain yang sering dipakai: @api.onchange (reaksi di form sebelum disimpan) dan @api.constrains (validasi saat disimpan)."},

// ---- BAB 14: Latihan membaca kode (gaya tes coding) ----
{k:"latihan",t:"mc",lv:1,q:"Output kode ini:",kode:"angka = [3, 8, 2, 8, 5]\nprint(max(angka), angka.index(8))",o:["8 1","8 3","8 [1, 3]","5 1"],a:0,vr:"py",
 e:"max → 8. index() mengembalikan posisi kemunculan PERTAMA, dan indeks dimulai dari 0: angka[1] = 8.",
 w:[null,"index mengembalikan kemunculan pertama, bukan terakhir.","index hanya mengembalikan satu angka.","Nilai terbesar adalah 8."]},
{k:"latihan",t:"mc",lv:1,q:"Output kode ini:",kode:"total = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    total += i\nprint(total)",o:["9","15","6","5"],a:0,vr:"py",
 e:"range(1, 6) = 1..5. continue melompati angka genap (2 dan 4). Yang dijumlah: 1 + 3 + 5 = 9.",
 w:[null,"15 = semua angka 1..5; padahal yang genap dilewati.","6 = jumlah angka genapnya (2 + 4).","5 hanya angka terakhir."]},
{k:"latihan",t:"mc",lv:2,q:"Output kode ini:",kode:"kata = \"data analis data bisnis data\"\nhitung = {}\nfor k in kata.split():\n    hitung[k] = hitung.get(k, 0) + 1\nprint(hitung[\"data\"])",o:["3","1","5","Error KeyError"],a:0,vr:"py",
 e:"Pola menghitung frekuensi yang sangat sering muncul di tes coding. get(k, 0) mengembalikan 0 jika kunci belum ada, jadi tidak terjadi KeyError. Kata 'data' muncul 3 kali. (Versi singkatnya: collections.Counter.)",
 w:[null,"Setiap kemunculan menambah 1.","5 adalah jumlah semua kata.","get(k, 0) mencegah KeyError."]},
{k:"latihan",t:"mc",lv:2,q:"Output kode ini:",kode:"sales = [(\"Andi\", 18.75), (\"Bima\", 4.7), (\"Citra\", 13.0)]\nterbaik = sorted(sales, key=lambda x: x[1], reverse=True)\nprint(terbaik[0][0])",o:["Andi","Citra","Bima","18.75"],a:0,vr:"py",
 e:"key=lambda x: x[1] berarti 'urutkan berdasarkan elemen ke-1 (angka)'. reverse=True = dari terbesar. terbaik[0] = (\"Andi\", 18.75), lalu [0] mengambil namanya.",
 w:[null,"Citra di urutan kedua.","Bima paling kecil.","[0][0] mengambil nama, bukan angka."]},
{k:"latihan",t:"mc",lv:1,q:"Output kode ini:",kode:"total = [14, 1.5, 6, 0.75, 7]\nbesar = [t for t in total if t >= 6]\nprint(len(besar))",o:["3","2","5","4"],a:0,vr:"py",
 e:"List comprehension dengan filter: ambil t yang ≥ 6 → [14, 6, 7]. Panjangnya 3. Setara FILTER di Excel atau WHERE di SQL.",
 w:[null,"6 juga memenuhi syarat ≥ 6.","Tidak semua nilai ≥ 6.","1,5 dan 0,75 tidak lolos."]},
{k:"latihan",t:"mc",lv:2,q:"Output kode ini:",kode:"a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",o:["[1, 2, 3, 4]","[1, 2, 3]","[4]","Error"],a:0,vr:"py",
 e:"b = a TIDAK menyalin list; a dan b menunjuk objek yang SAMA. Mengubah b ikut mengubah a. Untuk menyalin: b = a.copy() atau b = a[:]. Sumber bug yang sangat umum.",
 w:[null,"Itu jika b = a.copy().","append menambah ke list yang sudah ada.","Kode ini valid."]},
{k:"latihan",t:"mc",lv:1,q:"Output kode ini:",kode:"s = \"katak\"\nprint(s == s[::-1])",o:["True","False","katak","kataK"],a:0,vr:"py",
 e:"s[::-1] membalik string (slicing dengan langkah −1). 'katak' dibalik tetap 'katak' → palindrom → True. Soal palindrom sangat sering muncul di tes coding pemula.",
 w:[null,"Dibalik pun tetap sama.","Yang dicetak hasil perbandingan (bool), bukan string.","Huruf tidak berubah saat dibalik."]},
{k:"latihan",t:"mc",lv:2,q:"Output kode ini:",kode:"for i in range(1, 16):\n    if i % 15 == 0:\n        hasil = \"FizzBuzz\"\n    elif i % 3 == 0:\n        hasil = \"Fizz\"\n    elif i % 5 == 0:\n        hasil = \"Buzz\"\n    else:\n        hasil = str(i)\nprint(hasil)",o:["FizzBuzz","Fizz","Buzz","15"],a:0,vr:"py",
 e:"print berada DI LUAR loop (tidak menjorok), jadi hanya mencetak nilai terakhir, yaitu saat i = 15 → 'FizzBuzz'. Perhatikan juga urutan syaratnya: % 15 harus dicek lebih dulu — sama seperti IF bertingkat dan CASE WHEN.",
 w:[null,"15 juga habis dibagi 3, tapi syarat % 15 dicek lebih dulu.","15 juga habis dibagi 5, tapi syarat % 15 dicek lebih dulu.","15 hanya dicetak jika tidak habis dibagi 3 maupun 5."]},
{k:"latihan",t:"mc",lv:1,q:"Output kode ini:",kode:"nama = [\"Andi\", \"Bima\"]\ntarget = [20, 10]\nd = dict(zip(nama, target))\nprint(d[\"Bima\"])",o:["10","20","Bima","Error"],a:0,vr:"py",
 e:"zip memasangkan elemen dengan posisi yang sama: (\"Andi\", 20), (\"Bima\", 10). dict() mengubahnya menjadi kamus — seperti tabel lookup kecil.",
 w:[null,"20 adalah target Andi.","Yang diambil adalah nilai, bukan kuncinya.","Kunci 'Bima' ada."]},
{k:"latihan",t:"mc",lv:2,q:"Output kode ini:",kode:"n = 0\nfor i in range(3):\n    for j in range(i):\n        n += 1\nprint(n)",o:["3","9","6","0"],a:0,vr:"py",
 e:"Loop dalam berjalan i kali: saat i = 0 → 0 kali, i = 1 → 1 kali, i = 2 → 2 kali. Total 0 + 1 + 2 = 3. Latih membaca loop bersarang langkah demi langkah dengan tabel kecil di kertas.",
 w:[null,"9 jika loop dalam selalu 3 kali (range(3)).","6 jika i berjalan 1..3.","Loop dalam tetap berjalan saat i = 1 dan i = 2."]},
{k:"latihan",t:"mc",lv:1,q:"Output kode ini:",kode:"menit = 135\nprint(menit // 60, menit % 60)",o:["2 15","2.25 15","2 0.25","135 60"],a:0,vr:"py",
 e:"// = pembagian bulat (2 jam), % = sisa bagi (15 menit). Pasangan ini dipakai untuk konversi waktu, membagi halaman, dan mengecek genap/ganjil.",
 w:[null,"// membuang bagian desimal.","% menghasilkan sisa dalam menit, bukan pecahan jam.","Itu hanya mencetak angkanya."]},
{k:"latihan",t:"mc",lv:1,q:"Output kode ini:",kode:"kota = [\"Jakarta\", \"Bandung\", \"Jakarta\", \"Surabaya\", \"Bandung\"]\nprint(len(set(kota)))",o:["3","5","2","1"],a:0,vr:"py",
 e:"set membuang duplikat → {Jakarta, Bandung, Surabaya}. Jumlah nilai unik = 3. Setara COUNTA(UNIQUE()) dan COUNT(DISTINCT).",
 w:[null,"5 adalah jumlah semua elemen termasuk duplikat.","Ada 3 kota berbeda.","Ada lebih dari satu kota."]},
{k:"latihan",t:"mc",lv:2,q:"Saldo tabungan 100 bertambah 10% per bulan. Output kode ini:",kode:"saldo = 100\nbulan = 0\nwhile saldo < 150:\n    saldo = saldo * 1.1\n    bulan += 1\nprint(bulan)",o:["5","4","6","50"],a:0,vr:"py",
 e:"100 → 110 → 121 → 133,1 → 146,41 → 161,05. Setelah 4 bulan masih 146,41 (< 150), jadi butuh 5 bulan. Gunakan while saat jumlah perulangan belum diketahui.",
 w:[null,"Setelah 4 bulan saldonya 146,41 — belum 150.","Saldo sudah melewati 150 di bulan ke-5.","Bunga majemuk tidak bertambah 1 per bulan."]},
{k:"latihan",t:"mc",lv:2,q:"Output kode ini:",kode:"def tambah(a, b):\n    print(a + b)\n\nhasil = tambah(2, 3)\nprint(hasil)",o:["5\nNone","5\n5","None","5"],a:0,vr:"py",
 e:"Fungsi ini MENCETAK tapi tidak MENGEMBALIKAN nilai (tidak ada return), sehingga hasilnya None. Bedakan print (menampilkan ke layar) dan return (memberikan nilai ke pemanggil).",
 w:[null,"Tanpa return, hasil bernilai None.","print(a + b) di dalam fungsi tetap mencetak 5 lebih dulu.","print(hasil) juga mencetak sesuatu: None."]},
{k:"latihan",t:"mc",lv:2,q:"Output kode ini:",kode:"try:\n    x = int(\"12a\")\nexcept ValueError:\n    x = 0\nprint(x)",o:["0","12","Error ValueError","12a"],a:0,vr:"py",
 e:"int(\"12a\") gagal karena ada huruf → ValueError → masuk except → x = 0. Pola ini dipakai saat membersihkan data angka yang kotor.",
 w:[null,"int tidak mengambil angka di depan secara otomatis.","Error-nya ditangkap oleh except.","x bernilai angka 0 setelah except."]},
{k:"latihan",t:"mc",lv:1,q:"Output kode ini:",kode:"for no, nama in enumerate([\"Andi\", \"Bima\", \"Citra\"], start=1):\n    pass\nprint(no, nama)",o:["3 Citra","2 Citra","1 Andi","Error"],a:0,vr:"py",
 e:"enumerate memberi nomor sekaligus isinya; start=1 membuat nomor dimulai dari 1. Variabel loop tetap ada setelah loop selesai dan berisi nilai terakhir: (3, 'Citra').",
 w:[null,"Itu jika start=0 (default).","Itu nilai pada putaran pertama.","Variabel loop masih bisa diakses setelah loop di Python."]}
);

MATERI_PYTHON.push(
{k:"pandas",judul:"pandas — Excel Versi Kode untuk Analis Data",materi:`
<p><b>pandas</b> adalah library Python nomor satu untuk analisis data. Kalau kamu sudah paham Excel dan SQL, pandas tinggal belajar "cara menulisnya".</p>
<pre><code>import pandas as pd
df = pd.read_csv("penjualan.csv")   # atau pd.read_excel("file.xlsx")

df.head()          # 5 baris pertama
df.shape           # (baris, kolom) → (10, 5)
df.info()          # tipe data & jumlah yang tidak kosong
df.isna().sum()    # jumlah data kosong per kolom</code></pre>
<table class="mini-pivot"><tr><th>Excel</th><th>SQL</th><th>pandas</th></tr>
<tr><td>AutoFilter</td><td>WHERE</td><td><code>df[df["Wilayah"] == "Bandung"]</code></td></tr>
<tr><td>Sort</td><td>ORDER BY</td><td><code>df.sort_values("Total", ascending=False)</code></td></tr>
<tr><td>SUM</td><td>SUM()</td><td><code>df["Total"].sum()</code></td></tr>
<tr><td>Pivot / SUMIFS</td><td>GROUP BY</td><td><code>df.groupby("Sales")["Total"].sum()</code></td></tr>
<tr><td>COUNTIF tiap nilai</td><td>COUNT … GROUP BY</td><td><code>df["Sales"].value_counts()</code></td></tr>
<tr><td>XLOOKUP</td><td>LEFT JOIN</td><td><code>pd.merge(df, produk, on="Produk", how="left")</code></td></tr>
<tr><td>Pivot Table</td><td>SUM(CASE…)</td><td><code>pd.pivot_table(df, values="Total", index="Sales", columns="Wilayah", aggfunc="sum")</code></td></tr>
<tr><td>Rumus ditarik ke bawah</td><td>kolom hitung</td><td><code>df["Harga"] = df["Total"] / df["Qty"]</code></td></tr></table>
<div class="catatan">⚠️ Dua syarat filter: <code>(syarat1) &amp; (syarat2)</code> — pakai <code>&amp;</code> / <code>|</code>, bukan <code>and</code> / <code>or</code>, dan setiap syarat wajib diberi kurung.</div>
<div class="praktik">🧪 <b>Praktik:</b> buka Google Colab, upload <code>latihan/penjualan.csv</code> dari proyek ini, lalu ulangi semua contoh di tabel. Kodenya bisa langsung dipakai untuk notebook portofolio skripsimu.</div>`},

{k:"odoo",judul:"Python untuk Odoo — Model, Field & ORM",materi:`
<p>Odoo dibangun dengan Python. Memahami dasarnya membuatmu kuat di dua jalur: <b>Technical</b> (menulis modul) dan <b>Functional</b> (mengerti apa yang mungkin dan berapa sulitnya).</p>
<pre><code>from odoo import models, fields, api

class Kursus(models.Model):
    _name = 'akademi.kursus'          # → tabel akademi_kursus
    _description = 'Kursus'

    nama      = fields.Char('Nama Kursus', required=True)
    pengajar  = fields.Many2one('res.partner')       # banyak → satu
    qty       = fields.Integer()
    harga     = fields.Float()
    total     = fields.Float(compute='_compute_total')

    @api.depends('qty', 'harga')
    def _compute_total(self):
        for rec in self:                  # self = recordset (bisa banyak)
            rec.total = rec.qty * rec.harga</code></pre>
<p><b>ORM = SQL versi Python:</b></p>
<pre><code>env = self.env['res.partner']
env.search([('city', '=', 'Bandung')])          # SELECT … WHERE
env.search_count([('customer_rank', '>', 0)])   # COUNT
env.create({'name': 'Rina'})                    # INSERT
rec.write({'city': 'Jakarta'})                  # UPDATE
rec.unlink()                                    # DELETE
orders.mapped('amount_total')                   # ambil satu field dari semua record</code></pre>
<p><b>Domain</b> memakai notasi prefix: <code>['|', ('city','=','Bandung'), ('city','=','Jakarta')]</code>.</p>
<p><b>Struktur modul:</b></p>
<pre><code>akademi/
├── __manifest__.py        # nama, versi, depends, data
├── __init__.py
├── models/kursus.py       # model & logika (Python)
├── views/kursus_views.xml # form, list, menu (XML)
└── security/ir.model.access.csv   # hak akses — wajib untuk model baru</code></pre>
<div class="catatan">🔧 Kustomisasi yang benar memakai <b>inheritance</b> (<code>_inherit = 'sale.order'</code>), bukan mengedit kode inti. Model penting: <code>res.partner</code>, <code>sale.order</code>, <code>purchase.order</code>, <code>stock.picking</code>, <code>account.move</code>, <code>product.template</code>.</div>`},

{k:"latihan",judul:"Latihan Membaca Kode (Gaya Tes Coding)",materi:`
<p>Tes coding untuk fresh graduate sering berbentuk "apa output kode ini?" atau soal logika kecil. Kemampuan ini dilatih dengan <b>menelusuri kode baris demi baris</b>, bukan menghafal.</p>
<p><b>Teknik trace table</b> — tulis nilai variabel setiap langkah:</p>
<pre><code>total = 0
for i in range(1, 6):
    if i % 2 == 0: continue
    total += i

 i | genap? | total
 1 | tidak  | 1
 2 | ya     | 1   (dilewati)
 3 | tidak  | 4
 4 | ya     | 4   (dilewati)
 5 | tidak  | 9   → output 9</code></pre>
<p><b>Pola yang paling sering keluar di tes:</b></p>
<ul>
<li>Menghitung frekuensi dengan dict: <code>d[k] = d.get(k, 0) + 1</code></li>
<li>Mengurutkan dengan <code>key=lambda x: …</code></li>
<li>Filter dengan list comprehension: <code>[x for x in data if x &gt;= 6]</code></li>
<li>Nilai unik: <code>len(set(data))</code></li>
<li><code>//</code> dan <code>%</code>, palindrom dengan <code>s[::-1]</code>, FizzBuzz</li>
<li>Jebakan: <code>b = a</code> bukan salinan; fungsi tanpa <code>return</code> menghasilkan <code>None</code></li>
</ul>
<div class="catatan">💡 Setelah menjawab, jalankan kodenya sendiri di Google Colab atau <code>python</code> di terminal. Membandingkan tebakanmu dengan hasil sebenarnya adalah cara tercepat melatih "insting" membaca kode.</div>`}
);
