# -*- coding: utf-8 -*-
# Studi Kasus Koding untuk topik Python (dibaca oleh alat/buat-lab-python.py).
# Pola tiap studi: contoh terpandu (kode yang bisa dijalankan) → soal 1 mirip contoh → soal 2 sedikit lebih rumit.

def L(id, judul, tingkat, fungsi, soal, solusi, tes, petunjuk, jelas, cek=None, awal=None, cerita="", pre="", contoh=None):
    d = dict(id=id, judul=judul, tingkat=tingkat, fungsi=fungsi, soal=soal, solusi=solusi, tes=tes,
             petunjuk=petunjuk, jelas=jelas, cek=cek or {}, cerita=cerita, pre=pre)
    if awal: d["awal"] = awal
    if contoh: d["contoh"] = contoh
    return d

# ---------------------------------------------------------------- 1. dasar
studi(id="py-dasar", topik="python", setelah="dasar", judul="Mencetak struk belanja",
  contoh=dict(judul="Contoh: fungsi pertamamu, lalu f-string",
    penjelasan="""<p><b>Semua soal studi kasus berbentuk fungsi</b>, jadi pahami dulu 4 bagian ini:</p>
<ol>
<li><code>def</code> = \"aku membuat fungsi\". Setelahnya nama fungsi dan <b>parameter</b> di dalam kurung, diakhiri titik dua.</li>
<li><b>Parameter</b> (misalnya <code>nama</code>) adalah kotak kosong yang diisi saat fungsi dipanggil. Penilai mengisinya dengan data tes yang berbeda-beda.</li>
<li>Isi fungsi ditulis <b>menjorok 4 spasi</b>.</li>
<li><code>return</code> = \"serahkan hasil ini\". Penilai membaca nilai yang di-return, <b>bukan</b> yang di-print. Kode awal berisi <code>pass</code> (\"belum ada isi\"), jadi hasilnya None dan pasti gagal sampai kamu menggantinya dengan return.</li>
</ol>
<p>Lalu dua alat teks: <b>f-string</b> (<code>f\"Halo {nama}\"</code>) menyisipkan nilai ke teks, dan <code>{angka:,}</code> memberi pemisah ribuan dengan koma yang bisa diganti titik memakai <code>.replace(\",\", \".\")</code>. Semua istilah lain dijelaskan di kotak <b>📘 Kosakata kode</b> di atas setiap soal.</p>""",
    kode='# 1) membuat fungsi\ndef sapa(nama):                  # def + nama fungsi + (parameter) + titik dua\n    return "Halo, " + nama       # 4 spasi, lalu return hasilnya\n\n# 2) memanggil fungsi: parameter nama diisi "Jauza", lalu "Budi"\nprint(sapa("Jauza"))\nprint(sapa("Budi"))\n\n# 3) fungsi dengan beberapa parameter + f-string + pemisah ribuan\ndef total_rupiah(qty, harga):\n    total = qty * harga\n    return "Rp " + f"{total:,}".replace(",", ".")\n\nprint(total_rupiah(3, 15000))',
    kunci="def nama(parameter): membuat fungsi; isinya menjorok 4 spasi; return menyerahkan hasil. Penilai memanggil fungsimu dan membaca nilai return-nya."),
  langkah=[
    L("py-dasar-1", "Format rupiah", 1, "format_rupiah",
      "Buat <code>format_rupiah(angka)</code> yang mengubah bilangan bulat menjadi teks seperti <code>\"Rp 1.250.000\"</code>.",
      'def format_rupiah(angka):\n    return "Rp " + f"{angka:,}".replace(",", ".")\n',
      ["format_rupiah(1250000)", "format_rupiah(500)", "format_rupiah(0)", "format_rupiah(1000)", "format_rupiah(987654321)"],
      ["Lihat contoh terpandu: f\"{angka:,}\" lalu .replace(\",\", \".\").", "Jangan lupa awalan \"Rp \" dengan satu spasi."],
      "Format angka di f-string jauh lebih aman daripada menyisipkan titik manual setiap 3 digit.",
      cek={"format_rupiah(1250000)": "Rp 1.250.000", "format_rupiah(500)": "Rp 500"}),
    L("py-dasar-2", "Baris struk", 1, "baris_struk",
      "Buat <code>baris_struk(nama, qty, harga)</code> yang mengembalikan teks <code>\"2 x Kopi Susu = Rp 36.000\"</code>, dengan total = qty × harga. Nama produk dirapikan: spasi di awal/akhir dibuang dan setiap kata diawali huruf besar.",
      'def baris_struk(nama, qty, harga):\n    total = qty * harga\n    return f"{qty} x {nama.strip().title()} = Rp " + f"{total:,}".replace(",", ".")\n',
      ['baris_struk("kopi susu", 2, 18000)', 'baris_struk("  roti  ", 1, 12500)', 'baris_struk("air mineral", 12, 4000)', 'baris_struk("TEH", 0, 5000)'],
      ["Hitung total dulu, lalu rangkai teks dengan f-string seperti contoh.", "Untuk nama: .strip() membuang spasi tepi, .title() membuat Huruf Besar Di Awal Kata."],
      "Kamu menggabungkan tiga hal: aritmetika, method string, dan format angka. Ini pola yang sama seperti membuat laporan atau pesan otomatis di Odoo.",
      cek={'baris_struk("kopi susu", 2, 18000)': "2 x Kopi Susu = Rp 36.000"}),
  ])

