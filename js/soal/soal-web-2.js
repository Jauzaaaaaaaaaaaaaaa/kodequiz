// ============ HTML & CSS lanjutan ============
// HTML bab 6: Aksesibilitas & SEO. CSS bab 7: Spesifisitas, variabel & responsif modern.

SOAL_HTML.push(
{k:"a11y",t:"mc",lv:1,q:"Fungsi utama atribut alt pada <img>:",kode:"<img src=\"grafik-penjualan.png\" alt=\"Grafik penjualan Januari–Juni naik 41%\">",o:["Teks pengganti yang dibacakan screen reader dan tampil jika gambar gagal dimuat; juga dibaca mesin pencari","Judul yang muncul saat mouse diarahkan","Ukuran gambar","Nama file cadangan"],a:0,
 e:"alt membuat gambar bisa 'dibaca' oleh tunanetra dan mesin pencari. Tulis isinya/maknanya, bukan 'gambar1.png'. Untuk gambar dekoratif, isi alt=\"\" supaya dilewati.",
 w:[null,"Itu atribut title.","Ukuran diatur dengan width/height atau CSS.","Tidak ada fungsi file cadangan di alt."]},
{k:"a11y",t:"mc",lv:1,q:"Cara yang benar menghubungkan label dengan input:",o:["<label for=\"email\">Email</label> <input id=\"email\" type=\"email\">","<p>Email</p> <input type=\"email\">","<input placeholder=\"Email\"> saja","<label>Email</label> di halaman lain"],a:0,
 e:"for harus sama dengan id input. Hasilnya: klik teks label memfokuskan input (area klik lebih besar di HP), dan screen reader membacakan nama field-nya. Placeholder bukan pengganti label karena hilang saat mengetik.",
 w:[null,"Paragraf biasa tidak terhubung dengan input.","Placeholder hilang saat user mulai mengetik.","Label harus berada di form yang sama dan terhubung lewat for/id."]},
{k:"a11y",t:"mc",lv:2,q:"Kenapa <button> lebih baik daripada <div onclick=\"…\"> untuk tombol?",o:["<button> otomatis bisa difokus dengan Tab, ditekan dengan Enter/Spasi, dan dikenali screen reader sebagai tombol","<div> tidak bisa diberi warna","<button> lebih cepat dimuat","Tidak ada bedanya"],a:0,
 e:"Elemen semantik memberi aksesibilitas gratis. Membuat <div> berperilaku seperti tombol butuh tabindex, role, dan event keyboard tambahan — dan sering lupa.",
 w:[null,"div bisa diberi gaya apa pun.","Kecepatannya sama.","Bedanya besar untuk pengguna keyboard dan screen reader."]},
{k:"a11y",t:"mc",lv:2,q:"Struktur heading yang baik untuk satu halaman:",o:["Satu <h1> sebagai judul utama, lalu <h2> untuk bagian dan <h3> untuk sub-bagian — tanpa melompati level","Semua judul memakai <h1> agar besar","Memilih <h4> karena ukurannya pas","Tidak memakai heading, cukup <b>"],a:0,
 e:"Heading adalah 'daftar isi' halaman bagi screen reader dan mesin pencari. Ukuran tampilan diatur dengan CSS, bukan dengan memilih level heading.",
 w:[null,"Banyak h1 mengaburkan judul utama.","Level heading menunjukkan struktur, bukan ukuran.","<b> tidak memberi struktur dokumen."]},
{k:"a11y",t:"mc",lv:1,q:"Tag yang menentukan deskripsi halaman di hasil pencarian Google:",o:["<meta name=\"description\" content=\"…\">","<title>","<h1>","<footer>"],a:0,
 e:"Meta description (±150 karakter) sering tampil di bawah judul hasil pencarian dan saat link dibagikan. <title> menentukan judul tab dan judul hasil pencarian. Template portofolio di proyek ini sudah menyediakan keduanya.",
 w:[null,"<title> adalah judulnya, bukan deskripsinya.","<h1> adalah judul di dalam halaman.","Footer adalah bagian bawah halaman."]},
{k:"a11y",t:"mc",lv:1,q:"Atribut lang=\"id\" pada <html lang=\"id\"> berguna untuk…",o:["Memberi tahu browser, screen reader, dan mesin pencari bahwa bahasa halaman adalah Bahasa Indonesia","Menerjemahkan halaman otomatis","Mengubah font","Mengatur zona waktu"],a:0,
 e:"Screen reader memilih pelafalan yang benar, browser menawarkan terjemahan dengan tepat, dan mesin pencari memahami target bahasanya.",
 w:[null,"lang tidak menerjemahkan apa pun.","Font diatur dengan CSS.","Zona waktu tidak berhubungan dengan HTML."]},
{k:"a11y",t:"mc",lv:2,q:"Tombol yang hanya berisi ikon (misal 🗑) sebaiknya diberi…",kode:"<button aria-label=\"Hapus transaksi\">🗑</button>",o:["aria-label yang menjelaskan fungsinya","Warna merah saja","Ukuran yang lebih besar saja","Tidak perlu apa-apa"],a:0,
 e:"Tanpa teks, screen reader hanya membacakan 'button' atau nama emoji. aria-label memberi nama yang bermakna. Atribut title juga membantu pengguna mouse (tooltip).",
 w:[null,"Warna tidak terbaca oleh screen reader.","Ukuran tidak memberi nama tombol.","Tombol tanpa nama membingungkan pengguna screen reader."]},
{k:"a11y",t:"mc",lv:2,q:"Teks link mana yang paling baik?",o:["\"Unduh laporan penjualan Q1 (PDF)\"","\"Klik di sini\"","\"Link\"","\"https://contoh.com/files/laporan_q1_final_v2.pdf\""],a:0,
 e:"Pengguna screen reader sering melompat dari link ke link. 'Klik di sini' tidak bermakna tanpa konteks. Teks link yang deskriptif juga membantu SEO.",
 w:[null,"Tidak menjelaskan tujuan link.","Tidak bermakna.","URL panjang sulit dibaca dan dibacakan."]},
{k:"a11y",t:"mc",lv:2,q:"Tabel data yang aksesibel sebaiknya memakai…",o:["<caption> untuk judul tabel dan <th scope=\"col\"> untuk judul kolom","Hanya <td> dengan teks tebal","Gambar tabel (screenshot)","<div> yang disusun seperti tabel"],a:0,
 e:"th dan scope memberi tahu screen reader judul kolom/baris setiap sel. Gambar tabel tidak bisa dibaca, dicari, maupun disalin.",
 w:[null,"Teks tebal tidak menjelaskan struktur.","Gambar tidak bisa dibaca screen reader dan mesin pencari.","div tidak punya makna tabel."]},
{k:"a11y",t:"mc",lv:1,q:"Tanpa baris ini, halaman di HP tampil seperti versi desktop yang diperkecil:",o:["<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","<meta charset=\"UTF-8\">","<link rel=\"icon\">","<meta name=\"author\">"],a:0,
 e:"Meta viewport memberi tahu browser HP agar lebar halaman mengikuti lebar layar. Wajib untuk halaman responsif, termasuk portofolio dan proyek SalesKu.",
 w:[null,"charset mengatur penyandian karakter.","icon mengatur favicon.","author hanya informasi pembuat."]},
{k:"a11y",t:"is",lv:1,q:"Atribut <img> untuk teks alternatif gambar: ___",a:["alt"],
 h:"Tiga huruf, singkatan dari alternative.",
 e:"alt=\"deskripsi singkat\". Gambar dekoratif: alt=\"\" agar dilewati screen reader."}
);

