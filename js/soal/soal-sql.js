// ============ SQL — 4 bab, database toko (pelanggan, produk, pesanan) ============
// Format sama dengan soal Excel. tb boleh berupa array beberapa tabel.

const SOAL_SQL = [
// ---- BAB 1: SELECT & WHERE ----
{k:"select",t:"mc",lv:1,q:"Perintah SQL untuk MENGAMBIL data dari tabel adalah…",o:["GET","SELECT","FETCH","SHOW DATA"],a:1,
 e:"SELECT adalah perintah membaca data. Pola dasarnya: SELECT kolom FROM tabel WHERE syarat. Sekitar 80% pekerjaan data analyst dimulai dari SELECT.",
 w:["GET bukan perintah SQL (itu istilah di HTTP/API).",null,"FETCH ada, tapi untuk cursor tingkat lanjut, bukan membaca data biasa.","SHOW dipakai di MySQL untuk melihat struktur (SHOW TABLES), bukan mengambil data."]},
{k:"select",t:"mc",lv:1,tb:"pelanggan",q:"Hasil query ini adalah…",kode:"SELECT nama FROM pelanggan WHERE kota = 'Jakarta';",o:["Rina, Sari","Rina, Sari, Lia","Tono, Lia","Rina"],a:0,
 e:"WHERE menyaring baris: hanya yang kotanya 'Jakarta'. Di tabel pelanggan itu adalah Rina (id 1) dan Sari (id 3). SELECT nama hanya menampilkan kolom nama.",
 w:[null,"Lia tinggal di Bandung.","Tono dan Lia tinggal di Bandung.","Sari (id 3) juga tinggal di Jakarta."]},
{k:"select",t:"mc",lv:1,tb:"produk",q:"Hasil query ini adalah…",kode:"SELECT nama FROM produk WHERE harga > 1000000;",o:["Laptop, Monitor","Laptop","Laptop, Monitor, Keyboard","Mouse, Keyboard"],a:0,
 e:"Harga > 1.000.000: Laptop (7.000.000) dan Monitor (2.000.000). Mouse (150.000) dan Keyboard (300.000) tidak lolos.",
 w:[null,"Monitor 2.000.000 juga lebih dari 1 juta.","Keyboard hanya 300.000.","Itu justru produk yang harganya DI BAWAH 1 juta."]},
{k:"select",t:"mc",lv:2,tb:"produk",q:"Hasil query ini adalah…",kode:"SELECT nama FROM produk ORDER BY harga DESC LIMIT 1;",o:["Laptop","Mouse","Monitor","Keyboard"],a:0,
 e:"ORDER BY harga DESC = urutkan dari harga terbesar (DESCending). LIMIT 1 = ambil baris pertama saja. Jadi hasilnya produk termahal: Laptop. Pola ini sering dipakai untuk 'top 1', 'top 5', dsb.",
 w:[null,"Mouse paling murah — itu hasilnya jika ORDER BY harga ASC.","Monitor ada di urutan kedua.","Keyboard ada di urutan ketiga."]},
{k:"select",t:"is",lv:1,q:"Kata kunci untuk menyaring baris berdasarkan syarat:  SELECT * FROM produk ____ kategori = 'Aksesoris';",a:["where"],
 h:"Dalam bahasa Indonesia artinya 'di mana'.",
 e:"WHERE diletakkan setelah FROM untuk menyaring baris. Hasil query ini: Mouse dan Keyboard."},
{k:"select",t:"mc",lv:2,tb:"pelanggan",q:"Hasil query ini adalah…",kode:"SELECT COUNT(*) FROM pelanggan WHERE kota IN ('Bandung', 'Surabaya');",o:["2","3","4","5"],a:1,
 e:"IN ('Bandung','Surabaya') sama dengan kota = 'Bandung' OR kota = 'Surabaya'. Yang cocok: Tono (Bandung), Budi (Surabaya), dan Lia (Bandung) → 3.",
 w:["Lia (id 5) juga tinggal di Bandung.",null,"Hanya 3 pelanggan yang tinggal di Bandung atau Surabaya.","5 adalah jumlah semua pelanggan — syarat WHERE belum diterapkan."]},
{k:"select",t:"mc",lv:1,q:"Nilai teks di SQL ditulis dengan…",o:["Tanda kutip tunggal: 'Jakarta'","Tanpa kutip: Jakarta","Kurung: (Jakarta)","Pagar: #Jakarta#"],a:0,
 e:"Standar SQL memakai kutip TUNGGAL untuk teks. Tanpa kutip, database mengira Jakarta adalah nama kolom → error 'no such column'. (Beberapa database menerima kutip ganda, tapi biasakan kutip tunggal.)",
 w:[null,"Tanpa kutip, Jakarta dianggap nama kolom → error.","Kurung dipakai untuk daftar IN atau subquery.","Format pagar hanya di MS Access untuk tanggal."]},
{k:"select",t:"mc",lv:2,tb:"produk",q:"Hasil query ini adalah…",kode:"SELECT nama FROM produk\nWHERE kategori = 'Komputer' AND harga < 5000000;",o:["Monitor","Laptop, Monitor","Laptop","Tidak ada"],a:0,
 e:"AND = kedua syarat harus benar. Kategori Komputer: Laptop (7 jt) dan Monitor (2 jt). Yang juga < 5 juta hanya Monitor.",
 w:[null,"Laptop 7 juta tidak < 5 juta.","Laptop gagal di syarat harga.","Monitor memenuhi kedua syarat."]},

// ---- BAB 2: Agregat, GROUP BY, HAVING ----
{k:"groupby",t:"mc",lv:1,q:"Fungsi agregat untuk MENJUMLAHKAN nilai adalah…",o:["COUNT()","SUM()","AVG()","ADD()"],a:1,
 e:"SUM() menjumlahkan. Keluarga agregat: COUNT (banyaknya baris), SUM (jumlah), AVG (rata-rata), MIN, MAX. Persis seperti di Excel.",
 w:["COUNT menghitung banyaknya baris, bukan menjumlah nilainya.",null,"AVG menghitung rata-rata.","ADD() bukan fungsi agregat SQL."]},
{k:"groupby",t:"mc",lv:1,tb:"pesanan",q:"Hasil query ini adalah…",kode:"SELECT COUNT(*) FROM pesanan;",o:["5","8","13","16"],a:1,
 e:"COUNT(*) menghitung banyaknya BARIS di tabel pesanan: id 101 sampai 108 → 8 pesanan.",
 w:["5 adalah jumlah pelanggan, bukan pesanan.",null,"Tidak ada perhitungan di data yang menghasilkan 13.","16 adalah total kolom qty — itu hasil SUM(qty)."]},
{k:"groupby",t:"mc",lv:1,tb:"pesanan",q:"Hasil query ini adalah…",kode:"SELECT SUM(qty) FROM pesanan;",o:["8","16","13","1"],a:1,
 e:"SUM(qty) menjumlahkan kolom qty: 1+3+2+1+2+5+1+1 = 16 barang terjual.",
 w:["8 adalah banyaknya baris (COUNT).",null,"Coba jumlahkan lagi kolom qty.","1 adalah qty pesanan pertama saja."]},
{k:"groupby",t:"mc",lv:2,tb:"pesanan",q:"Pada hasil query ini, baris untuk pelanggan_id = 1 berisi angka…",kode:"SELECT pelanggan_id, COUNT(*)\nFROM pesanan\nGROUP BY pelanggan_id;",o:["1","3","5","8"],a:1,
 e:"GROUP BY mengelompokkan baris yang pelanggan_id-nya sama, lalu COUNT(*) dihitung PER KELOMPOK. Pelanggan 1 punya pesanan 101, 102, dan 107 → 3. Ini setara pivot Excel: Rows = pelanggan_id, Values = Count.",
 w:["Pelanggan 1 punya lebih dari satu pesanan.",null,"5 adalah SUM(qty) pelanggan 1 (1+3+1), bukan COUNT.","8 adalah semua pesanan tanpa dikelompokkan."]},
{k:"groupby",t:"mc",lv:2,tb:"pesanan",q:"Hasil query ini adalah…",kode:"SELECT produk_id, SUM(qty) AS total_qty\nFROM pesanan\nGROUP BY produk_id\nORDER BY total_qty DESC\nLIMIT 1;",o:["produk_id 2 — 8","produk_id 1 — 2","produk_id 3 — 3","produk_id 2 — 2"],a:0,
 e:"Total qty per produk: produk 1 = 1+1 = 2, produk 2 = 3+5 = 8, produk 3 = 2+1 = 3, produk 4 = 2+1 = 3. Diurutkan terbesar lalu ambil 1 → produk 2 (Mouse) dengan 8. AS total_qty memberi nama (alias) ke kolom hasil.",
 w:[null,"Produk 1 justru terkecil (2).","Produk 3 total 3, kalah dari produk 2.","Produk 2 memang benar, tapi qty-nya 8, bukan 2 (2 adalah COUNT pesanannya)."]},
{k:"groupby",t:"mc",lv:2,q:"Kenapa query ini ditolak di banyak database (PostgreSQL, SQL Server)?",kode:"SELECT pelanggan_id, produk_id, COUNT(*)\nFROM pesanan\nGROUP BY pelanggan_id;",o:["produk_id tidak ada di GROUP BY dan tidak dibungkus fungsi agregat","COUNT(*) tidak boleh dipakai bersama GROUP BY","GROUP BY harus ditulis sebelum FROM","Kurang ORDER BY"],a:0,
 e:"Aturan GROUP BY: setiap kolom di SELECT harus (1) ada di GROUP BY, atau (2) dibungkus agregat (SUM, COUNT, …). Pelanggan 1 punya 3 produk berbeda — database tidak tahu produk_id mana yang harus ditampilkan di satu baris. (SQLite dan MySQL lama membiarkannya, tapi hasilnya acak — jangan biasakan.)",
 w:[null,"COUNT(*) dengan GROUP BY justru pasangan paling umum.","Urutan yang benar: SELECT … FROM … WHERE … GROUP BY …","ORDER BY opsional."]},
{k:"groupby",t:"mc",lv:2,q:"Apa beda WHERE dan HAVING?",o:["WHERE menyaring baris SEBELUM dikelompokkan; HAVING menyaring kelompok SETELAH GROUP BY","Sama saja","HAVING hanya untuk teks","WHERE hanya untuk angka"],a:0,
 e:"WHERE bekerja di baris mentah (misal: hanya pesanan qty ≥ 2). HAVING bekerja di hasil kelompok (misal: hanya pelanggan yang COUNT(*) ≥ 2). Agregat seperti COUNT(*) tidak boleh ditaruh di WHERE.",
 w:[null,"Urutan eksekusinya berbeda — lihat penjelasan.","HAVING bisa untuk angka maupun teks.","WHERE bisa untuk teks maupun angka."]},
{k:"groupby",t:"mc",lv:3,tb:"pesanan",q:"Hasil query ini adalah…",kode:"SELECT pelanggan_id\nFROM pesanan\nGROUP BY pelanggan_id\nHAVING COUNT(*) >= 2;",o:["1, 2, 3","1","1, 2, 3, 4","4"],a:0,
 e:"Jumlah pesanan per pelanggan: 1 → 3, 2 → 2, 3 → 2, 4 → 1. HAVING COUNT(*) >= 2 menyisakan pelanggan 1, 2, dan 3. Contoh bisnis: mencari pelanggan yang sudah repeat order.",
 w:[null,"Pelanggan 2 dan 3 juga punya 2 pesanan (≥ 2 termasuk 2).","Pelanggan 4 hanya punya 1 pesanan.","Pelanggan 4 justru yang TIDAK lolos."]},
{k:"groupby",t:"is",lv:2,q:"Lengkapi urutan klausa yang benar:  SELECT … FROM … WHERE … GROUP BY … ____ … ORDER BY …",a:["having"],
 h:"Klausa untuk menyaring hasil kelompok.",
 e:"Urutan tulis: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT. Hafalkan urutan ini — query salah urutan langsung error."},
{k:"groupby",t:"mc",lv:2,tb:"produk",q:"Pada hasil query ini, nilai untuk kategori Aksesoris adalah…",kode:"SELECT kategori, AVG(harga)\nFROM produk\nGROUP BY kategori;",o:["225000","450000","150000","4500000"],a:0,
 e:"Aksesoris berisi Mouse (150.000) dan Keyboard (300.000). Rata-ratanya (150.000 + 300.000) ÷ 2 = 225.000.",
 w:[null,"450.000 adalah jumlahnya (SUM), belum dibagi 2.","Itu harga Mouse saja.","4.500.000 adalah rata-rata kategori Komputer."]},

// ---- BAB 3: JOIN ----
{k:"join",t:"mc",lv:1,q:"JOIN dipakai untuk…",o:["Menggabungkan baris dari dua tabel berdasarkan kolom yang berhubungan","Menggabungkan dua database","Menambah baris baru","Menyalin tabel"],a:0,
 e:"Tabel pesanan hanya menyimpan pelanggan_id (angka). Untuk tahu NAMA pelanggannya, gabungkan dengan tabel pelanggan lewat pesanan.pelanggan_id = pelanggan.id. Konsepnya sama seperti XLOOKUP di Excel, tapi untuk banyak kolom sekaligus.",
 w:[null,"JOIN bekerja antar tabel di database yang sama.","Menambah baris memakai INSERT.","Menyalin tabel memakai CREATE TABLE … AS SELECT."]},
{k:"join",t:"mc",lv:2,tb:["pelanggan","pesanan"],q:"Hasil query ini adalah…",kode:"SELECT p.nama\nFROM pesanan o\nJOIN pelanggan p ON o.pelanggan_id = p.id\nWHERE o.id = 105;",o:["Rina","Sari","Tono","Budi"],a:1,
 e:"Pesanan 105 punya pelanggan_id = 3. JOIN mencocokkannya dengan pelanggan id 3 = Sari. 'o' dan 'p' adalah alias (nama pendek) untuk tabel pesanan dan pelanggan.",
 w:["Rina adalah pelanggan id 1.",null,"Tono adalah pelanggan id 2.","Budi adalah pelanggan id 4."]},
{k:"join",t:"mc",lv:2,tb:["pelanggan","pesanan"],q:"Hasil query ini adalah…",kode:"SELECT COUNT(*)\nFROM pelanggan p\nJOIN pesanan o ON o.pelanggan_id = p.id;",o:["5","8","9","4"],a:1,
 e:"(INNER) JOIN hanya menampilkan pasangan yang COCOK di kedua tabel. Setiap pesanan punya tepat satu pelanggan → 8 baris. Lia tidak punya pesanan, jadi Lia tidak muncul.",
 w:["5 adalah jumlah pelanggan, tapi satu pelanggan bisa muncul berkali-kali.",null,"9 adalah hasil LEFT JOIN (8 + Lia yang tanpa pesanan).","4 adalah banyaknya pelanggan yang pernah memesan."]},
{k:"join",t:"mc",lv:2,tb:["pelanggan","pesanan"],q:"Hasil query ini adalah…",kode:"SELECT COUNT(*)\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id;",o:["8","9","5","13"],a:1,
 e:"LEFT JOIN mempertahankan SEMUA baris tabel kiri (pelanggan), walaupun tidak punya pasangan. 8 baris pesanan yang cocok + 1 baris Lia (kolom pesanannya NULL) = 9.",
 w:["8 adalah hasil INNER JOIN — Lia belum dihitung.",null,"Setiap pelanggan bisa muncul lebih dari sekali.","13 = 5 + 8, tapi JOIN tidak menumpuk tabel seperti itu."]},
{k:"join",t:"mc",lv:2,q:"Query yang benar untuk mencari pelanggan yang BELUM PERNAH memesan:",o:["SELECT p.nama FROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nWHERE o.id IS NULL;","SELECT p.nama FROM pelanggan p\nJOIN pesanan o ON o.pelanggan_id = p.id\nWHERE o.id IS NULL;","SELECT nama FROM pelanggan WHERE id = NULL;","SELECT nama FROM pesanan WHERE qty = 0;"],a:0,
 e:"Pola klasik 'anti-join': LEFT JOIN mempertahankan semua pelanggan, lalu WHERE o.id IS NULL menyisakan yang tidak punya pasangan pesanan. Di bisnis ini dipakai untuk mencari pelanggan pasif yang perlu di-follow up tim sales.",
 w:[null,"INNER JOIN sudah membuang pelanggan tanpa pesanan, jadi IS NULL tidak akan menemukan apa pun.","Membandingkan dengan NULL harus memakai IS NULL, bukan = NULL. Lagi pula id pelanggan tidak ada yang NULL.","Tabel pesanan tidak punya kolom nama, dan tidak ada qty 0."]},
{k:"join",t:"is",lv:2,tb:["pelanggan","pesanan"],q:"Siapa nama pelanggan yang dihasilkan query 'belum pernah memesan' tadi?",a:["lia"],
 h:"Cek pelanggan yang id-nya tidak pernah muncul di kolom pesanan.pelanggan_id.",
 e:"pelanggan_id yang muncul di pesanan: 1, 2, 3, 4. Id 5 (Lia) tidak pernah muncul → Lia belum pernah memesan."},
{k:"join",t:"mc",lv:1,q:"Kata kunci untuk menulis syarat penghubung dua tabel pada JOIN:",o:["ON","WHERE","WITH","LINK"],a:0,
 e:"JOIN pelanggan p ON o.pelanggan_id = p.id. ON menjelaskan kolom mana yang menghubungkan kedua tabel. Lupa menulis ON (atau salah kolom) bisa membuat hasilnya berlipat ganda.",
 w:[null,"WHERE untuk menyaring hasil, bukan menghubungkan tabel (walau versi lama SQL memakai cara itu).","WITH dipakai untuk CTE (query bernama).","LINK bukan kata kunci SQL."]},
{k:"join",t:"mc",lv:3,tb:["pelanggan","pesanan","produk"],q:"Hasil query ini adalah…",kode:"SELECT p.nama, SUM(o.qty * pr.harga) AS belanja\nFROM pesanan o\nJOIN pelanggan p ON o.pelanggan_id = p.id\nJOIN produk pr ON o.produk_id = pr.id\nGROUP BY p.nama\nORDER BY belanja DESC\nLIMIT 1;",o:["Rina — 9450000","Sari — 7600000","Rina — 9000000","Tono — 4300000"],a:0,
 e:"Tiga tabel digabung: pesanan → pelanggan (nama) dan pesanan → produk (harga). Belanja Rina: 1×7.000.000 + 3×150.000 + 1×2.000.000 = 9.450.000. Sari: 7.000.000 + 2×300.000 = 7.600.000. Rina terbesar. Inilah 'pelanggan paling berharga' — query yang sangat sering diminta tim sales.",
 w:[null,"Sari di posisi kedua.","Hampir — jangan lupa 3 Mouse milik Rina (3 × 150.000 = 450.000).","Tono di posisi ketiga."]},
{k:"join",t:"mc",lv:3,tb:["pelanggan","pesanan","produk"],q:"Query sebelumnya ditambah WHERE pr.kategori = 'Aksesoris' (sebelum GROUP BY). Siapa juaranya?",o:["Budi — 750000","Sari — 600000","Rina — 450000","Budi — 5"],a:0,
 e:"Hanya pesanan Aksesoris yang dihitung: Rina 3 Mouse = 450.000; Sari 2 Keyboard = 600.000; Budi 5 Mouse = 750.000; Tono 1 Keyboard = 300.000. Budi juara — padahal di semua kategori Budi paling kecil. Filter bisa mengubah cerita.",
 w:[null,"Sari kedua dengan 600.000.","Rina ketiga di kategori ini.","5 adalah qty Budi, bukan nilai rupiahnya."]},
{k:"join",t:"mc",lv:2,q:"Kenapa kita memakai alias seperti p, o, dan pr?",o:["Supaya query lebih pendek dan jelas kolom berasal dari tabel mana (p.id vs o.id)","Karena wajib di semua query","Supaya query 10x lebih cepat","Untuk mengganti nama tabel secara permanen"],a:0,
 e:"Tabel pelanggan dan pesanan sama-sama punya kolom id. Tanpa awalan tabel, database bingung ('ambiguous column'). Alias membuat penulisan awalan itu singkat.",
 w:[null,"Alias opsional — tapi sangat membantu saat JOIN.","Alias tidak memengaruhi kecepatan.","Alias hanya berlaku selama query itu dijalankan."]},

// ---- BAB 4: Subquery ----
{k:"subquery",t:"mc",lv:1,q:"Subquery adalah…",o:["Query di dalam query lain, ditulis di dalam tanda kurung","Query yang dijalankan dua kali","Tabel cadangan","Query tanpa FROM"],a:0,
 e:"Subquery menjawab 'pertanyaan kecil' dulu, lalu hasilnya dipakai query luar. Contoh: produk yang harganya di atas (rata-rata harga semua produk). Bagian dalam kurung dihitung lebih dulu.",
 w:[null,"Subquery biasa dijalankan sekali (kecuali jenis correlated).","Subquery tidak menyimpan tabel apa pun.","Subquery biasanya tetap punya FROM."]},
{k:"subquery",t:"mc",lv:2,tb:"produk",q:"Hasil query ini adalah…",kode:"SELECT nama FROM produk\nWHERE harga > (SELECT AVG(harga) FROM produk);",o:["Laptop","Laptop, Monitor","Monitor","Semua produk"],a:0,
 e:"Subquery dihitung dulu: rata-rata harga = (7.000.000 + 150.000 + 2.000.000 + 300.000) ÷ 4 = 2.362.500. Produk dengan harga > 2.362.500 hanya Laptop. Monitor (2.000.000) masih di bawah rata-rata.",
 w:[null,"Monitor 2.000.000 masih di bawah rata-rata 2.362.500.","Monitor di bawah rata-rata.","Tidak mungkin semua produk di atas rata-ratanya sendiri."]},
{k:"subquery",t:"mc",lv:2,tb:["pelanggan","pesanan"],q:"Hasil query ini adalah…",kode:"SELECT nama FROM pelanggan\nWHERE id IN (SELECT pelanggan_id FROM pesanan WHERE qty >= 3);",o:["Rina, Budi","Budi","Rina, Tono, Budi","Lia"],a:0,
 e:"Subquery: pesanan dengan qty ≥ 3 adalah 102 (pelanggan 1, qty 3) dan 106 (pelanggan 4, qty 5) → daftar (1, 4). Query luar mengambil nama pelanggan id 1 dan 4: Rina dan Budi.",
 w:[null,"Rina juga punya pesanan qty 3 (≥ 3 termasuk 3).","Pesanan Tono hanya qty 2 dan 1.","Lia tidak punya pesanan sama sekali."]},
{k:"subquery",t:"mc",lv:2,tb:["pelanggan","pesanan"],q:"Hasil query ini adalah…",kode:"SELECT nama FROM pelanggan\nWHERE id NOT IN (SELECT pelanggan_id FROM pesanan);",o:["Lia","Budi","Tono, Lia","Kosong"],a:0,
 e:"Subquery menghasilkan (1, 2, 3, 4) — semua pelanggan yang pernah memesan. NOT IN mengambil yang tidak ada di daftar itu: Lia (id 5). Ini cara kedua (selain LEFT JOIN … IS NULL) untuk mencari pelanggan pasif.",
 w:[null,"Budi pernah memesan (pesanan 106).","Tono pernah memesan (103, 108).","Lia cocok dengan syaratnya."]},
{k:"subquery",t:"mc",lv:3,tb:["pesanan","produk"],q:"Hasil query ini adalah…",kode:"SELECT id FROM pesanan\nWHERE produk_id IN (\n  SELECT id FROM produk WHERE kategori = 'Komputer'\n);",o:["101, 103, 104, 107","101, 104","102, 105, 106, 108","103, 107"],a:0,
 e:"Subquery: produk kategori Komputer = id 1 (Laptop) dan 3 (Monitor). Pesanan dengan produk_id 1 atau 3: 101, 103, 104, 107.",
 w:[null,"Itu hanya pesanan Laptop. Monitor (produk 3) juga Komputer.","Itu justru pesanan Aksesoris.","Itu hanya pesanan Monitor."]},
{k:"subquery",t:"mc",lv:3,tb:"pesanan",q:"Hasil query ini adalah…",kode:"SELECT AVG(jml) FROM (\n  SELECT pelanggan_id, COUNT(*) AS jml\n  FROM pesanan\n  GROUP BY pelanggan_id\n) AS t;",o:["2","1.6","8","4"],a:0,
 e:"Subquery di FROM membuat tabel sementara: jumlah pesanan per pelanggan = 3, 2, 2, 1. Lalu AVG = (3 + 2 + 2 + 1) ÷ 4 = 2. Lia tidak ikut, karena ia tidak ada di tabel pesanan.",
 w:[null,"1.6 = 8 ÷ 5, seolah-olah Lia (0 pesanan) ikut dihitung. Tapi subquery hanya membaca tabel pesanan.","8 adalah total pesanan, belum dirata-rata.","4 adalah banyaknya pelanggan di tabel sementara."]},
{k:"subquery",t:"is",lv:2,q:"Operator untuk mengecek apakah sebuah nilai ADA dalam daftar hasil subquery:  WHERE id ____ (SELECT …)",a:["in"],
 h:"Dua huruf. Artinya 'di dalam'.",
 e:"IN mengecek keanggotaan dalam daftar. Lawannya NOT IN. Untuk subquery yang menghasilkan satu nilai saja, kamu juga bisa memakai =, >, <."},
{k:"subquery",t:"mc",lv:3,q:"Subquery berkorelasi (correlated subquery) artinya…",o:["Subquery yang memakai kolom dari query luar, sehingga dihitung ulang untuk tiap baris","Subquery yang berada di FROM","Subquery yang selalu menghasilkan satu nilai","Subquery yang error"],a:0,
 e:"Contoh: WHERE harga = (SELECT MAX(harga) FROM produk WHERE kategori = p.kategori). Bagian p.kategori berasal dari query luar, jadi untuk setiap produk, MAX dihitung untuk kategorinya sendiri. Ampuh, tapi bisa lambat di data besar.",
 w:[null,"Subquery di FROM disebut derived table.","Itu disebut scalar subquery.","Correlated subquery adalah teknik yang valid."]},
{k:"subquery",t:"mc",lv:3,tb:"produk",q:"Hasil query ini adalah…",kode:"SELECT nama FROM produk p\nWHERE harga = (\n  SELECT MAX(harga) FROM produk\n  WHERE kategori = p.kategori\n);",o:["Laptop, Keyboard","Laptop","Laptop, Monitor","Mouse, Monitor"],a:0,
 e:"Untuk setiap produk, subquery mencari harga termahal DI KATEGORINYA SENDIRI. Komputer → max 7.000.000 (Laptop). Aksesoris → max 300.000 (Keyboard). Hasilnya: produk termahal per kategori.",
 w:[null,"Keyboard juga termahal di kategori Aksesoris.","Monitor bukan yang termahal di kategori Komputer.","Itu justru yang termurah/bukan termahal di kategorinya."]},
];

