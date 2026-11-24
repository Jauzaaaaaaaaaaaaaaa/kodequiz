# -*- coding: utf-8 -*-
# Studi Kasus Koding CSS (bahasa "web"): diperiksa dari gaya yang benar-benar dihitung browser (getComputedStyle).
# Iframe penguji lebar 1000px. Warna terhitung berbentuk "rgb(r, g, b)".

def css_dok(body, css, judul="Latihan CSS"):
    return f'<!DOCTYPE html>\n<html lang="id">\n<head>\n  <meta charset="utf-8">\n  <title>{judul}</title>\n  <style>\n{css}\n  </style>\n</head>\n<body>\n{body}\n</body>\n</html>\n'

def C(id, judul, tingkat, soal, body, css_solusi, tes, petunjuk, jelas, css_awal="    /* tulis CSS-mu di sini */", cerita=""):
    return W(id, judul, tingkat, soal, css_dok(body, css_solusi), css_dok(body, css_awal), tes, petunjuk, jelas, cerita=cerita)

# aturan @media di <style>: (teks kondisi, isi css)
MEDIA = "[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.type === 4)"
ADA_HOVER = lambda sel: f"[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.selectorText && r.selectorText.replace(/\\s/g, '').includes('{sel}:hover'))"

# ---------------------------------------------------------------- 1. dasar
studi(id="css-dasar", topik="css", setelah="dasar", judul="Selector dan warna", bahasa="web",
  contoh=dict(judul="Contoh: tag, class, id",
    penjelasan="<p>Aturan CSS = <code>selector { properti: nilai; }</code>. Selector tag (<code>h1</code>) mengenai semua tag itu, class (<code>.harga</code>) mengenai elemen ber-class itu, id (<code>#judul</code>) mengenai satu elemen. Warna bisa ditulis hex <code>#0d1b2a</code>, <code>rgb()</code>, atau nama.</p>",
    kode=css_dok('  <h1 id="judul">Kopi Kenar</h1>\n  <p>Menu hari ini:</p>\n  <p class="harga">Rp 18.000</p>', "    body { background-color: #f4f1de; }\n    h1 { color: #0d1b2a; }\n    .harga { color: #b55a7c; font-weight: bold; }\n    #judul { text-decoration: underline; }"),
    kunci="tag → semua; .class → yang ber-class; #id → satu elemen. Hex #0d1b2a sama dengan rgb(13, 27, 42)."),
  langkah=[
    C("css-dasar-1", "Warna halaman", 1,
      "Beri <code>body</code> latar <code>#f4f1de</code>, judul <code>h1</code> warna <code>#0d1b2a</code>, dan elemen ber-class <code>penting</code> warna <code>#c0392b</code>.",
      '  <h1>Pengumuman</h1>\n  <p>Coding test dimulai pukul 09.00.</p>\n  <p class="penting">Bawa laptop sendiri.</p>',
      "    body { background-color: #f4f1de; }\n    h1 { color: #0d1b2a; }\n    .penting { color: #c0392b; }",
      [("body berlatar #f4f1de", "gaya('body', 'background-color') === 'rgb(244, 241, 222)'"),
       ("h1 berwarna #0d1b2a", "gaya('h1', 'color') === 'rgb(13, 27, 42)'"),
       (".penting berwarna #c0392b", "gaya('.penting', 'color') === 'rgb(192, 57, 43)'"),
       ("Paragraf biasa tidak ikut merah", "gaya('p:not(.penting)', 'color') !== 'rgb(192, 57, 43)'")],
      ["Tiga aturan: body, h1, .penting.", "Selector class diawali titik: .penting { color: #c0392b; }"],
      "Selector class lebih tepat sasaran daripada tag: hanya paragraf penting yang berubah."),
    C("css-dasar-2", "Selector keturunan dan id", 2,
      "Link di dalam <code>nav</code> berwarna <code>#415a77</code> tanpa garis bawah, link di <code>footer</code> tetap bawaan; harga di dalam kartu (<code>.kartu .harga</code>) tebal (700); dan elemen <code>#promo</code> berlatar <code>#fff3cd</code>.",
      '  <nav><a href="#">Beranda</a> <a href="#">Menu</a></nav>\n  <div class="kartu"><h2>Kopi</h2><p class="harga">Rp 18.000</p></div>\n  <p class="harga">Harga lama Rp 20.000</p>\n  <p id="promo">Diskon 10% hari ini!</p>\n  <footer><a href="#">Kontak</a></footer>',
      "    nav a { color: #415a77; text-decoration: none; }\n    .kartu .harga { font-weight: 700; }\n    #promo { background-color: #fff3cd; }",
      [("Link nav berwarna #415a77", "gaya('nav a', 'color') === 'rgb(65, 90, 119)'"),
       ("Link nav tanpa garis bawah", "gaya('nav a', 'text-decoration-line') === 'none'"),
       ("Link footer tidak ikut berubah", "gaya('footer a', 'color') !== 'rgb(65, 90, 119)'"),
       ("Harga di dalam kartu tebal", "gaya('.kartu .harga', 'font-weight') === '700'"),
       ("Harga di luar kartu tidak tebal", "gaya('body > .harga', 'font-weight') === '400'"),
       ("#promo berlatar #fff3cd", "gaya('#promo', 'background-color') === 'rgb(255, 243, 205)'")],
      ["Selector keturunan memakai spasi: nav a = semua a di DALAM nav.", "font-weight: 700 sama dengan bold."],
      "Selector keturunan membatasi aturan ke wilayah tertentu, sehingga link footer dan harga di luar kartu tidak ikut berubah."),
  ])

# ---------------------------------------------------------------- 2. teks
studi(id="css-teks", topik="css", setelah="teks", judul="Tipografi yang enak dibaca", bahasa="web",
  contoh=dict(judul="Contoh: font, ukuran, jarak baris",
    penjelasan="<p><code>font-family</code> memilih huruf (selalu akhiri dengan cadangan umum seperti <code>sans-serif</code>), <code>font-size</code> ukuran, <code>line-height</code> jarak baris (1.5–1.7 nyaman dibaca), <code>text-align</code> perataan.</p>",
    kode=css_dok('  <h1>Judul Artikel</h1>\n  <p>Paragraf yang nyaman dibaca punya jarak baris longgar dan panjang baris tidak terlalu lebar.</p>', "    body { font-family: Arial, sans-serif; }\n    h1 { text-align: center; letter-spacing: 1px; }\n    p { font-size: 18px; line-height: 1.6; max-width: 60ch; }"),
    kunci="line-height tanpa satuan (1.6) dikalikan ukuran font: 18px × 1.6 = 28.8px."),
  langkah=[
    C("css-teks-1", "Artikel yang nyaman", 1,
      "Atur: <code>body</code> memakai <code>font-family</code> yang diakhiri <code>sans-serif</code>; <code>p</code> berukuran <code>18px</code> dengan <code>line-height: 1.6</code>; <code>h1</code> rata tengah.",
      '  <h1>Belajar CSS</h1>\n  <p>CSS mengatur tampilan halaman.</p>\n  <p>Ukuran dan jarak baris memengaruhi kenyamanan membaca.</p>',
      "    body { font-family: Arial, sans-serif; }\n    p { font-size: 18px; line-height: 1.6; }\n    h1 { text-align: center; }",
      [("font-family diakhiri sans-serif", "/sans-serif\\s*$/.test(gaya('body', 'font-family'))"),
       ("p berukuran 18px", "gaya('p', 'font-size') === '18px'"),
       ("line-height p = 1.6 × 18px", "Math.abs(parseFloat(gaya('p', 'line-height')) - 28.8) < 0.2"),
       ("h1 rata tengah", "gaya('h1', 'text-align') === 'center'")],
      ["Tiga selector: body, p, h1.", "line-height: 1.6 (tanpa px) berarti 1,6 kali ukuran huruf."],
      "Nilai line-height tanpa satuan diwariskan sebagai rasio, sehingga tetap proporsional untuk ukuran huruf berbeda."),
    C("css-teks-2", "Judul bagian dan link", 2,
      "Buat <code>h2</code> huruf kapital semua (<code>text-transform</code>), jarak huruf <code>2px</code>, tebal 700; link (<code>a</code>) tanpa garis bawah dan berwarna <code>#0f766e</code>; dan <code>.catatan</code> miring (italic) berukuran <code>14px</code>.",
      '  <h2>Layanan kami</h2>\n  <p>Lihat <a href="#">daftar harga</a>.</p>\n  <p class="catatan">Harga dapat berubah.</p>',
      "    h2 { text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }\n    a { text-decoration: none; color: #0f766e; }\n    .catatan { font-style: italic; font-size: 14px; }",
      [("h2 huruf kapital", "gaya('h2', 'text-transform') === 'uppercase'"),
       ("h2 letter-spacing 2px", "gaya('h2', 'letter-spacing') === '2px'"),
       ("h2 tebal 700", "gaya('h2', 'font-weight') === '700'"),
       ("Link tanpa garis bawah, warna #0f766e", "gaya('a', 'text-decoration-line') === 'none' && gaya('a', 'color') === 'rgb(15, 118, 110)'"),
       (".catatan miring 14px", "gaya('.catatan', 'font-style') === 'italic' && gaya('.catatan', 'font-size') === '14px'")],
      ["text-transform: uppercase mengubah tampilan tanpa mengubah teks HTML-nya.", "font-style: italic untuk miring."],
      "Mengatur kapital lewat CSS (bukan mengetik huruf besar di HTML) membuat teks tetap mudah diubah dan dibaca pembaca layar dengan benar."),
  ])

