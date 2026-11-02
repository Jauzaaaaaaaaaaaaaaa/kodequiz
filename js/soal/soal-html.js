// Bank Soal HTML — 50 soal
const SOAL_HTML = [
{t:"mc",lv:1,q:"HTML adalah singkatan dari…",o:["HyperText Markup Language","HighText Machine Language","HyperTool Multi Language","Home Text Markup Language"],a:0,e:"HTML = HyperText Markup Language, bahasa markah halaman web."},
{t:"mc",lv:1,q:"Tag untuk judul terbesar adalah…",o:["<h6>","<head>","<h1>","<heading>"],a:2,e:"<h1> adalah heading tingkat tertinggi; <h6> yang terkecil."},
{t:"mc",lv:1,q:"Tag untuk membuat paragraf:",o:["<par>","<p>","<text>","<pg>"],a:1,e:"<p> mendefinisikan paragraf."},
{t:"mc",lv:1,q:"Tag untuk membuat tautan (link):",o:["<link>","<a>","<href>","<url>"],a:1,e:"<a href=\"...\"> membuat hyperlink; <link> untuk memuat resource seperti CSS."},
{t:"mc",lv:1,q:"Atribut untuk alamat tujuan pada tag <a>:",o:["src","link","href","url"],a:2,e:"href (hypertext reference) berisi URL tujuan."},
{t:"mc",lv:1,q:"Tag untuk menampilkan gambar:",o:["<image>","<picture> saja","<img>","<pic>"],a:2,e:"<img src=\"...\" alt=\"...\"> menampilkan gambar."},
{t:"mc",lv:1,q:"Atribut wajib yang menunjukkan sumber gambar pada <img>:",o:["href","src","alt","source"],a:1,e:"src menentukan file gambar; alt untuk teks alternatif."},
{t:"mc",lv:1,q:"Tag untuk pindah baris (line break):",o:["<lb>","<break>","<br>","<newline>"],a:2,e:"<br> membuat baris baru dan tidak punya tag penutup."},
{t:"mc",lv:1,q:"Deklarasi yang benar di awal dokumen HTML5:",o:["<!DOCTYPE html>","<doctype html5>","<html5>","<!HTML>"],a:0,e:"<!DOCTYPE html> memberitahu browser bahwa dokumen adalah HTML5."},
{t:"mc",lv:1,q:"Konten yang tampil di tab browser ditulis di dalam tag…",o:["<meta>","<title>","<header>","<h1>"],a:1,e:"<title> di dalam <head> menentukan judul tab."},
{t:"mc",lv:1,q:"Tag untuk daftar bernomor (1, 2, 3):",o:["<ul>","<li>","<ol>","<dl>"],a:2,e:"<ol> = ordered list; <ul> = unordered (bullet)."},
{t:"mc",lv:1,q:"Setiap item dalam daftar ditulis dengan tag…",o:["<item>","<li>","<list>","<it>"],a:1,e:"<li> = list item, dipakai di dalam <ul> maupun <ol>."},
{t:"mc",lv:1,q:"Tag untuk teks tebal secara semantik (penting):",o:["<b> selalu","<strong>","<bold>","<em>"],a:1,e:"<strong> menandai teks penting; <b> hanya visual tanpa makna."},
{t:"mc",lv:1,q:"Bagian dokumen yang berisi konten yang terlihat pengguna:",o:["<head>","<body>","<main> saja","<html>"],a:1,e:"Semua konten tampak berada dalam <body>."},
{t:"mc",lv:1,q:"Cara menulis komentar di HTML:",o:["// komentar","# komentar","<!-- komentar -->","/* komentar */"],a:2,e:"Komentar HTML diapit <!-- dan -->."},
{t:"mc",lv:2,q:"Tag semantik untuk navigasi utama situs:",o:["<navigate>","<menu>","<nav>","<links>"],a:2,e:"<nav> menandai blok tautan navigasi."},
{t:"mc",lv:2,q:"Tag input yang benar untuk kolom kata sandi:",o:["<input type=\"pass\">","<input type=\"password\">","<password>","<input type=\"secret\">"],a:1,e:"type=\"password\" menyembunyikan karakter yang diketik."},
{t:"mc",lv:2,q:"Atribut alt pada <img> berguna untuk…",o:["mengganti ukuran","aksesibilitas & teks jika gambar gagal dimuat","animasi","memberi border"],a:1,e:"alt dibaca screen reader dan tampil saat gambar gagal dimuat."},
{t:"mc",lv:2,q:"Tag untuk membuat tabel:",o:["<tab>","<table>","<grid>","<tbl>"],a:1,e:"<table> dengan <tr> (baris), <td> (sel), <th> (header sel)."},
{t:"mc",lv:2,q:"<tr> pada tabel berarti…",o:["table row (baris)","table record","table right","top row"],a:0,e:"<tr> = table row, satu baris tabel."},
{t:"mc",lv:2,q:"Atribut untuk membuka link di tab baru:",o:["target=\"_blank\"","newtab=\"true\"","target=\"new\"","open=\"tab\""],a:0,e:"target=\"_blank\" membuka tautan di tab/jendela baru."},
{t:"mc",lv:2,q:"Tag untuk mengelompokkan input dalam formulir:",o:["<form>","<fieldform>","<inputgroup>","<group>"],a:0,e:"<form> membungkus elemen input dan menentukan action & method."},
{t:"mc",lv:2,q:"Elemen untuk pilihan dropdown:",o:["<dropdown>","<select> dengan <option>","<list>","<input type=\"drop\">"],a:1,e:"<select> berisi beberapa <option>."},
{t:"mc",lv:2,q:"Perbedaan elemen block dan inline:",o:["Tidak ada bedanya","Block memulai baris baru & selebar kontainer; inline mengikuti alur teks","Inline selalu lebih besar","Block hanya untuk teks"],a:1,e:"Contoh block: div, p, h1. Contoh inline: span, a, img."},
{t:"mc",lv:2,q:"Tag generik inline untuk membungkus sebagian teks:",o:["<div>","<span>","<wrap>","<sec>"],a:1,e:"<span> inline; <div> block."},
{t:"mc",lv:2,q:"Atribut id berbeda dengan class karena…",o:["id boleh dipakai berulang","id harus unik dalam satu halaman","class harus unik","tidak ada bedanya"],a:1,e:"id unik per halaman; class boleh dipakai banyak elemen."},
{t:"mc",lv:2,q:"Meta tag agar tampilan responsif di perangkat mobile:",o:["<meta charset>","<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","<meta responsive>","<meta mobile=\"true\">"],a:1,e:"Viewport meta membuat lebar halaman mengikuti lebar layar perangkat."},
{t:"mc",lv:2,q:"Tag untuk memutar video di HTML5:",o:["<media>","<video>","<movie>","<play>"],a:1,e:"<video controls src=\"...\"> memutar video tanpa plugin."},
{t:"mc",lv:2,q:"Atribut placeholder pada input berfungsi…",o:["nilai default terkirim","teks petunjuk samar sebelum diisi","validasi","label wajib"],a:1,e:"placeholder menampilkan contoh/petunjuk dan hilang saat mengetik."},
{t:"mc",lv:3,q:"Tag semantik yang paling tepat untuk konten utama halaman:",o:["<content>","<main>","<section> selalu","<body>"],a:1,e:"<main> menandai konten utama; hanya boleh satu per halaman."},
{t:"mc",lv:3,q:"Tag semantik untuk konten mandiri seperti postingan blog:",o:["<article>","<aside>","<div>","<post>"],a:0,e:"<article> untuk konten yang berdiri sendiri dan bisa didistribusikan ulang."},
{t:"mc",lv:3,q:"Perbedaan method GET dan POST pada form:",o:["Sama saja","GET menaruh data di URL, POST di body request","POST menaruh data di URL","GET lebih aman untuk password"],a:1,e:"GET terlihat di URL (cocok pencarian); POST untuk data sensitif/besar."},
{t:"mc",lv:3,q:"Atribut required pada input berarti…",o:["input dibaca saja","wajib diisi sebelum form dikirim","otomatis fokus","terenkripsi"],a:1,e:"required memaksa pengguna mengisi field sebelum submit."},
{t:"mc",lv:3,q:"Elemen <label> sebaiknya dihubungkan ke input lewat atribut…",o:["name","for (mengacu ke id input)","link","bind"],a:1,e:"<label for=\"email\"> terhubung ke <input id=\"email\"> — penting untuk aksesibilitas."},
{t:"mc",lv:3,q:"Tag untuk menampilkan potongan kode program:",o:["<code>","<script>","<program>","<kbd> selalu"],a:0,e:"<code> untuk kode; sering dibungkus <pre> agar format terjaga."},
{t:"mc",lv:3,q:"Storage HTML5 untuk menyimpan data di browser tanpa kedaluwarsa:",o:["cookies","sessionStorage","localStorage","cache"],a:2,e:"localStorage bertahan meski browser ditutup; sessionStorage hilang saat tab ditutup."},
{t:"mc",lv:3,q:"Atribut data-* digunakan untuk…",o:["database","menyimpan data kustom pada elemen","enkripsi","styling"],a:1,e:"data-* menyimpan informasi tambahan yang bisa dibaca JavaScript lewat dataset."},
{t:"mc",lv:3,q:"Elemen <iframe> berfungsi untuk…",o:["frame animasi","menyematkan halaman/dokumen lain di dalam halaman","membuat border","format internal"],a:1,e:"<iframe> menampilkan dokumen HTML lain, mis. video YouTube atau peta."},
{t:"mc",lv:3,q:"Posisi terbaik memuat <script> agar halaman tampil dulu:",o:["di awal <head> tanpa atribut","sebelum </body> atau memakai defer","di dalam <title>","di <meta>"],a:1,e:"Script di akhir body atau dengan defer tidak memblokir render HTML."},
{t:"mc",lv:3,q:"Input type email berbeda dari text karena…",o:["tampilan beda warna","browser memvalidasi format email otomatis","hanya huruf kecil","otomatis terkirim"],a:1,e:"type=\"email\" memberi validasi bawaan & keyboard khusus di mobile."},
{t:"is",lv:1,q:"Tag pembuka untuk seluruh dokumen web adalah <____>",a:["html"],e:"Semua konten dibungkus <html>…</html>."},
{t:"is",lv:1,q:"Bagian tak terlihat berisi <title> dan <meta> adalah tag <____>",a:["head"],e:"<head> berisi metadata dokumen."},
{t:"is",lv:1,q:"Tag daftar tak bernomor (bullet) adalah <____>",a:["ul"],e:"<ul> = unordered list."},
{t:"is",lv:2,q:"Tag untuk teks miring secara semantik (penekanan) adalah <____>",a:["em"],e:"<em> memberi penekanan; <i> hanya visual."},
{t:"is",lv:2,q:"Tag untuk garis horizontal pemisah adalah <____>",a:["hr"],e:"<hr> membuat garis horizontal (thematic break)."},
{t:"is",lv:2,q:"Tombol kirim form: <button type=\"____\">",a:["submit"],e:"type=\"submit\" mengirim form saat diklik."},
{t:"is",lv:2,q:"Tag semantik untuk bagian kaki halaman adalah <____>",a:["footer"],e:"<footer> berisi copyright, kontak, tautan bawah."},
{t:"is",lv:3,q:"Tag untuk memuat file JavaScript eksternal: <____ src=\"app.js\">",a:["script"],e:"<script src=\"...\"></script> memuat JS eksternal."},
{t:"is",lv:3,q:"Tag untuk menghubungkan file CSS eksternal: <____ rel=\"stylesheet\" href=\"style.css\">",a:["link"],e:"<link rel=\"stylesheet\"> memuat CSS eksternal di <head>."},
{t:"is",lv:3,q:"Atribut pada <img> untuk teks alternatif adalah ____",a:["alt"],e:"alt penting untuk aksesibilitas dan SEO."}
];

