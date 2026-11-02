// ============ SQL lanjutan — bab 5–8 ============
// CASE WHEN, NULL & fungsi bawaan, CTE & UNION, Window Function.
// Database sama: pelanggan, produk, pesanan (js/data/dataset.js).
// vr:"sql" + vx = dipakai skrip verifikasi (hasil query dijalankan sungguhan). Tidak tampil di aplikasi.

SOAL_SQL.push(
// ---- BAB 5: CASE WHEN ----
{k:"case",t:"mc",lv:1,q:"CASE WHEN di SQL paling mirip dengan fungsi apa di Excel?",o:["IF / IFS","SUMIFS","XLOOKUP","CONCAT"],a:0,
 e:"CASE WHEN syarat THEN hasil ... ELSE hasil_lain END bekerja seperti IF bertingkat atau IFS: syarat diperiksa berurutan, yang pertama benar yang dipakai.",
 w:[null,"SUMIFS menjumlah dengan syarat; di SQL padanannya SUM + WHERE/GROUP BY (atau SUM(CASE…)).","XLOOKUP padanannya JOIN.","CONCAT untuk menyambung teks."]},
{k:"case",t:"mc",lv:2,tb:"produk",q:"Label untuk Monitor (harga 2.000.000) adalah…",kode:"SELECT nama,\n  CASE WHEN harga >= 2000000 THEN 'Mahal'\n       ELSE 'Murah' END AS label\nFROM produk;",o:["Mahal","Murah","NULL","Error"],a:0,vr:"sql",vx:[["Laptop","Mahal"],["Mouse","Murah"],["Monitor","Mahal"],["Keyboard","Murah"]],
 e:"Syaratnya >= (lebih besar ATAU SAMA DENGAN). 2.000.000 >= 2.000.000 bernilai benar, jadi labelnya 'Mahal'.",
 w:[null,"Kalau syaratnya > (tanpa =), barulah Monitor jadi 'Murah'.","NULL hanya muncul jika tidak ada syarat yang cocok DAN tidak ada ELSE.","Sintaksnya benar: CASE … WHEN … THEN … ELSE … END."]},
{k:"case",t:"mc",lv:2,tb:"produk",q:"Hasil query ini adalah…",kode:"SELECT CASE WHEN harga >= 2000000 THEN 'Mahal'\n            ELSE 'Murah' END AS label,\n       COUNT(*) AS jumlah\nFROM produk\nGROUP BY label;",o:["Mahal 2, Murah 2","Mahal 1, Murah 3","Mahal 3, Murah 1","Error: GROUP BY tidak boleh memakai alias"],a:0,vr:"sql",vx:[["Mahal",2],["Murah",2]],
 e:"CASE membuat kolom kategori baru, lalu GROUP BY menghitung per kategori. Mahal: Laptop & Monitor. Murah: Mouse & Keyboard. Ini cara membuat 'bucket' seperti rentang harga atau segmen pelanggan.",
 w:[null,"Monitor (tepat 2 juta) masuk 'Mahal' karena syaratnya >=.","Hanya Laptop dan Monitor yang ≥ 2 juta.","SQLite, MySQL, dan PostgreSQL mengizinkan alias di GROUP BY. (SQL Server tidak — di sana tulis ulang CASE-nya di GROUP BY.)"]},
{k:"case",t:"mc",lv:2,tb:"pesanan",q:"Pesanan 106 punya qty 5. Nilai kolom ukuran untuknya adalah…",kode:"SELECT id, qty,\n  CASE WHEN qty >= 1 THEN 'Kecil'\n       WHEN qty >= 5 THEN 'Besar'\n  END AS ukuran\nFROM pesanan WHERE id = 106;",o:["Kecil","Besar","NULL","Kecil dan Besar"],a:0,vr:"sql",vx:[[106,5,"Kecil"]],
 e:"CASE berhenti di syarat PERTAMA yang benar. 5 >= 1 sudah benar, jadi hasilnya 'Kecil' dan WHEN kedua tidak pernah diperiksa. Aturan: tulis syarat paling ketat lebih dulu (qty >= 5 di atas qty >= 1). Sama persis dengan IF bertingkat di Excel.",
 w:[null,"Seharusnya 'Besar' — tapi urutan WHEN-nya terbalik, jadi WHEN kedua tidak pernah tercapai.","Ada syarat yang cocok (qty >= 1), jadi tidak NULL.","CASE hanya mengembalikan satu nilai."]},
{k:"case",t:"mc",lv:2,tb:"pelanggan",q:"Hasil query ini untuk Budi (kota Surabaya) adalah…",kode:"SELECT nama,\n  CASE WHEN kota = 'Jakarta' THEN 'Pusat' END AS wilayah\nFROM pelanggan WHERE nama = 'Budi';",o:["NULL","Pusat","'' (teks kosong)","Cabang"],a:0,vr:"sql",vx:[["Budi",null]],
 e:"Tanpa ELSE, baris yang tidak cocok dengan WHEN mana pun bernilai NULL. Biasakan selalu menulis ELSE supaya tidak ada nilai yang 'hilang' di laporan.",
 w:[null,"Budi tinggal di Surabaya, bukan Jakarta.","NULL berbeda dengan teks kosong.","Tidak ada kata 'Cabang' di query."]},
{k:"case",t:"mc",lv:3,tb:["pesanan","produk"],q:"Produk id 1 & 3 = Komputer, id 2 & 4 = Aksesoris. Hasil query ini adalah…",kode:"SELECT\n  SUM(CASE WHEN produk_id IN (1,3) THEN qty ELSE 0 END) AS qty_komputer,\n  SUM(CASE WHEN produk_id IN (2,4) THEN qty ELSE 0 END) AS qty_aksesoris\nFROM pesanan;",o:["5 dan 11","11 dan 5","16 dan 16","4 dan 4"],a:0,vr:"sql",vx:[[5,11]],
 e:"Ini 'conditional aggregation': CASE memilih qty yang dihitung, sisanya 0. Komputer: 1+2+1+1 = 5 (pesanan 101, 103, 104, 107). Aksesoris: 3+2+5+1 = 11. Teknik ini membuat tabel ala pivot (kategori jadi kolom) langsung di SQL.",
 w:[null,"Kebalikannya — Mouse (id 2) terjual paling banyak, dan Mouse itu Aksesoris.","16 adalah total semua qty; CASE memisahkannya per kategori.","4 adalah BANYAKNYA pesanan per kategori, bukan jumlah qty-nya."]},
{k:"case",t:"mc",lv:3,tb:"pesanan",q:"Hasil query ini adalah…",kode:"SELECT COUNT(CASE WHEN qty >= 2 THEN 1 END) AS pesanan_besar\nFROM pesanan;",o:["4","8","12","3"],a:0,vr:"sql",vx:[[4]],
 e:"Untuk baris dengan qty < 2, CASE tanpa ELSE menghasilkan NULL — dan COUNT(kolom) tidak menghitung NULL. Jadi yang terhitung hanya pesanan dengan qty ≥ 2: 102 (3), 103 (2), 105 (2), 106 (5) → 4. Mirip COUNTIF di Excel.",
 w:[null,"8 adalah semua pesanan — COUNT(*) yang akan menghasilkan 8.","12 adalah jumlah qty dari pesanan ≥ 2 (3+2+2+5), bukan banyaknya pesanan.","Ada empat pesanan dengan qty ≥ 2."]},
{k:"case",t:"is",lv:1,q:"Setiap CASE harus ditutup dengan kata kunci ___",a:["end"],
 h:"Tiga huruf, artinya 'akhir'.",
 e:"Bentuk lengkapnya: CASE WHEN … THEN … ELSE … END. Lupa END adalah syntax error paling sering saat menulis CASE."},
{k:"case",t:"mc",lv:2,tb:"pelanggan",q:"Nama di baris PERTAMA hasil query ini adalah…",kode:"SELECT nama, kota\nFROM pelanggan\nORDER BY CASE WHEN kota = 'Bandung' THEN 0 ELSE 1 END, nama;",o:["Lia","Tono","Budi","Rina"],a:0,vr:"sql",vx:[["Lia","Bandung"],["Tono","Bandung"],["Budi","Surabaya"],["Rina","Jakarta"],["Sari","Jakarta"]],
 e:"CASE di ORDER BY membuat urutan khusus: Bandung diberi angka 0 (paling depan), kota lain 1. Lalu di dalam kelompok yang sama diurutkan berdasarkan nama. Bandung: Lia, Tono → Lia paling atas.",
 w:[null,"Tono juga Bandung, tapi di dalam kelompoknya diurutkan berdasarkan nama: L sebelum T.","Budi bukan Bandung, jadi mendapat angka 1 dan berada setelah semua pelanggan Bandung.","Rina bukan Bandung."]},
{k:"case",t:"mc",lv:3,tb:["pelanggan","pesanan","produk"],q:"Berapa pelanggan yang masuk segmen VIP? (Belanja: Rina 9,45 jt; Sari 7,6 jt; Tono 4,3 jt; Budi 0,75 jt)",kode:"SELECT p.nama,\n  SUM(o.qty * pr.harga) AS belanja,\n  CASE WHEN SUM(o.qty * pr.harga) >= 5000000 THEN 'VIP'\n       WHEN SUM(o.qty * pr.harga) >= 1000000 THEN 'Reguler'\n       ELSE 'Baru' END AS segmen\nFROM pesanan o\nJOIN pelanggan p ON o.pelanggan_id = p.id\nJOIN produk pr  ON o.produk_id = pr.id\nGROUP BY p.nama;",o:["2","1","3","4"],a:0,
 e:"Belanja ≥ 5 juta: Rina (9,45 jt) dan Sari (7,6 jt) → 2 VIP. Tono = Reguler, Budi = Baru. Segmentasi berbasis aturan seperti ini adalah versi sederhana dari segmentasi di skripsimu (yang memakai clustering).",
 w:[null,"Sari (7,6 jt) juga ≥ 5 jt.","Tono (4,3 jt) masuk Reguler, belum VIP.","Budi hanya 750 ribu → Baru."]},
{k:"case",t:"mc",lv:1,q:"Mana yang BUKAN kegunaan CASE WHEN?",o:["Menggabungkan dua tabel berdasarkan id","Memberi label/kategori (misal Mahal/Murah)","Membuat kolom ala pivot dengan SUM(CASE …)","Membuat urutan khusus di ORDER BY"],a:0,
 e:"Menggabungkan tabel adalah tugas JOIN. CASE dipakai untuk label, conditional aggregation (pivot), dan urutan khusus.",
 w:[null,"Ini kegunaan paling umum CASE.","Ini disebut conditional aggregation.","CASE bisa dipakai di ORDER BY."]},

// ---- BAB 6: NULL & fungsi bawaan ----
{k:"nullfungsi",t:"mc",lv:1,q:"Di SQL, NULL artinya…",o:["Nilai tidak diketahui / tidak ada — bukan 0 dan bukan teks kosong","Angka nol","Teks kosong ''","Error"],a:0,
 e:"NULL = 'tidak ada nilainya'. Karena itu NULL tidak bisa dibandingkan dengan = dan merambat dalam perhitungan (NULL + 5 = NULL).",
 w:[null,"0 adalah nilai yang diketahui (nol).","'' adalah teks yang diketahui (kosong).","NULL adalah nilai yang sah, bukan error."]},
{k:"nullfungsi",t:"mc",lv:2,q:"Seandainya ada pelanggan yang kotanya NULL, berapa baris hasil query ini?",kode:"SELECT nama FROM pelanggan WHERE kota = NULL;",o:["Selalu 0 baris","Semua pelanggan yang kotanya NULL","Semua pelanggan","Error"],a:0,
 e:"Membandingkan apa pun dengan NULL memakai = hasilnya 'tidak diketahui', bukan benar — sehingga tidak ada baris yang lolos. Cara yang benar: WHERE kota IS NULL (atau IS NOT NULL).",
 w:[null,"Itulah yang diinginkan, tapi harus ditulis IS NULL.","WHERE tetap menyaring; hanya saja tidak ada yang lolos.","Query ini tidak error — justru itu bahayanya: diam-diam menghasilkan 0 baris."]},
{k:"nullfungsi",t:"mc",lv:2,tb:["pelanggan","pesanan"],q:"Lia belum pernah memesan. Nilai jml untuk Lia adalah…",kode:"SELECT p.nama, COUNT(*) AS jml\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nGROUP BY p.nama;",o:["1","0","NULL","Lia tidak muncul"],a:0,vr:"sql",vx:[["Budi",1],["Lia",1],["Rina",3],["Sari",2],["Tono",2]],
 e:"LEFT JOIN tetap menghasilkan SATU baris untuk Lia (kolom pesanannya NULL). COUNT(*) menghitung baris, jadi Lia = 1 — salah secara bisnis! Pakai COUNT(o.id): COUNT(kolom) tidak menghitung NULL, sehingga Lia = 0. Ini jebakan yang sering muncul di tes SQL.",
 w:[null,"0 adalah hasil yang BENAR secara bisnis, tapi butuh COUNT(o.id), bukan COUNT(*).","COUNT tidak pernah menghasilkan NULL.","LEFT JOIN mempertahankan semua pelanggan, termasuk Lia."]},
{k:"nullfungsi",t:"mc",lv:2,tb:["pelanggan","pesanan"],q:"Tanpa COALESCE, nilai total_qty untuk Lia adalah… (dengan COALESCE(SUM(o.qty), 0) nilainya jadi 0)",kode:"SELECT p.nama, SUM(o.qty) AS total_qty\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nGROUP BY p.nama;",o:["NULL","0","1","Error"],a:0,vr:"sql",vx:[["Budi",5],["Lia",null],["Rina",5],["Sari",3],["Tono",3]],
 e:"SUM dari nilai yang semuanya NULL hasilnya NULL. COALESCE(nilai, pengganti) mengambil nilai pertama yang bukan NULL, jadi COALESCE(SUM(o.qty), 0) mengubah NULL menjadi 0 — jauh lebih enak dibaca di laporan.",
 w:[null,"0 baru muncul setelah dibungkus COALESCE.","1 adalah hasil COUNT(*), bukan SUM.","Query ini valid."]},
{k:"nullfungsi",t:"mc",lv:2,q:"Hasil query ini adalah…",kode:"SELECT NULL + 5;",o:["NULL","5","0","Error"],a:0,vr:"sql",vx:[[null]],
 e:"NULL merambat: operasi aritmetika dengan NULL hasilnya NULL. Kalau sebuah kolom diskon bisa NULL, tulis harga - COALESCE(diskon, 0) supaya hasilnya tidak ikut NULL.",
 w:[null,"NULL tidak dianggap 0 dalam aritmetika.","NULL bukan 0.","Query ini valid."]},
{k:"nullfungsi",t:"mc",lv:1,q:"Hasil query ini adalah…",kode:"SELECT UPPER('jakarta'), LENGTH('Keyboard');",o:["JAKARTA dan 8","Jakarta dan 8","JAKARTA dan 7","jakarta dan 9"],a:0,vr:"sql",vx:[["JAKARTA",8]],
 e:"UPPER mengubah ke huruf besar (seperti UPPER di Excel). LENGTH menghitung karakter (seperti LEN di Excel): K-e-y-b-o-a-r-d = 8.",
 w:[null,"Kapital di awal saja bukan hasil UPPER.","'Keyboard' terdiri dari 8 huruf.","UPPER mengubah semua huruf menjadi kapital."]},
{k:"nullfungsi",t:"mc",lv:2,q:"Hasil query ini adalah…",kode:"SELECT SUBSTR('2026-01-12', 6, 2);",o:["01","20","12","-0"],a:0,vr:"sql",vx:[["01"]],
 e:"SUBSTR(teks, posisi_awal, panjang) — seperti MID di Excel. Posisi 1–4 = '2026', posisi 5 = '-', posisi 6–7 = '01' (bulan).",
 w:[null,"'20' adalah dua karakter pertama (posisi 1).","'12' ada di posisi 9–10 (tanggalnya).","Posisi 5 adalah '-', tapi query mulai dari posisi 6."]},
{k:"nullfungsi",t:"mc",lv:2,tb:"pelanggan",q:"Hasil query ini (SQLite/PostgreSQL) adalah…",kode:"SELECT nama || ' (' || kota || ')'\nFROM pelanggan WHERE id = 1;",o:["Rina (Jakarta)","Rina||(Jakarta)","RinaJakarta","Error"],a:0,vr:"sql",vx:[["Rina (Jakarta)"]],
 e:"Di SQLite dan PostgreSQL, || menyambung teks (seperti & di Excel). Di MySQL pakai CONCAT(nama, ' (', kota, ')'). Tiap database punya dialek sedikit berbeda — tapi konsepnya sama.",
 w:[null,"|| adalah operator, bukan teks yang ikut tampil.","Spasi dan tanda kurung ditulis di dalam kutip, jadi ikut tampil.","Query valid di SQLite dan PostgreSQL."]},
{k:"nullfungsi",t:"mc",lv:2,tb:"pesanan",q:"Hasil query ini adalah…",kode:"SELECT COUNT(DISTINCT pelanggan_id) FROM pesanan;",o:["4","8","5","3"],a:0,vr:"sql",vx:[[4]],
 e:"DISTINCT membuang duplikat sebelum dihitung. pelanggan_id di pesanan: 1,1,2,3,3,4,1,2 → unik: 1, 2, 3, 4 = 4 pelanggan yang pernah memesan. Setara =COUNTA(UNIQUE(...)) di Excel.",
 w:[null,"8 adalah jumlah pesanan (COUNT(*)).","Ada 5 pelanggan, tapi Lia belum pernah memesan.","Ada 4 pelanggan_id berbeda."]},
{k:"nullfungsi",t:"mc",lv:1,tb:"produk",q:"Hasil query ini adalah…",kode:"SELECT COUNT(*) FROM produk WHERE nama LIKE 'M%';",o:["2","1","3","0"],a:0,vr:"sql",vx:[[2]],
 e:"LIKE 'M%' = diawali huruf M, lalu apa saja (% = karakter apa pun berapa pun banyaknya). Cocok: Mouse dan Monitor.",
 w:[null,"Mouse DAN Monitor sama-sama diawali M.","Hanya dua produk yang diawali M.","Ada produk yang diawali M."]},
{k:"nullfungsi",t:"mc",lv:2,q:"Fungsi untuk mengambil BULAN dari kolom tanggal berbeda-beda per database. Yang benar untuk MySQL:",o:["MONTH(tanggal)","strftime('%m', tanggal)","EXTRACT(MONTH FROM tanggal) — hanya ada di MySQL","DATEPART(tanggal)"],a:0,
 e:"MySQL: MONTH(tanggal). PostgreSQL: EXTRACT(MONTH FROM tanggal) atau DATE_TRUNC('month', tanggal). SQLite (dipakai Lab di aplikasi ini): strftime('%m', tanggal). SQL Server: MONTH() atau DATEPART(month, tanggal). Saat tes kerja, tanyakan database apa yang dipakai.",
 w:[null,"Itu versi SQLite.","EXTRACT adalah standar SQL dan ada di PostgreSQL; MySQL juga mendukungnya, tapi bukan 'hanya ada di MySQL'.","DATEPART milik SQL Server dan butuh argumen bagian tanggal: DATEPART(month, tanggal)."]},
{k:"nullfungsi",t:"mc",lv:1,tb:"produk",q:"Hasil query ini adalah…",kode:"SELECT AVG(harga) FROM produk;",o:["2.362.500","9.450.000","2.000.000","1.150.000"],a:0,vr:"sql",vx:[[2362500]],
 e:"(7.000.000 + 150.000 + 2.000.000 + 300.000) ÷ 4 = 9.450.000 ÷ 4 = 2.362.500. Rata-rata ini 'tertarik' ke atas oleh harga Laptop — di bab statistik kamu akan belajar kapan median lebih jujur.",
 w:[null,"Itu jumlahnya (SUM), belum dibagi 4.","2.000.000 adalah harga Monitor.","Itu median-nya ((300.000 + 2.000.000) ÷ 2), bukan rata-rata."]},
{k:"nullfungsi",t:"is",lv:2,q:"Fungsi yang mengambil nilai pertama yang BUKAN NULL, misalnya ____(SUM(qty), 0)",a:["coalesce"],
 h:"Diawali huruf C, 8 huruf.",
 e:"COALESCE(a, b, c, …) mengembalikan argumen pertama yang tidak NULL. Paling sering dipakai untuk mengganti NULL dengan 0 atau 'Tidak ada'. MySQL juga punya IFNULL, SQL Server punya ISNULL."},

// ---- BAB 7: CTE (WITH) & UNION ----
{k:"cte",t:"mc",lv:1,q:"Kegunaan utama CTE (WITH nama AS (…) SELECT …) adalah…",o:["Memecah query panjang menjadi langkah-langkah bernama yang mudah dibaca","Membuat tabel permanen di database","Mempercepat semua query secara otomatis","Menghapus data duplikat"],a:0,
 e:"CTE (Common Table Expression) seperti kolom bantu di Excel: hitung sesuatu dulu, beri nama, lalu pakai di langkah berikutnya. Hanya hidup selama satu query itu.",
 w:[null,"CTE bersifat sementara; tabel permanen dibuat dengan CREATE TABLE.","Tujuannya keterbacaan, bukan kecepatan.","Itu tugas DISTINCT."]},
{k:"cte",t:"mc",lv:2,tb:["pesanan","produk"],q:"Hasil query ini adalah…",kode:"WITH belanja AS (\n  SELECT o.pelanggan_id, SUM(o.qty * pr.harga) AS total\n  FROM pesanan o\n  JOIN produk pr ON o.produk_id = pr.id\n  GROUP BY o.pelanggan_id\n)\nSELECT AVG(total) FROM belanja;",o:["5.525.000","4.420.000","22.100.000","2.762.500"],a:0,vr:"sql",vx:[[5525000]],
 e:"Langkah 1 (CTE): total belanja per pelanggan → 9.450.000, 4.300.000, 7.600.000, 750.000 (4 pelanggan). Langkah 2: rata-ratanya = 22.100.000 ÷ 4 = 5.525.000. Lia tidak ikut karena tidak punya pesanan.",
 w:[null,"Itu kalau dibagi 5 (termasuk Lia). Lia tidak ada di CTE karena tidak punya pesanan.","Itu total semua belanja, belum dirata-rata.","Itu rata-rata per PESANAN (22,1 jt ÷ 8), bukan per pelanggan."]},
{k:"cte",t:"mc",lv:2,q:"Cara menulis DUA CTE dalam satu query yang benar:",o:["WITH a AS (…), b AS (…) SELECT …","WITH a AS (…) WITH b AS (…) SELECT …","WITH a, b AS (…) SELECT …","CTE hanya boleh satu per query"],a:0,
 e:"Kata WITH ditulis sekali, lalu CTE dipisah dengan koma. CTE kedua boleh memakai CTE pertama — sehingga query bisa dibaca seperti resep langkah demi langkah.",
 w:[null,"WITH kedua menyebabkan syntax error.","Setiap CTE perlu definisinya sendiri.","Boleh banyak, dipisah koma."]},
{k:"cte",t:"mc",lv:3,tb:["pelanggan","pesanan","produk"],q:"Siapa saja hasil query ini?",kode:"WITH belanja AS (\n  SELECT p.nama, SUM(o.qty * pr.harga) AS total\n  FROM pesanan o\n  JOIN pelanggan p ON o.pelanggan_id = p.id\n  JOIN produk pr  ON o.produk_id = pr.id\n  GROUP BY p.nama\n)\nSELECT nama FROM belanja\nWHERE total > (SELECT AVG(total) FROM belanja);",o:["Rina dan Sari","Rina saja","Rina, Sari, dan Tono","Semua pelanggan"],a:0,vr:"sql",vx:[["Rina"],["Sari"]],
 e:"Rata-rata belanja = 5.525.000. Yang di atasnya: Rina (9.450.000) dan Sari (7.600.000). Perhatikan CTE 'belanja' dipakai DUA kali — tanpa CTE, query join yang panjang itu harus ditulis dua kali.",
 w:[null,"Sari (7,6 jt) juga di atas rata-rata 5,525 jt.","Tono (4,3 jt) di bawah rata-rata.","WHERE menyaring yang di atas rata-rata saja."]},
{k:"cte",t:"mc",lv:3,tb:["pesanan","produk"],q:"Hasil query ini adalah…",kode:"WITH ringkas AS (\n  SELECT produk_id, SUM(qty) AS total_qty\n  FROM pesanan GROUP BY produk_id\n)\nSELECT pr.nama\nFROM ringkas r JOIN produk pr ON pr.id = r.produk_id\nORDER BY r.total_qty DESC\nLIMIT 1;",o:["Mouse","Laptop","Monitor","Keyboard"],a:0,vr:"sql",vx:[["Mouse"]],
 e:"Total qty per produk: Laptop 2, Mouse 8 (3 + 5), Monitor 3, Keyboard 3. Diurutkan menurun dan diambil 1 → Mouse. Paling laku secara jumlah unit, walau pendapatannya kecil — beda 'terlaris' dan 'paling menguntungkan' sering ditanyakan saat interview.",
 w:[null,"Laptop paling besar pendapatannya, tapi qty-nya hanya 2.","Monitor terjual 3 unit.","Keyboard terjual 3 unit."]},
{k:"cte",t:"mc",lv:2,q:"Apa beda CTE dengan subquery?",o:["Hasilnya bisa sama; CTE lebih mudah dibaca dan bisa dipakai berkali-kali dalam query yang sama","CTE selalu jauh lebih cepat","Subquery tidak bisa dipakai di WHERE","CTE hanya ada di Excel"],a:0,
 e:"Secara hasil, banyak CTE bisa ditulis ulang sebagai subquery. Bedanya di keterbacaan: logika dibaca dari atas ke bawah, bukan dari dalam ke luar. Di tes kerja, query yang rapi dan mudah dicek memberi nilai tambah.",
 w:[null,"Kecepatan tergantung database dan query-nya; tidak selalu berbeda.","Subquery justru sering dipakai di WHERE.","CTE adalah fitur SQL."]},
{k:"cte",t:"mc",lv:1,q:"Beda UNION dan UNION ALL:",o:["UNION membuang baris duplikat, UNION ALL mempertahankan semua baris","UNION ALL membuang duplikat","UNION menggabungkan kolom ke samping","Tidak ada bedanya"],a:0,
 e:"Keduanya menumpuk hasil query ke BAWAH (seperti Append di Power Query). UNION menghapus duplikat (lebih lambat), UNION ALL tidak. Pakai UNION ALL jika kamu yakin tidak ada duplikat atau duplikat memang perlu dihitung.",
 w:[null,"Kebalikannya.","Menggabungkan ke samping adalah tugas JOIN.","Bedanya ada di penanganan duplikat."]},
{k:"cte",t:"mc",lv:2,tb:"pelanggan",q:"Berapa baris hasil query ini?",kode:"SELECT kota FROM pelanggan\nUNION\nSELECT kota FROM pelanggan;",o:["3","10","5","6"],a:0,vr:"sql",vx:[["Bandung"],["Jakarta"],["Surabaya"]],
 e:"Kedua query menghasilkan 5 baris, ditumpuk jadi 10, lalu UNION membuang duplikat → tersisa kota unik: Jakarta, Bandung, Surabaya = 3.",
 w:[null,"10 adalah hasil UNION ALL.","5 adalah hasil satu query saja.","Hanya ada 3 kota berbeda."]},
{k:"cte",t:"mc",lv:2,q:"Syarat agar dua query bisa digabung dengan UNION:",o:["Jumlah kolomnya sama dan tipe datanya cocok per posisi","Nama tabelnya harus sama","Harus ada JOIN","Harus ada GROUP BY"],a:0,
 e:"UNION menumpuk berdasarkan POSISI kolom: kolom ke-1 dengan kolom ke-1, dan seterusnya. Nama kolom hasil diambil dari query pertama.",
 w:[null,"Tabelnya boleh berbeda, misal data penjualan 2025 dan 2026.","UNION dan JOIN adalah operasi yang berbeda.","GROUP BY tidak diperlukan."]},
{k:"cte",t:"mc",lv:3,q:"Query dengan 3 CTE hasilnya aneh. Cara debug paling efektif:",o:["Jalankan tiap CTE satu per satu (SELECT * FROM cte_1, lalu cte_2, …) dan cek hasil antaranya","Tulis ulang semuanya dari nol","Tambahkan DISTINCT di mana-mana","Hapus semua WHERE"],a:0,
 e:"Sama seperti memeriksa kolom bantu di Excel: cek hasil tiap langkah. Biasanya masalahnya ketahuan di langkah yang jumlah barisnya tiba-tiba melonjak (JOIN dobel) atau hilang (INNER JOIN yang seharusnya LEFT JOIN).",
 w:[null,"Membuang waktu dan bisa mengulang kesalahan yang sama.","DISTINCT sering hanya menutupi masalah JOIN yang dobel.","Menghapus syarat malah mengubah arti query."]},
{k:"cte",t:"is",lv:1,q:"Kata kunci untuk memulai CTE adalah ____",a:["with"],
 h:"Bahasa Inggris untuk 'dengan'.",
 e:"WITH nama_cte AS ( SELECT … ) SELECT … FROM nama_cte; — CTE hanya berlaku untuk satu query yang mengikutinya."},

// ---- BAB 8: Window function ----
{k:"window",t:"mc",lv:1,q:"Beda utama window function (… OVER (…)) dengan GROUP BY:",o:["Window function menghitung per kelompok TANPA menggabungkan baris — setiap baris tetap tampil","Window function lebih cepat","GROUP BY tidak bisa menghitung SUM","Window function hanya untuk tanggal"],a:0,
 e:"GROUP BY meringkas 8 pesanan menjadi 4 baris (per pelanggan). Window function tetap menampilkan 8 baris, tapi setiap baris bisa 'melihat' kelompoknya: total pelanggan, peringkat, total berjalan, dan nilai baris sebelumnya.",
 w:[null,"Bukan soal kecepatan, tapi bentuk hasil.","GROUP BY jelas bisa SUM.","Window function bisa untuk data apa pun."]},
{k:"window",t:"is",lv:1,q:"Kata kunci yang menandai sebuah window function, misal SUM(qty) ____ (PARTITION BY pelanggan_id)",a:["over"],
 h:"Empat huruf, artinya 'di atas/melalui'.",
 e:"OVER (…) menentukan 'jendela' baris: PARTITION BY = kelompoknya, ORDER BY = urutannya. OVER () yang kosong berarti jendelanya seluruh tabel."},
{k:"window",t:"mc",lv:2,tb:"pesanan",q:"Berapa nilai rnk untuk pesanan dengan qty 1?",kode:"SELECT id, qty,\n  RANK() OVER (ORDER BY qty DESC) AS rnk\nFROM pesanan;",o:["5","4","2","8"],a:0,vr:"sql",vx:"rank-qty1-5",
 e:"Urutan qty: 5, 3, 2, 2, 1, 1, 1, 1. RANK memberi peringkat sama untuk nilai kembar lalu MELONCAT: 1, 2, 3, 3, 5, 5, 5, 5. Jadi qty 1 berperingkat 5 (peringkat 4 dilewati karena ada dua pesanan di peringkat 3).",
 w:[null,"4 adalah hasil DENSE_RANK, yang tidak meloncat.","Peringkat 2 milik qty 3.","8 adalah hasil ROW_NUMBER untuk baris terakhir."]},
{k:"window",t:"mc",lv:2,q:"Untuk nilai 300, 200, 200, 100 (diurutkan menurun), DENSE_RANK menghasilkan…",o:["1, 2, 2, 3","1, 2, 2, 4","1, 2, 3, 4","1, 1, 1, 1"],a:0,vr:"sql",vx:"dense",
 e:"Tiga fungsi peringkat: ROW_NUMBER = selalu unik (1, 2, 3, 4). RANK = kembar sama, lalu meloncat (1, 2, 2, 4) — seperti klasemen olahraga. DENSE_RANK = kembar sama, tanpa loncatan (1, 2, 2, 3).",
 w:[null,"Itu RANK (meloncat ke 4).","Itu ROW_NUMBER (tidak peduli nilai kembar).","Hanya terjadi jika semua nilainya sama."]},
{k:"window",t:"mc",lv:2,tb:"pesanan",q:"Nilai kumulatif pada baris tanggal 2026-01-08 adalah…",kode:"SELECT tanggal, qty,\n  SUM(qty) OVER (ORDER BY tanggal) AS kumulatif\nFROM pesanan;",o:["9","2","7","16"],a:0,vr:"sql",vx:"kum-9",
 e:"SUM … OVER (ORDER BY tanggal) = total berjalan (running total): 01-03: 1 → 01-04: 4 → 01-05: 6 → 01-07: 7 → 01-08: 9. Dipakai untuk grafik 'penjualan kumulatif bulan ini vs target'.",
 w:[null,"2 adalah qty di tanggal itu saja.","7 adalah kumulatif sampai 01-07.","16 adalah total di baris terakhir."]},
{k:"window",t:"mc",lv:3,tb:"pesanan",q:"Nilai total_pelanggan untuk pesanan 101 (milik pelanggan 1) adalah…",kode:"SELECT id, pelanggan_id, qty,\n  SUM(qty) OVER (PARTITION BY pelanggan_id) AS total_pelanggan\nFROM pesanan;",o:["5","1","16","3"],a:0,vr:"sql",vx:"part-5",
 e:"PARTITION BY = hitung per kelompok, tapi baris tetap utuh. Pelanggan 1 punya pesanan 101 (1), 102 (3), dan 107 (1) → 5. Nilai 5 ini muncul di ketiga baris milik pelanggan 1. Berguna untuk menghitung 'porsi pesanan ini dari total pelanggannya'.",
 w:[null,"1 adalah qty pesanan 101 saja.","16 adalah total semua pesanan (OVER () tanpa PARTITION).","3 adalah qty pesanan 102."]},
{k:"window",t:"mc",lv:2,tb:"pesanan",q:"Nilai persen untuk pesanan 106 (qty 5) adalah…",kode:"SELECT id, qty,\n  qty * 100.0 / SUM(qty) OVER () AS persen\nFROM pesanan;",o:["31.25","5","100","31"],a:0,vr:"sql",vx:"persen",
 e:"SUM(qty) OVER () = total seluruh tabel = 16, tanpa menggabungkan baris. 5 × 100 ÷ 16 = 31,25%. Pola 'porsi dari total' ini sangat sering dipakai di laporan (kontribusi produk, kontribusi sales).",
 w:[null,"5 adalah qty-nya, belum dibagi total.","100 hanya jika pesanan ini satu-satunya baris (misalnya karena WHERE id = 106 ikut menyaring jendelanya).","31 adalah hasil pembagian bilangan bulat — itulah alasan query memakai 100.0, bukan 100."]},
{k:"window",t:"mc",lv:2,q:"Kenapa query persen ditulis qty * 100.0, bukan qty * 100?",o:["Di SQLite/PostgreSQL, bilangan bulat ÷ bilangan bulat dibulatkan ke bawah (500 / 16 = 31); 100.0 memaksa hasil desimal","Supaya hasilnya lebih besar","100.0 lebih cepat dihitung","Tidak ada bedanya di database mana pun"],a:0,vr:"sql",vx:"intdiv",
 e:"Pembagian integer adalah jebakan klasik: 1 / 3 = 0 di SQLite dan PostgreSQL. Ubah salah satu angka jadi desimal (100.0) atau pakai CAST(qty AS REAL). (MySQL kebetulan selalu menghasilkan desimal.)",
 w:[null,"Nilainya sama; bedanya hanya di bagian desimal yang tidak hilang.","Kecepatannya praktis sama.","Bedanya nyata di SQLite dan PostgreSQL."]},
{k:"window",t:"mc",lv:3,tb:"produk",q:"Untuk kategori Aksesoris, produk apa yang muncul di hasil query ini?",kode:"WITH r AS (\n  SELECT kategori, nama, harga,\n    ROW_NUMBER() OVER (PARTITION BY kategori ORDER BY harga DESC) AS rn\n  FROM produk\n)\nSELECT kategori, nama FROM r WHERE rn = 1;",o:["Keyboard","Mouse","Laptop","Keyboard dan Mouse"],a:0,vr:"sql",vx:[["Aksesoris","Keyboard"],["Komputer","Laptop"]],
 e:"ROW_NUMBER dimulai dari 1 di setiap kategori, diurutkan dari harga termahal. Aksesoris: Keyboard (300.000) = 1, Mouse (150.000) = 2. Mengambil rn = 1 = 'produk termahal per kategori'. Pola 'top-N per kelompok' ini SANGAT sering muncul di tes SQL.",
 w:[null,"Mouse lebih murah, jadi rn = 2.","Laptop adalah juara kategori Komputer.","rn = 1 hanya satu baris per kategori."]},
{k:"window",t:"mc",lv:3,q:"Kenapa query sebelumnya memakai CTE, bukan langsung WHERE ROW_NUMBER() OVER (…) = 1?",o:["Window function dihitung SETELAH WHERE, jadi tidak bisa dipakai di WHERE pada query yang sama","CTE wajib untuk semua query","ROW_NUMBER hanya bisa dipakai di CTE","Supaya hasilnya diurutkan"],a:0,
 e:"Urutan logis SQL: FROM → WHERE → GROUP BY → HAVING → window function → SELECT → ORDER BY. Karena WHERE dijalankan lebih dulu, ia belum 'tahu' nilai ROW_NUMBER. Solusinya: hitung di CTE/subquery, lalu saring di query luar.",
 w:[null,"CTE tidak wajib untuk semua query.","ROW_NUMBER bisa dipakai di SELECT mana pun; yang tidak bisa adalah menyaringnya di WHERE yang sama.","Pengurutan adalah tugas ORDER BY."]},
{k:"window",t:"mc",lv:2,tb:"pesanan",q:"Nilai qty_sebelumnya pada baris tanggal 2026-01-05 adalah…",kode:"SELECT tanggal, qty,\n  LAG(qty) OVER (ORDER BY tanggal) AS qty_sebelumnya\nFROM pesanan;",o:["3","2","1","NULL"],a:0,vr:"sql",vx:"lag",
 e:"LAG mengambil nilai dari baris SEBELUMNYA. Baris sebelum 01-05 adalah 01-04 dengan qty 3. Baris pertama (01-03) bernilai NULL karena tidak punya baris sebelumnya. LAG adalah alat utama untuk menghitung pertumbuhan bulan-ke-bulan: (bulan_ini − LAG(bulan_ini)) / LAG(bulan_ini).",
 w:[null,"2 adalah qty di baris 01-05 itu sendiri.","1 adalah qty di baris 01-03.","NULL hanya untuk baris PERTAMA."]},
{k:"window",t:"mc",lv:3,q:"AVG(pendapatan) OVER (ORDER BY tanggal ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) menghitung…",o:["Rata-rata bergerak 7 hari (hari ini + 6 hari sebelumnya)","Rata-rata seluruh tabel","Rata-rata 6 hari ke depan","Peringkat pendapatan"],a:0,
 e:"Frame ROWS BETWEEN … menentukan baris mana yang ikut dihitung. Moving average 7 hari meratakan naik-turun harian (misal efek akhir pekan) sehingga tren lebih terlihat di dashboard.",
 w:[null,"Rata-rata seluruh tabel ditulis AVG(x) OVER ().","PRECEDING artinya baris SEBELUMNYA.","Peringkat memakai RANK/ROW_NUMBER."]}
);

