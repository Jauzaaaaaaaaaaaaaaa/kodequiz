# -*- coding: utf-8 -*-
# Studi Kasus Koding topik Python, bab 13–21 (dibaca oleh alat/buat-lab-python.py setelah lab-studi-python.py).

# ======================================================================
# Recordset tiruan ala Odoo: dipakai studi kasus Odoo (pre=PRE_ODOO).
# Cukup untuk berlatih menulis method model: for rec in self, mapped, filtered, sorted, ensure_one, raise.
# ======================================================================
PRE_ODOO = '''
class ValidationError(Exception):
    pass

class UserError(Exception):
    pass

class Recordset:
    """Tiruan recordset Odoo: bisa di-for, len(), filtered, mapped, sorted, ensure_one."""
    def __init__(self, records=()):
        self._r = list(records)
    def __iter__(self):
        return iter(self._r)
    def __len__(self):
        return len(self._r)
    def __bool__(self):
        return bool(self._r)
    def __getitem__(self, i):
        return self._r[i]
    def __repr__(self):
        return "Recordset(%d record)" % len(self._r)
    def filtered(self, fungsi):
        if isinstance(fungsi, str):
            return Recordset(r for r in self._r if getattr(r, fungsi))
        return Recordset(r for r in self._r if fungsi(r))
    def mapped(self, fungsi):
        if isinstance(fungsi, str):
            hasil = []
            for r in self._r:
                v = r
                for bagian in fungsi.split("."):
                    v = getattr(v, bagian)
                if isinstance(v, Recordset):
                    hasil.extend(x for x in v if x not in hasil)
                else:
                    hasil.append(v)
            return hasil
        return [fungsi(r) for r in self._r]
    def sorted(self, key=None, reverse=False):
        k = (lambda r: getattr(r, key)) if isinstance(key, str) else key
        return Recordset(sorted(self._r, key=k, reverse=reverse))
    def ensure_one(self):
        if len(self._r) != 1:
            raise ValueError("Expected singleton: %d record" % len(self._r))
        return self
    def __getattr__(self, nama):
        # seperti Odoo: atribut recordset berisi satu record = atribut record itu
        if nama.startswith("_"):
            raise AttributeError(nama)
        self.ensure_one()
        return getattr(self._r[0], nama)
    def write(self, vals):
        for r in self._r:
            r.__dict__.update(vals)
        return True

class Record:
    def __init__(self, **nilai):
        self.__dict__.update(nilai)
    def __repr__(self):
        return "Record(%s)" % ", ".join("%s=%r" % kv for kv in self.__dict__.items() if not isinstance(kv[1], Recordset))

def rs(*records):
    return Recordset(records)
'''

