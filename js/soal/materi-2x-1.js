// ============ Materi 2x lipat (bagian 1): Python & SQL — "Latihan terpandu & kunci" per bab ============
// Dimuat PALING AKHIR (setelah semua file soal), hanya menambah materi. Kode contoh di-escape otomatis.
(function () {
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const tambah = (MAT, k, h) => { const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Latihan terpandu &amp; kunci</h4>' + h; };
  // judul contoh, kode contoh, langkah penjelasan, soal latihan, kunci (kode)
  const blok = (judul, kode, langkah, latihan, kunci) =>
    `<h4>Contoh terpandu: ${judul}</h4><pre><code>${esc(kode)}</code></pre><ol>${langkah.map(x => `<li>${x}</li>`).join("")}</ol>` +
    `<h4>Latihan mandiri</h4><ol>${latihan.map(x => `<li>${x}</li>`).join("")}</ol>` +
    `<details class="kunci-latihan"><summary>Lihat kunci jawaban (coba dulu sendiri)</summary><pre><code>${esc(kunci)}</code></pre></details>`;
  const P = (k, ...a) => tambah(MATERI_PYTHON, k, blok(...a));
  const Q = (k, ...a) => tambah(MATERI_SQL, k, blok(...a));

  /* ======================= PYTHON (21 bab) ======================= */
  P("dasar", "menghitung uang kembalian",
`harga = 18500                     # harga barang (angka)
bayar = int(input("Uang dibayar: "))  # ketik 20000 -> diubah jadi angka
kembali = bayar - harga            # hitung selisih
print("Kembalian:", kembali)       # Kembalian: 1500`,
    ["<code>harga</code> berisi angka, jadi tanpa kutip.", "<code>input()</code> selalu memberi teks, maka dibungkus <code>int()</code> supaya bisa dikurangi.", "Hasil pengurangan disimpan ke <code>kembali</code>, lalu dicetak bersama teks memakai koma (otomatis diberi spasi)."],
    ["Minta nama dan tahun lahir, lalu cetak <i>\"Halo Rina, umurmu sekitar 21 tahun\"</i> (pakai tahun 2026).", "Minta panjang dan lebar (boleh desimal), lalu cetak luasnya.", "Cetak tipe data dari <code>7</code>, <code>7.0</code>, <code>\"7\"</code>, dan <code>True</code>."],
`# 1
nama = input("Nama: ")
lahir = int(input("Tahun lahir: "))
print("Halo", nama + ", umurmu sekitar", 2026 - lahir, "tahun")
# 2
p = float(input("Panjang: "))
l = float(input("Lebar: "))
print("Luas:", p * l)
# 3
print(type(7), type(7.0), type("7"), type(True))   # int float str bool`);

  P("operator", "membagi barang ke dalam dus",
`total_botol = 50
isi_dus = 12
dus_penuh = total_botol // isi_dus   # 4 dus penuh
sisa = total_botol % isi_dus         # 2 botol tersisa
print(dus_penuh, "dus,", sisa, "botol sisa")`,
    ["<code>//</code> menjawab \"berapa kali muat\": 50 // 12 = 4.", "<code>%</code> menjawab \"sisanya berapa\": 50 - 4 × 12 = 2.", "Dua operator ini hampir selalu dipakai berpasangan."],
    ["Ubah 3.725 detik menjadi jam, menit, detik.", "Cek apakah tahun 2028 kabisat: habis dibagi 4 dan (tidak habis dibagi 100 atau habis dibagi 400).", "Hitung harga setelah diskon 15% dari 240.000 lalu ditambah PPN 11%."],
`# 1
detik = 3725
print(detik // 3600, "jam", detik % 3600 // 60, "menit", detik % 60, "detik")   # 1 2 5
# 2
th = 2028
print(th % 4 == 0 and (th % 100 != 0 or th % 400 == 0))   # True
# 3
harga = 240000 * (1 - 0.15)
print(harga * 1.11)   # 226440.0`);

  P("string", "merapikan data nama dari formulir",
`mentah = "   rina   PUTRI "
rapi = mentah.strip().title()      # "Rina Putri"
inisial = rapi[0] + rapi.split()[1][0]   # "RP"
print(rapi, inisial, len(rapi))    # Rina Putri RP 10`,
    ["<code>strip()</code> membuang spasi tepi, <code>title()</code> membesarkan huruf awal setiap kata.", "<code>split()</code> memecah per spasi: ['Rina', 'Putri']; <code>[1][0]</code> = huruf pertama kata kedua.", "Spasi di tengah tetap dihitung oleh <code>len()</code>."],
    ["Dari <code>\"2026-11-28\"</code>, ambil tahun, bulan, dan tanggal dengan slicing.", "Sensor nomor HP <code>\"081234567890\"</code> menjadi <code>\"0812****7890\"</code>.", "Hitung berapa huruf vokal di kalimat \"belajar python setiap hari\"."],
`# 1
t = "2026-11-28"
print(t[:4], t[5:7], t[8:])
# 2
hp = "081234567890"
print(hp[:4] + "*" * 4 + hp[-4:])
# 3
kalimat = "belajar python setiap hari"
print(sum(1 for h in kalimat if h in "aiueo"))   # 9`);

  P("kondisi", "menentukan ongkos kirim",
`berat = 3.5          # kg
if berat < 1:
    ongkir = 10000
elif berat <= 5:
    ongkir = 20000
else:
    ongkir = 35000
print("Ongkir:", ongkir)   # Ongkir: 20000`,
    ["Python mengecek dari atas; 3,5 tidak &lt; 1, tapi ≤ 5, jadi berhenti di cabang kedua.", "Hanya satu cabang yang dijalankan.", "Setiap baris setelah titik dua menjorok satu Tab (4 spasi)."],
    ["Buat penentu grade: ≥ 85 A, ≥ 70 B, ≥ 55 C, selain itu D. Uji dengan 85, 70, 54.", "Diskon 10% hanya bila member DAN belanja ≥ 100.000.", "Tulis ulang soal 2 sebagai if satu baris (ternary)."],
`# 1
n = 70
if n >= 85: g = "A"
elif n >= 70: g = "B"
elif n >= 55: g = "C"
else: g = "D"
print(g)   # B
# 2
member, belanja = True, 120000
if member and belanja >= 100000:
    belanja = belanja * 0.9
print(belanja)   # 108000.0
# 3
belanja = belanja * 0.9 if member and belanja >= 100000 else belanja`);

  P("loop", "menghitung total dan rata-rata nilai",
`nilai = [80, 65, 92, 70]
total = 0
for n in nilai:          # ambil satu per satu
    total += n           # tambahkan ke total
rata = total / len(nilai)
print(total, rata)       # 307 76.75`,
    ["Mulai dengan <code>total = 0</code> (akumulator).", "Setiap putaran <code>n</code> berganti isi: 80, 65, 92, 70.", "Rata-rata dihitung SETELAH loop selesai (baris tidak menjorok)."],
    ["Cetak bilangan 1–20 yang habis dibagi 3.", "Hitung berapa nilai di atas 75 dari list di contoh.", "Minta input angka terus sampai pengguna mengetik 0, lalu cetak jumlahnya (while)."],
`# 1
for i in range(1, 21):
    if i % 3 == 0:
        print(i)
# 2
banyak = 0
for n in [80, 65, 92, 70]:
    if n > 75:
        banyak += 1
print(banyak)   # 2
# 3
jumlah = 0
while True:
    x = int(input("Angka (0 = selesai): "))
    if x == 0:
        break
    jumlah += x
print(jumlah)`);

  P("list", "mengelola daftar belanja",
`belanja = ["telur", "susu"]
belanja.append("roti")          # tambah di akhir
belanja.insert(0, "beras")      # sisip di depan
belanja.remove("susu")          # hapus berdasarkan nilai
print(belanja, len(belanja))    # ['beras', 'telur', 'roti'] 3`,
    ["Method list mengubah list itu sendiri, jadi tidak perlu <code>belanja = ...</code>.", "<code>remove</code> menghapus kemunculan pertama.", "Urutan dijaga sesuai cara memasukkan."],
    ["Dari <code>[5, 3, 9, 1]</code>, buat list baru terurut tanpa mengubah aslinya.", "Ambil 3 nilai terbesar dari <code>[70, 95, 60, 88, 75]</code>.", "Gabungkan dua list tanpa duplikat, urut abjad: <code>[\"a\",\"c\"]</code> dan <code>[\"b\",\"c\"]</code>."],
`# 1
asli = [5, 3, 9, 1]
baru = sorted(asli)
print(baru, asli)
# 2
print(sorted([70, 95, 60, 88, 75], reverse=True)[:3])   # [95, 88, 75]
# 3
print(sorted(set(["a", "c"] + ["b", "c"])))   # ['a', 'b', 'c']`);

  P("koleksi", "menghitung stok per produk",
`masuk = [("kopi", 10), ("teh", 5), ("kopi", 3)]
stok = {}
for nama, qty in masuk:
    stok[nama] = stok.get(nama, 0) + qty
print(stok)              # {'kopi': 13, 'teh': 5}`,
    ["Setiap tuple dibongkar menjadi <code>nama</code> dan <code>qty</code>.", "<code>get(nama, 0)</code> memberi 0 untuk produk yang belum ada.", "Dict cocok karena data dicari lewat nama produk."],
    ["Dari dict <code>{\"Ani\": 90, \"Budi\": 75, \"Cici\": 85}</code>, cetak nama dengan nilai tertinggi.", "Cari nama yang ada di kedua kelas: <code>{\"Ani\",\"Budi\"}</code> dan <code>{\"Budi\",\"Dodi\"}</code>.", "Kelompokkan kata berdasarkan huruf awal: <code>[\"apel\",\"anggur\",\"jeruk\"]</code>."],
`# 1
nilai = {"Ani": 90, "Budi": 75, "Cici": 85}
print(max(nilai, key=nilai.get))   # Ani
# 2
print({"Ani", "Budi"} & {"Budi", "Dodi"})   # {'Budi'}
# 3
grup = {}
for k in ["apel", "anggur", "jeruk"]:
    grup.setdefault(k[0], []).append(k)
print(grup)   # {'a': ['apel', 'anggur'], 'j': ['jeruk']}`);

  P("fungsi", "fungsi menghitung total belanja dengan pajak",
`def total_belanja(harga, qty, pajak=0.11):
    subtotal = harga * qty
    return round(subtotal * (1 + pajak))

print(total_belanja(18000, 2))          # 39960
print(total_belanja(18000, 2, pajak=0)) # 36000`,
    ["<code>pajak=0.11</code> nilai bawaan; boleh diganti saat memanggil.", "<code>return</code> menyerahkan hasil, jadi bisa dicetak atau dipakai lagi.", "Nama fungsi menjelaskan apa yang dikerjakan."],
    ["Buat <code>is_genap(n)</code> yang mengembalikan True/False.", "Buat <code>rata_rata(data)</code> yang mengembalikan 0 bila list kosong.", "Buat <code>format_rupiah(n)</code> yang mengembalikan \"Rp 1.250.000\"."],
`def is_genap(n):
    return n % 2 == 0

def rata_rata(data):
    if not data:
        return 0
    return sum(data) / len(data)

def format_rupiah(n):
    return "Rp " + f"{n:,}".replace(",", ".")

print(is_genap(4), rata_rata([]), format_rupiah(1250000))`);

  P("error", "membaca angka dengan aman",
`def baca_angka(teks):
    try:
        return int(teks)
    except ValueError:
        return None

print(baca_angka("42"), baca_angka("empat"))   # 42 None`,
    ["Bagian berisiko (<code>int()</code>) ditaruh di <code>try</code>.", "Hanya <code>ValueError</code> yang ditangkap, jadi error lain tetap terlihat.", "Fungsi mengembalikan None sebagai tanda gagal."],
    ["Buat <code>bagi(a, b)</code> yang mengembalikan pesan \"tidak bisa dibagi nol\" bila b = 0.", "Baca file <code>data.txt</code>; bila tidak ada, cetak \"file belum ada\".", "Buat fungsi <code>set_umur(n)</code> yang raise ValueError bila n negatif."],
`def bagi(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "tidak bisa dibagi nol"

try:
    with open("data.txt") as f:
        print(f.read())
except FileNotFoundError:
    print("file belum ada")

def set_umur(n):
    if n < 0:
        raise ValueError("umur tidak boleh negatif")
    return n`);

  P("oop", "class Produk dengan stok",
`class Produk:
    def __init__(self, nama, harga, stok=0):
        self.nama = nama
        self.harga = harga
        self.stok = stok

    def jual(self, qty):
        if qty > self.stok:
            return "stok kurang"
        self.stok -= qty
        return self.harga * qty

kopi = Produk("Kopi", 18000, 5)
print(kopi.jual(2), kopi.stok)   # 36000 3`,
    ["<code>__init__</code> mengisi data awal setiap objek.", "<code>self.stok</code> milik objek kopi; produk lain punya stok sendiri.", "Method memeriksa aturan bisnis sebelum mengubah data."],
    ["Tambahkan method <code>tambah_stok(qty)</code>.", "Buat class <code>ProdukDiskon</code> turunan Produk dengan diskon persen pada jual().", "Tambahkan <code>__str__</code> yang menampilkan \"Kopi (stok 3)\"."],
`class Produk:
    def __init__(self, nama, harga, stok=0):
        self.nama, self.harga, self.stok = nama, harga, stok
    def tambah_stok(self, qty):
        self.stok += qty
    def jual(self, qty):
        if qty > self.stok:
            return "stok kurang"
        self.stok -= qty
        return self.harga * qty
    def __str__(self):
        return f"{self.nama} (stok {self.stok})"

class ProdukDiskon(Produk):
    def __init__(self, nama, harga, stok=0, persen=10):
        super().__init__(nama, harga, stok)
        self.persen = persen
    def jual(self, qty):
        hasil = super().jual(qty)
        if isinstance(hasil, str):
            return hasil
        return hasil * (100 - self.persen) // 100`);

  P("modul", "memakai beberapa modul bawaan sekaligus",
`import math, random
from datetime import date

print(math.ceil(52 / 12))              # 5 dus dibutuhkan
random.seed(7)
print(random.choice(["A", "B", "C"]))  # hasil tetap karena seed
print(date(2026, 12, 25) - date(2026, 11, 28))   # 27 days, 0:00:00`,
    ["<code>math.ceil</code> membulatkan ke atas, cocok untuk menghitung kebutuhan wadah.", "<code>random.seed</code> membuat hasil acak bisa diulang saat menguji.", "Selisih dua tanggal memberi objek timedelta."],
    ["Hitung akar dan pangkat: √144 dan 2¹⁰ dengan math.", "Buat 5 nomor undian acak unik dari 1–50.", "Cetak nama hari dari tanggal 28-11-2026 (0 = Senin)."],
`import math, random
from datetime import date
print(math.sqrt(144), math.pow(2, 10))   # 12.0 1024.0
print(random.sample(range(1, 51), 5))
print(date(2026, 11, 28).weekday())      # 5 = Sabtu`);

  P("pandas", "laporan penjualan per wilayah",
`import pandas as pd
df = pd.DataFrame({"Wilayah": ["Jakarta", "Bandung", "Jakarta"],
                   "Total":   [14000000, 1500000, 6000000]})
ringkas = df.groupby("Wilayah")["Total"].sum().sort_values(ascending=False)
print(ringkas)
# Jakarta    20000000
# Bandung     1500000`,
    ["<code>groupby</code> memisahkan per wilayah, <code>sum</code> menjumlah, <code>sort_values</code> mengurutkan.", "Hasilnya Series dengan wilayah sebagai label.", "Pola ini sama dengan Pivot Table Excel."],
    ["Tambahkan kolom <code>Persen</code> = Total ÷ total semua × 100.", "Saring baris dengan Total ≥ 5 juta.", "Simpan hasil ringkasan ke file CSV."],
`df["Persen"] = df["Total"] / df["Total"].sum() * 100
besar = df[df["Total"] >= 5000000]
ringkas.to_csv("ringkasan.csv")`);

  P("odoo", "computed field total di model pesanan sederhana",
`from odoo import api, fields, models

class Pesanan(models.Model):
    _name = "toko.pesanan"
    _description = "Pesanan"

    qty = fields.Integer(default=1)
    harga = fields.Float()
    total = fields.Float(compute="_compute_total", store=True)

    @api.depends("qty", "harga")
    def _compute_total(self):
        for rec in self:
            rec.total = rec.qty * rec.harga`,
    ["Field compute dihubungkan ke method lewat <code>compute=</code>.", "<code>@api.depends</code> memberi tahu kapan dihitung ulang.", "Selalu loop <code>for rec in self</code> dan isi field, tanpa return."],
    ["Tambahkan constraint: qty minimal 1.", "Tambahkan field Selection <code>state</code> (draft/done) dengan default draft.", "Tulis method tombol <code>action_done</code> yang mengubah state."],
`from odoo.exceptions import ValidationError

state = fields.Selection([("draft", "Draft"), ("done", "Selesai")], default="draft")

@api.constrains("qty")
def _cek_qty(self):
    for rec in self:
        if rec.qty < 1:
            raise ValidationError("Qty minimal 1")

def action_done(self):
    self.write({"state": "done"})`);

  P("latihan", "menelusuri kode dengan tabel jejak",
`hasil = []
for i in range(1, 5):
    if i % 2 == 0:
        hasil.append(i * i)
    else:
        hasil.append(-i)
print(hasil)`,
    ["i=1 ganjil → -1; i=2 genap → 4; i=3 → -3; i=4 → 16.", "Output: <code>[-1, 4, -3, 16]</code>.", "Tulis jejak di kertas sebelum menjalankan, lalu cocokkan."],
    ["Tebak output: <code>print([x for x in \"data\" if x != \"a\"])</code>.", "Tebak output: <code>a = [1,2]; b = a; b.append(3); print(len(a))</code>.", "Tebak output: <code>print(sum(range(0, 10, 3)))</code>."],
`['d', 't']
3
18   # 0 + 3 + 6 + 9`);

  P("comprehension", "dari for biasa ke comprehension",
`harga = {"kopi": 18000, "teh": 12000, "roti": 9000}
# for biasa
murah = []
for nama, h in harga.items():
    if h < 15000:
        murah.append(nama.upper())
# comprehension (hasil sama)
murah2 = [nama.upper() for nama, h in harga.items() if h < 15000]
print(murah, murah2)   # ['TEH', 'ROTI'] ['TEH', 'ROTI']`,
    ["Bagian <code>append(...)</code> pindah ke depan.", "Baris <code>for</code> di tengah, baris <code>if</code> di belakang.", "Pakai comprehension bila logikanya pendek dan jelas."],
    ["Buat dict nama → harga setelah diskon 10% (dict comprehension).", "Buat list panjang setiap kata dari \"saya suka belajar\".", "Ratakan <code>[[1,2],[3],[4,5]]</code> menjadi satu list."],
`print({n: h * 9 // 10 for n, h in harga.items()})
print([len(k) for k in "saya suka belajar".split()])   # [4, 4, 7]
print([x for b in [[1, 2], [3], [4, 5]] for x in b])`);

  P("fungsilanjut", "fungsi fleksibel dengan *args dan **kwargs",
`def laporan(judul, *angka, **opsi):
    total = sum(angka)
    satuan = opsi.get("satuan", "")
    return f"{judul}: {total}{satuan}"

print(laporan("Penjualan", 10, 20, 30, satuan=" pcs"))   # Penjualan: 60 pcs`,
    ["<code>*angka</code> mengumpulkan argumen posisi menjadi tuple.", "<code>**opsi</code> mengumpulkan argumen bernama menjadi dict.", "<code>get</code> memberi nilai bawaan bila opsi tidak dikirim."],
    ["Buat decorator <code>catat</code> yang mencetak nama fungsi sebelum dijalankan.", "Buat fungsi rekursif <code>pangkat(a, n)</code>.", "Buat closure <code>penghitung()</code> yang bertambah setiap dipanggil."],
`def catat(f):
    def bungkus(*a, **k):
        print("menjalankan", f.__name__)
        return f(*a, **k)
    return bungkus

def pangkat(a, n):
    return 1 if n == 0 else a * pangkat(a, n - 1)

def penghitung():
    n = 0
    def tambah():
        nonlocal n
        n += 1
        return n
    return tambah`);

  P("iterator", "generator untuk membaca data per batch",
`def per_batch(data, ukuran):
    for i in range(0, len(data), ukuran):
        yield data[i:i + ukuran]

for b in per_batch(list(range(1, 8)), 3):
    print(b)
# [1, 2, 3]
# [4, 5, 6]
# [7]`,
    ["<code>yield</code> menyerahkan satu batch, lalu berhenti sementara.", "Loop <code>for</code> meminta batch berikutnya sampai habis.", "Hemat memori untuk data besar."],
    ["Buat generator bilangan genap sampai batas.", "Buat generator yang membaca file baris per baris dan membuang baris kosong.", "Ambil 5 angka pertama dari <code>itertools.count(10, 5)</code>."],
`def genap(batas):
    for n in range(0, batas, 2):
        yield n

def baris_isi(path):
    with open(path, encoding="utf-8") as f:
        for b in f:
            if b.strip():
                yield b.strip()

from itertools import count, islice
print(list(islice(count(10, 5), 5)))   # [10, 15, 20, 25, 30]`);

  P("oop2", "dataclass dengan validasi property",
`from dataclasses import dataclass

@dataclass
class Item:
    nama: str
    harga: int
    qty: int = 1

    @property
    def subtotal(self):
        return self.harga * self.qty

print(Item("Kopi", 18000, 2))            # Item(nama='Kopi', harga=18000, qty=2)
print(Item("Kopi", 18000, 2).subtotal)   # 36000`,
    ["<code>@dataclass</code> membuatkan __init__ dan __repr__.", "<code>@property</code> membuat subtotal dibaca seperti atribut.", "Subtotal selalu terhitung dari data terbaru."],
    ["Tambahkan <code>__post_init__</code> yang menolak qty &lt; 1.", "Buat class Keranjang dengan <code>__len__</code> dan total semua item.", "Buat <code>__add__</code> agar dua Keranjang bisa digabung dengan +."],
`@dataclass
class Item:
    nama: str
    harga: int
    qty: int = 1
    def __post_init__(self):
        if self.qty < 1:
            raise ValueError("qty minimal 1")

class Keranjang:
    def __init__(self, items=None):
        self.items = items or []
    def __len__(self):
        return len(self.items)
    def total(self):
        return sum(i.harga * i.qty for i in self.items)
    def __add__(self, lain):
        return Keranjang(self.items + lain.items)`);

  P("stdlib", "membaca log dan menghitung status",
`import re
from collections import Counter

log = """2026-11-28 10:01 GET /produk 200
2026-11-28 10:02 GET /login 401
2026-11-28 10:03 POST /login 200"""
status = re.findall(r" (\\d{3})$", log, flags=re.M)
print(Counter(status))   # Counter({'200': 2, '401': 1})`,
    ["Regex <code> (\\d{3})$</code> mengambil 3 digit di akhir setiap baris (re.M = per baris).", "Counter menghitung kemunculan otomatis.", "Pola ini dipakai analis log dan SOC."],
    ["Hitung berapa hari dari 28-11-2026 sampai 1-1-2027.", "Simpan dict ke file JSON lalu baca lagi.", "Dari list tanggal teks, cari tanggal terbaru."],
`from datetime import date
print((date(2027, 1, 1) - date(2026, 11, 28)).days)   # 34

import json
with open("data.json", "w") as f:
    json.dump({"a": 1}, f)
with open("data.json") as f:
    print(json.load(f))

print(max(["2026-11-01", "2026-11-28", "2026-10-30"]))   # format ISO bisa dibandingkan sebagai teks`);

  P("kerja", "struktur proyek kecil dengan tes",
`rekap/
  rekap.py          # fungsi utama
  test_rekap.py     # tes pytest
  requirements.txt
  README.md

# rekap.py
def diskon(harga, persen):
    return harga - harga * persen // 100

# test_rekap.py
from rekap import diskon
def test_diskon():
    assert diskon(1000, 10) == 900`,
    ["Logika di modul terpisah dari input/print.", "File tes diawali <code>test_</code> agar dikenali pytest.", "Jalankan <code>pytest</code> dari folder proyek."],
    ["Tambahkan tes untuk diskon 0% dan 100%.", "Tambahkan type hint pada fungsi diskon.", "Tulis isi .gitignore minimal untuk proyek Python."],
`def test_tanpa_diskon():
    assert diskon(1000, 0) == 1000

def test_gratis():
    assert diskon(1000, 100) == 0

def diskon(harga: int, persen: int) -> int:
    return harga - harga * persen // 100

# .gitignore
.venv/
__pycache__/
*.pyc
.env`);

  P("proyek", "aplikasi buku kas sederhana",
`import json, os
FILE = "kas.json"

def muat():
    if not os.path.exists(FILE):
        return []
    with open(FILE) as f:
        return json.load(f)

def simpan(data):
    with open(FILE, "w") as f:
        json.dump(data, f)

def saldo(data):
    return sum(t["n"] if t["jenis"] == "masuk" else -t["n"] for t in data)

data = muat()
data.append({"jenis": "masuk", "n": 500000})
simpan(data)
print("Saldo:", saldo(data))`,
    ["Data disimpan ke JSON supaya tidak hilang saat program ditutup.", "Logika saldo di fungsi terpisah sehingga bisa diuji.", "Program bisa dikembangkan bertahap: kategori, laporan bulanan, ekspor CSV."],
    ["Tambahkan fungsi <code>laporan_kategori(data)</code> yang menjumlah per kategori.", "Tambahkan validasi: nominal harus angka positif.", "Buat menu teks: 1 tambah, 2 lihat saldo, 0 keluar."],
`def laporan_kategori(data):
    hasil = {}
    for t in data:
        k = t.get("kategori", "lain")
        hasil[k] = hasil.get(k, 0) + t["n"]
    return hasil

def nominal_valid(teks):
    try:
        n = int(teks)
    except ValueError:
        return None
    return n if n > 0 else None

while True:
    p = input("1 tambah, 2 saldo, 0 keluar: ")
    if p == "0":
        break
    elif p == "2":
        print(saldo(muat()))`);

  /* ======================= SQL (8 bab) ======================= */
  Q("select", "produk Aksesoris termurah",
`SELECT nama, harga
FROM produk
WHERE kategori = 'Aksesoris'
ORDER BY harga
LIMIT 1;
-- Mouse | 150000`,
    ["FROM menentukan tabel, WHERE menyaring kategori.", "ORDER BY harga (naik) menaruh yang termurah di atas.", "LIMIT 1 mengambil satu baris teratas."],
    ["Tampilkan pelanggan yang tinggal di Jakarta atau Surabaya, urut nama.", "Tampilkan pesanan dengan qty antara 2 dan 3.", "Tampilkan nama produk yang mengandung huruf 'o'."],
`SELECT nama FROM pelanggan WHERE kota IN ('Jakarta', 'Surabaya') ORDER BY nama;
SELECT * FROM pesanan WHERE qty BETWEEN 2 AND 3;
SELECT nama FROM produk WHERE nama LIKE '%o%';`);

  Q("groupby", "jumlah pesanan dan total qty per pelanggan",
`SELECT pelanggan_id,
       COUNT(*)  AS banyak_pesanan,
       SUM(qty)  AS total_qty
FROM pesanan
GROUP BY pelanggan_id
HAVING COUNT(*) >= 2
ORDER BY total_qty DESC;`,
    ["GROUP BY membuat satu baris per pelanggan.", "COUNT menghitung pesanan, SUM menjumlah qty.", "HAVING menyaring kelompok yang punya minimal 2 pesanan."],
    ["Hitung rata-rata qty per produk_id.", "Tampilkan kota dengan jumlah pelanggan terbanyak.", "Tampilkan produk_id yang total qty-nya lebih dari 3."],
`SELECT produk_id, AVG(qty) FROM pesanan GROUP BY produk_id;
SELECT kota, COUNT(*) AS n FROM pelanggan GROUP BY kota ORDER BY n DESC LIMIT 1;
SELECT produk_id, SUM(qty) AS t FROM pesanan GROUP BY produk_id HAVING t > 3;`);

  Q("join", "omzet per kategori produk",
`SELECT pr.kategori,
       SUM(o.qty * pr.harga) AS omzet
FROM pesanan o
JOIN produk pr ON pr.id = o.produk_id
GROUP BY pr.kategori
ORDER BY omzet DESC;`,
    ["JOIN menyambung pesanan ke produk lewat produk_id.", "qty × harga dihitung per baris lalu dijumlah per kategori.", "Selalu tulis alias tabel (o, pr) agar jelas."],
    ["Tampilkan nama pelanggan dan nama produk setiap pesanan.", "Tampilkan semua pelanggan beserta jumlah pesanannya (termasuk 0).", "Tampilkan kota dan omzetnya."],
`SELECT p.nama, pr.nama FROM pesanan o JOIN pelanggan p ON p.id = o.pelanggan_id JOIN produk pr ON pr.id = o.produk_id;
SELECT p.nama, COUNT(o.id) FROM pelanggan p LEFT JOIN pesanan o ON o.pelanggan_id = p.id GROUP BY p.nama;
SELECT p.kota, SUM(o.qty * pr.harga) FROM pesanan o JOIN pelanggan p ON p.id = o.pelanggan_id JOIN produk pr ON pr.id = o.produk_id GROUP BY p.kota;`);

  Q("subquery", "pelanggan yang belanjanya di atas rata-rata pesanan",
`SELECT id, pelanggan_id, qty
FROM pesanan
WHERE qty > (SELECT AVG(qty) FROM pesanan);
-- rata-rata qty = 2, jadi yang muncul pesanan dengan qty 3 dan 5`,
    ["Subquery di dalam kurung dihitung dulu (rata-rata = 2).", "Query luar membandingkan setiap baris dengan angka itu.", "Subquery dengan = atau &gt; harus menghasilkan satu nilai."],
    ["Tampilkan produk yang pernah dipesan lebih dari sekali (pakai IN).", "Tampilkan pelanggan yang tidak pernah membeli Laptop.", "Tampilkan produk termahal di setiap kategori dengan subquery berkorelasi."],
`SELECT nama FROM produk WHERE id IN (SELECT produk_id FROM pesanan GROUP BY produk_id HAVING COUNT(*) > 1);
SELECT nama FROM pelanggan WHERE id NOT IN (SELECT pelanggan_id FROM pesanan WHERE produk_id = 1);
SELECT nama FROM produk p WHERE harga = (SELECT MAX(harga) FROM produk WHERE kategori = p.kategori);`);

  Q("case", "label besar-kecil pesanan dan rekapnya",
`SELECT CASE WHEN qty >= 3 THEN 'Besar' ELSE 'Kecil' END AS jenis,
       COUNT(*) AS banyak
FROM pesanan
GROUP BY jenis;
-- Besar 2, Kecil 6`,
    ["CASE membuat kolom label untuk setiap baris.", "GROUP BY alias label menghitung per jenis.", "Selalu tulis ELSE agar tidak ada NULL."],
    ["Beri label harga produk: &lt; 500 rb 'Murah', &lt; 5 jt 'Sedang', selain itu 'Mahal'.", "Hitung jumlah pelanggan Jakarta dan non-Jakarta dalam satu baris.", "Urutkan pelanggan: Jakarta dulu, lalu yang lain, masing-masing urut nama."],
`SELECT nama, CASE WHEN harga < 500000 THEN 'Murah' WHEN harga < 5000000 THEN 'Sedang' ELSE 'Mahal' END FROM produk;
SELECT SUM(CASE WHEN kota = 'Jakarta' THEN 1 ELSE 0 END) AS jakarta, SUM(CASE WHEN kota <> 'Jakarta' THEN 1 ELSE 0 END) AS lain FROM pelanggan;
SELECT nama FROM pelanggan ORDER BY CASE WHEN kota = 'Jakarta' THEN 0 ELSE 1 END, nama;`);

  Q("nullfungsi", "laporan rapi dengan fungsi teks dan tanggal",
`SELECT UPPER(p.nama) || ' - ' || p.kota       AS pelanggan,
       strftime('%d/%m/%Y', o.tanggal)          AS tgl,
       COALESCE(o.qty, 0)                       AS qty
FROM pesanan o
JOIN pelanggan p ON p.id = o.pelanggan_id
ORDER BY o.tanggal;`,
    ["|| menyambung teks (MySQL: CONCAT).", "strftime mengubah format tanggal.", "COALESCE mengganti NULL dengan 0."],
    ["Tampilkan bulan (angka) dan jumlah pesanan per bulan.", "Tampilkan nama produk dengan 3 huruf pertama saja.", "Hitung berapa hari antara pesanan pertama dan terakhir."],
`SELECT strftime('%m', tanggal) AS bulan, COUNT(*) FROM pesanan GROUP BY bulan;
SELECT SUBSTR(nama, 1, 3) FROM produk;
SELECT julianday(MAX(tanggal)) - julianday(MIN(tanggal)) FROM pesanan;   -- 9`);

  Q("cte", "pelanggan teratas dengan CTE bertahap",
`WITH belanja AS (
  SELECT o.pelanggan_id, SUM(o.qty * pr.harga) AS total
  FROM pesanan o JOIN produk pr ON pr.id = o.produk_id
  GROUP BY o.pelanggan_id
)
SELECT p.nama, b.total
FROM belanja b JOIN pelanggan p ON p.id = b.pelanggan_id
ORDER BY b.total DESC
LIMIT 2;   -- Rina 9.450.000, Sari 7.600.000`,
    ["CTE <code>belanja</code> menghitung total per pelanggan.", "Query akhir menyambung nama dan mengambil 2 teratas.", "Setiap langkah bisa diuji dengan SELECT * FROM belanja."],
    ["Dengan CTE, tampilkan kategori yang total qty-nya di atas rata-rata kategori.", "Gabungkan daftar kota pelanggan dengan 'Medan' tanpa kembar.", "Buat deret tanggal 1–5 Januari 2026 dengan CTE rekursif."],
`WITH k AS (SELECT pr.kategori, SUM(o.qty) AS q FROM pesanan o JOIN produk pr ON pr.id = o.produk_id GROUP BY pr.kategori)
SELECT kategori FROM k WHERE q > (SELECT AVG(q) FROM k);
SELECT kota FROM pelanggan UNION SELECT 'Medan';
WITH RECURSIVE h(t) AS (SELECT '2026-01-01' UNION ALL SELECT date(t, '+1 day') FROM h WHERE t < '2026-01-05') SELECT t FROM h;`);

  Q("window", "peringkat dan selisih dengan pesanan sebelumnya",
`SELECT id, pelanggan_id, qty,
       RANK() OVER (ORDER BY qty DESC)                                  AS peringkat,
       qty - LAG(qty) OVER (PARTITION BY pelanggan_id ORDER BY tanggal) AS selisih
FROM pesanan
ORDER BY pelanggan_id, tanggal;`,
    ["RANK memberi peringkat qty untuk seluruh tabel.", "LAG dengan PARTITION BY mengambil qty pesanan sebelumnya milik pelanggan yang sama.", "Baris pertama setiap pelanggan selisihnya NULL."],
    ["Tampilkan total berjalan qty per pelanggan.", "Tampilkan persentase qty setiap pesanan terhadap total qty semua pesanan.", "Ambil pesanan terbaru setiap pelanggan (ROW_NUMBER)."],
`SELECT id, pelanggan_id, SUM(qty) OVER (PARTITION BY pelanggan_id ORDER BY tanggal) FROM pesanan;
SELECT id, ROUND(100.0 * qty / SUM(qty) OVER (), 1) FROM pesanan;
SELECT * FROM (SELECT o.*, ROW_NUMBER() OVER (PARTITION BY pelanggan_id ORDER BY tanggal DESC) AS r FROM pesanan o) WHERE r = 1;`);
})();
