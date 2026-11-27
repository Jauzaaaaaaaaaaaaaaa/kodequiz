// ============ SQL — tambahan 2x lipat: select, groupby, join, subquery, case, nullfungsi, cte, window ============
// Dimuat SETELAH soal-latihan-ekstra.js. vr:"sql" → query dijalankan ke data contoh (pelanggan, produk, pesanan) oleh
// alat/cek-soal.js dan hasilnya harus sama dengan vx. Opsi diacak saat tampil, kunci di indeks 0.
(function () {
  const Q = (k, lv, tb, q, kode, vx, o, e, w) => ({ k, t: "mc", lv, tb, q, kode, o, a: 0, vr: "sql", vx, e, ...(w ? { w: [null, ...w] } : {}) });
  const M = (k, lv, q, o, e, w) => ({ k, t: "mc", lv, q, o, a: 0, e, ...(w ? { w: [null, ...w] } : {}) });
  const I = (k, lv, q, a, e) => ({ k, t: "is", lv, q, a, e });
  const dalami = (k, html) => { const b = MATERI_SQL.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };
  const PS = ["pesanan", "pelanggan", "produk"];

  SOAL_SQL.push(
  // ---- select (+8) ----
  Q("select", 1, "pelanggan", "Nama pelanggan yang tinggal di Bandung:", "SELECT nama FROM pelanggan WHERE kota = 'Bandung';", [["Tono"], ["Lia"]],
    ["Tono, Lia", "Rina, Sari", "Tono", "Budi"], "WHERE menyaring baris. Teks ditulis dalam kutip tunggal.",
    ["Mereka di Jakarta.", "Lia juga di Bandung.", "Budi di Surabaya."]),
  Q("select", 1, "produk", "Dua produk termahal:", "SELECT nama, harga FROM produk\nORDER BY harga DESC\nLIMIT 2;", [["Laptop", 7000000], ["Monitor", 2000000]],
    ["Laptop, Monitor", "Mouse, Keyboard", "Laptop, Keyboard", "Monitor, Laptop"], "ORDER BY harga DESC mengurutkan dari besar; LIMIT 2 mengambil dua teratas.",
    ["Itu dua termurah.", "Keyboard hanya 300 ribu.", "Urutannya dari besar: Laptop dulu."]),
  Q("select", 1, "produk", "Produk dengan harga 150.000 sampai 300.000:", "SELECT nama FROM produk\nWHERE harga BETWEEN 150000 AND 300000;", [["Mouse"], ["Keyboard"]],
    ["Mouse, Keyboard", "Keyboard saja", "Mouse saja", "Semua produk"], "BETWEEN a AND b TERMASUK batasnya (150.000 dan 300.000 ikut).",
    ["Batas bawah ikut, jadi Mouse masuk.", "Batas atas ikut, jadi Keyboard masuk.", "Laptop dan Monitor di luar rentang."]),
  Q("select", 1, "pelanggan", "Daftar kota tanpa kembar, urut abjad:", "SELECT DISTINCT kota FROM pelanggan\nORDER BY kota;", [["Bandung"], ["Jakarta"], ["Surabaya"]],
    ["Bandung, Jakarta, Surabaya", "Jakarta, Bandung, Jakarta, Surabaya, Bandung", "Jakarta, Bandung, Surabaya", "5 kota"], "DISTINCT membuang baris kembar. ORDER BY kota mengurutkan abjad.",
    ["DISTINCT membuang kembar.", "Sudah diurutkan abjad.", "Hanya 3 kota berbeda."]),
  Q("select", 2, "pelanggan", "Pelanggan yang namanya mengandung huruf i:", "SELECT nama FROM pelanggan WHERE nama LIKE '%i%';", [["Rina"], ["Sari"], ["Budi"], ["Lia"]],
    ["Rina, Sari, Budi, Lia", "Rina, Sari", "Lia", "Semua pelanggan"], "% = boleh ada teks apa pun. '%i%' = ada huruf i di mana saja.",
    ["Budi dan Lia juga mengandung i.", "Rina, Sari, Budi juga mengandung i.", "Tono tidak mengandung i."]),
  Q("select", 2, "pesanan", "Pesanan dengan qty minimal 2 DAN sebelum 8 Januari:", "SELECT id FROM pesanan\nWHERE qty >= 2 AND tanggal < '2026-01-08';", [[102], [103]],
    ["102, 103", "102, 103, 105, 106", "103", "101, 102, 103"], "AND butuh kedua syarat benar. Tanggal format YYYY-MM-DD bisa dibandingkan seperti teks.",
    ["105 dan 106 tanggalnya 8 Januari ke atas.", "102 juga memenuhi.", "101 qty-nya 1."]),
  Q("select", 2, "produk", "Hasil query dengan OR ini:", "SELECT nama FROM produk\nWHERE kategori IN ('Aksesoris') OR harga > 5000000;", [["Laptop"], ["Mouse"], ["Keyboard"]],
    ["Laptop, Mouse, Keyboard", "Mouse, Keyboard", "Laptop", "Tidak ada"], "OR cukup salah satu syarat. Aksesoris (Mouse, Keyboard) atau mahal (Laptop).",
    ["Laptop lolos lewat syarat harga.", "Aksesoris juga lolos.", "Ada yang lolos."]),
  M("select", 1, "Urutan penulisan klausa SELECT yang benar:", ["SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY … LIMIT", "FROM … SELECT … WHERE … LIMIT … ORDER BY", "SELECT … WHERE … FROM … ORDER BY", "WHERE … SELECT … FROM"],
    "Hafalkan urutan menulis ini. Urutan DIKERJAKAN database berbeda: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.",
    ["SELECT ditulis pertama.", "FROM sebelum WHERE.", "SELECT ditulis pertama."]),

  // ---- groupby (+10) ----
  Q("groupby", 1, "pesanan", "Berapa pesanan milik pelanggan id 1?", "SELECT COUNT(*) FROM pesanan WHERE pelanggan_id = 1;", [[3]],
    ["3", "1", "8", "5"], "COUNT(*) menghitung baris yang lolos WHERE: pesanan 101, 102, 107.",
    ["Ada tiga pesanan.", "8 adalah semua pesanan.", "5 adalah qty terbesar."]),
  Q("groupby", 1, "pesanan", "Total semua qty:", "SELECT SUM(qty) FROM pesanan;", [[16]],
    ["16", "8", "5", "2"], "SUM menjumlahkan: 1+3+2+1+2+5+1+1 = 16.",
    ["8 adalah banyak baris.", "5 adalah qty terbesar.", "2 adalah rata-rata."]),
  Q("groupby", 2, "pesanan", "Hasil baris untuk pelanggan_id 1:", "SELECT pelanggan_id, COUNT(*)\nFROM pesanan\nGROUP BY pelanggan_id\nORDER BY pelanggan_id;", [[1, 3], [2, 2], [3, 2], [4, 1]],
    ["1 | 3", "1 | 1", "1 | 8", "1 | 5"], "GROUP BY membuat satu baris per pelanggan, lalu COUNT menghitung baris di setiap kelompok.",
    ["COUNT menghitung pesanan, bukan id.", "8 adalah total semua.", "5 adalah qty, bukan jumlah pesanan."]),
  Q("groupby", 2, "pelanggan", "Kota yang punya minimal 2 pelanggan:", "SELECT kota, COUNT(*) AS n FROM pelanggan\nGROUP BY kota\nHAVING n >= 2\nORDER BY kota;", [["Bandung", 2], ["Jakarta", 2]],
    ["Bandung, Jakarta", "Jakarta saja", "Bandung, Jakarta, Surabaya", "Surabaya"], "HAVING menyaring KELOMPOK setelah dihitung (WHERE menyaring baris sebelum dikelompokkan).",
    ["Bandung juga punya 2.", "Surabaya hanya 1.", "Surabaya hanya 1."]),
  Q("groupby", 2, "produk", "Rata-rata harga kategori Komputer:", "SELECT kategori, AVG(harga) FROM produk\nGROUP BY kategori ORDER BY kategori;", [["Aksesoris", 225000], ["Komputer", 4500000]],
    ["4.500.000", "9.000.000", "7.000.000", "225.000"], "Komputer: (7.000.000 + 2.000.000) / 2 = 4.500.000.",
    ["Itu jumlah, bukan rata-rata.", "Itu harga Laptop saja.", "Itu rata-rata Aksesoris."]),
  Q("groupby", 2, "pesanan", "Produk (id) yang paling banyak terjual (total qty):", "SELECT produk_id, SUM(qty) AS total\nFROM pesanan\nGROUP BY produk_id\nORDER BY total DESC\nLIMIT 1;", [[2, 8]],
    ["produk 2 dengan total 8", "produk 1 dengan total 2", "produk 2 dengan total 5", "produk 3 dengan total 3"], "Mouse (id 2): 3 + 5 = 8, terbanyak.",
    ["Laptop hanya 2.", "Jumlahkan semua pesanan Mouse: 3 + 5.", "Monitor hanya 3."]),
  Q("groupby", 2, "pesanan", "Berapa pelanggan berbeda yang pernah memesan?", "SELECT COUNT(DISTINCT pelanggan_id) FROM pesanan;", [[4]],
    ["4", "8", "5", "3"], "COUNT(DISTINCT kolom) menghitung nilai unik. Lia (id 5) belum pernah memesan.",
    ["8 adalah banyak pesanan.", "Lia belum memesan.", "Hitung ulang id unik."]),
  Q("groupby", 2, "produk", "Selisih harga termahal dan termurah:", "SELECT MAX(harga) - MIN(harga) FROM produk;", [[6850000]],
    ["6.850.000", "7.000.000", "6.700.000", "150.000"], "7.000.000 - 150.000 = 6.850.000.",
    ["Itu harga maksimum saja.", "Hitung ulang dengan Mouse 150.000.", "Itu harga minimum."]),
  M("groupby", 2, "Kenapa query SELECT kota, nama, COUNT(*) FROM pelanggan GROUP BY kota bermasalah?", ["nama tidak dikelompokkan dan tidak diagregasi, jadi tidak jelas nama mana yang ditampilkan", "COUNT tidak boleh dipakai", "GROUP BY harus di depan", "kota tidak boleh dikelompokkan"],
    "Aturan: setiap kolom di SELECT harus ada di GROUP BY atau dibungkus fungsi agregat. SQLite membiarkannya (memilih sembarang), MySQL ketat dan PostgreSQL menolak.",
    ["COUNT boleh.", "Urutan penulisannya sudah benar.", "kota boleh dikelompokkan."]),
  M("groupby", 2, "Beda WHERE dan HAVING:", ["WHERE menyaring baris sebelum dikelompokkan; HAVING menyaring hasil kelompok (boleh memakai COUNT/SUM)", "Sama saja", "HAVING dipakai tanpa GROUP BY saja", "WHERE hanya untuk angka"],
    "Contoh: WHERE kota = 'Jakarta' (per baris) vs HAVING COUNT(*) >= 2 (per kelompok).",
    ["Waktu kerjanya berbeda.", "HAVING untuk kelompok.", "WHERE untuk semua tipe."]),
  I("groupby", 1, "Fungsi untuk menghitung banyak baris: ____(*)", ["count"], "COUNT(*) menghitung semua baris."),

  // ---- join (+10) ----
  Q("join", 1, PS, "Siapa pembeli dan produk apa di pesanan 106?", "SELECT p.nama, pr.nama\nFROM pesanan o\nJOIN pelanggan p ON p.id = o.pelanggan_id\nJOIN produk pr ON pr.id = o.produk_id\nWHERE o.id = 106;", [["Budi", "Mouse"]],
    ["Budi membeli Mouse", "Budi membeli Laptop", "Rina membeli Mouse", "Tono membeli Keyboard"], "JOIN menyambung tabel lewat kolom kunci: pelanggan_id → pelanggan.id, produk_id → produk.id. Pesanan 106: pelanggan 4 (Budi), produk 2 (Mouse).",
    ["produk_id 2 adalah Mouse.", "pelanggan_id 4 adalah Budi.", "Cek lagi pesanan 106."]),
  Q("join", 2, PS, "Pelanggan dengan belanja terbesar (qty × harga):", "SELECT p.nama, SUM(o.qty * pr.harga) AS belanja\nFROM pesanan o\nJOIN pelanggan p ON p.id = o.pelanggan_id\nJOIN produk pr ON pr.id = o.produk_id\nGROUP BY p.nama\nORDER BY belanja DESC;", [["Rina", 9450000], ["Sari", 7600000], ["Tono", 4300000], ["Budi", 750000]],
    ["Rina, 9.450.000", "Sari, 7.600.000", "Budi, 750.000", "Rina, 7.000.000"], "Rina: Laptop 7.000.000 + 3 Mouse 450.000 + Monitor 2.000.000 = 9.450.000.",
    ["Sari kedua.", "Budi paling kecil.", "Rina juga membeli Mouse dan Monitor."]),
  Q("join", 2, ["pelanggan", "pesanan"], "Pelanggan yang BELUM pernah memesan:", "SELECT p.nama\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nWHERE o.id IS NULL;", [["Lia"]],
    ["Lia", "Budi", "Tidak ada", "Lia dan Budi"], "LEFT JOIN mempertahankan semua pelanggan; yang tidak punya pesanan mendapat NULL di kolom pesanan. Pola 'cari yang tidak punya pasangan'.",
    ["Budi punya pesanan 106.", "Lia belum memesan.", "Budi punya pesanan."]),
  Q("join", 2, ["pelanggan", "pesanan"], "Banyak baris hasil LEFT JOIN ini:", "SELECT COUNT(*)\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id;", [[9]],
    ["9", "8", "5", "13"], "8 baris pesanan (masing-masing punya pelanggan) + 1 baris Lia tanpa pesanan = 9.",
    ["LEFT JOIN menambah Lia.", "Pelanggan dengan banyak pesanan muncul berkali-kali.", "Bukan 5 + 8."]),
  Q("join", 2, ["pelanggan", "pesanan"], "Banyak baris hasil INNER JOIN ini:", "SELECT COUNT(*)\nFROM pelanggan p\nJOIN pesanan o ON o.pelanggan_id = p.id;", [[8]],
    ["8", "9", "5", "4"], "INNER JOIN hanya menyimpan pasangan yang cocok, jadi Lia hilang: 8 baris.",
    ["Lia tidak ikut di INNER JOIN.", "Pelanggan dengan banyak pesanan muncul berkali-kali.", "4 adalah pelanggan unik."]),
  Q("join", 2, ["pesanan", "produk"], "Total qty kategori Aksesoris:", "SELECT pr.kategori, SUM(o.qty)\nFROM pesanan o\nJOIN produk pr ON pr.id = o.produk_id\nGROUP BY pr.kategori ORDER BY pr.kategori;", [["Aksesoris", 11], ["Komputer", 5]],
    ["11", "5", "16", "8"], "Aksesoris = Mouse (3 + 5) + Keyboard (2 + 1) = 11.",
    ["5 milik Komputer.", "16 adalah semua.", "Keyboard juga Aksesoris."]),
  Q("join", 3, ["pelanggan", "pesanan"], "Jumlah pesanan untuk kota Bandung:", "SELECT p.kota, COUNT(o.id)\nFROM pelanggan p\nLEFT JOIN pesanan o ON o.pelanggan_id = p.id\nGROUP BY p.kota ORDER BY p.kota;", [["Bandung", 2], ["Jakarta", 5], ["Surabaya", 1]],
    ["2", "3", "5", "0"], "COUNT(o.id) tidak menghitung NULL, jadi Lia (tanpa pesanan) tidak menambah. Tono punya 2 pesanan.",
    ["COUNT(kolom) melewati NULL.", "5 milik Jakarta.", "Tono punya pesanan."]),
  Q("join", 2, ["pelanggan", "produk"], "Banyak baris CROSS JOIN:", "SELECT COUNT(*) FROM pelanggan CROSS JOIN produk;", [[20]],
    ["20", "9", "4", "5"], "CROSS JOIN memasangkan SEMUA baris kiri dengan semua baris kanan: 5 × 4 = 20.",
    ["Itu 5 + 4.", "Itu banyak produk.", "Itu banyak pelanggan."]),
  M("join", 1, "Beda INNER JOIN dan LEFT JOIN:", ["INNER hanya baris yang punya pasangan; LEFT menyimpan semua baris tabel kiri walau tanpa pasangan (diisi NULL)", "Sama saja", "LEFT JOIN membuang tabel kiri", "INNER JOIN selalu lebih banyak barisnya"],
    "Pakai LEFT JOIN saat 'semua pelanggan, termasuk yang belum belanja' penting untuk laporan.",
    ["Hasilnya bisa berbeda.", "LEFT justru menyimpan tabel kiri.", "INNER biasanya lebih sedikit."]),
  M("join", 2, "Kenapa memakai alias seperti FROM pesanan o JOIN pelanggan p?", ["Supaya query lebih pendek dan jelas kolom milik tabel mana (o.id vs p.id)", "Wajib di SQL", "Supaya lebih cepat", "Untuk mengganti nama tabel permanen"],
    "Saat dua tabel punya kolom bernama sama (id, nama), alias mencegah 'ambiguous column'.",
    ["Tidak wajib, tapi sangat dianjurkan.", "Tidak mengubah kecepatan.", "Hanya berlaku di query itu."]),

  // ---- subquery (+9) ----
  Q("subquery", 2, "produk", "Produk yang harganya di atas rata-rata:", "SELECT nama FROM produk\nWHERE harga > (SELECT AVG(harga) FROM produk);", [["Laptop"]],
    ["Laptop", "Laptop, Monitor", "Monitor", "Tidak ada"], "Subquery dihitung dulu: rata-rata = 2.362.500. Hanya Laptop di atasnya.",
    ["Monitor 2.000.000 masih di bawah rata-rata.", "Monitor di bawah rata-rata.", "Laptop di atas rata-rata."]),
  Q("subquery", 2, ["pelanggan", "pesanan"], "Pelanggan yang pernah membeli Laptop (produk_id 1):", "SELECT nama FROM pelanggan\nWHERE id IN (SELECT pelanggan_id FROM pesanan WHERE produk_id = 1)\nORDER BY nama;", [["Rina"], ["Sari"]],
    ["Rina, Sari", "Rina", "Tono", "Sari, Budi"], "Subquery memberi daftar pelanggan_id (1, 3), lalu IN mencocokkannya.",
    ["Sari juga membeli Laptop (pesanan 104).", "Tono membeli Monitor dan Keyboard.", "Budi membeli Mouse."]),
  Q("subquery", 2, ["pelanggan", "pesanan"], "Hasil NOT IN ini:", "SELECT nama FROM pelanggan\nWHERE id NOT IN (SELECT pelanggan_id FROM pesanan);", [["Lia"]],
    ["Lia", "Budi", "Tidak ada", "Semua pelanggan"], "Sama hasilnya dengan pola LEFT JOIN ... IS NULL. Hati-hati: NOT IN gagal (kosong) bila subquery berisi NULL.",
    ["Budi punya pesanan.", "Lia tidak ada di pesanan.", "Hanya Lia."]),
  Q("subquery", 3, ["produk", "pesanan"], "Produk yang belum pernah dipesan:", "SELECT nama FROM produk pr\nWHERE NOT EXISTS (\n  SELECT 1 FROM pesanan o WHERE o.produk_id = pr.id\n);", [],
    ["Tidak ada (hasil kosong)", "Keyboard", "Monitor", "Semua produk"], "EXISTS bertanya 'adakah minimal satu baris?'. Semua produk pernah dipesan, jadi hasilnya kosong.",
    ["Keyboard dipesan di 105 dan 108.", "Monitor dipesan di 103 dan 107.", "Semua sudah dipesan."]),
  Q("subquery", 3, ["pelanggan", "pesanan"], "Pelanggan dengan pesanan terbanyak (subquery di SELECT):", "SELECT nama,\n  (SELECT COUNT(*) FROM pesanan o WHERE o.pelanggan_id = p.id) AS n\nFROM pelanggan p\nORDER BY n DESC, nama\nLIMIT 1;", [["Rina", 3]],
    ["Rina, 3", "Tono, 2", "Sari, 2", "Lia, 0"], "Subquery berkorelasi: dihitung ulang untuk setiap pelanggan (p.id dari query luar).",
    ["Rina punya 3.", "Rina lebih banyak.", "Diurutkan dari terbanyak."]),
  Q("subquery", 3, "pesanan", "Rata-rata banyak pesanan per pelanggan yang pernah memesan:", "SELECT AVG(n) FROM (\n  SELECT pelanggan_id, COUNT(*) AS n\n  FROM pesanan GROUP BY pelanggan_id\n);", [[2]],
    ["2", "1.6", "8", "4"], "Subquery di FROM membuat tabel sementara (3, 2, 2, 1). Rata-ratanya 8 / 4 = 2.",
    ["1.6 bila Lia (0) ikut dihitung.", "8 adalah total.", "4 adalah banyak pelanggan."]),
  Q("subquery", 2, "produk", "Produk Aksesoris termahal:", "SELECT nama FROM produk\nWHERE harga = (SELECT MAX(harga) FROM produk WHERE kategori = 'Aksesoris');", [["Keyboard"]],
    ["Keyboard", "Mouse", "Laptop", "Monitor"], "Subquery mencari harga maksimum di Aksesoris (300.000), lalu query luar mencari produk dengan harga itu.",
    ["Mouse lebih murah.", "Laptop bukan Aksesoris.", "Monitor bukan Aksesoris."]),
  M("subquery", 2, "Subquery yang dipakai dengan operator = harus mengembalikan…", ["Tepat satu nilai (satu baris, satu kolom)", "Banyak baris", "Tabel lengkap", "Teks saja"],
    "Untuk banyak nilai, pakai IN atau EXISTS.",
    ["Banyak baris butuh IN.", "Tabel lengkap dipakai di FROM.", "Boleh angka."]),
  I("subquery", 2, "Kata kunci untuk mengecek 'adakah minimal satu baris' di subquery: WHERE ____ (SELECT 1 FROM …)", ["exists"], "EXISTS berhenti begitu menemukan satu baris."),

  // ---- case (+11) ----
  Q("case", 1, "pesanan", "Label untuk pesanan 103 (qty 2):", "SELECT id,\n  CASE WHEN qty >= 3 THEN 'Grosir'\n       WHEN qty = 2 THEN 'Sedang'\n       ELSE 'Satuan' END\nFROM pesanan ORDER BY id;", [[101, "Satuan"], [102, "Grosir"], [103, "Sedang"], [104, "Satuan"], [105, "Sedang"], [106, "Grosir"], [107, "Satuan"], [108, "Satuan"]],
    ["Sedang", "Grosir", "Satuan", "NULL"], "qty 2: syarat pertama (≥ 3) salah, syarat kedua (= 2) benar → Sedang.",
    ["2 belum ≥ 3.", "Ada syarat yang cocok sebelum ELSE.", "Ada syarat yang cocok."]),
  Q("case", 1, "pelanggan", "Hasil hitungan bersyarat ini:", "SELECT SUM(CASE WHEN kota = 'Jakarta' THEN 1 ELSE 0 END)\nFROM pelanggan;", [[2]],
    ["2", "5", "1", "3"], "Pola COUNTIF di SQL: setiap baris yang cocok bernilai 1, lalu dijumlah. Rina dan Sari.",
    ["Hanya yang Jakarta.", "Sari juga Jakarta.", "Hitung ulang."]),
  Q("case", 1, "produk", "Kode kategori untuk Monitor:", "SELECT nama, CASE kategori WHEN 'Komputer' THEN 'K' ELSE 'A' END\nFROM produk ORDER BY id;", [["Laptop", "K"], ["Mouse", "A"], ["Monitor", "K"], ["Keyboard", "A"]],
    ["K", "A", "Komputer", "NULL"], "Bentuk CASE pendek: CASE kolom WHEN nilai THEN ... Cocok untuk mencocokkan nilai pasti.",
    ["Monitor kategori Komputer.", "CASE mengganti dengan kode.", "Ada yang cocok."]),
  Q("case", 2, "pesanan", "Pivot sederhana qty per kategori:", "SELECT\n  SUM(CASE WHEN produk_id IN (1, 3) THEN qty ELSE 0 END) AS komputer,\n  SUM(CASE WHEN produk_id IN (2, 4) THEN qty ELSE 0 END) AS aksesoris\nFROM pesanan;", [[5, 11]],
    ["komputer 5, aksesoris 11", "komputer 11, aksesoris 5", "komputer 2, aksesoris 2", "komputer 16, aksesoris 16"], "SUM(CASE ...) mengubah baris menjadi kolom, seperti Pivot Table.",
    ["Terbalik.", "Yang dijumlah qty.", "Setiap kolom memakai syarat berbeda."]),
  Q("case", 2, "produk", "Hasil untuk Mouse (harga 150.000):", "SELECT CASE WHEN harga > 1000000 THEN 'Mahal' END\nFROM produk WHERE id = 2;", [[null]],
    ["NULL", "Murah", "Mahal", "Error"], "Tanpa ELSE, baris yang tidak cocok dengan syarat mana pun mendapat NULL. Biasakan menulis ELSE.",
    ["Tidak ada label Murah di query.", "150.000 tidak lebih dari 1 juta.", "CASE tanpa ELSE itu sah."]),
  Q("case", 2, "produk", "Urutan produk dari query ini:", "SELECT nama FROM produk\nORDER BY CASE WHEN kategori = 'Aksesoris' THEN 0 ELSE 1 END, harga;", [["Mouse"], ["Keyboard"], ["Monitor"], ["Laptop"]],
    ["Mouse, Keyboard, Monitor, Laptop", "Laptop, Monitor, Keyboard, Mouse", "Mouse, Monitor, Keyboard, Laptop", "Keyboard, Mouse, Laptop, Monitor"], "CASE di ORDER BY membuat urutan khusus: Aksesoris (0) dulu, lalu urut harga di setiap kelompok.",
    ["Aksesoris didahulukan.", "Dikelompokkan dulu baru harga.", "Di tiap kelompok urut harga naik."]),
  M("case", 1, "CASE WHEN di SQL paling mirip dengan rumus Excel…", ["IF / IFS", "VLOOKUP", "SUM", "CONCAT"],
    "CASE WHEN syarat THEN nilai ... ELSE ... END = IF bertingkat.",
    ["VLOOKUP untuk mencari.", "SUM untuk menjumlah.", "CONCAT untuk menyambung teks."]),
  M("case", 2, "Kenapa urutan WHEN penting?", ["CASE berhenti di syarat benar pertama, jadi syarat paling ketat ditaruh di atas", "Urutan tidak berpengaruh", "WHEN terakhir selalu menang", "Database mengurutkannya sendiri"],
    "Contoh: tulis WHEN nilai >= 90 sebelum WHEN nilai >= 80.",
    ["Urutan menentukan hasil.", "Yang pertama benar yang menang.", "Database tidak mengurutkan WHEN."]),
  M("case", 2, "Cara membuat persentase pesanan 'Grosir' (qty ≥ 3) dari semua pesanan:", ["SELECT 100.0 * SUM(CASE WHEN qty >= 3 THEN 1 ELSE 0 END) / COUNT(*) FROM pesanan", "SELECT COUNT(qty >= 3) FROM pesanan", "SELECT CASE qty >= 3 FROM pesanan", "SELECT PERCENT(qty) FROM pesanan"],
    "100.0 (desimal) mencegah pembagian bulat. Hasilnya 25.0 (2 dari 8).",
    ["COUNT menghitung semua yang tidak NULL.", "Bukan sintaks CASE yang lengkap.", "Tidak ada fungsi PERCENT."]),
  M("case", 3, "Segmentasi pelanggan berdasarkan total belanja (≥ 5 juta = VIP, ≥ 1 juta = Reguler, selain itu = Baru) paling tepat ditulis…", ["CASE di atas hasil SUM per pelanggan (di CTE/subquery atau langsung setelah GROUP BY)", "CASE di WHERE", "Tiga query terpisah", "Tidak bisa dengan SQL"],
    "Hitung total dulu (GROUP BY), lalu beri label dengan CASE. Pola ini dipakai di dashboard RFM dan CRM.",
    ["WHERE menyaring, bukan memberi label.", "Satu query cukup.", "SQL bisa."]),
  I("case", 1, "Kata kunci penutup CASE: CASE WHEN … THEN … ELSE … ____", ["end"], "Setiap CASE diakhiri END."),

  // ---- nullfungsi (+13) ----
  Q("nullfungsi", 1, "pelanggan", "Hasil COALESCE ini:", "SELECT COALESCE(NULL, NULL, 'cadangan');", [["cadangan"]],
    ["cadangan", "NULL", "Error", "0"], "COALESCE mengambil nilai PERTAMA yang tidak NULL. Mirip IFERROR/nilai cadangan.",
    ["Ada nilai yang bukan NULL.", "Fungsi ini sah.", "Tidak ada 0."]),
  Q("nullfungsi", 2, "pelanggan", "Hasil perbandingan NULL:", "SELECT NULL = NULL, NULL IS NULL;", [[null, 1]],
    ["NULL dan 1 (benar)", "1 dan 1", "0 dan 1", "1 dan 0"], "NULL artinya 'tidak diketahui', jadi NULL = NULL juga tidak diketahui (NULL). Selalu pakai IS NULL.",
    ["= dengan NULL tidak memberi benar.", "Bukan salah, tapi tidak diketahui.", "IS NULL memberi benar."]),
  Q("nullfungsi", 2, "pelanggan", "Hasil COUNT pada kolom yang berisi NULL:", "SELECT COUNT(*), COUNT(x) FROM (\n  SELECT 1 AS x UNION ALL SELECT NULL UNION ALL SELECT 3\n);", [[3, 2]],
    ["3 dan 2", "3 dan 3", "2 dan 2", "2 dan 3"], "COUNT(*) menghitung semua baris; COUNT(kolom) melewati NULL.",
    ["COUNT(x) melewati NULL.", "COUNT(*) tetap menghitung baris NULL.", "Terbalik."]),
  Q("nullfungsi", 2, "pelanggan", "Rata-rata dengan NULL:", "SELECT AVG(x) FROM (\n  SELECT 10 AS x UNION ALL SELECT NULL UNION ALL SELECT 20\n);", [[15]],
    ["15", "10", "NULL", "30"], "AVG mengabaikan NULL: (10 + 20) / 2 = 15, bukan / 3. Kalau NULL seharusnya 0, pakai AVG(COALESCE(x, 0)).",
    ["Itu bila NULL dianggap 0.", "Ada nilai yang dirata-rata.", "Itu jumlahnya."]),
  Q("nullfungsi", 1, "pelanggan", "Hasil fungsi teks ini:", "SELECT UPPER(nama), LENGTH(nama) FROM pelanggan WHERE id = 3;", [["SARI", 4]],
    ["SARI, 4", "sari, 4", "Sari, 4", "SARI, 3"], "UPPER = huruf besar, LENGTH = banyak karakter.",
    ["UPPER membesarkan.", "UPPER membesarkan semua.", "S-a-r-i ada 4 huruf."]),
  Q("nullfungsi", 2, "pesanan", "Mengambil bulan dari tanggal teks:", "SELECT SUBSTR(tanggal, 6, 2) FROM pesanan WHERE id = 101;", [["01"]],
    ["01", "2026", "03", "-0"], "SUBSTR(teks, mulai, panjang) dengan posisi mulai dari 1. '2026-01-03': posisi 6-7 = '01'.",
    ["Itu posisi 1-4.", "Itu posisi 9-10 (tanggal).", "Posisi 5 adalah tanda minus."]),
  Q("nullfungsi", 1, "pelanggan", "Menyambung teks di SQLite:", "SELECT nama || ' (' || kota || ')' FROM pelanggan WHERE id = 4;", [["Budi (Surabaya)"]],
    ["Budi (Surabaya)", "BudiSurabaya", "Budi || Surabaya", "Error"], "|| menyambung teks (di MySQL pakai CONCAT).",
    ["Ada teks tambahan spasi dan kurung.", "|| tidak ikut dicetak.", "Sintaks ini sah di SQLite."]),
  Q("nullfungsi", 2, "pelanggan", "Hasil tiga hitungan ini:", "SELECT ROUND(2.567, 1), ROUND(7.0 / 2), 7 / 2;", [[2.6, 4, 3]],
    ["2.6, 4, 3", "2.5, 3.5, 3.5", "2.6, 3.5, 3", "2.57, 4, 3.5"], "ROUND(x, 1) satu desimal. 7.0 / 2 = 3.5 lalu dibulatkan 4. 7 / 2 = 3 karena dua bilangan bulat dibagi bulat di SQLite. Pakai 7.0 / 2 atau CAST untuk hasil desimal.",
    ["2.567 dibulatkan jadi 2.6.", "ROUND tanpa angka membulatkan ke bilangan bulat.", "Satu desimal saja."]),
  Q("nullfungsi", 2, "pelanggan", "Fungsi tanggal SQLite:", "SELECT strftime('%m', '2026-01-09'), date('2026-01-31', '+1 day');", [["01", "2026-02-01"]],
    ["01 dan 2026-02-01", "1 dan 2026-01-32", "09 dan 2026-02-01", "01 dan 2026-01-31"], "strftime('%m') mengambil bulan. date(…, '+1 day') menambah hari dan otomatis pindah bulan.",
    ["date tahu Januari hanya 31 hari.", "%m adalah bulan, bukan tanggal.", "Sudah ditambah satu hari."]),
  Q("nullfungsi", 2, "pesanan", "Selisih hari dua tanggal:", "SELECT julianday('2026-01-12') - julianday('2026-01-03');", [[9]],
    ["9", "12", "3", "-9"], "julianday mengubah tanggal jadi angka hari, sehingga bisa dikurangkan.",
    ["Itu tanggalnya saja.", "Itu tanggal awal.", "Yang lebih baru dikurangi yang lama: positif."]),
  Q("nullfungsi", 2, "pelanggan", "Hasil fungsi pembersih teks:", "SELECT REPLACE('Rp 1.250.000', '.', ''), TRIM('  kopi  ');", [["Rp 1250000", "kopi"]],
    ["Rp 1250000 dan kopi", "1250000 dan kopi", "Rp 1.250.000 dan kopi", "Rp 1250000 dan  kopi"], "REPLACE mengganti semua titik dengan kosong. TRIM membuang spasi tepi.",
    ["Teks Rp tidak dihapus.", "Titik sudah dihapus.", "TRIM membuang spasi tepi."]),
  Q("nullfungsi", 2, "pelanggan", "Hasil IFNULL dan NULLIF:", "SELECT IFNULL(NULL, 0) + 5, NULLIF(10, 10);", [[5, null]],
    ["5 dan NULL", "NULL dan 10", "5 dan 0", "5 dan 10"], "IFNULL(x, 0) mengganti NULL dengan 0. NULLIF(a, b) memberi NULL bila a = b (berguna mencegah bagi nol: x / NULLIF(y, 0)).",
    ["IFNULL mengganti NULL.", "NULLIF memberi NULL saat sama.", "NULLIF memberi NULL saat sama."]),
  I("nullfungsi", 1, "Operator yang benar untuk mengecek NULL: WHERE kota IS ____", ["null"], "Pakai IS NULL / IS NOT NULL, bukan = NULL."),

  // ---- cte (+11) ----
  Q("cte", 2, "pesanan", "Hasil CTE ini:", "WITH belanja AS (\n  SELECT pelanggan_id, SUM(qty) AS q\n  FROM pesanan GROUP BY pelanggan_id\n)\nSELECT MAX(q) FROM belanja;", [[5]],
    ["5", "16", "3", "8"], "WITH memberi nama pada hasil sementara (belanja), lalu dipakai seperti tabel. Rina 5, Tono 3, Sari 3, Budi 5 → maksimum 5.",
    ["16 adalah total semua.", "Hitung qty per pelanggan.", "8 adalah banyak pesanan."]),
  Q("cte", 2, "produk", "CTE bertingkat:", "WITH a AS (SELECT * FROM produk WHERE kategori = 'Komputer'),\n     b AS (SELECT SUM(harga) AS t FROM a)\nSELECT t FROM b;", [[9000000]],
    ["9.000.000", "7.000.000", "9.450.000", "4.500.000"], "CTE boleh berantai: b memakai a. Laptop + Monitor = 9.000.000.",
    ["Monitor ikut dijumlah.", "Itu belanja Rina.", "Itu rata-rata."]),
  Q("cte", 1, "pelanggan", "Hasil UNION ini:", "SELECT kota FROM pelanggan\nUNION\nSELECT 'Medan'\nORDER BY 1;", [["Bandung"], ["Jakarta"], ["Medan"], ["Surabaya"]],
    ["Bandung, Jakarta, Medan, Surabaya", "Jakarta, Bandung, Jakarta, Surabaya, Bandung, Medan", "Medan", "Bandung, Jakarta, Surabaya"], "UNION menggabung hasil dua query lalu membuang kembar.",
    ["UNION membuang kembar dan diurutkan.", "Kota pelanggan juga ikut.", "Medan ditambahkan."]),
  Q("cte", 2, "pelanggan", "UNION ALL vs UNION:", "SELECT COUNT(*) FROM (\n  SELECT kota FROM pelanggan\n  UNION ALL\n  SELECT kota FROM pelanggan\n);", [[10]],
    ["10", "3", "5", "6"], "UNION ALL TIDAK membuang kembar: 5 + 5 = 10. Lebih cepat bila kembar memang tidak masalah.",
    ["3 adalah hasil UNION (tanpa ALL).", "Dua query digabung.", "Hitung ulang."]),
  Q("cte", 2, "pelanggan", "Banyak baris hasil UNION (tanpa ALL):", "SELECT COUNT(*) FROM (\n  SELECT kota FROM pelanggan\n  UNION\n  SELECT kota FROM pelanggan\n);", [[3]],
    ["3", "10", "5", "6"], "UNION membuang semua kembar, sisa 3 kota unik.",
    ["10 adalah UNION ALL.", "Kembar ikut dibuang.", "Hitung kota unik."]),
  Q("cte", 3, ["pesanan", "produk"], "Berapa pelanggan yang belanjanya di atas rata-rata?", "WITH t AS (\n  SELECT o.pelanggan_id, SUM(o.qty * pr.harga) AS b\n  FROM pesanan o JOIN produk pr ON pr.id = o.produk_id\n  GROUP BY o.pelanggan_id\n)\nSELECT COUNT(*) FROM t WHERE b > (SELECT AVG(b) FROM t);", [[2]],
    ["2", "1", "3", "4"], "Rata-rata belanja = 22.100.000 / 4 = 5.525.000. Di atasnya: Rina dan Sari.",
    ["Sari juga di atas rata-rata.", "Tono di bawah rata-rata.", "Budi jelas di bawah."]),
  Q("cte", 3, "pelanggan", "CTE rekursif ini menghasilkan…", "WITH RECURSIVE n(x) AS (\n  SELECT 1\n  UNION ALL\n  SELECT x + 1 FROM n WHERE x < 5\n)\nSELECT SUM(x) FROM n;", [[15]],
    ["15", "5", "10", "Error: loop tanpa akhir"], "CTE rekursif membuat deret 1..5 (berhenti karena WHERE x < 5), lalu dijumlah = 15. Berguna untuk membuat daftar tanggal atau hierarki.",
    ["Itu angka terakhir.", "1+2+3+4+5 = 15.", "WHERE x < 5 menghentikannya."]),
  M("cte", 1, "Keuntungan utama CTE (WITH) dibanding subquery bersarang:", ["Query dipecah menjadi langkah bernama yang mudah dibaca dan bisa dipakai berkali-kali", "Selalu lebih cepat", "Wajib di semua query", "Menyimpan tabel permanen"],
    "CTE seperti menulis variabel: hitung dulu, beri nama, lalu pakai.",
    ["Kecepatan biasanya sama.", "Tidak wajib.", "CTE hanya hidup selama query itu."]),
  M("cte", 2, "Syarat agar dua SELECT bisa digabung dengan UNION:", ["Jumlah kolom sama dan tipe datanya cocok per posisi", "Nama tabel sama", "Jumlah baris sama", "Tidak ada syarat"],
    "Nama kolom hasil mengikuti SELECT pertama.",
    ["Tabel boleh berbeda.", "Jumlah baris bebas.", "Ada syarat kolom."]),
  M("cte", 2, "Di tes interview, cara paling rapi menjawab 'tampilkan pelanggan yang belanjanya di atas rata-rata semua pelanggan':", ["CTE total per pelanggan, lalu bandingkan dengan AVG dari CTE itu", "Menulis angka rata-rata secara manual", "Dua query lalu dihitung di Excel", "ORDER BY saja"],
    "Jangan menulis angka tetap (hardcode); data bisa berubah.",
    ["Angka bisa berubah.", "Satu query SQL cukup.", "ORDER BY tidak membandingkan dengan rata-rata."]),
  I("cte", 1, "Kata kunci untuk memulai CTE: ____ nama AS (SELECT …)", ["with"], "WITH memberi nama hasil sementara."),

  // ---- window (+12) ----
  Q("window", 2, "produk", "Peringkat Keyboard berdasarkan harga termahal:", "SELECT nama, harga, RANK() OVER (ORDER BY harga DESC)\nFROM produk ORDER BY harga DESC;", [["Laptop", 7000000, 1], ["Monitor", 2000000, 2], ["Keyboard", 300000, 3], ["Mouse", 150000, 4]],
    ["3", "4", "2", "1"], "Window function memberi peringkat TANPA menggabung baris (berbeda dengan GROUP BY).",
    ["Mouse yang ke-4.", "Monitor yang ke-2.", "Laptop yang ke-1."]),
  Q("window", 2, "pesanan", "Total berjalan qty pada pesanan 104:", "SELECT id, qty, SUM(qty) OVER (ORDER BY id)\nFROM pesanan ORDER BY id;", [[101, 1, 1], [102, 3, 4], [103, 2, 6], [104, 1, 7], [105, 2, 9], [106, 5, 14], [107, 1, 15], [108, 1, 16]],
    ["7", "1", "16", "6"], "SUM() OVER (ORDER BY ...) = total berjalan (running total): 1 + 3 + 2 + 1 = 7.",
    ["Itu qty pesanan 104 saja.", "16 adalah total akhir.", "6 sampai pesanan 103."]),
  Q("window", 2, "pesanan", "Nomor urut pesanan 107 untuk pelanggan 1:", "SELECT id, pelanggan_id,\n  ROW_NUMBER() OVER (PARTITION BY pelanggan_id ORDER BY tanggal)\nFROM pesanan ORDER BY id;", [[101, 1, 1], [102, 1, 2], [103, 2, 1], [104, 3, 1], [105, 3, 2], [106, 4, 1], [107, 1, 3], [108, 2, 2]],
    ["3", "7", "1", "2"], "PARTITION BY memulai hitungan ulang untuk setiap pelanggan. Pesanan 107 adalah pesanan ke-3 milik Rina.",
    ["Hitungan per pelanggan, bukan semua baris.", "Rina sudah punya 101 dan 102.", "Ini pesanan ketiga Rina."]),
  Q("window", 2, "pesanan", "Nilai LAG untuk pesanan 101:", "SELECT id, qty, LAG(qty) OVER (ORDER BY id)\nFROM pesanan ORDER BY id LIMIT 3;", [[101, 1, null], [102, 3, 1], [103, 2, 3]],
    ["NULL", "1", "3", "0"], "LAG mengambil nilai baris SEBELUMNYA. Baris pertama tidak punya sebelumnya, jadi NULL. Dipakai untuk menghitung pertumbuhan bulan ke bulan.",
    ["Itu qty-nya sendiri.", "Itu nilai untuk 103.", "Tanpa nilai bawaan, hasilnya NULL."]),
  Q("window", 3, "pesanan", "Nilai LEAD dengan bawaan 0 untuk pesanan terakhir:", "SELECT id, qty, LEAD(qty, 1, 0) OVER (ORDER BY id)\nFROM pesanan ORDER BY id DESC LIMIT 1;", [[108, 1, 0]],
    ["0", "NULL", "1", "5"], "LEAD mengambil baris SESUDAHNYA. Pesanan 108 tidak punya sesudahnya, jadi memakai nilai bawaan 0.",
    ["Bawaan 0 menggantikan NULL.", "Itu qty-nya sendiri.", "Tidak ada baris sesudahnya."]),
  Q("window", 2, "produk", "Total harga per kategori di samping setiap produk (untuk Mouse):", "SELECT nama, kategori, harga,\n  SUM(harga) OVER (PARTITION BY kategori)\nFROM produk ORDER BY id;", [["Laptop", "Komputer", 7000000, 9000000], ["Mouse", "Aksesoris", 150000, 450000], ["Monitor", "Komputer", 2000000, 9000000], ["Keyboard", "Aksesoris", 300000, 450000]],
    ["450.000", "150.000", "9.000.000", "9.450.000"], "Window dengan PARTITION BY menampilkan total kelompok di setiap baris tanpa menggabungnya. Berguna untuk 'persen dari total kategori'.",
    ["Itu harga Mouse sendiri.", "Itu total Komputer.", "Itu total semua."]),
  Q("window", 3, "pelanggan", "RANK, DENSE_RANK, ROW_NUMBER untuk nilai 80:", "SELECT x,\n  RANK() OVER (ORDER BY x DESC),\n  DENSE_RANK() OVER (ORDER BY x DESC),\n  ROW_NUMBER() OVER (ORDER BY x DESC)\nFROM (SELECT 90 AS x UNION ALL SELECT 90 UNION ALL SELECT 80)\nORDER BY x DESC;", [[90, 1, 1, 1], [90, 1, 1, 2], [80, 3, 2, 3]],
    ["RANK 3, DENSE_RANK 2, ROW_NUMBER 3", "2, 2, 3", "3, 3, 3", "2, 3, 3"], "Dua nilai 90 seri. RANK melompat (1, 1, 3), DENSE_RANK tidak melompat (1, 1, 2), ROW_NUMBER selalu unik (1, 2, 3).",
    ["RANK melompati angka 2.", "DENSE_RANK tidak melompat.", "Terbalik."]),
  Q("window", 3, "produk", "Produk termahal di setiap kategori:", "SELECT nama FROM (\n  SELECT nama, kategori,\n    ROW_NUMBER() OVER (PARTITION BY kategori ORDER BY harga DESC) AS r\n  FROM produk\n) WHERE r = 1 ORDER BY nama;", [["Keyboard"], ["Laptop"]],
    ["Keyboard, Laptop", "Laptop saja", "Mouse, Monitor", "Laptop, Monitor"], "Pola 'top-N per kelompok': beri nomor per kategori, lalu ambil nomor 1. Soal klasik tes interview.",
    ["Setiap kategori menyumbang satu.", "Itu yang termurah.", "Monitor kalah dari Laptop di Komputer."]),
  Q("window", 3, "pesanan", "Rata-rata bergerak 3 baris pada pesanan 103:", "SELECT id,\n  ROUND(AVG(qty) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 2)\nFROM pesanan WHERE id <= 103 ORDER BY id;", [[101, 1], [102, 2], [103, 2]],
    ["2", "3", "1.5", "6"], "ROWS BETWEEN 2 PRECEDING AND CURRENT ROW = jendela 3 baris (101–103): (1 + 3 + 2) / 3 = 2. Dipakai untuk moving average penjualan.",
    ["Itu qty 102 saja.", "Itu rata-rata 2 baris.", "Itu jumlahnya."]),
  Q("window", 2, "pesanan", "Pembagian 2 kelompok dengan NTILE untuk pesanan 105:", "SELECT id, NTILE(2) OVER (ORDER BY id)\nFROM pesanan ORDER BY id;", [[101, 1], [102, 1], [103, 1], [104, 1], [105, 2], [106, 2], [107, 2], [108, 2]],
    ["2", "1", "5", "4"], "NTILE(n) membagi baris menjadi n kelompok sama besar: 101–104 kelompok 1, 105–108 kelompok 2. Berguna untuk kuartil.",
    ["105 masuk paruh kedua.", "Itu nomor urutnya.", "Itu banyak baris per kelompok."]),
  M("window", 1, "Beda GROUP BY dan window function (OVER):", ["GROUP BY menggabung baris jadi satu per kelompok; OVER menghitung tanpa menghilangkan baris aslinya", "Sama saja", "OVER hanya untuk teks", "GROUP BY lebih modern"],
    "Window function cocok saat butuh detail baris DAN angka kelompok sekaligus (peringkat, persen dari total, total berjalan).",
    ["Hasilnya berbeda.", "OVER untuk angka juga.", "Keduanya standar SQL."]),
  I("window", 2, "Fungsi window untuk mengambil nilai baris sebelumnya: ____(nilai) OVER (ORDER BY bulan)", ["lag"], "LAG = sebelumnya, LEAD = sesudahnya."),
  );

  dalami("select", `
<h4>Membaca SELECT seperti kalimat</h4>
<pre><code>SELECT nama, harga        -- 3) tampilkan kolom ini
FROM produk               -- 1) dari tabel produk
WHERE harga &gt; 200000      -- 2) hanya baris yang memenuhi
ORDER BY harga DESC       -- 4) urutkan dari mahal
LIMIT 3;                  -- 5) ambil 3 teratas</code></pre>
<p>Database tidak bekerja sesuai urutan tulisan. Urutan kerjanya: <b>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</b>. Itu sebabnya alias dari SELECT tidak bisa dipakai di WHERE.</p>
<h4>Operator WHERE yang paling sering dipakai</h4>
<table class="mini-pivot"><tr><th>Tulis</th><th>Arti</th><th>Contoh</th></tr>
<tr><td><code>= &lt;&gt; &gt; &lt; &gt;= &lt;=</code></td><td>bandingkan</td><td><code>kota = 'Jakarta'</code></td></tr>
<tr><td><code>AND / OR / NOT</code></td><td>gabung syarat</td><td><code>qty &gt;= 2 AND kota = 'Bandung'</code></td></tr>
<tr><td><code>BETWEEN a AND b</code></td><td>rentang, termasuk batas</td><td><code>harga BETWEEN 100000 AND 300000</code></td></tr>
<tr><td><code>IN (…)</code></td><td>salah satu dari daftar</td><td><code>kota IN ('Jakarta', 'Bandung')</code></td></tr>
<tr><td><code>LIKE</code></td><td>pola teks (% = apa saja, _ = satu huruf)</td><td><code>nama LIKE 'R%'</code></td></tr>
<tr><td><code>IS NULL</code></td><td>kosong</td><td><code>email IS NULL</code></td></tr></table>
<h4>AND dan OR sekaligus: pakai kurung</h4>
<pre><code>-- maksud: pelanggan Jakarta yang qty-nya besar ATAU kecil?
WHERE kota = 'Jakarta' AND (qty &gt;= 5 OR qty = 1)</code></pre>
<p>AND dikerjakan lebih dulu daripada OR. Tanpa kurung, hasilnya bisa melebar tanpa disadari.</p>
<div class="praktik"><b>Coba sendiri</b> (Lab SQL): tampilkan produk Aksesoris yang harganya di bawah 200.000, lalu semua pelanggan yang namanya diawali huruf S atau berakhiran a.</div>`);

  dalami("groupby", `
<h4>GROUP BY = Pivot Table di Excel</h4>
<p>Bayangkan memilah kartu-kartu pesanan ke dalam tumpukan berdasarkan pelanggan, lalu menghitung isi setiap tumpukan.</p>
<pre><code>SELECT pelanggan_id, COUNT(*) AS banyak, SUM(qty) AS total_qty
FROM pesanan
GROUP BY pelanggan_id;</code></pre>
<table class="mini-pivot"><tr><th>pelanggan_id</th><th>tumpukan (qty)</th><th>COUNT</th><th>SUM</th></tr>
<tr><td>1</td><td>1, 3, 1</td><td>3</td><td>5</td></tr>
<tr><td>2</td><td>2, 1</td><td>2</td><td>3</td></tr>
<tr><td>3</td><td>1, 2</td><td>2</td><td>3</td></tr>
<tr><td>4</td><td>5</td><td>1</td><td>5</td></tr></table>
<h4>Lima fungsi agregat</h4>
<table class="mini-pivot"><tr><th>SQL</th><th>Excel</th><th>Catatan</th></tr>
<tr><td><code>COUNT(*)</code></td><td>COUNTA</td><td>semua baris</td></tr>
<tr><td><code>COUNT(kolom)</code></td><td>COUNT</td><td>melewati NULL</td></tr>
<tr><td><code>SUM</code></td><td>SUM</td><td></td></tr>
<tr><td><code>AVG</code></td><td>AVERAGE</td><td>melewati NULL</td></tr>
<tr><td><code>MIN / MAX</code></td><td>MIN / MAX</td><td>juga untuk teks dan tanggal</td></tr></table>
<h4>WHERE vs HAVING dalam satu query</h4>
<pre><code>SELECT kota, COUNT(*) AS n
FROM pelanggan
WHERE kota &lt;&gt; 'Surabaya'   -- saring BARIS dulu
GROUP BY kota
HAVING COUNT(*) &gt;= 2;      -- saring KELOMPOK sesudah dihitung</code></pre>
<p>Aturan emas: kolom di SELECT harus ada di GROUP BY, atau dibungkus fungsi agregat.</p>
<div class="praktik"><b>Coba sendiri:</b> hitung total qty dan banyak pesanan per produk_id, tampilkan hanya produk yang terjual lebih dari 2 unit, urutkan dari yang terlaris.</div>`);

  dalami("join", `
<h4>Kenapa data dipecah lalu disambung?</h4>
<p>Kalau nama dan kota pelanggan ditulis ulang di setiap pesanan, perubahan alamat harus diedit di puluhan baris dan rawan salah. Jadi data disimpan sekali di tabel pelanggan, dan pesanan cukup menyimpan <b>pelanggan_id</b>. JOIN menyambungkannya kembali saat dibutuhkan, seperti VLOOKUP.</p>
<h4>Cara membaca JOIN</h4>
<pre><code>SELECT p.nama, pr.nama AS produk, o.qty
FROM pesanan o                                -- mulai dari pesanan
JOIN pelanggan p ON p.id = o.pelanggan_id     -- cari pelanggan yang id-nya sama
JOIN produk pr  ON pr.id = o.produk_id;       -- cari produk yang id-nya sama</code></pre>
<h4>Jenis JOIN dan banyak barisnya (data contoh)</h4>
<table class="mini-pivot"><tr><th>JOIN</th><th>Yang disimpan</th><th>pelanggan × pesanan</th></tr>
<tr><td>INNER JOIN</td><td>hanya yang punya pasangan</td><td>8 baris (Lia hilang)</td></tr>
<tr><td>LEFT JOIN</td><td>semua tabel kiri + pasangan (atau NULL)</td><td>9 baris (Lia dengan NULL)</td></tr>
<tr><td>RIGHT JOIN</td><td>kebalikan LEFT</td><td>jarang dipakai; tukar urutan tabel</td></tr>
<tr><td>FULL JOIN</td><td>semua dari kedua sisi</td><td>untuk rekonsiliasi data</td></tr>
<tr><td>CROSS JOIN</td><td>semua kombinasi</td><td>5 × 4 = 20 (pelanggan × produk)</td></tr></table>
<h4>Tiga jebakan JOIN</h4>
<ul><li><b>Baris berlipat</b>: satu pelanggan dengan 3 pesanan muncul 3 kali. Jumlahkan dengan hati-hati.</li><li><b>Syarat di WHERE pada tabel kanan LEFT JOIN</b> mengubahnya jadi INNER JOIN. Taruh syarat itu di <code>ON</code> bila baris kiri harus tetap ada.</li><li><b>Lupa ON</b> = CROSS JOIN tak sengaja, hasilnya meledak.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> tampilkan setiap pelanggan beserta total belanja rupiahnya, termasuk yang belum pernah belanja (total 0). Petunjuk: LEFT JOIN dua kali dan <code>COALESCE(SUM(...), 0)</code>.</div>`);

  dalami("subquery", `
<h4>Subquery = pertanyaan pembantu</h4>
<p>"Produk mana yang harganya di atas rata-rata?" butuh dua langkah: hitung rata-ratanya, lalu bandingkan. Subquery menaruh langkah pertama di dalam kurung.</p>
<pre><code>SELECT nama FROM produk
WHERE harga &gt; (SELECT AVG(harga) FROM produk);   -- dalam kurung dihitung duluan</code></pre>
<h4>Tiga tempat subquery</h4>
<table class="mini-pivot"><tr><th>Tempat</th><th>Mengembalikan</th><th>Contoh</th></tr>
<tr><td>WHERE dengan =, &gt;</td><td>satu nilai</td><td><code>harga &gt; (SELECT AVG(harga) …)</code></td></tr>
<tr><td>WHERE dengan IN / EXISTS</td><td>daftar nilai / ada-tidak</td><td><code>id IN (SELECT pelanggan_id FROM pesanan)</code></td></tr>
<tr><td>FROM</td><td>tabel sementara</td><td><code>FROM (SELECT … GROUP BY …) AS t</code></td></tr>
<tr><td>SELECT</td><td>satu nilai per baris (berkorelasi)</td><td><code>(SELECT COUNT(*) … WHERE o.pelanggan_id = p.id)</code></td></tr></table>
<h4>Jebakan NOT IN dengan NULL</h4>
<pre><code>WHERE id NOT IN (SELECT pelanggan_id FROM pesanan)
-- bila ada satu pelanggan_id NULL, hasilnya KOSONG semua!
WHERE NOT EXISTS (SELECT 1 FROM pesanan o WHERE o.pelanggan_id = p.id)
-- aman walau ada NULL</code></pre>
<div class="praktik"><b>Coba sendiri:</b> tampilkan pesanan yang qty-nya lebih besar dari rata-rata qty semua pesanan, lalu tampilkan nama pelanggan yang pernah membeli produk kategori Komputer (subquery di dalam subquery).</div>`);

  dalami("case", `
<h4>CASE: satu kolom baru berisi keputusan</h4>
<pre><code>SELECT id, qty,
  CASE
    WHEN qty &gt;= 3 THEN 'Grosir'     -- dicek pertama
    WHEN qty = 2  THEN 'Sedang'     -- hanya jika di atas salah
    ELSE 'Satuan'                  -- sisanya
  END AS jenis
FROM pesanan;</code></pre>
<h4>Empat kegunaan CASE di pekerjaan</h4>
<table class="mini-pivot"><tr><th>Kegunaan</th><th>Pola</th></tr>
<tr><td>Memberi label/segmen</td><td><code>CASE WHEN total &gt;= 5000000 THEN 'VIP' … END</code></td></tr>
<tr><td>Menghitung bersyarat (COUNTIF)</td><td><code>SUM(CASE WHEN kota = 'Jakarta' THEN 1 ELSE 0 END)</code></td></tr>
<tr><td>Pivot baris ke kolom</td><td><code>SUM(CASE WHEN bulan = '01' THEN nilai END) AS jan</code></td></tr>
<tr><td>Urutan khusus</td><td><code>ORDER BY CASE status WHEN 'urgent' THEN 0 ELSE 1 END</code></td></tr></table>
<h4>Persentase dengan CASE</h4>
<pre><code>SELECT ROUND(100.0 * SUM(CASE WHEN qty &gt;= 3 THEN 1 ELSE 0 END) / COUNT(*), 1) AS persen_grosir
FROM pesanan;   -- 25.0</code></pre>
<p>Tulis <code>100.0</code> (pakai titik) supaya pembagian menghasilkan desimal, bukan pembagian bulat.</p>
<div class="praktik"><b>Coba sendiri:</b> buat laporan satu baris berisi tiga kolom: banyak pesanan Satuan, Sedang, dan Grosir, memakai SUM(CASE ...).</div>`);

  dalami("nullfungsi", `
<h4>NULL bukan nol dan bukan teks kosong</h4>
<p>NULL berarti "tidak diketahui". Karena itu, apa pun yang dihitung dengan NULL ikut tidak diketahui:</p>
<table class="mini-pivot"><tr><th>Ekspresi</th><th>Hasil</th></tr>
<tr><td><code>NULL + 5</code></td><td>NULL</td></tr>
<tr><td><code>NULL = NULL</code></td><td>NULL (bukan benar!)</td></tr>
<tr><td><code>NULL IS NULL</code></td><td>benar</td></tr>
<tr><td><code>COUNT(kolom)</code></td><td>melewati NULL</td></tr>
<tr><td><code>AVG(kolom)</code></td><td>melewati NULL (pembaginya ikut berkurang)</td></tr>
<tr><td><code>COALESCE(kolom, 0)</code></td><td>NULL diganti 0</td></tr></table>
<h4>Fungsi teks, angka, tanggal (SQLite)</h4>
<table class="mini-pivot"><tr><th>Kebutuhan</th><th>SQLite</th><th>MySQL / PostgreSQL</th></tr>
<tr><td>huruf besar/kecil</td><td><code>UPPER / LOWER</code></td><td>sama</td></tr>
<tr><td>panjang teks</td><td><code>LENGTH</code></td><td><code>CHAR_LENGTH</code> / <code>LENGTH</code></td></tr>
<tr><td>potong teks</td><td><code>SUBSTR(t, mulai, panjang)</code></td><td><code>SUBSTRING</code></td></tr>
<tr><td>sambung teks</td><td><code>a || b</code></td><td><code>CONCAT(a, b)</code> / <code>||</code></td></tr>
<tr><td>bulatkan</td><td><code>ROUND(x, 2)</code></td><td>sama</td></tr>
<tr><td>bagian tanggal</td><td><code>strftime('%Y-%m', tgl)</code></td><td><code>DATE_FORMAT</code> / <code>TO_CHAR</code></td></tr>
<tr><td>tambah hari</td><td><code>date(tgl, '+7 day')</code></td><td><code>DATE_ADD</code> / <code>tgl + INTERVAL '7 day'</code></td></tr></table>
<h4>Pembagian bulat: jebakan diam-diam</h4>
<pre><code>SELECT 7 / 2;      -- 3   (int dibagi int)
SELECT 7.0 / 2;    -- 3.5
SELECT CAST(7 AS REAL) / 2;   -- 3.5</code></pre>
<div class="praktik"><b>Coba sendiri:</b> tampilkan setiap pesanan dengan nama bulan (<code>strftime('%m', tanggal)</code>) dan berapa hari sejak pesanan pertama (<code>julianday</code>).</div>`);

  dalami("cte", `
<h4>CTE = menulis query seperti langkah resep</h4>
<pre><code>WITH belanja AS (                        -- langkah 1: total per pelanggan
  SELECT o.pelanggan_id, SUM(o.qty * pr.harga) AS total
  FROM pesanan o JOIN produk pr ON pr.id = o.produk_id
  GROUP BY o.pelanggan_id
),
rata AS (                                -- langkah 2: rata-rata total
  SELECT AVG(total) AS r FROM belanja
)
SELECT p.nama, b.total                   -- langkah 3: bandingkan
FROM belanja b
JOIN pelanggan p ON p.id = b.pelanggan_id
CROSS JOIN rata
WHERE b.total &gt; rata.r;</code></pre>
<p>Setiap langkah bisa dicek sendiri: jalankan <code>SELECT * FROM belanja</code> dulu sebelum menulis langkah berikutnya.</p>
<h4>UNION vs UNION ALL</h4>
<table class="mini-pivot"><tr><th></th><th>UNION</th><th>UNION ALL</th></tr>
<tr><td>Baris kembar</td><td>dibuang</td><td>tetap</td></tr>
<tr><td>Kecepatan</td><td>lebih lambat (harus cek kembar)</td><td>lebih cepat</td></tr>
<tr><td>Pakai saat</td><td>butuh daftar unik</td><td>menggabung data bulanan/cabang</td></tr></table>
<h4>CTE rekursif untuk membuat deret</h4>
<pre><code>WITH RECURSIVE hari(tgl) AS (
  SELECT '2026-01-01'
  UNION ALL
  SELECT date(tgl, '+1 day') FROM hari WHERE tgl &lt; '2026-01-07'
)
SELECT tgl FROM hari;   -- 7 tanggal, berguna untuk laporan harian tanpa bolong</code></pre>
<div class="praktik"><b>Coba sendiri:</b> pakai CTE untuk menghitung total qty per kategori, lalu tampilkan kategori yang totalnya di atas rata-rata kategori.</div>`);

  dalami("window", `
<h4>Window function: menghitung sambil tetap melihat setiap baris</h4>
<pre><code>SELECT id, pelanggan_id, qty,
  SUM(qty)     OVER (PARTITION BY pelanggan_id)                  AS total_pelanggan,
  ROW_NUMBER() OVER (PARTITION BY pelanggan_id ORDER BY tanggal) AS ke,
  SUM(qty)     OVER (ORDER BY id)                                AS berjalan
FROM pesanan;</code></pre>
<p>Bacanya: <code>OVER (...)</code> = "lihat jendela baris ini". <code>PARTITION BY</code> = jendelanya per kelompok. <code>ORDER BY</code> di dalam OVER = urutan di dalam jendela.</p>
<h4>Fungsi window yang paling sering ditanyakan</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Untuk</th><th>Contoh pertanyaan bisnis</th></tr>
<tr><td><code>ROW_NUMBER</code></td><td>nomor urut unik</td><td>pesanan pertama tiap pelanggan</td></tr>
<tr><td><code>RANK / DENSE_RANK</code></td><td>peringkat (seri)</td><td>3 produk terlaris per kategori</td></tr>
<tr><td><code>SUM() OVER (ORDER BY …)</code></td><td>total berjalan</td><td>omzet kumulatif harian</td></tr>
<tr><td><code>LAG / LEAD</code></td><td>baris sebelum/sesudah</td><td>pertumbuhan bulan ini vs bulan lalu</td></tr>
<tr><td><code>AVG() OVER (ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)</code></td><td>rata-rata bergerak</td><td>tren 7 hari</td></tr>
<tr><td><code>NTILE(4)</code></td><td>bagi rata jadi kelompok</td><td>kuartil pelanggan</td></tr></table>
<h4>Pertumbuhan bulan ke bulan</h4>
<pre><code>WITH bulanan AS (
  SELECT strftime('%Y-%m', tanggal) AS bulan, SUM(qty) AS q
  FROM pesanan GROUP BY bulan
)
SELECT bulan, q,
  ROUND(100.0 * (q - LAG(q) OVER (ORDER BY bulan)) / LAG(q) OVER (ORDER BY bulan), 1) AS tumbuh_persen
FROM bulanan;</code></pre>
<div class="praktik"><b>Coba sendiri:</b> tampilkan setiap pesanan beserta qty pesanan sebelumnya milik pelanggan yang sama (<code>LAG ... OVER (PARTITION BY pelanggan_id ORDER BY tanggal)</code>).</div>`);
})();
