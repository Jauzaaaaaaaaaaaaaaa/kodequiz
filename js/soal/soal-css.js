// ============ CSS — 100 soal, 6 bab dengan materi ============
const SOAL_CSS = [
// ---- BAB 1: dasar (18) ----
{k:"dasar",t:"mc",lv:1,q:"CSS singkatan dari…",o:["Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets","Colorful Style Sheets"],a:1,e:"Cascading Style Sheets — pengatur tampilan halaman."},
{k:"dasar",t:"mc",lv:1,q:"Selector untuk class \"kotak\":",o:["#kotak","kotak",".kotak","*kotak"],a:2,e:"Class diawali titik (.), id diawali pagar (#)."},
{k:"dasar",t:"mc",lv:1,q:"Selector untuk id \"menu\":",o:[".menu","#menu","menu","@menu"],a:1,e:"# untuk id."},
{k:"dasar",t:"mc",lv:1,q:"Properti warna teks:",o:["text-color","font-color","color","text-style"],a:2,e:"color mengatur warna teks."},
{k:"dasar",t:"mc",lv:1,q:"Properti warna latar belakang:",o:["bg-color","background-color","color-bg","back-color"],a:1,e:"background-color."},
{k:"dasar",t:"mc",lv:1,q:"Cara menulis komentar CSS:",o:["// komentar","<!-- -->","/* komentar */","# komentar"],a:2,e:"CSS hanya mengenal /* … */."},
{k:"dasar",t:"mc",lv:1,q:"Cara terbaik memakai CSS di proyek besar:",o:["inline style","<style> tiap halaman","file eksternal via <link>","atribut css"],a:2,e:"CSS eksternal bisa dipakai banyak halaman & mudah dirawat."},
{k:"dasar",t:"mc",lv:1,q:"#ffffff menghasilkan warna…",o:["hitam","putih","merah","abu"],a:1,e:"#ffffff putih; #000000 hitam."},
{k:"dasar",t:"mc",lv:2,q:"Selector p, h1 { } berarti…",o:["p di dalam h1","p ATAU h1 (keduanya kena)","p setelah h1","error"],a:1,e:"Koma = grup selector, aturan berlaku untuk semuanya."},
{k:"dasar",t:"mc",lv:2,q:"Selector div p { } (dengan spasi) memilih…",o:["div dan p","semua p di dalam div (berapa pun dalamnya)","p anak langsung","div setelah p"],a:1,e:"Spasi = descendant selector."},
{k:"dasar",t:"mc",lv:2,q:"Selector div > p memilih…",o:["semua p dalam div","p yang anak LANGSUNG dari div","div dalam p","p pertama"],a:1,e:"> = child combinator (anak langsung)."},
{k:"dasar",t:"mc",lv:2,q:"Selector * { } berlaku untuk…",o:["elemen pertama","semua elemen","body saja","class *"],a:1,e:"* = universal selector."},
{k:"dasar",t:"mc",lv:2,q:"rgb(255, 0, 0) adalah warna…",o:["biru","hijau","merah","kuning"],a:2,e:"Urutan RGB: Red, Green, Blue."},
{k:"dasar",t:"mc",lv:3,q:"Urutan prioritas (specificity) tertinggi ke rendah:",o:["tag > class > id","id > class > tag","class > id > tag","semua sama"],a:1,e:"Inline > id > class > tag; !important menimpa semua."},
{k:"dasar",t:"mc",lv:3,q:"Jika dua aturan sama kuat, yang menang adalah…",o:["yang pertama","yang ditulis paling akhir","yang terpendek","acak"],a:1,e:"Itulah makna 'cascading' — aturan terakhir menang."},
{k:"dasar",t:"is",lv:1,q:"Tag HTML untuk memuat CSS eksternal: <____ rel=\"stylesheet\" href=\"style.css\">",a:["link"],e:"<link> diletakkan di <head>."},
{k:"dasar",t:"is",lv:2,q:"Kata kunci pemaksa prioritas: color: red !____;",a:["important"],e:"!important menimpa aturan lain — pakai seperlunya."},
{k:"dasar",t:"is",lv:2,q:"rgba(0,0,0,0.5) — huruf \"a\" berarti ____ (transparansi)",a:["alpha"],e:"Alpha: 0 transparan, 1 solid."},
// ---- BAB 2: teks (15) ----
{k:"teks",t:"mc",lv:1,q:"Properti ukuran huruf:",o:["text-size","font-size","size","font-height"],a:1,e:"font-size: 16px;"},
{k:"teks",t:"mc",lv:1,q:"Properti jenis huruf:",o:["font-family","font-type","text-font","typeface"],a:0,e:"font-family: 'Poppins', sans-serif;"},
{k:"teks",t:"mc",lv:1,q:"Membuat teks tebal:",o:["font-weight: bold","text-bold: true","font-style: bold","weight: heavy"],a:0,e:"font-weight: bold atau angka 700."},
{k:"teks",t:"mc",lv:1,q:"Membuat teks miring:",o:["font-style: italic","text-style: italic","font-italic: true","style: slant"],a:0,e:"font-style: italic."},
{k:"teks",t:"mc",lv:1,q:"Teks rata tengah:",o:["align: center","text-align: center","center: true","margin: center"],a:1,e:"text-align: left/center/right/justify."},
{k:"teks",t:"mc",lv:2,q:"Menghapus garis bawah link:",o:["underline: none","text-decoration: none","link-style: plain","border: none"],a:1,e:"text-decoration: none menghilangkan underline."},
{k:"teks",t:"mc",lv:2,q:"Semua huruf jadi KAPITAL via CSS:",o:["font-case: upper","text-transform: uppercase","text-style: caps","font-upper: on"],a:1,e:"text-transform: uppercase/lowercase/capitalize."},
{k:"teks",t:"mc",lv:2,q:"Properti jarak antar baris teks:",o:["line-height","line-space","row-gap","text-gap"],a:0,e:"line-height mengatur tinggi baris."},
{k:"teks",t:"mc",lv:2,q:"Properti jarak antar huruf:",o:["char-gap","letter-spacing","font-spacing","kerning-size"],a:1,e:"letter-spacing: 1px;"},
{k:"teks",t:"mc",lv:2,q:"font-family: 'Poppins', sans-serif; — sans-serif berperan sebagai…",o:["dekorasi","font cadangan (fallback)","ukuran","varian tebal"],a:1,e:"Fallback dipakai jika font utama gagal dimuat."},
{k:"teks",t:"mc",lv:3,q:"font-weight: 400 setara dengan…",o:["bold","normal","light","black"],a:1,e:"400 = normal; 700 = bold."},
{k:"teks",t:"mc",lv:3,q:"Memberi bayangan pada TEKS:",o:["box-shadow","text-shadow","font-shadow","shadow"],a:1,e:"text-shadow: x y blur warna."},
{k:"teks",t:"mc",lv:3,q:"Memotong teks kepanjangan dengan \"…\":",o:["text-cut: dots","text-overflow: ellipsis (+ overflow:hidden, white-space:nowrap)","font-trim: auto","clip: text"],a:1,e:"Trio properti itu menghasilkan elipsis (…)."},
{k:"teks",t:"is",lv:2,q:"Garis bawah teks: text-decoration: ____;",a:["underline"],e:"underline memberi garis bawah."},
{k:"teks",t:"is",lv:2,q:"Huruf pertama tiap kata kapital: text-transform: ____;",a:["capitalize"],e:"capitalize mengkapitalkan awal kata."},
// ---- BAB 3: boxmodel (17) ----
{k:"boxmodel",t:"mc",lv:1,q:"Jarak DI DALAM elemen (konten ↔ border):",o:["margin","spacing","padding","gap"],a:2,e:"padding ruang dalam; margin ruang luar."},
{k:"boxmodel",t:"mc",lv:1,q:"Jarak DI LUAR elemen:",o:["padding","margin","border","outline"],a:1,e:"margin memberi jarak antar elemen."},
{k:"boxmodel",t:"mc",lv:1,q:"Properti garis tepi elemen:",o:["line","border","outline saja","edge"],a:1,e:"border: 1px solid black;"},
{k:"boxmodel",t:"mc",lv:1,q:"Properti lebar elemen:",o:["width","wide","size-x","w"],a:0,e:"width: 200px;"},
{k:"boxmodel",t:"mc",lv:1,q:"Membuat sudut melengkung:",o:["corner","border-radius","round","radius-style"],a:1,e:"border-radius: 8px;"},
{k:"boxmodel",t:"mc",lv:2,q:"margin: 10px 20px 30px 40px — urutannya…",o:["kiri-atas-kanan-bawah","atas-kanan-bawah-kiri","atas-bawah-kiri-kanan","acak"],a:1,e:"Searah jarum jam mulai atas."},
{k:"boxmodel",t:"mc",lv:2,q:"margin: 10px 20px; berarti…",o:["atas-bawah 10, kiri-kanan 20","kiri 10, kanan 20","semua 10","semua 20"],a:0,e:"Dua nilai: vertikal lalu horizontal."},
{k:"boxmodel",t:"mc",lv:2,q:"Membuat elemen block berada di tengah horizontal:",o:["margin: 0 auto","align: center","center: block","float: center"],a:0,e:"margin auto kiri-kanan menengahkan block ber-width."},
{k:"boxmodel",t:"mc",lv:2,q:"Urutan box model dari dalam ke luar:",o:["content-padding-border-margin","content-margin-border-padding","padding-content-border-margin","margin-border-content-padding"],a:0,e:"Konten → padding → border → margin."},
{k:"boxmodel",t:"mc",lv:2,q:"border: 2px dashed red; — dashed adalah…",o:["ketebalan","gaya garis (putus-putus)","warna","radius"],a:1,e:"Gaya: solid, dashed, dotted, double."},
{k:"boxmodel",t:"mc",lv:3,q:"box-sizing: border-box membuat…",o:["border tebal","width sudah TERMASUK padding & border","margin masuk hitungan","kotak bulat"],a:1,e:"border-box membuat ukuran mudah diprediksi."},
{k:"boxmodel",t:"mc",lv:3,q:"Tanpa border-box, elemen width:200px + padding:20px lebar totalnya…",o:["200px","220px","240px","180px"],a:2,e:"200 + 20 kiri + 20 kanan = 240px."},
{k:"boxmodel",t:"mc",lv:3,q:"max-width: 600px berguna agar…",o:["minimal 600px","elemen tak melebihi 600px tapi bisa menyempit","tepat 600px","tersembunyi"],a:1,e:"max-width kunci desain responsif konten."},
{k:"boxmodel",t:"mc",lv:3,q:"overflow: hidden pada kontainer akan…",o:["menampilkan scrollbar","memotong konten yang meluap","memperbesar konten","error"],a:1,e:"hidden memotong; auto memberi scrollbar bila perlu."},
{k:"boxmodel",t:"mc",lv:3,q:"border-radius: 50% pada kotak persegi menghasilkan…",o:["oval acak","lingkaran","segitiga","tak berubah"],a:1,e:"50% pada persegi = lingkaran sempurna (foto profil!)."},
{k:"boxmodel",t:"is",lv:1,q:"Properti tinggi elemen: ____: 100px;",a:["height"],e:"height mengatur tinggi."},
{k:"boxmodel",t:"is",lv:2,q:"Menghilangkan garis tepi: border: ____;",a:["none","0"],e:"border: none menghapus border."},
// ---- BAB 4: layout (18) ----
{k:"layout",t:"mc",lv:1,q:"Elemen yang selalu memulai baris baru disebut…",o:["inline","block","flex","float"],a:1,e:"Block: div, p, h1. Inline: span, a."},
{k:"layout",t:"mc",lv:1,q:"Menyembunyikan elemen sekaligus menghapus ruangnya:",o:["visibility: hidden","display: none","opacity: 0","hide: true"],a:1,e:"display:none hilang total; visibility:hidden menyisakan ruang."},
{k:"layout",t:"mc",lv:1,q:"Mengaktifkan flexbox pada kontainer:",o:["display: flex","flex: on","layout: flex","position: flex"],a:0,e:"display: flex pada elemen induk."},
{k:"layout",t:"mc",lv:2,q:"Flexbox mengatur item dalam…",o:["dua dimensi","satu dimensi (baris ATAU kolom)","lingkaran","tabel"],a:1,e:"Flex = 1 dimensi; Grid = 2 dimensi."},
{k:"layout",t:"mc",lv:2,q:"Properti flex untuk merapikan item di sumbu utama (horizontal default):",o:["align-items","justify-content","text-align","flex-align"],a:1,e:"justify-content: center/space-between/dst."},
{k:"layout",t:"mc",lv:2,q:"Properti flex untuk sumbu silang (vertikal default):",o:["justify-content","align-items","valign","cross-align"],a:1,e:"align-items: center menengahkan vertikal."},
{k:"layout",t:"mc",lv:2,q:"Menengahkan elemen persis di tengah dengan flex:",o:["margin center","justify-content:center + align-items:center","text-align saja","position:middle"],a:1,e:"Kombinasi keduanya = tengah sempurna."},
{k:"layout",t:"mc",lv:2,q:"flex-direction: column membuat item tersusun…",o:["menyamping","dari atas ke bawah","terbalik","melingkar"],a:1,e:"column mengubah sumbu utama jadi vertikal."},
{k:"layout",t:"mc",lv:2,q:"Properti gap pada flex/grid:",o:["padding item","celah antar item","margin kontainer","lebar item"],a:1,e:"gap memberi jarak antar item tanpa margin manual."},
{k:"layout",t:"mc",lv:2,q:"justify-content: space-between menghasilkan…",o:["item rapat kiri","item menempel ujung-ujung, sisa ruang di antara","semua di tengah","item bertumpuk"],a:1,e:"space-between menyebar item ke tepi."},
{k:"layout",t:"mc",lv:3,q:"flex-wrap: wrap berguna agar…",o:["item mengecil terus","item turun ke baris baru jika tak muat","item tersembunyi","animasi"],a:1,e:"wrap membuat layout fleksibel di layar sempit."},
{k:"layout",t:"mc",lv:3,q:"flex: 1 pada item berarti…",o:["urutan pertama","mengisi sisa ruang yang tersedia","lebar 1px","tersembunyi"],a:1,e:"flex:1 = tumbuh mengisi ruang kosong."},
{k:"layout",t:"mc",lv:3,q:"display: inline-block berguna karena…",o:["selalu baris baru","sejajar seperti inline TAPI bisa diberi width/height","tanpa margin","lebih cepat"],a:1,e:"Gabungan sifat inline dan block."},
{k:"layout",t:"mc",lv:3,q:"Properti order pada flex item mengatur…",o:["abjad","urutan tampil tanpa mengubah HTML","ukuran","warna"],a:1,e:"order memindah posisi visual item."},
{k:"layout",t:"mc",lv:3,q:"align-self berbeda dari align-items karena…",o:["sama","berlaku untuk SATU item saja","untuk teks","untuk grid saja"],a:1,e:"align-self menimpa align-items pada item tertentu."},
{k:"layout",t:"is",lv:1,q:"display: ____ menghilangkan elemen sepenuhnya",a:["none"],e:"display:none menghapus dari layout."},
{k:"layout",t:"is",lv:2,q:"Menyusun flex item jadi vertikal: flex-direction: ____;",a:["column"],e:"column = atas ke bawah."},
{k:"layout",t:"is",lv:3,q:"Item flex turun baris jika sempit: flex-wrap: ____;",a:["wrap"],e:"wrap mengizinkan multi-baris."},
// ---- BAB 5: posisi & grid (15) ----
{k:"posisi",t:"mc",lv:1,q:"Nilai position default semua elemen:",o:["relative","absolute","static","fixed"],a:2,e:"static = mengikuti alur normal dokumen."},
{k:"posisi",t:"mc",lv:2,q:"position: fixed membuat elemen…",o:["ikut scroll","menempel viewport, tak ikut scroll","di tengah","hilang"],a:1,e:"Cocok untuk navbar melayang."},
{k:"posisi",t:"mc",lv:2,q:"position: absolute diposisikan relatif terhadap…",o:["viewport selalu","leluhur terdekat yang ber-position (biasanya relative)","body selalu","dirinya"],a:1,e:"Karena itu induknya sering diberi position:relative."},
{k:"posisi",t:"mc",lv:2,q:"z-index mengatur…",o:["zoom","urutan tumpukan (depan/belakang)","indeks list","jarak"],a:1,e:"z-index besar = di depan (butuh position selain static)."},
{k:"posisi",t:"mc",lv:2,q:"position: sticky membuat elemen…",o:["selalu diam","normal, lalu menempel saat tergeser scroll","absolute","transparan"],a:1,e:"sticky = gabungan relative + fixed."},
{k:"posisi",t:"mc",lv:2,q:"Mengaktifkan CSS Grid:",o:["display: grid","grid: on","layout: grid","position: grid"],a:0,e:"display: grid pada kontainer."},
{k:"posisi",t:"mc",lv:2,q:"Grid unggul dibanding flex untuk…",o:["satu baris","layout dua dimensi (baris DAN kolom)","teks","animasi"],a:1,e:"Grid mengontrol baris & kolom sekaligus."},
{k:"posisi",t:"mc",lv:3,q:"grid-template-columns: repeat(3, 1fr) menghasilkan…",o:["3 baris","3 kolom sama lebar","1 kolom","3px"],a:1,e:"1fr = 1 bagian ruang; repeat(3,1fr) = 3 kolom rata."},
{k:"posisi",t:"mc",lv:3,q:"Satuan fr pada grid berarti…",o:["frame","fraksi dari ruang tersedia","font-relative","freeze"],a:1,e:"fr membagi ruang kosong secara proporsional."},
{k:"posisi",t:"mc",lv:3,q:"grid-column: span 2 membuat item…",o:["pindah kolom 2","membentang selebar 2 kolom","hilang","2px"],a:1,e:"span melebarkan item melintasi beberapa track."},
{k:"posisi",t:"mc",lv:3,q:"top/left/right/bottom hanya berpengaruh jika…",o:["selalu","position bukan static","display flex","ada margin"],a:1,e:"Properti offset butuh position relative/absolute/fixed/sticky."},
{k:"posisi",t:"mc",lv:3,q:"grid-template-columns: 200px 1fr berarti…",o:["dua kolom sama","kolom kiri tetap 200px, kanan mengisi sisa","satu kolom","error"],a:1,e:"Pola sidebar klasik: tetap + fleksibel."},
{k:"posisi",t:"is",lv:2,q:"position: ____ menjadikan elemen acuan untuk anak absolute",a:["relative"],e:"relative membuat elemen jadi 'containing block'."},
{k:"posisi",t:"is",lv:3,q:"Properti jarak antar sel grid: ____: 16px;",a:["gap"],e:"gap berlaku di grid dan flex."},
{k:"posisi",t:"is",lv:3,q:"display: ____ mengaktifkan layout dua dimensi",a:["grid"],e:"CSS Grid untuk baris + kolom."},
// ---- BAB 6: dekorasi & responsif (17) ----
{k:"dekorasi",t:"mc",lv:1,q:"Properti transparansi elemen:",o:["transparent","opacity","alpha","fade"],a:1,e:"opacity: 0 (transparan) – 1 (solid)."},
{k:"dekorasi",t:"mc",lv:2,q:"Bayangan pada kotak/elemen:",o:["shadow","box-shadow","element-shadow","blur"],a:1,e:"box-shadow: x y blur warna."},
{k:"dekorasi",t:"mc",lv:2,q:"Pseudo-class saat kursor di atas elemen:",o:[":active",":hover",":focus",":visited"],a:1,e:":hover untuk efek sentuh kursor."},
{k:"dekorasi",t:"mc",lv:2,q:"Pseudo-class input yang sedang aktif diketik:",o:[":hover",":focus",":active",":typing"],a:1,e:":focus saat elemen menerima fokus."},
{k:"dekorasi",t:"mc",lv:2,q:"transition: all 0.3s ease; membuat…",o:["animasi loop","perubahan properti jadi halus 0.3 detik","delay klik","rotasi"],a:1,e:"transition menghaluskan perubahan (mis. saat hover)."},
{k:"dekorasi",t:"mc",lv:2,q:"Gambar sebagai latar elemen:",o:["img-bg","background-image: url('x.jpg')","src-bg","image: back"],a:1,e:"background-image + background-size: cover biasanya."},
{k:"dekorasi",t:"mc",lv:2,q:"background-size: cover berarti…",o:["gambar asli","gambar menutupi penuh area (bisa terpotong)","diulang-ulang","diperkecil"],a:1,e:"cover mengisi penuh; contain memuat utuh."},
{k:"dekorasi",t:"mc",lv:3,q:"transform: translateX(50px) akan…",o:["memutar","menggeser 50px ke kanan","memperbesar","memiringkan"],a:1,e:"translate geser; rotate putar; scale ubah ukuran."},
{k:"dekorasi",t:"mc",lv:3,q:"transform: scale(1.1) saat hover menghasilkan efek…",o:["berputar","membesar 10% (zoom halus)","memudar","bergeser"],a:1,e:"scale(1.1) = 110% ukuran — efek kartu populer."},
{k:"dekorasi",t:"mc",lv:3,q:"@keyframes digunakan untuk…",o:["media query","mendefinisikan tahapan animasi","font","variabel"],a:1,e:"Dipakai bersama properti animation."},
{k:"dekorasi",t:"mc",lv:3,q:"Cara membuat variabel CSS:",o:["$warna: red","--warna: red; dipakai var(--warna)","@warna = red","var warna"],a:1,e:"Custom property biasanya di :root."},
{k:"dekorasi",t:"mc",lv:2,q:"Media query untuk layar maksimal 600px:",o:["@media (max-width: 600px){ }","@screen 600","@media w=600","@responsive"],a:0,e:"Kunci desain responsif mobile."},
{k:"dekorasi",t:"mc",lv:2,q:"Satuan relatif terhadap font elemen root:",o:["px","em","rem","%"],a:2,e:"rem = root em."},
{k:"dekorasi",t:"mc",lv:3,q:"100vh berarti…",o:["100 huruf","setinggi viewport penuh","100px","100% lebar"],a:1,e:"vh = viewport height; vw = lebar."},
{k:"dekorasi",t:"mc",lv:3,q:"Pseudo-element menambah konten dekoratif sebelum elemen:",o:["::before","::first","::pre",":start"],a:0,e:"::before/::after + content: ''."},
{k:"dekorasi",t:"is",lv:2,q:"cursor: ____ membuat kursor jadi tangan penunjuk",a:["pointer"],e:"pointer menandakan elemen bisa diklik."},
{k:"dekorasi",t:"is",lv:3,q:"Memutar elemen 45°: transform: ____(45deg);",a:["rotate"],e:"rotate memutar elemen."},
];

