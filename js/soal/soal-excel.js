// ============ EXCEL — 6 bab, dataset penjualan ============
// Field: k=bab, t="mc"/"is", lv=1-3, q=pertanyaan, kode=rumus/kode yang ditampilkan,
// tb=dataset yang ditampilkan (lihat js/data/dataset.js), o=opsi, a=jawaban,
// e=penjelasan KENAPA, w=alasan tiap opsi salah (null untuk opsi benar), h=petunjuk.
// Catatan: Excel berbahasa/region Indonesia memakai titik koma (;) sebagai pemisah
// argumen. Di sini ditulis koma (,) — keduanya diterima di jawaban isian.

const SOAL_EXCEL = [
// ---- BAB 1: dasar rumus & referensi ----
{k:"dasar",t:"mc",lv:1,q:"Isi sel baru dianggap RUMUS oleh Excel jika diawali tanda…",o:["#","=","@","$"],a:1,
 e:"Excel hanya menghitung isi sel yang diawali '='. Tanpa itu, tulisan SUM(F2:F11) cuma dianggap teks biasa dan tidak dihitung.",
 w:["'#' muncul di kode error seperti #N/A atau #REF!, bukan pembuka rumus.",null,"'@' di Excel modern adalah operator khusus (implicit intersection), bukan pembuka rumus.","'$' dipakai untuk MENGUNCI referensi (contoh $A$1), bukan memulai rumus."]},
{k:"dasar",t:"mc",lv:1,tb:"penjualan",q:"Lihat sheet di atas. Hasil rumus ini adalah…",kode:"=SUM(D2:D11)",o:["30","35","10","45.250.000"],a:1,
 e:"Kolom D adalah Qty. SUM menjumlahkan semua angka di D2 sampai D11: 2+10+3+5+1+4+1+2+6+1 = 35.",
 w:["Hitungan meleset — coba jumlahkan lagi pelan-pelan dari D2 sampai D11.",null,"10 adalah BANYAKNYA baris data. Itu hasil COUNT, bukan SUM.","45.250.000 adalah total kolom F (Total), bukan kolom D (Qty)."]},
{k:"dasar",t:"mc",lv:1,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:"=COUNT(D2:D11)",o:["35","10","11","6"],a:1,
 e:"COUNT tidak menjumlahkan — ia MENGHITUNG berapa sel yang berisi angka. Dari D2 sampai D11 ada 10 sel berisi angka, jadi hasilnya 10.",
 w:["35 adalah hasil SUM (penjumlahan), bukan COUNT.",null,"11 kalau baris judul ikut dihitung — tapi D1 berisi teks 'Qty' dan memang tidak ada di range D2:D11.","6 adalah jumlah kolom tabel, tidak ada hubungannya dengan rumus ini."]},
{k:"dasar",t:"mc",lv:1,q:"Range F2:F11 artinya…",o:["Hanya sel F2 dan F11","Semua sel dari F2 sampai F11 (10 sel)","Kolom F sampai kolom ke-11","Sel F2 dikalikan F11"],a:1,
 e:"Tanda titik dua (:) artinya 'sampai'. F2:F11 = F2, F3, F4, … F11 → 10 sel berurutan.",
 w:["Untuk dua sel terpisah ditulis F2,F11 (pakai koma/titik koma), bukan titik dua.",null,"Angka 11 adalah nomor BARIS, bukan kolom.","Perkalian ditulis dengan *, contoh =F2*F11."]},
{k:"dasar",t:"mc",lv:2,q:"Sel G2 berisi rumus =D2*E2. Kalau G2 di-copy ke G3, rumusnya otomatis menjadi…",o:["=D2*E2","=D3*E3","=E3*F3","=D3*E2"],a:1,
 e:"Ini disebut referensi RELATIF: saat rumus di-copy satu baris ke bawah, semua referensi tanpa $ ikut turun satu baris. D2→D3, E2→E3. Inilah yang membuat kamu cukup menulis rumus sekali lalu tarik ke bawah.",
 w:["Akan tetap D2*E2 hanya jika referensinya dikunci: =$D$2*$E$2.",null,"Kolom tidak bergeser karena kamu meng-copy ke BAWAH, bukan ke samping.","Kedua referensi relatif, jadi keduanya ikut bergeser — tidak mungkin hanya satu."]},
{k:"dasar",t:"mc",lv:2,q:"Tarif pajak ada di sel J1. Kamu ingin setiap baris menghitung Total × pajak, lalu rumusnya di-copy ke bawah. Rumus yang AMAN:",o:["=F2*J1","=F2*$J$1","=$F$2*J1","=F2*J$2"],a:1,
 e:"$J$1 mengunci kolom J dan baris 1, jadi saat di-copy ke bawah semua baris tetap menunjuk tarif pajak di J1. F2 dibiarkan relatif supaya ikut berganti ke F3, F4, dst.",
 w:["Saat di-copy ke bawah, J1 akan bergeser jadi J2, J3… yang kosong → hasilnya 0.",null,"Ini mengunci F2, jadi SEMUA baris memakai Total baris 2 — salah besar.","J$2 mengunci baris 2, padahal tarif ada di baris 1."]},
{k:"dasar",t:"is",lv:2,q:"Saat mengetik referensi (misal A1), tombol keyboard untuk menambah tanda $ dengan cepat adalah F__ (isi angkanya saja)",a:["4"],
 h:"Angkanya antara 1 dan 5. Di laptop sering perlu ditekan bersama tombol Fn.",
 e:"F4 berputar: A1 → $A$1 → A$1 → $A1 → A1. Di banyak laptop tekan Fn+F4. Ini menghemat banyak waktu saat membuat laporan."},
{k:"dasar",t:"mc",lv:2,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:"=AVERAGE(F2:F11)",o:["4.525.000","45.250.000","4.700.000","3.500.000"],a:0,
 e:"AVERAGE = total ÷ banyaknya data. Total kolom F = 45.250.000, banyak data = 10, jadi 45.250.000 ÷ 10 = 4.525.000.",
 w:[null,"Itu TOTAL-nya (hasil SUM), belum dibagi 10.","4.700.000 adalah total milik Bima saja.","Angka ini tidak muncul dari perhitungan mana pun di data."]},
{k:"dasar",t:"is",lv:1,tb:"penjualan",q:"Rumus untuk mencari Total TERBESAR di kolom F: =____(F2:F11)",a:["max"],
 h:"Lawan katanya MIN.",
 e:"MAX mengambil nilai terbesar. Di data ini hasilnya 14.000.000 (Andi, Laptop). Pasangannya MIN untuk nilai terkecil (750.000)."},
{k:"dasar",t:"mc",lv:2,q:"Rumusmu =SUM(F2:F11, F13) ditolak Excel dengan pesan 'There's a problem with this formula'. Penyebab paling mungkin di laptop berbahasa/region Indonesia:",o:["Pemisah argumen harus titik koma: =SUM(F2:F11; F13)","SUM tidak boleh punya dua argumen","Rumus harus ditulis huruf kecil","Range harus memakai dua titik dua"],a:0,
 e:"Pengaturan region Indonesia memakai koma sebagai tanda desimal (3,5), sehingga Excel memakai TITIK KOMA (;) untuk memisahkan argumen. Ini jebakan paling sering untuk pemula di Indonesia — tutorial YouTube berbahasa Inggris memakai koma.",
 w:[null,"SUM boleh menerima banyak argumen, contoh =SUM(A1;B5;C2:C9).","Excel tidak peduli huruf besar/kecil pada nama fungsi.","Satu titik dua sudah benar untuk menulis range."]},

// ---- BAB 2: SUMIFS / COUNTIFS ----
{k:"sumifs",t:"mc",lv:1,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:'=SUMIF(A2:A11,"Andi",F2:F11)',o:["14.000.000","18.750.000","4.000.000","3"],a:1,
 e:"SUMIF mencari baris yang kolom A-nya 'Andi' (baris 2, 5, dan 9), lalu menjumlahkan kolom F di baris-baris itu: 14.000.000 + 750.000 + 4.000.000 = 18.750.000.",
 w:["Ini hanya transaksi Andi yang pertama. SUMIF menjumlahkan SEMUA baris yang cocok.",null,"Ini hanya transaksi terakhir Andi (Monitor).","3 adalah BANYAKNYA transaksi Andi — itu hasil COUNTIF, bukan SUMIF."]},
{k:"sumifs",t:"mc",lv:1,q:"Apa beda utama SUMIF dan SUMIFS?",o:["SUMIFS bisa banyak syarat, dan range yang dijumlah ditulis PALING DEPAN","Tidak ada bedanya","SUMIF untuk teks, SUMIFS untuk angka","SUMIFS hanya ada di Google Sheets"],a:0,
 e:"SUMIF(range_syarat, syarat, range_jumlah) → satu syarat, range jumlah di BELAKANG. SUMIFS(range_jumlah, range_syarat1, syarat1, range_syarat2, syarat2, …) → banyak syarat, range jumlah di DEPAN. Tips: biasakan pakai SUMIFS saja, karena bisa dipakai untuk satu maupun banyak syarat.",
 w:[null,"Urutan argumennya berbeda — inilah sumber error paling sering.","Keduanya bisa memakai syarat teks maupun angka.","SUMIFS ada di Excel sejak versi 2007."]},
{k:"sumifs",t:"mc",lv:2,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:'=SUMIFS(F2:F11, A2:A11,"Andi", B2:B11,"Jakarta")',o:["18.750.000","14.000.000","18.000.000","4.000.000"],a:2,
 e:"Dua syarat harus terpenui SEKALIGUS: Sales = Andi DAN Wilayah = Jakarta. Yang cocok hanya baris 2 (14.000.000) dan baris 9 (4.000.000). Baris 5 milik Andi tapi di Surabaya, jadi tidak ikut. Total = 18.000.000.",
 w:["Itu total semua transaksi Andi — syarat wilayah Jakarta diabaikan.","Itu hanya baris 2. Baris 9 (Andi, Jakarta, Monitor) juga cocok.",null,"Itu hanya baris 9. Baris 2 juga cocok."]},
{k:"sumifs",t:"mc",lv:1,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:'=COUNTIF(B2:B11,"Jakarta")',o:["3","4","25.200.000","5"],a:1,
 e:"COUNTIF menghitung ada berapa sel di B2:B11 yang isinya 'Jakarta': baris 2, 4, 7, dan 9 → 4 transaksi.",
 w:["Coba cek lagi baris 7 (Bima, Jakarta, Keyboard).",null,"Itu total RUPIAH penjualan Jakarta (hasil SUMIF), bukan banyaknya transaksi.","Hanya ada 4 baris Jakarta."]},
{k:"sumifs",t:"mc",lv:2,tb:"penjualan",q:"Hasil rumus ini adalah… (tanda <> artinya 'tidak sama dengan')",kode:'=COUNTIFS(C2:C11,"Laptop", B2:B11,"<>Jakarta")',o:["1","2","3","4"],a:1,
 e:"Laptop ada di baris 2 (Jakarta), 6 (Bandung), dan 8 (Surabaya). Syarat kedua membuang yang Jakarta, jadi tersisa 2 transaksi.",
 w:["Ada dua Laptop di luar Jakarta: Bandung (Dewi) dan Surabaya (Citra).",null,"3 adalah semua transaksi Laptop — syarat <>Jakarta belum diterapkan.","Hanya ada 3 transaksi Laptop di seluruh data."]},
{k:"sumifs",t:"mc",lv:2,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:'=SUMIFS(F2:F11, F2:F11,">=5000000")',o:["34.000.000","27.000.000","45.250.000","4"],a:0,
 e:"Range syarat boleh sama dengan range yang dijumlah. Total yang ≥ 5 juta: 14.000.000 + 6.000.000 + 7.000.000 + 7.000.000 = 34.000.000. Syarat perbandingan ditulis dalam tanda kutip: \">=5000000\".",
 w:[null,"Ada yang terlewat: 14 + 6 + 7 + 7, ada DUA transaksi 7 juta (Dewi & Citra).","Itu total semua transaksi tanpa syarat.","4 adalah BANYAKNYA transaksi ≥ 5 juta — itu hasil COUNTIFS."]},
{k:"sumifs",t:"is",lv:2,tb:"penjualan",q:"Lengkapi rumus untuk menjumlahkan Qty milik Bima:  =SUMIFS(____, A2:A11,\"Bima\")",a:["d2:d11","$d$2:$d$11"],
 h:"Argumen pertama SUMIFS adalah range yang mau DIJUMLAH. Qty ada di kolom apa?",
 e:"Argumen pertama SUMIFS selalu range yang dijumlah. Qty ada di kolom D, jadi D2:D11. Hasilnya 10 + 4 + 1 = 15."},
{k:"sumifs",t:"mc",lv:3,tb:"penjualan",q:"Sel H2 berisi nama sales 'Citra'. Rumus SUMIFS yang benar memakai H2 sebagai syarat:",o:['=SUMIFS(F2:F11,A2:A11,"H2")','=SUMIFS(F2:F11,A2:A11,H2)','=SUMIFS(A2:A11,F2:F11,H2)','=SUMIFS(F2:F11,H2,A2:A11)'],a:1,
 e:"Referensi sel ditulis TANPA tanda kutip. Dengan H2 sebagai syarat, kamu cukup mengganti isi H2 (misal jadi 'Dewi') dan hasilnya ikut berubah — ini dasar membuat laporan dinamis. Hasil untuk Citra: 13.000.000.",
 w:["Dengan kutip, Excel mencari sales yang namanya benar-benar 'H2' → hasilnya 0.",null,"Urutannya terbalik: yang dijumlah harus F (Total), bukan A (nama).","Urutan argumen salah: setelah range jumlah harus range syarat, lalu syaratnya."]},
{k:"sumifs",t:"mc",lv:3,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:'=SUMIFS(F2:F11, B2:B11,"Bandung", C2:C11,"<>Mouse")',o:["10.500.000","9.000.000","1.500.000","7.000.000"],a:1,
 e:"Bandung ada di baris 3 (Mouse, 1.500.000), 6 (Laptop, 7.000.000), dan 11 (Monitor, 2.000.000). Syarat <>Mouse membuang baris 3. Hasil: 7.000.000 + 2.000.000 = 9.000.000.",
 w:["Itu total Bandung tanpa membuang Mouse.",null,"Itu justru nilai Mouse yang seharusnya DIBUANG.","Monitor Bima di Bandung (2.000.000) juga ikut."]},
{k:"sumifs",t:"mc",lv:2,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:'=AVERAGEIFS(F2:F11, C2:C11,"Laptop")',o:["7.000.000","9.333.333","28.000.000","14.000.000"],a:1,
 e:"AVERAGEIFS = rata-rata dengan syarat. Total Laptop: 14.000.000, 7.000.000, 7.000.000 → jumlah 28.000.000 ÷ 3 transaksi = 9.333.333 (dibulatkan).",
 w:["7 juta adalah harga satuan Laptop, bukan rata-rata total transaksinya.",null,"Itu jumlahnya (SUMIFS), belum dibagi 3.","Itu hanya transaksi terbesar (Andi, 2 Laptop)."]},
{k:"sumifs",t:"mc",lv:3,tb:"penjualan",q:"Kamu ingin menghitung transaksi yang Total-nya antara 1 juta dan 5 juta (termasuk batasnya). Rumus yang tepat:",o:['=COUNTIFS(F2:F11,">=1000000", F2:F11,"<=5000000")','=COUNTIF(F2:F11,"1000000-5000000")','=COUNTIFS(F2:F11,">=1000000 AND <=5000000")','=SUMIFS(F2:F11,">=1000000","<=5000000")'],a:0,
 e:"Untuk rentang, tulis kolom yang SAMA dua kali dengan dua syarat: ≥ batas bawah dan ≤ batas atas. Yang cocok: 1.500.000, 4.000.000, 1.200.000, 1.800.000, 2.000.000 → hasilnya 5.",
 w:[null,"Excel tidak mengerti tanda strip sebagai rentang — ia mencari teks '1000000-5000000' persis.","AND tidak bisa ditulis di dalam teks syarat. Pecah jadi dua pasang argumen.","SUMIFS menjumlahkan (bukan menghitung), dan susunan argumennya juga salah."]},

// ---- BAB 3: XLOOKUP ----
{k:"xlookup",t:"mc",lv:1,q:"XLOOKUP dipakai untuk…",o:["Mencari sebuah nilai di satu kolom, lalu mengambil data yang sejajar di kolom lain","Menjumlah dengan syarat","Mengurutkan data","Membuat grafik"],a:0,
 e:"Bayangkan buku telepon: cari NAMA (kolom pencarian), ambil NOMOR-nya (kolom hasil). XLOOKUP(yang_dicari, kolom_pencarian, kolom_hasil). Di dunia kerja ini dipakai untuk menggabungkan data dari dua sheet, misalnya mengambil harga produk dari master data.",
 w:[null,"Itu tugas SUMIFS.","Itu fungsi SORT atau menu Data → Sort.","Grafik dibuat dari menu Insert → Chart."]},
{k:"xlookup",t:"mc",lv:1,tb:"produkSheet",q:"Hasil rumus ini adalah…",kode:'=XLOOKUP("Monitor", A2:A5, C2:C5)',o:["Komputer","2.000.000","Monitor","3"],a:1,
 e:"Excel mencari 'Monitor' di A2:A5 → ketemu di baris 4. Lalu ia mengambil isi kolom hasil (C) di baris yang sama: C4 = 2.000.000.",
 w:["Komputer ada di kolom B. Kolom hasil di rumus ini adalah C (Harga).",null,"Itu nilai yang DICARI, bukan yang dikembalikan.","XLOOKUP mengembalikan isi sel, bukan nomor posisinya (itu tugas MATCH/XMATCH)."]},
{k:"xlookup",t:"mc",lv:2,tb:"produkSheet",q:"Hasil rumus ini adalah…",kode:'=XLOOKUP("Mouse", A2:A5, B2:B5)',o:["150.000","Aksesoris","Komputer","#N/A"],a:1,
 e:"Mouse ditemukan di baris 3. Kolom hasilnya B (Kategori), jadi yang diambil B3 = Aksesoris.",
 w:["150.000 ada di kolom C. Rumus ini mengambil dari kolom B.",null,"Komputer adalah kategori Laptop dan Monitor, bukan Mouse.","#N/A hanya muncul kalau yang dicari tidak ditemukan. Mouse ada di tabel."]},
{k:"xlookup",t:"mc",lv:2,tb:"produkSheet",q:"Hasil rumus ini adalah…",kode:'=XLOOKUP("Printer", A2:A5, C2:C5)',o:["0","#N/A","Printer","Sel kosong"],a:1,
 e:"Printer tidak ada di A2:A5, sehingga XLOOKUP mengembalikan error #N/A (Not Available). Solusinya: isi argumen ke-4 if_not_found, contoh =XLOOKUP(\"Printer\",A2:A5,C2:C5,\"Tidak ada\").",
 w:["XLOOKUP tidak mengubah 'tidak ketemu' menjadi 0 kecuali kamu memintanya di argumen ke-4.",null,"XLOOKUP tidak mengembalikan nilai yang dicari.","Tanpa argumen ke-4 hasilnya error, bukan kosong."]},
{k:"xlookup",t:"is",lv:2,q:"Lengkapi agar muncul teks Tidak ada saat produk tidak ditemukan:  =XLOOKUP(H2, A2:A5, C2:C5, ____)",a:['"tidak ada"'],
 h:"Argumen ke-4 berupa TEKS — teks di dalam rumus Excel harus diapit tanda kutip.",
 e:"Argumen ke-4 XLOOKUP adalah if_not_found. Karena isinya teks, wajib diapit kutip ganda: \"Tidak ada\". Laporan jadi rapi, tidak penuh #N/A."},
{k:"xlookup",t:"mc",lv:2,q:"Kelebihan XLOOKUP dibanding VLOOKUP:",o:["Bisa mencari ke kiri dan tidak perlu menghitung nomor kolom","Argumennya lebih banyak sehingga lebih akurat","VLOOKUP tidak bisa mencari teks","Tidak ada bedanya"],a:0,
 e:"VLOOKUP hanya bisa mengambil kolom di KANAN kolom pencarian, dan kamu harus menulis nomor kolom (misal 3) — kalau ada kolom baru disisipkan, nomornya jadi salah. XLOOKUP langsung menunjuk kolom hasil, jadi lebih aman. Tapi tetap pelajari VLOOKUP: banyak file kantor lama masih memakainya.",
 w:[null,"Akurasi tidak ditentukan banyaknya argumen.","VLOOKUP bisa mencari teks.","Bedanya besar — lihat penjelasan."]},
{k:"xlookup",t:"mc",lv:3,q:"Di sheet Penjualan, kamu mengisi Kategori di G2 dengan mengambil dari sheet Produk berdasarkan nama produk di C2, lalu rumusnya di-copy sampai G11. Rumus yang PALING AMAN:",o:["=XLOOKUP(C2, Produk!$A$2:$A$5, Produk!$B$2:$B$5)","=XLOOKUP(C2, Produk!A2:A5, Produk!B2:B5)","=XLOOKUP(Produk!A2:A5, C2, Produk!B2:B5)","=XLOOKUP(C2, Produk!$B$2:$B$5, Produk!$A$2:$A$5)"],a:0,
 e:"C2 dibiarkan relatif supaya berganti ke C3, C4… saat di-copy. Range tabel Produk DIKUNCI dengan $ supaya tidak ikut bergeser. Pola 'nilai relatif + tabel referensi absolut' ini dipakai di hampir semua laporan kantor.",
 w:[null,"Benar di G2, tapi saat di-copy ke bawah range ikut bergeser (A3:A6, A4:A7…) dan baris atas tabel tidak lagi ikut dicari → hasil salah atau #N/A.","Urutannya terbalik: argumen pertama adalah NILAI yang dicari (C2).","Kolom pencarian dan kolom hasil tertukar: ini mencari nama produk di kolom Kategori."]},
{k:"xlookup",t:"mc",lv:2,tb:"produkSheet",q:"Hasil rumus VLOOKUP ini adalah…",kode:'=VLOOKUP("Mouse", A2:C5, 3, FALSE)',o:["Aksesoris","150.000","Mouse","#REF!"],a:1,
 e:"VLOOKUP mencari 'Mouse' di kolom PERTAMA range (A), lalu mengambil kolom ke-3 dari range A:C, yaitu C (Harga) → 150.000. FALSE = harus cocok persis.",
 w:["Aksesoris ada di kolom ke-2 range, bukan ke-3.",null,"Kolom ke-1 adalah kolom pencarian itu sendiri.","#REF! muncul kalau nomor kolom melebihi lebar range (misal 4 untuk A:C)."]},
{k:"xlookup",t:"mc",lv:3,q:"Kenapa VLOOKUP tanpa argumen ke-4 (atau dengan TRUE) berbahaya untuk mencari nama produk?",o:["Ia memakai pencocokan perkiraan, sehingga bisa mengembalikan data yang SALAH tanpa memberi error","Ia lebih lambat","Ia tidak bisa membaca huruf kapital","Ia selalu menghasilkan #N/A"],a:0,
 e:"Mode perkiraan (TRUE) dirancang untuk tabel bertingkat yang terurut, seperti tabel diskon. Untuk mencari nama atau kode, ia bisa mengambil baris tetangga tanpa error — laporan terlihat benar padahal salah. Selalu tulis FALSE di VLOOKUP. XLOOKUP aman karena default-nya pencocokan persis.",
 w:[null,"Masalahnya akurasi, bukan kecepatan.","VLOOKUP memang tidak membedakan huruf besar/kecil, tapi itu bukan bahayanya.","Justru bahayanya karena ia TIDAK memberi error."]},

// ---- BAB 4: IF bertingkat ----
{k:"if",t:"mc",lv:1,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:'=IF(F2>=5000000, "Target", "Belum")',o:["Target","Belum","TRUE","14000000"],a:0,
 e:"IF(syarat, jika_benar, jika_salah). F2 = 14.000.000, dan 14.000.000 ≥ 5.000.000 itu BENAR, jadi hasilnya teks pertama: Target.",
 w:[null,"'Belum' hanya muncul jika syaratnya salah.","IF mengembalikan teks yang kamu tentukan, bukan TRUE/FALSE.","IF tidak mengembalikan nilai sel aslinya."]},
{k:"if",t:"mc",lv:1,tb:"penjualan",q:"Rumus yang sama dipakai di baris 5. Hasilnya…",kode:'=IF(F5>=5000000, "Target", "Belum")',o:["Target","Belum","750000","#VALUE!"],a:1,
 e:"F5 = 750.000. Apakah 750.000 ≥ 5.000.000? Tidak. Syarat salah → yang dipakai argumen ketiga: Belum.",
 w:["Syaratnya tidak terpenuhi untuk 750.000.",null,"IF mengembalikan teks pilihanmu, bukan nilai selnya.","Tidak ada error: semua argumennya valid."]},
{k:"if",t:"mc",lv:2,tb:"penjualan",q:"Hasil rumus IF bertingkat ini untuk baris 3 adalah…",kode:'=IF(F3>=5000000, "Tinggi", IF(F3>=1500000, "Sedang", "Rendah"))',o:["Tinggi","Sedang","Rendah","Error"],a:1,
 e:"F3 = 1.500.000. Syarat pertama (≥ 5 juta) salah → masuk ke IF kedua. Syarat kedua: 1.500.000 ≥ 1.500.000 → BENAR, karena ≥ termasuk 'sama dengan'. Hasil: Sedang.",
 w:["1,5 juta belum mencapai 5 juta.",null,"Hati-hati: ≥ berarti 'lebih besar ATAU SAMA DENGAN'. 1.500.000 sama dengan batasnya.","Rumus ini valid: IF di dalam IF diperbolehkan."]},
{k:"if",t:"mc",lv:2,tb:"penjualan",q:"Rumus yang sama untuk baris 7 menghasilkan…",kode:'=IF(F7>=5000000, "Tinggi", IF(F7>=1500000, "Sedang", "Rendah"))',o:["Tinggi","Sedang","Rendah","Belum"],a:2,
 e:"F7 = 1.200.000. Tidak ≥ 5 juta, tidak ≥ 1,5 juta → jatuh ke pilihan terakhir: Rendah.",
 w:["1,2 juta jauh di bawah 5 juta.","1.200.000 masih di bawah batas Sedang (1.500.000).",null,"'Belum' tidak ada di rumus ini."]},
{k:"if",t:"mc",lv:2,q:"Rumus ini memberi hasil yang salah. Kenapa?",kode:'=IF(F2>=1500000, "Sedang", IF(F2>=5000000, "Tinggi", "Rendah"))',o:["Nilai 14 juta jadi 'Sedang', karena syarat pertama sudah terpenuhi lebih dulu","Excel tidak bisa membaca angka besar","IF tidak boleh bersarang","Kurang tanda $"],a:0,
 e:"Excel memeriksa syarat dari KIRI ke KANAN dan berhenti di syarat pertama yang benar. 14 juta ≥ 1,5 juta sudah benar, jadi hasilnya 'Sedang' dan syarat 'Tinggi' tidak pernah diperiksa. Aturan emas: untuk syarat ≥, urutkan dari batas TERBESAR ke terkecil.",
 w:[null,"Angka 14 juta tidak bermasalah untuk Excel.","IF bersarang diperbolehkan (sampai 64 tingkat).","$ tidak ada hubungannya dengan logika urutan syarat."]},
{k:"if",t:"mc",lv:2,q:"Rumus IFS yang setara dengan IF bertingkat Tinggi/Sedang/Rendah:",o:['=IFS(F2>=5000000,"Tinggi", F2>=1500000,"Sedang", TRUE,"Rendah")','=IFS(F2>=5000000,"Tinggi","Sedang","Rendah")','=IFS("Tinggi",F2>=5000000,"Sedang",F2>=1500000)','=IF(F2>=5000000,"Tinggi","Sedang","Rendah")'],a:0,
 e:"IFS ditulis berpasangan: syarat1, hasil1, syarat2, hasil2, … Untuk 'selain itu', pakai TRUE sebagai syarat terakhir (TRUE selalu benar). Lebih mudah dibaca daripada IF bertumpuk.",
 w:[null,"'Sedang' dan 'Rendah' tidak punya syarat — IFS butuh pasangan syarat-hasil.","Urutannya terbalik: syarat dulu, baru hasilnya.","IF hanya menerima 3 argumen."]},
{k:"if",t:"mc",lv:3,tb:"penjualan",q:"Berapa baris yang mendapat 'Bonus' dengan rumus ini?",kode:'=IF(AND(B2="Jakarta", F2>=5000000), "Bonus", "-")',o:["1","2","3","4"],a:1,
 e:"AND = SEMUA syarat harus benar. Baris Jakarta: 2 (14 jt ✓), 4 (6 jt ✓), 7 (1,2 jt ✗), 9 (4 jt ✗). Jadi hanya 2 baris yang mendapat Bonus.",
 w:["Baris 4 (Citra, Jakarta, 6 juta) juga memenuhi kedua syarat.",null,"Baris 9 (Andi, Jakarta) hanya 4 juta — belum ≥ 5 juta.","Itu banyaknya baris Jakarta. Syarat ≥ 5 juta belum diterapkan."]},
{k:"if",t:"mc",lv:3,tb:"penjualan",q:"Berapa baris yang hasilnya 'Prioritas'?",kode:'=IF(OR(C2="Laptop", D2>=5), "Prioritas", "Biasa")',o:["3","5","6","7"],a:2,
 e:"OR = cukup SALAH SATU syarat benar. Laptop: baris 2, 6, 8. Qty ≥ 5: baris 3 (10), 5 (5), 10 (6). Tidak ada baris yang dihitung dua kali → 6 baris.",
 w:["Itu hanya baris Laptop. Baris dengan Qty ≥ 5 juga ikut.","Cek lagi baris 5: Qty-nya tepat 5, dan ≥ 5 termasuk 5.",null,"Hanya ada 6 baris yang memenuhi."]},
{k:"if",t:"is",lv:2,q:"Lengkapi agar selain itu tertulis Eceran:  =IF(D2>=5, \"Grosir\", ____)",a:['"eceran"'],
 h:"Teks di dalam rumus selalu diapit tanda kutip ganda.",
 e:"Argumen ketiga IF adalah hasil jika syarat SALAH. Karena berupa teks, tulis \"Eceran\" dengan kutip ganda."},
{k:"if",t:"mc",lv:2,q:"Rumus ini error. Kenapa?",kode:'=IF(F2>=5.000.000; "Tinggi"; "Rendah")',o:["Angka di dalam rumus ditulis tanpa pemisah ribuan: 5000000","Pemisahnya harus koma","IF tidak menerima teks","Kurang tanda kurung"],a:0,
 e:"Titik ribuan hanyalah TAMPILAN (format angka). Di dalam rumus, angka ditulis polos: 5000000. Titik koma di rumus ini justru benar untuk Excel berbahasa/region Indonesia.",
 w:[null,"Di Excel region Indonesia, titik koma adalah pemisah yang benar.","IF boleh mengembalikan teks.","Jumlah kurungnya sudah lengkap."]},

// ---- BAB 5: Pivot Table ----
{k:"pivot",t:"mc",lv:1,q:"Pivot table paling cocok untuk…",o:["Meringkas data besar (total/jumlah per kategori) tanpa menulis rumus","Mengedit data mentah","Mencari satu nilai","Membuat tabel kosong"],a:0,
 e:"Pivot table membuat ringkasan seperti 'total penjualan per sales per wilayah' hanya dengan drag-and-drop. Untuk data 10.000 baris, ini jauh lebih cepat daripada menulis ratusan SUMIFS. Ini skill yang hampir selalu dites saat seleksi data analyst atau admin.",
 w:[null,"Pivot hanya membaca data mentah; ia tidak mengubahnya.","Untuk mencari satu nilai, pakai XLOOKUP.","Pivot selalu dibuat dari data yang sudah ada."]},
{k:"pivot",t:"mc",lv:1,q:"Menu untuk membuat pivot table di Excel:",o:["Insert → PivotTable","Home → Format","Data → Sort","View → Freeze Panes"],a:0,
 e:"Klik salah satu sel di dalam data → Insert → PivotTable → pilih letaknya (biasanya New Worksheet) → OK. Lalu seret kolom ke area Rows, Columns, Values, dan Filters.",
 w:[null,"Format hanya untuk tampilan sel.","Sort hanya mengurutkan data.","Freeze Panes hanya mengunci baris/kolom saat scroll."]},
{k:"pivot",t:"mc",lv:2,q:"Kamu ingin melihat total penjualan PER SALES. Kolom 'Sales' diletakkan di area…",o:["Rows","Values","Filters","Tidak perlu dimasukkan"],a:0,
 e:"Rows = apa yang mau dijadikan baris/kelompok (di sini nama sales). Values = angka yang mau dihitung (kolom Total, dengan Sum). Cara gampang mengingat: Rows itu seperti GROUP BY di SQL.",
 w:[null,"Values untuk angka yang dihitung (Total). Nama sales bukan angka untuk dijumlah.","Filters hanya untuk menyaring seluruh laporan (misal hanya Jakarta), bukan mengelompokkan.","Tanpa Sales di Rows, pivot hanya menampilkan satu angka total."]},
{k:"pivot",t:"mc",lv:2,tb:"penjualan",q:"Pivot: Rows = Sales, Values = Sum of Total. Angka di baris 'Citra' adalah…",o:["6.000.000","13.000.000","7.000.000","2"],a:1,
 e:"Pivot menjumlahkan semua transaksi Citra: 6.000.000 (Monitor) + 7.000.000 (Laptop) = 13.000.000. Hasilnya sama persis dengan =SUMIFS(F2:F11,A2:A11,\"Citra\") — pivot adalah cara cepat membuat banyak SUMIFS sekaligus.",
 w:["Itu hanya transaksi pertama Citra.",null,"Itu hanya transaksi kedua Citra.","2 adalah banyaknya transaksi (Count), bukan Sum."]},
{k:"pivot",t:"mc",lv:2,tb:"penjualan",q:"Pivot: Rows = Wilayah, Values = Sum of Total. Wilayah dengan nilai terbesar:",o:["Jakarta — 25.200.000","Bandung — 10.500.000","Surabaya — 9.550.000","Jakarta — 4"],a:0,
 e:"Jakarta: 14.000.000 + 6.000.000 + 1.200.000 + 4.000.000 = 25.200.000. Bandung 10.500.000, Surabaya 9.550.000. Totalnya 45.250.000 — selalu cek bahwa Grand Total pivot sama dengan total data aslinya.",
 w:[null,"Bandung di urutan kedua.","Surabaya justru paling kecil.","4 adalah Count (banyaknya transaksi), bukan Sum."]},
{k:"pivot",t:"mc",lv:2,tb:"penjualan",q:"Pivot: Rows = Produk, Values = Count of Produk. Angka untuk Monitor adalah…",o:["3","6","12.000.000","1"],a:0,
 e:"Count menghitung BANYAKNYA baris. Monitor muncul di baris 4, 9, dan 11 → 3 transaksi.",
 w:[null,"6 adalah total Qty Monitor (3+2+1), bukan banyaknya transaksi.","12.000.000 adalah Sum of Total Monitor.","Ada 3 transaksi Monitor."]},
{k:"pivot",t:"mc",lv:3,tb:"penjualan",q:"Pivot: Rows = Sales, Columns = Wilayah, Values = Sum of Total. Isi sel pertemuan Andi × Jakarta adalah…",o:["18.000.000","14.000.000","18.750.000","25.200.000"],a:0,
 e:"Columns menambah dimensi kedua (tabel silang). Andi di Jakarta: 14.000.000 + 4.000.000 = 18.000.000. Ini sama dengan SUMIFS dengan dua syarat yang kamu kerjakan di bab sebelumnya.",
 w:[null,"Itu hanya satu transaksi Andi di Jakarta — ada dua.","Itu total Andi di SEMUA wilayah (termasuk Surabaya).","Itu total Jakarta untuk semua sales."]},
{k:"pivot",t:"mc",lv:2,q:"Kamu menambah 5 baris transaksi baru di bawah data, tapi pivot belum berubah. Yang harus dilakukan:",o:["Klik kanan pivot → Refresh (dan pastikan sumber datanya mencakup baris baru — paling aman ubah data jadi Table dengan Ctrl+T)","Buat file Excel baru","Ketik manual angkanya di pivot","Tunggu, nanti update sendiri"],a:0,
 e:"Pivot TIDAK otomatis update. Selalu Refresh setelah data berubah. Kalau sumbernya range biasa (A1:F11), baris baru di luar range tidak terbaca — itulah kenapa data sebaiknya diubah jadi Excel Table dulu, supaya range-nya ikut memanjang.",
 w:[null,"Tidak perlu: cukup Refresh.","Mengetik manual di pivot akan ditolak atau merusak laporan.","Pivot tidak pernah update sendiri tanpa Refresh."]},
{k:"pivot",t:"mc",lv:3,q:"Pivot menampilkan 'Count of Total', padahal kamu ingin jumlah rupiah. Perbaikannya:",o:["Value Field Settings → ganti ke Sum","Hapus kolom Total","Pindahkan Total ke Rows","Ganti format angka menjadi Rupiah"],a:0,
 e:"Excel memilih Count otomatis jika kolomnya mengandung sel kosong atau teks. Klik panah pada field di area Values → Value Field Settings → Sum. Sekalian cek apakah ada sel Total yang kosong atau berisi teks di data mentah.",
 w:[null,"Kolom Total justru yang kamu butuhkan.","Di Rows, Total akan jadi daftar kelompok, bukan dijumlah.","Format hanya mengubah tampilan, bukan cara menghitung."]},
{k:"pivot",t:"is",lv:2,q:"Shortcut untuk mengubah range data menjadi Excel Table (agar pivot otomatis mencakup baris baru): Ctrl + ____",a:["t"],
 h:"Huruf pertama dari kata 'Table'.",
 e:"Ctrl+T (Insert → Table). Table punya nama, range yang otomatis memanjang, dan filter bawaan. Ini kebiasaan yang membedakan pengguna Excel pemula dan menengah."},

// ---- BAB 6: Conditional Formatting ----
{k:"cf",t:"mc",lv:1,q:"Conditional formatting berfungsi untuk…",o:["Mengubah tampilan sel (warna, ikon, bar) otomatis berdasarkan nilainya","Mengubah nilai sel","Mengurutkan data","Menghapus data duplikat"],a:0,
 e:"Conditional formatting (CF) membuat data 'berbicara': transaksi besar langsung hijau, target yang belum tercapai merah. Nilai selnya tetap sama — hanya tampilannya yang berubah.",
 w:[null,"CF tidak pernah mengubah isi sel.","Mengurutkan memakai Sort.","Untuk itu pakai Data → Remove Duplicates (walau CF bisa MENANDAI duplikat)."]},
{k:"cf",t:"mc",lv:1,q:"Menu Conditional Formatting ada di tab…",o:["Home","Insert","Data","Review"],a:0,
 e:"Home → Conditional Formatting. Di sana ada Highlight Cells Rules, Top/Bottom Rules, Data Bars, Color Scales, Icon Sets, dan New Rule untuk aturan berbasis rumus.",
 w:[null,"Tab Insert untuk tabel, grafik, dan gambar.","Tab Data untuk sort, filter, dan validasi.","Tab Review untuk komentar dan proteksi."]},
{k:"cf",t:"mc",lv:1,tb:"penjualan",q:"Rule: Highlight Cells → Greater Than 5000000 diterapkan pada F2:F11. Berapa sel yang berwarna?",o:["3","4","5","6"],a:1,
 e:"Greater Than artinya LEBIH DARI (bukan sama dengan). Nilai > 5 juta: 14 juta, 6 juta, 7 juta, 7 juta → 4 sel.",
 w:["Ada dua transaksi 7 juta (Dewi dan Citra).",null,"Tidak ada nilai tepat 5 juta yang bisa menambah hitungan.","Hanya 4 nilai yang di atas 5 juta."]},
{k:"cf",t:"mc",lv:2,tb:"penjualan",q:"Rule 'Top 3 Items' pada F2:F11 akan mewarnai…",o:["14.000.000, 7.000.000, 7.000.000","14.000.000, 7.000.000, 6.000.000","Tiga baris pertama","14.000.000 saja"],a:0,
 e:"Top 3 = tiga nilai terbesar: 14 juta, lalu dua nilai 7 juta. 6 juta ada di urutan ke-4, jadi tidak diwarnai. (Kalau ada nilai yang sama di batas, Excel bisa mewarnai lebih dari 3 sel.)",
 w:[null,"6 juta berada di peringkat 4 — ada DUA nilai 7 juta di atasnya.","Top/Bottom melihat NILAI, bukan posisi baris.","Itu Top 1, bukan Top 3."]},
{k:"cf",t:"mc",lv:2,q:"Kamu ingin mewarnai SELURUH BARIS (A sampai F) jika Total ≥ 5 juta. Cara yang benar:",o:["New Rule → 'Use a formula…': =$F2>=5000000, diterapkan ke A2:F11","Highlight Cells → Greater Than pada A2:F11","Data Bars pada kolom F","Color Scales pada A2:A11"],a:0,
 e:"Untuk mewarnai satu baris penuh berdasarkan satu kolom, CF harus memakai RUMUS. Pilih A2:F11 → New Rule → Use a formula → =$F2>=5000000 → pilih warna. Teknik ini sangat sering dipakai di laporan penjualan.",
 w:[null,"Ini membandingkan SETIAP sel dengan 5 juta, termasuk kolom nama dan Qty — tidak sesuai tujuan.","Data Bars hanya membuat bar di kolom F, bukan mewarnai baris.","Color Scales memberi gradasi warna, bukan aturan ≥ 5 juta."]},
{k:"cf",t:"mc",lv:3,q:"Pada rumus rule =$F2>=5000000 untuk range A2:F11, kenapa F diberi $ tetapi angka 2 tidak?",o:["Kolom dikunci agar SEMUA sel di baris itu mengecek kolom F; baris dibiarkan bergerak agar tiap baris mengecek dirinya sendiri","Supaya rumusnya lebih pendek","Tanda $ wajib di semua rumus CF","Agar hanya baris 2 yang diwarnai"],a:0,
 e:"Excel menerapkan rumus ke setiap sel di A2:F11 seperti di-copy. Tanpa $ di depan F, sel B2 akan mengecek G2, C2 mengecek H2, dst. Tanpa baris yang bebas (angka 2 tanpa $), semua baris akan mengecek F2. $F2 = 'selalu kolom F, baris ikut'.",
 w:[null,"Panjang rumus bukan alasannya.","$ hanya dipakai bila perlu mengunci.","Justru karena baris TIDAK dikunci, setiap baris diperiksa sendiri-sendiri."]},
{k:"cf",t:"mc",lv:2,q:"Data Bars cocok dipakai untuk…",o:["Melihat perbandingan besar-kecil nilai secara visual langsung di dalam sel","Mewarnai teks jadi merah","Menyembunyikan angka","Menghitung rata-rata"],a:0,
 e:"Data Bars membuat grafik batang mini di dalam sel. Cocok untuk kolom Total atau Qty, supaya atasan bisa langsung melihat mana yang besar tanpa membaca angka satu per satu.",
 w:[null,"Itu Highlight Cells Rules.","Data Bars justru memperjelas angka.","Rata-rata dihitung dengan AVERAGE."]},
{k:"cf",t:"mc",lv:2,tb:"penjualan",q:"Rule formula =$A2=\"Bima\" diterapkan pada A2:F11. Berapa BARIS yang terwarnai?",o:["1","3","4","10"],a:1,
 e:"Rumus mengecek apakah kolom A di tiap baris berisi 'Bima': baris 3, 7, dan 11 → 3 baris penuh berwarna (A sampai F).",
 w:["Bima punya 3 transaksi.",null,"Hanya ada 3 baris Bima.","Hanya baris yang memenuhi syarat yang diwarnai."]},
{k:"cf",t:"mc",lv:3,q:"Ada dua rule: merah untuk Total < 1 juta, hijau untuk Total < 2 juta. Sel 750.000 cocok dengan keduanya. Warnanya apa, dan bagaimana mengaturnya?",o:["Tergantung urutan di Manage Rules — rule paling atas menang; atur urutannya (bisa dibantu 'Stop If True')","Selalu hijau","Warnanya tercampur","Excel menolak membuat rule kedua"],a:0,
 e:"Home → Conditional Formatting → Manage Rules menampilkan urutan prioritas. Rule teratas diterapkan lebih dulu; jika dua rule mengatur hal yang sama (warna isi), yang di atas menang. Letakkan aturan yang lebih spesifik (< 1 juta) di atas.",
 w:[null,"Tidak selalu — tergantung urutan rule.","Excel tidak mencampur warna.","Excel boleh punya banyak rule di range yang sama."]},
];