MATERI_SQL.push(
{k:"case",judul:"CASE WHEN — Logika IF di dalam SQL",materi:`
<p><b>CASE WHEN</b> adalah IF bertingkat versi SQL. Syarat diperiksa dari atas, yang <b>pertama benar</b> dipakai.</p>
<pre><code>SELECT nama, harga,
  CASE WHEN harga &gt;= 2000000 THEN 'Mahal'
       WHEN harga &gt;= 200000  THEN 'Sedang'
       ELSE 'Murah'
  END AS label
FROM produk;</code></pre>
<p><b>Tiga kegunaan yang paling sering dipakai di kantor:</b></p>
<ol>
<li><b>Memberi label/segmen</b> — rentang harga, segmen pelanggan (VIP/Reguler/Baru), status (Telat/Tepat).</li>
<li><b>Conditional aggregation</b> — membuat tabel ala pivot di SQL:
<pre><code>SELECT p.nama,
  SUM(CASE WHEN pr.kategori = 'Komputer'  THEN o.qty ELSE 0 END) AS qty_komputer,
  SUM(CASE WHEN pr.kategori = 'Aksesoris' THEN o.qty ELSE 0 END) AS qty_aksesoris
FROM pesanan o
JOIN pelanggan p ON o.pelanggan_id = p.id
JOIN produk pr  ON o.produk_id = pr.id
GROUP BY p.nama;</code></pre></li>
<li><b>Urutan khusus</b> — <code>ORDER BY CASE WHEN kota = 'Bandung' THEN 0 ELSE 1 END</code>.</li>
</ol>
<div class="catatan">⚠️ Dua jebakan: (1) urutan WHEN — tulis syarat paling ketat lebih dulu; (2) tanpa ELSE, baris yang tidak cocok menjadi NULL.</div>
<div class="praktik">🧪 <b>Lab SQL:</b> tantangan 11 dan 18.</div>`},

{k:"nullfungsi",judul:"NULL & Fungsi Bawaan (Teks, Angka, Tanggal)",materi:`
<p><b>NULL</b> = nilainya tidak diketahui. Bukan 0, bukan teks kosong. Tiga aturan yang wajib diingat:</p>
<ul>
<li>Cek dengan <code>IS NULL</code> / <code>IS NOT NULL</code> — <code>= NULL</code> tidak pernah benar.</li>
<li>NULL merambat: <code>NULL + 5 = NULL</code>.</li>
<li><code>COUNT(*)</code> menghitung baris; <code>COUNT(kolom)</code> <b>tidak</b> menghitung NULL.</li>
</ul>
<p>Jebakan klasik setelah LEFT JOIN — hitung pesanan per pelanggan, termasuk yang 0:</p>
<pre><code>SELECT p.nama,
       COUNT(o.id)              AS jumlah_pesanan,  -- Lia = 0 ✓ (COUNT(*) → 1 ✗)
       COALESCE(SUM(o.qty), 0)  AS total_qty        -- Lia = 0 ✓ (tanpa COALESCE → NULL)
FROM pelanggan p
LEFT JOIN pesanan o ON o.pelanggan_id = p.id
GROUP BY p.nama;</code></pre>
<p><b>Fungsi bawaan</b> (padanannya di Excel):</p>
<table class="mini-pivot"><tr><th>SQL</th><th>Excel</th><th>Contoh</th></tr>
<tr><td><code>UPPER / LOWER</code></td><td>UPPER / LOWER</td><td>UPPER('jakarta') → JAKARTA</td></tr>
<tr><td><code>LENGTH</code></td><td>LEN</td><td>LENGTH('Keyboard') → 8</td></tr>
<tr><td><code>SUBSTR(x, 6, 2)</code></td><td>MID</td><td>'2026-01-12' → '01'</td></tr>
<tr><td><code>TRIM</code></td><td>TRIM</td><td>buang spasi tepi</td></tr>
<tr><td><code>||</code> atau <code>CONCAT()</code></td><td>&amp;</td><td>nama || ' (' || kota || ')'</td></tr>
<tr><td><code>ROUND(x, 2)</code></td><td>ROUND</td><td>pembulatan</td></tr>
<tr><td><code>COALESCE(x, 0)</code></td><td>IFERROR/IF kosong</td><td>NULL → 0</td></tr>
<tr><td><code>COUNT(DISTINCT x)</code></td><td>COUNTA(UNIQUE())</td><td>jumlah nilai unik</td></tr></table>
<p><b>Fungsi tanggal berbeda per database</b> — ambil bulan: MySQL <code>MONTH(tgl)</code>, PostgreSQL <code>EXTRACT(MONTH FROM tgl)</code>, SQLite <code>strftime('%m', tgl)</code>. Saat tes kerja, tanyakan databasenya; logikanya tetap sama.</p>
<div class="praktik">🧪 <b>Lab SQL:</b> tantangan 12–13.</div>`},

{k:"cte",judul:"CTE (WITH) & UNION — Query Bertahap yang Rapi",materi:`
<p>Query nyata sering butuh beberapa langkah. <b>CTE</b> membuat langkah-langkah itu bernama dan terbaca dari atas ke bawah — seperti kolom bantu di Excel.</p>
<pre><code>WITH belanja AS (                         -- langkah 1: total per pelanggan
  SELECT p.nama, SUM(o.qty * pr.harga) AS total
  FROM pesanan o
  JOIN pelanggan p ON o.pelanggan_id = p.id
  JOIN produk pr  ON o.produk_id = pr.id
  GROUP BY p.nama
),
rata AS (                                 -- langkah 2: rata-ratanya
  SELECT AVG(total) AS nilai FROM belanja
)
SELECT b.nama, b.total                    -- langkah 3: yang di atas rata-rata
FROM belanja b, rata r
WHERE b.total &gt; r.nilai;                  -- hasil: Rina, Sari</code></pre>
<ul>
<li><code>WITH</code> ditulis sekali; CTE berikutnya dipisah koma.</li>
<li>CTE hanya berlaku untuk satu query itu.</li>
<li>Debug: jalankan <code>SELECT * FROM belanja</code> untuk mengecek tiap langkah.</li>
</ul>
<p><b>UNION</b> menumpuk hasil query ke <b>bawah</b> (JOIN menyambung ke samping):</p>
<pre><code>SELECT nama, 'pelanggan' AS jenis FROM pelanggan
UNION ALL
SELECT nama, 'produk' FROM produk;</code></pre>
<p><code>UNION</code> membuang duplikat, <code>UNION ALL</code> tidak. Syarat: jumlah kolom sama dan tipenya cocok per posisi. Contoh nyata: menggabungkan tabel penjualan 2025 dan 2026.</p>
<div class="praktik">🧪 <b>Lab SQL:</b> tantangan 14.</div>`},

{k:"window",judul:"Window Function — Peringkat, Total Berjalan & Pertumbuhan",materi:`
<p>Window function menghitung per kelompok <b>tanpa</b> menggabungkan baris. Ini topik yang membedakan analis pemula dan analis siap kerja, dan sering muncul di tes teknis.</p>
<pre><code>fungsi() OVER (PARTITION BY kelompok ORDER BY urutan)</code></pre>
<table class="mini-pivot"><tr><th>Kebutuhan bisnis</th><th>Window function</th></tr>
<tr><td>Peringkat sales/pelanggan</td><td><code>RANK() OVER (ORDER BY belanja DESC)</code></td></tr>
<tr><td>Top 1 per kategori</td><td><code>ROW_NUMBER() OVER (PARTITION BY kategori ORDER BY harga DESC)</code> lalu <code>WHERE rn = 1</code> (di CTE)</td></tr>
<tr><td>Total berjalan</td><td><code>SUM(x) OVER (ORDER BY tanggal)</code></td></tr>
<tr><td>Porsi dari total</td><td><code>x * 100.0 / SUM(x) OVER ()</code></td></tr>
<tr><td>Bulan lalu (untuk growth)</td><td><code>LAG(x) OVER (ORDER BY bulan)</code></td></tr>
<tr><td>Rata-rata bergerak 7 hari</td><td><code>AVG(x) OVER (ORDER BY tgl ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)</code></td></tr></table>
<p><b>Tiga fungsi peringkat</b> untuk nilai 300, 200, 200, 100:</p>
<pre><code>ROW_NUMBER → 1, 2, 3, 4   (selalu unik)
RANK       → 1, 2, 2, 4   (kembar sama, lalu meloncat)
DENSE_RANK → 1, 2, 2, 3   (kembar sama, tanpa loncatan)</code></pre>
<div class="catatan">⚠️ Window function dihitung <b>setelah WHERE</b>. Untuk menyaring hasilnya (misal <code>rn = 1</code>), bungkus dulu dengan CTE. Dan ingat: <code>5 / 16 = 0</code> di SQLite/PostgreSQL — pakai <code>100.0</code>.</div>
<div class="praktik">🧪 <b>Lab SQL:</b> tantangan 15–17.</div>`}
);

