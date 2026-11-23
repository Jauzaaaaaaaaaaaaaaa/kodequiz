// ============ LATIHAN EKSTRA — menambah soal di bab yang sudah ada ============
// Supaya setiap bab HTML, CSS, JavaScript, dan Python punya minimal ±15 soal latihan.
// Dimuat SETELAH semua file soal topik yang sama (ID soal = topik + indeks, jadi selalu di belakang).
// vr:"js"/"py" → output dijalankan sungguhan oleh alat/cek-soal.js.

SOAL_HTML.push(
// struktur
{k:"struktur",t:"mc",lv:1,q:"Tag mana yang TIDAK punya tag penutup (void element)?",o:["<img>","<p>","<div>","<a>"],a:0,
 e:"Void element tidak membungkus isi apa pun, jadi tidak ditutup: <img>, <br>, <hr>, <input>, <meta>, <link>. Menulis <img/> dengan garis miring juga boleh, tapi tidak wajib di HTML5.",
 w:[null,"<p> membungkus teks paragraf, perlu </p>.","<div> pembungkus, perlu </div>.","<a> membungkus teks tautan, perlu </a>."]},
{k:"struktur",t:"mc",lv:1,q:"Penulisan tag bersarang (nesting) yang BENAR:",o:["<p><strong>Penting</strong> sekali</p>","<p><strong>Penting</p></strong>","<strong><p>Penting</strong></p>","<p>Penting<strong></p>"],a:0,
 e:"Tag yang dibuka paling akhir harus ditutup paling dulu, seperti kotak di dalam kotak. Penulisan bersilang membuat browser menebak-nebak dan hasilnya bisa berbeda di tiap browser.",
 w:[null,"Penutupnya bersilang.","Penutupnya bersilang.","strong tidak ditutup."]},
{k:"struktur",t:"mc",lv:1,q:"Atribut HTML ditulis di…",o:["Tag pembuka, contoh <a href=\"/\">","Tag penutup, contoh </a href=\"/\">","Di antara isi","File CSS"],a:0,
 e:"Atribut memberi informasi tambahan pada elemen: nama=\"nilai\". Beberapa atribut dipisah spasi: <img src=\"a.jpg\" alt=\"…\" width=\"300\">.",
 w:[null,"Tag penutup tidak boleh berisi atribut.","Isi adalah konten, bukan atribut.","Atribut bagian dari HTML."]},
{k:"struktur",t:"mc",lv:2,q:"Di HTML tertulis <p>Halo        dunia</p> (banyak spasi). Yang tampil di browser:",o:["Halo dunia (satu spasi)","Halo        dunia","Halodunia","Halo, lalu dunia di baris baru"],a:0,
 e:"Browser meringkas spasi, tab, dan baris baru berurutan menjadi SATU spasi (whitespace collapsing). Itulah sebabnya indentasi kode tidak memengaruhi tampilan. Untuk mempertahankan spasi, pakai <pre> atau CSS white-space: pre.",
 w:[null,"Spasi berurutan diringkas.","Satu spasi tetap ada.","Baris baru butuh <br> atau elemen blok."]},
{k:"struktur",t:"mc",lv:2,q:"Struktur folder: index.html dan folder img berisi logo.png, sejajar. Atribut src yang benar di index.html:",o:["img/logo.png","/img/logo.png selalu","../img/logo.png","C:\\proyek\\img\\logo.png"],a:0,
 e:"Path relatif dihitung dari lokasi file HTML:\n• img/logo.png → masuk folder img di sebelahnya.\n• ../ → naik satu folder.\n• /img/logo.png → dari akar situs (bisa salah kalau situs ada di subfolder).\n• Jangan pernah memakai path komputer seperti C:\\…, karena tidak ada di komputer pengunjung.",
 w:[null,"Garis miring awal berarti akar situs, belum tentu benar.","../ naik keluar folder proyek.","Path komputer pribadi tidak ada di server."]},
{k:"struktur",t:"mc",lv:1,q:"Kenapa halaman utama situs biasanya diberi nama index.html?",o:["Server otomatis membuka index.html saat alamat folder dibuka","Wajib agar CSS jalan","Agar lebih cepat","Nama lain dilarang"],a:0,
 e:"Saat pengunjung membuka contoh.id/ atau contoh.id/blog/, server mencari file index.html di folder itu. Halaman lain boleh bebas: tentang.html, kontak.html.",
 w:[null,"CSS tidak bergantung pada nama file.","Kecepatan tidak berubah.","Nama lain boleh untuk halaman lain."]},
{k:"struktur",t:"mc",lv:2,q:"Alat resmi untuk memeriksa apakah HTML-mu ditulis dengan benar (tag tidak ditutup, atribut salah):",o:["W3C Markup Validator (validator.w3.org)","Google Translate","Microsoft Word","Kalkulator"],a:0,
 e:"Validator menunjukkan baris yang salah beserta penjelasannya. DevTools (tab Elements) juga membantu: lihat bagaimana browser 'membaca' HTML-mu; kalau strukturnya aneh, berarti ada tag yang salah tutup.",
 w:[null,"Bukan alat pemeriksa kode.","Bukan alat pemeriksa HTML.","Tidak berhubungan."]},
{k:"struktur",t:"is",lv:1,q:"Tag akar yang membungkus seluruh dokumen, setelah <!DOCTYPE html>: <____ lang=\"id\">",a:["html"],
 e:"Di dalam <html> ada tepat dua anak: <head> (informasi) dan <body> (yang tampil)."},
// teks
{k:"teks",t:"mc",lv:2,q:"<ol type=\"A\" start=\"3\"> akan memulai penomoran dari…",o:["C","3","A","c"],a:0,
 e:"type mengatur jenis penomoran (1, A, a, I, i), start mengatur nomor awal. Huruf ke-3 adalah C. Atribut reversed membuat hitungan mundur.",
 w:[null,"type=\"A\" membuat penomoran huruf.","start=\"3\" memulai dari urutan ketiga.","Huruf kapital karena type=\"A\"."]},
{k:"teks",t:"mc",lv:2,q:"Cara benar membuat sub-daftar (daftar di dalam daftar):",o:["<ul><li>Buah<ul><li>Apel</li></ul></li></ul>","<ul><li>Buah</li><ul><li>Apel</li></ul></ul>","<ul><ul>Apel</ul></ul>","<li><ul>Buah</ul></li>"],a:0,
 e:"Anak langsung <ul>/<ol> hanya boleh <li>. Sub-daftar diletakkan DI DALAM <li> induknya, sebelum </li>.",
 w:[null,"<ul> tidak boleh langsung jadi anak <ul>.","Isi <ul> harus <li>.","<li> harus berada di dalam <ul>/<ol>."]},
{k:"teks",t:"mc",lv:2,q:"Kutipan panjang satu paragraf dari tokoh ditandai dengan…",o:["<blockquote>","<q>","<cite> saja","<quote>"],a:0,
 e:"<blockquote> untuk kutipan blok (biasanya tampil menjorok). <q> untuk kutipan pendek di tengah kalimat (browser menambah tanda kutip). <cite> untuk judul karya yang dikutip.",
 w:[null,"<q> untuk kutipan pendek dalam baris.","<cite> menandai judul karya.","Tag <quote> tidak ada."]},
{k:"teks",t:"mc",lv:2,q:"Menampilkan potongan kode program yang spasi dan baris barunya harus dipertahankan:",o:["<pre><code>…</code></pre>","<p><code>…</code></p>","<code> saja dengan banyak spasi","<b>…</b>"],a:0,
 e:"<pre> mempertahankan spasi dan baris baru apa adanya; <code> memberi makna 'ini kode'. Karakter < di dalamnya tetap harus ditulis &lt;.",
 w:[null,"<p> meringkas spasi.","<code> sendiri tidak mempertahankan baris baru.","<b> hanya menebalkan."]},
// media
{k:"media",t:"mc",lv:1,q:"Atribut pada <video> agar muncul tombol putar, jeda, dan volume:",o:["controls","play","buttons","autoplay"],a:0,
 e:"Tanpa controls, video tampil tanpa tombol. Atribut lain: muted, loop, poster=\"gambar.jpg\" (gambar sebelum diputar), autoplay (umumnya hanya jalan jika muted).",
 w:[null,"Atribut play tidak ada.","Atribut buttons tidak ada.","autoplay memutar otomatis, tidak memberi tombol."]},
{k:"media",t:"mc",lv:2,q:"Membuat tautan yang membuka tab baru dengan aman:",o:["<a href=\"…\" target=\"_blank\" rel=\"noopener\">","<a href=\"…\" new>","<a href=\"…\" target=\"tab\">","<a href=\"…\" open=\"new\">"],a:0,
 e:"target=\"_blank\" membuka tab baru. rel=\"noopener\" mencegah halaman baru mengakses jendela asal (browser modern sudah otomatis, tapi tetap kebiasaan baik). Beri tahu pengguna, misalnya dengan ikon ↗.",
 w:[null,"Atribut new tidak ada.","Nilai yang benar _blank.","Atribut open tidak ada untuk <a>."]},
{k:"media",t:"mc",lv:1,q:"Tautan yang langsung membuka aplikasi telepon di HP:",o:["<a href=\"tel:+6281234567890\">","<a href=\"phone:0812…\">","<a call=\"0812…\">","<tel>0812…</tel>"],a:0,
 e:"Skema khusus di href: tel: (telepon), mailto: (email, bisa ?subject=…), https://wa.me/62812… (WhatsApp). Tulis nomor dengan kode negara tanpa spasi.",
 w:[null,"Skema phone: tidak dikenal.","Atribut call tidak ada.","Tag <tel> tidak ada."]},
{k:"media",t:"mc",lv:2,q:"Tautan <a href=\"#kontak\">Kontak</a> akan…",o:["Menggulir ke elemen ber-id kontak di halaman yang sama","Membuka halaman kontak.html","Menyalin teks kontak","Tidak melakukan apa-apa"],a:0,
 e:"# di href menunjuk id. Cocok untuk daftar isi dan menu satu halaman. Tambahkan CSS html { scroll-behavior: smooth; } agar gulirannya halus.",
 w:[null,"Butuh href=\"kontak.html\" untuk itu.","Tautan tidak menyalin teks.","Ia menggulir ke id tersebut."]},
{k:"media",t:"mc",lv:2,q:"Gambar beserta keterangannya (seperti 'Gambar 1. Grafik penjualan') ditandai secara semantik dengan…",o:["<figure> berisi <img> dan <figcaption>","<div> berisi <img> dan <p>","<img caption=\"…\">","<picture> dan <title>"],a:0,
 e:"<figure> mengelompokkan media (gambar, grafik, kode) dengan keterangannya, dan screen reader menghubungkan keduanya.",
 w:[null,"Bisa tampil sama, tapi tanpa makna.","Atribut caption tidak ada.","<picture> untuk sumber gambar responsif."]},
{k:"media",t:"mc",lv:2,q:"Gambar hiasan murni (garis ornamen) sebaiknya diberi alt…",o:["alt=\"\" (kosong)","alt=\"gambar\"","alt=\"ornamen-garis-biru-final.png\"","tanpa atribut alt"],a:0,
 e:"alt kosong memberi tahu screen reader untuk melewatinya. Tanpa alt sama sekali, sebagian screen reader membacakan nama file yang membingungkan.",
 w:[null,"Kata 'gambar' tidak memberi informasi.","Nama file tidak berguna bagi pendengar.","Tanpa alt, nama file bisa dibacakan."]},
// semantik
{k:"semantik",t:"mc",lv:2,q:"Berapa banyak <main> yang boleh tampil di satu halaman?",o:["Satu","Tak terbatas","Dua (atas dan bawah)","Nol, sudah usang"],a:0,
 e:"<main> menandai isi utama halaman yang unik (tidak termasuk header, nav, footer yang berulang). Pengguna screen reader bisa melompat langsung ke <main>.",
 w:[null,"Hanya satu yang tampil.","Hanya satu.","<main> adalah elemen HTML5 yang aktif."]},
// form
{k:"form",t:"mc",lv:2,q:"Beda method=\"get\" dan method=\"post\" pada form:",o:["GET menaruh data di alamat URL (cocok untuk pencarian); POST mengirim di badan permintaan (untuk login, pendaftaran)","GET lebih aman untuk password","POST hanya untuk gambar","Tidak ada bedanya"],a:0,
 e:"GET: /cari?q=kopi, bisa di-bookmark dan dibagikan. POST: data tidak tampil di URL, dipakai untuk mengirim/mengubah data. Password selalu lewat POST dan HTTPS.",
 w:[null,"Password di URL justru tersimpan di riwayat browser.","POST untuk semua jenis data.","Perilakunya berbeda."]},
{k:"form",t:"mc",lv:2,q:"Input <input type=\"text\" id=\"kota\"> tidak ikut terkirim saat form di-submit. Penyebab paling mungkin:",o:["Tidak punya atribut name","Tidak punya placeholder","Tidak punya class","Terlalu pendek"],a:0,
 e:"Yang dikirim ke server adalah pasangan name=nilai. id hanya untuk label dan CSS/JS. Tulis <input id=\"kota\" name=\"kota\">.",
 w:[null,"placeholder hanya teks contoh.","class untuk gaya.","Panjang tidak berpengaruh."]},
{k:"form",t:"mc",lv:2,q:"Validasi bawaan HTML: kolom wajib diisi minimal 8 karakter:",o:["<input required minlength=\"8\">","<input must min=\"8\">","<input validate=\"8\">","<input length=\"8+\">"],a:0,
 e:"Atribut validasi bawaan: required, minlength/maxlength (teks), min/max/step (angka, tanggal), pattern (regex), type=\"email\"/\"url\". Browser menolak submit dan menampilkan pesan. Tetap validasi lagi di server, karena validasi browser bisa dilewati.",
 w:[null,"Atribut must tidak ada; min untuk angka.","Atribut validate tidak ada.","Atribut length tidak ada."]},
{k:"form",t:"mc",lv:1,q:"Tiga radio button pilihan ukuran (S, M, L) agar hanya SATU yang bisa dipilih harus punya…",o:["name yang sama","id yang sama","value yang sama","class yang sama"],a:0,
 e:"Radio dengan name sama menjadi satu kelompok. value masing-masing berbeda (\"S\", \"M\", \"L\") dan itulah yang dikirim. id harus unik per elemen.",
 w:[null,"id harus unik.","value harus berbeda agar pilihan bisa dibedakan.","class tidak mengelompokkan radio."]},
{k:"form",t:"mc",lv:2,q:"Mengelompokkan beberapa input (misalnya bagian 'Alamat Pengiriman') dengan judulnya:",o:["<fieldset><legend>Alamat Pengiriman</legend>…</fieldset>","<group title=\"…\">","<div><h6>…</h6></div> saja","<section label>"],a:0,
 e:"fieldset + legend membantu screen reader membacakan judul kelompok sebelum setiap input di dalamnya. Wajib untuk kelompok radio/checkbox.",
 w:[null,"Tag <group> tidak ada.","Tampil mirip, tapi tanpa hubungan semantik.","Atribut label tidak sah di <section>."]},
{k:"form",t:"mc",lv:2,q:"<input type=\"number\" min=\"1\" max=\"10\" step=\"1\"> berarti…",o:["Angka bulat 1 sampai 10, dengan tombol naik-turun","Teks 1 sampai 10 karakter","Pilihan acak","Jumlah input maksimal 10"],a:0,
 e:"Untuk angka yang dihitung (jumlah barang). Untuk angka yang bukan hitungan (nomor HP, kode pos), pakai type=\"tel\" atau type=\"text\" dengan inputmode=\"numeric\" agar nol di depan tidak hilang.",
 w:[null,"Itu minlength/maxlength.","Tidak acak.","Tidak berhubungan dengan jumlah input."]},
{k:"form",t:"is",lv:2,q:"Atribut agar browser bisa mengisi otomatis kolom email tersimpan: autocomplete=\"____\"",a:["email"],
 e:"Nilai lain: name, tel, street-address, postal-code, current-password, new-password, one-time-code. Mempercepat pengisian form, terutama di HP."},
// a11y
{k:"a11y",t:"mc",lv:2,q:"Urutan heading yang benar untuk aksesibilitas:",o:["h1 → h2 → h3 (tidak melompati tingkat)","h1 → h4 → h2","Semua h1","Pilih heading berdasarkan ukuran huruf yang diinginkan"],a:0,
 e:"Pengguna screen reader menjelajah halaman lewat daftar heading, seperti daftar isi buku. Ukuran huruf diatur dengan CSS, bukan dengan memilih h3 atau h5.",
 w:[null,"Melompat dari h1 ke h4 membingungkan struktur.","Struktur jadi datar tanpa hierarki.","Ukuran diatur CSS."]},
{k:"a11y",t:"mc",lv:2,q:"Teks tautan yang paling baik:",o:["Unduh laporan penjualan Maret (PDF, 2 MB)","Klik di sini","Selengkapnya","Link"],a:0,
 e:"Pengguna screen reader sering mendengar daftar tautan saja tanpa konteks. 'Klik di sini' berulang 10 kali tidak berarti apa-apa. Teks tautan harus bisa dipahami sendiri.",
 w:[null,"Tidak menjelaskan tujuan.","Tidak menjelaskan apa yang selengkapnya.","Tidak bermakna."]},
{k:"a11y",t:"mc",lv:2,q:"Tombol yang hanya berisi ikon (misalnya 🗑) perlu nama yang bisa dibaca. Caranya:",o:["<button aria-label=\"Hapus produk\">🗑</button>","<button title=\"\">🗑</button>","Tidak perlu apa-apa","<button class=\"hapus\">🗑</button>"],a:0,
 e:"aria-label memberi nama aksesibel. Alternatif: teks tersembunyi visual <span class=\"sr-only\">Hapus produk</span> di dalam tombol.",
 w:[null,"title kosong tidak memberi nama.","Screen reader hanya membaca 'tombol' atau simbolnya.","class tidak dibacakan."]},
{k:"a11y",t:"mc",lv:2,q:"Form menandai kolom yang salah hanya dengan garis merah. Masalahnya:",o:["Penderita buta warna tidak bisa membedakannya; tambahkan teks/ikon pesan kesalahan","Merah terlalu terang","Tidak ada masalah","Garis harus biru"],a:0,
 e:"Aturan WCAG: warna tidak boleh menjadi satu-satunya penanda informasi. Tambahkan pesan teks ('Email belum benar'), ikon, dan hubungkan dengan aria-describedby.",
 w:[null,"Bukan soal terang.","Sekitar 8% laki-laki punya buta warna.","Warna apa pun tetap butuh penanda lain."]},
// tabel / head / interaktif
{k:"tabel",t:"mc",lv:2,q:"Tabel 3 kolom. Satu baris berisi <td colspan=\"2\">Subtotal</td>. Berapa <td> lagi yang perlu ditulis di baris itu?",o:["1","2","3","0"],a:0,
 e:"Sel subtotal memakan 2 tempat, sisa 3 - 2 = 1 sel untuk nilai.",
 w:[null,"colspan=\"2\" sudah memakai dua tempat.","Total tempat tetap 3.","Masih ada satu kolom tersisa."]},
{k:"tabel",t:"mc",lv:2,q:"Properti CSS font-variant-numeric: tabular-nums; pada kolom angka berguna untuk…",o:["Membuat setiap digit sama lebar sehingga angka sejajar rapi","Menebalkan angka","Mengubah angka jadi huruf","Menambahkan pemisah ribuan"],a:0,
 e:"Pada banyak huruf, digit 1 lebih sempit dari 8. Dengan tabular-nums, angka dalam tabel dan dashboard sejajar per digit, sehingga mudah dibandingkan. Gabungkan dengan text-align: right.",
 w:[null,"Itu font-weight.","Tidak mengubah angka.","Pemisah ribuan diatur saat menulis angka."]},
{k:"tabel",t:"is",lv:2,q:"Nilai atribut scope untuk <th> yang menjadi judul sebuah BARIS: scope=\"____\"",a:["row"],
 e:"scope=\"col\" untuk judul kolom, scope=\"row\" untuk judul baris."},
{k:"head",t:"mc",lv:1,q:"Berapa elemen <title> dalam satu halaman HTML?",o:["Tepat satu, di dalam <head>","Satu per bagian","Boleh di <body>","Tidak wajib dan tidak berpengaruh"],a:0,
 e:"Title tampil di tab, riwayat browser, bookmark, dan sebagai judul hasil pencarian. Buat berbeda di setiap halaman.",
 w:[null,"Hanya satu per halaman.","title hanya di head.","Sangat berpengaruh untuk SEO."]},
{k:"head",t:"mc",lv:2,q:"Script analytics yang tidak bergantung pada script lain dan tidak butuh urutan sebaiknya dimuat dengan…",o:["async","defer wajib","tanpa atribut di awal <head>","type=\"text/css\""],a:0,
 e:"async: diunduh paralel dan dijalankan segera setelah siap tanpa menunggu yang lain. Cocok untuk script mandiri. Script aplikasi yang memakai DOM dan saling bergantung: defer.",
 w:[null,"defer juga boleh, tapi async lebih cocok untuk script mandiri.","Menghambat tampilan halaman.","Itu tipe untuk CSS."]},
{k:"head",t:"mc",lv:2,q:"<link rel=\"stylesheet\" href=\"style.css\"> sebaiknya diletakkan di <head> karena…",o:["Browser bisa menata halaman sejak awal sehingga tidak sempat tampil polos lalu 'melompat'","Wajib secara hukum","Agar CSS tidak bisa dibaca orang","Supaya file CSS lebih kecil"],a:0,
 e:"CSS di akhir body menyebabkan FOUC (flash of unstyled content): halaman tampil tanpa gaya sesaat. Letakkan link CSS di head.",
 w:[null,"Bukan aturan hukum.","CSS tetap bisa dibaca siapa pun.","Ukuran file tidak berubah."]},
{k:"interaktif",t:"mc",lv:2,q:"Atribut contenteditable pada <div> membuat…",o:["Isi div bisa diketik dan diedit langsung oleh pengguna","Div bisa diseret","Div tersembunyi","Div menjadi form"],a:0,
 e:"contenteditable dipakai di editor teks kaya (seperti catatan). Isinya diambil lewat JavaScript (el.innerText). Untuk isian biasa, tetap pakai <input>/<textarea> karena lebih aksesibel.",
 w:[null,"Seret memakai draggable.","Sembunyi memakai hidden.","Tidak otomatis terkirim seperti form."]},
{k:"interaktif",t:"mc",lv:2,q:"Di dalam <dialog>, <form method=\"dialog\"> dengan tombol berarti…",o:["Menekan tombol menutup dialog tanpa mengirim data ke server, dan value tombol tersimpan di dialog.returnValue","Form dikirim ke server dialog","Dialog dibuka ulang","Tombol dinonaktifkan"],a:0,
 e:"Cara paling sederhana membuat tombol Batal/OK di modal tanpa JavaScript tambahan. Setelah tertutup, baca pilihan pengguna lewat returnValue di event close.",
 w:[null,"Tidak ada server bernama dialog.","Dialog justru ditutup.","Tombol tetap aktif."]}
);