# ---------------------------------------------------------------- 2. operator
studi(id="py-operator", topik="python", setelah="operator", judul="Ongkos kirim & tahun kabisat",
  contoh=dict(judul="Contoh: // , % dan pembulatan ke atas",
    penjelasan="<p><code>//</code> membagi lalu membuang sisa (pembulatan ke bawah), <code>%</code> memberi sisanya. Untuk pembulatan <b>ke atas</b> tanpa import, pakai trik <code>-(-a // b)</code>, atau <code>math.ceil(a / b)</code>.</p>",
    kode='berat = 2300            # gram\nprint(berat // 1000)    # 2 kg penuh\nprint(berat % 1000)     # sisa 300 gram\nprint(-(-berat // 1000))  # dibulatkan ke atas: 3 kg\nprint(2300 / 1000)      # 2.3 (pembagian biasa)',
    kunci="Ongkir dihitung per kg dibulatkan ke atas: -(-gram // 1000). Untuk 'habis dibagi' pakai % == 0."),
  langkah=[
    L("py-op-1", "Ongkir per kg", 1, "ongkir",
      "Kurir menagih <b>Rp 9.000 per kg</b>, berat dibulatkan <b>ke atas</b> per kg, minimal 1 kg. Buat <code>ongkir(gram)</code> yang mengembalikan biaya (int).",
      'def ongkir(gram):\n    kg = max(1, -(-gram // 1000))\n    return kg * 9000\n',
      ["ongkir(2300)", "ongkir(1000)", "ongkir(1)", "ongkir(0)", "ongkir(5001)"],
      ["Ubah gram ke kg dengan pembulatan ke atas seperti contoh.", "Minimal 1 kg: max(1, kg)."],
      "max(1, ...) adalah cara singkat menerapkan batas minimum. 1000 gram tepat 1 kg, sedangkan 1001 gram sudah 2 kg.",
      cek={"ongkir(2300)": 27000, "ongkir(0)": 9000}),
    L("py-op-2", "Tahun kabisat", 2, "kabisat",
      "Tahun kabisat: habis dibagi 4, <b>kecuali</b> habis dibagi 100, <b>tetapi</b> tetap kabisat jika habis dibagi 400. Buat <code>kabisat(tahun)</code> yang mengembalikan True/False dalam satu ekspresi boolean.",
      'def kabisat(tahun):\n    return tahun % 4 == 0 and (tahun % 100 != 0 or tahun % 400 == 0)\n',
      ["kabisat(2028)", "kabisat(1900)", "kabisat(2000)", "kabisat(2026)", "kabisat(2100)", "kabisat(2400)"],
      ["Tulis tiap syarat dengan %: habis dibagi 4 artinya tahun % 4 == 0.", "Gabungkan: syarat4 and (bukan100 or habis400). Kurung menentukan urutan."],
      "and dihitung sebelum or, jadi kurung wajib di sini. Aturan ini juga yang dipakai modul calendar.isleap().",
      cek={"kabisat(1900)": False, "kabisat(2000)": True}),
  ])

# ---------------------------------------------------------------- 3. string
studi(id="py-string", topik="python", setelah="string", judul="Mengolah nama dan email",
  contoh=dict(judul="Contoh: split, indexing, dan join",
    penjelasan="<p>Teks bisa dipecah jadi list kata dengan <code>split()</code>, setiap kata diambil huruf pertamanya dengan <code>[0]</code>, lalu digabung lagi dengan <code>\"\".join(...)</code>.</p>",
    kode='nama = "  jauza kenar indra fawaid "\nkata = nama.split()\nprint(kata)\nprint([k[0] for k in kata])\nprint("".join(k[0] for k in kata).upper())\nprint(nama.strip().title())',
    kunci="split() → ambil bagian → join(). [0] = karakter pertama, [-1] = karakter terakhir."),
  langkah=[
    L("py-str-1", "Inisial nama", 1, "inisial",
      "Buat <code>inisial(nama)</code> yang mengembalikan huruf pertama setiap kata dalam huruf besar, tanpa spasi. Spasi berlebih diabaikan.",
      'def inisial(nama):\n    return "".join(k[0] for k in nama.split()).upper()\n',
      ['inisial("jauza kenar indra fawaid")', 'inisial("  budi   santoso ")', 'inisial("ani")', 'inisial("")'],
      ["Pecah dengan split() tanpa argumen.", "Ambil k[0] tiap kata, gabung dengan \"\".join(...), lalu .upper()."],
      "split() tanpa argumen otomatis membuang spasi ganda, jadi tidak ada kata kosong yang membuat k[0] error.",
      cek={'inisial("jauza kenar indra fawaid")': "JKIF"}),
    L("py-str-2", "Samarkan email", 2, "samarkan_email",
      "Buat <code>samarkan_email(email)</code>: bagian sebelum <code>@</code> disamarkan menjadi huruf pertama + <code>***</code> + huruf terakhir. Jika bagian itu hanya 1–2 huruf, tampilkan huruf pertama + <code>***</code>. Domain tidak diubah. Contoh <code>\"jauza@gmail.com\"</code> → <code>\"j***a@gmail.com\"</code>.",
      'def samarkan_email(email):\n    nama, domain = email.split("@")\n    if len(nama) <= 2:\n        return nama[0] + "***@" + domain\n    return nama[0] + "***" + nama[-1] + "@" + domain\n',
      ['samarkan_email("jauza@gmail.com")', 'samarkan_email("ab@x.id")', 'samarkan_email("a@x.id")', 'samarkan_email("sales.team@odoo.com")'],
      ["Pisahkan nama dan domain: nama, domain = email.split(\"@\").", "Huruf pertama nama[0], terakhir nama[-1]. Tangani nama pendek dulu dengan if."],
      "Teknik ini dipakai untuk menampilkan data pribadi secara aman (misalnya di halaman lupa password). Selalu pikirkan kasus pendek supaya tidak membocorkan seluruh nama.",
      cek={'samarkan_email("jauza@gmail.com")': "j***a@gmail.com"}),
  ])

