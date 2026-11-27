# Membuat js/soal/soal-siber.js: ratusan soal hitung cyber security (topik "Lab Hitung Siber").
# Setiap kunci dihitung dua cara: langkah manual yang ditulis di pembahasan, lalu dicocokkan
# dengan pustaka Python (ipaddress, base64, hashlib, stat, urllib, codecs, datetime, http).
# Kalau keduanya berbeda, skrip berhenti (assert). Urutan acak memakai benih tetap,
# jadi menjalankan ulang menghasilkan soal dan ID yang sama.
#
# Pakai:  python alat/buat-soal-siber.py      (dari folder KUIS-KODING)
import base64, codecs, hashlib, http, ipaddress, json, math, os, random, stat, subprocess, sys, urllib.parse
from datetime import datetime, timedelta, timezone

R = random.Random(int(os.environ.get("SIBER_SEED", 20261120)))   # benih lain dipakai putaran tambahan (lihat bawah)
SOAL, LIHAT = [], set()
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")


def koma(x, d=2): return f"{x:.{d}f}".replace(".", ",")  # angka desimal gaya Indonesia
def ilmiah(x):
    m, e = f"{x:.2e}".split("e")
    return f"{m.replace('.', ',')} × 10^{int(e)}"


def E(inti, poin, langkah, ingat):
    return "\n".join([inti] + ["• " + p for p in poin] + [f"{i}. {s}" for i, s in enumerate(langkah, 1)] + ["Ingat: " + ingat])


def mc(k, lv, q, benar, salah, e, h=None, kode=None):
    """salah = daftar (opsi, alasan). Opsi kembar dibuang; minimal 1 pengecoh."""
    opsi, w = [benar], [None]
    for o, a in salah:
        if o not in opsi:
            opsi.append(o); w.append(a)
    opsi, w = opsi[:4], w[:4]
    assert len(opsi) >= 2, q
    kunci = q + chr(10) + (kode or "")  # soal hash: teks sama, isi kode berbeda
    if kunci in LIHAT: return
    LIHAT.add(kunci)
    s = {"k": k, "t": "mc", "lv": lv, "q": q, "o": opsi, "a": 0, "e": e, "w": w}
    if kode: s["kode"] = kode
    if h: s["h"] = h
    SOAL.append(s)


def isian(k, lv, q, jawab, e, h=None):
    if q in LIHAT: return
    LIHAT.add(q)
    s = {"k": k, "t": "is", "lv": lv, "q": q, "a": list(dict.fromkeys(jawab)), "e": e}
    if h: s["h"] = h
    SOAL.append(s)


# ---------------------------------------------------------------- 1. biner, desimal, heksa
NILAI = [128, 64, 32, 16, 8, 4, 2, 1]

def ke_biner(n):  # cara manual: kurangi nilai tempat terbesar yang muat
    bit, sisa, catat = "", n, []
    for v in NILAI:
        if sisa >= v:
            bit += "1"; catat.append(f"{v} muat (sisa {sisa - v})"); sisa -= v
        else:
            bit += "0"
    return bit, catat

for n in R.sample(range(1, 256), 26):
    b, catat = ke_biner(n)
    assert b == format(n, "08b")
    isian("biner", 1, f"Ubah bilangan desimal {n} menjadi biner 8 bit (misal oktet alamat IP).", [b, b.lstrip("0") or "0"],
          E(f"Jawaban: {b}.", ["Nilai tempat 8 bit dari kiri: 128, 64, 32, 16, 8, 4, 2, 1.",
             "Isi 1 jika nilai tempat itu masih muat dikurangkan dari sisa, isi 0 jika tidak.",
             "Satu oktet IPv4 selalu 8 bit, jadi tulis lengkap dengan angka 0 di depan."],
            [f"Mulai dari {n}: " + "; ".join(catat) + ".", f"Tandai posisi yang dipakai dengan 1, sisanya 0: {b}.",
             f"Periksa: jumlahkan nilai tempat yang bernilai 1 = {n}."],
            "kurangi dari nilai tempat terbesar: 128, 64, 32, 16, 8, 4, 2, 1."))
for n in R.sample(range(1, 256), 22):
    b = format(n, "08b")
    dipakai = [str(v) for v, x in zip(NILAI, b) if x == "1"]
    assert sum(map(int, dipakai)) == int(b, 2) == n
    isian("biner", 1, f"Ubah biner {b} menjadi desimal.", [str(n)],
          E(f"Jawaban: {n}.", ["Setiap posisi bit punya nilai tempat 128, 64, 32, 16, 8, 4, 2, 1.",
             "Bit 1 berarti nilai tempat itu dihitung, bit 0 berarti tidak.",
             "Kemampuan ini dipakai saat membaca subnet mask dan oktet IP."],
            [f"Tulis nilai tempat di bawah setiap bit {b}.", f"Ambil yang bernilai 1: {' + '.join(dipakai)}.", f"Jumlahkan: {n}."],
            "jumlahkan nilai tempat yang bitnya 1."))
HEKSA = "0123456789ABCDEF"
for n in R.sample(range(16, 256), 22):
    hx = format(n, "02X"); a, b = n // 16, n % 16
    assert int(hx, 16) == a * 16 + b == n
    isian("biner", 2, f"Ubah heksadesimal 0x{hx} menjadi desimal.", [str(n)],
          E(f"Jawaban: {n}.", ["Digit heksa 0–9 lalu A=10, B=11, C=12, D=13, E=14, F=15.",
             "Dua digit heksa = digit kiri × 16 + digit kanan.", "Heksa sering muncul di dump memori, hash, dan alamat MAC."],
            [f"Pisahkan digit: {hx[0]} dan {hx[1]}.", f"Ubah ke nilai: {a} dan {b}.", f"Hitung {a} × 16 + {b} = {n}."],
            "dua digit heksa = satu byte (0–255)."))
for n in R.sample(range(16, 256), 16):
    hx = format(n, "02X"); a, b = divmod(n, 16)
    assert HEKSA[a] + HEKSA[b] == hx
    isian("biner", 2, f"Ubah desimal {n} menjadi heksadesimal (dua digit).", [hx, hx.lower(), "0x" + hx.lower()],
          E(f"Jawaban: {hx} (ditulis juga 0x{hx}).", ["Bagi dengan 16: hasil bagi = digit kiri, sisa = digit kanan.",
             "Nilai 10–15 ditulis A–F.", "Satu byte selalu dua digit heksa."],
            [f"{n} ÷ 16 = {a} sisa {b}.", f"Ubah ke digit heksa: {HEKSA[a]} dan {HEKSA[b]}.", f"Gabungkan: {hx}."],
            "hasil bagi 16 di kiri, sisanya di kanan."))

# ---------------------------------------------------------------- 2. subnetting
def jaringan_manual(ip, p):
    ok = list(map(int, ip.split(".")))
    i = p // 8
    if p % 8 == 0:
        net = ok[:i] + [0] * (4 - i); brd = ok[:i] + [255] * (4 - i); blok = None
    else:
        blok = 2 ** (8 - p % 8)
        awal = ok[i] // blok * blok
        net = ok[:i] + [awal] + [0] * (3 - i); brd = ok[:i] + [awal + blok - 1] + [255] * (3 - i)
    return ".".join(map(str, net)), ".".join(map(str, brd)), i, blok

def acak_ip():
    blok = R.choice(["10", "172", "192"])
    if blok == "10": return f"10.{R.randint(0,255)}.{R.randint(0,255)}.{R.randint(1,254)}"
    if blok == "172": return f"172.{R.randint(16,31)}.{R.randint(0,255)}.{R.randint(1,254)}"
    return f"192.168.{R.randint(0,255)}.{R.randint(1,254)}"

def mask(p): return str(ipaddress.ip_network(f"0.0.0.0/{p}").netmask)

def langkah_blok(ip, p, i, blok, net):
    if blok is None:
        return [f"/{p} adalah batas oktet: {p // 8} oktet pertama untuk jaringan.", f"Oktet sisanya dinolkan: {net}."]
    ok = ip.split(".")
    return [f"Subnet mask /{p} = {mask(p)}; oktet yang 'menarik' adalah oktet ke-{i + 1} (nilai mask {mask(p).split('.')[i]}).",
            f"Ukuran blok = 256 − {mask(p).split('.')[i]} = {blok}.",
            f"Oktet ke-{i + 1} IP adalah {ok[i]}; kelipatan {blok} terdekat di bawahnya adalah {int(ok[i]) // blok * blok}.",
            f"Alamat jaringan = {net}."]

