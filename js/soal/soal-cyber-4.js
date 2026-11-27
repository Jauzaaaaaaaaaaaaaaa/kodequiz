// ============ CYBER SECURITY — tambahan 2x lipat (20 bab) + Pendalaman Lab Hitung Siber & Lab Hitung ERP ============
// Dimuat SETELAH soal-cyber-3.js dan soal-siber.js. Fokus defensif dan hacker etis (selalu dengan izin tertulis).
// Kunci di indeks 0 (opsi diacak saat tampil).
(function () {
  const M = (k, lv, q, o, e, kode) => SOAL_CYBER.push({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}) });
  const I = (k, lv, q, a, e) => SOAL_CYBER.push({ k, t: "is", lv, q, a, e });
  const dk = MAT => (k, html) => { const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  // ---- etika (+10) ----
  M("etika", 1, "Sebelum melakukan uji penetrasi, dokumen yang WAJIB ada:", ["Izin tertulis beserta ruang lingkup (scope) dan aturan main (rules of engagement)", "Daftar alat yang dipakai", "Akun media sosial target", "Tidak perlu apa pun bila tujuannya baik"], "Tanpa izin tertulis, tindakan menguji sistem orang lain bisa dipidana.");
  M("etika", 1, "Menemukan celah di situs sebuah toko tanpa diminta. Tindakan yang etis:", ["Berhenti, tidak mengeksploitasi lebih jauh, dan melaporkan lewat kanal resmi (security.txt atau program bug bounty)", "Mengunduh datanya sebagai bukti", "Memamerkan di media sosial", "Meminta bayaran sebelum memberi tahu"], "Pengungkapan bertanggung jawab (responsible disclosure).");
  M("etika", 2, "UU ITE di Indonesia melarang…", ["Mengakses sistem elektronik milik orang lain tanpa hak, termasuk menjebol pengaman", "Belajar keamanan siber", "Ikut CTF", "Memakai antivirus"], "Lingkungan latihan resmi (lab sendiri, CTF, platform latihan) aman dipakai.");
  M("etika", 2, "Program bug bounty berbeda dengan pentest kontrak karena…", ["Siapa pun boleh menguji sesuai aturan program yang dipublikasikan, dan dibayar per temuan sah", "Tidak ada aturan sama sekali", "Bebas menguji di luar scope", "Selalu gratis"], "Baca scope dan larangan (misalnya DoS, social engineering) sebelum mulai.");
  M("etika", 2, "Topi putih, abu-abu, dan hitam dibedakan oleh…", ["Izin dan niat: putih berizin, abu-abu tanpa izin walau niat baik, hitam berniat jahat", "Warna laptop", "Tingkat kemahiran", "Sistem operasi"], "Abu-abu tetap berisiko hukum.");
  M("etika", 2, "Tempat aman untuk berlatih teknik serangan:", ["Lab virtual sendiri, platform latihan resmi, dan kompetisi CTF", "Wi-Fi tetangga", "Situs kampus tanpa izin", "Server kantor tanpa izin"], "Belajar di lingkungan yang memang disediakan untuk diserang.");
  M("etika", 2, "Saat pentest berizin, kamu tak sengaja melihat data pribadi karyawan. Sikap yang benar:", ["Tidak menyalin/menyebarkan, catat seperlunya sebagai temuan, dan laporkan sesuai perjanjian kerahasiaan", "Menyimpan untuk portofolio", "Mengunggah sebagai bukti publik", "Mengabaikan dan tidak melapor"], "Kerahasiaan klien adalah kewajiban profesional.");
  M("etika", 3, "Cara berpikir penyerang (attacker mindset) dipakai pembela untuk…", ["Menemukan dan menutup jalan masuk sebelum dimanfaatkan orang jahat", "Menyerang balik", "Membuat malware", "Menghindari hukum"], "Ofensif untuk defensif.");
  I("etika", 1, "Singkatan kompetisi tangkap bendera keamanan: ____", ["ctf"], "Capture The Flag.");
  I("etika", 2, "Batas sistem yang boleh diuji dalam kontrak pentest: ____", ["scope", "ruang lingkup"], "Scope.");
  // ---- prinsip (+10) ----
  M("prinsip", 1, "Triad CIA dalam keamanan informasi:", ["Confidentiality, Integrity, Availability", "Control, Identity, Access", "Cyber, Internet, App", "Code, Input, Audit"], "Kerahasiaan, keutuhan, ketersediaan.");
  M("prinsip", 1, "Serangan DDoS terutama mengganggu aspek…", ["Availability (ketersediaan)", "Confidentiality", "Integrity", "Authentication"], "Layanan tidak bisa diakses pengguna sah.");
  M("prinsip", 2, "Data nilai siswa diubah diam-diam oleh orang tak berhak. Aspek yang dilanggar:", ["Integrity", "Availability", "Confidentiality saja", "Non-repudiation saja"], "Data tidak lagi utuh dan benar.");
  M("prinsip", 2, "Prinsip least privilege berarti…", ["Setiap akun hanya diberi hak minimum yang dibutuhkan pekerjaannya", "Semua orang admin", "Satu kata sandi untuk semua", "Tanpa akses sama sekali"], "Membatasi kerusakan bila akun dibobol.");
  M("prinsip", 2, "Defense in depth berarti…", ["Banyak lapis pengamanan sehingga satu lapis gagal tidak langsung fatal", "Satu firewall yang sangat kuat", "Menyembunyikan server", "Hanya antivirus"], "Contoh: MFA + patch + segmentasi + backup + monitoring.");
  M("prinsip", 2, "STRIDE adalah kerangka untuk…", ["Mengidentifikasi ancaman: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege", "Mengukur kecepatan", "Membuat kata sandi", "Mengenkripsi"], "Dipakai saat threat modeling.");
  M("prinsip", 2, "Attack surface (permukaan serangan) dikurangi dengan…", ["Mematikan layanan/port/fitur yang tidak dipakai", "Menambah aplikasi", "Membuka semua port", "Menambah admin"], "Lebih sedikit pintu, lebih sedikit celah.");
  M("prinsip", 3, "Security through obscurity (hanya mengandalkan kerahasiaan desain) dianggap lemah karena…", ["Begitu rahasianya terbongkar, tidak ada lagi perlindungan", "Terlalu mahal", "Dilarang hukum", "Membuat sistem lambat"], "Boleh sebagai tambahan, bukan satu-satunya.");
  I("prinsip", 1, "Huruf I pada triad CIA: ____", ["integrity"], "Integrity.");
  I("prinsip", 2, "Prinsip hak akses seminimal mungkin: least ____", ["privilege"], "Least privilege.");
  // ---- jaringan (+10) ----
  M("jaringan", 1, "Port standar HTTPS:", ["443", "80", "22", "3389"], "80 HTTP, 22 SSH, 3389 RDP.");
  M("jaringan", 1, "Urutan three-way handshake TCP:", ["SYN → SYN-ACK → ACK", "ACK → SYN → FIN", "SYN → ACK → RST", "HELLO → OK → DATA"], "Setelah itu koneksi terbuka.");
  M("jaringan", 2, "Beda TCP dan UDP:", ["TCP menjamin urutan dan pengiriman ulang; UDP tanpa jaminan tapi ringan (DNS, streaming)", "Sama saja", "UDP lebih aman", "TCP tanpa koneksi"], "Pilihan protokol memengaruhi cara memantau dan menyerangnya.");
  M("jaringan", 2, "Record DNS yang menunjukkan server email sebuah domain:", ["MX", "A", "CNAME", "PTR"], "A = alamat IPv4, AAAA = IPv6, CNAME = alias, TXT = teks (SPF, DMARC).");
  M("jaringan", 2, "Port 3306 dan 5432 biasanya milik…", ["MySQL dan PostgreSQL", "SSH dan FTP", "Email", "DNS"], "Database tidak seharusnya terbuka ke internet publik.");
  M("jaringan", 2, "Alamat 192.168.1.10 termasuk…", ["IP privat (tidak dirutekan langsung di internet)", "IP publik", "Alamat loopback", "Alamat multicast"], "Rentang privat: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.");
  M("jaringan", 2, "NAT di router rumah berfungsi…", ["Menerjemahkan banyak IP privat menjadi satu IP publik", "Mengenkripsi data", "Memblokir virus", "Mempercepat internet"], "NAT bukan firewall, walau memberi sedikit perlindungan.");
  M("jaringan", 3, "Melihat koneksi dan port yang sedang mendengarkan di server Linux milikmu:", ["ss -tulpn", "ls -la", "cat /etc/hosts", "ping localhost"], "Bagian dari audit: pastikan hanya layanan yang memang perlu yang terbuka.");
  I("jaringan", 1, "Port standar SSH: ____", ["22"], "22.");
  I("jaringan", 2, "Record DNS alamat IPv4: ____", ["a"], "A record.");
  // ---- linux (+10) ----
  M("linux", 1, "chmod 640 file.txt memberi hak…", ["Pemilik baca-tulis, grup baca, lainnya tidak ada", "Semua orang baca-tulis", "Pemilik saja eksekusi", "Tidak ada yang bisa baca"], "6 = rw-, 4 = r--, 0 = ---.");
  M("linux", 1, "Perintah menjalankan sebagai administrator di Linux:", ["sudo", "admin", "root-run", "su-do"], "Akses sudo sebaiknya dibatasi dan tercatat.");
  M("linux", 2, "File yang menyimpan hash kata sandi pengguna Linux:", ["/etc/shadow (hanya bisa dibaca root)", "/etc/passwd", "/home/user/.bashrc", "/var/www"], "/etc/passwd berisi daftar akun tanpa hash.");
  M("linux", 2, "Memantau log login SSH secara langsung (Debian/Ubuntu):", ["tail -f /var/log/auth.log", "cat /etc/hostname", "ls /tmp", "echo log"], "Banyak 'Failed password' dari satu IP = tanda brute force.");
  M("linux", 2, "Mencari baris yang mengandung 'Failed password' di log:", ["grep \"Failed password\" /var/log/auth.log", "find Failed", "ls | Failed", "cut Failed"], "Tambahkan | wc -l untuk menghitung.");
  M("linux", 2, "Login SSH root langsung sebaiknya…", ["Dimatikan (PermitRootLogin no) dan memakai kunci SSH untuk akun biasa", "Selalu diaktifkan", "Memakai kata sandi pendek", "Dibagikan ke tim"], "Mengurangi target brute force paling berharga.");
  M("linux", 2, "Melihat proses yang sedang berjalan:", ["ps aux (atau top/htop)", "ls -p", "cat proc", "run list"], "Proses asing bisa jadi tanda kompromi.");
  M("linux", 3, "Bit SUID pada file program berbahaya bila salah atur karena…", ["Program berjalan dengan hak pemilik file (sering root), sehingga bisa dipakai menaikkan hak akses", "Membuat file hilang", "Memperlambat sistem", "Tidak berbahaya"], "Audit berkala daftar program ber-SUID di server sendiri.");
  I("linux", 1, "Perintah mengubah hak akses file: ____", ["chmod"], "chmod.");
  I("linux", 2, "Angka chmod untuk rwx: ____", ["7"], "4 + 2 + 1.");
  // ---- akun (+11) ----
  M("akun", 1, "Penyimpanan kata sandi yang benar di database:", ["Hash lambat bergaram seperti bcrypt atau Argon2", "Teks biasa", "Base64", "MD5 tanpa garam"], "Base64 bukan enkripsi, MD5 terlalu cepat dipecahkan.");
  M("akun", 1, "Salt pada hash kata sandi berguna untuk…", ["Membuat hash setiap pengguna berbeda walau kata sandinya sama, sehingga tabel pelangi tidak berguna", "Mempercepat login", "Mengenkripsi email", "Menyembunyikan username"], "Salt disimpan bersama hash, tidak perlu rahasia.");
  M("akun", 2, "Credential stuffing adalah…", ["Mencoba pasangan email-kata sandi bocoran dari situs lain ke situs target", "Menebak kata sandi acak", "Mencuri cookie", "Membuat akun palsu"], "Kata sandi unik per situs + MFA menggagalkannya.");
  M("akun", 2, "MFA (autentikasi multi-faktor) menggabungkan…", ["Dua atau lebih faktor: sesuatu yang diketahui, dimiliki, dan melekat (biometrik)", "Dua kata sandi", "Email dan username", "Dua browser"], "Contoh: kata sandi + aplikasi authenticator.");
  M("akun", 2, "Faktor MFA yang paling rentan dibanding aplikasi authenticator atau kunci keamanan:", ["Kode SMS (bisa dicegat lewat SIM swap)", "Kunci FIDO2", "Passkey", "Aplikasi TOTP"], "SMS masih lebih baik daripada tanpa MFA.");
  M("akun", 2, "Passkey (FIDO2/WebAuthn) tahan phishing karena…", ["Kunci kriptografi terikat ke domain asli, jadi situs palsu tidak bisa memakainya", "Panjang 100 karakter", "Dikirim lewat SMS", "Disimpan di server"], "Tidak ada rahasia yang bisa diketik ke situs palsu.");
  M("akun", 2, "Pengelola kata sandi (password manager) disarankan karena…", ["Membuat dan menyimpan kata sandi panjang unik untuk setiap situs", "Membuat semua kata sandi sama", "Menghapus MFA", "Menyimpan kata sandi di catatan HP"], "Cukup mengingat satu kata sandi utama yang kuat.");
  M("akun", 2, "Pembatasan percobaan login (rate limiting/lockout) melindungi dari…", ["Brute force dan password spraying", "SQL injection", "XSS", "Ransomware"], "Tambahkan CAPTCHA dan pemantauan.");
  M("akun", 3, "Password spraying berbeda dengan brute force karena…", ["Mencoba satu kata sandi umum ke banyak akun, sehingga lolos dari lockout per akun", "Mencoba semua kombinasi ke satu akun", "Memakai bocoran", "Menebak username"], "Deteksi dengan memantau kegagalan lintas akun.");
  I("akun", 1, "Singkatan autentikasi multi-faktor: ____", ["mfa"], "MFA.");
  I("akun", 2, "Algoritma hash kata sandi modern pemenang kompetisi 2015: ____", ["argon2"], "Argon2.");
  // ---- sosial (+10) ----
  M("sosial", 1, "Ciri email phishing yang umum:", ["Mendesak, meminta login/data lewat tautan, dan alamat pengirim/domain sedikit berbeda", "Dari rekan kerja dengan isi biasa", "Tanpa tautan", "Bahasa sangat formal"], "Periksa domain tautan sebelum mengklik.");
  M("sosial", 2, "Spear phishing berbeda dari phishing biasa karena…", ["Ditargetkan ke orang tertentu dengan informasi pribadi yang membuatnya meyakinkan", "Dikirim ke jutaan orang", "Lewat telepon", "Tanpa tujuan"], "Informasi dari media sosial sering dipakai.");
  M("sosial", 2, "Vishing adalah…", ["Penipuan lewat panggilan suara (mengaku bank/CS)", "Lewat SMS", "Lewat email", "Lewat USB"], "Smishing = lewat SMS.");
  M("sosial", 2, "Business Email Compromise (BEC) biasanya…", ["Menyamar sebagai atasan/vendor meminta transfer ke rekening baru", "Menyebar virus", "Menyerang Wi-Fi", "Mencuri laptop"], "Verifikasi perubahan rekening lewat kanal lain (telepon nomor resmi).");
  M("sosial", 2, "Pretexting adalah…", ["Membuat cerita palsu (dalih) agar korban memberi informasi atau akses", "Mengirim virus", "Menebak kata sandi", "Memindai port"], "Contoh: pura-pura teknisi IT minta kode OTP.");
  M("sosial", 2, "Seseorang ikut masuk ruang server di belakang karyawan tanpa kartu akses. Ini disebut…", ["Tailgating/piggybacking", "Phishing", "Spoofing", "Sniffing"], "Keamanan fisik juga bagian keamanan siber.");
  M("sosial", 2, "Langkah terbaik setelah terlanjur memasukkan kata sandi di situs palsu:", ["Segera ganti kata sandi (dan di situs lain yang sama), aktifkan MFA, laporkan ke tim keamanan", "Diam saja", "Hapus email", "Matikan komputer selamanya"], "Kecepatan melapor mengurangi kerusakan.");
  M("sosial", 3, "Pertahanan paling efektif terhadap rekayasa sosial di organisasi:", ["Pelatihan rutin, simulasi phishing, budaya melapor tanpa disalahkan, dan kontrol teknis (MFA, filter email)", "Melarang email", "Hanya antivirus", "Hukuman berat untuk yang tertipu"], "Manusia adalah lapis pertahanan bila dilatih.");
  I("sosial", 1, "Penipuan lewat SMS: ____ing", ["smish"], "Smishing.");
  I("sosial", 2, "Standar DNS untuk mencegah domain dipalsukan di email (selain SPF, DKIM): ____", ["dmarc"], "DMARC.");
  // ---- kripto (+10) ----
  M("kripto", 1, "Enkripsi simetris berarti…", ["Kunci yang sama dipakai untuk mengenkripsi dan mendekripsi (contoh AES)", "Dua kunci berbeda", "Tanpa kunci", "Hanya hash"], "Cepat, tapi kuncinya harus dibagikan dengan aman.");
  M("kripto", 1, "Beda hash dan enkripsi:", ["Hash satu arah (tidak bisa dikembalikan); enkripsi bisa didekripsi dengan kunci", "Sama saja", "Hash bisa dibalik", "Enkripsi satu arah"], "Hash untuk integritas/kata sandi, enkripsi untuk kerahasiaan.");
  M("kripto", 2, "Algoritma hash yang TIDAK lagi aman untuk keamanan:", ["MD5 dan SHA-1", "SHA-256", "SHA-3", "BLAKE2"], "Sudah ditemukan tabrakan (collision) praktis.");
  M("kripto", 2, "HMAC berguna untuk…", ["Membuktikan pesan tidak diubah DAN berasal dari pihak yang memegang kunci rahasia", "Mengenkripsi file", "Membuat kata sandi", "Mempercepat jaringan"], "Dipakai untuk tanda tangan webhook API.");
  M("kripto", 2, "Mode AES-ECB dihindari karena…", ["Blok yang sama menghasilkan ciphertext sama, sehingga pola data terlihat", "Terlalu lambat", "Tidak bisa didekripsi", "Kuncinya pendek"], "Pakai AES-GCM (sekaligus autentikasi).");
  M("kripto", 2, "Panjang kunci AES yang umum dan aman:", ["128 atau 256 bit", "8 bit", "40 bit", "1 bit"], "AES-256 sering dipakai untuk data sensitif.");
  M("kripto", 2, "Nonce/IV yang dipakai ulang dengan kunci sama pada AES-GCM berbahaya karena…", ["Bisa membocorkan isi pesan dan merusak autentikasi", "Membuat lambat", "Tidak berpengaruh", "Membuat file besar"], "Nonce harus unik per enkripsi.");
  M("kripto", 3, "Kenapa 'membuat algoritma enkripsi sendiri' dilarang dalam praktik?", ["Algoritma yang belum diuji para ahli hampir pasti punya kelemahan; pakai pustaka standar", "Terlalu cepat", "Dilarang undang-undang", "Kode jadi pendek"], "Don't roll your own crypto.");
  I("kripto", 1, "Algoritma enkripsi simetris standar saat ini: ____", ["aes"], "AES.");
  I("kripto", 2, "Kode autentikasi pesan berbasis hash: ____", ["hmac"], "HMAC.");
  // ---- pki (+11) ----
  M("pki", 1, "Dalam kriptografi kunci publik, untuk mengirim pesan rahasia ke Ani dipakai…", ["Kunci publik Ani untuk mengenkripsi; hanya kunci privat Ani yang bisa membuka", "Kunci privat Ani", "Kunci publik pengirim", "Kunci bersama"], "Kunci publik boleh disebar, kunci privat dirahasiakan.");
  M("pki", 1, "Tanda tangan digital dibuat dengan…", ["Kunci privat penanda tangan; diverifikasi dengan kunci publiknya", "Kunci publik penerima", "Hash saja tanpa kunci", "Kata sandi"], "Membuktikan asal dan keutuhan dokumen.");
  M("pki", 2, "Sertifikat TLS sebuah situs ditandatangani oleh…", ["Certificate Authority (CA) yang dipercaya browser", "Pemilik situs sendiri selalu", "Pengunjung", "ISP"], "Self-signed tidak dipercaya browser secara bawaan.");
  M("pki", 2, "Gembok di browser berarti…", ["Koneksi terenkripsi ke domain yang sertifikatnya sah, BUKAN jaminan situsnya jujur", "Situs pasti aman dan bukan penipuan", "Situs milik pemerintah", "Tidak ada virus"], "Situs phishing pun bisa punya sertifikat sah.");
  M("pki", 2, "Header HSTS memaksa browser…", ["Selalu memakai HTTPS untuk domain itu", "Memblokir iklan", "Menghapus cookie", "Memakai HTTP"], "Mencegah serangan penurunan ke HTTP.");
  M("pki", 2, "Versi TLS yang disarankan saat ini:", ["TLS 1.2 dan 1.3", "SSL 3.0", "TLS 1.0", "SSL 2.0"], "Versi lama punya kelemahan dan sudah dinonaktifkan browser.");
  M("pki", 2, "Rantai sertifikat (certificate chain) berarti…", ["Sertifikat situs → CA perantara → CA akar yang tersimpan di browser/OS", "Banyak situs berbagi sertifikat", "Sertifikat kedaluwarsa", "Kunci publik ganda"], "Server harus mengirim sertifikat perantara juga.");
  M("pki", 2, "Sertifikat kedaluwarsa menyebabkan…", ["Browser menampilkan peringatan keras dan banyak pengguna batal masuk", "Situs lebih cepat", "Tidak ada efek", "Enkripsi lebih kuat"], "Otomasi perpanjangan (misalnya Let's Encrypt).");
  M("pki", 3, "Perfect forward secrecy (PFS) memastikan…", ["Rekaman lalu lintas lama tidak bisa dibuka walau kunci privat server bocor di kemudian hari", "Sertifikat tidak kedaluwarsa", "Kata sandi aman", "Tanpa enkripsi"], "Memakai pertukaran kunci ephemeral (ECDHE).");
  I("pki", 1, "Singkatan otoritas penerbit sertifikat: ____", ["ca"], "Certificate Authority.");
  I("pki", 2, "Header yang memaksa HTTPS: ____", ["hsts"], "HTTP Strict Transport Security.");
  // ---- webdasar (+10) ----
  M("webdasar", 1, "Same-Origin Policy membatasi…", ["Skrip dari satu origin membaca data dari origin lain", "Ukuran halaman", "Jumlah cookie", "Kecepatan"], "Origin = skema + domain + port.");
  M("webdasar", 2, "https://toko.id dan https://api.toko.id adalah…", ["Origin berbeda (subdomain berbeda)", "Origin sama", "Satu situs pasti", "Tidak berhubungan sama sekali"], "Perlu CORS bila saling memanggil dari browser.");
  M("webdasar", 2, "Atribut cookie HttpOnly mencegah…", ["JavaScript membaca cookie (mengurangi pencurian sesi lewat XSS)", "Cookie dikirim lewat HTTPS", "Cookie kedaluwarsa", "Cookie dibuat"], "Secure = hanya lewat HTTPS.");
  M("webdasar", 2, "Atribut SameSite=Lax/Strict pada cookie membantu mencegah…", ["CSRF (permintaan lintas situs membawa cookie)", "XSS", "SQL injection", "DDoS"], "Bawaan banyak browser kini Lax.");
  M("webdasar", 2, "Content-Security-Policy (CSP) berfungsi…", ["Membatasi sumber skrip/gambar yang boleh dimuat, mengurangi dampak XSS", "Mengenkripsi halaman", "Mempercepat situs", "Menyimpan cookie"], "Contoh: script-src 'self'.");
  M("webdasar", 2, "Header frame-ancestors 'none' (atau X-Frame-Options: DENY) mencegah…", ["Halaman dimuat di iframe situs lain (clickjacking)", "Gambar dimuat", "Login", "Cookie"], "Penyerang tidak bisa menumpuk tombol tersembunyi di atas halamanmu.");
  M("webdasar", 2, "CORS yang dikonfigurasi Access-Control-Allow-Origin: * bersama kredensial berisiko karena…", ["Situs mana pun bisa membaca respons berisi data pengguna (browser modern menolak kombinasi ini, tapi konfigurasi serupa yang memantulkan origin tetap berbahaya)", "Membuat lambat", "Tidak berpengaruh", "Mematikan HTTPS"], "Daftarkan origin tepercaya secara eksplisit.");
  M("webdasar", 3, "Informasi apa yang sebaiknya TIDAK ditampilkan pada pesan error produksi?", ["Stack trace, versi framework, query SQL, dan path server", "Pesan ramah untuk pengguna", "Kode error umum", "Tautan bantuan"], "Detail teknis membantu penyerang; catat di log internal.");
  I("webdasar", 1, "Atribut cookie agar tidak bisa dibaca JavaScript: Http____", ["only"], "HttpOnly.");
  I("webdasar", 2, "Singkatan kebijakan sumber konten: ____", ["csp"], "Content Security Policy.");
  // ---- injeksi (+11) ----
  M("injeksi", 1, "Pencegahan utama SQL injection:", ["Query berparameter (prepared statement) / ORM, bukan menyambung teks input ke SQL", "Menghapus tanda kutip manual", "Menyembunyikan form", "Memakai HTTPS"], "Data dan perintah dipisahkan.");
  M("injeksi", 2, "Kode ini rentan karena…", ["Input pengguna langsung disambung ke perintah SQL", "Memakai Python", "Memakai SELECT", "Tidak rentan"], "Perbaikan: cur.execute(\"SELECT * FROM user WHERE email = ?\", (email,)).", "q = \"SELECT * FROM user WHERE email = '\" + email + \"'\"\ncur.execute(q)"),
  M("injeksi", 2, "Pencegahan utama XSS:", ["Encode/escape output sesuai konteks (HTML, atribut, JS) dan CSP", "Validasi panjang saja", "HTTPS", "Firewall saja"], "Framework modern meng-escape otomatis; hati-hati dengan innerHTML/|safe.");
  M("injeksi", 2, "Stored XSS berbahaya karena…", ["Skrip tersimpan di server dan dijalankan di browser setiap pengunjung yang membuka halaman", "Hanya mengenai penyerang", "Tidak bisa dicegah", "Hanya di localhost"], "Reflected XSS butuh korban membuka tautan khusus.");
  M("injeksi", 2, "Command injection dicegah dengan…", ["Tidak memanggil shell dengan input pengguna; pakai API/fungsi khusus dan daftar izin (allowlist)", "Menambah sleep", "Memakai sudo", "Menyembunyikan tombol"], "Contoh aman Python: subprocess.run([\"ping\", \"-c\", \"1\", host]) tanpa shell=True plus validasi host.");
  M("injeksi", 2, "Validasi input dengan allowlist lebih kuat dari blocklist karena…", ["Hanya menerima yang jelas sah; blocklist mudah dilewati dengan variasi", "Lebih pendek", "Blocklist dilarang", "Tidak ada bedanya"], "Contoh: kode pos hanya 5 digit angka.");
  M("injeksi", 2, "Akun database aplikasi web sebaiknya…", ["Hanya punya hak yang diperlukan (bukan superuser), sehingga dampak injeksi terbatas", "Memakai root", "Tanpa kata sandi", "Dibagikan ke semua aplikasi"], "Least privilege di lapisan database.");
  M("injeksi", 2, "Template injection (SSTI) terjadi saat…", ["Input pengguna dimasukkan sebagai bagian template yang dieksekusi server", "Template terlalu besar", "CSS salah", "Gambar hilang"], "Isi template dari data, jangan menyusun template dari input.");
  M("injeksi", 3, "Sanitasi HTML untuk komentar berformat (misalnya bold, link) sebaiknya memakai…", ["Pustaka sanitasi teruji dengan daftar tag/atribut yang diizinkan", "Regex buatan sendiri", "Menghapus kata 'script' saja", "Tidak perlu"], "Regex buatan sendiri mudah dilewati.");
  I("injeksi", 1, "Singkatan serangan skrip lintas situs: ____", ["xss"], "Cross-Site Scripting.");
  I("injeksi", 2, "Teknik aman query: prepared ____", ["statement"], "Prepared statement.");
  // ---- aksesweb (+12) ----
  M("aksesweb", 1, "IDOR (Insecure Direct Object Reference) contohnya:", ["Mengganti /invoice?id=101 menjadi 102 lalu bisa melihat invoice orang lain", "Lupa kata sandi", "Situs lambat", "Gambar rusak"], "Server harus selalu mengecek kepemilikan data.");
  M("aksesweb", 2, "Pencegahan IDOR yang benar:", ["Cek di server bahwa pengguna yang login berhak atas objek yang diminta", "Menyembunyikan id di HTML", "Memakai id acak saja", "Memakai POST"], "ID acak mempersulit tebakan tapi bukan kontrol akses.");
  M("aksesweb", 2, "CSRF memanfaatkan…", ["Browser yang otomatis membawa cookie sesi saat situs lain memicu permintaan ke situs target", "Kata sandi lemah", "SQL", "Port terbuka"], "Cegah dengan token CSRF dan SameSite cookie.");
  M("aksesweb", 2, "SSRF terjadi saat…", ["Server diminta mengambil URL dari input pengguna dan bisa diarahkan ke layanan internal", "Browser mengambil gambar", "Pengguna lupa logout", "DNS lambat"], "Batasi tujuan dengan allowlist dan blokir alamat internal/metadata cloud.");
  M("aksesweb", 2, "Kontrol akses yang hanya menyembunyikan tombol 'Hapus' di antarmuka tanpa cek di server:", ["Tidak aman, karena permintaan bisa dikirim langsung ke API", "Cukup aman", "Wajib", "Membuat lambat"], "Otorisasi selalu dicek di server.");
  M("aksesweb", 2, "Celah logika bisnis contohnya:", ["Mengubah jumlah barang menjadi negatif sehingga total belanja berkurang", "SQL injection", "XSS", "Port terbuka"], "Validasi aturan bisnis di server.");
  M("aksesweb", 2, "Race condition pada penukaran voucher sekali pakai dicegah dengan…", ["Operasi atomik/kunci database sehingga dua permintaan bersamaan tidak sama-sama lolos", "Tombol dinonaktifkan di browser saja", "Captcha", "HTTPS"], "Penyerang bisa mengirim banyak permintaan paralel.");
  M("aksesweb", 2, "Mass assignment terjadi saat…", ["Server menerima semua field dari request (misalnya is_admin=true) dan menyimpannya ke model", "Banyak pengguna login", "Data terlalu besar", "Form terlalu panjang"], "Tentukan field yang boleh diubah secara eksplisit.");
  M("aksesweb", 2, "Open redirect (redirect ke URL dari parameter tanpa cek) berbahaya karena…", ["Bisa dipakai phishing dengan tautan yang terlihat berasal dari domain tepercaya", "Membuat lambat", "Menghapus data", "Tidak berbahaya"], "Batasi tujuan redirect ke path internal.");
  M("aksesweb", 3, "JWT yang diterima server tanpa memverifikasi tanda tangan berisiko…", ["Penyerang bisa mengubah isi token (misalnya role) dan tetap diterima", "Token kedaluwarsa", "Lambat", "Tidak berisiko"], "Selalu verifikasi tanda tangan dan algoritma yang diharapkan.");
  I("aksesweb", 1, "Singkatan pemalsuan permintaan lintas situs: ____", ["csrf"], "Cross-Site Request Forgery.");
  I("aksesweb", 2, "Singkatan pemalsuan permintaan dari sisi server: ____", ["ssrf"], "Server-Side Request Forgery.");
  // ---- sistem (+11) ----
  M("sistem", 1, "Kenapa pembaruan (patch) sistem operasi penting?", ["Menutup celah keamanan yang sudah diketahui publik", "Mengganti warna", "Menambah iklan", "Tidak penting"], "Banyak serangan memakai celah lama yang belum di-patch.");
  M("sistem", 2, "Buffer overflow terjadi saat…", ["Program menulis data melebihi ukuran memori yang disediakan sehingga menimpa data lain", "Disk penuh", "Internet lambat", "Kata sandi lemah"], "Umum di bahasa tanpa pengecekan batas (C/C++).");
  M("sistem", 2, "ASLR (Address Space Layout Randomization) mempersulit eksploitasi dengan…", ["Mengacak lokasi memori program setiap dijalankan", "Mengenkripsi disk", "Memblokir port", "Mematikan program"], "Dipadukan dengan DEP/NX.");
  M("sistem", 2, "DEP/NX mencegah…", ["Eksekusi kode dari area memori data (stack/heap)", "Membaca file", "Login", "Jaringan"], "Penyerang tidak bisa langsung menjalankan kode sisipan.");
  M("sistem", 2, "Sandbox pada browser berarti…", ["Halaman web dijalankan terisolasi sehingga sulit menyentuh sistem operasi", "Browser lebih cepat", "Tidak ada iklan", "Tanpa JavaScript"], "Isolasi membatasi dampak.");
  M("sistem", 2, "Container (Docker) bukan batas keamanan sekuat mesin virtual karena…", ["Berbagi kernel dengan host", "Selalu tanpa jaringan", "Tidak bisa diperbarui", "Lebih berat"], "Jalankan container tanpa root dan batasi hak.");
  M("sistem", 2, "Bahasa yang aman memori (memory-safe) seperti Rust, Go, Python mengurangi…", ["Kelas bug memori seperti buffer overflow dan use-after-free", "Semua bug", "Bug logika", "Phishing"], "Banyak lembaga mendorong peralihan ke bahasa aman memori.");
  M("sistem", 2, "Akun pengguna harian di laptop sebaiknya…", ["Akun standar, bukan administrator", "Selalu administrator", "Tanpa kata sandi", "Dibagikan"], "Malware yang berjalan mewarisi hak pengguna.");
  M("sistem", 3, "Privilege escalation adalah…", ["Penyerang menaikkan hak dari pengguna biasa menjadi admin/root", "Mengganti kata sandi", "Menghapus akun", "Mempercepat sistem"], "Dicegah dengan patch, konfigurasi benar, dan least privilege.");
  I("sistem", 1, "Pembaruan perbaikan celah perangkat lunak: ____", ["patch"], "Patch.");
  I("sistem", 2, "Singkatan pengacakan tata letak memori: ____", ["aslr"], "ASLR.");
  // ---- netsec (+11) ----
  M("netsec", 1, "Firewall berfungsi…", ["Mengizinkan atau memblokir lalu lintas jaringan berdasarkan aturan", "Menghapus virus di file", "Mempercepat Wi-Fi", "Mengenkripsi disk"], "Aturan bawaan sebaiknya 'tolak kecuali diizinkan'.");
  M("netsec", 1, "Standar keamanan Wi-Fi yang disarankan saat ini:", ["WPA3 (atau minimal WPA2 dengan kata sandi kuat)", "WEP", "Tanpa kata sandi", "WPA1"], "WEP sudah lama bisa dipecahkan.");
  M("netsec", 2, "Segmentasi jaringan berguna untuk…", ["Membatasi penyebaran serangan antar bagian (misalnya kasir terpisah dari Wi-Fi tamu)", "Mempercepat internet", "Menghemat kabel", "Menghapus virus"], "Lateral movement menjadi sulit.");
  M("netsec", 2, "Beda IDS dan IPS:", ["IDS mendeteksi dan memberi peringatan; IPS juga bisa memblokir otomatis", "Sama saja", "IDS memblokir", "IPS hanya mencatat"], "Contoh: Suricata, Snort.");
  M("netsec", 2, "VPN berguna untuk…", ["Membuat terowongan terenkripsi ke jaringan tepercaya (misalnya kantor) di atas jaringan publik", "Menjamin anonim total", "Menghapus malware", "Mempercepat semua situs"], "VPN tidak membuat aman dari phishing.");
  M("netsec", 2, "Pemindaian port (nmap) hanya boleh dilakukan pada…", ["Sistem milik sendiri atau yang ada izin tertulisnya", "Server mana pun di internet", "Wi-Fi umum", "Situs pemerintah"], "Pemindaian tanpa izin bisa dianggap persiapan serangan.");
  M("netsec", 2, "Serangan man-in-the-middle di Wi-Fi publik dikurangi dengan…", ["HTTPS di semua situs, HSTS, dan VPN tepercaya", "Mematikan layar", "Memakai Bluetooth", "Menghapus cookie setiap menit"], "Hindari login ke layanan penting di Wi-Fi terbuka tanpa perlindungan.");
  M("netsec", 2, "Zero Trust berarti…", ["Tidak otomatis memercayai perangkat/pengguna karena berada di dalam jaringan; setiap akses diverifikasi", "Tidak ada keamanan", "Semua orang dipercaya", "Tanpa login"], "Identitas, perangkat, dan konteks dicek terus.");
  M("netsec", 3, "Router rumah/kantor sebaiknya…", ["Ganti kata sandi admin bawaan, perbarui firmware, matikan WPS dan administrasi jarak jauh", "Biarkan bawaan pabrik", "Buka semua port", "Tanpa kata sandi Wi-Fi"], "Perangkat bawaan pabrik sering jadi pintu masuk botnet.");
  I("netsec", 1, "Perangkat penyaring lalu lintas jaringan: fire____", ["wall"], "Firewall.");
  I("netsec", 2, "Model keamanan 'jangan percaya, selalu verifikasi': zero ____", ["trust"], "Zero Trust.");
  // ---- pentest (+12) ----
  M("pentest", 1, "Urutan umum tahap pentest:", ["Perencanaan & izin → pengintaian → pemindaian → eksploitasi terbatas → pelaporan & perbaikan", "Eksploitasi → izin", "Laporan → pemindaian", "Pemindaian tanpa izin"], "Pelaporan adalah produk utama pentest.");
  M("pentest", 1, "CVE adalah…", ["Nomor identitas publik untuk sebuah kerentanan yang diketahui (misalnya CVE-2021-44228)", "Jenis virus", "Alat pemindai", "Firewall"], "Database CVE membantu semua pihak membicarakan celah yang sama.");
  M("pentest", 2, "Skor CVSS 9,8 masuk kategori…", ["Critical (9,0–10,0)", "High", "Medium", "Low"], "7,0–8,9 High; 4,0–6,9 Medium; 0,1–3,9 Low.");
  M("pentest", 2, "Prioritas perbaikan sebaiknya mempertimbangkan…", ["Skor CVSS, apakah celah sedang dieksploitasi aktif, dan nilai aset yang terdampak", "Urutan abjad", "Siapa yang menemukan", "Tanggal laporan saja"], "Celah sedang ringan di server internet bisa lebih mendesak dari kritis di lab terisolasi.");
  M("pentest", 2, "Bagian laporan pentest untuk manajemen non-teknis:", ["Executive summary: risiko utama dan dampak bisnis dengan bahasa sederhana", "Daftar perintah yang diketik", "Log lengkap", "Kode exploit"], "Bagian teknis berisi langkah reproduksi dan rekomendasi.");
  M("pentest", 2, "Setiap temuan di laporan sebaiknya memuat…", ["Deskripsi, bukti, dampak, tingkat risiko, langkah reproduksi, dan rekomendasi perbaikan", "Hanya judul", "Nama alat saja", "Opini pribadi"], "Tim pengembang harus bisa memperbaiki tanpa menebak.");
  M("pentest", 2, "Black-box, grey-box, white-box pentest dibedakan oleh…", ["Seberapa banyak informasi internal (kode, akun, diagram) yang diberikan ke penguji", "Warna laporan", "Jumlah penguji", "Waktu pengujian"], "White-box paling efisien menemukan celah.");
  M("pentest", 2, "OWASP Top 10 adalah…", ["Daftar kategori risiko keamanan aplikasi web yang paling penting", "Daftar hacker terkenal", "Alat pemindai", "Undang-undang"], "Contoh kategori: Broken Access Control, Injection.");
  M("pentest", 2, "Retest setelah perbaikan berguna untuk…", ["Memastikan celah benar-benar tertutup tanpa membuka celah baru", "Menambah biaya", "Mengulang semua pentest", "Tidak berguna"], "Laporan akhir mencatat status setiap temuan.");
  M("pentest", 3, "Selama pentest, layanan produksi klien tiba-tiba melambat karena pengujianmu. Langkah benar:", ["Hentikan aktivitas pemicu dan segera hubungi kontak darurat klien sesuai rules of engagement", "Lanjutkan saja", "Diam dan tunggu", "Hapus log"], "Komunikasi jujur dan cepat adalah bagian etika profesional.");
  I("pentest", 1, "Sistem skor tingkat keparahan kerentanan: ____", ["cvss"], "Common Vulnerability Scoring System.");
  I("pentest", 2, "Organisasi penerbit daftar risiko web Top 10: ____", ["owasp"], "OWASP.");
  // ---- malware (+11) ----
  M("malware", 1, "Ransomware adalah malware yang…", ["Mengenkripsi data korban lalu meminta tebusan", "Hanya menampilkan iklan", "Mempercepat komputer", "Menghapus antivirus saja"], "Banyak kelompok juga mencuri data dulu (pemerasan ganda).");
  M("malware", 1, "Beda virus dan worm:", ["Virus menumpang file dan butuh dijalankan; worm menyebar sendiri lewat jaringan", "Sama saja", "Worm butuh diklik", "Virus menyebar sendiri lewat jaringan"], "Trojan = menyamar sebagai program berguna.");
  M("malware", 2, "Strategi backup 3-2-1 berarti…", ["3 salinan data, di 2 media berbeda, 1 salinan di luar lokasi/offline", "3 hari sekali", "2 hard disk saja", "1 salinan cukup"], "Backup offline/immutable menyelamatkan dari ransomware.");
  M("malware", 2, "Backup yang belum pernah diuji pemulihannya…", ["Belum terbukti bisa dipakai saat darurat", "Pasti aman", "Tidak perlu diuji", "Lebih cepat"], "Uji restore berkala.");
  M("malware", 2, "MITRE ATT&CK adalah…", ["Kumpulan taktik dan teknik penyerang yang diamati di dunia nyata", "Antivirus", "Firewall", "Undang-undang"], "Dipakai untuk memetakan deteksi.");
  M("malware", 2, "IOC (Indicator of Compromise) contohnya:", ["Hash file berbahaya, IP/domain server kendali, nama proses mencurigakan", "Logo perusahaan", "Jumlah karyawan", "Harga saham"], "Dibagikan antartim untuk deteksi.");
  M("malware", 2, "Lampiran email .docm yang meminta 'Enable Content' berbahaya karena…", ["Makro bisa menjalankan kode untuk mengunduh malware", "Ukurannya besar", "Formatnya lama", "Tidak berbahaya"], "Banyak organisasi memblokir makro dari internet.");
  M("malware", 2, "EDR (Endpoint Detection and Response) berbeda dari antivirus biasa karena…", ["Memantau perilaku perangkat secara terus-menerus dan membantu investigasi/isolasi", "Hanya cocok hash", "Tidak butuh pembaruan", "Hanya untuk server"], "Mendeteksi teknik, bukan hanya file dikenal.");
  M("malware", 3, "Organisasi terkena ransomware. Langkah pertama yang tepat:", ["Isolasi perangkat terdampak dari jaringan, aktifkan rencana respons insiden, jangan langsung matikan bukti", "Langsung bayar tebusan", "Format semua komputer tanpa catatan", "Abaikan"], "Membayar tidak menjamin data kembali.");
  I("malware", 1, "Malware penyandera data: ____ware", ["ransom"], "Ransomware.");
  I("malware", 2, "Singkatan indikator kompromi: ____", ["ioc"], "Indicator of Compromise.");
  // ---- soc (+12) ----
  M("soc", 1, "SIEM berfungsi…", ["Mengumpulkan, menormalisasi, dan mengkorelasi log dari banyak sumber untuk mendeteksi ancaman", "Mengenkripsi email", "Membuat website", "Menghapus virus"], "Contoh: Wazuh, Splunk, Elastic.");
  M("soc", 1, "Analis SOC tingkat 1 biasanya bertugas…", ["Memilah (triage) alert, menyingkirkan false positive, dan meneruskan insiden nyata", "Menulis malware", "Menjual produk", "Membangun jaringan"], "Pintu masuk karier keamanan yang umum.");
  M("soc", 2, "Pola log ini paling mungkin menunjukkan…", ["Brute force yang akhirnya berhasil login", "Login normal", "Server mati", "Pembaruan sistem"], "Rangkaian gagal lalu sukses dari IP yang sama adalah sinyal klasik.", "02:14:01 FAIL admin 203.0.113.66\n02:14:03 FAIL admin 203.0.113.66\n02:14:05 FAIL admin 203.0.113.66\n02:14:08 SUCCESS admin 203.0.113.66"),
  M("soc", 2, "False positive adalah…", ["Alert yang menandai bahaya padahal aktivitasnya sah", "Serangan yang lolos", "Log hilang", "Alert yang benar"], "Terlalu banyak false positive menyebabkan alert fatigue.");
  M("soc", 2, "False negative lebih berbahaya karena…", ["Serangan nyata tidak terdeteksi", "Membuat alert banyak", "Membuat log besar", "Tidak berbahaya"], "Seimbangkan sensitivitas aturan deteksi.");
  M("soc", 2, "MTTD dan MTTR mengukur…", ["Rata-rata waktu mendeteksi dan waktu merespons/memulihkan insiden", "Jumlah alert", "Jumlah analis", "Biaya"], "Makin kecil makin baik.");
  M("soc", 2, "Sumber log yang penting untuk SOC:", ["Login/autentikasi, firewall, proxy/DNS, EDR, server aplikasi, cloud", "Hanya foto", "Hanya email pemasaran", "Hanya printer"], "Tanpa log, insiden tidak bisa diselidiki.");
  M("soc", 2, "Sinkronisasi waktu (NTP) di semua server penting bagi SOC karena…", ["Urutan kejadian dari banyak log harus bisa dicocokkan", "Mempercepat jaringan", "Menghemat disk", "Tidak penting"], "Simpan waktu dalam UTC lalu tampilkan sesuai zona.");
  M("soc", 2, "Playbook SOC adalah…", ["Langkah baku menangani jenis alert tertentu (misalnya phishing yang dilaporkan)", "Daftar lagu", "Laporan tahunan", "Kebijakan cuti"], "Membuat respons konsisten dan cepat.");
  M("soc", 3, "Login sukses akun yang sama dari Jakarta lalu 10 menit kemudian dari negara lain disebut…", ["Impossible travel: tanda kuat akun dibobol (atau VPN) yang perlu diselidiki", "Normal", "Pembaruan sistem", "Error log"], "Verifikasi dengan pengguna dan cek MFA.");
  I("soc", 1, "Singkatan pusat operasi keamanan: ____", ["soc"], "Security Operations Center.");
  I("soc", 2, "Singkatan sistem pengumpul dan korelasi log keamanan: ____", ["siem"], "SIEM.");
  // ---- insiden (+11) ----
  M("insiden", 1, "Fase respons insiden menurut NIST:", ["Persiapan → deteksi & analisis → penahanan, pemberantasan & pemulihan → aktivitas pasca-insiden", "Panik → hapus → diam", "Pemulihan → deteksi", "Laporan → persiapan"], "Pelajaran pasca-insiden memperbaiki persiapan.");
  M("insiden", 2, "Containment (penahanan) bertujuan…", ["Menghentikan penyebaran dan kerusakan lebih lanjut", "Menghapus semua data", "Mencari pelaku di media sosial", "Membayar tebusan"], "Contoh: isolasi host, nonaktifkan akun yang dibobol.");
  M("insiden", 2, "Order of volatility dalam forensik berarti…", ["Kumpulkan bukti yang paling mudah hilang dulu (memori RAM sebelum disk)", "Kumpulkan disk dulu", "Matikan komputer dulu", "Hapus log lama"], "Mematikan komputer menghapus isi RAM.");
  M("insiden", 2, "Chain of custody adalah…", ["Catatan siapa memegang bukti, kapan, dan untuk apa, agar bukti sah", "Rantai server", "Jaringan", "Kebijakan kata sandi"], "Penting bila kasus dibawa ke jalur hukum.");
  M("insiden", 2, "Membuat salinan disk untuk forensik sebaiknya…", ["Image bit-per-bit dengan hash (misalnya SHA-256) untuk membuktikan keaslian", "Salin file biasa", "Zip semua", "Tidak perlu"], "Analisis dilakukan pada salinan, bukan aslinya.");
  M("insiden", 2, "Root cause analysis setelah insiden bertujuan…", ["Menemukan penyebab dasar agar insiden serupa tidak terulang", "Mencari kambing hitam", "Menghapus bukti", "Mengganti semua staf"], "Budaya tanpa menyalahkan (blameless).");
  M("insiden", 2, "Berdasarkan UU PDP, kebocoran data pribadi wajib diberitahukan…", ["Secara tertulis kepada subjek data dan lembaga paling lambat 3 × 24 jam", "Tidak perlu", "Setelah setahun", "Hanya ke media"], "Pemberitahuan memuat data yang terungkap, kapan dan bagaimana, serta upaya penanganan.");
  M("insiden", 2, "Rencana respons insiden yang baik memuat…", ["Peran dan kontak, jalur eskalasi, playbook, dan cara komunikasi internal/eksternal", "Daftar menu kantin", "Hanya nomor polisi", "Kata sandi admin"], "Disusun dan dilatih sebelum insiden terjadi.");
  M("insiden", 3, "Latihan tabletop exercise berguna untuk…", ["Menguji rencana respons insiden dengan skenario diskusi tanpa mengganggu sistem", "Merusak server", "Menjual produk", "Mengganti semua sistem"], "Menemukan celah prosedur sebelum kejadian nyata.");
  I("insiden", 1, "Catatan kepemilikan barang bukti: chain of ____", ["custody"], "Chain of custody.");
  I("insiden", 2, "Lembaga standar AS yang menerbitkan panduan respons insiden: ____", ["nist"], "NIST.");
  // ---- cloud (+11) ----
  M("cloud", 1, "Shared responsibility model di cloud berarti…", ["Penyedia mengamankan infrastruktur, pelanggan mengamankan konfigurasi, data, dan akses miliknya", "Penyedia bertanggung jawab atas semuanya", "Pelanggan atas semuanya", "Tidak ada yang bertanggung jawab"], "Banyak kebocoran cloud berasal dari salah konfigurasi pelanggan.");
  M("cloud", 2, "Kebocoran data cloud yang paling sering terjadi:", ["Bucket penyimpanan atau database yang terbuka publik karena salah konfigurasi", "Pusat data terbakar", "Kabel laut putus", "Gempa"], "Aktifkan pemblokiran akses publik bawaan.");
  M("cloud", 2, "Kunci akses cloud yang ter-commit ke GitHub publik sebaiknya…", ["Segera dicabut/diganti, lalu periksa log penggunaannya", "Dihapus dari file di commit berikutnya saja", "Dibiarkan", "Diganti nama file"], "Bot memindai GitHub untuk kunci dalam hitungan menit.");
  M("cloud", 2, "IAM role dengan izin *:* (semua aksi semua sumber daya) melanggar…", ["Least privilege", "CIA", "TLS", "UU ITE"], "Beri izin spesifik sesuai kebutuhan.");
  M("cloud", 2, "DevSecOps berarti…", ["Memasukkan pemeriksaan keamanan otomatis ke setiap tahap pengembangan dan rilis", "Tim keamanan terpisah di akhir proyek", "Tanpa tes", "Hanya pentest tahunan"], "Shift left: temukan masalah lebih awal.");
  M("cloud", 2, "SAST dan DAST berbeda karena…", ["SAST memeriksa kode sumber tanpa menjalankan; DAST menguji aplikasi yang sedang berjalan", "Sama saja", "DAST membaca kode", "SAST menguji server"], "Keduanya saling melengkapi.");
  M("cloud", 2, "SBOM (Software Bill of Materials) berguna untuk…", ["Mengetahui semua komponen/pustaka dalam aplikasi sehingga cepat tahu bila ada yang rentan", "Menghitung gaji", "Membuat logo", "Mempercepat build"], "Penting setelah insiden rantai pasok.");
  M("cloud", 2, "Prompt injection pada aplikasi AI terjadi saat…", ["Teks dari pengguna atau dokumen berisi perintah yang membuat model mengabaikan instruksi asli", "Server AI mati", "Model terlalu kecil", "Internet lambat"], "Pisahkan instruksi dan data, batasi hak alat yang bisa dipanggil model.");
  M("cloud", 3, "Data sensitif dikirim ke layanan AI pihak ketiga tanpa izin berisiko…", ["Melanggar kebijakan privasi/UU PDP dan membocorkan rahasia perusahaan", "Tidak ada risiko", "Membuat AI lebih pintar saja", "Mempercepat kerja"], "Cek kebijakan data dan gunakan layanan yang disetujui organisasi.");
  I("cloud", 1, "Singkatan manajemen identitas dan akses cloud: ____", ["iam"], "Identity and Access Management.");
  I("cloud", 2, "Singkatan daftar komponen perangkat lunak: ____", ["sbom"], "Software Bill of Materials.");
  // ---- privasi (+11) ----
  M("privasi", 1, "UU Pelindungan Data Pribadi Indonesia adalah…", ["UU Nomor 27 Tahun 2022", "UU Nomor 11 Tahun 2008", "UU Nomor 13 Tahun 2003", "UU Nomor 40 Tahun 2007"], "UU 11/2008 adalah UU ITE.");
  M("privasi", 2, "Data pribadi spesifik menurut UU PDP contohnya:", ["Data kesehatan, biometrik, genetika, catatan kejahatan, data anak, data keuangan pribadi", "Nama toko", "Alamat kantor publik", "Harga produk"], "Butuh perlindungan lebih ketat.");
  M("privasi", 2, "Prinsip minimisasi data berarti…", ["Hanya mengumpulkan data yang benar-benar dibutuhkan untuk tujuan yang jelas", "Mengumpulkan sebanyak mungkin", "Menghapus semua data", "Menyimpan selamanya"], "Data yang tidak disimpan tidak bisa bocor.");
  M("privasi", 2, "Risiko keamanan sering dihitung sebagai…", ["Kemungkinan × dampak", "Jumlah server", "Biaya firewall", "Jumlah karyawan"], "Dipakai untuk memprioritaskan.");
  M("privasi", 2, "Empat pilihan penanganan risiko:", ["Mitigasi, transfer (asuransi), terima, hindari", "Abaikan semua", "Hapus perusahaan", "Tambah server"], "Pilihan didokumentasikan dan disetujui pemilik risiko.");
  M("privasi", 2, "ISO/IEC 27001 adalah…", ["Standar sistem manajemen keamanan informasi (ISMS)", "Standar warna", "UU Indonesia", "Antivirus"], "Bisa disertifikasi oleh lembaga independen.");
  M("privasi", 2, "Subjek data menurut UU PDP berhak, antara lain…", ["Mengakses, memperbaiki, dan meminta penghapusan data pribadinya", "Tidak punya hak", "Hanya melihat iklan", "Menjual data orang lain"], "Organisasi harus punya prosedur menanggapinya.");
  M("privasi", 2, "Kebijakan kata sandi, akses, dan backup tertulis termasuk bagian…", ["Tata kelola (governance) keamanan", "Pemasaran", "Penjualan", "Desain"], "GRC = Governance, Risk, Compliance.");
  M("privasi", 3, "Pseudonimisasi berbeda dengan anonimisasi karena…", ["Data pseudonim masih bisa dikaitkan kembali dengan kunci tambahan; anonim tidak bisa", "Sama saja", "Anonim bisa dibalik", "Pseudonim menghapus data"], "Data pseudonim tetap dianggap data pribadi.");
  I("privasi", 1, "Singkatan tata kelola, risiko, kepatuhan: ____", ["grc"], "Governance, Risk, Compliance.");
  I("privasi", 2, "Nomor UU PDP Indonesia: UU Nomor ____ Tahun 2022", ["27"], "UU 27/2022.");
  // ---- kerjacyber (+10) ----
  M("kerjacyber", 1, "Posisi awal yang umum untuk masuk karier keamanan siber:", ["SOC analyst, IT support dengan fokus keamanan, atau junior pentester", "Direktur keamanan", "CISO", "Kepala BSSN"], "Fondasi jaringan, Linux, dan log sangat membantu.");
  M("kerjacyber", 2, "Sertifikasi tingkat awal yang luas dikenal:", ["CompTIA Security+ atau setara", "OSCE3", "Sertifikat kursus menggambar", "Tidak ada"], "Praktik (CTF, lab) memperkuat sertifikat.");
  M("kerjacyber", 2, "Portofolio keamanan yang meyakinkan berisi…", ["Tulisan writeup CTF/lab, proyek deteksi (aturan SIEM), dan laporan contoh yang rapi", "Daftar alat yang pernah diunduh", "Hasil meretas situs tanpa izin", "Screenshot terminal tanpa penjelasan"], "Jangan pernah menampilkan hasil peretasan ilegal.");
  M("kerjacyber", 2, "Lembaga pemerintah Indonesia yang menangani keamanan siber nasional:", ["BSSN (Badan Siber dan Sandi Negara)", "BPS", "BMKG", "BKN"], "Ada juga CSIRT di berbagai instansi.");
  M("kerjacyber", 2, "Keterampilan non-teknis yang sangat dibutuhkan di keamanan siber:", ["Komunikasi tertulis yang jelas (laporan) dan ketenangan saat insiden", "Menggambar", "Bernyanyi", "Mengetik cepat saja"], "Laporan yang tidak dipahami tidak akan ditindaklanjuti.");
  M("kerjacyber", 2, "Latar Data Analyst bisa berguna di keamanan karena…", ["Analisis log dan deteksi anomali adalah pekerjaan data", "Tidak berguna", "Hanya untuk laporan keuangan", "Menggantikan firewall"], "SQL dan Python sering dipakai di SOC.");
  M("kerjacyber", 2, "Bug bounty sebagai jalur belajar sebaiknya dimulai dengan…", ["Membaca aturan program dengan teliti dan fokus pada scope yang diizinkan", "Menguji semua situs", "Memakai alat otomatis ke seluruh internet", "Tanpa membaca aturan"], "Melanggar aturan program bisa berujung larangan atau hukum.");
  M("kerjacyber", 3, "Cara terbaik menjaga keterampilan tetap relevan:", ["Rutin mengikuti advisori/CVE terbaru, latihan lab, dan menulis catatan pembelajaran", "Belajar sekali saja", "Menghafal alat", "Menghindari komunitas"], "Ancaman berubah cepat.");
  I("kerjacyber", 1, "Singkatan Badan Siber dan Sandi Negara: ____", ["bssn"], "BSSN.");
  I("kerjacyber", 2, "Tim tanggap insiden keamanan komputer (singkatan): ____", ["csirt"], "Computer Security Incident Response Team.");

  // ---- Pendalaman 20 bab Cyber ----
  const C = dk(MATERI_CYBER);
  const ring = (k, judul, isi) => C(k, `<h4>${judul}</h4>${isi}`);
  ring("etika", "Tiga pertanyaan sebelum menyentuh sistem apa pun", "<ol><li>Apakah ada izin tertulis dari pemilik?</li><li>Apa batas scope dan larangannya?</li><li>Ke mana dan bagaimana temuan dilaporkan?</li></ol><p>Jika salah satu jawabannya 'tidak tahu', jangan mulai.</p>");
  ring("prinsip", "Dari prinsip ke tindakan", "<table class=\"mini-pivot\"><tr><th>Prinsip</th><th>Tindakan nyata</th></tr><tr><td>Least privilege</td><td>akun harian bukan admin</td></tr><tr><td>Defense in depth</td><td>MFA + patch + backup + log</td></tr><tr><td>Kurangi attack surface</td><td>matikan layanan tak terpakai</td></tr><tr><td>Fail secure</td><td>error = tolak akses, bukan izinkan</td></tr></table>");
  ring("jaringan", "Port yang wajib dihafal", "<table class=\"mini-pivot\"><tr><th>Port</th><th>Layanan</th></tr><tr><td>22</td><td>SSH</td></tr><tr><td>25</td><td>SMTP</td></tr><tr><td>53</td><td>DNS</td></tr><tr><td>80 / 443</td><td>HTTP / HTTPS</td></tr><tr><td>3306 / 5432</td><td>MySQL / PostgreSQL</td></tr><tr><td>3389</td><td>RDP</td></tr></table><p>Lab Hitung Siber berisi ratusan latihan port dan subnet.</p>");
  ring("linux", "Audit cepat server milik sendiri", "<pre><code>ss -tulpn                       # port yang terbuka\nsudo tail -n 50 /var/log/auth.log   # login terakhir\ngrep \"Failed password\" /var/log/auth.log | wc -l\nls -l /etc/shadow               # harus hanya root yang bisa baca</code></pre>");
  ring("akun", "Tangga keamanan akun", "<ol><li>Kata sandi unik dan panjang (password manager).</li><li>MFA aplikasi authenticator.</li><li>Passkey/kunci keamanan untuk akun penting.</li><li>Pemantauan login dan pembatasan percobaan.</li></ol>");
  ring("sosial", "Rumus cek cepat pesan mencurigakan", "<p><b>Dari siapa?</b> (domain/nomor asli?) <b>Minta apa?</b> (login, OTP, transfer?) <b>Seberapa mendesak?</b> Bila mendesak dan meminta rahasia, verifikasi lewat kanal lain sebelum bertindak.</p>");
  ring("kripto", "Memilih alat kriptografi", "<table class=\"mini-pivot\"><tr><th>Kebutuhan</th><th>Pakai</th></tr><tr><td>kerahasiaan data</td><td>AES-GCM</td></tr><tr><td>integritas file</td><td>SHA-256</td></tr><tr><td>keaslian pesan API</td><td>HMAC</td></tr><tr><td>simpan kata sandi</td><td>Argon2 / bcrypt</td></tr><tr><td>tanda tangan</td><td>Ed25519 / RSA</td></tr></table>");
  ring("pki", "Apa yang terjadi saat membuka https://", "<ol><li>Browser dan server sepakat versi TLS dan sandi.</li><li>Server mengirim sertifikat + rantainya.</li><li>Browser memeriksa tanda tangan CA, nama domain, dan masa berlaku.</li><li>Kunci sesi dibuat (forward secrecy), lalu data dienkripsi.</li></ol>");
  ring("webdasar", "Header keamanan dasar", "<pre><code>Strict-Transport-Security: max-age=31536000; includeSubDomains\nContent-Security-Policy: default-src 'self'\nX-Content-Type-Options: nosniff\nReferrer-Policy: strict-origin-when-cross-origin\nSet-Cookie: sid=…; HttpOnly; Secure; SameSite=Lax</code></pre>");
  ring("injeksi", "Satu prinsip untuk semua injeksi", "<p><b>Jangan pernah mencampur data pengguna ke dalam perintah yang dieksekusi</b> (SQL, HTML/JS, shell, template). Gunakan API yang memisahkan data dari perintah: query berparameter, auto-escaping, daftar argumen tanpa shell.</p>");
  ring("aksesweb", "Daftar periksa kontrol akses", "<ul><li>Setiap endpoint mengecek: sudah login? berhak atas objek ini?</li><li>Field yang boleh diubah ditentukan eksplisit.</li><li>Aksi pengubah butuh token CSRF / SameSite.</li><li>URL dari pengguna untuk diambil server dibatasi allowlist.</li><li>Aturan bisnis (jumlah negatif, voucher ganda) dicek di server.</li></ul>");
  ring("sistem", "Higiene sistem", "<p>Patch rutin, akun standar untuk kerja harian, matikan layanan tak terpakai, aktifkan proteksi bawaan (ASLR, DEP, firewall), dan cadangkan data.</p>");
  ring("netsec", "Jaringan kantor kecil yang sehat", "<ul><li>Wi-Fi tamu terpisah dari jaringan kasir/server.</li><li>WPA3 atau WPA2 dengan kata sandi kuat.</li><li>Firmware router diperbarui, admin jarak jauh dimatikan.</li><li>Firewall 'tolak kecuali diizinkan'.</li></ul>");
  ring("pentest", "Struktur laporan pentest", "<ol><li>Executive summary.</li><li>Scope dan metodologi.</li><li>Ringkasan temuan per tingkat risiko.</li><li>Detail temuan: deskripsi, bukti, dampak, CVSS, reproduksi, rekomendasi.</li><li>Lampiran.</li></ol>");
  ring("malware", "Bersiap menghadapi ransomware", "<ul><li>Backup 3-2-1 dengan salinan offline/immutable dan uji restore.</li><li>Patch, MFA, dan EDR.</li><li>Blokir makro dari internet.</li><li>Rencana respons insiden yang sudah dilatih.</li></ul>");
  ring("soc", "Cara triage satu alert", "<ol><li>Apa yang terjadi (siapa, kapan, dari mana)?</li><li>Apakah wajar untuk pengguna/sistem ini?</li><li>Cari konteks di log lain (login, EDR, DNS).</li><li>Putuskan: false positive, pantau, atau eskalasi.</li><li>Catat alasan keputusan.</li></ol>");
  ring("insiden", "Saat insiden terjadi", "<p>Tenang, catat waktu dan tindakan, isolasi yang terdampak, simpan bukti (RAM dulu), komunikasikan lewat jalur yang ditetapkan, dan penuhi kewajiban pemberitahuan UU PDP bila data pribadi terdampak.</p>");
  ring("cloud", "Lima kesalahan konfigurasi cloud tersering", "<ol><li>Penyimpanan/database terbuka publik.</li><li>Kunci akses di repositori.</li><li>Izin IAM terlalu luas.</li><li>Logging dimatikan.</li><li>Tidak ada MFA untuk akun root/admin.</li></ol>");
  ring("privasi", "Privasi sejak desain", "<p>Kumpulkan seperlunya, simpan sesingkat mungkin, batasi siapa yang bisa melihat, enkripsi, dan siapkan prosedur untuk permintaan subjek data serta pemberitahuan kebocoran 3 × 24 jam.</p>");
  ring("kerjacyber", "Peta belajar 6 bulan", "<ol><li>Jaringan + Linux (bulan 1–2).</li><li>Keamanan web dan OWASP Top 10 (bulan 3).</li><li>Log, SIEM, dan deteksi (bulan 4).</li><li>CTF/lab rutin + writeup (bulan 5).</li><li>Sertifikasi awal dan portofolio (bulan 6).</li></ol>");

  // ---- Pendalaman 10 bab Lab Hitung Siber ----
  const S = dk(MATERI_SIBER);
  const rs = (k, judul, isi) => S(k, `<h4>${judul}</h4>${isi}`);
  rs("biner", "Trik cepat konversi", "<p>Hafalkan nilai tempat 128, 64, 32, 16, 8, 4, 2, 1. Untuk desimal → biner, kurangi nilai terbesar yang muat lalu tulis 1, sisanya 0. Satu digit heksa = 4 bit, jadi 0xA7 = 1010 0111.</p>");
  rs("subnet", "Subnet dalam tiga langkah", "<ol><li>Ukuran blok = 2^(32 − prefix). /26 → 64 alamat.</li><li>Alamat jaringan = kelipatan ukuran blok yang ≤ IP.</li><li>Broadcast = jaringan + blok − 1; host terpakai = blok − 2.</li></ol>");
  rs("port", "Mengingat port dengan cerita", "<p>Kelompokkan: akses jarak jauh (22 SSH, 3389 RDP), web (80, 443, 8080), email (25, 587, 993), basis data (3306, 5432, 1433, 27017), dan DNS (53).</p>");
  rs("http", "Kode status dalam lima kelompok", "<table class=\"mini-pivot\"><tr><th>Awalan</th><th>Arti</th></tr><tr><td>1xx</td><td>informasi</td></tr><tr><td>2xx</td><td>berhasil (200, 201, 204)</td></tr><tr><td>3xx</td><td>dialihkan (301, 302, 304)</td></tr><tr><td>4xx</td><td>salah klien (400, 401, 403, 404, 429)</td></tr><tr><td>5xx</td><td>salah server (500, 502, 503)</td></tr></table>");
  rs("encoding", "Encoding bukan enkripsi", "<p>Base64, URL encoding, dan heksa hanya mengubah bentuk agar aman dikirim, dan siapa pun bisa membaliknya tanpa kunci. Ciri Base64: huruf, angka, + / dan kadang diakhiri =.</p>");
  rs("hash", "Mengenali hash dari panjangnya", "<table class=\"mini-pivot\"><tr><th>Panjang heksa</th><th>Kemungkinan</th></tr><tr><td>32</td><td>MD5</td></tr><tr><td>40</td><td>SHA-1</td></tr><tr><td>64</td><td>SHA-256</td></tr><tr><td>128</td><td>SHA-512</td></tr><tr><td>diawali $2b$</td><td>bcrypt</td></tr></table>");
  rs("chmod", "Membaca rwxr-x---", "<p>Bagi menjadi tiga kelompok: pemilik (rwx = 7), grup (r-x = 5), lainnya (--- = 0) → 750. Ingat r = 4, w = 2, x = 1.</p>");
  rs("sandi", "Caesar dan XOR", "<p>Caesar menggeser huruf sejauh kunci (mod 26); mendekripsi = geser balik. XOR dengan kunci yang sama dua kali mengembalikan aslinya: (P ⊕ K) ⊕ K = P.</p>");
  rs("entropi", "Entropi kata sandi", "<p>Entropi ≈ panjang × log2(jumlah karakter yang mungkin). 12 karakter dari 62 simbol ≈ 71 bit. Panjang menambah kekuatan lebih cepat daripada menambah jenis simbol.</p>");
  rs("waktu", "Membaca waktu di log", "<p>Ubah semua ke UTC dulu, baru bandingkan. WIB = UTC+7, WITA = UTC+8, WIT = UTC+9. Unix timestamp = detik sejak 1 Januari 1970 UTC.</p>");

  // ---- Pendalaman 12 bab Lab Hitung ERP ----
  const E = dk(MATERI_ERP);
  const re = (k, isi) => E(k, `<h4>Cara mengerjakan soal hitung bab ini</h4>${isi}<p>Tulis langkahnya di kertas: data diketahui → rumus dari materi di atas → hitung → bulatkan di langkah terakhir sesuai aturan Odoo.</p>`);
  re("hargajual", "<p>Bedakan <b>markup</b> (persen dari harga pokok) dan <b>margin</b> (persen dari harga jual). Pricelist bertingkat: cek aturan mana yang berlaku untuk jumlah dan tanggal itu, lalu terapkan diskon/rumus berurutan.</p>");
  re("pajak", "<p>Tentukan dulu harga termasuk atau belum termasuk pajak. Bila termasuk, keluarkan pajaknya dengan membagi, bukan mengurangi persen begitu saja.</p>");
  re("satuan", "<p>Ubah ke satuan referensi kategori itu dulu, baru ke satuan tujuan. Perhatikan pembulatan (rounding) satuan di Odoo.</p>");
  re("reorder", "<p>Hitung forecast (stok + masuk − keluar terencana). Bila di bawah minimum, pesan hingga maksimum, lalu sesuaikan kelipatan pembelian.</p>");
  re("valuasi", "<p>FIFO memakai lapisan harga tertua dulu. AVCO memperbarui rata-rata tertimbang setiap barang masuk: (nilai lama + nilai masuk) ÷ (qty lama + qty masuk).</p>");
  re("landed", "<p>Pilih metode pembagian (sama rata, kuantitas, berat, volume, atau nilai), hitung porsi tiap baris, lalu tambahkan ke biaya per unit.</p>");
  re("produksi", "<p>Hitung kebutuhan bahan dari BoM × kuantitas, lalu durasi work order dan biayanya (durasi × tarif work center) sebelum menjumlahkan biaya total.</p>");
  re("jurnal", "<p>Selalu cek debit = kredit. Untuk mata uang asing, jurnal memakai kurs tanggal transaksi; selisih saat pembayaran menjadi laba/rugi kurs.</p>");
  re("termin", "<p>Pecah tagihan sesuai baris payment term (persen dan hari), hitung tanggal jatuh tempo masing-masing, lalu terapkan diskon bayar cepat atau cash rounding bila ada.</p>");
  re("penyusutan", "<p>Garis lurus: (harga perolehan − nilai sisa) ÷ umur. Saldo menurun: persen × nilai buku awal periode. Hitung per periode lalu jumlahkan.</p>");
  re("pipeline", "<p>Pendapatan berbobot = expected revenue × probabilitas. Jumlahkan per tahap atau per bulan perkiraan tutup.</p>");
  re("kpi", "<p>Kenali rumus rasionya (pembilang ÷ penyebut) dan periode yang sama untuk keduanya. Untuk kas POS, selisih = dihitung − seharusnya.</p>");
})();
