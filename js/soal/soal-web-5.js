// ============ CSS — tambahan 2x lipat (12 bab) ============
// Dimuat SETELAH soal-latihan-ekstra.js. Soal konsep dan membaca kode (tidak dijalankan). Opsi diacak saat tampil, kunci di indeks 0.
(function () {
  const M = (k, lv, q, o, e, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_CSS.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_CSS.push(
  // ---- dasar (+18) ----
  M("dasar", 1, "Bagian-bagian aturan CSS: p { color: navy; }", ["p = selector, color = properti, navy = nilai", "p = properti, color = selector, navy = nilai", "p = nilai, color = properti, navy = selector", "Semuanya selector"], "Selector memilih elemen, properti adalah apa yang diatur, nilai adalah isinya. Setiap deklarasi diakhiri titik koma."),
  M("dasar", 1, "Cara memasang CSS yang paling rapi untuk situs banyak halaman:", ["File eksternal dengan <link rel=\"stylesheet\" href=\"gaya.css\">", "Atribut style di setiap elemen", "<style> di setiap halaman", "Menulis di <title>"], "Satu file dipakai semua halaman; ubah sekali, semua ikut berubah."),
  M("dasar", 1, "Selector untuk semua elemen dengan class=\"kartu\":", [".kartu", "#kartu", "kartu", "*kartu"], "Titik untuk class, pagar untuk id, tanpa tanda untuk nama tag."),
  M("dasar", 1, "Selector #menu memilih…", ["Elemen dengan id=\"menu\"", "Semua elemen class menu", "Tag <menu>", "Semua elemen"], "id unik, jadi #menu biasanya hanya satu elemen."),
  M("dasar", 2, "Dua aturan berikut sama-sama memakai selector .judul. Warna akhirnya:", ["merah", "biru", "ungu (campuran)", "hitam"], "Bila kekuatan selector sama, aturan yang ditulis TERAKHIR menang (cascade).", ".judul { color: blue; }\n.judul { color: red; }"),
  M("dasar", 2, "Warna akhir teks <p class=\"info\" id=\"utama\">:", ["hijau (id paling kuat)", "merah", "biru", "hitam"], "Kekuatan selector: id > class > tag. Urutan tulisan baru menentukan bila kekuatannya sama.", "p { color: red; }\n.info { color: blue; }\n#utama { color: green; }"),
  M("dasar", 2, "Properti mana yang DIWARISKAN ke elemen anak?", ["color dan font-family", "border dan margin", "padding dan width", "background-image"], "Properti teks (color, font, line-height) turun ke anak. Properti kotak (border, margin, padding) tidak."),
  M("dasar", 1, "Menulis warna merah dengan kode HEX:", ["#ff0000", "#00ff00", "#0000ff", "rgb(0, 0, 255)"], "Urutan HEX: RR GG BB. ff = penuh."),
  M("dasar", 2, "rgba(0, 0, 0, 0.5) berarti…", ["Hitam dengan transparansi 50%", "Putih setengah", "Merah", "Hitam pekat"], "Angka keempat (alpha) 0 = tembus penuh, 1 = pekat."),
  M("dasar", 2, "Komentar di CSS ditulis…", ["/* catatan */", "// catatan", "<!-- catatan -->", "# catatan"], "Hanya /* */ yang sah di CSS; // bisa merusak aturan berikutnya."),
  M("dasar", 2, "Selector h1, h2, h3 { … } berarti…", ["Aturan berlaku untuk h1, h2, DAN h3", "Hanya h3 di dalam h2 di dalam h1", "Hanya h1", "Error"], "Koma = daftar beberapa selector. Spasi = keturunan."),
  M("dasar", 2, "Selector nav a memilih…", ["Semua <a> yang berada di dalam <nav> (keturunan)", "Elemen nav dan a", "a yang tepat setelah nav", "nav di dalam a"], "Spasi berarti 'di dalam', seberapa pun dalamnya."),
  M("dasar", 2, "Kode ini tidak berefek apa-apa. Kenapa?", ["Lupa titik koma setelah navy, sehingga deklarasi berikutnya ikut rusak", "color tidak ada", "Selector salah", "Kurung kurawal salah"], "Satu titik koma hilang membuat browser membaca 'navy font-size: 20px' sebagai satu nilai yang tidak sah.", "p {\n  color: navy\n  font-size: 20px;\n}"),
  M("dasar", 2, "Alat paling cepat untuk mencoba CSS langsung di browser:", ["DevTools (F12) → tab Elements → panel Styles", "Notepad", "Memuat ulang terus", "Menghapus cache"], "Di Styles kamu bisa mengubah nilai dan langsung melihat hasilnya, termasuk aturan mana yang dicoret karena kalah."),
  M("dasar", 3, "!important sebaiknya…", ["Jarang dipakai; biasanya tanda masalah urutan atau kekuatan selector", "Dipakai di setiap aturan", "Wajib untuk warna", "Mempercepat CSS"], "!important mengalahkan hampir semua aturan sehingga perubahan berikutnya makin sulit."),
  M("dasar", 3, "Nilai currentColor pada border-color berarti…", ["Memakai warna teks (color) elemen itu", "Warna acak", "Hitam", "Warna induk tetap"], "Berguna untuk ikon dan garis yang otomatis mengikuti warna teks."),
  I("dasar", 1, "Properti warna teks: ____: navy;", ["color"], "color mengatur warna teks."),
  I("dasar", 1, "Properti warna latar: ____-color: #fff;", ["background"], "background-color mengatur latar."),

  // ---- teks (+15) ----
  M("teks", 1, "Mengatur jenis huruf dengan cadangan:", ["font-family: \"Inter\", Arial, sans-serif;", "font: Inter;", "font-type: Inter;", "text-font: Inter;"], "Browser memakai font pertama yang tersedia; sans-serif di akhir sebagai cadangan umum."),
  M("teks", 1, "Membuat teks tebal dengan CSS:", ["font-weight: 700;", "font-style: bold;", "text-weight: bold;", "font-bold: true;"], "400 = normal, 700 = tebal. Font variabel bisa memakai angka di antaranya."),
  M("teks", 1, "Membuat teks miring:", ["font-style: italic;", "font-weight: italic;", "text-style: italic;", "font: slant;"], "font-style untuk miring; font-weight untuk tebal."),
  M("teks", 2, "line-height: 1.6 tanpa satuan berarti…", ["Jarak baris 1,6 kali ukuran huruf elemen itu", "1,6 piksel", "1,6 baris kosong", "Tidak sah"], "Tanpa satuan lebih aman karena ikut menyesuaikan di elemen anak. 1,5–1,7 nyaman untuk paragraf."),
  M("teks", 1, "Meratakan teks ke tengah:", ["text-align: center;", "align: center;", "text-center: true;", "vertical-align: center;"], "text-align meratakan isi baris (inline) di dalam blok."),
  M("teks", 2, "Menghilangkan garis bawah bawaan link:", ["text-decoration: none;", "underline: false;", "text-style: none;", "border-bottom: none;"], "Pastikan link tetap terlihat beda (warna/tebal) supaya pengguna tahu itu link."),
  M("teks", 2, "text-transform: uppercase; akan…", ["Menampilkan semua huruf kapital tanpa mengubah teks aslinya", "Mengubah isi HTML jadi kapital", "Memperbesar huruf", "Error"], "Teks asli tetap sama (penting untuk pembaca layar dan salin-tempel)."),
  M("teks", 2, "Panjang baris paragraf yang nyaman dibaca kira-kira…", ["50–75 karakter, misalnya max-width: 65ch", "200 karakter", "10 karakter", "Selebar layar"], "Satuan ch = lebar huruf 0, cocok untuk membatasi baris."),
  M("teks", 2, "letter-spacing: 0.05em; mengatur…", ["Jarak antarhuruf", "Jarak antarbaris", "Jarak antarkata", "Ukuran huruf"], "word-spacing untuk antarkata, line-height untuk antarbaris."),
  M("teks", 2, "Memotong teks satu baris yang terlalu panjang dengan tanda …", ["white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", "text-cut: dots;", "overflow: ...;", "text-overflow saja"], "Ketiganya dibutuhkan bersama, plus lebar yang terbatas."),
  M("teks", 2, "Memuat font dari file sendiri:", ["@font-face { font-family: \"Saya\"; src: url(font.woff2); }", "@import font.woff2;", "<font src>", "font-file: url()"], "Format woff2 paling hemat. Tambahkan font-display: swap agar teks tetap terbaca selama font dimuat."),
  M("teks", 2, "font-variant-numeric: tabular-nums; berguna untuk…", ["Angka di tabel/harga yang lebarnya sama sehingga sejajar", "Huruf kapital kecil", "Angka Romawi", "Angka miring"], "Setiap digit memakai lebar sama, kolom angka jadi rapi."),
  M("teks", 3, "Kenapa ukuran huruf sebaiknya memakai rem, bukan px?", ["rem mengikuti ukuran huruf pilihan pengguna di pengaturan browser", "rem lebih kecil", "px tidak didukung", "rem membuat warna lebih tajam"], "Pengguna dengan penglihatan rendah sering memperbesar huruf bawaan browser; rem menghormatinya."),
  I("teks", 1, "Properti ukuran huruf: font-____: 1.25rem;", ["size"], "font-size mengatur ukuran."),
  I("teks", 2, "Nilai text-align untuk rata kiri-kanan: text-align: ____;", ["justify"], "justify meratakan kedua sisi; sering membuat jarak kata tidak rata."),

  // ---- boxmodel (+17) ----
  M("boxmodel", 1, "Urutan lapisan box model dari dalam ke luar:", ["content → padding → border → margin", "margin → border → padding → content", "padding → content → margin → border", "content → margin → padding → border"], "Bayangkan kado: isi, busa pelindung (padding), kotak (border), jarak dengan kado lain (margin)."),
  M("boxmodel", 2, "Lebar total kotak ini (box-sizing bawaan content-box):", ["240px", "200px", "220px", "260px"], "200 + padding kiri-kanan (2 × 15) + border kiri-kanan (2 × 5) = 240px.", ".kotak { width: 200px; padding: 15px; border: 5px solid; }"),
  M("boxmodel", 2, "Lebar total kotak yang sama bila box-sizing: border-box:", ["200px", "240px", "170px", "230px"], "border-box memasukkan padding dan border ke dalam width, jadi ukurannya mudah ditebak. Hampir semua proyek memakainya.", ".kotak { box-sizing: border-box; width: 200px; padding: 15px; border: 5px solid; }"),
  M("boxmodel", 1, "margin: 10px 20px; berarti…", ["atas-bawah 10px, kiri-kanan 20px", "atas 10px, kanan 20px saja", "kiri 10px, kanan 20px", "semua sisi 30px"], "Dua nilai: vertikal lalu horizontal."),
  M("boxmodel", 2, "padding: 5px 10px 15px 20px; urutannya…", ["atas, kanan, bawah, kiri (searah jarum jam)", "atas, bawah, kiri, kanan", "kiri, atas, kanan, bawah", "kiri, kanan, atas, bawah"], "Ingat TRouBLe: Top, Right, Bottom, Left."),
  M("boxmodel", 2, "Menaruh kotak berlebar tetap di tengah horizontal:", ["margin: 0 auto; (dengan width atau max-width)", "text-align: center; pada kotak", "padding: auto;", "center: true;"], "auto membagi sisa ruang kiri-kanan sama besar."),
  M("boxmodel", 2, "Margin atas 30px dan margin bawah 20px dari dua paragraf bertumpuk menghasilkan jarak…", ["30px (margin vertikal bertumpuk/collapse, yang besar menang)", "50px", "20px", "10px"], "Margin collapse hanya terjadi pada margin vertikal elemen blok biasa, bukan di flex/grid."),
  M("boxmodel", 2, "Beda padding dan margin:", ["padding di DALAM border (ikut berwarna latar); margin di LUAR border (transparan)", "Sama saja", "margin ikut berwarna latar", "padding di luar border"], "Klik tombol di area padding tetap terhitung klik tombol."),
  M("boxmodel", 1, "Membuat sudut kotak membulat:", ["border-radius: 12px;", "corner: round;", "border-round: 12px;", "radius: 12px;"], "border-radius: 50% pada kotak persegi membuat lingkaran."),
  M("boxmodel", 2, "Isi kotak lebih tinggi dari height-nya. Agar muncul scrollbar:", ["overflow: auto;", "overflow: visible;", "height: auto;", "display: scroll;"], "visible (bawaan) membuat isi tumpah keluar; hidden memotongnya."),
  M("boxmodel", 2, "Beda display: none dan visibility: hidden:", ["none menghilangkan elemen beserta ruangnya; hidden menyembunyikan tapi ruangnya tetap ada", "Sama saja", "hidden menghapus ruang", "none masih bisa diklik"], "Untuk animasi muncul-hilang biasanya memakai opacity."),
  M("boxmodel", 2, "Kenapa width pada elemen <span> tidak berpengaruh?", ["span elemen inline; width/height hanya berlaku untuk blok atau inline-block", "Salah eja", "Butuh !important", "span tidak bisa diberi gaya"], "Ubah dengan display: inline-block bila butuh ukuran."),
  M("boxmodel", 2, "outline berbeda dengan border karena…", ["outline tidak memakan ruang (tidak mengubah ukuran kotak) dan dipakai untuk fokus", "outline selalu merah", "outline hanya untuk gambar", "Sama saja"], "Jangan hapus outline fokus tanpa pengganti."),
  M("boxmodel", 2, "max-width: 100%; pada <img> membuat…", ["Gambar tidak pernah lebih lebar dari wadahnya, tapi tidak membesar melebihi ukuran aslinya", "Gambar selalu selebar layar", "Gambar disembunyikan", "Gambar dipotong"], "Aturan dasar gambar responsif, biasanya bersama height: auto."),
  M("boxmodel", 3, "aspect-ratio: 16 / 9; pada kotak video berguna untuk…", ["Menjaga perbandingan lebar-tinggi saat lebarnya berubah", "Memutar video", "Memotong video", "Memperbesar 16 kali"], "Dulu dibuat dengan trik padding-top: 56.25%."),
  I("boxmodel", 1, "Nilai box-sizing agar padding dan border masuk ke width: box-sizing: ____-box;", ["border"], "border-box membuat ukuran mudah ditebak."),
  I("boxmodel", 2, "Properti bayangan kotak: ____-shadow: 0 4px 12px rgba(0,0,0,.2);", ["box"], "box-shadow: x y blur warna."),

  // ---- layout (+18) ----
  M("layout", 1, "Mengaktifkan Flexbox pada wadah:", ["display: flex;", "flex: on;", "layout: flex;", "display: row;"], "Anak-anaknya langsung berjejer dalam satu baris."),
  M("layout", 1, "Arah bawaan flex-direction adalah…", ["row (ke samping)", "column (ke bawah)", "row-reverse", "wrap"], "Ubah ke column untuk menumpuk ke bawah."),
  M("layout", 1, "Mengatur posisi anak di sumbu UTAMA (arah row = horizontal):", ["justify-content", "align-items", "align-content", "text-align"], "justify-content: center / space-between / flex-end."),
  M("layout", 1, "Menaruh satu elemen tepat di tengah wadah (horizontal dan vertikal):", ["display: flex; justify-content: center; align-items: center;", "margin: center;", "align: middle;", "text-align: center; saja"], "Pola paling terkenal Flexbox. Pastikan wadahnya punya tinggi."),
  M("layout", 2, "gap: 16px; pada wadah flex mengatur…", ["Jarak antar anak tanpa margin tambahan", "Jarak luar wadah", "Padding wadah", "Ukuran anak"], "gap tidak menambah jarak di tepi luar, hanya di antara anak."),
  M("layout", 2, "justify-content: space-between; membuat…", ["Anak pertama di ujung kiri, terakhir di ujung kanan, sisanya berjarak sama", "Semua anak di tengah", "Semua anak di kiri", "Jarak sama di tepi juga"], "Cocok untuk navbar: logo kiri, menu kanan."),
  M("layout", 2, "Anak flex yang mengisi semua sisa ruang:", ["flex: 1;", "width: auto;", "flex: 0;", "grow: true;"], "flex: 1 = flex-grow 1, flex-shrink 1, flex-basis 0."),
  M("layout", 2, "Kartu-kartu di dalam flex tidak turun baris dan terhimpit di HP. Solusi:", ["flex-wrap: wrap; pada wadah", "flex: none;", "overflow: hidden;", "display: block;"], "Bawaan flex adalah nowrap (dipaksa satu baris)."),
  M("layout", 2, "Beda display: inline-block dan block:", ["inline-block berjejer di dalam baris tapi bisa diberi width/height; block memenuhi lebar dan mulai baris baru", "Sama saja", "block berjejer", "inline-block tidak bisa diberi ukuran"], "Flex/grid sekarang lebih sering dipakai untuk berjejer."),
  M("layout", 2, "align-items: stretch (bawaan) membuat…", ["Anak flex setinggi wadah/baris di sumbu silang", "Anak di tengah", "Anak di atas", "Anak dipotong"], "Itu sebabnya kartu dalam satu baris flex otomatis sama tinggi."),
  M("layout", 2, "Mengubah urutan tampil satu anak flex tanpa mengubah HTML:", ["order: -1;", "position: first;", "index: 0;", "z-index: -1;"], "Hati-hati: urutan Tab dan pembaca layar tetap mengikuti HTML."),
  M("layout", 2, "Navbar: logo di kiri, tiga menu di kanan. CSS wadahnya:", ["display: flex; justify-content: space-between; align-items: center;", "display: grid; grid-template-columns: 1fr;", "text-align: right;", "float: left untuk semua"], "Logo dan kelompok menu menjadi dua anak flex yang dipisahkan ke ujung."),
  M("layout", 2, "Kenapa align-items: center tidak terlihat bekerja pada wadah ini?", ["Tinggi wadah sama dengan tinggi isinya, jadi tidak ada ruang untuk dipusatkan", "align-items salah eja", "Harus pakai justify-content", "Flex tidak mendukung vertikal"], "Beri tinggi, misalnya min-height: 100vh.", ".wadah { display: flex; align-items: center; }"),
  M("layout", 2, "flex-direction: column; mengubah peran justify-content menjadi…", ["Mengatur posisi vertikal (sumbu utama ikut berputar)", "Tetap horizontal", "Tidak berpengaruh", "Mengatur warna"], "Sumbu utama mengikuti arah; align-items kini mengatur horizontal."),
  M("layout", 3, "flex: 0 0 200px; pada anak berarti…", ["Tidak membesar, tidak mengecil, ukuran dasar 200px", "Membesar 200 kali", "Lebar 0", "Error"], "Urutan: flex-grow, flex-shrink, flex-basis."),
  M("layout", 3, "Kapan memilih Flexbox dibanding Grid?", ["Flex untuk satu arah (baris ATAU kolom); Grid untuk dua arah sekaligus", "Flex selalu lebih baik", "Grid hanya untuk tabel", "Tidak ada bedanya"], "Navbar dan deretan tombol → flex. Galeri dan tata letak halaman → grid."),
  I("layout", 1, "Nilai display untuk Flexbox: display: ____;", ["flex"], "display: flex."),
  I("layout", 2, "Properti agar anak flex turun baris: flex-____: wrap;", ["wrap"], "flex-wrap: wrap."),

  // ---- posisi (+15) ----
  M("posisi", 1, "position bawaan semua elemen adalah…", ["static", "relative", "absolute", "fixed"], "static mengikuti alur normal; top/left tidak berpengaruh."),
  M("posisi", 2, "Elemen position: absolute; diposisikan relatif terhadap…", ["Leluhur terdekat yang position-nya bukan static", "Selalu layar", "Selalu body", "Elemen sebelumnya"], "Itu sebabnya induknya biasanya diberi position: relative."),
  M("posisi", 2, "Lencana 'Baru' di pojok kanan atas kartu dibuat dengan…", [".kartu { position: relative; } .lencana { position: absolute; top: 8px; right: 8px; }", ".lencana { float: right; }", ".lencana { position: fixed; }", ".kartu { position: absolute; }"], "Kartu menjadi patokan, lencana ditempel di pojoknya."),
  M("posisi", 2, "Beda position: fixed dan sticky:", ["fixed selalu menempel di layar; sticky menempel hanya setelah digulir sampai batasnya di dalam wadahnya", "Sama saja", "sticky selalu di layar", "fixed ikut menggulir"], "Header yang menempel saat digulir biasanya sticky dengan top: 0."),
  M("posisi", 2, "Elemen dengan z-index: 10 tetap di bawah elemen lain. Penyebab paling umum:", ["Elemen itu position: static, sehingga z-index tidak berlaku", "z-index harus 9999", "z-index hanya untuk gambar", "Browser rusak"], "z-index berlaku pada elemen yang diposisikan (relative/absolute/fixed/sticky) atau anak flex/grid."),
  M("posisi", 1, "Mengaktifkan CSS Grid:", ["display: grid;", "display: table;", "grid: on;", "layout: grid;"], "Lalu atur kolom dengan grid-template-columns."),
  M("posisi", 1, "grid-template-columns: 1fr 1fr 1fr; membuat…", ["Tiga kolom sama lebar", "Satu kolom", "Tiga baris", "Kolom 1px"], "fr = bagian dari sisa ruang. Sama dengan repeat(3, 1fr)."),
  M("posisi", 2, "grid-template-columns: 200px 1fr; membuat…", ["Kolom kiri tetap 200px, kolom kanan mengisi sisa", "Dua kolom 200px", "Kolom kanan 200px", "Error"], "Pola sidebar + konten."),
  M("posisi", 2, "Satu item grid yang melebar dua kolom:", ["grid-column: span 2;", "colspan: 2;", "grid-width: 2;", "width: 2fr;"], "Atau grid-column: 1 / 3 (dari garis 1 sampai garis 3)."),
  M("posisi", 2, "grid-column: 1 / -1; artinya…", ["Dari garis pertama sampai garis terakhir: melebar penuh", "Hanya kolom pertama", "Kolom terbalik", "Error"], "Nomor garis negatif dihitung dari ujung kanan."),
  M("posisi", 2, "Menaruh elemen tepat di tengah dengan grid:", ["display: grid; place-items: center;", "grid: center;", "align: grid;", "position: center;"], "place-items menggabung align-items dan justify-items."),
  M("posisi", 2, "inset: 0; pada elemen absolute sama dengan…", ["top: 0; right: 0; bottom: 0; left: 0;", "margin: 0;", "padding: 0;", "z-index: 0;"], "Sering dipakai untuk lapisan penutup selebar induknya."),
  M("posisi", 3, "Header sticky tidak menempel. Penyebab yang sering terjadi:", ["Induknya memakai overflow: hidden/auto, atau top tidak ditulis", "sticky salah eja", "Butuh JavaScript", "Header harus fixed"], "sticky butuh nilai top (misalnya top: 0) dan wadah yang bisa digulir."),
  I("posisi", 1, "Nilai position yang menempel di layar walau digulir: position: ____;", ["fixed"], "fixed relatif terhadap layar."),
  I("posisi", 2, "Satuan pembagi sisa ruang di grid: 1____", ["fr"], "fr = fraction."),

  // ---- dekorasi (+17) ----
  M("dekorasi", 1, "Efek berubah warna perlahan saat kursor di atas tombol:", ["transition: background-color .2s; + aturan :hover", "animation: hover;", "@hover { }", "hover: smooth;"], "transition menghaluskan perubahan antara dua keadaan."),
  M("dekorasi", 1, "Pseudo-class saat kursor berada di atas elemen:", [":hover", ":over", ":mouse", ":focus"], ":focus untuk elemen yang difokus keyboard; pakai :focus-visible."),
  M("dekorasi", 2, "Gradasi dari biru ke ungu ke kanan:", ["background: linear-gradient(to right, blue, purple);", "background: gradient(blue, purple);", "color: blue-purple;", "background-color: linear(blue, purple);"], "Gradasi adalah background-image, bukan background-color."),
  M("dekorasi", 2, "Media query untuk layar dengan lebar maksimal 600px:", ["@media (max-width: 600px) { … }", "@screen 600 { … }", "@media (width < 600) only", "@mobile { … }"], "Gaya di dalamnya hanya berlaku bila syaratnya terpenuhi."),
  M("dekorasi", 2, "Pendekatan mobile-first berarti…", ["Gaya dasar untuk HP, lalu ditambah @media (min-width: …) untuk layar besar", "Membuat situs khusus HP saja", "Menulis CSS laptop dulu", "Tidak memakai media query"], "Gaya HP biasanya lebih sederhana, jadi lebih mudah dijadikan dasar."),
  M("dekorasi", 2, "opacity: 0.5; pada kotak membuat…", ["Seluruh kotak beserta isinya setengah transparan", "Hanya latar transparan", "Hanya teks transparan", "Kotak hilang"], "Untuk latar saja, pakai warna rgba/hsl dengan alpha."),
  M("dekorasi", 2, "Animasi yang paling ringan bagi browser memakai properti…", ["transform dan opacity", "width dan height", "top dan left", "margin"], "transform/opacity tidak memicu hitung ulang tata letak. Aturan KodeQuiz: animasi hanya transform dan opacity."),
  M("dekorasi", 2, "Bayangan pada teks:", ["text-shadow: 1px 1px 2px rgba(0,0,0,.3);", "box-shadow pada teks", "font-shadow: 1px;", "shadow: text;"], "Urutan: geser x, geser y, blur, warna."),
  M("dekorasi", 2, "Menyesuaikan dengan mode gelap sistem:", ["@media (prefers-color-scheme: dark) { … }", "@dark { … }", ":dark-mode { … }", "@media (theme: dark)"], "KodeQuiz juga punya tombol tema manual yang menimpa pilihan sistem."),
  M("dekorasi", 2, "Menghormati pengguna yang tidak ingin banyak animasi:", ["@media (prefers-reduced-motion: reduce) { … matikan/kurangi animasi … }", "@media (no-animation)", "animation: polite;", "Tidak perlu"], "Gerakan besar bisa membuat pusing sebagian orang."),
  M("dekorasi", 2, "background-size: cover; membuat gambar latar…", ["Menutupi seluruh kotak (bisa terpotong) tanpa gepeng", "Tampil utuh dengan sisa kosong", "Diulang", "Gepeng mengikuti kotak"], "contain = tampil utuh; cover = menutupi penuh."),
  M("dekorasi", 2, "object-fit: cover; pada <img> berguna untuk…", ["Foto mengisi kotak berukuran tetap tanpa gepeng (dipotong rapi)", "Memperkecil file", "Membuat lingkaran", "Mengubah format"], "Pasangan sempurna untuk kartu produk dengan tinggi seragam."),
  M("dekorasi", 2, "Tampilan berbeda saat dicetak:", ["@media print { … }", "@print { … }", "print: true;", "@page only"], "Misalnya sembunyikan menu dan tombol saat dicetak."),
  M("dekorasi", 3, "Kenapa transition: all .3s; kurang disarankan?", ["Semua properti ikut dianimasikan, termasuk yang berat dan tidak sengaja berubah", "all tidak sah", "Terlalu cepat", "Tidak berefek"], "Sebutkan properti yang perlu saja: transition: transform .3s, opacity .3s;"),
  M("dekorasi", 2, "cursor: pointer; pada elemen membuat…", ["Kursor berbentuk tangan, menandakan bisa diklik", "Elemen bisa diklik", "Elemen difokus", "Warna berubah"], "Hanya tanda visual; tombol sungguhan tetap pakai <button>."),
  I("dekorasi", 1, "Aturan CSS untuk gaya per ukuran layar diawali @____", ["media"], "@media (min-width: …)."),
  I("dekorasi", 2, "Properti penghalus perubahan gaya: ____: color .2s;", ["transition"], "transition menganimasikan perubahan."),

  // ---- lanjut (+15) ----
  M("lanjut", 2, "Urutan kekuatan selector dari lemah ke kuat:", ["tag < class/atribut/pseudo-class < id < style inline", "id < class < tag", "class < tag < id", "Semua sama"], "Spesifisitas dihitung (id, class, tag). Yang lebih kuat menang walau ditulis lebih dulu."),
  M("lanjut", 2, "Spesifisitas .menu a:hover adalah…", ["(0, 2, 1): dua class/pseudo-class, satu tag", "(1, 0, 1)", "(0, 1, 1)", "(0, 0, 3)"], ".menu (class) + :hover (pseudo-class) = 2, a (tag) = 1."),
  M("lanjut", 1, "Membuat variabel CSS untuk warna utama:", [":root { --utama: #415A77; } lalu color: var(--utama);", "$utama: #415A77;", "@var utama = #415A77;", "let utama = #415A77;"], "Variabel CSS bisa diubah saat halaman berjalan, misalnya untuk tema gelap. KodeQuiz memakainya untuk semua warna."),
  M("lanjut", 2, "var(--aksen, orange) berarti…", ["Pakai --aksen, atau orange bila --aksen tidak ada", "Campur aksen dan orange", "Selalu orange", "Error"], "Nilai kedua adalah cadangan."),
  M("lanjut", 2, "Mengganti tema cukup dengan mengubah variabel di satu tempat karena…", ["Semua aturan memakai var(--…) yang membaca nilai terbaru", "CSS menyalin otomatis", "Browser mengingat warna", "Tidak bisa"], "Contoh: :root[data-theme=\"dark\"] { --bg: #0D1B2A; } mengubah seluruh halaman."),
  M("lanjut", 2, "clamp(1rem, 2.5vw, 2rem) untuk font-size berarti…", ["Ukuran mengikuti lebar layar, tapi tidak pernah di bawah 1rem atau di atas 2rem", "Selalu 2.5vw", "Rata-rata ketiganya", "Error"], "Tipografi responsif tanpa media query."),
  M("lanjut", 2, "calc(100% - 2rem) dipakai untuk…", ["Menghitung ukuran dengan satuan berbeda (persen dikurangi rem)", "Menghitung ulang halaman", "Mengurangi warna", "Membuat animasi"], "Wajib ada spasi di sekitar + dan -."),
  M("lanjut", 2, "min() dan max(): width: min(100%, 720px); berarti…", ["Pakai yang lebih kecil: penuh di HP, paling lebar 720px di laptop", "Pakai yang lebih besar", "Selalu 720px", "Selalu 100%"], "Satu baris pengganti width: 100% + max-width: 720px."),
  M("lanjut", 2, "Container query (@container) berbeda dengan media query karena…", ["Menyesuaikan dengan lebar WADAH komponen, bukan lebar layar", "Lebih lama", "Hanya untuk gambar", "Sama saja"], "Kartu yang sama bisa tampil berbeda di sidebar sempit dan di konten lebar."),
  M("lanjut", 2, ":is(h1, h2, h3) a { … } sama dengan…", ["h1 a, h2 a, h3 a { … }", "h1 h2 h3 a { … }", "Hanya h1 a", "Error"], ":is() mempersingkat daftar selector. :where() sama tapi spesifisitasnya nol."),
  M("lanjut", 3, ":has() memungkinkan…", ["Memilih induk berdasarkan isinya, misalnya .kartu:has(img) atau form:has(:invalid)", "Memilih anak pertama", "Menyembunyikan elemen", "Memuat file"], "Dulu harus memakai JavaScript. KodeQuiz memakai body:has(#layar-kuis:not(.tersembunyi))."),
  M("lanjut", 2, "Nilai inherit, initial, unset berarti…", ["inherit = ambil dari induk; initial = nilai bawaan CSS; unset = inherit bila properti diwariskan, selain itu initial", "Semuanya sama", "Menghapus elemen", "Hanya untuk warna"], "Berguna untuk mereset gaya di komponen tertentu."),
  M("lanjut", 3, "Lapisan CSS (@layer reset, dasar, komponen;) berguna untuk…", ["Mengatur urutan prioritas kelompok aturan tanpa perang spesifisitas", "Membuat animasi berlapis", "Menumpuk gambar", "Mempercepat unduhan"], "Lapisan yang dideklarasikan belakangan menang, apa pun spesifisitas selectornya."),
  I("lanjut", 1, "Fungsi untuk memakai variabel CSS: color: ____(--utama);", ["var"], "var(--nama)."),
  I("lanjut", 2, "Fungsi ukuran dengan batas bawah dan atas: font-size: ____(1rem, 3vw, 2rem);", ["clamp"], "clamp(min, ideal, maks)."),

  // ---- selektor (+15) ----
  M("selektor", 1, "Selector li:first-child memilih…", ["li yang merupakan anak pertama dari induknya", "Semua li", "li terakhir", "Anak pertama dari li"], ":last-child untuk terakhir."),
  M("selektor", 2, "tr:nth-child(odd) memilih…", ["Baris ganjil: 1, 3, 5, …", "Baris genap", "Baris pertama", "Semua baris"], "even = genap. 3n = setiap kelipatan 3."),
  M("selektor", 2, "li:nth-child(3n+1) memilih urutan ke…", ["1, 4, 7, 10, …", "3, 6, 9", "1, 3, 5", "Hanya 4"], "n mulai dari 0: 3×0+1 = 1, 3×1+1 = 4, dan seterusnya."),
  M("selektor", 2, "Selector ul > li memilih…", ["li yang merupakan anak LANGSUNG ul (bukan cucu)", "Semua li di dalam ul", "li setelah ul", "ul di dalam li"], "> = anak langsung; spasi = keturunan apa pun."),
  M("selektor", 2, "Selector h2 + p memilih…", ["p yang tepat berada setelah h2 (saudara berikutnya)", "Semua p setelah h2", "h2 dan p", "p di dalam h2"], "~ memilih semua saudara sesudahnya."),
  M("selektor", 2, "Selector atribut a[target=\"_blank\"] memilih…", ["Link yang membuka di tab baru", "Semua link", "Link tanpa target", "Elemen bernama target"], "[href^=\"https\"] = diawali; [href$=\".pdf\"] = diakhiri; [class*=\"btn\"] = mengandung."),
  M("selektor", 2, "a[href$=\".pdf\"]::after { content: \" (PDF)\"; } akan…", ["Menambahkan tulisan (PDF) setelah setiap link yang mengarah ke file PDF", "Menghapus link PDF", "Mengunduh PDF", "Error"], "::after membuat 'elemen semu' di akhir isi; wajib ada content."),
  M("selektor", 2, "Beda :hover dan ::before:", ["Satu titik dua = pseudo-class (keadaan); dua titik dua = pseudo-element (bagian buatan)", "Sama saja", "::before keadaan", ":hover membuat elemen"], ":hover, :focus, :checked = keadaan. ::before, ::after, ::placeholder = bagian."),
  M("selektor", 2, "Pseudo-class untuk gaya fokus yang hanya muncul saat memakai keyboard:", [":focus-visible", ":focus-keyboard", ":tab", ":active"], "Pengguna mouse tidak terganggu garis fokus, pengguna keyboard tetap terbantu."),
  M("selektor", 2, "input:invalid { border-color: red; } akan…", ["Memberi garis merah pada input yang isinya tidak lolos validasi HTML (required, type, pattern)", "Menghapus input", "Memvalidasi server", "Error"], "Gabungkan dengan :not(:placeholder-shown) supaya tidak merah sebelum diketik."),
  M("selektor", 2, "input:checked + label memilih…", ["label tepat setelah checkbox/radio yang sedang dicentang", "Semua label", "Checkbox", "label sebelum input"], "Dasar trik toggle tanpa JavaScript."),
  M("selektor", 2, ":not(.aktif) memilih…", ["Elemen yang TIDAK punya class aktif", "Elemen aktif", "Semua elemen", "Error"], ":not() bisa berisi daftar: :not(.a, .b)."),
  M("selektor", 3, "Mengubah warna sorotan teks yang diblok pengguna:", ["::selection { background: …; color: …; }", ":selected { … }", "::highlight-text", "::marker"], "::marker untuk penanda daftar (poin/angka)."),
  I("selektor", 1, "Pseudo-element untuk menambah konten sebelum isi: ::____", ["before"], "::before dan ::after butuh content."),
  I("selektor", 2, "Pseudo-class baris genap: :nth-child(____)", ["even"], "even = genap, odd = ganjil."),

  // ---- satuan (+15) ----
  M("satuan", 1, "1rem sama dengan…", ["Ukuran huruf elemen <html> (bawaan browser 16px)", "Ukuran huruf induk", "1% layar", "1 piksel"], "rem = root em. Stabil di mana pun dipakai."),
  M("satuan", 2, "1em pada padding sebuah tombol berukuran huruf 20px sama dengan…", ["20px (mengikuti ukuran huruf elemen itu sendiri)", "16px selalu", "1% tombol", "10px"], "em cocok untuk padding yang ikut membesar bersama hurufnya."),
  M("satuan", 2, "Masalah em bertingkat: ul { font-size: 1.2em } di dalam ul lain menghasilkan…", ["Huruf makin besar di setiap tingkat (1,2 × 1,2 × …)", "Ukuran tetap", "Ukuran mengecil", "Error"], "Itulah kenapa rem lebih disukai untuk ukuran huruf."),
  M("satuan", 1, "width: 50%; pada elemen berarti…", ["Setengah lebar wadah induknya", "Setengah layar", "Setengah isinya", "50 piksel"], "Persen selalu relatif terhadap induk."),
  M("satuan", 2, "100vh berarti…", ["Tinggi seluruh layar (viewport)", "Tinggi induk", "100 piksel", "Tinggi halaman penuh"], "Di HP, gunakan 100dvh agar memperhitungkan bilah browser yang muncul-hilang."),
  M("satuan", 2, "1vw sama dengan…", ["1% lebar layar", "1% lebar induk", "1 piksel", "1% tinggi layar"], "vh untuk tinggi, vmin/vmax untuk sisi terpendek/terpanjang."),
  M("satuan", 2, "Satuan ch berguna untuk…", ["Membatasi lebar teks berdasarkan jumlah karakter (max-width: 65ch)", "Tinggi baris", "Warna", "Sudut"], "1ch = lebar karakter 0 pada font itu."),
  M("satuan", 2, "hsl(210, 60%, 40%) terdiri dari…", ["Rona (0–360 derajat), saturasi, kecerahan", "Merah, hijau, biru", "Hue, size, length", "Lebar, tinggi, kedalaman"], "HSL mudah diatur manusia: ubah kecerahan saja untuk versi terang/gelap."),
  M("satuan", 2, "Membuat versi lebih terang dari warna yang sama dengan HSL:", ["Naikkan angka lightness (persen ketiga)", "Ubah hue", "Turunkan saturation ke 0", "Tambah alpha"], "hsl(210 60% 40%) → hsl(210 60% 70%)."),
  M("satuan", 2, "color-mix(in srgb, var(--utama) 20%, transparent) menghasilkan…", ["Warna utama dengan kepekatan 20%", "Warna transparan penuh", "Hitam", "Error"], "KodeQuiz memakainya untuk latar lembut dari warna tema."),
  M("satuan", 2, "Ukuran sentuh minimal tombol di HP yang disarankan:", ["Sekitar 44–48px", "10px", "20px", "100px wajib"], "Jari lebih besar dari kursor; tombol terlalu kecil sering salah tekan."),
  M("satuan", 3, "Kenapa media query sering ditulis dengan em (misalnya @media (min-width: 48em))?", ["Ikut menyesuaikan bila pengguna memperbesar huruf bawaan browser", "Lebih cepat", "Wajib", "px tidak didukung di media query"], "48em ≈ 768px pada ukuran bawaan 16px."),
  M("satuan", 2, "Nilai 0 boleh ditulis tanpa satuan karena…", ["Nol tetap nol dalam satuan apa pun (margin: 0)", "CSS menebak satuannya", "Wajib tanpa satuan", "Hanya untuk warna"], "Pengecualian: beberapa fungsi seperti calc butuh satuan."),
  I("satuan", 1, "Satuan relatif terhadap ukuran huruf root: 1.5____", ["rem"], "rem = root em."),
  I("satuan", 2, "Satuan tinggi layar dinamis di HP: 100____", ["dvh"], "dvh menyesuaikan bilah alamat browser."),

  // ---- animasi (+15) ----
  M("animasi", 1, "transform: translateX(20px); membuat elemen…", ["Bergeser 20px ke kanan tanpa memengaruhi elemen lain", "Melebar 20px", "Berputar 20 derajat", "Mengecil"], "Elemen lain tidak ikut bergeser karena tata letak tidak berubah."),
  M("animasi", 1, "transform: scale(1.1); membuat elemen…", ["Membesar 10%", "Bergeser", "Berputar", "Transparan"], "scale(0.9) mengecil 10%."),
  M("animasi", 1, "transform: rotate(45deg); membuat elemen…", ["Berputar 45 derajat searah jarum jam", "Bergeser 45px", "Membesar 45%", "Miring teksnya saja"], "Nilai negatif berputar berlawanan arah."),
  M("animasi", 2, "Dua transform ditulis di dua aturan terpisah pada elemen yang sama. Hasilnya:", ["Hanya transform terakhir yang berlaku; tulis keduanya dalam satu baris", "Keduanya digabung otomatis", "Error", "Yang pertama menang"], "Benar: transform: translateY(-4px) scale(1.05);"),
  M("animasi", 2, "transition: transform .3s ease-out; artinya…", ["Perubahan transform dianimasikan 0,3 detik, cepat di awal lalu melambat", "Animasi berulang", "Tunda 0,3 detik", "Error"], "ease-out terasa alami untuk elemen yang muncul."),
  M("animasi", 2, "Animasi dengan @keyframes dipasang dengan properti…", ["animation: nama 2s infinite;", "keyframes: nama;", "transition: nama;", "play: nama;"], "@keyframes mendefinisikan langkah; animation memasangnya."),
  M("animasi", 2, "Isi @keyframes muter { from { transform: rotate(0) } to { transform: rotate(360deg) } } bila dipasang animation: muter 1s linear infinite; menghasilkan…", ["Ikon berputar terus dengan kecepatan tetap (spinner)", "Berputar sekali", "Bergeser", "Tidak berefek"], "linear = kecepatan sama sepanjang waktu, infinite = berulang."),
  M("animasi", 2, "animation-fill-mode: forwards; membuat…", ["Elemen tetap di keadaan akhir animasi setelah selesai", "Animasi berulang", "Animasi mundur", "Animasi lebih cepat"], "Tanpa forwards, elemen kembali ke gaya awal."),
  M("animasi", 2, "Kenapa animasi width/height/left terasa patah-patah?", ["Setiap frame memaksa browser menghitung ulang tata letak; pakai transform", "Karena warna", "Karena font", "Karena gambar"], "transform dan opacity dikerjakan GPU tanpa menghitung ulang tata letak."),
  M("animasi", 2, "filter: blur(4px) grayscale(1); membuat…", ["Elemen buram dan hitam-putih", "Hanya latar buram", "Elemen transparan", "Error"], "filter bisa digabung beberapa sekaligus."),
  M("animasi", 2, "Efek kartu terangkat saat disorot yang ringan:", [".kartu:hover { transform: translateY(-4px); box-shadow: … }", ".kartu:hover { margin-top: -4px; }", ".kartu:hover { top: -4px; } tanpa position", ".kartu:hover { height: +4px; }"], "translateY tidak menggeser elemen lain."),
  M("animasi", 3, "Animasi muncul saat menggulir tanpa JavaScript di browser modern:", ["animation-timeline: view();", "@scroll { }", "scroll-animation: on;", "Tidak mungkin"], "Belum di semua browser; selalu sediakan tampilan normal sebagai cadangan."),
  M("animasi", 2, "transform-origin: top left; mengatur…", ["Titik poros transformasi (rotate/scale berpusat di pojok kiri atas)", "Posisi elemen", "Arah gradasi", "Urutan animasi"], "Bawaannya di tengah (center)."),
  I("animasi", 1, "Aturan untuk mendefinisikan langkah animasi: @____", ["keyframes"], "@keyframes nama { from {} to {} }."),
  I("animasi", 2, "Nilai animation-iteration-count untuk berulang terus: ____", ["infinite"], "infinite = tanpa akhir."),

  // ---- gridlanjut (+15) ----
  M("gridlanjut", 2, "grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); membuat…", ["Kolom sebanyak yang muat, masing-masing minimal 220px, tanpa media query", "Tepat 220 kolom", "Satu kolom", "Error"], "Pola galeri kartu responsif paling terkenal."),
  M("gridlanjut", 3, "Beda auto-fit dan auto-fill bila item sedikit:", ["auto-fit merentangkan item mengisi baris; auto-fill menyisakan kolom kosong", "Sama saja", "auto-fill merentangkan", "auto-fit error"], "Biasanya auto-fit yang diinginkan."),
  M("gridlanjut", 2, "grid-template-areas: \"header header\" \"sidebar konten\"; lalu .sidebar { grid-area: sidebar; } berfungsi untuk…", ["Menata halaman dengan 'peta' bernama yang mudah dibaca", "Membuat tabel", "Memberi warna area", "Animasi"], "Ubah petanya di media query untuk tata letak HP."),
  M("gridlanjut", 2, "Titik (.) di grid-template-areas berarti…", ["Sel kosong", "Area bernama titik", "Error", "Garis"], "Contoh: \"logo . menu\"."),
  M("gridlanjut", 2, "Mengubah tata letak dua kolom menjadi satu kolom di HP:", ["@media (max-width: 600px) { .wadah { grid-template-columns: 1fr; } }", "float: none;", "display: block saja di semua ukuran", "Tidak bisa"], "Atau sebaliknya, mobile-first: mulai 1fr lalu tambah kolom di min-width."),
  M("gridlanjut", 2, "grid-auto-rows: 200px; mengatur…", ["Tinggi baris yang dibuat otomatis oleh grid", "Lebar kolom", "Jumlah baris", "Jarak"], "Baris otomatis muncul saat item lebih banyak dari yang didefinisikan."),
  M("gridlanjut", 2, "float: left; dulu dipakai untuk tata letak, sekarang paling tepat untuk…", ["Membuat teks membungkus gambar, seperti di koran", "Tata letak kolom", "Menu navigasi", "Tengah vertikal"], "Tata letak kolom sekarang memakai flex/grid."),
  M("gridlanjut", 2, "Container query: .kartu-wadah { container-type: inline-size; } lalu…", ["@container (min-width: 400px) { .kartu { … } }", "@media (container: 400px)", "@wadah 400px", ".kartu:container"], "Komponen menyesuaikan dengan ruang yang tersedia untuknya."),
  M("gridlanjut", 3, "subgrid (grid-template-rows: subgrid) berguna untuk…", ["Menyelaraskan baris di dalam kartu-kartu berbeda (judul, isi, tombol sejajar)", "Membuat grid di dalam tabel", "Animasi grid", "Mengganti flex"], "Kartu dengan judul panjang-pendek tetap punya tombol sejajar."),
  M("gridlanjut", 2, "justify-items vs justify-content di grid:", ["justify-items mengatur posisi isi DI DALAM setiap sel; justify-content mengatur posisi seluruh grid di wadah", "Sama saja", "Terbalik", "Hanya untuk flex"], "align-items/align-content sama untuk arah vertikal."),
  M("gridlanjut", 2, "Satu item grid ditaruh di baris 2 kolom 3:", ["grid-row: 2; grid-column: 3;", "position: 2 3;", "cell: 2,3;", "grid: 2/3;"], "Nomor garis dimulai dari 1."),
  M("gridlanjut", 3, "Item grid bertumpuk di sel yang sama (misalnya teks di atas gambar):", ["Beri keduanya grid-area yang sama, misalnya grid-area: 1 / 1;", "position: absolute wajib", "float", "Tidak bisa"], "Cara modern menumpuk tanpa absolute."),
  M("gridlanjut", 2, "Kenapa tata letak berbasis grid lebih mudah dirawat daripada float?", ["Tidak perlu clearfix dan perhitungan lebar manual; tata letak ditulis di wadah", "Lebih berwarna", "Float sudah dihapus dari CSS", "Grid lebih kecil ukurannya"], "Float masih ada, hanya bukan untuk tata letak."),
  I("gridlanjut", 1, "Fungsi ukuran minimal-maksimal di grid: ____(220px, 1fr)", ["minmax"], "minmax(min, maks)."),
  I("gridlanjut", 2, "Kata kunci repeat agar kolom menyesuaikan dan merentang: repeat(auto-____, …)", ["fit"], "auto-fit."),

  // ---- arsitektur (+15) ----
  M("arsitektur", 1, "Gunanya CSS reset kecil di awal file:", ["Menyamakan gaya bawaan berbagai browser (margin, box-sizing) supaya hasil konsisten", "Menghapus semua gaya situs", "Mempercepat internet", "Wajib untuk HTML"], "Contoh minimal: *, *::before, *::after { box-sizing: border-box; } body { margin: 0; }"),
  M("arsitektur", 2, "Penamaan BEM .kartu__judul--aktif berarti…", ["Blok kartu, Elemen judul, Modifier aktif", "Tiga class terpisah", "id kartu", "Error"], "BEM membuat nama jelas dan menghindari bentrok gaya."),
  M("arsitektur", 2, "Keuntungan memakai class daripada id untuk gaya:", ["Bisa dipakai berulang dan spesifisitasnya rendah sehingga mudah ditimpa", "Lebih cepat", "Wajib", "id tidak bisa diberi gaya"], "id sebaiknya untuk tautan #dan JavaScript."),
  M("arsitektur", 2, "Sass/SCSS adalah…", ["Bahasa pra-pemroses yang diubah menjadi CSS biasa (variabel, nesting, mixin)", "Framework JavaScript", "Database", "Pengganti HTML"], "Banyak fitur Sass kini ada di CSS asli (variabel, nesting)."),
  M("arsitektur", 2, "CSS nesting asli (tanpa Sass) .kartu { & .judul { … } } artinya…", ["Aturan untuk .kartu .judul ditulis bersarang di dalam .kartu", "Error di semua browser", "Menyalin kartu", "Animasi"], "Didukung browser modern; jangan bersarang terlalu dalam."),
  M("arsitektur", 2, "Tailwind CSS bekerja dengan cara…", ["Banyak class kecil siap pakai langsung di HTML (class=\"p-4 text-center rounded\")", "File CSS tunggal raksasa ditulis manual", "JavaScript menggambar halaman", "Mengganti HTML"], "Cepat untuk prototipe; HTML jadi lebih panjang."),
  M("arsitektur", 2, "Bootstrap menyediakan…", ["Komponen dan grid siap pakai (navbar, tombol, kartu) dengan class bawaan", "Database", "Server", "Bahasa baru"], "Berguna untuk admin panel; hasilnya sering terlihat mirip satu sama lain."),
  M("arsitektur", 2, "Urutan isi file CSS yang rapi:", ["Variabel → reset → gaya dasar elemen → tata letak → komponen → utilitas → media query", "Acak", "Media query paling atas", "Komponen dulu, reset terakhir"], "Dari umum ke khusus memudahkan menebak aturan mana yang menang."),
  M("arsitektur", 2, "Menggabung dan memperkecil (minify) file CSS sebelum tayang berguna untuk…", ["Mengurangi ukuran unduhan dan jumlah permintaan", "Membuat kode lebih mudah dibaca", "Menambah fitur", "Wajib di HTML"], "Simpan versi asli yang rapi untuk diedit."),
  M("arsitektur", 2, "Design token (misalnya --space-2, --radius, --warna-utama) gunanya…", ["Nilai desain bernama yang dipakai ulang sehingga tampilan konsisten", "Kata sandi", "Nama file", "Animasi"], "Satu perubahan token mengubah semua komponen."),
  M("arsitektur", 3, "Kenapa gaya sebaiknya tidak bergantung pada struktur yang dalam (.main .konten .kartu .judul span)?", ["Mudah rusak saat HTML diubah dan spesifisitasnya tinggi sehingga sulit ditimpa", "Lebih lambat 10 kali", "Tidak sah", "Wajib dua tingkat"], "Lebih baik satu class yang jelas: .kartu__judul."),
  M("arsitektur", 2, "Tanda kode CSS sudah perlu dirapikan:", ["Banyak !important, warna ditulis ulang di mana-mana, dan selector sangat panjang", "File berisi komentar", "Memakai variabel", "Memakai media query"], "Refactor: pindahkan warna ke variabel, pendekkan selector."),
  M("arsitektur", 2, "Atomic/utility class seperti .mt-4 { margin-top: 1rem } cocok untuk…", ["Penyesuaian kecil yang sering dipakai tanpa membuat class komponen baru", "Seluruh desain tanpa batas", "Database", "Menggantikan HTML semantik"], "Kombinasikan dengan komponen untuk hasil seimbang."),
  I("arsitektur", 1, "Penamaan class Blok__Elemen--Modifier disebut ____", ["bem"], "BEM = Block Element Modifier."),
  I("arsitektur", 2, "Ekstensi file Sass yang mirip CSS: gaya.____", ["scss"], "SCSS = Sassy CSS."),
  );

  dalami("dasar", `
<h4>Cara browser memutuskan gaya akhir (cascade)</h4>
<ol><li><b>Kepentingan</b>: aturan dengan !important menang (hindari).</li><li><b>Spesifisitas</b>: id &gt; class/atribut/pseudo-class &gt; tag.</li><li><b>Urutan</b>: bila sama kuat, yang ditulis terakhir menang.</li><li><b>Pewarisan</b>: properti teks yang tidak diatur diambil dari induk.</li></ol>
<pre><code>p { color: red; }          /* tag    (0,0,1) */
.info { color: blue; }     /* class  (0,1,0) → menang atas p */
#utama { color: green; }   /* id     (1,0,0) → menang atas .info */</code></pre>
<h4>Menulis warna</h4>
<table class="mini-pivot"><tr><th>Cara</th><th>Contoh</th><th>Kapan</th></tr>
<tr><td>nama</td><td><code>navy</code></td><td>coba-coba</td></tr><tr><td>HEX</td><td><code>#1B263B</code></td><td>paling umum dari desainer</td></tr>
<tr><td>RGB/RGBA</td><td><code>rgb(27 38 59 / .5)</code></td><td>perlu transparan</td></tr><tr><td>HSL</td><td><code>hsl(219 37% 17%)</code></td><td>mudah membuat versi terang/gelap</td></tr></table>
<h4>Cara cepat menemukan kenapa gaya tidak bekerja</h4>
<ol><li>Klik kanan elemen → Inspect.</li><li>Lihat panel Styles: aturanmu ada? Kalau dicoret, ada aturan lebih kuat di atasnya.</li><li>Kalau tidak ada sama sekali: selector salah, file CSS tidak termuat, atau salah ketik titik koma.</li></ol>
<div class="praktik"><b>Coba sendiri</b> (Code Runner): buat tiga paragraf dengan class dan id berbeda, beri warna lewat tag, class, dan id, lalu tebak warna akhirnya sebelum menekan Run.</div>`);

  dalami("teks", `
<h4>Resep teks yang nyaman dibaca lama</h4>
<pre><code>body {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 1rem;          /* 16px bawaan, mengikuti pengaturan pengguna */
  line-height: 1.6;         /* jarak baris lega */
  color: #1B263B;           /* hampir hitam, bukan #000 pekat */
}
p { max-width: 65ch; }      /* sekitar 65 karakter per baris */
h1 { font-size: clamp(1.8rem, 4vw, 3rem); line-height: 1.15; }</code></pre>
<h4>Properti teks yang sering dipakai</h4>
<table class="mini-pivot"><tr><th>Properti</th><th>Contoh</th><th>Fungsi</th></tr>
<tr><td>font-weight</td><td>400 / 600 / 700</td><td>tebal</td></tr><tr><td>font-style</td><td>italic</td><td>miring</td></tr>
<tr><td>text-align</td><td>left / center</td><td>rata</td></tr><tr><td>text-transform</td><td>uppercase</td><td>tampilan kapital</td></tr>
<tr><td>letter-spacing</td><td>0.05em</td><td>jarak huruf</td></tr><tr><td>text-decoration</td><td>none / underline</td><td>garis bawah</td></tr>
<tr><td>white-space</td><td>nowrap / pre</td><td>aturan pindah baris</td></tr></table>
<h4>Font dari luar tanpa membuat halaman berkedip</h4>
<pre><code>@font-face {
  font-family: "Sansku";
  src: url("font/sansku.woff2") format("woff2");
  font-display: swap;     /* tampilkan font cadangan dulu, ganti saat siap */
}</code></pre>
<div class="praktik"><b>Coba sendiri:</b> ambil satu artikel panjang, atur line-height 1.6, max-width 65ch, dan ukuran judul dengan clamp. Bandingkan kenyamanannya dengan sebelum diatur.</div>`);

  dalami("boxmodel", `
<h4>Hitung ukuran kotak di kertas dulu</h4>
<pre><code>.kotak { width: 200px; padding: 15px; border: 5px solid; margin: 10px; }</code></pre>
<table class="mini-pivot"><tr><th>box-sizing</th><th>Lebar terlihat (dengan border)</th><th>Ruang yang dipakai (dengan margin)</th></tr>
<tr><td>content-box (bawaan)</td><td>200 + 30 + 10 = 240px</td><td>260px</td></tr>
<tr><td>border-box</td><td>200px</td><td>220px</td></tr></table>
<p>Karena itu hampir semua proyek memulai dengan:</p>
<pre><code>*, *::before, *::after { box-sizing: border-box; }</code></pre>
<h4>Singkatan margin/padding</h4>
<table class="mini-pivot"><tr><th>Tulis</th><th>Artinya</th></tr>
<tr><td><code>10px</code></td><td>semua sisi</td></tr><tr><td><code>10px 20px</code></td><td>atas-bawah, kiri-kanan</td></tr>
<tr><td><code>10px 20px 30px</code></td><td>atas, kiri-kanan, bawah</td></tr><tr><td><code>10px 20px 30px 40px</code></td><td>atas, kanan, bawah, kiri</td></tr></table>
<h4>Display menentukan perilaku kotak</h4>
<table class="mini-pivot"><tr><th>display</th><th>Baris baru?</th><th>width/height?</th><th>Contoh bawaan</th></tr>
<tr><td>block</td><td>ya</td><td>ya</td><td>div, p, h1</td></tr>
<tr><td>inline</td><td>tidak</td><td>tidak</td><td>span, a, strong</td></tr>
<tr><td>inline-block</td><td>tidak</td><td>ya</td><td>button, img (mirip)</td></tr>
<tr><td>none</td><td>hilang</td><td>-</td><td>head</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> buka DevTools, pilih satu kartu, lalu lihat diagram box model di tab Computed. Ubah padding dan border, perhatikan angka yang berubah.</div>`);

  dalami("layout", `
<h4>Flexbox dalam satu gambar kata</h4>
<pre><code>.wadah {
  display: flex;               /* anak-anak berjejer */
  flex-direction: row;         /* sumbu utama: ke samping */
  justify-content: space-between; /* posisi di sumbu UTAMA */
  align-items: center;         /* posisi di sumbu SILANG */
  gap: 16px;                   /* jarak antar anak */
  flex-wrap: wrap;             /* boleh turun baris */
}</code></pre>
<table class="mini-pivot"><tr><th>Ingin</th><th>Tulis di wadah</th></tr>
<tr><td>sejajar kiri-kanan, rapat ke ujung</td><td><code>justify-content: space-between</code></td></tr>
<tr><td>semua di tengah</td><td><code>justify-content: center; align-items: center</code></td></tr>
<tr><td>menumpuk ke bawah</td><td><code>flex-direction: column</code></td></tr>
<tr><td>kartu turun baris di HP</td><td><code>flex-wrap: wrap</code></td></tr></table>
<h4>Properti untuk anak flex</h4>
<table class="mini-pivot"><tr><th>Properti</th><th>Arti</th></tr>
<tr><td><code>flex: 1</code></td><td>ambil sisa ruang (bagi rata dengan anak lain yang flex: 1)</td></tr>
<tr><td><code>flex: 0 0 200px</code></td><td>tetap 200px</td></tr>
<tr><td><code>align-self</code></td><td>posisi silang khusus anak ini</td></tr>
<tr><td><code>margin-left: auto</code></td><td>dorong anak ini (dan sesudahnya) ke kanan</td></tr></table>
<h4>Tiga pola yang paling sering</h4>
<pre><code>/* 1) navbar */ nav { display: flex; justify-content: space-between; align-items: center; }
/* 2) tengah layar */ .tengah { display: flex; place-content: center; min-height: 100vh; }
/* 3) footer menempel di bawah */ body { display: flex; flex-direction: column; min-height: 100vh; } main { flex: 1; }</code></pre>
<div class="praktik"><b>Coba sendiri:</b> buat navbar dengan logo kiri dan tiga link kanan, lalu baris tiga kartu yang turun satu per satu di layar sempit.</div>`);

  dalami("posisi", `
<h4>Lima nilai position</h4>
<table class="mini-pivot"><tr><th>Nilai</th><th>Patokan</th><th>Ikut menggulir?</th><th>Contoh</th></tr>
<tr><td>static</td><td>alur normal</td><td>ya</td><td>bawaan</td></tr>
<tr><td>relative</td><td>posisi asalnya</td><td>ya</td><td>patokan untuk anak absolute</td></tr>
<tr><td>absolute</td><td>leluhur yang diposisikan</td><td>ya</td><td>lencana di pojok kartu</td></tr>
<tr><td>fixed</td><td>layar</td><td>tidak</td><td>tombol chat melayang</td></tr>
<tr><td>sticky</td><td>wadah gulirnya</td><td>menempel setelah batas</td><td>header tabel, navbar</td></tr></table>
<h4>Grid untuk tata letak halaman</h4>
<pre><code>.halaman {
  display: grid;
  grid-template-columns: 240px 1fr;   /* sidebar + konten */
  grid-template-rows: auto 1fr auto;  /* header, isi, footer */
  gap: 24px;
  min-height: 100vh;
}
.header, .footer { grid-column: 1 / -1; }   /* melebar penuh */</code></pre>
<h4>Garis grid, bukan sel</h4>
<p>Tiga kolom punya empat garis bernomor 1, 2, 3, 4 (atau -1 untuk garis terakhir). <code>grid-column: 2 / 4</code> = dari garis 2 sampai garis 4 = menempati kolom kedua dan ketiga.</p>
<div class="praktik"><b>Coba sendiri:</b> buat tata letak header, sidebar, konten, footer dengan grid, lalu ubah menjadi satu kolom di layar di bawah 700px.</div>`);

  dalami("dekorasi", `
<h4>Transition vs animation</h4>
<table class="mini-pivot"><tr><th></th><th>transition</th><th>animation + @keyframes</th></tr>
<tr><td>Dipicu oleh</td><td>perubahan keadaan (:hover, class baru)</td><td>jalan sendiri saat dipasang</td></tr>
<tr><td>Langkah</td><td>dua: awal dan akhir</td><td>banyak (0%, 50%, 100%)</td></tr>
<tr><td>Berulang</td><td>tidak</td><td>bisa (infinite)</td></tr>
<tr><td>Contoh</td><td>tombol berubah warna</td><td>spinner, denyut notifikasi</td></tr></table>
<h4>Responsif mobile-first</h4>
<pre><code>.kartu-wadah { display: grid; gap: 16px; }                    /* HP: 1 kolom */
@media (min-width: 40em) { .kartu-wadah { grid-template-columns: 1fr 1fr; } }   /* tablet */
@media (min-width: 64em) { .kartu-wadah { grid-template-columns: repeat(3, 1fr); } } /* laptop */</code></pre>
<h4>Menghormati preferensi pengguna</h4>
<pre><code>@media (prefers-color-scheme: dark) { :root { --bg: #0D1B2A; --teks: #E6E0CA; } }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}</code></pre>
<p>Ini salah satu dari sedikit tempat yang wajar memakai !important.</p>
<div class="praktik"><b>Coba sendiri:</b> buat tombol yang naik sedikit dan bayangannya membesar saat disorot (transform + box-shadow dengan transition), lalu matikan efeknya di prefers-reduced-motion.</div>`);

  dalami("lanjut", `
<h4>Menghitung spesifisitas seperti skor (A, B, C)</h4>
<table class="mini-pivot"><tr><th>Selector</th><th>A (id)</th><th>B (class, atribut, :pseudo-class)</th><th>C (tag, ::pseudo-element)</th></tr>
<tr><td><code>p</code></td><td>0</td><td>0</td><td>1</td></tr>
<tr><td><code>.menu a</code></td><td>0</td><td>1</td><td>1</td></tr>
<tr><td><code>.menu a:hover</code></td><td>0</td><td>2</td><td>1</td></tr>
<tr><td><code>#nav .aktif</code></td><td>1</td><td>1</td><td>0</td></tr>
<tr><td><code>:where(.menu) a</code></td><td>0</td><td>0</td><td>1</td></tr></table>
<p>Bandingkan dari kiri: A dulu, lalu B, lalu C. Satu id mengalahkan seratus class.</p>
<h4>Variabel CSS untuk tema</h4>
<pre><code>:root { --bg: #F4F1DE; --teks: #1B263B; --utama: #415A77; }
:root[data-theme="dark"] { --bg: #0D1B2A; --teks: #E6E0CA; --utama: #D4C4A8; }
body { background: var(--bg); color: var(--teks); }
.tombol { background: var(--utama); }</code></pre>
<p>Pengaturan "Warna latar" di KodeQuiz bekerja persis seperti ini: memilih warna mengubah variabel <code>--bg</code>, <code>--permukaan</code>, dan <code>--teks</code>.</p>
<h4>Fungsi ukuran modern</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td>calc</td><td><code>calc(100% - 2rem)</code></td><td>campur satuan</td></tr>
<tr><td>min</td><td><code>min(100%, 720px)</code></td><td>yang terkecil</td></tr>
<tr><td>max</td><td><code>max(50%, 300px)</code></td><td>yang terbesar</td></tr>
<tr><td>clamp</td><td><code>clamp(1rem, 2.5vw, 2rem)</code></td><td>di antara batas</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> pindahkan semua warna di file CSS proyekmu ke variabel di :root, lalu buat versi gelapnya hanya dengan mengubah variabel.</div>`);

  dalami("selektor", `
<h4>Keluarga selector dalam satu tabel</h4>
<table class="mini-pivot"><tr><th>Tulis</th><th>Memilih</th></tr>
<tr><td><code>A B</code></td><td>B di dalam A (keturunan)</td></tr>
<tr><td><code>A &gt; B</code></td><td>B anak langsung A</td></tr>
<tr><td><code>A + B</code></td><td>B tepat setelah A</td></tr>
<tr><td><code>A ~ B</code></td><td>semua B setelah A (saudara)</td></tr>
<tr><td><code>[type="email"]</code></td><td>atribut sama dengan</td></tr>
<tr><td><code>[href^="https"]</code> <code>[href$=".pdf"]</code> <code>[class*="btn"]</code></td><td>diawali / diakhiri / mengandung</td></tr></table>
<h4>Pseudo-class keadaan yang paling berguna</h4>
<table class="mini-pivot"><tr><th>Pseudo-class</th><th>Kapan aktif</th></tr>
<tr><td>:hover / :active</td><td>disorot / sedang ditekan</td></tr>
<tr><td>:focus-visible</td><td>difokus dengan keyboard</td></tr>
<tr><td>:checked / :disabled</td><td>dicentang / dinonaktifkan</td></tr>
<tr><td>:invalid / :valid</td><td>hasil validasi form</td></tr>
<tr><td>:nth-child(an+b)</td><td>posisi urutan</td></tr>
<tr><td>:not(…) / :is(…) / :has(…)</td><td>kebalikan / daftar / punya isi</td></tr></table>
<h4>Pseudo-element: bagian buatan</h4>
<pre><code>.wajib::after { content: " *"; color: crimson; }       /* tanda bintang di label wajib */
li::marker { color: var(--utama); }                    /* warna poin daftar */
input::placeholder { color: #8796AB; }
::selection { background: #415A77; color: #fff; }</code></pre>
<div class="praktik"><b>Coba sendiri:</b> beri tanda (PDF) pada semua link berakhiran .pdf, garis merah pada input yang tidak valid setelah diketik, dan warna berbeda pada baris tabel genap.</div>`);

  dalami("satuan", `
<h4>Memilih satuan: pertanyaan sederhana</h4>
<table class="mini-pivot"><tr><th>Untuk</th><th>Pakai</th><th>Kenapa</th></tr>
<tr><td>ukuran huruf</td><td>rem</td><td>menghormati pengaturan pengguna</td></tr>
<tr><td>padding tombol</td><td>em</td><td>ikut membesar bersama hurufnya</td></tr>
<tr><td>lebar kolom</td><td>% atau fr</td><td>relatif terhadap wadah</td></tr>
<tr><td>lebar paragraf</td><td>ch</td><td>berdasarkan jumlah huruf</td></tr>
<tr><td>bagian setinggi layar</td><td>dvh</td><td>memperhitungkan bilah HP</td></tr>
<tr><td>garis tipis, bayangan</td><td>px</td><td>presisi kecil</td></tr></table>
<h4>Warna dengan HSL: mudah diatur</h4>
<pre><code>--biru:        hsl(214 30% 36%);
--biru-terang: hsl(214 30% 85%);   /* hanya lightness yang naik */
--biru-tembus: hsl(214 30% 36% / .15);
--campur:      color-mix(in srgb, var(--biru) 30%, white);</code></pre>
<h4>Kontras: angka yang perlu diingat</h4>
<ul><li>Teks biasa minimal 4,5:1, teks besar minimal 3:1.</li><li>Pemilih warna latar KodeQuiz menghitung warna teks dan kartu otomatis supaya kontras teks di kartu minimal 7:1.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat satu palet dari satu warna HSL: versi gelap, normal, terang, dan sangat terang hanya dengan mengubah lightness. Cek kontras teks di atasnya dengan DevTools (klik kotak warna di panel Styles).</div>`);

  dalami("animasi", `
<h4>Empat fungsi transform</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Contoh</th><th>Efek</th></tr>
<tr><td>translate</td><td><code>translateY(-4px)</code></td><td>geser</td></tr><tr><td>scale</td><td><code>scale(1.05)</code></td><td>besar/kecil</td></tr>
<tr><td>rotate</td><td><code>rotate(10deg)</code></td><td>putar</td></tr><tr><td>skew</td><td><code>skewX(-8deg)</code></td><td>miring</td></tr></table>
<p>Gabungkan dalam satu baris: <code>transform: translateY(-4px) scale(1.02);</code>. Urutan berpengaruh.</p>
<h4>Animasi lengkap</h4>
<pre><code>@keyframes muncul {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}
.kartu {
  animation: muncul .4s ease-out both;   /* nama, durasi, kurva, fill-mode */
}
.kartu:nth-child(2) { animation-delay: .08s; }   /* muncul bergantian */</code></pre>
<h4>Kurva waktu (easing)</h4>
<table class="mini-pivot"><tr><th>Nilai</th><th>Rasa</th><th>Cocok untuk</th></tr>
<tr><td>linear</td><td>datar, mekanis</td><td>spinner</td></tr><tr><td>ease-out</td><td>cepat lalu melambat</td><td>elemen masuk</td></tr>
<tr><td>ease-in</td><td>pelan lalu cepat</td><td>elemen keluar</td></tr><tr><td>cubic-bezier(…)</td><td>kustom</td><td>gaya khas merek</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> buat spinner berputar dengan @keyframes, lalu tiga kartu yang muncul bergantian dengan animation-delay.</div>`);

  dalami("gridlanjut", `
<h4>Galeri responsif dalam satu baris</h4>
<pre><code>.galeri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}</code></pre>
<p>Bacanya: "buat kolom sebanyak yang muat; setiap kolom minimal 220px, dan sisa ruang dibagi rata." Di HP jadi satu kolom, di laptop tiga atau empat, tanpa media query.</p>
<h4>Peta halaman dengan grid-template-areas</h4>
<pre><code>.halaman {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas:
    "header header"
    "menu   isi"
    "footer footer";
}
.atas { grid-area: header; } .samping { grid-area: menu; } .utama { grid-area: isi; } .bawah { grid-area: footer; }

@media (max-width: 700px) {
  .halaman { grid-template-columns: 1fr; grid-template-areas: "header" "isi" "menu" "footer"; }
}</code></pre>
<h4>Container query: komponen yang tahu ukurannya sendiri</h4>
<pre><code>.wadah-kartu { container-type: inline-size; }
@container (min-width: 420px) {
  .kartu { display: grid; grid-template-columns: 140px 1fr; }   /* gambar di samping */
}</code></pre>
<div class="praktik"><b>Coba sendiri:</b> buat galeri produk dengan auto-fit/minmax, lalu satu kartu yang menampilkan gambar di atas saat sempit dan di samping saat lebar memakai container query.</div>`);

  dalami("arsitektur", `
<h4>Struktur file CSS proyek kecil-menengah</h4>
<pre><code>css/
  token.css      /* variabel: warna, jarak, radius, font */
  reset.css      /* box-sizing, margin 0, gambar responsif */
  dasar.css      /* body, heading, link, form */
  tata-letak.css /* header, grid halaman, footer */
  komponen.css   /* .kartu, .tombol, .navbar, .modal */
  utilitas.css   /* .tersembunyi, .rata-tengah, .mt-2 */</code></pre>
<h4>BEM dengan contoh</h4>
<pre><code>&lt;article class="kartu kartu--promo"&gt;
  &lt;h3 class="kartu__judul"&gt;Kopi Susu&lt;/h3&gt;
  &lt;button class="kartu__tombol"&gt;Pesan&lt;/button&gt;
&lt;/article&gt;</code></pre>
<pre><code>.kartu { … }               /* blok */
.kartu__judul { … }        /* elemen di dalam blok */
.kartu--promo { … }        /* variasi blok */</code></pre>
<p>Keuntungannya: semua selector satu class (spesifisitas rendah dan sama), nama menjelaskan tempatnya, dan tidak bentrok dengan komponen lain.</p>
<h4>Framework: kapan dipakai</h4>
<table class="mini-pivot"><tr><th>Pilihan</th><th>Kelebihan</th><th>Kekurangan</th></tr>
<tr><td>CSS sendiri + variabel</td><td>ringan, desain khas</td><td>butuh disiplin</td></tr>
<tr><td>Tailwind</td><td>cepat, konsisten</td><td>HTML panjang</td></tr>
<tr><td>Bootstrap</td><td>komponen lengkap</td><td>tampilan seragam, berat</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> ambil satu komponen di proyekmu (misalnya kartu produk), ganti nama class-nya dengan pola BEM, dan pindahkan warna-warnanya ke variabel token.</div>`);
})();
