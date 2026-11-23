// ============ PHP lanjutan — bab 6–7 ============
// String, tanggal & regex; PHP modern (exception, JSON/API, match, tipe, Composer).
// vr:"php" → kode dijalankan dengan PHP 8 oleh alat/cek-soal.js.

SOAL_PHP.push(
// ---- BAB 6: string, tanggal, regex ----
{k:"stringtgl",t:"mc",lv:2,q:"Output kode ini:",kode:"echo strlen(\"café\") . \" \" . mb_strlen(\"café\");",o:["5 4","4 4","4 5","5 5"],a:0,vr:"php",
 e:"strlen menghitung BYTE, bukan huruf. Huruf é dalam UTF-8 memakan 2 byte, jadi 5. mb_strlen (multibyte) menghitung huruf sebenarnya: 4.\nIngat: untuk teks yang bisa berisi huruf beraksen, emoji, atau aksara non-Latin, pakai fungsi mb_: mb_strlen, mb_substr, mb_strtoupper.",
 w:[null,"strlen menghitung byte.","Terbalik.","mb_strlen menghitung huruf."]},
{k:"stringtgl",t:"mc",lv:1,q:"Output kode ini:",kode:"echo ucwords(\"kedai kopi senja\");",o:["Kedai Kopi Senja","KEDAI KOPI SENJA","Kedai kopi senja","kedai Kopi Senja"],a:0,vr:"php",
 e:"Keluarga fungsi huruf:\n• strtoupper → semua kapital\n• strtolower → semua kecil\n• ucfirst → huruf pertama kalimat kapital\n• ucwords → huruf pertama SETIAP kata kapital",
 w:[null,"Itu strtoupper.","Itu ucfirst.","Kata pertama juga diubah."]},
{k:"stringtgl",t:"mc",lv:1,q:"Output kode ini:",kode:"echo str_replace(\"a\", \"o\", \"nasa kopi\");",o:["noso kopi","nosa kopi","nasa kopo","noso kopo"],a:0,vr:"php",
 e:"str_replace(cari, ganti, teks) mengganti SEMUA kemunculan (berbeda dengan replace di JavaScript yang hanya yang pertama). Bisa juga memakai array: str_replace([\"a\", \"i\"], [\"o\", \"u\"], $teks).",
 w:[null,"Semua a diganti.","Yang dicari huruf a, bukan i.","i tidak ikut diganti."]},
{k:"stringtgl",t:"mc",lv:1,q:"Output kode ini:",kode:"$tag = explode(\",\", \"promo,baru,diskon\");\necho count($tag) . \" \" . implode(\" | \", $tag);",o:["3 promo | baru | diskon","1 promo,baru,diskon","3 promo,baru,diskon","Error"],a:0,vr:"php",
 e:"explode memecah teks menjadi array berdasarkan pemisah (seperti split). implode (alias join) menyatukan array menjadi teks dengan perekat baru.",
 w:[null,"Teks dipecah menjadi 3 elemen.","implode memakai perekat \" | \".","Kedua fungsi sah."]},
{k:"stringtgl",t:"mc",lv:1,q:"Output kode ini:",kode:"echo substr(\"Indonesia\", 0, 4) . \"-\" . substr(\"Indonesia\", -3);",o:["Indo-sia","Indon-sia","Indo-esia","ndo-sia"],a:0,vr:"php",
 e:"substr(teks, mulai, panjang). Indeks mulai dari 0. Angka negatif dihitung dari belakang: -3 = tiga huruf terakhir.",
 w:[null,"Panjangnya 4, bukan 5.","-3 mengambil 3 huruf terakhir.","Mulai dari indeks 0."]},
{k:"stringtgl",t:"mc",lv:2,q:"Output kode ini:",kode:"var_dump(str_contains(\"kopi susu\", \"susu\"));\nvar_dump(strpos(\"kopi susu\", \"kopi\"));",o:["bool(true) lalu int(0)","bool(true) lalu bool(true)","int(1) lalu int(0)","bool(true) lalu bool(false)"],a:0,vr:"php",vx:"bool(true)\nint(0)",
 e:"str_contains (PHP 8) menjawab ya/tidak. strpos mengembalikan POSISI (mulai 0) atau false.\n• Jebakan terkenal: if (strpos($t, \"kopi\")) bernilai salah karena posisinya 0! Tulis strpos(...) !== false, atau lebih baik pakai str_contains.",
 w:[null,"strpos mengembalikan posisi, bukan boolean.","var_dump menampilkan tipe aslinya.","Posisi 0 bukan false, tapi dianggap salah di if."]},
{k:"stringtgl",t:"mc",lv:2,q:"Output kode ini:",kode:"echo number_format(1234567.5, 0, \",\", \".\") . \" \" . sprintf(\"%05d\", 42);",o:["1.234.568 00042","1,234,567 42","1.234.567 00042","1234568 00042"],a:0,vr:"php",
 e:"number_format(angka, desimal, pemisah_desimal, pemisah_ribuan) cocok untuk format rupiah Indonesia. Nilainya dibulatkan (…567,5 → 568).\nsprintf(\"%05d\", 42) mengisi nol di depan sampai 5 digit, berguna untuk nomor faktur INV-00042.",
 w:[null,"Pemisah ribuan sudah diatur menjadi titik.","Angka dibulatkan ke atas.","Pemisah ribuan ditambahkan."]},
{k:"stringtgl",t:"mc",lv:1,q:"Output kode ini:",kode:"$nama = \"   Budi Santoso  \";\necho \"[\" . trim($nama) . \"]\";",o:["[Budi Santoso]","[   Budi Santoso  ]","[BudiSantoso]","[Budi Santoso  ]"],a:0,vr:"php",
 e:"trim membuang spasi (dan baris baru, tab) di awal dan akhir, bukan di tengah. Wajib dipakai untuk input form: pengguna sering tidak sengaja mengetik spasi. ltrim/rtrim hanya satu sisi.",
 w:[null,"trim membuang spasi di ujung.","Spasi di tengah tetap ada.","Spasi kanan juga dibuang."]},
{k:"stringtgl",t:"mc",lv:2,q:"Output kode ini:",kode:"$t = new DateTime(\"2026-01-30\");\n$t->modify(\"+3 days\");\necho $t->format(\"d/m/Y\");",o:["02/02/2026","33/01/2026","30/01/2026","03/02/2026"],a:0,vr:"php",
 e:"DateTime mengurus pergantian bulan dan tahun kabisat. format memakai huruf kode:\n• d hari 2 digit, m bulan 2 digit, Y tahun 4 digit\n• H jam 24, i menit, s detik\n• D/l nama hari (Inggris), M/F nama bulan\nUntuk objek yang tidak berubah saat dimodifikasi, pakai DateTimeImmutable.",
 w:[null,"Januari hanya 31 hari.","modify sudah menambah 3 hari.","30 + 3 hari = 2 Februari."]},
{k:"stringtgl",t:"mc",lv:2,q:"Output kode ini:",kode:"$awal = new DateTime(\"2026-11-01\");\n$akhir = new DateTime(\"2026-11-23\");\necho $awal->diff($akhir)->days;",o:["22","23","21","-22"],a:0,vr:"php",
 e:"diff menghasilkan DateInterval; ->days berisi total selisih hari. Berguna untuk umur piutang, lama sewa, atau sisa hari promo.",
 w:[null,"23 - 1 = 22.","Selisihnya 22.","->days selalu positif."]},
{k:"stringtgl",t:"mc",lv:2,q:"Output kode ini:",kode:"echo preg_match('/^08\\d{8,11}$/', \"081234567890\") . preg_match('/^08\\d{8,11}$/', \"0812-3456\");",o:["10","11","00","01"],a:0,vr:"php",
 e:"preg_match mengembalikan 1 kalau cocok, 0 kalau tidak. Pola: diawali 08, lalu 8 sampai 11 digit, lalu selesai. Teks kedua berisi tanda strip dan terlalu pendek.\n• Pola ditulis di antara tanda / dan sebaiknya memakai kutip tunggal agar backslash tidak diolah PHP.",
 w:[null,"Teks kedua tidak cocok.","Teks pertama cocok.","Terbalik."]},
{k:"stringtgl",t:"mc",lv:2,q:"Output kode ini:",kode:"preg_match_all('/\\d+/', \"2 kopi, 15 roti, 7 teh\", $m);\necho implode(\"+\", $m[0]);",o:["2+15+7","2+1+5+7","24","2"],a:0,vr:"php",
 e:"preg_match_all mengumpulkan SEMUA kecocokan ke variabel ketiga ($m). $m[0] berisi daftar teks yang cocok dengan seluruh pola. preg_replace('/\\s+/', ' ', $t) dipakai untuk mengganti.",
 w:[null,"\\d+ mengambil digit berurutan sekaligus.","Yang dicetak gabungan teksnya, bukan jumlah.","preg_match_all mengambil semua."]},
{k:"stringtgl",t:"mc",lv:3,q:"Output kode ini:",kode:"$harga = 18000;\necho \"Harga: {$harga} rupiah\" . ' | ' . 'Harga: {$harga} rupiah';",o:["Harga: 18000 rupiah | Harga: {$harga} rupiah","Harga: 18000 rupiah | Harga: 18000 rupiah","Harga: {$harga} rupiah | Harga: 18000 rupiah","Error"],a:0,vr:"php",
 e:"Kutip GANDA mengolah variabel di dalamnya (interpolasi); kutip TUNGGAL menampilkan teks apa adanya. Kurung kurawal {$var} membantu PHP tahu batas nama variabel, misalnya \"{$jumlah}pcs\".",
 w:[null,"Kutip tunggal tidak mengolah variabel.","Terbalik.","Keduanya sah."]},
{k:"stringtgl",t:"is",lv:1,q:"Fungsi PHP untuk memecah teks menjadi array berdasarkan pemisah: ____(\",\", $teks)",a:["explode"],
 e:"explode(pemisah, teks), kebalikannya implode(perekat, array)."},
{k:"stringtgl",t:"is",lv:2,q:"Fungsi untuk memformat angka dengan pemisah ribuan, misalnya 1.234.567: ____(1234567, 0, \",\", \".\")",a:["number_format"],
 e:"Untuk format mata uang yang mengikuti locale, ada juga NumberFormatter dari ekstensi intl."},

// ---- BAB 7: PHP modern ----
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"try {\n    throw new Exception(\"Stok habis\");\n} catch (Exception $e) {\n    echo \"Gagal: \" . $e->getMessage();\n} finally {\n    echo \" | selesai\";\n}",o:["Gagal: Stok habis | selesai","Stok habis","Gagal: Exception | selesai","Fatal error"],a:0,vr:"php",
 e:"Pola yang sama dengan Java/JavaScript: throw melempar, catch menangkap, finally selalu jalan. Method penting objek exception: getMessage(), getCode(), getFile(), getLine().",
 w:[null,"Teks Gagal dan selesai juga dicetak.","getMessage berisi pesan, bukan nama class.","Exception sudah ditangkap."]},
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"$data = [\"nama\" => \"Ani\", \"nilai\" => [90, 85], \"aktif\" => true];\necho json_encode($data);",o:["{\"nama\":\"Ani\",\"nilai\":[90,85],\"aktif\":true}","[\"Ani\",[90,85],true]","{nama: Ani, nilai: [90,85]}","Array"],a:0,vr:"php",
 e:"json_encode mengubah array PHP menjadi teks JSON. Array asosiatif (berkunci teks) menjadi objek {…}, array berurutan menjadi [ ]. Ini inti membuat API: PHP mengirim JSON yang dibaca JavaScript dengan res.json().\n• Tambahkan JSON_PRETTY_PRINT untuk versi rapi, JSON_UNESCAPED_UNICODE agar huruf beraksen tidak diubah jadi \\u00e9.",
 w:[null,"Kunci teks dipertahankan sebagai objek.","JSON memakai kutip ganda.","echo array langsung mencetak 'Array', tapi di sini di-encode dulu."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"$teks = '{\"produk\": \"kopi\", \"qty\": 3}';\n$a = json_decode($teks, true);\n$o = json_decode($teks);\necho $a[\"qty\"] * 2 . \" \" . $o->produk;",o:["6 kopi","3 kopi","6 Error","Error"],a:0,vr:"php",
 e:"json_decode($teks, true) → array asosiatif, dibaca dengan [\"kunci\"]. Tanpa true → objek stdClass, dibaca dengan ->kunci. Kalau JSON rusak, hasilnya null; periksa dengan json_last_error() atau pakai flag JSON_THROW_ON_ERROR.",
 w:[null,"qty dikali 2.","Objek dibaca dengan ->.","Kedua bentuk sah."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini (PHP 8):",kode:"$kode = 404;\necho match ($kode) {\n    200, 201 => \"Berhasil\",\n    404 => \"Tidak ditemukan\",\n    500 => \"Error server\",\n    default => \"Lainnya\",\n};",o:["Tidak ditemukan","Berhasil","Lainnya","Error: butuh break"],a:0,vr:"php",
 e:"match adalah versi modern switch:\n• Mengembalikan nilai.\n• Membandingkan dengan === (ketat, tidak ada konversi tipe).\n• Tidak butuh break.\n• Kalau tidak ada yang cocok dan tidak ada default, melempar UnhandledMatchError.",
 w:[null,"404 bukan 200/201.","404 punya cabang sendiri.","match tidak memakai break."]},
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"$input = [\"nama\" => \"Ani\"];\necho $input[\"kota\"] ?? \"Belum diisi\";",o:["Belum diisi","Warning: Undefined array key","null","Ani"],a:0,vr:"php",
 e:"?? (null coalescing) memakai nilai kiri kalau ada dan tidak null; kalau tidak, nilai kanan. Tanpa peringatan. Pola paling umum untuk membaca input: $cari = $_GET[\"q\"] ?? \"\";",
 w:[null,"?? mencegah peringatan itu.","Nilai cadangan yang dicetak.","Kunci kota tidak ada."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini (PHP 8):",kode:"$user = null;\nvar_dump($user?->profil?->kota);",o:["NULL","Fatal error: Call to member on null","string(0) \"\"","bool(false)"],a:0,vr:"php",
 e:"Nullsafe operator ?-> berhenti dengan aman dan menghasilkan null kalau objek di kirinya null. Sama seperti ?. di JavaScript.",
 w:[null,"?-> mencegah error itu.","Hasilnya null, bukan teks kosong.","Hasilnya null, bukan false."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"$harga = [10000, 25000, 40000];\n$diskon = array_map(fn($h) => $h * 0.9, $harga);\n$mahal = array_filter($harga, fn($h) => $h > 20000);\necho implode(\",\", $diskon) . \" | \" . count($mahal);",o:["9000,22500,36000 | 2","9000,22500,36000 | 1","10000,25000,40000 | 2","Error"],a:0,vr:"php",
 e:"fn($x) => … adalah arrow function PHP 7.4+, otomatis membaca variabel di luar tanpa use. array_map mengubah setiap item, array_filter menyaring. Hati-hati: array_filter mempertahankan kunci aslinya (1 dan 2), pakai array_values() untuk mengurutkan ulang.",
 w:[null,"Ada dua harga di atas 20000.","array_map mengembalikan array baru yang sudah didiskon.","Arrow function sah sejak PHP 7.4."]},
{k:"modern",t:"mc",lv:3,q:"Apa yang dicetak?",kode:"declare(strict_types=1);\n\nfunction tambah(int $a, int $b): int {\n    return $a + $b;\n}\n\ntry {\n    echo tambah(\"5\", 1);\n} catch (TypeError $e) {\n    echo \"TypeError\";\n}",o:["TypeError","6","51","Warning lalu 6"],a:0,vr:"php",
 e:"Deklarasi tipe (int $a, : int) membuat fungsi menolak data yang salah. Tanpa strict_types, PHP masih mengubah \"5\" menjadi 5 diam-diam. Dengan declare(strict_types=1) di baris pertama file, teks ditolak dengan TypeError. Kebiasaan baik di proyek modern seperti Laravel.",
 w:[null,"strict_types melarang konversi diam-diam.","Angka tidak digabung sebagai teks.","Yang terjadi TypeError, bukan warning."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini (PHP 8.1+):",kode:"enum Status: string {\n    case Lunas = \"lunas\";\n    case Belum = \"belum\";\n\n    public function label(): string {\n        return $this === self::Lunas ? \"Sudah dibayar\" : \"Menunggu pembayaran\";\n    }\n}\n$s = Status::from(\"belum\");\necho $s->value . \" - \" . $s->label();",o:["belum - Menunggu pembayaran","Belum - Menunggu pembayaran","lunas - Sudah dibayar","Error"],a:0,vr:"php",
 e:"Backed enum menyimpan nilai (teks atau angka) yang cocok untuk disimpan di database. from(\"belum\") mengubah teks menjadi enum (tryFrom mengembalikan null kalau tidak ada). ->value adalah nilainya, ->name adalah nama case-nya (\"Belum\").",
 w:[null,"->value berisi \"belum\" huruf kecil.","from memilih case Belum.","Enum sah sejak PHP 8.1."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"$hash = password_hash(\"rahasia123\", PASSWORD_DEFAULT);\nvar_dump(password_verify(\"rahasia123\", $hash), password_verify(\"Rahasia123\", $hash));",o:["bool(true) bool(false)","bool(true) bool(true)","string(…) bool(false)","bool(false) bool(false)"],a:0,vr:"php",vx:"bool(true)\nbool(false)",
 e:"Password TIDAK PERNAH disimpan mentah atau dengan md5/sha1. password_hash membuat hash bcrypt/argon2 dengan salt acak (hasilnya beda tiap kali dijalankan), dan password_verify mencocokkan dengan aman. Huruf besar-kecil berpengaruh.",
 w:[null,"Huruf R kapital membuat password berbeda.","var_dump menampilkan hasil verify, bukan hash.","Password yang sama pasti cocok."]},
{k:"modern",t:"mc",lv:1,q:"Fungsi Composer di proyek PHP:",o:["Mengelola paket (dependency) dan autoload class, seperti npm di JavaScript","Mengompilasi PHP menjadi aplikasi","Server web pengganti Apache","Editor kode"],a:0,
 e:"composer require guzzlehttp/guzzle memasang paket ke folder vendor/ dan mencatatnya di composer.json. Di kode cukup require 'vendor/autoload.php'; sekali, lalu semua class bisa dipakai. Laravel dipasang dengan composer create-project laravel/laravel nama-proyek.",
 w:[null,"PHP tidak dikompilasi oleh Composer.","Itu tugas Apache/Nginx atau php -S.","Itu VS Code dan sejenisnya."]},
{k:"modern",t:"mc",lv:2,q:"Di file app/Models/Produk.php tertulis namespace App\\Models;. Cara memakainya di controller:",o:["use App\\Models\\Produk; lalu new Produk()","include \"Produk\";","import Produk from \"App/Models\";","require Produk;"],a:0,
 e:"namespace mengelompokkan class seperti folder, sehingga dua class bernama sama (misalnya App\\Models\\User dan Vendor\\Auth\\User) tidak bentrok. use memberi nama pendek. Autoload Composer (PSR-4) mencocokkan namespace dengan lokasi folder.",
 w:[null,"include butuh alamat file, dan autoload membuatnya tidak perlu.","Itu sintaks JavaScript.","require butuh alamat file."]},
{k:"modern",t:"mc",lv:2,q:"Membuat endpoint API sederhana yang mengirim data produk ke JavaScript. Baris yang benar:",o:["header(\"Content-Type: application/json\"); echo json_encode($produk);","echo $produk;","print_r($produk);","return $produk;"],a:0,
 e:"Pola dasar REST API di PHP murni:\n1. header(\"Content-Type: application/json\");\n2. Validasi input ($_GET / file_get_contents(\"php://input\") untuk body JSON).\n3. http_response_code(404); kalau data tidak ada.\n4. echo json_encode($data);",
 w:[null,"echo array mencetak teks 'Array'.","print_r untuk debugging, bukan JSON.","return di level file tidak mengirim respons."]},
{k:"modern",t:"is",lv:1,q:"Operator PHP untuk nilai cadangan bila kiri null atau tidak ada: $nama = $_POST[\"nama\"] ____ \"Tamu\";",a:["??"],
 e:"??= juga ada: $data[\"qty\"] ??= 1; mengisi hanya kalau belum ada."},
{k:"modern",t:"is",lv:2,q:"Fungsi untuk mengubah teks JSON menjadi array PHP: ____($teks, true)",a:["json_decode"],
 e:"json_encode untuk arah sebaliknya (PHP → JSON)."}
);

MATERI_PHP.push(
{k:"stringtgl",judul:"String, Tanggal & Regex di PHP",materi:`
<!--pemula--><h4>Untuk pemula: sebagian besar pekerjaan web adalah mengolah teks</h4>
<p>Nama pelanggan, alamat, nomor HP, tanggal pesanan, nomor faktur: hampir semua data yang masuk lewat form adalah teks. PHP punya ratusan fungsi teks bawaan. Bab ini memilih yang paling sering kamu pakai sehari-hari.</p>
<table class="mini-pivot"><tr><th>Kebutuhan</th><th>Fungsi</th></tr>
<tr><td>panjang teks</td><td><code>strlen</code>, <code>mb_strlen</code></td></tr>
<tr><td>huruf besar/kecil</td><td><code>strtoupper</code>, <code>strtolower</code>, <code>ucfirst</code>, <code>ucwords</code></td></tr>
<tr><td>potong / cari / ganti</td><td><code>substr</code>, <code>str_contains</code>, <code>strpos</code>, <code>str_replace</code></td></tr>
<tr><td>pecah / gabung</td><td><code>explode</code>, <code>implode</code></td></tr>
<tr><td>rapikan</td><td><code>trim</code>, <code>number_format</code>, <code>sprintf</code></td></tr>
<tr><td>tanggal</td><td><code>DateTime</code>, <code>date</code></td></tr>
<tr><td>pola</td><td><code>preg_match</code>, <code>preg_replace</code></td></tr></table><!--/pemula-->
<h4>1. Kutip ganda vs kutip tunggal</h4>
<pre><code>$nama = "Ani";
echo "Halo, $nama!";          // Halo, Ani!     (variabel diolah)
echo 'Halo, $nama!';          // Halo, $nama!   (apa adanya)
echo "Total: {$qty}pcs";      // kurung kurawal memberi batas nama variabel
echo "Baris1\nBaris2";        // \n hanya bekerja di kutip ganda</code></pre>
<h4>2. Fungsi teks sehari-hari</h4>
<pre><code>strlen("kopi");                       // 4  (byte!)
mb_strlen("café");                    // 4  (huruf) → pakai untuk teks beraksen/emoji
strtoupper("kopi");                   // KOPI
ucwords("kedai kopi senja");          // Kedai Kopi Senja
substr("Indonesia", 0, 4);            // Indo
substr("Indonesia", -3);              // sia
str_contains("kopi susu", "susu");    // true  (PHP 8)
str_starts_with("INV-001", "INV");    // true
strpos("kopi susu", "kopi");          // 0 → hati-hati, 0 dianggap salah di if!
str_replace("-", "", "0812-3456-789");// 08123456789
explode(",", "a,b,c");                // ["a", "b", "c"]
implode(", ", ["a", "b"]);            // "a, b"
trim("  Budi  ");                     // "Budi"
str_pad("7", 3, "0", STR_PAD_LEFT);   // "007"</code></pre>
<h4>3. Format angka dan uang</h4>
<pre><code>number_format(1234567.5, 0, ",", ".");   // 1.234.568 (format Indonesia)
number_format(0.125, 2, ",", ".");       // 0,13
sprintf("INV-%05d", 42);                 // INV-00042
sprintf("%.1f%%", 45.678);               // 45.7%</code></pre>
<h4>4. Tanggal dengan DateTime</h4>
<pre><code>date_default_timezone_set("Asia/Jakarta");     // WIB; atur sekali di awal aplikasi

$sekarang = new DateTime();
$pesan = new DateTime("2026-11-20 14:30");
$pesan-&gt;format("d/m/Y H:i");                   // 20/11/2026 14:30
$jatuhTempo = (clone $pesan)-&gt;modify("+30 days");
$sisa = $sekarang-&gt;diff($jatuhTempo)-&gt;days;      // selisih hari</code></pre>
<table class="mini-pivot"><tr><th>Kode</th><th>Arti</th><th>Contoh</th></tr>
<tr><td><code>d</code>, <code>j</code></td><td>tanggal (2 digit / tanpa nol)</td><td>05, 5</td></tr>
<tr><td><code>m</code>, <code>n</code></td><td>bulan (2 digit / tanpa nol)</td><td>01, 1</td></tr>
<tr><td><code>Y</code></td><td>tahun 4 digit</td><td>2026</td></tr>
<tr><td><code>H</code>:<code>i</code>:<code>s</code></td><td>jam 24 : menit : detik</td><td>14:30:00</td></tr>
<tr><td><code>Y-m-d H:i:s</code></td><td>format database (MySQL)</td><td>2026-11-20 14:30:00</td></tr></table>
<p>Nama hari dan bulan bawaan PHP berbahasa Inggris. Untuk bahasa Indonesia, buat array sendiri (<code>$bulan = [1 =&gt; "Januari", …]</code>) atau pakai <code>IntlDateFormatter</code>.</p>
<h4>5. Regex: preg_match dan preg_replace</h4>
<pre><code>preg_match('/^08\\d{8,11}$/', $hp);                 // 1 = cocok, 0 = tidak
preg_match('/INV-(\\d{4})-(\\d+)/', $teks, $m);      // $m[1] = tahun, $m[2] = nomor
preg_match_all('/\\d+/', "2 kopi, 15 roti", $m);    // $m[0] = ["2", "15"]
preg_replace('/\\s+/', ' ', $teks);                 // ringkas spasi berlebih
preg_replace('/[^0-9]/', '', "0812-3456 789");     // sisakan angka saja</code></pre>
<div class="catatan">Untuk validasi email, jangan menulis regex sendiri. PHP punya <code>filter_var($email, FILTER_VALIDATE_EMAIL)</code>. Untuk angka: <code>filter_var($x, FILTER_VALIDATE_INT)</code>. Dan apa pun hasil validasinya, saat menampilkan teks dari pengguna ke HTML tetap pakai <code>htmlspecialchars()</code> agar aman dari XSS.</div>
<div class="praktik"><b>Coba sendiri:</b> buat fungsi <code>rapikanHp($teks)</code> yang membuang semua selain angka, mengganti awalan 62 menjadi 0, lalu memvalidasi dengan regex. Buat juga <code>formatRupiah($n)</code> dan <code>tanggalIndo($tgl)</code> yang menghasilkan "20 November 2026".</div>
`},
{k:"modern",judul:"PHP Modern: Exception, JSON/API, match, Tipe & Composer",materi:`
<!--pemula--><h4>Untuk pemula: PHP sekarang bukan PHP zaman dulu</h4>
<p>PHP sering dicap "bahasa lama yang berantakan". Itu PHP 5 era 2010. PHP 8 punya tipe data ketat, enum, match, named argument, dan kinerja jauh lebih cepat. Laravel, framework PHP paling populer di lowongan Indonesia, memakai semua fitur ini.</p>
<table class="mini-pivot"><tr><th>Fitur</th><th>Versi</th><th>Contoh</th></tr>
<tr><td>null coalescing</td><td>7.0</td><td><code>$a ?? "cadangan"</code></td></tr>
<tr><td>arrow function</td><td>7.4</td><td><code>fn($x) =&gt; $x * 2</code></td></tr>
<tr><td><code>match</code>, nullsafe <code>?-&gt;</code>, named argument</td><td>8.0</td><td><code>match($k) { … }</code></td></tr>
<tr><td><code>enum</code>, <code>readonly</code></td><td>8.1</td><td><code>enum Status: string</code></td></tr></table><!--/pemula-->
<h4>1. Exception</h4>
<pre><code>class StokHabisException extends Exception {}

function kurangiStok(array &amp;$stok, string $barang, int $qty): void {
    if (($stok[$barang] ?? 0) &lt; $qty) {
        throw new StokHabisException("Stok $barang tidak cukup");
    }
    $stok[$barang] -= $qty;
}

try {
    kurangiStok($stok, "kopi", 5);
} catch (StokHabisException $e) {
    echo $e-&gt;getMessage();            // tampilkan ke pengguna
} catch (Throwable $e) {
    error_log($e);                     // catat bug, jangan tampilkan detailnya ke pengguna
    echo "Terjadi kesalahan";
} finally {
    // tutup koneksi, dll.
}</code></pre>
<h4>2. Tipe data ketat</h4>
<pre><code>declare(strict_types=1);                       // baris pertama file

function totalBelanja(array $item, float $pajak = 0.11): float {
    return array_sum(array_column($item, "subtotal")) * (1 + $pajak);
}
function cariUser(int $id): ?User { … }        // ?User = User atau null

class Produk {
    public function __construct(
        public readonly string $nama,          // constructor promotion + readonly
        public readonly int $harga,
    ) {}
}
$p = new Produk(nama: "Kopi", harga: 18000);   // named argument</code></pre>
<h4>3. match, ??, ?-&gt;, arrow function</h4>
<pre><code>$label = match (true) {                        // match(true) untuk rentang
    $nilai &gt;= 85 =&gt; "A",
    $nilai &gt;= 70 =&gt; "B",
    default      =&gt; "C",
};
$kota = $_GET["kota"] ?? "Semua";
$namaKota = $user?-&gt;alamat?-&gt;kota;
$diskon = array_map(fn($h) =&gt; $h * 0.9, $harga);          // ubah setiap item
$mahal  = array_filter($harga, fn($h) =&gt; $h &gt; 20000);      // saring (kunci asli dipertahankan)
$mahal  = array_values($mahal);                             // urutkan ulang kuncinya 0, 1, 2…</code></pre>
<h4>Enum (PHP 8.1)</h4>
<pre><code>enum Status: string {
    case Lunas = "lunas";
    case Belum = "belum";
}
$s = Status::from("belum");      // teks → enum (tryFrom mengembalikan null kalau tidak ada)
$s-&gt;value;                       // "belum"
$s-&gt;name;                        // "Belum"</code></pre>
<p>Dengan <code>declare(strict_types=1)</code>, memanggil <code>tambah("5", 1)</code> pada fungsi bertipe <code>int</code> langsung melempar <b>TypeError</b>, bukan diubah diam-diam menjadi angka.</p>
<h4>4. JSON dan API sederhana</h4>
<pre><code>// api/produk.php
header("Content-Type: application/json; charset=utf-8");

$id = filter_var($_GET["id"] ?? null, FILTER_VALIDATE_INT);
if ($id === false || $id === null) {
    http_response_code(400);
    echo json_encode(["error" =&gt; "id harus angka"]);
    exit;
}
$stmt = $pdo-&gt;prepare("SELECT id, nama, harga FROM produk WHERE id = ?");   // aman dari SQL injection
$stmt-&gt;execute([$id]);
$produk = $stmt-&gt;fetch(PDO::FETCH_ASSOC);
if (!$produk) {
    http_response_code(404);
    echo json_encode(["error" =&gt; "tidak ditemukan"]);
    exit;
}
echo json_encode($produk, JSON_UNESCAPED_UNICODE);

// membaca body JSON dari fetch(..., { method: "POST", body: JSON.stringify(data) })
$body = json_decode(file_get_contents("php://input"), true);</code></pre>
<table class="mini-pivot"><tr><th>Kode status</th><th>Arti</th></tr>
<tr><td>200 / 201</td><td>berhasil / data baru dibuat</td></tr>
<tr><td>400</td><td>permintaan salah (input tidak sah)</td></tr>
<tr><td>401 / 403</td><td>belum login / tidak berhak</td></tr>
<tr><td>404</td><td>data tidak ditemukan</td></tr>
<tr><td>500</td><td>kesalahan di server</td></tr></table>
<h4>5. Password yang aman</h4>
<pre><code>$hash = password_hash($_POST["password"], PASSWORD_DEFAULT);   // simpan $hash di database
if (password_verify($inputLogin, $hashDariDb)) {
    session_regenerate_id(true);       // cegah session fixation
    $_SESSION["user_id"] = $id;
}</code></pre>
<h4>6. Composer, namespace, dan autoload</h4>
<pre><code>composer init
composer require vlucas/phpdotenv      # baca rahasia dari file .env
composer dump-autoload</code></pre>
<pre><code>// composer.json (bagian autoload)
"autoload": { "psr-4": { "App\\\\": "src/" } }

// src/Layanan/Kasir.php
namespace App\\Layanan;
class Kasir { … }

// index.php
require __DIR__ . "/vendor/autoload.php";
use App\\Layanan\\Kasir;
$k = new Kasir();</code></pre>
<div class="catatan">Jangan commit folder <code>vendor/</code> dan file <code>.env</code>. Commit <code>composer.json</code> dan <code>composer.lock</code>, lalu orang lain cukup menjalankan <code>composer install</code>. Polanya sama persis dengan npm di JavaScript dan pip di Python.</div>
<div class="praktik"><b>Coba sendiri:</b> buat <code>api/stok.php</code> yang menerima <code>?barang=kopi</code>, memvalidasi input, mengembalikan JSON <code>{"barang":"kopi","stok":12}</code> atau 404, lalu panggil dari halaman HTML dengan <code>fetch</code> dan tampilkan hasilnya. Jalankan dengan <code>php -S localhost:8000</code>.</div>
`}
);
