// ============ Materi 2x lipat (bagian 8): Cyber Security & Lab Siber ============
// Semua latihan untuk lab sendiri atau sistem yang Anda punya izin tertulis.
(function () {
  const R = String.raw;
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const li = a => a.map(x => `<li>${x}</li>`).join("");
  const cekH = qa => qa && qa.length ? `<h4>Cek pemahaman</h4><ol class="cek-paham">${qa.map(([q, a]) => `<li>${q}<details><summary>Lihat jawaban</summary><p>${a}</p></details></li>`).join("")}</ol>` : "";
  const tabel = (judul, baris) => `<h4>${judul}</h4><table class="mini-pivot">${baris.map((b, i) => `<tr>${b.map(x => i ? `<td>${x}</td>` : `<th>${x}</th>`).join("")}</tr>`).join("")}</table>`;
  const kasus = MAT => (k, judul, skenario, kode, langkah, salah, latihan, kunci, qa, ekstra) => {
    const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k);
    b.materi += '<h4 class="pelengkap">Studi kasus terpandu &amp; kunci</h4>' +
      `<h4>Kasus: ${judul}</h4><p>${skenario}</p>` + (kode ? `<pre><code>${esc(kode)}</code></pre>` : "") +
      `<h4>Langkah demi langkah</h4><ol>${li(langkah)}</ol>` +
      `<h4>Kesalahan yang sering terjadi</h4><ul>${li(salah)}</ul>` +
      `<h4>Latihan mandiri</h4><ol>${li(latihan)}</ol>` +
      `<details class="kunci-latihan"><summary>Lihat kunci jawaban (coba dulu sendiri)</summary><ol>${li(kunci)}</ol></details>` + cekH(qa) + (ekstra || "");
  };

  /* ======================= Cyber Security (20 bab) ======================= */
  const C = kasus(MATERI_CYBER);
  C("etika", "teman minta 'tolong cek keamanan website kantornya'",
    "Seorang teman bekerja di toko online dan meminta Anda memindai situs kantornya karena curiga ada celah. Ia bukan pemilik sistem dan tidak punya wewenang memberi izin.", "",
    ["Tolak memindai sebelum ada izin tertulis dari pemilik sistem (biasanya manajemen atau tim IT).", "Usulkan dokumen Rules of Engagement: ruang lingkup (domain, IP), waktu, teknik yang boleh, kontak darurat.", "Tanyakan apakah perusahaan punya program bug bounty atau kebijakan pengungkapan celah (security.txt).", "Bila izin didapat, kerjakan hanya di ruang lingkup, catat semua aktivitas, dan laporkan secara rahasia.", "Sambil menunggu, latih keterampilan di lab sendiri (DVWA, Juice Shop) atau platform legal (TryHackMe, HackTheBox)."],
    ["Menganggap izin lisan teman cukup.", "Menguji subdomain atau server pihak ketiga di luar ruang lingkup.", "Mengunggah bukti celah ke media sosial sebelum diperbaiki."],
    ["Sebutkan 4 isi minimal Rules of Engagement.", "Apa beda bug bounty dan pentest berkontrak?", "Apa itu responsible disclosure?"],
    ["Ruang lingkup, waktu pengujian, teknik yang diizinkan/dilarang, kontak dan prosedur darurat.", "Bug bounty terbuka untuk publik dengan aturan program dan hadiah per temuan; pentest berkontrak dikerjakan tim tertentu dengan lingkup dan laporan menyeluruh.", "Melaporkan celah secara rahasia ke pemilik, memberi waktu perbaikan, baru mempublikasikan bila disepakati."],
    [["Undang-undang apa di Indonesia yang mengatur akses ilegal ke sistem?", "UU ITE (antara lain Pasal 30 tentang akses tanpa hak) dan UU PDP untuk data pribadi."], ["Kenapa mencatat semua aktivitas saat pentest?", "Sebagai bukti kerja dalam lingkup, membantu analisis, dan melindungi penguji bila ada insiden bersamaan."]]);

  C("prinsip", "model ancaman aplikasi kasir online",
    "UMKM memakai aplikasi kasir berbasis web: kasir login, mencatat penjualan, pemilik melihat laporan, data tersimpan di cloud.", "",
    ["Gambar alur data: browser kasir → server aplikasi → database; pemilik → dashboard.", "Daftar aset: data penjualan, akun pengguna, kunci API pembayaran.", "Pakai STRIDE per komponen: Spoofing (login dicuri), Tampering (ubah harga), Repudiation (kasir menyangkal transaksi), Information disclosure (laporan bocor), DoS, Elevation of privilege (kasir jadi admin).", "Nilai risiko = kemungkinan × dampak; urutkan.", "Kendali: MFA pemilik, peran kasir terbatas, log audit tidak bisa diubah, backup harian, rate limit login."],
    ["Mendaftar ancaman tanpa memprioritaskan.", "Hanya fokus ke peretas luar, lupa orang dalam.", "Kendali tanpa penanggung jawab."],
    ["Kendali apa untuk ancaman Repudiation?", "Contoh penerapan least privilege di aplikasi ini?", "Kenapa defense in depth?"],
    ["Log audit per pengguna dengan waktu, disimpan terpisah dan tidak bisa dihapus kasir.", "Kasir hanya bisa membuat transaksi; diskon besar dan pembatalan perlu persetujuan pemilik.", "Satu kendali bisa gagal; lapisan lain tetap menahan serangan."],
    [["Arti CIA triad?", "Confidentiality (kerahasiaan), Integrity (keutuhan), Availability (ketersediaan)."], ["Beda ancaman, kerentanan, dan risiko?", "Ancaman: siapa/apa yang bisa merugikan. Kerentanan: kelemahan. Risiko: kemungkinan ancaman memanfaatkan kerentanan × dampaknya."]],
    tabel("STRIDE ↔ properti yang dilanggar", [["Ancaman", "Properti", "Contoh kendali"], ["Spoofing", "autentikasi", "MFA"], ["Tampering", "integritas", "tanda tangan, validasi server"], ["Repudiation", "non-repudiation", "log audit"], ["Information disclosure", "kerahasiaan", "enkripsi, hak akses"], ["Denial of service", "ketersediaan", "rate limit, CDN"], ["Elevation of privilege", "otorisasi", "cek peran di server"]]));

  C("jaringan", "memetakan jaringan lab sendiri",
    "Anda punya lab VirtualBox dengan jaringan host-only 192.168.56.0/24 berisi 3 VM. Tujuannya memahami host, port, dan layanan.",
R`ip addr                                   # alamat VM sendiri
ping -c 2 192.168.56.101                  # cek host hidup
nmap -sn 192.168.56.0/24                  # host discovery (hanya di lab sendiri)
nmap -sV -p 1-1000 192.168.56.101         # port & versi layanan
dig contoh.local A                        # tanya DNS
curl -I http://192.168.56.101             # lihat header HTTP`,
    ["Pastikan jaringan lab terisolasi (host-only), bukan jaringan kantor/kampus.", "Discovery: host mana yang hidup.", "Scan port: layanan apa yang terbuka.", "Identifikasi versi untuk dicocokkan dengan CVE.", "Catat hasil dalam tabel host–port–layanan–versi."],
    ["Memindai jaringan publik atau Wi-Fi umum.", "Mengira port tertutup berarti host mati (firewall bisa memblokir ping).", "Lupa bahwa UDP perlu pemindaian terpisah."],
    ["Berapa host yang bisa dipakai di /24?", "Port 22, 80, 443, 3306 biasanya layanan apa?", "Apa beda TCP dan UDP?"],
    ["254 (256 dikurangi alamat jaringan dan broadcast).", "SSH, HTTP, HTTPS, MySQL.", "TCP berorientasi koneksi dan andal (handshake, urutan terjaga); UDP tanpa koneksi, cepat, tanpa jaminan sampai."],
    [["Urutan three-way handshake?", "SYN → SYN-ACK → ACK."], ["Fungsi DNS?", "Menerjemahkan nama domain menjadi alamat IP."]]);

  C("linux", "memeriksa server Linux yang dicurigai",
    "Server web lab terasa lambat. Anda diminta memeriksa proses, pengguna, file mencurigakan, dan log login.",
R`whoami; id                                 # siapa saya, grup apa
ps aux --sort=-%cpu | head                 # proses paling berat
ss -tulpn                                  # port yang mendengarkan + proses
last -n 10                                 # login terakhir
grep "Failed password" /var/log/auth.log | tail
find / -perm -4000 -type f 2>/dev/null     # file SUID
find /var/www -mtime -2 -type f            # file web berubah 2 hari terakhir
crontab -l; ls /etc/cron.*                 # tugas terjadwal`,
    ["Kenali konteks pengguna sendiri.", "Cari proses dan koneksi tak dikenal.", "Periksa log autentikasi untuk percobaan login gagal beruntun.", "Cari file SUID tak biasa dan file web yang baru berubah.", "Periksa cron untuk persistence."],
    ["Langsung menghapus file mencurigakan sebelum menyalin bukti.", "Menjalankan perintah sebagai root tanpa perlu.", "Mengabaikan /tmp dan direktori tersembunyi."],
    ["Perintah melihat 20 baris terakhir log secara langsung?", "Bagaimana menghitung jumlah IP yang gagal login?", "Arti izin 4755?"],
    ["tail -n 20 -f /var/log/auth.log.", "grep 'Failed password' auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -nr.", "SUID aktif (4) + rwxr-xr-x (755): file dijalankan dengan hak pemiliknya."],
    [["Kenapa SUID berbahaya?", "Program SUID milik root yang bisa dimanipulasi memberi hak root ke pengguna biasa."], ["Fungsi sudo -l?", "Melihat perintah apa saja yang boleh dijalankan pengguna dengan sudo."]]);

  C("akun", "kebijakan password dan MFA untuk kantor kecil",
    "Kantor 15 orang memakai email cloud dan aplikasi akuntansi. Dua akun pernah dibobol karena password dipakai ulang.", "",
    ["Wajibkan password manager dan passphrase panjang (≥ 14 karakter) yang unik per layanan.", "Aktifkan MFA untuk semua akun; utamakan aplikasi authenticator atau passkey, bukan SMS.", "Cek password terhadap daftar bocoran (fitur Have I Been Pwned di password manager).", "Hapus aturan kedaluwarsa paksa tiap 30 hari; ganti hanya bila ada indikasi bocor.", "Siapkan kode pemulihan dan prosedur reset yang memverifikasi identitas."],
    ["Aturan rumit (wajib simbol) yang membuat orang menulis password di kertas.", "MFA hanya untuk admin.", "Menyimpan password dengan MD5 atau SHA-256 tanpa salt di aplikasi sendiri."],
    ["Algoritma hash password yang dianjurkan?", "Kenapa SMS OTP lebih lemah?", "Apa itu credential stuffing?"],
    ["Argon2id, bcrypt, atau scrypt dengan salt unik dan biaya yang disetel.", "Rentan SIM swap dan penyadapan; authenticator dan passkey lebih kuat.", "Mencoba pasangan email–password dari kebocoran situs lain ke banyak layanan."],
    [["Kenapa passkey tahan phishing?", "Kunci terikat ke domain asli; situs palsu tidak bisa meminta tanda tangan untuk domain yang benar."], ["Fungsi salt?", "Membuat hash password yang sama berbeda, menggagalkan tabel pelangi."]]);

  C("sosial", "menganalisis email 'invoice tertunda'",
    "Staf keuangan menerima email: 'Invoice Anda jatuh tempo hari ini, buka lampiran Invoice_8821.html dan login untuk melihat detail.' Pengirim tampak dari vendor langganan.", "",
    ["Jangan klik; lihat alamat pengirim sebenarnya (bukan nama tampilan): vend0r-billing.co dibanding vendor.co.id.", "Periksa header: hasil SPF/DKIM/DMARC dan Return-Path.", "Arahkan kursor ke tautan tanpa mengklik; domain berbeda dengan vendor.", "Laporkan ke tim IT lewat tombol 'Laporkan phishing'.", "Hubungi vendor lewat nomor yang sudah tersimpan, bukan dari email."],
    ["Membalas email untuk menanyakan keasliannya.", "Menganggap logo dan tanda tangan resmi sebagai bukti.", "Malu melapor setelah terlanjur klik."],
    ["Sebutkan 4 tanda phishing di kasus ini.", "Apa yang dilakukan bila sudah memasukkan password?", "Apa itu pretexting?"],
    ["Mendesak (jatuh tempo hari ini), domain mirip, lampiran HTML yang meminta login, permintaan kredensial.", "Segera ganti password dari perangkat bersih, cabut sesi aktif, cek aturan forwarding email, lapor IT.", "Membuat cerita palsu yang meyakinkan (misalnya mengaku dari IT) untuk mendapat informasi."],
    [["Apa itu BEC?", "Business Email Compromise: penipuan lewat email bisnis (sering menyamar atasan atau vendor) untuk memindahkan uang."], ["Kenapa simulasi phishing berguna?", "Melatih kebiasaan melapor dan mengukur kesiapan tanpa menyalahkan individu."]]);

  C("kripto", "mengenkripsi file cadangan dengan benar",
    "Tim ingin mengenkripsi cadangan database sebelum diunggah ke cloud.",
R`# Python (cryptography): AES-GCM = enkripsi + cek keutuhan
import os
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
kunci = AESGCM.generate_key(bit_length=256)    # simpan di pengelola rahasia, bukan di kode
nonce = os.urandom(12)                         # unik setiap enkripsi
data = open("cadangan.sql", "rb").read()
sandi = AESGCM(kunci).encrypt(nonce, data, b"cadangan-2026-11")
open("cadangan.enc", "wb").write(nonce + sandi)`,
    ["Pakai mode terautentikasi (AES-GCM atau ChaCha20-Poly1305).", "Nonce wajib unik untuk setiap enkripsi dengan kunci yang sama.", "Simpan nonce bersama ciphertext (tidak rahasia).", "Kunci disimpan di KMS atau pengelola rahasia; rotasi berkala.", "Uji pemulihan: dekripsi dan restore cadangan secara rutin."],
    ["Mode ECB yang membocorkan pola data.", "Memakai ulang nonce GCM (fatal).", "Membuat algoritma sendiri atau menyimpan kunci di repo."],
    ["Beda hash dan MAC?", "Kenapa enkripsi tanpa autentikasi berbahaya?", "Kapan memakai hash SHA-256?"],
    ["Hash tanpa kunci (siapa saja bisa menghitung); MAC memakai kunci rahasia sehingga membuktikan keaslian.", "Ciphertext bisa diubah tanpa terdeteksi (bit-flipping, padding oracle).", "Cek keutuhan file unduhan atau sidik jari data, bukan untuk password."],
    [["Apa itu Kerckhoffs's principle?", "Keamanan harus bergantung pada kerahasiaan kunci, bukan kerahasiaan algoritma."]]);

  C("pki", "memeriksa sertifikat HTTPS situs",
    "Pengguna melapor browser menampilkan peringatan sertifikat di situs internal.",
R`openssl s_client -connect intranet.contoh:443 -servername intranet.contoh </dev/null 2>/dev/null \
  | openssl x509 -noout -subject -issuer -dates -ext subjectAltName`,
    ["Periksa tanggal berlaku (notBefore/notAfter).", "Cocokkan nama di SAN dengan alamat yang dibuka.", "Periksa issuer: CA publik atau CA internal yang belum dipercaya perangkat.", "Pastikan rantai lengkap (sertifikat intermediate ikut dikirim).", "Perbarui otomatis (ACME/Let's Encrypt) dan pasang pemantauan kedaluwarsa."],
    ["Menyuruh pengguna mengabaikan peringatan.", "Kunci privat tersebar di banyak server tanpa kontrol.", "Hanya memasang sertifikat tanpa intermediate."],
    ["Peringatan 'NET::ERR_CERT_COMMON_NAME_INVALID' artinya?", "Bagaimana tanda tangan digital membuktikan pengirim?", "Apa fungsi HSTS?"],
    ["Nama domain tidak ada di SAN sertifikat.", "Pengirim menandatangani hash pesan dengan kunci privat; siapa pun memverifikasi dengan kunci publik.", "Memaksa browser selalu memakai HTTPS untuk domain itu, mencegah downgrade."],
    [["Apa yang dilindungi TLS?", "Kerahasiaan dan keutuhan data di perjalanan, serta keaslian server."], ["Apa itu perfect forward secrecy?", "Kunci sesi sementara (ECDHE) sehingga bocornya kunci privat server tidak membuka lalu lintas lama."]]);

  C("webdasar", "mengeraskan header dan cookie aplikasi",
    "Hasil pemeriksaan header aplikasi lab menunjukkan tidak ada CSP, cookie sesi tanpa flag, dan CORS mengizinkan semua origin.",
R`Set-Cookie: sesi=abc123; HttpOnly; Secure; SameSite=Lax; Path=/
Content-Security-Policy: default-src 'self'; img-src 'self' data:; object-src 'none'; frame-ancestors 'none'
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Access-Control-Allow-Origin: https://app.contoh.com`,
    ["HttpOnly mencegah cookie dibaca JavaScript.", "Secure hanya dikirim lewat HTTPS; SameSite mengurangi CSRF.", "CSP membatasi sumber skrip sehingga XSS lebih sulit dieksekusi.", "frame-ancestors mencegah clickjacking.", "CORS hanya untuk origin yang dipercaya, bukan *, terutama bila memakai kredensial."],
    ["Access-Control-Allow-Origin: * bersama Allow-Credentials.", "CSP berisi 'unsafe-inline' sehingga tidak berarti.", "Menyimpan token sesi di localStorage."],
    ["Apa itu same-origin?", "Kenapa SameSite=Lax membantu?", "Cara aman menguji CSP tanpa merusak situs?"],
    ["Skema, host, dan port sama persis.", "Cookie tidak dikirim pada permintaan POST lintas situs, sehingga CSRF dasar gagal.", "Pakai Content-Security-Policy-Report-Only dulu dan pantau laporan pelanggaran."]);

  C("injeksi", "memperbaiki pencarian produk yang rentan",
    "Di lab DVWA/Juice Shop Anda menemukan pencarian produk yang menyusun SQL dengan menggabung teks dan menampilkan kata kunci tanpa escape.",
R`# RENTAN
q = "SELECT * FROM produk WHERE nama LIKE '%" + kata + "%'"
html = "<p>Hasil untuk " + kata + "</p>"

# AMAN
cur.execute("SELECT id, nama, harga FROM produk WHERE nama LIKE ?", (f"%{kata}%",))
html = "<p>Hasil untuk " + html_escape(kata) + "</p>"
subprocess.run(["ping", "-c", "1", host], check=True)   # tanpa shell=True`,
    ["SQL injection terjadi saat input pengguna menjadi bagian perintah SQL.", "Perbaikan utama: parameterized query.", "XSS terjadi saat input ditampilkan sebagai HTML; perbaikan: escape sesuai konteks + CSP.", "Command injection: hindari shell, kirim argumen sebagai list, validasi dengan allowlist.", "Tambahkan tes otomatis yang mengirim input aneh (kutip, &lt;script&gt;) dan memastikan aman."],
    ["Hanya memfilter kata 'SELECT' atau '&lt;script&gt;' (blacklist).", "Escape di satu tempat lalu lupa di template lain.", "Akun database aplikasi memakai hak admin."],
    ["Kenapa parameterized query aman?", "Beda stored dan reflected XSS?", "Apa itu least privilege untuk akun database?"],
    ["Data dikirim terpisah dari perintah; database tidak pernah membaca input sebagai kode SQL.", "Stored tersimpan di server dan mengenai semua pengunjung; reflected memantul dari parameter URL ke satu korban.", "Akun aplikasi hanya punya SELECT/INSERT/UPDATE pada tabel yang perlu, tanpa DROP atau akses tabel lain."],
    [["Posisi injeksi di OWASP Top 10 2021?", "A03: Injection."], ["Konteks escape apa saja?", "HTML body, atribut, JavaScript, URL, CSS — masing-masing aturannya berbeda."]]);

  C("aksesweb", "IDOR pada halaman faktur",
    "Di aplikasi lab, URL /faktur?id=1001 menampilkan faktur pengguna. Mengganti menjadi 1002 menampilkan faktur orang lain.",
R`# RENTAN
@app.get("/faktur")
def faktur(id: int):
    return db.ambil_faktur(id)

# AMAN: cek kepemilikan di server
@app.get("/faktur")
def faktur(id: int, user = Depends(user_login)):
    f = db.ambil_faktur(id)
    if f is None or f.pemilik_id != user.id:
        raise HTTPException(404)
    return f`,
    ["IDOR = Insecure Direct Object Reference, bagian dari Broken Access Control (A01).", "Selalu cek otorisasi di server untuk setiap objek, bukan hanya menyembunyikan tombol.", "Kembalikan 404 agar tidak membocorkan keberadaan data.", "ID acak (UUID) membantu tapi bukan pengganti cek akses.", "Tulis tes: pengguna A tidak bisa membuka data B."],
    ["Mengandalkan menu yang disembunyikan di frontend.", "Cek peran hanya di halaman, tidak di API.", "SSRF: server mengambil URL dari pengguna tanpa allowlist."],
    ["Bagaimana mencegah CSRF pada form ubah email?", "Contoh celah logika bisnis?", "Kendali untuk SSRF?"],
    ["Token CSRF per sesi + SameSite cookie + cek metode POST.", "Kupon bisa dipakai berkali-kali atau jumlah barang negatif mengurangi total.", "Allowlist domain tujuan, tolak alamat internal (127.0.0.1, 169.254.169.254, 10.0.0.0/8), dan matikan redirect."],
    [["Kenapa 403 bisa membocorkan informasi?", "Menunjukkan objek ada; 404 menyamarkan keberadaannya."]]);

  C("sistem", "mengeraskan server Linux baru",
    "Server VPS baru akan menjalankan aplikasi web. Anda menyusun daftar hardening dasar.",
R`adduser deploy && usermod -aG sudo deploy
# /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no
# firewall
ufw default deny incoming && ufw allow 22/tcp && ufw allow 443/tcp && ufw enable
apt update && apt upgrade -y && apt install unattended-upgrades fail2ban
systemctl list-unit-files --state=enabled      # matikan layanan yang tidak dipakai`,
    ["Login dengan kunci SSH, bukan password; matikan login root.", "Firewall menolak semua masuk kecuali yang perlu.", "Pembaruan keamanan otomatis.", "fail2ban memblokir IP yang gagal login berulang.", "Aplikasi berjalan sebagai pengguna non-root, idealnya dalam container dengan hak minimal."],
    ["Mengunci diri sendiri karena mematikan password sebelum kunci SSH diuji.", "Database terbuka ke internet.", "Semua layanan jalan sebagai root."],
    ["Kenapa ASLR dan DEP mempersulit eksploit memori?", "Apa itu sandbox?", "Fungsi chroot/container?"],
    ["ASLR mengacak alamat memori; DEP/NX melarang data dieksekusi sebagai kode.", "Lingkungan terbatas tempat program berjalan dengan akses minimal.", "Mengisolasi proses dari sistem file dan sumber daya host."],
    [["Apa itu buffer overflow?", "Menulis data melebihi ukuran buffer sehingga menimpa memori di sebelahnya, berpotensi mengubah alur program."]]);

  C("netsec", "segmentasi jaringan kantor dan Wi-Fi tamu",
    "Kantor memakai satu jaringan untuk laptop staf, printer, CCTV, dan Wi-Fi tamu.", "",
    ["Pisahkan VLAN: staf, server, IoT (CCTV/printer), tamu.", "Firewall antar-VLAN: tamu hanya ke internet; IoT tidak bisa memulai koneksi ke staf.", "Wi-Fi staf WPA3 (atau WPA2-Enterprise dengan akun per orang); tamu dengan portal dan isolasi klien.", "Ganti password bawaan perangkat IoT, perbarui firmware.", "Pantau log DNS dan firewall untuk koneksi aneh."],
    ["Password Wi-Fi sama sejak tiga tahun dan dibagikan ke semua orang.", "WPS tetap aktif.", "Port manajemen router terbuka ke internet."],
    ["Kenapa IoT dipisah?", "Apa itu VPN dan kapan dipakai?", "Beda IDS dan IPS?"],
    ["Perangkat IoT jarang diperbarui; bila dibobol, penyerang tidak langsung mencapai laptop staf.", "Terowongan terenkripsi untuk akses jarak jauh ke jaringan kantor atau melindungi lalu lintas di jaringan tak tepercaya.", "IDS mendeteksi dan memberi peringatan; IPS juga memblokir."],
    [["Apa itu zero trust?", "Tidak ada kepercayaan otomatis berdasarkan lokasi jaringan; setiap akses diverifikasi identitas, perangkat, dan konteksnya."]]);

  C("pentest", "menulis temuan pentest yang bisa ditindaklanjuti",
    "Dalam pentest berizin, Anda menemukan halaman admin dengan login tanpa batas percobaan dan password bawaan admin/admin.", "",
    ["Judul jelas: 'Kredensial bawaan pada panel admin memungkinkan pengambilalihan penuh'.", "Tingkat risiko dengan CVSS (misalnya 9,8 Critical) dan penjelasan dampak bisnis.", "Langkah reproduksi singkat dan bukti (tangkapan layar tersensor).", "Rekomendasi: ganti kredensial, wajibkan MFA, rate limit, batasi akses admin ke IP kantor/VPN.", "Status retest setelah perbaikan."],
    ["Laporan berisi output alat mentah tanpa analisis.", "Risiko dinilai dari teknis saja tanpa dampak bisnis.", "Menyimpan data pelanggan yang diakses saat pengujian."],
    ["Lima fase pentest?", "Apa itu CVE dan CVSS?", "Isi executive summary?"],
    ["Perencanaan & lingkup, pengintaian, pemindaian/enumerasi, eksploitasi terkendali, pelaporan (+ retest).", "CVE: nomor identitas celah publik; CVSS: skor 0–10 tingkat keparahan.", "Ringkasan risiko terbesar dalam bahasa bisnis, jumlah temuan per tingkat, dan prioritas perbaikan."],
    [["Kenapa retest penting?", "Memastikan perbaikan benar-benar menutup celah dan tidak membuka masalah baru."]],
    tabel("Rentang CVSS v3", [["Skor", "Tingkat"], ["0,1–3,9", "Low"], ["4,0–6,9", "Medium"], ["7,0–8,9", "High"], ["9,0–10,0", "Critical"]]));

  C("malware", "rencana tahan ransomware untuk UMKM",
    "Toko dengan 5 komputer dan satu NAS khawatir ransomware setelah pesaing terkena.", "",
    ["Cadangan 3-2-1: 3 salinan, 2 media berbeda, 1 di luar lokasi dan offline/immutable.", "Uji pemulihan bulanan.", "Perbarui OS dan aplikasi; matikan RDP yang terbuka ke internet.", "Akun harian tanpa hak admin; MFA untuk email dan remote access.", "Antivirus/EDR aktif dan pelatihan phishing singkat."],
    ["Cadangan di NAS yang selalu tersambung (ikut terenkripsi).", "Membayar tebusan tanpa jaminan data kembali.", "Tidak tahu siapa yang harus dihubungi saat insiden."],
    ["Tahap serangan ransomware umum?", "Apa itu teknik T1566 di MITRE ATT&CK?", "Beda virus, worm, dan trojan?"],
    ["Akses awal (phishing/RDP) → eksekusi → eskalasi hak → gerak lateral → pencurian data → enkripsi → tuntutan tebusan.", "Phishing sebagai akses awal.", "Virus menempel pada file dan butuh dijalankan; worm menyebar sendiri lewat jaringan; trojan menyamar sebagai program sah."],
    [["Apa itu IOC?", "Indicator of Compromise: jejak seperti hash file, domain, atau IP yang menandakan sistem disusupi."]]);

  C("soc", "menyelidiki peringatan login mencurigakan",
    "SIEM memberi peringatan: akun budi login sukses dari luar negeri 10 menit setelah login dari Batam.",
R`# contoh kueri (gaya SPL/KQL disederhanakan)
login user=budi earliest=-24h | table _time, src_ip, negara, hasil, perangkat
login hasil=gagal earliest=-1h | stats count by src_ip | where count > 20
email_rule_change user=budi earliest=-24h`,
    ["Triase: impossible travel (jarak tidak mungkin ditempuh dalam waktu itu).", "Kumpulkan konteks: IP, perangkat, aplikasi yang diakses, apakah ada MFA.", "Cek tindakan setelah login: aturan forwarding email baru, unduhan besar.", "Bila mencurigakan: nonaktifkan sesi, reset password, hubungi pengguna lewat saluran lain.", "Dokumentasikan di tiket dan perbarui aturan deteksi bila perlu."],
    ["Menutup peringatan karena 'mungkin VPN' tanpa verifikasi.", "Terlalu banyak aturan bising sehingga peringatan penting terlewat.", "Log tidak memakai zona waktu yang sama."],
    ["Apa itu false positive?", "Kenapa log disentralisasi?", "Metrik SOC MTTD dan MTTR?"],
    ["Peringatan yang ternyata aktivitas normal.", "Korelasi antar-sistem, tahan dihapus penyerang, dan memudahkan pencarian.", "Mean Time to Detect dan Mean Time to Respond/Recover."],
    [["Peran analis SOC tier 1?", "Memantau, triase peringatan, dan eskalasi ke tier berikutnya."]]);

  C("insiden", "laptop staf terinfeksi",
    "EDR mendeteksi proses mencurigakan di laptop staf penjualan yang terhubung ke jaringan kantor.", "",
    ["Persiapan: kontak, playbook, dan alat sudah siap sebelumnya.", "Identifikasi: konfirmasi peringatan, tentukan cakupan.", "Penahanan: isolasi laptop dari jaringan lewat EDR (jangan dimatikan dulu agar memori bisa diambil).", "Pengumpulan bukti: memori, log, image disk; catat chain of custody dan hash.", "Pembersihan & pemulihan: reimage, reset kredensial, pantau; lalu lessons learned."],
    ["Mematikan laptop sehingga bukti di memori hilang.", "Bekerja langsung pada disk asli, bukan salinan.", "Tidak memberi tahu pihak yang wajib diberi tahu (misalnya bila data pribadi bocor)."],
    ["Urutan volatilitas bukti?", "Kenapa menghitung hash image disk?", "Kapan wajib memberi tahu subjek data menurut UU PDP?"],
    ["Register/cache → memori → koneksi jaringan/proses → disk → log jarak jauh → arsip.", "Membuktikan salinan identik dan tidak berubah selama analisis.", "Bila terjadi kegagalan pelindungan data pribadi, pemberitahuan tertulis paling lambat 3 × 24 jam kepada subjek data dan lembaga."],
    [["Fase NIST incident response?", "Preparation; Detection & Analysis; Containment, Eradication & Recovery; Post-Incident Activity."]]);

  C("cloud", "bucket penyimpanan yang terbuka",
    "Pemindaian konfigurasi menemukan bucket cloud berisi ekspor laporan pelanggan dapat dibaca publik.", "",
    ["Tutup akses publik segera (block public access).", "Cek log akses untuk melihat apakah sudah diunduh pihak lain.", "Terapkan least privilege IAM: aplikasi hanya punya izin baca/tulis ke prefix tertentu.", "Aktifkan enkripsi, versioning, dan logging.", "Tambahkan pengecekan IaC (Terraform) dan pemindaian rahasia di pipeline CI."],
    ["Kunci akses cloud di repo publik.", "Satu akun root dipakai sehari-hari.", "Mengira penyedia cloud bertanggung jawab atas semua keamanan."],
    ["Apa itu shared responsibility model?", "Contoh DevSecOps di pipeline?", "Risiko keamanan pada aplikasi AI/LLM?"],
    ["Penyedia mengamankan infrastruktur fisik dan layanan dasar; pelanggan mengamankan konfigurasi, data, identitas, dan aplikasi.", "SAST, pemindaian dependensi, pemindaian rahasia, dan cek IaC sebelum deploy.", "Prompt injection, kebocoran data sensitif lewat prompt, dan keluaran model yang langsung dieksekusi tanpa validasi."],
    [["Kenapa role sementara lebih baik dari kunci akses permanen?", "Kredensial kedaluwarsa otomatis sehingga dampak kebocoran lebih kecil."]]);

  C("privasi", "menilai risiko aplikasi pendaftaran pelanggan",
    "Toko membuat formulir pendaftaran member berisi nama, email, nomor HP, tanggal lahir, dan foto KTP.", "",
    ["Minimisasi: apakah foto KTP benar-benar perlu? Bila hanya untuk verifikasi umur, cukup tanggal lahir.", "Tentukan dasar pemrosesan dan tulis kebijakan privasi yang jelas.", "Tetapkan masa simpan dan cara penghapusan.", "Batasi akses data ke staf yang perlu; enkripsi data sensitif.", "Catat risiko di register: kemungkinan, dampak, pemilik, tindakan."],
    ["Mengumpulkan data 'siapa tahu nanti perlu'.", "Persetujuan tersembunyi di syarat panjang.", "Tidak ada prosedur bila pelanggan minta datanya dihapus."],
    ["Hak subjek data menurut UU PDP (sebutkan 3)?", "Apa itu DPIA?", "Beda risiko inheren dan residual?"],
    ["Hak akses, hak memperbaiki, hak menghapus (juga menarik persetujuan dan keberatan atas keputusan otomatis).", "Data Protection Impact Assessment: penilaian dampak untuk pemrosesan berisiko tinggi.", "Inheren sebelum kendali; residual sisa risiko setelah kendali diterapkan."],
    [["Apa itu GRC?", "Governance, Risk, Compliance: tata kelola, manajemen risiko, dan kepatuhan."]]);

  C("kerjacyber", "rencana belajar 6 bulan menuju analis SOC junior",
    "Anda lulusan Teknik Informatika yang ingin masuk dunia keamanan siber.", "",
    ["Bulan 1–2: jaringan (TCP/IP, DNS, HTTP), Linux, dan Windows dasar.", "Bulan 3: log dan SIEM (Splunk/Elastic gratis), membaca peringatan.", "Bulan 4: room blue team di TryHackMe/LetsDefend, tulis catatan.", "Bulan 5: sertifikasi dasar (misalnya CompTIA Security+ atau setara) bila memungkinkan.", "Bulan 6: portofolio — laporan investigasi lab, aturan deteksi, dan writeup; mulai melamar."],
    ["Mengumpulkan sertifikat tanpa praktik.", "Hanya belajar alat ofensif padahal lowongan junior banyak di blue team.", "Writeup yang membocorkan jawaban mesin aktif (melanggar aturan platform)."],
    ["Apa isi portofolio blue team?", "Peran keamanan apa yang cocok untuk latar Data Analyst?", "Komunitas yang bisa diikuti?"],
    ["Laporan investigasi insiden lab, kueri SIEM, dashboard deteksi, dan analisis log.", "Analis SOC, threat intelligence, atau security data analyst.", "Komunitas CTF kampus, forum keamanan lokal, dan acara keamanan siber nasional."],
    [["Kenapa keterampilan komunikasi penting di keamanan?", "Temuan harus dijelaskan ke orang non-teknis agar diperbaiki."]]);

  /* ======================= Lab Siber (10 bab) ======================= */
  const L = kasus(MATERI_SIBER);
  L("biner", "konversi tanpa kalkulator",
    "Ubah 173 ke biner, heksadesimal, lalu kembalikan.",
R`173 = 128 + 32 + 8 + 4 + 1
bit:   128 64 32 16  8  4  2  1
        1   0  1  0  1  1  0  1   → 1010 1101
1010 = A, 1101 = D                → 0xAD
cek: A×16 + D = 10×16 + 13 = 173`,
    ["Tulis nilai posisi 128 … 1.", "Kurangi dari yang terbesar: 173 − 128 = 45, 45 − 32 = 13, 13 − 8 = 5, 5 − 4 = 1, 1 − 1 = 0.", "Kelompokkan 4 bit untuk heksadesimal.", "Cek balik dengan perkalian posisi."],
    ["Lupa angka 0 di posisi kosong.", "Membaca kelompok 4 bit dari arah salah.", "Menyamakan 0x10 dengan 10."],
    ["Ubah 0x3F ke desimal.", "Ubah 200 ke biner.", "Berapa nilai maksimal 1 byte?"],
    ["3 × 16 + 15 = 63.", "1100 1000.", "255 (1111 1111)."]);

  L("subnet", "membagi /24 untuk empat divisi",
    "Jaringan 192.168.10.0/24 dibagi rata untuk 4 divisi.",
R`/24 → /26 (pinjam 2 bit: 2² = 4 subnet)
blok = 256 − 192 = 64
1) 192.168.10.0/26    host .1–.62    broadcast .63
2) 192.168.10.64/26   host .65–.126  broadcast .127
3) 192.168.10.128/26  host .129–.190 broadcast .191
4) 192.168.10.192/26  host .193–.254 broadcast .255`,
    ["Hitung bit yang dipinjam: 4 subnet → 2 bit → /26.", "Mask /26 = 255.255.255.192; ukuran blok 64.", "Host per subnet = 2⁶ − 2 = 62.", "Daftar alamat jaringan, rentang host, dan broadcast."],
    ["Lupa mengurangi 2 alamat (jaringan dan broadcast).", "Salah ukuran blok.", "Menganggap .64 sebagai host di subnet pertama."],
    ["Butuh 30 host per subnet. Prefix?", "Alamat 192.168.10.150/26 masuk subnet mana?", "Mask /28 dalam desimal?"],
    ["/27 (32 − 2 = 30 host).", "192.168.10.128/26.", "255.255.255.240."]);

  L("port", "mengenali layanan dari port",
    "Hasil pemindaian lab: 21, 22, 25, 53, 80, 110, 143, 443, 3306, 3389.", "",
    ["21 FTP, 22 SSH, 25 SMTP, 53 DNS.", "80 HTTP, 443 HTTPS.", "110 POP3, 143 IMAP.", "3306 MySQL, 3389 RDP.", "Tandai yang berisiko bila terbuka ke internet: FTP (tanpa enkripsi), MySQL, RDP."],
    ["Mengira port menentukan layanan secara pasti (layanan bisa dipasang di port lain).", "Lupa DNS juga memakai UDP.", "Membuka port database ke publik."],
    ["Port 8080 biasanya apa?", "Port aman untuk SMTP kirim dengan TLS?", "Kenapa RDP sering diserang?"],
    ["HTTP alternatif atau proxy/aplikasi web.", "587 (submission dengan STARTTLS) atau 465 (TLS langsung).", "Sering terbuka ke internet dan menjadi pintu masuk ransomware lewat password lemah."]);

  L("http", "membaca percakapan HTTP",
    "Anda melihat permintaan login dan responsnya di DevTools.",
R`POST /login HTTP/1.1
Host: app.contoh
Content-Type: application/x-www-form-urlencoded

email=a%40b.com&password=...

HTTP/1.1 302 Found
Location: /dashboard
Set-Cookie: sesi=9f2c...; HttpOnly; Secure; SameSite=Lax`,
    ["Metode POST mengirim data di badan.", "%40 adalah @ yang di-URL-encode.", "302 mengarahkan ke dashboard setelah sukses.", "Set-Cookie membuat sesi dengan flag aman."],
    ["Mengira HTTPS menyembunyikan URL dari server (server tetap melihat).", "Mengira 200 selalu berarti sukses login.", "Mengirim password lewat GET (masuk log dan riwayat)."],
    ["Arti 401 vs 403?", "Kode untuk 'terlalu banyak permintaan'?", "Header apa yang memberi tahu jenis isi?"],
    ["401 belum terautentikasi; 403 sudah dikenal tapi tidak berhak.", "429 Too Many Requests.", "Content-Type."]);

  L("encoding", "membedakan encoding, enkripsi, dan hash",
    "Anda menemukan string 'SGFsbw==' di cookie.",
R`echo "SGFsbw==" | base64 -d        # Halo
echo -n "Halo" | xxd -p              # 48616c6f (hex)
python3 -c "import urllib.parse as u; print(u.quote('a b&c'))"   # a%20b%26c`,
    ["Base64 bisa dibalik siapa saja: bukan perlindungan.", "Hex menampilkan byte sebagai pasangan karakter 0–9a–f.", "URL encoding mengganti karakter khusus dengan %XX.", "Data sensitif di cookie harus ditandatangani atau dienkripsi, bukan sekadar di-encode."],
    ["Menyebut Base64 sebagai 'enkripsi'.", "Menyimpan peran pengguna di cookie Base64 tanpa tanda tangan (bisa diubah).", "Lupa padding = di Base64."],
    ["Encode 'Hi' ke Base64.", "Berapa panjang Base64 dari 3 byte?", "Kenapa JWT bisa dibaca tapi tetap aman dari perubahan?"],
    ["SGk=.", "4 karakter.", "Header dan payload hanya Base64URL, tapi tanda tangannya membuat perubahan terdeteksi (selama algoritma dan kunci diperiksa dengan benar)."]);

  L("hash", "memverifikasi file unduhan",
    "Situs resmi menerbitkan SHA-256 untuk file installer. Anda ingin memastikan file tidak rusak atau diganti.",
R`# Linux/macOS
sha256sum installer.iso
# Windows PowerShell
Get-FileHash .\installer.iso -Algorithm SHA256`,
    ["Hitung hash file yang diunduh.", "Bandingkan dengan hash dari situs resmi (lewat HTTPS).", "Beda satu karakter berarti file berbeda.", "Lebih kuat lagi: verifikasi tanda tangan GPG dari pengembang."],
    ["Mengambil hash dari tempat yang sama dengan file palsu.", "Memakai MD5 untuk keamanan (rentan tabrakan).", "Hanya membandingkan beberapa karakter awal."],
    ["Panjang hex SHA-256?", "Panjang hex MD5?", "Apa itu tabrakan hash?"],
    ["64 karakter (256 bit).", "32 karakter (128 bit).", "Dua masukan berbeda menghasilkan hash yang sama."]);

  L("chmod", "mengatur izin file konfigurasi",
    "File config.env berisi password database dan saat ini berizin 644.",
R`ls -l config.env          # -rw-r--r--  semua bisa membaca
chmod 600 config.env      # -rw-------  hanya pemilik
chown app:app config.env
chmod 750 skrip.sh        # rwxr-x---  pemilik penuh, grup baca+jalankan`,
    ["Baca izin: pemilik, grup, lainnya.", "r = 4, w = 2, x = 1; jumlahkan per kelompok.", "File rahasia: 600 dan dimiliki pengguna aplikasi.", "Direktori butuh x agar bisa dimasuki."],
    ["chmod 777 agar 'pasti jalan'.", "Lupa izin direktori induk.", "Mengubah pemilik ke root lalu aplikasi tidak bisa membaca."],
    ["Angka untuk rwxr-xr--?", "Arti chmod u+x?", "Izin 640 artinya?"],
    ["754.", "Menambah izin jalankan untuk pemilik.", "Pemilik baca-tulis, grup baca, lainnya tidak ada."]);

  L("sandi", "memecahkan sandi Caesar dan XOR sederhana",
    "Pesan 'NRGH' dienkripsi Caesar. Pesan lain dienkripsi XOR satu byte.",
R`def caesar(t, k):
    return "".join(chr((ord(c) - 65 - k) % 26 + 65) for c in t)
for k in range(26):
    print(k, caesar("NRGH", k))      # k=3 → KODE

b = bytes([0x2a ^ 0x41, 0x2a ^ 0x42])     # contoh XOR kunci 0x2a
print(bytes(x ^ 0x2a for x in b))         # b'AB'`,
    ["Caesar hanya punya 26 kunci: coba semua (brute force).", "Cari hasil yang bermakna: k = 3 → KODE.", "XOR dengan kunci yang sama mengembalikan teks asli (a ^ k ^ k = a).", "Sandi klasik ini untuk belajar, bukan untuk melindungi data."],
    ["Lupa modulo 26 untuk huruf di ujung alfabet.", "Mengira XOR satu byte aman.", "Memakai ulang kunci one-time pad."],
    ["Enkripsi 'ABC' dengan Caesar k = 1.", "5 XOR 3 = ?", "Kenapa analisis frekuensi memecahkan substitusi?"],
    ["BCD.", "6 (101 XOR 011 = 110).", "Huruf tertentu (seperti A dan N dalam bahasa Indonesia) lebih sering muncul dan polanya tetap terlihat."]);

  L("entropi", "membandingkan kekuatan password",
    "Bandingkan 'P@ssw0rd!' dengan passphrase 4 kata acak dari daftar 7.776 kata.", "",
    ["Entropi acak = panjang × log₂(ukuran himpunan).", "Passphrase 4 kata: 4 × log₂(7.776) ≈ 4 × 12,9 = 51,7 bit.", "'P@ssw0rd!' terlihat rumit tapi ada di daftar bocoran → praktis 0 bit karena langsung ditebak.", "Password acak 12 karakter dari 94 simbol ≈ 12 × 6,55 = 78,7 bit.", "Panjang dan keacakan lebih penting dari substitusi huruf."],
    ["Menghitung entropi dari pola manusia seperti acak.", "Mengira mengganti a → @ menambah banyak kekuatan.", "Memakai satu passphrase untuk banyak situs."],
    ["Entropi PIN 6 digit acak?", "Berapa kombinasi untuk 40 bit?", "Kata ditambah 1 menjadi 5 kata: entropi?"],
    ["6 × log₂(10) ≈ 19,9 bit.", "2⁴⁰ ≈ 1,1 triliun.", "≈ 64,6 bit."]);

  L("waktu", "menyelaraskan waktu log dari tiga sistem",
    "Log firewall memakai UTC, server web WIB (UTC+7), dan aplikasi menyimpan epoch.",
R`firewall : 2026-11-28T03:15:00Z
web      : 28/Nov/2026:10:15:04 +0700
aplikasi : 1795835704

python3 -c "import datetime as d; print(d.datetime.fromtimestamp(1795835704, d.timezone.utc))"
# 2026-11-28 03:15:04+00:00`,
    ["Ubah semua ke UTC.", "10:15 WIB = 03:15 UTC.", "Epoch = detik sejak 1970-01-01 UTC; konversi dengan zona UTC.", "Urutkan kejadian: firewall 03:15:00, web dan aplikasi 03:15:04.", "Pastikan semua server memakai NTP agar jam tidak bergeser."],
    ["Mencampur zona waktu sehingga urutan serangan salah.", "Mengira epoch dalam milidetik padahal detik (atau sebaliknya).", "Format tanggal ambigu 03/11 (Maret atau November)."],
    ["12:00 WITA berapa UTC?", "Epoch 0 itu kapan?", "Format tanggal yang tidak ambigu?"],
    ["04:00 UTC (WITA = UTC+8).", "1970-01-01 00:00:00 UTC.", "ISO 8601, misalnya 2026-11-28T03:15:00Z."]);
})();