// ---- Pemetaan bab untuk soal HTML + materi ----
const HTML_BAB_IDX = {
  struktur: [0,8,9,13,14,40,41],
  teks:     [1,2,7,10,11,12,18,19,42,43,44],
  media:    [3,4,5,6,17,20,27,37,49],
  form:     [16,21,22,28,31,32,33,39,45],
  semantik: [15,23,24,25,26,29,30,34,35,36,38,46,47,48],
};
SOAL_HTML.forEach((s, i) => {
  for (const [k, arr] of Object.entries(HTML_BAB_IDX)) {
    if (arr.includes(i)) { s.k = k; break; }
  }
});

const MATERI_HTML = [
{k:"struktur",judul:"Struktur Dasar Dokumen HTML",materi:`<p>Setiap halaman web punya kerangka yang sama:</p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Judul di tab browser&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- semua konten yang terlihat di sini --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre><p><code>&lt;head&gt;</code> berisi metadata (tak terlihat); <code>&lt;body&gt;</code> berisi konten. Komentar ditulis <code>&lt;!-- … --&gt;</code>.</p>`},
{k:"teks",judul:"Teks, Heading & Daftar",materi:`<p>Heading bertingkat <code>&lt;h1&gt;</code> (terbesar) sampai <code>&lt;h6&gt;</code>; paragraf memakai <code>&lt;p&gt;</code>; pindah baris <code>&lt;br&gt;</code>; garis pemisah <code>&lt;hr&gt;</code>.</p><pre><code>&lt;strong&gt;penting (tebal)&lt;/strong&gt;
&lt;em&gt;penekanan (miring)&lt;/em&gt;

&lt;ul&gt;&lt;li&gt;bullet&lt;/li&gt;&lt;/ul&gt;
&lt;ol&gt;&lt;li&gt;bernomor&lt;/li&gt;&lt;/ol&gt;</code></pre><p>Gunakan <code>&lt;strong&gt;/&lt;em&gt;</code> (bermakna) ketimbang <code>&lt;b&gt;/&lt;i&gt;</code> (hanya visual). Tabel: <code>&lt;table&gt;</code> berisi baris <code>&lt;tr&gt;</code>, sel <code>&lt;td&gt;</code>, dan header sel <code>&lt;th&gt;</code>.</p>`},
{k:"media",judul:"Link, Gambar & Media",materi:`<pre><code>&lt;a href="halaman2.html" target="_blank"&gt;Buka&lt;/a&gt;
&lt;img src="foto.jpg" alt="deskripsi gambar"&gt;
&lt;video src="v.mp4" controls&gt;&lt;/video&gt;
&lt;iframe src="https://..."&gt;&lt;/iframe&gt;</code></pre><p><code>href</code> = tujuan link (inilah cara menghubungkan antar page!); <code>target="_blank"</code> membuka tab baru. <code>alt</code> pada gambar wajib untuk aksesibilitas & tampil saat gambar gagal dimuat.</p>`},
{k:"form",judul:"Form & Input",materi:`<p>Form mengumpulkan data pengguna:</p><pre><code>&lt;form action="/kirim" method="post"&gt;
  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input type="email" id="email" placeholder="kamu@mail.com" required&gt;
  &lt;input type="password"&gt;
  &lt;select&gt;&lt;option&gt;Pilihan&lt;/option&gt;&lt;/select&gt;
  &lt;button type="submit"&gt;Kirim&lt;/button&gt;
&lt;/form&gt;</code></pre><p><code>method="get"</code> menaruh data di URL; <code>post</code> di body (untuk data sensitif). <code>required</code> = wajib diisi; <code>label for</code> terhubung ke <code>id</code> input.</p>`},
{k:"semantik",judul:"Semantik & Lanjutan",materi:`<p>Tag semantik memberi MAKNA pada struktur — bagus untuk SEO & aksesibilitas: <code>&lt;header&gt; &lt;nav&gt; &lt;main&gt; &lt;article&gt; &lt;footer&gt;</code>. Hanya boleh satu <code>&lt;main&gt;</code> per halaman.</p><p>Konsep penting: elemen <b>block</b> (div, p) vs <b>inline</b> (span, a); <code>id</code> harus unik, <code>class</code> boleh berulang; <code>data-*</code> menyimpan data kustom untuk JS.</p><pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;script src="app.js" defer&gt;&lt;/script&gt;</code></pre><p>Script terbaik diberi <code>defer</code> atau ditaruh sebelum <code>&lt;/body&gt;</code> agar halaman tampil dulu.</p>`},
];