for _ in range(34):
    p = R.choice([20, 22, 23, 25, 26, 27, 28, 29, 30, 24, 21, 19])
    ip = acak_ip(); net, brd, i, blok = jaringan_manual(ip, p)
    n = ipaddress.ip_network(f"{ip}/{p}", strict=False)
    assert (net, brd) == (str(n.network_address), str(n.broadcast_address)), (ip, p)
    if ip in (net, brd): continue
    ok = ip.split(".")
    nol = ".".join(ok[:3] + ["0"]) if p > 24 else ".".join(ok[:2] + ["0", "0"])
    tetangga = str(ipaddress.ip_network(f"{net}/{p}").network_address + n.num_addresses) if int(n.broadcast_address) < 2**32 - n.num_addresses else None
    salah = [(brd, "Ini alamat broadcast (alamat terakhir blok), bukan alamat pertamanya."),
             (nol, f"Ini hasil mengenolkan oktet terakhir seolah-olah prefiksnya {'/24' if p > 24 else '/16'}, padahal prefiksnya /{p}."),
             (ip, "Itu alamat host yang ditanyakan; alamat jaringan adalah alamat pertama blok.")]
    if tetangga: salah.append((tetangga, "Ini alamat jaringan blok berikutnya; IP yang ditanyakan berada di blok sebelumnya."))
    mc("subnet", 2 if p >= 24 else 3, f"Alamat jaringan (network address) dari {ip}/{p} adalah…", net, salah,
       E(f"Jawaban: {net}.", ["Alamat jaringan = alamat pertama blok; semua bit host bernilai 0.",
          "Ukuran blok = 256 − nilai mask pada oktet yang tidak 0 dan tidak 255.", f"Blok ini berakhir di broadcast {brd}."],
         langkah_blok(ip, p, i, blok, net), "cari kelipatan ukuran blok yang tidak melebihi oktet IP."))

for _ in range(30):
    p = R.choice([20, 22, 23, 25, 26, 27, 28, 29, 21, 19, 24])
    ip = acak_ip(); net, brd, i, blok = jaringan_manual(ip, p)
    n = ipaddress.ip_network(f"{ip}/{p}", strict=False)
    assert brd == str(n.broadcast_address)
    if ip in (net, brd): continue
    pertama = str(n.network_address + 1); terakhir = str(n.broadcast_address - 1)
    langkah = langkah_blok(ip, p, i, blok, net) + [f"Broadcast = alamat sebelum blok berikutnya: {brd}."]
    mc("subnet", 2 if p >= 24 else 3, f"Alamat broadcast dari jaringan tempat {ip}/{p} berada adalah…", brd,
       [(net, "Ini alamat jaringan (alamat pertama blok)."), (terakhir, "Ini host terakhir yang bisa dipakai, satu sebelum broadcast."),
        (".".join(ip.split(".")[:3] + ["255"]), f"Ini broadcast jika prefiksnya /24, padahal prefiksnya /{p}.")],
       E(f"Jawaban: {brd}.", ["Broadcast = alamat terakhir blok; semua bit host bernilai 1.",
          "Paket ke alamat broadcast diterima semua host di subnet itu.", f"Host yang bisa dipakai: {pertama} sampai {terakhir}."],
         langkah, "broadcast = alamat jaringan + ukuran blok − 1."))

for p in range(16, 31):
    host = 2 ** (32 - p) - 2
    assert host == ipaddress.ip_network(f"10.0.0.0/{p}").num_addresses - 2
    isian("subnet", 1 if p >= 24 else 2, f"Berapa jumlah host yang bisa dipakai pada subnet /{p}?", [str(host), f"{host:,}".replace(",", ".")],
          E(f"Jawaban: {host:,}".replace(",", ".") + ".", [f"Bit host = 32 − {p} = {32 - p}.", "Jumlah alamat = 2 pangkat jumlah bit host.",
             "Dua alamat tidak bisa dipakai host: alamat jaringan dan broadcast."],
            [f"Hitung bit host: 32 − {p} = {32 - p}.", f"Hitung alamat: 2^{32 - p} = {2 ** (32 - p):,}".replace(",", ".") + ".",
             f"Kurangi 2: {host:,}".replace(",", ".") + "."], "host = 2^(32 − prefix) − 2."))
    m = mask(p)
    isian("subnet", 1 if p % 8 == 0 else 2, f"Tuliskan subnet mask untuk prefiks /{p}.", [m],
          E(f"Jawaban: {m}.", [f"/{p} berarti {p} bit pertama bernilai 1.", "Setiap 8 bit membentuk satu oktet; 8 bit 1 = 255.",
             "Oktet yang hanya sebagian berisi 1 dihitung dari nilai tempat 128, 64, 32, …"],
            [f"Hitung oktet penuh: {p} ÷ 8 = {p // 8} oktet bernilai 255" + (f", sisa {p % 8} bit." if p % 8 else "."),
             f"Sisa bit diubah ke desimal: {sum(NILAI[:p % 8])}." if p % 8 else "Tidak ada sisa bit.",
             f"Susun keempat oktet: {m}."], "nilai sebagian oktet: 128, 192, 224, 240, 248, 252, 254."))
    isian("subnet", 2, f"Subnet mask {m} sama dengan prefiks / berapa?", [str(p), f"/{p}"],
          E(f"Jawaban: /{p}.", ["Prefiks = jumlah bit 1 di subnet mask.", "255 = 8 bit 1; 0 = tidak ada bit 1.",
             "Nilai sebagian: 128=1, 192=2, 224=3, 240=4, 248=5, 252=6, 254=7 bit."],
            [f"Pecah mask per oktet: {m}.", "Hitung bit 1 di setiap oktet.", f"Jumlahkan: {p}."], "hitung bit 1, bukan angkanya."))

for _ in range(26):
    p = R.choice([25, 26, 27, 28, 29, 23, 22])
    a = acak_ip(); n = ipaddress.ip_network(f"{a}/{p}", strict=False)
    sama = R.random() < 0.5
    if sama:
        b = str(n.network_address + R.randint(1, n.num_addresses - 2))
    else:
        geser = n.num_addresses * R.choice([1, -1])
        if int(n.network_address) + geser < 0: geser = n.num_addresses
        b = str(ipaddress.ip_address(int(n.network_address) + geser + R.randint(1, n.num_addresses - 2)))
    if b == a: continue
    nb = ipaddress.ip_network(f"{b}/{p}", strict=False)
    assert (nb == n) == sama
    benar = f"Ya, keduanya di {n}" if sama else f"Tidak: {a} di {n}, sedangkan {b} di {nb}"
    salahnya = (f"Tidak, karena alamatnya berbeda", "Alamat berbeda tetap bisa satu subnet; yang menentukan adalah alamat jaringannya.") if sama \
        else (f"Ya, karena tiga oktet pertamanya mirip", "Kemiripan oktet tidak cukup; hitung alamat jaringan masing-masing dengan prefiks yang sama.")
    mc("subnet", 3, f"Apakah {a} dan {b} berada di subnet /{p} yang sama?", benar, [salahnya],
       E(f"Jawaban: {'ya' if sama else 'tidak'}. {a} → {n}; {b} → {nb}.",
         ["Dua alamat satu subnet jika alamat jaringannya sama pada prefiks yang sama.", f"Ukuran blok /{p} = {n.num_addresses} alamat.",
          "Router dibutuhkan untuk menghubungkan host di subnet berbeda."],
         [f"Hitung alamat jaringan {a}/{p}: {n.network_address}.", f"Hitung alamat jaringan {b}/{p}: {nb.network_address}.",
          f"Bandingkan: {'sama' if sama else 'berbeda'}."], "bandingkan alamat jaringannya, bukan kemiripan angkanya."))

