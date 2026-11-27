// ============ EXCEL — tambahan 2x lipat (10 bab) ============
// Dimuat SETELAH soal-latihan-ekstra.js. Soal bertanda tb:"penjualan" memakai sheet contoh (A Sales, B Wilayah, C Produk,
// D Qty, E Harga, F Total; data di baris 2–11). Angka dihitung dari js/data/dataset.js. Kunci di indeks 0 (opsi diacak).
(function () {
  const S = (k, lv, kode, o, e) => ({ k, t: "mc", lv, tb: "penjualan", q: "Lihat sheet di atas. Hasil rumus ini adalah…", kode, o, a: 0, e });
  const M = (k, lv, q, o, e, kode) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_EXCEL.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  SOAL_EXCEL.push(
  // ---- dasar (+10) ----
  S("dasar", 1, "=AVERAGE(D2:D11)", ["3,5", "35", "3", "10"], "AVERAGE = jumlah ÷ banyak data = 35 ÷ 10 = 3,5."),
  S("dasar", 1, "=MAX(F2:F11)", ["14.000.000", "7.000.000", "45.250.000", "750.000"], "MAX mencari nilai terbesar di kolom Total: transaksi Laptop milik Andi."),
  S("dasar", 1, "=MIN(F2:F11)", ["750.000", "150.000", "1.200.000", "1"], "MIN mencari nilai terkecil di kolom Total (Mouse Andi di Surabaya). 150.000 ada di kolom Harga, bukan Total."),
  S("dasar", 1, "=COUNT(D2:D11)", ["10", "35", "6", "9"], "COUNT menghitung banyak sel berisi ANGKA, bukan menjumlah."),
  S("dasar", 2, "=COUNTA(A2:A11)", ["10", "4", "0", "35"], "COUNTA menghitung sel yang tidak kosong (termasuk teks). Nama sales unik ada 4, tapi COUNTA menghitung semua baris."),
  M("dasar", 2, "Rumus =E2*D2 di G2 disalin ke G3. Rumus di G3 menjadi…", ["=E3*D3", "=E2*D2", "=F3*E3", "=E2*D3"], "Referensi relatif ikut bergeser satu baris saat disalin ke bawah."),
  M("dasar", 2, "Tarif pajak ada di H1. Rumus di G2 =F2*$H$1 lalu disalin ke bawah. Kenapa pakai $?", ["Agar H1 tetap terkunci, sementara F2 ikut bergeser", "Agar hasil jadi rupiah", "Agar rumus lebih cepat", "Agar tidak bisa diedit"], "$H$1 = referensi absolut. Tekan F4 untuk mengganti jenis referensi."),
  M("dasar", 2, "Referensi campuran $A2 berarti…", ["Kolom A terkunci, baris boleh bergeser", "Baris 2 terkunci", "Keduanya terkunci", "Keduanya bebas"], "Cocok untuk tabel perkalian: =$A2*B$1."),
  M("dasar", 2, "Urutan hitung Excel untuk =2+3*4^2:", ["50 (pangkat → kali → tambah)", "200", "196", "80"], "4^2 = 16, 3×16 = 48, 2 + 48 = 50."),
  I("dasar", 1, "Tombol untuk mengubah referensi A1 menjadi $A$1 saat mengedit rumus: F____", ["4"], "F4 berputar: $A$1 → A$1 → $A1 → A1."),

  // ---- sumifs (+11) ----
  S("sumifs", 1, "=SUMIFS(F2:F11, B2:B11, \"Jakarta\")", ["25.200.000", "14.000.000", "4", "45.250.000"], "Jumlahkan Total bila Wilayah Jakarta: 14 jt + 6 jt + 1,2 jt + 4 jt = 25,2 jt."),
  S("sumifs", 1, "=COUNTIFS(B2:B11, \"Bandung\")", ["3", "2", "10.500.000", "4"], "Baris Bandung: Bima (Mouse), Dewi (Laptop), Bima (Monitor)."),
  S("sumifs", 1, "=SUMIFS(F2:F11, A2:A11, \"Andi\")", ["18.750.000", "14.000.000", "3", "4.000.000"], "Andi: 14 jt + 750 rb + 4 jt = 18,75 jt."),
  S("sumifs", 2, "=SUMIFS(D2:D11, C2:C11, \"Laptop\")", ["4", "3", "28.000.000", "2"], "Qty Laptop: 2 + 1 + 1 = 4 unit (sementara banyak transaksinya 3)."),
  S("sumifs", 2, "=COUNTIFS(F2:F11, \">=5000000\")", ["4", "3", "5", "2"], "Transaksi ≥ 5 jt: 14 jt, 6 jt, 7 jt, 7 jt. Syarat angka ditulis dalam kutip: \">=5000000\"."),
  S("sumifs", 2, "=SUMIFS(F2:F11, B2:B11, \"Jakarta\", C2:C11, \"Monitor\")", ["10.000.000", "6.000.000", "25.200.000", "2"], "Dua syarat (DAN): Jakarta dan Monitor → Citra 6 jt + Andi 4 jt."),
  S("sumifs", 2, "=COUNTIFS(A2:A11, \"Bima\", D2:D11, \">=4\")", ["2", "3", "1", "14"], "Baris Bima: qty 10, 4, 1. Yang ≥ 4 ada dua."),
  S("sumifs", 3, "=AVERAGEIFS(F2:F11, C2:C11, \"Laptop\")", ["9.333.333 (dibulatkan)", "7.000.000", "28.000.000", "14.000.000"], "Rata-rata Total Laptop: (14 + 7 + 7) jt ÷ 3 ≈ 9,33 jt."),
  S("sumifs", 3, "=SUMIFS(F2:F11, B2:B11, \"<>Jakarta\")", ["20.050.000", "25.200.000", "45.250.000", "6"], "<> berarti tidak sama dengan. Total semua 45,25 jt dikurangi Jakarta 25,2 jt = 20,05 jt."),
  M("sumifs", 2, "Menghitung Total untuk sales yang namanya diawali huruf B:", ["=SUMIFS(F2:F11, A2:A11, \"B*\")", "=SUMIFS(F2:F11, A2:A11, \"B\")", "=SUMIF(\"B\")", "=SUM(B*)"], "Tanda * di kriteria berarti 'teks apa saja' (wildcard)."),
  I("sumifs", 1, "Fungsi menghitung banyak baris dengan beberapa syarat: ____", ["countifs"], "COUNTIFS(rentang1, syarat1, rentang2, syarat2, …)."),

  // ---- xlookup (+9) ----
  S("xlookup", 1, "=XLOOKUP(\"Dewi\", A2:A11, B2:B11)", ["Bandung", "Surabaya", "Dewi", "#N/A"], "XLOOKUP mengambil kecocokan PERTAMA dari atas: Dewi pertama di baris 6 (Bandung)."),
  S("xlookup", 1, "=XLOOKUP(\"Eka\", A2:A11, B2:B11, \"Tidak ada\")", ["Tidak ada", "#N/A", "0", "Eka"], "Argumen keempat XLOOKUP adalah teks pengganti bila tidak ketemu."),
  S("xlookup", 1, "=VLOOKUP(\"Citra\", A2:F11, 3, FALSE)", ["Monitor", "Jakarta", "Laptop", "3"], "Kolom ke-3 dari rentang A:F adalah Produk. Citra pertama (baris 4) membeli Monitor."),
  S("xlookup", 2, "=VLOOKUP(\"Bima\", A2:F11, 6, FALSE)", ["1.500.000", "1.200.000", "2.000.000", "10"], "Kolom ke-6 = Total. Baris Bima pertama: Mouse 1,5 jt."),
  M("xlookup", 2, "Kenapa VLOOKUP tidak bisa mencari Sales berdasarkan Produk di sheet ini (Produk di kolom C, Sales di A)?", ["VLOOKUP hanya mengambil ke KANAN dari kolom pencarian", "Data terlalu sedikit", "Produk berupa teks", "Harus memakai SUM"], "XLOOKUP atau INDEX-MATCH bisa mengambil ke kiri."),
  M("xlookup", 2, "Argumen terakhir VLOOKUP sebaiknya FALSE/0 karena…", ["Mencari kecocokan persis; TRUE mencari perkiraan dan butuh data terurut", "Lebih cepat", "Wajib huruf besar", "Untuk angka saja"], "Lupa FALSE adalah penyebab hasil VLOOKUP salah yang paling umum."),
  M("xlookup", 2, "Rumus =XLOOKUP(G2, Produk[Nama], Produk[Harga]) memakai…", ["Referensi tabel terstruktur (Table) yang otomatis melebar saat data ditambah", "Rentang tetap", "Makro", "Pivot"], "Ubah data jadi Table dengan Ctrl+T."),
  M("xlookup", 3, "XLOOKUP dengan search_mode -1 mencari…", ["Dari bawah ke atas (mengambil kecocokan TERAKHIR)", "Dari kiri", "Perkiraan", "Wildcard"], "Contoh: harga terbaru dari riwayat yang diurutkan tanggal."),
  I("xlookup", 1, "Fungsi pencarian modern pengganti VLOOKUP: ____", ["xlookup"], "XLOOKUP(cari, kolom_cari, kolom_hasil, [jika_tidak_ada])."),

  // ---- if (+10) ----
  S("if", 1, "=IF(D2>=5, \"Grosir\", \"Satuan\")", ["Satuan", "Grosir", "2", "FALSE"], "D2 (Qty Andi) = 2, tidak ≥ 5, jadi bagian 'jika salah' yang dipakai."),
  S("if", 1, "=IF(D3>=5, \"Grosir\", \"Satuan\")", ["Grosir", "Satuan", "10", "TRUE"], "D3 = 10, memenuhi syarat."),
  S("if", 2, "=IFS(F3>=10000000, \"Besar\", F3>=1000000, \"Sedang\", TRUE, \"Kecil\")", ["Sedang", "Besar", "Kecil", "#N/A"], "F3 = 1,5 jt: tidak ≥ 10 jt, tapi ≥ 1 jt → Sedang. TRUE di akhir berfungsi seperti 'selain itu'."),
  S("if", 2, "=IF(AND(B2=\"Jakarta\", F2>10000000), \"VIP\", \"-\")", ["VIP", "-", "TRUE", "#VALUE!"], "Baris 2: Jakarta DAN 14 jt > 10 jt, keduanya benar."),
  S("if", 2, "=IF(OR(C5=\"Laptop\", D5>=5), \"Cek\", \"Biasa\")", ["Cek", "Biasa", "FALSE", "Laptop"], "Baris 5: Mouse (bukan Laptop) tapi qty 5 ≥ 5, jadi OR benar."),
  S("if", 2, "=COUNTIFS(D2:D11, \">=5\")", ["3", "2", "21", "5"], "Qty ≥ 5: 10, 5, 6. Pola ini sama dengan menghitung banyak hasil 'Grosir' dari kolom IF."),
  M("if", 2, "IF bertingkat ini memberi hasil apa untuk nilai 85?", ["B", "A", "C", "Error"], "85 tidak ≥ 90, tapi ≥ 80 → B. Urutkan syarat dari yang paling ketat.", "=IF(H2>=90,\"A\",IF(H2>=80,\"B\",\"C\"))"),
  M("if", 2, "Rumus =IF(H2>=70,\"Lulus\") untuk nilai 60 menghasilkan…", ["FALSE", "Lulus", "Kosong", "#N/A"], "Tanpa argumen ketiga, Excel menampilkan FALSE. Selalu isi nilai_jika_salah."),
  M("if", 3, "Komisi 5% bila Total ≥ 5 jt, selain itu 2%. Rumus singkat yang benar:", ["=F2*IF(F2>=5000000, 5%, 2%)", "=IF(F2>=5000000, 5%, 2%)", "=F2*5%*2%", "=IF(F2, 5%)"], "IF memilih persen, lalu dikalikan Total."),
  I("if", 1, "Fungsi bernilai TRUE bila SEMUA syarat benar: ____()", ["and"], "AND(syarat1, syarat2, …)."),

  // ---- pivot (+10) ----
  M("pivot", 1, "Pivot Table berguna untuk…", ["Meringkas ribuan baris menjadi tabel total per kategori dengan seret-lepas", "Menghapus data", "Membuat grafik saja", "Mengetik data"], "Tanpa menulis rumus SUMIFS satu per satu."),
  M("pivot", 1, "Untuk melihat total penjualan per Wilayah, kolom Wilayah ditaruh di area…", ["Rows, dan Total di Values (Sum)", "Values", "Filters saja", "Columns dan Values sekaligus"], "Rows = pengelompokan, Values = angka yang dihitung."),
  M("pivot", 2, "Total Jakarta di Pivot (Rows: Wilayah, Values: Sum of Total) sheet ini adalah…", ["25.200.000", "4", "14.000.000", "10.500.000"], "Sama dengan SUMIFS Jakarta.", null),
  M("pivot", 2, "Values menampilkan 'Count of Total' padahal ingin jumlah. Perbaikannya:", ["Value Field Settings → ubah ke Sum", "Hapus pivot", "Ubah data ke teks", "Refresh"], "Excel memilih Count bila ada sel kosong/teks di kolom angka."),
  M("pivot", 2, "Data sumber ditambah 50 baris tapi Pivot tidak berubah. Langkah yang benar:", ["Refresh (dan pakai Table sebagai sumber agar rentang otomatis melebar)", "Buat ulang manual setiap kali", "Hapus data lama", "Tidak bisa"], "Pivot tidak menghitung ulang otomatis."),
  M("pivot", 2, "Menampilkan persentase tiap wilayah terhadap total:", ["Show Values As → % of Grand Total", "Ubah format ke %", "Bagi manual di luar pivot saja", "Filter"], "Hasilnya: Jakarta ≈ 55,7%."),
  M("pivot", 2, "Slicer pada Pivot berfungsi sebagai…", ["Tombol filter visual yang mudah diklik", "Pemotong data permanen", "Grafik", "Rumus"], "Satu slicer bisa terhubung ke beberapa pivot."),
  M("pivot", 2, "Kolom tanggal di Rows bisa dikelompokkan per bulan dengan…", ["Group → Months (dan Years)", "Mengetik ulang bulan", "VLOOKUP", "Tidak bisa"], "Excel baru otomatis mengelompokkan tanggal."),
  M("pivot", 3, "Pivot menunjukkan Andi 18,75 jt dan Citra 13 jt. Insight yang paling tepat untuk manajer:", ["Andi penyumbang terbesar, didorong satu transaksi Laptop 14 jt; cek apakah itu pola atau kebetulan", "Citra harus dipecat", "Semua sama", "Data salah"], "Angka ringkasan perlu dilihat bersama rinciannya (double-click untuk drill-down)."),
  I("pivot", 1, "Area Pivot tempat angka yang dijumlah: ____", ["values"], "Values."),

  // ---- cf (+9) ----
  M("cf", 1, "Conditional formatting dipakai untuk…", ["Memberi warna otomatis pada sel sesuai aturan (misalnya Total > 5 jt jadi hijau)", "Menghapus data", "Mengurutkan", "Membuat rumus"], "Membuat pola data langsung terlihat."),
  M("cf", 2, "Menyorot baris (bukan hanya sel) yang Wilayah-nya Jakarta memakai aturan rumus…", ["=$B2=\"Jakarta\" diterapkan pada A2:F11", "=B2=\"Jakarta\" tanpa $", "=Jakarta", "=SUM(B2)"], "$B mengunci kolom B, baris tetap bergeser untuk setiap baris."),
  M("cf", 2, "Data Bars cocok untuk…", ["Membandingkan besar angka langsung di dalam sel seperti grafik batang mini", "Menyembunyikan angka", "Teks", "Tanggal saja"], "Contoh: kolom Total."),
  M("cf", 2, "Color Scale (merah-kuning-hijau) menunjukkan…", ["Gradasi nilai rendah sampai tinggi", "Nilai kembar", "Teks", "Error"], "Hati-hati memakai merah-hijau untuk pembaca buta warna; tambahkan angka/ikon."),
  M("cf", 2, "Menandai nama pelanggan yang muncul lebih dari sekali:", ["Highlight Cells Rules → Duplicate Values", "Data Bars", "Pivot", "Filter"], "Cara cepat menemukan data ganda sebelum dibersihkan."),
  M("cf", 2, "Menyorot 3 transaksi terbesar:", ["Top/Bottom Rules → Top 10 Items, ubah menjadi 3", "Data Bars", "Duplicate", "Icon Set"], "Bisa juga Top 10% untuk persentase."),
  M("cf", 3, "Aturan CF dengan rumus =F2>AVERAGE($F$2:$F$11) menyorot…", ["Transaksi di atas rata-rata Total", "Semua sel", "Rata-rata saja", "Error"], "Rentang rata-rata dikunci $, sel yang dinilai F2 relatif."),
  M("cf", 2, "Beberapa aturan CF bertabrakan. Yang menentukan urutan prioritas:", ["Urutan di Manage Rules (atas lebih dulu) dan opsi Stop If True", "Warna", "Ukuran huruf", "Acak"], "Atur ulang di Conditional Formatting → Manage Rules."),
  I("cf", 1, "Fitur pewarnaan otomatis sel berdasarkan aturan: conditional ____", ["formatting"], "Conditional Formatting."),

  // ---- teks (+16) ----
  M("teks", 1, "=LEFT(\"Jakarta\", 3) menghasilkan…", ["Jak", "rta", "Jakarta", "3"], "LEFT mengambil karakter dari kiri."),
  M("teks", 1, "=RIGHT(\"INV-0042\", 4) menghasilkan…", ["0042", "INV-", "42", "INV-0042"], "RIGHT mengambil dari kanan; nol di depan tetap karena hasilnya teks."),
  M("teks", 1, "=MID(\"2026-11-27\", 6, 2) menghasilkan…", ["11", "27", "20", "-1"], "MID(teks, mulai, panjang): mulai karakter ke-6, ambil 2."),
  M("teks", 1, "=LEN(\"Surabaya\") menghasilkan…", ["8", "7", "9", "Surabaya"], "LEN menghitung semua karakter, termasuk spasi bila ada."),
  M("teks", 1, "=PROPER(\"andi SANTOSO\") menghasilkan…", ["Andi Santoso", "ANDI SANTOSO", "andi santoso", "Andi SANTOSO"], "PROPER: huruf pertama setiap kata besar, sisanya kecil."),
  M("teks", 2, "=TRIM(\"  Budi   Santoso  \") menghasilkan…", ["Budi Santoso (spasi tepi dibuang, spasi ganda di tengah jadi satu)", "Budi   Santoso", "BudiSantoso", "  Budi Santoso"], "Penting sebelum VLOOKUP: spasi tersembunyi membuat pencarian gagal."),
  M("teks", 2, "=SUBSTITUTE(\"Rp 1.250.000\", \".\", \"\") menghasilkan…", ["Rp 1250000", "Rp 1,250,000", "1250000", "Rp 1.250.000"], "SUBSTITUTE mengganti semua kemunculan teks tertentu."),
  M("teks", 2, "=VALUE(SUBSTITUTE(\"1.250.000\", \".\", \"\")) berguna untuk…", ["Mengubah teks angka bertitik menjadi angka yang bisa dihitung", "Memberi format rupiah", "Menghapus angka", "Membuat teks"], "Data dari sistem lain sering berupa teks."),
  M("teks", 2, "=TEXTJOIN(\", \", TRUE, A2:A4) menghasilkan…", ["Andi, Bima, Citra", "AndiBimaCitra", "Andi Bima Citra", "3"], "TEXTJOIN menggabungkan dengan pemisah; TRUE melewati sel kosong."),
  M("teks", 2, "=A2&\" - \"&B2 pada baris 2 menghasilkan…", ["Andi - Jakarta", "Andi-Jakarta", "A2 - B2", "#VALUE!"], "& menyambung teks seperti CONCAT."),
  M("teks", 2, "Memisahkan 'Budi Santoso' menjadi nama depan dengan rumus:", ["=LEFT(A2, FIND(\" \", A2) - 1)", "=LEFT(A2, 4)", "=MID(A2, 1)", "=RIGHT(A2, \" \")"], "FIND mencari posisi spasi; ambil sebelum spasi."),
  M("teks", 2, "=FIND(\"a\", \"Jakarta\") menghasilkan…", ["2", "4", "7", "1"], "Posisi 'a' pertama (huruf kecil) ada di karakter ke-2. FIND membedakan besar-kecil; SEARCH tidak."),
  M("teks", 2, "Fitur tanpa rumus untuk memecah 'Nama;Kota' menjadi dua kolom:", ["Data → Text to Columns (pemisah ;)", "Pivot", "Sort", "Conditional formatting"], "Excel baru juga punya TEXTSPLIT."),
  M("teks", 2, "Flash Fill (Ctrl+E) bekerja dengan…", ["Meniru pola dari satu-dua contoh yang kamu ketik", "Menghapus kembar", "Membuat grafik", "Menghitung total"], "Cepat untuk memisahkan atau menggabungkan teks berpola."),
  M("teks", 3, "Kode produk 'PRD-007' dibuat dari angka 7 dengan rumus:", ["=\"PRD-\"&TEXT(7, \"000\")", "=\"PRD-\"&7", "=PRD-007", "=TEXT(\"PRD\", 7)"], "TEXT(angka, \"000\") menambahkan nol di depan."),
  I("teks", 1, "Fungsi menghapus spasi berlebih: ____()", ["trim"], "TRIM."),

  // ---- tanggal (+14) ----
  M("tanggal", 1, "=DATE(2026, 11, 27) + 30 menghasilkan tanggal…", ["27 Desember 2026", "27 November 2026", "30 November 2026", "57 November 2026"], "Tanggal di Excel adalah angka hari, jadi bisa ditambah."),
  M("tanggal", 1, "=MONTH(DATE(2026, 11, 27)) menghasilkan…", ["11", "27", "2026", "November"], "MONTH mengembalikan angka bulan."),
  M("tanggal", 2, "=EOMONTH(DATE(2026, 2, 10), 0) menghasilkan…", ["28 Februari 2026", "29 Februari 2026", "31 Februari 2026", "10 Maret 2026"], "End Of MONTH: tanggal akhir bulan. 2026 bukan tahun kabisat."),
  M("tanggal", 2, "=EOMONTH(DATE(2026, 1, 15), 1) menghasilkan…", ["28 Februari 2026", "31 Januari 2026", "15 Februari 2026", "1 Maret 2026"], "Argumen 1 = akhir bulan berikutnya."),
  M("tanggal", 2, "=DATE(2026, 12, 25) - DATE(2026, 11, 27) menghasilkan…", ["28", "29", "30", "-28"], "Selisih dua tanggal = jumlah hari."),
  M("tanggal", 2, "=NETWORKDAYS(DATE(2026,11,23), DATE(2026,11,27)) (Senin–Jumat) menghasilkan…", ["5", "4", "7", "3"], "Hari kerja termasuk tanggal awal dan akhir; argumen ketiga untuk daftar libur."),
  M("tanggal", 2, "=WEEKDAY(DATE(2026, 11, 27), 2) (1 = Senin) menghasilkan…", ["5 (Jumat)", "6", "1", "27"], "27 November 2026 jatuh pada hari Jumat."),
  M("tanggal", 2, "Teks '27/11/2026' tidak bisa dijumlah atau difilter sebagai tanggal. Penyebab utamanya:", ["Masih berupa teks (sering karena format regional berbeda); ubah dengan DATEVALUE atau Text to Columns", "Excel rusak", "Tahun terlalu besar", "Harus huruf"], "Tanggal asli rata kanan; teks rata kiri secara bawaan."),
  M("tanggal", 2, "=TODAY() berbeda dengan tanggal yang diketik karena…", ["TODAY selalu berganti mengikuti tanggal hari ini saat file dibuka", "TODAY tetap", "TODAY berisi jam", "Tidak ada bedanya"], "Untuk mencatat tanggal tetap tekan Ctrl+; (titik koma)."),
  M("tanggal", 2, "Mengubah tanggal menjadi teks 'Nov-2026' untuk dikelompokkan per bulan:", ["=TEXT(A2, \"mmm-yyyy\")", "=MONTH(A2)&YEAR", "=DATE(A2)", "=A2/30"], "Kode format: d, dd, mmm, mmmm, yyyy (bergantung bahasa Excel)."),
  M("tanggal", 2, "Umur dalam tahun penuh dari tanggal lahir di A2:", ["=DATEDIF(A2, TODAY(), \"Y\")", "=YEAR(TODAY())-A2", "=TODAY()-A2", "=AGE(A2)"], "DATEDIF tidak muncul di daftar fungsi, tapi masih bisa dipakai."),
  M("tanggal", 3, "Jatuh tempo 30 hari kerja (lewati Sabtu-Minggu) dari A2:", ["=WORKDAY(A2, 30)", "=A2+30", "=EDATE(A2, 1)", "=NETWORKDAYS(A2, 30)"], "WORKDAY menghitung maju dengan hari kerja."),
  M("tanggal", 2, "=EDATE(DATE(2026, 1, 31), 1) menghasilkan…", ["28 Februari 2026", "31 Februari 2026", "1 Maret 2026", "3 Maret 2026"], "EDATE menambah bulan dan menyesuaikan ke akhir bulan bila perlu."),
  I("tanggal", 1, "Fungsi tanggal hari ini: ____()", ["today"], "TODAY()."),

  // ---- lookup2 (+14) ----
  S("lookup2", 2, "=INDEX(C2:C11, MATCH(MAX(F2:F11), F2:F11, 0))", ["Laptop", "Monitor", "14.000.000", "1"], "MATCH mencari posisi Total terbesar (baris pertama), INDEX mengambil Produk di posisi itu."),
  S("lookup2", 1, "=MATCH(\"Monitor\", C2:C11, 0)", ["3", "4", "9", "Monitor"], "MATCH memberi POSISI di dalam rentang: Monitor pertama di urutan ke-3 (baris 4)."),
  S("lookup2", 2, "=INDEX(A2:F11, 5, 2)", ["Bandung", "Dewi", "Laptop", "Jakarta"], "Baris ke-5 dalam rentang (baris 6 sheet), kolom ke-2 (Wilayah)."),
  S("lookup2", 2, "=ROWS(UNIQUE(B2:B11))", ["3", "10", "4", "1"], "UNIQUE membuang wilayah kembar: Jakarta, Bandung, Surabaya. ROWS menghitung banyak baris hasilnya."),
  S("lookup2", 2, "=COUNTA(UNIQUE(C2:C11))", ["4", "10", "3", "5"], "Produk unik: Laptop, Mouse, Monitor, Keyboard."),
  S("lookup2", 2, "=ROWS(FILTER(A2:A11, F2:F11>=7000000))", ["3", "4", "2", "10"], "FILTER mengambil baris yang lolos syarat Total ≥ 7 jt: baris 2 (Andi 14 jt), baris 6 (Dewi 7 jt), baris 8 (Citra 7 jt). ROWS menghitung 3 baris."),
  S("lookup2", 2, "=TAKE(SORT(F2:F11, , -1), 1)", ["14.000.000", "750.000", "45.250.000", "7.000.000"], "SORT dengan -1 mengurutkan dari besar; TAKE mengambil baris pertama."),
  M("lookup2", 2, "Kenapa INDEX-MATCH dulu lebih disukai daripada VLOOKUP?", ["Bisa mencari ke kiri dan tidak rusak saat kolom disisipkan", "Lebih pendek", "Wajib di Excel", "Lebih berwarna"], "XLOOKUP sekarang menggabungkan kelebihan keduanya."),
  M("lookup2", 2, "Hasil rumus dynamic array tumpah ke beberapa sel. Muncul #SPILL! bila…", ["Sel tujuan tumpahan tidak kosong", "Data terlalu sedikit", "Rumus salah eja", "File belum disimpan"], "Kosongkan area di bawah/kanan rumus."),
  M("lookup2", 2, "=SORTBY(A2:A11, F2:F11, -1) menghasilkan…", ["Nama sales diurutkan berdasarkan Total dari besar ke kecil", "Total diurutkan", "Nama urut abjad", "Error"], "SORTBY mengurutkan satu kolom berdasarkan kolom lain."),
  M("lookup2", 2, "Referensi E2# berarti…", ["Seluruh hasil tumpahan (spill) dari rumus dynamic array di E2", "Sel E2 saja", "Kolom E", "Error"], "Berguna agar rumus lain otomatis mengikuti panjang hasil UNIQUE/FILTER."),
  M("lookup2", 3, "Daftar dropdown yang otomatis berisi wilayah unik dibuat dengan…", ["Data Validation → List dengan sumber =$H$2# (hasil UNIQUE)", "Mengetik manual", "Pivot", "VLOOKUP"], "Ketika data bertambah, pilihan dropdown ikut bertambah."),
  M("lookup2", 2, "=XMATCH(\"Bima\", A2:A11) menghasilkan…", ["2", "3", "7", "10"], "XMATCH versi baru MATCH: posisi Bima pertama di urutan ke-2."),
  I("lookup2", 1, "Fungsi yang menyaring baris dengan syarat: ____()", ["filter"], "FILTER(data, syarat)."),

  // ---- error (+14) ----
  M("error", 1, "=10/0 menghasilkan…", ["#DIV/0!", "#N/A", "0", "#VALUE!"], "Pembagian dengan nol atau sel kosong."),
  M("error", 1, "=VLOOKUP(\"Eka\", A2:F11, 2, FALSE) pada sheet ini menghasilkan…", ["#N/A", "#REF!", "0", "Eka"], "#N/A = data yang dicari tidak ditemukan."),
  M("error", 1, "=SUMM(A1:A5) menghasilkan…", ["#NAME?", "#VALUE!", "#N/A", "0"], "#NAME? = nama fungsi salah ketik atau teks tanpa kutip."),
  M("error", 2, "=\"abc\"*2 menghasilkan…", ["#VALUE!", "#NAME?", "abcabc", "0"], "#VALUE! = tipe data tidak cocok (teks dalam hitungan)."),
  M("error", 2, "Rumus =A1+B1 menjadi #REF! setelah…", ["Kolom/baris yang dirujuk dihapus", "Angka diubah", "File disimpan", "Format diubah"], "#REF! = referensi tidak lagi ada."),
  M("error", 2, "=IFERROR(F2/D2, 0) berguna untuk…", ["Menampilkan 0 (atau teks lain) bila pembagian error", "Menghapus error permanen", "Membulatkan", "Menjumlah"], "Jangan menutupi error yang menandakan data salah tanpa dicek."),
  M("error", 2, "Beda IFERROR dan IFNA:", ["IFNA hanya menangkap #N/A; IFERROR menangkap semua jenis error", "Sama saja", "IFERROR hanya #N/A", "IFNA untuk angka"], "IFNA lebih aman untuk lookup karena error lain (salah ketik) tetap terlihat."),
  M("error", 2, "Angka yang tampil rata kiri dan ada segitiga hijau di pojok sel biasanya…", ["Angka yang tersimpan sebagai teks", "Angka negatif", "Tanggal", "Rumus"], "Klik ikon peringatan → Convert to Number."),
  M("error", 2, "Hasil SUM terlihat 0 padahal kolom berisi angka. Penyebab paling umum:", ["Angka tersimpan sebagai teks (misalnya hasil impor)", "Kolom terlalu lebar", "File terkunci", "Huruf terlalu kecil"], "Ubah dengan VALUE atau Text to Columns."),
  M("error", 2, "Circular reference terjadi bila…", ["Rumus merujuk dirinya sendiri, langsung atau lewat sel lain", "Ada dua rumus", "Ada grafik", "Ada pivot"], "Contoh: di A10 menulis =SUM(A1:A10)."),
  M("error", 2, "Mencegah salah ketik saat input wilayah:", ["Data Validation → List (Jakarta, Bandung, Surabaya)", "Conditional formatting", "Pivot", "TRIM"], "Data yang rapi sejak input mencegah banyak error rumus."),
  M("error", 2, "Remove Duplicates (Data → Remove Duplicates) sebaiknya dipakai…", ["Setelah membuat salinan data dan memilih kolom kunci yang benar", "Langsung pada data asli tanpa cadangan", "Untuk angka saja", "Untuk menjumlah"], "Penghapusan tidak bisa di-undo setelah file ditutup."),
  M("error", 3, "Rumus yang paling aman mengambil harga produk dari tabel lain dan menulis 'cek' bila tidak ada:", ["=XLOOKUP(C2, Produk[Nama], Produk[Harga], \"cek\")", "=IFERROR(VLOOKUP(C2,Produk,2),\"cek\")", "=VLOOKUP(C2,Produk,2,TRUE)", "=INDEX(Produk,1)"], "Opsi kedua memakai perkiraan (TRUE bawaan) dan menutupi semua jenis error."),
  I("error", 1, "Fungsi pengganti hasil error: ____(rumus, 0)", ["iferror"], "IFERROR."),
  );

  dalami("dasar", `<h4>Rumus = kalimat perintah</h4><p>Setiap rumus diawali <code>=</code>. Excel menghitung dengan urutan: kurung → pangkat (^) → kali/bagi → tambah/kurang. Kalau ragu, pakai kurung.</p>
<table class="mini-pivot"><tr><th>Referensi</th><th>Saat disalin ke bawah</th><th>Saat disalin ke kanan</th></tr><tr><td>A1</td><td>A2</td><td>B1</td></tr><tr><td>$A$1</td><td>tetap A1</td><td>tetap A1</td></tr><tr><td>$A1</td><td>A2</td><td>tetap kolom A</td></tr><tr><td>A$1</td><td>tetap baris 1</td><td>B1</td></tr></table>
<p>Kebiasaan baik: ubah data menjadi <b>Table</b> (Ctrl+T) lalu tulis rumus dengan nama kolom, misalnya <code>=[@Qty]*[@Harga]</code>. Rumus lebih mudah dibaca dan otomatis berlaku untuk baris baru.</p>`);
  dalami("sumifs", `<h4>Membaca SUMIFS seperti kalimat</h4><p><code>=SUMIFS(F2:F11, B2:B11, "Jakarta", C2:C11, "Monitor")</code> = "jumlahkan <b>Total</b>, untuk baris yang <b>Wilayah</b>-nya Jakarta <b>dan</b> <b>Produk</b>-nya Monitor".</p>
<table class="mini-pivot"><tr><th>Kriteria</th><th>Arti</th></tr><tr><td>"Jakarta"</td><td>sama dengan</td></tr><tr><td>"&lt;&gt;Jakarta"</td><td>tidak sama</td></tr><tr><td>"&gt;=5000000"</td><td>angka minimal</td></tr><tr><td>"B*"</td><td>diawali B</td></tr><tr><td>"&gt;="&amp;H1</td><td>batas dari sel H1</td></tr></table>
<p>Semua syarat di SUMIFS/COUNTIFS bersifat DAN. Untuk ATAU, jumlahkan dua SUMIFS atau pakai SUM(FILTER(...)).</p>`);
  dalami("xlookup", `<h4>XLOOKUP dalam satu kalimat</h4><p><code>=XLOOKUP(yang_dicari, kolom_tempat_mencari, kolom_hasil, [jika_tidak_ada])</code>: "cari Dewi di kolom Sales, lalu ambil isi kolom Wilayah di baris yang sama".</p>
<table class="mini-pivot"><tr><th></th><th>VLOOKUP</th><th>XLOOKUP</th></tr><tr><td>Arah</td><td>hanya ke kanan</td><td>ke mana saja</td></tr><tr><td>Bawaan</td><td>perkiraan (harus tulis FALSE)</td><td>persis</td></tr><tr><td>Tidak ketemu</td><td>#N/A</td><td>bisa diberi teks</td></tr><tr><td>Kolom disisipkan</td><td>nomor kolom salah</td><td>tetap benar</td></tr></table>
<p>Penyebab lookup gagal yang paling sering: spasi tersembunyi (pakai TRIM) dan angka yang tersimpan sebagai teks.</p>`);
  dalami("if", `<h4>IF bertingkat tanpa pusing</h4><p>Tulis dulu sebagai tabel aturan, baru jadikan rumus:</p><table class="mini-pivot"><tr><th>Syarat</th><th>Hasil</th></tr><tr><td>≥ 90</td><td>A</td></tr><tr><td>≥ 80</td><td>B</td></tr><tr><td>selain itu</td><td>C</td></tr></table>
<pre><code>=IFS(H2&gt;=90, "A", H2&gt;=80, "B", TRUE, "C")</code></pre><p>Urutkan dari syarat paling ketat. Untuk banyak tingkat (misalnya tabel komisi), tabel aturan + XLOOKUP dengan pencocokan perkiraan lebih mudah dirawat daripada IF panjang.</p>`);
  dalami("pivot", `<h4>Langkah Pivot yang rapi</h4><ol><li>Pastikan data berbentuk tabel: satu baris judul, tanpa baris kosong, satu jenis data per kolom.</li><li>Ctrl+T untuk jadikan Table, lalu Insert → PivotTable.</li><li>Seret kategori ke <b>Rows</b>, angka ke <b>Values</b>, pembanding ke <b>Columns</b>, penyaring ke <b>Filters</b> atau slicer.</li><li>Cek ringkasannya: Sum, bukan Count.</li><li>Refresh setiap data berubah.</li></ol><p>Pivot menjawab pertanyaan "berapa per …". Contoh dari sheet: Jakarta 25,2 jt (≈ 55,7%), Bandung 10,5 jt, Surabaya 9,55 jt.</p>`);
  dalami("cf", `<h4>Memilih jenis conditional formatting</h4><table class="mini-pivot"><tr><th>Ingin menunjukkan</th><th>Pakai</th></tr><tr><td>nilai di atas/bawah batas</td><td>Highlight Cells Rules</td></tr><tr><td>terbesar/terkecil</td><td>Top/Bottom</td></tr><tr><td>perbandingan besar</td><td>Data Bars</td></tr><tr><td>gradasi rendah-tinggi</td><td>Color Scales</td></tr><tr><td>status naik/turun</td><td>Icon Sets</td></tr><tr><td>aturan rumit (seluruh baris)</td><td>Use a formula</td></tr></table><p>Prinsip: warna sedikit dan bermakna. Satu warna sorotan lebih jelas daripada pelangi.</p>`);
  dalami("teks", `<h4>Kotak alat membersihkan teks</h4><table class="mini-pivot"><tr><th>Masalah</th><th>Fungsi</th></tr><tr><td>spasi berlebih</td><td>TRIM</td></tr><tr><td>huruf tidak seragam</td><td>PROPER / UPPER / LOWER</td></tr><tr><td>ambil sebagian</td><td>LEFT / RIGHT / MID + FIND</td></tr><tr><td>ganti karakter</td><td>SUBSTITUTE</td></tr><tr><td>gabung</td><td>&amp;, TEXTJOIN</td></tr><tr><td>teks angka</td><td>VALUE</td></tr><tr><td>tanpa rumus</td><td>Text to Columns, Flash Fill (Ctrl+E)</td></tr></table><p>Untuk pembersihan berulang setiap bulan, pakai Power Query agar langkahnya tersimpan dan tinggal di-refresh.</p>`);
  dalami("tanggal", `<h4>Tanggal = angka hari</h4><p>Excel menyimpan tanggal sebagai nomor urut hari, jadi tanggal bisa ditambah dan dikurangi. Format hanya mengubah tampilannya.</p><table class="mini-pivot"><tr><th>Kebutuhan</th><th>Rumus</th></tr><tr><td>tambah hari</td><td>=A2+30</td></tr><tr><td>tambah bulan</td><td>=EDATE(A2, 1)</td></tr><tr><td>akhir bulan</td><td>=EOMONTH(A2, 0)</td></tr><tr><td>hari kerja</td><td>=NETWORKDAYS(awal, akhir, libur)</td></tr><tr><td>jatuh tempo hari kerja</td><td>=WORKDAY(A2, 14, libur)</td></tr><tr><td>umur/masa kerja</td><td>=DATEDIF(A2, TODAY(), "Y")</td></tr><tr><td>label bulan</td><td>=TEXT(A2, "yyyy-mm")</td></tr></table>`);
  dalami("lookup2", `<h4>Dynamic array: satu rumus, banyak hasil</h4><pre><code>=UNIQUE(B2:B11)                 → daftar wilayah tanpa kembar
=FILTER(A2:F11, F2:F11&gt;=7000000) → baris transaksi besar
=SORT(F2:F11, , -1)             → Total dari besar
=SORTBY(A2:A11, F2:F11, -1)     → nama sales menurut Total
=TAKE(SORT(F2:F11,,-1), 3)      → 3 Total terbesar</code></pre><p>Hasil "tumpah" ke sel di sekitarnya. Rujuk seluruh hasil dengan tanda #, misalnya <code>H2#</code>. #SPILL! berarti area tumpahan terhalang isi lain.</p>`);
  dalami("error", `<h4>Kamus error Excel</h4><table class="mini-pivot"><tr><th>Error</th><th>Artinya</th><th>Biasanya karena</th></tr><tr><td>#DIV/0!</td><td>bagi nol</td><td>pembagi kosong/0</td></tr><tr><td>#N/A</td><td>tidak ditemukan</td><td>lookup gagal, spasi, teks vs angka</td></tr><tr><td>#NAME?</td><td>nama tidak dikenal</td><td>salah ketik fungsi, teks tanpa kutip</td></tr><tr><td>#VALUE!</td><td>tipe salah</td><td>teks dalam hitungan</td></tr><tr><td>#REF!</td><td>rujukan hilang</td><td>kolom/baris dihapus</td></tr><tr><td>#SPILL!</td><td>tumpahan terhalang</td><td>sel tujuan tidak kosong</td></tr><tr><td>#####</td><td>bukan error</td><td>kolom terlalu sempit</td></tr></table><p>Tangani dengan IFERROR/IFNA <b>setelah</b> memahami penyebabnya.</p>`);
})();