# ---------------------------------------------------------------- 13. odoo
studi(id="py-odoo", topik="python", setelah="odoo", judul="Menulis method model Odoo",
  contoh=dict(judul="Contoh: compute method dengan for record in self",
    penjelasan="<p>Di Odoo, <code>self</code> adalah <b>recordset</b>: kumpulan record, bisa berisi 0, 1, atau banyak. Karena itu method compute selalu ditulis <code>for order in self:</code>. <code>mapped('field')</code> mengambil nilai field dari semua record, <code>filtered(lambda r: ...)</code> menyaring.</p><p>Di soal latihan dipakai recordset tiruan (<code>Recordset</code>, <code>Record</code>, <code>rs(...)</code>) yang perilakunya mirip Odoo, jadi kodenya bisa dijalankan di browser.</p>",
    kode='''# Di Odoo sungguhan:
# @api.depends("order_line.price_subtotal")
# def _compute_amount(self):
#     for order in self:
#         order.amount_total = sum(order.order_line.mapped("price_subtotal"))

class Baris:
    def __init__(self, subtotal):
        self.price_subtotal = subtotal

class Order:
    def __init__(self, nama, baris):
        self.name = nama
        self.order_line = baris
        self.amount_total = 0

orders = [Order("S001", [Baris(100), Baris(250)]), Order("S002", [])]
for order in orders:                      # sama seperti: for order in self
    order.amount_total = sum(b.price_subtotal for b in order.order_line)
    print(order.name, order.amount_total)''',
    kunci="for order in self: selalu, karena self bisa berisi banyak record. Isi field hasil compute untuk SETIAP record, termasuk yang nilainya 0."),
  langkah=[
    L("py-odoo-1", "_compute_amount_total", 1, "_compute_amount_total",
      "Tulis fungsi <code>_compute_amount_total(self)</code>. <code>self</code> adalah recordset order; tiap order punya <code>order_line</code> (recordset baris dengan field <code>price_subtotal</code>). Isi <code>order.amount_total</code> = jumlah subtotal baris. Order tanpa baris harus bernilai 0.",
      'def _compute_amount_total(self):\n    for order in self:\n        order.amount_total = sum(order.order_line.mapped("price_subtotal"))\n',
      ['o1 = Record(name="S1", order_line=rs(Record(price_subtotal=100), Record(price_subtotal=250)), amount_total=None)\no2 = Record(name="S2", order_line=rs(), amount_total=None)\n_compute_amount_total(rs(o1, o2))\nhasil = [o1.amount_total, o2.amount_total]',
       'o = Record(name="S3", order_line=rs(Record(price_subtotal=19.5), Record(price_subtotal=0.5)), amount_total=None)\n_compute_amount_total(rs(o))\nhasil = o.amount_total',
       '_compute_amount_total(rs())\nhasil = "ok"'],
      ["Ikuti contoh: for order in self, lalu isi order.amount_total.", "sum(order.order_line.mapped(\"price_subtotal\")) memberi 0 untuk recordset kosong."],
      "Lupa mengisi field compute untuk sebagian record (misalnya hanya di dalam if) membuat Odoo melempar error 'Compute method failed to assign'. Selalu beri nilai untuk setiap record.",
      pre=PRE_ODOO, contoh=1,
      cek={'o1 = Record(name="S1", order_line=rs(Record(price_subtotal=100), Record(price_subtotal=250)), amount_total=None)\no2 = Record(name="S2", order_line=rs(), amount_total=None)\n_compute_amount_total(rs(o1, o2))\nhasil = [o1.amount_total, o2.amount_total]': [350, 0]}),
    L("py-odoo-2", "Action button ala Odoo", 2, "action_confirm",
      "Tulis <code>action_confirm(self)</code> untuk recordset order. Untuk <b>setiap</b> order: jika <code>state</code> bukan <code>\"draft\"</code>, lempar <code>UserError</code>. Jika tidak punya baris (<code>order_line</code> kosong), lempar <code>UserError</code>. Selain itu ubah state menjadi <code>\"sale\"</code>. Fungsi mengembalikan <code>True</code>. Periksa SEMUA order dulu sebelum mengubah state, supaya tidak ada yang berubah sebagian.",
      'def action_confirm(self):\n    for order in self:\n        if order.state != "draft":\n            raise UserError(f"{order.name} bukan draft")\n        if not order.order_line:\n            raise UserError(f"{order.name} belum punya baris")\n    for order in self:\n        order.state = "sale"\n    return True\n',
      ['o = Record(name="S1", state="draft", order_line=rs(Record(price_subtotal=1)))\naction_confirm(rs(o))\nhasil = o.state',
       'o = Record(name="S2", state="sale", order_line=rs(Record(price_subtotal=1)))\ntry:\n    action_confirm(rs(o))\n    hasil = "tidak error"\nexcept UserError:\n    hasil = "UserError"',
       'o = Record(name="S3", state="draft", order_line=rs())\ntry:\n    action_confirm(rs(o))\n    hasil = "tidak error"\nexcept UserError:\n    hasil = ("UserError", o.state)',
       'a = Record(name="A", state="draft", order_line=rs(Record(price_subtotal=1)))\nb = Record(name="B", state="cancel", order_line=rs(Record(price_subtotal=1)))\ntry:\n    action_confirm(rs(a, b))\nexcept UserError:\n    pass\nhasil = (a.state, b.state)'],
      ["Dua tahap: perulangan pertama hanya memeriksa dan raise UserError(\"pesan\"); perulangan kedua mengubah state.", "Kosong atau tidak: if not order.order_line."],
      "Tes terakhir memeriksa bahwa order A tidak ikut berubah ketika order B gagal. Di Odoo sungguhan transaksi database dibatalkan saat error, tetapi memeriksa dulu lalu menulis tetap praktik yang baik.",
      pre=PRE_ODOO, contoh=1,
      cek={'o = Record(name="S1", state="draft", order_line=rs(Record(price_subtotal=1)))\naction_confirm(rs(o))\nhasil = o.state': "sale"}),
  ])