MATERI_HTML.push(
{k:"a11y",judul:"Aksesibilitas & SEO Dasar",materi:`
<p>Halaman yang <b>aksesibel</b> bisa dipakai semua orang — termasuk pengguna keyboard dan screen reader. Bonusnya: struktur yang sama juga disukai mesin pencari (SEO).</p>
<pre><code>&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Rina — Segmentasi Pelanggan E-commerce&lt;/title&gt;
  &lt;meta name="description" content="Studi kasus segmentasi pelanggan dengan K-Means & K-Medoids."&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Judul utama (satu saja)&lt;/h1&gt;
  &lt;h2&gt;Bagian&lt;/h2&gt;  &lt;h3&gt;Sub-bagian&lt;/h3&gt;

  &lt;img src="grafik.png" alt="Grafik pendapatan naik 41% Jan–Jun"&gt;

  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input id="email" type="email"&gt;

  &lt;button aria-label="Hapus transaksi"&gt;🗑&lt;/button&gt;
  &lt;a href="laporan.pdf"&gt;Unduh laporan Q1 (PDF)&lt;/a&gt;
&lt;/body&gt;</code></pre>
<p><b>Checklist cepat:</b> semua gambar punya alt · semua input punya label · tombol memakai &lt;button&gt; · heading berurutan · teks link deskriptif · bisa dipakai hanya dengan keyboard (Tab, Enter) · kontras warna cukup.</p>
<div class="catatan">🧪 Uji halamanmu: tekan Tab berulang kali tanpa mouse. Apakah fokusnya terlihat dan semua tombol bisa dipakai? Lalu jalankan Lighthouse di Chrome DevTools (tab Lighthouse) untuk skor aksesibilitas & SEO.</div>`}
);

