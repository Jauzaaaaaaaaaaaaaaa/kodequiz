// ============ BELAJAR DARI AWAL — Proyek "SalesKu: Dashboard Penjualan" ============
// Setiap langkah: judul, tujuan, penjelasan (HTML), konsep (kaitan ke Excel/SQL),
// harapan (apa yang seharusnya tampil), cek (pengecekan otomatis).
// Fungsi cek menerima ctx: { $, $$, teks, gaya, ev, kode, doc, win, muatUlang }.
// Potongan kode jawaban ada di proyek-blok.js.

const RP = n => "Rp " + Number(n).toLocaleString("id-ID");
const transparan = w => !w || w === "rgba(0, 0, 0, 0)" || w === "transparent";

const PROYEK = {
  judul: "SalesKu — Dashboard Penjualan Tim Sales",
  ringkas: "Bangun dari nol sebuah web dashboard untuk salesperson: kartu KPI, form input transaksi, tabel, ranking sales, filter per sales, highlight transaksi besar, dan penyimpanan data. Mirip yang kamu buat waktu magang, tapi kali ini kamu yang mengetik setiap barisnya.",
  langkah: [
  // ---------- 1 ----------
  {judul:"Kerangka halaman HTML", file:["html"],
   tujuan:"Membuat struktur dasar halaman web dan menghubungkannya ke file CSS & JavaScript.",
   penjelasan:`<p>Setiap halaman web dimulai dari kerangka yang sama. Tiga hal penting di langkah ini:</p>
<ul><li><code>&lt;head&gt;</code> berisi info halaman. <code>&lt;link href="style.css"&gt;</code> menyambungkan file CSS.</li>
<li><code>&lt;body&gt;</code> berisi yang tampil di layar: header berjudul <b>SalesKu</b> dan wadah <code>&lt;main&gt;</code>.</li>
<li><code>&lt;script src="app.js"&gt;</code> diletakkan di akhir body, supaya JavaScript berjalan setelah semua elemen HTML siap.</li></ul>
<p>💡 Ketik sendiri, jangan copy-paste. Mengetik membuat tangan dan otak hafal polanya — dan error kecil yang kamu temui justru bagian dari belajar.</p>`,
   harapan:"Judul besar 'SalesKu' dan teks kecil di bawahnya. Masih polos tanpa warna — itu normal.",
   cek:[
    {t:"Baris pertama adalah <!DOCTYPE html>", f:c=>/^\s*<!doctype html>/i.test(c.kode.html), h:"Tulis <!DOCTYPE html> di baris paling atas, sebelum apa pun."},
    {t:"Ada <title> di dalam <head>", f:c=>c.doc.title.trim().length>0, h:"Tambahkan <title>SalesKu — Dashboard Penjualan</title> di dalam <head>."},
    {t:"Ada <h1> bertuliskan SalesKu", f:c=>(c.teks("h1")||"").includes("SalesKu"), h:"Di dalam <header class=\"header\"> tulis <h1>SalesKu</h1>. Perhatikan huruf besar S dan K."},
    {t:"File CSS disambungkan: <link rel=\"stylesheet\" href=\"style.css\">", f:c=>/<link[^>]+href=["']style\.css["']/i.test(c.kode.html), h:"Di dalam <head>: <link rel=\"stylesheet\" href=\"style.css\">"},
    {t:"Ada <main class=\"wadah\">", f:c=>!!c.$("main.wadah"), h:"Setelah </header>, buat <main class=\"wadah\"> … </main>."},
    {t:"File JS disambungkan: <script src=\"app.js\"></script>", f:c=>/<script[^>]+src=["']app\.js["'][^>]*>\s*<\/script>/i.test(c.kode.html), h:"Sebelum </body>: <script src=\"app.js\"></script> (tag pembuka DAN penutup)."},
   ]},
  // ---------- 2 ----------
  {judul:"Kartu KPI (angka ringkasan)", file:["html"],
   tujuan:"Membuat 3 kartu angka penting: total penjualan, jumlah transaksi, dan rata-rata.",
   penjelasan:`<p><b>KPI</b> (Key Performance Indicator) adalah angka yang pertama kali dilihat manajer sales setiap pagi. Kita siapkan dulu wadahnya; angkanya nanti diisi JavaScript.</p>
<ul><li><code>&lt;section class="kpi-grid"&gt;</code> membungkus 3 kartu.</li>
<li>Setiap angka diberi <code>id</code> unik (<code>total</code>, <code>transaksi</code>, <code>rata</code>) — id seperti alamat rumah yang nanti dipakai JavaScript untuk menemukan elemen itu.</li>
<li><code>&lt;!-- ... --&gt;</code> adalah komentar: catatan untuk dirimu sendiri, tidak tampil di layar.</li></ul>`,
   konsep:"Sama dengan baris ringkasan di atas laporan Excel: =SUM(), =COUNT(), =AVERAGE().",
   harapan:"Tiga pasang teks: 'Total Penjualan Rp 0', 'Jumlah Transaksi 0', 'Rata-rata per Transaksi Rp 0'. Masih tersusun ke bawah.",
   cek:[
    {t:"Ada <section class=\"kpi-grid\"> berisi 3 kartu .kpi", f:c=>c.$$(".kpi-grid .kpi").length===3, h:"Di dalam <section class=\"kpi-grid\"> harus ada tepat tiga <div class=\"kpi\">."},
    {t:"Ada elemen dengan id=\"total\"", f:c=>!!c.$("#total"), h:"<strong id=\"total\">Rp 0</strong>"},
    {t:"Ada elemen dengan id=\"transaksi\"", f:c=>!!c.$("#transaksi"), h:"<strong id=\"transaksi\">0</strong>"},
    {t:"Ada elemen dengan id=\"rata\"", f:c=>!!c.$("#rata"), h:"<strong id=\"rata\">Rp 0</strong>"},
    {t:"Setiap kartu punya label (.kpi-label)", f:c=>c.$$(".kpi .kpi-label").length===3, h:"Di setiap kartu tambahkan <span class=\"kpi-label\">…</span>."},
   ]},
  // ---------- 3 ----------
  {judul:"Form input transaksi", file:["html"],
   tujuan:"Membuat formulir untuk memasukkan transaksi baru: sales, produk, qty, dan harga.",
   penjelasan:`<p>Form adalah cara pengguna memasukkan data. Elemen yang dipakai:</p>
<ul><li><code>&lt;select&gt;</code> + <code>&lt;option&gt;</code> → pilihan nama sales (mencegah salah ketik nama).</li>
<li><code>&lt;input type="number"&gt;</code> → hanya menerima angka. <code>min="1"</code> mencegah qty 0 atau minus.</li>
<li><code>required</code> → wajib diisi sebelum bisa disimpan.</li>
<li><code>&lt;button type="submit"&gt;</code> → tombol pengirim form.</li></ul>`,
   konsep:"Mirip Data Validation di Excel (Data → Data Validation → List): membatasi input supaya data tetap bersih.",
   harapan:"Judul 'Tambah Transaksi' dengan dropdown sales, tiga kotak input, dan tombol Simpan. Kalau tombol Simpan diklik, belum terjadi apa-apa — itu baru dikerjakan di langkah 12.",
   cek:[
    {t:"Ada <form id=\"form-transaksi\">", f:c=>!!c.$("form#form-transaksi"), h:"<form id=\"form-transaksi\"> … </form>"},
    {t:"Dropdown #sales berisi pilihan Andi, Bima, Citra, Dewi", f:c=>{const s=c.$("select#sales");return !!s&&["Andi","Bima","Citra","Dewi"].every(n=>[...s.options].some(o=>o.value===n));}, h:"<select id=\"sales\"> dengan <option>Andi</option> … sampai Dewi."},
    {t:"Ada input #produk", f:c=>!!c.$("input#produk"), h:"<input id=\"produk\" placeholder=\"Nama produk\" required>"},
    {t:"Input #qty bertipe number", f:c=>c.$("input#qty")?.type==="number", h:"<input id=\"qty\" type=\"number\" …>"},
    {t:"Input #harga bertipe number", f:c=>c.$("input#harga")?.type==="number", h:"<input id=\"harga\" type=\"number\" …>"},
    {t:"Ada tombol submit di dalam form", f:c=>!!c.$("#form-transaksi button[type=submit], #form-transaksi button:not([type])"), h:"<button type=\"submit\">Simpan</button> di dalam form."},
   ]},
  // ---------- 4 ----------
  {judul:"Tabel daftar transaksi", file:["html"],
   tujuan:"Menyiapkan tabel untuk menampilkan semua transaksi.",
   penjelasan:`<ul><li><code>&lt;thead&gt;</code> = baris judul kolom (seperti baris 1 di Excel).</li>
<li><code>&lt;th&gt;</code> = sel judul, <code>&lt;td&gt;</code> = sel data, <code>&lt;tr&gt;</code> = satu baris.</li>
<li><code>&lt;tbody id="isi-tabel"&gt;</code> sengaja dibiarkan <b>kosong</b>. Isinya akan dibuat otomatis oleh JavaScript dari data — kita tidak mengetik baris tabel satu per satu.</li></ul>`,
   konsep:"Tabel HTML = sheet Excel. thead = baris header, tbody = baris data.",
   harapan:"Judul 'Daftar Transaksi' dan satu baris judul kolom: Sales, Produk, Qty, Harga, Subtotal. Belum ada isi.",
   cek:[
    {t:"Ada <table> dengan 5 judul kolom (<th>)", f:c=>c.$$("table thead th").length===5, h:"Di dalam <thead><tr> … </tr></thead> buat 5 <th>: Sales, Produk, Qty, Harga, Subtotal."},
    {t:"Kolom terakhir bernama Subtotal", f:c=>{const th=c.$$("table thead th");return th.length>0&&th[th.length-1].textContent.trim()==="Subtotal";}, h:"Urutan kolom: Sales, Produk, Qty, Harga, Subtotal."},
    {t:"Ada <tbody id=\"isi-tabel\">", f:c=>!!c.$("tbody#isi-tabel"), h:"<tbody id=\"isi-tabel\"></tbody> setelah </thead>."},
   ]},
  // ---------- 5 ----------
  {judul:"CSS dasar: warna, font, dan wadah", file:["css"],
   tujuan:"Memberi warna latar yang tenang, header berwarna, dan membatasi lebar konten.",
   penjelasan:`<p>Sekarang pindah ke tab <b>style.css</b>. Pola CSS: <code>selektor { properti: nilai; }</code></p>
<ul><li><code>* { box-sizing: border-box; }</code> → ukuran elemen jadi lebih mudah diprediksi (padding tidak menambah lebar).</li>
<li><code>body</code> → warna latar, warna teks, dan font seluruh halaman.</li>
<li><code>.header</code> → titik (.) berarti <i>class</i>. Memberi warna pada header.</li>
<li><code>.wadah { max-width: 960px; margin: 0 auto; }</code> → konten maksimal 960px dan berada di tengah layar.</li></ul>`,
   harapan:"Latar berubah menjadi hijau keabu-abuan lembut, header hijau tua dengan teks putih, dan konten berada di tengah.",
   cek:[
    {t:"body punya warna latar", f:c=>!transparan(c.gaya("body","backgroundColor")), h:"body { background: #f3f6f4; }"},
    {t:"body margin 0 (tidak ada celah putih di pinggir)", f:c=>c.gaya("body","marginTop")==="0px", h:"body { margin: 0; }"},
    {t:".header punya warna latar", f:c=>!transparan(c.gaya(".header","backgroundColor")), h:".header { background: #4a8c7f; color: white; padding: 24px; }"},
    {t:".wadah dibatasi lebarnya (max-width)", f:c=>c.gaya(".wadah","maxWidth")!=="none", h:".wadah { max-width: 960px; margin: 0 auto; padding: 24px; }"},
   ]},
  // ---------- 6 ----------
  {judul:"CSS kartu KPI dengan Grid", file:["css"],
   tujuan:"Menyusun 3 kartu KPI berjajar dan tetap rapi di layar HP.",
   penjelasan:`<p><b>CSS Grid</b> menyusun elemen dalam kolom-kolom:</p>
<ul><li><code>display: grid</code> → aktifkan grid.</li>
<li><code>repeat(auto-fit, minmax(200px, 1fr))</code> → "buat kolom sebanyak yang muat, minimal 200px". Di laptop jadi 3 kolom, di HP otomatis turun jadi 1 kolom. Inilah dasar desain <i>responsive</i>.</li>
<li><code>gap</code> → jarak antar kartu. <code>border-radius</code> → sudut membulat. <code>box-shadow</code> → bayangan halus.</li></ul>`,
   harapan:"Tiga kartu putih bersudut bulat berjajar ke samping, dengan angka besar.",
   cek:[
    {t:".kpi-grid memakai display: grid", f:c=>c.gaya(".kpi-grid","display")==="grid", h:".kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }"},
    {t:".kpi berlatar putih", f:c=>c.gaya(".kpi","backgroundColor")==="rgb(255, 255, 255)", h:".kpi { background: white; }"},
    {t:".kpi bersudut bulat (border-radius)", f:c=>c.gaya(".kpi","borderTopLeftRadius")!=="0px", h:".kpi { border-radius: 12px; }"},
    {t:".kpi-label tampil sebagai block", f:c=>c.gaya(".kpi-label","display")==="block", h:".kpi-label { display: block; } → label di atas, angka di bawah."},
   ]},
  // ---------- 7 ----------
  {judul:"CSS panel, form, dan tabel", file:["css"],
   tujuan:"Merapikan form dan tabel agar nyaman dibaca.",
   penjelasan:`<ul><li><code>.panel</code> → kotak putih untuk setiap bagian.</li>
<li><code>form { display: flex; flex-wrap: wrap; }</code> → <b>Flexbox</b>: input berjajar ke samping, dan pindah baris otomatis jika layar sempit.</li>
<li><code>border-collapse: collapse</code> → garis tabel menyatu (tanpa garis ganda).</li>
<li><code>input, select, button { … }</code> → satu aturan untuk tiga selektor sekaligus (pisahkan dengan koma).</li></ul>`,
   harapan:"Form dan tabel berada di dalam kotak putih. Input berjajar ke samping, tombol Simpan hijau, dan tabel bergaris tipis.",
   cek:[
    {t:".panel berlatar putih", f:c=>c.gaya(".panel","backgroundColor")==="rgb(255, 255, 255)", h:".panel { background: white; border-radius: 12px; padding: 20px; }"},
    {t:"form memakai display: flex", f:c=>c.gaya("form","display")==="flex", h:"form { display: flex; flex-wrap: wrap; gap: 8px; }"},
    {t:"tabel memakai border-collapse: collapse", f:c=>c.gaya("table","borderCollapse")==="collapse", h:"table { width: 100%; border-collapse: collapse; }"},
    {t:"tombol bisa diklik (cursor: pointer)", f:c=>c.gaya("button","cursor")==="pointer", h:"button { background: #4a8c7f; color: white; border: none; cursor: pointer; }"},
   ]},
  // ---------- 8 ----------
  {judul:"JavaScript pertama: data transaksi", file:["js"],
   tujuan:"Menyimpan data penjualan di JavaScript sebagai array berisi object.",
   penjelasan:`<p>Pindah ke tab <b>app.js</b>. Data disimpan sebagai <b>array</b> (daftar, ditulis dengan <code>[ ]</code>) yang berisi <b>object</b> (ditulis dengan <code>{ }</code>):</p>
<ul><li>Satu object = satu baris transaksi. <code>sales</code>, <code>produk</code>, <code>qty</code>, <code>harga</code> adalah nama kolomnya.</li>
<li>Teks diapit kutip <code>"Andi"</code>, angka ditulis polos <code>7000000</code> (tanpa titik ribuan!).</li>
<li><code>const</code> = variabel yang tidak akan diganti dengan array lain (isinya tetap boleh bertambah).</li>
<li><code>console.log()</code> menampilkan pesan di tab <b>Console</b> di panel pratinjau — alat utama programmer untuk mengecek.</li></ul>`,
   konsep:"Array of object = tabel. Satu object = satu baris, nama properti = nama kolom. Persis seperti sheet Penjualan di modul Excel.",
   harapan:"Tampilan halaman belum berubah. Buka tab Console di pratinjau: harus muncul 'Jumlah transaksi: 5'.",
   cek:[
    {t:"Variabel transaksi sudah dibuat", f:c=>c.ev("typeof transaksi")!=="undefined", h:"const transaksi = [ … ];  — perhatikan ejaan 'transaksi'."},
    {t:"transaksi adalah array berisi minimal 5 data", f:c=>c.ev("Array.isArray(transaksi) && transaksi.length >= 5"), h:"Pastikan memakai kurung siku [ ] dan ada 5 object di dalamnya, dipisah koma."},
    {t:"Setiap data punya sales, produk, qty, harga", f:c=>c.ev("transaksi.every(t => typeof t.sales==='string' && typeof t.produk==='string' && typeof t.qty==='number' && typeof t.harga==='number')"), h:"qty dan harga harus angka TANPA kutip: qty: 2, harga: 7000000."},
   ]},
  // ---------- 9 ----------
  {judul:"Fungsi formatRupiah", file:["js"],
   tujuan:"Membuat fungsi yang mengubah 15000 menjadi 'Rp 15.000'.",
   penjelasan:`<p><b>Fungsi</b> adalah resep yang bisa dipakai berulang kali. Kita menulisnya sekali, lalu memanggilnya di banyak tempat.</p>
<ul><li><code>function formatRupiah(angka) { … }</code> → nama fungsi + <i>parameter</i> (bahan masukan).</li>
<li><code>toLocaleString("id-ID")</code> → format angka gaya Indonesia (titik sebagai pemisah ribuan).</li>
<li><code>return</code> → hasil yang dikembalikan fungsi.</li></ul>`,
   konsep:"Seperti Format Cells → Currency di Excel, tetapi ditulis sebagai kode.",
   harapan:"Di Console muncul 'Rp 15.000'.",
   cek:[
    {t:"Fungsi formatRupiah sudah dibuat", f:c=>c.ev("typeof formatRupiah")==="function", h:"function formatRupiah(angka) { return \"Rp \" + angka.toLocaleString(\"id-ID\"); }"},
    {t:"formatRupiah(15000) menghasilkan \"Rp 15.000\"", f:c=>c.ev("formatRupiah(15000)")==="Rp 15.000", h:"Jangan lupa spasi setelah 'Rp': \"Rp \" + …"},
    {t:"formatRupiah(7000000) menghasilkan \"Rp 7.000.000\"", f:c=>c.ev("formatRupiah(7000000)")==="Rp 7.000.000", h:"Pakai toLocaleString(\"id-ID\") agar pemisah ribuannya titik."},
   ]},
  // ---------- 10 ----------
  {judul:"Tampilkan data ke tabel", file:["js"],
   tujuan:"Mengisi tabel HTML secara otomatis dari array transaksi.",
   penjelasan:`<p>Ini momen 'ajaib' pertama: data di JavaScript muncul di layar.</p>
<ul><li><code>document.getElementById("isi-tabel")</code> → menemukan elemen tbody lewat id-nya.</li>
<li><code>transaksi.forEach(function (t) { … })</code> → ulangi untuk setiap transaksi; <code>t</code> adalah transaksi yang sedang diproses.</li>
<li><b>Template literal</b> (tanda backtick <code>\`</code>) bisa menyisipkan nilai dengan <code>\${…}</code>.</li>
<li><code>render()</code> → satu fungsi pusat yang menjalankan semua tampilan. Nanti setiap ada data baru, cukup panggil <code>render()</code>.</li></ul>
<p>⌨️ Tanda backtick <code>\`</code> ada di kiri atas keyboard, di bawah tombol Esc.</p>`,
   konsep:"Subtotal = qty × harga, sama dengan rumus =D2*E2 di Excel yang ditarik ke bawah. forEach = 'tarik rumus ke bawah'.",
   harapan:"Tabel berisi 5 baris transaksi, lengkap dengan harga dan subtotal dalam format Rupiah.",
   cek:[
    {t:"Fungsi tampilkanTabel dan render sudah dibuat", f:c=>c.ev("typeof tampilkanTabel === 'function' && typeof render === 'function'"), h:"Buat function tampilkanTabel() { … } dan function render() { tampilkanTabel(); }"},
    {t:"render() dipanggil di baris paling bawah", f:c=>/render\(\)\s*;?\s*$/.test(c.kode.js.trim()), h:"Baris terakhir app.js: render();"},
    {t:"Jumlah baris tabel = jumlah data transaksi", f:c=>c.$$("#isi-tabel tr").length===c.ev("transaksi.length"), h:"Di dalam forEach, tambahkan satu <tr> untuk setiap transaksi dengan tbody.innerHTML += `…`."},
    {t:"Setiap baris punya 5 kolom", f:c=>{const tr=c.$("#isi-tabel tr");return !!tr&&tr.children.length===5;}, h:"Lima <td>: sales, produk, qty, harga, subtotal."},
    {t:"Kolom Subtotal = qty × harga dalam format Rupiah", f:c=>{const tr=c.$("#isi-tabel tr");const t=c.ev("transaksi[0]");return !!tr&&tr.children[4].textContent.trim()===RP(t.qty*t.harga);}, h:"const subtotal = t.qty * t.harga; lalu <td>${formatRupiah(subtotal)}</td>"},
   ]},
  // ---------- 11 ----------
  {judul:"Hitung KPI otomatis", file:["js"],
   tujuan:"Mengisi kartu Total, Jumlah Transaksi, dan Rata-rata dari data.",
   penjelasan:`<ul><li><code>let total = 0;</code> → variabel yang nilainya akan berubah (pakai <code>let</code>, bukan const).</li>
<li><code>total += t.qty * t.harga;</code> → tambahkan subtotal tiap transaksi ke total.</li>
<li><code>jumlah &gt; 0 ? total / jumlah : 0</code> → <b>operator ternary</b>: "jika ada data, bagi; jika tidak, 0". Mencegah pembagian dengan nol.</li>
<li><code>.textContent = …</code> → mengganti teks di dalam elemen.</li>
<li>Jangan lupa tambahkan <code>hitungKPI();</code> di dalam <code>render()</code>.</li></ul>`,
   konsep:"total = SUM(F2:F11), jumlah = COUNT(), rata = AVERAGE(). Ternary = IF(jumlah>0, total/jumlah, 0).",
   harapan:"Kartu KPI terisi: Total Penjualan Rp 29.250.000, Jumlah Transaksi 5, Rata-rata Rp 5.850.000 (dengan 5 data awal).",
   cek:[
    {t:"Fungsi hitungKPI sudah dibuat", f:c=>c.ev("typeof hitungKPI")==="function", h:"function hitungKPI() { … }"},
    {t:"Kartu Total menampilkan total penjualan yang benar", f:c=>c.teks("#total")===RP(c.ev("transaksi.reduce((a,t)=>a+t.qty*t.harga,0)")), h:"document.getElementById(\"total\").textContent = formatRupiah(total);  — dan pastikan hitungKPI() dipanggil di dalam render()."},
    {t:"Kartu Jumlah Transaksi benar", f:c=>c.teks("#transaksi")===String(c.ev("transaksi.length")), h:"document.getElementById(\"transaksi\").textContent = jumlah;"},
    {t:"Kartu Rata-rata benar (dibulatkan)", f:c=>{const n=c.ev("transaksi.length"),s=c.ev("transaksi.reduce((a,t)=>a+t.qty*t.harga,0)");return c.teks("#rata")===RP(Math.round(n?s/n:0));}, h:"formatRupiah(Math.round(rata))"},
   ]},
  // ---------- 12 ----------
  {judul:"Simpan transaksi dari form", file:["js"],
   tujuan:"Saat tombol Simpan diklik, transaksi baru masuk ke tabel dan KPI langsung ter-update.",
   penjelasan:`<p>Inilah <b>interaktivitas</b>: halaman bereaksi terhadap tindakan pengguna.</p>
<ul><li><code>addEventListener("submit", …)</code> → "kalau form dikirim, jalankan fungsi ini".</li>
<li><code>e.preventDefault()</code> → mencegah perilaku bawaan form (memuat ulang halaman).</li>
<li><code>.value</code> → isi yang diketik pengguna. Hasilnya selalu <b>teks</b>, jadi qty dan harga diubah dengan <code>Number()</code> — kalau tidak, "2" + "3" = "23"!</li>
<li><code>transaksi.push(…)</code> → menambah data ke akhir array.</li>
<li><code>form.reset()</code> lalu <code>render()</code> → kosongkan form dan gambar ulang semuanya.</li></ul>`,
   konsep:"push() = menambah baris baru di bawah tabel Excel. render() = menekan Refresh pada pivot table.",
   harapan:"Isi form (misal Bima, Webcam, 2, 500000) lalu klik Simpan: baris baru muncul di tabel, KPI berubah, dan form kosong kembali.",
   cek:[
    {t:"Mengirim form menambah 1 data ke array transaksi", f:async c=>{const n=c.ev("transaksi.length");c.isiForm();await c.tunggu(60);return c.ev("transaksi.length")===n+1;}, h:"Di dalam listener submit: transaksi.push({ sales: …, produk: …, qty: …, harga: … });"},
    {t:"Tabel bertambah 1 baris setelah simpan", f:async c=>{const n=c.$$("#isi-tabel tr").length;c.isiForm();await c.tunggu(60);return c.$$("#isi-tabel tr").length===n+1;}, h:"Panggil render(); setelah push."},
    {t:"qty dan harga disimpan sebagai angka (Number)", f:async c=>{c.isiForm();await c.tunggu(60);return c.ev("typeof transaksi[transaksi.length-1].qty === 'number' && typeof transaksi[transaksi.length-1].harga === 'number'");}, h:"qty: Number(document.getElementById(\"qty\").value)"},
    {t:"Form dikosongkan setelah simpan", f:async c=>{c.isiForm();await c.tunggu(60);return c.$("#produk").value==="";}, h:"form.reset();"},
   ]},
  // ---------- 13 ----------
  {judul:"Ranking sales (GROUP BY versi JavaScript)", file:["html","css","js"],
   tujuan:"Menampilkan urutan sales dari penjualan terbesar ke terkecil.",
   penjelasan:`<p>Langkah ini menyentuh <b>tiga file</b>. Kerjakan satu per satu: HTML → CSS → JS.</p>
<ul><li><code>const perSales = {}</code> → object kosong sebagai 'kantong' total per nama sales.</li>
<li><code>(perSales[t.sales] || 0) + …</code> → ambil total sebelumnya (atau 0 jika belum ada), lalu tambahkan.</li>
<li><code>Object.entries()</code> mengubah object menjadi array <code>[["Andi", 14750000], …]</code> supaya bisa diurutkan.</li>
<li><code>.sort((a, b) =&gt; b[1] - a[1])</code> → urutkan dari terbesar.</li>
<li>Tambahkan <code>tampilkanRanking();</code> di dalam <code>render()</code>.</li></ul>`,
   konsep:"Ini PERSIS: SELECT sales, SUM(qty*harga) FROM transaksi GROUP BY sales ORDER BY 2 DESC. Atau pivot: Rows = Sales, Values = Sum.",
   harapan:"Bagian 'Ranking Sales' berisi daftar bernomor, dengan Andi di posisi pertama untuk data awal.",
   cek:[
    {t:"Ada <ol id=\"ranking\"> di HTML", f:c=>!!c.$("ol#ranking"), h:"index.html: <ol id=\"ranking\"></ol> di dalam section baru."},
    {t:"Fungsi tampilkanRanking sudah dibuat", f:c=>c.ev("typeof tampilkanRanking")==="function", h:"function tampilkanRanking() { … }"},
    {t:"Jumlah item ranking = jumlah sales yang berbeda", f:c=>c.$$("#ranking li").length===c.ev("new Set(transaksi.map(t=>t.sales)).size"), h:"Pastikan tampilkanRanking(); dipanggil di dalam render()."},
    {t:"Urutan pertama adalah sales dengan penjualan terbesar", f:c=>{const top=c.ev("Object.entries(transaksi.reduce((o,t)=>(o[t.sales]=(o[t.sales]||0)+t.qty*t.harga,o),{})).sort((a,b)=>b[1]-a[1])[0][0]");return (c.teks("#ranking li")||"").startsWith(top);}, h:"Urutkan menurun: .sort(function (a, b) { return b[1] - a[1]; })"},
   ]},
  // ---------- 14 ----------
  {judul:"Cek penjualan per sales (SUMIFS versi JavaScript)", file:["html","js"],
   tujuan:"Memilih satu nama sales lalu langsung melihat jumlah transaksi dan totalnya.",
   penjelasan:`<ul><li>Event <code>"change"</code> → berjalan setiap kali pilihan dropdown berubah.</li>
<li><code>e.target.value</code> → nilai yang sedang dipilih.</li>
<li><code>transaksi.filter(t =&gt; t.sales === nama)</code> → ambil hanya baris milik sales itu. <code>===</code> artinya 'sama persis'.</li>
<li>Lalu dijumlahkan dengan forEach seperti di hitungKPI.</li></ul>`,
   konsep:"filter + jumlah = SUMIFS(F:F, A:A, nama). data.length = COUNTIFS(A:A, nama). Di SQL: SELECT COUNT(*), SUM(...) WHERE sales = 'Andi'.",
   harapan:"Pilih 'Andi' di dropdown → muncul 'Andi: 2 transaksi, total Rp 14.750.000' (dengan data awal).",
   cek:[
    {t:"Ada dropdown #pilih-sales dan paragraf #hasil-sales", f:c=>!!c.$("select#pilih-sales")&&!!c.$("#hasil-sales"), h:"index.html: <select id=\"pilih-sales\"> … dan <p id=\"hasil-sales\">…</p>"},
    {t:"Memilih Andi menampilkan jumlah transaksi & total yang benar", f:async c=>{const s=c.$("#pilih-sales");s.value="Andi";s.dispatchEvent(new c.win.Event("change",{bubbles:true}));await c.tunggu(30);const n=c.ev("transaksi.filter(t=>t.sales==='Andi').length"),tot=c.ev("transaksi.filter(t=>t.sales==='Andi').reduce((a,t)=>a+t.qty*t.harga,0)");const x=c.teks("#hasil-sales")||"";return x.includes(n+" transaksi")&&x.includes(RP(tot));}, h:"Teks akhirnya: nama + \": \" + data.length + \" transaksi, total \" + formatRupiah(total)"},
   ]},
  // ---------- 15 ----------
  {judul:"Highlight transaksi besar (Conditional Formatting)", file:["css","js"],
   tujuan:"Mewarnai baris tabel otomatis jika subtotal ≥ Rp 5.000.000.",
   penjelasan:`<p>Kita akan <b>mengubah</b> kode lama, bukan hanya menambah — hal yang sangat sering dilakukan programmer.</p>
<ul><li>CSS: buat class <code>.besar</code> dengan latar hijau muda.</li>
<li>JS: di dalam <code>tampilkanTabel()</code>, hitung <code>const kelas = subtotal &gt;= 5000000 ? "besar" : "";</code></li>
<li>Lalu <code>&lt;tr&gt;</code> diganti menjadi <code>&lt;tr class="\${kelas}"&gt;</code>.</li></ul>`,
   konsep:"Ini conditional formatting dengan rumus: =$F2>=5000000 diterapkan ke seluruh baris. Bedanya, di sini kamu yang menulis aturannya.",
   harapan:"Baris dengan subtotal besar (Laptop Andi 14 juta, Monitor Citra 6 juta, Laptop Dewi 7 juta) berlatar hijau muda dan tebal.",
   cek:[
    {t:"Ada aturan CSS .besar", f:c=>/\.besar\s*\{/.test(c.kode.css), h:"style.css: .besar { background: #e4f3ea; font-weight: 600; }"},
    {t:"Baris dengan subtotal ≥ 5 juta punya class 'besar', yang lain tidak", f:c=>{const rows=c.$$("#isi-tabel tr");const sub=c.ev("transaksi.map(t=>t.qty*t.harga)");return rows.length===sub.length&&rows.every((r,i)=>r.classList.contains("besar")===(sub[i]>=5000000));}, h:"const kelas = subtotal >= 5000000 ? \"besar\" : \"\";  lalu <tr class=\"${kelas}\">"},
   ]},
  // ---------- 16 ----------
  {judul:"Simpan data agar tidak hilang (localStorage)", file:["js"],
   tujuan:"Data yang ditambahkan tetap ada walau halaman di-refresh.",
   penjelasan:`<p>Saat ini, transaksi baru hilang saat halaman di-refresh karena hanya tersimpan di memori. <b>localStorage</b> adalah penyimpanan kecil di browser.</p>
<ul><li><code>localStorage.setItem("saleskuData", JSON.stringify(transaksi))</code> → simpan. localStorage hanya bisa menyimpan teks, jadi array diubah dulu jadi teks JSON.</li>
<li><code>JSON.parse(…)</code> → ubah teks JSON kembali menjadi array.</li>
<li><code>tersimpan ? JSON.parse(tersimpan) : dataAwal</code> → jika ada data tersimpan pakai itu, jika tidak pakai data awal.</li>
<li>Bagian data lama <b>diganti</b>: nama array awal diubah menjadi <code>dataAwal</code>.</li></ul>
<p>🎉 Ini langkah terakhir. Setelah lulus, kamu bisa mengunduh proyekmu dan mempublikasikannya di GitHub & Netlify.</p>`,
   konsep:"Seperti menekan Save di Excel. Di aplikasi sungguhan, data disimpan di database (dan di situlah SQL dipakai).",
   harapan:"Tampilan sama seperti sebelumnya. Tambahkan transaksi, lalu klik '↻ Muat ulang' di pratinjau: transaksinya masih ada. Klik 'Hapus data tersimpan' untuk kembali ke data awal.",
   cek:[
    {t:"render() menyimpan data ke localStorage", f:c=>{const s=c.win.localStorage.getItem("saleskuData");try{return Array.isArray(JSON.parse(s))&&JSON.parse(s).length===c.ev("transaksi.length");}catch(e){return false;}}, h:"Di dalam render(): localStorage.setItem(\"saleskuData\", JSON.stringify(transaksi));"},
    {t:"Saat dibuka ulang, data diambil dari localStorage", f:async c=>{const c2=await c.muatUlang({saleskuData:JSON.stringify([{sales:"Dewi",produk:"Tes",qty:1,harga:1000}])});return c2.ev("transaksi.length")===1&&c2.$$("#isi-tabel tr").length===1;}, h:"const tersimpan = localStorage.getItem(\"saleskuData\");\nconst transaksi = tersimpan ? JSON.parse(tersimpan) : dataAwal;"},
    {t:"Tanpa data tersimpan, tetap memakai data awal", f:async c=>{const c2=await c.muatUlang({});return c2.ev("transaksi.length")>=5;}, h:"Pastikan dataAwal berisi 5 transaksi awal."},
   ]},
  ],
};