# ---------------------------------------------------------------- 14. latihan (membaca kode) → memperbaiki bug
studi(id="py-latihan", topik="python", setelah="latihan", judul="Debugging: perbaiki kode yang salah",
  contoh=dict(judul="Contoh: tiga bug klasik Python",
    penjelasan="<p>Di coding test kamu sering diberi kode yang <b>sudah ditulis tapi salah</b>. Cara kerjanya: jalankan dengan contoh, bandingkan hasilnya, temukan baris penyebabnya. Tiga bug paling sering: (1) <code>range</code> kurang satu, (2) <code>return</code> di dalam perulangan, (3) list sebagai nilai bawaan parameter.</p>",
    kode='# Bug 1: range kurang satu\nprint(list(range(1, 5)))        # tidak memuat 5!\n\n# Bug 2: return terlalu cepat\ndef jumlah_salah(data):\n    total = 0\n    for x in data:\n        total += x\n        return total            # keluar di putaran pertama\nprint(jumlah_salah([1, 2, 3]))\n\n# Bug 3: list bawaan dipakai bersama\ndef tambah(x, wadah=[]):\n    wadah.append(x)\n    return wadah\nprint(tambah(1), tambah(2))     # [1, 2] [1, 2], bukan [1] [2]',
    kunci="Bawaan yang bisa berubah (list/dict) dibuat SEKALI saat def. Pakai wadah=None lalu if wadah is None: wadah = []."),
  langkah=[
    L("py-bug-1", "Perbaiki rata-rata", 1, "rata_rata",
      "Kode awal di editor punya <b>dua bug</b>. <code>rata_rata(nilai)</code> seharusnya mengembalikan rata-rata dibulatkan 2 desimal, dan 0 untuk list kosong. Perbaiki tanpa menulis ulang dari nol.",
      'def rata_rata(nilai):\n    if not nilai:\n        return 0\n    total = 0\n    for n in nilai:\n        total += n\n    return round(total / len(nilai), 2)\n',
      ["rata_rata([80, 90, 70])", "rata_rata([])", "rata_rata([1, 2])", "rata_rata([100])"],
      ["Jalankan dulu dan lihat contoh 1: hasilnya terlalu kecil? Perhatikan letak return.", "Bug kedua muncul pada list kosong: pembagian dengan nol."],
      "Indentasi menentukan blok di Python: return yang masuk ke dalam for membuat fungsi berhenti di putaran pertama.",
      awal='def rata_rata(nilai):\n    total = 0\n    for n in nilai:\n        total += n\n        return round(total / len(nilai), 2)\n',
      cek={"rata_rata([80, 90, 70])": 80.0}),
    L("py-bug-2", "Perbaiki pencatat order", 2, "catat_order",
      "Kode awal punya <b>tiga bug</b>. <code>catat_order(nomor, daftar=None)</code> seharusnya menambahkan nomor ke daftar (atau ke list baru bila tidak diberi), tidak menambahkan nomor yang sudah ada, lalu mengembalikan daftar yang <b>terurut</b>.",
      'def catat_order(nomor, daftar=None):\n    if daftar is None:\n        daftar = []\n    if nomor not in daftar:\n        daftar.append(nomor)\n    return sorted(daftar)\n',
      ['catat_order("S002")\nhasil = catat_order("S001")', 'catat_order("S001", ["S003", "S001"])', 'catat_order("S010", ["S002"])', 'catat_order("S005")'],
      ["Tes pertama memanggil fungsi dua kali. Kalau hasilnya memuat S002, kamu kena bug list bawaan (lihat contoh terpandu).", "Cek juga: list.sort() mengembalikan None, sedangkan sorted() mengembalikan list baru."],
      "Bug list bawaan sangat terkenal di wawancara Python. sort() mengurutkan di tempat dan mengembalikan None; return daftar.sort() adalah bug klasik kedua.",
      awal='def catat_order(nomor, daftar=[]):\n    daftar.append(nomor)\n    return daftar.sort()\n',
      cek={'catat_order("S002")\nhasil = catat_order("S001")': ["S001"], 'catat_order("S001", ["S003", "S001"])': ["S001", "S003"]}),
  ])

# ---------------------------------------------------------------- 15. comprehension
studi(id="py-comp", topik="python", setelah="comprehension", judul="Comprehension untuk transformasi data",
  contoh=dict(judul="Contoh: list, dict, dan saringan dalam satu baris",
    penjelasan="<p>Bentuk umum: <code>[hasil for item in sumber if syarat]</code>. Dict comprehension memakai <code>{kunci: nilai for ...}</code>. Comprehension menggantikan pola for + append yang panjang.</p>",
    kode='harga = {"kopi": 15000, "teh": 8000, "roti": 12000}\nmurah = [p for p, h in harga.items() if h < 13000]\nprint(murah)\nnaik = {p: round(h * 1.1) for p, h in harga.items()}\nprint(naik)\nprint([x * x for x in range(6) if x % 2 == 0])',
    kunci="if di belakang = saringan. if-else di depan for = mengubah nilai."),
  langkah=[
    L("py-comp-1", "Kuadrat bilangan genap", 1, "kuadrat_genap",
      "Buat <code>kuadrat_genap(n)</code> yang mengembalikan list kuadrat semua bilangan genap dari 0 sampai n (termasuk n), dalam <b>satu baris</b> comprehension.",
      'def kuadrat_genap(n):\n    return [x * x for x in range(n + 1) if x % 2 == 0]\n',
      ["kuadrat_genap(6)", "kuadrat_genap(0)", "kuadrat_genap(1)", "kuadrat_genap(9)"],
      ["Sama dengan baris terakhir contoh, tapi sampai n.", "range(n + 1) agar n ikut."],
      "Comprehension dibaca: ambil x*x, untuk x di range, jika x genap.",
      cek={"kuadrat_genap(6)": [0, 4, 16, 36]}),
    L("py-comp-2", "Indeks kata penting", 2, "indeks_kata",
      "Buat <code>indeks_kata(kalimat, stopwords)</code> yang mengembalikan dict <code>{kata: panjang}</code> untuk kata dalam huruf kecil yang <b>bukan</b> stopword dan panjangnya lebih dari 3. Tanda baca <code>.,!?</code> di tepi kata dibuang.",
      'def indeks_kata(kalimat, stopwords):\n    kata = [k.strip(".,!?").lower() for k in kalimat.split()]\n    return {k: len(k) for k in kata if len(k) > 3 and k not in stopwords}\n',
      ['indeks_kata("Odoo adalah ERP yang sangat fleksibel!", {"adalah", "yang"})', 'indeks_kata("", set())', 'indeks_kata("Data, data, DATA.", set())', 'indeks_kata("ini itu dan", {"dan"})'],
      ["Bersihkan dulu dengan list comprehension: k.strip(\".,!?\").lower().", "Lalu dict comprehension dengan saringan dua syarat (and)."],
      "Dua comprehension berurutan (bersihkan, lalu saring) lebih mudah dibaca daripada satu comprehension yang terlalu panjang.",
      cek={'indeks_kata("Odoo adalah ERP yang sangat fleksibel!", {"adalah", "yang"})': {"odoo": 4, "sangat": 6, "fleksibel": 9}}),
  ])

