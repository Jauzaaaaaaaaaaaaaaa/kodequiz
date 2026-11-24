# -*- coding: utf-8 -*-
"""Lab Coding Test Python: sumber tantangan + pemeriksa + pembuat js/soal/lab-python.js.

Pakai:  python -I alat/buat-lab-python.py
Setiap tantangan punya solusi acuan dan daftar tes (ekspresi Python). Skrip ini:
1. menjalankan solusi acuan untuk setiap tes, lalu menghitung jawaban yang diharapkan,
2. mencocokkan dengan nilai yang ditulis manual (cek=...) bila ada,
3. memastikan kode awal (starter) TIDAK lulus semua tes,
4. menulis hasilnya ke js/soal/lab-python.js (jangan edit file itu manual).
Tingkat disesuaikan dengan coding test Junior Odoo Developer / Python developer.
"""
import ast, json, math, os, re, sys

T = []
def tantangan(**kw): T.append(kw)

# ======================================================================
# A. DASAR PYTHON (tingkat 1): pemanasan yang hampir selalu muncul
# ======================================================================
tantangan(id="fizzbuzz", judul="FizzBuzz", kategori="dasar", tingkat=1, fungsi="fizzbuzz",
  soal="Buat fungsi <code>fizzbuzz(n)</code> yang mengembalikan <b>list string</b> untuk angka 1 sampai n. Kelipatan 3 diganti <code>\"Fizz\"</code>, kelipatan 5 diganti <code>\"Buzz\"</code>, kelipatan keduanya diganti <code>\"FizzBuzz\"</code>, selain itu angkanya sebagai string.",
  solusi='''def fizzbuzz(n):
    hasil = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            hasil.append("FizzBuzz")
        elif i % 3 == 0:
            hasil.append("Fizz")
        elif i % 5 == 0:
            hasil.append("Buzz")
        else:
            hasil.append(str(i))
    return hasil
''',
  tes=["fizzbuzz(5)", "fizzbuzz(15)", "fizzbuzz(1)", "fizzbuzz(0)"],
  cek={"fizzbuzz(5)": ["1", "2", "Fizz", "4", "Buzz"]},
  petunjuk=["Ulangi i dari 1 sampai n dengan range(1, n + 1). Operator % memberi sisa bagi: i % 3 == 0 artinya kelipatan 3.",
            "Urutan if penting: cek kelipatan 15 (3 dan 5) PALING DULU. Kalau kelipatan 3 dicek duluan, 15 akan jadi \"Fizz\"."],
  jelas="Soal klasik untuk melihat apakah kandidat paham perulangan, operator modulo, dan urutan kondisi. Jebakan utamanya urutan if: syarat yang paling khusus (kelipatan 15) harus dicek pertama. n = 0 menghasilkan list kosong karena range(1, 1) kosong.",
  kompleksitas="O(n)")

tantangan(id="balik-kata", judul="Balik urutan kata", kategori="dasar", tingkat=1, fungsi="balik_kata",
  soal="Buat <code>balik_kata(kalimat)</code> yang membalik <b>urutan kata</b> (bukan huruf). Spasi berlebih di awal, akhir, atau di antara kata dibuang, dan kata dipisah satu spasi.",
  solusi='''def balik_kata(kalimat):
    return " ".join(reversed(kalimat.split()))
''',
  tes=['balik_kata("saya suka odoo")', 'balik_kata("  halo   dunia ")', 'balik_kata("python")', 'balik_kata("")'],
  cek={'balik_kata("saya suka odoo")': "odoo suka saya"},
  petunjuk=["split() tanpa argumen memecah berdasarkan spasi apa pun dan otomatis membuang spasi berlebih.",
            "Balik list dengan [::-1] atau reversed(), lalu gabungkan dengan \" \".join(...)."],
  jelas="split() tanpa argumen berbeda dengan split(\" \"): yang pertama membuang spasi ganda, yang kedua menghasilkan string kosong di antara spasi ganda. Pola split → olah → join sangat sering dipakai untuk mengolah teks.",
  kompleksitas="O(n)")

tantangan(id="palindrom", judul="Cek palindrom", kategori="dasar", tingkat=1, fungsi="palindrom",
  soal="Buat <code>palindrom(teks)</code> yang mengembalikan <code>True</code> jika teks sama dibaca dari depan maupun belakang. <b>Abaikan</b> huruf besar/kecil dan semua karakter yang bukan huruf atau angka.",
  solusi='''def palindrom(teks):
    bersih = [c.lower() for c in teks if c.isalnum()]
    return bersih == bersih[::-1]
''',
  tes=['palindrom("Kasur ini rusak")', 'palindrom("odoo")', 'palindrom("A man, a plan, a canal: Panama")', 'palindrom("")', 'palindrom("12321")', 'palindrom("ab")'],
  cek={'palindrom("Kasur ini rusak")': True, 'palindrom("odoo")': False},
  petunjuk=["Bersihkan dulu: ambil hanya karakter yang c.isalnum() lalu ubah ke huruf kecil.",
            "Bandingkan hasil bersih dengan kebalikannya: s == s[::-1]."],
  jelas="Langkahnya: normalisasi data dulu, baru bandingkan. String kosong dianggap palindrom karena kebalikannya juga kosong. Cara two-pointer (indeks kiri dan kanan bergerak ke tengah) juga benar dan hemat memori.",
  kompleksitas="O(n)")

tantangan(id="hitung-vokal", judul="Hitung huruf vokal", kategori="dasar", tingkat=1, fungsi="hitung_vokal",
  soal="Buat <code>hitung_vokal(teks)</code> yang mengembalikan jumlah huruf vokal (a, i, u, e, o), huruf besar maupun kecil.",
  solusi='''def hitung_vokal(teks):
    return sum(1 for c in teks.lower() if c in "aiueo")
''',
  tes=['hitung_vokal("Odoo Developer")', 'hitung_vokal("RPA")', 'hitung_vokal("xyz")', 'hitung_vokal("")'],
  cek={'hitung_vokal("Odoo Developer")': 7},
  petunjuk=["Ubah teks ke huruf kecil dulu dengan .lower() supaya 'O' dan 'o' sama.",
            "Ulangi tiap karakter, tambahkan 1 kalau karakter ada di \"aiueo\" (operator in)."],
  jelas="sum(1 for c in ... if ...) adalah generator expression: menghitung tanpa membuat list. Operator in pada string mengecek apakah karakter ada di dalamnya.",
  kompleksitas="O(n)")

tantangan(id="faktorial", judul="Faktorial", kategori="dasar", tingkat=1, fungsi="faktorial",
  soal="Buat <code>faktorial(n)</code> untuk n ≥ 0. Contoh: 5! = 5 × 4 × 3 × 2 × 1 = 120, dan 0! = 1. Jangan memakai <code>math.factorial</code>.",
  solusi='''def faktorial(n):
    hasil = 1
    for i in range(2, n + 1):
        hasil *= i
    return hasil
''',
  tes=["faktorial(5)", "faktorial(0)", "faktorial(1)", "faktorial(10)", "faktorial(20)"],
  cek={"faktorial(5)": 120, "faktorial(0)": 1},
  petunjuk=["Mulai dari hasil = 1 (bukan 0, karena dikali).",
            "Kalikan hasil dengan setiap angka dari 2 sampai n: for i in range(2, n + 1)."],
  jelas="Versi rekursif (return 1 if n <= 1 else n * faktorial(n - 1)) juga benar, tapi untuk n besar bisa terkena batas rekursi Python (±1000). Versi perulangan lebih aman. Integer Python tidak punya batas ukuran, jadi 20! tetap tepat.",
  kompleksitas="O(n)")

tantangan(id="prima", judul="Bilangan prima", kategori="dasar", tingkat=1, fungsi="prima",
  soal="Buat <code>prima(n)</code> yang mengembalikan <code>True</code> jika n bilangan prima. Ingat: 0 dan 1 <b>bukan</b> prima, 2 adalah prima.",
  solusi='''def prima(n):
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True
''',
  tes=["prima(7)", "prima(1)", "prima(2)", "prima(9)", "prima(97)", "prima(0)", "prima(7919)", "prima(7921)"],
  cek={"prima(7)": True, "prima(1)": False},
  petunjuk=["Tangani kasus kecil dulu: n < 2 langsung False.",
            "Cukup coba pembagi sampai akar n (while i * i <= n). Kalau ada yang habis membagi, n bukan prima."],
  jelas="Mengecek sampai akar n cukup, karena kalau n = a × b dan a > √n maka b < √n, jadi b sudah dicek lebih dulu. Ini mengubah O(n) menjadi O(√n): pewawancara sering menanyakan optimasi ini.",
  kompleksitas="O(√n)")

tantangan(id="maks-manual", judul="Nilai terbesar tanpa max()", kategori="dasar", tingkat=1, fungsi="terbesar",
  soal="Buat <code>terbesar(angka)</code> yang mengembalikan nilai terbesar dari list <b>tanpa</b> memakai <code>max()</code> atau <code>sorted()</code>. Jika list kosong, kembalikan <code>None</code>.",
  solusi='''def terbesar(angka):
    if not angka:
        return None
    hasil = angka[0]
    for x in angka[1:]:
        if x > hasil:
            hasil = x
    return hasil
''',
  tes=["terbesar([3, 9, 2])", "terbesar([])", "terbesar([-5, -2, -9])", "terbesar([4])", "terbesar([1, 7, 7, 3])"],
  cek={"terbesar([3, 9, 2])": 9, "terbesar([-5, -2, -9])": -2},
  petunjuk=["Tangani list kosong dulu: if not angka: return None.",
            "Mulai dari elemen pertama sebagai juara sementara (bukan 0, karena semua angka bisa negatif), lalu bandingkan dengan sisanya."],
  jelas="Jebakan umum: memulai dengan hasil = 0, sehingga list yang semuanya negatif memberi jawaban 0. Selalu mulai dari elemen pertama.",
  kompleksitas="O(n)")

tantangan(id="unik-urut", judul="Hapus duplikat, jaga urutan", kategori="dasar", tingkat=1, fungsi="unik",
  soal="Buat <code>unik(data)</code> yang membuang item ganda tetapi <b>mempertahankan urutan</b> kemunculan pertama.",
  solusi='''def unik(data):
    sudah = set()
    hasil = []
    for x in data:
        if x not in sudah:
            sudah.add(x)
            hasil.append(x)
    return hasil
''',
  tes=['unik([3, 1, 3, 2, 1])', 'unik(["SO1", "SO2", "SO1"])', 'unik([])', 'unik([5, 5, 5])'],
  cek={'unik([3, 1, 3, 2, 1])': [3, 1, 2]},
  petunjuk=["list(set(data)) membuang duplikat tetapi urutannya bisa berubah, jadi tidak cukup.",
            "Simpan item yang sudah pernah dilihat di sebuah set (cek in di set itu cepat), lalu append ke list hasil hanya kalau belum pernah dilihat."],
  jelas="Mengecek x in set rata-rata O(1), sedangkan x in list O(n). Cara singkat yang juga benar: list(dict.fromkeys(data)), karena dict menjaga urutan sejak Python 3.7.",
  kompleksitas="O(n)")

tantangan(id="jumlah-digit", judul="Jumlah digit", kategori="dasar", tingkat=1, fungsi="jumlah_digit",
  soal="Buat <code>jumlah_digit(n)</code> yang menjumlahkan semua digit bilangan bulat n. Untuk n negatif, abaikan tanda minus.",
  solusi='''def jumlah_digit(n):
    n = abs(n)
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total
''',
  tes=["jumlah_digit(1234)", "jumlah_digit(0)", "jumlah_digit(-907)", "jumlah_digit(99999)"],
  cek={"jumlah_digit(1234)": 10, "jumlah_digit(-907)": 16},
  petunjuk=["n % 10 mengambil digit terakhir, n // 10 membuang digit terakhir.",
            "Ulangi selama n > 0. Pakai abs(n) dulu agar angka negatif aman. Cara lain: sum(int(c) for c in str(abs(n)))."],
  jelas="Dua cara sama-sama diterima: aritmetika (% dan //) atau ubah ke string. Pewawancara kadang meminta cara aritmetika untuk melihat pemahaman operator.",
  kompleksitas="O(jumlah digit)")