SOAL_CSS.push(
// lanjut (variabel, spesifisitas, responsif)
{k:"lanjut",t:"mc",lv:2,q:"color: var(--aksen, #2f4cdd); berarti…",o:["Pakai nilai --aksen; kalau variabel itu tidak ada, pakai #2f4cdd","Campuran kedua warna","Selalu #2f4cdd","Error karena ada koma"],a:0,
 e:"Argumen kedua var() adalah nilai cadangan (fallback). Berguna untuk komponen yang dipakai di banyak halaman yang belum tentu mendefinisikan variabelnya.",
 w:[null,"Tidak dicampur.","Cadangan hanya dipakai jika --aksen tidak ada.","Koma memisahkan nilai cadangan."]},
{k:"lanjut",t:"mc",lv:2,q:"Apa warna judul di dalam .kartu-promo?",kode:":root { --aksen: blue; }\n.kartu-promo { --aksen: orange; }\nh3 { color: var(--aksen); }\n\n<div class=\"kartu-promo\"><h3>Diskon</h3></div>",o:["orange","blue","hitam (bawaan)","campuran biru-oranye"],a:0,
 e:"Custom property diwariskan dan bisa ditimpa per bagian. h3 membaca --aksen dari leluhur terdekat yang mendefinisikannya, yaitu .kartu-promo. Inilah cara membuat varian komponen tanpa menulis ulang aturannya.",
 w:[null,".kartu-promo menimpa nilai :root.","Variabelnya punya nilai.","Satu nilai yang menang."]},
{k:"lanjut",t:"mc",lv:1,q:"@media (max-width: 600px) { … } berlaku ketika lebar layar…",o:["600px atau kurang","Lebih dari 600px","Tepat 600px saja","Selalu"],a:0,
 e:"max-width = 'sampai maksimal'. min-width = 'mulai dari'. Pendekatan mobile-first memakai min-width: gaya dasar untuk HP, lalu ditambah untuk layar lebar.",
 w:[null,"Itu min-width: 601px.","Termasuk semua lebar di bawahnya.","Hanya saat syarat terpenuhi."]},
{k:"lanjut",t:"mc",lv:2,q:"Kata kunci color: inherit; membuat elemen…",o:["Memakai warna yang sama dengan induknya","Kembali ke warna bawaan browser","Tidak berwarna","Mengambil warna acak"],a:0,
 e:"Kata kunci global: inherit (ambil dari induk), initial (nilai awal spesifikasi CSS), unset (inherit kalau properti memang diwariskan, selain itu initial), revert (kembali ke gaya bawaan browser). Contoh umum: a { color: inherit; } agar tautan mengikuti warna teks sekitarnya.",
 w:[null,"Itu revert/initial.","Tetap berwarna, mengikuti induk.","Tidak acak."]},
// selektor
{k:"selektor",t:"mc",lv:3,q:"input:checked + label { font-weight: bold; } menebalkan…",o:["Label yang tepat setelah checkbox/radio yang sedang dicentang","Semua label","Checkbox-nya","Label sebelum checkbox"],a:0,
 e:"Gabungan pseudo-class :checked dan combinator + (saudara berikutnya). Teknik ini membuat tab, toggle, dan menu tanpa JavaScript.",
 w:[null,"Hanya label setelah input yang dicentang.","Yang dipilih label, bukan input.","+ memilih saudara SETELAH."]},
{k:"selektor",t:"mc",lv:2,q:"Spesifisitas selector universal * adalah…",o:["0 (paling lemah)","Paling kuat","Sama dengan id","Sama dengan class"],a:0,
 e:"* tidak menambah spesifisitas sama sekali, sehingga aturan reset seperti * { margin: 0 } mudah ditimpa oleh aturan lain.",
 w:[null,"Justru paling lemah.","id bernilai (1,0,0).","class bernilai (0,1,0)."]},
// satuan
{k:"satuan",t:"mc",lv:2,q:"line-height: 1.5; (tanpa satuan) pada paragraf berukuran 18px menghasilkan jarak baris…",o:["27px, dan tetap proporsional di elemen anak yang ukurannya berbeda","1.5px","18px","1.5rem selalu"],a:0,
 e:"line-height tanpa satuan adalah pengali dari ukuran huruf elemen itu sendiri: 18 × 1.5 = 27px. Dianjurkan tanpa satuan agar anak dengan ukuran huruf lain menghitung ulang sesuai ukurannya.",
 w:[null,"Bukan piksel.","Itu line-height: 1.","Tanpa satuan berbeda dengan rem."]},
{k:"satuan",t:"mc",lv:2,q:"Tombol dengan font-size: 20px dan padding: 0.5em 1em. Berapa padding kiri-kanannya?",o:["20px","16px","10px","1px"],a:0,
 e:"Untuk properti selain font-size, em dihitung dari ukuran huruf elemen ITU SENDIRI. 1em × 20px = 20px; padding atas-bawah 0.5em = 10px. Hasilnya: tombol besar otomatis punya padding besar.",
 w:[null,"Dihitung dari font-size tombol, bukan root.","Itu padding atas-bawah.","em bukan piksel."]},
{k:"satuan",t:"mc",lv:3,q:"Satuan vmin berarti…",o:["1% dari sisi layar yang lebih pendek (lebar atau tinggi)","1% lebar layar","1 menit","1% ukuran huruf"],a:0,
 e:"vmin mengikuti sisi terpendek, vmax sisi terpanjang. Berguna untuk elemen persegi yang harus muat baik di layar tegak maupun mendatar, misalnya logo di halaman pembuka.",
 w:[null,"Itu vw.","Bukan satuan waktu.","Itu em/rem."]},
// animasi
{k:"animasi",t:"mc",lv:2,q:"transition: opacity .3s ease .1s; angka .1s terakhir adalah…",o:["Jeda sebelum transisi mulai (delay)","Durasi","Jumlah ulang","Kecepatan akhir"],a:0,
 e:"Urutan singkatan: properti, durasi, easing, delay. Waktu pertama selalu durasi, waktu kedua delay. Delay kecil berbeda-beda per item membuat efek muncul berurutan (stagger).",
 w:[null,"Durasi adalah waktu pertama (.3s).","Transition tidak berulang.","Kecepatan diatur easing."]},
{k:"animasi",t:"mc",lv:2,q:"Menghentikan sementara animasi saat kursor berada di atas banner berjalan:",o:[".banner:hover { animation-play-state: paused; }",".banner:hover { animation: stop; }",".banner:hover { transition: none; }",".banner:hover { animation-delay: 9999s; }"],a:0,
 e:"animation-play-state: paused | running. Berguna untuk teks berjalan atau slider agar pengunjung sempat membaca.",
 w:[null,"Nilai stop tidak ada.","transition tidak mengendalikan animation.","Mengubah delay tidak menjeda dengan benar."]},
{k:"animasi",t:"mc",lv:3,q:"animation: ketik 2s steps(20) forwards; untuk efek mesin ketik. steps(20) membuat animasi…",o:["Melompat dalam 20 langkah patah-patah, bukan mulus","Mengulang 20 kali","Berjalan 20 detik","Memiliki 20 keyframes wajib"],a:0,
 e:"steps(n) memecah perubahan menjadi n lompatan. Cocok untuk efek mengetik (lebar bertambah per huruf) dan animasi sprite sheet.",
 w:[null,"Pengulangan diatur iteration-count.","Durasi tetap 2s.","Keyframes bisa hanya dua."]},
// gridlanjut
{k:"gridlanjut",t:"mc",lv:2,q:"grid-auto-rows: 200px; mengatur…",o:["Tinggi baris yang dibuat otomatis saat item melebihi baris yang didefinisikan","Lebar kolom","Jumlah baris maksimal","Jarak antarbaris"],a:0,
 e:"Grid sering hanya mendefinisikan kolom; baris tercipta otomatis (implicit grid). grid-auto-rows mengatur tinggi baris-baris itu, misalnya minmax(150px, auto).",
 w:[null,"Kolom diatur grid-template-columns.","Bukan batas jumlah.","Jarak diatur gap/row-gap."]},
{k:"gridlanjut",t:"mc",lv:3,q:"Pada flex container dengan flex-direction: column, justify-content: center memusatkan item secara…",o:["Vertikal (karena sumbu utama kini atas-bawah)","Horizontal","Diagonal","Tidak berpengaruh"],a:0,
 e:"justify-content selalu bekerja di sumbu UTAMA, align-items di sumbu SILANG. Kalau arah diubah menjadi kolom, kedua sumbu ikut bertukar.",
 w:[null,"Horizontal kini diatur align-items.","Tidak ada sumbu diagonal.","Tetap berpengaruh."]},
{k:"gridlanjut",t:"mc",lv:2,q:"Kartu dalam satu baris flex tingginya berbeda-beda karena isinya. Membuat tombol di setiap kartu selalu menempel di bawah:",o:["Kartu display: flex; flex-direction: column; lalu tombol margin-top: auto","Tombol position: fixed","Tinggi semua kartu 500px","Tambah <br> berulang"],a:0,
 e:"margin-top: auto di item flex 'menyerap' semua sisa ruang di atasnya sehingga item terdorong ke bawah. Item flex dalam satu baris secara bawaan sudah sama tinggi (align-items: stretch).",
 w:[null,"fixed menempel di layar, bukan kartu.","Isi bisa meluap atau tersisa ruang.","Rapuh dan tidak konsisten."]},
// arsitektur
{k:"arsitektur",t:"mc",lv:2,q:"Dua file CSS dimuat berurutan: <link href=\"a.css\"> lalu <link href=\"b.css\">. Keduanya menulis .judul { color } dengan selector yang sama. Yang menang:",o:["Aturan di b.css, karena dimuat terakhir","Aturan di a.css","Yang ukuran filenya lebih kecil","Acak"],a:0,
 e:"Kalau spesifisitas sama, aturan yang muncul terakhir menang, termasuk antarfile. Itulah sebabnya CSS milikmu dimuat setelah CSS framework (Bootstrap) agar bisa menimpanya.",
 w:[null,"Yang terakhir menang jika spesifisitas sama.","Ukuran file tidak berpengaruh.","Urutannya pasti."]},
{k:"arsitektur",t:"mc",lv:2,q:"Class utilitas .sr-only (atau .visually-hidden) yang umum di framework berfungsi untuk…",o:["Menyembunyikan teks secara visual tapi tetap dibacakan screen reader","Menyembunyikan dari semua orang","Hanya tampil di Safari","Mengecilkan gambar"],a:0,
 e:"display: none menyembunyikan juga dari screen reader. .sr-only memakai trik (ukuran 1px, clip) agar teks tetap ada di pohon aksesibilitas, misalnya label untuk tombol ikon.",
 w:[null,"Itu display: none.","Tidak terkait browser tertentu.","Tidak berhubungan dengan gambar."]},
{k:"arsitektur",t:"mc",lv:3,q:"Kenapa !important sebaiknya dihindari?",o:["Ia mengalahkan spesifisitas normal, sehingga untuk menimpanya kamu butuh !important lagi; CSS jadi sulit dirawat","Membuat browser lambat","Tidak didukung browser","Menghapus gaya lain"],a:0,
 e:"Pemakaian wajar: kelas utilitas yang memang harus selalu menang (.sembunyi { display: none !important }) atau menimpa gaya pihak ketiga yang tidak bisa diubah. Selain itu, perbaiki spesifisitasnya.",
 w:[null,"Kecepatan tidak berubah berarti.","Didukung semua browser.","Tidak menghapus, hanya mengalahkan."]}
);

