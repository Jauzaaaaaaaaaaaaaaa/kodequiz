// ============ JAVASCRIPT — tambahan 2x lipat (bagian 2): strobj, dom, async, modern, kasus ============
// Pola sama dengan soal-js-4.js. Soal DOM berupa konsep (tidak dijalankan di Node).
(function () {
  const O = (k, lv, kode, o, e, w) => ({ k, t: "mc", lv, q: "Output console.log kode ini:", kode, o, a: 0, vr: "js", e, ...(w ? { w: [null, ...w] } : {}) });
  const M = (k, lv, q, o, e, w, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}), ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_JS.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_JS.push(
  // ---- strobj (+15) ----
  O("strobj", 1, 'const s = "JavaScript";\nconsole.log(s.length, s[0], s.at(-1));', ["10 J t", "10 J p", "9 J t", "10 j t"],
    "length = banyak karakter. s[0] = huruf pertama. at(-1) = huruf terakhir (indeks negatif dihitung dari belakang).",
    ["Huruf terakhir adalah t.", "Hitung ulang: J-a-v-a-S-c-r-i-p-t = 10.", "Huruf besar/kecil dipertahankan."]),
  O("strobj", 1, 'console.log("  Kopi Susu  ".trim().toLowerCase());', ["kopi susu", "Kopi Susu", "  kopi susu  ", "KOPI SUSU"],
    "trim membuang spasi di tepi, lalu toLowerCase mengubah semua huruf jadi kecil. Method bisa dirangkai berurutan.",
    ["Sudah diubah ke huruf kecil.", "Spasi tepi sudah dibuang.", "toLowerCase, bukan toUpperCase."]),
  O("strobj", 1, 'console.log("apel,jeruk,mangga".split(",").length);', ["3", "1", "17", "2"],
    "split memotong teks setiap ketemu koma menjadi array berisi 3 potongan.",
    ["Ada 3 buah setelah dipotong.", "17 adalah panjang teks.", "Ada 2 koma, berarti 3 potongan."]),
  O("strobj", 2, 'const t = "2026-11-27";\nconsole.log(t.replaceAll("-", "/"), t.includes("11"), t.startsWith("2026"));', ["2026/11/27 true true", "2026/11-27 true true", "2026/11/27 false true", "2026-11-27 true true"],
    "replaceAll mengganti SEMUA kemunculan. includes mengecek ada/tidak. startsWith mengecek awalan.",
    ["replaceAll mengganti semua, bukan satu.", "\"11\" ada di dalam teks.", "Teks sudah diganti."]),
  O("strobj", 2, 'console.log("Python".slice(0, 2) + "Script".slice(-3));', ["Pyipt", "PyScr", "Pythonipt", "Pyript"],
    "slice(0, 2) = \"Py\". slice(-3) = 3 huruf terakhir \"ipt\".",
    ["slice(-3) mengambil dari belakang.", "Hanya 2 huruf pertama yang diambil.", "Hitung ulang 3 huruf terakhir."]),
  O("strobj", 2, 'console.log("7".padStart(3, "0"), "ab".repeat(3));', ["007 ababab", "700 ababab", "007 ab3", "7 ababab"],
    "padStart menambah karakter di depan sampai panjangnya pas (cocok untuk nomor invoice 007). repeat mengulang teks.",
    ["padStart menambah di depan.", "repeat mengulang.", "Panjang target 3."]),
  O("strobj", 1, 'const p = { nama: "Kopi", harga: 18000 };\nconsole.log(p.nama, p["harga"]);', ["Kopi 18000", "nama harga", "undefined 18000", "Error"],
    "Properti objek bisa dibaca dengan titik (p.nama) atau kurung siku dengan teks (p[\"harga\"]).",
    ["Yang dicetak nilainya.", "Keduanya cara sah.", "Sintaks ini sah."]),
  O("strobj", 2, 'const p = { nama: "Kopi" };\np.stok = 5;\ndelete p.nama;\nconsole.log(JSON.stringify(p));', ["{\"stok\":5}", "{\"nama\":\"Kopi\",\"stok\":5}", "{}", "Error"],
    "Properti bisa ditambah kapan saja dan dihapus dengan delete.",
    ["nama sudah dihapus.", "stok ditambahkan.", "Sintaks ini sah."]),
  O("strobj", 2, 'const p = { nama: "Ani", kota: "Batam", umur: 21 };\nconst { nama, umur } = p;\nconsole.log(nama, umur);', ["Ani 21", "Ani Batam", "undefined undefined", "Error"],
    "Destructuring mengambil properti berdasarkan NAMA kunci, bukan urutan.",
    ["umur diambil berdasarkan nama.", "Nama kunci cocok.", "Sintaks ini sah."]),
  O("strobj", 2, 'const p = { nama: "Ani" };\nconst { nama: n, kota = "Jakarta" } = p;\nconsole.log(n, kota);', ["Ani Jakarta", "Ani undefined", "nama Jakarta", "Error"],
    "nama: n = ambil nama, simpan dengan nama baru n. kota = \"Jakarta\" adalah nilai bawaan bila properti tidak ada.",
    ["Nilai bawaan dipakai.", "n berisi nilai nama.", "Sintaks ini sah."]),
  O("strobj", 2, 'const asal = { a: 1, b: 2 };\nconst baru = { ...asal, b: 9, c: 3 };\nconsole.log(JSON.stringify(baru), asal.b);', ["{\"a\":1,\"b\":9,\"c\":3} 2", "{\"a\":1,\"b\":2,\"c\":3} 2", "{\"a\":1,\"b\":9,\"c\":3} 9", "Error"],
    "Spread menyalin isi objek; properti yang ditulis sesudahnya menimpa. Objek asal tidak berubah.",
    ["b ditimpa 9 di salinan.", "Objek asal tetap 2.", "Sintaks ini sah."]),
  O("strobj", 2, 'const harga = { kopi: 18000, teh: 12000 };\nconsole.log(Object.keys(harga).join(","), Object.values(harga).reduce((a, b) => a + b));', ["kopi,teh 30000", "18000,12000 30000", "kopi,teh 1800012000", "2 30000"],
    "Object.keys = daftar kunci, Object.values = daftar nilai. Nilainya angka, jadi dijumlah.",
    ["keys memberi nama kunci.", "Nilai berupa angka, dijumlah.", "join memberi teks kunci."]),
  O("strobj", 3, 'const harga = { kopi: 18000, teh: 12000 };\nfor (const [nama, h] of Object.entries(harga)) console.log(nama + "=" + h);', ["kopi=18000\nteh=12000", "kopi,18000\nteh,12000", "0=kopi\n1=teh", "Error"],
    "Object.entries memberi pasangan [kunci, nilai] yang dibongkar langsung dengan destructuring.",
    ["Format mengikuti sambungan +.", "entries memberi kunci, bukan indeks.", "Sintaks ini sah."]),
  M("strobj", 1, "Kapan memakai kurung siku obj[x] daripada titik obj.x?", ["Saat nama properti disimpan di variabel atau mengandung spasi/tanda", "Tidak pernah", "Untuk semua properti angka saja", "Saat objeknya kosong"],
    "const k = \"harga\"; obj[k] membaca obj.harga. obj.k justru mencari properti bernama \"k\".",
    ["Ada kasus yang butuh kurung siku.", "Bukan hanya angka.", "Objek kosong tidak terkait."]),
  I("strobj", 1, "Method teks untuk membuang spasi di awal dan akhir: s.____()", ["trim"], "trim() merapikan tepi teks."),

  // ---- dom (+16) ----
  M("dom", 1, "Apa itu DOM?", ["Gambaran halaman HTML dalam bentuk pohon objek yang bisa dibaca dan diubah JavaScript", "Bahasa pemrograman baru", "Nama database", "File CSS"],
    "Browser membaca HTML lalu membangun pohon objek (DOM). JavaScript mengubah DOM, tampilan ikut berubah.",
    ["DOM bukan bahasa.", "DOM bukan database.", "DOM bukan CSS."]),
  M("dom", 1, "Cara mengambil elemen pertama dengan class \"tombol\":", ["document.querySelector(\".tombol\")", "document.getElementById(\"tombol\")", "document.querySelector(\"tombol\")", "document.class(\"tombol\")"],
    "querySelector memakai selektor CSS: titik untuk class, # untuk id, nama tag tanpa tanda.",
    ["getElementById mencari id, bukan class.", "Tanpa titik berarti nama tag.", "Method itu tidak ada."]),
  M("dom", 1, "Beda querySelector dan querySelectorAll:", ["querySelector memberi elemen pertama; querySelectorAll memberi semua yang cocok (NodeList)", "Keduanya sama", "querySelectorAll hanya untuk id", "querySelector lebih lambat"],
    "Untuk mengubah banyak elemen sekaligus, ambil semua dengan querySelectorAll lalu ulangi dengan forEach.",
    ["Hasilnya berbeda.", "Keduanya menerima selektor apa pun.", "Bukan soal kecepatan."]),
  M("dom", 1, "Mengganti teks di dalam elemen dengan aman (tanpa menafsirkan HTML):", ["el.textContent = \"Halo\"", "el.innerHTML = teksDariPengguna", "el.value = \"Halo\" untuk semua elemen", "el.text(\"Halo\")"],
    "textContent memperlakukan isi sebagai teks biasa. innerHTML menafsirkan tag, jadi berbahaya untuk teks dari pengguna (bisa disisipi skrip).",
    ["innerHTML dengan teks pengguna membuka celah XSS.", "value hanya untuk input.", "Itu cara jQuery."]),
  M("dom", 2, "Kode berikut melakukan apa saat tombol diklik?", ["Menambah class \"gelap\" ke body bila belum ada, atau membuangnya bila sudah ada", "Menghapus tombol", "Mengganti warna tombol saja", "Memuat ulang halaman"],
    "classList.toggle menyalakan/mematikan class. Cara umum membuat tombol mode gelap.",
    ["Tombol tidak dihapus.", "Yang diubah body.", "Tidak memuat ulang."],
    'document.querySelector("#mode").addEventListener("click", () => {\n  document.body.classList.toggle("gelap");\n});'),
  M("dom", 2, "Kenapa skrip yang mengambil elemen sebaiknya dimuat di akhir body atau memakai defer?", ["Supaya elemen HTML sudah ada saat skrip mencarinya", "Supaya skrip lebih kecil", "Karena browser melarang skrip di head", "Supaya CSS tidak dipakai"],
    "Kalau skrip jalan sebelum elemennya dibuat, querySelector mengembalikan null lalu muncul error \"Cannot read properties of null\".",
    ["Ukuran tidak berubah.", "Skrip di head boleh, asal defer.", "Tidak terkait CSS."]),
  M("dom", 2, "Membaca angka dari <input id=\"qty\"> dengan benar:", ["Number(document.querySelector(\"#qty\").value)", "document.querySelector(\"#qty\").value (langsung angka)", "document.querySelector(\"#qty\").textContent", "document.qty"],
    "value selalu teks. Tanpa Number(), \"2\" + 1 menjadi \"21\".",
    ["value berupa teks.", "Input tidak memakai textContent.", "Bukan cara yang benar."]),
  M("dom", 2, "Langkah membuat elemen baru dan memasangnya ke daftar:", ["const li = document.createElement(\"li\"); li.textContent = \"Kopi\"; ul.append(li);", "ul.innerHTML = \"li\"", "document.write(\"li\")", "new Element(\"li\")"],
    "createElement membuat, textContent mengisi, append memasang ke halaman.",
    ["Itu mengganti seluruh isi dengan teks li.", "document.write cara lama yang merusak halaman.", "Bukan cara DOM."]),
  M("dom", 2, "Kode ini mencegah apa?", ["Halaman dimuat ulang saat form dikirim, sehingga data bisa diolah dengan JavaScript", "Form diisi", "Tombol diklik", "Error"],
    "Bawaan form adalah mengirim lalu memuat ulang halaman. preventDefault membatalkannya.",
    ["Form tetap bisa diisi.", "Tombol tetap bisa diklik.", "Bukan untuk error."],
    'form.addEventListener("submit", e => {\n  e.preventDefault();\n  // olah data di sini\n});'),
  M("dom", 2, "Mengubah gaya lewat JavaScript yang paling rapi:", ["Menambah/menghapus class yang gayanya ditulis di CSS (classList.add/remove)", "Menulis el.style untuk setiap properti di semua tempat", "Mengganti file CSS", "Memakai innerHTML berisi <style>"],
    "Gaya tetap di CSS, JavaScript hanya mengganti class. Lebih mudah dirawat.",
    ["Bisa, tapi berantakan bila banyak.", "Tidak perlu mengganti file.", "Cara yang tidak rapi."]),
  M("dom", 2, "Atribut data-* (misalnya data-id=\"7\") dibaca di JavaScript dengan:", ["el.dataset.id", "el.data-id", "el.getData(\"id\")", "el.id"],
    "Semua atribut data-* tersedia di objek dataset. data-harga-asli menjadi dataset.hargaAsli.",
    ["Tanda minus tidak boleh di nama properti.", "Method itu tidak ada.", "el.id membaca atribut id."]),
  M("dom", 2, "Pesan error \"Cannot read properties of null (reading 'addEventListener')\" biasanya berarti:", ["querySelector tidak menemukan elemen (selektor salah atau skrip jalan terlalu awal)", "addEventListener salah ketik", "Browser terlalu lama", "CSS rusak"],
    "Cek ejaan selektor (titik/#) dan pastikan skrip memakai defer.",
    ["Error terjadi sebelum addEventListener dipanggil.", "Bukan soal waktu muat.", "CSS tidak terkait."]),
  M("dom", 3, "Kenapa lebih baik memasang satu listener di <ul> daripada satu listener per <li>?", ["Event delegation: lebih hemat dan tetap bekerja untuk li yang ditambahkan belakangan", "Karena li tidak bisa diberi listener", "Karena ul lebih cepat diklik", "Tidak ada bedanya"],
    "Klik pada li menggelembung (bubbling) ke ul. Di sana cek e.target.closest(\"li\").",
    ["li bisa diberi listener, hanya tidak efisien.", "Bukan soal kecepatan klik.", "Ada keuntungan nyata."]),
  M("dom", 1, "Event yang terjadi saat isi kolom input berubah ketika diketik:", ["input", "click", "load", "submit"],
    "input menyala setiap kali isi berubah, cocok untuk pencarian langsung.",
    ["click untuk klik.", "load saat halaman selesai dimuat.", "submit saat form dikirim."]),
  M("dom", 2, "Menyimpan pilihan tema supaya tetap ada setelah halaman ditutup:", ["localStorage.setItem(\"tema\", \"gelap\")", "let tema = \"gelap\"", "document.tema = \"gelap\"", "console.log(\"gelap\")"],
    "Variabel hilang saat halaman ditutup. localStorage menyimpan teks di browser.",
    ["Variabel hilang saat ditutup.", "Tidak tersimpan.", "Hanya menampilkan."]),
  I("dom", 1, "Method untuk memasang pendengar kejadian: el.____(\"click\", fungsi)", ["addeventlistener"], "addEventListener menghubungkan event dengan fungsi."),

  // ---- async (+16) ----
  O("async", 1, 'console.log("A");\nsetTimeout(() => console.log("B"), 0);\nconsole.log("C");', ["A\nC\nB", "A\nB\nC", "B\nA\nC", "A\nC"],
    "setTimeout menitipkan fungsi untuk dijalankan NANTI, setelah kode biasa selesai, walau waktunya 0 ms.",
    ["Kode biasa selesai dulu.", "setTimeout tidak dijalankan duluan.", "B tetap dijalankan."]),
  O("async", 2, 'console.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");', ["1\n4\n3\n2", "1\n2\n3\n4", "1\n4\n2\n3", "1\n3\n4\n2"],
    "Urutan: kode biasa (1, 4) → antrean Promise/microtask (3) → antrean timer (2).",
    ["Kode biasa duluan.", "Promise lebih dulu dari setTimeout.", "4 adalah kode biasa."]),
  O("async", 1, 'const p = new Promise(resolve => resolve(5));\np.then(n => console.log(n * 2));', ["10", "5", "Promise", "undefined"],
    "resolve(5) memenuhi janji dengan nilai 5. then menerima nilai itu.",
    ["Nilai dikali 2.", "Yang dicetak hasil then.", "then menerima nilai, bukan undefined."]),
  O("async", 2, 'Promise.resolve(2)\n  .then(n => n + 3)\n  .then(n => n * 10)\n  .then(n => console.log(n));', ["50", "23", "5", "2"],
    "Setiap then menerima hasil then sebelumnya. 2 → 5 → 50.",
    ["Tambah dulu baru kali.", "Masih ada * 10.", "Nilai berubah di setiap then."]),
  O("async", 2, 'Promise.reject(new Error("gagal"))\n  .then(() => console.log("sukses"))\n  .catch(e => console.log("ditangkap:", e.message));', ["ditangkap: gagal", "sukses", "gagal", "Error"],
    "Janji yang gagal melewati then dan langsung ke catch.",
    ["then dilewati saat gagal.", "Format log ada awalan.", "Error sudah ditangkap."]),
  O("async", 2, 'async function ambil() {\n  return 7;\n}\nambil().then(n => console.log(n));\nconsole.log("dulu");', ["dulu\n7", "7\ndulu", "Promise\ndulu", "7"],
    "Fungsi async selalu mengembalikan Promise. Nilainya baru dibaca di then, setelah kode biasa selesai.",
    ["then menunggu kode biasa selesai.", "Yang dicetak nilainya.", "Ada dua log."]),
  O("async", 2, 'const tunggu = ms => new Promise(r => setTimeout(r, ms));\nasync function main() {\n  console.log("mulai");\n  await tunggu(10);\n  console.log("selesai");\n}\nmain();\nconsole.log("sambil");', ["mulai\nsambil\nselesai", "mulai\nselesai\nsambil", "sambil\nmulai\nselesai", "mulai\nsambil"],
    "await menghentikan sementara FUNGSI itu saja, bukan seluruh program. Kode di luar (sambil) jalan dulu.",
    ["await tidak menahan kode di luar fungsi.", "main dipanggil sebelum log sambil.", "selesai tetap tercetak setelah menunggu."]),
  O("async", 2, 'async function main() {\n  try {\n    await Promise.reject(new Error("koneksi putus"));\n  } catch (e) {\n    console.log("Gagal:", e.message);\n  }\n}\nmain();', ["Gagal: koneksi putus", "koneksi putus", "Error", "undefined"],
    "Dengan async/await, error Promise ditangkap memakai try/catch biasa.",
    ["Ada awalan Gagal:.", "Error sudah ditangkap.", "Pesan error dicetak."]),
  O("async", 3, 'const a = new Promise(r => setTimeout(() => r("A"), 30));\nconst b = new Promise(r => setTimeout(() => r("B"), 10));\nPromise.all([a, b]).then(h => console.log(h.join(",")));', ["A,B", "B,A", "A", "B"],
    "Promise.all menunggu SEMUA selesai, dan urutan hasilnya mengikuti urutan array, bukan urutan selesai.",
    ["Urutan hasil mengikuti array.", "Menunggu semua.", "Menunggu semua."]),
  O("async", 3, 'const a = new Promise(r => setTimeout(() => r("lambat"), 30));\nconst b = new Promise(r => setTimeout(() => r("cepat"), 10));\nPromise.race([a, b]).then(h => console.log(h));', ["cepat", "lambat", "cepat,lambat", "undefined"],
    "Promise.race memberi hasil yang paling DULU selesai.",
    ["b selesai lebih dulu.", "race hanya mengambil satu.", "race memberi nilai."]),
  O("async", 2, 'const data = { nama: "Ani", nilai: [90, 85] };\nconst teks = JSON.stringify(data);\nconst balik = JSON.parse(teks);\nconsole.log(typeof teks, balik.nilai[1]);', ["string 85", "object 85", "string 90", "object 90"],
    "JSON.stringify mengubah objek jadi TEKS (untuk dikirim/disimpan). JSON.parse mengembalikannya jadi objek.",
    ["Hasil stringify adalah teks.", "Indeks 1 adalah 85.", "Indeks 1 adalah 85."]),
  M("async", 1, "Kenapa fetch() (mengambil data dari server) dibuat asinkron?", ["Supaya halaman tidak macet selama menunggu jawaban server", "Supaya data lebih kecil", "Karena server menolak sinkron", "Supaya tidak butuh internet"],
    "Menunggu server bisa beberapa detik. Selama itu pengguna tetap bisa menggulir dan mengklik.",
    ["Ukuran data tidak berubah.", "Bukan aturan server.", "Tetap butuh internet."]),
  M("async", 2, "Pola fetch yang benar untuk membaca data JSON:", ["const res = await fetch(url); const data = await res.json();", "const data = fetch(url).json;", "const data = JSON.parse(fetch(url));", "fetch(url) langsung memberi objek"],
    "fetch memberi Promise berisi Response. res.json() juga Promise, jadi perlu await kedua.",
    ["fetch tidak langsung memberi data.", "fetch tidak memberi teks.", "Perlu dua langkah."]),
  M("async", 2, "Kenapa res.ok perlu dicek setelah fetch?", ["fetch tidak menolak (reject) untuk status 404/500, jadi status gagal harus dicek sendiri", "Supaya lebih cepat", "Karena res.ok wajib", "Untuk mengubah JSON"],
    "fetch hanya gagal untuk masalah jaringan. if (!res.ok) throw new Error(\"HTTP \" + res.status).",
    ["Tidak terkait kecepatan.", "Tidak wajib, tapi penting.", "Tidak mengubah JSON."]),
  M("async", 2, "localStorage hanya bisa menyimpan teks. Cara menyimpan array keranjang:", ["localStorage.setItem(\"keranjang\", JSON.stringify(keranjang))", "localStorage.setItem(\"keranjang\", keranjang)", "localStorage.keranjang = [] langsung", "Tidak bisa"],
    "Simpan dengan JSON.stringify, baca kembali dengan JSON.parse(localStorage.getItem(\"keranjang\")).",
    ["Array jadi teks \"1,2\" yang rusak strukturnya.", "Disimpan sebagai teks yang rusak strukturnya.", "Bisa, dengan JSON."]),
  I("async", 1, "Kata kunci untuk menunggu Promise di dalam fungsi async: ____ fetch(url)", ["await"], "await menunggu Promise selesai."),

  // ---- modern (+16) ----
  O("modern", 1, 'const [a, b] = [10, 20];\nconsole.log(a + b);', ["30", "1020", "10", "Error"],
    "Destructuring array mengambil isi berdasarkan URUTAN.",
    ["Angka dijumlah.", "b juga diambil.", "Sintaks ini sah."]),
  O("modern", 1, 'let x = 1, y = 2;\n[x, y] = [y, x];\nconsole.log(x, y);', ["2 1", "1 2", "2 2", "Error"],
    "Menukar dua variabel dengan destructuring dalam satu baris.",
    ["Nilainya sudah ditukar.", "Ditukar bersamaan.", "Sintaks ini sah."]),
  O("modern", 1, 'const nama = "Kopi";\nconst harga = 18000;\nconst p = { nama, harga };\nconsole.log(JSON.stringify(p));', ["{\"nama\":\"Kopi\",\"harga\":18000}", "{\"p\":\"Kopi\"}", "[\"Kopi\",18000]", "Error"],
    "Singkatan properti: { nama } sama dengan { nama: nama }.",
    ["Kunci memakai nama variabel.", "Hasilnya objek, bukan array.", "Sintaks ini sah."]),
  O("modern", 2, 'const [pertama, ...sisa] = [5, 6, 7, 8];\nconsole.log(pertama, sisa.join(","));', ["5 6,7,8", "5 8", "5,6 7,8", "Error"],
    "...sisa mengumpulkan semua isi setelah yang pertama.",
    ["sisa berisi semua setelah pertama.", "pertama hanya satu nilai.", "Sintaks ini sah."]),
  O("modern", 2, 'const a = [1, 2];\nconst b = [3];\nconsole.log([...a, ...b, 4].join(","));', ["1,2,3,4", "1,2,3", "[1,2],[3],4", "Error"],
    "Spread membongkar isi array ke dalam array baru.",
    ["4 juga ditambahkan.", "Isi dibongkar, tidak dibungkus.", "Sintaks ini sah."]),
  O("modern", 2, 'console.log(Math.max(...[4, 9, 2]));', ["9", "NaN", "4", "Error"],
    "Math.max menerima angka satu per satu, bukan array. Spread membongkar array menjadi argumen terpisah.",
    ["Dengan spread hasilnya angka.", "Yang dicari terbesar.", "Sintaks ini sah."]),
  O("modern", 2, 'const user = { profil: { kota: "Batam" } };\nconsole.log(user.profil?.kota, user.alamat?.jalan);', ["Batam undefined", "Batam Error", "undefined undefined", "Error"],
    "?. (optional chaining) berhenti dengan undefined bila sebelah kirinya null/undefined, tanpa error.",
    ["?. mencegah error.", "kota ada isinya.", "?. mencegah error."]),
  O("modern", 2, 'const cfg = { diskon: 0 };\nconsole.log(cfg.diskon ?? 10, cfg.pajak ?? 11);', ["0 11", "10 11", "0 undefined", "10 10"],
    "?? hanya mengganti null/undefined. diskon 0 tetap 0; pajak tidak ada → 11.",
    ["?? menjaga angka 0.", "pajak tidak ada, jadi pakai cadangan.", "diskon ada isinya."]),
  O("modern", 2, 'const k = "warna";\nconst o = { [k]: "biru", [k + "2"]: "hijau" };\nconsole.log(Object.keys(o).join(","));', ["warna,warna2", "k,k2", "biru,hijau", "Error"],
    "Kurung siku di posisi kunci = computed property: nama kunci diambil dari nilai ekspresi.",
    ["Kunci memakai isi variabel k.", "keys memberi kunci, bukan nilai.", "Sintaks ini sah."]),
  O("modern", 2, 'const angka = [1, 2, 3, 4];\nconsole.log(angka.some(n => n > 3), angka.every(n => n > 0));', ["true true", "true false", "false true", "false false"],
    "some = adakah satu yang lolos? every = semuanya lolos?",
    ["Semua angka > 0.", "4 > 3.", "Keduanya benar."]),
  O("modern", 2, 'console.log([[1, 2], [3, [4]]].flat(2).join(","));', ["1,2,3,4", "1,2,3,4,", "1,2,3", "Error"],
    "flat(kedalaman) meratakan array bersarang. Kedalaman 2 meratakan sampai [4].",
    ["Hasilnya rapi.", "4 juga diratakan.", "flat adalah method bawaan."]),
  O("modern", 2, 'const nama = ["ani", "budi"];\nconsole.log(nama.map((n, i) => `${i + 1}. ${n[0].toUpperCase()}${n.slice(1)}`).join(" | "));', ["1. Ani | 2. Budi", "0. Ani | 1. Budi", "1. ANI | 2. BUDI", "1. ani | 2. budi"],
    "map juga memberi indeks i. Huruf pertama dibesarkan, sisanya disambung.",
    ["Nomor dimulai i + 1.", "Hanya huruf pertama yang dibesarkan.", "Huruf pertama dibesarkan."]),
  O("modern", 3, 'const data = [{ k: "a", v: 1 }, { k: "b", v: 2 }];\nconst obj = Object.fromEntries(data.map(({ k, v }) => [k, v * 10]));\nconsole.log(JSON.stringify(obj));', ["{\"a\":10,\"b\":20}", "[[\"a\",10],[\"b\",20]]", "{\"k\":\"b\",\"v\":20}", "Error"],
    "map menghasilkan pasangan [kunci, nilai], lalu Object.fromEntries menyusunnya jadi objek.",
    ["fromEntries menyusun objek.", "Setiap pasangan jadi properti.", "Sintaks ini sah."]),
  M("modern", 1, "Fitur ES6+ mana yang paling tepat untuk menyalin objek lalu mengubah satu properti?", ["{ ...objek, harga: 20000 }", "Object.freeze(objek)", "objek.harga = 20000 (mengubah aslinya)", "JSON.parse(objek)"],
    "Spread membuat salinan dangkal lalu properti setelahnya menimpa. Pola ini dipakai di React untuk memperbarui state.",
    ["freeze mengunci, tidak menyalin.", "Itu mengubah objek asli.", "JSON.parse untuk teks."]),
  M("modern", 2, "Arti tanda ... pada dua posisi berbeda:", ["Di parameter/kiri = rest (mengumpulkan); di pemanggilan/kanan = spread (membongkar)", "Selalu membongkar", "Selalu mengumpulkan", "Hanya untuk teks"],
    "function f(...args) mengumpulkan. f(...arr) membongkar. Tandanya sama, arahnya berlawanan.",
    ["Di parameter justru mengumpulkan.", "Saat memanggil justru membongkar.", "Berlaku untuk array/objek."]),
  I("modern", 2, "Operator untuk membaca properti tanpa error bila objeknya kosong: user____alamat", ["?."], "?. optional chaining."),

  // ---- kasus (+14) ----
  O("kasus", 1, 'const a = [3, 1, 2];\nconst b = a.sort();\nconsole.log(a === b, a.join(""));', ["true 123", "false 123", "true 312", "false 312"],
    "sort mengubah array asli DAN mengembalikan array yang sama. a dan b menunjuk satu array.",
    ["Keduanya array yang sama.", "Array sudah terurut.", "sort mengubah aslinya."]),
  O("kasus", 2, 'console.log([1, 2, 3] + [4]);', ["1,2,34", "[1,2,3,4]", "10", "Error"],
    "Array + array diubah dulu jadi teks (\"1,2,3\" dan \"4\") lalu disambung. Gabungkan array dengan spread atau concat.",
    ["+ mengubah array jadi teks.", "Tidak dijumlah.", "JavaScript tidak error, tapi menyambung."]),
  O("kasus", 2, 'console.log([] == false, [0] == false, null == 0);', ["true true false", "false false false", "true false true", "true true true"],
    "== mengubah tipe dengan aturan rumit: [] jadi \"\" jadi 0, [0] jadi \"0\" jadi 0. null hanya == undefined. Pelajaran: pakai ===.",
    ["[0] juga dianggap 0 oleh ==.", "null tidak sama dengan 0.", "null == 0 itu false."]),
  O("kasus", 2, 'console.log(NaN === NaN, Number.isNaN(NaN));', ["false true", "true true", "false false", "true false"],
    "NaN tidak sama dengan apa pun, termasuk dirinya. Cek dengan Number.isNaN.",
    ["NaN tidak sama dengan dirinya.", "isNaN memberi true.", "Urutannya terbalik."]),
  O("kasus", 2, 'const o = { n: 1 };\nfunction ubah(x) { x.n = 99; }\nubah(o);\nconsole.log(o.n);', ["99", "1", "undefined", "Error"],
    "Objek dikirim ke fungsi sebagai rujukan ke objek yang sama, jadi perubahan propertinya terlihat di luar.",
    ["Objek yang sama diubah.", "Properti sudah ada.", "Sintaks ini sah."]),
  O("kasus", 2, 'let n = 1;\nfunction ubah(x) { x = 99; }\nubah(n);\nconsole.log(n);', ["1", "99", "undefined", "Error"],
    "Angka dikirim sebagai salinan nilai. Mengganti x tidak menyentuh n.",
    ["Angka tidak berubah di luar.", "n sudah 1.", "Sintaks ini sah."]),
  O("kasus", 2, 'console.log(typeof [], Array.isArray([]));', ["object true", "array true", "object false", "array false"],
    "typeof array adalah \"object\". Untuk memastikan array, pakai Array.isArray.",
    ["typeof tidak mengenal array.", "isArray memberi true.", "typeof memberi object."]),
  O("kasus", 2, 'const f = () => {};\nconsole.log(typeof f, typeof f());', ["function undefined", "object undefined", "function object", "undefined function"],
    "typeof fungsi adalah \"function\". Fungsi kosong mengembalikan undefined.",
    ["Fungsi punya typeof sendiri.", "Isi fungsi kosong.", "Urutannya terbalik."]),
  O("kasus", 3, 'const fns = [];\nfor (let i = 0; i < 3; i++) fns.push(() => i);\nconsole.log(fns.map(f => f()).join(","));', ["0,1,2", "3,3,3", "2,2,2", "Error"],
    "let membuat i baru di setiap putaran, jadi setiap fungsi mengingat i miliknya sendiri. (Dengan var, hasilnya 3,3,3.)",
    ["Itu hasil bila memakai var.", "let menyimpan per putaran.", "Sintaks ini sah."]),
  O("kasus", 3, 'const fns = [];\nfor (var i = 0; i < 3; i++) fns.push(() => i);\nconsole.log(fns.map(f => f()).join(","));', ["3,3,3", "0,1,2", "2,2,2", "Error"],
    "var hanya punya satu i untuk seluruh loop. Saat fungsi dipanggil, loop sudah selesai dan i = 3.",
    ["Itu hasil bila memakai let.", "Loop berhenti saat i = 3.", "Sintaks ini sah."]),
  O("kasus", 3, 'console.log(["10", "10", "10"].map(parseInt).join(","));', ["10,NaN,2", "10,10,10", "NaN,NaN,NaN", "10,2,NaN"],
    "Jebakan terkenal: map mengirim (nilai, indeks). parseInt menerima indeks sebagai basis bilangan: basis 0 → biasa (10), basis 1 → NaN, basis 2 → \"10\" biner = 2. Pakai map(Number) atau map(s => parseInt(s)).",
    ["map mengirim indeks juga.", "Basis 1 tidak sah, hasilnya NaN.", "Urutan mengikuti indeks."]),
  M("kasus", 1, "Langkah paling ampuh menebak output kode JavaScript yang rumit:", ["Telusuri baris demi baris, catat nilai variabel, dan ingat aturan tipe (+ menyambung teks, == mengubah tipe)", "Menebak dari bentuk kode", "Menghafal jawaban", "Langsung menyerah"],
    "Kebanyakan soal output JavaScript menguji tiga hal: urutan async, konversi tipe, dan rujukan objek/array.",
    ["Menebak sering salah.", "Soal baru tidak bisa dihafal.", "Telusuri pelan-pelan."]),
  M("kasus", 2, "Bug: total keranjang tampil \"1800012000\". Penyebab paling mungkin:", ["Harga diambil dari input/teks lalu dijumlah dengan + tanpa Number()", "Rumus perkalian salah", "Array kosong", "CSS salah"],
    "Teks + teks disambung. Ubah dulu: Number(input.value).",
    ["Ciri khas penyambungan teks.", "Array berisi data.", "Bukan CSS."]),
  I("kasus", 2, "Method untuk memastikan sebuah nilai adalah array: Array.____(x)", ["isarray"], "Array.isArray(x)."),
  );

  dalami("strobj", `
<h4>Teks tidak bisa diubah, objek bisa</h4>
<p>Method teks (<code>trim</code>, <code>toUpperCase</code>, <code>replace</code>) selalu menghasilkan teks <b>baru</b>. Simpan hasilnya: <code>nama = nama.trim()</code>. Objek sebaliknya bisa diubah langsung: tambah, ganti, dan hapus properti.</p>
<h4>Method teks yang paling sering dipakai</h4>
<table class="mini-pivot"><tr><th>Method</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>trim()</code></td><td><code>"  hai ".trim()</code></td><td>"hai"</td></tr>
<tr><td><code>toLowerCase()</code></td><td><code>"HAI".toLowerCase()</code></td><td>"hai"</td></tr>
<tr><td><code>includes(x)</code></td><td><code>"kopi susu".includes("susu")</code></td><td>true</td></tr>
<tr><td><code>startsWith / endsWith</code></td><td><code>"a.pdf".endsWith(".pdf")</code></td><td>true</td></tr>
<tr><td><code>slice(a, b)</code></td><td><code>"Python".slice(0, 2)</code></td><td>"Py"</td></tr>
<tr><td><code>split(x)</code></td><td><code>"a,b".split(",")</code></td><td>["a", "b"]</td></tr>
<tr><td><code>replaceAll(a, b)</code></td><td><code>"1.000.000".replaceAll(".", "")</code></td><td>"1000000"</td></tr>
<tr><td><code>padStart(n, x)</code></td><td><code>"7".padStart(3, "0")</code></td><td>"007"</td></tr>
<tr><td><code>at(-1)</code></td><td><code>"abc".at(-1)</code></td><td>"c"</td></tr></table>
<h4>Objek = kartu data berlabel</h4>
<pre><code>const produk = { nama: "Kopi", harga: 18000 };
produk.harga          // 18000  baca
produk.stok = 5       // tambah
produk.harga = 20000  // ganti
delete produk.stok    // hapus
"nama" in produk      // true   ada kuncinya?</code></pre>
<h4>Destructuring: ambil beberapa properti sekaligus</h4>
<pre><code>const { nama, harga } = produk;               // sama dengan dua baris biasa
const { nama: n, diskon = 0 } = produk;       // ganti nama + nilai bawaan
function cetak({ nama, harga }) { ... }       // langsung di parameter</code></pre>
<h4>Mengulang isi objek</h4>
<pre><code>Object.keys(produk)     // ["nama", "harga"]
Object.values(produk)   // ["Kopi", 20000]
Object.entries(produk)  // [["nama", "Kopi"], ["harga", 20000]]
for (const [k, v] of Object.entries(produk)) console.log(k, v);</code></pre>
<div class="praktik"><b>Coba sendiri:</b> dari <code>const email = "  Rina.Putri@Gmail.com "</code>, rapikan menjadi huruf kecil tanpa spasi, pecah dengan <code>split("@")</code>, lalu buat objek <code>{ pengguna, domain }</code> memakai singkatan properti.</div>`);

  dalami("dom", `
<h4>Resep tiga langkah: temukan, ubah, dengarkan</h4>
<pre><code>// 1) temukan
const tombol = document.querySelector("#tambah");
const daftar = document.querySelector("#daftar");
const input  = document.querySelector("#nama-barang");

// 2) dengarkan
tombol.addEventListener("click", () =&gt; {
  const teks = input.value.trim();
  if (!teks) return;                       // jangan tambah yang kosong

  // 3) ubah
  const li = document.createElement("li");
  li.textContent = teks;                   // aman dari HTML sisipan
  daftar.append(li);
  input.value = "";
});</code></pre>
<h4>Selektor CSS di JavaScript</h4>
<table class="mini-pivot"><tr><th>Tulis</th><th>Mencari</th></tr>
<tr><td><code>"#menu"</code></td><td>elemen dengan id="menu"</td></tr>
<tr><td><code>".kartu"</code></td><td>elemen dengan class="kartu"</td></tr>
<tr><td><code>"button"</code></td><td>tag button</td></tr>
<tr><td><code>"#daftar li"</code></td><td>li di dalam #daftar</td></tr>
<tr><td><code>"[data-id='7']"</code></td><td>elemen dengan atribut data-id 7</td></tr></table>
<h4>Membaca dan mengubah</h4>
<table class="mini-pivot"><tr><th>Ingin</th><th>Pakai</th></tr>
<tr><td>isi teks</td><td><code>el.textContent</code></td></tr>
<tr><td>isi kolom input</td><td><code>input.value</code> (selalu teks)</td></tr>
<tr><td>centang checkbox</td><td><code>cb.checked</code></td></tr>
<tr><td>tampilan</td><td><code>el.classList.add / remove / toggle</code></td></tr>
<tr><td>atribut</td><td><code>el.setAttribute("href", url)</code>, <code>el.dataset.id</code></td></tr>
<tr><td>sembunyikan</td><td><code>el.hidden = true</code></td></tr></table>
<h4>Tiga error DOM yang paling sering</h4>
<ul><li><b>null</b>: selektor salah ketik (lupa titik/#) atau skrip jalan sebelum HTML dimuat. Pakai <code>&lt;script defer&gt;</code>.</li><li><b>Angka jadi teks</b>: lupa <code>Number(input.value)</code>.</li><li><b>Halaman memuat ulang</b>: lupa <code>e.preventDefault()</code> di event submit.</li></ul>
<div class="praktik"><b>Coba sendiri</b> (Code Runner → HTML · CSS · JS): buat input, tombol, dan &lt;ul&gt;. Setiap klik menambah barang ke daftar, dan klik pada barang menghapusnya (pakai satu listener di &lt;ul&gt;).</div>`);

  dalami("async", `
<h4>Analogi restoran</h4>
<p>Kamu memesan makanan (memanggil <code>fetch</code>), lalu mendapat <b>nomor antrean</b> (Promise). Kamu tidak berdiri diam di kasir; kamu duduk dan mengobrol (kode lain tetap jalan). Saat nomor dipanggil, kamu mengambil makanan (<code>then</code> atau <code>await</code>). Kalau dapur kehabisan bahan, kamu diberi tahu (<code>catch</code>).</p>
<h4>Urutan eksekusi (event loop) dalam satu tabel</h4>
<table class="mini-pivot"><tr><th>Urutan</th><th>Jenis kode</th><th>Contoh</th></tr>
<tr><td>1</td><td>kode biasa, baris per baris</td><td><code>console.log</code></td></tr>
<tr><td>2</td><td>antrean mikro (Promise)</td><td><code>.then</code>, lanjutan setelah <code>await</code></td></tr>
<tr><td>3</td><td>antrean timer/event</td><td><code>setTimeout</code>, klik</td></tr></table>
<h4>then vs async/await: hasilnya sama</h4>
<pre><code>// gaya then
fetch("/api/produk")
  .then(res =&gt; res.json())
  .then(data =&gt; console.log(data))
  .catch(err =&gt; console.log("gagal", err));

// gaya async/await (lebih mudah dibaca)
async function muat() {
  try {
    const res = await fetch("/api/produk");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("gagal", err.message);
  }
}</code></pre>
<h4>Menunggu beberapa sekaligus</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Selesai saat</th><th>Kalau satu gagal</th></tr>
<tr><td><code>Promise.all</code></td><td>semua selesai</td><td>langsung gagal</td></tr>
<tr><td><code>Promise.allSettled</code></td><td>semua selesai</td><td>tetap lanjut, tiap hasil diberi status</td></tr>
<tr><td><code>Promise.race</code></td><td>yang pertama selesai</td><td>ikut hasil yang pertama</td></tr></table>
<h4>localStorage + JSON</h4>
<pre><code>const simpan = data =&gt; localStorage.setItem("keranjang", JSON.stringify(data));
const muatKeranjang = () =&gt; JSON.parse(localStorage.getItem("keranjang")) ?? [];</code></pre>
<div class="praktik"><b>Coba sendiri:</b> tebak dulu urutan output kode yang berisi console.log, setTimeout 0, dan Promise.resolve().then, lalu jalankan di Console untuk mengeceknya.</div>`);

  dalami("modern", `
<h4>Kamus singkatan JavaScript modern</h4>
<table class="mini-pivot"><tr><th>Singkatan</th><th>Versi panjang</th></tr>
<tr><td><code>const { a, b } = obj</code></td><td><code>const a = obj.a; const b = obj.b;</code></td></tr>
<tr><td><code>const [x, y] = arr</code></td><td><code>const x = arr[0]; const y = arr[1];</code></td></tr>
<tr><td><code>{ nama, harga }</code></td><td><code>{ nama: nama, harga: harga }</code></td></tr>
<tr><td><code>[...a, ...b]</code></td><td><code>a.concat(b)</code></td></tr>
<tr><td><code>{ ...o, harga: 1 }</code></td><td>salin o lalu ganti harga</td></tr>
<tr><td><code>x =&gt; x * 2</code></td><td><code>function (x) { return x * 2; }</code></td></tr>
<tr><td><code>user?.alamat?.kota</code></td><td><code>user &amp;&amp; user.alamat &amp;&amp; user.alamat.kota</code></td></tr>
<tr><td><code>x ?? 10</code></td><td><code>(x === null || x === undefined) ? 10 : x</code></td></tr>
<tr><td><code>a ||= 5</code></td><td><code>a = a || 5</code></td></tr>
<tr><td><code>{ [k]: v }</code></td><td>kunci diambil dari isi variabel k</td></tr></table>
<h4>Rest vs spread: tanda sama, arah berlawanan</h4>
<pre><code>function total(...angka) { }      // REST: kumpulkan argumen jadi array
total(...[1, 2, 3]);              // SPREAD: bongkar array jadi argumen
const [pertama, ...sisa] = arr;   // REST di kiri tanda =
const salin = [...arr];           // SPREAD di kanan tanda =</code></pre>
<h4>Spread menyalin dangkal</h4>
<pre><code>const a = { info: { kota: "Batam" } };
const b = { ...a };
b.info.kota = "Medan";
console.log(a.info.kota);   // "Medan" ← objek di dalamnya masih dipakai bersama</code></pre>
<p>Untuk salinan penuh data sederhana: <code>structuredClone(a)</code>.</p>
<h4>Pola sehari-hari</h4>
<pre><code>// mengubah satu item di daftar tanpa mengubah aslinya (pola React)
const baru = produk.map(p =&gt; p.id === 2 ? { ...p, stok: p.stok - 1 } : p);

// mengelompokkan
const perKategori = Object.groupBy(produk, p =&gt; p.kategori);   // browser baru</code></pre>
<div class="praktik"><b>Coba sendiri:</b> tulis ulang kode lamamu yang memakai <code>obj.a</code>, <code>obj.b</code> berulang kali dengan destructuring, lalu ubah satu loop for yang mengisi array baru menjadi <code>map</code>/<code>filter</code>.</div>`);

  dalami("kasus", `
<h4>Tiga sumber jebakan soal output JavaScript</h4>
<ol><li><b>Konversi tipe</b>: <code>+</code> dengan teks menyambung, <code>==</code> mengubah tipe, <code>sort()</code> bawaan mengurutkan sebagai teks.</li><li><b>Rujukan (reference)</b>: array dan objek yang "disalin" dengan <code>=</code> masih satu benda yang sama.</li><li><b>Waktu (async)</b>: kode biasa → Promise → setTimeout.</li></ol>
<h4>Tabel jebakan cepat</h4>
<table class="mini-pivot"><tr><th>Kode</th><th>Hasil</th><th>Ingat</th></tr>
<tr><td><code>"5" + 1</code></td><td>"51"</td><td>ada teks → sambung</td></tr>
<tr><td><code>"5" - 1</code></td><td>4</td><td>- selalu angka</td></tr>
<tr><td><code>[10, 9, 1].sort()</code></td><td>[1, 10, 9]</td><td>pakai <code>(a, b) =&gt; a - b</code></td></tr>
<tr><td><code>0.1 + 0.2</code></td><td>0.30000000000000004</td><td>bulatkan untuk uang</td></tr>
<tr><td><code>typeof null</code></td><td>"object"</td><td>cek <code>x === null</code></td></tr>
<tr><td><code>typeof []</code></td><td>"object"</td><td>cek <code>Array.isArray</code></td></tr>
<tr><td><code>NaN === NaN</code></td><td>false</td><td>cek <code>Number.isNaN</code></td></tr>
<tr><td><code>[] + []</code></td><td>""</td><td>array jadi teks</td></tr>
<tr><td><code>if ([])</code></td><td>jalan</td><td>array kosong truthy</td></tr>
<tr><td><code>["1","2"].map(parseInt)</code></td><td>[1, NaN]</td><td>pakai <code>map(Number)</code></td></tr></table>
<h4>let vs var di dalam loop dengan fungsi</h4>
<pre><code>for (var i = 0; i &lt; 3; i++) setTimeout(() =&gt; console.log(i));   // 3 3 3
for (let j = 0; j &lt; 3; j++) setTimeout(() =&gt; console.log(j));   // 0 1 2</code></pre>
<p><code>let</code> membuat variabel baru di setiap putaran, <code>var</code> hanya satu untuk semua putaran.</p>
<div class="praktik"><b>Coba sendiri:</b> pilih tiga baris dari tabel jebakan, tebak hasilnya tanpa melihat, lalu cek di Console. Tulis alasan dengan kata-katamu sendiri untuk yang salah.</div>`);
})();