# ---------------------------------------------------------------- 16. fungsi lanjut
studi(id="py-funlanjut", topik="python", setelah="fungsilanjut", judul="*args, **kwargs, dan decorator",
  contoh=dict(judul="Contoh: menerima argumen fleksibel dan membungkus fungsi",
    penjelasan="<p><code>*args</code> mengumpulkan argumen posisi menjadi tuple, <code>**kwargs</code> mengumpulkan argumen bernama menjadi dict. Decorator adalah fungsi yang menerima fungsi lalu mengembalikan fungsi baru yang membungkusnya, misalnya untuk mencatat log.</p>",
    kode='def total(*angka, diskon=0):\n    return sum(angka) * (1 - diskon / 100)\n\nprint(total(1, 2, 3), total(100, 100, diskon=10))\n\ndef log(fungsi):\n    def pembungkus(*args, **kwargs):\n        print("memanggil", fungsi.__name__, args)\n        return fungsi(*args, **kwargs)\n    return pembungkus\n\n@log\ndef kali(a, b):\n    return a * b\n\nprint(kali(3, 4))',
    kunci="Decorator: def dekor(f): def bungkus(*args, **kwargs): ... return f(*args, **kwargs); return bungkus."),
  langkah=[
    L("py-fl-1", "Gabungkan teks fleksibel", 1, "gabung",
      "Buat <code>gabung(*bagian, pemisah=\" \", besar=False)</code> yang menggabungkan semua bagian (diubah ke str) dengan pemisah. Jika <code>besar=True</code>, hasilnya huruf besar semua.",
      'def gabung(*bagian, pemisah=" ", besar=False):\n    teks = pemisah.join(str(b) for b in bagian)\n    return teks.upper() if besar else teks\n',
      ['gabung("SO", 2026, "0001", pemisah="/")', 'gabung("halo", "dunia", besar=True)', 'gabung()', 'gabung(1, 2, 3)'],
      ["*bagian menjadi tuple; ubah tiap item ke str sebelum join.", "Parameter setelah *args hanya bisa diisi dengan nama (keyword-only)."],
      "Parameter setelah *args otomatis keyword-only, jadi tidak tertukar dengan bagian teks.",
      awal='def gabung(*bagian, pemisah=" ", besar=False):\n    # tulis kodemu di sini\n    pass\n',
      cek={'gabung("SO", 2026, "0001", pemisah="/")': "SO/2026/0001"}),
    L("py-fl-2", "Decorator penghitung panggilan", 2, "hitung_panggilan",
      "Buat decorator <code>hitung_panggilan</code>. Fungsi yang dibungkus tetap bekerja normal, dan punya atribut <code>jumlah</code> yang bertambah 1 setiap kali dipanggil. Nama fungsi asli (<code>__name__</code>) harus tetap sama (pakai <code>functools.wraps</code>).",
      'import functools\n\ndef hitung_panggilan(fungsi):\n    @functools.wraps(fungsi)\n    def pembungkus(*args, **kwargs):\n        pembungkus.jumlah += 1\n        return fungsi(*args, **kwargs)\n    pembungkus.jumlah = 0\n    return pembungkus\n',
      ['@hitung_panggilan\ndef kali(a, b):\n    return a * b\nkali(2, 3)\nkali(4, b=5)\nhasil = (kali(1, 1), kali.jumlah)',
       '@hitung_panggilan\ndef sapa(nama="dunia"):\n    return "halo " + nama\nhasil = (sapa(), sapa.__name__, sapa.jumlah)',
       '@hitung_panggilan\ndef f():\n    return 1\nhasil = f.jumlah'],
      ["Ikuti pola log di contoh, tapi simpan penghitung sebagai atribut fungsi pembungkus: pembungkus.jumlah = 0.", "Di dalam pembungkus: pembungkus.jumlah += 1 lalu return fungsi(*args, **kwargs). Tambahkan @functools.wraps(fungsi) di atas def pembungkus."],
      "functools.wraps menyalin nama dan dokumentasi fungsi asli. Odoo memakai banyak decorator: @api.depends, @api.constrains, @api.model.",
      contoh=1,
      cek={'@hitung_panggilan\ndef f():\n    return 1\nhasil = f.jumlah': 0}),
  ])