# ---------------------------------------------------------------- 4. kondisi
studi(id="py-kondisi", topik="python", setelah="kondisi", judul="Aturan bisnis dengan if/elif",
  contoh=dict(judul="Contoh: urutan elif dari yang paling khusus",
    penjelasan="<p>Python memeriksa <code>if</code> dan <code>elif</code> dari atas, lalu berhenti di syarat pertama yang benar. Jadi tulis syarat yang paling khusus lebih dulu.</p>",
    kode='def kategori_pelanggan(total_belanja):\n    if total_belanja >= 10_000_000:\n        return "Platinum"\n    elif total_belanja >= 5_000_000:\n        return "Gold"\n    elif total_belanja > 0:\n        return "Reguler"\n    return "Belum belanja"\n\nfor t in [12_000_000, 5_000_000, 100, 0]:\n    print(t, kategori_pelanggan(t))',
    kunci="Cek dari batas tertinggi. Garis bawah di 10_000_000 hanya pemisah agar mudah dibaca."),
  langkah=[
    L("py-kon-1", "Status stok", 1, "status_stok",
      "Buat <code>status_stok(qty, minimum)</code>: qty ≤ 0 → <code>\"Habis\"</code>, qty &lt; minimum → <code>\"Menipis\"</code>, selain itu <code>\"Aman\"</code>.",
      'def status_stok(qty, minimum):\n    if qty <= 0:\n        return "Habis"\n    elif qty < minimum:\n        return "Menipis"\n    return "Aman"\n',
      ["status_stok(0, 5)", "status_stok(3, 5)", "status_stok(5, 5)", "status_stok(-2, 5)", "status_stok(10, 0)"],
      ["Mulai dari kasus paling khusus: Habis.", "qty sama dengan minimum termasuk Aman (pakai <, bukan <=)."],
      "Mirip aturan reordering di Odoo: stok di bawah minimum memicu pembelian ulang.",
      cek={"status_stok(5, 5)": "Aman"}),
    L("py-kon-2", "Ongkir dengan member", 2, "biaya_kirim",
      "Aturan toko: total ≥ 500.000 → gratis ongkir (0). Member: ongkir 10.000. Bukan member: 20.000. Tetapi kota <code>\"Batam\"</code> selalu menambah 5.000 (kecuali sudah gratis). Buat <code>biaya_kirim(total, member, kota)</code>.",
      'def biaya_kirim(total, member, kota):\n    if total >= 500000:\n        return 0\n    biaya = 10000 if member else 20000\n    if kota == "Batam":\n        biaya += 5000\n    return biaya\n',
      ['biaya_kirim(600000, False, "Batam")', 'biaya_kirim(100000, True, "Surakarta")', 'biaya_kirim(100000, False, "Batam")', 'biaya_kirim(500000, True, "Batam")', 'biaya_kirim(499999, True, "Batam")'],
      ["Gratis ongkir dicek pertama dan langsung return 0.", "Tentukan biaya dasar dengan if/else (atau ekspresi 10000 if member else 20000), lalu tambahkan 5000 untuk Batam."],
      "Memecah aturan menjadi langkah (cek pengecualian dulu, hitung dasar, lalu tambahan) membuat kode mudah dibaca dan mudah diubah saat aturan bisnis berganti.",
      cek={'biaya_kirim(499999, True, "Batam")': 15000}),
  ])

# ---------------------------------------------------------------- 5. loop
studi(id="py-loop", topik="python", setelah="loop", judul="Perulangan for dan while",
  contoh=dict(judul="Contoh: for untuk jumlah pasti, while untuk 'sampai tercapai'",
    penjelasan="<p><code>for</code> dipakai bila banyaknya ulangan sudah diketahui. <code>while</code> dipakai bila kita mengulang <b>sampai</b> sebuah syarat tercapai. Contoh: berapa bulan menabung sampai target tercapai.</p>",
    kode='saldo, bulan = 1_000_000, 0\nwhile saldo < 3_000_000:\n    saldo += 500_000\n    bulan += 1\nprint(bulan, saldo)\n\nfor i in range(1, 4):\n    print(f"5 x {i} = {5 * i}")',
    kunci="while: ubah variabel yang dicek di setiap putaran supaya perulangan berhenti."),
  langkah=[
    L("py-loop-1", "Tabel perkalian", 1, "tabel_kali",
      "Buat <code>tabel_kali(n, sampai)</code> yang mengembalikan list teks <code>\"n x i = hasil\"</code> untuk i = 1 sampai <code>sampai</code>.",
      'def tabel_kali(n, sampai):\n    return [f"{n} x {i} = {n * i}" for i in range(1, sampai + 1)]\n',
      ["tabel_kali(5, 3)", "tabel_kali(7, 1)", "tabel_kali(2, 0)", "tabel_kali(12, 4)"],
      ["for i in range(1, sampai + 1) lalu append teks.", "Format teksnya persis seperti contoh: spasi di kiri-kanan x dan =."],
      "range(1, sampai + 1) karena batas akhir range tidak ikut. Kasus sampai = 0 menghasilkan list kosong.",
      cek={"tabel_kali(5, 3)": ["5 x 1 = 5", "5 x 2 = 10", "5 x 3 = 15"]}),
    L("py-loop-2", "Berapa bulan sampai lunas?", 2, "bulan_lunas",
      "Utang <code>pokok</code> berbunga <code>bunga_persen</code> per bulan (bunga dihitung dari sisa utang, ditambahkan di awal bulan), lalu dicicil <code>cicilan</code> per bulan. Buat <code>bulan_lunas(pokok, bunga_persen, cicilan)</code> yang mengembalikan banyak bulan sampai sisa ≤ 0. Jika cicilan tidak cukup menutup bunga bulan pertama, kembalikan <code>-1</code>.",
      'def bulan_lunas(pokok, bunga_persen, cicilan):\n    if cicilan <= pokok * bunga_persen / 100:\n        return -1\n    sisa, bulan = pokok, 0\n    while sisa > 0:\n        sisa = sisa * (1 + bunga_persen / 100) - cicilan\n        bulan += 1\n    return bulan\n',
      ["bulan_lunas(1000000, 0, 250000)", "bulan_lunas(1000000, 2, 250000)", "bulan_lunas(1000000, 10, 100000)", "bulan_lunas(100, 0, 1000)", "bulan_lunas(5000000, 1.5, 500000)"],
      ["Perhatikan pengaman: kalau cicilan ≤ bunga, utang tidak pernah turun dan while tidak berhenti.", "Setiap putaran: sisa = sisa × (1 + bunga/100) − cicilan, lalu bulan += 1."],
      "Selalu pastikan while punya jalan keluar. Pengecekan di awal mencegah perulangan tanpa akhir, yang di penilai ini akan dihentikan setelah 10 detik.",
      cek={"bulan_lunas(1000000, 0, 250000)": 4, "bulan_lunas(1000000, 10, 100000)": -1}),
  ])