// Tantangan Lab SQL 11–18 (digabung ke TANTANGAN_SQL di js/fitur/sql-lab.js)
const TANTANGAN_SQL_LANJUT = [
  {judul:"Label harga (CASE)", bab:"case",
   soal:"Tampilkan <b>nama</b>, <b>harga</b>, dan kolom <b>label</b> untuk semua produk: 'Premium' jika harga ≥ 2.000.000, selain itu 'Reguler'.",
   jawab:"SELECT nama, harga,\n  CASE WHEN harga >= 2000000 THEN 'Premium'\n       ELSE 'Reguler' END AS label\nFROM produk;",
   petunjuk:"CASE WHEN harga >= 2000000 THEN 'Premium' ELSE 'Reguler' END AS label — jangan lupa END.",
   jelas:"Laptop & Monitor = Premium, Mouse & Keyboard = Reguler. Label seperti ini memudahkan filter di dashboard."},
  {judul:"Semua pelanggan + jumlah pesanan", bab:"nullfungsi",
   soal:"Tampilkan <b>nama</b> SEMUA pelanggan dan <b>jumlah pesanannya</b> — pelanggan yang belum pernah memesan harus tampil dengan angka <b>0</b>.",
   jawab:"SELECT p.nama, COUNT(o.id) AS jumlah_pesanan\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nGROUP BY p.nama;",
   petunjuk:"LEFT JOIN dari pelanggan ke pesanan, lalu hitung COUNT(o.id) — bukan COUNT(*) — supaya baris NULL tidak terhitung.",
   jelas:"COUNT(*) akan memberi Lia nilai 1 (baris hasil LEFT JOIN-nya ikut terhitung). COUNT(o.id) tidak menghitung NULL, jadi Lia = 0."},
  {judul:"Total barang, 0 jika belum pesan", bab:"nullfungsi",
   soal:"Tampilkan <b>nama</b> SEMUA pelanggan dan <b>total qty</b> yang pernah mereka pesan. Yang belum pernah memesan harus bernilai <b>0</b>, bukan NULL.",
   jawab:"SELECT p.nama, COALESCE(SUM(o.qty), 0) AS total_qty\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nGROUP BY p.nama;",
   petunjuk:"Mirip tantangan 12, tapi pakai SUM(o.qty). Bungkus dengan COALESCE(…, 0).",
   jelas:"SUM dari nilai NULL semua hasilnya NULL. COALESCE mengubahnya menjadi 0. Hasil: Rina 5, Tono 3, Sari 3, Budi 5, Lia 0."},
  {judul:"Pelanggan di atas rata-rata (CTE)", bab:"cte",
   soal:"Tampilkan <b>nama</b> dan <b>total belanja</b> (qty × harga) pelanggan yang belanjanya <b>di atas rata-rata</b> belanja pelanggan yang pernah memesan.",
   jawab:"WITH belanja AS (\n  SELECT p.nama, SUM(o.qty * pr.harga) AS total\n  FROM pesanan o\n  JOIN pelanggan p ON o.pelanggan_id = p.id\n  JOIN produk pr  ON o.produk_id = pr.id\n  GROUP BY p.nama\n)\nSELECT nama, total\nFROM belanja\nWHERE total > (SELECT AVG(total) FROM belanja);",
   petunjuk:"Langkah 1 (CTE): total belanja per pelanggan. Langkah 2: SELECT dari CTE itu, WHERE total > (SELECT AVG(total) FROM nama_cte).",
   jelas:"Rata-rata = 5.525.000. Di atasnya: Rina (9.450.000) dan Sari (7.600.000)."},
  {judul:"Peringkat pelanggan (RANK)", bab:"window", urut:true,
   soal:"Tampilkan <b>nama</b>, <b>total belanja</b>, dan <b>peringkat</b> (1 = belanja terbesar) untuk pelanggan yang pernah memesan, diurutkan dari peringkat 1.",
   jawab:"SELECT p.nama, SUM(o.qty * pr.harga) AS belanja,\n  RANK() OVER (ORDER BY SUM(o.qty * pr.harga) DESC) AS peringkat\nFROM pesanan o\nJOIN pelanggan p ON o.pelanggan_id = p.id\nJOIN produk pr  ON o.produk_id = pr.id\nGROUP BY p.nama\nORDER BY peringkat;",
   petunjuk:"Window function boleh membungkus agregat: RANK() OVER (ORDER BY SUM(o.qty * pr.harga) DESC). Atau hitung belanja di CTE dulu, lalu RANK di query luar.",
   jelas:"Rina 1, Sari 2, Tono 3, Budi 4. Window function dihitung setelah GROUP BY, sehingga bisa memeringkat hasil agregat."},
  {judul:"Total berjalan per tanggal", bab:"window", urut:true,
   soal:"Tampilkan <b>tanggal</b>, <b>nilai pesanan</b> (qty × harga), dan <b>total berjalan</b> (kumulatif) nilai pesanan, diurutkan dari tanggal paling awal.",
   jawab:"SELECT o.tanggal, o.qty * pr.harga AS nilai,\n  SUM(o.qty * pr.harga) OVER (ORDER BY o.tanggal) AS kumulatif\nFROM pesanan o\nJOIN produk pr ON o.produk_id = pr.id\nORDER BY o.tanggal;",
   petunjuk:"JOIN ke produk untuk harga, lalu SUM(o.qty * pr.harga) OVER (ORDER BY o.tanggal).",
   jelas:"Kumulatif naik dari 7.000.000 sampai 22.100.000 di tanggal terakhir. Ini data untuk grafik 'pencapaian vs target' bulanan."},
  {judul:"Produk termahal per kategori", bab:"window",
   soal:"Tampilkan <b>kategori</b>, <b>nama</b>, dan <b>harga</b> produk TERMAHAL di setiap kategori (satu baris per kategori).",
   jawab:"WITH r AS (\n  SELECT kategori, nama, harga,\n    ROW_NUMBER() OVER (PARTITION BY kategori ORDER BY harga DESC) AS rn\n  FROM produk\n)\nSELECT kategori, nama, harga\nFROM r\nWHERE rn = 1;",
   petunjuk:"ROW_NUMBER() OVER (PARTITION BY kategori ORDER BY harga DESC) di dalam CTE, lalu WHERE rn = 1 di query luar.",
   jelas:"Komputer → Laptop, Aksesoris → Keyboard. Pola top-N per kelompok ini favorit pewawancara."},
  {judul:"Pivot qty per kategori (CASE)", bab:"case",
   soal:"Untuk setiap pelanggan yang pernah memesan, tampilkan <b>nama</b>, <b>qty_komputer</b>, dan <b>qty_aksesoris</b> (jumlah qty per kategori produk).",
   jawab:"SELECT p.nama,\n  SUM(CASE WHEN pr.kategori = 'Komputer'  THEN o.qty ELSE 0 END) AS qty_komputer,\n  SUM(CASE WHEN pr.kategori = 'Aksesoris' THEN o.qty ELSE 0 END) AS qty_aksesoris\nFROM pesanan o\nJOIN pelanggan p ON o.pelanggan_id = p.id\nJOIN produk pr  ON o.produk_id = pr.id\nGROUP BY p.nama;",
   petunjuk:"JOIN 3 tabel, GROUP BY p.nama, lalu dua kolom SUM(CASE WHEN pr.kategori = '…' THEN o.qty ELSE 0 END).",
   jelas:"Rina 2 & 3, Tono 2 & 1, Sari 1 & 2, Budi 0 & 5. Inilah pivot table yang ditulis dengan SQL."}
];