tantangan(id="nilai-huruf", judul="Konversi nilai ke huruf", kategori="dasar", tingkat=1, fungsi="nilai_huruf",
  soal="Buat <code>nilai_huruf(nilai)</code>: 85–100 → <code>\"A\"</code>, 70–84 → <code>\"B\"</code>, 55–69 → <code>\"C\"</code>, 40–54 → <code>\"D\"</code>, 0–39 → <code>\"E\"</code>. Nilai di luar 0–100 → <code>\"Tidak valid\"</code>. Nilai boleh desimal.",
  solusi='''def nilai_huruf(nilai):
    if nilai < 0 or nilai > 100:
        return "Tidak valid"
    if nilai >= 85:
        return "A"
    if nilai >= 70:
        return "B"
    if nilai >= 55:
        return "C"
    if nilai >= 40:
        return "D"
    return "E"
''',
  tes=["nilai_huruf(90)", "nilai_huruf(84.5)", "nilai_huruf(70)", "nilai_huruf(0)", "nilai_huruf(101)", "nilai_huruf(-1)", "nilai_huruf(54.9)"],
  cek={"nilai_huruf(90)": "A", "nilai_huruf(84.5)": "B"},
  petunjuk=["Tangani nilai tidak valid paling awal.",
            "Cek dari batas tertinggi ke terendah dengan >=. Karena return langsung keluar dari fungsi, kamu tidak perlu menulis batas atas tiap rentang."],
  jelas="Batas yang ditulis 70–84 untuk bilangan bulat; untuk desimal 84.5, aturan >= 85 → A, >= 70 → B tetap memberi B. Menguji tepat di batas (70, 84.5, 54.9) adalah kebiasaan baik yang dicari pewawancara.",
  kompleksitas="O(1)")

# ======================================================================
# B. ALGORITMA & STRUKTUR DATA (tingkat 2–3)
# ======================================================================
tantangan(id="two-sum", judul="Two Sum", kategori="algo", tingkat=2, fungsi="dua_jumlah",
  soal="Diberi list <code>angka</code> dan <code>target</code>, kembalikan <b>indeks dua angka</b> yang jumlahnya sama dengan target, sebagai list <code>[i, j]</code> dengan i &lt; j. Dijamin ada tepat satu jawaban. Usahakan lebih cepat dari O(n²).",
  solusi='''def dua_jumlah(angka, target):
    posisi = {}
    for j, x in enumerate(angka):
        pasangan = target - x
        if pasangan in posisi:
            return [posisi[pasangan], j]
        posisi[x] = j
    return []
''',
  tes=["dua_jumlah([2, 7, 11, 15], 9)", "dua_jumlah([3, 2, 4], 6)", "dua_jumlah([3, 3], 6)", "dua_jumlah([-1, 8, 5, 0], 4)", "dua_jumlah([1, 5, 9, 14, 20], 34)"],
  cek={"dua_jumlah([2, 7, 11, 15], 9)": [0, 1], "dua_jumlah([3, 2, 4], 6)": [1, 2]},
  petunjuk=["Cara dua for bersarang benar tapi O(n²). Bisakah sekali jalan saja?",
            "Simpan angka yang sudah dilihat di dict {nilai: indeks}. Untuk tiap x, cek apakah target - x sudah ada di dict."],
  jelas="Ini soal coding test paling terkenal. Kuncinya menukar memori dengan kecepatan: dict membuat pencarian pasangan O(1), jadi total O(n). Perhatikan [3, 3]: angka dimasukkan ke dict SETELAH dicek, supaya satu angka tidak dipasangkan dengan dirinya sendiri.",
  kompleksitas="O(n) waktu, O(n) memori")

tantangan(id="anagram", judul="Anagram", kategori="algo", tingkat=2, fungsi="anagram",
  soal="Buat <code>anagram(a, b)</code> yang mengembalikan <code>True</code> jika a dan b tersusun dari huruf yang sama dengan jumlah yang sama. Abaikan spasi dan huruf besar/kecil.",
  solusi='''from collections import Counter

def anagram(a, b):
    bersih = lambda s: Counter(s.replace(" ", "").lower())
    return bersih(a) == bersih(b)
''',
  tes=['anagram("Listen", "Silent")', 'anagram("odoo", "dodo")', 'anagram("aab", "abb")', 'anagram("Dormitory", "dirty room")', 'anagram("", "")', 'anagram("abc", "abcd")'],
  cek={'anagram("Listen", "Silent")': True, 'anagram("aab", "abb")': False},
  petunjuk=["Bersihkan dulu kedua teks: buang spasi dan ubah ke huruf kecil.",
            "Bandingkan sorted(a) == sorted(b), atau hitung huruf dengan collections.Counter lalu bandingkan."],
  jelas="sorted() memberi O(n log n); Counter memberi O(n). Membandingkan set(a) == set(b) SALAH karena set membuang jumlah huruf ('aab' dan 'abb' akan dianggap sama).",
  kompleksitas="O(n)")

tantangan(id="frekuensi-kata", judul="Frekuensi kata", kategori="algo", tingkat=2, fungsi="frekuensi_kata",
  soal="Buat <code>frekuensi_kata(teks)</code> yang mengembalikan <b>dict</b> {kata: jumlah}. Kata dibandingkan dalam huruf kecil, dan tanda baca <code>. , ! ?</code> dibuang.",
  solusi='''def frekuensi_kata(teks):
    for tanda in ".,!?":
        teks = teks.replace(tanda, " ")
    hasil = {}
    for kata in teks.lower().split():
        hasil[kata] = hasil.get(kata, 0) + 1
    return hasil
''',
  tes=['frekuensi_kata("Odoo itu mudah. Odoo itu seru!")', 'frekuensi_kata("")', 'frekuensi_kata("Ya, ya, YA?")', 'frekuensi_kata("satu")'],
  cek={'frekuensi_kata("Odoo itu mudah. Odoo itu seru!")': {"odoo": 2, "itu": 2, "mudah": 1, "seru": 1}},
  petunjuk=["Ganti setiap tanda baca dengan spasi, ubah ke huruf kecil, lalu split().",
            "Hitung dengan dict: hasil[kata] = hasil.get(kata, 0) + 1. (Atau collections.Counter, lalu ubah ke dict.)"],
  jelas="Pola 'hitung kemunculan' muncul di mana-mana: kata, kode error di log, produk terlaris. dict.get(kunci, 0) menghindari KeyError untuk kata yang baru muncul pertama kali.",
  kompleksitas="O(n)")

tantangan(id="kurung", judul="Kurung seimbang", kategori="algo", tingkat=2, fungsi="seimbang",
  soal="Buat <code>seimbang(s)</code> yang mengembalikan <code>True</code> jika semua kurung <code>()</code>, <code>[]</code>, <code>{}</code> di s berpasangan dan bersarang dengan benar. Karakter lain diabaikan.",
  solusi='''def seimbang(s):
    pasangan = {")": "(", "]": "[", "}": "{"}
    tumpukan = []
    for c in s:
        if c in "([{":
            tumpukan.append(c)
        elif c in pasangan:
            if not tumpukan or tumpukan.pop() != pasangan[c]:
                return False
    return not tumpukan
''',
  tes=['seimbang("([]{})")', 'seimbang("([)]")', 'seimbang("((")', 'seimbang("")', 'seimbang("domain = [(\'state\', \'=\', \'sale\')]")', 'seimbang(")(")', 'seimbang("{[()()]}")'],
  cek={'seimbang("([]{})")': True, 'seimbang("([)]")': False},
  petunjuk=["Pakai stack (list dengan append dan pop): kurung buka dimasukkan, kurung tutup harus cocok dengan kurung buka TERAKHIR.",
            "Dua cara gagal: bertemu kurung tutup saat stack kosong, atau di akhir stack masih berisi."],
  jelas="Stack = Last In First Out. Soal ini menguji apakah kamu bisa memilih struktur data yang tepat. Jangan lupa dua kasus tepi: ')(' (tutup saat stack kosong) dan '((' (sisa di akhir).",
  kompleksitas="O(n)")

tantangan(id="gabung-interval", judul="Gabungkan jadwal bertumpuk", kategori="algo", tingkat=3, fungsi="gabung_interval",
  cerita="Tim support punya daftar jam sibuk teknisi sebagai pasangan [mulai, selesai]. Mereka ingin melihat blok waktu sibuk yang sudah digabung.",
  soal="Buat <code>gabung_interval(jadwal)</code>: gabungkan semua interval yang bertumpuk atau bersentuhan, lalu kembalikan list interval terurut berdasarkan waktu mulai.",
  solusi='''def gabung_interval(jadwal):
    hasil = []
    for mulai, selesai in sorted(jadwal):
        if hasil and mulai <= hasil[-1][1]:
            hasil[-1][1] = max(hasil[-1][1], selesai)
        else:
            hasil.append([mulai, selesai])
    return hasil
''',
  tes=["gabung_interval([[1, 3], [2, 6], [8, 10], [15, 18]])", "gabung_interval([[1, 4], [4, 5]])", "gabung_interval([])", "gabung_interval([[5, 7], [1, 2]])", "gabung_interval([[1, 10], [2, 3], [4, 8]])"],
  cek={"gabung_interval([[1, 3], [2, 6], [8, 10], [15, 18]])": [[1, 6], [8, 10], [15, 18]]},
  petunjuk=["Urutkan dulu berdasarkan waktu mulai. Setelah urut, interval yang bertumpuk pasti berdampingan.",
            "Bandingkan setiap interval dengan interval TERAKHIR di hasil: kalau mulai <= selesai terakhir, perpanjang (pakai max); kalau tidak, tambahkan sebagai blok baru."],
  jelas="Pola 'urutkan dulu, lalu satu kali jalan' menyelesaikan banyak soal interval. max() diperlukan untuk kasus [1, 10] yang menelan [2, 3]. Kompleksitas didominasi sorting: O(n log n).",
  kompleksitas="O(n log n)")

tantangan(id="rotasi", judul="Rotasi list", kategori="algo", tingkat=2, fungsi="rotasi",
  soal="Buat <code>rotasi(data, k)</code> yang memutar list ke <b>kanan</b> sebanyak k langkah. k bisa lebih besar dari panjang list. List kosong tetap kosong.",
  solusi='''def rotasi(data, k):
    if not data:
        return []
    k %= len(data)
    return data[-k:] + data[:-k] if k else data[:]
''',
  tes=["rotasi([1, 2, 3, 4, 5], 2)", "rotasi([1, 2, 3], 4)", "rotasi([], 3)", "rotasi([1, 2, 3], 0)", "rotasi([1, 2, 3], 3)"],
  cek={"rotasi([1, 2, 3, 4, 5], 2)": [4, 5, 1, 2, 3], "rotasi([1, 2, 3], 4)": [3, 1, 2]},
  petunjuk=["Rotasi sebanyak panjang list = kembali seperti semula, jadi kecilkan k dengan k % len(data).",
            "Ambil k elemen terakhir (data[-k:]) lalu sambung dengan sisanya (data[:-k]). Hati-hati k = 0: data[-0:] adalah SELURUH list."],
  jelas="Jebakannya ada dua: k lebih besar dari panjang list (pakai modulo) dan k = 0 (karena -0 sama dengan 0, data[-0:] mengambil semua). List kosong harus dicek sebelum modulo agar tidak terjadi ZeroDivisionError.",
  kompleksitas="O(n)")