# ---------------------------------------------------------------- 6. list (contoh dari pengguna: apel, mangga, rambutan)
studi(id="py-list", topik="python", setelah="list", judul="Mengurutkan data: dari buah sampai produk",
  contoh=dict(judul="Contoh: mengurutkan apel, mangga, dan rambutan",
    penjelasan="<p><code>sorted(daftar)</code> mengembalikan list baru yang terurut abjad (A→Z), sedangkan <code>daftar.sort()</code> mengurutkan list aslinya. Tambahkan <code>reverse=True</code> untuk Z→A.</p><p>Parameter <code>key</code> menentukan <b>apa yang dibandingkan</b>: <code>key=len</code> = panjang kata, <code>key=str.lower</code> = abaikan huruf besar/kecil. Untuk data berpasangan, <code>key=lambda x: x[1]</code> artinya urutkan menurut elemen kedua.</p>",
    kode='buah = ["mangga", "apel", "rambutan"]\nprint(sorted(buah))                 # abjad\nprint(sorted(buah, reverse=True))   # kebalikannya\nprint(sorted(buah, key=len))        # dari kata terpendek\n\nharga = [("mangga", 25000), ("apel", 30000), ("rambutan", 15000)]\nprint(sorted(harga, key=lambda x: x[1]))   # dari harga termurah\n\ncampur = ["mangga", "Apel", "rambutan"]\nprint(sorted(campur))                   # huruf besar didahulukan!\nprint(sorted(campur, key=str.lower))    # abaikan besar/kecil',
    kunci="sorted(data, key=..., reverse=...). key menentukan nilai yang dibandingkan. Huruf besar selalu didahulukan kecuali memakai key=str.lower."),
  langkah=[
    L("py-list-1", "Urutkan buah tanpa peduli huruf besar", 1, "urut_buah",
      "Daftar buah dari kasir ditulis tidak konsisten, misalnya <code>[\"Rambutan\", \"apel\", \"Mangga\"]</code>. Buat <code>urut_buah(daftar)</code> yang mengembalikan list terurut abjad <b>tanpa memedulikan huruf besar/kecil</b>, dengan tulisan asli tetap dipertahankan.",
      'def urut_buah(daftar):\n    return sorted(daftar, key=str.lower)\n',
      ['urut_buah(["Rambutan", "apel", "Mangga"])', 'urut_buah(["mangga", "apel", "rambutan"])', 'urut_buah([])', 'urut_buah(["jeruk", "Durian", "anggur", "Belimbing"])'],
      ["Lihat baris terakhir contoh terpandu.", "sorted(daftar, key=str.lower): yang dibandingkan versi huruf kecilnya, tetapi yang dikembalikan tulisan aslinya."],
      "key=str.lower tidak mengubah isi list; ia hanya menentukan nilai pembanding. Tanpa key, 'Mangga' dan 'Rambutan' akan berada di depan 'apel'.",
      cek={'urut_buah(["Rambutan", "apel", "Mangga"])': ["apel", "Mangga", "Rambutan"]}),
    L("py-list-2", "Urutkan produk: harga lalu nama", 2, "urut_produk",
      "Buat <code>urut_produk(produk)</code>. <code>produk</code> adalah list tuple <code>(nama, harga)</code>. Urutkan dari harga <b>termurah</b>; jika harganya sama, urutkan <b>nama secara abjad</b>. Kembalikan list nama saja.",
      'def urut_produk(produk):\n    urut = sorted(produk, key=lambda p: (p[1], p[0]))\n    return [nama for nama, harga in urut]\n',
      ['urut_produk([("mangga", 25000), ("apel", 30000), ("rambutan", 15000)])', 'urut_produk([("salak", 20000), ("duku", 20000), ("apel", 30000)])', 'urut_produk([])', 'urut_produk([("b", 1), ("a", 1), ("c", 0)])'],
      ["Mirip contoh harga, tapi key-nya tuple: (harga, nama). Python membandingkan elemen pertama dulu, lalu elemen kedua kalau seri.", "Setelah diurutkan, ambil namanya saja dengan list comprehension."],
      "Key berupa tuple adalah cara standar mengurutkan bertingkat, sama seperti ORDER BY harga, nama di SQL atau _order = 'list_price, name' di model Odoo.",
      cek={'urut_produk([("salak", 20000), ("duku", 20000), ("apel", 30000)])': ["duku", "salak", "apel"]}),
    L("py-list-3", "Tiga nilai terbaik", 2, "tiga_terbaik",
      "Buat <code>tiga_terbaik(data)</code>. <code>data</code> adalah list tuple <code>(nama, nilai)</code>. Kembalikan nama 3 siswa dengan nilai <b>tertinggi</b>. Jika nilai sama, urutkan nama abjad. Jika data kurang dari 3, kembalikan semuanya.",
      'def tiga_terbaik(data):\n    urut = sorted(data, key=lambda d: (-d[1], d[0]))\n    return [nama for nama, nilai in urut[:3]]\n',
      ['tiga_terbaik([("Ani", 80), ("Budi", 95), ("Cita", 88), ("Dodi", 70)])', 'tiga_terbaik([("Eka", 90), ("Ani", 90), ("Budi", 90), ("Cita", 90)])', 'tiga_terbaik([("Ani", 50)])', 'tiga_terbaik([])'],
      ["Urutan nilai dari besar ke kecil, tapi nama dari kecil ke besar. reverse=True akan membalik keduanya, jadi pakai tanda minus pada nilai: key=lambda d: (-d[1], d[0]).", "Potong tiga teratas dengan [:3]. Slicing tidak error walau list lebih pendek."],
      "Tanda minus pada angka adalah trik untuk 'menurun' di satu kolom dan 'naik' di kolom lain dalam satu kali sorted().",
      cek={'tiga_terbaik([("Ani", 80), ("Budi", 95), ("Cita", 88), ("Dodi", 70)])': ["Budi", "Cita", "Ani"]}),
  ])