const MATERI_SQL = [
{k:"select",judul:"SELECT, WHERE, ORDER BY — Mengambil Data",materi:`
<p>Semua latihan SQL memakai database toko kecil dengan 3 tabel:</p>
{{tb:pelanggan}}{{tb:produk}}{{tb:pesanan}}
<p>Pola dasar yang dipakai setiap hari:</p>
<pre><code>SELECT kolom1, kolom2      -- kolom yang ditampilkan (* = semua)
FROM tabel                 -- dari tabel mana
WHERE syarat               -- saring baris
ORDER BY kolom DESC        -- urutkan (ASC kecil→besar, DESC besar→kecil)
LIMIT 5;                   -- batasi jumlah baris</code></pre>
<p>Operator di WHERE:</p>
<ul>
<li><code>= &lt;&gt; &gt; &lt; &gt;= &lt;=</code> — teks pakai kutip tunggal: <code>'Jakarta'</code></li>
<li><code>AND</code>, <code>OR</code>, <code>NOT</code></li>
<li><code>IN ('Bandung','Surabaya')</code> — salah satu dari daftar</li>
<li><code>BETWEEN 100000 AND 500000</code>, <code>LIKE 'Ra%'</code> (diawali "Ra")</li>
<li><code>IS NULL</code> — bukan <code>= NULL</code></li>
</ul>
<div class="praktik">🧪 <b>Praktik langsung:</b> buka <b>Lab SQL</b> di beranda dan kerjakan tantangan 1–2. Kamu menulis query sungguhan dan hasilnya dicek otomatis.</div>`},

{k:"groupby",judul:"Agregat, GROUP BY & HAVING — Meringkas Data",materi:`
<p>Fungsi agregat meringkas banyak baris menjadi satu angka: <code>COUNT(*)</code>, <code>SUM()</code>, <code>AVG()</code>, <code>MIN()</code>, <code>MAX()</code>.</p>
<p><b>GROUP BY</b> = ringkasan <i>per kelompok</i>. Ini adalah <b>pivot table versi SQL</b>:</p>
<pre><code>SELECT pelanggan_id,
       COUNT(*)  AS jumlah_pesanan,
       SUM(qty)  AS total_barang
FROM pesanan
GROUP BY pelanggan_id;</code></pre>
<table class="mini-pivot"><tr><th>pelanggan_id</th><th>jumlah_pesanan</th><th>total_barang</th></tr>
<tr><td>1</td><td>3</td><td>5</td></tr><tr><td>2</td><td>2</td><td>3</td></tr>
<tr><td>3</td><td>2</td><td>3</td></tr><tr><td>4</td><td>1</td><td>5</td></tr></table>
<p><b>Aturan wajib:</b> setiap kolom di SELECT harus ada di GROUP BY, atau dibungkus fungsi agregat.</p>
<p><b>WHERE vs HAVING</b>:</p>
<ul>
<li><code>WHERE</code> menyaring <b>baris</b> sebelum dikelompokkan.</li>
<li><code>HAVING</code> menyaring <b>kelompok</b> setelah dikelompokkan → <code>HAVING COUNT(*) &gt;= 2</code>.</li>
</ul>
<pre><code>Urutan tulis: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT</code></pre>
<div class="praktik">🧪 <b>Lab SQL:</b> tantangan 3–4.</div>`},

{k:"join",judul:"JOIN — Menggabungkan Tabel",materi:`
<p>Tabel pesanan hanya menyimpan <code>pelanggan_id</code> dan <code>produk_id</code>. Untuk laporan yang bisa dibaca manusia, gabungkan tabel dengan JOIN:</p>
<pre><code>SELECT o.id, p.nama, pr.nama AS produk, o.qty
FROM pesanan o
JOIN pelanggan p ON o.pelanggan_id = p.id
JOIN produk pr  ON o.produk_id    = pr.id;</code></pre>
<p><b>Jenis JOIN yang paling sering dipakai:</b></p>
<ul>
<li><b>INNER JOIN</b> (cukup ditulis <code>JOIN</code>) → hanya baris yang <b>punya pasangan</b> di kedua tabel. Lia (tanpa pesanan) hilang.</li>
<li><b>LEFT JOIN</b> → <b>semua</b> baris tabel kiri tetap ada; yang tidak punya pasangan diisi <code>NULL</code>.</li>
</ul>
<p>Pola emas — mencari yang <b>tidak punya</b> pasangan (pelanggan pasif):</p>
<pre><code>SELECT p.nama
FROM pelanggan p
LEFT JOIN pesanan o ON o.pelanggan_id = p.id
WHERE o.id IS NULL;      -- hasil: Lia</code></pre>
<div class="catatan">💡 Gabungkan JOIN + GROUP BY untuk pertanyaan bisnis: "berapa total belanja tiap pelanggan?" → <code>SUM(o.qty * pr.harga) … GROUP BY p.nama</code>.</div>
<div class="praktik">🧪 <b>Lab SQL:</b> tantangan 5–7.</div>`},

{k:"subquery",judul:"Subquery — Query di Dalam Query",materi:`
<p>Subquery menjawab pertanyaan kecil dulu (di dalam kurung), lalu hasilnya dipakai query luar.</p>
<p><b>1. Subquery satu nilai</b> — dibandingkan dengan <code>= &gt; &lt;</code>:</p>
<pre><code>SELECT nama FROM produk
WHERE harga > (SELECT AVG(harga) FROM produk);   -- Laptop</code></pre>
<p><b>2. Subquery daftar</b> — dipakai dengan <code>IN</code> / <code>NOT IN</code>:</p>
<pre><code>SELECT nama FROM pelanggan
WHERE id IN (SELECT pelanggan_id FROM pesanan WHERE qty >= 3);</code></pre>
<p><b>3. Subquery di FROM</b> — tabel sementara yang diberi nama:</p>
<pre><code>SELECT AVG(jml) FROM (
  SELECT pelanggan_id, COUNT(*) AS jml
  FROM pesanan GROUP BY pelanggan_id
) AS t;</code></pre>
<p><b>4. Correlated subquery</b> — memakai kolom dari query luar (dihitung per baris):</p>
<pre><code>SELECT nama FROM produk p
WHERE harga = (SELECT MAX(harga) FROM produk
               WHERE kategori = p.kategori);</code></pre>
<div class="catatan">🤔 Kapan subquery, kapan JOIN? Banyak masalah bisa diselesaikan dengan keduanya. Pilih yang paling mudah dibaca timmu. Di wawancara, menjelaskan alasan pilihanmu sering lebih dinilai daripada jawabannya.</div>
<div class="praktik">🧪 <b>Lab SQL:</b> tantangan 8–10.</div>`},
];
