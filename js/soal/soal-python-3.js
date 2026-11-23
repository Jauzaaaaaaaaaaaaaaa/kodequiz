// ============ PYTHON lanjutan — bab 15–21 ============
// Comprehension, fungsi lanjut, generator, OOP lanjut, pustaka standar, lingkungan kerja, proyek mini.
// Disusun dari Tutorial resmi Python (docs.python.org) dan materi Programmer Zaman Now.
// vr:"py" → output dijalankan sungguhan oleh alat/cek-soal.js.

SOAL_PYTHON.push(
// ---- BAB 15: comprehension & fungsi bawaan ----
{k:"comprehension",t:"mc",lv:1,q:"Output kode ini:",kode:"angka = [x * 2 for x in range(4)]\nprint(angka)",o:["[0, 2, 4, 6]","[2, 4, 6, 8]","[0, 1, 2, 3]","[0, 2, 4, 6, 8]"],a:0,vr:"py",
 e:"List comprehension = membuat list baru dalam satu baris: [hasil for item in sumber].\n1. range(4) menghasilkan 0, 1, 2, 3.\n2. Masing-masing dikali 2: 0, 2, 4, 6.\nIngat: sama dengan for biasa yang melakukan append, hanya lebih ringkas.",
 w:[null,"range(4) mulai dari 0, bukan 1.","Itu isi range tanpa dikali 2.","range(4) tidak memuat angka 4."]},
{k:"comprehension",t:"mc",lv:1,q:"Output kode ini:",kode:"kelipatan3 = [x for x in range(10) if x % 3 == 0]\nprint(kelipatan3)",o:["[0, 3, 6, 9]","[3, 6, 9]","[0, 3, 6]","[3, 6, 9, 12]"],a:0,vr:"py",
 e:"if di akhir comprehension berfungsi sebagai saringan: hanya item yang lolos syarat yang masuk. 0 % 3 juga 0, jadi 0 ikut.",
 w:[null,"0 habis dibagi 3, jadi ikut.","9 masih di dalam range(10).","12 di luar range(10)."]},
{k:"comprehension",t:"mc",lv:2,q:"Output kode ini:",kode:"label = [\"genap\" if n % 2 == 0 else \"ganjil\" for n in range(3)]\nprint(label)",o:["['genap', 'ganjil', 'genap']","['ganjil', 'genap', 'ganjil']","['genap', 'genap']","Error: if-else tidak boleh di comprehension"],a:0,vr:"py",
 e:"Ada dua posisi if di comprehension:\n• if-else DI DEPAN for = mengubah nilai (semua item tetap masuk).\n• if DI BELAKANG for = menyaring (item bisa dibuang).",
 w:[null,"0 itu genap.","if-else di depan tidak membuang item.","Bentuk ini sah."]},
{k:"comprehension",t:"mc",lv:2,q:"Output kode ini:",kode:"kata = [\"kopi\", \"teh\"]\npanjang = {k: len(k) for k in kata}\nprint(panjang)",o:["{'kopi': 4, 'teh': 3}","[4, 3]","{4: 'kopi', 3: 'teh'}","{'kopi', 'teh'}"],a:0,vr:"py",
 e:"Dict comprehension memakai kurung kurawal dan pasangan kunci: nilai. Bentuknya {kunci: nilai for item in sumber}.",
 w:[null,"Kurung kurawal dengan titik dua menghasilkan dict, bukan list.","Kunci ditulis di kiri titik dua.","Itu set, tanpa titik dua."]},
{k:"comprehension",t:"mc",lv:2,q:"Output kode ini:",kode:"for i, buah in enumerate([\"apel\", \"jeruk\"], start=1):\n    print(i, buah)",o:["1 apel lalu 2 jeruk","0 apel lalu 1 jeruk","apel 1 lalu jeruk 2","(1, 'apel') lalu (2, 'jeruk')"],a:0,vr:"py",vx:"1 apel\n2 jeruk",
 e:"enumerate memberi nomor urut sekaligus isinya, jadi tidak perlu membuat penghitung manual. start=1 membuat nomor dimulai dari 1 (bawaannya 0).",
 w:[null,"start=1 mengubah nomor awal.","Urutannya (nomor, isi).","Pasangan itu sudah dibongkar ke i dan buah."]},
{k:"comprehension",t:"mc",lv:2,q:"Output kode ini:",kode:"nama = [\"Ani\", \"Budi\", \"Cita\"]\nnilai = [80, 95]\nprint(list(zip(nama, nilai)))",o:["[('Ani', 80), ('Budi', 95)]","[('Ani', 80), ('Budi', 95), ('Cita', None)]","Error: panjang berbeda","['Ani', 80, 'Budi', 95]"],a:0,vr:"py",
 e:"zip menjahit beberapa list berpasangan seperti resleting. Kalau panjangnya beda, zip berhenti di list yang paling pendek, jadi Cita tidak ikut.\n• Butuh pengisi kosong? itertools.zip_longest.",
 w:[null,"zip tidak mengisi None, ia berhenti.","Panjang beda tidak error.","zip menghasilkan pasangan tuple."]},
{k:"comprehension",t:"mc",lv:2,q:"Output kode ini:",kode:"print(sorted([\"Budi\", \"an\", \"Cita\"], key=len))",o:["['an', 'Budi', 'Cita']","['Budi', 'Cita', 'an']","['an', 'Cita', 'Budi']","[2, 4, 4]"],a:0,vr:"py",
 e:"key=len artinya 'urutkan berdasarkan panjang'. Budi dan Cita sama-sama 4 huruf, jadi urutan aslinya dipertahankan (sort di Python stabil).\n• Tanpa key, huruf besar didahulukan: ['Budi', 'Cita', 'an'].",
 w:[null,"Itu urutan abjad tanpa key.","Budi dan Cita sama panjang; urutan asli dijaga.","sorted mengembalikan itemnya, bukan panjangnya."]},
{k:"comprehension",t:"mc",lv:2,q:"Output kode ini:",kode:"data = [(\"Ani\", 80), (\"Budi\", 95), (\"Cita\", 70)]\nterbaik = sorted(data, key=lambda x: x[1], reverse=True)\nprint(terbaik[0][0])",o:["Budi","Ani","Cita","95"],a:0,vr:"py",
 e:"lambda x: x[1] = fungsi kecil tanpa nama yang mengambil elemen kedua (nilai). reverse=True membuat urutan dari besar ke kecil, jadi yang pertama adalah nilai tertinggi.\n• [0][0] = item pertama, lalu elemen pertamanya (nama).",
 w:[null,"Ani 80, bukan tertinggi.","Cita paling rendah.","[0][0] mengambil nama, bukan nilai."]},
{k:"comprehension",t:"mc",lv:1,q:"Output kode ini:",kode:"angka = list(map(int, \"10 20 30\".split()))\nprint(sum(angka))",o:["60","102030","['10', '20', '30']","Error"],a:0,vr:"py",
 e:"Pola membaca input angka dalam satu baris yang sangat sering dipakai di tes coding:\n1. split() memecah teks berdasarkan spasi: ['10', '20', '30'] (masih teks).\n2. map(int, …) mengubah setiap teks menjadi angka.\n3. sum menjumlahkan: 60.",
 w:[null,"Sudah diubah ke int, jadi dijumlah, bukan digabung.","map(int) mengubahnya jadi angka.","Semua teks berisi angka, aman."]},
{k:"comprehension",t:"mc",lv:2,q:"Output kode ini:",kode:"nilai = [70, 85, 92]\nprint(any(n > 90 for n in nilai), all(n >= 75 for n in nilai))",o:["True False","False True","True True","False False"],a:0,vr:"py",
 e:"any = minimal satu yang benar (92 > 90 → True). all = semua harus benar (70 tidak ≥ 75 → False). Keduanya berhenti secepat mungkin begitu jawabannya pasti.",
 w:[null,"Terbalik.","70 gagal syarat all.","92 memenuhi syarat any."]},
{k:"comprehension",t:"mc",lv:3,q:"Output kode ini:",kode:"papan = [[0] * 2] * 2\npapan[0][0] = 1\nprint(papan)",o:["[[1, 0], [1, 0]]","[[1, 0], [0, 0]]","[[1, 1], [0, 0]]","Error"],a:0,vr:"py",
 e:"Jebakan terkenal: [[0]*2]*2 membuat DUA REFERENSI ke list dalam yang SAMA, bukan dua list berbeda. Mengubah satu terlihat di keduanya.\n• Cara benar: [[0] * 2 for _ in range(2)], yang membuat list baru di setiap putaran.",
 w:[null,"Kedua baris adalah objek yang sama.","Yang diubah hanya kolom 0.","Kodenya sah, hanya hasilnya mengejutkan."]},
{k:"comprehension",t:"mc",lv:2,q:"Output kode ini:",kode:"print(sum(x * x for x in range(4)))",o:["14","6","30","[0, 1, 4, 9]"],a:0,vr:"py",
 e:"Generator expression (tanpa kurung siku) langsung dimasukkan ke sum: 0 + 1 + 4 + 9 = 14. Lebih hemat memori karena tidak membuat list dulu.",
 w:[null,"Itu jumlah 0+1+2+3 tanpa dikuadratkan.","4 tidak termasuk range(4).","sum menjumlahkan, bukan membuat list."]},
{k:"comprehension",t:"is",lv:1,q:"Fungsi bawaan yang memberi nomor urut sambil melakukan perulangan: for i, x in ____(daftar):",a:["enumerate"],
 e:"enumerate(daftar, start=1) sangat berguna untuk mencetak daftar bernomor."},
{k:"comprehension",t:"is",lv:2,q:"Kata kunci untuk membuat fungsi kecil tanpa nama dalam satu baris: ____ x: x * 2",a:["lambda"],
 e:"lambda paling sering dipakai sebagai key pada sorted, max, min. Kalau logikanya lebih dari satu ekspresi, tulis def biasa."},

// ---- BAB 16: fungsi lanjut ----
{k:"fungsilanjut",t:"mc",lv:1,q:"Output kode ini:",kode:"def total(*angka):\n    return sum(angka)\n\nprint(total(5, 10, 15))",o:["30","(5, 10, 15)","Error: terlalu banyak argumen","5"],a:0,vr:"py",
 e:"*angka (dibaca 'args') menampung berapa pun argumen posisi menjadi satu tuple: (5, 10, 15). Fungsi seperti print dan max bekerja dengan cara ini.",
 w:[null,"Fungsi mengembalikan jumlahnya.","*args justru menerima banyak argumen.","Semua argumen ikut dijumlah."]},
{k:"fungsilanjut",t:"mc",lv:2,q:"Output kode ini:",kode:"def profil(**data):\n    for k, v in data.items():\n        print(k, \"=\", v)\n\nprofil(nama=\"Ani\", kota=\"Solo\")",o:["nama = Ani lalu kota = Solo","{'nama': 'Ani', 'kota': 'Solo'}","Error","nama kota"],a:0,vr:"py",vx:"nama = Ani\nkota = Solo",
 e:"**data (dibaca 'kwargs') menampung argumen BERNAMA menjadi dict: {'nama': 'Ani', 'kota': 'Solo'}. Lalu .items() memberi pasangan kunci dan nilai.",
 w:[null,"Isi dict dicetak satu per satu lewat perulangan.","Argumen bernama diterima oleh **.","Nilainya juga dicetak."]},
{k:"fungsilanjut",t:"mc",lv:2,q:"Output kode ini:",kode:"def info(nama, kota=\"Solo\"):\n    return nama + \" dari \" + kota\n\nprint(info(kota=\"Bali\", nama=\"Ani\"))",o:["Ani dari Bali","Bali dari Ani","Ani dari Solo","Error: urutan salah"],a:0,vr:"py",
 e:"Argumen bernama (keyword argument) boleh ditulis dengan urutan bebas karena dicocokkan lewat namanya. kota=\"Bali\" menimpa nilai bawaan \"Solo\".",
 w:[null,"Dicocokkan berdasarkan nama, bukan urutan.","Nilai bawaan ditimpa.","Urutan bebas untuk argumen bernama."]},
{k:"fungsilanjut",t:"mc",lv:3,q:"Output kode ini:",kode:"def tambah(item, keranjang=[]):\n    keranjang.append(item)\n    return keranjang\n\ntambah(\"kopi\")\nprint(tambah(\"teh\"))",o:["['kopi', 'teh']","['teh']","['kopi']","Error"],a:0,vr:"py",
 e:"Jebakan default mutable: nilai bawaan [] dibuat SEKALI saat def dijalankan, lalu dipakai ulang di setiap pemanggilan. Isinya menumpuk.\n• Cara benar: def tambah(item, keranjang=None): lalu di dalamnya if keranjang is None: keranjang = [].\nIngat: jangan pernah memakai list atau dict sebagai nilai bawaan parameter.",
 w:[null,"List bawaan tidak dibuat ulang.","Pemanggilan kedua juga menambah teh.","Kodenya sah."]},
{k:"fungsilanjut",t:"mc",lv:2,q:"Output kode ini:",kode:"x = 10\n\ndef ubah():\n    x = 5\n\nubah()\nprint(x)",o:["10","5","None","Error"],a:0,vr:"py",
 e:"Mengisi x di dalam fungsi membuat variabel LOKAL baru bernama x. Variabel x global tidak tersentuh. Aturan pencarian nama di Python: Lokal → Enclosing (fungsi luar) → Global → Built-in (LEGB).",
 w:[null,"x = 5 hanya hidup di dalam fungsi.","x global masih 10.","Kodenya sah."]},
{k:"fungsilanjut",t:"mc",lv:3,q:"Apa yang dicetak?",kode:"x = 10\n\ndef naik():\n    x += 1\n\ntry:\n    naik()\nexcept Exception as e:\n    print(type(e).__name__)",o:["UnboundLocalError","NameError","10","11"],a:0,vr:"py",
 e:"x += 1 berarti x = x + 1. Karena ada pengisian, Python menganggap x LOKAL. Tapi x lokal belum punya nilai saat dibaca, jadi UnboundLocalError.\n• Solusi yang rapi: kirim x sebagai parameter dan kembalikan hasilnya. Kalau terpaksa, tulis global x di awal fungsi.",
 w:[null,"Namanya dikenal, hanya belum terisi di lingkup lokal.","Fungsi gagal sebelum mencetak apa pun.","Penambahan tidak pernah terjadi."]},
{k:"fungsilanjut",t:"mc",lv:2,q:"Output kode ini:",kode:"def faktorial(n):\n    if n <= 1:\n        return 1\n    return n * faktorial(n - 1)\n\nprint(faktorial(5))",o:["120","15","24","Error: rekursi tak berujung"],a:0,vr:"py",
 e:"Rekursi = fungsi memanggil dirinya sendiri dengan soal yang lebih kecil.\n1. faktorial(5) = 5 * faktorial(4)\n2. = 5 * 4 * 3 * 2 * faktorial(1)\n3. faktorial(1) = 1 (kasus dasar, penghenti rekursi)\n4. Hasil: 120.\nIngat: tanpa kasus dasar, rekursi berjalan terus sampai RecursionError.",
 w:[null,"Itu penjumlahan 1..5, bukan perkalian.","Itu 4!, bukan 5!.","Ada kasus dasar n <= 1."]},
{k:"fungsilanjut",t:"mc",lv:3,q:"Output kode ini:",kode:"def jumlah_digit(n):\n    if n == 0:\n        return 0\n    return n % 10 + jumlah_digit(n // 10)\n\nprint(jumlah_digit(2026))",o:["10","2026","8","6"],a:0,vr:"py",
 e:"n % 10 mengambil digit terakhir, n // 10 membuang digit terakhir.\n1. 6 + jumlah_digit(202)\n2. 6 + 2 + jumlah_digit(20)\n3. 6 + 2 + 0 + jumlah_digit(2)\n4. 6 + 2 + 0 + 2 + jumlah_digit(0) = 10",
 w:[null,"Fungsi menjumlah digit, bukan mengembalikan angkanya.","2+0+2+6 = 10.","Semua digit ikut dijumlah."]},
{k:"fungsilanjut",t:"mc",lv:2,q:"Output kode ini:",kode:"def terapkan(fungsi, nilai):\n    return fungsi(nilai)\n\nprint(terapkan(len, \"kopi\"), terapkan(str.upper, \"teh\"))",o:["4 TEH","kopi teh","4 teh","Error"],a:0,vr:"py",
 e:"Di Python, fungsi adalah nilai biasa: bisa disimpan di variabel dan dikirim sebagai argumen (tanpa tanda kurung). Inilah dasar dari key=…, map, dan decorator.",
 w:[null,"Fungsi len dan upper benar-benar dijalankan.","str.upper membuat huruf kapital.","Mengirim fungsi sebagai argumen itu sah."]},
{k:"fungsilanjut",t:"mc",lv:3,q:"Output kode ini:",kode:"def keras(f):\n    def bungkus():\n        return f().upper() + \"!\"\n    return bungkus\n\n@keras\ndef sapa():\n    return \"halo\"\n\nprint(sapa())",o:["HALO!","halo","halo!","HALO"],a:0,vr:"py",
 e:"Decorator adalah fungsi yang 'membungkus' fungsi lain untuk menambah perilaku tanpa mengubah isinya. @keras di atas def sama dengan menulis sapa = keras(sapa).\n• Dipakai luas di Flask (@app.route), Odoo (@api.depends), dan pengukur waktu.",
 w:[null,"Hasil sapa dibungkus oleh keras.","upper() juga dijalankan.","Tanda seru juga ditambahkan."]},
{k:"fungsilanjut",t:"mc",lv:1,q:"Output kode ini:",kode:"kali = lambda a, b: a * b\nprint(kali(3, 4))",o:["12","7","34","<function>"],a:0,vr:"py",
 e:"lambda a, b: a * b sama dengan def kali(a, b): return a * b. Yang ditulis setelah titik dua otomatis dikembalikan.",
 w:[null,"Itu penjumlahan.","Angka dikalikan, bukan digabung.","Fungsinya dipanggil dengan (3, 4)."]},
{k:"fungsilanjut",t:"is",lv:1,q:"Tanda di depan nama parameter agar menampung banyak argumen posisi sebagai tuple: def f(____args)",a:["*"],
 e:"*args untuk argumen posisi (tuple), **kwargs untuk argumen bernama (dict). Nama args/kwargs hanya kebiasaan; yang penting tanda bintangnya."},
{k:"fungsilanjut",t:"is",lv:2,q:"Kata kunci agar fungsi boleh mengubah variabel global: ____ x",a:["global"],
 e:"global sebaiknya jarang dipakai karena membuat alur data sulit dilacak. Lebih baik kirim nilai lewat parameter dan kembalikan hasilnya."},

// ---- BAB 17: iterator & generator ----
{k:"iterator",t:"mc",lv:1,q:"Output kode ini:",kode:"def angka():\n    yield 1\n    yield 2\n    yield 3\n\nprint(list(angka()))",o:["[1, 2, 3]","1","[3]","None"],a:0,vr:"py",
 e:"Fungsi yang memakai yield adalah generator. Setiap yield 'menyerahkan' satu nilai lalu fungsi berhenti sejenak, menunggu diminta nilai berikutnya. list(...) meminta semuanya.",
 w:[null,"yield tidak menghentikan fungsi seperti return.","Semua nilai yang di-yield terkumpul.","Generator mengeluarkan nilai."]},
{k:"iterator",t:"mc",lv:2,q:"Output kode ini:",kode:"g = (x * 10 for x in range(3))\nprint(type(g).__name__)",o:["generator","list","tuple","range"],a:0,vr:"py",
 e:"Comprehension dengan kurung biasa ( ) BUKAN tuple, melainkan generator expression. Nilainya dihitung satu per satu saat diminta.",
 w:[null,"List memakai kurung siku.","Tuple comprehension tidak ada di Python.","range adalah tipe lain."]},
{k:"iterator",t:"mc",lv:2,q:"Output kode ini:",kode:"it = iter([10, 20, 30])\nprint(next(it), next(it))",o:["10 20","10 10","20 30","[10, 20]"],a:0,vr:"py",
 e:"iter() membuat iterator: penunjuk yang ingat posisinya. Setiap next() mengambil item berikutnya dan memajukan penunjuk. Inilah yang terjadi diam-diam di setiap for.",
 w:[null,"Penunjuk maju setelah tiap next.","Mulai dari item pertama.","next mengembalikan satu item."]},
{k:"iterator",t:"mc",lv:2,q:"Apa yang dicetak?",kode:"it = iter([1])\nnext(it)\ntry:\n    next(it)\nexcept Exception as e:\n    print(type(e).__name__)",o:["StopIteration","IndexError","None","1"],a:0,vr:"py",
 e:"Ketika isinya habis, next() melempar StopIteration. Perulangan for menangkap sinyal ini secara otomatis untuk tahu kapan harus berhenti.",
 w:[null,"Iterator tidak memakai indeks.","next tidak mengembalikan None.","Item 1 sudah diambil."]},
{k:"iterator",t:"mc",lv:3,q:"Output kode ini:",kode:"g = (x for x in range(4))\nprint(sum(g), sum(g))",o:["6 0","6 6","0 6","Error"],a:0,vr:"py",
 e:"Generator hanya bisa dihabiskan SEKALI. sum pertama mengambil 0+1+2+3 = 6. sum kedua mendapati generator sudah kosong, jadi 0.\n• Butuh dipakai berkali-kali? Simpan sebagai list.",
 w:[null,"Generator tidak bisa diulang.","Yang pertama mendapat isinya.","Generator kosong dijumlah jadi 0, bukan error."]},
{k:"iterator",t:"mc",lv:3,q:"Apa yang dicetak (urut)?",kode:"def proses():\n    print(\"mulai\")\n    yield 1\n\ng = proses()\nprint(\"dibuat\")\nprint(next(g))",o:["dibuat, mulai, 1","mulai, dibuat, 1","dibuat, 1","mulai, 1, dibuat"],a:0,vr:"py",vx:"dibuat\nmulai\n1",
 e:"Generator itu malas (lazy): memanggil proses() belum menjalankan isinya sama sekali. Isi fungsi baru berjalan saat next() pertama, berhenti di yield pertama.",
 w:[null,"Isi generator belum jalan saat dibuat.","'mulai' tetap tercetak saat next.","Urutannya terbalik."]},
{k:"iterator",t:"mc",lv:3,q:"Output kode ini:",kode:"from itertools import islice\n\ndef genap():\n    n = 0\n    while True:\n        yield n\n        n += 2\n\nprint(list(islice(genap(), 4)))",o:["[0, 2, 4, 6]","Program tidak pernah berhenti","[2, 4, 6, 8]","[0, 2, 4, 6, 8]"],a:0,vr:"py",
 e:"while True di generator aman karena nilainya hanya dibuat saat diminta. islice(…, 4) hanya meminta 4 nilai pertama, lalu berhenti. Generator bisa mewakili deret tak terbatas.",
 w:[null,"islice membatasi jumlah permintaan.","n dimulai dari 0.","Hanya 4 nilai yang diambil."]},
{k:"iterator",t:"mc",lv:2,q:"Output kode ini:",kode:"def gabung():\n    yield from [1, 2]\n    yield from \"ab\"\n\nprint(list(gabung()))",o:["[1, 2, 'a', 'b']","[[1, 2], 'ab']","[1, 2, 'ab']","Error"],a:0,vr:"py",
 e:"yield from menyerahkan SEMUA isi dari iterable lain satu per satu. Teks juga iterable, jadi \"ab\" diserahkan sebagai 'a' lalu 'b'.",
 w:[null,"Isinya dibongkar, tidak dibungkus.","Teks dibongkar per huruf.","Kodenya sah."]},
{k:"iterator",t:"mc",lv:1,q:"Output kode ini:",kode:"print(range(5))",o:["range(0, 5)","[0, 1, 2, 3, 4]","0 1 2 3 4","5"],a:0,vr:"py",
 e:"range tidak menyimpan semua angka, hanya awal, akhir, dan langkah. Angkanya dibuat saat dibutuhkan. Karena itu range(1_000_000_000) tetap ringan. Pakai list(range(5)) kalau ingin melihat isinya.",
 w:[null,"range bukan list.","print tidak membongkar range.","range bukan angka tunggal."]},
{k:"iterator",t:"mc",lv:2,q:"File log 5 GB perlu dihitung jumlah barisnya yang berisi kata ERROR. Cara yang aman untuk memori:",o:["for baris in open(nama): … (dibaca baris per baris)","isi = open(nama).read() lalu dihitung","open(nama).readlines() lalu dihitung","Menyalin file ke list dulu"],a:0,
 e:"Objek file adalah iterator: for baris in f membaca satu baris tiap putaran, jadi memori yang terpakai hanya satu baris. read() dan readlines() memuat seluruh 5 GB ke memori sekaligus.\n1. with open(nama, encoding=\"utf-8\") as f:\n2.     total = sum(1 for baris in f if \"ERROR\" in baris)",
 w:[null,"read() memuat seluruh isi file.","readlines() membuat list berisi semua baris.","Sama saja, memuat semuanya."]},
{k:"iterator",t:"is",lv:1,q:"Kata kunci yang membuat fungsi menjadi generator, menyerahkan nilai lalu 'berhenti sejenak': ____",a:["yield"],
 e:"return menghentikan fungsi selamanya; yield hanya menjeda, dan fungsi dilanjutkan dari titik itu saat next() berikutnya."},
{k:"iterator",t:"is",lv:2,q:"Fungsi bawaan untuk mengambil item berikutnya dari iterator: ____(it)",a:["next"],
 e:"next(it, nilai_cadangan) mengembalikan nilai cadangan alih-alih StopIteration kalau iterator sudah habis."},

// ---- BAB 18: OOP lanjut ----
{k:"oop2",t:"mc",lv:1,q:"Output kode ini:",kode:"class Produk:\n    def __init__(self, nama, harga):\n        self.nama = nama\n        self.harga = harga\n\n    def __str__(self):\n        return f\"{self.nama} (Rp{self.harga})\"\n\nprint(Produk(\"Kopi\", 18000))",o:["Kopi (Rp18000)","<__main__.Produk object at 0x...>","Produk","Error"],a:0,vr:"py",
 e:"__str__ menentukan tampilan objek saat di-print atau diubah dengan str(). Tanpa __str__, print menampilkan alamat memori yang tidak berguna seperti <__main__.Produk object at 0x...>.\n• Method berawalan dan berakhiran dua garis bawah disebut dunder (double underscore) atau magic method.",
 w:[null,"Itu tampilan kalau __str__ tidak ditulis.","print memakai __str__.","Kodenya sah."]},
{k:"oop2",t:"mc",lv:2,q:"Output kode ini:",kode:"class Keranjang:\n    def __init__(self):\n        self.isi = [\"kopi\", \"teh\", \"susu\"]\n\n    def __len__(self):\n        return len(self.isi)\n\nprint(len(Keranjang()))",o:["3","1","Error: objek tidak punya panjang","0"],a:0,vr:"py",
 e:"len(obj) diam-diam memanggil obj.__len__(). Dengan menulis dunder method, objek buatanmu bisa dipakai seperti tipe bawaan:\n• __len__ → len(obj)\n• __eq__ → obj == lain\n• __add__ → obj + lain\n• __getitem__ → obj[i]\n• __iter__ → for x in obj",
 w:[null,"__len__ mengembalikan panjang isi.","__len__ membuat len() bisa dipakai.","Isinya tiga."]},
{k:"oop2",t:"mc",lv:2,q:"Output kode ini:",kode:"class Titik:\n    def __init__(self, x):\n        self.x = x\n\nprint(Titik(1) == Titik(1))",o:["False","True","1","Error"],a:0,vr:"py",
 e:"Tanpa __eq__, == pada objek buatan sendiri membandingkan IDENTITAS (apakah objek yang sama persis di memori). Dua objek baru selalu berbeda walaupun isinya sama.",
 w:[null,"Belum ada __eq__ yang membandingkan isi.","== menghasilkan boolean.","Membandingkan objek itu sah."]},
{k:"oop2",t:"mc",lv:2,q:"Output kode ini:",kode:"class Uang:\n    def __init__(self, nilai):\n        self.nilai = nilai\n\n    def __add__(self, lain):\n        return Uang(self.nilai + lain.nilai)\n\ntotal = Uang(5000) + Uang(7000)\nprint(total.nilai)",o:["12000","50007000","Error: tidak bisa dijumlah","5000"],a:0,vr:"py",
 e:"a + b diterjemahkan Python menjadi a.__add__(b). Inilah cara pandas membuat df[\"a\"] + df[\"b\"] menjumlah seluruh kolom sekaligus (operator overloading).",
 w:[null,"Yang dijumlah angka, bukan teks.","__add__ membuat + bekerja.","Hasilnya objek Uang baru berisi jumlahnya."]},
{k:"oop2",t:"mc",lv:2,q:"Output kode ini:",kode:"class Persegi:\n    def __init__(self, sisi):\n        self.sisi = sisi\n\n    @property\n    def luas(self):\n        return self.sisi ** 2\n\np = Persegi(4)\np.sisi = 5\nprint(p.luas)",o:["25","16","<bound method>","Error"],a:0,vr:"py",
 e:"@property membuat method dibaca seperti atribut (tanpa kurung). Nilainya dihitung ulang setiap dibaca, jadi selalu mengikuti sisi terbaru.",
 w:[null,"sisi sudah diubah menjadi 5 sebelum dibaca.","property dipanggil otomatis.","Kodenya sah."]},
{k:"oop2",t:"mc",lv:3,q:"Output kode ini:",kode:"class Akun:\n    def __init__(self):\n        self._umur = 0\n\n    @property\n    def umur(self):\n        return self._umur\n\n    @umur.setter\n    def umur(self, v):\n        if v < 0:\n            raise ValueError(\"umur tidak boleh negatif\")\n        self._umur = v\n\na = Akun()\ntry:\n    a.umur = -3\nexcept ValueError as e:\n    print(\"ditolak:\", e)\nprint(a.umur)",o:["ditolak: umur tidak boleh negatif lalu 0","-3","ditolak lalu -3","Error tidak tertangkap"],a:0,vr:"py",vx:"ditolak: umur tidak boleh negatif\n0",
 e:"Setter dipanggil saat atribut diisi (a.umur = -3), jadi tempat yang pas untuk validasi. Nilai -3 ditolak, _umur tetap 0.\n• Garis bawah di _umur adalah konvensi: 'ini urusan dalam, jangan disentuh dari luar'.",
 w:[null,"Setter menolak nilai negatif.","Nilai lama tidak berubah setelah ditolak.","ValueError ditangkap except."]},
{k:"oop2",t:"mc",lv:2,q:"Output kode ini:",kode:"class Pelanggan:\n    jumlah = 0\n\n    def __init__(self, nama):\n        self.nama = nama\n        Pelanggan.jumlah += 1\n\nPelanggan(\"Ani\")\nPelanggan(\"Budi\")\nprint(Pelanggan.jumlah)",o:["2","0","1","Error"],a:0,vr:"py",
 e:"jumlah adalah atribut CLASS: satu nilai yang dipakai bersama semua objek. nama adalah atribut OBJEK (self.nama): tiap objek punya sendiri. Setiap objek baru menambah penghitung bersama.",
 w:[null,"Dua objek dibuat, masing-masing menambah 1.","Ada dua objek.","Kodenya sah."]},
{k:"oop2",t:"mc",lv:3,q:"Output kode ini:",kode:"class Siswa:\n    def __init__(self, nama, nilai):\n        self.nama = nama\n        self.nilai = nilai\n\n    @classmethod\n    def dari_teks(cls, teks):\n        nama, nilai = teks.split(\",\")\n        return cls(nama, int(nilai))\n\ns = Siswa.dari_teks(\"Ani,88\")\nprint(s.nama, s.nilai + 2)",o:["Ani 90","Ani 882","Ani,88 2","Error"],a:0,vr:"py",
 e:"@classmethod menerima class-nya sendiri (cls) sebagai argumen pertama, cocok untuk 'constructor alternatif': membuat objek dari teks, dict, atau baris CSV. Contoh bawaan: dict.fromkeys, datetime.fromisoformat.\n• @staticmethod tidak menerima self maupun cls; ia fungsi biasa yang 'dititipkan' di class.",
 w:[null,"nilai sudah diubah ke int.","Teks sudah dipecah dengan split.","Kodenya sah."]},
{k:"oop2",t:"mc",lv:2,q:"Output kode ini:",kode:"from dataclasses import dataclass\n\n@dataclass\nclass Titik:\n    x: int\n    y: int = 0\n\nprint(Titik(3), Titik(1, 2) == Titik(1, 2))",o:["Titik(x=3, y=0) True","<Titik object> False","Titik(3) True","Error: y belum diisi"],a:0,vr:"py",
 e:"@dataclass menulis __init__, __repr__ (tampilan), dan __eq__ (membandingkan isi) secara otomatis dari daftar atribut. Sangat cocok untuk objek yang tugasnya menyimpan data.",
 w:[null,"dataclass sudah membuat tampilan dan perbandingan isi.","Tampilan mencantumkan nama atribut.","y punya nilai bawaan 0."]},
{k:"oop2",t:"mc",lv:3,q:"Output kode ini:",kode:"class Hewan:\n    def __init__(self, nama):\n        self.nama = nama\n\nclass Kucing(Hewan):\n    def __init__(self, nama, warna):\n        super().__init__(nama)\n        self.warna = warna\n\nk = Kucing(\"Oyen\", \"oranye\")\nprint(k.nama, k.warna, isinstance(k, Hewan))",o:["Oyen oranye True","Oyen oranye False","None oranye True","Error"],a:0,vr:"py",
 e:"super().__init__(nama) menjalankan __init__ milik class induk sehingga self.nama terisi. isinstance mengecek class beserta seluruh induknya.",
 w:[null,"Kucing turunan Hewan.","super() sudah mengisi nama.","Kodenya sah."]},
{k:"oop2",t:"is",lv:1,q:"Method yang otomatis dijalankan saat objek dibuat: ____ (tulis lengkap dengan garis bawah)",a:["__init__"],
 e:"__init__ mengisi atribut awal objek. Parameter pertamanya selalu self, yaitu objek yang sedang dibuat."},
{k:"oop2",t:"is",lv:2,q:"Decorator dari modul dataclasses untuk membuat class penyimpan data secara otomatis: @____",a:["dataclass"],
 e:"from dataclasses import dataclass. Tambahkan frozen=True agar objeknya tidak bisa diubah."},

// ---- BAB 19: pustaka standar ----
{k:"stdlib",t:"mc",lv:1,q:"Output kode ini:",kode:"from datetime import date\n\nselisih = date(2026, 11, 23) - date(2026, 11, 1)\nprint(selisih.days)",o:["22","23","21","Error"],a:0,vr:"py",
 e:"Mengurangkan dua date menghasilkan timedelta (jarak waktu). .days berisi jumlah harinya. Berguna untuk umur piutang, lama langganan, atau sisa hari tenggat.",
 w:[null,"23 dikurangi 1 adalah 22.","Selisihnya 22 hari.","Mengurangkan tanggal itu sah."]},
{k:"stdlib",t:"mc",lv:2,q:"Output kode ini:",kode:"from datetime import datetime\n\nt = datetime(2026, 1, 5, 14, 30)\nprint(t.strftime(\"%d/%m/%Y %H:%M\"))",o:["05/01/2026 14:30","5/1/2026 2:30","2026-01-05 14:30","01/05/2026 14:30"],a:0,vr:"py",
 e:"strftime (string format time) mengubah tanggal menjadi teks dengan pola:\n• %d hari (2 digit), %m bulan (2 digit), %Y tahun 4 digit\n• %H jam 00–23, %M menit\nKebalikannya, strptime(teks, pola), membaca teks menjadi datetime.",
 w:[null,"%d dan %m selalu dua digit; %H format 24 jam.","Pola yang diminta memakai garis miring.","Itu format bulan/hari gaya Amerika."]},
{k:"stdlib",t:"mc",lv:2,q:"Output kode ini:",kode:"from datetime import date, timedelta\n\nprint(date(2026, 1, 30) + timedelta(days=3))",o:["2026-02-02","2026-01-33","2026-02-03","Error"],a:0,vr:"py",
 e:"timedelta mengurus pergantian bulan dan tahun kabisat secara otomatis. 30 Januari + 3 hari = 2 Februari. Jangan pernah menghitung tanggal dengan menambah angka hari secara manual.",
 w:[null,"Januari hanya 31 hari.","30 + 3 = 33 → 31 Jan, 1 Feb, 2 Feb.","Menjumlah date dan timedelta itu sah."]},
{k:"stdlib",t:"mc",lv:2,q:"Output kode ini:",kode:"from collections import Counter\n\npesanan = \"kopi teh kopi susu kopi teh\".split()\nprint(Counter(pesanan).most_common(2))",o:["[('kopi', 3), ('teh', 2)]","{'kopi': 3, 'teh': 2, 'susu': 1}","['kopi', 'teh']","[3, 2]"],a:0,vr:"py",
 e:"Counter menghitung kemunculan setiap item dalam satu baris. most_common(n) memberi n item terbanyak beserta jumlahnya, sudah urut. Soal 'produk terlaris' di tes coding sering selesai dengan ini.",
 w:[null,"most_common mengembalikan list pasangan, bukan seluruh dict.","Jumlahnya ikut disertakan.","Namanya ikut disertakan."]},
{k:"stdlib",t:"mc",lv:3,q:"Output kode ini:",kode:"from collections import defaultdict\n\nkelompok = defaultdict(list)\nfor nama, kota in [(\"Ani\", \"Solo\"), (\"Budi\", \"Bali\"), (\"Cita\", \"Solo\")]:\n    kelompok[kota].append(nama)\nprint(kelompok[\"Solo\"], kelompok[\"Medan\"])",o:["['Ani', 'Cita'] []","['Ani', 'Cita'] lalu KeyError","['Cita'] []","['Ani'] None"],a:0,vr:"py",
 e:"defaultdict(list) otomatis membuat list kosong saat kunci yang belum ada diakses. Tidak perlu lagi menulis if kota not in kelompok: kelompok[kota] = [].\n• Perhatikan: mengakses kelompok[\"Medan\"] juga MEMBUAT kunci Medan.",
 w:[null,"defaultdict tidak melempar KeyError.","Ani juga dari Solo.","Kunci baru diberi list kosong, bukan None."]},
{k:"stdlib",t:"mc",lv:2,q:"Output kode ini:",kode:"import re\n\nteks = \"Pesan 12 kopi dan 7 teh, total 19\"\nprint(re.findall(r\"\\d+\", teks))",o:["['12', '7', '19']","[12, 7, 19]","['1', '2', '7', '1', '9']","12"],a:0,vr:"py",
 e:"re.findall mengembalikan SEMUA potongan yang cocok dengan pola, dalam bentuk teks.\n• r\"…\" = raw string, supaya garis miring terbalik tidak diartikan khusus oleh Python.\n• \\d+ = satu digit atau lebih berurutan.",
 w:[null,"Hasil findall berupa teks, belum angka.","+ menggabungkan digit berurutan.","findall mengambil semua, bukan yang pertama."]},
{k:"stdlib",t:"mc",lv:2,q:"Output kode ini:",kode:"import re\n\nprint(re.sub(r\"\\s+\", \" \", \"  Halo    dunia  \").strip())",o:["Halo dunia","Halo    dunia","Halodunia"," Halo dunia "],a:0,vr:"py",
 e:"re.sub(pola, pengganti, teks) mengganti semua kecocokan. \\s+ = satu atau lebih spasi/tab berurutan, diganti satu spasi. strip() membuang spasi di ujung. Pola merapikan data teks yang kotor.",
 w:[null,"Spasi berurutan sudah diringkas.","Pengganti berupa satu spasi, bukan kosong.","strip membuang spasi di ujung."]},
{k:"stdlib",t:"mc",lv:2,q:"Output kode ini:",kode:"import json\n\ndata = {\"nama\": \"Ani\", \"aktif\": True, \"nilai\": None}\nprint(json.dumps(data))",o:["{\"nama\": \"Ani\", \"aktif\": true, \"nilai\": null}","{'nama': 'Ani', 'aktif': True, 'nilai': None}","{\"nama\":\"Ani\",\"aktif\":True,\"nilai\":None}","Error"],a:0,vr:"py",
 e:"json.dumps mengubah dict menjadi teks JSON: kutip ganda, True → true, None → null. Kebalikannya json.loads(teks). Untuk file: json.dump(data, f) dan json.load(f) (tanpa huruf s).",
 w:[null,"Itu tampilan dict Python, bukan JSON.","JSON menulis true dan null huruf kecil.","Semua tipe di dict ini bisa dijadikan JSON."]},
{k:"stdlib",t:"mc",lv:1,q:"Output kode ini:",kode:"from pathlib import Path\n\np = Path(\"data\") / \"laporan_2026.csv\"\nprint(p.name, p.stem, p.suffix)",o:["laporan_2026.csv laporan_2026 .csv","data laporan .csv","laporan_2026.csv csv laporan_2026","Error: tidak bisa membagi teks"],a:0,vr:"py",
 e:"pathlib mengurus alamat file dengan cara yang sama di Windows, Mac, dan Linux. Tanda / menyambung folder dan nama file.\n• name = nama lengkap, stem = tanpa ekstensi, suffix = ekstensi.\n• Path(\"data\").glob(\"*.csv\") mendaftar semua file CSV.",
 w:[null,"name mengambil bagian terakhir alamat.","suffix diawali titik.","Pada Path, / berarti menyambung alamat."]},
{k:"stdlib",t:"mc",lv:3,q:"Output kode ini:",kode:"print(round(2.5), round(3.5), round(2.675, 2))",o:["2 4 2.67","3 4 2.68","2 3 2.67","3 4 2.67"],a:0,vr:"py",
 e:"Dua kejutan pembulatan Python:\n• round memakai banker's rounding: .5 dibulatkan ke bilangan GENAP terdekat (2.5 → 2, 3.5 → 4). Ini berbeda dengan JavaScript dan Excel.\n• 2.675 tersimpan di komputer sebagai 2.67499999…, jadi menjadi 2.67.\nIngat: untuk uang yang harus tepat, pakai modul decimal.",
 w:[null,"Itu pembulatan gaya sekolah; Python tidak begitu.","3.5 dibulatkan ke genap terdekat, yaitu 4.","2.5 dibulatkan ke 2 (genap)."]},
{k:"stdlib",t:"mc",lv:1,q:"Output kode ini:",kode:"import math\n\nprint(math.ceil(7 / 2), math.floor(7 / 2), math.sqrt(16))",o:["4 3 4.0","3 4 4","4 3 4","3.5 3.5 4.0"],a:0,vr:"py",
 e:"ceil = pembulatan ke atas (contoh: 7 barang, 2 per kotak → butuh 4 kotak). floor = ke bawah. sqrt = akar kuadrat, hasilnya selalu float (4.0).",
 w:[null,"ceil ke atas, floor ke bawah.","sqrt menghasilkan float.","ceil dan floor menghasilkan bilangan bulat."]},
{k:"stdlib",t:"is",lv:1,q:"Modul bawaan yang menyediakan Counter dan defaultdict: ____",a:["collections"],
 e:"collections juga punya deque (antrean cepat dari dua ujung) dan namedtuple."},
{k:"stdlib",t:"is",lv:2,q:"Modul bawaan untuk membaca dan menulis file CSV: import ____",a:["csv"],
 e:"csv.DictReader(f) membaca tiap baris sebagai dict berdasarkan judul kolom. Untuk analisis data besar, pakai pandas.read_csv."},

// ---- BAB 20: lingkungan kerja ----
{k:"kerja",t:"mc",lv:1,q:"Gunanya virtual environment (venv) di proyek Python:",o:["Setiap proyek punya kumpulan paket sendiri, tidak bertabrakan dengan proyek lain","Membuat Python berjalan lebih cepat","Menyembunyikan kode dari orang lain","Mengganti Python dengan versi online"],a:0,
 e:"Proyek A butuh pandas 1.5, proyek B butuh pandas 2.2. Tanpa venv, keduanya berebut satu tempat instalasi. Dengan venv, setiap proyek punya folder paket sendiri (.venv).",
 w:[null,"Kecepatan tidak berubah.","Bukan untuk keamanan kode.","venv tetap lokal di komputermu."]},
{k:"kerja",t:"mc",lv:1,q:"Perintah membuat virtual environment bernama .venv:",o:["python -m venv .venv","pip install venv","python venv create","venv new .venv"],a:0,
 e:"python -m venv .venv membuat folder .venv. Lalu aktifkan:\n• Windows: .venv\\Scripts\\activate\n• Mac/Linux: source .venv/bin/activate\nSetelah aktif, nama (.venv) muncul di awal baris terminal.",
 w:[null,"venv sudah bawaan Python, tidak perlu dipasang.","Sintaksnya bukan begitu.","Tidak ada perintah venv new."]},
{k:"kerja",t:"mc",lv:2,q:"Agar teman bisa memasang paket yang sama persis dengan proyekmu, kamu menjalankan…",o:["pip freeze > requirements.txt, lalu teman menjalankan pip install -r requirements.txt","Mengirim folder .venv lewat Google Drive","pip list","Menulis daftar paket di README saja"],a:0,
 e:"requirements.txt mencatat paket beserta versinya, misalnya pandas==2.2.3. File ini di-commit ke Git; folder .venv tidak (masukkan ke .gitignore).",
 w:[null,".venv terikat ke komputer dan alamat folder tertentu.","pip list hanya menampilkan, tidak menyimpan.","Tanpa versi pasti, hasil bisa berbeda."]},
{k:"kerja",t:"mc",lv:2,q:"Kode if __name__ == \"__main__\": main() di akhir file berarti…",o:["main() hanya jalan kalau file dijalankan langsung, bukan saat di-import file lain","main() dijalankan dua kali","Wajib ada di setiap file Python","Mengubah nama file menjadi main"],a:0,
 e:"Saat file dijalankan langsung (python alat.py), __name__ bernilai \"__main__\". Saat di-import, __name__ berisi nama modulnya. Dengan pola ini, fungsi di file bisa dipakai ulang tanpa ikut menjalankan programnya.",
 w:[null,"Hanya dijalankan sekali, dan hanya saat file dijalankan langsung.","Tidak wajib, tapi kebiasaan baik.","Nama file tidak berubah."]},
{k:"kerja",t:"mc",lv:2,q:"Output kode ini:",kode:"def tambah(a: int, b: int) -> int:\n    return a + b\n\nprint(tambah(\"kopi\", \"susu\"))",o:["kopisusu","TypeError","0","None"],a:0,vr:"py",
 e:"Type hint (: int, -> int) hanya petunjuk untuk manusia dan alat seperti VS Code atau mypy. Python TIDAK memeriksanya saat program berjalan, jadi dua teks tetap digabung.\n• Manfaatnya tetap besar: saran otomatis editor, dokumentasi, dan pemeriksaan dengan mypy sebelum dijalankan.",
 w:[null,"Python tidak menolak berdasarkan type hint.","Teks digabung, bukan dihitung.","Fungsi mengembalikan hasil gabungan."]},
{k:"kerja",t:"mc",lv:2,q:"Apa yang dicetak?",kode:"def diskon(harga, persen):\n    return harga - harga * persen // 100\n\nassert diskon(10000, 10) == 9000\ntry:\n    assert diskon(10000, 10) == 9500, \"hitungan diskon salah\"\nexcept AssertionError as e:\n    print(\"Gagal:\", e)",o:["Gagal: hitungan diskon salah","Tidak mencetak apa-apa","True","Gagal: 9000"],a:0,vr:"py",
 e:"assert syarat, pesan: kalau syarat benar, diam saja; kalau salah, lempar AssertionError dengan pesan itu. Assert pertama lolos (9000 benar), assert kedua gagal.\n• Ini bentuk tes paling sederhana, dan pytest memakai assert yang sama.",
 w:[null,"Assert kedua gagal karena hasilnya 9000.","assert tidak mencetak True.","Pesan yang dicetak adalah teks setelah koma."]},
{k:"kerja",t:"mc",lv:2,q:"Agar pytest menemukan tesmu secara otomatis, nama file dan fungsi tes harus…",o:["File diawali test_ dan fungsi diawali test_","File bernama tests.txt","Fungsi diakhiri _test()","Ditulis di dalam main()"],a:0,
 e:"Contoh: file test_harga.py berisi def test_diskon(): assert diskon(10000, 10) == 9000. Jalankan pytest di terminal, dan semua tes ditemukan, dijalankan, lalu dilaporkan lulus atau gagal.",
 w:[null,"Tes ditulis di file .py.","Awalan test_ yang dicari pytest.","Tes ditulis sebagai fungsi terpisah."]},
{k:"kerja",t:"mc",lv:1,q:"Output kode ini:",kode:"harga = 1234567.891\nprint(f\"Rp{harga:,.0f}\", f\"{0.4567:.1%}\")",o:["Rp1,234,568 45.7%","Rp1.234.568 45.7%","Rp1234567.891 0.4567","Rp1,234,567 46%"],a:0,vr:"py",
 e:"Format di dalam f-string:\n• :,.0f = pemisah ribuan koma, 0 angka desimal (dibulatkan).\n• :.1% = dikali 100 dan diberi tanda persen, 1 angka desimal.\n• Format Indonesia (titik): f\"{harga:,.0f}\".replace(\",\", \".\").",
 w:[null,"Python memakai koma sebagai pemisah bawaan.","Format membuat angka lebih rapi.","Dibulatkan ke atas menjadi 568, dan persen punya 1 desimal."]},
{k:"kerja",t:"mc",lv:1,q:"Gaya penamaan variabel dan fungsi yang dianjurkan PEP 8 (pedoman resmi Python):",o:["snake_case, contoh total_harga","camelCase, contoh totalHarga","PascalCase, contoh TotalHarga","KAPITAL, contoh TOTALHARGA"],a:0,
 e:"PEP 8: variabel & fungsi snake_case, class PascalCase (class ProdukDigital), konstanta KAPITAL (PPN = 0.11), indentasi 4 spasi. Alat seperti ruff atau black bisa merapikan kode otomatis.",
 w:[null,"camelCase gaya JavaScript.","PascalCase untuk nama class.","KAPITAL untuk konstanta."]},
{k:"kerja",t:"is",lv:1,q:"Nama file yang lazim berisi daftar paket proyek beserta versinya: ____.txt",a:["requirements"],
 e:"Dibuat dengan pip freeze > requirements.txt, dipasang dengan pip install -r requirements.txt."},
{k:"kerja",t:"is",lv:2,q:"Kata kunci untuk memastikan sebuah syarat benar, melempar AssertionError jika salah: ____ x > 0",a:["assert"],
 e:"assert cocok untuk tes dan pemeriksaan internal. Untuk memvalidasi input pengguna, pakai if lalu raise ValueError, karena assert bisa dimatikan dengan python -O."},

// ---- BAB 21: proyek mini ----
{k:"proyek",t:"mc",lv:1,q:"Kalkulator sederhana. Output kode ini:",kode:"operasi = {\n    \"+\": lambda a, b: a + b,\n    \"-\": lambda a, b: a - b,\n    \"*\": lambda a, b: a * b,\n    \"/\": lambda a, b: a / b,\n}\nprint(operasi[\"/\"](9, 3), operasi[\"*\"](2, 5))",o:["3.0 10","3 10","3.0 25","Error"],a:0,vr:"py",
 e:"Dict berisi fungsi menggantikan deretan if-elif yang panjang: kunci = simbol operator, nilai = fungsinya. Operator / di Python selalu menghasilkan float (3.0); pakai // untuk pembagian bulat.",
 w:[null,"/ selalu menghasilkan float.","2 * 5 = 10.","Mengakses fungsi dari dict lalu memanggilnya itu sah."]},
{k:"proyek",t:"mc",lv:2,q:"Inti game tebak angka. Output kode ini:",kode:"rahasia = 7\npercobaan = 0\nfor tebakan in [3, 9, 7, 5]:\n    percobaan += 1\n    if tebakan < rahasia:\n        print(\"terlalu kecil\")\n    elif tebakan > rahasia:\n        print(\"terlalu besar\")\n    else:\n        print(\"benar dalam\", percobaan, \"kali\")\n        break",o:["terlalu kecil, terlalu besar, benar dalam 3 kali","terlalu kecil, terlalu besar, benar dalam 3 kali, terlalu kecil","benar dalam 3 kali","terlalu kecil, terlalu besar, benar dalam 4 kali"],a:0,vr:"py",vx:"terlalu kecil\nterlalu besar\nbenar dalam 3 kali",
 e:"Di program aslinya, tebakan datang dari input() dan rahasia dari random.randint(1, 100). Logikanya sama:\n1. Hitung percobaan setiap putaran.\n2. Bandingkan dengan rahasia dan beri petunjuk.\n3. break menghentikan perulangan begitu benar, jadi 5 tidak pernah diperiksa.",
 w:[null,"break menghentikan perulangan.","Petunjuk juga dicetak untuk tebakan yang salah.","Tebakan ketiga sudah benar."]},
{k:"proyek",t:"mc",lv:1,q:"Fungsi nilai huruf. Output kode ini:",kode:"def huruf(n):\n    if n >= 85:\n        return \"A\"\n    elif n >= 70:\n        return \"B\"\n    elif n >= 55:\n        return \"C\"\n    return \"D\"\n\nnilai = [90, 72, 55, 40]\nprint(\"\".join(huruf(n) for n in nilai))",o:["ABCD","AABC","ABDD","AACD"],a:0,vr:"py",
 e:"Urutan elif penting: diperiksa dari atas, berhenti di syarat pertama yang benar. Karena itu syarat terbesar ditulis paling atas. 55 memenuhi n >= 55, jadi C.",
 w:[null,"72 tidak mencapai 85.","55 memenuhi syarat C (>=).","72 masuk B."]},
{k:"proyek",t:"mc",lv:2,q:"Validasi input angka. Output kode ini:",kode:"def baca_umur(teks):\n    try:\n        umur = int(teks)\n    except ValueError:\n        return \"harus angka\"\n    if umur < 0:\n        return \"tidak boleh negatif\"\n    return umur\n\nprint(baca_umur(\"dua puluh\"), baca_umur(\"-5\"), baca_umur(\"21\"))",o:["harus angka tidak boleh negatif 21","Error","harus angka -5 21","None None 21"],a:0,vr:"py",
 e:"Pola wajib untuk input pengguna:\n1. Coba ubah ke angka dengan int() di dalam try.\n2. Tangkap ValueError kalau isinya bukan angka.\n3. Periksa aturan bisnis (tidak negatif, maksimal sekian).\nDi program interaktif, bungkus dengan while True agar pengguna diminta mengulang sampai benar.",
 w:[null,"ValueError sudah ditangkap.","-5 ditolak oleh aturan tidak negatif.","Setiap cabang mengembalikan nilai."]},
{k:"proyek",t:"mc",lv:2,q:"Pengelola stok. Output kode ini:",kode:"stok = {\"kopi\": 5, \"teh\": 2}\n\ndef jual(barang, qty):\n    if stok.get(barang, 0) < qty:\n        return f\"stok {barang} kurang\"\n    stok[barang] -= qty\n    return f\"terjual, sisa {stok[barang]}\"\n\nprint(jual(\"kopi\", 3))\nprint(jual(\"teh\", 3))\nprint(jual(\"susu\", 1))",o:["terjual, sisa 2 / stok teh kurang / stok susu kurang","terjual, sisa 2 / terjual, sisa -1 / KeyError","terjual, sisa 3 / stok teh kurang / stok susu kurang","stok kopi kurang / stok teh kurang / stok susu kurang"],a:0,vr:"py",vx:"terjual, sisa 2\nstok teh kurang\nstok susu kurang",
 e:"stok.get(barang, 0) aman untuk barang yang tidak ada (susu → 0), sehingga tidak ada KeyError. Validasi dilakukan SEBELUM mengubah data, jadi stok tidak pernah negatif.",
 w:[null,"Validasi mencegah stok negatif dan get mencegah KeyError.","Sisa kopi 5 - 3 = 2.","Stok kopi cukup untuk 3."]},
{k:"proyek",t:"mc",lv:1,q:"Cek palindrom. Output kode ini:",kode:"def palindrom(kata):\n    bersih = kata.lower().replace(\" \", \"\")\n    return bersih == bersih[::-1]\n\nprint(palindrom(\"Kasur ini rusak\"), palindrom(\"kopi\"))",o:["True False","False False","True True","False True"],a:0,vr:"py",
 e:"[::-1] membalik urutan teks. Sebelum dibandingkan, teks dirapikan: huruf kecil semua dan spasi dibuang. \"kasurinirusak\" dibaca sama dari dua arah.",
 w:[null,"Setelah dirapikan, kalimat pertama palindrom.","\"kopi\" dibalik menjadi \"ipok\".","Terbalik."]},
{k:"proyek",t:"mc",lv:2,q:"FizzBuzz (soal tes coding paling terkenal). Berapa yang dicetak?",kode:"hasil = []\nfor n in range(1, 16):\n    if n % 15 == 0:\n        hasil.append(\"FizzBuzz\")\n    elif n % 3 == 0:\n        hasil.append(\"Fizz\")\n    elif n % 5 == 0:\n        hasil.append(\"Buzz\")\n    else:\n        hasil.append(str(n))\nprint(hasil.count(\"Fizz\"), hasil.count(\"Buzz\"), hasil[-1])",o:["4 2 FizzBuzz","5 3 FizzBuzz","4 2 15","5 3 15"],a:0,vr:"py",
 e:"Kuncinya: syarat 15 (kelipatan 3 DAN 5) harus diperiksa PALING DULU, kalau tidak 15 akan tertangkap sebagai Fizz.\n• Fizz: 3, 6, 9, 12 → 4.\n• Buzz: 5, 10 → 2.\n• 15 → FizzBuzz.",
 w:[null,"15 tidak dihitung sebagai Fizz atau Buzz.","Item terakhir adalah teks FizzBuzz.","Keduanya keliru."]},
{k:"proyek",t:"mc",lv:2,q:"Menyimpan data agar tidak hilang saat program ditutup. Kode yang benar:",o:["with open(\"data.json\", \"w\", encoding=\"utf-8\") as f: json.dump(data, f)","open(\"data.json\").write(data)","json.save(data, \"data.json\")","data.json = data"],a:0,
 e:"with menutup file otomatis bahkan jika terjadi error. Mode \"w\" menulis (menimpa), \"a\" menambah di akhir, \"r\" membaca. Saat program dibuka lagi: with open(\"data.json\", encoding=\"utf-8\") as f: data = json.load(f).",
 w:[null,"Mode bawaan \"r\" hanya membaca, dan write butuh teks.","json tidak punya fungsi save.","Itu bukan cara menulis file."]},
{k:"proyek",t:"mc",lv:1,q:"Program menu yang terus berjalan sampai pengguna memilih Keluar biasanya memakai…",o:["while True: … lalu break saat pilihan keluar","for i in range(100)","if saja tanpa perulangan","rekursi tanpa batas"],a:0,
 e:"Kerangka program menu:\n1. while True:\n2.     tampilkan menu, baca pilihan = input(\"Pilih: \")\n3.     if pilihan == \"1\": tambah()\n4.     elif pilihan == \"0\": break\n5.     else: print(\"Pilihan tidak dikenal\")",
 w:[null,"Jumlah putaran tidak diketahui di awal.","if hanya berjalan sekali.","Rekursi terus-menerus akan memicu RecursionError."]},
{k:"proyek",t:"is",lv:1,q:"Slicing untuk membalik urutan teks atau list: kata[____]",a:["::-1"],
 e:"Bentuk lengkap slicing [awal:akhir:langkah]; langkah -1 berarti berjalan mundur dari belakang."},
{k:"proyek",t:"is",lv:2,q:"Fungsi dari modul random untuk mengambil bilangan bulat acak termasuk kedua batas: random.____(1, 100)",a:["randint"],
 e:"randint(1, 100) bisa menghasilkan 1 dan 100. random.choice(list) memilih satu item, random.shuffle(list) mengacak urutan."}
);

