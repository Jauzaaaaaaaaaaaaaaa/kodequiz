// ============ HTML & CSS lanjutan (2) ============
// HTML bab 7–9: tabel, isi <head>, elemen interaktif & atribut global.
// CSS bab 8–12: selector lanjut, satuan & warna, animasi, layout lanjut, merapikan CSS.
// Disusun dari MDN Learn (Core: Structuring content, Styling basics, CSS layout), materi WPU & Programmer Zaman Now.

SOAL_HTML.push(
// ---- HTML BAB 7: tabel ----
{k:"tabel",t:"mc",lv:1,q:"Bagian tabel yang berisi baris judul kolom ditandai dengan…",o:["<thead>","<tbody>","<tfoot>","<caption>"],a:0,
 e:"Tabel lengkap dibagi tiga: <thead> (judul kolom), <tbody> (isi data), <tfoot> (ringkasan seperti total). Pembagian ini membantu screen reader, pencetakan (judul diulang tiap halaman), dan penataan CSS.",
 w:[null,"<tbody> berisi data utama.","<tfoot> untuk baris total/ringkasan.","<caption> adalah judul seluruh tabel."]},
{k:"tabel",t:"mc",lv:1,q:"Beda <th> dan <td>:",o:["<th> sel judul (tebal & tengah secara bawaan), <td> sel data biasa","<th> untuk baris, <td> untuk kolom","<th> hanya boleh di <tfoot>","Tidak ada bedanya"],a:0,
 e:"th = table header, td = table data. th bukan sekadar tebal: ia memberi tahu screen reader bahwa sel itu judul bagi sel-sel lain.",
 w:[null,"Baris memakai <tr>.","<th> biasanya di <thead>, juga bisa di awal baris.","Maknanya berbeda."]},
{k:"tabel",t:"mc",lv:2,q:"Sel <td colspan=\"3\">Total</td> akan…",o:["Melebar menempati 3 kolom","Meninggi menempati 3 baris","Muncul 3 kali","Bergeser 3 kolom ke kanan"],a:0,
 e:"colspan menggabungkan sel ke samping (kolom), rowspan menggabungkan ke bawah (baris). Contoh khas: baris 'Total' di bawah tabel penjualan yang merentang beberapa kolom sebelum kolom nilai.",
 w:[null,"Itu rowspan.","Sel tetap satu.","Tidak menggeser, tapi melebar."]},
{k:"tabel",t:"mc",lv:2,q:"Tabel 4 kolom. Baris pertama berisi <td rowspan=\"2\">Jakarta</td> lalu 3 <td> lagi. Berapa <td> yang ditulis di baris KEDUA?",o:["3","4","2","1"],a:0,
 e:"Sel Jakarta sudah 'meminjam' satu tempat di baris kedua karena rowspan=\"2\". Jadi baris kedua cukup menulis 4 - 1 = 3 sel. Kesalahan menghitung ini membuat tabel bergeser berantakan.",
 w:[null,"Satu tempat sudah dipakai oleh rowspan.","Hanya satu sel yang merentang.","Tiga kolom lain tetap perlu diisi."]},
{k:"tabel",t:"mc",lv:1,q:"Judul yang menjelaskan isi seluruh tabel, ditulis tepat setelah <table>:",o:["<caption>","<title>","<th>","<legend>"],a:0,
 e:"<caption> seperti judul gambar di buku: 'Tabel 1. Penjualan per kota 2026'. Screen reader membacakannya lebih dulu sehingga pengguna tahu tabel ini tentang apa.",
 w:[null,"<title> untuk judul tab browser.","<th> untuk judul kolom/baris.","<legend> untuk judul <fieldset> di form."]},
{k:"tabel",t:"mc",lv:2,q:"Atribut pada <th> yang memberi tahu screen reader bahwa sel itu judul untuk satu KOLOM:",o:["scope=\"col\"","for=\"col\"","role=\"kolom\"","colspan=\"col\""],a:0,
 e:"scope=\"col\" untuk judul kolom, scope=\"row\" untuk judul baris (misalnya nama kota di awal baris). Dengan ini, saat pengguna tunanetra berada di sel '12', screen reader membacakan 'Maret, Jakarta, 12'.",
 w:[null,"for dipakai pada <label>.","Tidak ada role bernama kolom.","colspan berisi angka."]},
{k:"tabel",t:"mc",lv:2,q:"Kapan <table> TIDAK boleh dipakai?",o:["Untuk menyusun tata letak halaman (kolom menu dan isi)","Untuk jadwal pelajaran","Untuk daftar harga produk","Untuk laporan nilai siswa"],a:0,
 e:"Tabel hanya untuk data tabular (data yang punya baris dan kolom bermakna). Dulu orang menyusun layout dengan tabel; sekarang itu dianggap kesalahan karena merusak aksesibilitas dan sulit responsif. Pakai Flexbox/Grid.",
 w:[null,"Jadwal adalah data tabular.","Daftar harga cocok jadi tabel.","Laporan nilai cocok jadi tabel."]},
{k:"tabel",t:"mc",lv:2,q:"Properti CSS agar garis antarsel tabel tidak dobel:",o:["border-collapse: collapse","border-spacing: double","table-border: single","border: merge"],a:0,
 e:"Secara bawaan tiap sel punya garis sendiri sehingga tampak dobel. border-collapse: collapse menyatukan garis yang bersebelahan menjadi satu.",
 w:[null,"Nilai itu tidak ada.","Properti itu tidak ada.","Nilai merge tidak ada."]},
{k:"tabel",t:"mc",lv:2,q:"Selector CSS untuk membuat baris tabel berselang-seling warna (zebra):",o:["tbody tr:nth-child(even)","tr:zebra","tbody tr + tr","table:stripe"],a:0,
 e:"nth-child(even) memilih baris genap (2, 4, 6...), odd memilih baris ganjil. Warna selang-seling membuat mata lebih mudah mengikuti baris panjang.",
 w:[null,"Pseudo-class :zebra tidak ada.","+ memilih semua baris kecuali yang pertama.","Pseudo-class :stripe tidak ada."]},
{k:"tabel",t:"mc",lv:3,q:"Tabel 8 kolom terlalu lebar di layar HP. Solusi paling sederhana yang tetap menjaga tabel utuh:",o:["Bungkus dengan <div style=\"overflow-x: auto\"> agar tabel bisa digulir ke samping","Perkecil font menjadi 6px","Hapus 5 kolom","Ubah semua sel menjadi <p>"],a:0,
 e:"Pembungkus dengan overflow-x: auto membuat tabel bisa digeser horizontal tanpa merusak halaman. Tambahkan juga position: sticky pada kolom pertama agar nama baris tetap terlihat.",
 w:[null,"Teks jadi tidak terbaca.","Datanya hilang.","Struktur tabel hilang."]},
{k:"tabel",t:"is",lv:1,q:"Atribut untuk menggabungkan sel ke BAWAH melintasi beberapa baris: ____=\"2\"",a:["rowspan"],
 e:"rowspan = rentang baris. Pasangannya colspan = rentang kolom."},
{k:"tabel",t:"is",lv:2,q:"Tag pembungkus baris-baris ringkasan (misalnya total) di bagian bawah tabel: <____>",a:["tfoot"],
 e:"<tfoot> diletakkan setelah <tbody>. Saat dicetak di beberapa halaman, browser bisa mengulang thead dan tfoot di setiap halaman."},

// ---- HTML BAB 8: isi <head> ----
{k:"head",t:"mc",lv:1,q:"<meta charset=\"UTF-8\"> berfungsi untuk…",o:["Memastikan huruf seperti é, emoji, dan aksara lain tampil benar","Mempercepat halaman","Mengatur warna","Menambah kata kunci SEO"],a:0,
 e:"UTF-8 adalah pengodean karakter yang mencakup hampir semua huruf di dunia. Tanpa ini, teks bisa berubah jadi simbol aneh seperti Ã©. Taruh di baris paling awal <head>.",
 w:[null,"Kecepatan tidak terpengaruh.","Warna diatur CSS.","charset tidak berhubungan dengan SEO."]},
{k:"head",t:"mc",lv:1,q:"Tanpa baris <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">, situs di HP akan…",o:["Tampil seperti versi desktop yang diperkecil, sehingga teks sangat kecil","Tidak bisa dibuka","Berwarna hitam putih","Otomatis responsif"],a:0,
 e:"Browser HP berpura-pura layarnya selebar ±980px lalu mengecilkan halaman. Meta viewport memberi tahu browser: 'pakai lebar layar sebenarnya'. Tanpa baris ini, media query untuk HP tidak bekerja dengan benar.",
 w:[null,"Halaman tetap bisa dibuka.","Warna tidak berubah.","Justru responsif membutuhkan baris ini."]},
{k:"head",t:"mc",lv:2,q:"Teks yang biasanya muncul di bawah judul hasil pencarian Google diambil dari…",o:["<meta name=\"description\" content=\"…\">","<meta name=\"keywords\">","<h6>","komentar <!-- --> pertama"],a:0,
 e:"Meta description (sekitar 150–160 karakter) adalah 'iklan singkat' halamanmu di hasil pencarian. Google kadang memilih teks lain, tapi deskripsi yang bagus menaikkan peluang diklik. Meta keywords sudah lama diabaikan Google.",
 w:[null,"Meta keywords sudah tidak dipakai Google.","Heading tidak dipakai sebagai cuplikan khusus.","Komentar tidak dibaca mesin pencari sebagai deskripsi."]},
{k:"head",t:"mc",lv:2,q:"Saat tautan situsmu dibagikan di WhatsApp atau LinkedIn, gambar pratinjau diambil dari…",o:["<meta property=\"og:image\" content=\"…\">","<img> pertama di halaman, selalu","favicon","<link rel=\"preview\">"],a:0,
 e:"Open Graph (og:title, og:description, og:image) adalah standar yang dipakai media sosial untuk membuat kartu pratinjau. Gambar ideal 1200×630 px.",
 w:[null,"Kalau og:image tidak ada, aplikasi menebak, sering hasilnya jelek.","Favicon terlalu kecil untuk pratinjau.","rel=\"preview\" tidak ada."]},
{k:"head",t:"mc",lv:1,q:"Ikon kecil di tab browser (favicon) dipasang dengan…",o:["<link rel=\"icon\" href=\"ikon.png\">","<img class=\"favicon\">","<meta name=\"icon\">","<icon src=\"ikon.png\">"],a:0,
 e:"Favicon dipasang di <head> lewat <link rel=\"icon\">. Format SVG atau PNG 32×32/192×192 umum dipakai, ditambah apple-touch-icon untuk iPhone.",
 w:[null,"<img> menampilkan gambar di halaman, bukan di tab.","Meta tidak dipakai untuk favicon.","Tag <icon> tidak ada."]},
{k:"head",t:"mc",lv:2,q:"<script src=\"app.js\" defer></script> di <head> berarti…",o:["File diunduh sambil HTML dibaca, dijalankan setelah HTML selesai, sesuai urutan","Dijalankan seketika, menghentikan pembacaan HTML","Tidak dijalankan sama sekali","Dijalankan kapan saja selesai diunduh, urutan acak"],a:0,
 e:"Tiga cara memuat script:\n• Tanpa atribut: HTML berhenti dibaca sampai script selesai diunduh dan dijalankan (halaman terasa lambat).\n• defer: unduh paralel, jalan setelah HTML selesai, urutan terjaga. Pilihan terbaik untuk script yang memakai DOM.\n• async: unduh paralel, jalan begitu siap, urutan tidak dijamin. Cocok untuk analytics.",
 w:[null,"Itu perilaku script tanpa defer/async.","defer tetap menjalankan script.","Itu perilaku async."]},
{k:"head",t:"mc",lv:1,q:"<html lang=\"id\"> berguna untuk…",o:["Memberi tahu browser, screen reader, dan Google bahwa halaman berbahasa Indonesia","Menerjemahkan halaman otomatis","Mengubah huruf menjadi bahasa Indonesia","Wajib agar CSS bekerja"],a:0,
 e:"Dengan lang yang benar, screen reader membaca dengan logat bahasa yang tepat, browser menawarkan terjemahan dengan benar, dan pemeriksa ejaan bekerja sesuai bahasa.",
 w:[null,"lang tidak menerjemahkan.","Isi teks tidak berubah.","CSS tetap bekerja tanpanya."]},
{k:"head",t:"mc",lv:2,q:"Halaman yang sama bisa dibuka lewat beberapa alamat (misalnya dengan ?utm_source=…). Untuk memberi tahu Google alamat utamanya dipakai…",o:["<link rel=\"canonical\" href=\"https://contoh.id/produk\">","<meta name=\"main\">","<base href>","<a rel=\"utama\">"],a:0,
 e:"Canonical mencegah Google menganggap halamanmu sebagai konten ganda (duplicate content), sehingga nilai SEO-nya tidak terpecah ke banyak alamat.",
 w:[null,"Meta itu tidak ada.","<base> mengubah alamat dasar semua tautan relatif.","rel=\"utama\" tidak dikenal."]},
{k:"head",t:"mc",lv:2,q:"Halaman admin tidak boleh muncul di hasil pencarian. Baris yang tepat di <head>:",o:["<meta name=\"robots\" content=\"noindex\">","<meta name=\"google\" content=\"hide\">","<title>rahasia</title>","<meta private>"],a:0,
 e:"noindex meminta mesin pencari tidak menampilkan halaman. Tapi ini BUKAN pengaman: halaman admin tetap wajib dilindungi login, karena siapa pun yang tahu alamatnya masih bisa membuka.",
 w:[null,"Nilai hide tidak dikenal.","Judul tidak mengatur pengindeksan.","Atribut itu tidak ada."]},
{k:"head",t:"mc",lv:3,q:"Urutan isi <head> yang paling dianjurkan:",o:["meta charset → meta viewport → title → meta description → link CSS → script defer","script → title → meta charset → CSS","CSS → script tanpa defer → charset","title → body → meta"],a:0,
 e:"charset harus paling awal (browser perlu tahu pengodean sebelum membaca teks lain). CSS dimuat di head agar halaman tidak sempat tampil polos. Script dengan defer boleh di head tanpa memperlambat tampilan.",
 w:[null,"charset harus pertama.","Script tanpa defer menghambat tampilan.","body tidak berada di dalam head."]},
{k:"head",t:"is",lv:1,q:"Atribut script yang menunda eksekusi sampai seluruh HTML selesai dibaca (urutan tetap terjaga): <script src=\"app.js\" ____>",a:["defer"],
 e:"defer adalah pilihan aman untuk hampir semua script halaman. type=\"module\" otomatis berperilaku seperti defer."},
{k:"head",t:"is",lv:2,q:"Awalan properti meta untuk kartu pratinjau media sosial (Open Graph), contoh property=\"____:title\"",a:["og"],
 e:"og:title, og:description, og:image, og:url. Twitter/X juga membaca twitter:card."},

// ---- HTML BAB 9: elemen interaktif & atribut global ----
{k:"interaktif",t:"mc",lv:1,q:"Membuat bagian FAQ yang bisa dibuka-tutup TANPA JavaScript:",o:["<details><summary>Pertanyaan</summary>Jawaban</details>","<toggle>Pertanyaan</toggle>","<div hidden onclick>","<faq>"],a:0,
 e:"<details> menyembunyikan isinya; <summary> adalah judul yang bisa diklik. Gratis aksesibilitas keyboard. Tambahkan atribut open agar terbuka sejak awal, dan atribut name yang sama pada beberapa <details> agar hanya satu yang terbuka (akordeon).",
 w:[null,"Tag <toggle> tidak ada.","hidden menyembunyikan permanen dan onclick butuh JS.","Tag <faq> tidak ada."]},
{k:"interaktif",t:"mc",lv:2,q:"Elemen HTML bawaan untuk jendela modal (pop-up) yang mengunci fokus dan bisa ditutup dengan Esc:",o:["<dialog> dengan method showModal()","<popup>","<div class=\"modal\"> saja sudah cukup","<alert>"],a:0,
 e:"<dialog id=\"konfirmasi\"> lalu dibuka dengan konfirmasi.showModal() dan ditutup dengan close() atau form method=\"dialog\". Browser mengurus latar gelap (::backdrop), penguncian fokus, dan tombol Esc.",
 w:[null,"Tag <popup> tidak ada.","div biasa tidak mengunci fokus dan tidak menutup dengan Esc.","Tag <alert> tidak ada."]},
{k:"interaktif",t:"mc",lv:2,q:"Atribut wajib demi aksesibilitas saat menyematkan video YouTube dengan <iframe>:",o:["title=\"…\" yang menjelaskan isi iframe","name=\"youtube\"","border=\"0\"","autoplay"],a:0,
 e:"Screen reader membacakan title untuk memberi tahu isi bingkai, misalnya title=\"Video: cara membuat pivot table\". Tambahkan juga loading=\"lazy\" agar video baru dimuat saat mendekati layar.",
 w:[null,"name tidak dibacakan sebagai penjelasan.","Garis diatur dengan CSS.","autoplay justru mengganggu pengguna."]},
{k:"interaktif",t:"mc",lv:2,q:"HTML: <button data-id-produk=\"42\">. Cara membaca nilainya di JavaScript:",o:["tombol.dataset.idProduk","tombol.data.idproduk","tombol.dataset[\"id-produk\"]","tombol.getData(\"42\")"],a:0,
 e:"Atribut data-* menyimpan data tambahan di elemen. Di JavaScript dibaca lewat dataset, dan nama berstrip diubah menjadi camelCase: data-id-produk → dataset.idProduk. Nilainya selalu teks (\"42\").",
 w:[null,"Propertinya bernama dataset, dengan camelCase.","dataset memakai camelCase, bukan strip.","Method itu tidak ada."]},
{k:"interaktif",t:"mc",lv:1,q:"Untuk menampilkan tulisan <p> apa adanya di halaman (bukan sebagai tag), karakter < ditulis sebagai…",o:["&lt;","&gt;","&amp;","\\<"],a:0,
 e:"Entitas karakter untuk simbol yang punya arti khusus di HTML:\n• &lt; untuk <\n• &gt; untuk >\n• &amp; untuk &\n• &quot; untuk tanda kutip\n• &nbsp; spasi yang tidak boleh dipisah baris\n• &copy; untuk ©",
 w:[null,"&gt; untuk >.","&amp; untuk &.","Backslash tidak berarti apa-apa di HTML."]},
{k:"interaktif",t:"mc",lv:2,q:"Atribut global yang menyembunyikan elemen sepenuhnya (setara display: none), bisa dipakai di tag apa pun:",o:["hidden","invisible","display=\"none\"","off"],a:0,
 e:"Atribut global berlaku di semua elemen: id, class, style, title (teks tooltip), lang, hidden, tabindex (urutan fokus), contenteditable (bisa diedit langsung), dan data-*.",
 w:[null,"Atribut invisible tidak ada.","display adalah properti CSS, bukan atribut HTML.","Atribut off tidak ada."]},
{k:"interaktif",t:"mc",lv:3,q:"Kode <img src=\"kecil.jpg\" srcset=\"kecil.jpg 480w, besar.jpg 1200w\" sizes=\"(max-width: 600px) 100vw, 50vw\"> bertujuan…",o:["Browser memilih file gambar yang ukurannya sesuai layar, menghemat kuota di HP","Menampilkan dua gambar sekaligus","Membuat animasi","Menyimpan cadangan kalau gambar rusak"],a:0,
 e:"srcset mendaftar pilihan file beserta lebarnya, sizes memberi tahu seberapa lebar gambar akan tampil. Browser lalu mengunduh file terkecil yang masih tajam. Untuk mengganti potongan gambar berbeda di HP dan desktop, pakai <picture> dengan <source media=\"…\">.",
 w:[null,"Hanya satu file yang diunduh dan tampil.","Tidak ada animasi.","Fungsinya memilih ukuran, bukan cadangan."]},
{k:"interaktif",t:"mc",lv:1,q:"loading=\"lazy\" pada <img> membuat…",o:["Gambar baru diunduh saat mendekati area yang terlihat di layar","Gambar tampil buram","Gambar dimuat paling dulu","Gambar diunduh ulang setiap kali digulir"],a:0,
 e:"Lazy loading mempercepat tampilan awal dan menghemat kuota. Jangan pakai pada gambar utama di bagian paling atas (hero), karena justru membuatnya tampil terlambat.",
 w:[null,"Kualitas tidak berubah.","Justru ditunda.","Hanya diunduh sekali."]},
{k:"interaktif",t:"mc",lv:2,q:"Menampilkan bilah kemajuan unggah file 70% secara semantik:",o:["<progress value=\"70\" max=\"100\">70%</progress>","<meter>70</meter> saja","<div class=\"bar\" style=\"width:70%\"> saja","<range value=\"70\">"],a:0,
 e:"<progress> untuk kemajuan sebuah tugas (unggah, langkah form). <meter> untuk nilai dalam rentang yang diketahui (kapasitas disk 70%, kekuatan password).",
 w:[null,"meter untuk ukuran, bukan kemajuan tugas.","div tidak punya makna bagi screen reader.","Tag <range> tidak ada (yang ada input type=range)."]},
{k:"interaktif",t:"mc",lv:2,q:"Memberi daftar saran saat mengetik di input kota, tapi pengguna tetap boleh mengetik bebas:",o:["<input list=\"kota\"> dengan <datalist id=\"kota\"><option value=\"Solo\">…</datalist>","<select> dengan opsi","<input type=\"suggest\">","<autocomplete>"],a:0,
 e:"datalist memberi saran tanpa membatasi pilihan. select memaksa memilih dari daftar. Keduanya tanpa JavaScript.",
 w:[null,"select tidak mengizinkan isian bebas.","type=\"suggest\" tidak ada.","Tag <autocomplete> tidak ada."]},
{k:"interaktif",t:"mc",lv:3,q:"Elemen <template> berguna untuk…",o:["Menyimpan potongan HTML yang tidak ditampilkan, untuk digandakan dengan JavaScript","Membuat tema warna","Template email otomatis","Menampilkan kerangka loading"],a:0,
 e:"Isi <template> tidak dirender dan tidak menjalankan script/gambarnya. Di JS: const salinan = tpl.content.cloneNode(true); isi teksnya; lalu tempel ke daftar. Cara rapi membuat kartu produk berulang.",
 w:[null,"Tema diatur CSS.","Tidak ada hubungannya dengan email.","Isinya tidak tampil sama sekali."]},
{k:"interaktif",t:"is",lv:1,q:"Entitas HTML untuk menampilkan simbol & (ampersand): ____",a:["&amp;","&amp"],
 e:"&amp; juga dipakai saat menulis alamat URL berparameter di atribut, misalnya href=\"?a=1&amp;b=2\"."},
{k:"interaktif",t:"is",lv:2,q:"Tag judul yang bisa diklik di dalam <details>: <____>",a:["summary"],
 e:"<summary> harus menjadi anak pertama <details>. Isinya selalu terlihat; sisanya terlipat."}
);