# ---------------------------------------------------------------- 3. box model
studi(id="css-box", topik="css", setelah="boxmodel", judul="Box model: kartu produk", bahasa="web",
  contoh=dict(judul="Contoh: content, padding, border, margin",
    penjelasan="<p>Setiap elemen adalah kotak: isi → <code>padding</code> (jarak dalam) → <code>border</code> → <code>margin</code> (jarak luar). Dengan <code>box-sizing: border-box</code>, <code>width</code> sudah termasuk padding dan border, jadi ukurannya mudah ditebak.</p>",
    kode=css_dok('  <div class="kartu">Kotak 300px</div>', "    .kartu {\n      box-sizing: border-box;\n      width: 300px;\n      padding: 16px;\n      border: 2px solid #415a77;\n      border-radius: 8px;\n      margin: 24px auto;\n    }"),
    kunci="border-box: lebar total = width. margin: 0 auto memusatkan elemen block yang punya width."),
  langkah=[
    C("css-box-1", "Kartu produk", 1,
      "Beri <code>.kartu</code> padding <code>16px</code>, border <code>1px solid #d4c4a8</code>, sudut membulat <code>8px</code>, dan jarak bawah antarkartu <code>24px</code>.",
      '  <div class="kartu">Kopi Susu</div>\n  <div class="kartu">Es Teh</div>',
      "    .kartu { padding: 16px; border: 1px solid #d4c4a8; border-radius: 8px; margin-bottom: 24px; }",
      [("padding 16px", "gaya('.kartu', 'padding-top') === '16px' && gaya('.kartu', 'padding-left') === '16px'"),
       ("border 1px solid #d4c4a8", "gaya('.kartu', 'border-top-width') === '1px' && gaya('.kartu', 'border-top-style') === 'solid' && gaya('.kartu', 'border-top-color') === 'rgb(212, 196, 168)'"),
       ("Sudut 8px", "gaya('.kartu', 'border-top-left-radius') === '8px'"),
       ("Jarak bawah 24px", "gaya('.kartu', 'margin-bottom') === '24px'")],
      ["Semua properti ditulis di satu aturan .kartu { ... }.", "Shorthand border: 1px solid #d4c4a8."],
      "padding memberi ruang napas di dalam kartu; margin memisahkan kartu satu dengan yang lain."),
    C("css-box-2", "Ukuran pasti dan terpusat", 2,
      "Buat <code>.kotak</code> dengan lebar total <b>tepat 320px</b> walau punya padding <code>20px</code> dan border <code>4px</code>, lalu letakkan di tengah halaman secara horizontal.",
      '  <div class="kotak">Form login</div>',
      "    .kotak { box-sizing: border-box; width: 320px; padding: 20px; border: 4px solid #0d1b2a; margin: 0 auto; }",
      [("Lebar total tepat 320px", "$('.kotak').offsetWidth === 320"),
       ("padding 20px", "gaya('.kotak', 'padding-left') === '20px'"),
       ("border 4px", "gaya('.kotak', 'border-left-width') === '4px'"),
       ("Terpusat horizontal", "Math.abs(($('.kotak').getBoundingClientRect().left - d.body.getBoundingClientRect().left) - (d.body.getBoundingClientRect().right - $('.kotak').getBoundingClientRect().right)) < 2")],
      ["Tanpa box-sizing: border-box, lebar total = 320 + 2×20 + 2×4 = 368px.", "margin-left dan margin-right auto (shorthand margin: 0 auto) memusatkan block yang lebarnya tetap."],
      "Banyak proyek memasang * { box-sizing: border-box } di awal CSS karena perhitungan ukuran jadi jauh lebih mudah."),
  ])

# ---------------------------------------------------------------- 4. flexbox
studi(id="css-flex", topik="css", setelah="layout", judul="Flexbox: navbar dan baris kartu", bahasa="web",
  contoh=dict(judul="Contoh: display flex, gap, justify-content",
    penjelasan="<p><code>display: flex</code> menyusun anak-anak dalam satu baris. <code>gap</code> memberi jarak antar-anak, <code>justify-content</code> mengatur sumbu utama (horizontal), <code>align-items</code> sumbu silang (vertikal), <code>flex-wrap: wrap</code> membuat anak turun baris saat penuh.</p>",
    kode=css_dok('  <header class="bar"><b>Logo</b><nav><a href="#">Menu</a> <a href="#">Kontak</a></nav></header>', "    .bar { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #0d1b2a; color: white; }\n    .bar a { color: white; margin-left: 12px; }"),
    kunci="space-between: anak pertama di kiri, terakhir di kanan. gap lebih rapi daripada margin satu per satu."),
  langkah=[
    C("css-flex-1", "Menu horizontal", 1,
      "Ubah <code>nav ul</code> menjadi baris horizontal dengan flexbox, jarak antar-item <code>16px</code> (pakai <code>gap</code>), tanpa titik daftar (<code>list-style</code>), dan tanpa padding bawaan.",
      '  <nav>\n    <ul>\n      <li><a href="#">Beranda</a></li>\n      <li><a href="#">Produk</a></li>\n      <li><a href="#">Kontak</a></li>\n    </ul>\n  </nav>',
      "    nav ul { display: flex; gap: 16px; list-style: none; padding: 0; }",
      [("ul memakai display: flex", "gaya('nav ul', 'display') === 'flex'"),
       ("gap 16px", "gaya('nav ul', 'column-gap') === '16px'"),
       ("Tanpa titik daftar", "gaya('nav ul', 'list-style-type') === 'none'"),
       ("Item tersusun dalam satu baris", "new Set($$('nav li').map(li => Math.round(li.getBoundingClientRect().top))).size === 1"),
       ("padding-left ul 0", "gaya('nav ul', 'padding-left') === '0px'")],
      ["display: flex dipasang pada INDUK (ul), bukan pada li.", "list-style: none; padding: 0; menghapus gaya bawaan daftar."],
      "Flex diterapkan ke wadah; anak-anaknya otomatis menjadi flex item."),
    C("css-flex-2", "Header dan baris kartu", 2,
      "Buat <code>.bar</code> flex dengan logo di kiri dan menu di kanan (<code>space-between</code>) serta isi terpusat vertikal. Lalu <code>.daftar</code> flex yang membungkus (<code>wrap</code>) dengan gap <code>20px</code>, dan setiap <code>.kartu</code> lebar <code>280px</code>.",
      '  <header class="bar"><b>Kopi Kenar</b><nav><a href="#">Menu</a></nav></header>\n  <div class="daftar">\n    <div class="kartu">Kopi</div><div class="kartu">Teh</div><div class="kartu">Roti</div><div class="kartu">Donat</div>\n  </div>',
      "    .bar { display: flex; justify-content: space-between; align-items: center; }\n    .daftar { display: flex; flex-wrap: wrap; gap: 20px; }\n    .kartu { width: 280px; }",
      [(".bar flex dengan space-between", "gaya('.bar', 'display') === 'flex' && gaya('.bar', 'justify-content') === 'space-between'"),
       (".bar align-items center", "gaya('.bar', 'align-items') === 'center'"),
       ("Menu berada di sisi kanan", "$('.bar nav').getBoundingClientRect().right >= $('.bar').getBoundingClientRect().right - 1"),
       (".daftar flex wrap gap 20px", "gaya('.daftar', 'display') === 'flex' && gaya('.daftar', 'flex-wrap') === 'wrap' && gaya('.daftar', 'column-gap') === '20px'"),
       ("Kartu lebar 280px", "$$('.kartu').every(k => Math.round(k.getBoundingClientRect().width) === 280)"),
       ("Kartu turun ke baris kedua saat penuh", "new Set($$('.kartu').map(k => Math.round(k.getBoundingClientRect().top))).size >= 2")],
      ["Dua wadah flex terpisah: .bar dan .daftar.", "Dengan lebar 1000px, 4 kartu × 280px + gap tidak muat satu baris, jadi wrap membuatnya turun."],
      "Kombinasi flex-wrap + gap + lebar tetap adalah cara cepat membuat grid kartu yang responsif tanpa media query."),
  ])