# ---------------------------------------------------------------- 17. iterator
studi(id="py-iter", topik="python", setelah="iterator", judul="Generator untuk data besar",
  contoh=dict(judul="Contoh: yield menghasilkan nilai satu per satu",
    penjelasan="<p>Fungsi dengan <code>yield</code> adalah generator: nilainya dibuat satu per satu saat diminta, jadi hemat memori untuk data besar (misalnya membaca jutaan baris log). Ambil semua dengan <code>list(...)</code> atau sebagian dengan <code>itertools.islice</code>.</p>",
    kode='def hitung_mundur(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nprint(list(hitung_mundur(3)))\n\ndef per_kelompok(data, ukuran):\n    for i in range(0, len(data), ukuran):\n        yield data[i:i + ukuran]\n\nprint(list(per_kelompok([1, 2, 3, 4, 5], 2)))',
    kunci="yield menghentikan sementara fungsi dan melanjutkan di putaran berikutnya. range(0, n, langkah) melompat per langkah."),
  langkah=[
    L("py-it-1", "Batch data", 1, "batch",
      "Buat generator <code>batch(data, n)</code> yang menghasilkan potongan list berisi n item (potongan terakhir boleh lebih pendek). Odoo memakai pola ini untuk memproses record per kelompok.",
      'def batch(data, n):\n    for i in range(0, len(data), n):\n        yield data[i:i + n]\n',
      ["list(batch([1, 2, 3, 4, 5], 2))", "list(batch([], 3))", "list(batch(list(range(6)), 3))", "list(batch(['a'], 5))"],
      ["Sama dengan per_kelompok di contoh.", "Pastikan memakai yield, bukan return list."],
      "Memproses data per batch menjaga memori tetap kecil dan dipakai untuk impor data besar atau pengiriman email massal.",
      cek={"list(batch([1, 2, 3, 4, 5], 2))": [[1, 2], [3, 4], [5]]}),
    L("py-it-2", "Generator nomor dokumen tak terbatas", 2, "nomor_dokumen",
      "Buat generator <code>nomor_dokumen(awalan, mulai=1, padding=4)</code> yang menghasilkan nomor tanpa akhir: <code>awalan + angka dengan nol di depan</code>. Tes memakai <code>itertools.islice</code> untuk mengambil beberapa nomor.",
      'def nomor_dokumen(awalan, mulai=1, padding=4):\n    n = mulai\n    while True:\n        yield f"{awalan}{n:0{padding}d}"\n        n += 1\n',
      ['import itertools\nhasil = list(itertools.islice(nomor_dokumen("SO/2026/"), 3))', 'import itertools\nhasil = list(itertools.islice(nomor_dokumen("INV", 99, 3), 3))', 'import itertools\nhasil = list(itertools.islice(nomor_dokumen("X", padding=1), 2))'],
      ["while True dengan yield aman karena generator hanya berjalan saat diminta.", "Format nol di depan: f\"{n:04d}\". Panjangnya dari parameter: f\"{n:0{padding}d}\"."],
      "Generator tak terbatas hanya aman bila pemakainya membatasi (islice, break). Ini mirip cara ir.sequence memberi nomor berikutnya.",
      awal='def nomor_dokumen(awalan, mulai=1, padding=4):\n    # tulis kodemu di sini (pakai yield)\n    pass\n',
      contoh=1,
      cek={'import itertools\nhasil = list(itertools.islice(nomor_dokumen("SO/2026/"), 3))': ["SO/2026/0001", "SO/2026/0002", "SO/2026/0003"]}),
  ])

# ---------------------------------------------------------------- 18. oop2
studi(id="py-oop2", topik="python", setelah="oop2", judul="dataclass, @property, dan dunder method",
  contoh=dict(judul="Contoh: dataclass dan @property",
    penjelasan="<p><code>@dataclass</code> membuat <code>__init__</code>, <code>__repr__</code>, dan <code>__eq__</code> otomatis dari daftar atribut. <code>@property</code> membuat method bisa dibaca seperti atribut (tanpa kurung), cocok untuk nilai turunan seperti total.</p>",
    kode='from dataclasses import dataclass\n\n@dataclass\nclass Baris:\n    produk: str\n    qty: int\n    harga: float\n\n    @property\n    def subtotal(self):\n        return self.qty * self.harga\n\nb = Baris("Kopi", 2, 15000)\nprint(b)\nprint(b.subtotal)\nprint(b == Baris("Kopi", 2, 15000))',
    kunci="@property = field hitungan (mirip field compute di Odoo). dataclass menghemat boilerplate."),
  langkah=[
    L("py-oop2-1", "dataclass Baris dengan diskon", 1, "Baris",
      "Buat <code>@dataclass</code> <code>Baris</code> dengan atribut <code>produk</code>, <code>qty</code>, <code>harga</code>, dan <code>diskon</code> (bawaan 0). Tambahkan <code>@property subtotal</code> = qty × harga × (1 − diskon/100), dibulatkan 2 desimal.",
      'from dataclasses import dataclass\n\n@dataclass\nclass Baris:\n    produk: str\n    qty: int\n    harga: float\n    diskon: float = 0\n\n    @property\n    def subtotal(self):\n        return round(self.qty * self.harga * (1 - self.diskon / 100), 2)\n',
      ['Baris("Kopi", 2, 15000, 10).subtotal', 'Baris("Teh", 1, 8000).subtotal', 'Baris("A", 3, 1.5) == Baris("A", 3, 1.5)', 'repr(Baris("A", 1, 2))'],
      ["Tulis atribut dengan anotasi tipe di badan class, atribut berbawaan di paling bawah.", "subtotal memakai @property, jadi dipanggil tanpa kurung."],
      "dataclass memberi __eq__ dan __repr__ gratis, terlihat dari tes 3 dan 4.",
      awal='from dataclasses import dataclass\n\n@dataclass\nclass Baris:\n    pass\n',
      cek={'Baris("Kopi", 2, 15000, 10).subtotal': 27000.0}),
    L("py-oop2-2", "Class Uang dengan operator", 2, "Uang",
      "Buat class <code>Uang</code> yang menyimpan <code>jumlah</code> (int rupiah). Dukung: <code>Uang(a) + Uang(b)</code> → Uang baru, <code>Uang(a) * angka</code> → Uang baru (dibulatkan dengan round), <code>==</code> membandingkan jumlah, dan <code>str(Uang(1500000))</code> → <code>\"Rp 1.500.000\"</code>.",
      'class Uang:\n    def __init__(self, jumlah):\n        self.jumlah = jumlah\n\n    def __add__(self, lain):\n        return Uang(self.jumlah + lain.jumlah)\n\n    def __mul__(self, angka):\n        return Uang(round(self.jumlah * angka))\n\n    def __eq__(self, lain):\n        return isinstance(lain, Uang) and self.jumlah == lain.jumlah\n\n    def __str__(self):\n        return "Rp " + f"{self.jumlah:,}".replace(",", ".")\n',
      ['str(Uang(1500000))', 'str(Uang(1000) + Uang(2500))', 'str(Uang(15000) * 1.11)', 'Uang(5) == Uang(5)', 'Uang(5) == 5'],
      ["Setiap operator punya method khusus: + → __add__, * → __mul__, == → __eq__, str() → __str__.", "__add__ dan __mul__ mengembalikan Uang BARU, tidak mengubah self."],
      "Dunder method membuat objekmu berperilaku seperti tipe bawaan. Perbandingan dengan tipe lain mengembalikan False, bukan error.",
      awal='class Uang:\n    def __init__(self, jumlah):\n        self.jumlah = jumlah\n',
      cek={'str(Uang(15000) * 1.11)': "Rp 16.650"}),
  ])