const MATERI_EXCEL = [
{k:"dasar",judul:"Dasar Rumus & Referensi ($)",materi:`
<p>Semua latihan Excel di sini memakai <b>data penjualan yang sama</b>. Perhatikan huruf kolom (A–F) dan nomor baris — kamu akan sering memakainya.</p>
{{tb:penjualan}}
<p><b>Rumus</b> selalu diawali <code>=</code>. Lima fungsi pertama yang wajib hafal:</p>
<pre><code>=SUM(F2:F11)      → menjumlahkan  (45.250.000)
=AVERAGE(F2:F11)  → rata-rata      (4.525.000)
=COUNT(F2:F11)    → banyaknya angka (10)
=MAX(F2:F11)      → terbesar       (14.000.000)
=MIN(F2:F11)      → terkecil       (750.000)</code></pre>
<p><b>Referensi relatif vs absolut</b> — ini yang paling sering bikin laporan salah:</p>
<ul>
<li><code>F2</code> = <b>relatif</b>: saat rumus di-copy ke bawah, berubah jadi F3, F4, …</li>
<li><code>$J$1</code> = <b>absolut</b>: dikunci, tidak berubah walau di-copy.</li>
<li>Tekan <b>F4</b> (atau Fn+F4) saat mengetik referensi untuk menambah <code>$</code>.</li>
</ul>
<div class="catatan">🇮🇩 <b>Penting untuk laptop Indonesia:</b> jika region-nya Indonesia, pemisah argumen adalah <b>titik koma</b>: <code>=SUM(A1;B1)</code>. Tutorial berbahasa Inggris memakai koma. Di aplikasi ini ditulis koma, dan jawaban isian menerima keduanya.</div>
<div class="praktik">🧪 <b>Praktik di Excel:</b> buka <a href="latihan/latihan-excel-penjualan.xlsx" download>latihan-excel-penjualan.xlsx</a> → sheet <i>Bab1-Dasar</i>. Kerjakan tugasnya, lalu kembali ke sini untuk kuis.</div>`},

{k:"sumifs",judul:"SUMIFS & COUNTIFS — Menjumlah dan Menghitung dengan Syarat",materi:`
<p>Pertanyaan atasan yang paling sering: <i>"Berapa penjualan Andi di Jakarta?"</i> Jawabannya: <b>SUMIFS</b>.</p>
<pre><code>=SUMIFS(range_yang_dijumlah, range_syarat1, syarat1, range_syarat2, syarat2, …)

=SUMIFS(F2:F11, A2:A11,"Andi")                     → 18.750.000
=SUMIFS(F2:F11, A2:A11,"Andi", B2:B11,"Jakarta")   → 18.000.000</code></pre>
<p><b>COUNTIFS</b> sama polanya, tapi <i>menghitung banyaknya baris</i> (tanpa range jumlah di depan):</p>
<pre><code>=COUNTIFS(B2:B11,"Jakarta")                  → 4
=COUNTIFS(C2:C11,"Laptop", B2:B11,"<>Jakarta") → 2</code></pre>
<p>Jenis syarat yang bisa dipakai:</p>
<ul>
<li>Teks persis: <code>"Andi"</code> · Tidak sama dengan: <code>"&lt;&gt;Jakarta"</code></li>
<li>Angka: <code>"&gt;=5000000"</code>, <code>"&lt;1000000"</code> (pakai tanda kutip)</li>
<li>Dari sel lain: <code>H2</code> (TANPA kutip) → laporan jadi dinamis</li>
<li>Rentang: tulis kolom yang sama dua kali: <code>F2:F11,"&gt;=1000000", F2:F11,"&lt;=5000000"</code></li>
</ul>
<p><b>AVERAGEIFS</b> = rata-rata dengan syarat, polanya sama persis dengan SUMIFS.</p>
<div class="catatan">💡 Hubungan dengan SQL: <code>SUMIFS</code> ≈ <code>SELECT SUM(total) … WHERE sales='Andi' AND wilayah='Jakarta'</code>. Kalau paham yang satu, yang lain jadi mudah.</div>
<div class="praktik">🧪 <b>Praktik:</b> sheet <i>Bab2-SUMIFS</i> di <a href="latihan/latihan-excel-penjualan.xlsx" download>file latihan</a>. Buat tabel ringkasan total per sales memakai SUMIFS yang mengacu ke sel nama (bukan diketik manual).</div>`},

{k:"xlookup",judul:"XLOOKUP (dan VLOOKUP) — Mengambil Data dari Tabel Lain",materi:`
<p>Di kantor, data jarang ada di satu tempat. Harga ada di <b>master produk</b>, transaksi di sheet lain. XLOOKUP menyatukannya.</p>
{{tb:produkSheet}}
<pre><code>=XLOOKUP(yang_dicari, kolom_pencarian, kolom_hasil, [jika_tidak_ketemu])

=XLOOKUP("Monitor", A2:A5, C2:C5)             → 2.000.000
=XLOOKUP("Mouse",   A2:A5, B2:B5)             → Aksesoris
=XLOOKUP("Printer", A2:A5, C2:C5, "Tidak ada") → Tidak ada</code></pre>
<p>Mengambil dari sheet lain + di-copy ke bawah — kunci range tabelnya:</p>
<pre><code>=XLOOKUP(C2, Produk!$A$2:$A$5, Produk!$B$2:$B$5)</code></pre>
<p><b>VLOOKUP</b> masih banyak dipakai di file kantor lama, jadi pahami juga:</p>
<pre><code>=VLOOKUP("Mouse", A2:C5, 3, FALSE)   → 150.000
          dicari  tabel  kolom ke-3  cocok persis</code></pre>
<ul>
<li>VLOOKUP hanya bisa mencari di kolom <b>paling kiri</b> dan mengambil ke <b>kanan</b>.</li>
<li>Selalu tulis <code>FALSE</code>. Tanpa itu, VLOOKUP bisa mengambil data yang salah <b>tanpa error</b>.</li>
</ul>
<div class="catatan">ℹ️ XLOOKUP ada di Excel 365/2021 ke atas dan Google Sheets. Kalau kantormu memakai Excel 2016, pakai VLOOKUP atau INDEX+MATCH.</div>
<div class="praktik">🧪 <b>Praktik:</b> sheet <i>Bab3-XLOOKUP</i> — isi kolom Kategori dan Harga di sheet Penjualan dengan mengambil dari sheet Produk.</div>`},

{k:"if",judul:"IF Bertingkat, IFS, AND, OR",materi:`
<p>IF membuat keputusan otomatis: <code>=IF(syarat, jika_benar, jika_salah)</code></p>
<pre><code>=IF(F2>=5000000, "Target", "Belum")</code></pre>
<p><b>IF bertingkat</b> untuk lebih dari 2 kategori. Aturan emas: <b>urutkan dari batas terbesar</b>, karena Excel berhenti di syarat pertama yang benar.</p>
<pre><code>=IF(F2>=5000000, "Tinggi",
   IF(F2>=1500000, "Sedang", "Rendah"))</code></pre>
<p>Versi yang lebih mudah dibaca dengan <b>IFS</b> (TRUE = "selain itu"):</p>
<pre><code>=IFS(F2>=5000000,"Tinggi", F2>=1500000,"Sedang", TRUE,"Rendah")</code></pre>
<p>Gabungkan syarat:</p>
<ul>
<li><code>AND(a, b)</code> → benar jika <b>semua</b> benar. Contoh bonus: Jakarta <i>dan</i> ≥ 5 juta.</li>
<li><code>OR(a, b)</code> → benar jika <b>salah satu</b> benar.</li>
</ul>
<div class="catatan">⚠️ Di dalam rumus, angka ditulis tanpa titik ribuan: <code>5000000</code>, bukan <code>5.000.000</code>. Teks hasil wajib diapit kutip ganda: <code>"Tinggi"</code>.</div>
<div class="praktik">🧪 <b>Praktik:</b> sheet <i>Bab4-IF</i> — beri label Tinggi/Sedang/Rendah dan kolom Bonus.</div>`},

{k:"pivot",judul:"Pivot Table — Meringkas Ribuan Baris dalam Detik",materi:`
<p>Pivot table = ringkasan otomatis. Yang di SUMIFS butuh puluhan rumus, di pivot cukup drag-and-drop.</p>
<p><b>Langkah membuat:</b></p>
<ol>
<li>Klik satu sel di dalam data → <b>Ctrl+T</b> (jadikan Table, agar baris baru ikut terbaca).</li>
<li><b>Insert → PivotTable</b> → New Worksheet → OK.</li>
<li>Seret kolom ke 4 area:
<ul>
<li><b>Rows</b> → kelompok baris (mis. Sales) — mirip <code>GROUP BY</code> di SQL</li>
<li><b>Columns</b> → kelompok kolom (mis. Wilayah) — membentuk tabel silang</li>
<li><b>Values</b> → angka yang dihitung (mis. Sum of Total)</li>
<li><b>Filters</b> → saring seluruh laporan (mis. hanya Laptop)</li>
</ul></li>
</ol>
<p>Contoh hasil Rows = Sales, Values = Sum of Total:</p>
<table class="mini-pivot"><tr><th>Sales</th><th>Sum of Total</th></tr>
<tr><td>Andi</td><td>18.750.000</td></tr><tr><td>Bima</td><td>4.700.000</td></tr>
<tr><td>Citra</td><td>13.000.000</td></tr><tr><td>Dewi</td><td>8.800.000</td></tr>
<tr><th>Grand Total</th><th>45.250.000</th></tr></table>
<ul>
<li>Muncul <b>Count</b> padahal mau Sum? → Value Field Settings → Sum.</li>
<li>Data berubah? → klik kanan → <b>Refresh</b>. Pivot tidak update sendiri.</li>
<li>Selalu cocokkan <b>Grand Total</b> dengan =SUM data asli — kebiasaan analis yang teliti.</li>
</ul>
<div class="praktik">🧪 <b>Praktik:</b> sheet <i>Bab5-Pivot</i> — buat 3 pivot: total per sales, total per wilayah, dan tabel silang Sales × Wilayah.</div>`},

{k:"cf",judul:"Conditional Formatting — Membuat Data Bicara",materi:`
<p>Conditional formatting (CF) mewarnai sel otomatis sesuai nilainya. Nilainya tidak berubah, hanya tampilannya.</p>
<p><b>Home → Conditional Formatting</b>, lalu pilih:</p>
<ul>
<li><b>Highlight Cells Rules</b> → Greater Than, Less Than, Between, Text Contains, Duplicate Values</li>
<li><b>Top/Bottom Rules</b> → Top 3 Items, Above Average</li>
<li><b>Data Bars</b> → grafik batang mini di dalam sel</li>
<li><b>Color Scales</b> → gradasi warna (merah → hijau)</li>
<li><b>New Rule → Use a formula</b> → paling fleksibel</li>
</ul>
<p>Teknik paling dicari: <b>mewarnai satu baris penuh</b> berdasarkan satu kolom.</p>
<pre><code>Pilih A2:F11 → New Rule → Use a formula:
=$F2>=5000000
   ↑ kolom dikunci, baris bebas</code></pre>
<p>Jika ada beberapa rule, urutannya diatur di <b>Manage Rules</b> — rule paling atas punya prioritas.</p>
<div class="catatan">🎨 Gunakan warna seperlunya. Laporan yang semuanya berwarna sama buruknya dengan yang tidak berwarna. Tandai hanya yang perlu diperhatikan atasan.</div>
<div class="praktik">🧪 <b>Praktik:</b> sheet <i>Bab6-CF</i> — warnai baris Total ≥ 5 juta, beri Data Bars di Qty, dan tandai nama sales tertentu.</div>`},
];
