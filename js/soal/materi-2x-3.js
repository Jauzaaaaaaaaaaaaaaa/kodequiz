// ============ Materi 2x lipat (bagian 3): HTML, CSS, dan ringkasan cepat JavaScript ============
// Dimuat PALING AKHIR. Kode contoh di-escape otomatis.
(function () {
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const tambah = (MAT, k, judulBagian, h) => { const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">' + judulBagian + '</h4>' + h; };
  const li = a => a.map(x => `<li>${x}</li>`).join("");
  const blok = (judul, kode, langkah, salah, latihan, kunci) =>
    `<h4>Contoh terpandu: ${judul}</h4><pre><code>${esc(kode)}</code></pre><ol>${li(langkah)}</ol>` +
    `<h4>Kesalahan yang sering terjadi</h4><ul>${li(salah)}</ul>` +
    `<h4>Latihan mandiri</h4><ol>${li(latihan)}</ol>` +
    `<details class="kunci-latihan"><summary>Lihat kunci jawaban (coba dulu sendiri)</summary><pre><code>${esc(kunci)}</code></pre></details>`;
  const tabel = (judul, baris) => `<h4>${judul}</h4><table class="mini-pivot">${baris.map((b, i) => `<tr>${b.map(x => i ? `<td>${x}</td>` : `<th>${x}</th>`).join("")}</tr>`).join("")}</table>`;
  const H = (k, ...a) => tambah(MATERI_HTML, k, "Latihan terpandu &amp; kunci", blok(...a.slice(0, 6)) + (a[6] || ""));
  const C = (k, ...a) => tambah(MATERI_CSS, k, "Latihan terpandu &amp; kunci", blok(...a.slice(0, 6)) + (a[6] || ""));

  /* ======================= HTML (9 bab) ======================= */
  H("struktur", "halaman profil pertama",
`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Profil Jauza — Data Analyst</title>
</head>
<body>
  <h1>Jauza Fawaid</h1>
  <p>Lulusan Teknik Informatika yang menyukai data dan ERP.</p>
  <a href="proyek.html">Lihat proyek</a>
</body>
</html>`,
    ["DOCTYPE memberi tahu browser ini HTML5.", "lang=\"id\" membantu pembaca layar dan mesin pencari.", "charset dan viewport wajib ada di setiap halaman.", "Isi yang tampil ada di body; judul utama satu h1."],
    ["Menaruh konten yang terlihat di dalam head.", "Lupa menutup tag atau menutupnya bersilang.", "Nama file berspasi atau huruf besar-kecil tidak sama dengan tautannya.", "Path relatif salah (lupa ../ saat file ada di subfolder)."],
    ["Buat proyek.html dengan judul tab berbeda dan tautan kembali ke index.html.", "Tambahkan komentar HTML yang menandai bagian 'menu' dan 'isi'.", "Buat struktur folder: index.html, img/foto.jpg, lalu tampilkan fotonya dari index.html."],
`<!-- proyek.html -->
<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Proyek — Jauza</title></head>
<body>
  <!-- menu -->
  <a href="index.html">Kembali</a>
  <!-- isi -->
  <h1>Proyek saya</h1>
</body>
</html>

<!-- di index.html -->
<img src="img/foto.jpg" alt="Foto Jauza tersenyum" width="300" height="300">`,
    tabel("Ringkasan cepat struktur", [["Bagian", "Isi", "Tampil?"], ["&lt;!DOCTYPE html&gt;", "jenis dokumen", "tidak"], ["&lt;head&gt;", "meta, title, link CSS", "tidak (kecuali title di tab)"], ["&lt;body&gt;", "semua konten", "ya"], ["&lt;!-- --&gt;", "catatan", "tidak, tapi terlihat di View Source"]]));

  H("teks", "artikel resep yang terstruktur",
`<article>
  <h1>Kopi Susu Gula Aren</h1>
  <p>Resep untuk <strong>2 gelas</strong>, siap dalam <em>10 menit</em>.</p>
  <h2>Bahan</h2>
  <ul>
    <li>2 shot espresso</li>
    <li>300 ml susu</li>
    <li>40 ml gula aren cair</li>
  </ul>
  <h2>Cara membuat</h2>
  <ol>
    <li>Tuang gula aren ke gelas.</li>
    <li>Tambahkan es dan susu.</li>
    <li>Tuang espresso perlahan.</li>
  </ol>
</article>`,
    ["Satu h1, lalu h2 untuk bagian.", "ul untuk bahan (urutan bebas), ol untuk langkah (urutan penting).", "strong untuk informasi penting, em untuk penekanan."],
    ["Memakai h3 hanya karena ukurannya pas (melompati h2).", "Membuat daftar dengan tanda strip dan br, bukan ul/li.", "Memakai br berkali-kali untuk memberi jarak (pakai CSS margin)."],
    ["Tambahkan sub-daftar 'Alat' berisi gelas dan sendok di dalam poin bahan terakhir.", "Tambahkan kutipan pendapat pembeli dengan blockquote dan cite.", "Tambahkan tanggal terbit dengan elemen time."],
`<li>40 ml gula aren cair
  <ul><li>Alat: gelas</li><li>Alat: sendok</li></ul>
</li>

<blockquote>
  <p>Manisnya pas dan kopinya tetap terasa.</p>
  <cite>Pembeli di Batam</cite>
</blockquote>

<p>Terbit <time datetime="2026-11-28">28 November 2026</time></p>`,
    tabel("Pilih tag teks", [["Ingin", "Tag"], ["judul bagian", "h1–h6 berurutan"], ["paragraf", "p"], ["daftar urutan bebas", "ul + li"], ["langkah berurutan", "ol + li"], ["istilah dan arti", "dl + dt + dd"], ["kode", "code / pre"]]));

  H("media", "kartu produk dengan gambar dan tautan",
`<figure class="kartu">
  <img src="img/kopi.webp" alt="Segelas kopi susu dengan es batu"
       width="400" height="300" loading="lazy">
  <figcaption>
    <a href="produk/kopi-susu.html">Kopi Susu</a> — Rp 18.000
  </figcaption>
</figure>
<p>Tanya stok: <a href="mailto:halo@contoh.com">halo@contoh.com</a></p>`,
    ["figure + figcaption menghubungkan gambar dengan keterangannya.", "alt menjelaskan isi gambar, bukan 'gambar kopi.webp'.", "width/height mencegah halaman meloncat; lazy menunda gambar di bawah."],
    ["alt kosong pada gambar yang berisi informasi penting.", "Tautan 'klik di sini' yang tidak menjelaskan tujuan.", "target=\"_blank\" tanpa rel=\"noopener\"."],
    ["Tambahkan video demo yang dibisukan dan otomatis diputar dengan subtitle.", "Tambahkan tautan ke bagian #harga di halaman yang sama.", "Sediakan gambar AVIF dengan cadangan JPG memakai picture."],
`<video autoplay muted loop playsinline width="400">
  <source src="demo.webm" type="video/webm">
  <source src="demo.mp4" type="video/mp4">
  <track kind="subtitles" src="demo-id.vtt" srclang="id" label="Indonesia">
</video>

<a href="#harga">Lihat harga</a> ... <section id="harga">...</section>

<picture>
  <source srcset="kopi.avif" type="image/avif">
  <img src="kopi.jpg" alt="Segelas kopi susu" width="400" height="300">
</picture>`,
    tabel("Format gambar", [["Format", "Pakai untuk"], ["WebP/AVIF", "foto web modern"], ["JPG", "foto (cadangan)"], ["PNG", "tangkapan layar, transparansi"], ["SVG", "logo, ikon"]]));

  H("form", "formulir pendaftaran kursus yang lengkap",
`<form action="/daftar" method="post">
  <label for="nama">Nama lengkap</label>
  <input id="nama" name="nama" required autocomplete="name">

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required autocomplete="email">

  <label for="hp">Nomor HP</label>
  <input id="hp" name="hp" type="tel" pattern="08[0-9]{8,11}" title="Contoh: 081234567890">

  <label for="kelas">Kelas</label>
  <select id="kelas" name="kelas" required>
    <option value="">Pilih kelas</option>
    <option value="sql">SQL Dasar</option>
    <option value="py">Python Data</option>
  </select>

  <label><input type="checkbox" name="setuju" required> Saya setuju dengan syarat</label>
  <button type="submit">Daftar</button>
</form>`,
    ["Setiap input punya label dengan for = id.", "name menentukan nama data yang dikirim.", "type, required, dan pattern memberi validasi bawaan.", "Opsi kosong pertama di select memaksa pengguna memilih."],
    ["Label tidak terhubung karena id dan for berbeda ejaan.", "Lupa name sehingga data tidak terkirim.", "Mengandalkan validasi browser saja tanpa cek di server.", "Tombol di dalam form tanpa type sehingga ikut mengirim."],
    ["Tambahkan pilihan jadwal (pagi/malam) dengan radio dan fieldset.", "Tambahkan textarea 'Motivasi' maksimal 300 karakter.", "Tambahkan tombol 'Reset' yang tidak mengirim form."],
`<fieldset>
  <legend>Jadwal</legend>
  <label><input type="radio" name="jadwal" value="pagi" required> Pagi</label>
  <label><input type="radio" name="jadwal" value="malam"> Malam</label>
</fieldset>

<label for="motivasi">Motivasi</label>
<textarea id="motivasi" name="motivasi" maxlength="300" rows="4"></textarea>

<button type="reset">Reset</button>`,
    tabel("type input yang berguna", [["type", "Kegunaan"], ["email", "cek format, keyboard @"], ["tel", "keyboard angka"], ["number", "angka dengan min/max"], ["date", "pemilih tanggal"], ["password", "teks tersembunyi"], ["file", "unggah berkas"]]));

  H("semantik", "kerangka halaman portofolio yang bermakna",
`<body>
  <a class="lewati" href="#isi">Lewati ke konten</a>
  <header>
    <a href="/" class="logo">Jauza</a>
    <nav aria-label="Menu utama">
      <a href="#proyek">Proyek</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </header>
  <main id="isi">
    <h1>Portofolio Data &amp; ERP</h1>
    <section id="proyek">
      <h2>Proyek</h2>
      <article class="kartu"><h3>Dashboard Penjualan</h3><p>…</p></article>
    </section>
  </main>
  <footer id="kontak">© 2026 Jauza</footer>
</body>`,
    ["header berisi logo dan nav.", "main hanya satu dan berisi isi utama.", "Setiap proyek adalah article di dalam section bertema.", "Tautan 'Lewati ke konten' membantu pengguna keyboard."],
    ["Membuat tombol dari div yang diberi onclick.", "Dua elemen main dalam satu halaman.", "Memakai id yang sama lebih dari sekali."],
    ["Tambahkan aside 'Keahlian' di samping section proyek.", "Beri setiap kartu proyek data-id untuk JavaScript.", "Tambahkan address berisi email di footer."],
`<aside><h2>Keahlian</h2><ul><li>SQL</li><li>Python</li><li>Odoo</li></ul></aside>
<article class="kartu" data-id="dashboard-penjualan">…</article>
<footer><address><a href="mailto:halo@contoh.com">halo@contoh.com</a></address></footer>`,
    tabel("Tag semantik", [["Tag", "Untuk"], ["header", "bagian atas"], ["nav", "menu navigasi"], ["main", "isi utama (satu)"], ["section", "bagian bertema"], ["article", "isi mandiri"], ["aside", "sampingan"], ["footer", "bagian bawah"]]));

  H("a11y", "memperbaiki halaman agar aksesibel",
`<!-- sebelum -->
<div onclick="tutup()">✕</div>
<img src="grafik.png">
<a href="laporan.pdf">klik di sini</a>

<!-- sesudah -->
<button type="button" aria-label="Tutup" onclick="tutup()">✕</button>
<img src="grafik.png" alt="Penjualan naik 20% dari April ke Mei">
<a href="laporan.pdf">Unduh laporan penjualan Mei (PDF, 1,2 MB)</a>`,
    ["div diganti button supaya bisa difokus dan ditekan dengan keyboard.", "aria-label memberi nama pada tombol ikon.", "alt menyampaikan kesimpulan grafik.", "Teks tautan menjelaskan tujuan dan jenis berkas."],
    ["Menghapus outline fokus tanpa pengganti.", "Kontras teks abu-abu muda di latar putih.", "Pesan error hanya dengan warna merah."],
    ["Tambahkan wadah aria-live untuk pesan 'Tersimpan'.", "Buat gaya :focus-visible yang jelas untuk tombol.", "Perbaiki input tanpa label berikut: &lt;input placeholder=\"Email\"&gt;."],
`<div id="status" aria-live="polite"></div>

button:focus-visible { outline: 3px solid #415A77; outline-offset: 2px; }

<label for="email">Email</label>
<input id="email" type="email" placeholder="contoh@mail.com">`,
    tabel("Daftar periksa cepat", [["Periksa", "Cara"], ["gambar", "alt bermakna / kosong untuk hiasan"], ["form", "label terhubung"], ["keyboard", "Tab, Enter, Spasi, Esc berfungsi"], ["kontras", "≥ 4,5 : 1"], ["bahasa", "html lang=\"id\""]]));

  H("tabel", "laporan penjualan per kota dengan total",
`<div class="wadah-tabel">
<table>
  <caption>Penjualan Januari 2026</caption>
  <thead>
    <tr><th scope="col">Kota</th><th scope="col">Pesanan</th><th scope="col">Omzet (Rp)</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Jakarta</th><td>5</td><td>17.050.000</td></tr>
    <tr><th scope="row">Bandung</th><td>2</td><td>4.300.000</td></tr>
    <tr><th scope="row">Surabaya</th><td>1</td><td>750.000</td></tr>
  </tbody>
  <tfoot>
    <tr><th scope="row">Total</th><td>8</td><td>22.100.000</td></tr>
  </tfoot>
</table>
</div>`,
    ["caption menjadi judul tabel.", "th scope=col untuk judul kolom, scope=row untuk judul baris.", "tfoot untuk baris total.", "Pembungkus memungkinkan geser horizontal di HP."],
    ["Membuat tata letak halaman dengan tabel.", "Tidak ada th sehingga pembaca layar tidak tahu judul kolom.", "Angka rata kiri sehingga digit tidak sejajar."],
    ["Tambahkan baris kategori 'Jawa' yang melebar 3 kolom di atas Jakarta dan Bandung.", "Gabungkan sel kota Jakarta ke bawah untuk dua baris produk.", "Tulis CSS zebra dan angka rata kanan."],
`<tr><th colspan="3" scope="colgroup">Jawa</th></tr>

<tr><th rowspan="2" scope="rowgroup">Jakarta</th><td>Laptop</td><td>14.000.000</td></tr>
<tr><td>Monitor</td><td>3.050.000</td></tr>

tbody tr:nth-child(even) { background: #f4f1de; }
td { text-align: right; font-variant-numeric: tabular-nums; }`);

  H("head", "head lengkap untuk halaman proyek",
`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Segmentasi Pelanggan E-Commerce — Portofolio Jauza</title>
  <meta name="description" content="Clustering RFM 2.000 pelanggan dengan Python untuk promosi yang lebih tepat sasaran.">
  <meta property="og:title" content="Segmentasi Pelanggan E-Commerce">
  <meta property="og:description" content="Clustering RFM dengan Python dan rekomendasi pemasaran.">
  <meta property="og:image" content="https://contoh.com/og-segmentasi.png">
  <link rel="icon" href="/ikon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="gaya.css">
  <script src="app.js" defer></script>
</head>`,
    ["title unik: kata kunci di depan, nama situs di belakang.", "description sekitar 150 karakter, mengajak klik.", "og:* menentukan kartu tautan saat dibagikan.", "defer membuat skrip berjalan setelah HTML selesai dibaca."],
    ["Semua halaman memakai title yang sama.", "Skrip di head tanpa defer lalu mencari elemen yang belum ada.", "og:image memakai path relatif (sebaiknya URL lengkap)."],
    ["Tambahkan theme-color untuk bilah HP.", "Tambahkan canonical untuk alamat utama halaman.", "Muat skrip analitik secara async."],
`<meta name="theme-color" content="#0D1B2A">
<link rel="canonical" href="https://contoh.com/proyek/segmentasi">
<script src="https://analitik.contoh/a.js" async></script>`,
    tabel("Cara memuat skrip", [["Atribut", "Kapan jalan", "Cocok untuk"], ["(tanpa)", "segera, menghentikan pembacaan HTML", "jarang"], ["defer", "setelah HTML selesai, berurutan", "skrip aplikasi"], ["async", "begitu terunduh", "skrip mandiri"], ["type=module", "seperti defer", "kode modern"]]));

  H("interaktif", "FAQ dan konfirmasi tanpa banyak JavaScript",
`<details name="faq">
  <summary>Berapa lama pengiriman?</summary>
  <p>2–3 hari kerja untuk Pulau Jawa.</p>
</details>
<details name="faq">
  <summary>Bisa bayar di tempat?</summary>
  <p>Bisa untuk wilayah tertentu.</p>
</details>

<button type="button" onclick="dlg.showModal()">Hapus akun</button>
<dialog id="dlg">
  <form method="dialog">
    <p>Yakin menghapus akun?</p>
    <button value="batal">Batal</button>
    <button value="ya">Ya, hapus</button>
  </form>
</dialog>`,
    ["details/summary bisa dibuka-tutup tanpa JS; name sama = hanya satu terbuka.", "dialog + showModal membuat jendela modal dengan Esc untuk menutup.", "form method=\"dialog\" menutup dialog dan menyimpan nilai tombol di returnValue."],
    ["Membuat modal sendiri dengan div tanpa mengunci fokus.", "Lupa title pada iframe.", "Memakai tabindex positif yang mengacak urutan fokus."],
    ["Baca pilihan pengguna dari dialog setelah ditutup.", "Tampilkan batang kemajuan 60% dengan progress.", "Sematkan peta lokasi dengan iframe yang punya title dan lazy."],
`dlg.addEventListener("close", () => { if (dlg.returnValue === "ya") hapusAkun(); });
<progress value="60" max="100">60%</progress>
<iframe src="https://peta.contoh/embed" title="Peta lokasi toko" loading="lazy" width="400" height="300"></iframe>`);

  /* ======================= CSS (12 bab) ======================= */
  C("dasar", "menata kartu sederhana dan membaca cascade",
`.kartu {
  background: #FBF9F0;
  color: #1B263B;
  border: 1px solid #D9CFB8;
  border-radius: 12px;
  padding: 16px;
}
.kartu h3 { margin: 0 0 8px; }
.kartu.promo { border-color: #415A77; }     /* dua class: lebih kuat */
#unggulan { border-width: 3px; }            /* id: paling kuat */`,
    ["Selector class memilih semua kartu.", "<code>.kartu h3</code> memilih h3 di dalam kartu.", "<code>.kartu.promo</code> (tanpa spasi) memilih elemen yang punya kedua class.", "id mengalahkan class bila bertabrakan."],
    ["Spasi yang tidak sengaja: <code>.kartu .promo</code> berarti promo di DALAM kartu.", "Lupa titik koma sehingga deklarasi berikutnya rusak.", "Memakai !important untuk menutupi masalah urutan."],
    ["Buat class .tombol dengan latar gelap dan teks terang.", "Ubah warna tombol saat disorot (:hover).", "Gunakan currentColor agar garis bawah link mengikuti warna teks."],
`.tombol { background: #1B263B; color: #F4F1DE; padding: 8px 16px; border: 0; border-radius: 99px; }
.tombol:hover { background: #415A77; }
a { text-decoration: underline; text-decoration-color: currentColor; }`,
    tabel("Kekuatan selector", [["Selector", "Skor (id, class, tag)"], ["p", "0, 0, 1"], [".kartu", "0, 1, 0"], [".kartu h3", "0, 1, 1"], [".kartu.promo", "0, 2, 0"], ["#unggulan", "1, 0, 0"]]));

  C("teks", "tipografi artikel yang nyaman dibaca",
`body {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: #1B263B;
}
article { max-width: 65ch; margin: 0 auto; }
h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); line-height: 1.15; }
.meta { color: #4A5A70; font-size: .875rem; letter-spacing: .02em; }`,
    ["Ukuran dasar rem mengikuti pengaturan pengguna.", "line-height 1,6–1,7 nyaman untuk paragraf.", "max-width 65ch membatasi panjang baris.", "clamp membuat judul membesar di layar lebar tanpa media query."],
    ["Ukuran teks paragraf di bawah 14px.", "Teks abu-abu terlalu muda (kontras rendah).", "Rata kiri-kanan (justify) yang membuat jarak kata tidak rata."],
    ["Potong judul kartu satu baris dengan elipsis.", "Muat font sendiri dengan @font-face dan font-display swap.", "Buat angka di tabel sejajar."],
`.judul-kartu { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
@font-face { font-family: "Sansku"; src: url(font/sansku.woff2) format("woff2"); font-display: swap; }
td { font-variant-numeric: tabular-nums; }`);

  C("boxmodel", "menghitung dan merapikan ukuran kartu",
`*, *::before, *::after { box-sizing: border-box; }
.kartu {
  width: 320px;
  padding: 20px;
  border: 2px solid #D9CFB8;
  margin: 12px auto;          /* atas-bawah 12px, kiri-kanan auto = di tengah */
}`,
    ["border-box: lebar 320px sudah termasuk padding dan border.", "margin auto kiri-kanan memusatkan kotak.", "Ruang total yang dipakai = 320px + margin kiri-kanan."],
    ["Lupa border-box sehingga kartu melebar dari perkiraan.", "Mengira margin atas-bawah dua elemen dijumlah (sebenarnya bertumpuk/collapse).", "Memberi width pada span (inline) tanpa mengubah display."],
    ["Hitung lebar terlihat kartu bila box-sizing content-box.", "Buat avatar bulat 64px dari gambar persegi.", "Buat kotak video 16:9 yang lebarnya mengikuti wadah."],
`/* content-box: 320 + 2×20 + 2×2 = 364px */
.avatar { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; }
.video { width: 100%; aspect-ratio: 16 / 9; }`,
    tabel("Singkatan margin/padding", [["Tulis", "Artinya"], ["10px", "semua sisi"], ["10px 20px", "atas-bawah, kiri-kanan"], ["10px 20px 30px", "atas, kiri-kanan, bawah"], ["10px 20px 30px 40px", "atas, kanan, bawah, kiri"]]));

  C("layout", "navbar dan baris kartu dengan Flexbox",
`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
}
.menu { display: flex; gap: 12px; }
.kartu-baris { display: flex; flex-wrap: wrap; gap: 16px; }
.kartu-baris > * { flex: 1 1 240px; }   /* minimal 240px, berbagi sisa ruang */`,
    ["space-between mendorong logo ke kiri dan menu ke kanan.", "align-items center menyejajarkan vertikal.", "flex-wrap: wrap membuat kartu turun baris di layar sempit.", "flex: 1 1 240px = boleh membesar, boleh mengecil, ukuran dasar 240px."],
    ["align-items center tidak terlihat karena wadah tidak punya tinggi.", "Lupa flex-wrap sehingga kartu terhimpit.", "Memakai margin di setiap anak padahal gap lebih rapi."],
    ["Taruh tombol 'Masuk' paling kanan di navbar memakai margin-left: auto.", "Buat footer yang menempel di bawah halaman pendek.", "Tumpuk menu ke bawah di layar < 600px."],
`.masuk { margin-left: auto; }
body { display: flex; flex-direction: column; min-height: 100vh; } main { flex: 1; }
@media (max-width: 600px) { .navbar { flex-direction: column; align-items: flex-start; } }`);

  C("posisi", "lencana di kartu dan tata letak halaman dengan Grid",
`.kartu { position: relative; }
.lencana { position: absolute; top: 8px; right: 8px; }

.halaman {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 16px;
}
.atas, .bawah { grid-column: 1 / -1; }`,
    ["Kartu relative menjadi patokan lencana absolute.", "Grid dua kolom: sidebar tetap 240px, konten mengisi sisa.", "grid-column: 1 / -1 membuat header dan footer melebar penuh."],
    ["Lencana absolute 'kabur' ke pojok halaman karena induk tidak relative.", "z-index tidak bekerja pada elemen static.", "Header sticky tidak menempel karena induk overflow hidden."],
    ["Buat header yang menempel saat digulir.", "Buat galeri 3 kolom sama lebar.", "Taruh satu item grid melebar 2 kolom."],
`header { position: sticky; top: 0; z-index: 10; background: #F4F1DE; }
.galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.lebar { grid-column: span 2; }`);

  C("dekorasi", "tombol dengan transisi halus dan versi gelap",
`.tombol {
  background: #415A77; color: #fff;
  padding: 10px 18px; border-radius: 99px;
  transition: transform .15s ease-out, box-shadow .15s ease-out;
}
.tombol:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgb(0 0 0 / .2); }
@media (prefers-color-scheme: dark) { .tombol { background: #D4C4A8; color: #0D1B2A; } }
@media (prefers-reduced-motion: reduce) { .tombol { transition: none; } }`,
    ["transition hanya untuk properti ringan (transform, box-shadow).", "Efek hover mengangkat tombol sedikit.", "Media query menyesuaikan tema gelap dan pengguna yang ingin sedikit gerakan."],
    ["transition: all yang ikut menganimasikan properti berat.", "Efek hanya di :hover sehingga pengguna keyboard tidak melihat apa-apa (tambahkan :focus-visible).", "Gradasi ditulis di background-color (harus background-image/background)."],
    ["Tambahkan gaya :focus-visible yang sama jelasnya dengan hover.", "Buat latar gradasi biru ke ungu.", "Sembunyikan navigasi saat dicetak."],
`.tombol:focus-visible { outline: 3px solid #1B263B; outline-offset: 3px; }
.hero { background: linear-gradient(135deg, #415A77, #6a4c93); }
@media print { nav, .tombol { display: none; } }`);

  C("lanjut", "tema dengan variabel CSS",
`:root {
  --bg: #F4F1DE; --teks: #1B263B; --utama: #415A77;
  --radius: 12px; --jarak: 16px;
}
:root[data-theme="dark"] { --bg: #0D1B2A; --teks: #E6E0CA; --utama: #D4C4A8; }

body   { background: var(--bg); color: var(--teks); }
.kartu { border-radius: var(--radius); padding: var(--jarak); }
.tombol{ background: var(--utama); }`,
    ["Semua warna di satu tempat (:root).", "Tema gelap cukup mengganti variabel.", "Fitur Warna latar KodeQuiz bekerja dengan cara yang sama."],
    ["Menulis warna yang sama di puluhan tempat.", "Lupa nilai cadangan var(--x, cadangan) untuk variabel opsional.", "Nama variabel tidak bermakna (--c1, --c2)."],
    ["Tambahkan variabel --bayang dan pakai di kartu.", "Buat ukuran judul responsif dengan clamp.", "Lebar wadah: penuh di HP, maksimal 720px."],
`:root { --bayang: 0 8px 24px rgb(0 0 0 / .12); }
.kartu { box-shadow: var(--bayang); }
h1 { font-size: clamp(1.6rem, 4vw, 2.6rem); }
.wadah { width: min(100%, 720px); margin-inline: auto; }`);

  C("selektor", "menghias tautan dan baris tabel dengan selector lanjut",
`a[href$=".pdf"]::after { content: " (PDF)"; font-size: .8em; }
a[target="_blank"]::after { content: " ↗"; }
tbody tr:nth-child(even) { background: #EFEBDD; }
li:not(:last-child) { border-bottom: 1px solid #D9CFB8; }
input:invalid:not(:placeholder-shown) { border-color: #A4473A; }`,
    ["Selector atribut $= memilih tautan berakhiran .pdf.", "::after menambah teks buatan setelah isi.", ":nth-child(even) baris genap; :not(:last-child) semua kecuali terakhir.", "Garis merah hanya setelah pengguna mengetik (placeholder tidak tampil)."],
    ["Lupa content pada ::before/::after sehingga tidak muncul.", "Tertukar :nth-child(odd) dan (even).", "Satu titik dua untuk pseudo-element di kode baru (pakai dua)."],
    ["Beri warna berbeda pada item daftar pertama.", "Tampilkan label tebal saat checkbox di depannya dicentang.", "Beri bintang merah setelah label yang wajib (class .wajib)."],
`li:first-child { color: #415A77; }
input:checked + label { font-weight: 700; }
label.wajib::after { content: " *"; color: #A4473A; }`);

  C("satuan", "menyusun skala ukuran yang konsisten",
`html { font-size: 100%; }           /* 16px bawaan, mengikuti pengguna */
h1 { font-size: 2.25rem; }          /* 36px */
h2 { font-size: 1.5rem; }           /* 24px */
.tombol { padding: .6em 1.2em; }    /* ikut ukuran huruf tombol */
.hero { min-height: 100dvh; }       /* setinggi layar HP yang sebenarnya */
p { max-width: 65ch; }`,
    ["rem untuk ukuran huruf, em untuk padding yang ikut huruf.", "dvh memperhitungkan bilah alamat HP.", "ch membatasi panjang baris berdasarkan jumlah karakter."],
    ["Memakai px untuk semua ukuran huruf (mengabaikan pengaturan pengguna).", "em bertingkat yang terus membesar di elemen bersarang.", "100vh di HP yang tertutup bilah browser."],
    ["Buat warna tombol versi terang dengan HSL (lightness naik).", "Buat latar lembut dari warna utama 15% dengan color-mix.", "Buat tombol berukuran sentuh minimal 44px."],
`.tombol { background: hsl(214 30% 36%); }
.tombol:hover { background: hsl(214 30% 46%); }
.sorot { background: color-mix(in srgb, var(--utama) 15%, transparent); }
.tombol { min-height: 44px; min-width: 44px; }`);

  C("animasi", "kartu muncul bergantian dan spinner",
`@keyframes muncul {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}
.kartu { animation: muncul .4s ease-out both; }
.kartu:nth-child(2) { animation-delay: .08s; }
.kartu:nth-child(3) { animation-delay: .16s; }

@keyframes putar { to { transform: rotate(360deg); } }
.spinner { width: 24px; height: 24px; border: 3px solid #D9CFB8; border-top-color: #415A77;
           border-radius: 50%; animation: putar .8s linear infinite; }`,
    ["@keyframes mendefinisikan awal dan akhir gerakan.", "both menahan keadaan awal sebelum delay dan keadaan akhir sesudahnya.", "Spinner: lingkaran dengan satu sisi berwarna, diputar linear tanpa henti."],
    ["Menganimasikan width/top yang berat.", "Dua transform di aturan terpisah (yang terakhir menimpa).", "Animasi tanpa versi prefers-reduced-motion."],
    ["Buat ikon berdenyut (scale 1 → 1,1 → 1) tanpa henti.", "Buat efek gambar membesar sedikit saat kartu disorot.", "Matikan semua animasi untuk pengguna reduced motion."],
`@keyframes denyut { 50% { transform: scale(1.1); } }
.ikon { animation: denyut 1.2s ease-in-out infinite; }
.kartu img { transition: transform .3s; }
.kartu:hover img { transform: scale(1.04); }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }`);

  C("gridlanjut", "galeri responsif dan peta halaman",
`.galeri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}
.halaman {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas: "atas atas" "menu isi" "bawah bawah";
}
.atas { grid-area: atas; } .menu { grid-area: menu; } .isi { grid-area: isi; } .bawah { grid-area: bawah; }
@media (max-width: 700px) {
  .halaman { grid-template-columns: 1fr; grid-template-areas: "atas" "isi" "menu" "bawah"; }
}`,
    ["auto-fit + minmax membuat jumlah kolom menyesuaikan lebar tanpa media query.", "grid-template-areas menggambar peta halaman dengan nama.", "Di HP cukup ganti petanya."],
    ["Nama area di peta tidak sama dengan grid-area elemen.", "Baris peta dengan jumlah kolom berbeda (tidak sah).", "Memakai float untuk tata letak kolom."],
    ["Buat item galeri pertama dua kali lebih besar (2 kolom × 2 baris).", "Tumpuk teks di atas gambar dalam sel yang sama tanpa absolute.", "Buat kartu yang berubah tata letak dengan container query di atas 420px."],
`.galeri > :first-child { grid-column: span 2; grid-row: span 2; }
.tumpuk { display: grid; } .tumpuk > * { grid-area: 1 / 1; }
.wadah { container-type: inline-size; }
@container (min-width: 420px) { .kartu { display: grid; grid-template-columns: 140px 1fr; } }`);

  C("arsitektur", "merapikan CSS dengan reset, token, dan BEM",
`/* token.css */
:root { --warna-utama: #415A77; --jarak-2: 8px; --jarak-4: 16px; --radius: 12px; }
/* reset.css */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }
img { max-width: 100%; height: auto; display: block; }
/* komponen.css (BEM) */
.kartu { padding: var(--jarak-4); border-radius: var(--radius); }
.kartu__judul { margin: 0 0 var(--jarak-2); }
.kartu--promo { outline: 2px solid var(--warna-utama); }`,
    ["Token menyimpan nilai desain di satu tempat.", "Reset kecil menyamakan perilaku browser.", "BEM: blok__elemen--variasi, semua selector satu class (spesifisitas rendah)."],
    ["Selector panjang bergantung struktur (.main .isi .kartu h3 span).", "Warna ditulis ulang di setiap komponen.", "Banyak !important untuk menimpa gaya."],
    ["Ubah .card h3.title menjadi nama BEM.", "Tambahkan utilitas .sr-only untuk teks khusus pembaca layar.", "Buat variasi tombol --kecil memakai token jarak."],
`.kartu__judul { … }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.tombol--kecil { padding: var(--jarak-2) var(--jarak-4); font-size: .875rem; }`);

  /* ======================= Ringkasan cepat JavaScript (17 bab) ======================= */
  const RJ = (k, baris) => tambah(MATERI_JS, k, "Ringkasan satu halaman", tabel("Ingat ini", baris));
  RJ("dasar", [["Konsep", "Contoh", "Catatan"], ["const", "const pajak = 0.11", "tidak bisa diisi ulang"], ["let", "let total = 0", "nilai berubah"], ["typeof", "typeof 5 → \"number\"", "null → \"object\""], ["Number()", "Number(\"12\") → 12", "gagal → NaN"], ["parseInt", "parseInt(\"12px\") → 12", "baca angka di depan"]]);
  RJ("operator", [["Operator", "Contoh", "Hasil"], ["%", "10 % 3", "1"], ["**", "2 ** 3", "8"], ["===", "5 === \"5\"", "false"], ["??", "0 ?? 10", "0"], ["||", "0 || 10", "10"], ["?:", "x > 0 ? \"+\" : \"-\"", "pilih satu"]]);
  RJ("kondisiloop", [["Bentuk", "Pakai untuk"], ["if / else if / else", "rentang dan syarat gabungan"], ["switch", "satu nilai, banyak kemungkinan pasti"], ["for (i…)", "butuh indeks"], ["for…of", "isi array"], ["for…in", "kunci objek"], ["while", "ulang sampai syarat berubah"]]);
  RJ("fungsi", [["Bentuk", "Ciri"], ["function f(){}", "di-hoisting, punya this sendiri"], ["const f = () => x", "return otomatis tanpa { }"], ["parameter bawaan", "function f(a = 1)"], ["rest", "function f(...angka)"], ["callback", "fungsi dikirim sebagai argumen"]]);
  RJ("array", [["Method", "Mengubah asli?", "Hasil"], ["push/pop/shift/unshift", "ya", "tambah/ambil"], ["splice/sort/reverse", "ya", "ubah isi/urutan"], ["map/filter/slice", "tidak", "array baru"], ["reduce", "tidak", "satu nilai"], ["find/some/every/includes", "tidak", "cari/cek"]]);
  RJ("strobj", [["Kebutuhan", "Cara"], ["rapikan teks", "trim, toLowerCase"], ["cek isi", "includes, startsWith"], ["potong", "slice(a, b)"], ["ambil properti", "const { a, b } = obj"], ["salin + ubah", "{ ...obj, a: 1 }"], ["ulang objek", "Object.entries(obj)"]]);
  RJ("dom", [["Langkah", "Kode"], ["temukan", "document.querySelector(\".x\")"], ["ubah teks", "el.textContent = \"…\""], ["ubah gaya", "el.classList.toggle(\"aktif\")"], ["dengarkan", "el.addEventListener(\"click\", f)"], ["buat", "document.createElement(\"li\")"], ["pasang", "wadah.append(el)"]]);
  RJ("async", [["Konsep", "Ingat"], ["Promise", "nilai yang datang nanti"], ["await", "hanya di fungsi async"], ["res.ok", "cek status HTTP sendiri"], ["urutan", "kode biasa → Promise → setTimeout"], ["Promise.all", "tunggu semua, gagal bila satu gagal"], ["localStorage", "simpan teks; pakai JSON.stringify"]]);
  RJ("modern", [["Singkatan", "Arti"], ["[a, b] = arr", "ambil isi berdasarkan urutan"], ["{ a } = obj", "ambil properti berdasarkan nama"], ["...", "rest (kumpul) / spread (bongkar)"], ["?.", "berhenti aman bila null"], ["??", "cadangan hanya untuk null/undefined"], ["{ [k]: v }", "kunci dari variabel"]]);
  RJ("kasus", [["Kode", "Hasil"], ["\"5\" + 1", "\"51\""], ["\"5\" - 1", "4"], ["[10, 9, 1].sort()", "[1, 10, 9]"], ["typeof null", "\"object\""], ["NaN === NaN", "false"], ["if ([])", "jalan (truthy)"]]);
  RJ("scope", [["Konsep", "Ingat"], ["let/const", "lingkup blok"], ["var", "lingkup fungsi, bocor dari blok"], ["TDZ", "let dibaca sebelum baris → ReferenceError"], ["closure", "fungsi mengingat variabel luarnya"], ["this", "ditentukan cara memanggil; arrow ambil dari luar"]]);
  RJ("event", [["Konsep", "Kode/arti"], ["submit form", "e.preventDefault()"], ["delegation", "e.target.closest(\"li\")"], ["sekali", "{ once: true }"], ["lepas", "removeEventListener dengan fungsi sama"], ["bubbling", "event naik ke induk"], ["keyboard", "e.key === \"Enter\""]]);
  RJ("kelas", [["Fitur", "Contoh"], ["constructor", "constructor(nama) { this.nama = nama }"], ["pewarisan", "class B extends A { constructor() { super() } }"], ["privat", "#saldo"], ["getter", "get total() {}"], ["static", "static buat() {}"]]);
  RJ("error", [["Jenis", "Penyebab umum"], ["ReferenceError", "nama tidak ada / TDZ"], ["TypeError", "baca properti dari null, panggil bukan fungsi"], ["SyntaxError", "tulisan salah, JSON rusak"], ["RangeError", "nilai di luar rentang"], ["try/catch/finally", "tangani dan rapikan"]]);
  RJ("koleksi", [["Alat", "Pakai untuk"], ["Set", "nilai unik"], ["Map", "pasangan kunci → nilai dinamis"], ["Math.round/floor/ceil", "pembulatan"], ["Date", "bulan mulai 0"], ["regex test/match/replace", "pola teks"]]);
  RJ("modul", [["Konsep", "Contoh"], ["export bernama", "export function f() {}"], ["import bernama", "import { f } from \"./a.js\""], ["export default", "export default function () {}"], ["di HTML", "&lt;script type=\"module\"&gt;"], ["salin dalam", "structuredClone(obj)"]]);
  RJ("frontend", [["React", "Ingat"], ["komponen", "fungsi yang mengembalikan JSX"], ["useState", "[nilai, setNilai]"], ["ubah state", "buat array/objek baru"], ["useEffect(f, [])", "jalan sekali setelah tampil"], ["daftar", "map + key unik"], ["TypeScript", "label tipe dicek sebelum jalan"]]);
})();
