// ============ EXCEL lanjutan — bab 7–10 ============
// Ditambahkan di BELAKANG SOAL_EXCEL & MATERI_EXCEL supaya ID soal lama
// (dan progres yang sudah tersimpan) tidak bergeser.
// Dataset: kotor, transaksi, komisi, penjualan, produkSheet (js/data/dataset.js)

SOAL_EXCEL.push(
// ---- BAB 7: Teks & pembersihan data ----
{k:"teks",t:"mc",lv:1,tb:"kotor",q:"Sel A2 berisi '  rina wulandari' (ada spasi di depan). Hasil rumus ini adalah…",kode:"=TRIM(A2)",o:["rina wulandari","Rina Wulandari","RINA WULANDARI","  rina wulandari"],a:0,
 e:"TRIM hanya membuang spasi berlebih: spasi di depan, di belakang, dan spasi ganda di tengah kalimat. Huruf besar/kecil TIDAK diubah, jadi hasilnya 'rina wulandari'.",
 w:[null,"Membuat huruf awal tiap kata jadi kapital adalah tugas PROPER, bukan TRIM.","Mengubah ke huruf besar semua adalah tugas UPPER.","Justru spasi di depan itulah yang dibuang TRIM."]},
{k:"teks",t:"mc",lv:1,q:"Hasil rumus ini adalah…",kode:'=PROPER("budi hartono")',o:["Budi hartono","Budi Hartono","BUDI HARTONO","budi Hartono"],a:1,
 e:"PROPER membuat huruf pertama SETIAP kata menjadi kapital dan sisanya huruf kecil. Cocok untuk merapikan nama orang dan nama kota.",
 w:["Itu gaya kalimat (kapital hanya di awal). PROPER mengkapitalkan setiap kata.",null,"Itu hasil UPPER.","Kata pertama juga ikut dikapitalkan."]},
{k:"teks",t:"mc",lv:2,tb:"kotor",q:"Kolom A berisi nama yang berantakan: ada spasi berlebih, ada yang huruf besar semua, ada yang huruf kecil semua. Rumus kolom bantu (ditulis di F2 lalu ditarik ke bawah) yang paling tepat:",o:["=PROPER(TRIM(A2))","=TRIM(A2)","=UPPER(TRIM(A2))","=PROPER(A2)"],a:0,
 e:"Rumus bertingkat dikerjakan dari dalam ke luar: TRIM membuang spasi berlebih dulu, lalu PROPER merapikan huruf besar-kecil. Hasilnya 'Rina Wulandari', 'Tono Saputra', 'Sari Dewi', dan seterusnya. Jangan menimpa data asli — kerjakan di kolom bantu.",
 w:[null,"TRIM saja tidak memperbaiki 'TONO SAPUTRA' yang huruf besar semua.","Rapi, tapi semua nama jadi HURUF BESAR — bukan format nama yang lazim.","PROPER saja tidak membuang spasi ganda di 'Sari   Dewi' dan spasi di depan 'rina'."]},
{k:"teks",t:"mc",lv:1,tb:"kotor",q:"Hasil rumus ini adalah…",kode:"=LEN(E2)",o:["3","10","12","13"],a:2,
 e:"LEN menghitung banyaknya karakter, termasuk tanda strip dan spasi. 'INV-2026-001' = I,N,V,-,2,0,2,6,-,0,0,1 → 12 karakter. LEN berguna untuk mendeteksi data aneh, misalnya nomor telepon yang kurang digit atau ada spasi tersembunyi.",
 w:["3 adalah panjang 'INV' saja.","Kalau tanda strip tidak dihitung hasilnya 10 — padahal LEN menghitung SEMUA karakter.",null,"Tidak ada spasi tersembunyi di kode ini; panjangnya 12."]},
{k:"teks",t:"mc",lv:1,tb:"kotor",q:"Hasil rumus ini adalah…",kode:"=LEFT(E2,3)",o:["INV","001","2026","INV-"],a:0,
 e:"LEFT(teks, n) mengambil n karakter dari KIRI. Tiga karakter pertama 'INV-2026-001' adalah 'INV'.",
 w:[null,"Mengambil dari kanan adalah tugas RIGHT.","Mengambil dari tengah adalah tugas MID.","Itu 4 karakter, padahal argumen keduanya 3."]},
{k:"teks",t:"mc",lv:1,tb:"kotor",q:"Hasil rumus ini adalah…",kode:"=RIGHT(E6,3)",o:["005","5","INV","2026"],a:0,
 e:"RIGHT mengambil karakter dari KANAN. E6 = 'INV-2026-005', tiga karakter terakhir = '005'. Hasil fungsi teks selalu berupa TEKS, jadi angka nol di depan tetap ada.",
 w:[null,"Nol di depan hilang hanya kalau hasilnya diubah menjadi angka (misal dengan VALUE). Hasil RIGHT berupa teks.","Itu hasil LEFT(E6,3).","Itu hasil MID(E6,5,4)."]},
{k:"teks",t:"mc",lv:2,tb:"kotor",q:"Kamu ingin mengambil TAHUN dari kode faktur di E2 ('INV-2026-001'). Rumus yang tepat:",o:["=MID(E2,5,4)","=MID(E2,4,4)","=LEFT(E2,4)","=RIGHT(E2,4)"],a:0,
 e:"MID(teks, posisi_awal, jumlah). Hitung posisinya: I=1, N=2, V=3, '-'=4, '2'=5. Jadi mulai dari posisi 5 dan ambil 4 karakter → '2026'.",
 w:[null,"Posisi 4 adalah tanda strip, hasilnya '-202'.","LEFT 4 karakter menghasilkan 'INV-'.","RIGHT 4 karakter menghasilkan '-001'."]},
{k:"teks",t:"mc",lv:2,tb:"kotor",q:"Nomor telepon di C2 ingin dibuat tanpa tanda strip. Hasil rumus ini…",kode:'=SUBSTITUTE(C2,"-","")',o:["081234567890","0812 3456 7890","0812-3456-7890","81234567890"],a:0,
 e:"SUBSTITUTE(teks, yang_diganti, penggantinya). Semua '-' diganti dengan teks kosong \"\", jadi tanda strip hilang. Hasilnya tetap teks, sehingga angka 0 di depan aman.",
 w:[null,"Strip diganti dengan teks kosong, bukan spasi.","Itu teks aslinya — SUBSTITUTE sudah mengganti semua tanda strip.","Nol di depan tidak hilang karena hasilnya teks, bukan angka."]},
{k:"teks",t:"mc",lv:2,q:"A2 = 'Rina' dan B2 = 'Jakarta'. Kamu ingin hasil: Rina - Jakarta. Rumus yang benar:",o:['=A2&" - "&B2','=A2+" - "+B2','=A2&B2','="A2 - B2"'],a:0,
 e:"Tanda & menyambung teks (sama seperti fungsi CONCAT). Teks tambahan seperti ' - ' ditulis dalam kutip — termasuk spasinya, supaya hasilnya tidak menempel.",
 w:[null,"Di Excel, + hanya untuk angka. Menjumlah teks menghasilkan #VALUE!.","Hasilnya 'RinaJakarta' — menempel tanpa pemisah.","Di dalam kutip, A2 dan B2 hanyalah tulisan, bukan alamat sel. Hasilnya teks 'A2 - B2'."]},
{k:"teks",t:"mc",lv:3,tb:"kotor",q:"D3 = 'tono@mail.com'. Hasil rumus ini adalah…",kode:'=LEFT(D3, FIND("@",D3)-1)',o:["tono","tono@","mail.com","5"],a:0,
 e:"Kerjakan dari dalam: FIND(\"@\",D3) mencari posisi '@' → 5. Lalu 5−1 = 4, dan LEFT(D3,4) mengambil 4 karakter pertama → 'tono'. Pola FIND + LEFT/MID ini dipakai untuk memotong teks yang panjangnya berbeda-beda.",
 w:[null,"Tanpa −1, karakter '@' ikut terambil. Rumus ini sudah dikurangi 1.","Itu bagian SETELAH '@'. Untuk itu butuh MID atau RIGHT.","5 adalah hasil FIND saja (posisi '@'), belum dipakai oleh LEFT."]},
{k:"teks",t:"mc",lv:3,tb:"kotor",q:"Di kolom B ada 3 data Bandung, tapi rumus ini hanya menghasilkan 1. Kenapa?",kode:'=COUNTIF(B2:B7,"Bandung")',o:["B3 dan B7 berisi 'Bandung ' dengan spasi di belakang, sehingga dianggap teks yang berbeda","COUNTIF peka huruf besar/kecil, jadi 'bandung' tidak dihitung","COUNTIF hanya bisa menghitung angka","Range harus dikunci dengan $"],a:0,
 e:"Spasi tersembunyi di belakang ('Bandung ') membuat teks dianggap berbeda. COUNTIF TIDAK peka huruf besar/kecil, jadi yang terhitung justru B6 'bandung'. Pelajarannya: bersihkan data dengan TRIM dulu sebelum membuat ringkasan. Inilah penyebab angka laporan yang 'tiba-tiba' tidak cocok.",
 w:[null,"Kebalikannya: COUNTIF tidak peka huruf besar/kecil — 'bandung' (B6) justru yang terhitung.","COUNTIF bisa menghitung teks dengan syarat teks.","Tanda $ hanya penting saat rumus di-copy; tidak mengubah hasil di sini."]},
{k:"teks",t:"mc",lv:2,tb:"kotor",q:"Rumus ini ditulis di F3. Hasilnya dan artinya adalah…",kode:"=COUNTIF($A$2:$A$7,A3)",o:["2 — nama di A3 muncul dua kali (ada duplikat)","1 — tidak ada duplikat","6 — ada 6 baris data","TRUE"],a:0,
 e:"COUNTIF menghitung berapa kali isi A3 ('TONO SAPUTRA') muncul di seluruh kolom A: baris 3 dan 7 → 2. Isi kolom bantu ini untuk semua baris; hasil > 1 berarti duplikat. Range dikunci dengan $ supaya tidak bergeser saat rumus ditarik ke bawah.",
 w:[null,"'TONO SAPUTRA' ada di A3 dan A7.","COUNTIF tidak menghitung jumlah baris; ia menghitung yang sama dengan A3.","COUNTIF mengembalikan angka, bukan TRUE/FALSE."]},
{k:"teks",t:"mc",lv:1,q:"Fitur Excel untuk menghapus baris yang persis sama (duplikat) dengan cepat:",o:["Data → Remove Duplicates","Home → Delete Sheet","Ctrl+Z","Insert → Table"],a:0,
 e:"Data → Remove Duplicates menghapus baris ganda berdasarkan kolom yang kamu pilih. Tips: rapikan dulu dengan TRIM/PROPER, karena 'TONO SAPUTRA' dan 'Tono Saputra ' dianggap berbeda sebelum dirapikan. Simpan salinan data mentah sebelum menghapus.",
 w:[null,"Itu menghapus seluruh sheet.","Ctrl+Z membatalkan aksi terakhir.","Table merapikan format & range, tidak menghapus duplikat."]},
{k:"teks",t:"mc",lv:2,q:"Kolom A berisi nama lengkap ('Rina Wulandari'). Kamu ingin memisahkan nama depan dan belakang ke dua kolom tanpa rumus. Cara tercepat:",o:["Data → Text to Columns (pemisah: spasi), atau ketik 1 contoh lalu Flash Fill (Ctrl+E)","Ketik ulang satu per satu","Pakai fungsi SUM","Conditional Formatting"],a:0,
 e:"Text to Columns memecah teks berdasarkan pemisah (spasi, koma, titik koma). Flash Fill (Ctrl+E) menebak pola dari contoh yang kamu ketik. Di Excel 365 juga ada fungsi TEXTSPLIT.",
 w:[null,"Lambat dan rawan salah ketik untuk ribuan baris.","SUM untuk menjumlahkan angka.","Conditional Formatting hanya mewarnai sel."]},
{k:"teks",t:"mc",lv:2,q:"Angka di kolom Qty rata KIRI dan ada segitiga hijau di pojok sel. =SUM(D2:D11) menghasilkan 0. Penyebabnya:",o:["Angka tersimpan sebagai TEKS (biasanya hasil impor/copy dari sistem lain)","Rumus SUM rusak","Kolomnya terlalu sempit","Excel belum di-update"],a:0,
 e:"Angka yang tersimpan sebagai teks tidak ikut dihitung SUM. Cirinya: rata kiri dan ada segitiga hijau. Perbaiki dengan klik ikon peringatan → Convert to Number, atau =VALUE(D2), atau Data → Text to Columns → Finish.",
 w:[null,"SUM bekerja normal untuk angka sungguhan.","Kolom sempit menampilkan ####, bukan hasil 0.","Ini masalah format data, bukan versi Excel."]},
{k:"teks",t:"is",lv:1,q:"Fungsi untuk mengubah semua huruf menjadi KAPITAL: =_____(A2)",a:["upper"],
 h:"Kebalikannya adalah LOWER.",
 e:"UPPER → 'RINA WULANDARI'. LOWER → huruf kecil semua. PROPER → kapital di awal tiap kata. Untuk kode atau kota yang akan dicocokkan, menyeragamkan huruf membantu menghindari data dobel."},

// ---- BAB 8: Tanggal & waktu ----
{k:"tanggal",t:"mc",lv:1,q:"Kenapa di Excel kamu bisa mengurangkan dua tanggal, misalnya =E2-B2?",o:["Excel menyimpan tanggal sebagai ANGKA (urutan hari sejak 1 Januari 1900); yang kamu lihat hanya formatnya","Excel punya mode khusus untuk pengurangan tanggal","Karena tanggal ditulis dengan garis miring","Tidak bisa, hasilnya pasti error"],a:0,
 e:"Di balik layar, 1 Januari 2026 adalah angka 46023. Karena tanggal adalah angka, kamu bisa menghitung selisih hari, menambah hari (=B2+30 untuk jatuh tempo), mengurutkan, dan menjumlah per rentang tanggal. Coba ubah format sel tanggal ke 'General' untuk melihat angkanya.",
 w:[null,"Tidak ada mode khusus; tanggal memang angka biasa.","Garis miring hanya tampilan format.","Bisa — dan ini salah satu hal paling berguna di Excel."]},
{k:"tanggal",t:"mc",lv:1,tb:"transaksi",q:"Hasil rumus ini adalah… (B4 = 28/01/2026, format hari/bulan/tahun)",kode:"=MONTH(B4)",o:["28","1","2026","Januari"],a:1,
 e:"MONTH mengambil nomor BULAN dari sebuah tanggal → 1 (Januari). Pasangannya: DAY → 28, YEAR → 2026. Kolom bantu 'Bulan' seperti ini memudahkan ringkasan per bulan dengan SUMIFS atau Pivot.",
 w:["28 adalah hasil DAY.",null,"2026 adalah hasil YEAR.","MONTH mengembalikan angka, bukan nama bulan. Untuk nama bulan pakai TEXT."]},
{k:"tanggal",t:"mc",lv:1,tb:"transaksi",q:"INV-02 dibayar berapa hari setelah tanggal faktur? Hasil rumus ini…",kode:"=E3-B3",o:["36","5","30","-36"],a:0,
 e:"15 Januari → 31 Januari = 16 hari, ditambah 20 hari di Februari = 36 hari. Pastikan format sel hasilnya 'General' atau 'Number' — kalau masih format tanggal, angka 36 tampil sebagai 05/02/1900.",
 w:[null,"5 hanya selisih tanggalnya (20 − 15), mengabaikan bedanya bulan.","Benar hanya kalau setiap bulan 30 hari. Excel menghitung hari yang sebenarnya.","Hasil negatif muncul kalau urutannya dibalik: =B3-E3."]},
{k:"tanggal",t:"mc",lv:2,tb:"transaksi",q:"Rumus ini ditulis di F2 lalu ditarik sampai F8 (INV-01 s.d. INV-07). Berapa faktur yang berstatus \"Telat\"?",kode:'=IF(E2-B2>30,"Telat","Tepat waktu")',o:["1","2","3","0"],a:1,
 e:"Selisih hari: INV-01 = 7, INV-02 = 36, INV-03 = 8, INV-04 = 0, INV-05 = 44, INV-06 = 7, INV-07 = 7. Yang lebih dari 30 hari: INV-02 dan INV-05 → 2 faktur. Ini analisis umur piutang (aging) sederhana yang sering diminta tim finance.",
 w:["INV-05 (14/02 → 30/03) juga lebih dari 30 hari: 44 hari.",null,"INV-03 hanya 8 hari (28/01 → 05/02), tidak telat.","INV-02 (36 hari) dan INV-05 (44 hari) jelas lebih dari 30 hari."]},
{k:"tanggal",t:"mc",lv:2,tb:"transaksi",q:"Hasil rumus ini adalah… (B6 = 14/02/2026)",kode:"=EOMONTH(B6,0)",o:["28/02/2026","29/02/2026","14/03/2026","01/03/2026"],a:0,
 e:"EOMONTH = End Of MONTH. Argumen 0 = akhir bulan yang sama → 28 Februari 2026 (2026 bukan tahun kabisat). EOMONTH(B6,1) = akhir bulan berikutnya (31/03/2026). Berguna untuk jatuh tempo 'akhir bulan' dan untuk mengelompokkan tanggal per bulan.",
 w:[null,"2026 bukan tahun kabisat; Februari 2026 hanya 28 hari.","Itu tanggal + 1 bulan (fungsi EDATE), bukan akhir bulan.","Itu awal bulan berikutnya = EOMONTH(B6,0)+1."]},
{k:"tanggal",t:"mc",lv:1,q:"Jatuh tempo faktur = 30 hari setelah tanggal faktur di B2. Rumusnya:",o:["=B2+30","=B2&30","=DATE(B2+30)","=MONTH(B2)+1"],a:0,
 e:"Karena tanggal adalah angka hari, menambah 30 berarti maju 30 hari. Format hasilnya sebagai tanggal.",
 w:[null,"& menyambung teks: hasilnya '4602630' — bukan tanggal.","DATE butuh 3 argumen (tahun, bulan, hari).","Itu nomor bulan berikutnya, bukan tanggal jatuh tempo."]},
{k:"tanggal",t:"mc",lv:3,tb:"transaksi",q:"Hasil rumus ini adalah…",kode:'=SUMIFS(D2:D9, B2:B9,">="&DATE(2026,2,1), B2:B9,"<"&DATE(2026,3,1))',o:["8.950.000","21.500.000","11.000.000","41.450.000"],a:0,
 e:"Dua syarat pada kolom tanggal yang sama membentuk rentang: ≥ 1 Februari DAN < 1 Maret = semua transaksi Februari: INV-04 (750.000) + INV-05 (7.000.000) + INV-06 (1.200.000) = 8.950.000. Memakai '< 1 Maret' lebih aman daripada '<= 28 Februari' karena kamu tidak perlu tahu jumlah hari tiap bulan.",
 w:[null,"Itu total Januari.","Itu total Maret.","Itu total semua transaksi tanpa syarat."]},
{k:"tanggal",t:"mc",lv:2,q:"Kenapa syarat tanggal di SUMIFS ditulis \">=\"&DATE(2026,2,1), bukan \">=DATE(2026,2,1)\"?",o:["Syarat SUMIFS berupa teks; & menyambung operator \">=\" dengan NILAI tanggal hasil DATE()","Supaya rumus lebih pendek","DATE tidak boleh dipakai di SUMIFS","Tidak ada bedanya"],a:0,
 e:"Semua yang ada di dalam kutip dianggap teks apa adanya, jadi \">=DATE(2026,2,1)\" tidak pernah dihitung. Dengan &, DATE dihitung dulu menjadi angka tanggal (46054), lalu digabung menjadi syarat \">=46054\". Pola yang sama dipakai untuk syarat dari sel: \">=\"&H1.",
 w:[null,"Malah lebih panjang — tapi wajib supaya benar.","DATE boleh, asalkan di luar tanda kutip.","Bedanya besar: versi dalam kutip tidak akan cocok dengan data apa pun."]},
{k:"tanggal",t:"mc",lv:1,tb:"transaksi",q:"Hasil rumus ini dan artinya:",kode:"=COUNTBLANK(E2:E9)",o:["1 — ada satu faktur yang belum dibayar (INV-08)","0 — semua sudah dibayar","8 — jumlah faktur","7 — jumlah faktur lunas"],a:0,
 e:"COUNTBLANK menghitung sel KOSONG. Hanya E9 (INV-08) yang belum berisi tanggal bayar. Kebalikannya, COUNTA(E2:E9) = 7 faktur yang sudah dibayar.",
 w:[null,"E9 kosong — INV-08 belum dibayar.","8 adalah jumlah semua faktur (COUNTA kolom A).","7 adalah jumlah sel yang TERISI (COUNTA), bukan yang kosong."]},
{k:"tanggal",t:"mc",lv:2,q:"=TODAY()-B9 dipakai untuk menghitung umur piutang INV-08. Apa yang perlu kamu ketahui tentang TODAY()?",o:["Hasilnya berubah otomatis mengikuti tanggal hari ini setiap kali file dihitung ulang/dibuka","Hasilnya tetap tanggal saat rumus pertama kali diketik","TODAY() hanya ada di Google Sheets","TODAY() butuh argumen tanggal"],a:0,
 e:"TODAY() mengambil tanggal dari komputer dan selalu diperbarui. Cocok untuk laporan yang harus 'terkini'. Kalau butuh tanggal tetap (misal tanggal input data), tekan Ctrl+; untuk mengetik tanggal hari ini sebagai nilai mati.",
 w:[null,"Itu perilaku Ctrl+; (nilai tetap), bukan TODAY().","TODAY() ada di Excel dan Google Sheets.","TODAY() ditulis tanpa argumen: =TODAY()."]},
{k:"tanggal",t:"mc",lv:2,q:"Hasil rumus ini adalah… (2 Maret 2026 hari Senin, 6 Maret hari Jumat)",kode:"=NETWORKDAYS(DATE(2026,3,2), DATE(2026,3,6))",o:["5","4","7","3"],a:0,
 e:"NETWORKDAYS menghitung hari KERJA (Senin–Jumat) di antara dua tanggal, termasuk tanggal awal dan akhir: Senin–Jumat = 5. Argumen ke-3 bisa diisi daftar tanggal libur nasional. Dipakai untuk SLA, misalnya 'pesanan dikirim maksimal 3 hari kerja'.",
 w:[null,"Itu hasil pengurangan biasa (6 − 2). NETWORKDAYS menghitung tanggal awal DAN akhir.","Rentang ini tidak mencakup akhir pekan, dan NETWORKDAYS tidak pernah menghitung Sabtu–Minggu.","Terlalu sedikit; Senin sampai Jumat ada 5 hari kerja."]},
{k:"tanggal",t:"mc",lv:2,q:"Kolom tanggal hasil impor tampil rata KIRI dan =MONTH(B2) menghasilkan #VALUE!. Masalahnya:",o:["Tanggal tersimpan sebagai TEKS, bukan tanggal sungguhan","Fungsi MONTH salah ketik","Tanggalnya di masa depan","Kolomnya harus disembunyikan"],a:0,
 e:"Tanggal sungguhan (angka) tampil rata kanan; teks rata kiri dan tidak bisa dihitung. Perbaiki dengan Data → Text to Columns → pilih format DMY, atau rakit ulang dengan =DATE(RIGHT(B2,4), MID(B2,4,2), LEFT(B2,2)) untuk teks berformat dd/mm/yyyy.",
 w:[null,"Kalau salah ketik, error-nya #NAME?, bukan #VALUE!.","Tanggal masa depan tetap bisa dihitung.","Menyembunyikan kolom tidak mengubah isinya."]},
{k:"tanggal",t:"mc",lv:3,q:"File dari kantor pusat di Amerika berisi tanggal 03/01/2026. Di laptopmu (region Indonesia) terbaca 3 Januari. Apa risikonya?",o:["Di format Amerika (bulan/hari) itu artinya 1 Maret 2026 — tertukarnya bulan & hari bisa merusak laporan bulanan","Tidak ada risiko, semua negara sama","Excel selalu otomatis benar","Tanggalnya akan terhapus"],a:0,
 e:"AS memakai mm/dd/yyyy, Indonesia dd/mm/yyyy. Tanda data tertukar: tanggal ≤ 12 'terlihat' benar padahal salah, dan tanggal > 12 malah tersimpan sebagai teks. Saat bertukar data, pakai format ISO yyyy-mm-dd (2026-01-03), lalu cek dengan =MONTH() setelah impor.",
 w:[null,"Format tanggal berbeda antarnegara.","Excel menebak berdasarkan pengaturan region komputer — bisa salah.","Tanggal tidak hilang, tapi maknanya berubah."]},
{k:"tanggal",t:"mc",lv:2,tb:"transaksi",q:"Hasil rumus ini di Excel berbahasa Inggris (B2 = 03/01/2026):",kode:'=TEXT(B2,"mmm yyyy")',o:["Jan 2026","01 2026","3 Jan","January 2026"],a:0,
 e:"TEXT mengubah tanggal menjadi TEKS berformat: 'mmm' = nama bulan singkat, 'mmmm' = nama bulan lengkap, 'yyyy' = tahun 4 digit. Catatan: di Excel berbahasa lain, kode format bisa berbeda, dan hasilnya berupa teks (tidak bisa dihitung lagi). Untuk ringkasan per bulan, Pivot Table → Group → Months sering lebih praktis.",
 w:[null,"'01' muncul dengan kode 'mm' (dua huruf m), bukan 'mmm'.","Format ini tidak menampilkan tanggal (d).","Nama bulan lengkap muncul dengan 'mmmm' (empat huruf m)."]},

// ---- BAB 9: INDEX-MATCH & dynamic array ----
{k:"lookup2",t:"mc",lv:1,tb:"produkSheet",q:"Hasil rumus ini adalah…",kode:'=MATCH("Monitor", A2:A5, 0)',o:["3","4","2.000.000","Komputer"],a:0,
 e:"MATCH mengembalikan POSISI (urutan ke berapa) di dalam range, bukan nomor baris sheet. Di A2:A5: Laptop = 1, Mouse = 2, Monitor = 3. Angka 0 di akhir artinya cari yang persis sama (exact match).",
 w:[null,"4 adalah nomor BARIS di sheet. MATCH menghitung posisi di dalam range A2:A5, dimulai dari 1.","MATCH tidak mengambil isi kolom lain; itu tugas INDEX atau XLOOKUP.","Itu isi kolom B, bukan posisi."]},
{k:"lookup2",t:"mc",lv:1,tb:"produkSheet",q:"Hasil rumus ini adalah…",kode:"=INDEX(C2:C5, 2)",o:["150.000","7.000.000","Mouse","2"],a:0,
 e:"INDEX(range, n) mengambil isi ke-n dari range. Isi ke-2 dari C2:C5 adalah C3 = 150.000 (harga Mouse).",
 w:[null,"7.000.000 adalah isi ke-1 (Laptop).","Mouse ada di kolom A, sedangkan range-nya kolom C.","INDEX mengembalikan isi sel, bukan angka posisinya."]},
{k:"lookup2",t:"mc",lv:2,tb:"produkSheet",q:"Hasil rumus ini adalah…",kode:'=INDEX(C2:C5, MATCH("Keyboard", A2:A5, 0))',o:["300.000","4","Aksesoris","#N/A"],a:0,
 e:"Kerjakan dari dalam: MATCH mencari 'Keyboard' → posisi 4. INDEX(C2:C5, 4) mengambil isi ke-4 kolom Harga → 300.000. Inilah 'XLOOKUP versi lama': MATCH mencari posisi, INDEX mengambil isinya.",
 w:[null,"4 hanya hasil MATCH; INDEX lalu mengambil isinya.","Aksesoris ada di kolom B, sedangkan INDEX mengambil dari kolom C.","Keyboard ada di tabel, jadi tidak muncul #N/A."]},
{k:"lookup2",t:"mc",lv:2,q:"XLOOKUP sudah ada. Kenapa INDEX-MATCH tetap layak dipelajari?",o:["Banyak kantor masih memakai Excel 2016/2019 yang belum punya XLOOKUP, dan INDEX-MATCH sering muncul di tes kerja","INDEX-MATCH selalu lebih cepat dari semua fungsi","XLOOKUP akan dihapus Microsoft","INDEX-MATCH bisa membuat grafik"],a:0,
 e:"XLOOKUP hanya ada di Excel 2021/365 dan Google Sheets. Di Excel 2016/2019 pilihannya VLOOKUP atau INDEX-MATCH. INDEX-MATCH lebih fleksibel daripada VLOOKUP: bisa mencari ke kiri dan tidak rusak saat kolom disisipkan.",
 w:[null,"Perbedaan kecepatannya jarang terasa di data sehari-hari.","Tidak ada rencana seperti itu.","Grafik dibuat dari menu Insert → Chart."]},
{k:"lookup2",t:"mc",lv:2,tb:"produkSheet",q:"Kamu ingin mencari produk berdasarkan HARGA (kolom C) dan mengambil NAMA-nya (kolom A, di sebelah kiri). Mana yang TIDAK bisa melakukannya secara langsung?",o:["VLOOKUP","INDEX-MATCH","XLOOKUP","FILTER"],a:0,
 e:"VLOOKUP hanya bisa mencari di kolom PALING KIRI tabel lalu mengambil ke kanan. Mengambil ke kiri tidak bisa tanpa trik. INDEX-MATCH, XLOOKUP, dan FILTER bebas arah.",
 w:[null,"Bisa: =INDEX(A2:A5, MATCH(2000000, C2:C5, 0)).","Bisa: =XLOOKUP(2000000, C2:C5, A2:A5).","Bisa: =FILTER(A2:A5, C2:C5=2000000)."]},
{k:"lookup2",t:"mc",lv:3,tb:"komisi",q:"Total penjualan Citra 7.000.000. Hasil rumus ini adalah…",kode:"=XLOOKUP(7000000, A2:A4, B2:B4, , -1)",o:["3%","2%","5%","#N/A"],a:0,
 e:"match_mode −1 = cari yang persis; kalau tidak ada, ambil nilai lebih KECIL terdekat. 7.000.000 tidak ada di tabel, dan nilai lebih kecil terdekat adalah 5.000.000 → 3%. Inilah cara membuat tarif bertingkat (komisi, diskon, grade) tanpa IF bertingkat yang panjang. Versi lama: =VLOOKUP(7000000, A2:B4, 2, TRUE) dengan batas bawah diurutkan naik.",
 w:[null,"2% berlaku untuk penjualan di bawah 5 juta.","5% baru berlaku mulai 10 juta.","Tanpa match_mode memang #N/A, tapi rumus ini memakai −1."]},
{k:"lookup2",t:"mc",lv:2,tb:"produkSheet",q:"Rumus =VLOOKUP(\"Mouse\", A2:C5, 3) — tanpa argumen ke-4 — kadang mengambil harga produk lain. Kenapa?",o:["Tanpa argumen ke-4, VLOOKUP memakai pencocokan PERKIRAAN yang mengharuskan data terurut; untuk pencarian persis tulis FALSE","VLOOKUP tidak bisa mencari teks","Kolom ke-3 tidak ada","'Mouse' harus ditulis huruf kecil"],a:0,
 e:"Default VLOOKUP adalah approximate match. Pada data yang tidak diurutkan, hasilnya bisa salah TANPA pesan error — berbahaya karena tidak kelihatan. Selalu tulis =VLOOKUP(\"Mouse\",A2:C5,3,FALSE). XLOOKUP lebih aman karena default-nya exact match.",
 w:[null,"VLOOKUP bisa mencari teks.","Range A2:C5 punya 3 kolom, jadi kolom ke-3 (Harga) ada.","Pencarian di Excel tidak peka huruf besar/kecil."]},
{k:"lookup2",t:"mc",lv:1,tb:"penjualan",q:"Rumus ini ditulis di H2 (Excel 365). Hasilnya…",kode:"=UNIQUE(A2:A11)",o:["Daftar nama sales tanpa duplikat (Andi, Bima, Citra, Dewi) yang otomatis 'tumpah' ke H2:H5","Hanya 'Andi' di H2","Angka 4","10 nama termasuk yang dobel"],a:0,
 e:"UNIQUE adalah dynamic array: satu rumus menghasilkan banyak nilai yang otomatis mengisi sel di bawahnya (spill). Hasilnya cocok dipakai sebagai daftar baris laporan, lalu di sebelahnya ditulis SUMIFS per nama.",
 w:[null,"Dynamic array mengisi beberapa sel sekaligus, bukan satu.","Angka 4 adalah hasil COUNTA(UNIQUE(A2:A11)).","UNIQUE justru membuang yang dobel."]},
{k:"lookup2",t:"mc",lv:2,tb:"penjualan",q:"Berapa BARIS yang dihasilkan rumus ini?",kode:'=FILTER(A2:F11, B2:B11="Bandung")',o:["3","4","10","1"],a:0,
 e:"FILTER mengambil semua baris yang memenuhi syarat. Wilayah Bandung ada di baris 3 (Bima, Mouse), 6 (Dewi, Laptop), dan 11 (Bima, Monitor) → 3 baris lengkap dengan 6 kolom. Hasilnya ikut berubah saat data sumber berubah — beda dengan copy-paste hasil filter manual.",
 w:[null,"Jakarta yang punya 4 baris.","10 adalah semua baris tanpa syarat.","FILTER mengembalikan SEMUA baris yang cocok, bukan hanya yang pertama."]},
{k:"lookup2",t:"mc",lv:2,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:"=FILTER(A2:A11, F2:F11>=7000000)",o:["Andi, Dewi, Citra","Andi saja","Andi, Citra, Dewi, Bima","Dewi, Citra"],a:0,
 e:"Total ≥ 7 juta ada di baris 2 (Andi, 14 juta), 6 (Dewi, 7 juta), dan 8 (Citra, 7 juta). Urutan hasil mengikuti urutan data asli. Bungkus dengan SORT jika ingin diurutkan.",
 w:[null,"≥ berarti 7 juta juga termasuk.","Bima tidak punya transaksi ≥ 7 juta.","Andi (14 juta) juga memenuhi syarat."]},
{k:"lookup2",t:"mc",lv:2,tb:"penjualan",q:"Nilai PERTAMA (paling atas) hasil rumus ini adalah…",kode:"=SORT(UNIQUE(C2:C11))",o:["Keyboard","Laptop","Mouse","Monitor"],a:0,
 e:"UNIQUE menghasilkan Laptop, Mouse, Monitor, Keyboard (urutan kemunculan). SORT lalu mengurutkan A→Z: Keyboard, Laptop, Monitor, Mouse.",
 w:[null,"Laptop paling atas sebelum diurutkan. SORT mengurutkan A→Z.","Mouse justru paling akhir secara abjad.","Monitor ada di urutan ke-3 setelah diurutkan."]},
{k:"lookup2",t:"mc",lv:2,q:"Rumus =UNIQUE(A2:A11) di H2 menampilkan #SPILL!. Penyebab paling umum:",o:["Ada sel yang tidak kosong di area H3:H5 yang akan diisi hasilnya","Fungsi UNIQUE salah ketik","Data A2:A11 kosong","Excel kehabisan memori"],a:0,
 e:"Dynamic array butuh ruang kosong untuk 'tumpah'. Kalau ada isi di jalurnya (bahkan satu spasi), muncul #SPILL!. Klik sel error untuk melihat garis putus-putus area yang dibutuhkan, lalu kosongkan sel penghalangnya.",
 w:[null,"Salah ketik nama fungsi menghasilkan #NAME?.","Data kosong menghasilkan hasil kosong/#CALC!, bukan #SPILL!.","Ini masalah ruang di sheet, bukan memori."]},
{k:"lookup2",t:"mc",lv:2,tb:"penjualan",q:"Hasil rumus ini adalah…",kode:"=COUNTA(UNIQUE(B2:B11))",o:["3","10","4","1"],a:0,
 e:"Wilayah unik: Jakarta, Bandung, Surabaya → 3. Pola 'hitung nilai unik' ini setara dengan COUNT(DISTINCT wilayah) di SQL.",
 w:[null,"10 adalah semua baris termasuk yang dobel.","Ada 4 sales unik, tapi wilayah unik hanya 3.","UNIQUE mengembalikan semua nilai unik, bukan satu."]},
{k:"lookup2",t:"mc",lv:3,q:"Tabel target: nama sales di A2:A5, bulan Jan–Mar di B1:D1, angka target di B2:D5. Rumus untuk mengambil target 'Citra' di bulan 'Feb':",o:['=INDEX(B2:D5, MATCH("Citra",A2:A5,0), MATCH("Feb",B1:D1,0))','=VLOOKUP("Citra","Feb",B2:D5)','=INDEX(B2:D5, "Citra", "Feb")','=MATCH("Citra","Feb")'],a:0,
 e:"INDEX bisa menerima nomor BARIS dan nomor KOLOM. MATCH pertama mencari baris Citra, MATCH kedua mencari kolom Feb. Ini disebut pencarian dua arah (two-way lookup) — sering dipakai untuk tabel target vs realisasi.",
 w:[null,"Susunan argumen VLOOKUP tidak seperti itu, dan VLOOKUP tidak bisa mencari kolom berdasarkan judul tanpa MATCH.","INDEX butuh ANGKA posisi, bukan teks. Teks harus diubah jadi posisi dengan MATCH.","MATCH hanya mengembalikan posisi, dan argumennya pun salah."]},

// ---- BAB 10: Error, IFERROR & data yang rapi ----
{k:"error",t:"mc",lv:1,q:"Rumus =D2/C2 menampilkan #DIV/0!. Artinya…",o:["Pembagi (C2) bernilai 0 atau kosong","Nama fungsi salah ketik","Data yang dicari tidak ditemukan","Kolomnya terlalu sempit"],a:0,
 e:"#DIV/0! = pembagian dengan nol. Sering terjadi saat menghitung persentase atau rata-rata dan datanya belum lengkap.",
 w:[null,"Salah ketik nama fungsi menghasilkan #NAME?.","Data lookup yang tidak ditemukan menghasilkan #N/A.","Kolom sempit menampilkan #####."]},
{k:"error",t:"mc",lv:1,q:"Fungsi lookup (XLOOKUP/VLOOKUP/MATCH) tidak menemukan nilai yang dicari. Error yang muncul:",o:["#N/A","#REF!","#DIV/0!","#NUM!"],a:0,
 e:"#N/A = Not Available (tidak tersedia). Biasanya karena nilainya memang tidak ada, salah ketik, atau ada spasi tersembunyi.",
 w:[null,"#REF! muncul saat sel yang dirujuk terhapus.","#DIV/0! muncul saat membagi dengan nol.","#NUM! muncul pada perhitungan angka yang tidak mungkin, misal akar dari bilangan negatif."]},
{k:"error",t:"mc",lv:1,q:"=SUMIFF(F2:F11, A2:A11, \"Andi\") menampilkan #NAME?. Penyebabnya:",o:["Nama fungsi salah ketik (seharusnya SUMIFS atau SUMIF)","Data Andi tidak ada","Pemisahnya harus titik koma","Range-nya terlalu besar"],a:0,
 e:"#NAME? berarti Excel tidak mengenali sebuah nama: fungsi salah ketik, atau teks di dalam rumus lupa diberi tanda kutip (=COUNTIF(A2:A11, Andi)).",
 w:[null,"Kalau datanya tidak ada, SUMIFS menghasilkan 0, bukan error.","Pemisah yang salah biasanya ditolak saat mengetik rumus, bukan menghasilkan #NAME?.","Ukuran range tidak menyebabkan #NAME?."]},
{k:"error",t:"mc",lv:2,q:"Kemarin rumus =SUM(F2:F11)/H1 normal. Hari ini muncul #REF! setelah kamu menghapus kolom H. Kenapa?",o:["Sel yang dirujuk rumus (H1) sudah terhapus, jadi referensinya hilang","Kolom F ikut terhapus","SUM tidak boleh dibagi","File perlu disimpan ulang"],a:0,
 e:"#REF! = referensi tidak valid. Excel mengganti H1 dengan #REF! karena kolomnya sudah tidak ada. Perbaiki rumusnya atau batalkan penghapusan (Ctrl+Z). Pelajaran: cek dulu apakah ada rumus yang bergantung pada kolom yang akan dihapus.",
 w:[null,"Kolom F masih ada; yang hilang adalah H.","Hasil SUM boleh dibagi seperti angka biasa.","Menyimpan ulang tidak mengembalikan referensi yang hilang."]},
{k:"error",t:"mc",lv:2,q:"=D2*E2 menghasilkan #VALUE! hanya di satu baris. Ternyata D2 berisi '2 unit'. Penyebabnya…",o:["D2 berisi teks ('2 unit'), jadi tidak bisa dikalikan","E2 terlalu besar","Perkalian harus memakai PRODUCT","Baris itu disembunyikan"],a:0,
 e:"#VALUE! = jenis data salah, misalnya teks ikut dihitung. Simpan angka dan satuan di kolom terpisah: Qty = 2, Satuan = 'unit'. Aturan data rapi: satu sel, satu jenis informasi.",
 w:[null,"Angka besar tidak menyebabkan #VALUE!.","Tanda * boleh dipakai; PRODUCT hanyalah alternatif.","Baris tersembunyi tetap dihitung normal."]},
{k:"error",t:"mc",lv:1,q:"Jika C2 kosong, hasil rumus ini adalah…",kode:"=IFERROR(D2/C2, 0)",o:["0","#DIV/0!","Sel kosong","Isi D2"],a:0,
 e:"IFERROR(nilai, nilai_jika_error): kalau perhitungannya menghasilkan error APA PUN, tampilkan nilai pengganti. D2/C2 dengan C2 kosong → #DIV/0! → diganti 0.",
 w:[null,"Error itulah yang ditangkap IFERROR dan diganti 0.","Penggantinya 0, bukan kosong. Untuk kosong tulis \"\".","IFERROR mengganti dengan argumen kedua (0)."]},
{k:"error",t:"mc",lv:3,q:"Kenapa analis berpengalaman tidak membungkus SEMUA rumus dengan IFERROR(…, 0)?",o:["IFERROR menyembunyikan semua error, termasuk kesalahan rumus sungguhan — angka 0 palsu bisa masuk ke total tanpa ketahuan","IFERROR membuat file lebih besar","IFERROR tidak bisa dipakai bersama XLOOKUP","Angka 0 tidak boleh muncul di laporan"],a:0,
 e:"Error adalah alarm. Kalau semua alarm dimatikan, salah ketik range atau data yang hilang ikut tersembunyi. Pakai IFERROR/IFNA secukupnya (misalnya hanya untuk lookup yang memang mungkin tidak ketemu), dan isi penggantinya dengan teks yang jelas seperti 'Tidak ada'.",
 w:[null,"Dampaknya ke ukuran file sangat kecil.","IFERROR bisa membungkus XLOOKUP.","0 boleh muncul — masalahnya adalah 0 yang PALSU."]},
{k:"error",t:"mc",lv:2,q:"Untuk membungkus lookup, IFNA lebih aman daripada IFERROR karena…",o:["IFNA hanya menangkap #N/A (tidak ketemu); error lain seperti #REF! atau #VALUE! tetap terlihat","IFNA lebih cepat dihitung","IFNA bisa mengganti nilai yang benar","IFERROR sudah tidak didukung"],a:0,
 e:"Lookup yang gagal menemukan data menghasilkan #N/A — itu yang wajar ditangani. Error lain menandakan rumusmu rusak dan sebaiknya tetap terlihat. Di XLOOKUP, kamu bahkan bisa memakai argumen ke-4 (if_not_found).",
 w:[null,"Perbedaan kecepatannya tidak berarti.","Tidak ada fungsi yang mengganti nilai yang benar.","IFERROR masih didukung penuh."]},
{k:"error",t:"is",lv:2,q:"Fungsi yang HANYA menangkap error #N/A:  =____(XLOOKUP(H2,A2:A5,C2:C5),\"Tidak ada\")",a:["ifna"],
 h:"Namanya gabungan IF dan nama error-nya.",
 e:"IFNA(nilai, pengganti) hanya bereaksi pada #N/A. Error lain tetap terlihat sehingga kesalahan rumus tidak tersembunyi."},
{k:"error",t:"mc",lv:1,q:"Supaya orang tidak salah ketik nama wilayah ('Jakrta', 'jakarta '), fitur yang tepat:",o:["Data → Data Validation → List (dropdown pilihan)","Conditional Formatting","Freeze Panes","Mengganti warna huruf"],a:0,
 e:"Data Validation membatasi isi sel: dropdown daftar wilayah, angka minimal/maksimal, atau rentang tanggal. Mencegah data kotor sejak awal jauh lebih murah daripada membersihkannya belakangan.",
 w:[null,"Conditional Formatting hanya mewarnai, tidak mencegah salah ketik.","Freeze Panes mengunci tampilan baris/kolom saat menggulir.","Warna huruf tidak membatasi isi sel."]},
{k:"error",t:"mc",lv:2,q:"Data diubah menjadi Excel Table (Ctrl+T) bernama DataPenjualan. Keuntungan =SUM(DataPenjualan[Total]) dibanding =SUM(F2:F11):",o:["Range otomatis ikut bertambah saat ada baris baru, dan nama kolomnya mudah dibaca","Hasilnya lebih akurat","File bisa dibuka tanpa Excel","Tidak ada bedanya"],a:0,
 e:"Structured reference terbaca seperti kalimat dan tidak perlu diedit setiap ada data baru. Pivot Table yang sumbernya Table juga otomatis mencakup baris baru setelah Refresh.",
 w:[null,"Hasilnya sama selama datanya sama; bedanya ada di perawatan saat data bertambah.","Tetap butuh Excel atau aplikasi yang kompatibel.","Bedanya terasa saat data bertambah setiap minggu."]},
{k:"error",t:"mc",lv:3,q:"Tiga sel berisi 1,4; 1,4; 1,4 dengan format 0 desimal, sehingga TAMPIL 1, 1, 1. SUM-nya tampil 4. Kenapa?",o:["Format hanya mengubah TAMPILAN; nilai aslinya 1,4 sehingga totalnya 4,2 (tampil 4). Pakai ROUND jika nilainya memang harus dibulatkan","Excel salah hitung","SUM selalu membulatkan ke atas","Ada sel tersembunyi"],a:0,
 e:"Selisih 'receh' di laporan keuangan sering berasal dari sini. Jika aturan bisnisnya memang dibulatkan per baris, bulatkan NILAINYA dengan =ROUND(x,0) sebelum dijumlah.",
 w:[null,"Excel menghitung nilai asli dengan benar; tampilanlah yang menipu.","SUM tidak membulatkan apa pun.","Tidak perlu sel tersembunyi untuk menjelaskan selisih ini."]},
{k:"error",t:"mc",lv:1,q:"Saat menggulir ke baris 500, judul kolom tidak terlihat lagi. Fitur agar baris judul selalu tampil:",o:["View → Freeze Panes → Freeze Top Row","Data → Sort","Insert → Header","Home → Wrap Text"],a:0,
 e:"Freeze Panes mengunci baris (dan/atau kolom) supaya tetap terlihat saat menggulir. Kecil, tapi sangat membantu saat memeriksa data besar.",
 w:[null,"Sort mengurutkan data.","Header di menu Insert untuk cetak halaman, bukan untuk mengunci tampilan.","Wrap Text membuat teks panjang turun ke baris berikutnya di dalam sel."]},
{k:"error",t:"mc",lv:1,q:"Sebuah sel menampilkan ######. Paling sering artinya:",o:["Kolom terlalu sempit untuk menampilkan angka/tanggal — lebarkan kolomnya","Rumusnya error","Datanya terhapus","File rusak"],a:0,
 e:"##### bukan error rumus. Klik dua kali garis batas judul kolom untuk melebarkan otomatis. (Kasus langka: tanggal bernilai negatif juga tampil #####.)",
 w:[null,"Error rumus selalu diawali # lalu namanya, misal #N/A atau #REF!.","Isinya masih ada, hanya tidak muat ditampilkan.","File baik-baik saja."]}
);