MATERI_PYTHON.push(
{k:"comprehension",judul:"Comprehension & Fungsi Bawaan Andalan",materi:`
<!--pemula--><h4>Untuk pemula: menulis perulangan dalam satu baris</h4>
<p>Kamu sudah bisa membuat list baru dengan <code>for</code> dan <code>append</code>. Comprehension adalah cara singkat menulis hal yang sama. Programmer Python memakainya setiap hari, dan soal tes coding sering memuatnya.</p>
<pre><code># cara panjang
kuadrat = []
for x in range(5):
    kuadrat.append(x * x)

# comprehension: hasilnya sama persis
kuadrat = [x * x for x in range(5)]     # [0, 1, 4, 9, 16]</code></pre>
<p>Cara membacanya dari kiri: "<b>x * x</b>, untuk setiap <b>x</b> di <b>range(5)</b>".</p><!--/pemula-->
<h4>1. Empat bentuk comprehension</h4>
<table class="mini-pivot"><tr><th>Bentuk</th><th>Kurung</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td>list</td><td><code>[ ]</code></td><td><code>[n * 2 for n in [1, 2]]</code></td><td><code>[2, 4]</code></td></tr>
<tr><td>dict</td><td><code>{k: v}</code></td><td><code>{n: n * n for n in [1, 2]}</code></td><td><code>{1: 1, 2: 4}</code></td></tr>
<tr><td>set</td><td><code>{ }</code></td><td><code>{n % 3 for n in range(6)}</code></td><td><code>{0, 1, 2}</code></td></tr>
<tr><td>generator</td><td><code>( )</code></td><td><code>sum(n for n in range(4))</code></td><td><code>6</code></td></tr></table>
<h4>2. Menyaring dan mengubah</h4>
<pre><code>nilai = [45, 80, 62, 91]

lulus  = [n for n in nilai if n &gt;= 60]                       # menyaring: [80, 62, 91]
status = ["lulus" if n &gt;= 60 else "remedial" for n in nilai]  # mengubah semua item
bonus  = [n + 5 for n in nilai if n &lt; 60]                   # keduanya: [50]</code></pre>
<div class="catatan">Pegangan: <code>if</code> di <b>belakang</b> <code>for</code> = saringan (item bisa dibuang). <code>if … else …</code> di <b>depan</b> <code>for</code> = mengubah nilai (semua item tetap ada).</div>
<h4>3. Fungsi bawaan yang wajib dikenal</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Kegunaan</th><th>Contoh</th></tr>
<tr><td><code>enumerate</code></td><td>nomor urut + isi</td><td><code>for i, x in enumerate(daftar, start=1)</code></td></tr>
<tr><td><code>zip</code></td><td>jalan bersama beberapa list</td><td><code>for nama, n in zip(nama2, nilai2)</code></td></tr>
<tr><td><code>sorted</code></td><td>list baru yang terurut</td><td><code>sorted(data, key=len, reverse=True)</code></td></tr>
<tr><td><code>min</code> / <code>max</code></td><td>terkecil / terbesar</td><td><code>max(produk, key=lambda p: p["harga"])</code></td></tr>
<tr><td><code>sum</code></td><td>jumlah</td><td><code>sum(p["harga"] for p in keranjang)</code></td></tr>
<tr><td><code>any</code> / <code>all</code></td><td>ada yang benar / semua benar</td><td><code>all(n &gt;= 60 for n in nilai)</code></td></tr>
<tr><td><code>map</code></td><td>terapkan fungsi ke semua item</td><td><code>list(map(int, "1 2 3".split()))</code></td></tr>
<tr><td><code>filter</code></td><td>saring dengan fungsi</td><td><code>list(filter(str.isdigit, ["1", "a"]))</code></td></tr>
<tr><td><code>reversed</code></td><td>urutan terbalik</td><td><code>for x in reversed(daftar)</code></td></tr></table>
<h4>4. lambda dan key</h4>
<p><code>lambda</code> adalah fungsi kecil tanpa nama: <code>lambda x: x[1]</code> sama dengan <code>def ambil(x): return x[1]</code>. Paling sering dipakai sebagai <code>key</code>, yaitu "urutkan berdasarkan apa".</p>
<pre><code>siswa = [("Ani", 80), ("Budi", 95), ("Cita", 70)]
sorted(siswa, key=lambda s: s[1])                 # urut nilai terkecil
max(siswa, key=lambda s: s[1])                    # ("Budi", 95)
sorted(siswa, key=lambda s: (-s[1], s[0]))        # nilai menurun, lalu nama A-Z</code></pre>
<div class="catatan">Jebakan: <code>[[0] * 3] * 3</code> membuat 3 referensi ke list yang SAMA. Untuk tabel/papan, selalu pakai <code>[[0] * 3 for _ in range(3)]</code>. Tanda <code>_</code> adalah nama variabel untuk nilai yang tidak dipakai.</div>
<div class="praktik"><b>Coba sendiri:</b> dari <code>kata = ["apel", "Jeruk", "kiwi", "mangga"]</code>, buat (1) list kata yang panjangnya lebih dari 4, (2) dict kata → jumlah huruf, (3) kata terpanjang dengan <code>max(key=len)</code>, dan (4) list bernomor "1. apel", "2. Jeruk" … dengan <code>enumerate</code>.</div>
`},
{k:"fungsilanjut",judul:"Fungsi Lanjut: *args, **kwargs, Scope, Rekursi & Decorator",materi:`
<!--pemula--><h4>Untuk pemula: fungsi yang lebih lentur</h4>
<p>Di bab Fungsi kamu membuat fungsi dengan jumlah parameter tetap. Kenyataannya, banyak fungsi perlu menerima argumen yang jumlahnya tidak pasti (seperti <code>print</code> yang menerima berapa pun nilai), atau perlu "dibungkus" dengan perilaku tambahan. Bab ini membahas alat-alat untuk itu.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td><code>*args</code></td><td>"tampung semua argumen sisa" menjadi tuple</td></tr>
<tr><td><code>**kwargs</code></td><td>"tampung semua argumen bernama" menjadi dict</td></tr>
<tr><td>scope</td><td>wilayah tempat nama variabel dikenal</td></tr>
<tr><td>rekursi</td><td>fungsi yang memanggil dirinya sendiri</td></tr>
<tr><td>decorator</td><td>"pembungkus" yang menambah kemampuan fungsi tanpa mengubah isinya</td></tr></table><!--/pemula-->
<h4>1. Jenis-jenis parameter</h4>
<pre><code>def pesan(menu, jumlah=1, *tambahan, catatan="", **info):
    print(menu, jumlah, tambahan, catatan, info)

pesan("kopi")                                    # kopi 1 () '' {}
pesan("kopi", 2, "es", "gula aren", catatan="cepat", meja=5)
# kopi 2 ('es', 'gula aren') cepat {'meja': 5}</code></pre>
<table class="mini-pivot"><tr><th>Jenis</th><th>Contoh</th><th>Catatan</th></tr>
<tr><td>posisi</td><td><code>menu</code></td><td>wajib, dicocokkan berdasarkan urutan</td></tr>
<tr><td>nilai bawaan</td><td><code>jumlah=1</code></td><td>boleh dilewati</td></tr>
<tr><td><code>*args</code></td><td><code>*tambahan</code></td><td>tuple berisi argumen posisi berlebih</td></tr>
<tr><td>keyword</td><td><code>catatan=""</code></td><td>dipanggil dengan nama</td></tr>
<tr><td><code>**kwargs</code></td><td><code>**info</code></td><td>dict berisi argumen bernama berlebih</td></tr></table>
<p>Bintang juga bisa dipakai saat <b>memanggil</b> untuk membongkar: <code>print(*[1, 2, 3])</code> sama dengan <code>print(1, 2, 3)</code>, dan <code>f(**{"a": 1})</code> sama dengan <code>f(a=1)</code>.</p>
<div class="catatan">Jebakan nilai bawaan yang bisa berubah: <code>def f(x, daftar=[])</code>. List itu dibuat <b>sekali saja</b> dan isinya menumpuk dari pemanggilan ke pemanggilan. Tulis <code>daftar=None</code> lalu <code>if daftar is None: daftar = []</code>.</div>
<h4>2. Scope: aturan LEGB</h4>
<p>Saat Python mencari sebuah nama, ia memeriksa urutan ini dan berhenti di yang pertama ketemu:</p>
<ol><li><b>L</b>ocal: di dalam fungsi yang sedang berjalan.</li><li><b>E</b>nclosing: di fungsi luar (kalau fungsi bersarang).</li><li><b>G</b>lobal: di tingkat atas file.</li><li><b>B</b>uilt-in: nama bawaan seperti <code>len</code>, <code>print</code>.</li></ol>
<pre><code>total = 0
def tambah(n):
    total = total + n     # UnboundLocalError! "total" dianggap lokal karena diisi

# cara yang rapi: kirim dan kembalikan
def tambah(total, n):
    return total + n</code></pre>
<p>Ada kata kunci <code>global</code> (dan <code>nonlocal</code> untuk fungsi bersarang), tapi pakailah seperlunya, karena alur data jadi sulit dilacak.</p>
<h4>3. Rekursi</h4>
<p>Rekursi memecah masalah menjadi versi yang lebih kecil dari masalah yang sama. Setiap fungsi rekursif butuh dua bagian:</p>
<ul><li><b>Kasus dasar</b>: kapan berhenti (tanpa memanggil diri lagi).</li><li><b>Langkah rekursif</b>: memanggil diri dengan masalah yang lebih kecil.</li></ul>
<pre><code>def hitung_mundur(n):
    if n == 0:                 # kasus dasar
        print("Mulai!")
        return
    print(n)
    hitung_mundur(n - 1)       # langkah rekursif

def jumlah_isi(folder):        # contoh nyata: struktur bertingkat
    return sum(jumlah_isi(f) if f.is_dir() else 1 for f in folder.iterdir())</code></pre>
<div class="catatan">Python membatasi kedalaman rekursi sekitar 1.000 tingkat (RecursionError). Untuk perulangan biasa yang sangat panjang, <code>for</code>/<code>while</code> lebih aman.</div>
<h4>4. Fungsi sebagai nilai dan decorator</h4>
<p>Fungsi di Python bisa disimpan di variabel, dimasukkan ke list/dict, dikirim sebagai argumen, dan dikembalikan dari fungsi lain. Decorator memanfaatkan semua itu.</p>
<pre><code>import time

def ukur_waktu(fungsi):
    def bungkus(*args, **kwargs):
        mulai = time.perf_counter()
        hasil = fungsi(*args, **kwargs)        # jalankan fungsi aslinya
        print(f"{fungsi.__name__}: {time.perf_counter() - mulai:.3f} detik")
        return hasil
    return bungkus

@ukur_waktu                                    # sama dengan: proses = ukur_waktu(proses)
def proses(n):
    return sum(range(n))

proses(10_000_000)                             # proses: 0.210 detik</code></pre>
<p>Fungsi kecil satu baris bisa ditulis dengan <code>lambda</code>: <code>kali = lambda a, b: a * b</code> sama dengan <code>def kali(a, b): return a * b</code>. Hasil ekspresi setelah titik dua otomatis dikembalikan.</p>
<p>Decorator yang akan kamu temui: <code>@app.route("/")</code> di Flask, <code>@api.depends(...)</code> di Odoo, <code>@property</code> dan <code>@dataclass</code> di bab OOP lanjut, <code>@pytest.fixture</code> di testing.</p>
<div class="praktik"><b>Coba sendiri:</b> (1) buat <code>rata_rata(*nilai)</code> yang mengembalikan 0 kalau tidak ada nilai; (2) buat fungsi rekursif <code>pangkat(a, n)</code>; (3) buat decorator <code>catat</code> yang mencetak "memanggil nama_fungsi" sebelum fungsi dijalankan.</div>
`},
{k:"iterator",judul:"Iterator & Generator (yield)",materi:`
<!--pemula--><h4>Untuk pemula: mengambil data satu per satu</h4>
<p>Bayangkan antrean di loket. Petugas tidak memanggil semua orang sekaligus; ia memanggil "berikutnya!" satu per satu. <b>Iterator</b> bekerja seperti itu: ia memberi satu item setiap kali diminta, dan ingat sampai mana terakhir kali. <b>Generator</b> adalah cara mudah membuat iterator sendiri.</p>
<p>Kenapa penting? Karena data sungguhan bisa sangat besar (file log jutaan baris, hasil query besar). Mengambil satu per satu berarti memori yang terpakai tetap kecil.</p><!--/pemula-->
<h4>1. Iterable dan iterator</h4>
<table class="mini-pivot"><tr><th>Istilah</th><th>Arti</th><th>Contoh</th></tr>
<tr><td>iterable</td><td>sesuatu yang bisa diulang dengan <code>for</code></td><td>list, tuple, str, dict, set, file, range</td></tr>
<tr><td>iterator</td><td>"penunjuk" yang memberi item berikutnya lewat <code>next()</code></td><td><code>iter([1, 2])</code>, objek file, generator</td></tr></table>
<pre><code>it = iter(["a", "b"])
next(it)     # 'a'
next(it)     # 'b'
next(it)     # StopIteration: sudah habis

# inilah yang dilakukan for di balik layar:
for x in ["a", "b"]:
    print(x)</code></pre>
<h4>2. Generator dengan yield</h4>
<pre><code>def hitung_mundur(n):
    while n &gt; 0:
        yield n        # serahkan n, lalu berhenti sejenak di sini
        n -= 1
    yield "Mulai!"

for x in hitung_mundur(3):
    print(x)           # 3, 2, 1, Mulai!</code></pre>
<table class="mini-pivot"><tr><th></th><th><code>return</code></th><th><code>yield</code></th></tr>
<tr><td>Berapa kali menyerahkan nilai</td><td>sekali</td><td>berkali-kali</td></tr>
<tr><td>Setelahnya</td><td>fungsi selesai selamanya</td><td>fungsi dijeda, lanjut saat diminta lagi</td></tr>
<tr><td>Memanggil fungsinya</td><td>langsung menjalankan isinya</td><td>hanya membuat generator; isi baru jalan saat <code>next()</code></td></tr></table>
<h4>3. Generator expression</h4>
<pre><code>total = sum(x * x for x in range(1_000_000))    # tidak membuat list sejuta item
ada_error = any("ERROR" in b for b in open("app.log", encoding="utf-8"))</code></pre>
<h4>4. Contoh nyata: membaca file besar</h4>
<pre><code>def baris_error(nama_file):
    with open(nama_file, encoding="utf-8") as f:
        for baris in f:                     # file dibaca baris per baris
            if "ERROR" in baris:
                yield baris.strip()

for b in baris_error("server.log"):
    print(b)</code></pre>
<h4>5. Perkakas dari itertools</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Kegunaan</th></tr>
<tr><td><code>islice(it, n)</code></td><td>ambil n item pertama dari iterator (termasuk yang tak terbatas)</td></tr>
<tr><td><code>count(1)</code></td><td>1, 2, 3, … tanpa akhir</td></tr>
<tr><td><code>chain(a, b)</code></td><td>sambung beberapa iterable</td></tr>
<tr><td><code>groupby(data, key)</code></td><td>kelompokkan item berurutan yang sama (urutkan dulu!)</td></tr>
<tr><td><code>combinations(x, 2)</code></td><td>semua pasangan tanpa urutan</td></tr></table>
<div class="catatan">Generator hanya bisa dipakai <b>sekali</b>. Setelah habis, ia kosong. Kalau datanya perlu dibaca berulang kali dan ukurannya kecil, ubah ke list: <code>data = list(gen)</code>.</div>
<div class="praktik"><b>Coba sendiri:</b> buat generator <code>fibonacci()</code> tanpa akhir (0, 1, 1, 2, 3, 5, …), lalu cetak 10 angka pertamanya dengan <code>islice</code>.</div>
`},
{k:"oop2",judul:"OOP Lanjut: Dunder Method, @property & dataclass",materi:`
<!--pemula--><h4>Untuk pemula: membuat objek buatanmu terasa "asli"</h4>
<p>Di bab OOP kamu sudah membuat class dengan <code>__init__</code> dan method biasa. Sekarang kita membuat objek buatan sendiri bisa di-<code>print</code> dengan rapi, dibandingkan dengan <code>==</code>, dijumlah dengan <code>+</code>, dan dihitung panjangnya dengan <code>len()</code>, persis seperti tipe bawaan Python. Kuncinya: method khusus berawalan dan berakhiran dua garis bawah, yang disebut <b>dunder method</b>.</p><!--/pemula-->
<h4>1. Dunder method yang paling sering dipakai</h4>
<table class="mini-pivot"><tr><th>Method</th><th>Dipanggil saat…</th><th>Contoh</th></tr>
<tr><td><code>__init__</code></td><td>objek dibuat</td><td><code>Produk("Kopi", 18000)</code></td></tr>
<tr><td><code>__str__</code></td><td><code>print(obj)</code>, <code>str(obj)</code></td><td>tampilan untuk pengguna</td></tr>
<tr><td><code>__repr__</code></td><td>tampil di console / di dalam list</td><td>tampilan untuk programmer</td></tr>
<tr><td><code>__eq__</code></td><td><code>a == b</code></td><td>bandingkan isi</td></tr>
<tr><td><code>__lt__</code></td><td><code>a &lt; b</code>, <code>sorted()</code></td><td>urutan</td></tr>
<tr><td><code>__add__</code></td><td><code>a + b</code></td><td>menjumlah uang, vektor</td></tr>
<tr><td><code>__len__</code></td><td><code>len(obj)</code></td><td>jumlah isi keranjang</td></tr>
<tr><td><code>__getitem__</code></td><td><code>obj[i]</code></td><td>akses seperti list</td></tr>
<tr><td><code>__iter__</code></td><td><code>for x in obj</code></td><td>bisa diulang</td></tr></table>
<pre><code>class Keranjang:
    def __init__(self):
        self.isi = []

    def tambah(self, nama, harga):
        self.isi.append((nama, harga))
        return self                       # agar bisa dirangkai

    def __len__(self):
        return len(self.isi)

    def __iter__(self):
        return iter(self.isi)

    def __str__(self):
        return f"Keranjang({len(self)} barang)"

k = Keranjang().tambah("kopi", 18000).tambah("roti", 12000)
print(k, len(k))                          # Keranjang(2 barang) 2
for nama, harga in k:
    print(nama, harga)</code></pre>
<h4>2. Atribut class vs atribut objek</h4>
<pre><code>class Pelanggan:
    jumlah = 0                    # atribut CLASS: satu untuk semua
    def __init__(self, nama):
        self.nama = nama          # atribut OBJEK: milik masing-masing
        Pelanggan.jumlah += 1</code></pre>
<h4>3. @property: atribut yang dihitung dan divalidasi</h4>
<pre><code>class Produk:
    def __init__(self, nama, harga):
        self.nama = nama
        self.harga = harga            # lewat setter di bawah, jadi ikut divalidasi

    @property
    def harga(self):
        return self._harga

    @harga.setter
    def harga(self, nilai):
        if nilai &lt; 0:
            raise ValueError("Harga tidak boleh negatif")
        self._harga = nilai

    @property
    def harga_ppn(self):              # hanya baca, dihitung otomatis
        return round(self._harga * 1.11)</code></pre>
<p>Konvensi nama: <code>_harga</code> (satu garis bawah) = "urusan dalam, jangan disentuh". <code>__harga</code> (dua garis bawah) = nama diacak Python (name mangling) agar tidak tertimpa class turunan.</p>
<h4>4. @classmethod dan @staticmethod</h4>
<table class="mini-pivot"><tr><th></th><th>Argumen pertama</th><th>Dipakai untuk</th></tr>
<tr><td>method biasa</td><td><code>self</code> (objek)</td><td>bekerja dengan data objek</td></tr>
<tr><td><code>@classmethod</code></td><td><code>cls</code> (class)</td><td>constructor alternatif: <code>Siswa.dari_csv(baris)</code></td></tr>
<tr><td><code>@staticmethod</code></td><td>tidak ada</td><td>fungsi bantu yang berkaitan: <code>Siswa.valid_nis("123")</code></td></tr></table>
<h4>5. dataclass: class data tanpa basa-basi</h4>
<pre><code>from dataclasses import dataclass, field

@dataclass
class Pesanan:
    id: int
    pelanggan: str
    item: list = field(default_factory=list)   # list bawaan yang aman
    lunas: bool = False

p = Pesanan(1, "Ani")
print(p)    # Pesanan(id=1, pelanggan='Ani', item=[], lunas=False)
p == Pesanan(1, "Ani")   # True: dibandingkan isinya</code></pre>
<div class="catatan">Pakai <code>@dataclass</code> kalau class-mu terutama menyimpan data (pesanan, titik, konfigurasi). Pakai class biasa kalau perilakunya rumit. Pewarisan: panggil <code>super().__init__(...)</code> di <code>__init__</code> class anak. <code>isinstance(obj, Hewan)</code> bernilai True untuk objek Hewan maupun objek class turunannya.</div>
<div class="praktik"><b>Coba sendiri:</b> buat class <code>Uang</code> dengan <code>__add__</code>, <code>__eq__</code>, <code>__lt__</code>, dan <code>__str__</code> yang menampilkan "Rp12.000". Uji: <code>print(Uang(5000) + Uang(7000))</code> dan <code>sorted([Uang(9000), Uang(2000)])</code>.</div>
`},
{k:"stdlib",judul:"Pustaka Standar: datetime, collections, re, json, pathlib",materi:`
<!--pemula--><h4>Untuk pemula: "baterai sudah termasuk"</h4>
<p>Python terkenal dengan semboyan <i>batteries included</i>: begitu dipasang, kamu sudah mendapat ratusan modul siap pakai tanpa <code>pip install</code>. Bab ini memilih modul yang paling sering muncul di pekerjaan analis data dan backend.</p>
<table class="mini-pivot"><tr><th>Modul</th><th>Untuk apa</th></tr>
<tr><td><code>datetime</code></td><td>tanggal, jam, selisih waktu</td></tr>
<tr><td><code>collections</code></td><td>Counter (menghitung), defaultdict, deque</td></tr>
<tr><td><code>re</code></td><td>mencari pola teks (regular expression)</td></tr>
<tr><td><code>json</code>, <code>csv</code></td><td>membaca/menulis data</td></tr>
<tr><td><code>pathlib</code>, <code>os</code></td><td>alamat file dan folder</td></tr>
<tr><td><code>math</code>, <code>random</code>, <code>statistics</code></td><td>hitungan, angka acak, statistik dasar</td></tr></table><!--/pemula-->
<h4>1. datetime</h4>
<pre><code>from datetime import date, datetime, timedelta

hari_ini = date.today()
tenggat = date(2026, 12, 31)
sisa = (tenggat - hari_ini).days                # selisih → timedelta → .days
minggu_depan = hari_ini + timedelta(weeks=1)

t = datetime.strptime("23/11/2026 08:15", "%d/%m/%Y %H:%M")   # teks → datetime
t.strftime("%A, %d %B %Y")                      # datetime → teks
t.isoformat()                                   # '2026-11-23T08:15:00' (format standar)</code></pre>
<table class="mini-pivot"><tr><th>Kode</th><th>Arti</th><th>Contoh</th></tr>
<tr><td><code>%d</code> / <code>%m</code> / <code>%Y</code></td><td>tanggal / bulan / tahun 4 digit</td><td>05 / 01 / 2026</td></tr>
<tr><td><code>%H</code> / <code>%M</code> / <code>%S</code></td><td>jam 24 / menit / detik</td><td>14 / 30 / 00</td></tr>
<tr><td><code>%A</code> / <code>%B</code></td><td>nama hari / bulan (bahasa Inggris)</td><td>Monday / January</td></tr></table>
<h4>2. collections</h4>
<pre><code>from collections import Counter, defaultdict, deque

Counter("mississippi").most_common(2)          # [('i', 4), ('s', 4)]
terjual = Counter({"kopi": 3}) + Counter({"kopi": 2, "teh": 1})   # bisa dijumlah

per_kota = defaultdict(list)                   # kunci baru otomatis berisi []
for nama, kota in pelanggan:
    per_kota[kota].append(nama)

antrean = deque(maxlen=3)                      # hanya menyimpan 3 item terakhir
for x in [1, 2, 3, 4]:
    antrean.append(x)                          # deque([2, 3, 4])</code></pre>
<h4>3. re (regular expression)</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Kegunaan</th></tr>
<tr><td><code>re.search(pola, teks)</code></td><td>cari kecocokan pertama (atau None)</td></tr>
<tr><td><code>re.fullmatch(pola, teks)</code></td><td>seluruh teks harus cocok (validasi)</td></tr>
<tr><td><code>re.findall(pola, teks)</code></td><td>semua kecocokan dalam list</td></tr>
<tr><td><code>re.sub(pola, ganti, teks)</code></td><td>ganti semua kecocokan</td></tr></table>
<pre><code>import re
re.fullmatch(r"08\\d{8,11}", "081234567890") is not None    # True: nomor HP sederhana
m = re.search(r"INV-(\\d{4})-(\\d+)", "Lihat INV-2026-0042 ya")
m.group(1), m.group(2)                                    # ('2026', '0042')</code></pre>
<p>Simbol regex sama dengan di JavaScript: <code>\\d</code> digit, <code>\\w</code> huruf/angka, <code>\\s</code> spasi, <code>+</code> satu atau lebih, <code>{n}</code> tepat n kali, <code>( )</code> kelompok yang bisa diambil. Selalu tulis pola sebagai raw string <code>r"…"</code>.</p>
<h4>4. json, csv, dan pathlib</h4>
<pre><code>import json, csv
from pathlib import Path

folder = Path("data")
folder.mkdir(exist_ok=True)

# JSON
(folder / "setelan.json").write_text(json.dumps({"tema": "gelap"}, indent=2), encoding="utf-8")
setelan = json.loads((folder / "setelan.json").read_text(encoding="utf-8"))

# CSV
with open(folder / "nilai.csv", newline="", encoding="utf-8") as f:
    for baris in csv.DictReader(f):            # tiap baris = dict {judul_kolom: isi}
        print(baris["nama"], baris["nilai"])

for p in folder.glob("*.csv"):                 # semua file CSV di folder
    print(p.name, p.stat().st_size, "byte")

p = Path("data") / "laporan_2026.csv"          # tanda / menyambung folder dan nama file
p.name      # 'laporan_2026.csv'  (nama lengkap)
p.stem      # 'laporan_2026'      (tanpa ekstensi)
p.suffix    # '.csv'              (ekstensi)</code></pre>
<h4>5. math, random, statistics</h4>
<pre><code>import math, random, statistics
math.ceil(7 / 2), math.floor(3.9), math.sqrt(2), math.pi
random.randint(1, 6), random.choice(["A", "B"]), random.sample(range(100), 5)
random.seed(42)                                 # hasil acak yang bisa diulang (untuk eksperimen)
statistics.mean([70, 80, 90]), statistics.median([3, 1, 2])</code></pre>
<div class="catatan"><code>round()</code> di Python memakai banker's rounding: <code>round(2.5)</code> = 2, <code>round(3.5)</code> = 4. Untuk uang yang harus persis, pakai <code>from decimal import Decimal</code>.</div>
<div class="praktik"><b>Coba sendiri:</b> buat file teks berisi beberapa baris "2026-11-20 ERROR koneksi", "2026-11-21 INFO ok", dst. Dengan <code>re</code>, <code>Counter</code>, dan <code>datetime</code>, hitung jumlah ERROR per tanggal dan cetak tanggal dengan error terbanyak.</div>
`},
{k:"kerja",judul:"Lingkungan Kerja: venv, pip, Type Hint & Testing",materi:`
<!--pemula--><h4>Untuk pemula: dari "jalan di laptopku" menjadi kode profesional</h4>
<p>Kode yang bekerja saja belum cukup di tempat kerja. Kode harus bisa dijalankan orang lain di komputernya, mudah dibaca, dan punya tes yang membuktikan ia benar. Bab ini membahas kebiasaan yang membedakan latihan dengan proyek sungguhan.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>venv</td><td>"ruang terpisah" berisi paket khusus satu proyek</td></tr>
<tr><td>pip</td><td>alat untuk memasang paket dari PyPI (toko paket Python)</td></tr>
<tr><td>requirements.txt</td><td>daftar belanja paket proyek</td></tr>
<tr><td>type hint</td><td>label tipe data di kode, sebagai petunjuk</td></tr>
<tr><td>test / pytest</td><td>kode kecil yang memeriksa kode utama otomatis</td></tr></table><!--/pemula-->
<h4>1. Virtual environment dan pip</h4>
<pre><code>python -m venv .venv              # buat sekali per proyek
.venv\\Scripts\\activate            # Windows (PowerShell/CMD)
source .venv/bin/activate         # Mac / Linux

pip install pandas requests       # pasang paket
pip list                          # lihat yang terpasang
pip freeze &gt; requirements.txt     # catat versi persis
pip install -r requirements.txt   # pasang dari catatan (di komputer lain)
deactivate                        # keluar dari venv</code></pre>
<p>Isi <code>.gitignore</code> minimal untuk proyek Python:</p>
<pre><code>.venv/
__pycache__/
.env</code></pre>
<h4>2. Struktur proyek yang rapi</h4>
<pre><code>toko/
├── .venv/              (tidak di-commit)
├── requirements.txt
├── README.md
├── toko/
│   ├── __init__.py
│   └── harga.py
└── tests/
    └── test_harga.py</code></pre>
<pre><code># toko/harga.py
def diskon(harga: int, persen: int) -&gt; int:
    """Kembalikan harga setelah diskon (dibulatkan ke bawah)."""
    if not 0 &lt;= persen &lt;= 100:
        raise ValueError("persen harus 0-100")
    return harga - harga * persen // 100

if __name__ == "__main__":       # hanya jalan saat file dijalankan langsung
    print(diskon(10000, 10))</code></pre>
<h4>3. Type hint</h4>
<table class="mini-pivot"><tr><th>Penulisan</th><th>Arti</th></tr>
<tr><td><code>nama: str</code></td><td>teks</td></tr>
<tr><td><code>nilai: list[int]</code></td><td>list berisi angka</td></tr>
<tr><td><code>stok: dict[str, int]</code></td><td>dict teks → angka</td></tr>
<tr><td><code>email: str | None = None</code></td><td>teks atau kosong</td></tr>
<tr><td><code>def f(...) -&gt; float:</code></td><td>fungsi mengembalikan float</td></tr></table>
<p>Python tidak memeriksa type hint saat berjalan. Tapi VS Code memberi saran otomatis dan garis merah, dan alat <code>mypy</code> bisa memeriksa seluruh proyek sebelum dijalankan.</p>
<h4>4. Testing dengan pytest</h4>
<pre><code># tests/test_harga.py
import pytest
from toko.harga import diskon

def test_diskon_normal():
    assert diskon(10000, 10) == 9000

def test_tanpa_diskon():
    assert diskon(5000, 0) == 5000

def test_persen_tidak_sah():
    with pytest.raises(ValueError):
        diskon(5000, 150)</code></pre>
<pre><code>pip install pytest
pytest            # mencari file test_*.py dan fungsi test_* lalu menjalankannya
# ===== 3 passed in 0.02s =====</code></pre>
<div class="catatan">Tulis tes untuk: kasus normal, kasus batas (0, kosong, angka terbesar), dan kasus yang harus ditolak. Tes membuatmu berani mengubah kode, karena kalau ada yang rusak, tes langsung memberi tahu.</div>
<h4>5. Kebiasaan menulis kode yang baik (PEP 8)</h4>
<ul><li>Nama variabel/fungsi <code>snake_case</code>, class <code>PascalCase</code>, konstanta <code>KAPITAL</code>.</li><li>Indentasi 4 spasi, satu baris idealnya di bawah 80–100 karakter.</li><li>Fungsi pendek dengan satu tugas jelas dan docstring <code>"""…"""</code>.</li><li>Format otomatis dengan <code>ruff format</code> atau <code>black</code>.</li><li>f-string untuk format: <code>f"{harga:,.0f}"</code>, <code>f"{rasio:.1%}"</code>, <code>f"{nama:&lt;10}"</code> (rata kiri 10 karakter).</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat proyek kecil dengan venv, satu modul berisi fungsi <code>hitung_total(keranjang: list[dict]) -&gt; int</code>, dan tiga tes pytest. Commit ke Git tanpa folder <code>.venv</code>.</div>
`},
{k:"proyek",judul:"Proyek Mini: Menggabungkan Semua Dasar",materi:`
<!--pemula--><h4>Untuk pemula: belajar paling cepat dengan membuat sesuatu</h4>
<p>Membaca materi saja seperti belajar berenang dari buku. Bab ini berisi kerangka lima proyek kecil yang menggabungkan semua yang sudah kamu pelajari: input/output, percabangan, perulangan, fungsi, list/dict, error handling, dan file. Ketik ulang sendiri (jangan salin-tempel), jalankan, lalu kembangkan.</p><!--/pemula-->
<h4>Pola umum program interaktif</h4>
<pre><code>def main():
    while True:
        print("\\n=== MENU ===")
        print("1. Tambah   2. Lihat   0. Keluar")
        pilihan = input("Pilih: ").strip()
        if pilihan == "1":
            tambah()
        elif pilihan == "2":
            lihat()
        elif pilihan == "0":
            print("Sampai jumpa!")
            break
        else:
            print("Pilihan tidak dikenal")

if __name__ == "__main__":
    main()</code></pre>
<h4>Proyek 1: Kalkulator</h4>
<pre><code>OPERASI = {"+": lambda a, b: a + b, "-": lambda a, b: a - b,
           "*": lambda a, b: a * b, "/": lambda a, b: a / b}

def kalkulator():
    try:
        a = float(input("Angka pertama: "))
        op = input("Operator (+ - * /): ").strip()
        b = float(input("Angka kedua: "))
        print("Hasil:", OPERASI[op](a, b))
    except ValueError:
        print("Masukkan angka yang benar")
    except KeyError:
        print("Operator tidak dikenal")
    except ZeroDivisionError:
        print("Tidak bisa membagi dengan nol")</code></pre>
<p><b>Konsep:</b> dict berisi fungsi, <code>float()</code>, beberapa <code>except</code> untuk jenis error berbeda.</p>
<h4>Proyek 2: Tebak Angka</h4>
<pre><code>import random

def tebak_angka():
    rahasia = random.randint(1, 100)
    for percobaan in range(1, 8):            # maksimal 7 kesempatan
        tebakan = int(input(f"Tebakan ke-{percobaan}: "))
        if tebakan &lt; rahasia:
            print("Terlalu kecil")
        elif tebakan &gt; rahasia:
            print("Terlalu besar")
        else:
            print(f"Benar! Kamu butuh {percobaan} kali.")
            break
    else:                                    # for-else: jalan kalau TIDAK pernah break
        print("Kesempatan habis. Jawabannya", rahasia)</code></pre>
<p><b>Konsep:</b> <code>random</code>, perulangan dengan batas, <code>break</code>, dan <code>for … else</code> yang jarang diketahui pemula.</p>
<h4>Proyek 3: Pengelola Nilai Siswa (dengan file)</h4>
<pre><code>import json
from pathlib import Path

FILE = Path("nilai.json")

def muat():
    return json.loads(FILE.read_text(encoding="utf-8")) if FILE.exists() else {}

def simpan(data):
    FILE.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")

def huruf(n):
    return "A" if n &gt;= 85 else "B" if n &gt;= 70 else "C" if n &gt;= 55 else "D"

def laporan(data):
    for nama, n in sorted(data.items(), key=lambda x: -x[1]):
        print(f"{nama:&lt;12}{n:&gt;5}  {huruf(n)}")
    if data:
        print("Rata-rata:", round(sum(data.values()) / len(data), 1))</code></pre>
<p><b>Konsep:</b> JSON sebagai penyimpanan, <code>pathlib</code>, <code>sorted</code> dengan <code>key</code>, format f-string rata kiri/kanan.</p>
<h4>Proyek 4: Kasir Toko</h4>
<pre><code>stok = {"kopi": {"harga": 18000, "qty": 10}, "roti": {"harga": 12000, "qty": 5}}

def beli(keranjang, barang, qty):
    item = stok.get(barang)
    if item is None:
        return "Barang tidak ada"
    if item["qty"] &lt; qty:
        return f"Stok {barang} tinggal {item['qty']}"
    item["qty"] -= qty
    keranjang.append((barang, qty, item["harga"] * qty))
    return "OK"

def struk(keranjang):
    total = sum(sub for _, _, sub in keranjang)
    for b, q, sub in keranjang:
        print(f"{b:&lt;8} x{q:&lt;3} Rp{sub:&gt;10,}")
    print(f"TOTAL          Rp{total:&gt;10,}")</code></pre>
<h4>Proyek 5: Klasik tes coding</h4>
<table class="mini-pivot"><tr><th>Soal</th><th>Inti solusi</th></tr>
<tr><td>FizzBuzz</td><td>periksa kelipatan 15 <b>lebih dulu</b>, lalu 3, lalu 5</td></tr>
<tr><td>Palindrom</td><td><code>s == s[::-1]</code> setelah huruf kecil dan buang spasi</td></tr>
<tr><td>Hitung vokal</td><td><code>sum(1 for c in s.lower() if c in "aiueo")</code></td></tr>
<tr><td>Angka terbesar kedua</td><td><code>sorted(set(angka))[-2]</code></td></tr>
<tr><td>Anagram</td><td><code>sorted(a) == sorted(b)</code></td></tr>
<tr><td>Bilangan prima</td><td>cek pembagi dari 2 sampai <code>int(n ** 0.5)</code></td></tr></table>
<div class="praktik"><b>Tantangan:</b> gabungkan Proyek 3 dan pola menu: menu Tambah nilai (dengan validasi 0–100 memakai try/except), Lihat laporan, Hapus siswa, dan Keluar. Data harus tetap ada setelah program ditutup lalu dibuka lagi.</div>
`}
);
