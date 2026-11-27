// ============ HTML — tambahan 2x lipat: struktur, teks, media, form, semantik, a11y, tabel, head, interaktif ============
// Dimuat SETELAH soal-latihan-ekstra.js. Soal konsep dan membaca kode (tidak dijalankan). Opsi diacak saat tampil, kunci di indeks 0.
(function () {
  const M = (k, lv, q, o, e, w, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}), ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_HTML.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_HTML.push(
  // ---- struktur (+15) ----
  M("struktur", 1, "Baris pertama dokumen HTML modern adalah…", ["<!DOCTYPE html>", "<html>", "<head>", "<?xml?>"], "<!DOCTYPE html> memberi tahu browser bahwa ini HTML5, supaya halaman ditampilkan dengan aturan standar.", ["<html> datang sesudahnya.", "<head> di dalam <html>.", "Bukan dokumen XML."]),
  M("struktur", 1, "Bagian yang isinya TAMPIL di layar:", ["<body>", "<head>", "<title> saja", "<meta>"], "<head> berisi info untuk browser dan mesin pencari; <body> berisi semua yang dilihat pengunjung.", ["head tidak tampil di halaman.", "title tampil di tab, bukan halaman.", "meta tidak tampil."]),
  M("struktur", 1, "Teks di dalam <title> muncul di…", ["Tab browser dan hasil pencarian Google", "Judul besar di halaman", "Footer", "Tidak muncul di mana pun"], "Untuk judul besar di halaman pakai <h1>.", ["Judul halaman memakai h1.", "Footer tidak terkait.", "title tetap terlihat di tab."]),
  M("struktur", 1, "Penulisan tag yang benar untuk paragraf:", ["<p>Halo</p>", "<p>Halo<p>", "</p>Halo<p>", "<p/>Halo"], "Tag pembuka <p>, isi, lalu tag penutup </p> dengan garis miring.", ["Penutup butuh garis miring.", "Pembuka dan penutup terbalik.", "Itu bukan tag pembungkus."]),
  M("struktur", 2, "Apa yang salah pada kode ini?", ["Tag bersilang: <em> dibuka di dalam <b> tapi ditutup di luarnya", "Tidak ada yang salah", "<b> tidak boleh dipakai", "<em> harus huruf besar"], "Aturan bersarang: yang dibuka terakhir ditutup pertama. Benar: <b>tebal <em>miring</em></b>.", ["Penutupnya bersilang.", "b masih boleh, walau strong lebih bermakna.", "HTML tidak peduli besar kecil huruf tag."], "<b>tebal <em>miring</b></em>"),
  M("struktur", 1, "Tag yang TIDAK punya penutup (void element):", ["<img>, <br>, <input>, <meta>", "<p>, <div>, <span>", "<ul>, <li>", "<a>, <button>"], "Void element tidak membungkus isi, jadi tidak ditutup.", ["Ketiganya butuh penutup.", "Keduanya butuh penutup.", "Keduanya butuh penutup."]),
  M("struktur", 2, "Atribut lang=\"id\" pada <html lang=\"id\"> berguna untuk…", ["Memberi tahu bahasa halaman ke pembaca layar, mesin pencari, dan penerjemah otomatis", "Mengubah bahasa browser", "Membuat teks jadi bahasa Indonesia otomatis", "Tidak ada gunanya"], "Pembaca layar memakai lang untuk melafalkan kata dengan logat yang tepat.", ["Tidak mengubah browser.", "Tidak menerjemahkan.", "Penting untuk aksesibilitas."]),
  M("struktur", 2, "Gunanya <meta charset=\"UTF-8\">:", ["Supaya huruf khusus (é, ✓, emoji, huruf Arab/Jepang) tampil benar", "Mempercepat halaman", "Membuat halaman responsif", "Mengubah font"], "Tanpa charset, karakter non-ASCII bisa tampil sebagai simbol aneh.", ["Bukan untuk kecepatan.", "Responsif memakai meta viewport.", "Font diatur CSS."]),
  M("struktur", 2, "Komentar di HTML ditulis…", ["<!-- catatan -->", "// catatan", "# catatan", "/* catatan */ di luar style"], "Komentar tidak tampil di halaman, tapi tetap terlihat lewat View Source, jadi jangan menulis rahasia di sana.", ["// untuk JavaScript.", "# untuk Python.", "/* */ untuk CSS/JS."]),
  M("struktur", 2, "Spasi dan Enter berlebih di dalam teks HTML akan…", ["Diringkas menjadi satu spasi saat ditampilkan", "Tampil apa adanya", "Membuat error", "Menjadi baris baru"], "Untuk pindah baris pakai <br> atau paragraf baru; untuk menampilkan spasi apa adanya pakai <pre>.", ["Hanya <pre> yang apa adanya.", "Bukan error.", "Enter diringkas jadi spasi."]),
  M("struktur", 2, "File halaman utama sebuah folder situs sebaiknya bernama…", ["index.html", "home.htm", "utama.html", "main.html"], "Server otomatis membuka index.html saat alamat folder dibuka (contoh.com/ → contoh.com/index.html).", ["Tidak dibuka otomatis.", "Tidak dibuka otomatis.", "Tidak dibuka otomatis."]),
  M("struktur", 2, "Dari halaman blog/artikel.html, link ke gambar di folder img yang sejajar dengan folder blog ditulis…", ["../img/foto.jpg", "img/foto.jpg", "/blog/img/foto.jpg", "./img/foto.jpg"], "../ artinya naik satu folder. Dari blog/ naik ke folder utama, lalu masuk img/.", ["Itu mencari img di dalam blog.", "Folder img tidak di dalam blog.", "./ berarti folder yang sama."]),
  M("struktur", 3, "Atribut boolean seperti disabled cukup ditulis…", ["<button disabled>", "<button disabled=\"false\"> untuk mematikan", "<button disabled=0>", "<button !disabled>"], "Kehadiran atributnya saja sudah berarti aktif. disabled=\"false\" justru tetap menonaktifkan tombol!", ["Nilai apa pun tetap berarti disabled.", "0 tetap berarti disabled.", "Sintaks itu tidak ada."]),
  I("struktur", 1, "Tag pembungkus seluruh isi yang terlihat di halaman: <____>", ["body"], "<body> berisi konten halaman."),
  I("struktur", 1, "Ekstensi file halaman web: index.____", ["html"], "File HTML berakhiran .html."),

  // ---- teks (+15) ----
  M("teks", 1, "Berapa <h1> yang disarankan dalam satu halaman?", ["Satu, sebagai judul utama halaman", "Sebanyak mungkin agar besar", "Nol", "Tiga"], "h1 = judul utama. Sub-bagian memakai h2, sub-sub memakai h3, dan seterusnya.", ["Banyak h1 membingungkan mesin pencari dan pembaca layar.", "Halaman butuh judul.", "Tidak ada aturan tiga."]),
  M("teks", 2, "Kenapa tidak boleh melompat dari <h1> langsung ke <h4> hanya karena ukurannya pas?", ["Heading menunjukkan struktur isi; ukuran diatur dengan CSS", "Browser menolak", "h4 tidak ada", "Boleh saja, tidak ada efeknya"], "Pembaca layar memakai urutan heading sebagai daftar isi. Lompatan membuatnya terlihat ada bagian yang hilang.", ["Browser tetap menampilkan.", "h4 ada.", "Ada efek pada aksesibilitas dan SEO."]),
  M("teks", 1, "Beda <strong> dan <b>:", ["strong memberi MAKNA penting (dibaca dengan tekanan oleh pembaca layar); b hanya tebal visual", "Sama persis", "b lebih baru", "strong untuk judul"], "Pakai strong/em bila maknanya penting; pakai CSS bila hanya ingin tampilan.", ["Maknanya berbeda.", "Keduanya lama.", "Judul memakai h1–h6."]),
  M("teks", 1, "Daftar bernomor (1, 2, 3) memakai…", ["<ol> dengan <li>", "<ul> dengan <li>", "<dl>", "<list>"], "ol = ordered list (bernomor), ul = unordered list (berpoin).", ["ul berpoin.", "dl untuk istilah dan definisi.", "Tag itu tidak ada."]),
  M("teks", 2, "Agar daftar bernomor dimulai dari 5:", ["<ol start=\"5\">", "<ol begin=\"5\">", "<li value=\"5\"> di ul", "<ol from=5>"], "start mengatur angka awal; reversed membuat hitung mundur; type=\"a\" memakai huruf.", ["Atribut itu tidak ada.", "ul tidak bernomor.", "Atribut itu tidak ada."]),
  M("teks", 2, "Membuat sub-daftar di dalam poin kedua yang benar:", ["Taruh <ul> baru DI DALAM <li> kedua", "Taruh <ul> baru di antara dua <li>", "Pakai <li><li>", "Pakai <br> dan spasi"], "Elemen anak langsung dari <ul>/<ol> hanya boleh <li>.", ["Di antara li tidak sah.", "li tidak boleh langsung di li.", "Itu hanya tampilan, bukan struktur."], "<ul>\n  <li>Buah</li>\n  <li>Sayur\n    <!-- sub-daftar di sini -->\n  </li>\n</ul>"),
  M("teks", 2, "Tag untuk daftar istilah dan definisinya (seperti kamus):", ["<dl>, <dt>, <dd>", "<ol>, <li>", "<table>", "<def>"], "dt = istilah, dd = penjelasannya.", ["ol untuk urutan.", "table untuk data baris-kolom.", "Tag itu tidak ada."]),
  M("teks", 1, "<br> dipakai untuk…", ["Pindah baris di dalam satu paragraf, misalnya alamat atau puisi", "Membuat jarak antarparagraf", "Garis horizontal", "Tebal"], "Jarak antarparagraf diatur dengan CSS margin, bukan <br><br>.", ["Pakai margin CSS.", "Garis memakai <hr>.", "Tebal memakai strong."]),
  M("teks", 2, "Menampilkan kode program dengan spasi dan baris apa adanya:", ["<pre><code>…</code></pre>", "<code> saja untuk banyak baris", "<p class=\"kode\">", "<blockquote>"], "<pre> mempertahankan spasi dan Enter; <code> menandai bahwa isinya kode.", ["code saja meringkas spasi.", "p meringkas spasi.", "blockquote untuk kutipan."]),
  M("teks", 2, "Menulis teks <p> agar TAMPIL sebagai tulisan (bukan dibaca sebagai tag):", ["&lt;p&gt;", "<<p>>", "\\<p\\>", "'<p>'"], "Entitas &lt; dan &gt; menampilkan tanda < dan >.", ["Tetap terbaca sebagai tag.", "HTML tidak memakai garis miring terbalik.", "Kutip tidak mencegahnya."]),
  M("teks", 2, "Tag untuk kutipan panjang dari sumber lain:", ["<blockquote> (dengan <cite> untuk sumbernya)", "<q> untuk kutipan panjang", "<quote>", "<i>"], "<q> untuk kutipan pendek di dalam kalimat; <blockquote> untuk blok kutipan.", ["q untuk pendek.", "Tag itu tidak ada.", "i hanya miring."]),
  M("teks", 2, "<mark> dipakai untuk…", ["Menyorot teks seperti stabilo, misalnya kata yang dicari", "Membuat tanda centang", "Menandai link", "Membuat judul"], "Browser memberi latar kuning bawaan.", ["Centang memakai karakter/ikon.", "Link memakai a.", "Judul memakai h1–h6."]),
  M("teks", 3, "Tag yang tepat untuk menuliskan tanggal agar terbaca mesin:", ["<time datetime=\"2026-11-27\">27 November 2026</time>", "<date>27/11/2026</date>", "<span date>", "<p time>"], "datetime memberi format standar untuk mesin; teks di dalamnya untuk manusia.", ["Tag date tidak ada.", "Atribut itu tidak ada.", "Atribut itu tidak ada."]),
  I("teks", 1, "Tag untuk setiap butir di dalam ul/ol: <____>", ["li"], "li = list item."),
  I("teks", 1, "Tag garis pemisah horizontal: <____>", ["hr"], "hr = horizontal rule."),

  // ---- media (+15) ----
  M("media", 1, "Atribut alt pada <img> berisi…", ["Penjelasan isi gambar untuk pembaca layar dan saat gambar gagal dimuat", "Judul halaman", "Ukuran gambar", "Alamat gambar"], "Contoh: alt=\"Grafik penjualan naik 20% di bulan Mei\".", ["Judul memakai title/h1.", "Ukuran memakai width/height.", "Alamat memakai src."]),
  M("media", 2, "Gambar dekoratif murni (garis hiasan) sebaiknya diberi…", ["alt=\"\" (kosong)", "alt=\"gambar\"", "Tanpa atribut alt sama sekali", "alt=\"dekorasi.png\""], "alt kosong memberi tahu pembaca layar untuk melewatinya. Tanpa alt, nama file bisa dibacakan.", ["Kata 'gambar' tidak berguna.", "Tanpa alt, nama file dibacakan.", "Nama file tidak berguna."]),
  M("media", 1, "Membuka link di tab baru dengan aman:", ["<a href=\"…\" target=\"_blank\" rel=\"noopener\">", "<a href=\"…\" new>", "<a href=\"…\" tab=\"new\">", "<a href=\"…\" open=\"_blank\">"], "rel=\"noopener\" mencegah halaman tujuan mengendalikan tab asal.", ["Atribut itu tidak ada.", "Atribut itu tidak ada.", "Atribut itu tidak ada."]),
  M("media", 1, "Link yang membuka aplikasi email:", ["<a href=\"mailto:halo@contoh.com\">", "<a href=\"email:halo@contoh.com\">", "<a mail=\"halo@contoh.com\">", "<email>"], "Ada juga tel:+62... untuk telepon.", ["Skema yang benar mailto:.", "Atribut itu tidak ada.", "Tag itu tidak ada."]),
  M("media", 2, "Link ke bagian lain di halaman yang sama (misalnya ke #kontak):", ["<a href=\"#kontak\"> dan elemen tujuan diberi id=\"kontak\"", "<a href=\"kontak\">", "<a goto=\"kontak\">", "<a href=\"@kontak\">"], "Tanda # diikuti id elemen tujuan.", ["Tanpa # dianggap file.", "Atribut itu tidak ada.", "Tanda @ bukan penanda."]),
  M("media", 2, "Kenapa width dan height sebaiknya ditulis di <img>?", ["Browser menyiapkan ruang sebelum gambar dimuat, jadi halaman tidak loncat-loncat", "Agar gambar lebih tajam", "Wajib, kalau tidak gambar tidak tampil", "Agar ukuran file kecil"], "Lompatan tata letak (layout shift) mengganggu pembaca dan menurunkan skor kinerja.", ["Ketajaman tidak berubah.", "Gambar tetap tampil.", "Ukuran file tidak berubah."]),
  M("media", 2, "Atribut loading=\"lazy\" pada <img>:", ["Gambar baru dimuat saat hampir terlihat di layar, menghemat kuota", "Gambar dimuat paling awal", "Gambar disembunyikan", "Gambar diperkecil"], "Cocok untuk gambar di bawah. Gambar besar di bagian atas jangan lazy.", ["Justru ditunda.", "Tidak disembunyikan.", "Ukuran tidak berubah."]),
  M("media", 2, "Gambar beserta keterangannya yang bermakna dibungkus…", ["<figure> dan <figcaption>", "<div> dan <p>", "<img caption>", "<picture> dan <label>"], "figcaption menjadi keterangan resmi gambar itu.", ["Bisa, tapi tanpa makna.", "Atribut itu tidak ada.", "label untuk form."]),
  M("media", 2, "Video yang langsung diputar otomatis di browser harus…", ["Dibisukan: <video autoplay muted playsinline>", "Diberi suara keras", "Memakai <embed>", "Tidak bisa sama sekali"], "Browser hanya mengizinkan autoplay tanpa suara.", ["Autoplay bersuara diblokir.", "embed cara lama.", "Bisa, asal muted."]),
  M("media", 2, "Kenapa <video> diberi beberapa <source> dengan type berbeda?", ["Browser memilih format pertama yang didukungnya (misalnya webm, lalu mp4)", "Supaya video diputar beberapa kali", "Untuk subtitle", "Wajib minimal tiga"], "Teks di dalam <video> setelah source tampil bila browser tidak mendukung sama sekali.", ["Diputar sekali.", "Subtitle memakai <track>.", "Tidak wajib."]),
  M("media", 2, "Subtitle pada video ditambahkan dengan…", ["<track kind=\"subtitles\" src=\"id.vtt\" srclang=\"id\">", "<sub>", "<caption>", "<subtitle>"], "File .vtt berisi teks dan waktunya. Penting untuk pengguna tuli dan saat menonton tanpa suara.", ["sub untuk teks kecil di bawah.", "caption untuk judul tabel.", "Tag itu tidak ada."]),
  M("media", 2, "Format gambar yang paling hemat ukuran untuk foto di web modern:", ["WebP atau AVIF", "BMP", "TIFF", "PSD"], "JPG masih umum; PNG untuk gambar dengan transparansi tajam; SVG untuk logo/ikon.", ["BMP sangat besar.", "TIFF untuk cetak.", "PSD file Photoshop."]),
  M("media", 3, "Logo dan ikon sebaiknya memakai format…", ["SVG, karena tetap tajam di ukuran berapa pun dan ukurannya kecil", "JPG", "GIF", "BMP"], "SVG adalah gambar vektor berbentuk kode.", ["JPG buram saat diperbesar.", "GIF untuk animasi sederhana.", "BMP besar."]),
  I("media", 1, "Atribut alamat tujuan pada link: <a ____=\"halaman.html\">", ["href"], "href = hypertext reference."),
  I("media", 1, "Atribut alamat file pada gambar: <img ____=\"foto.jpg\">", ["src"], "src = source."),

  // ---- form (+16) ----
  M("form", 1, "Kenapa setiap <input> butuh <label>?", ["Pembaca layar membacakan labelnya, dan mengklik label ikut memfokuskan kolom", "Supaya input berwarna", "Wajib agar form terkirim", "Untuk validasi"], "Hubungkan dengan for=\"id\" pada label dan id yang sama pada input.", ["Warna diatur CSS.", "Form tetap terkirim tanpa label.", "Validasi memakai required, dll."]),
  M("form", 1, "Input untuk email yang otomatis dicek formatnya dan memunculkan keyboard @ di HP:", ["<input type=\"email\">", "<input type=\"text\" email>", "<email>", "<input type=\"mail\">"], "type yang tepat memberi validasi dan keyboard yang sesuai.", ["Atribut email tidak ada.", "Tag itu tidak ada.", "type yang benar email."]),
  M("form", 1, "Kolom yang wajib diisi diberi atribut…", ["required", "must", "wajib", "need=\"true\""], "Browser menolak mengirim form dan menunjukkan pesan bila kolom required kosong.", ["Atribut itu tidak ada.", "Atribut itu tidak ada.", "Atribut itu tidak ada."]),
  M("form", 2, "Data yang dikirim form diambil dari atribut…", ["name pada setiap input", "id pada setiap input", "label", "placeholder"], "Tanpa name, nilai kolom tidak ikut terkirim. id dipakai label dan JavaScript.", ["id tidak dikirim.", "label hanya teks.", "placeholder hanya contoh."]),
  M("form", 2, "Beda placeholder dan label:", ["placeholder contoh isian yang hilang saat mengetik; label keterangan tetap yang wajib ada", "Sama saja", "label hilang saat mengetik", "placeholder wajib"], "Jangan mengganti label dengan placeholder; pengguna lupa kolomnya untuk apa setelah mulai mengetik.", ["Fungsinya berbeda.", "Label tetap terlihat.", "placeholder opsional."]),
  M("form", 2, "Pilihan jenis kelamin (hanya boleh satu) memakai…", ["Beberapa <input type=\"radio\"> dengan name yang SAMA", "Beberapa checkbox", "Radio dengan name berbeda", "<select multiple>"], "name yang sama mengelompokkan radio sehingga hanya satu yang bisa dipilih.", ["Checkbox boleh banyak.", "name berbeda membuat semua bisa dipilih.", "multiple boleh banyak."]),
  M("form", 2, "Membatasi angka umur antara 17 dan 60:", ["<input type=\"number\" min=\"17\" max=\"60\">", "<input type=\"text\" range=\"17-60\">", "<input type=\"umur\">", "<input limit=\"17,60\">"], "min dan max juga dipakai di type=\"date\" dan range.", ["Atribut itu tidak ada.", "type itu tidak ada.", "Atribut itu tidak ada."]),
  M("form", 2, "Atribut pattern=\"08[0-9]{8,11}\" pada input…", ["Mewajibkan isian cocok dengan pola nomor HP yang diawali 08", "Mengisi otomatis nomor HP", "Menyembunyikan isian", "Mengubah warna"], "pattern memakai regex. Beri title berisi contoh agar pesan errornya jelas.", ["Tidak mengisi otomatis.", "Menyembunyikan memakai type=password.", "Warna diatur CSS."]),
  M("form", 2, "Mengelompokkan kolom alamat dalam satu kotak berjudul:", ["<fieldset> dengan <legend>Alamat</legend>", "<div title=\"Alamat\">", "<group>", "<label> besar"], "Pembaca layar membacakan legend saat masuk ke kelompok itu.", ["Tanpa makna kelompok.", "Tag itu tidak ada.", "label untuk satu kolom."]),
  M("form", 2, "Isian panjang beberapa baris (misalnya pesan) memakai…", ["<textarea>", "<input type=\"long\">", "<input rows=\"5\">", "<text>"], "textarea punya rows dan cols, dan isinya ditulis di antara tag pembuka-penutup.", ["type itu tidak ada.", "input tidak punya rows.", "Tag itu tidak ada."]),
  M("form", 2, "Tombol di dalam form yang TIDAK boleh mengirim form (misalnya 'Tambah baris') ditulis…", ["<button type=\"button\">", "<button>", "<button type=\"submit\">", "<input type=\"send\">"], "Tombol di dalam form bawaannya type=\"submit\". Tulis type=\"button\" untuk tombol biasa.", ["Bawaannya submit.", "Itu mengirim form.", "type itu tidak ada."]),
  M("form", 2, "method=\"get\" vs method=\"post\" pada form:", ["get menaruh data di URL (cocok untuk pencarian); post mengirim di badan permintaan (untuk data sensitif/mengubah data)", "Sama saja", "post menaruh di URL", "get untuk password"], "Jangan pernah mengirim password dengan get karena tampil di URL dan riwayat.", ["Cara kirimnya berbeda.", "Terbalik.", "Password jangan di URL."]),
  M("form", 2, "Atribut autocomplete=\"email\" atau \"new-password\" berguna untuk…", ["Membantu browser/password manager mengisi kolom dengan benar", "Mematikan keyboard", "Validasi format", "Menyembunyikan isian"], "Nilai autocomplete yang tepat mempercepat pengisian, terutama di HP.", ["Tidak mematikan keyboard.", "Validasi memakai type/pattern.", "Menyembunyikan memakai type=password."]),
  M("form", 3, "Kode ini memiliki masalah aksesibilitas apa?", ["Label tidak terhubung ke input (for dan id tidak sama)", "type salah", "Tidak ada masalah", "input harus di luar label"], "for=\"nama\" harus sama dengan id input. Di kode ini id-nya \"name\".", ["type text sah.", "Ada masalah ejaan id.", "Bisa di dalam atau di luar."], "<label for=\"nama\">Nama</label>\n<input type=\"text\" id=\"name\" name=\"nama\">"),
  I("form", 1, "Tag pilihan dropdown: <____> berisi <option>", ["select"], "select + option membuat dropdown."),
  I("form", 2, "Atribut agar kolom tidak bisa diubah tapi tetap terkirim: <input ____>", ["readonly"], "readonly tetap dikirim; disabled tidak dikirim."),

  // ---- semantik (+15) ----
  M("semantik", 1, "Tag semantik untuk menu navigasi utama:", ["<nav>", "<menu-bar>", "<div class=\"nav\"> saja", "<navigation>"], "nav memberi tahu pembaca layar bahwa ini area navigasi.", ["Tag itu tidak ada.", "div tanpa makna.", "Tag itu tidak ada."]),
  M("semantik", 1, "Isi utama halaman (bukan header/footer/sidebar) dibungkus…", ["<main> (hanya satu per halaman)", "<body>", "<section> sebanyak-banyaknya", "<content>"], "Pembaca layar punya pintasan 'lompat ke main'.", ["body membungkus semuanya.", "section untuk bagian bertema.", "Tag itu tidak ada."]),
  M("semantik", 2, "Beda <article> dan <section>:", ["article = isi yang bisa berdiri sendiri (artikel, kartu produk); section = bagian bertema dari sesuatu, biasanya dengan judul", "Sama saja", "section untuk gambar", "article hanya untuk blog"], "Tanya: kalau dipindah ke halaman lain, apakah masih bermakna utuh? Ya → article.", ["Maknanya berbeda.", "Gambar memakai figure.", "Kartu produk juga article."]),
  M("semantik", 2, "Konten sampingan seperti 'artikel terkait' dibungkus…", ["<aside>", "<side>", "<footer>", "<extra>"], "aside berhubungan dengan isi utama tapi bukan bagian intinya.", ["Tag itu tidak ada.", "footer untuk bagian bawah.", "Tag itu tidak ada."]),
  M("semantik", 1, "Kapan memakai <div>?", ["Saat butuh pembungkus untuk tata letak/gaya dan tidak ada tag semantik yang cocok", "Untuk semua hal", "Tidak boleh dipakai lagi", "Hanya untuk teks"], "div tidak salah; masalahnya bila semua ditulis div padahal ada nav/main/button.", ["Tag semantik lebih baik bila ada.", "div masih dipakai.", "div untuk blok apa pun."]),
  M("semantik", 2, "Beda <div> dan <span>:", ["div elemen blok (memenuhi lebar, baris baru); span elemen inline (di dalam baris teks)", "Sama saja", "span untuk blok besar", "div untuk satu kata"], "Pakai span untuk menandai sebagian teks di dalam kalimat.", ["Tampilannya berbeda.", "Terbalik.", "Terbalik."]),
  M("semantik", 2, "Beda id dan class:", ["id unik (satu per halaman); class boleh dipakai banyak elemen", "Sama saja", "class unik", "id untuk gaya saja"], "Contoh: id=\"kontak\" untuk satu bagian; class=\"kartu\" untuk banyak kartu.", ["Aturannya berbeda.", "Terbalik.", "id juga untuk link #dan JavaScript."]),
  M("semantik", 2, "Masalah utama kode ini:", ["Memakai div yang bisa diklik sebagai tombol: tidak bisa difokus dengan Tab dan tidak dibaca sebagai tombol", "Tidak ada masalah", "onclick salah eja", "div harus span"], "Pakai <button>: otomatis bisa difokus, ditekan dengan Enter/Spasi, dan dibacakan sebagai tombol.", ["Ada masalah aksesibilitas.", "onclick benar.", "span juga bermasalah."], "<div class=\"tombol\" onclick=\"kirim()\">Kirim</div>"),
  M("semantik", 2, "Kenapa tag semantik penting untuk SEO?", ["Mesin pencari lebih paham bagian mana judul, isi utama, dan navigasi", "Membuat situs lebih cepat dua kali", "Wajib dari Google", "Tidak ada hubungannya"], "Struktur yang jelas membantu mesin pencari memahami dan menampilkan isi.", ["Bukan soal kecepatan.", "Tidak wajib, tapi membantu.", "Ada hubungannya."]),
  M("semantik", 2, "<header> boleh dipakai…", ["Di bagian atas halaman, dan juga di bagian atas article/section", "Hanya satu kali di seluruh halaman", "Hanya di footer", "Sama dengan <head>"], "Jangan tertukar: <head> berisi meta (tidak tampil); <header> adalah bagian atas yang tampil.", ["Boleh lebih dari satu.", "Bukan di footer.", "head berbeda."]),
  M("semantik", 2, "Atribut data-* (misalnya data-harga=\"18000\") gunanya…", ["Menyimpan info tambahan di elemen untuk dibaca JavaScript (el.dataset.harga)", "Mengubah tampilan", "Wajib untuk SEO", "Menyimpan ke database"], "data-* tidak memengaruhi tampilan dan tidak dikirim ke server.", ["Tidak mengubah tampilan.", "Tidak terkait SEO.", "Tidak menyimpan ke database."]),
  M("semantik", 2, "<address> dipakai untuk…", ["Info kontak pemilik halaman/artikel", "Semua alamat jalan di halaman", "URL situs", "Form alamat"], "Untuk alamat biasa di dalam teks cukup p.", ["Hanya kontak pemilik.", "URL memakai a.", "Form memakai input."]),
  M("semantik", 3, "Halaman toko ini memakai struktur semantik yang paling tepat:", ["header (logo+nav) → main (h1, section kategori berisi article produk) → footer", "div di semua tempat", "main di dalam footer", "Dua main untuk kiri dan kanan"], "Hanya satu main, nav di dalam header, setiap kartu produk article.", ["div tanpa makna.", "main tidak di dalam footer.", "main hanya satu."]),
  I("semantik", 1, "Tag bagian paling bawah halaman (hak cipta, kontak): <____>", ["footer"], "footer = kaki halaman."),
  I("semantik", 1, "Atribut nama unik satu elemen: <section ____=\"kontak\">", ["id"], "id harus unik."),

  // ---- a11y (+15) ----
  M("a11y", 1, "Teks link yang paling baik untuk aksesibilitas:", ["Unduh laporan penjualan 2026 (PDF)", "Klik di sini", "Baca", "Link"], "Pembaca layar sering menampilkan daftar link saja. 'Klik di sini' tidak bermakna di luar kalimatnya.", ["Tidak menjelaskan tujuannya.", "Terlalu umum.", "Terlalu umum."]),
  M("a11y", 1, "Pengguna yang tidak memakai mouse berpindah antar tombol dan link dengan…", ["Tombol Tab (Shift+Tab untuk mundur)", "Tombol F5", "Klik kanan", "Ctrl+C"], "Pastikan semua yang bisa diklik juga bisa dicapai dan dipakai dengan keyboard.", ["F5 memuat ulang.", "Klik kanan butuh mouse.", "Ctrl+C menyalin."]),
  M("a11y", 2, "Kenapa outline fokus (garis saat elemen difokus) tidak boleh dihapus begitu saja dengan outline: none?", ["Pengguna keyboard jadi tidak tahu sedang berada di elemen mana", "Membuat halaman lambat", "Browser melarang", "Tidak ada alasannya"], "Kalau mau mengganti, buat gaya :focus-visible sendiri yang jelas.", ["Bukan soal kecepatan.", "Browser mengizinkan, tapi berbahaya.", "Ada alasan kuat."]),
  M("a11y", 2, "Rasio kontras minimal teks normal menurut WCAG AA:", ["4,5 : 1", "1,5 : 1", "2 : 1", "10 : 1 wajib"], "Teks besar boleh 3:1. KodeQuiz menargetkan sekitar 12:1 untuk kenyamanan membaca lama.", ["Terlalu rendah.", "Terlalu rendah.", "Bagus, tapi bukan syarat minimal."]),
  M("a11y", 2, "Tombol yang hanya berisi ikon (misalnya ✕) perlu…", ["aria-label=\"Tutup\" supaya pembaca layar tahu fungsinya", "title saja", "Warna merah", "Tidak perlu apa-apa"], "Tanpa nama, pembaca layar hanya membaca 'tombol' atau simbol yang membingungkan.", ["title tidak selalu dibacakan.", "Warna tidak terbaca pembaca layar.", "Perlu nama."]),
  M("a11y", 2, "Aturan pertama ARIA:", ["Jangan pakai ARIA bila ada elemen HTML bawaan yang sudah tepat (button, nav, label)", "Selalu pakai ARIA di semua elemen", "ARIA menggantikan HTML", "ARIA wajib untuk SEO"], "<button> lebih baik daripada <div role=\"button\" tabindex=\"0\">.", ["ARIA berlebih justru merusak.", "ARIA hanya pelengkap.", "Tidak terkait SEO."]),
  M("a11y", 2, "Warna saja (misalnya teks merah untuk error) tidak cukup karena…", ["Pengguna buta warna mungkin tidak bisa membedakannya; tambahkan ikon atau teks", "Merah dilarang", "Browser tidak mendukung merah", "Warna membuat lambat"], "Contoh: '⚠ Email wajib diisi' dengan warna merah dan teks yang jelas.", ["Merah boleh.", "Didukung.", "Tidak memperlambat."]),
  M("a11y", 2, "Pesan yang muncul tiba-tiba (misalnya 'Tersimpan') agar dibacakan pembaca layar, wadahnya diberi…", ["aria-live=\"polite\"", "aria-hidden=\"true\"", "tabindex=\"-1\"", "role=\"presentation\""], "aria-live mengumumkan perubahan isi tanpa memindahkan fokus.", ["Itu justru menyembunyikan.", "Itu hanya soal fokus.", "Itu menghapus makna."]),
  M("a11y", 2, "Tautan 'Lewati ke konten utama' di paling atas halaman berguna untuk…", ["Pengguna keyboard/pembaca layar tidak perlu melewati semua menu setiap halaman", "SEO saja", "Hiasan", "Mempercepat unduhan"], "Biasanya disembunyikan dan baru muncul saat difokus dengan Tab.", ["Untuk pengguna, bukan SEO.", "Punya fungsi nyata.", "Tidak terkait unduhan."]),
  M("a11y", 1, "Meta description berguna untuk…", ["Ringkasan halaman yang sering tampil di bawah judul pada hasil Google", "Menyembunyikan halaman", "Mengubah judul tab", "Mempercepat situs"], "Tulis 1–2 kalimat yang menarik dan sesuai isi, sekitar 150 karakter.", ["Itu noindex.", "Itu title.", "Tidak memengaruhi kecepatan."]),
  M("a11y", 2, "Agar halaman tidak muncul di hasil mesin pencari:", ["<meta name=\"robots\" content=\"noindex\">", "<meta hidden>", "Menghapus title", "Memakai huruf kecil"], "Berguna untuk halaman uji atau pribadi.", ["Atribut itu tidak ada.", "Tetap bisa diindeks.", "Tidak berpengaruh."]),
  M("a11y", 2, "Tabel data yang aksesibel memakai…", ["<th> untuk sel judul (dengan scope) dan <caption> untuk judul tabel", "Hanya <td>", "Gambar tangkapan layar tabel", "div berwarna"], "Pembaca layar mengumumkan judul kolom saat membaca setiap sel.", ["Tanpa th, judul tidak dikenali.", "Gambar tidak terbaca.", "div tidak punya makna tabel."]),
  M("a11y", 3, "Gerakan animasi besar sebaiknya dikurangi untuk pengguna yang mengaktifkan…", ["prefers-reduced-motion (Kurangi gerakan di pengaturan sistem)", "Mode gelap", "Zoom 200%", "Bahasa Inggris"], "Di CSS: @media (prefers-reduced-motion: reduce) { … matikan animasi … }. KodeQuiz sudah menerapkannya.", ["Mode gelap soal warna.", "Zoom soal ukuran.", "Tidak terkait bahasa."]),
  I("a11y", 1, "Atribut teks pengganti gambar: <img ____=\"Grafik penjualan\">", ["alt"], "alt dibacakan pembaca layar."),
  I("a11y", 2, "Atribut untuk memberi nama tombol ikon: <button aria-____=\"Tutup\">", ["label"], "aria-label memberi nama yang dibacakan."),

  // ---- tabel (+15) ----
  M("tabel", 1, "Urutan tag tabel yang benar:", ["<table> → <tr> (baris) → <td> (sel)", "<table> → <td> → <tr>", "<tr> → <table> → <td>", "<table> → <row> → <cell>"], "tr = table row, td = table data, th = table header.", ["Baris dulu, baru sel.", "table paling luar.", "Tag itu tidak ada."]),
  M("tabel", 2, "Sel yang melebar menempati 3 kolom ditulis…", ["<td colspan=\"3\">", "<td rowspan=\"3\">", "<td width=\"3\">", "<td span=3col>"], "colspan = gabung ke samping (kolom); rowspan = gabung ke bawah (baris).", ["rowspan ke bawah.", "width soal lebar.", "Atribut itu tidak ada."]),
  M("tabel", 2, "Sel 'Jakarta' yang menempati 2 baris ke bawah ditulis…", ["<td rowspan=\"2\">Jakarta</td>", "<td colspan=\"2\">Jakarta</td>", "<tr span=\"2\">", "<td height=\"2\">"], "Baris berikutnya cukup berisi sel yang tersisa (satu sel lebih sedikit).", ["colspan ke samping.", "Atribut tr itu tidak ada.", "height soal tinggi piksel."]),
  M("tabel", 2, "Bagian judul, isi, dan ringkasan tabel dibungkus…", ["<thead>, <tbody>, <tfoot>", "<head>, <body>, <foot>", "<header>, <main>, <footer>", "<top>, <mid>, <end>"], "Membantu pembaca layar dan CSS; tfoot cocok untuk baris total.", ["Itu bagian halaman, bukan tabel.", "Itu tag semantik halaman.", "Tag itu tidak ada."]),
  M("tabel", 2, "Judul tabel yang dibacakan pembaca layar ditulis dengan…", ["<caption> tepat setelah <table>", "<h2> di dalam tabel", "<title>", "<th colspan=\"99\">"], "caption menjadi nama tabel.", ["h2 di luar tabel boleh, tapi caption yang resmi.", "title untuk halaman.", "Itu bukan judul tabel."]),
  M("tabel", 2, "Atribut scope=\"col\" pada <th> berarti…", ["Sel judul ini milik kolom di bawahnya", "Sel ini disembunyikan", "Sel bisa digulir", "Sel ini lebar"], "scope=\"row\" untuk judul baris (biasanya di kolom pertama).", ["Tidak menyembunyikan.", "Tidak menggulir.", "Tidak soal lebar."]),
  M("tabel", 1, "Kapan TIDAK memakai tabel?", ["Untuk menyusun tata letak halaman (kolom kiri-kanan); pakai CSS flex/grid", "Untuk jadwal pelajaran", "Untuk daftar harga", "Untuk laporan nilai"], "Tabel hanya untuk data berbentuk baris dan kolom.", ["Jadwal memang data tabel.", "Daftar harga data tabel.", "Laporan nilai data tabel."]),
  M("tabel", 2, "Garis tabel yang menyatu (tidak dobel) diatur dengan CSS…", ["border-collapse: collapse", "border: single", "table-line: 1", "merge: true"], "Bawaannya setiap sel punya garis sendiri sehingga terlihat dobel.", ["Nilai itu tidak ada.", "Properti itu tidak ada.", "Properti itu tidak ada."]),
  M("tabel", 2, "Tabel lebar di HP agar bisa digeser ke samping:", ["Bungkus dengan div ber-CSS overflow-x: auto", "Perkecil huruf jadi 4px", "Hapus kolom", "Pakai gambar"], "Konten di luar tabel tetap rapi, tabelnya bisa digulir sendiri.", ["Huruf jadi tidak terbaca.", "Data hilang.", "Gambar tidak bisa dibaca pembaca layar."]),
  M("tabel", 2, "Baris belang-belang (zebra) memakai selector CSS…", ["tbody tr:nth-child(even)", "tr:zebra", "tr.belang otomatis", "td:odd-row"], "even = genap, odd = ganjil.", ["Pseudo-class itu tidak ada.", "Harus ditulis sendiri.", "Pseudo-class itu tidak ada."]),
  M("tabel", 3, "Berapa sel td yang ditulis di baris kedua tabel 3 kolom ini?", ["2", "3", "1", "4"], "Sel di baris pertama memakai rowspan=\"2\", jadi sudah 'menempati' satu kolom di baris kedua. Sisa yang perlu ditulis: 2 sel.", ["Satu kolom sudah ditempati rowspan.", "Masih ada dua kolom.", "Tabel hanya 3 kolom."], "<table>\n  <tr><td rowspan=\"2\">A</td><td>B</td><td>C</td></tr>\n  <tr><!-- berapa td di sini? --></tr>\n</table>"),
  M("tabel", 2, "Angka di kolom tabel (harga, jumlah) sebaiknya rata…", ["Kanan, supaya digit satuan sejajar dan mudah dibandingkan", "Tengah", "Kiri", "Acak"], "Pakai CSS text-align: right dan font-variant-numeric: tabular-nums.", ["Tengah menyulitkan perbandingan.", "Kiri membuat digit tidak sejajar.", "Tidak rapi."]),
  M("tabel", 2, "<th> di kolom pertama tiap baris (misalnya nama produk) diberi…", ["scope=\"row\"", "scope=\"col\"", "rowspan", "header=\"yes\""], "Judul baris membantu pembaca layar mengumumkan 'Kopi, Harga 18.000'.", ["col untuk judul kolom.", "rowspan untuk gabung baris.", "Atribut itu tidak ada."]),
  I("tabel", 1, "Tag sel judul (tebal dan di tengah bawaannya): <____>", ["th"], "th = table header."),
  I("tabel", 1, "Tag satu baris tabel: <____>", ["tr"], "tr = table row."),

  // ---- head (+15) ----
  M("head", 1, "Baris agar halaman tidak tampil kecil di HP:", ["<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">", "<meta mobile=\"yes\">", "<meta size=\"phone\">", "<meta responsive>"], "Tanpa viewport, HP menampilkan halaman seperti layar laptop yang diperkecil.", ["Atribut itu tidak ada.", "Atribut itu tidak ada.", "Atribut itu tidak ada."]),
  M("head", 1, "Memuat file CSS eksternal:", ["<link rel=\"stylesheet\" href=\"gaya.css\">", "<style src=\"gaya.css\">", "<css href=\"gaya.css\">", "<script href=\"gaya.css\">"], "link rel stylesheet diletakkan di <head>.", ["style untuk CSS langsung di halaman.", "Tag itu tidak ada.", "script untuk JavaScript."]),
  M("head", 2, "Beda <script defer> dan <script async>:", ["defer menunggu HTML selesai lalu jalan berurutan; async jalan segera setelah terunduh, urutannya tidak dijamin", "Sama saja", "async selalu berurutan", "defer tidak menjalankan skrip"], "Untuk skrip aplikasi yang memakai elemen halaman, pakai defer.", ["Waktunya berbeda.", "async tidak dijamin urutannya.", "defer tetap menjalankan."]),
  M("head", 2, "Ikon kecil di tab browser ditambahkan dengan…", ["<link rel=\"icon\" href=\"ikon.svg\">", "<favicon src=\"ikon.svg\">", "<meta icon>", "<img tab>"], "Bisa juga ikon PNG beberapa ukuran dan apple-touch-icon untuk iPhone.", ["Tag itu tidak ada.", "Atribut itu tidak ada.", "Bukan cara yang benar."]),
  M("head", 2, "Meta og:title dan og:image berguna untuk…", ["Tampilan pratinjau saat link dibagikan ke WhatsApp/LinkedIn/Facebook", "Mengubah judul tab", "Mempercepat situs", "SEO Google saja"], "Open Graph menentukan judul, gambar, dan deskripsi kartu tautan.", ["Judul tab memakai title.", "Tidak memengaruhi kecepatan.", "Terutama untuk media sosial."]),
  M("head", 2, "Judul tab yang baik untuk halaman produk:", ["Kopi Susu Gula Aren 250 ml — Toko Senja", "Halaman", "Untitled", "index.html"], "Taruh kata paling penting di depan, nama situs di belakang, sekitar 50–60 karakter.", ["Tidak menjelaskan isi.", "Tidak menjelaskan isi.", "Nama file tidak bermakna."]),
  M("head", 2, "<link rel=\"canonical\" href=\"…\"> dipakai untuk…", ["Memberi tahu mesin pencari alamat utama halaman bila ada beberapa URL dengan isi sama", "Membuat halaman lebih cepat", "Mengganti favicon", "Menautkan CSS"], "Mencegah halaman dianggap duplikat.", ["Bukan untuk kecepatan.", "Favicon memakai rel=icon.", "CSS memakai rel=stylesheet."]),
  M("head", 2, "Kenapa <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"> sering ditulis?", ["Membuka koneksi lebih awal ke server font sehingga font dimuat lebih cepat", "Mengunduh semua font", "Wajib untuk Google Fonts", "Mengubah font"], "preconnect hanya menyiapkan jalur, tidak mengunduh file.", ["Tidak mengunduh.", "Tidak wajib.", "Tidak mengubah font."]),
  M("head", 2, "Warna bilah alamat browser di HP bisa diatur dengan…", ["<meta name=\"theme-color\" content=\"#0D1B2A\">", "<meta color>", "<body color>", "CSS :browser"], "theme-color membuat aplikasi web terasa seperti aplikasi asli.", ["Atribut itu tidak ada.", "Bukan cara yang benar.", "Selector itu tidak ada."]),
  M("head", 2, "File manifest.webmanifest diperlukan agar situs…", ["Bisa dipasang ke layar utama HP sebagai aplikasi (PWA) dengan nama dan ikon sendiri", "Lebih cepat", "Terindeks Google", "Memakai database"], "KodeQuiz memakai manifest dan service worker sehingga bisa dipasang dan dibuka offline.", ["Kecepatan dari service worker/cache.", "Tidak terkait indeks.", "Tidak terkait database."]),
  M("head", 3, "Skrip yang memanipulasi elemen di <body> diletakkan di <head> tanpa defer. Akibatnya:", ["Skrip jalan sebelum elemennya ada, sehingga querySelector menghasilkan null", "Tidak ada masalah", "Halaman tidak tampil sama sekali", "CSS rusak"], "Solusi: tambahkan defer, atau taruh skrip di akhir body.", ["Elemen belum dibuat.", "Halaman tetap tampil, tapi skrip error.", "CSS tidak terkait."]),
  M("head", 2, "<base href> dan <meta http-equiv=\"refresh\"> jarang dipakai karena…", ["Bisa membingungkan alamat relatif dan memindah halaman tanpa izin pengguna", "Dilarang HTML5", "Tidak didukung browser", "Membuat halaman lambat"], "Untuk pindah halaman lebih baik memakai redirect dari server.", ["Masih sah di HTML5.", "Didukung.", "Bukan soal kecepatan."]),
  M("head", 1, "Isi <head> yang TIDAK tampil di halaman tapi penting:", ["title, meta, link, script", "h1, p, img", "nav, main, footer", "table, form"], "Elemen di head menjadi 'kartu identitas' halaman.", ["Itu isi body.", "Itu isi body.", "Itu isi body."]),
  I("head", 1, "Atribut agar skrip menunggu HTML selesai dibaca: <script src=\"app.js\" ____>", ["defer"], "defer menjalankan skrip setelah HTML selesai, berurutan."),
  I("head", 2, "Nilai meta name untuk deskripsi halaman: <meta name=\"____\" content=\"…\">", ["description"], "meta description untuk hasil pencarian."),

  // ---- interaktif (+15) ----
  M("interaktif", 1, "Bagian yang bisa dibuka-tutup tanpa JavaScript:", ["<details> dengan <summary> sebagai judulnya", "<toggle>", "<div open>", "<accordion>"], "Cocok untuk FAQ. Tambahkan atribut open agar terbuka sejak awal.", ["Tag itu tidak ada.", "div tidak bisa dibuka-tutup.", "Tag itu tidak ada."]),
  M("interaktif", 2, "Atribut name yang sama pada beberapa <details> (browser baru) membuat…", ["Hanya satu yang terbuka pada satu waktu, seperti accordion", "Semua terbuka", "Semua tertutup selamanya", "Error"], "Fitur baru HTML; di browser lama setiap details tetap mandiri.", ["Hanya satu terbuka.", "Masih bisa dibuka.", "Sah."]),
  M("interaktif", 2, "Membuka <dialog id=\"d\"> sebagai jendela modal (latar tidak bisa diklik):", ["document.getElementById(\"d\").showModal()", "d.show() selalu modal", "d.open = true", "d.style.display = \"block\""], "showModal memberi latar (::backdrop), mengunci fokus di dialog, dan Esc menutupnya.", ["show() tidak modal.", "Hanya membuka tanpa modal.", "Hanya tampilan, tanpa perilaku modal."]),
  M("interaktif", 2, "Tombol di dalam <form method=\"dialog\"> di dalam <dialog> akan…", ["Menutup dialog tanpa JavaScript", "Mengirim data ke server", "Memuat ulang halaman", "Tidak melakukan apa-apa"], "Nilai tombol tersedia di dialog.returnValue.", ["method=dialog tidak ke server.", "Tidak memuat ulang.", "Dialog tertutup."]),
  M("interaktif", 2, "Atribut sandbox pada <iframe> berguna untuk…", ["Membatasi apa yang boleh dilakukan halaman di dalamnya (skrip, form, popup)", "Membuat iframe lebih besar", "Mempercepat iframe", "Menyembunyikan iframe"], "Code Runner KodeQuiz memakai sandbox tanpa allow-same-origin agar kode pengguna tidak menyentuh data KodeQuiz.", ["Tidak soal ukuran.", "Tidak soal kecepatan.", "Tidak menyembunyikan."]),
  M("interaktif", 2, "Atribut title pada <iframe> (misalnya title=\"Peta lokasi toko\") wajib untuk…", ["Pembaca layar, agar tahu isi bingkai itu", "SEO", "Ukuran", "Keamanan"], "Tanpa title, pembaca layar hanya menyebut 'frame'.", ["Fungsi utamanya aksesibilitas.", "Tidak soal ukuran.", "Keamanan memakai sandbox."]),
  M("interaktif", 2, "srcset=\"foto-480.jpg 480w, foto-1200.jpg 1200w\" pada <img> membuat…", ["Browser memilih file yang ukurannya pas dengan layar, menghemat kuota di HP", "Menampilkan dua gambar", "Memotong gambar", "Membuat animasi"], "Tambahkan sizes untuk memberi tahu lebar tampil gambar.", ["Hanya satu yang tampil.", "Tidak memotong.", "Bukan animasi."]),
  M("interaktif", 2, "<picture> dengan <source type=\"image/avif\"> lalu <img> dipakai untuk…", ["Memberi format modern bila didukung, dengan cadangan JPG untuk browser lama", "Membuat galeri", "Menampilkan semua format", "Video"], "Browser memakai source pertama yang didukung; img wajib sebagai cadangan dan pemegang alt.", ["Bukan galeri.", "Hanya satu yang tampil.", "Video memakai video."]),
  M("interaktif", 2, "Elemen <progress value=\"70\" max=\"100\"> menampilkan…", ["Batang kemajuan 70%", "Angka 70", "Slider yang bisa digeser", "Grafik garis"], "Untuk ukuran dalam rentang (misalnya kapasitas disk) ada <meter>.", ["Tampil sebagai batang.", "Slider memakai input range.", "Bukan grafik."]),
  M("interaktif", 2, "Atribut contenteditable pada sebuah <div> membuat…", ["Isi div bisa diketik dan diubah langsung oleh pengguna", "Div tersembunyi", "Div bisa diseret", "Div menjadi form"], "Dasar editor teks kaya. Untuk form biasa tetap pakai input/textarea.", ["Tidak menyembunyikan.", "Seret memakai draggable.", "Bukan form."]),
  M("interaktif", 2, "Atribut hidden pada elemen:", ["Menyembunyikan elemen (seperti display: none) dan juga dari pembaca layar", "Membuat elemen transparan tapi tetap bisa diklik", "Menghapus elemen dari HTML", "Mengunci elemen"], "Bisa diubah lewat JavaScript: el.hidden = false.", ["Tidak bisa diklik.", "Elemen tetap ada di HTML.", "Bukan mengunci."]),
  M("interaktif", 2, "Entitas &nbsp; dipakai untuk…", ["Spasi yang tidak boleh dipisah ke baris berikutnya (misalnya 'Rp 18.000' tetap satu baris)", "Baris baru", "Tab", "Garis"], "Entitas lain: &copy; ©, &amp; &, &lt; <.", ["Baris baru memakai br.", "HTML tidak punya entitas Tab yang umum dipakai.", "Garis memakai hr."]),
  M("interaktif", 2, "Atribut tabindex=\"0\" pada elemen kustom berarti…", ["Elemen bisa difokus dengan Tab sesuai urutan di HTML", "Elemen difokus paling awal", "Elemen tidak bisa difokus", "Elemen disembunyikan"], "tabindex=\"-1\" bisa difokus lewat JavaScript saja. Hindari angka positif karena mengacak urutan.", ["Angka positif yang mengubah urutan.", "-1 yang tidak lewat Tab.", "Tidak menyembunyikan."]),
  I("interaktif", 1, "Tag judul yang selalu tampil di dalam details: <____>", ["summary"], "summary bisa diklik untuk membuka-tutup."),
  I("interaktif", 1, "Tag jendela modal bawaan HTML: <____>", ["dialog"], "dialog + showModal()."),
  );

  dalami("struktur", `
<h4>Kerangka HTML, baris demi baris</h4>
<pre><code>&lt;!DOCTYPE html&gt;                  &lt;!-- 1) ini HTML5 --&gt;
&lt;html lang="id"&gt;                 &lt;!-- 2) bahasa halaman --&gt;
  &lt;head&gt;                         &lt;!-- 3) info untuk browser (tidak tampil) --&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Toko Senja&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;                         &lt;!-- 4) yang tampil di layar --&gt;
    &lt;h1&gt;Selamat datang&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4>Anatomi satu elemen</h4>
<pre><code>&lt;a href="kontak.html" class="tombol"&gt;Hubungi kami&lt;/a&gt;
 ↑  ↑ atribut="nilai"  ↑            ↑ isi         ↑ tag penutup
 tag pembuka</code></pre>
<h4>Path: alamat file dari posisi sekarang</h4>
<table class="mini-pivot"><tr><th>Tulis</th><th>Artinya</th></tr>
<tr><td><code>foto.jpg</code></td><td>file di folder yang sama</td></tr>
<tr><td><code>img/foto.jpg</code></td><td>masuk folder img</td></tr>
<tr><td><code>../foto.jpg</code></td><td>naik satu folder</td></tr>
<tr><td><code>/img/foto.jpg</code></td><td>mulai dari akar situs</td></tr>
<tr><td><code>https://…</code></td><td>alamat lengkap ke situs lain</td></tr></table>
<p>Kesalahan path adalah penyebab paling umum gambar tidak muncul. Cek huruf besar-kecil juga: di server Linux, <code>Foto.JPG</code> berbeda dengan <code>foto.jpg</code>.</p>
<h4>Kebiasaan rapi</h4>
<ul><li>Tag dan atribut huruf kecil semua.</li><li>Nilai atribut selalu dalam kutip ganda.</li><li>Jorokkan isi elemen supaya bersarangnya terlihat.</li><li>Nama file tanpa spasi: <code>laporan-mei.html</code>.</li></ul>
<div class="praktik"><b>Coba sendiri</b> (Code Runner → index.html): tulis kerangka lengkap di atas, ganti judulnya dengan namamu, lalu tambahkan satu paragraf dan satu link ke situs favoritmu.</div>`);

  dalami("teks", `
<h4>Heading adalah daftar isi, bukan ukuran huruf</h4>
<pre><code>&lt;h1&gt;Belajar SQL&lt;/h1&gt;           &lt;!-- judul halaman: satu saja --&gt;
  &lt;h2&gt;SELECT&lt;/h2&gt;
    &lt;h3&gt;WHERE&lt;/h3&gt;
    &lt;h3&gt;ORDER BY&lt;/h3&gt;
  &lt;h2&gt;JOIN&lt;/h2&gt;</code></pre>
<p>Pengguna pembaca layar sering melompat dari heading ke heading. Struktur yang rapi sama dengan daftar isi yang rapi. Ukuran diatur dengan CSS.</p>
<h4>Tag teks bermakna vs gaya saja</h4>
<table class="mini-pivot"><tr><th>Ingin</th><th>Bermakna</th><th>Hanya gaya</th></tr>
<tr><td>penting/peringatan</td><td><code>&lt;strong&gt;</code></td><td><code>&lt;b&gt;</code></td></tr>
<tr><td>penekanan</td><td><code>&lt;em&gt;</code></td><td><code>&lt;i&gt;</code></td></tr>
<tr><td>sorotan</td><td><code>&lt;mark&gt;</code></td><td>CSS background</td></tr>
<tr><td>kode</td><td><code>&lt;code&gt;</code></td><td>font monospace</td></tr>
<tr><td>singkatan</td><td><code>&lt;abbr title="…"&gt;</code></td><td>-</td></tr></table>
<h4>Tiga jenis daftar</h4>
<pre><code>&lt;ol&gt;&lt;li&gt;Langkah 1&lt;/li&gt;&lt;li&gt;Langkah 2&lt;/li&gt;&lt;/ol&gt;        &lt;!-- urutan penting --&gt;
&lt;ul&gt;&lt;li&gt;Kopi&lt;/li&gt;&lt;li&gt;Teh&lt;/li&gt;&lt;/ul&gt;                   &lt;!-- urutan bebas --&gt;
&lt;dl&gt;&lt;dt&gt;HTML&lt;/dt&gt;&lt;dd&gt;Bahasa kerangka halaman&lt;/dd&gt;&lt;/dl&gt;  &lt;!-- istilah: arti --&gt;</code></pre>
<p>Ingat: anak langsung dari <code>ul</code>/<code>ol</code> hanya boleh <code>li</code>. Sub-daftar ditaruh di dalam <code>li</code>.</p>
<div class="praktik"><b>Coba sendiri:</b> buat halaman resep dengan h1 nama masakan, h2 "Bahan" (ul) dan h2 "Cara membuat" (ol), lalu beri <code>&lt;strong&gt;</code> pada peringatan "jangan sampai gosong".</div>`);

  dalami("media", `
<h4>Link: empat jenis tujuan</h4>
<pre><code>&lt;a href="tentang.html"&gt;Tentang kami&lt;/a&gt;                       &lt;!-- halaman lain --&gt;
&lt;a href="#harga"&gt;Lihat harga&lt;/a&gt;                               &lt;!-- bagian di halaman ini --&gt;
&lt;a href="https://contoh.com" target="_blank" rel="noopener"&gt;Situs mitra&lt;/a&gt;
&lt;a href="mailto:halo@contoh.com"&gt;Kirim email&lt;/a&gt;</code></pre>
<h4>Gambar yang benar</h4>
<pre><code>&lt;img src="img/kopi.webp"
     alt="Segelas kopi susu gula aren dengan es batu"
     width="600" height="400"
     loading="lazy"&gt;</code></pre>
<table class="mini-pivot"><tr><th>Atribut</th><th>Kenapa</th></tr>
<tr><td><code>alt</code></td><td>pembaca layar dan cadangan saat gagal dimuat; kosongkan untuk hiasan</td></tr>
<tr><td><code>width/height</code></td><td>halaman tidak meloncat saat gambar muncul</td></tr>
<tr><td><code>loading="lazy"</code></td><td>hemat kuota untuk gambar di bawah</td></tr></table>
<h4>Memilih format</h4>
<table class="mini-pivot"><tr><th>Format</th><th>Cocok untuk</th></tr>
<tr><td>WebP / AVIF</td><td>foto, paling hemat</td></tr><tr><td>JPG</td><td>foto, didukung semua</td></tr>
<tr><td>PNG</td><td>tangkapan layar, transparansi tajam</td></tr><tr><td>SVG</td><td>logo, ikon, ilustrasi garis</td></tr></table>
<h4>Menulis alt yang baik</h4>
<p>Tanyakan: "kalau gambarnya hilang, kalimat apa yang menggantikan fungsinya?" Untuk grafik, tulis kesimpulannya ("Penjualan naik 20% di Mei"), bukan "grafik". Jangan menulis "gambar dari…" karena pembaca layar sudah menyebut "gambar".</p>
<div class="praktik"><b>Coba sendiri:</b> buat kartu produk berisi gambar (dengan alt, width, height), nama produk, dan link "Pesan via email" memakai mailto.</div>`);

  dalami("form", `
<h4>Form yang benar dari awal</h4>
<pre><code>&lt;form action="/daftar" method="post"&gt;
  &lt;label for="nama"&gt;Nama lengkap&lt;/label&gt;
  &lt;input id="nama" name="nama" required autocomplete="name"&gt;

  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input id="email" name="email" type="email" required autocomplete="email"&gt;

  &lt;fieldset&gt;
    &lt;legend&gt;Paket&lt;/legend&gt;
    &lt;label&gt;&lt;input type="radio" name="paket" value="dasar" checked&gt; Dasar&lt;/label&gt;
    &lt;label&gt;&lt;input type="radio" name="paket" value="pro"&gt; Pro&lt;/label&gt;
  &lt;/fieldset&gt;

  &lt;button type="submit"&gt;Daftar&lt;/button&gt;
&lt;/form&gt;</code></pre>
<h4>Tiga atribut yang sering tertukar</h4>
<table class="mini-pivot"><tr><th>Atribut</th><th>Dipakai oleh</th><th>Fungsi</th></tr>
<tr><td><code>id</code></td><td>label (for), CSS, JavaScript</td><td>nama unik elemen</td></tr>
<tr><td><code>name</code></td><td>server saat form dikirim</td><td>nama data yang dikirim</td></tr>
<tr><td><code>value</code></td><td>server</td><td>nilai yang dikirim (radio, checkbox, option)</td></tr></table>
<h4>Validasi bawaan tanpa JavaScript</h4>
<table class="mini-pivot"><tr><th>Kebutuhan</th><th>Tulis</th></tr>
<tr><td>wajib</td><td><code>required</code></td></tr><tr><td>format email/URL</td><td><code>type="email"</code>, <code>type="url"</code></td></tr>
<tr><td>rentang angka</td><td><code>type="number" min="1" max="10"</code></td></tr><tr><td>panjang teks</td><td><code>minlength="8" maxlength="20"</code></td></tr>
<tr><td>pola khusus</td><td><code>pattern="08[0-9]{8,11}"</code> + <code>title="Contoh: 081234567890"</code></td></tr></table>
<p>Validasi di browser hanya membantu pengguna. Server tetap wajib memeriksa ulang, karena siapa pun bisa mengirim data tanpa melewati form.</p>
<div class="praktik"><b>Coba sendiri:</b> buat form pendaftaran kursus berisi nama, email, nomor HP (pattern), pilihan kelas (select), dan persetujuan syarat (checkbox required).</div>`);

  dalami("semantik", `
<h4>Denah halaman dengan tag bermakna</h4>
<pre><code>&lt;body&gt;
  &lt;header&gt;                     &lt;!-- logo + menu --&gt;
    &lt;nav&gt;…&lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;                       &lt;!-- isi utama: satu saja --&gt;
    &lt;h1&gt;Menu Kopi&lt;/h1&gt;
    &lt;section&gt;                  &lt;!-- bagian bertema --&gt;
      &lt;h2&gt;Kopi Susu&lt;/h2&gt;
      &lt;article class="kartu"&gt;…&lt;/article&gt;   &lt;!-- isi yang bisa berdiri sendiri --&gt;
    &lt;/section&gt;
    &lt;aside&gt;Promo minggu ini&lt;/aside&gt;      &lt;!-- sampingan --&gt;
  &lt;/main&gt;
  &lt;footer&gt;© 2026 Toko Senja&lt;/footer&gt;
&lt;/body&gt;</code></pre>
<h4>Pohon keputusan memilih tag</h4>
<ol><li>Bisa diklik untuk aksi? → <code>&lt;button&gt;</code>. Pindah halaman? → <code>&lt;a&gt;</code>.</li><li>Menu navigasi? → <code>&lt;nav&gt;</code>.</li><li>Isi utama halaman? → <code>&lt;main&gt;</code>.</li><li>Bisa berdiri sendiri bila dipindah? → <code>&lt;article&gt;</code>.</li><li>Bagian bertema berjudul? → <code>&lt;section&gt;</code>.</li><li>Tidak ada yang cocok, hanya butuh pembungkus untuk gaya? → <code>&lt;div&gt;</code> (blok) atau <code>&lt;span&gt;</code> (di dalam teks).</li></ol>
<h4>id vs class vs data-*</h4>
<pre><code>&lt;section id="harga"&gt;                         &lt;!-- unik: tujuan link #harga --&gt;
  &lt;article class="kartu promo" data-id="7" data-harga="18000"&gt;
                                             &lt;!-- class: gaya bersama; data-*: info untuk JS --&gt;</code></pre>
<div class="praktik"><b>Coba sendiri:</b> ubah halaman yang semuanya memakai div menjadi header, nav, main, section, article, dan footer. Bandingkan dengan pembaca layar (Narrator di Windows: Ctrl+Win+Enter).</div>`);

  dalami("a11y", `
<h4>Aksesibilitas = semua orang bisa memakai situsmu</h4>
<p>Termasuk pengguna pembaca layar (tunanetra), pengguna keyboard saja, buta warna, penglihatan rendah, atau sekadar memakai HP di bawah terik matahari. Situs yang aksesibel biasanya juga lebih rapi dan lebih baik di mesin pencari.</p>
<h4>Daftar periksa cepat</h4>
<table class="mini-pivot"><tr><th>Periksa</th><th>Caranya</th></tr>
<tr><td>Semua gambar punya alt</td><td>alt bermakna, atau alt="" untuk hiasan</td></tr>
<tr><td>Semua kolom punya label</td><td>label for = id input</td></tr>
<tr><td>Bisa dipakai tanpa mouse</td><td>coba Tab, Enter, Spasi, Esc</td></tr>
<tr><td>Fokus terlihat</td><td>jangan hapus outline tanpa pengganti</td></tr>
<tr><td>Kontras cukup</td><td>≥ 4,5:1 untuk teks biasa</td></tr>
<tr><td>Link jelas</td><td>bukan "klik di sini"</td></tr>
<tr><td>Bahasa diatur</td><td><code>&lt;html lang="id"&gt;</code></td></tr>
<tr><td>Heading berurutan</td><td>h1 → h2 → h3 tanpa lompat</td></tr></table>
<h4>ARIA seperlunya</h4>
<pre><code>&lt;button aria-label="Tutup"&gt;✕&lt;/button&gt;              &lt;!-- tombol ikon --&gt;
&lt;div aria-live="polite" id="status"&gt;&lt;/div&gt;           &lt;!-- pengumuman 'Tersimpan' --&gt;
&lt;svg aria-hidden="true"&gt;…&lt;/svg&gt;                       &lt;!-- ikon hiasan --&gt;</code></pre>
<p>Aturan pertama ARIA: kalau ada tag HTML yang sudah tepat, pakai tag itu.</p>
<h4>SEO dasar yang sejalan</h4>
<ul><li><code>title</code> unik per halaman, kata penting di depan.</li><li><code>meta description</code> 1–2 kalimat menarik.</li><li>Satu h1, heading berurutan, alt bermakna.</li><li>URL rapi: <code>/kursus/sql-dasar</code>, bukan <code>/p?id=82</code>.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buka salah satu proyekmu, jalankan Lighthouse (DevTools → Lighthouse → Accessibility), lalu perbaiki tiga masalah teratas.</div>`);

  dalami("tabel", `
<h4>Tabel lengkap yang aksesibel</h4>
<pre><code>&lt;table&gt;
  &lt;caption&gt;Penjualan per kota, Januari 2026&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th scope="col"&gt;Kota&lt;/th&gt;&lt;th scope="col"&gt;Pesanan&lt;/th&gt;&lt;th scope="col"&gt;Omzet&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;th scope="row"&gt;Jakarta&lt;/th&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;17.050.000&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;th scope="row"&gt;Bandung&lt;/th&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;4.300.000&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;&lt;th scope="row"&gt;Total&lt;/th&gt;&lt;td&gt;7&lt;/td&gt;&lt;td&gt;21.350.000&lt;/td&gt;&lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code></pre>
<h4>Menggabung sel: gambar dulu di kertas</h4>
<table class="mini-pivot"><tr><td rowspan="2">A (rowspan=2)</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td></tr><tr><td colspan="3">F (colspan=3)</td></tr></table>
<p>Baris kedua hanya menulis D dan E, karena kolom pertamanya sudah dipakai A. Baris ketiga hanya satu sel yang melebar 3 kolom. Hitung kolom per baris: harus selalu 3.</p>
<h4>CSS dasar tabel yang enak dibaca</h4>
<pre><code>table { border-collapse: collapse; width: 100%; }
th, td { padding: 8px 12px; border-bottom: 1px solid #ddd; text-align: left; }
td:nth-child(n+2) { text-align: right; font-variant-numeric: tabular-nums; }
tbody tr:nth-child(even) { background: #f6f6f6; }
.wadah-tabel { overflow-x: auto; }   /* bungkus tabel lebar di HP */</code></pre>
<div class="praktik"><b>Coba sendiri:</b> buat jadwal pelajaran Senin–Jumat dengan jam di kolom pertama (th scope="row"), dan satu sel "Istirahat" yang melebar lima kolom.</div>`);

  dalami("head", `
<h4>&lt;head&gt; lengkap untuk situs portofolio</h4>
<pre><code>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Analisis Penjualan Toko — Portofolio Jauza&lt;/title&gt;
  &lt;meta name="description" content="Dashboard penjualan dengan SQL dan Python: tren bulanan, produk terlaris, dan segmentasi pelanggan."&gt;

  &lt;!-- kartu tautan saat dibagikan --&gt;
  &lt;meta property="og:title" content="Analisis Penjualan Toko"&gt;
  &lt;meta property="og:image" content="https://contoh.com/og.png"&gt;

  &lt;link rel="icon" href="ikon.svg" type="image/svg+xml"&gt;
  &lt;link rel="stylesheet" href="gaya.css"&gt;
  &lt;script src="app.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>
<h4>Memuat skrip: tiga cara</h4>
<table class="mini-pivot"><tr><th>Cara</th><th>Kapan jalan</th><th>Cocok untuk</th></tr>
<tr><td><code>&lt;script src&gt;</code> biasa</td><td>segera; HTML berhenti dibaca sampai selesai</td><td>hampir tidak pernah di head</td></tr>
<tr><td><code>defer</code></td><td>setelah HTML selesai, berurutan</td><td>skrip aplikasi (paling umum)</td></tr>
<tr><td><code>async</code></td><td>begitu selesai diunduh, urutan acak</td><td>skrip mandiri: analitik, iklan</td></tr>
<tr><td><code>type="module"</code></td><td>seperti defer</td><td>kode modern dengan import</td></tr></table>
<h4>Menulis title dan description</h4>
<ul><li><b>Title</b>: unik per halaman, 50–60 karakter, kata kunci di depan.</li><li><b>Description</b>: 140–160 karakter, menjelaskan isi dan mengajak klik.</li><li>Jangan menyalin title yang sama ke semua halaman.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> tulis ulang &lt;head&gt; salah satu proyek portofoliomu dengan title, description, og:title, og:image, favicon, dan skrip ber-defer. Cek tampilan kartu tautannya dengan mengirim link ke diri sendiri di WhatsApp.</div>`);

  dalami("interaktif", `
<h4>Interaksi bawaan HTML (tanpa satu baris JavaScript)</h4>
<pre><code>&lt;details&gt;
  &lt;summary&gt;Berapa lama pengiriman?&lt;/summary&gt;
  &lt;p&gt;2–3 hari kerja untuk Pulau Jawa.&lt;/p&gt;
&lt;/details&gt;

&lt;dialog id="konfirmasi"&gt;
  &lt;form method="dialog"&gt;
    &lt;p&gt;Hapus item ini?&lt;/p&gt;
    &lt;button value="batal"&gt;Batal&lt;/button&gt;
    &lt;button value="ya"&gt;Ya, hapus&lt;/button&gt;
  &lt;/form&gt;
&lt;/dialog&gt;
&lt;!-- JS cukup satu baris untuk membuka: konfirmasi.showModal() --&gt;</code></pre>
<h4>Elemen kecil yang sering dilupakan</h4>
<table class="mini-pivot"><tr><th>Elemen/atribut</th><th>Kegunaan</th></tr>
<tr><td><code>&lt;progress&gt;</code>, <code>&lt;meter&gt;</code></td><td>batang kemajuan, ukuran dalam rentang</td></tr>
<tr><td><code>&lt;input type="range"&gt;</code></td><td>slider (volume, harga)</td></tr>
<tr><td><code>&lt;datalist&gt;</code></td><td>saran isian untuk input</td></tr>
<tr><td><code>&lt;output&gt;</code></td><td>tempat hasil hitungan</td></tr>
<tr><td><code>hidden</code></td><td>sembunyikan elemen</td></tr>
<tr><td><code>title</code></td><td>teks kecil saat kursor diarahkan</td></tr>
<tr><td><code>tabindex</code></td><td>atur bisa/tidaknya difokus</td></tr>
<tr><td><code>draggable</code></td><td>elemen bisa diseret</td></tr></table>
<h4>Entitas karakter yang berguna</h4>
<table class="mini-pivot"><tr><th>Tulis</th><th>Tampil</th></tr>
<tr><td><code>&amp;lt; &amp;gt;</code></td><td>&lt; &gt;</td></tr><tr><td><code>&amp;amp;</code></td><td>&amp;</td></tr>
<tr><td><code>&amp;nbsp;</code></td><td>spasi tak terputus</td></tr><tr><td><code>&amp;copy;</code></td><td>©</td></tr>
<tr><td><code>&amp;rarr;</code></td><td>→</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> buat halaman FAQ dengan lima &lt;details&gt; yang memakai name sama (hanya satu terbuka), dan satu tombol yang membuka &lt;dialog&gt; berisi form kontak.</div>`);
})();