tantangan(id="unik-pertama", judul="Huruf unik pertama", kategori="algo", tingkat=2, fungsi="unik_pertama",
  soal="Buat <code>unik_pertama(s)</code> yang mengembalikan <b>indeks</b> karakter pertama yang hanya muncul sekali. Kalau tidak ada, kembalikan <code>-1</code>.",
  solusi='''from collections import Counter

def unik_pertama(s):
    hitung = Counter(s)
    for i, c in enumerate(s):
        if hitung[c] == 1:
            return i
    return -1
''',
  tes=['unik_pertama("odoo")', 'unik_pertama("leetcode")', 'unik_pertama("aabb")', 'unik_pertama("")', 'unik_pertama("z")'],
  cek={'unik_pertama("odoo")': 1, 'unik_pertama("leetcode")': 0, 'unik_pertama("aabb")': -1},
  petunjuk=["Dua kali jalan: pertama hitung semua karakter, kedua cari yang hitungannya 1.",
            "s.count(c) di dalam perulangan juga benar tapi O(n²). Counter atau dict membuatnya O(n)."],
  jelas="Banyak soal string diselesaikan dengan dua tahap: kumpulkan statistik, lalu periksa. Pada 'odoo' huruf o muncul 3 kali dan d sekali, jadi jawabannya indeks d, yaitu 1. Pada 'aabb' semua huruf muncul dua kali, jadi -1.",
  kompleksitas="O(n)")

tantangan(id="cari-biner", judul="Binary search", kategori="algo", tingkat=2, fungsi="cari_biner",
  soal="Diberi list <code>data</code> yang <b>sudah terurut naik</b>, buat <code>cari_biner(data, x)</code> yang mengembalikan indeks x, atau <code>-1</code> jika tidak ada. Jangan memakai <code>.index()</code> atau <code>in</code>; gunakan binary search.",
  solusi='''def cari_biner(data, x):
    kiri, kanan = 0, len(data) - 1
    while kiri <= kanan:
        tengah = (kiri + kanan) // 2
        if data[tengah] == x:
            return tengah
        if data[tengah] < x:
            kiri = tengah + 1
        else:
            kanan = tengah - 1
    return -1
''',
  tes=["cari_biner([1, 3, 5, 7, 9, 11], 7)", "cari_biner([1, 3, 5, 7, 9, 11], 4)", "cari_biner([], 1)", "cari_biner([5], 5)", "cari_biner([2, 4, 6, 8], 2)", "cari_biner([2, 4, 6, 8], 8)"],
  cek={"cari_biner([1, 3, 5, 7, 9, 11], 7)": 3, "cari_biner([1, 3, 5, 7, 9, 11], 4)": -1},
  petunjuk=["Simpan dua batas: kiri = 0 dan kanan = len(data) - 1. Lihat elemen tengah.",
            "Kalau tengah lebih kecil dari x, buang separuh kiri (kiri = tengah + 1); kalau lebih besar, buang separuh kanan (kanan = tengah - 1). Ulangi selama kiri <= kanan."],
  jelas="Setiap langkah membuang separuh data, jadi 1 juta data cukup ±20 langkah: O(log n). Kesalahan umum: memakai kiri < kanan (melewatkan list satu elemen) atau lupa +1/-1 sehingga perulangan tidak berhenti.",
  kompleksitas="O(log n)")

tantangan(id="kompres", judul="Kompres string (run-length)", kategori="algo", tingkat=2, fungsi="kompres",
  soal="Buat <code>kompres(s)</code> yang mengubah huruf berulang berurutan menjadi huruf + jumlahnya. Contoh <code>\"aaabccdddd\"</code> → <code>\"a3b1c2d4\"</code>.",
  solusi='''def kompres(s):
    if not s:
        return ""
    hasil = []
    sekarang, jumlah = s[0], 1
    for c in s[1:]:
        if c == sekarang:
            jumlah += 1
        else:
            hasil.append(sekarang + str(jumlah))
            sekarang, jumlah = c, 1
    hasil.append(sekarang + str(jumlah))
    return "".join(hasil)
''',
  tes=['kompres("aaabccdddd")', 'kompres("")', 'kompres("a")', 'kompres("abab")', 'kompres("zzzzzzzzzzzz")'],
  cek={'kompres("aaabccdddd")': "a3b1c2d4"},
  petunjuk=["Simpan huruf yang sedang dihitung dan jumlahnya. Saat huruf berganti, tulis hasilnya lalu mulai hitung huruf baru.",
            "Jangan lupa menulis kelompok TERAKHIR setelah perulangan selesai; ini bug yang paling sering terjadi."],
  jelas="Bug klasik soal ini: kelompok terakhir tidak ditulis karena tidak ada 'pergantian huruf' setelahnya. Menyusun potongan di list lalu join lebih efisien daripada menambah string berulang kali.",
  kompleksitas="O(n)")

tantangan(id="ratakan", judul="Ratakan list bersarang", kategori="algo", tingkat=2, fungsi="ratakan",
  soal="Buat <code>ratakan(data)</code> yang mengubah list bersarang sedalam apa pun menjadi satu list datar.",
  solusi='''def ratakan(data):
    hasil = []
    for x in data:
        if isinstance(x, list):
            hasil.extend(ratakan(x))
        else:
            hasil.append(x)
    return hasil
''',
  tes=["ratakan([1, [2, 3], [4, [5, [6]]]])", "ratakan([])", "ratakan([[], [[]]])", "ratakan([1, 2])", "ratakan([['a'], 'b'])"],
  cek={"ratakan([1, [2, 3], [4, [5, [6]]]])": [1, 2, 3, 4, 5, 6]},
  petunjuk=["Untuk tiap item: kalau ia list (isinstance(x, list)), ratakan juga isinya; kalau bukan, masukkan ke hasil.",
            "Fungsi yang memanggil dirinya sendiri (rekursi) cocok untuk data bersarang. Pakai extend untuk menggabungkan hasil rekursi."],
  jelas="Rekursi punya dua bagian: kasus dasar (item bukan list → tambahkan) dan langkah rekursif (item list → ratakan dulu). Struktur seperti ini mirip kategori produk Odoo yang punya parent_id bertingkat.",
  kompleksitas="O(jumlah item)")

tantangan(id="fibonacci", judul="Deret Fibonacci", kategori="algo", tingkat=1, fungsi="fibonacci",
  soal="Buat <code>fibonacci(n)</code> yang mengembalikan list n bilangan Fibonacci pertama: 0, 1, 1, 2, 3, 5, …",
  solusi='''def fibonacci(n):
    hasil = []
    a, b = 0, 1
    for _ in range(n):
        hasil.append(a)
        a, b = b, a + b
    return hasil
''',
  tes=["fibonacci(7)", "fibonacci(0)", "fibonacci(1)", "fibonacci(2)", "fibonacci(15)"],
  cek={"fibonacci(7)": [0, 1, 1, 2, 3, 5, 8]},
  petunjuk=["Simpan dua angka terakhir: a = 0, b = 1.",
            "Setiap langkah: catat a, lalu geser dengan a, b = b, a + b (penugasan serentak, tidak perlu variabel sementara)."],
  jelas="Penugasan serentak a, b = b, a + b menghitung sisi kanan lebih dulu, jadi aman. Versi rekursif murni fib(n-1) + fib(n-2) sangat lambat (O(2ⁿ)); pewawancara sering menanyakan kenapa.",
  kompleksitas="O(n)")

tantangan(id="kelompok-anagram", judul="Kelompokkan anagram", kategori="algo", tingkat=3, fungsi="kelompok_anagram",
  soal="Buat <code>kelompok_anagram(kata)</code> yang mengelompokkan kata-kata yang saling anagram. Kembalikan list kelompok; setiap kelompok <b>diurutkan abjad</b>, dan daftar kelompok diurutkan berdasarkan kata pertamanya.",
  solusi='''def kelompok_anagram(kata):
    grup = {}
    for k in kata:
        kunci = "".join(sorted(k))
        grup.setdefault(kunci, []).append(k)
    return sorted(sorted(g) for g in grup.values())
''',
  tes=['kelompok_anagram(["makan", "kaman", "odoo", "dood", "oodo", "nama"])', 'kelompok_anagram([])', 'kelompok_anagram(["a"])', 'kelompok_anagram(["ab", "ba", "abc"])'],
  cek={'kelompok_anagram(["ab", "ba", "abc"])': [["ab", "ba"], ["abc"]]},
  petunjuk=["Kata-kata anagram punya 'tanda tangan' yang sama kalau hurufnya diurutkan: sorted('ba') sama dengan sorted('ab').",
            "Pakai dict {tanda_tangan: [kata, ...]}. dict.setdefault(kunci, []).append(k) membuat list baru bila kunci belum ada."],
  jelas="Teknik 'kunci kanonik' mengubah masalah perbandingan berpasangan O(n²) menjadi pengelompokan satu kali jalan. Pengurutan di akhir hanya agar hasilnya bisa dibandingkan dengan tes.",
  kompleksitas="O(n · k log k), k = panjang kata")

tantangan(id="kadane", judul="Untung beruntun terbesar", kategori="algo", tingkat=3, fungsi="untung_maks",
  cerita="Kamu punya laba/rugi harian toko (bisa negatif). Manajer ingin tahu total laba terbesar dari <b>beberapa hari berturut-turut</b>.",
  soal="Buat <code>untung_maks(harian)</code> yang mengembalikan jumlah terbesar dari sub-list berurutan (minimal satu hari). List tidak kosong.",
  solusi='''def untung_maks(harian):
    terbaik = sekarang = harian[0]
    for x in harian[1:]:
        sekarang = max(x, sekarang + x)
        terbaik = max(terbaik, sekarang)
    return terbaik
''',
  tes=["untung_maks([-2, 1, -3, 4, -1, 2, 1, -5, 4])", "untung_maks([5])", "untung_maks([-3, -1, -2])", "untung_maks([2, 3, -10, 4])", "untung_maks([1, 2, 3])"],
  cek={"untung_maks([-2, 1, -3, 4, -1, 2, 1, -5, 4])": 6, "untung_maks([-3, -1, -2])": -1},
  petunjuk=["Untuk setiap hari, pilih: lanjutkan rentang sebelumnya (sekarang + x) atau mulai baru dari hari ini (x). Ambil yang lebih besar.",
            "Simpan juga nilai terbaik yang pernah dicapai. Mulai keduanya dari elemen pertama (bukan 0) supaya kasus semua negatif benar."],
  jelas="Ini algoritma Kadane: O(n), sekali jalan. Mencoba semua pasangan awal–akhir butuh O(n²). Memulai dari 0 akan salah untuk data yang semuanya negatif.",
  kompleksitas="O(n)")

tantangan(id="angka-hilang", judul="Nomor faktur yang hilang", kategori="algo", tingkat=2, fungsi="angka_hilang",
  cerita="Nomor faktur seharusnya 1 sampai n tanpa loncat. Auditor menemukan tepat satu nomor hilang.",
  soal="Diberi list berisi n − 1 angka berbeda dari 1..n (urutan acak), buat <code>angka_hilang(data)</code> yang mengembalikan angka yang hilang.",
  solusi='''def angka_hilang(data):
    n = len(data) + 1
    return n * (n + 1) // 2 - sum(data)
''',
  tes=["angka_hilang([3, 1, 4, 5])", "angka_hilang([2])", "angka_hilang([1])", "angka_hilang([])", "angka_hilang(list(range(1, 1000)))"],
  cek={"angka_hilang([3, 1, 4, 5])": 2},
  petunjuk=["Berapa n? Panjang list ditambah 1.",
            "Jumlah 1..n = n × (n + 1) / 2 (rumus Gauss). Kurangi dengan jumlah isi list."],
  jelas="Rumus Gauss memberi O(n) tanpa sorting. Gunakan // agar hasilnya int. Cara lain: set(range(1, n + 1)) - set(data). Kasus [] berarti n = 1 dan yang hilang adalah 1.",
  kompleksitas="O(n)")

