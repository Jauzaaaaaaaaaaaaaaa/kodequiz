// ============ KARIER lanjutan — bab 4–5: wawancara & strategi melamar ============
// Ditambahkan di belakang SOAL_KARIER supaya ID soal lama tidak bergeser.

SOAL_KARIER.push(
// ---- BAB 4: Wawancara ----
{k:"wawancara",t:"mc",lv:1,q:"Metode STAR untuk menjawab pertanyaan perilaku ('Ceritakan saat kamu…') adalah…",o:["Situation, Task, Action, Result","Skill, Talent, Attitude, Reward","Start, Think, Answer, Repeat","Story, Time, Ask, Respond"],a:0,
 e:"Situasinya apa, tugasmu apa, apa yang KAMU lakukan, dan apa hasilnya (sebaiknya dengan angka). Porsi terbesar ada di Action dan Result. Contoh dari magang: Situation = tim sales merekap manual, Task = membuat dashboard, Action = mengumpulkan kebutuhan lalu membangun dashboard di Odoo, Result = performa per salesperson bisa dipantau tanpa rekap.",
 w:[null,"Bukan kepanjangan STAR.","Bukan kepanjangan STAR.","Bukan kepanjangan STAR."]},
{k:"wawancara",t:"mc",lv:2,q:"Jawaban terbaik untuk 'Ceritakan tentang dirimu':",o:["±1–2 menit: siapa kamu sekarang (lulusan TI), pengalaman yang relevan (magang Odoo, skripsi segmentasi), dan kenapa tertarik dengan posisi ini","Riwayat hidup sejak SD","Hobi dan makanan favorit saja","\"Semua sudah ada di CV, Pak/Bu.\""],a:0,
 e:"Pola present → past → future. Pertanyaan ini sebenarnya berarti 'kenapa kamu cocok untuk posisi ini?'. Siapkan versi berbeda untuk lowongan Consultant dan Data Analyst, lalu latih dengan suara keras.",
 w:[null,"Terlalu panjang dan tidak relevan.","Boleh disinggung sedikit, tapi bukan intinya.","Terkesan malas dan melewatkan kesempatan emas."]},
{k:"wawancara",t:"mc",lv:2,q:"Pertanyaan 'Apa kelemahanmu?' paling baik dijawab dengan…",o:["Kelemahan yang nyata tapi bukan inti pekerjaan, ditambah langkah konkret yang sedang kamu lakukan untuk memperbaikinya","\"Saya terlalu perfeksionis.\"","\"Saya tidak punya kelemahan.\"","Kelemahan yang justru inti pekerjaan itu, tanpa solusi"],a:0,
 e:"Contoh jujur: 'Excel tingkat lanjut saya dulu masih lemah. Sejak lulus saya berlatih setiap hari — pivot table, XLOOKUP, SUMIFS — dan sekarang sudah bisa membuat laporan penjualan sendiri.' Ini menunjukkan kesadaran diri dan inisiatif belajar.",
 w:[null,"Klise; pewawancara sudah ribuan kali mendengarnya.","Tidak jujur dan terkesan tidak sadar diri.","Menyebut kelemahan inti tanpa solusi menjadi alasan untuk menolakmu."]},
{k:"wawancara",t:"mc",lv:2,q:"Pewawancara HR (non-teknis) bertanya tentang skripsimu. Cara menjelaskan yang tepat:",o:["Masalah bisnis → apa yang kamu lakukan (1 kalimat metode) → hasil → manfaat bagi toko, tanpa istilah teknis yang tidak perlu","Menjelaskan rumus jarak Euclidean secara detail","Membacakan bab 3 skripsi","\"Susah dijelaskan, Bu.\""],a:0,
 e:"Kemampuan menyederhanakan hal teknis adalah inti pekerjaan konsultan dan analis. Sesuaikan kedalaman dengan pendengar; siapkan detail teknis untuk pewawancara user/teknis.",
 w:[null,"Terlalu teknis untuk HR.","Terlalu panjang dan akademis.","Justru ini kesempatan menunjukkan kemampuan komunikasi."]},
{k:"wawancara",t:"mc",lv:2,q:"'Kamu lulusan TI, kenapa melamar Functional Consultant, bukan programmer?' Jawaban yang kuat:",o:["Hubungkan kekuatanmu: paham teknologi + senang menjelaskan dan bekerja dengan orang + pengalaman magang Odoo — sehingga bisa menjembatani klien dan developer","\"Karena saya tidak bisa coding.\"","\"Karena gajinya lebih besar.\"","\"Saya melamar semua posisi.\""],a:0,
 e:"Ubah 'bukan programmer terbaik' menjadi keunggulan: konsultan yang mengerti kode berdiskusi lebih efektif dengan developer dan tidak menjanjikan hal yang mustahil ke klien.",
 w:[null,"Merendahkan diri dan tidak akurat — kamu bisa coding.","Motivasi yang hanya soal uang mengkhawatirkan pewawancara.","Terkesan tidak punya arah."]},
{k:"wawancara",t:"mc",lv:2,q:"Di akhir interview: 'Ada pertanyaan untuk kami?' Pertanyaan yang meninggalkan kesan baik:",o:["\"Seperti apa keberhasilan di posisi ini dalam 3 bulan pertama?\" atau \"Bagaimana proses onboarding untuk karyawan baru?\"","\"Tidak ada.\"","\"Berapa hari cuti saya?\" sebagai satu-satunya pertanyaan","\"Perusahaan ini bergerak di bidang apa?\""],a:0,
 e:"Pertanyaan yang baik menunjukkan minat sungguh-sungguh dan membantumu menilai apakah tempat itu cocok. Pertanyaan tentang benefit wajar ditanyakan, biasanya di tahap selanjutnya.",
 w:[null,"Melewatkan kesempatan menunjukkan antusiasme.","Wajar ditanyakan, tapi jangan jadi satu-satunya pertanyaan di awal.","Menunjukkan kamu tidak riset tentang perusahaannya."]},
{k:"wawancara",t:"mc",lv:2,q:"Kamu ditanya hal teknis yang benar-benar tidak kamu ketahui. Respons terbaik:",o:["Jujur belum tahu, lalu jelaskan bagaimana kamu akan mencari tahu atau mendekati masalahnya dengan logika yang kamu punya","Mengarang jawaban dengan yakin","Diam lama sampai pewawancara berpindah topik","\"Itu tidak diajarkan di kampus saya.\""],a:0,
 e:"Pewawancara menilai cara berpikir, bukan hafalan. 'Saya belum pernah memakai window function, tapi setahu saya fungsinya mirip GROUP BY yang tidak menggabungkan baris. Saya akan cek dokumentasinya.' adalah jawaban yang bagus.",
 w:[null,"Mengarang mudah ketahuan dan merusak kepercayaan.","Diam tidak menunjukkan apa pun.","Menyalahkan kampus terkesan defensif."]},
{k:"wawancara",t:"mc",lv:2,q:"HR bertanya ekspektasi gaji. Pendekatan yang paling aman untuk fresh graduate:",o:["Riset kisaran gaji posisi itu di kota tersebut (laporan gaji, portal lowongan, teman), lalu sebut rentang yang realistis dan tetap terbuka berdiskusi","Sebut angka setinggi mungkin","\"Terserah perusahaan saja.\"","Menolak menjawab"],a:0,
 e:"Rentang berbasis riset terdengar profesional. 'Terserah' bisa membuatmu ditawar terlalu rendah. Kamu juga boleh bertanya balik kisaran yang sudah dianggarkan untuk posisi itu.",
 w:[null,"Angka tanpa dasar bisa langsung menggugurkanmu.","Berisiko mendapat tawaran jauh di bawah pasar.","Menolak menjawab terkesan tidak kooperatif."]},
{k:"wawancara",t:"mc",lv:1,q:"Setelah interview, langkah kecil yang meninggalkan kesan profesional:",o:["Mengirim email/pesan terima kasih singkat dalam 24 jam yang menyebut satu hal spesifik dari diskusi","Menelepon HR setiap hari","Tidak melakukan apa-apa","Langsung bertanya hasilnya keesokan harinya"],a:0,
 e:"Dua-tiga kalimat sudah cukup. Jika lewat dari tenggat yang dijanjikan, boleh follow-up sekali dengan sopan.",
 w:[null,"Terlalu memaksa.","Tidak salah, tapi kamu melewatkan kesempatan memberi kesan baik.","Terlalu cepat; tunggu sesuai tenggat yang disampaikan."]},
{k:"wawancara",t:"mc",lv:3,q:"Case interview konsultan: 'Klien mengeluh stok di sistem sering berbeda dengan stok fisik gudang.' Pendekatan yang paling dinilai baik:",o:["Ajukan pertanyaan klarifikasi (produk apa, sejak kapan, seberapa besar selisihnya), susun hipotesis penyebab (transaksi tidak diinput, salah satuan, penerimaan parsial), lalu usulkan cara mengecek dan solusinya","Langsung menyarankan ganti software","Menyalahkan staf gudang","Menjawab 'harus dicek dulu' tanpa rencana"],a:0,
 e:"Case interview menilai cara berpikir terstruktur: klarifikasi → hipotesis → cara membuktikan → solusi (proses + sistem + training). Berpikir dengan suara keras supaya pewawancara bisa mengikuti logikamu.",
 w:[null,"Solusi mahal sebelum tahu akar masalahnya.","Menyalahkan tanpa data tidak profesional.","Benar tapi terlalu dangkal; tunjukkan rencananya."]},
{k:"wawancara",t:"mc",lv:2,q:"Persiapan interview online yang paling sering dilupakan:",o:["Tes kamera, mikrofon, internet, dan aplikasi meeting 15 menit sebelumnya; pilih tempat tenang dengan cahaya dari depan","Memakai baju paling mahal","Membuka banyak tab hiburan","Bergabung tepat di menit mulai"],a:0,
 e:"Masalah teknis di 5 menit pertama merusak kesan dan membuat gugup. Siapkan juga CV, catatan poin STAR, dan segelas air di dekatmu.",
 w:[null,"Rapi sudah cukup.","Notifikasi bisa mengganggu.","Bergabung lebih awal memberi waktu mengatasi kendala teknis."]},
{k:"wawancara",t:"is",lv:1,q:"Huruf terakhir metode STAR adalah Result. Huruf ketiganya adalah ______ (bahasa Inggris)",a:["action"],
 h:"Apa yang KAMU lakukan.",
 e:"Action — bagian terpenting. Gunakan kata 'saya', bukan 'kami', supaya jelas kontribusimu sendiri."},

// ---- BAB 5: LinkedIn & strategi melamar ----
{k:"melamar",t:"mc",lv:1,q:"Headline LinkedIn yang paling kuat untukmu:",o:["\"Junior Data Analyst | SQL · Excel · Looker Studio | Odoo ERP\"","\"Fresh graduate looking for a job\"","\"Mahasiswa\"","\"Open to anything\""],a:0,
 e:"Headline muncul di hasil pencarian rekruter. Isi dengan peran yang dituju + skill kunci yang juga menjadi kata kunci pencarian. Sesuaikan jika fokusmu Functional Consultant, misalnya 'Odoo Functional Consultant | ERP · Sales & Inventory · SQL'.",
 w:[null,"Tidak memberi tahu apa yang bisa kamu lakukan.","Status kuliah sudah tidak relevan.","Terkesan tidak punya arah."]},
{k:"melamar",t:"mc",lv:2,q:"Cara menyesuaikan CV untuk tiap lowongan dengan efektif:",o:["Baca deskripsi pekerjaan, ambil skill/kata kunci yang memang kamu kuasai, lalu tonjolkan di ringkasan dan bullet pengalaman","Menyalin seluruh deskripsi pekerjaan ke CV","Memakai satu CV yang sama untuk semua","Menambah skill yang tidak kamu kuasai"],a:0,
 e:"Banyak perusahaan memakai ATS yang menyaring kata kunci, dan rekruter mencari kecocokan cepat. Menyesuaikan 10–15 menit per lamaran jauh lebih efektif daripada mengirim 100 CV yang sama.",
 w:[null,"Terlihat jelas sebagai salinan dan tidak jujur.","Peluang lolos lebih kecil.","Akan ketahuan saat tes atau interview."]},
{k:"melamar",t:"mc",lv:2,q:"Cara melacak 30+ lamaran agar tidak lupa follow-up:",o:["Spreadsheet: tanggal, perusahaan, posisi, link, status, kontak, tanggal follow-up — sekaligus latihan Excel (COUNTIFS per status, conditional formatting)","Mengandalkan ingatan","Screenshot setiap lowongan","Tidak perlu dilacak"],a:0,
 e:"Pelacak membuatmu bisa mengevaluasi diri: dari 30 lamaran, berapa yang dipanggil? Posisi apa yang paling sering merespons? Itulah analisis data untuk kariermu sendiri.",
 w:[null,"Mudah lupa setelah belasan lamaran.","Sulit dicari dan dianalisis.","Tanpa pelacak, kamu tidak bisa belajar dari hasilnya."]},
{k:"melamar",t:"mc",lv:2,q:"Pesan LinkedIn ke alumni yang bekerja sebagai Odoo Consultant. Mana yang paling mungkin dibalas?",o:["\"Halo Kak, saya [nama], alumni [kampus] 2026. Saya tertarik jadi Odoo Functional Consultant dan pernah magang sebagai Odoo developer. Boleh minta waktu 15 menit untuk bertanya pengalaman Kakak?\"","\"Kak, tolong masukkan saya kerja.\"","\"Halo\" saja","Mengirim CV tanpa pesan"],a:0,
 e:"Singkat, jelas siapa kamu, ada kesamaan (alumni), permintaan kecil dan spesifik. Dari obrolan seperti ini sering muncul informasi lowongan atau referral.",
 w:[null,"Permintaan besar kepada orang yang belum kenal membuatnya canggung.","Tidak jelas tujuannya, jarang dibalas.","Tanpa konteks, CV-mu tidak akan dibaca."]},
{k:"melamar",t:"mc",lv:2,q:"Lowongan mencantumkan 8 syarat dan kamu memenuhi 6 (termasuk semua syarat utama). Sebaiknya…",o:["Tetap melamar dan tonjolkan syarat yang kamu penuhi serta kesediaan belajar","Tidak melamar sampai memenuhi 100%","Berbohong memenuhi semua syarat","Mengirim email protes"],a:0,
 e:"Daftar syarat sering merupakan 'kandidat ideal'. Jika syarat intinya terpenuhi, lamar saja. Biarkan perusahaan yang memutuskan.",
 w:[null,"Kamu akan melewatkan banyak peluang.","Kebohongan mudah terbongkar saat tes.","Tidak profesional."]},
{k:"melamar",t:"mc",lv:1,q:"Tanda lowongan PENIPUAN yang paling jelas:",o:["Diminta membayar biaya pelatihan, seragam, tes, atau tiket sebelum diterima","Interview dilakukan online","Perusahaan punya situs resmi","Ada tes teknis"],a:0,
 e:"Perusahaan resmi tidak meminta uang dari pelamar. Waspadai juga gaji yang tidak masuk akal, email dari domain gratis yang mengaku perusahaan besar, dan desakan untuk segera mentransfer. Cek perusahaannya di situs resmi dan LinkedIn.",
 w:[null,"Interview online sangat umum.","Situs resmi justru tanda yang baik (tetap cek keasliannya).","Tes teknis adalah proses rekrutmen yang normal."]},
{k:"melamar",t:"mc",lv:2,q:"Cover letter/email lamaran yang efektif:",o:["3 paragraf singkat: posisi yang dilamar + kenapa perusahaan ini, 2–3 bukti relevan (magang Odoo, skripsi, proyek), penutup dan ajakan bertemu","Satu halaman penuh berisi ulang seluruh isi CV","Hanya \"Terlampir CV saya\"","Template yang sama persis untuk semua perusahaan"],a:0,
 e:"Rekruter membaca cepat. Satu kalimat yang menunjukkan kamu riset tentang perusahaan sudah membedakanmu dari pelamar lain.",
 w:[null,"Mengulang CV membuang waktu pembaca.","Melewatkan kesempatan menonjol.","Terlihat jelas tidak dipersonalisasi."]},
{k:"melamar",t:"mc",lv:2,q:"Strategi melamar yang lebih efektif untuk 1 bulan ke depan:",o:["5–10 lamaran berkualitas per minggu (CV disesuaikan) + 2–3 pesan networking + terus menambah portofolio","100 lamaran per hari dengan CV yang sama","Menunggu lowongan sempurna","Hanya melamar ke perusahaan besar"],a:0,
 e:"Kualitas, networking, dan bukti kemampuan (portofolio) saling menguatkan. Evaluasi tiap 2 minggu dengan spreadsheet pelacak: apa yang perlu diperbaiki?",
 w:[null,"Mengirim massal jarang berhasil dan cepat membuat lelah.","Lowongan sempurna jarang ada.","Perusahaan menengah, konsultan Odoo partner, dan startup sering lebih terbuka untuk fresh graduate."]},
{k:"melamar",t:"mc",lv:2,q:"Bagian LinkedIn yang paling membantu fresh graduate menunjukkan kemampuan nyata:",o:["Featured/Projects: link portofolio skripsi, dashboard Looker Studio, dan repo GitHub proyek SalesKu","Daftar 50 skill tanpa bukti","Foto profil dengan filter","Jumlah koneksi"],a:0,
 e:"Bukti mengalahkan klaim. Satu proyek yang bisa dibuka dan dijelaskan dengan baik lebih meyakinkan daripada daftar panjang skill.",
 w:[null,"Klaim tanpa bukti mudah diabaikan.","Foto profesional penting, tapi bukan bukti kemampuan.","Jumlah koneksi tidak menunjukkan kemampuan."]},
{k:"melamar",t:"is",lv:1,q:"Sistem yang menyaring CV secara otomatis berdasarkan kata kunci disebut ___ (singkatan 3 huruf)",a:["ats"],
 h:"Applicant Tracking System.",
 e:"ATS (Applicant Tracking System). CV ramah ATS: 1 kolom, teks bisa diseleksi, judul bagian standar (Pengalaman, Pendidikan, Skill), dan kata kunci yang sesuai lowongan."}
);