# ---------------------------------------------------------------- 5. position & grid
studi(id="css-grid", topik="css", setelah="posisi", judul="Grid dan position", bahasa="web",
  contoh=dict(judul="Contoh: grid 3 kolom dan lencana absolut",
    penjelasan="<p><code>display: grid</code> + <code>grid-template-columns: repeat(3, 1fr)</code> membuat 3 kolom sama lebar. <code>position: relative</code> pada induk + <code>position: absolute</code> pada anak menempatkan anak relatif ke induk. <code>position: sticky; top: 0</code> membuat header menempel saat digulir.</p>",
    kode=css_dok('  <div class="galeri"><div class="kartu">1<span class="lencana">Baru</span></div><div class="kartu">2</div><div class="kartu">3</div></div>', "    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }\n    .kartu { position: relative; padding: 30px; background: #e8e8e8; }\n    .lencana { position: absolute; top: 6px; right: 6px; background: #b55a7c; color: white; font-size: 12px; padding: 2px 6px; }"),
    kunci="1fr = satu bagian dari sisa ruang. absolute mengacu ke leluhur terdekat yang position-nya bukan static."),
  langkah=[
    C("css-grid-1", "Galeri 3 kolom", 1,
      "Jadikan <code>.galeri</code> grid <b>3 kolom sama lebar</b> dengan jarak <code>16px</code>.",
      '  <div class="galeri">\n    <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>\n  </div>',
      "    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }",
      [(".galeri display grid", "gaya('.galeri', 'display') === 'grid'"),
       ("Tepat 3 kolom", "gaya('.galeri', 'grid-template-columns').split(' ').length === 3"),
       ("Kolom sama lebar", "(c => Math.max(...c) - Math.min(...c) < 1)(gaya('.galeri', 'grid-template-columns').split(' ').map(parseFloat))"),
       ("gap 16px", "gaya('.galeri', 'column-gap') === '16px' && gaya('.galeri', 'row-gap') === '16px'")],
      ["grid-template-columns: repeat(3, 1fr).", "gap mengatur jarak baris dan kolom sekaligus."],
      "Grid cocok untuk tata letak dua dimensi (baris DAN kolom); flex untuk satu arah."),
    C("css-grid-2", "Header lengket dan lencana", 2,
      "Buat <code>header</code> menempel di atas saat digulir (<code>sticky</code>, <code>top: 0</code>) dan berada di atas konten (<code>z-index</code> ≥ 10). Lalu letakkan <code>.lencana</code> di pojok kanan atas <code>.kartu</code> (<code>top: 8px; right: 8px</code>) memakai position.",
      '  <header>Kopi Kenar</header>\n  <div class="kartu"><h3>Kopi Susu</h3><span class="lencana">Terlaris</span></div>',
      "    header { position: sticky; top: 0; z-index: 10; background: white; }\n    .kartu { position: relative; padding: 24px; }\n    .lencana { position: absolute; top: 8px; right: 8px; }",
      [("header sticky top 0", "gaya('header', 'position') === 'sticky' && gaya('header', 'top') === '0px'"),
       ("header z-index ≥ 10", "parseInt(gaya('header', 'z-index')) >= 10"),
       (".kartu menjadi acuan posisi (relative)", "gaya('.kartu', 'position') === 'relative'"),
       (".lencana absolute di kanan atas kartu", "gaya('.lencana', 'position') === 'absolute' && Math.abs($('.lencana').getBoundingClientRect().right - ($('.kartu').getBoundingClientRect().right - 8)) < 1.5 && Math.abs($('.lencana').getBoundingClientRect().top - ($('.kartu').getBoundingClientRect().top + 8)) < 1.5")],
      ["Tanpa position: relative di .kartu, lencana akan menempel ke pojok halaman.", "z-index hanya berlaku untuk elemen yang position-nya bukan static."],
      "Pola relative + absolute dipakai untuk lencana, ikon tutup, dan label diskon di hampir semua toko online."),
  ])

# ---------------------------------------------------------------- 6. dekorasi & responsif
studi(id="css-dekorasi", topik="css", setelah="dekorasi", judul="Bayangan, hover, dan responsif", bahasa="web",
  contoh=dict(judul="Contoh: box-shadow, :hover, @media",
    penjelasan="<p><code>box-shadow</code> memberi bayangan, <code>:hover</code> berlaku saat kursor di atas elemen, dan <code>@media (max-width: 600px) { ... }</code> berisi aturan yang hanya aktif di layar sempit.</p>",
    kode=css_dok('  <div class="galeri"><button>Beli</button><button>Simpan</button></div>', "    button { background: #415a77; color: white; border: 0; padding: 10px 16px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,.2); }\n    button:hover { background: #0d1b2a; }\n    .galeri { display: flex; gap: 8px; }\n    @media (max-width: 600px) { .galeri { flex-direction: column; } }"),
    kunci="Mobile-first: gaya dasar untuk HP, lalu @media (min-width) untuk layar lebar. Atau sebaliknya dengan max-width."),
  langkah=[
    C("css-dek-1", "Tombol dengan bayangan dan hover", 1,
      "Beri <code>.tombol</code> bayangan (<code>box-shadow</code> apa saja), sudut <code>6px</code>, latar <code>#415a77</code>, kursor <code>pointer</code>, dan aturan <code>.tombol:hover</code> yang mengganti latar.",
      '  <button class="tombol">Kirim lamaran</button>',
      "    .tombol { box-shadow: 0 2px 6px rgba(0, 0, 0, .2); border-radius: 6px; background-color: #415a77; cursor: pointer; }\n    .tombol:hover { background-color: #0d1b2a; }",
      [("Ada box-shadow", "gaya('.tombol', 'box-shadow') !== 'none'"),
       ("Sudut 6px dan latar #415a77", "gaya('.tombol', 'border-top-left-radius') === '6px' && gaya('.tombol', 'background-color') === 'rgb(65, 90, 119)'"),
       ("Kursor pointer", "gaya('.tombol', 'cursor') === 'pointer'"),
       ("Ada aturan .tombol:hover", ADA_HOVER(".tombol"))],
      ["box-shadow: geser-x geser-y blur warna, misalnya 0 2px 6px rgba(0,0,0,.2).", "Aturan hover ditulis terpisah: .tombol:hover { background-color: ...; }"],
      "cursor: pointer dan perubahan warna saat hover memberi tanda bahwa elemen bisa diklik."),
    C("css-dek-2", "Galeri responsif", 2,
      "<code>.galeri</code> sudah grid 3 kolom. Tambahkan <code>@media (max-width: 600px)</code> yang membuatnya <b>1 kolom</b> (<code>grid-template-columns: 1fr</code>). Gambar di dalamnya tidak boleh lebih lebar dari wadah (<code>max-width: 100%</code>).",
      '  <div class="galeri"><img src="a.jpg" alt="A"><img src="b.jpg" alt="B"><img src="c.jpg" alt="C"></div>',
      "    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }\n    .galeri img { max-width: 100%; }\n    @media (max-width: 600px) {\n      .galeri { grid-template-columns: 1fr; }\n    }",
      [("Di layar lebar tetap 3 kolom", "gaya('.galeri', 'grid-template-columns').split(' ').length === 3"),
       ("Ada @media dengan max-width: 600px", MEDIA + ".some(r => /max-width:\\s*600px/.test(r.conditionText || r.media.mediaText))"),
       ("Di dalam @media, .galeri menjadi 1fr", MEDIA + ".some(r => [...r.cssRules].some(x => x.selectorText === '.galeri' && x.style.gridTemplateColumns.replace(/\\s/g, '') === '1fr'))"),
       ("Gambar max-width 100%", "gaya('.galeri img', 'max-width') === '100%'")],
      ["Struktur: @media (max-width: 600px) { .galeri { grid-template-columns: 1fr; } }", "max-width: 100% pada img mencegah gambar melebar keluar kartu di HP."],
      "Media query mengubah tata letak sesuai lebar layar; ini dasar desain responsif."),
    ],
  )

