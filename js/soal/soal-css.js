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
{k:"dasar",judul:"Dasar: Selector, Warna & Cara Kerja CSS",materi:`<p>Aturan CSS = <b>selector</b> + properti:</p><pre><code>.kartu { color: #333; }   /* class  → .nama  */
#menu  { color: red; }    /* id     → #nama  */
p, h1  { margin: 0; }     /* grup (koma)     */
div p  { }                /* p di dalam div  */
div > p { }               /* anak langsung   */</code></pre><p>Warna: nama (<code>red</code>), hex (<code>#4c8dff</code>), <code>rgb()</code>, <code>rgba()</code> dengan transparansi. Jika dua aturan bentrok, yang menang: specificity lebih tinggi (id &gt; class &gt; tag), lalu yang ditulis terakhir. CSS terbaik diletakkan di file eksternal via <code>&lt;link&gt;</code>.</p>`},
{k:"teks",judul:"Tipografi: Font & Teks",materi:`<p>Properti teks yang paling sering dipakai:</p><pre><code>p {
  font-family: 'Poppins', sans-serif; /* + fallback */
  font-size: 16px;
  font-weight: 700;        /* 400 normal, 700 bold */
  line-height: 1.6;        /* jarak antar baris    */
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;   /* hapus underline link */
  letter-spacing: 1px;
}</code></pre><p>Tips: <code>line-height 1.5–1.7</code> membuat paragraf nyaman dibaca — rahasia website yang enak dipandang.</p>`},
{k:"boxmodel",judul:"Box Model: Padding, Margin, Border",materi:`<p>Setiap elemen adalah kotak berlapis: <b>konten → padding → border → margin</b>.</p><pre><code>.kartu {
  padding: 16px;          /* ruang DALAM  */
  margin: 10px 20px;      /* atas-bawah 10, kiri-kanan 20 */
  border: 1px solid #ddd;
  border-radius: 12px;    /* sudut lengkung; 50% = lingkaran */
  max-width: 600px;
  margin-inline: auto;    /* tengah horizontal */
}</code></pre><p>Empat nilai margin/padding urut jarum jam: atas-kanan-bawah-kiri. Selalu pakai <code>box-sizing: border-box</code> agar width sudah termasuk padding & border — ukuran jadi mudah diprediksi.</p>`},
{k:"layout",judul:"Layout Modern: Display & Flexbox",materi:`<p><b>Block</b> (div, p) memulai baris baru; <b>inline</b> (span, a) mengikuti alur teks. <code>display:none</code> menghilangkan elemen total.</p><p><b>Flexbox</b> — cara modern menata satu dimensi:</p><pre><code>.wadah {
  display: flex;
  justify-content: center;   /* sumbu utama   */
  align-items: center;       /* sumbu silang  */
  gap: 16px;                 /* jarak item    */
  flex-wrap: wrap;           /* turun baris   */
  flex-direction: column;    /* jadi vertikal */
}</code></pre><p>Kombinasi <code>justify-content:center</code> + <code>align-items:center</code> = elemen tepat di tengah. <code>flex:1</code> pada item = mengisi sisa ruang.</p>`},
{k:"posisi",judul:"Position & CSS Grid",materi:`<p><b>Position</b>: <code>static</code> (default) → <code>relative</code> (geser dari posisi asal, jadi acuan anak) → <code>absolute</code> (lepas dari alur, relatif ke leluhur ber-position) → <code>fixed</code> (menempel layar) → <code>sticky</code> (menempel saat discroll). <code>z-index</code> mengatur tumpukan depan-belakang.</p><p><b>Grid</b> untuk layout 2 dimensi:</p><pre><code>.galeri {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 kolom rata */
  gap: 16px;
}
.sidebar-layout { grid-template-columns: 200px 1fr; }</code></pre>`},
{k:"dekorasi",judul:"Efek, Animasi & Responsif",materi:`<p>Sentuhan yang membuat website terasa hidup:</p><pre><code>.btn {
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  transition: all .3s ease;
  cursor: pointer;
}
.btn:hover { transform: scale(1.05); }
</code></pre><p><code>:hover</code>, <code>:focus</code>, <code>::before/::after</code> adalah pseudo yang paling sering dipakai. Variabel CSS: <code>:root { --utama: #4c8dff; }</code> → <code>var(--utama)</code>.</p><p><b>Responsif</b> — satuan relatif (<code>rem</code>, <code>%</code>, <code>vh/vw</code>) + media query:</p><pre><code>@media (max-width: 600px) {
  .galeri { grid-template-columns: 1fr; }
}</code></pre>`},
];
