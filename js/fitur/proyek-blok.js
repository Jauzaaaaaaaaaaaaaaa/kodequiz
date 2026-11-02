// File ini dibuat otomatis oleh skrip. Berisi potongan kode jawaban proyek SalesKu.
// Kode jawaban langkah N = gabungan blok dengan s <= N dan (sampai kosong atau N < sampai).
const PROYEK_BLOK = [
 {
  "file": "html",
  "s": 1,
  "sampai": null,
  "letak": "Ketik ini dari baris pertama file index.html (file masih kosong).",
  "kode": "<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>SalesKu — Dashboard Penjualan</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <header class=\"header\">\n    <h1>SalesKu</h1>\n    <p>Dashboard penjualan tim sales</p>\n  </header>\n\n  <main class=\"wadah\">\n"
 },
 {
  "file": "html",
  "s": 2,
  "sampai": null,
  "letak": "Di dalam <main class=\"wadah\">, tepat sebelum </main>.",
  "kode": "    <!-- Kartu KPI -->\n    <section class=\"kpi-grid\">\n      <div class=\"kpi\">\n        <span class=\"kpi-label\">Total Penjualan</span>\n        <strong id=\"total\">Rp 0</strong>\n      </div>\n      <div class=\"kpi\">\n        <span class=\"kpi-label\">Jumlah Transaksi</span>\n        <strong id=\"transaksi\">0</strong>\n      </div>\n      <div class=\"kpi\">\n        <span class=\"kpi-label\">Rata-rata per Transaksi</span>\n        <strong id=\"rata\">Rp 0</strong>\n      </div>\n    </section>\n\n"
 },
 {
  "file": "html",
  "s": 3,
  "sampai": null,
  "letak": "Setelah </section> milik kartu KPI, sebelum </main>.",
  "kode": "    <!-- Form tambah transaksi -->\n    <section class=\"panel\">\n      <h2>Tambah Transaksi</h2>\n      <form id=\"form-transaksi\">\n        <select id=\"sales\" required>\n          <option value=\"\">Pilih sales</option>\n          <option>Andi</option>\n          <option>Bima</option>\n          <option>Citra</option>\n          <option>Dewi</option>\n        </select>\n        <input id=\"produk\" placeholder=\"Nama produk\" required>\n        <input id=\"qty\" type=\"number\" min=\"1\" placeholder=\"Qty\" required>\n        <input id=\"harga\" type=\"number\" min=\"0\" placeholder=\"Harga satuan\" required>\n        <button type=\"submit\">Simpan</button>\n      </form>\n    </section>\n\n"
 },
 {
  "file": "html",
  "s": 4,
  "sampai": null,
  "letak": "Setelah </section> milik form, sebelum </main>.",
  "kode": "    <!-- Tabel transaksi -->\n    <section class=\"panel\">\n      <h2>Daftar Transaksi</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Sales</th>\n            <th>Produk</th>\n            <th>Qty</th>\n            <th>Harga</th>\n            <th>Subtotal</th>\n          </tr>\n        </thead>\n        <tbody id=\"isi-tabel\"></tbody>\n      </table>\n    </section>\n\n"
 },
 {
  "file": "html",
  "s": 13,
  "sampai": null,
  "letak": "index.html: setelah </section> milik tabel transaksi, sebelum </main>.",
  "kode": "    <!-- Ranking sales -->\n    <section class=\"panel\">\n      <h2>Ranking Sales</h2>\n      <ol id=\"ranking\"></ol>\n    </section>\n\n"
 },
 {
  "file": "html",
  "s": 14,
  "sampai": null,
  "letak": "index.html: setelah </section> milik Ranking Sales, sebelum </main>.",
  "kode": "    <!-- Cek penjualan per sales -->\n    <section class=\"panel\">\n      <h2>Cek Penjualan per Sales</h2>\n      <select id=\"pilih-sales\">\n        <option value=\"\">Pilih sales</option>\n        <option>Andi</option>\n        <option>Bima</option>\n        <option>Citra</option>\n        <option>Dewi</option>\n      </select>\n      <p id=\"hasil-sales\">Pilih nama sales untuk melihat totalnya.</p>\n    </section>\n\n"
 },
 {
  "file": "html",
  "s": 1,
  "sampai": null,
  "letak": "Lanjutkan di bawahnya untuk menutup halaman.",
  "kode": "  </main>\n\n  <script src=\"app.js\"></script>\n</body>\n</html>\n"
 },
 {
  "file": "css",
  "s": 5,
  "sampai": null,
  "letak": "Ketik dari baris pertama file style.css (file masih kosong).",
  "kode": "/* ===== Dasar ===== */\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  background: #f3f6f4;\n  color: #2b3a35;\n}\n\n.header {\n  background: #4a8c7f;\n  color: white;\n  padding: 24px;\n}\n\n.header h1 {\n  margin: 0;\n}\n\n.header p {\n  margin: 4px 0 0;\n  opacity: 0.85;\n}\n\n.wadah {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 24px;\n}\n\n"
 },
 {
  "file": "css",
  "s": 6,
  "sampai": null,
  "letak": "style.css: di bawah semua kode CSS yang sudah ada.",
  "kode": "/* ===== Kartu KPI ===== */\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.kpi {\n  background: white;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n.kpi-label {\n  display: block;\n  font-size: 14px;\n  color: #6b7c76;\n}\n\n.kpi strong {\n  font-size: 24px;\n}\n\n"
 },
 {
  "file": "css",
  "s": 7,
  "sampai": null,
  "letak": "style.css: di bawah semua kode CSS yang sudah ada.",
  "kode": "/* ===== Panel, form, tabel ===== */\n.panel {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n.panel h2 {\n  margin-top: 0;\n  font-size: 18px;\n}\n\nform {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\ninput, select, button {\n  padding: 10px;\n  border: 1px solid #cfd9d5;\n  border-radius: 8px;\n  font: inherit;\n}\n\nbutton {\n  background: #4a8c7f;\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth, td {\n  padding: 10px;\n  border-bottom: 1px solid #e3eae7;\n  text-align: left;\n}\n\n"
 },
 {
  "file": "css",
  "s": 13,
  "sampai": null,
  "letak": "style.css: di bawah semua kode CSS yang sudah ada.",
  "kode": "/* ===== Ranking ===== */\n#ranking li {\n  padding: 6px 0;\n}\n\n"
 },
 {
  "file": "css",
  "s": 15,
  "sampai": null,
  "letak": "style.css: di bawah semua kode CSS yang sudah ada.",
  "kode": "/* ===== Highlight transaksi besar (seperti conditional formatting) ===== */\n.besar {\n  background: #e4f3ea;\n  font-weight: 600;\n}\n\n"
 },
 {
  "file": "js",
  "s": 8,
  "sampai": 16,
  "letak": "Ketik dari baris pertama file app.js (file masih kosong).",
  "kode": "// ===== 1. Data transaksi =====\nconst transaksi = [\n  { sales: \"Andi\",  produk: \"Laptop\",  qty: 2,  harga: 7000000 },\n  { sales: \"Bima\",  produk: \"Mouse\",   qty: 10, harga: 150000 },\n  { sales: \"Citra\", produk: \"Monitor\", qty: 3,  harga: 2000000 },\n  { sales: \"Andi\",  produk: \"Mouse\",   qty: 5,  harga: 150000 },\n  { sales: \"Dewi\",  produk: \"Laptop\",  qty: 1,  harga: 7000000 },\n];\n\n"
 },
 {
  "file": "js",
  "s": 16,
  "sampai": null,
  "letak": "app.js: GANTI bagian '1. Data transaksi' yang lama (mulai komentar // ===== 1. sampai ];) dengan kode ini.",
  "kode": "// ===== 1. Data transaksi (ambil dari localStorage jika ada) =====\nconst dataAwal = [\n  { sales: \"Andi\",  produk: \"Laptop\",  qty: 2,  harga: 7000000 },\n  { sales: \"Bima\",  produk: \"Mouse\",   qty: 10, harga: 150000 },\n  { sales: \"Citra\", produk: \"Monitor\", qty: 3,  harga: 2000000 },\n  { sales: \"Andi\",  produk: \"Mouse\",   qty: 5,  harga: 150000 },\n  { sales: \"Dewi\",  produk: \"Laptop\",  qty: 1,  harga: 7000000 },\n];\n\nconst tersimpan = localStorage.getItem(\"saleskuData\");\nconst transaksi = tersimpan ? JSON.parse(tersimpan) : dataAwal;\n\n"
 },
 {
  "file": "js",
  "s": 8,
  "sampai": null,
  "letak": "Tepat di bawah data transaksi.",
  "kode": "console.log(\"Jumlah transaksi:\", transaksi.length);\n\n"
 },
 {
  "file": "js",
  "s": 9,
  "sampai": null,
  "letak": "app.js: di bagian paling bawah file.",
  "kode": "// ===== 2. Format angka jadi Rupiah =====\nfunction formatRupiah(angka) {\n  return \"Rp \" + angka.toLocaleString(\"id-ID\");\n}\n\nconsole.log(formatRupiah(15000));\n\n"
 },
 {
  "file": "js",
  "s": 10,
  "sampai": null,
  "letak": "app.js: di bagian paling bawah file.",
  "kode": "// ===== 3. Tampilkan tabel transaksi =====\nfunction tampilkanTabel() {\n  const tbody = document.getElementById(\"isi-tabel\");\n  tbody.innerHTML = \"\";\n\n  transaksi.forEach(function (t) {\n    const subtotal = t.qty * t.harga;\n"
 },
 {
  "file": "js",
  "s": 10,
  "sampai": 15,
  "letak": "",
  "kode": "    tbody.innerHTML += `\n      <tr>\n"
 },
 {
  "file": "js",
  "s": 15,
  "sampai": null,
  "letak": "app.js: di dalam tampilkanTabel(), GANTI dua baris `tbody.innerHTML += `` dan `<tr>` dengan tiga baris ini.",
  "kode": "    const kelas = subtotal >= 5000000 ? \"besar\" : \"\";\n    tbody.innerHTML += `\n      <tr class=\"${kelas}\">\n"
 },
 {
  "file": "js",
  "s": 10,
  "sampai": null,
  "letak": "",
  "kode": "        <td>${t.sales}</td>\n        <td>${t.produk}</td>\n        <td>${t.qty}</td>\n        <td>${formatRupiah(t.harga)}</td>\n        <td>${formatRupiah(subtotal)}</td>\n      </tr>`;\n  });\n}\n\n"
 },
 {
  "file": "js",
  "s": 11,
  "sampai": null,
  "letak": "app.js: setelah fungsi tampilkanTabel(), sebelum bagian 'Jalankan semua tampilan'.",
  "kode": "// ===== 4. Hitung KPI =====\nfunction hitungKPI() {\n  let total = 0;\n  transaksi.forEach(function (t) {\n    total += t.qty * t.harga;\n  });\n\n  const jumlah = transaksi.length;\n  const rata = jumlah > 0 ? total / jumlah : 0;\n\n  document.getElementById(\"total\").textContent = formatRupiah(total);\n  document.getElementById(\"transaksi\").textContent = jumlah;\n  document.getElementById(\"rata\").textContent = formatRupiah(Math.round(rata));\n}\n\n"
 },
 {
  "file": "js",
  "s": 13,
  "sampai": null,
  "letak": "app.js: setelah fungsi hitungKPI(), sebelum bagian 'Jalankan semua tampilan'.",
  "kode": "// ===== 5. Ranking sales (seperti GROUP BY / pivot) =====\nfunction tampilkanRanking() {\n  const perSales = {};\n  transaksi.forEach(function (t) {\n    perSales[t.sales] = (perSales[t.sales] || 0) + t.qty * t.harga;\n  });\n\n  const urut = Object.entries(perSales).sort(function (a, b) {\n    return b[1] - a[1];\n  });\n\n  const ol = document.getElementById(\"ranking\");\n  ol.innerHTML = \"\";\n  urut.forEach(function (item) {\n    ol.innerHTML += `<li>${item[0]} — ${formatRupiah(item[1])}</li>`;\n  });\n}\n\n"
 },
 {
  "file": "js",
  "s": 10,
  "sampai": null,
  "letak": "app.js: di bawah fungsi tampilkanTabel().",
  "kode": "// ===== Jalankan semua tampilan =====\nfunction render() {\n  tampilkanTabel();\n"
 },
 {
  "file": "js",
  "s": 11,
  "sampai": null,
  "letak": "app.js: di DALAM function render(), di bawah baris tampilkanTabel();",
  "kode": "  hitungKPI();\n"
 },
 {
  "file": "js",
  "s": 13,
  "sampai": null,
  "letak": "app.js: di DALAM function render(), di bawah baris hitungKPI();",
  "kode": "  tampilkanRanking();\n"
 },
 {
  "file": "js",
  "s": 16,
  "sampai": null,
  "letak": "app.js: di DALAM function render(), di bawah baris tampilkanRanking();",
  "kode": "  localStorage.setItem(\"saleskuData\", JSON.stringify(transaksi));\n"
 },
 {
  "file": "js",
  "s": 10,
  "sampai": null,
  "letak": "",
  "kode": "}\n\n"
 },
 {
  "file": "js",
  "s": 12,
  "sampai": null,
  "letak": "app.js: setelah function render() { … }, sebelum baris render(); paling bawah.",
  "kode": "// ===== 6. Form tambah transaksi =====\nconst form = document.getElementById(\"form-transaksi\");\n\nform.addEventListener(\"submit\", function (e) {\n  e.preventDefault(); // cegah halaman reload\n\n  transaksi.push({\n    sales: document.getElementById(\"sales\").value,\n    produk: document.getElementById(\"produk\").value,\n    qty: Number(document.getElementById(\"qty\").value),\n    harga: Number(document.getElementById(\"harga\").value),\n  });\n\n  form.reset();\n  render();\n});\n\n"
 },
 {
  "file": "js",
  "s": 14,
  "sampai": null,
  "letak": "app.js: setelah blok '6. Form tambah transaksi', sebelum baris render(); paling bawah.",
  "kode": "// ===== 7. Cek penjualan per sales (seperti SUMIFS + COUNTIFS) =====\ndocument.getElementById(\"pilih-sales\").addEventListener(\"change\", function (e) {\n  const nama = e.target.value;\n  const data = transaksi.filter(function (t) {\n    return t.sales === nama;\n  });\n\n  let total = 0;\n  data.forEach(function (t) {\n    total += t.qty * t.harga;\n  });\n\n  document.getElementById(\"hasil-sales\").textContent =\n    nama + \": \" + data.length + \" transaksi, total \" + formatRupiah(total);\n});\n\n"
 },
 {
  "file": "js",
  "s": 10,
  "sampai": null,
  "letak": "app.js: baris PALING BAWAH file.",
  "kode": "render();\n"
 }
];