# ---------------------------------------------------------------- 19. stdlib
studi(id="py-stdlib", topik="python", setelah="stdlib", judul="Pustaka standar: datetime, Counter, re",
  contoh=dict(judul="Contoh: selisih tanggal, Counter, dan regex",
    penjelasan="<p>Tiga pustaka yang paling sering muncul di pekerjaan: <code>datetime</code> untuk tanggal, <code>collections.Counter</code> untuk menghitung, dan <code>re</code> untuk mencari pola teks.</p>",
    kode='from datetime import date\nfrom collections import Counter\nimport re\n\nprint((date(2026, 12, 31) - date(2026, 11, 24)).days)\nemail = ["a@gmail.com", "b@yahoo.com", "c@gmail.com"]\nprint(Counter(e.split("@")[1] for e in email).most_common(1))\nprint(re.findall(r"\\d+", "INV/2026/0042"))',
    kunci="(tanggal2 - tanggal1).days = selisih hari. Counter(...).most_common(n). re.findall(pola, teks)."),
  langkah=[
    L("py-std-1", "Umur dalam tahun", 1, "umur",
      "Buat <code>umur(lahir, hari_ini)</code> (keduanya teks <code>\"YYYY-MM-DD\"</code>) yang mengembalikan umur dalam tahun penuh. Ulang tahun yang belum lewat tahun ini belum dihitung.",
      'from datetime import date\n\ndef umur(lahir, hari_ini):\n    a, b = date.fromisoformat(lahir), date.fromisoformat(hari_ini)\n    return b.year - a.year - ((b.month, b.day) < (a.month, a.day))\n',
      ['umur("2003-05-10", "2026-11-24")', 'umur("2003-12-01", "2026-11-24")', 'umur("2000-11-24", "2026-11-24")', 'umur("2026-01-01", "2026-11-24")'],
      ["Selisih tahun dulu: b.year - a.year.", "Kurangi 1 bila ulang tahun belum lewat: bandingkan tuple (bulan, hari). True bernilai 1 saat dikurangkan."],
      "Membagi selisih hari dengan 365 salah karena tahun kabisat. Membandingkan tuple (bulan, hari) adalah cara yang tepat.",
      cek={'umur("2003-12-01", "2026-11-24")': 22}),
    L("py-std-2", "Ringkas kode produk", 2, "ringkas_kode",
      "Teks catatan gudang berisi kode produk berbentuk 3 huruf besar, tanda minus, 4 angka (contoh <code>KRS-0012</code>). Buat <code>ringkas_kode(teks)</code> yang mengembalikan list tuple <code>(kode, jumlah)</code> diurutkan dari paling sering, seri diurutkan kode abjad.",
      'import re\nfrom collections import Counter\n\ndef ringkas_kode(teks):\n    hitung = Counter(re.findall(r"\\b[A-Z]{3}-\\d{4}\\b", teks))\n    return sorted(hitung.items(), key=lambda p: (-p[1], p[0]))\n',
      ['ringkas_kode("Ambil KRS-0012 dan MJA-0003, lalu KRS-0012 lagi")', 'ringkas_kode("tidak ada kode, krs-0012 huruf kecil")', 'ringkas_kode("AAA-1111 BBB-2222 BBB-2222 AAA-1111")', 'ringkas_kode("KRSS-0012 KRS-00123 KRS-0012")'],
      ["Pola regex: r\"\\b[A-Z]{3}-\\d{4}\\b\". {3} = tepat 3 kali, \\b = batas kata.", "Counter untuk menghitung, lalu sorted dengan key (-jumlah, kode)."],
      "\\b mencegah 'KRSS-0012' atau 'KRS-00123' ikut tertangkap. Validasi format dengan regex umum dipakai saat membersihkan data impor.",
      cek={'ringkas_kode("Ambil KRS-0012 dan MJA-0003, lalu KRS-0012 lagi")': [("KRS-0012", 2), ("MJA-0003", 1)]}),
  ])