# ---------------------------------------------------------------- 3. port & layanan
PORT = [(20, "FTP (data)", "FTP mengirim password tanpa enkripsi; pakai SFTP."), (21, "FTP (kontrol)", "FTP mengirim password tanpa enkripsi; pakai SFTP."),
        (22, "SSH", "Sasaran brute force; pakai kunci SSH dan matikan login root."), (23, "Telnet", "Semua teks termasuk password terkirim tanpa enkripsi; ganti dengan SSH."),
        (25, "SMTP", "Server email terbuka (open relay) bisa disalahgunakan untuk spam."), (53, "DNS", "Resolver terbuka bisa dipakai untuk DDoS amplifikasi."),
        (67, "DHCP (server)", "Server DHCP palsu bisa mengarahkan korban ke gateway penyerang."), (69, "TFTP", "Tanpa autentikasi; jangan dibuka ke internet."),
        (80, "HTTP", "Tanpa enkripsi; alihkan ke HTTPS."), (88, "Kerberos", "Inti autentikasi Active Directory; sasaran serangan tiket."),
        (110, "POP3", "Tanpa enkripsi; gunakan POP3S (995)."), (123, "NTP", "Waktu yang akurat penting untuk log; NTP terbuka bisa dipakai amplifikasi."),
        (143, "IMAP", "Tanpa enkripsi; gunakan IMAPS (993)."), (161, "SNMP", "Community string bawaan 'public' membocorkan informasi perangkat."),
        (389, "LDAP", "Tanpa enkripsi; gunakan LDAPS (636)."), (443, "HTTPS", "HTTP terenkripsi TLS."), (445, "SMB", "Jalur penyebaran WannaCry; jangan dibuka ke internet."),
        (465, "SMTPS (SMTP lewat TLS)", "Pengiriman email terenkripsi."), (514, "Syslog", "Log dikirim tanpa enkripsi secara bawaan."),
        (587, "SMTP submission", "Port pengiriman email dari aplikasi klien, biasanya dengan STARTTLS."), (636, "LDAPS", "LDAP terenkripsi."),
        (853, "DNS over TLS", "DNS terenkripsi."), (993, "IMAPS", "IMAP terenkripsi."), (995, "POP3S", "POP3 terenkripsi."),
        (1433, "Microsoft SQL Server", "Database; jangan dibuka ke internet."), (1521, "Oracle Database", "Database; jangan dibuka ke internet."),
        (1883, "MQTT", "Protokol IoT; sering tanpa autentikasi."), (2049, "NFS", "Berbagi file Unix; batasi klien yang boleh."),
        (3306, "MySQL", "Database; jangan dibuka ke internet."), (3389, "RDP", "Pintu masuk favorit ransomware; tutup atau lindungi dengan VPN + MFA."),
        (5060, "SIP (VoIP)", "Sasaran penipuan panggilan dan pemindaian."), (5432, "PostgreSQL", "Database; jangan dibuka ke internet."),
        (5900, "VNC", "Remote desktop yang sering berpassword lemah."), (6379, "Redis", "Sering terpasang tanpa password; pernah disalahgunakan untuk menulis file."),
        (8080, "HTTP alternatif / proxy", "Sering dipakai panel admin dan server pengembangan."), (8443, "HTTPS alternatif", "Sering dipakai panel admin."),
        (9200, "Elasticsearch", "Banyak kebocoran data karena dibuka tanpa autentikasi."), (27017, "MongoDB", "Banyak kebocoran data karena dibuka tanpa autentikasi.")]
for port, nama, catatan in PORT:
    lain = R.sample([x for x in PORT if x[1] != nama and x[1].split(" ")[0] != nama.split(" ")[0]], 3)
    mc("port", 1 if port < 1024 else 2, f"Port {port} secara default dipakai oleh layanan…", nama,
       [(x[1], f"{x[1]} memakai port {x[0]}.") for x in lain],
       E(f"Jawaban: {nama}.", [catatan, "Port 0–1023 disebut well-known ports dan ditetapkan IANA.",
          "Layanan bisa dipindah ke port lain, jadi pemindai seperti nmap -sV memeriksa jawaban layanannya, bukan hanya nomor port."],
         [f"Ingat kelompok port: 20–25 transfer & remote, 53 DNS, 80/443 web, 3306/5432/1433 database, 3389 RDP.", f"Cocokkan {port} dengan {nama}."],
         "hafalkan port yang paling sering muncul di hasil pemindaian dan log firewall."))
    if nama in ("FTP (data)", "DHCP (server)"): continue
    isian("port", 1 if port < 1024 else 2, f"Nomor port default untuk {nama} adalah…", [str(port)],
          E(f"Jawaban: {port}.", [catatan, "Mengetahui port membantu membaca hasil nmap dan aturan firewall.",
             "Jangan mengandalkan 'port tidak biasa' sebagai pengamanan; pemindai tetap menemukannya."],
            [f"Ingat pasangan {nama} ↔ {port}.", "Tulis angkanya saja."], "port standar adalah bahasa bersama tim jaringan dan keamanan."))

# ---------------------------------------------------------------- 4. kode status HTTP
KODE = {200: "Berhasil", 201: "Sumber daya baru dibuat", 204: "Berhasil tanpa isi balasan", 301: "Dipindahkan permanen (redirect)",
        302: "Dipindahkan sementara (redirect)", 304: "Tidak berubah, pakai salinan cache", 400: "Request tidak valid/rusak",
        401: "Belum terautentikasi (perlu login)", 403: "Dilarang (sudah dikenali tetapi tidak berhak)", 404: "Tidak ditemukan",
        405: "Metode HTTP tidak diizinkan", 408: "Request terlalu lama", 409: "Konflik dengan keadaan sumber daya",
        429: "Terlalu banyak request (rate limit)", 500: "Kesalahan internal server", 502: "Gateway menerima balasan tidak valid",
        503: "Layanan tidak tersedia sementara", 504: "Gateway kehabisan waktu menunggu"}
KELAS = {2: "2xx = berhasil", 3: "3xx = pengalihan", 4: "4xx = kesalahan dari sisi klien", 5: "5xx = kesalahan dari sisi server"}
CATATAN = {401: "Banyak 401 dari satu IP bisa berarti tebak password.", 403: "Banyak 403 bisa berarti seseorang mencoba halaman terlarang.",
           404: "Ratusan 404 dalam waktu singkat menandakan pemindaian direktori.", 429: "Rate limit memperlambat brute force.",
           500: "Lonjakan 500 setelah input aneh bisa menandakan injeksi yang memicu error.", 302: "Open redirect bisa dipakai phishing."}
