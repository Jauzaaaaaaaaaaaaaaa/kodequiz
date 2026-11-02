// ============ PERSIAPAN KARIER — portofolio, CV, kata kunci lowongan ============

const SOAL_KARIER = [
// ---- BAB 1: Portofolio 1 halaman ----
{k:"portofolio",t:"mc",lv:1,q:"Untuk fresh graduate yang melamar Data Analyst, portofolio paling kuat biasanya berupa…",o:["Studi kasus dari data nyata: masalah → proses → hasil → dampak","Daftar semua sertifikat online","Foto-foto kegiatan kampus","Kode program sebanyak-banyaknya"],a:0,
 e:"Rekruter ingin melihat CARA BERPIKIRMU: bagaimana kamu mengubah data mentah menjadi jawaban bisnis. Satu studi kasus yang rapi (contoh: skripsi segmentasi pelanggan) lebih meyakinkan daripada 20 sertifikat.",
 w:[null,"Sertifikat hanya membuktikan kamu menonton kursus, belum membuktikan kamu bisa menerapkannya.","Foto kegiatan tidak menunjukkan skill analisis.","Untuk peran data/bisnis, yang dinilai adalah insight, bukan banyaknya kode."]},
{k:"portofolio",t:"mc",lv:1,q:"Urutan bagian studi kasus portofolio yang paling enak dibaca rekruter:",o:["Masalah bisnis → Data → Metode → Hasil & insight → Rekomendasi","Kode → Library → Hasil → Masalah","Ucapan terima kasih → Teori → Kode","Hasil saja, sisanya tidak perlu"],a:0,
 e:"Mulai dari MASALAH (kenapa ini penting), lalu data apa yang dipakai, metodenya (K-Means vs K-Medoids), hasilnya, dan terakhir rekomendasi untuk bisnis. Rekruter rata-rata hanya membaca sekilas — kalimat pertama harus langsung menjawab 'kenapa ini penting'.",
 w:[null,"Kode di awal membuat pembaca non-teknis (HR) langsung berhenti membaca.","Itu format skripsi, bukan portofolio. Portofolio harus ringkas.","Tanpa konteks masalah, hasilnya tidak bermakna."]},
{k:"portofolio",t:"mc",lv:2,q:"Kalimat pembuka studi kasus yang paling kuat:",o:["\"Toko e-commerce sulit menentukan promo yang tepat untuk tiap jenis pelanggan. Saya mengelompokkan pelanggan berdasarkan perilaku belanja agar promo lebih tepat sasaran.\"","\"Pada penelitian ini digunakan algoritma K-Means dan K-Medoids.\"","\"Skripsi ini dibuat untuk memenuhi syarat kelulusan.\"","\"Saya suka data science sejak kecil.\""],a:0,
 e:"Pembuka terbaik menyebut MASALAH bisnis + APA yang kamu lakukan untuk menyelesaikannya, dalam bahasa yang dimengerti orang non-teknis. Nama algoritma boleh muncul di paragraf berikutnya.",
 w:[null,"Langsung teknis — pembaca belum tahu kenapa ini penting.","Ini alasan administratif, tidak menarik bagi perusahaan.","Cerita pribadi tidak menunjukkan kemampuan."]},
{k:"portofolio",t:"mc",lv:2,q:"Hasil skripsimu: K-Medoids lebih cocok daripada K-Means untuk data tersebut. Cara menuliskannya di portofolio yang paling bernilai:",o:["Sebutkan alasan + angka evaluasinya (misal Davies-Bouldin Index), lalu artinya untuk bisnis","Tulis \"K-Medoids lebih bagus\" saja","Tempel seluruh output Python","Jangan tulis perbandingannya"],a:0,
 e:"Angka evaluasi menunjukkan kamu objektif; penjelasan 'artinya untuk bisnis' menunjukkan kamu bisa menerjemahkan hasil teknis. Contoh: 'K-Medoids menghasilkan cluster yang lebih stabil karena tidak terlalu terpengaruh pelanggan dengan belanja ekstrem.' (Pakai angka dan alasan dari hasil skripsimu sendiri.)",
 w:[null,"Klaim tanpa bukti terdengar seperti opini.","Output mentah menyulitkan pembaca. Pilih 1–2 grafik atau tabel kunci.","Justru perbandingan itulah nilai jual utama skripsimu."]},
{k:"portofolio",t:"mc",lv:1,q:"Dashboard di portofolio sebaiknya…",o:["Bisa dibuka lewat link publik (Looker Studio/Power BI/Tableau Public) dan menjawab 2–3 pertanyaan bisnis jelas","Berisi sebanyak mungkin grafik","Hanya berupa screenshot tanpa penjelasan","Memakai warna sebanyak-banyaknya"],a:0,
 e:"Dashboard yang baik menjawab pertanyaan, bukan memamerkan grafik. Contoh pertanyaan: Segmen mana yang paling bernilai? Berapa banyak pelanggannya? Produk apa yang mereka beli? Looker Studio gratis dan bisa dibuka cukup dengan link.",
 w:[null,"Terlalu banyak grafik membuat pesan utamanya hilang.","Screenshot boleh sebagai cadangan, tapi link interaktif lebih meyakinkan.","Warna berlebihan justru membuat dashboard sulit dibaca."]},
{k:"portofolio",t:"mc",lv:2,q:"Data skripsimu berasal dari penjualan sebuah toko. Sebelum dipublikasikan di GitHub/Netlify, yang WAJIB dilakukan:",o:["Pastikan tidak ada data pribadi (nama/nomor/alamat pembeli) dan minta izin bila perlu; kalau ragu, pakai data yang dianonimkan","Langsung upload semua file mentah","Ganti judul saja","Tidak perlu apa-apa, karena data dari internet"],a:0,
 e:"Menjaga data pribadi adalah sikap profesional — rekruter memperhatikannya. Ganti ID pelanggan menjadi kode acak, hapus kolom nama/telepon, atau tampilkan hanya ringkasan per segmen.",
 w:[null,"Bisa melanggar privasi pelanggan dan kesepakatan dengan toko.","Judul tidak melindungi data di dalamnya.","Sumber data tetap punya aturan dan hak."]},
{k:"portofolio",t:"is",lv:1,q:"Layanan gratis yang sudah kamu kuasai untuk men-deploy halaman portofolio statis: N______ (isi namanya)",a:["netlify"],
 h:"Kamu pernah memakainya untuk proyek website zodiak.",
 e:"Netlify cocok untuk halaman portofolio: drag-and-drop folder atau sambungkan ke repo GitHub, lalu otomatis online. Simpan kode di GitHub agar rekruter juga bisa melihat proses kerjamu."},

// ---- BAB 2: CV yang menjual dampak ----
{k:"cv",t:"mc",lv:1,q:"Bullet pengalaman magang yang paling kuat:",o:["Membangun dashboard penjualan di Odoo yang membantu tim sales memantau performa harian tanpa rekap manual","Odoo Developer","Bertanggung jawab atas dashboard","Membantu pekerjaan di divisi IT"],a:0,
 e:"Rumus bullet yang kuat: KATA KERJA AKTIF + APA YANG DIBUAT + UNTUK SIAPA + DAMPAK. Rekruter langsung tahu skill-mu (Odoo, dashboard), konteksnya (tim sales), dan nilainya (tidak perlu rekap manual).",
 w:[null,"Ini jabatan, bukan pencapaian. Tidak menjelaskan apa yang kamu kerjakan.","'Bertanggung jawab atas' itu pasif dan tidak menjelaskan hasilnya.","Terlalu umum — bisa ditulis oleh siapa saja."]},
{k:"cv",t:"mc",lv:2,q:"Kamu tidak punya angka pasti tentang dampak dashboard-mu. Yang sebaiknya dilakukan:",o:["Pakai angka yang bisa kamu pertanggungjawabkan (jumlah pengguna, jumlah laporan, waktu yang dihemat menurut user), atau jelaskan dampaknya secara kualitatif","Karang angka besar agar menarik","Jangan tulis dampaknya sama sekali","Tulis 'meningkatkan penjualan 300%'"],a:0,
 e:"Angka membuat CV kuat, tapi harus JUJUR — interviewer akan bertanya 'dari mana angka itu?'. Contoh yang aman: 'dipakai [N] salesperson', 'menggantikan rekap Excel mingguan'. Kalau tidak ada angka, dampak kualitatif tetap jauh lebih baik daripada tidak ada.",
 w:[null,"Angka karangan akan terbongkar saat interview dan merusak kepercayaan.","Tanpa dampak, bullet terlihat seperti daftar tugas.","Klaim yang tidak bisa dibuktikan sangat berisiko."]},
{k:"cv",t:"mc",lv:1,q:"Kata kerja pembuka bullet CV yang paling kuat:",o:["Membangun, Menganalisis, Mengotomatisasi, Menyajikan","Membantu, Ikut serta, Terlibat","Bertugas, Diberi tanggung jawab","Mencoba, Belajar"],a:0,
 e:"Kata kerja aktif menunjukkan KAMU yang melakukan. 'Membantu' dan 'terlibat' membuat peranmu terdengar kecil, walau sebenarnya kamu yang mengerjakan.",
 w:[null,"Terkesan pasif dan perannya kecil.","Menjelaskan tugas, bukan hasil.","Terkesan belum mampu."]},
{k:"cv",t:"mc",lv:2,q:"Banyak perusahaan menyaring CV dengan sistem ATS (Applicant Tracking System). Agar CV-mu lolos:",o:["Pakai format sederhana (1 kolom, teks bisa diseleksi) dan cantumkan kata kunci dari deskripsi lowongan yang memang sesuai dengan skill-mu","Pakai desain 2 kolom penuh ikon dan grafik skill","Simpan CV sebagai gambar JPG","Tulis semua kata kunci dengan warna putih tersembunyi"],a:0,
 e:"ATS membaca teks. Desain rumit, tabel, dan gambar sering terbaca berantakan. Sesuaikan kata kunci per lowongan: kalau lowongan menyebut 'SQL', 'dashboard', 'Odoo', pastikan kata yang sama ada di CV-mu (jika memang kamu kuasai).",
 w:[null,"Grafik 'skill bar' tidak terbaca ATS dan tidak bermakna bagi rekruter.","ATS tidak bisa membaca teks di dalam gambar.","Trik ini mudah ketahuan dan bisa membuat CV-mu langsung ditolak."]},
{k:"cv",t:"mc",lv:2,q:"Urutan bagian CV fresh graduate yang disarankan untuk posisi data/bisnis:",o:["Ringkasan singkat → Pengalaman (magang) → Proyek/Portofolio → Pendidikan → Skill","Hobi → Foto besar → Pendidikan SD sampai kuliah","Skill bar → Hobi → Pengalaman","Pendidikan lengkap → Daftar mata kuliah → Pengalaman"],a:0,
 e:"Taruh bagian terkuatmu di atas. Magang 6 bulan + proyek skripsi adalah bukti nyata — itu yang harus dilihat rekruter dalam 6–10 detik pertama. Untuk fresh graduate, pendidikan boleh ditaruh di atas jika IPK-mu menonjol.",
 w:[null,"Pendidikan SD/SMP tidak relevan, dan hobi bukan prioritas.","Skill bar tidak bermakna dan memakan tempat.","Daftar mata kuliah jarang dibaca."]},
{k:"cv",t:"mc",lv:3,q:"Untuk lowongan Odoo Functional Consultant, bullet magangmu sebaiknya MENONJOLKAN…",o:["Pemahaman proses bisnis sales, komunikasi dengan pengguna, dan konfigurasi Odoo","Bahasa pemrograman sebanyak mungkin","Nilai IPK semester 1","Hobi bermain game"],a:0,
 e:"CV yang sama tidak cocok untuk semua lowongan. Functional consultant dinilai dari kemampuan memahami proses bisnis dan menjembatani user–sistem. Untuk lowongan Data Analyst, tonjolkan sisi data dan dashboard-nya. Siapkan 2 versi CV.",
 w:[null,"Functional consultant lebih banyak konfigurasi dan analisis proses daripada coding.","Tidak relevan untuk peran ini.","Tidak relevan, kecuali sangat terkait dengan posisinya."]},
{k:"cv",t:"is",lv:1,q:"Rumus bullet CV: KATA KERJA AKTIF + APA YANG DIBUAT + UNTUK SIAPA + ______ (satu kata)",a:["dampak","hasil","impact"],
 h:"Bagian yang paling sering dilupakan pelamar — 'lalu apa hasilnya?'",
 e:"Dampak menjawab pertanyaan 'so what?' dari rekruter. Tanpa dampak, bullet hanya daftar tugas."},

// ---- BAB 3: Kata kunci & strategi lowongan ----
{k:"lowongan",t:"mc",lv:1,q:"Peran yang tugas utamanya mengonfigurasi ERP (seperti Odoo) sesuai proses bisnis klien, melatih user, dan rapat dengan klien adalah…",o:["Functional Consultant / Implementation Specialist","Backend Developer","Network Engineer","Graphic Designer"],a:0,
 e:"Functional/Implementation Consultant menjembatani bisnis dan sistem. Coding-nya minim, tapi pemahaman proses (sales, inventory, accounting) dan komunikasinya tinggi. Pengalaman magang Odoo-mu langsung relevan di sini.",
 w:[null,"Backend developer fokus menulis kode server.","Network engineer mengurus jaringan dan infrastruktur.","Desainer grafis fokus pada visual."]},
{k:"lowongan",t:"mc",lv:1,q:"Peran yang tugas hariannya menulis query SQL, membuat dashboard, dan menjawab pertanyaan bisnis dengan data adalah…",o:["Data Analyst / BI Analyst","Presales Engineer","Management Trainee","IT Support"],a:0,
 e:"Data/BI Analyst = SQL + Excel + dashboard + kemampuan menjelaskan hasil. Inilah kenapa modul Excel dan SQL di aplikasi ini penting untuk jalur tersebut.",
 w:[null,"Presales lebih ke demo produk dan menjelaskan solusi ke calon klien.","MT adalah program rotasi umum untuk calon pemimpin.","IT Support menangani masalah perangkat dan pengguna."]},
{k:"lowongan",t:"mc",lv:2,q:"Presales Engineer / Solutions Consultant paling cocok untukmu jika…",o:["Kamu suka menjelaskan solusi teknis ke calon klien dan tertarik dunia sales","Kamu ingin coding seharian tanpa bicara dengan orang","Kamu hanya ingin bekerja dengan Excel","Kamu tidak suka presentasi"],a:0,
 e:"Presales menggabungkan pemahaman teknis + presentasi + sales. Kamu membantu tim sales memenangkan klien dengan demo dan menjawab pertanyaan teknis. Ini jembatan antara minat sales dan latar belakang TI-mu.",
 w:[null,"Itu lebih cocok untuk developer.","Excel hanya alat bantu di peran ini.","Presentasi adalah inti pekerjaan presales."]},
{k:"lowongan",t:"mc",lv:2,q:"Lowongan menulis 'S1 Sistem Informasi / Statistika / semua jurusan'. Kamu lulusan Teknik Informatika. Sebaiknya…",o:["Tetap lamar — TI hampir selalu dianggap relevan, dan tonjolkan skill yang diminta","Jangan lamar karena jurusannya tidak disebut persis","Ganti jurusan di CV","Kirim email protes ke HR"],a:0,
 e:"Syarat jurusan sering ditulis longgar. Yang lebih menentukan adalah kecocokan skill. Jika sekitar 60–70% syaratnya kamu penuhi, lamar saja.",
 w:[null,"Kamu akan kehilangan banyak peluang yang sebenarnya cocok.","Memalsukan data adalah pelanggaran serius.","Tidak profesional dan tidak perlu."]},
{k:"lowongan",t:"mc",lv:2,q:"Cara mencari lowongan yang paling efisien:",o:["Pakai kata kunci spesifik (misal 'Odoo Functional Consultant', 'Junior Data Analyst') di beberapa portal, simpan pencarian dan aktifkan notifikasi","Ketik 'lowongan IT' lalu lamar semua hasilnya","Hanya menunggu info dari teman","Melamar hanya ke satu perusahaan impian"],a:0,
 e:"Kata kunci spesifik = hasil lebih relevan. Aktifkan notifikasi di LinkedIn, Glints, JobStreet, Kalibrr, atau Dealls. Untuk Odoo, cek juga perusahaan partner Odoo di kotamu — mereka sering merekrut fresh graduate.",
 w:[null,"Terlalu umum: hasilnya campur aduk dan melelahkan.","Jaringan memang penting, tapi tetap harus aktif mencari.","Terlalu berisiko — selalu siapkan banyak pilihan."]},
{k:"lowongan",t:"mc",lv:3,q:"Kamu melamar 30 lowongan dalam 2 minggu dan belum ada panggilan. Langkah paling masuk akal:",o:["Evaluasi: apakah CV disesuaikan per peran? Apakah portofolio ada? Minta 1–2 orang yang sudah bekerja me-review CV-mu","Berhenti melamar","Lamar 100 lowongan lagi dengan CV yang sama","Ganti bidang total"],a:0,
 e:"Kalau tidak ada panggilan sama sekali, biasanya masalahnya ada di CV atau kecocokan targetnya, bukan di dirimu. Perbaiki satu variabel, lalu ukur lagi — cara berpikir data analyst yang juga berlaku untuk mencari kerja.",
 w:[null,"Mencari kerja pertama biasanya butuh waktu berbulan-bulan. 30 lamaran masih awal.","Mengulang cara yang sama biasanya memberi hasil yang sama.","Terlalu cepat menyimpulkan dari data sedikit."]},
{k:"lowongan",t:"is",lv:1,q:"Program rekrutmen terstruktur dengan rotasi divisi untuk lulusan baru, sering terbuka untuk semua jurusan, disebut Management ______",a:["trainee"],
 h:"Disingkat MT.",
 e:"Management Trainee (MT). Seleksinya ketat (tes psikologi, FGD, wawancara berlapis), tapi gaji awal dan jenjang kariernya biasanya jelas."},
];