# ---------------------------------------------------------------- 20. kerja (testing)
PRE_UJI = '''
def _diskon_benar(harga, persen):
    if not 0 <= persen <= 100:
        raise ValueError("persen di luar 0-100")
    return round(harga * (1 - persen / 100))

def _diskon_bug1(harga, persen):          # lupa validasi
    return round(harga * (1 - persen / 100))

def _diskon_bug2(harga, persen):          # rumus salah
    if not 0 <= persen <= 100:
        raise ValueError("persen di luar 0-100")
    return round(harga * persen / 100)

def _diskon_bug3(harga, persen):          # tidak dibulatkan
    if not 0 <= persen <= 100:
        raise ValueError("persen di luar 0-100")
    return harga * (1 - persen / 100)

diskon = _diskon_benar

def nilai_tes(ns):
    """Jalankan semua fungsi test_ milikmu terhadap versi benar dan 3 versi bug."""
    tes = [f for n, f in sorted(ns.items()) if n.startswith("test_") and callable(f)]
    if not tes:
        return "belum ada fungsi test_"
    def lulus(versi):
        ns["diskon"] = versi
        try:
            for f in tes:
                f()
            return True
        except Exception:
            return False
    return {"benar_lulus": lulus(_diskon_benar), "bug_tertangkap": [not lulus(v) for v in (_diskon_bug1, _diskon_bug2, _diskon_bug3)]}
'''
studi(id="py-kerja", topik="python", setelah="kerja", judul="Menulis tes otomatis",
  contoh=dict(judul="Contoh: fungsi test_ dengan assert",
    penjelasan="<p>Tes otomatis adalah fungsi yang memanggil kodemu dan memeriksa hasilnya dengan <code>assert</code>. pytest menjalankan semua fungsi yang namanya diawali <code>test_</code>. Tes yang baik juga memeriksa bahwa error yang benar dilempar.</p>",
    kode='def luas(p, l):\n    if p < 0 or l < 0:\n        raise ValueError("tidak boleh negatif")\n    return p * l\n\ndef test_luas_normal():\n    assert luas(3, 4) == 12\n\ndef test_luas_negatif():\n    try:\n        luas(-1, 2)\n        assert False, "seharusnya ValueError"\n    except ValueError:\n        pass\n\ntest_luas_normal(); test_luas_negatif()\nprint("semua tes lulus")',
    kunci="Tes yang baik: kasus normal, kasus tepi, dan kasus error. Dengan pytest, cek error ditulis: with pytest.raises(ValueError): ..."),
  langkah=[
    L("py-kerja-1", "Type hint dan validasi", 1, "rata_rata",
      "Buat <code>rata_rata(nilai: list[float]) -&gt; float</code> yang mengembalikan rata-rata dibulatkan 2 desimal. Jika list kosong, lempar <code>ValueError</code>.",
      'def rata_rata(nilai: list[float]) -> float:\n    if not nilai:\n        raise ValueError("list kosong")\n    return round(sum(nilai) / len(nilai), 2)\n',
      ["rata_rata([1.5, 2.5, 3])", 'try:\n    rata_rata([])\n    hasil = "tidak error"\nexcept ValueError:\n    hasil = "ValueError"', "rata_rata.__annotations__.get('return') is float", "rata_rata([10])"],
      ["Type hint ditulis nilai: list[float] dan -> float setelah kurung.", "raise ValueError(\"...\") untuk list kosong."],
      "Type hint tidak dicek Python saat berjalan, tetapi membantu editor dan pembaca. Tes 3 memastikan anotasinya ditulis.",
      awal='def rata_rata(nilai):\n    # tambahkan type hint dan isi fungsinya\n    pass\n',
      cek={"rata_rata([1.5, 2.5, 3])": 2.33}),
    L("py-kerja-2", "Tulis tes yang menangkap bug", 3, "test_",
      "Fungsi <code>diskon(harga, persen)</code> sudah disediakan: ia mengembalikan harga setelah diskon, <b>dibulatkan</b> ke int, dan melempar <code>ValueError</code> jika persen di luar 0–100. Tugasmu menulis fungsi <code>test_...</code> (boleh lebih dari satu) yang memanggil <code>diskon</code>. Tesmu harus <b>lulus</b> untuk versi yang benar dan <b>gagal</b> untuk 3 versi yang punya bug tersembunyi.",
      'def test_diskon_normal():\n    assert diskon(10000, 10) == 9000\n\ndef test_dibulatkan():\n    assert diskon(999, 33) == 669\n\ndef test_persen_tidak_valid():\n    try:\n        diskon(1000, 150)\n        assert False\n    except ValueError:\n        pass\n',
      ["nilai_tes(globals())", "nilai_tes(globals())['benar_lulus']", "sum(nilai_tes(globals())['bug_tertangkap'])"],
      ["Pikirkan bug yang mungkin: lupa validasi persen, rumus terbalik, lupa membulatkan. Buat satu tes untuk masing-masing.", "Untuk pembulatan, pilih angka yang hasilnya tidak bulat, misalnya diskon(999, 33). Hitung sendiri hasil yang benar: round(999 × 0,67) = 669."],
      "Tes yang baik dinilai dari bug yang bisa ditangkapnya (mutation testing). Odoo memakai TransactionCase dengan self.assertEqual dan self.assertRaises, tapi idenya sama.",
      awal='# diskon(harga, persen) sudah tersedia.\n\ndef test_diskon_normal():\n    assert diskon(10000, 10) == 9000\n',
      pre=PRE_UJI, contoh=1,
      cek={"nilai_tes(globals())": {"benar_lulus": True, "bug_tertangkap": [True, True, True]}}),
  ])

