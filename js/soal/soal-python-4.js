// ============ PYTHON — tambahan 2x lipat (bagian 1): dasar, operator, string, kondisi ============
// Dimuat SETELAH soal-latihan-ekstra.js. Setiap bab mendapat soal sebanyak jumlah lamanya + "Pendalaman" materi.
// vr:"py" → output dijalankan sungguhan oleh alat/cek-soal.js. Opsi diacak saat tampil, jadi kunci ditaruh di indeks 0.
// Aturan: soal hanya memakai konsep yang sudah diajarkan di bab ini atau bab sebelumnya.
(function () {
  const O = (k, lv, kode, o, e, w) => ({ k, t: "mc", lv, q: "Output kode ini:", kode, o, a: 0, vr: "py", e, ...(w ? { w: [null, ...w] } : {}) });
  const M = (k, lv, q, o, e, w) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_PYTHON.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_PYTHON.push(
  // ---- dasar (+15) ----
  O("dasar", 1, 'print("Halo", "Dunia")', ["Halo Dunia", "HaloDunia", "Halo, Dunia", "\"Halo\" \"Dunia\""],
    "print() dengan beberapa nilai dipisah koma akan mencetaknya berurutan dengan SATU SPASI di antaranya. Koma di dalam kurung bukan ikut dicetak, hanya pemisah.",
    ["print memberi spasi otomatis di antara nilai.", "Koma hanya pemisah, tidak ikut dicetak.", "Tanda kutip tidak ikut dicetak."]),
  O("dasar", 1, 'x = 5\nx = 9\nprint(x)', ["9", "5", "14", "5 9"],
    "Variabel seperti kotak: isinya BISA DIGANTI. Baris 2 membuang angka 5 dan memasukkan 9, jadi yang tercetak 9.",
    ["Isi lama sudah diganti.", "= bukan menambah, tapi mengganti isi.", "Satu variabel hanya menyimpan satu nilai saat ini."]),
  O("dasar", 1, 'nama = "Rina"\nprint("nama")', ["nama", "Rina", "\"nama\"", "Error"],
    "Perhatikan tanda kutip! \"nama\" adalah TEKS bertuliskan n-a-m-a, bukan variabel. Untuk mencetak isi variabel, tulis print(nama) tanpa kutip.",
    ["Kutip membuat ini jadi teks biasa, bukan variabel.", "Kutip tidak ikut tercetak.", "Ini sah, hanya mencetak teks."]),
  O("dasar", 1, 'print(type(10))', ["<class 'int'>", "<class 'float'>", "<class 'str'>", "int"],
    "type() memberi tahu jenis data. 10 adalah bilangan bulat, jadi tipenya int. Python menuliskannya sebagai <class 'int'>.",
    ["10 tidak punya koma desimal.", "10 tidak berada di dalam kutip.", "Hasil type() ditulis lengkap <class '...'>."]),
  O("dasar", 1, 'print(type(10.0))', ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'decimal'>"],
    "Ada titik desimalnya (10.0), walaupun di belakang koma nol, tetap float.",
    ["Titik desimal menjadikannya float.", "Tidak ada kutip, jadi bukan str.", "Python tidak menyebutnya decimal."]),
  O("dasar", 2, 'umur = "20"\nprint(umur + "1")', ["201", "21", "Error", "20 1"],
    "umur berisi TEKS \"20\". Teks + teks = disambung (bukan dijumlah). \"20\" + \"1\" menjadi \"201\". Inilah kenapa hasil input() perlu diubah dengan int() sebelum dihitung.",
    ["Teks tidak dijumlah, tapi disambung.", "Teks + teks itu sah.", "Penyambungan tidak menambah spasi."]),
  O("dasar", 2, 'umur = "20"\nprint(int(umur) + 1)', ["21", "201", "Error", "20"],
    "int(\"20\") mengubah teks menjadi angka 20, baru ditambah 1 menjadi 21.",
    ["Setelah int(), ini penjumlahan angka.", "int() membuat penjumlahan sah.", "Ada + 1 yang dihitung."]),
  O("dasar", 2, 'print(str(5) + str(5))', ["55", "10", "Error", "5 5"],
    "str() mengubah angka menjadi teks. \"5\" + \"5\" disambung menjadi \"55\".",
    ["Keduanya sudah teks, jadi disambung.", "Teks + teks sah.", "Tidak ada spasi saat disambung."]),
  O("dasar", 2, 'print(float(3))', ["3.0", "3", "3.00", "Error"],
    "float() mengubah angka bulat menjadi desimal. Python menulis 3 sebagai 3.0 (satu angka nol).",
    ["float selalu punya bagian desimal.", "Python tidak menambah nol berlebih.", "float(3) sah."]),
  O("dasar", 2, 'print("A", "B", "C", sep="-")', ["A-B-C", "A B C", "A-B-C-", "ABC"],
    "sep (separator) mengganti pemisah bawaan (spasi) dengan teks lain. sep=\"-\" menaruh tanda minus DI ANTARA nilai, bukan di ujung.",
    ["sep mengganti spasi.", "sep hanya di antara nilai, tidak di akhir.", "Pemisahnya diganti, bukan dihapus."]),
  O("dasar", 2, 'print("Halo", end="!")\nprint("Rina")', ["Halo!Rina", "Halo!\nRina", "Halo\nRina", "Halo! Rina"],
    "end mengganti apa yang ditulis di AKHIR print (bawaannya pindah baris). end=\"!\" membuat print berikutnya melanjutkan di baris yang sama tepat setelah tanda seru.",
    ["end mengganti pindah baris, jadi tidak ganti baris.", "Pindah baris sudah diganti tanda seru.", "Tidak ada spasi tambahan."]),
  M("dasar", 1, "Mana penulisan komentar Python yang benar?", ["# hitung total", "// hitung total", "<!-- hitung total -->", "-- hitung total"],
    "Komentar Python diawali #. Semua teks setelah # di baris itu diabaikan komputer, gunanya menjelaskan kode untuk manusia.",
    ["// dipakai JavaScript/Java.", "<!-- --> dipakai HTML.", "-- dipakai SQL."]),
  M("dasar", 2, "Program: angka = input(\"Angka: \"), pengguna mengetik 7. Apa tipe isi variabel angka?", ["str", "int", "float", "bool"],
    "input() SELALU memberi teks (str), walau yang diketik angka. Ubah dengan int(angka) bila mau dihitung.",
    ["input() tidak mengubah ke int otomatis.", "Bukan float juga.", "Bukan bool."]),
  I("dasar", 1, "Fungsi untuk mengubah angka 25 menjadi teks \"25\": ____(25)", ["str"], "str() mengubah nilai apa pun menjadi teks."),
  I("dasar", 2, "Parameter print() untuk mengganti pemisah antar nilai: print(\"a\", \"b\", ____=\"/\")", ["sep"], "sep = separator (pemisah)."),

  // ---- operator (+15) ----
  O("operator", 1, 'print(7 + 3 * 2)', ["13", "20", "12", "17"],
    "Sama seperti matematika: kali dikerjakan DULU sebelum tambah. 3 * 2 = 6, lalu 7 + 6 = 13.",
    ["Itu (7 + 3) * 2; perkalian harus duluan.", "Cek lagi: 3 * 2 = 6.", "Cek lagi urutannya."]),
  O("operator", 1, 'print((7 + 3) * 2)', ["20", "13", "17", "23"],
    "Kurung dikerjakan PALING DULU. 7 + 3 = 10, lalu 10 * 2 = 20.",
    ["Kurung mengubah urutan.", "Kurung dikerjakan duluan.", "Hitung ulang: 10 * 2."]),
  O("operator", 1, 'print(9 / 3)', ["3.0", "3", "3.00", "Error"],
    "Pembagian / SELALU menghasilkan float, walaupun hasilnya bulat. Jadi 3.0, bukan 3.",
    ["/ selalu float; untuk bulat pakai //.", "Python menulis satu nol saja.", "Pembagian ini sah."]),
  O("operator", 1, 'print(17 % 5)', ["2", "3", "3.4", "5"],
    "% = sisa bagi. 17 dibagi 5 = 3 sisa 2 (5 × 3 = 15, 17 - 15 = 2).",
    ["3 adalah hasil bagi bulat (17 // 5), bukan sisa.", "3.4 adalah hasil 17 / 5.", "Hitung ulang sisanya."]),
  O("operator", 1, 'print(2 ** 4)', ["16", "8", "6", "24"],
    "** adalah pangkat. 2 ** 4 = 2 × 2 × 2 × 2 = 16.",
    ["Itu 2 * 4.", "Itu 2 + 4.", "Bukan 24."]),
  O("operator", 2, 'x = 10\nx += 5\nx *= 2\nprint(x)', ["30", "25", "20", "15"],
    "Jejak nilai: x = 10 → x += 5 menjadi 15 → x *= 2 menjadi 30.",
    ["Lupa langkah *= 2? 15 * 2 = 30, lalu cek urutan.", "Urutannya: tambah dulu, baru kali.", "Masih ada x *= 2."]),
  O("operator", 2, 'print(10 == 10.0)', ["True", "False", "Error", "10"],
    "== membandingkan NILAI. 10 dan 10.0 nilainya sama, jadi True, walaupun tipenya berbeda (int dan float).",
    ["Nilainya sama walau tipe beda.", "Membandingkan int dan float itu sah.", "== menghasilkan True/False."]),
  O("operator", 2, 'print(5 != 3)', ["True", "False", "2", "Error"],
    "!= artinya TIDAK SAMA DENGAN. 5 memang tidak sama dengan 3, jadi True.",
    ["!= bertanya 'apakah berbeda?'. 5 dan 3 berbeda.", "Ini perbandingan, bukan pengurangan.", "Operator ini sah."]),
  O("operator", 2, 'print(3 > 2 and 2 > 5)', ["False", "True", "Error", "None"],
    "and butuh KEDUANYA benar. 3 > 2 benar, tapi 2 > 5 salah. Satu salah → hasilnya False.",
    ["and butuh dua-duanya benar.", "Bentuk ini sah.", "Hasil perbandingan selalu True/False."]),
  O("operator", 2, 'print(3 > 2 or 2 > 5)', ["True", "False", "Error", "None"],
    "or cukup SALAH SATU benar. 3 > 2 benar, jadi hasilnya True.",
    ["or cukup satu benar.", "Bentuk ini sah.", "Hasilnya True/False."]),
  O("operator", 2, 'print(not 5 > 3)', ["False", "True", "-5", "Error"],
    "not membalik True ↔ False. 5 > 3 itu True, dibalik menjadi False.",
    ["not membalik hasilnya.", "not bukan tanda minus.", "Bentuk ini sah."]),
  O("operator", 2, 'print("a" in "kopi")', ["False", "True", "Error", "1"],
    "in mengecek apakah huruf/teks ada di dalam teks lain. Kata kopi tidak memuat huruf a, jadi False.",
    ["Cek lagi huruf-huruf k-o-p-i.", "in boleh dipakai pada teks.", "in menghasilkan True/False."]),
  O("operator", 3, 'print(-7 // 2)', ["-4", "-3", "-3.5", "3"],
    "// membulatkan KE BAWAH (ke arah minus tak hingga), bukan sekadar membuang koma. -7 / 2 = -3.5, dibulatkan ke bawah menjadi -4.",
    ["-3 lebih besar dari -3.5; // selalu ke bawah.", "// tidak menghasilkan desimal.", "Tanda minusnya tetap."]),
  M("operator", 1, "Operator untuk mengecek apakah dua nilai SAMA:", ["==", "=", "===", "equals"],
    "Dua tanda sama dengan (==) untuk membandingkan. Satu tanda (=) untuk mengisi variabel.",
    ["= dipakai untuk mengisi variabel.", "=== hanya ada di JavaScript.", "Python tidak punya operator equals."]),
  I("operator", 1, "Operator sisa bagi: 10 ____ 3 menghasilkan 1", ["%"], "% (modulus) memberi sisa pembagian."),

  // ---- string (+15) ----
  O("string", 1, 'kata = "Python"\nprint(kata[0])', ["P", "y", "Python", "Error"],
    "Indeks dimulai dari 0. Huruf pertama ada di indeks 0, yaitu P.",
    ["y ada di indeks 1.", "[0] mengambil satu huruf saja.", "Indeks 0 itu sah."]),
  O("string", 1, 'kata = "Python"\nprint(kata[-1])', ["n", "P", "o", "Error"],
    "Indeks negatif menghitung dari belakang. -1 = huruf terakhir, yaitu n.",
    ["P adalah huruf pertama (indeks 0).", "o ada di indeks -2.", "Indeks negatif sah di Python."]),
  O("string", 1, 'print(len("kopi susu"))', ["9", "8", "2", "10"],
    "len() menghitung SEMUA karakter, termasuk spasi. k-o-p-i (4) + spasi (1) + s-u-s-u (4) = 9.",
    ["Spasi juga dihitung.", "len menghitung huruf, bukan kata.", "Hitung ulang dengan teliti."]),
  O("string", 1, 'print("ha" * 3)', ["hahaha", "ha3", "ha ha ha", "Error"],
    "Teks dikali angka = teks diulang. \"ha\" diulang 3 kali menjadi hahaha.",
    ["* mengulang, bukan menempel angka.", "Tidak ada spasi tambahan.", "Teks * angka itu sah."]),
  O("string", 2, 'kata = "Python"\nprint(kata[0:3])', ["Pyt", "Pyth", "yth", "Py"],
    "Slicing [awal:akhir] mengambil dari indeks awal sampai SEBELUM akhir. [0:3] = indeks 0, 1, 2 = P, y, t.",
    ["Indeks 3 (h) tidak ikut.", "Mulai dari indeks 0, bukan 1.", "Ada 3 huruf yang diambil."]),
  O("string", 2, 'kata = "Python"\nprint(kata[2:])', ["thon", "ython", "Py", "hon"],
    "Kalau angka akhir dikosongkan, potong SAMPAI HABIS. Mulai indeks 2 (t) sampai akhir: thon.",
    ["Indeks 2 adalah t, bukan y.", "Itu kata[:2].", "Mulai dari indeks 2, bukan 3."]),
  O("string", 2, 'kata = "Python"\nprint(kata[::-1])', ["nohtyP", "Python", "P", "Error"],
    "Langkah -1 artinya berjalan mundur, jadi teksnya dibalik. Cara cepat membalik teks.",
    ["Langkah -1 membalik urutan.", "Ini mengambil semua huruf, bukan satu.", "Langkah negatif sah."]),
  O("string", 2, 'print("  rapi  ".strip() + "|")', ["rapi|", "  rapi  |", "rapi  |", "  rapi|"],
    ".strip() membuang spasi di AWAL dan AKHIR teks. Hasilnya \"rapi\", lalu disambung \"|\".",
    ["strip membuang spasi di kedua sisi.", "Spasi kanan juga dibuang.", "Spasi kiri juga dibuang."]),
  O("string", 2, 'print("kopi susu".upper())', ["KOPI SUSU", "Kopi Susu", "Kopi susu", "kopi susu"],
    ".upper() mengubah SEMUA huruf menjadi besar.",
    ["Itu hasil .title().", "Itu hasil .capitalize().", "Teksnya berubah oleh upper()."]),
  O("string", 2, 'print("kopi susu".title())', ["Kopi Susu", "KOPI SUSU", "Kopi susu", "kopi Susu"],
    ".title() membesarkan huruf PERTAMA setiap kata.",
    ["Itu hasil .upper().", "Itu hasil .capitalize() (hanya kata pertama).", "Kata pertama juga dibesarkan."]),
  O("string", 2, 'print("2026-11-27".replace("-", "/"))', ["2026/11/27", "2026-11-27", "2026/11-27", "20261127"],
    ".replace(lama, baru) mengganti SEMUA kemunculan, bukan hanya yang pertama.",
    ["replace mengganti, tidak mengembalikan teks asli.", "Semua tanda - diganti, bukan hanya satu.", "Tanda - diganti /, bukan dihapus."]),
  O("string", 2, 'print("apel,jeruk,mangga".split(","))', ["['apel', 'jeruk', 'mangga']", "apel jeruk mangga", "['apel,jeruk,mangga']", "('apel', 'jeruk', 'mangga')"],
    ".split(\",\") memotong teks setiap ketemu koma dan mengembalikan LIST berisi potongannya.",
    ["split menghasilkan list, bukan teks.", "Teks dipotong di setiap koma.", "Hasilnya list (kurung siku), bukan tuple."]),
  O("string", 2, 'nama = "Rina"\nnilai = 90\nprint(f"{nama} dapat {nilai}")', ["Rina dapat 90", "{nama} dapat {nilai}", "nama dapat nilai", "Error"],
    "f-string (diawali huruf f) mengganti {nama} dan {nilai} dengan isi variabelnya.",
    ["Huruf f membuat isi kurung kurawal diganti.", "Yang dicetak isi variabel, bukan namanya.", "f-string boleh mencampur teks dan angka."]),
  O("string", 3, 'print(f"{7 / 3:.2f}")', ["2.33", "2.3333333333333335", "2.3", "2"],
    ":.2f di dalam f-string artinya tampilkan 2 angka di belakang koma (dibulatkan).",
    [".2f memotong tampilan jadi 2 desimal.", ".2f berarti dua desimal, bukan satu.", "f = float, tetap ada desimalnya."]),
  I("string", 1, "Method untuk mengubah teks menjadi huruf kecil semua: \"HALO\".____()", ["lower"], ".lower() membuat semua huruf kecil."),

  // ---- kondisi (+16) ----
  O("kondisi", 1, 'nilai = 80\nif nilai >= 75:\n    print("Lulus")\nelse:\n    print("Ulang")', ["Lulus", "Ulang", "Lulus\nUlang", "Error"],
    "80 >= 75 bernilai True, jadi blok if dijalankan dan blok else dilewati. Hanya SATU blok yang jalan.",
    ["else hanya jalan kalau syarat if salah.", "if dan else tidak pernah jalan bersamaan.", "Kodenya sah."]),
  O("kondisi", 1, 'nilai = 60\nif nilai >= 75:\n    print("Lulus")\nprint("Selesai")', ["Selesai", "Lulus\nSelesai", "Lulus", "Error"],
    "60 >= 75 salah, jadi print(\"Lulus\") dilewati. print(\"Selesai\") TIDAK menjorok, jadi bukan bagian if dan selalu jalan.",
    ["Syarat salah, Lulus tidak dicetak.", "Baris tanpa jorok tetap jalan.", "Kodenya sah."]),
  O("kondisi", 2, 'n = 85\nif n >= 90:\n    print("A")\nelif n >= 80:\n    print("B")\nelif n >= 70:\n    print("C")\nelse:\n    print("D")', ["B", "A", "B\nC", "C"],
    "Python mengecek dari atas: 85 >= 90? salah. 85 >= 80? BENAR → cetak B lalu BERHENTI. elif di bawahnya tidak dicek lagi walaupun 85 >= 70 juga benar.",
    ["85 belum mencapai 90.", "Setelah satu cabang benar, sisanya dilewati.", "Cabang B sudah benar lebih dulu."]),
  O("kondisi", 2, 'n = 85\nif n >= 70:\n    print("C")\nelif n >= 80:\n    print("B")', ["C", "B", "C\nB", "Error"],
    "Urutan penting! Syarat pertama (85 >= 70) sudah benar, jadi C dicetak dan elif tidak pernah dicek. Karena itu syarat yang paling ketat ditaruh di atas.",
    ["Syarat pertama sudah benar duluan.", "Hanya satu cabang yang jalan.", "Kodenya sah."]),
  O("kondisi", 2, 'n = 85\nif n >= 70:\n    print("C")\nif n >= 80:\n    print("B")', ["C\nB", "C", "B", "B\nC"],
    "Ini DUA if terpisah (bukan elif), jadi keduanya dicek sendiri-sendiri. Dua-duanya benar → C dan B sama-sama dicetak, berurutan dari atas.",
    ["if kedua bukan elif, jadi tetap dicek.", "if pertama juga benar.", "Urutannya dari atas ke bawah."]),
  O("kondisi", 2, 'umur = 20\npunya_ktp = True\nif umur >= 17 and punya_ktp:\n    print("Boleh")\nelse:\n    print("Tidak")', ["Boleh", "Tidak", "Error", "True"],
    "Dua syarat digabung and: umur >= 17 (benar) DAN punya_ktp (True). Keduanya benar → Boleh.",
    ["Kedua syarat benar.", "Variabel boolean boleh dipakai langsung sebagai syarat.", "Yang dicetak teks, bukan True."]),
  O("kondisi", 2, 'teks = ""\nif teks:\n    print("Ada isi")\nelse:\n    print("Kosong")', ["Kosong", "Ada isi", "Error", "None"],
    "Teks kosong \"\" dianggap SALAH (falsy) oleh if. Nilai falsy lain: 0, None, list kosong [].",
    ["Teks kosong dianggap salah.", "if boleh menerima teks langsung.", "Yang dicetak salah satu teks."]),
  O("kondisi", 2, 'x = 0\nif x:\n    print("benar")\nelse:\n    print("salah")', ["salah", "benar", "0", "Error"],
    "Angka 0 dianggap salah (falsy). Angka lain, termasuk negatif, dianggap benar.",
    ["0 itu falsy.", "Yang dicetak teks, bukan nilai x.", "Kodenya sah."]),
  O("kondisi", 2, 'stok = 0\nstatus = "habis" if stok == 0 else "ada"\nprint(status)', ["habis", "ada", "0", "Error"],
    "if satu baris (ternary): NILAI_JIKA_BENAR if SYARAT else NILAI_JIKA_SALAH. stok == 0 benar → \"habis\".",
    ["Syaratnya benar, jadi ambil nilai sebelah kiri.", "Yang disimpan teks.", "Bentuk ini sah."]),
  O("kondisi", 3, 'x = 15\nif x > 10:\n    if x > 20:\n        print("besar")\n    else:\n        print("sedang")\nelse:\n    print("kecil")', ["sedang", "besar", "kecil", "sedang\nkecil"],
    "if bersarang: masuk if luar dulu (15 > 10 benar), lalu di dalamnya cek 15 > 20 (salah) → else dalam → sedang. else luar tidak dijalankan.",
    ["15 belum lebih dari 20.", "15 lebih dari 10, jadi masuk cabang luar.", "else luar tidak jalan."]),
  O("kondisi", 3, 'x = 7\nprint(1 < x < 10)', ["True", "False", "Error", "7"],
    "Perbandingan berantai: 1 < x < 10 artinya 1 < x DAN x < 10. 7 memenuhi keduanya.",
    ["7 ada di antara 1 dan 10.", "Python mengizinkan perbandingan berantai.", "Hasilnya True/False."]),
  M("kondisi", 1, "Apa yang terjadi kalau baris di bawah if TIDAK menjorok?", ["IndentationError: Python tidak tahu baris mana milik if", "Program jalan biasa", "Baris itu otomatis masuk if", "Hanya muncul peringatan"],
    "Di Python, jorok (indentasi) BUKAN hiasan. Baris setelah titik dua wajib menjorok, biasanya 4 spasi (satu Tab). Kalau tidak, muncul IndentationError. Di editor KodeQuiz baris itu ditandai merah.",
    ["Python menolak menjalankannya.", "Python tidak menebak.", "Ini error, bukan sekadar peringatan."]),
  M("kondisi", 1, "Tanda apa yang wajib ada di akhir baris if, elif, dan else?", [": (titik dua)", "; (titik koma)", "{ (kurung kurawal)", "then"],
    "Titik dua menandai 'blok dimulai di bawah'. Lupa titik dua = SyntaxError.",
    ["Titik koma bukan penanda blok.", "Kurung kurawal dipakai JavaScript.", "then tidak dipakai Python."]),
  M("kondisi", 2, "Kapan blok else dijalankan?", ["Kalau semua syarat if/elif di atasnya salah", "Selalu setelah if", "Kalau syarat if benar", "Hanya kalau ada elif"],
    "else adalah cadangan terakhir: hanya jalan jika tidak ada satu pun syarat di atasnya yang benar.",
    ["else tidak selalu jalan.", "Kalau if benar, else dilewati.", "else boleh tanpa elif."]),
  I("kondisi", 1, "Kata kunci untuk 'jika tidak, cek syarat lain': ____ nilai >= 80:", ["elif"], "elif = else if."),
  I("kondisi", 2, "Nilai kosong yang dicek dengan: if hasil is ____:", ["none"], "Cara benar mengecek None adalah 'is None'."),
  );

  dalami("dasar", `
<h4>Cara komputer membaca kode: dari atas ke bawah</h4>
<p>Komputer membaca baris demi baris, <b>dari atas ke bawah</b>, dan baru pindah ke baris berikutnya setelah baris sekarang selesai. Biasakan menelusuri kode seperti komputer dengan <b>tabel jejak nilai</b>:</p>
<pre><code>harga = 5000        # baris 1
jumlah = 3          # baris 2
total = harga * jumlah
harga = 6000        # baris 4: isi harga diganti
print(total)        # 15000, BUKAN 18000</code></pre>
<table class="mini-pivot"><tr><th>Setelah baris</th><th>harga</th><th>jumlah</th><th>total</th></tr>
<tr><td>1</td><td>5000</td><td>-</td><td>-</td></tr>
<tr><td>2</td><td>5000</td><td>3</td><td>-</td></tr>
<tr><td>3</td><td>5000</td><td>3</td><td>15000</td></tr>
<tr><td>4</td><td>6000</td><td>3</td><td>15000</td></tr></table>
<p>total dihitung di baris 3 memakai harga saat itu (5000). Mengganti harga di baris 4 <b>tidak</b> menghitung ulang total. Variabel menyimpan <b>hasil</b>, bukan rumus.</p>
<h4>Tanda = bukan "sama dengan"</h4>
<p>Di matematika, <code>x = x + 1</code> mustahil. Di Python, bacanya: "<b>hitung</b> yang di kanan, lalu <b>simpan</b> ke kotak di kiri".</p>
<pre><code>skor = 10
skor = skor + 5     # kanan dihitung dulu: 10 + 5 = 15, lalu disimpan ke skor
print(skor)         # 15</code></pre>
<h4>Teks vs angka: sumber error nomor satu</h4>
<table class="mini-pivot"><tr><th>Kode</th><th>Hasil</th><th>Kenapa</th></tr>
<tr><td><code>"5" + "5"</code></td><td>"55"</td><td>teks + teks = disambung</td></tr>
<tr><td><code>5 + 5</code></td><td>10</td><td>angka + angka = dijumlah</td></tr>
<tr><td><code>"5" + 5</code></td><td>TypeError</td><td>teks dan angka tidak bisa dicampur dengan +</td></tr>
<tr><td><code>"Umur: " + str(20)</code></td><td>"Umur: 20"</td><td>angka diubah dulu jadi teks</td></tr></table>
<p>Ingat: hasil <code>input()</code> selalu teks. Pola aman membaca angka dari pengguna:</p>
<pre><code>umur = int(input("Umur: "))     # ketik 20 → umur berisi angka 20
print(umur + 1)                 # 21</code></pre>
<h4>Mengatur tampilan print: sep dan end</h4>
<pre><code>print("A", "B", "C")            # A B C     (pemisah bawaan: spasi)
print("A", "B", "C", sep="-")   # A-B-C     (sep mengganti pemisah)
print("Halo", end=" ")          # end mengganti "pindah baris" di akhir
print("Rina")                   # Halo Rina (satu baris)</code></pre>
<h4>Aturan nama variabel</h4>
<ul><li>Boleh huruf, angka, dan garis bawah <code>_</code>, tapi <b>tidak boleh diawali angka</b> dan tidak boleh ada spasi.</li><li>Huruf besar dan kecil berbeda: <code>Nama</code> dan <code>nama</code> adalah dua kotak berbeda.</li><li>Gaya Python: huruf kecil dengan garis bawah, misalnya <code>total_harga</code>. Pilih nama yang menjelaskan isinya.</li><li>Jangan memakai nama bawaan seperti <code>print</code>, <code>input</code>, <code>list</code> sebagai nama variabel.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> minta pengguna mengetik harga dan jumlah barang dengan <code>input()</code>, ubah keduanya dengan <code>int()</code>, lalu cetak "Total: ..." memakai <code>sep</code> atau <code>str()</code>.</div>`);

  dalami("operator", `
<h4>Urutan pengerjaan (seperti matematika SD)</h4>
<ol><li>Kurung <code>( )</code></li><li>Pangkat <code>**</code></li><li>Kali, bagi, bagi bulat, sisa: <code>* / // %</code> (dari kiri ke kanan)</li><li>Tambah dan kurang <code>+ -</code></li><li>Perbandingan <code>== != &lt; &gt; &lt;= &gt;=</code></li><li><code>not</code>, lalu <code>and</code>, lalu <code>or</code></li></ol>
<pre><code>print(2 + 3 * 4)        # 14  → 3 * 4 dulu
print((2 + 3) * 4)      # 20  → kurung dulu
print(10 - 4 - 3)       # 3   → dari kiri: (10 - 4) - 3</code></pre>
<p>Kalau ragu, <b>pakai kurung</b>. Kode jadi lebih mudah dibaca dan tidak ada salah tafsir.</p>
<h4>Tiga cara membagi</h4>
<table class="mini-pivot"><tr><th>Operator</th><th>17 dan 5</th><th>Artinya</th><th>Contoh pemakaian</th></tr>
<tr><td><code>/</code></td><td>3.4</td><td>bagi biasa, selalu float</td><td>rata-rata nilai</td></tr>
<tr><td><code>//</code></td><td>3</td><td>berapa kali muat (dibulatkan ke bawah)</td><td>17 jam = 3 hari kerja @5 jam</td></tr>
<tr><td><code>%</code></td><td>2</td><td>sisa setelah dibagi</td><td>cek genap: <code>n % 2 == 0</code></td></tr></table>
<p>Contoh nyata: 125 menit = berapa jam dan menit?</p>
<pre><code>menit = 125
print(menit // 60, "jam", menit % 60, "menit")   # 2 jam 5 menit</code></pre>
<h4>Perbandingan selalu menjawab True atau False</h4>
<pre><code>umur = 17
print(umur &gt;= 17)     # True
print(umur == 18)     # False
print(umur != 18)     # True   (!= artinya tidak sama)</code></pre>
<p>Jebakan klasik: <code>=</code> mengisi variabel, <code>==</code> membandingkan. <code>if umur = 17:</code> adalah SyntaxError.</p>
<h4>and, or, not dengan tabel kebenaran</h4>
<table class="mini-pivot"><tr><th>A</th><th>B</th><th>A and B</th><th>A or B</th></tr>
<tr><td>True</td><td>True</td><td>True</td><td>True</td></tr>
<tr><td>True</td><td>False</td><td>False</td><td>True</td></tr>
<tr><td>False</td><td>True</td><td>False</td><td>True</td></tr>
<tr><td>False</td><td>False</td><td>False</td><td>False</td></tr></table>
<p>Hafalan cepat: <b>and</b> = "harus dua-duanya" (seperti syarat masuk: punya tiket DAN sudah 17 tahun). <b>or</b> = "salah satu cukup" (bayar tunai ATAU transfer). <b>not</b> membalik jawaban.</p>
<div class="praktik"><b>Coba sendiri:</b> buat variabel <code>detik = 3725</code>, lalu cetak berapa jam, menit, dan detik memakai <code>//</code> dan <code>%</code>. (Jawaban: 1 jam 2 menit 5 detik.)</div>`);

  dalami("string", `
<h4>Peta indeks: tulis dulu di kertas</h4>
<p>Setiap huruf punya nomor dari depan (mulai 0) dan dari belakang (mulai -1):</p>
<table class="mini-pivot"><tr><th>Huruf</th><td>P</td><td>y</td><td>t</td><td>h</td><td>o</td><td>n</td></tr>
<tr><th>Dari depan</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><th>Dari belakang</th><td>-6</td><td>-5</td><td>-4</td><td>-3</td><td>-2</td><td>-1</td></tr></table>
<p>Kenapa mulai 0? Anggap indeks = "berapa langkah dari awal". Huruf pertama berjarak 0 langkah.</p>
<h4>Slicing: bayangkan pisau di antara huruf</h4>
<p><code>teks[a:b]</code> memotong di garis sebelum indeks <code>a</code> dan sebelum indeks <code>b</code>. Jumlah huruf yang diambil = <code>b - a</code>.</p>
<pre><code>kata = "Python"
kata[1:4]    # "yth"   → indeks 1, 2, 3 (3 huruf = 4 - 1)
kata[:2]     # "Py"    → dari awal
kata[3:]     # "hon"   → sampai habis
kata[-3:]    # "hon"   → 3 huruf terakhir
kata[::2]    # "Pto"   → lompat 2
kata[::-1]   # "nohtyP"→ dibalik</code></pre>
<h4>Teks tidak bisa diubah (immutable)</h4>
<pre><code>kata = "kopi"
kata[0] = "K"          # TypeError! huruf tidak bisa diganti langsung
kata = "K" + kata[1:]  # benar: buat teks BARU, lalu simpan
print(kata)            # Kopi</code></pre>
<p>Method seperti <code>.upper()</code> dan <code>.replace()</code> juga <b>tidak mengubah teks asli</b>. Mereka memberi teks baru, jadi simpan hasilnya: <code>nama = nama.strip()</code>.</p>
<h4>Method yang paling sering dipakai</h4>
<table class="mini-pivot"><tr><th>Method</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>.strip()</code></td><td><code>"  hai ".strip()</code></td><td>"hai"</td></tr>
<tr><td><code>.lower() / .upper()</code></td><td><code>"Hai".lower()</code></td><td>"hai"</td></tr>
<tr><td><code>.title()</code></td><td><code>"budi santoso".title()</code></td><td>"Budi Santoso"</td></tr>
<tr><td><code>.replace(a, b)</code></td><td><code>"1.000".replace(".", "")</code></td><td>"1000"</td></tr>
<tr><td><code>.split(pemisah)</code></td><td><code>"a b c".split()</code></td><td>['a', 'b', 'c']</td></tr>
<tr><td><code>.startswith(x)</code></td><td><code>"0812".startswith("08")</code></td><td>True</td></tr>
<tr><td><code>.count(x)</code></td><td><code>"banana".count("a")</code></td><td>3</td></tr>
<tr><td><code>.find(x)</code></td><td><code>"kopi".find("p")</code></td><td>2 (-1 kalau tidak ada)</td></tr></table>
<h4>f-string untuk angka</h4>
<pre><code>harga = 1250000
rata = 7 / 3
print(f"{harga:,}")      # 1,250,000   pemisah ribuan
print(f"{rata:.2f}")     # 2.33        2 angka di belakang koma
print(f"{harga * 2}")    # 2500000     boleh berisi hitungan</code></pre>
<div class="praktik"><b>Coba sendiri:</b> dari <code>email = "  Rina.Putri@Gmail.com "</code>, buat versi rapi (tanpa spasi, huruf kecil semua), lalu ambil bagian sebelum tanda @ memakai <code>.split("@")</code>.</div>`);

  dalami("kondisi", `
<h4>Baca if seperti kalimat</h4>
<pre><code>if saldo &gt;= harga:
    print("Pembayaran berhasil")
else:
    print("Saldo kurang")</code></pre>
<p>"<b>Jika</b> saldo lebih dari atau sama dengan harga, cetak berhasil. <b>Kalau tidak</b>, cetak saldo kurang." Hanya <b>satu</b> dari dua blok yang jalan, tidak pernah keduanya.</p>
<h4>Indentasi = siapa ikut siapa</h4>
<pre><code>if hujan:
    print("bawa payung")      # milik if (menjorok)
    print("pakai jaket")      # milik if juga
print("berangkat")            # bukan milik if: selalu jalan</code></pre>
<p>Aturannya sederhana:</p>
<ul><li>Baris yang diakhiri titik dua <code>:</code> membuka blok.</li><li>Baris di bawahnya <b>wajib</b> menjorok satu Tab (4 spasi).</li><li>Blok selesai saat ada baris yang kembali sejajar dengan <code>if</code>.</li></ul>
<p>Di editor KodeQuiz, kalau kamu lupa menjorokkan baris setelah titik dua, baris itu langsung diberi <b>garis merah</b> dan muncul tombol merah berisi penjelasannya, seperti di VS Code. Tekan Tab untuk menjorokkan, Backspace untuk menghapus satu Tab sekaligus.</p>
<h4>if-elif-else: berhenti di syarat benar pertama</h4>
<pre><code>nilai = 85
if nilai &gt;= 90:
    huruf = "A"
elif nilai &gt;= 80:      # dicek hanya jika di atasnya salah
    huruf = "B"        # 85 berhenti di sini
elif nilai &gt;= 70:
    huruf = "C"        # tidak dicek lagi
else:
    huruf = "D"</code></pre>
<p>Karena berhenti di syarat benar <b>pertama</b>, urutkan dari yang paling ketat. Kalau <code>nilai &gt;= 70</code> ditaruh paling atas, nilai 95 pun akan dapat C.</p>
<h4>if-elif vs if-if</h4>
<table class="mini-pivot"><tr><th>if ... elif ...</th><th>if ... if ...</th></tr>
<tr><td>Satu rangkaian: maksimal satu cabang jalan</td><td>Dua pertanyaan terpisah: bisa jalan dua-duanya</td></tr>
<tr><td>Cocok untuk memilih satu kategori (A/B/C)</td><td>Cocok untuk syarat yang saling bebas (diskon member, gratis ongkir)</td></tr></table>
<h4>Kesalahan yang sering terjadi</h4>
<ul><li>Lupa titik dua: <code>if x &gt; 5</code> → SyntaxError.</li><li>Memakai <code>=</code> untuk membandingkan: <code>if x = 5:</code> → SyntaxError. Pakai <code>==</code>.</li><li>Menulis <code>if x == 1 or 2:</code> (selalu benar!). Yang benar <code>if x == 1 or x == 2:</code> atau <code>if x in (1, 2):</code>.</li><li>Lupa menjorokkan baris di bawah if → IndentationError.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat program ongkos kirim: berat di bawah 1 kg Rp10.000, 1 sampai 5 kg Rp20.000, di atas 5 kg Rp35.000. Uji dengan berat 0.5, 1, 5, dan 7.</div>`);
})();
