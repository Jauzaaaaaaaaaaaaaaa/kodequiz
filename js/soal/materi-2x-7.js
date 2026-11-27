// ============ Materi 2x lipat (bagian 7): Data Analyst & Data Scientist ============
(function () {
  const R = String.raw;
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const li = a => a.map(x => `<li>${x}</li>`).join("");
  const cekH = qa => qa && qa.length ? `<h4>Cek pemahaman</h4><ol class="cek-paham">${qa.map(([q, a]) => `<li>${q}<details><summary>Lihat jawaban</summary><p>${a}</p></details></li>`).join("")}</ol>` : "";
  // studi kasus: skenario, kode opsional, langkah, kesalahan, latihan, kunci (teks), cek pemahaman
  const kasus = MAT => (k, judul, skenario, kode, langkah, salah, latihan, kunci, qa) => {
    const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k);
    b.materi += '<h4 class="pelengkap">Studi kasus terpandu &amp; kunci</h4>' +
      `<h4>Kasus: ${judul}</h4><p>${skenario}</p>` + (kode ? `<pre><code>${esc(kode)}</code></pre>` : "") +
      `<h4>Langkah demi langkah</h4><ol>${li(langkah)}</ol>` +
      `<h4>Kesalahan yang sering terjadi</h4><ul>${li(salah)}</ul>` +
      `<h4>Latihan mandiri</h4><ol>${li(latihan)}</ol>` +
      `<details class="kunci-latihan"><summary>Lihat kunci jawaban (coba dulu sendiri)</summary><ol>${li(kunci)}</ol></details>` + cekH(qa);
  };

  /* ======================= Data Analyst (12 bab) ======================= */
  const A = kasus(MATERI_DA);
  A("peran", "\"Penjualan turun, tolong cek\"",
    "Manajer mengirim pesan singkat: penjualan bulan ini turun. Analis yang baik tidak langsung membuat 20 grafik, tapi memperjelas pertanyaan dulu.", "",
    ["Tanya balik: turun dibanding apa (bulan lalu, tahun lalu, target)? Seberapa besar? Keputusan apa yang menunggu?", "Pecah pertanyaan: jumlah pembeli turun atau nilai belanja per pembeli turun?", "Pecah lagi per dimensi: kanal, kota, kategori, pelanggan baru/lama.", "Cari bagian yang paling menjelaskan penurunan, lalu cek sebab yang masuk akal (stok habis, harga naik, pesaing promo).", "Sampaikan temuan + rekomendasi + tingkat keyakinan, bukan sekadar tabel."],
    ["Membandingkan bulan 28 hari dengan bulan 31 hari tanpa menyesuaikan.", "Mencari data yang mendukung dugaan awal saja.", "Menyerahkan dashboard tanpa kesimpulan."],
    ["Tulis 3 pertanyaan klarifikasi untuk pesan manajer itu.", "Omzet = pembeli × rata-rata belanja. Pembeli turun 10%, rata-rata naik 5%. Omzet berubah berapa?", "Apa beda pertanyaan deskriptif dan diagnostik?"],
    ["Dibanding periode apa? Berapa besar penurunannya? Keputusan apa yang ingin diambil dan kapan?", "0,9 × 1,05 = 0,945 → turun 5,5%.", "Deskriptif menjawab apa yang terjadi; diagnostik menjawab kenapa terjadi."],
    [["Empat jenis analisis?", "Deskriptif, diagnostik, prediktif, preskriptif."], ["Kenapa pertanyaan bisnis harus spesifik?", "Agar analisis terarah ke keputusan dan tidak membuang waktu membuat laporan yang tidak dipakai."]]);

  A("metrik", "pohon metrik omzet toko online",
    "Target bulan depan naik 20%. Tim ingin tahu tuas mana yang paling realistis ditarik.",
R`Omzet
├── Pengunjung
│   ├── organik
│   └── iklan
├── Conversion rate (pesanan / pengunjung)
└── AOV (omzet / pesanan)
    ├── harga rata-rata item
    └── item per pesanan`,
    ["Omzet = pengunjung × conversion × AOV.", "Data sekarang: 50.000 pengunjung × 2% × Rp 250.000 = Rp 250 jt.", "Skenario: pengunjung +10%, conversion 2% → 2,2%, AOV tetap → 55.000 × 2,2% × 250.000 = Rp 302,5 jt (+21%).", "Pilih metrik utama (North Star) dan metrik penjaga (misalnya tingkat retur) agar pertumbuhan tidak merusak hal lain."],
    ["Mengejar vanity metric seperti jumlah like.", "Menaikkan conversion dengan diskon besar tanpa melihat margin.", "Definisi metrik berbeda antartim (pesanan dibayar vs dibuat)."],
    ["Bila hanya AOV yang dinaikkan, berapa AOV untuk omzet Rp 300 jt?", "Sebutkan satu metrik penjaga untuk kampanye diskon.", "Apa definisi 'pelanggan aktif' yang baik?"],
    ["300 jt / (50.000 × 2%) = Rp 300.000.", "Margin kotor atau persentase pesanan yang dibatalkan/diretur.", "Pelanggan yang bertransaksi minimal sekali dalam 30 (atau 90) hari terakhir — periode harus ditulis jelas."],
    [["Apa itu metrik penjaga (guardrail)?", "Metrik yang tidak boleh memburuk saat mengejar metrik utama."], ["Kenapa definisi metrik perlu ditulis?", "Supaya semua tim menghitung dengan cara sama dan angka bisa dibandingkan."]]);

  A("bersih", "membersihkan data pesanan sebelum dianalisis",
    "File ekspor berisi 10.250 baris. Ada duplikat, kota ditulis berbeda-beda, tanggal sebagai teks, dan harga negatif.",
R`import pandas as pd
df = pd.read_csv("pesanan.csv")
print(df.shape, df.duplicated("id_pesanan").sum())       # cek duplikat
df = df.drop_duplicates("id_pesanan")
df["kota"] = df["kota"].str.strip().str.title().replace({"Jkt": "Jakarta", "Dki Jakarta": "Jakarta"})
df["tanggal"] = pd.to_datetime(df["tanggal"], format="%d/%m/%Y", errors="coerce")
aneh = df[(df["harga"] <= 0) | df["tanggal"].isna()]
print(len(aneh), "baris perlu dicek")
df = df.drop(aneh.index)`,
    ["Lihat ukuran dan jumlah duplikat berdasarkan kunci unik.", "Standarkan teks: spasi, huruf besar, ejaan alternatif.", "Ubah tanggal dengan format eksplisit; errors='coerce' menandai yang gagal sebagai NaT.", "Kumpulkan baris aneh ke tabel terpisah untuk ditanyakan, jangan langsung dihapus diam-diam.", "Catat setiap langkah pembersihan beserta jumlah baris terdampak."],
    ["Menghapus semua baris kosong tanpa melihat kolom mana yang kosong.", "Mengisi nilai kosong dengan 0 padahal artinya 'tidak diketahui'.", "Mengubah file asli tanpa cadangan."],
    ["Bagaimana menghitung persentase nilai kosong per kolom?", "Kolom harga berisi 'Rp 15.000'. Bagaimana mengubahnya menjadi angka?", "Kapan outlier tidak boleh dihapus?"],
    ["df.isna().mean() * 100.", "df['harga'].str.replace(r'[^0-9]', '', regex=True).astype(int).", "Saat outlier adalah kejadian nyata yang penting, misalnya pembelian grosir atau penipuan yang justru ingin dideteksi."],
    [["Enam dimensi kualitas data?", "Akurat, lengkap, konsisten, tepat waktu, valid, unik."], ["Kenapa mencatat langkah pembersihan?", "Agar hasil bisa diulang dan diperiksa orang lain."]]);

  A("sqlbisnis", "lima pertanyaan bisnis dalam SQL",
    "Tabel pesanan(id, pelanggan_id, tanggal, kota, total, status) dan pelanggan(id, nama, tgl_daftar).",
R`-- 1. omzet per kota (pesanan selesai)
SELECT kota, SUM(total) AS omzet
FROM pesanan WHERE status = 'selesai'
GROUP BY kota ORDER BY omzet DESC;

-- 2. kota dengan lebih dari 100 pesanan
SELECT kota, COUNT(*) AS n FROM pesanan GROUP BY kota HAVING COUNT(*) > 100;

-- 3. pelanggan yang belum pernah memesan
SELECT p.nama FROM pelanggan p
LEFT JOIN pesanan o ON o.pelanggan_id = p.id
WHERE o.id IS NULL;

-- 4. omzet per bulan
SELECT strftime('%Y-%m', tanggal) AS bulan, SUM(total) FROM pesanan GROUP BY bulan;

-- 5. 5 pelanggan terbesar
SELECT p.nama, SUM(o.total) AS belanja
FROM pesanan o JOIN pelanggan p ON p.id = o.pelanggan_id
GROUP BY p.id, p.nama ORDER BY belanja DESC LIMIT 5;`,
    ["WHERE menyaring baris sebelum dikelompokkan; HAVING menyaring hasil kelompok.", "LEFT JOIN + IS NULL menemukan data yang tidak punya pasangan.", "Kelompokkan berdasarkan id, bukan hanya nama (nama bisa kembar).", "Selalu cek jumlah baris hasil JOIN agar tidak terduplikasi."],
    ["Memakai WHERE COUNT(*) > 100 (harus HAVING).", "JOIN ke tabel detail sehingga total pesanan terhitung berkali-kali.", "Lupa filter status sehingga pesanan batal ikut dihitung."],
    ["Rata-rata nilai pesanan per kota.", "Jumlah pelanggan baru per bulan.", "Persentase pesanan batal."],
    ["SELECT kota, AVG(total) FROM pesanan WHERE status = 'selesai' GROUP BY kota;", "SELECT strftime('%Y-%m', tgl_daftar) AS bulan, COUNT(*) FROM pelanggan GROUP BY bulan;", "SELECT 100.0 * SUM(status = 'batal') / COUNT(*) FROM pesanan; (di database lain: SUM(CASE WHEN status = 'batal' THEN 1 ELSE 0 END))."],
    [["Urutan eksekusi SQL?", "FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT."], ["Kenapa 100.0, bukan 100?", "Agar pembagian menghasilkan desimal, bukan pembagian bulat."]]);

  A("sqllanjut", "pertumbuhan bulanan dan peringkat dengan window function",
    "Manajer ingin omzet per bulan, perubahan dari bulan sebelumnya, dan 3 produk terlaris setiap kategori.",
R`WITH bulanan AS (
  SELECT strftime('%Y-%m', tanggal) AS bulan, SUM(total) AS omzet
  FROM pesanan WHERE status = 'selesai' GROUP BY bulan
)
SELECT bulan, omzet,
       LAG(omzet) OVER (ORDER BY bulan) AS bulan_lalu,
       ROUND(100.0 * (omzet - LAG(omzet) OVER (ORDER BY bulan)) / LAG(omzet) OVER (ORDER BY bulan), 1) AS tumbuh_pct,
       SUM(omzet) OVER (ORDER BY bulan) AS kumulatif
FROM bulanan;

WITH per_produk AS (
  SELECT kategori, produk, SUM(qty) AS terjual,
         ROW_NUMBER() OVER (PARTITION BY kategori ORDER BY SUM(qty) DESC) AS rk
  FROM detail GROUP BY kategori, produk
)
SELECT * FROM per_produk WHERE rk <= 3;`,
    ["CTE (WITH) memecah query menjadi langkah bernama.", "LAG mengambil nilai baris sebelumnya untuk menghitung pertumbuhan.", "SUM OVER (ORDER BY) membuat total berjalan.", "ROW_NUMBER PARTITION BY memberi peringkat di dalam setiap kategori."],
    ["Menyaring rk di WHERE query yang sama (window dihitung setelah WHERE; harus dibungkus CTE).", "Memakai RANK padahal ingin tepat 3 baris (RANK bisa memberi peringkat kembar).", "Bulan tanpa penjualan hilang sehingga LAG membandingkan dengan bulan yang salah."],
    ["Rata-rata bergerak 3 bulan.", "Pembelian pertama setiap pelanggan.", "Selisih hari antara dua pesanan berurutan pelanggan."],
    ["AVG(omzet) OVER (ORDER BY bulan ROWS BETWEEN 2 PRECEDING AND CURRENT ROW).", "MIN(tanggal) ... GROUP BY pelanggan_id, atau ROW_NUMBER() OVER (PARTITION BY pelanggan_id ORDER BY tanggal) = 1.", "julianday(tanggal) - julianday(LAG(tanggal) OVER (PARTITION BY pelanggan_id ORDER BY tanggal))."],
    [["Beda ROW_NUMBER, RANK, DENSE_RANK?", "ROW_NUMBER selalu unik; RANK melompat setelah nilai kembar (1,1,3); DENSE_RANK tidak melompat (1,1,2)."], ["Apa itu analisis kohort?", "Mengelompokkan pelanggan menurut bulan pertama mereka, lalu melihat berapa yang kembali di bulan-bulan berikutnya."]]);

  A("banding", "cabang mana yang lebih baik?",
    "Cabang A: 30 dari 1.000 pengunjung membeli. Cabang B: 5 dari 100. Cabang B terlihat lebih tinggi (5% vs 3%), tapi sampelnya kecil.",
    "",
    ["Bandingkan rasio, bukan angka mentah (30 vs 5 menyesatkan).", "Lihat ukuran sampel: 5 dari 100 sangat dipengaruhi kebetulan.", "Hitung interval kepercayaan kasar; rentang B jauh lebih lebar.", "Waspadai Simpson's paradox: gabungan bisa berbalik arah bila komposisi kelompok berbeda (misalnya B kebanyakan pelanggan lama).", "Bandingkan dengan periode atau kelompok yang setara (hari kerja vs hari kerja)."],
    ["Membandingkan total omzet cabang besar dan kecil tanpa dibagi jumlah toko atau pengunjung.", "Memakai rata-rata untuk data yang sangat miring.", "Menyimpulkan dari satu minggu data."],
    ["Obat X: pria 60/100 sembuh, wanita 20/50; obat Y: pria 50/90, wanita 30/80. Mana lebih baik per kelompok?", "Apa yang harus dilakukan sebelum menyatakan B lebih baik?", "Kapan memakai median, bukan rata-rata?"],
    ["Pria: X 60% vs Y 55,6%; wanita: X 40% vs Y 37,5% — X lebih baik di kedua kelompok.", "Kumpulkan data lebih banyak atau uji statistik; lihat juga apakah pengunjung B berbeda karakter.", "Saat ada outlier atau distribusi miring, misalnya nilai belanja dan gaji."],
    [["Apa itu base rate?", "Tingkat dasar suatu kejadian; tanpa itu persentase perubahan bisa menyesatkan."], ["Kenapa rasio lebih adil?", "Menghilangkan pengaruh ukuran kelompok yang berbeda."]]);

  A("abtest", "merencanakan A/B test halaman produk",
    "Tim ingin menguji foto produk baru. Konversi sekarang 4%. Mereka berharap naik menjadi 4,8%.", "",
    ["Tulis hipotesis: foto baru menaikkan konversi dari 4% ke 4,8% (efek minimum yang berarti).", "Hitung ukuran sampel sebelum mulai: kira-kira 10.000 pengunjung per versi untuk α 5% dan power 80%.", "Acak pengunjung (bukan hari) ke A atau B dan jalankan minimal satu siklus mingguan penuh.", "Jangan mengintip lalu berhenti saat p &lt; 0,05.", "Laporkan efek, interval kepercayaan, dan metrik penjaga (misalnya retur)."],
    ["Menguji banyak perubahan sekaligus lalu tidak tahu mana penyebabnya.", "Sample ratio mismatch: pembagian 50/50 ternyata 54/46 (ada masalah teknis).", "Menganggap 'tidak signifikan' berarti 'tidak ada efek'."],
    ["Hasil A 4,0%, B 4,6%, p = 0,12. Kesimpulan?", "Kenapa tes harus berjalan minimal satu minggu?", "Apa itu novelty effect?"],
    ["Belum cukup bukti; efek mungkin ada tapi lebih kecil dari yang bisa dideteksi sampel ini. Lanjutkan atau perbesar sampel sesuai rencana.", "Perilaku hari kerja dan akhir pekan berbeda.", "Pengguna tertarik karena sesuatu baru, lalu efeknya memudar."],
    [["Apa itu power?", "Peluang mendeteksi efek bila efek itu benar-benar ada."], ["Kenapa ukuran sampel ditentukan di awal?", "Mencegah berhenti di saat kebetulan terlihat bagus."]]);

  A("visual", "dari tabel 12 kolom ke satu grafik yang jelas",
    "Laporan bulanan berisi tabel omzet 8 kategori × 12 bulan. Pesan utamanya: kategori Elektronik tumbuh paling cepat.", "",
    ["Tulis pesan utama sebagai judul grafik: 'Elektronik tumbuh 45% sejak Januari'.", "Pilih grafik garis untuk tren bulanan.", "Abu-abukan 7 kategori lain, warnai Elektronik.", "Beri label langsung di ujung garis, hapus legenda.", "Tambahkan catatan sumber dan definisi omzet di bawah."],
    ["Judul hanya 'Omzet per kategori' tanpa pesan.", "Delapan warna cerah yang bersaing.", "Sumbu ganda yang membuat dua garis seolah berhubungan."],
    ["Pilih grafik untuk membandingkan omzet 8 kategori tahun ini.", "Bagaimana menampilkan target di grafik garis?", "Kapan tabel lebih baik dari grafik?"],
    ["Batang horizontal diurutkan dari terbesar.", "Garis putus-putus atau area tipis dengan label 'Target'.", "Saat pembaca perlu angka tepat untuk dicari, bukan pola."],
    [["Apa fungsi warna sorot?", "Mengarahkan mata ke satu hal penting."], ["Kenapa label langsung lebih baik dari legenda?", "Pembaca tidak perlu bolak-balik mencocokkan warna."]]);

  A("cerita", "memo rekomendasi satu halaman",
    "Hasil analisis: pelanggan yang memakai voucher pertama kali punya retensi 3 bulan 18%, sedangkan yang tidak 31%.", "",
    ["Mulai dengan kesimpulan: 'Voucher pembelian pertama menarik pelanggan yang cepat pergi.'", "Dukungan: angka retensi dan ukuran kelompok.", "Implikasi: biaya voucher per pelanggan bertahan lebih mahal dari kanal lain.", "Rekomendasi: uji voucher untuk pembelian kedua, bukan pertama.", "Batasan: korelasi, bukan bukti sebab; usulkan A/B test."],
    ["Menceritakan proses analisis dari awal sebelum kesimpulan.", "Menyembunyikan batasan data.", "Rekomendasi tanpa pemilik dan tenggat."],
    ["Tulis kalimat pembuka memo untuk temuan di atas.", "Apa batasan utama analisis ini?", "Bagaimana menguji rekomendasinya?"],
    ["Contoh: 'Pelanggan yang datang lewat voucher pertama bertahan hampir separuh lebih sedikit; kami sarankan memindahkan voucher ke pembelian kedua.'", "Kelompok berbeda karakter sejak awal (self-selection), jadi voucher belum tentu penyebab.", "A/B test: kelompok acak mendapat voucher pertama vs voucher kedua, ukur retensi 3 bulan."],
    [["Struktur piramida dalam memo?", "Kesimpulan dulu, lalu alasan, lalu detail data."], ["Kenapa batasan ditulis?", "Membangun kepercayaan dan mencegah keputusan berlebihan."]]);

  A("segmen", "RFM dengan pandas",
    "Data transaksi 12 bulan. Tim CRM ingin daftar pelanggan per segmen untuk kampanye email.",
R`import pandas as pd
hari_ini = df["tanggal"].max() + pd.Timedelta(days=1)
rfm = df.groupby("pelanggan_id").agg(
    R=("tanggal", lambda s: (hari_ini - s.max()).days),
    F=("id_pesanan", "nunique"),
    M=("total", "sum"))
rfm["r"] = pd.qcut(rfm["R"], 3, labels=[3, 2, 1]).astype(int)          # baru = skor tinggi
rfm["f"] = pd.qcut(rfm["F"].rank(method="first"), 3, labels=[1, 2, 3]).astype(int)
rfm["m"] = pd.qcut(rfm["M"], 3, labels=[1, 2, 3]).astype(int)
rfm["segmen"] = "Lainnya"
rfm.loc[(rfm.r == 3) & (rfm.f == 3), "segmen"] = "Juara"
rfm.loc[(rfm.r == 1) & (rfm.f >= 2), "segmen"] = "Berisiko pergi"
rfm.loc[(rfm.r == 3) & (rfm.f == 1), "segmen"] = "Baru"
print(rfm["segmen"].value_counts())`,
    ["Hitung R (hari sejak beli terakhir), F (jumlah pesanan), M (total belanja) per pelanggan.", "qcut membagi menjadi tiga kelompok sama banyak; R dibalik karena makin kecil makin baik.", "F memakai rank karena banyak nilai kembar (qcut gagal bila batas sama).", "Beri nama segmen yang bisa ditindaklanjuti."],
    ["Recency dihitung dari tanggal hari ini padahal data berhenti bulan lalu.", "Lupa membalik skor R.", "Segmen terlalu banyak sehingga tim CRM bingung."],
    ["Berapa persen omzet dari segmen Juara?", "Pilih tindakan untuk segmen 'Berisiko pergi'.", "Kenapa memakai nunique untuk F?"],
    ["rfm.groupby('segmen')['M'].sum() / rfm['M'].sum() * 100.", "Email personal dengan penawaran terbatas dan survei alasan berhenti.", "Satu pesanan bisa punya beberapa baris item; nunique menghitung pesanan unik."],
    [["Kenapa RFM populer?", "Sederhana, mudah dijelaskan, dan langsung bisa ditindaklanjuti tim pemasaran."]]);

  A("musiman", "proyeksi penjualan bulan depan",
    "Penjualan harian 2 tahun menunjukkan lonjakan setiap Ramadan dan akhir tahun.",
R`s = df.set_index("tanggal")["omzet"].resample("MS").sum()
tren = s.rolling(12, center=True).mean()                 # tren tahunan
yoy = s.pct_change(12) * 100                             # pertumbuhan dibanding bulan sama tahun lalu
musim = (s / tren).groupby(s.index.month).mean()         # indeks musiman per bulan
proyeksi = s.iloc[-12] * (1 + yoy.iloc[-3:].mean() / 100)   # bulan sama tahun lalu × pertumbuhan terkini`,
    ["Agregasi ke bulanan supaya pola lebih jelas.", "Rata-rata bergerak 12 bulan menghaluskan musiman untuk melihat tren.", "Bandingkan dengan bulan yang sama tahun lalu (YoY), bukan bulan sebelumnya, untuk data bermusim.", "Proyeksi sederhana: bulan sama tahun lalu × rata-rata pertumbuhan YoY 3 bulan terakhir.", "Sajikan rentang (pesimis–optimis), bukan satu angka pasti."],
    ["Membandingkan Desember dengan November lalu menyimpulkan 'naik drastis'.", "Ramadan bergeser setiap tahun tapi dianggap bulan yang sama.", "Proyeksi satu angka tanpa rentang."],
    ["Desember tahun lalu 500 jt, pertumbuhan YoY rata-rata 8%. Proyeksi Desember?", "Kenapa rolling 12 bulan cocok untuk data bulanan?", "Bagaimana menangani hari libur yang berpindah?"],
    ["540 jt.", "Satu jendela mencakup satu siklus musim penuh sehingga efek musim saling menetralkan.", "Tambahkan penanda libur (dummy) atau bandingkan berdasarkan minggu relatif terhadap libur."],
    [["Apa itu dekomposisi deret waktu?", "Memisahkan tren, musiman, dan sisa (noise)."]]);

  A("kerjada", "menyiapkan tes teknis Data Analyst",
    "Perusahaan memberi take-home test: dataset penjualan, 3 pertanyaan, waktu 48 jam.", "",
    ["Baca pertanyaan dan tulis asumsi sejak awal.", "Bersihkan data dan dokumentasikan langkahnya.", "Jawab setiap pertanyaan dengan angka + grafik + satu kalimat insight.", "Tambahkan satu rekomendasi bisnis yang tidak diminta tapi relevan.", "Kirim dalam format rapi: notebook + ringkasan PDF/slide 3–5 halaman."],
    ["Mengirim notebook mentah tanpa penjelasan.", "Melewatkan pengecekan kualitas data.", "Terlambat karena mengejar model yang rumit."],
    ["Apa isi halaman pertama ringkasan?", "Bagaimana menunjukkan kemampuan SQL bila tes memakai Excel?", "Apa yang ditanyakan saat presentasi hasil?"],
    ["Tiga temuan utama dan rekomendasi.", "Lampirkan query SQL setara di lampiran atau README.", "Asumsi, alasan memilih metode, dan apa yang akan dilakukan bila punya data lebih."],
    [["Keterampilan inti DA di Indonesia?", "SQL, Excel/Spreadsheet, satu alat BI (Power BI/Looker Studio/Tableau), Python dasar, dan komunikasi."]]);

  /* ======================= Data Scientist (14 bab) ======================= */
  const D = kasus(MATERI_DS);
  D("peranDs", "memprediksi pelanggan yang akan berhenti",
    "Perusahaan langganan ingin tahu pelanggan mana yang kemungkinan berhenti bulan depan agar tim retensi bisa menghubungi mereka.", "",
    ["Definisikan target: berhenti = tidak memperpanjang dalam 30 hari setelah jatuh tempo.", "Tentukan kapan prediksi dipakai (7 hari sebelum jatuh tempo) sehingga fitur hanya memakai data sebelum titik itu.", "Baseline: aturan sederhana 'tidak login 14 hari'. Model harus mengalahkannya.", "Latih model, evaluasi dengan recall dan precision pada kapasitas tim (misalnya 200 telepon/bulan).", "Deploy, pantau, dan ukur dampak lewat eksperimen."],
    ["Langsung memakai model rumit tanpa baseline.", "Target tidak jelas sehingga label berubah-ubah.", "Model bagus di notebook tapi tidak ada yang memakai hasilnya."],
    ["Apa baseline yang masuk akal?", "Metrik apa bila tim hanya bisa menelepon 200 orang?", "Tahap siklus CRISP-DM?"],
    ["Aturan sederhana atau model logistik dengan sedikit fitur.", "Precision@200: dari 200 teratas, berapa yang benar akan berhenti.", "Pemahaman bisnis, pemahaman data, persiapan data, pemodelan, evaluasi, deployment."]);

  D("prob", "tes penipuan dan teorema Bayes",
    "1% transaksi adalah penipuan. Sistem deteksi menangkap 95% penipuan, tapi juga salah menandai 5% transaksi normal.", "",
    ["P(penipuan) = 0,01; P(tanda | penipuan) = 0,95; P(tanda | normal) = 0,05.", "P(tanda) = 0,95 × 0,01 + 0,05 × 0,99 = 0,0095 + 0,0495 = 0,059.", "P(penipuan | tanda) = 0,0095 / 0,059 ≈ 16%.", "Artinya 84% transaksi yang ditandai sebenarnya normal — base rate kecil membuat banyak alarm palsu."],
    ["Mengira 95% akurasi berarti 95% tanda pasti penipuan.", "Mengabaikan base rate.", "Menjumlah peluang kejadian yang tidak saling lepas."],
    ["Bila penipuan 10%, berapa P(penipuan | tanda)?", "Dua dadu: peluang jumlah 7?", "Peluang minimal satu sukses dari 3 percobaan dengan p = 0,2?"],
    ["0,095 / (0,095 + 0,045) ≈ 67,9%.", "6/36 = 1/6.", "1 − 0,8³ = 0,488."]);

  D("inferensi", "interval kepercayaan rata-rata belanja",
    "Sampel 100 transaksi: rata-rata Rp 250.000, simpangan baku Rp 80.000.",
R`import numpy as np, scipy.stats as st
n, rata, sd = 100, 250_000, 80_000
se = sd / np.sqrt(n)                       # 8.000
t = st.t.ppf(0.975, df=n - 1)              # ≈ 1,98
print(rata - t * se, rata + t * se)        # ≈ 234.126 sampai 265.874`,
    ["Standard error = sd / √n = 8.000.", "Interval 95% ≈ rata ± 1,98 × SE.", "Tafsiran: metode ini, bila diulang berkali-kali, menangkap rata-rata sebenarnya pada 95% kasus.", "Perbesar sampel 4× untuk mempersempit interval setengahnya."],
    ["Mengatakan '95% peluang rata-rata ada di interval ini' untuk satu interval tertentu (tafsiran frekuentis berbeda).", "Memakai sd populasi padahal hanya punya sampel.", "Sampel tidak acak (hanya pembeli akhir pekan)."],
    ["Berapa SE bila n = 400?", "Uji apakah rata-rata berbeda dari Rp 230.000.", "Apa arti p-value 0,2?"],
    ["80.000 / 20 = 4.000.", "t = (250.000 − 230.000) / 8.000 = 2,5; p ≈ 0,014 → berbeda signifikan pada α 5%.", "Data seperti ini cukup mungkin muncul walau tidak ada efek; belum ada bukti kuat."]);

  D("pandasDs", "EDA cepat dataset churn",
    "Dataset 7.000 pelanggan dengan 20 kolom. Anda punya 30 menit untuk memahami isinya.",
R`df.info()                                   # tipe dan nilai kosong
df.describe(include="all").T                # ringkasan setiap kolom
df["churn"].value_counts(normalize=True)    # keseimbangan kelas
df.groupby("kontrak")["churn"].mean()       # churn per jenis kontrak
pd.crosstab(df["metode_bayar"], df["churn"], normalize="index")
df.select_dtypes("number").corr()["churn"].sort_values()`,
    ["info: tipe data dan kolom kosong.", "describe: rentang, nilai aneh (umur 0 atau 200).", "Keseimbangan kelas menentukan metrik nanti.", "groupby/crosstab: hubungan fitur kategori dengan target.", "Korelasi numerik sebagai petunjuk awal, bukan kesimpulan."],
    ["Menggambar 50 grafik tanpa pertanyaan.", "Kolom angka terbaca sebagai teks karena ada spasi.", "Melihat target di data uji saat EDA."],
    ["Cara mengubah kolom total_bayar yang berisi spasi menjadi angka?", "Bagaimana melihat distribusi lama berlangganan per churn?", "Kenapa normalize=True?"],
    ["pd.to_numeric(df['total_bayar'], errors='coerce').", "df.groupby('churn')['lama_bulan'].describe() atau histogram per kelompok.", "Menampilkan proporsi sehingga kelompok berbeda ukuran bisa dibandingkan."]);

  D("fitur", "fitur dari data transaksi dan jebakan kebocoran",
    "Model prediksi churn mendapat akurasi 99%. Ternyata ada fitur 'tanggal_berhenti'.", "",
    ["Hapus fitur yang hanya diketahui setelah kejadian (tanggal_berhenti, status_refund).", "Buat fitur dari masa lalu saja: jumlah login 30 hari terakhir, tren pemakaian, keluhan 90 hari.", "Fit scaler dan encoder hanya di data latih, lalu terapkan ke data uji (pakai Pipeline).", "Untuk data waktu, bagi latih/uji berdasarkan tanggal, bukan acak."],
    ["Mengisi nilai kosong dengan rata-rata seluruh data sebelum split.", "Target encoding tanpa validasi silang.", "Fitur ID pelanggan ikut masuk model."],
    ["Fitur apa dari tanggal transaksi?", "Kenapa one-hot untuk kota dengan 500 nilai bisa bermasalah?", "Tulis Pipeline sederhana scaler + logistic regression."],
    ["Hari dalam minggu, jam, akhir bulan, hari sejak transaksi terakhir.", "Kolom sangat banyak dan jarang terisi; gabungkan kota langka atau pakai target encoding yang divalidasi.", "make_pipeline(StandardScaler(), LogisticRegression()) lalu fit di X_latih saja."]);

  D("regresi", "menafsirkan regresi harga rumah",
    "Model: harga (juta) = 150 + 4,2 × luas (m²) + 80 × kamar_mandi − 2,5 × umur (tahun). R² = 0,72.",
R`from sklearn.linear_model import LinearRegression
m = LinearRegression().fit(X_latih[["luas", "kamar_mandi", "umur"]], y_latih)
print(m.intercept_, m.coef_)
prediksi = m.predict([[100, 2, 10]])     # 150 + 420 + 160 - 25 = 705 juta`,
    ["Setiap tambahan 1 m² menaikkan harga sekitar 4,2 juta, dengan fitur lain tetap.", "Rumah 100 m², 2 kamar mandi, umur 10 tahun → 705 juta.", "R² 0,72: model menjelaskan 72% variasi harga.", "Cek residual: pola melengkung menandakan hubungan tidak linear."],
    ["Menafsirkan koefisien sebagai sebab-akibat.", "Membandingkan besar koefisien antarfitur yang skalanya berbeda.", "Memakai R² data latih saja."],
    ["Prediksi rumah 80 m², 1 kamar mandi, umur 20 tahun?", "Apa arti RMSE 50 juta?", "Apa gejala multikolinearitas?"],
    ["150 + 336 + 80 − 50 = 516 juta.", "Rata-rata kesalahan prediksi sekitar 50 juta (dengan bobot lebih pada kesalahan besar).", "Koefisien berubah tanda atau sangat tidak stabil saat fitur yang saling berkorelasi kuat ditambah/dihapus."]);

  D("klasifikasi", "memilih model klasifikasi pinjaman",
    "Bank ingin memprediksi gagal bayar. Regulator meminta alasan keputusan bisa dijelaskan.", "",
    ["Mulai dari regresi logistik: mudah dijelaskan lewat koefisien/odds.", "Coba decision tree dangkal untuk aturan yang bisa dibaca.", "Bandingkan dengan random forest/gradient boosting untuk akurasi.", "Bila model kompleks dipakai, sediakan penjelasan (feature importance, SHAP).", "Pilih berdasarkan trade-off kinerja dan kebutuhan penjelasan."],
    ["Pohon terlalu dalam yang menghafal data latih.", "Fitur sensitif (agama, suku) atau proksinya masuk model.", "Memilih model hanya dari akurasi."],
    ["Kenapa random forest lebih stabil dari satu pohon?", "Apa arti odds ratio 1,5?", "Kapan gradient boosting dipilih?"],
    ["Rata-rata banyak pohon yang dilatih pada sampel dan fitur acak mengurangi varians.", "Kenaikan satu unit fitur mengalikan peluang relatif (odds) 1,5 kali.", "Data tabular dengan hubungan non-linear dan butuh kinerja tinggi, asalkan dituning dengan validasi yang baik."]);

  D("validasi", "overfitting dan validasi silang",
    "Akurasi latih 99%, akurasi uji 72%. Model menghafal.",
R`from sklearn.model_selection import cross_val_score, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
grid = GridSearchCV(RandomForestClassifier(random_state=0),
                    {"max_depth": [3, 5, 8, None], "min_samples_leaf": [1, 5, 20]},
                    cv=5, scoring="roc_auc")
grid.fit(X_latih, y_latih)
print(grid.best_params_, grid.best_score_)
print(grid.score(X_uji, y_uji))        # data uji disentuh sekali di akhir`,
    ["Selisih besar latih–uji = overfitting.", "Batasi kerumitan (max_depth, min_samples_leaf).", "Validasi silang 5-fold memakai seluruh data latih secara bergantian.", "Data uji hanya dipakai sekali untuk laporan akhir."],
    ["Menyetel hyperparameter berkali-kali melihat skor data uji.", "Validasi acak untuk data deret waktu (pakai TimeSeriesSplit).", "Data duplikat ada di latih dan uji."],
    ["Latih 75%, uji 74%, keduanya rendah. Masalahnya?", "Kenapa stratify=y saat split?", "Apa itu learning curve?"],
    ["Underfitting; model terlalu sederhana atau fitur kurang informatif.", "Menjaga proporsi kelas sama di latih dan uji.", "Grafik skor latih dan validasi terhadap jumlah data, untuk melihat apakah data tambahan membantu."]);

  D("evaluasi", "memilih ambang untuk deteksi penipuan",
    "Dari 10.000 transaksi uji ada 100 penipuan. Pada ambang 0,5: TP 60, FN 40, FP 140.", "",
    ["Precision = 60 / (60 + 140) = 30%.", "Recall = 60 / (60 + 40) = 60%.", "F1 = 2 × 0,3 × 0,6 / 0,9 = 40%.", "Akurasi = (10.000 − 40 − 140) / 10.000 = 98,2% — terlihat bagus tapi menyesatkan karena kelas timpang.", "Tentukan ambang dari biaya: penipuan lolos Rp 2 jt, pemeriksaan palsu Rp 20 rb → turunkan ambang untuk menaikkan recall."],
    ["Melaporkan akurasi pada data timpang.", "Memakai ambang 0,5 tanpa alasan bisnis.", "Membandingkan model dengan ambang berbeda."],
    ["Biaya total pada ambang 0,5?", "Ambang diturunkan: TP 85, FN 15, FP 600. Biaya baru?", "Kapan PR-AUC lebih berguna dari ROC-AUC?"],
    ["40 × 2 jt + 140 × 20 rb = 80 jt + 2,8 jt = 82,8 jt.", "15 × 2 jt + 600 × 20 rb = 30 jt + 12 jt = 42 jt → lebih murah.", "Saat kelas positif sangat jarang."]);

  D("unsup", "klaster pelanggan dan PCA",
    "Data 5.000 pelanggan dengan 12 fitur perilaku. Tim ingin segmen tanpa label.",
R`from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.decomposition import PCA
Xs = StandardScaler().fit_transform(X)
for k in range(2, 8):
    km = KMeans(n_clusters=k, n_init=10, random_state=0).fit(Xs)
    print(k, round(km.inertia_), round(silhouette_score(Xs, km.labels_), 3))
xy = PCA(n_components=2).fit_transform(Xs)     # untuk digambar 2D`,
    ["Standarkan fitur agar skala sama.", "Coba beberapa k; lihat siku inertia dan silhouette.", "Profilkan setiap klaster dengan rata-rata fitur asli.", "PCA meringkas 12 fitur menjadi 2 komponen untuk visualisasi."],
    ["Memakai fitur berskala berbeda tanpa standarisasi.", "Memilih k hanya dari grafik siku yang tidak jelas.", "Menafsirkan sumbu PCA seperti fitur asli."],
    ["Apa arti explained_variance_ratio_ [0,45, 0,20]?", "Kapan DBSCAN lebih cocok dari K-Means?", "Bagaimana memberi nama klaster?"],
    ["Dua komponen pertama menjelaskan 65% variasi data.", "Klaster berbentuk tidak bulat atau ada banyak noise/outlier.", "Lihat fitur yang paling berbeda dari rata-rata keseluruhan, lalu beri nama perilaku (misalnya 'Pemburu promo')."]);

  D("kausal", "apakah program loyalitas menaikkan belanja?",
    "Anggota loyalitas belanja 40% lebih banyak. Tapi pelanggan yang sudah sering belanja memang lebih mungkin mendaftar.", "",
    ["Kenali bias seleksi: anggota berbeda sejak awal.", "Cara terbaik: eksperimen acak (tawarkan program ke kelompok acak).", "Bila tidak bisa: bandingkan belanja sebelum-sesudah antara anggota dan non-anggota (difference-in-differences).", "Atau padankan pelanggan mirip (propensity score matching).", "Laporkan efek dengan batasan asumsinya."],
    ["Menyimpulkan sebab dari perbandingan mentah.", "Mengontrol variabel yang terjadi setelah perlakuan.", "Mengabaikan regresi ke rata-rata."],
    ["Anggota: sebelum 1,0 jt, sesudah 1,3 jt. Non-anggota: 0,8 jt → 0,9 jt. Efek DiD?", "Asumsi utama DiD?", "Kenapa eksperimen acak menghilangkan bias seleksi?"],
    ["(1,3 − 1,0) − (0,9 − 0,8) = 0,2 jt.", "Tren paralel: tanpa program, kedua kelompok akan bergerak sejajar.", "Pengacakan membuat kedua kelompok rata-rata sama dalam segala hal kecuali perlakuan."]);

  D("mlops", "memantau model setelah dipakai",
    "Model churn dipakai 6 bulan. Tiba-tiba recall turun dari 70% ke 50%.", "",
    ["Cek data drift: distribusi fitur input berubah (misalnya paket harga baru).", "Cek concept drift: hubungan fitur–target berubah (pesaing promo besar).", "Bandingkan statistik input mingguan dengan data latih (PSI, mean, persentase kosong).", "Latih ulang dengan data terbaru; simpan versi model, data, dan parameter.", "Atur peringatan otomatis dan rencana rollback."],
    ["Tidak menyimpan versi model sehingga tidak bisa kembali.", "Kode fitur di produksi berbeda dengan di notebook (training-serving skew).", "Memantau hanya uptime API, bukan kualitas prediksi."],
    ["Apa itu training-serving skew?", "Bagaimana menyajikan model sebagai API sederhana?", "Kapan batch prediction lebih cocok dari real-time?"],
    ["Perbedaan cara menghitung fitur saat latihan dan saat produksi.", "Simpan model dengan joblib, muat di FastAPI, buat endpoint /prediksi yang menerima JSON.", "Saat keputusan tidak butuh detik itu juga, misalnya daftar telepon retensi harian."]);

  D("etika", "model rekrutmen yang bias",
    "Model penyaring CV dilatih dari data rekrutmen 10 tahun. Ternyata kandidat perempuan mendapat skor lebih rendah.", "",
    ["Cek kinerja per kelompok (selection rate, recall per gender).", "Cari proksi: nama klub, sekolah, jeda karier yang berkorelasi dengan gender.", "Perbaiki data dan fitur; pertimbangkan batasan fairness.", "Libatkan manusia dalam keputusan akhir dan dokumentasikan (model card).", "Patuhi UU PDP: dasar pemrosesan, minimisasi data, hak subjek data."],
    ["Menghapus kolom gender lalu menganggap model adil.", "Tidak memberi tahu kandidat bahwa ada keputusan otomatis.", "Menyimpan data pribadi lebih lama dari perlu."],
    ["Selection rate pria 30%, perempuan 18%. Rasio dampak?", "Apa isi model card?", "Contoh minimisasi data?"],
    ["18 / 30 = 0,6 — di bawah aturan 4/5 (0,8), tanda dampak tidak setara.", "Tujuan, data latih, kinerja per kelompok, batasan, dan cara pemakaian yang tidak dianjurkan.", "Hanya memakai kolom yang diperlukan, misalnya tidak menyimpan nomor KTP untuk model rekomendasi."]);

  D("kerjads", "portofolio data scientist yang meyakinkan",
    "Perekrut melihat puluhan proyek Titanic dan Iris. Anda ingin menonjol.", "",
    ["Pilih masalah nyata dengan data publik Indonesia atau data sendiri (harga pangan, ulasan e-commerce).", "Mulai dari pertanyaan bisnis dan baseline.", "Tunjukkan evaluasi yang jujur dan analisis kesalahan.", "Sajikan hasil: demo kecil (Streamlit) + README yang menjelaskan dampak.", "Tulis artikel singkat tentang pelajaran yang didapat."],
    ["Notebook tanpa narasi.", "Klaim akurasi tinggi dari data bocor.", "Menyalin tutorial tanpa modifikasi."],
    ["Apa isi README proyek?", "Bagaimana menjelaskan proyek dalam 30 detik?", "Satu proyek atau lima?"],
    ["Masalah, data, metode, hasil (angka), cara menjalankan, batasan.", "Masalah → pendekatan → hasil terukur → apa yang dipelajari.", "Lebih baik 2–3 proyek mendalam daripada banyak proyek dangkal."]);
})();