const MATERI_KARIER = [
{k:"portofolio",judul:"Portofolio 1 Halaman: Skripsi → Studi Kasus",materi:`
<p>Skripsimu tentang <b>segmentasi pelanggan e-commerce (K-Means vs K-Medoids)</b> adalah bahan portofolio yang bagus — tinggal diubah dari format akademik menjadi <b>cerita bisnis</b>.</p>
<p><b>Struktur 1 halaman (6 bagian):</b></p>
<ol>
<li><b>Judul yang menjual:</b> "Segmentasi Pelanggan E-commerce untuk Strategi Promo yang Tepat Sasaran"</li>
<li><b>Masalah (2 kalimat):</b> kenapa toko butuh segmentasi?</li>
<li><b>Data:</b> sumber, jumlah baris, periode, fitur yang dipakai (misal Recency, Frequency, Monetary). <i>Anonimkan data pribadi.</i></li>
<li><b>Metode:</b> K-Means vs K-Medoids, cara memilih jumlah cluster, metrik evaluasi.</li>
<li><b>Hasil & insight:</b> 1–2 grafik + penjelasan tiap segmen dalam bahasa bisnis.</li>
<li><b>Rekomendasi:</b> apa yang sebaiknya dilakukan toko untuk tiap segmen.</li>
</ol>
<p><b>Dashboard:</b> buat 1 dashboard di <b>Looker Studio</b> (gratis, cukup akun Google) atau <b>Power BI</b>, dengan 3 bagian: KPI ringkas → grafik per segmen → tabel detail.</p>
<p><b>Publikasi:</b> template halaman portofolio sudah tersedia di folder <code>templates/portofolio/</code> proyek ini. Isi, upload ke GitHub, lalu deploy ke Netlify.</p>
<div class="catatan">✅ Tes sederhana: minta teman non-IT membaca halamanmu selama 1 menit. Kalau ia bisa menjelaskan "apa masalahnya dan apa hasilnya", portofoliomu sudah bekerja.</div>`},

{k:"cv",judul:"CV yang Menjual Dampak, Bukan Daftar Tugas",materi:`
<p>Rekruter rata-rata hanya melihat sebuah CV dalam hitungan detik. Mereka mencari <b>bukti</b>, bukan klaim.</p>
<p><b>Rumus bullet:</b> <code>Kata kerja aktif + apa yang dibuat + untuk siapa + dampak</code></p>
<p><b>Contoh dari pengalaman magangmu:</b></p>
<div class="banding"><div class="banding-buruk"><b>❌ Sebelum</b><br>Odoo Developer — Widya Analytic (6 bulan)</div>
<div class="banding-baik"><b>✅ Sesudah</b><br>Odoo Developer Intern — Widya Analytic (6 bulan)
<ul><li>Membangun dashboard penjualan di Odoo untuk tim sales, sehingga performa per salesperson bisa dipantau tanpa rekap manual.</li>
<li>Menerjemahkan kebutuhan tim sales menjadi tampilan data yang mudah dibaca oleh pengguna non-teknis.</li>
<li>[Tambahkan angka nyata jika ada: jumlah pengguna, jumlah laporan, atau waktu yang dihemat]</li></ul></div></div>
<p><b>Aturan penting:</b></p>
<ul>
<li>Pakai angka yang <b>jujur</b> dan bisa kamu jelaskan saat interview.</li>
<li>Format <b>sederhana, 1 kolom</b>, teks bisa diseleksi → ramah ATS. Hindari skill bar dan CV berbentuk gambar.</li>
<li>Siapkan <b>2 versi CV</b>: versi Consultant (proses bisnis, komunikasi) dan versi Data Analyst (SQL, Excel, dashboard, skripsi).</li>
<li>Cantumkan link portofolio & GitHub di bagian atas.</li>
</ul>`},

{k:"lowongan",judul:"Kata Kunci Lowongan & Strategi Melamar",materi:`
<p>Ketik kata kunci ini <b>persis</b> di portal kerja (LinkedIn, Glints, JobStreet, Kalibrr, Dealls) dan aktifkan notifikasinya:</p>
<table class="mini-pivot">
<tr><th>Kata kunci</th><th>Inti pekerjaan</th><th>Skill yang dilatih di sini</th></tr>
<tr><td>Odoo Functional Consultant</td><td>Konfigurasi Odoo sesuai proses bisnis klien, melatih user</td><td>Proses bisnis, komunikasi</td></tr>
<tr><td>ERP Consultant</td><td>Sama, untuk ERP lain (SAP, Oracle, dll.)</td><td>Proses bisnis</td></tr>
<tr><td>Implementation Specialist</td><td>Menerapkan software di perusahaan klien</td><td>Komunikasi, troubleshooting</td></tr>
<tr><td>Junior Data Analyst</td><td>SQL, Excel, dashboard, insight</td><td>Excel, SQL, portofolio</td></tr>
<tr><td>BI Analyst</td><td>Dashboard & laporan rutin</td><td>SQL, pivot, visualisasi</td></tr>
<tr><td>Presales Engineer</td><td>Demo produk teknis ke calon klien</td><td>Presentasi, pemahaman teknis</td></tr>
<tr><td>Solutions Consultant</td><td>Merancang solusi sesuai kebutuhan klien</td><td>Analisis kebutuhan</td></tr>
<tr><td>Management Trainee</td><td>Program rotasi calon pemimpin</td><td>Analisis, komunikasi</td></tr>
</table>
<p><b>Strategi:</b></p>
<ul>
<li><b>Odoo:</b> cari daftar partner Odoo di kotamu (di situs resmi Odoo ada direktori partner), lalu cek halaman karier mereka.</li>
<li>Syarat jurusan "SI / Statistika / semua jurusan" → tetap lamar.</li>
<li>Penuhi sekitar 60–70% syarat → lamar.</li>
<li>Catat semua lamaran (tanggal, posisi, status) di spreadsheet — sekalian latihan Excel.</li>
<li>Tidak ada panggilan setelah 20–30 lamaran? Evaluasi CV, jangan langsung menyalahkan diri sendiri.</li>
</ul>`},
];