SOAL_CSS.push(
{k:"lanjut",t:"mc",lv:2,q:"Elemen <p class=\"info\" id=\"pesan\">. Warna teksnya adalah…",kode:"#pesan { color: blue; }\n.info  { color: green; }\np      { color: red; }",o:["blue","green","red","Campuran ketiganya"],a:0,
 e:"Spesifisitas: id (#) > class (.) / atribut / pseudo-class > tag. Selector id paling kuat, jadi biru menang walau ditulis paling atas. Itu sebabnya banyak tim menghindari id untuk styling — terlalu kuat dan sulit ditimpa.",
 w:[null,"Class kalah dari id.","Selector tag paling lemah.","Hanya satu nilai color yang dipakai."]},
{k:"lanjut",t:"mc",lv:1,q:"Dua aturan dengan spesifisitas SAMA bertabrakan. Yang menang:",kode:".tombol { background: green; }\n.tombol { background: orange; }",o:["Yang ditulis paling akhir (orange)","Yang ditulis pertama (green)","Campuran warnanya","Tidak ada, error"],a:0,
 e:"Itulah arti 'cascading' di Cascading Style Sheets: jika kekuatannya sama, aturan yang muncul belakangan menang. Urutan file CSS (link) juga berpengaruh dengan cara yang sama.",
 w:[null,"Aturan yang lebih awal tertimpa.","CSS tidak mencampur nilai.","Tabrakan aturan adalah hal normal, bukan error."]},
{k:"lanjut",t:"mc",lv:2,q:"Kenapa !important sebaiknya dihindari?",o:["Ia mengalahkan hampir semua aturan lain sehingga perubahan berikutnya ikut butuh !important — CSS jadi sulit dirawat","Karena membuat halaman lambat","Karena tidak didukung browser","Karena hanya untuk warna"],a:0,
 e:"!important adalah 'jalan pintas' yang menumpuk menjadi masalah. Lebih baik perbaiki spesifisitas atau urutan aturan. Pengecualian yang wajar: class utilitas seperti .tersembunyi { display: none !important; }.",
 w:[null,"Dampak performanya tidak berarti.","!important didukung semua browser.","Berlaku untuk properti apa pun."]},
{k:"lanjut",t:"mc",lv:1,q:"Cara memakai CSS variable (custom property) ini:",kode:":root { --utama: #4a8c7f; }",o:[".btn { background: var(--utama); }",".btn { background: --utama; }",".btn { background: $utama; }",".btn { background: utama(); }"],a:0,
 e:"Variabel CSS dideklarasikan dengan awalan -- lalu dibaca dengan var(). Ubah satu nilai di :root, dan seluruh situs ikut berubah. KodeQuiz memakai teknik ini untuk mode gelap: variabel yang sama diberi nilai berbeda.",
 w:[null,"Harus dibungkus var().","$ adalah sintaks Sass, bukan CSS murni.","Tidak ada fungsi seperti itu."]},
{k:"lanjut",t:"mc",lv:2,q:"Jika ukuran font root (html) = 16px, maka 1.5rem = …",o:["24px","1.5px","16px","15px"],a:0,
 e:"rem = kelipatan font-size root: 1.5 × 16 = 24px. Memakai rem membuat seluruh ukuran ikut membesar jika pengguna memperbesar font di pengaturan browser — lebih aksesibel daripada px. em mengikuti font-size elemen induknya.",
 w:[null,"rem adalah kelipatan, bukan piksel langsung.","Itu 1rem.","Bukan hasil perkalian 1,5 × 16."]},
{k:"lanjut",t:"mc",lv:2,q:"Pendekatan 'mobile-first' menulis media query seperti ini:",o:["Gaya dasar untuk HP, lalu @media (min-width: 768px) { … } untuk layar yang lebih besar","Gaya dasar untuk desktop, lalu @media (max-width: 768px) untuk HP","Membuat dua file HTML terpisah","Tidak memakai media query"],a:0,
 e:"Mulai dari layar kecil memaksa kamu memprioritaskan konten penting, lalu menambah tata letak saat layar lebar. Desktop-first (max-width) juga bisa, tapi biasanya menghasilkan lebih banyak aturan yang harus dibatalkan.",
 w:[null,"Itu desktop-first.","Satu HTML yang responsif lebih mudah dirawat.","Tanpa media query, tata letak sulit menyesuaikan layar."]},
{k:"lanjut",t:"mc",lv:2,q:"font-size: clamp(1.2rem, 4vw, 2rem) artinya…",o:["Ukuran mengikuti 4% lebar layar, tapi tidak pernah lebih kecil dari 1.2rem dan tidak lebih besar dari 2rem","Selalu 4vw","Selalu 2rem","Font akan berkedip"],a:0,
 e:"clamp(MIN, IDEAL, MAX) membuat tipografi responsif tanpa media query. Judul besar di desktop, tetap terbaca di HP.",
 w:[null,"4vw dibatasi oleh nilai MIN dan MAX.","2rem hanya batas atas.","clamp tidak membuat animasi."]},
{k:"lanjut",t:"mc",lv:3,q:"Grid kartu yang otomatis menyesuaikan jumlah kolom tanpa media query:",o:["grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));","grid-template-columns: 220px 220px 220px;","display: block;","float: left; width: 33%;"],a:0,
 e:"Setiap kolom minimal 220px dan membagi sisa ruang secara rata (1fr). Di HP jadi 1 kolom, di laptop 3–4 kolom. Beranda KodeQuiz memakai teknik ini untuk kartu topik.",
 w:[null,"Kolom tetap tidak menyesuaikan lebar layar.","Block tidak membuat kolom.","Float adalah teknik lama yang rapuh."]},
{k:"lanjut",t:"mc",lv:2,q:"Pseudo-class yang tepat untuk menampilkan garis fokus saat user menavigasi dengan KEYBOARD:",o:[":focus-visible",":hover",":active",":visited"],a:0,
 e:"Menghapus outline fokus (outline: none) tanpa pengganti membuat pengguna keyboard tersesat. :focus-visible hanya muncul saat navigasi keyboard, sehingga tidak mengganggu pengguna mouse.",
 w:[null,":hover untuk mouse.",":active saat sedang ditekan.",":visited untuk link yang pernah dikunjungi."]},
{k:"lanjut",t:"mc",lv:2,q:"Media query untuk mendeteksi bahwa pengguna memakai mode gelap di sistemnya:",o:["@media (prefers-color-scheme: dark) { … }","@media (dark-mode: on) { … }","@media screen and (night) { … }","@dark { … }"],a:0,
 e:"Kombinasikan dengan CSS variable: ubah nilai --bg, --teks, dll. di dalam media query tersebut, dan seluruh halaman otomatis berganti tema. Ada juga prefers-reduced-motion untuk pengguna yang ingin animasi minimal.",
 w:[null,"Tidak ada fitur media dark-mode.","Bukan sintaks media query yang valid.","Bukan at-rule yang valid."]},
{k:"lanjut",t:"is",lv:1,q:"Fungsi CSS untuk membaca nilai custom property: background: ___(--utama);",a:["var"],
 h:"Singkatan dari variable.",
 e:"var(--nama, nilai_cadangan). Nilai cadangan dipakai jika variabelnya belum didefinisikan."}
);

