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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
}
];
const STUDI_PY = [
{
"id": "py-dasar",
"topik": "python",
"setelah": "dasar",
"judul": "Mencetak struk belanja",
"contoh": {
"judul": "Contoh: fungsi pertamamu, lalu f-string",
"penjelasan": "<p><b>Semua soal studi kasus berbentuk fungsi</b>, jadi pahami dulu 4 bagian ini:</p>\n<ol>\n<li><code>def</code> = \"aku membuat fungsi\". Setelahnya nama fungsi dan <b>parameter</b> di dalam kurung, diakhiri titik dua.</li>\n<li><b>Parameter</b> (misalnya <code>nama</code>) adalah kotak kosong yang diisi saat fungsi dipanggil. Penilai mengisinya dengan data tes yang berbeda-beda.</li>\n<li>Isi fungsi ditulis <b>menjorok 4 spasi</b>.</li>\n<li><code>return</code> = \"serahkan hasil ini\". Penilai membaca nilai yang di-return, <b>bukan</b> yang di-print. Kode awal berisi <code>pass</code> (\"belum ada isi\"), jadi hasilnya None dan pasti gagal sampai kamu menggantinya dengan return.</li>\n</ol>\n<p>Lalu dua alat teks: <b>f-string</b> (<code>f\"Halo {nama}\"</code>) menyisipkan nilai ke teks, dan <code>{angka:,}</code> memberi pemisah ribuan dengan koma yang bisa diganti titik memakai <code>.replace(\",\", \".\")</code>. Semua istilah lain dijelaskan di kotak <b>📘 Kosakata kode</b> di atas setiap soal.</p>",
"kode": "# 1) membuat fungsi\ndef sapa(nama):                  # def + nama fungsi + (parameter) + titik dua\n    return \"Halo, \" + nama       # 4 spasi, lalu return hasilnya\n\n# 2) memanggil fungsi: parameter nama diisi \"Jauza\", lalu \"Budi\"\nprint(sapa(\"Jauza\"))\nprint(sapa(\"Budi\"))\n\n# 3) fungsi dengan beberapa parameter + f-string + pemisah ribuan\ndef total_rupiah(qty, harga):\n    total = qty * harga\n    return \"Rp \" + f\"{total:,}\".replace(\",\", \".\")\n\nprint(total_rupiah(3, 15000))",
"kunci": "def nama(parameter): membuat fungsi; isinya menjorok 4 spasi; return menyerahkan hasil. Penilai memanggil fungsimu dan membaca nilai return-nya.",
"bahasa": "py",
"keluaran": "Halo, Jauza\nHalo, Budi\nRp 45.000"
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
"awal_baru": "",
"mudah": [
"Kamu menerima sebuah angka, misalnya 1250000.",
"Ubah menjadi teks yang punya titik setiap 3 angka dari belakang: 1.250.000.",
"Tempelkan \"Rp \" (dengan satu spasi) di depannya, lalu kembalikan: \"Rp 1.250.000\".",
"Contoh lain: 500 → \"Rp 500\", 0 → \"Rp 0\"."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima 3 hal: nama barang, jumlah (qty), dan harga satuan.",
"Rapikan nama: buang spasi di awal/akhir, lalu besarkan huruf awal tiap kata (\"  roti  \" → \"Roti\").",
"Hitung total = qty × harga, lalu tulis dengan titik ribuan (36000 → 36.000).",
"Susun jadi satu kalimat: \"2 x Kopi Susu = Rp 36.000\" dan kembalikan."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima berat paket dalam gram, misalnya 2300.",
"Ubah ke kg dan bulatkan KE ATAS: 2300 gram = 2,3 kg → dihitung 3 kg. Tepat 1000 gram = 1 kg.",
"Paket seringan apa pun (bahkan 0 gram) tetap dihitung minimal 1 kg.",
"Biaya = jumlah kg × 9000. Jadi 2300 gram → 3 × 9000 = 27000."
]
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
"awal_baru": "",
"mudah": [
"Tahun kabisat = tahun yang bulan Februarinya 29 hari. Kamu cukup mengembalikan True (kabisat) atau False (bukan).",
"Periksa dengan 3 pertanyaan, berurutan:",
"1) Habis dibagi 400? → kabisat. Contoh 2000 dan 2400.",
"2) Kalau tidak, habis dibagi 100? → BUKAN kabisat. Contoh 1900 dan 2100.",
"3) Kalau tidak, habis dibagi 4? → kabisat. Contoh 2028. Selain itu bukan kabisat (contoh 2026).",
"\"Habis dibagi 4\" di Python ditulis tahun % 4 == 0 (sisa baginya nol). Ketiga pertanyaan bisa digabung dengan and / or."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima nama lengkap, misalnya \"jauza kenar indra fawaid\".",
"Pecah menjadi kata-kata, ambil huruf PERTAMA setiap kata: j, k, i, f.",
"Gabungkan tanpa spasi dan jadikan huruf besar: \"JKIF\".",
"Spasi berlebih (\"  budi   santoso \") tidak boleh menghasilkan huruf kosong: hasilnya \"BS\"."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima email, misalnya \"jauza@gmail.com\". Potong menjadi 2 bagian di tanda @: \"jauza\" dan \"gmail.com\".",
"Bagian depan diganti: huruf pertama + *** + huruf terakhir → \"j***a\".",
"Kalau bagian depan cuma 1–2 huruf (\"ab\"), cukup huruf pertama + *** → \"a***\".",
"Tempel kembali dengan @ dan domain aslinya: \"j***a@gmail.com\"."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima jumlah stok (qty) dan batas minimum.",
"Kalau qty 0 atau kurang → kembalikan \"Habis\".",
"Kalau masih ada tapi kurang dari minimum (3 dari minimum 5) → \"Menipis\".",
"Selain itu (5 dari minimum 5, atau lebih) → \"Aman\". Cek dari kondisi paling parah dulu."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima total belanja, apakah member (True/False), dan nama kota.",
"Langkah 1: kalau total 500.000 atau lebih → ongkir 0, selesai (Batam pun gratis).",
"Langkah 2: kalau tidak, ongkir dasar 10.000 untuk member atau 20.000 untuk bukan member.",
"Langkah 3: kalau kotanya \"Batam\", tambah 5.000. Contoh: member di Batam, belanja 100.000 → 10.000 + 5.000 = 15.000."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima angka n (misalnya 5) dan sampai (misalnya 3).",
"Buat baris untuk i = 1, 2, 3: \"5 x 1 = 5\", \"5 x 2 = 10\", \"5 x 3 = 15\".",
"Kumpulkan semua baris itu ke dalam satu list dan kembalikan list-nya.",
"Kalau sampai = 0, hasilnya list kosong []."
]
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
"awal_baru": "",
"mudah": [
"Bayangkan utang 1.000.000 dengan bunga 0% dan cicilan 250.000 per bulan: setelah 4 bulan lunas → jawabannya 4.",
"Kalau ada bunga, setiap bulan: sisa utang ditambah bunganya dulu, LALU dikurangi cicilan. Ulangi sampai sisa ≤ 0 sambil menghitung bulan.",
"Contoh bunga 10%: utang 1.000.000 → bunga bulan pertama 100.000.",
"Kalau cicilan tidak lebih besar dari bunga bulan pertama (cicilan 100.000 untuk bunga 100.000), utang tidak pernah turun → kembalikan -1."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima list nama buah yang huruf besarnya campur aduk: [\"Rambutan\", \"apel\", \"Mangga\"].",
"Urutkan berdasarkan abjad seolah semuanya huruf kecil: apel, mangga, rambutan.",
"Tapi tulisan aslinya JANGAN diubah. Hasil: [\"apel\", \"Mangga\", \"Rambutan\"]."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima list pasangan (nama, harga), misalnya (\"mangga\", 25000).",
"Urutkan dari harga paling murah ke paling mahal.",
"Kalau dua barang harganya sama, yang namanya duluan menurut abjad ditaruh di depan.",
"Kembalikan nama-namanya saja: [\"rambutan\", \"mangga\", \"apel\"]."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima list pasangan (nama, nilai), misalnya (\"Budi\", 95).",
"Urutkan dari nilai TERTINGGI; kalau nilainya sama, nama diurutkan abjad.",
"Ambil 3 teratas saja dan kembalikan namanya: [\"Budi\", \"Cita\", \"Ani\"].",
"Kalau siswanya kurang dari 3, kembalikan semuanya."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima stok dua gudang, misalnya A = {\"kursi\": 10, \"meja\": 4} dan B = {\"meja\": 6, \"lemari\": 2}.",
"Jumlahkan per barang: kursi 10, meja 4 + 6 = 10, lemari 2.",
"Buat dict BARU untuk hasilnya; dict A dan B tidak boleh ikut berubah."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima daftar pelanggan toko A dan toko B (nama bisa tertulis dua kali).",
"Cari: siapa yang belanja di kedua toko, yang hanya di A, yang hanya di B, dan berapa orang berbeda totalnya.",
"Contoh A = Ani, Budi, Cita; B = Budi, Dodi, Cita → keduanya [Budi, Cita], hanya A [Ani], hanya B [Dodi], total 4 orang.",
"Kembalikan dalam satu dict, setiap list diurutkan abjad."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima list angka, misalnya [4, 9, 1].",
"Cari yang terkecil (1), terbesar (9), dan rata-ratanya (14 ÷ 3 = 4,666… → dibulatkan 4.67).",
"Kembalikan ketiganya sekaligus: (1, 9, 4.67).",
"Kalau list-nya kosong, kembalikan None."
]
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
"awal_baru": "",
"mudah": [
"Gaji kotor = gaji pokok + (jam lembur × tarif lembur).",
"Lalu potong sebesar potongan_persen. Contoh pokok 6.000.000, lembur 4 jam × 50.000 = 200.000, potongan 2% → 6.200.000 × 0,98 = 6.076.000.",
"Jam lembur, tarif, dan potongan boleh tidak diisi: nilai bawaannya 0, 50.000, dan 0.",
"Bulatkan hasil akhirnya menjadi bilangan bulat."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima list teks seperti [\"10\", \"7,5\", \"abc\", \"\"].",
"Ubah setiap teks menjadi angka desimal. Koma dianggap titik: \"7,5\" → 7.5.",
"Teks yang tidak bisa jadi angka (\"abc\", \"\") dilewati, tapi dihitung sebagai gagal.",
"Kembalikan dua hal: list angkanya dan jumlah yang gagal → ([10.0, 7.5], 2)."
]
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
"awal_baru": "",
"mudah": [
"Hitung a ÷ b dan bulatkan 2 angka di belakang koma: 10 ÷ 4 = 2.5.",
"Kalau b nol, jangan sampai programnya error: kembalikan teks \"Error: pembagian dengan nol\".",
"Kalau a atau b bukan angka (misalnya teks \"10\"), kembalikan \"Error: input harus angka\"."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Buat cetakan Produk yang menyimpan nama, harga, dan diskon (persen, bawaan 0).",
"Method harga_akhir() menghitung harga setelah diskon: 20.000 diskon 10% → 18.000.",
"Hasilnya dibulatkan menjadi bilangan bulat."
]
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
"awal_baru": "",
"mudah": [
"ProdukGrosir adalah Produk yang punya satu data tambahan: min_grosir (jumlah minimal untuk harga grosir).",
"total(qty) = harga_akhir × qty. Kalau qty sudah mencapai min_grosir, total dipotong lagi 5%.",
"Contoh: gula 15.000, beli 10 dengan min_grosir 10 → 150.000 dipotong 5% = 142.500.",
"Harga akhir per barang tidak boleh di bawah 1.000 (permen 1.500 diskon 50% tetap 1.000)."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima tanggal berbentuk teks \"2026-11-24\" (tahun-bulan-tanggal).",
"Ubah teks itu menjadi tanggal sungguhan, lalu cari harinya.",
"Kembalikan nama harinya dalam bahasa Indonesia: \"Selasa\"."
]
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
"awal_baru": "",
"mudah": [
"Kurir ada di titik asal, misalnya (0, 0). Ada beberapa lokasi dengan koordinat, misalnya Gudang B di (1, 1).",
"Hitung jarak garis lurus dari kurir ke setiap lokasi (rumus Pythagoras: √(Δx² + Δy²)). Gudang B: √2 ≈ 1.41.",
"Pilih lokasi yang jaraknya paling kecil. Kalau ada yang sama dekat, pilih nama yang abjadnya duluan.",
"Kembalikan (nama, jarak dibulatkan 2 desimal). Kalau tidak ada lokasi sama sekali, kembalikan None."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima tabel penjualan dengan kolom kota, qty, harga.",
"Hitung total tiap baris = qty × harga, lalu jumlahkan per kota.",
"Contoh: Batam (2 × 10.000) + (3 × 10.000) = 50.000.",
"Kembalikan dict {kota: total} dengan angka bulat biasa."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima tabel kategori, produk, qty. Satu produk bisa muncul di beberapa baris.",
"Jumlahkan dulu qty per produk di setiap kategori (Teh 3 + 4 = 7).",
"Untuk setiap kategori, pilih produk dengan total qty terbesar (seri: nama abjad terkecil).",
"Kembalikan dict {kategori: produk}."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"self berisi beberapa order. Setiap order punya beberapa baris, dan setiap baris punya subtotal.",
"Untuk SETIAP order: jumlahkan subtotal semua barisnya dan simpan ke order.amount_total.",
"Contoh: baris 100 dan 250 → amount_total 350. Order tanpa baris → 0."
]
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
"awal_baru": "",
"mudah": [
"self berisi beberapa order yang mau dikonfirmasi (tombol Confirm di Odoo).",
"Langkah 1: periksa SEMUA order dulu. Order yang statusnya bukan \"draft\", atau yang tidak punya baris, membuat proses gagal (raise UserError).",
"Langkah 2: kalau semua lolos, ubah status setiap order menjadi \"sale\" dan kembalikan True.",
"Kenapa diperiksa dulu? Supaya tidak ada order yang sudah terlanjur berubah saat order lain gagal."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kodenya sudah ada di editor tapi hasilnya salah. Tugasmu mencari 2 kesalahannya dan memperbaiki.",
"Seharusnya: rata-rata [80, 90, 70] = 80.0. Jalankan kode awal dan lihat hasilnya ternyata berapa.",
"Petunjuk: perhatikan posisi baris return (masuk ke dalam for atau tidak), lalu coba list kosong."
]
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
"awal_baru": "",
"mudah": [
"Kodenya sudah ada tapi punya 3 kesalahan.",
"Yang benar: catat_order(\"S001\", [\"S003\", \"S001\"]) → [\"S001\", \"S003\"] (tidak dobel, terurut).",
"Setiap panggilan TANPA daftar harus mulai dari list kosong yang baru (panggilan sebelumnya tidak boleh terbawa).",
"Ingat: .sort() tidak mengembalikan list."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima n, misalnya 6.",
"Ambil bilangan genap dari 0 sampai 6: 0, 2, 4, 6. Kuadratkan masing-masing: 0, 4, 16, 36.",
"Kembalikan sebagai list, ditulis dalam satu baris."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima sebuah kalimat dan daftar kata yang diabaikan (stopwords).",
"Pecah kalimat menjadi kata, buang tanda baca .,!? di ujung kata, jadikan huruf kecil.",
"Simpan hanya kata yang panjangnya lebih dari 3 dan bukan stopword.",
"Kembalikan dict {kata: panjang hurufnya}, misalnya {\"odoo\": 4}."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Fungsi ini boleh menerima bagian sebanyak apa pun: gabung(\"SO\", 2026, \"0001\").",
"Ubah semua bagian menjadi teks lalu sambung dengan pemisah (bawaan spasi): \"SO 2026 0001\".",
"Kalau pemisah=\"/\" → \"SO/2026/0001\". Kalau besar=True → hasilnya huruf besar semua."
]
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
"awal_baru": "",
"mudah": [
"Decorator adalah 'pembungkus' fungsi. Fungsi yang dibungkus tetap bekerja seperti biasa.",
"Bedanya: setiap kali dipanggil, penghitung jumlah bertambah 1. Setelah dipanggil 3 kali, fungsi.jumlah = 3.",
"Sebelum dipanggil sama sekali, jumlah = 0. Nama fungsinya juga harus tetap sama."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima list dan angka n, misalnya [1, 2, 3, 4, 5] dan 2.",
"Hasilkan potongan berisi n item satu per satu: [1, 2], lalu [3, 4], lalu sisanya [5].",
"Pakai yield (bukan return list) supaya potongan dibuat satu per satu."
]
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
"awal_baru": "",
"mudah": [
"Buat penghasil nomor dokumen yang tidak pernah habis: SO/2026/0001, SO/2026/0002, dan seterusnya.",
"Nomor dimulai dari 'mulai' (bawaan 1) dan diberi nol di depan sampai sepanjang 'padding' (bawaan 4 digit).",
"Pakai yield di dalam perulangan tanpa akhir; tes akan mengambil beberapa nomor pertama saja."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Baris adalah data satu baris belanja: produk, qty, harga, dan diskon (bawaan 0).",
"subtotal = qty × harga, lalu dipotong diskon persen. Contoh 2 × 15.000 diskon 10% = 27.000.",
"subtotal dibaca tanpa kurung (Baris(...).subtotal), jadi dibuat dengan @property. Bulatkan 2 desimal."
]
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
"awal_baru": "",
"mudah": [
"Uang menyimpan satu angka rupiah.",
"Uang + Uang menghasilkan Uang baru (1.000 + 2.500 = 3.500). Uang × angka juga Uang baru, dibulatkan.",
"Dua Uang dianggap sama kalau jumlahnya sama. Dibandingkan dengan angka biasa (Uang(5) == 5) hasilnya False.",
"Saat diubah ke teks: \"Rp 1.500.000\"."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima tanggal lahir dan tanggal hari ini (\"YYYY-MM-DD\").",
"Umur = tahun ini − tahun lahir. Contoh 2026 − 2003 = 23.",
"Tapi kalau ulang tahun tahun ini BELUM lewat, kurangi 1. Lahir 1 Desember 2003, hari ini 24 November 2026 → 22."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima teks catatan gudang. Di dalamnya ada kode produk berbentuk 3 HURUF BESAR + tanda minus + 4 angka, misalnya KRS-0012.",
"Ambil semua kode yang bentuknya persis seperti itu (krs-0012 huruf kecil atau KRSS-0012 tidak dihitung).",
"Hitung berapa kali tiap kode muncul, lalu urutkan dari yang paling sering (seri: kode abjad).",
"Kembalikan list pasangan (kode, jumlah): [(\"KRS-0012\", 2), (\"MJA-0003\", 1)]."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Hitung rata-rata list angka, bulatkan 2 desimal: [1.5, 2.5, 3] → 2.33.",
"Kalau list kosong, jangan kembalikan apa pun: lempar error ValueError.",
"Tulis juga 'label tipe' (type hint): nilai adalah list[float] dan hasilnya float."
]
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
"awal_baru": "",
"mudah": [
"Kali ini kamu yang menjadi penguji. Fungsi diskon(harga, persen) sudah ada.",
"Tulis beberapa fungsi bernama test_... yang memeriksa diskon dengan assert, misalnya assert diskon(10000, 10) == 9000.",
"Penilai menjalankan tesmu terhadap versi yang benar (harus lulus) dan 3 versi yang rusak (harus gagal).",
"Jadi buat tes untuk 3 hal: hasil normal, hasil yang harus dibulatkan, dan persen tidak valid (misalnya 150)."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima daftar transaksi (produk, qty, harga).",
"Hitung per produk: total qty dan omzet (qty × harga). Lalu jumlahkan semua omzet menjadi 'total'.",
"Daftar produk diurutkan dari omzet terbesar. 'terlaris' adalah produk dengan QTY terbanyak (bisa beda dengan omzet terbesar!).",
"Kalau tidak ada transaksi: total 0, produk [], terlaris None."
]
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
"awal_baru": "",
"mudah": [
"Kamu menerima log absensi, satu kejadian per baris: \"2026-11-24 08:00 Ani MASUK\".",
"Untuk tiap orang, pasangkan MASUK dengan PULANG berikutnya dan hitung selisihnya dalam menit (08:00 → 16:30 = 510 menit).",
"Kalau seseorang masuk-pulang dua kali dalam sehari, jumlahkan. MASUK tanpa PULANG diabaikan.",
"Shift lewat tengah malam (22:00 → 06:00 besok) tetap dihitung benar: 480 menit."
]
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
"bahasa": "py",
"keluaran": "lambat False 191.9 ms\ncepat False 0.2 ms"
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Kamu menerima catatan belanja, satu barang per baris: \"Kopi Susu x2 @18000\".",
"Dari setiap baris ambil: nama (\"Kopi Susu\"), jumlah setelah x (2), dan harga setelah @ (18000).",
"Ubah jumlah dan harga menjadi angka. Baris kosong atau yang tidak punya x dan @ dilewati.",
"Kembalikan list pasangan (nama, jumlah, harga)."
]
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
"awal_baru": "def hitung_struk(items, member):\n    pass\n",
"mudah": [
"Subtotal = jumlah semua (jumlah × harga). Contoh 5 × 18.000 + 2 × 12.500 = 115.000.",
"Diskon 10% hanya untuk member DAN subtotal minimal 100.000 → 11.500.",
"Pajak 11% dihitung dari (subtotal − diskon) → 103.500 × 11% = 11.385.",
"Total = subtotal − diskon + pajak. Kembalikan keempatnya dalam satu dict."
]
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
"awal_baru": "def cetak_struk(teks, member):\n    pass\n",
"mudah": [
"Gabungkan bagian A dan B: baca catatan, lalu hitung struknya.",
"Buat baris per barang: \"Kopi Susu 2 x 18.000 = 36.000\", lalu baris Subtotal, Diskon, Pajak, Total.",
"Semua angka memakai titik ribuan. Kalau tidak ada barang, kembalikan [\"Belanja kosong\"]."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Gudang mencatat stok per produk. masuk menambah, keluar mengurangi, stok membaca jumlahnya (0 kalau belum pernah ada).",
"Jumlah 0 atau negatif ditolak dengan error \"qty harus lebih dari 0\".",
"Mengeluarkan lebih dari stok ditolak dengan error \"stok kursi tidak cukup\", dan stoknya tidak berubah."
]
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
"awal_baru": "def laporan(gudang):\n    pass\n",
"mudah": [
"Buat daftar laporan: pasangan (produk, stok) untuk produk yang stoknya masih ada.",
"Urutkan dari stok terbanyak; kalau sama, nama abjad.",
"Produk yang stoknya sudah 0 tidak ditampilkan."
]
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
"awal_baru": "def proses(gudang, teks):\n    pass\n",
"mudah": [
"Kamu menerima teks perintah, satu per baris: \"MASUK kursi 5\" atau \"KELUAR kursi 2\".",
"Jalankan semua baris. Kalau satu baris gagal, catat pesannya lalu LANJUT ke baris berikutnya.",
"Pesan ditulis \"baris 3: stok kursi tidak cukup\". Perintah selain MASUK/KELUAR → \"perintah tidak dikenal\"; jumlah bukan angka atau bagian kurang → \"format salah\".",
"Kembalikan daftar semua pesan kesalahan."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Untuk setiap order: hitung subtotal tiap baris = qty × harga × (1 − diskon/100), lalu jumlahkan → amount_untaxed.",
"Pajak = 11% dari amount_untaxed. Total = untaxed + pajak. Semua dibulatkan 2 desimal.",
"Contoh: 2 × 100.000 diskon 10% + 1 × 50.000 = 230.000; pajak 25.300; total 255.300."
]
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
"awal_baru": "def omzet_bulanan(orders):\n    pass\n",
"mudah": [
"Hitung dulu total setiap order (pakai fungsi bagian A).",
"Ambil hanya order yang statusnya \"sale\" atau \"done\" (quotation \"draft\" belum dihitung).",
"Kelompokkan per bulan dari tanggalnya (\"2026-10-05\" → \"2026-10\") dan jumlahkan totalnya."
]
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
"awal_baru": "def pelanggan_vip(orders, minimal):\n    pass\n",
"mudah": [
"Hitung total belanja setiap pelanggan dari order sale/done saja.",
"Ambil pelanggan yang totalnya mencapai batas minimal.",
"Urutkan dari total terbesar (seri: nama abjad) dan kembalikan namanya."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": [
"Tiket menyimpan id, judul, prioritas (tinggi/sedang/rendah), dan waktu dibuat \"2026-11-24 08:00\".",
"umur_jam(sekarang) = berapa jam sejak tiket dibuat. 08:00 → 13:30 = 5.5 jam.",
"sla = batas waktu sesuai prioritas: tinggi 4 jam, sedang 24 jam, rendah 72 jam."
]
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
"awal_baru": "def antrean(tiket):\n    pass\n",
"mudah": [
"Keluarkan tiket satu per satu dengan urutan: prioritas tinggi dulu, lalu sedang, lalu rendah.",
"Kalau prioritasnya sama, tiket yang dibuat lebih awal dulu; kalau waktunya juga sama, id lebih kecil dulu.",
"Pakai yield supaya menjadi generator."
]
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
"awal_baru": "def ringkas_sla(tiket, sekarang):\n    pass\n",
"mudah": [
"Cari tiket yang SLA-nya terlewat: umurnya LEBIH DARI batas jam (tepat 4 jam untuk prioritas tinggi belum terlewat).",
"Daftar id-nya ditulis sesuai urutan antrean bagian B.",
"Hitung juga jumlah tiket terlewat per prioritas. Kembalikan keduanya dalam satu dict."
]
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "def kembar_email(pelanggan):\n    pass\n",
"mudah": []
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
"awal_baru": "def vals_partner(teks_csv, tag_id):\n    pass\n",
"mudah": []
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
"bahasa": "py",
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
"awal_baru": "",
"mudah": []
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
"awal_baru": "def action_return(self):\n    pass\n",
"mudah": []
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
"awal_baru": "def rekap_anggota(loans):\n    pass\n",
"mudah": []
}
],
"ujian": true,
"cakupan": "Bab 6–10: compute & constraint, ORM, inheritance & action, view, keamanan"
},
{
"id": "html-struktur",
"topik": "html",
"setelah": "struktur",
"judul": "Kerangka halaman pertamamu",
"contoh": {
"judul": "Contoh: kerangka HTML5 lengkap",
"penjelasan": "<p>Setiap halaman diawali <code>&lt;!DOCTYPE html&gt;</code>, lalu <code>&lt;html lang=\"id\"&gt;</code> berisi <code>&lt;head&gt;</code> (informasi untuk browser: charset, judul tab) dan <code>&lt;body&gt;</code> (yang tampil di layar).</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Profil Jauza</title>\n</head>\n<body>\n  <h1>Halo, saya Jauza</h1>\n  <p>Saya belajar HTML.</p>\n</body>\n</html>\n",
"kunci": "DOCTYPE → html lang → head (meta charset, title) → body. Hanya isi body yang tampil di halaman.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "html-struktur-1",
"judul": "Halaman profil",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat halaman lengkap: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang=\"id\"&gt;</code>, <code>&lt;meta charset=\"utf-8\"&gt;</code>, judul tab <b>Profil Saya</b>, dan sebuah <code>&lt;h1&gt;</code> berisi namamu di body.",
"awal": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- tulis halamanmu di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Profil Saya</title>\n</head>\n<body>\n  <h1>Jauza Kenar Indra Fawaid</h1>\n</body>\n</html>\n",
"jelas": "lang membantu pembaca layar dan Google; charset utf-8 membuat huruf seperti é atau emoji tampil benar.",
"kompleksitas": "",
"petunjuk": [
"Lihat contoh terpandu: semua bagian kerangka ada di sana.",
"Judul tab ditulis di <title> di dalam <head>, bukan di body.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<h1>…</h1>…</body>…</html>\n"
],
"tes": [
[
"Ada <!DOCTYPE html>",
"d.doctype && d.doctype.name === 'html'"
],
[
"Tag <html> memakai lang=\"id\"",
"d.documentElement.lang === 'id'"
],
[
"Ada <meta charset=\"utf-8\">",
"!!$('meta[charset]') && $('meta[charset]').getAttribute('charset').toLowerCase() === 'utf-8'"
],
[
"Judul tab persis \"Profil Saya\"",
"d.title === 'Profil Saya'"
],
[
"Ada <h1> berisi teks di dalam body",
"!!$('body h1') && $('body h1').textContent.trim().length > 0"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "html-struktur-2",
"judul": "Halaman dua bagian",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat halaman berjudul tab <b>Tentang Gleematic</b> berisi satu <code>&lt;h1&gt;</code>, lalu <b>dua</b> <code>&lt;h2&gt;</code> (misalnya Visi dan Layanan) yang masing-masing diikuti minimal satu paragraf <code>&lt;p&gt;</code>. Tambahkan juga satu komentar HTML.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title></title>\n</head>\n<body>\n  <!-- tulis di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Tentang Gleematic</title>\n</head>\n<body>\n  <h1>Tentang Gleematic</h1>\n  <!-- dua bagian utama -->\n  <h2>Visi</h2>\n  <p>Otomasi pekerjaan rutin dengan AI dan RPA.</p>\n  <h2>Layanan</h2>\n  <p>Robot perangkat lunak dan integrasi ERP.</p>\n</body>\n</html>\n",
"jelas": "Satu h1 per halaman dan urutan heading yang rapi memudahkan pembaca layar dan mesin pencari memahami isi halaman.",
"kompleksitas": "",
"petunjuk": [
"Struktur yang dicek: h1, lalu h2 + p, lalu h2 + p.",
"Komentar ditulis <!-- seperti ini --> dan tidak tampil di halaman.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<h1>…</h1>…<!-- dua bagian utama -->…<h2>…</h2>…<p>…</p>…<h2>…</h2>…<p>…</p>…</body>…</html>\n"
],
"tes": [
[
"Judul tab \"Tentang Gleematic\"",
"d.title === 'Tentang Gleematic'"
],
[
"Tepat satu <h1>",
"$$('h1').length === 1"
],
[
"Ada dua <h2>",
"$$('h2').length === 2"
],
[
"Setiap <h2> langsung diikuti <p>",
"$$('h2').every(h => h.nextElementSibling && h.nextElementSibling.tagName === 'P')"
],
[
"Ada komentar HTML <!-- ... -->",
"[...d.body.childNodes].some(n => n.nodeType === 8) || /<!--/.test(d.body.innerHTML)"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "html-teks",
"topik": "html",
"setelah": "teks",
"judul": "Teks, heading, dan daftar",
"contoh": {
"judul": "Contoh: ul, ol, strong, em",
"penjelasan": "<p><code>&lt;ul&gt;</code> = daftar berpoin (urutan tidak penting), <code>&lt;ol&gt;</code> = daftar bernomor (urutan penting). Setiap butir memakai <code>&lt;li&gt;</code>. <code>&lt;strong&gt;</code> menandai teks penting, <code>&lt;em&gt;</code> memberi penekanan.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <h2>Belanja</h2>\n  <ul>\n    <li>Kopi</li>\n    <li>Gula</li>\n  </ul>\n  <h2>Cara membuat</h2>\n  <ol>\n    <li>Rebus air</li>\n    <li>Seduh <strong>2 sendok</strong> kopi, <em>jangan</em> terlalu panas</li>\n  </ol>\n</body>\n</html>\n",
"kunci": "ul untuk poin, ol untuk langkah berurutan. li hanya boleh menjadi anak langsung ul/ol.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "html-teks-1",
"judul": "Daftar belanja",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>&lt;h2&gt;</code> \"Daftar Belanja\" lalu <code>&lt;ul&gt;</code> berisi minimal <b>3</b> <code>&lt;li&gt;</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <!-- tulis di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <h2>Daftar Belanja</h2>\n  <ul>\n    <li>Kopi</li>\n    <li>Gula</li>\n    <li>Susu</li>\n  </ul>\n</body>\n</html>\n",
"jelas": "Daftar dengan ul/li dibaca pembaca layar sebagai 'daftar, 3 item', jauh lebih jelas daripada baris teks dengan tanda minus.",
"kompleksitas": "",
"petunjuk": [
"Struktur: <ul> lalu beberapa <li> di dalamnya.",
"Pastikan setiap <li> ditutup </li>.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<h2>…</h2>…<ul>…<li>…</li>…<li>…</li>…<li>…</li>…</ul>…</body>…</html>\n"
],
"tes": [
[
"Ada <h2> berisi \"Daftar Belanja\"",
"!!$('h2') && $('h2').textContent.trim() === 'Daftar Belanja'"
],
[
"Ada <ul> dengan minimal 3 <li>",
"!!$('ul') && $('ul').querySelectorAll(':scope > li').length >= 3"
],
[
"Semua <li> berisi teks",
"$$('li').every(li => li.textContent.trim())"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "html-teks-2",
"judul": "Halaman resep",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat resep: <code>&lt;h1&gt;</code> nama masakan, <code>&lt;h2&gt;</code> \"Bahan\" diikuti <code>&lt;ul&gt;</code> (≥ 3 item), <code>&lt;h2&gt;</code> \"Langkah\" diikuti <code>&lt;ol&gt;</code> (≥ 3 item). Di salah satu langkah gunakan <code>&lt;strong&gt;</code> dan di langkah lain <code>&lt;em&gt;</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <!-- tulis di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <h1>Nasi Goreng</h1>\n  <h2>Bahan</h2>\n  <ul>\n    <li>Nasi</li>\n    <li>Telur</li>\n    <li>Kecap</li>\n  </ul>\n  <h2>Langkah</h2>\n  <ol>\n    <li>Panaskan <strong>2 sendok</strong> minyak</li>\n    <li>Masukkan telur, <em>aduk cepat</em></li>\n    <li>Tambahkan nasi dan kecap</li>\n  </ol>\n</body>\n</html>\n",
"jelas": "Memilih ul atau ol berdasarkan makna (berurutan atau tidak) adalah inti HTML semantik.",
"kompleksitas": "",
"petunjuk": [
"Bahan tidak berurutan → ul. Langkah berurutan → ol.",
"strong dan em ditaruh DI DALAM li, misalnya <li>Panaskan <strong>2 sendok</strong> minyak</li>.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<h1>…</h1>…<h2>…</h2>…<ul>…<li>…</li>…<li>…</li>…<li>…</li>…</ul>…<h2>…</h2>…<ol>…<li>…<strong>…</strong>…</li>…<li>…<em>…</em></li>…<li>…</li>…</ol>…</body>…</html>\n"
],
"tes": [
[
"Ada satu <h1>",
"$$('h1').length === 1"
],
[
"<h2> \"Bahan\" diikuti <ul> berisi ≥ 3 item",
"$$('h2').some(h => h.textContent.trim() === 'Bahan' && h.nextElementSibling && h.nextElementSibling.tagName === 'UL' && h.nextElementSibling.children.length >= 3)"
],
[
"<h2> \"Langkah\" diikuti <ol> berisi ≥ 3 item",
"$$('h2').some(h => h.textContent.trim() === 'Langkah' && h.nextElementSibling && h.nextElementSibling.tagName === 'OL' && h.nextElementSibling.children.length >= 3)"
],
[
"Ada <strong> di dalam langkah",
"!!$('ol li strong')"
],
[
"Ada <em> di dalam langkah",
"!!$('ol li em')"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "html-media",
"topik": "html",
"setelah": "media",
"judul": "Link, gambar, dan figure",
"contoh": {
"judul": "Contoh: a, img, figure",
"penjelasan": "<p><code>&lt;a href&gt;</code> membuat link; <code>target=\"_blank\"</code> membuka tab baru dan sebaiknya disertai <code>rel=\"noopener\"</code>. <code>&lt;img&gt;</code> wajib punya <code>alt</code> (teks pengganti). Link ke bagian halaman memakai <code>href=\"#id\"</code>.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <a href=\"#kontak\">Ke kontak</a>\n  <figure>\n    <img src=\"https://picsum.photos/200/120\" alt=\"Pemandangan gunung\" width=\"200\">\n    <figcaption>Foto contoh</figcaption>\n  </figure>\n  <p><a href=\"https://www.odoo.com\" target=\"_blank\" rel=\"noopener\">Situs Odoo</a></p>\n  <h2 id=\"kontak\">Kontak</h2>\n</body>\n</html>\n",
"kunci": "img selalu punya alt. Link tab baru: target=\"_blank\" rel=\"noopener\". Link internal: href=\"#id\".",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "html-media-1",
"judul": "Link keluar dan gambar",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat link ke <code>https://www.odoo.com</code> yang terbuka di tab baru dengan aman (<code>rel</code> berisi <code>noopener</code>), dan sebuah <code>&lt;img&gt;</code> dengan <code>src</code> dan <code>alt</code> yang tidak kosong.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <!-- tulis di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <a href=\"https://www.odoo.com\" target=\"_blank\" rel=\"noopener\">Odoo</a>\n  <img src=\"logo.png\" alt=\"Logo perusahaan\">\n</body>\n</html>\n",
"jelas": "Tanpa rel=\"noopener\", halaman yang dibuka bisa mengakses window.opener halamanmu (celah keamanan tabnabbing).",
"kompleksitas": "",
"petunjuk": [
"Atribut a: href, target, rel.",
"alt menjelaskan isi gambar, misalnya alt=\"Logo perusahaan\".",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<a href=\"https://www.odoo.com\" target=\"_blank\" rel=\"noopener\">…</a>…<img src=\"logo.png\" alt=\"Logo perusahaan\">…</body>…</html>\n"
],
"tes": [
[
"Ada link ke https://www.odoo.com",
"!!$('a[href^=\"https://www.odoo.com\"]')"
],
[
"Link terbuka di tab baru (target=\"_blank\")",
"!!$('a[target=\"_blank\"]')"
],
[
"Link tab baru memakai rel=\"noopener\"",
"$$('a[target=\"_blank\"]').length > 0 && $$('a[target=\"_blank\"]').every(a => /noopener/.test(a.rel))"
],
[
"Ada <img> dengan src",
"!!$('img[src]') && $('img').getAttribute('src').trim() !== ''"
],
[
"Semua gambar punya alt yang tidak kosong",
"$$('img').length > 0 && $$('img').every(i => (i.getAttribute('alt') || '').trim())"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "html-media-2",
"judul": "Galeri dan navigasi halaman",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <b>dua</b> <code>&lt;figure&gt;</code>, masing-masing berisi <code>&lt;img&gt;</code> beralt dan <code>&lt;figcaption&gt;</code>. Di atasnya buat link <code>href=\"#kontak\"</code>, dan di bawah buat elemen dengan <code>id=\"kontak\"</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <!-- tulis di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <a href=\"#kontak\">Hubungi kami</a>\n  <figure><img src=\"a.jpg\" alt=\"Kantor Batam\"><figcaption>Kantor</figcaption></figure>\n  <figure><img src=\"b.jpg\" alt=\"Tim developer\"><figcaption>Tim</figcaption></figure>\n  <h2 id=\"kontak\">Kontak</h2>\n</body>\n</html>\n",
"jelas": "figcaption memberi keterangan yang terhubung secara semantik ke gambar, berbeda dengan alt yang menggantikan gambar.",
"kompleksitas": "",
"petunjuk": [
"figure membungkus img dan figcaption menjadi satu kesatuan.",
"Link internal: <a href=\"#kontak\"> menuju elemen dengan id=\"kontak\".",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<a href=\"#kontak\">…</a>…<figure><img src=\"a.jpg\" alt=\"Kantor Batam\"><figcaption>…</figcaption></figure>…<figure><img src=\"b.jpg\" alt=\"Tim developer\"><figcaption>…</figcaption></figure>…<h2 id=\"kontak\">…</h2>…</body>…</html>\n"
],
"tes": [
[
"Ada 2 <figure>",
"$$('figure').length === 2"
],
[
"Setiap figure berisi img beralt dan figcaption",
"$$('figure').every(f => f.querySelector('img') && (f.querySelector('img').getAttribute('alt') || '').trim() && f.querySelector('figcaption'))"
],
[
"Ada link href=\"#kontak\"",
"!!$('a[href=\"#kontak\"]')"
],
[
"Ada elemen id=\"kontak\"",
"!!d.getElementById('kontak')"
],
[
"Link #kontak berada sebelum elemen kontak",
"!!$('a[href=\"#kontak\"]') && !!d.getElementById('kontak') && !!($('a[href=\"#kontak\"]').compareDocumentPosition(d.getElementById('kontak')) & 4)"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "html-form",
"topik": "html",
"setelah": "form",
"judul": "Membuat form yang benar",
"contoh": {
"judul": "Contoh: label, type, required",
"penjelasan": "<p>Setiap input butuh <code>&lt;label&gt;</code>: dengan <code>for</code> yang sama dengan <code>id</code> input, atau dengan membungkus input. <code>type</code> yang tepat (email, password, number) memberi keyboard dan validasi yang sesuai. <code>required</code> mewajibkan isian.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <form>\n    <label for=\"email\">Email</label>\n    <input id=\"email\" name=\"email\" type=\"email\" required>\n    <label><input type=\"checkbox\" name=\"ingat\"> Ingat saya</label>\n    <button type=\"submit\">Masuk</button>\n  </form>\n</body>\n</html>\n",
"kunci": "label for=\"x\" + input id=\"x\". Pakai type yang sesuai isi. name diperlukan agar nilai ikut terkirim.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "html-form-1",
"judul": "Form login",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>&lt;form&gt;</code> berisi input email (<code>type=\"email\"</code>, <code>required</code>), input password (<code>type=\"password\"</code>, <code>minlength=\"8\"</code>), keduanya punya <code>name</code> dan label, serta tombol <code>type=\"submit\"</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <form>\n    <!-- tulis di sini -->\n  </form>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <form>\n    <label for=\"email\">Email</label>\n    <input id=\"email\" name=\"email\" type=\"email\" required>\n    <label for=\"sandi\">Password</label>\n    <input id=\"sandi\" name=\"sandi\" type=\"password\" minlength=\"8\" required>\n    <button type=\"submit\">Masuk</button>\n  </form>\n</body>\n</html>\n",
"jelas": "Label membuat area klik lebih besar dan dibacakan pembaca layar. name adalah kunci data saat form dikirim.",
"kompleksitas": "",
"petunjuk": [
"Pasangkan label dan input: <label for=\"email\"> dengan <input id=\"email\">.",
"minlength=\"8\" ditulis sebagai atribut input password.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<form>…<label for=\"email\">…</label>…<input id=\"email\" name=\"email\" type=\"email\" required>…<label for=\"sandi\">…</label>…<input id=\"sandi\" name=\"sandi\" type=\"password\" minlength=\"8\" required>…<button type=\"submit\">…</button>…</form>…</body>…</html>\n"
],
"tes": [
[
"Ada input type=\"email\" yang required",
"!!$('form input[type=email][required]')"
],
[
"Ada input type=\"password\" dengan minlength=\"8\"",
"!!$('form input[type=password]') && $('form input[type=password]').getAttribute('minlength') === '8'"
],
[
"Kedua input punya name",
"$$('form input').length >= 2 && $$('form input').every(i => i.name)"
],
[
"Setiap input punya label",
"$$('input:not([type=submit]):not([type=hidden]),select,textarea').every(x => x.closest('label') || (x.id && $('label[for=\"' + x.id + '\"]')))"
],
[
"Ada tombol submit",
"!!$('form button[type=submit], form input[type=submit]')"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "html-form-2",
"judul": "Form pendaftaran lengkap",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Form pendaftaran berisi: <code>&lt;select&gt;</code> posisi dengan ≥ 3 <code>&lt;option&gt;</code>; 2 radio button \"Laki-laki\"/\"Perempuan\" dengan <code>name</code> yang <b>sama</b>; checkbox persetujuan yang <code>required</code>; <code>&lt;textarea&gt;</code> motivasi; semua kontrol punya label; dan tombol submit.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <form>\n    <!-- tulis di sini -->\n  </form>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <form>\n    <label for=\"posisi\">Posisi</label>\n    <select id=\"posisi\" name=\"posisi\">\n      <option>Odoo Developer</option>\n      <option>Data Analyst</option>\n      <option>QA Tester</option>\n    </select>\n    <fieldset>\n      <legend>Jenis kelamin</legend>\n      <label><input type=\"radio\" name=\"jk\" value=\"L\"> Laki-laki</label>\n      <label><input type=\"radio\" name=\"jk\" value=\"P\"> Perempuan</label>\n    </fieldset>\n    <label for=\"motivasi\">Motivasi</label>\n    <textarea id=\"motivasi\" name=\"motivasi\"></textarea>\n    <label><input type=\"checkbox\" name=\"setuju\" required> Saya setuju</label>\n    <button type=\"submit\">Daftar</button>\n  </form>\n</body>\n</html>\n",
"jelas": "fieldset + legend memberi judul untuk sekelompok radio, sehingga pembaca layar menyebut 'Jenis kelamin, Laki-laki'.",
"kompleksitas": "",
"petunjuk": [
"Radio dengan name sama menjadi satu grup: hanya satu yang bisa dipilih.",
"Bungkus radio dan checkbox di dalam label: <label><input type=\"radio\" name=\"jk\"> Laki-laki</label>.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<form>…<label for=\"posisi\">…</label>…<select id=\"posisi\" name=\"posisi\">…<option>…</option>…<option>…</option>…<option>…</option>…</select>…<fieldset>…<legend>…</legend>…<label><input type=\"radio\" name=\"jk\" value=\"L\">…</label>…<label><input type=\"radio\" name=\"jk\" value=\"P\">…</label>…</fieldset>…<label for=\"motivasi\">…</label>…<textarea id=\"motivasi\" name=\"motivasi\"></textarea>…<label><input type=\"checkbox\" name=\"setuju\" required>…</label>…<button type=\"submit\">…</button>…</form>…</body>…</html>\n"
],
"tes": [
[
"Ada <select> dengan ≥ 3 option",
"!!$('form select') && $('form select').options.length >= 3"
],
[
"Ada 2 radio dengan name yang sama",
"$$('input[type=radio]').length >= 2 && new Set($$('input[type=radio]').map(r => r.name)).size === 1 && !!$('input[type=radio]').name"
],
[
"Ada checkbox yang required",
"!!$('input[type=checkbox][required]')"
],
[
"Ada <textarea>",
"!!$('form textarea')"
],
[
"Setiap kontrol punya label",
"$$('input:not([type=submit]):not([type=hidden]),select,textarea').every(x => x.closest('label') || (x.id && $('label[for=\"' + x.id + '\"]')))"
],
[
"Ada tombol submit",
"!!$('form button[type=submit], form input[type=submit]')"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "html-semantik",
"topik": "html",
"setelah": "semantik",
"judul": "Tata letak semantik",
"contoh": {
"judul": "Contoh: header, nav, main, article, footer",
"penjelasan": "<p>Tag semantik menjelaskan <i>peran</i> bagian halaman: <code>header</code> (kepala), <code>nav</code> (navigasi utama), <code>main</code> (isi utama, satu per halaman), <code>article</code> (konten yang berdiri sendiri), <code>aside</code> (pelengkap), <code>footer</code> (kaki).</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <header>\n    <h1>Blog Odoo</h1>\n    <nav><ul><li><a href=\"#\">Beranda</a></li><li><a href=\"#\">Tutorial</a></li></ul></nav>\n  </header>\n  <main>\n    <article>\n      <h2>Membuat modul pertama</h2>\n      <p>Diterbitkan <time datetime=\"2026-11-24\">24 November 2026</time></p>\n    </article>\n    <aside>Artikel terkait</aside>\n  </main>\n  <footer>© 2026</footer>\n</body>\n</html>\n",
"kunci": "Satu main per halaman. nav untuk navigasi utama. time datetime memakai format mesin YYYY-MM-DD.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "html-sem-1",
"judul": "Kerangka situs perusahaan",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat struktur: <code>&lt;header&gt;</code> berisi <code>&lt;h1&gt;</code> dan <code>&lt;nav&gt;</code> (berisi <code>&lt;ul&gt;</code> dengan ≥ 3 link), lalu <b>satu</b> <code>&lt;main&gt;</code>, lalu <code>&lt;footer&gt;</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <!-- tulis di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <header>\n    <h1>Glee Trees</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#layanan\">Layanan</a></li>\n        <li><a href=\"#karier\">Karier</a></li>\n        <li><a href=\"#kontak\">Kontak</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n    <p>Isi utama</p>\n  </main>\n  <footer>© 2026 Glee Trees</footer>\n</body>\n</html>\n",
"jelas": "Pembaca layar bisa melompat langsung ke landmark seperti main dan nav; div tidak memberi informasi itu.",
"kompleksitas": "",
"petunjuk": [
"Urutan: header (h1 + nav), main, footer.",
"nav berisi ul > li > a.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<header>…<h1>…</h1>…<nav>…<ul>…<li><a href=\"#layanan\">…</a></li>…<li><a href=\"#karier\">…</a></li>…<li><a href=\"#kontak\">…</a></li>…</ul>…</nav>…</header>…<main>…<p>…</p>…</main>…<footer>…</footer>…</body>…</html>\n"
],
"tes": [
[
"<header> berisi <h1>",
"!!$('header h1')"
],
[
"<nav> di dalam header berisi <ul> dengan ≥ 3 link",
"!!$('header nav ul') && $$('header nav ul li a').length >= 3"
],
[
"Tepat satu <main>",
"$$('main').length === 1"
],
[
"Ada <footer> setelah main",
"!!$('footer') && !!$('main') && !!($('main').compareDocumentPosition($('footer')) & 4)"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "html-sem-2",
"judul": "Artikel blog",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Di dalam <code>&lt;main&gt;</code>, buat <code>&lt;article&gt;</code> berisi <code>&lt;h2&gt;</code>, elemen <code>&lt;time&gt;</code> dengan <code>datetime</code> berformat <code>YYYY-MM-DD</code>, dan minimal dua <code>&lt;section&gt;</code> yang masing-masing punya heading. Tambahkan <code>&lt;aside&gt;</code> di dalam main.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <main>\n    <!-- tulis di sini -->\n  </main>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <main>\n    <article>\n      <h2>Modul approval Odoo</h2>\n      <p>Ditulis <time datetime=\"2026-11-24\">24 November 2026</time></p>\n      <section><h3>Masalah</h3><p>Order besar perlu disetujui.</p></section>\n      <section><h3>Solusi</h3><p>Status Waiting Approval.</p></section>\n    </article>\n    <aside>Baca juga: modul purchase</aside>\n  </main>\n</body>\n</html>\n",
"jelas": "Struktur ini membuat artikel mudah dipahami mesin pencari dan fitur 'reader mode' browser.",
"kompleksitas": "",
"petunjuk": [
"article = konten mandiri; section = bagian bertema di dalamnya, masing-masing dengan heading.",
"datetime ditulis untuk mesin, teks di dalam time untuk manusia: <time datetime=\"2026-11-24\">24 November 2026</time>.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<main>…<article>…<h2>…</h2>…<p>…<time datetime=\"2026-11-24\">…</time></p>…<section><h3>…</h3><p>…</p></section>…<section><h3>…</h3><p>…</p></section>…</article>…<aside>…</aside>…</main>…</body>…</html>\n"
],
"tes": [
[
"Ada <article> di dalam main dengan <h2>",
"!!$('main article h2')"
],
[
"Ada <time> dengan datetime YYYY-MM-DD",
"!!$('article time[datetime]') && /^\\d{4}-\\d{2}-\\d{2}$/.test($('article time').getAttribute('datetime'))"
],
[
"Ada ≥ 2 <section> di dalam article",
"$$('article section').length >= 2"
],
[
"Setiap section punya heading",
"$$('article section').length > 0 && $$('article section').every(s => s.querySelector('h2,h3,h4'))"
],
[
"Ada <aside> di dalam main",
"!!$('main aside')"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "html-a11y",
"topik": "html",
"setelah": "a11y",
"judul": "Memperbaiki aksesibilitas",
"contoh": {
"judul": "Contoh: dari div yang bisa diklik ke button",
"penjelasan": "<p>Elemen interaktif harus elemen yang tepat: <code>&lt;button&gt;</code> untuk aksi, <code>&lt;a&gt;</code> untuk pindah halaman. <code>div</code> yang diberi onclick tidak bisa difokus keyboard dan tidak dikenali pembaca layar. Gambar butuh <code>alt</code>, input butuh label.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <!-- buruk -->\n  <div class=\"tombol\">Kirim</div>\n  <img src=\"grafik.png\">\n  <!-- baik -->\n  <button type=\"button\">Kirim</button>\n  <img src=\"grafik.png\" alt=\"Grafik penjualan naik 20% di November\">\n</body>\n</html>\n",
"kunci": "Aksi → button. Pindah halaman → a href. Gambar informatif → alt yang menjelaskan isinya; gambar hiasan → alt=\"\".",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "html-a11y-1",
"judul": "Perbaiki halaman yang tidak aksesibel",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Kode awal punya <b>4 masalah</b> aksesibilitas. Perbaiki: (1) \"tombol\" div harus menjadi <code>&lt;button&gt;</code>; (2) gambar tanpa alt; (3) input tanpa label; (4) halaman tanpa <code>lang</code>. Isi teks dan gambar tetap ada.",
"awal": "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <h1>Kontak</h1>\n  <img src=\"peta.png\">\n  <input id=\"nama\" name=\"nama\" placeholder=\"Nama\">\n  <div class=\"tombol\" onclick=\"kirim()\">Kirim</div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <h1>Kontak</h1>\n  <img src=\"peta.png\" alt=\"Peta lokasi kantor di Batam\">\n  <label for=\"nama\">Nama</label>\n  <input id=\"nama\" name=\"nama\">\n  <button type=\"button\">Kirim</button>\n</body>\n</html>\n",
"jelas": "Keempat masalah ini adalah temuan paling umum di audit aksesibilitas (WCAG). Memperbaikinya juga membantu SEO.",
"kompleksitas": "",
"petunjuk": [
"Placeholder BUKAN pengganti label: ia hilang saat pengguna mengetik.",
"Ganti <div ... onclick> dengan <button type=\"button\">Kirim</button>.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<h1>…</h1>…<img src=\"peta.png\" alt=\"Peta lokasi kantor di Batam\">…<label for=\"nama\">…</label>…<input id=\"nama\" name=\"nama\">…<button type=\"button\">…</button>…</body>…</html>\n"
],
"tes": [
[
"Halaman punya lang",
"!!d.documentElement.lang"
],
[
"Gambar peta punya alt yang tidak kosong",
"!!$('img') && ($('img').getAttribute('alt') || '').trim().length > 0"
],
[
"Input nama punya label",
"$$('input:not([type=submit]):not([type=hidden]),select,textarea').every(x => x.closest('label') || (x.id && $('label[for=\"' + x.id + '\"]')))"
],
[
"Tombol Kirim memakai <button>",
"$$('button').some(b => b.textContent.trim() === 'Kirim')"
],
[
"Tidak ada lagi div dengan onclick",
"!$('div[onclick]')"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "html-a11y-2",
"judul": "Heading berurutan dan skip link",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat halaman dengan: link \"Lewati ke konten\" sebagai elemen pertama di body (<code>href=\"#konten\"</code>), <code>&lt;main id=\"konten\"&gt;</code>, tepat satu <code>&lt;h1&gt;</code>, dan heading yang <b>tidak melompat level</b> (h1 → h2 → h3, tidak boleh h1 → h3).",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <header><nav><a href=\"#\">Beranda</a></nav></header>\n  <main>\n    <h1>Layanan</h1>\n    <h3>RPA</h3>\n  </main>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <a href=\"#konten\">Lewati ke konten</a>\n  <header><nav><a href=\"#\">Beranda</a></nav></header>\n  <main id=\"konten\">\n    <h1>Layanan</h1>\n    <h2>RPA</h2>\n    <h3>Otomasi faktur</h3>\n    <h2>ERP</h2>\n  </main>\n</body>\n</html>\n",
"jelas": "Heading adalah 'daftar isi' bagi pembaca layar. Level yang melompat membuat struktur halaman membingungkan.",
"kompleksitas": "",
"petunjuk": [
"Skip link membantu pengguna keyboard melompati menu yang panjang.",
"Kode awal melompat dari h1 ke h3; tambahkan h2 di antaranya.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<a href=\"#konten\">…</a>…<header><nav><a href=\"#\">…</a></nav></header>…<main id=\"konten\">…<h1>…</h1>…<h2>…</h2>…<h3>…</h3>…<h2>…</h2>…</main>…</body>…</html>\n"
],
"tes": [
[
"Elemen pertama di body adalah link ke #konten",
"!!d.body.firstElementChild && d.body.firstElementChild.matches('a[href=\"#konten\"]')"
],
[
"<main> punya id=\"konten\"",
"!!$('main#konten')"
],
[
"Tepat satu <h1>",
"$$('h1').length === 1"
],
[
"Level heading tidak melompat",
"$$('h1,h2,h3,h4,h5,h6').every((h, i, a) => i === 0 || +h.tagName[1] - +a[i - 1].tagName[1] <= 1)"
],
[
"Ada minimal satu <h2>",
"$$('h2').length >= 1"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "html-tabel",
"topik": "html",
"setelah": "tabel",
"judul": "Tabel data yang lengkap",
"contoh": {
"judul": "Contoh: caption, thead, th scope, tfoot",
"penjelasan": "<p>Tabel untuk <b>data</b> (bukan tata letak). <code>&lt;caption&gt;</code> = judul tabel, <code>&lt;thead&gt;</code>/<code>&lt;tbody&gt;</code>/<code>&lt;tfoot&gt;</code> = kepala/isi/kaki, <code>&lt;th scope=\"col\"&gt;</code> = judul kolom. <code>colspan</code>/<code>rowspan</code> menggabungkan sel.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <table border=\"1\">\n    <caption>Penjualan November</caption>\n    <thead><tr><th scope=\"col\">Produk</th><th scope=\"col\">Qty</th></tr></thead>\n    <tbody><tr><td>Kopi</td><td>12</td></tr><tr><td>Teh</td><td>7</td></tr></tbody>\n    <tfoot><tr><th scope=\"row\">Total</th><td>19</td></tr></tfoot>\n  </table>\n</body>\n</html>\n",
"kunci": "caption → thead (th scope=col) → tbody (td) → tfoot. colspan=\"2\" melebar ke 2 kolom.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "html-tabel-1",
"judul": "Tabel nilai",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat tabel dengan <code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code> berisi 3 <code>&lt;th scope=\"col\"&gt;</code> (Nama, Mata Kuliah, Nilai), dan <code>&lt;tbody&gt;</code> berisi 3 baris data.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <!-- tulis di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <table>\n    <caption>Nilai semester</caption>\n    <thead><tr><th scope=\"col\">Nama</th><th scope=\"col\">Mata Kuliah</th><th scope=\"col\">Nilai</th></tr></thead>\n    <tbody>\n      <tr><td>Ani</td><td>Basis Data</td><td>A</td></tr>\n      <tr><td>Budi</td><td>Web</td><td>B</td></tr>\n      <tr><td>Cita</td><td>ERP</td><td>A</td></tr>\n    </tbody>\n  </table>\n</body>\n</html>\n",
"jelas": "scope membuat pembaca layar menyebut judul kolom setiap kali membaca sel, sehingga tabel bisa dipahami tanpa melihat.",
"kompleksitas": "",
"petunjuk": [
"Mulai dari contoh terpandu, tambahkan satu kolom.",
"scope=\"col\" memberi tahu bahwa th itu judul KOLOM.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<table>…<caption>…</caption>…<thead><tr><th scope=\"col\">…</th><th scope=\"col\">…</th><th scope=\"col\">…</th></tr></thead>…<tbody>…<tr><td>…</td><td>…</td><td>…</td></tr>…<tr><td>…</td><td>…</td><td>…</td></tr>…<tr><td>…</td><td>…</td><td>…</td></tr>…</tbody>…</table>…</body>…</html>\n"
],
"tes": [
[
"Ada <caption>",
"!!$('table caption')"
],
[
"thead berisi 3 th scope=\"col\"",
"$$('thead th[scope=col]').length === 3"
],
[
"tbody berisi 3 baris",
"!!$('tbody') && $('tbody').rows.length === 3"
],
[
"Setiap baris data punya 3 sel",
"!!$('tbody') && [...$('tbody').rows].every(r => r.cells.length === 3)"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "html-tabel-2",
"judul": "Laporan dengan sel gabungan",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat laporan penjualan per wilayah: baris kepala pertama berisi th \"Wilayah\" dengan <code>rowspan=\"2\"</code> dan th \"Penjualan\" dengan <code>colspan=\"2\"</code>; baris kepala kedua berisi th \"Q3\" dan \"Q4\"; tbody ≥ 2 wilayah; dan <code>&lt;tfoot&gt;</code> berisi baris Total.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <table>\n    <!-- tulis di sini -->\n  </table>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <table>\n    <caption>Penjualan per wilayah</caption>\n    <thead>\n      <tr><th rowspan=\"2\" scope=\"col\">Wilayah</th><th colspan=\"2\" scope=\"colgroup\">Penjualan</th></tr>\n      <tr><th scope=\"col\">Q3</th><th scope=\"col\">Q4</th></tr>\n    </thead>\n    <tbody>\n      <tr><th scope=\"row\">Batam</th><td>120</td><td>150</td></tr>\n      <tr><th scope=\"row\">Solo</th><td>90</td><td>110</td></tr>\n    </tbody>\n    <tfoot><tr><th scope=\"row\">Total</th><td>210</td><td>260</td></tr></tfoot>\n  </table>\n</body>\n</html>\n",
"jelas": "rowspan dan colspan sering membingungkan karena sel yang 'tertutup' tidak ditulis ulang. Tabel laporan seperti ini sering muncul di template laporan QWeb Odoo.",
"kompleksitas": "",
"petunjuk": [
"Gambar dulu di kertas: kolom Wilayah setinggi 2 baris kepala, kolom Penjualan selebar 2 kolom.",
"Baris kepala kedua hanya berisi Q3 dan Q4 karena kolom Wilayah sudah 'turun' dari baris pertama.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<table>…<caption>…</caption>…<thead>…<tr><th rowspan=\"2\" scope=\"col\">…</th><th colspan=\"2\" scope=\"colgroup\">…</th></tr>…<tr><th scope=\"col\">…</th><th scope=\"col\">…</th></tr>…</thead>…<tbody>…<tr><th scope=\"row\">…</th><td>…</td><td>…</td></tr>…<tr><th scope=\"row\">…</th><td>…</td><td>…</td></tr>…</tbody>…<tfoot><tr><th scope=\"row\">…</th><td>…</td><td>…</td></tr></tfoot>…</table>…</body>…</html>\n"
],
"tes": [
[
"thead punya 2 baris",
"!!$('thead') && $('thead').rows.length === 2"
],
[
"th \"Wilayah\" memakai rowspan=\"2\"",
"$$('thead th').some(t => t.textContent.trim() === 'Wilayah' && t.rowSpan === 2)"
],
[
"th \"Penjualan\" memakai colspan=\"2\"",
"$$('thead th').some(t => t.textContent.trim() === 'Penjualan' && t.colSpan === 2)"
],
[
"Baris kepala kedua berisi Q3 dan Q4",
"!!$('thead') && $('thead').rows.length === 2 && [...$('thead').rows[1].cells].map(c => c.textContent.trim()).join() === 'Q3,Q4'"
],
[
"tbody berisi ≥ 2 wilayah",
"!!$('tbody') && $('tbody').rows.length >= 2"
],
[
"Ada tfoot berisi Total",
"!!$('tfoot') && /Total/.test($('tfoot').textContent)"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "html-head",
"topik": "html",
"setelah": "head",
"judul": "Isi <head>: SEO dan media sosial",
"contoh": {
"judul": "Contoh: meta yang paling penting",
"penjelasan": "<p><code>viewport</code> membuat halaman pas di HP. <code>description</code> muncul di hasil Google. Meta Open Graph (<code>og:</code>) mengatur pratinjau saat link dibagikan ke WhatsApp/LinkedIn. Script sebaiknya dimuat dengan <code>defer</code>.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>KodeQuiz: latihan coding</title>\n  <meta name=\"description\" content=\"Latihan coding Python dan Odoo gratis.\">\n  <meta property=\"og:title\" content=\"KodeQuiz\">\n  <link rel=\"icon\" href=\"ikon.png\">\n  <script src=\"app.js\" defer></script>\n</head>\n<body><p>Lihat kode sumbernya, bukan tampilannya.</p></body>\n</html>\n",
"kunci": "Meta tidak tampil di halaman, tapi menentukan tampilan di HP, Google, dan media sosial.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "html-head-1",
"judul": "Meta dasar",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Lengkapi <code>&lt;head&gt;</code>: meta <code>viewport</code> (<code>width=device-width, initial-scale=1</code>), <code>&lt;title&gt;</code> maksimal 60 karakter, meta <code>description</code> 50–160 karakter, dan <code>&lt;link rel=\"icon\"&gt;</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <!-- lengkapi di sini -->\n</head>\n<body><h1>Portofolio</h1></body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Jauza Fawaid | Odoo Developer</title>\n  <meta name=\"description\" content=\"Portofolio Jauza Fawaid: modul Odoo 17, analisis data, dan proyek web.\">\n  <link rel=\"icon\" href=\"ikon.png\">\n</head>\n<body><h1>Portofolio</h1></body>\n</html>\n",
"jelas": "Tanpa meta viewport, HP menampilkan halaman versi desktop yang diperkecil. Judul lebih dari ±60 karakter dipotong di hasil Google.",
"kompleksitas": "",
"petunjuk": [
"Semua tag ini ditaruh di dalam <head>, bukan body.",
"Hitung panjang description: cukup 1–2 kalimat yang menjelaskan halaman.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">…<title>…</title>…<meta name=\"description\" content=\"Portofolio Jauza Fawaid: modul Odoo 17, analisis data, dan proyek web.\">…<link rel=\"icon\" href=\"ikon.png\">…</head>…<body><h1>…</h1></body>…</html>\n"
],
"tes": [
[
"Ada meta viewport width=device-width",
"!!$('meta[name=viewport]') && /width=device-width/.test($('meta[name=viewport]').content)"
],
[
"Ada title 1–60 karakter",
"d.title.trim().length > 0 && d.title.length <= 60"
],
[
"Meta description 50–160 karakter",
"!!$('meta[name=description]') && $('meta[name=description]').content.length >= 50 && $('meta[name=description]').content.length <= 160"
],
[
"Ada link rel=\"icon\"",
"!!$('link[rel~=icon]')"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "html-head-2",
"judul": "Pratinjau saat dibagikan",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Tambahkan Open Graph: <code>og:title</code>, <code>og:description</code>, <code>og:image</code> (URL https), dan <code>og:type</code> bernilai <code>website</code>. Muat juga <code>style.css</code> dengan <code>&lt;link rel=\"stylesheet\"&gt;</code> dan <code>app.js</code> dengan <code>defer</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Portofolio Jauza</title>\n  <!-- tulis di sini -->\n</head>\n<body></body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Portofolio Jauza</title>\n  <meta property=\"og:title\" content=\"Portofolio Jauza\">\n  <meta property=\"og:description\" content=\"Modul Odoo 17 dan proyek data.\">\n  <meta property=\"og:image\" content=\"https://contoh.com/sampul.png\">\n  <meta property=\"og:type\" content=\"website\">\n  <link rel=\"stylesheet\" href=\"style.css\">\n  <script src=\"app.js\" defer></script>\n</head>\n<body></body>\n</html>\n",
"jelas": "Pratinjau link yang rapi di LinkedIn/WhatsApp membuat portofolio terlihat profesional saat dibagikan ke rekruter.",
"kompleksitas": "",
"petunjuk": [
"Open Graph memakai atribut property, bukan name: <meta property=\"og:title\" content=\"...\">.",
"defer membuat script dijalankan setelah HTML selesai dibaca, tanpa menahan tampilan.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<meta property=\"og:title\" content=\"Portofolio Jauza\">…<meta property=\"og:description\" content=\"Modul Odoo 17 dan proyek data.\">…<meta property=\"og:image\" content=\"https://contoh.com/sampul.png\">…<meta property=\"og:type\" content=\"website\">…<link rel=\"stylesheet\" href=\"style.css\">…<script src=\"app.js\" defer></script>…</head>…<body></body>…</html>\n"
],
"tes": [
[
"og:title dan og:description terisi",
"['og:title', 'og:description'].every(p => $('meta[property=\"' + p + '\"]') && $('meta[property=\"' + p + '\"]').content.trim())"
],
[
"og:image memakai URL https",
"!!$('meta[property=\"og:image\"]') && /^https:\\/\\//.test($('meta[property=\"og:image\"]').content)"
],
[
"og:type bernilai website",
"!!$('meta[property=\"og:type\"]') && $('meta[property=\"og:type\"]').content === 'website'"
],
[
"style.css dimuat dengan link rel=\"stylesheet\"",
"!!$('link[rel=stylesheet][href=\"style.css\"]')"
],
[
"app.js dimuat dengan defer",
"!!$('script[src=\"app.js\"][defer]')"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "html-interaktif",
"topik": "html",
"setelah": "interaktif",
"judul": "Elemen interaktif tanpa JavaScript",
"contoh": {
"judul": "Contoh: details, progress, data-*",
"penjelasan": "<p><code>&lt;details&gt;</code> + <code>&lt;summary&gt;</code> membuat bagian yang bisa dibuka-tutup tanpa JavaScript. <code>&lt;progress&gt;</code> menampilkan kemajuan, <code>&lt;meter&gt;</code> menampilkan ukuran dalam rentang. Atribut <code>data-*</code> menyimpan data untuk JavaScript.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <details open>\n    <summary>Apa itu Odoo?</summary>\n    <p>ERP open source.</p>\n  </details>\n  <label>Progres belajar <progress value=\"7\" max=\"10\">70%</progress></label>\n  <p><button type=\"button\" data-produk=\"42\">Tambah</button></p>\n</body>\n</html>\n",
"kunci": "details/summary = FAQ tanpa JS. data-nama-apa-saja=\"...\" dibaca di JS lewat element.dataset.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "html-int-1",
"judul": "FAQ lamaran",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat FAQ berisi minimal <b>3</b> <code>&lt;details&gt;</code>, masing-masing dengan <code>&lt;summary&gt;</code> berisi pertanyaan dan paragraf jawaban. Pertanyaan pertama terbuka sejak awal (<code>open</code>).",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <h2>FAQ</h2>\n  <!-- tulis di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <h2>FAQ</h2>\n  <details open><summary>Apakah kerja onsite?</summary><p>Ya, di Batam.</p></details>\n  <details><summary>Ada coding test?</summary><p>Ada, setelah interview.</p></details>\n  <details><summary>Ada tunjangan tempat tinggal?</summary><p>Ada, untuk kandidat dari luar Batam.</p></details>\n</body>\n</html>\n",
"jelas": "details/summary sudah aksesibel (bisa dibuka dengan keyboard) tanpa satu baris JavaScript pun.",
"kompleksitas": "",
"petunjuk": [
"Struktur: <details><summary>Pertanyaan</summary><p>Jawaban</p></details>.",
"Atribut open tanpa nilai cukup ditulis di details pertama.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<h2>…</h2>…<details open><summary>…</summary><p>…</p></details>…<details><summary>…</summary><p>…</p></details>…<details><summary>…</summary><p>…</p></details>…</body>…</html>\n"
],
"tes": [
[
"Ada ≥ 3 <details>",
"$$('details').length >= 3"
],
[
"Setiap details punya <summary> berisi teks",
"$$('details').length > 0 && $$('details').every(x => x.querySelector('summary') && x.querySelector('summary').textContent.trim())"
],
[
"Setiap details punya paragraf jawaban",
"$$('details').length > 0 && $$('details').every(x => x.querySelector('p'))"
],
[
"Hanya details pertama yang open",
"$$('details').length > 0 && $$('details')[0].open && $$('details').slice(1).every(x => !x.open)"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "html-int-2",
"judul": "Panel progres belajar",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat panel berisi: <code>&lt;progress&gt;</code> dengan <code>max=\"45\"</code> dan <code>value=\"12\"</code> yang punya label; <code>&lt;meter&gt;</code> skor dengan <code>min=\"0\" max=\"100\" value=\"75\"</code>; dan minimal 2 tombol yang punya atribut <code>data-bab</code> berisi angka.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <!-- tulis di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <label for=\"prog\">Tantangan selesai</label>\n  <progress id=\"prog\" max=\"45\" value=\"12\">12 dari 45</progress>\n  <label for=\"skor\">Skor rata-rata</label>\n  <meter id=\"skor\" min=\"0\" max=\"100\" value=\"75\">75</meter>\n  <button type=\"button\" data-bab=\"1\">Bab 1</button>\n  <button type=\"button\" data-bab=\"2\">Bab 2</button>\n</body>\n</html>\n",
"jelas": "Atribut data-* adalah cara standar menyimpan informasi kecil di HTML untuk dipakai JavaScript, misalnya id produk di tombol 'Tambah'.",
"kompleksitas": "",
"petunjuk": [
"progress untuk kemajuan tugas; meter untuk nilai dalam rentang (skor, kapasitas disk).",
"data-bab=\"1\" dibaca di JavaScript sebagai tombol.dataset.bab.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<label for=\"prog\">…</label>…<progress id=\"prog\" max=\"45\" value=\"12\">…</progress>…<label for=\"skor\">…</label>…<meter id=\"skor\" min=\"0\" max=\"100\" value=\"75\">…</meter>…<button type=\"button\" data-bab=\"1\">…</button>…<button type=\"button\" data-bab=\"2\">…</button>…</body>…</html>\n"
],
"tes": [
[
"progress max 45 value 12",
"!!$('progress') && $('progress').max === 45 && $('progress').value === 12"
],
[
"progress punya label",
"!!$('progress') && (!!$('progress').closest('label') || (!!$('progress').id && !!$('label[for=\"' + $('progress').id + '\"]')))"
],
[
"meter min 0 max 100 value 75",
"!!$('meter') && $('meter').min === 0 && $('meter').max === 100 && $('meter').value === 75"
],
[
"≥ 2 tombol dengan data-bab berisi angka",
"$$('button[data-bab]').length >= 2 && $$('button[data-bab]').every(b => /^\\d+$/.test(b.dataset.bab))"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "uji-html-1",
"topik": "html",
"setelah": "semantik",
"judul": "Landing page toko kopi",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan bagian baru ke halaman yang sama.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan</title>\n</head>\n<body>\n  <h1>Bagian A</h1>\n  <!-- bagian B dan C menambah isi halaman yang sama -->\n</body>\n</html>\n",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "uji-html-1-a",
"judul": "Bagian A: Kerangka & navigasi",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "Toko kopi lokal meminta landing page sederhana. Kamu membangunnya bertahap: kerangka dan navigasi, katalog produk, lalu form pesanan.",
"soal": "Buat halaman lengkap (DOCTYPE, <code>lang=\"id\"</code>, charset, title) dengan <code>&lt;header&gt;</code> berisi <code>&lt;h1&gt;</code> dan <code>&lt;nav&gt;</code> berisi 3 link: <code>#produk</code>, <code>#tentang</code>, <code>#pesan</code>; lalu <code>&lt;main&gt;</code> dan <code>&lt;footer&gt;</code>.",
"awal": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- tulis halamanmu di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Kopi Kenar</title>\n</head>\n<body>\n  <header>\n    <h1>Kopi Kenar</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#produk\">Produk</a></li>\n        <li><a href=\"#tentang\">Tentang</a></li>\n        <li><a href=\"#pesan\">Pesan</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n  </main>\n  <footer>© 2026 Kopi Kenar</footer>\n</body>\n</html>\n",
"jelas": "Kerangka semantik membuat bagian B dan C tinggal 'mengisi' main.",
"kompleksitas": "",
"petunjuk": [
"Gabungkan bab Struktur (kerangka) dan Semantik (header/nav/main/footer).",
"Link internal: href=\"#produk\" dan seterusnya; tujuannya dibuat di bagian B dan C.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<header>…<h1>…</h1>…<nav>…<ul>…<li><a href=\"#produk\">…</a></li>…<li><a href=\"#tentang\">…</a></li>…<li><a href=\"#pesan\">…</a></li>…</ul>…</nav>…</header>…<main>…</main>…<footer>…</footer>…</body>…</html>\n"
],
"tes": [
[
"Halaman lengkap: doctype, lang=\"id\", charset, title",
"!!d.doctype && d.documentElement.lang === 'id' && !!$('meta[charset]') && d.title.trim().length > 0"
],
[
"header berisi h1 dan nav",
"!!$('header h1') && !!$('header nav')"
],
[
"nav punya link ke #produk, #tentang, #pesan",
"['#produk', '#tentang', '#pesan'].every(h => $('nav a[href=\"' + h + '\"]'))"
],
[
"Ada satu main dan satu footer",
"$$('main').length === 1 && $$('footer').length === 1"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "uji-html-1-b",
"judul": "Bagian B: Katalog produk",
"kategori": "studi",
"tingkat": 3,
"bahasa": "web",
"fungsi": "",
"cerita": "Lanjutan bagian A: halamanmu yang sudah lulus otomatis dipakai sebagai kode awal.",
"soal": "Di dalam main, tambahkan <code>&lt;section id=\"produk\"&gt;</code> dengan <code>&lt;h2&gt;</code> dan <b>3</b> <code>&lt;article&gt;</code> produk. Setiap article berisi <code>&lt;img&gt;</code> beralt, <code>&lt;h3&gt;</code> nama, dan <code>&lt;p class=\"harga\"&gt;</code> berisi \"Rp\". Tambahkan juga <code>&lt;section id=\"tentang\"&gt;</code> dengan <code>&lt;h2&gt;</code> dan daftar <code>&lt;ul&gt;</code> 3 keunggulan.",
"awal": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- tulis halamanmu di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Kopi Kenar</title>\n</head>\n<body>\n  <header>\n    <h1>Kopi Kenar</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#produk\">Produk</a></li>\n        <li><a href=\"#tentang\">Tentang</a></li>\n        <li><a href=\"#pesan\">Pesan</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n    <section id=\"produk\">\n      <h2>Produk</h2>\n      <article><img src=\"a.jpg\" alt=\"Kopi susu gula aren\"><h3>Kopi Susu</h3><p class=\"harga\">Rp 18.000</p></article>\n      <article><img src=\"b.jpg\" alt=\"Es teh manis\"><h3>Es Teh</h3><p class=\"harga\">Rp 6.000</p></article>\n      <article><img src=\"c.jpg\" alt=\"Roti bakar cokelat\"><h3>Roti Bakar</h3><p class=\"harga\">Rp 15.000</p></article>\n    </section>\n    <section id=\"tentang\">\n      <h2>Tentang kami</h2>\n      <ul><li>Biji kopi lokal</li><li>Harga mahasiswa</li><li>Buka sampai malam</li></ul>\n    </section>\n  </main>\n  <footer>© 2026 Kopi Kenar</footer>\n</body>\n</html>\n",
"jelas": "id pada section membuat link navigasi bagian A bekerja. Setiap kartu memakai struktur yang sama, siap diberi gaya CSS nanti.",
"kompleksitas": "",
"petunjuk": [
"Tambahkan isi di dalam <main> yang sudah ada, jangan membuat main kedua.",
"Satu article = satu kartu produk: img, h3, p.harga.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<header>…<h1>…</h1>…<nav>…<ul>…<li><a href=\"#produk\">…</a></li>…<li><a href=\"#tentang\">…</a></li>…<li><a href=\"#pesan\">…</a></li>…</ul>…</nav>…</header>…<main>…<section id=\"produk\">…<h2>…</h2>…<article><img src=\"a.jpg\" alt=\"Kopi susu gula aren\"><h3>…</h3><p class=\"harga\">…</p></article>…<article><img src=\"b.jpg\" alt=\"Es teh manis\"><h3>…</h3><p class=\"harga\">…</p></article>…<article><img src=\"c.jpg\" alt=\"Roti bakar cokelat\"><h3>…</h3><p class=\"harga\">…</p></article>…</section>…<section id=\"tentang\">…<h2>…</h2>…<ul><li>…</li><li>…</li><li>…</li></ul>…</section>…</main>…<footer>…</footer>…</body>…</html>\n"
],
"tes": [
[
"Ada section#produk dengan h2",
"!!$('main section#produk h2')"
],
[
"section#produk berisi 3 article",
"$$('#produk article').length === 3"
],
[
"Setiap article punya img beralt, h3, dan p.harga berisi Rp",
"$$('#produk article').length === 3 && $$('#produk article').every(a => a.querySelector('img') && (a.querySelector('img').getAttribute('alt') || '').trim() && a.querySelector('h3') && a.querySelector('p.harga') && /Rp/.test(a.querySelector('p.harga').textContent))"
],
[
"Ada section#tentang dengan h2 dan ul 3 item",
"!!$('section#tentang h2') && !!$('#tentang ul') && $('#tentang ul').children.length === 3"
],
[
"Kerangka bagian A tetap utuh",
"!!$('header nav') && $$('main').length === 1 && !!$('footer')"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "<!-- Bagian B: lanjutkan halaman di atas -->\n",
"mudah": []
},
{
"id": "uji-html-1-c",
"judul": "Bagian C: Form pesanan",
"kategori": "studi",
"tingkat": 3,
"bahasa": "web",
"fungsi": "",
"cerita": "Lanjutan bagian B: halamanmu yang sudah lulus otomatis dipakai sebagai kode awal.",
"soal": "Tambahkan <code>&lt;section id=\"pesan\"&gt;</code> berisi form: input nama (required), input email (<code>type=\"email\"</code>, required), <code>&lt;select&gt;</code> produk berisi 3 option sesuai produkmu, input jumlah <code>type=\"number\"</code> dengan <code>min=\"1\"</code>, textarea catatan, semuanya berlabel, dan tombol submit.",
"awal": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- tulis halamanmu di sini -->\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Kopi Kenar</title>\n</head>\n<body>\n  <header>\n    <h1>Kopi Kenar</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#produk\">Produk</a></li>\n        <li><a href=\"#tentang\">Tentang</a></li>\n        <li><a href=\"#pesan\">Pesan</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n    <section id=\"produk\">\n      <h2>Produk</h2>\n      <article><img src=\"a.jpg\" alt=\"Kopi susu gula aren\"><h3>Kopi Susu</h3><p class=\"harga\">Rp 18.000</p></article>\n      <article><img src=\"b.jpg\" alt=\"Es teh manis\"><h3>Es Teh</h3><p class=\"harga\">Rp 6.000</p></article>\n      <article><img src=\"c.jpg\" alt=\"Roti bakar cokelat\"><h3>Roti Bakar</h3><p class=\"harga\">Rp 15.000</p></article>\n    </section>\n    <section id=\"tentang\">\n      <h2>Tentang kami</h2>\n      <ul><li>Biji kopi lokal</li><li>Harga mahasiswa</li><li>Buka sampai malam</li></ul>\n    </section>\n    <section id=\"pesan\">\n      <h2>Pesan sekarang</h2>\n      <form>\n        <label for=\"nama\">Nama</label>\n        <input id=\"nama\" name=\"nama\" required>\n        <label for=\"email\">Email</label>\n        <input id=\"email\" name=\"email\" type=\"email\" required>\n        <label for=\"produk-pilih\">Produk</label>\n        <select id=\"produk-pilih\" name=\"produk\"><option>Kopi Susu</option><option>Es Teh</option><option>Roti Bakar</option></select>\n        <label for=\"jumlah\">Jumlah</label>\n        <input id=\"jumlah\" name=\"jumlah\" type=\"number\" min=\"1\" value=\"1\">\n        <label for=\"catatan\">Catatan</label>\n        <textarea id=\"catatan\" name=\"catatan\"></textarea>\n        <button type=\"submit\">Pesan</button>\n      </form>\n    </section>\n  </main>\n  <footer>© 2026 Kopi Kenar</footer>\n</body>\n</html>\n",
"jelas": "Halaman lengkap ini memakai semua bab 1–5. Di bab CSS, halaman serupa akan kamu beri tata letak dan gaya.",
"kompleksitas": "",
"petunjuk": [
"Gabungkan bab Form: setiap input punya id dan label for yang sama.",
"type=\"number\" min=\"1\" mencegah jumlah nol atau negatif.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…</head>…<body>…<header>…<h1>…</h1>…<nav>…<ul>…<li><a href=\"#produk\">…</a></li>…<li><a href=\"#tentang\">…</a></li>…<li><a href=\"#pesan\">…</a></li>…</ul>…</nav>…</header>…<main>…<section id=\"produk\">…<h2>…</h2>…<article><img src=\"a.jpg\" alt=\"Kopi susu gula aren\"><h3>…</h3><p class=\"harga\">…</p></article>…<article><img src=\"b.jpg\" alt=\"Es teh manis\"><h3>…</h3><p class=\"harga\">…</p></article>…<article><img src=\"c.jpg\" alt=\"Roti bakar cokelat\"><h3>…</h3><p class=\"harga\">…</p></article>…</section>…<section id=\"tentang\">…<h2>…</h2>…<ul><li>…</li><li>…</li><li>…</li></ul>…</section>…<section id=\"pesan\">…<h2>…</h2>…<form>…<label for=\"nama\">…</label>…<input id=\"nama\" name=\"nama\" required>…<label for=\"email\">…</label>…<input id=\"email\" name=\"email\" type=\"email\" required>…<label for=\"produk-pilih\">…</label>…<select id=\"produk-pilih\" name=\"produk\"><option>…</option><option>…</option><option>…</option></select>…<label for=\"jumlah\">…</label>…<input id=\"jumlah\" name=\"jumlah\" type=\"number\" min=\"1\" value=\"1\">…<label for=\"catatan\">…</label>…<textarea id=\"catatan\" name=\"catatan\"></textarea>…<button type=\"submit\">…</button>…</form>…</section>…</main>…<footer>…</footer>…</body>…</html>\n"
],
"tes": [
[
"Ada section#pesan berisi form",
"!!$('section#pesan form')"
],
[
"Input nama required dan email type=email required",
"$$('#pesan input[required]').length >= 2 && !!$('#pesan input[type=email][required]')"
],
[
"Select berisi 3 option",
"!!$('#pesan select') && $('#pesan select').options.length === 3"
],
[
"Input jumlah type=number min=1",
"!!$('#pesan input[type=number][min=\"1\"]')"
],
[
"Ada textarea",
"!!$('#pesan textarea')"
],
[
"Semua kontrol berlabel",
"$$('input:not([type=submit]):not([type=hidden]),select,textarea').every(x => x.closest('label') || (x.id && $('label[for=\"' + x.id + '\"]')))"
],
[
"Ada tombol submit",
"!!$('#pesan button[type=submit], #pesan input[type=submit]')"
],
[
"Bagian A dan B tetap utuh",
"$$('#produk article').length === 3 && !!$('header nav')"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "<!-- Bagian C: lanjutkan halaman di atas -->\n",
"mudah": []
}
],
"ujian": true,
"cakupan": "Bab 1–5: struktur, teks & daftar, link & gambar, form, semantik"
},
{
"id": "css-dasar",
"topik": "css",
"setelah": "dasar",
"judul": "Selector dan warna",
"contoh": {
"judul": "Contoh: tag, class, id",
"penjelasan": "<p>Aturan CSS = <code>selector { properti: nilai; }</code>. Selector tag (<code>h1</code>) mengenai semua tag itu, class (<code>.harga</code>) mengenai elemen ber-class itu, id (<code>#judul</code>) mengenai satu elemen. Warna bisa ditulis hex <code>#0d1b2a</code>, <code>rgb()</code>, atau nama.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { background-color: #f4f1de; }\n    h1 { color: #0d1b2a; }\n    .harga { color: #b55a7c; font-weight: bold; }\n    #judul { text-decoration: underline; }\n  </style>\n</head>\n<body>\n  <h1 id=\"judul\">Kopi Kenar</h1>\n  <p>Menu hari ini:</p>\n  <p class=\"harga\">Rp 18.000</p>\n</body>\n</html>\n",
"kunci": "tag → semua; .class → yang ber-class; #id → satu elemen. Hex #0d1b2a sama dengan rgb(13, 27, 42).",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-dasar-1",
"judul": "Warna halaman",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Beri <code>body</code> latar <code>#f4f1de</code>, judul <code>h1</code> warna <code>#0d1b2a</code>, dan elemen ber-class <code>penting</code> warna <code>#c0392b</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <h1>Pengumuman</h1>\n  <p>Coding test dimulai pukul 09.00.</p>\n  <p class=\"penting\">Bawa laptop sendiri.</p>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { background-color: #f4f1de; }\n    h1 { color: #0d1b2a; }\n    .penting { color: #c0392b; }\n  </style>\n</head>\n<body>\n  <h1>Pengumuman</h1>\n  <p>Coding test dimulai pukul 09.00.</p>\n  <p class=\"penting\">Bawa laptop sendiri.</p>\n</body>\n</html>\n",
"jelas": "Selector class lebih tepat sasaran daripada tag: hanya paragraf penting yang berubah.",
"kompleksitas": "",
"petunjuk": [
"Tiga aturan: body, h1, .penting.",
"Selector class diawali titik: .penting { color: #c0392b; }",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<h1>…</h1>…<p>…</p>…<p class=\"penting\">…</p>…</body>…</html>\n"
],
"tes": [
[
"body berlatar #f4f1de",
"gaya('body', 'background-color') === 'rgb(244, 241, 222)'"
],
[
"h1 berwarna #0d1b2a",
"gaya('h1', 'color') === 'rgb(13, 27, 42)'"
],
[
".penting berwarna #c0392b",
"gaya('.penting', 'color') === 'rgb(192, 57, 43)'"
],
[
"Paragraf biasa tidak ikut merah",
"gaya('p:not(.penting)', 'color') !== 'rgb(192, 57, 43)'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-dasar-2",
"judul": "Selector keturunan dan id",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Link di dalam <code>nav</code> berwarna <code>#415a77</code> tanpa garis bawah, link di <code>footer</code> tetap bawaan; harga di dalam kartu (<code>.kartu .harga</code>) tebal (700); dan elemen <code>#promo</code> berlatar <code>#fff3cd</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <nav><a href=\"#\">Beranda</a> <a href=\"#\">Menu</a></nav>\n  <div class=\"kartu\"><h2>Kopi</h2><p class=\"harga\">Rp 18.000</p></div>\n  <p class=\"harga\">Harga lama Rp 20.000</p>\n  <p id=\"promo\">Diskon 10% hari ini!</p>\n  <footer><a href=\"#\">Kontak</a></footer>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    nav a { color: #415a77; text-decoration: none; }\n    .kartu .harga { font-weight: 700; }\n    #promo { background-color: #fff3cd; }\n  </style>\n</head>\n<body>\n  <nav><a href=\"#\">Beranda</a> <a href=\"#\">Menu</a></nav>\n  <div class=\"kartu\"><h2>Kopi</h2><p class=\"harga\">Rp 18.000</p></div>\n  <p class=\"harga\">Harga lama Rp 20.000</p>\n  <p id=\"promo\">Diskon 10% hari ini!</p>\n  <footer><a href=\"#\">Kontak</a></footer>\n</body>\n</html>\n",
"jelas": "Selector keturunan membatasi aturan ke wilayah tertentu, sehingga link footer dan harga di luar kartu tidak ikut berubah.",
"kompleksitas": "",
"petunjuk": [
"Selector keturunan memakai spasi: nav a = semua a di DALAM nav.",
"font-weight: 700 sama dengan bold.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<nav><a href=\"#\">…</a>…<a href=\"#\">…</a></nav>…<div class=\"kartu\"><h2>…</h2><p class=\"harga\">…</p></div>…<p class=\"harga\">…</p>…<p id=\"promo\">…</p>…<footer><a href=\"#\">…</a></footer>…</body>…</html>\n"
],
"tes": [
[
"Link nav berwarna #415a77",
"gaya('nav a', 'color') === 'rgb(65, 90, 119)'"
],
[
"Link nav tanpa garis bawah",
"gaya('nav a', 'text-decoration-line') === 'none'"
],
[
"Link footer tidak ikut berubah",
"gaya('footer a', 'color') !== 'rgb(65, 90, 119)'"
],
[
"Harga di dalam kartu tebal",
"gaya('.kartu .harga', 'font-weight') === '700'"
],
[
"Harga di luar kartu tidak tebal",
"gaya('body > .harga', 'font-weight') === '400'"
],
[
"#promo berlatar #fff3cd",
"gaya('#promo', 'background-color') === 'rgb(255, 243, 205)'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-teks",
"topik": "css",
"setelah": "teks",
"judul": "Tipografi yang enak dibaca",
"contoh": {
"judul": "Contoh: font, ukuran, jarak baris",
"penjelasan": "<p><code>font-family</code> memilih huruf (selalu akhiri dengan cadangan umum seperti <code>sans-serif</code>), <code>font-size</code> ukuran, <code>line-height</code> jarak baris (1.5–1.7 nyaman dibaca), <code>text-align</code> perataan.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { font-family: Arial, sans-serif; }\n    h1 { text-align: center; letter-spacing: 1px; }\n    p { font-size: 18px; line-height: 1.6; max-width: 60ch; }\n  </style>\n</head>\n<body>\n  <h1>Judul Artikel</h1>\n  <p>Paragraf yang nyaman dibaca punya jarak baris longgar dan panjang baris tidak terlalu lebar.</p>\n</body>\n</html>\n",
"kunci": "line-height tanpa satuan (1.6) dikalikan ukuran font: 18px × 1.6 = 28.8px.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-teks-1",
"judul": "Artikel yang nyaman",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Atur: <code>body</code> memakai <code>font-family</code> yang diakhiri <code>sans-serif</code>; <code>p</code> berukuran <code>18px</code> dengan <code>line-height: 1.6</code>; <code>h1</code> rata tengah.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <h1>Belajar CSS</h1>\n  <p>CSS mengatur tampilan halaman.</p>\n  <p>Ukuran dan jarak baris memengaruhi kenyamanan membaca.</p>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { font-family: Arial, sans-serif; }\n    p { font-size: 18px; line-height: 1.6; }\n    h1 { text-align: center; }\n  </style>\n</head>\n<body>\n  <h1>Belajar CSS</h1>\n  <p>CSS mengatur tampilan halaman.</p>\n  <p>Ukuran dan jarak baris memengaruhi kenyamanan membaca.</p>\n</body>\n</html>\n",
"jelas": "Nilai line-height tanpa satuan diwariskan sebagai rasio, sehingga tetap proporsional untuk ukuran huruf berbeda.",
"kompleksitas": "",
"petunjuk": [
"Tiga selector: body, p, h1.",
"line-height: 1.6 (tanpa px) berarti 1,6 kali ukuran huruf.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<h1>…</h1>…<p>…</p>…<p>…</p>…</body>…</html>\n"
],
"tes": [
[
"font-family diakhiri sans-serif",
"/sans-serif\\s*$/.test(gaya('body', 'font-family'))"
],
[
"p berukuran 18px",
"gaya('p', 'font-size') === '18px'"
],
[
"line-height p = 1.6 × 18px",
"Math.abs(parseFloat(gaya('p', 'line-height')) - 28.8) < 0.2"
],
[
"h1 rata tengah",
"gaya('h1', 'text-align') === 'center'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-teks-2",
"judul": "Judul bagian dan link",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>h2</code> huruf kapital semua (<code>text-transform</code>), jarak huruf <code>2px</code>, tebal 700; link (<code>a</code>) tanpa garis bawah dan berwarna <code>#0f766e</code>; dan <code>.catatan</code> miring (italic) berukuran <code>14px</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <h2>Layanan kami</h2>\n  <p>Lihat <a href=\"#\">daftar harga</a>.</p>\n  <p class=\"catatan\">Harga dapat berubah.</p>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    h2 { text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }\n    a { text-decoration: none; color: #0f766e; }\n    .catatan { font-style: italic; font-size: 14px; }\n  </style>\n</head>\n<body>\n  <h2>Layanan kami</h2>\n  <p>Lihat <a href=\"#\">daftar harga</a>.</p>\n  <p class=\"catatan\">Harga dapat berubah.</p>\n</body>\n</html>\n",
"jelas": "Mengatur kapital lewat CSS (bukan mengetik huruf besar di HTML) membuat teks tetap mudah diubah dan dibaca pembaca layar dengan benar.",
"kompleksitas": "",
"petunjuk": [
"text-transform: uppercase mengubah tampilan tanpa mengubah teks HTML-nya.",
"font-style: italic untuk miring.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<h2>…</h2>…<p>…<a href=\"#\">…</a>…</p>…<p class=\"catatan\">…</p>…</body>…</html>\n"
],
"tes": [
[
"h2 huruf kapital",
"gaya('h2', 'text-transform') === 'uppercase'"
],
[
"h2 letter-spacing 2px",
"gaya('h2', 'letter-spacing') === '2px'"
],
[
"h2 tebal 700",
"gaya('h2', 'font-weight') === '700'"
],
[
"Link tanpa garis bawah, warna #0f766e",
"gaya('a', 'text-decoration-line') === 'none' && gaya('a', 'color') === 'rgb(15, 118, 110)'"
],
[
".catatan miring 14px",
"gaya('.catatan', 'font-style') === 'italic' && gaya('.catatan', 'font-size') === '14px'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-box",
"topik": "css",
"setelah": "boxmodel",
"judul": "Box model: kartu produk",
"contoh": {
"judul": "Contoh: content, padding, border, margin",
"penjelasan": "<p>Setiap elemen adalah kotak: isi → <code>padding</code> (jarak dalam) → <code>border</code> → <code>margin</code> (jarak luar). Dengan <code>box-sizing: border-box</code>, <code>width</code> sudah termasuk padding dan border, jadi ukurannya mudah ditebak.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .kartu {\n      box-sizing: border-box;\n      width: 300px;\n      padding: 16px;\n      border: 2px solid #415a77;\n      border-radius: 8px;\n      margin: 24px auto;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"kartu\">Kotak 300px</div>\n</body>\n</html>\n",
"kunci": "border-box: lebar total = width. margin: 0 auto memusatkan elemen block yang punya width.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-box-1",
"judul": "Kartu produk",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Beri <code>.kartu</code> padding <code>16px</code>, border <code>1px solid #d4c4a8</code>, sudut membulat <code>8px</code>, dan jarak bawah antarkartu <code>24px</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"kartu\">Kopi Susu</div>\n  <div class=\"kartu\">Es Teh</div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .kartu { padding: 16px; border: 1px solid #d4c4a8; border-radius: 8px; margin-bottom: 24px; }\n  </style>\n</head>\n<body>\n  <div class=\"kartu\">Kopi Susu</div>\n  <div class=\"kartu\">Es Teh</div>\n</body>\n</html>\n",
"jelas": "padding memberi ruang napas di dalam kartu; margin memisahkan kartu satu dengan yang lain.",
"kompleksitas": "",
"petunjuk": [
"Semua properti ditulis di satu aturan .kartu { ... }.",
"Shorthand border: 1px solid #d4c4a8.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"kartu\">…</div>…<div class=\"kartu\">…</div>…</body>…</html>\n"
],
"tes": [
[
"padding 16px",
"gaya('.kartu', 'padding-top') === '16px' && gaya('.kartu', 'padding-left') === '16px'"
],
[
"border 1px solid #d4c4a8",
"gaya('.kartu', 'border-top-width') === '1px' && gaya('.kartu', 'border-top-style') === 'solid' && gaya('.kartu', 'border-top-color') === 'rgb(212, 196, 168)'"
],
[
"Sudut 8px",
"gaya('.kartu', 'border-top-left-radius') === '8px'"
],
[
"Jarak bawah 24px",
"gaya('.kartu', 'margin-bottom') === '24px'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-box-2",
"judul": "Ukuran pasti dan terpusat",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>.kotak</code> dengan lebar total <b>tepat 320px</b> walau punya padding <code>20px</code> dan border <code>4px</code>, lalu letakkan di tengah halaman secara horizontal.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"kotak\">Form login</div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .kotak { box-sizing: border-box; width: 320px; padding: 20px; border: 4px solid #0d1b2a; margin: 0 auto; }\n  </style>\n</head>\n<body>\n  <div class=\"kotak\">Form login</div>\n</body>\n</html>\n",
"jelas": "Banyak proyek memasang * { box-sizing: border-box } di awal CSS karena perhitungan ukuran jadi jauh lebih mudah.",
"kompleksitas": "",
"petunjuk": [
"Tanpa box-sizing: border-box, lebar total = 320 + 2×20 + 2×4 = 368px.",
"margin-left dan margin-right auto (shorthand margin: 0 auto) memusatkan block yang lebarnya tetap.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"kotak\">…</div>…</body>…</html>\n"
],
"tes": [
[
"Lebar total tepat 320px",
"$('.kotak').offsetWidth === 320"
],
[
"padding 20px",
"gaya('.kotak', 'padding-left') === '20px'"
],
[
"border 4px",
"gaya('.kotak', 'border-left-width') === '4px'"
],
[
"Terpusat horizontal",
"Math.abs(($('.kotak').getBoundingClientRect().left - d.body.getBoundingClientRect().left) - (d.body.getBoundingClientRect().right - $('.kotak').getBoundingClientRect().right)) < 2"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-flex",
"topik": "css",
"setelah": "layout",
"judul": "Flexbox: navbar dan baris kartu",
"contoh": {
"judul": "Contoh: display flex, gap, justify-content",
"penjelasan": "<p><code>display: flex</code> menyusun anak-anak dalam satu baris. <code>gap</code> memberi jarak antar-anak, <code>justify-content</code> mengatur sumbu utama (horizontal), <code>align-items</code> sumbu silang (vertikal), <code>flex-wrap: wrap</code> membuat anak turun baris saat penuh.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .bar { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #0d1b2a; color: white; }\n    .bar a { color: white; margin-left: 12px; }\n  </style>\n</head>\n<body>\n  <header class=\"bar\"><b>Logo</b><nav><a href=\"#\">Menu</a> <a href=\"#\">Kontak</a></nav></header>\n</body>\n</html>\n",
"kunci": "space-between: anak pertama di kiri, terakhir di kanan. gap lebih rapi daripada margin satu per satu.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-flex-1",
"judul": "Menu horizontal",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Ubah <code>nav ul</code> menjadi baris horizontal dengan flexbox, jarak antar-item <code>16px</code> (pakai <code>gap</code>), tanpa titik daftar (<code>list-style</code>), dan tanpa padding bawaan.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <nav>\n    <ul>\n      <li><a href=\"#\">Beranda</a></li>\n      <li><a href=\"#\">Produk</a></li>\n      <li><a href=\"#\">Kontak</a></li>\n    </ul>\n  </nav>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    nav ul { display: flex; gap: 16px; list-style: none; padding: 0; }\n  </style>\n</head>\n<body>\n  <nav>\n    <ul>\n      <li><a href=\"#\">Beranda</a></li>\n      <li><a href=\"#\">Produk</a></li>\n      <li><a href=\"#\">Kontak</a></li>\n    </ul>\n  </nav>\n</body>\n</html>\n",
"jelas": "Flex diterapkan ke wadah; anak-anaknya otomatis menjadi flex item.",
"kompleksitas": "",
"petunjuk": [
"display: flex dipasang pada INDUK (ul), bukan pada li.",
"list-style: none; padding: 0; menghapus gaya bawaan daftar.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<nav>…<ul>…<li><a href=\"#\">…</a></li>…<li><a href=\"#\">…</a></li>…<li><a href=\"#\">…</a></li>…</ul>…</nav>…</body>…</html>\n"
],
"tes": [
[
"ul memakai display: flex",
"gaya('nav ul', 'display') === 'flex'"
],
[
"gap 16px",
"gaya('nav ul', 'column-gap') === '16px'"
],
[
"Tanpa titik daftar",
"gaya('nav ul', 'list-style-type') === 'none'"
],
[
"Item tersusun dalam satu baris",
"new Set($$('nav li').map(li => Math.round(li.getBoundingClientRect().top))).size === 1"
],
[
"padding-left ul 0",
"gaya('nav ul', 'padding-left') === '0px'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-flex-2",
"judul": "Header dan baris kartu",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>.bar</code> flex dengan logo di kiri dan menu di kanan (<code>space-between</code>) serta isi terpusat vertikal. Lalu <code>.daftar</code> flex yang membungkus (<code>wrap</code>) dengan gap <code>20px</code>, dan setiap <code>.kartu</code> lebar <code>280px</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <header class=\"bar\"><b>Kopi Kenar</b><nav><a href=\"#\">Menu</a></nav></header>\n  <div class=\"daftar\">\n    <div class=\"kartu\">Kopi</div><div class=\"kartu\">Teh</div><div class=\"kartu\">Roti</div><div class=\"kartu\">Donat</div>\n  </div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .bar { display: flex; justify-content: space-between; align-items: center; }\n    .daftar { display: flex; flex-wrap: wrap; gap: 20px; }\n    .kartu { width: 280px; }\n  </style>\n</head>\n<body>\n  <header class=\"bar\"><b>Kopi Kenar</b><nav><a href=\"#\">Menu</a></nav></header>\n  <div class=\"daftar\">\n    <div class=\"kartu\">Kopi</div><div class=\"kartu\">Teh</div><div class=\"kartu\">Roti</div><div class=\"kartu\">Donat</div>\n  </div>\n</body>\n</html>\n",
"jelas": "Kombinasi flex-wrap + gap + lebar tetap adalah cara cepat membuat grid kartu yang responsif tanpa media query.",
"kompleksitas": "",
"petunjuk": [
"Dua wadah flex terpisah: .bar dan .daftar.",
"Dengan lebar 1000px, 4 kartu × 280px + gap tidak muat satu baris, jadi wrap membuatnya turun.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<header class=\"bar\"><b>…</b><nav><a href=\"#\">…</a></nav></header>…<div class=\"daftar\">…<div class=\"kartu\">…</div><div class=\"kartu\">…</div><div class=\"kartu\">…</div><div class=\"kartu\">…</div>…</div>…</body>…</html>\n"
],
"tes": [
[
".bar flex dengan space-between",
"gaya('.bar', 'display') === 'flex' && gaya('.bar', 'justify-content') === 'space-between'"
],
[
".bar align-items center",
"gaya('.bar', 'align-items') === 'center'"
],
[
"Menu berada di sisi kanan",
"$('.bar nav').getBoundingClientRect().right >= $('.bar').getBoundingClientRect().right - 1"
],
[
".daftar flex wrap gap 20px",
"gaya('.daftar', 'display') === 'flex' && gaya('.daftar', 'flex-wrap') === 'wrap' && gaya('.daftar', 'column-gap') === '20px'"
],
[
"Kartu lebar 280px",
"$$('.kartu').every(k => Math.round(k.getBoundingClientRect().width) === 280)"
],
[
"Kartu turun ke baris kedua saat penuh",
"new Set($$('.kartu').map(k => Math.round(k.getBoundingClientRect().top))).size >= 2"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-grid",
"topik": "css",
"setelah": "posisi",
"judul": "Grid dan position",
"contoh": {
"judul": "Contoh: grid 3 kolom dan lencana absolut",
"penjelasan": "<p><code>display: grid</code> + <code>grid-template-columns: repeat(3, 1fr)</code> membuat 3 kolom sama lebar. <code>position: relative</code> pada induk + <code>position: absolute</code> pada anak menempatkan anak relatif ke induk. <code>position: sticky; top: 0</code> membuat header menempel saat digulir.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }\n    .kartu { position: relative; padding: 30px; background: #e8e8e8; }\n    .lencana { position: absolute; top: 6px; right: 6px; background: #b55a7c; color: white; font-size: 12px; padding: 2px 6px; }\n  </style>\n</head>\n<body>\n  <div class=\"galeri\"><div class=\"kartu\">1<span class=\"lencana\">Baru</span></div><div class=\"kartu\">2</div><div class=\"kartu\">3</div></div>\n</body>\n</html>\n",
"kunci": "1fr = satu bagian dari sisa ruang. absolute mengacu ke leluhur terdekat yang position-nya bukan static.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-grid-1",
"judul": "Galeri 3 kolom",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Jadikan <code>.galeri</code> grid <b>3 kolom sama lebar</b> dengan jarak <code>16px</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"galeri\">\n    <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>\n  </div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }\n  </style>\n</head>\n<body>\n  <div class=\"galeri\">\n    <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>\n  </div>\n</body>\n</html>\n",
"jelas": "Grid cocok untuk tata letak dua dimensi (baris DAN kolom); flex untuk satu arah.",
"kompleksitas": "",
"petunjuk": [
"grid-template-columns: repeat(3, 1fr).",
"gap mengatur jarak baris dan kolom sekaligus.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"galeri\">…<div>…</div><div>…</div><div>…</div><div>…</div><div>…</div><div>…</div>…</div>…</body>…</html>\n"
],
"tes": [
[
".galeri display grid",
"gaya('.galeri', 'display') === 'grid'"
],
[
"Tepat 3 kolom",
"gaya('.galeri', 'grid-template-columns').split(' ').length === 3"
],
[
"Kolom sama lebar",
"(c => Math.max(...c) - Math.min(...c) < 1)(gaya('.galeri', 'grid-template-columns').split(' ').map(parseFloat))"
],
[
"gap 16px",
"gaya('.galeri', 'column-gap') === '16px' && gaya('.galeri', 'row-gap') === '16px'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-grid-2",
"judul": "Header lengket dan lencana",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>header</code> menempel di atas saat digulir (<code>sticky</code>, <code>top: 0</code>) dan berada di atas konten (<code>z-index</code> ≥ 10). Lalu letakkan <code>.lencana</code> di pojok kanan atas <code>.kartu</code> (<code>top: 8px; right: 8px</code>) memakai position.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <header>Kopi Kenar</header>\n  <div class=\"kartu\"><h3>Kopi Susu</h3><span class=\"lencana\">Terlaris</span></div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    header { position: sticky; top: 0; z-index: 10; background: white; }\n    .kartu { position: relative; padding: 24px; }\n    .lencana { position: absolute; top: 8px; right: 8px; }\n  </style>\n</head>\n<body>\n  <header>Kopi Kenar</header>\n  <div class=\"kartu\"><h3>Kopi Susu</h3><span class=\"lencana\">Terlaris</span></div>\n</body>\n</html>\n",
"jelas": "Pola relative + absolute dipakai untuk lencana, ikon tutup, dan label diskon di hampir semua toko online.",
"kompleksitas": "",
"petunjuk": [
"Tanpa position: relative di .kartu, lencana akan menempel ke pojok halaman.",
"z-index hanya berlaku untuk elemen yang position-nya bukan static.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<header>…</header>…<div class=\"kartu\"><h3>…</h3><span class=\"lencana\">…</span></div>…</body>…</html>\n"
],
"tes": [
[
"header sticky top 0",
"gaya('header', 'position') === 'sticky' && gaya('header', 'top') === '0px'"
],
[
"header z-index ≥ 10",
"parseInt(gaya('header', 'z-index')) >= 10"
],
[
".kartu menjadi acuan posisi (relative)",
"gaya('.kartu', 'position') === 'relative'"
],
[
".lencana absolute di kanan atas kartu",
"gaya('.lencana', 'position') === 'absolute' && Math.abs($('.lencana').getBoundingClientRect().right - ($('.kartu').getBoundingClientRect().right - 8)) < 1.5 && Math.abs($('.lencana').getBoundingClientRect().top - ($('.kartu').getBoundingClientRect().top + 8)) < 1.5"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-dekorasi",
"topik": "css",
"setelah": "dekorasi",
"judul": "Bayangan, hover, dan responsif",
"contoh": {
"judul": "Contoh: box-shadow, :hover, @media",
"penjelasan": "<p><code>box-shadow</code> memberi bayangan, <code>:hover</code> berlaku saat kursor di atas elemen, dan <code>@media (max-width: 600px) { ... }</code> berisi aturan yang hanya aktif di layar sempit.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    button { background: #415a77; color: white; border: 0; padding: 10px 16px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,.2); }\n    button:hover { background: #0d1b2a; }\n    .galeri { display: flex; gap: 8px; }\n    @media (max-width: 600px) { .galeri { flex-direction: column; } }\n  </style>\n</head>\n<body>\n  <div class=\"galeri\"><button>Beli</button><button>Simpan</button></div>\n</body>\n</html>\n",
"kunci": "Mobile-first: gaya dasar untuk HP, lalu @media (min-width) untuk layar lebar. Atau sebaliknya dengan max-width.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-dek-1",
"judul": "Tombol dengan bayangan dan hover",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Beri <code>.tombol</code> bayangan (<code>box-shadow</code> apa saja), sudut <code>6px</code>, latar <code>#415a77</code>, kursor <code>pointer</code>, dan aturan <code>.tombol:hover</code> yang mengganti latar.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <button class=\"tombol\">Kirim lamaran</button>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .tombol { box-shadow: 0 2px 6px rgba(0, 0, 0, .2); border-radius: 6px; background-color: #415a77; cursor: pointer; }\n    .tombol:hover { background-color: #0d1b2a; }\n  </style>\n</head>\n<body>\n  <button class=\"tombol\">Kirim lamaran</button>\n</body>\n</html>\n",
"jelas": "cursor: pointer dan perubahan warna saat hover memberi tanda bahwa elemen bisa diklik.",
"kompleksitas": "",
"petunjuk": [
"box-shadow: geser-x geser-y blur warna, misalnya 0 2px 6px rgba(0,0,0,.2).",
"Aturan hover ditulis terpisah: .tombol:hover { background-color: ...; }",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<button class=\"tombol\">…</button>…</body>…</html>\n"
],
"tes": [
[
"Ada box-shadow",
"gaya('.tombol', 'box-shadow') !== 'none'"
],
[
"Sudut 6px dan latar #415a77",
"gaya('.tombol', 'border-top-left-radius') === '6px' && gaya('.tombol', 'background-color') === 'rgb(65, 90, 119)'"
],
[
"Kursor pointer",
"gaya('.tombol', 'cursor') === 'pointer'"
],
[
"Ada aturan .tombol:hover",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.selectorText && r.selectorText.replace(/\\s/g, '').includes('.tombol:hover'))"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-dek-2",
"judul": "Galeri responsif",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "<code>.galeri</code> sudah grid 3 kolom. Tambahkan <code>@media (max-width: 600px)</code> yang membuatnya <b>1 kolom</b> (<code>grid-template-columns: 1fr</code>). Gambar di dalamnya tidak boleh lebih lebar dari wadah (<code>max-width: 100%</code>).",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"galeri\"><img src=\"a.jpg\" alt=\"A\"><img src=\"b.jpg\" alt=\"B\"><img src=\"c.jpg\" alt=\"C\"></div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }\n    .galeri img { max-width: 100%; }\n    @media (max-width: 600px) {\n      .galeri { grid-template-columns: 1fr; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"galeri\"><img src=\"a.jpg\" alt=\"A\"><img src=\"b.jpg\" alt=\"B\"><img src=\"c.jpg\" alt=\"C\"></div>\n</body>\n</html>\n",
"jelas": "Media query mengubah tata letak sesuai lebar layar; ini dasar desain responsif.",
"kompleksitas": "",
"petunjuk": [
"Struktur: @media (max-width: 600px) { .galeri { grid-template-columns: 1fr; } }",
"max-width: 100% pada img mencegah gambar melebar keluar kartu di HP.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"galeri\"><img src=\"a.jpg\" alt=\"A\"><img src=\"b.jpg\" alt=\"B\"><img src=\"c.jpg\" alt=\"C\"></div>…</body>…</html>\n"
],
"tes": [
[
"Di layar lebar tetap 3 kolom",
"gaya('.galeri', 'grid-template-columns').split(' ').length === 3"
],
[
"Ada @media dengan max-width: 600px",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.type === 4).some(r => /max-width:\\s*600px/.test(r.conditionText || r.media.mediaText))"
],
[
"Di dalam @media, .galeri menjadi 1fr",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.type === 4).some(r => [...r.cssRules].some(x => x.selectorText === '.galeri' && x.style.gridTemplateColumns.replace(/\\s/g, '') === '1fr'))"
],
[
"Gambar max-width 100%",
"gaya('.galeri img', 'max-width') === '100%'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-lanjut",
"topik": "css",
"setelah": "lanjut",
"judul": "Variabel CSS dan spesifisitas",
"contoh": {
"judul": "Contoh: --variabel dan var()",
"penjelasan": "<p>Variabel CSS (<i>custom property</i>) ditulis <code>--nama: nilai</code> di <code>:root</code>, lalu dipakai <code>var(--nama)</code>. Spesifisitas menentukan aturan mana yang menang: id (1,0,0) &gt; class (0,1,0) &gt; tag (0,0,1). Hindari <code>!important</code>; naikkan spesifisitas dengan selector yang lebih tepat.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    :root { --utama: #415a77; --aksen: #b55a7c; }\n    #menu a { color: var(--utama); }\n    #menu a.aktif { color: var(--aksen); }   /* id + tag + class menang atas id + tag */\n  </style>\n</head>\n<body>\n  <nav id=\"menu\"><a href=\"#\">Beranda</a> <a href=\"#\" class=\"aktif\">Produk</a></nav>\n</body>\n</html>\n",
"kunci": "Ubah warna di satu tempat (:root) dan seluruh situs ikut berubah. #menu a.aktif lebih spesifik daripada #menu a.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-lanjut-1",
"judul": "Tema dengan variabel",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Definisikan di <code>:root</code> variabel <code>--utama: #415a77</code> dan <code>--latar: #f4f1de</code>. Gunakan <code>var()</code> untuk latar <code>body</code> dan latar <code>button</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <button>Simpan</button>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    :root { --utama: #415a77; --latar: #f4f1de; }\n    body { background-color: var(--latar); }\n    button { background-color: var(--utama); }\n  </style>\n</head>\n<body>\n  <button>Simpan</button>\n</body>\n</html>\n",
"jelas": "Variabel CSS adalah dasar tema gelap/terang: cukup ganti nilainya, semua komponen ikut.",
"kompleksitas": "",
"petunjuk": [
"Variabel ditulis di :root { --utama: #415a77; }.",
"Dipakai dengan var(--utama).",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<button>…</button>…</body>…</html>\n"
],
"tes": [
[
"--utama didefinisikan #415a77",
"gaya('html', '--utama').toLowerCase() === '#415a77'"
],
[
"--latar didefinisikan #f4f1de",
"gaya('html', '--latar').toLowerCase() === '#f4f1de'"
],
[
"body memakai --latar",
"gaya('body', 'background-color') === 'rgb(244, 241, 222)' && /var\\(--latar\\)/.test(d.querySelector('style').textContent)"
],
[
"button memakai --utama",
"gaya('button', 'background-color') === 'rgb(65, 90, 119)' && /var\\(--utama\\)/.test(d.querySelector('style').textContent)"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-lanjut-2",
"judul": "Menang tanpa !important",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "CSS awal membuat semua link menu merah dengan <code>#menu a</code>. Tambahkan aturan agar link <code>.aktif</code> berwarna <code>#2563eb</code> dan tebal, <b>tanpa</b> <code>!important</code> dan tanpa mengubah aturan yang sudah ada.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    #menu a { color: #dc2626; }\n    /* tambahkan aturanmu di bawah */\n  </style>\n</head>\n<body>\n  <nav id=\"menu\"><a href=\"#\">Beranda</a> <a href=\"#\" class=\"aktif\">Produk</a> <a href=\"#\">Kontak</a></nav>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    #menu a { color: #dc2626; }\n    #menu a.aktif { color: #2563eb; font-weight: 700; }\n  </style>\n</head>\n<body>\n  <nav id=\"menu\"><a href=\"#\">Beranda</a> <a href=\"#\" class=\"aktif\">Produk</a> <a href=\"#\">Kontak</a></nav>\n</body>\n</html>\n",
"jelas": "Memahami spesifisitas mencegah kebiasaan menempelkan !important, yang membuat CSS sulit dirawat. Di Odoo, menimpa gaya bawaan juga memakai selector yang lebih spesifik.",
"kompleksitas": "",
"petunjuk": [
"Coba dulu .aktif { color: ... } dan lihat: ia kalah karena #menu a punya id.",
"Selector #menu a.aktif punya spesifisitas lebih tinggi dari #menu a.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<nav id=\"menu\"><a href=\"#\">…</a>…<a href=\"#\" class=\"aktif\">…</a>…<a href=\"#\">…</a></nav>…</body>…</html>\n"
],
"tes": [
[
"Link .aktif berwarna #2563eb",
"gaya('.aktif', 'color') === 'rgb(37, 99, 235)'"
],
[
"Link .aktif tebal",
"gaya('.aktif', 'font-weight') === '700'"
],
[
"Link lain tetap merah",
"gaya('#menu a:not(.aktif)', 'color') === 'rgb(220, 38, 38)'"
],
[
"Tidak memakai !important",
"!/!important/.test(d.querySelector('style').textContent)"
],
[
"Aturan #menu a tetap ada",
"/#menu\\s+a\\s*\\{[^}]*#dc2626/.test(d.querySelector('style').textContent)"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-selektor",
"topik": "css",
"setelah": "selektor",
"judul": "Selector atribut dan pseudo",
"contoh": {
"judul": "Contoh: [atribut], :nth-child, ::before",
"penjelasan": "<p><code>a[href^=\"https\"]</code> = link yang href-nya diawali https. <code>li:nth-child(odd)</code> = item ganjil. <code>::before</code> menyisipkan isi dekoratif lewat <code>content</code>.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    li:nth-child(odd) { background: #eef; }\n    a[href^=\"https\"] { color: green; }\n    .wajib::after { content: \" *\"; color: red; }\n  </style>\n</head>\n<body>\n  <ul><li>Satu</li><li>Dua</li><li>Tiga</li></ul>\n  <a href=\"https://odoo.com\">Odoo</a> <a href=\"/lokal\">Lokal</a>\n  <p class=\"wajib\">Nama</p>\n</body>\n</html>\n",
"kunci": "[attr=nilai] persis, [attr^=awal], [attr$=akhir], [attr*=mengandung]. ::before/::after butuh content.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-sel-1",
"judul": "Link luar dan input email",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Link yang href-nya diawali <code>https</code> berwarna <code>#15803d</code>, link lain tidak. Input <code>type=\"email\"</code> diberi border <code>2px solid #415a77</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <a href=\"https://www.odoo.com\">Odoo</a>\n  <a href=\"/tentang\">Tentang</a>\n  <input type=\"email\" placeholder=\"Email\">\n  <input type=\"text\" placeholder=\"Nama\">\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    a[href^=\"https\"] { color: #15803d; }\n    input[type=\"email\"] { border: 2px solid #415a77; }\n  </style>\n</head>\n<body>\n  <a href=\"https://www.odoo.com\">Odoo</a>\n  <a href=\"/tentang\">Tentang</a>\n  <input type=\"email\" placeholder=\"Email\">\n  <input type=\"text\" placeholder=\"Nama\">\n</body>\n</html>\n",
"jelas": "Selector atribut menghindari menambah class satu per satu ke banyak elemen.",
"kompleksitas": "",
"petunjuk": [
"Selector atribut: a[href^=\"https\"] (^= artinya 'diawali').",
"input[type=\"email\"] hanya mengenai input email.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<a href=\"https://www.odoo.com\">…</a>…<a href=\"/tentang\">…</a>…<input type=\"email\" placeholder=\"Email\">…<input type=\"text\" placeholder=\"Nama\">…</body>…</html>\n"
],
"tes": [
[
"Link https hijau",
"gaya('a[href^=\"https\"]', 'color') === 'rgb(21, 128, 61)'"
],
[
"Link lokal tidak hijau",
"gaya('a[href=\"/tentang\"]', 'color') !== 'rgb(21, 128, 61)'"
],
[
"Input email border 2px #415a77",
"gaya('input[type=email]', 'border-top-width') === '2px' && gaya('input[type=email]', 'border-top-color') === 'rgb(65, 90, 119)'"
],
[
"Input teks tidak ikut",
"gaya('input[type=text]', 'border-top-color') !== 'rgb(65, 90, 119)'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-sel-2",
"judul": "Tabel belang dan tanda wajib",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Baris ganjil <code>tbody tr</code> berlatar <code>#f1f5f9</code> (baris genap tidak), baris pertama <code>tbody</code> tebal memakai <code>:first-child</code>, dan setiap <code>label.wajib</code> mendapat tanda <code>\" *\"</code> berwarna merah lewat <code>::after</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <table><tbody><tr><td>Ani</td></tr><tr><td>Budi</td></tr><tr><td>Cita</td></tr><tr><td>Dodi</td></tr></tbody></table>\n  <label class=\"wajib\">Nama</label> <label>Catatan</label>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    tbody tr:nth-child(odd) { background-color: #f1f5f9; }\n    tbody tr:first-child { font-weight: 700; }\n    label.wajib::after { content: \" *\"; color: red; }\n  </style>\n</head>\n<body>\n  <table><tbody><tr><td>Ani</td></tr><tr><td>Budi</td></tr><tr><td>Cita</td></tr><tr><td>Dodi</td></tr></tbody></table>\n  <label class=\"wajib\">Nama</label> <label>Catatan</label>\n</body>\n</html>\n",
"jelas": "Tanda wajib lewat ::after menjaga HTML tetap bersih; Odoo memakai teknik serupa untuk menandai field required.",
"kompleksitas": "",
"petunjuk": [
"nth-child(odd) = ganjil (1, 3, 5). first-child = anak pertama.",
"::after { content: \" *\"; color: red; } — content wajib ada agar pseudo-element muncul.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<table><tbody><tr><td>…</td></tr><tr><td>…</td></tr><tr><td>…</td></tr><tr><td>…</td></tr></tbody></table>…<label class=\"wajib\">…</label>…<label>…</label>…</body>…</html>\n"
],
"tes": [
[
"Baris ganjil berlatar #f1f5f9",
"gaya($$('tbody tr')[0], 'background-color') === 'rgb(241, 245, 249)' && gaya($$('tbody tr')[2], 'background-color') === 'rgb(241, 245, 249)'"
],
[
"Baris genap tidak",
"gaya($$('tbody tr')[1], 'background-color') !== 'rgb(241, 245, 249)'"
],
[
"Baris pertama tebal",
"gaya($$('tbody tr')[0], 'font-weight') === '700' && gaya($$('tbody tr')[1], 'font-weight') !== '700'"
],
[
"label.wajib::after berisi \" *\" merah",
"w.getComputedStyle($('label.wajib'), '::after').content === '\" *\"' && w.getComputedStyle($('label.wajib'), '::after').color === 'rgb(255, 0, 0)'"
],
[
"label biasa tanpa tanda",
"w.getComputedStyle($$('label')[1], '::after').content === 'none'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-satuan",
"topik": "css",
"setelah": "satuan",
"judul": "Satuan relatif: rem, %, vw",
"contoh": {
"judul": "Contoh: rem dan persen",
"penjelasan": "<p><code>rem</code> mengikuti ukuran huruf <code>html</code> (bawaan 16px), jadi 2rem = 32px. <code>%</code> mengikuti induk. <code>vw</code> = persen lebar layar. <code>clamp(min, ideal, max)</code> membatasi nilai yang fleksibel.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    html { font-size: 16px; }\n    h1 { font-size: 2rem; }\n    .wadah { width: 80%; max-width: 600px; margin: 0 auto; }\n    p { font-size: clamp(14px, 2vw, 20px); }\n  </style>\n</head>\n<body>\n  <div class=\"wadah\"><h1>Judul</h1><p>Isi</p></div>\n</body>\n</html>\n",
"kunci": "rem untuk ukuran huruf dan jarak yang konsisten; % untuk lebar relatif; max-width agar tidak terlalu lebar.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-satuan-1",
"judul": "Ukuran dengan rem",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Dengan <code>html</code> berukuran <code>16px</code>, buat <code>h1</code> <code>2.5rem</code>, <code>p</code> <code>1.125rem</code>, dan <code>.kartu</code> padding <code>1.5rem</code>. Gunakan satuan rem di CSS.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <h1>Judul</h1>\n  <div class=\"kartu\"><p>Isi kartu</p></div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    html { font-size: 16px; }\n    h1 { font-size: 2.5rem; }\n    p { font-size: 1.125rem; }\n    .kartu { padding: 1.5rem; }\n  </style>\n</head>\n<body>\n  <h1>Judul</h1>\n  <div class=\"kartu\"><p>Isi kartu</p></div>\n</body>\n</html>\n",
"jelas": "Jika pengguna memperbesar ukuran huruf di browser, ukuran rem ikut membesar sedangkan px tidak: lebih ramah aksesibilitas.",
"kompleksitas": "",
"petunjuk": [
"2.5 × 16 = 40px; 1.125 × 16 = 18px; 1.5 × 16 = 24px.",
"Tulis angkanya dalam rem, browser yang menghitung px-nya.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<h1>…</h1>…<div class=\"kartu\"><p>…</p></div>…</body>…</html>\n"
],
"tes": [
[
"h1 = 40px",
"gaya('h1', 'font-size') === '40px'"
],
[
"p = 18px",
"gaya('p', 'font-size') === '18px'"
],
[
".kartu padding 24px",
"gaya('.kartu', 'padding-top') === '24px'"
],
[
"Ditulis dengan satuan rem",
"(d.querySelector('style').textContent.match(/rem/g) || []).length >= 3"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-satuan-2",
"judul": "Wadah fleksibel",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>.wadah</code> selebar <code>90%</code> dari induk tetapi maksimal <code>720px</code>, terpusat; <code>.sidebar</code> di dalamnya selebar <code>25%</code> dari wadah; dan <code>h1</code> memakai <code>clamp(24px, 5vw, 40px)</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"wadah\"><aside class=\"sidebar\">Menu</aside><h1>Judul responsif</h1></div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { margin: 0; }\n    .wadah { width: 90%; max-width: 720px; margin: 0 auto; }\n    .sidebar { width: 25%; }\n    h1 { font-size: clamp(24px, 5vw, 40px); }\n  </style>\n</head>\n<body>\n  <div class=\"wadah\"><aside class=\"sidebar\">Menu</aside><h1>Judul responsif</h1></div>\n</body>\n</html>\n",
"jelas": "Pasangan width % + max-width adalah pola paling umum untuk wadah konten yang nyaman dibaca di semua layar.",
"kompleksitas": "",
"petunjuk": [
"width: 90% dengan max-width: 720px; di layar 1000px, 90% = 900px sehingga max-width yang menang.",
"5vw di layar 1000px = 50px, lalu clamp membatasinya ke 40px.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"wadah\"><aside class=\"sidebar\">…</aside><h1>…</h1></div>…</body>…</html>\n"
],
"tes": [
[
".wadah dibatasi 720px pada layar 1000px",
"Math.round($('.wadah').getBoundingClientRect().width) === 720"
],
[
".wadah terpusat",
"Math.abs($('.wadah').getBoundingClientRect().left - (w.innerWidth - $('.wadah').getBoundingClientRect().right)) < 2"
],
[
".sidebar 25% dari wadah",
"Math.abs($('.sidebar').getBoundingClientRect().width - $('.wadah').getBoundingClientRect().width * 0.25) < 1"
],
[
"h1 memakai clamp",
"/clamp\\(\\s*24px\\s*,\\s*5vw\\s*,\\s*40px\\s*\\)/.test(d.querySelector('style').textContent)"
],
[
"h1 di layar 1000px = 40px (dibatasi maksimum)",
"gaya('h1', 'font-size') === '40px'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-animasi",
"topik": "css",
"setelah": "animasi",
"judul": "Transition dan @keyframes",
"contoh": {
"judul": "Contoh: transisi hover dan animasi muncul",
"penjelasan": "<p><code>transition</code> menghaluskan perubahan (misalnya saat hover). <code>transform: translateY(-4px)</code> menggeser tanpa mengubah tata letak. <code>@keyframes</code> mendefinisikan animasi yang dipakai lewat <code>animation</code>. Hormati pengguna yang memilih <code>prefers-reduced-motion</code>.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .kartu { padding: 24px; background: #e8e8e8; transition: transform .3s ease; animation: muncul .6s ease-out; }\n    .kartu:hover { transform: translateY(-4px); }\n    @keyframes muncul { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }\n    @media (prefers-reduced-motion: reduce) { .kartu { animation: none; transition: none; } }\n  </style>\n</head>\n<body>\n  <div class=\"kartu\">Arahkan kursor ke sini</div>\n</body>\n</html>\n",
"kunci": "Animasikan transform dan opacity (ringan). Selalu sediakan prefers-reduced-motion.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-anim-1",
"judul": "Kartu terangkat saat hover",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Beri <code>.kartu</code> <code>transition</code> pada <code>transform</code> selama <code>0.3s</code>, dan aturan <code>.kartu:hover</code> dengan <code>transform: translateY(-6px)</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"kartu\">Produk</div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .kartu { transition: transform 0.3s ease; }\n    .kartu:hover { transform: translateY(-6px); }\n  </style>\n</head>\n<body>\n  <div class=\"kartu\">Produk</div>\n</body>\n</html>\n",
"jelas": "transform tidak memicu perhitungan ulang tata letak, sehingga animasinya ringan bahkan di HP.",
"kompleksitas": "",
"petunjuk": [
"transition ditulis di keadaan normal, bukan di :hover, supaya halus saat masuk dan keluar.",
"transform: translateY(-6px) menggeser 6px ke atas.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"kartu\">…</div>…</body>…</html>\n"
],
"tes": [
[
"transition-property memuat transform",
"/transform|all/.test(gaya('.kartu', 'transition-property'))"
],
[
"Durasi 0.3s",
"gaya('.kartu', 'transition-duration') === '0.3s'"
],
[
"Ada aturan .kartu:hover",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.selectorText && r.selectorText.replace(/\\s/g, '').includes('.kartu:hover'))"
],
[
"Hover memakai translateY(-6px)",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.selectorText && r.selectorText.includes(':hover') && /translateY\\(-6px\\)/.test(r.style.transform))"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-anim-2",
"judul": "Animasi notifikasi",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>@keyframes geser</code> dari <code>opacity: 0</code> ke <code>opacity: 1</code>. Pasang ke <code>.notif</code> dengan durasi <code>0.5s</code> dan <code>animation-fill-mode: both</code>. Tambahkan <code>@media (prefers-reduced-motion: reduce)</code> yang mematikan animasi <code>.notif</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"notif\">Kode lulus semua tes!</div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    @keyframes geser { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: none; } }\n    .notif { animation: geser 0.5s ease both; }\n    @media (prefers-reduced-motion: reduce) { .notif { animation: none; } }\n  </style>\n</head>\n<body>\n  <div class=\"notif\">Kode lulus semua tes!</div>\n</body>\n</html>\n",
"jelas": "Animasi kecil yang bisa dimatikan pengguna adalah praktik aksesibilitas yang diharapkan di proyek profesional.",
"kompleksitas": "",
"petunjuk": [
"@keyframes geser { from { opacity: 0; } to { opacity: 1; } } lalu .notif { animation: geser 0.5s ease both; }",
"fill-mode both membuat keadaan awal dan akhir animasi tetap berlaku.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"notif\">…</div>…</body>…</html>\n"
],
"tes": [
[
"Ada @keyframes geser",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.type === 7 && r.name === 'geser')"
],
[
"Keyframes dari opacity 0 ke 1",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.type === 7 && r.name === 'geser' && [...r.cssRules].some(k => /0%|from/.test(k.keyText) && k.style.opacity === '0') && [...r.cssRules].some(k => /100%|to/.test(k.keyText) && k.style.opacity === '1'))"
],
[
".notif memakai animasi geser 0.5s",
"gaya('.notif', 'animation-name') === 'geser' && gaya('.notif', 'animation-duration') === '0.5s'"
],
[
"fill-mode both",
"gaya('.notif', 'animation-fill-mode') === 'both'"
],
[
"Ada prefers-reduced-motion yang mematikan animasi",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.type === 4).some(r => /prefers-reduced-motion/.test(r.conditionText || r.media.mediaText) && [...r.cssRules].some(x => x.selectorText === '.notif' && /none/.test(x.style.animation || x.style.animationName)))"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-gridlanjut",
"topik": "css",
"setelah": "gridlanjut",
"judul": "Grid areas dan auto-fit",
"contoh": {
"judul": "Contoh: grid-template-areas",
"penjelasan": "<p><code>grid-template-areas</code> menggambar tata letak dengan nama: setiap string satu baris. Anak diberi <code>grid-area: nama</code>. <code>repeat(auto-fit, minmax(200px, 1fr))</code> membuat jumlah kolom menyesuaikan lebar layar tanpa media query.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .tata { display: grid; grid-template-columns: 200px 1fr; grid-template-areas: \"kepala kepala\" \"samping isi\" \"kaki kaki\"; gap: 8px; }\n    header { grid-area: kepala; } aside { grid-area: samping; } main { grid-area: isi; } footer { grid-area: kaki; }\n    .tata > * { background: #e8e8e8; padding: 12px; }\n  </style>\n</head>\n<body>\n  <div class=\"tata\"><header>Header</header><aside>Menu</aside><main>Isi</main><footer>Kaki</footer></div>\n</body>\n</html>\n",
"kunci": "Nama area yang diulang di satu baris = elemen melebar ke beberapa kolom.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-gl-1",
"judul": "Tata letak dashboard",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>.tata</code> grid 2 kolom (<code>220px 1fr</code>) dengan area: baris 1 <code>kepala kepala</code>, baris 2 <code>samping isi</code>, baris 3 <code>kaki kaki</code>. Hubungkan header, aside, main, footer ke area itu.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"tata\"><header>Header</header><aside>Menu</aside><main>Dashboard</main><footer>Kaki</footer></div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .tata { display: grid; grid-template-columns: 220px 1fr; grid-template-areas: \"kepala kepala\" \"samping isi\" \"kaki kaki\"; }\n    header { grid-area: kepala; }\n    aside { grid-area: samping; }\n    main { grid-area: isi; }\n    footer { grid-area: kaki; }\n  </style>\n</head>\n<body>\n  <div class=\"tata\"><header>Header</header><aside>Menu</aside><main>Dashboard</main><footer>Kaki</footer></div>\n</body>\n</html>\n",
"jelas": "Tata letak dashboard seperti ini (header, sidebar, isi, footer) adalah kerangka hampir semua aplikasi admin, termasuk Odoo.",
"kompleksitas": "",
"petunjuk": [
"grid-template-areas ditulis sebagai beberapa string, satu per baris.",
"Anak: header { grid-area: kepala; } dan seterusnya.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"tata\"><header>…</header><aside>…</aside><main>…</main><footer>…</footer></div>…</body>…</html>\n"
],
"tes": [
[
"Kolom pertama 220px",
"gaya('.tata', 'grid-template-columns').split(' ')[0] === '220px'"
],
[
"Area sesuai gambar",
"gaya('.tata', 'grid-template-areas').replace(/\\s+/g, ' ') === '\"kepala kepala\" \"samping isi\" \"kaki kaki\"'"
],
[
"header melebar 2 kolom",
"Math.abs($('header').getBoundingClientRect().width - $('.tata').getBoundingClientRect().width) < 1"
],
[
"aside di kiri main pada baris yang sama",
"Math.round($('aside').getBoundingClientRect().top) === Math.round($('main').getBoundingClientRect().top) && $('aside').getBoundingClientRect().left < $('main').getBoundingClientRect().left"
],
[
"footer di bawah main",
"$('footer').getBoundingClientRect().top >= $('main').getBoundingClientRect().bottom - 1"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-gl-2",
"judul": "Grid kartu otomatis",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Buat <code>.produk</code> grid dengan <code>repeat(auto-fit, minmax(200px, 1fr))</code> dan gap <code>16px</code>. Pada iframe 1000px hasilnya harus ≥ 3 kolom, dan semua kartu sama lebar.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"produk\"><div>A</div><div>B</div><div>C</div><div>D</div><div>E</div></div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .produk { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }\n  </style>\n</head>\n<body>\n  <div class=\"produk\"><div>A</div><div>B</div><div>C</div><div>D</div><div>E</div></div>\n</body>\n</html>\n",
"jelas": "Satu baris CSS ini menggantikan beberapa media query untuk grid kartu produk.",
"kompleksitas": "",
"petunjuk": [
"auto-fit membuat kolom sebanyak yang muat; minmax menjaga lebar minimal 200px.",
"Tanpa media query pun, di HP grid otomatis menjadi 1 kolom.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"produk\"><div>…</div><div>…</div><div>…</div><div>…</div><div>…</div></div>…</body>…</html>\n"
],
"tes": [
[
"Memakai auto-fit dan minmax(200px, 1fr)",
"/repeat\\(\\s*auto-fit\\s*,\\s*minmax\\(\\s*200px\\s*,\\s*1fr\\s*\\)\\s*\\)/.test(d.querySelector('style').textContent)"
],
[
"≥ 3 kolom pada lebar 1000px",
"gaya('.produk', 'grid-template-columns').split(' ').length >= 3"
],
[
"Setiap kolom ≥ 200px",
"gaya('.produk', 'grid-template-columns').split(' ').every(x => parseFloat(x) >= 200)"
],
[
"gap 16px",
"gaya('.produk', 'column-gap') === '16px'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "css-arsitektur",
"topik": "css",
"setelah": "arsitektur",
"judul": "Reset dan penamaan BEM",
"contoh": {
"judul": "Contoh: reset ringan dan BEM",
"penjelasan": "<p>Reset ringan menyamakan perilaku browser: <code>box-sizing</code>, margin body, gambar responsif. BEM menamai class dengan pola <code>blok__elemen--modifier</code>: <code>.kartu</code>, <code>.kartu__judul</code>, <code>.kartu--unggulan</code>.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    *, *::before, *::after { box-sizing: border-box; }\n    body { margin: 0; }\n    img { max-width: 100%; display: block; }\n    .kartu { padding: 16px; border: 1px solid #ccc; }\n    .kartu__judul { margin: 0 0 8px; }\n    .kartu--unggulan { border-color: gold; }\n  </style>\n</head>\n<body>\n  <article class=\"kartu kartu--unggulan\">\n    <h3 class=\"kartu__judul\">Kopi</h3>\n    <p class=\"kartu__harga\">Rp 18.000</p>\n  </article>\n</body>\n</html>\n",
"kunci": "BEM: __ untuk bagian dari blok, -- untuk variasi. Class datar (spesifisitas rendah) mudah ditimpa.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "css-ark-1",
"judul": "Reset ringan",
"kategori": "studi",
"tingkat": 1,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "Tulis reset: semua elemen termasuk <code>::before</code>/<code>::after</code> memakai <code>box-sizing: border-box</code>; <code>body</code> tanpa margin; <code>img</code> <code>max-width: 100%</code> dan <code>display: block</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <div class=\"isi\"><img src=\"a.jpg\" alt=\"Contoh\"></div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    *, *::before, *::after { box-sizing: border-box; }\n    body { margin: 0; }\n    img { max-width: 100%; display: block; }\n  </style>\n</head>\n<body>\n  <div class=\"isi\"><img src=\"a.jpg\" alt=\"Contoh\"></div>\n</body>\n</html>\n",
"jelas": "Reset ini dipakai hampir semua proyek modern (termasuk tema Bootstrap) agar tata letak konsisten di semua browser.",
"kompleksitas": "",
"petunjuk": [
"Selector universal: *, *::before, *::after { ... }.",
"Tiga aturan saja.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<div class=\"isi\"><img src=\"a.jpg\" alt=\"Contoh\"></div>…</body>…</html>\n"
],
"tes": [
[
"Semua elemen border-box",
"gaya('.isi', 'box-sizing') === 'border-box' && gaya('body', 'box-sizing') === 'border-box'"
],
[
"::before juga border-box",
"w.getComputedStyle($('.isi'), '::before').boxSizing === 'border-box'"
],
[
"body margin 0",
"gaya('body', 'margin-top') === '0px' && gaya('body', 'margin-left') === '0px'"
],
[
"img max-width 100% dan block",
"gaya('img', 'max-width') === '100%' && gaya('img', 'display') === 'block'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "css-ark-2",
"judul": "Komponen kartu BEM",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "",
"soal": "HTML sudah memakai class BEM. Tulis CSS hanya dengan selector class tunggal (tanpa id, tanpa tag): <code>.kartu</code> padding 16px; <code>.kartu__judul</code> ukuran 20px; <code>.kartu__harga</code> warna <code>#15803d</code>; <code>.kartu--unggulan</code> border <code>2px solid #d4a017</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <article class=\"kartu\"><h3 class=\"kartu__judul\">Teh</h3><p class=\"kartu__harga\">Rp 6.000</p></article>\n  <article class=\"kartu kartu--unggulan\"><h3 class=\"kartu__judul\">Kopi</h3><p class=\"kartu__harga\">Rp 18.000</p></article>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    .kartu { padding: 16px; }\n    .kartu__judul { font-size: 20px; }\n    .kartu__harga { color: #15803d; }\n    .kartu--unggulan { border: 2px solid #d4a017; }\n  </style>\n</head>\n<body>\n  <article class=\"kartu\"><h3 class=\"kartu__judul\">Teh</h3><p class=\"kartu__harga\">Rp 6.000</p></article>\n  <article class=\"kartu kartu--unggulan\"><h3 class=\"kartu__judul\">Kopi</h3><p class=\"kartu__harga\">Rp 18.000</p></article>\n</body>\n</html>\n",
"jelas": "Selector class tunggal membuat spesifisitas rata dan komponen mudah dipindah tanpa efek samping.",
"kompleksitas": "",
"petunjuk": [
"Setiap aturan satu class: .kartu__judul { ... }, bukan .kartu h3 { ... }.",
"Modifier ditulis sebagai class tambahan di HTML: class=\"kartu kartu--unggulan\".",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<article class=\"kartu\"><h3 class=\"kartu__judul\">…</h3><p class=\"kartu__harga\">…</p></article>…<article class=\"kartu kartu--unggulan\"><h3 class=\"kartu__judul\">…</h3><p class=\"kartu__harga\">…</p></article>…</body>…</html>\n"
],
"tes": [
[
".kartu padding 16px",
"$$('.kartu').every(k => gaya(k, 'padding-top') === '16px')"
],
[
".kartu__judul 20px",
"$$('.kartu__judul').every(k => gaya(k, 'font-size') === '20px')"
],
[
".kartu__harga hijau",
"$$('.kartu__harga').every(k => gaya(k, 'color') === 'rgb(21, 128, 61)')"
],
[
"Hanya kartu unggulan yang ber-border emas",
"gaya('.kartu--unggulan', 'border-top-color') === 'rgb(212, 160, 23)' && gaya('.kartu:not(.kartu--unggulan)', 'border-top-style') === 'none'"
],
[
"Selector hanya class tunggal (tanpa id/tag/keturunan)",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.selectorText).every(r => /^\\.[\\w-]+$/.test(r.selectorText))"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "uji-css-1",
"topik": "css",
"setelah": "posisi",
"judul": "Menata landing page toko",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan aturan CSS baru di dalam &lt;style&gt;.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* Bagian A, B, C menambah aturan di sini */\n  </style>\n</head>\n<body>\n  <header class=\"bar\">\n    <b class=\"logo\">Kopi Kenar</b>\n    <nav><ul class=\"menu\"><li><a href=\"#produk\">Produk</a></li><li><a href=\"#tentang\">Tentang</a></li><li><a href=\"#pesan\">Pesan</a></li></ul></nav>\n  </header>\n  <main>\n    <section id=\"produk\" class=\"galeri\">\n      <article class=\"kartu\"><h3>Kopi Susu</h3><p class=\"harga\">Rp 18.000</p></article>\n      <article class=\"kartu\"><h3>Es Teh</h3><p class=\"harga\">Rp 6.000</p></article>\n      <article class=\"kartu\"><h3>Roti Bakar</h3><p class=\"harga\">Rp 15.000</p></article>\n    </section>\n  </main>\n</body>\n</html>\n",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "uji-css-1-a",
"judul": "Bagian A: Header & navigasi",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "Landing page Kopi Kenar dari Coding Test HTML sudah jadi, tapi masih polos. HTML-nya sudah tersedia; tugasmu hanya CSS.",
"soal": "Atur <code>body</code> tanpa margin dengan huruf sans-serif. <code>.bar</code>: flex, logo kiri dan menu kanan (<code>space-between</code>), terpusat vertikal, latar <code>#0d1b2a</code>. <code>.menu</code>: flex dengan gap 16px tanpa titik daftar, link berwarna <code>#f4f1de</code> tanpa garis bawah.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <header class=\"bar\">\n    <b class=\"logo\">Kopi Kenar</b>\n    <nav><ul class=\"menu\"><li><a href=\"#produk\">Produk</a></li><li><a href=\"#tentang\">Tentang</a></li><li><a href=\"#pesan\">Pesan</a></li></ul></nav>\n  </header>\n  <main>\n    <section id=\"produk\" class=\"galeri\">\n      <article class=\"kartu\"><h3>Kopi Susu</h3><p class=\"harga\">Rp 18.000</p></article>\n      <article class=\"kartu\"><h3>Es Teh</h3><p class=\"harga\">Rp 6.000</p></article>\n      <article class=\"kartu\"><h3>Roti Bakar</h3><p class=\"harga\">Rp 15.000</p></article>\n    </section>\n  </main>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { margin: 0; font-family: Arial, sans-serif; color: #0d1b2a; }\n    .bar { display: flex; justify-content: space-between; align-items: center; padding: 12px 24px; background-color: #0d1b2a; }\n    .logo { color: #f4f1de; }\n    .menu { display: flex; gap: 16px; list-style: none; margin: 0; padding: 0; }\n    .menu a { color: #f4f1de; text-decoration: none; }\n  </style>\n</head>\n<body>\n  <header class=\"bar\">\n    <b class=\"logo\">Kopi Kenar</b>\n    <nav><ul class=\"menu\"><li><a href=\"#produk\">Produk</a></li><li><a href=\"#tentang\">Tentang</a></li><li><a href=\"#pesan\">Pesan</a></li></ul></nav>\n  </header>\n  <main>\n    <section id=\"produk\" class=\"galeri\">\n      <article class=\"kartu\"><h3>Kopi Susu</h3><p class=\"harga\">Rp 18.000</p></article>\n      <article class=\"kartu\"><h3>Es Teh</h3><p class=\"harga\">Rp 6.000</p></article>\n      <article class=\"kartu\"><h3>Roti Bakar</h3><p class=\"harga\">Rp 15.000</p></article>\n    </section>\n  </main>\n</body>\n</html>\n",
"jelas": "Header gelap dengan menu flex adalah pola navbar paling umum.",
"kompleksitas": "",
"petunjuk": [
"Gabungan bab 1 (warna), 2 (huruf), dan 4 (flexbox).",
"Ada dua wadah flex: .bar (logo + nav) dan .menu (item menu).",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<header class=\"bar\">…<b class=\"logo\">…</b>…<nav><ul class=\"menu\"><li><a href=\"#produk\">…</a></li><li><a href=\"#tentang\">…</a></li><li><a href=\"#pesan\">…</a></li></ul></nav>…</header>…<main>…<section id=\"produk\" class=\"galeri\">…<article class=\"kartu\"><h3>…</h3><p class=\"harga\">…</p></article>…<article class=\"kartu\"><h3>…</h3><p class=\"harga\">…</p></article>…<article class=\"kartu\"><h3>…</h3><p class=\"harga\">…</p></article>…</section>…</main>…</body>…</html>\n"
],
"tes": [
[
"body margin 0 dan sans-serif",
"gaya('body', 'margin-top') === '0px' && /sans-serif/.test(gaya('body', 'font-family'))"
],
[
".bar flex, space-between, align center",
"gaya('.bar', 'display') === 'flex' && gaya('.bar', 'justify-content') === 'space-between' && gaya('.bar', 'align-items') === 'center'"
],
[
".bar latar #0d1b2a",
"gaya('.bar', 'background-color') === 'rgb(13, 27, 42)'"
],
[
".menu flex gap 16px tanpa titik",
"gaya('.menu', 'display') === 'flex' && gaya('.menu', 'column-gap') === '16px' && gaya('.menu', 'list-style-type') === 'none'"
],
[
"Link menu #f4f1de tanpa garis bawah",
"gaya('.menu a', 'color') === 'rgb(244, 241, 222)' && gaya('.menu a', 'text-decoration-line') === 'none'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "uji-css-1-b",
"judul": "Bagian B: Kartu produk dalam grid",
"kategori": "studi",
"tingkat": 3,
"bahasa": "web",
"fungsi": "",
"cerita": "Lanjutan bagian A: halaman dan CSS-mu yang sudah lulus otomatis dipakai.",
"soal": "<code>.galeri</code>: grid 3 kolom sama lebar, gap 20px, padding 24px. <code>.kartu</code>: <code>border-box</code>, padding 16px, border <code>1px solid #d4c4a8</code>, sudut 8px. <code>.harga</code>: tebal dan berwarna <code>#b55a7c</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { margin: 0; font-family: Arial, sans-serif; color: #0d1b2a; }\n    .bar { display: flex; justify-content: space-between; align-items: center; padding: 12px 24px; background-color: #0d1b2a; }\n    .logo { color: #f4f1de; }\n    .menu { display: flex; gap: 16px; list-style: none; margin: 0; padding: 0; }\n    .menu a { color: #f4f1de; text-decoration: none; }\n    /* tulis CSS bagian B di sini */\n  </style>\n</head>\n<body>\n  <header class=\"bar\">\n    <b class=\"logo\">Kopi Kenar</b>\n    <nav><ul class=\"menu\"><li><a href=\"#produk\">Produk</a></li><li><a href=\"#tentang\">Tentang</a></li><li><a href=\"#pesan\">Pesan</a></li></ul></nav>\n  </header>\n  <main>\n    <section id=\"produk\" class=\"galeri\">\n      <article class=\"kartu\"><h3>Kopi Susu</h3><p class=\"harga\">Rp 18.000</p></article>\n      <article class=\"kartu\"><h3>Es Teh</h3><p class=\"harga\">Rp 6.000</p></article>\n      <article class=\"kartu\"><h3>Roti Bakar</h3><p class=\"harga\">Rp 15.000</p></article>\n    </section>\n  </main>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { margin: 0; font-family: Arial, sans-serif; color: #0d1b2a; }\n    .bar { display: flex; justify-content: space-between; align-items: center; padding: 12px 24px; background-color: #0d1b2a; }\n    .logo { color: #f4f1de; }\n    .menu { display: flex; gap: 16px; list-style: none; margin: 0; padding: 0; }\n    .menu a { color: #f4f1de; text-decoration: none; }\n    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 24px; }\n    .kartu { box-sizing: border-box; padding: 16px; border: 1px solid #d4c4a8; border-radius: 8px; }\n    .harga { font-weight: 700; color: #b55a7c; }\n  </style>\n</head>\n<body>\n  <header class=\"bar\">\n    <b class=\"logo\">Kopi Kenar</b>\n    <nav><ul class=\"menu\"><li><a href=\"#produk\">Produk</a></li><li><a href=\"#tentang\">Tentang</a></li><li><a href=\"#pesan\">Pesan</a></li></ul></nav>\n  </header>\n  <main>\n    <section id=\"produk\" class=\"galeri\">\n      <article class=\"kartu\"><h3>Kopi Susu</h3><p class=\"harga\">Rp 18.000</p></article>\n      <article class=\"kartu\"><h3>Es Teh</h3><p class=\"harga\">Rp 6.000</p></article>\n      <article class=\"kartu\"><h3>Roti Bakar</h3><p class=\"harga\">Rp 15.000</p></article>\n    </section>\n  </main>\n</body>\n</html>\n",
"jelas": "Grid untuk galeri, box model untuk kartu: dua alat yang saling melengkapi.",
"kompleksitas": "",
"petunjuk": [
"Gabungan bab 3 (box model) dan bab 5 (grid).",
"repeat(3, 1fr) untuk tiga kolom sama lebar.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<header class=\"bar\">…<b class=\"logo\">…</b>…<nav><ul class=\"menu\"><li><a href=\"#produk\">…</a></li><li><a href=\"#tentang\">…</a></li><li><a href=\"#pesan\">…</a></li></ul></nav>…</header>…<main>…<section id=\"produk\" class=\"galeri\">…<article class=\"kartu\"><h3>…</h3><p class=\"harga\">…</p></article>…<article class=\"kartu\"><h3>…</h3><p class=\"harga\">…</p></article>…<article class=\"kartu\"><h3>…</h3><p class=\"harga\">…</p></article>…</section>…</main>…</body>…</html>\n"
],
"tes": [
[
".galeri grid 3 kolom sama lebar",
"gaya('.galeri', 'display') === 'grid' && gaya('.galeri', 'grid-template-columns').split(' ').length === 3 && (c => Math.max(...c) - Math.min(...c) < 1)(gaya('.galeri', 'grid-template-columns').split(' ').map(parseFloat))"
],
[
".galeri gap 20px, padding 24px",
"gaya('.galeri', 'column-gap') === '20px' && gaya('.galeri', 'padding-top') === '24px'"
],
[
".kartu border-box, padding 16px, sudut 8px",
"gaya('.kartu', 'box-sizing') === 'border-box' && gaya('.kartu', 'padding-top') === '16px' && gaya('.kartu', 'border-top-left-radius') === '8px'"
],
[
".kartu border 1px #d4c4a8",
"gaya('.kartu', 'border-top-width') === '1px' && gaya('.kartu', 'border-top-color') === 'rgb(212, 196, 168)'"
],
[
".harga tebal dan #b55a7c",
"gaya('.harga', 'font-weight') === '700' && gaya('.harga', 'color') === 'rgb(181, 90, 124)'"
],
[
"Header bagian A tetap flex",
"gaya('.bar', 'display') === 'flex'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "<!-- Bagian B: tambahkan aturan di dalam <style> di atas -->\n",
"mudah": []
},
{
"id": "uji-css-1-c",
"judul": "Bagian C: Header lengket & responsif",
"kategori": "studi",
"tingkat": 3,
"bahasa": "web",
"fungsi": "",
"cerita": "Lanjutan bagian B: halaman dan CSS-mu yang sudah lulus otomatis dipakai.",
"soal": "Buat <code>.bar</code> menempel di atas (<code>sticky</code>, <code>top: 0</code>, z-index ≥ 10). Tambahkan <code>@media (max-width: 600px)</code>: galeri menjadi 1 kolom dan <code>.bar</code> menjadi kolom (<code>flex-direction: column</code>).",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { margin: 0; font-family: Arial, sans-serif; color: #0d1b2a; }\n    .bar { display: flex; justify-content: space-between; align-items: center; padding: 12px 24px; background-color: #0d1b2a; }\n    .logo { color: #f4f1de; }\n    .menu { display: flex; gap: 16px; list-style: none; margin: 0; padding: 0; }\n    .menu a { color: #f4f1de; text-decoration: none; }\n    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 24px; }\n    .kartu { box-sizing: border-box; padding: 16px; border: 1px solid #d4c4a8; border-radius: 8px; }\n    .harga { font-weight: 700; color: #b55a7c; }\n    /* tulis CSS bagian C di sini */\n  </style>\n</head>\n<body>\n  <header class=\"bar\">\n    <b class=\"logo\">Kopi Kenar</b>\n    <nav><ul class=\"menu\"><li><a href=\"#produk\">Produk</a></li><li><a href=\"#tentang\">Tentang</a></li><li><a href=\"#pesan\">Pesan</a></li></ul></nav>\n  </header>\n  <main>\n    <section id=\"produk\" class=\"galeri\">\n      <article class=\"kartu\"><h3>Kopi Susu</h3><p class=\"harga\">Rp 18.000</p></article>\n      <article class=\"kartu\"><h3>Es Teh</h3><p class=\"harga\">Rp 6.000</p></article>\n      <article class=\"kartu\"><h3>Roti Bakar</h3><p class=\"harga\">Rp 15.000</p></article>\n    </section>\n  </main>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    body { margin: 0; font-family: Arial, sans-serif; color: #0d1b2a; }\n    .bar { display: flex; justify-content: space-between; align-items: center; padding: 12px 24px; background-color: #0d1b2a; }\n    .logo { color: #f4f1de; }\n    .menu { display: flex; gap: 16px; list-style: none; margin: 0; padding: 0; }\n    .menu a { color: #f4f1de; text-decoration: none; }\n    .galeri { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 24px; }\n    .kartu { box-sizing: border-box; padding: 16px; border: 1px solid #d4c4a8; border-radius: 8px; }\n    .harga { font-weight: 700; color: #b55a7c; }\n    .bar { position: sticky; top: 0; z-index: 10; }\n    @media (max-width: 600px) {\n      .galeri { grid-template-columns: 1fr; }\n      .bar { flex-direction: column; }\n    }\n  </style>\n</head>\n<body>\n  <header class=\"bar\">\n    <b class=\"logo\">Kopi Kenar</b>\n    <nav><ul class=\"menu\"><li><a href=\"#produk\">Produk</a></li><li><a href=\"#tentang\">Tentang</a></li><li><a href=\"#pesan\">Pesan</a></li></ul></nav>\n  </header>\n  <main>\n    <section id=\"produk\" class=\"galeri\">\n      <article class=\"kartu\"><h3>Kopi Susu</h3><p class=\"harga\">Rp 18.000</p></article>\n      <article class=\"kartu\"><h3>Es Teh</h3><p class=\"harga\">Rp 6.000</p></article>\n      <article class=\"kartu\"><h3>Roti Bakar</h3><p class=\"harga\">Rp 15.000</p></article>\n    </section>\n  </main>\n</body>\n</html>\n",
"jelas": "Halaman yang sama kini rapi di laptop dan HP. Inilah alur kerja frontend sungguhan: HTML semantik dulu, lalu CSS bertahap.",
"kompleksitas": "",
"petunjuk": [
"position: sticky; top: 0; z-index: 10; ditambahkan ke .bar.",
"Isi @media berupa aturan biasa: .galeri { ... } dan .bar { ... }.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<header class=\"bar\">…<b class=\"logo\">…</b>…<nav><ul class=\"menu\"><li><a href=\"#produk\">…</a></li><li><a href=\"#tentang\">…</a></li><li><a href=\"#pesan\">…</a></li></ul></nav>…</header>…<main>…<section id=\"produk\" class=\"galeri\">…<article class=\"kartu\"><h3>…</h3><p class=\"harga\">…</p></article>…<article class=\"kartu\"><h3>…</h3><p class=\"harga\">…</p></article>…<article class=\"kartu\"><h3>…</h3><p class=\"harga\">…</p></article>…</section>…</main>…</body>…</html>\n"
],
"tes": [
[
".bar sticky top 0 z-index ≥ 10",
"gaya('.bar', 'position') === 'sticky' && gaya('.bar', 'top') === '0px' && parseInt(gaya('.bar', 'z-index')) >= 10"
],
[
"Ada @media max-width 600px",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.type === 4).some(r => /max-width:\\s*600px/.test(r.conditionText || r.media.mediaText))"
],
[
"Di HP .galeri 1 kolom",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.type === 4).some(r => [...r.cssRules].some(x => x.selectorText === '.galeri' && x.style.gridTemplateColumns.replace(/\\s/g, '') === '1fr'))"
],
[
"Di HP .bar menjadi kolom",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.type === 4).some(r => [...r.cssRules].some(x => x.selectorText === '.bar' && x.style.flexDirection === 'column'))"
],
[
"Di layar lebar tetap 3 kolom",
"gaya('.galeri', 'grid-template-columns').split(' ').length === 3"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "<!-- Bagian C: tambahkan aturan di dalam <style> di atas -->\n",
"mudah": []
}
],
"ujian": true,
"cakupan": "Bab 1–5: selector & warna, tipografi, box model, flexbox, grid & position"
},
{
"id": "uji-css-2",
"topik": "css",
"setelah": "animasi",
"judul": "Komponen UI interaktif",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan aturan CSS baru di dalam &lt;style&gt;.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* Bagian A, B, C menambah aturan di sini */\n  </style>\n</head>\n<body>\n  <button class=\"tombol\">Beli sekarang</button>\n  <a href=\"https://www.odoo.com\" class=\"tautan\">Dokumentasi</a>\n  <ul class=\"daftar\"><li>Kopi</li><li>Teh</li><li>Roti</li><li>Donat</li></ul>\n  <div class=\"notif\">Pesanan tersimpan</div>\n</body>\n</html>\n",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"bahasa": "web",
"keluaran": ""
},
"langkah": [
{
"id": "uji-css-2-a",
"judul": "Bagian A: Tombol bertema",
"kategori": "studi",
"tingkat": 2,
"bahasa": "web",
"fungsi": "",
"cerita": "Tim produk meminta komponen UI kecil yang konsisten: tombol bertema, tautan keluar bertanda, daftar belang, dan notifikasi beranimasi.",
"soal": "Definisikan di <code>:root</code>: <code>--utama: #415a77</code>, <code>--gelap: #0d1b2a</code>, <code>--radius: 0.5rem</code>. <code>.tombol</code> berlatar <code>var(--utama)</code>, sudut <code>var(--radius)</code>, padding dalam rem, kursor pointer, dan transisi. <code>.tombol:hover</code> berlatar <code>var(--gelap)</code> dan naik sedikit (<code>translateY</code>).",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n    /* tulis CSS-mu di sini */\n  </style>\n</head>\n<body>\n  <button class=\"tombol\">Beli sekarang</button>\n  <a href=\"https://www.odoo.com\" class=\"tautan\">Dokumentasi</a>\n  <ul class=\"daftar\"><li>Kopi</li><li>Teh</li><li>Roti</li><li>Donat</li></ul>\n  <div class=\"notif\">Pesanan tersimpan</div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n\n    :root { --utama: #415a77; --gelap: #0d1b2a; --radius: 0.5rem; }\n    .tombol { background-color: var(--utama); color: white; border: 0; padding: 0.75rem 1.25rem; border-radius: var(--radius); cursor: pointer; transition: background-color 0.2s ease, transform 0.2s ease; }\n    .tombol:hover { background-color: var(--gelap); transform: translateY(-2px); }\n  </style>\n</head>\n<body>\n  <button class=\"tombol\">Beli sekarang</button>\n  <a href=\"https://www.odoo.com\" class=\"tautan\">Dokumentasi</a>\n  <ul class=\"daftar\"><li>Kopi</li><li>Teh</li><li>Roti</li><li>Donat</li></ul>\n  <div class=\"notif\">Pesanan tersimpan</div>\n</body>\n</html>\n",
"jelas": "Dengan variabel, mengganti warna merek cukup di satu tempat.",
"kompleksitas": "",
"petunjuk": [
"Gabungan bab 6 (hover), 7 (variabel), 9 (rem), 10 (transition).",
"var(--radius) = 0.5rem = 8px pada html 16px.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<button class=\"tombol\">…</button>…<a href=\"https://www.odoo.com\" class=\"tautan\">…</a>…<ul class=\"daftar\"><li>…</li><li>…</li><li>…</li><li>…</li></ul>…<div class=\"notif\">…</div>…</body>…</html>\n"
],
"tes": [
[
"Variabel --utama, --gelap, --radius ada",
"gaya('html', '--utama') === '#415a77' && gaya('html', '--gelap') === '#0d1b2a' && gaya('html', '--radius') === '0.5rem'"
],
[
".tombol latar dari --utama dan sudut 8px",
"gaya('.tombol', 'background-color') === 'rgb(65, 90, 119)' && gaya('.tombol', 'border-top-left-radius') === '8px'"
],
[
"Padding memakai rem",
"/\\.tombol\\s*\\{[^}]*padding:[^;]*rem/.test(d.querySelector('style').textContent)"
],
[
"Kursor pointer dan ada transisi",
"gaya('.tombol', 'cursor') === 'pointer' && gaya('.tombol', 'transition-duration') !== '0s'"
],
[
".tombol:hover memakai var(--gelap) dan translateY",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.selectorText === '.tombol:hover' && /var\\(--gelap\\)/.test(r.style.backgroundColor) && /translateY/.test(r.style.transform))"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "uji-css-2-b",
"judul": "Bagian B: Tautan keluar & daftar belang",
"kategori": "studi",
"tingkat": 3,
"bahasa": "web",
"fungsi": "",
"cerita": "Lanjutan bagian A: halaman dan CSS-mu yang sudah lulus otomatis dipakai.",
"soal": "Tambahkan panah <code>\" ↗\"</code> setelah setiap link yang href-nya diawali <code>https</code> (pakai selector atribut + <code>::after</code>). Baris <b>genap</b> <code>.daftar li</code> berlatar <code>#f1f5f9</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n\n    :root { --utama: #415a77; --gelap: #0d1b2a; --radius: 0.5rem; }\n    .tombol { background-color: var(--utama); color: white; border: 0; padding: 0.75rem 1.25rem; border-radius: var(--radius); cursor: pointer; transition: background-color 0.2s ease, transform 0.2s ease; }\n    .tombol:hover { background-color: var(--gelap); transform: translateY(-2px); }\n    /* tulis CSS bagian B di sini */\n  </style>\n</head>\n<body>\n  <button class=\"tombol\">Beli sekarang</button>\n  <a href=\"https://www.odoo.com\" class=\"tautan\">Dokumentasi</a>\n  <ul class=\"daftar\"><li>Kopi</li><li>Teh</li><li>Roti</li><li>Donat</li></ul>\n  <div class=\"notif\">Pesanan tersimpan</div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n\n    :root { --utama: #415a77; --gelap: #0d1b2a; --radius: 0.5rem; }\n    .tombol { background-color: var(--utama); color: white; border: 0; padding: 0.75rem 1.25rem; border-radius: var(--radius); cursor: pointer; transition: background-color 0.2s ease, transform 0.2s ease; }\n    .tombol:hover { background-color: var(--gelap); transform: translateY(-2px); }\n    a[href^=\"https\"]::after { content: \" ↗\"; }\n    .daftar li:nth-child(even) { background-color: #f1f5f9; }\n  </style>\n</head>\n<body>\n  <button class=\"tombol\">Beli sekarang</button>\n  <a href=\"https://www.odoo.com\" class=\"tautan\">Dokumentasi</a>\n  <ul class=\"daftar\"><li>Kopi</li><li>Teh</li><li>Roti</li><li>Donat</li></ul>\n  <div class=\"notif\">Pesanan tersimpan</div>\n</body>\n</html>\n",
"jelas": "Selector atribut dan pseudo-element menambah petunjuk visual tanpa menyentuh HTML.",
"kompleksitas": "",
"petunjuk": [
"a[href^=\"https\"]::after { content: \" ↗\"; }",
"nth-child(even) = genap.",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<button class=\"tombol\">…</button>…<a href=\"https://www.odoo.com\" class=\"tautan\">…</a>…<ul class=\"daftar\"><li>…</li><li>…</li><li>…</li><li>…</li></ul>…<div class=\"notif\">…</div>…</body>…</html>\n"
],
"tes": [
[
"Link https diberi ::after \" ↗\"",
"w.getComputedStyle($('a[href^=\"https\"]'), '::after').content === '\" ↗\"'"
],
[
"Item genap berlatar #f1f5f9",
"gaya($$('.daftar li')[1], 'background-color') === 'rgb(241, 245, 249)' && gaya($$('.daftar li')[3], 'background-color') === 'rgb(241, 245, 249)'"
],
[
"Item ganjil tidak",
"gaya($$('.daftar li')[0], 'background-color') !== 'rgb(241, 245, 249)'"
],
[
"Tombol bagian A tetap bertema",
"gaya('.tombol', 'background-color') === 'rgb(65, 90, 119)'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "<!-- Bagian B: tambahkan aturan di dalam <style> di atas -->\n",
"mudah": []
},
{
"id": "uji-css-2-c",
"judul": "Bagian C: Notifikasi beranimasi",
"kategori": "studi",
"tingkat": 3,
"bahasa": "web",
"fungsi": "",
"cerita": "Lanjutan bagian B: halaman dan CSS-mu yang sudah lulus otomatis dipakai.",
"soal": "Buat <code>@keyframes muncul</code> (opacity 0 → 1 dan sedikit geser), pasang ke <code>.notif</code> 0.4s dengan fill-mode <code>both</code>. Tambahkan <code>@media (prefers-reduced-motion: reduce)</code> yang mematikan transisi <code>.tombol</code> dan animasi <code>.notif</code>.",
"awal": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n\n    :root { --utama: #415a77; --gelap: #0d1b2a; --radius: 0.5rem; }\n    .tombol { background-color: var(--utama); color: white; border: 0; padding: 0.75rem 1.25rem; border-radius: var(--radius); cursor: pointer; transition: background-color 0.2s ease, transform 0.2s ease; }\n    .tombol:hover { background-color: var(--gelap); transform: translateY(-2px); }\n    a[href^=\"https\"]::after { content: \" ↗\"; }\n    .daftar li:nth-child(even) { background-color: #f1f5f9; }\n    /* tulis CSS bagian C di sini */\n  </style>\n</head>\n<body>\n  <button class=\"tombol\">Beli sekarang</button>\n  <a href=\"https://www.odoo.com\" class=\"tautan\">Dokumentasi</a>\n  <ul class=\"daftar\"><li>Kopi</li><li>Teh</li><li>Roti</li><li>Donat</li></ul>\n  <div class=\"notif\">Pesanan tersimpan</div>\n</body>\n</html>\n",
"solusi": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Latihan CSS</title>\n  <style>\n\n    :root { --utama: #415a77; --gelap: #0d1b2a; --radius: 0.5rem; }\n    .tombol { background-color: var(--utama); color: white; border: 0; padding: 0.75rem 1.25rem; border-radius: var(--radius); cursor: pointer; transition: background-color 0.2s ease, transform 0.2s ease; }\n    .tombol:hover { background-color: var(--gelap); transform: translateY(-2px); }\n    a[href^=\"https\"]::after { content: \" ↗\"; }\n    .daftar li:nth-child(even) { background-color: #f1f5f9; }\n    @keyframes muncul { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }\n    .notif { animation: muncul 0.4s ease-out both; }\n    @media (prefers-reduced-motion: reduce) { .tombol, .notif { transition: none; animation: none; } }\n  </style>\n</head>\n<body>\n  <button class=\"tombol\">Beli sekarang</button>\n  <a href=\"https://www.odoo.com\" class=\"tautan\">Dokumentasi</a>\n  <ul class=\"daftar\"><li>Kopi</li><li>Teh</li><li>Roti</li><li>Donat</li></ul>\n  <div class=\"notif\">Pesanan tersimpan</div>\n</body>\n</html>\n",
"jelas": "Komponen ini siap dipakai ulang dan tetap nyaman bagi pengguna yang sensitif terhadap gerakan.",
"kompleksitas": "",
"petunjuk": [
"@keyframes muncul { from { opacity: 0; ... } to { opacity: 1; ... } }",
"Di dalam @media prefers-reduced-motion: .tombol, .notif { transition: none; animation: none; }",
"Kerangka solusinya:\n<!DOCTYPE html>…<html lang=\"id\">…<head>…<meta charset=\"utf-8\">…<title>…</title>…<style>…</style>…</head>…<body>…<button class=\"tombol\">…</button>…<a href=\"https://www.odoo.com\" class=\"tautan\">…</a>…<ul class=\"daftar\"><li>…</li><li>…</li><li>…</li><li>…</li></ul>…<div class=\"notif\">…</div>…</body>…</html>\n"
],
"tes": [
[
"Ada @keyframes muncul dari opacity 0 ke 1",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).some(r => r.type === 7 && r.name === 'muncul' && [...r.cssRules].some(k => k.style.opacity === '0') && [...r.cssRules].some(k => k.style.opacity === '1'))"
],
[
".notif animasi muncul 0.4s both",
"gaya('.notif', 'animation-name') === 'muncul' && gaya('.notif', 'animation-duration') === '0.4s' && gaya('.notif', 'animation-fill-mode') === 'both'"
],
[
"prefers-reduced-motion mematikan transisi tombol dan animasi notif",
"[...d.styleSheets].flatMap(s => [...s.cssRules]).filter(r => r.type === 4).some(r => /prefers-reduced-motion/.test(r.conditionText || r.media.mediaText) && [...r.cssRules].some(x => /\\.tombol/.test(x.selectorText) && /none/.test(x.style.transition || x.style.transitionProperty)) && [...r.cssRules].some(x => /\\.notif/.test(x.selectorText) && /none/.test(x.style.animation || x.style.animationName)))"
],
[
"Bagian A dan B tetap berlaku",
"gaya('.tombol', 'cursor') === 'pointer' && gaya($$('.daftar li')[1], 'background-color') === 'rgb(241, 245, 249)'"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "<!-- Bagian C: tambahkan aturan di dalam <style> di atas -->\n",
"mudah": []
}
],
"ujian": true,
"cakupan": "Bab 6–10: dekorasi & hover, variabel & spesifisitas, selector lanjut, satuan, animasi"
},
{
"id": "js-dasar",
"topik": "js",
"setelah": "dasar",
"judul": "Variabel, tipe, dan template literal",
"contoh": {
"judul": "Contoh: const, let, template literal",
"penjelasan": "<p><code>const</code> untuk nilai yang tidak diganti, <code>let</code> untuk yang berubah. Template literal (diapit backtick) menyisipkan nilai dengan <code>${...}</code>. <code>typeof</code> memberi tahu tipe data.</p>",
"kode": "const nama = \"Jauza\";\nlet umur = 22;\numur = umur + 1;\nconsole.log(`Halo, ${nama}! Umur ${umur} tahun.`);\nconsole.log(typeof nama, typeof umur, typeof true);\nconsole.log((19.99 * 3).toFixed(2));",
"kunci": "Pakai const secara bawaan, let hanya bila nilainya memang berubah. Jangan pakai var.",
"bahasa": "js",
"keluaran": "Halo, Jauza! Umur 23 tahun.\nstring number boolean\n59.97"
},
"langkah": [
{
"id": "js-dasar-1",
"judul": "Luas dan keliling",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "persegiPanjang",
"cerita": "",
"soal": "Buat <code>persegiPanjang(p, l)</code> yang mengembalikan objek <code>{ luas, keliling }</code>.",
"awal": "function persegiPanjang() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function persegiPanjang(p, l) {\n  const luas = p * l;\n  const keliling = 2 * (p + l);\n  return { luas, keliling };\n}\n",
"jelas": "Mengembalikan objek memudahkan pemanggil mengambil beberapa hasil sekaligus.",
"kompleksitas": "",
"petunjuk": [
"Hitung dua nilai dengan const, lalu return objek.",
"Singkatan properti: { luas, keliling } sama dengan { luas: luas, keliling: keliling }.",
"Kerangka solusinya:\nfunction persegiPanjang(p, l) {\n  const luas = …\n  const keliling = …\n  return …\n}"
],
"tes": [
[
"persegiPanjang(4, 3)",
"{\"luas\": 12, \"keliling\": 14}"
],
[
"persegiPanjang(0, 5)",
"{\"luas\": 0, \"keliling\": 10}"
],
[
"persegiPanjang(2.5, 2)",
"{\"luas\": 5, \"keliling\": 9}"
],
[
"persegiPanjang(10, 10)",
"{\"luas\": 100, \"keliling\": 40}"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-dasar-2",
"judul": "Kartu nama",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "kartuNama",
"cerita": "",
"soal": "Buat <code>kartuNama(nama, posisi, kota)</code> yang mengembalikan teks <code>\"Jauza | Odoo Developer | Batam\"</code>. Nama dirapikan (<code>trim</code>) dan posisi ditulis huruf besar semua bila <code>posisi</code> berupa singkatan 2–3 huruf (misalnya \"qa\" → \"QA\").",
"awal": "function kartuNama() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function kartuNama(nama, posisi, kota) {\n  const pos = posisi.length <= 3 ? posisi.toUpperCase() : posisi;\n  return `${nama.trim()} | ${pos} | ${kota}`;\n}\n",
"jelas": "Ekspresi kondisi ? a : b (ternary) cocok untuk memilih nilai dalam satu baris.",
"kompleksitas": "",
"petunjuk": [
"Template literal: `${a} | ${b} | ${c}`.",
"Syarat singkatan: posisi.length <= 3, lalu toUpperCase().",
"Kerangka solusinya:\nfunction kartuNama(nama, posisi, kota) {\n  const pos = …\n  return …\n}"
],
"tes": [
[
"kartuNama(\"Jauza\", \"Odoo Developer\", \"Batam\")",
"\"Jauza | Odoo Developer | Batam\""
],
[
"kartuNama(\"  Ani \", \"qa\", \"Solo\")",
"\"Ani | QA | Solo\""
],
[
"kartuNama(\"Budi\", \"UX\", \"Jakarta\")",
"\"Budi | UX | Jakarta\""
],
[
"kartuNama(\"Cita\", \"data\", \"Medan\")",
"\"Cita | data | Medan\""
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-operator",
"topik": "js",
"setelah": "operator",
"judul": "=== , ternary, dan ??",
"contoh": {
"judul": "Contoh: perbandingan ketat dan nilai bawaan",
"penjelasan": "<p>Selalu pakai <code>===</code>: <code>\"5\" == 5</code> bernilai true karena tipe diubah diam-diam, sedangkan <code>\"5\" === 5</code> false. <code>??</code> memberi nilai bawaan hanya bila nilainya <code>null</code>/<code>undefined</code>, berbeda dengan <code>||</code> yang juga mengganti 0 dan string kosong.</p>",
"kode": "console.log(\"5\" == 5, \"5\" === 5);\nconst stok = 0;\nconsole.log(stok || 10, stok ?? 10);\nconst member = true;\nconsole.log(member ? \"Diskon 10%\" : \"Harga normal\");\nconsole.log(7 % 2 === 1 ? \"ganjil\" : \"genap\");",
"kunci": "=== selalu. ?? untuk nilai bawaan yang menghormati 0. Ternary untuk pilihan dua nilai.",
"bahasa": "js",
"keluaran": "true false\n10 0\nDiskon 10%\nganjil"
},
"langkah": [
{
"id": "js-op-1",
"judul": "Ganjil atau genap",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "jenisAngka",
"cerita": "",
"soal": "Buat <code>jenisAngka(n)</code> yang mengembalikan <code>\"genap\"</code> atau <code>\"ganjil\"</code>. Bila <code>n</code> bukan bilangan bulat (misalnya 2.5 atau \"4\"), kembalikan <code>\"bukan bilangan bulat\"</code>.",
"awal": "function jenisAngka() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function jenisAngka(n) {\n  if (!Number.isInteger(n)) return \"bukan bilangan bulat\";\n  return n % 2 === 0 ? \"genap\" : \"ganjil\";\n}\n",
"jelas": "Di JavaScript, sisa bagi bilangan negatif ikut negatif. Mengecek === 0 untuk genap menghindari jebakan itu.",
"kompleksitas": "",
"petunjuk": [
"Number.isInteger(\"4\") bernilai false karena tipenya string.",
"-3 % 2 bernilai -1, jadi cek genap dengan === 0, bukan ganjil dengan === 1.",
"Kerangka solusinya:\nfunction jenisAngka(n) {\n  if (!Number.isInteger(n)) return …\n  return …\n}"
],
"tes": [
[
"jenisAngka(4)",
"\"genap\""
],
[
"jenisAngka(7)",
"\"ganjil\""
],
[
"jenisAngka(-3)",
"\"ganjil\""
],
[
"jenisAngka(0)",
"\"genap\""
],
[
"jenisAngka(\"4\")",
"\"bukan bilangan bulat\""
],
[
"jenisAngka(2.5)",
"\"bukan bilangan bulat\""
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-op-2",
"judul": "Harga dengan nilai bawaan",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "hargaAkhir",
"cerita": "",
"soal": "Buat <code>hargaAkhir(produk)</code>. <code>produk</code> punya <code>harga</code> dan mungkin <code>diskon</code> (persen) serta <code>pajak</code> (persen). Diskon bawaan 0, pajak bawaan 11, tetapi <b>pajak 0 harus tetap 0</b>. Kembalikan harga setelah diskon lalu pajak, dibulatkan dengan <code>Math.round</code>.",
"awal": "function hargaAkhir() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function hargaAkhir(produk) {\n  const diskon = produk.diskon ?? 0;\n  const pajak = produk.pajak ?? 11;\n  return Math.round(produk.harga * (1 - diskon / 100) * (1 + pajak / 100));\n}\n",
"jelas": "?? hanya mengganti null/undefined. Bug '0 dianggap kosong' sering terjadi pada diskon, stok, atau qty.",
"kompleksitas": "",
"petunjuk": [
"Gunakan ?? untuk nilai bawaan.",
"Dengan ||, pajak: 0 akan berubah menjadi 11; itulah jebakannya.",
"Kerangka solusinya:\nfunction hargaAkhir(produk) {\n  const diskon = …\n  const pajak = …\n  return …\n}"
],
"tes": [
[
"hargaAkhir({ harga: 100000 })",
"111000"
],
[
"hargaAkhir({ harga: 100000, diskon: 10 })",
"99900"
],
[
"hargaAkhir({ harga: 100000, pajak: 0 })",
"100000"
],
[
"hargaAkhir({ harga: 50000, diskon: 0, pajak: 0 })",
"50000"
],
[
"hargaAkhir({ harga: 19999, diskon: 15 })",
"18869"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-loop",
"topik": "js",
"setelah": "kondisiloop",
"judul": "if, for, dan for...of",
"contoh": {
"judul": "Contoh: for klasik, for...of, break",
"penjelasan": "<p><code>for (let i = 0; i &lt; n; i++)</code> bila butuh indeks, <code>for (const x of array)</code> untuk menelusuri isi, <code>break</code> untuk berhenti lebih awal.</p>",
"kode": "const nilai = [70, 85, 40, 92];\nfor (const n of nilai) {\n  if (n < 50) {\n    console.log(\"Ada yang tidak lulus:\", n);\n    break;\n  }\n}\nlet total = 0;\nfor (let i = 1; i <= 5; i++) total += i;\nconsole.log(total);",
"kunci": "for...of untuk isi array, for...in untuk kunci objek (jarang dipakai untuk array).",
"bahasa": "js",
"keluaran": "Ada yang tidak lulus: 40\n15"
},
"langkah": [
{
"id": "js-loop-1",
"judul": "FizzBuzz JavaScript",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "fizzbuzz",
"cerita": "",
"soal": "Buat <code>fizzbuzz(n)</code> yang mengembalikan array untuk 1..n: kelipatan 3 → \"Fizz\", 5 → \"Buzz\", keduanya → \"FizzBuzz\", lainnya angka sebagai <b>number</b>.",
"awal": "function fizzbuzz() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function fizzbuzz(n) {\n  const hasil = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 15 === 0) hasil.push(\"FizzBuzz\");\n    else if (i % 3 === 0) hasil.push(\"Fizz\");\n    else if (i % 5 === 0) hasil.push(\"Buzz\");\n    else hasil.push(i);\n  }\n  return hasil;\n}\n",
"jelas": "Soal yang sama seperti Python, tetapi perhatikan tipe: di sini angka tetap number.",
"kompleksitas": "",
"petunjuk": [
"Cek kelipatan 15 lebih dulu.",
"push(i) memasukkan angka (number), bukan string.",
"Kerangka solusinya:\nfunction fizzbuzz(n) {\n  const hasil = …\n  for (let i = …\n    if (i % 15 = …\n    else if (i % 3 = …\n    else if (i % 5 = …\n    else hasil.push(i);\n  }\n  return …\n}"
],
"tes": [
[
"fizzbuzz(5)",
"[1, 2, \"Fizz\", 4, \"Buzz\"]"
],
[
"fizzbuzz(15)",
"[1, 2, \"Fizz\", 4, \"Buzz\", \"Fizz\", 7, 8, \"Fizz\", \"Buzz\", 11, \"Fizz\", 13, 14, \"FizzBuzz\"]"
],
[
"fizzbuzz(0)",
"[]"
],
[
"fizzbuzz(1)",
"[1]"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-loop-2",
"judul": "Stok pertama yang habis",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "pertamaHabis",
"cerita": "",
"soal": "Buat <code>pertamaHabis(stok, keluar)</code>: <code>stok</code> angka awal, <code>keluar</code> array jumlah barang keluar per hari. Kembalikan nomor hari (mulai 1) saat stok pertama kali ≤ 0, atau <code>-1</code> bila tidak pernah habis. Berhenti memeriksa setelah stok habis.",
"awal": "function pertamaHabis() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function pertamaHabis(stok, keluar) {\n  for (let i = 0; i < keluar.length; i++) {\n    stok -= keluar[i];\n    if (stok <= 0) return i + 1;\n  }\n  return -1;\n}\n",
"jelas": "return di dalam for langsung menghentikan fungsi, sama seperti break lalu return.",
"kompleksitas": "",
"petunjuk": [
"Kurangi stok setiap hari, lalu cek.",
"Indeks array mulai 0, nomor hari mulai 1: return i + 1.",
"Kerangka solusinya:\nfunction pertamaHabis(stok, keluar) {\n  for (let i = …\n    stok -= …\n    if (stok <= …\n  }\n  return …\n}"
],
"tes": [
[
"pertamaHabis(10, [3, 4, 5, 1])",
"3"
],
[
"pertamaHabis(10, [1, 1])",
"-1"
],
[
"pertamaHabis(5, [5])",
"1"
],
[
"pertamaHabis(0, [])",
"-1"
],
[
"pertamaHabis(3, [0, 0, 4])",
"3"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-fungsi",
"topik": "js",
"setelah": "fungsi",
"judul": "Arrow function dan fungsi tingkat tinggi",
"contoh": {
"judul": "Contoh: parameter bawaan dan fungsi yang mengembalikan fungsi",
"penjelasan": "<p>Arrow function <code>(a, b) =&gt; a * b</code> ringkas untuk fungsi kecil. Parameter bawaan <code>(harga, pajak = 11)</code>. Fungsi bisa menerima atau mengembalikan fungsi lain (<i>higher-order function</i>).</p>",
"kode": "const kali = (a, b) => a * b;\nconst denganPajak = (harga, pajak = 11) => harga * (1 + pajak / 100);\nconst pengali = n => x => x * n;\nconst gandakan = pengali(2);\nconsole.log(kali(3, 4), denganPajak(100), gandakan(21));",
"kunci": "Arrow dengan satu ekspresi otomatis return. Bila memakai { }, return wajib ditulis.",
"bahasa": "js",
"keluaran": "12 111.00000000000001 42"
},
"langkah": [
{
"id": "js-fun-1",
"judul": "Konversi suhu",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "keFahrenheit",
"cerita": "",
"soal": "Buat arrow function <code>keFahrenheit</code> dengan parameter <code>c</code> dan <code>desimal = 1</code> yang mengembalikan F = C × 9/5 + 32 dibulatkan ke <code>desimal</code> angka di belakang koma (hasil berupa number).",
"awal": "const keFahrenheit = () => {\n  // tulis kodemu di sini\n};\n",
"solusi": "const keFahrenheit = (c, desimal = 1) => Number((c * 9 / 5 + 32).toFixed(desimal));\n",
"jelas": "toFixed mengembalikan string, sumber bug klasik saat hasilnya dijumlahkan lagi.",
"kompleksitas": "",
"petunjuk": [
"toFixed menghasilkan string; bungkus dengan Number().",
"Parameter bawaan: (c, desimal = 1) =>.",
"Kerangka solusinya:\nconst keFahrenheit = …"
],
"tes": [
[
"keFahrenheit(100)",
"212"
],
[
"keFahrenheit(36.6)",
"97.9"
],
[
"keFahrenheit(-40)",
"-40"
],
[
"keFahrenheit(21.123, 2)",
"70.02"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-fun-2",
"judul": "Pembuat diskon",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "buatDiskon",
"cerita": "",
"soal": "Buat <code>buatDiskon(persen)</code> yang <b>mengembalikan fungsi</b>. Fungsi itu menerima harga dan mengembalikan harga setelah diskon (Math.round). Persen di luar 0–100 dibatasi ke rentang itu.",
"awal": "function buatDiskon() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function buatDiskon(persen) {\n  const p = Math.min(100, Math.max(0, persen));\n  return harga => Math.round(harga * (1 - p / 100));\n}\n",
"jelas": "Fungsi yang mengingat variabel dari luar disebut closure. Tes terakhir memakai fungsi hasil buatDiskon sebagai callback map.",
"kompleksitas": "",
"petunjuk": [
"return harga => ... mengembalikan fungsi baru yang 'mengingat' persen.",
"Batasi dengan Math.min(100, Math.max(0, persen)).",
"Kerangka solusinya:\nfunction buatDiskon(persen) {\n  const p = …\n  return …\n}"
],
"tes": [
[
"buatDiskon(10)(50000)",
"45000"
],
[
"buatDiskon(0)(1999)",
"1999"
],
[
"buatDiskon(150)(1000)",
"0"
],
[
"buatDiskon(-5)(1000)",
"1000"
],
[
"[1000, 2500].map(buatDiskon(20))",
"[800, 2000]"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-array",
"topik": "js",
"setelah": "array",
"judul": "map, filter, reduce, sort",
"contoh": {
"judul": "Contoh: rantai method array",
"penjelasan": "<p><code>filter</code> menyaring, <code>map</code> mengubah setiap item, <code>reduce</code> meringkas menjadi satu nilai, <code>sort((a, b) =&gt; a - b)</code> mengurutkan angka. Semua kecuali sort tidak mengubah array asli.</p>",
"kode": "const produk = [\n  { nama: \"Kopi\", harga: 18000, stok: 5 },\n  { nama: \"Teh\", harga: 6000, stok: 0 },\n  { nama: \"Roti\", harga: 15000, stok: 2 },\n];\nconst tersedia = produk.filter(p => p.stok > 0).map(p => p.nama);\nconst totalNilai = produk.reduce((t, p) => t + p.harga * p.stok, 0);\nconst termurah = [...produk].sort((a, b) => a.harga - b.harga).map(p => p.nama);\nconsole.log(tersedia, totalNilai, termurah);",
"kunci": "sort mengubah array asli; salin dulu dengan [...arr]. sort tanpa fungsi mengurutkan sebagai teks.",
"bahasa": "js",
"keluaran": "[\"Kopi\",\"Roti\"] 120000 [\"Teh\",\"Roti\",\"Kopi\"]"
},
"langkah": [
{
"id": "js-arr-1",
"judul": "Daftar harga setelah diskon",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "daftarDiskon",
"cerita": "",
"soal": "Buat <code>daftarDiskon(produk, persen)</code>: ambil produk dengan <code>stok &gt; 0</code>, lalu kembalikan array <code>{ nama, harga }</code> dengan harga setelah diskon (Math.round).",
"awal": "function daftarDiskon() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function daftarDiskon(produk, persen) {\n  return produk\n    .filter(p => p.stok > 0)\n    .map(p => ({ nama: p.nama, harga: Math.round(p.harga * (1 - persen / 100)) }));\n}\n",
"jelas": "Tanpa kurung, p => { nama: ... } dianggap blok kode, bukan objek, sehingga hasilnya undefined.",
"kompleksitas": "",
"petunjuk": [
"filter dulu, baru map.",
"Mengembalikan objek dari arrow function perlu kurung: p => ({ ... }).",
"Kerangka solusinya:\nfunction daftarDiskon(produk, persen) {\n  return …\n    .filter(p = …\n    .map(p = …\n}"
],
"tes": [
[
"daftarDiskon([{ nama: \"Kopi\", harga: 18000, stok: 5 }, { nama: \"Teh\", harga: 6000, stok: 0 }], 10)",
"[{\"nama\": \"Kopi\", \"harga\": 16200}]"
],
[
"daftarDiskon([], 50)",
"[]"
],
[
"daftarDiskon([{ nama: \"A\", harga: 999, stok: 1 }], 33)",
"[{\"nama\": \"A\", \"harga\": 669}]"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-arr-2",
"judul": "Ringkasan per kategori",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "ringkasKategori",
"cerita": "",
"soal": "Buat <code>ringkasKategori(produk)</code> yang memakai <code>reduce</code> untuk menghasilkan objek <code>{ kategori: totalNilaiStok }</code> (harga × stok), lalu kembalikan array <code>[kategori, total]</code> diurutkan dari total terbesar; seri diurutkan nama kategori. Array asli tidak boleh berubah.",
"awal": "function ringkasKategori() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function ringkasKategori(produk) {\n  const total = produk.reduce((acc, p) => {\n    acc[p.kategori] = (acc[p.kategori] || 0) + p.harga * p.stok;\n    return acc;\n  }, {});\n  return Object.entries(total).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));\n}\n",
"jelas": "|| di fungsi sort menjadi pemecah seri: bila selisih total 0, bandingkan nama.",
"kompleksitas": "",
"petunjuk": [
"reduce dengan akumulator objek {}: acc[k] = (acc[k] || 0) + nilai; return acc.",
"Object.entries(obj) → array [kunci, nilai]; urutkan dengan b[1] - a[1] || a[0].localeCompare(b[0]).",
"Kerangka solusinya:\nfunction ringkasKategori(produk) {\n  const total = …\n    acc[p.kategori] = …\n    return …\n  }, {});\n  return …\n}"
],
"tes": [
[
"ringkasKategori([{ kategori: \"Minuman\", harga: 18000, stok: 5 }, { kategori: \"Makanan\", harga: 15000, stok: 2 }, { kategori: \"Minuman\", harga: 6000, stok: 10 }])",
"[[\"Minuman\", 150000], [\"Makanan\", 30000]]"
],
[
"ringkasKategori([])",
"[]"
],
[
"ringkasKategori([{ kategori: \"B\", harga: 1, stok: 1 }, { kategori: \"A\", harga: 1, stok: 1 }])",
"[[\"A\", 1], [\"B\", 1]]"
],
[
"const data = [{ kategori: \"X\", harga: 2, stok: 1 }, { kategori: \"Y\", harga: 5, stok: 1 }];\nringkasKategori(data);\nconst hasil = data.map(p => p.kategori);",
"[\"X\", \"Y\"]"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-strobj",
"topik": "js",
"setelah": "strobj",
"judul": "Destructuring dan spread",
"contoh": {
"judul": "Contoh: membongkar dan menyalin objek",
"penjelasan": "<p>Destructuring mengambil properti ke variabel: <code>const { nama, alamat: { kota } } = user</code>. Spread <code>{ ...lama, ...baru }</code> menyalin dan menimpa tanpa mengubah objek asli.</p>",
"kode": "const user = { nama: \"Ani\", email: \"ani@x.id\", alamat: { kota: \"Batam\" } };\nconst { nama, alamat: { kota } } = user;\nconsole.log(nama, kota);\nconst baru = { ...user, email: \"ani@baru.id\" };\nconsole.log(user.email, baru.email);\nconsole.log(Object.keys(user), \"  odoo  \".trim().toUpperCase());",
"kunci": "Spread menyalin satu tingkat (dangkal). Objek di dalamnya masih dipakai bersama.",
"bahasa": "js",
"keluaran": "Ani Batam\nani@x.id ani@baru.id\n[\"nama\",\"email\",\"alamat\"] ODOO"
},
"langkah": [
{
"id": "js-so-1",
"judul": "Ringkas profil",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "ringkasProfil",
"cerita": "",
"soal": "Buat <code>ringkasProfil(user)</code> memakai destructuring di parameter: kembalikan <code>\"Ani (ani@x.id) - Batam\"</code>. Bila <code>alamat</code> tidak ada, tulis kota <code>\"-\"</code>.",
"awal": "function ringkasProfil() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function ringkasProfil({ nama, email, alamat = {} }) {\n  const { kota = \"-\" } = alamat;\n  return `${nama} (${email}) - ${kota}`;\n}\n",
"jelas": "Nilai bawaan di destructuring mencegah error 'Cannot read properties of undefined'.",
"kompleksitas": "",
"petunjuk": [
"Destructuring di parameter: function f({ nama, email, alamat = {} }).",
"Nilai bawaan saat destructuring: const { kota = \"-\" } = alamat.",
"Kerangka solusinya:\nfunction ringkasProfil({ nama, email, alamat = …\n  const { kota = …\n  return …\n}"
],
"tes": [
[
"ringkasProfil({ nama: \"Ani\", email: \"ani@x.id\", alamat: { kota: \"Batam\" } })",
"\"Ani (ani@x.id) - Batam\""
],
[
"ringkasProfil({ nama: \"Budi\", email: \"b@y.id\" })",
"\"Budi (b@y.id) - -\""
],
[
"ringkasProfil({ nama: \"Cita\", email: \"c@z.id\", alamat: {} })",
"\"Cita (c@z.id) - -\""
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-so-2",
"judul": "Perbarui tanpa merusak",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "perbarui",
"cerita": "",
"soal": "Buat <code>perbarui(profil, perubahan)</code> yang mengembalikan profil <b>baru</b>: properti dari <code>perubahan</code> menimpa yang lama, kecuali properti bernilai <code>undefined</code> diabaikan, dan <code>email</code> selalu disimpan huruf kecil tanpa spasi tepi. Profil asli tidak boleh berubah.",
"awal": "function perbarui() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function perbarui(profil, perubahan) {\n  const bersih = Object.fromEntries(Object.entries(perubahan).filter(([, v]) => v !== undefined));\n  const hasil = { ...profil, ...bersih };\n  if (hasil.email) hasil.email = hasil.email.trim().toLowerCase();\n  return hasil;\n}\n",
"jelas": "Pola 'buat salinan baru, jangan ubah aslinya' (immutable update) adalah dasar state di React dan reducer.",
"kompleksitas": "",
"petunjuk": [
"Buang dulu nilai undefined: Object.entries(...).filter(([, v]) => v !== undefined), lalu Object.fromEntries.",
"Gabungkan dengan spread { ...profil, ...bersih }, lalu rapikan email.",
"Kerangka solusinya:\nfunction perbarui(profil, perubahan) {\n  const bersih = …\n  const hasil = …\n  if (hasil.email) hasil.email = …\n  return …\n}"
],
"tes": [
[
"perbarui({ nama: \"Ani\", email: \"a@x.id\" }, { email: \" ANI@Baru.ID \" })",
"{\"nama\": \"Ani\", \"email\": \"ani@baru.id\"}"
],
[
"perbarui({ nama: \"Ani\", kota: \"Solo\" }, { kota: undefined, umur: 22 })",
"{\"nama\": \"Ani\", \"kota\": \"Solo\", \"umur\": 22}"
],
[
"const lama = { nama: \"Budi\", email: \"b@x.id\" };\nperbarui(lama, { nama: \"Budi S\" });\nconst hasil = lama;",
"{\"nama\": \"Budi\", \"email\": \"b@x.id\"}"
],
[
"perbarui({}, {})",
"{}"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-dom",
"topik": "js",
"setelah": "dom",
"judul": "Membangun HTML dengan aman",
"contoh": {
"judul": "Contoh: data → HTML, dengan escape",
"penjelasan": "<p>Sebelum menyisipkan teks dari pengguna ke <code>innerHTML</code>, karakter <code>&amp; &lt; &gt; \"</code> harus di-<i>escape</i>; tanpa itu, nama seperti <code>&lt;img onerror=...&gt;</code> bisa menjalankan skrip (XSS). Di DOM sungguhan, <code>textContent</code> otomatis aman.</p>",
"kode": "const esc = s => String(s).replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\");\nconst produk = [\"Kopi\", \"<b>Teh</b>\"];\nconst html = \"<ul>\" + produk.map(p => `<li>${esc(p)}</li>`).join(\"\") + \"</ul>\";\nconsole.log(html);\n// di halaman: document.querySelector(\"#daftar\").innerHTML = html;",
"kunci": "Data pengguna → escape → baru masuk innerHTML. Atau pakai textContent.",
"bahasa": "js",
"keluaran": "<ul><li>Kopi</li><li>&lt;b&gt;Teh&lt;/b&gt;</li></ul>"
},
"langkah": [
{
"id": "js-dom-1",
"judul": "Daftar HTML yang aman",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "daftarHTML",
"cerita": "",
"soal": "Buat <code>daftarHTML(items)</code> yang mengembalikan string <code>&lt;ul&gt;&lt;li&gt;…&lt;/li&gt;…&lt;/ul&gt;</code>. Setiap item di-escape: <code>&amp;</code> → <code>&amp;amp;</code>, <code>&lt;</code> → <code>&amp;lt;</code>, <code>&gt;</code> → <code>&amp;gt;</code>. Array kosong → <code>&lt;ul&gt;&lt;/ul&gt;</code>.",
"awal": "function daftarHTML() {\n  // tulis kodemu di sini\n}\n",
"solusi": "const esc = s => String(s).replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\");\n\nfunction daftarHTML(items) {\n  return \"<ul>\" + items.map(i => `<li>${esc(i)}</li>`).join(\"\") + \"</ul>\";\n}\n",
"jelas": "Urutan replace penting: & harus diganti pertama. Ini cara kerja fungsi esc() yang dipakai KodeQuiz sendiri.",
"kompleksitas": "",
"petunjuk": [
"map tiap item menjadi `<li>…</li>`, lalu join(\"\").",
"Ganti & PALING DULU, supaya &lt; hasil penggantian tidak ikut berubah menjadi &amp;lt;.",
"Kerangka solusinya:\nconst esc = …\n\nfunction daftarHTML(items) {\n  return …\n}"
],
"tes": [
[
"daftarHTML([\"Kopi\", \"Teh\"])",
"\"<ul><li>Kopi</li><li>Teh</li></ul>\""
],
[
"daftarHTML([])",
"\"<ul></ul>\""
],
[
"daftarHTML([\"<script>alert(1)</script>\"])",
"\"<ul><li>&lt;script&gt;alert(1)&lt;/script&gt;</li></ul>\""
],
[
"daftarHTML([\"A & B\", 42])",
"\"<ul><li>A &amp; B</li><li>42</li></ul>\""
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-dom-2",
"judul": "Tabel dari data",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "tabelHTML",
"cerita": "",
"soal": "Buat <code>tabelHTML(baris)</code>: <code>baris</code> array objek dengan kunci yang sama. Kembalikan <code>&lt;table&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;kunci…&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;nilai…&lt;/td&gt;&lt;/tr&gt;…&lt;/tbody&gt;&lt;/table&gt;</code> (semua nilai di-escape seperti soal 1). Array kosong → string kosong.",
"awal": "function tabelHTML() {\n  // tulis kodemu di sini\n}\n",
"solusi": "const esc = s => String(s).replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\");\n\nfunction tabelHTML(baris) {\n  if (!baris.length) return \"\";\n  const kunci = Object.keys(baris[0]);\n  const kepala = \"<tr>\" + kunci.map(k => `<th>${esc(k)}</th>`).join(\"\") + \"</tr>\";\n  const isi = baris.map(b => \"<tr>\" + kunci.map(k => `<td>${esc(b[k])}</td>`).join(\"\") + \"</tr>\").join(\"\");\n  return `<table><thead>${kepala}</thead><tbody>${isi}</tbody></table>`;\n}\n",
"jelas": "Pola 'data → HTML' inilah yang dikerjakan framework (React, OWL di Odoo) secara otomatis dan aman.",
"kompleksitas": "",
"petunjuk": [
"Ambil judul kolom dari Object.keys(baris[0]).",
"Bangun string kepala dan isi terpisah dengan map + join, lalu gabungkan.",
"Kerangka solusinya:\nconst esc = …\n\nfunction tabelHTML(baris) {\n  if (!baris.length) return …\n  const kunci = …\n  const kepala = …\n  const isi = …\n  return …\n}"
],
"tes": [
[
"tabelHTML([{ produk: \"Kopi\", qty: 2 }, { produk: \"Teh\", qty: 1 }])",
"\"<table><thead><tr><th>produk</th><th>qty</th></tr></thead><tbody><tr><td>Kopi</td><td>2</td></tr><tr><td>Teh</td><td>1</td></tr></tbody></table>\""
],
[
"tabelHTML([])",
"\"\""
],
[
"tabelHTML([{ nama: \"<b>x</b>\" }])",
"\"<table><thead><tr><th>nama</th></tr></thead><tbody><tr><td>&lt;b&gt;x&lt;/b&gt;</td></tr></tbody></table>\""
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-async",
"topik": "js",
"setelah": "async",
"judul": "async/await dan Promise.all",
"contoh": {
"judul": "Contoh: menunggu data",
"penjelasan": "<p><code>await</code> menunggu Promise selesai di dalam fungsi <code>async</code>. <code>Promise.all</code> menjalankan beberapa permintaan bersamaan. Bungkus dengan <code>try/catch</code> untuk menangani kegagalan jaringan.</p>",
"kode": "const tunda = (ms, nilai) => new Promise(r => setTimeout(() => r(nilai), ms));\nasync function utama() {\n  const a = await tunda(50, \"data A\");\n  const [b, c] = await Promise.all([tunda(50, \"B\"), tunda(50, \"C\")]);\n  console.log(a, b, c);\n  try { await Promise.reject(new Error(\"jaringan putus\")); }\n  catch (e) { console.log(\"Ditangani:\", e.message); }\n}\nawait utama();",
"kunci": "Permintaan yang tidak saling bergantung → Promise.all (lebih cepat daripada await satu per satu).",
"bahasa": "js",
"keluaran": "data A B C\nDitangani: jaringan putus"
},
"langkah": [
{
"id": "js-async-1",
"judul": "Total dari API",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "totalPesanan",
"cerita": "",
"soal": "Buat <code>async function totalPesanan(ambil)</code>. <code>ambil()</code> mengembalikan Promise berisi array pesanan <code>{ total }</code>. Kembalikan jumlah semua total.",
"awal": "async function totalPesanan(ambil) {\n  // tulis kodemu di sini\n}\n",
"solusi": "async function totalPesanan(ambil) {\n  const pesanan = await ambil();\n  return pesanan.reduce((t, p) => t + p.total, 0);\n}\n",
"jelas": "Tanpa await, pesanan berisi Promise, bukan array, dan reduce akan error.",
"kompleksitas": "",
"petunjuk": [
"const pesanan = await ambil();",
"Lalu reduce seperti biasa.",
"Kerangka solusinya:\nasync function totalPesanan(ambil) {\n  const pesanan = …\n  return …\n}"
],
"tes": [
[
"await totalPesanan(async () => [{ total: 100 }, { total: 250 }])",
"350"
],
[
"await totalPesanan(async () => [])",
"0"
],
[
"await totalPesanan(() => new Promise(r => setTimeout(() => r([{ total: 5 }]), 30)))",
"5"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-async-2",
"judul": "Dashboard dengan cadangan",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "muatDashboard",
"cerita": "",
"soal": "Buat <code>async function muatDashboard(ambilPenjualan, ambilStok)</code> yang menjalankan keduanya <b>bersamaan</b> dengan <code>Promise.all</code> dan mengembalikan <code>{ penjualan, stok, galat: null }</code>. Bila salah satu gagal, kembalikan <code>{ penjualan: [], stok: [], galat: pesanError }</code>.",
"awal": "async function muatDashboard(ambilPenjualan, ambilStok) {\n  // tulis kodemu di sini\n}\n",
"solusi": "async function muatDashboard(ambilPenjualan, ambilStok) {\n  try {\n    const [penjualan, stok] = await Promise.all([ambilPenjualan(), ambilStok()]);\n    return { penjualan, stok, galat: null };\n  } catch (e) {\n    return { penjualan: [], stok: [], galat: e.message };\n  }\n}\n",
"jelas": "Tes terakhir mengukur waktu: dua permintaan 200 ms harus selesai sekitar 200 ms (bersamaan), bukan 400 ms.",
"kompleksitas": "",
"petunjuk": [
"const [a, b] = await Promise.all([f(), g()]);",
"Bungkus dengan try/catch; e.message berisi pesan error.",
"Kerangka solusinya:\nasync function muatDashboard(ambilPenjualan, ambilStok) {\n  try {\n    const [penjualan, stok] = …\n    return …\n  } catch (e) {\n    return …\n  }\n}"
],
"tes": [
[
"await muatDashboard(async () => [1, 2], async () => [3])",
"{\"penjualan\": [1, 2], \"stok\": [3], \"galat\": null}"
],
[
"await muatDashboard(async () => [1], async () => { throw new Error(\"server stok mati\"); })",
"{\"penjualan\": [], \"stok\": [], \"galat\": \"server stok mati\"}"
],
[
"const mulai = Date.now();\nawait muatDashboard(() => new Promise(r => setTimeout(() => r([1]), 200)), () => new Promise(r => setTimeout(() => r([2]), 200)));\nconst hasil = Date.now() - mulai < 350;",
"true"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-modern",
"topik": "js",
"setelah": "modern",
"judul": "Optional chaining dan pengelompokan",
"contoh": {
"judul": "Contoh: ?. dan ??",
"penjelasan": "<p><code>a?.b?.c</code> berhenti dengan <code>undefined</code> bila ada bagian yang kosong, tanpa error. Digabung dengan <code>??</code> untuk nilai bawaan. Method modern lain: <code>Object.entries</code>, <code>Array.from</code>, <code>includes</code>, <code>at(-1)</code>.</p>",
"kode": "const user = { nama: \"Ani\", alamat: null };\nconsole.log(user.alamat?.kota ?? \"Kota belum diisi\");\nconsole.log([3, 5, 9].at(-1), [\"a\", \"b\"].includes(\"b\"));\nconst kelompok = [\"apel\", \"anggur\", \"mangga\"].reduce((o, b) => ((o[b[0]] ??= []).push(b), o), {});\nconsole.log(kelompok);",
"kunci": "?. untuk data API yang mungkin tidak lengkap. ??= mengisi hanya bila masih null/undefined.",
"bahasa": "js",
"keluaran": "Kota belum diisi\n9 true\n{\"a\":[\"apel\",\"anggur\"],\"m\":[\"mangga\"]}"
},
"langkah": [
{
"id": "js-mod-1",
"judul": "Kota pelanggan",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "kotaPelanggan",
"cerita": "",
"soal": "Buat <code>kotaPelanggan(order)</code> yang mengembalikan <code>order.partner.alamat.kota</code>, atau <code>\"Tidak diketahui\"</code> bila bagian mana pun kosong. Jangan sampai error.",
"awal": "const kotaPelanggan = order => {\n  // tulis kodemu di sini\n};\n",
"solusi": "const kotaPelanggan = order => order?.partner?.alamat?.kota ?? \"Tidak diketahui\";\n",
"jelas": "Data dari API Odoo (misalnya partner_id bernilai false) sering tidak lengkap; ?. mencegah aplikasi berhenti karena error.",
"kompleksitas": "",
"petunjuk": [
"Rangkai ?. di setiap titik.",
"Kota berupa string kosong tetap dikembalikan apa adanya (?? tidak mengganti \"\").",
"Kerangka solusinya:\nconst kotaPelanggan = …"
],
"tes": [
[
"kotaPelanggan({ partner: { alamat: { kota: \"Batam\" } } })",
"\"Batam\""
],
[
"kotaPelanggan({ partner: null })",
"\"Tidak diketahui\""
],
[
"kotaPelanggan({})",
"\"Tidak diketahui\""
],
[
"kotaPelanggan(undefined)",
"\"Tidak diketahui\""
],
[
"kotaPelanggan({ partner: { alamat: { kota: \"\" } } })",
"\"\""
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-mod-2",
"judul": "Kelompokkan berdasarkan kunci",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "kelompokkan",
"cerita": "",
"soal": "Buat <code>kelompokkan(data, kunci)</code> yang mengembalikan objek <code>{ nilaiKunci: [item, ...] }</code>. Item yang kuncinya kosong (null/undefined) masuk kelompok <code>\"(kosong)\"</code>.",
"awal": "function kelompokkan() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function kelompokkan(data, kunci) {\n  const hasil = {};\n  for (const item of data) {\n    const k = item[kunci] ?? \"(kosong)\";\n    (hasil[k] ??= []).push(item);\n  }\n  return hasil;\n}\n",
"jelas": "Mengelompokkan data adalah langkah pertama hampir semua laporan; di Odoo ini setara group by di list view.",
"kompleksitas": "",
"petunjuk": [
"Untuk setiap item, tentukan k = item[kunci] ?? \"(kosong)\".",
"(hasil[k] ??= []).push(item) membuat array baru bila belum ada.",
"Kerangka solusinya:\nfunction kelompokkan(data, kunci) {\n  const hasil = …\n  for (const item of data) {\n    const k = …\n    (hasil[k] ??= …\n  }\n  return …\n}"
],
"tes": [
[
"kelompokkan([{ tim: \"A\", n: 1 }, { tim: \"B\", n: 2 }, { tim: \"A\", n: 3 }], \"tim\")",
"{\"A\": [{\"tim\": \"A\", \"n\": 1}, {\"tim\": \"A\", \"n\": 3}], \"B\": [{\"tim\": \"B\", \"n\": 2}]}"
],
[
"kelompokkan([{ tim: null }, { x: 1 }], \"tim\")",
"{\"(kosong)\": [{\"tim\": null}, {\"x\": 1}]}"
],
[
"kelompokkan([], \"tim\")",
"{}"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-kasus",
"topik": "js",
"setelah": "kasus",
"judul": "Debugging jebakan JavaScript",
"contoh": {
"judul": "Contoh: sort angka dan 0.1 + 0.2",
"penjelasan": "<p>Dua jebakan terkenal: <code>sort()</code> tanpa pembanding mengurutkan angka sebagai teks (<code>[10, 9, 1]</code> → <code>[1, 10, 9]</code>), dan penjumlahan desimal tidak persis. Satu lagi: <code>==</code> mengubah tipe diam-diam.</p>",
"kode": "console.log([10, 9, 1].sort());\nconsole.log([10, 9, 1].sort((a, b) => a - b));\nconsole.log(0.1 + 0.2, Math.round((0.1 + 0.2) * 100) / 100);\nconsole.log(\"\" == 0, \"\" === 0);",
"kunci": "Angka: sort((a, b) => a - b). Uang: bulatkan, atau hitung dalam satuan terkecil (sen) sebagai bilangan bulat.",
"bahasa": "js",
"keluaran": "[1,10,9]\n[1,9,10]\n0.30000000000000004 0.3\ntrue false"
},
"langkah": [
{
"id": "js-kasus-1",
"judul": "Perbaiki peringkat nilai",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "peringkat",
"cerita": "",
"soal": "Kode awal punya <b>dua bug</b>. <code>peringkat(nilai)</code> seharusnya mengembalikan 3 nilai tertinggi dari besar ke kecil, tanpa mengubah array asli.",
"awal": "function peringkat(nilai) {\n  return nilai.sort().reverse().slice(0, 3);\n}\n",
"solusi": "function peringkat(nilai) {\n  return [...nilai].sort((a, b) => b - a).slice(0, 3);\n}\n",
"jelas": "Dua bug ini sering lolos uji karena data contoh kebetulan berdigit sama.",
"kompleksitas": "",
"petunjuk": [
"Bug 1: sort tanpa pembanding mengurutkan sebagai teks ('100' < '70').",
"Bug 2: sort mengubah array asli; salin dulu dengan [...nilai].",
"Kerangka solusinya:\nfunction peringkat(nilai) {\n  return …\n}"
],
"tes": [
[
"peringkat([70, 100, 85, 9, 90])",
"[100, 90, 85]"
],
[
"peringkat([5])",
"[5]"
],
[
"const n = [3, 1, 2];\nperingkat(n);\nconst hasil = n;",
"[3, 1, 2]"
],
[
"peringkat([1000, 200, 30])",
"[1000, 200, 30]"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-kasus-2",
"judul": "Perbaiki total keranjang",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "totalKeranjang",
"cerita": "",
"soal": "Kode awal punya <b>tiga bug</b>. <code>totalKeranjang(items)</code> menerima item <code>{ harga, qty }</code> di mana <code>qty</code> bisa berupa string dari input form (\"2\"). Kembalikan total dibulatkan 2 desimal (number). Item dengan qty kosong/tidak valid dilewati.",
"awal": "function totalKeranjang(items) {\n  var total = 0;\n  for (var i in items) {\n    total = total + items[i].harga * items[i].qty;\n  }\n  return total;\n}\n",
"solusi": "function totalKeranjang(items) {\n  let total = 0;\n  for (const item of items) {\n    const qty = Number(item.qty);\n    if (!Number.isFinite(qty) || item.qty === \"\") continue;\n    total += item.harga * qty;\n  }\n  return Math.round(total * 100) / 100;\n}\n",
"jelas": "Input form selalu string. Lupa mengubahnya ke angka membuat 15000 * \"2\" kebetulan benar tetapi \"2\" + 1 menjadi \"21\".",
"kompleksitas": "",
"petunjuk": [
"Bug 1: var + for...in di array. Bug 2: qty string dijumlahkan. Bug 3: 0.1 + 0.2.",
"Number(\"abc\") = NaN; cek dengan Number.isFinite. Number(\"\") = 0, jadi string kosong perlu dicek terpisah.",
"Kerangka solusinya:\nfunction totalKeranjang(items) {\n  let total = …\n  for (const item of items) {\n    const qty = …\n    if (!Number.isFinite(qty) || item.qty = …\n    total += …\n  }\n  return …\n}"
],
"tes": [
[
"totalKeranjang([{ harga: 0.1, qty: \"1\" }, { harga: 0.2, qty: 1 }])",
"0.3"
],
[
"totalKeranjang([{ harga: 15000, qty: \"2\" }, { harga: 6000, qty: \"abc\" }])",
"30000"
],
[
"totalKeranjang([])",
"0"
],
[
"totalKeranjang([{ harga: 10, qty: \"\" }, { harga: 5, qty: 3 }])",
"15"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-scope",
"topik": "js",
"setelah": "scope",
"judul": "Closure: fungsi yang mengingat",
"contoh": {
"judul": "Contoh: penghitung privat",
"penjelasan": "<p>Closure terjadi ketika fungsi dalam tetap bisa memakai variabel fungsi luar walau fungsi luar sudah selesai. Ini cara membuat data 'privat' tanpa class.</p>",
"kode": "function buatPenghitung() {\n  let n = 0;\n  return { tambah: () => ++n, nilai: () => n };\n}\nconst a = buatPenghitung(), b = buatPenghitung();\na.tambah(); a.tambah(); b.tambah();\nconsole.log(a.nilai(), b.nilai());",
"kunci": "Setiap pemanggilan buatPenghitung() membuat variabel n sendiri.",
"bahasa": "js",
"keluaran": "2 1"
},
"langkah": [
{
"id": "js-scope-1",
"judul": "Nomor antrean",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "buatAntrean",
"cerita": "",
"soal": "Buat <code>buatAntrean(awalan)</code> yang mengembalikan fungsi. Setiap dipanggil, fungsi itu mengembalikan nomor berikutnya: <code>\"A001\"</code>, <code>\"A002\"</code>, … (3 digit). Setiap antrean punya penghitung sendiri.",
"awal": "function buatAntrean() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function buatAntrean(awalan) {\n  let n = 0;\n  return () => awalan + String(++n).padStart(3, \"0\");\n}\n",
"jelas": "Closure menjaga n tetap ada di antara pemanggilan tanpa variabel global.",
"kompleksitas": "",
"petunjuk": [
"Simpan let n = 0 di fungsi luar, kembalikan fungsi yang menaikkan n.",
"padStart(3, \"0\") menambah nol di depan.",
"Kerangka solusinya:\nfunction buatAntrean(awalan) {\n  let n = …\n  return …\n}"
],
"tes": [
[
"const a = buatAntrean(\"A\");\na();\nconst hasil = a();",
"\"A002\""
],
[
"const a = buatAntrean(\"A\"), b = buatAntrean(\"B\");\na(); a();\nconst hasil = [a(), b()];",
"[\"A003\", \"B001\"]"
],
[
"buatAntrean(\"CS-\")()",
"\"CS-001\""
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-scope-2",
"judul": "Fungsi sekali jalan dan memo",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "memo",
"cerita": "",
"soal": "Buat <code>memo(fn)</code> yang mengembalikan fungsi baru: hasil untuk argumen yang sama disimpan, sehingga <code>fn</code> hanya dipanggil sekali per argumen. Fungsi hasil juga punya properti <code>panggilan</code> yang mencatat berapa kali <code>fn</code> benar-benar dipanggil.",
"awal": "function memo() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function memo(fn) {\n  const cache = new Map();\n  const bungkus = x => {\n    if (!cache.has(x)) {\n      cache.set(x, fn(x));\n      bungkus.panggilan++;\n    }\n    return cache.get(x);\n  };\n  bungkus.panggilan = 0;\n  return bungkus;\n}\n",
"jelas": "Memoization mempercepat perhitungan mahal yang sering diulang dengan argumen sama.",
"kompleksitas": "",
"petunjuk": [
"Simpan hasil di Map di dalam closure.",
"Properti fungsi bisa ditambahkan langsung: bungkus.panggilan = 0.",
"Kerangka solusinya:\nfunction memo(fn) {\n  const cache = …\n  const bungkus = …\n    if (!cache.has(x)) {\n      cache.set(x, fn(x));\n      bungkus.panggilan++;\n    }\n    return …\n  };\n  bungkus.panggilan = …\n  return …\n}"
],
"tes": [
[
"const kuadrat = memo(x => x * x);\nkuadrat(4); kuadrat(4); kuadrat(5);\nconst hasil = [kuadrat(5), kuadrat.panggilan];",
"[25, 2]"
],
[
"const f = memo(x => x + 1);\nconst hasil = f.panggilan;",
"0"
],
[
"const g = memo(s => s.toUpperCase());\nconst hasil = [g(\"a\"), g(\"a\"), g(\"b\"), g.panggilan];",
"[\"A\", \"A\", \"B\", 2]"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-event",
"topik": "js",
"setelah": "event",
"judul": "Validasi form dan debounce",
"contoh": {
"judul": "Contoh: logika validasi terpisah dari DOM",
"penjelasan": "<p>Logika validasi sebaiknya fungsi murni (data masuk → pesan error keluar) yang dipanggil dari event <code>submit</code>. Debounce menunda pemanggilan sampai pengguna berhenti mengetik, cocok untuk kotak pencarian.</p>",
"kode": "function validasi({ email }) {\n  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) ? {} : { email: \"Format email salah\" };\n}\nconsole.log(validasi({ email: \"ani@x.id\" }), validasi({ email: \"ani\" }));\n// form.addEventListener(\"submit\", e => { const err = validasi(data); if (Object.keys(err).length) e.preventDefault(); });",
"kunci": "Pisahkan logika (mudah dites) dari kode DOM (addEventListener).",
"bahasa": "js",
"keluaran": "{} {\"email\":\"Format email salah\"}"
},
"langkah": [
{
"id": "js-ev-1",
"judul": "Validasi form lamaran",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "validasiLamaran",
"cerita": "",
"soal": "Buat <code>validasiLamaran(data)</code> yang mengembalikan objek error (kosong bila valid): <code>nama</code> wajib minimal 3 huruf setelah trim → <code>\"Nama minimal 3 huruf\"</code>; <code>email</code> harus mengandung <code>@</code> dan titik setelahnya → <code>\"Email tidak valid\"</code>; <code>umur</code> harus angka 17–60 → <code>\"Umur 17-60\"</code>.",
"awal": "function validasiLamaran() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function validasiLamaran(data) {\n  const err = {};\n  if ((data.nama ?? \"\").trim().length < 3) err.nama = \"Nama minimal 3 huruf\";\n  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(data.email ?? \"\")) err.email = \"Email tidak valid\";\n  const umur = Number(data.umur);\n  if (!(umur >= 17 && umur <= 60)) err.umur = \"Umur 17-60\";\n  return err;\n}\n",
"jelas": "Mengembalikan objek per field memudahkan menampilkan pesan di bawah input yang tepat.",
"kompleksitas": "",
"petunjuk": [
"Mulai dengan const err = {} lalu isi kunci yang salah.",
"Pola email sederhana: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/. Number(\"abc\") adalah NaN, dan perbandingan dengan NaN selalu false.",
"Kerangka solusinya:\nfunction validasiLamaran(data) {\n  const err = …\n  if ((data.nama ?? \"\").trim().length < 3) err.nama = …\n  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(data.email ?? \"\")) err.email = …\n  const umur = …\n  if (!(umur >= …\n  return …\n}"
],
"tes": [
[
"validasiLamaran({ nama: \"Jauza\", email: \"j@mail.com\", umur: \"22\" })",
"{}"
],
[
"validasiLamaran({ nama: \" Al \", email: \"j@mail\", umur: 15 })",
"{\"nama\": \"Nama minimal 3 huruf\", \"email\": \"Email tidak valid\", \"umur\": \"Umur 17-60\"}"
],
[
"validasiLamaran({})",
"{\"nama\": \"Nama minimal 3 huruf\", \"email\": \"Email tidak valid\", \"umur\": \"Umur 17-60\"}"
],
[
"validasiLamaran({ nama: \"Budi\", email: \"b@x.id\", umur: \"abc\" })",
"{\"umur\": \"Umur 17-60\"}"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-ev-2",
"judul": "Debounce pencarian",
"kategori": "studi",
"tingkat": 3,
"bahasa": "js",
"fungsi": "debounce",
"cerita": "",
"soal": "Buat <code>debounce(fn, ms)</code>: fungsi hasil menunda pemanggilan <code>fn</code> sampai tidak ada panggilan baru selama <code>ms</code> milidetik, lalu memanggil <code>fn</code> dengan argumen <b>terakhir</b>.",
"awal": "function debounce() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function debounce(fn, ms) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n}\n",
"jelas": "Tanpa debounce, mengetik 'odoo' mengirim 4 permintaan pencarian; dengan debounce hanya 1.",
"kompleksitas": "",
"petunjuk": [
"Simpan id timer di closure; setiap panggilan clearTimeout lalu setTimeout lagi.",
"Rest/spread: (...args) => fn(...args) meneruskan semua argumen.",
"Kerangka solusinya:\nfunction debounce(fn, ms) {\n  let timer;\n  return …\n    clearTimeout(timer);\n    timer = …\n  };\n}"
],
"tes": [
[
"const log = [];\nconst cari = debounce(q => log.push(q), 50);\ncari(\"o\"); cari(\"od\"); cari(\"odoo\");\nawait new Promise(r => setTimeout(r, 120));\nconst hasil = log;",
"[\"odoo\"]"
],
[
"const log = [];\nconst f = debounce(x => log.push(x), 30);\nf(1);\nawait new Promise(r => setTimeout(r, 80));\nf(2);\nawait new Promise(r => setTimeout(r, 80));\nconst hasil = log;",
"[1, 2]"
],
[
"const log = [];\nconst f = debounce(x => log.push(x), 50);\nf(1);\nconst hasil = log.length;",
"0"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-kelas",
"topik": "js",
"setelah": "kelas",
"judul": "Class, field privat, dan extends",
"contoh": {
"judul": "Contoh: #privat, getter, extends",
"penjelasan": "<p><code>#saldo</code> adalah field privat: tidak bisa dibaca dari luar class. <code>get saldo()</code> membuat properti baca-saja. <code>class B extends A</code> mewarisi; panggil <code>super(...)</code> di constructor.</p>",
"kode": "class Akun {\n  #saldo = 0;\n  constructor(nama) { this.nama = nama; }\n  setor(n) { this.#saldo += n; return this; }\n  get saldo() { return this.#saldo; }\n}\nclass AkunPremium extends Akun {\n  constructor(nama) { super(nama); this.level = \"premium\"; }\n}\nconst a = new AkunPremium(\"Ani\").setor(100).setor(50);\nconsole.log(a.nama, a.level, a.saldo, a.saldoX);",
"kunci": "return this memungkinkan pemanggilan berantai: a.setor(1).setor(2).",
"bahasa": "js",
"keluaran": "Ani premium 150 undefined"
},
"langkah": [
{
"id": "js-kelas-1",
"judul": "Class Keranjang",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "Keranjang",
"cerita": "",
"soal": "Buat class <code>Keranjang</code> dengan field privat <code>#isi</code> (Map). Method <code>tambah(nama, harga, qty = 1)</code> (nama sama menambah qty, mengembalikan <code>this</code>), <code>hapus(nama)</code>, getter <code>total</code>, dan getter <code>jumlahBarang</code> (total qty).",
"awal": "class Keranjang {\n  // tulis kodemu di sini\n}\n",
"solusi": "class Keranjang {\n  #isi = new Map();\n  tambah(nama, harga, qty = 1) {\n    const lama = this.#isi.get(nama);\n    this.#isi.set(nama, { harga, qty: (lama?.qty ?? 0) + qty });\n    return this;\n  }\n  hapus(nama) {\n    this.#isi.delete(nama);\n    return this;\n  }\n  get total() {\n    let t = 0;\n    for (const { harga, qty } of this.#isi.values()) t += harga * qty;\n    return t;\n  }\n  get jumlahBarang() {\n    let n = 0;\n    for (const { qty } of this.#isi.values()) n += qty;\n    return n;\n  }\n}\n",
"jelas": "Tes terakhir memastikan isi keranjang tidak bisa diakses langsung dari luar (k.isi bernilai undefined).",
"kompleksitas": "",
"petunjuk": [
"#isi = new Map() sebagai field privat; get/set/delete untuk mengubahnya.",
"Getter ditulis get total() { ... } dan dipakai tanpa kurung: k.total.",
"Kerangka solusinya:\nclass Keranjang {\n  #isi = …\n  tambah(nama, harga, qty = …\n    const lama = …\n    this.#isi.set(nama, { harga, qty: (lama?.qty ?? 0) + qty });\n    return …\n  }\n  hapus(nama) {\n    this.#isi.delete(nama);\n    return …\n  }\n  get total() {\n    let t = …\n    for (const { harga, qty } of this.#isi.values()) t += …\n    return …\n  }\n  get jumlahBarang() {\n    let n = …\n    for (const { qty } of this.#isi.values()) n += …\n    return …\n  }\n}"
],
"tes": [
[
"const k = new Keranjang().tambah(\"Kopi\", 18000, 2).tambah(\"Roti\", 15000);\nconst hasil = [k.total, k.jumlahBarang];",
"[51000, 3]"
],
[
"const k = new Keranjang().tambah(\"Kopi\", 18000).tambah(\"Kopi\", 18000, 2);\nconst hasil = k.jumlahBarang;",
"3"
],
[
"const k = new Keranjang().tambah(\"A\", 10).hapus(\"A\").hapus(\"B\");\nconst hasil = [k.total, k.jumlahBarang];",
"[0, 0]"
],
[
"const k = new Keranjang();\nconst hasil = [k.isi === undefined, Object.keys(k).length];",
"[true, 0]"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-kelas-2",
"judul": "Pewarisan: Karyawan dan Manajer",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "Manajer",
"cerita": "",
"soal": "Class <code>Karyawan</code> sudah ada. Buat <code>Manajer extends Karyawan</code> dengan tambahan <code>tim</code> (array nama). Override <code>gaji()</code>: gaji induk + 500.000 per anggota tim, dan <code>toString()</code>: teks induk + <code>\" (tim: N)\"</code>.",
"awal": "class Karyawan {\n  constructor(nama, pokok) { this.nama = nama; this.pokok = pokok; }\n  gaji() { return this.pokok; }\n  toString() { return `${this.nama}: ${this.gaji()}`; }\n}\n\nclass Manajer extends Karyawan {\n  // tulis kodemu di sini\n}\n",
"solusi": "class Karyawan {\n  constructor(nama, pokok) { this.nama = nama; this.pokok = pokok; }\n  gaji() { return this.pokok; }\n  toString() { return `${this.nama}: ${this.gaji()}`; }\n}\n\nclass Manajer extends Karyawan {\n  constructor(nama, pokok, tim = []) {\n    super(nama, pokok);\n    this.tim = tim;\n  }\n  gaji() { return super.gaji() + 500000 * this.tim.length; }\n  toString() { return `${super.toString()} (tim: ${this.tim.length})`; }\n}\n",
"jelas": "Polanya sama dengan _inherit + super() di Odoo, hanya sintaksnya JavaScript.",
"kompleksitas": "",
"petunjuk": [
"constructor anak wajib memanggil super(nama, pokok) sebelum memakai this.",
"super.gaji() dan super.toString() memanggil versi induk.",
"Kerangka solusinya:\nclass Karyawan {\n  constructor(nama, pokok) { this.nama = …\n  gaji() { return …\n  toString() { return …\n}\n\nclass Manajer extends Karyawan {\n  constructor(nama, pokok, tim = …\n    super(nama, pokok);\n    this.tim = …\n  }\n  gaji() { return …\n  toString() { return …\n}"
],
"tes": [
[
"new Manajer(\"Rina\", 8000000, [\"Ani\", \"Budi\"]).gaji()",
"9000000"
],
[
"String(new Manajer(\"Rina\", 8000000, [\"Ani\", \"Budi\"]))",
"\"Rina: 9000000 (tim: 2)\""
],
[
"String(new Manajer(\"Sari\", 7000000))",
"\"Sari: 7000000 (tim: 0)\""
],
[
"new Manajer(\"X\", 1) instanceof Karyawan",
"true"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-error",
"topik": "js",
"setelah": "error",
"judul": "throw, try/catch, dan error buatan sendiri",
"contoh": {
"judul": "Contoh: class error sendiri",
"penjelasan": "<p>Lempar error dengan <code>throw new Error(\"pesan\")</code>. Class turunan <code>Error</code> membuat jenis error bisa dibedakan di <code>catch</code> dengan <code>instanceof</code>. <code>finally</code> selalu dijalankan.</p>",
"kode": "class ValidasiError extends Error {\n  constructor(field, pesan) { super(pesan); this.name = \"ValidasiError\"; this.field = field; }\n}\ntry {\n  throw new ValidasiError(\"email\", \"Email wajib diisi\");\n} catch (e) {\n  console.log(e instanceof ValidasiError, e.name, e.field, e.message);\n} finally {\n  console.log(\"selesai\");\n}",
"kunci": "Set this.name di class error agar nama jenisnya tampil benar di log.",
"bahasa": "js",
"keluaran": "true ValidasiError email Email wajib diisi\nselesai"
},
"langkah": [
{
"id": "js-err-1",
"judul": "Parse angka dengan error yang jelas",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "parseQty",
"cerita": "",
"soal": "Buat class <code>ValidasiError extends Error</code> (name <code>\"ValidasiError\"</code>) dan fungsi <code>parseQty(teks)</code> yang mengembalikan bilangan bulat positif dari teks. Lempar <code>ValidasiError</code> dengan pesan <code>\"qty harus bilangan bulat positif\"</code> bila tidak valid.",
"awal": "class ValidasiError extends Error {\n  // lengkapi\n}\n\nfunction parseQty(teks) {\n  // tulis kodemu di sini\n}\n",
"solusi": "class ValidasiError extends Error {\n  constructor(pesan) {\n    super(pesan);\n    this.name = \"ValidasiError\";\n  }\n}\n\nfunction parseQty(teks) {\n  const n = Number(String(teks).trim());\n  if (!Number.isInteger(n) || n <= 0) throw new ValidasiError(\"qty harus bilangan bulat positif\");\n  return n;\n}\n",
"jelas": "Error dengan jenis sendiri membuat penanganan lebih tepat: error validasi ditampilkan ke pengguna, error lain dicatat ke log.",
"kompleksitas": "",
"petunjuk": [
"class ValidasiError extends Error { constructor(pesan) { super(pesan); this.name = \"ValidasiError\"; } }",
"Number.isInteger memeriksa bilangan bulat; tambahkan syarat > 0.",
"Kerangka solusinya:\nclass ValidasiError extends Error {\n  constructor(pesan) {\n    super(pesan);\n    this.name = …\n  }\n}\n\nfunction parseQty(teks) {\n  const n = …\n  if (!Number.isInteger(n) || n <= …\n  return …\n}"
],
"tes": [
[
"parseQty(\" 12 \")",
"12"
],
[
"let hasil;\ntry { parseQty(\"2.5\"); hasil = \"tidak error\"; } catch (e) { hasil = [e.name, e.message, e instanceof ValidasiError, e instanceof Error]; }",
"[\"ValidasiError\", \"qty harus bilangan bulat positif\", true, true]"
],
[
"let hasil;\ntry { parseQty(\"0\"); } catch (e) { hasil = e.name; }",
"\"ValidasiError\""
],
[
"let hasil;\ntry { parseQty(\"abc\"); } catch (e) { hasil = e.name; }",
"\"ValidasiError\""
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-err-2",
"judul": "Jalankan dengan aman",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "coba",
"cerita": "",
"soal": "Buat <code>async function coba(fn, cadangan)</code> yang mengembalikan <code>{ ok: true, nilai }</code> bila <code>fn()</code> (boleh async) berhasil, atau <code>{ ok: false, nilai: cadangan, galat: pesan }</code> bila gagal. Fungsi <code>coba</code> juga mencatat <code>coba.jumlah</code>: berapa kali ia dipanggil (bertambah di blok <code>finally</code>).",
"awal": "async function coba(fn, cadangan) {\n  // tulis kodemu di sini\n}\n",
"solusi": "async function coba(fn, cadangan) {\n  try {\n    return { ok: true, nilai: await fn() };\n  } catch (e) {\n    return { ok: false, nilai: cadangan, galat: e.message };\n  } finally {\n    coba.jumlah = (coba.jumlah ?? 0) + 1;\n  }\n}\n",
"jelas": "Pembungkus seperti ini dipakai robot RPA agar satu langkah yang gagal tidak menghentikan seluruh proses.",
"kompleksitas": "",
"petunjuk": [
"await fn() bekerja untuk fungsi biasa maupun async.",
"finally dijalankan baik setelah return di try maupun di catch.",
"Kerangka solusinya:\nasync function coba(fn, cadangan) {\n  try {\n    return …\n  } catch (e) {\n    return …\n  } finally {\n    coba.jumlah = …\n  }\n}"
],
"tes": [
[
"await coba(() => 42, 0)",
"{\"ok\": true, \"nilai\": 42}"
],
[
"await coba(async () => { throw new Error(\"timeout\"); }, [])",
"{\"ok\": false, \"nilai\": [], \"galat\": \"timeout\"}"
],
[
"await coba(() => 1);\nawait coba(() => { throw new Error(\"x\"); });\nconst hasil = coba.jumlah;",
"2"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-koleksi",
"topik": "js",
"setelah": "koleksi",
"judul": "Map, Set, Date, dan regex",
"contoh": {
"judul": "Contoh: Set untuk unik, Map untuk hitung",
"penjelasan": "<p><code>new Set(arr)</code> membuang duplikat. <code>Map</code> menyimpan pasangan kunci-nilai dengan kunci tipe apa pun dan urutan terjaga. <code>Object.fromEntries(map)</code> mengubah Map menjadi objek biasa.</p>",
"kode": "const kata = \"odoo itu odoo\".split(\" \");\nconsole.log([...new Set(kata)]);\nconst hitung = new Map();\nfor (const k of kata) hitung.set(k, (hitung.get(k) ?? 0) + 1);\nconsole.log(Object.fromEntries(hitung));\nconsole.log(\"INV/2026/0042\".match(/\\d+/g));\nconsole.log(new Date(\"2026-11-24T00:00:00Z\").getUTCDay());",
"kunci": "Set → unik. Map → hitung/kelompok. Regex dengan flag g → semua kecocokan.",
"bahasa": "js",
"keluaran": "[\"odoo\",\"itu\"]\n{\"odoo\":2,\"itu\":1}\n[\"2026\",\"0042\"]\n2"
},
"langkah": [
{
"id": "js-kol-1",
"judul": "Kata terbanyak",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "kataTerbanyak",
"cerita": "",
"soal": "Buat <code>kataTerbanyak(teks, n)</code>: ubah ke huruf kecil, ambil kata (huruf/angka saja, pakai regex), hitung dengan <code>Map</code>, lalu kembalikan <code>n</code> pasangan <code>[kata, jumlah]</code> terbanyak; seri diurutkan abjad.",
"awal": "function kataTerbanyak() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function kataTerbanyak(teks, n) {\n  const hitung = new Map();\n  for (const k of teks.toLowerCase().match(/[a-z0-9]+/g) ?? []) hitung.set(k, (hitung.get(k) ?? 0) + 1);\n  return [...hitung].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n);\n}\n",
"jelas": "match dengan flag g mengembalikan null bila tidak ada yang cocok, bukan array kosong. Itu sebabnya ?? [] diperlukan.",
"kompleksitas": "",
"petunjuk": [
"teks.toLowerCase().match(/[a-z0-9]+/g) memberi array kata, atau null bila tidak ada (pakai ?? []).",
"[...map] mengubah Map menjadi array pasangan, siap diurutkan.",
"Kerangka solusinya:\nfunction kataTerbanyak(teks, n) {\n  const hitung = …\n  for (const k of teks.toLowerCase().match(/[a-z0-9]+/g) ?? []) hitung.set(k, (hitung.get(k) ?? 0) + 1);\n  return …\n}"
],
"tes": [
[
"kataTerbanyak(\"Odoo itu mudah. Odoo itu seru, seru!\", 2)",
"[[\"itu\", 2], [\"odoo\", 2]]"
],
[
"kataTerbanyak(\"\", 3)",
"[]"
],
[
"kataTerbanyak(\"b a b a c\", 5)",
"[[\"a\", 2], [\"b\", 2], [\"c\", 1]]"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-kol-2",
"judul": "Format tanggal dan jatuh tempo",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "jatuhTempo",
"cerita": "",
"soal": "Buat <code>jatuhTempo(tanggalISO, hari)</code> yang menambah <code>hari</code> ke tanggal <code>\"YYYY-MM-DD\"</code> dan mengembalikan format Indonesia <code>\"DD/MM/YYYY\"</code>. Hitung dalam UTC agar tidak terpengaruh zona waktu.",
"awal": "function jatuhTempo() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function jatuhTempo(tanggalISO, hari) {\n  const d = new Date(tanggalISO + \"T00:00:00Z\");\n  d.setUTCDate(d.getUTCDate() + hari);\n  const dua = n => String(n).padStart(2, \"0\");\n  return `${dua(d.getUTCDate())}/${dua(d.getUTCMonth() + 1)}/${d.getUTCFullYear()}`;\n}\n",
"jelas": "Bulan di objek Date dimulai dari 0 (Januari = 0): sumber bug klasik. Memakai UTC mencegah tanggal bergeser sehari karena zona waktu.",
"kompleksitas": "",
"petunjuk": [
"new Date(\"2026-11-24T00:00:00Z\") membuat tanggal UTC; setUTCDate menambah hari dengan benar melewati akhir bulan.",
"getUTCMonth() mulai dari 0, jadi tambah 1.",
"Kerangka solusinya:\nfunction jatuhTempo(tanggalISO, hari) {\n  const d = …\n  d.setUTCDate(d.getUTCDate() + hari);\n  const dua = …\n  return …\n}"
],
"tes": [
[
"jatuhTempo(\"2026-11-24\", 30)",
"\"24/12/2026\""
],
[
"jatuhTempo(\"2028-02-28\", 1)",
"\"29/02/2028\""
],
[
"jatuhTempo(\"2026-12-31\", 1)",
"\"01/01/2027\""
],
[
"jatuhTempo(\"2026-01-31\", 0)",
"\"31/01/2026\""
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-modul",
"topik": "js",
"setelah": "modul",
"judul": "JSON dan konfigurasi",
"contoh": {
"judul": "Contoh: JSON.parse dengan nilai bawaan",
"penjelasan": "<p><code>JSON.parse</code> mengubah teks JSON menjadi objek; teks rusak melempar <code>SyntaxError</code>. <code>JSON.stringify(obj, null, 2)</code> menulis JSON rapi. File <code>package.json</code> di proyek Node juga JSON biasa.</p>",
"kode": "const bawaan = { tema: \"terang\", bahasa: \"id\" };\nfunction bacaKonfig(teks) {\n  try { return { ...bawaan, ...JSON.parse(teks) }; }\n  catch { return bawaan; }\n}\nconsole.log(bacaKonfig('{\"tema\":\"gelap\"}'), bacaKonfig(\"rusak\"));\nconsole.log(JSON.stringify({ a: 1, b: [2, 3] }, null, 2));",
"kunci": "Selalu bungkus JSON.parse dengan try/catch bila teksnya datang dari luar.",
"bahasa": "js",
"keluaran": "{\"tema\":\"gelap\",\"bahasa\":\"id\"} {\"tema\":\"terang\",\"bahasa\":\"id\"}\n{\n  \"a\": 1,\n  \"b\": [\n    2,\n    3\n  ]\n}"
},
"langkah": [
{
"id": "js-modul-1",
"judul": "Baca konfigurasi",
"kategori": "studi",
"tingkat": 1,
"bahasa": "js",
"fungsi": "bacaKonfig",
"cerita": "",
"soal": "Buat <code>bacaKonfig(teks)</code> yang menggabungkan nilai bawaan <code>{ tema: \"terang\", bahasa: \"id\", ukuran: 16 }</code> dengan isi JSON. Bila JSON rusak atau bukan objek (misalnya array atau angka), kembalikan bawaan saja.",
"awal": "function bacaKonfig() {\n  // tulis kodemu di sini\n}\n",
"solusi": "const BAWAAN = { tema: \"terang\", bahasa: \"id\", ukuran: 16 };\n\nfunction bacaKonfig(teks) {\n  try {\n    const isi = JSON.parse(teks);\n    if (!isi || typeof isi !== \"object\" || Array.isArray(isi)) return { ...BAWAAN };\n    return { ...BAWAAN, ...isi };\n  } catch {\n    return { ...BAWAAN };\n  }\n}\n",
"jelas": "JSON yang valid belum tentu berbentuk sesuai harapan. Memeriksa bentuk data adalah validasi di batas sistem.",
"kompleksitas": "",
"petunjuk": [
"try { JSON.parse(...) } catch { ... }",
"Cek bentuknya: objek biasa, bukan array, bukan null.",
"Kerangka solusinya:\nconst BAWAAN = …\n\nfunction bacaKonfig(teks) {\n  try {\n    const isi = …\n    if (!isi || typeof isi != …\n    return …\n  } catch {\n    return …\n  }\n}"
],
"tes": [
[
"bacaKonfig('{\"tema\": \"gelap\"}')",
"{\"tema\": \"gelap\", \"bahasa\": \"id\", \"ukuran\": 16}"
],
[
"bacaKonfig(\"{rusak\")",
"{\"tema\": \"terang\", \"bahasa\": \"id\", \"ukuran\": 16}"
],
[
"bacaKonfig(\"[1, 2]\")",
"{\"tema\": \"terang\", \"bahasa\": \"id\", \"ukuran\": 16}"
],
[
"bacaKonfig(\"42\")",
"{\"tema\": \"terang\", \"bahasa\": \"id\", \"ukuran\": 16}"
],
[
"bacaKonfig('{\"ukuran\": 18, \"baru\": true}')",
"{\"tema\": \"terang\", \"bahasa\": \"id\", \"ukuran\": 18, \"baru\": true}"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-modul-2",
"judul": "Ringkas package.json",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "ringkasPackage",
"cerita": "",
"soal": "Buat <code>ringkasPackage(teks)</code> yang membaca isi <code>package.json</code> dan mengembalikan <code>{ nama, versi, jumlahDependensi, scripts }</code>: jumlah dependencies + devDependencies, dan <code>scripts</code> berupa array nama script terurut. Kunci yang tidak ada dianggap kosong.",
"awal": "function ringkasPackage() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function ringkasPackage(teks) {\n  const p = JSON.parse(teks);\n  return {\n    nama: p.name ?? \"\",\n    versi: p.version ?? \"0.0.0\",\n    jumlahDependensi: Object.keys(p.dependencies ?? {}).length + Object.keys(p.devDependencies ?? {}).length,\n    scripts: Object.keys(p.scripts ?? {}).sort(),\n  };\n}\n",
"jelas": "Membaca file konfigurasi seperti ini adalah tugas umum di alat otomasi dan skrip build.",
"kompleksitas": "",
"petunjuk": [
"Object.keys(obj ?? {}).length menghitung kunci dengan aman.",
"Pakai ?? untuk nilai bawaan nama dan versi.",
"Kerangka solusinya:\nfunction ringkasPackage(teks) {\n  const p = …\n  return …\n    nama: p.name ?? \"\",\n    versi: p.version ?? \"0.0.0\",\n    jumlahDependensi: Object.keys(p.dependencies ?? {}).length + Object.keys(p.devDependencies ?? {}).length,\n    scripts: Object.keys(p.scripts ?? {}).sort(),\n  };\n}"
],
"tes": [
[
"ringkasPackage('{\"name\": \"kodequiz\", \"version\": \"5.0.0\", \"dependencies\": {\"pyodide\": \"0.26.4\"}, \"devDependencies\": {\"eslint\": \"9\", \"playwright\": \"1\"}, \"scripts\": {\"test\": \"x\", \"build\": \"y\"}}')",
"{\"nama\": \"kodequiz\", \"versi\": \"5.0.0\", \"jumlahDependensi\": 3, \"scripts\": [\"build\", \"test\"]}"
],
[
"ringkasPackage(\"{}\")",
"{\"nama\": \"\", \"versi\": \"0.0.0\", \"jumlahDependensi\": 0, \"scripts\": []}"
],
[
"ringkasPackage('{\"name\": \"a\", \"scripts\": {}}')",
"{\"nama\": \"a\", \"versi\": \"0.0.0\", \"jumlahDependensi\": 0, \"scripts\": []}"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "js-frontend",
"topik": "js",
"setelah": "frontend",
"judul": "Reducer gaya React",
"contoh": {
"judul": "Contoh: state baru, bukan state yang diubah",
"penjelasan": "<p>Di React (dan OWL di Odoo), tampilan dihitung dari <i>state</i>. State tidak diubah langsung; reducer menerima state lama + aksi, lalu mengembalikan state <b>baru</b>.</p>",
"kode": "function reducer(state, aksi) {\n  switch (aksi.type) {\n    case \"tambah\": return { ...state, angka: state.angka + 1 };\n    case \"reset\": return { ...state, angka: 0 };\n    default: return state;\n  }\n}\nlet s = { angka: 0 };\ns = reducer(s, { type: \"tambah\" });\ns = reducer(s, { type: \"tambah\" });\nconsole.log(s, reducer(s, { type: \"lain\" }) === s);",
"kunci": "Aksi yang tidak dikenal mengembalikan state yang sama persis.",
"bahasa": "js",
"keluaran": "{\"angka\":2} true"
},
"langkah": [
{
"id": "js-fe-1",
"judul": "Reducer todo",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "todoReducer",
"cerita": "",
"soal": "Buat <code>todoReducer(state, aksi)</code>. State: array <code>{ id, teks, selesai }</code>. Aksi: <code>{ type: \"tambah\", id, teks }</code> (menambah di akhir, teks di-trim, abaikan bila teks kosong), <code>{ type: \"toggle\", id }</code>, <code>{ type: \"hapus\", id }</code>. Selalu kembalikan array baru; aksi lain mengembalikan state yang sama.",
"awal": "function todoReducer() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function todoReducer(state, aksi) {\n  switch (aksi.type) {\n    case \"tambah\": {\n      const teks = aksi.teks.trim();\n      return teks ? [...state, { id: aksi.id, teks, selesai: false }] : state;\n    }\n    case \"toggle\":\n      return state.map(t => t.id === aksi.id ? { ...t, selesai: !t.selesai } : t);\n    case \"hapus\":\n      return state.filter(t => t.id !== aksi.id);\n    default:\n      return state;\n  }\n}\n",
"jelas": "Tes 3 memastikan state lama tidak berubah: dasar dari fitur undo dan deteksi perubahan di React.",
"kompleksitas": "",
"petunjuk": [
"switch (aksi.type) dengan case untuk setiap aksi.",
"toggle: map + spread { ...t, selesai: !t.selesai }; hapus: filter.",
"Kerangka solusinya:\nfunction todoReducer(state, aksi) {\n  switch (aksi.type) {\n    case \"tambah\": {\n      const teks = …\n      return …\n    }\n    case \"toggle\":\n      return …\n    case \"hapus\":\n      return …\n    default:\n      return …\n  }\n}"
],
"tes": [
[
"todoReducer([], { type: \"tambah\", id: 1, teks: \" Belajar Odoo \" })",
"[{\"id\": 1, \"teks\": \"Belajar Odoo\", \"selesai\": false}]"
],
[
"todoReducer([{ id: 1, teks: \"a\", selesai: false }], { type: \"toggle\", id: 1 })",
"[{\"id\": 1, \"teks\": \"a\", \"selesai\": true}]"
],
[
"const s = [{ id: 1, teks: \"a\", selesai: false }];\ntodoReducer(s, { type: \"toggle\", id: 1 });\nconst hasil = s[0].selesai;",
"false"
],
[
"todoReducer([{ id: 1, teks: \"a\", selesai: true }, { id: 2, teks: \"b\", selesai: false }], { type: \"hapus\", id: 1 })",
"[{\"id\": 2, \"teks\": \"b\", \"selesai\": false}]"
],
[
"const s = [];\nconst hasil = [todoReducer(s, { type: \"x\" }) === s, todoReducer(s, { type: \"tambah\", id: 9, teks: \"  \" }).length];",
"[true, 0]"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "js-fe-2",
"judul": "Data turunan untuk tampilan",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "tampilanTodo",
"cerita": "",
"soal": "Buat <code>tampilanTodo(todos, filter)</code> dengan filter <code>\"semua\"</code>, <code>\"aktif\"</code>, atau <code>\"selesai\"</code>. Kembalikan <code>{ daftar: [teks...], sisa: jumlahBelumSelesai, persen: persenSelesai (bulat) }</code>. Todo kosong → persen 0.",
"awal": "function tampilanTodo() {\n  // tulis kodemu di sini\n}\n",
"solusi": "function tampilanTodo(todos, filter) {\n  const cocok = { semua: () => true, aktif: t => !t.selesai, selesai: t => t.selesai }[filter] ?? (() => true);\n  const selesai = todos.filter(t => t.selesai).length;\n  return {\n    daftar: todos.filter(cocok).map(t => t.teks),\n    sisa: todos.length - selesai,\n    persen: todos.length ? Math.round(selesai / todos.length * 100) : 0,\n  };\n}\n",
"jelas": "Data turunan dihitung dari state, tidak disimpan terpisah, sehingga tidak pernah tidak sinkron.",
"kompleksitas": "",
"petunjuk": [
"Petakan nama filter ke fungsi saring dengan objek.",
"Hitung jumlah selesai sekali, lalu pakai untuk sisa dan persen.",
"Kerangka solusinya:\nfunction tampilanTodo(todos, filter) {\n  const cocok = …\n  const selesai = …\n  return …\n    daftar: todos.filter(cocok).map(t = …\n    sisa: todos.length - selesai,\n    persen: todos.length ? Math.round(selesai / todos.length * 100) : 0,\n  };\n}"
],
"tes": [
[
"tampilanTodo([{ teks: \"a\", selesai: true }, { teks: \"b\", selesai: false }, { teks: \"c\", selesai: false }], \"aktif\")",
"{\"daftar\": [\"b\", \"c\"], \"sisa\": 2, \"persen\": 33}"
],
[
"tampilanTodo([{ teks: \"a\", selesai: true }], \"selesai\")",
"{\"daftar\": [\"a\"], \"sisa\": 0, \"persen\": 100}"
],
[
"tampilanTodo([], \"semua\")",
"{\"daftar\": [], \"sisa\": 0, \"persen\": 0}"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "uji-js-1",
"topik": "js",
"setelah": "array",
"judul": "Keranjang toko online",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "const bersihkan = t => t.trim().toLowerCase();\nconst hitung = daftar => daftar.reduce((o, k) => ({ ...o, [k]: (o[k] || 0) + 1 }), {});\nconst laporan = mentah => Object.entries(hitung(mentah.map(bersihkan))).sort();\nconsole.log(laporan([\" Kopi\", \"teh \", \"KOPI\"]));",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"bahasa": "js",
"keluaran": "[[\"kopi\",2],[\"teh\",1]]"
},
"langkah": [
{
"id": "uji-js-1-a",
"judul": "Bagian A: Tambah ke keranjang",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "tambahKeKeranjang",
"cerita": "Kamu membuat logika keranjang belanja toko online. Data produk: <code>{ id, nama, harga, stok }</code>.",
"soal": "Buat <code>tambahKeKeranjang(keranjang, produk, qty)</code> yang mengembalikan keranjang <b>baru</b> (array <code>{ id, nama, harga, qty }</code>). Produk yang sudah ada ditambah qty-nya. qty total tidak boleh melebihi <code>produk.stok</code> (dibatasi ke stok). qty ≤ 0 tidak mengubah apa pun.",
"awal": "function tambahKeKeranjang(keranjang, produk, qty) {\n  // tulis kodemu di sini\n}\n",
"solusi": "function tambahKeKeranjang(keranjang, produk, qty) {\n  if (qty <= 0) return keranjang;\n  const ada = keranjang.find(i => i.id === produk.id);\n  const baru = Math.min(produk.stok, (ada ? ada.qty : 0) + qty);\n  if (ada) return keranjang.map(i => i.id === produk.id ? { ...i, qty: baru } : i);\n  return [...keranjang, { id: produk.id, nama: produk.nama, harga: produk.harga, qty: baru }];\n}\n",
"jelas": "Keranjang yang immutable aman dipakai sebagai state aplikasi.",
"kompleksitas": "",
"petunjuk": [
"find mencari item yang sama; Math.min membatasi ke stok.",
"Jangan ubah array lama: pakai map + spread atau [...keranjang, itemBaru].",
"Kerangka solusinya:\nfunction tambahKeKeranjang(keranjang, produk, qty) {\n  if (qty <= …\n  const ada = …\n  const baru = …\n  if (ada) return …\n  return …\n}"
],
"tes": [
[
"tambahKeKeranjang([], { id: 1, nama: \"Kopi\", harga: 18000, stok: 5 }, 2)",
"[{\"id\": 1, \"nama\": \"Kopi\", \"harga\": 18000, \"qty\": 2}]"
],
[
"tambahKeKeranjang([{ id: 1, nama: \"Kopi\", harga: 18000, qty: 2 }], { id: 1, nama: \"Kopi\", harga: 18000, stok: 5 }, 9)",
"[{\"id\": 1, \"nama\": \"Kopi\", \"harga\": 18000, \"qty\": 5}]"
],
[
"const k = [{ id: 1, nama: \"Kopi\", harga: 18000, qty: 1 }];\ntambahKeKeranjang(k, { id: 1, nama: \"Kopi\", harga: 18000, stok: 5 }, 1);\nconst hasil = k[0].qty;",
"1"
],
[
"tambahKeKeranjang([], { id: 2, nama: \"Teh\", harga: 6000, stok: 3 }, 0)",
"[]"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "uji-js-1-b",
"judul": "Bagian B: Hitung total",
"kategori": "studi",
"tingkat": 3,
"bahasa": "js",
"fungsi": "hitungTotal",
"cerita": "Lanjutan bagian A. Kodemu yang sudah lulus ada di editor; tambahkan fungsi baru di bawahnya.",
"soal": "Buat <code>hitungTotal(keranjang, kodeVoucher)</code> yang mengembalikan <code>{ subtotal, diskon, ongkir, total }</code>. Voucher <code>\"HEMAT10\"</code> = diskon 10% (maks 50.000), <code>\"GRATISONGKIR\"</code> = ongkir 0, lainnya tidak berlaku. Ongkir 15.000, tetapi gratis bila subtotal ≥ 200.000. Keranjang kosong: semua 0. Semua dibulatkan Math.round.",
"awal": "function tambahKeKeranjang(keranjang, produk, qty) {\n  if (qty <= 0) return keranjang;\n  const ada = keranjang.find(i => i.id === produk.id);\n  const baru = Math.min(produk.stok, (ada ? ada.qty : 0) + qty);\n  if (ada) return keranjang.map(i => i.id === produk.id ? { ...i, qty: baru } : i);\n  return [...keranjang, { id: produk.id, nama: produk.nama, harga: produk.harga, qty: baru }];\n}\n\nfunction hitungTotal(keranjang, kodeVoucher) {\n  // tulis kodemu di sini\n}\n",
"solusi": "function tambahKeKeranjang(keranjang, produk, qty) {\n  if (qty <= 0) return keranjang;\n  const ada = keranjang.find(i => i.id === produk.id);\n  const baru = Math.min(produk.stok, (ada ? ada.qty : 0) + qty);\n  if (ada) return keranjang.map(i => i.id === produk.id ? { ...i, qty: baru } : i);\n  return [...keranjang, { id: produk.id, nama: produk.nama, harga: produk.harga, qty: baru }];\n}\n\nfunction hitungTotal(keranjang, kodeVoucher) {\n  const subtotal = keranjang.reduce((t, i) => t + i.harga * i.qty, 0);\n  if (subtotal === 0) return { subtotal: 0, diskon: 0, ongkir: 0, total: 0 };\n  const diskon = kodeVoucher === \"HEMAT10\" ? Math.min(50000, Math.round(subtotal * 0.1)) : 0;\n  const ongkir = kodeVoucher === \"GRATISONGKIR\" || subtotal >= 200000 ? 0 : 15000;\n  return { subtotal, diskon, ongkir, total: subtotal - diskon + ongkir };\n}\n",
"jelas": "Aturan bisnis seperti batas diskon dan ambang gratis ongkir paling sering salah di batasnya: uji tepat 200.000.",
"kompleksitas": "",
"petunjuk": [
"Subtotal dengan reduce. Tangani keranjang kosong lebih dulu.",
"Diskon: Math.min(50000, ...). Ongkir: ternary dengan dua syarat (||).",
"Kerangka solusinya:\nfunction tambahKeKeranjang(keranjang, produk, qty) {\n  if (qty <= …\n  const ada = …\n  const baru = …\n  if (ada) return …\n  return …\n}\n\nfunction hitungTotal(keranjang, kodeVoucher) {\n  const subtotal = …\n  if (subtotal = …\n  const diskon = …\n  const ongkir = …\n  return …\n}"
],
"tes": [
[
"hitungTotal([{ harga: 18000, qty: 2 }], \"\")",
"{\"subtotal\": 36000, \"diskon\": 0, \"ongkir\": 15000, \"total\": 51000}"
],
[
"hitungTotal([{ harga: 18000, qty: 2 }], \"HEMAT10\")",
"{\"subtotal\": 36000, \"diskon\": 3600, \"ongkir\": 15000, \"total\": 47400}"
],
[
"hitungTotal([{ harga: 1000000, qty: 1 }], \"HEMAT10\")",
"{\"subtotal\": 1000000, \"diskon\": 50000, \"ongkir\": 0, \"total\": 950000}"
],
[
"hitungTotal([{ harga: 50000, qty: 2 }], \"GRATISONGKIR\")",
"{\"subtotal\": 100000, \"diskon\": 0, \"ongkir\": 0, \"total\": 100000}"
],
[
"hitungTotal([], \"HEMAT10\")",
"{\"subtotal\": 0, \"diskon\": 0, \"ongkir\": 0, \"total\": 0}"
],
[
"hitungTotal([{ harga: 100000, qty: 2 }], \"SALAH\")",
"{\"subtotal\": 200000, \"diskon\": 0, \"ongkir\": 0, \"total\": 200000}"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "function hitungTotal(keranjang, kodeVoucher) {\n  // tulis kodemu di sini\n}\n",
"mudah": []
},
{
"id": "uji-js-1-c",
"judul": "Bagian C: Ringkasan pesanan",
"kategori": "studi",
"tingkat": 3,
"bahasa": "js",
"fungsi": "ringkasanPesanan",
"cerita": "Lanjutan bagian B. Kodemu yang sudah lulus ada di editor; tambahkan fungsi baru di bawahnya.",
"soal": "Buat <code>ringkasanPesanan(keranjang, kodeVoucher)</code> yang memakai fungsi bagian B dan mengembalikan array baris teks: satu baris per item <code>\"2x Kopi - 36000\"</code> (urut nama), lalu <code>\"Diskon: 3600\"</code> (hanya bila &gt; 0), <code>\"Ongkir: 15000\"</code> atau <code>\"Ongkir: GRATIS\"</code>, dan <code>\"Total: 47400\"</code>. Keranjang kosong → <code>[\"Keranjang kosong\"]</code>.",
"awal": "function tambahKeKeranjang(keranjang, produk, qty) {\n  if (qty <= 0) return keranjang;\n  const ada = keranjang.find(i => i.id === produk.id);\n  const baru = Math.min(produk.stok, (ada ? ada.qty : 0) + qty);\n  if (ada) return keranjang.map(i => i.id === produk.id ? { ...i, qty: baru } : i);\n  return [...keranjang, { id: produk.id, nama: produk.nama, harga: produk.harga, qty: baru }];\n}\n\nfunction hitungTotal(keranjang, kodeVoucher) {\n  const subtotal = keranjang.reduce((t, i) => t + i.harga * i.qty, 0);\n  if (subtotal === 0) return { subtotal: 0, diskon: 0, ongkir: 0, total: 0 };\n  const diskon = kodeVoucher === \"HEMAT10\" ? Math.min(50000, Math.round(subtotal * 0.1)) : 0;\n  const ongkir = kodeVoucher === \"GRATISONGKIR\" || subtotal >= 200000 ? 0 : 15000;\n  return { subtotal, diskon, ongkir, total: subtotal - diskon + ongkir };\n}\n\nfunction ringkasanPesanan(keranjang, kodeVoucher) {\n  // tulis kodemu di sini\n}\n",
"solusi": "function tambahKeKeranjang(keranjang, produk, qty) {\n  if (qty <= 0) return keranjang;\n  const ada = keranjang.find(i => i.id === produk.id);\n  const baru = Math.min(produk.stok, (ada ? ada.qty : 0) + qty);\n  if (ada) return keranjang.map(i => i.id === produk.id ? { ...i, qty: baru } : i);\n  return [...keranjang, { id: produk.id, nama: produk.nama, harga: produk.harga, qty: baru }];\n}\n\nfunction hitungTotal(keranjang, kodeVoucher) {\n  const subtotal = keranjang.reduce((t, i) => t + i.harga * i.qty, 0);\n  if (subtotal === 0) return { subtotal: 0, diskon: 0, ongkir: 0, total: 0 };\n  const diskon = kodeVoucher === \"HEMAT10\" ? Math.min(50000, Math.round(subtotal * 0.1)) : 0;\n  const ongkir = kodeVoucher === \"GRATISONGKIR\" || subtotal >= 200000 ? 0 : 15000;\n  return { subtotal, diskon, ongkir, total: subtotal - diskon + ongkir };\n}\n\nfunction ringkasanPesanan(keranjang, kodeVoucher) {\n  if (!keranjang.length) return [\"Keranjang kosong\"];\n  const t = hitungTotal(keranjang, kodeVoucher);\n  const baris = [...keranjang].sort((a, b) => a.nama.localeCompare(b.nama)).map(i => `${i.qty}x ${i.nama} - ${i.harga * i.qty}`);\n  if (t.diskon > 0) baris.push(`Diskon: ${t.diskon}`);\n  baris.push(`Ongkir: ${t.ongkir ? t.ongkir : \"GRATIS\"}`);\n  baris.push(`Total: ${t.total}`);\n  return baris;\n}\n",
"jelas": "Fungsi kecil yang sudah teruji (A, B) membuat fungsi akhir pendek dan mudah dibaca.",
"kompleksitas": "",
"petunjuk": [
"Panggil hitungTotal; jangan hitung ulang.",
"Urutkan salinan keranjang berdasarkan nama dengan localeCompare.",
"Kerangka solusinya:\nfunction tambahKeKeranjang(keranjang, produk, qty) {\n  if (qty <= …\n  const ada = …\n  const baru = …\n  if (ada) return …\n  return …\n}\n\nfunction hitungTotal(keranjang, kodeVoucher) {\n  const subtotal = …\n  if (subtotal = …\n  const diskon = …\n  const ongkir = …\n  return …\n}\n\nfunction ringkasanPesanan(keranjang, kodeVoucher) {\n  if (!keranjang.length) return …\n  const t = …\n  const baris = …\n  if (t.diskon > 0) baris.push(`Diskon: ${t.diskon}`);\n  baris.push(`Ongkir: ${t.ongkir ? t.ongkir : \"GRATIS\"}`);\n  baris.push(`Total: ${t.total}`);\n  return …\n}"
],
"tes": [
[
"ringkasanPesanan([{ nama: \"Kopi\", harga: 18000, qty: 2 }], \"HEMAT10\")",
"[\"2x Kopi - 36000\", \"Diskon: 3600\", \"Ongkir: 15000\", \"Total: 47400\"]"
],
[
"ringkasanPesanan([{ nama: \"Teh\", harga: 6000, qty: 1 }, { nama: \"Roti\", harga: 200000, qty: 1 }], \"\")",
"[\"1x Roti - 200000\", \"1x Teh - 6000\", \"Ongkir: GRATIS\", \"Total: 206000\"]"
],
[
"ringkasanPesanan([], \"\")",
"[\"Keranjang kosong\"]"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "function ringkasanPesanan(keranjang, kodeVoucher) {\n  // tulis kodemu di sini\n}\n",
"mudah": []
}
],
"ujian": true,
"cakupan": "Bab 1–5: variabel, operator, kondisi & perulangan, fungsi, array"
},
{
"id": "uji-js-2",
"topik": "js",
"setelah": "kasus",
"judul": "Data karyawan dari CSV",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "const bersihkan = t => t.trim().toLowerCase();\nconst hitung = daftar => daftar.reduce((o, k) => ({ ...o, [k]: (o[k] || 0) + 1 }), {});\nconst laporan = mentah => Object.entries(hitung(mentah.map(bersihkan))).sort();\nconsole.log(laporan([\" Kopi\", \"teh \", \"KOPI\"]));",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"bahasa": "js",
"keluaran": "[[\"kopi\",2],[\"teh\",1]]"
},
"langkah": [
{
"id": "uji-js-2-a",
"judul": "Bagian A: Parse CSV",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "parseKaryawan",
"cerita": "HR mengirim data karyawan sebagai teks CSV. Kamu membangun pengolah datanya.",
"soal": "Buat <code>parseKaryawan(teks)</code>. Baris pertama header <code>nama,divisi,gaji,mulai</code>. Kembalikan array objek dengan <code>gaji</code> sebagai number dan <code>nama</code>/<code>divisi</code> di-trim. Baris kosong dilewati; baris yang gajinya bukan angka juga dilewati.",
"awal": "function parseKaryawan(teks) {\n  // tulis kodemu di sini\n}\n",
"solusi": "function parseKaryawan(teks) {\n  const [kepala, ...baris] = teks.trim().split(\"\\n\");\n  const kunci = kepala.split(\",\").map(k => k.trim());\n  return baris\n    .filter(b => b.trim())\n    .map(b => Object.fromEntries(b.split(\",\").map((v, i) => [kunci[i], v.trim()])))\n    .map(o => ({ ...o, gaji: Number(o.gaji) }))\n    .filter(o => Number.isFinite(o.gaji) && o.gaji > 0);\n}\n",
"jelas": "Data dari file harus dibersihkan dan divalidasi sebelum diolah; baris rusak dilewati, bukan membuat program berhenti.",
"kompleksitas": "",
"petunjuk": [
"Destructuring: const [kepala, ...baris] = teks.trim().split(\"\\n\").",
"Object.fromEntries(nilai.map((v, i) => [kunci[i], v.trim()])) membangun objek per baris.",
"Kerangka solusinya:\nfunction parseKaryawan(teks) {\n  const [kepala, ...baris] = …\n  const kunci = …\n  return …\n    .filter(b = …\n    .map(b = …\n    .map(o = …\n    .filter(o = …\n}"
],
"tes": [
[
"parseKaryawan(\"nama,divisi,gaji,mulai\\n Ani ,IT,8000000,2024-03-01\\nBudi,HR,abc,2023-01-10\\n\\nCita,IT,9500000,2022-07-15\")",
"[{\"nama\": \"Ani\", \"divisi\": \"IT\", \"gaji\": 8000000, \"mulai\": \"2024-03-01\"}, {\"nama\": \"Cita\", \"divisi\": \"IT\", \"gaji\": 9500000, \"mulai\": \"2022-07-15\"}]"
],
[
"parseKaryawan(\"nama,divisi,gaji,mulai\")",
"[]"
],
[
"parseKaryawan(\"nama,divisi,gaji,mulai\\nDodi, Sales ,6000000,2025-01-02\")",
"[{\"nama\": \"Dodi\", \"divisi\": \"Sales\", \"gaji\": 6000000, \"mulai\": \"2025-01-02\"}]"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "uji-js-2-b",
"judul": "Bagian B: Statistik per divisi",
"kategori": "studi",
"tingkat": 3,
"bahasa": "js",
"fungsi": "statistikDivisi",
"cerita": "Lanjutan bagian A. Kodemu yang sudah lulus ada di editor; tambahkan fungsi baru di bawahnya.",
"soal": "Buat <code>statistikDivisi(teks)</code> yang memakai bagian A dan mengembalikan objek <code>{ divisi: { jumlah, rataGaji, tertinggi } }</code>: rata-rata dibulatkan Math.round, <code>tertinggi</code> = nama karyawan bergaji tertinggi di divisi itu.",
"awal": "function parseKaryawan(teks) {\n  const [kepala, ...baris] = teks.trim().split(\"\\n\");\n  const kunci = kepala.split(\",\").map(k => k.trim());\n  return baris\n    .filter(b => b.trim())\n    .map(b => Object.fromEntries(b.split(\",\").map((v, i) => [kunci[i], v.trim()])))\n    .map(o => ({ ...o, gaji: Number(o.gaji) }))\n    .filter(o => Number.isFinite(o.gaji) && o.gaji > 0);\n}\n\nfunction statistikDivisi(teks) {\n  // tulis kodemu di sini\n}\n",
"solusi": "function parseKaryawan(teks) {\n  const [kepala, ...baris] = teks.trim().split(\"\\n\");\n  const kunci = kepala.split(\",\").map(k => k.trim());\n  return baris\n    .filter(b => b.trim())\n    .map(b => Object.fromEntries(b.split(\",\").map((v, i) => [kunci[i], v.trim()])))\n    .map(o => ({ ...o, gaji: Number(o.gaji) }))\n    .filter(o => Number.isFinite(o.gaji) && o.gaji > 0);\n}\n\nfunction statistikDivisi(teks) {\n  const hasil = {};\n  for (const k of parseKaryawan(teks)) {\n    const d = (hasil[k.divisi] ??= { jumlah: 0, total: 0, tertinggi: k.nama, max: -1 });\n    d.jumlah++;\n    d.total += k.gaji;\n    if (k.gaji > d.max) { d.max = k.gaji; d.tertinggi = k.nama; }\n  }\n  return Object.fromEntries(Object.entries(hasil).map(([div, d]) => [div, { jumlah: d.jumlah, rataGaji: Math.round(d.total / d.jumlah), tertinggi: d.tertinggi }]));\n}\n",
"jelas": "Dua tahap (kumpulkan, lalu bentuk hasil) membuat kode agregasi mudah dibaca.",
"kompleksitas": "",
"petunjuk": [
"Kumpulkan dulu jumlah, total, dan gaji maksimum per divisi dengan ??=.",
"Ubah ke bentuk akhir dengan Object.entries → map → Object.fromEntries.",
"Kerangka solusinya:\nfunction parseKaryawan(teks) {\n  const [kepala, ...baris] = …\n  const kunci = …\n  return …\n    .filter(b = …\n    .map(b = …\n    .map(o = …\n    .filter(o = …\n}\n\nfunction statistikDivisi(teks) {\n  const hasil = …\n  for (const k of parseKaryawan(teks)) {\n    const d = …\n    d.jumlah++;\n    d.total += …\n    if (k.gaji > d.max) { d.max = …\n  }\n  return …\n}"
],
"tes": [
[
"statistikDivisi(\"nama,divisi,gaji,mulai\\nAni,IT,8000000,2024-03-01\\nBudi,HR,7000000,2023-01-10\\nCita,IT,9500000,2022-07-15\\nDodi,IT,7000001,2025-01-02\")",
"{\"IT\": {\"jumlah\": 3, \"rataGaji\": 8166667, \"tertinggi\": \"Cita\"}, \"HR\": {\"jumlah\": 1, \"rataGaji\": 7000000, \"tertinggi\": \"Budi\"}}"
],
[
"statistikDivisi(\"nama,divisi,gaji,mulai\")",
"{}"
],
[
"statistikDivisi(\"nama,divisi,gaji,mulai\\nEka,QA,5000000,2026-01-05\")",
"{\"QA\": {\"jumlah\": 1, \"rataGaji\": 5000000, \"tertinggi\": \"Eka\"}}"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "function statistikDivisi(teks) {\n  // tulis kodemu di sini\n}\n",
"mudah": []
},
{
"id": "uji-js-2-c",
"judul": "Bagian C: Laporan masa kerja",
"kategori": "studi",
"tingkat": 3,
"bahasa": "js",
"fungsi": "laporanMasaKerja",
"cerita": "Lanjutan bagian B. Kodemu yang sudah lulus ada di editor; tambahkan fungsi baru di bawahnya.",
"soal": "Buat <code>async function laporanMasaKerja(ambilTeks, hariIni)</code>: ambil teks CSV dengan <code>await ambilTeks()</code>, parse dengan bagian A, lalu kembalikan array <code>{ nama, tahun }</code> (tahun masa kerja penuh sampai <code>hariIni</code> \"YYYY-MM-DD\") diurutkan dari terlama; seri diurutkan nama. Bila <code>ambilTeks</code> gagal, kembalikan <code>[]</code>.",
"awal": "function parseKaryawan(teks) {\n  const [kepala, ...baris] = teks.trim().split(\"\\n\");\n  const kunci = kepala.split(\",\").map(k => k.trim());\n  return baris\n    .filter(b => b.trim())\n    .map(b => Object.fromEntries(b.split(\",\").map((v, i) => [kunci[i], v.trim()])))\n    .map(o => ({ ...o, gaji: Number(o.gaji) }))\n    .filter(o => Number.isFinite(o.gaji) && o.gaji > 0);\n}\n\nfunction statistikDivisi(teks) {\n  const hasil = {};\n  for (const k of parseKaryawan(teks)) {\n    const d = (hasil[k.divisi] ??= { jumlah: 0, total: 0, tertinggi: k.nama, max: -1 });\n    d.jumlah++;\n    d.total += k.gaji;\n    if (k.gaji > d.max) { d.max = k.gaji; d.tertinggi = k.nama; }\n  }\n  return Object.fromEntries(Object.entries(hasil).map(([div, d]) => [div, { jumlah: d.jumlah, rataGaji: Math.round(d.total / d.jumlah), tertinggi: d.tertinggi }]));\n}\n\nasync function laporanMasaKerja(ambilTeks, hariIni) {\n  // tulis kodemu di sini\n}\n",
"solusi": "function parseKaryawan(teks) {\n  const [kepala, ...baris] = teks.trim().split(\"\\n\");\n  const kunci = kepala.split(\",\").map(k => k.trim());\n  return baris\n    .filter(b => b.trim())\n    .map(b => Object.fromEntries(b.split(\",\").map((v, i) => [kunci[i], v.trim()])))\n    .map(o => ({ ...o, gaji: Number(o.gaji) }))\n    .filter(o => Number.isFinite(o.gaji) && o.gaji > 0);\n}\n\nfunction statistikDivisi(teks) {\n  const hasil = {};\n  for (const k of parseKaryawan(teks)) {\n    const d = (hasil[k.divisi] ??= { jumlah: 0, total: 0, tertinggi: k.nama, max: -1 });\n    d.jumlah++;\n    d.total += k.gaji;\n    if (k.gaji > d.max) { d.max = k.gaji; d.tertinggi = k.nama; }\n  }\n  return Object.fromEntries(Object.entries(hasil).map(([div, d]) => [div, { jumlah: d.jumlah, rataGaji: Math.round(d.total / d.jumlah), tertinggi: d.tertinggi }]));\n}\n\nasync function laporanMasaKerja(ambilTeks, hariIni) {\n  let teks;\n  try { teks = await ambilTeks(); } catch { return []; }\n  const [th, bl, hr] = hariIni.split(\"-\").map(Number);\n  return parseKaryawan(teks)\n    .map(k => {\n      const [y, m, d] = k.mulai.split(\"-\").map(Number);\n      const tahun = th - y - ((bl < m || (bl === m && hr < d)) ? 1 : 0);\n      return { nama: k.nama, tahun };\n    })\n    .sort((a, b) => b.tahun - a.tahun || a.nama.localeCompare(b.nama));\n}\n",
"jelas": "Cita yang mulai 25 November belum genap 4 tahun pada 24 November: batas tanggal seperti ini selalu diuji di soal HR.",
"kompleksitas": "",
"petunjuk": [
"Bungkus await ambilTeks() dengan try/catch.",
"Tahun penuh: selisih tahun, dikurangi 1 bila (bulan, hari) ini belum mencapai (bulan, hari) mulai.",
"Kerangka solusinya:\nfunction parseKaryawan(teks) {\n  const [kepala, ...baris] = …\n  const kunci = …\n  return …\n    .filter(b = …\n    .map(b = …\n    .map(o = …\n    .filter(o = …\n}\n\nfunction statistikDivisi(teks) {\n  const hasil = …\n  for (const k of parseKaryawan(teks)) {\n    const d = …\n    d.jumlah++;\n    d.total += …\n    if (k.gaji > d.max) { d.max = …\n  }\n  return …\n}\n\nasync function laporanMasaKerja(ambilTeks, hariIni) {\n  let teks;\n  try { teks = …\n  const [th, bl, hr] = …\n  return …\n    .map(k = …\n      const [y, m, d] = …\n      const tahun = …\n      return …\n    })\n    .sort((a, b) = …\n}"
],
"tes": [
[
"await laporanMasaKerja(async () => \"nama,divisi,gaji,mulai\\nAni,IT,8000000,2024-03-01\\nCita,IT,9500000,2022-11-25\\nBudi,HR,7000000,2022-11-24\", \"2026-11-24\")",
"[{\"nama\": \"Budi\", \"tahun\": 4}, {\"nama\": \"Cita\", \"tahun\": 3}, {\"nama\": \"Ani\", \"tahun\": 2}]"
],
[
"await laporanMasaKerja(async () => { throw new Error(\"file tidak ada\"); }, \"2026-11-24\")",
"[]"
],
[
"await laporanMasaKerja(async () => \"nama,divisi,gaji,mulai\", \"2026-01-01\")",
"[]"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "async function laporanMasaKerja(ambilTeks, hariIni) {\n  // tulis kodemu di sini\n}\n",
"mudah": []
}
],
"ujian": true,
"cakupan": "Bab 6–10: string & objek, logika data tanpa DOM, async, JS modern, debugging"
},
{
"id": "uji-js-3",
"topik": "js",
"setelah": "koleksi",
"judul": "Aplikasi catatan",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Kode bagian sebelumnya otomatis ikut di editor, jadi kamu tinggal menambahkan fungsi baru di bawahnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "const bersihkan = t => t.trim().toLowerCase();\nconst hitung = daftar => daftar.reduce((o, k) => ({ ...o, [k]: (o[k] || 0) + 1 }), {});\nconst laporan = mentah => Object.entries(hitung(mentah.map(bersihkan))).sort();\nconsole.log(laporan([\" Kopi\", \"teh \", \"KOPI\"]));",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"bahasa": "js",
"keluaran": "[[\"kopi\",2],[\"teh\",1]]"
},
"langkah": [
{
"id": "uji-js-3-a",
"judul": "Bagian A: Class BukuCatatan",
"kategori": "studi",
"tingkat": 2,
"bahasa": "js",
"fungsi": "BukuCatatan",
"cerita": "Kamu membuat inti aplikasi catatan: menyimpan catatan, mencari dengan tag, dan mengekspor.",
"soal": "Buat class <code>BukuCatatan</code> dengan field privat <code>#data</code> (Map id → catatan) dan penghitung id mulai 1. Method <code>tambah(judul, isi)</code> mengembalikan id baru; judul kosong setelah trim melempar <code>Error(\"Judul wajib diisi\")</code>. Tag diambil otomatis dari isi: kata yang diawali <code>#</code> (huruf kecil, unik, urut abjad). Method <code>ambil(id)</code> mengembalikan salinan <code>{ id, judul, isi, tag }</code> atau <code>null</code>, dan getter <code>jumlah</code>.",
"awal": "class BukuCatatan {\n  // tulis kodemu di sini\n  // tambahkan juga method semua() yang mengembalikan salinan semua catatan (dipakai bagian B)\n}\n",
"solusi": "class BukuCatatan {\n  #data = new Map();\n  #idBerikut = 1;\n  tambah(judul, isi) {\n    if (!judul.trim()) throw new Error(\"Judul wajib diisi\");\n    const tag = [...new Set((isi.match(/#\\w+/g) ?? []).map(t => t.slice(1).toLowerCase()))].sort();\n    const id = this.#idBerikut++;\n    this.#data.set(id, { id, judul: judul.trim(), isi, tag });\n    return id;\n  }\n  ambil(id) {\n    const c = this.#data.get(id);\n    return c ? { ...c, tag: [...c.tag] } : null;\n  }\n  get jumlah() { return this.#data.size; }\n  semua() { return [...this.#data.values()].map(c => ({ ...c, tag: [...c.tag] })); }\n}\n",
"jelas": "Tes terakhir memastikan enkapsulasi: mengubah hasil ambil() tidak mengubah data asli.",
"kompleksitas": "",
"petunjuk": [
"isi.match(/#\\w+/g) memberi semua tag (atau null). Buang tanda # dengan slice(1), unikkan dengan Set, lalu sort.",
"ambil() mengembalikan SALINAN (spread + salin array tag) agar data di dalam tidak bisa dirusak dari luar.",
"Kerangka solusinya:\nclass BukuCatatan {\n  #data = …\n  #idBerikut = …\n  tambah(judul, isi) {\n    if (!judul.trim()) throw new Error(\"Judul wajib diisi\");\n    const tag = …\n    const id = …\n    this.#data.set(id, { id, judul: judul.trim(), isi, tag });\n    return …\n  }\n  ambil(id) {\n    const c = …\n    return …\n  }\n  get jumlah() { return …\n  semua() { return …\n}"
],
"tes": [
[
"const b = new BukuCatatan();\nconst id = b.tambah(\" Rapat \", \"Bahas #Odoo dan #rpa lalu #odoo lagi\");\nconst hasil = [id, b.ambil(id), b.jumlah];",
"[1, {\"id\": 1, \"judul\": \"Rapat\", \"isi\": \"Bahas #Odoo dan #rpa lalu #odoo lagi\", \"tag\": [\"odoo\", \"rpa\"]}, 1]"
],
[
"const b = new BukuCatatan();\nb.tambah(\"a\", \"\");\nconst hasil = [b.tambah(\"b\", \"x\"), b.ambil(99)];",
"[2, null]"
],
[
"const b = new BukuCatatan();\nlet hasil;\ntry { b.tambah(\"   \", \"isi\"); } catch (e) { hasil = [e.message, b.jumlah]; }",
"[\"Judul wajib diisi\", 0]"
],
[
"const b = new BukuCatatan();\nconst id = b.tambah(\"a\", \"#x\");\nb.ambil(id).tag.push(\"rusak\");\nconst hasil = b.ambil(id).tag;",
"[\"x\"]"
]
],
"contoh": 2,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "",
"mudah": []
},
{
"id": "uji-js-3-b",
"judul": "Bagian B: Cari catatan",
"kategori": "studi",
"tingkat": 3,
"bahasa": "js",
"fungsi": "cari",
"cerita": "Lanjutan bagian A. Kodemu yang sudah lulus ada di editor; tambahkan fungsi baru di bawahnya.",
"soal": "Buat fungsi <code>cari(buku, kueri)</code>. Kueri berisi kata biasa dan/atau tag (<code>#odoo</code>). Catatan cocok bila mengandung <b>semua</b> tag di kueri dan <b>semua</b> kata biasa ada di judul atau isi (tanpa peduli huruf besar). Kembalikan array id terurut. Kueri kosong → semua id.",
"awal": "class BukuCatatan {\n  #data = new Map();\n  #idBerikut = 1;\n  tambah(judul, isi) {\n    if (!judul.trim()) throw new Error(\"Judul wajib diisi\");\n    const tag = [...new Set((isi.match(/#\\w+/g) ?? []).map(t => t.slice(1).toLowerCase()))].sort();\n    const id = this.#idBerikut++;\n    this.#data.set(id, { id, judul: judul.trim(), isi, tag });\n    return id;\n  }\n  ambil(id) {\n    const c = this.#data.get(id);\n    return c ? { ...c, tag: [...c.tag] } : null;\n  }\n  get jumlah() { return this.#data.size; }\n  semua() { return [...this.#data.values()].map(c => ({ ...c, tag: [...c.tag] })); }\n}\n\nfunction cari(buku, kueri) {\n  // tulis kodemu di sini\n}\n",
"solusi": "class BukuCatatan {\n  #data = new Map();\n  #idBerikut = 1;\n  tambah(judul, isi) {\n    if (!judul.trim()) throw new Error(\"Judul wajib diisi\");\n    const tag = [...new Set((isi.match(/#\\w+/g) ?? []).map(t => t.slice(1).toLowerCase()))].sort();\n    const id = this.#idBerikut++;\n    this.#data.set(id, { id, judul: judul.trim(), isi, tag });\n    return id;\n  }\n  ambil(id) {\n    const c = this.#data.get(id);\n    return c ? { ...c, tag: [...c.tag] } : null;\n  }\n  get jumlah() { return this.#data.size; }\n  semua() { return [...this.#data.values()].map(c => ({ ...c, tag: [...c.tag] })); }\n}\n\nfunction cari(buku, kueri) {\n  const bagian = kueri.toLowerCase().split(/\\s+/).filter(Boolean);\n  const tag = bagian.filter(b => b.startsWith(\"#\")).map(b => b.slice(1));\n  const kata = bagian.filter(b => !b.startsWith(\"#\"));\n  return buku.semua()\n    .filter(c => tag.every(t => c.tag.includes(t)))\n    .filter(c => kata.every(k => (c.judul + \" \" + c.isi).toLowerCase().includes(k)))\n    .map(c => c.id)\n    .sort((a, b) => a - b);\n}\n",
"jelas": "Pencarian dengan beberapa syarat AND adalah pola filter di hampir semua aplikasi, termasuk search view Odoo.",
"kompleksitas": "",
"petunjuk": [
"Pisahkan kueri menjadi tag (diawali #) dan kata biasa.",
"every untuk syarat 'semua cocok'; includes untuk mengecek isi.",
"Kerangka solusinya:\nclass BukuCatatan {\n  #data = …\n  #idBerikut = …\n  tambah(judul, isi) {\n    if (!judul.trim()) throw new Error(\"Judul wajib diisi\");\n    const tag = …\n    const id = …\n    this.#data.set(id, { id, judul: judul.trim(), isi, tag });\n    return …\n  }\n  ambil(id) {\n    const c = …\n    return …\n  }\n  get jumlah() { return …\n  semua() { return …\n}\n\nfunction cari(buku, kueri) {\n  const bagian = …\n  const tag = …\n  const kata = …\n  return …\n    .filter(c = …\n    .filter(c = …\n    .map(c = …\n    .sort((a, b) = …\n}"
],
"tes": [
[
"const b = new BukuCatatan();\nb.tambah(\"Rapat Odoo\", \"modul #odoo #sales\");\nb.tambah(\"Belanja\", \"kopi gula\");\nb.tambah(\"Bug\", \"error di #odoo purchase\");\nconst hasil = [cari(b, \"#odoo\"), cari(b, \"#odoo purchase\"), cari(b, \"KOPI\"), cari(b, \"\"), cari(b, \"#rpa\")];",
"[[1, 3], [3], [2], [1, 2, 3], []]"
],
[
"const hasil = cari(new BukuCatatan(), \"apa saja\");",
"[]"
],
[
"const b = new BukuCatatan();\nb.tambah(\"Ide\", \"Otomasi faktur #RPA\");\nconst hasil = [cari(b, \"#rpa\"), cari(b, \"faktur #rpa\"), cari(b, \"faktur #odoo\")];",
"[[1], [1], []]"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "function cari(buku, kueri) {\n  // tulis kodemu di sini\n}\n",
"mudah": []
},
{
"id": "uji-js-3-c",
"judul": "Bagian C: Statistik tag",
"kategori": "studi",
"tingkat": 3,
"bahasa": "js",
"fungsi": "statistikTag",
"cerita": "Lanjutan bagian B. Kodemu yang sudah lulus ada di editor; tambahkan fungsi baru di bawahnya.",
"soal": "Buat <code>statistikTag(buku)</code> yang mengembalikan array <code>[tag, jumlahCatatan]</code> memakai <code>Map</code>, diurutkan dari terbanyak; seri diurutkan abjad.",
"awal": "class BukuCatatan {\n  #data = new Map();\n  #idBerikut = 1;\n  tambah(judul, isi) {\n    if (!judul.trim()) throw new Error(\"Judul wajib diisi\");\n    const tag = [...new Set((isi.match(/#\\w+/g) ?? []).map(t => t.slice(1).toLowerCase()))].sort();\n    const id = this.#idBerikut++;\n    this.#data.set(id, { id, judul: judul.trim(), isi, tag });\n    return id;\n  }\n  ambil(id) {\n    const c = this.#data.get(id);\n    return c ? { ...c, tag: [...c.tag] } : null;\n  }\n  get jumlah() { return this.#data.size; }\n  semua() { return [...this.#data.values()].map(c => ({ ...c, tag: [...c.tag] })); }\n}\n\nfunction cari(buku, kueri) {\n  const bagian = kueri.toLowerCase().split(/\\s+/).filter(Boolean);\n  const tag = bagian.filter(b => b.startsWith(\"#\")).map(b => b.slice(1));\n  const kata = bagian.filter(b => !b.startsWith(\"#\"));\n  return buku.semua()\n    .filter(c => tag.every(t => c.tag.includes(t)))\n    .filter(c => kata.every(k => (c.judul + \" \" + c.isi).toLowerCase().includes(k)))\n    .map(c => c.id)\n    .sort((a, b) => a - b);\n}\n\nfunction statistikTag(buku) {\n  // tulis kodemu di sini\n}\n",
"solusi": "class BukuCatatan {\n  #data = new Map();\n  #idBerikut = 1;\n  tambah(judul, isi) {\n    if (!judul.trim()) throw new Error(\"Judul wajib diisi\");\n    const tag = [...new Set((isi.match(/#\\w+/g) ?? []).map(t => t.slice(1).toLowerCase()))].sort();\n    const id = this.#idBerikut++;\n    this.#data.set(id, { id, judul: judul.trim(), isi, tag });\n    return id;\n  }\n  ambil(id) {\n    const c = this.#data.get(id);\n    return c ? { ...c, tag: [...c.tag] } : null;\n  }\n  get jumlah() { return this.#data.size; }\n  semua() { return [...this.#data.values()].map(c => ({ ...c, tag: [...c.tag] })); }\n}\n\nfunction cari(buku, kueri) {\n  const bagian = kueri.toLowerCase().split(/\\s+/).filter(Boolean);\n  const tag = bagian.filter(b => b.startsWith(\"#\")).map(b => b.slice(1));\n  const kata = bagian.filter(b => !b.startsWith(\"#\"));\n  return buku.semua()\n    .filter(c => tag.every(t => c.tag.includes(t)))\n    .filter(c => kata.every(k => (c.judul + \" \" + c.isi).toLowerCase().includes(k)))\n    .map(c => c.id)\n    .sort((a, b) => a - b);\n}\n\nfunction statistikTag(buku) {\n  const hitung = new Map();\n  for (const c of buku.semua()) for (const t of c.tag) hitung.set(t, (hitung.get(t) ?? 0) + 1);\n  return [...hitung].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));\n}\n",
"jelas": "Tag di catatan sudah unik (bagian A), jadi #odoo yang ditulis dua kali di satu catatan tetap dihitung sekali.",
"kompleksitas": "",
"petunjuk": [
"Untuk setiap catatan dan setiap tagnya: hitung.set(t, (hitung.get(t) ?? 0) + 1).",
"[...map] lalu sort dengan pemecah seri localeCompare.",
"Kerangka solusinya:\nclass BukuCatatan {\n  #data = …\n  #idBerikut = …\n  tambah(judul, isi) {\n    if (!judul.trim()) throw new Error(\"Judul wajib diisi\");\n    const tag = …\n    const id = …\n    this.#data.set(id, { id, judul: judul.trim(), isi, tag });\n    return …\n  }\n  ambil(id) {\n    const c = …\n    return …\n  }\n  get jumlah() { return …\n  semua() { return …\n}\n\nfunction cari(buku, kueri) {\n  const bagian = …\n  const tag = …\n  const kata = …\n  return …\n    .filter(c = …\n    .filter(c = …\n    .map(c = …\n    .sort((a, b) = …\n}\n\nfunction statistikTag(buku) {\n  const hitung = …\n  for (const c of buku.semua()) for (const t of c.tag) hitung.set(t, (hitung.get(t) ?? 0) + 1);\n  return …\n}"
],
"tes": [
[
"const b = new BukuCatatan();\nb.tambah(\"1\", \"#odoo #sales\");\nb.tambah(\"2\", \"#rpa\");\nb.tambah(\"3\", \"#odoo #rpa #odoo\");\nconst hasil = statistikTag(b);",
"[[\"odoo\", 2], [\"rpa\", 2], [\"sales\", 1]]"
],
[
"const hasil = statistikTag(new BukuCatatan());",
"[]"
],
[
"const b = new BukuCatatan();\nb.tambah(\"x\", \"#z #a\");\nb.tambah(\"y\", \"#a\");\nconst hasil = statistikTag(b);",
"[[\"a\", 2], [\"z\", 1]]"
]
],
"contoh": 1,
"pre": "",
"urut": false,
"tabel": [],
"awal_baru": "function statistikTag(buku) {\n  // tulis kodemu di sini\n}\n",
"mudah": []
}
],
"ujian": true,
"cakupan": "Bab 11–15: closure, validasi & debounce, class, error, Map/Set/Date/regex"
},
{
"id": "sql-select",
"topik": "sql",
"setelah": "select",
"judul": "Menyaring dan mengurutkan transaksi",
"contoh": {
"judul": "Contoh: WHERE dengan AND, ORDER BY, LIMIT",
"penjelasan": "<p>Pilih kolom yang perlu saja, saring baris dengan <code>WHERE</code> (gabungkan syarat dengan <code>AND</code>/<code>OR</code>, teks pakai kutip tunggal), urutkan dengan <code>ORDER BY ... DESC</code>, lalu batasi dengan <code>LIMIT</code>.</p>",
"kode": "SELECT id, kategori, nilai\nFROM transaksi\nWHERE status = 'selesai' AND kanal = 'web'\nORDER BY nilai DESC\nLIMIT 3;",
"kunci": "Urutan klausa: SELECT → FROM → WHERE → ORDER BY → LIMIT.",
"bahasa": "sql",
"keluaran": ""
},
"langkah": [
{
"id": "sql-sel-1",
"judul": "Transaksi Fashion yang selesai",
"kategori": "studi",
"tingkat": 1,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Tampilkan <b>id</b>, <b>tanggal</b>, dan <b>nilai</b> transaksi berkategori <code>Fashion</code> yang statusnya <code>selesai</code>, diurutkan dari tanggal <b>terbaru</b>.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT id, tanggal, nilai\nFROM transaksi\nWHERE kategori = 'Fashion' AND status = 'selesai'\nORDER BY tanggal DESC;",
"jelas": "Format tanggal ISO membuat ORDER BY pada teks tetap benar secara kronologis.",
"kompleksitas": "",
"petunjuk": [
"Dua syarat di WHERE digabung AND; teks memakai kutip tunggal.",
"Tanggal berformat YYYY-MM-DD bisa diurutkan seperti teks: DESC = terbaru dulu.",
"Kerangka solusinya:\nSELECT …, …, …\nFROM …\nWHERE … = '…' AND … = '…'\nORDER BY … DESC;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
},
{
"id": "sql-sel-2",
"judul": "Lima transaksi terbesar via app",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Tampilkan <b>id</b>, <b>kategori</b>, dan <b>nilai</b> dari 5 transaksi bernilai <b>terbesar</b> yang dilakukan lewat kanal <code>app</code>, tidak berstatus <code>batal</code>, dan tidak memakai voucher (<code>voucher = 0</code>).",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT id, kategori, nilai\nFROM transaksi\nWHERE kanal = 'app' AND status <> 'batal' AND voucher = 0\nORDER BY nilai DESC\nLIMIT 5;",
"jelas": "LIMIT tanpa ORDER BY memberi baris acak; selalu urutkan dulu sebelum mengambil 'teratas'.",
"kompleksitas": "",
"petunjuk": [
"Tiga syarat: kanal, status (pakai <> atau !=), dan voucher.",
"ORDER BY nilai DESC lalu LIMIT 5.",
"Kerangka solusinya:\nSELECT …, …, …\nFROM …\nWHERE … = '…' AND … <> '…' AND … = 0\nORDER BY … DESC\nLIMIT 5;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "sql-groupby",
"topik": "sql",
"setelah": "groupby",
"judul": "Meringkas dengan GROUP BY",
"contoh": {
"judul": "Contoh: COUNT, SUM, AVG per kelompok",
"penjelasan": "<p><code>GROUP BY</code> mengelompokkan baris yang nilainya sama, lalu fungsi agregat (<code>COUNT</code>, <code>SUM</code>, <code>AVG</code>) dihitung per kelompok. Syarat untuk hasil agregat memakai <code>HAVING</code>, bukan WHERE.</p>",
"kode": "SELECT kanal, COUNT(*) AS jumlah, SUM(nilai) AS omzet\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY kanal\nORDER BY omzet DESC;",
"kunci": "WHERE menyaring baris SEBELUM dikelompokkan; HAVING menyaring kelompok SESUDAHNYA.",
"bahasa": "sql",
"keluaran": ""
},
"langkah": [
{
"id": "sql-gb-1",
"judul": "Omzet per kategori",
"kategori": "studi",
"tingkat": 1,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Untuk transaksi berstatus <code>selesai</code>, tampilkan <b>kategori</b>, <b>jumlah transaksi</b>, dan <b>total nilai</b> per kategori, diurutkan dari total terbesar.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT kategori, COUNT(*) AS jumlah, SUM(nilai) AS total\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY kategori\nORDER BY total DESC;",
"jelas": "Ini query 'omzet per kategori' yang menjadi dasar hampir semua dashboard penjualan.",
"kompleksitas": "",
"petunjuk": [
"Saring status di WHERE, lalu GROUP BY kategori.",
"Beri alias pada SUM(nilai) agar bisa dipakai di ORDER BY.",
"Kerangka solusinya:\nSELECT …, COUNT(*) AS …, SUM(…) AS …\nFROM …\nWHERE … = '…'\nGROUP BY …\nORDER BY … DESC;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
},
{
"id": "sql-gb-2",
"judul": "Kota dengan banyak pengguna",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Dari tabel <code>pengguna</code>, tampilkan <b>kota</b> dan <b>jumlah pengguna</b> hanya untuk kota yang punya <b>minimal 2</b> pengguna dari sumber selain <code>iklan</code>, urutkan jumlah terbanyak lalu nama kota.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT kota, COUNT(*) AS jumlah\nFROM pengguna\nWHERE sumber <> 'iklan'\nGROUP BY kota\nHAVING COUNT(*) >= 2\nORDER BY jumlah DESC, kota;",
"jelas": "Menaruh syarat agregat di WHERE akan error; menaruh syarat baris di HAVING bisa jalan tetapi lebih lambat dan membingungkan.",
"kompleksitas": "",
"petunjuk": [
"Sumber disaring di WHERE (per baris), jumlah disaring di HAVING (per kelompok).",
"ORDER BY dua kolom: jumlah DESC, kota.",
"Kerangka solusinya:\nSELECT …, COUNT(*) AS …\nFROM …\nWHERE … <> '…'\nGROUP BY …\nHAVING COUNT(*) >= 2\nORDER BY … DESC, …;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"pengguna"
],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "sql-join",
"topik": "sql",
"setelah": "join",
"judul": "Menggabungkan tabel dengan JOIN",
"contoh": {
"judul": "Contoh: INNER JOIN dan LEFT JOIN",
"penjelasan": "<p><code>JOIN ... ON</code> menyambungkan baris dua tabel lewat kolom kunci. <code>INNER JOIN</code> hanya baris yang punya pasangan; <code>LEFT JOIN</code> mempertahankan semua baris tabel kiri (pasangan kosong menjadi NULL).</p>",
"kode": "SELECT p.nama, COUNT(o.id) AS jumlah_pesanan\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nGROUP BY p.id, p.nama\nORDER BY jumlah_pesanan DESC;",
"kunci": "COUNT(o.id) (bukan COUNT(*)) agar pelanggan tanpa pesanan dihitung 0 pada LEFT JOIN.",
"bahasa": "sql",
"keluaran": ""
},
"langkah": [
{
"id": "sql-join-1",
"judul": "Detail pesanan",
"kategori": "studi",
"tingkat": 1,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Tampilkan <b>id pesanan</b>, <b>nama pelanggan</b>, <b>nama produk</b>, dan <b>subtotal</b> (qty × harga) untuk setiap pesanan, diurutkan berdasarkan id pesanan.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT o.id, p.nama, pr.nama, o.qty * pr.harga AS subtotal\nFROM pesanan o\nJOIN pelanggan p ON p.id = o.pelanggan_id\nJOIN produk pr ON pr.id = o.produk_id\nORDER BY o.id;",
"jelas": "Alias tabel wajib ketika nama kolom sama di beberapa tabel, misalnya id dan nama.",
"kompleksitas": "",
"petunjuk": [
"JOIN dua kali: ke pelanggan dan ke produk.",
"Kedua tabel punya kolom nama; beri alias tabel (p.nama, pr.nama).",
"Kerangka solusinya:\nSELECT ….…, ….…, ….…, ….… * ….… AS …\nFROM … …\nJOIN … … ON ….… = ….…\nJOIN … … ON ….… = ….…\nORDER BY ….…;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"pesanan",
"pelanggan",
"produk"
],
"awal_baru": "",
"mudah": []
},
{
"id": "sql-join-2",
"judul": "Penjualan per kategori, termasuk yang nol",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Tampilkan setiap <b>kategori produk</b> dan <b>total qty terjual</b>; kategori tanpa penjualan tetap tampil dengan 0. Urutkan dari qty terbanyak.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT pr.kategori, COALESCE(SUM(o.qty), 0) AS qty\nFROM produk pr\nLEFT JOIN pesanan o ON o.produk_id = pr.id\nGROUP BY pr.kategori\nORDER BY qty DESC;",
"jelas": "Pada data ini semua kategori punya penjualan, tetapi pola LEFT JOIN + COALESCE melindungi laporan ketika ada produk baru yang belum laku.",
"kompleksitas": "",
"petunjuk": [
"Mulai FROM produk lalu LEFT JOIN pesanan agar semua produk ikut.",
"SUM dari baris NULL menghasilkan NULL; bungkus dengan COALESCE(..., 0).",
"Kerangka solusinya:\nSELECT ….…, COALESCE(SUM(….…), 0) AS …\nFROM … …\nLEFT JOIN … … ON ….… = ….…\nGROUP BY ….…\nORDER BY … DESC;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"produk",
"pesanan"
],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "sql-subquery",
"topik": "sql",
"setelah": "subquery",
"judul": "Subquery: query di dalam query",
"contoh": {
"judul": "Contoh: membandingkan dengan rata-rata",
"penjelasan": "<p>Subquery dihitung lebih dulu, lalu hasilnya dipakai query luar. Bisa mengembalikan satu nilai (dibandingkan dengan <code>&gt;</code>) atau daftar (dipakai dengan <code>IN</code>).</p>",
"kode": "SELECT id, nilai\nFROM transaksi\nWHERE nilai > (SELECT AVG(nilai) FROM transaksi)\nORDER BY nilai DESC;",
"kunci": "Satu nilai → = < >. Daftar → IN / NOT IN.",
"bahasa": "sql",
"keluaran": ""
},
"langkah": [
{
"id": "sql-sub-1",
"judul": "Di atas rata-rata kategorinya sendiri",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Tampilkan <b>id</b>, <b>kategori</b>, dan <b>nilai</b> transaksi yang nilainya <b>lebih besar dari rata-rata kategori yang sama</b>. Urutkan berdasarkan kategori lalu nilai terbesar.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT t.id, t.kategori, t.nilai\nFROM transaksi t\nWHERE t.nilai > (SELECT AVG(x.nilai) FROM transaksi x WHERE x.kategori = t.kategori)\nORDER BY t.kategori, t.nilai DESC;",
"jelas": "Subquery berkorelasi dijalankan per baris; untuk data besar sering diganti window function (bab 8).",
"kompleksitas": "",
"petunjuk": [
"Ini subquery berkorelasi: subquery merujuk baris luar (t.kategori).",
"Beri alias berbeda untuk tabel luar (t) dan dalam (x).",
"Kerangka solusinya:\nSELECT ….…, ….…, ….…\nFROM … …\nWHERE ….… > (SELECT AVG(….…) FROM … … WHERE ….… = ….…)\nORDER BY ….…, ….… DESC;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
},
{
"id": "sql-sub-2",
"judul": "Pengguna yang belum pernah bertransaksi selesai",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Tampilkan <b>nama</b> dan <b>kota</b> pengguna yang <b>tidak punya</b> satu pun transaksi berstatus <code>selesai</code>, urut nama.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT nama, kota\nFROM pengguna\nWHERE id NOT IN (SELECT pengguna_id FROM transaksi WHERE status = 'selesai')\nORDER BY nama;",
"jelas": "Pengguna seperti ini adalah target kampanye aktivasi. Hati-hati: NOT IN dengan subquery yang berisi NULL menghasilkan kosong; di sini pengguna_id tidak pernah NULL.",
"kompleksitas": "",
"petunjuk": [
"Subquery mengembalikan daftar pengguna_id yang punya transaksi selesai.",
"Query luar memakai NOT IN.",
"Kerangka solusinya:\nSELECT …, …\nFROM …\nWHERE … NOT IN (SELECT … FROM … WHERE … = '…')\nORDER BY …;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"pengguna",
"transaksi"
],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "sql-case",
"topik": "sql",
"setelah": "case",
"judul": "CASE WHEN untuk segmentasi",
"contoh": {
"judul": "Contoh: label dan hitung bersyarat",
"penjelasan": "<p><code>CASE WHEN ... THEN ... ELSE ... END</code> adalah IF di dalam SQL. Dipakai untuk memberi label, atau di dalam <code>SUM</code> untuk menghitung bersyarat.</p>",
"kode": "SELECT id, nilai,\n  CASE WHEN nilai >= 1000000 THEN 'besar'\n       WHEN nilai >= 300000 THEN 'sedang'\n       ELSE 'kecil' END AS ukuran\nFROM transaksi\nORDER BY nilai DESC\nLIMIT 5;",
"kunci": "SUM(CASE WHEN syarat THEN 1 ELSE 0 END) = hitung baris yang memenuhi syarat.",
"bahasa": "sql",
"keluaran": ""
},
"langkah": [
{
"id": "sql-case-1",
"judul": "Label ukuran transaksi",
"kategori": "studi",
"tingkat": 1,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Untuk setiap label ukuran (<code>besar</code> ≥ 1.000.000; <code>sedang</code> ≥ 300.000; selain itu <code>kecil</code>), tampilkan <b>label</b> dan <b>jumlah transaksi</b>. Urutkan berdasarkan label.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT CASE WHEN nilai >= 1000000 THEN 'besar'\n            WHEN nilai >= 300000 THEN 'sedang'\n            ELSE 'kecil' END AS ukuran,\n       COUNT(*) AS jumlah\nFROM transaksi\nGROUP BY ukuran\nORDER BY ukuran;",
"jelas": "Mengelompokkan berdasarkan hasil CASE adalah cara cepat membuat segmen pelanggan atau ukuran transaksi.",
"kompleksitas": "",
"petunjuk": [
"Urutan WHEN penting: cek ambang terbesar dulu.",
"GROUP BY alias kolom CASE (SQLite mengizinkan GROUP BY ukuran).",
"Kerangka solusinya:\nSELECT CASE WHEN … >= 1000000 THEN '…'\n            WHEN … >= 300000 THEN '…'\n            ELSE '…' END AS …,\n       COUNT(*) AS …\nFROM …\nGROUP BY …\nORDER BY …;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
},
{
"id": "sql-case-2",
"judul": "Rasio retur per kategori",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Per <b>kategori</b>, tampilkan <b>jumlah transaksi</b>, <b>jumlah retur</b>, dan <b>persen retur</b> (dibulatkan 1 desimal). Urutkan dari persen retur tertinggi, lalu kategori.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT kategori,\n       COUNT(*) AS jumlah,\n       SUM(CASE WHEN status = 'retur' THEN 1 ELSE 0 END) AS retur,\n       ROUND(100.0 * SUM(CASE WHEN status = 'retur' THEN 1 ELSE 0 END) / COUNT(*), 1) AS persen_retur\nFROM transaksi\nGROUP BY kategori\nORDER BY persen_retur DESC, kategori;",
"jelas": "Di SQLite, 3 / 8 = 0 (bilangan bulat). 100.0 * ... memaksa hasil desimal: jebakan klasik soal rasio.",
"kompleksitas": "",
"petunjuk": [
"Hitung retur dengan SUM(CASE WHEN status = 'retur' THEN 1 ELSE 0 END).",
"Kalikan 100.0 (desimal) sebelum membagi, supaya bukan pembagian bilangan bulat.",
"Kerangka solusinya:\nSELECT …,\n       COUNT(*) AS …,\n       SUM(CASE WHEN … = '…' THEN 1 ELSE 0 END) AS …,\n       ROUND(100.0 * SUM(CASE WHEN … = '…' THEN 1 ELSE 0 END) / COUNT(*), 1) AS …\nFROM …\nGROUP BY …\nORDER BY … DESC, …;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "sql-null",
"topik": "sql",
"setelah": "nullfungsi",
"judul": "NULL dan fungsi bawaan",
"contoh": {
"judul": "Contoh: fungsi teks, tanggal, dan COALESCE",
"penjelasan": "<p><code>substr(teks, mulai, panjang)</code> memotong teks, <code>strftime('%Y-%m', tanggal)</code> mengambil bulan, <code>UPPER</code>/<code>LOWER</code> mengubah huruf, <code>COALESCE(a, b)</code> memberi nilai pengganti NULL. Bandingkan NULL dengan <code>IS NULL</code>, bukan <code>= NULL</code>.</p>",
"kode": "SELECT strftime('%Y-%m', tanggal) AS bulan, COUNT(*) AS jumlah\nFROM transaksi\nGROUP BY bulan\nORDER BY bulan;",
"kunci": "strftime('%Y-%m', kolom_tanggal) untuk ringkasan bulanan. NULL tidak pernah = apa pun.",
"bahasa": "sql",
"keluaran": ""
},
"langkah": [
{
"id": "sql-null-1",
"judul": "Omzet bulanan",
"kategori": "studi",
"tingkat": 1,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Tampilkan <b>bulan</b> (format <code>YYYY-MM</code>) dan <b>total nilai</b> transaksi berstatus <code>selesai</code> per bulan, urut bulan.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT strftime('%Y-%m', tanggal) AS bulan, SUM(nilai) AS total\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY bulan\nORDER BY bulan;",
"jelas": "Ringkasan bulanan adalah grafik pertama di hampir semua dashboard.",
"kompleksitas": "",
"petunjuk": [
"strftime('%Y-%m', tanggal) atau substr(tanggal, 1, 7).",
"GROUP BY bulan lalu ORDER BY bulan.",
"Kerangka solusinya:\nSELECT …('…', …) AS …, SUM(…) AS …\nFROM …\nWHERE … = '…'\nGROUP BY …\nORDER BY …;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
},
{
"id": "sql-null-2",
"judul": "Login gagal per jam",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Dari <code>log_login</code>, tampilkan <b>tanggal</b>, <b>jam</b> (2 digit, dari kolom waktu), dan <b>jumlah login gagal</b> untuk jam yang punya <b>minimal 3</b> login gagal. Urutkan dari jumlah terbanyak, lalu tanggal dan jam.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT date(waktu) AS tanggal, strftime('%H', waktu) AS jam, COUNT(*) AS gagal\nFROM log_login\nWHERE status = 'gagal'\nGROUP BY tanggal, jam\nHAVING COUNT(*) >= 3\nORDER BY gagal DESC, tanggal, jam;",
"jelas": "Lonjakan login gagal di jam tertentu adalah tanda serangan tebak password (brute force).",
"kompleksitas": "",
"petunjuk": [
"date(waktu) mengambil bagian tanggal; strftime('%H', waktu) mengambil jam.",
"GROUP BY dua kolom, lalu HAVING untuk ambang 3.",
"Kerangka solusinya:\nSELECT …(…) AS …, …('…', …) AS …, COUNT(*) AS …\nFROM …\nWHERE … = '…'\nGROUP BY …, …\nHAVING COUNT(*) >= 3\nORDER BY … DESC, …, …;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"log_login"
],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "sql-cte",
"topik": "sql",
"setelah": "cte",
"judul": "CTE: query bertahap",
"contoh": {
"judul": "Contoh: WITH untuk langkah perantara",
"penjelasan": "<p><code>WITH nama AS (SELECT ...)</code> membuat tabel sementara bernama yang bisa dipakai query berikutnya. Query panjang menjadi langkah-langkah yang mudah dibaca. <code>UNION ALL</code> menumpuk hasil dua query.</p>",
"kode": "WITH per_pengguna AS (\n  SELECT pengguna_id, SUM(nilai) AS belanja\n  FROM transaksi\n  WHERE status = 'selesai'\n  GROUP BY pengguna_id\n)\nSELECT COUNT(*) AS jumlah_pembeli, AVG(belanja) AS rata_belanja\nFROM per_pengguna;",
"kunci": "Satu CTE = satu langkah berpikir. Beberapa CTE dipisah koma.",
"bahasa": "sql",
"keluaran": ""
},
"langkah": [
{
"id": "sql-cte-1",
"judul": "Pembeli di atas rata-rata",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Pakai CTE untuk menghitung total belanja (transaksi <code>selesai</code>) per pengguna, lalu tampilkan <b>nama pengguna</b> dan <b>total belanja</b> yang lebih besar dari rata-rata total belanja semua pembeli. Urutkan dari terbesar.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "WITH belanja AS (\n  SELECT pengguna_id, SUM(nilai) AS total\n  FROM transaksi\n  WHERE status = 'selesai'\n  GROUP BY pengguna_id\n)\nSELECT p.nama, b.total\nFROM belanja b\nJOIN pengguna p ON p.id = b.pengguna_id\nWHERE b.total > (SELECT AVG(total) FROM belanja)\nORDER BY b.total DESC;",
"jelas": "CTE dipakai dua kali (di FROM dan di subquery) tanpa menulis ulang logikanya.",
"kompleksitas": "",
"petunjuk": [
"CTE belanja: SUM per pengguna_id dengan WHERE status = 'selesai'.",
"Query akhir: JOIN ke pengguna untuk nama, dan bandingkan dengan (SELECT AVG(total) FROM belanja).",
"Kerangka solusinya:\nWITH … AS (\n  SELECT …, SUM(…) AS …\n  FROM …\n  WHERE … = '…'\n  GROUP BY …\n)\nSELECT ….…, ….…\nFROM … …\nJOIN … … ON ….… = ….…\nWHERE ….… > (SELECT AVG(…) FROM …)\nORDER BY ….… DESC;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi",
"pengguna"
],
"awal_baru": "",
"mudah": []
},
{
"id": "sql-cte-2",
"judul": "Laporan keamanan gabungan",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Buat satu tabel berisi dua jenis kejadian: <b>login gagal</b> dari <code>log_login</code> (status <code>gagal</code>) dan <b>error server</b> dari <code>log_web</code> (status ≥ 400). Tampilkan kolom <b>jenis</b> (<code>'login_gagal'</code> atau <code>'http_error'</code>), <b>ip</b>, dan <b>jumlah</b> kejadian per jenis dan ip, hanya yang jumlahnya ≥ 2, urutkan dari jumlah terbanyak lalu jenis dan ip.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "WITH kejadian AS (\n  SELECT 'login_gagal' AS jenis, ip FROM log_login WHERE status = 'gagal'\n  UNION ALL\n  SELECT 'http_error', ip FROM log_web WHERE status >= 400\n)\nSELECT jenis, ip, COUNT(*) AS jumlah\nFROM kejadian\nGROUP BY jenis, ip\nHAVING COUNT(*) >= 2\nORDER BY jumlah DESC, jenis, ip;",
"jelas": "Menggabungkan beberapa sumber log ke satu tabel adalah pekerjaan inti analis SOC dan juga tim data.",
"kompleksitas": "",
"petunjuk": [
"UNION ALL menumpuk dua SELECT yang jumlah dan urutan kolomnya sama.",
"Taruh gabungan di CTE, lalu GROUP BY jenis, ip dengan HAVING.",
"Kerangka solusinya:\nWITH … AS (\n  SELECT '…' AS …, … FROM … WHERE … = '…'\n  UNION ALL\n  SELECT '…', … FROM … WHERE … >= 400\n)\nSELECT …, …, COUNT(*) AS …\nFROM …\nGROUP BY …, …\nHAVING COUNT(*) >= 2\nORDER BY … DESC, …, …;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"log_login",
"log_web"
],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "sql-window",
"topik": "sql",
"setelah": "window",
"judul": "Window function: peringkat dan total berjalan",
"contoh": {
"judul": "Contoh: RANK dan SUM OVER",
"penjelasan": "<p>Window function menghitung nilai per baris <b>tanpa</b> meringkas baris. <code>RANK() OVER (PARTITION BY kategori ORDER BY nilai DESC)</code> memberi peringkat di dalam setiap kategori; <code>SUM(nilai) OVER (ORDER BY tanggal)</code> membuat total berjalan.</p>",
"kode": "SELECT id, kategori, nilai,\n       RANK() OVER (PARTITION BY kategori ORDER BY nilai DESC) AS peringkat\nFROM transaksi\nWHERE kategori = 'Elektronik';",
"kunci": "PARTITION BY = 'per kelompok', ORDER BY di dalam OVER = urutan perhitungan.",
"bahasa": "sql",
"keluaran": ""
},
"langkah": [
{
"id": "sql-win-1",
"judul": "Transaksi terbesar per kategori",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Tampilkan <b>kategori</b>, <b>id</b>, dan <b>nilai</b> dari transaksi dengan nilai <b>terbesar di setiap kategori</b> (bila seri, tampilkan semua yang seri). Urut kategori.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "WITH r AS (\n  SELECT kategori, id, nilai,\n         RANK() OVER (PARTITION BY kategori ORDER BY nilai DESC) AS rk\n  FROM transaksi\n)\nSELECT kategori, id, nilai\nFROM r\nWHERE rk = 1\nORDER BY kategori, id;",
"jelas": "Pola 'top-N per kelompok' (CTE + RANK) adalah soal window function paling sering di tes data analyst.",
"kompleksitas": "",
"petunjuk": [
"Window function tidak bisa langsung dipakai di WHERE; hitung di CTE dulu.",
"RANK() OVER (PARTITION BY kategori ORDER BY nilai DESC), lalu saring rk = 1.",
"Kerangka solusinya:\nWITH … AS (\n  SELECT …, …, …,\n         …() OVER (PARTITION BY … ORDER BY … DESC) AS …\n  FROM …\n)\nSELECT …, …, …\nFROM …\nWHERE … = 1\nORDER BY …, …;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
},
{
"id": "sql-win-2",
"judul": "Total berjalan dan selisih harian",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "",
"soal": "Untuk transaksi <code>selesai</code> di kanal <code>web</code>, tampilkan <b>tanggal</b>, <b>nilai</b>, <b>total berjalan</b> (urut tanggal lalu id), dan <b>selisih</b> nilai dengan transaksi sebelumnya (transaksi pertama selisihnya NULL). Urut tanggal lalu id.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT tanggal, nilai,\n       SUM(nilai) OVER (ORDER BY tanggal, id) AS total_berjalan,\n       nilai - LAG(nilai) OVER (ORDER BY tanggal, id) AS selisih\nFROM transaksi\nWHERE status = 'selesai' AND kanal = 'web'\nORDER BY tanggal, id;",
"jelas": "Total berjalan dan LAG dipakai untuk grafik pertumbuhan kumulatif dan deteksi lonjakan.",
"kompleksitas": "",
"petunjuk": [
"SUM(nilai) OVER (ORDER BY tanggal, id) = total berjalan.",
"LAG(nilai) mengambil nilai baris sebelumnya; baris pertama mendapat NULL.",
"Kerangka solusinya:\nSELECT …, …,\n       SUM(…) OVER (ORDER BY …, …) AS …,\n       … - …(…) OVER (ORDER BY …, …) AS …\nFROM …\nWHERE … = '…' AND … = '…'\nORDER BY …, …;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
}
],
"ujian": false,
"cakupan": ""
},
{
"id": "uji-sql-1",
"topik": "sql",
"setelah": "case",
"judul": "Laporan e-commerce untuk manajer",
"contoh": {
"judul": "Cara mengerjakan coding test besar",
"penjelasan": "<p>Coding test besar terdiri dari <b>3 bagian</b> dalam satu cerita. Bagian B memakai hasil bagian A, dan bagian C memakai A dan B, sama seperti tugas kerja sungguhan. Setiap bagian adalah query baru dari data yang sama; pakai ulang pola query bagian sebelumnya.</p><ol><li>Baca ketiga bagian dulu supaya tahu arah akhirnya.</li><li>Kerjakan bagian A sampai lulus, lalu lanjut.</li><li>Pecah masalah menjadi fungsi kecil, uji dengan ▶ Jalankan dan <code>print()</code>.</li><li>Sisakan waktu untuk kasus tepi: data kosong, nol, nilai sama.</li></ol><p class=\"kecil\">Target waktu: ±45–60 menit untuk ketiga bagian.</p>",
"kode": "-- Bagian A: pahami datanya dulu\nSELECT * FROM transaksi LIMIT 5;",
"kunci": "Bagian C hampir selalu memakai fungsi bagian A dan B. Jangan menulis ulang, panggil saja.",
"bahasa": "sql",
"keluaran": ""
},
"langkah": [
{
"id": "uji-sql-1-a",
"judul": "Bagian A: Kinerja kanal",
"kategori": "studi",
"tingkat": 2,
"bahasa": "sql",
"fungsi": "",
"cerita": "Manajer e-commerce meminta tiga angka untuk rapat besok dari tabel <code>transaksi</code> dan <code>pengguna</code>.",
"soal": "Per <b>kanal</b>, tampilkan <b>jumlah transaksi</b>, <b>omzet</b> (total nilai transaksi <code>selesai</code> saja), dan <b>persen batal</b> (status <code>batal</code> dibagi semua transaksi kanal itu, ×100, 1 desimal). Urut omzet terbesar.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT kanal,\n       COUNT(*) AS jumlah,\n       SUM(CASE WHEN status = 'selesai' THEN nilai ELSE 0 END) AS omzet,\n       ROUND(100.0 * SUM(CASE WHEN status = 'batal' THEN 1 ELSE 0 END) / COUNT(*), 1) AS persen_batal\nFROM transaksi\nGROUP BY kanal\nORDER BY omzet DESC;",
"jelas": "Hitung bersyarat dengan CASE di dalam SUM memungkinkan beberapa metrik berbeda dalam satu GROUP BY.",
"kompleksitas": "",
"petunjuk": [
"Jangan saring status di WHERE: jumlah transaksi harus menghitung semua status.",
"SUM(CASE WHEN status = 'selesai' THEN nilai ELSE 0 END) untuk omzet bersyarat.",
"Kerangka solusinya:\nSELECT …,\n       COUNT(*) AS …,\n       SUM(CASE WHEN … = '…' THEN … ELSE 0 END) AS …,\n       ROUND(100.0 * SUM(CASE WHEN … = '…' THEN 1 ELSE 0 END) / COUNT(*), 1) AS …\nFROM …\nGROUP BY …\nORDER BY … DESC;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
},
{
"id": "uji-sql-1-b",
"judul": "Bagian B: Kota terbaik",
"kategori": "studi",
"tingkat": 3,
"bahasa": "sql",
"fungsi": "",
"cerita": "Lanjutan bagian A: pertanyaan manajer berikutnya dari data yang sama.",
"soal": "Tampilkan <b>kota</b> pengguna, <b>jumlah pembeli</b> (pengguna berbeda yang punya transaksi <code>selesai</code>), dan <b>omzet</b> transaksi selesai, hanya kota dengan omzet ≥ 1.000.000. Urut omzet terbesar.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT p.kota, COUNT(DISTINCT t.pengguna_id) AS pembeli, SUM(t.nilai) AS omzet\nFROM transaksi t\nJOIN pengguna p ON p.id = t.pengguna_id\nWHERE t.status = 'selesai'\nGROUP BY p.kota\nHAVING SUM(t.nilai) >= 1000000\nORDER BY omzet DESC;",
"jelas": "COUNT(DISTINCT ...) membedakan 'jumlah transaksi' dan 'jumlah pembeli', dua angka yang sering tertukar dalam laporan.",
"kompleksitas": "",
"petunjuk": [
"JOIN transaksi ke pengguna untuk mendapat kota.",
"COUNT(DISTINCT t.pengguna_id) menghitung pembeli unik; ambang omzet di HAVING.",
"Kerangka solusinya:\nSELECT ….…, COUNT(DISTINCT ….…) AS …, SUM(….…) AS …\nFROM … …\nJOIN … … ON ….… = ….…\nWHERE ….… = '…'\nGROUP BY ….…\nHAVING SUM(….…) >= 1000000\nORDER BY … DESC;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi",
"pengguna"
],
"awal_baru": "",
"mudah": []
},
{
"id": "uji-sql-1-c",
"judul": "Bagian C: Segmen pembeli",
"kategori": "studi",
"tingkat": 3,
"bahasa": "sql",
"fungsi": "",
"cerita": "Lanjutan bagian B: pertanyaan manajer berikutnya dari data yang sama.",
"soal": "Beri setiap pengguna yang punya transaksi <code>selesai</code> segmen berdasarkan total belanjanya: <code>VIP</code> (≥ 2.000.000), <code>Reguler</code> (≥ 500.000), selain itu <code>Baru</code>. Tampilkan <b>segmen</b>, <b>jumlah pengguna</b>, dan <b>rata-rata belanja</b> (dibulatkan ke bilangan bulat). Urut rata-rata terbesar.",
"awal": "-- tulis query-mu di sini\n",
"solusi": "SELECT segmen, COUNT(*) AS jumlah, ROUND(AVG(total)) AS rata_belanja\nFROM (\n  SELECT pengguna_id, SUM(nilai) AS total,\n         CASE WHEN SUM(nilai) >= 2000000 THEN 'VIP'\n              WHEN SUM(nilai) >= 500000 THEN 'Reguler'\n              ELSE 'Baru' END AS segmen\n  FROM transaksi\n  WHERE status = 'selesai'\n  GROUP BY pengguna_id\n) s\nGROUP BY segmen\nORDER BY rata_belanja DESC;",
"jelas": "Agregasi dua tingkat (per pengguna, lalu per segmen) adalah dasar segmentasi pelanggan, seperti di skripsimu dengan K-Means, tapi memakai aturan bisnis.",
"kompleksitas": "",
"petunjuk": [
"Langkah 1 (subquery di FROM): total belanja dan segmen per pengguna.",
"Langkah 2: GROUP BY segmen dari hasil langkah 1.",
"Kerangka solusinya:\nSELECT …, COUNT(*) AS …, ROUND(AVG(…)) AS …\nFROM (\n  SELECT …, SUM(…) AS …,\n         CASE WHEN SUM(…) >= 2000000 THEN '…'\n              WHEN SUM(…) >= 500000 THEN '…'\n              ELSE '…' END AS …\n  FROM …\n  WHERE … = '…'\n  GROUP BY …\n) …\nGROUP BY …\nORDER BY … DESC;"
],
"tes": [
[
"Hasil query",
""
]
],
"contoh": 1,
"pre": "",
"urut": true,
"tabel": [
"transaksi"
],
"awal_baru": "",
"mudah": []
}
],
"ujian": true,
"cakupan": "Bab 1–5: SELECT, GROUP BY, JOIN, subquery, CASE"
}
];