for kode, arti in KODE.items():
    frasa = http.HTTPStatus(kode).phrase
    lain = R.sample([v for k2, v in KODE.items() if k2 != kode], 3)
    mc("http", 1 if kode in (200, 301, 401, 403, 404, 500) else 2, f"Kode status HTTP {kode} ({frasa}) berarti…", arti,
       [(x, f"Itu arti kode {[k2 for k2, v in KODE.items() if v == x][0]}.") for x in lain],
       E(f"Jawaban: {arti}.", [KELAS[kode // 100] + ".", CATATAN.get(kode, "Kode status membantu membaca log web dan hasil pemindaian."),
          "Nama resmi kode ini: " + frasa + "."],
         ["Lihat digit pertama untuk kelompoknya.", f"Ingat arti spesifik {kode}: {arti.lower()}."],
         "2 berhasil, 3 pindah, 4 salah klien, 5 salah server."))
    if kode in (200, 401, 403, 404, 429, 500, 503, 301, 302):
        isian("http", 2, f"Kode status HTTP untuk '{arti.lower()}' adalah…", [str(kode)],
              E(f"Jawaban: {kode} ({frasa}).", [KELAS[kode // 100] + ".", CATATAN.get(kode, "Kode ini sering muncul di log web."),
                 "Pentester dan analis SOC membaca pola kode status di log untuk menemukan serangan."],
                ["Tentukan kelompoknya dari jenis kejadian.", f"Pilih kode spesifiknya: {kode}."], "401 belum login, 403 tidak berhak."))

# ---------------------------------------------------------------- 5. encoding
B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
def b64_manual(s):
    b = "".join(format(c, "08b") for c in s.encode())
    pad = (-len(b)) % 6
    b += "0" * pad
    hasil = "".join(B64[int(b[i:i + 6], 2)] for i in range(0, len(b), 6))
    return hasil + "=" * ((-len(hasil)) % 4)
KATA = ["hacker", "siber", "admin", "flag", "kunci", "aman", "rahasia", "login", "sandi", "jaringan", "server", "token", "akses", "data",
        "firewall", "patch", "backup", "audit", "log", "root", "shell", "cyber", "topi", "putih", "etis", "lab", "ctf", "pwn", "web", "kode"]
for w in R.sample(KATA, 24):
    enc = base64.b64encode(w.encode()).decode()
    assert enc == b64_manual(w)
    bit = " ".join(format(c, "08b") for c in w[:3].encode())
    isian("encoding", 1, f"Decode Base64 berikut: {enc}", [w],
          E(f"Jawaban: {w}.", ["Base64 adalah encoding, bukan enkripsi: siapa pun bisa mengembalikannya tanpa kunci.",
             "Setiap 4 karakter Base64 mewakili 3 byte; tanda '=' di akhir adalah pengisi (padding).",
             "Ciri Base64: huruf besar-kecil, angka, + dan /, panjang kelipatan 4."],
            ["Kenali formatnya sebagai Base64.", f"Decode dengan alat: echo {enc} | base64 -d (Linux) atau CyberChef 'From Base64'.",
             f"Hasilnya teks: {w}."], "Base64 di cookie atau token bukan pengaman; selalu coba decode saat CTF."))
for w in R.sample(KATA, 20):
    enc = base64.b64encode(w.encode()).decode()
    mirip = base64.b64encode((w[:-1] + chr(ord(w[-1]) + 1)).encode()).decode()
    mc("encoding", 2, f"Hasil encode Base64 dari teks '{w}' adalah…", enc,
       [(mirip, f"Itu Base64 dari '{w[:-1] + chr(ord(w[-1]) + 1)}' (huruf terakhir berbeda)."), (w.encode().hex(), "Itu encoding heksadesimal, bukan Base64."),
        (codecs.encode(w, "rot13"), "Itu ROT13, bukan Base64.")],
       E(f"Jawaban: {enc}.", ["Base64 mengubah setiap 3 byte (24 bit) menjadi 4 karakter (masing-masing 6 bit).",
          f"Tiga huruf pertama dalam biner: {' '.join(format(c, '08b') for c in w[:3].encode())}.", "Panjang hasil selalu kelipatan 4; kurangnya ditambah '='."],
         ["Ubah teks ke byte ASCII lalu ke biner.", "Potong per 6 bit dan cocokkan dengan tabel Base64 (A–Z, a–z, 0–9, +, /).",
          f"Atau pakai alat: echo -n {w} | base64 → {enc}."], "-n pada echo penting; tanpa itu baris baru ikut di-encode."))
for w in R.sample(KATA, 16):
    hx = w.encode().hex(); spasi = " ".join(hx[i:i + 2] for i in range(0, len(hx), 2))
    assert bytes.fromhex(hx).decode() == w and hx == "".join(format(ord(c), "02x") for c in w)
    isian("encoding", 2, f"Ubah byte heksadesimal berikut menjadi teks ASCII: {spasi}", [w],
          E(f"Jawaban: {w}.", ["Setiap 2 digit heksa = 1 byte = 1 karakter ASCII.", "Huruf kecil a–z = 0x61–0x7a; huruf besar A–Z = 0x41–0x5a.",
             "Heksa sering muncul di Wireshark, dump memori, dan tantangan forensik."],
            [f"Pisahkan per byte: {spasi}.", "Cocokkan tiap byte dengan tabel ASCII (misal 0x61 = a).", f"Gabungkan: {w}."], "61 = a, 41 = A, 30 = 0."))
URL = {"'": "%27", " ": "%20", "<": "%3C", ">": "%3E", '"': "%22", "/": "%2F", "=": "%3D", "&": "%26", "#": "%23", ";": "%3B", "%": "%25", "+": "%2B"}
NAMA_KAR = {"'": "tanda kutip tunggal (')", " ": "spasi", "<": "tanda kurang dari (<)", ">": "tanda lebih dari (>)", '"': 'tanda kutip ganda (")',
            "/": "garis miring (/)", "=": "sama dengan (=)", "&": "ampersand (&)", "#": "pagar (#)", ";": "titik koma (;)", "%": "persen (%)", "+": "plus (+)"}
for kar, kode in URL.items():
    assert urllib.parse.quote(kar, safe="") == kode == "%" + format(ord(kar), "02X")
    lain = R.sample([v for k2, v in NAMA_KAR.items() if k2 != kar], 3)
    mc("encoding", 1 if kar in "' <>" else 2, f"Di log web, {kode} adalah hasil URL encoding dari karakter…", NAMA_KAR[kar],
       [(x, f"{x} di-encode menjadi {URL[[k2 for k2, v in NAMA_KAR.items() if v == x][0]]}.") for x in lain],
       E(f"Jawaban: {NAMA_KAR[kar]}.", [f"URL encoding = '%' + kode ASCII heksadesimal; {NAMA_KAR[kar]} = 0x{format(ord(kar), '02X')}.",
          "Penyerang sering meng-encode payload agar lolos penyaring sederhana.", "Saat membaca log, decode dulu sebelum menilai."],
         [f"Ambil angka setelah %: {kode[1:]}.", f"Ubah heksa {kode[1:]} ke desimal: {ord(kar)}.", f"Cocokkan dengan tabel ASCII: {NAMA_KAR[kar]}."],
         "%27 tanda kutip, %20 spasi, %3C <, %3E >."))
PAYLOAD = ["1' OR '1'='1", "<script>alert(1)</script>", "admin'--", "../../etc/passwd", "1; cat /etc/passwd", "\" onmouseover=\"alert(1)", "' UNION SELECT 1,2--", "<img src=x onerror=alert(1)>"]
JENIS = ["SQL injection", "XSS", "SQL injection (komentar --)", "path traversal", "command injection", "XSS (atribut)", "SQL injection (UNION)", "XSS (onerror)"]
for p, j in zip(PAYLOAD, JENIS):
    enc = urllib.parse.quote(p, safe="")
    assert urllib.parse.unquote(enc) == p
    isian("encoding", 3, f"Decode URL berikut dari log web: {enc}", [p],
          E(f"Jawaban: {p}  (pola {j}).", ["Setiap %XX diganti karakter ASCII-nya; teks lain tetap.",
             f"Setelah di-decode, terlihat pola {j}.", "Status 200 di log belum berarti serangan berhasil; periksa ukuran respons dan log aplikasi."],
            ["Ganti %27 → ', %20 → spasi, %3C → <, %3E → >, %3D → =, %2F → /, %22 → \", %3B → ;, %2C → koma.",
             "Baca hasilnya dan kenali polanya.", f"Pola yang terlihat: {j}."], "decode dulu, baru nilai log-nya."))
for w in R.sample(KATA, 16):
    r13 = codecs.encode(w, "rot13")
    assert r13 == "".join(chr((ord(c) - 97 + 13) % 26 + 97) for c in w)
    isian("encoding", 1, f"Teks '{r13}' dibuat dengan ROT13. Teks aslinya adalah…", [w],
          E(f"Jawaban: {w}.", ["ROT13 menggeser setiap huruf 13 posisi; karena alfabet 26 huruf, menerapkannya dua kali mengembalikan teks asli.",
             "ROT13 hanya penyamaran, bukan enkripsi.", "Sering dipakai di tantangan CTF tingkat pemula."],
            ["Geser setiap huruf 13 posisi (a↔n, b↔o, …, m↔z).", f"Hasil: {w}.", f"Periksa: ROT13 dari {w} kembali menjadi {r13}."],
            "ROT13 dua kali = teks semula."))

# ---------------------------------------------------------------- 6. hash
ALGO = [("MD5", hashlib.md5, 128), ("SHA-1", hashlib.sha1, 160), ("SHA-256", hashlib.sha256, 256), ("SHA-512", hashlib.sha512, 512)]
for nama, fn, bit in ALGO:
    for w in R.sample(KATA, 11):
        h = fn(w.encode()).hexdigest()
        assert len(h) == bit // 4
        mc("hash", 2, f"Hash heksadesimal berikut ({len(h)} karakter) paling mungkin dibuat dengan algoritma apa?", nama,
           [(a, f"{a} menghasilkan {b // 4} karakter heksa, bukan {len(h)}.") for a, _, b in ALGO if a != nama],
           E(f"Jawaban: {nama} ({len(h)} karakter heksa = {bit} bit). Isi aslinya adalah hash dari kata '{w}'.",
             [f"Panjang hash tetap: MD5 32, SHA-1 40, SHA-256 64, SHA-512 128 karakter heksa.",
              "Panjang hanya petunjuk: NTLM juga 32 karakter, jadi konteks (sumber data) ikut menentukan.",
              "MD5 dan SHA-1 sudah rusak untuk tanda tangan; untuk password pakai Argon2id/bcrypt."],
             [f"Hitung panjangnya: {len(h)} karakter.", f"Kalikan 4 untuk mendapat jumlah bit: {bit}.", f"Cocokkan: {bit} bit = {nama}."],
             "panjang hash heksa × 4 = jumlah bit."), kode=h)
FORMAT = [("$2b$12$KIXQ5bG3u1r8vJ0w7ZpQ9eWm3kq1TzYx8yq0uXb2GfQ0d4lW7m9Ha", "bcrypt", "Awalan $2b$ (atau $2a$/$2y$) dan angka 12 adalah biaya (cost)."),
          ("$6$saltacak$Qz8f...(dipotong)", "SHA-512 crypt (Linux)", "Awalan $6$ di /etc/shadow berarti SHA-512 crypt."),
          ("$y$j9T$F5Jx2t...(dipotong)", "yescrypt (Linux modern)", "Awalan $y$ dipakai Debian/Ubuntu baru untuk /etc/shadow."),
          ("$argon2id$v=19$m=65536,t=3,p=4$c2FsdA$...(dipotong)", "Argon2id", "Parameter m (memori), t (iterasi), p (paralel) tertulis di dalam hash."),
          ("$1$saltacak$...(dipotong)", "MD5 crypt (lama)", "Awalan $1$ adalah format lama berbasis MD5; sebaiknya diganti."),
          ("$5$saltacak$...(dipotong)", "SHA-256 crypt", "Awalan $5$ berarti SHA-256 crypt.")]
for teks, nama, cat in FORMAT:
    lain = R.sample([x[1] for x in FORMAT if x[1] != nama], 3)
    mc("hash", 2, "Baris hash password berikut memakai skema apa?", nama,
       [(x, f"{x} memakai awalan {[f[0].split('$')[1] for f in FORMAT if f[1] == x][0]}.") for x in lain],
       E(f"Jawaban: {nama}.", [cat, "Format crypt umum: $id$salt$hash; id menunjukkan algoritma.",
          "Algoritma lambat dan bergaram (bcrypt, yescrypt, Argon2id) menyulitkan pemecahan offline."],
         ["Lihat bagian di antara dua tanda $ pertama.", f"Cocokkan id dengan algoritmanya: {nama}."], "baca awalan $id$ untuk mengenali skemanya."), kode=teks)
for bit in (128, 160, 224, 256, 384, 512):
    isian("hash", 1, f"Hash {bit} bit ditulis dalam heksadesimal sepanjang berapa karakter?", [str(bit // 4)],
          E(f"Jawaban: {bit // 4}.", ["Satu karakter heksa mewakili 4 bit.", "Panjang membantu menebak algoritma hash.",
             "Base64 dari hash yang sama lebih pendek karena tiap karakter mewakili 6 bit."],
            [f"Bagi jumlah bit dengan 4: {bit} ÷ 4 = {bit // 4}."], "heksa = 4 bit per karakter."))

# ---------------------------------------------------------------- 7. izin file (chmod)
def simbol(mode):  # manual
    s = ""
    for tri in (mode >> 6 & 7, mode >> 3 & 7, mode & 7):
        s += ("r" if tri & 4 else "-") + ("w" if tri & 2 else "-") + ("x" if tri & 1 else "-")
    return s
UMUM = [0o600, 0o644, 0o640, 0o700, 0o750, 0o755, 0o775, 0o664, 0o660, 0o711, 0o444, 0o400, 0o777, 0o666, 0o705, 0o751, 0o744, 0o770, 0o550, 0o500]
for m in UMUM + [R.randint(0, 0o777) for _ in range(14)]:
    s = simbol(m); assert stat.filemode(stat.S_IFREG | m) == "-" + s
    angka = format(m, "03o")
    isian("chmod", 2, f"Izin file -{s} sama dengan angka oktal…", [angka],
          E(f"Jawaban: {angka}.", ["Kelompok tiga huruf: pemilik, grup, lainnya.", "r = 4, w = 2, x = 1, '-' = 0; jumlahkan per kelompok.",
             "Tanda '-' paling depan hanya jenis file (file biasa)."],
            [f"Pisahkan: {s[:3]} | {s[3:6]} | {s[6:]}.", f"Jumlahkan tiap kelompok: {angka[0]}, {angka[1]}, {angka[2]}.", f"Tulis berurutan: {angka}."],
            "rwx = 7, r-x = 5, r-- = 4, rw- = 6."))
for m in R.sample(UMUM, 16) + [R.randint(0, 0o777) for _ in range(10)]:
    s = simbol(m); angka = format(m, "03o")
    tukar = simbol(int(angka[::-1], 8)) if angka != angka[::-1] else simbol(m ^ 0o111)
    salah = [("-" + tukar, "Urutan kelompoknya terbalik (lainnya ↔ pemilik)." if angka != angka[::-1] else "Bit x (jalankan) tertukar."),
             ("-" + simbol(m ^ 0o222), "Bit w (tulis) tertukar."), ("-" + simbol(m ^ 0o444), "Bit r (baca) tertukar.")]
    mc("chmod", 1 if m in UMUM else 2, f"Setelah chmod {angka} file.txt, izinnya menjadi…", "-" + s, salah,
       E(f"Jawaban: -{s}.", ["Digit pertama untuk pemilik, kedua grup, ketiga lainnya.", "4 = r, 2 = w, 1 = x; misal 6 = 4+2 = rw-.",
          "Izin terlalu longgar (misal 666/777) membuat file bisa diubah siapa saja."],
         [f"Uraikan {angka[0]}: {s[:3]}.", f"Uraikan {angka[1]}: {s[3:6]}.", f"Uraikan {angka[2]}: {s[6:]}."], "pecah setiap digit menjadi 4, 2, 1."))
SPESIAL = [(0o4755, stat.S_IFREG, "SUID: program berjalan dengan hak pemiliknya; berbahaya jika pemiliknya root dan programnya bisa disalahgunakan."),
           (0o2755, stat.S_IFREG, "SGID: program berjalan dengan hak grup pemilik file."),
           (0o1777, stat.S_IFDIR, "Sticky bit di folder (misal /tmp): semua boleh menulis, tetapi hanya pemilik file yang boleh menghapus filenya."),
           (0o4711, stat.S_IFREG, "SUID dengan izin eksekusi saja untuk grup dan lainnya."),
           (0o2770, stat.S_IFDIR, "SGID di folder: file baru mewarisi grup folder."),
           (0o4750, stat.S_IFREG, "SUID yang hanya bisa dijalankan pemilik dan grup.")]
for m, jenis, cat in SPESIAL:
    teks = stat.filemode(jenis | m)
    angka = format(m, "04o")
    salah = [(stat.filemode(jenis | (m & 0o777)), "Ini tanpa bit spesial; huruf s/t hilang."),
             (stat.filemode(jenis | (m & 0o777) | (0o1000 if m & 0o6000 else 0o4000)), "Bit spesialnya tertukar (SUID/SGID/sticky).")]
    mc("chmod", 3, f"Izin dengan angka oktal {angka} ditampilkan ls -l sebagai…", teks, salah,
       E(f"Jawaban: {teks}.", [cat, "Digit depan: 4 = SUID (s di posisi x pemilik), 2 = SGID (s di posisi x grup), 1 = sticky (t di posisi x lainnya).",
          "Huruf kecil s/t berarti bit x juga aktif; huruf besar S/T berarti x tidak aktif."],
         [f"Pisahkan digit spesial {angka[0]} dari {angka[1:]}.", f"Uraikan {angka[1:]} seperti biasa.", "Tempatkan s atau t sesuai digit spesialnya."],
         "pentester mencari file SUID dengan: find / -perm -4000 2>/dev/null."))

# ---------------------------------------------------------------- 8. sandi klasik
def caesar(t, g):
    return "".join(chr((ord(c) - 65 + g) % 26 + 65) if c.isalpha() else c for c in t.upper())
def caesar2(t, g):  # cara kedua untuk memeriksa
    a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return t.upper().translate(str.maketrans(a, a[g % 26:] + a[:g % 26]))
KATA_B = [k.upper() for k in KATA if 3 <= len(k) <= 8]
for w in R.sample(KATA_B, 22):
    g = R.randint(1, 25); c = caesar(w, g)
    assert c == caesar2(w, g) and caesar(c, -g) == w
    isian("sandi", 2, f"Dekripsi sandi Caesar '{c}' dengan kunci geser {g}.", [w],
          E(f"Jawaban: {w}.", ["Dekripsi Caesar = geser mundur sebanyak kunci.", "Melewati A, lanjut dari Z (modulo 26).",
             "Caesar hanya punya 25 kunci; penyerang cukup mencoba semuanya."],
            [f"Geser setiap huruf {c} mundur {g} posisi.", f"Contoh huruf pertama: {c[0]} → {w[0]}.", f"Hasil lengkap: {w}."],
            "rumus: asli = (sandi − kunci) mod 26."))
for w in R.sample(KATA_B, 16):
    g = R.randint(1, 25); c = caesar(w, g)
    isian("sandi", 2, f"Teks asli '{w}' menjadi '{c}' dengan sandi Caesar. Berapa kunci gesernya?", [str(g)],
          E(f"Jawaban: {g}.", ["Selisih posisi huruf asli dan huruf sandi sama untuk semua huruf.", "Posisi: A=0, B=1, …, Z=25.",
             "Ini contoh known-plaintext attack: tahu sepasang teks asli-sandi langsung membongkar kuncinya."],
            [f"Ambil huruf pertama: {w[0]} (posisi {ord(w[0]) - 65}) dan {c[0]} (posisi {ord(c[0]) - 65}).",
             f"Hitung selisih: ({ord(c[0]) - 65} − {ord(w[0]) - 65}) mod 26 = {g}.", "Periksa dengan huruf kedua."], "kunci = (sandi − asli) mod 26."))
for _ in range(16):
    x, k = R.randint(0, 255), R.randint(1, 255); h = x ^ k
    bx, bk, bh = format(x, "08b"), format(k, "08b"), format(h, "08b")
    assert int("".join("1" if a != b else "0" for a, b in zip(bx, bk)), 2) == h
    isian("sandi", 2, f"Hitung 0x{x:02X} XOR 0x{k:02X} (tulis dalam heksadesimal).", [f"{h:02x}", f"0x{h:02x}", f"{h:x}"],
          E(f"Jawaban: 0x{h:02X}.", ["XOR bernilai 1 jika kedua bit berbeda, 0 jika sama.", "XOR dua kali dengan kunci yang sama mengembalikan nilai semula.",
             "XOR adalah dasar banyak cipher dan muncul di hampir setiap CTF kripto."],
            [f"Ubah ke biner: {bx} dan {bk}.", f"Bandingkan per bit: {bh}.", f"Ubah ke heksa: {h:02X}."], "sama = 0, beda = 1."))
for w in R.sample(KATA, 12):
    k = R.randint(1, 31); ct = bytes(c ^ k for c in w.encode())
    assert bytes(c ^ k for c in ct).decode() == w
    isian("sandi", 3, f"Pesan dienkripsi XOR satu byte dengan kunci 0x{k:02X}. Ciphertext (heksa): {ct.hex(' ')}. Apa teks aslinya?", [w],
          E(f"Jawaban: {w}.", ["XOR dengan kunci yang sama membalik enkripsi.", "Kunci satu byte hanya 256 kemungkinan, jadi mudah dicoba semua.",
             "Huruf kecil ASCII berada di 0x61–0x7A; hasil yang terbaca menandakan kunci benar."],
            [f"XOR byte pertama: 0x{ct[0]:02X} ^ 0x{k:02X} = 0x{w.encode()[0]:02X} = '{w[0]}'.", "Ulangi untuk setiap byte.", f"Gabungkan: {w}."],
            "kunci pendek yang diulang adalah kelemahan klasik."))

# ---------------------------------------------------------------- 9. kekuatan password
SET = [(10, "angka 0–9"), (26, "huruf kecil a–z"), (36, "huruf kecil + angka"), (52, "huruf besar + kecil"), (62, "huruf + angka"), (95, "semua karakter cetak (huruf, angka, simbol, spasi)")]
for n, ket in SET[:3]:
    for L in (4, 5, 6):
        total = n ** L
        isian("entropi", 1, f"Berapa jumlah kombinasi password sepanjang {L} karakter yang hanya memakai {ket} ({n} pilihan per karakter)?",
              [str(total), f"{total:,}".replace(",", "."), f"{n}^{L}"],
              E(f"Jawaban: {total:,}".replace(",", ".") + f" ({n}^{L}).", ["Kombinasi = (jumlah pilihan per karakter)^(panjang).",
                 "Menambah panjang menaikkan kombinasi secara eksponensial.", "Password pendek hanya aman jika jumlah percobaan dibatasi."],
                [f"Pilihan per karakter: {n}.", f"Panjang: {L}.", f"Hitung {n}^{L} = {total:,}".replace(",", ".") + "."], "panjang lebih menentukan daripada variasi karakter."))
for n, ket in SET:
    for L in R.sample([8, 10, 12, 14, 16], 3):
        bit = L * math.log2(n)
        assert abs(math.log2(n ** L) - bit) < 1e-9
        bulat = round(bit)
        isian("entropi", 2, f"Password acak {L} karakter dari {ket} ({n} pilihan). Berapa entropinya dalam bit (bulatkan ke bilangan bulat)?",
              [str(bulat)],
              E(f"Jawaban: ±{bulat} bit ({koma(bit, 1)}).", ["Entropi = panjang × log2(jumlah pilihan per karakter).",
                 f"log2({n}) ≈ {koma(math.log2(n))} bit per karakter.", "Rumus ini hanya berlaku untuk password yang benar-benar acak, bukan pilihan manusia."],
                [f"Hitung log2({n}) ≈ {koma(math.log2(n))}.", f"Kalikan dengan {L}: {L} × {koma(math.log2(n))} ≈ {koma(bit, 1)}.", f"Bulatkan: {bulat}."],
                "setiap tambahan 1 bit entropi menggandakan jumlah tebakan."))
SATUAN = [(60, "menit"), (3600, "jam"), (86400, "hari"), (31557600, "tahun")]
def baca(detik):
    if detik < 60: return "kurang dari 1 menit"
    if detik < 3600: return "menit"
    if detik < 86400: return "jam"
    if detik < 31557600: return "hari sampai bulan"
    if detik < 31557600 * 1000: return "tahun sampai ratusan tahun"
    return "lebih dari seribu tahun"
for n, L, laju in [(10, 6, 1e4), (26, 6, 1e9), (26, 8, 1e9), (62, 8, 1e9), (62, 10, 1e10), (95, 8, 1e10), (95, 12, 1e10), (36, 8, 1e9), (10, 8, 1e3), (52, 10, 1e9), (95, 10, 1e11), (26, 12, 1e10), (62, 12, 1e11), (10, 4, 1)]:
    total = n ** L; det = total / laju; benar = baca(det)
    pilihan = ["kurang dari 1 menit", "menit", "jam", "hari sampai bulan", "tahun sampai ratusan tahun", "lebih dari seribu tahun"]
    salah = [(p, f"Hitungan sebenarnya ≈ {det:,.0f} detik, jadi bukan '{p}'.".replace(",", ".")) for p in pilihan if p != benar]
    R.shuffle(salah)
    mc("entropi", 3, f"Penyerang punya hash yang cepat dan bisa mencoba {laju:,.0f} tebakan per detik. Waktu maksimal untuk mencoba SEMUA password acak {L} karakter dari {n} jenis karakter kira-kira…".replace(",", "."),
       benar, salah[:3],
       E(f"Jawaban: {benar} (≈ {det:,.0f} detik).".replace(",", "."), [f"Jumlah kombinasi = {n}^{L} ≈ {ilmiah(total)}.",
          "Waktu = kombinasi ÷ laju tebakan; rata-rata ketemu di separuh waktu itu.", "Hash lambat (bcrypt/Argon2id) menurunkan laju tebakan ribuan kali lipat."],
         [f"Hitung {n}^{L} ≈ {ilmiah(total)}.", f"Bagi dengan {ilmiah(laju)} tebakan/detik ≈ {ilmiah(det)} detik.",
          "Ubah ke satuan: 1 jam = 3.600 detik, 1 hari = 86.400 detik, 1 tahun ≈ 31,6 juta detik."], "panjang dan hash yang lambat sama-sama penting."))
for kata in (3, 4, 5, 6):
    bit = kata * math.log2(7776)
    isian("entropi", 3, f"Passphrase dibuat dari {kata} kata yang dipilih acak dari daftar 7.776 kata (metode diceware). Berapa entropinya dalam bit (bulatkan)?",
          [str(round(bit))],
          E(f"Jawaban: ±{round(bit)} bit.", ["Setiap kata acak dari 7.776 kata memberi log2(7776) ≈ 12,92 bit.",
             "Empat kata acak (±52 bit) setara password 8 karakter acak dari semua karakter cetak (±53 bit), tetapi jauh lebih mudah diingat.",
             "Kuncinya 'acak': kata yang dipilih sendiri (misal nama anak) jauh lebih lemah."],
            [f"Hitung bit per kata: log2(7776) ≈ 12,92.", f"Kalikan {kata}: {kata} × 12,92 ≈ {koma(bit, 1)}.", f"Bulatkan: {round(bit)}."],
            "tambah satu kata acak = tambah ±13 bit."))

# ---------------------------------------------------------------- 10. waktu di log
ZONA = [("WIB", 7), ("WITA", 8), ("WIT", 9)]
for _ in range(30):
    t = datetime(2026, R.randint(1, 12), R.randint(1, 28), R.randint(0, 23), R.choice([0, 5, 10, 15, 20, 30, 40, 45, 50, 55]), tzinfo=timezone.utc)
    nama, jam = R.choice(ZONA)
    lokal = t.astimezone(timezone(timedelta(hours=jam)))
    h_man = (t.hour + jam) % 24; ganti = t.hour + jam >= 24
    assert lokal.hour == h_man and (lokal.day != t.day) == ganti
    hhmm = f"{lokal.hour:02d}:{lokal.minute:02d}"
    tgl = lokal.strftime("%d-%m-%Y")
    isian("waktu", 2 if ganti else 1, f"Log server mencatat {t.strftime('%d-%m-%Y %H:%M')} UTC. Pukul berapa itu dalam {nama} (UTC+{jam})? Tulis jj:mm.",
          [hhmm, hhmm.replace(":", "."), f"{lokal.hour}:{lokal.minute:02d}", f"{lokal.hour}.{lokal.minute:02d}"],
          E(f"Jawaban: {hhmm} {nama}" + (f", dan tanggalnya sudah berganti menjadi {tgl}." if ganti else f" pada tanggal yang sama ({tgl})."),
            [f"{nama} = UTC+{jam}.", "Banyak server dan SIEM mencatat waktu dalam UTC.", "Salah zona waktu bisa membalik urutan kejadian di linimasa insiden."],
            [f"Tambahkan {jam} jam ke {t.strftime('%H:%M')}.", f"Hasil {t.hour} + {jam} = {t.hour + jam}" + (" (lewat 24, jadi kurangi 24 dan tanggal maju satu hari)." if ganti else "."),
             f"Waktu {nama}: {hhmm}."], "WIB +7, WITA +8, WIT +9 dari UTC."))
for _ in range(16):
    ts = R.randint(1600000000, 1800000000)
    dt = datetime.fromtimestamp(ts, timezone.utc)
    hari, sisa = divmod(ts, 86400)
    assert (datetime(1970, 1, 1) + timedelta(days=hari)).date() == dt.date() and sisa == dt.hour * 3600 + dt.minute * 60 + dt.second
    benar = dt.strftime("%d-%m-%Y %H:%M:%S") + " UTC"
    salah = [((dt + timedelta(hours=7)).strftime("%d-%m-%Y %H:%M:%S") + " UTC", "Ini sudah ditambah 7 jam (WIB) tetapi masih diberi label UTC."),
             ((dt + timedelta(days=1)).strftime("%d-%m-%Y %H:%M:%S") + " UTC", "Tanggalnya maju satu hari; periksa lagi pembagian dengan 86.400."),
             ((dt - timedelta(days=365)).strftime("%d-%m-%Y %H:%M:%S") + " UTC", "Tahunnya mundur satu.")]
    mc("waktu", 3, f"Field waktu di log berisi Unix timestamp {ts}. Waktu yang tepat adalah…", benar, salah,
       E(f"Jawaban: {benar}.", ["Unix timestamp = jumlah detik sejak 1 Januari 1970 00:00:00 UTC.", "Satu hari = 86.400 detik.",
          "Di Linux: date -u -d @" + str(ts) + "; di Python: datetime.fromtimestamp(ts, timezone.utc)."],
         [f"Bagi dengan 86.400: {ts} = {hari} hari + {sisa} detik.", f"{hari} hari setelah 1-1-1970 = {dt.strftime('%d-%m-%Y')}.",
          f"{sisa} detik = {dt.strftime('%H:%M:%S')}."], "timestamp selalu UTC; ubah ke WIB dengan +7 jam."))

# ---------------------------------------------------------------- materi
MATERI = [
 ("biner", "Biner, Desimal & Heksadesimal", """<p>Komputer menyimpan semuanya sebagai bit. Analis keamanan membaca biner saat menghitung subnet dan heksadesimal saat membaca hash, dump memori, atau paket di Wireshark.</p>
<table class="mini-pivot"><tr><th>Nilai tempat 8 bit</th><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr>
<tr><th>192 dalam biner</th><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></table>
<ul><li><b>Desimal → biner:</b> kurangi nilai tempat terbesar yang muat, tulis 1; yang tidak muat tulis 0.</li>
<li><b>Biner → desimal:</b> jumlahkan nilai tempat yang bitnya 1.</li>
<li><b>Heksadesimal:</b> 0–9 lalu A–F (10–15). Dua digit = satu byte: <code>0x7F</code> = 7 × 16 + 15 = 127.</li></ul>"""),
 ("subnet", "Subnetting Cepat", """<p>Subnetting dipakai untuk memahami luas jaringan target, membaca aturan firewall, dan merancang segmentasi.</p>
<table class="mini-pivot"><tr><th>Prefiks</th><th>Mask</th><th>Ukuran blok</th><th>Host</th></tr>
<tr><td>/24</td><td>255.255.255.0</td><td>256</td><td>254</td></tr><tr><td>/25</td><td>255.255.255.128</td><td>128</td><td>126</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>64</td><td>62</td></tr><tr><td>/27</td><td>255.255.255.224</td><td>32</td><td>30</td></tr>
<tr><td>/28</td><td>255.255.255.240</td><td>16</td><td>14</td></tr><tr><td>/29</td><td>255.255.255.248</td><td>8</td><td>6</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>4</td><td>2</td></tr></table>
<ol><li>Cari oktet yang mask-nya bukan 0 atau 255, lalu <b>ukuran blok = 256 − nilai mask</b>.</li>
<li><b>Alamat jaringan</b> = kelipatan ukuran blok tepat di bawah oktet IP; oktet berikutnya 0.</li>
<li><b>Broadcast</b> = alamat jaringan + ukuran blok − 1; oktet berikutnya 255.</li>
<li><b>Host</b> = 2<sup>32−prefiks</sup> − 2.</li></ol>
<p>Contoh: 192.168.1.77/26 → blok 64 → kelipatan 64 di bawah 77 adalah 64 → jaringan 192.168.1.64, broadcast 192.168.1.127.</p>"""),
 ("port", "Port & Layanan", """<p>Port memberi tahu layanan apa yang mungkin berjalan. Hasil pemindaian dan log firewall penuh dengan angka ini.</p>
<table class="mini-pivot"><tr><th>Port</th><th>Layanan</th><th>Port</th><th>Layanan</th></tr>
<tr><td>21</td><td>FTP</td><td>443</td><td>HTTPS</td></tr><tr><td>22</td><td>SSH</td><td>445</td><td>SMB</td></tr>
<tr><td>23</td><td>Telnet</td><td>3306</td><td>MySQL</td></tr><tr><td>25</td><td>SMTP</td><td>3389</td><td>RDP</td></tr>
<tr><td>53</td><td>DNS</td><td>5432</td><td>PostgreSQL</td></tr><tr><td>80</td><td>HTTP</td><td>6379</td><td>Redis</td></tr></table>
<p>Nomor port hanya kebiasaan; layanan bisa dipindah. Karena itu pemindai memeriksa jawaban layanannya (<code>nmap -sV</code>), dan "memindah SSH ke port lain" bukan pengamanan yang cukup.</p>"""),
 ("http", "Kode Status HTTP", """<p>Kode status adalah ringkasan jawaban server. Di log web, polanya menceritakan apa yang sedang terjadi.</p>
<table class="mini-pivot"><tr><th>Kelompok</th><th>Arti</th><th>Contoh</th></tr>
<tr><td>2xx</td><td>Berhasil</td><td>200 OK, 201 Created</td></tr><tr><td>3xx</td><td>Pengalihan</td><td>301, 302, 304</td></tr>
<tr><td>4xx</td><td>Kesalahan dari sisi klien</td><td>401 belum login, 403 tidak berhak, 404 tidak ada, 429 terlalu banyak request</td></tr>
<tr><td>5xx</td><td>Kesalahan server</td><td>500, 502, 503, 504</td></tr></table>
<p>Pola mencurigakan: ratusan <b>404</b> dari satu IP (pemindaian direktori), banyak <b>401</b> lalu <b>200</b> (password tertebak), lonjakan <b>500</b> setelah input aneh (injeksi memicu error).</p>"""),
 ("encoding", "Encoding: Base64, Heksa, URL & ROT13", """<p>Encoding hanya mengubah bentuk data; tidak ada kunci dan siapa pun bisa mengembalikannya. Di CTF dan log serangan, langkah pertama sering kali "decode dulu".</p>
<table class="mini-pivot"><tr><th>Encoding</th><th>Ciri</th><th>Contoh</th></tr>
<tr><td>Base64</td><td>A–Z a–z 0–9 + /, panjang kelipatan 4, sering diakhiri =</td><td><code>c2liZXI=</code> → siber</td></tr>
<tr><td>Heksadesimal</td><td>0–9 a–f, dua digit per byte</td><td><code>68 61 63 6b</code> → hack</td></tr>
<tr><td>URL encoding</td><td>%XX</td><td><code>%27</code> → ' , <code>%20</code> → spasi</td></tr>
<tr><td>ROT13</td><td>Huruf digeser 13</td><td><code>uryyb</code> → hello</td></tr></table>
<p>Alat: <code>base64 -d</code>, <code>xxd -r -p</code>, Python (<code>base64</code>, <code>bytes.fromhex</code>, <code>urllib.parse.unquote</code>), atau CyberChef.</p>"""),
 ("hash", "Mengenali Hash", """<p>Hash berukuran tetap. Panjangnya menjadi petunjuk pertama saat menemukan kebocoran atau tantangan CTF.</p>
<table class="mini-pivot"><tr><th>Algoritma</th><th>Bit</th><th>Karakter heksa</th><th>Status</th></tr>
<tr><td>MD5</td><td>128</td><td>32</td><td>Rusak (collision)</td></tr><tr><td>SHA-1</td><td>160</td><td>40</td><td>Rusak (collision)</td></tr>
<tr><td>SHA-256</td><td>256</td><td>64</td><td>Aman untuk integritas</td></tr><tr><td>SHA-512</td><td>512</td><td>128</td><td>Aman untuk integritas</td></tr></table>
<p>Hash password memakai format <code>$id$salt$hash</code>: <code>$2b$</code> bcrypt, <code>$6$</code> SHA-512 crypt, <code>$y$</code> yescrypt, <code>$argon2id$</code> Argon2id. Panjang hanyalah petunjuk; NTLM juga 32 karakter seperti MD5.</p>"""),
 ("chmod", "Izin File Linux (chmod)", """<p>Izin yang salah adalah jalan pintas favorit untuk eskalasi hak.</p>
<table class="mini-pivot"><tr><th>Angka</th><th>Simbol</th><th>Angka</th><th>Simbol</th></tr>
<tr><td>7</td><td>rwx</td><td>3</td><td>-wx</td></tr><tr><td>6</td><td>rw-</td><td>2</td><td>-w-</td></tr>
<tr><td>5</td><td>r-x</td><td>1</td><td>--x</td></tr><tr><td>4</td><td>r--</td><td>0</td><td>---</td></tr></table>
<p>Urutan digit: pemilik, grup, lainnya. Digit keempat di depan untuk bit spesial: <b>4</b> SUID (s di pemilik), <b>2</b> SGID (s di grup), <b>1</b> sticky (t di lainnya, misal <code>/tmp</code> = 1777).</p>"""),
 ("sandi", "Sandi Klasik & XOR", """<p>Sandi klasik tidak aman, tetapi melatih cara berpikir kriptanalisis dan selalu muncul di CTF pemula.</p>
<ul><li><b>Caesar:</b> geser huruf sebanyak kunci (1–25). Dekripsi = geser mundur. Hanya 25 kunci, jadi cukup dicoba semua.</li>
<li><b>Known-plaintext:</b> tahu satu pasang huruf asli dan sandinya langsung membuka kunci: (sandi − asli) mod 26.</li>
<li><b>XOR:</b> bit sama → 0, berbeda → 1. (A XOR K) XOR K = A. Kunci satu byte hanya 256 kemungkinan.</li></ul>
<p>Contoh XOR: 0x41 (01000001) XOR 0x20 (00100000) = 0x61 (01100001), yaitu 'A' menjadi 'a'.</p>"""),
 ("entropi", "Kekuatan Password & Brute Force", """<p>Kekuatan password acak diukur dengan <b>entropi</b> (bit): panjang × log<sub>2</sub>(jumlah pilihan per karakter).</p>
<table class="mini-pivot"><tr><th>Jenis karakter</th><th>Pilihan</th><th>Bit per karakter</th></tr>
<tr><td>Angka</td><td>10</td><td>3,32</td></tr><tr><td>Huruf kecil</td><td>26</td><td>4,70</td></tr>
<tr><td>Huruf + angka</td><td>62</td><td>5,95</td></tr><tr><td>Semua karakter cetak</td><td>95</td><td>6,57</td></tr>
<tr><td>Kata diceware (7.776 kata)</td><td>7.776</td><td>12,92 per kata</td></tr></table>
<p>Waktu brute force = kombinasi ÷ laju tebakan. GPU bisa mencoba miliaran hash cepat per detik, tetapi hash lambat (bcrypt, Argon2id) menurunkannya drastis. Rumus ini hanya untuk password yang benar-benar acak; password buatan manusia jauh lebih mudah ditebak lewat kamus.</p>"""),
 ("waktu", "Waktu di Log: UTC, WIB & Unix Timestamp", """<p>Menyusun linimasa insiden butuh waktu yang seragam.</p>
<table class="mini-pivot"><tr><th>Zona</th><th>Selisih dari UTC</th></tr><tr><td>WIB</td><td>+7</td></tr><tr><td>WITA</td><td>+8</td></tr><tr><td>WIT</td><td>+9</td></tr></table>
<p>Jika hasil penjumlahan jam lewat 24, kurangi 24 dan tanggal maju satu hari. <b>Unix timestamp</b> adalah jumlah detik sejak 1 Januari 1970 00:00:00 UTC; bagi 86.400 untuk mendapat jumlah hari. Di Linux: <code>date -u -d @1700000000</code>.</p>"""),
]
assert {m[0] for m in MATERI} == {s["k"] for s in SOAL}
# Pengantar untuk pemula (analogi + istilah) disisipkan di awal tiap bab; ditulis di materi-pemula-siber.json
with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "materi-pemula-siber.json"), encoding="utf-8") as f:
    PEMULA = json.load(f)
MATERI = [(k, j, f"<!--pemula-->{PEMULA[k]}<!--/pemula-->\n" + m if k in PEMULA else m) for k, j, m in MATERI]

# Putaran tambahan (2026-11-27, soal 2x lipat): 688 soal pertama TIDAK berubah (ID soal = urutan), lalu generator
# dijalankan ulang dengan benih lain dan hanya soal yang belum ada yang ditambahkan di belakang.
if os.environ.get("SIBER_SUB"):
    print(json.dumps(SOAL, ensure_ascii=False)); raise SystemExit
TARGET = 2 * 688
kunci = lambda s: s["q"] + chr(10) + (s.get("kode") or "") if s["t"] == "mc" else s["q"]
ada = {kunci(s) for s in SOAL}
for benih in range(20261127, 20261127 + 12):
    if len(SOAL) >= TARGET: break
    env = {**os.environ, "SIBER_SUB": "1", "SIBER_SEED": str(benih), "PYTHONIOENCODING": "utf-8"}
    hasil = json.loads(subprocess.run([sys.executable, os.path.abspath(__file__)], env=env, capture_output=True, check=True).stdout.decode("utf-8"))
    for x in hasil:
        if len(SOAL) >= TARGET: break
        if kunci(x) not in ada:
            ada.add(kunci(x)); SOAL.append(x)

def js(o): return json.dumps(o, ensure_ascii=False)
baris = ["// ============ LAB HITUNG SIBER (dibuat program: alat/buat-soal-siber.py) ============",
         "// JANGAN diedit manual. Ubah generatornya lalu jalankan: python alat/buat-soal-siber.py",
         "// Setiap kunci dihitung manual lalu dicocokkan dengan pustaka Python (assert).", "",
         "const MATERI_SIBER = [", *[f"{{k:{js(k)},judul:{js(j)},materi:{js(m)}}}," for k, j, m in MATERI], "];", "",
         "const SOAL_SIBER = [", *[js(s) + "," for s in SOAL], "];", "",
         'if (typeof module !== "undefined") module.exports = { SOAL_SIBER, MATERI_SIBER };', ""]
with open(os.path.join(ROOT, "js", "soal", "soal-siber.js"), "w", encoding="utf-8", newline="\n") as f:
    f.write("\n".join(baris))
hit = {}
for s in SOAL: hit[s["k"]] = hit.get(s["k"], 0) + 1
print(len(SOAL), "soal", hit)