MATERI_KARIER.push(
{k:"wawancara",judul:"Wawancara: Cerita STAR & Studi Kasus",materi:`
<p>Interview adalah tes <b>komunikasi</b> dan <b>cara berpikir</b>. Keduanya bisa dilatih — dan itu kekuatanmu.</p>
<p><b>1. Metode STAR</b> untuk pertanyaan "Ceritakan saat kamu…":</p>
<pre><code>S — Situation : Tim sales merekap performa secara manual tiap minggu.
T — Task      : Saya ditugaskan membuat dashboard penjualan di Odoo.
A — Action    : Saya menanyakan kebutuhan ke tim sales, memilih metrik,
                lalu membangun dashboard per salesperson.
R — Result    : Performa tiap sales bisa dipantau tanpa rekap manual.
                [Tambahkan angka nyata jika ada.]</code></pre>
<p><b>2. Siapkan 5 cerita</b> yang bisa dipakai untuk banyak pertanyaan: proyek magang, skripsi, konflik/kendala tim, belajar hal baru dengan cepat, dan menjelaskan hal teknis ke orang awam.</p>
<p><b>3. Pertanyaan wajib</b> yang harus kamu latih dengan suara keras:</p>
<ul>
<li>Ceritakan tentang dirimu (1–2 menit: sekarang → pengalaman → kenapa posisi ini).</li>
<li>Jelaskan skripsimu ke orang non-teknis (60 detik).</li>
<li>Apa kelemahanmu? (nyata + langkah perbaikan).</li>
<li>Kenapa Consultant/Data Analyst, padahal lulusan TI?</li>
<li>Ada pertanyaan untuk kami?</li>
</ul>
<p><b>4. Case interview</b> (sering untuk Consultant): klarifikasi → hipotesis → cara mengecek → solusi. Berpikirlah dengan suara keras.</p>
<div class="catatan">💡 Tidak tahu jawabannya? Katakan jujur, lalu tunjukkan cara berpikirmu. Pewawancara menilai proses, bukan hafalan.</div>`},

{k:"melamar",judul:"LinkedIn & Strategi Melamar yang Terukur",materi:`
<p><b>LinkedIn dalam 30 menit:</b></p>
<ul>
<li><b>Headline</b>: peran yang dituju + skill kunci → <i>Junior Data Analyst | SQL · Excel · Looker Studio | Odoo ERP</i></li>
<li><b>About</b>: 3–4 kalimat — siapa kamu, apa yang sudah kamu bangun, apa yang kamu cari.</li>
<li><b>Featured</b>: portofolio skripsi, dashboard, dan repo GitHub SalesKu.</li>
<li><b>Open to Work</b>: isi jabatan yang dicari (8 kata kunci lowongan di bab sebelumnya).</li>
</ul>
<p><b>Ritme mingguan yang realistis:</b></p>
<pre><code>5–10 lamaran berkualitas (CV disesuaikan per lowongan)
2–3 pesan networking (alumni, praktisi Odoo/data)
1 peningkatan portofolio (bab baru, dashboard, atau proyek)</code></pre>
<p><b>Lacak dengan spreadsheet</b> — sekalian latihan Excel:</p>
<table class="mini-pivot"><tr><th>Tanggal</th><th>Perusahaan</th><th>Posisi</th><th>Status</th><th>Follow-up</th></tr>
<tr><td>03/11</td><td>PT A</td><td>Odoo Functional Consultant</td><td>Interview</td><td>10/11</td></tr></table>
<p>Pakai <code>COUNTIFS</code> per status dan conditional formatting untuk follow-up yang lewat tanggal.</p>
<div class="catatan">🚩 <b>Waspada penipuan:</b> perusahaan resmi tidak pernah meminta biaya pelatihan, seragam, tes, atau tiket. Cek situs resmi dan halaman LinkedIn perusahaannya.</div>`}
);