# ---------------------------------------------------------------- 7. lanjut (spesifisitas & variabel)
studi(id="css-lanjut", topik="css", setelah="lanjut", judul="Variabel CSS dan spesifisitas", bahasa="web",
  contoh=dict(judul="Contoh: --variabel dan var()",
    penjelasan="<p>Variabel CSS (<i>custom property</i>) ditulis <code>--nama: nilai</code> di <code>:root</code>, lalu dipakai <code>var(--nama)</code>. Spesifisitas menentukan aturan mana yang menang: id (1,0,0) &gt; class (0,1,0) &gt; tag (0,0,1). Hindari <code>!important</code>; naikkan spesifisitas dengan selector yang lebih tepat.</p>",
    kode=css_dok('  <nav id="menu"><a href="#">Beranda</a> <a href="#" class="aktif">Produk</a></nav>', "    :root { --utama: #415a77; --aksen: #b55a7c; }\n    #menu a { color: var(--utama); }\n    #menu a.aktif { color: var(--aksen); }   /* id + tag + class menang atas id + tag */"),
    kunci="Ubah warna di satu tempat (:root) dan seluruh situs ikut berubah. #menu a.aktif lebih spesifik daripada #menu a."),
  langkah=[
    C("css-lanjut-1", "Tema dengan variabel", 1,
      "Definisikan di <code>:root</code> variabel <code>--utama: #415a77</code> dan <code>--latar: #f4f1de</code>. Gunakan <code>var()</code> untuk latar <code>body</code> dan latar <code>button</code>.",
      '  <button>Simpan</button>',
      "    :root { --utama: #415a77; --latar: #f4f1de; }\n    body { background-color: var(--latar); }\n    button { background-color: var(--utama); }",
      [("--utama didefinisikan #415a77", "gaya('html', '--utama').toLowerCase() === '#415a77'"),
       ("--latar didefinisikan #f4f1de", "gaya('html', '--latar').toLowerCase() === '#f4f1de'"),
       ("body memakai --latar", "gaya('body', 'background-color') === 'rgb(244, 241, 222)' && /var\\(--latar\\)/.test(d.querySelector('style').textContent)"),
       ("button memakai --utama", "gaya('button', 'background-color') === 'rgb(65, 90, 119)' && /var\\(--utama\\)/.test(d.querySelector('style').textContent)")],
      ["Variabel ditulis di :root { --utama: #415a77; }.", "Dipakai dengan var(--utama)."],
      "Variabel CSS adalah dasar tema gelap/terang: cukup ganti nilainya, semua komponen ikut."),
    C("css-lanjut-2", "Menang tanpa !important", 2,
      "CSS awal membuat semua link menu merah dengan <code>#menu a</code>. Tambahkan aturan agar link <code>.aktif</code> berwarna <code>#2563eb</code> dan tebal, <b>tanpa</b> <code>!important</code> dan tanpa mengubah aturan yang sudah ada.",
      '  <nav id="menu"><a href="#">Beranda</a> <a href="#" class="aktif">Produk</a> <a href="#">Kontak</a></nav>',
      "    #menu a { color: #dc2626; }\n    #menu a.aktif { color: #2563eb; font-weight: 700; }",
      [("Link .aktif berwarna #2563eb", "gaya('.aktif', 'color') === 'rgb(37, 99, 235)'"),
       ("Link .aktif tebal", "gaya('.aktif', 'font-weight') === '700'"),
       ("Link lain tetap merah", "gaya('#menu a:not(.aktif)', 'color') === 'rgb(220, 38, 38)'"),
       ("Tidak memakai !important", "!/!important/.test(d.querySelector('style').textContent)"),
       ("Aturan #menu a tetap ada", "/#menu\\s+a\\s*\\{[^}]*#dc2626/.test(d.querySelector('style').textContent)")],
      ["Coba dulu .aktif { color: ... } dan lihat: ia kalah karena #menu a punya id.", "Selector #menu a.aktif punya spesifisitas lebih tinggi dari #menu a."],
      "Memahami spesifisitas mencegah kebiasaan menempelkan !important, yang membuat CSS sulit dirawat. Di Odoo, menimpa gaya bawaan juga memakai selector yang lebih spesifik.",
      css_awal="    #menu a { color: #dc2626; }\n    /* tambahkan aturanmu di bawah */"),
  ])

# ---------------------------------------------------------------- 8. selektor lanjut
studi(id="css-selektor", topik="css", setelah="selektor", judul="Selector atribut dan pseudo", bahasa="web",
  contoh=dict(judul="Contoh: [atribut], :nth-child, ::before",
    penjelasan="<p><code>a[href^=\"https\"]</code> = link yang href-nya diawali https. <code>li:nth-child(odd)</code> = item ganjil. <code>::before</code> menyisipkan isi dekoratif lewat <code>content</code>.</p>",
    kode=css_dok('  <ul><li>Satu</li><li>Dua</li><li>Tiga</li></ul>\n  <a href="https://odoo.com">Odoo</a> <a href="/lokal">Lokal</a>\n  <p class="wajib">Nama</p>', "    li:nth-child(odd) { background: #eef; }\n    a[href^=\"https\"] { color: green; }\n    .wajib::after { content: \" *\"; color: red; }"),
    kunci="[attr=nilai] persis, [attr^=awal], [attr$=akhir], [attr*=mengandung]. ::before/::after butuh content."),
  langkah=[
    C("css-sel-1", "Link luar dan input email", 1,
      "Link yang href-nya diawali <code>https</code> berwarna <code>#15803d</code>, link lain tidak. Input <code>type=\"email\"</code> diberi border <code>2px solid #415a77</code>.",
      '  <a href="https://www.odoo.com">Odoo</a>\n  <a href="/tentang">Tentang</a>\n  <input type="email" placeholder="Email">\n  <input type="text" placeholder="Nama">',
      "    a[href^=\"https\"] { color: #15803d; }\n    input[type=\"email\"] { border: 2px solid #415a77; }",
      [("Link https hijau", "gaya('a[href^=\"https\"]', 'color') === 'rgb(21, 128, 61)'"),
       ("Link lokal tidak hijau", "gaya('a[href=\"/tentang\"]', 'color') !== 'rgb(21, 128, 61)'"),
       ("Input email border 2px #415a77", "gaya('input[type=email]', 'border-top-width') === '2px' && gaya('input[type=email]', 'border-top-color') === 'rgb(65, 90, 119)'"),
       ("Input teks tidak ikut", "gaya('input[type=text]', 'border-top-color') !== 'rgb(65, 90, 119)'")],
      ["Selector atribut: a[href^=\"https\"] (^= artinya 'diawali').", "input[type=\"email\"] hanya mengenai input email."],
      "Selector atribut menghindari menambah class satu per satu ke banyak elemen."),
    C("css-sel-2", "Tabel belang dan tanda wajib", 2,
      "Baris ganjil <code>tbody tr</code> berlatar <code>#f1f5f9</code> (baris genap tidak), baris pertama <code>tbody</code> tebal memakai <code>:first-child</code>, dan setiap <code>label.wajib</code> mendapat tanda <code>\" *\"</code> berwarna merah lewat <code>::after</code>.",
      '  <table><tbody><tr><td>Ani</td></tr><tr><td>Budi</td></tr><tr><td>Cita</td></tr><tr><td>Dodi</td></tr></tbody></table>\n  <label class="wajib">Nama</label> <label>Catatan</label>',
      "    tbody tr:nth-child(odd) { background-color: #f1f5f9; }\n    tbody tr:first-child { font-weight: 700; }\n    label.wajib::after { content: \" *\"; color: red; }",
      [("Baris ganjil berlatar #f1f5f9", "gaya($$('tbody tr')[0], 'background-color') === 'rgb(241, 245, 249)' && gaya($$('tbody tr')[2], 'background-color') === 'rgb(241, 245, 249)'"),
       ("Baris genap tidak", "gaya($$('tbody tr')[1], 'background-color') !== 'rgb(241, 245, 249)'"),
       ("Baris pertama tebal", "gaya($$('tbody tr')[0], 'font-weight') === '700' && gaya($$('tbody tr')[1], 'font-weight') !== '700'"),
       ("label.wajib::after berisi \" *\" merah", "w.getComputedStyle($('label.wajib'), '::after').content === '\" *\"' && w.getComputedStyle($('label.wajib'), '::after').color === 'rgb(255, 0, 0)'"),
       ("label biasa tanpa tanda", "w.getComputedStyle($$('label')[1], '::after').content === 'none'")],
      ["nth-child(odd) = ganjil (1, 3, 5). first-child = anak pertama.", "::after { content: \" *\"; color: red; } — content wajib ada agar pseudo-element muncul."],
      "Tanda wajib lewat ::after menjaga HTML tetap bersih; Odoo memakai teknik serupa untuk menandai field required."),
  ])

