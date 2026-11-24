// ============ CODING TEST ODOO DEVELOPER — 10 bab ============
// Persiapan coding test Junior Odoo Developer / Python Developer (perusahaan software & RPA).
// Bagian Python: strategi tes, membaca kode, pola algoritma, otomasi data.
// Bagian Odoo 17: model & field, compute/constraint, ORM, inheritance & override, view XML, keamanan & modul.
// Fakta Odoo dicek ke kode sumber Odoo 17 lokal (odoo/models.py, fields.py, api.py, ir_ui_view.py, ir_cron.py).
// Setiap bab disusul "Studi Kasus Koding" (menulis kode sungguhan) dari js/soal/lab-python.js.
// vr:"py" → output dijalankan sungguhan oleh alat/cek-soal.js.

const SOAL_CT = [
// ---- BAB 1: strategi coding test & Big-O ----
{k:"strategi",t:"mc",lv:1,q:"Kamu mendapat soal coding test 45 menit. Langkah PERTAMA yang paling tepat:",o:["Baca soal sampai habis, tulis contoh input-output sendiri, dan tanyakan/catat kasus tepi","Langsung mengetik kode secepat mungkin","Mencari jawabannya di internet","Mengerjakan bagian tersulit dulu"],a:0,
 e:"Sebagian besar kegagalan coding test berasal dari salah paham soal, bukan dari kode. Urutan yang dianjurkan: pahami → contoh sendiri (termasuk data kosong, nol, negatif, duplikat) → rencana → kode → uji.",
 w:[null,"Kode cepat untuk soal yang salah dipahami tetap salah.","Biasanya dilarang dan mudah terdeteksi.","Kerjakan dulu bagian yang kamu yakini supaya ada nilai."]},
{k:"strategi",t:"mc",lv:1,q:"Notasi Big-O menggambarkan…",o:["Bagaimana waktu atau memori bertambah ketika ukuran data (n) membesar","Waktu persis dalam detik","Jumlah baris kode","Versi Python yang dipakai"],a:0,
 e:"O(n) berarti waktu naik sebanding dengan n; O(n²) berarti data 10× lebih banyak membuat waktu ±100× lebih lama. Big-O membandingkan algoritma, bukan mengukur detik.",
 w:[null,"Detik tergantung komputer.","Kode pendek bisa saja lambat.","Tidak berhubungan dengan versi."]},
{k:"strategi",t:"mc",lv:2,q:"Kompleksitas kode ini:",kode:"for a in data:\n    for b in data:\n        if a + b == 10:\n            return True",o:["O(n²)","O(n)","O(log n)","O(1)"],a:0,
 e:"Dua perulangan bersarang atas data yang sama: untuk setiap a, semua b dicek, jadi n × n langkah. Soal seperti two-sum bisa dipercepat menjadi O(n) dengan set atau dict.",
 w:[null,"Itu kalau hanya satu perulangan.","log n muncul bila data dibagi dua tiap langkah.","Jumlah langkah tergantung n."]},
{k:"strategi",t:"mc",lv:2,q:"Mengecek <code>x in daftar</code> (list) vs <code>x in himpunan</code> (set) untuk data 1 juta item:",o:["list O(n) karena dicek satu per satu; set rata-rata O(1) karena memakai hash","Keduanya O(1)","list lebih cepat dari set","set O(n²)"],a:0,
 e:"Set dan dict memakai tabel hash: lokasi item dihitung langsung dari nilainya. Mengubah list menjadi set sekali (O(n)) lalu melakukan banyak pencarian adalah trik optimasi yang paling sering dipakai di coding test.",
 w:[null,"in pada list harus menelusuri.","Untuk pencarian, set jauh lebih cepat.","Tidak benar."]},
{k:"strategi",t:"mc",lv:1,q:"Kasus tepi (edge case) yang PALING perlu diuji untuk fungsi rata-rata(list):",o:["List kosong","List berisi 3 angka positif","List berisi angka genap","List terurut"],a:0,
 e:"List kosong menyebabkan pembagian dengan nol. Kasus tepi lain yang umum: satu elemen, angka negatif, nol, nilai sama semua, data sangat besar, teks kosong, dan None.",
 w:[null,"Itu kasus normal.","Tidak istimewa.","Tidak memengaruhi rata-rata."]},
{k:"strategi",t:"mc",lv:2,q:"Saat live coding, kamu buntu mencari solusi tercepat. Sikap terbaik:",o:["Jelaskan dan tulis dulu solusi sederhana yang benar (brute force), sebut kompleksitasnya, lalu perbaiki bila waktu cukup","Diam sampai menemukan solusi terbaik","Menyerah","Menulis kode acak supaya terlihat sibuk"],a:0,
 e:"Pewawancara menilai cara berpikir. Solusi benar yang lambat lebih bernilai daripada solusi cepat yang tidak selesai. Mengucapkan 'ini O(n²), bisa saya percepat dengan dict' menunjukkan pemahaman.",
 w:[null,"Diam membuat penilai tidak tahu proses berpikirmu.","Selalu ada nilai untuk solusi parsial.","Kode acak menurunkan kepercayaan."]},
{k:"strategi",t:"mc",lv:2,q:"Kompleksitas <code>sorted(data)</code> di Python untuk n item:",o:["O(n log n)","O(n)","O(n²)","O(1)"],a:0,
 e:"Python memakai algoritma Timsort: O(n log n) rata-rata dan terburuk. Jadi solusi 'urutkan dulu lalu sekali jalan' bernilai O(n log n).",
 w:[null,"Sorting perbandingan tidak bisa O(n) secara umum.","Timsort tidak kuadratik.","Tidak mungkin tanpa melihat datanya."]},
{k:"strategi",t:"mc",lv:1,q:"Output kode ini:",kode:"data = [3, 1, 2]\nhasil = data.sort()\nprint(hasil)",o:["None","[1, 2, 3]","[3, 1, 2]","Error"],a:0,vr:"py",
 e:"list.sort() mengurutkan list di tempat dan mengembalikan None. Kalau butuh list baru, pakai sorted(data). Bug ini sangat sering muncul di coding test.",
 w:[null,"Itu isi data setelah diurutkan, bukan nilai kembalian sort().","data sudah berubah urutannya.","Tidak error."]},
{k:"strategi",t:"mc",lv:2,q:"Mana yang termasuk <b>kode yang mudah dibaca</b> menurut penilai coding test?",o:["Nama variabel bermakna (total_harga), fungsi kecil dengan satu tugas, dan komentar hanya untuk alasan yang tidak terlihat dari kode","Nama variabel satu huruf semua supaya singkat","Satu fungsi 200 baris","Komentar di setiap baris yang mengulang isi kode"],a:0,
 e:"Banyak tes menilai kualitas kode, bukan hanya kebenaran. PEP 8 (gaya standar Python): snake_case untuk fungsi dan variabel, PascalCase untuk class, indentasi 4 spasi.",
 w:[null,"Huruf tunggal hanya wajar untuk indeks pendek (i, j).","Sulit diuji dan dibaca.","Komentar seperti itu hanya menambah bacaan."]},
{k:"strategi",t:"is",lv:1,q:"Gaya penulisan nama fungsi dan variabel yang dianjurkan PEP 8 di Python (contoh: hitung_total) disebut … case.",a:["snake","snake_case","snake case"],
 e:"snake_case untuk fungsi dan variabel, PascalCase untuk class (SaleOrder), UPPER_CASE untuk konstanta. Odoo juga mengikuti ini: _compute_amount_total, class SaleOrder."},
{k:"strategi",t:"mc",lv:2,q:"Coding test take-home memberi waktu 2 hari untuk membuat modul Odoo kecil. Yang paling menambah nilai:",o:["README cara install & uji, kode rapi, tes otomatis, dan commit Git yang bertahap","Fitur sebanyak mungkin walau belum diuji","Mengirim file zip tanpa penjelasan","Menyalin modul dari Odoo Apps"],a:0,
 e:"Penilai ingin melihat cara kamu bekerja sehari-hari: dokumentasi, tes, dan riwayat commit. Fitur sedikit tapi stabil lebih baik daripada banyak fitur yang rusak.",
 w:[null,"Fitur yang rusak mengurangi nilai.","Penilai butuh petunjuk menjalankan.","Plagiarisme langsung menggugurkan."]},
{k:"strategi",t:"mc",lv:2,q:"Output kode ini:",kode:"print(7 // 2, 7 % 2, -7 // 2)",o:["3 1 -4","3 1 -3","3.5 1 -3.5","3 0 -4"],a:0,vr:"py",
 e:"// membulatkan ke BAWAH (menuju minus tak hingga), bukan memotong desimal. Jadi -7 // 2 = -4, bukan -3. % memberi sisa: 7 % 2 = 1.",
 w:[null,"-3.5 dibulatkan ke bawah menjadi -4.","Itu hasil / biasa.","7 % 2 = 1."]},

// ---- BAB 2: membaca kode (jebakan Python) ----
{k:"baca",t:"mc",lv:2,q:"Output kode ini:",kode:"a = [1, 2]\nb = a\nb.append(3)\nprint(a)",o:["[1, 2, 3]","[1, 2]","[3]","Error"],a:0,vr:"py",
 e:"b = a tidak menyalin list; a dan b menunjuk objek yang SAMA. Untuk menyalin: b = a.copy() atau b = list(a). Di Odoo hal serupa terjadi pada dict vals yang dipakai ulang.",
 w:[null,"a ikut berubah karena objeknya sama.","append menambah, tidak mengganti.","Tidak error."]},
{k:"baca",t:"mc",lv:2,q:"Output kode ini:",kode:"def tambah(x, wadah=[]):\n    wadah.append(x)\n    return wadah\n\ntambah(1)\nprint(tambah(2))",o:["[1, 2]","[2]","[1]","Error"],a:0,vr:"py",
 e:"Nilai bawaan dibuat SEKALI saat def dijalankan, lalu dipakai bersama oleh semua pemanggilan. Pola aman: def tambah(x, wadah=None): if wadah is None: wadah = [].",
 w:[null,"Bawaan [] tidak dibuat ulang setiap panggilan.","Panggilan kedua menambahkan 2.","Tidak error."]},
{k:"baca",t:"mc",lv:1,q:"Output kode ini:",kode:"teks = \"odoo\"\nprint(teks[1:3], teks[-1], teks[::-1])",o:["do o oodo","od o oodo","do d odoo","doo o oodo"],a:0,vr:"py",
 e:"[1:3] mengambil indeks 1 dan 2 (indeks 3 tidak ikut) = 'do'. [-1] = karakter terakhir. [::-1] = teks dibalik.",
 w:[null,"[1:3] dimulai dari indeks 1.","[-1] adalah huruf terakhir, 'o'.","Batas akhir slicing tidak ikut."]},
{k:"baca",t:"mc",lv:2,q:"Output kode ini:",kode:"x = 5\ndef ubah():\n    x = 10\nubah()\nprint(x)",o:["5","10","None","Error"],a:0,vr:"py",
 e:"x = 10 di dalam fungsi membuat variabel LOKAL baru. Variabel global x tidak berubah. Kalau memang ingin mengubah global, harus menulis global x (biasanya dihindari).",
 w:[null,"Itu hanya terjadi dengan deklarasi global.","print mencetak nilai x, bukan hasil fungsi.","Tidak error."]},
{k:"baca",t:"mc",lv:2,q:"Output kode ini:",kode:"print(0.1 + 0.2 == 0.3, round(0.1 + 0.2, 2) == 0.3)",o:["False True","True True","False False","True False"],a:0,vr:"py",
 e:"Bilangan desimal disimpan dalam biner sehingga 0.1 + 0.2 = 0.30000000000000004. Bandingkan dengan round() atau math.isclose(). Odoo memakai float_compare dan float_round dengan presisi mata uang untuk alasan yang sama.",
 w:[null,"0.1 + 0.2 tidak tepat 0.3 di floating point.","Setelah dibulatkan hasilnya sama.","Terbalik."]},
{k:"baca",t:"mc",lv:2,q:"Output kode ini:",kode:"data = {\"a\": 1}\nprint(data.get(\"b\"), data.get(\"b\", 0))",o:["None 0","Error","0 0","b 0"],a:0,vr:"py",
 e:"dict.get(kunci) mengembalikan None bila kunci tidak ada, dan dict.get(kunci, nilai) mengembalikan nilai bawaan. data[\"b\"] justru melempar KeyError.",
 w:[null,"get tidak melempar error.","Tanpa argumen kedua hasilnya None.","get mengembalikan nilai, bukan kunci."]},
{k:"baca",t:"mc",lv:2,q:"Output kode ini:",kode:"print([i for i in range(10) if i % 3 == 0][-1])",o:["9","3","0","6"],a:0,vr:"py",
 e:"List kelipatan 3 dari 0–9 adalah [0, 3, 6, 9]. [-1] mengambil elemen terakhir: 9.",
 w:[null,"Itu elemen kedua.","Itu elemen pertama.","Itu elemen ketiga."]},
{k:"baca",t:"mc",lv:3,q:"Output kode ini:",kode:"fungsi = [lambda: i for i in range(3)]\nprint([f() for f in fungsi])",o:["[2, 2, 2]","[0, 1, 2]","[0, 0, 0]","Error"],a:0,vr:"py",
 e:"Lambda menyimpan VARIABEL i, bukan nilainya saat itu (late binding). Saat dipanggil, perulangan sudah selesai dan i = 2. Solusi: lambda i=i: i.",
 w:[null,"Nilai i tidak 'dibekukan' saat lambda dibuat.","i terakhir adalah 2.","Tidak error."]},
{k:"baca",t:"mc",lv:2,q:"Output kode ini:",kode:"a = (1)\nb = (1,)\nprint(type(a).__name__, type(b).__name__)",o:["int tuple","tuple tuple","int int","tuple int"],a:0,vr:"py",
 e:"Kurung saja tidak membuat tuple; KOMA yang membuatnya. (1) sama dengan 1. Di Odoo, domain [('state', '=', 'sale')] berisi tuple, dan lupa koma sering membuat error aneh.",
 w:[null,"(1) hanya angka 1 dalam kurung.","b punya koma, jadi tuple.","Terbalik."]},
{k:"baca",t:"mc",lv:2,q:"Output kode ini:",kode:"try:\n    print(int(\"12a\"))\nexcept ValueError:\n    print(\"gagal\")\nfinally:\n    print(\"selesai\")",o:["gagal lalu selesai","12 lalu selesai","selesai","Error"],a:0,vr:"py",vx:"gagal\nselesai",
 e:"int(\"12a\") melempar ValueError, ditangkap except sehingga mencetak 'gagal'. Blok finally SELALU dijalankan, berhasil maupun gagal.",
 w:[null,"'12a' tidak bisa diubah ke int.","except juga mencetak 'gagal'.","Error sudah ditangkap."]},
{k:"baca",t:"mc",lv:2,q:"Output kode ini:",kode:"nilai = [3, 1, 2]\nprint(sorted(nilai, reverse=True)[:2], nilai)",o:["[3, 2] [3, 1, 2]","[3, 2] [3, 2, 1]","[1, 2] [3, 1, 2]","[3, 1] [3, 1, 2]"],a:0,vr:"py",
 e:"sorted() membuat list BARU, jadi nilai asli tidak berubah. reverse=True mengurutkan menurun, lalu [:2] mengambil dua teratas.",
 w:[null,"sorted tidak mengubah list asli.","reverse=True membuat urutan menurun.","[:2] diambil setelah diurutkan."]},
{k:"baca",t:"is",lv:2,q:"Isi titik-titik agar fungsi aman dari bug nilai bawaan: <code>def catat(x, daftar=None):</code> lalu baris berikutnya <code>if daftar is ……: daftar = []</code>",a:["None"],
 e:"Pola standar Python: nilai bawaan None, lalu buat list/dict baru di dalam fungsi. Pakai 'is None', bukan '== None', karena None adalah satu-satunya objek (singleton)."},

// ---- BAB 3: pola algoritma ----
{k:"algo",t:"mc",lv:2,q:"Pola yang paling tepat untuk 'cari apakah ada dua angka yang jumlahnya target' dalam O(n):",o:["Simpan angka yang sudah dilihat di set/dict, lalu cek target − x","Dua for bersarang","Urutkan lalu cek semua pasangan","Rekursi"],a:0,
 e:"Pola 'hash map': tukar memori dengan kecepatan. Dua for bersarang O(n²). Cara 'urutkan + dua penunjuk' juga benar tapi O(n log n).",
 w:[null,"Itu O(n²).","Mengecek semua pasangan tetap O(n²).","Tidak perlu rekursi."]},
{k:"algo",t:"mc",lv:2,q:"Struktur data yang tepat untuk mengecek tanda kurung berpasangan ([{}]):",o:["Stack (list dengan append dan pop)","Queue","Set","Dict saja"],a:0,
 e:"Stack = Last In First Out. Kurung buka didorong, kurung tutup harus cocok dengan kurung buka terakhir. Stack juga dipakai untuk undo, riwayat browser, dan evaluasi domain Odoo berprefiks.",
 w:[null,"Queue = First In First Out, urutannya salah untuk kurung bersarang.","Set tidak menyimpan urutan.","Dict saja tidak menyimpan urutan buka."]},
{k:"algo",t:"mc",lv:2,q:"Binary search hanya bisa dipakai jika…",o:["Data sudah terurut","Data berupa dict","Data berisi angka genap","Data kurang dari 100 item"],a:0,
 e:"Binary search membuang separuh data setiap langkah dengan membandingkan elemen tengah. Itu hanya sah bila data terurut. Modul bisect di Python menyediakannya.",
 w:[null,"Dict sudah punya pencarian O(1).","Tidak ada syarat genap.","Justru berguna untuk data besar."]},
{k:"algo",t:"mc",lv:2,q:"Output kode ini:",kode:"from collections import Counter\nc = Counter(\"odoo\")\nprint(c.most_common(1))",o:["[('o', 3)]","[('d', 1)]","{'o': 3}","('o', 3)"],a:0,vr:"py",
 e:"Counter menghitung kemunculan tiap item. most_common(n) mengembalikan LIST berisi n pasangan (item, jumlah) terbanyak.",
 w:[null,"d hanya muncul sekali.","Hasilnya list, bukan dict.","Hasilnya list berisi tuple."]},
{k:"algo",t:"mc",lv:2,q:"Pola 'urutkan dulu, lalu satu kali jalan' paling cocok untuk soal…",o:["Menggabungkan jadwal/interval yang bertumpuk","Menghitung jumlah angka","Membalik string","Mencari nilai maksimum"],a:0,
 e:"Setelah interval diurutkan berdasarkan waktu mulai, interval yang bertumpuk pasti berdampingan, jadi cukup dibandingkan dengan interval terakhir. Total O(n log n).",
 w:[null,"Penjumlahan tidak perlu diurutkan.","Membalik string O(n) langsung.","Maksimum cukup sekali jalan tanpa sorting."]},
{k:"algo",t:"mc",lv:2,q:"Output kode ini:",kode:"def f(n):\n    if n <= 1:\n        return n\n    return f(n - 1) + f(n - 2)\nprint(f(6))",o:["8","13","5","6"],a:0,vr:"py",
 e:"Fibonacci: f(0)=0, f(1)=1, 1, 2, 3, 5, f(6)=8. Versi rekursif ini O(2ⁿ) karena menghitung ulang nilai yang sama berkali-kali; versi perulangan atau dengan cache (functools.lru_cache) jauh lebih cepat.",
 w:[null,"Itu f(7).","Itu f(5).","Bukan n itu sendiri."]},
{k:"algo",t:"mc",lv:1,q:"Cara paling Pythonic membalik list <code>data</code> menjadi list baru:",o:["data[::-1]","for i in range(len(data), 0): ...","data.reverse() lalu return hasilnya","Tidak bisa"],a:0,
 e:"Slicing dengan langkah -1 membuat salinan terbalik. data.reverse() membalik di tempat dan mengembalikan None, sama seperti sort().",
 w:[null,"range itu kosong karena tidak ada langkah negatif.","reverse() mengembalikan None.","Bisa."]},
{k:"algo",t:"mc",lv:3,q:"Soal: cari sub-list berurutan dengan jumlah terbesar. Algoritma O(n) yang dikenal untuk ini:",o:["Kadane: untuk tiap elemen pilih max(x, sekarang + x)","Coba semua pasangan awal–akhir","Urutkan lalu ambil yang terbesar","Binary search"],a:0,
 e:"Kadane menyimpan dua nilai: jumlah terbaik yang berakhir di posisi ini, dan jumlah terbaik secara keseluruhan. Mengurutkan merusak syarat 'berurutan'.",
 w:[null,"Itu O(n²) atau O(n³).","Sub-list harus berurutan, sorting merusaknya.","Tidak ada data terurut yang dicari."]},
{k:"algo",t:"mc",lv:2,q:"Output kode ini:",kode:"kata = [\"bca\", \"abc\", \"cab\", \"xyz\"]\ngrup = {}\nfor k in kata:\n    grup.setdefault(\"\".join(sorted(k)), []).append(k)\nprint(len(grup))",o:["2","4","3","1"],a:0,vr:"py",
 e:"Tiga kata pertama adalah anagram dengan 'tanda tangan' sama, yaitu 'abc'; 'xyz' kelompok lain. Teknik kunci kanonik ini mengelompokkan dalam satu kali jalan.",
 w:[null,"Anagram digabung dalam satu kunci.","Hanya ada dua tanda tangan berbeda.","xyz punya kunci sendiri."]},
{k:"algo",t:"is",lv:2,q:"Isi titik-titik agar penghitung kata tidak error untuk kata baru: <code>hitung[k] = hitung.……(k, 0) + 1</code>",a:["get"],
 e:"dict.get(k, 0) mengembalikan 0 bila k belum ada. Alternatif: collections.Counter atau collections.defaultdict(int)."},
{k:"algo",t:"mc",lv:2,q:"Output kode ini:",kode:"data = [5, 3, 8, 1]\nprint(min(data), max(data), sorted(data)[len(data) // 2])",o:["1 8 5","1 8 3","1 8 8","3 8 5"],a:0,vr:"py",
 e:"sorted(data) = [1, 3, 5, 8]; len // 2 = 2, jadi elemen indeks 2 adalah 5. (Median sebenarnya untuk jumlah genap adalah rata-rata dua nilai tengah, yaitu 4.)",
 w:[null,"Indeks 2 dari [1, 3, 5, 8] adalah 5.","8 ada di indeks 3.","min adalah 1."]},
{k:"algo",t:"mc",lv:3,q:"Kenapa <code>while kiri &lt;= kanan</code> (bukan <code>&lt;</code>) dipakai di binary search versi umum?",o:["Agar list satu elemen (kiri = kanan) tetap diperiksa","Agar lebih cepat","Agar tidak perlu menghitung tengah","Tidak ada bedanya"],a:0,
 e:"Dengan <, ketika kiri = kanan perulangan berhenti sebelum elemen terakhir dicek, sehingga [5] mencari 5 mengembalikan -1. Kesalahan batas (off-by-one) adalah bug paling umum di binary search.",
 w:[null,"Bukan soal kecepatan.","Tengah tetap dihitung.","Ada bedanya untuk satu elemen."]},

// ---- BAB 4: Python untuk otomasi & data ----
{k:"otomasi",t:"mc",lv:1,q:"Membaca file CSV yang nilainya bisa berisi koma di dalam tanda kutip. Cara yang benar:",o:["Modul csv (csv.reader / csv.DictReader)","line.split(\",\")","Membaca sebagai JSON","Regex buatan sendiri"],a:0,
 e:"split(\",\") akan memecah \"Meja, Kursi\" menjadi dua kolom. Modul csv memahami tanda kutip, pemisah, dan baris baru di dalam sel.",
 w:[null,"Rusak untuk nilai yang berisi koma.","CSV bukan JSON.","Rawan salah; pakai pustaka standar."]},
{k:"otomasi",t:"mc",lv:1,q:"Cara membuka file yang menjamin file tertutup walau terjadi error:",o:["with open(\"data.txt\", encoding=\"utf-8\") as f:","f = open(\"data.txt\") tanpa close","open(\"data.txt\").read() di banyak tempat","import data.txt"],a:0,
 e:"with (context manager) menutup file otomatis saat blok selesai atau error. Selalu tulis encoding=\"utf-8\" agar huruf non-ASCII aman di Windows.",
 w:[null,"File bisa tertinggal terbuka.","Setiap open tanpa close membocorkan sumber daya.","Bukan cara membaca file."]},
{k:"otomasi",t:"mc",lv:2,q:"Output kode ini:",kode:"import json\ndata = json.loads('{\"nama\": \"Odoo\", \"versi\": 17, \"aktif\": true}')\nprint(data[\"versi\"] + 1, data[\"aktif\"])",o:["18 True","171 true","Error","18 true"],a:0,vr:"py",
 e:"json.loads mengubah teks JSON menjadi dict Python. Angka JSON menjadi int, true menjadi True. json.dumps melakukan kebalikannya.",
 w:[null,"versi sudah berupa int, bukan teks.","JSON-nya valid.","true di JSON menjadi True di Python."]},
{k:"otomasi",t:"mc",lv:2,q:"Output kode ini:",kode:"import re\nprint(re.findall(r\"\\d+\", \"SO/2026/0042 dan PO/7\"))",o:["['2026', '0042', '7']","[2026, 42, 7]","['SO', 'PO']","['2026/0042', '7']"],a:0,vr:"py",
 e:"\\d+ = satu atau lebih digit berturutan. findall mengembalikan semua potongan yang cocok sebagai list STRING (nol di depan tetap ada).",
 w:[null,"Hasil findall berupa string.","Itu huruf, bukan digit.","Garis miring bukan digit."]},
{k:"otomasi",t:"mc",lv:2,q:"Output kode ini:",kode:"from datetime import date, timedelta\nd = date(2026, 1, 31) + timedelta(days=30)\nprint(d.isoformat())",o:["2026-03-02","2026-02-31","2026-02-28","2026-03-01"],a:0,vr:"py",
 e:"timedelta menghitung hari sungguhan: 31 Jan + 30 hari = 2 Maret 2026 (Februari 2026 punya 28 hari). Jangan menambah angka bulan manual.",
 w:[null,"31 Februari tidak ada.","Itu hanya +28 hari.","Hitung lagi: Februari 2026 28 hari."]},
{k:"otomasi",t:"mc",lv:2,q:"Robot RPA perlu mengulang permintaan ke API yang kadang gagal sementara. Pola yang tepat:",o:["Coba ulang beberapa kali dengan jeda yang makin panjang, catat setiap kegagalan di log, lalu berhenti dengan pesan jelas bila tetap gagal","Ulangi tanpa batas tanpa jeda","Abaikan error","Hentikan program di percobaan pertama tanpa pesan"],a:0,
 e:"Retry dengan backoff (misalnya 1, 2, 4 detik) menghindari membanjiri server. Batas percobaan dan log membuat masalah mudah dilacak. Inilah praktik standar di otomasi.",
 w:[null,"Bisa membebani server dan tidak pernah berhenti.","Data bisa hilang tanpa ketahuan.","Gangguan sementara seharusnya dicoba ulang."]},
{k:"otomasi",t:"mc",lv:2,q:"Pustaka Python yang biasa dipakai untuk memanggil REST API (termasuk API JSON-RPC Odoo dari luar):",o:["requests","tkinter","turtle","pygame"],a:0,
 e:"requests.get / requests.post dengan json=..., lalu response.json(). Dari luar, Odoo juga bisa diakses lewat XML-RPC (xmlrpc.client, pustaka standar) dengan method execute_kw.",
 w:[null,"tkinter untuk GUI desktop.","turtle untuk grafik belajar.","pygame untuk game."]},
{k:"otomasi",t:"mc",lv:3,q:"Memanggil Odoo dari skrip luar lewat XML-RPC: method untuk mencari dan membaca sale.order dalam satu panggilan adalah…",o:["execute_kw(db, uid, password, 'sale.order', 'search_read', [domain], {'fields': [...]})","models.sale_order.all()","odoo.get('sale.order')","SELECT * FROM sale_order via XML-RPC"],a:0,
 e:"Alurnya: common.authenticate(db, user, password, {}) memberi uid, lalu models.execute_kw(...) memanggil method ORM apa pun (search_read, create, write) dengan hak akses user itu. Password sebaiknya diganti API key.",
 w:[null,"API seperti itu tidak ada.","Bukan fungsi XML-RPC Odoo.","XML-RPC tidak menerima SQL mentah."]},
{k:"otomasi",t:"mc",lv:2,q:"Output kode ini:",kode:"from datetime import datetime\nd = datetime.strptime(\"24/11/2026\", \"%d/%m/%Y\")\nprint(d.strftime(\"%Y-%m-%d\"), d.weekday())",o:["2026-11-24 1","2026-24-11 1","24-11-2026 2","2026-11-24 2"],a:0,vr:"py",
 e:"strptime = parse (teks → tanggal), strftime = format (tanggal → teks). weekday(): Senin = 0, jadi Selasa 24 November 2026 = 1.",
 w:[null,"%m adalah bulan, %d hari.","Format keluarannya %Y-%m-%d.","Senin = 0, Selasa = 1."]},
{k:"otomasi",t:"is",lv:1,q:"Fungsi modul json untuk mengubah dict Python menjadi teks JSON: json.……(data)",a:["dumps","dumps()"],
 e:"dumps = dump string. loads kebalikannya. Versi tanpa s (json.dump / json.load) bekerja langsung dengan file."},
{k:"otomasi",t:"mc",lv:2,q:"Output kode ini:",kode:"baris = \" 08123-456 \"\nprint(\"\".join(c for c in baris if c.isdigit()))",o:["08123456","08123-456","8123456","Error"],a:0,vr:"py",
 e:"isdigit() hanya meloloskan angka, jadi spasi dan tanda minus dibuang. Pola ini dipakai untuk membersihkan nomor telepon sebelum diimpor.",
 w:[null,"Tanda minus bukan digit.","Angka 0 di depan tetap ikut.","Tidak error."]},
{k:"otomasi",t:"mc",lv:2,q:"Kamu menyimpan password API untuk skrip otomasi. Cara yang benar:",o:["Simpan di environment variable atau file konfigurasi yang tidak ikut di-commit (.gitignore), baca dengan os.environ","Tulis langsung di kode lalu push ke GitHub","Simpan di nama variabel yang tersamar","Kirim lewat chat tim"],a:0,
 e:"Rahasia di dalam kode akan ikut tersebar lewat Git. os.environ.get(\"ODOO_API_KEY\") membaca dari lingkungan. Kunci yang terlanjur ter-commit harus dianggap bocor dan diganti.",
 w:[null,"Riwayat Git menyimpannya selamanya.","Tetap terbaca siapa pun.","Chat bukan tempat aman menyimpan rahasia."]},

// ---- BAB 5: model & field Odoo ----
{k:"model",t:"mc",lv:1,q:"Atribut class yang menentukan nama teknis model baru di Odoo:",o:["_name = \"library.book\"","_table = \"Library Book\"","name = \"library.book\"","model = \"library.book\""],a:0,
 e:"_name memakai titik (library.book) dan menjadi nama tabel library_book di PostgreSQL. Sertakan juga _description agar tidak muncul peringatan.",
 w:[null,"_table jarang diubah manual dan tidak berisi spasi.","name biasanya field, bukan nama model.","Bukan atribut model Odoo."]},
{k:"model",t:"mc",lv:1,q:"Field untuk menghubungkan buku ke SATU penulis (res.partner), sementara satu penulis bisa punya banyak buku:",o:["author_id = fields.Many2one(\"res.partner\")","author_ids = fields.One2many(\"res.partner\")","author = fields.Char()","author_ids = fields.Many2many(\"res.partner\")"],a:0,
 e:"Many2one = banyak record ini menunjuk ke satu record lain (kolom author_id di tabel). Konvensi nama: akhiran _id untuk Many2one, _ids untuk One2many/Many2many.",
 w:[null,"One2many butuh field Many2one pasangannya di model lain.","Char hanya teks, tidak terhubung.","Many2many berarti satu buku bisa punya banyak penulis."]},
{k:"model",t:"mc",lv:2,q:"Field One2many <code>line_ids</code> di model <code>library.loan</code> yang berisi baris <code>library.loan.line</code> WAJIB punya…",o:["Field Many2one di library.loan.line yang menunjuk balik, misalnya loan_id, sebagai inverse_name","Tabel relasi baru","Field Char bernama line_ids","Constraint SQL"],a:0,
 e:"One2many tidak punya kolom sendiri; ia membaca baris yang loan_id-nya menunjuk ke record ini: fields.One2many(\"library.loan.line\", \"loan_id\"). Many2many-lah yang memakai tabel relasi.",
 w:[null,"Tabel relasi untuk Many2many.","Tidak cukup.","Tidak wajib."]},
{k:"model",t:"mc",lv:2,q:"Isi file <code>__manifest__.py</code> yang WAJIB agar file XML view dan CSV hak akses ikut dimuat:",o:["Kunci 'data': ['security/ir.model.access.csv', 'views/book_views.xml']","Kunci 'depends' saja","import di __init__.py","Nama file diawali view_"],a:0,
 e:"File XML/CSV hanya dimuat bila terdaftar di 'data', dan urutannya penting: security dulu, lalu view, lalu menu. 'depends' berisi modul yang dibutuhkan (misalnya ['base'] atau ['sale']).",
 w:[null,"depends tidak memuat file data.","__init__.py hanya untuk file Python.","Nama file tidak memengaruhi."]},
{k:"model",t:"mc",lv:1,q:"File <code>__init__.py</code> di folder modul berfungsi untuk…",o:["Mengimpor paket Python (from . import models) supaya class model dibaca Odoo","Mendaftarkan view XML","Menyimpan hak akses","Menentukan versi modul"],a:0,
 e:"Rantainya: __init__.py modul → from . import models; models/__init__.py → from . import library_book. File Python yang tidak diimpor tidak akan pernah dibaca.",
 w:[null,"XML didaftarkan di __manifest__.py.","Hak akses ada di CSV.","Versi ada di __manifest__.py."]},
{k:"model",t:"mc",lv:2,q:"Field <code>state = fields.Selection([(\"draft\", \"Draft\"), (\"done\", \"Done\")], default=\"draft\")</code>. Nilai yang tersimpan di database untuk status Done:",o:["\"done\"","\"Done\"","1","True"],a:0,
 e:"Elemen pertama tuple adalah kunci yang disimpan dan dipakai di kode serta domain ([('state', '=', 'done')]); elemen kedua label yang tampil (bisa diterjemahkan).",
 w:[null,"Itu label tampilan.","Selection menyimpan teks kunci.","Bukan boolean."]},
{k:"model",t:"mc",lv:2,q:"Pilihan ondelete untuk Many2one <code>loan_id</code> di baris peminjaman, agar baris ikut terhapus saat peminjaman dihapus:",o:["ondelete=\"cascade\"","ondelete=\"set null\"","ondelete=\"restrict\"","required=True"],a:0,
 e:"cascade: anak ikut terhapus. set null (bawaan): relasi dikosongkan. restrict: induk tidak boleh dihapus selama masih dipakai. Baris dokumen (order line) hampir selalu cascade.",
 w:[null,"Baris jadi yatim tanpa induk.","Malah mencegah induk dihapus.","required tidak mengatur penghapusan."]},
{k:"model",t:"mc",lv:2,q:"Cara memberi nilai bawaan tanggal hari ini (zona waktu pengguna) untuk field Date:",o:["default=fields.Date.context_today","default=date.today()","default=\"today\"","default=datetime.now"],a:0,
 e:"context_today memakai zona waktu pengguna. date.today() DENGAN kurung dihitung sekali saat modul dimuat, jadi semua record mendapat tanggal yang sama. Berikan fungsi (tanpa kurung) atau lambda.",
 w:[null,"Dihitung sekali saat server start.","Teks tidak dikenali sebagai tanggal.","datetime untuk field Datetime, dan zona waktunya UTC."]},
{k:"model",t:"mc",lv:2,q:"Atribut model untuk mengatur urutan bawaan list (misalnya terbaru dulu):",o:["_order = \"date desc, id desc\"","_sort = \"date\"","order_by = \"date\"","_rec_name = \"date\""],a:0,
 e:"_order dipakai oleh search() dan tampilan list bila tidak ada urutan lain. _rec_name menentukan field yang dipakai sebagai nama tampilan (bawaannya 'name').",
 w:[null,"Atribut itu tidak ada.","Bukan atribut model.","_rec_name untuk nama tampilan."]},
{k:"model",t:"mc",lv:2,q:"Batasan <b>unik</b> di tingkat database agar ISBN tidak boleh kembar (Odoo 17):",o:["_sql_constraints = [(\"isbn_uniq\", \"unique(isbn)\", \"ISBN sudah dipakai\")]","isbn = fields.Char(unique=True)","@api.unique(\"isbn\")","_unique = [\"isbn\"]"],a:0,
 e:"_sql_constraints membuat constraint PostgreSQL, sehingga tetap aman walau dua pengguna menyimpan bersamaan. Pengecekan Python (@api.constrains + search) bisa kalah balapan.",
 w:[null,"Parameter unique tidak ada di field Odoo.","Decorator itu tidak ada.","Atribut itu tidak ada."]},
{k:"model",t:"is",lv:1,q:"Perintah baris untuk meng-upgrade modul setelah mengubah field atau XML: <code>./odoo-bin -c odoo.conf -d nama_db -… library</code> (isi satu huruf setelah tanda minus)",a:["u","-u"],
 e:"-u nama_modul = update (memuat ulang Python, XML, dan skema). -i nama_modul = install. Perubahan Python saja cukup restart server; perubahan field atau XML perlu -u."},
{k:"model",t:"mc",lv:2,q:"Untuk menyimpan harga dengan mata uang yang benar, field yang tepat:",o:["fields.Monetary(currency_field=\"currency_id\") disertai field currency_id","fields.Float(digits=2)","fields.Integer()","fields.Char()"],a:0,
 e:"Monetary membulatkan dan menampilkan simbol sesuai mata uang. Float tetap dipakai untuk qty (dengan digits='Product Unit of Measure').",
 w:[null,"Float tidak tahu mata uang.","Integer membuang sen.","Char tidak bisa dihitung."]},

// ---- BAB 6: compute, onchange, constraints ----
{k:"compute",t:"mc",lv:1,q:"Decorator yang memberi tahu Odoo kapan field compute harus dihitung ulang:",o:["@api.depends(\"line_ids.subtotal\")","@api.onchange(\"line_ids\")","@api.model","@api.constrains(\"line_ids\")"],a:0,
 e:"@api.depends mendaftarkan field pemicu. Ketika subtotal baris berubah, total induk dihitung ulang otomatis. Notasi titik menelusuri relasi.",
 w:[null,"onchange hanya bereaksi di form UI.","@api.model untuk method yang tidak butuh record.","constrains untuk validasi."]},
{k:"compute",t:"mc",lv:2,q:"Field compute tanpa <code>store=True</code>…",o:["Dihitung saat dibaca dan tidak bisa dipakai untuk search/group by kecuali ada fungsi search","Disimpan di database","Tidak pernah dihitung","Hanya muncul di laporan"],a:0,
 e:"store=True menyimpan hasil di kolom database (bisa difilter, dikelompokkan, diurutkan) dan dihitung ulang saat field di @api.depends berubah. Tanpa store, nilainya selalu segar tapi tidak bisa dicari.",
 w:[null,"Itu perilaku store=True.","Dihitung setiap dibaca.","Muncul di view mana pun."]},
{k:"compute",t:"mc",lv:2,q:"Bug di method ini:",kode:"@api.depends(\"line_ids.subtotal\")\ndef _compute_total(self):\n    for rec in self:\n        if rec.line_ids:\n            rec.total = sum(rec.line_ids.mapped(\"subtotal\"))",o:["Record tanpa baris tidak diberi nilai total, sehingga Odoo error karena compute tidak mengisi field","mapped salah dipakai","Harus memakai @api.onchange","Tidak ada bug"],a:0,
 e:"Method compute WAJIB mengisi field untuk setiap record di self. Perbaikan: hapus if (sum dari list kosong = 0), atau tambahkan else: rec.total = 0.",
 w:[null,"mapped(\"subtotal\") benar.","onchange tidak menggantikan compute.","Ada kasus yang tidak terisi."]},
{k:"compute",t:"mc",lv:2,q:"Beda @api.constrains dan @api.onchange:",o:["constrains memvalidasi saat simpan (create/write) dan bisa menolak dengan ValidationError; onchange hanya mengubah nilai/peringatan di form sebelum disimpan","Keduanya sama","onchange berjalan saat import data","constrains hanya di form"],a:0,
 e:"onchange tidak berjalan saat record dibuat lewat kode, impor, atau API. Aturan bisnis yang harus selalu berlaku taruh di constrains (atau override create/write).",
 w:[null,"Fungsinya berbeda.","onchange tidak dipanggil saat import.","constrains berlaku untuk semua jalur penyimpanan."]},
{k:"compute",t:"mc",lv:2,q:"Pengecualian (exception) yang tepat di method <code>@api.constrains</code>:",o:["raise ValidationError(\"Tanggal kembali tidak boleh sebelum tanggal pinjam\")","raise UserError(...)","return False","print(\"salah\")"],a:0,
 e:"ValidationError (dari odoo.exceptions) adalah standar untuk constraint. UserError untuk aksi yang tidak boleh dilakukan (misalnya tombol Confirm pada dokumen yang sudah batal).",
 w:[null,"UserError untuk aksi, bukan validasi data.","Nilai kembalian constrains diabaikan.","print tidak menghentikan penyimpanan."]},
{k:"compute",t:"mc",lv:3,q:"@api.constrains(\"partner_id.email\") di Odoo 17…",o:["Tidak didukung: constrains hanya menerima field sederhana di model itu sendiri (tanpa titik)","Berjalan setiap email partner berubah","Sama dengan depends","Wajib untuk email"],a:0,
 e:"Dokumentasi Odoo: @api.constrains hanya untuk field biasa model itu; field bertitik diabaikan. Constraint dipicu bila field yang terdaftar ada di create/write.",
 w:[null,"Perubahan email di partner tidak memicunya.","Perilakunya berbeda.","Tidak ada aturan begitu."]},
{k:"compute",t:"mc",lv:2,q:"Agar field compute tetap bisa diedit pengguna dan nilainya ditulis balik ke field lain, tambahkan…",o:["Method inverse: fields.Float(compute=\"_compute_x\", inverse=\"_inverse_x\")","readonly=True","store=False","related"],a:0,
 e:"inverse dipanggil saat pengguna mengubah field compute, sehingga kamu bisa menghitung balik nilai sumbernya. Contoh: mengisi durasi lalu tanggal selesai dihitung ulang.",
 w:[null,"Justru membuatnya tidak bisa diedit.","store tidak berhubungan dengan edit.","related hanya menyalin field lain."]},
{k:"compute",t:"mc",lv:1,q:"Field <code>partner_email = fields.Char(related=\"partner_id.email\")</code> berarti…",o:["Menampilkan email dari partner yang dipilih, tanpa menulis method compute","Membuat partner baru","Menyalin email sekali saat create","Field wajib diisi"],a:0,
 e:"related adalah jalan pintas compute untuk mengambil field lewat relasi. Bawaannya readonly dan tidak disimpan (store=False).",
 w:[null,"Tidak membuat record.","Selalu mengikuti nilai terbaru.","Tidak berhubungan dengan required."]},
{k:"compute",t:"mc",lv:2,q:"Output kode ini (recordset diganti list biasa):",kode:"baris = [{\"qty\": 2, \"harga\": 5000}, {\"qty\": 1, \"harga\": 2500}]\ntotal = sum(b[\"qty\"] * b[\"harga\"] for b in baris)\nprint(total)",o:["12500","7500","10000","Error"],a:0,vr:"py",
 e:"2 × 5.000 + 1 × 2.500 = 12.500. Di Odoo: sum(rec.line_ids.mapped(\"price_subtotal\")), atau sum(l.qty * l.price for l in rec.line_ids).",
 w:[null,"Itu hanya penjumlahan harga.","Itu hanya baris pertama.","Generator expression di dalam sum sah."]},
{k:"compute",t:"is",lv:2,q:"Exception dari <code>odoo.exceptions</code> yang dipakai di method @api.constrains adalah …Error",a:["Validation","ValidationError"],
 e:"from odoo.exceptions import ValidationError, UserError, AccessError. Pesan sebaiknya dibungkus _() agar bisa diterjemahkan: raise ValidationError(_(\"...\"))."},
{k:"compute",t:"mc",lv:2,q:"Di method onchange Odoo 17, cara menampilkan peringatan tanpa memblokir pengguna:",o:["return {\"warning\": {\"title\": \"Perhatian\", \"message\": \"Stok tinggal sedikit\"}}","raise ValidationError","print ke log","raise UserError"],a:0,
 e:"onchange boleh mengembalikan dict warning yang tampil sebagai pop-up, sementara nilai tetap boleh disimpan. raise di onchange menghentikan pengisian form.",
 w:[null,"Itu memblokir.","Pengguna tidak melihat log.","Itu memblokir."]},
{k:"compute",t:"mc",lv:3,q:"Field compute <code>store=True</code> yang <code>@api.depends</code>-nya lupa mencantumkan salah satu field sumber akan…",o:["Tidak dihitung ulang saat field yang lupa itu berubah, sehingga nilai di database basi","Error saat install","Dihitung setiap detik","Otomatis menebak depends"],a:0,
 e:"Odoo hanya tahu pemicu dari @api.depends. Daftar yang tidak lengkap adalah sumber bug 'angka tidak update' yang paling sering. Perbaikannya: lengkapi depends lalu hitung ulang data lama.",
 w:[null,"Tidak ada error, justru diam-diam salah.","Tidak ada penghitungan berkala.","Odoo tidak menebak."]},

// ---- BAB 7: ORM ----
{k:"orm",t:"mc",lv:1,q:"Mencari semua quotation berstatus draft milik pengguna yang sedang login:",o:["self.env[\"sale.order\"].search([(\"state\", \"=\", \"draft\"), (\"user_id\", \"=\", self.env.uid)])","self.env[\"sale.order\"].browse(\"draft\")","SELECT * FROM sale_order","sale.order.filter(state=\"draft\")"],a:0,
 e:"search(domain) mengembalikan recordset. self.env.uid = id pengguna, self.env.user = record-nya. Domain adalah list tuple yang digabung AND.",
 w:[null,"browse menerima id, bukan status.","SQL mentah melewati hak akses dan cache ORM.","Itu bukan API Odoo."]},
{k:"orm",t:"mc",lv:2,q:"Domain <code>['|', ('state', '=', 'draft'), ('state', '=', 'sent'), ('amount_total', '&gt;', 1000)]</code> artinya…",o:["(draft ATAU sent) DAN total > 1000","draft ATAU (sent DAN total > 1000)","draft DAN sent DAN total > 1000","Error karena operator di depan"],a:0,
 e:"Domain memakai notasi prefiks: '|' berlaku untuk DUA elemen berikutnya. Sisanya digabung dengan AND implisit. Cara lebih ringkas: ('state', 'in', ['draft', 'sent']).",
 w:[null,"'|' mengikat dua elemen tepat setelahnya.","'|' berarti OR.","Notasi prefiks itu sah."]},
{k:"orm",t:"mc",lv:2,q:"Membuat Sales Order beserta barisnya dalam satu create() di Odoo 17:",o:["create({\"partner_id\": p.id, \"order_line\": [Command.create({\"product_id\": x.id, \"product_uom_qty\": 2})]})","create({\"order_line\": x.id})","create() order dulu, lalu INSERT baris dengan SQL","order_line.append(...)"],a:0,
 e:"Command.create(vals) setara tuple lama (0, 0, vals). Command lain: link(id) = (4, id), set(ids) = (6, 0, ids), unlink(id) = (3, id), delete(id) = (2, id), clear() = (5,).",
 w:[null,"One2many tidak menerima id tunggal.","SQL melewati logika ORM.","Recordset tidak punya append."]},
{k:"orm",t:"mc",lv:2,q:"Mengganti SEMUA tag sebuah record (Many2many) dengan daftar id baru:",o:["record.write({\"tag_ids\": [Command.set(ids_baru)]})","record.tag_ids = ids_baru.append()","record.write({\"tag_ids\": ids_baru[0]})","record.tag_ids.clear()"],a:0,
 e:"Command.set(ids) = (6, 0, ids): mengganti seluruh isi relasi. Untuk menambah satu tanpa menghapus yang lain: Command.link(id).",
 w:[null,"Sintaks itu salah.","Hanya mengisi satu id dan formatnya salah.","Tidak ada method clear pada recordset."]},
{k:"orm",t:"mc",lv:2,q:"Output kode Odoo (anggap ada 3 order: total 100, 300, 50):",kode:"orders.filtered(lambda o: o.amount_total > 80).mapped(\"amount_total\")",o:["[100, 300]","300","[50]","Recordset 2 record"],a:0,
 e:"filtered menyaring recordset (hasilnya recordset), mapped(\"field\") mengambil nilai field dari semua record (list untuk field biasa, recordset untuk field relasi).",
 w:[null,"mapped mengembalikan semua nilai yang lolos.","50 tidak lolos syarat.","mapped field biasa menghasilkan list nilai."]},
{k:"orm",t:"mc",lv:2,q:"Kode yang PALING efisien untuk menghitung total penjualan per salesperson dari ribuan order:",o:["self.env[\"sale.order\"]._read_group([(\"state\", \"=\", \"sale\")], [\"user_id\"], [\"amount_total:sum\"])","for order in semua_order: total[order.user_id] += order.amount_total","search() di dalam for per salesperson","Ekspor ke Excel lalu hitung"],a:0,
 e:"_read_group membiarkan PostgreSQL yang mengelompokkan (satu query). Di Odoo 17 hasilnya list tuple, misalnya [(user, total), ...]. read_group versi lama mengembalikan list dict dan masih tersedia.",
 w:[null,"Bekerja, tapi membaca semua record ke Python.","Itu pola N+1 query.","Tidak otomatis."]},
{k:"orm",t:"mc",lv:2,q:"<code>self.ensure_one()</code> dipakai untuk…",o:["Memastikan recordset berisi tepat satu record, selain itu error","Membuat satu record baru","Mengambil record pertama","Menghapus duplikat"],a:0,
 e:"Method yang bekerja pada satu dokumen (misalnya membuka wizard untuk order ini) sebaiknya diawali ensure_one() agar bug terlihat jelas bila dipanggil dengan banyak record.",
 w:[null,"Tidak membuat record.","Untuk itu pakai self[:1] atau self[0].","Tidak menghapus apa pun."]},
{k:"orm",t:"mc",lv:3,q:"Kapan <code>sudo()</code> boleh dipakai?",o:["Untuk operasi sistem yang memang harus melewati hak akses pengguna (misalnya membaca konfigurasi), dibatasi seminimal mungkin dan tidak memakai input pengguna mentah","Setiap kali muncul AccessError","Di semua method agar cepat","Untuk login sebagai admin"],a:0,
 e:"sudo() menonaktifkan pengecekan hak akses dan record rule. Memakainya untuk 'menghilangkan error' membuka celah keamanan. Perbaiki hak akses (CSV/grup) bila pengguna memang berhak.",
 w:[null,"Itu menutupi masalah keamanan.","Berbahaya.","sudo tidak mengganti sesi login."]},
{k:"orm",t:"mc",lv:2,q:"Mengirim nilai bawaan ke form lewat context, misalnya dari tombol:",o:["self.with_context(default_partner_id=partner.id)","self.default(partner)","self.env.context[\"partner\"] = partner","self.write({\"context\": ...})"],a:0,
 e:"Kunci context berawalan default_ mengisi field saat record baru dibuat. with_context mengembalikan recordset baru dengan context tambahan; env.context sendiri tidak boleh diubah langsung (frozendict).",
 w:[null,"Method itu tidak ada.","context tidak bisa diubah langsung.","context bukan field."]},
{k:"orm",t:"mc",lv:2,q:"Bedanya <code>browse(ids)</code> dan <code>search(domain)</code>:",o:["browse membuat recordset dari id yang sudah diketahui tanpa query pencarian; search mencari di database berdasarkan domain","Sama saja","browse menghapus record","search hanya mengembalikan satu record"],a:0,
 e:"browse tidak mengecek apakah id-nya masih ada; pakai .exists() bila ragu. search memperhitungkan hak akses, record rule, dan arsip (active=False tidak ikut kecuali dengan context active_test=False).",
 w:[null,"Berbeda.","Tidak menghapus.","search bisa mengembalikan banyak record."]},
{k:"orm",t:"mc",lv:3,q:"Pola kode yang menyebabkan masalah performa 'N+1 query':",o:["for partner in partners: self.env[\"sale.order\"].search_count([(\"partner_id\", \"=\", partner.id)])","partners.mapped(\"name\")","self.env[\"sale.order\"]._read_group(...)","search dengan limit"],a:0,
 e:"Satu query per partner: 1.000 partner = 1.000 query. Lebih baik satu _read_group([(\"partner_id\", \"in\", partners.ids)], [\"partner_id\"], [\"__count\"]).",
 w:[null,"mapped memanfaatkan prefetch, efisien.","Itu solusinya.","limit justru mengurangi data."]},
{k:"orm",t:"is",lv:2,q:"Method ORM untuk menghitung jumlah record yang cocok dengan domain tanpa membacanya: self.env['sale.order'].search_……(domain)",a:["count","search_count"],
 e:"search_count(domain) mengembalikan int dan jauh lebih ringan daripada len(search(domain)) untuk data besar."},

// ---- BAB 8: inheritance & override ----
{k:"inherit",t:"mc",lv:1,q:"Menambah field baru ke model sale.order yang SUDAH ADA (tanpa membuat model baru):",o:["class SaleOrder(models.Model): _inherit = \"sale.order\"","_name = \"sale.order\" saja","_inherits = {\"sale.order\": ...}","Mengedit file addons/sale/models/sale_order.py"],a:0,
 e:"_inherit dengan nama yang sama = ekstensi: field dan method ditambahkan ke model yang ada, tabelnya sama. Jangan pernah mengedit modul inti (core), karena hilang saat update.",
 w:[null,"Mendefinisikan ulang model, bukan memperluas.","_inherits untuk pewarisan delegasi.","Perubahan core hilang saat upgrade."]},
{k:"inherit",t:"mc",lv:2,q:"Override <code>action_confirm</code> yang BENAR:",kode:"def action_confirm(self):\n    # cek tambahan di sini\n    ...",o:["Lakukan pengecekan, lalu res = super().action_confirm() dan return res","Salin seluruh kode action_confirm asli lalu ubah","Jangan panggil super()","return True tanpa super()"],a:0,
 e:"super() menjalankan logika asli (dan logika modul lain yang juga meng-override). Tanpa super(), pengiriman, faktur, dan efek modul lain bisa hilang. Selalu kembalikan nilainya.",
 w:[null,"Menyalin kode memutus rantai override modul lain.","Logika asli tidak berjalan.","Konfirmasi tidak pernah terjadi."]},
{k:"inherit",t:"mc",lv:2,q:"Override <code>create</code> yang benar di Odoo 17:",o:["@api.model_create_multi\ndef create(self, vals_list): ... return super().create(vals_list)","def create(self, vals): return super().create(vals) tanpa decorator","@api.onchange def create","def create(self): pass"],a:0,
 e:"Sejak Odoo 13+, create menerima list dict (vals_list) agar banyak record dibuat sekaligus. Ubah setiap vals di dalam perulangan, lalu panggil super().create(vals_list).",
 w:[null,"Bentuk lama dan tidak efisien untuk banyak record.","onchange bukan untuk create.","Tidak membuat apa pun."]},
{k:"inherit",t:"mc",lv:3,q:"Tiga jenis inheritance di Odoo dan contohnya, yang BENAR:",o:["_inherit sama nama = ekstensi; _name baru + _inherit = prototipe (menyalin struktur ke tabel baru); _inherits = delegasi (product.product → product.template)","Semuanya membuat tabel baru","_inherits sama dengan _inherit","Hanya ada satu jenis"],a:0,
 e:"Delegasi menyimpan field induk di tabel induk lewat Many2one wajib (product_tmpl_id). Prototipe dipakai misalnya mail.thread sebagai mixin: _inherit = ['mail.thread'] di model baru.",
 w:[null,"Ekstensi memakai tabel yang sama.","Mekanismenya berbeda.","Ada tiga."]},
{k:"inherit",t:"mc",lv:2,q:"Field <code>tracking=True</code> (perubahan tercatat di chatter) hanya bekerja jika model…",o:["Mewarisi mail.thread: _inherit = [\"mail.thread\", \"mail.activity.mixin\"]","Punya field name","Bertipe TransientModel","Punya _order"],a:0,
 e:"mail.thread menyediakan chatter, followers, dan pelacakan nilai. Di view form tambahkan <div class=\"oe_chatter\"> dengan field message_follower_ids, activity_ids, message_ids.",
 w:[null,"Tidak cukup.","Wizard tidak punya chatter.","Tidak berhubungan."]},
{k:"inherit",t:"mc",lv:2,q:"Tombol <code>&lt;button name=\"action_approve\" type=\"object\"/&gt;</code> akan…",o:["Memanggil method Python action_approve pada record yang sedang dibuka","Membuka action XML bernama action_approve","Menjalankan JavaScript","Menyimpan form tanpa memanggil apa pun"],a:0,
 e:"type=\"object\" memanggil method model; type=\"action\" membuka ir.actions berdasarkan id XML (name=\"%(modul.xml_id)d\"). Form disimpan dulu sebelum method dipanggil.",
 w:[null,"Itu type=\"action\".","Bukan JavaScript.","Method tetap dipanggil."]},
{k:"inherit",t:"mc",lv:2,q:"Mencegah penghapusan peminjaman yang sudah selesai, cara yang dianjurkan Odoo 17:",o:["@api.ondelete(at_uninstall=False) def _cek_hapus(self): ... raise UserError(...)","Override unlink tanpa super()","Menghapus tombol Delete di view saja","_sql_constraints"],a:0,
 e:"@api.ondelete menjalankan pengecekan sebelum unlink, dan at_uninstall=False membuatnya tidak menghalangi saat modul di-uninstall. Menyembunyikan tombol saja tidak mencegah penghapusan lewat API.",
 w:[null,"Tanpa super record tidak pernah terhapus.","Masih bisa dihapus lewat cara lain.","SQL constraint tidak memeriksa status."]},
{k:"inherit",t:"mc",lv:2,q:"Output kode Python ini (pola yang sama dengan override Odoo):",kode:"class Dasar:\n    def konfirmasi(self):\n        return [\"stok\"]\n\nclass Tambahan(Dasar):\n    def konfirmasi(self):\n        hasil = super().konfirmasi()\n        hasil.append(\"approval\")\n        return hasil\n\nprint(Tambahan().konfirmasi())",o:["['stok', 'approval']","['approval']","['stok']","Error"],a:0,vr:"py",
 e:"super() menjalankan versi induk dulu, lalu class anak menambahkan perilakunya. Inilah cara puluhan modul Odoo bisa memperluas action_confirm yang sama tanpa saling menimpa.",
 w:[null,"Hasil induk tidak dibuang.","Bagian anak ikut ditambahkan.","Tidak error."]},
{k:"inherit",t:"mc",lv:3,q:"Menambahkan status baru 'to_approve' ke field Selection <code>state</code> milik sale.order:",o:["state = fields.Selection(selection_add=[(\"to_approve\", \"To Approve\"), (\"sale\",)], ondelete={\"to_approve\": \"set default\"})","state = fields.Selection([(\"to_approve\", \"To Approve\")])","Mengedit selection di database","Tidak bisa"],a:0,
 e:"selection_add menyisipkan opsi; menyebut ('sale',) setelahnya menentukan posisi sebelum 'sale'. ondelete wajib untuk opsi baru agar Odoo tahu nilai record saat modul di-uninstall.",
 w:[null,"Menimpa seluruh opsi lama.","Selection didefinisikan di kode.","Bisa dengan selection_add."]},
{k:"inherit",t:"is",lv:2,q:"Decorator Odoo 17 untuk override create yang menerima list dict: @api.model_create_……",a:["multi","model_create_multi"],
 e:"@api.model_create_multi def create(self, vals_list): for vals in vals_list: ...; return super().create(vals_list)."},
{k:"inherit",t:"mc",lv:2,q:"Wizard (pop-up) di Odoo dibuat dengan model…",o:["models.TransientModel, datanya dibersihkan otomatis secara berkala","models.Model biasa","models.AbstractModel","Tidak perlu model"],a:0,
 e:"Record TransientModel bersifat sementara. Tombol pembuka wizard mengembalikan action: {\"type\": \"ir.actions.act_window\", \"res_model\": \"x.wizard\", \"view_mode\": \"form\", \"target\": \"new\"}.",
 w:[null,"Model biasa disimpan permanen.","AbstractModel tidak punya tabel.","Wizard butuh model untuk menyimpan isian."]},
{k:"inherit",t:"mc",lv:2,q:"Di method wizard, cara mengambil record asal (misalnya order yang membuka wizard):",o:["self.env.context.get(\"active_id\") atau field Many2one yang diisi lewat default_ di context","self.parent","self.env.user","self.id"],a:0,
 e:"Saat wizard dibuka dari tombol di form, Odoo mengisi active_id, active_ids, dan active_model di context. Cara yang lebih jelas: kirim default_order_id lewat context lalu baca self.order_id.",
 w:[null,"Atribut itu tidak ada.","Itu pengguna, bukan dokumen.","Itu id wizard itu sendiri."]},

// ---- BAB 9: view XML Odoo 17 ----
{k:"view",t:"mc",lv:1,q:"Di Odoo 17, menyembunyikan tombol Confirm kecuali status draft ditulis…",o:["invisible=\"state != 'draft'\"","attrs=\"{'invisible': [('state', '!=', 'draft')]}\"","states=\"draft\"","hidden=\"state\""],a:0,
 e:"Sejak 17.0 atribut attrs dan states dihapus (Odoo menolak view yang memakainya). Kondisi ditulis sebagai ekspresi Python langsung di invisible, readonly, dan required.",
 w:[null,"Sintaks Odoo 16 ke bawah, ditolak di 17.","Sudah dihapus di 17.","Atribut itu tidak ada."]},
{k:"view",t:"mc",lv:2,q:"Menambah field <code>x_approval_note</code> SETELAH field partner_id di form sale.order bawaan:",o:["<xpath expr=\"//field[@name='partner_id']\" position=\"after\"><field name=\"x_approval_note\"/></xpath> di view dengan inherit_id","Menyalin seluruh view sale.order","Mengedit file view di addons/sale","<field name=\"partner_id\" position=\"replace\"/>"],a:0,
 e:"View inheritance: record ir.ui.view dengan <field name=\"inherit_id\" ref=\"sale.view_order_form\"/> dan arch berisi xpath. Posisi: before, after, inside, replace, attributes.",
 w:[null,"Menyalin membuat dua sumber yang berbeda.","Hilang saat update.","replace menghapus field asli."]},
{k:"view",t:"mc",lv:1,q:"Di Odoo 17, elemen XML untuk tampilan daftar (list) adalah…",o:["<tree>","<list>","<table>","<grid>"],a:0,
 e:"Odoo 17 masih memakai <tree> dan view_mode \"tree,form\". (Odoo 18 menggantinya menjadi <list>.) Perhatikan versi saat membaca tutorial.",
 w:[null,"<list> baru di Odoo 18.","Bukan elemen view Odoo.","grid adalah view lain (Enterprise)."]},
{k:"view",t:"mc",lv:2,q:"Menampilkan status sebagai bilah tahapan di header form:",o:["<header><field name=\"state\" widget=\"statusbar\" statusbar_visible=\"draft,confirmed,done\"/></header>","<field name=\"state\" widget=\"progressbar\"/>","<statusbar field=\"state\"/>","<field name=\"state\" type=\"bar\"/>"],a:0,
 e:"Tombol aksi juga ditaruh di <header>. statusbar_visible menentukan tahap yang selalu tampil; tahap lain muncul hanya saat aktif.",
 w:[null,"progressbar untuk angka persen.","Elemen itu tidak ada.","Atribut itu tidak ada."]},
{k:"view",t:"mc",lv:2,q:"Agar menu buka list buku, dibutuhkan…",o:["Record ir.actions.act_window (res_model, view_mode) lalu <menuitem action=\"id_action\"/>","Hanya <menuitem name=\"Buku\"/>","Controller HTTP","File JavaScript"],a:0,
 e:"Rantainya: menu → action → view. Menu tingkat atas tanpa action menjadi aplikasi; sub-menu menunjuk action. Action menentukan model, mode tampilan, domain, dan context.",
 w:[null,"Menu tanpa action tidak membuka apa pun.","Tidak perlu.","Tidak perlu."]},
{k:"view",t:"mc",lv:2,q:"Filter 'Terlambat' di search view untuk peminjaman yang belum kembali dan lewat jatuh tempo:",o:["<filter name=\"terlambat\" string=\"Terlambat\" domain=\"[('state', '=', 'borrowed'), ('due_date', '<', context_today().strftime('%Y-%m-%d'))]\"/>","<field name=\"terlambat\"/>","<filter domain=\"terlambat\"/>","<group by=\"due_date\"/>"],a:0,
 e:"Domain di XML dievaluasi di klien dan boleh memakai context_today(). Karakter < harus ditulis &lt; di XML. Group by ditulis sebagai filter dengan context=\"{'group_by': 'field'}\".",
 w:[null,"field hanya kolom pencarian teks.","domain harus berupa list.","Bukan elemen search view."]},
{k:"view",t:"mc",lv:2,q:"ID XML untuk model library.book yang dipakai di file hak akses (kolom model_id:id):",o:["model_library_book","library.book","library_book","model.library.book"],a:0,
 e:"Odoo membuat ID XML model otomatis: model_ + nama model dengan titik diganti garis bawah. Contoh: sale.order → sale.model_sale_order.",
 w:[null,"Itu nama model, bukan ID XML.","Kurang awalan model_.","Titik tidak dipakai di ID XML."]},
{k:"view",t:"mc",lv:2,q:"Kolom di <code>&lt;tree&gt;</code> yang hanya tampil untuk sebagian kondisi di Odoo 17 memakai…",o:["column_invisible untuk menyembunyikan seluruh kolom; invisible untuk menyembunyikan sel per baris","attrs","states","optional=\"never\""],a:0,
 e:"column_invisible dievaluasi sekali untuk seluruh list (biasanya berdasarkan context/parent). invisible pada field di list menyembunyikan nilai per baris. optional=\"show/hide\" membuat kolom bisa dipilih pengguna.",
 w:[null,"attrs dihapus di 17.","states dihapus di 17.","Nilai optional hanya show atau hide."]},
{k:"view",t:"is",lv:1,q:"Nilai atribut position di xpath untuk menyisipkan elemen tepat SEBELUM elemen yang ditemukan: position=\"……\"",a:["before"],
 e:"Pilihan position: before, after, inside (masuk ke dalam, di akhir), replace, attributes (mengubah atribut). Elemen <field name=\"x\" position=\"after\"> juga bisa dipakai sebagai singkatan xpath."},
{k:"view",t:"mc",lv:3,q:"Laporan PDF di Odoo (misalnya cetak bukti peminjaman) dibuat dengan…",o:["Template QWeb (t-foreach, t-esc/t-out, t-if) + record ir.actions.report dengan report_type qweb-pdf","Jinja2","Excel","Canvas JavaScript"],a:0,
 e:"QWeb adalah mesin template XML Odoo. t-foreach=\"docs\" t-as=\"o\" mengulang record; t-out menampilkan nilai dengan escape. wkhtmltopdf mengubah HTML menjadi PDF.",
 w:[null,"Odoo tidak memakai Jinja2 untuk laporan.","Bukan mekanisme laporan bawaan.","Tidak dipakai untuk PDF."]},
{k:"view",t:"mc",lv:2,q:"Kenapa view inheritance memakai <code>inherit_id</code> dan xpath, bukan mengedit view asli?",o:["Supaya perubahan tetap ada saat modul asli di-update dan bisa dilepas dengan meng-uninstall modulmu","Karena view asli terkunci password","Agar lebih cepat dimuat","Tidak ada alasannya"],a:0,
 e:"Odoo menggabungkan view induk dengan semua view turunan saat dimuat. Modul yang rapi tidak pernah menyentuh file modul lain.",
 w:[null,"Tidak ada password.","Bukan alasan utamanya.","Ada alasan pemeliharaan."]},

// ---- BAB 10: keamanan, cron, tes & debugging ----
{k:"security",t:"mc",lv:1,q:"Header file <code>ir.model.access.csv</code> yang benar:",o:["id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink","id,model,group,read,write","name,model,permission","model_id,group_id,access"],a:0,
 e:"Contoh baris: access_library_book_user,library.book user,model_library_book,base.group_user,1,1,1,0. Model tanpa baris akses tidak bisa dibuka siapa pun kecuali superuser (Odoo memberi peringatan di log).",
 w:[null,"Kolomnya kurang.","Bukan format Odoo.","Bukan format Odoo."]},
{k:"security",t:"mc",lv:2,q:"Beda ACL (ir.model.access) dan record rule (ir.rule):",o:["ACL mengatur boleh baca/tulis/buat/hapus MODEL; record rule membatasi RECORD mana yang terlihat (misalnya hanya dokumen milik sendiri)","Sama saja","Record rule mengatur menu","ACL untuk field"],a:0,
 e:"Contoh record rule: domain_force [('user_id', '=', user.id)] untuk grup 'Own Documents Only'. Hak akses per field diatur lewat groups= di definisi field atau view.",
 w:[null,"Tingkatnya berbeda.","Menu diatur dengan groups di menuitem.","ACL per model, bukan per field."]},
{k:"security",t:"mc",lv:2,q:"Grup baru 'Library Manager' sebaiknya otomatis memiliki semua hak 'Library User'. Caranya:",o:["Di record res.groups manager: implied_ids = [Command.link(ref('group_library_user'))]","Duplikat semua baris ACL","Tambahkan manual ke setiap user","Tidak bisa"],a:0,
 e:"implied_ids membuat rantai grup: siapa pun di Manager otomatis menjadi User. Di XML: <field name=\"implied_ids\" eval=\"[(4, ref('group_library_user'))]\"/>.",
 w:[null,"Rawan tidak sinkron.","Tidak praktis.","Bisa dengan implied_ids."]},
{k:"security",t:"mc",lv:2,q:"Tugas otomatis setiap hari (misalnya menandai peminjaman terlambat) dibuat dengan…",o:["Record ir.cron yang memanggil method model, misalnya code = model._cron_tandai_terlambat()","Perulangan while True di __init__.py","Task Scheduler Windows yang membuka browser","onchange"],a:0,
 e:"ir.cron punya interval_number dan interval_type (days, hours...). Di Odoo 17 masih ada numbercall (-1 = tanpa batas). Method cron sebaiknya memproses per batch agar tidak timeout.",
 w:[null,"Menghentikan server.","Tidak andal.","onchange hanya di form."]},
{k:"security",t:"mc",lv:2,q:"Kelas tes standar Odoo yang menjalankan setiap tes dalam transaksi yang dibatalkan di akhir:",o:["TransactionCase (from odoo.tests import TransactionCase)","unittest.TestCase biasa","HttpCase untuk semua tes","pytest fixture"],a:0,
 e:"Setiap method test_ berjalan di savepoint lalu di-rollback, jadi database tidak kotor. HttpCase untuk tes tur browser. Tandai dengan @tagged('post_install', '-at_install') bila butuh semua modul terpasang.",
 w:[null,"Tidak punya env dan rollback Odoo.","HttpCase lebih berat dan untuk UI.","Odoo memakai runner sendiri."]},
{k:"security",t:"mc",lv:2,q:"Perintah menjalankan tes modul library saja:",o:["./odoo-bin -c odoo.conf -d db_uji -i library --test-tags /library --stop-after-init","python -m pytest library","./odoo-bin --run-tests","npm test"],a:0,
 e:"--test-tags /nama_modul membatasi tes ke modul itu; --stop-after-init mematikan server setelah selesai. Pakai database khusus uji, jangan database produksi.",
 w:[null,"Tes Odoo butuh registry Odoo.","Opsi itu tidak ada.","Bukan untuk Python/Odoo."]},
{k:"security",t:"mc",lv:2,q:"Muncul error <code>KeyError: 'library.book'</code> setelah menambah model baru. Penyebab paling mungkin:",o:["File Python model belum diimpor di __init__.py atau modul belum di-upgrade","Database rusak","Browser perlu dibersihkan","PostgreSQL mati"],a:0,
 e:"Model hanya terdaftar bila filenya diimpor dan modul di-upgrade (-u). Cek rantai __init__.py, lalu restart server dengan -u library.",
 w:[null,"Jarang penyebabnya.","Ini error server.","Kalau mati, error-nya berbeda."]},
{k:"security",t:"mc",lv:2,q:"Mengaktifkan mode developer untuk melihat nama teknis field dan view:",o:["Tambahkan ?debug=1 di URL (atau Settings ▸ Activate developer mode)","Restart PostgreSQL","Install modul debug","Tekan F12 saja"],a:0,
 e:"Mode debug menampilkan tooltip nama field, menu Technical, dan Edit View. ?debug=assets juga memuat JavaScript tanpa minify untuk debugging frontend.",
 w:[null,"Tidak berhubungan.","Tidak perlu modul.","F12 hanya membuka DevTools browser."]},
{k:"security",t:"mc",lv:3,q:"Kode controller ini berbahaya karena…",kode:"@http.route(\"/buku\", auth=\"public\")\ndef buku(self, judul):\n    request.env.cr.execute(\"SELECT id FROM library_book WHERE name = '%s'\" % judul)",o:["Rentan SQL injection: input pengguna disisipkan langsung ke SQL. Gunakan ORM atau parameter (%s, (judul,))","auth harus api","Route harus diawali /web","Tidak berbahaya"],a:0,
 e:"Judul seperti ' OR 1=1 -- bisa membaca atau merusak data. Pakai ORM (search([('name', '=', judul)])) atau cr.execute(query, (judul,)) yang di-escape PostgreSQL. Akses public juga harus dibatasi dengan sudo() yang terukur.",
 w:[null,"Bukan masalah utamanya.","Tidak wajib.","Sangat berbahaya."]},
{k:"security",t:"mc",lv:2,q:"Dalam multi-company, field <code>company_id</code> dan record rule <code>[('company_id', 'in', company_ids)]</code> berguna untuk…",o:["Membatasi pengguna hanya melihat data perusahaan yang sedang diizinkan/dipilih","Menghitung pajak","Mempercepat query","Mengganti mata uang"],a:0,
 e:"company_ids di domain record rule berisi perusahaan yang aktif dipilih pengguna. check_company=True pada Many2one mencegah relasi lintas perusahaan yang tidak sah.",
 w:[null,"Pajak diatur di modul akuntansi.","Bukan tujuannya.","Mata uang diatur di company."]},
{k:"security",t:"is",lv:2,q:"Opsi baris perintah Odoo untuk berhenti setelah instalasi/tes selesai: --stop-after-……",a:["init","--stop-after-init"],
 e:"Gabungan yang umum: -d db_uji -i modul --test-enable --stop-after-init. Tanpa opsi ini server tetap berjalan setelah tes."},
{k:"security",t:"mc",lv:2,q:"Mencatat proses penting di log server dari kode modul:",o:["_logger = logging.getLogger(__name__) lalu _logger.info(\"...\")","print() di setiap baris","Menulis ke file txt manual","raise Exception"],a:0,
 e:"logging terintegrasi dengan konfigurasi log Odoo (level, file). Gunakan _logger.warning untuk kejadian aneh dan _logger.exception di dalam except untuk menyertakan traceback.",
 w:[null,"print tidak bisa diatur levelnya.","Tidak perlu.","Menghentikan proses."]},
];

