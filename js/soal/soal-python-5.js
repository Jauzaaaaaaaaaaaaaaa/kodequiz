// ============ PYTHON — tambahan 2x lipat (bagian 2): loop, list, koleksi, fungsi ============
// Pola sama dengan soal-python-4.js.
(function () {
  const O = (k, lv, kode, o, e, w) => ({ k, t: "mc", lv, q: "Output kode ini:", kode, o, a: 0, vr: "py", e, ...(w ? { w: [null, ...w] } : {}) });
  const M = (k, lv, q, o, e, w) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_PYTHON.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_PYTHON.push(
  // ---- loop (+15) ----
  O("loop", 1, 'for i in range(4):\n    print(i)', ["0\n1\n2\n3", "1\n2\n3\n4", "0\n1\n2\n3\n4", "4"],
    "range(4) = 0, 1, 2, 3. Mulai dari 0 dan berhenti SEBELUM 4. Total tetap 4 putaran.",
    ["range mulai dari 0, bukan 1.", "Angka 4 tidak ikut.", "print ada di dalam loop, jadi jalan tiap putaran."]),
  O("loop", 1, 'for huruf in "abc":\n    print(huruf * 2)', ["aa\nbb\ncc", "abcabc", "a\nb\nc", "aabbcc"],
    "Loop mengambil satu huruf per putaran: a, lalu b, lalu c. Setiap huruf dikali 2 (diulang dua kali) lalu dicetak di baris sendiri.",
    ["Loop memproses satu huruf per putaran.", "Setiap huruf dikali 2.", "Setiap print pindah baris."]),
  O("loop", 1, 'total = 0\nfor n in [2, 4, 6]:\n    total += n\nprint(total)', ["12", "6", "246", "0"],
    "Pola akumulator: mulai dari 0, tiap putaran ditambah. 0+2=2, 2+4=6, 6+6=12. print di luar loop jadi hanya sekali, di akhir.",
    ["6 adalah angka terakhir saja.", "Angka dijumlah, bukan disambung.", "total sudah ditambah di dalam loop."]),
  O("loop", 1, 'for i in range(1, 4):\n    print("*" * i)', ["*\n**\n***", "***\n**\n*", "*\n*\n*", "******"],
    "i bernilai 1, 2, 3. \"*\" * i mencetak bintang sebanyak i. Hasilnya segitiga.",
    ["i naik, jadi bintang bertambah.", "Jumlah bintang mengikuti i.", "Setiap print pindah baris."]),
  O("loop", 2, 'for i in range(10, 0, -3):\n    print(i)', ["10\n7\n4\n1", "10\n7\n4", "1\n4\n7\n10", "10\n7\n4\n1\n-2"],
    "range(mulai, berhenti, langkah) dengan langkah -3 menghitung MUNDUR: 10, 7, 4, 1. Berhenti sebelum melewati 0.",
    ["1 masih lebih dari 0, jadi ikut.", "Langkah negatif berarti mundur.", "-2 sudah melewati batas 0."]),
  O("loop", 2, 'n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nprint("Mulai!")', ["3\n2\n1\nMulai!", "3\n2\n1\n0\nMulai!", "Mulai!", "2\n1\n0\nMulai!"],
    "Jejak: n=3 cetak, jadi 2; cetak 2, jadi 1; cetak 1, jadi 0. Saat n=0, syarat n > 0 salah, loop berhenti. Lalu Mulai! dicetak.",
    ["Saat n = 0 syarat sudah salah.", "Syarat awal 3 > 0 benar, jadi loop jalan.", "print dijalankan sebelum n dikurangi."]),
  O("loop", 2, 'for i in range(6):\n    if i % 2 == 0:\n        continue\n    print(i)', ["1\n3\n5", "0\n2\n4", "0\n1\n2\n3\n4\n5", "1\n3"],
    "continue = lewati sisa putaran ini. Angka genap (i % 2 == 0) dilewati sebelum print, jadi hanya ganjil yang tercetak.",
    ["Yang genap justru dilewati.", "continue melewati print untuk angka genap.", "5 juga ganjil dan ada di range(6)."]),
  O("loop", 2, 'for i in range(1, 10):\n    if i * i > 20:\n        print(i)\n        break', ["5", "4", "5\n6\n7\n8\n9", "25"],
    "break menghentikan loop di temuan PERTAMA. 4*4=16 belum, 5*5=25 > 20 → cetak 5 lalu berhenti.",
    ["4*4 = 16, belum lebih dari 20.", "break menghentikan loop setelah 5.", "Yang dicetak i, bukan i*i."]),
  O("loop", 2, 'hitung = 0\nfor h in "banana":\n    if h == "a":\n        hitung += 1\nprint(hitung)', ["3", "2", "6", "1"],
    "Loop mengecek tiap huruf b-a-n-a-n-a. Huruf a muncul 3 kali, tiap kali hitung bertambah 1.",
    ["Hitung ulang huruf a.", "6 adalah panjang kata.", "Penghitung naik setiap ketemu a."]),
  O("loop", 2, 'for i in range(2):\n    for j in range(2):\n        print(i, j)', ["0 0\n0 1\n1 0\n1 1", "0 0\n1 1", "0 1\n1 0", "0 0\n1 0\n0 1\n1 1"],
    "Loop dalam berjalan PENUH untuk setiap putaran loop luar. i=0: j=0,1. i=1: j=0,1. Total 4 baris.",
    ["Loop dalam jalan penuh, bukan sekali.", "Ada 4 kombinasi.", "j berganti lebih cepat daripada i."]),
  O("loop", 2, 'for no, buah in enumerate(["apel", "jeruk"], start=1):\n    print(no, buah)', ["1 apel\n2 jeruk", "0 apel\n1 jeruk", "apel 1\njeruk 2", "1\n2"],
    "enumerate memberi nomor urut DAN isinya. start=1 membuat nomor mulai dari 1, bukan 0.",
    ["start=1 menggeser nomor jadi mulai 1.", "Urutannya nomor dulu, lalu isi.", "Yang dicetak nomor dan nama buah."]),
  O("loop", 3, 'nama = ["Ani", "Budi"]\nnilai = [90, 80]\nfor n, v in zip(nama, nilai):\n    print(n, v)', ["Ani 90\nBudi 80", "Ani 80\nBudi 90", "Ani Budi\n90 80", "('Ani', 90)"],
    "zip memasangkan isi yang SEPOSISI dari dua list: (Ani, 90) lalu (Budi, 80).",
    ["Pasangannya sesuai posisi.", "zip menyusun per pasangan, bukan per list.", "Pasangan sudah dibongkar ke n dan v."]),
  M("loop", 1, "Kapan sebaiknya memakai while, bukan for?", ["Saat jumlah putaran belum diketahui, berhenti berdasarkan syarat", "Saat mengulang isi list", "Saat butuh range()", "Tidak ada bedanya sama sekali"],
    "for cocok untuk 'setiap isi' atau jumlah putaran yang sudah jelas. while cocok untuk 'terus selama ...', misalnya minta input sampai pengguna mengetik 'selesai'.",
    ["Untuk isi list, for lebih tepat.", "range dipakai bersama for.", "Keduanya punya kegunaan berbeda."]),
  M("loop", 2, "Kode while x < 5: print(x) (tanpa mengubah x, x awalnya 0) akan…", ["Berjalan selamanya (infinite loop)", "Mencetak 0 sampai 4", "Error", "Tidak mencetak apa pun"],
    "x tidak pernah berubah, jadi x < 5 selalu benar. Loop tidak pernah berhenti. Selalu pastikan isi while mengubah sesuatu yang dicek syaratnya.",
    ["x tidak pernah naik, jadi tidak berhenti di 4.", "Kodenya sah, hanya tidak berhenti.", "Syaratnya benar sejak awal."]),
  I("loop", 2, "Kata kunci untuk melewati sisa putaran dan lanjut ke putaran berikutnya: ____", ["continue"], "continue melompati sisa isi loop pada putaran itu."),

  // ---- list (+15) ----
  O("list", 1, 'buah = ["apel", "jeruk", "mangga"]\nprint(buah[1])', ["jeruk", "apel", "mangga", "['jeruk']"],
    "Indeks list mulai dari 0: apel=0, jeruk=1, mangga=2.",
    ["apel ada di indeks 0.", "mangga di indeks 2.", "[1] mengambil isinya, bukan list baru."]),
  O("list", 1, 'angka = [3, 1, 2]\nangka.append(5)\nprint(angka)', ["[3, 1, 2, 5]", "[5, 3, 1, 2]", "[1, 2, 3, 5]", "[3, 1, 2]"],
    ".append() menambah SATU item di AKHIR list. Urutan lama tidak berubah.",
    ["append menaruh di akhir, bukan di depan.", "append tidak mengurutkan.", "List berubah setelah append."]),
  O("list", 1, 'angka = [4, 8, 15]\nprint(len(angka), sum(angka), max(angka))', ["3 27 15", "3 27 4", "27 3 15", "15 27 3"],
    "len = banyaknya item (3), sum = jumlah semua (27), max = terbesar (15).",
    ["max mencari yang terbesar.", "Urutannya len, sum, max.", "Urutannya len, sum, max."]),
  O("list", 1, 'angka = [5, 2, 9]\nangka[0] = 7\nprint(angka)', ["[7, 2, 9]", "[5, 2, 9]", "[7, 5, 2, 9]", "Error"],
    "Berbeda dengan teks, isi list BISA diganti lewat indeks. angka[0] = 7 mengganti 5 menjadi 7.",
    ["List bisa diubah (mutable).", "Ini mengganti, bukan menyisipkan.", "Mengganti isi list itu sah."]),
  O("list", 2, 'angka = [5, 2, 9, 1]\nangka.sort()\nprint(angka)', ["[1, 2, 5, 9]", "[9, 5, 2, 1]", "[5, 2, 9, 1]", "None"],
    ".sort() mengurutkan list ITU SENDIRI dari kecil ke besar.",
    ["Bawaan sort adalah naik (kecil ke besar).", "sort mengubah list aslinya.", "Yang dicetak angka, bukan hasil .sort()."]),
  O("list", 2, 'angka = [5, 2, 9]\nhasil = angka.sort()\nprint(hasil)', ["None", "[2, 5, 9]", "[5, 2, 9]", "Error"],
    "Jebakan! .sort() mengubah list aslinya dan MENGEMBALIKAN None. Kalau ingin list baru yang terurut, pakai sorted(angka).",
    ["sort tidak mengembalikan list.", "Yang disimpan di hasil adalah None.", "Kodenya sah."]),
  O("list", 2, 'angka = [5, 2, 9]\nbaru = sorted(angka, reverse=True)\nprint(baru, angka)', ["[9, 5, 2] [5, 2, 9]", "[9, 5, 2] [9, 5, 2]", "[2, 5, 9] [5, 2, 9]", "None [5, 2, 9]"],
    "sorted() membuat list BARU tanpa mengubah aslinya. reverse=True membuatnya dari besar ke kecil.",
    ["sorted tidak mengubah list asli.", "reverse=True berarti besar ke kecil.", "sorted mengembalikan list, bukan None."]),
  O("list", 2, 'data = [10, 20, 30, 40, 50]\nprint(data[1:4])', ["[20, 30, 40]", "[10, 20, 30, 40]", "[20, 30, 40, 50]", "[20, 40]"],
    "Slicing list sama seperti teks: indeks 1, 2, 3 (berhenti sebelum 4).",
    ["Indeks 0 tidak ikut.", "Indeks 4 tidak ikut.", "Tidak ada langkah lompat."]),
  O("list", 2, 'data = [3, 7, 7, 1]\nprint(data.count(7), data.index(7))', ["2 1", "1 2", "2 2", "7 1"],
    ".count(7) = berapa kali 7 muncul (2). .index(7) = indeks kemunculan PERTAMA (1).",
    ["count lebih dulu dicetak.", "index memberi posisi pertama.", "count menghitung kemunculan."]),
  O("list", 2, 'antri = ["A", "B", "C"]\nkeluar = antri.pop(0)\nprint(keluar, antri)', ["A ['B', 'C']", "C ['A', 'B']", "A ['A', 'B', 'C']", "['B', 'C'] A"],
    ".pop(0) mengambil sekaligus MENGHAPUS item di indeks 0. Tanpa angka, .pop() mengambil yang terakhir.",
    ["Ada angka 0, jadi yang diambil depan.", "pop menghapus dari list.", "Urutan cetak: keluar dulu."]),
  O("list", 2, 'a = [1, 2]\nb = a\nb.append(3)\nprint(a)', ["[1, 2, 3]", "[1, 2]", "[3]", "Error"],
    "b = a TIDAK menyalin list. a dan b adalah dua nama untuk SATU list yang sama. Mengubah lewat b ikut terlihat di a. Untuk salinan, pakai b = a.copy().",
    ["a dan b menunjuk list yang sama.", "append menambah, bukan mengganti.", "Kodenya sah."]),
  O("list", 2, 'a = [1, 2]\nb = a.copy()\nb.append(3)\nprint(a, b)', ["[1, 2] [1, 2, 3]", "[1, 2, 3] [1, 2, 3]", "[1, 2] [1, 2]", "[1, 2, 3] [1, 2]"],
    ".copy() membuat list baru yang terpisah. Mengubah b tidak menyentuh a.",
    ["copy membuat list terpisah.", "append pada b tetap berpengaruh ke b.", "Yang diubah b, bukan a."]),
  O("list", 3, 'genap = []\nfor n in range(1, 7):\n    if n % 2 == 0:\n        genap.append(n * 10)\nprint(genap)', ["[20, 40, 60]", "[2, 4, 6]", "[10, 30, 50]", "[20, 40]"],
    "Pola saring-lalu-ubah: hanya n genap (2, 4, 6) yang masuk, masing-masing dikali 10.",
    ["Yang dimasukkan n * 10.", "Yang disaring genap, bukan ganjil.", "6 ada di range(1, 7)."]),
  M("list", 1, "Apa beda list dengan teks (string) soal mengubah isi?", ["Isi list bisa diganti lewat indeks, huruf di teks tidak bisa", "Keduanya tidak bisa diubah", "Keduanya bisa diubah lewat indeks", "Teks bisa, list tidak"],
    "List bersifat mutable (bisa diubah): angka[0] = 7 sah. Teks immutable: kata[0] = \"K\" menghasilkan TypeError.",
    ["List bisa diubah.", "Teks tidak bisa diubah lewat indeks.", "Kebalikannya."]),
  I("list", 1, "Method untuk menambah satu item di akhir list: daftar.____(x)", ["append"], ".append(x) menambah x di akhir."),

  // ---- koleksi (+15) ----
  O("koleksi", 1, 'siswa = {"nama": "Rina", "umur": 21}\nprint(siswa["nama"])', ["Rina", "nama", "21", "{'nama': 'Rina'}"],
    "Dict menyimpan pasangan kunci: nilai. siswa[\"nama\"] mengambil NILAI milik kunci \"nama\".",
    ["Yang diambil nilainya, bukan kuncinya.", "21 milik kunci umur.", "Yang dicetak satu nilai saja."]),
  O("koleksi", 1, 'stok = {"kopi": 5}\nstok["teh"] = 3\nprint(stok)', ["{'kopi': 5, 'teh': 3}", "{'teh': 3}", "{'kopi': 5}", "Error"],
    "Mengisi kunci yang belum ada = MENAMBAH pasangan baru ke dict.",
    ["Isi lama tetap ada.", "Kunci baru ditambahkan.", "Menambah kunci itu sah."]),
  O("koleksi", 1, 'stok = {"kopi": 5}\nstok["kopi"] = 8\nprint(stok)', ["{'kopi': 8}", "{'kopi': 5, 'kopi': 8}", "{'kopi': 13}", "{'kopi': 5}"],
    "Kunci di dict UNIK. Mengisi kunci yang sudah ada = MENGGANTI nilainya.",
    ["Kunci tidak bisa kembar.", "Nilai diganti, bukan dijumlah.", "Nilainya sudah diganti."]),
  O("koleksi", 2, 'harga = {"kopi": 18000}\nprint(harga.get("teh", 0))', ["0", "None", "Error", "18000"],
    ".get(kunci, cadangan) mengembalikan nilai cadangan bila kunci tidak ada, jadi program tidak error. harga[\"teh\"] justru akan KeyError.",
    ["Cadangannya 0, bukan None.", ".get tidak membuat error.", "teh tidak ada di dict."]),
  O("koleksi", 2, 'nilai = {"Ani": 90, "Budi": 75}\nfor nama, n in nilai.items():\n    print(nama, n)', ["Ani 90\nBudi 75", "Ani\nBudi", "90\n75", "('Ani', 90)\n('Budi', 75)"],
    ".items() memberi pasangan (kunci, nilai) yang langsung dibongkar ke nama dan n.",
    ["items memberi kunci dan nilai.", "items memberi kunci dan nilai.", "Pasangan sudah dibongkar ke dua variabel."]),
  O("koleksi", 2, 'nilai = {"Ani": 90, "Budi": 75}\nprint(list(nilai.keys()), list(nilai.values()))', ["['Ani', 'Budi'] [90, 75]", "['Ani', 90] ['Budi', 75]", "[90, 75] ['Ani', 'Budi']", "Ani Budi 90 75"],
    ".keys() = semua kunci, .values() = semua nilai. Dibungkus list() supaya tampil sebagai list.",
    ["keys dan values dipisah.", "Urutannya keys dulu.", "Hasilnya list."]),
  O("koleksi", 2, 'print("kopi" in {"kopi": 5, "teh": 3})', ["True", "False", "5", "Error"],
    "in pada dict mengecek KUNCI. \"kopi\" adalah kunci, jadi True.",
    ["kopi ada sebagai kunci.", "in mengembalikan True/False.", "in boleh dipakai pada dict."]),
  O("koleksi", 2, 'print(5 in {"kopi": 5})', ["False", "True", "Error", "5"],
    "Jebakan: in pada dict hanya mencari di KUNCI, bukan nilai. 5 adalah nilai, jadi False. Untuk nilai pakai 5 in d.values().",
    ["in mengecek kunci, bukan nilai.", "Kodenya sah.", "in mengembalikan True/False."]),
  O("koleksi", 2, 'kata = ["a", "b", "a", "c", "a"]\nhitung = {}\nfor k in kata:\n    hitung[k] = hitung.get(k, 0) + 1\nprint(hitung)', ["{'a': 3, 'b': 1, 'c': 1}", "{'a': 1, 'b': 1, 'c': 1}", "{'a': 5}", "Error"],
    "Pola menghitung kemunculan: ambil nilai lama (0 kalau belum ada) lalu tambah 1.",
    ["a muncul 3 kali.", "Setiap huruf dihitung sendiri.", ".get mencegah error untuk kunci baru."]),
  O("koleksi", 2, 'titik = (3, 4)\nx, y = titik\nprint(x + y)', ["7", "(3, 4)", "34", "Error"],
    "Unpacking: isi tuple dibongkar ke beberapa variabel sesuai urutan. x=3, y=4, jadi 7.",
    ["Isi tuple sudah dibongkar.", "3 dan 4 dijumlah sebagai angka.", "Unpacking sah."]),
  O("koleksi", 2, 'print(set([1, 2, 2, 3, 3, 3]))', ["{1, 2, 3}", "[1, 2, 3]", "{1, 2, 2, 3, 3, 3}", "(1, 2, 3)"],
    "Set tidak menyimpan isi kembar. Cara cepat membuang duplikat.",
    ["set ditulis dengan kurung kurawal.", "Duplikat dibuang.", "Tuple memakai kurung biasa."]),
  O("koleksi", 3, 'a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b, a | b)', ["{2, 3} {1, 2, 3, 4}", "{1, 2, 3, 4} {2, 3}", "{1, 4} {2, 3}", "{2, 3} {1, 4}"],
    "& = irisan (ada di keduanya). | = gabungan (ada di salah satu), tanpa kembar.",
    ["& adalah irisan, dicetak dulu.", "{1, 4} adalah selisih simetris (^).", "| menggabung semuanya."]),
  M("koleksi", 1, "Wadah yang isinya TIDAK BISA diubah setelah dibuat:", ["tuple", "list", "dict", "set"],
    "Tuple seperti list yang dikunci. Cocok untuk data tetap, misalnya koordinat (x, y).",
    ["List bisa diubah.", "Dict bisa diubah.", "Set bisa ditambah/dihapus."]),
  M("koleksi", 2, "Data mana yang paling cocok disimpan sebagai dict?", ["Harga per nama produk: kopi → 18000, teh → 12000", "Urutan antrean pelanggan", "Daftar nilai ujian tanpa nama", "Koordinat (x, y)"],
    "Dict cocok bila data dicari lewat NAMA/kunci. Antrean dan daftar nilai cocok list, koordinat cocok tuple.",
    ["Antrean butuh urutan: list.", "Tanpa kunci: list.", "Data tetap dua angka: tuple."]),
  I("koleksi", 2, "Method dict yang mengembalikan nilai cadangan bila kunci tidak ada: d.____(kunci, 0)", ["get"], ".get() mencegah KeyError."),

  // ---- fungsi (+15) ----
  O("fungsi", 1, 'def sapa(nama):\n    return "Halo " + nama\n\nprint(sapa("Ani"))', ["Halo Ani", "Halo nama", "sapa", "None"],
    "Saat dipanggil sapa(\"Ani\"), parameter nama diisi \"Ani\". Fungsi mengembalikan \"Halo Ani\", lalu print mencetaknya.",
    ["nama diisi \"Ani\".", "Yang dicetak hasil return.", "Ada return, jadi bukan None."]),
  O("fungsi", 1, 'def kuadrat(x):\n    return x * x\n\nprint(kuadrat(3) + kuadrat(4))', ["25", "7", "49", "34"],
    "kuadrat(3) = 9, kuadrat(4) = 16. Hasil fungsi bisa langsung dipakai menghitung: 9 + 16 = 25.",
    ["Itu 3 + 4.", "Itu (3+4) kuadrat.", "Hitung ulang: 9 + 16."]),
  O("fungsi", 1, 'def cetak(x):\n    print(x)\n\nhasil = cetak(5)\nprint(hasil)', ["5\nNone", "5\n5", "None", "5"],
    "Jebakan print vs return! cetak(5) MENCETAK 5, tapi tidak me-return apa pun, jadi hasilnya None. Lalu None dicetak.",
    ["Tanpa return, hasilnya None.", "print(5) di dalam fungsi tetap jalan.", "Ada dua print yang dijalankan."]),
  O("fungsi", 1, 'def tambah(a, b):\n    return a + b\n\nprint(tambah("1", "2"))', ["12", "3", "Error", "1 2"],
    "Python tidak peduli tipe parameter. Yang dikirim teks, jadi + menyambung: \"12\".",
    ["Argumennya teks, bukan angka.", "Teks + teks itu sah.", "Tidak ada spasi saat disambung."]),
  O("fungsi", 2, 'def cek(n):\n    if n < 0:\n        return "negatif"\n    return "positif"\n\nprint(cek(-2), cek(3))', ["negatif positif", "positif negatif", "negatif negatif", "negatif None"],
    "return langsung MENGHENTIKAN fungsi. cek(-2) berhenti di return pertama. cek(3) melewati if dan sampai di return kedua.",
    ["-2 kurang dari 0.", "3 tidak kurang dari 0.", "Selalu ada return yang tercapai."]),
  O("fungsi", 2, 'def diskon(harga, persen=10):\n    return harga - harga * persen // 100\n\nprint(diskon(1000), diskon(1000, 50))', ["900 500", "1000 500", "900 950", "Error"],
    "persen=10 adalah nilai bawaan. diskon(1000) memakai 10% → 900. diskon(1000, 50) mengganti jadi 50% → 500.",
    ["Default 10% tetap dipakai.", "50 adalah persen, bukan potongan rupiah.", "Parameter default boleh dilewati."]),
  O("fungsi", 2, 'def pangkat(dasar, eks):\n    return dasar ** eks\n\nprint(pangkat(eks=2, dasar=5))', ["25", "32", "10", "Error"],
    "Argumen bernama (keyword) boleh ditulis dengan urutan bebas. dasar=5, eks=2 → 5 ** 2 = 25.",
    ["Itu 2 ** 5; urutan mengikuti nama, bukan posisi.", "Itu 5 * 2.", "Keyword argument sah."]),
  O("fungsi", 2, 'def statistik(data):\n    return min(data), max(data)\n\nkecil, besar = statistik([4, 9, 2])\nprint(kecil, besar)', ["2 9", "4 9", "9 2", "(2, 9)"],
    "Fungsi mengembalikan dua nilai (tuple), lalu dibongkar ke kecil dan besar.",
    ["min mencari terkecil.", "Urutannya min dulu.", "Tuple sudah dibongkar."]),
  O("fungsi", 2, 'x = 10\ndef ubah():\n    x = 99\n\nubah()\nprint(x)', ["10", "99", "None", "Error"],
    "x = 99 di dalam fungsi membuat variabel LOKAL baru, tidak mengubah x di luar. x luar tetap 10.",
    ["x di dalam fungsi berbeda dengan x luar.", "Yang dicetak x luar.", "Kodenya sah."]),
  O("fungsi", 2, 'def total(*angka):\n    return sum(angka)\n\nprint(total(1, 2, 3, 4))', ["10", "4", "(1, 2, 3, 4)", "Error"],
    "*angka menampung berapa pun argumen menjadi tuple, lalu sum menjumlahkannya.",
    ["sum menjumlah, bukan menghitung banyaknya.", "Yang di-return hasil sum.", "*args sah."]),
  O("fungsi", 2, 'kali3 = lambda x: x * 3\nprint(kali3(4))', ["12", "7", "x * 3", "Error"],
    "lambda membuat fungsi kecil tanpa nama dalam satu baris. Sama dengan def kali3(x): return x * 3.",
    ["Ini perkalian.", "Yang dicetak hasilnya.", "lambda sah."]),
  O("fungsi", 3, 'def faktorial(n):\n    if n == 1:\n        return 1\n    return n * faktorial(n - 1)\n\nprint(faktorial(4))', ["24", "10", "4", "Error"],
    "Rekursi: faktorial(4) = 4 × faktorial(3) = 4 × 3 × faktorial(2) = 4 × 3 × 2 × faktorial(1) = 4 × 3 × 2 × 1 = 24. n == 1 adalah kondisi berhenti.",
    ["Itu 4+3+2+1.", "Fungsi memanggil dirinya sampai n == 1.", "Ada kondisi berhenti, jadi tidak error."]),
  M("fungsi", 1, "Beda print() dan return di dalam fungsi:", ["print menampilkan ke layar; return menyerahkan hasil supaya bisa dipakai lagi", "Keduanya sama saja", "return menampilkan ke layar", "print menghentikan fungsi"],
    "Bayangkan fungsi sebagai juru masak. print = memamerkan masakan (dilihat saja). return = menyerahkan piring ke kamu (bisa dimakan/diolah lagi). Penilai Lab membaca return.",
    ["Hasil keduanya berbeda.", "return tidak menampilkan apa pun.", "Yang menghentikan fungsi adalah return."]),
  M("fungsi", 2, "Kenapa kode dibungkus fungsi?", ["Ditulis sekali, dipakai berkali-kali, dan mudah diuji", "Supaya program lebih lambat", "Wajib di setiap baris Python", "Supaya variabel menjadi global"],
    "Fungsi mengurangi pengulangan (kalau ada salah, perbaiki di satu tempat) dan membuat kode mudah dibaca dan diuji.",
    ["Fungsi tidak memperlambat secara berarti.", "Tidak wajib.", "Variabel di fungsi justru lokal."]),
  I("fungsi", 1, "Hasil fungsi yang tidak punya return: ____", ["none"], "Tanpa return, fungsi mengembalikan None."),
  );

  dalami("loop", `
<h4>Menelusuri loop dengan tabel jejak</h4>
<p>Cara paling ampuh memahami loop: tulis tiap putaran di tabel.</p>
<pre><code>total = 0
for n in [3, 5, 2]:
    total += n
print(total)</code></pre>
<table class="mini-pivot"><tr><th>Putaran</th><th>n</th><th>total sebelum</th><th>total sesudah</th></tr>
<tr><td>1</td><td>3</td><td>0</td><td>3</td></tr>
<tr><td>2</td><td>5</td><td>3</td><td>8</td></tr>
<tr><td>3</td><td>2</td><td>8</td><td>10</td></tr></table>
<p>Setelah putaran terakhir, loop selesai dan <code>print(total)</code> dijalankan <b>sekali</b>: 10.</p>
<h4>Empat pola loop yang paling sering dipakai</h4>
<pre><code>data = [70, 85, 90, 60]

# 1) Menjumlah (akumulator)
total = 0
for n in data:
    total += n                    # 305

# 2) Menghitung yang memenuhi syarat
lulus = 0
for n in data:
    if n &gt;= 75:
        lulus += 1                # 2

# 3) Mencari terbesar (tanpa max)
terbesar = data[0]
for n in data:
    if n &gt; terbesar:
        terbesar = n              # 90

# 4) Mencari lalu berhenti
for n in data:
    if n &lt; 65:
        print("ada yang remedial:", n)
        break</code></pre>
<h4>print di dalam atau di luar loop?</h4>
<table class="mini-pivot"><tr><th>Posisi print</th><th>Akibat</th></tr>
<tr><td>Menjorok (di dalam loop)</td><td>Dicetak <b>setiap putaran</b></td></tr>
<tr><td>Sejajar dengan for (di luar)</td><td>Dicetak <b>sekali</b>, setelah loop selesai</td></tr></table>
<p>Salah jorok satu baris bisa mengubah total hasil. Selalu cek: baris ini mau dijalankan berapa kali?</p>
<h4>while yang aman</h4>
<pre><code>coba = 0
while coba &lt; 3:          # 1) syarat
    print("percobaan", coba + 1)
    coba += 1             # 2) WAJIB: ubah sesuatu yang dicek syarat</code></pre>
<p>Tiga bagian while: nilai awal, syarat, dan perubahan. Lupa bagian perubahan = loop tidak pernah berhenti.</p>
<div class="praktik"><b>Coba sendiri:</b> dari <code>harga = [12000, 5000, 30000, 8000]</code>, hitung total belanja, banyak barang di atas 10.000, dan harga termurah, semuanya dengan satu loop.</div>`);

  dalami("list", `
<h4>List = loker bernomor</h4>
<p>Bayangkan deretan loker bernomor mulai 0. Setiap loker berisi satu barang. Kamu bisa membuka loker tertentu (<code>data[2]</code>), mengganti isinya (<code>data[2] = 99</code>), menambah loker di ujung (<code>append</code>), atau mengeluarkan isi loker (<code>pop</code>).</p>
<h4>Mengubah list: method penting</h4>
<table class="mini-pivot"><tr><th>Method</th><th>Kerjanya</th><th>Contoh (data = [3, 1, 2])</th></tr>
<tr><td><code>append(x)</code></td><td>tambah di akhir</td><td>[3, 1, 2, 9]</td></tr>
<tr><td><code>insert(i, x)</code></td><td>sisipkan di posisi i</td><td><code>insert(0, 9)</code> → [9, 3, 1, 2]</td></tr>
<tr><td><code>remove(x)</code></td><td>hapus nilai x pertama</td><td><code>remove(1)</code> → [3, 2]</td></tr>
<tr><td><code>pop(i)</code></td><td>ambil dan hapus di posisi i (bawaan: terakhir)</td><td><code>pop()</code> → 2, sisa [3, 1]</td></tr>
<tr><td><code>sort()</code></td><td>urutkan list itu sendiri, hasilnya None</td><td>[1, 2, 3]</td></tr>
<tr><td><code>reverse()</code></td><td>balik urutan list itu sendiri</td><td>[2, 1, 3]</td></tr>
<tr><td><code>extend(lain)</code></td><td>tambah semua isi list lain</td><td><code>extend([7, 8])</code> → [3, 1, 2, 7, 8]</td></tr></table>
<h4>sort() vs sorted(): beda yang sering bikin bingung</h4>
<pre><code>data = [3, 1, 2]
baru = sorted(data)   # baru = [1, 2, 3], data TETAP [3, 1, 2]
data.sort()           # data BERUBAH jadi [1, 2, 3], hasilnya None
salah = data.sort()   # salah = None  ← jangan disimpan!</code></pre>
<p>Ingat: method yang mengubah list langsung (<code>sort, append, reverse</code>) mengembalikan <code>None</code>. Jangan ditulis <code>data = data.sort()</code>.</p>
<h4>Satu list, dua nama</h4>
<pre><code>a = [1, 2]
b = a           # b dan a menunjuk list yang SAMA
b.append(3)
print(a)        # [1, 2, 3]  ← ikut berubah!

c = a.copy()    # salinan terpisah
c.append(4)
print(a)        # [1, 2, 3]  ← aman</code></pre>
<h4>Membangun list baru dengan loop</h4>
<pre><code>harga = [10000, 25000, 5000]
mahal = []
for h in harga:
    if h &gt; 8000:
        mahal.append(h)
print(mahal)    # [10000, 25000]</code></pre>
<p>Pola ini (list kosong → loop → if → append) adalah dasar dari list comprehension yang akan dipelajari nanti.</p>
<div class="praktik"><b>Coba sendiri:</b> dari <code>nilai = [80, 45, 92, 67, 75]</code>, buat list baru berisi nilai yang lulus (≥ 70), urutkan dari besar ke kecil dengan <code>sorted(..., reverse=True)</code>, lalu cetak juga list aslinya untuk membuktikan tidak berubah.</div>`);

  dalami("koleksi", `
<h4>Memilih wadah yang tepat</h4>
<table class="mini-pivot"><tr><th>Wadah</th><th>Tulisan</th><th>Urutan</th><th>Bisa diubah</th><th>Kembar</th><th>Cocok untuk</th></tr>
<tr><td>list</td><td><code>[1, 2]</code></td><td>ya</td><td>ya</td><td>boleh</td><td>daftar berurutan: antrean, nilai</td></tr>
<tr><td>tuple</td><td><code>(1, 2)</code></td><td>ya</td><td>tidak</td><td>boleh</td><td>data tetap: koordinat, tanggal</td></tr>
<tr><td>dict</td><td><code>{"a": 1}</code></td><td>sesuai urutan masuk</td><td>ya</td><td>kunci tidak boleh</td><td>mencari lewat nama: harga per produk</td></tr>
<tr><td>set</td><td><code>{1, 2}</code></td><td>tidak</td><td>ya</td><td>tidak boleh</td><td>buang duplikat, cek keanggotaan</td></tr></table>
<h4>Dict seperti buku telepon</h4>
<p>Kamu mencari <b>nama</b> (kunci) untuk mendapat <b>nomor</b> (nilai), bukan membaca dari halaman pertama. Karena itu mengambil isi dict lewat kunci sangat cepat.</p>
<pre><code>harga = {"kopi": 18000, "teh": 12000}
harga["kopi"]           # 18000
harga["susu"] = 15000   # tambah
harga["teh"] = 13000    # ganti
del harga["kopi"]       # hapus
harga.get("roti", 0)    # 0, tidak error</code></pre>
<h4>Tiga cara mengulang dict</h4>
<pre><code>for nama in harga:                 # kunci saja
    print(nama)
for h in harga.values():           # nilai saja
    print(h)
for nama, h in harga.items():      # kunci dan nilai
    print(nama, h)</code></pre>
<h4>Pola menghitung dengan dict</h4>
<pre><code>pesanan = ["kopi", "teh", "kopi", "kopi"]
jumlah = {}
for p in pesanan:
    jumlah[p] = jumlah.get(p, 0) + 1
print(jumlah)    # {'kopi': 3, 'teh': 1}</code></pre>
<p>Bacanya: "ambil jumlah lama (0 kalau belum pernah ada), tambah satu, simpan lagi". Pola ini muncul di banyak soal tes coding.</p>
<h4>Set untuk membandingkan kelompok</h4>
<pre><code>kelas_a = {"Ani", "Budi", "Cici"}
kelas_b = {"Budi", "Dodi"}
kelas_a &amp; kelas_b    # {'Budi'}            ikut keduanya
kelas_a | kelas_b    # semua nama, tanpa kembar
kelas_a - kelas_b    # {'Ani', 'Cici'}     hanya di A</code></pre>
<div class="praktik"><b>Coba sendiri:</b> dari <code>kata = "saya suka kopi dan saya suka teh".split()</code>, hitung berapa kali setiap kata muncul dengan dict, lalu cetak kata yang muncul lebih dari sekali.</div>`);

  dalami("fungsi", `
<h4>Anatomi fungsi, satu per satu</h4>
<pre><code>def hitung_total(harga, qty):     # 1) def + nama + (parameter) + titik dua
    total = harga * qty            # 2) isi menjorok
    return total                   # 3) serahkan hasil

bayar = hitung_total(15000, 3)     # 4) panggil: 15000 masuk harga, 3 masuk qty
print(bayar)                       # 45000</code></pre>
<p>Alur yang terjadi saat baris 4 dijalankan: Python melompat ke dalam fungsi, mengisi <code>harga = 15000</code> dan <code>qty = 3</code>, menjalankan isinya, lalu <b>kembali</b> ke baris pemanggil membawa hasil <code>return</code>. Hasil itu disimpan ke <code>bayar</code>.</p>
<h4>print vs return (paling sering salah)</h4>
<table class="mini-pivot"><tr><th></th><th><code>print(x)</code></th><th><code>return x</code></th></tr>
<tr><td>Kerjanya</td><td>menampilkan ke layar</td><td>menyerahkan nilai ke pemanggil</td></tr>
<tr><td>Fungsi berhenti?</td><td>tidak</td><td>ya, langsung</td></tr>
<tr><td>Hasilnya bisa dipakai lagi?</td><td>tidak (hasil fungsi None)</td><td>ya: disimpan, dihitung, dibandingkan</td></tr></table>
<p>Di Lab dan Studi Kasus KodeQuiz, penilai membaca nilai <b>return</b>. Kalau kamu hanya print, tesnya gagal walaupun layar menampilkan jawaban yang benar.</p>
<h4>Parameter itu kotak kosong</h4>
<p>Saat fungsi dibuat, parameter belum punya isi. Isinya baru datang saat dipanggil, dan bisa berbeda setiap kali:</p>
<pre><code>def luas(p, l):
    return p * l

luas(2, 3)    # p=2, l=3 → 6
luas(5, 5)    # p=5, l=5 → 25</code></pre>
<p>Karena itu jangan menulis nilai tetap di dalam fungsi (<code>p = 2</code>). Penilai memanggil fungsimu dengan banyak data berbeda.</p>
<h4>Variabel lokal: hidup hanya di dalam fungsi</h4>
<pre><code>def hitung():
    hasil = 10        # lokal
    return hasil

hitung()
print(hasil)          # NameError: hasil tidak dikenal di luar</code></pre>
<p>Kalau butuh nilainya di luar, simpan hasil return-nya: <code>hasil = hitung()</code>.</p>
<h4>Fungsi memanggil fungsi</h4>
<pre><code>def pajak(harga):
    return harga * 11 // 100

def harga_akhir(harga):
    return harga + pajak(harga)     # memakai fungsi lain

print(harga_akhir(10000))           # 11100</code></pre>
<p>Pecah masalah besar menjadi fungsi-fungsi kecil yang masing-masing mengerjakan satu hal. Lebih mudah dicek dan diperbaiki.</p>
<div class="praktik"><b>Coba sendiri:</b> buat <code>nilai_huruf(n)</code> (A ≥ 85, B ≥ 70, selain itu C) lalu <code>rekap(daftar)</code> yang memakai <code>nilai_huruf</code> untuk mengembalikan dict jumlah tiap huruf, misalnya <code>{'A': 1, 'B': 2, 'C': 1}</code>.</div>`);
})();