SOAL_CSS.push(
// ---- CSS BAB 8: selector lanjut ----
{k:"selektor",t:"mc",lv:1,q:"Selector yang memilih HANYA input bertipe email:",o:["input[type=\"email\"]","input.email","input#email","input:email"],a:0,
 e:"Attribute selector [atribut=\"nilai\"] memilih elemen berdasarkan atributnya. Contoh lain: [disabled], [target=\"_blank\"], [lang=\"id\"].",
 w:[null,".email memilih class email.","#email memilih id email.","Pseudo-class :email tidak ada."]},
{k:"selektor",t:"mc",lv:2,q:"a[href^=\"https\"] memilih tautan yang…",o:["href-nya diawali https","href-nya diakhiri https","href-nya mengandung https di mana saja","tidak punya href"],a:0,
 e:"Tiga variasi yang sering dipakai:\n• ^= diawali (seperti ^ di regex): a[href^=\"https\"]\n• $= diakhiri: a[href$=\".pdf\"] untuk memberi ikon PDF\n• *= mengandung: a[href*=\"youtube\"]",
 w:[null,"Itu $=.","Itu *=.","Itu a:not([href])."]},
{k:"selektor",t:"mc",lv:1,q:"Gaya yang muncul ketika kursor berada di atas tombol ditulis dengan…",o:["button:hover","button::hover","button.hover","button[hover]"],a:0,
 e:"Pseudo-class (satu titik dua) memilih elemen dalam KEADAAN tertentu: :hover (disorot kursor), :focus (sedang fokus), :active (sedang ditekan), :disabled, :checked. Di HP tidak ada hover, jadi jangan sembunyikan informasi penting di balik :hover.",
 w:[null,"Dua titik dua untuk pseudo-element.","Itu class bernama hover.","Itu atribut bernama hover."]},
{k:"selektor",t:"mc",lv:2,q:"Kenapa banyak situs memakai :focus-visible alih-alih :focus untuk garis fokus?",o:["Garis fokus hanya muncul saat navigasi keyboard, tidak saat diklik mouse","Lebih cepat dimuat","Menghapus fokus sepenuhnya","Hanya berlaku di HP"],a:0,
 e:"Pengguna keyboard WAJIB bisa melihat elemen mana yang sedang fokus. :focus-visible menampilkannya untuk mereka tanpa mengganggu pengguna mouse. Jangan pernah menulis outline: none tanpa pengganti.",
 w:[null,"Kecepatan tidak berubah.","Fokus tetap ada, hanya tampilannya diatur.","Berlaku di semua perangkat."]},
{k:"selektor",t:"mc",lv:2,q:"li:nth-child(3n) memilih item ke…",o:["3, 6, 9, …","1, 4, 7, …","3 saja","semua kecuali 3"],a:0,
 e:"Rumus an+b: n berjalan 0, 1, 2, …\n• 3n → 0, 3, 6, 9 (0 diabaikan)\n• 3n+1 → 1, 4, 7\n• odd = 2n+1, even = 2n\n• -n+3 → tiga item pertama\n• :last-child, :nth-last-child(2) menghitung dari belakang.",
 w:[null,"Itu 3n+1.","Itu nth-child(3).","Itu :not(:nth-child(3))."]},
{k:"selektor",t:"mc",lv:3,q:"Di dalam <article> ada <h2> lalu <p>, <p>. Selector p:first-child memilih…",o:["Tidak ada, karena anak pertama article adalah h2","p pertama","kedua p","h2"],a:0,
 e:"p:first-child artinya 'p yang sekaligus anak pertama induknya'. Anak pertama di sini h2, jadi tidak ada yang cocok. Yang dimaksud biasanya p:first-of-type = p pertama di antara saudara sejenisnya.",
 w:[null,"Butuh :first-of-type untuk itu.","Tidak ada p yang menjadi anak pertama.","Selector-nya hanya memilih p."]},
{k:"selektor",t:"mc",lv:2,q:"Memberi garis bawah pada semua tautan menu KECUALI yang sedang aktif:",o:[".menu a:not(.aktif)",".menu a!aktif",".menu a:except(.aktif)",".menu a-.aktif"],a:0,
 e:":not(selector) membalik pilihan. Modern CSS juga punya :is() untuk menyingkat grup (:is(h1, h2, h3) a) dan :where() yang sama tapi spesifisitasnya 0 sehingga mudah ditimpa.",
 w:[null,"Tanda ! bukan selector.","Pseudo-class :except tidak ada.","Penulisan itu tidak sah."]},
{k:"selektor",t:"mc",lv:2,q:"Menambahkan ikon ★ sebelum setiap judul tanpa mengubah HTML:",o:["h3::before { content: \"★ \"; }","h3:before-text { \"★\" }","h3::first { content: ★; }","h3 + ★"],a:0,
 e:"Pseudo-element (dua titik dua) membuat 'bagian semu' dari elemen. ::before dan ::after WAJIB punya content (boleh content: \"\" untuk hiasan). Lainnya: ::first-letter (huruf awal besar), ::placeholder, ::selection (warna teks yang diblok), ::marker (bulatan daftar).",
 w:[null,"Pseudo-element itu tidak ada.","::first tidak ada dan isi content harus dikutip.","Itu bukan sintaks CSS."]},
{k:"selektor",t:"mc",lv:3,q:"h2 + p memilih…",o:["p yang tepat berada setelah h2 (saudara langsung)","semua p setelah h2","p di dalam h2","h2 dan p"],a:0,
 e:"Empat combinator:\n• spasi (A B): B di dalam A, sedalam apa pun\n• > (A > B): B anak langsung A\n• + (A + B): B saudara yang tepat setelah A\n• ~ (A ~ B): semua saudara B setelah A",
 w:[null,"Itu h2 ~ p.","Itu h2 p.","Itu h2, p."]},
{k:"selektor",t:"mc",lv:3,q:"Selector modern .kartu:has(img) berarti…",o:["Pilih .kartu yang DI DALAMNYA ada img","Pilih img di dalam .kartu","Pilih .kartu tanpa img","Pilih img yang punya class kartu"],a:0,
 e:":has() disebut 'selector induk': memilih elemen berdasarkan isinya. Contoh berguna: form:has(input:invalid) memberi garis merah pada form; label:has(input:checked) menyorot pilihan.",
 w:[null,"Yang dipilih kartunya, bukan gambarnya.","Itu .kartu:not(:has(img)).","Itu img.kartu."]},
{k:"selektor",t:"mc",lv:3,q:"Aturan mana yang menang untuk <a id=\"beranda\" class=\"tautan aktif\"> di dalam <nav>?",kode:"nav .tautan.aktif { color: green; }   /* A */\n#beranda { color: red; }             /* B */",o:["B (merah), karena ada id","A (hijau), karena ditulis duluan","A (hijau), karena punya lebih banyak bagian","Keduanya bercampur"],a:0,
 e:"Hitung spesifisitas (id, class, tag):\n• A: 0 id, 2 class, 1 tag → (0, 2, 1)\n• B: 1 id → (1, 0, 0)\nKolom id dibandingkan paling dulu, jadi satu id mengalahkan berapa pun class. Urutan penulisan hanya menentukan pemenang kalau spesifisitasnya sama.",
 w:[null,"Urutan hanya penentu jika spesifisitas seri.","Jumlah bagian tidak dijumlah begitu saja; id selalu lebih kuat.","Satu properti hanya punya satu pemenang."]},
{k:"selektor",t:"is",lv:1,q:"Properti yang WAJIB ada di ::before dan ::after agar tampil: ____: \"\";",a:["content"],
 e:"content bisa berisi teks, kosong (\"\") untuk hiasan bentuk, atau counter() untuk penomoran otomatis."},
{k:"selektor",t:"is",lv:2,q:"Lengkapi untuk memilih baris ganjil: tr:nth-child(____)",a:["odd","2n+1"],
 e:"odd = 1, 3, 5…; even = 2, 4, 6…"},

// ---- CSS BAB 9: satuan & warna ----
{k:"satuan",t:"mc",lv:1,q:"Ukuran huruf bawaan browser 16px. Berapa ukuran 1.5rem?",o:["24px","15px","1.5px","16px"],a:0,
 e:"rem = root em, kelipatan ukuran huruf elemen <html>. 1.5 × 16 = 24px. Kelebihannya: kalau pengguna memperbesar huruf di pengaturan browser, semua ukuran rem ikut membesar proporsional.",
 w:[null,"1.5 dikali 16, bukan ditambah.","rem bukan piksel.","Itu 1rem."]},
{k:"satuan",t:"mc",lv:2,q:"Induk font-size: 20px. Anaknya font-size: 1.5em. Ukuran huruf anak:",o:["30px","24px","21.5px","1.5px"],a:0,
 e:"em mengikuti ukuran huruf induk (untuk font-size) atau ukuran huruf elemen itu sendiri (untuk padding/margin). 1.5 × 20 = 30px.\n• Jebakan: em bisa berlipat-lipat di elemen bersarang (1.5em di dalam 1.5em = 2.25×). Karena itu rem lebih mudah ditebak untuk font-size.",
 w:[null,"Itu kalau mengikuti root 16px.","Dikali, bukan ditambah.","em bukan piksel."]},
{k:"satuan",t:"mc",lv:1,q:"width: 50% pada sebuah div berarti…",o:["Setengah lebar elemen induknya","Setengah lebar layar","Setengah lebar isinya","50 piksel"],a:0,
 e:"Persen untuk width dihitung dari lebar induk (containing block). Untuk ukuran berdasarkan layar, pakai vw (viewport width).",
 w:[null,"Itu 50vw.","Ukuran isi tidak menjadi acuan persen.","Persen bukan piksel."]},
{k:"satuan",t:"mc",lv:2,q:"height: 100vh pada HP sering terpotong oleh bilah alamat browser. Satuan modern yang memperhitungkannya:",o:["100dvh","100vmax","100%","100rem"],a:0,
 e:"vh = 1% tinggi layar (versi terbesar). dvh (dynamic viewport height) menyesuaikan saat bilah alamat muncul/hilang. Ada juga svh (terkecil) dan lvh (terbesar).",
 w:[null,"vmax mengikuti sisi layar terpanjang.","100% butuh induk yang tingginya pasti.","rem untuk ukuran huruf."]},
{k:"satuan",t:"mc",lv:2,q:"font-size: clamp(1.5rem, 4vw, 3rem) berarti…",o:["Ukuran mengikuti 4vw, tapi tidak pernah lebih kecil dari 1.5rem atau lebih besar dari 3rem","Ukuran acak di antara tiga nilai","Selalu 4vw","Rata-rata dari ketiga nilai"],a:0,
 e:"clamp(MIN, IDEAL, MAX) membuat ukuran 'cair' yang tetap aman. Satu baris ini menggantikan beberapa media query untuk judul responsif. Saudaranya: min(100%, 600px) dan max(50%, 300px).",
 w:[null,"Hasilnya bisa ditebak, tidak acak.","4vw dibatasi oleh MIN dan MAX.","Tidak dihitung rata-rata."]},
{k:"satuan",t:"mc",lv:2,q:"width: calc(100% - 240px) cocok untuk…",o:["Isi halaman yang mengisi sisa ruang di samping sidebar 240px","Membuat lebar acak","Animasi","Menghitung jumlah elemen"],a:0,
 e:"calc() mencampur satuan berbeda: persen dengan piksel, rem dengan vw. Wajib ada spasi di sekitar + dan -: calc(100% - 240px), bukan calc(100%-240px).",
 w:[null,"Hasilnya pasti.","calc tidak membuat animasi.","calc menghitung ukuran, bukan jumlah elemen."]},
{k:"satuan",t:"mc",lv:2,q:"Pada hsl(220, 90%, 50%), angka 220 adalah…",o:["Hue (rona) dalam derajat roda warna; 220 kira-kira biru","Kecerahan","Transparansi","Kode heksadesimal"],a:0,
 e:"HSL = Hue (0–360 derajat: 0 merah, 120 hijau, 240 biru), Saturation (kepekatan), Lightness (terang-gelap). Kelebihannya mudah dibaca manusia: untuk versi lebih gelap dari warna yang sama, cukup turunkan angka L.",
 w:[null,"Kecerahan adalah persen ketiga.","Transparansi ditulis sebagai nilai keempat (alpha).","Itu notasi hsl, bukan hex."]},
{k:"satuan",t:"mc",lv:3,q:"Warna #00000080 berarti…",o:["Hitam dengan transparansi ±50%","Hitam pekat","Abu-abu 80%","Biru tua"],a:0,
 e:"Hex 8 digit = RRGGBBAA. Dua digit terakhir adalah alpha: 00 transparan penuh, FF pekat, 80 (=128) kira-kira 50%. Sama dengan rgb(0 0 0 / 0.5).",
 w:[null,"80 di akhir adalah transparansi.","Itu warna hitam, bukan abu-abu.","RGB-nya 00 00 00, hitam."]},
{k:"satuan",t:"mc",lv:2,q:"max-width: 65ch pada paragraf artikel bertujuan…",o:["Membatasi baris sekitar 65 karakter agar nyaman dibaca","Membatasi 65 kata","Membuat 65 kolom","Membatasi 65 baris"],a:0,
 e:"ch = lebar karakter '0' pada huruf itu. Baris teks yang ideal untuk dibaca sekitar 45–75 karakter; lebih dari itu mata lelah mencari awal baris berikutnya.",
 w:[null,"ch berbasis karakter, bukan kata.","Tidak membuat kolom.","Tidak membatasi jumlah baris."]},
{k:"satuan",t:"mc",lv:3,q:"border: 2px solid currentColor; berarti warna garisnya…",o:["Sama dengan nilai color (warna teks) elemen itu","Selalu hitam","Warna latar","Warna acak"],a:0,
 e:"currentColor mengikuti properti color. Ganti warna teks satu kali, garis dan ikon SVG (fill: currentColor) ikut berubah. Sangat berguna untuk tombol dengan banyak varian warna.",
 w:[null,"Mengikuti color, bukan hitam.","Bukan background-color.","Hasilnya pasti."]},
{k:"satuan",t:"is",lv:1,q:"Satuan yang relatif terhadap ukuran huruf elemen <html> (root): ____",a:["rem"],
 e:"Pakai rem untuk font-size dan jarak utama, px untuk garis tipis (1px border), % / fr / vw untuk lebar tata letak."},
{k:"satuan",t:"is",lv:2,q:"Fungsi CSS untuk ukuran cair dengan batas minimum dan maksimum: ____(1rem, 3vw, 2rem)",a:["clamp"],
 e:"clamp(min, ideal, max). Contoh lain: padding: clamp(16px, 5vw, 64px)."},

// ---- CSS BAB 10: transform, transition, animasi ----
{k:"animasi",t:"mc",lv:1,q:"Agar warna tombol berubah HALUS dalam 0,3 detik saat di-hover:",o:["button { transition: background-color 0.3s ease; }","button:hover { animation: 0.3s; }","button { delay: 0.3s; }","button { smooth: true; }"],a:0,
 e:"transition = perpindahan halus dari satu keadaan ke keadaan lain. Format: properti, durasi, kurva (easing), jeda. Tulis di elemen dasar (bukan hanya di :hover) supaya halus saat masuk DAN saat keluar.",
 w:[null,"animation butuh @keyframes.","Properti delay tidak ada (yang ada transition-delay).","Properti smooth tidak ada."]},
{k:"animasi",t:"mc",lv:2,q:"transform: translateY(-4px) saat hover kartu. Apa yang terjadi pada elemen di sekitarnya?",o:["Tidak bergeser sama sekali; transform tidak mengubah tata letak","Ikut naik 4px","Turun 4px","Halaman di-render ulang seluruhnya"],a:0,
 e:"transform hanya menggeser 'gambar' elemen, ruang aslinya tetap di tempat. Karena itu transform dan opacity ringan dianimasikan (tidak memicu perhitungan ulang layout). Mengubah margin-top atau top justru menggeser tetangga dan lebih berat.",
 w:[null,"Ruang asli elemen tidak berubah.","Tetangga tidak terpengaruh.","Hanya lapisan elemen itu yang digambar ulang."]},
{k:"animasi",t:"mc",lv:1,q:"Membesarkan gambar 10% saat di-hover:",o:["img:hover { transform: scale(1.1); }","img:hover { size: 110%; }","img:hover { zoom: +10; }","img:hover { transform: grow(10%); }"],a:0,
 e:"Fungsi transform: translate(x, y) geser, scale(n) ubah ukuran, rotate(45deg) putar, skew(10deg) miring. Beberapa bisa digabung: transform: translateY(-4px) scale(1.02).",
 w:[null,"Properti size tidak ada.","zoom bukan cara standar dan nilainya salah.","Fungsi grow tidak ada."]},
{k:"animasi",t:"mc",lv:2,q:"Ikon diputar 90° tapi berputar mengelilingi pojok kiri atas, bukan tengahnya. Properti yang perlu diatur:",o:["transform-origin: center","rotate-center: true","transform-pivot: 50%","position: center"],a:0,
 e:"transform-origin menentukan titik poros. Bawaannya biasanya center, tapi pada SVG bawaannya pojok kiri atas, sehingga sering perlu transform-origin: center (dan transform-box: fill-box).",
 w:[null,"Properti itu tidak ada.","Properti itu tidak ada.","position tidak mengenal nilai center."]},
{k:"animasi",t:"mc",lv:2,q:"Urutan yang benar untuk animasi berulang:",kode:"@keyframes denyut {\n  from { transform: scale(1); }\n  to   { transform: scale(1.1); }\n}\n.ikon { ________ }",o:["animation: denyut 1s ease-in-out infinite alternate;","animation-keyframes: denyut;","transition: denyut 1s infinite;","keyframes: denyut 1s;"],a:0,
 e:"@keyframes mendefinisikan langkah-langkah (from/to atau 0%, 50%, 100%). animation memasangnya: nama, durasi, kurva, jumlah ulang (infinite), arah (alternate = bolak-balik).\n• transition untuk perubahan keadaan (hover), animation untuk gerakan yang berjalan sendiri.",
 w:[null,"Properti itu tidak ada.","transition tidak memakai @keyframes.","Properti itu tidak ada."]},
{k:"animasi",t:"mc",lv:2,q:"Animasi muncul (opacity 0 → 1) selesai, tapi elemen kembali transparan. Yang perlu ditambahkan:",o:["animation-fill-mode: forwards","animation-iteration-count: 0","animation-direction: reverse","transition: none"],a:0,
 e:"Bawaannya, setelah animasi selesai elemen kembali ke gaya aslinya. forwards membuat elemen tetap memakai keadaan langkah terakhir. (Solusi lain: jadikan gaya asli elemen = keadaan akhir.)",
 w:[null,"0 berarti tidak beranimasi.","reverse membalik arah animasi.","transition tidak berhubungan."]},
{k:"animasi",t:"mc",lv:3,q:"Properti mana yang PALING ringan untuk dianimasikan agar halus 60fps di laptop/HP sederhana?",o:["transform dan opacity","width dan height","top dan left","box-shadow besar dan filter: blur"],a:0,
 e:"Browser menggambar halaman dalam 3 tahap: layout (hitung posisi), paint (warnai), composite (susun lapisan). transform dan opacity hanya menyentuh composite, jadi paling ringan. width/top memicu layout, shadow/blur besar memicu paint yang berat.",
 w:[null,"Mengubah ukuran memicu hitung ulang layout.","Mengubah posisi memicu hitung ulang layout.","Blur dan shadow besar berat digambar ulang."]},
{k:"animasi",t:"mc",lv:2,q:"Sebagian orang pusing melihat animasi besar. Cara menghormati pengaturan 'kurangi gerakan' di sistem mereka:",o:["@media (prefers-reduced-motion: reduce) { … matikan/sederhanakan animasi … }","@media (no-animation)","animation: polite;","Tidak bisa dideteksi"],a:0,
 e:"prefers-reduced-motion membaca pengaturan aksesibilitas sistem operasi. Di dalamnya, matikan animasi besar atau ganti dengan fade sederhana. Saudaranya: prefers-color-scheme: dark untuk mode gelap.",
 w:[null,"Media feature itu tidak ada.","Nilai polite tidak ada.","Browser bisa membacanya."]},
{k:"animasi",t:"mc",lv:1,q:"Membuat foto menjadi hitam-putih dengan CSS:",o:["filter: grayscale(100%);","color: gray;","image-mode: bw;","opacity: 0;"],a:0,
 e:"filter menerapkan efek seperti di aplikasi edit foto: blur(4px), brightness(1.2), contrast(1.1), grayscale(1), sepia(1), drop-shadow(...). Contoh populer: logo klien abu-abu, berwarna saat di-hover.",
 w:[null,"color untuk warna teks.","Properti itu tidak ada.","opacity membuat transparan."]},
{k:"animasi",t:"mc",lv:2,q:"Kurva (easing) ease-out membuat gerakan…",o:["Cepat di awal lalu melambat di akhir","Lambat di awal lalu cepat","Kecepatan tetap","Melompat-lompat"],a:0,
 e:"• linear: kecepatan sama (cocok untuk putaran loading)\n• ease-out: cepat lalu mendarat pelan (paling alami untuk elemen yang muncul)\n• ease-in: pelan lalu cepat (cocok untuk elemen yang keluar)\n• ease-in-out: pelan-cepat-pelan\n• cubic-bezier(…): kurva buatan sendiri",
 w:[null,"Itu ease-in.","Itu linear.","Itu steps()."]},
{k:"animasi",t:"is",lv:1,q:"Aturan CSS untuk mendefinisikan langkah-langkah animasi: @____ namaAnimasi { … }",a:["keyframes"],
 e:"@keyframes berisi from/to atau persentase 0%–100%, lalu dipasang dengan properti animation."},
{k:"animasi",t:"is",lv:2,q:"Fungsi transform untuk memutar elemen: transform: ____(45deg);",a:["rotate"],
 e:"Satuan sudut: deg (derajat), turn (1turn = 360deg). rotate(-90deg) memutar berlawanan jarum jam."},

// ---- CSS BAB 11: layout lanjut ----
{k:"gridlanjut",t:"mc",lv:2,q:"grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) menghasilkan…",o:["Kartu yang otomatis berbaris sebanyak yang muat, minimal 220px, tanpa media query","Selalu 220 kolom","Satu kolom 220px","Kolom acak"],a:0,
 e:"Pola paling berguna di CSS Grid:\n• minmax(220px, 1fr): tiap kolom minimal 220px, maksimal berbagi sisa ruang.\n• auto-fit: buat kolom sebanyak yang muat.\nHasilnya: 4 kolom di laptop, 2 di tablet, 1 di HP, tanpa satu pun media query.",
 w:[null,"Jumlah kolom menyesuaikan lebar.","Kolom bisa lebih dari satu.","Hasilnya pasti dan teratur."]},
{k:"gridlanjut",t:"mc",lv:3,q:"Beda auto-fit dan auto-fill saat item hanya 2 tapi ruang cukup untuk 5 kolom:",o:["auto-fit melebarkan 2 item mengisi baris; auto-fill menyisakan 3 kolom kosong","Sama persis","auto-fill melebarkan item; auto-fit menyisakan kolom kosong","Keduanya error"],a:0,
 e:"auto-fill membuat 'slot' kolom walaupun kosong; auto-fit melipat slot kosong sehingga item yang ada melebar. Untuk galeri kartu biasanya auto-fit; untuk grid yang ukurannya harus konsisten, auto-fill.",
 w:[null,"Perilakunya berbeda saat item sedikit.","Terbalik.","Keduanya nilai sah."]},
{k:"gridlanjut",t:"mc",lv:2,q:"Kode ini membuat tata letak…",kode:".halaman {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-areas:\n    \"kepala kepala\"\n    \"samping isi\"\n    \"kaki kaki\";\n}\nheader { grid-area: kepala; }",o:["Header dan footer selebar penuh, sidebar 240px di kiri isi","Tiga kolom sama lebar","Sidebar di kanan","Semua elemen bertumpuk satu kolom"],a:0,
 e:"grid-template-areas menggambar layout seperti peta dengan nama: setiap teks adalah satu baris, setiap kata satu sel. Nama yang diulang ('kepala kepala') berarti merentang. Elemen ditempatkan dengan grid-area: nama. Untuk HP, cukup ubah peta di media query menjadi satu kolom.",
 w:[null,"Kolomnya 240px dan 1fr, hanya dua.","'samping' ditulis di kolom kiri.","Ada dua kolom."]},
{k:"gridlanjut",t:"mc",lv:2,q:"grid-column: 1 / -1 membuat item…",o:["Merentang dari garis pertama sampai garis terakhir (selebar penuh)","Ada di kolom terakhir saja","Tersembunyi","Kembali ke kolom 1"],a:0,
 e:"Garis grid dinomori dari 1 di kiri; -1 adalah garis paling kanan. Jadi 1 / -1 = dari ujung ke ujung, berapa pun jumlah kolomnya. Alternatif: grid-column: span 2 (rentang 2 kolom dari posisinya).",
 w:[null,"-1 adalah garis akhir, bukan kolom terakhir saja.","Tidak menyembunyikan.","Ia merentang, tidak hanya di kolom 1."]},
{k:"gridlanjut",t:"mc",lv:1,q:"Cara terpendek menaruh isi tepat di tengah sel/kotak dengan Grid:",o:["display: grid; place-items: center;","display: grid; center: all;","text-align: center saja","margin: center;"],a:0,
 e:"place-items adalah singkatan align-items + justify-items. Dua baris ini memusatkan secara horizontal dan vertikal.",
 w:[null,"Properti center tidak ada.","text-align hanya memusatkan teks horizontal.","margin tidak menerima nilai center."]},
{k:"gridlanjut",t:"mc",lv:2,q:"Foto di kartu harus selalu memenuhi kotak 16:9 tanpa gepeng, meskipun ukuran aslinya berbeda-beda:",o:["aspect-ratio: 16 / 9; object-fit: cover;","width: 16px; height: 9px;","object-fit: stretch;","background-size: 16/9;"],a:0,
 e:"aspect-ratio mengunci perbandingan kotak. object-fit: cover membuat gambar menutupi kotak dengan memotong bagian tepi (seperti background-size: cover untuk <img>). object-fit: contain menampilkan seluruh gambar dengan sisa ruang kosong.",
 w:[null,"Itu ukuran tetap yang sangat kecil.","stretch tidak ada; fill akan membuat gepeng.","Penulisan itu tidak sah."]},
{k:"gridlanjut",t:"mc",lv:2,q:"Gambar di artikel ingin dikelilingi teks yang mengalir di sampingnya, seperti di majalah:",o:["img { float: left; margin-right: 1rem; }","img { display: flex; }","img { position: absolute; }","img { grid-area: kiri; }"],a:0,
 e:"float adalah satu-satunya cara membuat teks mengalir mengelilingi elemen. Dulu float dipakai untuk layout kolom (sekarang digantikan Flexbox/Grid). Elemen setelahnya yang tidak boleh ikut mengalir diberi clear: both.",
 w:[null,"flex tidak membuat teks mengelilingi gambar.","absolute mengeluarkan gambar dari alur, teks tidak mengelilinginya.","Teks tidak bisa mengalir mengelilingi sel grid."]},
{k:"gridlanjut",t:"mc",lv:2,q:"Membagi artikel panjang menjadi 3 kolom seperti koran:",o:["columns: 3;","display: grid; grid-template-columns: 3;","text-columns: 3;","flex: 3;"],a:0,
 e:"Multi-column layout (columns, column-gap, column-rule) mengalirkan teks dari kolom ke kolom. Cocok untuk daftar panjang atau tampilan cetak. Hindari untuk teks panjang di layar karena pembaca harus menggulir naik-turun.",
 w:[null,"Nilai 3 tanpa satuan tidak sah di sini dan grid tidak mengalirkan teks.","Properti itu tidak ada.","flex: 3 mengatur pertumbuhan item."]},
{k:"gridlanjut",t:"mc",lv:3,q:"Komponen kartu harus berubah tata letak berdasarkan lebar WADAHNYA (bukan lebar layar). Fitur CSS yang tepat:",o:["Container query: container-type: inline-size lalu @container (min-width: 400px)","@media (min-width: 400px)","@supports",":has()"],a:0,
 e:"Media query melihat lebar layar; container query melihat lebar wadah. Kartu yang sama bisa tampil mendatar di area utama yang lebar dan tegak di sidebar yang sempit.",
 w:[null,"Media query hanya melihat layar.","@supports mengecek dukungan fitur.",":has memilih berdasarkan isi."]},
{k:"gridlanjut",t:"mc",lv:1,q:"Memilih Flexbox atau Grid untuk deretan tombol di navbar:",o:["Flexbox, karena menata satu arah (baris)","Grid, karena wajib untuk menu","float","table"],a:0,
 e:"Pegangan: satu arah (baris tombol, ikon + teks) → Flexbox. Dua arah (galeri, kerangka halaman, dashboard) → Grid. Keduanya sering dipakai bersama: grid untuk kerangka, flex di dalam tiap bagian.",
 w:[null,"Grid bisa, tapi lebih ribet untuk satu baris.","float sudah tidak dipakai untuk layout.","Tabel bukan untuk layout."]},
{k:"gridlanjut",t:"is",lv:1,q:"Properti untuk menempatkan elemen ke area bernama di grid: ____: kepala;",a:["grid-area"],
 e:"Nama area didefinisikan di wadah dengan grid-template-areas."},
{k:"gridlanjut",t:"is",lv:2,q:"Properti yang membersihkan efek float agar elemen turun di bawah elemen yang mengapung: ____: both;",a:["clear"],
 e:"Cara modern lain: beri induknya display: flow-root agar tingginya mencakup elemen float."},

// ---- CSS BAB 12: merapikan CSS ----
{k:"arsitektur",t:"mc",lv:1,q:"Kenapa banyak proyek memulai CSS dengan *, *::before, *::after { box-sizing: border-box; margin: 0; }?",o:["Menghapus perbedaan gaya bawaan antar-browser dan membuat ukuran kotak mudah dihitung","Mempercepat internet","Menghapus semua warna","Wajib agar CSS terbaca"],a:0,
 e:"Ini disebut reset (atau normalize, versi yang lebih lembut). Setiap browser punya margin dan ukuran bawaan yang sedikit berbeda; reset menyamakan titik awal sehingga tampilan konsisten di Chrome, Firefox, dan Safari.",
 w:[null,"Tidak berhubungan dengan jaringan.","Warna tidak dihapus.","CSS tetap terbaca tanpa reset."]},
{k:"arsitektur",t:"mc",lv:2,q:"Dalam penamaan BEM, class .kartu__judul--besar terdiri dari…",o:["Block kartu, Element judul, Modifier besar","Block judul, Element kartu, Modifier besar","Tiga class terpisah","Id kartu"],a:0,
 e:"BEM = Block__Element--Modifier.\n• Block: komponen mandiri (.kartu)\n• Element: bagian dari block, dua garis bawah (.kartu__judul)\n• Modifier: variasi, dua strip (.kartu--unggulan, .kartu__judul--besar)\nManfaatnya: nama class menjelaskan diri sendiri dan spesifisitas tetap rendah (satu class).",
 w:[null,"Block selalu di depan.","Itu satu class panjang.","Itu class, bukan id."]},
{k:"arsitektur",t:"mc",lv:2,q:"HTML <button class=\"px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700\"> adalah ciri khas…",o:["Tailwind CSS (utility-first)","Bootstrap komponen","Sass","CSS inline"],a:0,
 e:"Tailwind menyediakan class kecil untuk satu gaya (px-4 = padding kiri-kanan). Kamu menyusun tampilan langsung di HTML tanpa menulis file CSS. Bootstrap lebih ke komponen jadi (btn btn-primary, card, navbar) dan sistem grid (row, col-md-6).",
 w:[null,"Bootstrap memakai class komponen seperti btn btn-primary.","Sass adalah bahasa praproses, bukan class HTML.","Inline memakai atribut style."]},
{k:"arsitektur",t:"mc",lv:2,q:"Di Bootstrap, <div class=\"col-12 col-md-6\"> berarti…",o:["Selebar penuh di HP, setengah lebar mulai layar sedang (≥768px)","Selalu 12 kolom","Setengah lebar di HP, penuh di laptop","6 kolom di HP"],a:0,
 e:"Grid Bootstrap membagi baris menjadi 12 bagian dan bersifat mobile-first: col-12 berlaku dari layar terkecil, col-md-6 menimpa mulai ukuran md. 6 dari 12 = setengah.",
 w:[null,"col-md-6 mengubahnya di layar sedang.","Terbalik.","col-12 berlaku di HP."]},
{k:"arsitektur",t:"mc",lv:2,q:"Kode Sass ini menghasilkan CSS apa?",kode:"$utama: #1a2ffb;\n.menu {\n  a { color: $utama; }\n}",o:[".menu a { color: #1a2ffb; }","a { color: $utama; }",".menu { a: #1a2ffb; }","Error di browser"],a:0,
 e:"Sass (file .scss) adalah CSS dengan fitur tambahan: variabel $, nesting, mixin, dan pemisahan file. Browser tidak membaca Sass; Sass dikompilasi menjadi CSS biasa. Sekarang CSS asli juga punya variabel (--utama) dan nesting.",
 w:[null,"Variabel Sass diganti nilainya saat kompilasi.","Nesting menjadi selector bertingkat.","Yang dikirim ke browser adalah hasil kompilasinya."]},
{k:"arsitektur",t:"mc",lv:3,q:"Kelebihan CSS custom property (--warna) dibanding variabel Sass ($warna):",o:["Bisa diubah saat halaman berjalan, misalnya oleh JavaScript atau media query mode gelap","Lebih pendek ditulis","Tidak perlu tanda titik dua","Hanya jalan di Chrome"],a:0,
 e:"Variabel Sass hilang setelah dikompilasi (menjadi nilai tetap). Custom property hidup di browser: bisa ditimpa per komponen, di dalam @media (prefers-color-scheme: dark), atau lewat el.style.setProperty(\"--warna\", \"red\").",
 w:[null,"Panjangnya mirip.","Tetap ditulis dengan titik dua.","Didukung semua browser modern."]},
{k:"arsitektur",t:"mc",lv:2,q:"Mode gelap otomatis mengikuti pengaturan sistem, cara paling rapi:",kode:":root { --latar: #f6f5f2; --teks: #222; }\n@media (prefers-color-scheme: dark) {\n  :root { ______ }\n}\nbody { background: var(--latar); color: var(--teks); }",o:["--latar: #16181d; --teks: #e8e6e3;","body { background: black; }","filter: invert(1);","color-scheme: none;"],a:0,
 e:"Cukup timpa nilai variabel di dalam media query; semua komponen yang memakai var(--latar) ikut berubah. Hindari hitam/putih murni agar mata tidak cepat lelah. Tambahkan juga color-scheme: light dark agar scrollbar dan form ikut menyesuaikan.",
 w:[null,"Selector bersarang dengan warna murni kurang rapi.","invert juga membalik foto dan logo.","Nilai none tidak membantu."]},
{k:"arsitektur",t:"mc",lv:2,q:"Pendekatan mobile-first dalam menulis media query berarti…",o:["Gaya dasar untuk HP, lalu @media (min-width: …) menambah gaya untuk layar lebih besar","Membuat situs khusus HP terpisah","Memakai max-width di semua media query","Mendesain HP terakhir"],a:0,
 e:"Mobile-first: mulai dari tampilan paling sederhana (satu kolom), lalu tingkatkan untuk layar lebar. Hasilnya CSS lebih ringkas dan HP tidak mengunduh aturan yang tidak dipakai. Breakpoint umum: 640px, 768px, 1024px, 1280px.",
 w:[null,"Satu situs untuk semua ukuran.","max-width adalah pola desktop-first.","Justru HP yang pertama."]},
{k:"arsitektur",t:"mc",lv:2,q:"Gaya di CSS sudah ditulis tapi tidak berlaku. Langkah pertama yang paling efektif:",o:["Buka DevTools → Elements, periksa apakah aturannya dicoret (kalah spesifisitas) atau tidak muncul (selector salah)","Tambahkan !important di semua baris","Tulis ulang seluruh CSS","Ganti browser"],a:0,
 e:"Panel Styles menampilkan semua aturan yang mengenai elemen; aturan yang kalah dicoret. Tab Computed menunjukkan nilai akhir dan asalnya. Penyebab umum: salah ketik nama class, file CSS tidak termuat (cek tab Network), atau kalah spesifisitas.",
 w:[null,"!important menumpuk masalah baru.","Membuang waktu sebelum tahu penyebabnya.","Masalahnya biasanya di kode."]},
{k:"arsitektur",t:"mc",lv:3,q:"Kebiasaan yang membuat CSS sulit dirawat di proyek besar:",o:["Selector panjang bersarang seperti #utama div ul li a span dan banyak !important","Memakai class bernama jelas","Memakai variabel warna","Memisahkan komponen ke file berbeda"],a:0,
 e:"Selector panjang dan id membuat spesifisitas tinggi, sehingga setiap perubahan butuh selector yang lebih kuat lagi (perang spesifisitas). Jaga selector tetap pendek (satu-dua class), pakai variabel, dan @layer untuk mengatur urutan lapisan (reset, komponen, utilitas).",
 w:[null,"Nama jelas justru membantu.","Variabel memudahkan perubahan.","Pemisahan file memudahkan perawatan."]},
{k:"arsitektur",t:"is",lv:1,q:"Pemisah antara Block dan Element dalam penamaan BEM, contoh kartu____judul",a:["__"],
 e:"Dua garis bawah untuk element, dua strip (--) untuk modifier."},
{k:"arsitektur",t:"is",lv:2,q:"Ekstensi file Sass yang sintaksnya mirip CSS biasa (tanpa titik): ____",a:["scss"],
 e:".scss memakai kurung kurawal dan titik koma seperti CSS. Versi lama .sass memakai indentasi."}
);