# ---------------------------------------------------------------- 7. koleksi
studi(id="py-koleksi", topik="python", setelah="koleksi", judul="Dict dan set untuk data stok",
  contoh=dict(judul="Contoh: menggabungkan dict dan operasi set",
    penjelasan="<p>Dict cocok untuk data <i>kunci → nilai</i>. <code>d.get(k, 0)</code> memberi 0 bila kunci belum ada. Set cocok untuk pertanyaan 'ada di mana saja': <code>&amp;</code> irisan, <code>|</code> gabungan, <code>-</code> selisih.</p>",
    kode='gudang = {"kursi": 10, "meja": 4}\nmasuk = {"meja": 6, "lemari": 2}\nfor barang, qty in masuk.items():\n    gudang[barang] = gudang.get(barang, 0) + qty\nprint(gudang)\n\ntoko_a = {"Ani", "Budi", "Cita"}\ntoko_b = {"Budi", "Dodi", "Cita"}\nprint(sorted(toko_a & toko_b))   # belanja di kedua toko\nprint(sorted(toko_a - toko_b))   # hanya di toko A',
    kunci="dict.get(kunci, 0) + qty untuk menjumlah. Set: & irisan, | gabungan, - selisih."),
  langkah=[
    L("py-kol-1", "Gabungkan stok dua gudang", 1, "gabung_stok",
      "Buat <code>gabung_stok(a, b)</code> yang mengembalikan dict <b>baru</b> berisi total qty setiap barang dari dua gudang. Dict a dan b tidak boleh berubah.",
      'def gabung_stok(a, b):\n    hasil = dict(a)\n    for barang, qty in b.items():\n        hasil[barang] = hasil.get(barang, 0) + qty\n    return hasil\n',
      ['gabung_stok({"kursi": 10, "meja": 4}, {"meja": 6, "lemari": 2})', 'gabung_stok({}, {"a": 1})', 'gabung_stok({"a": 1}, {})',
       'a = {"x": 1}\nb = {"x": 2}\ngabung_stok(a, b)\nhasil = (a, b)'],
      ["Salin dulu: hasil = dict(a), supaya a tidak berubah.", "Lalu tambahkan isi b dengan pola get(..., 0) + qty seperti contoh."],
      "Tes terakhir memastikan dict asli tidak berubah. Mengubah data masukan tanpa sengaja adalah bug yang sering terjadi.",
      cek={'gabung_stok({"kursi": 10, "meja": 4}, {"meja": 6, "lemari": 2})': {"kursi": 10, "meja": 10, "lemari": 2}}),
    L("py-kol-2", "Analisis pelanggan dua toko", 2, "analisis_pelanggan",
      "Buat <code>analisis_pelanggan(toko_a, toko_b)</code> (keduanya list nama, bisa ada nama ganda). Kembalikan dict <code>{\"keduanya\": [...], \"hanya_a\": [...], \"hanya_b\": [...], \"total_unik\": n}</code>. Setiap list diurutkan abjad.",
      'def analisis_pelanggan(toko_a, toko_b):\n    a, b = set(toko_a), set(toko_b)\n    return {\n        "keduanya": sorted(a & b),\n        "hanya_a": sorted(a - b),\n        "hanya_b": sorted(b - a),\n        "total_unik": len(a | b),\n    }\n',
      ['analisis_pelanggan(["Ani", "Budi", "Cita", "Ani"], ["Budi", "Dodi", "Cita"])', 'analisis_pelanggan([], [])', 'analisis_pelanggan(["X"], ["X", "X"])'],
      ["Ubah kedua list menjadi set agar nama ganda hilang.", "Pakai &, -, dan | seperti contoh, lalu sorted() setiap hasilnya."],
      "Set membuat analisis seperti ini jadi satu baris per pertanyaan. Di CRM, ini dipakai untuk mencari pelanggan yang belanja di beberapa cabang.",
      cek={'analisis_pelanggan(["Ani", "Budi", "Cita", "Ani"], ["Budi", "Dodi", "Cita"])': {"keduanya": ["Budi", "Cita"], "hanya_a": ["Ani"], "hanya_b": ["Dodi"], "total_unik": 4}}),
  ])

# ---------------------------------------------------------------- 8. fungsi
studi(id="py-fungsi", topik="python", setelah="fungsi", judul="Fungsi dengan parameter bawaan",
  contoh=dict(judul="Contoh: return beberapa nilai & parameter bawaan",
    penjelasan="<p>Fungsi bisa mengembalikan beberapa nilai sekaligus sebagai tuple. Parameter dengan nilai bawaan (<code>tarif=50000</code>) boleh tidak diisi saat memanggil, dan bisa diisi dengan nama (<i>keyword argument</i>).</p>",
    kode='def ringkas(angka):\n    if not angka:\n        return None\n    return min(angka), max(angka)\n\nprint(ringkas([4, 9, 1]))\nprint(ringkas([]))\n\ndef upah(jam, tarif=50000):\n    return jam * tarif\n\nprint(upah(3))\nprint(upah(3, tarif=60000))',
    kunci="return a, b menghasilkan tuple (a, b). Parameter bawaan ditulis paling belakang."),
  langkah=[
    L("py-fun-1", "Statistik sederhana", 1, "statistik",
      "Buat <code>statistik(angka)</code> yang mengembalikan tuple <code>(terkecil, terbesar, rata_rata)</code> dengan rata-rata dibulatkan 2 desimal. List kosong → <code>None</code>.",
      'def statistik(angka):\n    if not angka:\n        return None\n    return min(angka), max(angka), round(sum(angka) / len(angka), 2)\n',
      ["statistik([4, 9, 1])", "statistik([])", "statistik([5])", "statistik([1, 2, 2])"],
      ["Tangani list kosong dulu, seperti contoh.", "Rata-rata = sum / len, lalu round(..., 2). Kembalikan tiga nilai dipisah koma."],
      "Mengecek list kosong sebelum membagi mencegah ZeroDivisionError.",
      cek={"statistik([1, 2, 2])": (1, 2, 1.67)}),
    L("py-fun-2", "Hitung gaji dengan lembur", 2, "hitung_gaji",
      "Buat <code>hitung_gaji(pokok, jam_lembur=0, tarif_lembur=50000, potongan_persen=0)</code>. Gaji = pokok + jam_lembur × tarif_lembur, lalu dipotong <code>potongan_persen</code> persen. Kembalikan hasil dibulatkan ke bilangan bulat dengan <code>round()</code>.",
      'def hitung_gaji(pokok, jam_lembur=0, tarif_lembur=50000, potongan_persen=0):\n    kotor = pokok + jam_lembur * tarif_lembur\n    return round(kotor * (1 - potongan_persen / 100))\n',
      ["hitung_gaji(6000000)", "hitung_gaji(6000000, 10)", "hitung_gaji(6000000, jam_lembur=4, potongan_persen=2)", "hitung_gaji(5000000, 2, tarif_lembur=75000)", "hitung_gaji(0)"],
      ["Tulis keempat parameter dengan nilai bawaannya persis seperti di soal.", "Hitung kotor dulu, baru potong persen: kotor × (1 − potongan/100)."],
      "Tes memanggil fungsi dengan keyword argument (potongan_persen=2), jadi nama parameter harus persis sama.",
      cek={"hitung_gaji(6000000, jam_lembur=4, potongan_persen=2)": 6076000}),
  ])

