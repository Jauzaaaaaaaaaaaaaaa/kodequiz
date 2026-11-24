# -*- coding: utf-8 -*-
# Penjelasan "🧩 Dengan bahasa sederhana" untuk soal studi kasus (dibaca alat/buat-lab-python.py).
# Format: id soal → list kalimat/langkah pendek dengan contoh angka nyata. Jangan menulis kode solusi utuh di sini.

MUDAH = {
  # ---------------- Python bab 1–5 ----------------
  "py-dasar-1": [
    "Kamu menerima sebuah angka, misalnya 1250000.",
    "Ubah menjadi teks yang punya titik setiap 3 angka dari belakang: 1.250.000.",
    "Tempelkan \"Rp \" (dengan satu spasi) di depannya, lalu kembalikan: \"Rp 1.250.000\".",
    "Contoh lain: 500 → \"Rp 500\", 0 → \"Rp 0\".",
  ],
  "py-dasar-2": [
    "Kamu menerima 3 hal: nama barang, jumlah (qty), dan harga satuan.",
    "Rapikan nama: buang spasi di awal/akhir, lalu besarkan huruf awal tiap kata (\"  roti  \" → \"Roti\").",
    "Hitung total = qty × harga, lalu tulis dengan titik ribuan (36000 → 36.000).",
    "Susun jadi satu kalimat: \"2 x Kopi Susu = Rp 36.000\" dan kembalikan.",
  ],
  "py-op-1": [
    "Kamu menerima berat paket dalam gram, misalnya 2300.",
    "Ubah ke kg dan bulatkan KE ATAS: 2300 gram = 2,3 kg → dihitung 3 kg. Tepat 1000 gram = 1 kg.",
    "Paket seringan apa pun (bahkan 0 gram) tetap dihitung minimal 1 kg.",
    "Biaya = jumlah kg × 9000. Jadi 2300 gram → 3 × 9000 = 27000.",
  ],
  "py-op-2": [
    "Tahun kabisat = tahun yang bulan Februarinya 29 hari. Kamu cukup mengembalikan True (kabisat) atau False (bukan).",
    "Periksa dengan 3 pertanyaan, berurutan:",
    "1) Habis dibagi 400? → kabisat. Contoh 2000 dan 2400.",
    "2) Kalau tidak, habis dibagi 100? → BUKAN kabisat. Contoh 1900 dan 2100.",
    "3) Kalau tidak, habis dibagi 4? → kabisat. Contoh 2028. Selain itu bukan kabisat (contoh 2026).",
    "\"Habis dibagi 4\" di Python ditulis tahun % 4 == 0 (sisa baginya nol). Ketiga pertanyaan bisa digabung dengan and / or.",
  ],
  "py-str-1": [
    "Kamu menerima nama lengkap, misalnya \"jauza kenar indra fawaid\".",
    "Pecah menjadi kata-kata, ambil huruf PERTAMA setiap kata: j, k, i, f.",
    "Gabungkan tanpa spasi dan jadikan huruf besar: \"JKIF\".",
    "Spasi berlebih (\"  budi   santoso \") tidak boleh menghasilkan huruf kosong: hasilnya \"BS\".",
  ],
  "py-str-2": [
    "Kamu menerima email, misalnya \"jauza@gmail.com\". Potong menjadi 2 bagian di tanda @: \"jauza\" dan \"gmail.com\".",
    "Bagian depan diganti: huruf pertama + *** + huruf terakhir → \"j***a\".",
    "Kalau bagian depan cuma 1–2 huruf (\"ab\"), cukup huruf pertama + *** → \"a***\".",
    "Tempel kembali dengan @ dan domain aslinya: \"j***a@gmail.com\".",
  ],
  "py-kon-1": [
    "Kamu menerima jumlah stok (qty) dan batas minimum.",
    "Kalau qty 0 atau kurang → kembalikan \"Habis\".",
    "Kalau masih ada tapi kurang dari minimum (3 dari minimum 5) → \"Menipis\".",
    "Selain itu (5 dari minimum 5, atau lebih) → \"Aman\". Cek dari kondisi paling parah dulu.",
  ],
  "py-kon-2": [
    "Kamu menerima total belanja, apakah member (True/False), dan nama kota.",
    "Langkah 1: kalau total 500.000 atau lebih → ongkir 0, selesai (Batam pun gratis).",
    "Langkah 2: kalau tidak, ongkir dasar 10.000 untuk member atau 20.000 untuk bukan member.",
    "Langkah 3: kalau kotanya \"Batam\", tambah 5.000. Contoh: member di Batam, belanja 100.000 → 10.000 + 5.000 = 15.000.",
  ],
  "py-loop-1": [
    "Kamu menerima angka n (misalnya 5) dan sampai (misalnya 3).",
    "Buat baris untuk i = 1, 2, 3: \"5 x 1 = 5\", \"5 x 2 = 10\", \"5 x 3 = 15\".",
    "Kumpulkan semua baris itu ke dalam satu list dan kembalikan list-nya.",
    "Kalau sampai = 0, hasilnya list kosong [].",
  ],
  "py-loop-2": [
    "Bayangkan utang 1.000.000 dengan bunga 0% dan cicilan 250.000 per bulan: setelah 4 bulan lunas → jawabannya 4.",
    "Kalau ada bunga, setiap bulan: sisa utang ditambah bunganya dulu, LALU dikurangi cicilan. Ulangi sampai sisa ≤ 0 sambil menghitung bulan.",
    "Contoh bunga 10%: utang 1.000.000 → bunga bulan pertama 100.000.",
    "Kalau cicilan tidak lebih besar dari bunga bulan pertama (cicilan 100.000 untuk bunga 100.000), utang tidak pernah turun → kembalikan -1.",
  ],
  "py-list-1": [
    "Kamu menerima list nama buah yang huruf besarnya campur aduk: [\"Rambutan\", \"apel\", \"Mangga\"].",
    "Urutkan berdasarkan abjad seolah semuanya huruf kecil: apel, mangga, rambutan.",
    "Tapi tulisan aslinya JANGAN diubah. Hasil: [\"apel\", \"Mangga\", \"Rambutan\"].",
  ],
  "py-list-2": [
    "Kamu menerima list pasangan (nama, harga), misalnya (\"mangga\", 25000).",
    "Urutkan dari harga paling murah ke paling mahal.",
    "Kalau dua barang harganya sama, yang namanya duluan menurut abjad ditaruh di depan.",
    "Kembalikan nama-namanya saja: [\"rambutan\", \"mangga\", \"apel\"].",
  ],
  "py-list-3": [
    "Kamu menerima list pasangan (nama, nilai), misalnya (\"Budi\", 95).",
    "Urutkan dari nilai TERTINGGI; kalau nilainya sama, nama diurutkan abjad.",
    "Ambil 3 teratas saja dan kembalikan namanya: [\"Budi\", \"Cita\", \"Ani\"].",
    "Kalau siswanya kurang dari 3, kembalikan semuanya.",
  ],
  "py-kol-1": [
    "Kamu menerima stok dua gudang, misalnya A = {\"kursi\": 10, \"meja\": 4} dan B = {\"meja\": 6, \"lemari\": 2}.",
    "Jumlahkan per barang: kursi 10, meja 4 + 6 = 10, lemari 2.",
    "Buat dict BARU untuk hasilnya; dict A dan B tidak boleh ikut berubah.",
  ],
  "py-kol-2": [
    "Kamu menerima daftar pelanggan toko A dan toko B (nama bisa tertulis dua kali).",
    "Cari: siapa yang belanja di kedua toko, yang hanya di A, yang hanya di B, dan berapa orang berbeda totalnya.",
    "Contoh A = Ani, Budi, Cita; B = Budi, Dodi, Cita → keduanya [Budi, Cita], hanya A [Ani], hanya B [Dodi], total 4 orang.",
    "Kembalikan dalam satu dict, setiap list diurutkan abjad.",
  ],
  "py-fun-1": [
    "Kamu menerima list angka, misalnya [4, 9, 1].",
    "Cari yang terkecil (1), terbesar (9), dan rata-ratanya (14 ÷ 3 = 4,666… → dibulatkan 4.67).",
    "Kembalikan ketiganya sekaligus: (1, 9, 4.67).",
    "Kalau list-nya kosong, kembalikan None.",
  ],
  "py-fun-2": [
    "Gaji kotor = gaji pokok + (jam lembur × tarif lembur).",
    "Lalu potong sebesar potongan_persen. Contoh pokok 6.000.000, lembur 4 jam × 50.000 = 200.000, potongan 2% → 6.200.000 × 0,98 = 6.076.000.",
    "Jam lembur, tarif, dan potongan boleh tidak diisi: nilai bawaannya 0, 50.000, dan 0.",
    "Bulatkan hasil akhirnya menjadi bilangan bulat.",
  ],
  "py-err-1": [
    "Kamu menerima list teks seperti [\"10\", \"7,5\", \"abc\", \"\"].",
    "Ubah setiap teks menjadi angka desimal. Koma dianggap titik: \"7,5\" → 7.5.",
    "Teks yang tidak bisa jadi angka (\"abc\", \"\") dilewati, tapi dihitung sebagai gagal.",
    "Kembalikan dua hal: list angkanya dan jumlah yang gagal → ([10.0, 7.5], 2).",
  ],
  "py-err-2": [
    "Hitung a ÷ b dan bulatkan 2 angka di belakang koma: 10 ÷ 4 = 2.5.",
    "Kalau b nol, jangan sampai programnya error: kembalikan teks \"Error: pembagian dengan nol\".",
    "Kalau a atau b bukan angka (misalnya teks \"10\"), kembalikan \"Error: input harus angka\".",
  ],
  "py-oop-1": [
    "Buat cetakan Produk yang menyimpan nama, harga, dan diskon (persen, bawaan 0).",
    "Method harga_akhir() menghitung harga setelah diskon: 20.000 diskon 10% → 18.000.",
    "Hasilnya dibulatkan menjadi bilangan bulat.",
  ],
  "py-oop-2": [
    "ProdukGrosir adalah Produk yang punya satu data tambahan: min_grosir (jumlah minimal untuk harga grosir).",
    "total(qty) = harga_akhir × qty. Kalau qty sudah mencapai min_grosir, total dipotong lagi 5%.",
    "Contoh: gula 15.000, beli 10 dengan min_grosir 10 → 150.000 dipotong 5% = 142.500.",
    "Harga akhir per barang tidak boleh di bawah 1.000 (permen 1.500 diskon 50% tetap 1.000).",
  ],
  "py-mod-1": [
    "Kamu menerima tanggal berbentuk teks \"2026-11-24\" (tahun-bulan-tanggal).",
    "Ubah teks itu menjadi tanggal sungguhan, lalu cari harinya.",
    "Kembalikan nama harinya dalam bahasa Indonesia: \"Selasa\".",
  ],
  "py-mod-2": [
    "Kurir ada di titik asal, misalnya (0, 0). Ada beberapa lokasi dengan koordinat, misalnya Gudang B di (1, 1).",
    "Hitung jarak garis lurus dari kurir ke setiap lokasi (rumus Pythagoras: √(Δx² + Δy²)). Gudang B: √2 ≈ 1.41.",
    "Pilih lokasi yang jaraknya paling kecil. Kalau ada yang sama dekat, pilih nama yang abjadnya duluan.",
    "Kembalikan (nama, jarak dibulatkan 2 desimal). Kalau tidak ada lokasi sama sekali, kembalikan None.",
  ],
  "py-pd-1": [
    "Kamu menerima tabel penjualan dengan kolom kota, qty, harga.",
    "Hitung total tiap baris = qty × harga, lalu jumlahkan per kota.",
    "Contoh: Batam (2 × 10.000) + (3 × 10.000) = 50.000.",
    "Kembalikan dict {kota: total} dengan angka bulat biasa.",
  ],
  "py-pd-2": [
    "Kamu menerima tabel kategori, produk, qty. Satu produk bisa muncul di beberapa baris.",
    "Jumlahkan dulu qty per produk di setiap kategori (Teh 3 + 4 = 7).",
    "Untuk setiap kategori, pilih produk dengan total qty terbesar (seri: nama abjad terkecil).",
    "Kembalikan dict {kategori: produk}.",
  ],
  "py-odoo-1": [
    "self berisi beberapa order. Setiap order punya beberapa baris, dan setiap baris punya subtotal.",
    "Untuk SETIAP order: jumlahkan subtotal semua barisnya dan simpan ke order.amount_total.",
    "Contoh: baris 100 dan 250 → amount_total 350. Order tanpa baris → 0.",
  ],
  "py-odoo-2": [
    "self berisi beberapa order yang mau dikonfirmasi (tombol Confirm di Odoo).",
    "Langkah 1: periksa SEMUA order dulu. Order yang statusnya bukan \"draft\", atau yang tidak punya baris, membuat proses gagal (raise UserError).",
    "Langkah 2: kalau semua lolos, ubah status setiap order menjadi \"sale\" dan kembalikan True.",
    "Kenapa diperiksa dulu? Supaya tidak ada order yang sudah terlanjur berubah saat order lain gagal.",
  ],
  "py-bug-1": [
    "Kodenya sudah ada di editor tapi hasilnya salah. Tugasmu mencari 2 kesalahannya dan memperbaiki.",
    "Seharusnya: rata-rata [80, 90, 70] = 80.0. Jalankan kode awal dan lihat hasilnya ternyata berapa.",
    "Petunjuk: perhatikan posisi baris return (masuk ke dalam for atau tidak), lalu coba list kosong.",
  ],
  "py-bug-2": [
    "Kodenya sudah ada tapi punya 3 kesalahan.",
    "Yang benar: catat_order(\"S001\", [\"S003\", \"S001\"]) → [\"S001\", \"S003\"] (tidak dobel, terurut).",
    "Setiap panggilan TANPA daftar harus mulai dari list kosong yang baru (panggilan sebelumnya tidak boleh terbawa).",
    "Ingat: .sort() tidak mengembalikan list.",
  ],
  "py-comp-1": [
    "Kamu menerima n, misalnya 6.",
    "Ambil bilangan genap dari 0 sampai 6: 0, 2, 4, 6. Kuadratkan masing-masing: 0, 4, 16, 36.",
    "Kembalikan sebagai list, ditulis dalam satu baris.",
  ],
  "py-comp-2": [
    "Kamu menerima sebuah kalimat dan daftar kata yang diabaikan (stopwords).",
    "Pecah kalimat menjadi kata, buang tanda baca .,!? di ujung kata, jadikan huruf kecil.",
    "Simpan hanya kata yang panjangnya lebih dari 3 dan bukan stopword.",
    "Kembalikan dict {kata: panjang hurufnya}, misalnya {\"odoo\": 4}.",
  ],
  "py-fl-1": [
    "Fungsi ini boleh menerima bagian sebanyak apa pun: gabung(\"SO\", 2026, \"0001\").",
    "Ubah semua bagian menjadi teks lalu sambung dengan pemisah (bawaan spasi): \"SO 2026 0001\".",
    "Kalau pemisah=\"/\" → \"SO/2026/0001\". Kalau besar=True → hasilnya huruf besar semua.",
  ],
  "py-fl-2": [
    "Decorator adalah 'pembungkus' fungsi. Fungsi yang dibungkus tetap bekerja seperti biasa.",
    "Bedanya: setiap kali dipanggil, penghitung jumlah bertambah 1. Setelah dipanggil 3 kali, fungsi.jumlah = 3.",
    "Sebelum dipanggil sama sekali, jumlah = 0. Nama fungsinya juga harus tetap sama.",
  ],
  "py-it-1": [
    "Kamu menerima list dan angka n, misalnya [1, 2, 3, 4, 5] dan 2.",
    "Hasilkan potongan berisi n item satu per satu: [1, 2], lalu [3, 4], lalu sisanya [5].",
    "Pakai yield (bukan return list) supaya potongan dibuat satu per satu.",
  ],
  "py-it-2": [
    "Buat penghasil nomor dokumen yang tidak pernah habis: SO/2026/0001, SO/2026/0002, dan seterusnya.",
    "Nomor dimulai dari 'mulai' (bawaan 1) dan diberi nol di depan sampai sepanjang 'padding' (bawaan 4 digit).",
    "Pakai yield di dalam perulangan tanpa akhir; tes akan mengambil beberapa nomor pertama saja.",
  ],
  "py-oop2-1": [
    "Baris adalah data satu baris belanja: produk, qty, harga, dan diskon (bawaan 0).",
    "subtotal = qty × harga, lalu dipotong diskon persen. Contoh 2 × 15.000 diskon 10% = 27.000.",
    "subtotal dibaca tanpa kurung (Baris(...).subtotal), jadi dibuat dengan @property. Bulatkan 2 desimal.",
  ],
  "py-oop2-2": [
    "Uang menyimpan satu angka rupiah.",
    "Uang + Uang menghasilkan Uang baru (1.000 + 2.500 = 3.500). Uang × angka juga Uang baru, dibulatkan.",
    "Dua Uang dianggap sama kalau jumlahnya sama. Dibandingkan dengan angka biasa (Uang(5) == 5) hasilnya False.",
    "Saat diubah ke teks: \"Rp 1.500.000\".",
  ],
  "py-std-1": [
    "Kamu menerima tanggal lahir dan tanggal hari ini (\"YYYY-MM-DD\").",
    "Umur = tahun ini − tahun lahir. Contoh 2026 − 2003 = 23.",
    "Tapi kalau ulang tahun tahun ini BELUM lewat, kurangi 1. Lahir 1 Desember 2003, hari ini 24 November 2026 → 22.",
  ],
  "py-std-2": [
    "Kamu menerima teks catatan gudang. Di dalamnya ada kode produk berbentuk 3 HURUF BESAR + tanda minus + 4 angka, misalnya KRS-0012.",
    "Ambil semua kode yang bentuknya persis seperti itu (krs-0012 huruf kecil atau KRSS-0012 tidak dihitung).",
    "Hitung berapa kali tiap kode muncul, lalu urutkan dari yang paling sering (seri: kode abjad).",
    "Kembalikan list pasangan (kode, jumlah): [(\"KRS-0012\", 2), (\"MJA-0003\", 1)].",
  ],
  "py-kerja-1": [
    "Hitung rata-rata list angka, bulatkan 2 desimal: [1.5, 2.5, 3] → 2.33.",
    "Kalau list kosong, jangan kembalikan apa pun: lempar error ValueError.",
    "Tulis juga 'label tipe' (type hint): nilai adalah list[float] dan hasilnya float.",
  ],
  "py-kerja-2": [
    "Kali ini kamu yang menjadi penguji. Fungsi diskon(harga, persen) sudah ada.",
    "Tulis beberapa fungsi bernama test_... yang memeriksa diskon dengan assert, misalnya assert diskon(10000, 10) == 9000.",
    "Penilai menjalankan tesmu terhadap versi yang benar (harus lulus) dan 3 versi yang rusak (harus gagal).",
    "Jadi buat tes untuk 3 hal: hasil normal, hasil yang harus dibulatkan, dan persen tidak valid (misalnya 150).",
  ],
  "py-proj-1": [
    "Kamu menerima daftar transaksi (produk, qty, harga).",
    "Hitung per produk: total qty dan omzet (qty × harga). Lalu jumlahkan semua omzet menjadi 'total'.",
    "Daftar produk diurutkan dari omzet terbesar. 'terlaris' adalah produk dengan QTY terbanyak (bisa beda dengan omzet terbesar!).",
    "Kalau tidak ada transaksi: total 0, produk [], terlaris None.",
  ],
  "py-proj-2": [
    "Kamu menerima log absensi, satu kejadian per baris: \"2026-11-24 08:00 Ani MASUK\".",
    "Untuk tiap orang, pasangkan MASUK dengan PULANG berikutnya dan hitung selisihnya dalam menit (08:00 → 16:30 = 510 menit).",
    "Kalau seseorang masuk-pulang dua kali dalam sehari, jumlahkan. MASUK tanpa PULANG diabaikan.",
    "Shift lewat tengah malam (22:00 → 06:00 besok) tetap dihitung benar: 480 menit.",
  ],
  # ---------------- Coding Test Besar Python ----------------
  "uji-py-1-a": [
    "Kamu menerima catatan belanja, satu barang per baris: \"Kopi Susu x2 @18000\".",
    "Dari setiap baris ambil: nama (\"Kopi Susu\"), jumlah setelah x (2), dan harga setelah @ (18000).",
    "Ubah jumlah dan harga menjadi angka. Baris kosong atau yang tidak punya x dan @ dilewati.",
    "Kembalikan list pasangan (nama, jumlah, harga).",
  ],
  "uji-py-1-b": [
    "Subtotal = jumlah semua (jumlah × harga). Contoh 5 × 18.000 + 2 × 12.500 = 115.000.",
    "Diskon 10% hanya untuk member DAN subtotal minimal 100.000 → 11.500.",
    "Pajak 11% dihitung dari (subtotal − diskon) → 103.500 × 11% = 11.385.",
    "Total = subtotal − diskon + pajak. Kembalikan keempatnya dalam satu dict.",
  ],
  "uji-py-1-c": [
    "Gabungkan bagian A dan B: baca catatan, lalu hitung struknya.",
    "Buat baris per barang: \"Kopi Susu 2 x 18.000 = 36.000\", lalu baris Subtotal, Diskon, Pajak, Total.",
    "Semua angka memakai titik ribuan. Kalau tidak ada barang, kembalikan [\"Belanja kosong\"].",
  ],
  "uji-py-2-a": [
    "Gudang mencatat stok per produk. masuk menambah, keluar mengurangi, stok membaca jumlahnya (0 kalau belum pernah ada).",
    "Jumlah 0 atau negatif ditolak dengan error \"qty harus lebih dari 0\".",
    "Mengeluarkan lebih dari stok ditolak dengan error \"stok kursi tidak cukup\", dan stoknya tidak berubah.",
  ],
  "uji-py-2-b": [
    "Buat daftar laporan: pasangan (produk, stok) untuk produk yang stoknya masih ada.",
    "Urutkan dari stok terbanyak; kalau sama, nama abjad.",
    "Produk yang stoknya sudah 0 tidak ditampilkan.",
  ],
  "uji-py-2-c": [
    "Kamu menerima teks perintah, satu per baris: \"MASUK kursi 5\" atau \"KELUAR kursi 2\".",
    "Jalankan semua baris. Kalau satu baris gagal, catat pesannya lalu LANJUT ke baris berikutnya.",
    "Pesan ditulis \"baris 3: stok kursi tidak cukup\". Perintah selain MASUK/KELUAR → \"perintah tidak dikenal\"; jumlah bukan angka atau bagian kurang → \"format salah\".",
    "Kembalikan daftar semua pesan kesalahan.",
  ],
  "uji-py-3-a": [
    "Untuk setiap order: hitung subtotal tiap baris = qty × harga × (1 − diskon/100), lalu jumlahkan → amount_untaxed.",
    "Pajak = 11% dari amount_untaxed. Total = untaxed + pajak. Semua dibulatkan 2 desimal.",
    "Contoh: 2 × 100.000 diskon 10% + 1 × 50.000 = 230.000; pajak 25.300; total 255.300.",
  ],
  "uji-py-3-b": [
    "Hitung dulu total setiap order (pakai fungsi bagian A).",
    "Ambil hanya order yang statusnya \"sale\" atau \"done\" (quotation \"draft\" belum dihitung).",
    "Kelompokkan per bulan dari tanggalnya (\"2026-10-05\" → \"2026-10\") dan jumlahkan totalnya.",
  ],
  "uji-py-3-c": [
    "Hitung total belanja setiap pelanggan dari order sale/done saja.",
    "Ambil pelanggan yang totalnya mencapai batas minimal.",
    "Urutkan dari total terbesar (seri: nama abjad) dan kembalikan namanya.",
  ],
  "uji-py-4-a": [
    "Tiket menyimpan id, judul, prioritas (tinggi/sedang/rendah), dan waktu dibuat \"2026-11-24 08:00\".",
    "umur_jam(sekarang) = berapa jam sejak tiket dibuat. 08:00 → 13:30 = 5.5 jam.",
    "sla = batas waktu sesuai prioritas: tinggi 4 jam, sedang 24 jam, rendah 72 jam.",
  ],
  "uji-py-4-b": [
    "Keluarkan tiket satu per satu dengan urutan: prioritas tinggi dulu, lalu sedang, lalu rendah.",
    "Kalau prioritasnya sama, tiket yang dibuat lebih awal dulu; kalau waktunya juga sama, id lebih kecil dulu.",
    "Pakai yield supaya menjadi generator.",
  ],
  "uji-py-4-c": [
    "Cari tiket yang SLA-nya terlewat: umurnya LEBIH DARI batas jam (tepat 4 jam untuk prioritas tinggi belum terlewat).",
    "Daftar id-nya ditulis sesuai urutan antrean bagian B.",
    "Hitung juga jumlah tiket terlewat per prioritas. Kembalikan keduanya dalam satu dict.",
  ],
}