MATERI_HTML.push(
{k:"tabel",judul:"Tabel Lengkap: Header, Gabung Sel & Aksesibilitas",materi:`
<!--pemula--><h4>Untuk pemula: tabel = data yang punya baris dan kolom</h4>
<p>Bayangkan jadwal pelajaran atau daftar harga di menu kafe. Ada judul kolom (Hari, Jam, Mapel) dan baris-baris data. Kalau datamu bisa ditulis di Excel dengan rapi, berarti ia cocok jadi tabel HTML. Kalau tujuanmu hanya menata posisi (menu di kiri, isi di kanan), itu bukan tabel: pakai Flexbox atau Grid.</p>
<table class="mini-pivot"><tr><th>Tag</th><th>Kepanjangan</th><th>Fungsi</th></tr>
<tr><td><code>&lt;table&gt;</code></td><td>table</td><td>pembungkus tabel</td></tr>
<tr><td><code>&lt;caption&gt;</code></td><td>caption</td><td>judul seluruh tabel</td></tr>
<tr><td><code>&lt;thead&gt;</code> <code>&lt;tbody&gt;</code> <code>&lt;tfoot&gt;</code></td><td>head, body, foot</td><td>bagian judul, isi, ringkasan</td></tr>
<tr><td><code>&lt;tr&gt;</code></td><td>table row</td><td>satu baris</td></tr>
<tr><td><code>&lt;th&gt;</code></td><td>table header</td><td>sel judul</td></tr>
<tr><td><code>&lt;td&gt;</code></td><td>table data</td><td>sel isi</td></tr></table><!--/pemula-->
<h4>1. Kerangka tabel lengkap</h4>
<pre><code>&lt;table&gt;
  &lt;caption&gt;Penjualan Kopi per Kota, Kuartal 1 2026&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Kota&lt;/th&gt;
      &lt;th scope="col"&gt;Januari&lt;/th&gt;
      &lt;th scope="col"&gt;Februari&lt;/th&gt;
      &lt;th scope="col"&gt;Maret&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;th scope="row"&gt;Solo&lt;/th&gt;&lt;td&gt;120&lt;/td&gt;&lt;td&gt;98&lt;/td&gt;&lt;td&gt;143&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;th scope="row"&gt;Bali&lt;/th&gt;&lt;td&gt;87&lt;/td&gt;&lt;td&gt;110&lt;/td&gt;&lt;td&gt;95&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;&lt;th scope="row"&gt;Total&lt;/th&gt;&lt;td&gt;207&lt;/td&gt;&lt;td&gt;208&lt;/td&gt;&lt;td&gt;238&lt;/td&gt;&lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code></pre>
<ul><li><code>scope="col"</code> = sel ini judul untuk kolom di bawahnya. <code>scope="row"</code> = judul untuk baris di sampingnya.</li>
<li>Dengan scope, screen reader membacakan sel "143" sebagai "Maret, Solo, 143". Tanpa scope, pengguna tunanetra hanya mendengar angka tanpa konteks.</li></ul>
<h4>2. Menggabungkan sel: colspan dan rowspan</h4>
<pre><code>&lt;tr&gt;
  &lt;td rowspan="2"&gt;Jawa Tengah&lt;/td&gt;   &lt;!-- memakan 2 baris ke bawah --&gt;
  &lt;td&gt;Solo&lt;/td&gt;&lt;td&gt;120&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;td&gt;Semarang&lt;/td&gt;&lt;td&gt;76&lt;/td&gt;       &lt;!-- cukup 2 sel, 1 tempat sudah dipakai --&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;td colspan="2"&gt;Total&lt;/td&gt;           &lt;!-- memakan 2 kolom ke samping --&gt;
  &lt;td&gt;196&lt;/td&gt;
&lt;/tr&gt;</code></pre>
<div class="catatan">Cara mengecek tabel tidak berantakan: jumlah "tempat" di setiap baris harus sama. Sel dengan <code>colspan="2"</code> dihitung 2. Sel dengan <code>rowspan="2"</code> ikut menghitung 1 tempat di baris berikutnya.</div>
<h4>3. Menata tabel dengan CSS</h4>
<pre><code>table { border-collapse: collapse; width: 100%; }
th, td { padding: 8px 12px; border-bottom: 1px solid #ddd; text-align: left; }
td.angka { text-align: right; font-variant-numeric: tabular-nums; }  /* angka rata kanan, lebar digit sama */
tbody tr:nth-child(even) { background: #f6f6f4; }                    /* zebra */
tbody tr:hover { background: #eef; }
thead th { position: sticky; top: 0; background: white; }             /* judul menempel saat digulir */

.bungkus-tabel { overflow-x: auto; }                                  /* tabel lebar bisa digeser di HP */</code></pre>
<p>Angka sebaiknya <b>rata kanan</b> agar satuan, puluhan, dan ratusan sejajar dan mudah dibandingkan, sama seperti di Excel.</p>
<div class="praktik"><b>Coba sendiri:</b> buat tabel jadwal pelajaran Senin–Jumat dengan 4 jam pelajaran. Tambahkan <code>caption</code>, <code>scope</code>, satu sel "Istirahat" yang memakai <code>colspan="5"</code>, dan warna zebra.</div>
`},
{k:"head",judul:"Bagian <head>: Meta, SEO, Favicon & Memuat Script",materi:`
<!--pemula--><h4>Untuk pemula: &lt;head&gt; adalah "kartu identitas" halaman</h4>
<p>Isi <code>&lt;head&gt;</code> hampir tidak terlihat di layar, tapi sangat menentukan: huruf tampil benar atau rusak, situs enak dilihat di HP atau tidak, judul tab, ikon, tampilan di Google, dan kartu pratinjau saat dibagikan di WhatsApp.</p><!--/pemula-->
<h4>1. Kerangka &lt;head&gt; yang lengkap</h4>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Kopi Senja · Kedai Kopi di Solo&lt;/title&gt;
  &lt;meta name="description" content="Kopi susu gula aren dan roti bakar. Buka setiap hari 10.00–22.00 di Jl. Slamet Riyadi."&gt;

  &lt;!-- kartu pratinjau media sosial --&gt;
  &lt;meta property="og:title" content="Kopi Senja"&gt;
  &lt;meta property="og:description" content="Kedai kopi di Solo"&gt;
  &lt;meta property="og:image" content="https://kopisenja.example/og.jpg"&gt;

  &lt;link rel="icon" href="/favicon.svg" type="image/svg+xml"&gt;
  &lt;link rel="apple-touch-icon" href="/ikon-180.png"&gt;
  &lt;link rel="canonical" href="https://kopisenja.example/"&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
  &lt;script src="app.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>
<table class="mini-pivot"><tr><th>Baris</th><th>Kalau dilupakan…</th></tr>
<tr><td><code>lang="id"</code></td><td>screen reader membaca dengan logat salah, terjemahan otomatis keliru</td></tr>
<tr><td><code>charset</code></td><td>huruf berubah jadi simbol aneh (Ã©, â€™)</td></tr>
<tr><td><code>viewport</code></td><td>di HP tampil kecil seperti desktop yang diperkecil, media query tidak efektif</td></tr>
<tr><td><code>title</code></td><td>tab bertuliskan nama file; judul di Google tidak jelas</td></tr>
<tr><td><code>description</code></td><td>Google memilih cuplikan sendiri, sering kurang menarik</td></tr>
<tr><td><code>og:image</code></td><td>pratinjau di media sosial tanpa gambar atau gambar asal</td></tr></table>
<h4>2. Menulis title dan description yang baik</h4>
<ul><li><b>Title</b> ±50–60 karakter, kata paling penting di depan, unik untuk setiap halaman: "Daftar Harga · Kopi Senja".</li>
<li><b>Description</b> ±150–160 karakter, menjawab "kenapa harus klik?" dengan bahasa manusia, bukan deretan kata kunci.</li></ul>
<h4>3. Memuat JavaScript: biasa, defer, async</h4>
<table class="mini-pivot"><tr><th>Cara</th><th>Mengunduh</th><th>Menjalankan</th><th>Cocok untuk</th></tr>
<tr><td><code>&lt;script src&gt;</code></td><td>menghentikan pembacaan HTML</td><td>langsung</td><td>hampir tidak pernah (kecuali ditaruh di akhir body)</td></tr>
<tr><td><code>defer</code></td><td>paralel</td><td>setelah HTML selesai, <b>urut</b></td><td>script aplikasi yang memakai DOM</td></tr>
<tr><td><code>async</code></td><td>paralel</td><td>segera setelah siap, <b>urutan acak</b></td><td>analytics, iklan, script mandiri</td></tr>
<tr><td><code>type="module"</code></td><td>paralel</td><td>seperti defer</td><td>kode modern dengan import/export</td></tr></table>
<h4>4. Meta lain yang berguna</h4>
<pre><code>&lt;meta name="robots" content="noindex"&gt;          &lt;!-- jangan tampil di Google (BUKAN pengaman) --&gt;
&lt;meta name="theme-color" content="#1b263b"&gt;      &lt;!-- warna bilah browser di HP --&gt;
&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;  &lt;!-- sambung lebih awal ke server font --&gt;
&lt;link rel="manifest" href="/manifest.webmanifest"&gt;  &lt;!-- agar bisa dipasang sebagai aplikasi (PWA) --&gt;</code></pre>
<div class="catatan">SEO bukan trik rahasia. Dasarnya: judul dan deskripsi yang jelas, struktur heading yang rapi (satu h1), teks alt pada gambar, halaman cepat dimuat, enak di HP, dan isi yang benar-benar menjawab kebutuhan pembaca.</div>
<div class="praktik"><b>Coba sendiri:</b> buka situs favoritmu, klik kanan → View Page Source, lalu cari baris <code>og:image</code> dan <code>description</code>. Setelah itu lengkapi <code>&lt;head&gt;</code> halaman portofoliomu dengan semua baris di kerangka di atas.</div>
`},
{k:"interaktif",judul:"Elemen Interaktif & Atribut Global: details, dialog, iframe, data-*",materi:`
<!--pemula--><h4>Untuk pemula: HTML ternyata bisa interaktif sendiri</h4>
<p>Banyak hal yang dulu wajib JavaScript sekarang sudah disediakan HTML: lipatan FAQ, jendela pop-up, saran isian, bilah kemajuan. Memakai elemen bawaan berarti kodenya lebih sedikit, dan aksesibilitas (keyboard, screen reader) sudah diurus browser.</p><!--/pemula-->
<h4>1. details dan summary: buka-tutup tanpa JS</h4>
<pre><code>&lt;details name="faq"&gt;
  &lt;summary&gt;Berapa lama pengiriman?&lt;/summary&gt;
  &lt;p&gt;2–3 hari kerja untuk Pulau Jawa.&lt;/p&gt;
&lt;/details&gt;
&lt;details name="faq"&gt;              &lt;!-- name sama: hanya satu yang terbuka --&gt;
  &lt;summary&gt;Bisa bayar di tempat?&lt;/summary&gt;
  &lt;p&gt;Bisa, untuk wilayah Solo Raya.&lt;/p&gt;
&lt;/details&gt;</code></pre>
<h4>2. dialog: jendela modal bawaan</h4>
<pre><code>&lt;dialog id="konfirmasi"&gt;
  &lt;form method="dialog"&gt;
    &lt;p&gt;Hapus produk ini?&lt;/p&gt;
    &lt;button value="batal"&gt;Batal&lt;/button&gt;
    &lt;button value="hapus"&gt;Hapus&lt;/button&gt;
  &lt;/form&gt;
&lt;/dialog&gt;

&lt;script&gt;
  const d = document.querySelector("#konfirmasi");
  d.showModal();                                   // buka, latar digelapkan, Esc menutup
  d.addEventListener("close", () =&gt; console.log(d.returnValue));   // "batal" atau "hapus"
&lt;/script&gt;</code></pre>
<h4>3. iframe: menyematkan halaman lain</h4>
<pre><code>&lt;iframe src="https://www.youtube.com/embed/ID_VIDEO"
        title="Video: membuat pivot table di Excel"
        width="560" height="315" loading="lazy" allowfullscreen&gt;&lt;/iframe&gt;</code></pre>
<p>Dipakai untuk YouTube, Google Maps, dan formulir. Selalu beri <code>title</code>. Banyak situs melarang dirinya disematkan (demi keamanan dari clickjacking), sehingga iframe-nya tampil kosong.</p>
<h4>4. Gambar responsif: srcset dan picture</h4>
<pre><code>&lt;img src="kopi-800.jpg"
     srcset="kopi-400.jpg 400w, kopi-800.jpg 800w, kopi-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Segelas kopi susu gula aren" width="800" height="600" loading="lazy"&gt;

&lt;picture&gt;
  &lt;source media="(max-width: 600px)" srcset="banner-tegak.webp"&gt;
  &lt;img src="banner-lebar.webp" alt="Promo akhir tahun"&gt;
&lt;/picture&gt;</code></pre>
<p>Menulis <code>width</code> dan <code>height</code> membuat browser menyiapkan ruang sejak awal, sehingga halaman tidak "meloncat" saat gambar selesai dimuat.</p>
<h4>5. Elemen kecil yang sering dilupakan</h4>
<table class="mini-pivot"><tr><th>Elemen</th><th>Kegunaan</th></tr>
<tr><td><code>&lt;progress value="70" max="100"&gt;</code></td><td>kemajuan tugas (unggah, langkah)</td></tr>
<tr><td><code>&lt;meter value="0.7"&gt;</code></td><td>ukuran dalam rentang (kapasitas, kekuatan password)</td></tr>
<tr><td><code>&lt;datalist&gt;</code></td><td>saran isian tanpa membatasi</td></tr>
<tr><td><code>&lt;template&gt;</code></td><td>cetakan HTML tersembunyi untuk digandakan JS</td></tr>
<tr><td><code>&lt;mark&gt;</code>, <code>&lt;kbd&gt;</code>, <code>&lt;abbr title&gt;</code></td><td>stabilo, tombol keyboard, singkatan</td></tr>
<tr><td><code>&lt;time datetime="2026-11-23"&gt;</code></td><td>tanggal yang terbaca mesin</td></tr></table>
<h4>6. Atribut global dan data-*</h4>
<table class="mini-pivot"><tr><th>Atribut</th><th>Fungsi</th></tr>
<tr><td><code>id</code>, <code>class</code></td><td>penanda untuk CSS/JS</td></tr>
<tr><td><code>title</code></td><td>teks tooltip saat kursor berhenti</td></tr>
<tr><td><code>hidden</code></td><td>sembunyikan elemen</td></tr>
<tr><td><code>tabindex="0"</code></td><td>bisa difokus dengan Tab (<code>-1</code> = hanya lewat JS)</td></tr>
<tr><td><code>contenteditable</code></td><td>isi bisa diedit langsung</td></tr>
<tr><td><code>data-*</code></td><td>menyimpan data sendiri: <code>data-harga="18000"</code> → <code>el.dataset.harga</code></td></tr></table>
<h4>7. Entitas karakter</h4>
<table class="mini-pivot"><tr><th>Tulis</th><th>Tampil</th></tr>
<tr><td><code>&amp;lt;</code> <code>&amp;gt;</code></td><td>&lt; &gt;</td></tr>
<tr><td><code>&amp;amp;</code></td><td>&amp;</td></tr>
<tr><td><code>&amp;quot;</code></td><td>"</td></tr>
<tr><td><code>&amp;nbsp;</code></td><td>spasi yang tidak boleh dipisah baris ("Rp&amp;nbsp;18.000")</td></tr>
<tr><td><code>&amp;copy;</code> <code>&amp;rarr;</code></td><td>&copy; &rarr;</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> buat halaman FAQ toko dengan 4 <code>&lt;details&gt;</code>, tombol "Hubungi kami" yang membuka <code>&lt;dialog&gt;</code> berisi form, dan peta lokasi dalam <code>&lt;iframe&gt;</code> ber-title.</div>
`}
);