# ---------------------------------------------------------------- 9. error & file
studi(id="py-error", topik="python", setelah="error", judul="Data kotor dan try/except",
  contoh=dict(judul="Contoh: menangkap ValueError saat mengubah teks ke angka",
    penjelasan="<p>Data dari file atau input pengguna sering kotor. Bungkus bagian yang bisa gagal dengan <code>try</code>, lalu tangkap jenis error yang spesifik dengan <code>except ValueError</code>. Jangan memakai <code>except:</code> kosong karena menyembunyikan semua bug.</p>",
    kode='data = ["10", "5", "lima", "7.5", ""]\nangka, gagal = [], []\nfor x in data:\n    try:\n        angka.append(int(x))\n    except ValueError:\n        gagal.append(x)\nprint(angka)\nprint(gagal)',
    kunci="try: bagian yang bisa gagal; except JenisError: penanganannya. int('7.5') juga gagal; float('7.5') berhasil."),
  langkah=[
    L("py-err-1", "Bersihkan daftar angka", 1, "bersihkan",
      "Buat <code>bersihkan(data)</code> yang mengubah setiap teks menjadi <code>float</code>. Teks yang gagal diubah dilewati. Kembalikan tuple <code>(list_angka, jumlah_gagal)</code>. Koma desimal Indonesia (<code>\"7,5\"</code>) harus dianggap titik.",
      'def bersihkan(data):\n    angka, gagal = [], 0\n    for x in data:\n        try:\n            angka.append(float(x.replace(",", ".")))\n        except ValueError:\n            gagal += 1\n    return angka, gagal\n',
      ['bersihkan(["10", "7,5", "abc", ""])', 'bersihkan([])', 'bersihkan(["1e3", " 4 "])', 'bersihkan(["-2,25", "1.000,5"])'],
      ["Ganti koma dengan titik sebelum float().", "Bungkus float(...) dengan try/except ValueError, hitung yang gagal."],
      "float() juga menerima notasi ilmiah (1e3) dan spasi di tepi. '1.000,5' gagal karena setelah diganti menjadi '1.000.5'.",
      cek={'bersihkan(["10", "7,5", "abc", ""])': ([10.0, 7.5], 2)}),
    L("py-err-2", "Pembagian yang aman", 2, "bagi_aman",
      "Buat <code>bagi_aman(a, b)</code>: kembalikan hasil a / b dibulatkan 2 desimal. Jika b nol, kembalikan <code>\"Error: pembagian dengan nol\"</code>. Jika a atau b bukan angka (TypeError), kembalikan <code>\"Error: input harus angka\"</code>.",
      'def bagi_aman(a, b):\n    try:\n        return round(a / b, 2)\n    except ZeroDivisionError:\n        return "Error: pembagian dengan nol"\n    except TypeError:\n        return "Error: input harus angka"\n',
      ["bagi_aman(10, 4)", "bagi_aman(1, 0)", 'bagi_aman("10", 2)', "bagi_aman(-7, 3)", "bagi_aman(None, 1)"],
      ["Satu try bisa punya beberapa except, masing-masing untuk satu jenis error.", "Urutan except tidak masalah di sini karena jenisnya berbeda."],
      "Menangkap error spesifik memberi pesan yang jelas bagi pengguna. Di Odoo, pesan seperti ini disampaikan lewat raise UserError(\"...\").",
      cek={"bagi_aman(1, 0)": "Error: pembagian dengan nol"}),
  ])