tantangan(id="top-k", judul="Produk terlaris Top-K", kategori="algo", tingkat=2, fungsi="top_k",
  soal="Diberi list nama produk dari setiap transaksi, buat <code>top_k(penjualan, k)</code> yang mengembalikan k nama produk paling sering terjual. Urutkan dari terbanyak; jika jumlahnya sama, urutkan <b>abjad</b>.",
  solusi='''from collections import Counter

def top_k(penjualan, k):
    hitung = Counter(penjualan)
    urut = sorted(hitung.items(), key=lambda p: (-p[1], p[0]))
    return [nama for nama, _ in urut[:k]]
''',
  tes=['top_k(["kopi", "teh", "kopi", "susu", "teh", "kopi"], 2)', 'top_k(["b", "a", "b", "a"], 1)', 'top_k([], 3)', 'top_k(["x"], 5)'],
  cek={'top_k(["kopi", "teh", "kopi", "susu", "teh", "kopi"], 2)': ["kopi", "teh"], 'top_k(["b", "a", "b", "a"], 1)': ["a"]},
  petunjuk=["Hitung dulu dengan Counter atau dict.",
            "Urutkan dengan key berupa tuple: (-jumlah, nama). Tanda minus membuat jumlah besar di depan, nama menjadi pemecah seri secara abjad."],
  jelas="Counter.most_common(k) tidak menjamin urutan abjad untuk jumlah yang sama, jadi soal ini sengaja meminta key tuple. Trik key=(-angka, teks) sangat berguna untuk pengurutan bertingkat.",
  kompleksitas="O(n log n)")

# ======================================================================
# C. LOGIKA BISNIS ALA ODOO (data berupa list of dict, seperti hasil search_read)
# ======================================================================
tantangan(id="odoo-subtotal", judul="Total quotation dengan diskon & pajak", kategori="odoo", tingkat=1, fungsi="total_order",
  cerita="Di Odoo, setiap baris Sales Order punya qty, harga satuan, dan diskon persen. <code>price_subtotal</code> = qty × harga × (1 − diskon/100), lalu pajak dihitung dari subtotal.",
  soal="Buat <code>total_order(baris, pajak_persen)</code> yang mengembalikan dict <code>{\"untaxed\": ..., \"pajak\": ..., \"total\": ...}</code>. Setiap baris adalah dict dengan kunci <code>qty</code>, <code>harga</code>, <code>diskon</code>. Bulatkan <b>setiap nilai</b> ke 2 desimal dengan <code>round(x, 2)</code>; pajak dihitung dari untaxed yang sudah dibulatkan, dan total = untaxed + pajak.",
  solusi='''def total_order(baris, pajak_persen):
    untaxed = round(sum(b["qty"] * b["harga"] * (1 - b["diskon"] / 100) for b in baris), 2)
    pajak = round(untaxed * pajak_persen / 100, 2)
    return {"untaxed": untaxed, "pajak": pajak, "total": round(untaxed + pajak, 2)}
''',
  tes=['total_order([{"qty": 2, "harga": 100000, "diskon": 10}, {"qty": 1, "harga": 50000, "diskon": 0}], 11)',
       'total_order([], 11)',
       'total_order([{"qty": 3, "harga": 19.99, "diskon": 5}], 7)',
       'total_order([{"qty": 1, "harga": 1000, "diskon": 100}], 11)'],
  cek={'total_order([{"qty": 2, "harga": 100000, "diskon": 10}, {"qty": 1, "harga": 50000, "diskon": 0}], 11)': {"untaxed": 230000.0, "pajak": 25300.0, "total": 255300.0}},
  petunjuk=["Subtotal satu baris = qty × harga × (1 − diskon / 100). Jumlahkan semua baris dengan sum(...).",
            "Bulatkan untaxed dulu, baru hitung pajak dari angka yang sudah dibulatkan, lalu bulatkan pajak dan total."],
  jelas="Ini meniru _compute_amounts di sale.order. Di Odoo sungguhan pembulatan memakai currency.round() sesuai mata uang, dan pajak bisa dihitung per baris atau global (pengaturan 'Rounding Method'). Urutan pembulatan memengaruhi hasil sen terakhir, jadi selalu tanyakan aturannya.",
  kompleksitas="O(n)")

tantangan(id="odoo-approval", judul="Status approval berdasarkan limit", kategori="odoo", tingkat=1, fungsi="status_setelah_confirm",
  cerita="Perusahaan memasang aturan: quotation di atas limit harus disetujui Amount Approver dulu (seperti modul <i>sale_amount_approval</i>). Limit 0 berarti fitur mati.",
  soal="Buat <code>status_setelah_confirm(total, limit, user_approver)</code> yang mengembalikan status baru: <code>\"to_approve\"</code> jika limit &gt; 0, total <b>lebih besar</b> dari limit, dan user bukan approver; selain itu <code>\"sale\"</code>.",
  solusi='''def status_setelah_confirm(total, limit, user_approver):
    if limit > 0 and total > limit and not user_approver:
        return "to_approve"
    return "sale"
''',
  tes=["status_setelah_confirm(5000, 1000, False)", "status_setelah_confirm(5000, 1000, True)", "status_setelah_confirm(1000, 1000, False)", "status_setelah_confirm(999999, 0, False)", "status_setelah_confirm(1000.01, 1000, False)"],
  cek={"status_setelah_confirm(5000, 1000, False)": "to_approve", "status_setelah_confirm(1000, 1000, False)": "sale"},
  petunjuk=["Tiga syarat harus benar SEMUA (and): limit aktif, total melewati limit, dan user bukan approver.",
            "'Lebih besar' artinya >, bukan >=. Total yang tepat sama dengan limit langsung dikonfirmasi."],
  jelas="Soal logika boolean seperti ini sering muncul sebagai pemanasan tes Odoo. Uji batasnya: total = limit, limit = 0, dan nilai desimal sedikit di atas limit.",
  kompleksitas="O(1)")

tantangan(id="odoo-domain", judul="Saring record dengan domain", kategori="odoo", tingkat=2, fungsi="saring",
  cerita="Odoo mencari record memakai <b>domain</b>: list berisi tuple <code>(field, operator, nilai)</code>. Semua tuple digabung dengan AND.",
  soal="Buat <code>saring(records, domain)</code>. <code>records</code> adalah list dict. Dukung operator <code>= != &gt; &gt;= &lt; &lt;= in not in</code>. Kembalikan list record yang memenuhi <b>semua</b> syarat, urutan tetap. Domain kosong mengembalikan semua record.",
  solusi='''import operator

OPERATOR = {
    "=": operator.eq, "!=": operator.ne, ">": operator.gt, ">=": operator.ge,
    "<": operator.lt, "<=": operator.le,
    "in": lambda a, b: a in b, "not in": lambda a, b: a not in b,
}

def saring(records, domain):
    return [r for r in records
            if all(OPERATOR[op](r.get(field), nilai) for field, op, nilai in domain)]
''',
  awal='''def saring(records, domain):
    # records: list of dict, domain: list of (field, operator, nilai)
    pass
''',
  tes=['saring([{"name": "SO1", "state": "sale", "amount": 500}, {"name": "SO2", "state": "draft", "amount": 900}, {"name": "SO3", "state": "sale", "amount": 1200}], [("state", "=", "sale"), ("amount", ">", 600)])',
       'saring([{"name": "SO1", "state": "sale"}, {"name": "SO2", "state": "cancel"}], [])',
       'saring([{"name": "A", "state": "draft"}, {"name": "B", "state": "sent"}, {"name": "C", "state": "sale"}], [("state", "in", ["draft", "sent"])])',
       'saring([{"name": "A", "state": "draft"}, {"name": "B", "state": "sent"}, {"name": "C", "state": "sale"}], [("state", "not in", ["draft", "sent"])])',
       'saring([{"name": "A", "qty": 0}, {"name": "B", "qty": 5}], [("qty", "<=", 0)])',
       'saring([{"name": "A", "qty": 3}], [("qty", "!=", 3)])'],
  cek={'saring([{"name": "SO1", "state": "sale"}, {"name": "SO2", "state": "cancel"}], [])': [{"name": "SO1", "state": "sale"}, {"name": "SO2", "state": "cancel"}]},
  petunjuk=["Buat dict yang memetakan teks operator ke fungsi pembanding, misalnya modul operator: operator.eq, operator.gt, ... Untuk in dan not in pakai lambda.",
            "Record lolos jika all(...) syarat benar. List comprehension [r for r in records if all(...)] membuat kodenya ringkas."],
  jelas="Inilah inti self.env['sale.order'].search([...]). Dict operator → fungsi menghindari rantai if-elif panjang dan mudah ditambah. all() pada domain kosong bernilai True, jadi semua record lolos, sama seperti search([]) di Odoo.",
  kompleksitas="O(n · jumlah syarat)")

tantangan(id="odoo-domain-polish", judul="Domain dengan '|' dan '!'", kategori="odoo", tingkat=3, fungsi="cocok",
  cerita="Domain Odoo memakai notasi prefiks (Polish): <code>'|'</code> = OR dan <code>'&amp;'</code> = AND untuk <b>dua</b> elemen berikutnya, <code>'!'</code> = NOT untuk <b>satu</b> elemen berikutnya. Tuple tanpa operator di depannya digabung dengan AND.",
  soal="Buat <code>cocok(record, domain)</code> yang mengembalikan True/False. Operator tuple cukup <code>= != &gt; &lt;</code>. Contoh: <code>['|', ('state', '=', 'draft'), ('state', '=', 'sent')]</code> berarti state draft ATAU sent.",
  solusi='''def cocok(record, domain):
    banding = {"=": lambda a, b: a == b, "!=": lambda a, b: a != b,
               ">": lambda a, b: a > b, "<": lambda a, b: a < b}
    tumpukan = []
    for item in reversed(domain):
        if item == "|":
            tumpukan.append(tumpukan.pop() or tumpukan.pop())
        elif item == "&":
            a, b = tumpukan.pop(), tumpukan.pop()
            tumpukan.append(a and b)
        elif item == "!":
            tumpukan.append(not tumpukan.pop())
        else:
            field, op, nilai = item
            tumpukan.append(banding[op](record.get(field), nilai))
    return all(tumpukan)
''',
  awal='''def cocok(record, domain):
    # domain contoh: ['|', ('state', '=', 'draft'), ('state', '=', 'sent')]
    pass
''',
  tes=['cocok({"state": "sent"}, ["|", ("state", "=", "draft"), ("state", "=", "sent")])',
       'cocok({"state": "sale"}, ["|", ("state", "=", "draft"), ("state", "=", "sent")])',
       'cocok({"state": "sale", "amount": 50}, [("state", "=", "sale"), ("amount", ">", 100)])',
       'cocok({"state": "cancel"}, ["!", ("state", "=", "cancel")])',
       'cocok({"a": 1, "b": 2, "c": 3}, ["|", ("a", "=", 9), "&", ("b", "=", 2), ("c", "=", 3)])',
       'cocok({"a": 1, "b": 2, "c": 3}, ["&", "|", ("a", "=", 9), ("b", "=", 9), ("c", "=", 3)])',
       'cocok({"x": 5}, [])',
       'cocok({"a": 1, "b": 2}, ["|", "!", ("a", "=", 1), ("b", "<", 3)])'],
  cek={'cocok({"state": "sent"}, ["|", ("state", "=", "draft"), ("state", "=", "sent")])': True, 'cocok({"state": "cancel"}, ["!", ("state", "=", "cancel")])': False},
  petunjuk=["Notasi prefiks paling mudah dievaluasi dari BELAKANG ke depan dengan stack: tuple → dorong True/False; operator → ambil operand dari stack, dorong hasilnya.",
            "'|' dan '&' mengambil 2 nilai, '!' mengambil 1. Di akhir, sisa nilai di stack digabung dengan AND (all), karena tuple tanpa operator = AND implisit."],
  jelas="Domain Odoo memang ditulis dalam Polish notation, dan pemahaman '|' sering ditanyakan: ['|', A, B, C] artinya (A OR B) AND C. Evaluasi dari belakang dengan stack adalah cara standar menghitung ekspresi prefiks.",
  kompleksitas="O(panjang domain)")

