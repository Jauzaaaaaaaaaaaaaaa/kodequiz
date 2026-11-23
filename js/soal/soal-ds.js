// ============ JALUR DATA SCIENTIST ============
// 14 modul dari fondasi statistik sampai model di produksi dan etika.
// Soal vr:"py" dijalankan sungguhan (pandas, scikit-learn) oleh node alat/cek-soal.js;
// soal hitungan memakai vjalan untuk menghitung ulang kuncinya.
// Soal baru selalu ditambahkan di BELAKANG array supaya ID progres tidak bergeser.

const MATERI_DS = [
{k:"peranDs",judul:"Peran Data Scientist & Siklus Proyek",materi:`
<p>Data scientist membangun alat untuk <b>memperkirakan</b> (prediksi) dan <b>mengukur efek</b> (eksperimen, inferensi kausal). Namun pekerjaan terbaiknya sering dimulai dengan pertanyaan: <i>apakah masalah ini butuh machine learning?</i></p>
<h4>Siklus CRISP-DM</h4>
<ol><li><b>Pemahaman bisnis</b>: keputusan apa yang dibantu model, dan berapa nilai rupiahnya?</li>
<li><b>Pemahaman data</b>: sumber, kualitas, bias, dan kapan setiap kolom tersedia.</li>
<li><b>Persiapan data</b>: pembersihan, fitur, pembagian latih-uji. Biasanya bagian terlama.</li>
<li><b>Pemodelan</b>: mulai dari <b>baseline</b> sederhana, baru model yang lebih rumit.</li>
<li><b>Evaluasi</b>: metrik teknis <i>dan</i> metrik bisnis, pada data yang belum pernah dilihat model.</li>
<li><b>Penerapan (deployment)</b>: model dipakai, dipantau, dan diperbarui.</li></ol>
<p>Prosesnya berputar: hasil evaluasi sering membawa kembali ke pemahaman bisnis.</p>
<h4>Baseline itu wajib</h4>
<p>Sebelum melatih model, hitung apa yang didapat dengan cara paling sederhana: menebak kelas mayoritas, memakai rata-rata, atau aturan bisnis yang sudah ada ("telepon pelanggan yang mengeluh 2 kali"). Model yang tidak jelas mengalahkan baseline tidak layak dibuat rumit.</p>
<div class="catatan"><b>Kisah nyata: Netflix Prize.</b> Pada 2006 Netflix menawarkan hadiah US$1 juta bagi tim yang bisa memperbaiki akurasi sistem rekomendasinya sebesar 10%. Tim BellKor's Pragmatic Chaos menang pada 2009. Namun Netflix kemudian menjelaskan di blog teknisnya (2012) bahwa gabungan model pemenang yang sangat rumit tidak diterapkan penuh: tambahan akurasinya tidak sebanding dengan biaya rekayasa untuk menjalankannya. Pelajaran: model terbaik di papan skor belum tentu model terbaik untuk bisnis.</div>`},

{k:"prob",judul:"Probabilitas & Teorema Bayes",materi:`
<p>Probabilitas bersyarat <code>P(A | B)</code> adalah peluang A <i>jika diketahui</i> B terjadi. Kesalahan klasik adalah menyamakan <code>P(A | B)</code> dengan <code>P(B | A)</code>.</p>
<h4>Teorema Bayes</h4>
<p><code>P(A | B) = P(B | A) × P(A) ÷ P(B)</code>. Dalam bahasa sehari-hari: keyakinan setelah melihat bukti = seberapa cocok bukti itu dengan dugaan × seberapa umum dugaan itu sejak awal.</p>
<h4>Abaikan base rate, dan kamu akan salah besar</h4>
<p>Sistem deteksi penipuan menangkap 90% transaksi curang (sensitivitas), tetapi juga keliru menandai 5% transaksi normal. Hanya 1% transaksi yang benar-benar curang. Jika sebuah transaksi ditandai, berapa peluang ia benar-benar curang? Banyak orang menjawab 90%. Jawaban sebenarnya sekitar 15%.</p>
<div class="bertahap" data-id="ds-bayes"><p class="bt-judul">Contoh bertahap: hitung dengan 10.000 transaksi</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Dari 10.000 transaksi, 1% curang = 100. Yang tertangkap: 90% × 100 = 90. Transaksi normal 9.900, yang keliru ditandai 5% × 9.900 = 495. Peluang curang jika ditandai = 90 ÷ (90 + 495) = <b>15,4%</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Jika tingkat penipuan naik menjadi 2% (200 transaksi curang), yang tertangkap 180 dan transaksi normal yang keliru ditandai 5% × 9.800 = <input class="bt-isian" data-jawab="490" aria-label="Positif palsu" inputmode="numeric"></div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Peluang curang jika ditandai = 180 ÷ (180 + 490) = <input class="bt-isian" data-jawab="26,9|26.9|26,9%|26.9%" aria-label="Peluang curang jika ditandai"> % (1 desimal)</div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Langkah 2: 0,05 × 9.800 = 490. Langkah 3: 180 ÷ 670 = 0,2687 → <b>26,9%</b>. Ketika kejadiannya langka, sebagian besar tanda bahaya adalah alarm palsu. Inilah alasan tim fraud memakai verifikasi lanjutan, bukan langsung memblokir.</p></details></div>`},

{k:"inferensi",judul:"Sampel, Interval Kepercayaan & Uji Hipotesis",materi:`
<p>Kita hampir tidak pernah melihat seluruh populasi. Inferensi statistik menjawab: <i>seberapa yakin kita bahwa angka dari sampel mencerminkan populasi?</i></p>
<h4>Bias sampel lebih berbahaya daripada sampel kecil</h4>
<p>Survei kepuasan yang hanya diisi pengguna aktif aplikasi tidak mewakili pengguna yang sudah pergi. Menambah ukuran sampel tidak memperbaiki bias; ia hanya membuat jawaban yang salah terlihat lebih pasti. Contoh klasik: Abraham Wald pada Perang Dunia II menyarankan agar pelindung pesawat dipasang justru di bagian yang <i>tidak</i> berlubang pada pesawat yang pulang, karena pesawat yang tertembak di bagian itu tidak pernah kembali (<i>survivorship bias</i>).</p>
<h4>Galat baku dan interval kepercayaan</h4>
<p>Menurut teorema limit pusat, rata-rata sampel tersebar mendekati normal di sekitar rata-rata populasi dengan <b>galat baku (SE) = s ÷ √n</b>. Interval kepercayaan 95% ≈ rata-rata ± 1,96 × SE. Artinya: jika proses pengambilan sampel diulang berkali-kali, sekitar 95% interval yang dibuat dengan cara ini akan memuat nilai sebenarnya.</p>
<h4>Dua jenis kesalahan</h4>
<table class="mini-pivot"><tr><th></th><th>Kenyataan: tidak ada efek</th><th>Kenyataan: ada efek</th></tr>
<tr><td>Kesimpulan: ada efek</td><td>Galat tipe I (positif palsu, α)</td><td>Benar (power = 1 − β)</td></tr>
<tr><td>Kesimpulan: tidak ada efek</td><td>Benar</td><td>Galat tipe II (negatif palsu, β)</td></tr></table>
<div class="bertahap" data-id="ds-se"><p class="bt-judul">Contoh bertahap: margin galat</p>
<p>Survei nilai belanja: simpangan baku s = Rp40 ribu.</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> n = 100 → SE = 40 ÷ √100 = 4; margin 95% = 1,96 × 4 = <b>Rp7,84 ribu</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> n = 400 → SE = 40 ÷ √400 = <input class="bt-isian" data-jawab="2" aria-label="Galat baku n 400" inputmode="numeric"> ribu.</div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Agar margin menjadi setengahnya lagi (SE = 1), berapa n yang dibutuhkan? <input class="bt-isian" data-jawab="1600|1.600" aria-label="Ukuran sampel" inputmode="numeric"></div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>√400 = 20, jadi SE = 2. Untuk SE = 1, √n = 40, n = <b>1.600</b>. Pola penting: <b>memperkecil margin menjadi setengah butuh sampel empat kali lipat</b>. Itulah sebabnya survei dan A/B test yang ingin mendeteksi efek kecil butuh sampel sangat besar.</p></details></div>`},

{k:"pandasDs",judul:"pandas untuk Eksplorasi Data (EDA)",materi:`
<p>EDA adalah percakapan pertama dengan data: bentuknya, isinya, kejanggalannya, dan pola awalnya. Lakukan sebelum membuat model apa pun.</p>
<pre><code>import pandas as pd
df = pd.read_csv("telko.csv")
df.shape                 # (baris, kolom)
df.info()                # tipe data dan jumlah non-null
df.describe()            # ringkasan angka
df.isna().sum()          # nilai kosong per kolom
df["paket"].value_counts(normalize=True)   # proporsi kategori
df.groupby("paket")["churn"].mean()        # churn rate per paket</code></pre>
<h4>Pertanyaan yang harus terjawab di EDA</h4>
<ul><li>Apa satu baris itu? (satu pelanggan? satu transaksi? satu hari?) Ini disebut <b>grain</b>.</li>
<li>Seberapa seimbang targetnya? Churn 3% butuh perlakuan berbeda dari churn 40%.</li>
<li>Kolom mana yang kosong, dan apakah kosongnya acak atau punya makna?</li>
<li>Kolom mana yang baru diketahui <i>setelah</i> kejadian yang ingin diprediksi? (calon kebocoran)</li></ul>
<h4>Operasi yang paling sering dipakai</h4>
<table class="mini-pivot"><tr><th>Tujuan</th><th>pandas</th><th>Setara SQL</th></tr>
<tr><td>saring baris</td><td><code>df[df["kota"].isin(["Jakarta", "Medan"])]</code></td><td>WHERE kota IN (…)</td></tr>
<tr><td>agregasi per kelompok</td><td><code>df.groupby("paket").agg(n=("id", "count"), churn=("churn", "mean"))</code></td><td>GROUP BY</td></tr>
<tr><td>gabung tabel</td><td><code>pd.merge(a, b, on="id", how="left")</code></td><td>LEFT JOIN</td></tr>
<tr><td>tabel silang</td><td><code>pd.pivot_table(df, index=…, columns=…, values=…, aggfunc="mean")</code></td><td>CASE WHEN + GROUP BY</td></tr></table>
<div class="catatan">Setiap soal kode di modul ini dijalankan sungguhan dengan pandas saat soal diverifikasi, jadi keluaran yang tertulis di kunci jawaban adalah keluaran nyata.</div>`},

{k:"fitur",judul:"Feature Engineering & Kebocoran Data",materi:`
<p>Model hanya bisa belajar dari apa yang kamu berikan. Fitur yang baik sering lebih berpengaruh daripada pilihan algoritma.</p>
<h4>Teknik umum</h4>
<table class="mini-pivot"><tr><th>Jenis data</th><th>Teknik</th><th>Contoh</th></tr>
<tr><td>Kategori tanpa urutan</td><td>One-hot encoding</td><td>paket → paket_Hemat, paket_Reguler, paket_Super</td></tr>
<tr><td>Kategori berurutan</td><td>Ordinal encoding</td><td>pendidikan SMA=1, D3=2, S1=3</td></tr>
<tr><td>Angka beda skala</td><td>Standardisasi (z-score)</td><td>wajib untuk K-Means, kNN, regresi berregularisasi; tidak perlu untuk pohon keputusan</td></tr>
<tr><td>Tanggal</td><td>Ekstraksi</td><td>hari dalam minggu, tanggal gajian, jarak ke Lebaran</td></tr>
<tr><td>Riwayat perilaku</td><td>Agregasi jendela waktu</td><td>jumlah transaksi 30 hari terakhir, recency</td></tr></table>
<h4>Kebocoran data (leakage)</h4>
<p>Kebocoran terjadi ketika model memakai informasi yang <b>tidak akan tersedia saat prediksi dibuat</b>. Hasil latihannya luar biasa, lalu gagal di dunia nyata.</p>
<ul><li><b>Kebocoran target:</b> fitur "jumlah_hari_telat_bulan_ini" untuk memprediksi gagal bayar bulan ini. Kolom itu baru terisi setelah kejadiannya.</li>
<li><b>Kebocoran waktu:</b> data latih dan uji diacak, sehingga model belajar dari masa depan.</li>
<li><b>Kebocoran praproses:</b> scaler atau imputasi dihitung dari seluruh data sebelum dibagi. Hitung hanya dari data latih, lalu terapkan ke data uji (gunakan <code>Pipeline</code> di scikit-learn).</li></ul>
<div class="catatan"><b>Tanda bahaya:</b> AUC 0,99 pada masalah yang sulit, atau satu fitur yang sangat dominan. Curigai dulu, rayakan kemudian.</div>`},

{k:"regresi",judul:"Regresi Linear & Interpretasi",materi:`
<p>Regresi linear memodelkan target angka: <code>ŷ = b₀ + b₁x₁ + b₂x₂ + …</code>. Kekuatannya: mudah dijelaskan.</p>
<h4>Membaca koefisien</h4>
<p>Model harga rumah: <code>harga (juta) = 150 + 8 × luas_m2 − 2 × jarak_km</code>. Artinya: setiap tambahan 1 m², harga rata-rata naik Rp8 juta, <i>dengan jarak tetap sama</i>. Koefisien menunjukkan hubungan, belum tentu sebab-akibat.</p>
<h4>Metrik</h4>
<table class="mini-pivot"><tr><th>Metrik</th><th>Arti</th><th>Catatan</th></tr>
<tr><td>MAE</td><td>rata-rata |aktual − prediksi|</td><td>mudah dipahami, satuan sama dengan target</td></tr>
<tr><td>RMSE</td><td>akar rata-rata galat kuadrat</td><td>menghukum galat besar lebih berat</td></tr>
<tr><td>R²</td><td>proporsi variasi yang dijelaskan</td><td>bisa negatif di data uji jika model lebih buruk dari rata-rata</td></tr></table>
<h4>Jebakan</h4>
<ul><li><b>Ekstrapolasi:</b> model yang dilatih pada rumah 30–200 m² tidak bisa dipercaya untuk rumah 2.000 m².</li>
<li><b>Multikolinearitas:</b> dua fitur yang sangat mirip (luas bangunan dan jumlah kamar) membuat koefisien tidak stabil.</li>
<li><b>Pola residual:</b> jika galat membentuk lengkung, hubungan sebenarnya tidak linear.</li></ul>
<div class="bertahap" data-id="ds-reg"><p class="bt-judul">Contoh bertahap: prediksi dan MAE</p>
<p>Model: <code>harga = 150 + 8 × luas − 2 × jarak</code> (juta rupiah).</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Rumah 60 m², jarak 10 km: 150 + 480 − 20 = <b>610 juta</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Rumah 45 m², jarak 5 km: 150 + 360 − 10 = <input class="bt-isian" data-jawab="500" aria-label="Prediksi harga" inputmode="numeric"> juta.</div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Harga aktual kedua rumah itu 650 dan 470 juta. MAE = <input class="bt-isian" data-jawab="35" aria-label="MAE" inputmode="numeric"> juta.</div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Galat absolut: |650 − 610| = 40 dan |470 − 500| = 30. MAE = (40 + 30) ÷ 2 = <b>35 juta</b>. Rata-rata prediksi meleset Rp35 juta, angka yang mudah dipahami tim properti.</p></details></div>`},

{k:"klasifikasi",judul:"Model Klasifikasi: Logistik, Pohon & Ensemble",materi:`
<p>Klasifikasi memprediksi kelas (churn atau tidak, gagal bayar atau tidak). Kebanyakan model mengeluarkan <b>skor peluang</b>, lalu <b>ambang</b> (threshold) mengubahnya menjadi keputusan.</p>
<table class="mini-pivot"><tr><th>Model</th><th>Cara kerja singkat</th><th>Kelebihan</th><th>Kekurangan</th></tr>
<tr><td>Regresi logistik</td><td>kombinasi linear fitur → fungsi sigmoid → peluang</td><td>cepat, mudah dijelaskan, baseline kuat</td><td>pola tidak linear perlu fitur tambahan</td></tr>
<tr><td>Pohon keputusan</td><td>memecah data dengan pertanyaan ya/tidak</td><td>mudah divisualkan</td><td>mudah overfit</td></tr>
<tr><td>Random forest</td><td>ratusan pohon dari sampel acak (bagging), hasilnya dirata-rata</td><td>stabil, sedikit penyetelan</td><td>lebih sulit dijelaskan</td></tr>
<tr><td>Gradient boosting (XGBoost, LightGBM)</td><td>pohon dibangun berurutan, tiap pohon memperbaiki galat sebelumnya</td><td>sering paling akurat untuk data tabel</td><td>perlu penyetelan dan waspada overfit</td></tr></table>
<h4>Memilih model di dunia kerja</h4>
<ul><li>Untuk keputusan yang harus dijelaskan kepada regulator atau nasabah (misal kredit), model yang bisa diinterpretasi sering lebih dipilih.</li>
<li>Untuk data tabel bisnis, gradient boosting biasanya kandidat kuat; deep learning lebih unggul pada gambar, suara, dan teks.</li>
<li>Selalu bandingkan dengan baseline dan dengan regresi logistik sederhana.</li></ul>`},

{k:"validasi",judul:"Validasi Model & Overfitting",materi:`
<p>Model dinilai dari kinerjanya pada data yang <b>belum pernah dilihat</b>. Nilai tinggi di data latih tidak membuktikan apa-apa.</p>
<h4>Pembagian data</h4>
<ul><li><b>Latih</b> untuk mempelajari pola, <b>validasi</b> untuk memilih model dan hyperparameter, <b>uji</b> disentuh sekali di akhir.</li>
<li><b>K-fold cross-validation:</b> data dibagi k bagian, model dilatih k kali dengan bagian berbeda sebagai validasi; hasilnya dirata-rata. Gunakan <i>stratified</i> agar proporsi kelas tetap sama.</li>
<li><b>Data waktu:</b> bagi berdasarkan waktu (latih masa lalu, uji masa depan), jangan diacak.</li></ul>
<h4>Overfitting dan underfitting</h4>
<table class="mini-pivot"><tr><th>Gejala</th><th>Diagnosis</th><th>Obat</th></tr>
<tr><td>Latih 99%, uji 70%</td><td>Overfitting (variance tinggi)</td><td>model lebih sederhana, regularisasi, data lebih banyak, fitur lebih sedikit</td></tr>
<tr><td>Latih 72%, uji 71%</td><td>Underfitting (bias tinggi)</td><td>fitur lebih baik, model lebih kompleks</td></tr></table>
<div class="catatan"><b>Kisah nyata: Google Flu Trends.</b> Layanan ini memperkirakan kasus flu dari pencarian Google. Pada musim flu 2012–2013, perkiraannya sekitar dua kali lipat angka resmi CDC (Lazer dkk., <i>Science</i>, 2014). Model menemukan kata pencarian yang kebetulan berkorelasi dengan musim dingin, bukan dengan flu, dan perilaku pencarian berubah dari tahun ke tahun. Pelajaran: korelasi dari data besar tanpa validasi yang jujur dan pemantauan bisa runtuh.</div>`},

{k:"evaluasi",judul:"Metrik Klasifikasi & Ambang Keputusan",materi:`
<p>Akurasi menyesatkan jika kelasnya tidak seimbang. Jika hanya 1% transaksi curang, model yang selalu menjawab "normal" sudah 99% akurat, tetapi tidak menangkap satu pun penipu.</p>
<table class="mini-pivot"><tr><th></th><th>Aktual positif</th><th>Aktual negatif</th></tr>
<tr><td>Prediksi positif</td><td>TP</td><td>FP</td></tr>
<tr><td>Prediksi negatif</td><td>FN</td><td>TN</td></tr></table>
<ul><li><b>Presisi</b> = TP ÷ (TP + FP): dari yang kita tandai, berapa yang benar?</li>
<li><b>Recall</b> = TP ÷ (TP + FN): dari yang seharusnya tertangkap, berapa yang tertangkap?</li>
<li><b>F1</b> = rata-rata harmonik presisi dan recall.</li>
<li><b>ROC-AUC</b>: peluang model memberi skor lebih tinggi pada contoh positif acak daripada negatif acak. Untuk kelas sangat langka, <b>PR-AUC</b> lebih informatif.</li></ul>
<h4>Ambang adalah keputusan bisnis</h4>
<p>Ambang 0,5 bukan aturan. Tentukan dari biaya: berapa biaya salah menandai (FP) dan berapa kerugian yang terlewat (FN)?</p>
<div class="bertahap" data-id="ds-ambang"><p class="bt-judul">Contoh bertahap: memilih ambang dari biaya</p>
<p>Biaya telepon retensi Rp20 ribu per pelanggan (dibayar untuk TP dan FP). Pelanggan churn yang berhasil dipertahankan menyelamatkan Rp200 ribu (anggap semua TP berhasil). Data: 24 pelanggan TelkoNesia.</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Ambang 0,4: TP 6, FP 1. Manfaat = 6 × 200 − (6 + 1) × 20 = 1.200 − 140 = <b>Rp1.060 ribu</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Ambang 0,3: TP 8, FP 1. Manfaat = 8 × 200 − (8 + 1) × 20 = <input class="bt-isian" data-jawab="1420|1.420" aria-label="Manfaat ambang 0,3" inputmode="numeric"> ribu.</div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Ambang 0,1: semua yang churn tertangkap (TP 11) tetapi FP 8. Manfaat = <input class="bt-isian" data-jawab="1820|1.820" aria-label="Manfaat ambang 0,1" inputmode="numeric"> ribu.</div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Ambang 0,3: 1.600 − 180 = <b>1.420</b>. Ambang 0,1: 2.200 − 380 = <b>1.820</b>. Karena nilai pelanggan (200) jauh lebih besar dari biaya telepon (20), ambang rendah lebih menguntungkan walau banyak salah tanda. Jika biayanya berupa diskon besar, hitungannya bisa berbalik. Inilah alasan ambang ditentukan bersama tim bisnis.</p></details></div>`},

{k:"unsup",judul:"Clustering & Reduksi Dimensi",materi:`
<p>Pembelajaran tanpa label (unsupervised) mencari struktur tanpa jawaban benar yang disediakan.</p>
<h4>K-Means</h4>
<ol><li>Pilih k pusat awal.</li><li>Masukkan setiap titik ke pusat terdekat.</li><li>Pindahkan pusat ke rata-rata anggotanya.</li><li>Ulangi sampai stabil.</li></ol>
<ul><li><b>Wajib standardisasi:</b> jika satu fitur dalam rupiah (jutaan) dan lainnya dalam hari, jarak akan didominasi rupiah.</li>
<li><b>Memilih k:</b> metode siku (elbow) pada inertia, skor silhouette, dan yang terpenting: apakah segmennya bisa dipakai bisnis?</li>
<li><b>K-Medoids</b> memakai titik data asli sebagai pusat dan lebih tahan pencilan dibanding K-Means.</li>
<li>Hasil awal acak bisa berbeda; tetapkan <code>random_state</code> dan jalankan beberapa kali (<code>n_init</code>).</li></ul>
<h4>PCA</h4>
<p>Principal Component Analysis memadatkan banyak fitur yang saling berkorelasi menjadi sedikit komponen yang menyimpan sebagian besar variasi. Berguna untuk visualisasi 2D dan mengurangi derau, tetapi komponennya lebih sulit dijelaskan kepada bisnis.</p>
<div class="catatan">Hubungkan dengan modul RFM di Jalur Data Analyst: segmentasi aturan (RFM) mudah dijelaskan; clustering bisa menemukan kelompok yang tidak terpikirkan. Di dunia kerja keduanya sering dibandingkan sebelum dipilih.</div>`},

{k:"kausal",judul:"Eksperimen & Inferensi Kausal",materi:`
<p>Prediksi menjawab "siapa yang akan churn?". Kausal menjawab "<b>apakah diskon membuat mereka bertahan?</b>". Pertanyaan kedua menentukan ke mana uang dibelanjakan.</p>
<h4>Korelasi bukan sebab-akibat</h4>
<p>Pengguna yang memakai fitur tabungan otomatis lebih jarang churn. Apakah fiturnya yang membuat mereka setia, atau orang yang memang setia lebih suka mencoba fitur baru? Variabel yang memengaruhi keduanya disebut <b>confounder</b>.</p>
<h4>Alat yang dipakai</h4>
<table class="mini-pivot"><tr><th>Metode</th><th>Ide</th><th>Kapan dipakai</th></tr>
<tr><td>A/B test (RCT)</td><td>pengacakan menyeimbangkan semua confounder</td><td>standar emas, jika memungkinkan dan etis</td></tr>
<tr><td>Difference-in-differences</td><td>bandingkan perubahan kelompok yang terkena kebijakan dengan perubahan kelompok yang tidak</td><td>kebijakan berlaku di wilayah tertentu</td></tr>
<tr><td>Regression discontinuity</td><td>bandingkan tepat di sekitar batas aturan</td><td>misal diskon untuk belanja ≥ Rp500 ribu</td></tr>
<tr><td>Uplift modeling</td><td>prediksi <i>efek tambahan</i> dari tindakan per orang</td><td>memilih siapa yang layak diberi promo</td></tr></table>
<p>Uplift penting karena memberi promo kepada orang yang tetap akan membeli tanpa promo hanyalah membakar uang. Target terbaik adalah <i>persuadables</i>: yang membeli <b>hanya jika</b> diberi promo.</p>
<div class="bertahap" data-id="ds-did"><p class="bt-judul">Contoh bertahap: difference-in-differences</p>
<p>Gratis ongkir diberlakukan di Surabaya mulai April; Semarang tidak. Pesanan harian rata-rata:</p>
<table class="mini-pivot"><tr><th></th><th>Maret</th><th>April</th></tr><tr><td>Surabaya</td><td>1.000</td><td>1.300</td></tr><tr><td>Semarang</td><td>800</td><td>920</td></tr></table>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Perubahan Surabaya = 1.300 − 1.000 = <b>300</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Perubahan Semarang = 920 − 800 = <input class="bt-isian" data-jawab="120" aria-label="Perubahan Semarang" inputmode="numeric"></div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Perkiraan efek gratis ongkir = <input class="bt-isian" data-jawab="180" aria-label="Efek DiD" inputmode="numeric"> pesanan per hari.</div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Semarang naik 120 tanpa kebijakan (misal karena musim). Efek gratis ongkir = 300 − 120 = <b>180</b>. Asumsi pentingnya: tanpa kebijakan, kedua kota akan bergerak sejajar (<i>parallel trends</i>). Periksa tren beberapa bulan sebelumnya untuk mengujinya.</p></details></div>`},

{k:"mlops",judul:"Model di Produksi: Deploy, Monitoring & Drift",materi:`
<p>Model yang hanya ada di notebook belum memberi nilai. Tetapi model di produksi juga bisa merugikan jika tidak dipantau.</p>
<h4>Cara menjalankan model</h4>
<ul><li><b>Batch:</b> skor dihitung berkala (misal setiap malam untuk daftar pelanggan berisiko churn).</li>
<li><b>Real-time (online):</b> skor dihitung saat kejadian (misal deteksi penipuan saat transaksi).</li>
<li><b>Shadow deployment:</b> model baru berjalan diam-diam di samping model lama tanpa memengaruhi keputusan, untuk dibandingkan dulu.</li></ul>
<h4>Dua jenis pergeseran</h4>
<ul><li><b>Data drift:</b> sebaran input berubah (misal pengguna baru dari kota yang belum pernah ada di data latih).</li>
<li><b>Concept drift:</b> hubungan input dan target berubah (misal pola penipuan berubah setelah penipu belajar menghindari sistem).</li></ul>
<p>Pantau: sebaran fitur (misal Population Stability Index), sebaran skor, metrik kinerja begitu label tersedia, dan metrik bisnis. Tetapkan kapan model dilatih ulang dan siapa yang bertanggung jawab.</p>
<div class="catatan"><b>Kisah nyata: Zillow Offers.</b> Zillow membeli rumah berdasarkan estimasi harga dari modelnya, lalu menjualnya kembali. Pada 2 November 2021 Zillow mengumumkan penutupan bisnis itu, mencatat penurunan nilai persediaan sekitar US$304 juta pada kuartal III 2021, dan memangkas sekitar 25% karyawan. CEO-nya menyebut ketidakpastian dalam memperkirakan harga rumah jauh melampaui perkiraan mereka. Pelajaran: ketika keputusan bernilai besar diambil otomatis dari prediksi, perubahan kondisi pasar (drift) dan ketidakpastian prediksi harus dikelola, bukan diabaikan.</div>`},

{k:"etika",judul:"Etika, Bias & UU PDP",materi:`
<p>Model belajar dari data masa lalu, termasuk ketidakadilan masa lalu.</p>
<h4>Sumber bias</h4>
<ul><li><b>Bias historis:</b> data mencerminkan keputusan lama yang tidak adil.</li>
<li><b>Bias sampel:</b> kelompok tertentu kurang terwakili (misal pengguna di luar Jawa).</li>
<li><b>Bias pengukuran:</b> proksi yang buruk, misal memakai jenis ponsel sebagai pengganti pendapatan.</li></ul>
<div class="catatan"><b>Kisah nyata: alat rekrutmen Amazon.</b> Reuters (2018) melaporkan Amazon menghentikan alat penyaring CV berbasis machine learning. Model itu dilatih dari CV yang masuk selama sekitar 10 tahun, yang mayoritas dari pria, sehingga menurunkan nilai CV yang memuat kata "women's" (misal "women's chess club captain"). Menghapus kolom jenis kelamin tidak cukup, karena kata-kata lain bisa menjadi proksinya.</div>
<h4>Keadilan bisa diukur, tetapi definisinya bisa saling bertentangan</h4>
<ul><li><b>Demographic parity:</b> tingkat persetujuan sama untuk semua kelompok.</li>
<li><b>Equal opportunity:</b> recall sama untuk semua kelompok (yang layak sama-sama tertangkap).</li></ul>
<p>Dalam banyak kasus keduanya tidak bisa terpenuhi sekaligus. Pilihan definisi adalah keputusan nilai yang harus dibicarakan dengan bisnis, hukum, dan pihak yang terdampak.</p>
<h4>Kerangka hukum Indonesia</h4>
<p><b>UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi</b> mengatur pemrosesan data pribadi. Pasal 10 ayat (1) memberi subjek data hak mengajukan keberatan atas pengambilan keputusan yang <b>hanya</b> didasarkan pada pemrosesan otomatis, termasuk pemrofilan, yang menimbulkan akibat hukum atau berdampak signifikan. Bagi data scientist, ini berarti: siapkan penjelasan atas keputusan model, sediakan jalur peninjauan manusia untuk keputusan penting (kredit, rekrutmen), dan pakai data seminimal yang diperlukan.</p>
<h4>Penjelasan model</h4>
<p>Teknik seperti SHAP memperkirakan kontribusi tiap fitur pada satu prediksi ("skor kredit turun terutama karena rasio cicilan terhadap pendapatan"). Penjelasan membantu menemukan bias dan membangun kepercayaan, tetapi tidak otomatis membuat model adil.</p>`},

{k:"kerjads",judul:"Dunia Kerja Data Scientist & Portofolio",materi:`
<h4>Seperti apa pekerjaannya</h4>
<p>Di Indonesia, peran data scientist banyak ada di e-commerce, fintech dan perbankan, telekomunikasi, logistik, dan perusahaan teknologi. Di banyak perusahaan, sebagian besar pekerjaan DS tetap berupa SQL, analisis, dan eksperimen; membangun model hanya sebagian. Di perusahaan global, peran sering dibedakan menjadi <i>DS analytics</i> (eksperimen, metrik, produk) dan <i>DS machine learning</i> (model di produksi).</p>
<h4>Tahapan wawancara yang umum</h4>
<ol><li><b>Statistik & probabilitas:</b> Bayes, interval kepercayaan, A/B test, bias.</li>
<li><b>Konsep ML:</b> overfitting, metrik, kebocoran, memilih model, menjelaskan trade-off.</li>
<li><b>Koding:</b> SQL dan Python/pandas (seperti tantangan Lab), terkadang algoritma dasar.</li>
<li><b>Studi kasus / product sense:</b> "Bagaimana kamu membangun model churn untuk operator seluler?" Jawab dengan kerangka: tujuan bisnis → definisi label → fitur → validasi → metrik → penerapan → pemantauan.</li>
<li><b>Take-home:</b> notebook rapi, keputusan yang dijelaskan, dan kesimpulan untuk pembaca non-teknis.</li></ol>
<h4>Portofolio yang meyakinkan</h4>
<ul><li>Satu proyek <b>end-to-end</b> lebih kuat daripada sepuluh notebook kompetisi: masalah bisnis, data, baseline, model, evaluasi jujur, dan aplikasi sederhana (misal Streamlit) atau laporan.</li>
<li>Tulis <b>model card</b>: tujuan, data, metrik, keterbatasan, dan risiko bias.</li>
<li>Pakai data publik Indonesia (BPS, portal Satu Data Indonesia) atau data simulasi, bukan data perusahaan tempat magang.</li></ul>`},
];

