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
};

// SQL pembuat database (dipakai Lab SQL & untuk verifikasi jawaban)
function datasetSQL() {
  const tipe = v => typeof v === "number" ? "INTEGER" : "TEXT";
  const nilai = v => typeof v === "number" ? v : "'" + String(v).replace(/'/g, "''") + "'";
  return ["pelanggan", "produk", "pesanan"].map(n => {
    const t = DATASET[n];
    const kol = t.kolom.map((k, i) => `${k} ${tipe(t.baris[0][i])}`).join(", ");
    const isi = t.baris.map(b => `(${b.map(nilai).join(", ")})`).join(",\n");
    return `CREATE TABLE ${n} (${kol});\nINSERT INTO ${n} VALUES\n${isi};`;
  }).join("\n\n");
}

if (typeof module !== "undefined") module.exports = { DATASET, datasetSQL };