tantangan(id="odoo-read-group", judul="read_group: total per salesperson", kategori="odoo", tingkat=2, fungsi="total_per",
  soal="Buat <code>total_per(records, field_group, field_jumlah)</code> yang meniru <code>read_group</code>: kembalikan list dict <code>{field_group: nilai, field_jumlah: total, \"count\": banyak}</code>, diurutkan dari total <b>terbesar</b>. Jika total sama, urutkan berdasarkan nilai grup secara abjad.",
  solusi='''def total_per(records, field_group, field_jumlah):
    grup = {}
    for r in records:
        g = grup.setdefault(r[field_group], {field_group: r[field_group], field_jumlah: 0, "count": 0})
        g[field_jumlah] += r[field_jumlah]
        g["count"] += 1
    return sorted(grup.values(), key=lambda g: (-g[field_jumlah], g[field_group]))
''',
  tes=['total_per([{"user": "Ani", "amount": 300}, {"user": "Budi", "amount": 500}, {"user": "Ani", "amount": 400}], "user", "amount")',
       'total_per([], "user", "amount")',
       'total_per([{"tim": "B", "qty": 2}, {"tim": "A", "qty": 2}], "tim", "qty")'],
  cek={'total_per([{"user": "Ani", "amount": 300}, {"user": "Budi", "amount": 500}, {"user": "Ani", "amount": 400}], "user", "amount")': [{"user": "Ani", "amount": 700, "count": 2}, {"user": "Budi", "amount": 500, "count": 1}]},
  petunjuk=["Pakai dict yang kuncinya nilai grup (misalnya nama user). setdefault membuat entri baru bila belum ada.",
            "Untuk setiap record, tambahkan jumlah dan count. Lalu sorted(..., key=lambda g: (-total, nama))."],
  jelas="Di Odoo 17: self.env['sale.order'].read_group(domain, ['amount_total:sum'], ['user_id']) atau _read_group yang lebih baru. Pola 'kelompokkan dengan dict' adalah dasar semua laporan dan dashboard.",
  kompleksitas="O(n log n)")

tantangan(id="odoo-sequence", judul="Nomor urut berikutnya", kategori="odoo", tingkat=2, fungsi="nomor_berikutnya",
  cerita="ir.sequence membuat nomor seperti <code>S00042</code> atau <code>INV/2026/00017</code>: awalan tetap + angka berisi nol di depan (padding).",
  soal="Buat <code>nomor_berikutnya(nomor)</code> yang menaikkan bagian angka <b>di akhir</b> nomor sebanyak 1 dengan panjang padding yang sama. Jika angkanya melewati panjang padding, biarkan lebih panjang. Contoh <code>\"SO/2026/0099\"</code> → <code>\"SO/2026/0100\"</code>.",
  solusi='''import re

def nomor_berikutnya(nomor):
    m = re.search(r"(\\d+)$", nomor)
    angka = m.group(1)
    baru = str(int(angka) + 1).zfill(len(angka))
    return nomor[:m.start()] + baru
''',
  tes=['nomor_berikutnya("SO/2026/0099")', 'nomor_berikutnya("S00042")', 'nomor_berikutnya("INV/2026/9")', 'nomor_berikutnya("PO999")', 'nomor_berikutnya("WH/IN/00000")'],
  cek={'nomor_berikutnya("SO/2026/0099")': "SO/2026/0100", 'nomor_berikutnya("PO999")': "PO1000"},
  petunjuk=["Ambil angka di akhir string. Regex r\"(\\d+)$\" menangkap digit yang menempel di ujung. Perhatikan 2026 di tengah tidak boleh ikut berubah.",
            "Naikkan dengan int(...) + 1, lalu kembalikan nolnya dengan str(...).zfill(panjang_lama)."],
  jelas="zfill menambah nol di kiri sampai panjang tertentu, tetapi tidak memotong angka yang lebih panjang (999 → 1000). Odoo sendiri menyimpan nomor berikutnya (number_next) dan padding di record ir.sequence, bukan membaca nomor terakhir.",
  kompleksitas="O(panjang nomor)")

tantangan(id="odoo-stok", judul="Stok tersedia dari stock move", kategori="odoo", tingkat=2, fungsi="stok_tersedia",
  cerita="Stok di Odoo dihitung dari <b>stock.move</b>: barang masuk (in) menambah, barang keluar (out) mengurangi. Hanya move berstatus <code>done</code> yang dihitung sebagai stok on hand.",
  soal="Buat <code>stok_tersedia(moves)</code> yang mengembalikan dict <code>{produk: qty}</code> dari move berstatus <code>\"done\"</code>. Produk yang qty akhirnya 0 tetap ditampilkan.",
  solusi='''def stok_tersedia(moves):
    stok = {}
    for m in moves:
        if m["state"] != "done":
            continue
        tanda = 1 if m["tipe"] == "in" else -1
        stok[m["produk"]] = stok.get(m["produk"], 0) + tanda * m["qty"]
    return stok
''',
  tes=['stok_tersedia([{"produk": "Kursi", "tipe": "in", "qty": 10, "state": "done"}, {"produk": "Kursi", "tipe": "out", "qty": 3, "state": "done"}, {"produk": "Meja", "tipe": "in", "qty": 5, "state": "assigned"}])',
       'stok_tersedia([])',
       'stok_tersedia([{"produk": "A", "tipe": "in", "qty": 2, "state": "done"}, {"produk": "A", "tipe": "out", "qty": 2, "state": "done"}])',
       'stok_tersedia([{"produk": "A", "tipe": "out", "qty": 1, "state": "cancel"}, {"produk": "B", "tipe": "in", "qty": 7, "state": "done"}])'],
  cek={'stok_tersedia([{"produk": "Kursi", "tipe": "in", "qty": 10, "state": "done"}, {"produk": "Kursi", "tipe": "out", "qty": 3, "state": "done"}, {"produk": "Meja", "tipe": "in", "qty": 5, "state": "assigned"}])': {"Kursi": 7}},
  petunjuk=["Lewati (continue) move yang statusnya bukan done.",
            "Ubah tipe menjadi tanda +1 atau -1, lalu tambahkan ke dict dengan get(produk, 0)."],
  jelas="Meja tidak muncul karena move-nya belum done (masih reserved). Di Odoo, qty_available dihitung dari stock.quant, sedangkan virtual_available (forecast) ikut menghitung move yang belum selesai.",
  kompleksitas="O(n)")

tantangan(id="odoo-jatuh-tempo", judul="Tanggal jatuh tempo", kategori="odoo", tingkat=2, fungsi="jatuh_tempo",
  cerita="Payment term \"30 Days\" berarti faktur jatuh tempo 30 hari setelah tanggal faktur. Ada juga aturan \"akhir bulan\" (end of month).",
  soal="Buat <code>jatuh_tempo(tanggal, hari, akhir_bulan=False)</code>. <code>tanggal</code> berformat <code>\"YYYY-MM-DD\"</code>. Tambahkan <code>hari</code>; jika <code>akhir_bulan</code> True, geser hasilnya ke <b>tanggal terakhir di bulan itu</b>. Kembalikan string berformat sama.",
  solusi='''import calendar
from datetime import date, timedelta

def jatuh_tempo(tanggal, hari, akhir_bulan=False):
    d = date.fromisoformat(tanggal) + timedelta(days=hari)
    if akhir_bulan:
        d = d.replace(day=calendar.monthrange(d.year, d.month)[1])
    return d.isoformat()
''',
  tes=['jatuh_tempo("2026-11-24", 30)', 'jatuh_tempo("2026-12-15", 30)', 'jatuh_tempo("2028-02-10", 5, True)', 'jatuh_tempo("2026-01-31", 0, True)', 'jatuh_tempo("2026-11-24", 0)', 'jatuh_tempo("2027-02-01", 15, True)'],
  cek={'jatuh_tempo("2026-11-24", 30)': "2026-12-24", 'jatuh_tempo("2028-02-10", 5, True)': "2028-02-29"},
  petunjuk=["date.fromisoformat(\"2026-11-24\") mengubah teks jadi tanggal; timedelta(days=30) menambah hari dengan benar melewati akhir bulan/tahun.",
            "calendar.monthrange(tahun, bulan)[1] memberi jumlah hari di bulan itu (memperhitungkan tahun kabisat). Lalu d.replace(day=...)."],
  jelas="Jangan menghitung tanggal dengan menambah angka hari secara manual; pustaka datetime sudah menangani pergantian bulan, tahun, dan kabisat (2028 kabisat, Februari 29 hari). Di Odoo 17 logika ini ada di account.payment.term.line (_get_due_date).",
  kompleksitas="O(1)")

tantangan(id="odoo-pricelist", judul="Harga pricelist bertingkat", kategori="odoo", tingkat=2, fungsi="harga_pricelist",
  cerita="Pricelist bisa memberi harga berbeda menurut jumlah minimum (min_quantity). Aturan yang dipakai adalah aturan dengan min_quantity <b>terbesar</b> yang masih ≤ qty pesanan.",
  soal="Buat <code>harga_pricelist(qty, harga_dasar, aturan)</code>. <code>aturan</code> adalah list dict <code>{\"min_qty\": ..., \"diskon\": persen}</code> (urutan acak). Kembalikan harga satuan setelah diskon dari aturan yang berlaku, dibulatkan 2 desimal. Jika tidak ada aturan yang berlaku, pakai harga dasar.",
  solusi='''def harga_pricelist(qty, harga_dasar, aturan):
    berlaku = [a for a in aturan if a["min_qty"] <= qty]
    if not berlaku:
        return round(harga_dasar, 2)
    pilih = max(berlaku, key=lambda a: a["min_qty"])
    return round(harga_dasar * (1 - pilih["diskon"] / 100), 2)
''',
  tes=['harga_pricelist(25, 10000, [{"min_qty": 10, "diskon": 5}, {"min_qty": 50, "diskon": 15}, {"min_qty": 20, "diskon": 10}])',
       'harga_pricelist(5, 10000, [{"min_qty": 10, "diskon": 5}])',
       'harga_pricelist(50, 10000, [{"min_qty": 10, "diskon": 5}, {"min_qty": 50, "diskon": 15}])',
       'harga_pricelist(3, 99.99, [])',
       'harga_pricelist(10, 33.33, [{"min_qty": 1, "diskon": 12.5}])'],
  cek={'harga_pricelist(25, 10000, [{"min_qty": 10, "diskon": 5}, {"min_qty": 50, "diskon": 15}, {"min_qty": 20, "diskon": 10}])': 9000.0},
  petunjuk=["Saring dulu aturan yang min_qty <= qty.",
            "Dari yang lolos, ambil yang min_qty-nya terbesar: max(berlaku, key=lambda a: a[\"min_qty\"]). Tangani kasus tidak ada aturan yang lolos."],
  jelas="max() dengan key mengembalikan ITEM-nya, bukan nilai key-nya, jadi kamu langsung dapat dict aturan. Di Odoo 17 urutan pemilihan aturan pricelist juga memperhitungkan produk/kategori dan tanggal; soal ini fokus ke min_quantity.",
  kompleksitas="O(jumlah aturan)")

tantangan(id="odoo-top-customer", judul="Pelanggan teratas (mapped & sorted)", kategori="odoo", tingkat=2, fungsi="pelanggan_teratas",
  soal="Diberi list order <code>{\"partner\": nama, \"state\": ..., \"amount_total\": ...}</code>, buat <code>pelanggan_teratas(orders, n)</code> yang mengembalikan n nama pelanggan dengan total belanja terbesar, <b>hanya dari order berstatus <code>\"sale\"</code> atau <code>\"done\"</code></b>. Urutkan total terbesar dulu; seri diurutkan abjad.",
  solusi='''def pelanggan_teratas(orders, n):
    total = {}
    for o in orders:
        if o["state"] in ("sale", "done"):
            total[o["partner"]] = total.get(o["partner"], 0) + o["amount_total"]
    urut = sorted(total, key=lambda p: (-total[p], p))
    return urut[:n]
''',
  tes=['pelanggan_teratas([{"partner": "PT A", "state": "sale", "amount_total": 500}, {"partner": "PT B", "state": "draft", "amount_total": 9000}, {"partner": "PT C", "state": "done", "amount_total": 700}, {"partner": "PT A", "state": "sale", "amount_total": 300}], 2)',
       'pelanggan_teratas([], 3)',
       'pelanggan_teratas([{"partner": "Z", "state": "sale", "amount_total": 10}, {"partner": "Y", "state": "sale", "amount_total": 10}], 1)',
       'pelanggan_teratas([{"partner": "X", "state": "cancel", "amount_total": 10}], 1)'],
  cek={'pelanggan_teratas([{"partner": "PT A", "state": "sale", "amount_total": 500}, {"partner": "PT B", "state": "draft", "amount_total": 9000}, {"partner": "PT C", "state": "done", "amount_total": 700}, {"partner": "PT A", "state": "sale", "amount_total": 300}], 2)': ["PT A", "PT C"]},
  petunjuk=["Langkah 1 = filtered (ambil state sale/done). Langkah 2 = jumlahkan per partner dengan dict. Langkah 3 = sorted.",
            "sorted(total, key=lambda p: (-total[p], p)) mengurutkan KUNCI dict berdasarkan nilainya; lalu potong [:n]."],
  jelas="Padanan Odoo: orders.filtered(lambda o: o.state in ('sale', 'done')), lalu kelompokkan berdasarkan partner_id. PT B tidak masuk walaupun angkanya besar, karena masih draft (quotation belum menjadi penjualan).",
  kompleksitas="O(n log n)")