const MATERI_CT = [
{k:"strategi",judul:"Strategi Coding Test & Big-O",materi:`
<!--pemula--><h4>Untuk pemula: coding test itu menilai apa?</h4>
<p>Coding test bukan lomba hafalan. Penilai ingin melihat tiga hal: <b>apakah kamu paham soal</b>, <b>apakah kodemu benar untuk semua kasus</b>, dan <b>apakah kodemu bisa dibaca orang lain</b>. Untuk posisi Junior Odoo Developer, tingkat soalnya biasanya: logika dasar Python (string, list, dict, perulangan), sedikit algoritma, lalu soal yang mirip pekerjaan Odoo (menghitung total order, menyaring data, membuat model kecil).</p><!--/pemula-->
<h4>1. Format yang sering dipakai</h4>
<table class="mini-pivot"><tr><th>Format</th><th>Bentuknya</th><th>Kunci sukses</th></tr>
<tr><td>Online test (HackerRank, Codility)</td><td>Tulis fungsi, diuji tes tersembunyi</td><td>Uji kasus tepi sebelum kirim</td></tr>
<tr><td>Live coding</td><td>Menulis kode sambil dilihat pewawancara</td><td>Bicarakan rencanamu, mulai dari solusi sederhana</td></tr>
<tr><td>Take-home</td><td>Membuat modul kecil dalam 1–3 hari</td><td>README, tes, commit rapi</td></tr></table>
<h4>2. Lima langkah mengerjakan soal</h4>
<ol><li><b>Pahami</b>: baca dua kali, garis bawahi input, output, dan batasan.</li>
<li><b>Contoh sendiri</b>: tulis 3–4 contoh, termasuk kasus tepi: list kosong, satu elemen, angka nol/negatif, data kembar.</li>
<li><b>Rencana</b>: tulis langkah dalam bahasa biasa atau komentar.</li>
<li><b>Kode</b>: nama variabel jelas, fungsi kecil.</li>
<li><b>Uji</b>: jalankan semua contohmu, terutama kasus tepi.</li></ol>
<h4>3. Big-O singkat</h4>
<table class="mini-pivot"><tr><th>Big-O</th><th>Contoh</th><th>1.000 data → langkah</th></tr>
<tr><td>O(1)</td><td>ambil d[kunci], x in set</td><td>1</td></tr>
<tr><td>O(log n)</td><td>binary search</td><td>±10</td></tr>
<tr><td>O(n)</td><td>satu for</td><td>1.000</td></tr>
<tr><td>O(n log n)</td><td>sorted()</td><td>±10.000</td></tr>
<tr><td>O(n²)</td><td>for di dalam for</td><td>1.000.000</td></tr></table>
<p>Trik optimasi paling sering: ganti pencarian di list (<code>x in list</code>, O(n)) dengan set/dict (O(1)).</p>
<pre><code># lambat O(n²)                  # cepat O(n)
for a in data:                  sudah = set()
    for b in data:              for x in data:
        if a + b == t: ...          if t - x in sudah: ...
                                    sudah.add(x)</code></pre>
<h4>4. Kode yang dinilai baik</h4>
<ul><li>PEP 8: <code>snake_case</code> untuk fungsi dan variabel, <code>PascalCase</code> untuk class, indentasi 4 spasi.</li>
<li>Satu fungsi satu tugas; komentar menjelaskan <i>kenapa</i>, bukan <i>apa</i>.</li>
<li>Jangan lupa: <code>list.sort()</code> mengembalikan <code>None</code>; <code>//</code> membulatkan ke bawah (<code>-7 // 2 = -4</code>).</li></ul>`},
{k:"baca",judul:"Membaca Kode: Jebakan Python yang Sering Muncul",materi:`
<!--pemula--><h4>Untuk pemula: kenapa soal 'tebak output' sering keluar?</h4>
<p>Soal "apa output kode ini?" menguji apakah kamu benar-benar paham cara Python bekerja, bukan sekadar hafal sintaks. Jebakannya hampir selalu sama, jadi kalau sudah tahu polanya, soal seperti ini justru paling cepat dikerjakan.</p><!--/pemula-->
<h4>1. Variabel menunjuk objek, bukan menyalin</h4>
<pre><code>a = [1, 2]
b = a          # b dan a objek yang SAMA
b.append(3)    # a juga jadi [1, 2, 3]
c = a.copy()   # salinan (dangkal)</code></pre>
<h4>2. Nilai bawaan yang bisa berubah</h4>
<pre><code>def tambah(x, wadah=[]):     # [] dibuat SEKALI saat def
    wadah.append(x)
    return wadah
# Perbaikan:
def tambah(x, wadah=None):
    if wadah is None:
        wadah = []</code></pre>
<h4>3. Slicing dan indeks</h4>
<p><code>s[a:b]</code> mengambil indeks a sampai b−1. <code>s[-1]</code> elemen terakhir. <code>s[::-1]</code> dibalik. Slicing tidak pernah error walau melewati batas, tapi <code>s[10]</code> pada string pendek error (IndexError).</p>
<h4>4. Scope (ruang lingkup)</h4>
<p>Memberi nilai ke variabel di dalam fungsi membuat variabel <b>lokal</b> baru. Variabel global tidak berubah kecuali memakai <code>global</code>.</p>
<h4>5. Float tidak persis</h4>
<p><code>0.1 + 0.2 == 0.3</code> bernilai <code>False</code>. Bandingkan dengan <code>round()</code> atau <code>math.isclose()</code>. Odoo memakai <code>float_compare</code>/<code>float_is_zero</code> dengan presisi mata uang.</p>
<h4>6. Hal kecil lain</h4>
<ul><li>Tuple dibuat oleh koma: <code>(1)</code> = int, <code>(1,)</code> = tuple.</li>
<li><code>dict.get(k)</code> → None, <code>dict[k]</code> → KeyError bila tidak ada.</li>
<li><code>sorted()</code> membuat list baru; <code>.sort()</code> mengubah list dan mengembalikan None.</li>
<li><code>finally</code> selalu dijalankan.</li>
<li>Lambda di dalam perulangan menyimpan variabelnya, bukan nilainya (late binding).</li></ul>`},
{k:"algo",judul:"Pola Algoritma untuk Tes Junior",materi:`
<!--pemula--><h4>Untuk pemula: kamu tidak perlu hafal ratusan algoritma</h4>
<p>Untuk tingkat junior, hampir semua soal bisa diselesaikan dengan 6 pola di bawah. Saat membaca soal, tanyakan: "ini pola yang mana?"</p><!--/pemula-->
<table class="mini-pivot"><tr><th>Pola</th><th>Ciri soal</th><th>Alat Python</th></tr>
<tr><td>Hash map / hitung</td><td>"berapa kali muncul", "pasangan yang jumlahnya…", "ada duplikat?"</td><td>dict, set, Counter</td></tr>
<tr><td>Urutkan dulu</td><td>interval, "terdekat", ranking</td><td>sorted(key=...)</td></tr>
<tr><td>Stack</td><td>kurung, undo, ekspresi bersarang</td><td>list.append / pop</td></tr>
<tr><td>Dua penunjuk</td><td>palindrom, data terurut</td><td>indeks kiri & kanan</td></tr>
<tr><td>Binary search</td><td>cari di data terurut</td><td>bisect atau while kiri &lt;= kanan</td></tr>
<tr><td>Rekursi</td><td>data bersarang, pohon kategori</td><td>fungsi memanggil diri sendiri + kasus dasar</td></tr></table>
<h4>Contoh: pola hash map</h4>
<pre><code>def ada_duplikat(data):
    sudah = set()
    for x in data:
        if x in sudah:
            return True
        sudah.add(x)
    return False</code></pre>
<h4>Contoh: key tuple untuk urutan bertingkat</h4>
<pre><code>produk = [("kopi", 3), ("teh", 5), ("susu", 3)]
# qty terbanyak dulu, seri diurutkan nama
sorted(produk, key=lambda p: (-p[1], p[0]))
# [('teh', 5), ('kopi', 3), ('susu', 3)]</code></pre>
<h4>Contoh: Kadane (jumlah sub-list terbesar)</h4>
<pre><code>terbaik = sekarang = data[0]
for x in data[1:]:
    sekarang = max(x, sekarang + x)
    terbaik = max(terbaik, sekarang)</code></pre>
<p>Ingat kasus batas: binary search memakai <code>kiri &lt;= kanan</code>; Fibonacci rekursif murni sangat lambat (O(2ⁿ)).</p>`},
{k:"otomasi",judul:"Python untuk Otomasi & Data (Gaya Perusahaan RPA)",materi:`
<!--pemula--><h4>Untuk pemula: apa itu RPA?</h4>
<p>RPA (Robotic Process Automation) adalah program yang meniru pekerjaan manusia di komputer: membaca email, mengambil data dari file, mengisi sistem seperti Odoo, lalu membuat laporan. Python sangat sering dipakai untuk bagian "membaca, membersihkan, dan memindahkan data".</p><!--/pemula-->
<h4>1. File, CSV, JSON</h4>
<pre><code>import csv, json
with open("penjualan.csv", encoding="utf-8", newline="") as f:
    for baris in csv.DictReader(f):       # tiap baris = dict
        print(baris["produk"], int(baris["qty"]))

data = json.loads('{"versi": 17}')        # teks → dict
teks = json.dumps(data, indent=2)          # dict → teks</code></pre>
<h4>2. Regex untuk mengambil pola</h4>
<pre><code>import re
re.findall(r"\\d+", "SO/2026/0042")              # ['2026', '0042']
re.sub(r"\\D", "", "0812-3456")                  # '08123456'
re.search(r"(\\d+)$", "SO/2026/0042").group(1)   # '0042'</code></pre>
<h4>3. Tanggal</h4>
<pre><code>from datetime import date, datetime, timedelta
datetime.strptime("24/11/2026", "%d/%m/%Y")   # teks → tanggal
d.strftime("%Y-%m-%d")                        # tanggal → teks
date(2026, 1, 31) + timedelta(days=30)        # 2026-03-02</code></pre>
<h4>4. Berbicara dengan Odoo dari luar (XML-RPC)</h4>
<pre><code>import xmlrpc.client
url, db = "http://localhost:8069", "dbku"
common = xmlrpc.client.ServerProxy(url + "/xmlrpc/2/common")
uid = common.authenticate(db, "user@contoh.com", API_KEY, {})
models = xmlrpc.client.ServerProxy(url + "/xmlrpc/2/object")
orders = models.execute_kw(db, uid, API_KEY, "sale.order", "search_read",
    [[("state", "=", "sale")]], {"fields": ["name", "amount_total"], "limit": 5})</code></pre>
<h4>5. Kebiasaan aman</h4>
<ul><li>Rahasia (password, API key) di environment variable: <code>os.environ.get("ODOO_API_KEY")</code>, jangan di kode.</li>
<li>Coba ulang (retry) dengan jeda untuk gangguan sementara, dan catat semuanya di log.</li>
<li>Validasi dan normalisasi data sebelum diimpor (nomor telepon, tanggal, email).</li></ul>`},
{k:"model",judul:"Odoo: Struktur Modul, Model & Field",materi:`
<!--pemula--><h4>Untuk pemula: modul Odoo itu isinya apa?</h4>
<p>Modul adalah folder berisi kode Python (logika dan data), XML (tampilan dan menu), dan CSV (hak akses). Odoo membaca <code>__manifest__.py</code> untuk tahu modul itu butuh modul apa dan file mana yang harus dimuat.</p><!--/pemula-->
<h4>1. Struktur folder</h4>
<pre><code>library/
├── __init__.py            # from . import models
├── __manifest__.py
├── models/
│   ├── __init__.py        # from . import library_book
│   └── library_book.py
├── security/
│   └── ir.model.access.csv
└── views/
    └── library_book_views.xml</code></pre>
<h4>2. __manifest__.py</h4>
<pre><code>{
    "name": "Library",
    "version": "17.0.1.0.0",
    "depends": ["base", "mail"],
    "data": [
        "security/ir.model.access.csv",   # urutan penting: security dulu
        "views/library_book_views.xml",
    ],
    "license": "LGPL-3",
    "application": True,
}</code></pre>
<h4>3. Model dan field</h4>
<pre><code>from odoo import fields, models

class LibraryBook(models.Model):
    _name = "library.book"
    _description = "Buku Perpustakaan"
    _order = "name"

    name = fields.Char("Judul", required=True)
    isbn = fields.Char()
    author_id = fields.Many2one("res.partner", string="Penulis", ondelete="restrict")
    tag_ids = fields.Many2many("library.tag")
    copy_ids = fields.One2many("library.copy", "book_id")   # butuh book_id di library.copy
    price = fields.Monetary(currency_field="currency_id")
    currency_id = fields.Many2one("res.currency", default=lambda self: self.env.company.currency_id)
    date_added = fields.Date(default=fields.Date.context_today)
    state = fields.Selection([("draft", "Draft"), ("available", "Tersedia")], default="draft")
    active = fields.Boolean(default=True)   # False = diarsipkan

    _sql_constraints = [("isbn_uniq", "unique(isbn)", "ISBN sudah dipakai buku lain.")]</code></pre>
<table class="mini-pivot"><tr><th>Relasi</th><th>Arti</th><th>Disimpan di</th></tr>
<tr><td>Many2one</td><td>banyak → satu</td><td>kolom author_id</td></tr>
<tr><td>One2many</td><td>satu → banyak (kebalikan Many2one)</td><td>tidak ada kolom; membaca Many2one di model lain</td></tr>
<tr><td>Many2many</td><td>banyak ↔ banyak</td><td>tabel relasi</td></tr></table>
<p>Setelah mengubah field atau XML: jalankan ulang server dengan <code>-u library</code>.</p>`},
{k:"compute",judul:"Odoo: Compute, Onchange & Constraints",materi:`
<!--pemula--><h4>Untuk pemula: tiga cara 'otomatis' di Odoo</h4>
<p><b>Compute</b> menghitung nilai (seperti rumus Excel), <b>onchange</b> mengisi form saat pengguna mengetik, dan <b>constraints</b> menolak data yang salah saat disimpan.</p><!--/pemula-->
<h4>1. Field compute</h4>
<pre><code>from odoo import api, fields, models

class LibraryLoan(models.Model):
    _name = "library.loan"
    _description = "Peminjaman"

    line_ids = fields.One2many("library.loan.line", "loan_id")
    total_fee = fields.Monetary(compute="_compute_total_fee", store=True, currency_field="currency_id")

    @api.depends("line_ids.fee")
    def _compute_total_fee(self):
        for loan in self:                       # self = recordset
            loan.total_fee = sum(loan.line_ids.mapped("fee"))</code></pre>
<ul><li>Isi field untuk <b>setiap</b> record, termasuk yang nilainya 0.</li>
<li><code>store=True</code>: disimpan, bisa dicari dan dikelompokkan. Lengkapi <code>@api.depends</code> atau nilainya basi.</li>
<li><code>related="partner_id.email"</code>: jalan pintas untuk menyalin field lewat relasi.</li>
<li><code>inverse=</code>: membuat field compute bisa diedit.</li></ul>
<h4>2. Constraint</h4>
<pre><code>from odoo.exceptions import ValidationError

@api.constrains("date_borrow", "date_due")
def _check_dates(self):
    for loan in self:
        if loan.date_due and loan.date_due &lt; loan.date_borrow:
            raise ValidationError("Tanggal kembali tidak boleh sebelum tanggal pinjam.")</code></pre>
<p>Constraint hanya menerima field biasa model itu (tanpa titik), dan dipicu ketika field itu ada di create/write.</p>
<h4>3. Onchange</h4>
<pre><code>@api.onchange("book_id")
def _onchange_book(self):
    if self.book_id and self.book_id.state != "available":
        return {"warning": {"title": "Perhatian", "message": "Buku sedang dipinjam."}}</code></pre>
<p>Onchange hanya berjalan di form. Aturan yang wajib selalu berlaku (impor, API) taruh di constraint atau create/write.</p>`},
{k:"orm",judul:"Odoo: ORM, Domain & Command",materi:`
<!--pemula--><h4>Untuk pemula: ORM itu apa?</h4>
<p>ORM (Object-Relational Mapping) membuat kita bekerja dengan database lewat objek Python, bukan SQL. ORM Odoo juga otomatis menerapkan hak akses, aturan multi-company, dan menyimpan cache.</p><!--/pemula-->
<h4>1. Membaca data</h4>
<pre><code>Order = self.env["sale.order"]
orders = Order.search([("state", "=", "sale"), ("amount_total", "&gt;", 1000)], order="date_order desc", limit=10)
jumlah = Order.search_count([("state", "=", "draft")])
satu = Order.browse(42).exists()
data = Order.search_read([("state", "=", "sale")], ["name", "amount_total"])</code></pre>
<h4>2. Domain (notasi prefiks)</h4>
<pre><code>[("state", "in", ["draft", "sent"])]                      # IN
["|", ("state", "=", "draft"), ("user_id", "=", uid)]    # OR untuk 2 elemen berikutnya
["!", ("active", "=", True)]                              # NOT
# tanpa operator = AND</code></pre>
<h4>3. Recordset</h4>
<pre><code>besar = orders.filtered(lambda o: o.amount_total &gt; 5000)
nama = orders.mapped("partner_id.name")
urut = orders.sorted("amount_total", reverse=True)
order.ensure_one()</code></pre>
<h4>4. Menulis data dengan Command</h4>
<pre><code>from odoo import Command
order = Order.create({
    "partner_id": partner.id,
    "order_line": [Command.create({"product_id": p.id, "product_uom_qty": 2})],
})
order.write({"tag_ids": [Command.link(tag.id)]})      # tambah satu
order.write({"tag_ids": [Command.set(tags.ids)]})     # ganti semua</code></pre>
<table class="mini-pivot"><tr><th>Command</th><th>Tuple lama</th><th>Arti</th></tr>
<tr><td>create(vals)</td><td>(0, 0, vals)</td><td>buat baris baru</td></tr>
<tr><td>update(id, vals)</td><td>(1, id, vals)</td><td>ubah baris</td></tr>
<tr><td>delete(id)</td><td>(2, id)</td><td>hapus record</td></tr>
<tr><td>unlink(id)</td><td>(3, id)</td><td>putus relasi</td></tr>
<tr><td>link(id)</td><td>(4, id)</td><td>sambungkan</td></tr>
<tr><td>clear()</td><td>(5,)</td><td>putus semua</td></tr>
<tr><td>set(ids)</td><td>(6, 0, ids)</td><td>ganti semua</td></tr></table>
<h4>5. env, context, sudo</h4>
<ul><li><code>self.env.user</code>, <code>self.env.company</code>, <code>self.env.ref("sale.view_order_form")</code>.</li>
<li><code>self.with_context(default_partner_id=p.id)</code> mengirim nilai bawaan.</li>
<li><code>sudo()</code> melewati hak akses: pakai seminimal mungkin.</li>
<li>Hindari N+1 query: jangan <code>search</code> di dalam perulangan; pakai <code>_read_group</code> atau <code>mapped</code>.</li></ul>`},
{k:"inherit",judul:"Odoo: Inheritance, Override & Wizard",materi:`
<!--pemula--><h4>Untuk pemula: memperluas tanpa mengubah aslinya</h4>
<p>Prinsip emas Odoo: <b>jangan pernah mengedit modul bawaan</b>. Tambahkan perilaku lewat modulmu sendiri dengan <code>_inherit</code>, lalu panggil logika asli dengan <code>super()</code>.</p><!--/pemula-->
<h4>1. Tiga jenis inheritance</h4>
<table class="mini-pivot"><tr><th>Jenis</th><th>Kode</th><th>Tabel</th></tr>
<tr><td>Ekstensi</td><td><code>_inherit = "sale.order"</code></td><td>sama</td></tr>
<tr><td>Prototipe</td><td><code>_name = "x"</code> + <code>_inherit = ["mail.thread"]</code></td><td>baru, menyalin struktur</td></tr>
<tr><td>Delegasi</td><td><code>_inherits = {"product.template": "product_tmpl_id"}</code></td><td>field induk di tabel induk</td></tr></table>
<h4>2. Override method</h4>
<pre><code>from odoo import api, fields, models
from odoo.exceptions import UserError

class SaleOrder(models.Model):
    _inherit = "sale.order"

    state = fields.Selection(selection_add=[("to_approve", "To Approve"), ("sale",)],
                             ondelete={"to_approve": "set default"})

    def action_confirm(self):
        perlu = self.filtered(lambda o: o.amount_total &gt; 10_000_000)
        perlu.write({"state": "to_approve"})
        return super(SaleOrder, self - perlu).action_confirm()

    @api.model_create_multi
    def create(self, vals_list):
        for vals in vals_list:
            vals.setdefault("note", "Dibuat oleh modul approval")
        return super().create(vals_list)

    @api.ondelete(at_uninstall=False)
    def _cek_hapus(self):
        if any(o.state == "to_approve" for o in self):
            raise UserError("Order yang menunggu approval tidak boleh dihapus.")</code></pre>
<h4>3. Wizard</h4>
<pre><code>class RejectWizard(models.TransientModel):
    _name = "sale.reject.wizard"
    _description = "Alasan penolakan"

    order_id = fields.Many2one("sale.order", required=True)
    reason = fields.Text(required=True)

    def action_reject(self):
        self.order_id.write({"state": "draft"})
        self.order_id.message_post(body=f"Ditolak: {self.reason}")

# tombol di sale.order yang membuka wizard:
def action_open_reject(self):
    self.ensure_one()
    return {"type": "ir.actions.act_window", "res_model": "sale.reject.wizard",
            "view_mode": "form", "target": "new",
            "context": {"default_order_id": self.id}}</code></pre>
<p><code>tracking=True</code> dan <code>message_post</code> butuh model yang mewarisi <code>mail.thread</code> (sale.order sudah).</p>`},
{k:"view",judul:"Odoo 17: View XML, Action, Menu & QWeb",materi:`
<!--pemula--><h4>Untuk pemula: rantai menu → action → view</h4>
<p>Menu yang diklik membuka <b>action</b>; action menentukan model dan jenis tampilan; <b>view</b> menentukan field mana yang tampil dan bagaimana tata letaknya.</p><!--/pemula-->
<h4>1. Form dan list (Odoo 17)</h4>
<pre><code>&lt;record id="library_book_view_form" model="ir.ui.view"&gt;
    &lt;field name="name"&gt;library.book.form&lt;/field&gt;
    &lt;field name="model"&gt;library.book&lt;/field&gt;
    &lt;field name="arch" type="xml"&gt;
        &lt;form&gt;
            &lt;header&gt;
                &lt;button name="action_make_available" type="object" string="Tersedia"
                        class="oe_highlight" invisible="state != 'draft'"/&gt;
                &lt;field name="state" widget="statusbar" statusbar_visible="draft,available"/&gt;
            &lt;/header&gt;
            &lt;sheet&gt;
                &lt;group&gt;
                    &lt;field name="name"/&gt;
                    &lt;field name="author_id"/&gt;
                    &lt;field name="isbn" readonly="state != 'draft'"/&gt;
                &lt;/group&gt;
            &lt;/sheet&gt;
        &lt;/form&gt;
    &lt;/field&gt;
&lt;/record&gt;

&lt;record id="library_book_view_tree" model="ir.ui.view"&gt;
    &lt;field name="name"&gt;library.book.tree&lt;/field&gt;
    &lt;field name="model"&gt;library.book&lt;/field&gt;
    &lt;field name="arch" type="xml"&gt;
        &lt;tree&gt;&lt;field name="name"/&gt;&lt;field name="author_id"/&gt;&lt;/tree&gt;
    &lt;/field&gt;
&lt;/record&gt;</code></pre>
<p><b>Odoo 17:</b> <code>attrs</code> dan <code>states</code> sudah dihapus. Tulis <code>invisible="..."</code>, <code>readonly="..."</code>, <code>required="..."</code> sebagai ekspresi. List masih <code>&lt;tree&gt;</code> (Odoo 18 menjadi <code>&lt;list&gt;</code>).</p>
<h4>2. Action dan menu</h4>
<pre><code>&lt;record id="library_book_action" model="ir.actions.act_window"&gt;
    &lt;field name="name"&gt;Buku&lt;/field&gt;
    &lt;field name="res_model"&gt;library.book&lt;/field&gt;
    &lt;field name="view_mode"&gt;tree,form&lt;/field&gt;
&lt;/record&gt;
&lt;menuitem id="library_menu_root" name="Perpustakaan"/&gt;
&lt;menuitem id="library_book_menu" name="Buku" parent="library_menu_root" action="library_book_action"/&gt;</code></pre>
<h4>3. Mewarisi view yang sudah ada</h4>
<pre><code>&lt;record id="view_order_form_inherit_approval" model="ir.ui.view"&gt;
    &lt;field name="name"&gt;sale.order.form.approval&lt;/field&gt;
    &lt;field name="model"&gt;sale.order&lt;/field&gt;
    &lt;field name="inherit_id" ref="sale.view_order_form"/&gt;
    &lt;field name="arch" type="xml"&gt;
        &lt;xpath expr="//field[@name='partner_id']" position="after"&gt;
            &lt;field name="x_approval_note"/&gt;
        &lt;/xpath&gt;
    &lt;/field&gt;
&lt;/record&gt;</code></pre>
<p>Posisi: <code>before</code>, <code>after</code>, <code>inside</code>, <code>replace</code>, <code>attributes</code>.</p>
<h4>4. Search view & QWeb</h4>
<pre><code>&lt;search&gt;
    &lt;field name="name"/&gt;
    &lt;filter name="draft" string="Draft" domain="[('state', '=', 'draft')]"/&gt;
    &lt;filter name="by_author" string="Penulis" context="{'group_by': 'author_id'}"/&gt;
&lt;/search&gt;</code></pre>
<p>Laporan PDF memakai template QWeb (<code>t-foreach</code>, <code>t-out</code>, <code>t-if</code>) dan <code>ir.actions.report</code> dengan <code>report_type</code> <code>qweb-pdf</code>.</p>`},
{k:"security",judul:"Odoo: Keamanan, Cron, Tes & Debugging",materi:`
<!--pemula--><h4>Untuk pemula: dua lapis keamanan</h4>
<p><b>ACL</b> menjawab "boleh membuka model ini?", <b>record rule</b> menjawab "record mana saja yang boleh dilihat?". Keduanya diberikan ke <b>grup</b>, lalu pengguna dimasukkan ke grup.</p><!--/pemula-->
<h4>1. Grup dan ACL</h4>
<pre><code>&lt;record id="group_library_user" model="res.groups"&gt;
    &lt;field name="name"&gt;Library User&lt;/field&gt;
&lt;/record&gt;
&lt;record id="group_library_manager" model="res.groups"&gt;
    &lt;field name="name"&gt;Library Manager&lt;/field&gt;
    &lt;field name="implied_ids" eval="[(4, ref('group_library_user'))]"/&gt;
&lt;/record&gt;</code></pre>
<pre><code>id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
access_library_book_user,library.book user,model_library_book,group_library_user,1,0,0,0
access_library_book_manager,library.book manager,model_library_book,group_library_manager,1,1,1,1</code></pre>
<h4>2. Record rule</h4>
<pre><code>&lt;record id="library_loan_rule_own" model="ir.rule"&gt;
    &lt;field name="name"&gt;Peminjaman milik sendiri&lt;/field&gt;
    &lt;field name="model_id" ref="model_library_loan"/&gt;
    &lt;field name="domain_force"&gt;[('user_id', '=', user.id)]&lt;/field&gt;
    &lt;field name="groups" eval="[(4, ref('group_library_user'))]"/&gt;
&lt;/record&gt;</code></pre>
<h4>3. Cron</h4>
<pre><code>&lt;record id="ir_cron_library_overdue" model="ir.cron"&gt;
    &lt;field name="name"&gt;Library: tandai terlambat&lt;/field&gt;
    &lt;field name="model_id" ref="model_library_loan"/&gt;
    &lt;field name="state"&gt;code&lt;/field&gt;
    &lt;field name="code"&gt;model._cron_mark_overdue()&lt;/field&gt;
    &lt;field name="interval_number"&gt;1&lt;/field&gt;
    &lt;field name="interval_type"&gt;days&lt;/field&gt;
    &lt;field name="numbercall"&gt;-1&lt;/field&gt;
&lt;/record&gt;</code></pre>
<h4>4. Tes otomatis</h4>
<pre><code>from odoo.tests import TransactionCase, tagged

@tagged("post_install", "-at_install")
class TestLoan(TransactionCase):
    def test_tanggal_salah_ditolak(self):
        with self.assertRaises(ValidationError):
            self.env["library.loan"].create({"date_borrow": "2026-11-24", "date_due": "2026-11-01"})</code></pre>
<pre><code>./odoo-bin -c odoo.conf -d db_uji -i library --test-tags /library --stop-after-init</code></pre>
<h4>5. Debugging cepat</h4>
<table class="mini-pivot"><tr><th>Gejala</th><th>Cek</th></tr>
<tr><td>KeyError: 'library.book'</td><td>__init__.py mengimpor file? modul sudah -u?</td></tr>
<tr><td>Field tidak muncul</td><td>-u modul, mode debug (?debug=1), view yang benar?</td></tr>
<tr><td>AccessError</td><td>baris ACL dan grup pengguna, record rule</td></tr>
<tr><td>Angka compute basi</td><td>@api.depends lengkap? store=True?</td></tr>
<tr><td>ParseError XML</td><td>tag ditutup? &lt; ditulis &amp;lt;? attrs dipakai di 17?</td></tr></table>
<p>Keamanan kode: jangan menyisipkan input pengguna ke SQL (<code>"... '%s'" % x</code>); pakai ORM atau <code>cr.execute(query, (x,))</code>. Catat proses dengan <code>_logger = logging.getLogger(__name__)</code>.</p>`},
];
