// ============ JALUR DATA ANALYST ============
// 12 modul dari cara berpikir sampai dunia kerja. Setiap modul: materi + contoh bertahap
// (dikerjakan penuh → sebagian → mandiri) + soal dengan alasan per pilihan.
// Soal vr:"sql" dijalankan pada tabel pengguna/transaksi (js/data/dataset.js),
// soal vr:"py" memakai vjalan untuk menghitung ulang jawabannya (node alat/cek-soal.js).
// Soal baru selalu ditambahkan di BELAKANG array supaya ID progres tidak bergeser.

const MATERI_DA = [
{k:"peran",judul:"Peran Data Analyst & Pertanyaan Bisnis",materi:`
<p>Data analyst membantu orang mengambil keputusan dengan data. Produknya bukan query atau grafik, tetapi <b>keputusan yang lebih baik</b>: stok mana yang ditambah, promo mana yang dihentikan, wilayah mana yang dibuka.</p>
<table class="mini-pivot"><tr><th>Peran</th><th>Pertanyaan khas</th><th>Alat utama</th></tr>
<tr><td>Data Analyst</td><td>Apa yang terjadi dan kenapa?</td><td>SQL, spreadsheet, BI, statistik dasar</td></tr>
<tr><td>Data Scientist</td><td>Apa yang akan terjadi, dan apa efek suatu tindakan?</td><td>Python, statistik, machine learning, eksperimen</td></tr>
<tr><td>Data Engineer</td><td>Bagaimana data sampai dengan rapi dan tepat waktu?</td><td>Pipeline, gudang data, orkestrasi</td></tr>
<tr><td>BI Developer</td><td>Bagaimana semua orang melihat angka yang sama?</td><td>Model data, dashboard, semantic layer</td></tr></table>
<h4>Permintaan kabur adalah hal biasa</h4>
<p>Atasan jarang berkata "hitung retensi kohort Januari". Yang sering terdengar: <i>"Penjualan turun, cari tahu kenapa."</i> Tugas pertamamu adalah <b>mengubah permintaan menjadi pertanyaan yang bisa dijawab</b>. Tanyakan lima hal:</p>
<ol><li><b>Keputusan apa</b> yang akan diambil dari analisis ini? (Kalau tidak ada keputusan, mungkin analisisnya tidak perlu.)</li>
<li><b>Metrik apa</b> tepatnya? "Penjualan" bisa berarti GMV, jumlah pesanan, atau pendapatan bersih.</li>
<li><b>Dibanding apa?</b> Minggu lalu, bulan yang sama tahun lalu, atau target?</li>
<li><b>Untuk siapa</b> dan sedalam apa? Direksi butuh satu halaman, tim produk butuh rinciannya.</li>
<li><b>Kapan</b> dibutuhkan? Jawaban 80% benar hari ini sering lebih berguna daripada 100% benar minggu depan.</li></ol>
<h4>Pohon hipotesis (MECE)</h4>
<p>Pecah masalah menjadi cabang yang <b>tidak tumpang tindih dan bersama-sama lengkap</b> (<i>Mutually Exclusive, Collectively Exhaustive</i>). Contoh "GMV turun": jumlah pengunjung turun? konversi turun? nilai per pesanan turun? Lalu tiap cabang dipecah lagi per kanal, kota, atau kategori. Dengan begitu kamu memeriksa semua kemungkinan secara teratur, bukan menebak-nebak.</p>
<div class="catatan"><b>Kebiasaan analis senior:</b> tulis dugaanmu <i>sebelum</i> membuka data, lalu cari bukti yang bisa membuktikan dugaan itu salah. Ini mencegahmu hanya mencari angka yang mendukung pendapat sendiri (<i>confirmation bias</i>).</div>`},

{k:"metrik",judul:"Metrik, KPI & Pohon Metrik",materi:`
<p>Metrik adalah angka yang diukur rutin; <b>KPI</b> adalah metrik yang dipilih untuk menilai keberhasilan tujuan tertentu. Semua KPI adalah metrik, tetapi tidak semua metrik layak jadi KPI.</p>
<h4>Pohon metrik e-commerce</h4>
<p><code>GMV = sesi × tingkat konversi × AOV</code>. GMV (<i>gross merchandise value</i>) adalah nilai barang yang terjual. Pendapatan marketplace biasanya hanya sebagian kecil darinya (komisi atau <i>take rate</i>). Dengan memecah GMV, kamu tahu tuas mana yang bergerak.</p>
<table class="mini-pivot"><tr><th>Jenis</th><th>Contoh</th><th>Catatan</th></tr>
<tr><td>Jumlah (count)</td><td>pesanan, pengguna aktif</td><td>naik turun mengikuti ukuran bisnis</td></tr>
<tr><td>Rasio (rate)</td><td>konversi, churn, tingkat retur</td><td>adil untuk membandingkan kelompok berbeda ukuran</td></tr>
<tr><td>Leading</td><td>keranjang ditambahkan, uji coba gratis</td><td>bergerak lebih dulu, cocok untuk peringatan dini</td></tr>
<tr><td>Lagging</td><td>pendapatan bulanan, churn tahunan</td><td>hasil akhir, terlambat untuk dikoreksi</td></tr>
<tr><td>Guardrail</td><td>tingkat komplain, waktu muat aplikasi</td><td>tidak boleh memburuk saat mengejar metrik utama</td></tr></table>
<p><b>North Star Metric</b> adalah satu metrik yang paling mewakili nilai yang diterima pelanggan, misalnya "jumlah pesanan yang sampai tepat waktu per minggu" untuk layanan pengiriman. <b>Vanity metric</b> terlihat bagus tetapi tidak membantu keputusan, misalnya total unduhan aplikasi sejak awal.</p>
<div class="bertahap" data-id="da-gmv"><p class="bt-judul">Contoh bertahap: memecah GMV</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Minggu A: 50.000 sesi, konversi 2%, AOV Rp150.000. GMV = 50.000 × 0,02 × 150.000 = <b>Rp150.000.000</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Minggu B: 48.000 sesi, konversi 2,5%, AOV Rp140.000. GMV = 48.000 × 0,025 × 140.000 = Rp <input class="bt-isian" data-jawab="168000000" aria-label="GMV minggu B" inputmode="numeric"></div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Bulan depan sesi diperkirakan hanya 40.000 dan AOV tetap Rp150.000. Berapa persen konversi yang dibutuhkan agar GMV tetap Rp150.000.000? <input class="bt-isian" data-jawab="2,5|2.5|2,5%|2.5%" aria-label="Konversi yang dibutuhkan"> %</div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Langkah 2: 48.000 × 0,025 = 1.200 pesanan; 1.200 × 140.000 = Rp168.000.000. Sesi dan AOV turun, tetapi konversi naik lebih besar, sehingga GMV naik 12%.</p><p>Langkah 3: konversi = GMV ÷ (sesi × AOV) = 150.000.000 ÷ (40.000 × 150.000) = 0,025 = <b>2,5%</b>.</p></details></div>`},

{k:"bersih",judul:"Kualitas Data & Pembersihan",materi:`
<p>Di dunia kerja, sebagian besar waktu analis habis untuk memahami dan merapikan data. Hasil analisis tidak bisa lebih baik daripada data masukannya.</p>
<table class="mini-pivot"><tr><th>Dimensi</th><th>Pertanyaan</th><th>Contoh masalah</th></tr>
<tr><td>Kelengkapan</td><td>Ada yang kosong?</td><td>kolom kota kosong 12%</td></tr>
<tr><td>Keunikan</td><td>Ada yang dobel?</td><td>satu pesanan tercatat dua kali karena sinkronisasi ulang</td></tr>
<tr><td>Validitas</td><td>Sesuai aturan?</td><td>tanggal lahir 2031, harga Rp0</td></tr>
<tr><td>Konsistensi</td><td>Sama antar-sumber?</td><td>"DKI Jakarta", "Jkt", dan "Jakarta" dianggap tiga kota</td></tr>
<tr><td>Ketepatan waktu</td><td>Sudah terbaru?</td><td>data kemarin baru masuk siang hari</td></tr></table>
<h4>Masalah khas data Indonesia</h4>
<ul><li>Nomor telepon <code>0812…</code>, <code>62812…</code>, dan <code>+62 812…</code> adalah orang yang sama.</li>
<li>Format tanggal 03/04/2026 bisa berarti 3 April (format Indonesia) atau 4 Maret (format Amerika).</li>
<li>Angka "1.250" bisa berarti seribu dua ratus lima puluh (format Indonesia) atau satu koma dua lima (format Inggris).</li>
<li>Zona waktu: pukul 00.30 WIT tanggal 2 masih pukul 22.30 WIB tanggal 1. Tetapkan satu zona waktu (atau UTC) sebelum menghitung angka per hari.</li></ul>
<h4>Kebiasaan yang menyelamatkan</h4>
<ol><li><b>Rekonsiliasi:</b> cocokkan jumlah baris dan total dengan sumber resmi (misal laporan keuangan). Selisih harus bisa dijelaskan.</li>
<li><b>NULL bukan nol:</b> nilai kosong berarti "tidak diketahui". Mengganti NULL dengan 0 bisa menurunkan rata-rata secara palsu.</li>
<li><b>Jangan hapus diam-diam:</b> catat setiap baris yang dibuang beserta alasannya.</li>
<li><b>Simpan data mentah</b> dan lakukan pembersihan lewat skrip yang bisa diulang, bukan edit manual.</li></ol>
<div class="bertahap" data-id="da-lengkap"><p class="bt-judul">Contoh bertahap: tingkat kelengkapan</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Tabel 1.200 baris, kolom email kosong 84 baris. Kelengkapan = (1.200 − 84) ÷ 1.200 = <b>93%</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Tabel 2.500 baris, kolom kota kosong 400 baris. Kelengkapan = (2.500 − 400) ÷ 2.500 = <input class="bt-isian" data-jawab="84|84%" aria-label="Kelengkapan kolom kota"> %</div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Dari 2.500 baris itu ada 50 pesanan yang tercatat dua kali (setiap pesanan muncul 2 baris). Berapa jumlah pesanan unik sebenarnya? <input class="bt-isian" data-jawab="2450|2.450" aria-label="Jumlah pesanan unik" inputmode="numeric"></div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Langkah 2: 2.100 ÷ 2.500 = 0,84 = 84%.</p><p>Langkah 3: 50 pesanan muncul dua kali berarti ada 50 baris kelebihan. 2.500 − 50 = <b>2.450</b> pesanan unik. Kesalahan umum: mengurangi 100 (padahal salah satu dari pasangan itu tetap pesanan asli).</p></details></div>`},

{k:"sqlbisnis",judul:"SQL untuk Pertanyaan Bisnis",materi:`
<p>Di wawancara dan pekerjaan, SQL dinilai dari kemampuan menjawab pertanyaan bisnis dengan <b>benar</b>, bukan dari hafalan sintaks. Latihan di modul ini memakai tabel kerja Pasarku (marketplace fiktif):</p>
{{tb:tbPengguna}}
<p>Tabel <code>transaksi</code> (36 baris) berisi kolom <code>id, pengguna_id, tanggal, kategori, kanal, nilai, status, voucher</code>. Status bisa <code>selesai</code>, <code>batal</code>, atau <code>retur</code>.</p>
<h4>Terjemahkan kalimat ke klausa</h4>
<table class="mini-pivot"><tr><th>Kalimat bisnis</th><th>Klausa</th></tr>
<tr><td>"di 5 kota besar"</td><td><code>WHERE kota IN ('Jakarta', …)</code></td></tr>
<tr><td>"selama Februari"</td><td><code>WHERE tanggal BETWEEN '2026-02-01' AND '2026-02-28'</code></td></tr>
<tr><td>"per kategori"</td><td><code>GROUP BY kategori</code></td></tr>
<tr><td>"berapa orang"</td><td><code>COUNT(DISTINCT pengguna_id)</code>, bukan <code>COUNT(*)</code></td></tr>
<tr><td>"yang belum pernah"</td><td><code>LEFT JOIN … WHERE kanan.id IS NULL</code></td></tr>
<tr><td>"minimal 3 kali"</td><td><code>HAVING COUNT(*) &gt;= 3</code></td></tr></table>
<h4>Urutan eksekusi</h4>
<p>SQL ditulis <code>SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY</code>, tetapi dijalankan <b>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</b>. Inilah sebabnya alias dari SELECT tidak bisa dipakai di WHERE pada kebanyakan database, dan fungsi agregat tidak boleh ada di WHERE.</p>
<h4>Jebakan yang sering membuat angka salah</h4>
<ul><li><b>Lupa menyaring status.</b> GMV yang memasukkan pesanan batal terlihat lebih besar dari kenyataan.</li>
<li><b>COUNT(*) vs COUNT(DISTINCT).</b> 36 transaksi bukan 36 pembeli.</li>
<li><b>Fan-out JOIN.</b> Menggabungkan tabel satu-ke-banyak lalu menjumlahkan kolom dari sisi "satu" membuat angkanya terhitung berulang.</li>
<li><b>NULL di perbandingan.</b> <code>WHERE kota &lt;&gt; 'Jakarta'</code> tidak mengembalikan baris yang kotanya NULL.</li></ul>
<div class="catatan"><b>Praktik langsung:</b> kerjakan tantangan kasus nomor 19–25 di Lab SQL. Formatnya meniru tes SQL wawancara: ada cerita, tugas, skema, hasil yang diharapkan, dan tombol <i>Kumpulkan</i>.</div>`},

{k:"sqllanjut",judul:"CTE, Window Function & Kohort",materi:`
<p>Pertanyaan tingkat menengah di wawancara hampir selalu butuh <b>CTE</b> dan <b>window function</b>.</p>
<h4>CTE: memecah query menjadi langkah</h4>
<pre><code>WITH bulanan AS (
  SELECT strftime('%Y-%m', tanggal) AS bulan, SUM(nilai) AS gmv
  FROM transaksi WHERE status = 'selesai'
  GROUP BY bulan
)
SELECT * FROM bulanan ORDER BY bulan;</code></pre>
<p>Setiap CTE seperti tabel sementara yang diberi nama. Query panjang menjadi mudah dibaca dan diperiksa per langkah.</p>
<h4>Window function: menghitung tanpa meringkas baris</h4>
<table class="mini-pivot"><tr><th>Fungsi</th><th>Kegunaan</th></tr>
<tr><td><code>ROW_NUMBER()</code></td><td>nomor unik per kelompok; untuk "top 1 per kota"</td></tr>
<tr><td><code>RANK()</code> / <code>DENSE_RANK()</code></td><td>peringkat; nilai seri mendapat peringkat sama</td></tr>
<tr><td><code>LAG()</code> / <code>LEAD()</code></td><td>nilai baris sebelum atau sesudah; untuk pertumbuhan bulan ke bulan</td></tr>
<tr><td><code>SUM() OVER (ORDER BY …)</code></td><td>total berjalan (kumulatif)</td></tr></table>
<p><code>PARTITION BY</code> membagi baris menjadi kelompok (seperti GROUP BY), tetapi setiap baris tetap muncul. <code>ORDER BY</code> di dalam <code>OVER</code> menentukan urutan perhitungan.</p>
<h4>Analisis kohort</h4>
<p>Kohort adalah sekelompok pengguna yang memulai pada periode yang sama. Langkahnya: (1) tentukan bulan pertama tiap pengguna dengan <code>MIN()</code>, (2) cari aktivitas mereka di bulan-bulan berikutnya, (3) hitung persentase yang kembali. Kohort mencegah salah tafsir: jumlah pengguna aktif bisa naik karena pengguna baru membanjir, padahal pengguna lama terus pergi.</p>
<div class="bertahap" data-id="da-mom"><p class="bt-judul">Contoh bertahap: pertumbuhan bulan ke bulan</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> GMV Februari Rp1.953.000, Januari Rp4.844.000. Pertumbuhan = (1.953.000 − 4.844.000) ÷ 4.844.000 × 100 = <b>−59,7%</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> GMV Maret Rp2.731.000. Pertumbuhan dibanding Februari = (2.731.000 − 1.953.000) ÷ 1.953.000 × 100 = <input class="bt-isian" data-jawab="39,8|39.8|39,8%|39.8%" aria-label="Pertumbuhan Maret"> % (1 desimal)</div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Kalau April ingin kembali ke level Januari (Rp4.844.000), berapa persen pertumbuhan yang dibutuhkan dari Maret? <input class="bt-isian" data-jawab="77,4|77.4|77,4%|77.4%" aria-label="Pertumbuhan yang dibutuhkan"> % (1 desimal)</div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Langkah 2: 778.000 ÷ 1.953.000 = 0,398 → <b>39,8%</b>.</p><p>Langkah 3: (4.844.000 − 2.731.000) ÷ 2.731.000 = 2.113.000 ÷ 2.731.000 = 0,774 → <b>77,4%</b>. Perhatikan asimetri: turun 59,7% lalu naik 39,8% belum mengembalikan angka semula. Untuk pulih dari penurunan p%, dibutuhkan kenaikan p ÷ (100 − p) × 100%.</p></details></div>`},

{k:"banding",judul:"Membandingkan dengan Adil: Distribusi, Rasio & Paradoks",materi:`
<p>Separuh kesalahan analisis bukan salah hitung, tetapi <b>salah membandingkan</b>.</p>
<h4>1. Pilih ringkasan yang tepat</h4>
<p>Untuk data menceng (gaji, nilai belanja, harga rumah), <b>median</b> dan persentil (P25, P75, P90) lebih jujur daripada rata-rata. Tampilkan sebarannya, bukan hanya satu angka. Contoh terkenal Anscombe (1973): empat himpunan data dengan rata-rata, varians, dan korelasi yang hampir sama, tetapi bentuk grafiknya sangat berbeda. Selalu lihat grafiknya.</p>
<h4>2. Normalisasi</h4>
<p>Jakarta hampir selalu "menang" dalam jumlah transaksi karena penduduknya banyak. Bandingkan <b>per pengguna</b>, <b>per toko</b>, atau <b>per 1.000 penduduk</b> agar adil.</p>
<h4>3. Pembanding waktu dan musiman Indonesia</h4>
<ul><li><b>MoM</b> (bulan ke bulan) peka terhadap musim; <b>YoY</b> (tahun ke tahun) menetralkan musim tahunan.</li>
<li>Idulfitri bergeser sekitar 10–11 hari lebih awal setiap tahun Masehi karena kalender Hijriah lebih pendek. Membandingkan "April tahun ini vs April tahun lalu" bisa menyesatkan bila Lebaran jatuh di bulan berbeda. Sejajarkan berdasarkan <i>jarak ke Lebaran</i>.</li>
<li><b>Efek basis:</b> pertumbuhan 200% dari angka yang sangat kecil tidak sehebat kedengarannya.</li></ul>
<h4>4. Paradoks Simpson</h4>
<p>Tren di data gabungan bisa <b>berbalik</b> saat data dipecah per kelompok. Contoh klasik: penerimaan pascasarjana UC Berkeley tahun 1973. Secara total, pelamar pria diterima sekitar 44% dan wanita 35%. Tetapi ketika dilihat per jurusan, sebagian besar jurusan justru sedikit lebih banyak menerima wanita. Penyebabnya: wanita lebih banyak melamar ke jurusan yang sangat kompetitif (Bickel dkk., <i>Science</i>, 1975).</p>
<div class="bertahap" data-id="da-simpson"><p class="bt-judul">Contoh bertahap: paradoks Simpson di tim telemarketing</p>
<table class="mini-pivot"><tr><th>Segmen</th><th>Tim A</th><th>Tim B</th></tr>
<tr><td>Nasabah prioritas</td><td>72 closing / 90 telepon</td><td>18 closing / 20 telepon</td></tr>
<tr><td>Nasabah umum</td><td>2 closing / 10 telepon</td><td>24 closing / 80 telepon</td></tr></table>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Total Tim A = (72 + 2) ÷ (90 + 10) = 74 ÷ 100 = <b>74%</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Total Tim B = (18 + 24) ÷ (20 + 80) = <input class="bt-isian" data-jawab="42|42%" aria-label="Konversi total tim B"> %</div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Konversi Tim B di segmen nasabah umum = 24 ÷ 80 = <input class="bt-isian" data-jawab="30|30%" aria-label="Konversi tim B segmen umum"> %. Tim A di segmen yang sama hanya 20%.</div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Total: A 74% vs B 42%, tampaknya A jauh lebih hebat. Per segmen: prioritas A 80% vs B 90%; umum A 20% vs B 30%. <b>B lebih baik di kedua segmen</b>. A hanya beruntung mendapat lebih banyak nasabah prioritas yang memang mudah closing. Memberi bonus berdasarkan angka total akan tidak adil.</p></details></div>`},

{k:"abtest",judul:"A/B Test untuk Analis",materi:`
<p>A/B test (eksperimen terkontrol acak) adalah cara paling kuat untuk tahu apakah suatu perubahan <b>menyebabkan</b> perbedaan. Booking.com, misalnya, dikenal menjalankan lebih dari 1.000 eksperimen secara bersamaan (Thomke, <i>Harvard Business Review</i>, 2020).</p>
<h4>Alurnya</h4>
<ol><li><b>Hipotesis:</b> "Menampilkan estimasi ongkir di halaman produk menaikkan konversi checkout."</li>
<li><b>Metrik utama</b> (satu) dan <b>metrik guardrail</b> (misal tingkat pembatalan, waktu muat halaman).</li>
<li><b>Ukuran sampel</b> ditentukan <i>sebelum</i> mulai, berdasarkan konversi dasar dan efek terkecil yang ingin dideteksi (MDE). Makin kecil efeknya, makin banyak sampel yang dibutuhkan.</li>
<li><b>Acak</b> per pengguna, jalankan minimal satu siklus mingguan penuh (perilaku Senin berbeda dengan Sabtu, dan tanggal gajian juga berpengaruh).</li>
<li><b>Analisis</b> sekali di akhir, sesuai rencana.</li></ol>
<h4>Membaca hasil</h4>
<ul><li><b>p-value</b> adalah peluang mendapatkan perbedaan sebesar ini (atau lebih) <i>jika sebenarnya tidak ada efek</i>. Ia <b>bukan</b> peluang bahwa hipotesismu benar.</li>
<li><b>Interval kepercayaan</b> lebih informatif: "kenaikan konversi antara −0,1 dan +1,1 poin persen".</li>
<li>Signifikan secara statistik belum tentu <b>penting secara bisnis</b>. Kenaikan 0,01 poin dengan biaya pengembangan besar mungkin tidak layak.</li></ul>
<h4>Kesalahan yang sering terjadi</h4>
<ul><li><b>Mengintip</b> (peeking): menghentikan tes begitu p &lt; 0,05. Ini membuat peluang positif palsu jauh di atas 5%.</li>
<li><b>Sample Ratio Mismatch (SRM):</b> rencananya 50:50 tetapi yang masuk 52:48 dengan sampel besar. Itu tanda ada bug dalam pembagian; hasilnya tidak bisa dipercaya.</li>
<li><b>Efek kebaruan:</b> pengguna mengeklik fitur baru karena penasaran; efeknya hilang setelah beberapa minggu.</li></ul>
<div class="bertahap" data-id="da-ab"><p class="bt-judul">Contoh bertahap: membaca hasil A/B test</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Grup A: 10.000 pengguna, 420 checkout = <b>4,2%</b>. Grup B: 10.000 pengguna, 470 checkout = <b>4,7%</b>. Kenaikan relatif = (4,7 − 4,2) ÷ 4,2 = <b>11,9%</b>. Uji z dua proporsi memberi p ≈ 0,086.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Apakah hasil ini signifikan pada taraf 5%? Ketik <i>ya</i> atau <i>tidak</i>: <input class="bt-isian" data-jawab="tidak" aria-label="Signifikan atau tidak"></div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Tes kedua: grup B berisi 9.800 pengguna dengan 490 checkout. Konversinya = <input class="bt-isian" data-jawab="5|5%|5,0|5.0|5,0%|5.0%" aria-label="Konversi grup B tes kedua"> %</div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Langkah 2: p ≈ 0,086 lebih besar dari 0,05, jadi <b>tidak</b> signifikan. Kenaikan 11,9% terdengar besar, tetapi dengan sampel ini perbedaan sebesar itu cukup mungkin muncul karena kebetulan. Keputusan yang jujur: "belum ada bukti cukup", bukan "B lebih baik".</p><p>Langkah 3: 490 ÷ 9.800 = 0,05 = <b>5,0%</b>.</p></details></div>`},

{k:"visual",judul:"Visualisasi yang Jujur",materi:`
<p>Grafik yang baik menjawab satu pertanyaan dalam lima detik. Pilih bentuk dari <b>pertanyaannya</b>, bukan dari selera.</p>
<table class="mini-pivot"><tr><th>Pertanyaan</th><th>Grafik</th></tr>
<tr><td>Bagaimana tren dari waktu ke waktu?</td><td>Garis (line)</td></tr>
<tr><td>Mana yang terbesar?</td><td>Batang horizontal, diurutkan</td></tr>
<tr><td>Bagaimana komposisinya?</td><td>Batang bertumpuk 100% (pie hanya untuk 2–3 bagian)</td></tr>
<tr><td>Bagaimana sebarannya?</td><td>Histogram atau box plot</td></tr>
<tr><td>Apakah dua angka berhubungan?</td><td>Scatter plot</td></tr></table>
<h4>Aturan kejujuran</h4>
<ul><li><b>Grafik batang harus mulai dari nol.</b> Batang dibaca dari panjangnya; sumbu yang dipotong membuat selisih 2% terlihat seperti dua kali lipat. Grafik garis boleh tidak mulai dari nol karena yang dibaca adalah perubahannya.</li>
<li><b>Hindari 3D dan dua sumbu Y</b>. Dua sumbu bisa diatur agar garis tampak berpotongan di mana saja.</li>
<li><b>Warna untuk penekanan</b>, bukan dekorasi: abu-abu untuk konteks, satu warna aksen untuk pesan utama.</li>
<li><b>Judul berisi kesimpulan</b>: bukan "GMV per bulan", tetapi "GMV Maret pulih 40% setelah anjlok di Februari".</li>
<li>Edward Tufte menyebut prinsip <i>data-ink ratio</i>: buang garis bantu, bayangan, dan ornamen yang tidak membawa informasi.</li></ul>
<h4>Dashboard</h4>
<p>Dashboard untuk <b>memantau</b> (apa yang berubah?), analisis untuk <b>menjelaskan</b> (kenapa?). Taruh 3–5 KPI di atas, lengkapi pembanding (target, periode lalu), dan sediakan filter yang benar-benar dipakai. Dashboard yang berisi 40 grafik biasanya tidak dibuka siapa pun.</p>`},

{k:"cerita",judul:"Storytelling & Memo Rekomendasi",materi:`
<p>Analisis yang tidak dipahami pengambil keputusan sama dengan analisis yang tidak pernah dibuat.</p>
<h4>Prinsip piramida (Barbara Minto, McKinsey)</h4>
<p>Mulai dari <b>jawaban</b>, lalu tiga alasan pendukung, lalu bukti di bawahnya. Direksi membaca kalimat pertama; kalau kalimat itu bagus, baru mereka membaca sisanya.</p>
<h4>Kerangka SCQA</h4>
<ul><li><b>Situation:</b> "GMV kuartal I Rp9,5 juta, sesuai rencana."</li>
<li><b>Complication:</b> "Tetapi GMV Februari anjlok 59,7%."</li>
<li><b>Question:</b> "Apakah ini tanda masalah serius?"</li>
<li><b>Answer:</b> "Tidak. Penurunan berasal dari tidak adanya transaksi elektronik besar seperti di Januari; jumlah transaksi dan pembeli relatif stabil."</li></ul>
<h4>Struktur memo satu halaman</h4>
<ol><li><b>Ringkasan</b> (2–3 kalimat): temuan + rekomendasi.</li>
<li><b>Temuan utama</b> dengan angka dan pembanding.</li>
<li><b>Rekomendasi</b> yang bisa dikerjakan: siapa, apa, kapan.</li>
<li><b>Asumsi dan keterbatasan</b>: ukuran sampel, data yang tidak tersedia.</li>
<li><b>Langkah berikutnya</b> dan cara mengukur hasilnya.</li></ol>
<h4>Detail yang membuat kamu dipercaya</h4>
<ul><li>Pakai format angka Indonesia secara konsisten: Rp1,95 juta, 22,2%, bukan campuran titik dan koma.</li>
<li>Bedakan <b>poin persen</b> dan <b>persen</b>: konversi naik dari 4% ke 5% adalah naik 1 poin persen, atau 25%.</li>
<li>Sebutkan ketidakpastian dengan bahasa jelas: "kemungkinan besar", "belum cukup bukti", bukan istilah statistik yang membingungkan.</li>
<li>Siapkan lampiran untuk penanya teknis, tetapi jangan jadikan lampiran sebagai isi utama.</li></ul>`},

{k:"segmen",judul:"Segmentasi Pelanggan & RFM",materi:`
<p>Tidak semua pelanggan perlu diperlakukan sama. Segmentasi membagi pelanggan menjadi kelompok yang perilakunya mirip, supaya tindakan (promo, layanan, komunikasi) lebih tepat sasaran.</p>
<h4>RFM</h4>
<table class="mini-pivot"><tr><th>Huruf</th><th>Arti</th><th>Cara hitung</th></tr>
<tr><td>R (Recency)</td><td>seberapa baru belanja terakhir</td><td>hari sejak transaksi terakhir (kecil = bagus)</td></tr>
<tr><td>F (Frequency)</td><td>seberapa sering</td><td>jumlah transaksi dalam periode</td></tr>
<tr><td>M (Monetary)</td><td>seberapa besar</td><td>total nilai belanja</td></tr></table>
<p>Setiap dimensi diberi skor 1–5 berdasarkan kuintil (20% teratas = 5). Untuk recency, skornya dibalik: makin sedikit hari, makin tinggi skor.</p>
<table class="mini-pivot"><tr><th>Segmen</th><th>Ciri</th><th>Tindakan</th></tr>
<tr><td>Champions</td><td>R, F, M tinggi</td><td>program VIP, akses awal produk baru</td></tr>
<tr><td>Loyal</td><td>F tinggi</td><td>poin loyalitas, ajak memberi ulasan</td></tr>
<tr><td>Berisiko</td><td>F dan M tinggi tetapi R rendah</td><td>kampanye <i>win-back</i> yang personal</td></tr>
<tr><td>Tidur (hibernating)</td><td>semua rendah</td><td>promo murah atau biarkan</td></tr></table>
<p>Di bank, logika yang sama dipakai untuk nasabah tabungan (seberapa baru bertransaksi, seberapa sering, berapa saldo rata-rata). Di jalur Data Scientist, segmentasi dilanjutkan dengan <i>clustering</i> (K-Means), yang menemukan kelompok tanpa aturan buatan.</p>
<div class="bertahap" data-id="da-rfm"><p class="bt-judul">Contoh bertahap: memberi skor recency</p>
<p>Aturan skor R: 0–7 hari = 5, 8–30 hari = 4, 31–60 hari = 3, 61–90 hari = 2, lebih dari 90 hari = 1.</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Pengguna 5 terakhir belanja 4 hari lalu → skor R = <b>5</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Pengguna 3 terakhir belanja 46 hari lalu → skor R = <input class="bt-isian" data-jawab="3" aria-label="Skor R pengguna 3" inputmode="numeric"></div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Pengguna 3 juga punya F dan M tertinggi. Masuk segmen apa? (ketik salah satu: champions, loyal, berisiko, tidur) <input class="bt-isian" data-jawab="berisiko" aria-label="Segmen pengguna 3"></div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>46 hari masuk rentang 31–60 → skor 3. Pelanggan yang dulu sangat aktif dan bernilai besar tetapi sudah lama tidak kembali adalah segmen <b>berisiko</b>. Mereka paling layak dihubungi lebih dulu, karena kehilangan mereka paling mahal.</p></details></div>`},

{k:"musiman",judul:"Tren, Musiman & Proyeksi Sederhana",materi:`
<p>Deret waktu (penjualan harian, transaksi bulanan) terdiri dari <b>tren</b> (arah jangka panjang), <b>musiman</b> (pola berulang), dan <b>acak</b> (sisa yang tidak terjelaskan).</p>
<h4>Kalender bisnis Indonesia</h4>
<ul><li><b>Ramadan dan Idulfitri:</b> belanja pakaian, makanan, dan transportasi melonjak; THR wajib dibayar paling lambat 7 hari sebelum hari raya keagamaan, sehingga daya beli memuncak menjelang Lebaran.</li>
<li><b>Harbolnas 12.12</b> dan tanggal kembar lain (11.11, 10.10): lonjakan satu hari, lalu sering diikuti penurunan karena pembeli sudah "menyetok".</li>
<li><b>Tanggal gajian:</b> banyak karyawan swasta menerima gaji di akhir bulan, ASN di awal bulan. Pola belanja harian sering naik di sekitar tanggal itu.</li>
<li><b>Tahun ajaran baru</b> dan <b>akhir tahun</b>.</li></ul>
<h4>Alat sederhana yang sering cukup</h4>
<ul><li><b>Rata-rata bergerak</b> (moving average) 7 hari untuk meredam pola harian.</li>
<li><b>Proyeksi naif musiman:</b> perkiraan bulan ini = bulan yang sama tahun lalu × (1 + pertumbuhan tahunan). Sering sulit dikalahkan model rumit.</li>
<li><b>MAPE</b> (rata-rata galat persentase absolut) untuk mengukur ketepatan proyeksi: rata-rata dari |aktual − prediksi| ÷ aktual.</li></ul>
<div class="bertahap" data-id="da-ma"><p class="bt-judul">Contoh bertahap: rata-rata bergerak dan MAPE</p>
<p>Pesanan per minggu: 120, 150, 180, 150, 210.</p>
<div class="bt-langkah"><b>1 · Contoh lengkap.</b> Rata-rata bergerak 3 minggu di minggu ke-3 = (120 + 150 + 180) ÷ 3 = <b>150</b>.</div>
<div class="bt-langkah"><b>2 · Lengkapi.</b> Rata-rata bergerak 3 minggu di minggu ke-5 = (180 + 150 + 210) ÷ 3 = <input class="bt-isian" data-jawab="180" aria-label="Rata-rata bergerak minggu 5" inputmode="numeric"></div>
<div class="bt-langkah"><b>3 · Mandiri.</b> Proyeksi untuk dua minggu: 200 dan 100; aktualnya 250 dan 125. MAPE = <input class="bt-isian" data-jawab="20|20%" aria-label="MAPE"> %</div>
<details class="bt-bahas"><summary>Pembahasan</summary><p>Langkah 2: 540 ÷ 3 = <b>180</b>.</p><p>Langkah 3: galat minggu 1 = |250 − 200| ÷ 250 = 20%; minggu 2 = |125 − 100| ÷ 125 = 20%. Rata-ratanya <b>20%</b>. Catatan: MAPE tidak bisa dipakai bila ada nilai aktual nol.</p></details></div>`},

{k:"kerjada",judul:"Dunia Kerja Data Analyst: Indonesia & Global",materi:`
<p>Modul ini merangkum hal yang jarang diajarkan di kampus tetapi menentukan apakah kamu berhasil di pekerjaan pertama.</p>
<h4>Proses rekrutmen yang umum</h4>
<ol><li><b>Seleksi CV:</b> cari kata kunci (SQL, Excel/Spreadsheet, Python, BI tool) dan bukti dampak ("menurunkan waktu laporan dari 2 hari ke 2 jam").</li>
<li><b>Tes teknis online:</b> SQL seperti tantangan Lab (filter, JOIN, agregasi, window function), terkadang Excel dan statistik dasar.</li>
<li><b>Studi kasus / take-home:</b> diberi dataset dan pertanyaan bisnis, lalu presentasi 15–30 menit. Yang dinilai: cara membingkai masalah, ketelitian, dan rekomendasi.</li>
<li><b>Wawancara user:</b> perilaku (metode STAR), cara bekerja dengan pemangku kepentingan, dan motivasi.</li></ol>
<p>Di perusahaan global, alurnya mirip, ditambah wawancara dalam bahasa Inggris dan sering kali tes <i>product sense</i> ("metrik apa yang kamu pantau untuk fitur X?").</p>
<h4>Realitas sehari-hari</h4>
<ul><li>Permintaan datang mendadak dan kabur. Jawab dengan pertanyaan klarifikasi, perkiraan waktu, dan kesepakatan cakupan.</li>
<li>Data sering belum siap. Catat asumsi dan sampaikan risikonya sejak awal, jangan di hari terakhir.</li>
<li>Angka yang kamu laporkan akan dibandingkan dengan angka tim lain. Pastikan definisinya sama (misal: GMV termasuk ongkir atau tidak?).</li></ul>
<h4>Etika dan hukum</h4>
<p>Indonesia memiliki <b>UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</b>. Prinsip praktis untuk analis: pakai data seminimal mungkin untuk tujuan yang jelas, samarkan identitas (nama, NIK, nomor telepon) di dataset analisis, batasi akses, dan jangan pernah membawa data perusahaan ke portofolio pribadi. Untuk portofolio, pakai data publik (misal portal Satu Data Indonesia atau BPS) atau data simulasi.</p>
<h4>Portofolio yang dilirik perekrut</h4>
<ul><li>2–3 proyek, masing-masing dimulai dengan <b>pertanyaan bisnis</b>, bukan dengan nama alatnya.</li>
<li>Tunjukkan proses: pembersihan data, keputusan analisis, dan keterbatasan.</li>
<li>Akhiri dengan rekomendasi yang bisa dijalankan dan ringkasan satu paragraf.</li></ul>`},
];