# ---------------------------------------------------------------- 9. satuan
studi(id="css-satuan", topik="css", setelah="satuan", judul="Satuan relatif: rem, %, vw", bahasa="web",
  contoh=dict(judul="Contoh: rem dan persen",
    penjelasan="<p><code>rem</code> mengikuti ukuran huruf <code>html</code> (bawaan 16px), jadi 2rem = 32px. <code>%</code> mengikuti induk. <code>vw</code> = persen lebar layar. <code>clamp(min, ideal, max)</code> membatasi nilai yang fleksibel.</p>",
    kode=css_dok('  <div class="wadah"><h1>Judul</h1><p>Isi</p></div>', "    html { font-size: 16px; }\n    h1 { font-size: 2rem; }\n    .wadah { width: 80%; max-width: 600px; margin: 0 auto; }\n    p { font-size: clamp(14px, 2vw, 20px); }"),
    kunci="rem untuk ukuran huruf dan jarak yang konsisten; % untuk lebar relatif; max-width agar tidak terlalu lebar."),
  langkah=[
    C("css-satuan-1", "Ukuran dengan rem", 1,
      "Dengan <code>html</code> berukuran <code>16px</code>, buat <code>h1</code> <code>2.5rem</code>, <code>p</code> <code>1.125rem</code>, dan <code>.kartu</code> padding <code>1.5rem</code>. Gunakan satuan rem di CSS.",
      '  <h1>Judul</h1>\n  <div class="kartu"><p>Isi kartu</p></div>',
      "    html { font-size: 16px; }\n    h1 { font-size: 2.5rem; }\n    p { font-size: 1.125rem; }\n    .kartu { padding: 1.5rem; }",
      [("h1 = 40px", "gaya('h1', 'font-size') === '40px'"),
       ("p = 18px", "gaya('p', 'font-size') === '18px'"),
       (".kartu padding 24px", "gaya('.kartu', 'padding-top') === '24px'"),
       ("Ditulis dengan satuan rem", "(d.querySelector('style').textContent.match(/rem/g) || []).length >= 3")],
      ["2.5 × 16 = 40px; 1.125 × 16 = 18px; 1.5 × 16 = 24px.", "Tulis angkanya dalam rem, browser yang menghitung px-nya."],
      "Jika pengguna memperbesar ukuran huruf di browser, ukuran rem ikut membesar sedangkan px tidak: lebih ramah aksesibilitas."),
    C("css-satuan-2", "Wadah fleksibel", 2,
      "Buat <code>.wadah</code> selebar <code>90%</code> dari induk tetapi maksimal <code>720px</code>, terpusat; <code>.sidebar</code> di dalamnya selebar <code>25%</code> dari wadah; dan <code>h1</code> memakai <code>clamp(24px, 5vw, 40px)</code>.",
      '  <div class="wadah"><aside class="sidebar">Menu</aside><h1>Judul responsif</h1></div>',
      "    body { margin: 0; }\n    .wadah { width: 90%; max-width: 720px; margin: 0 auto; }\n    .sidebar { width: 25%; }\n    h1 { font-size: clamp(24px, 5vw, 40px); }",
      [(".wadah dibatasi 720px pada layar 1000px", "Math.round($('.wadah').getBoundingClientRect().width) === 720"),
       (".wadah terpusat", "Math.abs($('.wadah').getBoundingClientRect().left - (w.innerWidth - $('.wadah').getBoundingClientRect().right)) < 2"),
       (".sidebar 25% dari wadah", "Math.abs($('.sidebar').getBoundingClientRect().width - $('.wadah').getBoundingClientRect().width * 0.25) < 1"),
       ("h1 memakai clamp", "/clamp\\(\\s*24px\\s*,\\s*5vw\\s*,\\s*40px\\s*\\)/.test(d.querySelector('style').textContent)"),
       ("h1 di layar 1000px = 40px (dibatasi maksimum)", "gaya('h1', 'font-size') === '40px'")],
      ["width: 90% dengan max-width: 720px; di layar 1000px, 90% = 900px sehingga max-width yang menang.", "5vw di layar 1000px = 50px, lalu clamp membatasinya ke 40px."],
      "Pasangan width % + max-width adalah pola paling umum untuk wadah konten yang nyaman dibaca di semua layar."),
  ])

# ---------------------------------------------------------------- 10. animasi
studi(id="css-animasi", topik="css", setelah="animasi", judul="Transition dan @keyframes", bahasa="web",
  contoh=dict(judul="Contoh: transisi hover dan animasi muncul",
    penjelasan="<p><code>transition</code> menghaluskan perubahan (misalnya saat hover). <code>transform: translateY(-4px)</code> menggeser tanpa mengubah tata letak. <code>@keyframes</code> mendefinisikan animasi yang dipakai lewat <code>animation</code>. Hormati pengguna yang memilih <code>prefers-reduced-motion</code>.</p>",
    kode=css_dok('  <div class="kartu">Arahkan kursor ke sini</div>', "    .kartu { padding: 24px; background: #e8e8e8; transition: transform .3s ease; animation: muncul .6s ease-out; }\n    .kartu:hover { transform: translateY(-4px); }\n    @keyframes muncul { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }\n    @media (prefers-reduced-motion: reduce) { .kartu { animation: none; transition: none; } }"),
    kunci="Animasikan transform dan opacity (ringan). Selalu sediakan prefers-reduced-motion."),
  langkah=[
    C("css-anim-1", "Kartu terangkat saat hover", 1,
      "Beri <code>.kartu</code> <code>transition</code> pada <code>transform</code> selama <code>0.3s</code>, dan aturan <code>.kartu:hover</code> dengan <code>transform: translateY(-6px)</code>.",
      '  <div class="kartu">Produk</div>',
      "    .kartu { transition: transform 0.3s ease; }\n    .kartu:hover { transform: translateY(-6px); }",
      [("transition-property memuat transform", "/transform|all/.test(gaya('.kartu', 'transition-property'))"),
       ("Durasi 0.3s", "gaya('.kartu', 'transition-duration') === '0.3s'"),
       ("Ada aturan .kartu:hover", ADA_HOVER(".kartu")),
       ("Hover memakai translateY(-6px)", "[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.selectorText && r.selectorText.includes(':hover') && /translateY\\(-6px\\)/.test(r.style.transform))")],
      ["transition ditulis di keadaan normal, bukan di :hover, supaya halus saat masuk dan keluar.", "transform: translateY(-6px) menggeser 6px ke atas."],
      "transform tidak memicu perhitungan ulang tata letak, sehingga animasinya ringan bahkan di HP."),
    C("css-anim-2", "Animasi notifikasi", 2,
      "Buat <code>@keyframes geser</code> dari <code>opacity: 0</code> ke <code>opacity: 1</code>. Pasang ke <code>.notif</code> dengan durasi <code>0.5s</code> dan <code>animation-fill-mode: both</code>. Tambahkan <code>@media (prefers-reduced-motion: reduce)</code> yang mematikan animasi <code>.notif</code>.",
      '  <div class="notif">Kode lulus semua tes!</div>',
      "    @keyframes geser { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: none; } }\n    .notif { animation: geser 0.5s ease both; }\n    @media (prefers-reduced-motion: reduce) { .notif { animation: none; } }",
      [("Ada @keyframes geser", "[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.type === 7 && r.name === 'geser')"),
       ("Keyframes dari opacity 0 ke 1", "[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.type === 7 && r.name === 'geser' && [...r.cssRules].some(k => /0%|from/.test(k.keyText) && k.style.opacity === '0') && [...r.cssRules].some(k => /100%|to/.test(k.keyText) && k.style.opacity === '1'))"),
       (".notif memakai animasi geser 0.5s", "gaya('.notif', 'animation-name') === 'geser' && gaya('.notif', 'animation-duration') === '0.5s'"),
       ("fill-mode both", "gaya('.notif', 'animation-fill-mode') === 'both'"),
       ("Ada prefers-reduced-motion yang mematikan animasi", MEDIA + ".some(r => /prefers-reduced-motion/.test(r.conditionText || r.media.mediaText) && [...r.cssRules].some(x => x.selectorText === '.notif' && /none/.test(x.style.animation || x.style.animationName)))")],
      ["@keyframes geser { from { opacity: 0; } to { opacity: 1; } } lalu .notif { animation: geser 0.5s ease both; }", "fill-mode both membuat keadaan awal dan akhir animasi tetap berlaku."],
      "Animasi kecil yang bisa dimatikan pengguna adalah praktik aksesibilitas yang diharapkan di proyek profesional."),
  ])

