// ============ JAVASCRIPT — 100 soal, 8 bab dengan materi ============
const SOAL_JS = [
// ---- BAB 1: dasar (14) ----
{k:"dasar",t:"mc",lv:1,q:"Menampilkan pesan ke console browser:",o:["print()","console.log()","echo()","msg()"],a:1,e:"console.log() menulis ke console DevTools."},
{k:"dasar",t:"mc",lv:1,q:"Kata kunci modern untuk variabel yang bisa berubah:",o:["var saja","let","const","int"],a:1,e:"let bisa diubah; const tetap."},
{k:"dasar",t:"mc",lv:1,q:"const digunakan untuk…",o:["nilai yang tidak di-assign ulang","variabel global","loop","fungsi saja"],a:0,e:"const tidak bisa di-assign ulang."},
{k:"dasar",t:"mc",lv:1,q:"Komentar satu baris di JavaScript:",o:["# komentar","<!-- -->","// komentar","** komentar"],a:2,e:"// satu baris; /* */ banyak baris."},
{k:"dasar",t:"mc",lv:1,q:"Boolean di JavaScript ditulis…",o:["True/False","true/false","TRUE/FALSE","1/0 saja"],a:1,e:"Huruf kecil semua: true, false."},
{k:"dasar",t:"mc",lv:1,q:"typeof \"halo\" menghasilkan…",o:["text","str","string","char"],a:2,e:"Teks bertipe \"string\"."},
{k:"dasar",t:"mc",lv:1,q:"Kotak dialog peringatan di browser:",o:["alert()","popup()","dialog()","warn()"],a:0,e:"alert() memunculkan dialog pesan."},
{k:"dasar",t:"mc",lv:2,q:"Mengubah \"7\" menjadi angka:",o:["Number(\"7\")","int(\"7\")","toNumber(\"7\")","num(\"7\")"],a:0,e:"Number(), parseInt(), atau parseFloat()."},
{k:"dasar",t:"mc",lv:2,q:"Perbedaan null dan undefined:",o:["sama","null sengaja dikosongkan; undefined belum diberi nilai","undefined disengaja","null untuk angka"],a:1,e:"undefined = belum di-assign; null = sengaja kosong."},
{k:"dasar",t:"mc",lv:2,q:"typeof null menghasilkan…",o:["\"null\"","\"undefined\"","\"object\"","\"none\""],a:2,e:"Bug historis JS yang dipertahankan."},
{k:"dasar",t:"mc",lv:2,q:"let umur; console.log(umur) menampilkan…",o:["0","null","undefined","error"],a:2,e:"Variabel tanpa nilai = undefined."},
{k:"dasar",t:"mc",lv:3,q:"Kenapa let/const lebih baik dari var?",o:["lebih pendek","scope per-blok, tak bocor keluar { }","lebih cepat","warna beda"],a:1,e:"var ber-scope fungsi & bisa bocor; let/const block-scoped."},
{k:"dasar",t:"is",lv:1,q:"NaN singkatan dari Not a ____",a:["number"],e:"NaN muncul saat operasi angka gagal."},
{k:"dasar",t:"is",lv:2,q:"Deklarasi konstanta: ____ PI = 3.14;",a:["const"],e:"const untuk nilai tetap."},
// ---- BAB 2: operator (12) ----
{k:"operator",t:"mc",lv:1,q:"Hasil 5 + \"5\":",o:["10","\"55\"","error","NaN"],a:1,e:"Angka + string = penggabungan string."},
{k:"operator",t:"mc",lv:1,q:"Operator pembanding nilai DAN tipe:",o:["==","===","=","!="],a:1,e:"=== strict equality — selalu gunakan ini."},
{k:"operator",t:"mc",lv:2,q:"Hasil 5 == \"5\":",o:["true","false","error","NaN"],a:0,e:"== mengonversi tipe dulu (loose) → true."},
{k:"operator",t:"mc",lv:2,q:"Hasil 5 === \"5\":",o:["true","false","error","5"],a:1,e:"Tipe berbeda (number vs string) → false."},
{k:"operator",t:"mc",lv:1,q:"Operator logika \"dan\":",o:["and","&&","&","AND"],a:1,e:"&& (AND), || (OR), ! (NOT)."},
{k:"operator",t:"mc",lv:2,q:"Hasil 10 % 4:",o:["2","2.5","0","4"],a:0,e:"% = sisa bagi: 10÷4 sisa 2."},
{k:"operator",t:"mc",lv:2,q:"x = 5; x++; nilai x sekarang…",o:["5","6","4","55"],a:1,e:"++ menambah 1."},
{k:"operator",t:"mc",lv:2,q:"Hasil !true:",o:["true","false","1","error"],a:1,e:"! membalik boolean."},
{k:"operator",t:"mc",lv:3,q:"Hasil 0.1 + 0.2 === 0.3:",o:["true","false","error","NaN"],a:1,e:"Floating point: 0.30000000000000004 → false."},
{k:"operator",t:"mc",lv:3,q:"a ?? \"default\" mengembalikan \"default\" jika a bernilai…",o:["0","null atau undefined","\"\"","false"],a:1,e:"?? (nullish coalescing) hanya untuk null/undefined."},
{k:"operator",t:"mc",lv:3,q:"Hasil \"5\" - 2:",o:["3","\"52\"","NaN","error"],a:0,e:"Operator - memaksa konversi ke angka: 3. (Beda dengan +)."},
{k:"operator",t:"is",lv:2,q:"Operator ternary: kondisi ____ nilaiBenar : nilaiSalah",a:["?"],e:"kondisi ? a : b — if-else singkat."},
// ---- BAB 3: kondisi & loop (13) ----
{k:"kondisiloop",t:"mc",lv:1,q:"Struktur if yang benar:",o:["if x > 5 then","if (x > 5) { }","if x > 5:","when (x>5)"],a:1,e:"Kondisi dalam ( ), blok dalam { }."},
{k:"kondisiloop",t:"mc",lv:1,q:"Cabang alternatif kedua ditulis…",o:["elif","else if","elseif","or if"],a:1,e:"JS memakai else if (dua kata)."},
{k:"kondisiloop",t:"mc",lv:2,q:"for (let i=0; i<3; i++) berjalan berapa kali?",o:["2","3","4","tak hingga"],a:1,e:"i = 0,1,2 → 3 kali."},
{k:"kondisiloop",t:"mc",lv:2,q:"Loop yang mengecek kondisi SETELAH eksekusi pertama:",o:["for","while","do…while","foreach"],a:2,e:"do…while pasti jalan minimal sekali."},
{k:"kondisiloop",t:"mc",lv:2,q:"Menghentikan loop lebih awal:",o:["stop","break","exit","end"],a:1,e:"break keluar; continue lompat iterasi."},
{k:"kondisiloop",t:"mc",lv:2,q:"Loop untuk mengiterasi NILAI array:",o:["for…of","for…in untuk nilai","loop()","each()"],a:0,e:"for…of nilai; for…in indeks/kunci."},
{k:"kondisiloop",t:"mc",lv:2,q:"Struktur untuk banyak cabang berdasar satu nilai:",o:["multi-if saja","switch…case","match","select"],a:1,e:"switch(x){ case 1: … break; default: }"},
{k:"kondisiloop",t:"mc",lv:2,q:"Nilai falsy di JavaScript:",o:["\"0\"","[]","0","\"false\""],a:2,e:"Falsy: 0, \"\", null, undefined, NaN, false. \"0\" dan [] truthy!"},
{k:"kondisiloop",t:"mc",lv:3,q:"Kenapa break penting di tiap case switch?",o:["dekorasi","tanpa break eksekusi 'jatuh' ke case berikutnya","wajib sintaks","mempercepat"],a:1,e:"Fall-through: tanpa break, case selanjutnya ikut jalan."},
{k:"kondisiloop",t:"mc",lv:3,q:"let s=0; for(let i=1;i<=3;i++){s+=i}. Nilai s:",o:["3","6","9","4"],a:1,e:"1+2+3 = 6."},
{k:"kondisiloop",t:"mc",lv:3,q:"for…in pada objek mengiterasi…",o:["nilai","kunci (property name)","indeks angka","method"],a:1,e:"for (let key in obj) memberi nama properti."},
{k:"kondisiloop",t:"is",lv:1,q:"Kata kunci melewati satu iterasi loop: ____",a:["continue"],e:"continue lompat ke iterasi berikutnya."},
{k:"kondisiloop",t:"is",lv:2,q:"Cabang default pada switch ditulis ____ :",a:["default"],e:"default menangani nilai yang tak cocok case manapun."},
// ---- BAB 4: fungsi (12) ----
{k:"fungsi",t:"mc",lv:1,q:"Membuat fungsi bernama sapa:",o:["def sapa():","function sapa() { }","func sapa()","fn sapa()"],a:1,e:"function sapa(){ } atau arrow function."},
{k:"fungsi",t:"mc",lv:1,q:"Mengembalikan nilai dari fungsi:",o:["give","return","send","out"],a:1,e:"return menghentikan fungsi & mengirim nilai."},
{k:"fungsi",t:"mc",lv:2,q:"Arrow function setara function tambah(a,b){return a+b}:",o:["const tambah=(a,b)=>a+b","tambah=>(a,b)","const tambah=a,b->a+b","arrow tambah()"],a:0,e:"Satu ekspresi otomatis ter-return."},
{k:"fungsi",t:"mc",lv:2,q:"function f(x=10){ } — 10 adalah…",o:["batas","parameter default","konstanta","global"],a:1,e:"Dipakai jika argumen tidak diberikan."},
{k:"fungsi",t:"mc",lv:2,q:"Fungsi tanpa return mengembalikan…",o:["0","null","undefined","\"\""],a:2,e:"Default return JS = undefined."},
{k:"fungsi",t:"mc",lv:2,q:"const f = function(){ } disebut…",o:["function declaration","function expression","arrow","class"],a:1,e:"Fungsi disimpan dalam variabel = expression."},
{k:"fungsi",t:"mc",lv:3,q:"Fungsi yang dikirim sebagai argumen fungsi lain disebut…",o:["callback","promise","closure","helper"],a:0,e:"Contoh: arr.map(callback)."},
{k:"fungsi",t:"mc",lv:3,q:"Closure adalah…",o:["fungsi yang mengingat scope tempat ia dibuat","penutup tag","event","loop"],a:0,e:"Fungsi dalam tetap bisa akses variabel fungsi luar."},
{k:"fungsi",t:"mc",lv:3,q:"Rest parameter function f(...angka) menampung…",o:["satu angka","semua argumen sebagai array","string","objek"],a:1,e:"...angka mengumpulkan argumen jadi array."},
{k:"fungsi",t:"mc",lv:3,q:"Variabel yang dideklarasi dalam fungsi…",o:["global","hanya hidup di dalam fungsi (lokal)","permanen","milik window"],a:1,e:"Scope lokal — tak bisa diakses dari luar."},
{k:"fungsi",t:"is",lv:2,q:"Simbol panah pada arrow function: (a, b) ____ a + b",a:["=>"],e:"=> memisahkan parameter dan badan fungsi."},
{k:"fungsi",t:"is",lv:3,q:"Fungsi yang langsung dieksekusi saat didefinisikan disingkat ____E",a:["iif"],e:"IIFE: (function(){ })();"},
// ---- BAB 5: array (15) ----
{k:"array",t:"mc",lv:1,q:"Membuat array:",o:["a=(1,2,3)","a={1,2,3}","a=[1,2,3]","a=<1,2,3>"],a:2,e:"Array memakai kurung siku."},
{k:"array",t:"mc",lv:1,q:"buah[0] mengambil…",o:["elemen kedua","elemen pertama","panjang","error"],a:1,e:"Indeks mulai dari 0."},
{k:"array",t:"mc",lv:1,q:"Jumlah elemen array:",o:["size","count","length","len"],a:2,e:"arr.length (properti, bukan fungsi)."},
{k:"array",t:"mc",lv:1,q:"Menambah elemen di AKHIR array:",o:["append()","push()","add()","insert()"],a:1,e:"push() akhir; unshift() awal."},
{k:"array",t:"mc",lv:2,q:"Menghapus elemen TERAKHIR:",o:["remove()","delete()","pop()","shift()"],a:2,e:"pop() akhir; shift() awal."},
{k:"array",t:"mc",lv:2,q:"[1,2,3].map(x => x*2) menghasilkan…",o:["[2,4,6]","[1,2,3,2]","6","[1,4,9]"],a:0,e:"map membuat array baru hasil transformasi."},
{k:"array",t:"mc",lv:2,q:"filter() menghasilkan…",o:["satu nilai","array baru berisi elemen yang lolos kondisi","urutan baru","string"],a:1,e:"[1,2,3,4].filter(x=>x>2) → [3,4]."},
{k:"array",t:"mc",lv:2,q:"Method mencari SATU elemen pertama yang cocok:",o:["search()","find()","get()","locate()"],a:1,e:"find mengembalikan elemen; findIndex indeksnya."},
{k:"array",t:"mc",lv:2,q:"arr.includes(5) mengembalikan…",o:["indeks","true/false apakah 5 ada","elemen","jumlah"],a:1,e:"includes mengecek keberadaan nilai."},
{k:"array",t:"mc",lv:3,q:"[1,2,3].reduce((a,b)=>a+b, 0) menghasilkan…",o:["[6]","6","123","error"],a:1,e:"reduce merangkum array jadi satu nilai."},
{k:"array",t:"mc",lv:3,q:"Perbedaan map dan forEach:",o:["sama","map mengembalikan array baru; forEach tidak","forEach lebih baru","map lebih lambat selalu"],a:1,e:"forEach hanya menjalankan efek, return undefined."},
{k:"array",t:"mc",lv:3,q:"arr.slice(1,3) vs arr.splice(1,2):",o:["sama","slice menyalin tanpa mengubah; splice memotong array asli","splice menyalin","slice menghapus"],a:1,e:"slice = non-destruktif; splice mengubah array asli."},
{k:"array",t:"mc",lv:3,q:"[3,1,2].sort() lalu angka besar bisa salah urut karena…",o:["bug browser","sort default membanding sebagai STRING","array rusak","perlu loop"],a:1,e:"Gunakan sort((a,b)=>a-b) untuk angka."},
{k:"array",t:"is",lv:2,q:"Menggabung array jadi string: arr.____(\", \")",a:["join"],e:"join menggabungkan dengan pemisah."},
{k:"array",t:"is",lv:3,q:"Mengecek apakah SEMUA elemen lolos kondisi: arr.____(x => x>0)",a:["every"],e:"every semua; some minimal satu."},
// ---- BAB 6: string & objek (12) ----
{k:"strobj",t:"mc",lv:1,q:"Template literal yang benar:",o:["\"Halo ${n}\"","'Halo ${n}'","`Halo ${n}`","\"Halo\"+{n}"],a:2,e:"Backtick (`) + ${ } menyisipkan variabel."},
{k:"strobj",t:"mc",lv:1,q:"\"halo\".length menghasilkan…",o:["3","4","5","error"],a:1,e:"4 karakter."},
{k:"strobj",t:"mc",lv:2,q:"\"a,b,c\".split(\",\") menghasilkan…",o:["\"abc\"","[\"a\",\"b\",\"c\"]","(a,b,c)","error"],a:1,e:"split memecah string jadi array."},
{k:"strobj",t:"mc",lv:2,q:"\"HALO\".toLowerCase() menghasilkan…",o:["HALO","halo","Halo","error"],a:1,e:"toLowerCase/toUpperCase mengubah kapitalisasi."},
{k:"strobj",t:"mc",lv:2,q:"Membuat objek:",o:["o=[nama:\"R\"]","o={nama:\"Ryan\"}","o=(nama=\"R\")","object o"],a:1,e:"Objek: pasangan kunci: nilai dalam { }."},
{k:"strobj",t:"mc",lv:2,q:"Mengakses properti nama dari objek o:",o:["o->nama","o.nama atau o[\"nama\"]","o(nama)","get o.nama"],a:1,e:"Dot notation atau bracket notation."},
{k:"strobj",t:"mc",lv:2,q:"\"  hai  \".trim() menghasilkan…",o:["\"  hai  \"","\"hai\"","\"h a i\"","error"],a:1,e:"trim menghapus spasi awal & akhir."},
{k:"strobj",t:"mc",lv:3,q:"Object.keys({a:1,b:2}) menghasilkan…",o:["[1,2]","[\"a\",\"b\"]","{a,b}","2"],a:1,e:"keys → array kunci; values → array nilai."},
{k:"strobj",t:"mc",lv:3,q:"Destructuring const {nama} = orang; artinya…",o:["hapus nama","ambil properti nama jadi variabel","salin objek","bandingkan"],a:1,e:"Destructuring mengekstrak properti langsung."},
{k:"strobj",t:"mc",lv:3,q:"\"belajar\".includes(\"ajar\") menghasilkan…",o:["true","false","2","\"ajar\""],a:0,e:"includes mengecek substring."},
{k:"strobj",t:"is",lv:2,q:"Mengganti kata: s.____(\"a\", \"b\")",a:["replace"],e:"replace mengganti kemunculan pertama; replaceAll semua."},
{k:"strobj",t:"is",lv:3,q:"Menyalin isi objek/array ke wadah baru memakai operator titik tiga: [ ____arr ]",a:["...","spread"],e:"Spread operator (...) menyalin elemen."},
// ---- BAB 7: DOM & event (12) ----
{k:"dom",t:"mc",lv:1,q:"Mengambil elemen ber-id \"judul\":",o:["document.getElementById(\"judul\")","find(\"#judul\")","get(\"judul\")","html.id(\"judul\")"],a:0,e:"getElementById atau querySelector(\"#judul\")."},
{k:"dom",t:"mc",lv:2,q:"document.querySelector(\".kartu\") memilih…",o:["semua .kartu","elemen PERTAMA ber-class kartu","id kartu","tag kartu"],a:1,e:"querySelectorAll untuk semuanya."},
{k:"dom",t:"mc",lv:2,q:"Memasang event klik pada tombol btn:",o:["btn.onClick()","btn.addEventListener(\"click\", fn)","btn.click=fn()","listen(btn)"],a:1,e:"addEventListener adalah cara standar."},
{k:"dom",t:"mc",lv:2,q:"Mengubah teks elemen el:",o:["el.text=\"Hai\"","el.textContent=\"Hai\"","el.write(\"Hai\")","el=Hai"],a:1,e:"textContent (aman) atau innerHTML (bisa tag)."},
{k:"dom",t:"mc",lv:2,q:"Perbedaan textContent dan innerHTML:",o:["sama","innerHTML merender tag HTML; textContent teks polos","textContent lebih lambat","innerHTML teks saja"],a:1,e:"Hati-hati XSS bila innerHTML diisi input pengguna."},
{k:"dom",t:"mc",lv:2,q:"Menambah class \"aktif\" pada elemen:",o:["el.class=\"aktif\"","el.classList.add(\"aktif\")","el.addClass()","class(el)"],a:1,e:"classList: add, remove, toggle, contains."},
{k:"dom",t:"mc",lv:2,q:"Mengambil nilai ketikan dari input inp:",o:["inp.text","inp.value","inp.content","inp.data"],a:1,e:"Elemen input memakai .value."},
{k:"dom",t:"mc",lv:3,q:"Membuat elemen baru:",o:["document.createElement(\"div\")","new Element()","document.add(\"div\")","el.make()"],a:0,e:"createElement lalu appendChild/append."},
{k:"dom",t:"mc",lv:3,q:"event.preventDefault() berguna untuk…",o:["menghapus event","mencegah aksi bawaan (mis. form reload)","mempercepat","menghentikan JS"],a:1,e:"Contoh klasik: submit form tanpa reload."},
{k:"dom",t:"mc",lv:3,q:"Event yang cocok mendeteksi ketikan real-time di input:",o:["click","input","load","scroll"],a:1,e:"Event \"input\" menyala setiap isi berubah."},
{k:"dom",t:"is",lv:2,q:"Objek global yang mewakili halaman HTML: ____",a:["document"],e:"document = pintu masuk DOM."},
{k:"dom",t:"is",lv:3,q:"classList.____(\"gelap\") menambah/menghapus class bergantian",a:["toggle"],e:"toggle cocok untuk dark mode, menu, dll."},
// ---- BAB 8: async & modern (10) ----
{k:"async",t:"mc",lv:2,q:"Promise digunakan untuk…",o:["loop","menangani operasi asinkron","styling","enkripsi"],a:1,e:"Nilai yang tersedia nanti: pending → fulfilled/rejected."},
{k:"async",t:"mc",lv:2,q:"setTimeout(fn, 2000) akan…",o:["ulang tiap 2 dtk","jalankan fn SEKALI setelah 2 detik","hentikan fn","2000 kali"],a:1,e:"setInterval untuk berulang."},
{k:"async",t:"mc",lv:3,q:"await hanya boleh dipakai dalam fungsi…",o:["arrow","async","global selalu","callback"],a:1,e:"async function memungkinkan await."},
{k:"async",t:"mc",lv:3,q:"fetch(\"data.json\") mengembalikan…",o:["data langsung","Promise berisi Response","string","XML"],a:1,e:"Perlu await res.json() untuk isinya."},
{k:"async",t:"mc",lv:3,q:"JSON.parse() berfungsi…",o:["objek→string","string JSON→objek JS","validasi","kirim data"],a:1,e:"parse: baca; stringify: simpan/kirim."},
{k:"async",t:"mc",lv:3,q:"localStorage.setItem(\"skor\", 90) menyimpan bertipe…",o:["number","string","object","boolean"],a:1,e:"localStorage selalu string — objek perlu JSON.stringify."},
{k:"async",t:"mc",lv:3,q:"Menangkap error di async/await memakai…",o:["catch saja di mana pun","try…catch","onerror","if error"],a:1,e:"try { await … } catch (e) { … }"},
{k:"async",t:"mc",lv:3,q:"[...arr1, ...arr2] menghasilkan…",o:["array bersarang","gabungan kedua array","error","objek"],a:1,e:"Spread menggabungkan/menyalin array."},
{k:"async",t:"is",lv:3,q:"Kata kunci sebelum function agar bisa await: ____ function ambil()",a:["async"],e:"async menjadikan fungsi mengembalikan Promise."},
{k:"async",t:"is",lv:3,q:"Mengubah objek jadi string JSON: JSON.____(obj)",a:["stringify"],e:"stringify untuk menyimpan/mengirim data."},
];

