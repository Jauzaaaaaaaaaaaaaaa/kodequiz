// ============ JAVASCRIPT lanjutan — bab 9–10 ============
// JavaScript modern (ES6+) & latihan membaca kode. vr:"js" → diverifikasi dengan Node.js.

SOAL_JS.push(
// ---- BAB 9: JavaScript modern ----
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"const a = [1, 2];\nconst b = [...a, 3];\nconsole.log(b.length);",o:["3","2","[1,2,3]","1"],a:0,vr:"js",
 e:"Spread (...) 'membuka' isi array ke dalam array baru: b = [1, 2, 3]. Array a tidak berubah. Dipakai untuk menyalin dan menggabungkan array tanpa mengubah aslinya.",
 w:[null,"b berisi tiga elemen.","Yang dicetak adalah panjangnya, bukan isinya.","Spread menyalin semua elemen."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"const p = { nama: \"Andi\", kota: \"Jakarta\" };\nconst q = { ...p, kota: \"Bandung\" };\nconsole.log(p.kota, q.kota);",o:["Jakarta Bandung","Bandung Bandung","Jakarta Jakarta","undefined Bandung"],a:0,vr:"js",
 e:"Spread objek menyalin semua properti p ke objek BARU, lalu kota ditimpa. p tetap utuh. Pola ini dipakai di React/OWL untuk memperbarui state tanpa mengubah objek lama.",
 w:[null,"p tidak ikut berubah karena q adalah objek baru.","Properti yang ditulis setelah spread menimpa nilainya.","p.kota masih ada."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"const user = { profil: null };\nconsole.log(user.profil?.nama);",o:["undefined","null","Error: Cannot read properties of null","\"\""],a:0,vr:"js",
 e:"Optional chaining (?.) berhenti dengan aman dan mengembalikan undefined jika bagian sebelumnya null/undefined. Tanpa ?., kode ini error. Sangat berguna saat membaca data JSON dari API yang tidak selalu lengkap.",
 w:[null,"?. mengembalikan undefined, bukan meneruskan null.","Error itu terjadi jika ditulis user.profil.nama tanpa ?.","Tidak ada teks kosong di sini."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(0 ?? 10, 0 || 10);",o:["0 10","10 10","0 0","10 0"],a:0,vr:"js",
 e:"?? (nullish coalescing) hanya mengganti null/undefined. || mengganti SEMUA nilai falsy (0, \"\", false, null, undefined). Untuk nilai default angka, pakai ?? supaya 0 tidak ikut terganti — misalnya diskon 0 yang sah.",
 w:[null,"?? tidak mengganti 0 karena 0 bukan null/undefined.","|| mengganti 0 karena 0 falsy.","Terbalik."]},
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"const total = [14, 1.5, 6].reduce((acc, x) => acc + x, 0);\nconsole.log(total);",o:["21.5","1461.5","3","14"],a:0,vr:"js",
 e:"reduce memproses array menjadi satu nilai. acc (akumulator) dimulai dari 0, lalu ditambah tiap elemen: 0 → 14 → 15.5 → 21.5.",
 w:[null,"Itu terjadi jika nilai awalnya string \"\" (penggabungan teks).","3 adalah panjang array.","Itu hanya elemen pertama."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"const data = [\n  { s: \"Andi\", t: 14 },\n  { s: \"Bima\", t: 1.5 },\n  { s: \"Citra\", t: 6 },\n];\nconsole.log(data.filter(d => d.t >= 5).map(d => d.s).join(\", \"));",o:["Andi, Citra","Andi","Andi, Bima, Citra","14, 6"],a:0,vr:"js",
 e:"Rantai method: filter (WHERE t >= 5) → map (SELECT s) → join (gabung jadi teks). Pola filter-map-join ini dipakai untuk membuat isi tabel/daftar di dashboard, seperti di proyek SalesKu.",
 w:[null,"Citra (6) juga memenuhi syarat ≥ 5.","Bima (1,5) tidak lolos filter.","map mengambil nama (s), bukan angka (t)."]},
{k:"modern",t:"mc",lv:3,q:"Output kode ini:",kode:"console.log([10, 9, 1, 100].sort().join(\",\"));",o:["1,10,100,9","1,9,10,100","100,10,9,1","9,1,10,100"],a:0,vr:"js",
 e:"Jebakan terkenal: sort() tanpa fungsi pembanding mengurutkan sebagai TEKS (\"10\" < \"9\" karena '1' < '9'). Untuk angka tulis sort((a, b) => a - b). Untuk menurun: (a, b) => b - a.",
 w:[null,"Itu hasil sort((a, b) => a - b), bukan sort() biasa.","Itu urutan menurun numerik.","Bukan urutan teks maupun angka."]},
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"const { nama, kota = \"Tidak ada\" } = { nama: \"Lia\" };\nconsole.log(kota);",o:["Tidak ada","undefined","Lia","Error"],a:0,vr:"js",
 e:"Destructuring mengambil properti ke variabel. = \"Tidak ada\" adalah nilai default jika propertinya tidak ada (undefined).",
 w:[null,"Nilai default dipakai saat properti tidak ada.","Lia adalah nilai nama.","Destructuring dengan default adalah sintaks valid."]},
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"function total(...angka) {\n  return angka.length;\n}\nconsole.log(total(4, 8, 15));",o:["3","27","1","undefined"],a:0,vr:"js",
 e:"Rest parameter (...angka) mengumpulkan semua argumen menjadi array [4, 8, 15]. Panjangnya 3. Bedakan: ... di parameter = rest (mengumpulkan), ... saat memanggil/membuat array = spread (membuka).",
 w:[null,"Itu jumlah angkanya, sedangkan yang dikembalikan length.","Ada tiga argumen.","Fungsi mengembalikan nilai (return)."]},
{k:"modern",t:"mc",lv:3,q:"Output kode ini:",kode:"function buatCounter() {\n  let n = 0;\n  return () => ++n;\n}\nconst c = buatCounter();\nc(); c();\nconsole.log(c());",o:["3","1","0","2"],a:0,vr:"js",
 e:"Closure: fungsi yang dikembalikan 'mengingat' variabel n dari tempat ia dibuat, meskipun buatCounter sudah selesai. Tiga kali dipanggil → 3. Closure adalah dasar event handler dan modul di JavaScript.",
 w:[null,"n tidak di-reset karena buatCounter hanya dipanggil sekali.","++n menaikkan nilai sebelum dikembalikan.","Panggilan ketiga mengembalikan 3."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"const teks = JSON.stringify({ a: 1 });\nconsole.log(typeof teks, JSON.parse('{\"x\": 5}').x);",o:["string 5","object 5","string undefined","object undefined"],a:0,vr:"js",
 e:"JSON.stringify: objek → teks JSON (untuk dikirim ke server atau disimpan di localStorage). JSON.parse: teks JSON → objek. Proyek SalesKu memakai keduanya untuk menyimpan data.",
 w:[null,"stringify menghasilkan string.","parse mengembalikan objek yang punya properti x = 5.","Keduanya keliru."]},
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log([5, 8, 12].find(x => x > 6));",o:["8","[8, 12]","true","1"],a:0,vr:"js",
 e:"find mengembalikan elemen PERTAMA yang memenuhi syarat. filter mengembalikan SEMUA dalam array. findIndex mengembalikan posisinya.",
 w:[null,"Itu hasil filter.","find mengembalikan elemennya, bukan boolean (itu some).","Itu hasil findIndex."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"const transaksi = [[\"Andi\", 14], [\"Bima\", 1.5], [\"Andi\", 4]];\nconst per = transaksi.reduce((acc, [s, t]) => {\n  acc[s] = (acc[s] || 0) + t;\n  return acc;\n}, {});\nconsole.log(per.Andi);",o:["18","14","4","undefined"],a:0,vr:"js",
 e:"Ini GROUP BY versi JavaScript: reduce dengan akumulator objek, menjumlah t per nama sales. Andi: 14 + 4 = 18. Pola ini persis yang dipakai di langkah ranking proyek SalesKu.",
 w:[null,"Transaksi Andi yang kedua juga dijumlahkan.","Itu hanya transaksi terakhir Andi.","per.Andi terisi karena ada transaksi Andi."]},
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log((1234567).toLocaleString(\"id-ID\"));",o:["1.234.567","1,234,567","1234567","Rp1.234.567"],a:0,vr:"js",
 e:"toLocaleString dengan locale id-ID memakai titik sebagai pemisah ribuan. Untuk format rupiah lengkap: new Intl.NumberFormat(\"id-ID\", { style: \"currency\", currency: \"IDR\" }).",
 w:[null,"Itu format en-US.","toLocaleString menambahkan pemisah ribuan.","Simbol Rp hanya muncul dengan opsi style currency."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log([3, 5, 7].every(x => x % 2 === 1), [3, 5, 8].some(x => x % 2 === 0));",o:["true true","true false","false true","false false"],a:0,vr:"js",
 e:"every = apakah SEMUA memenuhi syarat (semua ganjil → true). some = apakah MINIMAL SATU memenuhi (ada 8 yang genap → true). Berguna untuk validasi form.",
 w:[null,"some menemukan 8 yang genap.","Semua elemen [3, 5, 7] ganjil.","Keduanya bernilai true."]},
{k:"modern",t:"is",lv:1,q:"Method array yang mengubah SETIAP elemen dan menghasilkan array baru dengan panjang yang sama: arr.___(x => x * 2)",a:["map"],
 h:"Tiga huruf.",
 e:"map → array baru dengan panjang sama. filter → array lebih pendek. reduce → satu nilai. forEach → tidak mengembalikan apa-apa."},

// ---- BAB 10: Latihan membaca kode & jebakan ----
{k:"kasus",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log(typeof null);",o:["object","null","undefined","boolean"],a:0,vr:"js",
 e:"Ini 'bug sejarah' JavaScript sejak versi pertama yang dipertahankan demi kompatibilitas. Cara mengecek null yang benar: nilai === null.",
 w:[null,"Tidak ada tipe 'null' di hasil typeof.","typeof undefined yang menghasilkan 'undefined'.","null bukan boolean."]},
{k:"kasus",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(0.1 + 0.2 === 0.3);",o:["false","true","0.3","Error"],a:0,vr:"js",
 e:"Angka desimal disimpan dalam biner sehingga 0.1 + 0.2 = 0.30000000000000004. Ini juga terjadi di Python dan Java. Untuk uang: hitung dalam satuan terkecil (rupiah bulat/sen) atau bulatkan sebelum membandingkan.",
 w:[null,"Hasilnya bukan tepat 0.3.","Yang dicetak hasil perbandingan (boolean).","Kode ini valid."]},
{k:"kasus",t:"mc",lv:3,q:"Output kode ini:",kode:"for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",o:["3\n3\n3","0\n1\n2","0\n0\n0","Error"],a:0,vr:"js",
 e:"var punya satu variabel i untuk seluruh loop. Saat setTimeout berjalan (setelah loop selesai), i sudah 3. Dengan let, setiap putaran punya i sendiri → 0, 1, 2. Alasan utama selalu memakai let/const.",
 w:[null,"Itu hasil jika memakai let.","i bertambah sampai 3 sebelum callback berjalan.","Kode ini valid."]},
{k:"kasus",t:"mc",lv:3,q:"Urutan output kode ini:",kode:"console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");",o:["A, D, C, B","A, B, C, D","A, D, B, C","A, C, D, B"],a:0,vr:"js",vx:"A\nD\nC\nB",
 e:"Kode sinkron jalan dulu (A, D). Lalu microtask (Promise.then → C), baru macrotask (setTimeout → B), walau delay-nya 0. Ini pertanyaan event loop yang sangat sering muncul di interview frontend.",
 w:[null,"setTimeout dan Promise tidak dijalankan langsung.","Promise (microtask) didahulukan daripada setTimeout (macrotask).","D adalah kode sinkron, jadi dicetak sebelum C."]},
{k:"kasus",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log(\"5\" == 5, \"5\" === 5);",o:["true false","true true","false false","false true"],a:0,vr:"js",
 e:"== mengonversi tipe dulu (\"5\" menjadi 5) sehingga true. === membandingkan nilai DAN tipe, jadi false. Biasakan selalu memakai === agar tidak ada kejutan.",
 w:[null,"=== tidak mengonversi tipe.","== mengonversi string ke angka.","Terbalik."]},
{k:"kasus",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log([1, 2] === [1, 2]);",o:["false","true","undefined","Error"],a:0,vr:"js",
 e:"Array dan objek dibandingkan berdasarkan REFERENSI (alamat di memori), bukan isinya. Dua array terpisah selalu berbeda walau isinya sama. Membandingkan isi: JSON.stringify(a) === JSON.stringify(b) untuk kasus sederhana.",
 w:[null,"Isinya sama, tapi objeknya berbeda.","Hasil perbandingan selalu boolean.","Kode ini valid."]},
{k:"kasus",t:"mc",lv:1,q:"Output kode ini:",kode:"const o = { n: 1 };\no.n = 2;\nconsole.log(o.n);",o:["2","1","Error: Assignment to constant variable","undefined"],a:0,vr:"js",
 e:"const melarang mengganti VARIABELNYA (o = {...} tidak boleh), tapi isi objeknya tetap boleh diubah. Untuk membekukan isinya: Object.freeze(o).",
 w:[null,"Isi objek sudah diubah menjadi 2.","Error itu muncul jika menulis o = { n: 2 }.","Properti n ada."]},
{k:"kasus",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(x);\nvar x = 5;",o:["undefined","5","Error: x is not defined","null"],a:0,vr:"js",
 e:"Hoisting: deklarasi var 'diangkat' ke atas, tapi nilainya belum diisi → undefined. Dengan let/const, mengakses sebelum deklarasi menghasilkan ReferenceError (temporal dead zone) — lebih aman karena kesalahan langsung terlihat.",
 w:[null,"Nilai 5 baru diisi di baris berikutnya.","Itu terjadi untuk let/const atau variabel yang tidak pernah dideklarasikan.","undefined berbeda dengan null."]},
{k:"kasus",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(3 + 4 + \"5\");",o:["75","345","12","\"12\""],a:0,vr:"js",
 e:"Dikerjakan dari kiri: 3 + 4 = 7 (angka), lalu 7 + \"5\" = \"75\" (begitu bertemu string, + menjadi penggabungan teks). Sebaliknya \"3\" + 4 + 5 = \"345\". Pastikan input form diubah ke angka dengan Number() sebelum dijumlah.",
 w:[null,"Itu hasil \"3\" + 4 + 5.","\"5\" adalah string, jadi tidak dijumlah sebagai angka.","Tidak ada penjumlahan 3 + 4 + 5 sebagai angka."]},
{k:"kasus",t:"mc",lv:2,q:"Output kode ini:",kode:"const arr = [1, 2, 3];\narr[5] = 6;\nconsole.log(arr.length);",o:["6","4","3","5"],a:0,vr:"js",
 e:"Mengisi indeks 5 membuat array 'berlubang': indeks 3 dan 4 kosong, dan length menjadi indeks terakhir + 1 = 6. Untuk menambah di akhir, pakai push().",
 w:[null,"length mengikuti indeks terbesar + 1.","Panjang awal 3, tapi sudah berubah.","Indeks dimulai dari 0, jadi indeks 5 berarti panjang 6."]},
{k:"kasus",t:"mc",lv:2,q:"Output kode ini:",kode:"async function ambil() {\n  return 42;\n}\nambil().then(v => console.log(v + 1));",o:["43","42","Promise","undefined"],a:0,vr:"js",
 e:"Fungsi async selalu mengembalikan Promise. Nilai 42 diambil dengan .then (atau await), lalu ditambah 1 → 43.",
 w:[null,"Nilainya ditambah 1 di dalam then.","then menerima nilai hasil Promise, bukan Promise-nya.","Fungsi mengembalikan 42 yang dibungkus Promise."]},
{k:"kasus",t:"mc",lv:3,q:"Output kode ini:",kode:"console.log([\"1\", \"2\", \"3\"].map(parseInt).join(\",\"));",o:["1,NaN,NaN","1,2,3","NaN,NaN,NaN","1,2,NaN"],a:0,vr:"js",
 e:"map mengirim 2 argumen ke parseInt: (nilai, indeks). parseInt(\"2\", 1) dan parseInt(\"3\", 2) memakai basis bilangan yang tidak valid → NaN. Solusi: .map(Number) atau .map(s => parseInt(s, 10)).",
 w:[null,"Itu hasil .map(Number).","Elemen pertama berhasil karena basis 0 dianggap basis 10.","\"2\" dengan basis 1 tidak valid."]},
{k:"kasus",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(Boolean(\"\"), Boolean(\"0\"), Boolean([]));",o:["false true true","false false false","true true true","false false true"],a:0,vr:"js",
 e:"Nilai falsy hanya: false, 0, \"\" (string kosong), null, undefined, dan NaN. String \"0\" dan array kosong [] adalah TRUTHY. Akibatnya if (data.length) lebih aman daripada if (data) untuk mengecek array kosong.",
 w:[null,"\"0\" dan [] bernilai truthy.","String kosong bernilai falsy.","\"0\" adalah string yang tidak kosong, jadi truthy."]},
{k:"kasus",t:"is",lv:1,q:"Operator perbandingan yang memeriksa nilai DAN tipe data sekaligus (tiga karakter): ___",a:["==="],
 h:"Tiga tanda sama dengan.",
 e:"=== (strict equality). Pasangannya !== untuk 'tidak sama'. Hindari == dan != agar tidak ada konversi tipe tersembunyi."}
);

MATERI_JS.push(
{k:"modern",judul:"JavaScript Modern (ES6+) yang Dipakai Setiap Hari",materi:`
<p>Kode JavaScript di perusahaan (React, Vue, Odoo OWL, Node.js) penuh dengan sintaks modern ini:</p>
<pre><code>// spread & rest
const b = [...a, 3];                    // salin + tambah
const q = { ...p, kota: "Bandung" };    // salin objek + timpa
function total(...angka) {}             // kumpulkan argumen

// destructuring + default
const { nama, kota = "Tidak ada" } = user;
const [pertama, kedua] = daftar;

// aman membaca data yang mungkin kosong
user.profil?.nama          // undefined, bukan error
diskon ?? 0                // hanya ganti null/undefined (0 tetap 0)

// rantai method array (WHERE → SELECT → gabung)
data.filter(d =&gt; d.t &gt;= 5).map(d =&gt; d.s).join(", ")

// GROUP BY dengan reduce
const per = trx.reduce((acc, [s, t]) =&gt; {
  acc[s] = (acc[s] || 0) + t;
  return acc;
}, {});</code></pre>
<table class="mini-pivot"><tr><th>Method</th><th>Hasil</th><th>Padanan</th></tr>
<tr><td><code>map</code></td><td>array baru, panjang sama</td><td>kolom hitung</td></tr>
<tr><td><code>filter</code></td><td>array lebih pendek</td><td>WHERE</td></tr>
<tr><td><code>reduce</code></td><td>satu nilai/objek</td><td>SUM / GROUP BY</td></tr>
<tr><td><code>find</code> / <code>findIndex</code></td><td>elemen/posisi pertama</td><td>XLOOKUP</td></tr>
<tr><td><code>some</code> / <code>every</code></td><td>true/false</td><td>validasi</td></tr>
<tr><td><code>sort((a,b) =&gt; a - b)</code></td><td>urut angka</td><td>ORDER BY</td></tr></table>
<div class="catatan">⚠️ <code>sort()</code> tanpa pembanding mengurutkan sebagai teks: <code>[10, 9, 1, 100] → [1, 10, 100, 9]</code>.</div>`},

{k:"kasus",judul:"Latihan Membaca Kode & Jebakan JavaScript",materi:`
<p>Pertanyaan "apa output kode ini?" adalah favorit interview frontend. Kebanyakan berasal dari sedikit jebakan yang sama:</p>
<table class="mini-pivot"><tr><th>Kode</th><th>Hasil</th><th>Kenapa</th></tr>
<tr><td><code>"5" == 5</code></td><td>true</td><td>== mengonversi tipe → pakai ===</td></tr>
<tr><td><code>3 + 4 + "5"</code></td><td>"75"</td><td>bertemu string → gabung teks</td></tr>
<tr><td><code>0.1 + 0.2 === 0.3</code></td><td>false</td><td>desimal biner tidak presisi</td></tr>
<tr><td><code>typeof null</code></td><td>"object"</td><td>bug sejarah</td></tr>
<tr><td><code>[1,2] === [1,2]</code></td><td>false</td><td>dibandingkan referensinya</td></tr>
<tr><td><code>console.log(x); var x = 5</code></td><td>undefined</td><td>hoisting var</td></tr>
<tr><td><code>Boolean("0")</code>, <code>Boolean([])</code></td><td>true</td><td>bukan falsy</td></tr></table>
<p><b>Event loop</b> — urutan eksekusi:</p>
<pre><code>1. Kode sinkron (baris demi baris)
2. Microtask: Promise.then, await
3. Macrotask: setTimeout, event klik

console.log("A"); setTimeout(…"B"); Promise…then(…"C"); console.log("D");
→ A, D, C, B</code></pre>
<div class="catatan">💡 Latih di console browser (F12) atau Node.js: tebak dulu, baru jalankan. Selalu pakai <code>let</code>/<code>const</code> dan <code>===</code> untuk menghindari separuh jebakan di atas.</div>`}
);
