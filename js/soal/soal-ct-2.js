// ============ CODING TEST ODOO DEVELOPER — tambahan 2x lipat (10 bab) ============
// Dimuat SETELAH soal-latihan-ekstra.js. Bagian Python: vr:"py" dijalankan oleh alat/cek-soal.js.
// Bagian Odoo mengikuti API Odoo 17 (view <tree>, invisible="…", Command, @api.model_create_multi). Kunci di indeks 0 (opsi diacak).
(function () {
  const O = (k, lv, kode, o, e, w) => ({ k, t: "mc", lv, q: "Output kode ini:", kode, o, a: 0, vr: "py", e, ...(w ? { w: [null, ...w] } : {}) });
  const M = (k, lv, q, o, e, w, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}), ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_CT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_CT.push(
  // ---- strategi (+12) ----
  M("strategi", 1, "Soal: 'kembalikan angka yang muncul lebih dari sekali'. Sebelum menulis kode, contoh uji sendiri yang paling berguna:", ["[] → [], [1,2,3] → [], [1,1,2,2,2] → [1,2]", "Hanya [1,1]", "Tidak perlu contoh", "Satu contoh dari soal saja"], "Contoh kosong, tanpa duplikat, dan banyak duplikat menunjukkan batas soal (urutan hasil, duplikat dihitung sekali?)."),
  M("strategi", 2, "Kompleksitas mencari nilai di list terurut dengan binary search:", ["O(log n)", "O(n)", "O(n²)", "O(1)"], "Setiap langkah membuang separuh data: 1 juta data cukup ±20 langkah."),
  M("strategi", 2, "Kompleksitas kode ini:", ["O(n)", "O(n²)", "O(log n)", "O(n log n)"], "Dua loop TIDAK bersarang (berurutan): n + n = 2n, tetap O(n).", null, "for x in data:\n    total += x\nfor x in data:\n    if x > total / len(data):\n        hitung += 1"),
  O("strategi", 1, 'def ada_kembar(data):\n    return len(data) != len(set(data))\n\nprint(ada_kembar([3, 1, 3]), ada_kembar([]))', ["True False", "False False", "True True", "Error"],
    "Satu baris O(n): set membuang kembar, jadi panjangnya berbeda bila ada duplikat. Data kosong tetap aman.",
    ["[] tidak punya kembar.", "3 muncul dua kali.", "len([]) = 0, aman."]),
  O("strategi", 2, 'def bagi_aman(a, b):\n    if b == 0:\n        return None\n    return round(a / b, 2)\n\nprint(bagi_aman(10, 3), bagi_aman(1, 0))', ["3.33 None", "3.3333333333333335 None", "3.33 0", "Error"],
    "Guard clause di awal menangani kasus tepi; round(…, 2) merapikan hasil.",
    ["Sudah dibulatkan 2 desimal.", "Pembagi nol mengembalikan None.", "Tidak error karena dicek dulu."]),
  M("strategi", 2, "Penilai bertanya 'bisakah lebih cepat?' untuk solusi O(n²) mencari pasangan berjumlah target. Jawaban terbaik:", ["Simpan angka yang sudah dilihat di set; untuk setiap x cek apakah target - x sudah ada: O(n)", "Pakai dua loop lagi", "Urutkan lalu tetap dua loop", "Tidak mungkin lebih cepat"], "Pola hash map/set mengubah pencarian dalam dari O(n) menjadi O(1)."),
  M("strategi", 2, "Memori tambahan (space complexity) solusi dengan set berisi semua n elemen:", ["O(n)", "O(1)", "O(n²)", "O(log n)"], "Lebih cepat sering dibayar dengan memori: waktu O(n), memori O(n)."),
  M("strategi", 1, "Setelah kode selesai dan lulus contoh soal, langkah berikutnya:", ["Uji kasus tepi (kosong, satu item, negatif, besar) lalu rapikan nama dan hapus print debug", "Langsung kirim", "Tambah fitur yang tidak diminta", "Hapus semua komentar"], "Banyak tes punya tes tersembunyi untuk kasus tepi."),
  M("strategi", 2, "Kenapa menulis fungsi yang me-return hasil lebih baik daripada print di dalam fungsi untuk coding test?", ["Penilai otomatis membandingkan nilai return; print tidak terbaca sebagai hasil", "print dilarang Python", "return lebih pendek", "Tidak ada bedanya"], "Lab KodeQuiz juga menilai nilai return."),
  M("strategi", 3, "Kode ini lambat untuk data besar. Perbaikan paling sederhana:", ["Ubah larangan menjadi set: larangan = set(larangan) sebelum loop", "Tambah print", "Pakai while", "Urutkan data"], "x in list = O(m) di setiap putaran; x in set = O(1). Total turun dari O(n·m) menjadi O(n + m).", null, "def saring(data, larangan):\n    return [x for x in data if x not in larangan]   # larangan berupa list besar"),
  I("strategi", 2, "Notasi Big-O untuk satu perulangan atas n data: O(____)", ["n"], "Satu loop sebanding n."),
  I("strategi", 1, "Nama solusi paling sederhana yang mencoba semua kemungkinan: brute ____", ["force"], "Brute force: benar dulu, cepat kemudian."),

  // ---- baca (+12) ----
  O("baca", 1, 'a = [1, 2, 3]\nb = a\nb += [4]\nprint(a)', ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]", "Error"],
    "+= pada list mengubah list yang SAMA (seperti extend), dan a menunjuk list itu juga.",
    ["a dan b satu list.", "Yang ditambah ke list bersama.", "Sah."]),
  O("baca", 2, 'a = [1, 2, 3]\nb = a\nb = b + [4]\nprint(a)', ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
    "b = b + [4] membuat list BARU lalu b menunjuk ke sana; a tidak berubah. Bandingkan dengan +=.",
    ["Operator + membuat list baru.", "b dipindah ke list baru.", "Sah."]),
  O("baca", 2, 'grid = [[0] * 2] * 2\ngrid[0][0] = 9\nprint(grid)', ["[[9, 0], [9, 0]]", "[[9, 0], [0, 0]]", "[[9, 9], [9, 9]]", "Error"],
    "* 2 pada list luar menyalin RUJUKAN ke list dalam yang sama. Cara benar: [[0] * 2 for _ in range(2)].",
    ["Kedua baris adalah list yang sama.", "Hanya kolom 0 yang diubah.", "Sah."]),
  O("baca", 2, 'def f(x, simpan=[]):\n    simpan.append(x)\n    return len(simpan)\n\nprint(f(1), f(2), f(3))', ["1 2 3", "1 1 1", "3 3 3", "Error"],
    "Nilai bawaan list dibuat sekali dan dipakai bersama semua panggilan.",
    ["List bawaan tidak dibuat ulang.", "Dihitung saat masing-masing dipanggil.", "Sah."]),
  O("baca", 1, 'print("abcdef"[1:4], "abcdef"[::2], "abcdef"[-2:])', ["bcd ace ef", "abc ace ef", "bcd bdf ef", "bcd ace f"],
    "[1:4] indeks 1–3; [::2] lompat dua mulai 0; [-2:] dua terakhir.",
    ["Mulai indeks 1.", "Mulai indeks 0: a, c, e.", "Dua huruf terakhir."]),
  O("baca", 2, 'x = 10\ndef f():\n    print(x)\n    x = 5\n\ntry:\n    f()\nexcept UnboundLocalError:\n    print("error lokal")', ["error lokal", "10", "5", "10\n5"],
    "Karena ada x = 5 di dalam f, Python menganggap x lokal di SELURUH fungsi. print(x) dijalankan sebelum x lokal diisi → UnboundLocalError.",
    ["x dianggap lokal di seluruh fungsi.", "print dijalankan sebelum x = 5.", "Error terjadi di print."]),
  O("baca", 2, 'print(0.1 + 0.2 == 0.3, round(0.1 + 0.2, 2) == 0.3)', ["False True", "True True", "False False", "True False"],
    "Float biner tidak persis. Bandingkan dengan pembulatan, math.isclose, atau pakai Decimal untuk uang.",
    ["Setelah dibulatkan sama.", "Tanpa pembulatan berbeda.", "Urutannya terbalik."]),
  O("baca", 2, 'print(1 == 1.0, 1 is True, bool([]), bool("0"))', ["True False False True", "True True False True", "True False True False", "False False False True"],
    "1 == 1.0 sama nilainya; is membandingkan identitas objek (1 bukan objek True); list kosong falsy; teks \"0\" tidak kosong jadi truthy.",
    ["1 dan True objek berbeda.", "List kosong falsy.", "1 == 1.0 benar."]),
  O("baca", 2, 'd = {"a": 1}\nfor k in list(d):\n    d[k + "2"] = d[k] * 2\nprint(d)', ["{'a': 1, 'a2': 2}", "Error: dict berubah saat diulang", "{'a2': 2}", "{'a': 2}"],
    "list(d) membuat salinan kunci dulu, jadi aman menambah kunci saat mengulang. Tanpa list(...) muncul RuntimeError.",
    ["Diulang dari salinan, jadi aman.", "Kunci lama tetap ada.", "Nilai a tidak berubah."]),
  O("baca", 3, 'fs = [lambda: i for i in range(3)]\nprint([f() for f in fs])', ["[2, 2, 2]", "[0, 1, 2]", "[0, 0, 0]", "Error"],
    "Lambda mengingat VARIABEL i, bukan nilainya saat dibuat. Saat dipanggil, i sudah 2. Perbaikan: lambda i=i: i.",
    ["Nilai diambil saat dipanggil.", "i terakhir adalah 2.", "Sah."]),
  M("baca", 2, "Beda is dan ==:", ["== membandingkan nilai; is membandingkan apakah objek yang sama persis (dipakai untuk None)", "Sama saja", "is untuk angka", "== untuk None"], "Tulis if x is None, bukan if x == None."),
  I("baca", 1, "Cara benar mengecek None: if x ____ None:", ["is"], "is None."),

  // ---- algo (+12) ----
  O("algo", 1, 'def dua_jumlah(data, target):\n    lihat = {}\n    for i, x in enumerate(data):\n        if target - x in lihat:\n            return [lihat[target - x], i]\n        lihat[x] = i\n    return []\n\nprint(dua_jumlah([2, 7, 11, 15], 9))', ["[0, 1]", "[1, 0]", "[2, 7]", "[]"],
    "Two-sum O(n): simpan angka yang sudah dilihat beserta indeksnya, lalu cari pasangannya.",
    ["Indeks kecil dulu.", "Yang dikembalikan indeks, bukan nilai.", "Ada pasangan 2 + 7."]),
  O("algo", 1, 'def palindrom(s):\n    s = "".join(c.lower() for c in s if c.isalnum())\n    return s == s[::-1]\n\nprint(palindrom("Kasur ini rusak"), palindrom("kopi"))', ["True False", "False False", "True True", "Error"],
    "Rapikan dulu (huruf kecil, buang spasi/tanda), lalu bandingkan dengan kebalikannya.",
    ["Setelah dirapikan menjadi kasurinirusak.", "kopi bukan palindrom.", "Sah."]),
  O("algo", 2, 'def anagram(a, b):\n    return sorted(a.replace(" ", "")) == sorted(b.replace(" ", ""))\n\nprint(anagram("listen", "silent"), anagram("abc", "abd"))', ["True False", "False False", "True True", "Error"],
    "Anagram = huruf sama, urutan beda. Mengurutkan huruf O(n log n); pakai Counter untuk O(n).",
    ["d tidak ada di abc.", "Hurufnya sama setelah diurutkan.", "Sah."]),
  O("algo", 2, 'def cari(data, x):\n    kiri, kanan = 0, len(data) - 1\n    while kiri <= kanan:\n        tengah = (kiri + kanan) // 2\n        if data[tengah] == x:\n            return tengah\n        if data[tengah] < x:\n            kiri = tengah + 1\n        else:\n            kanan = tengah - 1\n    return -1\n\nprint(cari([1, 3, 5, 7, 9, 11], 9), cari([1, 3], 4))', ["4 -1", "5 -1", "4 None", "3 -1"],
    "Binary search: bandingkan dengan tengah, buang separuh yang tidak mungkin. Data wajib terurut.",
    ["Indeks mulai 0: 9 di indeks 4.", "Tidak ketemu → -1.", "Hitung indeks lagi."]),
  O("algo", 2, 'def kelompok(kata):\n    g = {}\n    for k in kata:\n        g.setdefault("".join(sorted(k)), []).append(k)\n    return sorted(len(v) for v in g.values())\n\nprint(kelompok(["eat", "tea", "tan", "ate", "nat", "bat"]))', ["[1, 2, 3]", "[3, 2, 1]", "[6]", "[2, 2, 2]"],
    "Group anagram: kunci = huruf yang diurutkan. eat/tea/ate (3), tan/nat (2), bat (1).",
    ["Diurutkan naik.", "Ada tiga kelompok.", "Ukurannya berbeda."]),
  O("algo", 2, 'def maks_sub(data):\n    terbaik = sekarang = data[0]\n    for x in data[1:]:\n        sekarang = max(x, sekarang + x)\n        terbaik = max(terbaik, sekarang)\n    return terbaik\n\nprint(maks_sub([-2, 1, -3, 4, -1, 2, 1, -5, 4]))', ["6", "4", "7", "10"],
    "Kadane: jumlah sub-list berurutan terbesar adalah [4, -1, 2, 1] = 6.",
    ["4 saja lebih kecil dari 6.", "Hitung ulang sub-list terbaik.", "Itu bukan sub-list berurutan."]),
  O("algo", 2, 'def kompres(s):\n    hasil, i = [], 0\n    while i < len(s):\n        j = i\n        while j < len(s) and s[j] == s[i]:\n            j += 1\n        hasil.append(s[i] + str(j - i))\n        i = j\n    return "".join(hasil)\n\nprint(kompres("aaabccdd"))', ["a3b1c2d2", "a3bc2d2", "abcd", "3a1b2c2d"],
    "Run-length encoding: hitung huruf yang berturut-turut sama.",
    ["b ditulis dengan 1.", "Huruf dulu baru jumlah.", "Huruf diikuti angka."]),
  O("algo", 2, 'def valid(s):\n    pasangan = {")": "(", "]": "[", "}": "{"}\n    tumpuk = []\n    for c in s:\n        if c in "([{":\n            tumpuk.append(c)\n        elif not tumpuk or tumpuk.pop() != pasangan[c]:\n            return False\n    return not tumpuk\n\nprint(valid("{[()]}"), valid("(]"), valid("(("))', ["True False False", "True True False", "True False True", "False False False"],
    "Stack: kurung buka didorong, kurung tutup harus cocok dengan buka terakhir. Sisa kurung di akhir = tidak valid.",
    ["( tidak cocok dengan ].", "Sisa (( belum ditutup.", "{[()]} valid."]),
  O("algo", 3, 'from collections import Counter\nprint(Counter("mississippi").most_common(1)[0])', ["('i', 4)", "('s', 4)", "('p', 2)", "('m', 1)"],
    "Saat jumlah seri (i dan s sama-sama 4), most_common mengikuti urutan kemunculan pertama: i muncul lebih dulu.",
    ["i muncul sebelum s.", "p hanya 2.", "m hanya 1."]),
  O("algo", 3, 'def fib(n, memo={}):\n    if n < 2:\n        return n\n    if n not in memo:\n        memo[n] = fib(n - 1) + fib(n - 2)\n    return memo[n]\n\nprint(fib(30))', ["832040", "514229", "1346269", "Error: terlalu lama"],
    "Memoization menyimpan hasil yang sudah dihitung sehingga rekursi O(2ⁿ) menjadi O(n). (Di sini memo bawaan sengaja dipakai sebagai cache.)",
    ["Itu fib(29).", "Itu fib(31).", "Dengan memo, cepat."]),
  M("algo", 2, "Pola dua penunjuk (two pointer) paling cocok untuk…", ["Data terurut: cari pasangan berjumlah target dari kiri dan kanan bergerak mendekat", "Data acak tanpa diurutkan", "Menghitung huruf", "Rekursi"], "Kiri naik bila jumlah kurang, kanan turun bila jumlah lebih: O(n), memori O(1)."),
  I("algo", 2, "Struktur data untuk pola kurung valid (masuk terakhir keluar pertama): ____", ["stack"], "stack = tumpukan (LIFO)."),

  // ---- otomasi (+12) ----
  O("otomasi", 1, 'import csv, io\nteks = "nama,qty\\nKopi,2\\nTeh,5\\n"\ntotal = sum(int(b["qty"]) for b in csv.DictReader(io.StringIO(teks)))\nprint(total)', ["7", "25", "2", "Error"],
    "DictReader membaca setiap baris sebagai dict berdasarkan judul kolom. Nilai CSV selalu teks, jadi diubah dengan int().",
    ["Angka dijumlah setelah int().", "Itu hanya Kopi.", "Sah."]),
  O("otomasi", 1, 'import json\ndata = json.loads(\'{"pesanan": [{"id": 1, "total": 50000}, {"id": 2, "total": 75000}]}\')\nprint(max(p["total"] for p in data["pesanan"]))', ["75000", "50000", "125000", "2"],
    "JSON dari API diubah jadi dict/list, lalu diolah seperti data Python biasa.",
    ["Yang dicari maksimum.", "Itu jumlah.", "Itu banyak pesanan."]),
  O("otomasi", 2, 'import re\nteks = "Invoice INV/2026/0012 total Rp 1.250.000, INV/2026/0013 total Rp 300.000"\nprint(re.findall(r"INV/\\d{4}/\\d{4}", teks))', ["['INV/2026/0012', 'INV/2026/0013']", "['INV/2026/0012']", "['0012', '0013']", "[]"],
    "Regex mengambil pola nomor invoice dari teks email/PDF, tugas khas RPA.",
    ["findall mengambil semua.", "Seluruh pola diambil, bukan hanya angka.", "Ada yang cocok."]),
  O("otomasi", 2, 'import re\nangka = [int(x.replace(".", "")) for x in re.findall(r"Rp ([\\d.]+)", "Rp 1.250.000 dan Rp 300.000")]\nprint(sum(angka))', ["1550000", "1250300", "['1.250.000', '300.000']", "Error"],
    "Kelompok (…) di regex mengambil bagian angka saja; titik ribuan dibuang sebelum int().",
    ["Titik dibuang dulu, baru dijumlah.", "Sudah diubah jadi int.", "Sah."]),
  O("otomasi", 2, 'from datetime import date, timedelta\njatuh_tempo = date(2026, 11, 27) + timedelta(days=30)\nprint(jatuh_tempo.isoformat(), jatuh_tempo.weekday())', ["2026-12-27 6", "2026-12-27 0", "2026-12-28 6", "2026-12-26 5"],
    "timedelta menambah hari; weekday() memberi 0 = Senin … 6 = Minggu. 27 Desember 2026 hari Minggu.",
    ["weekday Minggu = 6.", "30 hari dari 27 November.", "Hitung ulang."]),
  O("otomasi", 2, 'from datetime import datetime\nd = datetime.strptime("27/11/2026 14:30", "%d/%m/%Y %H:%M")\nprint(d.strftime("%Y-%m-%d"), d.hour)', ["2026-11-27 14", "2026-27-11 14", "27-11-2026 2", "Error"],
    "strptime membaca teks dengan pola tertentu; strftime menulis ulang ke format standar ISO yang dipakai Odoo.",
    ["Format keluaran tahun-bulan-tanggal.", "Format keluaran mengikuti pola.", "Pola cocok."]),
  O("otomasi", 2, 'baris = ["  Budi;Jakarta ", "", "Sari;Bandung", "Rina;"]\nbersih = []\nfor b in baris:\n    b = b.strip()\n    if not b:\n        continue\n    nama, kota = b.split(";")\n    bersih.append((nama, kota or "TIDAK ADA"))\nprint(bersih)', ["[('Budi', 'Jakarta'), ('Sari', 'Bandung'), ('Rina', 'TIDAK ADA')]", "[('Budi', 'Jakarta'), ('Sari', 'Bandung')]", "Error", "[('  Budi', 'Jakarta ')]"],
    "Pembersihan data: buang spasi, lewati baris kosong, isi nilai kosong dengan cadangan.",
    ["Rina tetap masuk dengan cadangan.", "Baris kosong dilewati, bukan error.", "strip membuang spasi."]),
  O("otomasi", 3, 'import time\ndef ulangi(fungsi, coba=3):\n    for i in range(1, coba + 1):\n        try:\n            return fungsi(i)\n        except ConnectionError:\n            print("gagal ke", i)\n    return "menyerah"\n\ndef kirim(i):\n    if i < 3:\n        raise ConnectionError\n    return "terkirim"\n\nprint(ulangi(kirim))', ["gagal ke 1\ngagal ke 2\nterkirim", "terkirim", "gagal ke 1\ngagal ke 2\ngagal ke 3\nmenyerah", "Error"],
    "Pola retry: koneksi ke server/API bisa gagal sesaat, jadi coba beberapa kali sebelum menyerah. (Di dunia nyata ditambah jeda time.sleep.)",
    ["Dua percobaan pertama gagal dulu.", "Percobaan ketiga berhasil.", "Error ditangkap."]),
  M("otomasi", 2, "Membaca 5 kontak dari Odoo lewat XML-RPC:", ["models.execute_kw(db, uid, pw, 'res.partner', 'search_read', [[['is_company', '=', True]]], {'fields': ['name'], 'limit': 5})", "requests.get('odoo/partner')", "odoo.read('partner', 5)", "SELECT * FROM res.partner LIMIT 5 lewat XML-RPC"], "Login dulu lewat /xmlrpc/2/common (authenticate) untuk mendapat uid, lalu panggil /xmlrpc/2/object."),
  M("otomasi", 2, "Kata sandi Odoo/API untuk skrip otomasi sebaiknya disimpan di…", ["Variabel lingkungan atau file konfigurasi yang tidak di-commit (.env di .gitignore)", "Langsung di kode", "README", "Nama file"], "Kode sering dibagikan; rahasia di kode mudah bocor."),
  M("otomasi", 2, "Skrip harian memproses folder berisi 1.000 file CSV. Kebiasaan aman:", ["Catat (logging) file yang berhasil dan gagal, dan jangan berhenti total karena satu file rusak", "Hapus file yang gagal", "Berhenti di error pertama tanpa catatan", "Tidak perlu catatan"], "Gabungkan try/except per file dengan log ringkasan di akhir."),
  I("otomasi", 1, "Modul Python bawaan untuk XML-RPC: xmlrpc.____", ["client"], "import xmlrpc.client."),

  // ---- model (+12) ----
  M("model", 1, "Isi minimum file __init__.py di folder utama modul Odoo:", ["from . import models", "import odoo", "class Model:", "Kosong selalu"], "Lalu models/__init__.py berisi from . import nama_file_model."),
  M("model", 1, "Field 'depends' di __manifest__.py berisi…", ["Daftar modul yang harus terpasang dulu, misalnya ['base', 'sale']", "Daftar field", "Daftar pengguna", "Versi Python"], "Tanpa depends yang tepat, model yang di-_inherit belum ada saat modulmu dimuat."),
  M("model", 1, "Field untuk teks satu baris (nama, kode):", ["fields.Char()", "fields.Text()", "fields.Html()", "fields.Selection()"], "Text untuk banyak baris; Html untuk teks berformat."),
  M("model", 2, "Field uang yang benar di Odoo:", ["fields.Monetary(currency_field='currency_id') bersama field currency_id", "fields.Float() saja selalu", "fields.Integer()", "fields.Char()"], "Monetary menampilkan simbol dan pembulatan sesuai mata uang."),
  M("model", 2, "default=lambda self: self.env.user pada Many2one user_id berarti…", ["Saat record baru dibuat, user_id otomatis diisi pengguna yang sedang login", "Selalu admin", "Tidak bisa diubah", "Error"], "lambda dipakai supaya nilai dihitung saat record dibuat, bukan saat modul dimuat."),
  M("model", 2, "fields.Char(related='partner_id.city') berarti…", ["Field menampilkan kota dari partner yang dipilih, mengikuti perubahan", "Menyalin kota sekali", "Membuat partner baru", "Error"], "related adalah computed field sederhana; tambah store=True bila perlu dicari/dikelompokkan."),
  M("model", 2, "copy=False pada field nomor_dokumen berarti…", ["Saat record diduplikasi (Duplicate), field itu tidak ikut disalin", "Field tidak bisa diubah", "Field disembunyikan", "Field wajib unik"], "Cocok untuk nomor urut dan status."),
  M("model", 2, "Agar setiap kode kursus unik di database:", ["_sql_constraints = [('kode_unik', 'unique(kode)', 'Kode sudah dipakai')]", "required=True", "copy=False", "index=True saja"], "Constraint SQL dicek oleh PostgreSQL sendiri, jadi kuat walau data dimasukkan lewat impor."),
  M("model", 2, "_rec_name = 'kode' di model berarti…", ["Kolom kode dipakai sebagai nama tampilan record (di Many2one dan judul)", "Mengganti nama tabel", "Mengganti _name", "Field wajib"], "Bawaannya Odoo memakai field name."),
  M("model", 2, "Agar perubahan field tercatat di chatter (riwayat), model mewarisi…", ["_inherit = ['mail.thread'] lalu field diberi tracking=True", "_inherit = 'res.users'", "tracking otomatis di semua model", "_log = True"], "Modul juga harus depends pada 'mail'."),
  M("model", 3, "ondelete='restrict' pada fields.Many2one('akademi.kursus') berarti…", ["Kursus tidak bisa dihapus selama masih dipakai record ini", "Record ikut terhapus", "Field dikosongkan saat kursus dihapus", "Tidak ada efek"], "'cascade' ikut menghapus; 'set null' (bawaan) mengosongkan."),
  I("model", 1, "Atribut nama teknis model Odoo: ____ = 'akademi.kursus'", ["_name"], "_name menentukan model dan nama tabel."),

  // ---- compute (+12) ----
  M("compute", 1, "Isi method compute yang benar:", ["for rec in self: rec.total = rec.qty * rec.harga", "return self.qty * self.harga", "self.total = …tanpa loop untuk banyak record", "print(total)"], "Compute mengisi field untuk setiap record di self; tidak me-return.", ["return tidak dipakai di compute.", "self bisa berisi banyak record.", "print tidak mengisi field."]),
  M("compute", 2, "Field compute tanpa store=True…", ["Dihitung saat dibaca dan tidak bisa dipakai di group by atau domain pencarian biasa", "Disimpan di database", "Tidak pernah dihitung", "Wajib diisi pengguna"], "Tambah store=True agar tersimpan; Odoo menghitung ulang saat field di @api.depends berubah."),
  M("compute", 2, "@api.depends('order_line.price_subtotal') artinya…", ["Hitung ulang bila subtotal salah satu baris pesanan berubah (bisa menembus relasi dengan titik)", "Hanya bila order_line dihapus", "Tidak sah", "Hitung sekali saja"], "Dependensi bertitik umum dipakai untuk total dokumen."),
  M("compute", 2, "Agar field compute bisa diubah manual pengguna:", ["Tambah inverse='_inverse_nama' (method yang menyimpan balik)", "readonly=True", "store=False", "Tidak mungkin"], "Contoh: harga akhir dihitung dari diskon, tapi bila diubah manual diskonnya dihitung balik."),
  M("compute", 2, "@api.constrains('tanggal_mulai', 'tanggal_selesai') dijalankan…", ["Saat record dibuat atau field itu diubah lewat create/write", "Setiap kali form dibuka", "Hanya saat dihapus", "Saat cron"], "Gunakan raise ValidationError(...) untuk menolak."),
  M("compute", 2, "Beda ValidationError dan UserError:", ["ValidationError untuk data tidak sah (constraint); UserError untuk aksi yang tidak boleh dilakukan saat ini", "Sama saja", "UserError hanya untuk admin", "ValidationError untuk login"], "Keduanya dari odoo.exceptions dan tampil sebagai pesan ke pengguna."),
  M("compute", 2, "@api.onchange('produk_id') cocok untuk…", ["Mengisi otomatis harga di form saat produk dipilih (sebelum disimpan)", "Menghitung total di laporan", "Validasi wajib di database", "Cron harian"], "onchange hanya bekerja di form antarmuka, tidak saat create/write dari kode."),
  M("compute", 3, "Kenapa logika penting sebaiknya di compute/constraint, bukan hanya onchange?", ["onchange tidak berjalan saat data dibuat lewat impor, API, atau kode", "onchange lebih lambat", "onchange dihapus di Odoo 17", "Tidak ada bedanya"], "Aturan bisnis harus berlaku dari semua jalan masuk data."),
  M("compute", 2, "Field compute 'umur' dari 'tanggal_lahir' dengan @api.depends('tanggal_lahir') tidak terhitung ulang setiap hari karena…", ["Dependensi hanya bereaksi pada perubahan field, bukan pergantian tanggal; pakai tanpa store atau cron", "Bug Odoo", "Harus store=True", "Harus onchange"], "Nilai yang bergantung pada 'hari ini' sebaiknya tidak disimpan, atau diperbarui cron."),
  M("compute", 2, "Menghitung total semua baris di compute:", ["rec.total = sum(rec.line_ids.mapped('subtotal'))", "rec.total = rec.line_ids.subtotal", "rec.total = len(rec.line_ids)", "rec.total = rec.line_ids.sum()"], "mapped mengambil nilai field dari setiap record dalam recordset."),
  M("compute", 3, "Constraint ini salah. Kenapa?", ["Tidak memakai loop for rec in self, padahal self bisa berisi banyak record", "raise salah", "Nama method salah", "Tidak ada yang salah"], "self.kuota pada recordset banyak record menimbulkan error 'Expected singleton'.", null, "@api.constrains('kuota')\ndef _cek(self):\n    if self.kuota < 1:\n        raise ValidationError('Kuota minimal 1')"),
  I("compute", 2, "Atribut field agar hasil compute disimpan di database: ____=True", ["store"], "store=True."),

  // ---- orm (+12) ----
  M("orm", 1, "search vs browse:", ["search mencari dengan domain; browse mengambil record dari id yang sudah diketahui", "Sama saja", "browse mencari teks", "search dari id"], "browse tidak mengecek keberadaan; pakai .exists() bila ragu."),
  M("orm", 2, "search_read(domain, ['name', 'email'], limit=10) mengembalikan…", ["List of dict berisi field yang diminta, cocok untuk API/laporan", "Recordset", "Satu angka", "Teks"], "Lebih hemat bila hanya butuh beberapa field."),
  M("orm", 2, "Domain [('state', 'in', ['sale', 'done']), ('amount_total', '>', 1000000)] berarti…", ["state sale ATAU done, DAN total di atas 1 juta", "state sale DAN done", "Total kurang 1 juta", "Salah sintaks"], "Beberapa syarat dalam list digabung AND secara bawaan."),
  M("orm", 2, "Domain dengan notasi prefiks ['|', ('a', '=', 1), '&', ('b', '=', 2), ('c', '=', 3)] berarti…", ["a = 1 ATAU (b = 2 DAN c = 3)", "(a = 1 ATAU b = 2) DAN c = 3", "Semua AND", "Error"], "Operator berlaku untuk dua syarat SESUDAHNYA."),
  M("orm", 2, "Menambahkan satu baris baru ke field One2many saat write:", ["{'line_ids': [Command.create({'produk_id': 1, 'qty': 2})]}", "{'line_ids': {'produk_id': 1}}", "line_ids.append(...)", "{'line_ids': 1}"], "Command.create sama dengan tuple lama (0, 0, vals)."),
  M("orm", 2, "Mengganti seluruh tag Many2many dengan daftar id [3, 5]:", ["{'tag_ids': [Command.set([3, 5])]}", "{'tag_ids': [3, 5]}", "{'tag_ids': Command.link(3, 5)}", "{'tag_ids': (6, [3, 5])}"], "Command.set = (6, 0, ids). Command.link(id) menambah satu tanpa menghapus yang lain."),
  M("orm", 2, "orders.filtered(lambda o: o.amount_total > 0).sorted('date_order', reverse=True)[:5] menghasilkan…", ["5 order terbaru dengan total positif", "5 order pertama", "Error karena slicing", "Jumlah order"], "Recordset bisa disaring, diurutkan, dan diiris seperti list."),
  M("orm", 2, "self.env.context.get('default_jenis') dan with_context(...) dipakai untuk…", ["Mengirim informasi tambahan (misalnya nilai bawaan, bahasa) ke method/form berikutnya", "Mengubah database", "Login ulang", "Mengganti model"], "Context bersifat hanya-baca; with_context membuat env baru."),
  M("orm", 2, "read_group / _read_group dipakai untuk…", ["Menghitung agregat (sum, count) per kelompok langsung di database, seperti GROUP BY", "Membaca satu record", "Menghapus kelompok", "Membuat grup pengguna"], "Jauh lebih cepat daripada mengambil semua record lalu dijumlah di Python."),
  M("orm", 3, "Kode ini lambat untuk 10.000 partner. Penyebab utama:", ["Memanggil search di dalam loop (N+1 query); ambil semua order sekali lalu kelompokkan", "len lambat", "Domain salah", "Tidak ada masalah"], "Pola N+1 query adalah masalah kinerja paling umum di Odoo.", null, "for p in partners:\n    p.jumlah_order = len(self.env['sale.order'].search([('partner_id', '=', p.id)]))"),
  M("orm", 2, "records.unlink() pada record yang dipakai Many2one ondelete='restrict' akan…", ["Ditolak dengan error integritas database", "Berhasil dan menghapus yang terkait", "Mengosongkan field", "Diam saja"], "Tampilkan pesan yang ramah dengan @api.ondelete atau UserError sebelum terjadi."),
  I("orm", 2, "Method recordset untuk mengambil nilai satu field dari semua record: records.____('name')", ["mapped"], "mapped('name') memberi list nama."),

  // ---- inherit (+12) ----
  M("inherit", 1, "Menambah field ke model bawaan sale.order (classic inheritance):", ["class SaleOrder(models.Model): _inherit = 'sale.order'", "_name = 'sale.order' baru", "Mengedit file Odoo asli", "_inherits = {'sale.order': 'id'}"], "Jangan pernah mengubah kode inti Odoo; tambahkan lewat modul sendiri."),
  M("inherit", 2, "_name = 'akademi.kursus.arsip' dengan _inherit = 'akademi.kursus' menghasilkan…", ["Model BARU yang menyalin field/method kursus (prototype inheritance)", "Mengubah model kursus", "Error", "Delegation"], "Tabel baru terpisah dari tabel asli."),
  M("inherit", 2, "_inherits = {'res.partner': 'partner_id'} (delegation) berarti…", ["Model baru punya record partner sendiri dan field partner bisa dibaca langsung", "Menyalin tabel partner", "Mengubah partner", "Sama dengan _inherit"], "Contoh di Odoo: res.users mewarisi res.partner dengan cara ini."),
  M("inherit", 2, "Override create yang benar di Odoo 17:", ["@api.model_create_multi\ndef create(self, vals_list): … return super().create(vals_list)", "def create(self, vals): return True", "def create(): pass", "@api.onchange def create"], "Odoo 17 membuat banyak record sekaligus, jadi parameternya list of dict."),
  M("inherit", 2, "Override write yang aman:", ["def write(self, vals): res = super().write(vals); … ; return res", "def write(self, vals): …tanpa super", "def write(self): return False", "def write(self, vals): return vals"], "Tanpa super(), perubahan tidak pernah tersimpan."),
  M("inherit", 2, "Mencegah penghapusan record yang sudah dikonfirmasi (Odoo 17):", ["@api.ondelete(at_uninstall=False) pada method yang raise UserError bila state = 'confirm'", "Override unlink tanpa super", "required=True", "copy=False"], "@api.ondelete tidak dijalankan saat modul di-uninstall, jadi uninstall tetap bisa membersihkan data."),
  M("inherit", 2, "Wizard (jendela isian sementara) dibuat dengan model…", ["models.TransientModel", "models.Model", "models.AbstractModel", "models.Wizard"], "Data TransientModel otomatis dibersihkan berkala."),
  M("inherit", 2, "Membaca record yang sedang dipilih dari dalam wizard:", ["self.env.context.get('active_ids') lalu browse", "self.parent", "request.ids", "self.env.selected"], "Action yang membuka wizard mengirim active_model dan active_ids lewat context."),
  M("inherit", 2, "Tombol di wizard yang menjalankan proses lalu menutup jendela mengembalikan…", ["{'type': 'ir.actions.act_window_close'}", "True selalu", "None wajib", "'close'"], "Bisa juga mengembalikan action lain untuk membuka hasilnya."),
  M("inherit", 3, "AbstractModel dipakai untuk…", ["Kumpulan field/method bersama (mixin) yang tidak punya tabel sendiri, misalnya mail.thread", "Model sementara", "Laporan PDF saja", "Model yang tidak bisa diwarisi"], "Model lain mewarisinya lewat _inherit."),
  M("inherit", 2, "Memanggil versi induk sebuah method di Python 3/Odoo:", ["super().nama_method(...)", "parent.nama_method()", "self.super()", "Odoo.call_super()"], "super() tanpa argumen di Python 3."),
  I("inherit", 1, "Atribut untuk memperluas model yang sudah ada: ____ = 'sale.order'", ["_inherit"], "_inherit."),

  // ---- view (+11) ----
  M("view", 1, "Rantai yang menghubungkan menu dengan tampilan:", ["menuitem → ir.actions.act_window → view (tree/form)", "view → menu → model", "model → menu saja", "action → model tanpa view"], "Menu memanggil action; action menentukan model dan jenis view yang dipakai."),
  M("view", 1, "Root tag tampilan daftar di Odoo 17:", ["<tree>", "<list> (wajib di Odoo 17)", "<table>", "<grid>"], "<tree> berganti nama menjadi <list> mulai Odoo 18."),
  M("view", 2, "Menyembunyikan field diskon bila state bukan draft (Odoo 17):", ["<field name=\"diskon\" invisible=\"state != 'draft'\"/>", "attrs=\"{'invisible': [('state','!=','draft')]}\"", "states=\"draft\"", "hidden=\"state\""], "attrs dan states sudah tidak dipakai di Odoo 17."),
  M("view", 2, "Menambah field ke form bawaan dengan view inheritance:", ["<record> view baru dengan inherit_id ref ke view asli, lalu <xpath expr=\"//field[@name='partner_id']\" position=\"after\">", "Menyalin seluruh XML asli", "Mengedit file XML Odoo", "Menulis CSS"], "position bisa before, after, inside, replace, attributes."),
  M("view", 2, "Bilah status di atas form (Draft → Confirmed → Done):", ["<header><field name=\"state\" widget=\"statusbar\"/></header>", "<footer>state</footer>", "<progress>", "<field name=\"state\" widget=\"badge\"/> di sheet"], "Tombol aksi biasanya juga ditaruh di <header>."),
  M("view", 2, "Filter cepat 'Pesanan saya' di search view:", ["<filter name=\"saya\" string=\"Pesanan saya\" domain=\"[('user_id', '=', uid)]\"/>", "<search domain=\"user\"/>", "<field filter=\"me\"/>", "Tidak bisa"], "uid tersedia di domain view."),
  M("view", 2, "Mengelompokkan daftar berdasarkan pelanggan secara bawaan saat menu dibuka:", ["context=\"{'search_default_group_partner': 1}\" pada action, dengan filter group_by bernama group_partner", "group_by di model", "SQL GROUP BY", "Tidak bisa"], "search_default_<nama filter> menyalakan filter itu saat awal."),
  M("view", 2, "decoration-danger=\"amount_total > 1000000\" pada <tree> membuat…", ["Baris dengan total di atas 1 juta berwarna merah", "Baris disembunyikan", "Total dibulatkan", "Error"], "Tersedia juga decoration-success, -warning, -info, -muted."),
  M("view", 2, "Laporan PDF Odoo ditulis dengan…", ["Template QWeb (XML) + ir.actions.report", "Microsoft Word", "CSS saja", "Python print"], "QWeb memakai t-foreach, t-esc/t-out, t-if."),
  M("view", 3, "Di QWeb, <t t-foreach=\"docs\" t-as=\"o\"> lalu <span t-field=\"o.amount_total\"/> menampilkan…", ["Total setiap dokumen dengan format sesuai tipe field (mata uang)", "Teks 'o.amount_total'", "Error", "Total semua dokumen"], "t-field memformat otomatis; t-out menampilkan nilai apa adanya."),
  I("view", 1, "Elemen XPath untuk menyisipkan setelah field tertentu: position=\"____\"", ["after"], "position=\"after\"."),

  // ---- security (+12) ----
  M("security", 1, "Dua lapis keamanan dasar Odoo:", ["ACL (ir.model.access: boleh baca/tulis/buat/hapus model) dan record rule (record mana yang boleh)", "Kata sandi dan captcha", "CSS dan JS", "Hanya grup admin"], "ACL per model, record rule per baris data."),
  M("security", 2, "Baris ir.model.access.csv ini memberi grup pengguna hak…", ["Baca, tulis, buat, tapi tidak hapus", "Semua hak", "Hanya baca", "Tidak ada"], "Urutan kolom perm_read, perm_write, perm_create, perm_unlink.", null, "access_kursus_user,kursus user,model_akademi_kursus,base.group_user,1,1,1,0"),
  M("security", 2, "Record rule dengan domain_force [('user_id', '=', user.id)] untuk grup pengguna membuat…", ["Pengguna hanya melihat record miliknya sendiri", "Semua orang melihat semua", "Admin tidak bisa melihat", "Record terhapus"], "Rule global (tanpa grup) berlaku untuk semua dan sulit ditimpa."),
  M("security", 2, "Field gaji hanya terlihat oleh grup HR Manager:", ["groups=\"hr.group_hr_manager\" pada field (di model atau view)", "invisible=\"1\"", "password=True", "readonly"], "groups di definisi field juga membatasi akses lewat API."),
  M("security", 2, "Cron Odoo (ir.cron) menjalankan…", ["Method model terjadwal, misalnya model._kirim_pengingat() setiap hari", "Skrip shell", "Halaman web", "Database backup otomatis wajib"], "Atur interval_number dan interval_type (minutes, hours, days, …)."),
  M("security", 2, "Tes otomatis Odoo biasanya mewarisi…", ["TransactionCase (setiap tes di-rollback sehingga data bersih)", "unittest saja tanpa env", "HttpCase untuk semua", "Model"], "Jalankan dengan --test-enable -u nama_modul."),
  M("security", 2, "Dekorator @tagged('post_install', '-at_install') pada kelas tes berarti…", ["Tes dijalankan setelah semua modul terpasang, bukan saat modul diinstal", "Tes dimatikan", "Tes untuk admin", "Error"], "Berguna bila tes butuh data dari modul lain."),
  M("security", 1, "Mengaktifkan mode developer dari browser:", ["Tambahkan ?debug=1 di URL", "Tekan F12 saja", "Login sebagai admin otomatis", "Restart server"], "Mode debug menampilkan menu teknis, nama field, dan tampilan view."),
  M("security", 2, "Setelah mengubah file XML view, agar perubahan masuk tanpa restart setiap kali saat pengembangan:", ["Jalankan server dengan --dev=xml (atau --dev=all)", "Hapus database", "Tidak bisa", "Ubah langsung di tabel"], "Untuk perubahan model Python tetap butuh restart dan -u modul."),
  M("security", 2, "Pesan log 'Expected singleton: sale.order(1, 2)' berarti…", ["Kode mengakses field langsung pada recordset berisi lebih dari satu record", "Database penuh", "Hak akses kurang", "View salah"], "Gunakan loop for rec in self atau ensure_one()."),
  M("security", 3, "Memakai sudo() di controller publik untuk membaca data pelanggan lain:", ["Berbahaya: melewati ACL dan rule; batasi domain dan field secara ketat bila memang perlu", "Selalu aman", "Wajib di semua controller", "Membuat lebih lambat saja"], "Celah data bocor paling umum di modul kustom."),
  I("security", 1, "Nama file hak akses model di folder security: ir.model.____.csv", ["access"], "ir.model.access.csv."),
  );

  dalami("strategi", `
<h4>Lembar kerja 5 menit pertama</h4>
<ol><li><b>Ulangi soal dengan kalimatmu sendiri</b> (tulis sebagai komentar).</li><li><b>Tulis 3–5 contoh</b>: normal, kosong, satu item, negatif/nol, duplikat.</li><li><b>Rencanakan</b> dalam 3–4 langkah bahasa biasa sebelum mengetik.</li><li><b>Sebutkan kompleksitas</b> rencanamu (misalnya "O(n) dengan dict").</li><li>Baru tulis kode, lalu uji dengan contoh tadi.</li></ol>
<h4>Big-O dengan angka nyata (n = 1.000.000)</h4>
<table class="mini-pivot"><tr><th>Kompleksitas</th><th>Langkah kira-kira</th><th>Contoh</th></tr>
<tr><td>O(1)</td><td>1</td><td>ambil dict[k]</td></tr><tr><td>O(log n)</td><td>20</td><td>binary search</td></tr>
<tr><td>O(n)</td><td>1 juta</td><td>satu loop</td></tr><tr><td>O(n log n)</td><td>20 juta</td><td>sorted()</td></tr>
<tr><td>O(n²)</td><td>1 triliun (terlalu lama)</td><td>loop bersarang</td></tr></table>
<h4>Trik percepatan yang paling sering</h4>
<ul><li><code>x in list</code> di dalam loop → ubah list jadi <code>set</code> sekali.</li><li>Mencari pasangan → simpan yang sudah dilihat di dict.</li><li>Menghitung kemunculan → <code>Counter</code> atau dict.</li><li>Data terurut → binary search atau dua penunjuk.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> kerjakan satu soal Lab KodeQuiz dengan mengikuti lembar kerja di atas, lalu tulis kompleksitas solusimu sebagai komentar di baris pertama.</div>`);

  dalami("baca", `
<h4>Lima jebakan yang paling sering keluar</h4>
<table class="mini-pivot"><tr><th>Jebakan</th><th>Contoh</th><th>Ingat</th></tr>
<tr><td>Nama berbagi objek</td><td><code>b = a; b.append(4)</code></td><td>list/dict ikut berubah</td></tr>
<tr><td>+= vs +</td><td><code>b += [4]</code> vs <code>b = b + [4]</code></td><td>+= mengubah list yang sama</td></tr>
<tr><td>List bersarang dengan *</td><td><code>[[0]*2]*2</code></td><td>pakai comprehension</td></tr>
<tr><td>Bawaan mutable</td><td><code>def f(x, simpan=[])</code></td><td>pakai None</td></tr>
<tr><td>Lambda di loop</td><td><code>[lambda: i for i in range(3)]</code></td><td>pakai <code>lambda i=i: i</code></td></tr></table>
<h4>Scope: aturan "lokal di seluruh fungsi"</h4>
<pre><code>x = 10
def f():
    print(x)   # UnboundLocalError!
    x = 5      # karena ada penugasan ini, x lokal di SELURUH f</code></pre>
<p>Solusi: pakai nama lain, kirim sebagai parameter, atau (jarang) <code>global x</code>.</p>
<h4>Truthy/falsy cepat</h4>
<p>Falsy di Python: <code>False, None, 0, 0.0, "", [], {}, set(), range(0)</code>. Semua lainnya truthy, termasuk <code>"0"</code>, <code>" "</code>, dan <code>[0]</code>.</p>
<div class="praktik"><b>Coba sendiri:</b> tulis lima baris kode yang masing-masing memicu satu jebakan di tabel, tebak output-nya, lalu jalankan di Code Runner.</div>`);

  dalami("algo", `
<h4>Pola algoritma dan sinyalnya di soal</h4>
<table class="mini-pivot"><tr><th>Sinyal di soal</th><th>Pola</th><th>Kompleksitas</th></tr>
<tr><td>"pasangan berjumlah", "sudah pernah muncul"</td><td>hash map / set</td><td>O(n)</td></tr>
<tr><td>"hitung kemunculan", "paling sering"</td><td>Counter / dict</td><td>O(n)</td></tr>
<tr><td>"data terurut", "cari posisi"</td><td>binary search</td><td>O(log n)</td></tr>
<tr><td>"dari dua ujung", "palindrom"</td><td>dua penunjuk</td><td>O(n)</td></tr>
<tr><td>"kurung", "undo", "terakhir masuk"</td><td>stack</td><td>O(n)</td></tr>
<tr><td>"sub-list berurutan terbaik"</td><td>Kadane / sliding window</td><td>O(n)</td></tr>
<tr><td>"kelompokkan berdasarkan"</td><td>dict of list (setdefault)</td><td>O(n)</td></tr>
<tr><td>"urutkan berdasarkan dua kriteria"</td><td>sorted(key=lambda x: (a, -b))</td><td>O(n log n)</td></tr></table>
<h4>Sliding window: jumlah 3 hari terbesar</h4>
<pre><code>def maks_k(data, k):
    jendela = sum(data[:k])          # jumlah k pertama
    terbaik = jendela
    for i in range(k, len(data)):
        jendela += data[i] - data[i - k]   # geser: tambah yang baru, buang yang lama
        terbaik = max(terbaik, jendela)
    return terbaik

maks_k([3, 1, 4, 1, 5, 9, 2], 3)   # 16 (5 + 9 + 2)</code></pre>
<div class="praktik"><b>Coba sendiri:</b> ubah fungsi dua_jumlah agar mengembalikan SEMUA pasangan indeks (bukan hanya yang pertama) tanpa memakai loop bersarang.</div>`);

  dalami("otomasi", `
<h4>Kerangka skrip otomasi yang rapi</h4>
<pre><code>import csv, logging, os
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")

def proses_file(path):
    with open(path, encoding="utf-8") as f:
        return [b for b in csv.DictReader(f) if b.get("qty")]

def main(folder):
    sukses, gagal = 0, 0
    for nama in sorted(os.listdir(folder)):
        if not nama.endswith(".csv"):
            continue
        try:
            baris = proses_file(os.path.join(folder, nama))
            logging.info("%s: %d baris", nama, len(baris))
            sukses += 1
        except Exception as e:            # satu file rusak tidak menghentikan semuanya
            logging.error("%s gagal: %s", nama, e)
            gagal += 1
    logging.info("selesai: %d sukses, %d gagal", sukses, gagal)

if __name__ == "__main__":
    main(os.environ.get("FOLDER_DATA", "data"))</code></pre>
<h4>XML-RPC ke Odoo dalam empat baris inti</h4>
<pre><code>import xmlrpc.client, os
url, db, user, pw = os.environ["ODOO_URL"], os.environ["ODOO_DB"], os.environ["ODOO_USER"], os.environ["ODOO_PW"]
uid = xmlrpc.client.ServerProxy(url + "/xmlrpc/2/common").authenticate(db, user, pw, {})
models = xmlrpc.client.ServerProxy(url + "/xmlrpc/2/object")
mitra = models.execute_kw(db, uid, pw, "res.partner", "search_read",
                          [[["customer_rank", ">", 0]]], {"fields": ["name", "email"], "limit": 5})</code></pre>
<p>Rahasia dibaca dari variabel lingkungan, bukan ditulis di kode.</p>
<div class="praktik"><b>Coba sendiri:</b> tulis fungsi yang membaca teks email berisi beberapa nomor invoice dan nominal rupiah, lalu mengembalikan list dict <code>{"nomor": …, "nominal": int}</code>.</div>`);

  dalami("model", `
<h4>Modul Odoo terkecil yang lengkap</h4>
<pre><code>akademi/
  __init__.py              # from . import models
  __manifest__.py          # nama, versi, depends, data
  models/__init__.py       # from . import kursus
  models/kursus.py         # class Kursus(models.Model)
  security/ir.model.access.csv
  views/kursus_views.xml   # tree, form, action, menu</code></pre>
<pre><code># __manifest__.py
{
    "name": "Akademi",
    "version": "17.0.1.0.0",
    "depends": ["base", "mail"],
    "data": ["security/ir.model.access.csv", "views/kursus_views.xml"],
    "license": "LGPL-3",
}</code></pre>
<h4>Field yang paling sering dipakai</h4>
<table class="mini-pivot"><tr><th>Field</th><th>Untuk</th><th>Atribut penting</th></tr>
<tr><td>Char / Text / Html</td><td>teks</td><td>required, size, translate</td></tr>
<tr><td>Integer / Float / Monetary</td><td>angka/uang</td><td>digits, currency_field</td></tr>
<tr><td>Boolean / Date / Datetime</td><td>ya-tidak, tanggal</td><td>default=fields.Date.context_today</td></tr>
<tr><td>Selection</td><td>pilihan tetap/status</td><td>[('draft', 'Draft'), …], default</td></tr>
<tr><td>Many2one</td><td>satu record lain</td><td>ondelete, domain</td></tr>
<tr><td>One2many</td><td>banyak baris anak</td><td>nama field Many2one kebalikannya</td></tr>
<tr><td>Many2many</td><td>banyak-ke-banyak</td><td>tag, grup</td></tr></table>
<p>Atribut umum: <code>string</code> (label), <code>help</code> (tooltip), <code>copy</code>, <code>index</code>, <code>tracking</code> (butuh mail.thread), <code>groups</code>.</p>
<div class="praktik"><b>Coba sendiri:</b> rancang model <code>akademi.peserta</code> berisi nama (wajib), email, kursus_id (Many2one, restrict), status (Selection draft/aktif/lulus), dan nilai (Float), lengkap dengan baris ACL-nya.</div>`);

  dalami("compute", `
<h4>Tiga cara "otomatis" dan kapan dipakai</h4>
<table class="mini-pivot"><tr><th>Mekanisme</th><th>Kapan berjalan</th><th>Dipakai untuk</th></tr>
<tr><td>compute + @api.depends</td><td>saat field sumber berubah (dari mana pun)</td><td>total, status turunan</td></tr>
<tr><td>@api.constrains</td><td>saat create/write menyentuh field itu</td><td>menolak data tidak sah</td></tr>
<tr><td>@api.onchange</td><td>hanya di form saat pengguna mengubah</td><td>mengisi saran, peringatan</td></tr></table>
<h4>Pola lengkap</h4>
<pre><code>from odoo import api, fields, models
from odoo.exceptions import ValidationError

class Peserta(models.Model):
    _name = "akademi.peserta"
    _description = "Peserta"

    nilai_tugas = fields.Float()
    nilai_ujian = fields.Float()
    nilai_akhir = fields.Float(compute="_compute_nilai_akhir", store=True)

    @api.depends("nilai_tugas", "nilai_ujian")
    def _compute_nilai_akhir(self):
        for rec in self:                                  # selalu loop
            rec.nilai_akhir = 0.4 * rec.nilai_tugas + 0.6 * rec.nilai_ujian

    @api.constrains("nilai_tugas", "nilai_ujian")
    def _cek_rentang(self):
        for rec in self:
            if not (0 &lt;= rec.nilai_tugas &lt;= 100 and 0 &lt;= rec.nilai_ujian &lt;= 100):
                raise ValidationError("Nilai harus 0 sampai 100.")</code></pre>
<p>Ingat dua aturan: compute <b>mengisi</b> field (tidak return), dan selalu <b>loop</b> karena self bisa berisi banyak record.</p>
<div class="praktik"><b>Coba sendiri:</b> tambahkan field compute <code>predikat</code> (A/B/C) dari nilai_akhir, simpan di database, lalu buat filter "Lulus" di search view berdasarkan predikat.</div>`);

  dalami("orm", `
<h4>CRUD ORM dan padanan SQL-nya</h4>
<table class="mini-pivot"><tr><th>ORM</th><th>SQL kira-kira</th></tr>
<tr><td><code>Model.create([{…}, {…}])</code></td><td>INSERT</td></tr>
<tr><td><code>Model.search(domain, order='date desc', limit=10)</code></td><td>SELECT id … WHERE … ORDER BY … LIMIT</td></tr>
<tr><td><code>Model.search_count(domain)</code></td><td>SELECT COUNT(*)</td></tr>
<tr><td><code>Model.browse(ids)</code></td><td>(ambil record dari id)</td></tr>
<tr><td><code>records.write({…})</code></td><td>UPDATE</td></tr>
<tr><td><code>records.unlink()</code></td><td>DELETE</td></tr>
<tr><td><code>Model._read_group(domain, ['partner_id'], ['amount_total:sum'])</code></td><td>GROUP BY</td></tr></table>
<h4>Command untuk relasi x2many (Odoo 17)</h4>
<table class="mini-pivot"><tr><th>Command</th><th>Tuple lama</th><th>Efek</th></tr>
<tr><td><code>Command.create(vals)</code></td><td>(0, 0, vals)</td><td>buat baris baru</td></tr>
<tr><td><code>Command.update(id, vals)</code></td><td>(1, id, vals)</td><td>ubah baris</td></tr>
<tr><td><code>Command.delete(id)</code></td><td>(2, id)</td><td>hapus record</td></tr>
<tr><td><code>Command.unlink(id)</code></td><td>(3, id)</td><td>lepas hubungan saja</td></tr>
<tr><td><code>Command.link(id)</code></td><td>(4, id)</td><td>tambah hubungan</td></tr>
<tr><td><code>Command.clear()</code></td><td>(5,)</td><td>lepas semua</td></tr>
<tr><td><code>Command.set(ids)</code></td><td>(6, 0, ids)</td><td>ganti semua</td></tr></table>
<h4>Recordset seperti list yang pintar</h4>
<pre><code>orders = env["sale.order"].search([("state", "=", "sale")])
besar  = orders.filtered(lambda o: o.amount_total &gt; 1_000_000)   # saring
total  = sum(besar.mapped("amount_total"))                      # ambil nilai
urut   = besar.sorted("date_order", reverse=True)[:5]           # urut + iris
gabung = besar | orders[:3]                                     # gabungan tanpa kembar</code></pre>
<div class="praktik"><b>Coba sendiri</b> (di atas kertas): tulis kode yang mengambil semua pesanan bulan ini per pelanggan dengan satu _read_group, bukan dengan search di dalam loop.</div>`);

  dalami("inherit", `
<h4>Tiga jenis inheritance dalam satu tabel</h4>
<table class="mini-pivot"><tr><th>Jenis</th><th>Tulis</th><th>Hasil</th><th>Contoh</th></tr>
<tr><td>Classic (extension)</td><td><code>_inherit = 'sale.order'</code></td><td>model yang sama diperluas</td><td>tambah field No. PO</td></tr>
<tr><td>Prototype</td><td><code>_name = 'x.baru'</code> + <code>_inherit = 'x.lama'</code></td><td>model baru, tabel baru</td><td>arsip kursus</td></tr>
<tr><td>Delegation</td><td><code>_inherits = {'res.partner': 'partner_id'}</code></td><td>model baru yang menempel record induk</td><td>res.users → res.partner</td></tr></table>
<h4>Override yang benar (Odoo 17)</h4>
<pre><code>class SaleOrder(models.Model):
    _inherit = "sale.order"

    @api.model_create_multi
    def create(self, vals_list):
        for vals in vals_list:
            vals.setdefault("note", "Dibuat oleh modul approval")
        return super().create(vals_list)

    def action_confirm(self):
        for order in self:
            if order.amount_total &gt; 50_000_000 and not order.disetujui:
                raise UserError("Pesanan di atas 50 juta perlu persetujuan manajer.")
        return super().action_confirm()</code></pre>
<p>Polanya selalu: cek/ubah sebelum, panggil <code>super()</code>, kembalikan hasilnya.</p>
<h4>Wizard dalam tiga potong</h4>
<ol><li>Model <code>models.TransientModel</code> dengan field isian.</li><li>Form view + action dengan <code>target="new"</code> (jendela popup).</li><li>Tombol yang membaca <code>active_ids</code> dari context, memproses, lalu mengembalikan <code>{'type': 'ir.actions.act_window_close'}</code>.</li></ol>
<div class="praktik"><b>Coba sendiri:</b> rancang wizard "Ubah kuota massal" yang mengubah kuota semua kursus yang dipilih di list view.</div>`);

  dalami("view", `
<h4>Satu file XML: tree, form, action, menu (Odoo 17)</h4>
<pre><code>&lt;odoo&gt;
  &lt;record id="kursus_tree" model="ir.ui.view"&gt;
    &lt;field name="model"&gt;akademi.kursus&lt;/field&gt;
    &lt;field name="arch" type="xml"&gt;
      &lt;tree decoration-muted="state == 'batal'"&gt;
        &lt;field name="kode"/&gt;&lt;field name="nama"/&gt;&lt;field name="kuota"/&gt;&lt;field name="state"/&gt;
      &lt;/tree&gt;
    &lt;/field&gt;
  &lt;/record&gt;

  &lt;record id="kursus_form" model="ir.ui.view"&gt;
    &lt;field name="model"&gt;akademi.kursus&lt;/field&gt;
    &lt;field name="arch" type="xml"&gt;
      &lt;form&gt;
        &lt;header&gt;
          &lt;button name="action_buka" type="object" string="Buka" invisible="state != 'draft'" class="oe_highlight"/&gt;
          &lt;field name="state" widget="statusbar"/&gt;
        &lt;/header&gt;
        &lt;sheet&gt;&lt;group&gt;&lt;field name="nama"/&gt;&lt;field name="kuota" readonly="state == 'buka'"/&gt;&lt;/group&gt;&lt;/sheet&gt;
      &lt;/form&gt;
    &lt;/field&gt;
  &lt;/record&gt;

  &lt;record id="kursus_action" model="ir.actions.act_window"&gt;
    &lt;field name="name"&gt;Kursus&lt;/field&gt;
    &lt;field name="res_model"&gt;akademi.kursus&lt;/field&gt;
    &lt;field name="view_mode"&gt;tree,form&lt;/field&gt;
  &lt;/record&gt;
  &lt;menuitem id="kursus_menu" name="Kursus" action="kursus_action"/&gt;
&lt;/odoo&gt;</code></pre>
<h4>Mewarisi view tanpa menyalin</h4>
<pre><code>&lt;record id="sale_order_form_po" model="ir.ui.view"&gt;
  &lt;field name="model"&gt;sale.order&lt;/field&gt;
  &lt;field name="inherit_id" ref="sale.view_order_form"/&gt;
  &lt;field name="arch" type="xml"&gt;
    &lt;xpath expr="//field[@name='partner_id']" position="after"&gt;
      &lt;field name="no_po_pelanggan"/&gt;
    &lt;/xpath&gt;
  &lt;/field&gt;
&lt;/record&gt;</code></pre>
<div class="praktik"><b>Coba sendiri:</b> tambahkan search view kursus dengan filter "Draft", filter "Kuota penuh", dan group by state, lalu nyalakan filter Draft sebagai bawaan lewat context action.</div>`);

  dalami("security", `
<h4>Urutan pemeriksaan akses Odoo</h4>
<ol><li><b>ACL</b> (ir.model.access): bolehkah grup ini membaca/menulis/membuat/menghapus MODEL ini?</li><li><b>Record rule</b>: dari model itu, RECORD mana saja yang boleh?</li><li><b>Field groups</b>: field tertentu hanya untuk grup tertentu.</li></ol>
<pre><code># security/ir.model.access.csv
id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
access_kursus_user,kursus user,model_akademi_kursus,base.group_user,1,0,0,0
access_kursus_manager,kursus manager,model_akademi_kursus,akademi.group_manager,1,1,1,1</code></pre>
<h4>Cron dan tes</h4>
<pre><code>&lt;record id="cron_pengingat" model="ir.cron"&gt;
  &lt;field name="name"&gt;Kirim pengingat kursus&lt;/field&gt;
  &lt;field name="model_id" ref="model_akademi_kursus"/&gt;
  &lt;field name="state"&gt;code&lt;/field&gt;
  &lt;field name="code"&gt;model._kirim_pengingat()&lt;/field&gt;
  &lt;field name="interval_number"&gt;1&lt;/field&gt;
  &lt;field name="interval_type"&gt;days&lt;/field&gt;
&lt;/record&gt;</code></pre>
<pre><code>from odoo.tests import TransactionCase, tagged

@tagged("post_install", "-at_install")
class TestKursus(TransactionCase):
    def test_nilai_akhir(self):
        p = self.env["akademi.peserta"].create({"nilai_tugas": 80, "nilai_ujian": 90})
        self.assertEqual(p.nilai_akhir, 86)</code></pre>
<h4>Debugging cepat</h4>
<table class="mini-pivot"><tr><th>Masalah</th><th>Cek</th></tr>
<tr><td>Menu tidak muncul</td><td>ACL untuk grup pengguna, file ada di data manifest</td></tr>
<tr><td>Field baru tidak ada</td><td>restart server + <code>-u nama_modul</code></td></tr>
<tr><td>View tidak berubah</td><td><code>--dev=xml</code>, cek inherit_id dan xpath</td></tr>
<tr><td>Expected singleton</td><td>loop atau ensure_one()</td></tr>
<tr><td>Access error untuk pengguna biasa</td><td>coba login sebagai pengguna itu; cek rule dan groups</td></tr></table>
<div class="praktik"><b>Coba sendiri:</b> buat dua grup (Pengguna Akademi dan Manajer Akademi), beri hak berbeda di CSV, lalu tambahkan record rule agar pengajar hanya melihat kursus yang ia ajar.</div>`);
})();