# ---------------------------------------------------------------- 11. grid lanjut
studi(id="css-gridlanjut", topik="css", setelah="gridlanjut", judul="Grid areas dan auto-fit", bahasa="web",
  contoh=dict(judul="Contoh: grid-template-areas",
    penjelasan="<p><code>grid-template-areas</code> menggambar tata letak dengan nama: setiap string satu baris. Anak diberi <code>grid-area: nama</code>. <code>repeat(auto-fit, minmax(200px, 1fr))</code> membuat jumlah kolom menyesuaikan lebar layar tanpa media query.</p>",
    kode=css_dok('  <div class="tata"><header>Header</header><aside>Menu</aside><main>Isi</main><footer>Kaki</footer></div>', "    .tata { display: grid; grid-template-columns: 200px 1fr; grid-template-areas: \"kepala kepala\" \"samping isi\" \"kaki kaki\"; gap: 8px; }\n    header { grid-area: kepala; } aside { grid-area: samping; } main { grid-area: isi; } footer { grid-area: kaki; }\n    .tata > * { background: #e8e8e8; padding: 12px; }"),
    kunci="Nama area yang diulang di satu baris = elemen melebar ke beberapa kolom."),
  langkah=[
    C("css-gl-1", "Tata letak dashboard", 2,
      "Buat <code>.tata</code> grid 2 kolom (<code>220px 1fr</code>) dengan area: baris 1 <code>kepala kepala</code>, baris 2 <code>samping isi</code>, baris 3 <code>kaki kaki</code>. Hubungkan header, aside, main, footer ke area itu.",
      '  <div class="tata"><header>Header</header><aside>Menu</aside><main>Dashboard</main><footer>Kaki</footer></div>',
      "    .tata { display: grid; grid-template-columns: 220px 1fr; grid-template-areas: \"kepala kepala\" \"samping isi\" \"kaki kaki\"; }\n    header { grid-area: kepala; }\n    aside { grid-area: samping; }\n    main { grid-area: isi; }\n    footer { grid-area: kaki; }",
      [("Kolom pertama 220px", "gaya('.tata', 'grid-template-columns').split(' ')[0] === '220px'"),
       ("Area sesuai gambar", "gaya('.tata', 'grid-template-areas').replace(/\\s+/g, ' ') === '\"kepala kepala\" \"samping isi\" \"kaki kaki\"'"),
       ("header melebar 2 kolom", "Math.abs($('header').getBoundingClientRect().width - $('.tata').getBoundingClientRect().width) < 1"),
       ("aside di kiri main pada baris yang sama", "Math.round($('aside').getBoundingClientRect().top) === Math.round($('main').getBoundingClientRect().top) && $('aside').getBoundingClientRect().left < $('main').getBoundingClientRect().left"),
       ("footer di bawah main", "$('footer').getBoundingClientRect().top >= $('main').getBoundingClientRect().bottom - 1")],
      ["grid-template-areas ditulis sebagai beberapa string, satu per baris.", "Anak: header { grid-area: kepala; } dan seterusnya."],
      "Tata letak dashboard seperti ini (header, sidebar, isi, footer) adalah kerangka hampir semua aplikasi admin, termasuk Odoo."),
    C("css-gl-2", "Grid kartu otomatis", 2,
      "Buat <code>.produk</code> grid dengan <code>repeat(auto-fit, minmax(200px, 1fr))</code> dan gap <code>16px</code>. Pada iframe 1000px hasilnya harus ≥ 3 kolom, dan semua kartu sama lebar.",
      '  <div class="produk"><div>A</div><div>B</div><div>C</div><div>D</div><div>E</div></div>',
      "    .produk { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }",
      [("Memakai auto-fit dan minmax(200px, 1fr)", "/repeat\\(\\s*auto-fit\\s*,\\s*minmax\\(\\s*200px\\s*,\\s*1fr\\s*\\)\\s*\\)/.test(d.querySelector('style').textContent)"),
       ("≥ 3 kolom pada lebar 1000px", "gaya('.produk', 'grid-template-columns').split(' ').length >= 3"),
       ("Setiap kolom ≥ 200px", "gaya('.produk', 'grid-template-columns').split(' ').every(x => parseFloat(x) >= 200)"),
       ("gap 16px", "gaya('.produk', 'column-gap') === '16px'")],
      ["auto-fit membuat kolom sebanyak yang muat; minmax menjaga lebar minimal 200px.", "Tanpa media query pun, di HP grid otomatis menjadi 1 kolom."],
      "Satu baris CSS ini menggantikan beberapa media query untuk grid kartu produk."),
  ])

# ---------------------------------------------------------------- 12. arsitektur
studi(id="css-arsitektur", topik="css", setelah="arsitektur", judul="Reset dan penamaan BEM", bahasa="web",
  contoh=dict(judul="Contoh: reset ringan dan BEM",
    penjelasan="<p>Reset ringan menyamakan perilaku browser: <code>box-sizing</code>, margin body, gambar responsif. BEM menamai class dengan pola <code>blok__elemen--modifier</code>: <code>.kartu</code>, <code>.kartu__judul</code>, <code>.kartu--unggulan</code>.</p>",
    kode=css_dok('  <article class="kartu kartu--unggulan">\n    <h3 class="kartu__judul">Kopi</h3>\n    <p class="kartu__harga">Rp 18.000</p>\n  </article>', "    *, *::before, *::after { box-sizing: border-box; }\n    body { margin: 0; }\n    img { max-width: 100%; display: block; }\n    .kartu { padding: 16px; border: 1px solid #ccc; }\n    .kartu__judul { margin: 0 0 8px; }\n    .kartu--unggulan { border-color: gold; }"),
    kunci="BEM: __ untuk bagian dari blok, -- untuk variasi. Class datar (spesifisitas rendah) mudah ditimpa."),
  langkah=[
    C("css-ark-1", "Reset ringan", 1,
      "Tulis reset: semua elemen termasuk <code>::before</code>/<code>::after</code> memakai <code>box-sizing: border-box</code>; <code>body</code> tanpa margin; <code>img</code> <code>max-width: 100%</code> dan <code>display: block</code>.",
      '  <div class="isi"><img src="a.jpg" alt="Contoh"></div>',
      "    *, *::before, *::after { box-sizing: border-box; }\n    body { margin: 0; }\n    img { max-width: 100%; display: block; }",
      [("Semua elemen border-box", "gaya('.isi', 'box-sizing') === 'border-box' && gaya('body', 'box-sizing') === 'border-box'"),
       ("::before juga border-box", "w.getComputedStyle($('.isi'), '::before').boxSizing === 'border-box'"),
       ("body margin 0", "gaya('body', 'margin-top') === '0px' && gaya('body', 'margin-left') === '0px'"),
       ("img max-width 100% dan block", "gaya('img', 'max-width') === '100%' && gaya('img', 'display') === 'block'")],
      ["Selector universal: *, *::before, *::after { ... }.", "Tiga aturan saja."],
      "Reset ini dipakai hampir semua proyek modern (termasuk tema Bootstrap) agar tata letak konsisten di semua browser."),
    C("css-ark-2", "Komponen kartu BEM", 2,
      "HTML sudah memakai class BEM. Tulis CSS hanya dengan selector class tunggal (tanpa id, tanpa tag): <code>.kartu</code> padding 16px; <code>.kartu__judul</code> ukuran 20px; <code>.kartu__harga</code> warna <code>#15803d</code>; <code>.kartu--unggulan</code> border <code>2px solid #d4a017</code>.",
      '  <article class="kartu"><h3 class="kartu__judul">Teh</h3><p class="kartu__harga">Rp 6.000</p></article>\n  <article class="kartu kartu--unggulan"><h3 class="kartu__judul">Kopi</h3><p class="kartu__harga">Rp 18.000</p></article>',
      "    .kartu { padding: 16px; }\n    .kartu__judul { font-size: 20px; }\n    .kartu__harga { color: #15803d; }\n    .kartu--unggulan { border: 2px solid #d4a017; }",
      [(".kartu padding 16px", "$$('.kartu').every(k => gaya(k, 'padding-top') === '16px')"),
       (".kartu__judul 20px", "$$('.kartu__judul').every(k => gaya(k, 'font-size') === '20px')"),
       (".kartu__harga hijau", "$$('.kartu__harga').every(k => gaya(k, 'color') === 'rgb(21, 128, 61)')"),
       ("Hanya kartu unggulan yang ber-border emas", "gaya('.kartu--unggulan', 'border-top-color') === 'rgb(212, 160, 23)' && gaya('.kartu:not(.kartu--unggulan)', 'border-top-style') === 'none'"),
       ("Selector hanya class tunggal (tanpa id/tag/keturunan)", "[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.selectorText).every(r => /^\\.[\\w-]+$/.test(r.selectorText))")],
      ["Setiap aturan satu class: .kartu__judul { ... }, bukan .kartu h3 { ... }.", "Modifier ditulis sebagai class tambahan di HTML: class=\"kartu kartu--unggulan\"."],
      "Selector class tunggal membuat spesifisitas rata dan komponen mudah dipindah tanpa efek samping."),
  ])