tantangan(id="odoo-onchange-diskon", judul="Validasi diskon (constraint)", kategori="odoo", tingkat=2, fungsi="cek_baris",
  cerita="Di Odoo, @api.constrains memunculkan ValidationError bila data tidak valid. Di soal ini kita mengembalikan daftar pesan error sebagai gantinya.",
  soal="Buat <code>cek_baris(baris, diskon_maks)</code>. Untuk setiap baris (dict dengan <code>produk</code>, <code>qty</code>, <code>diskon</code>), kumpulkan pesan: <code>\"&lt;produk&gt;: qty harus lebih dari 0\"</code> jika qty ≤ 0, dan <code>\"&lt;produk&gt;: diskon melebihi &lt;diskon_maks&gt;%\"</code> jika diskon &gt; diskon_maks. Kembalikan list pesan sesuai urutan baris (pesan qty dulu, lalu diskon).",
  solusi='''def cek_baris(baris, diskon_maks):
    pesan = []
    for b in baris:
        if b["qty"] <= 0:
            pesan.append(f"{b['produk']}: qty harus lebih dari 0")
        if b["diskon"] > diskon_maks:
            pesan.append(f"{b['produk']}: diskon melebihi {diskon_maks}%")
    return pesan
''',
  tes=['cek_baris([{"produk": "Laptop", "qty": 1, "diskon": 30}, {"produk": "Mouse", "qty": 0, "diskon": 0}], 20)',
       'cek_baris([], 20)',
       'cek_baris([{"produk": "Kabel", "qty": -2, "diskon": 50}], 10)',
       'cek_baris([{"produk": "Tas", "qty": 3, "diskon": 20}], 20)'],
  cek={'cek_baris([], 20)': []},
  petunjuk=["Dua if terpisah (bukan elif), karena satu baris bisa punya dua kesalahan sekaligus.",
            "Gunakan f-string: f\"{b['produk']}: qty harus lebih dari 0\". Perhatikan kutip di dalam f-string harus berbeda dengan kutip luarnya."],
  jelas="Pada model Odoo: @api.constrains('discount') def _cek_diskon(self): for line in self: if line.discount > 20: raise ValidationError(...). Constraint selalu ditulis dengan for line in self karena self bisa berisi banyak record.",
  kompleksitas="O(n)")

# ======================================================================
# D. OTOMASI & DATA (relevan untuk perusahaan RPA)
# ======================================================================
tantangan(id="rpa-email", judul="Ambil semua email dari teks", kategori="otomasi", tingkat=2, fungsi="ambil_email",
  cerita="Robot RPA membaca isi email masuk dan perlu mengambil semua alamat email untuk dimasukkan ke CRM.",
  soal="Buat <code>ambil_email(teks)</code> yang mengembalikan list alamat email unik dalam huruf kecil, urut sesuai kemunculan pertama. Anggap email berbentuk <code>nama@domain.tld</code> dengan nama berisi huruf, angka, titik, garis bawah, plus, atau minus.",
  solusi='''import re

def ambil_email(teks):
    hasil = []
    for e in re.findall(r"[\\w.+-]+@[\\w-]+(?:\\.[\\w-]+)+", teks):
        e = e.lower()
        if e not in hasil:
            hasil.append(e)
    return hasil
''',
  tes=['ambil_email("Hubungi Sales@Contoh.co.id atau support@contoh.com. CC: sales@contoh.co.id")',
       'ambil_email("tidak ada email di sini")',
       'ambil_email("a.b+tag@mail-server.org, x_y@z.io")'],
  cek={'ambil_email("tidak ada email di sini")': []},
  petunjuk=["re.findall(pola, teks) mengembalikan semua potongan yang cocok.",
            "Pola sederhana: r\"[\\w.+-]+@[\\w-]+(?:\\.[\\w-]+)+\". (?:...) adalah grup yang tidak ditangkap, jadi findall tetap mengembalikan seluruh email."],
  jelas="Hati-hati: kalau pola memakai grup biasa (...), findall hanya mengembalikan isi grupnya. Itu sebabnya dipakai (?:...). Titik di akhir kalimat tidak ikut karena setelah titik tidak ada huruf.",
  kompleksitas="O(n)")

tantangan(id="rpa-csv", judul="Ringkas CSV penjualan", kategori="otomasi", tingkat=2, fungsi="ringkas_csv",
  soal="Buat <code>ringkas_csv(teks_csv)</code>. Baris pertama adalah header <code>kategori,qty,harga</code>. Kembalikan dict <code>{kategori: total_penjualan}</code> dengan total = jumlah qty × harga, dibulatkan 2 desimal. Gunakan modul <code>csv</code> (nilai bisa berada di dalam tanda kutip dan berisi koma).",
  solusi='''import csv, io

def ringkas_csv(teks_csv):
    total = {}
    for baris in csv.DictReader(io.StringIO(teks_csv)):
        nilai = int(baris["qty"]) * float(baris["harga"])
        total[baris["kategori"]] = round(total.get(baris["kategori"], 0) + nilai, 2)
    return total
''',
  tes=['ringkas_csv("kategori,qty,harga\\nATK,2,5000\\nElektronik,1,250000\\nATK,3,1500.5")',
       'ringkas_csv("kategori,qty,harga\\n")',
       'ringkas_csv("kategori,qty,harga\\n\\"Meja, Kursi\\",2,100")'],
  cek={'ringkas_csv("kategori,qty,harga\\nATK,2,5000\\nElektronik,1,250000\\nATK,3,1500.5")': {"ATK": 14501.5, "Elektronik": 250000.0}},
  petunjuk=["csv.DictReader membaca setiap baris sebagai dict berdasarkan header. Teks biasa bisa dibungkus io.StringIO(teks) supaya terbaca seperti file.",
            "Nilai dari CSV selalu string: ubah dengan int() dan float() sebelum dikalikan."],
  jelas="split(',') akan rusak untuk \"Meja, Kursi\" yang berisi koma di dalam kutip; modul csv menanganinya dengan benar. Di dunia RPA dan impor data Odoo, file CSV/Excel adalah makanan sehari-hari.",
  kompleksitas="O(n)")

tantangan(id="rpa-tanggal", judul="Ubah format tanggal", kategori="otomasi", tingkat=1, fungsi="ke_iso",
  soal="Buat <code>ke_iso(tanggal)</code> yang mengubah tanggal berformat Indonesia <code>\"DD/MM/YYYY\"</code> menjadi <code>\"YYYY-MM-DD\"</code> (format yang diterima Odoo). Jika tanggal tidak valid (misalnya 31/02/2026), kembalikan <code>None</code>.",
  solusi='''from datetime import datetime

def ke_iso(tanggal):
    try:
        return datetime.strptime(tanggal, "%d/%m/%Y").strftime("%Y-%m-%d")
    except ValueError:
        return None
''',
  tes=['ke_iso("24/11/2026")', 'ke_iso("31/02/2026")', 'ke_iso("1/2/2026")', 'ke_iso("2026-11-24")', 'ke_iso("29/02/2028")'],
  cek={'ke_iso("24/11/2026")': "2026-11-24", 'ke_iso("31/02/2026")': None},
  petunjuk=["datetime.strptime(teks, \"%d/%m/%Y\") membaca teks menjadi tanggal; strftime(\"%Y-%m-%d\") menulisnya kembali.",
            "strptime melempar ValueError kalau tanggal tidak valid. Tangkap dengan try/except dan kembalikan None."],
  jelas="Memotong string dengan split('/') lalu menyusun ulang tidak akan mendeteksi 31/02. Biarkan pustaka datetime yang memvalidasi. strptime juga menerima '1/2/2026' tanpa nol di depan.",
  kompleksitas="O(1)")

tantangan(id="rpa-telepon", judul="Normalisasi nomor telepon", kategori="otomasi", tingkat=2, fungsi="normalisasi_hp",
  cerita="Data kontak dari berbagai sumber ditulis berbeda-beda. Sebelum diimpor ke Odoo, nomor harus seragam berformat internasional.",
  soal="Buat <code>normalisasi_hp(nomor)</code>: buang semua karakter selain angka (tetapi ingat apakah diawali <code>+</code>). Jika diawali <code>0</code>, ganti 0 dengan <code>62</code>. Jika sudah diawali <code>62</code>, biarkan. Hasil diberi awalan <code>+</code>. Jika setelah dibersihkan panjang angkanya kurang dari 10 atau lebih dari 15, kembalikan <code>None</code>.",
  solusi='''import re

def normalisasi_hp(nomor):
    angka = re.sub(r"\\D", "", nomor)
    if angka.startswith("0"):
        angka = "62" + angka[1:]
    if not angka.startswith("62") or not 10 <= len(angka) <= 15:
        return None
    return "+" + angka
''',
  tes=['normalisasi_hp("0812-3456-7890")', 'normalisasi_hp("+62 812 3456 7890")', 'normalisasi_hp("(0274) 512345")', 'normalisasi_hp("0812")', 'normalisasi_hp("62 811 222 333")', 'normalisasi_hp("+1 415 555 0100")'],
  cek={'normalisasi_hp("0812-3456-7890")': "+6281234567890", 'normalisasi_hp("0812")': None},
  petunjuk=["re.sub(r\"\\D\", \"\", nomor) membuang semua yang bukan digit (\\D = bukan digit).",
            "Setelah bersih: awalan 0 → 62. Lalu cek harus diawali 62 dan panjangnya 10–15 digit. Nomor luar negeri (+1 ...) dianggap tidak valid di soal ini."],
  jelas="Normalisasi data sebelum impor mencegah kontak ganda di CRM. Urutan langkahnya: bersihkan, ubah awalan, lalu validasi. Batas panjang 10–15 mengikuti standar E.164 (maksimal 15 digit).",
  kompleksitas="O(n)")

tantangan(id="rpa-log", judul="Error terbanyak di log", kategori="otomasi", tingkat=2, fungsi="error_terbanyak",
  cerita="Robot otomasi menulis log seperti <code>2026-11-24 10:01:22 ERROR [E102] Timeout saat login</code>. Tim ingin tahu kode error yang paling sering muncul.",
  soal="Buat <code>error_terbanyak(log)</code>. <code>log</code> adalah satu string berisi banyak baris. Hitung hanya baris berlevel <code>ERROR</code>, ambil kode di dalam kurung siku. Kembalikan tuple <code>(kode, jumlah)</code> untuk kode terbanyak; jika seri, kode terkecil secara abjad. Jika tidak ada error, kembalikan <code>None</code>.",
  solusi='''import re
from collections import Counter

def error_terbanyak(log):
    kode = re.findall(r"\\bERROR \\[(\\w+)\\]", log)
    if not kode:
        return None
    hitung = Counter(kode)
    return min(hitung.items(), key=lambda p: (-p[1], p[0]))
''',
  tes=['error_terbanyak("2026-11-24 10:01 ERROR [E102] Timeout\\n2026-11-24 10:02 INFO [I001] OK\\n2026-11-24 10:03 ERROR [E102] Timeout\\n2026-11-24 10:04 ERROR [E201] Captcha")',
       'error_terbanyak("2026-11-24 10:02 INFO [I001] OK")',
       'error_terbanyak("x ERROR [B2] a\\ny ERROR [A1] b")',
       'error_terbanyak("")'],
  cek={'error_terbanyak("2026-11-24 10:02 INFO [I001] OK")': None},
  petunjuk=["Regex dengan satu grup tangkap: r\"\\bERROR \\[(\\w+)\\]\". findall lalu mengembalikan isi grup saja, yaitu kodenya.",
            "Hitung dengan Counter, lalu pilih dengan min(..., key=lambda p: (-jumlah, kode)) agar seri jatuh ke abjad terkecil."],
  jelas="Kurung siku adalah karakter khusus di regex, jadi harus di-escape: \\[ dan \\]. Analisis log seperti ini adalah pekerjaan rutin di tim RPA untuk menemukan bot yang sering gagal.",
  kompleksitas="O(n)")