SOAL_JS.push(
{k:"dasar",t:"mc",lv:2,q:"Apa yang dicetak?",kode:"try {\n  const pajak = 0.11;\n  pajak = 0.12;\n} catch (e) {\n  console.log(e.name);\n}",o:["TypeError","SyntaxError","0.12","ReferenceError"],a:0,vr:"js",
 e:"const tidak boleh diisi ulang. Mencoba mengisinya saat program berjalan melempar TypeError: Assignment to constant variable.",
 w:[null,"Penulisannya sah; errornya saat dijalankan.","Nilai tidak berubah.","Variabelnya dikenal."]},
{k:"operator",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log(\"5\" + 3, \"5\" - 3);",o:["53 2","8 2","53 53","8 8"],a:0,vr:"js",
 e:"+ dengan teks berarti MENGGABUNG (\"5\" + 3 = \"53\"). - hanya berlaku untuk angka, jadi teks \"5\" diubah otomatis menjadi 5 (5 - 3 = 2). Konversi diam-diam ini sumber banyak bug; ubah input dengan Number() dulu.",
 w:[null,"+ dengan teks menggabung.","- tidak bisa menggabung teks.","+ tidak menjumlahkan teks."]},
{k:"operator",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(typeof null, typeof [], typeof undefined);",o:["object object undefined","null array undefined","object array undefined","null object undefined"],a:0,vr:"js",
 e:"typeof null menghasilkan \"object\" karena bug bersejarah JavaScript yang tidak pernah diperbaiki. Array juga \"object\"; pakai Array.isArray(x) untuk mengecek array.",
 w:[null,"typeof tidak pernah menghasilkan \"null\" atau \"array\".","typeof [] adalah \"object\".","typeof null adalah \"object\"."]},
{k:"operator",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log(2 ** 3, 10 % 3, 7 / 2);",o:["8 1 3.5","6 1 3","8 3 3.5","9 1 3"],a:0,vr:"js",
 e:"** = pangkat (2³ = 8). % = sisa bagi (10 = 3×3 + 1). JavaScript tidak punya pembagian bulat khusus: 7 / 2 = 3.5; pakai Math.floor(7 / 2) untuk 3.",
 w:[null,"** pangkat, bukan kali.","% memberi sisa, bukan hasil bagi.","2 pangkat 3 = 8."]},
{k:"kondisiloop",t:"mc",lv:3,q:"Apa yang dicetak (urut)?",kode:"const x = 2;\nswitch (x) {\n  case 1: console.log(\"satu\");\n  case 2: console.log(\"dua\");\n  case 3: console.log(\"tiga\");\n}",o:["dua lalu tiga","dua","satu dua tiga","tidak ada"],a:0,vr:"js",vx:"dua\ntiga",
 e:"Tanpa break, switch 'jatuh' (fall-through) ke case berikutnya setelah menemukan yang cocok. Hampir selalu ini bug: tulis break; di akhir setiap case.",
 w:[null,"Tanpa break, case 3 ikut jalan.","case 1 tidak cocok.","case 2 cocok."]},
{k:"kondisiloop",t:"mc",lv:2,q:"Apa yang dicetak (urut)?",kode:"const buah = [\"apel\", \"jeruk\"];\nfor (const i in buah) console.log(i);",o:["0 lalu 1","apel lalu jeruk","2","undefined"],a:0,vr:"js",vx:"0\n1",
 e:"for…in memberi KUNCI (indeks sebagai teks \"0\", \"1\"). for…of memberi NILAI (apel, jeruk). Untuk array, hampir selalu yang kamu mau adalah for…of; for…in untuk kunci objek.",
 w:[null,"Itu hasil for…of.","Yang dicetak tiap kunci.","Kuncinya ada."]},
{k:"kondisiloop",t:"mc",lv:2,q:"Output kode ini:",kode:"let n = 5;\ndo {\n  console.log(n);\n  n++;\n} while (n < 3);",o:["5","tidak mencetak apa-apa","3 4","5 6 7"],a:0,vr:"js",
 e:"do…while menjalankan isinya DULU, baru memeriksa syarat. Jadi isinya selalu jalan minimal sekali walaupun syaratnya sudah salah sejak awal. Cocok untuk 'tampilkan menu, ulangi kalau belum keluar'.",
 w:[null,"do dijalankan sekali sebelum cek syarat.","n mulai dari 5.","Setelah sekali, 6 < 3 salah dan berhenti."]},
{k:"fungsi",t:"mc",lv:1,q:"Output kode ini:",kode:"function sapa(nama = \"Tamu\") {\n  return \"Halo, \" + nama;\n}\nconsole.log(sapa(), sapa(\"Rina\"));",o:["Halo, Tamu Halo, Rina","Halo, undefined Halo, Rina","Halo, Tamu Halo, Tamu","Error"],a:0,vr:"js",
 e:"Parameter dengan nilai bawaan (default parameter) dipakai ketika argumennya tidak dikirim (atau undefined).",
 w:[null,"Nilai bawaan menggantikan undefined.","Argumen \"Rina\" menimpa bawaan.","Kodenya sah."]},
{k:"fungsi",t:"mc",lv:1,q:"Output kode ini:",kode:"function hitung(a, b) {\n  const hasil = a + b;\n}\nconsole.log(hitung(2, 3));",o:["undefined","5","null","Error"],a:0,vr:"js",
 e:"Fungsi tanpa return mengembalikan undefined. hasil dihitung, tapi tidak pernah dikirim keluar. Kesalahan pemula yang sangat sering: lupa menulis return hasil;.",
 w:[null,"Tidak ada return.","undefined, bukan null.","Kodenya sah."]},
{k:"fungsi",t:"mc",lv:3,q:"Output kode ini:",kode:"const kali = a => b => a * b;\nconst kaliDua = kali(2);\nconsole.log(kaliDua(5), kali(3)(4));",o:["10 12","7 7","[Function] 12","Error"],a:0,vr:"js",
 e:"Fungsi yang mengembalikan fungsi (currying). kali(2) mengembalikan b => 2 * b, yang mengingat a = 2 lewat closure. Lalu kaliDua(5) = 10.",
 w:[null,"Dikalikan, bukan dijumlah.","kaliDua(5) memanggil fungsi yang dikembalikan.","Kodenya sah."]},
{k:"fungsi",t:"mc",lv:2,q:"Output kode ini:",kode:"function info(pertama, ...sisa) {\n  return pertama + \":\" + sisa.length;\n}\nconsole.log(info(\"a\", \"b\", \"c\", \"d\"));",o:["a:3","a:4","abcd:0","Error"],a:0,vr:"js",
 e:"...sisa (rest parameter) mengumpulkan semua argumen setelah yang pertama menjadi array: [\"b\", \"c\", \"d\"]. Rest harus parameter terakhir.",
 w:[null,"pertama tidak ikut masuk sisa.","Argumen pertama masuk ke pertama.","Rest parameter sah."]},
{k:"strobj",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log(\"Kopi\".split(\"\").reverse().join(\"\"));",o:["ipoK","Kopi","K,o,p,i","ipok"],a:0,vr:"js",
 e:"Teks tidak punya reverse, jadi: split(\"\") memecah jadi array huruf, reverse membalik array, join(\"\") menyatukan kembali. Huruf besar-kecil tidak berubah.",
 w:[null,"Teksnya dibalik.","join(\"\") menyatukan tanpa koma.","K kapital tetap kapital."]},
{k:"strobj",t:"mc",lv:2,q:"Output kode ini:",kode:"const stok = { kopi: 5, teh: 0, susu: 3 };\nconst habis = Object.entries(stok).filter(([, n]) => n === 0).map(([nama]) => nama);\nconsole.log(Object.keys(stok).length, habis.join(\",\"));",o:["3 teh","3 kopi,susu","2 teh","3 0"],a:0,vr:"js",
 e:"Object.keys → daftar kunci, Object.values → daftar nilai, Object.entries → pasangan [kunci, nilai]. Dengan entries, objek bisa diolah memakai filter dan map seperti array. Kembalikan ke objek dengan Object.fromEntries.",
 w:[null,"Yang stoknya 0 hanya teh.","Ada 3 kunci.","Yang dicetak nama barang."]},
{k:"strobj",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log(\"7\".padStart(3, \"0\"), \"  hai  \".trim().toUpperCase());",o:["007 HAI","700 HAI","007   HAI  ","7 hai"],a:0,vr:"js",
 e:"padStart(panjang, pengisi) menambah karakter di depan sampai panjang tertentu (nomor urut 007, jam 09:05). trim membuang spasi di ujung, lalu toUpperCase membuat kapital. Method bisa dirangkai dari kiri ke kanan.",
 w:[null,"padStart menambah di depan.","trim sudah membuang spasi.","Keduanya sudah diproses."]},
{k:"dom",t:"mc",lv:2,q:"Menampilkan nama dari input pengguna ke halaman. Mana yang AMAN dari XSS?",o:["el.textContent = nama","el.innerHTML = nama","document.write(nama)","el.outerHTML = nama"],a:0,
 e:"textContent memperlakukan isinya sebagai teks biasa; tag <script> atau <img onerror> hanya tampil sebagai tulisan. innerHTML menafsirkan isinya sebagai HTML, jadi kode jahat dari pengguna bisa berjalan. Pakai innerHTML hanya untuk HTML buatanmu sendiri.",
 w:[null,"innerHTML menjalankan HTML dari pengguna.","document.write sama berbahayanya dan usang.","outerHTML juga menafsirkan HTML."]},
{k:"dom",t:"mc",lv:1,q:"Menambah class 'gelap' kalau belum ada, dan menghapusnya kalau sudah ada (satu baris):",o:["document.body.classList.toggle(\"gelap\")","document.body.className = \"gelap\"","document.body.class.add(\"gelap\")","document.body.style = \"gelap\""],a:0,
 e:"classList punya add, remove, toggle, contains. Lebih aman dari className karena tidak menghapus class lain yang sudah ada.",
 w:[null,"className menimpa semua class.","Properti class tidak ada; yang ada classList.","style untuk CSS inline."]},
{k:"dom",t:"mc",lv:2,q:"Urutan yang benar membuat item daftar baru lewat JavaScript:",o:["const li = document.createElement(\"li\"); li.textContent = \"Kopi\"; daftar.append(li);","daftar.add(\"<li>Kopi</li>\")","document.li.create(\"Kopi\")","new HTMLElement(\"li\", \"Kopi\")"],a:0,
 e:"createElement membuat elemen di memori, isi dengan textContent, lalu tempel dengan append (atau prepend, before, after). Untuk banyak item sekaligus, kumpulkan dulu di DocumentFragment agar halaman digambar ulang sekali saja.",
 w:[null,"Method add tidak ada pada elemen.","Tidak ada document.li.","Sintaks itu tidak ada."]},
{k:"dom",t:"mc",lv:2,q:"document.querySelectorAll(\".kartu\") mengembalikan…",o:["NodeList berisi semua elemen yang cocok; bisa di-forEach","Elemen pertama saja","Array biasa dengan semua method array","null kalau lebih dari satu"],a:0,
 e:"querySelector → elemen PERTAMA yang cocok (atau null). querySelectorAll → semua, dalam NodeList. NodeList punya forEach, tapi tidak punya map/filter; ubah dulu dengan [...nodeList] atau Array.from().",
 w:[null,"Itu querySelector.","NodeList bukan array penuh.","Tidak null; bisa kosong (length 0)."]},
{k:"async",t:"mc",lv:3,q:"Apa yang dicetak (urut)?",kode:"console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");",o:["A D C B","A B C D","A C D B","A D B C"],a:0,vr:"js",vx:"A\nD\nC\nB",
 e:"Event loop:\n1. Kode sinkron dulu: A, D.\n2. Lalu antrean microtask (Promise.then, await): C.\n3. Lalu macrotask (setTimeout, klik): B.\nWalaupun setTimeout 0 ms, ia tetap menunggu semua microtask selesai.",
 w:[null,"setTimeout tidak langsung jalan.","D sinkron, jalan sebelum Promise.","Promise didahulukan dari setTimeout."]},
{k:"async",t:"mc",lv:2,q:"Output kode ini:",kode:"Promise.all([1, Promise.resolve(2), new Promise(r => setTimeout(() => r(3), 10))])\n  .then(hasil => console.log(hasil.join(\"+\")));",o:["1+2+3","3","1","Error"],a:0,vr:"js",
 e:"Promise.all menunggu SEMUA selesai dan mengembalikan hasil sesuai urutan awal (bukan urutan selesai). Nilai biasa (1) dianggap sudah selesai. Cocok untuk memuat beberapa API sekaligus secara paralel. Kalau satu gagal, semuanya gagal; untuk tetap mendapat hasil sebagian pakai Promise.allSettled.",
 w:[null,"Semua hasil dikumpulkan.","Semua hasil dikumpulkan.","Nilai biasa boleh dicampur."]},
{k:"async",t:"mc",lv:2,q:"Output kode ini:",kode:"async function ambil() {\n  return 5;\n}\nconsole.log(ambil() instanceof Promise);",o:["true","false","5","undefined"],a:0,vr:"js",
 e:"Fungsi async SELALU mengembalikan Promise, walaupun yang ditulis return 5. Untuk mendapat 5: await ambil() (di dalam fungsi async) atau ambil().then(n => …).",
 w:[null,"async membungkus hasilnya dalam Promise.","Yang dikembalikan Promise berisi 5.","Ada nilai kembaliannya."]},
{k:"async",t:"mc",lv:2,q:"Output kode ini:",kode:"const tunggu = (ms, nilai) => new Promise(r => setTimeout(() => r(nilai), ms));\nasync function main() {\n  const a = await tunggu(20, 1);\n  const b = await tunggu(10, 2);\n  console.log(a + b);\n}\nmain();",o:["3","12","NaN","undefined"],a:0,vr:"js",
 e:"await menunggu Promise selesai lalu memberi nilainya. Dua await berurutan menunggu satu per satu (total ±30 ms). Kalau keduanya tidak saling bergantung, lebih cepat dengan const [a, b] = await Promise.all([...]).",
 w:[null,"a dan b angka, jadi dijumlah.","Keduanya angka valid.","await memberi nilai Promise."]},
{k:"async",t:"mc",lv:3,q:"Output kode ini:",kode:"Promise.allSettled([Promise.resolve(1), Promise.reject(new Error(\"x\"))])\n  .then(r => console.log(r.map(h => h.status).join(\",\")));",o:["fulfilled,rejected","1,x","Error: x","fulfilled"],a:0,vr:"js",
 e:"allSettled menunggu semua dan TIDAK gagal walaupun ada yang reject. Tiap hasil berbentuk { status: \"fulfilled\", value } atau { status: \"rejected\", reason }. Cocok untuk dashboard yang memuat beberapa widget: satu gagal, yang lain tetap tampil.",
 w:[null,"Yang dicetak status masing-masing.","allSettled tidak melempar error.","Ada dua hasil."]},
{k:"async",t:"mc",lv:2,q:"localStorage.setItem(\"skor\", 10); lalu localStorage.getItem(\"skor\") + 5 menghasilkan…",o:["\"105\" (karena localStorage menyimpan teks)","15","10","Error"],a:0,
 e:"localStorage hanya menyimpan TEKS. Angka dan objek harus diubah: Number(localStorage.getItem(\"skor\")) atau JSON.parse untuk objek (simpan dengan JSON.stringify).",
 w:[null,"Nilai yang dibaca berupa teks, jadi digabung.","5 ikut digabung.","Tidak error, hanya hasilnya teks."]},
{k:"scope",t:"mc",lv:3,q:"Output kode ini:",kode:"let pesan = \"luar\";\nfunction tampil() {\n  console.log(pesan);\n}\nfunction uji() {\n  let pesan = \"dalam\";\n  tampil();\n}\nuji();",o:["luar","dalam","undefined","Error"],a:0,vr:"js",
 e:"JavaScript memakai lexical scope: fungsi melihat variabel dari tempat ia DITULIS, bukan dari tempat ia DIPANGGIL. tampil ditulis di tingkat luar, jadi melihat pesan = \"luar\".",
 w:[null,"Tempat pemanggilan tidak menentukan scope.","pesan luar sudah berisi.","Kodenya sah."]},
{k:"event",t:"mc",lv:1,q:"Membaca isi kotak input saat event input terjadi:",o:["e.target.value","e.value","e.target.text","e.input"],a:0,
 e:"e.target adalah elemen input-nya; .value berisi teks yang diketik (selalu string). Untuk checkbox pakai .checked, untuk select pakai .value dari option terpilih.",
 w:[null,"Event object tidak punya value.","Properti text tidak ada pada input.","Properti input tidak ada."]},
{k:"event",t:"mc",lv:2,q:"Listener submit sebaiknya dipasang pada…",o:["Elemen <form>, bukan pada tombolnya","Tombol submit","document.body","Setiap input"],a:0,
 e:"Form bisa dikirim lewat klik tombol ATAU menekan Enter di kotak input. Event submit pada form menangkap keduanya; listener click pada tombol melewatkan Enter.",
 w:[null,"Enter di input tidak terdeteksi.","Terlalu luas.","Input tidak menerima event submit."]},
{k:"event",t:"mc",lv:3,q:"Satu listener scroll memperbarui posisi elemen setiap kali digulir dan halaman terasa berat. Perbaikan yang paling tepat:",o:["Kurangi kerja per event (throttle atau requestAnimationFrame), atau ganti dengan IntersectionObserver bila tujuannya mendeteksi elemen terlihat","Pasang lebih banyak listener scroll","Ganti ke setInterval 1 ms","Hapus semua CSS"],a:0,
 e:"Event scroll bisa terpicu puluhan kali per detik. Throttle membatasi frekuensi, requestAnimationFrame menyelaraskan dengan bingkai layar, dan IntersectionObserver memberi tahu browser 'kabari saya saat elemen ini terlihat' tanpa memantau scroll sama sekali.",
 w:[null,"Menambah beban.","Lebih boros lagi.","CSS bukan penyebabnya."]},
{k:"kelas",t:"mc",lv:2,q:"Output kode ini:",kode:"class Kalimat {\n  constructor() { this.isi = \"\"; }\n  tambah(kata) {\n    this.isi += kata;\n    return this;\n  }\n}\nconsole.log(new Kalimat().tambah(\"ko\").tambah(\"pi\").isi);",o:["kopi","ko","pi","undefined"],a:0,vr:"js",
 e:"Method yang return this bisa dirangkai (method chaining), seperti \"teks\".trim().toUpperCase() atau jQuery. Setiap pemanggilan mengembalikan objek yang sama.",
 w:[null,"Dua kata digabung.","Kata pertama juga tersimpan.","isi berisi teks gabungan."]},
{k:"kelas",t:"mc",lv:2,q:"Output kode ini:",kode:"class Uang {\n  constructor(n) { this.n = n; }\n  toString() { return \"Rp\" + this.n.toLocaleString(\"id-ID\"); }\n}\nconsole.log(`Total: ${new Uang(18000)}`);",o:["Total: Rp18.000","Total: [object Object]","Total: 18000","Error"],a:0,vr:"js",
 e:"Saat objek diubah menjadi teks (template literal, + dengan string), JavaScript memanggil toString(). Tanpa method ini hasilnya [object Object].",
 w:[null,"toString sudah ditimpa.","Format rupiah dipakai.","Kodenya sah."]},
{k:"kelas",t:"mc",lv:3,q:"Output kode ini:",kode:"const konfig = Object.freeze({ tema: \"terang\" });\nkonfig.tema = \"gelap\";\nconsole.log(konfig.tema);",o:["terang","gelap","undefined","Error di semua mode"],a:0,vr:"js",
 e:"Object.freeze membekukan objek: properti tidak bisa diubah, ditambah, atau dihapus. Di mode biasa perubahan diabaikan diam-diam; di strict mode melempar TypeError. Pembekuan bersifat dangkal: objek di dalamnya masih bisa diubah.",
 w:[null,"Objek beku tidak berubah.","Properti tetap ada.","Di mode biasa tidak error, hanya diabaikan."]},
{k:"error",t:"mc",lv:2,q:"Output kode ini:",kode:"function a() { throw new Error(\"di a\"); }\nfunction b() { a(); }\ntry {\n  b();\n} catch (e) {\n  console.log(\"ditangkap: \" + e.message);\n}",o:["ditangkap: di a","Error tidak tertangkap","ditangkap: di b","undefined"],a:0,vr:"js",
 e:"Error 'naik' melewati rantai pemanggilan (a → b → pemanggil) sampai bertemu catch. Jadi cukup satu try/catch di tingkat atas untuk menangkap error dari fungsi-fungsi di bawahnya. Stack trace di console menunjukkan rantai itu.",
 w:[null,"try di luar menangkapnya.","Pesannya ditulis di a.","Pesan dicetak."]},
{k:"error",t:"mc",lv:2,q:"Output kode ini:",kode:"try {\n  JSON.parse(\"{\");\n} catch {\n  console.log(\"data rusak, pakai bawaan\");\n}",o:["data rusak, pakai bawaan","SyntaxError","{","Error: catch butuh parameter"],a:0,vr:"js",
 e:"Sejak ES2019, catch boleh ditulis tanpa (e) kalau objek error tidak dibutuhkan.",
 w:[null,"Error sudah ditangkap.","parse gagal.","Parameter catch opsional sejak ES2019."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(Array.from({ length: 4 }, (_, i) => i * i).join(\",\"));",o:["0,1,4,9","1,4,9,16","0,1,2,3","4"],a:0,vr:"js",
 e:"Array.from(sesuatu, fungsi) membuat array baru. { length: 4 } dianggap array kosong 4 tempat; fungsi menerima (nilai, indeks). Trik umum untuk membuat deret angka.",
 w:[null,"Indeks mulai dari 0.","Indeksnya dikuadratkan.","Hasilnya array 4 elemen."]},
{k:"modul",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(JSON.stringify({ dibuat: new Date(0) }));",o:["{\"dibuat\":\"1970-01-01T00:00:00.000Z\"}","{\"dibuat\":0}","{\"dibuat\":{}}","{}"],a:0,vr:"js",
 e:"Date diubah menjadi teks ISO 8601 (UTC). Saat dibaca lagi dengan JSON.parse, hasilnya TEKS, bukan Date; ubah kembali dengan new Date(teks).",
 w:[null,"Date tidak menjadi angka.","Date punya toJSON khusus.","Properti tetap ada."]},
{k:"modul",t:"mc",lv:2,q:"Di browser, import { rupiah } from \"./harga\" (tanpa .js) gagal dimuat. Kenapa?",o:["Browser butuh alamat file lengkap termasuk ekstensi .js; alat seperti Vite/Node yang biasanya menambahkannya","import tidak didukung browser","Nama fungsi harus diawali huruf kapital","Harus memakai require"],a:0,
 e:"Browser memperlakukan import seperti URL. Bundler (Vite, webpack) dan Node dengan pengaturan tertentu yang 'menebak' ekstensinya. Di browser murni, tulis \"./harga.js\".",
 w:[null,"Didukung sejak lama di browser modern.","Tidak ada aturan itu.","require bukan fitur browser."]},
{k:"frontend",t:"mc",lv:2,q:"Komponen React mengembalikan dua elemen berdampingan tanpa div pembungkus. Caranya:",o:["Bungkus dengan fragment <>…</>","Tidak mungkin","Pakai koma di antara keduanya","Return array tanpa key"],a:0,
 e:"JSX harus mengembalikan satu induk. Fragment <>…</> membungkus tanpa menambah elemen ke DOM, sehingga tidak merusak layout flex/grid atau struktur tabel.",
 w:[null,"Fragment menyelesaikannya.","Koma tidak sah di JSX.","Array butuh key untuk tiap elemen."]},
{k:"frontend",t:"mc",lv:2,q:"Menampilkan menu admin hanya jika pengguna admin, di JSX:",o:["{isAdmin && <MenuAdmin />}","<if isAdmin><MenuAdmin/></if>","{if (isAdmin) <MenuAdmin />}","<MenuAdmin show=\"isAdmin\" />"],a:0,
 e:"Di dalam { } JSX hanya boleh ekspresi, bukan pernyataan if. Pola umum: kondisi && elemen, atau kondisi ? A : B. Hati-hati: {jumlah && <Daftar/>} menampilkan angka 0 kalau jumlah 0; tulis {jumlah > 0 && …}.",
 w:[null,"Tag <if> tidak ada.","if pernyataan, tidak boleh di dalam { }.","Prop show tidak punya arti bawaan."]},
{k:"frontend",t:"mc",lv:3,q:"Input React yang nilainya dikendalikan state (controlled input) ditulis…",o:["<input value={nama} onChange={e => setNama(e.target.value)} />","<input value={nama} />","<input onChange={nama} />","<input defaultValue=\"nama\" state />"],a:0,
 e:"Pada controlled input, state adalah sumber kebenaran: value membaca dari state, onChange memperbarui state. Tanpa onChange, input menjadi terkunci (tidak bisa diketik) dan React memberi peringatan.",
 w:[null,"Tanpa onChange, input tidak bisa diketik.","onChange harus berupa fungsi.","Atribut state tidak ada."]}
);

SOAL_PYTHON.push(
{k:"operator",t:"mc",lv:2,q:"Output kode ini:",kode:"print(7 // 2, -7 // 2, 7 % 3)",o:["3 -4 1","3 -3 1","3.5 -3.5 1","3 -4 2"],a:0,vr:"py",
 e:"// adalah pembagian bulat yang membulatkan ke BAWAH (menuju minus tak hingga), bukan sekadar membuang desimal. -3.5 dibulatkan ke bawah menjadi -4. % memberi sisa bagi.",
 w:[null,"-3.5 dibulatkan ke bawah, yaitu -4.","// menghasilkan bilangan bulat.","7 = 2×3 + 1."]},
{k:"operator",t:"mc",lv:2,q:"Output kode ini:",kode:"print(True + True, 3 == 3.0, 0.1 + 0.2 == 0.3)",o:["2 True False","True True True","2 False False","Error"],a:0,vr:"py",
 e:"bool adalah turunan int: True = 1, False = 0, jadi True + True = 2 (berguna untuk menghitung: sum(n > 70 for n in nilai)). 3 dan 3.0 sama nilainya. 0.1 + 0.2 tidak tepat 0.3 di komputer; bandingkan pecahan dengan math.isclose.",
 w:[null,"True + True dijumlah sebagai angka.","Nilai int dan float yang sama dianggap sama.","Kodenya sah."]},
{k:"kondisi",t:"mc",lv:1,q:"Output kode ini:",kode:"x = 5\nprint(1 < x < 10, 10 < x < 20)",o:["True False","False False","True True","Error"],a:0,vr:"py",
 e:"Python mendukung perbandingan berantai: 1 < x < 10 sama dengan (1 < x) and (x < 10). Lebih mudah dibaca untuk mengecek rentang.",
 w:[null,"5 ada di antara 1 dan 10.","5 tidak di antara 10 dan 20.","Perbandingan berantai sah di Python."]},
{k:"kondisi",t:"mc",lv:2,q:"Output kode ini:",kode:"print(bool(\"\"), bool(\"0\"), bool([]), bool(0.0))",o:["False True False False","False False False False","True True False False","False True True False"],a:0,vr:"py",
 e:"Nilai yang dianggap salah (falsy): False, None, 0, 0.0, \"\" (teks kosong), [], {}, set(). Semua yang lain benar, termasuk teks \"0\" dan \" \" (berisi spasi). Karena itu if daftar: berarti 'jika daftar tidak kosong'.",
 w:[null,"\"0\" adalah teks berisi karakter, jadi True.","\"0\" bernilai True.","List kosong bernilai False."]},
{k:"kondisi",t:"mc",lv:2,q:"Output kode ini (Python 3.10+):",kode:"kode = 404\nmatch kode:\n    case 200 | 201:\n        print(\"Berhasil\")\n    case 404:\n        print(\"Tidak ditemukan\")\n    case _:\n        print(\"Lainnya\")",o:["Tidak ditemukan","Berhasil","Lainnya","Error"],a:0,vr:"py",
 e:"match-case adalah pencocokan pola. | berarti 'atau', _ adalah penangkap sisanya (seperti default/else). Tidak ada fall-through seperti switch di JavaScript.",
 w:[null,"404 bukan 200 atau 201.","404 punya case sendiri.","match sah sejak Python 3.10."]},
{k:"kondisi",t:"mc",lv:1,q:"Output kode ini:",kode:"stok = 0\nstatus = \"tersedia\" if stok > 0 else \"habis\"\nprint(status)",o:["habis","tersedia","0","Error"],a:0,vr:"py",
 e:"Ekspresi kondisional satu baris: nilai_jika_benar if syarat else nilai_jika_salah. Urutannya berbeda dari JavaScript (syarat ? a : b).",
 w:[null,"stok tidak lebih dari 0.","Yang dicetak status.","Bentuk ini sah."]},
{k:"error",t:"mc",lv:2,q:"Apa yang dicetak (urut)?",kode:"try:\n    x = int(\"5\")\nexcept ValueError:\n    print(\"gagal\")\nelse:\n    print(\"berhasil\", x)\nfinally:\n    print(\"selesai\")",o:["berhasil 5 lalu selesai","gagal lalu selesai","berhasil 5","selesai"],a:0,vr:"py",vx:"berhasil 5\nselesai",
 e:"• try: kode yang mungkin gagal.\n• except: jalan kalau gagal.\n• else: jalan kalau TIDAK ada error (taruh lanjutan di sini agar try tetap kecil).\n• finally: selalu jalan.",
 w:[null,"int(\"5\") berhasil.","finally juga jalan.","else juga jalan karena tidak ada error."]},
{k:"error",t:"mc",lv:2,q:"Output kode ini:",kode:"def atur_umur(n):\n    if n < 0:\n        raise ValueError(\"umur tidak boleh negatif\")\n    return n\n\ntry:\n    atur_umur(-1)\nexcept ValueError as e:\n    print(\"Ditolak:\", e)",o:["Ditolak: umur tidak boleh negatif","Ditolak: ValueError","-1","Error tidak tertangkap"],a:0,vr:"py",
 e:"raise melempar error buatan sendiri dengan pesan jelas. as e menyimpan objek error; mencetak e menampilkan pesannya.",
 w:[null,"Mencetak e menampilkan pesannya.","Fungsi berhenti di raise.","Error ditangkap except."]},
{k:"error",t:"mc",lv:2,q:"Apa yang dicetak?",kode:"for pembagi in [2, 0, \"a\"]:\n    try:\n        print(10 / pembagi)\n    except ZeroDivisionError:\n        print(\"bagi nol\")\n    except TypeError:\n        print(\"bukan angka\")",o:["5.0, bagi nol, bukan angka","5, bagi nol, bukan angka","5.0 lalu program berhenti","bagi nol, bagi nol, bagi nol"],a:0,vr:"py",vx:"5.0\nbagi nol\nbukan angka",
 e:"Satu try bisa punya beberapa except untuk jenis error berbeda, diperiksa dari atas. Tangkap error yang spesifik; except Exception yang terlalu luas bisa menyembunyikan bug lain.",
 w:[null,"/ selalu menghasilkan float.","Error ditangkap, perulangan lanjut.","Tiap pembagi menghasilkan hal berbeda."]},
{k:"oop",t:"mc",lv:2,q:"Output kode ini:",kode:"class Hewan:\n    def suara(self):\n        return \"...\"\n\nclass Kucing(Hewan):\n    def suara(self):\n        return \"meong \" + super().suara()\n\nprint(Kucing().suara())",o:["meong ...","meong","...","Error"],a:0,vr:"py",
 e:"Kucing menimpa (override) suara, lalu memanggil versi induk dengan super().suara(). Pola ini dipakai untuk menambah perilaku tanpa menulis ulang semuanya (di Odoo: memperluas method create/write).",
 w:[null,"super() memanggil versi induk juga.","Kucing menimpa suara.","Kodenya sah."]},
{k:"oop",t:"mc",lv:2,q:"Kode def hitung(): di dalam class lalu dipanggil obj.hitung() memunculkan TypeError: hitung() takes 0 positional arguments but 1 was given. Penyebabnya:",o:["Lupa menulis self sebagai parameter pertama","Nama method salah","Class belum diimpor","Python versi lama"],a:0,
 e:"Saat memanggil obj.hitung(), Python diam-diam mengirim obj sebagai argumen pertama. Method harus menerimanya: def hitung(self):.",
 w:[null,"Namanya ditemukan; masalahnya argumen.","Class sudah ada.","Berlaku di semua versi Python 3."]},
{k:"modul",t:"mc",lv:1,q:"Output kode ini:",kode:"import math as m\nfrom math import pi\nprint(m.floor(2.7), round(pi, 2))",o:["2 3.14","3 3.14","2.7 3.1416","Error"],a:0,vr:"py",
 e:"Tiga gaya import:\n• import math → math.floor(…)\n• import math as m → nama pendek m.floor(…) (pola umum: import pandas as pd)\n• from math import pi → langsung pi\nHindari from modul import *, karena nama bisa bertabrakan diam-diam.",
 w:[null,"floor membulatkan ke bawah.","round(pi, 2) dua desimal.","Kedua import sah."]},
{k:"modul",t:"mc",lv:2,q:"Output kode ini saat file dijalankan langsung dengan python file.py:",kode:"print(__name__)",o:["__main__","file","None","Error"],a:0,vr:"py",
 e:"Saat dijalankan langsung, __name__ bernilai \"__main__\". Saat di-import dari file lain, berisi nama modulnya (\"file\"). Itu dasar pola if __name__ == \"__main__\":.",
 w:[null,"Nama modul hanya muncul saat di-import.","__name__ selalu berisi teks.","Variabel ini selalu ada."]},
{k:"modul",t:"mc",lv:1,q:"Kamu membuat file hitung.py berisi def tambah(a, b). Cara memakainya dari main.py di folder yang sama:",o:["import hitung lalu hitung.tambah(2, 3)","include hitung.py","require(\"hitung\")","from hitung.py import tambah"],a:0,
 e:"Setiap file .py adalah modul. Nama modul = nama file tanpa .py. Jangan menamai filemu sama dengan modul bawaan (misalnya random.py atau pandas.py), karena import akan memuat filemu sendiri.",
 w:[null,"include tidak ada di Python.","Itu gaya Node.js.","Nama modul tanpa .py."]},
{k:"modul",t:"mc",lv:2,q:"Perintah yang paling aman untuk memasang paket agar masuk ke Python yang sedang kamu pakai:",o:["python -m pip install requests","pip3.12 install di mana saja","download zip lalu salin manual","import requests --install"],a:0,
 e:"Di komputer dengan beberapa versi Python, perintah pip bisa milik Python lain. python -m pip memastikan paket masuk ke interpreter yang sama dengan yang menjalankan kodemu.",
 w:[null,"Bisa salah sasaran kalau ada banyak Python.","Rawan salah dan tanpa dependensi.","Sintaks itu tidak ada."]},
{k:"modul",t:"mc",lv:1,q:"Fungsi bawaan untuk melihat dokumentasi singkat sebuah fungsi atau modul langsung di Python:",o:["help(len)","doc(len)","man len","info(len)"],a:0,
 e:"help() menampilkan dokumentasi; dir(objek) menampilkan daftar atribut dan method yang dimilikinya. Keduanya berguna saat menjelajah modul baru di terminal Python atau Jupyter.",
 w:[null,"Fungsi doc tidak ada.","man perintah terminal Linux, bukan Python.","Fungsi info tidak ada."]},
{k:"comprehension",t:"mc",lv:3,q:"Output kode ini:",kode:"matriks = [[1, 2], [3], [4, 5, 6]]\nrata = [x for baris in matriks for x in baris]\nprint(rata)",o:["[1, 2, 3, 4, 5, 6]","[[1, 2], [3], [4, 5, 6]]","[3, 1, 3]","Error"],a:0,vr:"py",
 e:"Comprehension bersarang dibaca seperti for bertingkat dengan urutan yang sama: for baris in matriks, lalu for x in baris. Hasilnya meratakan list dua dimensi.",
 w:[null,"Isinya sudah diratakan.","Yang diambil isi, bukan panjang.","Bentuk bersarang sah."]},
{k:"fungsilanjut",t:"mc",lv:3,q:"Output kode ini:",kode:"def pencacah():\n    n = 0\n    def naik():\n        nonlocal n\n        n += 1\n        return n\n    return naik\n\nc = pencacah()\nc()\nprint(c())",o:["2","1","0","UnboundLocalError"],a:0,vr:"py",
 e:"nonlocal memberi izin fungsi dalam mengubah variabel milik fungsi luar (closure). Tanpa nonlocal, n += 1 akan memicu UnboundLocalError.",
 w:[null,"c() dipanggil dua kali.","n bertambah.","nonlocal mencegah error itu."]},
{k:"fungsilanjut",t:"mc",lv:3,q:"Apa yang dicetak?",kode:"def kirim(email, *, salin=False):\n    return f\"{email} salin={salin}\"\n\ntry:\n    print(kirim(\"a@b.id\", True))\nexcept TypeError:\n    print(\"wajib ditulis salin=True\")",o:["wajib ditulis salin=True","a@b.id salin=True","a@b.id salin=False","SyntaxError"],a:0,vr:"py",
 e:"Tanda * sendirian di daftar parameter membuat semua parameter setelahnya keyword-only: wajib ditulis dengan nama. Ini mencegah panggilan membingungkan seperti kirim(x, True, False).",
 w:[null,"True tidak boleh dikirim tanpa nama.","Panggilannya gagal sebelum berjalan.","Sintaks * sah."]},
{k:"iterator",t:"mc",lv:2,q:"Output kode ini:",kode:"z = zip([1, 2], [\"a\", \"b\"])\nprint(list(z), list(z))",o:["[(1, 'a'), (2, 'b')] []","[(1, 'a'), (2, 'b')] [(1, 'a'), (2, 'b')]","[] []","Error"],a:0,vr:"py",
 e:"zip, map, filter, enumerate, dan file mengembalikan iterator yang hanya bisa dihabiskan sekali. Simpan sebagai list dulu kalau perlu dipakai berulang.",
 w:[null,"Iterator kedua kalinya sudah kosong.","Yang pertama berisi.","Kodenya sah."]},
{k:"iterator",t:"mc",lv:2,q:"Output kode ini:",kode:"stok = {\"kopi\": 5, \"teh\": 2}\nfor nama, jumlah in stok.items():\n    print(nama, jumlah)",o:["kopi 5 lalu teh 2","kopi lalu teh","5 lalu 2","('kopi', 5) ('teh', 2)"],a:0,vr:"py",vx:"kopi 5\nteh 2",
 e:"Perulangan langsung pada dict memberi kuncinya saja. .items() memberi pasangan (kunci, nilai) yang langsung dibongkar ke dua variabel. .values() memberi nilainya saja. Sejak Python 3.7 urutan kunci sesuai urutan dimasukkan.",
 w:[null,".items() memberi kunci dan nilai.","Nama juga dicetak.","Pasangan sudah dibongkar ke dua variabel."]},
{k:"iterator",t:"mc",lv:3,q:"Output kode ini:",kode:"class Hitung:\n    def __init__(self, n):\n        self.n = n\n\n    def __iter__(self):\n        yield from range(1, self.n + 1)\n\nprint(list(Hitung(3)), sum(Hitung(4)))",o:["[1, 2, 3] 10","[0, 1, 2] 6","Error: objek tidak bisa diulang","[1, 2, 3] 6"],a:0,vr:"py",
 e:"Class yang punya __iter__ bisa dipakai di for, list(), sum(), dan sebagainya. Menulis __iter__ sebagai generator (yield) adalah cara paling ringkas. Setiap pemanggilan __iter__ membuat generator baru, jadi objeknya bisa diulang berkali-kali.",
 w:[null,"range dimulai dari 1.","__iter__ membuatnya bisa diulang.","1+2+3+4 = 10."]},
{k:"oop2",t:"mc",lv:2,q:"Output kode ini:",kode:"class Produk:\n    def __init__(self, nama):\n        self.nama = nama\n\n    def __repr__(self):\n        return f\"Produk({self.nama!r})\"\n\nprint([Produk(\"kopi\"), Produk(\"teh\")])",o:["[Produk('kopi'), Produk('teh')]","[<Produk object>, <Produk object>]","['kopi', 'teh']","Error"],a:0,vr:"py",
 e:"Objek di dalam list ditampilkan dengan __repr__ (bukan __str__). Kebiasaan baik: __repr__ menampilkan bentuk yang mirip cara membuat objeknya. !r di f-string memakai repr sehingga teks diberi tanda kutip.",
 w:[null,"__repr__ sudah ditulis.","Yang tampil hasil __repr__.","Kodenya sah."]},
{k:"oop2",t:"mc",lv:3,q:"Output kode ini:",kode:"class Nilai:\n    def __init__(self, n):\n        self.n = n\n\n    def __lt__(self, lain):\n        return self.n < lain.n\n\ndata = [Nilai(80), Nilai(65), Nilai(92)]\nprint([x.n for x in sorted(data)], max(data).n)",o:["[65, 80, 92] 92","[80, 65, 92] 80","Error: tidak bisa dibandingkan","[92, 80, 65] 65"],a:0,vr:"py",
 e:"__lt__ (less than) mendefinisikan arti <. Setelah itu sorted, min, dan max bisa dipakai untuk objekmu. Modul functools.total_ordering bisa melengkapi <=, >, >= otomatis.",
 w:[null,"sorted mengurutkan naik.","__lt__ membuat perbandingan bisa dilakukan.","Urutan bawaan sorted naik."]},
{k:"oop2",t:"mc",lv:2,q:"Output kode ini:",kode:"class Rak:\n    def __init__(self):\n        self.isi = [\"buku\", \"pena\", \"map\"]\n\n    def __getitem__(self, i):\n        return self.isi[i]\n\nr = Rak()\nprint(r[0], r[-1])",o:["buku map","buku pena","Error: objek tidak bisa diindeks","0 -1"],a:0,vr:"py",
 e:"__getitem__ membuat objek bisa diakses dengan kurung siku, termasuk indeks negatif dan slice karena diteruskan ke list di dalamnya. Begitulah df[\"kolom\"] di pandas bekerja.",
 w:[null,"-1 berarti item terakhir.","__getitem__ membuatnya bisa diindeks.","Yang dikembalikan isinya."]},
{k:"stdlib",t:"mc",lv:2,q:"Output kode ini:",kode:"import statistics as st\n\nprint(st.mean([2, 4, 9]), st.median([3, 1, 4, 2]))",o:["5 2.5","5 3","5.0 2","15 2.5"],a:0,vr:"py",
 e:"statistics.mean = rata-rata, median = nilai tengah setelah diurutkan. Untuk jumlah data genap, median adalah rata-rata dua nilai tengah: (2 + 3) / 2 = 2.5. Ada juga mode, stdev, quantiles.",
 w:[null,"Median data genap adalah rata-rata dua nilai tengah.","Median 2.5, mean 5.","Itu jumlah, bukan rata-rata."]},
{k:"stdlib",t:"mc",lv:2,q:"Output kode ini:",kode:"from collections import deque\n\nterakhir = deque(maxlen=3)\nfor halaman in [\"beranda\", \"produk\", \"keranjang\", \"bayar\"]:\n    terakhir.append(halaman)\nterakhir.appendleft(\"awal\")\nprint(list(terakhir))",o:["['awal', 'produk', 'keranjang']","['produk', 'keranjang', 'bayar']","['awal', 'beranda', 'produk']","['beranda', 'produk', 'keranjang', 'bayar', 'awal']"],a:0,vr:"py",
 e:"deque dengan maxlen membuang item dari ujung seberang saat penuh.\n1. Setelah 4 append: ['produk', 'keranjang', 'bayar'] (beranda terbuang).\n2. appendleft('awal') menambah di kiri, sehingga 'bayar' di kanan terbuang.",
 w:[null,"appendleft menambah 'awal' dan membuang ujung kanan.","beranda sudah terbuang lebih dulu.","maxlen membatasi 3 item."]},
{k:"kerja",t:"mc",lv:1,q:"Output kode ini:",kode:"def diskon(harga):\n    \"\"\"Kembalikan harga setelah diskon 10 persen.\"\"\"\n    return harga * 0.9\n\nprint(diskon.__doc__)",o:["Kembalikan harga setelah diskon 10 persen.","None","diskon","Error"],a:0,vr:"py",
 e:"Teks bertanda kutip tiga tepat di bawah def adalah docstring. Ia tersimpan di __doc__, tampil di help(diskon), dan muncul sebagai tooltip di VS Code.",
 w:[null,"Docstring sudah ditulis.","Yang dicetak isi docstring.","Kodenya sah."]},
{k:"kerja",t:"mc",lv:2,q:"Alat seperti ruff atau flake8 (linter) berfungsi untuk…",o:["Menemukan kesalahan dan gaya penulisan yang buruk tanpa menjalankan program","Menjalankan program lebih cepat","Mengubah Python jadi .exe","Memasang paket"],a:0,
 e:"Linter menangkap variabel tidak terpakai, import yang hilang, nama salah ketik, dan pelanggaran PEP 8. ruff juga bisa memformat kode (ruff format). Pasang ekstensinya di VS Code agar diperiksa saat menyimpan file.",
 w:[null,"Kecepatan tidak berubah.","Itu PyInstaller.","Itu pip."]},
{k:"kerja",t:"mc",lv:2,q:"Kenapa logging lebih baik daripada print untuk aplikasi yang berjalan lama (server, otomasi)?",o:["Bisa diberi tingkat (DEBUG, INFO, WARNING, ERROR), waktu, dan disimpan ke file tanpa mengubah kode","print tidak bisa mencetak teks","logging lebih cepat dibaca manusia","print dilarang di Python 3"],a:0,
 e:"import logging; logging.basicConfig(level=logging.INFO, format=\"%(asctime)s %(levelname)s %(message)s\"). Lalu logging.info(\"mulai\"), logging.error(\"gagal\"). Di produksi, tingkat DEBUG bisa dimatikan tanpa menghapus baris-barisnya.",
 w:[null,"print bisa mencetak teks.","Bukan soal kecepatan membaca.","print tetap ada."]},
{k:"kerja",t:"mc",lv:3,q:"Di pytest, cara menguji bahwa fungsi bagi(1, 0) MELEMPAR ZeroDivisionError:",o:["with pytest.raises(ZeroDivisionError): bagi(1, 0)","assert bagi(1, 0) == ZeroDivisionError","try: bagi(1, 0) except: pass","assert raises(bagi)"],a:0,
 e:"pytest.raises sebagai context manager: tes lulus kalau error yang disebut terjadi di dalam blok, dan gagal kalau tidak terjadi. Menguji jalur error sama pentingnya dengan menguji jalur normal.",
 w:[null,"Error membuat assert tidak pernah dievaluasi.","Menelan error tanpa menguji apa pun.","Fungsi itu tidak ada."]},
{k:"proyek",t:"mc",lv:1,q:"Menghitung huruf vokal. Output kode ini:",kode:"kata = \"Informatika\"\nprint(sum(1 for c in kata.lower() if c in \"aiueo\"))",o:["5","4","6","11"],a:0,vr:"py",
 e:"i-n-f-o-r-m-a-t-i-k-a → vokal: i, o, a, i, a = 5. lower() dulu agar huruf I kapital ikut terhitung. sum(1 for … if …) adalah pola menghitung yang memenuhi syarat.",
 w:[null,"I kapital ikut terhitung setelah lower().","Ada 5 vokal.","Itu jumlah semua huruf."]},
{k:"proyek",t:"mc",lv:2,q:"Angka terbesar kedua (tanpa duplikat). Output kode ini:",kode:"angka = [4, 9, 9, 2, 7]\nprint(sorted(set(angka))[-2])",o:["7","9","4","2"],a:0,vr:"py",
 e:"set membuang duplikat (9 hanya satu), sorted mengurutkan naik [2, 4, 7, 9], [-2] mengambil kedua dari belakang. Tanpa set, jawabannya 9, yang biasanya bukan maksud soal.",
 w:[null,"Duplikat 9 dibuang lebih dulu.","4 adalah terbesar ketiga.","2 yang terkecil."]},
{k:"proyek",t:"mc",lv:1,q:"Cek anagram. Output kode ini:",kode:"print(sorted(\"kasur\") == sorted(\"rusak\"), sorted(\"kopi\") == sorted(\"kapi\"))",o:["True False","True True","False False","False True"],a:0,vr:"py",
 e:"Dua kata adalah anagram jika hurufnya sama persis dengan jumlah yang sama. Mengurutkan huruf keduanya lalu membandingkan adalah cara paling sederhana. Alternatif: Counter(a) == Counter(b).",
 w:[null,"kopi dan kapi berbeda huruf.","kasur dan rusak hurufnya sama.","Terbalik."]},
{k:"proyek",t:"mc",lv:3,q:"Daftar bilangan prima di bawah 20. Output kode ini:",kode:"prima = [n for n in range(2, 20)\n         if all(n % d for d in range(2, int(n ** 0.5) + 1))]\nprint(prima)",o:["[2, 3, 5, 7, 11, 13, 17, 19]","[1, 2, 3, 5, 7, 11, 13, 17, 19]","[3, 5, 7, 9, 11, 13, 15, 17, 19]","[2, 3, 5, 7, 9, 11, 13, 17, 19]"],a:0,vr:"py",
 e:"n % d bernilai 0 (False) kalau d membagi habis n. all(...) benar kalau TIDAK ada pembagi. Cukup memeriksa sampai akar n, karena pembagi yang lebih besar pasti berpasangan dengan yang lebih kecil. Untuk 2 dan 3, range-nya kosong dan all([]) = True.",
 w:[null,"1 bukan bilangan prima dan range mulai dari 2.","9 dan 15 bukan prima.","9 = 3 × 3, bukan prima."]}
);

// ============ PELENGKAP MATERI ============
// Aturan KodeQuiz: setiap soal harus dijelaskan dulu di materi babnya. Soal tambahan di atas
// menanyakan beberapa hal yang belum ada di materi lama, jadi materinya dilengkapi di sini.
function lengkapiMateri(daftar, k, html) {
  const bab = daftar.find(m => m.k === k);
  if (!bab) throw new Error("bab tidak ada: " + k);
  bab.materi += '<h4 class="pelengkap">Pelengkap materi</h4>' + html;
}

lengkapiMateri(MATERI_HTML, "struktur", `
<h4>Tag tanpa penutup (void element)</h4>
<p>Sebagian tag tidak membungkus isi apa pun, jadi tidak punya tag penutup: <code>&lt;br&gt;</code> (pindah baris), <code>&lt;hr&gt;</code> (garis pemisah), <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>. Semua tag lain wajib ditutup.</p>
<h4>Tag bersarang dan atribut</h4>
<p>Tag boleh berada di dalam tag lain (bersarang), seperti kotak di dalam kotak. Aturannya: <b>yang dibuka terakhir ditutup pertama</b>.</p>
<pre><code>&lt;p&gt;Diskon &lt;strong&gt;50%&lt;/strong&gt; hari ini&lt;/p&gt;      ✓ benar
&lt;p&gt;Diskon &lt;strong&gt;50%&lt;/p&gt;&lt;/strong&gt;             ✗ bersilang</code></pre>
<p><b>Atribut</b> adalah keterangan tambahan yang selalu ditulis di <b>tag pembuka</b>, dengan pola <code>nama="nilai"</code>, dipisah spasi: <code>&lt;img src="logo.png" alt="Logo toko" width="120"&gt;</code>.</p>
<h4>Spasi di HTML</h4>
<p>Browser meringkas spasi, tab, dan baris baru yang berurutan menjadi <b>satu spasi</b>. Karena itu indentasi kode tidak mengubah tampilan. Untuk baris baru pakai <code>&lt;br&gt;</code> atau paragraf baru; untuk spasi apa adanya pakai <code>&lt;pre&gt;</code>.</p>
<h4>Alamat file (path) dan index.html</h4>
<table class="mini-pivot"><tr><th>Tulisan</th><th>Artinya</th></tr>
<tr><td><code>logo.png</code></td><td>file di folder yang sama dengan halaman HTML</td></tr>
<tr><td><code>img/logo.png</code></td><td>masuk ke folder <code>img</code> di sebelahnya</td></tr>
<tr><td><code>../logo.png</code></td><td>naik satu folder dulu</td></tr>
<tr><td><code>/img/logo.png</code></td><td>dihitung dari akar situs</td></tr></table>
<p>Jangan pakai alamat komputermu sendiri (<code>C:\\Users\\…</code>), karena tidak ada di komputer pengunjung. Halaman utama diberi nama <code>index.html</code>: server membukanya otomatis saat alamat folder dikunjungi.</p>
<div class="catatan">Ragu HTML-mu benar? Tempel ke <b>W3C Markup Validator</b> (validator.w3.org). Ia menunjukkan tag yang lupa ditutup atau atribut yang salah, lengkap dengan nomor barisnya. Tag paling luar seluruh dokumen adalah <code>&lt;html lang="id"&gt;</code>.</div>
`);

lengkapiMateri(MATERI_HTML, "teks", `
<h4>Mengatur penomoran dan sub-daftar</h4>
<pre><code>&lt;ol type="A" start="3"&gt;     &lt;!-- mulai dari C --&gt;
  &lt;li&gt;Persiapan
    &lt;ul&gt;                        &lt;!-- sub-daftar DI DALAM li --&gt;
      &lt;li&gt;Unduh data&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ol&gt;</code></pre>
<p><code>type</code>: <code>1</code>, <code>A</code>, <code>a</code>, <code>I</code>, <code>i</code>. <code>start</code>: urutan awal. Anak langsung <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> hanya boleh <code>&lt;li&gt;</code>.</p>
<h4>Kutipan dan kode</h4>
<ul><li><code>&lt;blockquote&gt;</code>: kutipan panjang berbentuk blok (biasanya menjorok).</li><li><code>&lt;q&gt;</code>: kutipan pendek di tengah kalimat; browser menambah tanda kutip.</li><li><code>&lt;cite&gt;</code>: judul karya yang dikutip.</li><li><code>&lt;pre&gt;&lt;code&gt;…&lt;/code&gt;&lt;/pre&gt;</code>: potongan kode yang spasi dan baris barunya dipertahankan.</li></ul>
`);

lengkapiMateri(MATERI_HTML, "media", `
<h4>Tautan khusus</h4>
<table class="mini-pivot"><tr><th>href</th><th>Hasil</th></tr>
<tr><td><code>href="#kontak"</code></td><td>menggulir ke elemen ber-<code>id="kontak"</code> di halaman yang sama</td></tr>
<tr><td><code>href="tel:+6281234567890"</code></td><td>membuka aplikasi telepon di HP</td></tr>
<tr><td><code>href="mailto:nama@mail.com"</code></td><td>membuka aplikasi email</td></tr>
<tr><td><code>target="_blank" rel="noopener"</code></td><td>membuka di tab baru dengan aman</td></tr></table>
<h4>Video, gambar berketerangan, dan alt kosong</h4>
<pre><code>&lt;video src="demo.mp4" controls poster="sampul.jpg"&gt;&lt;/video&gt;   &lt;!-- controls = tombol putar/jeda --&gt;

&lt;figure&gt;
  &lt;img src="grafik.png" alt="Penjualan naik 41% dari Januari ke Juni"&gt;
  &lt;figcaption&gt;Gambar 1. Penjualan semester pertama&lt;/figcaption&gt;
&lt;/figure&gt;

&lt;img src="ornamen.svg" alt=""&gt;   &lt;!-- hiasan murni: alt="" agar dilewati screen reader --&gt;</code></pre>
`);

lengkapiMateri(MATERI_HTML, "form", `
<h4>Atribut name: yang benar-benar dikirim</h4>
<p>Data yang terkirim ke server berbentuk pasangan <b>name=nilai</b>. Input tanpa <code>name</code> <b>tidak ikut terkirim</b>. <code>id</code> hanya untuk label, CSS, dan JavaScript.</p>
<pre><code>&lt;input id="email" name="email" type="email" autocomplete="email" required&gt;</code></pre>
<h4>Validasi bawaan</h4>
<table class="mini-pivot"><tr><th>Atribut</th><th>Contoh</th><th>Arti</th></tr>
<tr><td><code>required</code></td><td><code>&lt;input required&gt;</code></td><td>wajib diisi</td></tr>
<tr><td><code>minlength</code> / <code>maxlength</code></td><td><code>minlength="8"</code></td><td>panjang teks</td></tr>
<tr><td><code>min</code> / <code>max</code> / <code>step</code></td><td><code>type="number" min="1" max="10"</code></td><td>batas angka</td></tr>
<tr><td><code>pattern</code></td><td><code>pattern="08[0-9]{8,11}"</code></td><td>pola (regex)</td></tr>
<tr><td><code>autocomplete</code></td><td><code>autocomplete="email"</code></td><td>isi otomatis dari data tersimpan</td></tr></table>
<p>Validasi browser bisa dilewati orang iseng, jadi server tetap wajib memeriksa ulang.</p>
<h4>Radio, fieldset, dan legend</h4>
<pre><code>&lt;fieldset&gt;
  &lt;legend&gt;Ukuran&lt;/legend&gt;
  &lt;label&gt;&lt;input type="radio" name="ukuran" value="S"&gt; S&lt;/label&gt;
  &lt;label&gt;&lt;input type="radio" name="ukuran" value="M"&gt; M&lt;/label&gt;
  &lt;label&gt;&lt;input type="radio" name="ukuran" value="L"&gt; L&lt;/label&gt;
&lt;/fieldset&gt;</code></pre>
<p>Radio dengan <b>name sama</b> menjadi satu kelompok sehingga hanya satu yang bisa dipilih; yang dikirim adalah <code>value</code>-nya. <code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code> memberi judul kelompok yang dibacakan screen reader. Untuk nomor HP atau kode pos, pakai <code>type="tel"</code> atau <code>inputmode="numeric"</code>, bukan <code>type="number"</code>, agar nol di depan tidak hilang.</p>
`);

lengkapiMateri(MATERI_HTML, "a11y", `
<h4>Teks tautan yang bermakna</h4>
<p>Pengguna screen reader sering melompat dari tautan ke tautan tanpa membaca kalimat di sekitarnya. Tautan "klik di sini" atau "selengkapnya" yang diulang tidak berarti apa-apa. Tulis tujuannya: "Unduh laporan penjualan Maret (PDF, 2 MB)".</p>
`);

lengkapiMateri(MATERI_CSS, "lanjut", `
<h4>Arti min-width dan max-width di media query</h4>
<ul><li><code>@media (max-width: 600px)</code> = berlaku untuk layar <b>600px atau lebih kecil</b>.</li><li><code>@media (min-width: 768px)</code> = berlaku <b>mulai</b> 768px ke atas (pola mobile-first).</li></ul>
<h4>Nilai cadangan variabel dan kata kunci global</h4>
<pre><code>color: var(--aksen, #2f4cdd);   /* pakai #2f4cdd kalau --aksen tidak ada */
a { color: inherit; }            /* ikut warna induk */</code></pre>
<table class="mini-pivot"><tr><th>Kata kunci</th><th>Arti</th></tr>
<tr><td><code>inherit</code></td><td>ambil nilai dari induk</td></tr>
<tr><td><code>initial</code></td><td>nilai awal menurut spesifikasi CSS</td></tr>
<tr><td><code>unset</code></td><td>inherit kalau properti memang diwariskan, selain itu initial</td></tr>
<tr><td><code>revert</code></td><td>kembali ke gaya bawaan browser</td></tr></table>
`);

lengkapiMateri(MATERI_CSS, "satuan", `
<h4>line-height tanpa satuan dan vmin</h4>
<p><code>line-height: 1.5</code> (tanpa satuan) = 1,5 kali ukuran huruf elemen itu sendiri. Huruf 18px → jarak baris 27px. Tanpa satuan lebih aman daripada <code>24px</code>, karena anak dengan ukuran huruf berbeda menghitung ulang sesuai ukurannya.</p>
<p><code>vmin</code> = 1% dari sisi layar yang <b>lebih pendek</b>, <code>vmax</code> = sisi yang lebih panjang. Cocok untuk logo atau lingkaran yang harus muat di layar tegak maupun mendatar.</p>
`);

lengkapiMateri(MATERI_CSS, "animasi", `
<h4>Menjeda dan membuat animasi patah-patah</h4>
<pre><code>.banner:hover { animation-play-state: paused; }       /* jeda saat disorot */
.ketik { animation: ketik 2s steps(20) forwards; }     /* 20 lompatan, efek mesin ketik */</code></pre>
<p>Dalam singkatan <code>transition: opacity .3s ease .1s</code>, waktu pertama adalah <b>durasi</b> dan waktu kedua adalah <b>delay</b> (jeda sebelum mulai).</p>
`);

lengkapiMateri(MATERI_CSS, "gridlanjut", `
<h4>Baris otomatis, sumbu yang bertukar, dan margin auto</h4>
<pre><code>.galeri { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 200px; }
/* baris yang tercipta otomatis tingginya 200px */

.kolom { display: flex; flex-direction: column; justify-content: center; }
/* arah kolom: justify-content kini mengatur VERTIKAL, align-items mengatur horizontal */

.kartu        { display: flex; flex-direction: column; }
.kartu .beli  { margin-top: auto; }   /* tombol terdorong ke dasar kartu */</code></pre>
<p><code>justify-content</code> selalu bekerja di sumbu <b>utama</b> dan <code>align-items</code> di sumbu <b>silang</b>. Kalau arahnya diubah ke kolom, kedua sumbu ikut bertukar. <code>margin-top: auto</code> pada item flex menyerap semua sisa ruang di atasnya.</p>
`);

lengkapiMateri(MATERI_CSS, "arsitektur", `
<h4>Urutan file dan class .sr-only</h4>
<p>Kalau dua aturan sama kuat, yang dimuat <b>terakhir</b> menang, termasuk antarfile. Karena itu CSS milikmu dimuat setelah CSS framework.</p>
<pre><code>.sr-only {            /* sembunyi dari mata, tetap dibacakan screen reader */
  position: absolute; width: 1px; height: 1px; overflow: hidden;
  clip: rect(0 0 0 0); white-space: nowrap;
}</code></pre>
`);

lengkapiMateri(MATERI_JS, "operator", `
<h4>Operator yang sering menjebak</h4>
<pre><code>"5" + 3     // "53"  (+ dengan teks = menggabung)
"5" - 3     // 2     (- memaksa teks jadi angka)
2 ** 3      // 8     (pangkat)
10 % 3      // 1     (sisa bagi)
typeof null // "object"  (bug lama JavaScript; cek null dengan x === null)
typeof []   // "object"  (cek array dengan Array.isArray(x))</code></pre>
`);

lengkapiMateri(MATERI_JS, "strobj", `
<h4>Method teks dan objek tambahan</h4>
<pre><code>"Kopi".split("").reverse().join("")   // "ipoK": pecah → balik → satukan
"7".padStart(3, "0")                   // "007"
"  hai ".trim().toUpperCase()          // "HAI"

const stok = { kopi: 5, teh: 0 };
Object.keys(stok)      // ["kopi", "teh"]
Object.values(stok)    // [5, 0]
Object.entries(stok)   // [["kopi", 5], ["teh", 0]]  → bisa di-filter/map seperti array
Object.fromEntries([["a", 1]])   // { a: 1 }</code></pre>
`);

lengkapiMateri(MATERI_JS, "async", `
<h4>Urutan event loop dan beberapa Promise sekaligus</h4>
<pre><code>console.log("A");
setTimeout(() =&gt; console.log("B"), 0);
Promise.resolve().then(() =&gt; console.log("C"));
console.log("D");
// A D C B: sinkron dulu, lalu Promise (microtask), baru setTimeout (macrotask)

const [user, produk] = await Promise.all([ambilUser(), ambilProduk()]);   // paralel; satu gagal = semua gagal
const hasil = await Promise.allSettled([a(), b()]);   // tidak pernah gagal; tiap hasil punya status
// hasil[i].status: "fulfilled" (ada .value) atau "rejected" (ada .reason)</code></pre>
<ul><li>Fungsi <code>async</code> <b>selalu</b> mengembalikan Promise, walaupun isinya <code>return 5</code>.</li><li>Dua <code>await</code> berurutan menunggu satu per satu; pakai <code>Promise.all</code> kalau tidak saling bergantung.</li><li><code>localStorage</code> hanya menyimpan teks: simpan dengan <code>JSON.stringify</code>, baca dengan <code>JSON.parse</code> atau <code>Number()</code>.</li></ul>
`);

lengkapiMateri(MATERI_JS, "scope", `
<h4>Lexical scope: dilihat dari tempat ditulis</h4>
<p>Fungsi melihat variabel dari tempat ia <b>ditulis</b>, bukan dari tempat ia <b>dipanggil</b>. Fungsi yang ditulis di tingkat luar tidak bisa melihat variabel lokal milik fungsi yang memanggilnya.</p>
<pre><code>let pesan = "luar";
function tampil() { console.log(pesan); }
function uji() { let pesan = "dalam"; tampil(); }
uji();   // "luar"</code></pre>
`);

lengkapiMateri(MATERI_JS, "kelas", `
<h4>Method berantai, toString, dan Object.freeze</h4>
<pre><code>class Kalimat {
  constructor() { this.isi = ""; }
  tambah(kata) { this.isi += kata; return this; }   // return this → bisa dirangkai
  toString() { return "Kalimat: " + this.isi; }      // dipakai saat objek diubah jadi teks
}
new Kalimat().tambah("ko").tambah("pi").isi;   // "kopi"

const konfig = Object.freeze({ tema: "terang" });
konfig.tema = "gelap";   // diabaikan (strict mode: TypeError)</code></pre>
`);

lengkapiMateri(MATERI_JS, "error", `
<h4>Error merambat ke atas, dan catch tanpa parameter</h4>
<p>Error yang dilempar di dalam fungsi naik melewati fungsi-fungsi pemanggilnya sampai bertemu <code>catch</code>. Satu <code>try/catch</code> di tingkat atas bisa menangkap error dari fungsi di bawahnya. Kalau objek error tidak dibutuhkan, tulis <code>catch {</code> tanpa <code>(e)</code> (sejak ES2019).</p>
`);

lengkapiMateri(MATERI_JS, "koleksi", `
<h4>Array.from untuk membuat deret</h4>
<pre><code>Array.from({ length: 4 }, (_, i) =&gt; i * i)   // [0, 1, 4, 9]
Array.from("halo")                            // ["h", "a", "l", "o"]
Array.from(new Set([1, 1, 2]))                // [1, 2]</code></pre>
`);

lengkapiMateri(MATERI_JS, "frontend", `
<h4>Fragment, tampilan bersyarat, dan input terkendali</h4>
<pre><code>return (
  &lt;&gt;                                        {/* fragment: pembungkus tanpa elemen tambahan */}
    &lt;Judul /&gt;
    {isAdmin &amp;&amp; &lt;MenuAdmin /&gt;}                {/* tampil hanya jika isAdmin benar */}
    {jumlah &gt; 0 ? &lt;Daftar /&gt; : &lt;p&gt;Kosong&lt;/p&gt;}
    &lt;input value={nama} onChange={e =&gt; setNama(e.target.value)} /&gt;
  &lt;/&gt;
);</code></pre>
<p>Di dalam <code>{ }</code> JSX hanya boleh <b>ekspresi</b> (bukan pernyataan <code>if</code>). Input terkendali: <code>value</code> membaca dari state, <code>onChange</code> memperbaruinya.</p>
`);

lengkapiMateri(MATERI_PYTHON, "operator", `
<h4>Pembagian bulat, bool sebagai angka, dan membandingkan desimal</h4>
<pre><code>7 // 2      # 3
-7 // 2     # -4  (dibulatkan ke BAWAH, bukan dibuang desimalnya)
True + True # 2   (True = 1, False = 0; berguna untuk menghitung: sum(n &gt; 70 for n in nilai))
0.1 + 0.2 == 0.3                    # False
import math
math.isclose(0.1 + 0.2, 0.3)        # True: cara benar membandingkan desimal</code></pre>
`);

lengkapiMateri(MATERI_PYTHON, "kondisi", `
<h4>Perbandingan berantai, nilai falsy, dan match-case</h4>
<pre><code>1 &lt; x &lt; 10                          # sama dengan (1 &lt; x) and (x &lt; 10)
status = "tersedia" if stok &gt; 0 else "habis"   # if-else satu baris

kode = 404
match kode:                         # Python 3.10+
    case 200 | 201:
        print("Berhasil")
    case 404:
        print("Tidak ditemukan")
    case _:                         # _ = selain itu
        print("Lainnya")</code></pre>
<p>Nilai yang dianggap salah (<b>falsy</b>): <code>False</code>, <code>None</code>, <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, <code>set()</code>. Selain itu benar, termasuk teks <code>"0"</code>.</p>
`);

lengkapiMateri(MATERI_PYTHON, "error", `
<h4>try, except, else, finally dan raise</h4>
<pre><code>try:
    x = int(teks)
except ValueError:
    print("bukan angka")
except ZeroDivisionError:
    print("bagi nol")
else:
    print("berhasil", x)      # hanya jalan kalau TIDAK ada error
finally:
    print("selesai")          # selalu jalan

if umur &lt; 0:
    raise ValueError("umur tidak boleh negatif")   # lempar error buatan sendiri</code></pre>
`);

lengkapiMateri(MATERI_PYTHON, "modul", `
<h4>Gaya import, __name__, pip, dan help</h4>
<pre><code>import math               # math.floor(2.7)
import math as m          # nama pendek: m.floor(2.7)
from math import pi       # langsung: pi
import hitung             # file hitung.py di folder yang sama → hitung.tambah(2, 3)

print(__name__)           # "__main__" saat file dijalankan langsung
help(len)                 # dokumentasi singkat
dir(str)                  # daftar method yang dimiliki</code></pre>
<p>Pasang paket dengan <code>python -m pip install nama-paket</code> agar pasti masuk ke Python yang sedang dipakai. Jangan menamai filemu sama dengan modul (misalnya <code>random.py</code>).</p>
`);

lengkapiMateri(MATERI_PYTHON, "comprehension", `
<h4>Comprehension bersarang</h4>
<pre><code>matriks = [[1, 2], [3], [4, 5, 6]]
rata = [x for baris in matriks for x in baris]   # [1, 2, 3, 4, 5, 6]
# urutan for sama dengan for bertingkat biasa: luar dulu, baru dalam</code></pre>
`);

lengkapiMateri(MATERI_PYTHON, "fungsilanjut", `
<h4>nonlocal dan parameter keyword-only</h4>
<pre><code>def pencacah():
    n = 0
    def naik():
        nonlocal n        # izinkan mengubah n milik fungsi luar
        n += 1
        return n
    return naik

def kirim(email, *, salin=False):   # parameter setelah *, wajib ditulis dengan nama
    ...
kirim("a@b.id", salin=True)         # ✓
kirim("a@b.id", True)               # ✗ TypeError</code></pre>
`);

lengkapiMateri(MATERI_PYTHON, "iterator", `
<h4>Iterator yang sering dipakai dan class yang bisa diulang</h4>
<pre><code>for nama, jumlah in stok.items():   # dict: pasangan kunci dan nilai
    print(nama, jumlah)

z = zip([1, 2], ["a", "b"])
list(z)   # [(1, 'a'), (2, 'b')]
list(z)   # []  ← zip, map, filter, enumerate hanya bisa dihabiskan sekali

class Hitung:
    def __init__(self, n): self.n = n
    def __iter__(self):                  # membuat objek bisa dipakai di for, list(), sum()
        yield from range(1, self.n + 1)</code></pre>
`);

lengkapiMateri(MATERI_PYTHON, "kerja", `
<h4>logging: print versi profesional</h4>
<pre><code>import logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logging.info("proses dimulai")
logging.warning("stok hampir habis")
logging.error("gagal menyimpan")</code></pre>
<p>Kelebihannya dibanding <code>print</code>: ada tingkat (DEBUG, INFO, WARNING, ERROR), waktu, dan bisa disimpan ke file. Di produksi, pesan DEBUG bisa dimatikan tanpa menghapus barisnya.</p>
`);