const SOAL_DA = [
// ---- peran ----
{k:"peran",t:"mc",lv:1,q:"Manajer berkata, 'Penjualan turun, tolong cari tahu kenapa.' Langkah pertama yang paling tepat:",o:["Mengajukan pertanyaan klarifikasi: metrik apa, dibanding periode apa, dan keputusan apa yang akan diambil","Langsung menarik semua data penjualan setahun terakhir","Membuat dashboard penjualan baru","Membangun model prediksi penjualan"],a:0,
 e:"Permintaan kabur harus diubah dulu menjadi pertanyaan yang bisa dijawab. Tanpa klarifikasi, kamu bisa menghabiskan dua hari menganalisis GMV padahal yang dimaksud jumlah pesanan, atau membandingkan dengan minggu lalu padahal yang penting tahun lalu.",
 w:[null,"Menarik semua data tanpa tujuan membuang waktu dan membuat analisis melebar.","Dashboard adalah alat memantau, belum menjawab 'kenapa'.","Prediksi tidak menjelaskan penyebab penurunan yang sudah terjadi."],h:"Apa yang harus jelas sebelum menyentuh data?"},
{k:"peran",t:"mc",lv:1,q:"Pertanyaan 'Apa yang akan terjadi pada churn bulan depan kalau harga paket dinaikkan 10%?' paling cocok dikerjakan oleh…",o:["Data scientist, karena butuh prediksi dan perkiraan efek suatu tindakan","Data engineer","Data analyst dengan satu pivot table","Tim desain"],a:0,
 e:"Analyst fokus pada apa yang terjadi dan kenapa; scientist pada apa yang akan terjadi dan efek tindakan (prediksi, eksperimen, inferensi kausal). Di perusahaan kecil, satu orang bisa mengerjakan keduanya, tetapi jenis pertanyaannya tetap berbeda.",
 w:[null,"Data engineer menyiapkan aliran data, bukan menjawab pertanyaan bisnis seperti ini.","Pivot table merangkum masa lalu; ia tidak memperkirakan efek kenaikan harga.","Ini pertanyaan analitis, bukan desain."]},
{k:"peran",t:"mc",lv:2,q:"Pohon hipotesis untuk 'GMV turun' yang memenuhi prinsip MECE adalah…",o:["Sesi pengunjung turun / konversi turun / nilai per pesanan turun","Aplikasi error / kompetitor promo / cuaca buruk","Jakarta turun / kategori fashion turun / pengguna baru turun","Marketing kurang / harga mahal / stok habis / ongkir mahal"],a:0,
 e:"GMV = sesi × konversi × AOV, jadi tiga cabang itu tidak tumpang tindih dan bersama-sama mencakup semua kemungkinan matematis. Penyebab seperti error aplikasi atau promo kompetitor kemudian dicari di bawah cabang yang terbukti bergerak.",
 w:[null,"Daftar ini berisi dugaan acak; ada penyebab lain yang tidak tercakup, jadi tidak 'collectively exhaustive'.","Ketiga cabang tumpang tindih (pengguna baru di Jakarta yang membeli fashion masuk tiga cabang sekaligus).","Daftar ini tumpang tindih (harga mahal dan ongkir mahal sama-sama memengaruhi konversi) dan tidak lengkap."]},
{k:"peran",t:"mc",lv:2,q:"Kamu menduga penurunan GMV disebabkan error aplikasi Android. Kebiasaan analis yang baik adalah…",o:["Mencari data yang bisa membantah dugaan itu, misalnya apakah GMV dari iOS dan web juga turun","Mencari grafik yang menunjukkan crash Android naik, lalu langsung melapor","Tidak menulis dugaan apa pun agar tetap objektif","Menunggu sampai datanya sempurna"],a:0,
 e:"Kalau iOS dan web juga turun dengan pola yang sama, error Android kemungkinan bukan penyebab utama. Menguji dugaan dengan bukti pembanding mencegah confirmation bias.",
 w:[null,"Mencari bukti yang hanya mendukung dugaan adalah confirmation bias; korelasi crash dan GMV bisa kebetulan.","Menulis dugaan justru membantu, asalkan diuji dengan jujur.","Data tidak pernah sempurna; analis bekerja dengan asumsi yang dicatat."]},
{k:"peran",t:"mc",lv:1,q:"Atasan butuh jawaban sebelum rapat pukul 15.00 hari ini. Pendekatan yang paling profesional:",o:["Sampaikan perkiraan awal yang cukup akurat sebelum rapat, sebutkan asumsinya, lalu lanjutkan analisis mendalam setelahnya","Minta rapat diundur sampai analisis sempurna","Kirim tabel mentah tanpa kesimpulan","Diam saja dan kirim hasil besok"],a:0,
 e:"Keputusan bisnis punya tenggat. Jawaban yang tepat waktu dengan asumsi jelas sering lebih bernilai daripada jawaban sempurna yang terlambat.",
 w:[null,"Rapat bisnis jarang menunggu analisis; kamu kehilangan kesempatan memengaruhi keputusan.","Tabel mentah memindahkan pekerjaan analisis ke atasan.","Tidak berkomunikasi membuat atasan kehilangan kepercayaan."]},
{k:"peran",t:"is",lv:1,q:"Singkatan dari prinsip memecah masalah menjadi cabang yang tidak tumpang tindih dan bersama-sama lengkap adalah… (4 huruf)",a:["MECE"],
 e:"MECE = Mutually Exclusive, Collectively Exhaustive. Prinsip ini dipopulerkan konsultan manajemen dan dipakai luas di analisis bisnis.",h:"Mutually … Collectively …"},

// ---- metrik ----
{k:"metrik",t:"mc",lv:1,q:"Minggu ini: 40.000 sesi, konversi 3%, AOV Rp200.000. Berapa GMV-nya?",o:["Rp240.000.000","Rp24.000.000","Rp2.400.000.000","Rp80.000.000"],a:0,vr:"py",vjalan:"g = 40000 * 3 // 100 * 200000\nprint('Rp' + format(g, ',').replace(',', '.'))",
 e:"GMV = sesi × konversi × AOV = 40.000 × 0,03 × 200.000. Langkahnya: 40.000 × 3% = 1.200 pesanan; 1.200 × Rp200.000 = Rp240.000.000.",
 w:[null,"Salah satu angka nol hilang. Cek lagi 1.200 pesanan × Rp200.000.","Konversi 3% dibaca sebagai 30%.","Ini hasil 40.000 × 2.000; konversi dan AOV tertukar perannya."]},
{k:"metrik",t:"mc",lv:2,q:"Membandingkan kinerja dua kota yang jumlah penggunanya sangat berbeda, metrik yang paling adil adalah…",o:["Rasio, misalnya konversi atau GMV per pengguna aktif","Total GMV","Total jumlah pesanan","Jumlah unduhan aplikasi"],a:0,
 e:"Jumlah (count) mengikuti ukuran. Rasio menetralkan ukuran sehingga perbandingan menunjukkan kinerja, bukan sekadar besar-kecilnya pasar.",
 w:[null,"Kota yang lebih besar hampir pasti 'menang' di total GMV.","Sama seperti total GMV, ini bias ke kota besar.","Unduhan adalah vanity metric dan tidak mencerminkan kinerja."]},
{k:"metrik",t:"mc",lv:2,q:"Tim produk mengejar kenaikan konversi checkout. Metrik guardrail yang paling tepat dipantau bersamaan adalah…",o:["Tingkat pembatalan dan retur pesanan","Jumlah pengikut media sosial","Total unduhan aplikasi","Jumlah karyawan"],a:0,
 e:"Guardrail adalah metrik yang tidak boleh memburuk. Konversi bisa dinaikkan dengan cara yang merugikan, misalnya mempermudah checkout tanpa konfirmasi sehingga pembatalan dan retur naik.",
 w:[null,"Pengikut media sosial tidak terkait langsung dengan kualitas checkout.","Unduhan adalah vanity metric.","Jumlah karyawan tidak relevan dengan eksperimen checkout."]},
{k:"metrik",t:"mc",lv:1,q:"Manakah contoh vanity metric?",o:["Total unduhan aplikasi sejak diluncurkan","Persentase pengguna baru yang bertransaksi dalam 7 hari","Tingkat churn bulanan","Nilai rata-rata pesanan"],a:0,
 e:"Total kumulatif hampir selalu naik dan tidak menunjukkan apakah bisnis sehat. Tiga pilihan lain membantu keputusan karena bisa naik atau turun sebagai respons atas tindakan.",
 w:[null,"Aktivasi 7 hari adalah metrik yang sangat berguna.","Churn adalah metrik inti kesehatan bisnis berlangganan.","AOV membantu keputusan harga dan bundling."]},
{k:"metrik",t:"mc",lv:3,q:"Sesi turun 4%, AOV turun 7%, tetapi konversi naik 25% (relatif). Apa yang terjadi pada GMV?",o:["Naik sekitar 12%","Turun sekitar 11%","Naik 14%","Tidak berubah"],a:0,vr:"py",vjalan:"g = 0.96 * 1.25 * 0.93\nprint('Naik sekitar ' + str(round((g - 1) * 100)) + '%')",
 e:"Perubahan berantai dikalikan, bukan dijumlahkan: 0,96 × 1,25 × 0,93 = 1,116, jadi GMV naik sekitar 12%. Inilah yang terjadi pada contoh Minggu A ke Minggu B di materi.",
 w:[null,"Arah perubahan konversi terbaca terbalik.","Ini hasil menjumlahkan persentase (−4 + 25 − 7 = 14); persentase berantai harus dikalikan.","Perubahan ketiga faktor tidak saling meniadakan."]},
{k:"metrik",t:"is",lv:2,q:"Konversi naik dari 4% menjadi 5%. Berapa kenaikan relatifnya dalam persen? (angka saja)",a:["25","25%"],vr:"py",vjalan:"print(round((5 - 4) / 4 * 100))",
 e:"Kenaikan relatif = (5 − 4) ÷ 4 = 25%. Sedangkan kenaikan absolutnya 1 poin persen. Selalu sebutkan mana yang kamu maksud dalam laporan."},

// ---- bersih ----
{k:"bersih",t:"mc",lv:1,q:"Kolom 'pendapatan' berisi NULL untuk toko yang belum melapor. Mengganti NULL dengan 0 sebelum menghitung rata-rata akan…",o:["Menurunkan rata-rata secara palsu, karena toko yang belum melapor dianggap berpendapatan nol","Tidak berpengaruh","Menaikkan rata-rata","Membuat perhitungan lebih akurat"],a:0,
 e:"NULL berarti tidak diketahui. AVG() di SQL otomatis melewati NULL. Kalau diganti 0, toko itu ikut dihitung dengan pendapatan nol dan rata-rata turun.",
 w:[null,"Pengaruhnya nyata: penyebut bertambah, pembilang tidak.","Menambah angka nol tidak mungkin menaikkan rata-rata nilai positif.","Justru kurang akurat karena mengarang nilai."]},
{k:"bersih",t:"mc",lv:2,q:"Data pelanggan berisi nomor '081234567890', '6281234567890', dan '+62 812-3456-7890'. Langkah pembersihan yang tepat:",o:["Standarkan ke satu format (misal 62812…): hapus spasi dan tanda hubung, ganti awalan 0 dan +62 menjadi 62","Hapus semua yang tidak berawalan 08","Biarkan saja karena tiap baris berbeda","Gabungkan ketiganya menjadi satu kolom teks panjang"],a:0,
 e:"Ketiganya adalah nomor yang sama. Tanpa standardisasi, satu pelanggan terhitung tiga kali dan JOIN antartabel gagal.",
 w:[null,"Menghapus berarti membuang pelanggan yang sah.","Dibiarkan akan menghasilkan duplikasi pelanggan.","Itu justru merusak struktur data."]},
{k:"bersih",t:"mc",lv:2,q:"Total GMV hasil query-mu Rp1,52 miliar, sedangkan laporan Finance Rp1,48 miliar untuk periode yang sama. Tindakan yang tepat:",o:["Telusuri selisihnya: definisi (batal/retur, ongkir, pajak), rentang tanggal, dan zona waktu, sebelum angka dipakai","Pakai angkamu karena dihitung langsung dari database","Pakai angka Finance tanpa bertanya","Ambil rata-rata keduanya"],a:0,
 e:"Rekonsiliasi adalah kebiasaan wajib. Selisih biasanya punya penjelasan (misal Finance mengurangi retur, atau memotong hari dalam WIB sedangkan database UTC). Angka yang tidak cocok tanpa penjelasan akan menghancurkan kepercayaan pada laporanmu.",
 w:[null,"Database juga bisa salah definisi; langsung database bukan berarti benar.","Kamu harus tahu kenapa berbeda, bukan sekadar mengikuti.","Rata-rata dua angka yang berbeda definisi tidak bermakna."]},
{k:"bersih",t:"mc",lv:1,q:"Kolom tanggal berisi '03/04/2026'. Risiko utamanya adalah…",o:["Bisa dibaca 3 April (format Indonesia) atau 4 Maret (format Amerika)","Tahunnya salah","Tidak ada risiko","Tanggal tidak bisa disimpan di database"],a:0,
 e:"Format tanggal ambigu adalah sumber kesalahan klasik saat menggabungkan file dari sistem berbeda. Format ISO 'YYYY-MM-DD' menghilangkan ambiguitas dan bisa diurutkan seperti teks.",
 w:[null,"Tahun 2026 tidak bermasalah.","Ambiguitas hari-bulan adalah risiko nyata.","Tanggal bisa disimpan, masalahnya cara membacanya."]},
{k:"bersih",t:"mc",lv:2,q:"Kamu menemukan 30 transaksi bernilai Rp0. Tindakan yang paling tepat:",o:["Cari tahu penyebabnya (voucher 100%, data uji, atau bug), lalu putuskan dan catat apakah dikeluarkan dari analisis","Hapus diam-diam","Ganti dengan rata-rata nilai transaksi","Biarkan dan jangan disebut"],a:0,
 e:"Nilai Rp0 bisa sah (transaksi gratis dengan voucher penuh) atau tidak sah (transaksi uji internal). Keputusan membuang data harus berdasar dan tercatat supaya orang lain bisa memeriksa ulang.",
 w:[null,"Menghapus tanpa jejak membuat hasil tidak bisa diaudit.","Mengarang nilai berarti memalsukan data.","Membiarkan tanpa memahami bisa merusak rata-rata."]},
{k:"bersih",t:"is",lv:1,q:"Tabel berisi 1.000 baris; 50 pesanan tercatat dua kali (setiap pesanan itu muncul 2 baris). Berapa pesanan unik?",a:["950","950 pesanan"],vr:"py",vjalan:"print(1000 - 50)",
 e:"50 pesanan dobel berarti ada 50 baris kelebihan: 1.000 − 50 = 950. Salah umum: mengurangi 100."},

// ---- sqlbisnis ----
{k:"sqlbisnis",t:"mc",lv:1,tb:"tbPengguna",kode:"SELECT COUNT(*)\nFROM pengguna\nWHERE kota IN ('Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Makassar');",vr:"sql",vx:[[11]],
 q:"Berapa hasil query ini pada tabel pengguna?",o:["11","5","16","4"],a:0,
 e:"IN mencocokkan salah satu dari lima kota. Jakarta 4, Surabaya 2, Bandung 2, Medan 2, Makassar 1 = 11. Lima kota lainnya (Semarang, Yogyakarta, Denpasar) tidak ikut.",
 w:[null,"5 adalah banyaknya kota di daftar IN, bukan banyaknya pengguna.","16 adalah seluruh pengguna; WHERE sudah menyaring.","4 hanya jumlah pengguna Jakarta."]},
{k:"sqlbisnis",t:"mc",lv:1,kode:"SELECT COUNT(*), COUNT(DISTINCT pengguna_id)\nFROM transaksi;",vr:"sql",vx:[[36,9]],
 q:"Tabel transaksi berisi 36 baris dari beberapa pembeli. Hasil query ini adalah…",o:["36 dan 9","36 dan 36","9 dan 9","36 dan 16"],a:0,
 e:"COUNT(*) menghitung baris (36 transaksi). COUNT(DISTINCT pengguna_id) menghitung pembeli unik (9 orang). Ketika atasan bertanya 'berapa orang', gunakan DISTINCT.",
 w:[null,"Banyak pengguna bertransaksi lebih dari sekali, jadi pembeli unik lebih sedikit.","COUNT(*) menghitung semua baris.","16 adalah jumlah pengguna terdaftar; 7 di antaranya belum pernah bertransaksi."]},
{k:"sqlbisnis",t:"mc",lv:2,q:"Query ini menghasilkan error di banyak database. Kenapa?",kode:"SELECT kategori, SUM(nilai) AS gmv\nFROM transaksi\nWHERE gmv > 1000000\nGROUP BY kategori;",o:["WHERE dijalankan sebelum SELECT dan GROUP BY, jadi alias gmv dan hasil SUM belum ada; syarat agregat ditulis di HAVING","Nama kolom kategori salah","SUM tidak boleh dipakai bersama GROUP BY","Angka harus ditulis dengan titik ribuan"],a:0,
 e:"Urutan eksekusi: FROM → WHERE → GROUP BY → HAVING → SELECT. Yang benar: … GROUP BY kategori HAVING SUM(nilai) > 1000000.",
 w:[null,"Kolom kategori ada di tabel transaksi.","SUM justru paling sering dipakai bersama GROUP BY.","SQL tidak memakai pemisah ribuan di angka."]},
{k:"sqlbisnis",t:"mc",lv:2,tb:["tbPengguna"],kode:"SELECT COUNT(*)\nFROM pengguna p\nLEFT JOIN transaksi t ON t.pengguna_id = p.id\nWHERE t.id IS NULL;",vr:"sql",vx:[[7]],
 q:"Apa arti hasil query ini?",o:["Jumlah pengguna terdaftar yang belum pernah bertransaksi (7)","Jumlah transaksi tanpa pengguna (7)","Jumlah semua pengguna (16)","Jumlah transaksi batal (7)"],a:0,
 e:"LEFT JOIN mempertahankan semua pengguna. Yang tidak punya pasangan transaksi mendapat t.id = NULL. Pola ini disebut anti-join.",
 w:[null,"Arah JOIN-nya dari pengguna, jadi yang dihitung adalah pengguna.","WHERE t.id IS NULL menyaring, jadi tidak semua pengguna ikut.","Status transaksi tidak disebut di query."]},
{k:"sqlbisnis",t:"mc",lv:3,q:"Tabel pesanan (1 baris per pesanan, kolom ongkir) di-JOIN ke tabel item_pesanan (beberapa baris per pesanan), lalu dihitung SUM(ongkir). Apa yang terjadi?",o:["Total ongkir terlalu besar, karena ongkir satu pesanan terulang sebanyak jumlah itemnya (fan-out)","Total ongkir tepat","Total ongkir terlalu kecil","Query error"],a:0,
 e:"JOIN satu-ke-banyak mengulang baris sisi 'satu'. Solusinya: jumlahkan ongkir di tabel pesanan sebelum JOIN (pakai CTE/subquery), atau pastikan tingkat detail (grain) tabel sama sebelum agregasi.",
 w:[null,"Ini jebakan klasik; angkanya tidak tepat.","Pengulangan baris membuat total membesar, bukan mengecil.","Query tetap jalan tanpa error, itulah yang membuatnya berbahaya."]},
{k:"sqlbisnis",t:"mc",lv:2,kode:"SELECT COUNT(*)\nFROM transaksi\nWHERE status = 'selesai';",vr:"sql",vx:[[28]],
 q:"Dari 36 transaksi, berapa yang berstatus selesai menurut query ini?",o:["28","36","8","22"],a:0,
 e:"28 selesai, sisanya 8 batal atau retur. Laporan GMV yang lupa menyaring status akan memasukkan 8 transaksi yang tidak menghasilkan uang.",
 w:[null,"36 adalah semua transaksi termasuk batal dan retur.","8 adalah transaksi yang tidak selesai.","Hitung ulang: 36 − 8."]},

// ---- sqllanjut ----
{k:"sqllanjut",t:"mc",lv:2,q:"Kamu ingin satu kategori teratas per kota. Fungsi yang paling tepat adalah…",o:["ROW_NUMBER() OVER (PARTITION BY kota ORDER BY gmv DESC), lalu ambil nomor = 1","GROUP BY kota lalu MAX(kategori)","ORDER BY gmv DESC LIMIT 1","COUNT(DISTINCT kategori)"],a:0,
 e:"Top-N per kelompok adalah kegunaan klasik ROW_NUMBER dengan PARTITION BY. LIMIT 1 hanya memberi satu baris untuk seluruh tabel, bukan per kota.",
 w:[null,"MAX(kategori) mengambil kategori dengan huruf terakhir menurut abjad, bukan GMV terbesar.","LIMIT 1 berlaku untuk seluruh hasil, bukan per kota.","Ini menghitung banyaknya kategori."]},
{k:"sqllanjut",t:"mc",lv:2,q:"Nilai penjualan: 500, 400, 400, 300. Peringkat dengan DENSE_RANK() (urut menurun) adalah…",o:["1, 2, 2, 3","1, 2, 3, 4","1, 2, 2, 4","1, 1, 2, 3"],a:0,
 e:"DENSE_RANK memberi nilai seri peringkat sama tanpa melompat. RANK akan memberi 1, 2, 2, 4. ROW_NUMBER memberi 1, 2, 3, 4.",
 w:[null,"Itu hasil ROW_NUMBER.","Itu hasil RANK (melompat ke 4).","500 tidak seri dengan 400."]},
{k:"sqllanjut",t:"mc",lv:2,kode:"WITH b AS (\n  SELECT strftime('%Y-%m', tanggal) AS bulan, SUM(nilai) AS gmv\n  FROM transaksi WHERE status = 'selesai' GROUP BY bulan\n)\nSELECT bulan, SUM(gmv) OVER (ORDER BY bulan) AS kumulatif\nFROM b ORDER BY bulan;",vr:"sql",vx:[["2026-01",4844000],["2026-02",6797000],["2026-03",9528000]],
 q:"GMV selesai per bulan: Januari 4.844.000, Februari 1.953.000, Maret 2.731.000. Nilai kolom kumulatif di bulan Maret adalah…",o:["9.528.000","2.731.000","4.684.000","6.797.000"],a:0,
 e:"SUM() OVER (ORDER BY bulan) adalah total berjalan: 4.844.000 + 1.953.000 + 2.731.000 = 9.528.000. Baris Februari bernilai 6.797.000.",
 w:[null,"Itu GMV Maret saja, bukan kumulatif.","Itu Februari + Maret, tanpa Januari.","Itu nilai kumulatif Februari."]},
{k:"sqllanjut",t:"mc",lv:3,q:"Fungsi LAG(gmv) OVER (ORDER BY bulan) pada baris bulan pertama menghasilkan…",o:["NULL, karena tidak ada baris sebelumnya","0","GMV bulan itu sendiri","Error"],a:0,
 e:"LAG mengambil nilai dari baris sebelumnya. Baris pertama tidak punya pendahulu, jadi hasilnya NULL (kecuali diberi nilai bawaan, misal LAG(gmv, 1, 0)). Akibatnya pertumbuhan bulan pertama juga NULL.",
 w:[null,"Bukan 0, kecuali kamu menuliskan nilai bawaan sebagai argumen ketiga.","LAG tidak mengembalikan baris itu sendiri.","Tidak error; hasilnya NULL."]},
{k:"sqllanjut",t:"mc",lv:3,q:"Analisis kohort lebih berguna daripada sekadar menghitung pengguna aktif bulanan karena…",o:["Pengguna aktif bisa naik karena pengguna baru membanjir, padahal pengguna lama terus pergi; kohort memperlihatkan retensi tiap angkatan","Kohort selalu menghasilkan angka lebih besar","Kohort tidak memerlukan SQL","Pengguna aktif bulanan tidak bisa dihitung"],a:0,
 e:"Kohort memisahkan efek akuisisi dan retensi. Startup yang tumbuh cepat bisa tampak sehat di angka total meskipun retensinya buruk; kohort mengungkapnya lebih awal.",
 w:[null,"Kohort tidak soal besar-kecilnya angka.","Kohort biasanya dihitung dengan SQL atau Python.","Pengguna aktif bulanan mudah dihitung; masalahnya ia menyembunyikan dinamika."]},
{k:"sqllanjut",t:"mc",lv:2,kode:"SELECT COUNT(*) FROM (\n  SELECT pengguna_id\n  FROM transaksi\n  WHERE status = 'selesai'\n  GROUP BY pengguna_id\n  HAVING COUNT(*) >= 3\n);",vr:"sql",vx:[[5]],
 q:"Berapa pembeli yang memiliki minimal 3 transaksi selesai?",o:["5","3","9","28"],a:0,
 e:"Subquery menghasilkan satu baris per pembeli yang lolos HAVING (Dewi, Rina, Siti, Budi, Maya); query luar menghitung barisnya: 5.",
 w:[null,"3 adalah ambang syaratnya, bukan hasilnya.","9 adalah semua pembeli.","28 adalah jumlah transaksi selesai."]},

// ---- banding ----
{k:"banding",t:"mc",lv:1,q:"Gaji 5 karyawan (juta rupiah): 6, 7, 7, 8, 52. Angka yang paling mewakili gaji 'umumnya' adalah…",o:["Median 7 juta","Rata-rata 16 juta","Maksimum 52 juta","Total 80 juta"],a:0,vr:"py",vjalan:"import statistics\nprint('Median ' + str(statistics.median([6, 7, 7, 8, 52])) + ' juta')",
 e:"Satu gaji direktur 52 juta menarik rata-rata ke 16 juta, padahal empat dari lima orang bergaji 6–8 juta. Median tahan terhadap nilai ekstrem.",
 w:[null,"Rata-rata terdistorsi satu nilai ekstrem.","Maksimum hanya satu orang.","Total tidak menjawab gaji per orang."]},
{k:"banding",t:"mc",lv:2,q:"Penjualan April tahun ini turun 30% dibanding April tahun lalu. Tahun lalu Idulfitri jatuh di bulan April, tahun ini di bulan Maret. Kesimpulan yang tepat:",o:["Perbandingan April-ke-April menyesatkan; sejajarkan periode berdasarkan jarak ke Lebaran sebelum menyimpulkan","Bisnis sedang krisis","Tim marketing gagal","Penurunan 30% pasti karena kompetitor"],a:0,
 e:"Lebaran bergeser sekitar 10–11 hari lebih awal setiap tahun Masehi. Bulan yang memuat Lebaran hampir selalu lebih tinggi, jadi YoY per bulan kalender bisa memberi sinyal palsu.",
 w:[null,"Belum tentu; ada efek kalender yang belum dikoreksi.","Tidak ada bukti kegagalan marketing.","Tidak ada data kompetitor yang mendukung."]},
{k:"banding",t:"mc",lv:2,q:"Data Tim A dan Tim B: prioritas A 72/90, B 18/20; umum A 2/10, B 24/80. Total A 74%, total B 42%. Tim mana yang lebih baik?",o:["Tim B, karena unggul di kedua segmen; A hanya mendapat lebih banyak nasabah prioritas","Tim A, karena totalnya 74%","Sama saja","Tidak bisa disimpulkan sama sekali"],a:0,
 e:"Ini paradoks Simpson. Per segmen: prioritas A 80% vs B 90%; umum A 20% vs B 30%. Komposisi segmen yang berbeda membuat angka total menipu.",
 w:[null,"Angka total dipengaruhi komposisi segmen, bukan kemampuan tim.","B unggul jelas di kedua segmen.","Data per segmen cukup untuk menyimpulkan."]},
{k:"banding",t:"mc",lv:2,q:"Produk baru terjual 3 unit bulan lalu dan 12 unit bulan ini. Laporan menulis 'tumbuh 300%!'. Masalahnya adalah…",o:["Efek basis: pertumbuhan persentase dari angka sangat kecil terdengar dramatis tetapi tidak bermakna banyak; sebutkan angka absolutnya","Perhitungannya salah, seharusnya 400%","Tidak ada masalah","Seharusnya dilaporkan dalam rupiah"],a:0,vr:"py",vx:"300",vjalan:"print(round((12 - 3) / 3 * 100))",
 e:"(12 − 3) ÷ 3 = 300%, jadi angkanya benar. Tetapi kenaikan 9 unit jauh lebih kecil artinya dibanding produk lain yang naik 5% dari 10.000 unit. Laporkan angka absolut di samping persentase.",
 w:[null,"300% sudah benar (bukan 400%); 400% adalah rasio 12 ÷ 3 dalam persen.","Angkanya benar tetapi menyesatkan tanpa konteks.","Satuan bukan masalah utamanya."]},
{k:"banding",t:"mc",lv:3,q:"Toko-toko dengan penjualan terburuk bulan lalu diberi pelatihan, dan bulan ini penjualan mereka naik. Kenapa ini belum membuktikan pelatihannya berhasil?",o:["Regresi ke rata-rata: kelompok yang dipilih karena nilainya ekstrem cenderung kembali mendekati normal meski tanpa intervensi; perlu kelompok pembanding","Karena penjualan selalu naik","Karena pelatihan tidak pernah berhasil","Karena datanya terlalu besar"],a:0,
 e:"Bulan buruk sering mengandung unsur kebetulan (cuaca, stok telat). Bulan berikutnya cenderung lebih normal dengan sendirinya. Bandingkan dengan toko serupa yang tidak dilatih (idealnya dipilih acak).",
 w:[null,"Penjualan tidak selalu naik.","Klaim terlalu umum dan tidak berdasar.","Ukuran data bukan masalahnya."]},
{k:"banding",t:"is",lv:2,q:"Konversi Tim B di segmen nasabah umum: 24 closing dari 80 telepon. Berapa persen? (angka saja)",a:["30","30%"],vr:"py",vjalan:"print(round(24 / 80 * 100))",
 e:"24 ÷ 80 = 0,30 = 30%. Tim A di segmen yang sama hanya 2 ÷ 10 = 20%."},

// ---- abtest ----
{k:"abtest",t:"mc",lv:2,q:"Hasil A/B test: p-value = 0,03. Interpretasi yang benar adalah…",o:["Jika sebenarnya tidak ada efek, peluang melihat perbedaan sebesar ini atau lebih ekstrem adalah 3%","Peluang varian B lebih baik adalah 97%","Peluang hipotesis nol benar adalah 3%","Efeknya sebesar 3%"],a:0,
 e:"p-value dihitung dengan mengandaikan hipotesis nol benar. Ia bukan peluang hipotesis benar atau salah, dan bukan ukuran besarnya efek.",
 w:[null,"Ini salah tafsir paling umum; p-value tidak memberi peluang B lebih baik.","p-value bukan peluang hipotesis nol benar.","Besar efek dilihat dari selisih metrik dan interval kepercayaannya."]},
{k:"abtest",t:"mc",lv:2,q:"Tes direncanakan 2 minggu, tetapi di hari ke-3 p-value sudah 0,04 sehingga tim ingin menghentikannya dan meluncurkan varian B. Masalahnya:",o:["Mengintip dan berhenti lebih awal menaikkan peluang positif palsu jauh di atas 5%; selesaikan sesuai rencana","Tidak ada masalah karena p < 0,05","Seharusnya menunggu sampai p = 0","Seharusnya menambah varian C"],a:0,
 e:"p-value naik turun selama tes berjalan. Jika kamu berhenti di saat pertama ia menyentuh 0,05, peluang menemukan 'efek' yang sebenarnya tidak ada meningkat tajam. Tiga hari juga belum mencakup siklus mingguan.",
 w:[null,"Aturan p < 0,05 hanya sah bila diperiksa sekali di akhir sesuai rencana.","p-value tidak dirancang untuk mencapai 0.","Menambah varian tidak menyelesaikan masalah mengintip."]},
{k:"abtest",t:"mc",lv:3,q:"Rencana pembagian 50:50, tetapi hasilnya 51.200 pengguna di A dan 48.800 di B. Apa artinya?",o:["Kemungkinan ada Sample Ratio Mismatch (bug pembagian atau pencatatan); hasil tes tidak boleh dipercaya sebelum penyebabnya ditemukan","Tidak masalah, selisihnya kecil","B lebih buruk karena penggunanya lebih sedikit","Tes harus diulang dengan 60:40"],a:0,vr:"py",vjalan:"from statistics import NormalDist\nn = 100000\nz = (51200 - n / 2) / (n * 0.25) ** 0.5\nprint('Kemungkinan ada Sample Ratio Mismatch (bug pembagian atau pencatatan); hasil tes tidak boleh dipercaya sebelum penyebabnya ditemukan' if 2 * (1 - NormalDist().cdf(z)) < 0.001 else 'Tidak masalah, selisihnya kecil')",
 e:"Dengan 100.000 pengguna, selisih 2.400 dari pembagian 50:50 hampir mustahil terjadi karena kebetulan (z ≈ 7,6). Biasanya penyebabnya bug: misal varian B lebih lambat dimuat sehingga sebagian pengguna tidak tercatat. Bug yang sama bisa membiaskan metrik.",
 w:[null,"Selisih 2,4 poin persen pada 100.000 sampel sangat jauh dari kebetulan.","Jumlah pengguna bukan ukuran kinerja varian.","Masalahnya bug pembagian, bukan rasionya."]},
{k:"abtest",t:"mc",lv:2,q:"Varian B menaikkan konversi secara signifikan (p = 0,01) sebesar 0,02 poin persen, dengan biaya pengembangan Rp400 juta. Keputusan yang paling bijak:",o:["Hitung dampak bisnisnya; signifikan secara statistik belum tentu layak secara bisnis","Langsung luncurkan karena signifikan","Abaikan semua hasil A/B test","Ulangi tes sampai p = 0,001"],a:0,
 e:"Sampel besar bisa membuat efek sangat kecil menjadi signifikan. Keputusan harus mempertimbangkan besarnya efek, nilai rupiahnya, dan biaya.",
 w:[null,"Signifikan tidak sama dengan penting.","Hasilnya valid, hanya perlu ditimbang nilainya.","Mengulang tes tidak menjawab pertanyaan kelayakan bisnis."]},
{k:"abtest",t:"mc",lv:1,q:"Kenapa A/B test sebaiknya berjalan minimal satu minggu penuh?",o:["Perilaku pengguna berbeda antar-hari (hari kerja, akhir pekan, tanggal gajian); tes pendek bisa menangkap pola satu hari saja","Karena aturan pemerintah","Agar server tidak penuh","Karena p-value hanya bisa dihitung setelah 7 hari"],a:0,
 e:"Jika tes hanya berjalan Senin–Rabu, hasilnya mungkin tidak berlaku untuk akhir pekan. Siklus penuh membuat sampel lebih mewakili.",
 w:[null,"Tidak ada aturan pemerintah tentang durasi A/B test.","Beban server bukan alasan statistik.","p-value bisa dihitung kapan saja; masalahnya keterwakilan sampel."]},
{k:"abtest",t:"is",lv:2,q:"Grup B: 9.800 pengguna, 490 checkout. Berapa persen konversinya? (angka saja, tanpa desimal)",a:["5","5%","5,0"],vr:"py",vjalan:"print(round(490 / 9800 * 100))",
 e:"490 ÷ 9.800 = 0,05 = 5%."},

// ---- visual ----
{k:"visual",t:"mc",lv:1,q:"Untuk menunjukkan tren GMV harian selama 90 hari, grafik yang paling tepat adalah…",o:["Grafik garis","Pie chart","Batang 3D","Tabel 90 baris"],a:0,
 e:"Garis menonjolkan perubahan dari waktu ke waktu. Pie untuk komposisi; 3D mendistorsi; tabel panjang sulit dibaca polanya.",
 w:[null,"Pie menunjukkan bagian dari keseluruhan, bukan tren.","Efek 3D menyulitkan membaca nilai.","Tabel bagus untuk nilai pasti, buruk untuk melihat pola."]},
{k:"visual",t:"mc",lv:2,q:"Grafik batang konversi: Tim A 50%, Tim B 52%, dengan sumbu Y dimulai dari 49%. Masalahnya adalah…",o:["Batang B tampak tiga kali lebih tinggi padahal selisihnya hanya 2 poin; grafik batang harus mulai dari nol","Warnanya kurang menarik","Seharusnya memakai pie chart","Tidak ada masalah"],a:0,
 e:"Batang dibaca dari panjangnya. Memotong sumbu memperbesar selisih secara visual dan menyesatkan pembaca. Untuk grafik garis aturannya lebih longgar karena yang dibaca adalah perubahan.",
 w:[null,"Warna bukan masalah utamanya.","Pie tidak cocok untuk membandingkan dua tim.","Sumbu terpotong adalah masalah kejujuran visual."]},
{k:"visual",t:"mc",lv:1,q:"Judul grafik yang paling baik untuk rapat direksi adalah…",o:["'GMV Maret pulih 40% setelah anjlok di Februari'","'Grafik GMV'","'GMV per bulan Q1 2026 (Rp)'","'Data'"],a:0,
 e:"Judul yang berisi kesimpulan membuat pembaca langsung menangkap pesannya. Rincian satuan bisa diletakkan di subjudul.",
 w:[null,"Judul generik memaksa pembaca menyimpulkan sendiri.","Akurat tetapi tidak menyampaikan pesan.","Tidak informatif."]},
{k:"visual",t:"mc",lv:2,q:"Kamu ingin menunjukkan hubungan antara diskon (%) dan jumlah pesanan untuk 200 produk. Grafik yang tepat:",o:["Scatter plot","Pie chart","Grafik garis berurut nama produk","Batang bertumpuk"],a:0,
 e:"Scatter menampilkan setiap produk sebagai titik dengan dua koordinat, sehingga pola hubungan (dan pencilan) terlihat.",
 w:[null,"Pie tidak menunjukkan hubungan dua variabel.","Garis menyiratkan urutan waktu yang tidak ada.","Batang bertumpuk untuk komposisi."]},
{k:"visual",t:"mc",lv:2,q:"Dashboard eksekutif sebaiknya…",o:["Menampilkan 3–5 KPI utama dengan pembanding (target atau periode lalu) di bagian atas, lalu rincian bila perlu","Memuat sebanyak mungkin grafik agar lengkap","Memakai warna berbeda untuk setiap grafik","Tidak memakai pembanding agar sederhana"],a:0,
 e:"Angka tanpa pembanding sulit ditafsirkan ('GMV Rp9,5 juta' itu bagus atau buruk?). Terlalu banyak grafik membuat dashboard tidak dipakai.",
 w:[null,"Lebih banyak grafik justru menyulitkan.","Warna berlebihan mengaburkan penekanan.","Pembanding adalah inti dari dashboard yang berguna."]},
{k:"visual",t:"mc",lv:3,q:"Empat himpunan data Anscombe memiliki rata-rata, varians, dan korelasi yang hampir sama. Pelajaran utamanya adalah…",o:["Selalu visualisasikan data; ringkasan statistik bisa menyembunyikan pola yang sangat berbeda","Statistik deskriptif selalu cukup","Korelasi selalu menunjukkan sebab-akibat","Data kecil tidak perlu dianalisis"],a:0,
 e:"Salah satu himpunan Anscombe berbentuk lengkung, satu lagi lurus dengan satu pencilan. Angka ringkasannya sama, tetapi kesimpulannya sangat berbeda.",
 w:[null,"Contoh Anscombe justru membuktikan sebaliknya.","Korelasi bukan sebab-akibat, dan bukan pelajaran contoh ini.","Ukuran data bukan pokok persoalannya."]},

// ---- cerita ----
{k:"cerita",t:"mc",lv:1,q:"Menurut prinsip piramida, kalimat pertama memo untuk direksi seharusnya berisi…",o:["Jawaban atau rekomendasi utama","Metodologi analisis","Daftar tabel yang dipakai","Ucapan terima kasih"],a:0,
 e:"Pembaca sibuk membaca kalimat pertama. Jawaban di depan, lalu alasan pendukung, lalu bukti.",
 w:[null,"Metodologi penting tetapi diletakkan belakangan atau di lampiran.","Daftar tabel adalah detail teknis.","Basa-basi menunda pesan inti."]},
{k:"cerita",t:"mc",lv:2,q:"Konversi naik dari 4% ke 5%. Kalimat yang paling tepat adalah…",o:["Konversi naik 1 poin persen (atau 25% secara relatif)","Konversi naik 1%","Konversi naik 5%","Konversi naik 125%"],a:0,
 e:"Selisih dua persentase disebut poin persen. Menulis 'naik 1%' ambigu dan sering ditafsirkan sebagai 4% → 4,04%.",
 w:[null,"Ambigu: 1% dari 4% hanya 0,04 poin.","5% adalah nilai akhirnya, bukan kenaikannya.","125% adalah rasio nilai akhir terhadap awal."]},
{k:"cerita",t:"mc",lv:2,q:"Dalam kerangka SCQA, 'Tetapi GMV Februari anjlok 59,7%' adalah bagian…",o:["Complication","Situation","Question","Answer"],a:0,
 e:"Situation menggambarkan keadaan normal, Complication memperkenalkan masalah, Question memunculkan pertanyaan yang ada di benak pembaca, Answer menjawabnya.",
 w:[null,"Situation adalah konteks yang disepakati semua orang.","Question adalah pertanyaan yang muncul akibat komplikasi.","Answer adalah jawaban atau rekomendasimu."]},
{k:"cerita",t:"mc",lv:2,q:"Sampel A/B test kecil sehingga hasilnya belum meyakinkan. Kalimat laporan yang paling jujur dan jelas:",o:["'Belum ada bukti yang cukup bahwa varian B lebih baik; perlu sekitar dua minggu data tambahan.'","'B tidak berpengaruh.'","'B lebih baik 11,9%.'","'p-value 0,086 sehingga H0 gagal ditolak pada α 0,05.'"],a:0,
 e:"Tidak terbukti berbeda bukan berarti terbukti sama. Kalimat yang baik menyampaikan tingkat keyakinan dan langkah berikutnya dalam bahasa yang dipahami pengambil keputusan.",
 w:[null,"Terlalu yakin; data hanya belum cukup.","Menyesatkan karena perbedaan itu belum meyakinkan.","Benar secara teknis tetapi tidak dipahami direksi; simpan di lampiran."]},
{k:"cerita",t:"mc",lv:1,q:"Rekomendasi yang bisa dijalankan (actionable) adalah…",o:["'Tim CRM mengirim voucher win-back ke 120 pelanggan segmen berisiko minggu depan, target 15% kembali belanja.'","'Perlu meningkatkan engagement pelanggan.'","'Data menunjukkan hal yang menarik.'","'Sebaiknya kita lebih data-driven.'"],a:0,
 e:"Rekomendasi yang baik menyebut siapa, apa, kapan, dan bagaimana mengukurnya.",
 w:[null,"Terlalu umum; tidak ada tindakan konkret.","Tidak menyebut tindakan sama sekali.","Slogan, bukan rekomendasi."]},
{k:"cerita",t:"is",lv:1,q:"Kerangka cerita Situation–Complication–Question–Answer disingkat… (4 huruf)",a:["SCQA"],
 e:"SCQA dipakai luas dalam konsultasi manajemen untuk menyusun pembukaan presentasi dan memo."},

// ---- segmen ----
{k:"segmen",t:"mc",lv:1,q:"Dalam RFM, huruf R mengukur…",o:["Seberapa baru transaksi terakhir pelanggan","Total pendapatan","Rata-rata rating","Jumlah retur"],a:0,
 e:"R = Recency, F = Frequency, M = Monetary. Recency biasanya prediktor terkuat apakah pelanggan akan kembali.",
 w:[null,"Itu Monetary.","Rating bukan bagian RFM.","Retur bukan bagian RFM."]},
{k:"segmen",t:"mc",lv:2,q:"Pelanggan dengan frekuensi dan total belanja tinggi tetapi sudah 70 hari tidak bertransaksi termasuk segmen…",o:["Berisiko (at risk), prioritas kampanye win-back","Champions","Pelanggan baru","Tidak perlu diperhatikan"],a:0,
 e:"Mereka dulu sangat bernilai. Kehilangan mereka mahal, jadi pantas diberi perhatian personal sebelum benar-benar pergi.",
 w:[null,"Champions juga harus punya recency yang baik.","Pelanggan baru belum punya frekuensi tinggi.","Justru segmen ini paling mahal bila hilang."]},
{k:"segmen",t:"mc",lv:2,q:"Skor RFM biasanya dibuat dengan kuintil. Untuk recency, skor 5 diberikan kepada…",o:["20% pelanggan dengan jumlah hari sejak transaksi terakhir paling SEDIKIT","20% pelanggan dengan jumlah hari paling banyak","Pelanggan dengan belanja terbesar","Pelanggan yang terdaftar paling lama"],a:0,
 e:"Untuk recency, makin kecil jumlah hari makin baik, jadi skornya dibalik dibanding F dan M.",
 w:[null,"Itu kebalikannya: lama tidak belanja berarti skor rendah.","Itu ukuran Monetary.","Lama terdaftar bukan recency."]},
{k:"segmen",t:"mc",lv:3,q:"Kenapa segmentasi harus diikuti tindakan yang berbeda per segmen?",o:["Nilai segmentasi ada pada keputusan yang berubah; jika semua segmen tetap diberi perlakuan sama, segmentasinya tidak berguna","Karena segmen harus berjumlah lima","Agar laporan lebih panjang","Karena regulasi mewajibkan"],a:0,
 e:"Segmentasi adalah alat untuk keputusan: pesan, penawaran, saluran, dan anggaran yang berbeda.",
 w:[null,"Jumlah segmen tidak ada aturan bakunya.","Panjang laporan bukan tujuan.","Tidak ada regulasi yang mewajibkan segmentasi."]},
{k:"segmen",t:"mc",lv:2,tb:"tbTransaksi",kode:"SELECT pengguna_id, SUM(nilai) AS monetary\nFROM transaksi\nWHERE status = 'selesai'\nGROUP BY pengguna_id\nORDER BY monetary DESC\nLIMIT 1;",vr:"sql",vx:[[3,2295000]],
 q:"Pengguna dengan nilai monetary tertinggi menurut query ini adalah…",o:["Pengguna 3 (Rp2.295.000)","Pengguna 4 (Rp2.266.000)","Pengguna 7 (Rp1.970.000)","Pengguna 1 (Rp1.016.000)"],a:0,
 e:"Pengguna 3 sering bertransaksi barang kecil (8 kali), sedangkan pengguna 4 hanya 2 transaksi tetapi salah satunya elektronik Rp2.176.000. Monetary hampir sama, frekuensinya sangat berbeda: itu sebabnya RFM melihat tiga dimensi sekaligus.",
 w:[null,"Selisihnya tipis, tetapi pengguna 4 di urutan kedua.","Pengguna 7 di urutan ketiga.","Pengguna 1 di urutan keempat."]},

// ---- musiman ----
{k:"musiman",t:"mc",lv:1,q:"Pola penjualan yang naik setiap menjelang Lebaran lalu turun setelahnya disebut…",o:["Musiman (seasonality)","Tren","Acak (noise)","Outlier"],a:0,
 e:"Musiman adalah pola yang berulang pada periode tertentu. Tren adalah arah jangka panjang; noise adalah fluktuasi tanpa pola.",
 w:[null,"Tren adalah arah jangka panjang, bukan pola berulang.","Pola ini justru dapat diperkirakan.","Outlier adalah kejadian tunggal yang ekstrem."]},
{k:"musiman",t:"mc",lv:2,q:"Penjualan sehari setelah Harbolnas 12.12 turun tajam dibanding hari Harbolnas. Interpretasi yang tepat:",o:["Wajar: lonjakan satu hari sering diikuti penurunan karena sebagian pembelian 'dimajukan'; bandingkan dengan pola tahun lalu sebelum menyimpulkan","Bisnis sedang krisis","Aplikasi pasti error","Pelanggan berhenti memakai aplikasi"],a:0,
 e:"Event besar menarik permintaan dari hari-hari sekitarnya. Pembanding yang tepat adalah periode yang sama di event tahun sebelumnya.",
 w:[null,"Penurunan setelah event besar adalah pola umum.","Tidak ada bukti error.","Belum ada bukti churn."]},
{k:"musiman",t:"mc",lv:2,q:"Pesanan mingguan: 120, 150, 180, 150, 210. Rata-rata bergerak 3 minggu pada minggu ke-4 adalah…",o:["160","150","180","162"],a:0,vr:"py",vjalan:"print(round((150 + 180 + 150) / 3))",
 e:"Minggu ke-2 sampai ke-4: (150 + 180 + 150) ÷ 3 = 160.",
 w:[null,"150 adalah nilai minggu ke-4 saja.","180 adalah rata-rata bergerak minggu ke-5.","162 adalah rata-rata kelima minggu."]},
{k:"musiman",t:"mc",lv:3,q:"Proyeksi 200 dan 100, aktual 250 dan 125. Berapa MAPE-nya?",o:["20%","25%","37,5%","75"],a:0,vr:"py",vjalan:"m = (abs(250 - 200) / 250 + abs(125 - 100) / 125) / 2 * 100\nprint(str(round(m)) + '%')",
 e:"|250 − 200| ÷ 250 = 20% dan |125 − 100| ÷ 125 = 20%; rata-ratanya 20%. MAPE dibagi nilai AKTUAL, bukan prediksi.",
 w:[null,"25% muncul jika dibagi prediksi (50 ÷ 200), bukan aktual.","Ini total galat 75 dibagi 200; bukan definisi MAPE.","75 adalah total galat absolut dalam unit, bukan persen."]},
{k:"musiman",t:"mc",lv:2,q:"Metode proyeksi sederhana yang sering sulit dikalahkan untuk data bulanan bermusim adalah…",o:["Naif musiman: nilai bulan yang sama tahun lalu, disesuaikan pertumbuhan","Selalu memakai rata-rata semua bulan","Menebak berdasarkan intuisi","Memakai nilai bulan lalu tanpa penyesuaian"],a:0,
 e:"Model naif musiman adalah patokan (baseline) yang wajib. Model rumit baru layak dipakai jika terbukti mengalahkannya.",
 w:[null,"Rata-rata semua bulan menghapus pola musiman.","Intuisi tidak bisa diukur dan diuji.","Bulan lalu bisa berada di musim berbeda."]},
{k:"musiman",t:"is",lv:1,q:"Singkatan ukuran galat 'rata-rata galat persentase absolut' adalah… (4 huruf)",a:["MAPE"],
 e:"MAPE = Mean Absolute Percentage Error. Mudah dipahami pebisnis, tetapi tidak bisa dipakai jika ada nilai aktual nol."},

// ---- kerjada ----
{k:"kerjada",t:"mc",lv:1,q:"Bagian CV data analyst yang paling dilirik perekrut adalah…",o:["Bukti dampak yang terukur, misalnya 'mempercepat laporan mingguan dari 2 hari menjadi 2 jam'","Daftar panjang semua alat yang pernah dicoba","Hobi","Foto profesional"],a:0,
 e:"Perekrut mencari bukti bahwa kamu bisa menghasilkan nilai. Kata kunci alat tetap penting untuk penyaringan, tetapi dampak yang terukur membuatmu menonjol.",
 w:[null,"Daftar alat tanpa bukti penggunaan kurang meyakinkan.","Hobi jarang memengaruhi keputusan rekrutmen teknis.","Foto bukan penilaian kompetensi."]},
{k:"kerjada",t:"mc",lv:2,q:"Saat take-home case, kamu menemukan data salah satu bulan tidak lengkap. Tindakan terbaik:",o:["Lanjutkan analisis dengan asumsi yang dinyatakan jelas, dan tunjukkan dampaknya pada kesimpulan","Diam saja","Menghentikan tugas","Mengarang data bulan yang hilang"],a:0,
 e:"Penilai ingin melihat cara kamu menangani data tidak sempurna, yang merupakan realitas sehari-hari.",
 w:[null,"Menyembunyikan masalah data adalah tanda bahaya bagi penilai.","Pekerjaan nyata jarang memiliki data sempurna.","Mengarang data adalah pelanggaran etika."]},
{k:"kerjada",t:"mc",lv:2,q:"Menurut prinsip UU PDP, cara paling tepat memakai pengalaman magang untuk portofolio adalah…",o:["Ceritakan masalah, pendekatan, dan dampaknya tanpa membawa data atau kode perusahaan; buat ulang dengan data publik atau simulasi","Unggah dataset pelanggan ke GitHub","Tampilkan tangkapan layar dashboard berisi nama pelanggan","Salin kode perusahaan ke repositori pribadi"],a:0,
 e:"Data pribadi pelanggan dilindungi UU PDP (UU 27/2022), dan perjanjian kerja biasanya memuat kerahasiaan. Cerita proses dan dampak tetap bisa dibagikan.",
 w:[null,"Melanggar privasi dan kerahasiaan perusahaan.","Nama pelanggan adalah data pribadi.","Kode milik perusahaan, bukan milikmu."]},
{k:"kerjada",t:"mc",lv:1,q:"Dua tim melaporkan GMV berbeda untuk bulan yang sama. Langkah pertama yang tepat:",o:["Samakan definisi: apakah termasuk ongkir, pesanan batal, retur, dan zona waktu yang dipakai","Pilih angka yang lebih besar","Pilih angka yang lebih kecil","Laporkan keduanya tanpa penjelasan"],a:0,
 e:"Sebagian besar 'perbedaan angka' di perusahaan berasal dari definisi yang berbeda, bukan salah hitung.",
 w:[null,"Memilih angka berdasarkan besarnya tidak berdasar.","Sama tidak berdasarnya.","Membingungkan pengambil keputusan."]},
{k:"kerjada",t:"mc",lv:2,q:"Di wawancara user kamu ditanya, 'Ceritakan saat analisismu tidak dipakai.' Jawaban yang paling kuat memakai…",o:["Metode STAR: situasi, tugas, tindakan, hasil, ditambah pelajaran yang kamu ambil","Jawaban singkat 'belum pernah'","Menyalahkan atasan","Menjelaskan teori statistik"],a:0,
 e:"Pertanyaan perilaku menilai refleksi dan cara kamu bekerja dengan orang. STAR membuat jawaban terstruktur dan konkret.",
 w:[null,"Terkesan tidak reflektif atau belum berpengalaman.","Menyalahkan orang lain adalah tanda bahaya.","Tidak menjawab pertanyaan perilaku."]},
];

if (typeof module !== "undefined") module.exports = { SOAL_DA, MATERI_DA };
