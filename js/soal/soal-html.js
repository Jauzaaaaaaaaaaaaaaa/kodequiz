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
{k:"struktur",judul:"Struktur Dasar Dokumen HTML",materi:`
<h4>Sebelum mulai: HTML itu apa?</h4>
<p>Setiap halaman web yang kamu buka (Google, Shopee, situs ini) sebenarnya hanyalah <b>file teks biasa</b>. Browser seperti Chrome membaca teks itu, lalu "menggambarnya" jadi tampilan yang rapi. Bahasa yang dipakai di dalam file itu namanya <b>HTML</b>, singkatan dari <i>HyperText Markup Language</i>.</p>
<p>Kata kuncinya <i>markup</i>, artinya "menandai". Bayangkan kamu punya kertas berisi tulisan, lalu kamu tempel label kecil: "ini judul", "ini paragraf", "ini gambar". HTML adalah label-label itu. HTML <b>bukan</b> bahasa pemrograman yang bisa menghitung atau mengambil keputusan; tugasnya hanya memberi tahu browser <i>apa</i> isi halaman.</p>
<h4>Kenalan dengan "tag"</h4>
<p>Label di HTML disebut <b>tag</b>. Tag ditulis di antara tanda kurung siku <code>&lt;</code> dan <code>&gt;</code>. Kebanyakan tag berpasangan:</p>
<pre><code>&lt;p&gt;Halo, nama saya Rina.&lt;/p&gt;</code></pre>
<ul><li><code>&lt;p&gt;</code> = <b>tag pembuka</b>. Huruf <code>p</code> singkatan dari <i>paragraph</i> (paragraf).</li><li><code>Halo, nama saya Rina.</code> = <b>isi</b>, teks yang tampil di layar.</li><li><code>&lt;/p&gt;</code> = <b>tag penutup</b>. Bedanya hanya ada garis miring <code>/</code> di depan.</li></ul>
<p>Satu paket utuh (pembuka + isi + penutup) disebut <b>elemen</b>. Jadi kalimat "elemen p" artinya "paragraf itu lengkap dengan isinya".</p>
<h4>Kerangka yang selalu sama</h4>
<p>Setiap halaman HTML punya kerangka yang hampir sama. Hafalkan ini sekali, pakai selamanya:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Judul di tab browser&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- semua konten yang terlihat di sini --&gt;
    &lt;p&gt;Halo dunia!&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Penjelasan baris demi baris:</p>
<ol><li><code>&lt;!DOCTYPE html&gt;</code>: "kartu identitas" file. Memberi tahu browser bahwa ini HTML versi modern (HTML5). Selalu ditaruh paling atas dan tidak punya penutup.</li><li><code>&lt;html&gt;</code> … <code>&lt;/html&gt;</code>: bungkus terluar. Semua isi halaman ada di dalamnya.</li><li><code>&lt;head&gt;</code> … <code>&lt;/head&gt;</code>: bagian <b>kepala</b> yang <i>tidak terlihat</i> di halaman. Isinya informasi tentang halaman (disebut <b>metadata</b>, artinya "data tentang data"), misalnya judul tab, jenis huruf, atau deskripsi untuk Google.</li><li><code>&lt;title&gt;</code>: teks yang muncul di <b>tab browser</b>, bukan di halaman. Lihat tab di atas layarmu, tulisan "KodeQuiz" di sana berasal dari <code>&lt;title&gt;</code>.</li><li><code>&lt;body&gt;</code> … <code>&lt;/body&gt;</code>: bagian <b>badan</b>. Semua yang terlihat (teks, gambar, tombol) ditulis di sini.</li><li><code>&lt;!-- … --&gt;</code>: <b>komentar</b>, catatan untuk dirimu sendiri. Browser mengabaikannya, jadi tidak tampil di layar.</li></ol>
<div class="catatan">Cara mengingat: <b>head</b> seperti isi kepala (pikiran, tidak terlihat orang), <b>body</b> seperti badan (yang dilihat orang).</div>
<h4>Kenapa ada spasi menjorok?</h4>
<p>Baris di dalam <code>&lt;head&gt;</code> dan <code>&lt;body&gt;</code> ditulis agak ke kanan. Itu disebut <b>indentasi</b>. Browser tidak peduli, tapi manusia jadi mudah melihat "siapa ada di dalam siapa", seperti kardus di dalam kardus.</p>
<h4>Kesalahan yang sering terjadi</h4>
<ul><li>Lupa tag penutup, misalnya <code>&lt;p&gt;Halo</code> tanpa <code>&lt;/p&gt;</code>. Kadang masih tampil, tapi bisa merusak bagian setelahnya.</li><li>Menaruh konten di <code>&lt;head&gt;</code>. Teks di sana tidak akan tampil di halaman.</li><li>Mengira <code>&lt;title&gt;</code> adalah judul besar di halaman. Judul besar di halaman memakai <code>&lt;h1&gt;</code> (dibahas di bab berikutnya).</li></ul>
<div class="praktik"><b>Coba sendiri (5 menit):</b> buka Notepad, salin kerangka di atas, simpan dengan nama <code>latihan.html</code> (pilih "All files", bukan .txt). Klik dua kali file itu, halamannya terbuka di Chrome. Ganti isi <code>&lt;title&gt;</code> dan <code>&lt;p&gt;</code>, simpan, lalu tekan F5 di browser untuk melihat perubahannya.</div>
`},
{k:"teks",judul:"Teks, Heading & Daftar",materi:`
<h4>Teks adalah isi utama halaman web</h4>
<p>Bayangkan kamu menulis artikel di Word: ada judul besar, subjudul, paragraf, daftar belanja, dan tabel. HTML punya tag untuk setiap bagian itu. Bedanya, di Word kamu klik tombol; di HTML kamu menuliskan tag-nya.</p>
<h4>Judul: h1 sampai h6</h4>
<p>Huruf <code>h</code> singkatan dari <i>heading</i> (judul). Angkanya menunjukkan tingkat kepentingan:</p>
<pre><code>&lt;h1&gt;Resep Nasi Goreng&lt;/h1&gt;
&lt;h2&gt;Bahan-bahan&lt;/h2&gt;
&lt;h3&gt;Bumbu halus&lt;/h3&gt;</code></pre>
<ul><li><code>&lt;h1&gt;</code> = judul paling besar dan paling penting. Biasanya <b>cukup satu</b> per halaman, seperti judul buku.</li><li><code>&lt;h2&gt;</code> = judul bab, <code>&lt;h3&gt;</code> = sub-bab, dan seterusnya sampai <code>&lt;h6&gt;</code> (paling kecil).</li><li>Pilih tingkat berdasarkan <b>susunan isi</b>, bukan karena ingin huruf besar atau kecil. Ukuran huruf bisa diatur nanti dengan CSS.</li></ul>
<h4>Paragraf, pindah baris, dan garis</h4>
<pre><code>&lt;p&gt;Ini paragraf pertama.&lt;/p&gt;
&lt;p&gt;Ini paragraf kedua.&lt;br&gt;Ini baris baru di paragraf yang sama.&lt;/p&gt;
&lt;hr&gt;</code></pre>
<ul><li><code>&lt;p&gt;</code> (<i>paragraph</i>) = satu paragraf. Browser otomatis memberi jarak antarparagraf.</li><li><code>&lt;br&gt;</code> (<i>break</i>) = pindah ke baris baru, seperti menekan Enter. Tag ini <b>tidak punya penutup</b>, karena tidak membungkus isi apa pun.</li><li><code>&lt;hr&gt;</code> (<i>horizontal rule</i>) = garis mendatar pemisah topik. Juga tanpa penutup.</li></ul>
<div class="catatan">Menekan Enter berkali-kali di file HTML <b>tidak</b> membuat baris baru di layar. Browser menganggap banyak spasi dan Enter sebagai satu spasi saja. Untuk pindah baris, pakai <code>&lt;p&gt;</code> baru atau <code>&lt;br&gt;</code>.</div>
<h4>Teks tebal dan miring yang "bermakna"</h4>
<pre><code>&lt;strong&gt;Jangan lupa matikan kompor!&lt;/strong&gt;
&lt;em&gt;benar-benar&lt;/em&gt; enak</code></pre>
<ul><li><code>&lt;strong&gt;</code> = teks <b>penting</b>. Browser menampilkannya tebal.</li><li><code>&lt;em&gt;</code> (<i>emphasis</i>, penekanan) = kata yang diberi tekanan saat dibaca. Tampil miring.</li><li>Ada juga <code>&lt;b&gt;</code> (<i>bold</i>) dan <code>&lt;i&gt;</code> (<i>italic</i>) yang tampilannya sama, tapi <b>hanya gaya visual tanpa makna</b>. Pembaca layar (aplikasi yang membacakan halaman untuk tunanetra) mengubah nada suara pada <code>&lt;strong&gt;</code>/<code>&lt;em&gt;</code>, tidak pada <code>&lt;b&gt;</code>/<code>&lt;i&gt;</code>. Karena itu <code>&lt;strong&gt;</code> dan <code>&lt;em&gt;</code> lebih disarankan.</li></ul>
<h4>Daftar: bernomor dan berpoin</h4>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Bawang merah&lt;/li&gt;
  &lt;li&gt;Bawang putih&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;Panaskan minyak&lt;/li&gt;
  &lt;li&gt;Tumis bumbu&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<ul><li><code>&lt;ul&gt;</code> (<i>unordered list</i>) = daftar <b>tanpa urutan</b>, tampil dengan titik (bullet). Cocok untuk daftar bahan.</li><li><code>&lt;ol&gt;</code> (<i>ordered list</i>) = daftar <b>berurutan</b>, tampil dengan nomor 1, 2, 3. Cocok untuk langkah-langkah.</li><li><code>&lt;li&gt;</code> (<i>list item</i>) = satu butir di dalam daftar. Dipakai di dalam <code>&lt;ul&gt;</code> maupun <code>&lt;ol&gt;</code>.</li></ul>
<h4>Tabel</h4>
<pre><code>&lt;table&gt;
  &lt;tr&gt;&lt;th&gt;Nama&lt;/th&gt;&lt;th&gt;Nilai&lt;/th&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Rina&lt;/td&gt;&lt;td&gt;90&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Budi&lt;/td&gt;&lt;td&gt;85&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</code></pre>
<table class="mini-pivot"><tr><th>Tag</th><th>Singkatan dari</th><th>Artinya</th></tr>
<tr><td><code>&lt;table&gt;</code></td><td>table</td><td>pembungkus seluruh tabel</td></tr>
<tr><td><code>&lt;tr&gt;</code></td><td>table row</td><td>satu <b>baris</b></td></tr>
<tr><td><code>&lt;th&gt;</code></td><td>table header</td><td>sel <b>judul kolom</b> (tampil tebal)</td></tr>
<tr><td><code>&lt;td&gt;</code></td><td>table data</td><td>sel <b>isi</b> biasa</td></tr></table>
<p>Cara membacanya: tabel terdiri dari baris (<code>tr</code>), dan setiap baris terdiri dari sel (<code>th</code> atau <code>td</code>).</p>
<div class="praktik"><b>Coba sendiri:</b> di file latihanmu, buat <code>&lt;h1&gt;</code> berisi namamu, <code>&lt;ol&gt;</code> berisi 3 kegiatan pagimu, dan tabel 2 kolom berisi jadwal kuliah. Simpan, lalu muat ulang browser.</div>
`},
{k:"media",judul:"Link, Gambar & Media",materi:`
<h4>Bagian ini membuat halaman jadi hidup</h4>
<p>Halaman yang isinya hanya teks terasa seperti dokumen ketikan. Di bab ini kamu belajar menambahkan tiga hal yang membuat web terasa "web": <b>link</b> (tautan yang bisa diklik), <b>gambar</b>, dan <b>video</b>.</p>
<p>Sebelum mulai, kenalan dulu dengan satu istilah penting: <b>atribut</b>.</p>
<h4>Atribut = keterangan tambahan pada tag</h4>
<p>Tag memberi tahu browser <i>apa</i> sesuatu itu. <b>Atribut</b> memberi <i>keterangan tambahan</i>. Atribut ditulis di dalam tag pembuka, dengan pola <code>nama="nilai"</code>:</p>
<pre><code>&lt;a href="kontak.html"&gt;Hubungi kami&lt;/a&gt;</code></pre>
<p>Di sini <code>a</code> adalah tag-nya, <code>href</code> adalah nama atribut, dan <code>"kontak.html"</code> adalah nilainya. Ibarat memesan kopi: "kopi" adalah tag-nya, "gula sedikit" dan "es" adalah atributnya.</p>
<h4>Link: tag a</h4>
<pre><code>&lt;a href="halaman2.html"&gt;Ke halaman 2&lt;/a&gt;
&lt;a href="https://www.google.com" target="_blank"&gt;Buka Google&lt;/a&gt;</code></pre>
<ul><li><code>&lt;a&gt;</code> singkatan dari <i>anchor</i> (jangkar). Inilah tag untuk membuat <b>tautan</b> yang bisa diklik.</li><li><code>href</code> singkatan dari <i>hypertext reference</i>, artinya <b>alamat tujuan</b>. Bisa berupa file lain di situsmu (<code>halaman2.html</code>) atau alamat situs lain lengkap dengan <code>https://</code>.</li><li>Teks di antara <code>&lt;a&gt;</code> dan <code>&lt;/a&gt;</code> adalah tulisan yang terlihat dan diklik pengunjung.</li><li><code>target="_blank"</code> membuat link terbuka di <b>tab baru</b>. Tanpa atribut ini, link membuka di tab yang sama.</li></ul>
<div class="catatan">Inilah cara menghubungkan banyak halaman jadi satu situs. Halaman beranda punya link ke halaman "Tentang", halaman "Tentang" punya link balik ke beranda, dan seterusnya.</div>
<h4>Gambar: tag img</h4>
<pre><code>&lt;img src="foto-kucing.jpg" alt="Kucing oranye tidur di atas sofa"&gt;</code></pre>
<ul><li><code>&lt;img&gt;</code> singkatan dari <i>image</i>, artinya <b>gambar</b>. Tag ini menaruh sebuah gambar di halaman.</li><li><code>&lt;img&gt;</code> <b>tidak punya tag penutup</b>. Wajar, karena gambar tidak membungkus teks apa pun; ia hanya "ditempel".</li><li><code>src</code> singkatan dari <i>source</i> (sumber), artinya <b>lokasi file gambarnya</b>. Kalau file <code>foto-kucing.jpg</code> ada di folder yang sama dengan file HTML-mu, cukup tulis namanya. Bisa juga alamat gambar di internet.</li><li><code>alt</code> singkatan dari <i>alternative text</i> (teks pengganti), yaitu <b>deskripsi gambar dalam kata-kata</b>.</li></ul>
<p>Kenapa <code>alt</code> penting?</p>
<ol><li>Kalau gambar gagal dimuat (internet lambat atau nama file salah), tulisan <code>alt</code> yang tampil sebagai gantinya.</li><li>Orang tunanetra memakai <b>pembaca layar</b>, aplikasi yang membacakan isi halaman. Aplikasi itu tidak bisa "melihat" gambar, jadi ia membacakan isi <code>alt</code>.</li><li>Google juga membaca <code>alt</code> untuk memahami isi gambar.</li></ol>
<p>Tulis <code>alt</code> seperti kamu menjelaskan gambar lewat telepon: "Grafik penjualan naik dari Januari ke Juni", bukan sekadar "gambar1".</p>
<div class="catatan">Kalau gambar tidak muncul, periksa dulu <code>src</code>: apakah nama file dan huruf besar/kecilnya sama persis? <code>Foto.JPG</code> dan <code>foto.jpg</code> bisa dianggap berbeda di server.</div>
<h4>Video: tag video</h4>
<pre><code>&lt;video src="tutorial.mp4" controls&gt;&lt;/video&gt;</code></pre>
<ul><li><code>&lt;video&gt;</code> memutar file video langsung di halaman, tanpa aplikasi tambahan.</li><li><code>src</code> sama seperti di gambar: lokasi file videonya.</li><li><code>controls</code> menampilkan tombol putar, jeda, dan volume. Atribut ini tidak butuh nilai; cukup ditulis namanya. Tanpa <code>controls</code>, pengunjung tidak punya tombol untuk memutar video.</li></ul>
<h4>Halaman di dalam halaman: tag iframe</h4>
<pre><code>&lt;iframe src="https://www.youtube.com/embed/xxxx"&gt;&lt;/iframe&gt;</code></pre>
<p><code>&lt;iframe&gt;</code> (<i>inline frame</i>) seperti <b>jendela kecil</b> di halamanmu yang menampilkan halaman lain. Contoh paling umum: video YouTube atau peta Google Maps yang ditempel di situs. Kode iframe biasanya kamu dapat dari tombol "Bagikan → Sematkan" di YouTube atau Maps.</p>
<h4>Ringkasan istilah</h4>
<table class="mini-pivot"><tr><th>Tulisan</th><th>Kepanjangan</th><th>Artinya</th></tr>
<tr><td><code>a</code></td><td>anchor</td><td>membuat link</td></tr>
<tr><td><code>href</code></td><td>hypertext reference</td><td>alamat tujuan link</td></tr>
<tr><td><code>target="_blank"</code></td><td>–</td><td>buka link di tab baru</td></tr>
<tr><td><code>img</code></td><td>image</td><td>menaruh gambar</td></tr>
<tr><td><code>src</code></td><td>source</td><td>lokasi file gambar/video</td></tr>
<tr><td><code>alt</code></td><td>alternative text</td><td>deskripsi gambar dalam kata</td></tr>
<tr><td><code>video</code></td><td>–</td><td>memutar video</td></tr>
<tr><td><code>controls</code></td><td>–</td><td>menampilkan tombol putar</td></tr>
<tr><td><code>iframe</code></td><td>inline frame</td><td>menempel halaman lain (YouTube, Maps)</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> taruh satu foto di folder yang sama dengan <code>latihan.html</code>, lalu tampilkan dengan <code>&lt;img&gt;</code>. Sengaja salah ketik nama file di <code>src</code> dan lihat bagaimana teks <code>alt</code> muncul. Tambahkan juga link ke <code>https://www.google.com</code> yang terbuka di tab baru.</div>
`},
{k:"form",judul:"Form & Input",materi:`
<h4>Form = cara halaman menerima data dari pengunjung</h4>
<p>Setiap kali kamu login, mendaftar akun, atau mengisi kolom pencarian, kamu sedang memakai <b>form</b> (formulir). Form adalah kumpulan kolom isian plus tombol kirim. HTML membuat tampilannya; data yang dikirim nanti diolah oleh program di server (misalnya PHP).</p>
<h4>Contoh form lengkap</h4>
<pre><code>&lt;form action="/daftar" method="post"&gt;
  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input type="email" id="email" placeholder="kamu@mail.com" required&gt;

  &lt;label for="sandi"&gt;Kata sandi&lt;/label&gt;
  &lt;input type="password" id="sandi"&gt;

  &lt;label for="kota"&gt;Kota&lt;/label&gt;
  &lt;select id="kota"&gt;
    &lt;option&gt;Jakarta&lt;/option&gt;
    &lt;option&gt;Bandung&lt;/option&gt;
  &lt;/select&gt;

  &lt;button type="submit"&gt;Daftar&lt;/button&gt;
&lt;/form&gt;</code></pre>
<p>Mari kita bedah satu per satu.</p>
<h4>Tag form: pembungkusnya</h4>
<ul><li><code>&lt;form&gt;</code> membungkus semua kolom isian yang datanya dikirim bersama.</li><li><code>action="/daftar"</code> = <b>ke mana</b> data dikirim setelah tombol diklik (alamat program penerima).</li><li><code>method</code> = <b>cara</b> mengirim data. Ada dua yang umum:</li></ul>
<table class="mini-pivot"><tr><th>method</th><th>Data ditaruh di mana</th><th>Cocok untuk</th></tr>
<tr><td><code>get</code></td><td>ditempel di alamat (URL), misalnya <code>?cari=sepatu</code></td><td>pencarian, filter; aman dibagikan sebagai link</td></tr>
<tr><td><code>post</code></td><td>di dalam "badan" kiriman, tidak terlihat di URL</td><td>login, pendaftaran, data pribadi, file</td></tr></table>
<div class="catatan">Bayangkan <b>GET</b> seperti kartu pos: tulisannya terlihat siapa saja. <b>POST</b> seperti surat dalam amplop. Password jangan pernah dikirim lewat GET, karena akan tercatat di riwayat browser.</div>
<h4>Tag input: kolom isian</h4>
<p><code>&lt;input&gt;</code> adalah kolom tempat pengunjung mengetik. Seperti <code>&lt;img&gt;</code>, ia <b>tidak punya penutup</b>. Jenis kolomnya ditentukan oleh atribut <code>type</code>:</p>
<table class="mini-pivot"><tr><th>type</th><th>Hasilnya</th></tr>
<tr><td><code>text</code></td><td>kolom teks biasa</td></tr>
<tr><td><code>email</code></td><td>kolom email; browser otomatis menolak isian tanpa <code>@</code>, dan di HP muncul keyboard dengan tombol <code>@</code></td></tr>
<tr><td><code>password</code></td><td>yang diketik tampil sebagai titik-titik ●●●</td></tr>
<tr><td><code>number</code></td><td>hanya menerima angka</td></tr>
<tr><td><code>checkbox</code></td><td>kotak centang</td></tr></table>
<p>Atribut lain yang sering dipakai:</p>
<ul><li><code>placeholder="kamu@mail.com"</code> = <b>teks contoh samar</b> di dalam kolom. Hilang begitu pengunjung mulai mengetik, dan tidak ikut terkirim.</li><li><code>required</code> = kolom <b>wajib diisi</b>. Kalau kosong, browser menolak mengirim form dan menampilkan peringatan.</li><li><code>id="email"</code> = nama unik kolom itu, dipakai untuk menghubungkannya dengan label.</li></ul>
<h4>Tag label: tulisan keterangan kolom</h4>
<pre><code>&lt;label for="email"&gt;Email&lt;/label&gt;
&lt;input type="email" id="email"&gt;</code></pre>
<p><code>&lt;label&gt;</code> adalah tulisan seperti "Email" di samping kolom. Atribut <code>for</code> harus <b>sama persis</b> dengan <code>id</code> input-nya. Dengan begitu keduanya terhubung, dan ada dua keuntungan:</p>
<ol><li>Mengklik tulisan "Email" langsung menaruh kursor di kolomnya (memudahkan di HP).</li><li>Pembaca layar tahu kolom itu untuk apa, lalu membacakan "Email, kolom isian".</li></ol>
<h4>Pilihan dropdown: select dan option</h4>
<p><code>&lt;select&gt;</code> membuat kotak pilihan yang bisa dibuka ke bawah (dropdown). Setiap pilihannya ditulis dengan <code>&lt;option&gt;</code>.</p>
<h4>Tombol kirim</h4>
<p><code>&lt;button type="submit"&gt;Daftar&lt;/button&gt;</code> = tombol yang <b>mengirim form</b> saat diklik. <code>submit</code> artinya "serahkan/kirim".</p>
<h4>Kesalahan yang sering terjadi</h4>
<ul><li><code>for</code> pada label tidak sama dengan <code>id</code> input, sehingga keduanya tidak terhubung.</li><li>Mengira <code>placeholder</code> sama dengan label. Placeholder hilang saat mengetik, jadi pengunjung bisa lupa kolom itu untuk apa. Tetap pakai <code>&lt;label&gt;</code>.</li><li>Memakai <code>method="get"</code> untuk password.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat form berisi kolom nama (wajib diisi), email, dan tombol Kirim. Klik Kirim saat kolom nama kosong dan perhatikan pesan dari browser. Lalu isi email tanpa <code>@</code> dan lihat apa yang terjadi.</div>
`},
{k:"semantik",judul:"Semantik & Lanjutan",materi:`
<h4>"Semantik" artinya bermakna</h4>
<p>Kata <i>semantik</i> berarti "berkaitan dengan makna". <b>Tag semantik</b> adalah tag yang namanya langsung menjelaskan isi bagian itu. Bandingkan:</p>
<pre><code>&lt;div&gt;…menu…&lt;/div&gt;          ← "kotak", tidak jelas isinya apa
&lt;nav&gt;…menu…&lt;/nav&gt;          ← jelas: ini navigasi</code></pre>
<p>Untuk mata manusia tampilannya bisa sama persis. Bedanya, browser, Google, dan pembaca layar jadi <b>paham</b> struktur halamanmu. Google lebih mudah menilai isi halaman (ini bagian dari <b>SEO</b>, <i>Search Engine Optimization</i>, usaha agar situs mudah ditemukan di Google), dan tunanetra bisa langsung melompat ke menu atau ke isi utama.</p>
<h4>Denah halaman dengan tag semantik</h4>
<pre><code>&lt;header&gt;  logo dan judul situs  &lt;/header&gt;
&lt;nav&gt;     menu: Beranda | Tentang | Kontak  &lt;/nav&gt;
&lt;main&gt;
  &lt;article&gt;  satu postingan blog utuh  &lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;  hak cipta, alamat, kontak  &lt;/footer&gt;</code></pre>
<table class="mini-pivot"><tr><th>Tag</th><th>Artinya</th><th>Contoh isi</th></tr>
<tr><td><code>&lt;header&gt;</code></td><td>kepala halaman/bagian</td><td>logo, judul situs</td></tr>
<tr><td><code>&lt;nav&gt;</code></td><td>navigation</td><td>menu tautan utama</td></tr>
<tr><td><code>&lt;main&gt;</code></td><td>isi utama</td><td>konten inti halaman; <b>hanya boleh satu</b> per halaman</td></tr>
<tr><td><code>&lt;article&gt;</code></td><td>artikel</td><td>konten yang bisa berdiri sendiri: postingan blog, berita</td></tr>
<tr><td><code>&lt;footer&gt;</code></td><td>kaki halaman</td><td>hak cipta, kontak, tautan bawah</td></tr></table>
<p>Bayangkan sebuah rumah: header itu teras, nav itu papan petunjuk ruangan, main itu ruang tamu, footer itu halaman belakang.</p>
<h4>Kotak serbaguna: div dan span</h4>
<p>Kalau tidak ada tag semantik yang cocok, pakai pembungkus umum:</p>
<ul><li><code>&lt;div&gt;</code> (<i>division</i>, bagian) = kotak <b>block</b>.</li><li><code>&lt;span&gt;</code> = pembungkus <b>inline</b>, untuk sebagian kecil teks.</li></ul>
<p>Apa bedanya block dan inline?</p>
<ul><li>Elemen <b>block</b> selalu mulai di <b>baris baru</b> dan memakan <b>seluruh lebar</b> wadahnya, seperti paragraf. Contoh: <code>div</code>, <code>p</code>, <code>h1</code>, <code>ul</code>.</li><li>Elemen <b>inline</b> <b>mengalir di dalam baris</b> teks, lebarnya secukup isinya, seperti satu kata yang distabilo. Contoh: <code>span</code>, <code>a</code>, <code>strong</code>, <code>img</code>.</li></ul>
<pre><code>&lt;p&gt;Harga &lt;span&gt;Rp50.000&lt;/span&gt; sudah termasuk ongkir.&lt;/p&gt;</code></pre>
<h4>id dan class: memberi nama pada elemen</h4>
<pre><code>&lt;div id="keranjang" class="kotak bayangan"&gt;…&lt;/div&gt;</code></pre>
<ul><li><code>id</code> = nama <b>unik</b>, seperti NIK. Satu <code>id</code> hanya boleh dipakai <b>satu kali</b> dalam satu halaman.</li><li><code>class</code> = nama <b>kelompok</b>, seperti nama kelas di sekolah. Boleh dipakai banyak elemen, dan satu elemen boleh punya beberapa class (dipisah spasi).</li><li>Keduanya dipakai CSS untuk memberi gaya dan JavaScript untuk mencari elemen.</li></ul>
<h4>data-*: menyimpan info tambahan</h4>
<pre><code>&lt;button data-produk="17" data-harga="50000"&gt;Beli&lt;/button&gt;</code></pre>
<p>Atribut berawalan <code>data-</code> boleh kamu namai sendiri. Isinya tidak tampil di layar, tapi bisa dibaca JavaScript (lewat <code>tombol.dataset.produk</code>). Gunanya menitipkan informasi kecil pada elemen.</p>
<h4>Baris penting di dalam head</h4>
<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;script src="app.js" defer&gt;&lt;/script&gt;</code></pre>
<ol><li><code>meta viewport</code>: memberi tahu HP agar lebar halaman = lebar layar HP. Tanpa baris ini, halaman di HP tampil seperti versi laptop yang diperkecil, tulisannya jadi kecil sekali. <i>Meta</i> berarti "keterangan tentang halaman".</li><li><code>&lt;link rel="stylesheet"&gt;</code>: memuat file <b>CSS</b> (pengatur tampilan: warna, huruf, tata letak). <code>rel</code> = <i>relation</i>, hubungan file itu dengan halaman.</li><li><code>&lt;script src="app.js"&gt;</code>: memuat file <b>JavaScript</b> (yang membuat halaman bisa bereaksi, misalnya tombol yang membuka menu).</li></ol>
<p>Kenapa <code>defer</code>? Browser membaca HTML dari atas ke bawah. Kalau di tengah jalan ketemu <code>&lt;script&gt;</code>, ia berhenti dulu untuk mengunduh dan menjalankannya, sehingga halaman terlambat tampil. <code>defer</code> artinya "tunda": unduh skripnya sambil jalan, tapi jalankan <b>setelah</b> HTML selesai dibaca. Cara lain dengan hasil mirip: taruh <code>&lt;script&gt;</code> tepat sebelum <code>&lt;/body&gt;</code>.</p>
<h4>Penyimpanan di browser: localStorage</h4>
<p>Browser punya "laci" kecil untuk menyimpan data milik situs, misalnya progres belajarmu di KodeQuiz ini.</p>
<ul><li><code>localStorage</code> = datanya <b>tetap ada</b> walau browser ditutup dan laptop dimatikan.</li><li><code>sessionStorage</code> = datanya <b>hilang</b> saat tab ditutup.</li></ul>
<h4>Menampilkan kode program</h4>
<p><code>&lt;code&gt;</code> menandai potongan kode (biasanya tampil dengan huruf berjarak sama, seperti mesin ketik). Untuk kode beberapa baris, bungkus dengan <code>&lt;pre&gt;</code> (<i>preformatted</i>) agar spasi dan baris barunya tidak dirapikan browser.</p>
<div class="catatan">Pegangan cepat: pilih tag yang <b>paling menjelaskan isinya</b>. Baru kalau tidak ada yang cocok, pakai <code>div</code> atau <code>span</code>.</div>
<div class="praktik"><b>Coba sendiri:</b> ubah halaman latihanmu supaya memakai <code>header</code>, <code>nav</code> (berisi 3 link), <code>main</code>, dan <code>footer</code>. Beri satu elemen <code>id</code> dan dua elemen <code>class</code> yang sama.</div>
`},
];