const SOAL_DS = [
// ---- peranDs ----
{k:"peranDs",t:"mc",lv:1,q:"Urutan fase CRISP-DM yang benar dimulai dari…",o:["Pemahaman bisnis → pemahaman data → persiapan data → pemodelan → evaluasi → penerapan","Pemodelan → evaluasi → pemahaman bisnis","Persiapan data → pemodelan → penerapan","Pengumpulan data → deep learning → dashboard"],a:0,
 e:"CRISP-DM selalu dimulai dari pemahaman bisnis. Model yang akurat untuk pertanyaan yang salah tidak berguna.",
 w:[null,"Memulai dari model sebelum memahami masalah adalah kesalahan klasik.","Melewatkan pemahaman bisnis dan data.","Bukan fase CRISP-DM, dan deep learning bukan keharusan."]},
{k:"peranDs",t:"mc",lv:2,q:"Data churn: 92% pelanggan bertahan. Model barumu akurat 91%. Kesimpulannya…",o:["Model lebih buruk dari baseline 'tebak semua bertahan' (92%); periksa metrik lain seperti recall dan lihat kembali modelnya","Model sangat bagus karena di atas 90%","Model siap dipakai","Akurasi tidak pernah relevan"],a:0,
 e:"Baseline kelas mayoritas memberi 92% tanpa usaha. Untuk kelas tidak seimbang, akurasi bukan metrik utama; lihat presisi, recall, dan PR-AUC.",
 w:[null,"Angka 91% tidak berarti apa-apa tanpa pembanding.","Belum mengalahkan baseline paling sederhana.","Akurasi tetap informatif, asalkan dibandingkan dengan baseline."]},
{k:"peranDs",t:"mc",lv:2,q:"Tim CS ingin memprioritaskan pelanggan yang mengeluh lebih dari 2 kali bulan ini. Pendekatan pertama yang paling masuk akal:",o:["Pakai aturan sederhana itu dulu sebagai baseline, ukur hasilnya, baru pertimbangkan model ML jika ada ruang perbaikan yang berarti","Langsung membangun deep learning","Menolak karena bukan machine learning","Menunggu data 5 tahun"],a:0,
 e:"Aturan bisnis yang jelas sering sudah memberi sebagian besar nilai. ML layak bila terbukti menambah nilai di atas aturan itu.",
 w:[null,"Kompleksitas tanpa bukti manfaat menambah biaya dan risiko.","Aturan sederhana sah dan sering efektif.","Tidak perlu menunggu; aturan bisa diuji sekarang."]},
{k:"peranDs",t:"mc",lv:2,q:"Pelajaran dari kisah Netflix Prize adalah…",o:["Tambahan akurasi harus sebanding dengan biaya membangun dan merawat sistemnya","Kompetisi data selalu sia-sia","Model sederhana selalu lebih akurat","Netflix tidak memakai machine learning"],a:0,
 e:"Netflix menilai gabungan model pemenang terlalu mahal untuk diterapkan penuh dibanding tambahan akurasinya. Keputusan memakai model adalah keputusan bisnis.",
 w:[null,"Kompetisi itu menghasilkan banyak teknik yang berguna.","Model pemenang justru sangat rumit dan akurat.","Netflix sangat bergantung pada sistem rekomendasi."]},
{k:"peranDs",t:"mc",lv:1,q:"Pertanyaan pertama yang harus dijawab sebelum membangun model prediksi churn adalah…",o:["Keputusan apa yang akan diambil dari prediksi itu, dan berapa nilainya bagi bisnis","Algoritma apa yang paling canggih","Berapa GPU yang dibutuhkan","Bahasa pemrograman apa yang dipakai"],a:0,
 e:"Jika tidak ada tindakan (misal program retensi) yang mengikuti prediksi, model churn hanya menjadi angka di dashboard.",
 w:[null,"Algoritma dipilih belakangan, setelah masalah jelas.","Kebutuhan komputasi ditentukan setelah pendekatan jelas.","Alat bukan pertanyaan pertama."]},
{k:"peranDs",t:"is",lv:1,q:"Kerangka standar proses proyek data mining 6 fase yang dimulai dari pemahaman bisnis disebut… (singkatan)",a:["CRISP-DM","CRISPDM","CRISP DM"],
 e:"CRISP-DM = Cross-Industry Standard Process for Data Mining."},

// ---- prob ----
{k:"prob",t:"mc",lv:2,q:"Tes fraud: sensitivitas 90%, positif palsu 5%, dan penipuan hanya 1% dari transaksi. Jika transaksi ditandai, peluang benar-benar curang sekitar…",o:["15%","90%","95%","50%"],a:0,vr:"py",vjalan:"tp = 0.01 * 0.9\nfp = 0.99 * 0.05\nprint(str(round(tp / (tp + fp) * 100)) + '%')",
 e:"Dari 10.000 transaksi: 90 curang tertangkap, 495 normal keliru ditandai. 90 ÷ 585 ≈ 15,4%. Karena penipuan langka, sebagian besar tanda adalah alarm palsu.",
 w:[null,"90% adalah P(ditandai | curang), bukan P(curang | ditandai).","95% adalah spesifisitas, bukan jawaban pertanyaan ini.","Tidak ada dasar angka 50%."]},
{k:"prob",t:"mc",lv:1,q:"P(ditandai | curang) dan P(curang | ditandai) adalah…",o:["Dua peluang yang berbeda dan bisa sangat jauh nilainya","Selalu sama","Selalu berjumlah 1","Tidak bisa dihitung"],a:0,
 e:"Menyamakan keduanya disebut kekeliruan peluang terbalik (confusion of the inverse). Teorema Bayes menghubungkan keduanya lewat base rate.",
 w:[null,"Hanya sama jika base rate dan peluang ditandai sama.","Tidak ada hubungan penjumlahan seperti itu.","Bisa dihitung dengan Bayes."]},
{k:"prob",t:"mc",lv:2,q:"Dua pelanggan dipilih acak. Peluang masing-masing churn 0,2 dan kejadiannya saling bebas. Peluang keduanya churn adalah…",o:["0,04","0,4","0,2","0,36"],a:0,vr:"py",vjalan:"print(str(round(0.2 * 0.2, 2)).replace('.', ','))",
 e:"Untuk kejadian saling bebas, P(A dan B) = P(A) × P(B) = 0,2 × 0,2 = 0,04.",
 w:[null,"Itu hasil menjumlahkan, bukan mengalikan.","Itu peluang satu orang saja.","0,36 tidak muncul dari perhitungan ini; peluang keduanya TIDAK churn adalah 0,8 × 0,8 = 0,64."]},
{k:"prob",t:"is",lv:2,q:"Dari 10.000 transaksi, 200 curang (2%). Sistem menandai 90% yang curang dan 5% yang normal. Berapa transaksi normal yang keliru ditandai?",a:["490"],vr:"py",vjalan:"print(round((10000 - 200) * 0.05))",
 e:"Transaksi normal = 9.800. 5% × 9.800 = 490. Bandingkan dengan 180 yang curang dan tertangkap: alarm palsu tetap lebih banyak."},
{k:"prob",t:"mc",lv:3,q:"Kenapa tim fraud di bank tidak langsung memblokir setiap transaksi yang ditandai model?",o:["Karena kejadian langka membuat banyak tanda adalah positif palsu; verifikasi tambahan (OTP, telepon) menekan kerugian nasabah jujur","Karena model fraud tidak pernah akurat","Karena pemblokiran dilarang undang-undang","Karena nasabah selalu jujur"],a:0,
 e:"Dengan base rate rendah, presisi model sering rendah walau sensitivitasnya tinggi. Langkah verifikasi berlapis adalah keputusan desain berbasis probabilitas.",
 w:[null,"Model bisa sangat berguna; masalahnya pada cara memakai skornya.","Tidak ada larangan umum seperti itu.","Fraud itu nyata, karena itu sistemnya dibangun."]},
{k:"prob",t:"mc",lv:1,q:"Peluang bersyarat P(churn | keluhan ≥ 2) dibaca…",o:["Peluang churn di antara pelanggan yang mengeluh minimal 2 kali","Peluang mengeluh minimal 2 kali di antara yang churn","Peluang churn dan mengeluh bersama-sama","Peluang tidak churn"],a:0,
 e:"Yang di kanan garis tegak adalah kondisi yang sudah diketahui. Di data TelkoNesia, nilainya 85,7% (6 dari 7).",
 w:[null,"Itu P(keluhan ≥ 2 | churn), arah sebaliknya.","Itu peluang gabungan P(churn ∩ keluhan ≥ 2).","Itu komplemen."]},

// ---- inferensi ----
{k:"inferensi",t:"mc",lv:2,q:"Survei kepuasan dikirim lewat notifikasi aplikasi dan diisi 20.000 orang. Kelemahan utamanya adalah…",o:["Bias sampel: hanya pengguna yang masih aktif dan mau mengisi yang terwakili; ukuran sampel besar tidak memperbaikinya","Sampelnya terlalu kecil","Survei selalu tidak valid","Tidak ada kelemahan"],a:0,
 e:"Pengguna yang sudah berhenti atau kecewa berat tidak menerima atau tidak mengisi survei. Sampel besar yang bias memberi jawaban salah dengan keyakinan tinggi.",
 w:[null,"20.000 bukan sampel kecil; masalahnya siapa yang mengisi.","Survei yang dirancang baik bisa valid.","Ada bias seleksi yang serius."]},
{k:"inferensi",t:"mc",lv:2,q:"Simpangan baku 40 dan n = 100. Galat baku rata-ratanya adalah…",o:["4","0,4","40","400"],a:0,vr:"py",vjalan:"print(round(40 / 100 ** 0.5))",
 e:"SE = s ÷ √n = 40 ÷ 10 = 4.",
 w:[null,"Itu 40 ÷ 100, lupa akar.","Itu simpangan bakunya sendiri.","Itu 40 × 10."]},
{k:"inferensi",t:"mc",lv:3,q:"Untuk memperkecil margin galat menjadi setengahnya, ukuran sampel harus…",o:["Dikali 4","Dikali 2","Dikali 1,5","Dibagi 2"],a:0,
 e:"Margin sebanding dengan 1 ÷ √n. Agar 1 ÷ √n menjadi setengah, √n harus dua kali lipat, sehingga n empat kali lipat.",
 w:[null,"Dua kali sampel hanya memperkecil margin sekitar 29%.","Tidak cukup.","Mengurangi sampel justru memperbesar margin."]},
{k:"inferensi",t:"mc",lv:2,q:"Interval kepercayaan 95% untuk rata-rata belanja: Rp242–258 ribu. Tafsiran yang benar adalah…",o:["Jika prosedur sampling ini diulang berkali-kali, sekitar 95% interval yang dihasilkan akan memuat rata-rata populasi yang sebenarnya","95% pelanggan belanja antara 242 dan 258 ribu","Rata-rata populasi pasti 250 ribu","Ada 5% data yang salah"],a:0,
 e:"Interval kepercayaan menggambarkan ketidakpastian estimasi rata-rata, bukan sebaran belanja individu.",
 w:[null,"Itu tafsiran sebaran individu; sebarannya jauh lebih lebar.","Titik tengah hanyalah estimasi.","5% bukan data yang salah."]},
{k:"inferensi",t:"mc",lv:2,q:"Menyimpulkan 'promo tidak berefek' padahal sebenarnya berefek disebut…",o:["Galat tipe II (negatif palsu)","Galat tipe I (positif palsu)","Overfitting","Leakage"],a:0,
 e:"Galat tipe II sering terjadi bila sampel terlalu kecil (power rendah).",
 w:[null,"Tipe I adalah menyatakan ada efek padahal tidak ada.","Overfitting adalah istilah pemodelan.","Leakage adalah kebocoran informasi ke model."]},
{k:"inferensi",t:"mc",lv:1,q:"Pelajaran Abraham Wald tentang pesawat yang pulang dengan lubang peluru adalah…",o:["Survivorship bias: data hanya berasal dari yang 'selamat', jadi bagian yang tidak berlubang justru kemungkinan paling fatal","Pasang pelindung di bagian yang paling banyak lubang","Data perang tidak bisa dianalisis","Pesawat yang pulang tidak perlu diperbaiki"],a:0,
 e:"Pesawat yang tertembak di bagian vital tidak kembali, jadi tidak tercatat. Di bisnis: menganalisis hanya pelanggan yang bertahan menyembunyikan alasan pelanggan pergi.",
 w:[null,"Itu kesimpulan naif yang justru dikoreksi Wald.","Datanya bisa dianalisis asal biasnya disadari.","Bukan pelajaran yang dimaksud."]},

// ---- pandasDs ----
{k:"pandasDs",t:"mc",lv:1,kode:"import pandas as pd\ndf = pd.DataFrame({\"paket\": [\"Hemat\", \"Super\", \"Hemat\", \"Reguler\", \"Hemat\"],\n                   \"churn\": [1, 0, 0, 1, 1]})\nprint(df[\"paket\"].value_counts().iloc[0])",vr:"py",
 q:"Apa keluaran kode ini?",o:["3","5","1","Hemat"],a:0,
 e:"value_counts() menghitung kemunculan tiap nilai, terurut dari yang terbanyak. Baris pertama adalah Hemat dengan 3 kemunculan; .iloc[0] mengambil angkanya.",
 w:[null,"5 adalah jumlah baris.","1 adalah hitungan Super atau Reguler.",".iloc[0] mengambil nilai hitungannya, bukan labelnya."]},
{k:"pandasDs",t:"mc",lv:2,kode:"import pandas as pd\ndf = pd.DataFrame({\"paket\": [\"Hemat\", \"Super\", \"Hemat\", \"Reguler\", \"Hemat\"],\n                   \"churn\": [1, 0, 0, 1, 1]})\nprint(round(df.groupby(\"paket\")[\"churn\"].mean()[\"Hemat\"], 2))",vr:"py",
 q:"Berapa churn rate paket Hemat yang dicetak?",o:["0.67","0.6","2","0.33"],a:0,
 e:"Paket Hemat: churn 1, 0, 1 → rata-rata 2 ÷ 3 ≈ 0,67. Rata-rata dari kolom 0/1 adalah proporsi.",
 w:[null,"0,6 adalah churn rate seluruh data (3 ÷ 5).","2 adalah jumlah churn, bukan rata-rata.","0,33 adalah proporsi yang bertahan."]},
{k:"pandasDs",t:"mc",lv:2,kode:"import pandas as pd\ndf = pd.DataFrame({\"kota\": [\"Jakarta\", None, \"Medan\", None], \"nilai\": [10, 20, None, 40]})\nprint(df.isna().sum().sum())",vr:"py",
 q:"Apa keluarannya?",o:["3","2","1","4"],a:0,
 e:"isna() menandai nilai kosong; .sum() pertama menghitung per kolom (kota 2, nilai 1), .sum() kedua menjumlahkan semuanya: 3.",
 w:[null,"2 hanya kolom kota.","1 hanya kolom nilai.","Hanya 3 sel yang kosong."]},
{k:"pandasDs",t:"mc",lv:2,kode:"import pandas as pd\na = pd.DataFrame({\"id\": [1, 2, 3]})\nb = pd.DataFrame({\"id\": [1, 1, 2], \"trx\": [5, 7, 9]})\nprint(len(pd.merge(a, b, on=\"id\", how=\"left\")))",vr:"py",
 q:"Berapa jumlah baris hasil merge?",o:["4","3","5","2"],a:0,
 e:"id 1 cocok dengan dua baris (2 baris), id 2 dengan satu baris (1), id 3 tidak cocok tetapi tetap ada karena left join (1). Total 4. Hasil merge bisa lebih banyak dari tabel kiri jika kuncinya tidak unik di tabel kanan.",
 w:[null,"Merge tidak menjamin jumlah baris sama dengan tabel kiri.","Tidak ada baris tambahan selain dari kecocokan id 1.","Left join mempertahankan id 3."]},
{k:"pandasDs",t:"mc",lv:3,kode:"import pandas as pd\ndf = pd.DataFrame({\"tgl\": pd.to_datetime([\"2026-03-01\", \"2026-03-07\", \"2026-03-14\"])})\nprint(df[\"tgl\"].dt.day_name().tolist()[0])",vr:"py",
 q:"1 Maret 2026 jatuh pada hari apa menurut kode ini?",o:["Sunday","Saturday","Monday","Friday"],a:0,
 e:"Kolom bertipe datetime punya aksesor .dt untuk mengambil hari, bulan, minggu, dan lainnya. Fitur hari dalam minggu sering berguna karena perilaku belanja akhir pekan berbeda.",
 w:[null,"Bukan Sabtu; cek kalender Maret 2026.","Bukan Senin.","Bukan Jumat."]},
{k:"pandasDs",t:"mc",lv:1,q:"Hal pertama yang perlu dipastikan saat menerima dataset baru adalah…",o:["Apa arti satu baris (grain): satu pelanggan, satu transaksi, atau satu hari","Warna grafik yang akan dipakai","Algoritma yang paling akurat","Jumlah kolom maksimum"],a:0,
 e:"Salah memahami grain menyebabkan salah agregasi dan fitur yang keliru, misalnya menghitung rata-rata per transaksi padahal yang diminta per pelanggan.",
 w:[null,"Visualisasi datang belakangan.","Algoritma dipilih setelah data dipahami.","Jumlah kolom bukan hal utama."]},

// ---- fitur ----
{k:"fitur",t:"mc",lv:2,q:"Model gagal bayar mendapat AUC 0,99. Salah satu fiturnya 'jumlah_hari_telat_bulan_ini'. Diagnosis yang paling mungkin:",o:["Kebocoran target: fitur itu baru diketahui setelah gagal bayar terjadi","Model sangat bagus dan siap dipakai","Underfitting","Data terlalu sedikit"],a:0,
 e:"Fitur yang terbentuk setelah atau bersamaan dengan kejadian yang diprediksi membuat model 'menyontek'. Di produksi, kolom itu belum tersedia saat prediksi dibuat.",
 w:[null,"Nilai terlalu sempurna adalah tanda bahaya.","Underfitting memberi nilai rendah, bukan tinggi.","Ukuran data tidak menjelaskan AUC 0,99."]},
{k:"fitur",t:"mc",lv:2,q:"StandardScaler dihitung dari seluruh data sebelum dibagi latih-uji. Masalahnya:",o:["Kebocoran praproses: statistik data uji ikut memengaruhi data latih; seharusnya fit scaler hanya pada data latih","Tidak ada masalah","Scaler tidak boleh dipakai","Data uji harus distandardisasi dengan rata-rata 1"],a:0,
 e:"Rata-rata dan simpangan baku data uji bocor ke proses latih. Pakai Pipeline scikit-learn agar fit hanya pada data latih di setiap lipatan validasi.",
 w:[null,"Kebocoran kecil pun membuat evaluasi terlalu optimis.","Scaler berguna, asal cara pakainya benar.","Bukan cara standardisasi yang benar."]},
{k:"fitur",t:"mc",lv:1,q:"Kolom 'paket' berisi Hemat, Reguler, Super tanpa urutan yang bermakna untuk model linear. Encoding yang tepat:",o:["One-hot encoding","Mengganti dengan angka 1, 2, 3 begitu saja","Menghapus kolom","Mengubah menjadi huruf besar"],a:0,
 e:"Angka 1, 2, 3 menyiratkan jarak dan urutan (Super = 3 × Hemat) yang tidak nyata bagi model linear. One-hot membuat kolom biner terpisah.",
 w:[null,"Menciptakan urutan palsu.","Membuang informasi yang mungkin penting.","Tidak mengubah apa pun bagi model."]},
{k:"fitur",t:"mc",lv:2,q:"Fitur mana yang tidak perlu distandardisasi jika modelnya random forest?",o:["Semua fitur angka, karena pohon keputusan tidak peka terhadap skala","Hanya kolom rupiah","Hanya kolom umur","Tidak ada; random forest wajib standardisasi"],a:0,
 e:"Pohon memecah berdasarkan ambang (misal nilai > 500.000), sehingga mengubah skala tidak mengubah pemecahan. Standardisasi penting untuk model berbasis jarak (K-Means, kNN) dan regularisasi.",
 w:[null,"Bukan hanya rupiah; semua fitur tidak terpengaruh.","Sama, berlaku untuk semua fitur.","Pohon keputusan tidak peka skala."]},
{k:"fitur",t:"mc",lv:3,kode:"import pandas as pd\ndf = pd.DataFrame({\"paket\": [\"Hemat\", \"Super\", \"Reguler\", \"Hemat\"]})\nprint(pd.get_dummies(df, columns=[\"paket\"]).shape[1])",vr:"py",
 q:"Berapa jumlah kolom setelah one-hot encoding ini?",o:["3","1","4","2"],a:0,
 e:"Ada tiga kategori unik, jadi get_dummies membuat 3 kolom: paket_Hemat, paket_Reguler, paket_Super. Kolom asli diganti.",
 w:[null,"Kolom asli diganti oleh kolom-kolom baru.","4 adalah jumlah baris.","Ada tiga kategori unik."]},
{k:"fitur",t:"mc",lv:2,q:"Contoh fitur yang aman (tidak bocor) untuk memprediksi churn bulan depan adalah…",o:["Jumlah transaksi dalam 30 hari sebelum tanggal prediksi","Status 'berhenti berlangganan' bulan depan","Alasan berhenti dari survei keluar","Tanggal penutupan akun"],a:0,
 e:"Fitur harus dihitung dari informasi yang tersedia sebelum titik prediksi. Tiga pilihan lain baru ada setelah pelanggan churn.",
 w:[null,"Itu targetnya sendiri.","Survei keluar diisi setelah churn.","Penutupan akun adalah hasil churn."]},

// ---- regresi ----
{k:"regresi",t:"mc",lv:1,q:"Model: harga (juta) = 150 + 8 × luas − 2 × jarak. Prediksi rumah 45 m² berjarak 5 km adalah…",o:["500 juta","510 juta","360 juta","490 juta"],a:0,vr:"py",vjalan:"print(str(150 + 8 * 45 - 2 * 5) + ' juta')",
 e:"150 + 8 × 45 − 2 × 5 = 150 + 360 − 10 = 500.",
 w:[null,"Lupa mengurangi efek jarak (−10).","Itu hanya 8 × 45.","Pengurangan jarak dihitung dua kali."]},
{k:"regresi",t:"mc",lv:2,q:"Arti koefisien −2 pada jarak_km adalah…",o:["Setiap 1 km lebih jauh, harga rata-rata lebih rendah Rp2 juta, dengan luas tetap sama","Jarak menyebabkan harga turun 2%","Rumah yang jauh selalu lebih murah","Jarak tidak berpengaruh"],a:0,
 e:"Koefisien regresi berganda dibaca 'dengan variabel lain dianggap tetap'. Ia menunjukkan hubungan, belum tentu sebab-akibat.",
 w:[null,"Satuannya juta rupiah, bukan persen, dan belum tentu kausal.","'Selalu' terlalu kuat; ada variasi di sekitar garis.","Koefisien −2 menunjukkan ada hubungan."]},
{k:"regresi",t:"mc",lv:2,q:"Aktual 650 dan 470, prediksi 610 dan 500. Berapa MAE-nya?",o:["35","70","1.250","37"],a:0,vr:"py",vjalan:"print(round((abs(650 - 610) + abs(470 - 500)) / 2))",
 e:"(|650 − 610| + |470 − 500|) ÷ 2 = (40 + 30) ÷ 2 = 35.",
 w:[null,"Itu jumlah galat, belum dibagi 2.","Itu rata-rata galat kuadrat (1.600 + 900) ÷ 2, bukan MAE.","Mungkin RMSE dibulatkan (≈35,4); MAE persis 35."]},
{k:"regresi",t:"mc",lv:3,kode:"import numpy as np\nx = np.array([1, 2, 3, 4])\ny = np.array([3, 5, 7, 9])\nb1, b0 = np.polyfit(x, y, 1)\nprint(round(b1), round(b0))",vr:"py",
 q:"Kode menyesuaikan garis lurus. Apa keluarannya (kemiringan lalu intersep)?",o:["2 1","1 2","3 0","2 3"],a:0,
 e:"Datanya persis y = 2x + 1. np.polyfit derajat 1 mengembalikan [kemiringan, intersep].",
 w:[null,"Urutannya tertukar; polyfit mengembalikan koefisien pangkat tertinggi dulu.","Garis y = 3x tidak melewati (1, 3) dan (2, 5) sekaligus.","Intersepnya 1, bukan 3."]},
{k:"regresi",t:"mc",lv:2,q:"R² di data uji bernilai −0,2. Artinya…",o:["Model lebih buruk daripada sekadar menebak rata-rata target","Ada kesalahan perhitungan karena R² selalu 0–1","Model sempurna","Model menjelaskan 20% variasi"],a:0,
 e:"Di data uji, R² bisa negatif jika galat model lebih besar daripada galat tebakan rata-rata. Itu tanda kuat overfitting atau model yang salah.",
 w:[null,"R² di data latih dengan intersep memang 0–1, tetapi di data uji bisa negatif.","Jauh dari sempurna.","Tandanya negatif, bukan 20%."]},
{k:"regresi",t:"mc",lv:2,q:"Model dilatih dengan rumah seluas 30–200 m². Seseorang memakainya untuk memperkirakan gudang 3.000 m². Masalahnya:",o:["Ekstrapolasi jauh di luar rentang data latih; hubungan linear belum tentu berlaku di sana","Tidak ada masalah karena modelnya linear","Gudang lebih murah dari rumah","Model harus dilatih ulang setiap hari"],a:0,
 e:"Model hanya 'melihat' pola di rentang datanya. Di luar itu, prediksi bisa sangat meleset.",
 w:[null,"Linearitas di rentang kecil tidak menjamin linearitas di luar rentang.","Bukan soal harga per jenis bangunan.","Melatih ulang tidak menyelesaikan masalah ekstrapolasi."]},

// ---- klasifikasi ----
{k:"klasifikasi",t:"mc",lv:1,q:"Keluaran regresi logistik sebelum diberi ambang adalah…",o:["Skor peluang antara 0 dan 1","Kelas 0 atau 1 langsung","Angka bebas dari minus tak hingga sampai tak hingga","Nama kelas dalam teks"],a:0,
 e:"Fungsi sigmoid mengubah kombinasi linear fitur menjadi peluang 0–1. Ambang (misal 0,4) mengubahnya menjadi keputusan.",
 w:[null,"Kelas baru muncul setelah ambang diterapkan.","Itu nilai sebelum sigmoid (log-odds).","Model mengeluarkan angka, bukan teks."]},
{k:"klasifikasi",t:"mc",lv:2,q:"Perbedaan utama random forest dan gradient boosting adalah…",o:["Random forest membangun banyak pohon secara paralel dari sampel acak lalu merata-ratakan; boosting membangun pohon berurutan untuk memperbaiki galat sebelumnya","Random forest hanya untuk regresi","Boosting tidak memakai pohon","Keduanya sama persis"],a:0,
 e:"Bagging (random forest) terutama mengurangi variance; boosting mengurangi bias secara bertahap dan sering paling akurat untuk data tabel, tetapi lebih perlu penyetelan.",
 w:[null,"Random forest bisa untuk klasifikasi dan regresi.","Boosting populer (XGBoost, LightGBM) memakai pohon.","Cara membangun ensemble-nya berbeda."]},
{k:"klasifikasi",t:"mc",lv:2,q:"Bank perlu menjelaskan alasan penolakan kredit kepada nasabah. Pilihan model awal yang paling masuk akal:",o:["Model yang bisa diinterpretasi (misal regresi logistik atau scorecard), atau model kompleks dengan penjelasan per prediksi yang teruji","Model apa pun asal akurasinya tertinggi","Deep learning tanpa penjelasan","Tidak memakai data"],a:0,
 e:"Di sektor yang diawasi dan menyangkut hak orang, kemampuan menjelaskan keputusan adalah syarat, bukan bonus.",
 w:[null,"Akurasi saja tidak cukup jika keputusan harus dipertanggungjawabkan.","Sulit dijelaskan kepada nasabah dan regulator.","Bukan jawaban yang realistis."]},
{k:"klasifikasi",t:"mc",lv:1,q:"Untuk data tabel bisnis (transaksi, profil pelanggan), kandidat model yang sering paling akurat adalah…",o:["Gradient boosting (misal XGBoost atau LightGBM)","Model pengenal gambar","Regresi linear untuk target kategori","Clustering"],a:0,
 e:"Pada banyak kompetisi dan praktik industri dengan data tabel, gradient boosting menjadi pilihan kuat. Tetap bandingkan dengan baseline.",
 w:[null,"Model gambar untuk data gambar.","Target kategori butuh model klasifikasi.","Clustering tidak memprediksi label."]},
{k:"klasifikasi",t:"mc",lv:3,kode:"from sklearn.tree import DecisionTreeClassifier\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nm = DecisionTreeClassifier(random_state=0).fit(X, y)\nprint(m.predict([[1.4], [2.6]]).tolist())",vr:"py",
 q:"Pohon dilatih pada data sederhana ini. Apa keluarannya?",o:["[0, 1]","[1, 1]","[0, 0]","[1, 0]"],a:0,
 e:"Pohon menemukan pemisah di x ≤ 1,5. Nilai 1,4 masuk kelas 0, nilai 2,6 masuk kelas 1.",
 w:[null,"1,4 berada di sisi kelas 0.","2,6 berada di sisi kelas 1.","Urutannya terbalik."]},
{k:"klasifikasi",t:"is",lv:1,q:"Fungsi yang mengubah kombinasi linear menjadi peluang 0–1 pada regresi logistik disebut fungsi… (satu kata)",a:["sigmoid","logistik","logistic"],
 e:"Sigmoid: 1 ÷ (1 + e^(−z)). Itulah asal nama regresi logistik."},

// ---- validasi ----
{k:"validasi",t:"mc",lv:1,q:"Akurasi latih 99%, akurasi uji 70%. Diagnosisnya…",o:["Overfitting","Underfitting","Model sempurna","Data uji salah"],a:0,
 e:"Selisih besar antara latih dan uji menunjukkan model menghafal data latih, termasuk deraunya.",
 w:[null,"Underfitting buruk di keduanya.","Kinerja uji yang buruk berarti belum sempurna.","Kemungkinan besar masalahnya di model, bukan data uji."]},
{k:"validasi",t:"mc",lv:2,q:"Data transaksi harian 2 tahun untuk memprediksi permintaan. Cara validasi yang tepat:",o:["Bagi berdasarkan waktu: latih di periode awal, uji di periode setelahnya","K-fold acak biasa","Uji pada data latih","Tidak perlu validasi"],a:0,
 e:"Pengacakan membuat model belajar dari masa depan untuk memprediksi masa lalu. Pembagian berdasarkan waktu meniru pemakaian sebenarnya.",
 w:[null,"Pengacakan membocorkan informasi masa depan.","Hasilnya akan terlalu optimis.","Validasi selalu diperlukan."]},
{k:"validasi",t:"mc",lv:2,q:"Hyperparameter dipilih dengan mencoba puluhan kombinasi dan memilih yang terbaik di data UJI. Masalahnya:",o:["Data uji jadi ikut dipakai untuk memilih model, sehingga skornya terlalu optimis; pakai data validasi atau cross-validation untuk memilih","Tidak ada masalah","Hyperparameter tidak perlu dipilih","Data uji harus lebih besar dari data latih"],a:0,
 e:"Data uji seharusnya disentuh sekali di akhir sebagai perkiraan jujur. Memakainya untuk memilih membuatnya bukan lagi data 'yang belum pernah dilihat'.",
 w:[null,"Ini bentuk kebocoran yang halus.","Pemilihan tetap penting, hanya tempatnya yang salah.","Ukuran bukan masalahnya."]},
{k:"validasi",t:"mc",lv:3,kode:"from sklearn.model_selection import StratifiedKFold\ny = [0] * 8 + [1] * 4\nskf = StratifiedKFold(n_splits=4)\nprint([sum(y[i] for i in uji) for _, uji in skf.split(y, y)])",vr:"py",
 q:"Data berisi 8 kelas 0 dan 4 kelas 1, dibagi 4 lipatan berstrata. Berapa jumlah kelas 1 di tiap lipatan uji?",o:["[1, 1, 1, 1]","[4, 0, 0, 0]","[2, 2, 0, 0]","[0, 0, 0, 4]"],a:0,
 e:"Stratified K-Fold menjaga proporsi kelas di tiap lipatan: 4 contoh positif tersebar satu per lipatan. Tanpa strata, satu lipatan bisa tidak berisi kelas positif sama sekali.",
 w:[null,"Tanpa strata, kelas positif bisa menumpuk di satu lipatan; dengan strata tidak.","Proporsinya tidak seimbang antarlipatan.","Kelas positif tidak menumpuk di lipatan terakhir bila memakai strata."]},
{k:"validasi",t:"mc",lv:2,q:"Pelajaran dari Google Flu Trends adalah…",o:["Korelasi dari data besar bisa runtuh jika tidak divalidasi jujur dan dipantau; perilaku yang mendasari data bisa berubah","Data pencarian tidak pernah berguna","Model kesehatan dilarang","Data kecil selalu lebih baik"],a:0,
 e:"Pada musim 2012–2013 perkiraannya sekitar dua kali angka resmi CDC. Model menangkap kata pencarian yang kebetulan berkorelasi dengan musim dan perilaku pencarian berubah.",
 w:[null,"Data pencarian bisa berguna sebagai pelengkap.","Tidak ada larangan seperti itu.","Ukuran data bukan inti pelajarannya."]},
{k:"validasi",t:"mc",lv:1,q:"Gejala underfitting adalah…",o:["Kinerja buruk di data latih maupun data uji","Kinerja sangat baik di latih tetapi buruk di uji","Kinerja sempurna di data uji","Model terlalu kompleks"],a:0,
 e:"Model terlalu sederhana atau fiturnya kurang, sehingga pola penting tidak tertangkap bahkan di data latih.",
 w:[null,"Itu overfitting.","Itu bukan gejala masalah.","Underfitting justru terkait model terlalu sederhana."]},

// ---- evaluasi ----
{k:"evaluasi",t:"mc",lv:1,q:"Hanya 1% transaksi curang. Model yang selalu menjawab 'normal' memiliki akurasi…",o:["99%, tetapi recall 0% untuk penipuan","1%","50%","0%"],a:0,
 e:"Akurasi tinggi karena kelas mayoritas, padahal tidak ada satu pun penipuan yang tertangkap. Inilah alasan memakai presisi, recall, dan PR-AUC.",
 w:[null,"1% adalah proporsi penipuan.","Tidak ada dasar 50%.","Model itu benar pada semua transaksi normal."]},
{k:"evaluasi",t:"mc",lv:2,q:"Ambang 0,4 di data TelkoNesia: TP 6, FP 1, FN 5, TN 12. Berapa recall-nya?",o:["≈ 0,55","≈ 0,86","≈ 0,75","≈ 0,92"],a:0,vr:"py",vx:"0,55",vjalan:"print(str(round(6 / (6 + 5), 2)).replace('.', ','))",
 e:"Recall = TP ÷ (TP + FN) = 6 ÷ 11 ≈ 0,55. Hampir separuh pelanggan yang akan churn tidak terjangkau program retensi.",
 w:[null,"0,86 adalah presisi (6 ÷ 7).","0,75 adalah akurasi (18 ÷ 24).","0,92 adalah spesifisitas (12 ÷ 13)."]},
{k:"evaluasi",t:"mc",lv:2,kode:"from sklearn.metrics import precision_score\ny_asli = [1, 1, 0, 0, 1]\ny_pred = [1, 0, 0, 1, 1]\nprint(round(precision_score(y_asli, y_pred), 2))",vr:"py",
 q:"Apa keluaran kode ini?",o:["0.67","0.5","0.6","1.0"],a:0,
 e:"Prediksi positif: posisi 1, 4, 5. Yang benar positif: posisi 1 dan 5. Presisi = 2 ÷ 3 ≈ 0,67. Recall-nya juga 2 ÷ 3.",
 w:[null,"Tidak ada pembagian yang menghasilkan 0,5 di sini.","0,6 adalah akurasi (3 dari 5).","Ada satu positif palsu, jadi tidak sempurna."]},
{k:"evaluasi",t:"mc",lv:2,q:"Biaya telepon Rp20 ribu, nilai pelanggan yang diselamatkan Rp200 ribu. Ambang 0,3 menghasilkan TP 8 dan FP 1. Manfaat bersihnya…",o:["Rp1.420 ribu","Rp1.600 ribu","Rp1.580 ribu","Rp180 ribu"],a:0,vr:"py",vjalan:"print('Rp' + format(8 * 200 - (8 + 1) * 20, ',').replace(',', '.') + ' ribu')",
 e:"8 × 200 − (8 + 1) × 20 = 1.600 − 180 = 1.420 ribu. Biaya telepon dibayar untuk semua yang ditandai (TP dan FP).",
 w:[null,"Lupa mengurangi biaya telepon.","Hanya mengurangi biaya untuk FP.","Itu hanya total biayanya."]},
{k:"evaluasi",t:"mc",lv:3,q:"Untuk kelas yang sangat langka (penipuan 0,1%), metrik ringkasan yang lebih informatif adalah…",o:["PR-AUC (area di bawah kurva presisi-recall)","Akurasi","ROC-AUC saja","Jumlah prediksi positif"],a:0,
 e:"ROC-AUC bisa tampak tinggi karena jumlah negatif yang sangat banyak membuat tingkat positif palsu tetap kecil. PR-AUC langsung menyoroti presisi pada kelas langka.",
 w:[null,"Akurasi didominasi kelas mayoritas.","ROC-AUC berguna, tetapi bisa terlalu optimis untuk kelas sangat langka.","Itu bukan metrik kinerja."]},
{k:"evaluasi",t:"mc",lv:2,q:"Siapa yang sebaiknya menentukan ambang skor model churn?",o:["Data scientist bersama tim bisnis, berdasarkan biaya tindakan, nilai pelanggan, dan kapasitas tim","Selalu 0,5","Ditentukan otomatis oleh library","Ditentukan oleh pelanggan"],a:0,
 e:"Ambang adalah keputusan bisnis yang diterjemahkan dari biaya FP, kerugian FN, dan kapasitas (misal tim hanya bisa menelepon 500 orang per hari).",
 w:[null,"0,5 hanyalah nilai bawaan, bukan aturan.","Library tidak mengetahui biaya bisnismu.","Pelanggan tidak terlibat dalam keputusan internal ini."]},

// ---- unsup ----
{k:"unsup",t:"mc",lv:1,q:"Kenapa fitur perlu distandardisasi sebelum K-Means?",o:["Karena K-Means memakai jarak; fitur berskala besar (rupiah) akan mendominasi fitur berskala kecil (hari)","Agar hasilnya selalu 3 cluster","Karena K-Means hanya menerima angka 0–1","Tidak perlu"],a:0,
 e:"Tanpa standardisasi, selisih Rp100.000 jauh lebih 'besar' daripada selisih 30 hari, sehingga cluster hanya mencerminkan rupiah.",
 w:[null,"Jumlah cluster ditentukan k, bukan standardisasi.","K-Means menerima angka berskala apa pun; masalahnya bobot jarak.","Sangat perlu untuk model berbasis jarak."]},
{k:"unsup",t:"mc",lv:2,q:"Data pelanggan berisi beberapa pencilan ekstrem (pembeli korporat). Dibanding K-Means, K-Medoids…",o:["Lebih tahan pencilan karena pusat cluster adalah titik data asli, bukan rata-rata","Selalu lebih cepat","Tidak butuh jumlah cluster","Hanya untuk data teks"],a:0,
 e:"Rata-rata mudah tertarik pencilan, medoid tidak. Ini relevan dengan perbandingan K-Means vs K-Medoids di modul Statistik.",
 w:[null,"K-Medoids biasanya lebih lambat untuk data besar.","Tetap butuh k.","Bisa untuk data angka."]},
{k:"unsup",t:"mc",lv:2,q:"Cara terbaik memilih jumlah cluster untuk segmentasi pelanggan adalah…",o:["Gabungan metrik (elbow, silhouette) dan pertimbangan apakah segmennya bisa ditindaklanjuti bisnis","Selalu k = 10","k sebanyak jumlah pelanggan","Memilih k dengan inertia terkecil"],a:0,
 e:"Inertia selalu turun saat k bertambah, jadi 'terkecil' akan memilih k maksimum. Segmen yang baik harus bermakna dan bisa diberi tindakan berbeda.",
 w:[null,"Tidak ada angka k yang selalu benar.","Itu bukan segmentasi.","Inertia minimum dicapai saat setiap titik menjadi cluster sendiri."]},
{k:"unsup",t:"mc",lv:3,kode:"from sklearn.cluster import KMeans\nX = [[1, 1], [1.2, 0.8], [8, 8], [8.2, 7.9], [7.9, 8.1]]\nm = KMeans(n_clusters=2, n_init=10, random_state=0).fit(X)\nprint(sorted([list(m.labels_).count(c) for c in set(m.labels_)]))",vr:"py",
 q:"Berapa ukuran tiap cluster (diurutkan)?",o:["[2, 3]","[1, 4]","[5]","[2, 2]"],a:0,
 e:"Ada dua kelompok yang jelas: dua titik di sekitar (1, 1) dan tiga titik di sekitar (8, 8).",
 w:[null,"Titik-titik dekat (1, 1) tidak terpisah.","Diminta 2 cluster.","Totalnya ada 5 titik."]},
{k:"unsup",t:"mc",lv:2,q:"PCA paling tepat dipakai untuk…",o:["Memadatkan banyak fitur yang saling berkorelasi menjadi sedikit komponen, misalnya untuk visualisasi 2D","Memprediksi churn langsung","Mengganti A/B test","Membersihkan nilai kosong"],a:0,
 e:"PCA mempertahankan sebanyak mungkin variasi dengan dimensi lebih sedikit. Komponennya kombinasi fitur, sehingga lebih sulit dijelaskan.",
 w:[null,"PCA bukan model prediksi.","PCA tidak mengukur efek sebab-akibat.","PCA butuh data tanpa nilai kosong; bukan alat imputasi."]},

// ---- kausal ----
{k:"kausal",t:"mc",lv:2,q:"Pengguna fitur tabungan otomatis lebih jarang churn. Kesimpulan yang paling hati-hati:",o:["Ada hubungan, tetapi belum tentu sebab-akibat; mungkin pengguna yang setia memang lebih suka mencoba fitur baru (confounder)","Fitur tabungan menyebabkan pengguna setia","Fitur harus diwajibkan untuk semua","Data salah"],a:0,
 e:"Untuk membuktikan efek fitur, perlu eksperimen (misal menawarkan fitur secara acak) atau metode kausal yang menangani confounder.",
 w:[null,"Itu lompatan dari korelasi ke kausalitas.","Kebijakan itu belum didukung bukti kausal.","Tidak ada bukti data salah."]},
{k:"kausal",t:"mc",lv:2,q:"Surabaya (gratis ongkir mulai April) naik dari 1.000 ke 1.300 pesanan/hari; Semarang (tanpa kebijakan) naik dari 800 ke 920. Perkiraan efek difference-in-differences-nya…",o:["180 pesanan/hari","300 pesanan/hari","120 pesanan/hari","420 pesanan/hari"],a:0,vr:"py",vjalan:"print(str((1300 - 1000) - (920 - 800)) + ' pesanan/hari')",
 e:"(1.300 − 1.000) − (920 − 800) = 300 − 120 = 180. Kenaikan 120 di Semarang menggambarkan apa yang terjadi tanpa kebijakan.",
 w:[null,"Mengabaikan kenaikan alami yang juga terjadi di kota pembanding.","Itu perubahan kota pembanding.","Kedua perubahan tidak dijumlahkan."]},
{k:"kausal",t:"mc",lv:3,q:"Dalam uplift modeling, kelompok yang paling layak diberi promo adalah…",o:["Persuadables: yang membeli hanya jika diberi promo","Sure things: yang tetap membeli tanpa promo","Lost causes: yang tidak membeli dengan atau tanpa promo","Sleeping dogs: yang justru batal karena dihubungi"],a:0,
 e:"Memberi promo kepada sure things membakar margin; kepada lost causes sia-sia; kepada sleeping dogs merugikan. Uplift memperkirakan efek tambahan per orang.",
 w:[null,"Mereka membeli juga tanpa promo; promo hanya mengurangi margin.","Promo tidak mengubah perilaku mereka.","Menghubungi mereka justru merugikan."]},
{k:"kausal",t:"mc",lv:2,q:"Diskon diberikan untuk belanja ≥ Rp500 ribu. Untuk menilai efek diskon, metode yang cocok adalah…",o:["Regression discontinuity: bandingkan perilaku tepat di bawah dan tepat di atas Rp500 ribu","Membandingkan semua pembeli diskon dengan semua yang tidak","Korelasi sederhana","Clustering"],a:0,
 e:"Pembeli Rp490 ribu dan Rp510 ribu kemungkinan mirip, kecuali soal diskon. Perbedaan di sekitar batas itu mendekati efek kausal.",
 w:[null,"Pembeli besar dan kecil berbeda dalam banyak hal (confounder).","Korelasi tidak memisahkan confounder.","Clustering tidak mengukur efek."]},
{k:"kausal",t:"mc",lv:1,q:"Kenapa A/B test disebut standar emas inferensi kausal?",o:["Pengacakan membuat kedua kelompok rata-rata setara dalam semua hal, yang terukur maupun tidak, kecuali perlakuannya","Karena paling murah","Karena tidak butuh statistik","Karena selalu menghasilkan efek positif"],a:0,
 e:"Pengacakan menyeimbangkan confounder, sehingga perbedaan hasil dapat dikaitkan dengan perlakuan.",
 w:[null,"A/B test bisa mahal dan butuh infrastruktur.","Analisisnya tetap butuh statistik.","Banyak A/B test justru menunjukkan tidak ada efek."]},

// ---- mlops ----
{k:"mlops",t:"mc",lv:2,q:"Setelah ekspansi ke Indonesia Timur, model kredit menerima banyak pemohon dari wilayah yang hampir tidak ada di data latih. Ini contoh…",o:["Data drift","Concept drift","Overfitting","Underfitting"],a:0,
 e:"Sebaran input berubah. Kinerja model di populasi baru belum teruji, jadi perlu pemantauan ketat dan mungkin pelatihan ulang.",
 w:[null,"Concept drift adalah perubahan hubungan input dan target.","Overfitting adalah masalah saat pelatihan.","Underfitting juga masalah pelatihan."]},
{k:"mlops",t:"mc",lv:2,q:"Penipu mengubah pola setelah tahu sistem menandai transaksi malam hari. Hubungan fitur dan target berubah. Ini contoh…",o:["Concept drift","Data drift saja","Leakage","Survivorship bias"],a:0,
 e:"Pola yang dulu menandai penipuan tidak lagi berlaku. Model fraud termasuk yang paling cepat usang dan perlu pembaruan rutin.",
 w:[null,"Yang berubah adalah hubungannya, bukan sekadar sebaran input.","Leakage adalah kebocoran informasi saat pelatihan.","Bukan bias data selamat."]},
{k:"mlops",t:"mc",lv:1,q:"Daftar pelanggan berisiko churn dikirim ke tim CRM setiap pagi. Cara penerapan yang paling sesuai:",o:["Batch scoring terjadwal (misal setiap malam)","Real-time scoring per klik","Tidak perlu diterapkan","Dijalankan manual di laptop setiap bulan"],a:0,
 e:"Kebutuhan harian tidak butuh skor real-time. Batch lebih sederhana dan murah.",
 w:[null,"Real-time menambah kompleksitas tanpa manfaat di kasus ini.","Model yang tidak diterapkan tidak memberi nilai.","Manual dan bulanan tidak sesuai kebutuhan harian."]},
{k:"mlops",t:"mc",lv:2,q:"Model baru ingin diuji tanpa risiko memengaruhi keputusan nyata. Strategi yang tepat:",o:["Shadow deployment: model baru berjalan berdampingan, hasilnya dicatat dan dibandingkan, tetapi tidak dipakai untuk keputusan","Langsung ganti model lama","Uji hanya di laptop","Matikan model lama"],a:0,
 e:"Shadow deployment memperlihatkan perilaku model di data produksi nyata sebelum dipercaya membuat keputusan.",
 w:[null,"Berisiko jika model baru ternyata bermasalah.","Data laptop tidak mencerminkan produksi.","Menghilangkan pembanding dan layanan."]},
{k:"mlops",t:"mc",lv:3,q:"Pelajaran utama kasus Zillow Offers bagi data scientist adalah…",o:["Ketika keputusan bernilai besar diambil otomatis dari prediksi, ketidakpastian dan perubahan pasar harus dikelola (batas risiko, pemantauan, penilaian manusia)","Model harga rumah mustahil dibuat","Perusahaan tidak boleh memakai machine learning","Akurasi rata-rata adalah satu-satunya yang penting"],a:0,
 e:"Zillow menutup bisnis pembelian rumahnya pada November 2021 setelah prediksi harga meleset di pasar yang bergejolak. Rata-rata galat kecil pun berbahaya jika kesalahannya terkumpul pada transaksi yang mahal.",
 w:[null,"Estimasi harga rumah tetap berguna; masalahnya pemakaian untuk keputusan bernilai besar tanpa kendali risiko.","Pelajarannya tentang kendali risiko, bukan larangan.","Sebaran dan arah kesalahan juga penting."]},

// ---- etika ----
{k:"etika",t:"mc",lv:2,q:"Kolom jenis kelamin sudah dihapus dari model penyaring CV, tetapi model tetap bias. Penyebab yang paling mungkin:",o:["Fitur lain menjadi proksi jenis kelamin (misal nama organisasi, kata tertentu, atau riwayat karier)","Menghapus kolom selalu menghapus bias","Model tidak bisa bias","Data terlalu sedikit"],a:0,
 e:"Kasus alat rekrutmen Amazon yang dilaporkan Reuters (2018) menunjukkan model menurunkan nilai CV yang memuat kata 'women's'. Bias perlu diukur per kelompok, bukan diasumsikan hilang.",
 w:[null,"Proksi bisa membawa informasi yang sama.","Model mewarisi bias data latihnya.","Ukuran data tidak menghilangkan bias historis."]},
{k:"etika",t:"mc",lv:2,q:"Menurut UU PDP Pasal 10 ayat (1), subjek data berhak mengajukan keberatan atas keputusan yang…",o:["Hanya didasarkan pada pemrosesan otomatis, termasuk pemrofilan, yang menimbulkan akibat hukum atau berdampak signifikan","Diambil oleh manusia","Menggunakan Excel","Diambil di luar jam kerja"],a:0,
 e:"Untuk keputusan penting seperti kredit atau rekrutmen, sediakan penjelasan dan jalur peninjauan manusia.",
 w:[null,"Pasal ini khusus untuk pemrosesan otomatis.","Alat yang dipakai tidak relevan.","Waktu pengambilan keputusan tidak relevan."]},
{k:"etika",t:"mc",lv:3,q:"Equal opportunity sebagai definisi keadilan berarti…",o:["Recall sama untuk semua kelompok: orang yang memenuhi syarat punya peluang sama untuk tertangkap model","Semua kelompok punya tingkat persetujuan yang sama","Model tidak memakai data sama sekali","Semua orang disetujui"],a:0,
 e:"Demographic parity menyamakan tingkat persetujuan; equal opportunity menyamakan tingkat deteksi pada yang memenuhi syarat. Keduanya sering tidak bisa dipenuhi sekaligus.",
 w:[null,"Itu demographic parity.","Bukan definisi keadilan.","Bukan definisi keadilan model."]},
{k:"etika",t:"mc",lv:1,q:"Bias sampel dalam model kredit nasional bisa terjadi jika…",o:["Data latih hampir seluruhnya dari pemohon di Pulau Jawa","Datanya disimpan di cloud","Modelnya memakai Python","Datanya diperbarui setiap bulan"],a:0,
 e:"Kelompok yang kurang terwakili mendapat prediksi yang kurang akurat. Ukur kinerja per wilayah sebelum dipakai nasional.",
 w:[null,"Lokasi penyimpanan tidak menyebabkan bias sampel.","Bahasa pemrograman tidak relevan.","Pembaruan rutin tidak menimbulkan bias sampel."]},
{k:"etika",t:"mc",lv:2,q:"SHAP menunjukkan skor kredit seseorang turun terutama karena rasio cicilan terhadap pendapatan. Manfaat penjelasan ini adalah…",o:["Membantu menjelaskan keputusan kepada nasabah, menemukan fitur yang bermasalah, dan membangun kepercayaan, walau tidak otomatis membuat model adil","Menjamin model adil","Meningkatkan akurasi secara otomatis","Menggantikan validasi model"],a:0,
 e:"Penjelasan adalah alat diagnosis dan komunikasi. Keadilan tetap harus diukur dan diperjuangkan secara terpisah.",
 w:[null,"Penjelasan tidak menjamin keadilan.","Penjelasan tidak mengubah model.","Validasi tetap wajib."]},

// ---- kerjads ----
{k:"kerjads",t:"mc",lv:1,q:"Di wawancara, kamu diminta merancang model churn operator seluler. Kerangka jawaban terbaik dimulai dari…",o:["Tujuan bisnis dan definisi label churn (misal tidak isi ulang 30 hari)","Nama algoritma favorit","Jumlah layer neural network","Bahasa pemrograman"],a:0,
 e:"Pewawancara menilai cara berpikir end-to-end: tujuan → label → fitur → validasi → metrik → penerapan → pemantauan.",
 w:[null,"Algoritma adalah detail belakangan.","Terlalu dini dan belum tentu relevan.","Alat bukan inti pertanyaan."]},
{k:"kerjads",t:"mc",lv:2,q:"Portofolio data scientist yang paling meyakinkan perekrut adalah…",o:["Satu proyek end-to-end: masalah bisnis, baseline, model, evaluasi jujur, model card, dan aplikasi sederhana atau laporan","Sepuluh notebook kompetisi tanpa penjelasan","Sertifikat sebanyak mungkin","Salinan proyek tempat magang"],a:0,
 e:"Proyek end-to-end menunjukkan kemampuan yang dipakai sehari-hari, termasuk komunikasi dan keterbatasan model.",
 w:[null,"Kuantitas tanpa cerita kurang meyakinkan.","Sertifikat melengkapi, bukan menggantikan bukti kerja.","Melanggar kerahasiaan dan UU PDP."]},
{k:"kerjads",t:"mc",lv:2,q:"Model card sebaiknya berisi…",o:["Tujuan model, data latih, metrik, keterbatasan, dan risiko bias","Hanya akurasi","Kode lengkap","Daftar pustaka"],a:0,
 e:"Model card membantu orang lain memakai model dengan benar dan memahami batasnya.",
 w:[null,"Akurasi saja tidak cukup.","Kode tempatnya di repositori.","Bukan inti model card."]},
{k:"kerjads",t:"mc",lv:1,q:"Di banyak perusahaan Indonesia, pekerjaan sehari-hari data scientist yang paling sering adalah…",o:["SQL, analisis, dan eksperimen, di samping membangun model","Hanya melatih deep learning","Hanya membuat dashboard","Hanya menulis makalah ilmiah"],a:0,
 e:"Model hanya sebagian pekerjaan. Kemampuan SQL dan analisis tetap menjadi fondasi, itu sebabnya jalur DA dan DS saling melengkapi.",
 w:[null,"Deep learning hanya relevan pada sebagian kasus.","Dashboard lebih dekat ke pekerjaan analyst/BI.","Riset murni jarang menjadi tugas utama di industri."]},
];

if (typeof module !== "undefined") module.exports = { SOAL_DS, MATERI_DS };