MATERI_EXCEL.push(
{k:"teks",judul:"Teks & Membersihkan Data",materi:`
<p>Di dunia kerja, data hampir tidak pernah datang dalam keadaan rapi. Data hasil export sistem, form Google, atau ketikan banyak orang biasanya berantakan. Analis yang bisa <b>membersihkan data dengan cepat</b> sangat dihargai.</p>
{{tb:kotor}}
<p>Masalah di data ini: spasi berlebih (A2, A4, B3), huruf besar-kecil tidak konsisten, format telepon berbeda, dan baris 7 adalah <b>duplikat</b> baris 3.</p>
<pre><code>=TRIM(A2)          → buang spasi berlebih     "rina wulandari"
=PROPER(A3)        → Kapital Tiap Kata         "Tono Saputra"
=UPPER(B2) / LOWER → HURUF BESAR / kecil
=LEN(E2)           → jumlah karakter          12
=LEFT(E2,3)        → 3 karakter dari kiri     "INV"
=RIGHT(E2,3)       → 3 karakter dari kanan    "001"
=MID(E2,5,4)       → mulai posisi 5, ambil 4  "2026"
=FIND("@",D3)      → posisi karakter "@"      5
=SUBSTITUTE(C2,"-","") → ganti teks          "081234567890"
=A2&" - "&B2       → sambung teks</code></pre>
<p><b>Resep pembersihan yang aman:</b></p>
<ol>
<li>Jangan menimpa data asli. Buat <b>kolom bantu</b>: <code>=PROPER(TRIM(A2))</code>, lalu tarik ke bawah.</li>
<li>Cek duplikat: <code>=COUNTIF($A$2:$A$7,A2)</code> → hasil &gt; 1 artinya dobel.</li>
<li>Setelah rapi, salin kolom bantu → <i>Paste Special → Values</i>, lalu <b>Data → Remove Duplicates</b>.</li>
<li>Untuk memecah teks: <b>Data → Text to Columns</b>, atau ketik 1 contoh lalu <b>Ctrl+E (Flash Fill)</b>.</li>
</ol>
<div class="catatan">⚠️ <b>Jebakan klasik:</b> 'Bandung' dan 'Bandung ' (ada spasi di belakang) dianggap BERBEDA oleh COUNTIF, SUMIFS, dan Pivot Table. Kalau angka laporanmu tidak cocok, curigai spasi tersembunyi dan cek dengan <code>=LEN()</code>.</div>
<div class="praktik">🧪 <b>Praktik di Excel:</b> file latihan → sheet <i>Bab7-Teks</i>.</div>`},

{k:"tanggal",judul:"Tanggal & Waktu — Analisis per Periode",materi:`
<p>Laporan bisnis hampir selalu bertanya: <i>bulan ini berapa? telat berapa hari? jatuh tempo kapan?</i> Kuncinya satu: <b>Excel menyimpan tanggal sebagai angka hari</b> (1 Januari 2026 = 46023). Karena itu tanggal bisa dikurangkan, ditambah, dan dibandingkan.</p>
{{tb:transaksi}}
<pre><code>=DAY(B2) / =MONTH(B2) / =YEAR(B2)   → 3 / 1 / 2026
=E3-B3                 → selisih hari (36)
=B2+30                 → jatuh tempo 30 hari
=EOMONTH(B6,0)         → akhir bulan: 28/02/2026
=TODAY()               → tanggal hari ini (selalu terbaru)
=NETWORKDAYS(awal,akhir) → hari kerja Senin–Jumat
=COUNTBLANK(E2:E9)     → faktur belum dibayar (1)</code></pre>
<p><b>Total per bulan</b> dengan SUMIFS dan rentang tanggal:</p>
<pre><code>=SUMIFS(D2:D9, B2:B9,"&gt;="&amp;DATE(2026,2,1), B2:B9,"&lt;"&amp;DATE(2026,3,1))
→ 8.950.000 (semua transaksi Februari)</code></pre>
<p>Perhatikan <code>"&gt;="&amp;DATE(...)</code>: operator ditulis sebagai teks lalu disambung dengan nilai tanggal.</p>
<p><b>Status telat bayar</b>: <code>=IF(E2-B2&gt;30,"Telat","Tepat waktu")</code> → INV-02 (36 hari) dan INV-05 (44 hari) telat.</p>
<div class="catatan">🌏 <b>Hati-hati format:</b> Indonesia dd/mm/yyyy, Amerika mm/dd/yyyy. 03/01/2026 bisa berarti 3 Januari atau 1 Maret. Tanggal yang tampil <b>rata kiri</b> biasanya masih teks — ubah dengan Text to Columns (format DMY). Saat bertukar data, pakai format ISO <code>2026-01-03</code>.</div>
<div class="praktik">🧪 <b>Praktik di Excel:</b> file latihan → sheet <i>Bab8-Tanggal</i>.</div>`},

{k:"lookup2",judul:"INDEX-MATCH & Dynamic Array (FILTER, UNIQUE, SORT)",materi:`
<p>Bab ini melengkapi XLOOKUP dengan dua hal: <b>INDEX-MATCH</b> (wajib untuk Excel versi lama dan tes kerja) dan <b>dynamic array</b> (Excel 365/Google Sheets) yang membuat laporan otomatis.</p>
{{tb:produkSheet}}
<p><b>MATCH</b> mencari POSISI, <b>INDEX</b> mengambil ISI pada posisi itu:</p>
<pre><code>=MATCH("Monitor", A2:A5, 0)          → 3   (urutan ke-3; 0 = cari yang persis)
=INDEX(C2:C5, 3)                     → 2.000.000
=INDEX(C2:C5, MATCH("Monitor",A2:A5,0))  → 2.000.000</code></pre>
<p>Kelebihannya dibanding VLOOKUP: bisa mencari <b>ke kiri</b>, tidak rusak saat kolom disisipkan, dan bisa <b>dua arah</b>:</p>
<pre><code>=INDEX(B2:D5, MATCH("Citra",A2:A5,0), MATCH("Feb",B1:D1,0))</code></pre>
<p><b>Tarif bertingkat</b> (komisi, diskon, grade) tanpa IF panjang — cari batas bawah terdekat:</p>
{{tb:komisi}}
<pre><code>=XLOOKUP(7000000, A2:A4, B2:B4, , -1)   → 3%
=VLOOKUP(7000000, A2:B4, 2, TRUE)       → 3%  (versi lama, batas harus urut naik)</code></pre>
<p><b>Dynamic array</b> — satu rumus, banyak hasil yang "tumpah" (spill) ke bawah:</p>
<pre><code>=UNIQUE(A2:A11)                → Andi, Bima, Citra, Dewi
=SORT(UNIQUE(C2:C11))          → Keyboard, Laptop, Monitor, Mouse
=FILTER(A2:F11, B2:B11="Bandung")  → 3 baris Bandung
=COUNTA(UNIQUE(B2:B11))        → 3 wilayah unik</code></pre>
<div class="catatan">⚠️ <b>#SPILL!</b> artinya area tempat hasil akan tumpah tidak kosong. Kosongkan sel penghalang. Dan ingat: VLOOKUP tanpa argumen ke-4 memakai pencocokan <i>perkiraan</i> — selalu tulis <code>FALSE</code> untuk pencarian persis.</div>
<div class="praktik">🧪 <b>Praktik di Excel:</b> file latihan → sheet <i>Bab9-Lookup</i>.</div>`},

{k:"error",judul:"Error, IFERROR & Data yang Rapi",materi:`
<p>Error di Excel bukan musuh — ia <b>alarm</b> yang memberi tahu apa yang salah. Kenali tujuh yang paling sering:</p>
<table class="mini-pivot"><tr><th>Error</th><th>Artinya</th><th>Biasanya karena</th></tr>
<tr><td><code>#DIV/0!</code></td><td>bagi dengan nol</td><td>pembagi kosong/0</td></tr>
<tr><td><code>#N/A</code></td><td>tidak ditemukan</td><td>lookup gagal, spasi tersembunyi</td></tr>
<tr><td><code>#NAME?</code></td><td>nama tidak dikenal</td><td>salah ketik fungsi, teks tanpa kutip</td></tr>
<tr><td><code>#REF!</code></td><td>referensi hilang</td><td>kolom/baris yang dirujuk dihapus</td></tr>
<tr><td><code>#VALUE!</code></td><td>jenis data salah</td><td>teks ikut dihitung ("2 unit")</td></tr>
<tr><td><code>#SPILL!</code></td><td>tidak bisa tumpah</td><td>area hasil dynamic array tidak kosong</td></tr>
<tr><td><code>#####</code></td><td>bukan error</td><td>kolom terlalu sempit</td></tr></table>
<p><b>Menangani error dengan bijak:</b></p>
<pre><code>=IFERROR(D2/C2, 0)                          → semua error diganti 0
=IFNA(XLOOKUP(H2,A2:A5,C2:C5), "Tidak ada")  → hanya #N/A yang diganti
=XLOOKUP(H2, A2:A5, C2:C5, "Tidak ada")      → paling ringkas</code></pre>
<div class="catatan">⚠️ Jangan bungkus semua rumus dengan <code>IFERROR(…,0)</code>. Kesalahan rumus sungguhan ikut tersembunyi, dan angka 0 palsu masuk ke total.</div>
<p><b>Kebiasaan data rapi</b> yang membuat laporanmu jarang error:</p>
<ul>
<li><b>Satu sel, satu informasi</b>: Qty = 2 dan Satuan = unit di kolom berbeda.</li>
<li><b>Data Validation</b> (dropdown) agar input konsisten.</li>
<li><b>Excel Table</b> (Ctrl+T) → <code>=SUM(DataPenjualan[Total])</code> otomatis ikut bertambah.</li>
<li><b>ROUND</b> jika nilai memang harus dibulatkan; format desimal hanya mengubah tampilan.</li>
<li><b>Freeze Panes</b> agar judul kolom tetap terlihat.</li>
</ul>
<div class="praktik">🧪 <b>Praktik di Excel:</b> file latihan → sheet <i>Bab10-Error</i>.</div>`}
);
