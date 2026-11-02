// ============ PHP — bahasa BUKAN prioritas (opsional) ============
// 5 bab: dasar, kontrol & array, fungsi, PHP untuk web (form & keamanan), OOP & database.
// vr:"php" → kode dijalankan dengan PHP 8 oleh skrip verifikasi.

const SOAL_PHP = [
// ---- BAB 1: Dasar ----
{k:"dasar",t:"mc",lv:1,q:"Di PHP, semua nama variabel diawali tanda…",o:["$","@","#","&"],a:0,
 e:"$nama = \"Rina\"; $total = 150000; — PHP bertipe dinamis seperti Python dan JavaScript: tipe ditentukan dari nilainya.",
 w:[null,"@ dipakai untuk menekan pesan error (sebaiknya dihindari).","# adalah awal komentar satu baris.","& dipakai untuk referensi."]},
{k:"dasar",t:"mc",lv:1,q:"Output kode ini:",kode:"$depan = \"Data\";\n$belakang = \"Analis\";\necho $depan . \" \" . $belakang;",o:["Data Analis","DataAnalis","Data + Analis","Error"],a:0,vr:"php",
 e:"Di PHP, operator penyambung teks adalah TITIK (.), bukan + seperti di JavaScript/Java. Spasi \" \" ditambahkan di tengah.",
 w:[null,"Ada teks spasi yang disambung di tengah.","Tanda + tidak dipakai di kode ini.","Kode ini valid."]},
{k:"dasar",t:"mc",lv:2,q:"Output kode ini:",kode:"$nama = \"Rina\";\necho \"Halo $nama\";\necho \"\\n\";\necho 'Halo $nama';",o:["Halo Rina\nHalo $nama","Halo Rina\nHalo Rina","Halo $nama\nHalo $nama","Halo $nama\nHalo Rina"],a:0,vr:"php",
 e:"Kutip GANDA mengganti variabel dengan nilainya (interpolasi) dan memproses \\n. Kutip TUNGGAL menampilkan teks apa adanya. Mirip template literal `${nama}` di JavaScript dan f-string di Python.",
 w:[null,"Kutip tunggal tidak menginterpolasi variabel.","Kutip ganda menginterpolasi variabel.","Terbalik."]},
{k:"dasar",t:"mc",lv:2,q:"Output kode ini:",kode:"echo \"10\" + 5;",o:["15","105","Error","\"10\"5"],a:0,vr:"php",
 e:"Karena + di PHP KHUSUS untuk angka, string \"10\" dikonversi menjadi 10 → 15. Bandingkan dengan JavaScript, di mana \"10\" + 5 = \"105\". Penyambung teks PHP adalah titik.",
 w:[null,"Itu hasil di JavaScript, atau \"10\" . 5 di PHP.","PHP mengonversi string angka secara otomatis.","Bukan penggabungan teks."]},
{k:"dasar",t:"mc",lv:2,q:"Output kode ini:",kode:"var_dump(\"5\" == 5);\nvar_dump(\"5\" === 5);",o:["bool(true)\nbool(false)","bool(true)\nbool(true)","bool(false)\nbool(false)","bool(false)\nbool(true)"],a:0,vr:"php",
 e:"Sama seperti JavaScript: == membandingkan setelah konversi tipe, === membandingkan nilai DAN tipe. var_dump menampilkan tipe dan nilainya — berguna untuk debugging.",
 w:[null,"=== tidak mengonversi tipe.","== mengonversi string ke angka.","Terbalik."]},
{k:"dasar",t:"mc",lv:1,q:"Di mana kode PHP dijalankan?",o:["Di SERVER — hasilnya (biasanya HTML) baru dikirim ke browser","Di browser pengguna, seperti JavaScript","Di Excel","Di printer"],a:0,
 e:"Pengguna tidak pernah melihat kode PHP-mu, hanya HTML hasilnya. Karena itu PHP bisa mengakses database dengan aman. JavaScript di browser berjalan di sisi pengguna.",
 w:[null,"JavaScript (frontend) yang berjalan di browser.","Excel tidak menjalankan PHP.","Printer tidak menjalankan kode."]},
{k:"dasar",t:"is",lv:1,q:"Setiap pernyataan PHP diakhiri tanda ___",a:[";"],
 h:"Sama seperti Java dan JavaScript.",
 e:"Titik koma. Lupa titik koma adalah penyebab error 'syntax error, unexpected …' yang paling sering."},

// ---- BAB 2: Kontrol & array ----
{k:"kontrol",t:"mc",lv:1,q:"Output kode ini:",kode:"$kota = [\"Jakarta\", \"Bandung\", \"Surabaya\"];\necho $kota[1] . \" \" . count($kota);",o:["Bandung 3","Jakarta 3","Bandung 2","Surabaya 3"],a:0,vr:"php",
 e:"Indeks dimulai dari 0, jadi $kota[1] = Bandung. count() menghitung jumlah elemen.",
 w:[null,"Indeks 1 adalah elemen kedua.","Ada 3 elemen.","Indeks 1 adalah elemen kedua."]},
{k:"kontrol",t:"mc",lv:1,q:"Output kode ini:",kode:"$harga = [\"Laptop\" => 7000000, \"Mouse\" => 150000];\necho $harga[\"Mouse\"];",o:["150000","7000000","Mouse","1"],a:0,vr:"php",
 e:"Associative array = pasangan kunci → nilai (seperti dict Python atau objek JavaScript). Sangat sering dipakai untuk data baris hasil query database.",
 w:[null,"7000000 adalah harga Laptop.","Yang diambil nilainya, bukan kuncinya.","Kunci 'Mouse' berisi 150000."]},
{k:"kontrol",t:"mc",lv:2,q:"Output kode ini:",kode:"$stok = [\"Laptop\" => 5, \"Mouse\" => 20];\nforeach ($stok as $produk => $jumlah) {\n    echo \"$produk: $jumlah\\n\";\n}",o:["Laptop: 5\nMouse: 20","5: Laptop\n20: Mouse","Laptop\nMouse","Laptop: 25"],a:0,vr:"php",
 e:"foreach ($array as $kunci => $nilai) mengulang setiap pasangan. Pola ini dipakai untuk membuat baris tabel HTML dari data.",
 w:[null,"Urutan kunci dan nilai tertukar.","Nilainya juga dicetak.","Tidak ada penjumlahan di loop ini."]},
{k:"kontrol",t:"mc",lv:2,q:"Output kode ini (PHP 8):",kode:"$nilai = 85;\necho match (true) {\n    $nilai >= 90 => \"A\",\n    $nilai >= 80 => \"B\",\n    default => \"C\",\n};",o:["B","A","C","true"],a:0,vr:"php",
 e:"match (PHP 8) mengembalikan nilai cabang pertama yang cocok — mirip switch expression di Java dan CASE WHEN di SQL. match(true) dengan syarat di tiap cabang menjadi IF bertingkat yang ringkas.",
 w:[null,"85 belum mencapai 90.","default hanya jika tidak ada yang cocok.","match mengembalikan nilai cabang, bukan true."]},
{k:"kontrol",t:"mc",lv:1,q:"Output kode ini:",kode:"$total = 0;\nfor ($i = 1; $i <= 4; $i++) {\n    $total += $i;\n}\necho $total;",o:["10","4","6","15"],a:0,vr:"php",
 e:"1 + 2 + 3 + 4 = 10. Sintaks for PHP sama dengan Java dan JavaScript, hanya variabelnya memakai $.",
 w:[null,"4 adalah nilai terakhir $i.","6 jika syaratnya $i < 4.","15 jika sampai 5."]},
{k:"kontrol",t:"mc",lv:2,q:"Output kode ini:",kode:"$data = [];\n$data[] = \"Andi\";\n$data[] = \"Bima\";\necho count($data) . \" \" . $data[0];",o:["2 Andi","2 Bima","1 Andi","0"],a:0,vr:"php",
 e:"$data[] = nilai menambahkan elemen di akhir array (seperti append/push). Elemen pertama berindeks 0.",
 w:[null,"Indeks 0 adalah yang ditambahkan pertama.","Ada dua elemen yang ditambahkan.","Array tidak lagi kosong."]},
{k:"kontrol",t:"is",lv:1,q:"Perulangan PHP khusus untuk array: ________ ($data as $baris)",a:["foreach"],
 h:"for + each.",
 e:"foreach ($data as $baris) atau foreach ($data as $kunci => $nilai)."},

// ---- BAB 3: Fungsi & fungsi array ----
{k:"fungsi",t:"mc",lv:1,q:"Output kode ini:",kode:"function luas($p, $l = 1) {\n    return $p * $l;\n}\necho luas(5) . \" \" . luas(5, 3);",o:["5 15","5 5","15 15","Error"],a:0,vr:"php",
 e:"$l = 1 adalah nilai default yang dipakai jika argumen kedua tidak dikirim. luas(5) = 5 × 1, luas(5, 3) = 15.",
 w:[null,"Argumen kedua di pemanggilan kedua menggantikan default.","Pemanggilan pertama memakai default 1.","Parameter default adalah fitur valid."]},
{k:"fungsi",t:"mc",lv:1,q:"Output kode ini:",kode:"echo array_sum([14, 2, 6]) . \" \" . max([14, 2, 6]);",o:["22 14","22 6","3 14","1426 14"],a:0,vr:"php",
 e:"array_sum menjumlah semua elemen; max mengambil yang terbesar. PHP punya puluhan fungsi array_* bawaan yang siap pakai.",
 w:[null,"max mengambil nilai terbesar.","3 adalah count, bukan jumlah.","Angka dijumlah, bukan disambung."]},
{k:"fungsi",t:"mc",lv:2,q:"Output kode ini:",kode:"$total = [14, 1.5, 6, 0.75, 7];\n$besar = array_filter($total, fn($t) => $t >= 6);\necho count($besar);",o:["3","2","5","22"],a:0,vr:"php",
 e:"array_filter + arrow function fn() (PHP 7.4+) — padanan filter di JavaScript dan list comprehension di Python. Yang lolos: 14, 6, 7.",
 w:[null,"6 juga memenuhi ≥ 6.","1,5 dan 0,75 tidak lolos.","Yang dihitung banyaknya, bukan jumlahnya."]},
{k:"fungsi",t:"mc",lv:2,q:"Output kode ini:",kode:"$nama = [\"rina\", \"tono\"];\n$rapi = array_map(fn($n) => ucfirst($n), $nama);\necho implode(\", \", $rapi);",o:["Rina, Tono","rina, tono","RINA, TONO","Rina,Tono"],a:0,vr:"php",
 e:"array_map menerapkan fungsi ke setiap elemen (seperti map di JavaScript). ucfirst mengkapitalkan huruf pertama. implode menggabungkan array menjadi teks dengan pemisah — kebalikannya explode.",
 w:[null,"ucfirst mengubah huruf pertama menjadi kapital.","Itu hasil strtoupper.","Pemisahnya koma + spasi."]},
{k:"fungsi",t:"mc",lv:1,q:"Output kode ini:",kode:"echo strlen(\"Keyboard\") . \" \" . strtoupper(\"jakarta\");",o:["8 JAKARTA","8 Jakarta","9 JAKARTA","7 JAKARTA"],a:0,vr:"php",
 e:"strlen = panjang teks (seperti LEN di Excel), strtoupper = huruf besar (seperti UPPER). Nama fungsi PHP banyak yang diawali str_ / str.",
 w:[null,"strtoupper mengubah semua huruf.","'Keyboard' terdiri dari 8 huruf.","'Keyboard' terdiri dari 8 huruf."]},
{k:"fungsi",t:"mc",lv:2,q:"Output kode ini:",kode:"echo number_format(1234567, 0, \",\", \".\");",o:["1.234.567","1,234,567","1234567","Rp1.234.567"],a:0,vr:"php",
 e:"number_format(angka, desimal, pemisah_desimal, pemisah_ribuan). Dengan pemisah ribuan '.', hasilnya format Indonesia. Tambahkan 'Rp ' sendiri di depannya.",
 w:[null,"Itu jika memakai pemisah default (koma).","number_format menambahkan pemisah ribuan.","Simbol Rp tidak ditambahkan otomatis."]},
{k:"fungsi",t:"mc",lv:2,q:"Output kode ini:",kode:"$nilai = [\"Andi\" => 18, \"Bima\" => 5, \"Citra\" => 13];\narsort($nilai);\necho array_key_first($nilai);",o:["Andi","Bima","Citra","18"],a:0,vr:"php",
 e:"arsort mengurutkan nilai dari besar ke kecil sambil MEMPERTAHANKAN kuncinya. array_key_first mengambil kunci pertama → sales dengan nilai terbesar. Varian lain: sort/rsort (tanpa kunci), asort (naik), ksort (berdasarkan kunci).",
 w:[null,"Bima paling kecil.","Citra di urutan kedua.","Yang diambil kuncinya, bukan nilainya."]},
{k:"fungsi",t:"mc",lv:2,q:"Output kode ini:",kode:"$input = [];\necho $input[\"q\"] ?? \"kosong\";",o:["kosong","null","Warning: Undefined array key","q"],a:0,vr:"php",
 e:"Operator ?? (null coalescing) mengembalikan sisi kanan jika sisi kiri tidak ada/null — tanpa warning. Pola wajib saat membaca input form: $_GET['q'] ?? ''.",
 w:[null,"?? mengganti nilai yang tidak ada dengan 'kosong'.","?? mencegah warning tersebut.","q adalah nama kuncinya, bukan nilainya."]},

// ---- BAB 4: PHP untuk web: form, keamanan, session ----
{k:"web",t:"mc",lv:1,q:"Beda $_GET dan $_POST:",o:["$_GET membaca data dari URL (?q=laptop), cocok untuk pencarian. $_POST membaca data form yang dikirim di badan request, cocok untuk menyimpan/login","Keduanya sama persis","$_POST lebih lambat","$_GET hanya untuk gambar"],a:0,
 e:"Data GET terlihat di URL dan bisa di-bookmark. Data POST tidak tampil di URL (tapi tetap bukan berarti terenkripsi — pakai HTTPS).",
 w:[null,"Cara pengirimannya berbeda.","Perbedaan kecepatannya tidak berarti.","GET bisa membawa data apa pun lewat URL."]},
{k:"web",t:"mc",lv:2,q:"Output kode ini, dan kenapa penting?",kode:"$komentar = \"<script>alert(1)</script>\";\necho htmlspecialchars($komentar);",o:["&lt;script&gt;alert(1)&lt;/script&gt; — tag diubah menjadi teks biasa sehingga tidak dijalankan browser (mencegah XSS)","<script>alert(1)</script> — script dijalankan","Teks kosong","Error"],a:0,vr:"php",vx:"&lt;script&gt;alert(1)&lt;/script&gt;",
 e:"Menampilkan input pengguna tanpa htmlspecialchars membuka celah XSS: orang lain bisa menyisipkan JavaScript ke halamanmu. Aturan: escape setiap data dari pengguna saat menampilkannya. (Fungsi esc() di KodeQuiz melakukan hal yang sama.)",
 w:[null,"Itu yang terjadi TANPA htmlspecialchars — berbahaya.","Teksnya tetap ditampilkan, hanya aman.","Fungsi ini valid."]},
{k:"web",t:"mc",lv:2,q:"Cara menyimpan password pengguna yang benar di PHP:",o:["password_hash() saat mendaftar, password_verify() saat login","Simpan apa adanya (plain text)","md5($password)","base64_encode($password)"],a:0,
 e:"password_hash memakai algoritma lambat yang dirancang khusus untuk password (bcrypt/argon2) dan menambahkan salt otomatis. md5 sudah tidak aman untuk password, dan base64 hanya encoding yang bisa dibalik.",
 w:[null,"Jika database bocor, semua password langsung terbaca.","md5 terlalu cepat dan rentan ditebak.","base64 bukan enkripsi; bisa langsung didekode."]},
{k:"web",t:"mc",lv:2,q:"Kenapa kode ini BERBAHAYA?",kode:"$kota = $_GET[\"kota\"];\n$sql = \"SELECT * FROM pelanggan WHERE kota = '$kota'\";",o:["Rentan SQL injection: input seperti ' OR '1'='1 bisa mengubah query. Gunakan prepared statement","Tidak berbahaya","Karena memakai SELECT *","Karena $_GET lambat"],a:0,
 e:"Jangan pernah menyambung input pengguna langsung ke query SQL. Prepared statement mengirim query dan datanya secara terpisah, sehingga input selalu dianggap data, bukan perintah.",
 w:[null,"Ini salah satu celah keamanan paling berbahaya dan paling umum.","SELECT * kurang efisien, tapi bukan masalah keamanannya.","Kecepatan bukan masalahnya."]},
{k:"web",t:"mc",lv:2,q:"Agar pengguna tetap 'login' saat berpindah halaman, PHP memakai…",o:["Session: session_start() lalu simpan data di $_SESSION","Variabel biasa","Menyimpan password di URL","echo"],a:0,
 e:"HTTP tidak 'mengingat' apa pun antar request. Session menyimpan data di server dan mengenali pengguna lewat cookie ID sesi. session_start() harus dipanggil sebelum ada output apa pun.",
 w:[null,"Variabel biasa hilang setelah halaman selesai diproses.","Sangat tidak aman.","echo hanya menampilkan teks."]},
{k:"web",t:"mc",lv:2,q:"Field form <input type=\"text\"> tidak muncul di $_POST. Penyebab paling umum:",o:["Input tidak punya atribut name — PHP membaca data berdasarkan name","Input harus berwarna","Form harus berada di file .php","Browser tidak mendukung POST"],a:0,
 e:"<input name=\"nama\"> → dibaca dengan $_POST['nama']. Atribut id dipakai CSS/JavaScript, sedangkan name dipakai saat data dikirim ke server.",
 w:[null,"Warna tidak berpengaruh.","Form HTML biasa pun bisa mengirim ke file PHP.","Semua browser mendukung POST."]},
{k:"web",t:"mc",lv:2,q:"Setelah menyimpan data dari form POST, praktik terbaik adalah…",o:["Redirect dengan header(\"Location: daftar.php\") agar refresh tidak mengirim ulang data (pola Post/Redirect/Get)","Menampilkan halaman yang sama","Menyuruh pengguna menekan back","Menghapus session"],a:0,
 e:"Tanpa redirect, menekan refresh akan menanyakan 'kirim ulang form?' dan data bisa tersimpan dua kali (misal transaksi ganda).",
 w:[null,"Refresh bisa mengirim ulang data.","Pengalaman pengguna buruk dan tetap berisiko dobel.","Tidak berhubungan."]},
{k:"web",t:"is",lv:1,q:"Fungsi PHP untuk mengubah < dan > menjadi teks aman sebelum ditampilkan: ________________($teks)",a:["htmlspecialchars"],
 h:"html + special + chars.",
 e:"htmlspecialchars mencegah XSS. Aturan emas keamanan web: escape output, validasi input, dan pakai prepared statement untuk database."},

// ---- BAB 5: OOP, database & Laravel ----
{k:"oopdb",t:"mc",lv:2,q:"Output kode ini (PHP 8):",kode:"class Produk {\n    public function __construct(\n        public string $nama,\n        public int $harga\n    ) {}\n\n    public function total(int $qty): int {\n        return $this->harga * $qty;\n    }\n}\n\n$p = new Produk(\"Mouse\", 150000);\necho $p->total(3);",o:["450000","150000","Mouse","3"],a:0,vr:"php",
 e:"Constructor property promotion (PHP 8) membuat dan mengisi property langsung dari parameter constructor. Anggota object diakses dengan ->, bukan titik. $this menunjuk object itu sendiri.",
 w:[null,"Itu harga satuannya.","Method mengembalikan angka.","3 adalah qty yang dikirim."]},
{k:"oopdb",t:"mc",lv:1,q:"Di PHP, operator untuk mengakses property/method sebuah object adalah…",o:["->  (contoh: $p->nama)",".  (contoh: $p.nama)","::  untuk semua kasus","=>"],a:0,
 e:"-> untuk anggota object, :: untuk anggota static/konstanta class (Produk::PAJAK), dan . untuk menyambung teks. => dipakai di array asosiatif dan arrow function.",
 w:[null,"Titik adalah penyambung teks di PHP.",":: khusus untuk anggota static dan konstanta.","=> untuk array asosiatif dan fn()."]},
{k:"oopdb",t:"mc",lv:2,q:"Kenapa kode PDO ini aman dari SQL injection?",kode:"$stmt = $pdo->prepare(\"SELECT * FROM pelanggan WHERE kota = ?\");\n$stmt->execute([$kota]);\n$hasil = $stmt->fetchAll();",o:["Query dan data dikirim terpisah (parameter binding); input selalu dianggap data, bukan bagian dari perintah SQL","Karena memakai fetchAll","Karena tanda tanya menyembunyikan data","Karena PDO mengenkripsi database"],a:0,
 e:"Tanda ? adalah placeholder. Database menerima struktur query lebih dulu, lalu nilainya. Prinsip ini sama di semua bahasa (Python, Java, Node.js).",
 w:[null,"fetchAll hanya mengambil hasilnya.","Bukan disembunyikan, tapi dipisahkan dari perintah.","PDO tidak mengenkripsi database."]},
{k:"oopdb",t:"mc",lv:2,q:"Dalam pola MVC (dipakai Laravel), tugas masing-masing bagian:",o:["Model = data & aturan bisnis, View = tampilan (Blade), Controller = menerima request dan menghubungkan keduanya","Model = tampilan, View = database","Controller = desain CSS","Semua kode ditulis di satu file"],a:0,
 e:"Memisahkan tanggung jawab membuat aplikasi besar mudah dirawat. Odoo memakai pola yang mirip: model Python, view XML, dan controller untuk route web.",
 w:[null,"Terbalik.","CSS bagian dari tampilan (View).","Itu yang ingin dihindari MVC."]},
{k:"oopdb",t:"mc",lv:2,q:"Query Eloquent (Laravel) Pelanggan::where('kota', 'Bandung')->get() setara dengan SQL…",o:["SELECT * FROM pelanggan WHERE kota = 'Bandung'","DELETE FROM pelanggan","INSERT INTO pelanggan","SELECT COUNT(*) FROM pelanggan"],a:0,
 e:"Eloquent adalah ORM — sama konsepnya dengan ORM Odoo (search) atau pandas. Pemahaman SQL membuatmu cepat menguasai ORM mana pun, karena ujung-ujungnya ORM menghasilkan SQL.",
 w:[null,"get() mengambil data, bukan menghapus.","get() tidak menambah data.","Untuk menghitung: ->count()."]},
{k:"oopdb",t:"mc",lv:1,q:"Composer di ekosistem PHP berfungsi sebagai…",o:["Package manager: mengunduh dan mengelola library (seperti pip di Python dan npm di JavaScript)","Editor kode","Server database","Pengganti PHP"],a:0,
 e:"composer require nama/paket. Laravel sendiri di-install dengan Composer.",
 w:[null,"Editor kode misalnya VS Code.","Database misalnya MySQL/PostgreSQL.","Composer berjalan di atas PHP."]},
{k:"oopdb",t:"mc",lv:1,q:"Di mana PHP paling banyak dipakai di lowongan kerja Indonesia?",o:["Web development: Laravel, CodeIgniter, dan WordPress (situs perusahaan, sistem internal, toko online)","Analisis data dan machine learning","Aplikasi iOS","Desain grafis"],a:0,
 e:"Lowongan PHP/Laravel sangat banyak di Indonesia. Untuk jalur utamamu (Data/BI/Odoo), PHP bukan prioritas — tapi bisa jadi rencana cadangan di jalur web developer.",
 w:[null,"Data & ML didominasi Python, SQL, dan R.","iOS memakai Swift.","Desain grafis tidak memakai PHP."]},
{k:"oopdb",t:"is",lv:1,q:"Variabel khusus untuk merujuk object itu sendiri di dalam method class PHP: $____",a:["this","$this"],
 h:"Sama dengan Java/JavaScript, tapi diawali $.",
 e:"$this->harga. Di Python namanya self, di Java/JavaScript this."}
];

