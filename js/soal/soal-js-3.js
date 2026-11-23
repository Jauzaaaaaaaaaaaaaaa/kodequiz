// ============ JAVASCRIPT lanjutan — bab 11–17 ============
// Scope & closure, event, class, error, koleksi bawaan, module & npm, menuju framework.
// Disusun dari kurikulum MDN Learn, javascript.info, dan materi Programmer Zaman Now.
// vr:"js" → output dijalankan dan dicocokkan dengan Node.js oleh alat/cek-soal.js.

SOAL_JS.push(
// ---- BAB 11: scope, hoisting, closure, this ----
{k:"scope",t:"mc",lv:1,q:"Output kode ini:",kode:"let x = 1;\n{\n  let x = 2;\n}\nconsole.log(x);",o:["1","2","undefined","Error"],a:0,vr:"js",
 e:"let punya block scope: x di dalam kurung kurawal adalah variabel BARU yang hanya hidup di blok itu.\n• x = 2 lahir dan mati di dalam { }.\n• console.log berada di luar blok, jadi yang terlihat x = 1.\nIngat: let dan const terkurung oleh { }, var tidak.",
 w:[null,"x = 2 hanya hidup di dalam blok.","x luar sudah diisi 1.","Dua let dengan nama sama di blok BERBEDA itu sah."]},
{k:"scope",t:"mc",lv:2,q:"Output kode ini:",kode:"for (var i = 0; i < 3; i++) {}\nconsole.log(i);",o:["3","2","undefined","ReferenceError"],a:0,vr:"js",
 e:"var tidak mengenal block scope, jadi i tetap hidup setelah perulangan selesai.\n1. Perulangan berhenti saat i < 3 bernilai salah, yaitu ketika i sudah 3.\n2. Karena var, i masih bisa dibaca di luar for.\nIngat: kalau ditulis dengan let, baris console.log akan error karena i tidak dikenal.",
 w:[null,"i terakhir dinaikkan sekali lagi menjadi 3 sebelum syarat dicek.","i sudah punya nilai.","var tidak terkurung oleh blok for."]},
{k:"scope",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(a);\nvar a = 5;",o:["undefined","5","ReferenceError","null"],a:0,vr:"js",
 e:"Hoisting: deklarasi var 'diangkat' ke atas, tapi nilainya tidak.\n• JavaScript membacanya seperti: var a; console.log(a); a = 5;\n• Saat dicetak, a sudah ada tapi belum diisi, jadi undefined.\nIngat: hoisting var sering menimbulkan bug diam-diam; itulah alasan let/const lebih disukai.",
 w:[null,"Nilai 5 baru diisi SETELAH baris console.log.","Dengan var tidak error; dengan let baru error.","Variabel kosong di JS bernilai undefined, bukan null."]},
{k:"scope",t:"mc",lv:2,q:"Apa yang dicetak?",kode:"try {\n  console.log(b);\n  let b = 5;\n} catch (e) {\n  console.log(e.name);\n}",o:["ReferenceError","undefined","5","TypeError"],a:0,vr:"js",
 e:"let juga diangkat, tapi berada di Temporal Dead Zone (TDZ) sampai baris deklarasinya dijalankan.\n• Membaca b sebelum baris let b = 5 memicu ReferenceError.\n• Ini justru bagus: kesalahan langsung ketahuan, tidak diam-diam jadi undefined.",
 w:[null,"undefined hanya terjadi pada var.","Baris let b = 5 belum dijalankan.","TypeError untuk operasi pada tipe yang salah, misalnya null.x."]},
{k:"scope",t:"mc",lv:1,q:"Output kode ini:",kode:"sapa();\nfunction sapa() {\n  console.log(\"halo\");\n}",o:["halo","undefined","ReferenceError","TypeError: sapa is not a function"],a:0,vr:"js",
 e:"Function declaration diangkat utuh, lengkap dengan isinya, jadi boleh dipanggil sebelum ditulis.\n• Ini TIDAK berlaku untuk function expression: const sapa = function () {} atau arrow function.",
 w:[null,"Fungsinya mencetak teks, bukan mengembalikan nilai.","Deklarasi fungsi sudah dikenal sejak awal.","Itu yang terjadi pada var sapa = function(){} yang dipanggil terlalu awal."]},
{k:"scope",t:"mc",lv:2,q:"Output kode ini:",kode:"function buatPenghitung() {\n  let n = 0;\n  return () => ++n;\n}\nconst hitung = buatPenghitung();\nhitung();\nhitung();\nconsole.log(hitung());",o:["3","1","0","undefined"],a:0,vr:"js",
 e:"Ini closure: fungsi kecil yang dikembalikan tetap 'mengingat' variabel n milik fungsi pembuatnya.\n1. Panggilan pertama: n jadi 1.\n2. Panggilan kedua: n jadi 2.\n3. Panggilan ketiga: n jadi 3, dan nilai itu dicetak.\nIngat: n tidak bisa diubah dari luar. Closure adalah cara JavaScript membuat data 'privat'.",
 w:[null,"n tidak di-reset karena buatPenghitung hanya dipanggil sekali.","++n menaikkan dulu baru mengembalikan.","Arrow function satu baris otomatis mengembalikan hasilnya."]},
{k:"scope",t:"mc",lv:3,q:"Output kode ini:",kode:"function buatPenghitung() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = buatPenghitung();\nconst b = buatPenghitung();\na(); a();\nconsole.log(a(), b());",o:["3 1","3 4","1 1","2 1"],a:0,vr:"js",
 e:"Setiap kali buatPenghitung dipanggil, lahir n yang BARU. a dan b punya 'kotak ingatan' sendiri-sendiri.\n• a dipanggil tiga kali: 3.\n• b baru dipanggil sekali: 1.",
 w:[null,"a dan b tidak berbagi n.","a sudah dipanggil tiga kali.","Panggilan a() di dalam console.log adalah yang ketiga."]},
{k:"scope",t:"mc",lv:3,q:"Apa yang dicetak (urut)?",kode:"for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",o:["3 3 3","0 1 2","0 0 0","2 2 2"],a:0,vr:"js",vx:"3\n3\n3",
 e:"Jebakan interview klasik.\n1. setTimeout menunda fungsi sampai perulangan selesai.\n2. Dengan var, hanya ada SATU i untuk seluruh perulangan; saat fungsi berjalan, i sudah 3.\n3. Ketiga fungsi membaca i yang sama, jadi 3 3 3.\nIngat: ganti var dengan let dan hasilnya 0 1 2, karena let membuat i baru di setiap putaran.",
 w:[null,"Itu hasil kalau memakai let.","i terus bertambah sebelum fungsi dijalankan.","i berhenti di 3, bukan 2."]},
{k:"scope",t:"mc",lv:2,q:"Apa yang dicetak (urut)?",kode:"for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",o:["0 1 2","3 3 3","1 2 3","0 0 0"],a:0,vr:"js",vx:"0\n1\n2",
 e:"Dengan let, setiap putaran punya i sendiri, dan setiap fungsi di setTimeout mengingat i miliknya (closure).",
 w:[null,"Itu hasil kalau memakai var.","i dimulai dari 0.","Tiap putaran punya i berbeda."]},
{k:"scope",t:"mc",lv:1,q:"Output kode ini:",kode:"const kucing = {\n  nama: \"Oyen\",\n  sapa() {\n    return \"Halo, aku \" + this.nama;\n  }\n};\nconsole.log(kucing.sapa());",o:["Halo, aku Oyen","Halo, aku undefined","Halo, aku this.nama","Error"],a:0,vr:"js",
 e:"Di dalam method, this menunjuk ke objek yang ada di depan titik saat dipanggil: kucing.sapa() → this = kucing.",
 w:[null,"this di sini adalah kucing, yang punya nama.","this.nama dievaluasi, bukan ditulis apa adanya.","Kode ini valid."]},
{k:"scope",t:"mc",lv:3,q:"Output kode ini:",kode:"const kucing = {\n  nama: \"Oyen\",\n  sapa: () => \"Halo, aku \" + this.nama\n};\nconsole.log(kucing.sapa());",o:["Halo, aku undefined","Halo, aku Oyen","Error","Halo, aku "],a:0,vr:"js",
 e:"Arrow function TIDAK punya this sendiri; ia meminjam this dari tempat ia ditulis (di luar objek), yang tidak punya nama.\n• Hasilnya this.nama = undefined.\nIngat: untuk method objek, pakai bentuk sapa() { … }, bukan arrow. Arrow cocok untuk callback di dalam method.",
 w:[null,"Arrow tidak mengambil this dari kucing.","Membaca properti yang tidak ada tidak error, hanya undefined.","undefined digabung string menjadi teks 'undefined'."]},
{k:"scope",t:"mc",lv:3,q:"Output kode ini:",kode:"const kucing = {\n  nama: \"Oyen\",\n  sapa() { return \"Halo, aku \" + this.nama; }\n};\nconst f = kucing.sapa.bind(kucing);\nconsole.log(f());",o:["Halo, aku Oyen","Halo, aku undefined","Error","undefined"],a:0,vr:"js",
 e:"Kalau method diambil keluar (const f = kucing.sapa), this-nya hilang. bind(kucing) mengunci this supaya selalu kucing.\n• Ini sering dibutuhkan saat method dipakai sebagai event handler atau callback.",
 w:[null,"bind sudah mengunci this ke kucing.","bind mengembalikan fungsi baru yang sah.","f() mengembalikan teks."]},
{k:"scope",t:"is",lv:1,q:"Fungsi yang tetap 'mengingat' variabel dari tempat ia dibuat, walaupun fungsi pembuatnya sudah selesai, disebut ____",a:["closure"],
 e:"Closure dipakai untuk penghitung, data privat, memo (cache), dan hampir semua callback."},
{k:"scope",t:"is",lv:2,q:"Baris pertama untuk mengaktifkan mode ketat di sebuah file: \"use ____\";",a:["strict"],
 e:"\"use strict\" membuat kesalahan diam-diam menjadi error, misalnya mengisi variabel yang belum dideklarasikan. File module (type=\"module\") dan class otomatis strict."},

// ---- BAB 12: event ----
{k:"event",t:"mc",lv:1,q:"Cara yang dianjurkan memasang aksi klik pada tombol:",o:["tombol.addEventListener(\"click\", fungsi)","tombol.click = fungsi()","tombol.on(\"click\")","<button click=\"fungsi\">"],a:0,
 e:"addEventListener bisa memasang banyak pendengar pada satu elemen dan bisa dilepas lagi. Perhatikan: fungsi ditulis TANPA tanda kurung, karena kita menitipkan fungsinya, bukan memanggilnya sekarang.",
 w:[null,"fungsi() langsung menjalankan fungsi saat itu juga.","Itu gaya jQuery, bukan JavaScript murni.","Atribut HTML yang benar adalah onclick, dan mencampur JS di HTML kurang rapi."]},
{k:"event",t:"mc",lv:2,q:"Sebuah <button> berada di dalam <div>. Keduanya diberi listener click yang mencetak namanya. Tombol diklik. Urutan cetakannya:",o:["button, lalu div","div, lalu button","hanya button","hanya div"],a:0,
 e:"Event bubbling: event mulai di elemen yang diklik, lalu 'menggelembung' naik ke induk, kakek, sampai document.\n• Itu sebabnya klik tombol juga dianggap klik pada div pembungkusnya.\nIngat: urutan bawaan dari dalam ke luar.",
 w:[null,"Itu urutan fase capturing, yang harus diminta khusus.","Event tetap naik ke induk.","Elemen yang diklik selalu kebagian lebih dulu pada bubbling."]},
{k:"event",t:"mc",lv:2,q:"Method untuk menghentikan event agar tidak naik ke elemen induk:",o:["e.stopPropagation()","e.preventDefault()","e.stop()","return false di addEventListener"],a:0,
 e:"stopPropagation menghentikan perjalanan bubbling. Berbeda dengan preventDefault yang membatalkan perilaku bawaan browser.",
 w:[null,"preventDefault membatalkan aksi bawaan, bukan bubbling.","Method itu tidak ada.","return false tidak berpengaruh pada addEventListener."]},
{k:"event",t:"mc",lv:1,q:"Form login dikirim dengan JavaScript (fetch). Supaya halaman tidak ter-refresh saat tombol kirim ditekan, di dalam handler submit kita memanggil…",o:["e.preventDefault()","e.stopPropagation()","location.reload()","form.reset()"],a:0,
 e:"Perilaku bawaan form adalah mengirim data dan memuat ulang halaman. preventDefault membatalkannya supaya kita bisa mengurus pengiriman sendiri.",
 w:[null,"Bubbling tidak ada hubungannya dengan refresh.","Itu justru me-refresh halaman.","reset hanya mengosongkan isian."]},
{k:"event",t:"mc",lv:3,q:"Daftar berisi 500 <li> dan bisa bertambah. Cara paling efisien memberi aksi klik pada setiap item:",o:["Satu listener di <ul>, lalu cek e.target","500 listener, satu per <li>","setInterval yang mengecek klik","onclick di setiap <li> lewat HTML"],a:0,
 e:"Event delegation: karena event menggelembung, cukup satu listener di induk.\n• Hemat memori.\n• Item baru yang ditambahkan nanti otomatis ikut bekerja, tanpa memasang listener lagi.\n1. ul.addEventListener(\"click\", e => { … })\n2. Di dalamnya: const li = e.target.closest(\"li\"); if (!li) return;",
 w:[null,"Boros dan item baru tidak punya listener.","Klik tidak bisa dideteksi dengan interval.","Tetap 500 handler dan sulit dirawat."]},
{k:"event",t:"mc",lv:2,q:"Pada event delegation, e.target dan e.currentTarget berbeda. e.target adalah…",o:["elemen yang benar-benar diklik","elemen tempat listener dipasang","selalu document","elemen induk pertama"],a:0,
 e:"e.target = asal event (yang diklik). e.currentTarget = elemen pemilik listener yang sedang berjalan (misalnya <ul>).",
 w:[null,"Itu currentTarget.","document hanya ujung perjalanan bubbling.","Induk bukan asal event."]},
{k:"event",t:"mc",lv:2,q:"Event yang terpicu SETIAP kali isi <input> berubah (tiap ketukan huruf):",o:["input","change","submit","blur"],a:0,
 e:"input terpicu tiap perubahan, cocok untuk pencarian langsung. change baru terpicu saat isian selesai dan kehilangan fokus (atau saat pilihan select/checkbox berubah).",
 w:[null,"change menunggu sampai fokus pindah.","submit untuk pengiriman form.","blur terjadi saat elemen kehilangan fokus."]},
{k:"event",t:"mc",lv:2,q:"Event yang menandakan HTML sudah selesai dibaca dan DOM siap dipakai (tanpa menunggu gambar):",o:["DOMContentLoaded","load","ready","start"],a:0,
 e:"DOMContentLoaded datang lebih cepat dari load, yang menunggu semua gambar dan stylesheet. Jika script dipasang dengan atribut defer atau ditaruh di akhir body, DOM sudah siap tanpa perlu event ini.",
 w:[null,"load menunggu semua gambar.","ready itu istilah jQuery.","Tidak ada event bernama start."]},
{k:"event",t:"mc",lv:3,q:"Kode tombol.removeEventListener(\"click\", () => console.log(\"hai\")) tidak melepas listener yang sebelumnya dipasang dengan arrow function yang ditulis sama persis. Kenapa?",o:["Setiap arrow function adalah fungsi baru dengan referensi berbeda","removeEventListener tidak mendukung click","Arrow function tidak bisa dipakai sebagai listener","Harus dipanggil dua kali"],a:0,
 e:"Untuk melepas, kita harus memberi fungsi yang SAMA (referensi sama). Simpan fungsinya di variabel:\n1. const sapa = () => console.log(\"hai\");\n2. tombol.addEventListener(\"click\", sapa);\n3. tombol.removeEventListener(\"click\", sapa);\nAlternatif: { once: true } kalau hanya perlu sekali.",
 w:[null,"click didukung.","Arrow sah sebagai listener.","Memanggil berkali-kali tetap gagal."]},
{k:"event",t:"mc",lv:1,q:"Untuk mengetahui tombol keyboard apa yang ditekan di event keydown, kita membaca…",o:["e.key","e.target.value","e.type","e.code saja, e.key tidak ada"],a:0,
 e:"e.key berisi nama tombol, misalnya \"Enter\", \"Escape\", \"a\". Contoh: if (e.key === \"Enter\") kirim();",
 w:[null,"value adalah isi input, bukan tombol.","e.type berisi nama event: \"keydown\".","e.key ada dan paling sering dipakai."]},
{k:"event",t:"is",lv:1,q:"Lengkapi agar listener hanya berjalan satu kali: tombol.addEventListener(\"click\", f, { ____: true });",a:["once"],
 e:"{ once: true } otomatis melepas listener setelah terpicu sekali. Cocok untuk tombol 'mulai' atau animasi pembuka."},
{k:"event",t:"is",lv:2,q:"Nama perilaku event yang merambat dari elemen yang diklik naik ke induk-induknya (bahasa Inggris): event ____",a:["bubbling"],
 e:"Bubbling memungkinkan event delegation. Kebalikannya, capturing, berjalan dari atas ke bawah dan diaktifkan dengan argumen ketiga true."},

// ---- BAB 13: class & OOP ----
{k:"kelas",t:"mc",lv:1,q:"Output kode ini:",kode:"class Produk {\n  constructor(nama, harga) {\n    this.nama = nama;\n    this.harga = harga;\n  }\n  info() {\n    return this.nama + \": \" + this.harga;\n  }\n}\nconst p = new Produk(\"Kopi\", 15000);\nconsole.log(p.info());",o:["Kopi: 15000","Produk: 15000","undefined: undefined","Error"],a:0,vr:"js",
 e:"Class adalah cetakan; new Produk(…) membuat objek baru dari cetakan itu.\n1. constructor berjalan otomatis dan menyimpan nama & harga ke this.\n2. info() membaca dari objek itu sendiri.",
 w:[null,"Yang disimpan adalah nama objek, bukan nama class.","constructor sudah mengisi this.nama dan this.harga.","Kode valid."]},
{k:"kelas",t:"mc",lv:2,q:"Output kode ini:",kode:"class Hewan {\n  constructor(nama) { this.nama = nama; }\n  suara() { return \"...\"; }\n  kenalan() { return this.nama + \" berkata \" + this.suara(); }\n}\nclass Kucing extends Hewan {\n  suara() { return \"meong\"; }\n}\nconsole.log(new Kucing(\"Oyen\").kenalan());",o:["Oyen berkata meong","Oyen berkata ...","undefined berkata meong","Error: Kucing tidak punya constructor"],a:0,vr:"js",
 e:"extends = pewarisan. Kucing mewarisi constructor dan kenalan() dari Hewan, lalu menimpa (override) suara().\n• this.suara() memanggil versi milik objek sebenarnya, yaitu Kucing.\nIngat: kalau class anak tidak menulis constructor, constructor induk dipakai otomatis.",
 w:[null,"suara() sudah ditimpa oleh Kucing.","constructor induk mengisi nama.","Constructor diwarisi otomatis."]},
{k:"kelas",t:"mc",lv:2,q:"Output kode ini:",kode:"class Hewan {\n  constructor(nama) { this.nama = nama; }\n}\nclass Anjing extends Hewan {\n  constructor(nama, ras) {\n    super(nama);\n    this.ras = ras;\n  }\n}\nconst d = new Anjing(\"Doggo\", \"Husky\");\nconsole.log(d.nama + \" - \" + d.ras);",o:["Doggo - Husky","undefined - Husky","Doggo - undefined","Error"],a:0,vr:"js",
 e:"Kalau class anak punya constructor sendiri, ia WAJIB memanggil super(...) sebelum memakai this. super(nama) menjalankan constructor Hewan untuk mengisi this.nama.",
 w:[null,"super(nama) sudah mengisi nama.","this.ras diisi setelah super.","Kode ini benar; error terjadi kalau super dilupakan."]},
{k:"kelas",t:"mc",lv:2,q:"Output kode ini:",kode:"class Kalkulator {\n  static tambah(a, b) { return a + b; }\n}\nconsole.log(Kalkulator.tambah(2, 3));",o:["5","23","undefined","Error: harus pakai new"],a:0,vr:"js",
 e:"Method static milik class itu sendiri, bukan milik objeknya. Dipanggil lewat nama class, tanpa new. Contoh bawaan: Math.max, Array.isArray, Object.keys.\n• Kebalikannya: new Kalkulator().tambah(2,3) justru error, karena objek tidak punya method static.",
 w:[null,"2 dan 3 angka, jadi dijumlahkan.","tambah mengembalikan hasilnya.","static justru dipanggil tanpa new."]},
{k:"kelas",t:"mc",lv:2,q:"Output kode ini:",kode:"class Persegi {\n  constructor(sisi) { this.sisi = sisi; }\n  get luas() { return this.sisi * this.sisi; }\n}\nconst k = new Persegi(4);\nconsole.log(k.luas);",o:["16","undefined","[Function: luas]","8"],a:0,vr:"js",
 e:"get membuat method yang DIBACA seperti properti, tanpa tanda kurung. Nilainya selalu dihitung ulang, jadi kalau sisi diubah, luas ikut berubah.",
 w:[null,"getter mengembalikan hasil perhitungan.","Getter tidak perlu dipanggil dengan ().","4 x 4, bukan 4 + 4."]},
{k:"kelas",t:"mc",lv:2,q:"Output kode ini:",kode:"class Rekening {\n  #saldo = 0;\n  setor(n) { this.#saldo += n; }\n  get saldo() { return this.#saldo; }\n}\nconst r = new Rekening();\nr.setor(50000);\nconsole.log(r.saldo);",o:["50000","0","undefined","Error"],a:0,vr:"js",
 e:"Tanda # membuat field privat: hanya bisa disentuh dari dalam class. Dari luar, saldo hanya bisa dibaca lewat getter dan diubah lewat setor().\n• Ini disebut enkapsulasi: data dilindungi, perubahan hanya lewat pintu resmi.\n• Menulis r.#saldo dari luar class langsung menjadi SyntaxError.",
 w:[null,"setor sudah menambah 50000.","getter saldo mengembalikan #saldo.","Membaca lewat getter itu sah."]},
{k:"kelas",t:"mc",lv:2,q:"Output kode ini:",kode:"class A {}\nconsole.log(typeof A);",o:["function","class","object","undefined"],a:0,vr:"js",
 e:"Di balik layar, class JavaScript adalah fungsi constructor biasa dengan sintaks yang lebih rapi (syntactic sugar).",
 w:[null,"typeof tidak pernah menghasilkan \"class\".","Objek baru lahir lewat new A().","A sudah dideklarasikan."]},
{k:"kelas",t:"mc",lv:3,q:"Output kode ini:",kode:"class Hewan { jalan() { return \"jalan\"; } }\nconst a = new Hewan();\nconst b = new Hewan();\nconsole.log(a.jalan === b.jalan);",o:["true","false","undefined","Error"],a:0,vr:"js",
 e:"Method class disimpan SEKALI di Hewan.prototype dan dipakai bersama oleh semua objek. Objek mencari method lewat rantai prototype (prototype chain).\n• Hemat memori: 1.000 objek tetap memakai satu fungsi jalan.",
 w:[null,"Keduanya menunjuk fungsi yang sama di prototype.","Keduanya fungsi yang ada.","Membandingkan fungsi itu sah."]},
{k:"kelas",t:"mc",lv:1,q:"Output kode ini:",kode:"class Hewan {}\nclass Kucing extends Hewan {}\nconst k = new Kucing();\nconsole.log(k instanceof Hewan);",o:["true","false","Kucing","Error"],a:0,vr:"js",
 e:"instanceof mengecek apakah objek berasal dari class itu ATAU turunannya. Kucing adalah Hewan, jadi true.",
 w:[null,"Pewarisan membuat Kucing juga termasuk Hewan.","instanceof selalu menghasilkan boolean.","Kode valid."]},
{k:"kelas",t:"mc",lv:3,q:"Empat pilar OOP adalah enkapsulasi, pewarisan, abstraksi, dan…",o:["polimorfisme","iterasi","rekursi","kompilasi"],a:0,
 e:"Polimorfisme: satu perintah, banyak bentuk. hewan.suara() menghasilkan 'meong' untuk Kucing dan 'guk' untuk Anjing, tanpa if.\n• Enkapsulasi: sembunyikan data (#).\n• Pewarisan: extends.\n• Abstraksi: tampilkan yang penting saja, sembunyikan detail rumitnya.",
 w:[null,"Iterasi adalah perulangan.","Rekursi adalah fungsi memanggil dirinya.","Kompilasi adalah menerjemahkan kode."]},
{k:"kelas",t:"is",lv:1,q:"Kata kunci untuk memanggil constructor class induk dari class anak: ____(nama)",a:["super"],
 e:"super(…) wajib dipanggil di constructor anak sebelum this dipakai. super.method() memanggil method milik induk."},
{k:"kelas",t:"is",lv:2,q:"Tanda di depan nama field agar menjadi privat di class JavaScript, contoh ____saldo (satu karakter)",a:["#"],
 e:"#saldo hanya bisa diakses dari dalam class. Sebelum fitur ini ada, programmer memakai konvensi _saldo yang sebenarnya masih bisa diubah dari luar."},

// ---- BAB 14: error handling & debugging ----
{k:"error",t:"mc",lv:1,q:"Apa yang dicetak (urut)?",kode:"try {\n  console.log(\"a\");\n  throw new Error(\"rusak\");\n  console.log(\"b\");\n} catch (e) {\n  console.log(\"c\");\n} finally {\n  console.log(\"d\");\n}",o:["a c d","a b c d","a d","a b d"],a:0,vr:"js",vx:"a\nc\nd",
 e:"1. try berjalan: mencetak a.\n2. throw melempar error, sisa try (b) dilewati, lompat ke catch: mencetak c.\n3. finally SELALU berjalan, error atau tidak: mencetak d.\nIngat: finally dipakai untuk bersih-bersih, misalnya menyembunyikan ikon loading.",
 w:[null,"Baris setelah throw tidak pernah dijalankan.","catch dijalankan karena ada error.","b dilewati karena throw."]},
{k:"error",t:"mc",lv:1,q:"Output kode ini:",kode:"try {\n  throw new Error(\"Stok habis\");\n} catch (e) {\n  console.log(e.message);\n}",o:["Stok habis","Error","Error: Stok habis","undefined"],a:0,vr:"js",
 e:"Objek error punya properti name (jenisnya, misalnya \"Error\") dan message (pesan yang kita tulis). Mencetak e langsung akan menampilkan nama + pesan + jejak (stack).",
 w:[null,"Itu e.name.","Itu tampilan String(e), bukan e.message.","message sudah diisi."]},
{k:"error",t:"mc",lv:2,q:"Apa yang dicetak?",kode:"try {\n  const user = null;\n  console.log(user.nama);\n} catch (e) {\n  console.log(e.name);\n}",o:["TypeError","ReferenceError","SyntaxError","RangeError"],a:0,vr:"js",
 e:"Membaca properti dari null atau undefined memicu TypeError (\"Cannot read properties of null\"). Ini error paling sering di JavaScript.\n• Pencegahan: user?.nama (optional chaining).",
 w:[null,"ReferenceError untuk variabel yang tidak dikenal; user ada.","SyntaxError untuk penulisan kode yang salah.","RangeError untuk nilai di luar batas."]},
{k:"error",t:"mc",lv:2,q:"Apa yang dicetak?",kode:"try {\n  console.log(totalHarga);\n} catch (e) {\n  console.log(e.name);\n}",o:["ReferenceError","TypeError","undefined","SyntaxError"],a:0,vr:"js",
 e:"totalHarga tidak pernah dideklarasikan, jadi ReferenceError (\"totalHarga is not defined\"). Biasanya karena salah ketik nama variabel.",
 w:[null,"TypeError untuk tipe yang salah.","Variabel yang tidak pernah dibuat tidak bernilai undefined, tapi error.","Penulisan kodenya benar."]},
{k:"error",t:"mc",lv:2,q:"Apa yang dicetak?",kode:"try {\n  JSON.parse(\"{nama: 'Ani'}\");\n} catch (e) {\n  console.log(e.name);\n}",o:["SyntaxError","TypeError","JSONError","Tidak ada, parse berhasil"],a:0,vr:"js",
 e:"JSON jauh lebih ketat dari objek JavaScript: kunci dan teks WAJIB memakai tanda kutip ganda. Yang benar: {\"nama\": \"Ani\"}.\n• Selalu bungkus JSON.parse dari sumber luar dengan try/catch.",
 w:[null,"Kesalahan format teks adalah SyntaxError.","Tidak ada error bawaan bernama JSONError.","Kunci tanpa kutip ganda tidak sah di JSON."]},
{k:"error",t:"mc",lv:3,q:"Apa yang dicetak (urut)?",kode:"function f() {\n  try {\n    return 1;\n  } finally {\n    console.log(\"selesai\");\n  }\n}\nconsole.log(f());",o:["selesai lalu 1","1 lalu selesai","1 saja","selesai saja"],a:0,vr:"js",vx:"selesai\n1",
 e:"finally tetap berjalan bahkan ketika try sudah return. Nilai 1 disiapkan, finally mencetak 'selesai', baru fungsi benar-benar kembali dan 1 dicetak di luar.",
 w:[null,"console.log(f()) menunggu f selesai, termasuk finally.","finally tidak dilewati oleh return.","Nilai 1 tetap dikembalikan."]},
{k:"error",t:"mc",lv:2,q:"Output kode ini:",kode:"async function muat() {\n  try {\n    await Promise.reject(new Error(\"jaringan putus\"));\n  } catch (e) {\n    console.log(\"tertangkap: \" + e.message);\n  }\n}\nmuat();",o:["tertangkap: jaringan putus","Uncaught (in promise) Error","undefined","tidak mencetak apa-apa"],a:0,vr:"js",
 e:"Dengan async/await, Promise yang gagal (reject) bisa ditangkap memakai try/catch biasa, sama seperti error sinkron.",
 w:[null,"Error itu sudah ditangkap catch.","catch mencetak pesan.","catch berjalan dan mencetak."]},
{k:"error",t:"mc",lv:3,q:"fetch(\"/api/produk\") mendapat jawaban 404 dari server. Apa yang terjadi pada Promise fetch?",o:["Tetap resolve; kita harus memeriksa res.ok sendiri","Langsung reject dan masuk catch","Mengembalikan null","Browser otomatis mencoba lagi"],a:0,
 e:"Jebakan penting: fetch hanya reject kalau jaringan gagal total (offline, DNS gagal). Status 404 atau 500 tetap dianggap 'jawaban sukses diterima'.\n1. const res = await fetch(url);\n2. if (!res.ok) throw new Error(\"HTTP \" + res.status);\n3. const data = await res.json();",
 w:[null,"404 bukan kegagalan jaringan.","fetch selalu mengembalikan objek Response.","Tidak ada percobaan ulang otomatis."]},
{k:"error",t:"mc",lv:2,q:"Output kode ini:",kode:"class ValidasiError extends Error {\n  constructor(pesan) {\n    super(pesan);\n    this.name = \"ValidasiError\";\n  }\n}\ntry {\n  throw new ValidasiError(\"Email wajib diisi\");\n} catch (e) {\n  console.log(e.name + \" | \" + (e instanceof Error));\n}",o:["ValidasiError | true","Error | true","ValidasiError | false","Error | false"],a:0,vr:"js",
 e:"Error buatan sendiri dibuat dengan extends Error. Dengan nama khusus, catch bisa membedakan jenis kesalahan: if (e instanceof ValidasiError) tampilkan pesan ke pengguna; selain itu laporkan sebagai bug.",
 w:[null,"name sudah diganti di constructor.","Turunan Error tetap instance dari Error.","Keduanya keliru."]},
{k:"error",t:"mc",lv:1,q:"Kegunaan console.table(dataArray) saat debugging:",o:["Menampilkan array objek sebagai tabel rapi di console","Membuat elemen <table> di halaman","Menyimpan data ke file","Mengurutkan data"],a:0,
 e:"console.table sangat membantu memeriksa data dari API. Saudara-saudaranya: console.error (merah), console.warn (kuning), console.time/timeEnd (mengukur lama proses), console.group (mengelompokkan log).",
 w:[null,"Itu tidak mengubah halaman.","console tidak menulis file.","Tidak mengurutkan apa pun."]},
{k:"error",t:"mc",lv:2,q:"Pernyataan debugger; di dalam kode berfungsi untuk…",o:["Menghentikan eksekusi di baris itu saat DevTools terbuka","Memperbaiki bug otomatis","Mencetak semua variabel ke console","Menonaktifkan error"],a:0,
 e:"debugger bekerja seperti breakpoint: kode berhenti, lalu kamu bisa melihat isi semua variabel dan menjalankan baris demi baris (Step over / Step into) di tab Sources DevTools.",
 w:[null,"Tidak ada yang memperbaiki bug otomatis.","Ia menghentikan kode, bukan mencetak.","Error tetap muncul."]},
{k:"error",t:"is",lv:1,q:"Kata kunci untuk melempar error buatan sendiri: ____ new Error(\"pesan\")",a:["throw"],
 e:"throw menghentikan fungsi dan melompat ke catch terdekat. Kalau tidak ada catch, program berhenti dan error tampil di console."},
{k:"error",t:"is",lv:2,q:"Blok yang SELALU dijalankan setelah try/catch, error atau tidak: ____",a:["finally"],
 e:"finally cocok untuk menutup koneksi, mematikan loading, atau membuka kembali tombol yang dikunci."},

// ---- BAB 15: Map, Set, Date, Math, Regex ----
{k:"koleksi",t:"mc",lv:1,q:"Output kode ini:",kode:"const s = new Set([1, 2, 2, 3, 3, 3]);\nconsole.log(s.size);",o:["3","6","1","undefined"],a:0,vr:"js",
 e:"Set hanya menyimpan nilai unik; duplikat dibuang otomatis. Sisa {1, 2, 3}, jadi size = 3. Perhatikan: Set memakai .size, array memakai .length.",
 w:[null,"Duplikat tidak disimpan.","Ada tiga nilai berbeda.","size selalu berisi angka."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"const unik = [...new Set([\"apel\", \"jeruk\", \"apel\", \"mangga\"])];\nconsole.log(unik.join(\",\"));",o:["apel,jeruk,mangga","apel,jeruk,apel,mangga","jeruk,mangga","mangga,jeruk,apel"],a:0,vr:"js",
 e:"Trik satu baris paling terkenal untuk menghapus duplikat dari array: masukkan ke Set, lalu tuang kembali ke array dengan spread. Urutan kemunculan pertama tetap dijaga.",
 w:[null,"Duplikat sudah dibuang Set.","Kemunculan pertama apel tetap ada.","Set menjaga urutan masuk."]},
{k:"koleksi",t:"mc",lv:1,q:"Output kode ini:",kode:"const stok = new Map();\nstok.set(\"kopi\", 10).set(\"teh\", 4);\nconsole.log(stok.get(\"teh\"), stok.size);",o:["4 2","10 2","4 1","undefined 2"],a:0,vr:"js",
 e:"Map menyimpan pasangan kunci → nilai, seperti objek, tapi dengan method yang jelas: set, get, has, delete, size. set() mengembalikan Map itu sendiri sehingga bisa dirangkai.",
 w:[null,"Kunci teh bernilai 4.","Ada dua kunci.","Kunci teh ada."]},
{k:"koleksi",t:"mc",lv:3,q:"Output kode ini:",kode:"const m = new Map([[1, \"satu\"]]);\nconst o = { 1: \"satu\" };\nconsole.log(m.has(\"1\"), \"1\" in o);",o:["false true","true true","false false","true false"],a:0,vr:"js",
 e:"Perbedaan penting Map dan objek:\n• Kunci objek selalu diubah jadi teks, jadi 1 dan \"1\" dianggap sama.\n• Map menjaga tipe kunci: angka 1 berbeda dengan teks \"1\". Kunci Map bahkan boleh berupa objek.",
 w:[null,"Map membedakan 1 dan \"1\".","Objek menyimpan kunci 1 sebagai \"1\".","Terbalik."]},
{k:"koleksi",t:"mc",lv:3,q:"Output kode ini:",kode:"console.log(Math.round(2.5), Math.round(-2.5));",o:["3 -2","3 -3","2 -2","2 -3"],a:0,vr:"js",
 e:"Math.round membulatkan .5 ke ARAH ATAS (menuju +tak hingga), jadi 2.5 → 3 dan -2.5 → -2.\n• Saudaranya: Math.floor (selalu ke bawah), Math.ceil (selalu ke atas), Math.trunc (buang desimal).",
 w:[null,"-2.5 dibulatkan ke atas, yaitu -2.","Itu cara pembulatan 'banker's rounding' (Python), bukan JavaScript.","Keduanya keliru."]},
{k:"koleksi",t:"mc",lv:2,q:"Math.floor(Math.random() * 6) + 1 menghasilkan bilangan bulat acak dalam rentang…",o:["1 sampai 6","0 sampai 6","1 sampai 7","0 sampai 5"],a:0,
 e:"1. Math.random() → 0 sampai di bawah 1.\n2. Dikali 6 → 0 sampai di bawah 6.\n3. floor → 0, 1, 2, 3, 4, atau 5.\n4. Ditambah 1 → 1 sampai 6, seperti dadu.",
 w:[null,"Hasil floor paling kecil 0, ditambah 1 jadi 1.","Math.random tidak pernah persis 1.","Sudah ditambah 1."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(0.1 + 0.2 === 0.3, (0.1 + 0.2).toFixed(2));",o:["false 0.30","true 0.30","false 0.3","true 0.3"],a:0,vr:"js",
 e:"Komputer menyimpan desimal dalam biner, jadi 0.1 + 0.2 = 0.30000000000000004. toFixed(2) membulatkan ke 2 angka desimal dan menghasilkan TEKS \"0.30\".\n• Untuk uang, simpan dalam satuan terkecil (rupiah bulat atau sen) agar aman.",
 w:[null,"Hasilnya bukan persis 0.3.","toFixed(2) selalu menulis dua angka desimal.","Keduanya keliru."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"const d = new Date(2026, 0, 17);\nconsole.log(d.getMonth(), d.getDate());",o:["0 17","1 17","0 16","1 16"],a:0,vr:"js",
 e:"Jebakan Date: bulan dihitung mulai 0. Januari = 0, Desember = 11. Tanggal (getDate) tetap normal mulai 1.\n• Untuk menampilkan bulan ke manusia: d.getMonth() + 1.\n• Format Indonesia: d.toLocaleDateString(\"id-ID\").",
 w:[null,"Januari bernilai 0, bukan 1.","Tanggal tidak berubah.","Keduanya keliru."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(/^\\d{4}$/.test(\"2026\"), /^\\d{4}$/.test(\"20266\"));",o:["true false","true true","false false","false true"],a:0,vr:"js",
 e:"Membaca regex /^\\d{4}$/:\n• ^ = awal teks.\n• \\d = satu digit angka.\n• {4} = tepat empat kali.\n• $ = akhir teks.\nJadi teks harus persis 4 digit. \"20266\" punya 5 digit, gagal.",
 w:[null,"^ dan $ mengunci panjang teks.","\"2026\" persis 4 digit.","Terbalik."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"const t = \"2 apel, 15 jeruk, 7 mangga\";\nconsole.log(t.match(/\\d+/g).join(\"|\"));",o:["2|15|7","2|1|5|7","2","15"],a:0,vr:"js",
 e:"\\d+ = satu digit ATAU LEBIH berurutan, jadi 15 terambil utuh. Flag g (global) = ambil SEMUA yang cocok, bukan hanya yang pertama.",
 w:[null,"+ menggabungkan digit berurutan.","Tanpa g baru hanya yang pertama.","15 bukan yang pertama cocok."]},
{k:"koleksi",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log(\"a-b-c\".replace(\"-\", \"+\"), \"a-b-c\".replaceAll(\"-\", \"+\"));",o:["a+b-c a+b+c","a+b+c a+b+c","a+b-c a+b-c","a-b-c a+b+c"],a:0,vr:"js",
 e:"replace dengan teks biasa hanya mengganti kemunculan PERTAMA. replaceAll mengganti semuanya (atau pakai regex dengan flag g: replace(/-/g, \"+\")).",
 w:[null,"replace hanya mengganti yang pertama.","replaceAll mengganti semua.","replace tetap mengganti satu."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"console.log(Number(\"12px\"), parseInt(\"12px\"));",o:["NaN 12","12 12","NaN NaN","12 NaN"],a:0,vr:"js",
 e:"Number() menuntut seluruh teks berupa angka; ada \"px\", jadi NaN (Not a Number). parseInt membaca angka dari depan dan berhenti di huruf pertama, jadi 12. Berguna untuk membaca nilai CSS seperti \"12px\".",
 w:[null,"Number gagal karena ada huruf.","parseInt berhasil membaca 12.","Terbalik."]},
{k:"koleksi",t:"is",lv:1,q:"Struktur data bawaan JavaScript yang otomatis membuang nilai duplikat: new ____()",a:["Set"],
 e:"Set punya add, has, delete, size. Dipakai untuk daftar unik, misalnya tag atau ID pengunjung."},
{k:"koleksi",t:"is",lv:2,q:"Flag regex agar SEMUA kecocokan diambil, bukan hanya yang pertama: /\\d+/____",a:["g"],
 e:"g = global. Flag lain: i (abaikan besar-kecil huruf), m (multi-baris)."},

// ---- BAB 16: module, JSON, Node.js & npm ----
{k:"modul",t:"mc",lv:1,q:"File harga.js berisi: export function diskon(h) { … }. Cara mengimpornya di file lain:",o:["import { diskon } from \"./harga.js\";","import diskon from \"harga\";","require diskon from \"./harga.js\";","include \"./harga.js\";"],a:0,
 e:"Named export diimpor dengan kurung kurawal dan nama yang sama. Path file lokal diawali ./ (folder yang sama) atau ../ (folder induk).",
 w:[null,"Tanpa kurung kurawal hanya untuk default export.","Sintaks require di Node berbentuk const x = require(...).","include tidak ada di JavaScript."]},
{k:"modul",t:"mc",lv:2,q:"File kartu.js ditutup dengan export default function Kartu() { … }. Cara mengimpornya:",o:["import Kartu from \"./kartu.js\";","import { default } from \"./kartu.js\";","import * Kartu from \"./kartu.js\";","import { Kartu() } from \"./kartu.js\";"],a:0,
 e:"Default export (satu per file) diimpor tanpa kurung kurawal, dan namanya bebas. Pola ini sangat umum di komponen React.",
 w:[null,"default adalah kata kunci, tidak bisa dipakai begitu.","Bentuk yang benar: import * as nama from …","Kurung fungsi tidak ditulis di import."]},
{k:"modul",t:"mc",lv:1,q:"Output kode ini:",kode:"console.log(JSON.stringify({ nama: \"Ani\", nilai: [90, 85] }));",o:["{\"nama\":\"Ani\",\"nilai\":[90,85]}","{nama: \"Ani\", nilai: [90, 85]}","[object Object]","\"{nama:Ani}\""],a:0,vr:"js",
 e:"JSON.stringify mengubah objek menjadi TEKS berformat JSON untuk dikirim ke server atau disimpan di localStorage. Kunci diberi kutip ganda dan spasi dibuang.\n• Kebalikannya: JSON.parse(teks) → objek.",
 w:[null,"JSON selalu memakai kutip ganda pada kunci.","Itu hasil String(objek), bukan stringify.","Struktur lengkap tetap ada."]},
{k:"modul",t:"mc",lv:3,q:"Output kode ini:",kode:"console.log(JSON.stringify({ a: undefined, b: () => 1, c: null, d: NaN }));",o:["{\"c\":null,\"d\":null}","{\"a\":undefined,\"b\":1,\"c\":null,\"d\":NaN}","{\"c\":null}","{}"],a:0,vr:"js",
 e:"JSON hanya mengenal teks, angka, boolean, null, array, dan objek.\n• undefined dan fungsi DIBUANG.\n• NaN dan Infinity diubah menjadi null.\nIngat: data bisa 'hilang' diam-diam saat disimpan ke localStorage.",
 w:[null,"JSON tidak punya undefined, fungsi, atau NaN.","NaN tidak dibuang, tapi menjadi null.","null tetap disimpan."]},
{k:"modul",t:"mc",lv:3,q:"Output kode ini:",kode:"const a = { tag: [\"baru\"] };\nconst b = { ...a };\nb.tag.push(\"promo\");\nconsole.log(a.tag.length);",o:["2","1","0","undefined"],a:0,vr:"js",
 e:"Spread membuat salinan DANGKAL (shallow copy): objek luarnya baru, tapi array tag di dalamnya masih DIPAKAI BERSAMA.\n• Mengubah b.tag ikut mengubah a.tag.\n• Untuk salinan dalam: structuredClone(a).",
 w:[null,"Array di dalam tidak ikut disalin.","Array awalnya sudah berisi satu.","tag adalah array yang ada."]},
{k:"modul",t:"mc",lv:1,q:"Fungsi utama file package.json di proyek JavaScript:",o:["Mencatat nama proyek, daftar paket (dependencies), dan perintah (scripts)","Menyimpan kode utama aplikasi","Menyimpan password database","Daftar file yang diabaikan Git"],a:0,
 e:"package.json adalah 'kartu identitas' proyek. Siapa pun yang mengunduh proyekmu cukup menjalankan npm install untuk memasang semua paket yang tercatat.",
 w:[null,"Kode ada di file .js.","Rahasia disimpan di .env yang tidak di-commit.","Itu .gitignore."]},
{k:"modul",t:"mc",lv:2,q:"Folder node_modules sebaiknya…",o:["Tidak di-commit ke Git; dimasukkan ke .gitignore","Di-commit agar teman tidak perlu install","Dihapus setiap selesai coding","Diedit isinya untuk memperbaiki paket"],a:0,
 e:"node_modules bisa berisi ribuan file dan ratusan MB, dan selalu bisa dibuat ulang dari package.json + package-lock.json lewat npm install.",
 w:[null,"Repo jadi sangat berat; cukup npm install.","Tidak perlu dihapus.","Perubahan hilang saat install ulang."]},
{k:"modul",t:"mc",lv:2,q:"Perintah npm install --save-dev vitest memasukkan paket ke…",o:["devDependencies (hanya untuk pengembangan, misal alat tes)","dependencies (ikut dipakai saat aplikasi berjalan)","folder global komputer","package-lock.json saja"],a:0,
 e:"devDependencies = alat bantu saat mengembangkan: tes, bundler, linter. dependencies = paket yang dibutuhkan aplikasi saat dipakai pengguna, misalnya React.",
 w:[null,"Itu untuk npm install tanpa --save-dev.","Global memakai -g.","package.json juga diperbarui."]},
{k:"modul",t:"mc",lv:2,q:"Di package.json tertulis \"react\": \"^18.2.0\". Versi mana yang BOLEH dipasang otomatis?",o:["18.3.1","19.0.0","17.0.2","18.1.0"],a:0,
 e:"Semantic Versioning: MAJOR.MINOR.PATCH.\n• ^18.2.0 = boleh naik minor/patch (18.x.x, minimal 18.2.0), tapi tidak boleh naik major (19), karena major bisa membawa perubahan yang merusak.\n• ~18.2.0 lebih ketat: hanya patch (18.2.x).",
 w:[null,"Major 19 tidak diizinkan oleh ^.","Lebih rendah dari batas minimal.","18.1.0 di bawah 18.2.0."]},
{k:"modul",t:"mc",lv:2,q:"Kode console.log(document.title) dijalankan dengan Node.js di terminal. Hasilnya:",o:["ReferenceError: document is not defined","Judul halaman","undefined","Node membuka browser"],a:0,
 e:"Node.js menjalankan JavaScript di luar browser, jadi tidak ada document, window, atau DOM. Sebagai gantinya Node punya modul untuk file (fs), server (http), dan path. Bahasanya sama, lingkungannya berbeda.",
 w:[null,"Tidak ada halaman di Node.","document bukan sekadar kosong, tapi tidak dikenal.","Node tidak membuka browser."]},
{k:"modul",t:"mc",lv:2,q:"<script type=\"module\" src=\"app.js\"> berbeda dari script biasa karena…",o:["Boleh memakai import/export, otomatis defer, dan otomatis strict mode","Lebih cepat dua kali lipat","Hanya jalan di Node.js","Tidak bisa mengakses DOM"],a:0,
 e:"Script module menunggu HTML selesai dibaca (seperti defer), punya scope sendiri (variabelnya tidak bocor ke global), dan selalu strict. Catatan: module tidak jalan dari file:// langsung; butuh server lokal (misal Live Server atau npx serve).",
 w:[null,"Kecepatan tidak berubah.","Module justru fitur browser.","DOM tetap bisa diakses."]},
{k:"modul",t:"is",lv:1,q:"Perintah untuk membuat package.json baru di proyek: npm ____",a:["init"],
 e:"npm init (atau npm init -y untuk langsung pakai jawaban bawaan). Setelah itu npm install nama-paket untuk menambah paket."},
{k:"modul",t:"is",lv:2,q:"Fungsi bawaan modern untuk menyalin objek secara DALAM (deep copy): ____(obj)",a:["structuredClone"],
 e:"structuredClone menyalin semua lapisan, termasuk array dan objek di dalamnya. Ada di browser modern dan Node 17+."},

// ---- BAB 17: menuju framework (TypeScript & React) ----
{k:"frontend",t:"mc",lv:1,q:"TypeScript adalah…",o:["JavaScript ditambah penulisan tipe data, lalu diterjemahkan (compile) menjadi JavaScript","Bahasa pengganti JavaScript yang dijalankan langsung oleh browser","Framework CSS","Database"],a:0,
 e:"Browser tidak menjalankan TypeScript. File .ts diperiksa dan diubah menjadi .js oleh compiler. Untungnya: kesalahan tipe ketahuan SEBELUM program dijalankan, dan editor bisa memberi saran otomatis.",
 w:[null,"Browser hanya menjalankan JavaScript.","Itu bukan urusan tampilan.","Itu bukan penyimpan data."]},
{k:"frontend",t:"mc",lv:2,q:"Kode TypeScript: let umur: number = \"20\"; Apa yang terjadi?",o:["Compiler menolak: string tidak boleh diisi ke variabel number","Otomatis diubah jadi 20","Berjalan normal","Error baru muncul saat dibuka di browser"],a:0,
 e:"Inilah gunanya TypeScript: kesalahan ditangkap saat menulis kode, bukan saat pengguna sudah memakai aplikasi.",
 w:[null,"TypeScript tidak mengubah tipe diam-diam.","Pemeriksaan tipe menolaknya.","Justru ketahuan sebelum dijalankan."]},
{k:"frontend",t:"mc",lv:2,q:"Di TypeScript, type Status = \"lunas\" | \"belum\"; artinya variabel bertipe Status…",o:["Hanya boleh bernilai \"lunas\" atau \"belum\"","Boleh teks apa saja","Berisi dua nilai sekaligus","Bernilai boolean"],a:0,
 e:"Tanda | membuat union type: pilihan nilai yang diizinkan. Salah ketik seperti \"lunass\" langsung ditandai merah oleh editor.",
 w:[null,"Hanya dua nilai itu yang diterima.","Satu nilai pada satu waktu.","Isinya teks, bukan boolean."]},
{k:"frontend",t:"mc",lv:1,q:"Komponen React pada dasarnya adalah…",o:["Fungsi JavaScript yang mengembalikan tampilan (JSX)","File HTML biasa","Class CSS","Tabel database"],a:0,
 e:"Contoh: function Sapa({ nama }) { return <h1>Halo, {nama}</h1>; }. Halaman dibangun dari komponen-komponen kecil yang disusun seperti lego: Navbar, KartuProduk, Footer.",
 w:[null,"JSX mirip HTML tapi ditulis di dalam JavaScript.","Komponen berisi logika dan tampilan.","Bukan penyimpanan data."]},
{k:"frontend",t:"mc",lv:2,q:"Di JSX (React), atribut class HTML ditulis sebagai…",o:["className","class","cssClass","styleClass"],a:0,
 e:"class adalah kata kunci JavaScript, jadi JSX memakai className. Begitu juga for pada <label> menjadi htmlFor, dan event ditulis camelCase: onClick, onChange.",
 w:[null,"class bentrok dengan kata kunci JavaScript.","Tidak ada atribut cssClass.","Tidak ada atribut styleClass."]},
{k:"frontend",t:"mc",lv:2,q:"Kode React: const [jumlah, setJumlah] = useState(0); Cara yang benar menambah jumlah agar tampilan ikut berubah:",o:["setJumlah(jumlah + 1)","jumlah = jumlah + 1","jumlah++","useState(jumlah + 1)"],a:0,
 e:"State hanya boleh diubah lewat fungsi setter-nya. Setter memberi tahu React bahwa data berubah, lalu React menggambar ulang komponen. Mengubah variabel langsung tidak memicu gambar ulang.",
 w:[null,"Tampilan tidak akan diperbarui.","Sama saja, mengubah langsung.","useState hanya dipanggil sekali di awal komponen."]},
{k:"frontend",t:"mc",lv:3,q:"State React berisi array: const [daftar, setDaftar] = useState([]). Cara yang benar menambah item:",o:["setDaftar([...daftar, itemBaru])","daftar.push(itemBaru)","daftar.push(itemBaru); setDaftar(daftar)","setDaftar(daftar + itemBaru)"],a:0,
 e:"React membandingkan referensi: kalau array-nya objek yang sama, React mengira tidak ada perubahan. Selalu buat array BARU dengan spread (immutable update).\n• Menghapus: setDaftar(daftar.filter(x => x.id !== id)).",
 w:[null,"Mengubah langsung tanpa setter.","Array-nya masih objek yang sama, React bisa tidak menggambar ulang.","Array ditambah teks menjadi string."]},
{k:"frontend",t:"mc",lv:2,q:"Saat menampilkan daftar dengan daftar.map(...) di React, setiap elemen perlu atribut…",o:["key yang unik, misalnya id","index wajib","name","ref"],a:0,
 e:"key membantu React mengenali item mana yang berubah, bertambah, atau terhapus. Pakai id dari data. Index hanya aman untuk daftar yang tidak pernah berubah urutan.",
 w:[null,"Index bisa menimbulkan bug saat urutan berubah.","name tidak dipakai untuk itu.","ref untuk mengakses elemen DOM langsung."]},
{k:"frontend",t:"mc",lv:2,q:"useEffect(() => { ambilData(); }, []) — array kosong di akhir berarti efek dijalankan…",o:["Sekali, setelah komponen pertama kali tampil","Setiap kali komponen digambar ulang","Tidak pernah","Setiap detik"],a:0,
 e:"Array kedua adalah daftar ketergantungan.\n• [] → sekali di awal, cocok untuk mengambil data API.\n• [id] → setiap kali id berubah.\n• Tanpa array → setiap render (jarang dibutuhkan dan bisa membuat loop tak berujung).",
 w:[null,"Itu kalau array dihilangkan.","Ia dijalankan sekali.","Tidak ada pengulangan waktu."]},
{k:"frontend",t:"mc",lv:1,q:"Vite (dibaca 'vit') dipakai untuk…",o:["Membuat dan menjalankan proyek frontend dengan cepat (dev server + build)","Menyimpan data pengguna","Mendesain logo","Menguji kecepatan internet"],a:0,
 e:"npm create vite@latest membuat kerangka proyek React/Vue/vanilla. npm run dev menjalankan server lokal yang langsung memperbarui halaman saat file disimpan; npm run build membuat versi siap tayang di folder dist.",
 w:[null,"Bukan database.","Bukan alat desain.","Bukan alat jaringan."]},
{k:"frontend",t:"is",lv:1,q:"Hook React untuk menyimpan data yang bisa berubah di komponen: ____(nilaiAwal)",a:["useState"],
 e:"useState mengembalikan dua hal: nilai sekarang dan fungsi untuk mengubahnya."},
{k:"frontend",t:"is",lv:2,q:"Ekstensi file komponen React yang memakai TypeScript dan JSX (tanpa titik): ____",a:["tsx"],
 e:".tsx = TypeScript + JSX. Versi JavaScript-nya .jsx; file TypeScript tanpa JSX memakai .ts."}
);

MATERI_JS.push(
{k:"scope",judul:"Scope, Hoisting, Closure & this",materi:`
<!--pemula--><h4>Untuk pemula: "di mana variabel boleh dipakai?"</h4>
<p>Bayangkan rumah dengan banyak kamar. Barang yang ditaruh di ruang tamu bisa dilihat semua penghuni. Barang yang disimpan di kamar hanya bisa dilihat dari dalam kamar itu. Di pemrograman, "kamar" itu disebut <b>scope</b> (cakupan), dan "barang"-nya adalah variabel.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya dalam bahasa sehari-hari</th></tr>
<tr><td>scope</td><td>wilayah tempat sebuah variabel dikenal</td></tr>
<tr><td>global</td><td>ruang tamu: dikenal di seluruh program</td></tr>
<tr><td>block scope</td><td>kamar yang dibatasi kurung kurawal <code>{ }</code></td></tr>
<tr><td>hoisting</td><td>"pengangkatan": JavaScript membaca semua deklarasi lebih dulu sebelum menjalankan baris pertama</td></tr>
<tr><td>closure</td><td>fungsi yang membawa "tas ingatan" berisi variabel dari tempat ia dibuat</td></tr>
<tr><td><code>this</code></td><td>"aku": objek yang sedang menjalankan method</td></tr></table><!--/pemula-->
<h4>1. var, let, dan const: tiga cara membuat variabel</h4>
<table class="mini-pivot"><tr><th></th><th><code>var</code></th><th><code>let</code></th><th><code>const</code></th></tr>
<tr><td>Cakupan</td><td>seluruh fungsi</td><td>blok <code>{ }</code></td><td>blok <code>{ }</code></td></tr>
<tr><td>Boleh diisi ulang?</td><td>ya</td><td>ya</td><td><b>tidak</b></td></tr>
<tr><td>Dipakai sebelum dideklarasikan</td><td><code>undefined</code> (diam-diam)</td><td>ReferenceError</td><td>ReferenceError</td></tr>
<tr><td>Dipakai di kode modern?</td><td>hindari</td><td>untuk nilai yang berubah</td><td><b>pilihan utama</b></td></tr></table>
<pre><code>if (true) {
  var a = 1;   // bocor keluar blok
  let b = 2;   // hanya hidup di dalam blok
}
console.log(a); // 1
console.log(b); // ReferenceError: b is not defined</code></pre>
<div class="catatan">Pegangan sederhana: tulis <code>const</code> dulu. Kalau ternyata nilainya perlu diganti, ubah menjadi <code>let</code>. Jangan pakai <code>var</code>. Ingat juga: <code>const</code> pada array/objek tetap boleh diubah isinya (<code>arr.push(4)</code> sah); yang dilarang hanya mengganti seluruh wadahnya (<code>arr = []</code>).</div>
<h4>2. Hoisting: deklarasi "naik" ke atas</h4>
<p>Sebelum menjalankan kode, JavaScript memindai seluruh file dan mencatat semua deklarasi. Akibatnya:</p>
<ul><li><b>Function declaration</b> (<code>function sapa() {}</code>) diangkat utuh, jadi boleh dipanggil sebelum ditulis.</li>
<li><b>var</b> diangkat tapi kosong: membaca sebelum diisi menghasilkan <code>undefined</code>.</li>
<li><b>let/const</b> juga dicatat, tapi berada di <b>Temporal Dead Zone</b> (zona terlarang) sampai barisnya dijalankan. Membacanya terlalu awal langsung error. Ini justru melindungimu dari bug.</li></ul>
<pre><code>console.log(x); // undefined (bukan error!)
var x = 5;

console.log(y); // ReferenceError
let y = 5;</code></pre>
<h4>3. Closure: fungsi yang punya ingatan</h4>
<p>Ketika fungsi dibuat di dalam fungsi lain, ia membawa akses ke variabel fungsi luar, <b>bahkan setelah fungsi luar selesai</b>.</p>
<pre><code>function buatPenghitung() {
  let n = 0;              // "disimpan di tas" fungsi dalam
  return () =&gt; ++n;
}
const hitung = buatPenghitung();
hitung(); // 1
hitung(); // 2
// n tidak bisa diubah dari luar: data privat</code></pre>
<p>Contoh nyata closure di pekerjaan sehari-hari:</p>
<ul><li><b>Data privat</b>: saldo, penghitung, status login yang tidak boleh diubah sembarangan.</li>
<li><b>Fungsi pabrik</b>: <code>const diskon10 = buatDiskon(10)</code>, <code>const diskon25 = buatDiskon(25)</code>.</li>
<li><b>Callback</b>: fungsi di <code>setTimeout</code>, <code>addEventListener</code>, dan <code>.map()</code> membaca variabel di sekitarnya lewat closure.</li></ul>
<div class="catatan">Soal interview paling terkenal: <code>for (var i = 0; i &lt; 3; i++) setTimeout(() =&gt; console.log(i))</code> mencetak <b>3 3 3</b>, karena hanya ada satu <code>i</code>. Ganti dengan <code>let</code> → <b>0 1 2</b>, karena tiap putaran membuat <code>i</code> baru yang diingat closure masing-masing.</div>
<h4>4. this: "siapa yang memanggil?"</h4>
<p>Nilai <code>this</code> ditentukan oleh <b>cara fungsi dipanggil</b>, bukan tempat fungsi ditulis.</p>
<table class="mini-pivot"><tr><th>Cara memanggil</th><th>Isi <code>this</code></th></tr>
<tr><td><code>kucing.sapa()</code></td><td>objek di depan titik: <code>kucing</code></td></tr>
<tr><td><code>const f = kucing.sapa; f()</code></td><td>hilang (undefined di strict mode)</td></tr>
<tr><td><code>kucing.sapa.bind(kucing)</code></td><td>dikunci ke <code>kucing</code></td></tr>
<tr><td><code>new Kucing()</code></td><td>objek baru yang sedang dibuat</td></tr>
<tr><td>arrow function</td><td><b>tidak punya this sendiri</b>; memakai this dari luar</td></tr></table>
<pre><code>const tim = {
  nama: "Merah",
  anggota: ["Ani", "Budi"],
  daftar() {
    // arrow di dalam method: this tetap tim. Pas!
    return this.anggota.map(a =&gt; a + " (" + this.nama + ")");
  }
};</code></pre>
<p>Aturan praktis: <b>method objek</b> ditulis dengan <code>nama() { }</code>; <b>callback di dalamnya</b> ditulis dengan arrow.</p>
<h4>5. Strict mode</h4>
<p><code>"use strict";</code> di baris pertama membuat JavaScript lebih galak: mengisi variabel yang belum dideklarasikan jadi error (bukan diam-diam membuat variabel global). File module dan isi class otomatis strict.</p>
<div class="praktik"><b>Coba sendiri:</b> buat fungsi <code>buatDiskon(persen)</code> yang mengembalikan fungsi <code>harga =&gt; harga - harga * persen / 100</code>. Buat <code>diskon10</code> dan <code>diskon50</code>, lalu cetak <code>diskon10(20000)</code> dan <code>diskon50(20000)</code>. Kamu baru saja memakai closure.</div>
`},
{k:"event",judul:"Event Lanjut: Bubbling, Delegation & Form",materi:`
<!--pemula--><h4>Untuk pemula: event = "kejadian" di halaman</h4>
<p>Setiap kali pengguna mengklik, mengetik, menggulir, atau mengirim form, browser mengumumkan sebuah <b>event</b>. Tugas kita: "memasang telinga" (<i>listener</i>) di elemen yang tepat dan memberi tahu apa yang harus dilakukan saat kejadian itu terdengar.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>listener / handler</td><td>fungsi yang dijalankan saat event terjadi</td></tr>
<tr><td><code>e</code> (event object)</td><td>"amplop laporan" berisi detail kejadian: elemen apa, tombol apa, posisi mouse</td></tr>
<tr><td>bubbling</td><td>event merambat naik dari elemen yang diklik ke induk-induknya</td></tr>
<tr><td>delegation</td><td>satu listener di induk mengurus banyak anak</td></tr>
<tr><td>perilaku bawaan</td><td>yang otomatis dilakukan browser: link pindah halaman, form me-refresh</td></tr></table><!--/pemula-->
<h4>1. Memasang dan melepas listener</h4>
<pre><code>const tombol = document.querySelector("#beli");

function beli(e) {
  console.log("Diklik:", e.target);
}
tombol.addEventListener("click", beli);    // pasang
tombol.removeEventListener("click", beli); // lepas: harus fungsi YANG SAMA

tombol.addEventListener("click", beli, { once: true }); // otomatis lepas setelah sekali</code></pre>
<div class="catatan">Kesalahan paling sering: menulis <code>addEventListener("click", beli())</code>. Tanda kurung membuat <code>beli</code> langsung dijalankan saat halaman dibuka, dan yang dipasang adalah hasilnya (biasanya <code>undefined</code>). Tulis nama fungsinya saja.</div>
<h4>2. Event yang paling sering dipakai</h4>
<table class="mini-pivot"><tr><th>Event</th><th>Kapan terjadi</th><th>Contoh pemakaian</th></tr>
<tr><td><code>click</code></td><td>elemen diklik/ditap</td><td>tombol, kartu</td></tr>
<tr><td><code>input</code></td><td>tiap kali isian berubah (tiap huruf)</td><td>pencarian langsung, hitung karakter</td></tr>
<tr><td><code>change</code></td><td>isian selesai diubah, select/checkbox dipilih</td><td>filter kategori</td></tr>
<tr><td><code>submit</code></td><td>form dikirim (Enter atau tombol submit)</td><td>login, checkout</td></tr>
<tr><td><code>keydown</code></td><td>tombol keyboard ditekan</td><td>Enter untuk kirim, Esc untuk tutup</td></tr>
<tr><td><code>focus</code> / <code>blur</code></td><td>elemen mendapat / kehilangan fokus</td><td>validasi saat keluar kolom</td></tr>
<tr><td><code>scroll</code></td><td>halaman digulir</td><td>tombol "kembali ke atas"</td></tr>
<tr><td><code>DOMContentLoaded</code></td><td>HTML selesai dibaca</td><td>mulai menjalankan skrip</td></tr></table>
<h4>3. Bubbling: event menggelembung naik</h4>
<pre><code>&lt;div id="kartu"&gt;
  &lt;button id="hapus"&gt;Hapus&lt;/button&gt;
&lt;/div&gt;</code></pre>
<p>Klik tombol Hapus → listener di <code>button</code> jalan dulu, lalu listener di <code>div</code>, lalu <code>body</code>, sampai <code>document</code>. Seperti gelembung udara di air yang naik ke permukaan.</p>
<p>Kalau kartu bisa diklik untuk membuka detail, klik tombol Hapus juga akan membuka detail. Solusinya: <code>e.stopPropagation()</code> di listener tombol.</p>
<h4>4. Event delegation: satu telinga untuk banyak anak</h4>
<pre><code>const daftar = document.querySelector("#daftar-tugas");

daftar.addEventListener("click", e =&gt; {
  const tombol = e.target.closest(".hapus");  // cari tombol .hapus terdekat
  if (!tombol) return;                        // klik di tempat lain: abaikan
  tombol.closest("li").remove();
});</code></pre>
<ul><li><code>e.target</code> = elemen yang benar-benar diklik (bisa ikon kecil di dalam tombol).</li>
<li><code>e.currentTarget</code> = elemen pemilik listener (di sini <code>#daftar-tugas</code>).</li>
<li><code>closest(selector)</code> = naik mencari leluhur terdekat yang cocok, termasuk dirinya sendiri.</li></ul>
<p>Keuntungannya: hemat memori, dan <b>item baru yang ditambahkan nanti otomatis ikut bekerja</b>.</p>
<h4>5. Membatalkan perilaku bawaan: preventDefault</h4>
<pre><code>const form = document.querySelector("#form-login");

form.addEventListener("submit", async e =&gt; {
  e.preventDefault();                 // jangan refresh halaman
  const data = new FormData(form);    // ambil semua isian sekaligus
  const email = data.get("email").trim();
  if (!email.includes("@")) {
    alert("Email belum benar");
    return;
  }
  // kirim dengan fetch...
});</code></pre>
<div class="catatan"><code>preventDefault</code> membatalkan aksi bawaan browser (pindah halaman, kirim form, centang checkbox). <code>stopPropagation</code> menghentikan event naik ke induk. Keduanya berbeda dan sering tertukar di soal interview.</div>
<h4>6. Keyboard</h4>
<pre><code>document.addEventListener("keydown", e =&gt; {
  if (e.key === "Escape") tutupModal();
  if (e.key === "Enter" &amp;&amp; e.ctrlKey) kirimPesan();
});</code></pre>
<div class="praktik"><b>Coba sendiri:</b> buat daftar tugas (<code>&lt;ul&gt;</code>) dengan input dan tombol Tambah. Setiap <code>&lt;li&gt;</code> punya tombol ✕. Pakai <b>satu</b> listener di <code>&lt;ul&gt;</code> (delegation) untuk menghapus item, dan form dengan <code>preventDefault</code> untuk menambah item.</div>
`},
{k:"kelas",judul:"Class, Prototype & OOP di JavaScript",materi:`
<!--pemula--><h4>Untuk pemula: class = cetakan kue</h4>
<p>Bayangkan cetakan kue berbentuk bintang. Dari satu cetakan kamu bisa membuat banyak kue: rasa cokelat, keju, pandan. Bentuknya sama, isinya berbeda. Dalam pemrograman, <b>class</b> adalah cetakannya dan <b>objek</b> (instance) adalah kuenya.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>class</td><td>cetakan / rancangan</td></tr>
<tr><td>objek / instance</td><td>hasil cetakan, dibuat dengan <code>new</code></td></tr>
<tr><td>constructor</td><td>fungsi yang otomatis jalan saat objek dibuat, untuk mengisi data awal</td></tr>
<tr><td>property</td><td>data milik objek (nama, harga)</td></tr>
<tr><td>method</td><td>kemampuan objek (hitungTotal, kirim)</td></tr>
<tr><td>inheritance (pewarisan)</td><td>class anak mewarisi semua milik class induk</td></tr></table><!--/pemula-->
<h4>1. Membuat class dan objek</h4>
<pre><code>class Produk {
  constructor(nama, harga, stok = 0) {
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }
  tersedia() {
    return this.stok &gt; 0;
  }
  info() {
    return this.nama + " - Rp" + this.harga.toLocaleString("id-ID");
  }
}

const kopi = new Produk("Kopi Susu", 18000, 12);
const teh  = new Produk("Teh Tarik", 15000);
kopi.info();       // "Kopi Susu - Rp18.000"
teh.tersedia();    // false</code></pre>
<h4>2. Pewarisan dengan extends dan super</h4>
<pre><code>class ProdukDigital extends Produk {
  constructor(nama, harga, linkUnduh) {
    super(nama, harga, Infinity);   // panggil constructor induk DULU
    this.linkUnduh = linkUnduh;
  }
  info() {                           // override (menimpa) method induk
    return super.info() + " (digital)";
  }
}</code></pre>
<ul><li><code>extends</code> = "adalah jenis dari". ProdukDigital adalah Produk.</li>
<li><code>super(...)</code> wajib dipanggil sebelum memakai <code>this</code> di constructor anak.</li>
<li><code>super.info()</code> memanggil versi milik induk, lalu kita tambahi.</li></ul>
<h4>3. Getter, setter, static, dan field privat</h4>
<pre><code>class Rekening {
  #saldo = 0;                    // privat: tidak bisa diubah dari luar
  static bunga = 0.03;           // milik class, bukan milik objek

  setor(n) {
    if (n &lt;= 0) throw new Error("Setoran harus positif");
    this.#saldo += n;
  }
  get saldo() { return this.#saldo; }      // dibaca seperti properti: r.saldo
  static dariGaji(g) {                     // dipanggil: Rekening.dariGaji(...)
    const r = new Rekening();
    r.setor(g * 0.1);
    return r;
  }
}</code></pre>
<table class="mini-pivot"><tr><th>Fitur</th><th>Cara pakai</th><th>Gunanya</th></tr>
<tr><td><code>get luas()</code></td><td><code>obj.luas</code> (tanpa kurung)</td><td>nilai yang dihitung dari data lain</td></tr>
<tr><td><code>set nama(v)</code></td><td><code>obj.nama = "x"</code></td><td>validasi saat diisi</td></tr>
<tr><td><code>static</code></td><td><code>NamaClass.method()</code></td><td>fungsi bantu yang tidak butuh objek</td></tr>
<tr><td><code>#field</code></td><td>hanya di dalam class</td><td>melindungi data (enkapsulasi)</td></tr></table>
<h4>4. Di balik layar: prototype</h4>
<p>JavaScript sebenarnya tidak punya "class" seperti Java. Sintaks class adalah cara rapi menulis <b>prototype</b>. Setiap objek punya tautan tersembunyi ke objek lain (prototipenya). Kalau properti tidak ditemukan di objek, JavaScript mencarinya di prototipe, lalu prototipe dari prototipe, dan seterusnya: inilah <b>rantai prototipe</b>.</p>
<pre><code>kopi.info === teh.info           // true: method disimpan sekali di Produk.prototype
typeof Produk                    // "function"
kopi instanceof Produk           // true
[].map === Array.prototype.map   // true: method array juga lewat prototype</code></pre>
<h4>5. Empat pilar OOP</h4>
<table class="mini-pivot"><tr><th>Pilar</th><th>Arti singkat</th><th>Di JavaScript</th></tr>
<tr><td>Enkapsulasi</td><td>bungkus data, sembunyikan dari luar</td><td><code>#saldo</code>, getter</td></tr>
<tr><td>Pewarisan</td><td>pakai ulang dari induk</td><td><code>extends</code>, <code>super</code></td></tr>
<tr><td>Polimorfisme</td><td>method sama, perilaku beda tiap class</td><td>override <code>info()</code></td></tr>
<tr><td>Abstraksi</td><td>tampilkan yang perlu saja</td><td>method publik sederhana menutupi detail rumit</td></tr></table>
<div class="catatan">Tidak semua hal harus jadi class. Di JavaScript modern (terutama React), banyak kode cukup memakai fungsi dan objek biasa. Pakai class saat kamu punya banyak objek sejenis yang punya data DAN perilaku, misalnya keranjang belanja, karakter game, atau koneksi API.</div>
<div class="praktik"><b>Coba sendiri:</b> buat class <code>Keranjang</code> dengan field privat <code>#isi = []</code>, method <code>tambah(produk, qty)</code>, getter <code>total</code>, dan method <code>kosongkan()</code>. Uji dengan tiga produk dan cetak totalnya.</div>
`},
{k:"error",judul:"Error Handling & Debugging",materi:`
<!--pemula--><h4>Untuk pemula: error itu teman, bukan musuh</h4>
<p>Programmer berpengalaman pun melihat error setiap hari. Bedanya, mereka <b>membaca</b> pesan error-nya. Pesan error memberi tahu tiga hal: <b>jenis</b> kesalahan, <b>pesan</b> penjelasan, dan <b>lokasi</b> (nama file dan nomor baris).</p>
<pre><code>Uncaught TypeError: Cannot read properties of undefined (reading 'nama')
    at tampilkan (app.js:42:18)</code></pre>
<p>Bacanya: "Di file app.js baris 42, fungsi tampilkan mencoba membaca <code>.nama</code> dari sesuatu yang ternyata <code>undefined</code>." Langsung buka baris 42 dan cek kenapa datanya kosong.</p><!--/pemula-->
<h4>1. Jenis error yang paling sering</h4>
<table class="mini-pivot"><tr><th>Jenis</th><th>Penyebab umum</th><th>Contoh</th></tr>
<tr><td><code>SyntaxError</code></td><td>penulisan kode salah (kurung kurang, koma salah)</td><td><code>if (x &gt; 1 {</code></td></tr>
<tr><td><code>ReferenceError</code></td><td>variabel tidak dikenal (salah ketik / belum dibuat)</td><td><code>totl + 1</code></td></tr>
<tr><td><code>TypeError</code></td><td>operasi pada tipe yang salah, paling sering membaca properti dari null/undefined</td><td><code>null.nama</code>, <code>angka.toUpperCase()</code></td></tr>
<tr><td><code>RangeError</code></td><td>nilai di luar batas</td><td><code>new Array(-1)</code>, rekursi tanpa henti</td></tr></table>
<h4>2. try, catch, finally</h4>
<pre><code>function bacaKeranjang() {
  try {
    const teks = localStorage.getItem("keranjang");
    return JSON.parse(teks) ?? [];       // bisa gagal kalau datanya rusak
  } catch (e) {
    console.error("Keranjang rusak, direset:", e.message);
    return [];
  } finally {
    console.log("pembacaan selesai");     // selalu jalan
  }
}</code></pre>
<ul><li><b>try</b>: kode yang mungkin gagal.</li><li><b>catch (e)</b>: rencana cadangan kalau gagal. <code>e.name</code> = jenis, <code>e.message</code> = pesan.</li><li><b>finally</b>: selalu dijalankan, bahkan kalau ada <code>return</code>. Cocok untuk mematikan ikon loading.</li></ul>
<h4>3. Melempar error sendiri</h4>
<pre><code>class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);
    this.name = "ValidasiError";
  }
}

function daftar(email) {
  if (!email.includes("@")) throw new ValidasiError("Format email salah");
  // ... lanjut simpan
}

try {
  daftar("budi.com");
} catch (e) {
  if (e instanceof ValidasiError) tampilkanPesan(e.message); // salah input pengguna
  else throw e;                                              // bug sungguhan: lempar lagi
}</code></pre>
<h4>4. Error pada kode asinkron</h4>
<pre><code>async function muatProduk() {
  try {
    const res = await fetch("/api/produk");
    if (!res.ok) throw new Error("Server menjawab " + res.status);  // 404/500 TIDAK otomatis error!
    return await res.json();
  } catch (e) {
    tampilkanPesan("Gagal memuat produk. Coba lagi.");
    return [];
  }
}</code></pre>
<div class="catatan">Ingat baik-baik: <code>fetch</code> hanya gagal (reject) kalau jaringan putus. Jawaban 404 atau 500 tetap dianggap "berhasil diterima". Selalu periksa <code>res.ok</code>.</div>
<h4>5. Debugging: mencari sumber masalah</h4>
<table class="mini-pivot"><tr><th>Alat</th><th>Kegunaan</th></tr>
<tr><td><code>console.log(x)</code></td><td>cara tercepat melihat isi variabel</td></tr>
<tr><td><code>console.table(arr)</code></td><td>array objek tampil sebagai tabel</td></tr>
<tr><td><code>console.error</code> / <code>warn</code></td><td>pesan berwarna merah/kuning, mudah dicari</td></tr>
<tr><td><code>console.time("x")</code> … <code>timeEnd("x")</code></td><td>mengukur lama proses</td></tr>
<tr><td><code>debugger;</code></td><td>menghentikan kode di baris itu (DevTools harus terbuka)</td></tr>
<tr><td>Breakpoint di tab Sources</td><td>klik nomor baris; kode berhenti, lalu jalankan baris demi baris</td></tr>
<tr><td>Tab Network</td><td>melihat permintaan ke server: status, isi jawaban</td></tr></table>
<p>Langkah debugging yang sistematis:</p>
<ol><li><b>Baca</b> pesan error sampai habis, termasuk nomor barisnya.</li><li><b>Ulangi</b> masalahnya dengan langkah yang sama (reproduksi).</li><li><b>Persempit</b>: pasang <code>console.log</code> atau breakpoint sebelum dan sesudah baris yang dicurigai.</li><li><b>Bandingkan</b> nilai yang kamu harapkan dengan nilai sebenarnya.</li><li>Perbaiki <b>satu hal</b>, lalu uji lagi.</li></ol>
<div class="praktik"><b>Coba sendiri:</b> tulis fungsi <code>bagi(a, b)</code> yang melempar <code>RangeError</code> kalau <code>b === 0</code> dan <code>TypeError</code> kalau salah satunya bukan angka. Panggil dengan tiga kasus di dalam <code>try/catch</code> dan cetak <code>e.name</code> masing-masing.</div>
`},
{k:"koleksi",judul:"Map, Set, Date, Math & Regex",materi:`
<!--pemula--><h4>Untuk pemula: "perkakas bawaan" JavaScript</h4>
<p>JavaScript datang dengan kotak perkakas siap pakai. Kamu tidak perlu membuat sendiri cara membulatkan angka, menyimpan daftar unik, atau mengecek format email. Bab ini mengenalkan perkakas yang paling sering muncul di pekerjaan dan tes coding.</p>
<table class="mini-pivot"><tr><th>Perkakas</th><th>Bayangkan seperti…</th></tr>
<tr><td><code>Set</code></td><td>daftar tamu: satu nama hanya dicatat sekali</td></tr>
<tr><td><code>Map</code></td><td>buku telepon: cari nomor (nilai) lewat nama (kunci)</td></tr>
<tr><td><code>Math</code></td><td>kalkulator ilmiah</td></tr>
<tr><td><code>Date</code></td><td>kalender + jam</td></tr>
<tr><td>Regex</td><td>"pola pencarian" super, seperti Ctrl+F yang bisa mencari "4 angka berurutan"</td></tr></table><!--/pemula-->
<h4>1. Set: kumpulan nilai unik</h4>
<pre><code>const tag = new Set(["promo", "baru"]);
tag.add("promo");          // diabaikan, sudah ada
tag.has("baru");           // true
tag.size;                  // 2
tag.delete("baru");

const unik = [...new Set([3, 1, 3, 2, 1])];   // [3, 1, 2]  trik hapus duplikat</code></pre>
<h4>2. Map: pasangan kunci → nilai</h4>
<pre><code>const stok = new Map();
stok.set("kopi", 10).set("teh", 4);
stok.get("kopi");          // 10
stok.has("susu");          // false
for (const [barang, jumlah] of stok) {
  console.log(barang, jumlah);
}</code></pre>
<table class="mini-pivot"><tr><th></th><th>Objek <code>{}</code></th><th><code>Map</code></th></tr>
<tr><td>Tipe kunci</td><td>selalu jadi teks</td><td>apa saja (angka, objek)</td></tr>
<tr><td>Jumlah isi</td><td><code>Object.keys(o).length</code></td><td><code>m.size</code></td></tr>
<tr><td>Cocok untuk</td><td>data dengan struktur tetap (profil pengguna)</td><td>kamus yang sering ditambah/dihapus, menghitung frekuensi</td></tr></table>
<h4>3. Math: berhitung</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>Math.round</code></td><td><code>Math.round(2.5)</code></td><td>3 (.5 dibulatkan ke atas; <code>-2.5</code> → -2)</td></tr>
<tr><td><code>Math.floor</code></td><td><code>Math.floor(2.9)</code></td><td>2 (selalu ke bawah)</td></tr>
<tr><td><code>Math.ceil</code></td><td><code>Math.ceil(2.1)</code></td><td>3 (selalu ke atas, misal jumlah halaman)</td></tr>
<tr><td><code>Math.max</code> / <code>min</code></td><td><code>Math.max(...[4, 9, 2])</code></td><td>9</td></tr>
<tr><td><code>Math.abs</code></td><td><code>Math.abs(-7)</code></td><td>7</td></tr>
<tr><td><code>Math.random</code></td><td><code>Math.floor(Math.random() * 6) + 1</code></td><td>dadu 1–6</td></tr></table>
<div class="catatan">Angka desimal tidak selalu tepat: <code>0.1 + 0.2</code> = <code>0.30000000000000004</code>. Untuk tampilan pakai <code>toFixed(2)</code> (hasilnya teks). Untuk uang, simpan dalam rupiah bulat. Membaca angka dari teks: <code>Number("12")</code> (ketat, <code>"12px"</code> → NaN) atau <code>parseInt("12px")</code> → 12. Cek NaN dengan <code>Number.isNaN(x)</code>.</div>
<h4>4. Date: tanggal dan waktu</h4>
<pre><code>const sekarang = new Date();
const ultah = new Date(2026, 0, 17);     // 17 JANUARI 2026: bulan mulai dari 0!
ultah.getFullYear();   // 2026
ultah.getMonth();      // 0  (tambah 1 untuk ditampilkan)
ultah.getDate();       // 17
ultah.getDay();        // 0 = Minggu ... 6 = Sabtu
ultah.toLocaleDateString("id-ID", { dateStyle: "long" });   // "17 Januari 2026"

// selisih hari
const hari = Math.round((new Date(2026, 1, 1) - ultah) / 86400000);   // 15</code></pre>
<h4>5. Regex: pola pencarian teks</h4>
<table class="mini-pivot"><tr><th>Simbol</th><th>Arti</th><th>Contoh cocok</th></tr>
<tr><td><code>\\d</code></td><td>satu digit angka</td><td>7</td></tr>
<tr><td><code>\\w</code></td><td>huruf, angka, atau _</td><td>a, Z, 5</td></tr>
<tr><td><code>\\s</code></td><td>spasi/tab/baris baru</td><td>" "</td></tr>
<tr><td><code>.</code></td><td>karakter apa saja</td><td>x</td></tr>
<tr><td><code>+</code> / <code>*</code> / <code>?</code></td><td>1 atau lebih / 0 atau lebih / 0 atau 1</td><td><code>\\d+</code> cocok "2026"</td></tr>
<tr><td><code>{3}</code> / <code>{2,4}</code></td><td>tepat 3 kali / 2 sampai 4 kali</td><td><code>\\d{3}</code> cocok "123"</td></tr>
<tr><td><code>^</code> … <code>$</code></td><td>awal … akhir teks</td><td><code>^\\d{5}$</code> = persis 5 digit (kode pos)</td></tr>
<tr><td><code>[abc]</code> / <code>[a-z]</code></td><td>salah satu dari daftar / rentang</td><td><code>[aiueo]</code> huruf vokal</td></tr>
<tr><td>flag <code>g</code>, <code>i</code></td><td>semua kecocokan, abaikan besar-kecil</td><td><code>/halo/gi</code></td></tr></table>
<pre><code>/^08\\d{8,11}$/.test("081234567890");        // true: nomor HP Indonesia sederhana
"2 apel, 15 jeruk".match(/\\d+/g);           // ["2", "15"]
"Halo   dunia".replace(/\\s+/g, " ");         // "Halo dunia"
"a-b-c".replace("-", "+");                   // "a+b-c"  (teks biasa: hanya yang PERTAMA)
"a-b-c".replaceAll("-", "+");                // "a+b+c"  (semua)
/^[\\w.]+@[\\w-]+\\.[a-z]{2,}$/i.test("ani@mail.com");   // pola email sederhana</code></pre>
<div class="catatan">Regex itu kuat tapi sulit dibaca. Tulis komentar di atasnya, uji di situs seperti regex101, dan untuk validasi email di form, tambahkan juga <code>type="email"</code> di HTML.</div>
<div class="praktik"><b>Coba sendiri:</b> dari teks <code>"kopi teh kopi susu teh kopi"</code>, hitung berapa kali tiap kata muncul memakai <code>Map</code>. Hasilnya harus kopi → 3, teh → 2, susu → 1.</div>
`},
{k:"modul",judul:"Module, JSON, Node.js & npm",materi:`
<!--pemula--><h4>Untuk pemula: dari satu file menjadi proyek sungguhan</h4>
<p>Latihan biasanya cukup satu file. Proyek nyata berisi puluhan sampai ratusan file, memakai kode buatan orang lain (paket), dan dijalankan dengan perintah di terminal. Bab ini adalah "peta jalan" untuk berpindah dari latihan ke proyek.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>module</td><td>satu file JS yang membagikan sebagian isinya (<code>export</code>) ke file lain (<code>import</code>)</td></tr>
<tr><td>JSON</td><td>format teks untuk bertukar data antarprogram, mirip objek JS</td></tr>
<tr><td>Node.js</td><td>program yang menjalankan JavaScript di luar browser (di terminal/server)</td></tr>
<tr><td>npm</td><td>"toko aplikasi" paket JavaScript + alat untuk memasangnya</td></tr>
<tr><td>package.json</td><td>kartu identitas proyek: nama, paket, perintah</td></tr></table><!--/pemula-->
<h4>1. Module: export dan import</h4>
<pre><code>// file: utils/harga.js
export const PPN = 0.11;
export function denganPajak(h) { return h + h * PPN; }
export default function rupiah(n) { return "Rp" + n.toLocaleString("id-ID"); }

// file: app.js
import rupiah, { denganPajak, PPN } from "./utils/harga.js";
import * as harga from "./utils/harga.js";     // semua sekaligus: harga.PPN

console.log(rupiah(denganPajak(10000)));      // Rp11.100</code></pre>
<table class="mini-pivot"><tr><th>Jenis</th><th>Export</th><th>Import</th></tr>
<tr><td>Named (boleh banyak)</td><td><code>export function x</code></td><td><code>import { x } from …</code> (nama harus sama)</td></tr>
<tr><td>Default (satu per file)</td><td><code>export default …</code></td><td><code>import namaBebas from …</code></td></tr></table>
<p>Di browser, file yang memakai import harus dimuat dengan <code>&lt;script type="module" src="app.js"&gt;</code> dan dibuka lewat server lokal (bukan klik dua kali file). Di Node.js lama kamu juga akan melihat gaya CommonJS: <code>const fs = require("fs")</code> dan <code>module.exports = …</code>.</p>
<h4>2. JSON: bahasa pertukaran data</h4>
<pre><code>const produk = { nama: "Kopi", harga: 18000, tag: ["panas"] };
const teks = JSON.stringify(produk);           // '{"nama":"Kopi","harga":18000,"tag":["panas"]}'
const balik = JSON.parse(teks);                // objek lagi
JSON.stringify(produk, null, 2);               // versi rapi berindentasi 2 spasi</code></pre>
<ul><li>Kunci dan teks wajib kutip <b>ganda</b>. Tidak boleh koma di akhir, tidak boleh komentar.</li>
<li><code>undefined</code> dan fungsi dibuang; <code>NaN</code> jadi <code>null</code>; <code>Date</code> jadi teks.</li>
<li>Menyimpan ke localStorage: <code>localStorage.setItem("k", JSON.stringify(data))</code>.</li></ul>
<h4>3. Menyalin data: dangkal vs dalam</h4>
<pre><code>const a = { nama: "Ani", alamat: { kota: "Solo" } };
const dangkal = { ...a };              // alamat masih DIPAKAI BERSAMA
const dalam = structuredClone(a);      // semua lapisan disalin
dangkal.alamat.kota = "Klaten";        // a.alamat.kota ikut berubah!</code></pre>
<h4>4. Node.js dan npm</h4>
<pre><code>node -v                     # cek versi Node
npm init -y                 # buat package.json
npm install dayjs           # pasang paket → masuk "dependencies"
npm install -D vitest       # alat bantu → masuk "devDependencies"
npm run dev                 # jalankan perintah di bagian "scripts"
npx serve .                 # jalankan paket tanpa memasangnya permanen</code></pre>
<p>Ingat: Node.js menjalankan JavaScript <b>di luar browser</b>, jadi tidak ada <code>document</code>, <code>window</code>, atau DOM (memanggil <code>document.title</code> menghasilkan ReferenceError). Sebagai gantinya Node punya modul file (<code>fs</code>), server (<code>http</code>), dan <code>path</code>.</p>
<pre><code>{
  "name": "toko-kopi",
  "version": "1.0.0",
  "scripts": { "dev": "vite", "build": "vite build", "test": "vitest" },
  "dependencies": { "dayjs": "^1.11.10" },
  "devDependencies": { "vite": "^5.0.0" }
}</code></pre>
<table class="mini-pivot"><tr><th>Berkas/folder</th><th>Commit ke Git?</th><th>Alasan</th></tr>
<tr><td><code>package.json</code></td><td>ya</td><td>daftar kebutuhan proyek</td></tr>
<tr><td><code>package-lock.json</code></td><td>ya</td><td>mengunci versi persis agar semua orang sama</td></tr>
<tr><td><code>node_modules/</code></td><td><b>tidak</b></td><td>besar sekali, bisa dibuat ulang dengan <code>npm install</code></td></tr>
<tr><td><code>.env</code></td><td><b>tidak</b></td><td>berisi rahasia (API key, password)</td></tr></table>
<div class="catatan">Versi paket ditulis MAJOR.MINOR.PATCH (semantic versioning). <code>^1.11.10</code> = boleh naik ke 1.x terbaru, tapi tidak ke 2.0.0, karena perubahan major bisa merusak kode.</div>
<div class="praktik"><b>Coba sendiri:</b> buat folder baru, jalankan <code>npm init -y</code>, buat <code>harga.js</code> yang meng-export fungsi <code>rupiah</code>, impor di <code>index.js</code> (tambahkan <code>"type": "module"</code> di package.json), lalu jalankan <code>node index.js</code>.</div>
`},
{k:"frontend",judul:"Menuju Framework: TypeScript & React Dasar",materi:`
<!--pemula--><h4>Untuk pemula: kenapa lowongan selalu menyebut React dan TypeScript?</h4>
<p>Membuat situs kecil dengan JavaScript murni itu cukup. Tapi aplikasi besar (dashboard, toko online, aplikasi admin) punya ratusan tombol dan data yang terus berubah. Mengatur DOM satu per satu jadi melelahkan dan rawan bug. <b>React</b> membantu menyusun tampilan dari potongan kecil yang bisa dipakai ulang, dan <b>TypeScript</b> membantu menangkap salah ketik dan salah tipe sebelum program dijalankan.</p>
<p>Bab ini hanya pengantar. Kuasai dulu bab JavaScript sebelumnya (fungsi, array map/filter, objek, destructuring, spread, module), karena React memakai semuanya.</p><!--/pemula-->
<h4>1. TypeScript: JavaScript dengan label tipe</h4>
<pre><code>let nama: string = "Ani";
let umur: number = 21;
let aktif: boolean = true;
let nilai: number[] = [90, 85];

type Status = "lunas" | "belum";          // hanya dua nilai ini yang boleh

interface Produk {
  id: number;
  nama: string;
  harga: number;
  diskon?: number;                         // ? = boleh tidak ada
}

function total(daftar: Produk[]): number {
  return daftar.reduce((s, p) =&gt; s + p.harga - (p.diskon ?? 0), 0);
}

total([{ id: 1, nama: "Kopi", harga: "18000" }]);   // ✗ ditolak: harga harus number</code></pre>
<ul><li>File TypeScript berakhiran <code>.ts</code> (atau <code>.tsx</code> kalau berisi JSX).</li><li>Browser tidak membaca TypeScript; alat seperti Vite mengubahnya menjadi JavaScript.</li><li>Tipe hanya ada saat menulis kode. Setelah dikompilasi, tipe hilang.</li></ul>
<h4>2. React: tampilan dari komponen</h4>
<pre><code>function KartuProduk({ nama, harga }) {          // props dibongkar dengan destructuring
  return (
    &lt;div className="kartu"&gt;
      &lt;h3&gt;{nama}&lt;/h3&gt;
      &lt;p&gt;Rp{harga.toLocaleString("id-ID")}&lt;/p&gt;
    &lt;/div&gt;
  );
}

function Katalog({ daftar }) {
  return daftar.map(p =&gt; &lt;KartuProduk key={p.id} nama={p.nama} harga={p.harga} /&gt;);
}</code></pre>
<table class="mini-pivot"><tr><th>Konsep</th><th>Penjelasan</th></tr>
<tr><td>Komponen</td><td>fungsi yang mengembalikan JSX; namanya diawali huruf kapital</td></tr>
<tr><td>JSX</td><td>tulisan mirip HTML di dalam JS; <code>{ }</code> untuk menyisipkan nilai JavaScript</td></tr>
<tr><td>props</td><td>data dari induk ke anak, <b>hanya dibaca</b> (seperti argumen fungsi)</td></tr>
<tr><td>state</td><td>data milik komponen yang bisa berubah; perubahan membuat tampilan digambar ulang</td></tr>
<tr><td><code>key</code></td><td>tanda pengenal unik tiap item daftar</td></tr></table>
<h4>3. State dengan useState</h4>
<pre><code>import { useState } from "react";

function Penghitung() {
  const [jumlah, setJumlah] = useState(0);
  return (
    &lt;button onClick={() =&gt; setJumlah(jumlah + 1)}&gt;
      Diklik {jumlah} kali
    &lt;/button&gt;
  );
}</code></pre>
<p>Aturan emas state: <b>jangan ubah langsung</b>. Buat nilai baru lalu serahkan ke setter.</p>
<pre><code>setDaftar([...daftar, baru]);                          // tambah
setDaftar(daftar.filter(x =&gt; x.id !== id));            // hapus
setDaftar(daftar.map(x =&gt; x.id === id ? { ...x, qty: x.qty + 1 } : x));   // ubah satu</code></pre>
<h4>4. Efek samping dengan useEffect</h4>
<pre><code>useEffect(() =&gt; {
  fetch("/api/produk").then(r =&gt; r.json()).then(setDaftar);
}, []);     // [] = sekali saat komponen pertama tampil</code></pre>
<h4>5. Memulai proyek</h4>
<pre><code>npm create vite@latest toko -- --template react-ts
cd toko
npm install
npm run dev</code></pre>
<div class="catatan">Peta belajar setelah ini: React Router (pindah halaman), mengambil data API, form, lalu Next.js (React + server). Alternatif populer: Vue.js. Framework berganti-ganti, tapi dasar JavaScript yang kuat selalu terpakai.</div>
<div class="praktik"><b>Coba sendiri:</b> buat proyek Vite React, lalu buat komponen <code>DaftarTugas</code> dengan input, tombol Tambah, dan daftar tugas yang bisa dihapus. Pakai <code>useState</code>, <code>map</code> dengan <code>key</code>, dan <code>filter</code> untuk menghapus.</div>
`}
);