const MATERI_JS = [
{k:"dasar",judul:"Dasar: Variabel, Tipe & Console",materi:`
<h4>JavaScript itu apa?</h4>
<p>Kalau HTML adalah kerangka rumah dan CSS adalah catnya, <b>JavaScript</b> (disingkat <b>JS</b>) adalah <b>listriknya</b>: yang membuat lampu menyala saat saklar ditekan. JS membuat halaman bisa <b>bereaksi</b>, misalnya menu terbuka saat diklik, keranjang belanja bertambah, atau skor kuis dihitung. Semua tombol di KodeQuiz ini digerakkan oleh JavaScript.</p>
<p>Berbeda dengan HTML, JavaScript adalah <b>bahasa pemrograman</b> sungguhan: bisa menghitung, menyimpan data, dan mengambil keputusan.</p>
<div class="catatan">Nama JavaScript mirip Java, tapi keduanya bahasa yang <b>berbeda sama sekali</b>, seperti "mobil" dan "mobil-mobilan".</div>
<h4>Tempat mencoba: console</h4>
<p>Tekan <b>F12</b> di Chrome, lalu buka tab <b>Console</b>. Di situ kamu bisa mengetik kode JS dan langsung melihat hasilnya. Perintah untuk menampilkan sesuatu ke console:</p>
<pre><code>console.log("Halo!");
console.log(2 + 3);</code></pre>
<p><code>console.log</code> artinya "tulis ke catatan (log) di console". Ini alat utama programmer untuk mengintip isi program. Ada juga <code>alert("Halo!")</code> yang memunculkan <b>kotak peringatan</b> di browser.</p>
<h4>Variabel = kotak berlabel untuk menyimpan data</h4>
<p>Bayangkan kotak kardus yang kamu beri label "umur" dan isi angka 22. Nanti kalau butuh, cukup sebut labelnya.</p>
<pre><code>let umur = 22;
const NAMA = "Ryan";
umur = 23;      // boleh, karena let
// NAMA = "Budi";  ← error, karena const tidak boleh diganti</code></pre>
<ul><li><code>let</code> = membuat variabel yang <b>isinya boleh diganti</b> nanti.</li><li><code>const</code> (<i>constant</i>, tetap) = variabel yang <b>isinya tidak boleh diganti</b> setelah diisi. Cocok untuk nilai tetap, misalnya <code>const PI = 3.14;</code>.</li><li><code>=</code> di sini artinya <b>"isi dengan"</b>, bukan "sama dengan" seperti di matematika.</li><li><code>;</code> titik koma menandai akhir perintah.</li><li><code>//</code> adalah <b>komentar satu baris</b>, catatan yang diabaikan komputer.</li></ul>
<p>Ada juga cara lama, <code>var</code>. Hindari, karena <code>var</code> "bocor" keluar dari blok <code>{ }</code> tempat ia dibuat sehingga mudah menimbulkan bug. <code>let</code> dan <code>const</code> hanya berlaku di dalam blok tempat ia dibuat (<i>block scope</i>), jadi lebih aman.</p>
<h4>Jenis-jenis data (tipe data)</h4>
<table class="mini-pivot"><tr><th>Tipe</th><th>Contoh</th><th>Penjelasan</th></tr>
<tr><td>string</td><td><code>"halo"</code>, <code>'Rina'</code></td><td><b>teks</b>, selalu diapit tanda kutip</td></tr>
<tr><td>number</td><td><code>22</code>, <code>3.14</code></td><td><b>angka</b>, tanpa kutip</td></tr>
<tr><td>boolean</td><td><code>true</code>, <code>false</code></td><td>hanya <b>benar</b> atau <b>salah</b> (huruf kecil semua)</td></tr>
<tr><td>undefined</td><td><code>let x;</code></td><td>variabel sudah dibuat tapi <b>belum diisi</b></td></tr>
<tr><td>null</td><td><code>let pacar = null;</code></td><td><b>sengaja dikosongkan</b> oleh programmer</td></tr></table>
<p>Beda <code>undefined</code> dan <code>null</code>: <code>undefined</code> seperti kotak yang belum pernah diisi; <code>null</code> seperti kotak yang sengaja kamu kosongkan dan beri tulisan "kosong".</p>
<pre><code>let umur;
console.log(umur);   // undefined</code></pre>
<h4>Memeriksa dan mengubah tipe</h4>
<pre><code>typeof "halo"     // "string"
typeof 7          // "number"
typeof null       // "object"  ← keanehan lama JS, hafalkan saja
Number("7")       // 7   (teks jadi angka)
String(7)         // "7" (angka jadi teks)
Number("abc")     // NaN</code></pre>
<ul><li><code>typeof</code> = "tipe apa ini?".</li><li><code>NaN</code> singkatan dari <i>Not a Number</i> (bukan angka), hasil saat kamu memaksa teks seperti "abc" menjadi angka.</li><li><code>"7"</code> (pakai kutip) dan <code>7</code> itu <b>berbeda</b>. Yang pertama teks, yang kedua angka. Data dari kolom isian form selalu berupa teks, jadi sering perlu diubah dengan <code>Number()</code>.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buka console (F12), ketik <code>let nama = "isi namamu";</code> lalu <code>console.log("Halo " + nama);</code>. Coba juga <code>typeof 5</code> dan <code>typeof "5"</code>.</div>
`},
{k:"operator",judul:"Operator & Perbandingan",materi:`
<h4>Operator = tanda untuk menghitung dan membandingkan</h4>
<p>Operator adalah simbol yang melakukan sesuatu pada nilai, seperti <code>+</code> dan <code>-</code> di kalkulator.</p>
<h4>Aritmetika</h4>
<table class="mini-pivot"><tr><th>Operator</th><th>Arti</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>+</code></td><td>tambah</td><td><code>7 + 3</code></td><td>10</td></tr>
<tr><td><code>-</code></td><td>kurang</td><td><code>7 - 3</code></td><td>4</td></tr>
<tr><td><code>*</code></td><td>kali</td><td><code>7 * 3</code></td><td>21</td></tr>
<tr><td><code>/</code></td><td>bagi</td><td><code>7 / 2</code></td><td>3.5</td></tr>
<tr><td><code>%</code></td><td><b>sisa bagi</b> (modulo)</td><td><code>10 % 4</code></td><td>2</td></tr></table>
<p><code>%</code> sering dipakai untuk mengecek genap/ganjil: <code>angka % 2 === 0</code> berarti genap. Contoh <code>10 % 4</code>: 10 dibagi 4 = 2, sisa <b>2</b>.</p>
<p>Cara singkat:</p>
<pre><code>let x = 5;
x++;       // x jadi 6 (tambah 1)
x += 3;    // sama dengan x = x + 3, jadi 9</code></pre>
<h4>Jebakan: tanda + juga untuk menggabung teks</h4>
<pre><code>5 + 5      // 10
5 + "5"    // "55"  ← bukan 10!
"5" - 2    // 3</code></pre>
<p>Kalau salah satu sisi <code>+</code> berupa <b>teks</b>, JavaScript menganggapnya <b>menggabung tulisan</b>, bukan menjumlah. Jadi <code>5 + "5"</code> = <code>"55"</code>. Tapi <code>-</code> tidak punya arti untuk teks, jadi JS mengubah <code>"5"</code> menjadi angka dulu: <code>"5" - 2</code> = <code>3</code>.</p>
<h4>Membandingkan: == lawan ===</h4>
<pre><code>5 ==  "5"   // true   (dua sama dengan: tipe diabaikan)
5 === "5"   // false  (tiga sama dengan: nilai DAN tipe harus sama)</code></pre>
<ul><li><code>==</code> mengubah tipe dulu baru membandingkan, sehingga teks "5" dianggap sama dengan angka 5. Ini sering menimbulkan bug.</li><li><code>===</code> (<b>strict</b>/ketat) memeriksa <b>nilai dan tipe</b>. <b>Selalu pakai <code>===</code></b>. Lawannya <code>!==</code> (tidak sama).</li><li>Pembanding lain: <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code> (lebih dari atau sama dengan), <code>&lt;=</code>.</li></ul>
<h4>Keanehan desimal</h4>
<pre><code>0.1 + 0.2 === 0.3   // false!</code></pre>
<p>Komputer menyimpan desimal dalam bentuk biner, sehingga <code>0.1 + 0.2</code> sebenarnya <code>0.30000000000000004</code>. Ini bukan bug JS saja, hampir semua bahasa pemrograman begitu. Untuk uang, biasanya dihitung dalam satuan rupiah utuh (bilangan bulat).</p>
<h4>Logika: dan, atau, bukan</h4>
<table class="mini-pivot"><tr><th>Operator</th><th>Arti</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>&amp;&amp;</code></td><td><b>dan</b>: benar jika keduanya benar</td><td><code>true &amp;&amp; false</code></td><td>false</td></tr>
<tr><td><code>||</code></td><td><b>atau</b>: benar jika salah satu benar</td><td><code>true || false</code></td><td>true</td></tr>
<tr><td><code>!</code></td><td><b>bukan</b>: membalik</td><td><code>!true</code></td><td>false</td></tr></table>
<h4>Ternary: if singkat dalam satu baris</h4>
<pre><code>let status = nilai &gt;= 75 ? "Lulus" : "Gagal";</code></pre>
<p>Bacanya: "apakah nilai ≥ 75? <b>Kalau ya</b> (<code>?</code>) isinya "Lulus", <b>kalau tidak</b> (<code>:</code>) isinya "Gagal"".</p>
<h4>?? : nilai cadangan</h4>
<pre><code>let nama = input ?? "Tamu";</code></pre>
<p><code>??</code> artinya "pakai <code>input</code>, kecuali kalau isinya <code>null</code> atau <code>undefined</code>; dalam hal itu pakai "Tamu"". Berguna untuk nilai bawaan (<i>default</i>).</p>
<div class="praktik"><b>Coba sendiri:</b> di console, tebak dulu lalu jalankan: <code>5 + "5"</code>, <code>"5" - 2</code>, <code>10 % 3</code>, <code>5 === "5"</code>, <code>null ?? "kosong"</code>.</div>
`},
{k:"kondisiloop",judul:"Kondisi & Perulangan",materi:`
<h4>Program yang bisa memilih dan mengulang</h4>
<p>Dua kemampuan inilah yang membuat komputer berguna:</p>
<ol><li><b>Kondisi</b>: memilih jalan, seperti "kalau hujan, bawa payung".</li><li><b>Perulangan (loop)</b>: mengulang pekerjaan, seperti "cuci 10 piring satu per satu".</li></ol>
<h4>if, else if, else</h4>
<pre><code>let nilai = 78;
if (nilai &gt;= 80) {
  console.log("A");
} else if (nilai &gt;= 70) {
  console.log("B");
} else {
  console.log("C");
}</code></pre>
<ul><li><code>if (syarat) { … }</code> = "<b>jika</b> syarat benar, jalankan isi kurung kurawal".</li><li><code>else if</code> = "<b>kalau tidak, jika</b> …", cabang berikutnya. Boleh lebih dari satu.</li><li><code>else</code> = "<b>selain itu</b>", dijalankan kalau semua syarat di atas salah.</li><li>Komputer memeriksa dari atas dan <b>berhenti di syarat pertama yang benar</b>. Nilai 78 tidak ≥ 80, tapi ≥ 70, jadi tercetak "B".</li></ul>
<h4>switch: banyak pilihan dari satu nilai</h4>
<pre><code>switch (hari) {
  case "Sabtu":
    console.log("Libur");
    break;
  case "Senin":
    console.log("Kerja");
    break;
  default:
    console.log("Hari biasa");
}</code></pre>
<p><code>switch</code> cocok kalau kamu membandingkan <b>satu nilai</b> dengan banyak kemungkinan. <code>default</code> = kalau tidak ada yang cocok. <b>Jangan lupa <code>break</code></b>: tanpa itu, JS akan terus menjalankan <code>case</code> di bawahnya juga (disebut <i>fall-through</i>).</p>
<h4>Nilai "falsy": dianggap salah</h4>
<p>Di dalam <code>if</code>, nilai-nilai berikut dianggap <b>salah</b>: <code>0</code>, <code>""</code> (teks kosong), <code>null</code>, <code>undefined</code>, <code>NaN</code>, dan <code>false</code>. Sisanya dianggap benar (<i>truthy</i>), termasuk teks <code>"0"</code> dan array kosong <code>[]</code>.</p>
<h4>for: mengulang dengan hitungan</h4>
<pre><code>for (let i = 0; i &lt; 3; i++) {
  console.log(i);
}
// 0, 1, 2</code></pre>
<p>Ada tiga bagian di dalam kurung, dipisah titik koma:</p>
<ol><li><code>let i = 0</code> = <b>mulai</b> dari 0 (<code>i</code> seperti penghitung).</li><li><code>i &lt; 3</code> = <b>ulangi selama</b> i kurang dari 3.</li><li><code>i++</code> = setiap selesai satu putaran, <b>tambah</b> i dengan 1.</li></ol>
<p>Jadi isinya dijalankan untuk i = 0, 1, 2, yaitu <b>3 kali</b>.</p>
<p>Contoh menjumlah 1 sampai 3:</p>
<pre><code>let s = 0;
for (let i = 1; i &lt;= 3; i++) { s += i; }
// s = 1 + 2 + 3 = 6</code></pre>
<h4>for…of dan for…in</h4>
<pre><code>const buah = ["apel", "jeruk"];
for (const b of buah) { console.log(b); }        // apel, jeruk

const orang = { nama: "Rina", umur: 20 };
for (const kunci in orang) { console.log(kunci); } // nama, umur</code></pre>
<ul><li><code>for…of</code> mengambil <b>setiap nilai</b> dari array satu per satu.</li><li><code>for…in</code> mengambil <b>setiap nama kunci</b> dari sebuah objek.</li></ul>
<h4>while dan do…while</h4>
<pre><code>while (saldo &gt; 0) { … }      // cek dulu, baru jalan
do { … } while (lagi);       // jalan dulu SEKALI, baru cek</code></pre>
<p><code>while</code> mengulang <b>selama</b> syarat benar. <code>do…while</code> menjalankan isinya <b>minimal sekali</b> sebelum memeriksa syarat.</p>
<h4>Mengendalikan loop</h4>
<ul><li><code>break</code> = <b>hentikan</b> loop sekarang juga.</li><li><code>continue</code> = <b>lewati</b> putaran ini, lanjut ke putaran berikutnya.</li></ul>
<div class="catatan">Hati-hati dengan loop yang syaratnya tidak pernah salah, misalnya lupa <code>i++</code>. Loop itu berjalan selamanya (<i>infinite loop</i>) dan tab browser bisa macet.</div>
<div class="praktik"><b>Coba sendiri:</b> tulis loop yang mencetak angka 1 sampai 10, tapi lewati angka 5 dengan <code>continue</code>.</div>
`},
{k:"fungsi",judul:"Fungsi & Arrow Function",materi:`
<h4>Fungsi = resep yang bisa dipakai berulang</h4>
<p>Bayangkan kamu sering membuat teh: rebus air, masukkan teh, tambah gula. Daripada menjelaskan langkahnya setiap kali, kamu beri nama resep itu "buatTeh". Lain kali cukup bilang "buatTeh". <b>Fungsi</b> adalah kumpulan perintah yang diberi nama dan bisa dipanggil kapan saja.</p>
<pre><code>function sapa(nama) {
  return "Halo, " + nama + "!";
}

sapa("Rina");   // "Halo, Rina!"
sapa("Budi");   // "Halo, Budi!"</code></pre>
<ul><li><code>function</code> = kata kunci untuk <b>membuat</b> fungsi.</li><li><code>sapa</code> = <b>nama</b> fungsinya.</li><li><code>nama</code> di dalam kurung = <b>parameter</b>, "bahan" yang diterima fungsi. Nilai yang kamu kirim saat memanggil (<code>"Rina"</code>) disebut <b>argumen</b>.</li><li><code>return</code> = <b>mengembalikan hasil</b> ke pemanggil, sekaligus menghentikan fungsi. Fungsi <b>tanpa <code>return</code></b> menghasilkan <code>undefined</code>.</li><li><code>sapa("Rina")</code> = <b>memanggil</b> (menjalankan) fungsinya.</li></ul>
<h4>Nilai bawaan parameter</h4>
<pre><code>function luas(p, l = 1) {
  return p * l;
}
luas(5);      // 5, karena l memakai nilai bawaan 1
luas(5, 3);   // 15</code></pre>
<p><code>l = 1</code> adalah <b>nilai default</b>: dipakai kalau argumen untuk <code>l</code> tidak dikirim.</p>
<h4>Cara lain menulis fungsi</h4>
<pre><code>const tambah = function (a, b) { return a + b; };   // function expression
const tambah2 = (a, b) =&gt; a + b;                    // arrow function</code></pre>
<ul><li><b>Function expression</b> = fungsi yang disimpan ke dalam variabel.</li><li><b>Arrow function</b> (fungsi panah) memakai tanda <code>=&gt;</code>. Lebih ringkas. Kalau isinya cuma satu ekspresi, hasilnya <b>otomatis di-return</b> tanpa menulis <code>return</code>.</li></ul>
<h4>Variabel lokal</h4>
<p>Variabel yang dibuat <b>di dalam</b> fungsi hanya hidup di dalam fungsi itu (<b>lokal</b>). Di luar fungsi, variabel itu tidak dikenal. Ini mencegah nama variabel saling bertabrakan.</p>
<h4>Tiga konsep yang sering ditanyakan</h4>
<p><b>1. Callback</b>: fungsi yang dikirim sebagai argumen ke fungsi lain, untuk dipanggil nanti.</p>
<pre><code>[1, 2, 3].map(x =&gt; x * 2);   // x =&gt; x * 2 adalah callback
tombol.addEventListener("click", () =&gt; alert("Diklik"));</code></pre>
<p><b>2. Closure</b>: fungsi yang <b>mengingat variabel di tempat ia dibuat</b>, bahkan setelah fungsi pembuatnya selesai.</p>
<pre><code>function buatPenghitung() {
  let n = 0;
  return () =&gt; ++n;
}
const hitung = buatPenghitung();
hitung();  // 1
hitung();  // 2  ← n masih diingat</code></pre>
<p><b>3. Rest parameter</b> <code>...</code>: menampung <b>berapa pun argumen</b> menjadi sebuah array.</p>
<pre><code>function jumlah(...angka) { return angka.length; }
jumlah(4, 5, 6);   // angka = [4, 5, 6], hasilnya 3</code></pre>
<p>Ada juga <b>IIFE</b> (<i>Immediately Invoked Function Expression</i>), fungsi yang <b>langsung dijalankan</b> saat dibuat: <code>(() =&gt; { … })();</code>. Dulu sering dipakai untuk mengurung variabel.</p>
<div class="praktik"><b>Coba sendiri:</b> buat fungsi <code>diskon(harga, persen = 10)</code> yang mengembalikan harga setelah diskon. Panggil <code>diskon(50000)</code> dan <code>diskon(50000, 25)</code>.</div>
`},
{k:"array",judul:"Array & Method Andalannya",materi:`
<h4>Array = daftar berisi banyak nilai</h4>
<p>Daripada membuat variabel <code>buah1</code>, <code>buah2</code>, <code>buah3</code>, simpan semuanya dalam satu <b>array</b> (larik/daftar), seperti satu rak berisi banyak laci bernomor.</p>
<pre><code>const buah = ["apel", "jeruk", "mangga"];
buah[0]        // "apel"
buah[2]        // "mangga"
buah.length    // 3</code></pre>
<ul><li>Array ditulis dengan kurung siku <code>[ ]</code>, isinya dipisah koma.</li><li>Setiap isi punya nomor urut yang disebut <b>indeks</b>, dan <b>dimulai dari 0</b>, bukan 1. Jadi <code>buah[0]</code> adalah isi pertama.</li><li><code>.length</code> = <b>jumlah isi</b> array.</li></ul>
<h4>Menambah dan membuang</h4>
<table class="mini-pivot"><tr><th>Method</th><th>Fungsi</th><th>Contoh</th></tr>
<tr><td><code>push(x)</code></td><td>tambah di <b>akhir</b></td><td><code>buah.push("salak")</code></td></tr>
<tr><td><code>pop()</code></td><td>buang isi <b>terakhir</b></td><td><code>buah.pop()</code></td></tr>
<tr><td><code>unshift(x)</code></td><td>tambah di <b>awal</b></td><td><code>buah.unshift("anggur")</code></td></tr>
<tr><td><code>shift()</code></td><td>buang isi <b>pertama</b></td><td><code>buah.shift()</code></td></tr></table>
<p><i>Method</i> adalah fungsi yang "menempel" pada sebuah nilai, dipanggil dengan titik: <code>buah.push(...)</code>.</p>
<h4>Lima method andalan</h4>
<p>Kelima method ini memakai <b>callback</b>, fungsi kecil yang dijalankan untuk setiap isi array.</p>
<pre><code>const n = [1, 2, 3, 4];
n.map(x =&gt; x * 2)          // [2, 4, 6, 8]
n.filter(x =&gt; x &gt; 2)       // [3, 4]
n.find(x =&gt; x &gt; 2)         // 3
n.reduce((a, b) =&gt; a + b, 0)  // 10
n.includes(3)              // true</code></pre>
<ul><li><code>map</code> = <b>ubah setiap isi</b>, hasilnya array baru dengan <b>panjang sama</b>. Seperti mengalikan semua harga dengan 2.</li><li><code>filter</code> = <b>saring</b>, hasilnya array baru berisi yang <b>lolos syarat</b> saja.</li><li><code>find</code> = cari <b>satu isi pertama</b> yang cocok (bukan array).</li><li><code>reduce</code> = <b>rangkum</b> semua isi jadi <b>satu nilai</b>. <code>(a, b) =&gt; a + b</code> artinya "tambahkan isi berikutnya (b) ke total sementara (a)", dimulai dari 0. Hasil: 0+1+2+3+4 = 10.</li><li><code>includes</code> = apakah nilai ini ada? Hasilnya <code>true</code>/<code>false</code>.</li><li><code>every</code> = apakah <b>semua</b> isi lolos syarat? <code>some</code> = apakah <b>ada satu saja</b> yang lolos?</li><li><code>forEach</code> = jalankan sesuatu untuk setiap isi, tapi <b>tidak menghasilkan array baru</b> (berbeda dengan <code>map</code>).</li><li><code>join(", ")</code> = <b>gabungkan</b> isi array menjadi satu teks, dipisah tanda yang kamu pilih: <code>"apel, jeruk, mangga"</code>.</li></ul>
<h4>slice lawan splice (mirip namanya, beda sifatnya)</h4>
<pre><code>const a = [10, 20, 30, 40];
a.slice(1, 3)    // [20, 30]  → MENYALIN, array asli tetap
a.splice(1, 2)   // membuang 2 isi mulai indeks 1 → array asli BERUBAH jadi [10, 40]</code></pre>
<p><code>slice(1, 3)</code> mengambil dari indeks 1 sampai <b>sebelum</b> indeks 3.</p>
<h4>Jebakan sort</h4>
<pre><code>[10, 9, 1, 100].sort()                 // [1, 10, 100, 9]  ← aneh!
[10, 9, 1, 100].sort((a, b) =&gt; a - b)  // [1, 9, 10, 100] ✓</code></pre>
<p>Tanpa aturan, <code>sort()</code> mengurutkan isinya <b>sebagai teks</b>, huruf demi huruf, seperti kamus: "10" diawali "1", jadi lebih dulu dari "9". Untuk angka, beri pembanding <code>(a, b) =&gt; a - b</code>.</p>
<div class="praktik"><b>Coba sendiri:</b> buat array harga <code>[15000, 8000, 22000]</code>. Pakai <code>filter</code> untuk mengambil yang di atas 10000, lalu <code>reduce</code> untuk menjumlahkan semuanya.</div>
`},
{k:"strobj",judul:"String, Objek & Destructuring",materi:`
<h4>String: mengolah teks</h4>
<p><b>String</b> adalah teks. Ada tiga cara menulisnya: kutip ganda <code>"halo"</code>, kutip tunggal <code>'halo'</code>, dan <b>backtick</b> (tanda petik miring). Yang terakhir disebut <b>template literal</b>, dan paling praktis untuk menyisipkan variabel:</p>
<pre><code>const nama = "Rina", skor = 90;
console.log(\`Halo \${nama}, skormu \${skor}\`);
// Halo Rina, skormu 90</code></pre>
<p><code>\${ … }</code> di dalam backtick artinya "sisipkan nilai ini di sini". Tombol backtick ada di kiri atas keyboard, di bawah Esc.</p>
<h4>Method string yang sering dipakai</h4>
<table class="mini-pivot"><tr><th>Kode</th><th>Hasil</th><th>Gunanya</th></tr>
<tr><td><code>"halo".length</code></td><td>4</td><td>jumlah huruf</td></tr>
<tr><td><code>"HALO".toLowerCase()</code></td><td><code>"halo"</code></td><td>jadi huruf kecil</td></tr>
<tr><td><code>"halo".toUpperCase()</code></td><td><code>"HALO"</code></td><td>jadi huruf besar</td></tr>
<tr><td><code>"  hai  ".trim()</code></td><td><code>"hai"</code></td><td>buang spasi di awal dan akhir</td></tr>
<tr><td><code>"a,b,c".split(",")</code></td><td><code>["a", "b", "c"]</code></td><td>pecah teks jadi array</td></tr>
<tr><td><code>"belajar".includes("ajar")</code></td><td><code>true</code></td><td>apakah mengandung kata itu?</td></tr>
<tr><td><code>"kopi".replace("k", "t")</code></td><td><code>"topi"</code></td><td>ganti bagian teks</td></tr></table>
<h4>Objek: data yang punya label</h4>
<p>Array cocok untuk daftar. Tapi bagaimana menyimpan data seorang mahasiswa yang punya nama, NIM, dan kota? Pakai <b>objek</b>:</p>
<pre><code>const mhs = {
  nama: "Ryan",
  nim: "220103091",
  kota: "Solo"
};
mhs.nama          // "Ryan"
mhs["kota"]       // "Solo"
mhs.umur = 21;    // menambah data baru</code></pre>
<ul><li>Objek ditulis dengan kurung kurawal <code>{ }</code>.</li><li>Isinya pasangan <b>kunci: nilai</b> (disebut <i>properti</i>), dipisah koma. Seperti formulir: "Nama: Ryan".</li><li>Ambil nilainya dengan titik (<code>mhs.nama</code>) atau kurung siku (<code>mhs["nama"]</code>).</li><li><code>Object.keys(mhs)</code> menghasilkan array semua kuncinya: <code>["nama", "nim", "kota"]</code>.</li></ul>
<h4>Destructuring: membongkar isi objek</h4>
<pre><code>const { nama, kota } = mhs;
// sama dengan: const nama = mhs.nama; const kota = mhs.kota;</code></pre>
<p><i>Destructuring</i> artinya "membongkar". Kamu mengambil beberapa properti sekaligus ke dalam variabel yang namanya sama.</p>
<h4>Spread: menyalin dengan titik tiga</h4>
<pre><code>const salinan = { ...mhs, kota: "Bandung" };
const gabung = [...arr1, ...arr2];</code></pre>
<p><code>...</code> (<i>spread</i>, menyebarkan) menuang semua isi objek/array ke wadah baru. Contoh pertama menyalin <code>mhs</code> lalu mengganti kotanya; objek asli tidak berubah. Contoh kedua menggabungkan dua array.</p>
<div class="praktik"><b>Coba sendiri:</b> buat objek tentang dirimu (nama, kota, hobi), lalu tampilkan kalimat "Aku … dari …" memakai template literal dan <code>\${ }</code>.</div>
`},
{k:"dom",judul:"DOM: Menghidupkan Halaman",materi:`
<h4>DOM: jembatan antara JavaScript dan halaman</h4>
<p>Saat browser membaca HTML, ia membuat "peta" halaman dalam ingatannya, berbentuk pohon: <code>html</code> bercabang ke <code>head</code> dan <code>body</code>, <code>body</code> bercabang ke <code>h1</code>, <code>p</code>, dan seterusnya. Peta ini disebut <b>DOM</b> (<i>Document Object Model</i>). JavaScript tidak mengubah file HTML-mu; ia mengubah <b>DOM</b>, dan browser langsung menggambar ulang layar.</p>
<p>Objek <code>document</code> mewakili seluruh halaman. Dari sinilah semua dimulai.</p>
<h4>Langkah 1: temukan elemennya</h4>
<pre><code>document.getElementById("judul")        // elemen dengan id="judul"
document.querySelector("#judul")        // sama, pakai gaya selector CSS
document.querySelector(".kartu")        // elemen PERTAMA dengan class="kartu"
document.querySelectorAll(".kartu")     // SEMUA elemen class="kartu"</code></pre>
<p><code>querySelector</code> memakai selector CSS yang sudah kamu kenal: <code>#</code> untuk id, <code>.</code> untuk class.</p>
<h4>Langkah 2: ubah elemennya</h4>
<pre><code>const el = document.querySelector("#pesan");
el.textContent = "Berhasil disimpan!";   // ganti teks
el.classList.add("aktif");               // tambah class
el.classList.remove("aktif");            // buang class
el.classList.toggle("gelap");            // tambah kalau belum ada, buang kalau sudah ada</code></pre>
<ul><li><code>textContent</code> = isi <b>teks polos</b>. Kalau kamu menulis <code>&lt;b&gt;</code> di dalamnya, yang tampil tetap tulisan "&lt;b&gt;", bukan huruf tebal. Ini <b>aman</b>.</li><li><code>innerHTML</code> = isi berupa <b>HTML</b>, tag-nya ikut dijalankan. Berbahaya kalau isinya berasal dari ketikan pengunjung, karena orang jahat bisa menyisipkan kode.</li><li><code>classList</code> = daftar class elemen. Mengganti class adalah cara paling rapi mengubah tampilan, karena gayanya tetap ditulis di CSS.</li></ul>
<h4>Langkah 3: dengarkan kejadian (event)</h4>
<p><b>Event</b> adalah kejadian yang dilakukan pengunjung: klik, mengetik, mengirim form. JavaScript bisa "mendengarkan" event lalu bereaksi.</p>
<pre><code>const tombol = document.querySelector("#tombol");
tombol.addEventListener("click", () =&gt; {
  alert("Tombol diklik!");
});</code></pre>
<p>Bacanya: "pada tombol, <b>pasang pendengar</b> (<i>add event listener</i>) untuk kejadian <code>click</code>; kalau terjadi, jalankan fungsi ini".</p>
<table class="mini-pivot"><tr><th>Event</th><th>Terjadi saat</th></tr>
<tr><td><code>click</code></td><td>elemen diklik</td></tr>
<tr><td><code>input</code></td><td>isi kolom <b>berubah saat mengetik</b> (setiap huruf)</td></tr>
<tr><td><code>submit</code></td><td>form dikirim</td></tr>
<tr><td><code>keydown</code></td><td>tombol keyboard ditekan</td></tr></table>
<h4>Membaca isian dan membuat elemen baru</h4>
<pre><code>const isi = document.querySelector("input").value;   // teks yang diketik

const li = document.createElement("li");   // buat elemen baru
li.textContent = isi;
document.querySelector("ul").append(li);   // tempel ke halaman</code></pre>
<h4>Mencegah form memuat ulang halaman</h4>
<p>Secara bawaan, mengirim form membuat halaman <b>dimuat ulang</b>, sehingga semua yang sudah terjadi hilang. Untuk mengolah form dengan JS, cegah perilaku bawaan itu:</p>
<pre><code>form.addEventListener("submit", (e) =&gt; {
  e.preventDefault();   // "jangan lakukan perilaku bawaan"
  // olah datanya di sini
});</code></pre>
<p><code>e</code> adalah objek <b>event</b> berisi keterangan kejadiannya.</p>
<div class="praktik"><b>Coba sendiri:</b> buat satu <code>&lt;input&gt;</code>, satu <code>&lt;button&gt;</code>, dan satu <code>&lt;ul&gt;</code>. Saat tombol diklik, ambil teks di input dan tambahkan sebagai <code>&lt;li&gt;</code> baru. Selamat, kamu baru membuat aplikasi daftar tugas mini!</div>
`},
{k:"async",judul:"Asinkron: Promise, Fetch & Storage",materi:`
<h4>Kenapa butuh "asinkron"?</h4>
<p>Beberapa pekerjaan butuh waktu: mengambil data dari internet, menunggu 2 detik, membaca file. Kalau JavaScript <b>menunggu diam</b> sampai selesai, seluruh halaman akan membeku: tombol tidak bisa diklik, gulir macet.</p>
<p>Jadi JavaScript bekerja <b>asinkron</b> (tidak serentak): ia memesan pekerjaan lambat, lalu <b>lanjut mengerjakan hal lain</b>, dan kembali saat hasilnya siap. Seperti memesan di restoran cepat saji: kamu diberi <b>nomor antrean</b>, duduk dulu, lalu dipanggil saat makanan siap.</p>
<h4>Promise = nomor antrean</h4>
<p><b>Promise</b> (janji) adalah objek yang mewakili <b>hasil yang akan datang</b>. Statusnya bisa: masih menunggu (<i>pending</i>), berhasil (<i>fulfilled</i>), atau gagal (<i>rejected</i>).</p>
<h4>async dan await: menunggu dengan sopan</h4>
<pre><code>async function ambilData() {
  try {
    const res = await fetch("https://api.example.com/produk");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Gagal:", err);
  }
}</code></pre>
<p>Baris demi baris:</p>
<ol><li><code>async function</code> = menandai fungsi ini <b>asinkron</b>. Kata <code>await</code> <b>hanya boleh dipakai di dalam fungsi <code>async</code></b>.</li><li><code>fetch(alamat)</code> = <b>mengambil data dari internet</b>. Hasilnya bukan langsung data, tapi <b>Promise</b>.</li><li><code>await</code> = "<b>tunggu</b> sampai promise ini selesai, lalu ambil hasilnya". Hanya fungsi ini yang menunggu; halaman tetap lancar.</li><li><code>res.json()</code> = ubah jawaban server menjadi data JavaScript (juga perlu <code>await</code>).</li><li><code>try { … } catch (err) { … }</code> = "<b>coba</b> jalankan; kalau ada yang <b>gagal</b> (internet putus, alamat salah), tangkap errornya di sini" supaya program tidak berhenti.</li></ol>
<h4>Penunda waktu</h4>
<pre><code>setTimeout(() =&gt; alert("2 detik berlalu"), 2000);   // sekali, setelah 2000 ms
setInterval(() =&gt; console.log("tik"), 1000);       // berulang setiap 1 detik</code></pre>
<p>Waktu ditulis dalam <b>milidetik</b>: 1000 ms = 1 detik.</p>
<h4>Menyimpan data di browser: localStorage dan JSON</h4>
<p><code>localStorage</code> adalah "laci" di browser yang isinya tetap ada walau browser ditutup. KodeQuiz memakai cara ini untuk menyimpan progresmu. Satu aturannya: <b>localStorage hanya bisa menyimpan teks (string)</b>. Kalau kamu menyimpan angka 90, ia tersimpan sebagai teks <code>"90"</code>.</p>
<p>Untuk menyimpan objek, ubah dulu menjadi teks dengan <b>JSON</b> (<i>JavaScript Object Notation</i>, format teks untuk data):</p>
<pre><code>const progres = { skor: 90, bab: 3 };
localStorage.setItem("progres", JSON.stringify(progres));   // objek → teks

const balik = JSON.parse(localStorage.getItem("progres"));  // teks → objek
balik.skor   // 90</code></pre>
<ul><li><code>JSON.stringify(obj)</code> = objek <b>menjadi teks</b> JSON.</li><li><code>JSON.parse(teks)</code> = teks JSON <b>menjadi objek</b> lagi.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> di console, jalankan <code>localStorage.setItem("coba", JSON.stringify({a: 1}))</code>, tutup tab, buka lagi, lalu jalankan <code>JSON.parse(localStorage.getItem("coba"))</code>. Datanya masih ada.</div>
`},
];