const MATERI_PHP = [
{k:"dasar",judul:"Dasar PHP: Variabel, Teks & Cara Kerjanya",materi:`
<p><b>Kenapa bukan prioritas untukmu?</b> PHP sangat populer di lowongan web developer Indonesia (Laravel, WordPress), tapi jalur utamamu adalah Data/BI/Odoo. Pelajari secukupnya sebagai rencana cadangan dan agar bisa membaca kode web.</p>
<p>PHP berjalan di <b>server</b>: browser hanya menerima HTML hasilnya.</p>
<pre><code>&lt;?php
$nama  = "Rina";             // variabel selalu diawali $
$total = 150000;
echo "Halo $nama";           // kutip ganda → variabel diganti nilainya
echo 'Halo $nama';           // kutip tunggal → apa adanya
echo "Total: " . $total;     // titik = sambung teks
echo "10" + 5;               // 15 (+ khusus angka)
var_dump("5" === 5);         // bool(false) → pakai ===</code></pre>
<div class="praktik">🧪 <b>Coba:</b> jika PHP ter-install, simpan sebagai <code>coba.php</code> lalu jalankan <code>php coba.php</code> di terminal. Atau gunakan XAMPP/Laragon untuk menjalankan PHP di browser.</div>`},

{k:"kontrol",judul:"Kontrol Alur & Array",materi:`
<pre><code>$kota  = ["Jakarta", "Bandung"];               // array berindeks
$harga = ["Laptop" =&gt; 7000000, "Mouse" =&gt; 150000];   // asosiatif
$kota[] = "Surabaya";                          // tambah di akhir
count($kota);                                  // 3

foreach ($harga as $produk =&gt; $h) {
    echo "$produk: $h\\n";
}

if ($nilai &gt;= 80) { … } elseif ($nilai &gt;= 70) { … } else { … }

echo match (true) {                            // PHP 8
    $nilai &gt;= 90 =&gt; "A",
    $nilai &gt;= 80 =&gt; "B",
    default      =&gt; "C",
};</code></pre>`},

{k:"fungsi",judul:"Fungsi & Fungsi Array Bawaan",materi:`
<pre><code>function luas($p, $l = 1) { return $p * $l; }

array_sum([14, 2, 6]);                         // 22
array_filter($data, fn($t) =&gt; $t &gt;= 6);        // WHERE
array_map(fn($n) =&gt; ucfirst($n), $nama);       // ubah tiap elemen
implode(", ", $arr);  explode(",", "a,b,c");   // gabung / pecah teks
arsort($nilai);  array_key_first($nilai);      // urut turun, ambil teratas
number_format(1234567, 0, ",", ".");           // "1.234.567"
$_GET["q"] ?? "";                              // nilai default tanpa warning</code></pre>
<div class="catatan">🔗 Padanan: <code>array_filter</code> ≈ filter (JS) ≈ list comprehension (Python) ≈ WHERE (SQL). Satu konsep, banyak bahasa.</div>`},

{k:"web",judul:"PHP untuk Web: Form, Session & Keamanan",materi:`
<pre><code>&lt;form method="post" action="simpan.php"&gt;
  &lt;input name="nama"&gt;      &lt;!-- name wajib agar terbaca di $_POST --&gt;
  &lt;button&gt;Simpan&lt;/button&gt;
&lt;/form&gt;

// simpan.php
session_start();
$nama = trim($_POST["nama"] ?? "");
if ($nama === "") { … tampilkan error … }
// … simpan ke database dengan prepared statement …
header("Location: daftar.php");   // Post/Redirect/Get
exit;</code></pre>
<p><b>Tiga aturan keamanan wajib:</b></p>
<ol>
<li><b>Escape output</b>: <code>htmlspecialchars($teks)</code> → mencegah XSS.</li>
<li><b>Prepared statement</b> untuk SQL → mencegah SQL injection.</li>
<li><b>password_hash / password_verify</b> → jangan simpan password apa adanya (dan jangan pakai md5).</li>
</ol>`},

{k:"oopdb",judul:"OOP, Database (PDO) & Laravel",materi:`
<pre><code>class Produk {
    public function __construct(public string $nama, public int $harga) {}
    public function total(int $qty): int { return $this-&gt;harga * $qty; }
}
$p = new Produk("Mouse", 150000);
echo $p-&gt;total(3);            // 450000  (-&gt; untuk anggota object)

$stmt = $pdo-&gt;prepare("SELECT * FROM pelanggan WHERE kota = ?");
$stmt-&gt;execute([$kota]);
$rows = $stmt-&gt;fetchAll();</code></pre>
<p><b>Laravel</b> = framework PHP paling populer, memakai pola <b>MVC</b>:</p>
<pre><code>Model      → Pelanggan::where('kota', 'Bandung')-&gt;get()   (Eloquent ORM)
View       → resources/views/pelanggan.blade.php           (Blade)
Controller → menerima request, memanggil model, mengirim ke view</code></pre>
<div class="catatan">🧭 Konsep MVC dan ORM juga ada di Odoo (model Python, view XML, ORM <code>search</code>). Yang kamu pelajari di sini tidak sia-sia walaupun PHP bukan prioritas.</div>`}
];
