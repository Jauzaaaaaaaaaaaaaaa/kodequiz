// ============ STUDI KASUS (metode kasus ala Harvard Business School) ============
// Setiap kasus: protagonis + situasi kerja + exhibit data + persiapan + cold call
// + titik keputusan (kamu harus memilih dan menulis alasan SEBELUM diskusi dibuka)
// + diskusi tiap opsi + catatan pengajar.
// Kasus berlabel "Indonesia" memakai perusahaan fiktif dengan konteks nyata; kasus "Global"
// berangkat dari kejadian yang terdokumentasi publik (sumber dicantumkan). Angka exhibit
// adalah simulasi kecuali disebut lain, dan dihitung ulang dengan skrip saat ditulis.

const KASUS = [
{id:"harbolnas", jalur:"da", wilayah:"Indonesia", industri:"E-commerce", judul:"Seminggu Setelah 12.12",
 peran:"Data analyst di tim Category, marketplace Pasarku",
 ringkas:"GMV anjlok 61% setelah Harbolnas. Head of Category minta anggaran flash sale darurat Rp500 juta.",
 cerita:`<p>Senin pagi, 22 Desember. Rina, data analyst Pasarku, baru membuka laptop ketika pesan dari Mas Bayu (Head of Category) masuk:</p>
<blockquote><b>Mas Bayu:</b> "Rin, GMV minggu kemarin anjlok 61% dibanding minggu 12.12! Saya mau ajukan flash sale darurat Rp500 juta ke direksi besok pagi. Tolong siapkan angka pendukungnya."</blockquote>
<p>Harbolnas (Hari Belanja Online Nasional) setiap 12 Desember adalah puncak penjualan tahunan. Rina tahu angka 61% itu nyata. Pertanyaannya: apakah itu masalah?</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Kinerja mingguan (data simulasi). GMV = sesi × konversi × AOV.</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Minggu</th><th>Sesi</th><th>Konversi</th><th>AOV (Rp)</th><th>GMV (Rp miliar)</th></tr></thead><tbody>
<tr><td>24–30 Nov</td><td class="num">1.200.000</td><td class="num">2,0%</td><td class="num">180.000</td><td class="num">4,32</td></tr>
<tr><td>1–7 Des</td><td class="num">1.250.000</td><td class="num">2,0%</td><td class="num">182.000</td><td class="num">4,55</td></tr>
<tr><td>8–14 Des (12.12)</td><td class="num">1.900.000</td><td class="num">2,9%</td><td class="num">195.000</td><td class="num">10,74</td></tr>
<tr><td>15–21 Des</td><td class="num">1.230.000</td><td class="num">1,9%</td><td class="num">178.000</td><td class="num">4,16</td></tr></tbody></table></div>
<p class="kecil"><b>Exhibit 2.</b> Pola tahun lalu (Rp miliar): rata-rata dua minggu sebelum 12.12 = 3,60; minggu 12.12 = 8,90; minggu sesudahnya = 3,40.</p>`,
 persiapan:[
  {q:"Dibanding rata-rata dua minggu SEBELUM 12.12 (4,435 miliar), GMV minggu 15–21 Des turun sekitar…",o:["6%","61%","38%","0%"],a:0,e:"(4,16 − 4,435) ÷ 4,435 ≈ −6,2%. Pembanding yang tepat untuk minggu 'normal' adalah minggu normal lain, bukan minggu puncak."},
  {q:"Tahun lalu, minggu setelah 12.12 dibanding rata-rata dua minggu sebelumnya turun…",o:["Sekitar 5,6%","Sekitar 62%","Naik 5,6%","Tidak bisa dihitung"],a:0,e:"(3,40 − 3,60) ÷ 3,60 ≈ −5,6%. Polanya hampir sama dengan tahun ini (−6,2%): ini 'efek mabuk' setelah event, bukan kejadian baru."},
  {q:"Konversi turun dari 2,0% menjadi 1,9% dan AOV sedikit turun. Penjelasan yang paling masuk akal:",o:["Sebagian pembelian 'dimajukan' ke 12.12, sehingga minggu berikutnya pembeli yang tersisa lebih sedikit dan belanja lebih kecil","Aplikasi pasti error","Kompetitor merebut semua pelanggan","Harga naik 50%"],a:0,e:"Event besar menarik permintaan dari hari-hari di sekitarnya (pull-forward). Untuk memastikan, bandingkan per kategori dan per kanal dengan pola tahun lalu."}],
 coldcall:["Kamu Rina. Mas Bayu menelepon: \"Satu menit saja, kita perlu panik atau tidak?\" Apa kalimat pertamamu?",
  "Sebutkan SATU angka yang paling kuat untuk dibawa ke rapat direksi besok, dan kenapa angka itu.",
  "Data tambahan apa yang akan kamu minta sebelum rapat untuk memastikan ini bukan masalah teknis?"],
 keputusan:{tanya:"Apa rekomendasimu kepada Mas Bayu sebelum rapat direksi?",
  opsi:[
   {teks:"Dukung flash sale darurat Rp500 juta minggu ini.",diskusi:"Menghabiskan anggaran untuk 'memperbaiki' pola musiman yang normal. Pembeli yang baru belanja besar di 12.12 juga kecil kemungkinannya membeli lagi minggu ini, sehingga efek promo bisa rendah. Kalau tetap ingin promo, rancang sebagai eksperimen terukur."},
   {teks:"Laporkan bahwa penurunan sesuai pola tahunan (−6% vs minggu normal, tahun lalu −5,6%), pantau dua minggu ke depan dengan pembanding tahun lalu, dan siapkan kampanye ulang yang terarah untuk pembeli pertama 12.12.",kuat:true,diskusi:"Ini memakai pembanding yang adil, menenangkan tanpa menyepelekan, dan mengubah energi tim ke peluang nyata: mengubah pembeli pertama kali saat 12.12 menjadi pembeli berulang. Sertakan pemicu: jika minggu depan turun lebih dari pola tahun lalu, analisis diperdalam."},
   {teks:"Laporkan sebagai kemungkinan bug aplikasi dan bekukan semua rilis.",diskusi:"Tidak ada bukti teknis: konversi hanya turun sedikit dan pola sama dengan tahun lalu. Membekukan rilis punya biaya nyata. Tetap layak mengecek metrik teknis (crash, waktu muat) sebagai bagian pemeriksaan cepat."},
   {teks:"Potong anggaran marketing bulan depan karena permintaan sedang turun.",diskusi:"Menyimpulkan tren dari satu minggu pasca-event adalah keliru. Minggu normal tahun ini justru lebih tinggi dari tahun lalu (4,435 vs 3,60 miliar, +23%)."}]},
 catatan:`<p><b>Inti kasus:</b> angka yang benar bisa memberi kesimpulan yang salah jika pembandingnya salah. Analis senior selalu bertanya "dibanding apa?" sebelum "kenapa?".</p>
<p>Pemecahan GMV menjadi sesi × konversi × AOV menunjukkan semua komponen kembali ke level normal, bukan runtuh. Pola yang sama dengan tahun lalu memperkuat kesimpulan bahwa ini musiman.</p>`,
 pelajaran:["Bandingkan minggu normal dengan minggu normal, event dengan event.","Pecah metrik besar menjadi komponen sebelum menyimpulkan.","Rekomendasi yang baik menyertakan pemicu untuk meninjau ulang."],
 modul:[["da","metrik"],["da","banding"],["da","musiman"]]},

{id:"telemarketing", jalur:"da", wilayah:"Indonesia", industri:"Perbankan", judul:"Bonus Tim Telemarketing Kartu Kredit",
 peran:"Analis di divisi Consumer Banking, Bank Nusantara",
 ringkas:"Satu tim tampak dua kali lebih hebat. Apakah bonusnya pantas?",
 cerita:`<p>Akhir kuartal, Bu Ratna (Head of Credit Card Sales) menyiapkan bonus untuk tim telemarketing terbaik.</p>
<blockquote><b>Bu Ratna:</b> "Tim A closing rate-nya 37%, Tim B cuma 21%. Jelas Tim A dapat bonus penuh. Tolong cek angkanya sebentar, saya tanda tangan sore ini."</blockquote>
<p>Saat membuka data, kamu melihat bahwa daftar nasabah yang ditelepon tidak dibagi acak: Tim A, tim senior, lebih banyak mendapat nasabah prioritas (saldo besar, riwayat bagus).</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Hasil telepon kuartal ini (data simulasi).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Segmen</th><th>Tim A: closing / telepon</th><th>Rate A</th><th>Tim B: closing / telepon</th><th>Rate B</th></tr></thead><tbody>
<tr><td>Nasabah prioritas</td><td class="num">360 / 900</td><td class="num">40%</td><td class="num">90 / 200</td><td class="num">45%</td></tr>
<tr><td>Nasabah umum</td><td class="num">10 / 100</td><td class="num">10%</td><td class="num">120 / 800</td><td class="num">15%</td></tr>
<tr><td><b>Total</b></td><td class="num"><b>370 / 1.000</b></td><td class="num"><b>37%</b></td><td class="num"><b>210 / 1.000</b></td><td class="num"><b>21%</b></td></tr></tbody></table></div>
<p class="kecil"><b>Exhibit 2.</b> Komposisi seluruh perusahaan: 55% telepon ke nasabah prioritas, 45% ke nasabah umum.</p>`,
 persiapan:[
  {q:"Di segmen nasabah prioritas, tim mana yang closing rate-nya lebih tinggi?",o:["Tim B (45% vs 40%)","Tim A","Sama","Tidak bisa diketahui"],a:0,e:"Tim B lebih tinggi di segmen prioritas, dan juga di segmen umum (15% vs 10%)."},
  {q:"Jika kedua tim menelepon dengan komposisi perusahaan (55% prioritas, 45% umum), closing rate Tim A menjadi…",o:["26,5%","37%","40%","21%"],a:0,e:"0,55 × 40% + 0,45 × 10% = 22% + 4,5% = 26,5%. Untuk Tim B: 0,55 × 45% + 0,45 × 15% = 31,5%. Ini disebut standardisasi: menyamakan komposisi sebelum membandingkan."},
  {q:"Fenomena ketika tren gabungan berbalik setelah data dipecah per kelompok disebut…",o:["Paradoks Simpson","Regresi ke rata-rata","Survivorship bias","Efek basis"],a:0,e:"Paradoks Simpson muncul ketika komposisi kelompok berbeda dan kelompok itu sendiri memengaruhi hasil."}],
 coldcall:["Bu Ratna punya waktu 30 detik. Jelaskan kenapa angka 37% vs 21% menyesatkan tanpa memakai istilah statistik.",
  "Apa yang harus diubah dalam cara membagi daftar telepon kuartal depan supaya perbandingan adil?"],
 keputusan:{tanya:"Apa rekomendasimu tentang bonus kuartal ini?",
  opsi:[
   {teks:"Bonus penuh untuk Tim A sesuai angka total.",diskusi:"Menghargai keberuntungan alokasi, bukan kinerja. Tim B akan merasa diperlakukan tidak adil, dan insentif seperti ini mendorong tim berebut daftar nasabah 'mudah'."},
   {teks:"Nilai kinerja per segmen (atau dengan komposisi yang distandardisasi): Tim B unggul. Mulai kuartal depan, bagi daftar nasabah secara acak atau seimbang per segmen.",kuat:true,diskusi:"Menilai apel dengan apel. Perbaikan proses (alokasi acak) mencegah masalah yang sama terulang dan membuat evaluasi berikutnya jauh lebih mudah."},
   {teks:"Bagi bonus sama rata agar tidak ada yang kecewa.",diskusi:"Menghindari konflik tetapi menghilangkan fungsi insentif. Data yang tersedia sebenarnya cukup untuk menilai dengan adil."},
   {teks:"Tunda keputusan bonus sampai kuartal depan.",diskusi:"Menunda tanpa alasan kuat merugikan moral tim. Datanya sudah cukup untuk keputusan kuartal ini; yang perlu diubah adalah proses ke depan."}]},
 catatan:`<p>Paradoks Simpson bukan keanehan matematika langka. Ia muncul setiap kali kelompok yang dibandingkan punya komposisi berbeda: rumah sakit (pasien parah vs ringan), sekolah (latar siswa), cabang toko (lokasi), dan tim penjualan (kualitas daftar).</p>
<p>Contoh terkenal adalah data penerimaan pascasarjana UC Berkeley tahun 1973 (Bickel dkk., <i>Science</i>, 1975).</p>`,
 pelajaran:["Sebelum membandingkan rasio, periksa komposisi kelompoknya.","Standardisasi atau bandingkan per segmen.","Perbaiki proses yang menyebabkan perbandingan tidak adil, bukan hanya angkanya."],
 modul:[["da","banding"],["da","cerita"]]},

{id:"cabai", jalur:"da", wilayah:"Indonesia", industri:"Pemerintahan", judul:"Brief untuk TPID: Harga Cabai Menjelang Ramadan",
 peran:"Analis data di Biro Perekonomian sebuah pemerintah provinsi",
 ringkas:"Harga cabai rawit naik delapan minggu berturut-turut. Kapan dan di mana operasi pasar dilakukan?",
 cerita:`<p>Tim Pengendalian Inflasi Daerah (TPID) akan rapat Kamis ini. Kepala Biro meminta Dimas, analis biro, menyiapkan brief satu halaman.</p>
<blockquote><b>Kepala Biro:</b> "Harga cabai rawit terus naik. Ada usulan menunggu rilis inflasi resmi BPS awal bulan depan sebelum bertindak. Ada juga usulan operasi pasar serentak di semua pasar. Anggaran kita hanya cukup untuk dua pasar dulu. Apa saranmu?"</blockquote>
<p>Dimas memakai data harga mingguan dari panel pasar provinsi (sejenis panel harga pangan seperti PIHPS Bank Indonesia). BPS merilis inflasi bulanan lewat Berita Resmi Statistik di awal bulan berikutnya.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Rata-rata harga cabai rawit (Rp ribu/kg, data simulasi).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Minggu</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead><tbody>
<tr><td>Tahun ini</td><td class="num">48</td><td class="num">52</td><td class="num">55</td><td class="num">61</td><td class="num">68</td><td class="num">74</td><td class="num">79</td><td class="num">85</td></tr>
<tr><td>Tahun lalu (minggu yang sama menjelang Ramadan)</td><td class="num">45</td><td class="num">47</td><td class="num">49</td><td class="num">52</td><td class="num">56</td><td class="num">61</td><td class="num">66</td><td class="num">70</td></tr></tbody></table></div>
<p class="kecil"><b>Exhibit 2.</b> Harga minggu ke-8 per pasar (Rp ribu/kg) dan kenaikan 4 minggu terakhir: Pasar A 92 (+48%), Pasar B 84 (+35%), Pasar C 80 (+31%), Pasar D 83 (+36%).</p>`,
 persiapan:[
  {q:"Kenaikan harga rata-rata minggu ke-8 dibanding minggu ke-4 adalah sekitar…",o:["39%","24%","77%","14%"],a:0,e:"(85 − 61) ÷ 61 ≈ 39,3%."},
  {q:"Dibanding minggu yang sama tahun lalu, harga minggu ke-8 lebih tinggi sekitar…",o:["21%","15%","39%","7%"],a:0,e:"(85 − 70) ÷ 70 ≈ 21,4%. Jadi kenaikan musiman menjelang Ramadan memang biasa, tetapi tahun ini lebih tinggi dari pola biasanya."},
  {q:"Kenapa menunggu rilis inflasi BPS kurang tepat untuk keputusan ini?",o:["Data bulanan resmi datang setelah bulan berakhir, sedangkan harga mingguan sudah memberi sinyal sekarang; untuk keputusan cepat, pakai indikator yang lebih tepat waktu","Data BPS tidak bisa dipercaya","BPS tidak menghitung harga cabai","Inflasi tidak berhubungan dengan cabai"],a:0,e:"Data resmi BPS adalah rujukan akurat, tetapi sifatnya bulanan. Untuk intervensi cepat, panel harga mingguan lebih tepat waktu. Keduanya saling melengkapi."}],
 coldcall:["Kepala Biro bertanya: 'Satu kalimat saja, bertindak sekarang atau tunggu?' Apa jawabanmu?",
  "Apa risiko terbesar jika operasi pasar dilakukan serentak di semua pasar dengan anggaran yang hanya cukup untuk dua pasar?"],
 keputusan:{tanya:"Apa yang kamu tulis di bagian rekomendasi brief?",
  opsi:[
   {teks:"Operasi pasar serentak di keempat pasar mulai minggu ini.",diskusi:"Anggaran tersebar tipis sehingga dampaknya di setiap pasar kecil. Lebih baik memusatkan sumber daya di titik paling tertekan, lalu memperluas jika perlu."},
   {teks:"Prioritaskan Pasar A (harga tertinggi, kenaikan tercepat) dan satu pasar berikutnya minggu ini; tetapkan pemicu tahap kedua (misal kenaikan mingguan di atas 5% dua kali berturut-turut); pantau harga mingguan.",kuat:true,diskusi:"Tepat waktu, terarah, dan terukur. Pemicu yang jelas membuat keputusan lanjutan tidak bergantung pada rapat berikutnya. Brief yang baik juga mencantumkan risiko: misal pasokan dari daerah produsen terganggu cuaca."},
   {teks:"Tunggu rilis inflasi resmi BPS bulan depan.",diskusi:"Data bulanan resmi penting untuk evaluasi, tetapi datang terlambat untuk mencegah lonjakan menjelang Ramadan. Ini contoh indikator lagging dipakai untuk keputusan yang butuh indikator leading."},
   {teks:"Imbau masyarakat menanam cabai di pekarangan.",diskusi:"Bisa jadi program jangka panjang, tetapi tidak menjawab tekanan harga dalam beberapa minggu ke depan."}]},
 catatan:`<p>Di pemerintahan, analisis data bertemu waktu, anggaran, dan akuntabilitas. Kasus ini melatih tiga hal: memilih pembanding (minggu-ke-minggu vs tahun-ke-tahun), memilih indikator yang tepat waktu, dan menulis rekomendasi bertahap dengan pemicu.</p>
<p>Rujukan konteks: TPID dibentuk di tingkat daerah untuk mengendalikan inflasi; BPS merilis inflasi bulanan; Bank Indonesia mengelola Pusat Informasi Harga Pangan Strategis (PIHPS). Angka di kasus ini simulasi.</p>`,
 pelajaran:["Data resmi bulanan untuk evaluasi; data mingguan untuk tindakan cepat.","Pakai YoY untuk memisahkan pola musiman dari lonjakan yang tidak biasa.","Rekomendasi bertahap dengan pemicu yang jelas memudahkan keputusan lanjutan."],
 modul:[["da","banding"],["da","musiman"],["da","cerita"]]},

{id:"poptarts", jalur:"da", wilayah:"Global", industri:"Ritel", judul:"Walmart, Badai, dan Pop-Tarts",
 peran:"Analis rantai pasok di jaringan ritel",
 ringkas:"Barang apa yang dikirim ke toko sebelum badai datang, jika truk terbatas?",
 cerita:`<p><b>Kisah nyata.</b> Pada 2004, ketika Badai Frances bergerak menuju Florida, tim Walmart yang dipimpin CIO Linda Dillman menganalisis data penjualan dari badai sebelumnya (Charley). Mereka menemukan pola yang tidak terduga: penjualan Pop-Tarts rasa stroberi naik sekitar tujuh kali lipat dari biasanya menjelang badai, dan barang terlaris sebelum badai adalah bir (<i>The New York Times</i>, 14 November 2004).</p>
<p><b>Situasi latihan.</b> Kamu analis di jaringan minimarket. BMKG memperingatkan cuaca ekstrem akan melanda kotamu dalam 3 hari. Truk tambahan hanya bisa membawa <b>4 jenis barang</b>. Data menjelang kejadian serupa tahun lalu tersedia.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Penjualan satu minggu per toko (data simulasi).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Barang</th><th>Minggu normal (unit)</th><th>Menjelang cuaca ekstrem (unit)</th><th>Lift</th><th>Tambahan unit</th><th>Margin/unit (Rp)</th></tr></thead><tbody>
<tr><td>Senter</td><td class="num">120</td><td class="num">620</td><td class="num">5,2×</td><td class="num">500</td><td class="num">9.000</td></tr>
<tr><td>Baterai AA (pak)</td><td class="num">300</td><td class="num">1.440</td><td class="num">4,8×</td><td class="num">1.140</td><td class="num">4.000</td></tr>
<tr><td>Air mineral galon</td><td class="num">900</td><td class="num">2.790</td><td class="num">3,1×</td><td class="num">1.890</td><td class="num">2.500</td></tr>
<tr><td>Mi instan (dus)</td><td class="num">400</td><td class="num">1.040</td><td class="num">2,6×</td><td class="num">640</td><td class="num">6.000</td></tr>
<tr><td>Biskuit kemasan</td><td class="num">150</td><td class="num">975</td><td class="num">6,5×</td><td class="num">825</td><td class="num">3.000</td></tr>
<tr><td>Lilin</td><td class="num">60</td><td class="num">540</td><td class="num">9,0×</td><td class="num">480</td><td class="num">1.500</td></tr></tbody></table></div>`,
 persiapan:[
  {q:"Barang dengan lift (kelipatan kenaikan) tertinggi adalah…",o:["Lilin (9,0×)","Air mineral galon","Baterai AA","Senter"],a:0,e:"540 ÷ 60 = 9,0. Tetapi lift tinggi dari basis kecil belum tentu berarti nilai tambahan yang besar."},
  {q:"Laba tambahan dari air mineral galon (tambahan unit × margin) adalah…",o:["Rp4.725.000","Rp2.250.000","Rp6.975.000","Rp1.890.000"],a:0,e:"1.890 × Rp2.500 = Rp4.725.000, tertinggi di antara keenam barang."},
  {q:"Jika memilih 4 barang berdasarkan lift tertinggi, total laba tambahannya…",o:["Rp12.255.000","Rp17.625.000","Rp15.600.000","Rp9.000.000"],a:0,e:"Lilin 0,72 + biskuit 2,475 + senter 4,5 + baterai 4,56 = Rp12,255 juta. Berdasarkan laba tambahan, pilihan terbaik (galon, baterai, senter, mi) memberi Rp17,625 juta."}],
 coldcall:["Manajer logistik bilang, 'Lilin naik 9 kali lipat, jelas itu prioritas!' Tanggapi dalam dua kalimat.",
  "Selain laba, faktor apa yang harus dipertimbangkan untuk barang kebutuhan darurat seperti air minum?"],
 keputusan:{tanya:"Empat barang apa yang kamu kirim, dan dengan dasar apa?",
  opsi:[
   {teks:"Berdasarkan tambahan unit terbesar: galon, baterai, biskuit, mi instan.",diskusi:"Lebih baik daripada lift, tetapi mengabaikan margin. Total laba tambahan Rp15,6 juta."},
   {teks:"Berdasarkan lift tertinggi: lilin, biskuit, senter, baterai.",diskusi:"Lift menyesatkan untuk barang berbasis kecil. Total laba tambahan hanya Rp12,255 juta. Lift berguna untuk menemukan pola (seperti Pop-Tarts), bukan untuk alokasi kapasitas."},
   {teks:"Berdasarkan laba tambahan yang diharapkan (tambahan unit × margin): galon, baterai, senter, mi instan, sambil memastikan barang darurat penting tetap tersedia.",kuat:true,diskusi:"Total Rp17,625 juta dan sekaligus mencakup kebutuhan darurat (air, penerangan, makanan). Di dunia nyata, tambahkan batasan volume truk dan risiko barang tidak laku (galon berat, biskuit bisa disimpan lama)."},
   {teks:"Kirim barang yang biasanya laris saja, tanpa melihat data.",diskusi:"Mengabaikan perubahan perilaku yang justru menjadi inti kasus ini."}]},
 catatan:`<p>Kasus Walmart sering dikutip sebagai contoh awal pemakaian data transaksi dalam jumlah besar untuk menemukan pola yang tidak terpikirkan. Pelajaran analitisnya dua lapis: (1) data historis dari kejadian serupa bisa memprediksi perilaku, dan (2) metrik penemuan pola (lift) berbeda dengan metrik keputusan (nilai tambahan di bawah batasan kapasitas).</p>`,
 pelajaran:["Lift untuk menemukan pola; nilai tambahan untuk mengambil keputusan.","Selalu masukkan batasan (kapasitas truk, waktu) ke dalam analisis.","Kejadian serupa di masa lalu adalah data latihan yang berharga."],
 sumber:"Constance L. Hays, \"What Wal-Mart Knows About Customers' Habits\", The New York Times, 14 November 2004.",
 modul:[["da","metrik"],["da","segmen"]]},

{id:"edutech", jalur:"da", wilayah:"Indonesia", industri:"Startup edutech", judul:"Kanal Mana yang Layak Diberi Rp1 Miliar?",
 peran:"Growth analyst di startup aplikasi belajar Ruang Paham",
 ringkas:"Kanal termurah ternyata merugi. Survei kepuasan juga menipu.",
 cerita:`<p>Ruang Paham, aplikasi belajar untuk siswa SMA, baru mendapat tambahan anggaran akuisisi Rp1 miliar untuk kuartal depan. CMO ingin semuanya ke iklan TikTok.</p>
<blockquote><b>CMO:</b> "CAC TikTok paling murah dan volumenya paling besar. Survei dalam aplikasi juga bilang pengguna kita puas, rating 4,6 dari 5!"</blockquote>
<p>Kamu diminta menyiapkan rekomendasi untuk rapat CEO lusa.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Kinerja kanal akuisisi (data simulasi; pendapatan 6 bulan = estimasi tim finance dari kohort tahun lalu).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Kanal</th><th>Pengguna baru/bulan</th><th>CAC (Rp)</th><th>Retensi bulan ke-3</th><th>Pendapatan 6 bulan per pengguna (Rp)</th></tr></thead><tbody>
<tr><td>Iklan TikTok</td><td class="num">12.000</td><td class="num">18.000</td><td class="num">12%</td><td class="num">14.500</td></tr>
<tr><td>Iklan Google</td><td class="num">5.000</td><td class="num">32.000</td><td class="num">22%</td><td class="num">29.000</td></tr>
<tr><td>Program referral</td><td class="num">1.500</td><td class="num">15.000</td><td class="num">38%</td><td class="num">52.000</td></tr>
<tr><td>Kemitraan sekolah</td><td class="num">3.000</td><td class="num">40.000</td><td class="num">52%</td><td class="num">81.000</td></tr></tbody></table></div>
<p class="kecil"><b>Exhibit 2.</b> Survei kepuasan muncul sebagai pop-up untuk pengguna yang membuka aplikasi minggu ini. Responden: 2.140 orang. Rating rata-rata 4,6.</p>
<p class="kecil"><b>Exhibit 3.</b> Tim referral memperkirakan program referral hanya bisa tumbuh sekitar 50% dengan anggaran tambahan, karena bergantung pada jumlah pengguna aktif yang mau mengajak teman.</p>`,
 persiapan:[
  {q:"Untuk iklan TikTok, pendapatan 6 bulan dikurangi CAC per pengguna adalah…",o:["−Rp3.500 (merugi)","Rp3.500","Rp14.500","Rp32.500"],a:0,e:"14.500 − 18.000 = −3.500. CAC termurah tidak berarti kanal paling menguntungkan."},
  {q:"Kanal dengan laba per pengguna (pendapatan − CAC) tertinggi adalah…",o:["Kemitraan sekolah (Rp41.000)","Referral (Rp37.000)","Iklan Google","Iklan TikTok"],a:0,e:"Sekolah: 81.000 − 40.000 = 41.000. Referral: 52.000 − 15.000 = 37.000, rasio pengembaliannya paling tinggi (3,47×), tetapi skalanya terbatas."},
  {q:"Kelemahan utama survei di Exhibit 2 adalah…",o:["Hanya pengguna yang masih aktif yang ditanya; pengguna yang sudah pergi (yang mungkin kecewa) tidak terwakili","Sampelnya terlalu kecil","Skala 1–5 tidak valid","Tidak ada kelemahan"],a:0,e:"Ini survivorship bias, sama dengan kisah pesawat Abraham Wald: yang tidak 'pulang' tidak tercatat."}],
 coldcall:["CMO berkata, 'Tapi TikTok volumenya empat kali lipat!' Jawab dengan satu angka.",
  "Bagaimana kamu akan merancang survei kepuasan yang lebih jujur?"],
 keputusan:{tanya:"Bagaimana kamu mengalokasikan tambahan Rp1 miliar?",
  opsi:[
   {teks:"Seluruhnya ke iklan TikTok untuk volume maksimum.",diskusi:"Dengan estimasi saat ini, setiap pengguna TikTok merugikan Rp3.500. Volume besar memperbesar kerugian. Kecuali ada strategi menaikkan retensi pengguna TikTok, ini membakar uang."},
   {teks:"Seluruhnya ke program referral karena rasionya terbaik.",diskusi:"Rasio terbaik, tetapi kapasitasnya terbatas: menambah anggaran jauh melebihi kemampuan tumbuh akan menaikkan CAC dan menurunkan efisiensi."},
   {teks:"Isi referral sampai batas kapasitasnya, sisanya ke kemitraan sekolah; jalankan uji kecil untuk memperbaiki retensi pengguna TikTok sebelum menambah anggarannya; perbaiki survei agar mencakup pengguna yang berhenti.",kuat:true,diskusi:"Memakai unit economics, menghormati batas kapasitas, dan tetap belajar dari kanal bervolume besar lewat eksperimen. Juga memperbaiki sumber data yang bias."},
   {teks:"Bagi rata ke empat kanal agar adil.",diskusi:"Adil untuk kanal, tidak untuk perusahaan. Alokasi harus mengikuti hasil per rupiah dan kapasitas."}]},
 catatan:`<p>Unit economics (pendapatan per pengguna vs biaya mendapatkannya) adalah bahasa wajib di startup. Kasus ini juga menggabungkan dua jebakan: metrik vanity (volume, CAC murah) dan sampel yang bias (survei pengguna aktif).</p>`,
 pelajaran:["Bandingkan kanal dengan nilai per pengguna dikurangi biaya akuisisi.","Perhatikan batas kapasitas, bukan hanya rasio.","Pengguna yang sudah pergi adalah data yang paling sering hilang."],
 modul:[["da","sqllanjut"],["da","metrik"],["ds","inferensi"]]},

{id:"churnTelko", jalur:"ds", wilayah:"Indonesia", industri:"Telekomunikasi", judul:"Anggaran Retensi TelkoNesia",
 peran:"Data scientist di tim Customer Lifecycle, operator seluler TelkoNesia",
 ringkas:"Model churn sudah jadi. Berapa pelanggan yang ditawari bonus kuota, jika anggaran Rp1,5 miliar?",
 cerita:`<p>Model churn untuk 1 juta pelanggan prabayar sudah selesai dilatih. Bu Lina (Head of Retention) datang dengan pertanyaan praktis.</p>
<blockquote><b>Bu Lina:</b> "Anggaran bonus kuota bulan ini Rp1,5 miliar. Setiap tawaran biayanya Rp15 ribu. Berapa ambang skornya? Saya mau seefektif mungkin."</blockquote>
<blockquote><b>Pak Arief (Lead DS):</b> "Kampanye tahun lalu memakai asumsi 30% pelanggan yang ditawari akan bertahan. Tapi asumsi itu belum pernah diuji dengan kelompok kontrol."</blockquote>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Kinerja model pada data validasi (dari 1.000.000 pelanggan, 80.000 akan churn; data simulasi).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Ambang skor</th><th>Ditandai</th><th>Presisi</th><th>TP</th><th>Recall</th><th>Biaya tawaran (Rp)</th></tr></thead><tbody>
<tr><td>≥ 0,7</td><td class="num">20.000</td><td class="num">60%</td><td class="num">12.000</td><td class="num">15%</td><td class="num">300 juta</td></tr>
<tr><td>≥ 0,5</td><td class="num">60.000</td><td class="num">45%</td><td class="num">27.000</td><td class="num">34%</td><td class="num">900 juta</td></tr>
<tr><td>≥ 0,3</td><td class="num">150.000</td><td class="num">30%</td><td class="num">45.000</td><td class="num">56%</td><td class="num">2,25 miliar</td></tr>
<tr><td>≥ 0,1</td><td class="num">400.000</td><td class="num">16%</td><td class="num">64.000</td><td class="num">80%</td><td class="num">6 miliar</td></tr></tbody></table></div>
<p class="kecil"><b>Exhibit 2.</b> Nilai pelanggan yang bertahan: ARPU Rp45 ribu × 6 bulan = Rp270 ribu. Asumsi keberhasilan tawaran: 30%. Manfaat bersih = TP × 0,3 × 270 ribu − ditandai × 15 ribu.</p>`,
 persiapan:[
  {q:"Manfaat bersih pada ambang 0,5 adalah…",o:["Rp1,287 miliar","Rp2,187 miliar","Rp900 juta","Rp672 juta"],a:0,e:"27.000 × 0,3 × 270.000 = Rp2,187 miliar; dikurangi biaya 60.000 × 15.000 = Rp900 juta; hasilnya Rp1,287 miliar."},
  {q:"Ambang mana yang memberi manfaat bersih NEGATIF?",o:["0,1","0,3","0,5","0,7"],a:0,e:"Pada 0,1: 64.000 × 81.000 = Rp5,184 miliar dikurangi biaya Rp6 miliar = −Rp816 juta. Menjangkau 80% churner terlalu mahal karena presisinya rendah."},
  {q:"Kenapa asumsi '30% bertahan karena tawaran' perlu diuji dengan kelompok kontrol acak?",o:["Sebagian pelanggan yang ditandai mungkin tetap bertahan tanpa tawaran; yang penting adalah efek tambahan (uplift) dari tawaran itu","Karena model tidak akurat","Karena 30% terlalu kecil","Tidak perlu diuji"],a:0,e:"Jika tanpa tawaran pun 20% tetap bertahan, efek sebenarnya hanya 10 poin, dan semua hitungan manfaat menyusut drastis."}],
 coldcall:["Bu Lina berkata, 'Recall 80% kedengarannya paling bagus, kenapa tidak pakai ambang 0,1?' Jawab dalam 20 detik.",
  "Bagaimana desain sederhana untuk mengukur efek tawaran yang sebenarnya bulan ini?"],
 keputusan:{tanya:"Ambang dan rencana apa yang kamu usulkan bulan ini?",
  opsi:[
   {teks:"Ambang 0,7: paling presisi, telepon jarang sia-sia.",diskusi:"Aman tetapi meninggalkan banyak nilai: manfaat bersih Rp672 juta, jauh di bawah ambang 0,5. Presisi tinggi bukan tujuan; manfaat bersih yang tujuan."},
   {teks:"Ambang 0,5 (biaya Rp900 juta, di dalam anggaran), dengan 10% pelanggan yang ditandai dipilih acak sebagai kelompok kontrol tanpa tawaran untuk mengukur uplift sebenarnya.",kuat:true,diskusi:"Memaksimalkan manfaat di dalam batas anggaran (Rp1,287 miliar menurut asumsi) sekaligus menguji asumsi 30% yang paling menentukan. Hasil kontrol menentukan ambang bulan depan."},
   {teks:"Ambang 0,3 dan minta tambahan anggaran Rp750 juta.",diskusi:"Manfaat bersihnya sedikit lebih tinggi (Rp1,395 miliar), tetapi tambahan biaya Rp1,35 miliar hanya menambah manfaat Rp108 juta, dengan asumsi yang belum teruji. Layak dipertimbangkan setelah uplift terbukti."},
   {teks:"Ambang 0,1 untuk menjangkau 80% calon churner.",diskusi:"Merugi Rp816 juta dan melampaui anggaran empat kali lipat."}]},
 catatan:`<p>Ambang model adalah keputusan ekonomi, bukan teknis. Data scientist yang kuat menerjemahkan confusion matrix ke rupiah, menghormati batasan (anggaran, kapasitas), dan mengenali asumsi yang paling berisiko untuk diuji.</p>
<p>Kasus ini menghubungkan tiga modul: metrik klasifikasi, inferensi kausal (uplift dan kelompok kontrol), dan A/B test.</p>`,
 pelajaran:["Ubah metrik model menjadi nilai bisnis.","Pilih ambang dari biaya, manfaat, dan batasan.","Uji asumsi paling berisiko dengan kelompok kontrol acak."],
 modul:[["ds","evaluasi"],["ds","kausal"],["da","abtest"]]},

{id:"kredit", jalur:"ds", wilayah:"Indonesia", industri:"Fintech lending", judul:"Model Skor Kredit yang Terlalu Bagus",
 peran:"Senior data scientist di platform pinjaman daring KrediNusa (fiktif, diawasi OJK)",
 ringkas:"Model baru AUC 0,97 dan siap dirilis Jumat. Ada yang terasa janggal.",
 cerita:`<p>Andi, data scientist junior, mempresentasikan model skor kredit baru dengan bangga.</p>
<blockquote><b>Andi:</b> "AUC naik dari 0,74 ke 0,97! Fitur paling penting: <code>jumlah_penagihan_bulan_ini</code> dan <code>status_restrukturisasi</code>. Data 2023–2025 saya acak 80:20 untuk latih dan uji."</blockquote>
<blockquote><b>Head of Risk:</b> "Luar biasa. Kita rilis Jumat ini supaya target penyaluran kuartal tercapai."</blockquote>
<p>Kamu diminta memberi persetujuan teknis terakhir.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Kepentingan fitur (top 5, data simulasi).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Fitur</th><th>Kepentingan</th><th>Kapan nilainya tercatat</th></tr></thead><tbody>
<tr><td>jumlah_penagihan_bulan_ini</td><td class="num">0,41</td><td>saat penagih menghubungi peminjam yang terlambat</td></tr>
<tr><td>status_restrukturisasi</td><td class="num">0,22</td><td>setelah peminjam mengajukan keringanan</td></tr>
<tr><td>rasio_cicilan_pendapatan</td><td class="num">0,09</td><td>saat pengajuan</td></tr>
<tr><td>lama_bekerja_bulan</td><td class="num">0,06</td><td>saat pengajuan</td></tr>
<tr><td>riwayat_telat_12_bulan</td><td class="num">0,05</td><td>saat pengajuan</td></tr></tbody></table></div>
<p class="kecil"><b>Exhibit 2.</b> Uji ulang cepat yang kamu jalankan: tanpa dua fitur teratas dan dengan pembagian waktu (latih 2023–2024, uji 2025): AUC 0,76.</p>`,
 persiapan:[
  {q:"Masalah utama fitur jumlah_penagihan_bulan_ini adalah…",o:["Nilainya baru ada setelah peminjam terlambat bayar, padahal skor harus dibuat saat pengajuan (kebocoran target)","Skalanya terlalu besar","Tipe datanya salah","Tidak ada masalah"],a:0,e:"Saat keputusan kredit dibuat, belum ada penagihan. Model yang memakai fitur ini sedang 'membaca jawaban'."},
  {q:"Kenapa pembagian acak 80:20 pada data 2023–2025 juga bermasalah?",o:["Model belajar dari pola masa depan untuk memprediksi masa lalu; pembagian berdasarkan waktu meniru pemakaian sebenarnya","Karena 80:20 terlalu kecil","Karena data harus dibagi 50:50","Tidak bermasalah"],a:0,e:"Kondisi ekonomi dan perilaku peminjam berubah dari tahun ke tahun. Uji pada periode setelah data latih."},
  {q:"Setelah diperbaiki, AUC 0,76 dibanding model lama 0,74 berarti…",o:["Perbaikan nyata tetapi kecil; perlu dinilai dampaknya pada keputusan (misal tingkat gagal bayar di ambang persetujuan) sebelum menggantikan model lama","Model baru gagal total","Model lama lebih buruk 23%","Langsung rilis"],a:0,e:"Angka yang jujur lebih rendah, tetapi itulah kinerja yang akan dialami di dunia nyata."}],
 coldcall:["Head of Risk menunggu di ruang rapat. Jelaskan kebocoran data dalam satu analogi sederhana.",
  "Proses apa yang harus ditambahkan di tim supaya kejadian ini tidak terulang?"],
 keputusan:{tanya:"Apa keputusan teknismu untuk rilis Jumat?",
  opsi:[
   {teks:"Setujui rilis Jumat; AUC 0,97 jauh di atas model lama.",diskusi:"Model akan gagal di produksi karena fitur bocor belum ada saat pengajuan. Dampaknya: keputusan kredit salah, kerugian, dan risiko kepatuhan."},
   {teks:"Tunda rilis. Audit setiap fitur dengan pertanyaan 'apakah nilai ini tersedia saat pengajuan?', bagi data berdasarkan waktu, latih ulang, lalu bandingkan dengan model lama pada metrik bisnis di ambang persetujuan. Bimbing Andi lewat review bersama.",kuat:true,diskusi:"Mencegah kerugian, memperbaiki proses (point-in-time correctness), dan menjaga hubungan baik dengan rekan junior. Target kuartal tidak sebanding dengan risiko model yang salah."},
   {teks:"Rilis tetapi naikkan ambang persetujuan.",diskusi:"Menaikkan ambang tidak memperbaiki model yang bergantung pada informasi yang tidak tersedia. Skornya akan acak di produksi."},
   {teks:"Buang model baru dan tetap pakai model lama selamanya.",diskusi:"Terlalu jauh: model yang diperbaiki memberi peningkatan kecil yang mungkin bernilai. Masalahnya pada proses, bukan pada upaya membangun model baru."}]},
 catatan:`<p>Kebocoran data adalah penyebab paling umum model yang "terlalu bagus untuk jadi kenyataan". Di lembaga keuangan, kesalahan ini juga berdampak pada konsumen dan kepatuhan. Kebiasaan yang mencegahnya: catat waktu tersedianya setiap fitur, pakai pembagian berbasis waktu, dan curigai lonjakan kinerja yang besar.</p>`,
 pelajaran:["Tanyakan untuk setiap fitur: tersediakah saat prediksi dibuat?","Data berwaktu diuji pada periode setelah data latih.","Kinerja yang terlalu bagus adalah alasan untuk menyelidiki."],
 modul:[["ds","fitur"],["ds","validasi"]]},

{id:"ongkir", jalur:"ds", wilayah:"Indonesia", industri:"Layanan antar", judul:"A/B Test Ongkir Hemat yang Terlalu Indah",
 peran:"Data scientist eksperimen di aplikasi pesan-antar AntarYuk (fiktif)",
 ringkas:"Konversi naik 6% dan signifikan. Tapi pembagian kelompoknya tidak 50:50.",
 cerita:`<p>Tim produk menguji tampilan baru "Ongkir Hemat" yang menampilkan estimasi ongkir lebih awal. Setelah dua minggu, Product Manager mengirim pesan:</p>
<blockquote><b>PM:</b> "Varian B menang! Konversi checkout naik 6% relatif, p = 0,01. Saya mau rilis ke semua pengguna Senin depan."</blockquote>
<p>Sebelum menyetujui, kamu memeriksa jumlah pengguna di setiap kelompok.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Jumlah pengguna per kelompok (rencana 50:50; data simulasi).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Platform</th><th>Grup A</th><th>Grup B</th><th>Porsi A</th></tr></thead><tbody>
<tr><td>Android</td><td class="num">120.000</td><td class="num">120.000</td><td class="num">50,0%</td></tr>
<tr><td>iOS</td><td class="num">50.100</td><td class="num">49.900</td><td class="num">50,1%</td></tr>
<tr><td>Web (versi lama)</td><td class="num">37.800</td><td class="num">22.200</td><td class="num">63,0%</td></tr>
<tr><td><b>Total</b></td><td class="num"><b>207.900</b></td><td class="num"><b>192.100</b></td><td class="num"><b>52,0%</b></td></tr></tbody></table></div>
<p class="kecil"><b>Exhibit 2.</b> Metrik guardrail: tingkat pembatalan pesanan A 3,1%, B 3,5%.</p>`,
 persiapan:[
  {q:"Dengan 400.000 pengguna, porsi 52,0% vs 48,0% adalah…",o:["Hampir mustahil terjadi karena kebetulan (sample ratio mismatch)","Wajar karena acak","Bukti varian B lebih baik","Tidak relevan"],a:0,e:"Selisih 7.900 dari 200.000 setara z ≈ 25. Pembagian acak 50:50 pada sampel sebesar ini seharusnya hanya meleset sekitar ±0,2 poin."},
  {q:"Dari Exhibit 1, sumber masalah paling mungkin adalah…",o:["Web versi lama: sebagian pengguna grup B tidak tercatat, kemungkinan karena varian B gagal dimuat","Android","iOS","Semua platform sama bermasalah"],a:0,e:"Android dan iOS seimbang; web sangat timpang. Pengguna web B yang gagal memuat halaman 'hilang' dari data, sehingga grup B tersisa pengguna yang lebih lancar dan lebih mungkin checkout."},
  {q:"Kenaikan pembatalan dari 3,1% ke 3,5% adalah contoh…",o:["Metrik guardrail yang memburuk dan perlu dijelaskan sebelum rilis","Hal yang bisa diabaikan","Bukti B lebih baik","Metrik utama"],a:0,e:"Guardrail yang memburuk bisa menandakan estimasi ongkir di varian B terlalu rendah sehingga pembeli membatalkan saat melihat ongkir sebenarnya."}],
 coldcall:["PM bertanya, 'p-nya 0,01, kenapa masih ragu?' Jawab tanpa istilah teknis.",
  "Langkah teknis pertama apa yang kamu minta dari tim engineering?"],
 keputusan:{tanya:"Apa keputusanmu untuk rilis Senin?",
  opsi:[
   {teks:"Rilis ke semua pengguna: hasilnya signifikan.",diskusi:"Hasil eksperimen dengan SRM tidak bisa dipercaya: kelompok B tidak lagi sebanding dengan A. Pembatalan yang naik juga belum dijelaskan."},
   {teks:"Tahan rilis. Debug pembagian dan pencatatan di web versi lama, perbaiki, lalu ulangi tes; selidiki juga kenaikan pembatalan.",kuat:true,diskusi:"Satu-satunya cara mendapat jawaban yang valid. Tim eksperimen yang matang memasang pemeriksaan SRM otomatis yang menghentikan analisis sebelum ada yang menarik kesimpulan."},
   {teks:"Rilis hanya ke Android dan iOS karena pembagiannya seimbang.",diskusi:"Lebih baik, tetapi efek di Android/iOS harus dihitung ulang terpisah, dan kenaikan pembatalan tetap perlu dijelaskan. Bisa menjadi langkah berikutnya setelah analisis ulang."},
   {teks:"Perpanjang tes dua minggu tanpa perbaikan.",diskusi:"Bug yang sama akan terus membiaskan data. Lebih banyak data yang bias tidak menghasilkan jawaban yang benar."}]},
 catatan:`<p>Sample Ratio Mismatch adalah salah satu pemeriksaan pertama di platform eksperimen besar. Penyebab umumnya: bug pengacakan, varian yang gagal dimuat, filter bot yang berbeda, atau pengguna yang berpindah kelompok. Pelajaran umumnya: periksa validitas eksperimen sebelum membaca hasilnya.</p>`,
 pelajaran:["Periksa rasio sampel sebelum membaca hasil.","Pecah per platform atau versi untuk menemukan sumber bug.","Guardrail yang memburuk harus dijelaskan sebelum rilis."],
 modul:[["da","abtest"],["ds","kausal"],["ds","inferensi"]]},

{id:"zillow", jalur:"ds", wilayah:"Global", industri:"Properti", judul:"Zillow Offers: Ketika Prediksi Harga Membeli Rumah Sungguhan",
 peran:"Bayangkan kamu data scientist di tim penetapan harga pada pertengahan 2021",
 ringkas:"Model harga dipakai untuk membeli ribuan rumah. Pasar mulai berubah.",
 cerita:`<p><b>Kisah nyata.</b> Zillow, situs properti terbesar di Amerika Serikat, menjalankan Zillow Offers: perusahaan membeli rumah langsung dari pemilik berdasarkan estimasi harga, memperbaikinya sedikit, lalu menjual kembali. Model harga menjadi dasar keputusan bernilai miliaran dolar.</p>
<p>Pada 2 November 2021, Zillow mengumumkan akan menutup Zillow Offers, mencatat penurunan nilai persediaan rumah sekitar US$304 juta pada kuartal III 2021, dan memangkas sekitar 25% karyawannya. CEO Rich Barton menyatakan bahwa ketidakpastian dalam memperkirakan harga rumah jauh melampaui yang mereka antisipasi.</p>
<p><b>Situasi latihan.</b> Mundur ke pertengahan 2021. Target pertumbuhan menuntut volume pembelian dinaikkan. Kamu melihat galat prediksi bulan-bulan terakhir mulai berubah.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Ilustrasi galat (data simulasi, bukan data Zillow): selisih harga jual aktual terhadap harga prediksi saat membeli.</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Kuartal pembelian</th><th>Median galat</th><th>Porsi rumah terjual rugi</th><th>Volume pembelian</th></tr></thead><tbody>
<tr><td>Q3 2020</td><td class="num">+1,8%</td><td class="num">18%</td><td class="num">1.000</td></tr>
<tr><td>Q4 2020</td><td class="num">+1,2%</td><td class="num">22%</td><td class="num">1.600</td></tr>
<tr><td>Q1 2021</td><td class="num">−0,4%</td><td class="num">31%</td><td class="num">2.400</td></tr>
<tr><td>Q2 2021</td><td class="num">−1,9%</td><td class="num">44%</td><td class="num">3.800</td></tr></tbody></table></div>`,
 persiapan:[
  {q:"Pola paling mengkhawatirkan dari Exhibit 1 adalah…",o:["Galat bergeser negatif dan porsi rugi naik, justru saat volume pembelian meningkat","Volume pembelian naik","Median galat kecil sehingga aman","Tidak ada pola"],a:0,e:"Galat yang bergeser konsisten ke satu arah adalah tanda drift. Ketika volume naik bersamaan, kerugian membesar."},
  {q:"Kenapa median galat −1,9% bisa sangat berbahaya untuk bisnis ini?",o:["Margin pembelian-penjualan rumah tipis dan biaya transaksi besar; galat kecil yang konsisten pada ribuan rumah mahal menjadi kerugian besar","Karena −1,9% berarti model rusak total","Karena galat seharusnya 0%","Tidak berbahaya"],a:0,e:"Di bisnis bermargin tipis, arah dan konsistensi galat lebih penting daripada besarnya galat rata-rata."},
  {q:"Dalam bisnis membeli rumah, pemilik yang menerima tawaran tertinggi cenderung adalah mereka yang rumahnya diprediksi terlalu mahal. Fenomena ini disebut…",o:["Adverse selection (seleksi merugikan)","Overfitting","Leakage","Regresi linear"],a:0,e:"Penjual tahu kondisi rumahnya lebih baik dari model. Tawaran yang terlalu tinggi lebih sering diterima, sehingga rumah yang dibeli cenderung yang dinilai berlebihan."}],
 coldcall:["Direksi berkata: 'Model kita akurat rata-rata, jadi naikkan volume.' Apa keberatan utamamu dalam satu kalimat?",
  "Sebutkan dua metrik yang akan kamu pantau setiap minggu untuk model ini."],
 keputusan:{tanya:"Apa rekomendasimu pada pertengahan 2021?",
  opsi:[
   {teks:"Naikkan volume pembelian sesuai target pertumbuhan.",diskusi:"Memperbesar eksposur tepat ketika tanda drift muncul. Inilah risiko yang kemudian terwujud."},
   {teks:"Pakai harga yang memperhitungkan ketidakpastian (margin pengaman lebih besar saat ketidakpastian tinggi), batasi volume per pasar, pantau galat dan porsi rugi setiap minggu dengan pemicu penghentian, dan libatkan penilaian manusia untuk rumah bernilai besar.",kuat:true,diskusi:"Mengelola risiko model: keputusan otomatis bernilai besar butuh batas, pemantauan drift, dan rem darurat. Ini tidak menjamin bisnisnya untung, tetapi membatasi kerugian saat pasar berubah."},
   {teks:"Hentikan model dan harga semua rumah ditentukan manual.",diskusi:"Mengurangi risiko model tetapi menghilangkan skala yang menjadi inti bisnis. Manusia juga bisa salah menilai pasar yang berubah cepat."},
   {teks:"Biarkan seperti sekarang; galat masih di bawah 2%.",diskusi:"Mengabaikan arah dan konsistensi galat serta naiknya porsi rugi."}]},
 catatan:`<p>Kasus Zillow sering dibahas sebagai contoh risiko memakai prediksi secara otomatis untuk keputusan bernilai besar di pasar yang berubah. Ada faktor lain di luar model (operasional renovasi, kondisi pasar), tetapi pelajaran untuk data scientist jelas: ukur ketidakpastian, pantau drift, waspadai adverse selection, dan pasang batas risiko.</p>`,
 pelajaran:["Akurasi rata-rata tidak cukup; lihat arah dan sebaran galat.","Keputusan otomatis bernilai besar butuh batas dan rem darurat.","Pantau drift secara rutin, terutama saat volume naik."],
 sumber:"Pengumuman Zillow Group 2 November 2021 dan liputan media (antara lain CNN, The Real Deal, Bloomberg) tentang penutupan Zillow Offers.",
 modul:[["ds","mlops"],["ds","regresi"]]},

{id:"rekrutmen", jalur:"ds", wilayah:"Global", industri:"SDM & perbankan", judul:"Model Penyaring CV: Adil atau Hanya Mengulang Masa Lalu?",
 peran:"Data scientist di bank nasional Indonesia (fiktif) yang ingin mengotomatiskan penyaringan CV",
 ringkas:"Model dilatih dari keputusan rekrutmen 8 tahun. Kolom jenis kelamin sudah dihapus. Cukupkah?",
 cerita:`<p><b>Kisah nyata sebagai pembuka.</b> Reuters (Oktober 2018) melaporkan bahwa Amazon menghentikan alat penyaring CV berbasis machine learning. Model dilatih dari CV yang masuk selama sekitar 10 tahun, yang mayoritas dari pria, sehingga belajar menurunkan nilai CV yang memuat kata "women's" (misal "women's chess club captain").</p>
<p><b>Situasi latihan.</b> Bank tempatmu bekerja menerima 40.000 CV per tahun untuk program management trainee. Direktur SDM ingin model yang otomatis menolak 70% CV terbawah. Data latih: keputusan lolos/tidak dari rekrutmen 8 tahun terakhir. Kolom jenis kelamin dan foto sudah dihapus.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Audit model pada data uji (data simulasi).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Kelompok</th><th>Tingkat lolos model</th><th>Recall pada kandidat berkinerja baik*</th></tr></thead><tbody>
<tr><td>Pria</td><td class="num">32%</td><td class="num">0,71</td></tr>
<tr><td>Wanita</td><td class="num">19%</td><td class="num">0,48</td></tr>
<tr><td>Kampus di Jawa</td><td class="num">31%</td><td class="num">0,69</td></tr>
<tr><td>Kampus di luar Jawa</td><td class="num">14%</td><td class="num">0,41</td></tr></tbody></table></div>
<p class="kecil">*Kandidat yang dulu diterima dan dinilai berkinerja baik setelah 1 tahun. Exhibit 2: fitur berpengaruh antara lain nama organisasi kampus, kota asal, dan jeda karier.</p>`,
 persiapan:[
  {q:"Kenapa model tetap bias walau kolom jenis kelamin dihapus?",o:["Fitur lain (organisasi, jeda karier, kota) menjadi proksi, dan label masa lalu sendiri mungkin bias","Karena modelnya terlalu sederhana","Karena datanya terlalu besar","Model tidak bias"],a:0,e:"Model belajar meniru keputusan masa lalu. Jika keputusan itu bias, model mewarisinya lewat proksi."},
  {q:"Recall 0,71 vs 0,48 pada kandidat berkinerja baik melanggar definisi keadilan…",o:["Equal opportunity","Demographic parity saja","Akurasi","Presisi"],a:0,e:"Equal opportunity menuntut kandidat yang layak punya peluang sama untuk diloloskan, apa pun kelompoknya."},
  {q:"Menurut UU PDP Pasal 10 ayat (1), pelamar berhak…",o:["Mengajukan keberatan atas keputusan yang hanya didasarkan pada pemrosesan otomatis, termasuk pemrofilan, yang berdampak signifikan","Meminta gaji lebih tinggi","Memilih pewawancara","Tidak punya hak apa pun"],a:0,e:"Penolakan otomatis tanpa peninjauan manusia untuk keputusan rekrutmen berisiko bertentangan dengan semangat pasal ini."}],
 coldcall:["Direktur SDM berkata, 'Kolom jenis kelamin sudah kita hapus, jadi model ini adil.' Tanggapi dengan satu angka dari exhibit.",
  "Apa yang harus diubah dari data latihnya agar model tidak sekadar meniru keputusan lama?"],
 keputusan:{tanya:"Apa rekomendasimu kepada Direktur SDM?",
  opsi:[
   {teks:"Pakai model untuk menolak otomatis 70% CV terbawah; kolom sensitif sudah dihapus.",diskusi:"Exhibit menunjukkan kesenjangan besar antarkelompok. Penolakan otomatis tanpa peninjauan menimbulkan risiko ketidakadilan, reputasi, dan hukum."},
   {teks:"Jangan pakai untuk penolakan otomatis. Gunakan sebagai alat bantu peringkat dengan peninjauan manusia, audit keadilan berkala per kelompok, perbaiki label (pakai kinerja kerja, bukan sekadar keputusan lama), siapkan penjelasan dan jalur keberatan sesuai UU PDP.",kuat:true,diskusi:"Menyeimbangkan efisiensi dan keadilan. Model menjadi alat bantu yang diawasi, bukan hakim tunggal. Audit berkala membuat masalah terdeteksi lebih awal."},
   {teks:"Hentikan semua pemakaian machine learning di SDM selamanya.",diskusi:"Menghindari risiko tetapi juga kehilangan manfaat (misal mengurangi beban penyaring manual yang juga bisa bias). Masalahnya adalah cara pakai dan pengawasan."},
   {teks:"Pakai model hanya untuk kandidat dari kampus di Jawa.",diskusi:"Memperparah ketidakadilan dan kemungkinan melanggar prinsip kesetaraan kesempatan."}]},
 catatan:`<p>Etika bukan lampiran di akhir proyek. Di kasus ini, pertanyaan kunci justru ada di awal: label apa yang dipakai (keputusan lama yang bisa bias, atau kinerja nyata), keputusan apa yang diotomatiskan, dan bagaimana orang yang terdampak bisa meminta peninjauan.</p>`,
 pelajaran:["Menghapus kolom sensitif tidak menghapus bias.","Ukur keadilan per kelompok dengan definisi yang disepakati.","Keputusan berdampak besar butuh peninjauan manusia dan jalur keberatan."],
 sumber:"Jeffrey Dastin, \"Amazon scraps secret AI recruiting tool that showed bias against women\", Reuters, Oktober 2018; UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, Pasal 10.",
 modul:[["ds","etika"],["ds","evaluasi"]]},
// ---------------- Jalur Cyber Security ----------------
{id:"izinPentest", jalur:"cyber", wilayah:"Indonesia", industri:"Konsultan keamanan", judul:"Satu Server di Luar Scope",
 peran:"Junior pentester di konsultan keamanan Sigap Siber, sedang menguji aplikasi toko daring klien",
 ringkas:"Hari ketiga pentest. Klien memintamu 'sekalian' menguji server pembayaran milik vendor. Tenggat laporan dua hari lagi.",
 cerita:`<p>Rabu sore. Kamu sedang menguji aplikasi <code>app.tokokita.example</code> sesuai kontrak. Saat pengintaian, kamu menemukan <code>pay.tokokita.example</code> yang ternyata dikelola vendor pembayaran. Pak Hendra, manajer IT klien, menelepon:</p>
<blockquote><b>Pak Hendra:</b> "Server pembayaran itu sering lambat, saya curiga ada yang tidak beres. Sekalian diuji saja ya, toh masih domain kami. Saya yang tanggung jawab. Laporannya kan Jumat."</blockquote>
<p>Atasanmu, Mbak Dita, sedang di pesawat sampai malam.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Ringkasan scope kontrak (dokumen bertanda tangan).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Bagian</th><th>Isi</th></tr></thead><tbody>
<tr><td>Target</td><td>app.tokokita.example dan API-nya (api.tokokita.example)</td></tr>
<tr><td>Waktu</td><td>Senin–Jumat, 22.00–05.00 WIB untuk pemindaian aktif</td></tr>
<tr><td>Dilarang</td><td>DoS, rekayasa sosial, pengujian sistem pihak ketiga</td></tr>
<tr><td>Kontak darurat</td><td>Pak Hendra (klien), Mbak Dita (Sigap Siber)</td></tr></tbody></table></div>
<p class="kecil"><b>Exhibit 2.</b> Hasil DNS: pay.tokokita.example adalah alias (CNAME) ke server milik vendor pembayaran, bukan milik klien.</p>`,
 persiapan:[
  {q:"Menurut Exhibit 1, apakah pay.tokokita.example termasuk scope?",o:["Tidak; target hanya app dan api, dan sistem pihak ketiga dilarang","Ya, karena masih memakai domain klien","Ya, karena klien memintanya lewat telepon","Tidak jelas, jadi boleh diuji"],a:0,e:"Scope tertulis hanya app dan api, dan kontrak secara eksplisit melarang pengujian sistem pihak ketiga. Nama domain tidak menentukan kepemilikan server."},
  {q:"Siapa yang berhak memberi izin menguji server pembayaran itu?",o:["Pemilik server, yaitu vendor pembayaran, secara tertulis","Pak Hendra, karena domainnya milik klien","Siapa saja yang menyewa pentester","Tidak perlu izin jika hanya memindai"],a:0,e:"Izin harus datang dari pemilik sistem yang diuji. Klien hanya bisa mengizinkan aset miliknya; vendor harus setuju sendiri, biasanya lewat perjanjian terpisah."},
  {q:"Kenapa izin lisan lewat telepon tidak cukup?",o:["Perubahan scope harus tertulis dan disetujui pihak yang berwenang, agar ada bukti dan batasnya jelas","Karena telepon bisa terputus","Karena izin lisan selalu palsu","Karena pentester tidak boleh menelepon klien"],a:0,e:"Tanpa perubahan tertulis, kamu tidak punya bukti izin jika terjadi gangguan atau sengketa. Pidana akses tanpa hak tidak bisa dibela dengan 'katanya boleh'."}],
 coldcall:["Kamu ditelepon Pak Hendra sekarang. Apa kalimat pertamamu?","Sebutkan satu risiko terbesar jika kamu langsung menguji server pembayaran itu.","Apa yang bisa tetap kamu berikan kepada klien tanpa menguji server vendor?"],
 keputusan:{tanya:"Apa yang kamu lakukan malam ini?",
  opsi:[
   {teks:"Uji server pembayaran malam ini juga karena klien sudah menyatakan bertanggung jawab.",diskusi:"Klien tidak berhak memberi izin atas server vendor. Jika server pembayaran terganggu, kamu dan perusahaanmu bisa dituntut, dan kontrak dilanggar. 'Saya yang tanggung jawab' tidak berlaku di depan hukum untuk aset milik orang lain."},
   {teks:"Tolak dengan sopan, catat temuan bahwa pay.tokokita.example adalah aset vendor yang terlihat publik, sarankan klien meminta vendor menguji atau menandatangani izin tertulis, dan laporkan ke Mbak Dita begitu ia mendarat.",kuat:true,diskusi:"Tetap membantu klien tanpa melanggar izin: temuan dicatat sebagai observasi, jalurnya jelas (izin vendor atau pengujian oleh vendor), dan atasan diinformasikan. Ini juga menunjukkan profesionalisme yang membuat klien percaya."},
   {teks:"Pindai pelan-pelan saja tanpa eksploitasi, supaya tidak ketahuan.",diskusi:"Pemindaian aktif tanpa izin tetap akses ke sistem orang lain, dan 'supaya tidak ketahuan' adalah tanda kamu tahu itu salah. Pemindaian juga bisa mengganggu layanan pembayaran."},
   {teks:"Abaikan saja dan jangan sebut server itu di laporan.",diskusi:"Kamu kehilangan kesempatan memberi informasi berguna. Menyebut aset di luar scope sebagai observasi (tanpa diuji) justru membantu klien mengelola risikonya."}]},
 catatan:`<p>Kasus ini menguji hal yang paling sering membuat pentester pemula celaka: tekanan klien dan tenggat. Scope adalah batas hukum, bukan sekadar administrasi. Kepemilikan aset ditentukan oleh siapa yang mengelola servernya, bukan nama domainnya. Perubahan scope selalu tertulis dan, untuk aset pihak ketiga, membutuhkan persetujuan pemiliknya.</p>`,
 pelajaran:["Izin datang dari pemilik sistem, bukan dari pengguna atau penyewa domain.","Perubahan scope harus tertulis.","Aset di luar scope boleh dicatat sebagai observasi, tidak boleh diuji."],
 modul:[["cyber","etika"],["cyber","pentest"]]},

{id:"bec", jalur:"cyber", wilayah:"Indonesia", industri:"Distribusi", judul:"Transfer Rp480 Juta Sebelum Jam Tiga",
 peran:"Staf IT security yang dihubungi bagian keuangan PT Sentosa Distribusi",
 ringkas:"Email 'Direktur Keuangan' meminta pembayaran pemasok ke rekening baru hari ini. Lalu ada telepon dengan suara yang sangat mirip beliau.",
 cerita:`<p>Pukul 13.40. Rani dari bagian keuangan menghubungimu dengan cemas:</p>
<blockquote><b>Rani:</b> "Pak Darmawan (Direktur Keuangan) kirim email: pemasok kita ganti rekening, invoice Rp480 juta harus dibayar sebelum jam tiga atau pengiriman ditahan. Beliau juga barusan menelepon, suaranya persis beliau, minta ini dirahasiakan dulu karena ada audit. Saya takut salah. Boleh saya transfer?"</blockquote>
<p>Kalender menunjukkan Pak Darmawan sedang dinas ke Makassar.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Detail email.</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Bagian</th><th>Isi</th></tr></thead><tbody>
<tr><td>Nama pengirim</td><td>Darmawan Sutanto</td></tr>
<tr><td>Alamat pengirim</td><td>darmawan@sentosa-distribusi.example (domain resmi: sentosadistribusi.example)</td></tr>
<tr><td>Reply-To</td><td>dir.keuangan.sentosa@mail-gratis.example</td></tr>
<tr><td>Hasil DMARC</td><td>fail (domain pengirim tidak punya kebijakan)</td></tr>
<tr><td>Lampiran</td><td>Invoice_PT_Mitra.pdf, rekening tujuan baru di bank berbeda</td></tr></tbody></table></div>
<p class="kecil"><b>Exhibit 2.</b> Prosedur pembayaran perusahaan: perubahan rekening pemasok wajib diverifikasi lewat telepon ke nomor yang tercatat di kontrak, dan pembayaran di atas Rp250 juta butuh dua persetujuan.</p>`,
 persiapan:[
  {q:"Tanda paling kuat bahwa email itu palsu adalah…",o:["Domain pengirim berbeda tipis dari domain resmi dan Reply-To mengarah ke layanan email gratis","Email ditulis dalam bahasa Indonesia","Ada lampiran PDF","Email dikirim siang hari"],a:0,e:"sentosa-distribusi.example berbeda dari sentosadistribusi.example (ada tanda hubung). Reply-To ke email gratis berarti balasan Rani akan sampai ke penipu."},
  {q:"Kenapa telepon dengan suara mirip Pak Darmawan tidak bisa dijadikan bukti?",o:["Suara bisa ditiru dengan AI (deepfake), dan penelepon memegang kendali atas saluran itu","Karena telepon selalu bohong","Karena Pak Darmawan tidak punya telepon","Karena suara tidak bisa direkam"],a:0,e:"Kloning suara kini mudah dibuat dari rekaman singkat. Verifikasi harus lewat saluran yang kamu kendalikan: menelepon balik nomor yang tercatat."},
  {q:"Menurut Exhibit 2, langkah wajib sebelum membayar ke rekening baru adalah…",o:["Menelepon pemasok di nomor yang tercatat di kontrak, dan dua persetujuan untuk nominal di atas Rp250 juta","Membalas email untuk konfirmasi","Meminta pengirim mengirim ulang invoice","Menunggu sampai jam tiga"],a:0,e:"Prosedur sudah dirancang untuk situasi persis seperti ini. Tugas kita menegakkannya, apa pun tekanan dan jabatan pengirimnya."}],
 coldcall:["Rani menunggu di telepon. Apa yang kamu katakan dalam 20 detik pertama?","Siapa saja yang perlu kamu hubungi dalam satu jam ke depan, dan kenapa?","Jika ternyata transfer sudah terlanjur dilakukan 10 menit lalu, apa langkah pertamamu?"],
 keputusan:{tanya:"Apa instruksimu kepada Rani dan apa langkahmu selanjutnya?",
  opsi:[
   {teks:"Izinkan transfer karena direktur sudah menelepon langsung.",diskusi:"Telepon itu justru bagian dari skenario penipuan. Kerugian Rp480 juta hampir pasti sulit kembali begitu dana dipindahkan berlapis-lapis."},
   {teks:"Tahan pembayaran, verifikasi ke pemasok lewat nomor di kontrak dan ke Pak Darmawan lewat nomor yang tercatat, laporkan email itu sebagai phishing, blokir domain mirip dan Reply-To-nya, lalu cek apakah ada staf lain yang menerima email serupa.",kuat:true,diskusi:"Menegakkan prosedur, memverifikasi lewat saluran tepercaya, dan langsung beralih ke respons: memblokir indikator serta mencari korban lain. Ini juga saat yang tepat menyarankan kebijakan DMARC untuk domain resmi perusahaan."},
   {teks:"Balas email itu dan tanya apakah benar.",diskusi:"Balasan akan sampai ke alamat Reply-To milik penipu, yang tentu akan 'membenarkan'."},
   {teks:"Transfer separuh dulu sambil menunggu kepastian.",diskusi:"Separuh tetap kerugian Rp240 juta dan melanggar prosedur dua persetujuan."}]},
 catatan:`<p>BEC (business email compromise) termasuk penipuan dengan kerugian terbesar di dunia karena tidak butuh malware: hanya meyakinkan satu orang. Polanya selalu mirip: otoritas, urgensi, kerahasiaan, dan rekening baru. Teknologi membantu (DMARC, penanda email eksternal, deteksi domain mirip), tetapi kendali terkuat adalah prosedur verifikasi lewat saluran terpisah dan persetujuan ganda yang ditegakkan tanpa pengecualian.</p>`,
 pelajaran:["Verifikasi lewat saluran yang kamu kendalikan, bukan saluran yang diberikan pengirim.","Suara dan video kini bisa dipalsukan; prosedur tidak bisa.","Setelah menahan transaksi, langsung cari korban lain dan blokir indikatornya."],
 modul:[["cyber","sosial"],["cyber","akun"]]},

{id:"idorBounty", jalur:"cyber", wilayah:"Indonesia", industri:"Kesehatan digital", judul:"Satu Juta Rekam Medis di Balik Angka",
 peran:"Peserta program bug bounty resmi aplikasi konsultasi dokter SehatKu",
 ringkas:"Kamu menemukan IDOR yang membuka hasil laboratorium pasien lain. Tim SehatKu belum menjawab laporanmu setelah 30 hari.",
 cerita:`<p>Saat menguji akun ujimu sendiri di program bug bounty SehatKu, kamu melihat alamat <code>/api/hasil-lab/583201</code>. Mengganti angkanya menjadi 583202 menampilkan hasil laboratorium pasien lain. ID-nya berurutan sampai sekitar 1,1 juta.</p>
<p>Kamu berhenti setelah satu contoh, lalu melapor lewat platform bug bounty. Tiga puluh hari berlalu: status laporan masih "Baru". Seorang teman menyarankan:</p>
<blockquote><b>Teman:</b> "Upload saja ke media sosial dengan sensor. Begitu viral, mereka pasti cepat memperbaiki."</blockquote>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Aturan program bug bounty SehatKu (ringkasan).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Aturan</th><th>Isi</th></tr></thead><tbody>
<tr><td>Scope</td><td>Aplikasi web dan API SehatKu</td></tr>
<tr><td>Data</td><td>Akses data pengguna lain seminimal mungkin; hentikan dan laporkan segera</td></tr>
<tr><td>Pengungkapan</td><td>Dilarang mempublikasikan sebelum perbaikan atau tanpa persetujuan; target respons 14 hari</td></tr>
<tr><td>Eskalasi</td><td>Jika tidak ada respons, hubungi pengelola platform bug bounty</td></tr></tbody></table></div>`,
 persiapan:[
  {q:"Jenis celah yang kamu temukan adalah…",o:["IDOR/BOLA: server tidak memeriksa apakah hasil lab itu milik pengguna yang meminta","XSS","SQL injection","DDoS"],a:0,e:"Mengganti ID objek lalu mendapat data orang lain adalah ciri IDOR (Broken Access Control, A01 OWASP 2025)."},
  {q:"Kenapa celah ini sangat serius?",o:["Data kesehatan termasuk data pribadi spesifik menurut UU PDP, dan jumlahnya sekitar 1,1 juta","Karena aplikasinya lambat","Karena tampilannya jelek","Karena ID-nya berupa angka"],a:0,e:"Data kesehatan termasuk data spesifik yang perlindungannya paling ketat. Dampak kebocoran besar bagi pasien, dan perusahaan wajib memberi tahu dalam 3 × 24 jam jika terjadi kebocoran."},
  {q:"Langkah eskalasi yang sesuai Exhibit 1 setelah 30 hari tanpa respons adalah…",o:["Menghubungi pengelola platform bug bounty","Mempublikasikan di media sosial","Mengunduh semua data sebagai bukti","Menjual temuan ke pihak lain"],a:0,e:"Aturan program menyediakan jalur eskalasi. Pengelola platform biasanya bisa menghubungi tim keamanan perusahaan langsung."}],
 coldcall:["Apa satu kalimat yang kamu tambahkan ke laporan agar tim SehatKu langsung memprioritaskannya?","Kenapa mempublikasikan dengan sensor tetap berbahaya?","Kalau perusahaan tetap tidak merespons setelah eskalasi, pihak mana lagi yang pantas dihubungi?"],
 keputusan:{tanya:"Apa langkahmu sekarang?",
  opsi:[
   {teks:"Publikasikan temuan dengan sensor di media sosial agar cepat diperbaiki.",diskusi:"Melanggar aturan program dan memberi tahu penjahat bahwa ada celah yang masih terbuka di aplikasi kesehatan. Sensor tidak menyembunyikan polanya; ID berurutan sangat mudah ditebak orang lain."},
   {teks:"Eskalasi lewat pengelola platform bug bounty dengan laporan yang menegaskan dampaknya (data kesehatan, ±1,1 juta pasien, bisa diakses siapa pun yang login), tetap tidak mengakses data lebih jauh, dan jika masih buntu, minta panduan platform tentang pelaporan ke lembaga berwenang.",kuat:true,diskusi:"Mengikuti jalur resmi sambil memperjelas urgensi. Menyebut jenis data dan skala dampak membantu laporan diprioritaskan. Tidak menambah akses berarti tidak menambah risiko hukum."},
   {teks:"Unduh 1.000 data pasien sebagai bukti tambahan agar laporan dianggap serius.",diskusi:"Melanggar aturan program dan UU PDP. Bukti satu contoh sudah cukup; data tambahan justru membuatmu ikut membocorkan data kesehatan."},
   {teks:"Tawarkan ke perusahaan: perbaikan cepat dengan bayaran tambahan di luar program.",diskusi:"Meminta bayaran di luar aturan program bisa dianggap pemerasan dan merusak reputasimu."}]},
 catatan:`<p>Hacker etis sering frustrasi karena laporan tidak ditanggapi. Kesabaran dan jalur resmi tetap lebih baik daripada membuka celah ke publik, terutama untuk data kesehatan. Pengungkapan terkoordinasi (coordinated disclosure) berarti semua pihak sepakat waktunya. Perusahaan yang baik menyediakan halaman security.txt, target waktu respons, dan jalur eskalasi; perusahaan yang belum punya bisa dibantu dihubungkan lewat pengelola platform atau CSIRT.</p>`,
 pelajaran:["Satu contoh bukti sudah cukup; jangan menambah akses.","Tegaskan dampak (jenis data dan skala) agar laporan diprioritaskan.","Frustrasi bukan alasan untuk mempublikasikan celah yang belum ditutup."],
 modul:[["cyber","aksesweb"],["cyber","etika"]]},

{id:"prioritasPatch", jalur:"cyber", wilayah:"Global", industri:"Biro kredit", judul:"Equifax 2017: Patch yang Tertunda",
 peran:"Anggota tim manajemen kerentanan, Maret 2017",
 ringkas:"Celah kritis Apache Struts diumumkan bersama patch-nya. Portal sengketa konsumen memakai Struts. Tim aplikasi minta waktu.",
 cerita:`<p>Awal Maret 2017, celah <b>CVE-2017-5638</b> di Apache Struts diumumkan bersama versi perbaikannya. Celah ini memungkinkan penyerang menjalankan perintah di server tanpa login, dan eksploitnya segera beredar luas. Peringatan internal dikirim ke tim terkait, tetapi portal sengketa konsumen (yang menghadap internet dan terhubung ke data konsumen) tidak ikut ditambal.</p>
<p>Pertengahan Mei, penyerang masuk lewat celah itu dan berada di dalam jaringan selama berminggu-minggu. Aktivitas mereka baru terlihat akhir Juli, setelah sertifikat yang kedaluwarsa pada alat pemantau lalu lintas terenkripsi diperbarui. Sekitar 147 juta orang terdampak.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Garis waktu (dirangkum dari laporan publik).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Waktu</th><th>Kejadian</th></tr></thead><tbody>
<tr><td>Maret 2017</td><td>CVE-2017-5638 diumumkan beserta patch; peringatan internal dikirim</td></tr>
<tr><td>Maret 2017</td><td>Pemindaian internal tidak menemukan portal yang rentan</td></tr>
<tr><td>Pertengahan Mei 2017</td><td>Penyerang masuk lewat portal sengketa yang belum ditambal</td></tr>
<tr><td>Akhir Juli 2017</td><td>Lalu lintas mencurigakan terlihat setelah sertifikat alat pemantau diperbarui</td></tr>
<tr><td>September 2017</td><td>Pengumuman publik; ±147 juta orang terdampak</td></tr></tbody></table></div>`,
 persiapan:[
  {q:"Faktor apa yang membuat celah ini harus ditambal paling cepat?",o:["Bisa dieksploitasi tanpa login dari internet, eksploit beredar, dan aset terhubung ke data sensitif","Karena nama celahnya panjang","Karena Struts populer di kalangan mahasiswa","Karena patch-nya gratis"],a:0,e:"Keparahan tinggi + eksploit publik + aset menghadap internet + data sensitif adalah kombinasi prioritas tertinggi."},
  {q:"Kegagalan pemindaian internal di Maret menunjukkan pentingnya…",o:["Inventaris aset yang lengkap: tahu aplikasi mana memakai komponen apa","Membeli lebih banyak antivirus","Menghapus semua aplikasi Java","Menunda patch sampai ada insiden"],a:0,e:"Kita tidak bisa menambal yang tidak kita ketahui. SBOM dan inventaris aset membuat pertanyaan 'siapa memakai Struts?' bisa dijawab dalam hitungan menit."},
  {q:"Sertifikat kedaluwarsa pada alat pemantau membuat…",o:["Lalu lintas terenkripsi tidak bisa diperiksa sehingga pencurian data tidak terlihat","Situs tidak bisa dibuka pelanggan","Patch otomatis terpasang","Penyerang tidak bisa masuk"],a:0,e:"Kendali deteksi juga butuh perawatan. Alat yang diam-diam tidak bekerja memberi rasa aman palsu."}],
 coldcall:["Kamu punya satu kalimat untuk meyakinkan tim aplikasi agar menambal minggu ini. Apa kalimatmu?","Jika patch belum bisa dipasang dalam 48 jam, kendali sementara apa yang kamu usulkan?","Metrik apa yang akan kamu laporkan ke direksi setiap minggu tentang manajemen patch?"],
 keputusan:{tanya:"Tim aplikasi meminta penundaan patch tiga bulan karena khawatir portal rusak. Apa rekomendasimu?",
  opsi:[
   {teks:"Setujui penundaan tiga bulan; stabilitas aplikasi lebih penting.",diskusi:"Untuk celah kritis tanpa login yang eksploitnya sudah beredar, tiga bulan adalah undangan terbuka. Itulah yang benar-benar terjadi."},
   {teks:"Tetapkan tenggat darurat (hitungan hari) untuk aset menghadap internet; sementara itu pasang kendali kompensasi (aturan WAF untuk pola eksploit, batasi akses), pastikan inventaris lengkap lewat pemindaian ulang, dan pantau server itu secara khusus.",kuat:true,diskusi:"Menyeimbangkan risiko operasional dan keamanan: patch secepatnya dengan pengujian ringkas, dan kendali sementara mengurangi peluang eksploitasi. Inventaris dan pemantauan memastikan tidak ada aset yang terlewat."},
   {teks:"Matikan semua aplikasi perusahaan sampai semuanya diperiksa.",diskusi:"Reaksi berlebihan yang menghentikan bisnis. Fokuskan tindakan pada aset yang rentan dan terpapar."},
   {teks:"Andalkan firewall jaringan biasa karena portal sudah di belakang firewall.",diskusi:"Eksploit datang lewat HTTPS ke port 443 yang memang dibuka untuk umum; firewall jaringan biasa meloloskannya."}]},
 catatan:`<p>Pelajaran Equifax bukan "ada celah zero-day canggih", tetapi kegagalan dasar: patch yang tersedia tidak terpasang, inventaris aset tidak lengkap, dan alat pemantau yang tidak berfungsi tanpa ada yang sadar. Manajemen kerentanan yang baik memadukan prioritas berbasis risiko (keparahan, eksploit aktif seperti katalog KEV, keterpaparan aset), tenggat yang ditegakkan, dan pengecekan bahwa kendali benar-benar bekerja.</p>`,
 pelajaran:["Celah kritis yang menghadap internet dan sudah dieksploitasi butuh tenggat hitungan hari.","Inventaris aset dan komponen adalah prasyarat menambal.","Periksa bahwa alat deteksi benar-benar bekerja."],
 sumber:"U.S. Government Accountability Office, \"Data Protection: Actions Taken by Equifax and Federal Agencies in Response to the 2017 Breach\" (GAO-18-559), Agustus 2018; U.S. House Committee on Oversight and Government Reform, laporan Equifax, Desember 2018.",
 modul:[["cyber","pentest"],["cyber","sistem"]]},

{id:"ransomwareRs", jalur:"cyber", wilayah:"Indonesia", industri:"Rumah sakit", judul:"Pukul 02.14 di RS Harapan Sehat",
 peran:"Analis keamanan on-call yang ditelepon direktur rumah sakit",
 ringkas:"File di server rumah sakit berganti ekstensi .locked. Penyerang meminta tebusan setara Rp3 miliar dan mengancam menyebarkan data pasien.",
 cerita:`<p>Telepon berdering pukul 02.30. Direktur RS Harapan Sehat, dr. Sari, terdengar panik:</p>
<blockquote><b>dr. Sari:</b> "Sistem pendaftaran dan rekam medis tidak bisa dibuka. Di layar ada pesan minta tebusan, katanya data pasien sudah mereka ambil dan akan disebar dalam 72 jam. IGD tetap jalan manual. Kita bayar saja supaya cepat selesai?"</blockquote>
<p>Tim IT menemukan cadangan harian di NAS yang tersambung ke jaringan ikut terenkripsi. Ada cadangan mingguan di pita (tape) yang disimpan di luar gedung, terakhir enam hari lalu, dan belum pernah diuji pemulihannya.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Linimasa dari EDR (WIB).</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Waktu</th><th>Kejadian</th></tr></thead><tbody>
<tr><td>Senin 23.10</td><td>Login VPN akun vendor dari luar negeri, tanpa MFA</td></tr>
<tr><td>Selasa 00.30</td><td>Program rclone mengirim ±40 GB ke server eksternal</td></tr>
<tr><td>Selasa 01.58</td><td>Perintah vssadmin delete shadows di server file</td></tr>
<tr><td>Selasa 02.01–02.14</td><td>Ribuan file berganti ekstensi .locked; catatan tebusan dibuat</td></tr></tbody></table></div>`,
 persiapan:[
  {q:"Pintu masuk penyerang yang paling mungkin menurut Exhibit 1 adalah…",o:["Akun VPN vendor tanpa MFA","Email phishing ke dokter","Server web yang di-DDoS","Wi-Fi tamu"],a:0,e:"Kejadian pertama adalah login VPN akun vendor dari luar negeri tanpa MFA, beberapa jam sebelum pencurian dan enkripsi data."},
  {q:"Arti rclone mengirim ±40 GB sebelum enkripsi adalah…",o:["Data kemungkinan sudah dicuri (double extortion), sehingga ini juga kebocoran data pribadi","Cadangan otomatis sedang berjalan","Pembaruan Windows","Tidak berarti apa-apa"],a:0,e:"Pencurian sebelum enkripsi adalah pola pemerasan ganda. Data pasien adalah data kesehatan (spesifik), sehingga kewajiban pemberitahuan UU PDP 3 × 24 jam berlaku."},
  {q:"Langkah penahanan yang paling mendesak saat ini adalah…",o:["Memutus server dan perangkat terdampak dari jaringan, menonaktifkan akun VPN vendor, dan mengamankan cadangan pita agar tidak tersambung","Mematikan semua komputer dengan mencabut listrik","Membayar tebusan","Menghapus catatan tebusan"],a:0,e:"Hentikan penyebaran dan amankan cadangan yang tersisa, sambil menjaga bukti (isolasi, bukan cabut daya)."}],
 coldcall:["dr. Sari menunggu jawabanmu soal tebusan. Apa yang kamu katakan dalam 30 detik?","Siapa saja pihak di luar rumah sakit yang perlu dihubungi dalam 24 jam pertama?","Apa satu hal yang harus diuji sebelum mengandalkan cadangan pita?"],
 keputusan:{tanya:"Apa rekomendasi utamamu kepada direktur malam ini?",
  opsi:[
   {teks:"Bayar tebusan secepatnya agar layanan pulih dan data tidak disebar.",diskusi:"Membayar tidak menjamin kunci bekerja atau data tidak disebar, mendanai kejahatan berikutnya, dan bisa membuat RS menjadi target ulang. Keputusan seperti ini juga butuh pertimbangan hukum, bukan keputusan teknis tengah malam."},
   {teks:"Fokus pada penahanan dan pemulihan: isolasi sistem, nonaktifkan akun vendor dan wajibkan MFA, amankan bukti, uji pemulihan dari cadangan pita di lingkungan terpisah, jalankan prosedur layanan manual, libatkan manajemen, bagian hukum, dan CSIRT/BSSN, serta siapkan pemberitahuan UU PDP. Keputusan soal tebusan dibahas pimpinan bersama penasihat hukum, bukan dijadikan langkah pertama.",kuat:true,diskusi:"Mengutamakan keselamatan pasien dan pemulihan yang terkendali, memenuhi kewajiban hukum, dan menjaga bukti. Menguji pemulihan pita lebih dulu menjawab pertanyaan terpenting: bisakah kita bangkit tanpa membayar?"},
   {teks:"Langsung pasang ulang semua server dari nol malam ini.",diskusi:"Menghapus bukti, belum menutup jalan masuk (akun VPN vendor), dan berisiko kehilangan data jika cadangan pita ternyata gagal."},
   {teks:"Rahasiakan kejadian ini dari pasien dan regulator untuk menjaga reputasi.",diskusi:"Melanggar kewajiban pemberitahuan UU PDP (3 × 24 jam) dan merugikan pasien yang datanya bocor. Kerahasiaan seperti ini sering berakhir dengan kerugian reputasi yang jauh lebih besar."}]},
 catatan:`<p>Di rumah sakit, keselamatan pasien adalah prioritas pertama, sehingga prosedur layanan manual (downtime procedure) harus siap jauh sebelum insiden. Kasus ini juga menunjukkan tiga kegagalan umum: akses vendor tanpa MFA, cadangan yang tersambung ke jaringan, dan cadangan offline yang belum pernah diuji. Keputusan membayar tebusan melibatkan aspek hukum, etika, dan bisnis; tugas tim teknis adalah menyediakan fakta: apakah pemulihan dari cadangan mungkin, berapa lama, dan data apa yang sudah dicuri.</p>`,
 pelajaran:["Akses jarak jauh (termasuk vendor) wajib MFA.","Cadangan harus offline/immutable dan diuji pemulihannya.","Pencurian data sebelum enkripsi memicu kewajiban pemberitahuan UU PDP."],
 modul:[["cyber","insiden"],["cyber","malware"]]},

{id:"kunciGithub", jalur:"cyber", wilayah:"Global", industri:"Transportasi daring", judul:"Uber 2016: Kunci di Repositori dan Tebusan Berkedok Bug Bounty",
 peran:"Anggota tim keamanan yang mengetahui insiden ini pada November 2016",
 ringkas:"Penyerang menemukan kredensial cloud di repositori kode, mengunduh data 57 juta pengguna, lalu meminta uang. Atasan ingin membayar lewat program bug bounty dan merahasiakannya.",
 cerita:`<p>Akhir 2016, penyerang masuk ke repositori GitHub privat yang dipakai engineer Uber dan menemukan kredensial akses cloud (AWS) tersimpan di kode. Dengan kredensial itu mereka mengunduh data sekitar 57 juta pengendara dan pengemudi, termasuk ratusan ribu nomor SIM pengemudi di Amerika Serikat. Mereka lalu menghubungi Uber dan meminta bayaran.</p>
<p>Perusahaan membayar USD 100.000 melalui program bug bounty dan meminta para pelaku menandatangani perjanjian kerahasiaan. Insiden itu baru diumumkan setahun kemudian oleh CEO baru. Kepala keamanannya saat itu kemudian dinyatakan bersalah oleh pengadilan federal AS (2022) karena menutupi insiden dari regulator.</p>`,
 exhibit:`<p class="kecil"><b>Exhibit 1.</b> Ringkasan fakta publik.</p>
<div class="tabel-scroll"><table class="tabel-db"><thead><tr><th>Aspek</th><th>Fakta</th></tr></thead><tbody>
<tr><td>Jalan masuk</td><td>Kredensial cloud di repositori kode</td></tr>
<tr><td>Data</td><td>±57 juta pengguna (nama, email, nomor telepon), ±600 ribu nomor SIM pengemudi AS</td></tr>
<tr><td>Respons</td><td>Pembayaran USD 100.000 lewat bug bounty + perjanjian kerahasiaan</td></tr>
<tr><td>Pengungkapan</td><td>November 2017, sekitar satu tahun setelah kejadian</td></tr>
<tr><td>Akibat</td><td>Penyelesaian USD 148 juta dengan negara-negara bagian AS (2018); vonis bersalah mantan kepala keamanan (2022)</td></tr></tbody></table></div>`,
 persiapan:[
  {q:"Kesalahan teknis yang membuka jalan masuk adalah…",o:["Menyimpan kredensial cloud di dalam kode/repositori","Memakai GitHub","Memakai cloud","Memiliki program bug bounty"],a:0,e:"Rahasia tidak boleh disimpan di kode. Pakai secret manager, kredensial berumur pendek, dan secret scanning di repositori."},
  {q:"Kenapa pembayaran ini bukan bug bounty yang sah?",o:["Pelaku mengunduh data jutaan pengguna dan meminta uang; itu pemerasan atas pembobolan, bukan laporan celah dengan bukti minimal","Karena nominalnya terlalu kecil","Karena dibayar dalam dolar","Karena pelakunya bukan karyawan"],a:0,e:"Bug bounty membayar laporan celah sesuai aturan, tanpa pengambilan data massal. Menyamarkan tebusan sebagai bounty adalah penutupan insiden."},
  {q:"Kewajiban yang dilanggar dengan merahasiakan insiden adalah…",o:["Memberi tahu regulator dan orang yang datanya bocor","Memperbarui logo","Mengganti nama repositori","Menambah fitur aplikasi"],a:0,e:"Hampir semua aturan pelindungan data mewajibkan pemberitahuan kebocoran. Di Indonesia, UU PDP mewajibkannya paling lambat 3 × 24 jam."}],
 coldcall:["Atasanmu berkata, 'Kita bayar saja lewat bug bounty, beres.' Apa jawabanmu dalam satu menit?","Langkah teknis apa yang harus dilakukan terhadap kredensial yang bocor dalam satu jam pertama?","Kontrol apa yang mencegah kredensial masuk ke repositori sejak awal?"],
 keputusan:{tanya:"Apa yang seharusnya direkomendasikan tim keamanan saat itu?",
  opsi:[
   {teks:"Bayar lewat bug bounty, minta pelaku menghapus data, dan tutup kasusnya diam-diam.",diskusi:"Itulah yang terjadi, dan berujung pada sanksi besar serta pidana bagi pimpinan keamanan. Janji pelaku menghapus data tidak bisa diverifikasi."},
   {teks:"Cabut dan ganti semua kredensial yang bocor, selidiki cakupan data, libatkan bagian hukum dan pimpinan, beri tahu regulator serta pengguna terdampak sesuai hukum, laporkan pemerasan ke penegak hukum, dan pasang secret scanning serta kredensial berumur pendek.",kuat:true,diskusi:"Menutup akses, memenuhi kewajiban hukum, dan memperbaiki akar masalah. Transparansi memang menyakitkan dalam jangka pendek, tetapi menutupi insiden terbukti jauh lebih mahal."},
   {teks:"Hapus repositori GitHub itu dan anggap masalah selesai.",diskusi:"Kredensial tetap berlaku sampai dicabut, data sudah diunduh, dan bukti ikut hilang."},
   {teks:"Tunggu sampai ada bukti data disebar sebelum melakukan apa pun.",diskusi:"Menunda memperbesar kerugian dan melanggar kewajiban pemberitahuan."}]},
 catatan:`<p>Kasus Uber menggabungkan dua pelajaran. Teknis: rahasia di kode adalah kebocoran yang menunggu waktu, sehingga butuh secret manager, rotasi, kredensial berumur pendek, dan pemindaian rahasia otomatis. Etika dan hukum: program bug bounty tidak boleh menjadi kedok membayar pemerasan, dan menutupi kebocoran dari regulator serta korban bisa berujung pidana. Bagi profesional keamanan, integritas adalah bagian dari pekerjaan, bukan pilihan.</p>`,
 pelajaran:["Kredensial di repositori harus dianggap bocor; cabut dan ganti.","Bug bounty bukan kedok untuk membayar pemerasan.","Menutupi insiden dari regulator dan korban bisa berujung pidana."],
 sumber:"Pengumuman Uber (Dara Khosrowshahi), 21 November 2017; siaran pers Jaksa Agung negara-negara bagian AS tentang penyelesaian USD 148 juta, September 2018; U.S. Department of Justice, putusan juri terhadap mantan Chief Security Officer Uber, Oktober 2022.",
 modul:[["cyber","cloud"],["cyber","insiden"]]},
];

if (typeof module !== "undefined") module.exports = { KASUS };