# ---------------------------------------------------------------- 10. oop
studi(id="py-oop", topik="python", setelah="oop", judul="Class Produk dan turunannya",
  contoh=dict(judul="Contoh: class, __init__, method, dan inheritance",
    penjelasan="<p>Class adalah cetakan; objek adalah hasil cetakannya. <code>__init__</code> mengisi data awal ke <code>self</code>. Class anak <code>class B(A)</code> mewarisi semua method A dan bisa mengganti (override) sebagian, memanggil versi induk dengan <code>super()</code>.</p>",
    kode='class Produk:\n    def __init__(self, nama, harga):\n        self.nama = nama\n        self.harga = harga\n\n    def label(self):\n        return f"{self.nama} - Rp {self.harga}"\n\nclass ProdukBaru(Produk):\n    def label(self):\n        return "[BARU] " + super().label()\n\nprint(Produk("Kopi", 15000).label())\nprint(ProdukBaru("Teh", 8000).label())',
    kunci="self menyimpan data objek. super().method() memanggil versi induk, lalu kamu menambahkan perilaku baru."),
  langkah=[
    L("py-oop-1", "Class Produk dengan diskon", 1, "Produk",
      "Buat class <code>Produk</code> dengan <code>__init__(self, nama, harga, diskon=0)</code> dan method <code>harga_akhir()</code> yang mengembalikan harga setelah diskon persen, dibulatkan ke int dengan <code>round()</code>.",
      'class Produk:\n    def __init__(self, nama, harga, diskon=0):\n        self.nama = nama\n        self.harga = harga\n        self.diskon = diskon\n\n    def harga_akhir(self):\n        return round(self.harga * (1 - self.diskon / 100))\n',
      ['Produk("Kopi", 20000, 10).harga_akhir()', 'Produk("Teh", 8000).harga_akhir()', 'p = Produk("Roti", 12500, 50)\nhasil = (p.nama, p.harga_akhir())', 'Produk("X", 999, 33).harga_akhir()'],
      ["Simpan ketiga parameter ke self di __init__.", "harga_akhir memakai self.harga dan self.diskon."],
      "Atribut yang disimpan di self bisa dipakai oleh semua method objek itu.",
      awal='class Produk:\n    def __init__(self, nama, harga, diskon=0):\n        pass\n\n    def harga_akhir(self):\n        pass\n',
      cek={'Produk("Kopi", 20000, 10).harga_akhir()': 18000}),
    L("py-oop-2", "ProdukGrosir: override dengan super()", 2, "ProdukGrosir",
      "Class <code>Produk</code> sudah ada di kode awal. Buat <code>ProdukGrosir(Produk)</code> yang menerima tambahan <code>min_grosir</code>. Tambahkan method <code>total(qty)</code>: harga_akhir × qty, dan jika qty ≥ min_grosir dapat potongan tambahan 5% dari total (bulatkan dengan round). Override <code>harga_akhir()</code> agar tidak pernah di bawah 1000.",
      'class Produk:\n    def __init__(self, nama, harga, diskon=0):\n        self.nama = nama\n        self.harga = harga\n        self.diskon = diskon\n\n    def harga_akhir(self):\n        return round(self.harga * (1 - self.diskon / 100))\n\n\nclass ProdukGrosir(Produk):\n    def __init__(self, nama, harga, diskon=0, min_grosir=10):\n        super().__init__(nama, harga, diskon)\n        self.min_grosir = min_grosir\n\n    def harga_akhir(self):\n        return max(1000, super().harga_akhir())\n\n    def total(self, qty):\n        t = self.harga_akhir() * qty\n        if qty >= self.min_grosir:\n            t = round(t * 0.95)\n        return t\n',
      ['ProdukGrosir("Gula", 15000, 0, 10).total(10)', 'ProdukGrosir("Gula", 15000, 0, 10).total(9)', 'ProdukGrosir("Permen", 1500, 50).harga_akhir()', 'ProdukGrosir("Kopi", 20000, 10, 5).total(5)', 'isinstance(ProdukGrosir("a", 2000), Produk)'],
      ["Di __init__ anak: super().__init__(nama, harga, diskon), lalu self.min_grosir = min_grosir.", "harga_akhir anak: max(1000, super().harga_akhir()). total memakai self.harga_akhir() supaya batas 1000 ikut berlaku."],
      "Inilah pola _inherit di Odoo: class baru memakai ulang logika induk lewat super() lalu menambahkan aturan bisnis.",
      awal='class Produk:\n    def __init__(self, nama, harga, diskon=0):\n        self.nama = nama\n        self.harga = harga\n        self.diskon = diskon\n\n    def harga_akhir(self):\n        return round(self.harga * (1 - self.diskon / 100))\n\n\nclass ProdukGrosir(Produk):\n    pass\n',
      cek={'ProdukGrosir("Gula", 15000, 0, 10).total(10)': 142500, 'ProdukGrosir("Permen", 1500, 50).harga_akhir()': 1000}),
  ])

# ---------------------------------------------------------------- 11. modul
studi(id="py-modul", topik="python", setelah="modul", judul="Memakai modul bawaan: math dan datetime",
  contoh=dict(judul="Contoh: import math dan datetime",
    penjelasan="<p>Python punya banyak modul bawaan. <code>math</code> untuk perhitungan (akar, pembulatan ke atas), <code>datetime</code> untuk tanggal. <code>date.weekday()</code> memberi 0 untuk Senin sampai 6 untuk Minggu.</p>",
    kode='import math\nfrom datetime import date\n\nprint(math.sqrt(16), math.ceil(2.1), math.floor(2.9))\nprint(math.hypot(3, 4))           # jarak (3,4) dari titik (0,0)\n\nd = date(2026, 11, 24)\nHARI = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]\nprint(d.weekday(), HARI[d.weekday()])',
    kunci="import modul lalu pakai modul.fungsi(). weekday(): Senin = 0."),
  langkah=[
    L("py-mod-1", "Nama hari", 1, "nama_hari",
      "Buat <code>nama_hari(tanggal)</code> yang menerima teks <code>\"YYYY-MM-DD\"</code> dan mengembalikan nama hari dalam bahasa Indonesia.",
      'from datetime import date\n\nHARI = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]\n\ndef nama_hari(tanggal):\n    return HARI[date.fromisoformat(tanggal).weekday()]\n',
      ['nama_hari("2026-11-24")', 'nama_hari("2026-08-17")', 'nama_hari("2000-01-01")', 'nama_hari("2026-11-29")'],
      ["date.fromisoformat(\"2026-11-24\") mengubah teks jadi objek tanggal.", "Pakai list HARI seperti contoh dengan indeks weekday()."],
      "Menyimpan nama hari di list lalu mengaksesnya dengan indeks adalah cara sederhana menerjemahkan kode ke teks.",
      cek={'nama_hari("2026-11-24")': "Selasa"}),
    L("py-mod-2", "Jarak terdekat", 2, "terdekat",
      "Kurir di titik <code>asal</code> (tuple x, y). Buat <code>terdekat(asal, lokasi)</code>: <code>lokasi</code> adalah dict <code>{nama: (x, y)}</code>. Kembalikan tuple <code>(nama, jarak)</code> lokasi terdekat dengan jarak dibulatkan 2 desimal. Jika seri, pilih nama abjad terkecil. Jika lokasi kosong, kembalikan None.",
      'import math\n\ndef terdekat(asal, lokasi):\n    if not lokasi:\n        return None\n    jarak = {n: math.hypot(x - asal[0], y - asal[1]) for n, (x, y) in lokasi.items()}\n    nama = min(jarak, key=lambda n: (jarak[n], n))\n    return nama, round(jarak[nama], 2)\n',
      ['terdekat((0, 0), {"Gudang A": (3, 4), "Gudang B": (1, 1), "Toko": (6, 8)})', 'terdekat((2, 2), {})', 'terdekat((0, 0), {"Z": (1, 0), "Y": (0, 1)})', 'terdekat((10, -2), {"P": (13, 2)})'],
      ["Jarak dua titik: math.hypot(x2 - x1, y2 - y1).", "Pilih minimum dengan key tuple (jarak, nama) agar seri jatuh ke abjad terkecil."],
      "min() dengan key tuple adalah cara ringkas memilih 'terbaik' dengan aturan pemecah seri.",
      cek={'terdekat((0, 0), {"Gudang A": (3, 4), "Gudang B": (1, 1), "Toko": (6, 8)})': ("Gudang B", 1.41)}),
  ])