MATERI_CSS.push(
{k:"lanjut",judul:"Spesifisitas, Variabel & Responsif Modern",materi:`
<p><b>1. Siapa yang menang saat aturan bertabrakan?</b></p>
<pre><code>inline style  &gt;  #id  &gt;  .class / [atribut] / :hover  &gt;  tag
kekuatan sama → yang ditulis PALING AKHIR menang
!important    → mengalahkan hampir semuanya (hindari)</code></pre>
<p><b>2. CSS variable</b> — satu sumber warna untuk seluruh situs:</p>
<pre><code>:root { --utama: #4a8c7f; --bg: #f4f5ef; }
@media (prefers-color-scheme: dark) {
  :root { --utama: #77b5a7; --bg: #161c1a; }
}
.btn { background: var(--utama); }</code></pre>
<p><b>3. Satuan</b>: <code>rem</code> (kelipatan font root, 1rem = 16px), <code>em</code> (kelipatan font induk), <code>%</code>, <code>vw/vh</code> (persen layar), <code>px</code> (tetap).</p>
<p><b>4. Responsif tanpa banyak media query:</b></p>
<pre><code>h1     { font-size: clamp(1.2rem, 4vw, 2rem); }
.kartu { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }
@media (min-width: 768px) { .sidebar { display: block; } }   /* mobile-first */</code></pre>
<p><b>5. Aksesibilitas di CSS:</b> jangan hapus outline tanpa pengganti → pakai <code>:focus-visible</code>; hormati <code>prefers-reduced-motion</code> untuk mematikan animasi.</p>
<div class="catatan">💡 Buka DevTools (F12) → tab Elements → panel Styles. Aturan yang kalah tampil dicoret — cara tercepat memahami spesifisitas.</div>`}
);
