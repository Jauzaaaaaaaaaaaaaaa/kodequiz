// ============ PYTHON — tambahan 2x lipat (bagian 4): latihan, comprehension, fungsilanjut, iterator, oop2, stdlib, kerja, proyek ============
// Pola sama dengan soal-python-4.js.
(function () {
  const O = (k, lv, kode, o, e, w) => ({ k, t: "mc", lv, q: "Output kode ini:", kode, o, a: 0, vr: "py", e, ...(w ? { w: [null, ...w] } : {}) });
  const M = (k, lv, q, o, e, w, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}), ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_PYTHON.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_PYTHON.push(
  // ---- latihan membaca kode (+16) ----
  O("latihan", 1, 'a = 3\nb = a\na = 7\nprint(a, b)', ["7 3", "7 7", "3 3", "3 7"],
    "b = a menyalin NILAI 3 ke b saat itu. Mengganti a menjadi 7 sesudahnya tidak mengubah b (angka tidak ikut berubah seperti list).",
    ["b menyimpan nilai lama.", "a sudah diganti 7.", "Urutan cetak a dulu."]),
  O("latihan", 1, 'a, b = 1, 2\na, b = b, a\nprint(a, b)', ["2 1", "1 2", "2 2", "1 1"],
    "Cara Python menukar dua variabel dalam satu baris: sisi kanan (b, a) = (2, 1) dihitung dulu, baru diisikan.",
    ["Nilainya sudah ditukar.", "Keduanya ditukar bersamaan, bukan bergantian.", "Keduanya ditukar bersamaan."]),
  O("latihan", 2, 'x = 0\nfor i in range(1, 5):\n    if i % 2:\n        x += i\n    else:\n        x -= i\nprint(x)', ["-2", "10", "2", "4"],
    "i % 2 bernilai 1 (benar) untuk ganjil. Jejak: +1, -2, +3, -4 → 1 - 2 + 3 - 4 = -2.",
    ["Itu jumlah semua tanpa dikurangi.", "Periksa tanda tiap putaran.", "Periksa tanda tiap putaran."]),
  O("latihan", 2, 'teks = "data"\nhasil = ""\nfor h in teks:\n    hasil = h + hasil\nprint(hasil)', ["atad", "data", "dataa", "a"],
    "Setiap huruf ditaruh di DEPAN hasil: d → ad → tad → atad. Ini membalik teks.",
    ["Huruf baru ditaruh di depan, bukan di belakang.", "Teks dibangun ulang, bukan diulang.", "Semua huruf ikut."]),
  O("latihan", 2, 'n = 1234\njumlah = 0\nwhile n > 0:\n    jumlah += n % 10\n    n //= 10\nprint(jumlah)', ["10", "1234", "4", "24"],
    "Pola menjumlah digit: n % 10 mengambil digit terakhir, n //= 10 membuangnya. 4 + 3 + 2 + 1 = 10.",
    ["n diproses sampai habis.", "Itu hanya digit terakhir.", "Ini penjumlahan, bukan perkalian."]),
  O("latihan", 2, 'data = [4, 1, 3]\ndata.append(data[0] + data[-1])\nprint(data)', ["[4, 1, 3, 7]", "[4, 1, 3, 5]", "[4, 1, 3, 4]", "[7, 4, 1, 3]"],
    "data[0] = 4 (pertama), data[-1] = 3 (terakhir). 4 + 3 = 7 ditambahkan di akhir.",
    ["data[-1] adalah 3, bukan 1.", "Yang ditambah hasil penjumlahan.", "append menaruh di akhir."]),
  O("latihan", 2, 'def f(x):\n    x.append(1)\n\nd = []\nf(d)\nf(d)\nprint(d)', ["[1, 1]", "[]", "[1]", "None"],
    "List dikirim ke fungsi sebagai list yang SAMA (bukan salinan). Dua kali dipanggil, dua kali ditambah.",
    ["Fungsi mengubah list aslinya.", "Dipanggil dua kali.", "Yang dicetak d, bukan hasil fungsi."]),
  O("latihan", 2, 'def f(x):\n    x = x + 1\n\nn = 5\nf(n)\nprint(n)', ["5", "6", "None", "Error"],
    "Angka tidak bisa diubah dari dalam fungsi. x = x + 1 hanya membuat x lokal baru; n di luar tetap 5. Bandingkan dengan soal list sebelumnya.",
    ["n di luar tidak berubah.", "Yang dicetak n.", "Kodenya sah."]),
  O("latihan", 2, 'nilai = {"a": 3, "b": 1, "c": 2}\nprint(sorted(nilai, key=nilai.get))', ["['b', 'c', 'a']", "['a', 'b', 'c']", "[1, 2, 3]", "['a', 'c', 'b']"],
    "sorted pada dict mengurutkan KUNCI. key=nilai.get membuat urutannya berdasarkan nilai: b(1), c(2), a(3).",
    ["Urutan berdasarkan nilai, bukan abjad.", "Yang diurutkan kuncinya.", "Itu urutan besar ke kecil."]),
  O("latihan", 3, 'def hitung(n):\n    if n <= 1:\n        return n\n    return hitung(n - 1) + hitung(n - 2)\n\nprint([hitung(i) for i in range(7)])', ["[0, 1, 1, 2, 3, 5, 8]", "[1, 1, 2, 3, 5, 8, 13]", "[0, 1, 2, 3, 4, 5, 6]", "[0, 1, 1, 2, 3, 5]"],
    "Ini deret Fibonacci: setiap angka = jumlah dua angka sebelumnya, mulai dari 0 dan 1. range(7) memberi 7 angka.",
    ["Deret mulai dari hitung(0) = 0.", "Bukan angka berurutan.", "Ada 7 angka, bukan 6."]),
  O("latihan", 3, 'kata = ["apel", "kiwi", "anggur", "jeruk"]\nawal = {}\nfor k in kata:\n    awal.setdefault(k[0], []).append(k)\nprint(awal)', ["{'a': ['apel', 'anggur'], 'k': ['kiwi'], 'j': ['jeruk']}", "{'a': 'anggur', 'k': 'kiwi', 'j': 'jeruk'}", "{'a': 2, 'k': 1, 'j': 1}", "['a', 'k', 'a', 'j']"],
    "setdefault(kunci, []) memberi list yang sudah ada, atau membuat list kosong bila belum ada, lalu append menambah kata. Pola mengelompokkan data.",
    ["Setiap kunci berisi list, jadi apel tidak hilang.", "Yang disimpan kata-katanya, bukan jumlah.", "Hasilnya dict."]),
  O("latihan", 3, 'angka = [3, 8, 1, 9, 4]\nterbesar = kedua = float("-inf")\nfor n in angka:\n    if n > terbesar:\n        kedua, terbesar = terbesar, n\n    elif n > kedua:\n        kedua = n\nprint(kedua)', ["8", "9", "4", "3"],
    "Algoritma mencari terbesar KEDUA dalam satu putaran. Saat ketemu yang lebih besar, terbesar lama turun jadi kedua. Hasil: terbesar 9, kedua 8.",
    ["9 adalah yang terbesar.", "Ikuti jejaknya: 8 menjadi kedua saat 9 muncul.", "Ikuti jejaknya."]),
  M("latihan", 1, "Langkah pertama yang paling ampuh untuk menebak output kode yang rumit:", ["Membuat tabel jejak nilai variabel baris demi baris", "Langsung menebak dari bentuknya", "Menghafal semua soal", "Melihat jawaban teman"],
    "Komputer menjalankan satu baris setiap kali. Tulis nilai setiap variabel setelah setiap baris/putaran; jawaban akan muncul sendiri.",
    ["Menebak sering salah pada soal jebakan.", "Soal baru tidak bisa dihafal.", "Tidak membantu saat tes."]),
  M("latihan", 2, "Di tes coding, kamu diminta fungsi yang mengecek palindrom (kata sama bila dibalik). Jawaban paling ringkas dan benar:", ["return s == s[::-1]", "return s.reverse()", "return reversed(s)", "return s[-1] == s[0]"],
    "s[::-1] membalik teks. Bandingkan dengan aslinya. .reverse() hanya ada di list, reversed() memberi iterator, dan membandingkan huruf ujung saja belum cukup.",
    ["Teks tidak punya .reverse().", "reversed memberi iterator, bukan True/False.", "Hanya mengecek dua huruf."]),
  M("latihan", 2, "Kompleksitas waktu mencari angka di list berisi n data dengan for (dari depan sampai ketemu):", ["O(n): makin banyak data, makin lama secara sebanding", "O(1): selalu sama cepat", "O(n²)", "Tidak bisa diukur"],
    "Kasus terburuk, semua n data diperiksa satu per satu. Mencari di set atau dict rata-rata O(1), itulah kenapa set/dict cepat untuk 'in'.",
    ["O(1) berlaku untuk set/dict.", "Hanya satu loop, bukan loop bersarang.", "Bisa diukur dengan notasi Big-O."]),
  I("latihan", 2, "Isi agar teks dibalik: kata[____]", ["::-1"], "Slicing dengan langkah -1 membalik urutan."),

  // ---- comprehension (+15) ----
  O("comprehension", 1, 'print([n * n for n in [1, 2, 3]])', ["[1, 4, 9]", "[2, 4, 6]", "[1, 2, 3]", "14"],
    "Bacanya: 'n * n untuk setiap n di [1, 2, 3]'.",
    ["Itu n * 2.", "Nilainya dikuadratkan.", "Hasilnya list, bukan jumlah."]),
  O("comprehension", 1, 'kata = ["Kopi", "teh", "SUSU"]\nprint([k.lower() for k in kata])', ["['kopi', 'teh', 'susu']", "['KOPI', 'TEH', 'SUSU']", "['Kopi', 'teh', 'SUSU']", "kopi teh susu"],
    "Method bisa dipanggil pada setiap item: semua dijadikan huruf kecil.",
    ["lower membuat huruf kecil.", "Setiap item diubah.", "Hasilnya list."]),
  O("comprehension", 1, 'print([n for n in range(10) if n % 4 == 0])', ["[0, 4, 8]", "[4, 8]", "[0, 4, 8, 12]", "[1, 2, 3]"],
    "if di BELAKANG menyaring: hanya n yang habis dibagi 4. 0 juga habis dibagi 4.",
    ["0 ikut karena 0 % 4 == 0.", "12 di luar range(10).", "Yang disaring kelipatan 4."]),
  O("comprehension", 2, 'nilai = [80, 55, 90]\nprint(["L" if n >= 70 else "R" for n in nilai])', ["['L', 'R', 'L']", "['L', 'L']", "['R', 'L', 'R']", "['L', 'R']"],
    "if-else di DEPAN for mengubah setiap item (tidak membuang). Semua 3 nilai tetap punya hasil.",
    ["if-else di depan tidak menyaring.", "80 dan 90 lulus.", "Ada 3 nilai, jadi 3 hasil."]),
  O("comprehension", 2, 'harga = {"kopi": 18000, "teh": 12000}\nprint({k: v // 1000 for k, v in harga.items()})', ["{'kopi': 18, 'teh': 12}", "{'kopi': 18000, 'teh': 12000}", "[18, 12]", "{18: 'kopi', 12: 'teh'}"],
    "Dict comprehension: {kunci: nilai baru for ...}. Nilainya dibagi bulat 1000.",
    ["Nilainya sudah diubah.", "Kurung kurawal + titik dua = dict.", "Kunci tetap di kiri."]),
  O("comprehension", 2, 'print({len(k) for k in ["aa", "bb", "ccc"]})', ["{2, 3}", "[2, 2, 3]", "{2, 2, 3}", "{'aa': 2}"],
    "Kurung kurawal TANPA titik dua = set comprehension. Set membuang kembar.",
    ["Kurung kurawal membuat set.", "Set tidak menyimpan kembar.", "Tidak ada titik dua, jadi bukan dict."]),
  O("comprehension", 2, 'matriks = [[1, 2], [3, 4]]\nprint([x for baris in matriks for x in baris])', ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "[1, 3, 2, 4]", "[3, 7]"],
    "Dua for dalam satu comprehension dibaca dari kiri: untuk setiap baris, lalu untuk setiap x di baris itu. Hasilnya diratakan.",
    ["Hasilnya diratakan.", "Urutan mengikuti baris dulu.", "Ini tidak menjumlah."]),
  O("comprehension", 2, 'print(sum(n for n in range(5)))', ["10", "15", "[0, 1, 2, 3, 4]", "5"],
    "Tanpa kurung siku, ini generator expression yang langsung dijumlahkan: 0+1+2+3+4 = 10.",
    ["range(5) tidak memuat 5.", "sum mengembalikan angka.", "Itu banyaknya."]),
  O("comprehension", 2, 'print(any(n > 8 for n in [3, 9, 2]), all(n > 1 for n in [3, 9, 2]))', ["True True", "True False", "False True", "False False"],
    "any = adakah SATU yang benar (9 > 8, ya). all = apakah SEMUA benar (3, 9, 2 semuanya > 1, ya).",
    ["2 juga lebih dari 1.", "9 lebih dari 8.", "Keduanya benar."]),
  O("comprehension", 2, 'data = [("Ani", 90), ("Budi", 75), ("Cici", 85)]\nprint(max(data, key=lambda x: x[1])[0])', ["Ani", "Cici", "90", "Budi"],
    "key=lambda x: x[1] menyuruh max membandingkan nilai (indeks 1). Yang terbesar (\"Ani\", 90), lalu [0] mengambil namanya.",
    ["Cici 85, masih di bawah 90.", "[0] mengambil nama.", "Budi terkecil."]),
  O("comprehension", 3, 'print(list(map(int, "1 2 3".split())))', ["[1, 2, 3]", "['1', '2', '3']", "6", "[1 2 3]"],
    "map(int, ...) menerapkan int ke setiap potongan teks. Pola umum membaca input angka di tes coding.",
    ["Sudah diubah jadi int.", "Tidak dijumlah.", "List Python dipisah koma."]),
  O("comprehension", 3, 'print(sorted(["b2", "a10", "a2"], key=lambda s: (s[0], int(s[1:]))))', ["['a2', 'a10', 'b2']", "['a10', 'a2', 'b2']", "['b2', 'a2', 'a10']", "Error"],
    "key mengembalikan tuple (huruf, angka). Python membandingkan tuple dari elemen pertama, lalu kedua. a2 sebelum a10 karena 2 < 10 sebagai angka.",
    ["Itu urutan teks biasa (\"10\" < \"2\").", "Huruf a didahulukan.", "Tuple boleh jadi key."]),
  M("comprehension", 1, "Kapan for biasa lebih baik daripada comprehension?", ["Saat logikanya panjang (banyak if, banyak langkah) sehingga satu baris sulit dibaca", "Tidak pernah", "Saat datanya sedikit", "Saat memakai list"],
    "Comprehension bagus untuk ubah/saring sederhana. Kalau satu baris jadi terlalu panjang, for biasa lebih jelas.",
    ["Keterbacaan lebih penting.", "Ukuran data bukan alasannya.", "Keduanya bisa membuat list."]),
  M("comprehension", 2, "Beda [x for x in data] dan (x for x in data):", ["Kurung siku membuat list utuh di memori; kurung biasa membuat generator yang menghitung satu per satu", "Keduanya list", "Kurung biasa membuat tuple", "Tidak ada bedanya"],
    "Generator hemat memori untuk data besar karena tidak menyimpan semuanya sekaligus.",
    ["Kurung biasa bukan list.", "Untuk tuple pakai tuple(...).", "Cara kerjanya berbeda."]),
  I("comprehension", 1, "Lengkapi: [x * 2 ____ x in range(3)]", ["for"], "Bentuknya [hasil for item in sumber]."),

  // ---- fungsilanjut (+15) ----
  O("fungsilanjut", 1, 'def info(**data):\n    return data\n\nprint(info(nama="Ani", umur=21))', ["{'nama': 'Ani', 'umur': 21}", "('Ani', 21)", "nama umur", "Error"],
    "**data menampung semua argumen bernama menjadi DICT.",
    ["**kwargs menghasilkan dict, bukan tuple.", "Yang dikembalikan dict lengkap.", "Kodenya sah."]),
  O("fungsilanjut", 1, 'def tambah(a, b, c):\n    return a + b + c\n\nangka = [1, 2, 3]\nprint(tambah(*angka))', ["6", "[1, 2, 3]", "Error", "123"],
    "*angka saat MEMANGGIL membongkar list menjadi argumen terpisah: tambah(1, 2, 3).",
    ["Isi list dibongkar.", "Jumlah argumen pas tiga.", "Angka dijumlah, bukan disambung."]),
  O("fungsilanjut", 2, 'def f(a, *args, **kwargs):\n    return a, args, kwargs\n\nprint(f(1, 2, 3, x=4))', ["(1, (2, 3), {'x': 4})", "(1, 2, 3, 4)", "(1, [2, 3], {'x': 4})", "Error"],
    "a mengambil argumen pertama, *args sisa argumen posisi (tuple), **kwargs argumen bernama (dict).",
    ["Masing-masing dikelompokkan.", "args berupa tuple, bukan list.", "Urutan parameter ini sah."]),
  O("fungsilanjut", 2, 'x = "global"\ndef luar():\n    x = "luar"\n    def dalam():\n        return x\n    return dalam()\n\nprint(luar())', ["luar", "global", "None", "Error"],
    "Aturan LEGB: Python mencari nama di Local, lalu Enclosing (fungsi pembungkus), lalu Global, lalu Built-in. dalam() menemukan x milik luar() lebih dulu.",
    ["Enclosing dicek sebelum Global.", "Ada return.", "Kodenya sah."]),
  O("fungsilanjut", 2, 'def penghitung():\n    n = 0\n    def tambah():\n        nonlocal n\n        n += 1\n        return n\n    return tambah\n\nc = penghitung()\nc()\nc()\nprint(c())', ["3", "1", "0", "Error"],
    "Closure: fungsi tambah 'mengingat' n milik penghitung. nonlocal membuatnya bisa mengubah n itu. Dipanggil 3 kali → 3.",
    ["n diingat di antara pemanggilan.", "n bertambah setiap panggilan.", "nonlocal mencegah error."]),
  O("fungsilanjut", 2, 'def pangkat(e):\n    return lambda x: x ** e\n\nkubik = pangkat(3)\nprint(kubik(2))', ["8", "6", "9", "Error"],
    "Fungsi bisa mengembalikan fungsi. pangkat(3) membuat fungsi yang memangkatkan 3. kubik(2) = 2 ** 3 = 8.",
    ["Itu 2 * 3.", "Itu 3 ** 2.", "Kodenya sah."]),
  O("fungsilanjut", 2, 'def terapkan(f, data):\n    return [f(x) for x in data]\n\nprint(terapkan(str.upper, ["a", "b"]))', ["['A', 'B']", "['a', 'b']", "Error", "AB"],
    "Fungsi adalah nilai: bisa dikirim sebagai argumen. str.upper diterapkan ke setiap item.",
    ["upper membuat huruf besar.", "Mengirim fungsi itu sah.", "Hasilnya list."]),
  O("fungsilanjut", 2, 'def teriak(f):\n    def bungkus(nama):\n        return f(nama).upper() + "!"\n    return bungkus\n\n@teriak\ndef sapa(nama):\n    return "halo " + nama\n\nprint(sapa("ani"))', ["HALO ANI!", "halo ani", "halo ani!", "Error"],
    "Decorator @teriak membungkus sapa: hasil aslinya diubah jadi huruf besar dan diberi tanda seru. Sama dengan sapa = teriak(sapa).",
    ["Decorator mengubah hasilnya.", "Semua huruf jadi besar.", "Kodenya sah."]),
  O("fungsilanjut", 2, 'def jumlah(n):\n    if n == 0:\n        return 0\n    return n + jumlah(n - 1)\n\nprint(jumlah(5))', ["15", "5", "120", "Error"],
    "jumlah(5) = 5 + 4 + 3 + 2 + 1 + 0 = 15. n == 0 adalah kasus dasar yang menghentikan rekursi.",
    ["Fungsi memanggil dirinya.", "Itu faktorial (perkalian).", "Ada kasus dasar."]),
  O("fungsilanjut", 3, 'def tambah(item, wadah=[]):\n    wadah.append(item)\n    return wadah\n\ntambah(1)\nprint(tambah(2))', ["[1, 2]", "[2]", "[1]", "Error"],
    "Jebakan terkenal: nilai bawaan [] dibuat SEKALI saat fungsi didefinisikan, lalu dipakai bersama. Solusinya wadah=None lalu if wadah is None: wadah = [].",
    ["List bawaan dipakai ulang antar pemanggilan.", "Panggilan kedua juga menambah.", "Kodenya sah, walau berbahaya."]),
  O("fungsilanjut", 3, 'def buat(*, nama, umur):\n    return f"{nama}-{umur}"\n\nprint(buat(umur=21, nama="Ani"))', ["Ani-21", "21-Ani", "Error", "nama-umur"],
    "Tanda * sendirian berarti parameter setelahnya WAJIB ditulis dengan nama (keyword-only). Urutan bebas.",
    ["Urutan mengikuti f-string, bukan pemanggilan.", "Keyword dipakai, jadi sah.", "Isinya yang dicetak."]),
  M("fungsilanjut", 1, "Arti *args dan **kwargs secara sederhana:", ["*args = banyak argumen tanpa nama (tuple); **kwargs = banyak argumen bernama (dict)", "Keduanya list", "Keduanya wajib di setiap fungsi", "*args untuk angka, **kwargs untuk teks"],
    "Dipakai saat jumlah argumen tidak pasti, misalnya fungsi total(*angka).",
    ["Bukan list.", "Tidak wajib.", "Tidak terkait tipe data."]),
  M("fungsilanjut", 2, "Apa yang wajib dimiliki fungsi rekursif?", ["Kasus dasar (kondisi berhenti) dan langkah yang mendekati kasus dasar", "Perulangan for", "Variabel global", "Decorator"],
    "Tanpa kasus dasar, fungsi memanggil dirinya terus sampai RecursionError.",
    ["Rekursi menggantikan loop.", "Tidak perlu global.", "Tidak perlu decorator."]),
  M("fungsilanjut", 2, "Di Odoo, @api.depends dan @api.constrains adalah contoh…", ["Decorator: fungsi yang membungkus method untuk menambah perilaku", "Komentar", "Nama variabel", "Tipe field"],
    "Decorator ditulis dengan @ di atas fungsi. Odoo memakainya untuk mendaftarkan method compute dan validasi.",
    ["@ bukan komentar.", "Bukan variabel.", "Bukan tipe field."]),
  I("fungsilanjut", 2, "Kata kunci agar fungsi dalam bisa mengubah variabel fungsi luarnya: ____ n", ["nonlocal"], "nonlocal untuk variabel milik fungsi pembungkus."),

  // ---- iterator (+15) ----
  O("iterator", 1, 'it = iter([10, 20, 30])\nprint(next(it), next(it))', ["10 20", "10 10", "20 30", "[10, 20]"],
    "iter() membuat iterator. next() mengambil item berikutnya satu per satu dan maju.",
    ["next maju setiap dipanggil.", "Mulai dari item pertama.", "Yang diambil item satu per satu."]),
  O("iterator", 1, 'def tiga():\n    yield 1\n    yield 2\n    yield 3\n\nprint(list(tiga()))', ["[1, 2, 3]", "3", "1", "[3]"],
    "Fungsi dengan yield adalah generator. Setiap yield menyerahkan satu nilai; list() mengumpulkan semuanya.",
    ["Semua yield dikumpulkan.", "yield tidak menghentikan fungsi seperti return.", "Semua nilai ikut."]),
  O("iterator", 2, 'def hitung_mundur(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor x in hitung_mundur(3):\n    print(x)', ["3\n2\n1", "1\n2\n3", "3\n2\n1\n0", "3"],
    "Generator berhenti sementara di setiap yield, lalu melanjutkan dari situ saat diminta nilai berikutnya.",
    ["Mundur dari 3.", "0 tidak di-yield karena syarat n > 0.", "Generator memberi beberapa nilai."]),
  O("iterator", 2, 'g = (x * 2 for x in range(3))\nprint(sum(g), sum(g))', ["6 0", "6 6", "0 6", "Error"],
    "Generator hanya bisa dipakai SEKALI. sum pertama menghabiskannya (0+2+4 = 6); sum kedua tidak dapat apa-apa (0).",
    ["Generator habis setelah dipakai.", "Yang pertama sudah menghitung 6.", "Generator kosong menghasilkan 0, bukan error."]),
  O("iterator", 2, 'def baca():\n    print("mulai")\n    yield "A"\n    print("lanjut")\n    yield "B"\n\ng = baca()\nprint(next(g))', ["mulai\nA", "mulai\nA\nlanjut\nB", "A", "mulai"],
    "Membuat generator belum menjalankan isinya. next(g) menjalankan sampai yield pertama saja: cetak 'mulai', serahkan A. 'lanjut' belum dijalankan.",
    ["Generator berhenti di yield pertama.", "mulai tercetak sebelum yield.", "A tetap di-print oleh print luar."]),
  O("iterator", 2, 'from itertools import islice, count\nprint(list(islice(count(5), 3)))', ["[5, 6, 7]", "[0, 1, 2]", "[5, 5, 5]", "[3, 4, 5]"],
    "count(5) menghitung tanpa akhir: 5, 6, 7, ... islice mengambil 3 pertama saja, jadi aman.",
    ["count mulai dari 5.", "count bertambah 1.", "Mulai dari 5."]),
  O("iterator", 2, 'from itertools import chain\nprint(list(chain([1, 2], "ab")))', ["[1, 2, 'a', 'b']", "[[1, 2], 'ab']", "[1, 2, 'ab']", "Error"],
    "chain menyambung beberapa iterable menjadi satu aliran. Teks diurai per huruf.",
    ["chain meratakan, bukan membungkus.", "Teks diurai per huruf.", "Jenis berbeda boleh disambung."]),
  O("iterator", 2, 'pasangan = list(zip("abc", [1, 2]))\nprint(pasangan)', ["[('a', 1), ('b', 2)]", "[('a', 1), ('b', 2), ('c', None)]", "Error", "[('a', 'b'), (1, 2)]"],
    "zip berhenti di iterable TERPENDEK. c tidak punya pasangan, jadi dibuang.",
    ["zip tidak mengisi None.", "Panjang beda tidak error.", "zip memasangkan per posisi."]),
  O("iterator", 2, 'print(list(reversed(range(1, 4))))', ["[3, 2, 1]", "[1, 2, 3]", "[4, 3, 2, 1]", "Error"],
    "reversed memberi iterator yang berjalan dari belakang. list() mengumpulkannya.",
    ["reversed membalik.", "range(1, 4) tidak memuat 4.", "range bisa dibalik."]),
  O("iterator", 3, 'def potong(data, n):\n    for i in range(0, len(data), n):\n        yield data[i:i + n]\n\nprint(list(potong([1, 2, 3, 4, 5], 2)))', ["[[1, 2], [3, 4], [5]]", "[[1, 2], [3, 4]]", "[1, 2, 3, 4, 5]", "[[1, 3, 5], [2, 4]]"],
    "Generator memotong data per n item (batch). Potongan terakhir boleh lebih pendek.",
    ["Sisa 5 tetap jadi potongan.", "Hasilnya list berisi potongan.", "Dipotong berurutan, bukan berselang."]),
  O("iterator", 3, 'class Hitung:\n    def __init__(self, n):\n        self.n = n\n    def __iter__(self):\n        for i in range(self.n):\n            yield i * 10\n\nprint(list(Hitung(3)))', ["[0, 10, 20]", "[10, 20, 30]", "[0, 1, 2]", "Error"],
    "Class menjadi bisa diulang (iterable) bila punya __iter__. Menulis __iter__ sebagai generator (pakai yield) adalah cara paling ringkas.",
    ["range mulai dari 0.", "Setiap i dikali 10.", "Kodenya sah."]),
  M("iterator", 1, "Keuntungan utama generator dibanding list:", ["Hemat memori: nilai dibuat satu per satu saat dibutuhkan", "Selalu lebih cepat untuk semua hal", "Bisa diakses dengan indeks", "Bisa dipakai berkali-kali"],
    "Untuk membaca file jutaan baris, generator memproses satu baris setiap kali tanpa memuat semuanya ke memori.",
    ["Tidak selalu lebih cepat.", "Generator tidak mendukung indeks.", "Generator habis setelah sekali dipakai."]),
  M("iterator", 2, "Error yang muncul saat next() dipanggil pada iterator yang sudah habis:", ["StopIteration", "IndexError", "KeyError", "ValueError"],
    "StopIteration menandai iterator habis. Loop for menangkapnya otomatis, jadi kamu jarang melihatnya.",
    ["IndexError untuk indeks list.", "KeyError untuk dict.", "ValueError untuk nilai salah."]),
  M("iterator", 2, "Kode for baris in open(\"data.txt\"): membaca file dengan cara…", ["Satu baris setiap putaran (objek file adalah iterator)", "Memuat seluruh file ke memori dulu", "Membaca per huruf", "Error, harus .read()"],
    "Objek file bisa langsung diulang per baris. Cara hemat memori untuk file besar.",
    ["File tidak dimuat sekaligus.", "Per baris, bukan per huruf.", "Cara ini sah."]),
  I("iterator", 1, "Kata kunci untuk membuat generator: ____ nilai", ["yield"], "yield menyerahkan nilai satu per satu."),

  // ---- oop2 (+15) ----
  O("oop2", 1, 'class Uang:\n    def __init__(self, n):\n        self.n = n\n    def __repr__(self):\n        return f"Uang({self.n})"\n\nprint([Uang(5), Uang(7)])', ["[Uang(5), Uang(7)]", "[5, 7]", "[<Uang object>, <Uang object>]", "Error"],
    "__repr__ menentukan tampilan objek saat berada di dalam list atau di console.",
    ["__repr__ dipakai untuk tampilan.", "Ada __repr__, jadi tidak tampil alamat objek.", "Kodenya sah."]),
  O("oop2", 2, 'class Uang:\n    def __init__(self, n):\n        self.n = n\n    def __add__(self, lain):\n        return Uang(self.n + lain.n)\n\nprint((Uang(5) + Uang(7)).n)', ["12", "57", "Error", "5"],
    "__add__ menentukan arti tanda + untuk objek buatanmu.",
    ["Angka dijumlah.", "Ada __add__, jadi + sah.", "Hasilnya objek baru dengan n = 12."]),
  O("oop2", 2, 'class Keranjang:\n    def __init__(self):\n        self.isi = ["a", "b", "c"]\n    def __len__(self):\n        return len(self.isi)\n\nprint(len(Keranjang()))', ["3", "0", "Error", "1"],
    "__len__ membuat len() bisa dipakai pada objekmu.",
    ["isi punya 3 item.", "Ada __len__, jadi tidak error.", "Yang dihitung isi list."]),
  O("oop2", 2, 'class Nilai:\n    def __init__(self, n):\n        self.n = n\n    def __eq__(self, lain):\n        return self.n == lain.n\n\nprint(Nilai(3) == Nilai(3))', ["True", "False", "Error", "3"],
    "Tanpa __eq__, dua objek berbeda selalu dianggap tidak sama. Dengan __eq__, perbandingan memakai isinya.",
    ["__eq__ membandingkan n.", "Ada __eq__.", "== menghasilkan True/False."]),
  O("oop2", 2, 'class Persegi:\n    def __init__(self, sisi):\n        self.sisi = sisi\n    @property\n    def luas(self):\n        return self.sisi ** 2\n\np = Persegi(4)\np.sisi = 5\nprint(p.luas)', ["25", "16", "Error", "luas"],
    "@property membuat method dibaca seperti atribut (tanpa kurung), dan dihitung ulang setiap dibaca, jadi selalu sesuai sisi terbaru.",
    ["sisi sudah diganti 5.", "property dibaca tanpa kurung.", "Yang dicetak hasil hitungan."]),
  O("oop2", 2, 'class Suhu:\n    def __init__(self):\n        self._c = 0\n    @property\n    def c(self):\n        return self._c\n    @c.setter\n    def c(self, v):\n        if v < -273:\n            raise ValueError("terlalu dingin")\n        self._c = v\n\ns = Suhu()\ntry:\n    s.c = -300\nexcept ValueError as e:\n    print(e, s.c)', ["terlalu dingin 0", "-300", "terlalu dingin -300", "Error"],
    "Setter memvalidasi nilai sebelum disimpan. -300 ditolak, jadi _c tetap 0.",
    ["Nilai ditolak, tidak disimpan.", "Pesan error dicetak.", "Error ditangkap."]),
  O("oop2", 2, 'class Pegawai:\n    jumlah = 0\n    def __init__(self, nama):\n        self.nama = nama\n        Pegawai.jumlah += 1\n    @classmethod\n    def dari_teks(cls, teks):\n        return cls(teks.strip().title())\n\np = Pegawai.dari_teks("  rina ")\nprint(p.nama, Pegawai.jumlah)', ["Rina 1", "rina 1", "Rina 0", "Error"],
    "@classmethod menerima class (cls) sebagai parameter pertama; sering dipakai sebagai cara alternatif membuat objek. cls(...) menjalankan __init__, jadi jumlah ikut bertambah.",
    ["title membesarkan huruf awal.", "__init__ tetap dijalankan.", "Kodenya sah."]),
  O("oop2", 2, 'class Mat:\n    @staticmethod\n    def genap(n):\n        return n % 2 == 0\n\nprint(Mat.genap(4), Mat.genap(7))', ["True False", "False True", "Error", "4 7"],
    "@staticmethod adalah fungsi biasa yang 'ditaruh' di dalam class; tidak butuh self atau cls.",
    ["4 genap.", "staticmethod bisa dipanggil lewat class.", "Hasilnya True/False."]),
  O("oop2", 2, 'from dataclasses import dataclass\n\n@dataclass\nclass Produk:\n    nama: str\n    harga: int = 0\n\nprint(Produk("Kopi", 18000))', ["Produk(nama='Kopi', harga=18000)", "Kopi 18000", "<Produk object>", "Error"],
    "@dataclass membuatkan __init__, __repr__, dan __eq__ otomatis dari daftar field.",
    ["dataclass membuat __repr__ yang rapi.", "__repr__ sudah dibuat otomatis.", "Kodenya sah."]),
  O("oop2", 3, 'from dataclasses import dataclass\n\n@dataclass\nclass Titik:\n    x: int\n    y: int\n\nprint(Titik(1, 2) == Titik(1, 2))', ["True", "False", "Error", "None"],
    "dataclass juga membuatkan __eq__ yang membandingkan semua field.",
    ["__eq__ dibuat otomatis.", "Kodenya sah.", "== menghasilkan True/False."]),
  O("oop2", 3, 'class Dasar:\n    def info(self):\n        return "dasar"\n\nclass A(Dasar):\n    def info(self):\n        return "A+" + super().info()\n\nprint(A().info())', ["A+dasar", "A+", "dasar", "Error"],
    "super().info() memanggil versi induk dari dalam method yang menimpanya, lalu hasilnya dipakai.",
    ["Versi induk ikut dipanggil.", "A menimpa info.", "Kodenya sah."]),
  M("oop2", 1, "Apa itu dunder method?", ["Method bernama dengan dua garis bawah di depan dan belakang, seperti __init__ dan __str__, yang dipanggil Python otomatis", "Method yang salah", "Method yang dirahasiakan", "Method khusus Odoo"],
    "Dunder = double underscore. Python memanggilnya otomatis: __len__ saat len(), __add__ saat +, __str__ saat print().",
    ["Itu fitur resmi.", "Bukan untuk merahasiakan.", "Ada di semua Python."]),
  M("oop2", 2, "Arti nama atribut yang diawali satu garis bawah, misalnya self._saldo:", ["Kesepakatan: 'untuk dipakai di dalam class saja', sebaiknya tidak diakses dari luar", "Atribut terkunci total", "Atribut global", "Error"],
    "Python tidak benar-benar melarang, tapi garis bawah memberi tanda bagi programmer lain. Akses dari luar sebaiknya lewat @property.",
    ["Masih bisa diakses, hanya tidak disarankan.", "Bukan global.", "Penamaan itu sah."]),
  M("oop2", 2, "Kapan memakai @dataclass?", ["Saat class terutama menyimpan data (field) dan tidak mau menulis __init__/__repr__ berulang", "Untuk semua class tanpa kecuali", "Hanya untuk angka", "Untuk membuat database"],
    "dataclass cocok untuk 'wadah data' seperti Produk(nama, harga). Class dengan banyak perilaku tetap boleh ditulis biasa.",
    ["Tidak wajib.", "Field boleh tipe apa saja.", "Tidak membuat database."]),
  I("oop2", 2, "Decorator agar method dibaca seperti atribut (tanpa kurung): @____", ["property"], "@property membuat atribut terhitung."),

  // ---- stdlib (+15) ----
  O("stdlib", 1, 'from datetime import date, timedelta\nprint(date(2026, 11, 27) + timedelta(days=5))', ["2026-12-02", "2026-11-32", "2026-11-22", "Error"],
    "timedelta adalah selisih waktu. Menambah 5 hari ke 27 November melewati akhir bulan (30 hari) menjadi 2 Desember.",
    ["November hanya 30 hari.", "Ini ditambah, bukan dikurangi.", "Menambah tanggal itu sah."]),
  O("stdlib", 1, 'from datetime import datetime\nd = datetime(2026, 11, 27, 14, 5)\nprint(d.strftime("%d/%m/%Y %H:%M"))', ["27/11/2026 14:05", "2026/11/27 14:05", "27/11/26 2:05", "Error"],
    "strftime mengubah tanggal jadi teks sesuai pola: %d hari, %m bulan, %Y tahun 4 digit, %H jam 24, %M menit.",
    ["Urutan mengikuti pola: hari dulu.", "%Y empat digit, %H jam 24.", "Pola ini sah."]),
  O("stdlib", 2, 'from datetime import datetime\nd = datetime.strptime("05-01-2026", "%d-%m-%Y")\nprint(d.month)', ["1", "5", "2026", "Error"],
    "strptime kebalikan strftime: membaca teks menjadi datetime. Dengan pola %d-%m-%Y, 05 adalah hari dan 01 bulan.",
    ["05 adalah hari, bukan bulan.", "Yang dicetak bulan.", "Pola cocok dengan teks."]),
  O("stdlib", 2, 'from collections import defaultdict\nd = defaultdict(list)\nd["buah"].append("apel")\nd["buah"].append("jeruk")\nprint(dict(d))', ["{'buah': ['apel', 'jeruk']}", "{'buah': 'jeruk'}", "KeyError", "{}"],
    "defaultdict(list) otomatis membuat list kosong saat kunci baru diakses, jadi bisa langsung append tanpa cek.",
    ["Isinya list, bukan teks.", "defaultdict mencegah KeyError.", "Item sudah ditambahkan."]),
  O("stdlib", 2, 'from collections import Counter\nc = Counter(["kopi", "teh", "kopi"])\nprint(c["kopi"], c["susu"])', ["2 0", "2 None", "2 KeyError", "1 0"],
    "Counter menghitung kemunculan. Kunci yang tidak ada bernilai 0, bukan error.",
    ["Counter memberi 0, bukan None.", "Counter tidak error untuk kunci baru.", "kopi muncul dua kali."]),
  O("stdlib", 2, 'from collections import deque\nq = deque([1, 2, 3])\nq.appendleft(0)\nq.pop()\nprint(list(q))', ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[1, 2]"],
    "deque cepat untuk menambah/membuang di kedua ujung. appendleft menaruh 0 di depan, pop membuang yang paling kanan (3).",
    ["0 sudah ditambahkan, 3 dibuang.", "pop membuang satu item.", "pop membuang dari kanan, bukan kiri."]),
  O("stdlib", 2, 'import re\nprint(re.findall(r"\\d+", "Pesanan 12 kopi dan 3 teh"))', ["['12', '3']", "[12, 3]", "['1', '2', '3']", "15"],
    "\\d+ artinya 'satu atau lebih digit berurutan'. findall mengembalikan semua yang cocok sebagai list TEKS.",
    ["Hasil re selalu teks.", "+ mengambil digit berurutan sekaligus.", "Tidak dijumlahkan."]),
  O("stdlib", 2, 'import re\nprint(bool(re.fullmatch(r"08\\d{8,11}", "081234567890")))', ["True", "False", "Error", "081234567890"],
    "Pola nomor HP: diawali 08, lalu 8 sampai 11 digit. 081234567890 = 08 + 10 digit, cocok. fullmatch mengharuskan seluruh teks cocok.",
    ["Jumlah digit setelah 08 adalah 10, masuk rentang.", "Pola ini sah.", "bool memberi True/False."]),
  O("stdlib", 2, 'import re\nprint(re.sub(r"\\s+", " ", "terlalu    banyak   spasi"))', ["terlalu banyak spasi", "terlalubanyakspasi", "terlalu    banyak   spasi", "Error"],
    "re.sub mengganti yang cocok. \\s+ = satu atau lebih spasi, diganti satu spasi saja.",
    ["Diganti satu spasi, bukan dihapus.", "Spasi berlebih sudah dirapikan.", "Pola ini sah."]),
  O("stdlib", 2, 'from pathlib import Path\np = Path("laporan/2026/penjualan.csv")\nprint(p.name, p.suffix, p.parent.name)', ["penjualan.csv .csv 2026", "penjualan .csv laporan", "penjualan.csv csv 2026", "Error"],
    "pathlib memecah alamat file: .name nama file, .suffix ekstensi (dengan titik), .parent folder di atasnya.",
    ["name termasuk ekstensi; parent terdekat 2026.", "suffix memakai titik.", "Path tidak perlu file sungguhan."]),
  O("stdlib", 3, 'import statistics as st\ndata = [70, 80, 80, 90, 100]\nprint(st.mean(data), st.median(data), st.mode(data))', ["84 80 80", "84.0 80 80", "80 84 80", "84 90 80"],
    "mean = rata-rata (420 / 5 = 84), median = nilai tengah setelah diurutkan (80), mode = yang paling sering (80). statistics.mean dari int memberi int bila hasilnya bulat.",
    ["mean di sini tetap int karena datanya int dan hasilnya bulat.", "Urutannya mean, median, mode.", "median adalah 80, nilai di tengah."]),
  M("stdlib", 1, "Modul bawaan untuk membaca dan menulis teks JSON:", ["json", "csv", "pickle", "re"],
    "json.loads (teks → dict) dan json.dumps (dict → teks).",
    ["csv untuk tabel CSV.", "pickle untuk format biner Python.", "re untuk pola teks."]),
  M("stdlib", 2, "Kapan regular expression (re) tepat dipakai?", ["Mencari atau memvalidasi pola teks, misalnya email, nomor HP, angka di kalimat", "Menghitung rata-rata", "Membuat class", "Mengurutkan list angka"],
    "Untuk pencarian sederhana, method string (in, startswith, split) sering cukup dan lebih mudah dibaca. re dipakai saat polanya rumit.",
    ["Untuk rata-rata pakai statistics.", "Tidak terkait class.", "Untuk urut pakai sorted."]),
  M("stdlib", 2, "Kenapa menulis r\"\\d+\" (dengan huruf r) untuk pola re?", ["r membuat raw string: garis miring terbalik tidak diolah Python, langsung diteruskan ke re", "r artinya regex wajib", "r membuat huruf kecil", "Supaya lebih cepat"],
    "Tanpa r, Python bisa menganggap \\d atau \\n sebagai kode khusus. Raw string mencegah kebingungan itu.",
    ["r bukan penanda regex.", "Tidak mengubah huruf.", "Bukan soal kecepatan."]),
  I("stdlib", 1, "Class datetime untuk menyatakan selisih waktu, misalnya 5 hari: ____(days=5)", ["timedelta"], "timedelta bisa ditambah atau dikurangkan dari tanggal."),

  // ---- kerja (+15) ----
  O("kerja", 1, 'def luas(p: float, l: float) -> float:\n    return p * l\n\nprint(luas(2, 3))', ["6", "6.0", "Error", "p * l"],
    "Type hint hanya keterangan untuk pembaca dan alat pemeriksa; Python TIDAK mengubah atau memaksa tipe saat berjalan. 2 * 3 tetap int 6.",
    ["Type hint tidak mengubah int menjadi float.", "Kodenya sah.", "Yang dicetak hasil."]),
  O("kerja", 1, 'def tambah(a: int, b: int) -> int:\n    return a + b\n\nprint(tambah("1", "2"))', ["12", "3", "TypeError", "None"],
    "Bukti type hint tidak dipaksa saat berjalan: teks tetap diterima dan disambung. Kesalahan seperti ini ditangkap oleh alat seperti mypy atau Pylance di VS Code, bukan oleh Python.",
    ["Tidak ada pengubahan otomatis.", "Python tidak memaksa tipe saat jalan.", "Ada return."]),
  O("kerja", 2, 'def bagi(a, b):\n    assert b != 0, "pembagi nol"\n    return a / b\n\ntry:\n    bagi(1, 0)\nexcept AssertionError as e:\n    print("Gagal:", e)', ["Gagal: pembagi nol", "inf", "0", "Gagal: AssertionError"],
    "assert syarat, pesan → bila syarat salah, muncul AssertionError dengan pesan itu. Dasar dari pengujian otomatis.",
    ["assert menghentikan sebelum membagi.", "Pembagian tidak dijalankan.", "Yang dicetak pesannya."]),
  O("kerja", 2, 'def diskon(harga, persen):\n    return harga - harga * persen // 100\n\nassert diskon(1000, 10) == 900\nassert diskon(1000, 0) == 1000\nprint("semua tes lulus")', ["semua tes lulus", "AssertionError", "900", "None"],
    "Kedua assert benar, jadi tidak ada error dan baris terakhir dijalankan. Inilah bentuk paling sederhana sebuah unit test.",
    ["Kedua syarat benar.", "assert tidak mencetak hasil.", "print dijalankan."]),
  O("kerja", 2, 'import logging\nlogging.basicConfig(level=logging.WARNING, format="%(levelname)s:%(message)s", force=True)\nimport sys\nlogging.getLogger().handlers[0].stream = sys.stdout\nlogging.info("detail")\nlogging.warning("stok menipis")', ["WARNING:stok menipis", "INFO:detail\nWARNING:stok menipis", "detail\nstok menipis", "(tidak ada output)"],
    "level=WARNING artinya hanya pesan WARNING ke atas yang ditampilkan. info lebih rendah, jadi disembunyikan. Inilah kelebihan logging dibanding print: tingkat detail bisa diatur tanpa menghapus baris.",
    ["info di bawah WARNING, jadi disembunyikan.", "Format menampilkan nama tingkat.", "warning tetap tampil."]),
  O("kerja", 2, 'from typing import Optional\n\ndef cari(nama: str, data: dict) -> Optional[int]:\n    return data.get(nama)\n\nprint(cari("teh", {"kopi": 5}))', ["None", "0", "KeyError", "Optional"],
    "Optional[int] berarti 'int atau None'. .get tanpa cadangan mengembalikan None untuk kunci yang tidak ada.",
    [".get tanpa cadangan memberi None.", ".get tidak error.", "Yang dicetak nilai."]),
  M("kerja", 1, "Gunanya virtual environment (venv):", ["Memisahkan paket tiap proyek supaya versinya tidak bentrok", "Mempercepat Python", "Menyembunyikan kode", "Membuat website"],
    "Proyek A butuh pandas 2, proyek B pandas 3? Masing-masing punya venv sendiri.",
    ["Bukan untuk kecepatan.", "Bukan untuk keamanan kode.", "Tidak membuat website."]),
  M("kerja", 1, "Perintah membuat dan mengaktifkan venv di Windows:", ["python -m venv .venv lalu .venv\\Scripts\\activate", "pip venv on", "python venv start", "install venv"],
    "Setelah aktif, nama (.venv) muncul di awal baris terminal dan pip install masuk ke venv itu.",
    ["Bukan perintah yang benar.", "Bukan perintah yang benar.", "venv sudah bawaan Python 3."]),
  M("kerja", 2, "File requirements.txt berisi…", ["Daftar paket (dan versinya) yang dibutuhkan proyek, dipasang dengan pip install -r requirements.txt", "Kode utama program", "Daftar error", "Kata sandi database"],
    "Orang lain cukup menjalankan satu perintah untuk memasang semua yang dibutuhkan proyekmu.",
    ["Kode ada di file .py.", "Bukan log error.", "Jangan pernah menyimpan kata sandi di repo."]),
  M("kerja", 2, "Menurut PEP 8 (gaya penulisan Python), nama fungsi dan variabel ditulis…", ["huruf_kecil_dengan_garis_bawah (snake_case)", "CamelCase", "HURUF_BESAR", "huruf-dengan-tanda-minus"],
    "Fungsi/variabel: snake_case. Class: CamelCase (misalnya SaleOrder). Konstanta: HURUF_BESAR.",
    ["CamelCase untuk nama class.", "HURUF_BESAR untuk konstanta.", "Tanda minus tidak boleh di nama."]),
  M("kerja", 2, "Dengan pytest, fungsi tes dikenali otomatis bila…", ["Nama file diawali test_ dan nama fungsi diawali test_", "Ada komentar # tes", "Fungsi diberi nama main", "Ada print di dalamnya"],
    "Contoh: file test_diskon.py berisi def test_diskon_10_persen(): assert diskon(1000, 10) == 900. Lalu jalankan perintah pytest.",
    ["Komentar tidak dibaca pytest.", "main bukan tanda tes.", "pytest memakai assert, bukan print."]),
  M("kerja", 2, "Kenapa memakai logging, bukan print, di aplikasi sungguhan?", ["Bisa diatur tingkatnya (DEBUG/INFO/WARNING/ERROR), diberi waktu, dan disimpan ke file", "logging lebih pendek ditulis", "print dilarang Python", "logging membuat program bebas error"],
    "Odoo sendiri memakai logging: _logger.info(...) muncul di log server dengan waktu dan nama modul.",
    ["Tidak lebih pendek.", "print tidak dilarang.", "logging hanya mencatat."]),
  M("kerja", 2, "Extension VS Code yang memberi garis merah saat indentasi atau nama variabel salah pada Python:", ["Python + Pylance (Microsoft)", "Live Server", "Prettier", "GitLens"],
    "Extension Python dan Pylance memberi pengecekan langsung, autocomplete, dan informasi tipe. Live Server untuk HTML, Prettier untuk merapikan JS/CSS, GitLens untuk riwayat Git.",
    ["Live Server untuk web.", "Prettier merapikan JS/CSS/HTML.", "GitLens untuk Git."]),
  M("kerja", 3, "Struktur proyek yang rapi untuk aplikasi kecil:", ["Folder paket berisi modul, folder tests/ untuk tes, requirements.txt, README.md, dan .gitignore yang mengecualikan .venv", "Semua kode dalam satu file bernama kode.py", "Menyimpan .venv di repo Git", "Tanpa README"],
    "Struktur yang rapi memudahkan orang lain (dan perekrut) memahami proyekmu.",
    ["Satu file besar sulit dirawat.", ".venv besar dan khusus komputermu; jangan di-commit.", "README menjelaskan cara memakai proyek."]),
  I("kerja", 1, "Kata kunci Python untuk mengecek syarat di tes: ____ hasil == 900", ["assert"], "assert memunculkan AssertionError bila syarat salah."),

  // ---- proyek (+15) ----
  O("proyek", 1, 'def kalkulator(a, op, b):\n    if op == "+":\n        return a + b\n    elif op == "-":\n        return a - b\n    elif op == "*":\n        return a * b\n    elif op == "/":\n        return a / b if b != 0 else "tidak bisa"\n    return "operator salah"\n\nprint(kalkulator(6, "/", 0), kalkulator(6, "%", 2))', ["tidak bisa operator salah", "Error", "0 3", "tidak bisa 0"],
    "Kalkulator yang aman: pembagian nol ditangani, operator yang tidak dikenal juga diberi pesan.",
    ["Pembagian nol sudah dicegah.", "Kedua kasus khusus ditangani.", "% tidak dikenali di fungsi ini."]),
  O("proyek", 1, 'keranjang = [("kopi", 18000, 2), ("roti", 12000, 1)]\ntotal = 0\nfor nama, harga, qty in keranjang:\n    total += harga * qty\nprint(total)', ["48000", "30000", "3", "36000"],
    "Setiap tuple dibongkar ke nama, harga, qty. 18000×2 + 12000×1 = 48000.",
    ["Qty harus dikalikan.", "Itu banyak item.", "Roti juga dihitung."]),
  O("proyek", 2, 'stok = {"kopi": 5, "teh": 2}\ndef jual(nama, qty):\n    if stok.get(nama, 0) < qty:\n        return f"stok {nama} kurang"\n    stok[nama] -= qty\n    return f"terjual {qty} {nama}"\n\nprint(jual("teh", 3))\nprint(jual("kopi", 3), stok["kopi"])', ["stok teh kurang\nterjual 3 kopi 2", "terjual 3 teh\nterjual 3 kopi 2", "stok teh kurang\nterjual 3 kopi 5", "Error"],
    "Validasi dulu sebelum mengubah data. Teh hanya 2, jadi ditolak. Kopi cukup, stok berkurang dari 5 jadi 2.",
    ["Stok teh tidak cukup.", "Stok kopi sudah dikurangi.", "Kodenya sah."]),
  O("proyek", 2, 'nilai = {"Ani": 88, "Budi": 72, "Cici": 95, "Dodi": 60}\nlulus = [n for n, v in nilai.items() if v >= 75]\nrata = sum(nilai.values()) / len(nilai)\nprint(lulus, rata)', ["['Ani', 'Cici'] 78.75", "['Ani', 'Budi', 'Cici'] 78.75", "['Ani', 'Cici'] 79", "2 78.75"],
    "Rekap nilai: saring yang ≥ 75 (Ani, Cici) dan rata-rata (315 / 4 = 78.75).",
    ["Budi 72, di bawah 75.", "/ memberi float tanpa pembulatan.", "Yang dicetak nama-namanya."]),
  O("proyek", 2, 'rahasia = 42\ntebakan = [50, 30, 42]\nfor i, t in enumerate(tebakan, start=1):\n    if t > rahasia:\n        print("terlalu besar")\n    elif t < rahasia:\n        print("terlalu kecil")\n    else:\n        print(f"benar dalam {i} kali")\n        break', ["terlalu besar\nterlalu kecil\nbenar dalam 3 kali", "benar dalam 3 kali", "terlalu kecil\nterlalu besar\nbenar dalam 3 kali", "terlalu besar\nterlalu kecil"],
    "Logika gim tebak angka tanpa input(): setiap tebakan dibandingkan, lalu berhenti saat benar.",
    ["Tebakan sebelumnya juga diberi petunjuk.", "50 lebih besar dari 42.", "Tebakan ketiga benar."]),
  O("proyek", 2, 'def fizzbuzz(n):\n    if n % 15 == 0:\n        return "FizzBuzz"\n    if n % 3 == 0:\n        return "Fizz"\n    if n % 5 == 0:\n        return "Buzz"\n    return str(n)\n\nprint(" ".join(fizzbuzz(i) for i in range(9, 16)))', ["Fizz Buzz 11 Fizz 13 14 FizzBuzz", "9 10 11 12 13 14 15", "Fizz Buzz 11 Fizz 13 14 Fizz", "FizzBuzz Buzz 11 Fizz 13 14 FizzBuzz"],
    "Cek 15 dulu (kelipatan 3 dan 5), baru 3, lalu 5. Kalau urutan terbalik, 15 akan menjadi Fizz saja.",
    ["Angka kelipatan diganti kata.", "15 kelipatan 3 dan 5.", "9 hanya kelipatan 3."]),
  O("proyek", 2, 'teks = "Saya suka kopi. Kopi itu enak!"\nkata = [k.strip(".,!").lower() for k in teks.split()]\nfrek = {}\nfor k in kata:\n    frek[k] = frek.get(k, 0) + 1\nprint(max(frek, key=frek.get), frek["kopi"])', ["kopi 2", "saya 1", "kopi 1", "Kopi 2"],
    "Proyek penghitung kata: rapikan tanda baca dan huruf besar dulu, baru dihitung. Kopi. dan Kopi dianggap sama.",
    ["kopi muncul dua kali setelah dirapikan.", "Setelah lower, Kopi dan kopi sama.", "Semua dijadikan huruf kecil."]),
  O("proyek", 2, 'transaksi = [("2026-11-01", "masuk", 500), ("2026-11-02", "keluar", 200), ("2026-11-05", "keluar", 100)]\nsaldo = 0\nfor tgl, jenis, n in transaksi:\n    saldo += n if jenis == "masuk" else -n\nprint(saldo)', ["200", "800", "-300", "500"],
    "Proyek buku kas: masuk ditambah, keluar dikurangi. 500 - 200 - 100 = 200.",
    ["Keluar harus dikurangi.", "Ada uang masuk 500.", "Saldo awal 0."]),
  O("proyek", 3, 'def validasi_password(p):\n    salah = []\n    if len(p) < 8:\n        salah.append("min 8 karakter")\n    if not any(c.isdigit() for c in p):\n        salah.append("butuh angka")\n    if not any(c.isupper() for c in p):\n        salah.append("butuh huruf besar")\n    return salah or "kuat"\n\nprint(validasi_password("rahasia1"), validasi_password("Rahasia12"))', ["['butuh huruf besar'] kuat", "kuat kuat", "['min 8 karakter', 'butuh huruf besar'] kuat", "[] kuat"],
    "rahasia1 sudah 8 karakter dan punya angka, tapi tanpa huruf besar. List kosong dianggap falsy, jadi 'salah or \"kuat\"' memberi \"kuat\" bila tidak ada masalah.",
    ["rahasia1 tidak punya huruf besar.", "rahasia1 tepat 8 karakter.", "List kosong diganti \"kuat\"."]),
  M("proyek", 1, "Urutan kerja yang disarankan saat membuat proyek kecil:", ["Tulis langkah dengan bahasa sendiri → buat versi paling sederhana yang jalan → uji → tambah fitur sedikit demi sedikit", "Langsung menulis semua fitur sekaligus", "Mendesain tampilan dulu sebelum logika", "Menyalin kode orang tanpa diuji"],
    "Versi kecil yang jalan lebih berharga daripada versi besar yang error. Setiap tambahan diuji sebelum lanjut.",
    ["Sulit mencari kesalahan bila semua ditulis sekaligus.", "Logika dulu, tampilan belakangan.", "Kode yang tidak dipahami sulit diperbaiki."]),
  M("proyek", 2, "Kenapa logika program (hitung total, validasi) sebaiknya dipisah ke fungsi, terpisah dari input()/print()?", ["Supaya bisa diuji otomatis dan dipakai ulang (misalnya di web atau Odoo)", "Supaya program lebih panjang", "Karena input() tidak boleh di fungsi", "Tidak ada alasannya"],
    "Fungsi yang menerima parameter dan me-return hasil bisa diuji dengan assert tanpa mengetik input berkali-kali. Itu juga cara Lab KodeQuiz menilai kodemu.",
    ["Tujuannya kerapian, bukan panjang.", "input() boleh di fungsi, hanya kurang fleksibel.", "Ada alasan kuat."]),
  M("proyek", 2, "Proyek yang paling meyakinkan untuk portofolio Data Analyst/Odoo pemula:", ["Proyek kecil yang selesai, punya README, data contoh, dan hasil yang bisa dicoba orang lain", "Proyek besar yang belum selesai", "Kumpulan tutorial yang disalin", "Kode tanpa penjelasan"],
    "Perekrut ingin melihat bahwa kamu bisa menyelesaikan sesuatu dan menjelaskannya.",
    ["Belum selesai sulit dinilai.", "Salinan tutorial tidak menunjukkan kemampuanmu.", "Penjelasan itu penting."]),
  M("proyek", 2, "Menyimpan data proyek supaya tidak hilang saat program ditutup, cara paling sederhana:", ["Tulis ke file JSON atau CSV dan baca lagi saat program dibuka", "Simpan di variabel saja", "Cetak ke layar", "Tidak bisa"],
    "Variabel hilang saat program selesai. json.dump/json.load atau modul csv sudah cukup untuk proyek kecil.",
    ["Variabel hilang saat program ditutup.", "Layar tidak menyimpan data.", "Bisa, dengan file."]),
  O("proyek", 2, 'def bmi(berat, tinggi_cm):\n    t = tinggi_cm / 100\n    nilai = round(berat / (t * t), 1)\n    if nilai < 18.5:\n        kategori = "kurus"\n    elif nilai < 25:\n        kategori = "normal"\n    else:\n        kategori = "berlebih"\n    return nilai, kategori\n\nprint(bmi(60, 170))', ["(20.8, 'normal')", "(20.76, 'normal')", "20.8 normal", "(20.8, 'kurus')"],
    "Proyek BMI: tinggi diubah ke meter (1.7), 60 / (1.7 × 1.7) ≈ 20.76, dibulatkan 1 desimal jadi 20.8, masuk kategori normal (18.5 sampai di bawah 25). Dua nilai di-return sebagai tuple.",
    ["round(..., 1) menyisakan satu desimal.", "return dua nilai menghasilkan tuple.", "20.8 tidak di bawah 18.5."]),
  I("proyek", 1, "Method teks untuk menyambung list menjadi teks dengan pemisah: \", \".____(daftar)", ["join"], "\", \".join([\"a\", \"b\"]) → \"a, b\"."),
  );

  dalami("latihan", `
<h4>Resep membaca kode seperti komputer</h4>
<ol><li><b>Cari titik mulai.</b> Baris <code>def</code> dan <code>class</code> hanya didaftarkan, belum dijalankan. Mulailah dari baris pertama yang benar-benar dieksekusi.</li><li><b>Buat tabel jejak.</b> Satu kolom per variabel, satu baris per langkah.</li><li><b>Hati-hati di titik rawan:</b> batas <code>range</code>, <code>//</code> vs <code>/</code>, indeks mulai 0, <code>print</code> di dalam atau di luar loop, <code>return</code> yang menghentikan fungsi.</li><li><b>Tulis output persis</b>, termasuk tanda kutip, kurung siku, spasi, dan <code>.0</code> pada float.</li></ol>
<h4>Contoh menelusuri</h4>
<pre><code>def proses(data):
    hasil = []
    for x in data:
        if x % 2 == 0:
            hasil.append(x // 2)
        else:
            hasil.append(x * 3)
    return hasil

print(proses([4, 3, 6]))</code></pre>
<table class="mini-pivot"><tr><th>x</th><th>genap?</th><th>ditambahkan</th><th>hasil</th></tr>
<tr><td>4</td><td>ya</td><td>4 // 2 = 2</td><td>[2]</td></tr>
<tr><td>3</td><td>tidak</td><td>3 * 3 = 9</td><td>[2, 9]</td></tr>
<tr><td>6</td><td>ya</td><td>6 // 2 = 3</td><td>[2, 9, 3]</td></tr></table>
<p>Output: <code>[2, 9, 3]</code>. Perhatikan <code>//</code> memberi int (2), bukan 2.0.</p>
<h4>Jebakan favorit soal tes</h4>
<table class="mini-pivot"><tr><th>Jebakan</th><th>Ingat</th></tr>
<tr><td><code>range(1, 5)</code></td><td>1 sampai 4, angka akhir tidak ikut</td></tr>
<tr><td><code>7 / 7</code></td><td>1.0 (float), bukan 1</td></tr>
<tr><td><code>b = a</code> pada list</td><td>satu list, dua nama</td></tr>
<tr><td><code>daftar.sort()</code></td><td>mengubah list, hasilnya None</td></tr>
<tr><td>fungsi tanpa return</td><td>hasilnya None</td></tr>
<tr><td><code>"5" + "5"</code></td><td>"55"</td></tr>
<tr><td><code>True + True</code></td><td>2 (True dianggap 1)</td></tr>
<tr><td>parameter bawaan <code>=[]</code></td><td>list yang sama dipakai ulang</td></tr></table>
<h4>Pola algoritma yang sering keluar</h4>
<ul><li><b>Akumulator</b>: total = 0, lalu tambah di loop.</li><li><b>Penghitung dengan dict</b>: <code>d[k] = d.get(k, 0) + 1</code>.</li><li><b>Dua penanda (two pointer)</b>: kiri dan kanan bergerak mendekat, misalnya cek palindrom.</li><li><b>Digit</b>: <code>n % 10</code> ambil digit terakhir, <code>n // 10</code> buang digit terakhir.</li><li><b>Terbesar kedua</b>: simpan dua variabel, geser saat ketemu yang lebih besar.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> tanpa menjalankan, tebak output <code>print([i * j for i in range(1, 3) for j in range(2)])</code> dengan tabel jejak, lalu cek di Code Runner. (Jawaban: [0, 1, 0, 2].)</div>`);

  dalami("comprehension", `
<h4>Mengubah for biasa menjadi comprehension, langkah demi langkah</h4>
<pre><code># for biasa
hasil = []
for n in angka:
    if n &gt; 0:
        hasil.append(n * 2)

# comprehension: ambil 3 bagian dari kode di atas
hasil = [n * 2  for n in angka  if n &gt; 0]
#        ^ yang di-append   ^ baris for   ^ baris if</code></pre>
<p>Bacanya dari tengah: "untuk setiap n di angka, kalau n &gt; 0, masukkan n * 2".</p>
<h4>Dua posisi if (sering tertukar)</h4>
<table class="mini-pivot"><tr><th>Bentuk</th><th>Kerjanya</th><th>Jumlah hasil</th></tr>
<tr><td><code>[x for x in d if x &gt; 0]</code></td><td>menyaring</td><td>bisa lebih sedikit</td></tr>
<tr><td><code>["+" if x &gt; 0 else "-" for x in d]</code></td><td>memilih nilai</td><td>selalu sama banyak</td></tr></table>
<h4>Empat bentuk kurung</h4>
<pre><code>[x * 2 for x in d]          # list
{x * 2 for x in d}          # set (tanpa kembar)
{x: x * 2 for x in d}       # dict (ada titik dua)
(x * 2 for x in d)          # generator (dihitung saat dibutuhkan)</code></pre>
<h4>Fungsi bawaan pasangan comprehension</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>sum</code></td><td><code>sum(h * q for h, q in item)</code></td><td>total belanja</td></tr>
<tr><td><code>any</code> / <code>all</code></td><td><code>any(n &lt; 0 for n in d)</code></td><td>adakah yang negatif?</td></tr>
<tr><td><code>max</code> / <code>min</code> + key</td><td><code>max(data, key=lambda x: x[1])</code></td><td>item dengan nilai terbesar</td></tr>
<tr><td><code>sorted</code> + key</td><td><code>sorted(nama, key=len)</code></td><td>urut berdasarkan panjang</td></tr>
<tr><td><code>map</code></td><td><code>list(map(int, "1 2".split()))</code></td><td>[1, 2]</td></tr></table>
<h4>key=lambda dengan bahasa sederhana</h4>
<p><code>key</code> menjawab pertanyaan "bandingkan berdasarkan apa?". <code>lambda x: x[1]</code> artinya "dari setiap x, ambil bagian ke-1 (nilainya)". Jadi <code>max(data, key=lambda x: x[1])</code> = "cari item yang nilainya paling besar".</p>
<div class="praktik"><b>Coba sendiri:</b> dari <code>siswa = [("Ani", 88), ("Budi", 72), ("Cici", 95)]</code>, buat (1) list nama yang lulus ≥ 75, (2) dict nama → "L"/"R", (3) nama dengan nilai tertinggi, masing-masing dalam satu baris.</div>`);

  dalami("fungsilanjut", `
<h4>Bintang di definisi vs bintang di pemanggilan</h4>
<table class="mini-pivot"><tr><th>Tempat</th><th>Tulisan</th><th>Arti</th></tr>
<tr><td>definisi</td><td><code>def f(*args)</code></td><td>KUMPULKAN argumen posisi jadi tuple</td></tr>
<tr><td>definisi</td><td><code>def f(**kwargs)</code></td><td>KUMPULKAN argumen bernama jadi dict</td></tr>
<tr><td>pemanggilan</td><td><code>f(*daftar)</code></td><td>BONGKAR list jadi argumen terpisah</td></tr>
<tr><td>pemanggilan</td><td><code>f(**kamus)</code></td><td>BONGKAR dict jadi argumen bernama</td></tr></table>
<h4>LEGB: urutan Python mencari nama</h4>
<pre><code>x = "Global"                 # G
def luar():
    x = "Enclosing"          # E
    def dalam():
        x = "Local"          # L
        print(x)             # cari L dulu → "Local"
    dalam()
print(len("abc"))            # len ditemukan di Built-in (B)</code></pre>
<p>Mengubah variabel milik level di atasnya butuh izin: <code>global x</code> untuk level global, <code>nonlocal x</code> untuk fungsi pembungkus. Lebih rapi lagi: kirim lewat parameter dan kembalikan lewat return.</p>
<h4>Rekursi: percaya pada versi kecilnya</h4>
<pre><code>def pangkat(a, n):
    if n == 0:                  # 1) kasus dasar: jawaban langsung
        return 1
    return a * pangkat(a, n - 1)   # 2) langkah: soal yang lebih kecil

# pangkat(2, 3) = 2 * pangkat(2, 2) = 2 * 2 * pangkat(2, 1) = 2 * 2 * 2 * 1 = 8</code></pre>
<h4>Decorator: pembungkus fungsi</h4>
<pre><code>import time

def catat_waktu(f):
    def bungkus(*args, **kwargs):
        mulai = time.time()
        hasil = f(*args, **kwargs)        # jalankan fungsi aslinya
        print(f.__name__, "butuh", round(time.time() - mulai, 3), "detik")
        return hasil
    return bungkus

@catat_waktu                  # sama dengan: hitung = catat_waktu(hitung)
def hitung(n):
    return sum(range(n))</code></pre>
<p>Decorator menambah perilaku (mencatat waktu, mengecek izin, menyimpan cache) tanpa mengubah isi fungsi asli. Odoo memakai pola ini untuk <code>@api.depends</code>, <code>@api.constrains</code>, dan <code>@api.model</code>.</p>
<h4>Jebakan parameter bawaan berupa list</h4>
<pre><code>def tambah(x, wadah=None):     # benar
    if wadah is None:
        wadah = []
    wadah.append(x)
    return wadah</code></pre>
<div class="praktik"><b>Coba sendiri:</b> buat decorator <code>huruf_besar</code> yang membuat hasil teks fungsi apa pun menjadi huruf besar, lalu pakai pada dua fungsi berbeda.</div>`);

  dalami("iterator", `
<h4>Iterable, iterator, generator: tiga kata, satu ide</h4>
<table class="mini-pivot"><tr><th>Istilah</th><th>Arti sederhana</th><th>Contoh</th></tr>
<tr><td>iterable</td><td>sesuatu yang bisa diulang dengan for</td><td>list, teks, dict, range, file</td></tr>
<tr><td>iterator</td><td>"penunjuk" yang memberi item berikutnya lewat next()</td><td><code>iter([1, 2])</code></td></tr>
<tr><td>generator</td><td>iterator yang dibuat dengan yield atau (x for x in ...)</td><td><code>def g(): yield 1</code></td></tr></table>
<p>Ibarat antrean loket: iterable = daftar antrean, iterator = petugas yang memanggil "nomor berikutnya". Setelah nomor dipanggil, tidak bisa diulang kecuali membuat antrean baru.</p>
<h4>return vs yield</h4>
<pre><code>def dengan_return():
    return [1, 2, 3]          # buat semuanya, serahkan sekaligus, selesai

def dengan_yield():
    yield 1                   # serahkan 1, BERHENTI SEMENTARA
    yield 2                   # dilanjutkan saat diminta lagi
    yield 3</code></pre>
<p>Generator mengingat posisinya. Isinya baru dijalankan saat nilai diminta (oleh for, next, list, sum).</p>
<h4>Kenapa ini penting untuk data</h4>
<pre><code>def baca_besar(nama_file):
    with open(nama_file) as f:
        for baris in f:                 # satu baris setiap kali
            yield baris.strip().split(",")

total = sum(int(b[2]) for b in baca_besar("transaksi.csv"))</code></pre>
<p>File 5 GB tetap bisa diproses di laptop biasa karena yang ada di memori hanya satu baris setiap saat.</p>
<h4>Aturan penting</h4>
<ul><li>Generator <b>habis</b> setelah sekali diulang. Butuh dua kali? Ubah ke list dulu atau buat generator baru.</li><li>Generator tidak punya <code>len()</code> dan tidak bisa diindeks <code>g[0]</code>.</li><li>Untuk mengambil n item pertama dari generator tanpa akhir, pakai <code>itertools.islice</code>.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat generator <code>genap(batas)</code> yang memberi angka genap dari 0 sampai sebelum batas, lalu jumlahkan dengan <code>sum(genap(10))</code>. (Jawaban: 20.)</div>`);

  dalami("oop2", `
<h4>Dunder method = "kabel" ke fitur bawaan Python</h4>
<table class="mini-pivot"><tr><th>Kamu menulis</th><th>Python memanggil</th></tr>
<tr><td><code>Produk("Kopi")</code></td><td><code>__init__</code></td></tr>
<tr><td><code>print(p)</code>, <code>str(p)</code></td><td><code>__str__</code></td></tr>
<tr><td>tampilan di list / console</td><td><code>__repr__</code></td></tr>
<tr><td><code>len(k)</code></td><td><code>__len__</code></td></tr>
<tr><td><code>a + b</code></td><td><code>__add__</code></td></tr>
<tr><td><code>a == b</code></td><td><code>__eq__</code></td></tr>
<tr><td><code>a &lt; b</code>, sorted()</td><td><code>__lt__</code></td></tr>
<tr><td><code>for x in obj</code></td><td><code>__iter__</code></td></tr>
<tr><td><code>"x" in obj</code></td><td><code>__contains__</code></td></tr></table>
<p>Dengan menulis method ini, objek buatanmu bisa dipakai seperti tipe bawaan.</p>
<h4>@property: atribut yang dijaga</h4>
<pre><code>class Produk:
    def __init__(self, harga):
        self.harga = harga            # lewat setter di bawah

    @property
    def harga(self):                  # dibaca: p.harga
        return self._harga

    @harga.setter
    def harga(self, nilai):           # diisi: p.harga = ...
        if nilai &lt; 0:
            raise ValueError("harga tidak boleh negatif")
        self._harga = nilai</code></pre>
<p>Dari luar tetap ditulis sederhana (<code>p.harga = 5000</code>), tetapi setiap pengisian diperiksa dulu.</p>
<h4>Tiga jenis method</h4>
<table class="mini-pivot"><tr><th>Jenis</th><th>Parameter pertama</th><th>Dipakai untuk</th></tr>
<tr><td>method biasa</td><td><code>self</code> (objek)</td><td>bekerja dengan data satu objek</td></tr>
<tr><td><code>@classmethod</code></td><td><code>cls</code> (class)</td><td>cara lain membuat objek, misalnya dari teks/CSV</td></tr>
<tr><td><code>@staticmethod</code></td><td>tidak ada</td><td>fungsi pembantu yang masih berhubungan dengan class</td></tr></table>
<h4>dataclass: hemat menulis</h4>
<pre><code>from dataclasses import dataclass, field

@dataclass
class Pesanan:
    pelanggan: str
    item: list = field(default_factory=list)   # list baru untuk tiap objek
    diskon: int = 0</code></pre>
<p><code>@dataclass</code> membuatkan <code>__init__</code>, <code>__repr__</code>, dan <code>__eq__</code>. Untuk nilai bawaan berupa list/dict, pakai <code>field(default_factory=list)</code> supaya tidak terjadi jebakan list bersama.</p>
<div class="praktik"><b>Coba sendiri:</b> buat class <code>Uang</code> dengan <code>__add__</code>, <code>__eq__</code>, dan <code>__str__</code> yang menampilkan "Rp 18.000", lalu jumlahkan tiga objek Uang dengan <code>+</code>.</div>`);

  dalami("stdlib", `
<h4>Peta cepat: butuh apa, pakai modul apa</h4>
<table class="mini-pivot"><tr><th>Kebutuhan</th><th>Modul</th><th>Contoh</th></tr>
<tr><td>tanggal, selisih hari, format</td><td><code>datetime</code></td><td><code>date.today() - timedelta(days=7)</code></td></tr>
<tr><td>hitung kemunculan</td><td><code>collections.Counter</code></td><td><code>Counter(kata).most_common(3)</code></td></tr>
<tr><td>kelompokkan ke list</td><td><code>collections.defaultdict</code></td><td><code>defaultdict(list)</code></td></tr>
<tr><td>antrean dua ujung</td><td><code>collections.deque</code></td><td><code>q.appendleft(x)</code></td></tr>
<tr><td>pola teks</td><td><code>re</code></td><td><code>re.findall(r"\\d+", teks)</code></td></tr>
<tr><td>JSON</td><td><code>json</code></td><td><code>json.load(f)</code></td></tr>
<tr><td>CSV</td><td><code>csv</code></td><td><code>csv.DictReader(f)</code></td></tr>
<tr><td>alamat file/folder</td><td><code>pathlib</code></td><td><code>Path("data") / "a.csv"</code></td></tr>
<tr><td>statistik sederhana</td><td><code>statistics</code></td><td><code>median(data)</code></td></tr></table>
<h4>strftime dan strptime tanpa bingung</h4>
<ul><li><code>strftime</code> = <b>f</b>ormat: tanggal → teks. <code>d.strftime("%d-%m-%Y")</code></li><li><code>strptime</code> = <b>p</b>arse (membaca): teks → tanggal. <code>datetime.strptime("27-11-2026", "%d-%m-%Y")</code></li></ul>
<table class="mini-pivot"><tr><th>Kode</th><th>Arti</th><th>Contoh</th></tr>
<tr><td>%d</td><td>tanggal 2 digit</td><td>05</td></tr><tr><td>%m</td><td>bulan 2 digit</td><td>11</td></tr>
<tr><td>%Y</td><td>tahun 4 digit</td><td>2026</td></tr><tr><td>%H:%M</td><td>jam:menit (24 jam)</td><td>14:05</td></tr>
<tr><td>%A</td><td>nama hari (Inggris)</td><td>Friday</td></tr></table>
<h4>Regex: lima simbol yang paling berguna</h4>
<table class="mini-pivot"><tr><th>Simbol</th><th>Arti</th></tr>
<tr><td><code>\\d</code></td><td>satu digit 0-9</td></tr>
<tr><td><code>\\w</code></td><td>huruf, angka, atau garis bawah</td></tr>
<tr><td><code>\\s</code></td><td>spasi/Tab/Enter</td></tr>
<tr><td><code>+</code></td><td>satu atau lebih dari simbol sebelumnya</td></tr>
<tr><td><code>{8,11}</code></td><td>8 sampai 11 kali</td></tr></table>
<pre><code>import re
re.findall(r"\\d+", "INV-2026-0042")         # ['2026', '0042']
re.fullmatch(r"[\\w.]+@[\\w.]+", "a.b@c.id")   # cocok (contoh sederhana)
re.sub(r"\\s+", " ", "a    b")                # 'a b'</code></pre>
<div class="praktik"><b>Coba sendiri:</b> dari teks <code>"INV/2026/001 Rp1.250.000; INV/2026/002 Rp300.000"</code>, ambil semua nomor invoice dengan <code>re.findall(r"INV/\\d+/\\d+", teks)</code> lalu jumlahkan nominal rupiahnya.</div>`);

  dalami("kerja", `
<h4>Dari kode latihan ke kode kerja</h4>
<table class="mini-pivot"><tr><th>Kebiasaan latihan</th><th>Kebiasaan kerja</th></tr>
<tr><td>satu file berisi semuanya</td><td>dipecah ke modul, ada folder <code>tests/</code></td></tr>
<tr><td>pip install ke Python utama</td><td>venv per proyek + <code>requirements.txt</code></td></tr>
<tr><td>dicoba manual dengan print</td><td>diuji otomatis dengan pytest/assert</td></tr>
<tr><td>print untuk melacak</td><td>logging dengan tingkat (INFO/WARNING/ERROR)</td></tr>
<tr><td>nama variabel x, y, data2</td><td>nama jelas: <code>total_penjualan</code></td></tr>
<tr><td>disimpan di laptop</td><td>Git + GitHub, commit kecil berpesan jelas</td></tr></table>
<h4>Langkah memulai proyek baru (Windows)</h4>
<pre><code>mkdir rekap-penjualan
cd rekap-penjualan
python -m venv .venv
.venv\\Scripts\\activate
python -m pip install pandas pytest
python -m pip freeze &gt; requirements.txt
git init</code></pre>
<h4>Tes pertamamu dengan pytest</h4>
<pre><code># rekap.py
def diskon(harga, persen):
    return harga - harga * persen // 100

# test_rekap.py
from rekap import diskon

def test_diskon_biasa():
    assert diskon(1000, 10) == 900

def test_tanpa_diskon():
    assert diskon(1000, 0) == 1000</code></pre>
<p>Jalankan <code>pytest</code> di terminal. Titik hijau = lulus, F merah = gagal beserta penjelasannya. Lab KodeQuiz bekerja dengan cara yang mirip: fungsimu dipanggil dengan banyak data, hasil return-nya dicocokkan.</p>
<h4>Extension VS Code yang membantu belajar Python</h4>
<ul><li><b>Python</b> dan <b>Pylance</b> (Microsoft): garis merah langsung, autocomplete, info tipe.</li><li><b>Python Debugger</b>: berhenti di baris tertentu dan melihat isi variabel.</li><li><b>Error Lens</b>: menampilkan pesan error tepat di baris yang salah.</li><li><b>indent-rainbow</b>: mewarnai tingkat jorok, sangat membantu memahami blok Python.</li><li><b>Ruff</b> atau <b>Black Formatter</b>: merapikan kode otomatis sesuai PEP 8.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> pindahkan salah satu fungsi Studi Kasus yang sudah kamu kerjakan ke file <code>fungsi.py</code> di laptop, tulis 3 tes di <code>test_fungsi.py</code>, lalu jalankan <code>pytest</code>.</div>`);

  dalami("proyek", `
<h4>Cara memecah soal proyek (berlaku untuk semua proyek)</h4>
<ol><li><b>Tulis tujuan dalam satu kalimat.</b> Contoh: "Program kasir menghitung total belanja dan kembalian."</li><li><b>Tentukan data masuk dan keluar.</b> Masuk: daftar (nama, harga, qty), uang bayar. Keluar: total, kembalian, struk.</li><li><b>Pecah jadi fungsi kecil.</b> <code>hitung_total(keranjang)</code>, <code>kembalian(total, bayar)</code>, <code>cetak_struk(...)</code>.</li><li><b>Buat versi paling sederhana yang jalan</b>, uji dengan data contoh.</li><li><b>Tambah satu fitur setiap kali</b> (diskon, validasi, simpan ke file), uji lagi.</li></ol>
<h4>Kerangka program interaktif yang rapi</h4>
<pre><code>def hitung_total(keranjang):
    return sum(harga * qty for _, harga, qty in keranjang)

def kembalian(total, bayar):
    if bayar &lt; total:
        raise ValueError("uang kurang")
    return bayar - total

def main():
    keranjang = []
    while True:
        nama = input("Produk (kosongkan untuk selesai): ").strip()
        if not nama:
            break
        harga = int(input("Harga: "))
        qty = int(input("Qty: "))
        keranjang.append((nama, harga, qty))
    total = hitung_total(keranjang)
    print("Total:", total)
    print("Kembalian:", kembalian(total, int(input("Bayar: "))))

if __name__ == "__main__":
    main()</code></pre>
<p>Logika (hitung_total, kembalian) terpisah dari input/print, jadi bisa diuji dengan <code>assert</code> dan dipakai ulang di web atau Odoo.</p>
<h4>Ide proyek berjenjang</h4>
<table class="mini-pivot"><tr><th>Tingkat</th><th>Proyek</th><th>Konsep yang dilatih</th></tr>
<tr><td>1</td><td>Konversi suhu / BMI</td><td>input, operator, if</td></tr>
<tr><td>2</td><td>Tebak angka, kasir sederhana</td><td>while, random, list</td></tr>
<tr><td>3</td><td>Buku kas dengan simpan JSON</td><td>dict, fungsi, file, try/except</td></tr>
<tr><td>4</td><td>Rekap penjualan dari CSV</td><td>csv/pandas, groupby, laporan</td></tr>
<tr><td>5</td><td>Modul Odoo kecil (perpustakaan)</td><td>class, ORM, XML view, akses</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> jalankan kerangka kasir di atas di Code Runner (mode Python), lalu tambahkan fitur diskon 10% bila total di atas 100.000 sebagai fungsi terpisah beserta dua baris <code>assert</code>.</div>`);
})();