# ---------------------------------------------------------------- 🏁 CSS bab 1–5
TOKO_BODY = '''  <header class="bar">
    <b class="logo">Kopi Kenar</b>
    <nav><ul class="menu"><li><a href="#produk">Produk</a></li><li><a href="#tentang">Tentang</a></li><li><a href="#pesan">Pesan</a></li></ul></nav>
  </header>
  <main>
    <section id="produk" class="galeri">
      <article class="kartu"><h3>Kopi Susu</h3><p class="harga">Rp 18.000</p></article>
      <article class="kartu"><h3>Es Teh</h3><p class="harga">Rp 6.000</p></article>
      <article class="kartu"><h3>Roti Bakar</h3><p class="harga">Rp 15.000</p></article>
    </section>
  </main>'''
TOKO_A = "    body { margin: 0; font-family: Arial, sans-serif; color: #0d1b2a; }\n    .bar { display: flex; justify-content: space-between; align-items: center; padding: 12px 24px; background-color: #0d1b2a; }\n    .logo { color: #f4f1de; }\n    .menu { display: flex; gap: 16px; list-style: none; margin: 0; padding: 0; }\n    .menu a { color: #f4f1de; text-decoration: none; }"
TOKO_B = "\n    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 24px; }\n    .kartu { box-sizing: border-box; padding: 16px; border: 1px solid #d4c4a8; border-radius: 8px; }\n    .harga { font-weight: 700; color: #b55a7c; }"
TOKO_C = "\n    .bar { position: sticky; top: 0; z-index: 10; }\n    @media (max-width: 600px) {\n      .galeri { grid-template-columns: 1fr; }\n      .bar { flex-direction: column; }\n    }"

def ujian_css(id, setelah, judul, cakupan, cerita, body, bagian):
    langkah, css_lalu = [], ""
    for n, b in enumerate(bagian):
        css_baru = css_lalu + b["css"]
        L_ = W(f"{id}-{'abc'[n]}", f"Bagian {'ABC'[n]}: {b['judul']}", min(3, n + 2), b["soal"],
               css_dok(body, css_baru), css_dok(body, css_lalu + "\n    /* tulis CSS bagian " + "ABC"[n] + " di sini */" if n else "    /* tulis CSS-mu di sini */"),
               b["tes"], b["petunjuk"], b["jelas"],
               cerita=cerita if n == 0 else f"Lanjutan bagian {'AB'[n - 1]}: halaman dan CSS-mu yang sudah lulus otomatis dipakai.")
        if n:
            L_["awal_baru"] = f"<!-- Bagian {'ABC'[n]}: tambahkan aturan di dalam <style> di atas -->\n"
        langkah.append(L_)
        css_lalu = css_baru
    studi(id=id, topik="css", setelah=setelah, judul=judul, ujian=True, cakupan=cakupan, bahasa="web",
          contoh=dict(PANDUAN, kode=css_dok(body, "    /* Bagian A, B, C menambah aturan di sini */"), penjelasan=PANDUAN["penjelasan"].replace("fungsi baru di bawahnya", "aturan CSS baru di dalam &lt;style&gt;")),
          langkah=langkah)

ujian_css("uji-css-1", "posisi", "Menata landing page toko", "Bab 1–5: selector & warna, tipografi, box model, flexbox, grid & position",
  "Landing page Kopi Kenar dari Coding Test HTML sudah jadi, tapi masih polos. HTML-nya sudah tersedia; tugasmu hanya CSS.", TOKO_BODY,
  [dict(judul="Header & navigasi", css=TOKO_A,
     soal="Atur <code>body</code> tanpa margin dengan huruf sans-serif. <code>.bar</code>: flex, logo kiri dan menu kanan (<code>space-between</code>), terpusat vertikal, latar <code>#0d1b2a</code>. <code>.menu</code>: flex dengan gap 16px tanpa titik daftar, link berwarna <code>#f4f1de</code> tanpa garis bawah.",
     tes=[("body margin 0 dan sans-serif", "gaya('body', 'margin-top') === '0px' && /sans-serif/.test(gaya('body', 'font-family'))"),
          (".bar flex, space-between, align center", "gaya('.bar', 'display') === 'flex' && gaya('.bar', 'justify-content') === 'space-between' && gaya('.bar', 'align-items') === 'center'"),
          (".bar latar #0d1b2a", "gaya('.bar', 'background-color') === 'rgb(13, 27, 42)'"),
          (".menu flex gap 16px tanpa titik", "gaya('.menu', 'display') === 'flex' && gaya('.menu', 'column-gap') === '16px' && gaya('.menu', 'list-style-type') === 'none'"),
          ("Link menu #f4f1de tanpa garis bawah", "gaya('.menu a', 'color') === 'rgb(244, 241, 222)' && gaya('.menu a', 'text-decoration-line') === 'none'")],
     petunjuk=["Gabungan bab 1 (warna), 2 (huruf), dan 4 (flexbox).", "Ada dua wadah flex: .bar (logo + nav) dan .menu (item menu)."],
     jelas="Header gelap dengan menu flex adalah pola navbar paling umum."),
   dict(judul="Kartu produk dalam grid", css=TOKO_B,
     soal="<code>.galeri</code>: grid 3 kolom sama lebar, gap 20px, padding 24px. <code>.kartu</code>: <code>border-box</code>, padding 16px, border <code>1px solid #d4c4a8</code>, sudut 8px. <code>.harga</code>: tebal dan berwarna <code>#b55a7c</code>.",
     tes=[(".galeri grid 3 kolom sama lebar", "gaya('.galeri', 'display') === 'grid' && gaya('.galeri', 'grid-template-columns').split(' ').length === 3 && (c => Math.max(...c) - Math.min(...c) < 1)(gaya('.galeri', 'grid-template-columns').split(' ').map(parseFloat))"),
          (".galeri gap 20px, padding 24px", "gaya('.galeri', 'column-gap') === '20px' && gaya('.galeri', 'padding-top') === '24px'"),
          (".kartu border-box, padding 16px, sudut 8px", "gaya('.kartu', 'box-sizing') === 'border-box' && gaya('.kartu', 'padding-top') === '16px' && gaya('.kartu', 'border-top-left-radius') === '8px'"),
          (".kartu border 1px #d4c4a8", "gaya('.kartu', 'border-top-width') === '1px' && gaya('.kartu', 'border-top-color') === 'rgb(212, 196, 168)'"),
          (".harga tebal dan #b55a7c", "gaya('.harga', 'font-weight') === '700' && gaya('.harga', 'color') === 'rgb(181, 90, 124)'"),
          ("Header bagian A tetap flex", "gaya('.bar', 'display') === 'flex'")],
     petunjuk=["Gabungan bab 3 (box model) dan bab 5 (grid).", "repeat(3, 1fr) untuk tiga kolom sama lebar."],
     jelas="Grid untuk galeri, box model untuk kartu: dua alat yang saling melengkapi."),
   dict(judul="Header lengket & responsif", css=TOKO_C,
     soal="Buat <code>.bar</code> menempel di atas (<code>sticky</code>, <code>top: 0</code>, z-index ≥ 10). Tambahkan <code>@media (max-width: 600px)</code>: galeri menjadi 1 kolom dan <code>.bar</code> menjadi kolom (<code>flex-direction: column</code>).",
     tes=[(".bar sticky top 0 z-index ≥ 10", "gaya('.bar', 'position') === 'sticky' && gaya('.bar', 'top') === '0px' && parseInt(gaya('.bar', 'z-index')) >= 10"),
          ("Ada @media max-width 600px", MEDIA + ".some(r => /max-width:\\s*600px/.test(r.conditionText || r.media.mediaText))"),
          ("Di HP .galeri 1 kolom", MEDIA + ".some(r => [...r.cssRules].some(x => x.selectorText === '.galeri' && x.style.gridTemplateColumns.replace(/\\s/g, '') === '1fr'))"),
          ("Di HP .bar menjadi kolom", MEDIA + ".some(r => [...r.cssRules].some(x => x.selectorText === '.bar' && x.style.flexDirection === 'column'))"),
          ("Di layar lebar tetap 3 kolom", "gaya('.galeri', 'grid-template-columns').split(' ').length === 3")],
     petunjuk=["position: sticky; top: 0; z-index: 10; ditambahkan ke .bar.", "Isi @media berupa aturan biasa: .galeri { ... } dan .bar { ... }."],
     jelas="Halaman yang sama kini rapi di laptop dan HP. Inilah alur kerja frontend sungguhan: HTML semantik dulu, lalu CSS bertahap."),
  ])

