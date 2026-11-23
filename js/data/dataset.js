// ============ DATASET LATIHAN ============
// Dipakai bersama oleh soal Excel, soal SQL, Lab SQL, dan materi.
// "sheet" = tampil seperti lembar Excel (ada huruf kolom & nomor baris).
// "tabel" = tampil seperti tabel database (ada nama tabel).

const DATASET = {
  penjualan: {
    jenis: "sheet", nama: "Penjualan",
    kolom: ["Sales", "Wilayah", "Produk", "Qty", "Harga", "Total"],
    format: [null, null, null, null, "angka", "angka"],
    baris: [
      ["Andi",  "Jakarta",  "Laptop",   2, 7000000, 14000000],
      ["Bima",  "Bandung",  "Mouse",   10,  150000,  1500000],
      ["Citra", "Jakarta",  "Monitor",  3, 2000000,  6000000],
      ["Andi",  "Surabaya", "Mouse",    5,  150000,   750000],
      ["Dewi",  "Bandung",  "Laptop",   1, 7000000,  7000000],
      ["Bima",  "Jakarta",  "Keyboard", 4,  300000,  1200000],
      ["Citra", "Surabaya", "Laptop",   1, 7000000,  7000000],
      ["Andi",  "Jakarta",  "Monitor",  2, 2000000,  4000000],
      ["Dewi",  "Surabaya", "Keyboard", 6,  300000,  1800000],
      ["Bima",  "Bandung",  "Monitor",  1, 2000000,  2000000],
    ],
  },
  produkSheet: {
    jenis: "sheet", nama: "Produk",
    kolom: ["Produk", "Kategori", "Harga"],
    format: [null, null, "angka"],
    baris: [
      ["Laptop",   "Komputer",  7000000],
      ["Mouse",    "Aksesoris",  150000],
      ["Monitor",  "Komputer",  2000000],
      ["Keyboard", "Aksesoris",  300000],
    ],
  },

  // ---------- Data "kotor" untuk bab Teks & Pembersihan Data ----------
  // pre:true → spasi ditampilkan apa adanya (ada spasi berlebih yang disengaja)
  kotor: {
    jenis: "sheet", nama: "Pelanggan_Mentah", pre: true,
    kolom: ["Nama", "Kota", "Telepon", "Email", "Kode"],
    baris: [
      ["  rina wulandari", "jakarta",  "0812-3456-7890", "Rina.W@Mail.com",    "INV-2026-001"],
      ["TONO SAPUTRA",     "Bandung ", "081298765432",   "tono@mail.com",      "INV-2026-002"],
      ["Sari   Dewi",      "JAKARTA",  "0813-2222-1111", "sari.dewi@mail.com", "INV-2026-003"],
      ["budi hartono",     "Surabaya", "0857-1111-2222", "budi@mail.com",      "INV-2026-004"],
      ["Lia Amelia",       "bandung",  "0813-7777-8888", "LIA@MAIL.COM",       "INV-2026-005"],
      ["TONO SAPUTRA",     "Bandung ", "081298765432",   "tono@mail.com",      "INV-2026-002"],
    ],
  },
  // ---------- Transaksi bertanggal untuk bab Tanggal & Waktu ----------
  transaksi: {
    jenis: "sheet", nama: "Transaksi",
    kolom: ["Faktur", "Tanggal", "Sales", "Total", "Tgl_Bayar"],
    format: [null, null, null, "angka", null],
    baris: [
      ["INV-01", "03/01/2026", "Andi",  14000000, "10/01/2026"],
      ["INV-02", "15/01/2026", "Bima",   1500000, "20/02/2026"],
      ["INV-03", "28/01/2026", "Citra",  6000000, "05/02/2026"],
      ["INV-04", "02/02/2026", "Andi",    750000, "02/02/2026"],
      ["INV-05", "14/02/2026", "Dewi",   7000000, "30/03/2026"],
      ["INV-06", "27/02/2026", "Bima",   1200000, "06/03/2026"],
      ["INV-07", "05/03/2026", "Citra",  7000000, "12/03/2026"],
      ["INV-08", "18/03/2026", "Andi",   4000000, ""],
    ],
  },
  // ---------- Tabel komisi bertingkat (pencarian rentang) ----------
  komisi: {
    jenis: "sheet", nama: "Komisi",
    kolom: ["Batas_Bawah", "Komisi"],
    format: ["angka", null],
    baris: [
      [0,        "2%"],
      [5000000,  "3%"],
      [10000000, "5%"],
    ],
  },
  // ---------- Kinerja toko online per bulan (Statistik & BI) ----------
  bulanan: {
    jenis: "sheet", nama: "Bulanan",
    kolom: ["Bulan", "Pengunjung", "Pesanan", "Pendapatan"],
    format: [null, "angka", "angka", "angka"],
    baris: [
      ["Jan", 20000, 400, 100000000],
      ["Feb", 18000, 360,  90000000],
      ["Mar", 25000, 450, 117000000],
      ["Apr", 24000, 480, 120000000],
      ["Mei", 30000, 540, 135000000],
      ["Jun", 32000, 512, 140800000],
    ],
  },

  // ---------- Tabel database untuk SQL ----------
  pelanggan: {
    jenis: "tabel", nama: "pelanggan",
    kolom: ["id", "nama", "kota"],
    baris: [
      [1, "Rina", "Jakarta"],
      [2, "Tono", "Bandung"],
      [3, "Sari", "Jakarta"],
      [4, "Budi", "Surabaya"],
      [5, "Lia",  "Bandung"],
    ],
  },
  produk: {
    jenis: "tabel", nama: "produk",
    kolom: ["id", "nama", "kategori", "harga"],
    baris: [
      [1, "Laptop",   "Komputer",  7000000],
      [2, "Mouse",    "Aksesoris",  150000],
      [3, "Monitor",  "Komputer",  2000000],
      [4, "Keyboard", "Aksesoris",  300000],
    ],
  },
  pesanan: {
    jenis: "tabel", nama: "pesanan",
    kolom: ["id", "pelanggan_id", "produk_id", "qty", "tanggal"],
    baris: [
      [101, 1, 1, 1, "2026-01-03"],
      [102, 1, 2, 3, "2026-01-04"],
      [103, 2, 3, 2, "2026-01-05"],
      [104, 3, 1, 1, "2026-01-07"],
      [105, 3, 4, 2, "2026-01-08"],
      [106, 4, 2, 5, "2026-01-09"],
      [107, 1, 3, 1, "2026-01-10"],
      [108, 2, 4, 1, "2026-01-12"],
    ],
  },
  // ---------- Tabel kasus kerja (Jalur Data Analyst & Data Scientist, Lab SQL kasus) ----------
  // Data simulasi, dibuat program dengan seed tetap (alat di luar repo). Nama tabel SQL = nama.
  tbPengguna: {
    jenis: "tabel", nama: "pengguna",
    kolom: ["id", "nama", "kota", "tgl_daftar", "sumber"],
    baris: [
      [1, "Rina Wijaya", "Jakarta", "2025-11-04", "organik"],
      [2, "Budi Santoso", "Surabaya", "2025-11-12", "iklan"],
      [3, "Dewi Lestari", "Bandung", "2025-11-20", "referral"],
      [4, "Ahmad Fauzi", "Jakarta", "2025-12-01", "iklan"],
      [5, "Siti Nurhaliza", "Medan", "2025-12-03", "organik"],
      [6, "Rudi Hermawan", "Semarang", "2025-12-09", "iklan"],
      [7, "Maya Putri", "Makassar", "2025-12-15", "referral"],
      [8, "Hendra Gunawan", "Yogyakarta", "2025-12-22", "organik"],
      [9, "Dian Permata", "Jakarta", "2026-01-05", "iklan"],
      [10, "Eko Prasetyo", "Bandung", "2026-01-08", "organik"],
      [11, "Fajar Nugroho", "Medan", "2026-01-14", "iklan"],
      [12, "Gita Savitri", "Denpasar", "2026-01-20", "referral"],
      [13, "Hana Pertiwi", "Surabaya", "2026-01-27", "organik"],
      [14, "Irfan Hakim", "Jakarta", "2026-02-02", "iklan"],
      [15, "Joko Susilo", "Semarang", "2026-02-10", "organik"],
      [16, "Kartika Sari", "Yogyakarta", "2026-02-16", "referral"],
    ],
  },
  tbTransaksi: {
    jenis: "tabel", nama: "transaksi",
    kolom: ["id", "pengguna_id", "tanggal", "kategori", "kanal", "nilai", "status", "voucher"],
    baris: [
      [1001, 9, "2026-01-05", "Rumah Tangga", "app", 67000, "selesai", 0],
      [1002, 4, "2026-01-06", "Elektronik", "app", 2176000, "selesai", 0],
      [1003, 3, "2026-01-08", "Kecantikan", "app", 162000, "selesai", 0],
      [1004, 3, "2026-01-11", "Makanan", "app", 123000, "retur", 0],
      [1005, 2, "2026-01-14", "Fashion", "web", 122000, "selesai", 0],
      [1006, 3, "2026-01-15", "Fashion", "web", 102000, "selesai", 0],
      [1007, 3, "2026-01-15", "Elektronik", "web", 1166000, "selesai", 0],
      [1008, 3, "2026-01-16", "Fashion", "app", 408000, "selesai", 0],
      [1009, 3, "2026-01-18", "Fashion", "app", 175000, "selesai", 1],
      [1010, 4, "2026-01-20", "Rumah Tangga", "app", 333000, "retur", 0],
      [1011, 9, "2026-01-24", "Rumah Tangga", "app", 359000, "selesai", 0],
      [1012, 3, "2026-01-25", "Kecantikan", "app", 107000, "selesai", 0],
      [1013, 7, "2026-02-06", "Rumah Tangga", "app", 312000, "selesai", 1],
      [1014, 10, "2026-02-06", "Makanan", "app", 74000, "selesai", 1],
      [1015, 4, "2026-02-07", "Kecantikan", "web", 90000, "selesai", 1],
      [1016, 3, "2026-02-08", "Fashion", "app", 99000, "selesai", 0],
      [1017, 5, "2026-02-11", "Fashion", "web", 402000, "selesai", 0],
      [1018, 2, "2026-02-12", "Fashion", "app", 301000, "selesai", 0],
      [1019, 3, "2026-02-13", "Kecantikan", "app", 76000, "selesai", 1],
      [1020, 1, "2026-02-16", "Rumah Tangga", "app", 216000, "selesai", 0],
      [1021, 6, "2026-02-19", "Kecantikan", "app", 213000, "batal", 1],
      [1022, 7, "2026-02-20", "Makanan", "app", 48000, "retur", 1],
      [1023, 1, "2026-02-23", "Fashion", "app", 383000, "selesai", 0],
      [1024, 2, "2026-03-03", "Makanan", "app", 88000, "selesai", 1],
      [1025, 5, "2026-03-04", "Rumah Tangga", "app", 93000, "selesai", 1],
      [1026, 1, "2026-03-05", "Makanan", "app", 108000, "selesai", 0],
      [1027, 7, "2026-03-11", "Rumah Tangga", "web", 68000, "selesai", 0],
      [1028, 1, "2026-03-11", "Rumah Tangga", "web", 179000, "selesai", 1],
      [1029, 1, "2026-03-12", "Kecantikan", "app", 130000, "selesai", 1],
      [1030, 1, "2026-03-13", "Rumah Tangga", "web", 364000, "batal", 0],
      [1031, 9, "2026-03-13", "Rumah Tangga", "web", 130000, "retur", 0],
      [1032, 5, "2026-03-14", "Makanan", "app", 80000, "retur", 1],
      [1033, 7, "2026-03-14", "Elektronik", "app", 1590000, "selesai", 1],
      [1034, 5, "2026-03-20", "Kecantikan", "app", 172000, "retur", 0],
      [1035, 5, "2026-03-24", "Rumah Tangga", "app", 234000, "selesai", 0],
      [1036, 5, "2026-03-27", "Kecantikan", "app", 241000, "selesai", 0],
    ],
  },
  tbLangganan: {
    jenis: "tabel", nama: "langganan",
    kolom: ["id", "paket", "bulan_aktif", "keluhan", "kuota_gb", "churn", "skor"],
    baris: [
      [1, "Reguler", 14, 2, 13.6, 1, 0.31],
      [2, "Super", 27, 2, 17.5, 0, 0.22],
      [3, "Super", 28, 0, 30.5, 0, 0.15],
      [4, "Super", 20, 0, 35.7, 0, 0.21],
      [5, "Super", 9, 2, 37.6, 1, 0.57],
      [6, "Reguler", 19, 0, 27.2, 1, 0.15],
      [7, "Hemat", 6, 1, 18.4, 1, 0.43],
      [8, "Reguler", 28, 0, 17.1, 0, 0.14],
      [9, "Super", 16, 0, 30.8, 0, 0.03],
      [10, "Super", 25, 0, 23.7, 0, 0.03],
      [11, "Reguler", 22, 2, 2.6, 1, 0.43],
      [12, "Hemat", 18, 1, 36.5, 0, 0.46],
      [13, "Hemat", 11, 1, 16.1, 1, 0.33],
      [14, "Hemat", 34, 0, 7.6, 0, 0.14],
      [15, "Hemat", 21, 0, 24.0, 0, 0.04],
      [16, "Super", 6, 0, 21.5, 1, 0.07],
      [17, "Reguler", 34, 0, 37.0, 0, 0.2],
      [18, "Hemat", 12, 2, 27.0, 1, 0.54],
      [19, "Super", 25, 1, 2.5, 0, 0.2],
      [20, "Reguler", 15, 0, 33.0, 0, 0.07],
      [21, "Hemat", 19, 0, 35.5, 0, 0.06],
      [22, "Reguler", 4, 1, 8.3, 1, 0.28],
      [23, "Super", 24, 2, 14.1, 1, 0.44],
      [24, "Super", 18, 2, 30.7, 1, 0.54],
    ],
  },
  // ---------- Tabel log keamanan (Jalur Cyber Security, Lab SQL kasus SOC) ----------
  // Simulasi log panel admin dan web server Pasarku; pola serangan sengaja ditanam. path log_web sudah di-decode SIEM.
  tbLogin: {
    jenis: "tabel", nama: "log_login",
    kolom: ["id", "waktu", "pengguna", "ip", "negara", "status"],
    baris: [
      [1, "2026-03-10 08:02:11", "rina", "10.0.4.21", "ID", "berhasil"],
      [2, "2026-03-10 08:15:40", "budi", "10.0.4.35", "ID", "gagal"],
      [3, "2026-03-10 08:16:02", "budi", "10.0.4.35", "ID", "berhasil"],
      [4, "2026-03-10 08:30:12", "sari", "10.0.4.18", "ID", "berhasil"],
      [5, "2026-03-10 09:01:55", "dewi", "10.0.4.40", "ID", "berhasil"],
      [6, "2026-03-10 09:22:30", "dewi", "203.0.113.50", "SG", "berhasil"],
      [7, "2026-03-10 10:05:09", "admin", "10.0.4.2", "ID", "berhasil"],
      [8, "2026-03-11 01:00:03", "rina", "192.0.2.45", "NL", "gagal"],
      [9, "2026-03-11 01:01:10", "budi", "192.0.2.45", "NL", "gagal"],
      [10, "2026-03-11 01:02:22", "sari", "192.0.2.45", "NL", "gagal"],
      [11, "2026-03-11 01:03:31", "dewi", "192.0.2.45", "NL", "gagal"],
      [12, "2026-03-11 01:04:45", "admin", "192.0.2.45", "NL", "gagal"],
      [13, "2026-03-11 01:05:58", "joko", "192.0.2.45", "NL", "gagal"],
      [14, "2026-03-11 02:10:01", "admin", "203.0.113.66", "DE", "gagal"],
      [15, "2026-03-11 02:10:32", "admin", "203.0.113.66", "DE", "gagal"],
      [16, "2026-03-11 02:11:04", "admin", "203.0.113.66", "DE", "gagal"],
      [17, "2026-03-11 02:11:35", "admin", "203.0.113.66", "DE", "gagal"],
      [18, "2026-03-11 02:12:07", "admin", "203.0.113.66", "DE", "gagal"],
      [19, "2026-03-11 02:12:38", "admin", "203.0.113.66", "DE", "gagal"],
      [20, "2026-03-11 02:13:02", "admin", "203.0.113.66", "DE", "gagal"],
      [21, "2026-03-11 02:13:30", "admin", "203.0.113.66", "DE", "gagal"],
      [22, "2026-03-11 02:14:05", "admin", "203.0.113.66", "DE", "berhasil"],
      [23, "2026-03-11 03:20:00", "budi", "198.51.100.91", "US", "gagal"],
      [24, "2026-03-11 03:20:30", "budi", "198.51.100.91", "US", "gagal"],
      [25, "2026-03-11 03:21:00", "budi", "198.51.100.91", "US", "gagal"],
      [26, "2026-03-11 03:21:30", "budi", "198.51.100.91", "US", "gagal"],
      [27, "2026-03-11 03:22:00", "budi", "198.51.100.91", "US", "gagal"],
      [28, "2026-03-11 08:05:30", "rina", "10.0.4.21", "ID", "berhasil"],
      [29, "2026-03-11 08:20:14", "sari", "10.0.4.18", "ID", "gagal"],
      [30, "2026-03-11 08:20:40", "sari", "10.0.4.18", "ID", "gagal"],
      [31, "2026-03-11 08:21:05", "sari", "10.0.4.18", "ID", "berhasil"],
      [32, "2026-03-11 09:00:00", "joko", "10.0.4.55", "ID", "berhasil"],
      [33, "2026-03-11 13:45:12", "dewi", "10.0.4.40", "ID", "berhasil"],
    ],
  },
  tbWeb: {
    jenis: "tabel", nama: "log_web",
    kolom: ["id", "waktu", "ip", "metode", "path", "status", "ukuran"],
    baris: [
      [1, "2026-03-12 09:00:01", "10.0.4.21", "GET", "/", 200, 5120],
      [2, "2026-03-12 09:00:05", "36.85.10.4", "GET", "/produk?id=12", 200, 4310],
      [3, "2026-03-12 09:01:12", "36.85.10.4", "GET", "/keranjang", 200, 2210],
      [4, "2026-03-12 09:02:40", "114.124.3.9", "POST", "/login", 200, 1880],
      [5, "2026-03-12 09:03:15", "114.124.3.9", "GET", "/produk?id=7", 200, 4290],
      [6, "2026-03-12 09:10:01", "198.51.100.23", "GET", "/admin", 404, 512],
      [7, "2026-03-12 09:10:02", "198.51.100.23", "GET", "/.env", 404, 512],
      [8, "2026-03-12 09:10:02", "198.51.100.23", "GET", "/wp-login.php", 404, 512],
      [9, "2026-03-12 09:10:03", "198.51.100.23", "GET", "/backup.zip", 404, 512],
      [10, "2026-03-12 09:10:03", "198.51.100.23", "GET", "/.git/config", 404, 512],
      [11, "2026-03-12 09:10:04", "198.51.100.23", "GET", "/phpmyadmin", 404, 512],
      [12, "2026-03-12 09:10:05", "198.51.100.23", "GET", "/login", 200, 1880],
      [13, "2026-03-12 09:20:11", "203.0.113.9", "GET", "/produk?id=1'", 500, 730],
      [14, "2026-03-12 09:20:40", "203.0.113.9", "GET", "/produk?id=1' OR '1'='1", 200, 98304],
      [15, "2026-03-12 09:21:05", "203.0.113.9", "GET", "/produk?id=1 UNION SELECT nama, sandi FROM pengguna--", 200, 15880],
      [16, "2026-03-12 09:21:30", "203.0.113.9", "GET", "/produk?id=12", 200, 4310],
      [17, "2026-03-12 09:30:00", "192.0.2.77", "GET", "/cari?q=<script>alert(1)</script>", 200, 3020],
      [18, "2026-03-12 09:31:10", "36.85.10.4", "GET", "/cari?q=sepatu", 200, 3500],
      [19, "2026-03-12 09:40:00", "114.124.3.9", "GET", "/produk?id=99", 404, 512],
      [20, "2026-03-12 09:45:12", "10.0.4.21", "GET", "/laporan", 200, 6400],
    ],
  },
};

// SQL pembuat database (dipakai Lab SQL & untuk verifikasi jawaban).
// Semua dataset berjenis "tabel" ikut dibuat; nama tabel SQL = d.nama.
function datasetSQL() {
  const tipe = (t, i) => typeof t.baris[0][i] !== "number" ? "TEXT" : t.baris.some(b => !Number.isInteger(b[i])) ? "REAL" : "INTEGER";
  const nilai = v => typeof v === "number" ? v : "'" + String(v).replace(/'/g, "''") + "'";
  return Object.values(DATASET).filter(t => t.jenis === "tabel").map(t => {
    const kol = t.kolom.map((k, i) => `${k} ${tipe(t, i)}`).join(", ");
    const isi = t.baris.map(b => `(${b.map(nilai).join(", ")})`).join(",\n");
    return `CREATE TABLE ${t.nama} (${kol});\nINSERT INTO ${t.nama} VALUES\n${isi};`;
  }).join("\n\n");
}

if (typeof module !== "undefined") module.exports = { DATASET, datasetSQL };
