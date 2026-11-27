// ============ Materi 2x lipat (bagian 4): Coding Test, cek pemahaman HTML/CSS/JS, Excel ============
// Dimuat PALING AKHIR. Kode contoh di-escape otomatis.
(function () {
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const tambah = (MAT, k, judul, h) => { const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">' + judul + '</h4>' + h; };
  const li = a => a.map(x => `<li>${x}</li>`).join("");
  const cek = (MAT, k, qa) => tambah(MAT, k, "Cek pemahaman",
    `<ol class="cek-paham">${qa.map(([q, a]) => `<li>${q}<details><summary>Lihat jawaban</summary><p>${a}</p></details></li>`).join("")}</ol>`);
  const blok = (judul, kode, langkah, salah, latihan, kunci) =>
    `<h4>Contoh terpandu: ${judul}</h4><pre><code>${esc(kode)}</code></pre><ol>${li(langkah)}</ol>` +
    `<h4>Kesalahan yang sering terjadi</h4><ul>${li(salah)}</ul>` +
    `<h4>Latihan mandiri</h4><ol>${li(latihan)}</ol>` +
    `<details class="kunci-latihan"><summary>Lihat kunci jawaban (coba dulu sendiri)</summary><pre><code>${esc(kunci)}</code></pre></details>`;
  const tabel = (judul, baris) => `<h4>${judul}</h4><table class="mini-pivot">${baris.map((b, i) => `<tr>${b.map(x => i ? `<td>${x}</td>` : `<th>${x}</th>`).join("")}</tr>`).join("")}</table>`;

  /* ======================= Coding Test (10 bab) ======================= */
  const T = (k, qa) => cek(MATERI_CT, k, qa);
  T("strategi", [
    ["Loop di dalam loop atas list 1.000 elemen kira-kira berapa langkah?", "Sekitar 1.000 × 1.000 = 1 juta langkah, O(n²). Dengan set atau dict biasanya bisa turun ke O(n)."],
    ["Apa yang dilakukan pertama kali saat membaca soal coding test?", "Tulis ulang contoh input-output, cari kasus tepi (list kosong, satu elemen, angka negatif), baru tulis kode paling sederhana yang benar."],
    ["Kenapa <code>x in list</code> di dalam loop bisa lambat?", "Mengecek isi list memeriksa satu per satu (O(n)); di dalam loop menjadi O(n²). Ubah list ke set dulu agar pengecekan O(1)."]]);
  T("baca", [
    ["Apa hasil <code>a = [1,2]; b = a; b.append(3); print(a)</code>?", "[1, 2, 3], karena a dan b menunjuk list yang sama. Salinan dibuat dengan a.copy() atau a[:]."],
    ["Kenapa <code>def f(x, daftar=[])</code> berbahaya?", "List bawaan dibuat sekali saat fungsi didefinisikan, jadi isinya terbawa ke panggilan berikutnya. Pakai daftar=None lalu buat list baru di dalam fungsi."],
    ["Apa hasil <code>round(2.5)</code> di Python?", "2, karena Python membulatkan ke angka genap terdekat (banker's rounding)."]]);
  T("algo", [
    ["Pola apa untuk mencari dua angka yang jumlahnya target?", "Dict 'sudah dilihat': untuk setiap x cek apakah target − x sudah ada. Satu kali jalan, O(n)."],
    ["Kapan memakai dua penunjuk (two pointers)?", "Saat data sudah terurut atau perlu membandingkan ujung kiri dan kanan, misalnya cek palindrom atau pasangan jumlah di list terurut."],
    ["Bagaimana menghitung frekuensi huruf dengan cepat?", "collections.Counter(teks) atau dict dengan d[c] = d.get(c, 0) + 1."]]);
  T("otomasi", [
    ["Kenapa membuka file memakai <code>with open(...)</code>?", "File otomatis ditutup walau terjadi error, sehingga data tidak rusak dan file tidak terkunci."],
    ["Cara aman membaca angka dari CSV yang kadang kosong?", "Bungkus konversi dengan try/except ValueError atau cek string kosong dulu, lalu catat baris yang gagal."],
    ["Kenapa memakai pathlib.Path?", "Menggabungkan path dengan / berjalan sama di Windows dan Linux, dan punya method praktis seperti glob dan exists."]]);
  T("model", [
    ["Apa beda Many2one dan One2many?", "Many2one menyimpan satu id ke model lain (kolom di tabel). One2many adalah kebalikannya, daftar record anak yang menunjuk balik lewat Many2one."],
    ["File apa yang wajib ada di modul Odoo?", "__init__.py dan __manifest__.py. Model diimpor lewat __init__.py, view dan security didaftarkan di 'data' pada manifest."],
    ["Kenapa field baru tidak muncul setelah kode diubah?", "Modul belum di-upgrade (-u nama_modul) atau field belum ditambahkan ke view XML."]]);
  T("compute", [
    ["Kapan field compute perlu <code>store=True</code>?", "Saat harus bisa dicari, dikelompokkan, atau diurutkan di list view, dan nilainya cukup sering dibaca."],
    ["Apa akibat lupa <code>@api.depends</code>?", "Nilai tidak dihitung ulang saat field sumber berubah, sehingga angka yang tersimpan basi."],
    ["Beda constrains dan onchange?", "@api.constrains dicek saat menyimpan dan bisa menolak data (ValidationError). @api.onchange hanya membantu di form, tidak menjamin data dari import atau API."]]);
  T("orm", [
    ["Apa arti domain <code>['|', ('a','=',1), ('b','=',2)]</code>?", "a = 1 ATAU b = 2. Operator '|' berlaku untuk dua kondisi sesudahnya (notasi prefiks)."],
    ["Command apa untuk menambah baris baru ke One2many saat create?", "Command.create({...}) (dulu ditulis (0, 0, {...}))."],
    ["Kenapa memanggil search di dalam loop itu buruk?", "Setiap search adalah query ke database. Ambil sekali dengan domain 'in', lalu kelompokkan di Python, atau pakai read_group."]]);
  T("inherit", [
    ["Apa wajibnya saat override method create?", "Panggil super() dan kembalikan hasilnya. Di Odoo 17 create menerima list dict, jadi pakai @api.model_create_multi."],
    ["Beda _inherit saja dan _inherit + _name baru?", "_inherit saja menambah ke model yang sama. Dengan _name baru, Odoo membuat model baru yang menyalin struktur model induk."],
    ["Untuk apa TransientModel?", "Wizard: data sementara yang dihapus otomatis, dipakai untuk dialog seperti 'Buat faktur massal'."]]);
  T("view", [
    ["Cara menyisipkan field setelah field lain di view warisan?", "Pakai xpath atau &lt;field name=\"partner_id\" position=\"after\"&gt; di dalam view yang inherit_id-nya view asli."],
    ["Di Odoo 17, apa pengganti attrs?", "Atribut langsung berisi ekspresi Python: invisible=\"state != 'draft'\", readonly=\"...\", required=\"...\"."],
    ["Kenapa menu tidak muncul padahal XML sudah benar?", "Pengguna tidak punya grup akses, action belum terhubung, atau file XML belum didaftarkan di manifest."]]);
  T("security", [
    ["Apa isi baris ir.model.access.csv?", "id, name, model_id:id, group_id:id, perm_read, perm_write, perm_create, perm_unlink. Tanpa baris ini model baru tidak bisa dibuka pengguna biasa."],
    ["Beda access rights dan record rules?", "Access rights mengatur boleh baca/tulis model. Record rules membatasi baris mana, misalnya hanya pesanan milik tim sendiri."],
    ["Bagaimana menjalankan tes modul Odoo?", "odoo-bin -d db_uji -i nama_modul --test-enable --stop-after-init, dengan kelas tes turunan TransactionCase."]]);

  /* ======================= Cek pemahaman HTML (9 bab) ======================= */
  const HT = (k, qa) => cek(MATERI_HTML, k, qa);
  HT("struktur", [
    ["Apa akibat lupa <code>&lt;meta name=\"viewport\"&gt;</code>?", "Di HP halaman ditampilkan seperti layar komputer yang diperkecil, teks jadi sangat kecil dan media query tidak bekerja seperti harapan."],
    ["Di mana menaruh link ke file CSS?", "Di dalam head, memakai &lt;link rel=\"stylesheet\" href=\"gaya.css\"&gt;."],
    ["File index.html di folder blog. Bagaimana menautkan ke gambar di folder img yang sejajar dengan folder blog?", "src=\"../img/nama.jpg\": naik satu folder dengan ../ lalu masuk ke img."],
    ["Kenapa satu halaman sebaiknya hanya satu h1?", "h1 adalah judul utama halaman. Satu h1 membuat struktur jelas untuk pembaca layar dan mesin pencari."]]);
  HT("teks", [
    ["Beda strong dan b?", "strong berarti penting secara makna (dibaca dengan penekanan oleh pembaca layar). b hanya tebal secara tampilan."],
    ["Kapan memakai ol, bukan ul?", "Saat urutan berarti, misalnya langkah resep atau peringkat."],
    ["Bagaimana menulis tanda &lt; di teks HTML?", "Pakai entitas &amp;lt; agar tidak dibaca sebagai awal tag."],
    ["Elemen apa untuk menampilkan kode beberapa baris dengan spasi terjaga?", "pre berisi code: &lt;pre&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;."]]);
  HT("media", [
    ["Kapan alt dibiarkan kosong (alt=\"\")?", "Untuk gambar hiasan yang tidak membawa informasi, agar pembaca layar melewatinya."],
    ["Kenapa gambar diberi width dan height?", "Browser bisa menyiapkan ruang sebelum gambar terunduh, sehingga halaman tidak meloncat (CLS rendah)."],
    ["Atribut apa supaya video bisa diputar otomatis di HP?", "autoplay muted playsinline. Browser hanya mengizinkan autoplay yang dibisukan."],
    ["Apa fungsi rel=\"noopener\" pada tautan tab baru?", "Mencegah halaman baru mengakses window.opener dan mengubah halaman asal."]]);
  HT("form", [
    ["Apa beda method get dan post?", "get menaruh data di URL (cocok untuk pencarian). post mengirim di badan permintaan (untuk data pribadi atau yang mengubah sesuatu)."],
    ["Kenapa validasi di browser tidak cukup?", "Pengguna bisa mematikan atau mengakali validasi browser. Server tetap wajib memeriksa semua data."],
    ["Apa kegunaan autocomplete=\"email\"?", "Browser bisa mengisi otomatis dengan email tersimpan, mempercepat pengisian."],
    ["Radio dengan name berbeda-beda, apa akibatnya?", "Semuanya bisa terpilih bersamaan. Radio satu kelompok harus punya name yang sama."]]);
  HT("semantik", [
    ["Kenapa button lebih baik dari div yang diberi onclick?", "button otomatis bisa difokus dengan Tab, ditekan dengan Enter/Spasi, dan dikenali pembaca layar sebagai tombol."],
    ["Beda section dan div?", "section adalah bagian bertema yang biasanya punya judul. div tanpa makna, hanya pembungkus untuk gaya."],
    ["Boleh ada lebih dari satu header di halaman?", "Boleh, misalnya header di dalam setiap article. Yang hanya boleh satu adalah main."],
    ["Kapan memakai article?", "Untuk isi yang tetap bermakna bila berdiri sendiri, seperti posting blog, kartu produk, atau komentar."]]);
  HT("a11y", [
    ["Berapa kontras minimal teks biasa menurut WCAG AA?", "4,5 : 1. Teks besar (sekitar 24px atau 19px tebal) cukup 3 : 1."],
    ["Kapan memakai aria-label?", "Saat elemen tidak punya teks terlihat, misalnya tombol berisi ikon ✕ saja."],
    ["Kenapa pesan error tidak boleh hanya berwarna merah?", "Orang buta warna atau pengguna pembaca layar tidak menangkap warna. Tambahkan teks dan ikon."],
    ["Aturan pertama ARIA itu apa?", "Jangan pakai ARIA bila elemen HTML bawaan sudah bisa melakukannya."]]);
  HT("tabel", [
    ["Apa fungsi scope=\"col\" pada th?", "Memberi tahu pembaca layar bahwa th itu judul untuk seluruh kolom di bawahnya."],
    ["Bagaimana membuat sel melebar 2 kolom?", "colspan=\"2\" pada td atau th."],
    ["Kenapa tabel tidak dipakai untuk tata letak halaman?", "Sulit dibuat responsif dan membingungkan pembaca layar. Tata letak memakai CSS Grid atau Flexbox."],
    ["Bagaimana agar tabel lebar tetap bisa dibaca di HP?", "Bungkus dengan div ber-overflow-x: auto agar bisa digeser ke samping."]]);
  HT("head", [
    ["Berapa panjang ideal meta description?", "Sekitar 150–160 karakter, berisi ringkasan yang mengajak klik."],
    ["Beda defer dan async?", "defer menunggu HTML selesai dan menjaga urutan skrip. async jalan begitu terunduh, urutan tidak dijamin."],
    ["Untuk apa og:image?", "Gambar pratinjau saat tautan dibagikan di media sosial atau aplikasi chat."],
    ["Kenapa title tiap halaman harus berbeda?", "Membantu pengguna membedakan tab dan membantu mesin pencari memahami isi tiap halaman."]]);
  HT("interaktif", [
    ["Beda show() dan showModal() pada dialog?", "showModal() menampilkan di atas halaman dengan latar gelap, mengunci interaksi di belakang, dan Esc menutupnya. show() hanya menampilkan biasa."],
    ["Bagaimana membuat details terbuka sejak awal?", "Tambahkan atribut open: &lt;details open&gt;."],
    ["Kenapa iframe perlu title?", "Pembaca layar menyebutkan title untuk menjelaskan isi bingkai."],
    ["Apa bahaya tabindex=\"5\"?", "Nilai positif mengacak urutan fokus. Pakai 0 (ikut urutan) atau -1 (hanya lewat kode)."]]);

  /* ======================= Cek pemahaman CSS (12 bab) ======================= */
  const CS = (k, qa) => cek(MATERI_CSS, k, qa);
  CS("dasar", [
    ["Dua aturan sama kuat menyasar elemen yang sama. Mana yang menang?", "Yang ditulis paling akhir."],
    ["Properti apa yang diwariskan ke anak?", "Kebanyakan properti teks (color, font-family, font-size, line-height). Box model seperti margin, padding, border tidak diwariskan."],
    ["Beda inline style dan class?", "Inline style sangat kuat dan sulit ditimpa. Class bisa dipakai ulang dan dirawat di satu file."],
    ["Selector <code>ul > li</code> berarti?", "li yang menjadi anak langsung ul, bukan cucu di dalam ul bersarang."]]);
  CS("teks", [
    ["Kenapa line-height ditulis tanpa satuan (1.6)?", "Nilai tanpa satuan dihitung ulang di setiap anak sesuai ukuran hurufnya, sehingga tidak ada jarak yang kekecilan."],
    ["Apa itu font stack?", "Daftar font cadangan, misalnya \"Inter\", system-ui, sans-serif. Bila font pertama tidak ada, browser memakai berikutnya."],
    ["Fungsi font-display: swap?", "Teks langsung tampil dengan font cadangan, lalu berganti saat font kustom selesai diunduh."],
    ["Bagaimana menebalkan semua judul dengan satu aturan?", "h1, h2, h3 { font-weight: 700; }, selector dipisah koma."]]);
  CS("boxmodel", [
    ["Urutan lapisan box model dari dalam ke luar?", "content, padding, border, margin."],
    ["Apa itu margin collapse?", "Margin atas dan bawah dua blok yang berdekatan tidak dijumlah, yang dipakai margin terbesar."],
    ["Beda display: none dan visibility: hidden?", "none menghilangkan elemen dan ruangnya. hidden menyembunyikan tapi ruangnya tetap ada."],
    ["Kenapa span tidak mau diberi width?", "span inline. Ubah ke display: inline-block atau block."]]);
  CS("layout", [
    ["Properti apa yang mengatur sumbu utama flex?", "justify-content. Sumbu silang diatur align-items."],
    ["Bagaimana memusatkan satu elemen di tengah layar dengan flex?", "Wadah: display: flex; justify-content: center; align-items: center; min-height: 100vh."],
    ["Apa arti flex: 1?", "Elemen membesar mengambil bagian sisa ruang yang sama dengan saudara ber-flex: 1."],
    ["Kapan memilih flex dibanding grid?", "Flex untuk satu arah (baris atau kolom, misalnya navbar). Grid untuk dua arah sekaligus (baris dan kolom)."]]);
  CS("posisi", [
    ["Beda position fixed dan sticky?", "fixed selalu menempel di layar. sticky ikut digulir lalu menempel saat mencapai batas top yang ditentukan."],
    ["Patokan elemen absolute itu apa?", "Leluhur terdekat yang position-nya bukan static. Bila tidak ada, patokannya halaman."],
    ["Kenapa z-index 9999 tidak berhasil?", "Elemen masih static, atau berada di dalam stacking context induk yang z-index-nya lebih rendah."],
    ["Arti grid-template-columns: 1fr 2fr?", "Dua kolom, kolom kedua dua kali lebih lebar dari kolom pertama."]]);
  CS("dekorasi", [
    ["Kenapa transform lebih ringan dianimasikan daripada top?", "transform tidak memicu hitung ulang tata letak, browser cukup menggeser lapisan."],
    ["Bagaimana menulis bayangan lembut?", "box-shadow: 0 8px 24px rgb(0 0 0 / .12): geser x, geser y, blur, warna transparan."],
    ["Apa yang dilakukan prefers-reduced-motion?", "Media query untuk pengguna yang mengatur sistem agar mengurangi animasi. Matikan atau kurangi gerakan di dalamnya."],
    ["Bagaimana membuat sudut bulat penuh pada tombol?", "border-radius: 999px (atau 50% untuk lingkaran pada kotak persegi)."]]);
  CS("lanjut", [
    ["Bagaimana memberi nilai cadangan pada variabel?", "var(--warna, #333): bila --warna tidak didefinisikan, dipakai #333."],
    ["Arti width: min(100%, 720px)?", "Lebar mengambil yang lebih kecil: penuh di layar sempit, maksimal 720px di layar lebar."],
    ["Bisakah variabel CSS diubah dengan JavaScript?", "Bisa: document.documentElement.style.setProperty('--bg', '#fff')."],
    ["Di mana variabel global biasanya ditulis?", "Di :root agar bisa dipakai seluruh halaman."]]);
  CS("selektor", [
    ["Beda :hover dan ::before?", "Satu titik dua adalah pseudo-class (keadaan). Dua titik dua adalah pseudo-element (bagian buatan)."],
    ["Arti a[href^=\"https\"]?", "Tautan yang href-nya diawali https."],
    ["Bagaimana memilih setiap item ketiga?", "li:nth-child(3n)."],
    ["Apa fungsi :has()?", "Memilih induk berdasarkan isinya, misalnya .kartu:has(img) untuk kartu yang punya gambar."]]);
  CS("satuan", [
    ["Beda em dan rem?", "rem relatif ke ukuran huruf html (akar). em relatif ke ukuran huruf elemen itu sendiri atau induknya."],
    ["Berapa px 1.5rem bila html 16px?", "24px."],
    ["Kenapa 100vh bermasalah di HP?", "vh tidak memperhitungkan bilah alamat yang muncul-hilang. Pakai 100dvh."],
    ["Warna hsl(0 0% 100%) itu apa?", "Putih: hue 0, saturasi 0%, lightness 100%."]]);
  CS("animasi", [
    ["Beda transition dan animation?", "transition berjalan saat nilai berubah (misalnya hover). animation berjalan sendiri mengikuti @keyframes, bisa berulang."],
    ["Arti animation-fill-mode: forwards?", "Elemen tetap pada keadaan akhir setelah animasi selesai."],
    ["Bagaimana membuat animasi berulang tanpa henti?", "animation-iteration-count: infinite, atau tulis infinite di singkatan animation."],
    ["Easing ease-out cocok untuk apa?", "Elemen yang masuk ke layar: cepat di awal, melambat di akhir sehingga terasa natural."]]);
  CS("gridlanjut", [
    ["Beda auto-fit dan auto-fill?", "auto-fit melebarkan kolom yang ada untuk mengisi ruang kosong. auto-fill menyisakan kolom kosong."],
    ["Arti titik (.) di grid-template-areas?", "Sel kosong tanpa nama."],
    ["Apa itu container query?", "Gaya yang bergantung pada lebar wadah, bukan lebar layar. Butuh container-type pada wadah."],
    ["Bagaimana item grid melebar dari kolom pertama sampai terakhir?", "grid-column: 1 / -1."]]);
  CS("arsitektur", [
    ["Arti nama .kartu__judul--besar dalam BEM?", "Blok kartu, elemen judul, variasi besar."],
    ["Kenapa spesifisitas rendah itu baik?", "Gaya mudah ditimpa dengan urutan, tanpa perang selector dan !important."],
    ["Apa itu design token?", "Nilai desain bernama (warna, jarak, radius) yang dipakai ulang di seluruh komponen."],
    ["Fungsi kelas .sr-only?", "Menyembunyikan teks dari tampilan tapi tetap dibaca pembaca layar."]]);

  /* ======================= Cek pemahaman JavaScript (sebagian bab) ======================= */
  const JQ = (k, qa) => cek(MATERI_JS, k, qa);
  JQ("dasar", [["Beda let dan const?", "let boleh diisi ulang, const tidak. Isi objek/array const tetap bisa diubah."], ["Apa hasil typeof []?", "\"object\". Untuk cek array pakai Array.isArray()."]]);
  JQ("array", [["map atau forEach untuk membuat array baru?", "map, karena mengembalikan array baru. forEach mengembalikan undefined."], ["Bagaimana mengurutkan angka dengan benar?", "arr.sort((a, b) => a - b)."]]);
  JQ("async", [["Kenapa fetch tidak masuk catch saat 404?", "fetch hanya gagal untuk masalah jaringan. Cek res.ok lalu lempar error sendiri."], ["Apa hasil console.log dari fungsi async tanpa await?", "Sebuah Promise, bukan nilainya."]]);
  JQ("dom", [["Beda textContent dan innerHTML?", "textContent memasukkan teks apa adanya (aman). innerHTML membaca sebagai HTML, berbahaya untuk input pengguna (XSS)."]]);

  /* ======================= Excel (10 bab) ======================= */
  const X = (k, ...a) => tambah(MATERI_EXCEL, k, "Latihan terpandu &amp; kunci", blok(...a.slice(0, 6)) + (a[6] || ""));
  X("dasar", "menghitung total belanja dengan pajak tetap",
`    A          B       C        D
1  Barang     Harga   Jumlah   Subtotal
2  Kopi       18000   3        =B2*C2
3  Roti       12000   2        =B3*C3
4  Teh        8000    5        =B4*C4
5                     Total    =SUM(D2:D4)
6                     PPN      =D5*$G$1
7                     Bayar    =D5+D6
   (G1 berisi 11%)`,
    ["D2 dikalikan biasa lalu disalin ke bawah: referensi relatif berubah menjadi B3*C3, B4*C4.", "PPN mengunci $G$1 agar tetap menunjuk sel tarif saat disalin.", "Bayar = total + PPN."],
    ["Lupa $ sehingga saat disalin tarif menunjuk G2, G3 yang kosong (hasil 0).", "Mengetik angka 11% langsung di rumus; bila tarif berubah semua rumus harus diedit.", "Angka tersimpan sebagai teks (rata kiri, ada segitiga hijau)."],
    ["Tambahkan kolom E 'Diskon' 10% untuk barang dengan jumlah ≥ 5.", "Hitung rata-rata harga dan barang termahal.", "Buat rumus subtotal yang terkunci kolomnya saja agar bisa disalin ke kanan."],
`E2: =IF(C2>=5, D2*10%, 0)        (salin ke bawah)
Rata-rata harga: =AVERAGE(B2:B4)  → 12667
Termahal:        =MAX(B2:B4)      → 18000
Kunci kolom:     =$B2*$C2`,
    tabel("Jenis referensi (tekan F4 untuk berganti)", [["Tulis", "Saat disalin", "Contoh pakai"], ["A1", "baris dan kolom berubah", "rumus per baris"], ["$A$1", "tetap", "tarif, kurs"], ["$A1", "kolom tetap", "tabel perkalian"], ["A$1", "baris tetap", "judul kolom"]]));

  X("sumifs", "rekap penjualan per kota dan per bulan",
`Tabel Jual (A:D): Tanggal | Kota | Produk | Omzet
G2 = "Jakarta"    H1 = 1/1/2026 (awal bulan)

Omzet Jakarta:            =SUMIFS(D:D, B:B, G2)
Omzet Jakarta Januari:    =SUMIFS(D:D, B:B, G2, A:A, ">="&H1, A:A, "<"&EDATE(H1,1))
Jumlah transaksi > 1 jt:  =COUNTIFS(D:D, ">1000000")
Rata-rata Jakarta:        =AVERAGEIFS(D:D, B:B, G2)`,
    ["Argumen pertama SUMIFS adalah kolom yang dijumlah, lalu pasangan (kolom syarat, syarat).", "Syarat tanggal ditulis sebagai teks operator digabung &amp; dengan sel.", "EDATE(H1,1) memberi awal bulan berikutnya, sehingga rentang tanggal tepat satu bulan."],
    ["Urutan argumen tertukar dengan SUMIF (di SUMIF kolom jumlah di belakang).", "Menulis \">=H1\" dalam kutip sehingga dibaca teks H1, bukan nilainya.", "Rentang berbeda ukuran (D2:D100 dengan B2:B90) memberi #VALUE!."],
    ["Hitung omzet produk yang namanya mengandung 'Kopi'.", "Hitung jumlah transaksi kota Bandung atau Surabaya.", "Hitung omzet di luar Jakarta."],
`=SUMIFS(D:D, C:C, "*Kopi*")
=COUNTIFS(B:B, "Bandung") + COUNTIFS(B:B, "Surabaya")
=SUMIFS(D:D, B:B, "<>Jakarta")`);

  X("xlookup", "mengambil harga dan nama kategori dari tabel master",
`Master (Sheet Produk): A=Kode  B=Nama  C=Kategori  D=Harga
Transaksi: A2 = kode yang dicari

Harga:     =XLOOKUP(A2, Produk!A:A, Produk!D:D, "tidak ada")
Nama+Kat:  =XLOOKUP(A2, Produk!A:A, Produk!B:C)      → 2 kolom sekaligus
VLOOKUP:   =VLOOKUP(A2, Produk!A:D, 4, FALSE)`,
    ["XLOOKUP: nilai dicari, kolom pencarian, kolom hasil, teks bila tidak ketemu.", "Kolom hasil bisa beberapa kolom sekaligus, hasilnya tumpah ke kanan.", "VLOOKUP harus diberi FALSE agar mencari yang persis sama."],
    ["VLOOKUP tanpa FALSE: hasil salah diam-diam karena mencari perkiraan.", "Kode di master berupa angka, di transaksi berupa teks ('001' vs 1).", "Spasi tersembunyi di kode sehingga #N/A."],
    ["Ambil harga terakhir produk (data harga bisa berulang, ambil yang paling bawah).", "Tentukan diskon dari tabel tingkat: 0 → 0%, 1 jt → 5%, 5 jt → 10%.", "Bersihkan spasi sebelum mencari."],
`=XLOOKUP(A2, Produk!A:A, Produk!D:D, , 0, -1)       ' -1 = cari dari bawah
=XLOOKUP(E2, Tingkat!A:A, Tingkat!B:B, , -1)        ' -1 = persis atau lebih kecil berikutnya
=XLOOKUP(TRIM(A2), Produk!A:A, Produk!D:D, "tidak ada")`);

  X("if", "menentukan status dan bonus sales",
`B2 = target, C2 = realisasi
Persen:  D2 =C2/B2
Status:  E2 =IFS(D2>=1.2,"Luar biasa", D2>=1,"Tercapai", D2>=0.8,"Hampir", TRUE,"Kurang")
Bonus:   F2 =IF(AND(D2>=1, C2>=50000000), C2*2%, 0)
Peringatan: G2 =IF(OR(D2<0.5, C2=0), "Cek!", "")`,
    ["IFS memeriksa dari syarat tertinggi ke terendah; yang pertama benar dipakai.", "TRUE di akhir berperan sebagai 'selain itu'.", "AND: semua syarat harus benar; OR: cukup satu."],
    ["Urutan syarat terbalik (>=0.8 duluan) sehingga semua yang tercapai ikut 'Hampir'.", "Teks syarat tanpa kutip (Tercapai tanpa \"\") memberi #NAME?.", "Membandingkan dengan persen sebagai 100 padahal sel berisi 1."],
    ["Beri label 'Baru' bila tanggal masuk sales kurang dari 90 hari.", "Ubah bonus: 2% bila tercapai, 3% bila luar biasa.", "Tampilkan '-' bila target kosong agar tidak #DIV/0!."],
`=IF(TODAY()-H2<90, "Baru", "")
=IFS(D2>=1.2, C2*3%, D2>=1, C2*2%, TRUE, 0)
=IF(B2="", "-", C2/B2)`);

  X("pivot", "membuat laporan omzet kota × bulan",
`Langkah:
1. Klik satu sel di data → Ctrl+T (jadikan Tabel, beri nama TJual)
2. Insert → PivotTable → From Table/Range → New Worksheet
3. Rows: Kota      Columns: Tanggal (Group → Months)
4. Values: Sum of Omzet → Value Field Settings → Number Format
5. Tambahkan Slicer: Produk
6. Data baru masuk → klik kanan Pivot → Refresh`,
    ["Data sebagai Tabel membuat pivot otomatis mencakup baris baru.", "Group tanggal per bulan tanpa kolom bantu.", "Slicer memberi filter tombol yang mudah dipakai atasan."],
    ["Data punya baris kosong atau judul ganda sehingga pivot terpotong.", "Lupa Refresh lalu angka tidak berubah.", "Kolom angka berisi teks, pivot menghitung Count, bukan Sum."],
    ["Tampilkan persentase omzet tiap kota terhadap total.", "Tampilkan 3 produk terlaris saja.", "Ambil angka Jakarta Januari dari pivot ke sel lain dengan rumus."],
`Values → Show Values As → % of Grand Total
Row Labels (Produk) → Value Filters → Top 10 → 3 Items
=GETPIVOTDATA("Omzet", $A$3, "Kota", "Jakarta", "Tanggal", 1)`);

  X("cf", "menyorot data penting di laporan stok",
`Rentang B2:B200 = stok, C2:C200 = minimum
1. Home → Conditional Formatting → New Rule → Use a formula
2. Rumus: =$B2<$C2      Format: isi merah muda
3. Rumus: =$B2=0        Format: teks merah tebal (letakkan di atas)
4. Data Bars untuk kolom D (nilai stok)
5. Seluruh baris tersorot: pilih A2:F200, rumus tetap =$B2<$C2`,
    ["Rumus CF ditulis untuk baris pertama rentang; Excel menyesuaikan untuk baris lain.", "$ di depan kolom membuat seluruh baris ikut tersorot.", "Urutan aturan menentukan mana yang tampil bila bertabrakan."],
    ["Menulis $B$2 sehingga semua baris dinilai dari B2 saja.", "Terlalu banyak warna sampai tidak ada yang menonjol.", "Rentang CF tidak ikut bertambah karena data bukan Tabel."],
    ["Sorot tanggal kedaluwarsa dalam 30 hari ke depan.", "Sorot nama yang muncul lebih dari sekali.", "Sorot baris genap untuk efek zebra."],
`=AND($E2>=TODAY(), $E2<=TODAY()+30)
=COUNTIF($A:$A, $A2)>1
=ISEVEN(ROW())`);

  X("teks", "merapikan data pelanggan yang berantakan",
`A2 = "  budi SANTOSO  "     B2 = "0812-3456-7890"    C2 = "budi@MAIL.com"
Nama rapi:   =PROPER(TRIM(A2))                 → Budi Santoso
HP angka:    =SUBSTITUTE(B2, "-", "")          → 081234567890
Email kecil: =LOWER(C2)                        → budi@mail.com
Nama depan:  =TEXTBEFORE(PROPER(TRIM(A2)), " ") → Budi
Domain:      =TEXTAFTER(LOWER(C2), "@")         → mail.com`,
    ["TRIM membuang spasi berlebih, PROPER membuat huruf awal kapital.", "SUBSTITUTE mengganti semua tanda strip.", "TEXTBEFORE/TEXTAFTER memotong berdasarkan pemisah (Excel 365)."],
    ["Nomor HP diubah menjadi angka sehingga 0 di depan hilang (simpan sebagai teks).", "Spasi tak terlihat (CHAR(160)) dari web tidak hilang oleh TRIM.", "Menimpa data asli; sebaiknya rumus di kolom baru lalu Paste Values."],
    ["Gabungkan nama depan dan kota menjadi 'Budi – Batam'.", "Ambil 4 digit terakhir nomor HP.", "Hapus spasi non-breaking dari web."],
`=TEXTBEFORE(PROPER(TRIM(A2)), " ") & " – " & D2
=RIGHT(SUBSTITUTE(B2, "-", ""), 4)
=TRIM(SUBSTITUTE(A2, CHAR(160), " "))`);

  X("tanggal", "laporan per bulan dan umur piutang",
`A2 = tanggal faktur, B2 = nilai
Bulan:        =TEXT(A2, "yyyy-mm")
Akhir bulan:  =EOMONTH(A2, 0)
Jatuh tempo:  =A2 + 30
Umur (hari):  =TODAY() - A2
Kelompok:     =IFS(TODAY()-A2<=30,"0-30", TODAY()-A2<=60,"31-60", TRUE,">60")
Hari kerja:   =NETWORKDAYS(A2, TODAY(), Libur!A:A)`,
    ["Tanggal di Excel adalah angka, jadi bisa dijumlah dan dikurangi.", "TEXT dengan format yyyy-mm mudah diurutkan.", "NETWORKDAYS tidak menghitung Sabtu, Minggu, dan daftar libur."],
    ["Tanggal tersimpan sebagai teks (rata kiri) sehingga rumus error.", "Format TEXT mengikuti bahasa Windows; di beberapa komputer kode bulan berbeda.", "Memakai TODAY() di laporan yang harus tetap; nilainya berubah tiap hari."],
    ["Hitung kuartal dari tanggal.", "Hitung tanggal jatuh tempo 14 hari kerja.", "Ubah teks '28/11/2026' menjadi tanggal."],
`="Q" & ROUNDUP(MONTH(A2)/3, 0)
=WORKDAY(A2, 14, Libur!A:A)
=DATE(RIGHT(C2,4), MID(C2,4,2), LEFT(C2,2))`);

  X("lookup2", "laporan dinamis dengan FILTER, UNIQUE, SORT",
`Data di Tabel TJual (Tanggal, Kota, Produk, Omzet), G1 = kota pilihan
Daftar kota unik:    =SORT(UNIQUE(TJual[Kota]))
Baris kota pilihan:  =FILTER(TJual, TJual[Kota]=G1, "kosong")
Top 5 omzet:         =TAKE(SORT(TJual, 4, -1), 5)
INDEX-MATCH:         =INDEX(TJual[Omzet], MATCH(1, (TJual[Kota]=G1)*(TJual[Produk]=H1), 0))`,
    ["Hasil dynamic array 'tumpah' ke sel sekitar; biarkan sel di bawahnya kosong.", "Syarat FILTER bisa digabung dengan * (DAN) atau + (ATAU).", "INDEX-MATCH dengan perkalian menjadi pencarian dua syarat."],
    ["Ada isi di area tumpahan sehingga #SPILL!.", "FILTER tanpa argumen ketiga memberi #CALC! bila tidak ada hasil.", "Mengetik rumus array lama dengan Ctrl+Shift+Enter tanpa perlu."],
    ["Daftar produk unik di kota pilihan.", "Baris kota pilihan dengan omzet di atas 1 juta.", "Jumlah baris hasil FILTER."],
`=SORT(UNIQUE(FILTER(TJual[Produk], TJual[Kota]=G1)))
=FILTER(TJual, (TJual[Kota]=G1)*(TJual[Omzet]>1000000), "kosong")
=ROWS(FILTER(TJual, TJual[Kota]=G1))`);

  X("error", "membuat laporan bebas error",
`Rasio:         =IFERROR(C2/B2, 0)
Cari harga:    =IFNA(XLOOKUP(A2, Produk!A:A, Produk!D:D), "kode salah")
Cek angka:     =IF(ISNUMBER(B2), B2, "bukan angka")
Validasi data: Data → Data Validation → Whole number ≥ 0
Daftar pilihan: Data Validation → List → =Kota!$A$2:$A$20`,
    ["IFERROR menangkap semua error; IFNA hanya #N/A sehingga kesalahan lain tetap terlihat.", "ISNUMBER membantu menemukan angka yang tersimpan sebagai teks.", "Data Validation mencegah salah ketik sejak input."],
    ["IFERROR(...,0) menyembunyikan rumus yang salah total.", "Mengganti error dengan \"\" lalu dijumlah tanpa sadar ada data hilang.", "Daftar pilihan memakai rentang yang tidak terkunci."],
    ["Tampilkan 'Target kosong' bila B2 kosong, selain itu hitung rasio.", "Hitung berapa sel di kolom D yang error.", "Jumlahkan kolom yang berisi error tanpa ikut error."],
`=IF(B2="", "Target kosong", C2/B2)
=SUMPRODUCT(--ISERROR(D2:D200))
=AGGREGATE(9, 6, D2:D200)        ' 9 = SUM, 6 = abaikan error`,
    tabel("Arti error", [["Error", "Penyebab umum"], ["#DIV/0!", "dibagi nol / sel kosong"], ["#N/A", "nilai tidak ditemukan"], ["#NAME?", "salah ketik nama fungsi / teks tanpa kutip"], ["#VALUE!", "tipe data salah"], ["#REF!", "sel acuan terhapus"], ["#SPILL!", "area tumpahan terhalang"]]));
})();
