// ============ JAVASCRIPT — tambahan 2x lipat (bagian 3): scope, event, kelas, error, koleksi, modul, frontend ============
// Pola sama dengan soal-js-4.js. Soal event memakai EventTarget bawaan (ada di browser dan Node) supaya bisa dijalankan.
(function () {
  const O = (k, lv, kode, o, e, w) => ({ k, t: "mc", lv, q: "Output console.log kode ini:", kode, o, a: 0, vr: "js", e, ...(w ? { w: [null, ...w] } : {}) });
  const M = (k, lv, q, o, e, w, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}), ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_JS.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_JS.push(
  // ---- scope (+15) ----
  O("scope", 1, '{\n  let a = 1;\n}\nconsole.log(typeof a);', ["undefined", "number", "1", "object"],
    "let hidup hanya di dalam blok kurung kurawal tempat ia dibuat. Di luar blok, a tidak dikenal; typeof nama yang tidak ada memberi \"undefined\" tanpa error.",
    ["a tidak terlihat di luar blok.", "a tidak bisa dibaca di luar.", "typeof memberi teks \"undefined\"."]),
  O("scope", 1, 'if (true) {\n  var b = 2;\n}\nconsole.log(b);', ["2", "undefined", "ReferenceError", "true"],
    "var TIDAK mengenal blok if/for; ia bocor keluar. Inilah salah satu alasan var dihindari.",
    ["var keluar dari blok.", "var tidak terkunci di blok.", "b berisi 2."]),
  O("scope", 2, 'console.log(x);\nvar x = 5;', ["undefined", "5", "ReferenceError", "null"],
    "Hoisting: deklarasi var 'diangkat' ke atas, tapi nilainya belum. Python-nya: x sudah ada, isinya undefined sampai baris var x = 5 dijalankan.",
    ["Nilai 5 baru diisi belakangan.", "var tidak membuat error di sini.", "Isinya undefined, bukan null."]),
  O("scope", 2, 'try {\n  console.log(y);\n  let y = 5;\n} catch (e) {\n  console.log(e.name);\n}', ["ReferenceError", "undefined", "5", "TypeError"],
    "let juga diangkat, tapi berada di 'zona mati' (TDZ) sampai barisnya dijalankan. Membacanya lebih awal menimbulkan ReferenceError. Lebih aman daripada var.",
    ["let tidak memberi undefined seperti var.", "y belum diisi.", "Jenis errornya ReferenceError."]),
  O("scope", 2, 'const n = "luar";\nfunction f() {\n  const n = "dalam";\n  return n;\n}\nconsole.log(f(), n);', ["dalam luar", "luar luar", "dalam dalam", "Error"],
    "Variabel di dalam fungsi menutupi (shadowing) variabel luar yang namanya sama, tanpa mengubahnya.",
    ["Fungsi memakai n miliknya sendiri.", "n luar tidak berubah.", "Dua const di lingkup berbeda itu sah."]),
  O("scope", 2, 'function buatPenghitung() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = buatPenghitung();\nconst b = buatPenghitung();\na(); a();\nconsole.log(a(), b());', ["3 1", "3 3", "1 1", "2 1"],
    "Closure: setiap panggilan buatPenghitung membuat n baru. a dan b punya ingatan masing-masing.",
    ["b punya n sendiri.", "a sudah dipanggil 3 kali.", "Ikuti jejak a."]),
  O("scope", 2, 'const saldo = (() => {\n  let isi = 100;\n  return { tarik: x => (isi -= x), cek: () => isi };\n})();\nsaldo.tarik(30);\nconsole.log(saldo.cek(), saldo.isi);', ["70 undefined", "70 70", "100 undefined", "Error"],
    "IIFE (fungsi yang langsung dipanggil) menyembunyikan isi. Dari luar hanya bisa lewat tarik/cek; saldo.isi tidak ada.",
    ["isi tersembunyi.", "Penarikan sudah dilakukan.", "Sintaks ini sah."]),
  O("scope", 2, 'const orang = {\n  nama: "Ani",\n  sapa() { return "Halo " + this.nama; },\n};\nconsole.log(orang.sapa());', ["Halo Ani", "Halo undefined", "Halo this.nama", "Error"],
    "Di dalam method yang dipanggil lewat orang.sapa(), this = orang (objek di kiri titik).",
    ["this menunjuk orang.", "Yang dicetak nilainya.", "Sintaks ini sah."]),
  O("scope", 3, 'const orang = {\n  nama: "Ani",\n  sapa() { return "Halo " + this.nama; },\n};\nconst f = orang.sapa;\nconsole.log(f.call({ nama: "Budi" }));', ["Halo Budi", "Halo Ani", "Halo undefined", "Error"],
    "this ditentukan saat fungsi DIPANGGIL, bukan saat ditulis. call(objek) memaksa this menjadi objek itu.",
    ["call mengganti this.", "this diisi objek Budi.", "Sintaks ini sah."]),
  O("scope", 3, 'const tim = {\n  nama: "Data",\n  anggota: ["Ani", "Budi"],\n  daftar() { return this.anggota.map(a => a + "@" + this.nama).join(","); },\n};\nconsole.log(tim.daftar());', ["Ani@Data,Budi@Data", "Ani@undefined,Budi@undefined", "Error", "Ani,Budi"],
    "Arrow function tidak punya this sendiri; ia memakai this milik method daftar (tim). Itu sebabnya arrow nyaman dipakai sebagai callback di dalam method.",
    ["Arrow mengambil this dari luar.", "Sintaks ini sah.", "Ada tambahan @nama."]),
  O("scope", 3, 'let x = 1;\nfunction f() { return x; }\nfunction g() { let x = 2; return f(); }\nconsole.log(g());', ["1", "2", "undefined", "Error"],
    "Lexical scope: f mencari x di tempat f DITULIS (luar), bukan di tempat dipanggil (g).",
    ["f tidak melihat x milik g.", "x luar berisi 1.", "Sintaks ini sah."]),
  M("scope", 1, "Urutan pilihan kata kunci variabel yang disarankan:", ["const dulu; let bila nilainya berubah; var dihindari", "var dulu", "let untuk semuanya", "Tanpa kata kunci"],
    "const dan let berlingkup blok dan punya TDZ, jadi kesalahan cepat ketahuan.",
    ["var membingungkan.", "const lebih aman.", "Tanpa kata kunci membuat variabel global tak sengaja."]),
  M("scope", 2, "Apa itu closure?", ["Fungsi yang mengingat variabel dari lingkup tempat ia dibuat, walau lingkup itu sudah selesai", "Fungsi yang menutup program", "Nama lain dari class", "Error saat menutup kurung"],
    "Closure dipakai untuk penghitung, data tersembunyi, dan fungsi pembuat fungsi.",
    ["Bukan untuk menutup program.", "Bukan class.", "Bukan error."]),
  M("scope", 2, "Gunanya \"use strict\" di awal file:", ["Membuat kesalahan diam-diam jadi error, misalnya mengisi variabel yang belum dibuat", "Mempercepat kode 10 kali", "Wajib di semua browser", "Mematikan error"],
    "Mode ketat mencegah variabel global tak sengaja. Modul (type=\"module\") dan class otomatis memakai mode ketat.",
    ["Tujuannya keamanan kode.", "Tidak wajib.", "Justru memunculkan error."]),
  I("scope", 2, "Method untuk memanggil fungsi dengan this tertentu: f.____(obj)", ["call"], "call (atau apply/bind) mengatur this."),

  // ---- event (+15) ----
  O("event", 1, 'const t = new EventTarget();\nt.addEventListener("pesan", e => console.log("dapat", e.type));\nt.dispatchEvent(new Event("pesan"));', ["dapat pesan", "pesan", "dapat", "(tidak ada output)"],
    "addEventListener mendaftarkan fungsi; dispatchEvent memicu event. e.type berisi nama event. Tombol di halaman bekerja dengan cara yang sama.",
    ["Ada awalan dapat.", "e.type juga dicetak.", "Event sudah dipicu."]),
  O("event", 1, 'const t = new EventTarget();\nlet n = 0;\nt.addEventListener("klik", () => n++);\nt.dispatchEvent(new Event("klik"));\nt.dispatchEvent(new Event("klik"));\nconsole.log(n);', ["2", "1", "0", "undefined"],
    "Listener dijalankan setiap kali event terjadi.",
    ["Event dipicu dua kali.", "Listener sudah terpasang.", "n berupa angka."]),
  O("event", 2, 'const t = new EventTarget();\nlet n = 0;\nt.addEventListener("klik", () => n++, { once: true });\nt.dispatchEvent(new Event("klik"));\nt.dispatchEvent(new Event("klik"));\nconsole.log(n);', ["1", "2", "0", "Error"],
    "{ once: true } membuat listener otomatis dilepas setelah jalan sekali. Cocok untuk 'tampilkan panduan hanya sekali'.",
    ["once hanya sekali.", "Listener jalan pada klik pertama.", "Opsi once sah."]),
  O("event", 2, 'const t = new EventTarget();\nlet n = 0;\nconst f = () => n++;\nt.addEventListener("klik", f);\nt.dispatchEvent(new Event("klik"));\nt.removeEventListener("klik", f);\nt.dispatchEvent(new Event("klik"));\nconsole.log(n);', ["1", "2", "0", "Error"],
    "removeEventListener melepas listener. Wajib memakai fungsi yang SAMA (f), bukan fungsi baru yang isinya mirip.",
    ["Setelah dilepas, tidak jalan lagi.", "Klik pertama terhitung.", "Sintaks ini sah."]),
  O("event", 2, 'const t = new EventTarget();\nconst urutan = [];\nt.addEventListener("x", () => urutan.push("A"));\nt.addEventListener("x", () => urutan.push("B"));\nt.dispatchEvent(new Event("x"));\nconsole.log(urutan.join(""));', ["AB", "BA", "B", "A"],
    "Beberapa listener untuk event yang sama dijalankan sesuai urutan dipasang.",
    ["Urutan mengikuti pemasangan.", "Keduanya jalan.", "Keduanya jalan."]),
  O("event", 2, 'const t = new EventTarget();\nt.addEventListener("beli", e => console.log(e.detail.produk, e.detail.qty));\nt.dispatchEvent(new CustomEvent("beli", { detail: { produk: "Kopi", qty: 2 } }));', ["Kopi 2", "beli", "undefined undefined", "Error"],
    "CustomEvent membawa data tambahan lewat detail. Berguna agar bagian aplikasi saling memberi kabar.",
    ["Data dibaca dari detail.", "detail berisi data.", "CustomEvent sah."]),
  O("event", 3, 'const t = new EventTarget();\nt.addEventListener("kirim", e => e.preventDefault());\nconst lanjut = t.dispatchEvent(new Event("kirim", { cancelable: true }));\nconsole.log(lanjut);', ["false", "true", "undefined", "Error"],
    "dispatchEvent mengembalikan false bila ada listener yang memanggil preventDefault pada event yang cancelable. Begitulah form tahu harus batal memuat ulang.",
    ["preventDefault membatalkan.", "Hasilnya boolean.", "Sintaks ini sah."]),
  M("event", 1, "Event yang dipakai untuk menangkap pengiriman form (tombol Kirim atau Enter):", ["submit pada <form>", "click pada <input>", "load pada <body>", "change pada <button>"],
    "Pasang listener submit di form, bukan click di tombol, supaya Enter juga tertangkap.",
    ["Enter tidak tertangkap lewat click.", "load untuk halaman selesai dimuat.", "change untuk isian."]),
  M("event", 2, "Apa itu event bubbling?", ["Event pada elemen anak ikut naik ke induk-induknya (li → ul → body)", "Event yang membuat gelembung animasi", "Event yang hanya jalan sekali", "Error event"],
    "Karena bubbling, satu listener di induk bisa menangani klik semua anaknya (event delegation).",
    ["Bukan animasi.", "Itu once.", "Bukan error."]),
  M("event", 2, "Beda e.target dan e.currentTarget:", ["target = elemen yang benar-benar diklik; currentTarget = elemen tempat listener dipasang", "Keduanya sama", "target selalu document", "currentTarget elemen yang diklik"],
    "Pada event delegation di <ul>, e.target bisa <li> atau isi di dalamnya, sedangkan e.currentTarget tetap <ul>.",
    ["Bisa berbeda saat bubbling.", "target bisa elemen apa pun.", "Terbalik."]),
  M("event", 2, "Cara aman mengetahui <li> mana yang diklik walau yang terklik adalah <span> di dalamnya:", ["e.target.closest(\"li\")", "e.target.parentNode saja", "e.currentTarget", "document.querySelector(\"li\")"],
    "closest naik ke atas sampai ketemu elemen yang cocok dengan selektor.",
    ["parentNode hanya naik satu tingkat.", "currentTarget adalah ul.", "Itu li pertama di halaman."]),
  M("event", 2, "Untuk pencarian langsung saat mengetik, supaya tidak menjalankan pencarian di setiap huruf, dipakai teknik:", ["Debounce: tunggu pengguna berhenti mengetik sejenak (misalnya 300 ms) baru mencari", "Menambah listener di setiap huruf", "Memakai event load", "Menonaktifkan keyboard"],
    "Debounce: setiap ketikan membatalkan timer lama (clearTimeout) lalu memasang timer baru.",
    ["Itu justru memperberat.", "load tidak terkait.", "Pengguna tetap butuh keyboard."]),
  M("event", 2, "Membaca tombol keyboard yang ditekan pada event keydown:", ["e.key (misalnya \"Enter\", \"Escape\", \"a\")", "e.tombol", "e.char saja", "e.value"],
    "e.key memberi nama tombol. Gabungkan dengan e.ctrlKey/e.shiftKey untuk pintasan seperti Ctrl+Enter.",
    ["Tidak ada properti itu.", "Bukan properti standar.", "value milik input."]),
  M("event", 3, "Listener scroll yang berat membuat halaman patah-patah. Opsi yang membantu browser:", ["addEventListener(\"scroll\", f, { passive: true })", "{ once: true }", "e.preventDefault() di scroll", "Memasang listener 10 kali"],
    "passive: true berjanji tidak memanggil preventDefault, jadi browser bisa menggulir tanpa menunggu fungsimu.",
    ["once melepas setelah sekali.", "Itu justru memblokir gulir.", "Memperberat."]),
  I("event", 1, "Method untuk membatalkan perilaku bawaan event: e.____()", ["preventdefault"], "preventDefault() mencegah form memuat ulang atau tautan berpindah."),

  // ---- kelas (+15) ----
  O("kelas", 1, 'class Kucing {\n  constructor(nama) { this.nama = nama; }\n  suara() { return this.nama + ": meong"; }\n}\nconsole.log(new Kucing("Mochi").suara());', ["Mochi: meong", "meong", "undefined: meong", "Error"],
    "constructor dijalankan saat new Kucing(...). this.nama menyimpan data di objek.",
    ["Nama juga dicetak.", "nama sudah diisi.", "Sintaks ini sah."]),
  O("kelas", 1, 'class Akun {\n  constructor(saldo = 0) { this.saldo = saldo; }\n  setor(n) { this.saldo += n; return this; }\n}\nconsole.log(new Akun(10).setor(5).setor(5).saldo);', ["20", "15", "10", "Error"],
    "Method yang me-return this bisa dirangkai (method chaining).",
    ["Ada dua kali setor.", "Saldo awal 10.", "return this membuat rangkaian sah."]),
  O("kelas", 2, 'class Hewan {\n  suara() { return "..."; }\n}\nclass Anjing extends Hewan {\n  suara() { return "guk"; }\n}\nconst a = new Anjing();\nconsole.log(a.suara(), a instanceof Hewan);', ["guk true", "... true", "guk false", "Error"],
    "Anjing menimpa suara. instanceof memeriksa rantai pewarisan: Anjing adalah sejenis Hewan.",
    ["Anjing punya suara sendiri.", "Anjing mewarisi Hewan.", "Sintaks ini sah."]),
  O("kelas", 2, 'class Karyawan {\n  constructor(nama) { this.nama = nama; }\n  info() { return this.nama; }\n}\nclass Manajer extends Karyawan {\n  constructor(nama, tim) { super(nama); this.tim = tim; }\n  info() { return super.info() + " (" + this.tim + ")"; }\n}\nconsole.log(new Manajer("Rina", "Data").info());', ["Rina (Data)", "Rina", "(Data)", "Error"],
    "super(nama) menjalankan constructor induk; super.info() memanggil versi induk dari method yang ditimpa.",
    ["Tim juga ditambahkan.", "Nama dari induk ikut.", "Sintaks ini sah."]),
  O("kelas", 2, 'class Persegi {\n  constructor(s) { this.s = s; }\n  get luas() { return this.s * this.s; }\n}\nconst p = new Persegi(3);\np.s = 4;\nconsole.log(p.luas);', ["16", "9", "undefined", "Error"],
    "get membuat properti terhitung: dibaca tanpa kurung, dihitung ulang setiap dibaca.",
    ["s sudah diganti 4.", "Getter mengembalikan nilai.", "Getter dibaca tanpa kurung."]),
  O("kelas", 2, 'class Suhu {\n  #c = 0;\n  set c(v) { if (v < -273) throw new Error("mustahil"); this.#c = v; }\n  get c() { return this.#c; }\n}\nconst s = new Suhu();\ntry { s.c = -300; } catch (e) { console.log(e.message, s.c); }', ["mustahil 0", "mustahil -300", "-300", "Error"],
    "Field dengan # bersifat privat (tidak bisa disentuh dari luar). Setter memvalidasi sebelum menyimpan.",
    ["Nilai ditolak, tetap 0.", "Pesan error ikut dicetak.", "Error sudah ditangkap."]),
  O("kelas", 2, 'class MathKu {\n  static kuadrat(x) { return x * x; }\n}\nconsole.log(MathKu.kuadrat(5), typeof new MathKu().kuadrat);', ["25 undefined", "25 function", "Error", "10 undefined"],
    "static milik class, bukan milik objek. Dipanggil lewat nama class.",
    ["Objek tidak punya method static.", "Itu kuadrat.", "Sintaks ini sah."]),
  O("kelas", 2, 'class Uang {\n  constructor(n) { this.n = n; }\n  toString() { return "Rp " + this.n.toLocaleString("id-ID"); }\n}\nconsole.log(`${new Uang(1500000)}`);', ["Rp 1.500.000", "Rp 1500000", "[object Object]", "Rp 1,500,000"],
    "Saat objek dipakai sebagai teks (template literal), JavaScript memanggil toString. toLocaleString(\"id-ID\") memberi pemisah ribuan titik.",
    ["toLocaleString memberi pemisah.", "toString sudah ditimpa.", "Format Indonesia memakai titik."]),
  O("kelas", 3, 'const cfg = Object.freeze({ pajak: 11 });\ncfg.pajak = 50;\nconsole.log(cfg.pajak);', ["11", "50", "Error", "undefined"],
    "Object.freeze mengunci objek. Di luar mode ketat, pengubahan diabaikan diam-diam; di mode ketat menjadi TypeError.",
    ["Objek sudah dikunci.", "File ini tidak memakai mode ketat, jadi diam saja.", "Nilainya tetap ada."]),
  O("kelas", 3, 'function Mobil(merk) { this.merk = merk; }\nMobil.prototype.info = function () { return "Mobil " + this.merk; };\nconsole.log(new Mobil("Avanza").info());', ["Mobil Avanza", "Avanza", "undefined", "Error"],
    "Sebelum ada class, OOP JavaScript memakai fungsi konstruktor + prototype. class adalah cara menulis yang lebih rapi untuk hal yang sama.",
    ["Ada awalan Mobil.", "merk sudah diisi.", "Cara lama ini masih sah."]),
  M("kelas", 1, "Apa yang terjadi bila memanggil class tanpa new, misalnya Kucing(\"Mochi\")?", ["TypeError: class harus dipanggil dengan new", "Objek tetap dibuat", "Mengembalikan undefined", "Mengembalikan teks"],
    "new membuat objek baru dan menjalankan constructor. Class melarang dipanggil seperti fungsi biasa.",
    ["Tanpa new, class menolak.", "Bukan undefined, tapi error.", "Bukan teks."]),
  M("kelas", 2, "Empat pilar OOP:", ["Enkapsulasi, abstraksi, pewarisan, polimorfisme", "Variabel, fungsi, loop, if", "HTML, CSS, JS, JSON", "Class, objek, array, string"],
    "Enkapsulasi (#privat), abstraksi (method sederhana menyembunyikan detail), pewarisan (extends), polimorfisme (method sama, perilaku beda).",
    ["Itu dasar pemrograman.", "Itu teknologi web.", "Itu jenis data."]),
  M("kelas", 2, "Contoh polimorfisme:", ["Array berisi Anjing, Kucing, Ikan, lalu semua dipanggil .suara() dan masing-masing menjawab berbeda", "Satu class punya banyak field", "Menyalin objek", "Memakai static"],
    "Kode pemanggil tidak perlu tahu jenis hewannya; cukup memanggil method yang sama.",
    ["Itu sekadar banyak field.", "Bukan menyalin.", "static bukan polimorfisme."]),
  M("kelas", 2, "Kapan class lebih cocok daripada objek biasa {}?", ["Saat perlu membuat banyak objek dengan bentuk dan method yang sama", "Untuk satu pengaturan saja", "Untuk menyimpan satu angka", "Selalu, tanpa pengecualian"],
    "Untuk satu konfigurasi, objek literal cukup. Untuk banyak produk/akun/pesanan dengan perilaku sama, class lebih rapi.",
    ["Satu objek cukup literal.", "Angka tidak butuh class.", "Tidak selalu."]),
  I("kelas", 1, "Kata kunci untuk mewarisi class lain: class Anjing ____ Hewan", ["extends"], "extends membuat class turunan."),

  // ---- error (+15) ----
  O("error", 1, 'try {\n  JSON.parse("{rusak}");\n} catch (e) {\n  console.log(e.name);\n}', ["SyntaxError", "TypeError", "ReferenceError", "JSONError"],
    "Teks yang bukan JSON sah membuat JSON.parse melempar SyntaxError. Selalu bungkus JSON.parse dari luar dengan try/catch.",
    ["Bukan masalah tipe.", "Bukan nama yang hilang.", "Tidak ada JSONError bawaan."]),
  O("error", 1, 'try {\n  const x = null;\n  x.nama;\n} catch (e) {\n  console.log(e.name);\n}', ["TypeError", "ReferenceError", "SyntaxError", "NullError"],
    "Membaca properti dari null/undefined = TypeError (\"Cannot read properties of null\"). Pakai ?. untuk mencegahnya.",
    ["x ada, isinya yang null.", "Sintaksnya benar.", "Tidak ada NullError."]),
  O("error", 1, 'try {\n  belumAda();\n} catch (e) {\n  console.log(e.name);\n}', ["ReferenceError", "TypeError", "SyntaxError", "undefined"],
    "Memanggil nama yang tidak pernah dibuat = ReferenceError. Sering karena salah ketik.",
    ["Namanya tidak ada sama sekali.", "Sintaksnya benar.", "Error ditangkap."]),
  O("error", 2, 'try {\n  console.log("A");\n  throw new Error("x");\n  console.log("B");\n} catch (e) {\n  console.log("C");\n} finally {\n  console.log("D");\n}', ["A\nC\nD", "A\nB\nC\nD", "A\nD", "C\nD"],
    "Setelah throw, sisa try dilewati → catch → finally selalu di akhir.",
    ["B dilewati.", "catch jalan karena ada error.", "A sudah tercetak sebelum throw."]),
  O("error", 2, 'function cek(umur) {\n  if (umur < 0) throw new RangeError("umur negatif");\n  return "ok";\n}\ntry { cek(-1); } catch (e) { console.log(e.name + ": " + e.message); }', ["RangeError: umur negatif", "Error: umur negatif", "ok", "umur negatif"],
    "Kamu boleh melempar jenis error bawaan yang paling sesuai, misalnya RangeError untuk nilai di luar rentang.",
    ["Jenisnya RangeError.", "Fungsi berhenti di throw.", "Nama juga dicetak."]),
  O("error", 2, 'class StokHabis extends Error {\n  constructor(produk) {\n    super(produk + " habis");\n    this.name = "StokHabis";\n  }\n}\ntry { throw new StokHabis("Kopi"); }\ncatch (e) { console.log(e.name, e.message, e instanceof Error); }', ["StokHabis Kopi habis true", "Error Kopi habis true", "StokHabis Kopi false", "Error"],
    "Error buatan sendiri dibuat dengan extends Error. name membantu membedakannya di catch.",
    ["name sudah diganti.", "message dari super.", "StokHabis adalah sejenis Error."]),
  O("error", 2, 'function a() { b(); }\nfunction b() { throw new Error("di b"); }\ntry { a(); } catch (e) { console.log("ditangkap:", e.message); }', ["ditangkap: di b", "di b", "Error", "(tidak ada output)"],
    "Error 'merambat' naik ke pemanggil sampai ada try/catch yang menangkapnya.",
    ["Ada awalan ditangkap.", "Error ditangkap di luar.", "catch mencetak pesan."]),
  O("error", 2, 'function f() {\n  try { return "try"; }\n  finally { console.log("finally"); }\n}\nconsole.log(f());', ["finally\ntry", "try\nfinally", "try", "finally"],
    "finally tetap dijalankan sebelum fungsi benar-benar keluar, walau ada return di try.",
    ["finally jalan sebelum hasil diserahkan.", "finally tetap jalan.", "Hasil return juga dicetak."]),
  O("error", 2, 'try {\n  throw "pesan biasa";\n} catch (e) {\n  console.log(typeof e, e instanceof Error);\n}', ["string false", "object true", "Error true", "string true"],
    "JavaScript boleh melempar nilai apa pun, tapi sebaiknya selalu throw new Error(...) supaya ada name, message, dan jejak (stack).",
    ["Yang dilempar teks.", "Teks bukan Error.", "typeof teks adalah string."]),
  O("error", 3, 'async function muat() {\n  throw new Error("server mati");\n}\nmuat().catch(e => console.log("gagal:", e.message));\nconsole.log("lanjut");', ["lanjut\ngagal: server mati", "gagal: server mati\nlanjut", "lanjut", "Error"],
    "Error di fungsi async menjadi Promise yang ditolak, ditangkap lewat .catch setelah kode biasa selesai.",
    ["catch jalan setelah kode biasa.", "Error ditangkap.", "Error sudah ditangkap."]),
  O("error", 3, 'function bagiAman(a, b) {\n  try {\n    if (b === 0) throw new Error("nol");\n    return a / b;\n  } catch {\n    return null;\n  }\n}\nconsole.log(bagiAman(6, 3), bagiAman(1, 0));', ["2 null", "2 Infinity", "2 nol", "Error"],
    "catch tanpa (e) boleh dipakai bila error-nya tidak dibutuhkan.",
    ["Pembagian nol ditangani.", "catch mengembalikan null.", "catch tanpa parameter sah."]),
  M("error", 1, "Alat paling dasar untuk mencari bug di JavaScript browser:", ["DevTools (F12): tab Console untuk pesan error, Sources untuk breakpoint", "Menghapus semua kode", "Menebak", "Memuat ulang terus"],
    "Klik nama file di pesan error Console untuk lompat ke barisnya, lalu pasang breakpoint untuk melihat isi variabel.",
    ["Kode tidak perlu dihapus.", "Menebak lambat.", "Memuat ulang tidak menjelaskan masalah."]),
  M("error", 2, "Kata kunci debugger; di dalam kode akan…", ["Menghentikan kode di baris itu saat DevTools terbuka, seperti breakpoint", "Memperbaiki bug otomatis", "Menghapus error", "Mencetak semua variabel"],
    "Hapus lagi setelah selesai supaya tidak ikut ke versi tayang.",
    ["Tidak memperbaiki sendiri.", "Tidak menghapus error.", "Tidak mencetak otomatis."]),
  M("error", 2, "Kapan try/catch TIDAK perlu?", ["Untuk kesalahan logika yang seharusnya diperbaiki di kode, bukan disembunyikan", "Saat membaca JSON dari luar", "Saat memanggil fetch", "Saat membaca input pengguna"],
    "try/catch untuk hal di luar kendali (data luar, jaringan). Bug logika diperbaiki, bukan dibungkus.",
    ["JSON luar perlu ditangani.", "Jaringan bisa gagal.", "Input pengguna bisa salah."]),
  I("error", 1, "Kata kunci untuk melempar error sendiri: ____ new Error(\"pesan\")", ["throw"], "throw menghentikan alur dan mengirim error ke catch terdekat."),

  // ---- koleksi (+15) ----
  O("koleksi", 1, 'const s = new Set([1, 2, 2, 3, 3, 3]);\nconsole.log(s.size, [...s].join(","));', ["3 1,2,3", "6 1,2,2,3,3,3", "3 3,2,1", "1 1"],
    "Set hanya menyimpan nilai unik. [...set] mengubahnya kembali jadi array.",
    ["Duplikat dibuang.", "Urutan mengikuti kemunculan pertama.", "Ada 3 nilai unik."]),
  O("koleksi", 1, 'const s = new Set(["kopi"]);\ns.add("teh");\ns.add("kopi");\nconsole.log(s.has("teh"), s.size);', ["true 2", "true 3", "false 2", "true 1"],
    "add yang sama dua kali tidak menambah isi. has mengecek keberadaan dengan cepat.",
    ["kopi sudah ada.", "teh sudah ditambahkan.", "Ada kopi dan teh."]),
  O("koleksi", 1, 'const m = new Map();\nm.set("kopi", 18000).set("teh", 12000);\nconsole.log(m.get("kopi"), m.size, m.has("susu"));', ["18000 2 false", "18000 2 true", "undefined 2 false", "Error"],
    "Map menyimpan pasangan kunci → nilai dengan method set/get/has/size.",
    ["susu tidak ada.", "get membaca nilai.", "set bisa dirangkai."]),
  O("koleksi", 2, 'const m = new Map([["a", 1], ["b", 2]]);\nlet total = 0;\nfor (const [k, v] of m) total += v;\nconsole.log(total);', ["3", "ab", "2", "0"],
    "for...of pada Map memberi pasangan [kunci, nilai].",
    ["Nilai dijumlah.", "Yang dijumlah nilai.", "Ada dua nilai."]),
  O("koleksi", 2, 'const kata = ["kopi", "teh", "kopi"];\nconst hitung = new Map();\nfor (const k of kata) hitung.set(k, (hitung.get(k) ?? 0) + 1);\nconsole.log(hitung.get("kopi"), hitung.get("teh"));', ["2 1", "1 1", "3 0", "NaN 1"],
    "Pola menghitung dengan Map: ambil nilai lama (?? 0) lalu tambah 1.",
    ["kopi muncul dua kali.", "teh muncul sekali.", "?? 0 mencegah NaN."]),
  O("koleksi", 1, 'console.log(Math.round(2.5), Math.floor(2.9), Math.ceil(2.1));', ["3 2 3", "2 2 3", "3 3 3", "2 2 2"],
    "round = bulatkan terdekat (.5 naik), floor = ke bawah, ceil = ke atas.",
    ["2.5 dibulatkan naik.", "floor 2.9 menjadi 2.", "Cek arah masing-masing."]),
  O("koleksi", 2, 'console.log(Math.max(4, 9, 2), Math.min(...[7, 3, 5]), Math.abs(-6));', ["9 3 6", "9 7 -6", "2 3 6", "Error"],
    "max/min menerima angka terpisah (pakai spread untuk array). abs = nilai mutlak.",
    ["min dari 7, 3, 5 adalah 3.", "max adalah 9.", "Sintaks ini sah."]),
  O("koleksi", 2, 'const harga = 1234.5678;\nconsole.log(Math.round(harga * 100) / 100, harga.toFixed(1));', ["1234.57 1234.6", "1234.56 1234.5", "1235 1234.6", "1234.57 1234.5"],
    "Membulatkan 2 desimal: kali 100, bulatkan, bagi 100. toFixed(1) membulatkan jadi teks 1 desimal.",
    ["Pembulatan ke terdekat.", "Pembulatan ke 2 desimal.", "toFixed juga membulatkan."]),
  O("koleksi", 2, 'const d = new Date(Date.UTC(2026, 10, 27));\nconsole.log(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());', ["2026 10 27", "2026 11 27", "2026 10 28", "2026 11 26"],
    "Jebakan Date: bulan dihitung dari 0 (Januari = 0), jadi November = 10. Tanggal tetap mulai 1.",
    ["Bulan mulai dari 0.", "Tanggal tidak bergeser.", "Bulan mulai dari 0."]),
  O("koleksi", 2, 'const a = new Date(Date.UTC(2026, 11, 25));\nconst b = new Date(Date.UTC(2026, 10, 27));\nconsole.log((a - b) / (1000 * 60 * 60 * 24));', ["28", "29", "2419200000", "Error"],
    "Mengurangi dua Date memberi selisih dalam milidetik. Bagi dengan milidetik per hari untuk mendapat jumlah hari.",
    ["November punya 30 hari: 3 + 25 = 28.", "Sudah dibagi menjadi hari.", "Mengurangi Date itu sah."]),
  O("koleksi", 2, 'console.log(/^08\\d{8,11}$/.test("081234567890"), /^08\\d{8,11}$/.test("6281234"));', ["true false", "true true", "false false", "false true"],
    "test memberi true/false. ^ dan $ memastikan SELURUH teks mengikuti pola: diawali 08 lalu 8-11 digit.",
    ["Nomor kedua tidak diawali 08.", "Nomor pertama cocok.", "Urutannya terbalik."]),
  O("koleksi", 2, 'console.log("INV-12 dan INV-345".match(/\\d+/g).join("|"));', ["12|345", "12", "INV-12|INV-345", "null"],
    "match dengan bendera g mengembalikan semua yang cocok. \\d+ = satu atau lebih digit.",
    ["g mengambil semua.", "Hanya digit yang diambil.", "Ada yang cocok."]),
  O("koleksi", 3, 'console.log("Budi Santoso".replace(/(\\w+) (\\w+)/, "$2, $1"));', ["Santoso, Budi", "Budi Santoso", "$2, $1", "Budi, Santoso"],
    "Kurung di regex membuat kelompok. $1 dan $2 di teks pengganti merujuk kelompok pertama dan kedua.",
    ["Kelompok ditukar.", "Tanda $ diganti isi kelompok.", "Urutan dibalik."]),
  M("koleksi", 1, "Kapan memakai Set dibanding array?", ["Saat butuh nilai unik dan sering mengecek 'ada atau tidak' (has)", "Saat butuh indeks", "Saat urutan sangat penting dan ada duplikat", "Untuk menyimpan teks panjang"],
    "Set.has jauh lebih cepat daripada array.includes untuk data besar.",
    ["Set tidak punya indeks.", "Set membuang duplikat.", "Teks panjang cukup string."]),
  I("koleksi", 1, "Method Set untuk mengecek keberadaan nilai: s.____(x)", ["has"], "has mengembalikan true/false."),

  // ---- modul (+15) ----
  O("modul", 1, 'const data = { nama: "Ani", nilai: [90, 85] };\nconsole.log(JSON.stringify(data));', ["{\"nama\":\"Ani\",\"nilai\":[90,85]}", "{nama: 'Ani', nilai: [90, 85]}", "[object Object]", "Error"],
    "JSON memakai kutip ganda untuk kunci dan teks, tanpa spasi tambahan.",
    ["JSON wajib kutip ganda.", "stringify memberi teks JSON.", "Sintaks ini sah."]),
  O("modul", 2, 'console.log(JSON.stringify({ a: 1, b: undefined, c: () => 1, d: null }));', ["{\"a\":1,\"d\":null}", "{\"a\":1,\"b\":undefined,\"d\":null}", "{\"a\":1,\"b\":null,\"c\":null,\"d\":null}", "Error"],
    "JSON tidak mengenal undefined dan fungsi, jadi properti itu dibuang. null tetap ada.",
    ["undefined dibuang.", "Fungsi dibuang, bukan jadi null.", "Sintaks ini sah."]),
  O("modul", 2, 'const teks = JSON.stringify({ a: 1, b: [2] }, null, 2);\nconsole.log(teks.split("\\n").length);', ["6", "1", "3", "4"],
    "Argumen ketiga (2) membuat JSON rapi berindentasi 2 spasi, jadi terpecah beberapa baris: {, \"a\", \"b\": [, 2, ], }.",
    ["Indentasi membuat banyak baris.", "Hitung ulang barisnya.", "Hitung ulang barisnya."]),
  O("modul", 2, 'const asal = { info: { kota: "Batam" } };\nconst dangkal = { ...asal };\ndangkal.info.kota = "Medan";\nconsole.log(asal.info.kota);', ["Medan", "Batam", "undefined", "Error"],
    "Spread menyalin DANGKAL: objek di dalam (info) masih dipakai bersama, jadi asal ikut berubah.",
    ["Objek dalam dipakai bersama.", "Properti tetap ada.", "Sintaks ini sah."]),
  O("modul", 2, 'const asal = { info: { kota: "Batam" } };\nconst dalam = structuredClone(asal);\ndalam.info.kota = "Medan";\nconsole.log(asal.info.kota);', ["Batam", "Medan", "undefined", "Error"],
    "structuredClone menyalin DALAM (sampai ke objek di dalamnya), jadi asal tidak tersentuh.",
    ["Salinan dalam terpisah.", "Properti tetap ada.", "structuredClone fitur bawaan."]),
  O("modul", 2, 'const teks = \'{"tanggal":"2026-11-27","total":"150000"}\';\nconst o = JSON.parse(teks, (k, v) => k === "total" ? Number(v) : v);\nconsole.log(typeof o.total, o.total + 1);', ["number 150001", "string 1500001", "number 150000", "Error"],
    "Fungsi reviver di JSON.parse bisa mengubah nilai saat dibaca, misalnya teks angka menjadi number.",
    ["total sudah diubah jadi angka.", "Sudah ditambah 1.", "Sintaks ini sah."]),
  M("modul", 1, "Tujuan memecah kode menjadi modul (export/import):", ["Setiap file mengurus satu hal, mudah dicari, dipakai ulang, dan tidak bentrok nama", "Supaya file lebih banyak", "Wajib oleh browser", "Supaya kode tidak bisa dibaca"],
    "Contoh: format.js berisi fungsi format rupiah, keranjang.js memakai dengan import.",
    ["Bukan sekadar banyak file.", "Tidak wajib.", "Bukan untuk menyembunyikan."]),
  M("modul", 2, "Beda export default dan export bernama:", ["default = satu ekspor utama, di-import tanpa kurung kurawal; bernama = boleh banyak, di-import dengan { nama }", "Keduanya sama", "default boleh banyak", "bernama tidak bisa di-import"],
    "import hitung from \"./hitung.js\" (default) vs import { pajak, diskon } from \"./hitung.js\" (bernama).",
    ["Cara import-nya berbeda.", "default hanya satu per file.", "bernama bisa di-import."]),
  M("modul", 2, "Supaya browser memahami import/export di file skrip, tag-nya ditulis:", ["<script type=\"module\" src=\"main.js\"></script>", "<script src=\"main.js\" import>", "<module src=\"main.js\">", "<script lang=\"es6\">"],
    "type=\"module\" juga otomatis defer dan mode ketat. Modul harus dibuka lewat http(s), bukan file://.",
    ["Atribut itu tidak ada.", "Tag itu tidak ada.", "Atribut itu tidak ada."]),
  M("modul", 2, "Isi utama file package.json di proyek Node:", ["Nama proyek, daftar dependency, dan skrip seperti \"start\" atau \"test\"", "Kode utama aplikasi", "Kata sandi server", "Gambar proyek"],
    "npm install membaca package.json lalu memasang paketnya ke node_modules.",
    ["Kode ada di file .js.", "Jangan simpan rahasia di sana.", "Bukan untuk gambar."]),
  M("modul", 2, "Kenapa folder node_modules tidak di-commit ke Git?", ["Sangat besar dan bisa dibuat ulang dengan npm install dari package.json/package-lock.json", "Karena dilarang hukum", "Karena berisi kode kita sendiri", "Supaya proyek tidak bisa jalan"],
    "Tambahkan node_modules ke .gitignore.",
    ["Bukan larangan hukum.", "Isinya kode paket orang lain.", "Proyek tetap jalan setelah npm install."]),
  M("modul", 2, "Perintah npm untuk memasang paket sebagai kebutuhan pengembangan saja (misalnya alat tes):", ["npm install --save-dev vitest", "npm install -g vitest saja", "npm run vitest", "npm delete vitest"],
    "devDependencies tidak ikut ke versi produksi.",
    ["-g memasang global, bukan untuk proyek.", "run menjalankan skrip.", "delete bukan perintah pemasangan."]),
  M("modul", 2, "Node.js adalah…", ["Lingkungan untuk menjalankan JavaScript di luar browser (server, alat build, skrip)", "Framework tampilan seperti React", "Database", "Bahasa baru"],
    "Dengan Node, satu bahasa (JavaScript) bisa dipakai untuk frontend dan backend.",
    ["React untuk tampilan.", "Bukan database.", "Bahasanya tetap JavaScript."]),
  M("modul", 3, "Menyimpan kunci API rahasia di kode frontend (yang dikirim ke browser):", ["Tidak aman: siapa pun bisa melihatnya lewat DevTools; simpan di server/backend", "Aman bila namanya disamarkan", "Aman bila di file terpisah", "Aman bila di-minify"],
    "Semua yang dikirim ke browser bisa dibaca pengguna. Rahasia tinggal di server atau variabel lingkungan backend.",
    ["Nama samaran tetap terbaca.", "File terpisah tetap terkirim.", "Minify tetap bisa dibaca."]),
  I("modul", 1, "Kata kunci untuk memakai fungsi dari file lain: ____ { pajak } from \"./hitung.js\"", ["import"], "import mengambil yang di-export file lain."),

  // ---- frontend (+15) ----
  O("frontend", 1, 'const state = { qty: 1, nama: "Kopi" };\nconst baru = { ...state, qty: state.qty + 1 };\nconsole.log(state.qty, baru.qty);', ["1 2", "2 2", "1 1", "Error"],
    "Di React, state tidak diubah langsung; buat objek baru dengan spread. State lama tetap utuh, jadi React tahu ada perubahan.",
    ["state lama tidak diubah.", "baru sudah ditambah.", "Sintaks ini sah."]),
  O("frontend", 2, 'const daftar = [{ id: 1, n: 1 }, { id: 2, n: 5 }];\nconst baru = daftar.map(x => x.id === 2 ? { ...x, n: x.n - 1 } : x);\nconsole.log(daftar[1].n, baru[1].n, daftar[0] === baru[0]);', ["5 4 true", "4 4 true", "5 4 false", "5 5 true"],
    "Pola React: mengubah satu item di list dengan map + spread. Item yang tidak berubah tetap objek yang sama (hemat render).",
    ["daftar asli tidak berubah.", "Item pertama tidak disalin, jadi sama.", "Item kedua dikurangi 1."]),
  O("frontend", 2, 'const keranjang = [{ id: 1 }, { id: 2 }, { id: 3 }];\nconst sisa = keranjang.filter(x => x.id !== 2);\nconsole.log(sisa.map(x => x.id).join(","), keranjang.length);', ["1,3 3", "1,3 2", "1,2,3 3", "2 3"],
    "Menghapus item dari state: filter membuat array baru tanpa item itu (bukan splice yang mengubah aslinya).",
    ["Array asli tetap 3.", "Item 2 dibuang.", "Yang tersisa 1 dan 3."]),
  M("frontend", 1, "Apa itu TypeScript?", ["JavaScript yang ditambah label tipe, diperiksa sebelum dijalankan, lalu diubah menjadi JavaScript biasa", "Bahasa pengganti HTML", "Database", "Framework CSS"],
    "TypeScript menangkap salah tipe (misalnya mengirim teks ke parameter angka) di editor, sebelum aplikasi dijalankan.",
    ["Bukan pengganti HTML.", "Bukan database.", "Bukan CSS."]),
  M("frontend", 1, "Arti tulisan TypeScript function total(harga: number, qty: number): number", ["harga dan qty harus angka, dan fungsi mengembalikan angka", "Fungsi menerima teks", "Fungsi tanpa hasil", "Error sintaks"],
    "Tanda titik dua memberi label tipe. Kalau dipanggil total(\"10\", 2), editor langsung memberi garis merah.",
    ["Label number = angka.", "Ada : number sebagai hasil.", "Sintaks TypeScript sah."]),
  M("frontend", 2, "Kode TypeScript berikut mendefinisikan…", ["Bentuk objek Produk: nama teks, harga angka, stok angka yang boleh tidak ada", "Class Produk dengan method", "Database Produk", "Komponen React"],
    "interface mendeskripsikan bentuk data. Tanda ? berarti properti opsional.",
    ["interface tidak punya method isi.", "Bukan database.", "Bukan komponen."],
    "interface Produk {\n  nama: string;\n  harga: number;\n  stok?: number;\n}"),
  M("frontend", 1, "Di React, komponen adalah…", ["Fungsi yang mengembalikan tampilan (JSX) dan bisa dipakai berulang seperti tag HTML buatan sendiri", "File CSS", "Database", "Server"],
    "Contoh: function KartuProduk({ nama, harga }) { return <div>{nama}: {harga}</div>; } lalu dipakai <KartuProduk nama=\"Kopi\" harga={18000} />.",
    ["Bukan CSS.", "Bukan database.", "Bukan server."]),
  M("frontend", 2, "Kenapa tampilan React tidak berubah bila state diubah langsung (state.qty = 5)?", ["React hanya tahu ada perubahan lewat fungsi setter (setQty) yang memberi nilai/objek baru", "Karena qty harus teks", "Karena React rusak", "Karena butuh reload"],
    "Selalu pakai setter: setQty(q => q + 1) atau setProduk({ ...produk, qty: 5 }).",
    ["Tipe bukan masalahnya.", "React bekerja sesuai aturan ini.", "Tidak perlu reload."]),
  M("frontend", 2, "Hasil const [qty, setQty] = useState(1):", ["qty berisi nilai sekarang (1), setQty fungsi untuk mengubahnya dan memicu tampilan ulang", "qty adalah fungsi", "setQty berisi angka", "Error"],
    "useState memberi pasangan [nilai, pengubah] lewat destructuring array.",
    ["qty adalah nilai.", "setQty adalah fungsi.", "Sintaks ini sah."]),
  M("frontend", 2, "useEffect(() => { ... }, []) dengan array kosong dijalankan…", ["Sekali setelah komponen pertama kali tampil (cocok untuk memuat data)", "Setiap detik", "Tidak pernah", "Setiap kali tombol apa pun diklik"],
    "Array kedua berisi daftar ketergantungan. Kosong = hanya sekali. [id] = setiap id berubah.",
    ["Bukan timer.", "Tetap jalan sekali.", "Hanya bila ketergantungan berubah."]),
  M("frontend", 2, "Saat menampilkan daftar dengan map di React, setiap item butuh prop key yang…", ["Unik dan stabil, misalnya id dari data", "Selalu indeks array", "Acak setiap render (Math.random())", "Sama untuk semua item"],
    "key membantu React tahu item mana yang berubah. Indeks bermasalah bila urutan berubah; nilai acak membuat semua item dibuat ulang.",
    ["Indeks bisa salah saat urutan berubah.", "Acak merusak kinerja.", "Harus unik."]),
  M("frontend", 2, "Input terkendali (controlled input) di React berarti…", ["value input diambil dari state dan onChange memperbarui state itu", "Input tidak bisa diketik", "Input tanpa state", "Input yang dikunci admin"],
    "<input value={nama} onChange={e => setNama(e.target.value)} />. State menjadi satu-satunya sumber kebenaran.",
    ["Tetap bisa diketik.", "Justru memakai state.", "Bukan soal izin."]),
  M("frontend", 2, "Cara memulai proyek React modern yang ringan:", ["npm create vite@latest lalu pilih React (atau React + TypeScript)", "Mengunduh React.zip manual", "Menulis semua di satu file HTML tanpa alat", "npm install react-global -g"],
    "Vite membuat kerangka proyek dan server pengembangan yang cepat.",
    ["Cara manual tidak disarankan.", "Bisa untuk coba-coba, bukan proyek.", "Paket itu tidak ada."]),
  M("frontend", 3, "Menampilkan elemen hanya bila keranjang tidak kosong di JSX:", ["{keranjang.length > 0 && <Ringkasan />}", "{keranjang.length && <Ringkasan />} (aman untuk semua kasus)", "if (keranjang) <Ringkasan /> di dalam JSX", "<Ringkasan if={keranjang} />"],
    "Hati-hati: keranjang.length && ... akan menampilkan angka 0 di layar saat kosong. Bandingkan dulu agar hasilnya boolean.",
    ["0 akan tercetak di layar.", "if tidak bisa langsung di JSX.", "Prop if tidak ada."]),
  I("frontend", 1, "Hook React untuk menyimpan state di komponen: ____(0)", ["usestate"], "useState memberi [nilai, pengubah]."),
  );

  dalami("scope", `
<h4>Scope = "dari mana variabel ini bisa dilihat?"</h4>
<p>Bayangkan rumah bertingkat. Orang di kamar (fungsi/blok) bisa melihat barang di ruang tamu (luar), tapi orang di ruang tamu tidak bisa melihat isi kamar. JavaScript mencari nama dari lingkup paling dalam ke luar.</p>
<pre><code>const kota = "Batam";          // global
function profil() {
  const nama = "Ani";          // lingkup fungsi
  if (true) {
    const umur = 21;           // lingkup blok
    console.log(nama, kota);   // bisa: lihat ke luar
  }
  // console.log(umur);        // ReferenceError: umur hanya di blok if
}</code></pre>
<h4>var, let, const dalam satu tabel</h4>
<table class="mini-pivot"><tr><th></th><th>var</th><th>let</th><th>const</th></tr>
<tr><td>Lingkup</td><td>fungsi (bocor dari blok)</td><td>blok</td><td>blok</td></tr>
<tr><td>Dibaca sebelum baris deklarasi</td><td>undefined</td><td>ReferenceError (TDZ)</td><td>ReferenceError (TDZ)</td></tr>
<tr><td>Diisi ulang</td><td>boleh</td><td>boleh</td><td>tidak</td></tr>
<tr><td>Di loop + fungsi</td><td>satu variabel untuk semua putaran</td><td>baru di setiap putaran</td><td>baru di setiap putaran</td></tr></table>
<h4>Closure dengan contoh nyata</h4>
<pre><code>function buatDiskon(persen) {
  return harga =&gt; harga - harga * persen / 100;   // mengingat persen
}
const diskon10 = buatDiskon(10);
const diskon25 = buatDiskon(25);
diskon10(20000);   // 18000
diskon25(20000);   // 15000</code></pre>
<p>Setiap fungsi yang dikembalikan membawa "ransel" berisi variabel dari tempat ia dibuat.</p>
<h4>this: lihat siapa di kiri titik</h4>
<table class="mini-pivot"><tr><th>Cara memanggil</th><th>this</th></tr>
<tr><td><code>obj.method()</code></td><td>obj</td></tr>
<tr><td><code>f()</code> biasa</td><td>undefined (mode ketat) / objek global</td></tr>
<tr><td><code>f.call(x)</code>, <code>f.bind(x)</code></td><td>x</td></tr>
<tr><td><code>new F()</code></td><td>objek baru</td></tr>
<tr><td>arrow function</td><td>this milik lingkup luar</td></tr>
<tr><td>listener <code>function</code> biasa</td><td>elemen yang dipasangi listener</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> buat <code>buatKasir(namaToko)</code> yang mengembalikan objek berisi <code>tambah(harga)</code> dan <code>total()</code>, dengan total tersimpan tersembunyi lewat closure. Buat dua kasir dan buktikan totalnya terpisah.</div>`);

  dalami("event", `
<h4>Alur sebuah klik</h4>
<ol><li>Pengguna mengklik <code>&lt;span&gt;</code> di dalam <code>&lt;li&gt;</code> di dalam <code>&lt;ul&gt;</code>.</li><li>Event turun dari atas ke elemen itu (fase capture, jarang dipakai).</li><li>Listener di elemen yang diklik dijalankan.</li><li>Event <b>menggelembung naik</b>: listener di <code>&lt;li&gt;</code>, lalu <code>&lt;ul&gt;</code>, lalu <code>body</code> ikut dijalankan.</li></ol>
<p><code>e.stopPropagation()</code> menghentikan gelembung. <code>e.preventDefault()</code> membatalkan perilaku bawaan (pindah halaman, kirim form). Keduanya berbeda.</p>
<h4>Event delegation: satu telinga untuk banyak anak</h4>
<pre><code>daftar.addEventListener("click", e =&gt; {
  const tombol = e.target.closest("[data-hapus]");
  if (!tombol) return;                       // klik di tempat lain: abaikan
  tombol.closest("li").remove();
});</code></pre>
<p>Keuntungan: cukup satu listener, dan tetap bekerja untuk item yang ditambahkan belakangan.</p>
<h4>Event yang sering dipakai</h4>
<table class="mini-pivot"><tr><th>Event</th><th>Kapan</th><th>Contoh pemakaian</th></tr>
<tr><td>click</td><td>diklik/ditekan</td><td>tombol</td></tr>
<tr><td>input</td><td>isi berubah saat diketik</td><td>pencarian langsung</td></tr>
<tr><td>change</td><td>isi selesai diubah</td><td>select, checkbox</td></tr>
<tr><td>submit</td><td>form dikirim</td><td>login, pemesanan</td></tr>
<tr><td>keydown</td><td>tombol keyboard ditekan</td><td>pintasan Ctrl+Enter</td></tr>
<tr><td>DOMContentLoaded</td><td>HTML selesai dibaca</td><td>memulai skrip</td></tr></table>
<h4>Debounce untuk pencarian</h4>
<pre><code>let timer;
cari.addEventListener("input", () =&gt; {
  clearTimeout(timer);                              // batalkan rencana lama
  timer = setTimeout(() =&gt; tampilkan(cari.value), 300);   // cari setelah jeda 300 ms
});</code></pre>
<div class="praktik"><b>Coba sendiri</b> (Code Runner): buat daftar tugas dengan tombol hapus di setiap item memakai satu listener di &lt;ul&gt;, dan tombol Enter di input untuk menambah tugas.</div>`);

  dalami("kelas", `
<h4>Class langkah demi langkah</h4>
<pre><code>class Produk {
  #stok;                                  // 1) field privat
  static jumlahDibuat = 0;                // 2) milik class, dibagi bersama

  constructor(nama, harga, stok = 0) {    // 3) dijalankan saat new
    this.nama = nama;
    this.harga = harga;
    this.#stok = stok;
    Produk.jumlahDibuat++;
  }
  get stok() { return this.#stok; }       // 4) dibaca seperti properti
  jual(qty) {                             // 5) method
    if (qty &gt; this.#stok) throw new Error("stok kurang");
    this.#stok -= qty;
    return this.harga * qty;
  }
}
const kopi = new Produk("Kopi", 18000, 10);
kopi.jual(2);        // 36000
kopi.stok;           // 8
// kopi.#stok        // SyntaxError: privat</code></pre>
<h4>Pewarisan: extends + super</h4>
<pre><code>class ProdukDiskon extends Produk {
  constructor(nama, harga, stok, persen) {
    super(nama, harga, stok);             // WAJIB sebelum memakai this
    this.persen = persen;
  }
  jual(qty) {
    const normal = super.jual(qty);       // pakai logika induk
    return normal - normal * this.persen / 100;
  }
}</code></pre>
<h4>Empat pilar OOP dengan bahasa sederhana</h4>
<table class="mini-pivot"><tr><th>Pilar</th><th>Artinya</th><th>Di contoh</th></tr>
<tr><td>Enkapsulasi</td><td>data dilindungi, diubah lewat method</td><td><code>#stok</code> hanya lewat <code>jual</code></td></tr>
<tr><td>Abstraksi</td><td>pemakai cukup tahu cara pakai, bukan detailnya</td><td>panggil <code>jual(2)</code> saja</td></tr>
<tr><td>Pewarisan</td><td>class baru memakai ulang class lama</td><td><code>ProdukDiskon extends Produk</code></td></tr>
<tr><td>Polimorfisme</td><td>method sama, perilaku berbeda</td><td><code>jual</code> versi diskon</td></tr></table>
<h4>Di balik layar: prototype</h4>
<p>Method class sebenarnya disimpan sekali di <code>Produk.prototype</code> dan dipakai bersama semua objek, sehingga hemat memori. <code>class</code> hanyalah cara menulis yang lebih rapi.</p>
<div class="praktik"><b>Coba sendiri:</b> buat class <code>Rekening</code> dengan saldo privat, method <code>setor</code> dan <code>tarik</code> (lempar Error bila saldo kurang), lalu class <code>Tabungan</code> yang menambah method <code>tambahBunga(persen)</code>.</div>`);

  dalami("error", `
<h4>Tiga jenis masalah dan cara menghadapinya</h4>
<table class="mini-pivot"><tr><th>Jenis</th><th>Contoh</th><th>Ditangani dengan</th></tr>
<tr><td>Salah tulis (syntax)</td><td>kurung tidak ditutup</td><td>perbaiki kode; editor memberi garis merah</td></tr>
<tr><td>Error saat jalan</td><td>membaca properti dari null</td><td>perbaiki logika, atau <code>?.</code></td></tr>
<tr><td>Masalah dari luar</td><td>JSON rusak, server mati, input aneh</td><td><code>try/catch</code> + pesan yang ramah</td></tr></table>
<h4>Membaca pesan error di Console</h4>
<pre><code>Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at main.js:12:9</code></pre>
<ul><li><b>TypeError</b>: jenisnya.</li><li><b>Cannot read properties of null</b>: ada yang null, padahal dibaca propertinya.</li><li><b>main.js:12:9</b>: file, baris 12, kolom 9. Klik untuk lompat ke sana.</li></ul>
<h4>Error buatan sendiri untuk aturan bisnis</h4>
<pre><code>class ValidasiError extends Error {
  constructor(pesan, field) {
    super(pesan);
    this.name = "ValidasiError";
    this.field = field;
  }
}
function cekPesanan(p) {
  if (!p.nama) throw new ValidasiError("Nama wajib diisi", "nama");
  if (p.qty &lt; 1) throw new ValidasiError("Jumlah minimal 1", "qty");
}
try {
  cekPesanan({ nama: "", qty: 2 });
} catch (e) {
  if (e instanceof ValidasiError) tampilkanDiForm(e.field, e.message);
  else throw e;                      // error lain jangan ditelan
}</code></pre>
<h4>Error di kode asinkron</h4>
<p>Dengan <code>async/await</code>, pakai try/catch biasa. Dengan <code>.then</code>, tambahkan <code>.catch</code> di ujung rantai. Promise yang gagal tanpa ditangkap muncul sebagai "Uncaught (in promise)" di Console.</p>
<div class="praktik"><b>Coba sendiri:</b> buat fungsi <code>parseAman(teks)</code> yang mengembalikan objek hasil JSON.parse, atau <code>{ error: "format salah" }</code> bila teksnya rusak. Uji dengan teks benar dan rusak.</div>`);

  dalami("koleksi", `
<h4>Object vs Map, Array vs Set</h4>
<table class="mini-pivot"><tr><th>Butuh</th><th>Pakai</th><th>Kenapa</th></tr>
<tr><td>data berlabel tetap (profil, pengaturan)</td><td>object <code>{}</code></td><td>ringkas, mudah jadi JSON</td></tr>
<tr><td>kunci dinamis, sering tambah/hapus, kunci bukan teks</td><td><code>Map</code></td><td>ada <code>size</code>, urutan terjaga, kunci apa saja</td></tr>
<tr><td>daftar berurutan, boleh kembar</td><td>array <code>[]</code></td><td>indeks, map/filter</td></tr>
<tr><td>nilai unik, cek cepat ada/tidak</td><td><code>Set</code></td><td>buang duplikat otomatis</td></tr></table>
<h4>Math yang sering dipakai</h4>
<pre><code>Math.round(2.5)       // 3   terdekat
Math.floor(2.9)       // 2   ke bawah
Math.ceil(2.1)        // 3   ke atas (misal jumlah halaman)
Math.max(...angka)    // terbesar dari array
Math.floor(Math.random() * 6) + 1   // dadu 1..6</code></pre>
<h4>Date: tiga jebakan</h4>
<ol><li>Bulan mulai dari <b>0</b>: <code>new Date(2026, 10, 27)</code> = 27 <b>November</b>.</li><li>Tanpa zona waktu, <code>new Date("2026-11-27")</code> dibaca sebagai UTC, jadi di WIB bisa tampil jam 07.00.</li><li>Selisih dua tanggal dalam milidetik: bagi <code>86400000</code> untuk hari.</li></ol>
<pre><code>const tgl = new Date(2026, 10, 27);
tgl.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
// "27 November 2026"</code></pre>
<h4>Regex: pola teks</h4>
<table class="mini-pivot"><tr><th>Pola</th><th>Arti</th></tr>
<tr><td><code>\\d</code> / <code>\\w</code> / <code>\\s</code></td><td>digit / huruf-angka-_ / spasi</td></tr>
<tr><td><code>+</code> <code>*</code> <code>?</code></td><td>1 atau lebih / 0 atau lebih / 0 atau 1</td></tr>
<tr><td><code>{3}</code> <code>{8,11}</code></td><td>tepat 3 / 8 sampai 11 kali</td></tr>
<tr><td><code>^</code> <code>$</code></td><td>awal / akhir teks</td></tr>
<tr><td><code>( )</code></td><td>kelompok, dipanggil $1, $2</td></tr>
<tr><td>bendera <code>g</code> <code>i</code></td><td>semua kemunculan / abaikan besar-kecil</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> dari daftar email, buang yang kembar dengan Set, saring yang cocok dengan pola <code>/^[\\w.]+@[\\w.]+\\.\\w+$/</code>, lalu hitung jumlah per domain dengan Map.</div>`);

  dalami("modul", `
<h4>Dari satu file besar ke beberapa modul</h4>
<pre><code>// format.js
export function rupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}
export const PAJAK = 11;

// keranjang.js
import { rupiah, PAJAK } from "./format.js";
export default function total(items) {
  const sub = items.reduce((s, x) =&gt; s + x.harga * x.qty, 0);
  return rupiah(sub + sub * PAJAK / 100);
}

// main.js
import total from "./keranjang.js";   // default: tanpa kurung kurawal</code></pre>
<p>Di HTML: <code>&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</code>. Buka lewat server lokal (Live Server di VS Code), bukan dengan klik dua kali file.</p>
<h4>JSON: aturan yang sering dilanggar</h4>
<ul><li>Kunci dan teks wajib kutip <b>ganda</b>.</li><li>Tidak boleh koma di item terakhir.</li><li>Tidak ada <code>undefined</code>, fungsi, atau komentar.</li><li><code>JSON.stringify(data, null, 2)</code> membuat teks rapi untuk dibaca manusia.</li></ul>
<h4>Salinan dangkal vs dalam</h4>
<table class="mini-pivot"><tr><th>Cara</th><th>Jenis</th><th>Objek di dalamnya</th></tr>
<tr><td><code>{ ...o }</code>, <code>[...a]</code>, <code>Object.assign</code></td><td>dangkal</td><td>masih dipakai bersama</td></tr>
<tr><td><code>structuredClone(o)</code></td><td>dalam</td><td>ikut disalin</td></tr>
<tr><td><code>JSON.parse(JSON.stringify(o))</code></td><td>dalam (cara lama)</td><td>Date dan fungsi rusak/hilang</td></tr></table>
<h4>Node dan npm dalam lima perintah</h4>
<pre><code>npm init -y                     # buat package.json
npm install dayjs               # pasang paket (dependencies)
npm install --save-dev vitest   # alat pengembangan (devDependencies)
npm run test                    # jalankan skrip di package.json
node skrip.js                   # jalankan file JavaScript di luar browser</code></pre>
<div class="praktik"><b>Coba sendiri</b> (di laptop dengan VS Code + Live Server): pecah kode kalkulator keranjangmu menjadi <code>format.js</code> dan <code>keranjang.js</code>, lalu impor di <code>main.js</code>.</div>`);

  dalami("frontend", `
<h4>Kenapa React dan TypeScript sering diminta?</h4>
<p>Aplikasi besar (dashboard, toko, sistem internal) punya ratusan bagian tampilan yang saling bergantung. React membantu memecahnya menjadi komponen kecil yang memperbarui dirinya sendiri saat data berubah. TypeScript menangkap salah tipe sebelum aplikasi dijalankan, jadi bug berkurang saat tim bertambah besar.</p>
<h4>Dari JavaScript biasa ke React</h4>
<table class="mini-pivot"><tr><th>JavaScript + DOM</th><th>React</th></tr>
<tr><td>cari elemen, ubah textContent</td><td>ubah state, tampilan menyesuaikan sendiri</td></tr>
<tr><td><code>addEventListener("click", f)</code></td><td><code>&lt;button onClick={f}&gt;</code></td></tr>
<tr><td>createElement + append dalam loop</td><td><code>{daftar.map(x =&gt; &lt;Item key={x.id} {...x} /&gt;)}</code></td></tr>
<tr><td>variabel biasa</td><td><code>useState</code></td></tr>
<tr><td>kode saat halaman dimuat</td><td><code>useEffect(() =&gt; {...}, [])</code></td></tr></table>
<h4>Komponen kecil yang lengkap</h4>
<pre><code>function Penghitung({ awal = 0 }) {
  const [n, setN] = useState(awal);           // state
  return (
    &lt;div&gt;
      &lt;p&gt;Jumlah: {n}&lt;/p&gt;
      &lt;button onClick={() =&gt; setN(n + 1)}&gt;Tambah&lt;/button&gt;
      {n &gt; 5 &amp;&amp; &lt;p&gt;Wah, banyak!&lt;/p&gt;}       {/* tampil bersyarat */}
    &lt;/div&gt;
  );
}</code></pre>
<h4>Aturan emas state: jangan diubah langsung</h4>
<pre><code>// SALAH: React tidak tahu ada perubahan
keranjang.push(item);
// BENAR: buat array/objek baru
setKeranjang([...keranjang, item]);
setKeranjang(keranjang.filter(x =&gt; x.id !== id));
setKeranjang(keranjang.map(x =&gt; x.id === id ? { ...x, qty: x.qty + 1 } : x));</code></pre>
<p>Tiga baris terakhir adalah pola spread, filter, dan map yang sudah kamu latih di bab Array dan Modern. React sebenarnya JavaScript biasa.</p>
<div class="praktik"><b>Coba sendiri:</b> tulis fungsi JavaScript biasa <code>tambahQty(keranjang, id)</code> yang mengembalikan array baru tanpa mengubah aslinya. Itu persis yang dibutuhkan setState di React.</div>`);
})();