# ---------------------------------------------------------------- 12. pandas
studi(id="py-pandas", topik="python", setelah="pandas", judul="pandas: groupby seperti pivot table",
  contoh=dict(judul="Contoh: DataFrame, kolom baru, dan groupby",
    penjelasan="<p>DataFrame = tabel. Kolom baru dibuat dengan operasi per kolom (vektor), tanpa for. <code>groupby(\"kota\")[\"total\"].sum()</code> sama seperti pivot table: total per kota.</p><p class=\"kecil\">Catatan: saat pertama dijalankan, pandas diunduh sekali (± 10 MB).</p>",
    kode='import pandas as pd\n\ndf = pd.DataFrame({\n    "kota": ["Batam", "Solo", "Batam", "Solo"],\n    "qty": [2, 1, 3, 5],\n    "harga": [10000, 20000, 10000, 5000],\n})\ndf["total"] = df["qty"] * df["harga"]\nprint(df)\nprint(df.groupby("kota")["total"].sum().to_dict())',
    kunci="Kolom baru: df[\"baru\"] = df[\"a\"] * df[\"b\"]. Ringkas: df.groupby(kolom)[nilai].sum()."),
  langkah=[
    L("py-pd-1", "Total per kota", 1, "total_per_kota",
      "Buat <code>total_per_kota(df)</code>. df punya kolom <code>kota</code>, <code>qty</code>, <code>harga</code>. Kembalikan dict <code>{kota: total}</code> dengan total = jumlah qty × harga, sebagai int.",
      'def total_per_kota(df):\n    df = df.assign(total=df["qty"] * df["harga"])\n    return {k: int(v) for k, v in df.groupby("kota")["total"].sum().items()}\n',
      ['import pandas as pd\nhasil = total_per_kota(pd.DataFrame({"kota": ["Batam", "Solo", "Batam"], "qty": [2, 1, 3], "harga": [10000, 20000, 10000]}))',
       'import pandas as pd\nhasil = total_per_kota(pd.DataFrame({"kota": ["A"], "qty": [0], "harga": [500]}))',
       'import pandas as pd\nhasil = total_per_kota(pd.DataFrame({"kota": ["B", "A", "B"], "qty": [1, 1, 1], "harga": [1, 2, 3]}))'],
      ["Buat kolom total = qty × harga, lalu groupby(\"kota\")[\"total\"].sum().", "Hasil groupby berupa Series berisi angka numpy; ubah ke dict dengan int(v) tiap nilai."],
      "Angka dari pandas bertipe numpy (int64). int(v) mengubahnya ke int biasa. df.assign(...) membuat salinan sehingga df asli tidak berubah.",
      cek={'import pandas as pd\nhasil = total_per_kota(pd.DataFrame({"kota": ["Batam", "Solo", "Batam"], "qty": [2, 1, 3], "harga": [10000, 20000, 10000]}))': {"Batam": 50000, "Solo": 20000}}),
    L("py-pd-2", "Produk terlaris per kategori", 2, "terlaris",
      "Buat <code>terlaris(df)</code>. df punya kolom <code>kategori</code>, <code>produk</code>, <code>qty</code> (satu produk bisa muncul di banyak baris). Kembalikan dict <code>{kategori: produk}</code> berisi produk dengan total qty terbanyak di setiap kategori. Jika seri, ambil nama produk abjad terkecil.",
      'def terlaris(df):\n    total = df.groupby(["kategori", "produk"], as_index=False)["qty"].sum()\n    total = total.sort_values(["kategori", "qty", "produk"], ascending=[True, False, True])\n    return {k: p for k, p in total.drop_duplicates("kategori")[["kategori", "produk"]].itertuples(index=False)}\n',
      ['import pandas as pd\nhasil = terlaris(pd.DataFrame({"kategori": ["Minuman", "Minuman", "Makanan", "Minuman"], "produk": ["Kopi", "Teh", "Roti", "Teh"], "qty": [5, 3, 2, 4]}))',
       'import pandas as pd\nhasil = terlaris(pd.DataFrame({"kategori": ["A", "A"], "produk": ["y", "x"], "qty": [1, 1]}))',
       'import pandas as pd\nhasil = terlaris(pd.DataFrame({"kategori": ["K"], "produk": ["p"], "qty": [9]}))'],
      ["Langkah 1: groupby dua kolom [\"kategori\", \"produk\"] lalu jumlahkan qty.", "Langkah 2: urutkan qty menurun (dan produk naik untuk seri), lalu ambil baris pertama tiap kategori dengan drop_duplicates(\"kategori\")."],
      "groupby dengan beberapa kolom = pivot dengan beberapa baris. Pola 'urutkan lalu ambil pertama per grup' sangat sering dipakai di analisis data.",
      cek={'import pandas as pd\nhasil = terlaris(pd.DataFrame({"kategori": ["Minuman", "Minuman", "Makanan", "Minuman"], "produk": ["Kopi", "Teh", "Roti", "Teh"], "qty": [5, 3, 2, 4]}))': {"Makanan": "Roti", "Minuman": "Teh"}}),
  ])
