// DIBUAT OTOMATIS oleh alat/buat-lab-python.py — jangan edit manual.
// Lab Coding Test Python & Studi Kasus Koding: setiap tes = ekspresi Python; jawaban diharapkan dihitung dari solusi acuan.
const KATEGORI_PY = {"dasar": "Dasar Python", "algo": "Algoritma & Struktur Data", "oop": "OOP & Exception", "odoo": "Logika Bisnis ala Odoo", "otomasi": "Otomasi & Data (RPA)"};
const TANTANGAN_PY = [
{
"id": "fizzbuzz",
"judul": "FizzBuzz",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "fizzbuzz",
"cerita": "",
"soal": "Buat fungsi <code>fizzbuzz(n)</code> yang mengembalikan <b>list string</b> untuk angka 1 sampai n. Kelipatan 3 diganti <code>\"Fizz\"</code>, kelipatan 5 diganti <code>\"Buzz\"</code>, kelipatan keduanya diganti <code>\"FizzBuzz\"</code>, selain itu angkanya sebagai string.",
"awal": "def fizzbuzz(n):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def fizzbuzz(n):\n    hasil = []\n    for i in range(1, n + 1):\n        if i % 15 == 0:\n            hasil.append(\"FizzBuzz\")\n        elif i % 3 == 0:\n            hasil.append(\"Fizz\")\n        elif i % 5 == 0:\n            hasil.append(\"Buzz\")\n        else:\n            hasil.append(str(i))\n    return hasil\n",
"jelas": "Soal klasik untuk melihat apakah kandidat paham perulangan, operator modulo, dan urutan kondisi. Jebakan utamanya urutan if: syarat yang paling khusus (kelipatan 15) harus dicek pertama. n = 0 menghasilkan list kosong karena range(1, 1) kosong.",
"kompleksitas": "O(n)",
"petunjuk": [
"Ulangi i dari 1 sampai n dengan range(1, n + 1). Operator % memberi sisa bagi: i % 3 == 0 artinya kelipatan 3.",
"Urutan if penting: cek kelipatan 15 (3 dan 5) PALING DULU. Kalau kelipatan 3 dicek duluan, 15 akan jadi \"Fizz\".",
"Kerangka solusinya:\ndef fizzbuzz(n):\n    …\n    for …:\n        if …:\n            …\n        elif …:\n            …\n        elif …:\n            …\n        else:\n            …\n    return …"
],
"tes": [
[
"fizzbuzz(5)",
"['1', '2', 'Fizz', '4', 'Buzz']"
],
[
"fizzbuzz(15)",
"['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']"
],
[
"fizzbuzz(1)",
"['1']"
],
[
"fizzbuzz(0)",
"[]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "balik-kata",
"judul": "Balik urutan kata",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "balik_kata",
"cerita": "",
"soal": "Buat <code>balik_kata(kalimat)</code> yang membalik <b>urutan kata</b> (bukan huruf). Spasi berlebih di awal, akhir, atau di antara kata dibuang, dan kata dipisah satu spasi.",
"awal": "def balik_kata(kalimat):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def balik_kata(kalimat):\n    return \" \".join(reversed(kalimat.split()))\n",
"jelas": "split() tanpa argumen berbeda dengan split(\" \"): yang pertama membuang spasi ganda, yang kedua menghasilkan string kosong di antara spasi ganda. Pola split → olah → join sangat sering dipakai untuk mengolah teks.",
"kompleksitas": "O(n)",
"petunjuk": [
"split() tanpa argumen memecah berdasarkan spasi apa pun dan otomatis membuang spasi berlebih.",
"Balik list dengan [::-1] atau reversed(), lalu gabungkan dengan \" \".join(...).",
"Kerangka solusinya:\ndef balik_kata(kalimat):\n    return …"
],
"tes": [
[
"balik_kata(\"saya suka odoo\")",
"'odoo suka saya'"
],
[
"balik_kata(\"  halo   dunia \")",
"'dunia halo'"
],
[
"balik_kata(\"python\")",
"'python'"
],
[
"balik_kata(\"\")",
"''"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "palindrom",
"judul": "Cek palindrom",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "palindrom",
"cerita": "",
"soal": "Buat <code>palindrom(teks)</code> yang mengembalikan <code>True</code> jika teks sama dibaca dari depan maupun belakang. <b>Abaikan</b> huruf besar/kecil dan semua karakter yang bukan huruf atau angka.",
"awal": "def palindrom(teks):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def palindrom(teks):\n    bersih = [c.lower() for c in teks if c.isalnum()]\n    return bersih == bersih[::-1]\n",
"jelas": "Langkahnya: normalisasi data dulu, baru bandingkan. String kosong dianggap palindrom karena kebalikannya juga kosong. Cara two-pointer (indeks kiri dan kanan bergerak ke tengah) juga benar dan hemat memori.",
"kompleksitas": "O(n)",
"petunjuk": [
"Bersihkan dulu: ambil hanya karakter yang c.isalnum() lalu ubah ke huruf kecil.",
"Bandingkan hasil bersih dengan kebalikannya: s == s[::-1].",
"Kerangka solusinya:\ndef palindrom(teks):\n    …\n    return …"
],
"tes": [
[
"palindrom(\"Kasur ini rusak\")",
"True"
],
[
"palindrom(\"odoo\")",
"False"
],
[
"palindrom(\"A man, a plan, a canal: Panama\")",
"True"
],
[
"palindrom(\"\")",
"True"
],
[
"palindrom(\"12321\")",
"True"
],
[
"palindrom(\"ab\")",
"False"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "hitung-vokal",
"judul": "Hitung huruf vokal",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "hitung_vokal",
"cerita": "",
"soal": "Buat <code>hitung_vokal(teks)</code> yang mengembalikan jumlah huruf vokal (a, i, u, e, o), huruf besar maupun kecil.",
"awal": "def hitung_vokal(teks):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def hitung_vokal(teks):\n    return sum(1 for c in teks.lower() if c in \"aiueo\")\n",
"jelas": "sum(1 for c in ... if ...) adalah generator expression: menghitung tanpa membuat list. Operator in pada string mengecek apakah karakter ada di dalamnya.",
"kompleksitas": "O(n)",
"petunjuk": [
"Ubah teks ke huruf kecil dulu dengan .lower() supaya 'O' dan 'o' sama.",
"Ulangi tiap karakter, tambahkan 1 kalau karakter ada di \"aiueo\" (operator in).",
"Kerangka solusinya:\ndef hitung_vokal(teks):\n    return …"
],
"tes": [
[
"hitung_vokal(\"Odoo Developer\")",
"7"
],
[
"hitung_vokal(\"RPA\")",
"1"
],
[
"hitung_vokal(\"xyz\")",
"0"
],
[
"hitung_vokal(\"\")",
"0"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "faktorial",
"judul": "Faktorial",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "faktorial",
"cerita": "",
"soal": "Buat <code>faktorial(n)</code> untuk n ≥ 0. Contoh: 5! = 5 × 4 × 3 × 2 × 1 = 120, dan 0! = 1. Jangan memakai <code>math.factorial</code>.",
"awal": "def faktorial(n):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def faktorial(n):\n    hasil = 1\n    for i in range(2, n + 1):\n        hasil *= i\n    return hasil\n",
"jelas": "Versi rekursif (return 1 if n <= 1 else n * faktorial(n - 1)) juga benar, tapi untuk n besar bisa terkena batas rekursi Python (±1000). Versi perulangan lebih aman. Integer Python tidak punya batas ukuran, jadi 20! tetap tepat.",
"kompleksitas": "O(n)",
"petunjuk": [
"Mulai dari hasil = 1 (bukan 0, karena dikali).",
"Kalikan hasil dengan setiap angka dari 2 sampai n: for i in range(2, n + 1).",
"Kerangka solusinya:\ndef faktorial(n):\n    …\n    for …:\n        …\n    return …"
],
"tes": [
[
"faktorial(5)",
"120"
],
[
"faktorial(0)",
"1"
],
[
"faktorial(1)",
"1"
],
[
"faktorial(10)",
"3628800"
],
[
"faktorial(20)",
"2432902008176640000"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "prima",
"judul": "Bilangan prima",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "prima",
"cerita": "",
"soal": "Buat <code>prima(n)</code> yang mengembalikan <code>True</code> jika n bilangan prima. Ingat: 0 dan 1 <b>bukan</b> prima, 2 adalah prima.",
"awal": "def prima(n):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def prima(n):\n    if n < 2:\n        return False\n    i = 2\n    while i * i <= n:\n        if n % i == 0:\n            return False\n        i += 1\n    return True\n",
"jelas": "Mengecek sampai akar n cukup, karena kalau n = a × b dan a > √n maka b < √n, jadi b sudah dicek lebih dulu. Ini mengubah O(n) menjadi O(√n): pewawancara sering menanyakan optimasi ini.",
"kompleksitas": "O(√n)",
"petunjuk": [
"Tangani kasus kecil dulu: n < 2 langsung False.",
"Cukup coba pembagi sampai akar n (while i * i <= n). Kalau ada yang habis membagi, n bukan prima.",
"Kerangka solusinya:\ndef prima(n):\n    if …:\n        return …\n    …\n    while …:\n        if …:\n            return …\n        …\n    return …"
],
"tes": [
[
"prima(7)",
"True"
],
[
"prima(1)",
"False"
],
[
"prima(2)",
"True"
],
[
"prima(9)",
"False"
],
[
"prima(97)",
"True"
],
[
"prima(0)",
"False"
],
[
"prima(7919)",
"True"
],
[
"prima(7921)",
"False"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "maks-manual",
"judul": "Nilai terbesar tanpa max()",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "terbesar",
"cerita": "",
"soal": "Buat <code>terbesar(angka)</code> yang mengembalikan nilai terbesar dari list <b>tanpa</b> memakai <code>max()</code> atau <code>sorted()</code>. Jika list kosong, kembalikan <code>None</code>.",
"awal": "def terbesar(angka):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def terbesar(angka):\n    if not angka:\n        return None\n    hasil = angka[0]\n    for x in angka[1:]:\n        if x > hasil:\n            hasil = x\n    return hasil\n",
"jelas": "Jebakan umum: memulai dengan hasil = 0, sehingga list yang semuanya negatif memberi jawaban 0. Selalu mulai dari elemen pertama.",
"kompleksitas": "O(n)",
"petunjuk": [
"Tangani list kosong dulu: if not angka: return None.",
"Mulai dari elemen pertama sebagai juara sementara (bukan 0, karena semua angka bisa negatif), lalu bandingkan dengan sisanya.",
"Kerangka solusinya:\ndef terbesar(angka):\n    if …:\n        return …\n    …\n    for …:\n        if …:\n            …\n    return …"
],
"tes": [
[
"terbesar([3, 9, 2])",
"9"
],
[
"terbesar([])",
"None"
],
[
"terbesar([-5, -2, -9])",
"-2"
],
[
"terbesar([4])",
"4"
],
[
"terbesar([1, 7, 7, 3])",
"7"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "unik-urut",
"judul": "Hapus duplikat, jaga urutan",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "unik",
"cerita": "",
"soal": "Buat <code>unik(data)</code> yang membuang item ganda tetapi <b>mempertahankan urutan</b> kemunculan pertama.",
"awal": "def unik(data):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def unik(data):\n    sudah = set()\n    hasil = []\n    for x in data:\n        if x not in sudah:\n            sudah.add(x)\n            hasil.append(x)\n    return hasil\n",
"jelas": "Mengecek x in set rata-rata O(1), sedangkan x in list O(n). Cara singkat yang juga benar: list(dict.fromkeys(data)), karena dict menjaga urutan sejak Python 3.7.",
"kompleksitas": "O(n)",
"petunjuk": [
"list(set(data)) membuang duplikat tetapi urutannya bisa berubah, jadi tidak cukup.",
"Simpan item yang sudah pernah dilihat di sebuah set (cek in di set itu cepat), lalu append ke list hasil hanya kalau belum pernah dilihat.",
"Kerangka solusinya:\ndef unik(data):\n    …\n    …\n    for …:\n        if …:\n            …\n            …\n    return …"
],
"tes": [
[
"unik([3, 1, 3, 2, 1])",
"[3, 1, 2]"
],
[
"unik([\"SO1\", \"SO2\", \"SO1\"])",
"['SO1', 'SO2']"
],
[
"unik([])",
"[]"
],
[
"unik([5, 5, 5])",
"[5]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "jumlah-digit",
"judul": "Jumlah digit",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "jumlah_digit",
"cerita": "",
"soal": "Buat <code>jumlah_digit(n)</code> yang menjumlahkan semua digit bilangan bulat n. Untuk n negatif, abaikan tanda minus.",
"awal": "def jumlah_digit(n):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def jumlah_digit(n):\n    n = abs(n)\n    total = 0\n    while n > 0:\n        total += n % 10\n        n //= 10\n    return total\n",
"jelas": "Dua cara sama-sama diterima: aritmetika (% dan //) atau ubah ke string. Pewawancara kadang meminta cara aritmetika untuk melihat pemahaman operator.",
"kompleksitas": "O(jumlah digit)",
"petunjuk": [
"n % 10 mengambil digit terakhir, n // 10 membuang digit terakhir.",
"Ulangi selama n > 0. Pakai abs(n) dulu agar angka negatif aman. Cara lain: sum(int(c) for c in str(abs(n))).",
"Kerangka solusinya:\ndef jumlah_digit(n):\n    …\n    …\n    while …:\n        …\n        …\n    return …"
],
"tes": [
[
"jumlah_digit(1234)",
"10"
],
[
"jumlah_digit(0)",
"0"
],
[
"jumlah_digit(-907)",
"16"
],
[
"jumlah_digit(99999)",
"45"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "nilai-huruf",
"judul": "Konversi nilai ke huruf",
"kategori": "dasar",
"tingkat": 1,
"fungsi": "nilai_huruf",
"cerita": "",
"soal": "Buat <code>nilai_huruf(nilai)</code>: 85–100 → <code>\"A\"</code>, 70–84 → <code>\"B\"</code>, 55–69 → <code>\"C\"</code>, 40–54 → <code>\"D\"</code>, 0–39 → <code>\"E\"</code>. Nilai di luar 0–100 → <code>\"Tidak valid\"</code>. Nilai boleh desimal.",
"awal": "def nilai_huruf(nilai):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def nilai_huruf(nilai):\n    if nilai < 0 or nilai > 100:\n        return \"Tidak valid\"\n    if nilai >= 85:\n        return \"A\"\n    if nilai >= 70:\n        return \"B\"\n    if nilai >= 55:\n        return \"C\"\n    if nilai >= 40:\n        return \"D\"\n    return \"E\"\n",
"jelas": "Batas yang ditulis 70–84 untuk bilangan bulat; untuk desimal 84.5, aturan >= 85 → A, >= 70 → B tetap memberi B. Menguji tepat di batas (70, 84.5, 54.9) adalah kebiasaan baik yang dicari pewawancara.",
"kompleksitas": "O(1)",
"petunjuk": [
"Tangani nilai tidak valid paling awal.",
"Cek dari batas tertinggi ke terendah dengan >=. Karena return langsung keluar dari fungsi, kamu tidak perlu menulis batas atas tiap rentang.",
"Kerangka solusinya:\ndef nilai_huruf(nilai):\n    if …:\n        return …\n    if …:\n        return …\n    if …:\n        return …\n    if …:\n        return …\n    if …:\n        return …\n    return …"
],
"tes": [
[
"nilai_huruf(90)",
"'A'"
],
[
"nilai_huruf(84.5)",
"'B'"
],
[
"nilai_huruf(70)",
"'B'"
],
[
"nilai_huruf(0)",
"'E'"
],
[
"nilai_huruf(101)",
"'Tidak valid'"
],
[
"nilai_huruf(-1)",
"'Tidak valid'"
],
[
"nilai_huruf(54.9)",
"'D'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "two-sum",
"judul": "Two Sum",
"kategori": "algo",
"tingkat": 2,
"fungsi": "dua_jumlah",
"cerita": "",
"soal": "Diberi list <code>angka</code> dan <code>target</code>, kembalikan <b>indeks dua angka</b> yang jumlahnya sama dengan target, sebagai list <code>[i, j]</code> dengan i &lt; j. Dijamin ada tepat satu jawaban. Usahakan lebih cepat dari O(n²).",
"awal": "def dua_jumlah(angka, target):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def dua_jumlah(angka, target):\n    posisi = {}\n    for j, x in enumerate(angka):\n        pasangan = target - x\n        if pasangan in posisi:\n            return [posisi[pasangan], j]\n        posisi[x] = j\n    return []\n",
"jelas": "Ini soal coding test paling terkenal. Kuncinya menukar memori dengan kecepatan: dict membuat pencarian pasangan O(1), jadi total O(n). Perhatikan [3, 3]: angka dimasukkan ke dict SETELAH dicek, supaya satu angka tidak dipasangkan dengan dirinya sendiri.",
"kompleksitas": "O(n) waktu, O(n) memori",
"petunjuk": [
"Cara dua for bersarang benar tapi O(n²). Bisakah sekali jalan saja?",
"Simpan angka yang sudah dilihat di dict {nilai: indeks}. Untuk tiap x, cek apakah target - x sudah ada di dict.",
"Kerangka solusinya:\ndef dua_jumlah(angka, target):\n    …\n    for …:\n        …\n        if …:\n            return …\n        …\n    return …"
],
"tes": [
[
"dua_jumlah([2, 7, 11, 15], 9)",
"[0, 1]"
],
[
"dua_jumlah([3, 2, 4], 6)",
"[1, 2]"
],
[
"dua_jumlah([3, 3], 6)",
"[0, 1]"
],
[
"dua_jumlah([-1, 8, 5, 0], 4)",
"[0, 2]"
],
[
"dua_jumlah([1, 5, 9, 14, 20], 34)",
"[3, 4]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "anagram",
"judul": "Anagram",
"kategori": "algo",
"tingkat": 2,
"fungsi": "anagram",
"cerita": "",
"soal": "Buat <code>anagram(a, b)</code> yang mengembalikan <code>True</code> jika a dan b tersusun dari huruf yang sama dengan jumlah yang sama. Abaikan spasi dan huruf besar/kecil.",
"awal": "def anagram(a, b):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "from collections import Counter\n\ndef anagram(a, b):\n    bersih = lambda s: Counter(s.replace(\" \", \"\").lower())\n    return bersih(a) == bersih(b)\n",
"jelas": "sorted() memberi O(n log n); Counter memberi O(n). Membandingkan set(a) == set(b) SALAH karena set membuang jumlah huruf ('aab' dan 'abb' akan dianggap sama).",
"kompleksitas": "O(n)",
"petunjuk": [
"Bersihkan dulu kedua teks: buang spasi dan ubah ke huruf kecil.",
"Bandingkan sorted(a) == sorted(b), atau hitung huruf dengan collections.Counter lalu bandingkan.",
"Kerangka solusinya:\nfrom collections import Counter\n\ndef anagram(a, b):\n    …\n    return …"
],
"tes": [
[
"anagram(\"Listen\", \"Silent\")",
"True"
],
[
"anagram(\"odoo\", \"dodo\")",
"False"
],
[
"anagram(\"aab\", \"abb\")",
"False"
],
[
"anagram(\"Dormitory\", \"dirty room\")",
"True"
],
[
"anagram(\"\", \"\")",
"True"
],
[
"anagram(\"abc\", \"abcd\")",
"False"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "frekuensi-kata",
"judul": "Frekuensi kata",
"kategori": "algo",
"tingkat": 2,
"fungsi": "frekuensi_kata",
"cerita": "",
"soal": "Buat <code>frekuensi_kata(teks)</code> yang mengembalikan <b>dict</b> {kata: jumlah}. Kata dibandingkan dalam huruf kecil, dan tanda baca <code>. , ! ?</code> dibuang.",
"awal": "def frekuensi_kata(teks):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def frekuensi_kata(teks):\n    for tanda in \".,!?\":\n        teks = teks.replace(tanda, \" \")\n    hasil = {}\n    for kata in teks.lower().split():\n        hasil[kata] = hasil.get(kata, 0) + 1\n    return hasil\n",
"jelas": "Pola 'hitung kemunculan' muncul di mana-mana: kata, kode error di log, produk terlaris. dict.get(kunci, 0) menghindari KeyError untuk kata yang baru muncul pertama kali.",
"kompleksitas": "O(n)",
"petunjuk": [
"Ganti setiap tanda baca dengan spasi, ubah ke huruf kecil, lalu split().",
"Hitung dengan dict: hasil[kata] = hasil.get(kata, 0) + 1. (Atau collections.Counter, lalu ubah ke dict.)",
"Kerangka solusinya:\ndef frekuensi_kata(teks):\n    for …:\n        …\n    …\n    for …:\n        …\n    return …"
],
"tes": [
[
"frekuensi_kata(\"Odoo itu mudah. Odoo itu seru!\")",
"{'odoo': 2, 'itu': 2, 'mudah': 1, 'seru': 1}"
],
[
"frekuensi_kata(\"\")",
"{}"
],
[
"frekuensi_kata(\"Ya, ya, YA?\")",
"{'ya': 3}"
],
[
"frekuensi_kata(\"satu\")",
"{'satu': 1}"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "kurung",
"judul": "Kurung seimbang",
"kategori": "algo",
"tingkat": 2,
"fungsi": "seimbang",
"cerita": "",
"soal": "Buat <code>seimbang(s)</code> yang mengembalikan <code>True</code> jika semua kurung <code>()</code>, <code>[]</code>, <code>{}</code> di s berpasangan dan bersarang dengan benar. Karakter lain diabaikan.",
"awal": "def seimbang(s):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def seimbang(s):\n    pasangan = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n    tumpukan = []\n    for c in s:\n        if c in \"([{\":\n            tumpukan.append(c)\n        elif c in pasangan:\n            if not tumpukan or tumpukan.pop() != pasangan[c]:\n                return False\n    return not tumpukan\n",
"jelas": "Stack = Last In First Out. Soal ini menguji apakah kamu bisa memilih struktur data yang tepat. Jangan lupa dua kasus tepi: ')(' (tutup saat stack kosong) dan '((' (sisa di akhir).",
"kompleksitas": "O(n)",
"petunjuk": [
"Pakai stack (list dengan append dan pop): kurung buka dimasukkan, kurung tutup harus cocok dengan kurung buka TERAKHIR.",
"Dua cara gagal: bertemu kurung tutup saat stack kosong, atau di akhir stack masih berisi.",
"Kerangka solusinya:\ndef seimbang(s):\n    …\n    …\n    for …:\n        if …:\n            …\n        elif …:\n            if …:\n                return …\n    return …"
],
"tes": [
[
"seimbang(\"([]{})\")",
"True"
],
[
"seimbang(\"([)]\")",
"False"
],
[
"seimbang(\"((\")",
"False"
],
[
"seimbang(\"\")",
"True"
],
[
"seimbang(\"domain = [('state', '=', 'sale')]\")",
"True"
],
[
"seimbang(\")(\")",
"False"
],
[
"seimbang(\"{[()()]}\")",
"True"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "gabung-interval",
"judul": "Gabungkan jadwal bertumpuk",
"kategori": "algo",
"tingkat": 3,
"fungsi": "gabung_interval",
"cerita": "Tim support punya daftar jam sibuk teknisi sebagai pasangan [mulai, selesai]. Mereka ingin melihat blok waktu sibuk yang sudah digabung.",
"soal": "Buat <code>gabung_interval(jadwal)</code>: gabungkan semua interval yang bertumpuk atau bersentuhan, lalu kembalikan list interval terurut berdasarkan waktu mulai.",
"awal": "def gabung_interval(jadwal):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def gabung_interval(jadwal):\n    hasil = []\n    for mulai, selesai in sorted(jadwal):\n        if hasil and mulai <= hasil[-1][1]:\n            hasil[-1][1] = max(hasil[-1][1], selesai)\n        else:\n            hasil.append([mulai, selesai])\n    return hasil\n",
"jelas": "Pola 'urutkan dulu, lalu satu kali jalan' menyelesaikan banyak soal interval. max() diperlukan untuk kasus [1, 10] yang menelan [2, 3]. Kompleksitas didominasi sorting: O(n log n).",
"kompleksitas": "O(n log n)",
"petunjuk": [
"Urutkan dulu berdasarkan waktu mulai. Setelah urut, interval yang bertumpuk pasti berdampingan.",
"Bandingkan setiap interval dengan interval TERAKHIR di hasil: kalau mulai <= selesai terakhir, perpanjang (pakai max); kalau tidak, tambahkan sebagai blok baru.",
"Kerangka solusinya:\ndef gabung_interval(jadwal):\n    …\n    for …:\n        if …:\n            …\n        else:\n            …\n    return …"
],
"tes": [
[
"gabung_interval([[1, 3], [2, 6], [8, 10], [15, 18]])",
"[[1, 6], [8, 10], [15, 18]]"
],
[
"gabung_interval([[1, 4], [4, 5]])",
"[[1, 5]]"
],
[
"gabung_interval([])",
"[]"
],
[
"gabung_interval([[5, 7], [1, 2]])",
"[[1, 2], [5, 7]]"
],
[
"gabung_interval([[1, 10], [2, 3], [4, 8]])",
"[[1, 10]]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "rotasi",
"judul": "Rotasi list",
"kategori": "algo",
"tingkat": 2,
"fungsi": "rotasi",
"cerita": "",
"soal": "Buat <code>rotasi(data, k)</code> yang memutar list ke <b>kanan</b> sebanyak k langkah. k bisa lebih besar dari panjang list. List kosong tetap kosong.",
"awal": "def rotasi(data, k):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def rotasi(data, k):\n    if not data:\n        return []\n    k %= len(data)\n    return data[-k:] + data[:-k] if k else data[:]\n",
"jelas": "Jebakannya ada dua: k lebih besar dari panjang list (pakai modulo) dan k = 0 (karena -0 sama dengan 0, data[-0:] mengambil semua). List kosong harus dicek sebelum modulo agar tidak terjadi ZeroDivisionError.",
"kompleksitas": "O(n)",
"petunjuk": [
"Rotasi sebanyak panjang list = kembali seperti semula, jadi kecilkan k dengan k % len(data).",
"Ambil k elemen terakhir (data[-k:]) lalu sambung dengan sisanya (data[:-k]). Hati-hati k = 0: data[-0:] adalah SELURUH list.",
"Kerangka solusinya:\ndef rotasi(data, k):\n    if …:\n        return …\n    …\n    return …"
],
"tes": [
[
"rotasi([1, 2, 3, 4, 5], 2)",
"[4, 5, 1, 2, 3]"
],
[
"rotasi([1, 2, 3], 4)",
"[3, 1, 2]"
],
[
"rotasi([], 3)",
"[]"
],
[
"rotasi([1, 2, 3], 0)",
"[1, 2, 3]"
],
[
"rotasi([1, 2, 3], 3)",
"[1, 2, 3]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "unik-pertama",
"judul": "Huruf unik pertama",
"kategori": "algo",
"tingkat": 2,
"fungsi": "unik_pertama",
"cerita": "",
"soal": "Buat <code>unik_pertama(s)</code> yang mengembalikan <b>indeks</b> karakter pertama yang hanya muncul sekali. Kalau tidak ada, kembalikan <code>-1</code>.",
"awal": "def unik_pertama(s):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "from collections import Counter\n\ndef unik_pertama(s):\n    hitung = Counter(s)\n    for i, c in enumerate(s):\n        if hitung[c] == 1:\n            return i\n    return -1\n",
"jelas": "Banyak soal string diselesaikan dengan dua tahap: kumpulkan statistik, lalu periksa. Pada 'odoo' huruf o muncul 3 kali dan d sekali, jadi jawabannya indeks d, yaitu 1. Pada 'aabb' semua huruf muncul dua kali, jadi -1.",
"kompleksitas": "O(n)",
"petunjuk": [
"Dua kali jalan: pertama hitung semua karakter, kedua cari yang hitungannya 1.",
"s.count(c) di dalam perulangan juga benar tapi O(n²). Counter atau dict membuatnya O(n).",
"Kerangka solusinya:\nfrom collections import Counter\n\ndef unik_pertama(s):\n    …\n    for …:\n        if …:\n            return …\n    return …"
],
"tes": [
[
"unik_pertama(\"odoo\")",
"1"
],
[
"unik_pertama(\"leetcode\")",
"0"
],
[
"unik_pertama(\"aabb\")",
"-1"
],
[
"unik_pertama(\"\")",
"-1"
],
[
"unik_pertama(\"z\")",
"0"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "cari-biner",
"judul": "Binary search",
"kategori": "algo",
"tingkat": 2,
"fungsi": "cari_biner",
"cerita": "",
"soal": "Diberi list <code>data</code> yang <b>sudah terurut naik</b>, buat <code>cari_biner(data, x)</code> yang mengembalikan indeks x, atau <code>-1</code> jika tidak ada. Jangan memakai <code>.index()</code> atau <code>in</code>; gunakan binary search.",
"awal": "def cari_biner(data, x):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def cari_biner(data, x):\n    kiri, kanan = 0, len(data) - 1\n    while kiri <= kanan:\n        tengah = (kiri + kanan) // 2\n        if data[tengah] == x:\n            return tengah\n        if data[tengah] < x:\n            kiri = tengah + 1\n        else:\n            kanan = tengah - 1\n    return -1\n",
"jelas": "Setiap langkah membuang separuh data, jadi 1 juta data cukup ±20 langkah: O(log n). Kesalahan umum: memakai kiri < kanan (melewatkan list satu elemen) atau lupa +1/-1 sehingga perulangan tidak berhenti.",
"kompleksitas": "O(log n)",
"petunjuk": [
"Simpan dua batas: kiri = 0 dan kanan = len(data) - 1. Lihat elemen tengah.",
"Kalau tengah lebih kecil dari x, buang separuh kiri (kiri = tengah + 1); kalau lebih besar, buang separuh kanan (kanan = tengah - 1). Ulangi selama kiri <= kanan.",
"Kerangka solusinya:\ndef cari_biner(data, x):\n    …\n    while …:\n        …\n        if …:\n            return …\n        if …:\n            …\n        else:\n            …\n    return …"
],
"tes": [
[
"cari_biner([1, 3, 5, 7, 9, 11], 7)",
"3"
],
[
"cari_biner([1, 3, 5, 7, 9, 11], 4)",
"-1"
],
[
"cari_biner([], 1)",
"-1"
],
[
"cari_biner([5], 5)",
"0"
],
[
"cari_biner([2, 4, 6, 8], 2)",
"0"
],
[
"cari_biner([2, 4, 6, 8], 8)",
"3"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "kompres",
"judul": "Kompres string (run-length)",
"kategori": "algo",
"tingkat": 2,
"fungsi": "kompres",
"cerita": "",
"soal": "Buat <code>kompres(s)</code> yang mengubah huruf berulang berurutan menjadi huruf + jumlahnya. Contoh <code>\"aaabccdddd\"</code> → <code>\"a3b1c2d4\"</code>.",
"awal": "def kompres(s):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def kompres(s):\n    if not s:\n        return \"\"\n    hasil = []\n    sekarang, jumlah = s[0], 1\n    for c in s[1:]:\n        if c == sekarang:\n            jumlah += 1\n        else:\n            hasil.append(sekarang + str(jumlah))\n            sekarang, jumlah = c, 1\n    hasil.append(sekarang + str(jumlah))\n    return \"\".join(hasil)\n",
"jelas": "Bug klasik soal ini: kelompok terakhir tidak ditulis karena tidak ada 'pergantian huruf' setelahnya. Menyusun potongan di list lalu join lebih efisien daripada menambah string berulang kali.",
"kompleksitas": "O(n)",
"petunjuk": [
"Simpan huruf yang sedang dihitung dan jumlahnya. Saat huruf berganti, tulis hasilnya lalu mulai hitung huruf baru.",
"Jangan lupa menulis kelompok TERAKHIR setelah perulangan selesai; ini bug yang paling sering terjadi.",
"Kerangka solusinya:\ndef kompres(s):\n    if …:\n        return …\n    …\n    …\n    for …:\n        if …:\n            …\n        else:\n            …\n            …\n    …\n    return …"
],
"tes": [
[
"kompres(\"aaabccdddd\")",
"'a3b1c2d4'"
],
[
"kompres(\"\")",
"''"
],
[
"kompres(\"a\")",
"'a1'"
],
[
"kompres(\"abab\")",
"'a1b1a1b1'"
],
[
"kompres(\"zzzzzzzzzzzz\")",
"'z12'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "ratakan",
"judul": "Ratakan list bersarang",
"kategori": "algo",
"tingkat": 2,
"fungsi": "ratakan",
"cerita": "",
"soal": "Buat <code>ratakan(data)</code> yang mengubah list bersarang sedalam apa pun menjadi satu list datar.",
"awal": "def ratakan(data):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def ratakan(data):\n    hasil = []\n    for x in data:\n        if isinstance(x, list):\n            hasil.extend(ratakan(x))\n        else:\n            hasil.append(x)\n    return hasil\n",
"jelas": "Rekursi punya dua bagian: kasus dasar (item bukan list → tambahkan) dan langkah rekursif (item list → ratakan dulu). Struktur seperti ini mirip kategori produk Odoo yang punya parent_id bertingkat.",
"kompleksitas": "O(jumlah item)",
"petunjuk": [
"Untuk tiap item: kalau ia list (isinstance(x, list)), ratakan juga isinya; kalau bukan, masukkan ke hasil.",
"Fungsi yang memanggil dirinya sendiri (rekursi) cocok untuk data bersarang. Pakai extend untuk menggabungkan hasil rekursi.",
"Kerangka solusinya:\ndef ratakan(data):\n    …\n    for …:\n        if …:\n            …\n        else:\n            …\n    return …"
],
"tes": [
[
"ratakan([1, [2, 3], [4, [5, [6]]]])",
"[1, 2, 3, 4, 5, 6]"
],
[
"ratakan([])",
"[]"
],
[
"ratakan([[], [[]]])",
"[]"
],
[
"ratakan([1, 2])",
"[1, 2]"
],
[
"ratakan([['a'], 'b'])",
"['a', 'b']"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "fibonacci",
"judul": "Deret Fibonacci",
"kategori": "algo",
"tingkat": 1,
"fungsi": "fibonacci",
"cerita": "",
"soal": "Buat <code>fibonacci(n)</code> yang mengembalikan list n bilangan Fibonacci pertama: 0, 1, 1, 2, 3, 5, …",
"awal": "def fibonacci(n):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def fibonacci(n):\n    hasil = []\n    a, b = 0, 1\n    for _ in range(n):\n        hasil.append(a)\n        a, b = b, a + b\n    return hasil\n",
"jelas": "Penugasan serentak a, b = b, a + b menghitung sisi kanan lebih dulu, jadi aman. Versi rekursif murni fib(n-1) + fib(n-2) sangat lambat (O(2ⁿ)); pewawancara sering menanyakan kenapa.",
"kompleksitas": "O(n)",
"petunjuk": [
"Simpan dua angka terakhir: a = 0, b = 1.",
"Setiap langkah: catat a, lalu geser dengan a, b = b, a + b (penugasan serentak, tidak perlu variabel sementara).",
"Kerangka solusinya:\ndef fibonacci(n):\n    …\n    …\n    for …:\n        …\n        …\n    return …"
],
"tes": [
[
"fibonacci(7)",
"[0, 1, 1, 2, 3, 5, 8]"
],
[
"fibonacci(0)",
"[]"
],
[
"fibonacci(1)",
"[0]"
],
[
"fibonacci(2)",
"[0, 1]"
],
[
"fibonacci(15)",
"[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "kelompok-anagram",
"judul": "Kelompokkan anagram",
"kategori": "algo",
"tingkat": 3,
"fungsi": "kelompok_anagram",
"cerita": "",
"soal": "Buat <code>kelompok_anagram(kata)</code> yang mengelompokkan kata-kata yang saling anagram. Kembalikan list kelompok; setiap kelompok <b>diurutkan abjad</b>, dan daftar kelompok diurutkan berdasarkan kata pertamanya.",
"awal": "def kelompok_anagram(kata):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def kelompok_anagram(kata):\n    grup = {}\n    for k in kata:\n        kunci = \"\".join(sorted(k))\n        grup.setdefault(kunci, []).append(k)\n    return sorted(sorted(g) for g in grup.values())\n",
"jelas": "Teknik 'kunci kanonik' mengubah masalah perbandingan berpasangan O(n²) menjadi pengelompokan satu kali jalan. Pengurutan di akhir hanya agar hasilnya bisa dibandingkan dengan tes.",
"kompleksitas": "O(n · k log k), k = panjang kata",
"petunjuk": [
"Kata-kata anagram punya 'tanda tangan' yang sama kalau hurufnya diurutkan: sorted('ba') sama dengan sorted('ab').",
"Pakai dict {tanda_tangan: [kata, ...]}. dict.setdefault(kunci, []).append(k) membuat list baru bila kunci belum ada.",
"Kerangka solusinya:\ndef kelompok_anagram(kata):\n    …\n    for …:\n        …\n        …\n    return …"
],
"tes": [
[
"kelompok_anagram([\"makan\", \"kaman\", \"odoo\", \"dood\", \"oodo\", \"nama\"])",
"[['dood'], ['kaman', 'makan'], ['nama'], ['odoo', 'oodo']]"
],
[
"kelompok_anagram([])",
"[]"
],
[
"kelompok_anagram([\"a\"])",
"[['a']]"
],
[
"kelompok_anagram([\"ab\", \"ba\", \"abc\"])",
"[['ab', 'ba'], ['abc']]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "kadane",
"judul": "Untung beruntun terbesar",
"kategori": "algo",
"tingkat": 3,
"fungsi": "untung_maks",
"cerita": "Kamu punya laba/rugi harian toko (bisa negatif). Manajer ingin tahu total laba terbesar dari <b>beberapa hari berturut-turut</b>.",
"soal": "Buat <code>untung_maks(harian)</code> yang mengembalikan jumlah terbesar dari sub-list berurutan (minimal satu hari). List tidak kosong.",
"awal": "def untung_maks(harian):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def untung_maks(harian):\n    terbaik = sekarang = harian[0]\n    for x in harian[1:]:\n        sekarang = max(x, sekarang + x)\n        terbaik = max(terbaik, sekarang)\n    return terbaik\n",
"jelas": "Ini algoritma Kadane: O(n), sekali jalan. Mencoba semua pasangan awal–akhir butuh O(n²). Memulai dari 0 akan salah untuk data yang semuanya negatif.",
"kompleksitas": "O(n)",
"petunjuk": [
"Untuk setiap hari, pilih: lanjutkan rentang sebelumnya (sekarang + x) atau mulai baru dari hari ini (x). Ambil yang lebih besar.",
"Simpan juga nilai terbaik yang pernah dicapai. Mulai keduanya dari elemen pertama (bukan 0) supaya kasus semua negatif benar.",
"Kerangka solusinya:\ndef untung_maks(harian):\n    …\n    for …:\n        …\n        …\n    return …"
],
"tes": [
[
"untung_maks([-2, 1, -3, 4, -1, 2, 1, -5, 4])",
"6"
],
[
"untung_maks([5])",
"5"
],
[
"untung_maks([-3, -1, -2])",
"-1"
],
[
"untung_maks([2, 3, -10, 4])",
"5"
],
[
"untung_maks([1, 2, 3])",
"6"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "angka-hilang",
"judul": "Nomor faktur yang hilang",
"kategori": "algo",
"tingkat": 2,
"fungsi": "angka_hilang",
"cerita": "Nomor faktur seharusnya 1 sampai n tanpa loncat. Auditor menemukan tepat satu nomor hilang.",
"soal": "Diberi list berisi n − 1 angka berbeda dari 1..n (urutan acak), buat <code>angka_hilang(data)</code> yang mengembalikan angka yang hilang.",
"awal": "def angka_hilang(data):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def angka_hilang(data):\n    n = len(data) + 1\n    return n * (n + 1) // 2 - sum(data)\n",
"jelas": "Rumus Gauss memberi O(n) tanpa sorting. Gunakan // agar hasilnya int. Cara lain: set(range(1, n + 1)) - set(data). Kasus [] berarti n = 1 dan yang hilang adalah 1.",
"kompleksitas": "O(n)",
"petunjuk": [
"Berapa n? Panjang list ditambah 1.",
"Jumlah 1..n = n × (n + 1) / 2 (rumus Gauss). Kurangi dengan jumlah isi list.",
"Kerangka solusinya:\ndef angka_hilang(data):\n    …\n    return …"
],
"tes": [
[
"angka_hilang([3, 1, 4, 5])",
"2"
],
[
"angka_hilang([2])",
"1"
],
[
"angka_hilang([1])",
"2"
],
[
"angka_hilang([])",
"1"
],
[
"angka_hilang(list(range(1, 1000)))",
"1000"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "top-k",
"judul": "Produk terlaris Top-K",
"kategori": "algo",
"tingkat": 2,
"fungsi": "top_k",
"cerita": "",
"soal": "Diberi list nama produk dari setiap transaksi, buat <code>top_k(penjualan, k)</code> yang mengembalikan k nama produk paling sering terjual. Urutkan dari terbanyak; jika jumlahnya sama, urutkan <b>abjad</b>.",
"awal": "def top_k(penjualan, k):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "from collections import Counter\n\ndef top_k(penjualan, k):\n    hitung = Counter(penjualan)\n    urut = sorted(hitung.items(), key=lambda p: (-p[1], p[0]))\n    return [nama for nama, _ in urut[:k]]\n",
"jelas": "Counter.most_common(k) tidak menjamin urutan abjad untuk jumlah yang sama, jadi soal ini sengaja meminta key tuple. Trik key=(-angka, teks) sangat berguna untuk pengurutan bertingkat.",
"kompleksitas": "O(n log n)",
"petunjuk": [
"Hitung dulu dengan Counter atau dict.",
"Urutkan dengan key berupa tuple: (-jumlah, nama). Tanda minus membuat jumlah besar di depan, nama menjadi pemecah seri secara abjad.",
"Kerangka solusinya:\nfrom collections import Counter\n\ndef top_k(penjualan, k):\n    …\n    …\n    return …"
],
"tes": [
[
"top_k([\"kopi\", \"teh\", \"kopi\", \"susu\", \"teh\", \"kopi\"], 2)",
"['kopi', 'teh']"
],
[
"top_k([\"b\", \"a\", \"b\", \"a\"], 1)",
"['a']"
],
[
"top_k([], 3)",
"[]"
],
[
"top_k([\"x\"], 5)",
"['x']"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-subtotal",
"judul": "Total quotation dengan diskon & pajak",
"kategori": "odoo",
"tingkat": 1,
"fungsi": "total_order",
"cerita": "Di Odoo, setiap baris Sales Order punya qty, harga satuan, dan diskon persen. <code>price_subtotal</code> = qty × harga × (1 − diskon/100), lalu pajak dihitung dari subtotal.",
"soal": "Buat <code>total_order(baris, pajak_persen)</code> yang mengembalikan dict <code>{\"untaxed\": ..., \"pajak\": ..., \"total\": ...}</code>. Setiap baris adalah dict dengan kunci <code>qty</code>, <code>harga</code>, <code>diskon</code>. Bulatkan <b>setiap nilai</b> ke 2 desimal dengan <code>round(x, 2)</code>; pajak dihitung dari untaxed yang sudah dibulatkan, dan total = untaxed + pajak.",
"awal": "def total_order(baris, pajak_persen):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def total_order(baris, pajak_persen):\n    untaxed = round(sum(b[\"qty\"] * b[\"harga\"] * (1 - b[\"diskon\"] / 100) for b in baris), 2)\n    pajak = round(untaxed * pajak_persen / 100, 2)\n    return {\"untaxed\": untaxed, \"pajak\": pajak, \"total\": round(untaxed + pajak, 2)}\n",
"jelas": "Ini meniru _compute_amounts di sale.order. Di Odoo sungguhan pembulatan memakai currency.round() sesuai mata uang, dan pajak bisa dihitung per baris atau global (pengaturan 'Rounding Method'). Urutan pembulatan memengaruhi hasil sen terakhir, jadi selalu tanyakan aturannya.",
"kompleksitas": "O(n)",
"petunjuk": [
"Subtotal satu baris = qty × harga × (1 − diskon / 100). Jumlahkan semua baris dengan sum(...).",
"Bulatkan untaxed dulu, baru hitung pajak dari angka yang sudah dibulatkan, lalu bulatkan pajak dan total.",
"Kerangka solusinya:\ndef total_order(baris, pajak_persen):\n    …\n    …\n    return …"
],
"tes": [
[
"total_order([{\"qty\": 2, \"harga\": 100000, \"diskon\": 10}, {\"qty\": 1, \"harga\": 50000, \"diskon\": 0}], 11)",
"{'untaxed': 230000.0, 'pajak': 25300.0, 'total': 255300.0}"
],
[
"total_order([], 11)",
"{'untaxed': 0, 'pajak': 0.0, 'total': 0.0}"
],
[
"total_order([{\"qty\": 3, \"harga\": 19.99, \"diskon\": 5}], 7)",
"{'untaxed': 56.97, 'pajak': 3.99, 'total': 60.96}"
],
[
"total_order([{\"qty\": 1, \"harga\": 1000, \"diskon\": 100}], 11)",
"{'untaxed': 0.0, 'pajak': 0.0, 'total': 0.0}"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-approval",
"judul": "Status approval berdasarkan limit",
"kategori": "odoo",
"tingkat": 1,
"fungsi": "status_setelah_confirm",
"cerita": "Perusahaan memasang aturan: quotation di atas limit harus disetujui Amount Approver dulu (seperti modul <i>sale_amount_approval</i>). Limit 0 berarti fitur mati.",
"soal": "Buat <code>status_setelah_confirm(total, limit, user_approver)</code> yang mengembalikan status baru: <code>\"to_approve\"</code> jika limit &gt; 0, total <b>lebih besar</b> dari limit, dan user bukan approver; selain itu <code>\"sale\"</code>.",
"awal": "def status_setelah_confirm(total, limit, user_approver):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def status_setelah_confirm(total, limit, user_approver):\n    if limit > 0 and total > limit and not user_approver:\n        return \"to_approve\"\n    return \"sale\"\n",
"jelas": "Soal logika boolean seperti ini sering muncul sebagai pemanasan tes Odoo. Uji batasnya: total = limit, limit = 0, dan nilai desimal sedikit di atas limit.",
"kompleksitas": "O(1)",
"petunjuk": [
"Tiga syarat harus benar SEMUA (and): limit aktif, total melewati limit, dan user bukan approver.",
"'Lebih besar' artinya >, bukan >=. Total yang tepat sama dengan limit langsung dikonfirmasi.",
"Kerangka solusinya:\ndef status_setelah_confirm(total, limit, user_approver):\n    if …:\n        return …\n    return …"
],
"tes": [
[
"status_setelah_confirm(5000, 1000, False)",
"'to_approve'"
],
[
"status_setelah_confirm(5000, 1000, True)",
"'sale'"
],
[
"status_setelah_confirm(1000, 1000, False)",
"'sale'"
],
[
"status_setelah_confirm(999999, 0, False)",
"'sale'"
],
[
"status_setelah_confirm(1000.01, 1000, False)",
"'to_approve'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-domain",
"judul": "Saring record dengan domain",
"kategori": "odoo",
"tingkat": 2,
"fungsi": "saring",
"cerita": "Odoo mencari record memakai <b>domain</b>: list berisi tuple <code>(field, operator, nilai)</code>. Semua tuple digabung dengan AND.",
"soal": "Buat <code>saring(records, domain)</code>. <code>records</code> adalah list dict. Dukung operator <code>= != &gt; &gt;= &lt; &lt;= in not in</code>. Kembalikan list record yang memenuhi <b>semua</b> syarat, urutan tetap. Domain kosong mengembalikan semua record.",
"awal": "def saring(records, domain):\n    # records: list of dict, domain: list of (field, operator, nilai)\n    pass\n",
"solusi": "import operator\n\nOPERATOR = {\n    \"=\": operator.eq, \"!=\": operator.ne, \">\": operator.gt, \">=\": operator.ge,\n    \"<\": operator.lt, \"<=\": operator.le,\n    \"in\": lambda a, b: a in b, \"not in\": lambda a, b: a not in b,\n}\n\ndef saring(records, domain):\n    return [r for r in records\n            if all(OPERATOR[op](r.get(field), nilai) for field, op, nilai in domain)]\n",
"jelas": "Inilah inti self.env['sale.order'].search([...]). Dict operator → fungsi menghindari rantai if-elif panjang dan mudah ditambah. all() pada domain kosong bernilai True, jadi semua record lolos, sama seperti search([]) di Odoo.",
"kompleksitas": "O(n · jumlah syarat)",
"petunjuk": [
"Buat dict yang memetakan teks operator ke fungsi pembanding, misalnya modul operator: operator.eq, operator.gt, ... Untuk in dan not in pakai lambda.",
"Record lolos jika all(...) syarat benar. List comprehension [r for r in records if all(...)] membuat kodenya ringkas.",
"Kerangka solusinya:\nimport operator\n\n…\n    …\n    …\n    …\n…\n\ndef saring(records, domain):\n    return …\n            if …"
],
"tes": [
[
"saring([{\"name\": \"SO1\", \"state\": \"sale\", \"amount\": 500}, {\"name\": \"SO2\", \"state\": \"draft\", \"amount\": 900}, {\"name\": \"SO3\", \"state\": \"sale\", \"amount\": 1200}], [(\"state\", \"=\", \"sale\"), (\"amount\", \">\", 600)])",
"[{'name': 'SO3', 'state': 'sale', 'amount': 1200}]"
],
[
"saring([{\"name\": \"SO1\", \"state\": \"sale\"}, {\"name\": \"SO2\", \"state\": \"cancel\"}], [])",
"[{'name': 'SO1', 'state': 'sale'}, {'name': 'SO2', 'state': 'cancel'}]"
],
[
"saring([{\"name\": \"A\", \"state\": \"draft\"}, {\"name\": \"B\", \"state\": \"sent\"}, {\"name\": \"C\", \"state\": \"sale\"}], [(\"state\", \"in\", [\"draft\", \"sent\"])])",
"[{'name': 'A', 'state': 'draft'}, {'name': 'B', 'state': 'sent'}]"
],
[
"saring([{\"name\": \"A\", \"state\": \"draft\"}, {\"name\": \"B\", \"state\": \"sent\"}, {\"name\": \"C\", \"state\": \"sale\"}], [(\"state\", \"not in\", [\"draft\", \"sent\"])])",
"[{'name': 'C', 'state': 'sale'}]"
],
[
"saring([{\"name\": \"A\", \"qty\": 0}, {\"name\": \"B\", \"qty\": 5}], [(\"qty\", \"<=\", 0)])",
"[{'name': 'A', 'qty': 0}]"
],
[
"saring([{\"name\": \"A\", \"qty\": 3}], [(\"qty\", \"!=\", 3)])",
"[]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-domain-polish",
"judul": "Domain dengan '|' dan '!'",
"kategori": "odoo",
"tingkat": 3,
"fungsi": "cocok",
"cerita": "Domain Odoo memakai notasi prefiks (Polish): <code>'|'</code> = OR dan <code>'&amp;'</code> = AND untuk <b>dua</b> elemen berikutnya, <code>'!'</code> = NOT untuk <b>satu</b> elemen berikutnya. Tuple tanpa operator di depannya digabung dengan AND.",
"soal": "Buat <code>cocok(record, domain)</code> yang mengembalikan True/False. Operator tuple cukup <code>= != &gt; &lt;</code>. Contoh: <code>['|', ('state', '=', 'draft'), ('state', '=', 'sent')]</code> berarti state draft ATAU sent.",
"awal": "def cocok(record, domain):\n    # domain contoh: ['|', ('state', '=', 'draft'), ('state', '=', 'sent')]\n    pass\n",
"solusi": "def cocok(record, domain):\n    banding = {\"=\": lambda a, b: a == b, \"!=\": lambda a, b: a != b,\n               \">\": lambda a, b: a > b, \"<\": lambda a, b: a < b}\n    tumpukan = []\n    for item in reversed(domain):\n        if item == \"|\":\n            tumpukan.append(tumpukan.pop() or tumpukan.pop())\n        elif item == \"&\":\n            a, b = tumpukan.pop(), tumpukan.pop()\n            tumpukan.append(a and b)\n        elif item == \"!\":\n            tumpukan.append(not tumpukan.pop())\n        else:\n            field, op, nilai = item\n            tumpukan.append(banding[op](record.get(field), nilai))\n    return all(tumpukan)\n",
"jelas": "Domain Odoo memang ditulis dalam Polish notation, dan pemahaman '|' sering ditanyakan: ['|', A, B, C] artinya (A OR B) AND C. Evaluasi dari belakang dengan stack adalah cara standar menghitung ekspresi prefiks.",
"kompleksitas": "O(panjang domain)",
"petunjuk": [
"Notasi prefiks paling mudah dievaluasi dari BELAKANG ke depan dengan stack: tuple → dorong True/False; operator → ambil operand dari stack, dorong hasilnya.",
"'|' dan '&' mengambil 2 nilai, '!' mengambil 1. Di akhir, sisa nilai di stack digabung dengan AND (all), karena tuple tanpa operator = AND implisit.",
"Kerangka solusinya:\ndef cocok(record, domain):\n    …\n               …\n    …\n    for …:\n        if …:\n            …\n        elif …:\n            …\n            …\n        elif …:\n            …\n        else:\n            …\n            …\n    return …"
],
"tes": [
[
"cocok({\"state\": \"sent\"}, [\"|\", (\"state\", \"=\", \"draft\"), (\"state\", \"=\", \"sent\")])",
"True"
],
[
"cocok({\"state\": \"sale\"}, [\"|\", (\"state\", \"=\", \"draft\"), (\"state\", \"=\", \"sent\")])",
"False"
],
[
"cocok({\"state\": \"sale\", \"amount\": 50}, [(\"state\", \"=\", \"sale\"), (\"amount\", \">\", 100)])",
"False"
],
[
"cocok({\"state\": \"cancel\"}, [\"!\", (\"state\", \"=\", \"cancel\")])",
"False"
],
[
"cocok({\"a\": 1, \"b\": 2, \"c\": 3}, [\"|\", (\"a\", \"=\", 9), \"&\", (\"b\", \"=\", 2), (\"c\", \"=\", 3)])",
"True"
],
[
"cocok({\"a\": 1, \"b\": 2, \"c\": 3}, [\"&\", \"|\", (\"a\", \"=\", 9), (\"b\", \"=\", 9), (\"c\", \"=\", 3)])",
"False"
],
[
"cocok({\"x\": 5}, [])",
"True"
],
[
"cocok({\"a\": 1, \"b\": 2}, [\"|\", \"!\", (\"a\", \"=\", 1), (\"b\", \"<\", 3)])",
"True"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-read-group",
"judul": "read_group: total per salesperson",
"kategori": "odoo",
"tingkat": 2,
"fungsi": "total_per",
"cerita": "",
"soal": "Buat <code>total_per(records, field_group, field_jumlah)</code> yang meniru <code>read_group</code>: kembalikan list dict <code>{field_group: nilai, field_jumlah: total, \"count\": banyak}</code>, diurutkan dari total <b>terbesar</b>. Jika total sama, urutkan berdasarkan nilai grup secara abjad.",
"awal": "def total_per(records, field_group, field_jumlah):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def total_per(records, field_group, field_jumlah):\n    grup = {}\n    for r in records:\n        g = grup.setdefault(r[field_group], {field_group: r[field_group], field_jumlah: 0, \"count\": 0})\n        g[field_jumlah] += r[field_jumlah]\n        g[\"count\"] += 1\n    return sorted(grup.values(), key=lambda g: (-g[field_jumlah], g[field_group]))\n",
"jelas": "Di Odoo 17: self.env['sale.order'].read_group(domain, ['amount_total:sum'], ['user_id']) atau _read_group yang lebih baru. Pola 'kelompokkan dengan dict' adalah dasar semua laporan dan dashboard.",
"kompleksitas": "O(n log n)",
"petunjuk": [
"Pakai dict yang kuncinya nilai grup (misalnya nama user). setdefault membuat entri baru bila belum ada.",
"Untuk setiap record, tambahkan jumlah dan count. Lalu sorted(..., key=lambda g: (-total, nama)).",
"Kerangka solusinya:\ndef total_per(records, field_group, field_jumlah):\n    …\n    for …:\n        …\n        …\n        …\n    return …"
],
"tes": [
[
"total_per([{\"user\": \"Ani\", \"amount\": 300}, {\"user\": \"Budi\", \"amount\": 500}, {\"user\": \"Ani\", \"amount\": 400}], \"user\", \"amount\")",
"[{'user': 'Ani', 'amount': 700, 'count': 2}, {'user': 'Budi', 'amount': 500, 'count': 1}]"
],
[
"total_per([], \"user\", \"amount\")",
"[]"
],
[
"total_per([{\"tim\": \"B\", \"qty\": 2}, {\"tim\": \"A\", \"qty\": 2}], \"tim\", \"qty\")",
"[{'tim': 'A', 'qty': 2, 'count': 1}, {'tim': 'B', 'qty': 2, 'count': 1}]"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-sequence",
"judul": "Nomor urut berikutnya",
"kategori": "odoo",
"tingkat": 2,
"fungsi": "nomor_berikutnya",
"cerita": "ir.sequence membuat nomor seperti <code>S00042</code> atau <code>INV/2026/00017</code>: awalan tetap + angka berisi nol di depan (padding).",
"soal": "Buat <code>nomor_berikutnya(nomor)</code> yang menaikkan bagian angka <b>di akhir</b> nomor sebanyak 1 dengan panjang padding yang sama. Jika angkanya melewati panjang padding, biarkan lebih panjang. Contoh <code>\"SO/2026/0099\"</code> → <code>\"SO/2026/0100\"</code>.",
"awal": "def nomor_berikutnya(nomor):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import re\n\ndef nomor_berikutnya(nomor):\n    m = re.search(r\"(\\d+)$\", nomor)\n    angka = m.group(1)\n    baru = str(int(angka) + 1).zfill(len(angka))\n    return nomor[:m.start()] + baru\n",
"jelas": "zfill menambah nol di kiri sampai panjang tertentu, tetapi tidak memotong angka yang lebih panjang (999 → 1000). Odoo sendiri menyimpan nomor berikutnya (number_next) dan padding di record ir.sequence, bukan membaca nomor terakhir.",
"kompleksitas": "O(panjang nomor)",
"petunjuk": [
"Ambil angka di akhir string. Regex r\"(\\d+)$\" menangkap digit yang menempel di ujung. Perhatikan 2026 di tengah tidak boleh ikut berubah.",
"Naikkan dengan int(...) + 1, lalu kembalikan nolnya dengan str(...).zfill(panjang_lama).",
"Kerangka solusinya:\nimport re\n\ndef nomor_berikutnya(nomor):\n    …\n    …\n    …\n    return …"
],
"tes": [
[
"nomor_berikutnya(\"SO/2026/0099\")",
"'SO/2026/0100'"
],
[
"nomor_berikutnya(\"S00042\")",
"'S00043'"
],
[
"nomor_berikutnya(\"INV/2026/9\")",
"'INV/2026/10'"
],
[
"nomor_berikutnya(\"PO999\")",
"'PO1000'"
],
[
"nomor_berikutnya(\"WH/IN/00000\")",
"'WH/IN/00001'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-stok",
"judul": "Stok tersedia dari stock move",
"kategori": "odoo",
"tingkat": 2,
"fungsi": "stok_tersedia",
"cerita": "Stok di Odoo dihitung dari <b>stock.move</b>: barang masuk (in) menambah, barang keluar (out) mengurangi. Hanya move berstatus <code>done</code> yang dihitung sebagai stok on hand.",
"soal": "Buat <code>stok_tersedia(moves)</code> yang mengembalikan dict <code>{produk: qty}</code> dari move berstatus <code>\"done\"</code>. Produk yang qty akhirnya 0 tetap ditampilkan.",
"awal": "def stok_tersedia(moves):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def stok_tersedia(moves):\n    stok = {}\n    for m in moves:\n        if m[\"state\"] != \"done\":\n            continue\n        tanda = 1 if m[\"tipe\"] == \"in\" else -1\n        stok[m[\"produk\"]] = stok.get(m[\"produk\"], 0) + tanda * m[\"qty\"]\n    return stok\n",
"jelas": "Meja tidak muncul karena move-nya belum done (masih reserved). Di Odoo, qty_available dihitung dari stock.quant, sedangkan virtual_available (forecast) ikut menghitung move yang belum selesai.",
"kompleksitas": "O(n)",
"petunjuk": [
"Lewati (continue) move yang statusnya bukan done.",
"Ubah tipe menjadi tanda +1 atau -1, lalu tambahkan ke dict dengan get(produk, 0).",
"Kerangka solusinya:\ndef stok_tersedia(moves):\n    …\n    for …:\n        if …:\n            …\n        …\n        …\n    return …"
],
"tes": [
[
"stok_tersedia([{\"produk\": \"Kursi\", \"tipe\": \"in\", \"qty\": 10, \"state\": \"done\"}, {\"produk\": \"Kursi\", \"tipe\": \"out\", \"qty\": 3, \"state\": \"done\"}, {\"produk\": \"Meja\", \"tipe\": \"in\", \"qty\": 5, \"state\": \"assigned\"}])",
"{'Kursi': 7}"
],
[
"stok_tersedia([])",
"{}"
],
[
"stok_tersedia([{\"produk\": \"A\", \"tipe\": \"in\", \"qty\": 2, \"state\": \"done\"}, {\"produk\": \"A\", \"tipe\": \"out\", \"qty\": 2, \"state\": \"done\"}])",
"{'A': 0}"
],
[
"stok_tersedia([{\"produk\": \"A\", \"tipe\": \"out\", \"qty\": 1, \"state\": \"cancel\"}, {\"produk\": \"B\", \"tipe\": \"in\", \"qty\": 7, \"state\": \"done\"}])",
"{'B': 7}"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-jatuh-tempo",
"judul": "Tanggal jatuh tempo",
"kategori": "odoo",
"tingkat": 2,
"fungsi": "jatuh_tempo",
"cerita": "Payment term \"30 Days\" berarti faktur jatuh tempo 30 hari setelah tanggal faktur. Ada juga aturan \"akhir bulan\" (end of month).",
"soal": "Buat <code>jatuh_tempo(tanggal, hari, akhir_bulan=False)</code>. <code>tanggal</code> berformat <code>\"YYYY-MM-DD\"</code>. Tambahkan <code>hari</code>; jika <code>akhir_bulan</code> True, geser hasilnya ke <b>tanggal terakhir di bulan itu</b>. Kembalikan string berformat sama.",
"awal": "def jatuh_tempo(tanggal, hari, akhir_bulan=False):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import calendar\nfrom datetime import date, timedelta\n\ndef jatuh_tempo(tanggal, hari, akhir_bulan=False):\n    d = date.fromisoformat(tanggal) + timedelta(days=hari)\n    if akhir_bulan:\n        d = d.replace(day=calendar.monthrange(d.year, d.month)[1])\n    return d.isoformat()\n",
"jelas": "Jangan menghitung tanggal dengan menambah angka hari secara manual; pustaka datetime sudah menangani pergantian bulan, tahun, dan kabisat (2028 kabisat, Februari 29 hari). Di Odoo 17 logika ini ada di account.payment.term.line (_get_due_date).",
"kompleksitas": "O(1)",
"petunjuk": [
"date.fromisoformat(\"2026-11-24\") mengubah teks jadi tanggal; timedelta(days=30) menambah hari dengan benar melewati akhir bulan/tahun.",
"calendar.monthrange(tahun, bulan)[1] memberi jumlah hari di bulan itu (memperhitungkan tahun kabisat). Lalu d.replace(day=...).",
"Kerangka solusinya:\nimport calendar\nfrom datetime import date, timedelta\n\ndef jatuh_tempo(tanggal, hari, akhir_bulan=False):\n    …\n    if …:\n        …\n    return …"
],
"tes": [
[
"jatuh_tempo(\"2026-11-24\", 30)",
"'2026-12-24'"
],
[
"jatuh_tempo(\"2026-12-15\", 30)",
"'2027-01-14'"
],
[
"jatuh_tempo(\"2028-02-10\", 5, True)",
"'2028-02-29'"
],
[
"jatuh_tempo(\"2026-01-31\", 0, True)",
"'2026-01-31'"
],
[
"jatuh_tempo(\"2026-11-24\", 0)",
"'2026-11-24'"
],
[
"jatuh_tempo(\"2027-02-01\", 15, True)",
"'2027-02-28'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-pricelist",
"judul": "Harga pricelist bertingkat",
"kategori": "odoo",
"tingkat": 2,
"fungsi": "harga_pricelist",
"cerita": "Pricelist bisa memberi harga berbeda menurut jumlah minimum (min_quantity). Aturan yang dipakai adalah aturan dengan min_quantity <b>terbesar</b> yang masih ≤ qty pesanan.",
"soal": "Buat <code>harga_pricelist(qty, harga_dasar, aturan)</code>. <code>aturan</code> adalah list dict <code>{\"min_qty\": ..., \"diskon\": persen}</code> (urutan acak). Kembalikan harga satuan setelah diskon dari aturan yang berlaku, dibulatkan 2 desimal. Jika tidak ada aturan yang berlaku, pakai harga dasar.",
"awal": "def harga_pricelist(qty, harga_dasar, aturan):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def harga_pricelist(qty, harga_dasar, aturan):\n    berlaku = [a for a in aturan if a[\"min_qty\"] <= qty]\n    if not berlaku:\n        return round(harga_dasar, 2)\n    pilih = max(berlaku, key=lambda a: a[\"min_qty\"])\n    return round(harga_dasar * (1 - pilih[\"diskon\"] / 100), 2)\n",
"jelas": "max() dengan key mengembalikan ITEM-nya, bukan nilai key-nya, jadi kamu langsung dapat dict aturan. Di Odoo 17 urutan pemilihan aturan pricelist juga memperhitungkan produk/kategori dan tanggal; soal ini fokus ke min_quantity.",
"kompleksitas": "O(jumlah aturan)",
"petunjuk": [
"Saring dulu aturan yang min_qty <= qty.",
"Dari yang lolos, ambil yang min_qty-nya terbesar: max(berlaku, key=lambda a: a[\"min_qty\"]). Tangani kasus tidak ada aturan yang lolos.",
"Kerangka solusinya:\ndef harga_pricelist(qty, harga_dasar, aturan):\n    …\n    if …:\n        return …\n    …\n    return …"
],
"tes": [
[
"harga_pricelist(25, 10000, [{\"min_qty\": 10, \"diskon\": 5}, {\"min_qty\": 50, \"diskon\": 15}, {\"min_qty\": 20, \"diskon\": 10}])",
"9000.0"
],
[
"harga_pricelist(5, 10000, [{\"min_qty\": 10, \"diskon\": 5}])",
"10000"
],
[
"harga_pricelist(50, 10000, [{\"min_qty\": 10, \"diskon\": 5}, {\"min_qty\": 50, \"diskon\": 15}])",
"8500.0"
],
[
"harga_pricelist(3, 99.99, [])",
"99.99"
],
[
"harga_pricelist(10, 33.33, [{\"min_qty\": 1, \"diskon\": 12.5}])",
"29.16"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-top-customer",
"judul": "Pelanggan teratas (mapped & sorted)",
"kategori": "odoo",
"tingkat": 2,
"fungsi": "pelanggan_teratas",
"cerita": "",
"soal": "Diberi list order <code>{\"partner\": nama, \"state\": ..., \"amount_total\": ...}</code>, buat <code>pelanggan_teratas(orders, n)</code> yang mengembalikan n nama pelanggan dengan total belanja terbesar, <b>hanya dari order berstatus <code>\"sale\"</code> atau <code>\"done\"</code></b>. Urutkan total terbesar dulu; seri diurutkan abjad.",
"awal": "def pelanggan_teratas(orders, n):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def pelanggan_teratas(orders, n):\n    total = {}\n    for o in orders:\n        if o[\"state\"] in (\"sale\", \"done\"):\n            total[o[\"partner\"]] = total.get(o[\"partner\"], 0) + o[\"amount_total\"]\n    urut = sorted(total, key=lambda p: (-total[p], p))\n    return urut[:n]\n",
"jelas": "Padanan Odoo: orders.filtered(lambda o: o.state in ('sale', 'done')), lalu kelompokkan berdasarkan partner_id. PT B tidak masuk walaupun angkanya besar, karena masih draft (quotation belum menjadi penjualan).",
"kompleksitas": "O(n log n)",
"petunjuk": [
"Langkah 1 = filtered (ambil state sale/done). Langkah 2 = jumlahkan per partner dengan dict. Langkah 3 = sorted.",
"sorted(total, key=lambda p: (-total[p], p)) mengurutkan KUNCI dict berdasarkan nilainya; lalu potong [:n].",
"Kerangka solusinya:\ndef pelanggan_teratas(orders, n):\n    …\n    for …:\n        if …:\n            …\n    …\n    return …"
],
"tes": [
[
"pelanggan_teratas([{\"partner\": \"PT A\", \"state\": \"sale\", \"amount_total\": 500}, {\"partner\": \"PT B\", \"state\": \"draft\", \"amount_total\": 9000}, {\"partner\": \"PT C\", \"state\": \"done\", \"amount_total\": 700}, {\"partner\": \"PT A\", \"state\": \"sale\", \"amount_total\": 300}], 2)",
"['PT A', 'PT C']"
],
[
"pelanggan_teratas([], 3)",
"[]"
],
[
"pelanggan_teratas([{\"partner\": \"Z\", \"state\": \"sale\", \"amount_total\": 10}, {\"partner\": \"Y\", \"state\": \"sale\", \"amount_total\": 10}], 1)",
"['Y']"
],
[
"pelanggan_teratas([{\"partner\": \"X\", \"state\": \"cancel\", \"amount_total\": 10}], 1)",
"[]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "odoo-onchange-diskon",
"judul": "Validasi diskon (constraint)",
"kategori": "odoo",
"tingkat": 2,
"fungsi": "cek_baris",
"cerita": "Di Odoo, @api.constrains memunculkan ValidationError bila data tidak valid. Di soal ini kita mengembalikan daftar pesan error sebagai gantinya.",
"soal": "Buat <code>cek_baris(baris, diskon_maks)</code>. Untuk setiap baris (dict dengan <code>produk</code>, <code>qty</code>, <code>diskon</code>), kumpulkan pesan: <code>\"&lt;produk&gt;: qty harus lebih dari 0\"</code> jika qty ≤ 0, dan <code>\"&lt;produk&gt;: diskon melebihi &lt;diskon_maks&gt;%\"</code> jika diskon &gt; diskon_maks. Kembalikan list pesan sesuai urutan baris (pesan qty dulu, lalu diskon).",
"awal": "def cek_baris(baris, diskon_maks):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def cek_baris(baris, diskon_maks):\n    pesan = []\n    for b in baris:\n        if b[\"qty\"] <= 0:\n            pesan.append(f\"{b['produk']}: qty harus lebih dari 0\")\n        if b[\"diskon\"] > diskon_maks:\n            pesan.append(f\"{b['produk']}: diskon melebihi {diskon_maks}%\")\n    return pesan\n",
"jelas": "Pada model Odoo: @api.constrains('discount') def _cek_diskon(self): for line in self: if line.discount > 20: raise ValidationError(...). Constraint selalu ditulis dengan for line in self karena self bisa berisi banyak record.",
"kompleksitas": "O(n)",
"petunjuk": [
"Dua if terpisah (bukan elif), karena satu baris bisa punya dua kesalahan sekaligus.",
"Gunakan f-string: f\"{b['produk']}: qty harus lebih dari 0\". Perhatikan kutip di dalam f-string harus berbeda dengan kutip luarnya.",
"Kerangka solusinya:\ndef cek_baris(baris, diskon_maks):\n    …\n    for …:\n        if …:\n            …\n        if …:\n            …\n    return …"
],
"tes": [
[
"cek_baris([{\"produk\": \"Laptop\", \"qty\": 1, \"diskon\": 30}, {\"produk\": \"Mouse\", \"qty\": 0, \"diskon\": 0}], 20)",
"['Laptop: diskon melebihi 20%', 'Mouse: qty harus lebih dari 0']"
],
[
"cek_baris([], 20)",
"[]"
],
[
"cek_baris([{\"produk\": \"Kabel\", \"qty\": -2, \"diskon\": 50}], 10)",
"['Kabel: qty harus lebih dari 0', 'Kabel: diskon melebihi 10%']"
],
[
"cek_baris([{\"produk\": \"Tas\", \"qty\": 3, \"diskon\": 20}], 20)",
"[]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "rpa-email",
"judul": "Ambil semua email dari teks",
"kategori": "otomasi",
"tingkat": 2,
"fungsi": "ambil_email",
"cerita": "Robot RPA membaca isi email masuk dan perlu mengambil semua alamat email untuk dimasukkan ke CRM.",
"soal": "Buat <code>ambil_email(teks)</code> yang mengembalikan list alamat email unik dalam huruf kecil, urut sesuai kemunculan pertama. Anggap email berbentuk <code>nama@domain.tld</code> dengan nama berisi huruf, angka, titik, garis bawah, plus, atau minus.",
"awal": "def ambil_email(teks):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import re\n\ndef ambil_email(teks):\n    hasil = []\n    for e in re.findall(r\"[\\w.+-]+@[\\w-]+(?:\\.[\\w-]+)+\", teks):\n        e = e.lower()\n        if e not in hasil:\n            hasil.append(e)\n    return hasil\n",
"jelas": "Hati-hati: kalau pola memakai grup biasa (...), findall hanya mengembalikan isi grupnya. Itu sebabnya dipakai (?:...). Titik di akhir kalimat tidak ikut karena setelah titik tidak ada huruf.",
"kompleksitas": "O(n)",
"petunjuk": [
"re.findall(pola, teks) mengembalikan semua potongan yang cocok.",
"Pola sederhana: r\"[\\w.+-]+@[\\w-]+(?:\\.[\\w-]+)+\". (?:...) adalah grup yang tidak ditangkap, jadi findall tetap mengembalikan seluruh email.",
"Kerangka solusinya:\nimport re\n\ndef ambil_email(teks):\n    …\n    for …:\n        …\n        if …:\n            …\n    return …"
],
"tes": [
[
"ambil_email(\"Hubungi Sales@Contoh.co.id atau support@contoh.com. CC: sales@contoh.co.id\")",
"['sales@contoh.co.id', 'support@contoh.com']"
],
[
"ambil_email(\"tidak ada email di sini\")",
"[]"
],
[
"ambil_email(\"a.b+tag@mail-server.org, x_y@z.io\")",
"['a.b+tag@mail-server.org', 'x_y@z.io']"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
},
{
"id": "rpa-csv",
"judul": "Ringkas CSV penjualan",
"kategori": "otomasi",
"tingkat": 2,
"fungsi": "ringkas_csv",
"cerita": "",
"soal": "Buat <code>ringkas_csv(teks_csv)</code>. Baris pertama adalah header <code>kategori,qty,harga</code>. Kembalikan dict <code>{kategori: total_penjualan}</code> dengan total = jumlah qty × harga, dibulatkan 2 desimal. Gunakan modul <code>csv</code> (nilai bisa berada di dalam tanda kutip dan berisi koma).",
"awal": "def ringkas_csv(teks_csv):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import csv, io\n\ndef ringkas_csv(teks_csv):\n    total = {}\n    for baris in csv.DictReader(io.StringIO(teks_csv)):\n        nilai = int(baris[\"qty\"]) * float(baris[\"harga\"])\n        total[baris[\"kategori\"]] = round(total.get(baris[\"kategori\"], 0) + nilai, 2)\n    return total\n",
"jelas": "split(',') akan rusak untuk \"Meja, Kursi\" yang berisi koma di dalam kutip; modul csv menanganinya dengan benar. Di dunia RPA dan impor data Odoo, file CSV/Excel adalah makanan sehari-hari.",
"kompleksitas": "O(n)",
"petunjuk": [
"csv.DictReader membaca setiap baris sebagai dict berdasarkan header. Teks biasa bisa dibungkus io.StringIO(teks) supaya terbaca seperti file.",
"Nilai dari CSV selalu string: ubah dengan int() dan float() sebelum dikalikan.",
"Kerangka solusinya:\nimport csv, io\n\ndef ringkas_csv(teks_csv):\n    …\n    for …:\n        …\n        …\n    return …"
],
"tes": [
[
"ringkas_csv(\"kategori,qty,harga\\nATK,2,5000\\nElektronik,1,250000\\nATK,3,1500.5\")",
"{'ATK': 14501.5, 'Elektronik': 250000.0}"
],
[
"ringkas_csv(\"kategori,qty,harga\\n\")",
"{}"
],
[
"ringkas_csv(\"kategori,qty,harga\\n\\\"Meja, Kursi\\\",2,100\")",
"{'Meja, Kursi': 200.0}"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
},
{
"id": "rpa-tanggal",
"judul": "Ubah format tanggal",
"kategori": "otomasi",
"tingkat": 1,
"fungsi": "ke_iso",
"cerita": "",
"soal": "Buat <code>ke_iso(tanggal)</code> yang mengubah tanggal berformat Indonesia <code>\"DD/MM/YYYY\"</code> menjadi <code>\"YYYY-MM-DD\"</code> (format yang diterima Odoo). Jika tanggal tidak valid (misalnya 31/02/2026), kembalikan <code>None</code>.",
"awal": "def ke_iso(tanggal):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "from datetime import datetime\n\ndef ke_iso(tanggal):\n    try:\n        return datetime.strptime(tanggal, \"%d/%m/%Y\").strftime(\"%Y-%m-%d\")\n    except ValueError:\n        return None\n",
"jelas": "Memotong string dengan split('/') lalu menyusun ulang tidak akan mendeteksi 31/02. Biarkan pustaka datetime yang memvalidasi. strptime juga menerima '1/2/2026' tanpa nol di depan.",
"kompleksitas": "O(1)",
"petunjuk": [
"datetime.strptime(teks, \"%d/%m/%Y\") membaca teks menjadi tanggal; strftime(\"%Y-%m-%d\") menulisnya kembali.",
"strptime melempar ValueError kalau tanggal tidak valid. Tangkap dengan try/except dan kembalikan None.",
"Kerangka solusinya:\nfrom datetime import datetime\n\ndef ke_iso(tanggal):\n    try:\n        return …\n    except …:\n        return …"
],
"tes": [
[
"ke_iso(\"24/11/2026\")",
"'2026-11-24'"
],
[
"ke_iso(\"31/02/2026\")",
"None"
],
[
"ke_iso(\"1/2/2026\")",
"'2026-02-01'"
],
[
"ke_iso(\"2026-11-24\")",
"None"
],
[
"ke_iso(\"29/02/2028\")",
"'2028-02-29'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "rpa-telepon",
"judul": "Normalisasi nomor telepon",
"kategori": "otomasi",
"tingkat": 2,
"fungsi": "normalisasi_hp",
"cerita": "Data kontak dari berbagai sumber ditulis berbeda-beda. Sebelum diimpor ke Odoo, nomor harus seragam berformat internasional.",
"soal": "Buat <code>normalisasi_hp(nomor)</code>: buang semua karakter selain angka (tetapi ingat apakah diawali <code>+</code>). Jika diawali <code>0</code>, ganti 0 dengan <code>62</code>. Jika sudah diawali <code>62</code>, biarkan. Hasil diberi awalan <code>+</code>. Jika setelah dibersihkan panjang angkanya kurang dari 10 atau lebih dari 15, kembalikan <code>None</code>.",
"awal": "def normalisasi_hp(nomor):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import re\n\ndef normalisasi_hp(nomor):\n    angka = re.sub(r\"\\D\", \"\", nomor)\n    if angka.startswith(\"0\"):\n        angka = \"62\" + angka[1:]\n    if not angka.startswith(\"62\") or not 10 <= len(angka) <= 15:\n        return None\n    return \"+\" + angka\n",
"jelas": "Normalisasi data sebelum impor mencegah kontak ganda di CRM. Urutan langkahnya: bersihkan, ubah awalan, lalu validasi. Batas panjang 10–15 mengikuti standar E.164 (maksimal 15 digit).",
"kompleksitas": "O(n)",
"petunjuk": [
"re.sub(r\"\\D\", \"\", nomor) membuang semua yang bukan digit (\\D = bukan digit).",
"Setelah bersih: awalan 0 → 62. Lalu cek harus diawali 62 dan panjangnya 10–15 digit. Nomor luar negeri (+1 ...) dianggap tidak valid di soal ini.",
"Kerangka solusinya:\nimport re\n\ndef normalisasi_hp(nomor):\n    …\n    if …:\n        …\n    if …:\n        return …\n    return …"
],
"tes": [
[
"normalisasi_hp(\"0812-3456-7890\")",
"'+6281234567890'"
],
[
"normalisasi_hp(\"+62 812 3456 7890\")",
"'+6281234567890'"
],
[
"normalisasi_hp(\"(0274) 512345\")",
"'+62274512345'"
],
[
"normalisasi_hp(\"0812\")",
"None"
],
[
"normalisasi_hp(\"62 811 222 333\")",
"'+62811222333'"
],
[
"normalisasi_hp(\"+1 415 555 0100\")",
"None"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "rpa-log",
"judul": "Error terbanyak di log",
"kategori": "otomasi",
"tingkat": 2,
"fungsi": "error_terbanyak",
"cerita": "Robot otomasi menulis log seperti <code>2026-11-24 10:01:22 ERROR [E102] Timeout saat login</code>. Tim ingin tahu kode error yang paling sering muncul.",
"soal": "Buat <code>error_terbanyak(log)</code>. <code>log</code> adalah satu string berisi banyak baris. Hitung hanya baris berlevel <code>ERROR</code>, ambil kode di dalam kurung siku. Kembalikan tuple <code>(kode, jumlah)</code> untuk kode terbanyak; jika seri, kode terkecil secara abjad. Jika tidak ada error, kembalikan <code>None</code>.",
"awal": "def error_terbanyak(log):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import re\nfrom collections import Counter\n\ndef error_terbanyak(log):\n    kode = re.findall(r\"\\bERROR \\[(\\w+)\\]\", log)\n    if not kode:\n        return None\n    hitung = Counter(kode)\n    return min(hitung.items(), key=lambda p: (-p[1], p[0]))\n",
"jelas": "Kurung siku adalah karakter khusus di regex, jadi harus di-escape: \\[ dan \\]. Analisis log seperti ini adalah pekerjaan rutin di tim RPA untuk menemukan bot yang sering gagal.",
"kompleksitas": "O(n)",
"petunjuk": [
"Regex dengan satu grup tangkap: r\"\\bERROR \\[(\\w+)\\]\". findall lalu mengembalikan isi grup saja, yaitu kodenya.",
"Hitung dengan Counter, lalu pilih dengan min(..., key=lambda p: (-jumlah, kode)) agar seri jatuh ke abjad terkecil.",
"Kerangka solusinya:\nimport re\nfrom collections import Counter\n\ndef error_terbanyak(log):\n    …\n    if …:\n        return …\n    …\n    return …"
],
"tes": [
[
"error_terbanyak(\"2026-11-24 10:01 ERROR [E102] Timeout\\n2026-11-24 10:02 INFO [I001] OK\\n2026-11-24 10:03 ERROR [E102] Timeout\\n2026-11-24 10:04 ERROR [E201] Captcha\")",
"('E102', 2)"
],
[
"error_terbanyak(\"2026-11-24 10:02 INFO [I001] OK\")",
"None"
],
[
"error_terbanyak(\"x ERROR [B2] a\\ny ERROR [A1] b\")",
"('A1', 1)"
],
[
"error_terbanyak(\"\")",
"None"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "rpa-json",
"judul": "Olah respons JSON API",
"kategori": "otomasi",
"tingkat": 2,
"fungsi": "ringkas_json",
"cerita": "Odoo dan banyak layanan mengirim data lewat API dalam format JSON. Kamu menerima daftar invoice dari API.",
"soal": "Buat <code>ringkas_json(teks)</code>. <code>teks</code> adalah string JSON berbentuk <code>{\"invoices\": [{\"number\": ..., \"state\": ..., \"amount\": ...}, ...]}</code>. Kembalikan dict <code>{\"jumlah\": banyak invoice posted, \"total\": total amount posted (2 desimal), \"nomor\": list nomor posted terurut}</code>.",
"awal": "def ringkas_json(teks):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import json\n\ndef ringkas_json(teks):\n    data = json.loads(teks)\n    posted = [i for i in data.get(\"invoices\", []) if i.get(\"state\") == \"posted\"]\n    return {\n        \"jumlah\": len(posted),\n        \"total\": round(sum(i[\"amount\"] for i in posted), 2),\n        \"nomor\": sorted(i[\"number\"] for i in posted),\n    }\n",
"jelas": "Selalu siap menghadapi data yang tidak lengkap dari API: .get() dengan nilai bawaan lebih aman daripada data[\"kunci\"]. sum dari list kosong = 0, dan round(0, 2) = 0.",
"kompleksitas": "O(n log n)",
"petunjuk": [
"json.loads(teks) mengubah string JSON menjadi dict/list Python.",
"Pakai .get(\"invoices\", []) supaya JSON tanpa kunci invoices tidak menyebabkan KeyError.",
"Kerangka solusinya:\nimport json\n\ndef ringkas_json(teks):\n    …\n    …\n    return …\n        …\n        …\n        …\n    …"
],
"tes": [
[
"ringkas_json('{\"invoices\": [{\"number\": \"INV/2026/0002\", \"state\": \"posted\", \"amount\": 150.5}, {\"number\": \"INV/2026/0001\", \"state\": \"posted\", \"amount\": 99.5}, {\"number\": \"INV/2026/0003\", \"state\": \"draft\", \"amount\": 10}]}')",
"{'jumlah': 2, 'total': 250.0, 'nomor': ['INV/2026/0001', 'INV/2026/0002']}"
],
[
"ringkas_json('{\"invoices\": []}')",
"{'jumlah': 0, 'total': 0, 'nomor': []}"
],
[
"ringkas_json('{}')",
"{'jumlah': 0, 'total': 0, 'nomor': []}"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
},
{
"id": "oop-rekening",
"judul": "Class Rekening",
"kategori": "oop",
"tingkat": 2,
"fungsi": "Rekening",
"cerita": "",
"soal": "Buat class <code>Rekening</code> dengan <code>__init__(self, pemilik, saldo=0)</code>, method <code>setor(jumlah)</code> dan <code>tarik(jumlah)</code> yang mengembalikan saldo baru, serta atribut <code>saldo</code>. Jumlah ≤ 0 melempar <code>ValueError</code>. Penarikan melebihi saldo juga melempar <code>ValueError</code> dan saldo tidak berubah.",
"awal": "class Rekening:\n    def __init__(self, pemilik, saldo=0):\n        pass\n\n    def setor(self, jumlah):\n        pass\n\n    def tarik(self, jumlah):\n        pass\n",
"solusi": "class Rekening:\n    def __init__(self, pemilik, saldo=0):\n        self.pemilik = pemilik\n        self.saldo = saldo\n\n    def setor(self, jumlah):\n        if jumlah <= 0:\n            raise ValueError(\"Jumlah harus lebih dari 0\")\n        self.saldo += jumlah\n        return self.saldo\n\n    def tarik(self, jumlah):\n        if jumlah <= 0:\n            raise ValueError(\"Jumlah harus lebih dari 0\")\n        if jumlah > self.saldo:\n            raise ValueError(\"Saldo tidak cukup\")\n        self.saldo -= jumlah\n        return self.saldo\n",
"jelas": "Urutan 'validasi dulu, ubah belakangan' menjaga data tetap konsisten. Ini sama dengan pola Odoo: raise UserError sebelum write(). Tes ketiga memastikan saldo tetap 100 setelah penarikan gagal.",
"kompleksitas": "O(1) per operasi",
"petunjuk": [
"Simpan data di self: self.pemilik = pemilik dan self.saldo = saldo.",
"Validasi dulu, baru ubah saldo. raise ValueError(\"pesan\") menghentikan method sebelum saldo berubah.",
"Kerangka solusinya:\nclass Rekening:\n    def __init__(self, pemilik, saldo=0):\n        …\n        …\n\n    def setor(self, jumlah):\n        if …:\n            …\n        …\n        return …\n\n    def tarik(self, jumlah):\n        if …:\n            …\n        if …:\n            …\n        …\n        return …"
],
"tes": [
[
"Rekening(\"Ani\", 100).setor(50)",
"150"
],
[
"r = Rekening(\"Budi\", 100)\nr.tarik(30)\nhasil = r.saldo",
"70"
],
[
"r = Rekening(\"Cita\", 100)\ntry:\n    r.tarik(500)\n    hasil = \"tidak error\"\nexcept ValueError:\n    hasil = (\"ValueError\", r.saldo)",
"('ValueError', 100)"
],
[
"r = Rekening(\"Dodi\")\ntry:\n    r.setor(0)\n    hasil = \"tidak error\"\nexcept ValueError:\n    hasil = \"ValueError\"",
"'ValueError'"
],
[
"r = Rekening(\"Eka\")\nr.setor(10)\nr.setor(5)\nhasil = (r.pemilik, r.saldo)",
"('Eka', 15)"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "oop-keranjang",
"judul": "Class Keranjang belanja",
"kategori": "oop",
"tingkat": 2,
"fungsi": "Keranjang",
"cerita": "",
"soal": "Buat class <code>Keranjang</code> dengan method <code>tambah(produk, harga, qty=1)</code> (produk yang sama menambah qty), <code>hapus(produk)</code> (abaikan jika tidak ada), <code>total(diskon_persen=0)</code> yang mengembalikan total setelah diskon dibulatkan 2 desimal, dan <code>__len__</code> yang mengembalikan jumlah qty semua barang.",
"awal": "class Keranjang:\n    def __init__(self):\n        pass\n\n    def tambah(self, produk, harga, qty=1):\n        pass\n\n    def hapus(self, produk):\n        pass\n\n    def total(self, diskon_persen=0):\n        pass\n\n    def __len__(self):\n        pass\n",
"solusi": "class Keranjang:\n    def __init__(self):\n        self.isi = {}\n\n    def tambah(self, produk, harga, qty=1):\n        if produk in self.isi:\n            self.isi[produk][\"qty\"] += qty\n        else:\n            self.isi[produk] = {\"harga\": harga, \"qty\": qty}\n\n    def hapus(self, produk):\n        self.isi.pop(produk, None)\n\n    def total(self, diskon_persen=0):\n        kotor = sum(b[\"harga\"] * b[\"qty\"] for b in self.isi.values())\n        return round(kotor * (1 - diskon_persen / 100), 2)\n\n    def __len__(self):\n        return sum(b[\"qty\"] for b in self.isi.values())\n",
"jelas": "Method khusus (dunder) seperti __len__ membuat objek buatanmu terasa seperti tipe bawaan Python. Recordset Odoo juga memakai ini: len(orders) memberi jumlah record.",
"kompleksitas": "O(n) untuk total",
"petunjuk": [
"Simpan isi keranjang di dict self.isi = {nama: {\"harga\": ..., \"qty\": ...}} yang dibuat di __init__.",
"dict.pop(kunci, None) menghapus tanpa error bila kunci tidak ada. __len__ membuat len(k) bisa dipakai.",
"Kerangka solusinya:\nclass Keranjang:\n    def __init__(self):\n        …\n\n    def tambah(self, produk, harga, qty=1):\n        if …:\n            …\n        else:\n            …\n\n    def hapus(self, produk):\n        …\n\n    def total(self, diskon_persen=0):\n        …\n        return …\n\n    def __len__(self):\n        return …"
],
"tes": [
[
"k = Keranjang()\nk.tambah(\"Kopi\", 20000, 2)\nk.tambah(\"Roti\", 15000)\nhasil = (k.total(), len(k))",
"(55000.0, 3)"
],
[
"k = Keranjang()\nk.tambah(\"Kopi\", 20000)\nk.tambah(\"Kopi\", 20000, 2)\nhasil = (k.total(10), len(k))",
"(54000.0, 3)"
],
[
"k = Keranjang()\nk.tambah(\"A\", 100)\nk.hapus(\"A\")\nk.hapus(\"tidak ada\")\nhasil = (k.total(), len(k))",
"(0.0, 0)"
],
[
"k = Keranjang()\nhasil = (k.total(50), len(k))",
"(0.0, 0)"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "oop-warisan",
"judul": "Inheritance & super()",
"kategori": "oop",
"tingkat": 2,
"fungsi": "Manajer",
"cerita": "Pewarisan class Python adalah dasar dari <code>_inherit</code> di Odoo: class anak memakai ulang perilaku induk lalu menambahkan sesuatu lewat <code>super()</code>.",
"soal": "Sudah ada class <code>Karyawan</code> (jangan diubah). Buat class <code>Manajer(Karyawan)</code> yang menerima tambahan <code>tim</code> (list nama). Override <code>gaji_bulanan()</code>: gaji induk <b>ditambah</b> tunjangan 500.000 per anggota tim. Override <code>info()</code> agar menambahkan <code>\" | tim: N orang\"</code> di belakang info induk.",
"awal": "class Karyawan:\n    def __init__(self, nama, gaji_pokok):\n        self.nama = nama\n        self.gaji_pokok = gaji_pokok\n\n    def gaji_bulanan(self):\n        return self.gaji_pokok\n\n    def info(self):\n        return f\"{self.nama}: {self.gaji_bulanan()}\"\n\n\nclass Manajer(Karyawan):\n    pass\n",
"solusi": "class Karyawan:\n    def __init__(self, nama, gaji_pokok):\n        self.nama = nama\n        self.gaji_pokok = gaji_pokok\n\n    def gaji_bulanan(self):\n        return self.gaji_pokok\n\n    def info(self):\n        return f\"{self.nama}: {self.gaji_bulanan()}\"\n\n\nclass Manajer(Karyawan):\n    def __init__(self, nama, gaji_pokok, tim):\n        super().__init__(nama, gaji_pokok)\n        self.tim = tim\n\n    def gaji_bulanan(self):\n        return super().gaji_bulanan() + 500000 * len(self.tim)\n\n    def info(self):\n        return super().info() + f\" | tim: {len(self.tim)} orang\"\n",
"jelas": "Perhatikan info(): method induk memanggil self.gaji_bulanan(), dan karena self adalah Manajer, yang terpanggil versi anak (polimorfisme). Di Odoo polanya sama persis: def action_confirm(self): res = super().action_confirm(); ...; return res.",
"kompleksitas": "O(1)",
"petunjuk": [
"Di __init__ anak, panggil super().__init__(nama, gaji_pokok) dulu, lalu simpan self.tim.",
"Di gaji_bulanan anak: return super().gaji_bulanan() + 500000 * len(self.tim). info() induk otomatis memakai gaji_bulanan() versi anak.",
"Kerangka solusinya:\nclass Karyawan:\n    def __init__(self, nama, gaji_pokok):\n        …\n        …\n\n    def gaji_bulanan(self):\n        return …\n\n    def info(self):\n        return …\n\n\nclass Manajer(Karyawan):\n    def __init__(self, nama, gaji_pokok, tim):\n        …\n        …\n\n    def gaji_bulanan(self):\n        return …\n\n    def info(self):\n        return …"
],
"tes": [
[
"Manajer(\"Rina\", 8000000, [\"Ani\", \"Budi\"]).gaji_bulanan()",
"9000000"
],
[
"Manajer(\"Rina\", 8000000, [\"Ani\", \"Budi\"]).info()",
"'Rina: 9000000 | tim: 2 orang'"
],
[
"Manajer(\"Sari\", 7000000, []).info()",
"'Sari: 7000000 | tim: 0 orang'"
],
[
"isinstance(Manajer(\"X\", 1, []), Karyawan)",
"True"
],
[
"Karyawan(\"Tono\", 5000000).info()",
"'Tono: 5000000'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
];
const STUDI_PY = [
{
"id": "py-dasar",
"topik": "python",
"setelah": "dasar",
"judul": "Mencetak struk belanja",
"contoh": {
"judul": "Contoh: f-string untuk teks rapi",
"penjelasan": "<p>f-string menyisipkan nilai variabel ke dalam teks: <code>f\"Halo {nama}\"</code>. Di dalam kurung kurawal kamu juga bisa menulis format angka. <code>{angka:,}</code> memberi pemisah ribuan dengan koma, lalu koma itu bisa diganti titik untuk format Indonesia.</p>",
"kode": "harga = 15000\nqty = 3\ntotal = harga * qty\nteks = f\"{total:,}\"            # '45,000'\nprint(teks)\nprint(\"Rp \" + teks.replace(\",\", \".\"))\nprint(f\"{qty} x Kopi = Rp {total:,}\".replace(\",\", \".\"))",
"kunci": "f\"{angka:,}\" memberi pemisah ribuan. Ganti koma dengan titik memakai .replace(\",\", \".\").",
"keluaran": "45,000\nRp 45.000\n3 x Kopi = Rp 45.000"
},
"langkah": [
{
"id": "py-dasar-1",
"judul": "Format rupiah",
"kategori": "studi",
"tingkat": 1,
"fungsi": "format_rupiah",
"cerita": "",
"soal": "Buat <code>format_rupiah(angka)</code> yang mengubah bilangan bulat menjadi teks seperti <code>\"Rp 1.250.000\"</code>.",
"awal": "def format_rupiah(angka):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def format_rupiah(angka):\n    return \"Rp \" + f\"{angka:,}\".replace(\",\", \".\")\n",
"jelas": "Format angka di f-string jauh lebih aman daripada menyisipkan titik manual setiap 3 digit.",
"kompleksitas": "",
"petunjuk": [
"Lihat contoh terpandu: f\"{angka:,}\" lalu .replace(\",\", \".\").",
"Jangan lupa awalan \"Rp \" dengan satu spasi.",
"Kerangka solusinya:\ndef format_rupiah(angka):\n    return …"
],
"tes": [
[
"format_rupiah(1250000)",
"'Rp 1.250.000'"
],
[
"format_rupiah(500)",
"'Rp 500'"
],
[
"format_rupiah(0)",
"'Rp 0'"
],
[
"format_rupiah(1000)",
"'Rp 1.000'"
],
[
"format_rupiah(987654321)",
"'Rp 987.654.321'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-dasar-2",
"judul": "Baris struk",
"kategori": "studi",
"tingkat": 1,
"fungsi": "baris_struk",
"cerita": "",
"soal": "Buat <code>baris_struk(nama, qty, harga)</code> yang mengembalikan teks <code>\"2 x Kopi Susu = Rp 36.000\"</code>, dengan total = qty × harga. Nama produk dirapikan: spasi di awal/akhir dibuang dan setiap kata diawali huruf besar.",
"awal": "def baris_struk(nama, qty, harga):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def baris_struk(nama, qty, harga):\n    total = qty * harga\n    return f\"{qty} x {nama.strip().title()} = Rp \" + f\"{total:,}\".replace(\",\", \".\")\n",
"jelas": "Kamu menggabungkan tiga hal: aritmetika, method string, dan format angka. Ini pola yang sama seperti membuat laporan atau pesan otomatis di Odoo.",
"kompleksitas": "",
"petunjuk": [
"Hitung total dulu, lalu rangkai teks dengan f-string seperti contoh.",
"Untuk nama: .strip() membuang spasi tepi, .title() membuat Huruf Besar Di Awal Kata.",
"Kerangka solusinya:\ndef baris_struk(nama, qty, harga):\n    …\n    return …"
],
"tes": [
[
"baris_struk(\"kopi susu\", 2, 18000)",
"'2 x Kopi Susu = Rp 36.000'"
],
[
"baris_struk(\"  roti  \", 1, 12500)",
"'1 x Roti = Rp 12.500'"
],
[
"baris_struk(\"air mineral\", 12, 4000)",
"'12 x Air Mineral = Rp 48.000'"
],
[
"baris_struk(\"TEH\", 0, 5000)",
"'0 x Teh = Rp 0'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-operator",
"topik": "python",
"setelah": "operator",
"judul": "Ongkos kirim & tahun kabisat",
"contoh": {
"judul": "Contoh: // , % dan pembulatan ke atas",
"penjelasan": "<p><code>//</code> membagi lalu membuang sisa (pembulatan ke bawah), <code>%</code> memberi sisanya. Untuk pembulatan <b>ke atas</b> tanpa import, pakai trik <code>-(-a // b)</code>, atau <code>math.ceil(a / b)</code>.</p>",
"kode": "berat = 2300            # gram\nprint(berat // 1000)    # 2 kg penuh\nprint(berat % 1000)     # sisa 300 gram\nprint(-(-berat // 1000))  # dibulatkan ke atas: 3 kg\nprint(2300 / 1000)      # 2.3 (pembagian biasa)",
"kunci": "Ongkir dihitung per kg dibulatkan ke atas: -(-gram // 1000). Untuk 'habis dibagi' pakai % == 0.",
"keluaran": "2\n300\n3\n2.3"
},
"langkah": [
{
"id": "py-op-1",
"judul": "Ongkir per kg",
"kategori": "studi",
"tingkat": 1,
"fungsi": "ongkir",
"cerita": "",
"soal": "Kurir menagih <b>Rp 9.000 per kg</b>, berat dibulatkan <b>ke atas</b> per kg, minimal 1 kg. Buat <code>ongkir(gram)</code> yang mengembalikan biaya (int).",
"awal": "def ongkir(gram):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def ongkir(gram):\n    kg = max(1, -(-gram // 1000))\n    return kg * 9000\n",
"jelas": "max(1, ...) adalah cara singkat menerapkan batas minimum. 1000 gram tepat 1 kg, sedangkan 1001 gram sudah 2 kg.",
"kompleksitas": "",
"petunjuk": [
"Ubah gram ke kg dengan pembulatan ke atas seperti contoh.",
"Minimal 1 kg: max(1, kg).",
"Kerangka solusinya:\ndef ongkir(gram):\n    …\n    return …"
],
"tes": [
[
"ongkir(2300)",
"27000"
],
[
"ongkir(1000)",
"9000"
],
[
"ongkir(1)",
"9000"
],
[
"ongkir(0)",
"9000"
],
[
"ongkir(5001)",
"54000"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-op-2",
"judul": "Tahun kabisat",
"kategori": "studi",
"tingkat": 2,
"fungsi": "kabisat",
"cerita": "",
"soal": "Tahun kabisat: habis dibagi 4, <b>kecuali</b> habis dibagi 100, <b>tetapi</b> tetap kabisat jika habis dibagi 400. Buat <code>kabisat(tahun)</code> yang mengembalikan True/False dalam satu ekspresi boolean.",
"awal": "def kabisat(tahun):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def kabisat(tahun):\n    return tahun % 4 == 0 and (tahun % 100 != 0 or tahun % 400 == 0)\n",
"jelas": "and dihitung sebelum or, jadi kurung wajib di sini. Aturan ini juga yang dipakai modul calendar.isleap().",
"kompleksitas": "",
"petunjuk": [
"Tulis tiap syarat dengan %: habis dibagi 4 artinya tahun % 4 == 0.",
"Gabungkan: syarat4 and (bukan100 or habis400). Kurung menentukan urutan.",
"Kerangka solusinya:\ndef kabisat(tahun):\n    return …"
],
"tes": [
[
"kabisat(2028)",
"True"
],
[
"kabisat(1900)",
"False"
],
[
"kabisat(2000)",
"True"
],
[
"kabisat(2026)",
"False"
],
[
"kabisat(2100)",
"False"
],
[
"kabisat(2400)",
"True"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-string",
"topik": "python",
"setelah": "string",
"judul": "Mengolah nama dan email",
"contoh": {
"judul": "Contoh: split, indexing, dan join",
"penjelasan": "<p>Teks bisa dipecah jadi list kata dengan <code>split()</code>, setiap kata diambil huruf pertamanya dengan <code>[0]</code>, lalu digabung lagi dengan <code>\"\".join(...)</code>.</p>",
"kode": "nama = \"  jauza kenar indra fawaid \"\nkata = nama.split()\nprint(kata)\nprint([k[0] for k in kata])\nprint(\"\".join(k[0] for k in kata).upper())\nprint(nama.strip().title())",
"kunci": "split() → ambil bagian → join(). [0] = karakter pertama, [-1] = karakter terakhir.",
"keluaran": "['jauza', 'kenar', 'indra', 'fawaid']\n['j', 'k', 'i', 'f']\nJKIF\nJauza Kenar Indra Fawaid"
},
"langkah": [
{
"id": "py-str-1",
"judul": "Inisial nama",
"kategori": "studi",
"tingkat": 1,
"fungsi": "inisial",
"cerita": "",
"soal": "Buat <code>inisial(nama)</code> yang mengembalikan huruf pertama setiap kata dalam huruf besar, tanpa spasi. Spasi berlebih diabaikan.",
"awal": "def inisial(nama):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def inisial(nama):\n    return \"\".join(k[0] for k in nama.split()).upper()\n",
"jelas": "split() tanpa argumen otomatis membuang spasi ganda, jadi tidak ada kata kosong yang membuat k[0] error.",
"kompleksitas": "",
"petunjuk": [
"Pecah dengan split() tanpa argumen.",
"Ambil k[0] tiap kata, gabung dengan \"\".join(...), lalu .upper().",
"Kerangka solusinya:\ndef inisial(nama):\n    return …"
],
"tes": [
[
"inisial(\"jauza kenar indra fawaid\")",
"'JKIF'"
],
[
"inisial(\"  budi   santoso \")",
"'BS'"
],
[
"inisial(\"ani\")",
"'A'"
],
[
"inisial(\"\")",
"''"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-str-2",
"judul": "Samarkan email",
"kategori": "studi",
"tingkat": 2,
"fungsi": "samarkan_email",
"cerita": "",
"soal": "Buat <code>samarkan_email(email)</code>: bagian sebelum <code>@</code> disamarkan menjadi huruf pertama + <code>***</code> + huruf terakhir. Jika bagian itu hanya 1–2 huruf, tampilkan huruf pertama + <code>***</code>. Domain tidak diubah. Contoh <code>\"jauza@gmail.com\"</code> → <code>\"j***a@gmail.com\"</code>.",
"awal": "def samarkan_email(email):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def samarkan_email(email):\n    nama, domain = email.split(\"@\")\n    if len(nama) <= 2:\n        return nama[0] + \"***@\" + domain\n    return nama[0] + \"***\" + nama[-1] + \"@\" + domain\n",
"jelas": "Teknik ini dipakai untuk menampilkan data pribadi secara aman (misalnya di halaman lupa password). Selalu pikirkan kasus pendek supaya tidak membocorkan seluruh nama.",
"kompleksitas": "",
"petunjuk": [
"Pisahkan nama dan domain: nama, domain = email.split(\"@\").",
"Huruf pertama nama[0], terakhir nama[-1]. Tangani nama pendek dulu dengan if.",
"Kerangka solusinya:\ndef samarkan_email(email):\n    …\n    if …:\n        return …\n    return …"
],
"tes": [
[
"samarkan_email(\"jauza@gmail.com\")",
"'j***a@gmail.com'"
],
[
"samarkan_email(\"ab@x.id\")",
"'a***@x.id'"
],
[
"samarkan_email(\"a@x.id\")",
"'a***@x.id'"
],
[
"samarkan_email(\"sales.team@odoo.com\")",
"'s***m@odoo.com'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-kondisi",
"topik": "python",
"setelah": "kondisi",
"judul": "Aturan bisnis dengan if/elif",
"contoh": {
"judul": "Contoh: urutan elif dari yang paling khusus",
"penjelasan": "<p>Python memeriksa <code>if</code> dan <code>elif</code> dari atas, lalu berhenti di syarat pertama yang benar. Jadi tulis syarat yang paling khusus lebih dulu.</p>",
"kode": "def kategori_pelanggan(total_belanja):\n    if total_belanja >= 10_000_000:\n        return \"Platinum\"\n    elif total_belanja >= 5_000_000:\n        return \"Gold\"\n    elif total_belanja > 0:\n        return \"Reguler\"\n    return \"Belum belanja\"\n\nfor t in [12_000_000, 5_000_000, 100, 0]:\n    print(t, kategori_pelanggan(t))",
"kunci": "Cek dari batas tertinggi. Garis bawah di 10_000_000 hanya pemisah agar mudah dibaca.",
"keluaran": "12000000 Platinum\n5000000 Gold\n100 Reguler\n0 Belum belanja"
},
"langkah": [
{
"id": "py-kon-1",
"judul": "Status stok",
"kategori": "studi",
"tingkat": 1,
"fungsi": "status_stok",
"cerita": "",
"soal": "Buat <code>status_stok(qty, minimum)</code>: qty ≤ 0 → <code>\"Habis\"</code>, qty &lt; minimum → <code>\"Menipis\"</code>, selain itu <code>\"Aman\"</code>.",
"awal": "def status_stok(qty, minimum):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def status_stok(qty, minimum):\n    if qty <= 0:\n        return \"Habis\"\n    elif qty < minimum:\n        return \"Menipis\"\n    return \"Aman\"\n",
"jelas": "Mirip aturan reordering di Odoo: stok di bawah minimum memicu pembelian ulang.",
"kompleksitas": "",
"petunjuk": [
"Mulai dari kasus paling khusus: Habis.",
"qty sama dengan minimum termasuk Aman (pakai <, bukan <=).",
"Kerangka solusinya:\ndef status_stok(qty, minimum):\n    if …:\n        return …\n    elif …:\n        return …\n    return …"
],
"tes": [
[
"status_stok(0, 5)",
"'Habis'"
],
[
"status_stok(3, 5)",
"'Menipis'"
],
[
"status_stok(5, 5)",
"'Aman'"
],
[
"status_stok(-2, 5)",
"'Habis'"
],
[
"status_stok(10, 0)",
"'Aman'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-kon-2",
"judul": "Ongkir dengan member",
"kategori": "studi",
"tingkat": 2,
"fungsi": "biaya_kirim",
"cerita": "",
"soal": "Aturan toko: total ≥ 500.000 → gratis ongkir (0). Member: ongkir 10.000. Bukan member: 20.000. Tetapi kota <code>\"Batam\"</code> selalu menambah 5.000 (kecuali sudah gratis). Buat <code>biaya_kirim(total, member, kota)</code>.",
"awal": "def biaya_kirim(total, member, kota):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def biaya_kirim(total, member, kota):\n    if total >= 500000:\n        return 0\n    biaya = 10000 if member else 20000\n    if kota == \"Batam\":\n        biaya += 5000\n    return biaya\n",
"jelas": "Memecah aturan menjadi langkah (cek pengecualian dulu, hitung dasar, lalu tambahan) membuat kode mudah dibaca dan mudah diubah saat aturan bisnis berganti.",
"kompleksitas": "",
"petunjuk": [
"Gratis ongkir dicek pertama dan langsung return 0.",
"Tentukan biaya dasar dengan if/else (atau ekspresi 10000 if member else 20000), lalu tambahkan 5000 untuk Batam.",
"Kerangka solusinya:\ndef biaya_kirim(total, member, kota):\n    if …:\n        return …\n    …\n    if …:\n        …\n    return …"
],
"tes": [
[
"biaya_kirim(600000, False, \"Batam\")",
"0"
],
[
"biaya_kirim(100000, True, \"Surakarta\")",
"10000"
],
[
"biaya_kirim(100000, False, \"Batam\")",
"25000"
],
[
"biaya_kirim(500000, True, \"Batam\")",
"0"
],
[
"biaya_kirim(499999, True, \"Batam\")",
"15000"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-loop",
"topik": "python",
"setelah": "loop",
"judul": "Perulangan for dan while",
"contoh": {
"judul": "Contoh: for untuk jumlah pasti, while untuk 'sampai tercapai'",
"penjelasan": "<p><code>for</code> dipakai bila banyaknya ulangan sudah diketahui. <code>while</code> dipakai bila kita mengulang <b>sampai</b> sebuah syarat tercapai. Contoh: berapa bulan menabung sampai target tercapai.</p>",
"kode": "saldo, bulan = 1_000_000, 0\nwhile saldo < 3_000_000:\n    saldo += 500_000\n    bulan += 1\nprint(bulan, saldo)\n\nfor i in range(1, 4):\n    print(f\"5 x {i} = {5 * i}\")",
"kunci": "while: ubah variabel yang dicek di setiap putaran supaya perulangan berhenti.",
"keluaran": "4 3000000\n5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15"
},
"langkah": [
{
"id": "py-loop-1",
"judul": "Tabel perkalian",
"kategori": "studi",
"tingkat": 1,
"fungsi": "tabel_kali",
"cerita": "",
"soal": "Buat <code>tabel_kali(n, sampai)</code> yang mengembalikan list teks <code>\"n x i = hasil\"</code> untuk i = 1 sampai <code>sampai</code>.",
"awal": "def tabel_kali(n, sampai):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def tabel_kali(n, sampai):\n    return [f\"{n} x {i} = {n * i}\" for i in range(1, sampai + 1)]\n",
"jelas": "range(1, sampai + 1) karena batas akhir range tidak ikut. Kasus sampai = 0 menghasilkan list kosong.",
"kompleksitas": "",
"petunjuk": [
"for i in range(1, sampai + 1) lalu append teks.",
"Format teksnya persis seperti contoh: spasi di kiri-kanan x dan =.",
"Kerangka solusinya:\ndef tabel_kali(n, sampai):\n    return …"
],
"tes": [
[
"tabel_kali(5, 3)",
"['5 x 1 = 5', '5 x 2 = 10', '5 x 3 = 15']"
],
[
"tabel_kali(7, 1)",
"['7 x 1 = 7']"
],
[
"tabel_kali(2, 0)",
"[]"
],
[
"tabel_kali(12, 4)",
"['12 x 1 = 12', '12 x 2 = 24', '12 x 3 = 36', '12 x 4 = 48']"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-loop-2",
"judul": "Berapa bulan sampai lunas?",
"kategori": "studi",
"tingkat": 2,
"fungsi": "bulan_lunas",
"cerita": "",
"soal": "Utang <code>pokok</code> berbunga <code>bunga_persen</code> per bulan (bunga dihitung dari sisa utang, ditambahkan di awal bulan), lalu dicicil <code>cicilan</code> per bulan. Buat <code>bulan_lunas(pokok, bunga_persen, cicilan)</code> yang mengembalikan banyak bulan sampai sisa ≤ 0. Jika cicilan tidak cukup menutup bunga bulan pertama, kembalikan <code>-1</code>.",
"awal": "def bulan_lunas(pokok, bunga_persen, cicilan):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def bulan_lunas(pokok, bunga_persen, cicilan):\n    if cicilan <= pokok * bunga_persen / 100:\n        return -1\n    sisa, bulan = pokok, 0\n    while sisa > 0:\n        sisa = sisa * (1 + bunga_persen / 100) - cicilan\n        bulan += 1\n    return bulan\n",
"jelas": "Selalu pastikan while punya jalan keluar. Pengecekan di awal mencegah perulangan tanpa akhir, yang di penilai ini akan dihentikan setelah 10 detik.",
"kompleksitas": "",
"petunjuk": [
"Perhatikan pengaman: kalau cicilan ≤ bunga, utang tidak pernah turun dan while tidak berhenti.",
"Setiap putaran: sisa = sisa × (1 + bunga/100) − cicilan, lalu bulan += 1.",
"Kerangka solusinya:\ndef bulan_lunas(pokok, bunga_persen, cicilan):\n    if …:\n        return …\n    …\n    while …:\n        …\n        …\n    return …"
],
"tes": [
[
"bulan_lunas(1000000, 0, 250000)",
"4"
],
[
"bulan_lunas(1000000, 2, 250000)",
"5"
],
[
"bulan_lunas(1000000, 10, 100000)",
"-1"
],
[
"bulan_lunas(100, 0, 1000)",
"1"
],
[
"bulan_lunas(5000000, 1.5, 500000)",
"11"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-list",
"topik": "python",
"setelah": "list",
"judul": "Mengurutkan data: dari buah sampai produk",
"contoh": {
"judul": "Contoh: mengurutkan apel, mangga, dan rambutan",
"penjelasan": "<p><code>sorted(daftar)</code> mengembalikan list baru yang terurut abjad (A→Z), sedangkan <code>daftar.sort()</code> mengurutkan list aslinya. Tambahkan <code>reverse=True</code> untuk Z→A.</p><p>Parameter <code>key</code> menentukan <b>apa yang dibandingkan</b>: <code>key=len</code> = panjang kata, <code>key=str.lower</code> = abaikan huruf besar/kecil. Untuk data berpasangan, <code>key=lambda x: x[1]</code> artinya urutkan menurut elemen kedua.</p>",
"kode": "buah = [\"mangga\", \"apel\", \"rambutan\"]\nprint(sorted(buah))                 # abjad\nprint(sorted(buah, reverse=True))   # kebalikannya\nprint(sorted(buah, key=len))        # dari kata terpendek\n\nharga = [(\"mangga\", 25000), (\"apel\", 30000), (\"rambutan\", 15000)]\nprint(sorted(harga, key=lambda x: x[1]))   # dari harga termurah\n\ncampur = [\"mangga\", \"Apel\", \"rambutan\"]\nprint(sorted(campur))                   # huruf besar didahulukan!\nprint(sorted(campur, key=str.lower))    # abaikan besar/kecil",
"kunci": "sorted(data, key=..., reverse=...). key menentukan nilai yang dibandingkan. Huruf besar selalu didahulukan kecuali memakai key=str.lower.",
"keluaran": "['apel', 'mangga', 'rambutan']\n['rambutan', 'mangga', 'apel']\n['apel', 'mangga', 'rambutan']\n[('rambutan', 15000), ('mangga', 25000), ('apel', 30000)]\n['Apel', 'mangga', 'rambutan']\n['Apel', 'mangga', 'rambutan']"
},
"langkah": [
{
"id": "py-list-1",
"judul": "Urutkan buah tanpa peduli huruf besar",
"kategori": "studi",
"tingkat": 1,
"fungsi": "urut_buah",
"cerita": "",
"soal": "Daftar buah dari kasir ditulis tidak konsisten, misalnya <code>[\"Rambutan\", \"apel\", \"Mangga\"]</code>. Buat <code>urut_buah(daftar)</code> yang mengembalikan list terurut abjad <b>tanpa memedulikan huruf besar/kecil</b>, dengan tulisan asli tetap dipertahankan.",
"awal": "def urut_buah(daftar):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def urut_buah(daftar):\n    return sorted(daftar, key=str.lower)\n",
"jelas": "key=str.lower tidak mengubah isi list; ia hanya menentukan nilai pembanding. Tanpa key, 'Mangga' dan 'Rambutan' akan berada di depan 'apel'.",
"kompleksitas": "",
"petunjuk": [
"Lihat baris terakhir contoh terpandu.",
"sorted(daftar, key=str.lower): yang dibandingkan versi huruf kecilnya, tetapi yang dikembalikan tulisan aslinya.",
"Kerangka solusinya:\ndef urut_buah(daftar):\n    return …"
],
"tes": [
[
"urut_buah([\"Rambutan\", \"apel\", \"Mangga\"])",
"['apel', 'Mangga', 'Rambutan']"
],
[
"urut_buah([\"mangga\", \"apel\", \"rambutan\"])",
"['apel', 'mangga', 'rambutan']"
],
[
"urut_buah([])",
"[]"
],
[
"urut_buah([\"jeruk\", \"Durian\", \"anggur\", \"Belimbing\"])",
"['anggur', 'Belimbing', 'Durian', 'jeruk']"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-list-2",
"judul": "Urutkan produk: harga lalu nama",
"kategori": "studi",
"tingkat": 2,
"fungsi": "urut_produk",
"cerita": "",
"soal": "Buat <code>urut_produk(produk)</code>. <code>produk</code> adalah list tuple <code>(nama, harga)</code>. Urutkan dari harga <b>termurah</b>; jika harganya sama, urutkan <b>nama secara abjad</b>. Kembalikan list nama saja.",
"awal": "def urut_produk(produk):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def urut_produk(produk):\n    urut = sorted(produk, key=lambda p: (p[1], p[0]))\n    return [nama for nama, harga in urut]\n",
"jelas": "Key berupa tuple adalah cara standar mengurutkan bertingkat, sama seperti ORDER BY harga, nama di SQL atau _order = 'list_price, name' di model Odoo.",
"kompleksitas": "",
"petunjuk": [
"Mirip contoh harga, tapi key-nya tuple: (harga, nama). Python membandingkan elemen pertama dulu, lalu elemen kedua kalau seri.",
"Setelah diurutkan, ambil namanya saja dengan list comprehension.",
"Kerangka solusinya:\ndef urut_produk(produk):\n    …\n    return …"
],
"tes": [
[
"urut_produk([(\"mangga\", 25000), (\"apel\", 30000), (\"rambutan\", 15000)])",
"['rambutan', 'mangga', 'apel']"
],
[
"urut_produk([(\"salak\", 20000), (\"duku\", 20000), (\"apel\", 30000)])",
"['duku', 'salak', 'apel']"
],
[
"urut_produk([])",
"[]"
],
[
"urut_produk([(\"b\", 1), (\"a\", 1), (\"c\", 0)])",
"['c', 'a', 'b']"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-list-3",
"judul": "Tiga nilai terbaik",
"kategori": "studi",
"tingkat": 2,
"fungsi": "tiga_terbaik",
"cerita": "",
"soal": "Buat <code>tiga_terbaik(data)</code>. <code>data</code> adalah list tuple <code>(nama, nilai)</code>. Kembalikan nama 3 siswa dengan nilai <b>tertinggi</b>. Jika nilai sama, urutkan nama abjad. Jika data kurang dari 3, kembalikan semuanya.",
"awal": "def tiga_terbaik(data):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def tiga_terbaik(data):\n    urut = sorted(data, key=lambda d: (-d[1], d[0]))\n    return [nama for nama, nilai in urut[:3]]\n",
"jelas": "Tanda minus pada angka adalah trik untuk 'menurun' di satu kolom dan 'naik' di kolom lain dalam satu kali sorted().",
"kompleksitas": "",
"petunjuk": [
"Urutan nilai dari besar ke kecil, tapi nama dari kecil ke besar. reverse=True akan membalik keduanya, jadi pakai tanda minus pada nilai: key=lambda d: (-d[1], d[0]).",
"Potong tiga teratas dengan [:3]. Slicing tidak error walau list lebih pendek.",
"Kerangka solusinya:\ndef tiga_terbaik(data):\n    …\n    return …"
],
"tes": [
[
"tiga_terbaik([(\"Ani\", 80), (\"Budi\", 95), (\"Cita\", 88), (\"Dodi\", 70)])",
"['Budi', 'Cita', 'Ani']"
],
[
"tiga_terbaik([(\"Eka\", 90), (\"Ani\", 90), (\"Budi\", 90), (\"Cita\", 90)])",
"['Ani', 'Budi', 'Cita']"
],
[
"tiga_terbaik([(\"Ani\", 50)])",
"['Ani']"
],
[
"tiga_terbaik([])",
"[]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-koleksi",
"topik": "python",
"setelah": "koleksi",
"judul": "Dict dan set untuk data stok",
"contoh": {
"judul": "Contoh: menggabungkan dict dan operasi set",
"penjelasan": "<p>Dict cocok untuk data <i>kunci → nilai</i>. <code>d.get(k, 0)</code> memberi 0 bila kunci belum ada. Set cocok untuk pertanyaan 'ada di mana saja': <code>&amp;</code> irisan, <code>|</code> gabungan, <code>-</code> selisih.</p>",
"kode": "gudang = {\"kursi\": 10, \"meja\": 4}\nmasuk = {\"meja\": 6, \"lemari\": 2}\nfor barang, qty in masuk.items():\n    gudang[barang] = gudang.get(barang, 0) + qty\nprint(gudang)\n\ntoko_a = {\"Ani\", \"Budi\", \"Cita\"}\ntoko_b = {\"Budi\", \"Dodi\", \"Cita\"}\nprint(sorted(toko_a & toko_b))   # belanja di kedua toko\nprint(sorted(toko_a - toko_b))   # hanya di toko A",
"kunci": "dict.get(kunci, 0) + qty untuk menjumlah. Set: & irisan, | gabungan, - selisih.",
"keluaran": "{'kursi': 10, 'meja': 10, 'lemari': 2}\n['Budi', 'Cita']\n['Ani']"
},
"langkah": [
{
"id": "py-kol-1",
"judul": "Gabungkan stok dua gudang",
"kategori": "studi",
"tingkat": 1,
"fungsi": "gabung_stok",
"cerita": "",
"soal": "Buat <code>gabung_stok(a, b)</code> yang mengembalikan dict <b>baru</b> berisi total qty setiap barang dari dua gudang. Dict a dan b tidak boleh berubah.",
"awal": "def gabung_stok(a, b):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def gabung_stok(a, b):\n    hasil = dict(a)\n    for barang, qty in b.items():\n        hasil[barang] = hasil.get(barang, 0) + qty\n    return hasil\n",
"jelas": "Tes terakhir memastikan dict asli tidak berubah. Mengubah data masukan tanpa sengaja adalah bug yang sering terjadi.",
"kompleksitas": "",
"petunjuk": [
"Salin dulu: hasil = dict(a), supaya a tidak berubah.",
"Lalu tambahkan isi b dengan pola get(..., 0) + qty seperti contoh.",
"Kerangka solusinya:\ndef gabung_stok(a, b):\n    …\n    for …:\n        …\n    return …"
],
"tes": [
[
"gabung_stok({\"kursi\": 10, \"meja\": 4}, {\"meja\": 6, \"lemari\": 2})",
"{'kursi': 10, 'meja': 10, 'lemari': 2}"
],
[
"gabung_stok({}, {\"a\": 1})",
"{'a': 1}"
],
[
"gabung_stok({\"a\": 1}, {})",
"{'a': 1}"
],
[
"a = {\"x\": 1}\nb = {\"x\": 2}\ngabung_stok(a, b)\nhasil = (a, b)",
"({'x': 1}, {'x': 2})"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-kol-2",
"judul": "Analisis pelanggan dua toko",
"kategori": "studi",
"tingkat": 2,
"fungsi": "analisis_pelanggan",
"cerita": "",
"soal": "Buat <code>analisis_pelanggan(toko_a, toko_b)</code> (keduanya list nama, bisa ada nama ganda). Kembalikan dict <code>{\"keduanya\": [...], \"hanya_a\": [...], \"hanya_b\": [...], \"total_unik\": n}</code>. Setiap list diurutkan abjad.",
"awal": "def analisis_pelanggan(toko_a, toko_b):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def analisis_pelanggan(toko_a, toko_b):\n    a, b = set(toko_a), set(toko_b)\n    return {\n        \"keduanya\": sorted(a & b),\n        \"hanya_a\": sorted(a - b),\n        \"hanya_b\": sorted(b - a),\n        \"total_unik\": len(a | b),\n    }\n",
"jelas": "Set membuat analisis seperti ini jadi satu baris per pertanyaan. Di CRM, ini dipakai untuk mencari pelanggan yang belanja di beberapa cabang.",
"kompleksitas": "",
"petunjuk": [
"Ubah kedua list menjadi set agar nama ganda hilang.",
"Pakai &, -, dan | seperti contoh, lalu sorted() setiap hasilnya.",
"Kerangka solusinya:\ndef analisis_pelanggan(toko_a, toko_b):\n    …\n    return …\n        …\n        …\n        …\n        …\n    …"
],
"tes": [
[
"analisis_pelanggan([\"Ani\", \"Budi\", \"Cita\", \"Ani\"], [\"Budi\", \"Dodi\", \"Cita\"])",
"{'keduanya': ['Budi', 'Cita'], 'hanya_a': ['Ani'], 'hanya_b': ['Dodi'], 'total_unik': 4}"
],
[
"analisis_pelanggan([], [])",
"{'keduanya': [], 'hanya_a': [], 'hanya_b': [], 'total_unik': 0}"
],
[
"analisis_pelanggan([\"X\"], [\"X\", \"X\"])",
"{'keduanya': ['X'], 'hanya_a': [], 'hanya_b': [], 'total_unik': 1}"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-fungsi",
"topik": "python",
"setelah": "fungsi",
"judul": "Fungsi dengan parameter bawaan",
"contoh": {
"judul": "Contoh: return beberapa nilai & parameter bawaan",
"penjelasan": "<p>Fungsi bisa mengembalikan beberapa nilai sekaligus sebagai tuple. Parameter dengan nilai bawaan (<code>tarif=50000</code>) boleh tidak diisi saat memanggil, dan bisa diisi dengan nama (<i>keyword argument</i>).</p>",
"kode": "def ringkas(angka):\n    if not angka:\n        return None\n    return min(angka), max(angka)\n\nprint(ringkas([4, 9, 1]))\nprint(ringkas([]))\n\ndef upah(jam, tarif=50000):\n    return jam * tarif\n\nprint(upah(3))\nprint(upah(3, tarif=60000))",
"kunci": "return a, b menghasilkan tuple (a, b). Parameter bawaan ditulis paling belakang.",
"keluaran": "(1, 9)\nNone\n150000\n180000"
},
"langkah": [
{
"id": "py-fun-1",
"judul": "Statistik sederhana",
"kategori": "studi",
"tingkat": 1,
"fungsi": "statistik",
"cerita": "",
"soal": "Buat <code>statistik(angka)</code> yang mengembalikan tuple <code>(terkecil, terbesar, rata_rata)</code> dengan rata-rata dibulatkan 2 desimal. List kosong → <code>None</code>.",
"awal": "def statistik(angka):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def statistik(angka):\n    if not angka:\n        return None\n    return min(angka), max(angka), round(sum(angka) / len(angka), 2)\n",
"jelas": "Mengecek list kosong sebelum membagi mencegah ZeroDivisionError.",
"kompleksitas": "",
"petunjuk": [
"Tangani list kosong dulu, seperti contoh.",
"Rata-rata = sum / len, lalu round(..., 2). Kembalikan tiga nilai dipisah koma.",
"Kerangka solusinya:\ndef statistik(angka):\n    if …:\n        return …\n    return …"
],
"tes": [
[
"statistik([4, 9, 1])",
"(1, 9, 4.67)"
],
[
"statistik([])",
"None"
],
[
"statistik([5])",
"(5, 5, 5.0)"
],
[
"statistik([1, 2, 2])",
"(1, 2, 1.67)"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-fun-2",
"judul": "Hitung gaji dengan lembur",
"kategori": "studi",
"tingkat": 2,
"fungsi": "hitung_gaji",
"cerita": "",
"soal": "Buat <code>hitung_gaji(pokok, jam_lembur=0, tarif_lembur=50000, potongan_persen=0)</code>. Gaji = pokok + jam_lembur × tarif_lembur, lalu dipotong <code>potongan_persen</code> persen. Kembalikan hasil dibulatkan ke bilangan bulat dengan <code>round()</code>.",
"awal": "def hitung_gaji(pokok, jam_lembur=0, tarif_lembur=50000, potongan_persen=0):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def hitung_gaji(pokok, jam_lembur=0, tarif_lembur=50000, potongan_persen=0):\n    kotor = pokok + jam_lembur * tarif_lembur\n    return round(kotor * (1 - potongan_persen / 100))\n",
"jelas": "Tes memanggil fungsi dengan keyword argument (potongan_persen=2), jadi nama parameter harus persis sama.",
"kompleksitas": "",
"petunjuk": [
"Tulis keempat parameter dengan nilai bawaannya persis seperti di soal.",
"Hitung kotor dulu, baru potong persen: kotor × (1 − potongan/100).",
"Kerangka solusinya:\ndef hitung_gaji(pokok, jam_lembur=0, tarif_lembur=50000, potongan_persen=0):\n    …\n    return …"
],
"tes": [
[
"hitung_gaji(6000000)",
"6000000"
],
[
"hitung_gaji(6000000, 10)",
"6500000"
],
[
"hitung_gaji(6000000, jam_lembur=4, potongan_persen=2)",
"6076000"
],
[
"hitung_gaji(5000000, 2, tarif_lembur=75000)",
"5150000"
],
[
"hitung_gaji(0)",
"0"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-error",
"topik": "python",
"setelah": "error",
"judul": "Data kotor dan try/except",
"contoh": {
"judul": "Contoh: menangkap ValueError saat mengubah teks ke angka",
"penjelasan": "<p>Data dari file atau input pengguna sering kotor. Bungkus bagian yang bisa gagal dengan <code>try</code>, lalu tangkap jenis error yang spesifik dengan <code>except ValueError</code>. Jangan memakai <code>except:</code> kosong karena menyembunyikan semua bug.</p>",
"kode": "data = [\"10\", \"5\", \"lima\", \"7.5\", \"\"]\nangka, gagal = [], []\nfor x in data:\n    try:\n        angka.append(int(x))\n    except ValueError:\n        gagal.append(x)\nprint(angka)\nprint(gagal)",
"kunci": "try: bagian yang bisa gagal; except JenisError: penanganannya. int('7.5') juga gagal; float('7.5') berhasil.",
"keluaran": "[10, 5]\n['lima', '7.5', '']"
},
"langkah": [
{
"id": "py-err-1",
"judul": "Bersihkan daftar angka",
"kategori": "studi",
"tingkat": 1,
"fungsi": "bersihkan",
"cerita": "",
"soal": "Buat <code>bersihkan(data)</code> yang mengubah setiap teks menjadi <code>float</code>. Teks yang gagal diubah dilewati. Kembalikan tuple <code>(list_angka, jumlah_gagal)</code>. Koma desimal Indonesia (<code>\"7,5\"</code>) harus dianggap titik.",
"awal": "def bersihkan(data):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def bersihkan(data):\n    angka, gagal = [], 0\n    for x in data:\n        try:\n            angka.append(float(x.replace(\",\", \".\")))\n        except ValueError:\n            gagal += 1\n    return angka, gagal\n",
"jelas": "float() juga menerima notasi ilmiah (1e3) dan spasi di tepi. '1.000,5' gagal karena setelah diganti menjadi '1.000.5'.",
"kompleksitas": "",
"petunjuk": [
"Ganti koma dengan titik sebelum float().",
"Bungkus float(...) dengan try/except ValueError, hitung yang gagal.",
"Kerangka solusinya:\ndef bersihkan(data):\n    …\n    for …:\n        try:\n            …\n        except …:\n            …\n    return …"
],
"tes": [
[
"bersihkan([\"10\", \"7,5\", \"abc\", \"\"])",
"([10.0, 7.5], 2)"
],
[
"bersihkan([])",
"([], 0)"
],
[
"bersihkan([\"1e3\", \" 4 \"])",
"([1000.0, 4.0], 0)"
],
[
"bersihkan([\"-2,25\", \"1.000,5\"])",
"([-2.25], 1)"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-err-2",
"judul": "Pembagian yang aman",
"kategori": "studi",
"tingkat": 2,
"fungsi": "bagi_aman",
"cerita": "",
"soal": "Buat <code>bagi_aman(a, b)</code>: kembalikan hasil a / b dibulatkan 2 desimal. Jika b nol, kembalikan <code>\"Error: pembagian dengan nol\"</code>. Jika a atau b bukan angka (TypeError), kembalikan <code>\"Error: input harus angka\"</code>.",
"awal": "def bagi_aman(a, b):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def bagi_aman(a, b):\n    try:\n        return round(a / b, 2)\n    except ZeroDivisionError:\n        return \"Error: pembagian dengan nol\"\n    except TypeError:\n        return \"Error: input harus angka\"\n",
"jelas": "Menangkap error spesifik memberi pesan yang jelas bagi pengguna. Di Odoo, pesan seperti ini disampaikan lewat raise UserError(\"...\").",
"kompleksitas": "",
"petunjuk": [
"Satu try bisa punya beberapa except, masing-masing untuk satu jenis error.",
"Urutan except tidak masalah di sini karena jenisnya berbeda.",
"Kerangka solusinya:\ndef bagi_aman(a, b):\n    try:\n        return …\n    except …:\n        return …\n    except …:\n        return …"
],
"tes": [
[
"bagi_aman(10, 4)",
"2.5"
],
[
"bagi_aman(1, 0)",
"'Error: pembagian dengan nol'"
],
[
"bagi_aman(\"10\", 2)",
"'Error: input harus angka'"
],
[
"bagi_aman(-7, 3)",
"-2.33"
],
[
"bagi_aman(None, 1)",
"'Error: input harus angka'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-oop",
"topik": "python",
"setelah": "oop",
"judul": "Class Produk dan turunannya",
"contoh": {
"judul": "Contoh: class, __init__, method, dan inheritance",
"penjelasan": "<p>Class adalah cetakan; objek adalah hasil cetakannya. <code>__init__</code> mengisi data awal ke <code>self</code>. Class anak <code>class B(A)</code> mewarisi semua method A dan bisa mengganti (override) sebagian, memanggil versi induk dengan <code>super()</code>.</p>",
"kode": "class Produk:\n    def __init__(self, nama, harga):\n        self.nama = nama\n        self.harga = harga\n\n    def label(self):\n        return f\"{self.nama} - Rp {self.harga}\"\n\nclass ProdukBaru(Produk):\n    def label(self):\n        return \"[BARU] \" + super().label()\n\nprint(Produk(\"Kopi\", 15000).label())\nprint(ProdukBaru(\"Teh\", 8000).label())",
"kunci": "self menyimpan data objek. super().method() memanggil versi induk, lalu kamu menambahkan perilaku baru.",
"keluaran": "Kopi - Rp 15000\n[BARU] Teh - Rp 8000"
},
"langkah": [
{
"id": "py-oop-1",
"judul": "Class Produk dengan diskon",
"kategori": "studi",
"tingkat": 1,
"fungsi": "Produk",
"cerita": "",
"soal": "Buat class <code>Produk</code> dengan <code>__init__(self, nama, harga, diskon=0)</code> dan method <code>harga_akhir()</code> yang mengembalikan harga setelah diskon persen, dibulatkan ke int dengan <code>round()</code>.",
"awal": "class Produk:\n    def __init__(self, nama, harga, diskon=0):\n        pass\n\n    def harga_akhir(self):\n        pass\n",
"solusi": "class Produk:\n    def __init__(self, nama, harga, diskon=0):\n        self.nama = nama\n        self.harga = harga\n        self.diskon = diskon\n\n    def harga_akhir(self):\n        return round(self.harga * (1 - self.diskon / 100))\n",
"jelas": "Atribut yang disimpan di self bisa dipakai oleh semua method objek itu.",
"kompleksitas": "",
"petunjuk": [
"Simpan ketiga parameter ke self di __init__.",
"harga_akhir memakai self.harga dan self.diskon.",
"Kerangka solusinya:\nclass Produk:\n    def __init__(self, nama, harga, diskon=0):\n        …\n        …\n        …\n\n    def harga_akhir(self):\n        return …"
],
"tes": [
[
"Produk(\"Kopi\", 20000, 10).harga_akhir()",
"18000"
],
[
"Produk(\"Teh\", 8000).harga_akhir()",
"8000"
],
[
"p = Produk(\"Roti\", 12500, 50)\nhasil = (p.nama, p.harga_akhir())",
"('Roti', 6250)"
],
[
"Produk(\"X\", 999, 33).harga_akhir()",
"669"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-oop-2",
"judul": "ProdukGrosir: override dengan super()",
"kategori": "studi",
"tingkat": 2,
"fungsi": "ProdukGrosir",
"cerita": "",
"soal": "Class <code>Produk</code> sudah ada di kode awal. Buat <code>ProdukGrosir(Produk)</code> yang menerima tambahan <code>min_grosir</code>. Tambahkan method <code>total(qty)</code>: harga_akhir × qty, dan jika qty ≥ min_grosir dapat potongan tambahan 5% dari total (bulatkan dengan round). Override <code>harga_akhir()</code> agar tidak pernah di bawah 1000.",
"awal": "class Produk:\n    def __init__(self, nama, harga, diskon=0):\n        self.nama = nama\n        self.harga = harga\n        self.diskon = diskon\n\n    def harga_akhir(self):\n        return round(self.harga * (1 - self.diskon / 100))\n\n\nclass ProdukGrosir(Produk):\n    pass\n",
"solusi": "class Produk:\n    def __init__(self, nama, harga, diskon=0):\n        self.nama = nama\n        self.harga = harga\n        self.diskon = diskon\n\n    def harga_akhir(self):\n        return round(self.harga * (1 - self.diskon / 100))\n\n\nclass ProdukGrosir(Produk):\n    def __init__(self, nama, harga, diskon=0, min_grosir=10):\n        super().__init__(nama, harga, diskon)\n        self.min_grosir = min_grosir\n\n    def harga_akhir(self):\n        return max(1000, super().harga_akhir())\n\n    def total(self, qty):\n        t = self.harga_akhir() * qty\n        if qty >= self.min_grosir:\n            t = round(t * 0.95)\n        return t\n",
"jelas": "Inilah pola _inherit di Odoo: class baru memakai ulang logika induk lewat super() lalu menambahkan aturan bisnis.",
"kompleksitas": "",
"petunjuk": [
"Di __init__ anak: super().__init__(nama, harga, diskon), lalu self.min_grosir = min_grosir.",
"harga_akhir anak: max(1000, super().harga_akhir()). total memakai self.harga_akhir() supaya batas 1000 ikut berlaku.",
"Kerangka solusinya:\nclass Produk:\n    def __init__(self, nama, harga, diskon=0):\n        …\n        …\n        …\n\n    def harga_akhir(self):\n        return …\n\n\nclass ProdukGrosir(Produk):\n    def __init__(self, nama, harga, diskon=0, min_grosir=10):\n        …\n        …\n\n    def harga_akhir(self):\n        return …\n\n    def total(self, qty):\n        …\n        if …:\n            …\n        return …"
],
"tes": [
[
"ProdukGrosir(\"Gula\", 15000, 0, 10).total(10)",
"142500"
],
[
"ProdukGrosir(\"Gula\", 15000, 0, 10).total(9)",
"135000"
],
[
"ProdukGrosir(\"Permen\", 1500, 50).harga_akhir()",
"1000"
],
[
"ProdukGrosir(\"Kopi\", 20000, 10, 5).total(5)",
"85500"
],
[
"isinstance(ProdukGrosir(\"a\", 2000), Produk)",
"True"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-modul",
"topik": "python",
"setelah": "modul",
"judul": "Memakai modul bawaan: math dan datetime",
"contoh": {
"judul": "Contoh: import math dan datetime",
"penjelasan": "<p>Python punya banyak modul bawaan. <code>math</code> untuk perhitungan (akar, pembulatan ke atas), <code>datetime</code> untuk tanggal. <code>date.weekday()</code> memberi 0 untuk Senin sampai 6 untuk Minggu.</p>",
"kode": "import math\nfrom datetime import date\n\nprint(math.sqrt(16), math.ceil(2.1), math.floor(2.9))\nprint(math.hypot(3, 4))           # jarak (3,4) dari titik (0,0)\n\nd = date(2026, 11, 24)\nHARI = [\"Senin\", \"Selasa\", \"Rabu\", \"Kamis\", \"Jumat\", \"Sabtu\", \"Minggu\"]\nprint(d.weekday(), HARI[d.weekday()])",
"kunci": "import modul lalu pakai modul.fungsi(). weekday(): Senin = 0.",
"keluaran": "4.0 3 2\n5.0\n1 Selasa"
},
"langkah": [
{
"id": "py-mod-1",
"judul": "Nama hari",
"kategori": "studi",
"tingkat": 1,
"fungsi": "nama_hari",
"cerita": "",
"soal": "Buat <code>nama_hari(tanggal)</code> yang menerima teks <code>\"YYYY-MM-DD\"</code> dan mengembalikan nama hari dalam bahasa Indonesia.",
"awal": "def nama_hari(tanggal):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "from datetime import date\n\nHARI = [\"Senin\", \"Selasa\", \"Rabu\", \"Kamis\", \"Jumat\", \"Sabtu\", \"Minggu\"]\n\ndef nama_hari(tanggal):\n    return HARI[date.fromisoformat(tanggal).weekday()]\n",
"jelas": "Menyimpan nama hari di list lalu mengaksesnya dengan indeks adalah cara sederhana menerjemahkan kode ke teks.",
"kompleksitas": "",
"petunjuk": [
"date.fromisoformat(\"2026-11-24\") mengubah teks jadi objek tanggal.",
"Pakai list HARI seperti contoh dengan indeks weekday().",
"Kerangka solusinya:\nfrom datetime import date\n\n…\n\ndef nama_hari(tanggal):\n    return …"
],
"tes": [
[
"nama_hari(\"2026-11-24\")",
"'Selasa'"
],
[
"nama_hari(\"2026-08-17\")",
"'Senin'"
],
[
"nama_hari(\"2000-01-01\")",
"'Sabtu'"
],
[
"nama_hari(\"2026-11-29\")",
"'Minggu'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-mod-2",
"judul": "Jarak terdekat",
"kategori": "studi",
"tingkat": 2,
"fungsi": "terdekat",
"cerita": "",
"soal": "Kurir di titik <code>asal</code> (tuple x, y). Buat <code>terdekat(asal, lokasi)</code>: <code>lokasi</code> adalah dict <code>{nama: (x, y)}</code>. Kembalikan tuple <code>(nama, jarak)</code> lokasi terdekat dengan jarak dibulatkan 2 desimal. Jika seri, pilih nama abjad terkecil. Jika lokasi kosong, kembalikan None.",
"awal": "def terdekat(asal, lokasi):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import math\n\ndef terdekat(asal, lokasi):\n    if not lokasi:\n        return None\n    jarak = {n: math.hypot(x - asal[0], y - asal[1]) for n, (x, y) in lokasi.items()}\n    nama = min(jarak, key=lambda n: (jarak[n], n))\n    return nama, round(jarak[nama], 2)\n",
"jelas": "min() dengan key tuple adalah cara ringkas memilih 'terbaik' dengan aturan pemecah seri.",
"kompleksitas": "",
"petunjuk": [
"Jarak dua titik: math.hypot(x2 - x1, y2 - y1).",
"Pilih minimum dengan key tuple (jarak, nama) agar seri jatuh ke abjad terkecil.",
"Kerangka solusinya:\nimport math\n\ndef terdekat(asal, lokasi):\n    if …:\n        return …\n    …\n    …\n    return …"
],
"tes": [
[
"terdekat((0, 0), {\"Gudang A\": (3, 4), \"Gudang B\": (1, 1), \"Toko\": (6, 8)})",
"('Gudang B', 1.41)"
],
[
"terdekat((2, 2), {})",
"None"
],
[
"terdekat((0, 0), {\"Z\": (1, 0), \"Y\": (0, 1)})",
"('Y', 1.0)"
],
[
"terdekat((10, -2), {\"P\": (13, 2)})",
"('P', 5.0)"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-pandas",
"topik": "python",
"setelah": "pandas",
"judul": "pandas: groupby seperti pivot table",
"contoh": {
"judul": "Contoh: DataFrame, kolom baru, dan groupby",
"penjelasan": "<p>DataFrame = tabel. Kolom baru dibuat dengan operasi per kolom (vektor), tanpa for. <code>groupby(\"kota\")[\"total\"].sum()</code> sama seperti pivot table: total per kota.</p><p class=\"kecil\">Catatan: saat pertama dijalankan, pandas diunduh sekali (± 10 MB).</p>",
"kode": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"kota\": [\"Batam\", \"Solo\", \"Batam\", \"Solo\"],\n    \"qty\": [2, 1, 3, 5],\n    \"harga\": [10000, 20000, 10000, 5000],\n})\ndf[\"total\"] = df[\"qty\"] * df[\"harga\"]\nprint(df)\nprint(df.groupby(\"kota\")[\"total\"].sum().to_dict())",
"kunci": "Kolom baru: df[\"baru\"] = df[\"a\"] * df[\"b\"]. Ringkas: df.groupby(kolom)[nilai].sum().",
"keluaran": "    kota  qty  harga  total\n0  Batam    2  10000  20000\n1   Solo    1  20000  20000\n2  Batam    3  10000  30000\n3   Solo    5   5000  25000\n{'Batam': 50000, 'Solo': 45000}"
},
"langkah": [
{
"id": "py-pd-1",
"judul": "Total per kota",
"kategori": "studi",
"tingkat": 1,
"fungsi": "total_per_kota",
"cerita": "",
"soal": "Buat <code>total_per_kota(df)</code>. df punya kolom <code>kota</code>, <code>qty</code>, <code>harga</code>. Kembalikan dict <code>{kota: total}</code> dengan total = jumlah qty × harga, sebagai int.",
"awal": "def total_per_kota(df):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def total_per_kota(df):\n    df = df.assign(total=df[\"qty\"] * df[\"harga\"])\n    return {k: int(v) for k, v in df.groupby(\"kota\")[\"total\"].sum().items()}\n",
"jelas": "Angka dari pandas bertipe numpy (int64). int(v) mengubahnya ke int biasa. df.assign(...) membuat salinan sehingga df asli tidak berubah.",
"kompleksitas": "",
"petunjuk": [
"Buat kolom total = qty × harga, lalu groupby(\"kota\")[\"total\"].sum().",
"Hasil groupby berupa Series berisi angka numpy; ubah ke dict dengan int(v) tiap nilai.",
"Kerangka solusinya:\ndef total_per_kota(df):\n    …\n    return …"
],
"tes": [
[
"import pandas as pd\nhasil = total_per_kota(pd.DataFrame({\"kota\": [\"Batam\", \"Solo\", \"Batam\"], \"qty\": [2, 1, 3], \"harga\": [10000, 20000, 10000]}))",
"{'Batam': 50000, 'Solo': 20000}"
],
[
"import pandas as pd\nhasil = total_per_kota(pd.DataFrame({\"kota\": [\"A\"], \"qty\": [0], \"harga\": [500]}))",
"{'A': 0}"
],
[
"import pandas as pd\nhasil = total_per_kota(pd.DataFrame({\"kota\": [\"B\", \"A\", \"B\"], \"qty\": [1, 1, 1], \"harga\": [1, 2, 3]}))",
"{'A': 2, 'B': 4}"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
},
{
"id": "py-pd-2",
"judul": "Produk terlaris per kategori",
"kategori": "studi",
"tingkat": 2,
"fungsi": "terlaris",
"cerita": "",
"soal": "Buat <code>terlaris(df)</code>. df punya kolom <code>kategori</code>, <code>produk</code>, <code>qty</code> (satu produk bisa muncul di banyak baris). Kembalikan dict <code>{kategori: produk}</code> berisi produk dengan total qty terbanyak di setiap kategori. Jika seri, ambil nama produk abjad terkecil.",
"awal": "def terlaris(df):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def terlaris(df):\n    total = df.groupby([\"kategori\", \"produk\"], as_index=False)[\"qty\"].sum()\n    total = total.sort_values([\"kategori\", \"qty\", \"produk\"], ascending=[True, False, True])\n    return {k: p for k, p in total.drop_duplicates(\"kategori\")[[\"kategori\", \"produk\"]].itertuples(index=False)}\n",
"jelas": "groupby dengan beberapa kolom = pivot dengan beberapa baris. Pola 'urutkan lalu ambil pertama per grup' sangat sering dipakai di analisis data.",
"kompleksitas": "",
"petunjuk": [
"Langkah 1: groupby dua kolom [\"kategori\", \"produk\"] lalu jumlahkan qty.",
"Langkah 2: urutkan qty menurun (dan produk naik untuk seri), lalu ambil baris pertama tiap kategori dengan drop_duplicates(\"kategori\").",
"Kerangka solusinya:\ndef terlaris(df):\n    …\n    …\n    return …"
],
"tes": [
[
"import pandas as pd\nhasil = terlaris(pd.DataFrame({\"kategori\": [\"Minuman\", \"Minuman\", \"Makanan\", \"Minuman\"], \"produk\": [\"Kopi\", \"Teh\", \"Roti\", \"Teh\"], \"qty\": [5, 3, 2, 4]}))",
"{'Makanan': 'Roti', 'Minuman': 'Teh'}"
],
[
"import pandas as pd\nhasil = terlaris(pd.DataFrame({\"kategori\": [\"A\", \"A\"], \"produk\": [\"y\", \"x\"], \"qty\": [1, 1]}))",
"{'A': 'x'}"
],
[
"import pandas as pd\nhasil = terlaris(pd.DataFrame({\"kategori\": [\"K\"], \"produk\": [\"p\"], \"qty\": [9]}))",
"{'K': 'p'}"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-odoo",
"topik": "python",
"setelah": "odoo",
"judul": "Menulis method model Odoo",
"contoh": {
"judul": "Contoh: compute method dengan for record in self",
"penjelasan": "<p>Di Odoo, <code>self</code> adalah <b>recordset</b>: kumpulan record, bisa berisi 0, 1, atau banyak. Karena itu method compute selalu ditulis <code>for order in self:</code>. <code>mapped('field')</code> mengambil nilai field dari semua record, <code>filtered(lambda r: ...)</code> menyaring.</p><p>Di soal latihan dipakai recordset tiruan (<code>Recordset</code>, <code>Record</code>, <code>rs(...)</code>) yang perilakunya mirip Odoo, jadi kodenya bisa dijalankan di browser.</p>",
"kode": "# Di Odoo sungguhan:\n# @api.depends(\"order_line.price_subtotal\")\n# def _compute_amount(self):\n#     for order in self:\n#         order.amount_total = sum(order.order_line.mapped(\"price_subtotal\"))\n\nclass Baris:\n    def __init__(self, subtotal):\n        self.price_subtotal = subtotal\n\nclass Order:\n    def __init__(self, nama, baris):\n        self.name = nama\n        self.order_line = baris\n        self.amount_total = 0\n\norders = [Order(\"S001\", [Baris(100), Baris(250)]), Order(\"S002\", [])]\nfor order in orders:                      # sama seperti: for order in self\n    order.amount_total = sum(b.price_subtotal for b in order.order_line)\n    print(order.name, order.amount_total)",
"kunci": "for order in self: selalu, karena self bisa berisi banyak record. Isi field hasil compute untuk SETIAP record, termasuk yang nilainya 0.",
"keluaran": "S001 350\nS002 0"
},
"langkah": [
{
"id": "py-odoo-1",
"judul": "_compute_amount_total",
"kategori": "studi",
"tingkat": 1,
"fungsi": "_compute_amount_total",
"cerita": "",
"soal": "Tulis fungsi <code>_compute_amount_total(self)</code>. <code>self</code> adalah recordset order; tiap order punya <code>order_line</code> (recordset baris dengan field <code>price_subtotal</code>). Isi <code>order.amount_total</code> = jumlah subtotal baris. Order tanpa baris harus bernilai 0.",
"awal": "def _compute_amount_total(self):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def _compute_amount_total(self):\n    for order in self:\n        order.amount_total = sum(order.order_line.mapped(\"price_subtotal\"))\n",
"jelas": "Lupa mengisi field compute untuk sebagian record (misalnya hanya di dalam if) membuat Odoo melempar error 'Compute method failed to assign'. Selalu beri nilai untuk setiap record.",
"kompleksitas": "",
"petunjuk": [
"Ikuti contoh: for order in self, lalu isi order.amount_total.",
"sum(order.order_line.mapped(\"price_subtotal\")) memberi 0 untuk recordset kosong.",
"Kerangka solusinya:\ndef _compute_amount_total(self):\n    for …:\n        …"
],
"tes": [
[
"o1 = Record(name=\"S1\", order_line=rs(Record(price_subtotal=100), Record(price_subtotal=250)), amount_total=None)\no2 = Record(name=\"S2\", order_line=rs(), amount_total=None)\n_compute_amount_total(rs(o1, o2))\nhasil = [o1.amount_total, o2.amount_total]",
"[350, 0]"
],
[
"o = Record(name=\"S3\", order_line=rs(Record(price_subtotal=19.5), Record(price_subtotal=0.5)), amount_total=None)\n_compute_amount_total(rs(o))\nhasil = o.amount_total",
"20.0"
],
[
"_compute_amount_total(rs())\nhasil = \"ok\"",
"'ok'"
]
],
"contoh": 1,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n",
"awal_baru": ""
},
{
"id": "py-odoo-2",
"judul": "Action button ala Odoo",
"kategori": "studi",
"tingkat": 2,
"fungsi": "action_confirm",
"cerita": "",
"soal": "Tulis <code>action_confirm(self)</code> untuk recordset order. Untuk <b>setiap</b> order: jika <code>state</code> bukan <code>\"draft\"</code>, lempar <code>UserError</code>. Jika tidak punya baris (<code>order_line</code> kosong), lempar <code>UserError</code>. Selain itu ubah state menjadi <code>\"sale\"</code>. Fungsi mengembalikan <code>True</code>. Periksa SEMUA order dulu sebelum mengubah state, supaya tidak ada yang berubah sebagian.",
"awal": "def action_confirm(self):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def action_confirm(self):\n    for order in self:\n        if order.state != \"draft\":\n            raise UserError(f\"{order.name} bukan draft\")\n        if not order.order_line:\n            raise UserError(f\"{order.name} belum punya baris\")\n    for order in self:\n        order.state = \"sale\"\n    return True\n",
"jelas": "Tes terakhir memeriksa bahwa order A tidak ikut berubah ketika order B gagal. Di Odoo sungguhan transaksi database dibatalkan saat error, tetapi memeriksa dulu lalu menulis tetap praktik yang baik.",
"kompleksitas": "",
"petunjuk": [
"Dua tahap: perulangan pertama hanya memeriksa dan raise UserError(\"pesan\"); perulangan kedua mengubah state.",
"Kosong atau tidak: if not order.order_line.",
"Kerangka solusinya:\ndef action_confirm(self):\n    for …:\n        if …:\n            …\n        if …:\n            …\n    for …:\n        …\n    return …"
],
"tes": [
[
"o = Record(name=\"S1\", state=\"draft\", order_line=rs(Record(price_subtotal=1)))\naction_confirm(rs(o))\nhasil = o.state",
"'sale'"
],
[
"o = Record(name=\"S2\", state=\"sale\", order_line=rs(Record(price_subtotal=1)))\ntry:\n    action_confirm(rs(o))\n    hasil = \"tidak error\"\nexcept UserError:\n    hasil = \"UserError\"",
"'UserError'"
],
[
"o = Record(name=\"S3\", state=\"draft\", order_line=rs())\ntry:\n    action_confirm(rs(o))\n    hasil = \"tidak error\"\nexcept UserError:\n    hasil = (\"UserError\", o.state)",
"('UserError', 'draft')"
],
[
"a = Record(name=\"A\", state=\"draft\", order_line=rs(Record(price_subtotal=1)))\nb = Record(name=\"B\", state=\"cancel\", order_line=rs(Record(price_subtotal=1)))\ntry:\n    action_confirm(rs(a, b))\nexcept UserError:\n    pass\nhasil = (a.state, b.state)",
"('draft', 'cancel')"
]
],
"contoh": 1,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-latihan",
"topik": "python",
"setelah": "latihan",
"judul": "Debugging: perbaiki kode yang salah",
"contoh": {
"judul": "Contoh: tiga bug klasik Python",
"penjelasan": "<p>Di coding test kamu sering diberi kode yang <b>sudah ditulis tapi salah</b>. Cara kerjanya: jalankan dengan contoh, bandingkan hasilnya, temukan baris penyebabnya. Tiga bug paling sering: (1) <code>range</code> kurang satu, (2) <code>return</code> di dalam perulangan, (3) list sebagai nilai bawaan parameter.</p>",
"kode": "# Bug 1: range kurang satu\nprint(list(range(1, 5)))        # tidak memuat 5!\n\n# Bug 2: return terlalu cepat\ndef jumlah_salah(data):\n    total = 0\n    for x in data:\n        total += x\n        return total            # keluar di putaran pertama\nprint(jumlah_salah([1, 2, 3]))\n\n# Bug 3: list bawaan dipakai bersama\ndef tambah(x, wadah=[]):\n    wadah.append(x)\n    return wadah\nprint(tambah(1), tambah(2))     # [1, 2] [1, 2], bukan [1] [2]",
"kunci": "Bawaan yang bisa berubah (list/dict) dibuat SEKALI saat def. Pakai wadah=None lalu if wadah is None: wadah = [].",
"keluaran": "[1, 2, 3, 4]\n1\n[1, 2] [1, 2]"
},
"langkah": [
{
"id": "py-bug-1",
"judul": "Perbaiki rata-rata",
"kategori": "studi",
"tingkat": 1,
"fungsi": "rata_rata",
"cerita": "",
"soal": "Kode awal di editor punya <b>dua bug</b>. <code>rata_rata(nilai)</code> seharusnya mengembalikan rata-rata dibulatkan 2 desimal, dan 0 untuk list kosong. Perbaiki tanpa menulis ulang dari nol.",
"awal": "def rata_rata(nilai):\n    total = 0\n    for n in nilai:\n        total += n\n        return round(total / len(nilai), 2)\n",
"solusi": "def rata_rata(nilai):\n    if not nilai:\n        return 0\n    total = 0\n    for n in nilai:\n        total += n\n    return round(total / len(nilai), 2)\n",
"jelas": "Indentasi menentukan blok di Python: return yang masuk ke dalam for membuat fungsi berhenti di putaran pertama.",
"kompleksitas": "",
"petunjuk": [
"Jalankan dulu dan lihat contoh 1: hasilnya terlalu kecil? Perhatikan letak return.",
"Bug kedua muncul pada list kosong: pembagian dengan nol.",
"Kerangka solusinya:\ndef rata_rata(nilai):\n    if …:\n        return …\n    …\n    for …:\n        …\n    return …"
],
"tes": [
[
"rata_rata([80, 90, 70])",
"80.0"
],
[
"rata_rata([])",
"0"
],
[
"rata_rata([1, 2])",
"1.5"
],
[
"rata_rata([100])",
"100.0"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-bug-2",
"judul": "Perbaiki pencatat order",
"kategori": "studi",
"tingkat": 2,
"fungsi": "catat_order",
"cerita": "",
"soal": "Kode awal punya <b>tiga bug</b>. <code>catat_order(nomor, daftar=None)</code> seharusnya menambahkan nomor ke daftar (atau ke list baru bila tidak diberi), tidak menambahkan nomor yang sudah ada, lalu mengembalikan daftar yang <b>terurut</b>.",
"awal": "def catat_order(nomor, daftar=[]):\n    daftar.append(nomor)\n    return daftar.sort()\n",
"solusi": "def catat_order(nomor, daftar=None):\n    if daftar is None:\n        daftar = []\n    if nomor not in daftar:\n        daftar.append(nomor)\n    return sorted(daftar)\n",
"jelas": "Bug list bawaan sangat terkenal di wawancara Python. sort() mengurutkan di tempat dan mengembalikan None; return daftar.sort() adalah bug klasik kedua.",
"kompleksitas": "",
"petunjuk": [
"Tes pertama memanggil fungsi dua kali. Kalau hasilnya memuat S002, kamu kena bug list bawaan (lihat contoh terpandu).",
"Cek juga: list.sort() mengembalikan None, sedangkan sorted() mengembalikan list baru.",
"Kerangka solusinya:\ndef catat_order(nomor, daftar=None):\n    if …:\n        …\n    if …:\n        …\n    return …"
],
"tes": [
[
"catat_order(\"S002\")\nhasil = catat_order(\"S001\")",
"['S001']"
],
[
"catat_order(\"S001\", [\"S003\", \"S001\"])",
"['S001', 'S003']"
],
[
"catat_order(\"S010\", [\"S002\"])",
"['S002', 'S010']"
],
[
"catat_order(\"S005\")",
"['S005']"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-comp",
"topik": "python",
"setelah": "comprehension",
"judul": "Comprehension untuk transformasi data",
"contoh": {
"judul": "Contoh: list, dict, dan saringan dalam satu baris",
"penjelasan": "<p>Bentuk umum: <code>[hasil for item in sumber if syarat]</code>. Dict comprehension memakai <code>{kunci: nilai for ...}</code>. Comprehension menggantikan pola for + append yang panjang.</p>",
"kode": "harga = {\"kopi\": 15000, \"teh\": 8000, \"roti\": 12000}\nmurah = [p for p, h in harga.items() if h < 13000]\nprint(murah)\nnaik = {p: round(h * 1.1) for p, h in harga.items()}\nprint(naik)\nprint([x * x for x in range(6) if x % 2 == 0])",
"kunci": "if di belakang = saringan. if-else di depan for = mengubah nilai.",
"keluaran": "['teh', 'roti']\n{'kopi': 16500, 'teh': 8800, 'roti': 13200}\n[0, 4, 16]"
},
"langkah": [
{
"id": "py-comp-1",
"judul": "Kuadrat bilangan genap",
"kategori": "studi",
"tingkat": 1,
"fungsi": "kuadrat_genap",
"cerita": "",
"soal": "Buat <code>kuadrat_genap(n)</code> yang mengembalikan list kuadrat semua bilangan genap dari 0 sampai n (termasuk n), dalam <b>satu baris</b> comprehension.",
"awal": "def kuadrat_genap(n):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def kuadrat_genap(n):\n    return [x * x for x in range(n + 1) if x % 2 == 0]\n",
"jelas": "Comprehension dibaca: ambil x*x, untuk x di range, jika x genap.",
"kompleksitas": "",
"petunjuk": [
"Sama dengan baris terakhir contoh, tapi sampai n.",
"range(n + 1) agar n ikut.",
"Kerangka solusinya:\ndef kuadrat_genap(n):\n    return …"
],
"tes": [
[
"kuadrat_genap(6)",
"[0, 4, 16, 36]"
],
[
"kuadrat_genap(0)",
"[0]"
],
[
"kuadrat_genap(1)",
"[0]"
],
[
"kuadrat_genap(9)",
"[0, 4, 16, 36, 64]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-comp-2",
"judul": "Indeks kata penting",
"kategori": "studi",
"tingkat": 2,
"fungsi": "indeks_kata",
"cerita": "",
"soal": "Buat <code>indeks_kata(kalimat, stopwords)</code> yang mengembalikan dict <code>{kata: panjang}</code> untuk kata dalam huruf kecil yang <b>bukan</b> stopword dan panjangnya lebih dari 3. Tanda baca <code>.,!?</code> di tepi kata dibuang.",
"awal": "def indeks_kata(kalimat, stopwords):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def indeks_kata(kalimat, stopwords):\n    kata = [k.strip(\".,!?\").lower() for k in kalimat.split()]\n    return {k: len(k) for k in kata if len(k) > 3 and k not in stopwords}\n",
"jelas": "Dua comprehension berurutan (bersihkan, lalu saring) lebih mudah dibaca daripada satu comprehension yang terlalu panjang.",
"kompleksitas": "",
"petunjuk": [
"Bersihkan dulu dengan list comprehension: k.strip(\".,!?\").lower().",
"Lalu dict comprehension dengan saringan dua syarat (and).",
"Kerangka solusinya:\ndef indeks_kata(kalimat, stopwords):\n    …\n    return …"
],
"tes": [
[
"indeks_kata(\"Odoo adalah ERP yang sangat fleksibel!\", {\"adalah\", \"yang\"})",
"{'odoo': 4, 'sangat': 6, 'fleksibel': 9}"
],
[
"indeks_kata(\"\", set())",
"{}"
],
[
"indeks_kata(\"Data, data, DATA.\", set())",
"{'data': 4}"
],
[
"indeks_kata(\"ini itu dan\", {\"dan\"})",
"{}"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-funlanjut",
"topik": "python",
"setelah": "fungsilanjut",
"judul": "*args, **kwargs, dan decorator",
"contoh": {
"judul": "Contoh: menerima argumen fleksibel dan membungkus fungsi",
"penjelasan": "<p><code>*args</code> mengumpulkan argumen posisi menjadi tuple, <code>**kwargs</code> mengumpulkan argumen bernama menjadi dict. Decorator adalah fungsi yang menerima fungsi lalu mengembalikan fungsi baru yang membungkusnya, misalnya untuk mencatat log.</p>",
"kode": "def total(*angka, diskon=0):\n    return sum(angka) * (1 - diskon / 100)\n\nprint(total(1, 2, 3), total(100, 100, diskon=10))\n\ndef log(fungsi):\n    def pembungkus(*args, **kwargs):\n        print(\"memanggil\", fungsi.__name__, args)\n        return fungsi(*args, **kwargs)\n    return pembungkus\n\n@log\ndef kali(a, b):\n    return a * b\n\nprint(kali(3, 4))",
"kunci": "Decorator: def dekor(f): def bungkus(*args, **kwargs): ... return f(*args, **kwargs); return bungkus.",
"keluaran": "6.0 180.0\nmemanggil kali (3, 4)\n12"
},
"langkah": [
{
"id": "py-fl-1",
"judul": "Gabungkan teks fleksibel",
"kategori": "studi",
"tingkat": 1,
"fungsi": "gabung",
"cerita": "",
"soal": "Buat <code>gabung(*bagian, pemisah=\" \", besar=False)</code> yang menggabungkan semua bagian (diubah ke str) dengan pemisah. Jika <code>besar=True</code>, hasilnya huruf besar semua.",
"awal": "def gabung(*bagian, pemisah=\" \", besar=False):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def gabung(*bagian, pemisah=\" \", besar=False):\n    teks = pemisah.join(str(b) for b in bagian)\n    return teks.upper() if besar else teks\n",
"jelas": "Parameter setelah *args otomatis keyword-only, jadi tidak tertukar dengan bagian teks.",
"kompleksitas": "",
"petunjuk": [
"*bagian menjadi tuple; ubah tiap item ke str sebelum join.",
"Parameter setelah *args hanya bisa diisi dengan nama (keyword-only).",
"Kerangka solusinya:\ndef gabung(*bagian, pemisah=\" \", besar=False):\n    …\n    return …"
],
"tes": [
[
"gabung(\"SO\", 2026, \"0001\", pemisah=\"/\")",
"'SO/2026/0001'"
],
[
"gabung(\"halo\", \"dunia\", besar=True)",
"'HALO DUNIA'"
],
[
"gabung()",
"''"
],
[
"gabung(1, 2, 3)",
"'1 2 3'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-fl-2",
"judul": "Decorator penghitung panggilan",
"kategori": "studi",
"tingkat": 2,
"fungsi": "hitung_panggilan",
"cerita": "",
"soal": "Buat decorator <code>hitung_panggilan</code>. Fungsi yang dibungkus tetap bekerja normal, dan punya atribut <code>jumlah</code> yang bertambah 1 setiap kali dipanggil. Nama fungsi asli (<code>__name__</code>) harus tetap sama (pakai <code>functools.wraps</code>).",
"awal": "def hitung_panggilan(fungsi):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import functools\n\ndef hitung_panggilan(fungsi):\n    @functools.wraps(fungsi)\n    def pembungkus(*args, **kwargs):\n        pembungkus.jumlah += 1\n        return fungsi(*args, **kwargs)\n    pembungkus.jumlah = 0\n    return pembungkus\n",
"jelas": "functools.wraps menyalin nama dan dokumentasi fungsi asli. Odoo memakai banyak decorator: @api.depends, @api.constrains, @api.model.",
"kompleksitas": "",
"petunjuk": [
"Ikuti pola log di contoh, tapi simpan penghitung sebagai atribut fungsi pembungkus: pembungkus.jumlah = 0.",
"Di dalam pembungkus: pembungkus.jumlah += 1 lalu return fungsi(*args, **kwargs). Tambahkan @functools.wraps(fungsi) di atas def pembungkus.",
"Kerangka solusinya:\nimport functools\n\ndef hitung_panggilan(fungsi):\n    …\n    def pembungkus(*args, **kwargs):\n        …\n        return …\n    …\n    return …"
],
"tes": [
[
"@hitung_panggilan\ndef kali(a, b):\n    return a * b\nkali(2, 3)\nkali(4, b=5)\nhasil = (kali(1, 1), kali.jumlah)",
"(1, 3)"
],
[
"@hitung_panggilan\ndef sapa(nama=\"dunia\"):\n    return \"halo \" + nama\nhasil = (sapa(), sapa.__name__, sapa.jumlah)",
"('halo dunia', 'sapa', 1)"
],
[
"@hitung_panggilan\ndef f():\n    return 1\nhasil = f.jumlah",
"0"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-iter",
"topik": "python",
"setelah": "iterator",
"judul": "Generator untuk data besar",
"contoh": {
"judul": "Contoh: yield menghasilkan nilai satu per satu",
"penjelasan": "<p>Fungsi dengan <code>yield</code> adalah generator: nilainya dibuat satu per satu saat diminta, jadi hemat memori untuk data besar (misalnya membaca jutaan baris log). Ambil semua dengan <code>list(...)</code> atau sebagian dengan <code>itertools.islice</code>.</p>",
"kode": "def hitung_mundur(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nprint(list(hitung_mundur(3)))\n\ndef per_kelompok(data, ukuran):\n    for i in range(0, len(data), ukuran):\n        yield data[i:i + ukuran]\n\nprint(list(per_kelompok([1, 2, 3, 4, 5], 2)))",
"kunci": "yield menghentikan sementara fungsi dan melanjutkan di putaran berikutnya. range(0, n, langkah) melompat per langkah.",
"keluaran": "[3, 2, 1]\n[[1, 2], [3, 4], [5]]"
},
"langkah": [
{
"id": "py-it-1",
"judul": "Batch data",
"kategori": "studi",
"tingkat": 1,
"fungsi": "batch",
"cerita": "",
"soal": "Buat generator <code>batch(data, n)</code> yang menghasilkan potongan list berisi n item (potongan terakhir boleh lebih pendek). Odoo memakai pola ini untuk memproses record per kelompok.",
"awal": "def batch(data, n):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def batch(data, n):\n    for i in range(0, len(data), n):\n        yield data[i:i + n]\n",
"jelas": "Memproses data per batch menjaga memori tetap kecil dan dipakai untuk impor data besar atau pengiriman email massal.",
"kompleksitas": "",
"petunjuk": [
"Sama dengan per_kelompok di contoh.",
"Pastikan memakai yield, bukan return list.",
"Kerangka solusinya:\ndef batch(data, n):\n    for …:\n        …"
],
"tes": [
[
"list(batch([1, 2, 3, 4, 5], 2))",
"[[1, 2], [3, 4], [5]]"
],
[
"list(batch([], 3))",
"[]"
],
[
"list(batch(list(range(6)), 3))",
"[[0, 1, 2], [3, 4, 5]]"
],
[
"list(batch(['a'], 5))",
"[['a']]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-it-2",
"judul": "Generator nomor dokumen tak terbatas",
"kategori": "studi",
"tingkat": 2,
"fungsi": "nomor_dokumen",
"cerita": "",
"soal": "Buat generator <code>nomor_dokumen(awalan, mulai=1, padding=4)</code> yang menghasilkan nomor tanpa akhir: <code>awalan + angka dengan nol di depan</code>. Tes memakai <code>itertools.islice</code> untuk mengambil beberapa nomor.",
"awal": "def nomor_dokumen(awalan, mulai=1, padding=4):\n    # tulis kodemu di sini (pakai yield)\n    pass\n",
"solusi": "def nomor_dokumen(awalan, mulai=1, padding=4):\n    n = mulai\n    while True:\n        yield f\"{awalan}{n:0{padding}d}\"\n        n += 1\n",
"jelas": "Generator tak terbatas hanya aman bila pemakainya membatasi (islice, break). Ini mirip cara ir.sequence memberi nomor berikutnya.",
"kompleksitas": "",
"petunjuk": [
"while True dengan yield aman karena generator hanya berjalan saat diminta.",
"Format nol di depan: f\"{n:04d}\". Panjangnya dari parameter: f\"{n:0{padding}d}\".",
"Kerangka solusinya:\ndef nomor_dokumen(awalan, mulai=1, padding=4):\n    …\n    while …:\n        …\n        …"
],
"tes": [
[
"import itertools\nhasil = list(itertools.islice(nomor_dokumen(\"SO/2026/\"), 3))",
"['SO/2026/0001', 'SO/2026/0002', 'SO/2026/0003']"
],
[
"import itertools\nhasil = list(itertools.islice(nomor_dokumen(\"INV\", 99, 3), 3))",
"['INV099', 'INV100', 'INV101']"
],
[
"import itertools\nhasil = list(itertools.islice(nomor_dokumen(\"X\", padding=1), 2))",
"['X1', 'X2']"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-oop2",
"topik": "python",
"setelah": "oop2",
"judul": "dataclass, @property, dan dunder method",
"contoh": {
"judul": "Contoh: dataclass dan @property",
"penjelasan": "<p><code>@dataclass</code> membuat <code>__init__</code>, <code>__repr__</code>, dan <code>__eq__</code> otomatis dari daftar atribut. <code>@property</code> membuat method bisa dibaca seperti atribut (tanpa kurung), cocok untuk nilai turunan seperti total.</p>",
"kode": "from dataclasses import dataclass\n\n@dataclass\nclass Baris:\n    produk: str\n    qty: int\n    harga: float\n\n    @property\n    def subtotal(self):\n        return self.qty * self.harga\n\nb = Baris(\"Kopi\", 2, 15000)\nprint(b)\nprint(b.subtotal)\nprint(b == Baris(\"Kopi\", 2, 15000))",
"kunci": "@property = field hitungan (mirip field compute di Odoo). dataclass menghemat boilerplate.",
"keluaran": "Baris(produk='Kopi', qty=2, harga=15000)\n30000\nTrue"
},
"langkah": [
{
"id": "py-oop2-1",
"judul": "dataclass Baris dengan diskon",
"kategori": "studi",
"tingkat": 1,
"fungsi": "Baris",
"cerita": "",
"soal": "Buat <code>@dataclass</code> <code>Baris</code> dengan atribut <code>produk</code>, <code>qty</code>, <code>harga</code>, dan <code>diskon</code> (bawaan 0). Tambahkan <code>@property subtotal</code> = qty × harga × (1 − diskon/100), dibulatkan 2 desimal.",
"awal": "from dataclasses import dataclass\n\n@dataclass\nclass Baris:\n    pass\n",
"solusi": "from dataclasses import dataclass\n\n@dataclass\nclass Baris:\n    produk: str\n    qty: int\n    harga: float\n    diskon: float = 0\n\n    @property\n    def subtotal(self):\n        return round(self.qty * self.harga * (1 - self.diskon / 100), 2)\n",
"jelas": "dataclass memberi __eq__ dan __repr__ gratis, terlihat dari tes 3 dan 4.",
"kompleksitas": "",
"petunjuk": [
"Tulis atribut dengan anotasi tipe di badan class, atribut berbawaan di paling bawah.",
"subtotal memakai @property, jadi dipanggil tanpa kurung.",
"Kerangka solusinya:\nfrom dataclasses import dataclass\n\n…\nclass Baris:\n    …\n    …\n    …\n    …\n\n    …\n    def subtotal(self):\n        return …"
],
"tes": [
[
"Baris(\"Kopi\", 2, 15000, 10).subtotal",
"27000.0"
],
[
"Baris(\"Teh\", 1, 8000).subtotal",
"8000.0"
],
[
"Baris(\"A\", 3, 1.5) == Baris(\"A\", 3, 1.5)",
"True"
],
[
"repr(Baris(\"A\", 1, 2))",
"\"Baris(produk='A', qty=1, harga=2, diskon=0)\""
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-oop2-2",
"judul": "Class Uang dengan operator",
"kategori": "studi",
"tingkat": 2,
"fungsi": "Uang",
"cerita": "",
"soal": "Buat class <code>Uang</code> yang menyimpan <code>jumlah</code> (int rupiah). Dukung: <code>Uang(a) + Uang(b)</code> → Uang baru, <code>Uang(a) * angka</code> → Uang baru (dibulatkan dengan round), <code>==</code> membandingkan jumlah, dan <code>str(Uang(1500000))</code> → <code>\"Rp 1.500.000\"</code>.",
"awal": "class Uang:\n    def __init__(self, jumlah):\n        self.jumlah = jumlah\n",
"solusi": "class Uang:\n    def __init__(self, jumlah):\n        self.jumlah = jumlah\n\n    def __add__(self, lain):\n        return Uang(self.jumlah + lain.jumlah)\n\n    def __mul__(self, angka):\n        return Uang(round(self.jumlah * angka))\n\n    def __eq__(self, lain):\n        return isinstance(lain, Uang) and self.jumlah == lain.jumlah\n\n    def __str__(self):\n        return \"Rp \" + f\"{self.jumlah:,}\".replace(\",\", \".\")\n",
"jelas": "Dunder method membuat objekmu berperilaku seperti tipe bawaan. Perbandingan dengan tipe lain mengembalikan False, bukan error.",
"kompleksitas": "",
"petunjuk": [
"Setiap operator punya method khusus: + → __add__, * → __mul__, == → __eq__, str() → __str__.",
"__add__ dan __mul__ mengembalikan Uang BARU, tidak mengubah self.",
"Kerangka solusinya:\nclass Uang:\n    def __init__(self, jumlah):\n        …\n\n    def __add__(self, lain):\n        return …\n\n    def __mul__(self, angka):\n        return …\n\n    def __eq__(self, lain):\n        return …\n\n    def __str__(self):\n        return …"
],
"tes": [
[
"str(Uang(1500000))",
"'Rp 1.500.000'"
],
[
"str(Uang(1000) + Uang(2500))",
"'Rp 3.500'"
],
[
"str(Uang(15000) * 1.11)",
"'Rp 16.650'"
],
[
"Uang(5) == Uang(5)",
"True"
],
[
"Uang(5) == 5",
"False"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-stdlib",
"topik": "python",
"setelah": "stdlib",
"judul": "Pustaka standar: datetime, Counter, re",
"contoh": {
"judul": "Contoh: selisih tanggal, Counter, dan regex",
"penjelasan": "<p>Tiga pustaka yang paling sering muncul di pekerjaan: <code>datetime</code> untuk tanggal, <code>collections.Counter</code> untuk menghitung, dan <code>re</code> untuk mencari pola teks.</p>",
"kode": "from datetime import date\nfrom collections import Counter\nimport re\n\nprint((date(2026, 12, 31) - date(2026, 11, 24)).days)\nemail = [\"a@gmail.com\", \"b@yahoo.com\", \"c@gmail.com\"]\nprint(Counter(e.split(\"@\")[1] for e in email).most_common(1))\nprint(re.findall(r\"\\d+\", \"INV/2026/0042\"))",
"kunci": "(tanggal2 - tanggal1).days = selisih hari. Counter(...).most_common(n). re.findall(pola, teks).",
"keluaran": "37\n[('gmail.com', 2)]\n['2026', '0042']"
},
"langkah": [
{
"id": "py-std-1",
"judul": "Umur dalam tahun",
"kategori": "studi",
"tingkat": 1,
"fungsi": "umur",
"cerita": "",
"soal": "Buat <code>umur(lahir, hari_ini)</code> (keduanya teks <code>\"YYYY-MM-DD\"</code>) yang mengembalikan umur dalam tahun penuh. Ulang tahun yang belum lewat tahun ini belum dihitung.",
"awal": "def umur(lahir, hari_ini):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "from datetime import date\n\ndef umur(lahir, hari_ini):\n    a, b = date.fromisoformat(lahir), date.fromisoformat(hari_ini)\n    return b.year - a.year - ((b.month, b.day) < (a.month, a.day))\n",
"jelas": "Membagi selisih hari dengan 365 salah karena tahun kabisat. Membandingkan tuple (bulan, hari) adalah cara yang tepat.",
"kompleksitas": "",
"petunjuk": [
"Selisih tahun dulu: b.year - a.year.",
"Kurangi 1 bila ulang tahun belum lewat: bandingkan tuple (bulan, hari). True bernilai 1 saat dikurangkan.",
"Kerangka solusinya:\nfrom datetime import date\n\ndef umur(lahir, hari_ini):\n    …\n    return …"
],
"tes": [
[
"umur(\"2003-05-10\", \"2026-11-24\")",
"23"
],
[
"umur(\"2003-12-01\", \"2026-11-24\")",
"22"
],
[
"umur(\"2000-11-24\", \"2026-11-24\")",
"26"
],
[
"umur(\"2026-01-01\", \"2026-11-24\")",
"0"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-std-2",
"judul": "Ringkas kode produk",
"kategori": "studi",
"tingkat": 2,
"fungsi": "ringkas_kode",
"cerita": "",
"soal": "Teks catatan gudang berisi kode produk berbentuk 3 huruf besar, tanda minus, 4 angka (contoh <code>KRS-0012</code>). Buat <code>ringkas_kode(teks)</code> yang mengembalikan list tuple <code>(kode, jumlah)</code> diurutkan dari paling sering, seri diurutkan kode abjad.",
"awal": "def ringkas_kode(teks):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import re\nfrom collections import Counter\n\ndef ringkas_kode(teks):\n    hitung = Counter(re.findall(r\"\\b[A-Z]{3}-\\d{4}\\b\", teks))\n    return sorted(hitung.items(), key=lambda p: (-p[1], p[0]))\n",
"jelas": "\\b mencegah 'KRSS-0012' atau 'KRS-00123' ikut tertangkap. Validasi format dengan regex umum dipakai saat membersihkan data impor.",
"kompleksitas": "",
"petunjuk": [
"Pola regex: r\"\\b[A-Z]{3}-\\d{4}\\b\". {3} = tepat 3 kali, \\b = batas kata.",
"Counter untuk menghitung, lalu sorted dengan key (-jumlah, kode).",
"Kerangka solusinya:\nimport re\nfrom collections import Counter\n\ndef ringkas_kode(teks):\n    …\n    return …"
],
"tes": [
[
"ringkas_kode(\"Ambil KRS-0012 dan MJA-0003, lalu KRS-0012 lagi\")",
"[('KRS-0012', 2), ('MJA-0003', 1)]"
],
[
"ringkas_kode(\"tidak ada kode, krs-0012 huruf kecil\")",
"[]"
],
[
"ringkas_kode(\"AAA-1111 BBB-2222 BBB-2222 AAA-1111\")",
"[('AAA-1111', 2), ('BBB-2222', 2)]"
],
[
"ringkas_kode(\"KRSS-0012 KRS-00123 KRS-0012\")",
"[('KRS-0012', 1)]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-kerja",
"topik": "python",
"setelah": "kerja",
"judul": "Menulis tes otomatis",
"contoh": {
"judul": "Contoh: fungsi test_ dengan assert",
"penjelasan": "<p>Tes otomatis adalah fungsi yang memanggil kodemu dan memeriksa hasilnya dengan <code>assert</code>. pytest menjalankan semua fungsi yang namanya diawali <code>test_</code>. Tes yang baik juga memeriksa bahwa error yang benar dilempar.</p>",
"kode": "def luas(p, l):\n    if p < 0 or l < 0:\n        raise ValueError(\"tidak boleh negatif\")\n    return p * l\n\ndef test_luas_normal():\n    assert luas(3, 4) == 12\n\ndef test_luas_negatif():\n    try:\n        luas(-1, 2)\n        assert False, \"seharusnya ValueError\"\n    except ValueError:\n        pass\n\ntest_luas_normal(); test_luas_negatif()\nprint(\"semua tes lulus\")",
"kunci": "Tes yang baik: kasus normal, kasus tepi, dan kasus error. Dengan pytest, cek error ditulis: with pytest.raises(ValueError): ...",
"keluaran": "semua tes lulus"
},
"langkah": [
{
"id": "py-kerja-1",
"judul": "Type hint dan validasi",
"kategori": "studi",
"tingkat": 1,
"fungsi": "rata_rata",
"cerita": "",
"soal": "Buat <code>rata_rata(nilai: list[float]) -&gt; float</code> yang mengembalikan rata-rata dibulatkan 2 desimal. Jika list kosong, lempar <code>ValueError</code>.",
"awal": "def rata_rata(nilai):\n    # tambahkan type hint dan isi fungsinya\n    pass\n",
"solusi": "def rata_rata(nilai: list[float]) -> float:\n    if not nilai:\n        raise ValueError(\"list kosong\")\n    return round(sum(nilai) / len(nilai), 2)\n",
"jelas": "Type hint tidak dicek Python saat berjalan, tetapi membantu editor dan pembaca. Tes 3 memastikan anotasinya ditulis.",
"kompleksitas": "",
"petunjuk": [
"Type hint ditulis nilai: list[float] dan -> float setelah kurung.",
"raise ValueError(\"...\") untuk list kosong.",
"Kerangka solusinya:\ndef rata_rata(nilai: list[float]) -> float:\n    if …:\n        …\n    return …"
],
"tes": [
[
"rata_rata([1.5, 2.5, 3])",
"2.33"
],
[
"try:\n    rata_rata([])\n    hasil = \"tidak error\"\nexcept ValueError:\n    hasil = \"ValueError\"",
"'ValueError'"
],
[
"rata_rata.__annotations__.get('return') is float",
"True"
],
[
"rata_rata([10])",
"10.0"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "py-kerja-2",
"judul": "Tulis tes yang menangkap bug",
"kategori": "studi",
"tingkat": 3,
"fungsi": "test_",
"cerita": "",
"soal": "Fungsi <code>diskon(harga, persen)</code> sudah disediakan: ia mengembalikan harga setelah diskon, <b>dibulatkan</b> ke int, dan melempar <code>ValueError</code> jika persen di luar 0–100. Tugasmu menulis fungsi <code>test_...</code> (boleh lebih dari satu) yang memanggil <code>diskon</code>. Tesmu harus <b>lulus</b> untuk versi yang benar dan <b>gagal</b> untuk 3 versi yang punya bug tersembunyi.",
"awal": "# diskon(harga, persen) sudah tersedia.\n\ndef test_diskon_normal():\n    assert diskon(10000, 10) == 9000\n",
"solusi": "def test_diskon_normal():\n    assert diskon(10000, 10) == 9000\n\ndef test_dibulatkan():\n    assert diskon(999, 33) == 669\n\ndef test_persen_tidak_valid():\n    try:\n        diskon(1000, 150)\n        assert False\n    except ValueError:\n        pass\n",
"jelas": "Tes yang baik dinilai dari bug yang bisa ditangkapnya (mutation testing). Odoo memakai TransactionCase dengan self.assertEqual dan self.assertRaises, tapi idenya sama.",
"kompleksitas": "",
"petunjuk": [
"Pikirkan bug yang mungkin: lupa validasi persen, rumus terbalik, lupa membulatkan. Buat satu tes untuk masing-masing.",
"Untuk pembulatan, pilih angka yang hasilnya tidak bulat, misalnya diskon(999, 33). Hitung sendiri hasil yang benar: round(999 × 0,67) = 669.",
"Kerangka solusinya:\ndef test_diskon_normal():\n    …\n\ndef test_dibulatkan():\n    …\n\ndef test_persen_tidak_valid():\n    try:\n        …\n        …\n    except …:\n        …"
],
"tes": [
[
"nilai_tes(globals())",
"{'benar_lulus': True, 'bug_tertangkap': [True, True, True]}"
],
[
"nilai_tes(globals())['benar_lulus']",
"True"
],
[
"sum(nilai_tes(globals())['bug_tertangkap'])",
"3"
]
],
"contoh": 1,
"pre": "\ndef _diskon_benar(harga, persen):\n    if not 0 <= persen <= 100:\n        raise ValueError(\"persen di luar 0-100\")\n    return round(harga * (1 - persen / 100))\n\ndef _diskon_bug1(harga, persen):          # lupa validasi\n    return round(harga * (1 - persen / 100))\n\ndef _diskon_bug2(harga, persen):          # rumus salah\n    if not 0 <= persen <= 100:\n        raise ValueError(\"persen di luar 0-100\")\n    return round(harga * persen / 100)\n\ndef _diskon_bug3(harga, persen):          # tidak dibulatkan\n    if not 0 <= persen <= 100:\n        raise ValueError(\"persen di luar 0-100\")\n    return harga * (1 - persen / 100)\n\ndiskon = _diskon_benar\n\ndef nilai_tes(ns):\n    \"\"\"Jalankan semua fungsi test_ milikmu terhadap versi benar dan 3 versi bug.\"\"\"\n    tes = [f for n, f in sorted(ns.items()) if n.startswith(\"test_\") and callable(f)]\n    if not tes:\n        return \"belum ada fungsi test_\"\n    def lulus(versi):\n        ns[\"diskon\"] = versi\n        try:\n            for f in tes:\n                f()\n            return True\n        except Exception:\n            return False\n    return {\"benar_lulus\": lulus(_diskon_benar), \"bug_tertangkap\": [not lulus(v) for v in (_diskon_bug1, _diskon_bug2, _diskon_bug3)]}\n",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "py-proyek",
"topik": "python",
"setelah": "proyek",
"judul": "Proyek mini: laporan penjualan",
"contoh": {
"judul": "Contoh: dari transaksi mentah ke ringkasan",
"penjelasan": "<p>Proyek kecil biasanya menggabungkan semua dasar: perulangan, dict, sorting, dan format. Pecah menjadi langkah: kumpulkan → hitung → urutkan → format.</p>",
"kode": "transaksi = [\n    {\"tgl\": \"2026-11-01\", \"produk\": \"Kopi\", \"qty\": 2, \"harga\": 15000},\n    {\"tgl\": \"2026-11-01\", \"produk\": \"Teh\", \"qty\": 1, \"harga\": 8000},\n    {\"tgl\": \"2026-11-02\", \"produk\": \"Kopi\", \"qty\": 1, \"harga\": 15000},\n]\nper_hari = {}\nfor t in transaksi:\n    per_hari[t[\"tgl\"]] = per_hari.get(t[\"tgl\"], 0) + t[\"qty\"] * t[\"harga\"]\nfor tgl, total in sorted(per_hari.items()):\n    print(tgl, total)",
"kunci": "Kumpulkan dengan dict, urutkan dengan sorted(dict.items()), baru format.",
"keluaran": "2026-11-01 38000\n2026-11-02 15000"
},
"langkah": [
{
"id": "py-proj-1",
"judul": "Laporan per produk",
"kategori": "studi",
"tingkat": 2,
"fungsi": "laporan",
"cerita": "",
"soal": "Buat <code>laporan(transaksi)</code>: kembalikan dict <code>{\"total\": omzet, \"produk\": [(nama, qty, omzet), ...], \"terlaris\": nama}</code>. List produk diurutkan omzet terbesar (seri: nama abjad). <code>terlaris</code> = produk dengan <b>qty</b> terbanyak (seri: nama abjad), atau None bila tidak ada transaksi.",
"awal": "def laporan(transaksi):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def laporan(transaksi):\n    data = {}\n    for t in transaksi:\n        d = data.setdefault(t[\"produk\"], [0, 0])\n        d[0] += t[\"qty\"]\n        d[1] += t[\"qty\"] * t[\"harga\"]\n    produk = sorted(((n, q, o) for n, (q, o) in data.items()), key=lambda p: (-p[2], p[0]))\n    terlaris = min(data, key=lambda n: (-data[n][0], n)) if data else None\n    return {\"total\": sum(o for _, _, o in produk), \"produk\": produk, \"terlaris\": terlaris}\n",
"jelas": "Perhatikan bedanya: urutan daftar memakai omzet, sedangkan 'terlaris' memakai qty. Membaca soal dengan teliti adalah separuh dari coding test.",
"kompleksitas": "",
"petunjuk": [
"Kumpulkan per produk: qty dan omzet, misalnya dict nama → [qty, omzet].",
"Urutkan dengan key (-omzet, nama). Terlaris dipilih dengan min(..., key=lambda n: (-qty, n)).",
"Kerangka solusinya:\ndef laporan(transaksi):\n    …\n    for …:\n        …\n        …\n        …\n    …\n    …\n    return …"
],
"tes": [
[
"laporan([{\"produk\": \"Kopi\", \"qty\": 2, \"harga\": 15000}, {\"produk\": \"Teh\", \"qty\": 5, \"harga\": 4000}, {\"produk\": \"Kopi\", \"qty\": 1, \"harga\": 15000}])",
"{'total': 65000, 'produk': [('Kopi', 3, 45000), ('Teh', 5, 20000)], 'terlaris': 'Teh'}"
],
[
"laporan([])",
"{'total': 0, 'produk': [], 'terlaris': None}"
],
[
"laporan([{\"produk\": \"B\", \"qty\": 1, \"harga\": 10}, {\"produk\": \"A\", \"qty\": 1, \"harga\": 10}])",
"{'total': 20, 'produk': [('A', 1, 10), ('B', 1, 10)], 'terlaris': 'A'}"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
},
{
"id": "py-proj-2",
"judul": "Rekap absensi",
"kategori": "studi",
"tingkat": 2,
"fungsi": "rekap_absen",
"cerita": "",
"soal": "Log absensi berisi baris <code>\"YYYY-MM-DD HH:MM NAMA MASUK|PULANG\"</code>. Buat <code>rekap_absen(log)</code> yang mengembalikan dict <code>{nama: total_menit_kerja}</code>. Pasangkan MASUK dengan PULANG berikutnya pada nama yang sama; MASUK tanpa PULANG diabaikan. Nama dalam log tidak mengandung spasi.",
"awal": "def rekap_absen(log):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "from datetime import datetime\n\ndef rekap_absen(log):\n    masuk, total = {}, {}\n    for baris in log.strip().splitlines():\n        tgl, jam, nama, jenis = baris.split()\n        waktu = datetime.strptime(tgl + \" \" + jam, \"%Y-%m-%d %H:%M\")\n        if jenis == \"MASUK\":\n            masuk[nama] = waktu\n        elif nama in masuk:\n            menit = int((waktu - masuk.pop(nama)).total_seconds() // 60)\n            total[nama] = total.get(nama, 0) + menit\n    return total\n",
"jelas": "Memakai datetime (bukan menghitung jam manual) membuat shift lewat tengah malam tetap benar, seperti tes terakhir. Ini dasar modul Attendances di Odoo.",
"kompleksitas": "",
"petunjuk": [
"Pecah tiap baris dengan split() menjadi 4 bagian. Simpan waktu MASUK terakhir per nama di dict.",
"Saat PULANG: selisih waktu (datetime - datetime) memberi timedelta; .total_seconds() // 60 = menit.",
"Kerangka solusinya:\nfrom datetime import datetime\n\ndef rekap_absen(log):\n    …\n    for …:\n        …\n        …\n        if …:\n            …\n        elif …:\n            …\n            …\n    return …"
],
"tes": [
[
"rekap_absen(\"2026-11-24 08:00 Ani MASUK\\n2026-11-24 08:15 Budi MASUK\\n2026-11-24 16:30 Ani PULANG\\n2026-11-24 17:00 Budi PULANG\")",
"{'Ani': 510, 'Budi': 525}"
],
[
"rekap_absen(\"2026-11-24 08:00 Ani MASUK\")",
"{}"
],
[
"rekap_absen(\"2026-11-24 08:00 Ani MASUK\\n2026-11-24 12:00 Ani PULANG\\n2026-11-24 13:00 Ani MASUK\\n2026-11-24 17:00 Ani PULANG\")",
"{'Ani': 480}"
],
[
"rekap_absen(\"2026-11-24 22:00 Cita MASUK\\n2026-11-25 06:00 Cita PULANG\")",
"{'Cita': 480}"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-strategi",
"topik": "ct",
"setelah": "strategi",
"judul": "Dari O(n²) ke O(n)",
"contoh": {
"judul": "Contoh: dua cara mencari angka kembar",
"penjelasan": "<p>Soal yang sama bisa diselesaikan dengan cara lambat dan cara cepat. Cara lambat membandingkan setiap pasangan (O(n²)); cara cepat mengingat yang sudah dilihat di <code>set</code> (O(n)). Untuk 100.000 data, perbedaannya detik melawan menit.</p>",
"kode": "import time\n\ndef lambat(data):\n    for i in range(len(data)):\n        for j in range(i + 1, len(data)):\n            if data[i] == data[j]:\n                return True\n    return False\n\ndef cepat(data):\n    sudah = set()\n    for x in data:\n        if x in sudah:\n            return True\n        sudah.add(x)\n    return False\n\ndata = list(range(3000))\nfor f in (lambat, cepat):\n    t = time.perf_counter()\n    hasil = f(data)\n    print(f.__name__, hasil, f\"{(time.perf_counter() - t) * 1000:.1f} ms\")",
"kunci": "Pertanyaan 'apakah sudah pernah muncul?' → pakai set. Pertanyaan 'di indeks berapa?' → pakai dict.",
"keluaran": "lambat False 307.1 ms\ncepat False 0.3 ms"
},
"langkah": [
{
"id": "ct-duplikat",
"judul": "Ada data kembar?",
"kategori": "studi",
"tingkat": 1,
"fungsi": "ada_duplikat",
"cerita": "",
"soal": "Buat <code>ada_duplikat(data)</code> yang mengembalikan True jika ada nilai yang muncul lebih dari sekali. Tes terakhir memakai 200.000 data, jadi solusi O(n²) akan terlalu lambat (dihentikan setelah 10 detik).",
"awal": "def ada_duplikat(data):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def ada_duplikat(data):\n    sudah = set()\n    for x in data:\n        if x in sudah:\n            return True\n        sudah.add(x)\n    return False\n",
"jelas": "Mengubah pencarian di list menjadi pencarian di set adalah optimasi yang paling sering diminta pewawancara.",
"kompleksitas": "",
"petunjuk": [
"Ikuti fungsi cepat di contoh terpandu.",
"Cara satu baris juga benar: len(set(data)) != len(data).",
"Kerangka solusinya:\ndef ada_duplikat(data):\n    …\n    for …:\n        if …:\n            return …\n        …\n    return …"
],
"tes": [
[
"ada_duplikat([3, 1, 4, 1])",
"True"
],
[
"ada_duplikat([1, 2, 3])",
"False"
],
[
"ada_duplikat([])",
"False"
],
[
"ada_duplikat([\"SO1\", \"so1\"])",
"False"
],
[
"ada_duplikat(list(range(200000)) + [199999])",
"True"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "two-sum",
"judul": "Two Sum",
"kategori": "algo",
"tingkat": 2,
"fungsi": "dua_jumlah",
"cerita": "",
"soal": "Diberi list <code>angka</code> dan <code>target</code>, kembalikan <b>indeks dua angka</b> yang jumlahnya sama dengan target, sebagai list <code>[i, j]</code> dengan i &lt; j. Dijamin ada tepat satu jawaban. Usahakan lebih cepat dari O(n²).",
"awal": "def dua_jumlah(angka, target):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def dua_jumlah(angka, target):\n    posisi = {}\n    for j, x in enumerate(angka):\n        pasangan = target - x\n        if pasangan in posisi:\n            return [posisi[pasangan], j]\n        posisi[x] = j\n    return []\n",
"jelas": "Ini soal coding test paling terkenal. Kuncinya menukar memori dengan kecepatan: dict membuat pencarian pasangan O(1), jadi total O(n). Perhatikan [3, 3]: angka dimasukkan ke dict SETELAH dicek, supaya satu angka tidak dipasangkan dengan dirinya sendiri.",
"kompleksitas": "O(n) waktu, O(n) memori",
"petunjuk": [
"Cara dua for bersarang benar tapi O(n²). Bisakah sekali jalan saja?",
"Simpan angka yang sudah dilihat di dict {nilai: indeks}. Untuk tiap x, cek apakah target - x sudah ada di dict.",
"Kerangka solusinya:\ndef dua_jumlah(angka, target):\n    …\n    for …:\n        …\n        if …:\n            return …\n        …\n    return …"
],
"tes": [
[
"dua_jumlah([2, 7, 11, 15], 9)",
"[0, 1]"
],
[
"dua_jumlah([3, 2, 4], 6)",
"[1, 2]"
],
[
"dua_jumlah([3, 3], 6)",
"[0, 1]"
],
[
"dua_jumlah([-1, 8, 5, 0], 4)",
"[0, 2]"
],
[
"dua_jumlah([1, 5, 9, 14, 20], 34)",
"[3, 4]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-baca",
"topik": "ct",
"setelah": "baca",
"judul": "Memperbaiki kode orang lain",
"contoh": {
"judul": "Contoh: aliasing dan float",
"penjelasan": "<p>Dua bug yang sering ditanam di soal debugging: fungsi yang diam-diam <b>mengubah data masukan</b> (karena list diteruskan sebagai objek yang sama), dan perbandingan <b>float</b> dengan <code>==</code>.</p>",
"kode": "def naikkan(harga):\n    for i in range(len(harga)):\n        harga[i] = harga[i] * 2\n    return harga\n\nasli = [10, 20]\nbaru = naikkan(asli)\nprint(asli, baru)           # asli ikut berubah!\n\ndef naikkan_aman(harga):\n    return [h * 2 for h in harga]   # list baru\n\nasli = [10, 20]\nprint(naikkan_aman(asli), asli)\nprint(0.1 + 0.2 == 0.3, round(0.1 + 0.2, 2) == 0.3)",
"kunci": "Kembalikan list BARU (comprehension) bila data masukan tidak boleh berubah. Bandingkan float setelah round atau dengan toleransi.",
"keluaran": "[20, 40] [20, 40]\n[20, 40] [10, 20]\nFalse True"
},
"langkah": [
{
"id": "ct-bug-pajak",
"judul": "Perbaiki fungsi pajak",
"kategori": "studi",
"tingkat": 2,
"fungsi": "tambah_pajak",
"cerita": "",
"soal": "Kode awal punya <b>dua bug</b>. <code>tambah_pajak(harga, persen)</code> seharusnya mengembalikan <b>list baru</b> berisi harga + pajak, dibulatkan 2 desimal, tanpa mengubah list <code>harga</code> yang diberikan.",
"awal": "def tambah_pajak(harga, persen):\n    for i in range(len(harga)):\n        harga[i] = harga[i] * (1 + persen / 100)\n    return harga\n",
"solusi": "def tambah_pajak(harga, persen):\n    return [round(h * (1 + persen / 100), 2) for h in harga]\n",
"jelas": "Fungsi yang mengubah argumennya disebut punya efek samping. Di Odoo, dict vals yang dipakai ulang di beberapa create() menimbulkan bug serupa.",
"kompleksitas": "",
"petunjuk": [
"Tes 2 memeriksa apakah list asli berubah. Kode awal menulis ke harga[i].",
"Buat list baru dengan comprehension, dan bulatkan setiap nilai dengan round(..., 2).",
"Kerangka solusinya:\ndef tambah_pajak(harga, persen):\n    return …"
],
"tes": [
[
"tambah_pajak([100, 19.99], 11)",
"[111.0, 22.19]"
],
[
"h = [1000, 2500]\ntambah_pajak(h, 11)\nhasil = h",
"[1000, 2500]"
],
[
"tambah_pajak([], 11)",
"[]"
],
[
"tambah_pajak([0.1, 0.2], 10)",
"[0.11, 0.22]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "ct-bug-lunas",
"judul": "Perbaiki pencari pelunasan",
"kategori": "studi",
"tingkat": 2,
"fungsi": "cicilan_lunas",
"cerita": "",
"soal": "Kode awal punya <b>tiga bug</b>. <code>cicilan_lunas(cicilan, total)</code> seharusnya mengembalikan <b>nomor cicilan (mulai 1)</b> saat jumlah pembayaran pertama kali mencapai atau melewati <code>total</code>, atau <code>-1</code> bila tidak pernah. Jumlah uang dibandingkan setelah dibulatkan 2 desimal.",
"awal": "def cicilan_lunas(cicilan, total):\n    jumlah = 0\n    for i in range(1, len(cicilan)):\n        jumlah += cicilan[i]\n        if jumlah == total:\n            return i\n    return -1\n",
"solusi": "def cicilan_lunas(cicilan, total):\n    jumlah = 0\n    for i, c in enumerate(cicilan, start=1):\n        jumlah += c\n        if round(jumlah, 2) >= total:\n            return i\n    return -1\n",
"jelas": "Tiga jenis bug berbeda dalam lima baris: batas perulangan (off-by-one), operator perbandingan, dan presisi float. Biasakan menguji batas: tepat sama, melewati, dan tidak pernah tercapai.",
"kompleksitas": "",
"petunjuk": [
"Bug 1: range(1, len(...)) melewatkan cicilan pertama. Bug 2: == tidak menangkap 'melewati'. Bug 3: float 0.1 + 0.2.",
"Pakai enumerate(cicilan, start=1) agar nomornya langsung mulai 1, lalu bandingkan round(jumlah, 2) >= total.",
"Kerangka solusinya:\ndef cicilan_lunas(cicilan, total):\n    …\n    for …:\n        …\n        if …:\n            return …\n    return …"
],
"tes": [
[
"cicilan_lunas([100, 200, 300], 300)",
"2"
],
[
"cicilan_lunas([0.1, 0.2], 0.3)",
"2"
],
[
"cicilan_lunas([500], 300)",
"1"
],
[
"cicilan_lunas([10, 10], 100)",
"-1"
],
[
"cicilan_lunas([], 1)",
"-1"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-algo",
"topik": "ct",
"setelah": "algo",
"judul": "Stack dan 'urutkan dulu'",
"contoh": {
"judul": "Contoh: stack untuk riwayat undo",
"penjelasan": "<p>Stack adalah list yang hanya ditambah dan diambil dari ujung: <code>append</code> dan <code>pop</code>. Elemen terakhir masuk keluar pertama (LIFO), persis seperti tombol undo.</p>",
"kode": "riwayat = []\nfor aksi in [\"ketik A\", \"ketik B\", \"hapus B\"]:\n    riwayat.append(aksi)\nprint(riwayat)\nprint(\"undo:\", riwayat.pop())\nprint(\"undo:\", riwayat.pop())\nprint(riwayat)\n\njadwal = [[9, 11], [8, 10], [13, 14]]\nprint(sorted(jadwal))     # urutkan berdasarkan jam mulai",
"kunci": "Stack: append + pop. Banyak soal interval selesai dengan 'urutkan dulu, lalu bandingkan dengan elemen terakhir'.",
"keluaran": "['ketik A', 'ketik B', 'hapus B']\nundo: hapus B\nundo: ketik B\n['ketik A']\n[[8, 10], [9, 11], [13, 14]]"
},
"langkah": [
{
"id": "kurung",
"judul": "Kurung seimbang",
"kategori": "algo",
"tingkat": 2,
"fungsi": "seimbang",
"cerita": "",
"soal": "Buat <code>seimbang(s)</code> yang mengembalikan <code>True</code> jika semua kurung <code>()</code>, <code>[]</code>, <code>{}</code> di s berpasangan dan bersarang dengan benar. Karakter lain diabaikan.",
"awal": "def seimbang(s):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def seimbang(s):\n    pasangan = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n    tumpukan = []\n    for c in s:\n        if c in \"([{\":\n            tumpukan.append(c)\n        elif c in pasangan:\n            if not tumpukan or tumpukan.pop() != pasangan[c]:\n                return False\n    return not tumpukan\n",
"jelas": "Stack = Last In First Out. Soal ini menguji apakah kamu bisa memilih struktur data yang tepat. Jangan lupa dua kasus tepi: ')(' (tutup saat stack kosong) dan '((' (sisa di akhir).",
"kompleksitas": "O(n)",
"petunjuk": [
"Pakai stack (list dengan append dan pop): kurung buka dimasukkan, kurung tutup harus cocok dengan kurung buka TERAKHIR.",
"Dua cara gagal: bertemu kurung tutup saat stack kosong, atau di akhir stack masih berisi.",
"Kerangka solusinya:\ndef seimbang(s):\n    …\n    …\n    for …:\n        if …:\n            …\n        elif …:\n            if …:\n                return …\n    return …"
],
"tes": [
[
"seimbang(\"([]{})\")",
"True"
],
[
"seimbang(\"([)]\")",
"False"
],
[
"seimbang(\"((\")",
"False"
],
[
"seimbang(\"\")",
"True"
],
[
"seimbang(\"domain = [('state', '=', 'sale')]\")",
"True"
],
[
"seimbang(\")(\")",
"False"
],
[
"seimbang(\"{[()()]}\")",
"True"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "gabung-interval",
"judul": "Gabungkan jadwal bertumpuk",
"kategori": "algo",
"tingkat": 3,
"fungsi": "gabung_interval",
"cerita": "Tim support punya daftar jam sibuk teknisi sebagai pasangan [mulai, selesai]. Mereka ingin melihat blok waktu sibuk yang sudah digabung.",
"soal": "Buat <code>gabung_interval(jadwal)</code>: gabungkan semua interval yang bertumpuk atau bersentuhan, lalu kembalikan list interval terurut berdasarkan waktu mulai.",
"awal": "def gabung_interval(jadwal):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def gabung_interval(jadwal):\n    hasil = []\n    for mulai, selesai in sorted(jadwal):\n        if hasil and mulai <= hasil[-1][1]:\n            hasil[-1][1] = max(hasil[-1][1], selesai)\n        else:\n            hasil.append([mulai, selesai])\n    return hasil\n",
"jelas": "Pola 'urutkan dulu, lalu satu kali jalan' menyelesaikan banyak soal interval. max() diperlukan untuk kasus [1, 10] yang menelan [2, 3]. Kompleksitas didominasi sorting: O(n log n).",
"kompleksitas": "O(n log n)",
"petunjuk": [
"Urutkan dulu berdasarkan waktu mulai. Setelah urut, interval yang bertumpuk pasti berdampingan.",
"Bandingkan setiap interval dengan interval TERAKHIR di hasil: kalau mulai <= selesai terakhir, perpanjang (pakai max); kalau tidak, tambahkan sebagai blok baru.",
"Kerangka solusinya:\ndef gabung_interval(jadwal):\n    …\n    for …:\n        if …:\n            …\n        else:\n            …\n    return …"
],
"tes": [
[
"gabung_interval([[1, 3], [2, 6], [8, 10], [15, 18]])",
"[[1, 6], [8, 10], [15, 18]]"
],
[
"gabung_interval([[1, 4], [4, 5]])",
"[[1, 5]]"
],
[
"gabung_interval([])",
"[]"
],
[
"gabung_interval([[5, 7], [1, 2]])",
"[[1, 2], [5, 7]]"
],
[
"gabung_interval([[1, 10], [2, 3], [4, 8]])",
"[[1, 10]]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-otomasi",
"topik": "ct",
"setelah": "otomasi",
"judul": "Membersihkan data sebelum masuk Odoo",
"contoh": {
"judul": "Contoh: regex + Counter pada log",
"penjelasan": "<p>Pola kerja robot data: ambil teks mentah → ekstrak bagian penting dengan regex → hitung/ringkas → simpan. <code>re.sub</code> membersihkan, <code>re.findall</code> mengambil.</p>",
"kode": "import re\nfrom collections import Counter\n\nlog = \"\"\"10:01 ERROR [E102] Timeout\n10:02 INFO [I001] OK\n10:03 ERROR [E102] Timeout\n10:05 ERROR [E201] Captcha\"\"\"\nkode = re.findall(r\"ERROR \\[(\\w+)\\]\", log)\nprint(kode)\nprint(Counter(kode).most_common(1))\nprint(re.sub(r\"\\D\", \"\", \"(0274) 512-345\"))",
"kunci": "Satu grup tangkap (...) di pola membuat findall mengembalikan isi grup saja.",
"keluaran": "['E102', 'E102', 'E201']\n[('E102', 2)]\n0274512345"
},
"langkah": [
{
"id": "rpa-telepon",
"judul": "Normalisasi nomor telepon",
"kategori": "otomasi",
"tingkat": 2,
"fungsi": "normalisasi_hp",
"cerita": "Data kontak dari berbagai sumber ditulis berbeda-beda. Sebelum diimpor ke Odoo, nomor harus seragam berformat internasional.",
"soal": "Buat <code>normalisasi_hp(nomor)</code>: buang semua karakter selain angka (tetapi ingat apakah diawali <code>+</code>). Jika diawali <code>0</code>, ganti 0 dengan <code>62</code>. Jika sudah diawali <code>62</code>, biarkan. Hasil diberi awalan <code>+</code>. Jika setelah dibersihkan panjang angkanya kurang dari 10 atau lebih dari 15, kembalikan <code>None</code>.",
"awal": "def normalisasi_hp(nomor):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import re\n\ndef normalisasi_hp(nomor):\n    angka = re.sub(r\"\\D\", \"\", nomor)\n    if angka.startswith(\"0\"):\n        angka = \"62\" + angka[1:]\n    if not angka.startswith(\"62\") or not 10 <= len(angka) <= 15:\n        return None\n    return \"+\" + angka\n",
"jelas": "Normalisasi data sebelum impor mencegah kontak ganda di CRM. Urutan langkahnya: bersihkan, ubah awalan, lalu validasi. Batas panjang 10–15 mengikuti standar E.164 (maksimal 15 digit).",
"kompleksitas": "O(n)",
"petunjuk": [
"re.sub(r\"\\D\", \"\", nomor) membuang semua yang bukan digit (\\D = bukan digit).",
"Setelah bersih: awalan 0 → 62. Lalu cek harus diawali 62 dan panjangnya 10–15 digit. Nomor luar negeri (+1 ...) dianggap tidak valid di soal ini.",
"Kerangka solusinya:\nimport re\n\ndef normalisasi_hp(nomor):\n    …\n    if …:\n        …\n    if …:\n        return …\n    return …"
],
"tes": [
[
"normalisasi_hp(\"0812-3456-7890\")",
"'+6281234567890'"
],
[
"normalisasi_hp(\"+62 812 3456 7890\")",
"'+6281234567890'"
],
[
"normalisasi_hp(\"(0274) 512345\")",
"'+62274512345'"
],
[
"normalisasi_hp(\"0812\")",
"None"
],
[
"normalisasi_hp(\"62 811 222 333\")",
"'+62811222333'"
],
[
"normalisasi_hp(\"+1 415 555 0100\")",
"None"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "rpa-log",
"judul": "Error terbanyak di log",
"kategori": "otomasi",
"tingkat": 2,
"fungsi": "error_terbanyak",
"cerita": "Robot otomasi menulis log seperti <code>2026-11-24 10:01:22 ERROR [E102] Timeout saat login</code>. Tim ingin tahu kode error yang paling sering muncul.",
"soal": "Buat <code>error_terbanyak(log)</code>. <code>log</code> adalah satu string berisi banyak baris. Hitung hanya baris berlevel <code>ERROR</code>, ambil kode di dalam kurung siku. Kembalikan tuple <code>(kode, jumlah)</code> untuk kode terbanyak; jika seri, kode terkecil secara abjad. Jika tidak ada error, kembalikan <code>None</code>.",
"awal": "def error_terbanyak(log):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "import re\nfrom collections import Counter\n\ndef error_terbanyak(log):\n    kode = re.findall(r\"\\bERROR \\[(\\w+)\\]\", log)\n    if not kode:\n        return None\n    hitung = Counter(kode)\n    return min(hitung.items(), key=lambda p: (-p[1], p[0]))\n",
"jelas": "Kurung siku adalah karakter khusus di regex, jadi harus di-escape: \\[ dan \\]. Analisis log seperti ini adalah pekerjaan rutin di tim RPA untuk menemukan bot yang sering gagal.",
"kompleksitas": "O(n)",
"petunjuk": [
"Regex dengan satu grup tangkap: r\"\\bERROR \\[(\\w+)\\]\". findall lalu mengembalikan isi grup saja, yaitu kodenya.",
"Hitung dengan Counter, lalu pilih dengan min(..., key=lambda p: (-jumlah, kode)) agar seri jatuh ke abjad terkecil.",
"Kerangka solusinya:\nimport re\nfrom collections import Counter\n\ndef error_terbanyak(log):\n    …\n    if …:\n        return …\n    …\n    return …"
],
"tes": [
[
"error_terbanyak(\"2026-11-24 10:01 ERROR [E102] Timeout\\n2026-11-24 10:02 INFO [I001] OK\\n2026-11-24 10:03 ERROR [E102] Timeout\\n2026-11-24 10:04 ERROR [E201] Captcha\")",
"('E102', 2)"
],
[
"error_terbanyak(\"2026-11-24 10:02 INFO [I001] OK\")",
"None"
],
[
"error_terbanyak(\"x ERROR [B2] a\\ny ERROR [A1] b\")",
"('A1', 1)"
],
[
"error_terbanyak(\"\")",
"None"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-model",
"topik": "ct",
"setelah": "model",
"judul": "Menyiapkan data untuk create()",
"contoh": {
"judul": "Contoh: dict vals dan perintah One2many",
"penjelasan": "<p><code>create()</code> menerima dict <i>vals</i>. Untuk One2many (misalnya baris order), nilainya list perintah: <code>(0, 0, {...})</code> = buat baris baru (sama dengan <code>Command.create({...})</code>), <code>(6, 0, [ids])</code> = ganti semua relasi Many2many.</p>",
"kode": "baris = [(\"Kopi\", 2, 15000), (\"Teh\", 1, 8000)]\nvals = {\n    \"partner_id\": 7,\n    \"order_line\": [\n        (0, 0, {\"product_id\": p, \"product_uom_qty\": q, \"price_unit\": h})\n        for p, q, h in baris\n    ],\n}\nprint(vals)\n# Di Odoo: self.env[\"sale.order\"].create(vals)",
"kunci": "(0, 0, vals) membuat baris baru. Tulis vals dengan list comprehension supaya rapi.",
"keluaran": "{'partner_id': 7, 'order_line': [(0, 0, {'product_id': 'Kopi', 'product_uom_qty': 2, 'price_unit': 15000}), (0, 0, {'product_id': 'Teh', 'product_uom_qty': 1, 'price_unit': 8000})]}"
},
"langkah": [
{
"id": "ct-vals",
"judul": "vals untuk Sales Order",
"kategori": "studi",
"tingkat": 2,
"fungsi": "vals_order",
"cerita": "",
"soal": "Buat <code>vals_order(partner_id, baris)</code>. <code>baris</code> adalah list tuple <code>(product_id, qty, harga)</code>. Kembalikan dict vals dengan kunci <code>partner_id</code> dan <code>order_line</code> berisi perintah <code>(0, 0, {\"product_id\", \"product_uom_qty\", \"price_unit\"})</code>. Baris dengan qty ≤ 0 dilewati. Jika <code>baris</code> kosong, <code>order_line</code> berisi list kosong.",
"awal": "def vals_order(partner_id, baris):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def vals_order(partner_id, baris):\n    return {\n        \"partner_id\": partner_id,\n        \"order_line\": [\n            (0, 0, {\"product_id\": p, \"product_uom_qty\": q, \"price_unit\": h})\n            for p, q, h in baris if q > 0\n        ],\n    }\n",
"jelas": "Menyiapkan vals dengan benar adalah separuh pekerjaan impor data dan integrasi API ke Odoo.",
"kompleksitas": "",
"petunjuk": [
"Mirip contoh, tambahkan saringan if q > 0 di comprehension.",
"Kunci dict baris harus persis: product_id, product_uom_qty, price_unit.",
"Kerangka solusinya:\ndef vals_order(partner_id, baris):\n    return …\n        …\n        …\n            …\n            for …\n        …\n    …"
],
"tes": [
[
"vals_order(7, [(1, 2, 15000.0), (2, 1, 8000.0)])",
"{'partner_id': 7, 'order_line': [(0, 0, {'product_id': 1, 'product_uom_qty': 2, 'price_unit': 15000.0}), (0, 0, {'product_id': 2, 'product_uom_qty': 1, 'price_unit': 8000.0})]}"
],
[
"vals_order(3, [])",
"{'partner_id': 3, 'order_line': []}"
],
[
"vals_order(5, [(9, 0, 100.0), (8, -1, 50.0), (4, 3, 1.5)])",
"{'partner_id': 5, 'order_line': [(0, 0, {'product_id': 4, 'product_uom_qty': 3, 'price_unit': 1.5})]}"
]
],
"contoh": 1,
"pre": "",
"awal_baru": ""
},
{
"id": "ct-display",
"judul": "Nama tampilan buku",
"kategori": "studi",
"tingkat": 1,
"fungsi": "_compute_display_name",
"cerita": "",
"soal": "Tulis <code>_compute_display_name(self)</code> untuk recordset buku (field <code>name</code>, <code>isbn</code>). Isi <code>book.display_name</code> dengan <code>\"[ISBN] Judul\"</code>, atau judul saja bila ISBN kosong (False atau teks kosong).",
"awal": "def _compute_display_name(self):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def _compute_display_name(self):\n    for book in self:\n        book.display_name = f\"[{book.isbn}] {book.name}\" if book.isbn else book.name\n",
"jelas": "Sejak Odoo 17, nama tampilan dihitung dengan _compute_display_name (menggantikan name_get yang lama).",
"kompleksitas": "",
"petunjuk": [
"for book in self, lalu isi book.display_name untuk SETIAP buku.",
"Di Odoo field kosong bernilai False, jadi cukup if book.isbn.",
"Kerangka solusinya:\ndef _compute_display_name(self):\n    for …:\n        …"
],
"tes": [
[
"a = Record(name=\"Belajar Odoo\", isbn=\"978-1\", display_name=None)\nb = Record(name=\"Python Dasar\", isbn=False, display_name=None)\n_compute_display_name(rs(a, b))\nhasil = [a.display_name, b.display_name]",
"['[978-1] Belajar Odoo', 'Python Dasar']"
],
[
"c = Record(name=\"Tanpa ISBN\", isbn=\"\", display_name=None)\n_compute_display_name(rs(c))\nhasil = c.display_name",
"'Tanpa ISBN'"
],
[
"_compute_display_name(rs())\nhasil = \"ok\"",
"'ok'"
]
],
"contoh": 1,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-compute",
"topik": "ct",
"setelah": "compute",
"judul": "Compute denda dan constraint tanggal",
"contoh": {
"judul": "Contoh: menghitung selisih hari",
"penjelasan": "<p>Di Odoo, field Date bernilai objek <code>date</code>. Selisih dua tanggal adalah <code>timedelta</code>; <code>.days</code> memberi jumlah hari. Di latihan ini tanggal ditulis sebagai teks ISO lalu diubah dengan <code>date.fromisoformat</code>.</p>",
"kode": "from datetime import date\n\njatuh_tempo = date.fromisoformat(\"2026-11-20\")\nkembali = date.fromisoformat(\"2026-11-24\")\nterlambat = (kembali - jatuh_tempo).days\nprint(terlambat, max(0, terlambat) * 2000)\nprint((date(2026, 11, 18) - jatuh_tempo).days)   # negatif = lebih awal",
"kunci": "max(0, selisih) mencegah denda negatif. Field compute harus diisi untuk setiap record.",
"keluaran": "4 8000\n-2"
},
"langkah": [
{
"id": "ct-denda",
"judul": "_compute_denda",
"kategori": "studi",
"tingkat": 2,
"fungsi": "_compute_denda",
"cerita": "",
"soal": "Setiap peminjaman punya <code>date_due</code>, <code>date_return</code> (teks ISO, atau False bila belum kembali), dan <code>fee_per_day</code>. Tulis <code>_compute_denda(self)</code> yang mengisi <code>loan.days_late</code> dan <code>loan.fine</code>. Bila belum kembali, hitung terhadap konstanta <code>HARI_INI</code> (sudah tersedia). Keterlambatan tidak pernah negatif.",
"awal": "def _compute_denda(self):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "from datetime import date\n\ndef _compute_denda(self):\n    for loan in self:\n        akhir = date.fromisoformat(loan.date_return or HARI_INI)\n        loan.days_late = max(0, (akhir - date.fromisoformat(loan.date_due)).days)\n        loan.fine = loan.days_late * loan.fee_per_day\n",
"jelas": "Di Odoo sungguhan: @api.depends('date_due', 'date_return', 'fee_per_day'), dan HARI_INI diganti fields.Date.context_today(self). Field yang bergantung pada 'hari ini' sebaiknya tidak store=True karena tidak berubah sendiri tiap hari.",
"kompleksitas": "",
"petunjuk": [
"Tanggal akhir = date_return bila ada, selain itu HARI_INI. Ekspresi a or b memilih b bila a False.",
"days_late = max(0, (akhir - jatuh_tempo).days), lalu fine = days_late × fee_per_day.",
"Kerangka solusinya:\nfrom datetime import date\n\ndef _compute_denda(self):\n    for …:\n        …\n        …\n        …"
],
"tes": [
[
"a = Record(date_due=\"2026-11-20\", date_return=\"2026-11-24\", fee_per_day=2000, days_late=None, fine=None)\nb = Record(date_due=\"2026-11-25\", date_return=\"2026-11-22\", fee_per_day=2000, days_late=None, fine=None)\n_compute_denda(rs(a, b))\nhasil = [(a.days_late, a.fine), (b.days_late, b.fine)]",
"[(4, 8000), (0, 0)]"
],
[
"c = Record(date_due=\"2026-11-14\", date_return=False, fee_per_day=1500, days_late=None, fine=None)\n_compute_denda(rs(c))\nhasil = (c.days_late, c.fine)",
"(10, 15000)"
],
[
"_compute_denda(rs())\nhasil = \"ok\"",
"'ok'"
]
],
"contoh": 1,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n\nHARI_INI = \"2026-11-24\"\n",
"awal_baru": ""
},
{
"id": "ct-constrains",
"judul": "_check_peminjaman (constraint)",
"kategori": "studi",
"tingkat": 2,
"fungsi": "_check_peminjaman",
"cerita": "",
"soal": "Tulis <code>_check_peminjaman(self)</code> untuk recordset peminjaman (<code>date_borrow</code>, <code>date_due</code> teks ISO, <code>book_ids</code> recordset). Lempar <code>ValidationError</code> bila <code>date_due</code> sebelum <code>date_borrow</code>, atau bila jumlah buku lebih dari 3. Peminjaman yang valid tidak boleh menimbulkan error.",
"awal": "def _check_peminjaman(self):\n    for loan in self:\n        pass\n",
"solusi": "def _check_peminjaman(self):\n    for loan in self:\n        if loan.date_due < loan.date_borrow:\n            raise ValidationError(\"Tanggal kembali tidak boleh sebelum tanggal pinjam.\")\n        if len(loan.book_ids) > 3:\n            raise ValidationError(\"Maksimal 3 buku per peminjaman.\")\n",
"jelas": "Di Odoo: @api.constrains('date_borrow', 'date_due', 'book_ids'). Tanggal kembali di hari yang sama tetap valid, dan tepat 3 buku masih boleh: uji selalu nilai batasnya.",
"kompleksitas": "",
"petunjuk": [
"Teks ISO (YYYY-MM-DD) bisa dibandingkan langsung dengan < karena urutan abjadnya sama dengan urutan tanggal.",
"len(loan.book_ids) memberi jumlah buku. raise ValidationError(\"pesan\").",
"Kerangka solusinya:\ndef _check_peminjaman(self):\n    for …:\n        if …:\n            …\n        if …:\n            …"
],
"tes": [
[
"ok = Record(date_borrow=\"2026-11-24\", date_due=\"2026-12-01\", book_ids=rs(Record(), Record()))\n_check_peminjaman(rs(ok))\nhasil = \"valid\"",
"'valid'"
],
[
"x = Record(date_borrow=\"2026-11-24\", date_due=\"2026-11-20\", book_ids=rs(Record()))\ntry:\n    _check_peminjaman(rs(x))\n    hasil = \"tidak error\"\nexcept ValidationError:\n    hasil = \"ValidationError\"",
"'ValidationError'"
],
[
"x = Record(date_borrow=\"2026-11-24\", date_due=\"2026-11-30\", book_ids=rs(Record(), Record(), Record(), Record()))\ntry:\n    _check_peminjaman(rs(x))\n    hasil = \"tidak error\"\nexcept ValidationError:\n    hasil = \"ValidationError\"",
"'ValidationError'"
],
[
"x = Record(date_borrow=\"2026-11-24\", date_due=\"2026-11-24\", book_ids=rs(Record(), Record(), Record()))\n_check_peminjaman(rs(x))\nhasil = \"valid\"",
"'valid'"
]
],
"contoh": 1,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-orm",
"topik": "ct",
"setelah": "orm",
"judul": "Domain dan rantai filtered → sorted → mapped",
"contoh": {
"judul": "Contoh: domain sebagai data",
"penjelasan": "<p>Domain Odoo hanyalah list tuple. Memahami cara mengevaluasinya membuatmu paham apa yang dilakukan <code>search()</code>. Pada recordset, operasi biasanya dirangkai: saring, urutkan, ambil nilai.</p>",
"kode": "orders = [\n    {\"name\": \"S1\", \"state\": \"sale\", \"amount\": 500},\n    {\"name\": \"S2\", \"state\": \"draft\", \"amount\": 900},\n    {\"name\": \"S3\", \"state\": \"sale\", \"amount\": 1200},\n]\ndomain = [(\"state\", \"=\", \"sale\"), (\"amount\", \">\", 600)]\ncocok = [o for o in orders\n         if all({\"=\": o[f] == v, \">\": o[f] > v}[op] for f, op, v in domain)]\nprint([o[\"name\"] for o in cocok])\n\n# Rantai ala recordset Odoo:\nbesar = sorted((o for o in orders if o[\"state\"] == \"sale\"), key=lambda o: -o[\"amount\"])\nprint([o[\"name\"] for o in besar])",
"kunci": "search(domain) = saring dengan semua syarat (AND). filtered → sorted → mapped adalah rantai paling umum di kode Odoo.",
"keluaran": "['S3']\n['S3', 'S1']"
},
"langkah": [
{
"id": "odoo-domain",
"judul": "Saring record dengan domain",
"kategori": "odoo",
"tingkat": 2,
"fungsi": "saring",
"cerita": "Odoo mencari record memakai <b>domain</b>: list berisi tuple <code>(field, operator, nilai)</code>. Semua tuple digabung dengan AND.",
"soal": "Buat <code>saring(records, domain)</code>. <code>records</code> adalah list dict. Dukung operator <code>= != &gt; &gt;= &lt; &lt;= in not in</code>. Kembalikan list record yang memenuhi <b>semua</b> syarat, urutan tetap. Domain kosong mengembalikan semua record.",
"awal": "def saring(records, domain):\n    # records: list of dict, domain: list of (field, operator, nilai)\n    pass\n",
"solusi": "import operator\n\nOPERATOR = {\n    \"=\": operator.eq, \"!=\": operator.ne, \">\": operator.gt, \">=\": operator.ge,\n    \"<\": operator.lt, \"<=\": operator.le,\n    \"in\": lambda a, b: a in b, \"not in\": lambda a, b: a not in b,\n}\n\ndef saring(records, domain):\n    return [r for r in records\n            if all(OPERATOR[op](r.get(field), nilai) for field, op, nilai in domain)]\n",
"jelas": "Inilah inti self.env['sale.order'].search([...]). Dict operator → fungsi menghindari rantai if-elif panjang dan mudah ditambah. all() pada domain kosong bernilai True, jadi semua record lolos, sama seperti search([]) di Odoo.",
"kompleksitas": "O(n · jumlah syarat)",
"petunjuk": [
"Buat dict yang memetakan teks operator ke fungsi pembanding, misalnya modul operator: operator.eq, operator.gt, ... Untuk in dan not in pakai lambda.",
"Record lolos jika all(...) syarat benar. List comprehension [r for r in records if all(...)] membuat kodenya ringkas.",
"Kerangka solusinya:\nimport operator\n\n…\n    …\n    …\n    …\n…\n\ndef saring(records, domain):\n    return …\n            if …"
],
"tes": [
[
"saring([{\"name\": \"SO1\", \"state\": \"sale\", \"amount\": 500}, {\"name\": \"SO2\", \"state\": \"draft\", \"amount\": 900}, {\"name\": \"SO3\", \"state\": \"sale\", \"amount\": 1200}], [(\"state\", \"=\", \"sale\"), (\"amount\", \">\", 600)])",
"[{'name': 'SO3', 'state': 'sale', 'amount': 1200}]"
],
[
"saring([{\"name\": \"SO1\", \"state\": \"sale\"}, {\"name\": \"SO2\", \"state\": \"cancel\"}], [])",
"[{'name': 'SO1', 'state': 'sale'}, {'name': 'SO2', 'state': 'cancel'}]"
],
[
"saring([{\"name\": \"A\", \"state\": \"draft\"}, {\"name\": \"B\", \"state\": \"sent\"}, {\"name\": \"C\", \"state\": \"sale\"}], [(\"state\", \"in\", [\"draft\", \"sent\"])])",
"[{'name': 'A', 'state': 'draft'}, {'name': 'B', 'state': 'sent'}]"
],
[
"saring([{\"name\": \"A\", \"state\": \"draft\"}, {\"name\": \"B\", \"state\": \"sent\"}, {\"name\": \"C\", \"state\": \"sale\"}], [(\"state\", \"not in\", [\"draft\", \"sent\"])])",
"[{'name': 'C', 'state': 'sale'}]"
],
[
"saring([{\"name\": \"A\", \"qty\": 0}, {\"name\": \"B\", \"qty\": 5}], [(\"qty\", \"<=\", 0)])",
"[{'name': 'A', 'qty': 0}]"
],
[
"saring([{\"name\": \"A\", \"qty\": 3}], [(\"qty\", \"!=\", 3)])",
"[]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "ct-rantai",
"judul": "Peminjam terlambat terlama",
"kategori": "studi",
"tingkat": 2,
"fungsi": "terlambat_terlama",
"cerita": "",
"soal": "Tulis <code>terlambat_terlama(loans, n)</code>. <code>loans</code> adalah recordset dengan field <code>state</code>, <code>days_late</code>, dan <code>member_id</code> (record dengan field <code>name</code>). Ambil peminjaman berstatus <code>\"borrowed\"</code> yang <code>days_late</code> &gt; 0, urutkan dari keterlambatan terbesar, lalu kembalikan list nama anggota (unik, urutan pertama kali muncul) maksimal n nama.",
"awal": "def terlambat_terlama(loans, n):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def terlambat_terlama(loans, n):\n    telat = loans.filtered(lambda l: l.state == \"borrowed\" and l.days_late > 0)\n    nama = telat.sorted(\"days_late\", reverse=True).mapped(\"member_id.name\")\n    unik = []\n    for x in nama:\n        if x not in unik:\n            unik.append(x)\n    return unik[:n]\n",
"jelas": "Rantai filtered → sorted → mapped ditulis hampir di setiap modul Odoo. Di Odoo sungguhan mapped(\"member_id\") (record) otomatis unik, sedangkan mapped(\"member_id.name\") (teks) bisa kembar.",
"kompleksitas": "",
"petunjuk": [
"Rangkai: loans.filtered(lambda l: ...).sorted(\"days_late\", reverse=True).mapped(\"member_id.name\").",
"mapped pada field teks bisa berisi nama kembar; buang yang kembar dengan menjaga urutan, lalu potong [:n].",
"Kerangka solusinya:\ndef terlambat_terlama(loans, n):\n    …\n    …\n    …\n    for …:\n        if …:\n            …\n    return …"
],
"tes": [
[
"ani, budi, cita = Record(name=\"Ani\"), Record(name=\"Budi\"), Record(name=\"Cita\")\nL = rs(Record(state=\"borrowed\", days_late=3, member_id=ani), Record(state=\"returned\", days_late=9, member_id=budi), Record(state=\"borrowed\", days_late=7, member_id=cita), Record(state=\"borrowed\", days_late=1, member_id=ani), Record(state=\"borrowed\", days_late=0, member_id=budi))\nhasil = terlambat_terlama(L, 5)",
"['Cita', 'Ani']"
],
[
"a = Record(name=\"A\")\nhasil = terlambat_terlama(rs(Record(state=\"borrowed\", days_late=2, member_id=a)), 0)",
"[]"
],
[
"hasil = terlambat_terlama(rs(), 3)",
"[]"
]
],
"contoh": 1,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n",
"awal_baru": ""
},
{
"id": "odoo-domain-polish",
"judul": "Domain dengan '|' dan '!'",
"kategori": "odoo",
"tingkat": 3,
"fungsi": "cocok",
"cerita": "Domain Odoo memakai notasi prefiks (Polish): <code>'|'</code> = OR dan <code>'&amp;'</code> = AND untuk <b>dua</b> elemen berikutnya, <code>'!'</code> = NOT untuk <b>satu</b> elemen berikutnya. Tuple tanpa operator di depannya digabung dengan AND.",
"soal": "Buat <code>cocok(record, domain)</code> yang mengembalikan True/False. Operator tuple cukup <code>= != &gt; &lt;</code>. Contoh: <code>['|', ('state', '=', 'draft'), ('state', '=', 'sent')]</code> berarti state draft ATAU sent.",
"awal": "def cocok(record, domain):\n    # domain contoh: ['|', ('state', '=', 'draft'), ('state', '=', 'sent')]\n    pass\n",
"solusi": "def cocok(record, domain):\n    banding = {\"=\": lambda a, b: a == b, \"!=\": lambda a, b: a != b,\n               \">\": lambda a, b: a > b, \"<\": lambda a, b: a < b}\n    tumpukan = []\n    for item in reversed(domain):\n        if item == \"|\":\n            tumpukan.append(tumpukan.pop() or tumpukan.pop())\n        elif item == \"&\":\n            a, b = tumpukan.pop(), tumpukan.pop()\n            tumpukan.append(a and b)\n        elif item == \"!\":\n            tumpukan.append(not tumpukan.pop())\n        else:\n            field, op, nilai = item\n            tumpukan.append(banding[op](record.get(field), nilai))\n    return all(tumpukan)\n",
"jelas": "Domain Odoo memang ditulis dalam Polish notation, dan pemahaman '|' sering ditanyakan: ['|', A, B, C] artinya (A OR B) AND C. Evaluasi dari belakang dengan stack adalah cara standar menghitung ekspresi prefiks.",
"kompleksitas": "O(panjang domain)",
"petunjuk": [
"Notasi prefiks paling mudah dievaluasi dari BELAKANG ke depan dengan stack: tuple → dorong True/False; operator → ambil operand dari stack, dorong hasilnya.",
"'|' dan '&' mengambil 2 nilai, '!' mengambil 1. Di akhir, sisa nilai di stack digabung dengan AND (all), karena tuple tanpa operator = AND implisit.",
"Kerangka solusinya:\ndef cocok(record, domain):\n    …\n               …\n    …\n    for …:\n        if …:\n            …\n        elif …:\n            …\n            …\n        elif …:\n            …\n        else:\n            …\n            …\n    return …"
],
"tes": [
[
"cocok({\"state\": \"sent\"}, [\"|\", (\"state\", \"=\", \"draft\"), (\"state\", \"=\", \"sent\")])",
"True"
],
[
"cocok({\"state\": \"sale\"}, [\"|\", (\"state\", \"=\", \"draft\"), (\"state\", \"=\", \"sent\")])",
"False"
],
[
"cocok({\"state\": \"sale\", \"amount\": 50}, [(\"state\", \"=\", \"sale\"), (\"amount\", \">\", 100)])",
"False"
],
[
"cocok({\"state\": \"cancel\"}, [\"!\", (\"state\", \"=\", \"cancel\")])",
"False"
],
[
"cocok({\"a\": 1, \"b\": 2, \"c\": 3}, [\"|\", (\"a\", \"=\", 9), \"&\", (\"b\", \"=\", 2), (\"c\", \"=\", 3)])",
"True"
],
[
"cocok({\"a\": 1, \"b\": 2, \"c\": 3}, [\"&\", \"|\", (\"a\", \"=\", 9), (\"b\", \"=\", 9), (\"c\", \"=\", 3)])",
"False"
],
[
"cocok({\"x\": 5}, [])",
"True"
],
[
"cocok({\"a\": 1, \"b\": 2}, [\"|\", \"!\", (\"a\", \"=\", 1), (\"b\", \"<\", 3)])",
"True"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-inherit",
"topik": "ct",
"setelah": "inherit",
"judul": "Override action_confirm dengan super()",
"contoh": {
"judul": "Contoh: menambah langkah tanpa menyalin kode induk",
"penjelasan": "<p>Modul approval tidak menulis ulang konfirmasi Odoo. Ia hanya menambahkan pengecekan, lalu menyerahkan sisanya ke versi induk dengan <code>super()</code>. Dengan begitu langkah bawaan (dan modul lain yang juga meng-override) tetap berjalan.</p>",
"kode": "class Induk:\n    def action_confirm(self):\n        print(\"induk: buat delivery & ubah state\")\n        return True\n\nclass Approval(Induk):\n    def action_confirm(self):\n        print(\"approval: cek limit dulu\")\n        return super().action_confirm()\n\nprint(Approval().action_confirm())",
"kunci": "Override = cek tambahan, lalu return super().method(). Jangan lupa mengembalikan hasilnya.",
"keluaran": "approval: cek limit dulu\ninduk: buat delivery & ubah state\nTrue"
},
"langkah": [
{
"id": "ct-override",
"judul": "Approval di atas limit",
"kategori": "studi",
"tingkat": 2,
"fungsi": "SaleOrder",
"cerita": "",
"soal": "Class <code>SaleOrderBase</code> (tiruan sale.order) sudah tersedia. Buat <code>SaleOrder(SaleOrderBase)</code> dengan atribut class <code>LIMIT = 10_000_000</code>. Override <code>action_confirm()</code>: order <b>draft/sent</b> dengan <code>amount_total</code> &gt; LIMIT berubah menjadi <code>\"to_approve\"</code>, menambah <code>\"menunggu approval\"</code> ke <code>self.log</code>, dan mengembalikan True. Selain itu jalankan versi induk. Tambahkan <code>action_approve(oleh_approver)</code>: jika bukan approver lempar <code>UserError</code>; jika state bukan <code>\"to_approve\"</code> lempar <code>UserError</code>; selain itu ubah state ke <code>\"draft\"</code> lalu panggil <b>versi induk</b> action_confirm.",
"awal": "class SaleOrder(SaleOrderBase):\n    LIMIT = 10_000_000\n\n    def action_confirm(self):\n        pass\n\n    def action_approve(self, oleh_approver):\n        pass\n",
"solusi": "class SaleOrder(SaleOrderBase):\n    LIMIT = 10_000_000\n\n    def action_confirm(self):\n        if self.state in (\"draft\", \"sent\") and self.amount_total > self.LIMIT:\n            self.state = \"to_approve\"\n            self.log.append(\"menunggu approval\")\n            return True\n        return super().action_confirm()\n\n    def action_approve(self, oleh_approver):\n        if not oleh_approver:\n            raise UserError(\"Hanya Amount Approver yang boleh menyetujui.\")\n        if self.state != \"to_approve\":\n            raise UserError(\"Order tidak sedang menunggu approval.\")\n        self.state = \"draft\"\n        return super().action_confirm()\n",
"jelas": "Tes 6 memastikan order yang sudah 'sale' tetap ditolak oleh logika induk, bukan diam-diam masuk approval. Inilah rancangan modul sale_amount_approval di portofoliomu.",
"kompleksitas": "",
"petunjuk": [
"action_confirm: if syarat limit → ubah state, catat log, return True; else return super().action_confirm().",
"action_approve tidak boleh memanggil self.action_confirm() (versi anak) karena order akan kembali ke to_approve. Panggil super().action_confirm() setelah state diubah ke draft.",
"Kerangka solusinya:\nclass SaleOrder(SaleOrderBase):\n    …\n\n    def action_confirm(self):\n        if …:\n            …\n            …\n            return …\n        return …\n\n    def action_approve(self, oleh_approver):\n        if …:\n            …\n        if …:\n            …\n        …\n        return …"
],
"tes": [
[
"o = SaleOrder(\"S1\", 5_000_000)\no.action_confirm()\nhasil = (o.state, o.log)",
"('sale', ['confirmed'])"
],
[
"o = SaleOrder(\"S2\", 25_000_000)\nr = o.action_confirm()\nhasil = (r, o.state, o.log)",
"(True, 'to_approve', ['menunggu approval'])"
],
[
"o = SaleOrder(\"S3\", 25_000_000)\no.action_confirm()\ntry:\n    o.action_approve(False)\n    hasil = \"tidak error\"\nexcept UserError:\n    hasil = (\"UserError\", o.state)",
"('UserError', 'to_approve')"
],
[
"o = SaleOrder(\"S4\", 25_000_000)\no.action_confirm()\no.action_approve(True)\nhasil = (o.state, o.log)",
"('sale', ['menunggu approval', 'confirmed'])"
],
[
"o = SaleOrder(\"S5\", 10_000_000)\no.action_confirm()\nhasil = o.state",
"'sale'"
],
[
"o = SaleOrder(\"S6\", 50_000_000, state=\"sale\")\ntry:\n    o.action_confirm()\n    hasil = \"tidak error\"\nexcept UserError:\n    hasil = \"UserError\"",
"'UserError'"
]
],
"contoh": 2,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n\nclass SaleOrderBase:\n    \"\"\"Tiruan sale.order bawaan Odoo (jangan diubah).\"\"\"\n    def __init__(self, name, amount_total, state=\"draft\"):\n        self.name = name\n        self.amount_total = amount_total\n        self.state = state\n        self.log = []\n\n    def action_confirm(self):\n        if self.state not in (\"draft\", \"sent\"):\n            raise UserError(\"Hanya quotation yang bisa dikonfirmasi.\")\n        self.state = \"sale\"\n        self.log.append(\"confirmed\")\n        return True\n",
"awal_baru": ""
},
{
"id": "oop-warisan",
"judul": "Inheritance & super()",
"kategori": "oop",
"tingkat": 2,
"fungsi": "Manajer",
"cerita": "Pewarisan class Python adalah dasar dari <code>_inherit</code> di Odoo: class anak memakai ulang perilaku induk lalu menambahkan sesuatu lewat <code>super()</code>.",
"soal": "Sudah ada class <code>Karyawan</code> (jangan diubah). Buat class <code>Manajer(Karyawan)</code> yang menerima tambahan <code>tim</code> (list nama). Override <code>gaji_bulanan()</code>: gaji induk <b>ditambah</b> tunjangan 500.000 per anggota tim. Override <code>info()</code> agar menambahkan <code>\" | tim: N orang\"</code> di belakang info induk.",
"awal": "class Karyawan:\n    def __init__(self, nama, gaji_pokok):\n        self.nama = nama\n        self.gaji_pokok = gaji_pokok\n\n    def gaji_bulanan(self):\n        return self.gaji_pokok\n\n    def info(self):\n        return f\"{self.nama}: {self.gaji_bulanan()}\"\n\n\nclass Manajer(Karyawan):\n    pass\n",
"solusi": "class Karyawan:\n    def __init__(self, nama, gaji_pokok):\n        self.nama = nama\n        self.gaji_pokok = gaji_pokok\n\n    def gaji_bulanan(self):\n        return self.gaji_pokok\n\n    def info(self):\n        return f\"{self.nama}: {self.gaji_bulanan()}\"\n\n\nclass Manajer(Karyawan):\n    def __init__(self, nama, gaji_pokok, tim):\n        super().__init__(nama, gaji_pokok)\n        self.tim = tim\n\n    def gaji_bulanan(self):\n        return super().gaji_bulanan() + 500000 * len(self.tim)\n\n    def info(self):\n        return super().info() + f\" | tim: {len(self.tim)} orang\"\n",
"jelas": "Perhatikan info(): method induk memanggil self.gaji_bulanan(), dan karena self adalah Manajer, yang terpanggil versi anak (polimorfisme). Di Odoo polanya sama persis: def action_confirm(self): res = super().action_confirm(); ...; return res.",
"kompleksitas": "O(1)",
"petunjuk": [
"Di __init__ anak, panggil super().__init__(nama, gaji_pokok) dulu, lalu simpan self.tim.",
"Di gaji_bulanan anak: return super().gaji_bulanan() + 500000 * len(self.tim). info() induk otomatis memakai gaji_bulanan() versi anak.",
"Kerangka solusinya:\nclass Karyawan:\n    def __init__(self, nama, gaji_pokok):\n        …\n        …\n\n    def gaji_bulanan(self):\n        return …\n\n    def info(self):\n        return …\n\n\nclass Manajer(Karyawan):\n    def __init__(self, nama, gaji_pokok, tim):\n        …\n        …\n\n    def gaji_bulanan(self):\n        return …\n\n    def info(self):\n        return …"
],
"tes": [
[
"Manajer(\"Rina\", 8000000, [\"Ani\", \"Budi\"]).gaji_bulanan()",
"9000000"
],
[
"Manajer(\"Rina\", 8000000, [\"Ani\", \"Budi\"]).info()",
"'Rina: 9000000 | tim: 2 orang'"
],
[
"Manajer(\"Sari\", 7000000, []).info()",
"'Sari: 7000000 | tim: 0 orang'"
],
[
"isinstance(Manajer(\"X\", 1, []), Karyawan)",
"True"
],
[
"Karyawan(\"Tono\", 5000000).info()",
"'Tono: 5000000'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-view",
"topik": "ct",
"setelah": "view",
"judul": "Menulis view XML Odoo 17",
"contoh": {
"judul": "Contoh: struktur record view",
"penjelasan": "<p>View adalah record <code>ir.ui.view</code>. Isinya: <code>name</code>, <code>model</code>, dan <code>arch</code> berisi XML tampilan. Di soal berikut kamu menulis XML-nya di dalam string Python <code>VIEW = \"\"\"...\"\"\"</code>, lalu pemeriksa menyebutkan bagian yang masih kurang satu per satu.</p><p class=\"kecil\">Ingat aturan Odoo 17: tidak ada <code>attrs</code>/<code>states</code>; kondisi ditulis langsung, misalnya <code>invisible=\"state != 'draft'\"</code>.</p>",
"kode": "import xml.etree.ElementTree as ET\n\nVIEW = \"\"\"\n<record id=\"library_tag_view_tree\" model=\"ir.ui.view\">\n    <field name=\"name\">library.tag.tree</field>\n    <field name=\"model\">library.tag</field>\n    <field name=\"arch\" type=\"xml\">\n        <tree>\n            <field name=\"name\"/>\n            <field name=\"color\"/>\n        </tree>\n    </field>\n</record>\n\"\"\"\nr = ET.fromstring(VIEW.strip())\nprint(r.tag, r.get(\"model\"))\nprint([f.get(\"name\") for f in r.iter(\"field\")])",
"kunci": "record → field name/model/arch → form → header (tombol + statusbar) + sheet (field-field).",
"keluaran": "record ir.ui.view\n['name', 'model', 'arch', 'name', 'color']"
},
"langkah": [
{
"id": "ct-view-form",
"judul": "Form view library.book",
"kategori": "studi",
"tingkat": 2,
"fungsi": "VIEW",
"cerita": "",
"soal": "Isi variabel <code>VIEW</code> dengan record form view untuk model <code>library.book</code>: di dalam <code>&lt;form&gt;</code> ada <code>&lt;header&gt;</code> berisi tombol <code>action_make_available</code> (type object, berlabel, hanya tampil saat state draft) dan field <code>state</code> ber-widget statusbar; lalu <code>&lt;sheet&gt;</code> berisi field <code>name</code>, <code>author_id</code>, <code>isbn</code>. Tes memanggil <code>cek_form(VIEW)</code> yang harus mengembalikan list kosong.",
"awal": "VIEW = \"\"\"\n<record id=\"library_book_view_form\" model=\"ir.ui.view\">\n    <field name=\"name\">library.book.form</field>\n    <field name=\"model\">library.book</field>\n    <field name=\"arch\" type=\"xml\">\n        <form>\n            <!-- tulis header dan sheet di sini -->\n        </form>\n    </field>\n</record>\n\"\"\"\n",
"solusi": "VIEW = \"\"\"\n<record id=\"library_book_view_form\" model=\"ir.ui.view\">\n    <field name=\"name\">library.book.form</field>\n    <field name=\"model\">library.book</field>\n    <field name=\"arch\" type=\"xml\">\n        <form>\n            <header>\n                <button name=\"action_make_available\" type=\"object\" string=\"Tersedia\"\n                        class=\"oe_highlight\" invisible=\"state != 'draft'\"/>\n                <field name=\"state\" widget=\"statusbar\"/>\n            </header>\n            <sheet>\n                <group>\n                    <field name=\"name\"/>\n                    <field name=\"author_id\"/>\n                    <field name=\"isbn\"/>\n                </group>\n            </sheet>\n        </form>\n    </field>\n</record>\n\"\"\"\n",
"jelas": "Pesan pemeriksa ini mirip yang akan kamu temui saat Odoo memuat XML: tag tidak tertutup, attrs di Odoo 17, field di tempat yang salah.",
"kompleksitas": "",
"petunjuk": [
"Mulai dari kerangka contoh terpandu, ganti <tree> dengan <form>, lalu tambahkan <header> dan <sheet>.",
"Jalankan (▶) untuk melihat daftar masalah dari cek_form; perbaiki satu per satu.",
"Kerangka solusinya:\n…\n…\n    …\n    …\n    …\n        …\n            …\n                …\n                        class=\"oe_highlight\" invisible=\"state != 'draft'\"/>\n                …\n            …\n            …\n                …\n                    …\n                    …\n                    …\n                …\n            …\n        …\n    …\n…\n…"
],
"tes": [
[
"cek_form(VIEW)",
"[]"
],
[
"len(cek_form(VIEW))",
"0"
],
[
"VIEW.strip().startswith('<record')",
"True"
]
],
"contoh": 1,
"pre": "\nimport csv, io, re\nimport xml.etree.ElementTree as ET\n\ndef _rapat(s):\n    return re.sub(r\"\\s+\", \"\", s or \"\").replace('\"', \"'\")\n\ndef _parse(xml):\n    try:\n        return ET.fromstring(xml.strip()), None\n    except ET.ParseError as e:\n        return None, \"XML tidak valid (\" + str(e) + \"). Cek tag yang belum ditutup, tanda kutip, dan < yang harus ditulis &lt;.\"\n\ndef _record(r, model, m):\n    if r.tag != \"record\":\n        m.append(\"Elemen terluar harus <record>, bukan <\" + r.tag + \">.\")\n    if r.get(\"model\") != model:\n        m.append(\"Atribut model pada <record> harus '\" + model + \"'.\")\n    if not r.get(\"id\"):\n        m.append(\"<record> butuh atribut id (ID XML yang unik).\")\n    return {f.get(\"name\"): f for f in r.findall(\"field\")}\n\ndef cek_form(xml):\n    \"\"\"Pemeriksa studi kasus: form view library.book.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.ui.view\", m)\n    if \"model\" not in f or (f[\"model\"].text or \"\").strip() != \"library.book\":\n        m.append('Tambahkan <field name=\"model\">library.book</field>.')\n    if re.search(r\"\\battrs\\s*=|\\bstates\\s*=\", xml):\n        m.append(\"attrs dan states sudah dihapus di Odoo 17. Tulis kondisinya langsung, misalnya invisible=\\\"state != 'draft'\\\".\")\n    arch = f.get(\"arch\")\n    if arch is None or arch.get(\"type\") != \"xml\":\n        m.append('Tambahkan <field name=\"arch\" type=\"xml\"> yang berisi <form>.')\n        return m\n    form = arch.find(\"form\")\n    if form is None:\n        m.append(\"Di dalam arch harus ada <form>.\")\n        return m\n    header = form.find(\"header\")\n    if header is None:\n        m.append(\"Tombol dan statusbar ditaruh di dalam <header> (anak langsung <form>).\")\n    else:\n        tombol = [b for b in header.findall(\"button\") if b.get(\"name\") == \"action_make_available\"]\n        if not tombol:\n            m.append('Di <header> belum ada <button name=\"action_make_available\" .../>.')\n        else:\n            b = tombol[0]\n            if b.get(\"type\") != \"object\":\n                m.append('Tombol yang memanggil method Python butuh type=\"object\".')\n            if _rapat(b.get(\"invisible\")) != \"state!='draft'\":\n                m.append(\"Tombol harus tersembunyi kecuali status draft: invisible=\\\"state != 'draft'\\\".\")\n            if not b.get(\"string\"):\n                m.append('Beri tombol label lewat atribut string, misalnya string=\"Tersedia\".')\n        st = [x for x in header.findall(\"field\") if x.get(\"name\") == \"state\"]\n        if not st or st[0].get(\"widget\") != \"statusbar\":\n            m.append('Tambahkan <field name=\"state\" widget=\"statusbar\"/> di dalam <header>.')\n    sheet = form.find(\"sheet\")\n    if sheet is None:\n        m.append(\"Isi form dibungkus <sheet> (anak langsung <form>).\")\n    else:\n        ada = {x.get(\"name\") for x in sheet.iter(\"field\")}\n        for wajib in (\"name\", \"author_id\", \"isbn\"):\n            if wajib not in ada:\n                m.append(\"Field \" + wajib + \" belum ada di dalam <sheet>.\")\n    return m\n\ndef cek_inherit(xml):\n    \"\"\"Pemeriksa studi kasus: mewarisi form sale.order.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.ui.view\", m)\n    if \"model\" not in f or (f[\"model\"].text or \"\").strip() != \"sale.order\":\n        m.append('Tambahkan <field name=\"model\">sale.order</field>.')\n    if \"inherit_id\" not in f or f[\"inherit_id\"].get(\"ref\") != \"sale.view_order_form\":\n        m.append('View turunan butuh <field name=\"inherit_id\" ref=\"sale.view_order_form\"/>.')\n    arch = f.get(\"arch\")\n    if arch is None or arch.get(\"type\") != \"xml\":\n        m.append('Tambahkan <field name=\"arch\" type=\"xml\">.')\n        return m\n    xp = arch.findall(\"xpath\")\n    if not xp:\n        m.append(\"Di dalam arch belum ada <xpath>.\")\n        return m\n    sasaran = [x for x in xp if _rapat(x.get(\"expr\")) == \"//field[@name='partner_id']\"]\n    if not sasaran:\n        m.append(\"expr xpath harus menunjuk field partner_id: expr=\\\"//field[@name='partner_id']\\\".\")\n        return m\n    x = sasaran[0]\n    if x.get(\"position\") != \"after\":\n        m.append('Field baru harus muncul SETELAH partner_id: position=\"after\".')\n    if not any(c.tag == \"field\" and c.get(\"name\") == \"x_approval_note\" for c in x):\n        m.append('Di dalam xpath belum ada <field name=\"x_approval_note\"/>.')\n    tombol = [x for x in xp if _rapat(x.get(\"expr\")) in (\"//header\", \"/form/header\", \"//form/header\")]\n    if not tombol or tombol[0].get(\"position\") != \"inside\":\n        m.append('Tambahkan xpath kedua: expr=\"//header\" position=\"inside\" untuk tombol approve.')\n    else:\n        b = [c for c in tombol[0] if c.tag == \"button\" and c.get(\"name\") == \"action_amount_approve\"]\n        if not b:\n            m.append('Di xpath header belum ada <button name=\"action_amount_approve\" .../>.')\n        else:\n            if b[0].get(\"type\") != \"object\":\n                m.append('Tombol approve butuh type=\"object\".')\n            if _rapat(b[0].get(\"invisible\")) != \"state!='to_approve'\":\n                m.append(\"Tombol approve hanya tampil di status to_approve: invisible=\\\"state != 'to_approve'\\\".\")\n            if b[0].get(\"groups\") != \"sale_amount_approval.group_so_amount_approver\":\n                m.append('Batasi tombol untuk grup approver: groups=\"sale_amount_approval.group_so_amount_approver\".')\n    return m\n\ndef cek_acl(teks):\n    \"\"\"Pemeriksa studi kasus: ir.model.access.csv untuk library.book.\"\"\"\n    baris = [b for b in csv.reader(io.StringIO(teks.strip())) if b]\n    if not baris:\n        return [\"File masih kosong.\"]\n    m = []\n    kepala = [\"id\", \"name\", \"model_id:id\", \"group_id:id\", \"perm_read\", \"perm_write\", \"perm_create\", \"perm_unlink\"]\n    if [k.strip() for k in baris[0]] != kepala:\n        m.append(\"Baris pertama (header) harus persis: \" + \",\".join(kepala))\n        return m\n    data = {}\n    for i, b in enumerate(baris[1:], 2):\n        if len(b) != 8:\n            m.append(\"Baris \" + str(i) + \" harus punya 8 kolom, sekarang \" + str(len(b)) + \".\")\n            continue\n        b = [x.strip() for x in b]\n        if b[2] != \"model_library_book\":\n            m.append(\"Baris \" + str(i) + \": model_id:id untuk library.book adalah model_library_book.\")\n        grup = b[3].split(\".\")[-1]\n        data[grup] = b[4:]\n    if \"group_library_user\" not in data:\n        m.append(\"Belum ada baris untuk grup group_library_user.\")\n    elif data[\"group_library_user\"] != [\"1\", \"0\", \"0\", \"0\"]:\n        m.append(\"Library User hanya boleh membaca: perm 1,0,0,0.\")\n    if \"group_library_manager\" not in data:\n        m.append(\"Belum ada baris untuk grup group_library_manager.\")\n    elif data[\"group_library_manager\"] != [\"1\", \"1\", \"1\", \"1\"]:\n        m.append(\"Library Manager boleh semuanya: perm 1,1,1,1.\")\n    ids = [b[0] for b in baris[1:] if b]\n    if len(set(ids)) != len(ids):\n        m.append(\"Kolom id setiap baris harus unik.\")\n    return m\n\ndef cek_rule(xml):\n    \"\"\"Pemeriksa studi kasus: record rule peminjaman milik sendiri.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.rule\", m)\n    if \"name\" not in f or not (f[\"name\"].text or \"\").strip():\n        m.append('Beri nama aturan: <field name=\"name\">...</field>.')\n    if \"model_id\" not in f or f[\"model_id\"].get(\"ref\") != \"model_library_loan\":\n        m.append('Model aturan: <field name=\"model_id\" ref=\"model_library_loan\"/>.')\n    if \"domain_force\" not in f or _rapat(f[\"domain_force\"].text) != \"[('user_id','=',user.id)]\":\n        m.append(\"domain_force harus membatasi ke milik sendiri: [('user_id', '=', user.id)].\")\n    g = f.get(\"groups\")\n    if g is None or \"ref('group_library_user')\" not in _rapat(g.get(\"eval\")):\n        m.append(\"Berlakukan untuk grup user: <field name=\\\"groups\\\" eval=\\\"[(4, ref('group_library_user'))]\\\"/>.\")\n    return m\n",
"awal_baru": ""
},
{
"id": "ct-view-inherit",
"judul": "Mewarisi form sale.order",
"kategori": "studi",
"tingkat": 3,
"fungsi": "VIEW",
"cerita": "",
"soal": "Isi <code>VIEW</code> dengan view turunan untuk <code>sale.order</code> yang mewarisi <code>sale.view_order_form</code>. Ada dua xpath: (1) menambahkan field <code>x_approval_note</code> <b>setelah</b> field <code>partner_id</code>; (2) menambahkan tombol <code>action_amount_approve</code> (type object) <b>di dalam</b> <code>//header</code>, hanya tampil saat state <code>to_approve</code>, dan hanya untuk grup <code>sale_amount_approval.group_so_amount_approver</code>. Tes memanggil <code>cek_inherit(VIEW)</code>.",
"awal": "VIEW = \"\"\"\n<record id=\"view_order_form_amount_approval\" model=\"ir.ui.view\">\n    <field name=\"name\">sale.order.form.amount.approval</field>\n    <field name=\"model\">sale.order</field>\n    <field name=\"arch\" type=\"xml\">\n    </field>\n</record>\n\"\"\"\n",
"solusi": "VIEW = \"\"\"\n<record id=\"view_order_form_amount_approval\" model=\"ir.ui.view\">\n    <field name=\"name\">sale.order.form.amount.approval</field>\n    <field name=\"model\">sale.order</field>\n    <field name=\"inherit_id\" ref=\"sale.view_order_form\"/>\n    <field name=\"arch\" type=\"xml\">\n        <xpath expr=\"//field[@name='partner_id']\" position=\"after\">\n            <field name=\"x_approval_note\"/>\n        </xpath>\n        <xpath expr=\"//header\" position=\"inside\">\n            <button name=\"action_amount_approve\" type=\"object\" string=\"Approve\"\n                    class=\"oe_highlight\" invisible=\"state != 'to_approve'\"\n                    groups=\"sale_amount_approval.group_so_amount_approver\"/>\n        </xpath>\n    </field>\n</record>\n\"\"\"\n",
"jelas": "Inilah persis view di modul sale_amount_approval-mu. Atribut groups di tombol hanya menyembunyikan tombol; pengecekan grup di method Python tetap wajib.",
"kompleksitas": "",
"petunjuk": [
"Struktur: record ir.ui.view → field model, field inherit_id ref=\"sale.view_order_form\", field arch berisi dua <xpath>.",
"Xpath pertama: expr=\"//field[@name='partner_id']\" position=\"after\". Xpath kedua: expr=\"//header\" position=\"inside\" dengan atribut groups pada tombol.",
"Kerangka solusinya:\n…\n…\n    …\n    …\n    …\n    …\n        …\n            …\n        …\n        …\n            …\n                    class=\"oe_highlight\" invisible=\"state != 'to_approve'\"\n                    …\n        …\n    …\n…\n…"
],
"tes": [
[
"cek_inherit(VIEW)",
"[]"
],
[
"len(cek_inherit(VIEW))",
"0"
],
[
"'inherit_id' in VIEW",
"True"
]
],
"contoh": 1,
"pre": "\nimport csv, io, re\nimport xml.etree.ElementTree as ET\n\ndef _rapat(s):\n    return re.sub(r\"\\s+\", \"\", s or \"\").replace('\"', \"'\")\n\ndef _parse(xml):\n    try:\n        return ET.fromstring(xml.strip()), None\n    except ET.ParseError as e:\n        return None, \"XML tidak valid (\" + str(e) + \"). Cek tag yang belum ditutup, tanda kutip, dan < yang harus ditulis &lt;.\"\n\ndef _record(r, model, m):\n    if r.tag != \"record\":\n        m.append(\"Elemen terluar harus <record>, bukan <\" + r.tag + \">.\")\n    if r.get(\"model\") != model:\n        m.append(\"Atribut model pada <record> harus '\" + model + \"'.\")\n    if not r.get(\"id\"):\n        m.append(\"<record> butuh atribut id (ID XML yang unik).\")\n    return {f.get(\"name\"): f for f in r.findall(\"field\")}\n\ndef cek_form(xml):\n    \"\"\"Pemeriksa studi kasus: form view library.book.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.ui.view\", m)\n    if \"model\" not in f or (f[\"model\"].text or \"\").strip() != \"library.book\":\n        m.append('Tambahkan <field name=\"model\">library.book</field>.')\n    if re.search(r\"\\battrs\\s*=|\\bstates\\s*=\", xml):\n        m.append(\"attrs dan states sudah dihapus di Odoo 17. Tulis kondisinya langsung, misalnya invisible=\\\"state != 'draft'\\\".\")\n    arch = f.get(\"arch\")\n    if arch is None or arch.get(\"type\") != \"xml\":\n        m.append('Tambahkan <field name=\"arch\" type=\"xml\"> yang berisi <form>.')\n        return m\n    form = arch.find(\"form\")\n    if form is None:\n        m.append(\"Di dalam arch harus ada <form>.\")\n        return m\n    header = form.find(\"header\")\n    if header is None:\n        m.append(\"Tombol dan statusbar ditaruh di dalam <header> (anak langsung <form>).\")\n    else:\n        tombol = [b for b in header.findall(\"button\") if b.get(\"name\") == \"action_make_available\"]\n        if not tombol:\n            m.append('Di <header> belum ada <button name=\"action_make_available\" .../>.')\n        else:\n            b = tombol[0]\n            if b.get(\"type\") != \"object\":\n                m.append('Tombol yang memanggil method Python butuh type=\"object\".')\n            if _rapat(b.get(\"invisible\")) != \"state!='draft'\":\n                m.append(\"Tombol harus tersembunyi kecuali status draft: invisible=\\\"state != 'draft'\\\".\")\n            if not b.get(\"string\"):\n                m.append('Beri tombol label lewat atribut string, misalnya string=\"Tersedia\".')\n        st = [x for x in header.findall(\"field\") if x.get(\"name\") == \"state\"]\n        if not st or st[0].get(\"widget\") != \"statusbar\":\n            m.append('Tambahkan <field name=\"state\" widget=\"statusbar\"/> di dalam <header>.')\n    sheet = form.find(\"sheet\")\n    if sheet is None:\n        m.append(\"Isi form dibungkus <sheet> (anak langsung <form>).\")\n    else:\n        ada = {x.get(\"name\") for x in sheet.iter(\"field\")}\n        for wajib in (\"name\", \"author_id\", \"isbn\"):\n            if wajib not in ada:\n                m.append(\"Field \" + wajib + \" belum ada di dalam <sheet>.\")\n    return m\n\ndef cek_inherit(xml):\n    \"\"\"Pemeriksa studi kasus: mewarisi form sale.order.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.ui.view\", m)\n    if \"model\" not in f or (f[\"model\"].text or \"\").strip() != \"sale.order\":\n        m.append('Tambahkan <field name=\"model\">sale.order</field>.')\n    if \"inherit_id\" not in f or f[\"inherit_id\"].get(\"ref\") != \"sale.view_order_form\":\n        m.append('View turunan butuh <field name=\"inherit_id\" ref=\"sale.view_order_form\"/>.')\n    arch = f.get(\"arch\")\n    if arch is None or arch.get(\"type\") != \"xml\":\n        m.append('Tambahkan <field name=\"arch\" type=\"xml\">.')\n        return m\n    xp = arch.findall(\"xpath\")\n    if not xp:\n        m.append(\"Di dalam arch belum ada <xpath>.\")\n        return m\n    sasaran = [x for x in xp if _rapat(x.get(\"expr\")) == \"//field[@name='partner_id']\"]\n    if not sasaran:\n        m.append(\"expr xpath harus menunjuk field partner_id: expr=\\\"//field[@name='partner_id']\\\".\")\n        return m\n    x = sasaran[0]\n    if x.get(\"position\") != \"after\":\n        m.append('Field baru harus muncul SETELAH partner_id: position=\"after\".')\n    if not any(c.tag == \"field\" and c.get(\"name\") == \"x_approval_note\" for c in x):\n        m.append('Di dalam xpath belum ada <field name=\"x_approval_note\"/>.')\n    tombol = [x for x in xp if _rapat(x.get(\"expr\")) in (\"//header\", \"/form/header\", \"//form/header\")]\n    if not tombol or tombol[0].get(\"position\") != \"inside\":\n        m.append('Tambahkan xpath kedua: expr=\"//header\" position=\"inside\" untuk tombol approve.')\n    else:\n        b = [c for c in tombol[0] if c.tag == \"button\" and c.get(\"name\") == \"action_amount_approve\"]\n        if not b:\n            m.append('Di xpath header belum ada <button name=\"action_amount_approve\" .../>.')\n        else:\n            if b[0].get(\"type\") != \"object\":\n                m.append('Tombol approve butuh type=\"object\".')\n            if _rapat(b[0].get(\"invisible\")) != \"state!='to_approve'\":\n                m.append(\"Tombol approve hanya tampil di status to_approve: invisible=\\\"state != 'to_approve'\\\".\")\n            if b[0].get(\"groups\") != \"sale_amount_approval.group_so_amount_approver\":\n                m.append('Batasi tombol untuk grup approver: groups=\"sale_amount_approval.group_so_amount_approver\".')\n    return m\n\ndef cek_acl(teks):\n    \"\"\"Pemeriksa studi kasus: ir.model.access.csv untuk library.book.\"\"\"\n    baris = [b for b in csv.reader(io.StringIO(teks.strip())) if b]\n    if not baris:\n        return [\"File masih kosong.\"]\n    m = []\n    kepala = [\"id\", \"name\", \"model_id:id\", \"group_id:id\", \"perm_read\", \"perm_write\", \"perm_create\", \"perm_unlink\"]\n    if [k.strip() for k in baris[0]] != kepala:\n        m.append(\"Baris pertama (header) harus persis: \" + \",\".join(kepala))\n        return m\n    data = {}\n    for i, b in enumerate(baris[1:], 2):\n        if len(b) != 8:\n            m.append(\"Baris \" + str(i) + \" harus punya 8 kolom, sekarang \" + str(len(b)) + \".\")\n            continue\n        b = [x.strip() for x in b]\n        if b[2] != \"model_library_book\":\n            m.append(\"Baris \" + str(i) + \": model_id:id untuk library.book adalah model_library_book.\")\n        grup = b[3].split(\".\")[-1]\n        data[grup] = b[4:]\n    if \"group_library_user\" not in data:\n        m.append(\"Belum ada baris untuk grup group_library_user.\")\n    elif data[\"group_library_user\"] != [\"1\", \"0\", \"0\", \"0\"]:\n        m.append(\"Library User hanya boleh membaca: perm 1,0,0,0.\")\n    if \"group_library_manager\" not in data:\n        m.append(\"Belum ada baris untuk grup group_library_manager.\")\n    elif data[\"group_library_manager\"] != [\"1\", \"1\", \"1\", \"1\"]:\n        m.append(\"Library Manager boleh semuanya: perm 1,1,1,1.\")\n    ids = [b[0] for b in baris[1:] if b]\n    if len(set(ids)) != len(ids):\n        m.append(\"Kolom id setiap baris harus unik.\")\n    return m\n\ndef cek_rule(xml):\n    \"\"\"Pemeriksa studi kasus: record rule peminjaman milik sendiri.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.rule\", m)\n    if \"name\" not in f or not (f[\"name\"].text or \"\").strip():\n        m.append('Beri nama aturan: <field name=\"name\">...</field>.')\n    if \"model_id\" not in f or f[\"model_id\"].get(\"ref\") != \"model_library_loan\":\n        m.append('Model aturan: <field name=\"model_id\" ref=\"model_library_loan\"/>.')\n    if \"domain_force\" not in f or _rapat(f[\"domain_force\"].text) != \"[('user_id','=',user.id)]\":\n        m.append(\"domain_force harus membatasi ke milik sendiri: [('user_id', '=', user.id)].\")\n    g = f.get(\"groups\")\n    if g is None or \"ref('group_library_user')\" not in _rapat(g.get(\"eval\")):\n        m.append(\"Berlakukan untuk grup user: <field name=\\\"groups\\\" eval=\\\"[(4, ref('group_library_user'))]\\\"/>.\")\n    return m\n",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "ct-security",
"topik": "ct",
"setelah": "security",
"judul": "Hak akses: ACL dan record rule",
"contoh": {
"judul": "Contoh: membaca file ACL dengan csv",
"penjelasan": "<p>File <code>ir.model.access.csv</code> adalah CSV biasa: satu baris per (model, grup). Empat kolom terakhir adalah izin baca, tulis, buat, hapus (1 = boleh, 0 = tidak).</p>",
"kode": "import csv, io\n\nACL = \"\"\"id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink\naccess_library_tag_user,library.tag user,model_library_tag,base.group_user,1,0,0,0\"\"\"\nfor b in csv.DictReader(io.StringIO(ACL)):\n    izin = [k[5:] for k in (\"perm_read\", \"perm_write\", \"perm_create\", \"perm_unlink\") if b[k] == \"1\"]\n    print(b[\"model_id:id\"], b[\"group_id:id\"], izin)",
"kunci": "model_id:id = model_ + nama model dengan titik diganti garis bawah. Grup Manager meng-imply grup User.",
"keluaran": "model_library_tag base.group_user ['read']"
},
"langkah": [
{
"id": "ct-acl",
"judul": "ACL library.book",
"kategori": "studi",
"tingkat": 2,
"fungsi": "ACL",
"cerita": "",
"soal": "Isi <code>ACL</code> (teks CSV) dengan header standar dan dua baris untuk model <code>library.book</code>: grup <code>group_library_user</code> hanya boleh membaca, grup <code>group_library_manager</code> boleh semuanya. Tes memanggil <code>cek_acl(ACL)</code>.",
"awal": "ACL = \"\"\"id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink\n\"\"\"\n",
"solusi": "ACL = \"\"\"id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink\naccess_library_book_user,library.book user,model_library_book,group_library_user,1,0,0,0\naccess_library_book_manager,library.book manager,model_library_book,group_library_manager,1,1,1,1\"\"\"\n",
"jelas": "Model baru tanpa baris ACL tidak bisa dibuka pengguna biasa, dan Odoo menulis peringatan di log. Ini kesalahan nomor satu pada modul pertama.",
"kompleksitas": "",
"petunjuk": [
"Salin header dari contoh terpandu, lalu tulis dua baris data.",
"id baris harus unik, model_id:id = model_library_book, izin user 1,0,0,0 dan manager 1,1,1,1.",
"Kerangka solusinya:\n…\n…\n…"
],
"tes": [
[
"cek_acl(ACL)",
"[]"
],
[
"len(cek_acl(ACL))",
"0"
],
[
"ACL.strip().splitlines()[0].startswith('id,name')",
"True"
]
],
"contoh": 1,
"pre": "\nimport csv, io, re\nimport xml.etree.ElementTree as ET\n\ndef _rapat(s):\n    return re.sub(r\"\\s+\", \"\", s or \"\").replace('\"', \"'\")\n\ndef _parse(xml):\n    try:\n        return ET.fromstring(xml.strip()), None\n    except ET.ParseError as e:\n        return None, \"XML tidak valid (\" + str(e) + \"). Cek tag yang belum ditutup, tanda kutip, dan < yang harus ditulis &lt;.\"\n\ndef _record(r, model, m):\n    if r.tag != \"record\":\n        m.append(\"Elemen terluar harus <record>, bukan <\" + r.tag + \">.\")\n    if r.get(\"model\") != model:\n        m.append(\"Atribut model pada <record> harus '\" + model + \"'.\")\n    if not r.get(\"id\"):\n        m.append(\"<record> butuh atribut id (ID XML yang unik).\")\n    return {f.get(\"name\"): f for f in r.findall(\"field\")}\n\ndef cek_form(xml):\n    \"\"\"Pemeriksa studi kasus: form view library.book.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.ui.view\", m)\n    if \"model\" not in f or (f[\"model\"].text or \"\").strip() != \"library.book\":\n        m.append('Tambahkan <field name=\"model\">library.book</field>.')\n    if re.search(r\"\\battrs\\s*=|\\bstates\\s*=\", xml):\n        m.append(\"attrs dan states sudah dihapus di Odoo 17. Tulis kondisinya langsung, misalnya invisible=\\\"state != 'draft'\\\".\")\n    arch = f.get(\"arch\")\n    if arch is None or arch.get(\"type\") != \"xml\":\n        m.append('Tambahkan <field name=\"arch\" type=\"xml\"> yang berisi <form>.')\n        return m\n    form = arch.find(\"form\")\n    if form is None:\n        m.append(\"Di dalam arch harus ada <form>.\")\n        return m\n    header = form.find(\"header\")\n    if header is None:\n        m.append(\"Tombol dan statusbar ditaruh di dalam <header> (anak langsung <form>).\")\n    else:\n        tombol = [b for b in header.findall(\"button\") if b.get(\"name\") == \"action_make_available\"]\n        if not tombol:\n            m.append('Di <header> belum ada <button name=\"action_make_available\" .../>.')\n        else:\n            b = tombol[0]\n            if b.get(\"type\") != \"object\":\n                m.append('Tombol yang memanggil method Python butuh type=\"object\".')\n            if _rapat(b.get(\"invisible\")) != \"state!='draft'\":\n                m.append(\"Tombol harus tersembunyi kecuali status draft: invisible=\\\"state != 'draft'\\\".\")\n            if not b.get(\"string\"):\n                m.append('Beri tombol label lewat atribut string, misalnya string=\"Tersedia\".')\n        st = [x for x in header.findall(\"field\") if x.get(\"name\") == \"state\"]\n        if not st or st[0].get(\"widget\") != \"statusbar\":\n            m.append('Tambahkan <field name=\"state\" widget=\"statusbar\"/> di dalam <header>.')\n    sheet = form.find(\"sheet\")\n    if sheet is None:\n        m.append(\"Isi form dibungkus <sheet> (anak langsung <form>).\")\n    else:\n        ada = {x.get(\"name\") for x in sheet.iter(\"field\")}\n        for wajib in (\"name\", \"author_id\", \"isbn\"):\n            if wajib not in ada:\n                m.append(\"Field \" + wajib + \" belum ada di dalam <sheet>.\")\n    return m\n\ndef cek_inherit(xml):\n    \"\"\"Pemeriksa studi kasus: mewarisi form sale.order.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.ui.view\", m)\n    if \"model\" not in f or (f[\"model\"].text or \"\").strip() != \"sale.order\":\n        m.append('Tambahkan <field name=\"model\">sale.order</field>.')\n    if \"inherit_id\" not in f or f[\"inherit_id\"].get(\"ref\") != \"sale.view_order_form\":\n        m.append('View turunan butuh <field name=\"inherit_id\" ref=\"sale.view_order_form\"/>.')\n    arch = f.get(\"arch\")\n    if arch is None or arch.get(\"type\") != \"xml\":\n        m.append('Tambahkan <field name=\"arch\" type=\"xml\">.')\n        return m\n    xp = arch.findall(\"xpath\")\n    if not xp:\n        m.append(\"Di dalam arch belum ada <xpath>.\")\n        return m\n    sasaran = [x for x in xp if _rapat(x.get(\"expr\")) == \"//field[@name='partner_id']\"]\n    if not sasaran:\n        m.append(\"expr xpath harus menunjuk field partner_id: expr=\\\"//field[@name='partner_id']\\\".\")\n        return m\n    x = sasaran[0]\n    if x.get(\"position\") != \"after\":\n        m.append('Field baru harus muncul SETELAH partner_id: position=\"after\".')\n    if not any(c.tag == \"field\" and c.get(\"name\") == \"x_approval_note\" for c in x):\n        m.append('Di dalam xpath belum ada <field name=\"x_approval_note\"/>.')\n    tombol = [x for x in xp if _rapat(x.get(\"expr\")) in (\"//header\", \"/form/header\", \"//form/header\")]\n    if not tombol or tombol[0].get(\"position\") != \"inside\":\n        m.append('Tambahkan xpath kedua: expr=\"//header\" position=\"inside\" untuk tombol approve.')\n    else:\n        b = [c for c in tombol[0] if c.tag == \"button\" and c.get(\"name\") == \"action_amount_approve\"]\n        if not b:\n            m.append('Di xpath header belum ada <button name=\"action_amount_approve\" .../>.')\n        else:\n            if b[0].get(\"type\") != \"object\":\n                m.append('Tombol approve butuh type=\"object\".')\n            if _rapat(b[0].get(\"invisible\")) != \"state!='to_approve'\":\n                m.append(\"Tombol approve hanya tampil di status to_approve: invisible=\\\"state != 'to_approve'\\\".\")\n            if b[0].get(\"groups\") != \"sale_amount_approval.group_so_amount_approver\":\n                m.append('Batasi tombol untuk grup approver: groups=\"sale_amount_approval.group_so_amount_approver\".')\n    return m\n\ndef cek_acl(teks):\n    \"\"\"Pemeriksa studi kasus: ir.model.access.csv untuk library.book.\"\"\"\n    baris = [b for b in csv.reader(io.StringIO(teks.strip())) if b]\n    if not baris:\n        return [\"File masih kosong.\"]\n    m = []\n    kepala = [\"id\", \"name\", \"model_id:id\", \"group_id:id\", \"perm_read\", \"perm_write\", \"perm_create\", \"perm_unlink\"]\n    if [k.strip() for k in baris[0]] != kepala:\n        m.append(\"Baris pertama (header) harus persis: \" + \",\".join(kepala))\n        return m\n    data = {}\n    for i, b in enumerate(baris[1:], 2):\n        if len(b) != 8:\n            m.append(\"Baris \" + str(i) + \" harus punya 8 kolom, sekarang \" + str(len(b)) + \".\")\n            continue\n        b = [x.strip() for x in b]\n        if b[2] != \"model_library_book\":\n            m.append(\"Baris \" + str(i) + \": model_id:id untuk library.book adalah model_library_book.\")\n        grup = b[3].split(\".\")[-1]\n        data[grup] = b[4:]\n    if \"group_library_user\" not in data:\n        m.append(\"Belum ada baris untuk grup group_library_user.\")\n    elif data[\"group_library_user\"] != [\"1\", \"0\", \"0\", \"0\"]:\n        m.append(\"Library User hanya boleh membaca: perm 1,0,0,0.\")\n    if \"group_library_manager\" not in data:\n        m.append(\"Belum ada baris untuk grup group_library_manager.\")\n    elif data[\"group_library_manager\"] != [\"1\", \"1\", \"1\", \"1\"]:\n        m.append(\"Library Manager boleh semuanya: perm 1,1,1,1.\")\n    ids = [b[0] for b in baris[1:] if b]\n    if len(set(ids)) != len(ids):\n        m.append(\"Kolom id setiap baris harus unik.\")\n    return m\n\ndef cek_rule(xml):\n    \"\"\"Pemeriksa studi kasus: record rule peminjaman milik sendiri.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.rule\", m)\n    if \"name\" not in f or not (f[\"name\"].text or \"\").strip():\n        m.append('Beri nama aturan: <field name=\"name\">...</field>.')\n    if \"model_id\" not in f or f[\"model_id\"].get(\"ref\") != \"model_library_loan\":\n        m.append('Model aturan: <field name=\"model_id\" ref=\"model_library_loan\"/>.')\n    if \"domain_force\" not in f or _rapat(f[\"domain_force\"].text) != \"[('user_id','=',user.id)]\":\n        m.append(\"domain_force harus membatasi ke milik sendiri: [('user_id', '=', user.id)].\")\n    g = f.get(\"groups\")\n    if g is None or \"ref('group_library_user')\" not in _rapat(g.get(\"eval\")):\n        m.append(\"Berlakukan untuk grup user: <field name=\\\"groups\\\" eval=\\\"[(4, ref('group_library_user'))]\\\"/>.\")\n    return m\n",
"awal_baru": ""
},
{
"id": "ct-rule",
"judul": "Record rule: hanya milik sendiri",
"kategori": "studi",
"tingkat": 2,
"fungsi": "RULE",
"cerita": "",
"soal": "Isi <code>RULE</code> dengan record <code>ir.rule</code> untuk model <code>library.loan</code> (ref <code>model_library_loan</code>) yang membuat anggota grup <code>group_library_user</code> hanya melihat peminjaman miliknya sendiri (<code>user_id</code> = pengguna login). Tes memanggil <code>cek_rule(RULE)</code>.",
"awal": "RULE = \"\"\"\n<record id=\"library_loan_rule_own\" model=\"ir.rule\">\n</record>\n\"\"\"\n",
"solusi": "RULE = \"\"\"\n<record id=\"library_loan_rule_own\" model=\"ir.rule\">\n    <field name=\"name\">Peminjaman milik sendiri</field>\n    <field name=\"model_id\" ref=\"model_library_loan\"/>\n    <field name=\"domain_force\">[('user_id', '=', user.id)]</field>\n    <field name=\"groups\" eval=\"[(4, ref('group_library_user'))]\"/>\n</record>\n\"\"\"\n",
"jelas": "ACL menentukan boleh membuka model; record rule menentukan record mana yang terlihat. Manager biasanya diberi rule lain dengan domain [(1, '=', 1)] agar melihat semua.",
"kompleksitas": "",
"petunjuk": [
"Empat field: name, model_id (ref), domain_force, groups (eval).",
"Di domain_force, variabel user adalah pengguna yang sedang login: [('user_id', '=', user.id)].",
"Kerangka solusinya:\n…\n…\n    …\n    …\n    …\n    …\n…\n…"
],
"tes": [
[
"cek_rule(RULE)",
"[]"
],
[
"len(cek_rule(RULE))",
"0"
],
[
"'ir.rule' in RULE",
"True"
]
],
"contoh": 1,
"pre": "\nimport csv, io, re\nimport xml.etree.ElementTree as ET\n\ndef _rapat(s):\n    return re.sub(r\"\\s+\", \"\", s or \"\").replace('\"', \"'\")\n\ndef _parse(xml):\n    try:\n        return ET.fromstring(xml.strip()), None\n    except ET.ParseError as e:\n        return None, \"XML tidak valid (\" + str(e) + \"). Cek tag yang belum ditutup, tanda kutip, dan < yang harus ditulis &lt;.\"\n\ndef _record(r, model, m):\n    if r.tag != \"record\":\n        m.append(\"Elemen terluar harus <record>, bukan <\" + r.tag + \">.\")\n    if r.get(\"model\") != model:\n        m.append(\"Atribut model pada <record> harus '\" + model + \"'.\")\n    if not r.get(\"id\"):\n        m.append(\"<record> butuh atribut id (ID XML yang unik).\")\n    return {f.get(\"name\"): f for f in r.findall(\"field\")}\n\ndef cek_form(xml):\n    \"\"\"Pemeriksa studi kasus: form view library.book.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.ui.view\", m)\n    if \"model\" not in f or (f[\"model\"].text or \"\").strip() != \"library.book\":\n        m.append('Tambahkan <field name=\"model\">library.book</field>.')\n    if re.search(r\"\\battrs\\s*=|\\bstates\\s*=\", xml):\n        m.append(\"attrs dan states sudah dihapus di Odoo 17. Tulis kondisinya langsung, misalnya invisible=\\\"state != 'draft'\\\".\")\n    arch = f.get(\"arch\")\n    if arch is None or arch.get(\"type\") != \"xml\":\n        m.append('Tambahkan <field name=\"arch\" type=\"xml\"> yang berisi <form>.')\n        return m\n    form = arch.find(\"form\")\n    if form is None:\n        m.append(\"Di dalam arch harus ada <form>.\")\n        return m\n    header = form.find(\"header\")\n    if header is None:\n        m.append(\"Tombol dan statusbar ditaruh di dalam <header> (anak langsung <form>).\")\n    else:\n        tombol = [b for b in header.findall(\"button\") if b.get(\"name\") == \"action_make_available\"]\n        if not tombol:\n            m.append('Di <header> belum ada <button name=\"action_make_available\" .../>.')\n        else:\n            b = tombol[0]\n            if b.get(\"type\") != \"object\":\n                m.append('Tombol yang memanggil method Python butuh type=\"object\".')\n            if _rapat(b.get(\"invisible\")) != \"state!='draft'\":\n                m.append(\"Tombol harus tersembunyi kecuali status draft: invisible=\\\"state != 'draft'\\\".\")\n            if not b.get(\"string\"):\n                m.append('Beri tombol label lewat atribut string, misalnya string=\"Tersedia\".')\n        st = [x for x in header.findall(\"field\") if x.get(\"name\") == \"state\"]\n        if not st or st[0].get(\"widget\") != \"statusbar\":\n            m.append('Tambahkan <field name=\"state\" widget=\"statusbar\"/> di dalam <header>.')\n    sheet = form.find(\"sheet\")\n    if sheet is None:\n        m.append(\"Isi form dibungkus <sheet> (anak langsung <form>).\")\n    else:\n        ada = {x.get(\"name\") for x in sheet.iter(\"field\")}\n        for wajib in (\"name\", \"author_id\", \"isbn\"):\n            if wajib not in ada:\n                m.append(\"Field \" + wajib + \" belum ada di dalam <sheet>.\")\n    return m\n\ndef cek_inherit(xml):\n    \"\"\"Pemeriksa studi kasus: mewarisi form sale.order.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.ui.view\", m)\n    if \"model\" not in f or (f[\"model\"].text or \"\").strip() != \"sale.order\":\n        m.append('Tambahkan <field name=\"model\">sale.order</field>.')\n    if \"inherit_id\" not in f or f[\"inherit_id\"].get(\"ref\") != \"sale.view_order_form\":\n        m.append('View turunan butuh <field name=\"inherit_id\" ref=\"sale.view_order_form\"/>.')\n    arch = f.get(\"arch\")\n    if arch is None or arch.get(\"type\") != \"xml\":\n        m.append('Tambahkan <field name=\"arch\" type=\"xml\">.')\n        return m\n    xp = arch.findall(\"xpath\")\n    if not xp:\n        m.append(\"Di dalam arch belum ada <xpath>.\")\n        return m\n    sasaran = [x for x in xp if _rapat(x.get(\"expr\")) == \"//field[@name='partner_id']\"]\n    if not sasaran:\n        m.append(\"expr xpath harus menunjuk field partner_id: expr=\\\"//field[@name='partner_id']\\\".\")\n        return m\n    x = sasaran[0]\n    if x.get(\"position\") != \"after\":\n        m.append('Field baru harus muncul SETELAH partner_id: position=\"after\".')\n    if not any(c.tag == \"field\" and c.get(\"name\") == \"x_approval_note\" for c in x):\n        m.append('Di dalam xpath belum ada <field name=\"x_approval_note\"/>.')\n    tombol = [x for x in xp if _rapat(x.get(\"expr\")) in (\"//header\", \"/form/header\", \"//form/header\")]\n    if not tombol or tombol[0].get(\"position\") != \"inside\":\n        m.append('Tambahkan xpath kedua: expr=\"//header\" position=\"inside\" untuk tombol approve.')\n    else:\n        b = [c for c in tombol[0] if c.tag == \"button\" and c.get(\"name\") == \"action_amount_approve\"]\n        if not b:\n            m.append('Di xpath header belum ada <button name=\"action_amount_approve\" .../>.')\n        else:\n            if b[0].get(\"type\") != \"object\":\n                m.append('Tombol approve butuh type=\"object\".')\n            if _rapat(b[0].get(\"invisible\")) != \"state!='to_approve'\":\n                m.append(\"Tombol approve hanya tampil di status to_approve: invisible=\\\"state != 'to_approve'\\\".\")\n            if b[0].get(\"groups\") != \"sale_amount_approval.group_so_amount_approver\":\n                m.append('Batasi tombol untuk grup approver: groups=\"sale_amount_approval.group_so_amount_approver\".')\n    return m\n\ndef cek_acl(teks):\n    \"\"\"Pemeriksa studi kasus: ir.model.access.csv untuk library.book.\"\"\"\n    baris = [b for b in csv.reader(io.StringIO(teks.strip())) if b]\n    if not baris:\n        return [\"File masih kosong.\"]\n    m = []\n    kepala = [\"id\", \"name\", \"model_id:id\", \"group_id:id\", \"perm_read\", \"perm_write\", \"perm_create\", \"perm_unlink\"]\n    if [k.strip() for k in baris[0]] != kepala:\n        m.append(\"Baris pertama (header) harus persis: \" + \",\".join(kepala))\n        return m\n    data = {}\n    for i, b in enumerate(baris[1:], 2):\n        if len(b) != 8:\n            m.append(\"Baris \" + str(i) + \" harus punya 8 kolom, sekarang \" + str(len(b)) + \".\")\n            continue\n        b = [x.strip() for x in b]\n        if b[2] != \"model_library_book\":\n            m.append(\"Baris \" + str(i) + \": model_id:id untuk library.book adalah model_library_book.\")\n        grup = b[3].split(\".\")[-1]\n        data[grup] = b[4:]\n    if \"group_library_user\" not in data:\n        m.append(\"Belum ada baris untuk grup group_library_user.\")\n    elif data[\"group_library_user\"] != [\"1\", \"0\", \"0\", \"0\"]:\n        m.append(\"Library User hanya boleh membaca: perm 1,0,0,0.\")\n    if \"group_library_manager\" not in data:\n        m.append(\"Belum ada baris untuk grup group_library_manager.\")\n    elif data[\"group_library_manager\"] != [\"1\", \"1\", \"1\", \"1\"]:\n        m.append(\"Library Manager boleh semuanya: perm 1,1,1,1.\")\n    ids = [b[0] for b in baris[1:] if b]\n    if len(set(ids)) != len(ids):\n        m.append(\"Kolom id setiap baris harus unik.\")\n    return m\n\ndef cek_rule(xml):\n    \"\"\"Pemeriksa studi kasus: record rule peminjaman milik sendiri.\"\"\"\n    r, err = _parse(xml)\n    if err:\n        return [err]\n    m = []\n    f = _record(r, \"ir.rule\", m)\n    if \"name\" not in f or not (f[\"name\"].text or \"\").strip():\n        m.append('Beri nama aturan: <field name=\"name\">...</field>.')\n    if \"model_id\" not in f or f[\"model_id\"].get(\"ref\") != \"model_library_loan\":\n        m.append('Model aturan: <field name=\"model_id\" ref=\"model_library_loan\"/>.')\n    if \"domain_force\" not in f or _rapat(f[\"domain_force\"].text) != \"[('user_id','=',user.id)]\":\n        m.append(\"domain_force harus membatasi ke milik sendiri: [('user_id', '=', user.id)].\")\n    g = f.get(\"groups\")\n    if g is None or \"ref('group_library_user')\" not in _rapat(g.get(\"eval\")):\n        m.append(\"Berlakukan untuk grup user: <field name=\\\"groups\\\" eval=\\\"[(4, ref('group_library_user'))]\\\"/>.\")\n    return m\n",
"awal_baru": ""
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "uji-py-1",
"topik": "python",
"setelah": "loop",
"judul": "Kasir mini",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "# Pola kerja: fungsi kecil yang saling memanggil\ndef bersihkan(teks):\n    return teks.strip().lower()\n\ndef hitung(daftar):\n    return {k: daftar.count(k) for k in set(daftar)}\n\ndef laporan(teks_mentah):\n    data = [bersihkan(t) for t in teks_mentah]   # memakai fungsi A\n    hasil = hitung(data)                          # memakai fungsi B\n    return sorted(hasil.items())\n\nprint(laporan([\" Kopi\", \"teh \", \"KOPI\"]))",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"keluaran": "[('kopi', 2), ('teh', 1)]"
},
"langkah": [
{
"id": "uji-py-1-a",
"judul": "Bagian A: Membaca catatan belanja",
"kategori": "studi",
"tingkat": 2,
"fungsi": "baca_belanja",
"cerita": "Toko kopi kecil mencatat belanja pelanggan sebagai teks, satu barang per baris: <code>Kopi Susu x2 @18000</code>. Kamu diminta membuat program kasirnya.",
"soal": "Buat <code>baca_belanja(teks)</code> yang mengembalikan list tuple <code>(nama, qty, harga)</code> dari setiap baris berformat <code>NAMA xQTY @HARGA</code>. Nama dirapikan dengan <code>.strip()</code>; qty dan harga menjadi int. Baris kosong atau yang tidak memuat <code> x</code> dan <code>@</code> dilewati.",
"awal": "def baca_belanja(teks):\n    # tulis kodemu di sini\n    pass\n",
"solusi": "def baca_belanja(teks):\n    hasil = []\n    for baris in teks.splitlines():\n        if \" x\" not in baris or \"@\" not in baris:\n            continue\n        kiri, harga = baris.rsplit(\"@\", 1)\n        nama, qty = kiri.rsplit(\" x\", 1)\n        hasil.append((nama.strip(), int(qty), int(harga)))\n    return hasil\n",
"jelas": "rsplit dari kanan membuat nama seperti 'Es Teh Manis' aman. int() juga otomatis membuang spasi di sekitar angka.",
"kompleksitas": "",
"petunjuk": [
"splitlines() memecah teks per baris. Lewati baris yang tidak berisi \" x\" atau \"@\" dengan continue.",
"rsplit(\"@\", 1) memecah dari kanan satu kali, jadi nama yang berisi spasi tetap utuh. Lakukan lagi dengan \" x\" untuk memisahkan nama dan qty.",
"Kerangka solusinya:\ndef baca_belanja(teks):\n    …\n    for …:\n        if …:\n            …\n        …\n        …\n        …\n    return …"
],
"tes": [
[
"baca_belanja(\"Kopi Susu x2 @18000\\nRoti x1 @12500\")",
"[('Kopi Susu', 2, 18000), ('Roti', 1, 12500)]"
],
[
"baca_belanja(\"\")",
"[]"
],
[
"baca_belanja(\"Air Mineral x12 @4000\\n\\ncatatan: bayar tunai\\nTeh x3 @8000\")",
"[('Air Mineral', 12, 4000), ('Teh', 3, 8000)]"
],
[
"baca_belanja(\"  Es Teh Manis x1 @6000  \")",
"[('Es Teh Manis', 1, 6000)]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "uji-py-1-b",
"judul": "Bagian B: Menghitung struk",
"kategori": "studi",
"tingkat": 3,
"fungsi": "hitung_struk",
"cerita": "Lanjutan dari bagian A. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Buat <code>hitung_struk(items, member)</code> (items = hasil bagian A). Kembalikan dict <code>{\"subtotal\", \"diskon\", \"pajak\", \"total\"}</code> (semua int): subtotal = Σ qty × harga; diskon 10% dari subtotal hanya bila <code>member</code> True <b>dan</b> subtotal ≥ 100.000; pajak 11% dari (subtotal − diskon); total = subtotal − diskon + pajak. Bulatkan diskon dan pajak dengan <code>round()</code>.",
"awal": "def baca_belanja(teks):\n    hasil = []\n    for baris in teks.splitlines():\n        if \" x\" not in baris or \"@\" not in baris:\n            continue\n        kiri, harga = baris.rsplit(\"@\", 1)\n        nama, qty = kiri.rsplit(\" x\", 1)\n        hasil.append((nama.strip(), int(qty), int(harga)))\n    return hasil\n\n\ndef hitung_struk(items, member):\n    pass\n",
"solusi": "def baca_belanja(teks):\n    hasil = []\n    for baris in teks.splitlines():\n        if \" x\" not in baris or \"@\" not in baris:\n            continue\n        kiri, harga = baris.rsplit(\"@\", 1)\n        nama, qty = kiri.rsplit(\" x\", 1)\n        hasil.append((nama.strip(), int(qty), int(harga)))\n    return hasil\n\n\ndef hitung_struk(items, member):\n    subtotal = sum(q * h for _, q, h in items)\n    diskon = round(subtotal * 0.1) if member and subtotal >= 100000 else 0\n    pajak = round((subtotal - diskon) * 0.11)\n    return {\"subtotal\": subtotal, \"diskon\": diskon, \"pajak\": pajak, \"total\": subtotal - diskon + pajak}\n",
"jelas": "Urutan diskon lalu pajak penting: pajak dikenakan pada harga setelah diskon. Batas tepat 100.000 tetap mendapat diskon (≥).",
"kompleksitas": "",
"petunjuk": [
"Subtotal: sum(q * h for _, q, h in items). Tanda _ dipakai untuk nilai yang tidak dibutuhkan.",
"Diskon memakai dua syarat dengan and. Pajak dihitung SETELAH diskon.",
"Kerangka solusinya:\ndef baca_belanja(teks):\n    …\n    for …:\n        if …:\n            …\n        …\n        …\n        …\n    return …\n\n\ndef hitung_struk(items, member):\n    …\n    …\n    …\n    return …"
],
"tes": [
[
"hitung_struk([(\"Kopi\", 5, 18000), (\"Roti\", 2, 12500)], True)",
"{'subtotal': 115000, 'diskon': 11500, 'pajak': 11385, 'total': 114885}"
],
[
"hitung_struk([(\"Kopi\", 5, 18000), (\"Roti\", 2, 12500)], False)",
"{'subtotal': 115000, 'diskon': 0, 'pajak': 12650, 'total': 127650}"
],
[
"hitung_struk([(\"Teh\", 1, 8000)], True)",
"{'subtotal': 8000, 'diskon': 0, 'pajak': 880, 'total': 8880}"
],
[
"hitung_struk([], True)",
"{'subtotal': 0, 'diskon': 0, 'pajak': 0, 'total': 0}"
],
[
"hitung_struk([(\"Paket\", 1, 100000)], True)",
"{'subtotal': 100000, 'diskon': 10000, 'pajak': 9900, 'total': 99900}"
]
],
"contoh": 2,
"pre": "",
"awal_baru": "def hitung_struk(items, member):\n    pass\n"
},
{
"id": "uji-py-1-c",
"judul": "Bagian C: Mencetak struk",
"kategori": "studi",
"tingkat": 3,
"fungsi": "cetak_struk",
"cerita": "Lanjutan dari bagian B. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Buat <code>cetak_struk(teks, member)</code> yang memakai bagian A dan B, lalu mengembalikan list baris teks: satu baris per barang <code>\"Kopi Susu 2 x 18.000 = 36.000\"</code>, lalu <code>\"Subtotal: 36.000\"</code>, <code>\"Diskon: 0\"</code>, <code>\"Pajak: 3.960\"</code>, <code>\"Total: 39.960\"</code>. Angka memakai pemisah ribuan titik. Jika tidak ada barang, kembalikan <code>[\"Belanja kosong\"]</code>.",
"awal": "def baca_belanja(teks):\n    hasil = []\n    for baris in teks.splitlines():\n        if \" x\" not in baris or \"@\" not in baris:\n            continue\n        kiri, harga = baris.rsplit(\"@\", 1)\n        nama, qty = kiri.rsplit(\" x\", 1)\n        hasil.append((nama.strip(), int(qty), int(harga)))\n    return hasil\n\n\ndef hitung_struk(items, member):\n    subtotal = sum(q * h for _, q, h in items)\n    diskon = round(subtotal * 0.1) if member and subtotal >= 100000 else 0\n    pajak = round((subtotal - diskon) * 0.11)\n    return {\"subtotal\": subtotal, \"diskon\": diskon, \"pajak\": pajak, \"total\": subtotal - diskon + pajak}\n\n\ndef cetak_struk(teks, member):\n    pass\n",
"solusi": "def baca_belanja(teks):\n    hasil = []\n    for baris in teks.splitlines():\n        if \" x\" not in baris or \"@\" not in baris:\n            continue\n        kiri, harga = baris.rsplit(\"@\", 1)\n        nama, qty = kiri.rsplit(\" x\", 1)\n        hasil.append((nama.strip(), int(qty), int(harga)))\n    return hasil\n\n\ndef hitung_struk(items, member):\n    subtotal = sum(q * h for _, q, h in items)\n    diskon = round(subtotal * 0.1) if member and subtotal >= 100000 else 0\n    pajak = round((subtotal - diskon) * 0.11)\n    return {\"subtotal\": subtotal, \"diskon\": diskon, \"pajak\": pajak, \"total\": subtotal - diskon + pajak}\n\n\ndef rp(angka):\n    return f\"{angka:,}\".replace(\",\", \".\")\n\n\ndef cetak_struk(teks, member):\n    items = baca_belanja(teks)\n    if not items:\n        return [\"Belanja kosong\"]\n    baris = [f\"{n} {q} x {rp(h)} = {rp(q * h)}\" for n, q, h in items]\n    s = hitung_struk(items, member)\n    for kunci, label in ((\"subtotal\", \"Subtotal\"), (\"diskon\", \"Diskon\"), (\"pajak\", \"Pajak\"), (\"total\", \"Total\")):\n        baris.append(f\"{label}: {rp(s[kunci])}\")\n    return baris\n",
"jelas": "Bagian C menunjukkan manfaat memecah program: setiap fungsi kecil sudah teruji, jadi fungsi utama tinggal merangkai.",
"kompleksitas": "",
"petunjuk": [
"Panggil baca_belanja(teks) dan hitung_struk(items, member); jangan menulis ulang perhitungannya.",
"Buat fungsi kecil rp(angka) untuk pemisah ribuan: f\"{angka:,}\".replace(\",\", \".\").",
"Kerangka solusinya:\ndef baca_belanja(teks):\n    …\n    for …:\n        if …:\n            …\n        …\n        …\n        …\n    return …\n\n\ndef hitung_struk(items, member):\n    …\n    …\n    …\n    return …\n\n\ndef rp(angka):\n    return …\n\n\ndef cetak_struk(teks, member):\n    …\n    if …:\n        return …\n    …\n    …\n    for …:\n        …\n    return …"
],
"tes": [
[
"cetak_struk(\"Kopi Susu x2 @18000\", False)",
"['Kopi Susu 2 x 18.000 = 36.000', 'Subtotal: 36.000', 'Diskon: 0', 'Pajak: 3.960', 'Total: 39.960']"
],
[
"cetak_struk(\"Kopi x5 @18000\\nRoti x2 @12500\", True)",
"['Kopi 5 x 18.000 = 90.000', 'Roti 2 x 12.500 = 25.000', 'Subtotal: 115.000', 'Diskon: 11.500', 'Pajak: 11.385', 'Total: 114.885']"
],
[
"cetak_struk(\"tidak ada barang\", True)",
"['Belanja kosong']"
],
[
"cetak_struk(\"Air x1000 @4000\", False)",
"['Air 1000 x 4.000 = 4.000.000', 'Subtotal: 4.000.000', 'Diskon: 0', 'Pajak: 440.000', 'Total: 4.440.000']"
]
],
"contoh": 2,
"pre": "",
"awal_baru": "def cetak_struk(teks, member):\n    pass\n"
}
],
"ujian": true,
"cakupan": "Bab 1–5: tipe data, operator, string, if/elif, perulangan"
},
{
"id": "uji-py-2",
"topik": "python",
"setelah": "oop",
"judul": "Sistem gudang",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "# Pola kerja: fungsi kecil yang saling memanggil\ndef bersihkan(teks):\n    return teks.strip().lower()\n\ndef hitung(daftar):\n    return {k: daftar.count(k) for k in set(daftar)}\n\ndef laporan(teks_mentah):\n    data = [bersihkan(t) for t in teks_mentah]   # memakai fungsi A\n    hasil = hitung(data)                          # memakai fungsi B\n    return sorted(hasil.items())\n\nprint(laporan([\" Kopi\", \"teh \", \"KOPI\"]))",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"keluaran": "[('kopi', 2), ('teh', 1)]"
},
"langkah": [
{
"id": "uji-py-2-a",
"judul": "Bagian A: Class Gudang",
"kategori": "studi",
"tingkat": 2,
"fungsi": "Gudang",
"cerita": "Gudang ingin mengganti buku catatan dengan program kecil. Stok dicatat per produk, dan perintah masuk/keluar datang dari file teks.",
"soal": "Buat class <code>Gudang</code> dengan method <code>masuk(produk, qty)</code>, <code>keluar(produk, qty)</code>, dan <code>stok(produk)</code> (0 untuk produk yang belum pernah ada). qty ≤ 0 melempar <code>ValueError(\"qty harus lebih dari 0\")</code>. Keluar melebihi stok melempar <code>ValueError(\"stok &lt;produk&gt; tidak cukup\")</code> dan stok tidak berubah.",
"awal": "class Gudang:\n    def __init__(self):\n        pass\n\n    def masuk(self, produk, qty):\n        pass\n\n    def keluar(self, produk, qty):\n        pass\n\n    def stok(self, produk):\n        pass\n",
"solusi": "class Gudang:\n    def __init__(self):\n        self.data = {}\n\n    def _cek(self, qty):\n        if qty <= 0:\n            raise ValueError(\"qty harus lebih dari 0\")\n\n    def masuk(self, produk, qty):\n        self._cek(qty)\n        self.data[produk] = self.data.get(produk, 0) + qty\n\n    def keluar(self, produk, qty):\n        self._cek(qty)\n        if self.stok(produk) < qty:\n            raise ValueError(f\"stok {produk} tidak cukup\")\n        self.data[produk] -= qty\n\n    def stok(self, produk):\n        return self.data.get(produk, 0)\n",
"jelas": "Pola validasi-dulu-ubah-belakangan menjaga data tetap konsisten, sama seperti raise UserError sebelum write() di Odoo.",
"kompleksitas": "",
"petunjuk": [
"Simpan stok di dict self.data yang dibuat di __init__.",
"Validasi dulu (raise), baru ubah data. Pesan error harus persis seperti di soal; str(e) mengambil pesannya.",
"Kerangka solusinya:\nclass Gudang:\n    def __init__(self):\n        …\n\n    def _cek(self, qty):\n        if …:\n            …\n\n    def masuk(self, produk, qty):\n        …\n        …\n\n    def keluar(self, produk, qty):\n        …\n        if …:\n            …\n        …\n\n    def stok(self, produk):\n        return …"
],
"tes": [
[
"g = Gudang()\ng.masuk(\"kursi\", 10)\ng.keluar(\"kursi\", 3)\nhasil = (g.stok(\"kursi\"), g.stok(\"meja\"))",
"(7, 0)"
],
[
"g = Gudang()\ng.masuk(\"kursi\", 2)\ntry:\n    g.keluar(\"kursi\", 5)\n    hasil = \"tidak error\"\nexcept ValueError as e:\n    hasil = (str(e), g.stok(\"kursi\"))",
"('stok kursi tidak cukup', 2)"
],
[
"g = Gudang()\ntry:\n    g.masuk(\"meja\", 0)\n    hasil = \"tidak error\"\nexcept ValueError as e:\n    hasil = str(e)",
"'qty harus lebih dari 0'"
],
[
"g = Gudang()\ntry:\n    g.keluar(\"lemari\", 1)\n    hasil = \"tidak error\"\nexcept ValueError as e:\n    hasil = str(e)",
"'stok lemari tidak cukup'"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "uji-py-2-b",
"judul": "Bagian B: Laporan stok",
"kategori": "studi",
"tingkat": 3,
"fungsi": "laporan",
"cerita": "Lanjutan dari bagian A. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Tambahkan fungsi <code>laporan(gudang)</code> (fungsi biasa, di luar class) yang mengembalikan list tuple <code>(produk, qty)</code> untuk produk dengan stok &gt; 0, diurutkan dari qty terbanyak; seri diurutkan nama abjad.",
"awal": "class Gudang:\n    def __init__(self):\n        self.data = {}\n\n    def _cek(self, qty):\n        if qty <= 0:\n            raise ValueError(\"qty harus lebih dari 0\")\n\n    def masuk(self, produk, qty):\n        self._cek(qty)\n        self.data[produk] = self.data.get(produk, 0) + qty\n\n    def keluar(self, produk, qty):\n        self._cek(qty)\n        if self.stok(produk) < qty:\n            raise ValueError(f\"stok {produk} tidak cukup\")\n        self.data[produk] -= qty\n\n    def stok(self, produk):\n        return self.data.get(produk, 0)\n\n\ndef laporan(gudang):\n    pass\n",
"solusi": "class Gudang:\n    def __init__(self):\n        self.data = {}\n\n    def _cek(self, qty):\n        if qty <= 0:\n            raise ValueError(\"qty harus lebih dari 0\")\n\n    def masuk(self, produk, qty):\n        self._cek(qty)\n        self.data[produk] = self.data.get(produk, 0) + qty\n\n    def keluar(self, produk, qty):\n        self._cek(qty)\n        if self.stok(produk) < qty:\n            raise ValueError(f\"stok {produk} tidak cukup\")\n        self.data[produk] -= qty\n\n    def stok(self, produk):\n        return self.data.get(produk, 0)\n\n\ndef laporan(gudang):\n    ada = [(p, q) for p, q in gudang.data.items() if q > 0]\n    return sorted(ada, key=lambda x: (-x[1], x[0]))\n",
"jelas": "Fungsi luar class boleh membaca atribut objek. Produk yang stoknya habis (rak) tidak ikut dilaporkan.",
"kompleksitas": "",
"petunjuk": [
"Ambil pasangan dari dict stok di dalam objek gudang, saring yang > 0.",
"Urutkan dengan key=lambda x: (-x[1], x[0]).",
"Kerangka solusinya:\nclass Gudang:\n    def __init__(self):\n        …\n\n    def _cek(self, qty):\n        if …:\n            …\n\n    def masuk(self, produk, qty):\n        …\n        …\n\n    def keluar(self, produk, qty):\n        …\n        if …:\n            …\n        …\n\n    def stok(self, produk):\n        return …\n\n\ndef laporan(gudang):\n    …\n    return …"
],
"tes": [
[
"g = Gudang()\ng.masuk(\"meja\", 4)\ng.masuk(\"kursi\", 10)\ng.masuk(\"lemari\", 4)\ng.masuk(\"rak\", 1)\ng.keluar(\"rak\", 1)\nhasil = laporan(g)",
"[('kursi', 10), ('lemari', 4), ('meja', 4)]"
],
[
"hasil = laporan(Gudang())",
"[]"
],
[
"g = Gudang()\ng.masuk(\"b\", 1)\ng.masuk(\"a\", 1)\nhasil = laporan(g)",
"[('a', 1), ('b', 1)]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": "def laporan(gudang):\n    pass\n"
},
{
"id": "uji-py-2-c",
"judul": "Bagian C: Memproses file perintah",
"kategori": "studi",
"tingkat": 3,
"fungsi": "proses",
"cerita": "Lanjutan dari bagian B. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Buat <code>proses(gudang, teks)</code>. Setiap baris berisi perintah <code>MASUK produk qty</code> atau <code>KELUAR produk qty</code>. Jalankan semua baris secara berurutan. Baris yang gagal tidak menghentikan proses; kumpulkan pesannya sebagai <code>\"baris N: pesan\"</code> (N mulai 1, baris kosong tetap dihitung tapi dilewati). Pesan: error dari Gudang, <code>\"perintah tidak dikenal\"</code>, atau <code>\"format salah\"</code> bila tidak tepat 3 bagian atau qty bukan angka. Kembalikan list pesan.",
"awal": "class Gudang:\n    def __init__(self):\n        self.data = {}\n\n    def _cek(self, qty):\n        if qty <= 0:\n            raise ValueError(\"qty harus lebih dari 0\")\n\n    def masuk(self, produk, qty):\n        self._cek(qty)\n        self.data[produk] = self.data.get(produk, 0) + qty\n\n    def keluar(self, produk, qty):\n        self._cek(qty)\n        if self.stok(produk) < qty:\n            raise ValueError(f\"stok {produk} tidak cukup\")\n        self.data[produk] -= qty\n\n    def stok(self, produk):\n        return self.data.get(produk, 0)\n\n\ndef laporan(gudang):\n    ada = [(p, q) for p, q in gudang.data.items() if q > 0]\n    return sorted(ada, key=lambda x: (-x[1], x[0]))\n\n\ndef proses(gudang, teks):\n    pass\n",
"solusi": "class Gudang:\n    def __init__(self):\n        self.data = {}\n\n    def _cek(self, qty):\n        if qty <= 0:\n            raise ValueError(\"qty harus lebih dari 0\")\n\n    def masuk(self, produk, qty):\n        self._cek(qty)\n        self.data[produk] = self.data.get(produk, 0) + qty\n\n    def keluar(self, produk, qty):\n        self._cek(qty)\n        if self.stok(produk) < qty:\n            raise ValueError(f\"stok {produk} tidak cukup\")\n        self.data[produk] -= qty\n\n    def stok(self, produk):\n        return self.data.get(produk, 0)\n\n\ndef laporan(gudang):\n    ada = [(p, q) for p, q in gudang.data.items() if q > 0]\n    return sorted(ada, key=lambda x: (-x[1], x[0]))\n\n\ndef proses(gudang, teks):\n    pesan = []\n    for n, baris in enumerate(teks.splitlines(), start=1):\n        if not baris.strip():\n            continue\n        bagian = baris.split()\n        try:\n            if len(bagian) != 3:\n                raise ValueError(\"format salah\")\n            perintah, produk, qty = bagian\n            try:\n                qty = int(qty)\n            except ValueError:\n                raise ValueError(\"format salah\")\n            if perintah == \"MASUK\":\n                gudang.masuk(produk, qty)\n            elif perintah == \"KELUAR\":\n                gudang.keluar(produk, qty)\n            else:\n                raise ValueError(\"perintah tidak dikenal\")\n        except ValueError as e:\n            pesan.append(f\"baris {n}: {e}\")\n    return pesan\n",
"jelas": "Memproses batch tanpa berhenti di baris pertama yang salah, lalu melaporkan semua kesalahan sekaligus, adalah pola impor data yang dipakai Odoo (tombol Test pada Import).",
"kompleksitas": "",
"petunjuk": [
"enumerate(teks.splitlines(), start=1) memberi nomor baris. Bungkus isi perulangan dengan try/except ValueError lalu catat pesannya.",
"Ubah masalah format menjadi ValueError(\"format salah\") supaya semua kesalahan ditangkap di satu except.",
"Kerangka solusinya:\nclass Gudang:\n    def __init__(self):\n        …\n\n    def _cek(self, qty):\n        if …:\n            …\n\n    def masuk(self, produk, qty):\n        …\n        …\n\n    def keluar(self, produk, qty):\n        …\n        if …:\n            …\n        …\n\n    def stok(self, produk):\n        return …\n\n\ndef laporan(gudang):\n    …\n    return …\n\n\ndef proses(gudang, teks):\n    …\n    for …:\n        if …:\n            …\n        …\n        try:\n            if …:\n                …\n            …\n            try:\n                …\n            except …:\n                …\n            if …:\n                …\n            elif …:\n                …\n            else:\n                …\n        except …:\n            …\n    return …"
],
"tes": [
[
"g = Gudang()\nhasil = (proses(g, \"MASUK kursi 5\\nKELUAR kursi 2\\nKELUAR kursi 9\\nPINJAM meja 1\\nMASUK meja dua\\n\\nMASUK meja 3\"), laporan(g))",
"(['baris 3: stok kursi tidak cukup', 'baris 4: perintah tidak dikenal', 'baris 5: format salah'], [('kursi', 3), ('meja', 3)])"
],
[
"g = Gudang()\nhasil = proses(g, \"\")",
"[]"
],
[
"g = Gudang()\nhasil = (proses(g, \"MASUK kursi 0\\nMASUK kursi\\nMASUK kursi 1 2\"), laporan(g))",
"(['baris 1: qty harus lebih dari 0', 'baris 2: format salah', 'baris 3: format salah'], [])"
]
],
"contoh": 2,
"pre": "",
"awal_baru": "def proses(gudang, teks):\n    pass\n"
}
],
"ujian": true,
"cakupan": "Bab 6–10: list, dict & set, fungsi, error handling, OOP"
},
{
"id": "uji-py-3",
"topik": "python",
"setelah": "comprehension",
"judul": "Laporan penjualan ala Odoo",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "# Pola kerja: fungsi kecil yang saling memanggil\ndef bersihkan(teks):\n    return teks.strip().lower()\n\ndef hitung(daftar):\n    return {k: daftar.count(k) for k in set(daftar)}\n\ndef laporan(teks_mentah):\n    data = [bersihkan(t) for t in teks_mentah]   # memakai fungsi A\n    hasil = hitung(data)                          # memakai fungsi B\n    return sorted(hasil.items())\n\nprint(laporan([\" Kopi\", \"teh \", \"KOPI\"]))",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"keluaran": "[('kopi', 2), ('teh', 1)]"
},
"langkah": [
{
"id": "uji-py-3-a",
"judul": "Bagian A: _compute_amounts",
"kategori": "studi",
"tingkat": 2,
"fungsi": "_compute_amounts",
"cerita": "Manajer meminta tiga hal dari data Sales Order: total tiap order, omzet per bulan, dan daftar pelanggan VIP. Data memakai recordset tiruan seperti di bab Python untuk Odoo.",
"soal": "Tulis <code>_compute_amounts(self)</code>. Setiap order punya <code>order_line</code> (baris dengan <code>qty</code>, <code>price_unit</code>, <code>discount</code> persen). Isi <code>amount_untaxed</code> = Σ qty × price_unit × (1 − discount/100) dibulatkan 2 desimal, <code>amount_tax</code> = 11% dari amount_untaxed dibulatkan 2 desimal, dan <code>amount_total</code> = jumlah keduanya (dibulatkan 2 desimal).",
"awal": "def _compute_amounts(self):\n    for order in self:\n        pass\n",
"solusi": "def _compute_amounts(self):\n    for order in self:\n        untaxed = round(sum(l.qty * l.price_unit * (1 - l.discount / 100) for l in order.order_line), 2)\n        order.amount_untaxed = untaxed\n        order.amount_tax = round(untaxed * 0.11, 2)\n        order.amount_total = round(untaxed + order.amount_tax, 2)\n",
"jelas": "Setiap order diberi nilai ketiga field, termasuk order kosong (0). Ini meniru _compute_amounts di sale.order.",
"kompleksitas": "",
"petunjuk": [
"Generator expression di dalam sum: sum(l.qty * l.price_unit * (1 - l.discount / 100) for l in order.order_line).",
"Bulatkan untaxed dulu, hitung pajak dari angka yang sudah dibulatkan.",
"Kerangka solusinya:\ndef _compute_amounts(self):\n    for …:\n        …\n        …\n        …\n        …"
],
"tes": [
[
"o = Record(order_line=rs(Record(qty=2, price_unit=100000, discount=10), Record(qty=1, price_unit=50000, discount=0)))\n_compute_amounts(rs(o))\nhasil = (o.amount_untaxed, o.amount_tax, o.amount_total)",
"(230000.0, 25300.0, 255300.0)"
],
[
"o = Record(order_line=rs())\n_compute_amounts(rs(o))\nhasil = (o.amount_untaxed, o.amount_tax, o.amount_total)",
"(0, 0.0, 0.0)"
],
[
"o = Record(order_line=rs(Record(qty=3, price_unit=19.99, discount=5)))\n_compute_amounts(rs(o))\nhasil = o.amount_total",
"63.24"
]
],
"contoh": 2,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n",
"awal_baru": ""
},
{
"id": "uji-py-3-b",
"judul": "Bagian B: Omzet per bulan",
"kategori": "studi",
"tingkat": 3,
"fungsi": "omzet_bulanan",
"cerita": "Lanjutan dari bagian A. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Buat <code>omzet_bulanan(orders)</code>. Jalankan dulu <code>_compute_amounts(orders)</code>, lalu kembalikan dict <code>{\"YYYY-MM\": total}</code> dari <code>amount_total</code> order berstatus <code>\"sale\"</code> atau <code>\"done\"</code>, berdasarkan <code>date_order</code> (teks <code>\"YYYY-MM-DD\"</code>). Total dibulatkan 2 desimal.",
"awal": "def _compute_amounts(self):\n    for order in self:\n        untaxed = round(sum(l.qty * l.price_unit * (1 - l.discount / 100) for l in order.order_line), 2)\n        order.amount_untaxed = untaxed\n        order.amount_tax = round(untaxed * 0.11, 2)\n        order.amount_total = round(untaxed + order.amount_tax, 2)\n\n\ndef omzet_bulanan(orders):\n    pass\n",
"solusi": "def _compute_amounts(self):\n    for order in self:\n        untaxed = round(sum(l.qty * l.price_unit * (1 - l.discount / 100) for l in order.order_line), 2)\n        order.amount_untaxed = untaxed\n        order.amount_tax = round(untaxed * 0.11, 2)\n        order.amount_total = round(untaxed + order.amount_tax, 2)\n\n\ndef omzet_bulanan(orders):\n    _compute_amounts(orders)\n    hasil = {}\n    for o in orders.filtered(lambda o: o.state in (\"sale\", \"done\")):\n        bulan = o.date_order[:7]\n        hasil[bulan] = round(hasil.get(bulan, 0) + o.amount_total, 2)\n    return hasil\n",
"jelas": "Order draft (quotation) tidak dihitung sebagai omzet. Memotong string ISO [:7] adalah cara cepat mengelompokkan per bulan; di Odoo dipakai read_group dengan groupby 'date_order:month'.",
"kompleksitas": "",
"petunjuk": [
"filtered(lambda o: o.state in (\"sale\", \"done\")) lalu kelompokkan dengan dict.",
"Kunci bulan cukup potongan teks: o.date_order[:7].",
"Kerangka solusinya:\ndef _compute_amounts(self):\n    for …:\n        …\n        …\n        …\n        …\n\n\ndef omzet_bulanan(orders):\n    …\n    …\n    for …:\n        …\n        …\n    return …"
],
"tes": [
[
"B = lambda q, p: rs(Record(qty=q, price_unit=p, discount=0))\nO = rs(Record(state=\"sale\", date_order=\"2026-10-05\", partner=\"PT A\", order_line=B(1, 1000)), Record(state=\"done\", date_order=\"2026-10-28\", partner=\"PT B\", order_line=B(2, 500)), Record(state=\"draft\", date_order=\"2026-10-30\", partner=\"PT C\", order_line=B(9, 9000)), Record(state=\"sale\", date_order=\"2026-11-01\", partner=\"PT A\", order_line=B(1, 100)))\nhasil = omzet_bulanan(O)",
"{'2026-10': 2220.0, '2026-11': 111.0}"
],
[
"hasil = omzet_bulanan(rs())",
"{}"
],
[
"O = rs(Record(state=\"cancel\", date_order=\"2026-11-01\", partner=\"X\", order_line=rs()))\nhasil = omzet_bulanan(O)",
"{}"
]
],
"contoh": 2,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n",
"awal_baru": "def omzet_bulanan(orders):\n    pass\n"
},
{
"id": "uji-py-3-c",
"judul": "Bagian C: Pelanggan VIP",
"kategori": "studi",
"tingkat": 3,
"fungsi": "pelanggan_vip",
"cerita": "Lanjutan dari bagian B. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Buat <code>pelanggan_vip(orders, minimal)</code>: kembalikan list nama <code>partner</code> yang total belanjanya (order sale/done, <code>amount_total</code> setelah dihitung) ≥ <code>minimal</code>, diurutkan dari total terbesar (seri: nama abjad). Gunakan comprehension di mana pun cocok.",
"awal": "def _compute_amounts(self):\n    for order in self:\n        untaxed = round(sum(l.qty * l.price_unit * (1 - l.discount / 100) for l in order.order_line), 2)\n        order.amount_untaxed = untaxed\n        order.amount_tax = round(untaxed * 0.11, 2)\n        order.amount_total = round(untaxed + order.amount_tax, 2)\n\n\ndef omzet_bulanan(orders):\n    _compute_amounts(orders)\n    hasil = {}\n    for o in orders.filtered(lambda o: o.state in (\"sale\", \"done\")):\n        bulan = o.date_order[:7]\n        hasil[bulan] = round(hasil.get(bulan, 0) + o.amount_total, 2)\n    return hasil\n\n\ndef pelanggan_vip(orders, minimal):\n    pass\n",
"solusi": "def _compute_amounts(self):\n    for order in self:\n        untaxed = round(sum(l.qty * l.price_unit * (1 - l.discount / 100) for l in order.order_line), 2)\n        order.amount_untaxed = untaxed\n        order.amount_tax = round(untaxed * 0.11, 2)\n        order.amount_total = round(untaxed + order.amount_tax, 2)\n\n\ndef omzet_bulanan(orders):\n    _compute_amounts(orders)\n    hasil = {}\n    for o in orders.filtered(lambda o: o.state in (\"sale\", \"done\")):\n        bulan = o.date_order[:7]\n        hasil[bulan] = round(hasil.get(bulan, 0) + o.amount_total, 2)\n    return hasil\n\n\ndef pelanggan_vip(orders, minimal):\n    _compute_amounts(orders)\n    total = {}\n    for o in orders.filtered(lambda o: o.state in (\"sale\", \"done\")):\n        total[o.partner] = total.get(o.partner, 0) + o.amount_total\n    return sorted([p for p, t in total.items() if t >= minimal], key=lambda p: (-total[p], p))\n",
"jelas": "PT C tidak masuk walau angkanya besar, karena ordernya masih draft. Tes terakhir memeriksa batas ≥: 100 + pajak 11% = 111, tepat sama dengan minimal.",
"kompleksitas": "",
"petunjuk": [
"Kumpulkan total per partner dengan dict, persis seperti bagian B tapi kuncinya partner.",
"Saring dengan comprehension [p for p, t in total.items() if t >= minimal], lalu sorted dengan key (-total, nama).",
"Kerangka solusinya:\ndef _compute_amounts(self):\n    for …:\n        …\n        …\n        …\n        …\n\n\ndef omzet_bulanan(orders):\n    …\n    …\n    for …:\n        …\n        …\n    return …\n\n\ndef pelanggan_vip(orders, minimal):\n    …\n    …\n    for …:\n        …\n    return …"
],
"tes": [
[
"B = lambda q, p: rs(Record(qty=q, price_unit=p, discount=0))\nO = rs(Record(state=\"sale\", date_order=\"2026-10-05\", partner=\"PT A\", order_line=B(1, 1000)), Record(state=\"done\", date_order=\"2026-10-28\", partner=\"PT B\", order_line=B(2, 500)), Record(state=\"draft\", date_order=\"2026-10-30\", partner=\"PT C\", order_line=B(9, 9000)), Record(state=\"sale\", date_order=\"2026-11-01\", partner=\"PT A\", order_line=B(1, 100)))\nhasil = pelanggan_vip(O, 1000)",
"['PT A', 'PT B']"
],
[
"hasil = pelanggan_vip(rs(), 1)",
"[]"
],
[
"B = lambda q, p: rs(Record(qty=q, price_unit=p, discount=0))\nO = rs(Record(state=\"sale\", date_order=\"2026-01-01\", partner=\"Z\", order_line=B(1, 100)), Record(state=\"sale\", date_order=\"2026-01-01\", partner=\"Y\", order_line=B(1, 100)))\nhasil = pelanggan_vip(O, 111)",
"['Y', 'Z']"
]
],
"contoh": 2,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n",
"awal_baru": "def pelanggan_vip(orders, minimal):\n    pass\n"
}
],
"ujian": true,
"cakupan": "Bab 11–15: modul, pandas/data, Python untuk Odoo, debugging, comprehension"
},
{
"id": "uji-py-4",
"topik": "python",
"setelah": "kerja",
"judul": "Antrean tiket support",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "# Pola kerja: fungsi kecil yang saling memanggil\ndef bersihkan(teks):\n    return teks.strip().lower()\n\ndef hitung(daftar):\n    return {k: daftar.count(k) for k in set(daftar)}\n\ndef laporan(teks_mentah):\n    data = [bersihkan(t) for t in teks_mentah]   # memakai fungsi A\n    hasil = hitung(data)                          # memakai fungsi B\n    return sorted(hasil.items())\n\nprint(laporan([\" Kopi\", \"teh \", \"KOPI\"]))",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"keluaran": "[('kopi', 2), ('teh', 1)]"
},
"langkah": [
{
"id": "uji-py-4-a",
"judul": "Bagian A: dataclass Tiket",
"kategori": "studi",
"tingkat": 2,
"fungsi": "Tiket",
"cerita": "Tim support memakai tiket dengan prioritas tinggi, sedang, rendah. Setiap prioritas punya batas waktu respons (SLA): tinggi 4 jam, sedang 24 jam, rendah 72 jam.",
"soal": "Buat <code>@dataclass</code> <code>Tiket</code> dengan atribut <code>id: int</code>, <code>judul: str</code>, <code>prioritas: str</code>, <code>dibuat: str</code> (format <code>\"YYYY-MM-DD HH:MM\"</code>). Tambahkan method <code>umur_jam(self, sekarang: str) -&gt; float</code> yang mengembalikan selisih jam (dibulatkan 1 desimal), dan <code>@property</code> <code>sla</code> yang mengembalikan batas jam sesuai prioritas.",
"awal": "from dataclasses import dataclass\n\n@dataclass\nclass Tiket:\n    pass\n",
"solusi": "from dataclasses import dataclass\nfrom datetime import datetime\n\nSLA = {\"tinggi\": 4, \"sedang\": 24, \"rendah\": 72}\nFORMAT = \"%Y-%m-%d %H:%M\"\n\n\n@dataclass\nclass Tiket:\n    id: int\n    judul: str\n    prioritas: str\n    dibuat: str\n\n    def umur_jam(self, sekarang: str) -> float:\n        selisih = datetime.strptime(sekarang, FORMAT) - datetime.strptime(self.dibuat, FORMAT)\n        return round(selisih.total_seconds() / 3600, 1)\n\n    @property\n    def sla(self) -> int:\n        return SLA[self.prioritas]\n",
"jelas": "@property cocok untuk nilai turunan yang tidak butuh parameter (sla), sedangkan umur bergantung pada waktu 'sekarang' sehingga dibuat method biasa.",
"kompleksitas": "",
"petunjuk": [
"datetime.strptime(teks, \"%Y-%m-%d %H:%M\") untuk mengubah teks. Selisih dua datetime adalah timedelta.",
"timedelta.total_seconds() / 3600 = jam. Simpan batas SLA di dict, lalu @property sla mengambil SLA[self.prioritas].",
"Kerangka solusinya:\nfrom dataclasses import dataclass\nfrom datetime import datetime\n\n…\n…\n\n\n…\nclass Tiket:\n    …\n    …\n    …\n    …\n\n    def umur_jam(self, sekarang: str) -> float:\n        …\n        return …\n\n    …\n    def sla(self) -> int:\n        return …"
],
"tes": [
[
"t = Tiket(1, \"Login gagal\", \"tinggi\", \"2026-11-24 08:00\")\nhasil = (t.umur_jam(\"2026-11-24 13:30\"), t.sla)",
"(5.5, 4)"
],
[
"hasil = Tiket(2, \"Printer\", \"rendah\", \"2026-11-20 09:15\").umur_jam(\"2026-11-24 09:15\")",
"96.0"
],
[
"hasil = (Tiket(3, \"a\", \"sedang\", \"2026-11-24 00:00\").sla, Tiket(3, \"a\", \"sedang\", \"2026-11-24 00:00\") == Tiket(3, \"a\", \"sedang\", \"2026-11-24 00:00\"))",
"(24, True)"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "uji-py-4-b",
"judul": "Bagian B: Generator antrean",
"kategori": "studi",
"tingkat": 3,
"fungsi": "antrean",
"cerita": "Lanjutan dari bagian A. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Buat generator <code>antrean(tiket)</code> yang menghasilkan tiket satu per satu: prioritas tinggi dulu, lalu sedang, lalu rendah; di prioritas yang sama, tiket yang <b>dibuat lebih awal</b> dulu, dan bila sama juga, id lebih kecil dulu. Tes mengambil <code>[t.id for t in antrean(...)]</code>.",
"awal": "from dataclasses import dataclass\nfrom datetime import datetime\n\nSLA = {\"tinggi\": 4, \"sedang\": 24, \"rendah\": 72}\nFORMAT = \"%Y-%m-%d %H:%M\"\n\n\n@dataclass\nclass Tiket:\n    id: int\n    judul: str\n    prioritas: str\n    dibuat: str\n\n    def umur_jam(self, sekarang: str) -> float:\n        selisih = datetime.strptime(sekarang, FORMAT) - datetime.strptime(self.dibuat, FORMAT)\n        return round(selisih.total_seconds() / 3600, 1)\n\n    @property\n    def sla(self) -> int:\n        return SLA[self.prioritas]\n\n\ndef antrean(tiket):\n    pass\n",
"solusi": "from dataclasses import dataclass\nfrom datetime import datetime\n\nSLA = {\"tinggi\": 4, \"sedang\": 24, \"rendah\": 72}\nFORMAT = \"%Y-%m-%d %H:%M\"\n\n\n@dataclass\nclass Tiket:\n    id: int\n    judul: str\n    prioritas: str\n    dibuat: str\n\n    def umur_jam(self, sekarang: str) -> float:\n        selisih = datetime.strptime(sekarang, FORMAT) - datetime.strptime(self.dibuat, FORMAT)\n        return round(selisih.total_seconds() / 3600, 1)\n\n    @property\n    def sla(self) -> int:\n        return SLA[self.prioritas]\n\n\nURUTAN = {\"tinggi\": 0, \"sedang\": 1, \"rendah\": 2}\n\n\ndef antrean(tiket):\n    for t in sorted(tiket, key=lambda t: (URUTAN[t.prioritas], t.dibuat, t.id)):\n        yield t\n",
"jelas": "Tes 3 memeriksa bahwa fungsinya generator sungguhan. Dict 'urutan' adalah cara bersih mengurutkan kategori yang bukan abjad.",
"kompleksitas": "",
"petunjuk": [
"Ubah prioritas menjadi angka urutan dengan dict, lalu sorted dengan key tuple (urutan, dibuat, id).",
"Teks \"YYYY-MM-DD HH:MM\" bisa dibandingkan langsung. Pakai yield di dalam for supaya fungsinya menjadi generator.",
"Kerangka solusinya:\nfrom dataclasses import dataclass\nfrom datetime import datetime\n\n…\n…\n\n\n…\nclass Tiket:\n    …\n    …\n    …\n    …\n\n    def umur_jam(self, sekarang: str) -> float:\n        …\n        return …\n\n    …\n    def sla(self) -> int:\n        return …\n\n\n…\n\n\ndef antrean(tiket):\n    for …:\n        …"
],
"tes": [
[
"T = [Tiket(1, \"a\", \"rendah\", \"2026-11-20 08:00\"), Tiket(2, \"b\", \"tinggi\", \"2026-11-24 10:00\"), Tiket(3, \"c\", \"sedang\", \"2026-11-23 09:00\"), Tiket(4, \"d\", \"tinggi\", \"2026-11-24 07:00\"), Tiket(5, \"e\", \"tinggi\", \"2026-11-24 07:00\")]\nhasil = [t.id for t in antrean(T)]",
"[4, 5, 2, 3, 1]"
],
[
"hasil = list(antrean([]))",
"[]"
],
[
"import types\nhasil = isinstance(antrean([]), types.GeneratorType)",
"True"
]
],
"contoh": 2,
"pre": "",
"awal_baru": "def antrean(tiket):\n    pass\n"
},
{
"id": "uji-py-4-c",
"judul": "Bagian C: Ringkasan SLA terlewat",
"kategori": "studi",
"tingkat": 3,
"fungsi": "ringkas_sla",
"cerita": "Lanjutan dari bagian B. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Buat <code>ringkas_sla(tiket, sekarang)</code> yang mengembalikan dict <code>{\"terlewat\": [id, ...], \"per_prioritas\": {prioritas: jumlah}}</code>. <code>terlewat</code> berisi id tiket yang umurnya <b>lebih dari</b> SLA, dalam urutan antrean (bagian B). <code>per_prioritas</code> menghitung tiket terlewat per prioritas (prioritas tanpa tiket terlewat tidak dimasukkan). Pakai <code>collections.Counter</code>.",
"awal": "from dataclasses import dataclass\nfrom datetime import datetime\n\nSLA = {\"tinggi\": 4, \"sedang\": 24, \"rendah\": 72}\nFORMAT = \"%Y-%m-%d %H:%M\"\n\n\n@dataclass\nclass Tiket:\n    id: int\n    judul: str\n    prioritas: str\n    dibuat: str\n\n    def umur_jam(self, sekarang: str) -> float:\n        selisih = datetime.strptime(sekarang, FORMAT) - datetime.strptime(self.dibuat, FORMAT)\n        return round(selisih.total_seconds() / 3600, 1)\n\n    @property\n    def sla(self) -> int:\n        return SLA[self.prioritas]\n\n\nURUTAN = {\"tinggi\": 0, \"sedang\": 1, \"rendah\": 2}\n\n\ndef antrean(tiket):\n    for t in sorted(tiket, key=lambda t: (URUTAN[t.prioritas], t.dibuat, t.id)):\n        yield t\n\n\ndef ringkas_sla(tiket, sekarang):\n    pass\n",
"solusi": "from dataclasses import dataclass\nfrom datetime import datetime\n\nSLA = {\"tinggi\": 4, \"sedang\": 24, \"rendah\": 72}\nFORMAT = \"%Y-%m-%d %H:%M\"\n\n\n@dataclass\nclass Tiket:\n    id: int\n    judul: str\n    prioritas: str\n    dibuat: str\n\n    def umur_jam(self, sekarang: str) -> float:\n        selisih = datetime.strptime(sekarang, FORMAT) - datetime.strptime(self.dibuat, FORMAT)\n        return round(selisih.total_seconds() / 3600, 1)\n\n    @property\n    def sla(self) -> int:\n        return SLA[self.prioritas]\n\n\nURUTAN = {\"tinggi\": 0, \"sedang\": 1, \"rendah\": 2}\n\n\ndef antrean(tiket):\n    for t in sorted(tiket, key=lambda t: (URUTAN[t.prioritas], t.dibuat, t.id)):\n        yield t\n\n\nfrom collections import Counter\n\n\ndef ringkas_sla(tiket, sekarang):\n    lewat = [t for t in antrean(tiket) if t.umur_jam(sekarang) > t.sla]\n    return {\"terlewat\": [t.id for t in lewat], \"per_prioritas\": dict(Counter(t.prioritas for t in lewat))}\n",
"jelas": "Tes terakhir: tepat 4 jam untuk prioritas tinggi BELUM terlewat (syaratnya lebih dari). Bagian ini memakai dataclass (A), generator (B), dan Counter sekaligus.",
"kompleksitas": "",
"petunjuk": [
"Saring dari antrean(tiket) supaya urutannya otomatis benar: t.umur_jam(sekarang) > t.sla.",
"Counter(t.prioritas for t in lewat) lalu ubah ke dict biasa.",
"Kerangka solusinya:\nfrom dataclasses import dataclass\nfrom datetime import datetime\n\n…\n…\n\n\n…\nclass Tiket:\n    …\n    …\n    …\n    …\n\n    def umur_jam(self, sekarang: str) -> float:\n        …\n        return …\n\n    …\n    def sla(self) -> int:\n        return …\n\n\n…\n\n\ndef antrean(tiket):\n    for …:\n        …\n\n\nfrom collections import Counter\n\n\ndef ringkas_sla(tiket, sekarang):\n    …\n    return …"
],
"tes": [
[
"T = [Tiket(1, \"a\", \"rendah\", \"2026-11-20 08:00\"), Tiket(2, \"b\", \"tinggi\", \"2026-11-24 10:00\"), Tiket(3, \"c\", \"sedang\", \"2026-11-23 09:00\"), Tiket(4, \"d\", \"tinggi\", \"2026-11-24 07:00\"), Tiket(5, \"e\", \"tinggi\", \"2026-11-24 07:00\")]\nhasil = ringkas_sla(T, \"2026-11-24 12:00\")",
"{'terlewat': [4, 5, 3, 1], 'per_prioritas': {'tinggi': 2, 'sedang': 1, 'rendah': 1}}"
],
[
"hasil = ringkas_sla([], \"2026-11-24 12:00\")",
"{'terlewat': [], 'per_prioritas': {}}"
],
[
"hasil = ringkas_sla([Tiket(9, \"x\", \"tinggi\", \"2026-11-24 08:00\")], \"2026-11-24 12:00\")",
"{'terlewat': [], 'per_prioritas': {}}"
]
],
"contoh": 2,
"pre": "",
"awal_baru": "def ringkas_sla(tiket, sekarang):\n    pass\n"
}
],
"ujian": true,
"cakupan": "Bab 16–20: fungsi lanjut, generator, dataclass, pustaka standar, type hint"
},
{
"id": "uji-ct-1",
"topik": "ct",
"setelah": "model",
"judul": "Impor pelanggan ke Odoo",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "# Pola kerja: fungsi kecil yang saling memanggil\ndef bersihkan(teks):\n    return teks.strip().lower()\n\ndef hitung(daftar):\n    return {k: daftar.count(k) for k in set(daftar)}\n\ndef laporan(teks_mentah):\n    data = [bersihkan(t) for t in teks_mentah]   # memakai fungsi A\n    hasil = hitung(data)                          # memakai fungsi B\n    return sorted(hasil.items())\n\nprint(laporan([\" Kopi\", \"teh \", \"KOPI\"]))",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"keluaran": "[('kopi', 2), ('teh', 1)]"
},
"langkah": [
{
"id": "uji-ct-1-a",
"judul": "Bagian A: Membaca dan membersihkan CSV",
"kategori": "studi",
"tingkat": 2,
"fungsi": "baca_pelanggan",
"cerita": "Klien mengirim file CSV pelanggan dari sistem lama. Datanya kotor: spasi berlebih, email huruf besar, nomor telepon beragam, dan ada pelanggan kembar. Kamu menyiapkan data sebelum dibuat di model res.partner.",
"soal": "Buat <code>baca_pelanggan(teks_csv)</code> (header <code>nama,email,telepon</code>). Kembalikan list dict <code>{\"name\", \"email\", \"phone\"}</code>: nama di-<code>strip()</code> lalu <code>title()</code>; email di-strip dan huruf kecil (kosong → None); telepon: buang semua selain angka, awalan 0 diganti 62, beri awalan +, dan None bila hasilnya kosong atau panjang angkanya di luar 10–15. Baris tanpa nama dilewati.",
"awal": "def baca_pelanggan(teks_csv):\n    pass\n",
"solusi": "import csv, io, re\n\n\ndef rapikan_hp(teks):\n    angka = re.sub(r\"\\D\", \"\", teks or \"\")\n    if angka.startswith(\"0\"):\n        angka = \"62\" + angka[1:]\n    return \"+\" + angka if 10 <= len(angka) <= 15 else None\n\n\ndef baca_pelanggan(teks_csv):\n    hasil = []\n    for b in csv.DictReader(io.StringIO(teks_csv)):\n        nama = (b.get(\"nama\") or \"\").strip()\n        if not nama:\n            continue\n        email = (b.get(\"email\") or \"\").strip().lower() or None\n        hasil.append({\"name\": nama.title(), \"email\": email, \"phone\": rapikan_hp(b.get(\"telepon\"))})\n    return hasil\n",
"jelas": "Membersihkan data sebelum impor jauh lebih murah daripada membersihkan kontak ganda di CRM. Fungsi kecil rapikan_hp bisa diuji terpisah.",
"kompleksitas": "",
"petunjuk": [
"csv.DictReader(io.StringIO(teks)) memberi dict per baris dan aman untuk nilai berkoma di dalam kutip.",
"Buat fungsi kecil rapikan_hp() seperti tantangan normalisasi telepon. Ekspresi teks or None mengubah teks kosong menjadi None.",
"Kerangka solusinya:\nimport csv, io, re\n\n\ndef rapikan_hp(teks):\n    …\n    if …:\n        …\n    return …\n\n\ndef baca_pelanggan(teks_csv):\n    …\n    for …:\n        …\n        if …:\n            …\n        …\n        …\n    return …"
],
"tes": [
[
"baca_pelanggan(\"nama,email,telepon\\n  budi santoso ,Budi@Mail.COM ,0812-3456-7890\\nANI,,021 555\\n,x@y.z,0811111111\\n\\\"lia, s.kom\\\",lia@a.id,+62 811 2222 3333\")",
"[{'name': 'Budi Santoso', 'email': 'budi@mail.com', 'phone': '+6281234567890'}, {'name': 'Ani', 'email': None, 'phone': None}, {'name': 'Lia, S.Kom', 'email': 'lia@a.id', 'phone': '+6281122223333'}]"
],
[
"baca_pelanggan(\"nama,email,telepon\\n\")",
"[]"
],
[
"baca_pelanggan(\"nama,email,telepon\\nTono,tono@x.id,\")",
"[{'name': 'Tono', 'email': 'tono@x.id', 'phone': None}]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": ""
},
{
"id": "uji-ct-1-b",
"judul": "Bagian B: Mendeteksi pelanggan kembar",
"kategori": "studi",
"tingkat": 3,
"fungsi": "kembar_email",
"cerita": "Lanjutan dari bagian A. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Buat <code>kembar_email(pelanggan)</code> (hasil bagian A) yang mengembalikan dict <code>{email: [nama, ...]}</code> hanya untuk email yang dipakai lebih dari satu pelanggan. Nama dalam urutan kemunculan. Email None diabaikan. Harus O(n).",
"awal": "import csv, io, re\n\n\ndef rapikan_hp(teks):\n    angka = re.sub(r\"\\D\", \"\", teks or \"\")\n    if angka.startswith(\"0\"):\n        angka = \"62\" + angka[1:]\n    return \"+\" + angka if 10 <= len(angka) <= 15 else None\n\n\ndef baca_pelanggan(teks_csv):\n    hasil = []\n    for b in csv.DictReader(io.StringIO(teks_csv)):\n        nama = (b.get(\"nama\") or \"\").strip()\n        if not nama:\n            continue\n        email = (b.get(\"email\") or \"\").strip().lower() or None\n        hasil.append({\"name\": nama.title(), \"email\": email, \"phone\": rapikan_hp(b.get(\"telepon\"))})\n    return hasil\n\n\ndef kembar_email(pelanggan):\n    pass\n",
"solusi": "import csv, io, re\n\n\ndef rapikan_hp(teks):\n    angka = re.sub(r\"\\D\", \"\", teks or \"\")\n    if angka.startswith(\"0\"):\n        angka = \"62\" + angka[1:]\n    return \"+\" + angka if 10 <= len(angka) <= 15 else None\n\n\ndef baca_pelanggan(teks_csv):\n    hasil = []\n    for b in csv.DictReader(io.StringIO(teks_csv)):\n        nama = (b.get(\"nama\") or \"\").strip()\n        if not nama:\n            continue\n        email = (b.get(\"email\") or \"\").strip().lower() or None\n        hasil.append({\"name\": nama.title(), \"email\": email, \"phone\": rapikan_hp(b.get(\"telepon\"))})\n    return hasil\n\n\ndef kembar_email(pelanggan):\n    per_email = {}\n    for p in pelanggan:\n        if p[\"email\"]:\n            per_email.setdefault(p[\"email\"], []).append(p[\"name\"])\n    return {e: n for e, n in per_email.items() if len(n) > 1}\n",
"jelas": "Pengelompokan dengan dict sekali jalan (O(n)) jauh lebih cepat daripada membandingkan setiap pasangan pelanggan (O(n²)) untuk ribuan kontak.",
"kompleksitas": "",
"petunjuk": [
"Kelompokkan dengan dict email → list nama (setdefault).",
"Saring kelompok yang panjangnya > 1 dengan dict comprehension.",
"Kerangka solusinya:\nimport csv, io, re\n\n\ndef rapikan_hp(teks):\n    …\n    if …:\n        …\n    return …\n\n\ndef baca_pelanggan(teks_csv):\n    …\n    for …:\n        …\n        if …:\n            …\n        …\n        …\n    return …\n\n\ndef kembar_email(pelanggan):\n    …\n    for …:\n        if …:\n            …\n    return …"
],
"tes": [
[
"kembar_email(baca_pelanggan(\"nama,email,telepon\\nBudi,budi@mail.com,\\nBUDI S,Budi@Mail.com ,\\nAni,,\\nTono,,\\nCita,cita@x.id,\"))",
"{'budi@mail.com': ['Budi', 'Budi S']}"
],
[
"kembar_email([])",
"{}"
],
[
"kembar_email([{\"name\": \"A\", \"email\": \"a@x\", \"phone\": None}, {\"name\": \"B\", \"email\": \"b@x\", \"phone\": None}])",
"{}"
]
],
"contoh": 2,
"pre": "",
"awal_baru": "def kembar_email(pelanggan):\n    pass\n"
},
{
"id": "uji-ct-1-c",
"judul": "Bagian C: vals untuk res.partner",
"kategori": "studi",
"tingkat": 3,
"fungsi": "vals_partner",
"cerita": "Lanjutan dari bagian B. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Buat <code>vals_partner(teks_csv, tag_id)</code> yang memakai bagian A, lalu mengembalikan list dict vals siap <code>create()</code>: kunci <code>name</code>, <code>email</code> (hanya bila ada), <code>phone</code> (hanya bila ada), dan <code>category_id</code> = <code>[(6, 0, [tag_id])]</code>. Untuk email kembar, hanya pelanggan <b>pertama</b> yang dibuat.",
"awal": "import csv, io, re\n\n\ndef rapikan_hp(teks):\n    angka = re.sub(r\"\\D\", \"\", teks or \"\")\n    if angka.startswith(\"0\"):\n        angka = \"62\" + angka[1:]\n    return \"+\" + angka if 10 <= len(angka) <= 15 else None\n\n\ndef baca_pelanggan(teks_csv):\n    hasil = []\n    for b in csv.DictReader(io.StringIO(teks_csv)):\n        nama = (b.get(\"nama\") or \"\").strip()\n        if not nama:\n            continue\n        email = (b.get(\"email\") or \"\").strip().lower() or None\n        hasil.append({\"name\": nama.title(), \"email\": email, \"phone\": rapikan_hp(b.get(\"telepon\"))})\n    return hasil\n\n\ndef kembar_email(pelanggan):\n    per_email = {}\n    for p in pelanggan:\n        if p[\"email\"]:\n            per_email.setdefault(p[\"email\"], []).append(p[\"name\"])\n    return {e: n for e, n in per_email.items() if len(n) > 1}\n\n\ndef vals_partner(teks_csv, tag_id):\n    pass\n",
"solusi": "import csv, io, re\n\n\ndef rapikan_hp(teks):\n    angka = re.sub(r\"\\D\", \"\", teks or \"\")\n    if angka.startswith(\"0\"):\n        angka = \"62\" + angka[1:]\n    return \"+\" + angka if 10 <= len(angka) <= 15 else None\n\n\ndef baca_pelanggan(teks_csv):\n    hasil = []\n    for b in csv.DictReader(io.StringIO(teks_csv)):\n        nama = (b.get(\"nama\") or \"\").strip()\n        if not nama:\n            continue\n        email = (b.get(\"email\") or \"\").strip().lower() or None\n        hasil.append({\"name\": nama.title(), \"email\": email, \"phone\": rapikan_hp(b.get(\"telepon\"))})\n    return hasil\n\n\ndef kembar_email(pelanggan):\n    per_email = {}\n    for p in pelanggan:\n        if p[\"email\"]:\n            per_email.setdefault(p[\"email\"], []).append(p[\"name\"])\n    return {e: n for e, n in per_email.items() if len(n) > 1}\n\n\ndef vals_partner(teks_csv, tag_id):\n    hasil, sudah = [], set()\n    for p in baca_pelanggan(teks_csv):\n        if p[\"email\"]:\n            if p[\"email\"] in sudah:\n                continue\n            sudah.add(p[\"email\"])\n        vals = {\"name\": p[\"name\"], \"category_id\": [(6, 0, [tag_id])]}\n        if p[\"email\"]:\n            vals[\"email\"] = p[\"email\"]\n        if p[\"phone\"]:\n            vals[\"phone\"] = p[\"phone\"]\n        hasil.append(vals)\n    return hasil\n",
"jelas": "(6, 0, [ids]) = Command.set(ids): mengisi Many2many category_id (tag pelanggan). Tidak menyertakan kunci kosong mencegah data lama tertimpa False saat write.",
"kompleksitas": "",
"petunjuk": [
"Panggil baca_pelanggan, simpan email yang sudah dipakai di set.",
"Bangun vals mulai dari name dan category_id, lalu tambahkan email/phone hanya bila ada nilainya.",
"Kerangka solusinya:\nimport csv, io, re\n\n\ndef rapikan_hp(teks):\n    …\n    if …:\n        …\n    return …\n\n\ndef baca_pelanggan(teks_csv):\n    …\n    for …:\n        …\n        if …:\n            …\n        …\n        …\n    return …\n\n\ndef kembar_email(pelanggan):\n    …\n    for …:\n        if …:\n            …\n    return …\n\n\ndef vals_partner(teks_csv, tag_id):\n    …\n    for …:\n        if …:\n            if …:\n                …\n            …\n        …\n        if …:\n            …\n        if …:\n            …\n        …\n    return …"
],
"tes": [
[
"vals_partner(\"nama,email,telepon\\nBudi,budi@mail.com,0812-3456-7890\\nBUDI S,Budi@Mail.com,\\nAni,,\", 4)",
"[{'name': 'Budi', 'category_id': [(6, 0, [4])], 'email': 'budi@mail.com', 'phone': '+6281234567890'}, {'name': 'Ani', 'category_id': [(6, 0, [4])]}]"
],
[
"vals_partner(\"nama,email,telepon\\n\", 1)",
"[]"
],
[
"vals_partner(\"nama,email,telepon\\nTono,,021\", 2)",
"[{'name': 'Tono', 'category_id': [(6, 0, [2])]}]"
]
],
"contoh": 2,
"pre": "",
"awal_baru": "def vals_partner(teks_csv, tag_id):\n    pass\n"
}
],
"ujian": true,
"cakupan": "Bab 1–5: strategi, membaca kode, algoritma, otomasi data, model & field"
},
{
"id": "uji-ct-2",
"topik": "ct",
"setelah": "security",
"judul": "Modul perpustakaan mini",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "# Pola kerja: fungsi kecil yang saling memanggil\ndef bersihkan(teks):\n    return teks.strip().lower()\n\ndef hitung(daftar):\n    return {k: daftar.count(k) for k in set(daftar)}\n\ndef laporan(teks_mentah):\n    data = [bersihkan(t) for t in teks_mentah]   # memakai fungsi A\n    hasil = hitung(data)                          # memakai fungsi B\n    return sorted(hasil.items())\n\nprint(laporan([\" Kopi\", \"teh \", \"KOPI\"]))",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"keluaran": "[('kopi', 2), ('teh', 1)]"
},
"langkah": [
{
"id": "uji-ct-2-a",
"judul": "Bagian A: _compute_status",
"kategori": "studi",
"tingkat": 2,
"fungsi": "_compute_status",
"cerita": "Perpustakaan kampus memakai Odoo. Kamu menulis logika model library.loan: status otomatis, tombol pengembalian, dan rekap per anggota. Data memakai recordset tiruan; HARI_INI sudah tersedia.",
"soal": "Tulis <code>_compute_status(self)</code> untuk peminjaman (<code>date_due</code>, <code>date_return</code> teks ISO atau False, <code>fee_per_day</code>). Isi <code>loan.state</code>: <code>\"returned\"</code> bila sudah kembali, <code>\"late\"</code> bila belum kembali dan <code>HARI_INI</code> &gt; date_due, selain itu <code>\"borrowed\"</code>. Isi juga <code>loan.fine</code> = hari terlambat (terhadap date_return, atau HARI_INI bila belum kembali; minimal 0) × fee_per_day.",
"awal": "def _compute_status(self):\n    for loan in self:\n        pass\n",
"solusi": "from datetime import date\n\n\ndef _hari_telat(loan):\n    akhir = date.fromisoformat(loan.date_return or HARI_INI)\n    return max(0, (akhir - date.fromisoformat(loan.date_due)).days)\n\n\ndef _compute_status(self):\n    for loan in self:\n        if loan.date_return:\n            loan.state = \"returned\"\n        elif HARI_INI > loan.date_due:\n            loan.state = \"late\"\n        else:\n            loan.state = \"borrowed\"\n        loan.fine = _hari_telat(loan) * loan.fee_per_day\n",
"jelas": "Jatuh tempo tepat hari ini belum terlambat (tes 2). Pengembalian terlambat tetap kena denda walau statusnya returned.",
"kompleksitas": "",
"petunjuk": [
"Urutan if: returned dulu, lalu late, lalu borrowed. Teks ISO bisa dibandingkan dengan >.",
"Buat fungsi bantu _hari_telat(loan) yang memakai date_return or HARI_INI.",
"Kerangka solusinya:\nfrom datetime import date\n\n\ndef _hari_telat(loan):\n    …\n    return …\n\n\ndef _compute_status(self):\n    for …:\n        if …:\n            …\n        elif …:\n            …\n        else:\n            …\n        …"
],
"tes": [
[
"a = Record(date_due=\"2026-11-30\", date_return=False, fee_per_day=1000)\nb = Record(date_due=\"2026-11-20\", date_return=False, fee_per_day=1000)\nc = Record(date_due=\"2026-11-20\", date_return=\"2026-11-22\", fee_per_day=1000)\n_compute_status(rs(a, b, c))\nhasil = [(x.state, x.fine) for x in (a, b, c)]",
"[('borrowed', 0), ('late', 4000), ('returned', 2000)]"
],
[
"d = Record(date_due=\"2026-11-24\", date_return=False, fee_per_day=500)\n_compute_status(rs(d))\nhasil = (d.state, d.fine)",
"('borrowed', 0)"
],
[
"_compute_status(rs())\nhasil = \"ok\"",
"'ok'"
]
],
"contoh": 2,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n\nHARI_INI = \"2026-11-24\"\n",
"awal_baru": ""
},
{
"id": "uji-ct-2-b",
"judul": "Bagian B: action_return",
"kategori": "studi",
"tingkat": 3,
"fungsi": "action_return",
"cerita": "Lanjutan dari bagian A. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Tulis <code>action_return(self)</code> (tombol \"Kembalikan\"). Periksa semua record dulu: jika ada yang sudah <code>returned</code>, lempar <code>UserError</code> dan tidak ada yang berubah. Selain itu isi <code>date_return = HARI_INI</code> untuk semua, jalankan <code>_compute_status</code>, dan kembalikan total denda yang harus dibayar (jumlah <code>fine</code>).",
"awal": "from datetime import date\n\n\ndef _hari_telat(loan):\n    akhir = date.fromisoformat(loan.date_return or HARI_INI)\n    return max(0, (akhir - date.fromisoformat(loan.date_due)).days)\n\n\ndef _compute_status(self):\n    for loan in self:\n        if loan.date_return:\n            loan.state = \"returned\"\n        elif HARI_INI > loan.date_due:\n            loan.state = \"late\"\n        else:\n            loan.state = \"borrowed\"\n        loan.fine = _hari_telat(loan) * loan.fee_per_day\n\n\ndef action_return(self):\n    pass\n",
"solusi": "from datetime import date\n\n\ndef _hari_telat(loan):\n    akhir = date.fromisoformat(loan.date_return or HARI_INI)\n    return max(0, (akhir - date.fromisoformat(loan.date_due)).days)\n\n\ndef _compute_status(self):\n    for loan in self:\n        if loan.date_return:\n            loan.state = \"returned\"\n        elif HARI_INI > loan.date_due:\n            loan.state = \"late\"\n        else:\n            loan.state = \"borrowed\"\n        loan.fine = _hari_telat(loan) * loan.fee_per_day\n\n\ndef action_return(self):\n    _compute_status(self)\n    if any(loan.state == \"returned\" for loan in self):\n        raise UserError(\"Ada buku yang sudah dikembalikan.\")\n    for loan in self:\n        loan.date_return = HARI_INI\n    _compute_status(self)\n    return sum(self.mapped(\"fine\"))\n",
"jelas": "Memeriksa semua record sebelum menulis mencegah perubahan setengah jalan. Mengembalikan nilai dari action berguna untuk ditampilkan atau dites.",
"kompleksitas": "",
"petunjuk": [
"Hitung status dulu (_compute_status), lalu cek dengan any(...) sebelum mengubah apa pun.",
"Setelah mengisi date_return, hitung ulang status dan jumlahkan fine dengan mapped(\"fine\").",
"Kerangka solusinya:\nfrom datetime import date\n\n\ndef _hari_telat(loan):\n    …\n    return …\n\n\ndef _compute_status(self):\n    for …:\n        if …:\n            …\n        elif …:\n            …\n        else:\n            …\n        …\n\n\ndef action_return(self):\n    …\n    if …:\n        …\n    for …:\n        …\n    …\n    return …"
],
"tes": [
[
"a = Record(date_due=\"2026-11-20\", date_return=False, fee_per_day=1000)\nb = Record(date_due=\"2026-11-30\", date_return=False, fee_per_day=1000)\ntotal = action_return(rs(a, b))\nhasil = (total, a.state, b.state, a.date_return)",
"(4000, 'returned', 'returned', '2026-11-24')"
],
[
"a = Record(date_due=\"2026-11-20\", date_return=False, fee_per_day=1000)\nc = Record(date_due=\"2026-11-20\", date_return=\"2026-11-21\", fee_per_day=1000)\ntry:\n    action_return(rs(a, c))\n    hasil = \"tidak error\"\nexcept UserError:\n    hasil = (\"UserError\", a.date_return)",
"('UserError', False)"
],
[
"hasil = action_return(rs())",
"0"
]
],
"contoh": 2,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n\nHARI_INI = \"2026-11-24\"\n",
"awal_baru": "def action_return(self):\n    pass\n"
},
{
"id": "uji-ct-2-c",
"judul": "Bagian C: Rekap per anggota",
"kategori": "studi",
"tingkat": 3,
"fungsi": "rekap_anggota",
"cerita": "Lanjutan dari bagian B. Kode bagian sebelumnya sudah ada di editor; tambahkan kodemu di bawahnya.",
"soal": "Tulis <code>rekap_anggota(loans)</code>. Jalankan <code>_compute_status</code>, lalu kembalikan list dict <code>{\"anggota\": nama, \"pinjam\": jumlah, \"terlambat\": jumlah state late, \"denda\": total fine}</code> per <code>member_id.name</code>, diurutkan dari denda terbesar (seri: nama abjad).",
"awal": "from datetime import date\n\n\ndef _hari_telat(loan):\n    akhir = date.fromisoformat(loan.date_return or HARI_INI)\n    return max(0, (akhir - date.fromisoformat(loan.date_due)).days)\n\n\ndef _compute_status(self):\n    for loan in self:\n        if loan.date_return:\n            loan.state = \"returned\"\n        elif HARI_INI > loan.date_due:\n            loan.state = \"late\"\n        else:\n            loan.state = \"borrowed\"\n        loan.fine = _hari_telat(loan) * loan.fee_per_day\n\n\ndef action_return(self):\n    _compute_status(self)\n    if any(loan.state == \"returned\" for loan in self):\n        raise UserError(\"Ada buku yang sudah dikembalikan.\")\n    for loan in self:\n        loan.date_return = HARI_INI\n    _compute_status(self)\n    return sum(self.mapped(\"fine\"))\n\n\ndef rekap_anggota(loans):\n    pass\n",
"solusi": "from datetime import date\n\n\ndef _hari_telat(loan):\n    akhir = date.fromisoformat(loan.date_return or HARI_INI)\n    return max(0, (akhir - date.fromisoformat(loan.date_due)).days)\n\n\ndef _compute_status(self):\n    for loan in self:\n        if loan.date_return:\n            loan.state = \"returned\"\n        elif HARI_INI > loan.date_due:\n            loan.state = \"late\"\n        else:\n            loan.state = \"borrowed\"\n        loan.fine = _hari_telat(loan) * loan.fee_per_day\n\n\ndef action_return(self):\n    _compute_status(self)\n    if any(loan.state == \"returned\" for loan in self):\n        raise UserError(\"Ada buku yang sudah dikembalikan.\")\n    for loan in self:\n        loan.date_return = HARI_INI\n    _compute_status(self)\n    return sum(self.mapped(\"fine\"))\n\n\ndef rekap_anggota(loans):\n    _compute_status(loans)\n    rekap = {}\n    for loan in loans:\n        nama = loan.member_id.name\n        r = rekap.setdefault(nama, {\"anggota\": nama, \"pinjam\": 0, \"terlambat\": 0, \"denda\": 0})\n        r[\"pinjam\"] += 1\n        r[\"terlambat\"] += loan.state == \"late\"\n        r[\"denda\"] += loan.fine\n    return sorted(rekap.values(), key=lambda r: (-r[\"denda\"], r[\"anggota\"]))\n",
"jelas": "Di Odoo sungguhan rekap ini ditulis dengan _read_group([], ['member_id'], ['__count', 'fine:sum']) agar dihitung database, tetapi logikanya sama.",
"kompleksitas": "",
"petunjuk": [
"Kelompokkan per loan.member_id.name dengan dict (setdefault), seperti read_group.",
"True bernilai 1 saat dijumlahkan: r[\"terlambat\"] += loan.state == \"late\".",
"Kerangka solusinya:\nfrom datetime import date\n\n\ndef _hari_telat(loan):\n    …\n    return …\n\n\ndef _compute_status(self):\n    for …:\n        if …:\n            …\n        elif …:\n            …\n        else:\n            …\n        …\n\n\ndef action_return(self):\n    …\n    if …:\n        …\n    for …:\n        …\n    …\n    return …\n\n\ndef rekap_anggota(loans):\n    …\n    …\n    for …:\n        …\n        …\n        …\n        …\n        …\n    return …"
],
"tes": [
[
"ani, budi = Record(name=\"Ani\"), Record(name=\"Budi\")\nL = rs(Record(member_id=ani, date_due=\"2026-11-20\", date_return=False, fee_per_day=1000), Record(member_id=budi, date_due=\"2026-11-30\", date_return=False, fee_per_day=1000), Record(member_id=ani, date_due=\"2026-11-10\", date_return=\"2026-11-12\", fee_per_day=500), Record(member_id=budi, date_due=\"2026-11-22\", date_return=False, fee_per_day=2000))\nhasil = rekap_anggota(L)",
"[{'anggota': 'Ani', 'pinjam': 2, 'terlambat': 1, 'denda': 5000}, {'anggota': 'Budi', 'pinjam': 2, 'terlambat': 1, 'denda': 4000}]"
],
[
"hasil = rekap_anggota(rs())",
"[]"
],
[
"z, y = Record(name=\"Zaki\"), Record(name=\"Yani\")\nL = rs(Record(member_id=z, date_due=\"2026-12-01\", date_return=False, fee_per_day=1), Record(member_id=y, date_due=\"2026-12-01\", date_return=False, fee_per_day=1))\nhasil = rekap_anggota(L)",
"[{'anggota': 'Yani', 'pinjam': 1, 'terlambat': 0, 'denda': 0}, {'anggota': 'Zaki', 'pinjam': 1, 'terlambat': 0, 'denda': 0}]"
]
],
"contoh": 2,
"pre": "\nclass ValidationError(Exception):\n    pass\n\nclass UserError(Exception):\n    pass\n\nclass Recordset:\n    \"\"\"Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one.\"\"\"\n    def __init__(self, records=()):\n        self._r = list(records)\n    def __iter__(self):\n        return iter(self._r)\n    def __len__(self):\n        return len(self._r)\n    def __bool__(self):\n        return bool(self._r)\n    def __getitem__(self, i):\n        return self._r[i]\n    def __repr__(self):\n        return \"Recordset(%d record)\" % len(self._r)\n    def filtered(self, fungsi):\n        if isinstance(fungsi, str):\n            return Recordset(r for r in self._r if getattr(r, fungsi))\n        return Recordset(r for r in self._r if fungsi(r))\n    def mapped(self, fungsi):\n        if isinstance(fungsi, str):\n            hasil = []\n            for r in self._r:\n                v = r\n                for bagian in fungsi.split(\".\"):\n                    v = getattr(v, bagian)\n                if isinstance(v, Recordset):\n                    hasil.extend(x for x in v if x not in hasil)\n                else:\n                    hasil.append(v)\n            return hasil\n        return [fungsi(r) for r in self._r]\n    def sorted(self, key=None, reverse=False):\n        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key\n        return Recordset(sorted(self._r, key=k, reverse=reverse))\n    def ensure_one(self):\n        if len(self._r) != 1:\n            raise ValueError(\"Expected singleton: %d record\" % len(self._r))\n        return self\n    def __getattr__(self, nama):\n        # seperti Odoo: atribut recordset berisi satu record = atribut record itu\n        if nama.startswith(\"_\"):\n            raise AttributeError(nama)\n        self.ensure_one()\n        return getattr(self._r[0], nama)\n    def write(self, vals):\n        for r in self._r:\n            r.__dict__.update(vals)\n        return True\n\nclass Record:\n    def __init__(self, **nilai):\n        self.__dict__.update(nilai)\n    def __repr__(self):\n        return \"Record(%s)\" % \", \".join(\"%s=%r\" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))\n\ndef rs(*records):\n    return Recordset(records)\n\nHARI_INI = \"2026-11-24\"\n",
"awal_baru": "def rekap_anggota(loans):\n    pass\n"
}
],
"ujian": true,
"cakupan": "Bab 6–10: compute & constraint, ORM, inheritance & action, view, keamanan"
}
];
