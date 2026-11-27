// ============ PYTHON — tambahan 2x lipat (bagian 3): error, oop, modul, pandas, odoo ============
// Pola sama dengan soal-python-4.js. Soal pandas memakai PD_SETUP (soal-python-2.js) sebagai kode persiapan.
(function () {
  const O = (k, lv, kode, o, e, w) => ({ k, t: "mc", lv, q: "Output kode ini:", kode, o, a: 0, vr: "py", e, ...(w ? { w: [null, ...w] } : {}) });
  const P = (lv, kode, o, e, w) => ({ ...O("pandas", lv, kode, o, e, w), tb: "penjualan", vpre: PD_SETUP, q: "df berisi data penjualan di atas. Output kode ini:" });
  const M = (k, lv, q, o, e, w, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}), ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_PYTHON.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_PYTHON.push(
  // ---- error (+15) ----
  O("error", 1, 'try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("Tidak bisa dibagi nol")', ["Tidak bisa dibagi nol", "0", "inf", "ZeroDivisionError"],
    "10 / 0 menimbulkan ZeroDivisionError. Karena ada except yang menangkapnya, program tidak berhenti dan menjalankan isi except.",
    ["Pembagian dengan nol tidak menghasilkan angka.", "Python tidak memberi inf untuk pembagian int.", "Error-nya sudah ditangkap, jadi pesan error tidak muncul."]),
  O("error", 1, 'try:\n    angka = int("abc")\nexcept ValueError:\n    angka = 0\nprint(angka)', ["0", "abc", "None", "ValueError"],
    "int(\"abc\") gagal karena abc bukan angka (ValueError). except mengisi angka dengan 0 sebagai cadangan.",
    ["abc tidak bisa diubah jadi angka.", "angka diisi 0 di except.", "Error sudah ditangkap."]),
  O("error", 1, 'try:\n    print("A")\n    x = 1 / 0\n    print("B")\nexcept ZeroDivisionError:\n    print("C")', ["A\nC", "A\nB\nC", "C", "A\nB"],
    "Begitu error terjadi, sisa blok try DILEWATI dan Python langsung lompat ke except. Jadi A tercetak, B tidak, lalu C.",
    ["Baris setelah error di try tidak dijalankan.", "A sudah tercetak sebelum error.", "except tetap jalan karena ada error."]),
  O("error", 2, 'try:\n    hasil = 10 / 2\nexcept ZeroDivisionError:\n    print("gagal")\nelse:\n    print("berhasil", hasil)', ["berhasil 5.0", "gagal", "berhasil 5", "gagal\nberhasil 5.0"],
    "else di try hanya jalan kalau TIDAK ada error. 10 / 2 = 5.0 (pembagian / selalu float).",
    ["Tidak ada error, jadi except dilewati.", "/ menghasilkan float.", "except dan else tidak jalan bersamaan."]),
  O("error", 2, 'try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("ditangkap")\nfinally:\n    print("selesai")', ["ditangkap\nselesai", "selesai", "ditangkap", "selesai\nditangkap"],
    "finally SELALU dijalankan di akhir, ada error atau tidak. Cocok untuk merapikan, misalnya menutup file.",
    ["except juga jalan karena ada error.", "finally tetap jalan.", "finally jalan paling akhir."]),
  O("error", 2, 'data = [1, 2, 3]\ntry:\n    print(data[5])\nexcept IndexError:\n    print("indeks di luar jangkauan")', ["indeks di luar jangkauan", "3", "None", "IndexError"],
    "List hanya punya indeks 0 sampai 2. data[5] menimbulkan IndexError yang ditangkap except.",
    ["Indeks 5 tidak ada.", "Python tidak memberi None untuk indeks yang tidak ada.", "Error sudah ditangkap."]),
  O("error", 2, 'stok = {"kopi": 5}\ntry:\n    print(stok["teh"])\nexcept KeyError:\n    print("produk tidak ada")', ["produk tidak ada", "0", "None", "KeyError"],
    "Mengambil kunci yang tidak ada di dict dengan kurung siku menimbulkan KeyError.",
    ["Dict tidak memberi 0 otomatis.", "Kurung siku tidak memberi None; .get() yang memberi None.", "Error sudah ditangkap."]),
  O("error", 2, 'try:\n    int("x")\nexcept (ValueError, TypeError) as e:\n    print(type(e).__name__)', ["ValueError", "TypeError", "e", "x"],
    "Satu except boleh menangkap beberapa jenis error dalam tuple. as e menyimpan error-nya, dan type(e).__name__ memberi nama jenisnya.",
    ["int(\"x\") menimbulkan ValueError, bukan TypeError.", "Yang dicetak nama jenis error.", "Yang dicetak nama jenis error."]),
  O("error", 2, 'def bagi(a, b):\n    if b == 0:\n        raise ValueError("pembagi nol")\n    return a / b\n\ntry:\n    bagi(4, 0)\nexcept ValueError as e:\n    print("Error:", e)', ["Error: pembagi nol", "Error: ValueError", "0", "inf"],
    "raise membuat error dengan sengaja beserta pesannya. Pesan itu bisa dibaca lewat e di except.",
    ["print(e) mencetak pesannya.", "Fungsi berhenti di raise, tidak me-return.", "Pembagian tidak pernah dijalankan."]),
  O("error", 3, 'def ambil(d, k):\n    try:\n        return d[k]\n    except KeyError:\n        return "kosong"\n    finally:\n        print("cek", k)\n\nprint(ambil({"a": 1}, "b"))', ["cek b\nkosong", "kosong\ncek b", "kosong", "cek b"],
    "finally dijalankan SEBELUM fungsi benar-benar keluar, walaupun ada return. Jadi 'cek b' tercetak dulu, baru hasil return dicetak oleh print di luar.",
    ["finally jalan sebelum hasil diserahkan ke print luar.", "finally tetap jalan walau ada return.", "Hasil return juga dicetak."]),
  M("error", 1, "Kenapa error perlu ditangani dengan try/except?", ["Supaya program tidak berhenti mendadak dan bisa memberi pesan yang jelas", "Supaya program lebih cepat", "Supaya error hilang dari kode selamanya", "Wajib di setiap baris"],
    "Data dari pengguna, file, atau internet bisa salah. try/except membuat program tetap berjalan dan memberi tahu masalahnya dengan sopan.",
    ["Tidak membuat lebih cepat.", "Kesalahan logika tetap harus diperbaiki.", "Pakai hanya di bagian yang berisiko."]),
  M("error", 2, "Membaca traceback (laporan error) sebaiknya dimulai dari…", ["Baris paling bawah: jenis dan pesan error, lalu baris kode yang ditunjuk", "Baris paling atas saja", "Tidak perlu dibaca", "Nama file saja"],
    "Baris terakhir traceback berisi jenis error (misalnya NameError) dan penjelasannya. Di atasnya ada 'line N' yang menunjuk baris kodemu yang bermasalah.",
    ["Baris atas hanya awal jejak panggilan.", "Traceback adalah petunjuk terbaik.", "Jenis error ada di baris terakhir."]),
  M("error", 2, "Mengapa except: kosong (menangkap semua error) sebaiknya dihindari?", ["Menyembunyikan kesalahan lain yang tidak terduga, sehingga bug sulit dicari", "Karena error sintaks", "Karena lebih lambat", "Tidak ada alasannya"],
    "Tangkap jenis error yang memang kamu perkirakan (ValueError, KeyError, dll.). except kosong juga menangkap salah ketik nama variabel, jadi bug-nya tersembunyi.",
    ["Bentuk itu sah secara sintaks.", "Masalahnya bukan kecepatan.", "Ada alasan kuat."]),
  M("error", 2, "Cara paling aman membuka file supaya pasti ditutup lagi:", ["with open(\"data.txt\") as f:", "f = open(\"data.txt\") tanpa close", "open(\"data.txt\").close() dulu", "import file"],
    "with menutup file otomatis saat blok selesai, bahkan bila terjadi error di dalamnya.",
    ["File bisa lupa ditutup.", "Menutup sebelum membaca tidak berguna.", "Bukan cara membuka file."]),
  I("error", 1, "Kata kunci untuk sengaja memunculkan error: ____ ValueError(\"umur negatif\")", ["raise"], "raise memunculkan error dengan pesan yang kamu tentukan."),

  // ---- oop (+15) ----
  O("oop", 1, 'class Kucing:\n    def __init__(self, nama):\n        self.nama = nama\n\nk = Kucing("Mochi")\nprint(k.nama)', ["Mochi", "nama", "Kucing", "self.nama"],
    "__init__ dijalankan otomatis saat objek dibuat. self.nama = nama menyimpan \"Mochi\" ke dalam objek k.",
    ["Yang dicetak isi atribut.", "Kucing nama class-nya.", "self.nama hanya cara menulis di dalam class."]),
  O("oop", 1, 'class Lampu:\n    def __init__(self):\n        self.nyala = False\n    def tekan(self):\n        self.nyala = not self.nyala\n\nl = Lampu()\nl.tekan()\nl.tekan()\nl.tekan()\nprint(l.nyala)', ["True", "False", "3", "None"],
    "Awalnya False. Setiap tekan membalik: True, False, True. Setelah 3 kali, True.",
    ["Ditekan 3 kali (ganjil), jadi menyala.", "Yang disimpan True/False.", "Atribut nyala sudah diisi di __init__."]),
  O("oop", 2, 'class Akun:\n    def __init__(self, saldo):\n        self.saldo = saldo\n    def tarik(self, n):\n        if n > self.saldo:\n            return "saldo kurang"\n        self.saldo -= n\n        return self.saldo\n\na = Akun(100)\nprint(a.tarik(30), a.tarik(100))', ["70 saldo kurang", "70 -30", "70 0", "saldo kurang 70"],
    "Tarik 30: saldo jadi 70. Tarik 100: lebih besar dari 70, jadi ditolak tanpa mengubah saldo.",
    ["Penarikan kedua ditolak.", "Saldo tidak boleh minus di kode ini.", "Urutannya tarik 30 dulu."]),
  O("oop", 2, 'class Titik:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\na = Titik(1, 2)\nb = Titik(5, 7)\nprint(a.x + b.y)', ["8", "3", "12", "6"],
    "Setiap objek menyimpan datanya sendiri. a.x = 1, b.y = 7, jadi 8.",
    ["Itu a.x + a.y.", "Itu b.x + b.y.", "Itu a.x + b.x."]),
  O("oop", 2, 'class Hewan:\n    def suara(self):\n        return "..."\n\nclass Anjing(Hewan):\n    def suara(self):\n        return "Guk"\n\nclass Ikan(Hewan):\n    pass\n\nprint(Anjing().suara(), Ikan().suara())', ["Guk ...", "Guk Guk", "... ...", "Error"],
    "Anjing menimpa (override) method suara milik induk. Ikan tidak menimpa apa pun, jadi memakai milik Hewan.",
    ["Ikan memakai suara induk.", "Anjing punya suaranya sendiri.", "Ikan mewarisi method dari Hewan."]),
  O("oop", 2, 'class Karyawan:\n    def __init__(self, nama, gaji):\n        self.nama = nama\n        self.gaji = gaji\n\nclass Manajer(Karyawan):\n    def __init__(self, nama, gaji, tunjangan):\n        super().__init__(nama, gaji)\n        self.tunjangan = tunjangan\n\nm = Manajer("Rina", 10, 5)\nprint(m.nama, m.gaji + m.tunjangan)', ["Rina 15", "Rina 10", "Error", "Manajer 15"],
    "super().__init__(...) menjalankan __init__ milik induk, jadi nama dan gaji ikut terisi. Lalu tunjangan ditambahkan.",
    ["Tunjangan juga dijumlah.", "super() mengisi nama dan gaji, jadi tidak error.", "nama berisi Rina."]),
  O("oop", 2, 'class Produk:\n    def __init__(self, nama):\n        self.nama = nama\n    def __str__(self):\n        return "Produk: " + self.nama\n\nprint(Produk("Kopi"))', ["Produk: Kopi", "Kopi", "<__main__.Produk object>", "Error"],
    "__str__ menentukan teks yang muncul saat objek di-print. Tanpa __str__, Python mencetak alamat objek yang tidak informatif.",
    ["__str__ menambahkan awalan Produk:.", "Karena ada __str__, alamat objek tidak dicetak.", "Kodenya sah."]),
  O("oop", 2, 'class Keranjang:\n    def __init__(self):\n        self.isi = []\n    def tambah(self, x):\n        self.isi.append(x)\n\na = Keranjang()\nb = Keranjang()\na.tambah("apel")\nprint(len(a.isi), len(b.isi))', ["1 0", "1 1", "0 0", "2 0"],
    "List dibuat di __init__, jadi setiap objek punya keranjangnya sendiri. Menambah ke a tidak mengubah b.",
    ["b punya list sendiri.", "a sudah diisi satu.", "Hanya satu item ditambahkan."]),
  O("oop", 3, 'class Hitung:\n    jumlah = 0\n    def __init__(self):\n        Hitung.jumlah += 1\n\nHitung()\nHitung()\nHitung()\nprint(Hitung.jumlah)', ["3", "1", "0", "Error"],
    "jumlah ditulis langsung di class (atribut class), jadi DIBAGI semua objek. Setiap objek baru menambah 1.",
    ["Atribut class dipakai bersama.", "Ada tiga objek dibuat.", "Kodenya sah."]),
  M("oop", 1, "Hubungan class dan objek paling tepat diibaratkan:", ["Cetakan kue dan kue-kuenya", "Kue dan cetakannya, terbalik", "Dua nama untuk hal yang sama", "Fungsi dan variabel"],
    "Class = cetakan (aturan bentuk). Objek = kue nyata yang dicetak; tiap kue bisa punya isi berbeda (rasa, topping).",
    ["Terbalik.", "Keduanya berbeda.", "Bukan itu hubungannya."]),
  M("oop", 1, "Apa itu self di dalam method?", ["Objek yang sedang memakai method itu", "Nama class", "Variabel global", "Kata kunci untuk membuat class"],
    "self menunjuk objek itu sendiri. Saat menulis a.tarik(30), Python mengisi self dengan a.",
    ["self bukan nama class.", "self milik objek, bukan global.", "Class dibuat dengan kata kunci class."]),
  M("oop", 2, "Kapan inheritance (pewarisan) tepat dipakai?", ["Saat class baru adalah 'jenis khusus' dari class lain, misalnya Manajer adalah Karyawan", "Setiap kali dua class punya satu atribut sama", "Untuk mempercepat program", "Untuk mengganti fungsi biasa"],
    "Uji kalimat 'X adalah sejenis Y'. Manajer adalah sejenis Karyawan: cocok diwariskan. Mobil bukan sejenis Mesin (mobil PUNYA mesin), jadi tidak cocok.",
    ["Satu atribut sama belum cukup alasan.", "Tidak terkait kecepatan.", "Fungsi biasa tetap berguna."]),
  M("oop", 2, "Di Odoo, class SaleOrder(models.Model): _inherit = 'sale.order' memakai konsep OOP…", ["Pewarisan: menambah atau mengubah model yang sudah ada", "Membuat objek baru", "Menghapus model", "Menyalin database"],
    "Odoo memakai pewarisan agar modul kustom bisa menambah field/method ke model bawaan tanpa mengubah kode aslinya.",
    ["Ini mengubah model yang ada, bukan membuat objek.", "Tidak menghapus apa pun.", "Tidak menyalin database."]),
  I("oop", 1, "Method khusus yang otomatis jalan saat objek dibuat: ____", ["__init__"], "__init__ menyiapkan isi awal objek."),
  I("oop", 2, "Fungsi untuk memanggil method milik class induk: ____().__init__(nama)", ["super"], "super() mengacu ke class induk."),

  // ---- modul (+15) ----
  O("modul", 1, 'import math\nprint(math.sqrt(49))', ["7.0", "7", "49", "Error"],
    "math.sqrt menghitung akar kuadrat dan selalu memberi float: 7.0.",
    ["sqrt memberi float.", "Ini akar dari 49.", "math adalah modul bawaan."]),
  O("modul", 1, 'import math\nprint(math.ceil(4.1), math.floor(4.9))', ["5 4", "4 5", "4 4", "5 5"],
    "ceil = bulatkan ke ATAS (4.1 → 5). floor = bulatkan ke BAWAH (4.9 → 4).",
    ["ceil ke atas, floor ke bawah.", "ceil tidak memotong ke bawah.", "floor tidak membulatkan ke atas."]),
  O("modul", 1, 'from math import pi\nprint(round(pi, 2))', ["3.14", "3.1416", "3", "pi"],
    "from math import pi mengambil pi saja, jadi bisa ditulis tanpa awalan math. round(…, 2) membulatkan 2 desimal.",
    ["Dibulatkan 2 desimal.", "round dengan 2 tetap menyisakan desimal.", "Yang dicetak nilainya."]),
  O("modul", 2, 'import math as m\nprint(m.pow(2, 3))', ["8.0", "8", "6.0", "Error"],
    "as m memberi nama panggilan pendek. math.pow selalu memberi float, jadi 8.0 (berbeda dengan 2 ** 3 yang memberi 8).",
    ["math.pow memberi float.", "Ini pangkat, bukan kali.", "Alias sah dipakai."]),
  O("modul", 2, 'import random\nrandom.seed(1)\na = random.randint(1, 100)\nrandom.seed(1)\nb = random.randint(1, 100)\nprint(a == b)', ["True", "False", "Error", "Tidak bisa ditebak"],
    "random.seed(angka) mengatur titik awal acakan. Dengan seed yang sama, urutan angka acaknya selalu sama, berguna untuk pengujian.",
    ["seed sama menghasilkan angka sama.", "Kodenya sah.", "Dengan seed, hasilnya bisa ditebak."]),
  O("modul", 2, 'from datetime import date\nd = date(2026, 11, 27)\nprint(d.year, d.month)', ["2026 11", "2026-11", "27 11", "11 2026"],
    "Objek date menyimpan tahun, bulan, tanggal sebagai atribut .year, .month, .day.",
    ["Dicetak dua angka terpisah spasi.", ".month bukan .day.", "Urutannya year dulu."]),
  O("modul", 2, 'from datetime import date\nselisih = date(2026, 12, 25) - date(2026, 11, 27)\nprint(selisih.days)', ["28", "29", "27", "Error"],
    "Mengurangi dua tanggal menghasilkan timedelta. .days memberi selisihnya dalam hari: 3 hari sisa November + 25 Desember = 28.",
    ["Hitung ulang: 30 - 27 = 3, ditambah 25.", "Hitung ulang.", "Mengurangi tanggal itu sah."]),
  O("modul", 2, 'import json\nteks = json.dumps({"nama": "Ani", "umur": 21})\nprint(teks)', ["{\"nama\": \"Ani\", \"umur\": 21}", "{'nama': 'Ani', 'umur': 21}", "nama Ani umur 21", "Error"],
    "json.dumps mengubah dict menjadi teks JSON. JSON memakai tanda kutip GANDA, berbeda dengan tampilan dict Python yang memakai kutip tunggal.",
    ["JSON memakai kutip ganda.", "Hasilnya teks JSON lengkap.", "dumps sah untuk dict."]),
  O("modul", 2, 'import json\ndata = json.loads(\'{"harga": 18000}\')\nprint(data["harga"] + 2000)', ["20000", "180002000", "Error", "18000"],
    "json.loads mengubah teks JSON menjadi dict Python. Angka di JSON menjadi int, jadi bisa langsung dijumlah.",
    ["Angkanya sudah int, bukan teks.", "Kodenya sah.", "Ada + 2000."]),
  O("modul", 3, 'from collections import Counter\nc = Counter("mississippi")\nprint(c.most_common(2))', ["[('i', 4), ('s', 4)]", "[('s', 4), ('i', 4)]", "{'i': 4, 's': 4}", "[('m', 1), ('p', 2)]"],
    "Counter menghitung kemunculan otomatis. most_common(2) memberi 2 terbanyak; i dan s sama-sama 4, dan yang lebih dulu muncul (i) ditaruh di depan.",
    ["Saat seri, urutan kemunculan pertama dipakai: i muncul sebelum s.", "most_common memberi list berisi tuple.", "Itu bukan yang terbanyak."]),
  M("modul", 1, "Apa itu modul di Python?", ["File berisi kode (fungsi, class) yang bisa dipakai program lain lewat import", "Jenis error", "Tipe data baru", "Nama lain dari variabel"],
    "Modul = kotak perkakas. Daripada membuat sendiri fungsi akar atau tanggal, cukup import modul yang sudah ada.",
    ["Bukan jenis error.", "Bukan tipe data.", "Bukan variabel."]),
  M("modul", 2, "Kamu menamai file sendiri random.py lalu import random gagal dipakai. Penyebabnya:", ["Python mengimpor file random.py milikmu, bukan modul bawaan", "random tidak ada di Python", "import harus huruf besar", "File harus berakhiran .txt"],
    "Python mencari modul di folder kerja dulu. Jangan menamai file sama dengan modul bawaan (random, math, json, dll.).",
    ["random adalah modul bawaan.", "import ditulis huruf kecil.", "File Python berakhiran .py."]),
  M("modul", 2, "Perintah untuk memasang paket tambahan seperti pandas:", ["python -m pip install pandas", "import install pandas", "pandas install", "python pandas.py"],
    "pip adalah pemasang paket. python -m pip memastikan paket masuk ke Python yang sedang dipakai.",
    ["import hanya memakai, tidak memasang.", "Bukan perintah yang benar.", "Itu menjalankan file."]),
  M("modul", 2, "Gunanya if __name__ == \"__main__\": di bawah file:", ["Kode di dalamnya hanya jalan saat file dijalankan langsung, tidak saat diimpor", "Wajib agar Python bisa jalan", "Membuat fungsi utama otomatis", "Mempercepat import"],
    "Saat file diimpor, __name__ berisi nama modulnya, bukan \"__main__\". Jadi contoh/uji di bawah if itu tidak ikut jalan ketika file dipakai modul lain.",
    ["Tidak wajib.", "Tidak membuat fungsi otomatis.", "Tidak terkait kecepatan."]),
  I("modul", 1, "Kata kunci untuk memberi nama panggilan: import pandas ____ pd", ["as"], "as memberi alias."),

  // ---- pandas (+16) ----
  P(1, 'print(len(df))', ["10", "5", "50", "6"],
    "len(df) = banyaknya BARIS. Data ini punya 10 transaksi.",
    ["5 adalah banyak kolom.", "Bukan baris × kolom.", "Hitung ulang barisnya."]),
  P(1, 'print(df["Qty"].sum())', ["35", "10", "45250000", "3.5"],
    "Memilih satu kolom (df[\"Qty\"]) menghasilkan Series. .sum() menjumlahkan semua isinya: 2+10+3+5+1+4+1+2+6+1 = 35.",
    ["10 adalah Qty terbesar atau banyak baris.", "Itu jumlah kolom Total.", "Itu rata-rata."]),
  P(1, 'print(df["Qty"].max())', ["10", "35", "1", "6"],
    ".max() mencari nilai terbesar di kolom.",
    ["Itu jumlahnya.", "Itu nilai terkecil.", "Masih ada yang lebih besar."]),
  P(1, 'print(df["Total"].mean())', ["4525000.0", "45250000", "4525000", "10"],
    ".mean() = rata-rata = total ÷ banyak baris = 45.250.000 ÷ 10. Hasil rata-rata ditampilkan sebagai float.",
    ["Itu jumlah, bukan rata-rata.", "mean memberi float (.0).", "Itu banyak baris."]),
  P(1, 'print(df["Produk"].nunique())', ["4", "10", "3", "5"],
    ".nunique() menghitung banyaknya nilai BERBEDA: Laptop, Mouse, Monitor, Keyboard.",
    ["10 adalah banyak baris.", "Ada 4 jenis produk.", "Hitung ulang jenis produknya."]),
  P(2, 'print(len(df[df["Total"] > 5000000]))', ["4", "3", "5", "6"],
    "df[syarat] menyaring baris. Yang Total-nya di atas 5 juta: 14 jt, 6 jt, 7 jt, 7 jt = 4 baris.",
    ["7 juta muncul dua kali.", "5 juta pas tidak ada di data; hitung ulang.", "Hitung ulang."]),
  P(2, 'print(df[df["Wilayah"] == "Jakarta"]["Total"].sum())', ["25200000", "4", "14000000", "45250000"],
    "Saring Jakarta dulu (4 baris), lalu jumlahkan Total-nya: 14 jt + 6 jt + 1,2 jt + 4 jt = 25,2 jt.",
    ["4 adalah banyak barisnya.", "Itu satu transaksi saja.", "Itu total semua wilayah."]),
  P(2, 'print(df.loc[df["Qty"] >= 5, "Sales"].tolist())', ["['Bima', 'Andi', 'Dewi']", "['Andi', 'Bima', 'Dewi']", "['Bima']", "3"],
    "df.loc[syarat, kolom] menyaring baris lalu mengambil kolom tertentu. Urutan mengikuti urutan baris di data: Bima (10), Andi (5), Dewi (6).",
    ["Urutan mengikuti baris, bukan abjad.", "Qty 5 dan 6 juga ≥ 5.", "tolist memberi list nama."]),
  P(2, 'print(df.groupby("Sales")["Total"].sum()["Citra"])', ["13000000", "6000000", "7000000", "2"],
    "groupby mengelompokkan per Sales, lalu sum menjumlah Total tiap kelompok. Citra: 6 jt + 7 jt = 13 jt.",
    ["Citra punya dua transaksi.", "Citra punya dua transaksi.", "Itu banyak transaksinya."]),
  P(2, 'print(df.groupby("Sales")["Total"].sum().idxmax())', ["Andi", "Citra", "Dewi", "18750000"],
    ".idxmax() memberi LABEL (nama) dari nilai terbesar, bukan nilainya. Andi punya total terbesar (18,75 jt).",
    ["Citra 13 jt, masih di bawah Andi.", "Dewi 8,8 jt.", "idxmax memberi label, bukan angka."]),
  P(2, 'print(df.sort_values("Total").iloc[0]["Sales"])', ["Andi", "Bima", "Dewi", "Citra"],
    "sort_values tanpa ascending=False mengurutkan dari KECIL. Baris pertama (iloc[0]) = Total terkecil, 750.000 milik Andi.",
    ["Bawaan sort_values naik (kecil dulu).", "Cari Total terkecil.", "Cari Total terkecil."]),
  P(2, 'print(df[["Sales", "Total"]].shape)', ["(10, 2)", "(2, 10)", "(10, 5)", "10"],
    "Kurung siku GANDA memilih beberapa kolom dan menghasilkan DataFrame baru: 10 baris, 2 kolom.",
    ["shape = (baris, kolom).", "Hanya 2 kolom yang dipilih.", "shape memberi tuple."]),
  P(3, 'print(df.groupby("Wilayah").size()["Bandung"])', ["3", "10500000", "4", "1"],
    ".size() menghitung banyak baris per kelompok. Bandung punya 3 transaksi.",
    ["size menghitung baris, bukan menjumlah Total.", "4 milik Jakarta.", "Hitung ulang Bandung."]),
  M("pandas", 1, "Beda Series dan DataFrame:", ["Series = satu kolom berlabel; DataFrame = tabel banyak kolom", "Keduanya sama", "Series = tabel, DataFrame = satu angka", "DataFrame hanya untuk teks"],
    "df[\"Total\"] menghasilkan Series (satu kolom). df[[\"Sales\", \"Total\"]] menghasilkan DataFrame (beberapa kolom).",
    ["Bentuknya berbeda.", "Terbalik.", "DataFrame bisa berisi angka dan teks."]),
  M("pandas", 2, "Untuk filter dua syarat di pandas dipakai & dan |, bukan and/or, karena…", ["and/or hanya untuk satu True/False, sedangkan filter bekerja per baris", "and/or lebih lambat", "pandas melarang huruf", "Tidak ada bedanya"],
    "Syarat pandas menghasilkan deretan True/False (satu per baris). & dan | menggabungkannya baris demi baris. Setiap syarat wajib dibungkus kurung.",
    ["Bukan soal kecepatan.", "Bukan soal huruf.", "Hasilnya berbeda: and pada Series menimbulkan error."]),
  I("pandas", 1, "Method untuk melihat 5 baris pertama DataFrame: df.____()", ["head"], "df.head() menampilkan baris teratas."),

  // ---- odoo (+16) ----
  M("odoo", 1, "Field Odoo untuk pilihan tetap seperti Draft, Confirmed, Done:", ["fields.Selection([...])", "fields.Char()", "fields.Boolean()", "fields.Many2one()"],
    "Selection menyimpan satu pilihan dari daftar pasangan (kode, label), misalnya [('draft', 'Draft'), ('done', 'Done')]. Sering dipakai sebagai field state.",
    ["Char menerima teks bebas.", "Boolean hanya ya/tidak.", "Many2one menunjuk record model lain."]),
  M("odoo", 1, "Arti required=True pada field Odoo:", ["Field wajib diisi sebelum record bisa disimpan", "Field disembunyikan", "Field dihitung otomatis", "Field hanya bisa dibaca"],
    "required=True membuat Odoo menolak menyimpan record bila field itu kosong, dan kolom di database diberi NOT NULL.",
    ["Menyembunyikan memakai invisible.", "Dihitung otomatis memakai compute.", "Hanya baca memakai readonly."]),
  M("odoo", 2, "Kode ini mencegah apa?", ["Menyimpan kursus dengan kuota kurang dari 1", "Menghapus kursus", "Mengubah nama kursus", "Membuat kursus baru tanpa nama"],
    "@api.constrains dijalankan saat field yang disebut (kuota) disimpan. raise ValidationError membatalkan penyimpanan dan menampilkan pesan ke pengguna.",
    ["Hapus tidak dicek di sini.", "Yang dicek kuota, bukan nama.", "Yang dicek kuota."],
    "from odoo.exceptions import ValidationError\n\n@api.constrains('kuota')\ndef _cek_kuota(self):\n    for rec in self:\n        if rec.kuota < 1:\n            raise ValidationError('Kuota minimal 1')"),
  M("odoo", 2, "Beda @api.onchange dan @api.depends:", ["onchange bereaksi di layar form saat pengguna mengubah field; depends menghitung computed field kapan pun datanya berubah", "Keduanya sama", "depends hanya untuk tampilan", "onchange menyimpan ke database tanpa tombol Simpan"],
    "onchange: bantuan di form (misalnya mengisi harga saat produk dipilih), belum tersimpan. depends: aturan hitung computed field yang berlaku juga lewat kode dan impor.",
    ["Kegunaannya berbeda.", "depends berlaku di luar tampilan juga.", "onchange belum menyimpan."]),
  M("odoo", 2, "Hasil ekspresi ini adalah…", ["Recordset baru berisi order yang amount_total-nya di atas 1 juta", "True atau False", "Jumlah total semua order", "Order pertama saja"],
    "filtered menyaring recordset yang sudah ada di memori memakai fungsi; hasilnya recordset (bisa kosong).",
    ["filtered mengembalikan record, bukan bool.", "Untuk jumlah pakai sum(mapped(...)).", "Semua yang lolos ikut, bukan hanya satu."],
    "mahal = orders.filtered(lambda o: o.amount_total > 1000000)"),
  M("odoo", 2, "Beda search() dan search_count():", ["search memberi recordset; search_count memberi jumlah record saja", "Keduanya memberi angka", "search_count lebih lengkap", "search hanya mengambil satu record"],
    "Kalau hanya butuh banyaknya, search_count lebih hemat karena tidak memuat record-nya.",
    ["search memberi record.", "search_count hanya angka.", "search bisa banyak record."]),
  M("odoo", 2, "Kode berikut menghasilkan…", ["Satu record kontak baru bernama Toko Maju (dan mengembalikannya)", "Error karena belum ada id", "Mencari kontak Toko Maju", "Menghapus kontak"],
    "create(dict) membuat record baru dan mengembalikan record itu, jadi bisa langsung dipakai: partner.id, partner.name.",
    ["id dibuat otomatis oleh database.", "Mencari memakai search.", "Menghapus memakai unlink."],
    "partner = self.env['res.partner'].create({'name': 'Toko Maju', 'city': 'Batam'})"),
  M("odoo", 2, "orders.write({'state': 'cancel'}) pada recordset berisi 3 order akan…", ["Mengubah state ketiga order menjadi cancel sekaligus", "Mengubah order pertama saja", "Membuat 3 order baru", "Error karena harus satu record"],
    "write bekerja pada seluruh recordset sekaligus.",
    ["write berlaku untuk semua record di recordset.", "write mengubah, tidak membuat.", "write boleh untuk banyak record."]),
  M("odoo", 2, "Gunanya self.ensure_one() di awal method tombol:", ["Memastikan method dipanggil untuk tepat satu record; selain itu langsung error", "Membuat record baru", "Mengambil record pertama", "Menyimpan perubahan"],
    "Banyak method hanya masuk akal untuk satu record (misalnya membuka form). ensure_one mencegah salah pakai pada banyak record.",
    ["Tidak membuat record.", "Tidak memilih otomatis.", "Odoo menyimpan sendiri lewat ORM."]),
  M("odoo", 2, "Di Odoo 17, cara menyembunyikan tombol saat state bukan draft di XML view:", ["invisible=\"state != 'draft'\"", "attrs=\"{'invisible': [('state', '!=', 'draft')]}\" (wajib di Odoo 17)", "hide=\"state\"", "style=\"display:none\""],
    "Odoo 17 menghapus attrs dan states; kondisi ditulis langsung sebagai ekspresi Python di atribut invisible, readonly, required.",
    ["attrs adalah cara lama (Odoo 16 ke bawah) dan ditolak di Odoo 17.", "Tidak ada atribut hide.", "CSS tidak memahami state record."]),
  M("odoo", 2, "Tombol XML <button name=\"action_confirm\" type=\"object\"/> saat diklik akan…", ["Menjalankan method Python action_confirm pada record yang sedang dibuka", "Membuka URL action_confirm", "Menghapus record", "Menjalankan JavaScript"],
    "type=\"object\" memanggil method Python dengan nama yang sama di model itu.",
    ["Bukan tautan.", "Tidak menghapus.", "Bukan JavaScript."]),
  M("odoo", 2, "Agar computed field bisa dicari, dikelompokkan, dan disimpan di database, tambahkan…", ["store=True", "readonly=True", "required=True", "index=False"],
    "Computed field bawaannya dihitung saat dibaca dan tidak disimpan. store=True menyimpannya di database, jadi bisa dipakai di filter, group by, dan laporan.",
    ["readonly hanya melarang ubah manual.", "required tidak terkait.", "index=False tidak menyimpan."]),
  M("odoo", 2, "Kolom berikut milik file apa di modul Odoo?", ["security/ir.model.access.csv: hak akses model per grup", "__manifest__.py", "views/menu.xml", "models/__init__.py"],
    "Baris di ir.model.access.csv memberi grup tertentu hak baca/tulis/buat/hapus (1 = boleh, 0 = tidak) pada satu model.",
    ["Manifest berisi info modul.", "XML view tidak berbentuk CSV.", "__init__.py berisi import."],
    "id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink"),
  M("odoo", 3, "Field One2many wajib diberi nama field kebalikannya. Pada order_line = fields.One2many('sale.order.line', 'order_id'), 'order_id' adalah…", ["Field Many2one di sale.order.line yang menunjuk balik ke sale.order", "Nama tabel", "id order pertama", "Nama menu"],
    "One2many tidak membuat kolom sendiri. Ia membaca semua baris di model lain yang Many2one-nya menunjuk ke record ini.",
    ["Bukan nama tabel.", "Bukan angka id.", "Tidak terkait menu."]),
  M("odoo", 3, "Kapan memakai .sudo() di kode Odoo?", ["Saat proses sistem perlu membaca/mengubah data melewati hak akses pengguna, dengan hati-hati", "Setiap kali menulis data", "Untuk mempercepat query", "Untuk login sebagai admin di browser"],
    "sudo() menjalankan operasi tanpa cek hak akses. Pakai seperlunya (misalnya membuat log sistem), karena bisa membuka data yang seharusnya tidak boleh dilihat pengguna.",
    ["Kalau semua pakai sudo, keamanan rusak.", "Bukan untuk kecepatan.", "Tidak terkait login browser."]),
  I("odoo", 2, "Method ORM untuk menghapus record: records.______()", ["unlink"], "unlink() = DELETE di SQL."),
  );

  dalami("error", `
<h4>Error itu teman, bukan musuh</h4>
<p>Pesan error adalah Python yang memberi tahu <b>apa</b> yang salah dan <b>di mana</b>. Programmer berpengalaman tetap bertemu error setiap hari; bedanya, mereka membaca pesannya dengan tenang.</p>
<h4>Cara membaca traceback dalam 3 langkah</h4>
<pre><code>Traceback (most recent call last):
  File "main.py", line 4, in &lt;module&gt;
    total = harga * jumlh
NameError: name 'jumlh' is not defined</code></pre>
<ol><li><b>Baris paling bawah</b>: jenis error (<code>NameError</code>) dan penjelasannya (nama <code>jumlh</code> tidak dikenal).</li><li><b>line 4</b>: baris kodemu yang bermasalah.</li><li>Cocokkan: ternyata salah ketik <code>jumlh</code>, seharusnya <code>jumlah</code>.</li></ol>
<p>Di editor KodeQuiz, baris yang ditunjuk traceback langsung diberi garis merah.</p>
<h4>Kamus error yang paling sering</h4>
<table class="mini-pivot"><tr><th>Error</th><th>Artinya</th><th>Contoh penyebab</th></tr>
<tr><td>SyntaxError</td><td>tata tulis salah</td><td>lupa titik dua, kurung tidak ditutup</td></tr>
<tr><td>IndentationError</td><td>jorok tidak sesuai</td><td>baris setelah if tidak menjorok</td></tr>
<tr><td>NameError</td><td>nama belum ada</td><td>salah ketik, variabel belum dibuat</td></tr>
<tr><td>TypeError</td><td>jenis data tidak cocok</td><td><code>"umur " + 20</code></td></tr>
<tr><td>ValueError</td><td>jenis benar, isinya salah</td><td><code>int("dua")</code></td></tr>
<tr><td>IndexError</td><td>indeks list di luar jangkauan</td><td><code>[1, 2][5]</code></td></tr>
<tr><td>KeyError</td><td>kunci dict tidak ada</td><td><code>{"a": 1}["b"]</code></td></tr>
<tr><td>ZeroDivisionError</td><td>dibagi nol</td><td><code>10 / 0</code></td></tr>
<tr><td>FileNotFoundError</td><td>file tidak ditemukan</td><td>salah nama atau folder</td></tr>
<tr><td>AttributeError</td><td>method/atribut tidak ada</td><td><code>[1, 2].upper()</code></td></tr></table>
<h4>Alur try-except-else-finally</h4>
<pre><code>try:
    angka = int(input("Angka: "))   # bagian berisiko
except ValueError:
    print("Harus angka!")           # hanya jika gagal
else:
    print("Kuadrat:", angka ** 2)   # hanya jika berhasil
finally:
    print("Selesai")                # selalu</code></pre>
<p>Begitu error terjadi di dalam try, sisa baris try <b>dilewati</b> dan Python langsung lompat ke except yang cocok.</p>
<h4>Pola meminta input sampai benar</h4>
<pre><code>while True:
    teks = input("Umur: ")
    try:
        umur = int(teks)
        break                 # berhasil → keluar loop
    except ValueError:
        print("Ketik angka, misalnya 21")</code></pre>
<div class="praktik"><b>Coba sendiri:</b> buat fungsi <code>bagi_aman(a, b)</code> yang mengembalikan hasil a / b, tetapi mengembalikan teks "tidak bisa dibagi nol" bila b = 0 dan "harus angka" bila salah satu bukan angka (TypeError).</div>`);

  dalami("oop", `
<h4>Kenapa OOP? Masalah yang diselesaikannya</h4>
<p>Bayangkan menyimpan data 3 akun bank dengan variabel biasa: <code>saldo_ani</code>, <code>saldo_budi</code>, <code>nama_ani</code>, ... cepat berantakan. OOP mengumpulkan <b>data</b> (saldo, nama) dan <b>aksi</b> (setor, tarik) ke dalam satu "benda" bernama objek.</p>
<pre><code>class Akun:
    def __init__(self, nama, saldo=0):   # dijalankan saat objek dibuat
        self.nama = nama                 # atribut (data milik objek)
        self.saldo = saldo

    def setor(self, n):                  # method (aksi milik objek)
        self.saldo += n
        return self.saldo

ani = Akun("Ani", 100)    # objek 1
budi = Akun("Budi")       # objek 2, saldo bawaan 0
ani.setor(50)             # 150, budi tetap 0</code></pre>
<h4>Membaca self dengan pelan</h4>
<p>Saat kamu menulis <code>ani.setor(50)</code>, Python sebenarnya menjalankan <code>Akun.setor(ani, 50)</code>. Jadi di dalam method, <code>self</code> = <code>ani</code>, dan <code>self.saldo</code> = saldo milik Ani. Itulah sebabnya setiap method menulis <code>self</code> sebagai parameter pertama.</p>
<h4>Istilah dalam satu tabel</h4>
<table class="mini-pivot"><tr><th>Istilah</th><th>Arti sederhana</th><th>Contoh</th></tr>
<tr><td>class</td><td>cetakan</td><td><code>class Akun:</code></td></tr>
<tr><td>objek / instance</td><td>hasil cetakan</td><td><code>ani = Akun("Ani")</code></td></tr>
<tr><td>atribut</td><td>data milik objek</td><td><code>ani.saldo</code></td></tr>
<tr><td>method</td><td>fungsi milik objek</td><td><code>ani.setor(50)</code></td></tr>
<tr><td>__init__</td><td>persiapan awal objek</td><td>mengisi nama dan saldo</td></tr>
<tr><td>inheritance</td><td>mewarisi dari class lain</td><td><code>class Tabungan(Akun):</code></td></tr>
<tr><td>override</td><td>menimpa method warisan</td><td>method tarik versi baru</td></tr>
<tr><td>super()</td><td>memanggil versi induk</td><td><code>super().__init__(nama)</code></td></tr></table>
<h4>Pewarisan: tambah sedikit, sisanya ikut</h4>
<pre><code>class Tabungan(Akun):
    def __init__(self, nama, saldo=0, bunga=0.02):
        super().__init__(nama, saldo)    # nama &amp; saldo diurus induk
        self.bunga = bunga

    def tambah_bunga(self):
        self.saldo += self.saldo * self.bunga

t = Tabungan("Cici", 1000)
t.setor(500)        # method warisan dari Akun tetap bisa dipakai
t.tambah_bunga()    # method baru milik Tabungan</code></pre>
<p>Hubungan dengan Odoo: semua model Odoo adalah class yang mewarisi <code>models.Model</code>, dan modul kustom memakai <code>_inherit</code> untuk menambah field atau method ke model yang sudah ada.</p>
<h4>Kesalahan yang sering terjadi</h4>
<ul><li>Lupa <code>self</code> di parameter method → TypeError "takes 1 positional argument but 2 were given".</li><li>Menulis <code>saldo = 0</code> tanpa <code>self.</code> di dalam method → hanya variabel lokal, objek tidak berubah.</li><li>Lupa memanggil <code>super().__init__(...)</code> di class anak → atribut induk tidak pernah dibuat.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat class <code>Produk</code> (nama, harga, stok) dengan method <code>jual(qty)</code> yang mengurangi stok dan mengembalikan total harga, tetapi mengembalikan "stok kurang" bila qty melebihi stok.</div>`);

  dalami("modul", `
<h4>Tiga cara import dan kapan dipakai</h4>
<table class="mini-pivot"><tr><th>Cara</th><th>Pemakaian</th><th>Kapan cocok</th></tr>
<tr><td><code>import math</code></td><td><code>math.sqrt(9)</code></td><td>paling jelas asal-usulnya</td></tr>
<tr><td><code>from math import sqrt</code></td><td><code>sqrt(9)</code></td><td>hanya butuh satu-dua alat</td></tr>
<tr><td><code>import pandas as pd</code></td><td><code>pd.read_csv(...)</code></td><td>nama modul panjang, ada alias yang umum</td></tr></table>
<p>Hindari <code>from modul import *</code>: semua nama masuk sekaligus dan bisa menimpa nama milikmu tanpa disadari.</p>
<h4>Modul bawaan yang paling sering dipakai</h4>
<table class="mini-pivot"><tr><th>Modul</th><th>Untuk</th><th>Contoh</th></tr>
<tr><td><code>math</code></td><td>hitungan</td><td><code>math.ceil(4.1)</code> → 5</td></tr>
<tr><td><code>random</code></td><td>angka acak</td><td><code>random.choice(["a", "b"])</code></td></tr>
<tr><td><code>datetime</code></td><td>tanggal dan jam</td><td><code>date.today()</code></td></tr>
<tr><td><code>json</code></td><td>teks JSON ↔ dict</td><td><code>json.loads(teks)</code></td></tr>
<tr><td><code>csv</code></td><td>membaca/menulis CSV</td><td><code>csv.reader(f)</code></td></tr>
<tr><td><code>os</code> / <code>pathlib</code></td><td>file dan folder</td><td><code>Path("data").exists()</code></td></tr>
<tr><td><code>collections</code></td><td>wadah khusus</td><td><code>Counter("aab")</code></td></tr></table>
<h4>Membuat modul sendiri</h4>
<p>Modul hanyalah file .py. Misalnya ada dua file di folder yang sama:</p>
<pre><code># hitung.py
def pajak(harga):
    return harga * 11 // 100

# main.py
import hitung
print(hitung.pajak(10000))    # 1100</code></pre>
<h4>Paket dari internet dengan pip</h4>
<pre><code>python -m pip install pandas        # pasang
python -m pip list                  # lihat yang terpasang
python -m pip freeze &gt; requirements.txt   # catat untuk proyek</code></pre>
<p>Ingat bedanya: <b>pip install</b> = memasang ke komputer (sekali). <b>import</b> = memakai di kode (setiap file yang butuh).</p>
<div class="praktik"><b>Coba sendiri:</b> pakai <code>datetime</code> untuk menghitung berapa hari lagi menuju ulang tahunmu berikutnya, dan <code>random.choice</code> untuk memilih satu kata semangat dari sebuah list.</div>`);

  dalami("pandas", `
<h4>Peta pandas untuk pengguna Excel</h4>
<table class="mini-pivot"><tr><th>Di Excel</th><th>Di pandas</th></tr>
<tr><td>Buka file</td><td><code>df = pd.read_csv("data.csv")</code> / <code>pd.read_excel(...)</code></td></tr>
<tr><td>Lihat beberapa baris</td><td><code>df.head()</code></td></tr>
<tr><td>Info kolom dan tipe</td><td><code>df.info()</code>, <code>df.dtypes</code></td></tr>
<tr><td>Satu kolom</td><td><code>df["Total"]</code></td></tr>
<tr><td>Beberapa kolom</td><td><code>df[["Sales", "Total"]]</code> (kurung ganda)</td></tr>
<tr><td>Filter</td><td><code>df[df["Wilayah"] == "Jakarta"]</code></td></tr>
<tr><td>SUM / AVERAGE / MAX</td><td><code>.sum()</code>, <code>.mean()</code>, <code>.max()</code></td></tr>
<tr><td>COUNTIF</td><td><code>(df["Qty"] &gt;= 5).sum()</code> atau <code>len(df[...])</code></td></tr>
<tr><td>Sort</td><td><code>df.sort_values("Total", ascending=False)</code></td></tr>
<tr><td>Kolom rumus baru</td><td><code>df["Harga"] = df["Total"] / df["Qty"]</code></td></tr>
<tr><td>Pivot table</td><td><code>df.groupby("Sales")["Total"].sum()</code> / <code>pd.pivot_table(...)</code></td></tr>
<tr><td>VLOOKUP</td><td><code>pd.merge(df, df_produk, on="Produk")</code></td></tr></table>
<h4>Membaca filter dari dalam ke luar</h4>
<pre><code>df[df["Total"] &gt; 5000000]</code></pre>
<ol><li><code>df["Total"] &gt; 5000000</code> menghasilkan deretan True/False, satu per baris.</li><li><code>df[...]</code> mengambil baris yang bernilai True saja.</li></ol>
<p>Dua syarat: bungkus masing-masing dengan kurung, gabung dengan <code>&amp;</code> (dan) atau <code>|</code> (atau):</p>
<pre><code>df[(df["Wilayah"] == "Jakarta") &amp; (df["Qty"] &gt;= 3)]</code></pre>
<h4>groupby = "pisahkan, hitung, gabungkan"</h4>
<pre><code>df.groupby("Wilayah")["Total"].sum()
# 1) pisahkan baris per Wilayah
# 2) jumlahkan Total di setiap kelompok
# 3) gabungkan jadi satu Series: Bandung 10500000, Jakarta 25200000, Surabaya 9550000</code></pre>
<p>Ganti <code>.sum()</code> dengan <code>.mean()</code>, <code>.count()</code>, <code>.size()</code>, atau <code>.agg(["sum", "mean"])</code> sesuai pertanyaan bisnisnya.</p>
<h4>loc dan iloc</h4>
<ul><li><code>iloc</code> = berdasarkan <b>posisi</b> (nomor urut mulai 0): <code>df.iloc[0]</code> baris pertama.</li><li><code>loc</code> = berdasarkan <b>label atau syarat</b>: <code>df.loc[df["Qty"] &gt;= 5, "Sales"]</code>.</li></ul>
<div class="praktik"><b>Coba sendiri</b> (di Code Runner, mode Python): buat DataFrame penjualan di atas, lalu jawab: produk apa yang paling banyak terjual (jumlah Qty), dan wilayah mana yang rata-rata Total-nya paling tinggi?</div>`);

  dalami("odoo", `
<h4>Peta dari Python dasar ke Odoo</h4>
<table class="mini-pivot"><tr><th>Yang sudah kamu pelajari</th><th>Wujudnya di Odoo</th></tr>
<tr><td>class dan pewarisan</td><td><code>class Kursus(models.Model):</code>, <code>_inherit = 'sale.order'</code></td></tr>
<tr><td>atribut objek</td><td>field: <code>nama = fields.Char()</code></td></tr>
<tr><td>list berisi objek</td><td>recordset: <code>self</code> bisa berisi banyak record</td></tr>
<tr><td>for loop</td><td><code>for rec in self:</code> di compute dan constrains</td></tr>
<tr><td>list comprehension / filter</td><td><code>records.filtered(lambda r: r.qty &gt; 0)</code></td></tr>
<tr><td>map / ambil satu kolom</td><td><code>records.mapped('amount_total')</code></td></tr>
<tr><td>dict</td><td>nilai untuk <code>create({...})</code> dan <code>write({...})</code></td></tr>
<tr><td>raise error</td><td><code>raise ValidationError("...")</code>, <code>UserError</code></td></tr>
<tr><td>decorator</td><td><code>@api.depends</code>, <code>@api.constrains</code>, <code>@api.onchange</code></td></tr></table>
<h4>CRUD lewat ORM (tanpa menulis SQL)</h4>
<pre><code>Kursus = self.env['akademi.kursus']                  # "tabel" kursus
baru = Kursus.create({'nama': 'Python Dasar', 'kuota': 20})     # INSERT
semua = Kursus.search([('kuota', '&gt;', 10)])                    # SELECT ... WHERE
jumlah = Kursus.search_count([])                                 # SELECT COUNT(*)
baru.write({'kuota': 25})                                        # UPDATE
baru.unlink()                                                    # DELETE</code></pre>
<h4>Domain: syarat pencarian berbentuk list</h4>
<pre><code>[('state', '=', 'sale'), ('amount_total', '&gt;=', 1000000)]          # DAN (bawaan)
['|', ('city', '=', 'Bandung'), ('city', '=', 'Jakarta')]          # ATAU: '|' ditaruh di depan
[('name', 'ilike', 'toko')]                                        # mengandung "toko", huruf besar/kecil bebas</code></pre>
<h4>Anatomi computed field</h4>
<pre><code>total = fields.Float(compute='_compute_total', store=True)

@api.depends('qty', 'harga')          # hitung ulang bila qty/harga berubah
def _compute_total(self):
    for rec in self:                  # self bisa berisi banyak record
        rec.total = rec.qty * rec.harga</code></pre>
<p>Tiga hal wajib: nama method di <code>compute=</code>, daftar field di <code>@api.depends</code>, dan perulangan <code>for rec in self</code> yang <b>mengisi</b> field untuk setiap record (bukan return).</p>
<h4>Odoo 17: aturan tampilan yang berubah</h4>
<p>Odoo 17 tidak lagi menerima <code>attrs</code> dan <code>states</code> di XML. Kondisi ditulis langsung sebagai ekspresi:</p>
<pre><code>&lt;button name="action_confirm" type="object" string="Konfirmasi"
        invisible="state != 'draft'"/&gt;
&lt;field name="catatan" readonly="state == 'done'"/&gt;</code></pre>
<div class="praktik"><b>Coba sendiri</b> (di atas kertas): rancang model <code>akademi.peserta</code> dengan field nama (wajib), kursus (Many2one ke akademi.kursus), dan nilai; lalu tulis constraint agar nilai berada di antara 0 dan 100.</div>`);
})();