# ---------------------------------------------------------------- 🏁 CSS bab 6–10
UI_BODY = '''  <button class="tombol">Beli sekarang</button>
  <a href="https://www.odoo.com" class="tautan">Dokumentasi</a>
  <ul class="daftar"><li>Kopi</li><li>Teh</li><li>Roti</li><li>Donat</li></ul>
  <div class="notif">Pesanan tersimpan</div>'''
UI_A = "\n    :root { --utama: #415a77; --gelap: #0d1b2a; --radius: 0.5rem; }\n    .tombol { background-color: var(--utama); color: white; border: 0; padding: 0.75rem 1.25rem; border-radius: var(--radius); cursor: pointer; transition: background-color 0.2s ease, transform 0.2s ease; }\n    .tombol:hover { background-color: var(--gelap); transform: translateY(-2px); }"
UI_B = "\n    a[href^=\"https\"]::after { content: \" ↗\"; }\n    .daftar li:nth-child(even) { background-color: #f1f5f9; }"
UI_C = "\n    @keyframes muncul { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }\n    .notif { animation: muncul 0.4s ease-out both; }\n    @media (prefers-reduced-motion: reduce) { .tombol, .notif { transition: none; animation: none; } }"

ujian_css("uji-css-2", "animasi", "Komponen UI interaktif", "Bab 6–10: dekorasi & hover, variabel & spesifisitas, selector lanjut, satuan, animasi",
  "Tim produk meminta komponen UI kecil yang konsisten: tombol bertema, tautan keluar bertanda, daftar belang, dan notifikasi beranimasi.", UI_BODY,
  [dict(judul="Tombol bertema", css=UI_A,
     soal="Definisikan di <code>:root</code>: <code>--utama: #415a77</code>, <code>--gelap: #0d1b2a</code>, <code>--radius: 0.5rem</code>. <code>.tombol</code> berlatar <code>var(--utama)</code>, sudut <code>var(--radius)</code>, padding dalam rem, kursor pointer, dan transisi. <code>.tombol:hover</code> berlatar <code>var(--gelap)</code> dan naik sedikit (<code>translateY</code>).",
     tes=[("Variabel --utama, --gelap, --radius ada", "gaya('html', '--utama') === '#415a77' && gaya('html', '--gelap') === '#0d1b2a' && gaya('html', '--radius') === '0.5rem'"),
          (".tombol latar dari --utama dan sudut 8px", "gaya('.tombol', 'background-color') === 'rgb(65, 90, 119)' && gaya('.tombol', 'border-top-left-radius') === '8px'"),
          ("Padding memakai rem", "/\\.tombol\\s*\\{[^}]*padding:[^;]*rem/.test(d.querySelector('style').textContent)"),
          ("Kursor pointer dan ada transisi", "gaya('.tombol', 'cursor') === 'pointer' && gaya('.tombol', 'transition-duration') !== '0s'"),
          (".tombol:hover memakai var(--gelap) dan translateY", "[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.selectorText === '.tombol:hover' && /var\\(--gelap\\)/.test(r.style.backgroundColor) && /translateY/.test(r.style.transform))")],
     petunjuk=["Gabungan bab 6 (hover), 7 (variabel), 9 (rem), 10 (transition).", "var(--radius) = 0.5rem = 8px pada html 16px."],
     jelas="Dengan variabel, mengganti warna merek cukup di satu tempat."),
   dict(judul="Tautan keluar & daftar belang", css=UI_B,
     soal="Tambahkan panah <code>\" ↗\"</code> setelah setiap link yang href-nya diawali <code>https</code> (pakai selector atribut + <code>::after</code>). Baris <b>genap</b> <code>.daftar li</code> berlatar <code>#f1f5f9</code>.",
     tes=[("Link https diberi ::after \" ↗\"", "w.getComputedStyle($('a[href^=\"https\"]'), '::after').content === '\" ↗\"'"),
          ("Item genap berlatar #f1f5f9", "gaya($$('.daftar li')[1], 'background-color') === 'rgb(241, 245, 249)' && gaya($$('.daftar li')[3], 'background-color') === 'rgb(241, 245, 249)'"),
          ("Item ganjil tidak", "gaya($$('.daftar li')[0], 'background-color') !== 'rgb(241, 245, 249)'"),
          ("Tombol bagian A tetap bertema", "gaya('.tombol', 'background-color') === 'rgb(65, 90, 119)'")],
     petunjuk=["a[href^=\"https\"]::after { content: \" ↗\"; }", "nth-child(even) = genap."],
     jelas="Selector atribut dan pseudo-element menambah petunjuk visual tanpa menyentuh HTML."),
   dict(judul="Notifikasi beranimasi", css=UI_C,
     soal="Buat <code>@keyframes muncul</code> (opacity 0 → 1 dan sedikit geser), pasang ke <code>.notif</code> 0.4s dengan fill-mode <code>both</code>. Tambahkan <code>@media (prefers-reduced-motion: reduce)</code> yang mematikan transisi <code>.tombol</code> dan animasi <code>.notif</code>.",
     tes=[("Ada @keyframes muncul dari opacity 0 ke 1", "[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.type === 7 && r.name === 'muncul' && [...r.cssRules].some(k => k.style.opacity === '0') && [...r.cssRules].some(k => k.style.opacity === '1'))"),
          (".notif animasi muncul 0.4s both", "gaya('.notif', 'animation-name') === 'muncul' && gaya('.notif', 'animation-duration') === '0.4s' && gaya('.notif', 'animation-fill-mode') === 'both'"),
          ("prefers-reduced-motion mematikan transisi tombol dan animasi notif", MEDIA + ".some(r => /prefers-reduced-motion/.test(r.conditionText || r.media.mediaText) && [...r.cssRules].some(x => /\\.tombol/.test(x.selectorText) && /none/.test(x.style.transition || x.style.transitionProperty)) && [...r.cssRules].some(x => /\\.notif/.test(x.selectorText) && /none/.test(x.style.animation || x.style.animationName)))"),
          ("Bagian A dan B tetap berlaku", "gaya('.tombol', 'cursor') === 'pointer' && gaya($$('.daftar li')[1], 'background-color') === 'rgb(241, 245, 249)'")],
     petunjuk=["@keyframes muncul { from { opacity: 0; ... } to { opacity: 1; ... } }", "Di dalam @media prefers-reduced-motion: .tombol, .notif { transition: none; animation: none; }"],
     jelas="Komponen ini siap dipakai ulang dan tetap nyaman bagi pengguna yang sensitif terhadap gerakan."),
  ])