tantangan(id="rpa-json", judul="Olah respons JSON API", kategori="otomasi", tingkat=2, fungsi="ringkas_json",
  cerita="Odoo dan banyak layanan mengirim data lewat API dalam format JSON. Kamu menerima daftar invoice dari API.",
  soal="Buat <code>ringkas_json(teks)</code>. <code>teks</code> adalah string JSON berbentuk <code>{\"invoices\": [{\"number\": ..., \"state\": ..., \"amount\": ...}, ...]}</code>. Kembalikan dict <code>{\"jumlah\": banyak invoice posted, \"total\": total amount posted (2 desimal), \"nomor\": list nomor posted terurut}</code>.",
  solusi='''import json

def ringkas_json(teks):
    data = json.loads(teks)
    posted = [i for i in data.get("invoices", []) if i.get("state") == "posted"]
    return {
        "jumlah": len(posted),
        "total": round(sum(i["amount"] for i in posted), 2),
        "nomor": sorted(i["number"] for i in posted),
    }
''',
  tes=['ringkas_json(\'{"invoices": [{"number": "INV/2026/0002", "state": "posted", "amount": 150.5}, {"number": "INV/2026/0001", "state": "posted", "amount": 99.5}, {"number": "INV/2026/0003", "state": "draft", "amount": 10}]}\')',
       'ringkas_json(\'{"invoices": []}\')',
       'ringkas_json(\'{}\')'],
  cek={'ringkas_json(\'{"invoices": []}\')': {"jumlah": 0, "total": 0, "nomor": []}},
  petunjuk=["json.loads(teks) mengubah string JSON menjadi dict/list Python.",
            "Pakai .get(\"invoices\", []) supaya JSON tanpa kunci invoices tidak menyebabkan KeyError."],
  jelas="Selalu siap menghadapi data yang tidak lengkap dari API: .get() dengan nilai bawaan lebih aman daripada data[\"kunci\"]. sum dari list kosong = 0, dan round(0, 2) = 0.",
  kompleksitas="O(n log n)")

# ======================================================================
# E. OOP (class, inheritance, exception): bekal sebelum menulis model Odoo
# ======================================================================
tantangan(id="oop-rekening", judul="Class Rekening", kategori="oop", tingkat=2, fungsi="Rekening",
  soal="Buat class <code>Rekening</code> dengan <code>__init__(self, pemilik, saldo=0)</code>, method <code>setor(jumlah)</code> dan <code>tarik(jumlah)</code> yang mengembalikan saldo baru, serta atribut <code>saldo</code>. Jumlah ≤ 0 melempar <code>ValueError</code>. Penarikan melebihi saldo juga melempar <code>ValueError</code> dan saldo tidak berubah.",
  solusi='''class Rekening:
    def __init__(self, pemilik, saldo=0):
        self.pemilik = pemilik
        self.saldo = saldo

    def setor(self, jumlah):
        if jumlah <= 0:
            raise ValueError("Jumlah harus lebih dari 0")
        self.saldo += jumlah
        return self.saldo

    def tarik(self, jumlah):
        if jumlah <= 0:
            raise ValueError("Jumlah harus lebih dari 0")
        if jumlah > self.saldo:
            raise ValueError("Saldo tidak cukup")
        self.saldo -= jumlah
        return self.saldo
''',
  awal='''class Rekening:
    def __init__(self, pemilik, saldo=0):
        pass

    def setor(self, jumlah):
        pass

    def tarik(self, jumlah):
        pass
''',
  tes=['Rekening("Ani", 100).setor(50)',
       'r = Rekening("Budi", 100)\nr.tarik(30)\nhasil = r.saldo',
       'r = Rekening("Cita", 100)\ntry:\n    r.tarik(500)\n    hasil = "tidak error"\nexcept ValueError:\n    hasil = ("ValueError", r.saldo)',
       'r = Rekening("Dodi")\ntry:\n    r.setor(0)\n    hasil = "tidak error"\nexcept ValueError:\n    hasil = "ValueError"',
       'r = Rekening("Eka")\nr.setor(10)\nr.setor(5)\nhasil = (r.pemilik, r.saldo)'],
  cek={'Rekening("Ani", 100).setor(50)': 150},
  petunjuk=["Simpan data di self: self.pemilik = pemilik dan self.saldo = saldo.",
            "Validasi dulu, baru ubah saldo. raise ValueError(\"pesan\") menghentikan method sebelum saldo berubah."],
  jelas="Urutan 'validasi dulu, ubah belakangan' menjaga data tetap konsisten. Ini sama dengan pola Odoo: raise UserError sebelum write(). Tes ketiga memastikan saldo tetap 100 setelah penarikan gagal.",
  kompleksitas="O(1) per operasi")

tantangan(id="oop-keranjang", judul="Class Keranjang belanja", kategori="oop", tingkat=2, fungsi="Keranjang",
  soal="Buat class <code>Keranjang</code> dengan method <code>tambah(produk, harga, qty=1)</code> (produk yang sama menambah qty), <code>hapus(produk)</code> (abaikan jika tidak ada), <code>total(diskon_persen=0)</code> yang mengembalikan total setelah diskon dibulatkan 2 desimal, dan <code>__len__</code> yang mengembalikan jumlah qty semua barang.",
  solusi='''class Keranjang:
    def __init__(self):
        self.isi = {}

    def tambah(self, produk, harga, qty=1):
        if produk in self.isi:
            self.isi[produk]["qty"] += qty
        else:
            self.isi[produk] = {"harga": harga, "qty": qty}

    def hapus(self, produk):
        self.isi.pop(produk, None)

    def total(self, diskon_persen=0):
        kotor = sum(b["harga"] * b["qty"] for b in self.isi.values())
        return round(kotor * (1 - diskon_persen / 100), 2)

    def __len__(self):
        return sum(b["qty"] for b in self.isi.values())
''',
  awal='''class Keranjang:
    def __init__(self):
        pass

    def tambah(self, produk, harga, qty=1):
        pass

    def hapus(self, produk):
        pass

    def total(self, diskon_persen=0):
        pass

    def __len__(self):
        pass
''',
  tes=['k = Keranjang()\nk.tambah("Kopi", 20000, 2)\nk.tambah("Roti", 15000)\nhasil = (k.total(), len(k))',
       'k = Keranjang()\nk.tambah("Kopi", 20000)\nk.tambah("Kopi", 20000, 2)\nhasil = (k.total(10), len(k))',
       'k = Keranjang()\nk.tambah("A", 100)\nk.hapus("A")\nk.hapus("tidak ada")\nhasil = (k.total(), len(k))',
       'k = Keranjang()\nhasil = (k.total(50), len(k))'],
  cek={'k = Keranjang()\nk.tambah("Kopi", 20000, 2)\nk.tambah("Roti", 15000)\nhasil = (k.total(), len(k))': (55000, 3)},
  petunjuk=["Simpan isi keranjang di dict self.isi = {nama: {\"harga\": ..., \"qty\": ...}} yang dibuat di __init__.",
            "dict.pop(kunci, None) menghapus tanpa error bila kunci tidak ada. __len__ membuat len(k) bisa dipakai."],
  jelas="Method khusus (dunder) seperti __len__ membuat objek buatanmu terasa seperti tipe bawaan Python. Recordset Odoo juga memakai ini: len(orders) memberi jumlah record.",
  kompleksitas="O(n) untuk total")

tantangan(id="oop-warisan", judul="Inheritance & super()", kategori="oop", tingkat=2, fungsi="Manajer",
  cerita="Pewarisan class Python adalah dasar dari <code>_inherit</code> di Odoo: class anak memakai ulang perilaku induk lalu menambahkan sesuatu lewat <code>super()</code>.",
  soal="Sudah ada class <code>Karyawan</code> (jangan diubah). Buat class <code>Manajer(Karyawan)</code> yang menerima tambahan <code>tim</code> (list nama). Override <code>gaji_bulanan()</code>: gaji induk <b>ditambah</b> tunjangan 500.000 per anggota tim. Override <code>info()</code> agar menambahkan <code>\" | tim: N orang\"</code> di belakang info induk.",
  solusi='''class Karyawan:
    def __init__(self, nama, gaji_pokok):
        self.nama = nama
        self.gaji_pokok = gaji_pokok

    def gaji_bulanan(self):
        return self.gaji_pokok

    def info(self):
        return f"{self.nama}: {self.gaji_bulanan()}"


class Manajer(Karyawan):
    def __init__(self, nama, gaji_pokok, tim):
        super().__init__(nama, gaji_pokok)
        self.tim = tim

    def gaji_bulanan(self):
        return super().gaji_bulanan() + 500000 * len(self.tim)

    def info(self):
        return super().info() + f" | tim: {len(self.tim)} orang"
''',
  awal='''class Karyawan:
    def __init__(self, nama, gaji_pokok):
        self.nama = nama
        self.gaji_pokok = gaji_pokok

    def gaji_bulanan(self):
        return self.gaji_pokok

    def info(self):
        return f"{self.nama}: {self.gaji_bulanan()}"


class Manajer(Karyawan):
    pass
''',
  tes=['Manajer("Rina", 8000000, ["Ani", "Budi"]).gaji_bulanan()',
       'Manajer("Rina", 8000000, ["Ani", "Budi"]).info()',
       'Manajer("Sari", 7000000, []).info()',
       'isinstance(Manajer("X", 1, []), Karyawan)',
       'Karyawan("Tono", 5000000).info()'],
  cek={'Manajer("Rina", 8000000, ["Ani", "Budi"]).gaji_bulanan()': 9000000, 'Manajer("Rina", 8000000, ["Ani", "Budi"]).info()': "Rina: 9000000 | tim: 2 orang"},
  petunjuk=["Di __init__ anak, panggil super().__init__(nama, gaji_pokok) dulu, lalu simpan self.tim.",
            "Di gaji_bulanan anak: return super().gaji_bulanan() + 500000 * len(self.tim). info() induk otomatis memakai gaji_bulanan() versi anak."],
  jelas="Perhatikan info(): method induk memanggil self.gaji_bulanan(), dan karena self adalah Manajer, yang terpanggil versi anak (polimorfisme). Di Odoo polanya sama persis: def action_confirm(self): res = super().action_confirm(); ...; return res.",
  kompleksitas="O(1)")


# ======================================================================
# Pemeriksa & pembuat file JS
# ======================================================================
KATEGORI = {
    "dasar": "Dasar Python", "algo": "Algoritma & Struktur Data", "oop": "OOP & Exception",
    "odoo": "Logika Bisnis ala Odoo", "otomasi": "Otomasi & Data (RPA)",
}
KATA_KUNCI = {"def", "class", "for", "while", "if", "elif", "else", "return", "try", "except", "with", "import", "from"}


STUDI = []
def studi(**kw): STUDI.append(kw)

# Isi studi kasus ada di file terpisah supaya file ini tidak terlalu panjang.
# Dibaca dengan exec karena python -I tidak menaruh folder skrip di sys.path.
_DIR = os.path.dirname(os.path.abspath(__file__))
for _f in ("lab-studi-python.py", "lab-studi-python-2.py", "lab-studi-ct.py", "lab-ujian.py",
           "lab-studi-html.py", "lab-studi-css.py", "lab-studi-js.py", "lab-studi-sql.py"):
    _p = os.path.join(_DIR, _f)
    if os.path.exists(_p):
        exec(compile(open(_p, encoding="utf-8").read(), _p, "exec"), globals())