MATERI_CSS.push(
{k:"selektor",judul:"Selector Lanjut: Atribut, Pseudo-class & Pseudo-element",materi:`
<!--pemula--><h4>Untuk pemula: memilih elemen dengan lebih jitu</h4>
<p>Di bab Dasar kamu memilih elemen lewat tag (<code>p</code>), class (<code>.kartu</code>), dan id (<code>#menu</code>). Kadang itu belum cukup: kamu ingin memilih "baris genap saja", "tombol yang sedang disorot", atau "tautan yang menuju file PDF", tanpa menambah class satu per satu di HTML. Bab ini adalah kotak alat untuk itu.</p>
<table class="mini-pivot"><tr><th>Jenis</th><th>Penanda</th><th>Memilih berdasarkan</th></tr>
<tr><td>Attribute selector</td><td><code>[ ]</code></td><td>atribut HTML</td></tr>
<tr><td>Pseudo-class</td><td><code>:</code> (satu titik dua)</td><td>keadaan atau posisi elemen</td></tr>
<tr><td>Pseudo-element</td><td><code>::</code> (dua titik dua)</td><td>bagian semu dari elemen</td></tr>
<tr><td>Combinator</td><td>spasi, <code>&gt;</code>, <code>+</code>, <code>~</code></td><td>hubungan antarelemen</td></tr></table><!--/pemula-->
<h4>1. Attribute selector</h4>
<pre><code>input[type="email"]      { … }   /* atribut bernilai persis */
a[target="_blank"]::after { content: " ↗"; }
a[href^="https"]          { … }   /* diawali */
a[href$=".pdf"]           { … }   /* diakhiri */
a[href*="youtube"]        { … }   /* mengandung */
button[disabled]          { opacity: .5; cursor: not-allowed; }   /* atribut ada */</code></pre>
<h4>2. Pseudo-class keadaan</h4>
<table class="mini-pivot"><tr><th>Pseudo-class</th><th>Kapan cocok</th></tr>
<tr><td><code>:hover</code></td><td>kursor di atas elemen (tidak ada di layar sentuh)</td></tr>
<tr><td><code>:active</code></td><td>sedang ditekan</td></tr>
<tr><td><code>:focus</code> / <code>:focus-visible</code></td><td>sedang fokus / fokus lewat keyboard</td></tr>
<tr><td><code>:checked</code></td><td>checkbox/radio dicentang</td></tr>
<tr><td><code>:disabled</code>, <code>:required</code></td><td>input nonaktif / wajib</td></tr>
<tr><td><code>:invalid</code>, <code>:user-invalid</code></td><td>isian tidak sah (yang kedua baru setelah pengguna berinteraksi)</td></tr>
<tr><td><code>:visited</code></td><td>tautan yang sudah dikunjungi</td></tr></table>
<p>Urutan aman untuk tautan: <code>:link</code>, <code>:visited</code>, <code>:hover</code>, <code>:active</code> (jembatan keledai: <b>L</b>o<b>V</b>e <b>HA</b>te).</p>
<h4>3. Pseudo-class posisi</h4>
<pre><code>li:first-child        /* anak pertama */
li:last-child         /* anak terakhir */
li:nth-child(2)       /* anak ke-2 */
li:nth-child(odd)     /* 1, 3, 5 … */
li:nth-child(3n)      /* 3, 6, 9 … */
li:nth-child(-n+3)    /* 3 pertama */
p:first-of-type       /* p pertama di antara saudara sejenis */
li:not(:last-child)   { border-bottom: 1px solid #ddd; }   /* garis pemisah kecuali yang terakhir */</code></pre>
<h4>4. Selector logika modern</h4>
<pre><code>:is(h1, h2, h3) a   { color: inherit; }   /* singkatan grup */
:where(.kartu) p    { margin: 0; }        /* sama, tapi spesifisitas 0: mudah ditimpa */
.kartu:has(img)     { padding-top: 0; }   /* kartu YANG berisi gambar */
form:has(:invalid) button[type=submit] { opacity: .6; }</code></pre>
<h4>5. Pseudo-element</h4>
<pre><code>.wajib::after      { content: " *"; color: crimson; }
.kutipan::before   { content: "“"; font-size: 3rem; }
p::first-letter    { font-size: 2em; float: left; }   /* huruf awal besar ala majalah */
input::placeholder { color: #888; }
::selection        { background: #ffe58a; }           /* warna teks yang diblok */
li::marker         { color: var(--aksen); }           /* warna bulatan daftar */</code></pre>
<h4>6. Combinator</h4>
<table class="mini-pivot"><tr><th>Tulisan</th><th>Arti</th></tr>
<tr><td><code>nav a</code></td><td>a di dalam nav, sedalam apa pun</td></tr>
<tr><td><code>ul &gt; li</code></td><td>li anak langsung ul</td></tr>
<tr><td><code>h2 + p</code></td><td>p yang tepat setelah h2</td></tr>
<tr><td><code>h2 ~ p</code></td><td>semua p setelah h2 (saudara)</td></tr></table>
<div class="catatan">Spesifisitas dihitung (id, class/atribut/pseudo-class, tag/pseudo-element). <code>#beranda</code> = (1,0,0) selalu mengalahkan <code>nav .tautan.aktif</code> = (0,2,1). <code>:where()</code> bernilai 0, sedangkan <code>:is()</code>, <code>:not()</code>, <code>:has()</code> mengambil nilai bagian terkuat di dalamnya.</div>
<div class="praktik"><b>Coba sendiri:</b> buat daftar 10 item. Tanpa menambah class: beri warna latar baris genap, garis pemisah kecuali item terakhir, ikon ↗ pada tautan yang membuka tab baru, dan warna berbeda untuk tautan ke file .pdf.</div>
`},
{k:"satuan",judul:"Satuan & Warna: px, em, rem, %, vw, clamp(), hsl()",materi:`
<!--pemula--><h4>Untuk pemula: kenapa tidak px saja?</h4>
<p>Piksel itu pasti: 16px tetap 16px. Masalahnya, layar pengguna berbeda-beda (HP 360px sampai monitor 2560px), dan sebagian orang memperbesar huruf di pengaturan browser karena penglihatannya kurang. Satuan relatif membuat desainmu ikut menyesuaikan, bukan pecah.</p><!--/pemula-->
<h4>1. Tabel satuan</h4>
<table class="mini-pivot"><tr><th>Satuan</th><th>Relatif terhadap</th><th>Paling cocok untuk</th></tr>
<tr><td><code>px</code></td><td>tetap</td><td>garis tipis (border 1px), bayangan</td></tr>
<tr><td><code>rem</code></td><td>ukuran huruf <code>&lt;html&gt;</code> (bawaan 16px)</td><td>font-size, jarak utama</td></tr>
<tr><td><code>em</code></td><td>ukuran huruf induk / dirinya</td><td>padding tombol yang ikut besar-kecil teks</td></tr>
<tr><td><code>%</code></td><td>ukuran induk</td><td>lebar kolom</td></tr>
<tr><td><code>vw</code> / <code>vh</code></td><td>1% lebar / tinggi layar</td><td>bagian layar penuh, ukuran cair</td></tr>
<tr><td><code>dvh</code></td><td>tinggi layar yang terlihat (mengikuti bilah browser HP)</td><td>halaman pembuka setinggi layar di HP</td></tr>
<tr><td><code>fr</code></td><td>bagian dari sisa ruang (hanya grid)</td><td>kolom grid</td></tr>
<tr><td><code>ch</code></td><td>lebar karakter "0"</td><td>lebar baris teks (max-width: 65ch)</td></tr></table>
<pre><code>html   { font-size: 100%; }          /* hormati pengaturan pengguna (biasanya 16px) */
h1     { font-size: 2.5rem; }        /* 40px */
.tombol { font-size: 1rem; padding: .75em 1.25em; }   /* padding ikut kalau font-size diubah */
.tombol--besar { font-size: 1.25rem; }               /* padding otomatis ikut membesar */</code></pre>
<h4>2. Fungsi matematika CSS</h4>
<pre><code>.isi    { width: calc(100% - 240px); }           /* campur satuan; wajib spasi di sekitar - */
.wadah  { width: min(100% - 2rem, 1100px); margin-inline: auto; }   /* lebar maksimal + gutter */
h1      { font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem); }        /* judul cair yang aman */
.bagian { padding-block: clamp(2rem, 8vw, 6rem); }</code></pre>
<ul><li><code>min(a, b)</code> = pakai yang lebih kecil (berguna sebagai batas maksimal).</li><li><code>max(a, b)</code> = pakai yang lebih besar (batas minimal).</li><li><code>clamp(MIN, IDEAL, MAX)</code> = nilai ideal tapi dijepit di antara batas.</li></ul>
<h4>3. Cara menulis warna</h4>
<table class="mini-pivot"><tr><th>Bentuk</th><th>Contoh</th><th>Catatan</th></tr>
<tr><td>nama</td><td><code>tomato</code></td><td>praktis untuk coba-coba</td></tr>
<tr><td>hex</td><td><code>#1a2ffb</code>, <code>#1a2ffb80</code></td><td>paling umum; 2 digit terakhir opsional = transparansi</td></tr>
<tr><td>rgb</td><td><code>rgb(26 47 251 / 0.5)</code></td><td>merah, hijau, biru 0–255 + alpha</td></tr>
<tr><td>hsl</td><td><code>hsl(234 96% 54%)</code></td><td>rona°, kepekatan, terang: mudah membuat varian</td></tr>
<tr><td>oklch</td><td><code>oklch(55% 0.25 265)</code></td><td>modern; perubahan terang terasa merata di mata</td></tr>
<tr><td><code>currentColor</code></td><td><code>border-color: currentColor</code></td><td>mengikuti warna teks</td></tr></table>
<pre><code>:root {
  --biru: hsl(234 96% 54%);
  --biru-gelap: hsl(234 96% 40%);    /* cukup turunkan angka terang */
  --biru-pudar: hsl(234 96% 54% / 0.12);
}</code></pre>
<div class="catatan">Kontras teks dan latar minimal 4,5 : 1 (standar WCAG) agar terbaca semua orang. Cek dengan DevTools: klik kotak warna di panel Styles, nilai kontras langsung tampil. Hindari putih #fff di atas hitam #000 murni untuk bacaan panjang; abu sangat gelap dan krem lebih nyaman.</div>
<div class="praktik"><b>Coba sendiri:</b> buat kartu dengan lebar <code>min(100%, 420px)</code>, judul <code>clamp(1.25rem, 3vw, 2rem)</code>, padding dalam <code>em</code>, dan tiga varian warna tombol dari satu nilai hsl dengan mengubah angka terangnya saja. Ubah ukuran jendela dan amati.</div>
`},
{k:"animasi",judul:"Transform, Transition, Filter & Animasi @keyframes",materi:`
<!--pemula--><h4>Untuk pemula: gerakan kecil yang membuat situs terasa hidup</h4>
<p>Tombol yang sedikit terangkat saat disorot, menu yang meluncur halus, ikon loading yang berputar. Gerakan kecil seperti ini memberi umpan balik ("ya, tombolnya merespons"). Kuncinya: halus, cepat (0,15–0,4 detik), dan tidak mengganggu.</p>
<table class="mini-pivot"><tr><th>Alat</th><th>Kapan dipakai</th></tr>
<tr><td><code>transform</code></td><td>menggeser, memutar, memperbesar tanpa mengubah tata letak</td></tr>
<tr><td><code>transition</code></td><td>perubahan halus antara dua keadaan (normal ↔ hover)</td></tr>
<tr><td><code>@keyframes</code> + <code>animation</code></td><td>gerakan yang berjalan sendiri, bisa berulang</td></tr>
<tr><td><code>filter</code></td><td>efek foto: blur, hitam-putih, kecerahan</td></tr></table><!--/pemula-->
<h4>1. transform</h4>
<pre><code>.a { transform: translate(20px, -10px); }  /* geser kanan 20, naik 10 */
.b { transform: scale(1.05); }             /* besar 5% */
.c { transform: rotate(45deg); }           /* putar */
.d { transform: translateY(-4px) scale(1.02); }   /* digabung, dibaca kanan ke kiri */
.e { transform-origin: top left; }         /* titik poros */</code></pre>
<h4>2. transition</h4>
<pre><code>.kartu {
  transition: transform .25s ease-out, box-shadow .25s ease-out;
}
.kartu:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgb(0 0 0 / .12);
}</code></pre>
<p>Tulis <code>transition</code> di elemen dasarnya, jadi halus saat kursor masuk <b>dan</b> keluar. Hindari <code>transition: all</code> karena ikut menganimasikan properti yang tidak kamu sadari.</p>
<h4>3. Kurva kecepatan (easing)</h4>
<table class="mini-pivot"><tr><th>Nilai</th><th>Rasa gerakan</th><th>Cocok untuk</th></tr>
<tr><td><code>ease-out</code></td><td>cepat lalu mendarat pelan</td><td>elemen muncul, hover</td></tr>
<tr><td><code>ease-in</code></td><td>pelan lalu cepat</td><td>elemen pergi/hilang</td></tr>
<tr><td><code>ease-in-out</code></td><td>pelan–cepat–pelan</td><td>pindah posisi</td></tr>
<tr><td><code>linear</code></td><td>tetap</td><td>putaran loading</td></tr>
<tr><td><code>cubic-bezier(.2,.8,.2,1)</code></td><td>kurva buatan sendiri</td><td>gaya khas merek</td></tr></table>
<h4>4. @keyframes dan animation</h4>
<pre><code>@keyframes muncul {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}
@keyframes putar { to { transform: rotate(1turn); } }

.notifikasi { animation: muncul .4s ease-out both; }
.loading    { animation: putar 1s linear infinite; }</code></pre>
<table class="mini-pivot"><tr><th>Properti</th><th>Contoh</th><th>Arti</th></tr>
<tr><td><code>animation-duration</code></td><td><code>.4s</code></td><td>lama satu putaran</td></tr>
<tr><td><code>animation-delay</code></td><td><code>.1s</code></td><td>jeda sebelum mulai (bagus untuk efek berurutan)</td></tr>
<tr><td><code>animation-iteration-count</code></td><td><code>infinite</code>, <code>3</code></td><td>berapa kali</td></tr>
<tr><td><code>animation-direction</code></td><td><code>alternate</code></td><td>bolak-balik</td></tr>
<tr><td><code>animation-fill-mode</code></td><td><code>forwards</code>, <code>both</code></td><td>tetap di keadaan akhir/awal</td></tr></table>
<h4>5. filter</h4>
<pre><code>.logo-klien       { filter: grayscale(1) opacity(.7); transition: filter .3s; }
.logo-klien:hover { filter: none; }
.latar-redup      { filter: brightness(.6); }
.ikon             { filter: drop-shadow(0 2px 4px rgb(0 0 0 / .3)); }   /* bayangan mengikuti bentuk PNG */</code></pre>
<h4>6. Animasi yang ringan dan sopan</h4>
<ul><li>Animasikan <b><code>transform</code> dan <code>opacity</code></b>. Menganimasikan <code>width</code>, <code>height</code>, <code>top</code>, <code>margin</code> memaksa browser menghitung ulang tata letak setiap bingkai sehingga patah-patah di perangkat sederhana.</li>
<li><code>blur</code> dan <code>box-shadow</code> besar berat digambar; pakai seperlunya.</li>
<li>Hormati pengguna yang mudah pusing:</li></ul>
<pre><code>@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}</code></pre>
<div class="praktik"><b>Coba sendiri:</b> buat tombol yang terangkat 2px dengan bayangan saat hover, ikon loading berputar dengan <code>@keyframes</code>, dan tiga kartu yang muncul berurutan memakai <code>animation-delay</code> 0s, .1s, .2s. Lalu aktifkan "Reduce motion" di pengaturan sistem dan pastikan animasinya mati.</div>
`},
{k:"gridlanjut",judul:"Layout Lanjut: Grid Areas, auto-fit, Float & Container Query",materi:`
<!--pemula--><h4>Untuk pemula: dari kotak-kotak ke tata letak sungguhan</h4>
<p>Di bab Position &amp; Grid kamu membuat grid sederhana. Sekarang kita membangun pola yang dipakai situs nyata: galeri kartu yang otomatis menyesuaikan layar, kerangka halaman (header, sidebar, isi, footer), foto yang tidak gepeng, dan teks yang mengalir mengelilingi gambar.</p><!--/pemula-->
<h4>1. Galeri responsif tanpa media query</h4>
<pre><code>.galeri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
  gap: 1rem;
}</code></pre>
<p>Bacanya: "buat kolom sebanyak yang muat; setiap kolom minimal 220px dan berbagi sisa ruang". <code>min(220px, 100%)</code> menjaga agar di layar yang lebih sempit dari 220px kartu tidak meluber.</p>
<p>Beda <code>auto-fit</code> dan <code>auto-fill</code> baru terlihat saat item sedikit: <code>auto-fill</code> tetap membuat slot kolom kosong, sedangkan <code>auto-fit</code> melipat slot kosong sehingga item yang ada melebar memenuhi baris.</p>
<h4>2. Kerangka halaman dengan grid-template-areas</h4>
<pre><code>.halaman {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "kepala" "isi" "samping" "kaki";      /* HP: satu kolom */
  min-height: 100dvh;
}
@media (min-width: 900px) {
  .halaman {
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "kepala  kepala"
      "samping isi"
      "kaki    kaki";
  }
}
header { grid-area: kepala; }
aside  { grid-area: samping; }
main   { grid-area: isi; }
footer { grid-area: kaki; }</code></pre>
<p>Kelebihannya: urutan di HTML tetap logis untuk screen reader, sementara posisi visual diatur dari CSS seperti menggambar peta.</p>
<h4>3. Menempatkan item lewat nomor garis</h4>
<pre><code>.lebar-penuh { grid-column: 1 / -1; }     /* dari garis pertama sampai terakhir */
.besar       { grid-column: span 2; grid-row: span 2; }
.pusat       { display: grid; place-items: center; }</code></pre>
<h4>4. Gambar yang rapi: aspect-ratio dan object-fit</h4>
<pre><code>.kartu img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;          /* tutup kotak, potong tepi */
  object-position: center top;/* bagian mana yang dipertahankan */
}</code></pre>
<h4>5. Float: teks mengelilingi gambar</h4>
<pre><code>.artikel img.kiri { float: left; width: 40%; margin: 0 1rem 1rem 0; }
.artikel h2       { clear: both; }           /* judul berikutnya mulai di bawah gambar */
.artikel          { display: flow-root; }    /* induk ikut setinggi gambar float */</code></pre>
<p>Float sekarang hanya untuk tujuan aslinya (teks mengelilingi gambar). Untuk menyusun kolom, gunakan Flexbox/Grid.</p>
<h4>6. Multi-kolom dan container query</h4>
<pre><code>.daftar-istilah { columns: 3 200px; column-gap: 2rem; }   /* maks 3 kolom, minimal 200px */

.wadah-kartu { container-type: inline-size; }
@container (min-width: 420px) {
  .kartu { display: grid; grid-template-columns: 160px 1fr; }   /* mendatar kalau wadahnya lebar */
}</code></pre>
<div class="catatan">Pegangan memilih: satu arah → Flexbox. Dua arah → Grid. Teks mengelilingi gambar → float. Komponen menyesuaikan wadahnya → container query. Seluruh halaman menyesuaikan layar → media query.</div>
<div class="praktik"><b>Coba sendiri:</b> bangun halaman blog dengan <code>grid-template-areas</code> (header, sidebar, isi, footer) yang menjadi satu kolom di HP, galeri artikel terkait dengan <code>auto-fit</code>/<code>minmax</code>, dan foto berukuran sama berkat <code>aspect-ratio</code>.</div>
`},
{k:"arsitektur",judul:"Merapikan CSS: Reset, BEM, Sass & Framework",materi:`
<!--pemula--><h4>Untuk pemula: CSS 50 baris vs CSS 5.000 baris</h4>
<p>Di proyek kecil, CSS bisa ditulis bebas. Di proyek tim dengan ratusan komponen, CSS cepat jadi "hutan": aturan saling menimpa, tidak ada yang berani menghapus kode lama, dan <code>!important</code> di mana-mana. Bab ini membahas cara para profesional menjaga CSS tetap rapi, serta alat yang sering diminta di lowongan (Sass, Tailwind, Bootstrap).</p><!--/pemula-->
<h4>1. Mulai dari reset kecil</h4>
<pre><code>*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
html { color-scheme: light dark; }
body { line-height: 1.5; -webkit-font-smoothing: antialiased; }
img, picture, svg, video { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }</code></pre>
<h4>2. Penamaan BEM</h4>
<pre><code>&lt;article class="kartu kartu--unggulan"&gt;
  &lt;img class="kartu__gambar" src="…" alt="…"&gt;
  &lt;h3 class="kartu__judul"&gt;Kopi Susu&lt;/h3&gt;
  &lt;button class="kartu__tombol kartu__tombol--besar"&gt;Beli&lt;/button&gt;
&lt;/article&gt;</code></pre>
<pre><code>.kartu { … }
.kartu--unggulan { border-color: gold; }
.kartu__judul { … }
.kartu__tombol--besar { font-size: 1.25rem; }</code></pre>
<p>Semua selector hanya satu class, jadi spesifisitas setara dan mudah ditimpa. Dari nama class saja kamu tahu letak dan fungsinya.</p>
<h4>3. Variabel dan mode gelap</h4>
<pre><code>:root {
  --latar: #f6f5f2; --teks: #23252b; --aksen: #2f4cdd;
  --radius: 12px; --jarak: 1rem;
}
@media (prefers-color-scheme: dark) {
  :root { --latar: #16181d; --teks: #e7e5e1; --aksen: #8ea2ff; }
}
.tombol { background: var(--aksen); border-radius: var(--radius); padding: var(--jarak); }</code></pre>
<p>Variabel CSS asli (custom property, <code>--aksen</code>) <b>hidup di browser</b>: bisa ditimpa per komponen, di media query mode gelap, atau lewat JavaScript (<code>el.style.setProperty("--aksen", "red")</code>). Variabel Sass (<code>$aksen</code>) hilang setelah dikompilasi dan menjadi nilai tetap.</p>
<h4>4. Mobile-first</h4>
<pre><code>.menu { display: none; }                         /* HP: menu tersembunyi di tombol ☰ */
@media (min-width: 768px)  { .menu { display: flex; } }
@media (min-width: 1024px) { .wadah { max-width: 1100px; } }</code></pre>
<h4>5. Sass, CSS modern, dan lapisan</h4>
<pre><code>// Sass (.scss) → dikompilasi jadi CSS
$aksen: #2f4cdd;
@mixin tengah { display: grid; place-items: center; }
.kartu {
  &amp;__judul { color: $aksen; }     // → .kartu__judul
  &amp;:hover  { transform: translateY(-2px); }
  .ikon    { @include tengah; }
}</code></pre>
<pre><code>/* CSS asli modern: nesting dan cascade layers */
@layer reset, komponen, utilitas;      /* urutan prioritas lapisan, terakhir paling kuat */
@layer komponen {
  .kartu { padding: 1rem; &amp;:hover { translate: 0 -2px; } }
}</code></pre>
<h4>6. Framework: Bootstrap dan Tailwind</h4>
<table class="mini-pivot"><tr><th></th><th>Bootstrap</th><th>Tailwind CSS</th></tr>
<tr><td>Gaya</td><td>komponen jadi: <code>btn btn-primary</code>, <code>card</code>, <code>navbar</code></td><td>utility: <code>px-4 py-2 rounded-lg bg-blue-600</code></td></tr>
<tr><td>Grid</td><td><code>row</code> + <code>col-12 col-md-6</code> (12 kolom)</td><td><code>grid grid-cols-1 md:grid-cols-3 gap-4</code></td></tr>
<tr><td>Kelebihan</td><td>cepat untuk admin/dashboard, banyak contoh</td><td>tampilan unik tanpa menulis CSS, ukuran akhir kecil</td></tr>
<tr><td>Kekurangan</td><td>situs mudah terlihat "seragam"</td><td>HTML penuh class panjang</td></tr></table>
<div class="catatan">Kuasai CSS murni dulu. Framework hanya mempercepat; saat ada tampilan yang aneh, kamu tetap harus membuka DevTools dan memahami box model, flex, grid, dan spesifisitas di baliknya.</div>
<h4>7. Debugging CSS dengan DevTools</h4>
<ol><li>Klik kanan elemen → Inspect.</li><li>Panel <b>Styles</b>: aturan yang dicoret berarti kalah. Centang/hapus centang properti untuk mencoba.</li><li>Panel <b>Computed</b>: nilai akhir dan asal aturannya.</li><li>Ikon <b>flex</b>/<b>grid</b> di samping elemen menampilkan garis bantu tata letak.</li><li>Tombol perangkat (Ctrl+Shift+M) untuk menguji ukuran HP.</li></ol>
<div class="praktik"><b>Coba sendiri:</b> ambil satu halaman latihanmu, tulis ulang CSS-nya dengan reset, variabel warna (termasuk mode gelap), penamaan BEM, dan pendekatan mobile-first. Bandingkan jumlah baris dan berapa kali kamu butuh <code>!important</code> sebelum dan sesudah.</div>
`}
);
