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
{k:"dasar",judul:"Dasar: Variabel, Tipe & Console",materi:`<p>JavaScript menghidupkan halaman web. Variabel modern:</p><pre><code>let umur = 22;        // bisa diubah
const NAMA = "Ryan";  // tetap
console.log(umur);    // cek output di DevTools (F12)</code></pre><p>Tipe utama: string, number, boolean (<code>true/false</code>), <code>undefined</code> (belum diisi), <code>null</code> (sengaja kosong). Cek tipe dengan <code>typeof</code>. Konversi: <code>Number("7")</code>, <code>String(7)</code>. Hindari <code>var</code> — scope-nya bocor.</p>`},
{k:"operator",judul:"Operator & Perbandingan",materi:`<p>Aritmetika standar <code>+ - * / %</code>, tapi hati-hati: <code>5 + "5" = "55"</code> (string!), sedangkan <code>"5" - 2 = 3</code>.</p><pre><code>5 ==  "5"   // true  (loose, konversi dulu)
5 === "5"   // false (strict: nilai + tipe)</code></pre><p><b>Selalu pakai ===</b>. Logika: <code>&amp;&amp; || !</code>. Singkat: <code>x++</code>, <code>x += 3</code>. Ternary: <code>status = n &gt;= 75 ? "Lulus" : "Gagal"</code>. Modern: <code>a ?? "default"</code> — fallback khusus null/undefined.</p>`},
{k:"kondisiloop",judul:"Kondisi & Perulangan",materi:`<pre><code>if (nilai >= 80) { ... }
else if (nilai >= 70) { ... }
else { ... }

for (let i = 0; i < 3; i++) { ... }  // 0 1 2
for (const buah of daftar) { ... }   // tiap NILAI
while (kondisi) { ... }</code></pre><p><code>break</code> berhenti; <code>continue</code> lompat. <code>switch…case</code> untuk banyak cabang — jangan lupa <code>break</code> tiap case! Falsy: <code>0, "", null, undefined, NaN, false</code> (catatan: <code>"0"</code> dan <code>[]</code> justru truthy).</p>`},
{k:"fungsi",judul:"Fungsi & Arrow Function",materi:`<pre><code>function luas(p, l = 1) {   // default param
  return p * l;
}
const kali2 = (x) => x * 2; // arrow: auto-return</code></pre><p>Tanpa return → <code>undefined</code>. Variabel dalam fungsi = lokal. Konsep penting: <b>callback</b> (fungsi dikirim ke fungsi lain, mis. <code>map(fn)</code>) dan <b>closure</b> (fungsi mengingat scope tempat ia lahir). <code>...rest</code> menampung argumen bebas sebagai array.</p>`},
{k:"array",judul:"Array & Method Andalannya",materi:`<p>Method array adalah senjata sehari-hari programmer JS:</p><pre><code>const n = [1, 2, 3, 4];
n.push(5); n.pop();
n.map(x => x * 2)        // [2,4,6,8]  transformasi
n.filter(x => x > 2)     // [3,4]      saring
n.find(x => x > 2)       // 3          satu pertama
n.reduce((a,b) => a+b,0) // 10         rangkum
n.includes(3)            // true</code></pre><p>Awas: <code>sort()</code> default membanding string — untuk angka: <code>sort((a,b) =&gt; a-b)</code>. <code>slice</code> menyalin, <code>splice</code> mengubah array asli.</p>`},
{k:"strobj",judul:"String, Objek & Destructuring",materi:`<p>Template literal — cara modern merangkai teks:</p><pre><code>console.log(\`Halo \${nama}, skor \${skor}\`);</code></pre><p>Method string: <code>toUpperCase() trim() split(",") replace() includes()</code>. Objek — struktur data terpenting JS:</p><pre><code>const mhs = { nama: "Ryan", nim: "220103091" };
mhs.nama;               // akses
const { nama } = mhs;   // destructuring
Object.keys(mhs);       // ["nama","nim"]
const salinan = { ...mhs, kota: "Solo" };  // spread</code></pre>`},
{k:"dom",judul:"DOM: Menghidupkan Halaman",materi:`<p>DOM = representasi HTML yang bisa dimanipulasi JS:</p><pre><code>const btn = document.querySelector("#tombol");
btn.addEventListener("click", () => {
  const el = document.querySelector(".hasil");
  el.textContent = "Diklik!";
  el.classList.toggle("aktif");
});
const isi = document.querySelector("input").value;</code></pre><p><code>textContent</code> = teks polos (aman); <code>innerHTML</code> merender tag (hati-hati input pengguna). Event penting: <code>click, input, submit, keydown</code>. <code>e.preventDefault()</code> mencegah form me-reload halaman — inilah dasar aplikasi interaktif.</p>`},
{k:"async",judul:"Asinkron: Promise, Fetch & Storage",materi:`<p>JS tidak menunggu operasi lambat — ia memakai <b>Promise</b>:</p><pre><code>async function ambilData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
  } catch (e) { console.error(e); }
}
setTimeout(fn, 2000);   // sekali, 2 dtk
setInterval(fn, 1000);  // berulang</code></pre><p>Menyimpan data di browser: <code>localStorage.setItem("skor", JSON.stringify(obj))</code> lalu <code>JSON.parse(localStorage.getItem("skor"))</code> — semua tersimpan sebagai string. Persis teknik yang dipakai KodeQuiz menyimpan progresmu!</p>`},
];