const MATERI_CSS = [
{k:"dasar",judul:"Dasar: Selector, Warna & Cara Kerja CSS",materi:`
<h4>CSS itu apa?</h4>
<p>Kalau HTML adalah <b>kerangka dan isi rumah</b> (dinding, pintu, perabot), maka <b>CSS</b> adalah <b>cat, wallpaper, dan tata letaknya</b>. CSS singkatan dari <i>Cascading Style Sheets</i>, artinya "lembar gaya yang bertingkat". Dengan CSS kamu mengatur warna, ukuran huruf, jarak, dan posisi elemen HTML.</p>
<p>Tanpa CSS, semua situs akan terlihat seperti dokumen Word polos: huruf hitam, latar putih, semua tersusun dari atas ke bawah.</p>
<h4>Bentuk satu aturan CSS</h4>
<pre><code>p {
  color: blue;
  background-color: yellow;
}</code></pre>
<p>Bacanya: "untuk semua paragraf, warna tulisannya biru dan warna latarnya kuning".</p>
<ul><li><code>p</code> = <b>selector</b> (pemilih), yaitu <i>elemen mana</i> yang mau diberi gaya.</li><li><code>{ … }</code> = kurung kurawal berisi daftar gaya.</li><li><code>color</code> = <b>properti</b>, <i>apa</i> yang diubah. <code>color</code> mengatur warna <b>tulisan</b>; <code>background-color</code> mengatur warna <b>latar</b>.</li><li><code>blue</code> = <b>nilai</b>, <i>diubah jadi apa</i>.</li><li>Setiap baris diakhiri titik koma <code>;</code>, seperti titik di akhir kalimat.</li></ul>
<h4>Memilih elemen: macam-macam selector</h4>
<pre><code>p        { }   /* semua &lt;p&gt; */
.kotak   { }   /* semua elemen dengan class="kotak" */
#menu    { }   /* satu elemen dengan id="menu" */
p, h1    { }   /* &lt;p&gt; DAN &lt;h1&gt; sekaligus */
div p    { }   /* &lt;p&gt; yang ada di DALAM &lt;div&gt;, sedalam apa pun */
div &gt; p  { }   /* &lt;p&gt; yang anak LANGSUNG dari &lt;div&gt; */
*        { }   /* SEMUA elemen */</code></pre>
<ul><li>Titik <code>.</code> untuk <b>class</b> (ingat: class = nama kelompok, boleh dipakai banyak elemen).</li><li>Pagar <code>#</code> untuk <b>id</b> (nama unik).</li><li>Koma <code>,</code> artinya "dan juga". Satu aturan untuk beberapa selector.</li><li>Spasi artinya "di dalam". <code>div p</code> = semua <code>p</code> yang ada di dalam <code>div</code>, termasuk cucu dan cicitnya.</li><li><code>&gt;</code> artinya "anak langsung saja". Bayangkan silsilah keluarga: <code>div &gt; p</code> hanya anak kandung, bukan cucu.</li><li><code>*</code> disebut <i>universal selector</i>, memilih semua elemen di halaman.</li></ul>
<p><code>/* … */</code> adalah <b>komentar</b> di CSS, catatan yang diabaikan browser.</p>
<h4>Menulis warna</h4>
<table class="mini-pivot"><tr><th>Cara</th><th>Contoh</th><th>Penjelasan</th></tr>
<tr><td>nama</td><td><code>red</code>, <code>white</code></td><td>mudah, tapi pilihannya terbatas</td></tr>
<tr><td>hex</td><td><code>#ffffff</code></td><td>3 pasang angka heksadesimal: merah, hijau, biru. <code>#ffffff</code> = putih, <code>#000000</code> = hitam</td></tr>
<tr><td>rgb</td><td><code>rgb(255, 0, 0)</code></td><td>campuran merah, hijau, biru, masing-masing 0–255. Contoh ini = merah penuh</td></tr>
<tr><td>rgba</td><td><code>rgba(0, 0, 0, 0.5)</code></td><td>seperti rgb plus <b>a</b> = <i>alpha</i>, tingkat <b>transparansi</b> 0 (tembus) sampai 1 (pekat)</td></tr></table>
<p>Bayangkan tiga senter warna merah, hijau, dan biru. Semua dinyalakan penuh (255) jadi putih; semua mati (0) jadi hitam.</p>
<h4>Kalau dua aturan bertabrakan, siapa yang menang?</h4>
<p>Kata <i>cascading</i> (bertingkat) merujuk ke hal ini. Misalnya ada <code>p { color: red }</code> dan <code>.info { color: green }</code>, lalu sebuah paragraf punya <code>class="info"</code>. Warnanya apa?</p>
<p>Browser menilai <b>kekuatan selector</b>, disebut <b>specificity</b> (spesifisitas):</p>
<ol><li><code>id</code> (<code>#menu</code>) paling kuat, karena paling spesifik (hanya satu elemen).</li><li><code>class</code> (<code>.info</code>) di tengah.</li><li>Nama tag (<code>p</code>) paling lemah, karena paling umum.</li></ol>
<p>Jadi jawabannya hijau. Kalau kekuatannya <b>sama</b>, yang ditulis <b>paling akhir</b> yang menang.</p>
<p>Ada "jalan pintas" <code>!important</code>, misalnya <code>color: red !important;</code>, yang memaksa aturan menang. Hindari kalau bisa, karena membuat CSS sulit dirapikan nanti.</p>
<h4>Di mana CSS ditulis?</h4>
<p>Cara terbaik: di <b>file terpisah</b> (misalnya <code>style.css</code>), lalu dihubungkan dari <code>&lt;head&gt;</code> HTML:</p>
<pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
<p>Keuntungannya, satu file CSS bisa dipakai puluhan halaman. Ganti warna sekali, semua halaman ikut berubah.</p>
<div class="praktik"><b>Coba sendiri:</b> buat <code>style.css</code> berisi <code>body { background-color: #fdf6e3; }</code> dan <code>h1 { color: rgb(200, 50, 50); }</code>, hubungkan dengan <code>&lt;link&gt;</code>, lalu muat ulang halaman latihanmu.</div>
`},
{k:"teks",judul:"Tipografi: Font & Teks",materi:`
<h4>Tipografi = seni mengatur huruf</h4>
<p>Sebagian besar isi web adalah tulisan, jadi mengatur huruf adalah hal pertama yang membuat situs terasa enak atau melelahkan dibaca. Bayangkan perbedaan buku cetakan rapi dengan fotokopian yang hurufnya rapat-rapat.</p>
<pre><code>p {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}</code></pre>
<h4>Penjelasan properti satu per satu</h4>
<table class="mini-pivot"><tr><th>Properti</th><th>Mengatur</th><th>Contoh nilai</th></tr>
<tr><td><code>font-family</code></td><td><b>jenis huruf</b></td><td><code>'Poppins', sans-serif</code></td></tr>
<tr><td><code>font-size</code></td><td><b>ukuran</b> huruf</td><td><code>16px</code>, <code>1.2rem</code></td></tr>
<tr><td><code>font-weight</code></td><td><b>ketebalan</b></td><td><code>400</code> = normal, <code>700</code> = tebal (<code>bold</code>)</td></tr>
<tr><td><code>font-style</code></td><td><b>miring</b></td><td><code>italic</code></td></tr>
<tr><td><code>line-height</code></td><td><b>jarak antarbaris</b></td><td><code>1.6</code> = 1,6 kali tinggi huruf</td></tr>
<tr><td><code>letter-spacing</code></td><td><b>jarak antarhuruf</b></td><td><code>1px</code></td></tr>
<tr><td><code>text-align</code></td><td><b>perataan</b></td><td><code>left</code>, <code>center</code>, <code>right</code>, <code>justify</code></td></tr>
<tr><td><code>text-transform</code></td><td><b>huruf besar/kecil</b></td><td><code>uppercase</code> (KAPITAL semua), <code>lowercase</code>, <code>capitalize</code> (Huruf Awal Tiap Kata)</td></tr>
<tr><td><code>text-decoration</code></td><td><b>garis</b> pada teks</td><td><code>underline</code> (garis bawah), <code>none</code> (tanpa garis)</td></tr>
<tr><td><code>text-shadow</code></td><td><b>bayangan teks</b></td><td><code>2px 2px 4px gray</code></td></tr></table>
<h4>Kenapa ada dua nama huruf?</h4>
<p><code>font-family: 'Poppins', sans-serif;</code> artinya: "pakai Poppins; kalau komputer pengunjung tidak punya Poppins, pakai huruf jenis <i>sans-serif</i> apa saja". Nama kedua disebut <b>cadangan</b> (<i>fallback</i>).</p>
<ul><li><i>Serif</i> = huruf berkaki/bertangkai kecil di ujungnya, seperti Times New Roman.</li><li><i>Sans-serif</i> = huruf tanpa kaki (<i>sans</i> = tanpa dalam bahasa Prancis), seperti Arial. Lebih bersih di layar.</li></ul>
<h4>Ketebalan dengan angka</h4>
<p>Selain <code>bold</code>, ketebalan bisa ditulis angka 100 sampai 900. Patokannya: <b>400 = normal</b>, <b>700 = tebal</b>. Angka di antaranya hanya berefek kalau huruf tersebut menyediakan ketebalan itu.</p>
<h4>Trik yang sering dipakai</h4>
<ul><li><b>Hapus garis bawah link:</b> <code>a { text-decoration: none; }</code></li><li><b>Potong teks kepanjangan dengan "…":</b></li></ul>
<pre><code>.judul {
  white-space: nowrap;      /* jangan turun baris */
  overflow: hidden;         /* sembunyikan yang lewat */
  text-overflow: ellipsis;  /* ganti dengan … */
}</code></pre>
<div class="catatan">Rahasia tulisan yang nyaman dibaca: <code>line-height</code> antara 1,5 dan 1,7, dan satu baris kira-kira 60–75 huruf. Huruf yang terlalu rapat membuat mata cepat lelah.</div>
<div class="praktik"><b>Coba sendiri:</b> beri paragrafmu <code>line-height: 1.2</code>, baca sebentar, lalu ganti ke <code>1.7</code>. Rasakan bedanya. Coba juga <code>text-transform: capitalize</code> pada judul.</div>
`},
{k:"boxmodel",judul:"Box Model: Padding, Margin, Border",materi:`
<h4>Setiap elemen adalah kotak</h4>
<p>Ini konsep paling penting di CSS: browser memperlakukan <b>setiap elemen sebagai kotak</b>, termasuk paragraf, gambar, dan tombol. Kotak itu punya empat lapisan, dari dalam ke luar:</p>
<ol><li><b>Konten</b> – isi sebenarnya (teks atau gambar).</li><li><b>Padding</b> – ruang kosong <b>di dalam</b> kotak, antara isi dan bingkai.</li><li><b>Border</b> – <b>bingkai/garis tepi</b> kotak.</li><li><b>Margin</b> – ruang kosong <b>di luar</b> kotak, jarak ke elemen lain.</li></ol>
<p>Bayangkan foto yang dibingkai dan digantung di dinding: fotonya adalah <b>konten</b>, kertas putih di sekitar foto (di dalam bingkai) adalah <b>padding</b>, bingkainya adalah <b>border</b>, dan jarak antara bingkai ini dengan bingkai lain di dinding adalah <b>margin</b>.</p>
<p>Urutan dari dalam ke luar: <b>konten → padding → border → margin</b>.</p>
<h4>Contoh</h4>
<pre><code>.kartu {
  width: 300px;
  height: 100px;
  padding: 16px;
  border: 2px solid #dddddd;
  border-radius: 12px;
  margin: 10px 20px;
}</code></pre>
<ul><li><code>width</code> = lebar, <code>height</code> = tinggi.</li><li><code>padding: 16px</code> = ruang dalam 16 piksel di keempat sisi.</li><li><code>border: 2px solid #dddddd</code> = garis tebal 2px, jenisnya <code>solid</code> (garis utuh), warna abu muda. Jenis lain: <code>dashed</code> (garis putus-putus), <code>dotted</code> (titik-titik). <code>border: none</code> menghilangkan garis.</li><li><code>border-radius: 12px</code> = <b>sudut melengkung</b>. Pada kotak persegi, <code>border-radius: 50%</code> menghasilkan <b>lingkaran</b> (dipakai untuk foto profil bulat).</li></ul>
<h4>Membaca nilai margin dan padding yang lebih dari satu</h4>
<table class="mini-pivot"><tr><th>Penulisan</th><th>Artinya</th></tr>
<tr><td><code>margin: 10px;</code></td><td>semua sisi 10px</td></tr>
<tr><td><code>margin: 10px 20px;</code></td><td>atas-bawah 10px, kiri-kanan 20px</td></tr>
<tr><td><code>margin: 10px 20px 30px 40px;</code></td><td>atas 10, kanan 20, bawah 30, kiri 40</td></tr></table>
<p>Untuk empat nilai, urutannya <b>searah jarum jam mulai dari atas</b>: atas → kanan → bawah → kiri. Cara mengingat: jam 12, jam 3, jam 6, jam 9.</p>
<h4>Menaruh kotak di tengah</h4>
<pre><code>.wadah {
  max-width: 600px;
  margin: 0 auto;
}</code></pre>
<ul><li><code>max-width: 600px</code> = lebar <b>paling besar</b> 600px. Di layar lebar tetap 600px (supaya baris tulisan tidak terlalu panjang), di HP boleh mengecil.</li><li><code>margin: 0 auto</code> = atas-bawah 0, kiri-kanan <b>dibagi rata otomatis</b>, sehingga kotak berada di tengah horizontal.</li></ul>
<h4>Jebakan ukuran: box-sizing</h4>
<p>Secara bawaan, <code>width: 200px</code> hanya menghitung <b>konten</b>. Padding dan border ditambahkan di luar itu. Jadi kotak <code>width: 200px</code> dengan <code>padding: 20px</code> lebar totalnya 200 + 20 kiri + 20 kanan = <b>240px</b>. Ini sering membuat tata letak "meluber" tanpa kamu sadari.</p>
<p>Solusinya:</p>
<pre><code>* { box-sizing: border-box; }</code></pre>
<p>Dengan <code>border-box</code>, <code>width</code> sudah <b>termasuk</b> padding dan border. Kotak <code>width: 200px</code> benar-benar 200px, dan isinya yang menyesuaikan. Hampir semua situs modern memasang baris ini di awal CSS-nya.</p>
<h4>Isi yang kebesaran: overflow</h4>
<p>Kalau isi lebih besar dari kotaknya, isi itu "tumpah" keluar. <code>overflow: hidden</code> <b>memotong/menyembunyikan</b> bagian yang keluar dari kotak. Ada juga <code>overflow: auto</code> yang memunculkan scroll.</p>
<div class="catatan">Tips: buka DevTools (tekan F12), klik sebuah elemen. Di panel kanan ada gambar kotak berwarna yang menunjukkan konten, padding, border, dan margin elemen itu. Ini cara paling cepat memahami box model.</div>
<div class="praktik"><b>Coba sendiri:</b> buat <code>div</code> dengan <code>width: 200px; padding: 20px; border: 5px solid black;</code>. Ukur lebarnya di DevTools, lalu tambahkan <code>box-sizing: border-box</code> dan ukur lagi.</div>
`},
{k:"layout",judul:"Layout Modern: Display & Flexbox",materi:`
<h4>Mengatur posisi elemen di halaman</h4>
<p>Secara bawaan, elemen tersusun dari atas ke bawah seperti tumpukan buku. Untuk membuat menu berjejer ke samping, kartu produk berbaris, atau tombol tepat di tengah, kamu perlu mengatur <b>display</b> dan <b>flexbox</b>.</p>
<h4>display: cara elemen menempati ruang</h4>
<table class="mini-pivot"><tr><th>Nilai</th><th>Perilaku</th><th>Contoh tag bawaan</th></tr>
<tr><td><code>block</code></td><td>selalu mulai di <b>baris baru</b>, lebarnya penuh</td><td><code>div</code>, <code>p</code>, <code>h1</code></td></tr>
<tr><td><code>inline</code></td><td>mengalir di dalam baris teks, <b>tidak bisa diberi</b> width/height</td><td><code>span</code>, <code>a</code></td></tr>
<tr><td><code>inline-block</code></td><td>berjejer seperti inline, tapi <b>bisa</b> diberi width, height, padding atas-bawah</td><td>tombol, lencana</td></tr>
<tr><td><code>none</code></td><td>elemen <b>hilang total</b>, ruangnya pun ikut hilang</td><td>–</td></tr>
<tr><td><code>flex</code></td><td>mengaktifkan flexbox</td><td>–</td></tr></table>
<div class="catatan">Beda <code>display: none</code> dengan <code>visibility: hidden</code>: <code>none</code> menghapus elemen dan ruangnya (elemen lain naik mengisi tempatnya); <code>hidden</code> hanya membuatnya tak terlihat tapi tempatnya tetap kosong.</div>
<h4>Flexbox: menata barisan dengan mudah</h4>
<p><b>Flexbox</b> (kotak fleksibel) adalah cara modern menyusun item dalam <b>satu arah</b>: satu baris <i>atau</i> satu kolom. Kamu cukup mengatur <b>wadahnya</b> (induk), dan semua anak di dalamnya otomatis tersusun.</p>
<pre><code>&lt;div class="menu"&gt;
  &lt;a&gt;Beranda&lt;/a&gt; &lt;a&gt;Produk&lt;/a&gt; &lt;a&gt;Kontak&lt;/a&gt;
&lt;/div&gt;</code></pre>
<pre><code>.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}</code></pre>
<p>Bayangkan wadah flex seperti rak, dan item-itemnya adalah buku yang dijajarkan.</p>
<h4>Dua sumbu: utama dan silang</h4>
<ul><li><b>Sumbu utama</b> = arah barisan. Bawaannya <b>horizontal</b> (kiri ke kanan).</li><li><b>Sumbu silang</b> = tegak lurus dengannya. Bawaannya <b>vertikal</b>.</li></ul>
<table class="mini-pivot"><tr><th>Properti (di wadah)</th><th>Mengatur</th><th>Nilai yang sering dipakai</th></tr>
<tr><td><code>justify-content</code></td><td>posisi item di <b>sumbu utama</b></td><td><code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code> (item ujung menempel tepi, sisanya dibagi rata), <code>space-around</code></td></tr>
<tr><td><code>align-items</code></td><td>posisi item di <b>sumbu silang</b></td><td><code>center</code>, <code>flex-start</code>, <code>stretch</code></td></tr>
<tr><td><code>gap</code></td><td><b>jarak antar item</b></td><td><code>16px</code></td></tr>
<tr><td><code>flex-direction</code></td><td>arah barisan</td><td><code>row</code> (mendatar, bawaan), <code>column</code> (<b>tersusun vertikal</b>, atas ke bawah)</td></tr>
<tr><td><code>flex-wrap</code></td><td>boleh <b>turun baris</b> saat tidak muat?</td><td><code>nowrap</code> (bawaan, item dipaksa satu baris), <code>wrap</code></td></tr></table>
<h4>Trik paling terkenal: tepat di tengah</h4>
<pre><code>.wadah {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}</code></pre>
<p>Tengah di sumbu utama + tengah di sumbu silang = <b>tepat di tengah layar</b>.</p>
<h4>Properti untuk item (anak)</h4>
<ul><li><code>flex: 1</code> = item ini <b>mengisi sisa ruang</b> yang tersedia. Kalau tiga item sama-sama <code>flex: 1</code>, lebarnya dibagi rata.</li><li><code>order: 2</code> = mengubah <b>urutan tampil</b> item tanpa mengubah HTML.</li><li><code>align-self: flex-end</code> = seperti <code>align-items</code>, tapi <b>hanya untuk item itu sendiri</b>. <code>align-items</code> diatur di wadah dan berlaku ke semua item.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat tiga <code>div</code> kotak berwarna di dalam sebuah wadah. Beri wadah <code>display: flex</code>, lalu ganti-ganti nilai <code>justify-content</code> dan <code>flex-direction</code> dan amati perubahannya. Situs game <i>Flexbox Froggy</i> juga melatih ini dengan menyenangkan.</div>
`},
{k:"posisi",judul:"Position & CSS Grid",materi:`
<h4>Position: menaruh elemen di tempat yang tepat</h4>
<p>Kadang kamu ingin elemen keluar dari susunan normal: tombol chat yang selalu menempel di pojok layar, lencana "Diskon" di sudut foto produk, atau menu yang tetap terlihat saat halaman digulir. Untuk itu ada properti <code>position</code>.</p>
<table class="mini-pivot"><tr><th>Nilai</th><th>Perilaku</th><th>Contoh nyata</th></tr>
<tr><td><code>static</code></td><td><b>bawaan</b> semua elemen; ikut susunan normal</td><td>paragraf biasa</td></tr>
<tr><td><code>relative</code></td><td>tetap di tempatnya, tapi bisa <b>digeser sedikit</b> dari posisi asal; juga jadi <b>titik acuan</b> bagi anak yang <code>absolute</code></td><td>wadah foto produk</td></tr>
<tr><td><code>absolute</code></td><td><b>lepas dari susunan</b>, posisinya dihitung dari leluhur terdekat yang punya position selain static</td><td>lencana "Diskon" di pojok foto</td></tr>
<tr><td><code>fixed</code></td><td><b>menempel di layar</b>, tidak ikut bergeser saat halaman digulir</td><td>tombol WhatsApp di pojok kanan bawah</td></tr>
<tr><td><code>sticky</code></td><td>normal, lalu <b>menempel</b> saat digulir sampai batas tertentu</td><td>judul tabel yang tetap terlihat</td></tr></table>
<p>Setelah memilih position, letaknya diatur dengan <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>. Keempat properti ini <b>tidak berpengaruh pada elemen static</b>; elemen harus diberi position lain dulu.</p>
<pre><code>.foto    { position: relative; }
.lencana { position: absolute; top: 8px; right: 8px; }</code></pre>
<p>Bacanya: lencana ditaruh 8px dari atas dan 8px dari kanan <b>kotak foto</b> (karena foto adalah induk yang <code>relative</code>). Kalau tidak ada induk ber-position, lencana akan dihitung dari pojok halaman.</p>
<h4>z-index: siapa di depan?</h4>
<p>Kalau elemen bertumpuk, <code>z-index</code> menentukan <b>urutan depan-belakang</b>, seperti tumpukan kertas. Angka lebih besar = lebih di depan. Contoh: <code>z-index: 10</code> berada di depan <code>z-index: 1</code>.</p>
<h4>CSS Grid: tata letak dua arah</h4>
<p>Flexbox menata <b>satu arah</b> (baris <i>atau</i> kolom). <b>Grid</b> menata <b>dua arah sekaligus</b> (baris <i>dan</i> kolom), seperti tabel atau kotak-kotak di buku kotak. Cocok untuk galeri foto, daftar produk, dan kerangka halaman.</p>
<pre><code>.galeri {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}</code></pre>
<ul><li><code>display: grid</code> = mengaktifkan grid.</li><li><code>grid-template-columns</code> = menentukan <b>kolom</b>. <code>repeat(3, 1fr)</code> artinya "3 kolom yang sama lebar".</li><li><code>fr</code> (<i>fraction</i>, bagian) = <b>bagian dari sisa ruang</b>. <code>1fr 2fr</code> artinya kolom kedua dua kali lebar kolom pertama.</li><li><code>gap</code> = jarak antarsel.</li></ul>
<p>Contoh lain:</p>
<pre><code>.halaman { display: grid; grid-template-columns: 200px 1fr; }
.besar   { grid-column: span 2; }</code></pre>
<ul><li><code>200px 1fr</code> = kolom kiri <b>tetap 200px</b> (misalnya menu samping), kolom kanan <b>mengisi sisa</b>.</li><li><code>grid-column: span 2</code> = item ini <b>melebar menempati 2 kolom</b>.</li></ul>
<div class="catatan">Pegangan memilih: menyusun barisan item satu arah (menu, tombol berjejer) → <b>flex</b>. Menyusun kotak-kotak baris dan kolom (galeri, kerangka halaman) → <b>grid</b>.</div>
<div class="praktik"><b>Coba sendiri:</b> buat 6 kotak dan susun dengan grid 3 kolom. Lalu beri kotak pertama <code>grid-column: span 2</code>.</div>
`},
{k:"dekorasi",judul:"Efek, Animasi & Responsif",materi:`
<h4>Sentuhan yang membuat situs terasa hidup</h4>
<p>Bab ini membahas efek visual (bayangan, transparansi), interaksi (efek saat kursor lewat), animasi, dan <b>responsif</b> (tampilan menyesuaikan ukuran layar).</p>
<h4>Bayangan, transparansi, dan latar gambar</h4>
<pre><code>.kartu {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0.9;
  background-image: url("pantai.jpg");
  background-size: cover;
}</code></pre>
<ul><li><code>box-shadow</code> = <b>bayangan kotak</b>. Urutan nilai: geser kanan, geser bawah, tingkat blur, warna. Bayangan tipis membuat kartu terlihat "melayang".</li><li><code>opacity</code> = <b>transparansi seluruh elemen</b>, 0 (tak terlihat) sampai 1 (penuh).</li><li><code>background-image: url(...)</code> = memakai <b>gambar sebagai latar</b>.</li><li><code>background-size: cover</code> = gambar <b>diperbesar sampai menutupi seluruh kotak</b> tanpa gepeng. Sebagian tepinya mungkin terpotong.</li></ul>
<h4>Pseudo-class: gaya untuk "keadaan" tertentu</h4>
<p><i>Pseudo-class</i> ditulis dengan titik dua, artinya "saat elemen sedang dalam keadaan tertentu".</p>
<pre><code>.tombol:hover { background: navy; }
input:focus   { border-color: blue; }</code></pre>
<ul><li><code>:hover</code> = saat <b>kursor mouse berada di atas</b> elemen.</li><li><code>:focus</code> = saat elemen <b>sedang aktif</b>, misalnya kolom yang sedang diketik.</li><li><code>cursor: pointer</code> = kursor berubah jadi <b>tangan penunjuk</b>, tanda bahwa elemen bisa diklik.</li></ul>
<p><i>Pseudo-element</i> ditulis dengan dua titik dua, misalnya <code>::before</code> dan <code>::after</code>. Gunanya <b>menambah hiasan sebelum/sesudah isi</b> elemen tanpa mengubah HTML.</p>
<h4>Transisi dan transform</h4>
<pre><code>.tombol {
  transition: all 0.3s ease;
}
.tombol:hover {
  transform: scale(1.05);
}</code></pre>
<ul><li><code>transition</code> = perubahan gaya terjadi <b>perlahan</b> (di sini 0,3 detik), bukan tiba-tiba. <code>ease</code> = mulai pelan, cepat di tengah, pelan di akhir, terasa alami.</li><li><code>transform</code> = mengubah bentuk/posisi tanpa mengganggu elemen lain. Tiga yang paling sering dipakai ada di bawah.</li><li><code>transform: scale(1.05)</code> = <b>membesar</b> 5% (efek "tombol menonjol" saat disentuh).</li><li><code>transform: translateX(50px)</code> = <b>bergeser</b> 50px ke kanan.</li><li><code>transform: rotate(45deg)</code> = <b>berputar</b> 45 derajat.</li></ul>
<p>Untuk animasi yang berjalan sendiri (misalnya ikon berputar terus), pakai <code>@keyframes</code>, yaitu daftar "adegan" animasi dari awal sampai akhir.</p>
<h4>Variabel CSS</h4>
<pre><code>:root { --utama: #4c8dff; }
.tombol { background: var(--utama); }</code></pre>
<p>Variabel menyimpan nilai yang dipakai berulang. Nama variabel diawali dua strip <code>--</code>, dibaca dengan <code>var(...)</code>. Ganti satu baris di <code>:root</code>, warna seluruh situs ikut berubah.</p>
<h4>Responsif: satu situs, semua ukuran layar</h4>
<p><b>Responsif</b> artinya tampilan menyesuaikan diri dengan layar laptop, tablet, maupun HP. Dua alat utamanya:</p>
<p><b>1. Satuan relatif</b> (ukurannya mengikuti sesuatu, bukan angka mati):</p>
<table class="mini-pivot"><tr><th>Satuan</th><th>Mengikuti</th></tr>
<tr><td><code>%</code></td><td>persen dari ukuran induk</td></tr>
<tr><td><code>rem</code></td><td>ukuran huruf dasar halaman (biasanya 16px), jadi <code>2rem</code> = 32px</td></tr>
<tr><td><code>vw</code> / <code>vh</code></td><td>persen lebar/tinggi layar. <code>100vh</code> = <b>setinggi layar penuh</b></td></tr></table>
<p><b>2. Media query</b>, yaitu aturan yang hanya berlaku pada kondisi tertentu:</p>
<pre><code>@media (max-width: 600px) {
  .galeri { grid-template-columns: 1fr; }
}</code></pre>
<p>Bacanya: "kalau lebar layar <b>paling besar 600px</b> (ukuran HP), galeri cukup satu kolom".</p>
<div class="praktik"><b>Coba sendiri:</b> beri tombolmu efek <code>:hover</code> yang mengubah warna dan <code>transform: scale(1.05)</code> dengan <code>transition</code>. Lalu tekan F12 → ikon HP (Toggle device toolbar) untuk melihat tampilanmu di ukuran HP.</div>
`},
];