# ---------------------------------------------------------------- 21. proyek
studi(id="py-proyek", topik="python", setelah="proyek", judul="Proyek mini: laporan penjualan",
  contoh=dict(judul="Contoh: dari transaksi mentah ke ringkasan",
    penjelasan="<p>Proyek kecil biasanya menggabungkan semua dasar: perulangan, dict, sorting, dan format. Pecah menjadi langkah: kumpulkan → hitung → urutkan → format.</p>",
    kode='transaksi = [\n    {"tgl": "2026-11-01", "produk": "Kopi", "qty": 2, "harga": 15000},\n    {"tgl": "2026-11-01", "produk": "Teh", "qty": 1, "harga": 8000},\n    {"tgl": "2026-11-02", "produk": "Kopi", "qty": 1, "harga": 15000},\n]\nper_hari = {}\nfor t in transaksi:\n    per_hari[t["tgl"]] = per_hari.get(t["tgl"], 0) + t["qty"] * t["harga"]\nfor tgl, total in sorted(per_hari.items()):\n    print(tgl, total)',
    kunci="Kumpulkan dengan dict, urutkan dengan sorted(dict.items()), baru format."),
  langkah=[
    L("py-proj-1", "Laporan per produk", 2, "laporan",
      "Buat <code>laporan(transaksi)</code>: kembalikan dict <code>{\"total\": omzet, \"produk\": [(nama, qty, omzet), ...], \"terlaris\": nama}</code>. List produk diurutkan omzet terbesar (seri: nama abjad). <code>terlaris</code> = produk dengan <b>qty</b> terbanyak (seri: nama abjad), atau None bila tidak ada transaksi.",
      'def laporan(transaksi):\n    data = {}\n    for t in transaksi:\n        d = data.setdefault(t["produk"], [0, 0])\n        d[0] += t["qty"]\n        d[1] += t["qty"] * t["harga"]\n    produk = sorted(((n, q, o) for n, (q, o) in data.items()), key=lambda p: (-p[2], p[0]))\n    terlaris = min(data, key=lambda n: (-data[n][0], n)) if data else None\n    return {"total": sum(o for _, _, o in produk), "produk": produk, "terlaris": terlaris}\n',
      ['laporan([{"produk": "Kopi", "qty": 2, "harga": 15000}, {"produk": "Teh", "qty": 5, "harga": 4000}, {"produk": "Kopi", "qty": 1, "harga": 15000}])',
       'laporan([])',
       'laporan([{"produk": "B", "qty": 1, "harga": 10}, {"produk": "A", "qty": 1, "harga": 10}])'],
      ["Kumpulkan per produk: qty dan omzet, misalnya dict nama → [qty, omzet].", "Urutkan dengan key (-omzet, nama). Terlaris dipilih dengan min(..., key=lambda n: (-qty, n))."],
      "Perhatikan bedanya: urutan daftar memakai omzet, sedangkan 'terlaris' memakai qty. Membaca soal dengan teliti adalah separuh dari coding test.",
      cek={'laporan([])': {"total": 0, "produk": [], "terlaris": None}}),
    L("py-proj-2", "Rekap absensi", 2, "rekap_absen",
      "Log absensi berisi baris <code>\"YYYY-MM-DD HH:MM NAMA MASUK|PULANG\"</code>. Buat <code>rekap_absen(log)</code> yang mengembalikan dict <code>{nama: total_menit_kerja}</code>. Pasangkan MASUK dengan PULANG berikutnya pada nama yang sama; MASUK tanpa PULANG diabaikan. Nama dalam log tidak mengandung spasi.",
      'from datetime import datetime\n\ndef rekap_absen(log):\n    masuk, total = {}, {}\n    for baris in log.strip().splitlines():\n        tgl, jam, nama, jenis = baris.split()\n        waktu = datetime.strptime(tgl + " " + jam, "%Y-%m-%d %H:%M")\n        if jenis == "MASUK":\n            masuk[nama] = waktu\n        elif nama in masuk:\n            menit = int((waktu - masuk.pop(nama)).total_seconds() // 60)\n            total[nama] = total.get(nama, 0) + menit\n    return total\n',
      ['rekap_absen("2026-11-24 08:00 Ani MASUK\\n2026-11-24 08:15 Budi MASUK\\n2026-11-24 16:30 Ani PULANG\\n2026-11-24 17:00 Budi PULANG")',
       'rekap_absen("2026-11-24 08:00 Ani MASUK")',
       'rekap_absen("2026-11-24 08:00 Ani MASUK\\n2026-11-24 12:00 Ani PULANG\\n2026-11-24 13:00 Ani MASUK\\n2026-11-24 17:00 Ani PULANG")',
       'rekap_absen("2026-11-24 22:00 Cita MASUK\\n2026-11-25 06:00 Cita PULANG")'],
      ["Pecah tiap baris dengan split() menjadi 4 bagian. Simpan waktu MASUK terakhir per nama di dict.", "Saat PULANG: selisih waktu (datetime - datetime) memberi timedelta; .total_seconds() // 60 = menit."],
      "Memakai datetime (bukan menghitung jam manual) membuat shift lewat tengah malam tetap benar, seperti tes terakhir. Ini dasar modul Attendances di Odoo.",
      cek={'rekap_absen("2026-11-24 22:00 Cita MASUK\\n2026-11-25 06:00 Cita PULANG")': {"Cita": 480}}),
  ])
