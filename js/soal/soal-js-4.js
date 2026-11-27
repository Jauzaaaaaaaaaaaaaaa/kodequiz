// ============ JAVASCRIPT — tambahan 2x lipat (bagian 1): dasar, operator, kondisiloop, fungsi, array ============
// Dimuat SETELAH soal-latihan-ekstra.js. vr:"js" → dijalankan sungguhan dengan Node oleh alat/cek-soal.js.
// Output array/objek ditulis lewat join/JSON.stringify supaya sama persis di semua tempat. Opsi diacak saat tampil, kunci di indeks 0.
(function () {
  const O = (k, lv, kode, o, e, w) => ({ k, t: "mc", lv, q: "Output console.log kode ini:", kode, o, a: 0, vr: "js", e, ...(w ? { w: [null, ...w] } : {}) });
  const M = (k, lv, q, o, e, w, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}), ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_JS.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_JS.push(
  // ---- dasar (+15) ----
  O("dasar", 1, 'console.log("Halo", "Dunia", 2026);', ["Halo Dunia 2026", "HaloDunia2026", "Halo,Dunia,2026", "\"Halo\" \"Dunia\" 2026"],
    "console.log dengan beberapa nilai mencetaknya berurutan dipisah satu spasi.",
    ["Ada spasi otomatis di antara nilai.", "Koma hanya pemisah, tidak ikut dicetak.", "Tanda kutip tidak ikut dicetak."]),
  O("dasar", 1, 'let skor = 10;\nskor = skor + 5;\nconsole.log(skor);', ["15", "10", "105", "Error"],
    "let boleh diisi ulang. Kanan dihitung dulu (10 + 5), lalu disimpan ke skor.",
    ["Isinya sudah diganti.", "Angka dijumlah, bukan disambung.", "let boleh diubah."]),
  O("dasar", 1, 'console.log(typeof 42, typeof "42");', ["number string", "number number", "string string", "int string"],
    "typeof memberi nama tipe. Angka tanpa kutip = number; dengan kutip = string.",
    ["Kutip membuatnya string.", "42 tanpa kutip itu number.", "JavaScript tidak punya tipe int."]),
  O("dasar", 1, 'console.log(typeof true, typeof undefined);', ["boolean undefined", "bool undefined", "boolean null", "string undefined"],
    "true bertipe boolean. Variabel yang belum diberi nilai bertipe undefined.",
    ["Namanya boolean, bukan bool.", "typeof undefined adalah undefined.", "true bukan teks."]),
  O("dasar", 2, 'console.log(typeof null);', ["object", "null", "undefined", "number"],
    "Kekeliruan lama JavaScript yang dipertahankan: typeof null menghasilkan \"object\". Untuk mengecek null, pakai x === null.",
    ["Seharusnya begitu, tapi JavaScript menjawab object.", "null berbeda dengan undefined.", "null bukan angka."]),
  O("dasar", 2, 'console.log("5" + 3);', ["53", "8", "Error", "5 3"],
    "Kalau salah satu sisi + adalah teks, angka diubah jadi teks lalu disambung.",
    ["+ dengan teks berarti menyambung.", "JavaScript tidak error, tapi menyambung.", "Tidak ada spasi saat disambung."]),
  O("dasar", 2, 'console.log("5" * 3);', ["15", "53", "555", "NaN"],
    "Berbeda dengan +, operator * hanya untuk angka. JavaScript mengubah \"5\" menjadi 5 dulu.",
    ["* tidak menyambung teks.", "* tidak mengulang teks.", "\"5\" bisa diubah ke angka."]),
  O("dasar", 2, 'console.log(Number("12"), Number("12a"));', ["12 NaN", "12 12", "12 0", "\"12\" NaN"],
    "Number() mengubah teks menjadi angka. Kalau ada huruf, hasilnya NaN (Not a Number).",
    ["Number tidak membuang huruf.", "Hasil gagal adalah NaN, bukan 0.", "Hasil Number sudah angka."]),
  O("dasar", 2, 'console.log(parseInt("12px"), parseFloat("2.5kg"));', ["12 2.5", "NaN NaN", "12 2", "12px 2.5kg"],
    "parseInt dan parseFloat membaca angka dari DEPAN dan berhenti saat ketemu huruf. Cocok untuk \"12px\".",
    ["parse membaca angka di depan, tidak gagal.", "parseFloat menyimpan desimal.", "Hasilnya angka."]),
  O("dasar", 2, 'const nama = "Rina";\nconst umur = 21;\nconsole.log(`${nama} berumur ${umur + 1} tahun depan`);', ["Rina berumur 22 tahun depan", "${nama} berumur ${umur + 1} tahun depan", "Rina berumur 211 tahun depan", "Error"],
    "Template literal (tanda backtick) mengganti ${...} dengan nilainya, termasuk hasil hitungan.",
    ["Backtick membuat ${} diganti nilai.", "umur + 1 dihitung sebagai angka.", "Sintaks ini sah."]),
  O("dasar", 2, 'let a;\nconsole.log(a);', ["undefined", "null", "0", "Error"],
    "Variabel yang dibuat tanpa nilai otomatis berisi undefined.",
    ["null harus diisi sengaja.", "Tidak otomatis 0.", "Membuat variabel tanpa nilai itu sah."]),
  O("dasar", 3, 'console.log(String(10) + 1, Number("10") + 1);', ["101 11", "11 11", "101 101", "11 101"],
    "String(10) jadi teks, + menyambung: \"101\". Number(\"10\") jadi angka, + menjumlah: 11.",
    ["Yang pertama sudah teks.", "Yang kedua sudah angka.", "Urutannya terbalik."]),
  M("dasar", 1, "Kode const harga = 100; harga = 200; akan…", ["Error (TypeError): const tidak boleh diisi ulang", "Mengubah harga menjadi 200", "Mengubah harga menjadi 300", "Diam saja tanpa error"],
    "const = kotak yang isinya dikunci. Pakai let kalau nilainya memang akan berubah.",
    ["const tidak bisa diisi ulang.", "Tidak ada penjumlahan.", "JavaScript memberi TypeError."]),
  M("dasar", 1, "Kebiasaan yang disarankan saat membuat variabel di JavaScript modern:", ["Pakai const secara bawaan, let hanya bila nilainya akan diubah, hindari var", "Selalu pakai var", "Selalu pakai let", "Tidak usah memakai kata kunci"],
    "const mencegah perubahan tidak sengaja. var punya aturan lingkup yang membingungkan (dibahas di bab Scope).",
    ["var cara lama yang membingungkan.", "let untuk yang memang berubah.", "Tanpa kata kunci membuat variabel global tidak sengaja."]),
  I("dasar", 1, "Fungsi untuk menampilkan pesan ke console: console.____()", ["log"], "console.log() mencetak ke console."),

  // ---- operator (+15) ----
  O("operator", 1, 'console.log(10 % 4, 2 ** 3);', ["2 8", "2.5 6", "2 6", "4 8"],
    "% = sisa bagi (10 = 4×2 + 2). ** = pangkat (2³ = 8).",
    ["% adalah sisa, bukan hasil bagi.", "** adalah pangkat.", "Hitung ulang sisa bagi."]),
  O("operator", 1, 'console.log(7 / 2);', ["3.5", "3", "4", "3,5"],
    "JavaScript hanya punya satu jenis angka (number), jadi 7 / 2 langsung 3.5. Untuk bulat ke bawah pakai Math.floor(7 / 2).",
    ["JavaScript tidak membuang desimal.", "Tidak dibulatkan.", "Desimal ditulis dengan titik."]),
  O("operator", 1, 'console.log(5 === "5", 5 == "5");', ["false true", "true true", "false false", "true false"],
    "=== membandingkan nilai DAN tipe (number vs string → false). == mengubah tipe dulu (\"5\" jadi 5 → true). Biasakan memakai ===.",
    ["=== juga mengecek tipe.", "== mengubah tipe dulu, jadi sama.", "Urutannya terbalik."]),
  O("operator", 1, 'let n = 5;\nn += 3;\nn *= 2;\nconsole.log(n);', ["16", "13", "11", "10"],
    "Jejak: 5 → +3 = 8 → ×2 = 16.",
    ["Itu 5 + 3 * 2 dengan urutan matematika; di sini dijalankan baris per baris.", "Masih ada *= 2.", "Hitung ulang."]),
  O("operator", 2, 'let i = 1;\nconsole.log(i++, i);', ["1 2", "2 2", "1 1", "2 1"],
    "i++ (di belakang) memberi nilai LAMA dulu, baru menambah. Jadi yang dicetak pertama 1, lalu i sudah 2.",
    ["i++ memberi nilai lama dulu.", "i sudah bertambah setelah itu.", "Urutan cetak kiri dulu."]),
  O("operator", 2, 'let i = 1;\nconsole.log(++i, i);', ["2 2", "1 2", "1 1", "2 1"],
    "++i (di depan) menambah DULU, baru memberi nilainya.",
    ["++ di depan menambah dulu.", "Nilai sudah 2 di kedua tempat.", "Tidak ada yang berkurang."]),
  O("operator", 2, 'console.log(2 + 3 + "1", "1" + 2 + 3);', ["51 123", "6 6", "231 123", "51 15"],
    "Dikerjakan dari kiri. 2 + 3 = 5 lalu + \"1\" = \"51\". Yang kedua: \"1\" + 2 = \"12\", lalu + 3 = \"123\" (sudah teks).",
    ["Ada teks, jadi tidak semua dijumlah.", "2 + 3 dijumlah dulu sebelum ketemu teks.", "Setelah jadi teks, + terus menyambung."]),
  O("operator", 2, 'console.log(0.1 + 0.2 === 0.3);', ["false", "true", "Error", "0.3"],
    "Komputer menyimpan desimal dalam biner sehingga 0.1 + 0.2 = 0.30000000000000004. Untuk uang, hitung dalam rupiah bulat atau bulatkan dulu.",
    ["Hasilnya sedikit meleset dari 0.3.", "Perbandingan ini sah.", "Yang dicetak true/false."]),
  O("operator", 2, 'console.log((0.1 + 0.2).toFixed(2));', ["0.30", "0.3", "0.30000000000000004", "0.31"],
    "toFixed(2) membulatkan tampilan menjadi 2 angka desimal dan menghasilkan TEKS.",
    ["toFixed(2) selalu 2 desimal.", "Sudah dibulatkan.", "Pembulatan ke 2 desimal."]),
  O("operator", 2, 'console.log(true && "ok", false || "cadangan");', ["ok cadangan", "true false", "true cadangan", "ok false"],
    "&& mengembalikan nilai kanan bila kiri benar. || mengembalikan nilai kanan bila kiri salah. Keduanya mengembalikan nilai aslinya, bukan selalu true/false.",
    ["Yang dikembalikan nilainya, bukan true/false.", "|| memberi cadangan karena kiri salah.", "&& memberi \"ok\" karena kiri benar."]),
  O("operator", 2, 'const stok = 0;\nconsole.log(stok || 10, stok ?? 10);', ["10 0", "0 10", "10 10", "0 0"],
    "|| mengganti semua nilai falsy (termasuk 0). ?? hanya mengganti null/undefined, jadi 0 tetap 0. Untuk angka yang boleh nol, pakai ??.",
    ["|| menganggap 0 salah.", "?? menjaga 0.", "?? tidak mengganti 0."]),
  O("operator", 2, 'const umur = 16;\nconsole.log(umur >= 17 ? "boleh" : "belum");', ["belum", "boleh", "true", "16"],
    "Ternary: syarat ? nilaiJikaBenar : nilaiJikaSalah. 16 >= 17 salah → \"belum\".",
    ["Syaratnya salah.", "Yang dicetak salah satu teks.", "Yang dicetak hasil pilihan."]),
  O("operator", 3, 'console.log("10" > "9", 10 > 9);', ["false true", "true true", "false false", "true false"],
    "Dua TEKS dibandingkan huruf demi huruf seperti kamus: \"1\" lebih kecil dari \"9\", jadi \"10\" > \"9\" salah. Angka dibandingkan nilainya.",
    ["Teks dibandingkan per huruf, bukan nilai.", "Angka 10 memang lebih dari 9.", "Urutannya terbalik."]),
  M("operator", 1, "Kenapa disarankan memakai === dibanding ==?", ["=== tidak mengubah tipe diam-diam, jadi hasilnya lebih bisa ditebak", "=== lebih pendek", "== sudah dihapus", "Tidak ada bedanya"],
    "== punya aturan konversi yang aneh (misalnya \"\" == 0 bernilai true). === lebih aman.",
    ["=== justru lebih panjang.", "== masih ada.", "Hasilnya bisa berbeda."]),
  I("operator", 2, "Operator nilai cadangan yang HANYA mengganti null/undefined: x ____ 10", ["??"], "?? (nullish coalescing) menjaga 0 dan teks kosong."),

  // ---- kondisiloop (+16) ----
  O("kondisiloop", 1, 'const nilai = 82;\nif (nilai >= 90) console.log("A");\nelse if (nilai >= 80) console.log("B");\nelse console.log("C");', ["B", "A", "C", "B\nC"],
    "Dicek dari atas; berhenti di syarat benar pertama. 82 >= 80 → B.",
    ["82 belum mencapai 90.", "Sudah berhenti di B.", "Hanya satu cabang jalan."]),
  O("kondisiloop", 1, 'for (let i = 0; i < 3; i++) {\n  console.log(i);\n}', ["0\n1\n2", "1\n2\n3", "0\n1\n2\n3", "3"],
    "for (mulai; syarat; langkah). i mulai 0, jalan selama i < 3, naik 1 tiap putaran.",
    ["Mulai dari 0.", "Saat i = 3 syarat salah.", "console.log di dalam loop."]),
  O("kondisiloop", 1, 'for (const buah of ["apel", "jeruk"]) {\n  console.log(buah.toUpperCase());\n}', ["APEL\nJERUK", "apel\njeruk", "0\n1", "APEL JERUK"],
    "for...of mengambil ISI array satu per satu.",
    ["Diubah jadi huruf besar.", "for...of memberi isi, bukan indeks.", "Setiap log di baris sendiri."]),
  O("kondisiloop", 1, 'const orang = { nama: "Ani", kota: "Batam" };\nfor (const k in orang) {\n  console.log(k);\n}', ["nama\nkota", "Ani\nBatam", "0\n1", "nama: Ani\nkota: Batam"],
    "for...in mengambil KUNCI (nama properti) sebuah objek.",
    ["for...in memberi kunci, bukan nilai.", "Objek tidak berindeks angka.", "Yang dicetak hanya kunci."]),
  O("kondisiloop", 2, 'let total = 0;\nfor (const n of [3, 4, 5]) total += n;\nconsole.log(total);', ["12", "345", "5", "0"],
    "Pola akumulator: 0 + 3 + 4 + 5 = 12.",
    ["Angka dijumlah.", "Itu angka terakhir.", "total ditambah di dalam loop."]),
  O("kondisiloop", 2, 'let n = 3;\nwhile (n > 0) {\n  console.log(n);\n  n--;\n}', ["3\n2\n1", "3\n2\n1\n0", "2\n1\n0", "3"],
    "Ulangi selama n > 0. Setelah n jadi 0, syarat salah dan loop berhenti.",
    ["0 tidak dicetak karena syarat sudah salah.", "Log dijalankan sebelum n dikurangi.", "Loop berjalan beberapa kali."]),
  O("kondisiloop", 2, 'let n = 10;\ndo {\n  console.log("jalan", n);\n} while (n < 5);', ["jalan 10", "(tidak ada output)", "jalan 10\njalan 11", "Error"],
    "do...while menjalankan isinya SEKALI dulu, baru mengecek syarat. Walau 10 < 5 salah, isinya sudah jalan satu kali.",
    ["do...while minimal jalan sekali.", "n tidak berubah, dan syarat salah.", "Sintaks ini sah."]),
  O("kondisiloop", 2, 'for (let i = 0; i < 6; i++) {\n  if (i === 4) break;\n  if (i % 2 === 0) continue;\n  console.log(i);\n}', ["1\n3", "0\n2", "1\n3\n5", "1"],
    "continue melewati angka genap, break menghentikan loop di i = 4. Yang tercetak hanya ganjil sebelum 4: 1 dan 3.",
    ["Yang genap dilewati.", "Loop berhenti di 4, jadi 5 tidak sampai.", "3 juga ganjil dan sebelum 4."]),
  O("kondisiloop", 2, 'const hari = 3;\nswitch (hari) {\n  case 1: console.log("Senin"); break;\n  case 3: console.log("Rabu"); break;\n  default: console.log("Lainnya");\n}', ["Rabu", "Rabu\nLainnya", "Lainnya", "Senin"],
    "switch mencari case yang cocok (memakai ===), menjalankannya, lalu break keluar.",
    ["Ada break, jadi default tidak ikut.", "case 3 cocok.", "hari bernilai 3."]),
  O("kondisiloop", 3, 'const x = 2;\nswitch (x) {\n  case 1: console.log("satu");\n  case 2: console.log("dua");\n  case 3: console.log("tiga");\n}', ["dua\ntiga", "dua", "satu\ndua\ntiga", "tiga"],
    "Tanpa break, setelah case cocok JavaScript terus menjalankan case di bawahnya (fall-through). Lupa break adalah bug yang sering terjadi.",
    ["Tidak ada break, jadi lanjut ke bawah.", "Mulai dari case yang cocok, bukan dari atas.", "case 2 juga dijalankan."]),
  O("kondisiloop", 2, 'const isi = "";\nif (isi) console.log("ada");\nelse console.log("kosong");', ["kosong", "ada", "undefined", "Error"],
    "Teks kosong \"\" termasuk falsy. Falsy lain: 0, null, undefined, NaN, false.",
    ["Teks kosong dianggap salah.", "Yang dicetak salah satu teks.", "Sintaks ini sah."]),
  O("kondisiloop", 2, 'if ([] && {}) console.log("benar");\nelse console.log("salah");', ["benar", "salah", "Error", "undefined"],
    "Jebakan: array kosong [] dan objek kosong {} termasuk TRUTHY di JavaScript (berbeda dengan Python). Untuk cek array kosong pakai arr.length === 0.",
    ["[] dan {} dianggap benar di JavaScript.", "Sintaks ini sah.", "Yang dicetak salah satu teks."]),
  O("kondisiloop", 3, 'let baris = "";\nfor (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= i; j++) baris += j;\n  baris += " ";\n}\nconsole.log(baris.trim());', ["1 12 123", "123 123 123", "1 2 3", "111 22 3"],
    "Loop dalam berjalan sampai i. i=1 → \"1\", i=2 → \"12\", i=3 → \"123\", dipisah spasi.",
    ["Loop dalam bergantung pada i.", "Yang ditambahkan j, bukan i.", "Ikuti jejak j."]),
  M("kondisiloop", 1, "Beda for...of dan for...in:", ["for...of mengambil isi (cocok untuk array); for...in mengambil kunci (cocok untuk objek)", "Keduanya sama", "for...in untuk array, for...of untuk objek", "for...of hanya untuk angka"],
    "Ingat: of = isinya, in = indeks/kuncinya.",
    ["Hasilnya berbeda.", "Terbalik.", "for...of untuk semua iterable."]),
  M("kondisiloop", 2, "Kapan switch lebih cocok daripada if-else if?", ["Saat membandingkan SATU nilai dengan banyak kemungkinan tetap (1, 2, 3 atau \"draft\", \"done\")", "Saat membandingkan rentang seperti nilai >= 80", "Tidak pernah", "Saat ada loop"],
    "switch memakai ===, jadi cocok untuk nilai pasti. Rentang (>, <) lebih cocok dengan if.",
    ["Rentang lebih cocok dengan if.", "switch tetap berguna.", "Tidak terkait loop."]),
  I("kondisiloop", 1, "Kata kunci untuk keluar dari loop sekarang juga: ____", ["break"], "break menghentikan loop atau switch."),

  // ---- fungsi (+16) ----
  O("fungsi", 1, 'function luas(p, l) {\n  return p * l;\n}\nconsole.log(luas(4, 5));', ["20", "9", "45", "undefined"],
    "Saat dipanggil, p = 4 dan l = 5. return menyerahkan 4 × 5.",
    ["Ini perkalian.", "Hitung ulang: 4 × 5.", "Ada return."]),
  O("fungsi", 1, 'function sapa(nama = "Tamu") {\n  return "Halo " + nama;\n}\nconsole.log(sapa(), sapa("Ani"));', ["Halo Tamu Halo Ani", "Halo undefined Halo Ani", "Halo Ani Halo Ani", "Error"],
    "Nilai bawaan dipakai bila argumen tidak dikirim.",
    ["Default mencegah undefined.", "Panggilan pertama tanpa argumen.", "Sintaks ini sah."]),
  O("fungsi", 1, 'const kali2 = x => x * 2;\nconsole.log(kali2(7));', ["14", "72", "7", "undefined"],
    "Arrow function satu baris tanpa kurung kurawal langsung mengembalikan hasilnya (return otomatis).",
    ["Ini perkalian.", "Tidak disambung.", "Tanpa kurung kurawal, hasil otomatis di-return."]),
  O("fungsi", 2, 'const kali2 = x => { x * 2; };\nconsole.log(kali2(7));', ["undefined", "14", "Error", "7"],
    "Jebakan: kalau memakai kurung kurawal { }, return TIDAK otomatis. Tanpa kata return, hasilnya undefined.",
    ["Dengan {}, return harus ditulis.", "Sintaks ini sah, hanya tidak mengembalikan apa pun.", "Tidak ada yang dikembalikan."]),
  O("fungsi", 2, 'function cek() {\n  console.log("di dalam");\n}\nconst hasil = cek();\nconsole.log(hasil);', ["di dalam\nundefined", "di dalam\ndi dalam", "undefined", "di dalam"],
    "Fungsi tanpa return mengembalikan undefined. console.log di dalam tetap jalan saat dipanggil.",
    ["Tidak ada return.", "log di dalam hanya sekali.", "Dua log dijalankan."]),
  O("fungsi", 2, 'function total(...angka) {\n  let s = 0;\n  for (const n of angka) s += n;\n  return s;\n}\nconsole.log(total(1, 2, 3, 4));', ["10", "4", "1,2,3,4", "Error"],
    "...angka (rest parameter) mengumpulkan semua argumen menjadi array.",
    ["Isi dijumlah, bukan dihitung banyaknya.", "Yang dikembalikan jumlah.", "Sintaks ini sah."]),
  O("fungsi", 2, 'console.log(tambah(2, 3));\nfunction tambah(a, b) {\n  return a + b;\n}', ["5", "Error", "undefined", "23"],
    "Function declaration di-hoisting: bisa dipanggil sebelum baris definisinya. (Arrow function yang disimpan di const tidak bisa.)",
    ["Function declaration boleh dipanggil lebih awal.", "Fungsi sudah dikenali.", "Angka dijumlah."]),
  O("fungsi", 2, 'function proses(angka, aksi) {\n  return aksi(angka);\n}\nconsole.log(proses(5, n => n * n));', ["25", "10", "5", "undefined"],
    "Callback: fungsi dikirim sebagai argumen lalu dipanggil di dalam. aksi(5) = 5 × 5.",
    ["Ini kuadrat.", "aksi dipanggil.", "Ada return."]),
  O("fungsi", 2, 'function pembuatSapaan(salam) {\n  return nama => salam + ", " + nama;\n}\nconst pagi = pembuatSapaan("Pagi");\nconsole.log(pagi("Budi"));', ["Pagi, Budi", "Budi, Pagi", "undefined", "Error"],
    "Fungsi bisa mengembalikan fungsi. Fungsi dalam mengingat salam (closure).",
    ["salam di depan.", "Fungsi dalam sudah mengembalikan teks.", "Sintaks ini sah."]),
  O("fungsi", 2, 'let x = 1;\nfunction ubah() {\n  let x = 99;\n}\nubah();\nconsole.log(x);', ["1", "99", "undefined", "Error"],
    "let x di dalam fungsi adalah variabel BARU yang lokal. x di luar tidak tersentuh.",
    ["x luar tidak berubah.", "x luar sudah diisi 1.", "Sintaks ini sah."]),
  O("fungsi", 2, 'const bagi = (a, b) => {\n  if (b === 0) return "tidak bisa";\n  return a / b;\n};\nconsole.log(bagi(6, 0), bagi(6, 3));', ["tidak bisa 2", "Infinity 2", "tidak bisa 2.0", "Error"],
    "return pertama menghentikan fungsi lebih awal (guard clause). JavaScript menulis 2, bukan 2.0.",
    ["Pembagian nol sudah dicegah.", "JavaScript tidak menulis .0.", "Sintaks ini sah."]),
  O("fungsi", 3, 'function hitung(n) {\n  return n <= 1 ? 1 : n * hitung(n - 1);\n}\nconsole.log(hitung(5));', ["120", "15", "5", "Error"],
    "Rekursi faktorial: 5 × 4 × 3 × 2 × 1 = 120. n <= 1 adalah kondisi berhenti.",
    ["Itu penjumlahan.", "Fungsi memanggil dirinya.", "Ada kondisi berhenti."]),
  O("fungsi", 3, 'const jumlah = (a, b = a * 2) => a + b;\nconsole.log(jumlah(3), jumlah(3, 1));', ["9 4", "6 4", "9 9", "NaN 4"],
    "Nilai bawaan boleh memakai parameter sebelumnya. jumlah(3): b = 6 → 9. jumlah(3, 1): b = 1 → 4.",
    ["b bawaan = a * 2.", "b diisi 1 pada panggilan kedua.", "b punya nilai bawaan."]),
  M("fungsi", 1, "Beda parameter dan argumen:", ["Parameter = nama kotak di definisi fungsi; argumen = nilai yang dikirim saat memanggil", "Keduanya sama persis", "Argumen ada di definisi", "Parameter hanya untuk arrow function"],
    "function luas(p, l) → p dan l parameter. luas(4, 5) → 4 dan 5 argumen.",
    ["Istilahnya berbeda.", "Terbalik.", "Semua fungsi punya parameter."]),
  M("fungsi", 2, "Kapan arrow function TIDAK cocok dipakai?", ["Sebagai method objek yang memakai this, karena arrow tidak punya this sendiri", "Untuk callback map/filter", "Untuk fungsi satu baris", "Untuk menghitung angka"],
    "Arrow function mengambil this dari luar. Untuk method objek yang butuh this, pakai function biasa atau method singkat.",
    ["Callback justru tempat favorit arrow.", "Arrow ideal untuk satu baris.", "Hitungan bebas memakai arrow."]),
  I("fungsi", 1, "Kata kunci untuk menyerahkan hasil fungsi: ____ hasil;", ["return"], "Tanpa return, fungsi mengembalikan undefined."),

  // ---- array (+15) ----
  O("array", 1, 'const a = ["apel", "jeruk", "mangga"];\nconsole.log(a[1], a.length);', ["jeruk 3", "apel 3", "jeruk 2", "mangga 3"],
    "Indeks mulai 0, jadi a[1] = jeruk. length = banyak isi = 3.",
    ["a[0] adalah apel.", "length menghitung semua isi.", "a[2] adalah mangga."]),
  O("array", 1, 'const a = [1, 2];\na.push(3);\na.unshift(0);\nconsole.log(a.join(","));', ["0,1,2,3", "1,2,3,0", "3,1,2,0", "0,1,2"],
    "push = tambah di BELAKANG, unshift = tambah di DEPAN.",
    ["unshift menaruh di depan.", "push menaruh di belakang.", "Kedua tambahan terjadi."]),
  O("array", 1, 'const a = [1, 2, 3];\nconst x = a.pop();\nconst y = a.shift();\nconsole.log(x, y, a.join(","));', ["3 1 2", "1 3 2", "3 1 1,2,3", "3 2 1"],
    "pop mengambil+membuang yang terakhir (3), shift yang pertama (1). Sisa [2].",
    ["pop dari belakang, shift dari depan.", "Item yang diambil juga dibuang.", "Cek lagi mana dari depan."]),
  O("array", 1, 'const a = [5, 10, 15];\nconsole.log(a.includes(10), a.indexOf(15), a.indexOf(99));', ["true 2 -1", "true 3 -1", "10 2 undefined", "false 2 -1"],
    "includes = adakah? (true/false). indexOf = posisinya, atau -1 kalau tidak ada.",
    ["Indeks mulai 0.", "indexOf memberi -1 untuk yang tidak ada.", "10 memang ada."]),
  O("array", 2, 'const harga = [1000, 2500, 400];\nconsole.log(harga.map(h => h * 2).join(","));', ["2000,5000,800", "1000,2500,400", "3900", "2000"],
    "map membuat array BARU, setiap isi diubah oleh fungsi. Panjangnya tetap sama.",
    ["map mengubah setiap isi.", "map tidak menjumlah.", "Semua isi diubah, bukan satu."]),
  O("array", 2, 'const nilai = [80, 55, 92, 67];\nconsole.log(nilai.filter(n => n >= 70).join(","));', ["80,92", "55,67", "80,55,92,67", "2"],
    "filter menyimpan isi yang membuat fungsi bernilai true.",
    ["Yang disimpan ≥ 70.", "filter menyaring.", "Yang dicetak isinya."]),
  O("array", 2, 'const a = [4, 6, 10];\nconsole.log(a.reduce((total, n) => total + n, 0));', ["20", "4610", "10", "0"],
    "reduce menggulung array jadi satu nilai. Mulai dari 0: 0+4=4, 4+6=10, 10+10=20.",
    ["Nilai awal 0 lalu dijumlah.", "Itu isi terakhir.", "Itu nilai awal saja."]),
  O("array", 2, 'const p = [{ n: "Ani", v: 70 }, { n: "Budi", v: 90 }, { n: "Cici", v: 95 }];\nconsole.log(p.find(o => o.v > 80).n, p.findIndex(o => o.v > 80));', ["Budi 1", "Cici 2", "Budi 2", "Ani 0"],
    "find memberi isi PERTAMA yang cocok, findIndex memberi posisinya.",
    ["find berhenti di yang pertama cocok.", "Budi di indeks 1.", "Ani tidak lebih dari 80."]),
  O("array", 2, 'const a = [1, 2, 3, 4, 5];\nconsole.log(a.slice(1, 3).join(","), a.length);', ["2,3 5", "2,3,4 5", "2,3 3", "1,2,3 5"],
    "slice(mulai, akhir) MENYALIN bagian dari indeks 1 sampai sebelum 3. Array asli tidak berubah.",
    ["Indeks 3 tidak ikut.", "slice tidak mengubah array asli.", "Mulai dari indeks 1."]),
  O("array", 2, 'const a = [1, 2, 3, 4, 5];\nconst buang = a.splice(1, 2);\nconsole.log(buang.join(","), a.join(","));', ["2,3 1,4,5", "2,3 1,2,3,4,5", "1,2 3,4,5", "2,3,4 1,5"],
    "splice(mulai, banyak) MEMBUANG dari array asli: mulai indeks 1, 2 item (2 dan 3). Array asli berubah.",
    ["splice mengubah array asli.", "Mulai dari indeks 1.", "Hanya 2 item yang dibuang."]),
  O("array", 2, 'console.log([10, 9, 1, 100].sort().join(","));', ["1,10,100,9", "1,9,10,100", "100,10,9,1", "Error"],
    "Jebakan: sort() tanpa fungsi mengurutkan sebagai TEKS (\"10\" sebelum \"9\"). Untuk angka pakai sort((a, b) => a - b).",
    ["sort bawaan mengurutkan sebagai teks.", "Bawaan naik, bukan turun.", "Sintaks ini sah."]),
  O("array", 2, 'console.log([10, 9, 1, 100].sort((a, b) => b - a).join(","));', ["100,10,9,1", "1,9,10,100", "1,10,100,9", "100,9,10,1"],
    "Fungsi pembanding b - a mengurutkan dari BESAR ke kecil (a - b untuk kecil ke besar).",
    ["b - a berarti turun.", "Sudah memakai pembanding angka.", "Urutan angka, bukan teks."]),
  O("array", 3, 'const a = [1, 2];\nconst b = a;\nconst c = [...a];\nb.push(3);\nconsole.log(a.length, c.length);', ["3 2", "2 2", "3 3", "2 3"],
    "b = a hanya nama kedua untuk array yang sama, jadi push lewat b mengubah a. [...a] membuat salinan baru, jadi c tetap 2.",
    ["a ikut berubah lewat b.", "c adalah salinan terpisah.", "Terbalik."]),
  M("array", 1, "Method mana yang MENGUBAH array aslinya?", ["push, pop, splice, sort", "map, filter, slice", "join, includes", "find, indexOf"],
    "map/filter/slice membuat array baru. push/pop/splice/sort/reverse mengubah aslinya.",
    ["Ketiganya membuat array baru.", "join membuat teks, includes hanya mengecek.", "Hanya mencari."]),
  I("array", 1, "Method untuk membuat array baru berisi hasil pengubahan setiap isi: arr.____(x => x * 2)", ["map"], "map mengubah setiap isi."),
  );

  dalami("dasar", `
<h4>JavaScript membaca kode dari atas ke bawah</h4>
<p>Sama seperti Python, setiap baris dijalankan berurutan. Tulis tabel jejak untuk memahami nilai variabel:</p>
<pre><code>let harga = 5000;
let jumlah = 3;
let total = harga * jumlah;   // 15000
harga = 6000;                 // total TIDAK ikut berubah
console.log(total);           // 15000</code></pre>
<p>Variabel menyimpan <b>hasil</b> perhitungan saat itu, bukan rumusnya.</p>
<h4>let, const, dan (hindari) var</h4>
<table class="mini-pivot"><tr><th>Kata kunci</th><th>Boleh diisi ulang?</th><th>Kapan dipakai</th></tr>
<tr><td><code>const</code></td><td>tidak</td><td>bawaan untuk hampir semua variabel</td></tr>
<tr><td><code>let</code></td><td>ya</td><td>penghitung, total, nilai yang memang berubah</td></tr>
<tr><td><code>var</code></td><td>ya</td><td>kode lama; aturannya membingungkan, hindari</td></tr></table>
<h4>Tujuh tipe yang perlu kamu kenal</h4>
<table class="mini-pivot"><tr><th>Tipe</th><th>Contoh</th><th>typeof</th></tr>
<tr><td>number</td><td><code>42</code>, <code>3.5</code>, <code>NaN</code></td><td>"number"</td></tr>
<tr><td>string</td><td><code>"halo"</code></td><td>"string"</td></tr>
<tr><td>boolean</td><td><code>true</code></td><td>"boolean"</td></tr>
<tr><td>undefined</td><td>variabel belum diisi</td><td>"undefined"</td></tr>
<tr><td>null</td><td>"sengaja kosong"</td><td>"object" (kekeliruan lama)</td></tr>
<tr><td>object</td><td><code>{ nama: "Ani" }</code></td><td>"object"</td></tr>
<tr><td>array</td><td><code>[1, 2]</code></td><td>"object" (cek dengan <code>Array.isArray</code>)</td></tr></table>
<h4>Mengubah tipe dengan sengaja</h4>
<pre><code>Number("12")        // 12
Number("12a")       // NaN   → seluruh teks harus angka
parseInt("12px")    // 12    → baca angka di depan
parseFloat("2.5kg") // 2.5
String(10)          // "10"
Boolean("")         // false</code></pre>
<p>Nilai dari kolom input HTML (<code>input.value</code>) selalu teks, sama seperti <code>input()</code> di Python. Ubah dengan <code>Number()</code> sebelum dihitung.</p>
<h4>Template literal: teks dengan isian</h4>
<p>Pakai tanda backtick (tombol di kiri angka 1) lalu tulis isian dengan tanda dolar dan kurung kurawal, misalnya <code>&#96;Halo $&#123;nama&#125;&#96;</code>. Isian boleh berisi hitungan: <code>$&#123;harga * qty&#125;</code>. Lebih rapi daripada menyambung dengan + berkali-kali.</p>
<div class="praktik"><b>Coba sendiri</b> (Code Runner → HTML · CSS · JS, tab script.js): buat variabel <code>nama</code>, <code>harga</code>, dan <code>qty</code>, lalu tampilkan "Rina membeli 3 barang seharga Rp 45000" dengan template literal. Cek hasilnya di panel Console.</div>`);

  dalami("operator", `
<h4>Urutan pengerjaan</h4>
<p>Sama seperti matematika: kurung → pangkat <code>**</code> → kali/bagi/sisa → tambah/kurang → perbandingan → <code>&amp;&amp;</code> → <code>||</code> / <code>??</code>. Operator yang setingkat dikerjakan dari <b>kiri</b>. Kalau ragu, pakai kurung.</p>
<h4>Tanda + punya dua pekerjaan</h4>
<table class="mini-pivot"><tr><th>Kode</th><th>Hasil</th><th>Kenapa</th></tr>
<tr><td><code>2 + 3</code></td><td>5</td><td>angka + angka = jumlah</td></tr>
<tr><td><code>"2" + 3</code></td><td>"23"</td><td>ada teks → sambung</td></tr>
<tr><td><code>2 + 3 + "1"</code></td><td>"51"</td><td>kiri dulu: 5, lalu sambung</td></tr>
<tr><td><code>"2" * 3</code></td><td>6</td><td>* selalu mengubah ke angka</td></tr>
<tr><td><code>"a" * 3</code></td><td>NaN</td><td>"a" tidak bisa jadi angka</td></tr></table>
<h4>== vs ===</h4>
<pre><code>5 === "5"         // false (tipe beda)
5 == "5"          // true  (diubah dulu)
0 == ""           // true  ← mengejutkan
null == undefined // true
null === undefined// false</code></pre>
<p>Aturan aman: <b>selalu pakai === dan !==</b>.</p>
<h4>|| lawan ??</h4>
<table class="mini-pivot"><tr><th>Nilai x</th><th>x || 10</th><th>x ?? 10</th></tr>
<tr><td>0</td><td>10</td><td>0</td></tr>
<tr><td>""</td><td>10</td><td>""</td></tr>
<tr><td>null</td><td>10</td><td>10</td></tr>
<tr><td>undefined</td><td>10</td><td>10</td></tr>
<tr><td>5</td><td>5</td><td>5</td></tr></table>
<p>Untuk stok, diskon, atau jumlah yang boleh nol, pakai <code>??</code> supaya nol tidak tertimpa.</p>
<h4>i++ dan ++i</h4>
<p>Keduanya menambah 1. Bedanya hanya nilai yang <b>diberikan</b> saat itu: <code>i++</code> memberi nilai lama, <code>++i</code> memberi nilai baru. Di dalam loop <code>for</code> biasa, keduanya sama saja.</p>
<div class="praktik"><b>Coba sendiri:</b> tebak dulu, lalu cek di Console: <code>"3" - 1</code>, <code>"3" + 1</code>, <code>true + 1</code>, <code>null ?? "kosong"</code>, <code>0 || "kosong"</code>.</div>`);

  dalami("kondisiloop", `
<h4>Anatomi for klasik</h4>
<pre><code>for (let i = 0; i &lt; 3; i++) { ... }
//   ① mulai     ② syarat  ③ langkah</code></pre>
<ol><li>① dijalankan sekali di awal.</li><li>② dicek <b>sebelum</b> setiap putaran; salah → loop selesai.</li><li>Isi loop dijalankan.</li><li>③ dijalankan setelah setiap putaran, lalu kembali ke ②.</li></ol>
<table class="mini-pivot"><tr><th>Putaran</th><th>i</th><th>i &lt; 3?</th><th>isi jalan?</th></tr>
<tr><td>1</td><td>0</td><td>ya</td><td>ya</td></tr><tr><td>2</td><td>1</td><td>ya</td><td>ya</td></tr>
<tr><td>3</td><td>2</td><td>ya</td><td>ya</td></tr><tr><td>-</td><td>3</td><td>tidak</td><td>berhenti</td></tr></table>
<h4>Memilih jenis loop</h4>
<table class="mini-pivot"><tr><th>Kebutuhan</th><th>Loop</th></tr>
<tr><td>setiap isi array</td><td><code>for (const x of arr)</code></td></tr>
<tr><td>butuh indeks juga</td><td><code>for (let i = 0; i &lt; arr.length; i++)</code> atau <code>arr.forEach((x, i) =&gt; ...)</code></td></tr>
<tr><td>setiap kunci objek</td><td><code>for (const k in obj)</code> atau <code>Object.keys(obj)</code></td></tr>
<tr><td>ulang sampai syarat terpenuhi</td><td><code>while</code></td></tr>
<tr><td>minimal jalan sekali</td><td><code>do ... while</code></td></tr></table>
<h4>Falsy di JavaScript berbeda dengan Python</h4>
<p>Hanya ada enam nilai falsy: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Semua yang lain truthy, <b>termasuk</b> <code>[]</code>, <code>{}</code>, <code>"0"</code>, dan <code>"false"</code>.</p>
<pre><code>const keranjang = [];
if (keranjang) { ... }               // SELALU jalan (array kosong truthy!)
if (keranjang.length === 0) { ... }  // cara benar mengecek kosong</code></pre>
<h4>switch tanpa break = jatuh ke bawah</h4>
<pre><code>switch (status) {
  case "draft":
  case "baru":            // dua case berbagi satu aksi (sengaja tanpa break)
    console.log("belum diproses");
    break;
  case "done":
    console.log("selesai");
    break;
  default:
    console.log("tidak dikenal");
}</code></pre>
<div class="praktik"><b>Coba sendiri:</b> dari <code>const nilai = [80, 45, 92, 67]</code>, hitung banyak yang lulus (≥ 70) dengan <code>for...of</code>, lalu cetak "Rata-rata: ..." dan grade A/B/C untuk rata-ratanya dengan if-else if.</div>`);

  dalami("fungsi", `
<h4>Tiga cara menulis fungsi yang sama</h4>
<pre><code>function luas(p, l) { return p * l; }      // 1) function declaration
const luas2 = function (p, l) { return p * l; };  // 2) function expression
const luas3 = (p, l) =&gt; p * l;             // 3) arrow function</code></pre>
<table class="mini-pivot"><tr><th></th><th>declaration</th><th>arrow</th></tr>
<tr><td>Dipanggil sebelum ditulis?</td><td>bisa (hoisting)</td><td>tidak</td></tr>
<tr><td>return otomatis?</td><td>tidak</td><td>ya, bila tanpa { }</td></tr>
<tr><td>punya this sendiri?</td><td>ya</td><td>tidak (ambil dari luar)</td></tr>
<tr><td>cocok untuk</td><td>fungsi utama, method</td><td>callback singkat: map, filter, event</td></tr></table>
<h4>Jebakan arrow function</h4>
<pre><code>const a = x =&gt; x * 2;          // return otomatis: 14 untuk a(7)
const b = x =&gt; { x * 2; };     // pakai { } → harus tulis return → undefined
const c = x =&gt; { return x * 2; };
const d = () =&gt; ({ nama: "Ani" });  // mengembalikan objek: bungkus dengan ( )</code></pre>
<h4>Callback: fungsi sebagai bahan</h4>
<p>Callback adalah fungsi yang kamu titipkan ke fungsi lain untuk dipanggil nanti. Kamu sudah memakainya di <code>arr.map(x =&gt; x * 2)</code> dan <code>tombol.addEventListener("click", () =&gt; ...)</code>.</p>
<pre><code>function ulangi(n, aksi) {
  for (let i = 1; i &lt;= n; i++) aksi(i);
}
ulangi(3, i =&gt; console.log("ke-" + i));   // ke-1, ke-2, ke-3</code></pre>
<h4>console.log vs return</h4>
<p>Sama seperti Python: <code>console.log</code> hanya menampilkan, <code>return</code> menyerahkan hasil supaya bisa dipakai lagi. Di Lab JavaScript KodeQuiz, penilai membaca nilai return fungsimu.</p>
<div class="praktik"><b>Coba sendiri:</b> tulis <code>hitungDiskon(harga, persen = 10)</code> sebagai arrow function, lalu pakai di <code>[10000, 25000].map(h =&gt; hitungDiskon(h, 20))</code>.</div>`);

  dalami("array", `
<h4>Peta method array: mengubah atau membuat baru?</h4>
<table class="mini-pivot"><tr><th>Method</th><th>Hasil</th><th>Array asli</th></tr>
<tr><td><code>push / pop</code></td><td>tambah / ambil di belakang</td><td>berubah</td></tr>
<tr><td><code>unshift / shift</code></td><td>tambah / ambil di depan</td><td>berubah</td></tr>
<tr><td><code>splice(i, n)</code></td><td>buang n item mulai i</td><td>berubah</td></tr>
<tr><td><code>sort / reverse</code></td><td>urutkan / balik</td><td>berubah</td></tr>
<tr><td><code>map</code></td><td>array baru, setiap isi diubah</td><td>tetap</td></tr>
<tr><td><code>filter</code></td><td>array baru, isi yang lolos</td><td>tetap</td></tr>
<tr><td><code>slice(a, b)</code></td><td>salinan potongan</td><td>tetap</td></tr>
<tr><td><code>reduce</code></td><td>satu nilai (jumlah, objek, dll.)</td><td>tetap</td></tr>
<tr><td><code>find / findIndex</code></td><td>isi / posisi pertama yang cocok</td><td>tetap</td></tr>
<tr><td><code>some / every</code></td><td>adakah satu? / semua?</td><td>tetap</td></tr>
<tr><td><code>includes / indexOf</code></td><td>ada? / posisinya (-1 bila tidak)</td><td>tetap</td></tr>
<tr><td><code>join(",")</code></td><td>teks gabungan</td><td>tetap</td></tr></table>
<h4>map, filter, reduce dalam satu cerita</h4>
<pre><code>const keranjang = [
  { nama: "Kopi", harga: 18000, qty: 2 },
  { nama: "Roti", harga: 12000, qty: 1 },
  { nama: "Teh",  harga: 8000,  qty: 0 },
];
const dibeli   = keranjang.filter(b =&gt; b.qty &gt; 0);           // buang qty 0
const subtotal = dibeli.map(b =&gt; b.harga * b.qty);            // [36000, 12000]
const total    = subtotal.reduce((s, x) =&gt; s + x, 0);          // 48000</code></pre>
<p>Bacanya: saring → ubah → gulung. Pola ini muncul di hampir semua aplikasi toko, dashboard, dan soal tes coding.</p>
<h4>Jejak reduce</h4>
<table class="mini-pivot"><tr><th>Putaran</th><th>s (sebelum)</th><th>x</th><th>s + x</th></tr>
<tr><td>1</td><td>0 (nilai awal)</td><td>36000</td><td>36000</td></tr>
<tr><td>2</td><td>36000</td><td>12000</td><td>48000</td></tr></table>
<h4>Menyalin array dengan benar</h4>
<pre><code>const a = [1, 2];
const b = a;        // BUKAN salinan: satu array, dua nama
const c = [...a];   // salinan baru (spread)
const d = a.slice();// juga salinan baru</code></pre>
<div class="praktik"><b>Coba sendiri:</b> dari <code>const nilai = [80, 45, 92, 67, 75]</code>, buat array nilai lulus (≥ 70) diurutkan dari besar ke kecil, lalu hitung rata-ratanya dengan reduce. Pastikan array <code>nilai</code> asli tidak berubah.</div>`);
})();