def jalankan_tes(kode, tes, pre=""):
    """Sama dengan penilai di browser: kode dijalankan ulang di namespace baru untuk setiap tes."""
    ns = {"__name__": "__kq__"}
    if pre:
        exec(pre, ns)
    exec(kode, ns)
    if "\n" in tes or tes.startswith("hasil ="):
        exec(tes, ns)
        return ns["hasil"]
    return eval(tes, ns)


def sama(a, b):
    if isinstance(a, float) or isinstance(b, float):
        return isinstance(a, (int, float)) and isinstance(b, (int, float)) and not isinstance(a, bool) and math.isclose(a, b, rel_tol=1e-9, abs_tol=1e-6)
    if type(a) is not type(b):
        return False
    if isinstance(a, (list, tuple)):
        return len(a) == len(b) and all(sama(x, y) for x, y in zip(a, b))
    if isinstance(a, dict):
        return a.keys() == b.keys() and all(sama(a[k], b[k]) for k in a)
    return a == b


def kerangka(kode):
    """Petunjuk ke-3: struktur solusi dengan isi baris dikosongkan."""
    baris = []
    for b in kode.rstrip().split("\n"):
        if not b.strip():
            baris.append("")
            continue
        indent = b[: len(b) - len(b.lstrip())]
        kata = re.match(r"[A-Za-z_]+", b.strip())
        kata = kata.group(0) if kata else ""
        if kata in ("def", "class", "import", "from"):
            baris.append(b)
        elif kata in KATA_KUNCI:
            baris.append(indent + kata + (" …:" if b.rstrip().endswith(":") and kata not in ("else", "try") else ":" if kata in ("else", "try") else " …"))
        else:
            baris.append(indent + "…")
    return "\n".join(baris)


def awal_otomatis(t):
    m = re.search(rf"^def {re.escape(t['fungsi'])}\(.*\):$", t["solusi"], re.M)
    if not m:
        raise SystemExit(f"{t['id']}: tidak ada def {t['fungsi']}, tulis 'awal' manual")
    return m.group(0) + "\n    # tulis kodemu di sini\n    pass\n"


MASALAH = [0]
def salah(m):
    print("✗ " + m); MASALAH[0] += 1


def olah(t, studi_id=None):
    """Uji satu tantangan, kembalikan versi JSON-nya."""
    nama = f"{studi_id + '/' if studi_id else ''}{t['id']}"
    if not studi_id:
        assert t["kategori"] in KATEGORI, nama
    if t.get("bahasa", "py") != "py":
        return olah_lain(t, nama)
    assert t["tingkat"] in (1, 2, 3), nama
    assert len(t["petunjuk"]) == 2 and t["jelas"] and len(t["tes"]) >= 3, nama
    pre = t.get("pre", "")
    awal = t.get("awal") or awal_otomatis(t)
    hasil_tes = []
    for ekspr in t["tes"]:
        try:
            h = jalankan_tes(t["solusi"], ekspr, pre)
        except Exception as e:
            salah(f"{nama}: solusi acuan error pada {ekspr!r}: {type(e).__name__}: {e}"); continue
        r = repr(h)
        try:
            ok = sama(ast.literal_eval(r), h)
        except Exception:
            ok = False
        if not ok:
            salah(f"{nama}: hasil {r} tidak bisa ditulis ulang sebagai literal"); continue
        if ekspr in t.get("cek", {}) and not sama(h, t["cek"][ekspr]):
            salah(f"{nama}: {ekspr} → {r}, seharusnya {t['cek'][ekspr]!r}")
        hasil_tes.append([ekspr, r])
    for k in t.get("cek", {}):
        if k not in t["tes"]:
            salah(f"{nama}: cek {k!r} tidak ada di daftar tes")
    lulus_awal = 0
    for ekspr, r in hasil_tes:
        try:
            if sama(jalankan_tes(awal, ekspr, pre), ast.literal_eval(r)):
                lulus_awal += 1
        except Exception:
            pass
    if hasil_tes and lulus_awal == len(hasil_tes):
        salah(f"{nama}: kode awal sudah lulus semua tes")
    return {
        "id": t["id"], "judul": t["judul"], "kategori": t.get("kategori", "studi"), "tingkat": t["tingkat"],
        "fungsi": t["fungsi"], "cerita": t.get("cerita", ""), "soal": t["soal"], "awal": awal,
        "solusi": t["solusi"], "jelas": t["jelas"], "kompleksitas": t.get("kompleksitas", ""),
        "petunjuk": t["petunjuk"] + ["Kerangka solusinya:\n" + kerangka(t["solusi"])],
        "tes": hasil_tes, "contoh": t.get("contoh", 2 if len(hasil_tes) >= 4 else 1), "pre": pre, "awal_baru": t.get("awal_baru", ""),
    }


def node_js(kode, tes, pre=""):
    import subprocess
    p = subprocess.run(["node", os.path.join(_DIR, "uji-js.js")], input=json.dumps({"kode": kode, "pre": pre, "tes": tes}),
                       capture_output=True, text=True, encoding="utf-8", timeout=60)
    if p.returncode:
        raise RuntimeError(p.stderr[-400:])
    return json.loads(p.stdout)


def olah_lain(t, nama):
    """JavaScript: jawaban diharapkan dihitung Node dari solusi acuan, kode awal harus gagal.
    HTML/CSS (web) dan SQL: dinilai di browser; kebenarannya dicek plUjiSemua() di js/fitur/py-lab.js."""
    b = t["bahasa"]
    assert b in ("js", "web", "sql") and t["tingkat"] in (1, 2, 3) and len(t["petunjuk"]) == 2 and t["jelas"], nama
    tes = t.get("tes", [])
    if b == "js":
        assert len(tes) >= 3, nama
        r = node_js(t["solusi"], tes, t.get("pre", ""))
        hasil_tes = []
        for ekspr, h in zip(tes, r["hasil"]):
            if "nilai" not in h:
                salah(f"{nama}: solusi acuan gagal pada {ekspr!r}: {h}"); continue
            if ekspr in t.get("cek", {}) and h["nilai"] != t["cek"][ekspr]:
                salah(f"{nama}: {ekspr} → {h['nilai']!r}, seharusnya {t['cek'][ekspr]!r}")
            hasil_tes.append([ekspr, json.dumps(h["nilai"], ensure_ascii=False)])
        a = node_js(t["awal"], tes, t.get("pre", ""))["hasil"]
        if all("nilai" in x and json.dumps(x["nilai"], ensure_ascii=False) == e[1] for x, e in zip(a, hasil_tes)):
            salah(f"{nama}: kode awal sudah lulus semua tes")
    elif b == "web":
        assert len(tes) >= 3 and all(len(x) == 2 for x in tes), nama
        hasil_tes = [list(x) for x in tes]
    else:
        assert t.get("tabel"), nama
        hasil_tes = [["Hasil query", ""]]
    return {
        "id": t["id"], "judul": t["judul"], "kategori": "studi", "tingkat": t["tingkat"], "bahasa": b,
        "fungsi": t.get("fungsi", ""), "cerita": t.get("cerita", ""), "soal": t["soal"], "awal": t["awal"],
        "solusi": t["solusi"], "jelas": t["jelas"], "kompleksitas": "", "petunjuk": t["petunjuk"] + [t.get("petunjuk3") or "Kerangka solusinya:\n" + kerangka_lain(t["solusi"], b)],
        "tes": hasil_tes, "contoh": t.get("contoh", 2 if b == "js" and len(hasil_tes) >= 4 else 1), "pre": t.get("pre", ""),
        "urut": t.get("urut", False), "tabel": t.get("tabel", []), "awal_baru": t.get("awal_baru", ""),
    }


def kerangka_lain(kode, b):
    """Petunjuk ke-3 untuk JS/HTML/CSS/SQL: struktur dipertahankan, isi dikosongkan."""
    if b == "sql":
        kata = set("SELECT FROM WHERE AND OR NOT IN IS NULL AS JOIN LEFT INNER ON GROUP BY HAVING ORDER ASC DESC LIMIT WITH CASE WHEN THEN ELSE END OVER PARTITION DISTINCT BETWEEN LIKE UNION ALL COUNT SUM AVG MIN MAX ROUND COALESCE".split())
        return re.sub(r"'[^']*'", "'…'", re.sub(r"[A-Za-z_][A-Za-z0-9_]*", lambda m: m.group(0) if m.group(0).upper() in kata else "…", kode))
    if b == "web":
        return re.sub(r">[^<]+<", ">…<", re.sub(r":\s*[^;{}]+;", ": …;", kode))
    return "\n".join(re.sub(r"(=|return|=>)\s*.+$", r"\1 …", baris) for baris in kode.rstrip().split("\n"))


def jalankan_contoh(kode, bahasa="py"):
    if bahasa == "js":
        return node_js(kode, [])["out"]
    if bahasa in ("web", "sql"):
        return ""      # ditampilkan langsung di browser (pratinjau / tabel)
    import contextlib, io
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        exec(kode, {"__name__": "__kq__"})
    return buf.getvalue().rstrip("\n")


def main():
    sys.stdout.reconfigure(encoding="utf-8")   # konsol Windows (cp1252) tidak bisa menulis ✓
    root = os.path.join(_DIR, "..")
    ids, keluar = set(), []
    for i, t in enumerate(T):
        if t["id"] in ids:
            raise SystemExit("id kembar: " + t["id"])
        ids.add(t["id"])
        keluar.append(olah(t))
        print(f"  ✓ {i + 1:2}. [{t['kategori']}/{t['tingkat']}] {t['judul']}: {len(t['tes'])} tes")
    per_id = {x["id"]: x for x in keluar}
    studi_out, sid = [], set()
    for S in STUDI:
        if S["id"] in sid:
            raise SystemExit("id studi kembar: " + S["id"])
        sid.add(S["id"])
        langkah = []
        for L in S["langkah"]:
            if isinstance(L, str):          # pakai ulang tantangan Lab
                if L not in per_id:
                    salah(f"studi {S['id']}: tantangan {L} tidak ada"); continue
                langkah.append(per_id[L])
            else:
                if L["id"] in ids:
                    raise SystemExit("id kembar: " + L["id"])
                ids.add(L["id"])
                langkah.append(olah(L, S["id"]))
        C = dict(S["contoh"])
        try:
            C["bahasa"] = S.get("bahasa", "py")
            C["keluaran"] = jalankan_contoh(C["kode"], C["bahasa"])
        except Exception as e:
            salah(f"studi {S['id']}: contoh error {type(e).__name__}: {e}"); C["keluaran"] = ""
        studi_out.append({"id": S["id"], "topik": S["topik"], "setelah": S["setelah"], "judul": S["judul"], "contoh": C, "langkah": langkah, "ujian": S.get("ujian", False), "cakupan": S.get("cakupan", "")})
        print(f"  ✓ studi {S['topik']}/{S['setelah']}: {S['judul']} ({len(langkah)} soal)")
    if MASALAH[0]:
        raise SystemExit(f"\n{MASALAH[0]} masalah, file JS tidak ditulis")
    js = ("// DIBUAT OTOMATIS oleh alat/buat-lab-python.py — jangan edit manual.\n"
          "// Lab Coding Test Python & Studi Kasus Koding: setiap tes = ekspresi Python; jawaban diharapkan dihitung dari solusi acuan.\n"
          f"const KATEGORI_PY = {json.dumps(KATEGORI, ensure_ascii=False)};\n"
          f"const TANTANGAN_PY = {json.dumps(keluar, ensure_ascii=False, indent=0)};\n"
          f"const STUDI_PY = {json.dumps(studi_out, ensure_ascii=False, indent=0)};\n")
    with open(os.path.join(root, "js", "soal", "lab-python.js"), "w", encoding="utf-8", newline="\n") as f:
        f.write(js)
    n_tes = sum(len(x["tes"]) for x in keluar) + sum(len(L["tes"]) for S in studi_out for L in S["langkah"] if L["id"] not in per_id)
    print(f"\n{len(keluar)} tantangan Lab, {len(studi_out)} studi kasus, {n_tes} tes. Semua solusi acuan lulus. Ditulis ke js/soal/lab-python.js")


if __name__ == "__main__":
    main()
