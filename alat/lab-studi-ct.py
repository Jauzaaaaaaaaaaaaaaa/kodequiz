# -*- coding: utf-8 -*-
# Studi Kasus Koding untuk topik "Coding Test Odoo Developer" (ct). Dibaca oleh alat/buat-lab-python.py
# setelah lab-studi-python*.py, jadi L(), PRE_ODOO, dan studi() sudah tersedia.
# Langkah berupa teks = memakai ulang tantangan Lab dengan id itu.

# ---------------------------------------------------------------- pemeriksa XML & CSV Odoo
PRE_XML = r'''
import csv, io, re
import xml.etree.ElementTree as ET

def _rapat(s):
    return re.sub(r"\s+", "", s or "").replace('"', "'")

def _parse(xml):
    try:
        return ET.fromstring(xml.strip()), None
    except ET.ParseError as e:
        return None, "XML tidak valid (" + str(e) + "). Cek tag yang belum ditutup, tanda kutip, dan < yang harus ditulis &lt;."

def _record(r, model, m):
    if r.tag != "record":
        m.append("Elemen terluar harus <record>, bukan <" + r.tag + ">.")
    if r.get("model") != model:
        m.append("Atribut model pada <record> harus '" + model + "'.")
    if not r.get("id"):
        m.append("<record> butuh atribut id (ID XML yang unik).")
    return {f.get("name"): f for f in r.findall("field")}

def cek_form(xml):
    """Pemeriksa studi kasus: form view library.book."""
    r, err = _parse(xml)
    if err:
        return [err]
    m = []
    f = _record(r, "ir.ui.view", m)
    if "model" not in f or (f["model"].text or "").strip() != "library.book":
        m.append('Tambahkan <field name="model">library.book</field>.')
    if re.search(r"\battrs\s*=|\bstates\s*=", xml):
        m.append("attrs dan states sudah dihapus di Odoo 17. Tulis kondisinya langsung, misalnya invisible=\"state != 'draft'\".")
    arch = f.get("arch")
    if arch is None or arch.get("type") != "xml":
        m.append('Tambahkan <field name="arch" type="xml"> yang berisi <form>.')
        return m
    form = arch.find("form")
    if form is None:
        m.append("Di dalam arch harus ada <form>.")
        return m
    header = form.find("header")
    if header is None:
        m.append("Tombol dan statusbar ditaruh di dalam <header> (anak langsung <form>).")
    else:
        tombol = [b for b in header.findall("button") if b.get("name") == "action_make_available"]
        if not tombol:
            m.append('Di <header> belum ada <button name="action_make_available" .../>.')
        else:
            b = tombol[0]
            if b.get("type") != "object":
                m.append('Tombol yang memanggil method Python butuh type="object".')
            if _rapat(b.get("invisible")) != "state!='draft'":
                m.append("Tombol harus tersembunyi kecuali status draft: invisible=\"state != 'draft'\".")
            if not b.get("string"):
                m.append('Beri tombol label lewat atribut string, misalnya string="Tersedia".')
        st = [x for x in header.findall("field") if x.get("name") == "state"]
        if not st or st[0].get("widget") != "statusbar":
            m.append('Tambahkan <field name="state" widget="statusbar"/> di dalam <header>.')
    sheet = form.find("sheet")
    if sheet is None:
        m.append("Isi form dibungkus <sheet> (anak langsung <form>).")
    else:
        ada = {x.get("name") for x in sheet.iter("field")}
        for wajib in ("name", "author_id", "isbn"):
            if wajib not in ada:
                m.append("Field " + wajib + " belum ada di dalam <sheet>.")
    return m

def cek_inherit(xml):
    """Pemeriksa studi kasus: mewarisi form sale.order."""
    r, err = _parse(xml)
    if err:
        return [err]
    m = []
    f = _record(r, "ir.ui.view", m)
    if "model" not in f or (f["model"].text or "").strip() != "sale.order":
        m.append('Tambahkan <field name="model">sale.order</field>.')
    if "inherit_id" not in f or f["inherit_id"].get("ref") != "sale.view_order_form":
        m.append('View turunan butuh <field name="inherit_id" ref="sale.view_order_form"/>.')
    arch = f.get("arch")
    if arch is None or arch.get("type") != "xml":
        m.append('Tambahkan <field name="arch" type="xml">.')
        return m
    xp = arch.findall("xpath")
    if not xp:
        m.append("Di dalam arch belum ada <xpath>.")
        return m
    sasaran = [x for x in xp if _rapat(x.get("expr")) == "//field[@name='partner_id']"]
    if not sasaran:
        m.append("expr xpath harus menunjuk field partner_id: expr=\"//field[@name='partner_id']\".")
        return m
    x = sasaran[0]
    if x.get("position") != "after":
        m.append('Field baru harus muncul SETELAH partner_id: position="after".')
    if not any(c.tag == "field" and c.get("name") == "x_approval_note" for c in x):
        m.append('Di dalam xpath belum ada <field name="x_approval_note"/>.')
    tombol = [x for x in xp if _rapat(x.get("expr")) in ("//header", "/form/header", "//form/header")]
    if not tombol or tombol[0].get("position") != "inside":
        m.append('Tambahkan xpath kedua: expr="//header" position="inside" untuk tombol approve.')
    else:
        b = [c for c in tombol[0] if c.tag == "button" and c.get("name") == "action_amount_approve"]
        if not b:
            m.append('Di xpath header belum ada <button name="action_amount_approve" .../>.')
        else:
            if b[0].get("type") != "object":
                m.append('Tombol approve butuh type="object".')
            if _rapat(b[0].get("invisible")) != "state!='to_approve'":
                m.append("Tombol approve hanya tampil di status to_approve: invisible=\"state != 'to_approve'\".")
            if b[0].get("groups") != "sale_amount_approval.group_so_amount_approver":
                m.append('Batasi tombol untuk grup approver: groups="sale_amount_approval.group_so_amount_approver".')
    return m

def cek_acl(teks):
    """Pemeriksa studi kasus: ir.model.access.csv untuk library.book."""
    baris = [b for b in csv.reader(io.StringIO(teks.strip())) if b]
    if not baris:
        return ["File masih kosong."]
    m = []
    kepala = ["id", "name", "model_id:id", "group_id:id", "perm_read", "perm_write", "perm_create", "perm_unlink"]
    if [k.strip() for k in baris[0]] != kepala:
        m.append("Baris pertama (header) harus persis: " + ",".join(kepala))
        return m
    data = {}
    for i, b in enumerate(baris[1:], 2):
        if len(b) != 8:
            m.append("Baris " + str(i) + " harus punya 8 kolom, sekarang " + str(len(b)) + ".")
            continue
        b = [x.strip() for x in b]
        if b[2] != "model_library_book":
            m.append("Baris " + str(i) + ": model_id:id untuk library.book adalah model_library_book.")
        grup = b[3].split(".")[-1]
        data[grup] = b[4:]
    if "group_library_user" not in data:
        m.append("Belum ada baris untuk grup group_library_user.")
    elif data["group_library_user"] != ["1", "0", "0", "0"]:
        m.append("Library User hanya boleh membaca: perm 1,0,0,0.")
    if "group_library_manager" not in data:
        m.append("Belum ada baris untuk grup group_library_manager.")
    elif data["group_library_manager"] != ["1", "1", "1", "1"]:
        m.append("Library Manager boleh semuanya: perm 1,1,1,1.")
    ids = [b[0] for b in baris[1:] if b]
    if len(set(ids)) != len(ids):
        m.append("Kolom id setiap baris harus unik.")
    return m

def cek_rule(xml):
    """Pemeriksa studi kasus: record rule peminjaman milik sendiri."""
    r, err = _parse(xml)
    if err:
        return [err]
    m = []
    f = _record(r, "ir.rule", m)
    if "name" not in f or not (f["name"].text or "").strip():
        m.append('Beri nama aturan: <field name="name">...</field>.')
    if "model_id" not in f or f["model_id"].get("ref") != "model_library_loan":
        m.append('Model aturan: <field name="model_id" ref="model_library_loan"/>.')
    if "domain_force" not in f or _rapat(f["domain_force"].text) != "[('user_id','=',user.id)]":
        m.append("domain_force harus membatasi ke milik sendiri: [('user_id', '=', user.id)].")
    g = f.get("groups")
    if g is None or "ref('group_library_user')" not in _rapat(g.get("eval")):
        m.append("Berlakukan untuk grup user: <field name=\"groups\" eval=\"[(4, ref('group_library_user'))]\"/>.")
    return m
'''

# ---------------------------------------------------------------- 1. strategi
studi(id="ct-strategi", topik="ct", setelah="strategi", judul="Dari O(n²) ke O(n)",
  contoh=dict(judul="Contoh: dua cara mencari angka kembar",
    penjelasan="<p>Soal yang sama bisa diselesaikan dengan cara lambat dan cara cepat. Cara lambat membandingkan setiap pasangan (O(n²)); cara cepat mengingat yang sudah dilihat di <code>set</code> (O(n)). Untuk 100.000 data, perbedaannya detik melawan menit.</p>",
    kode='import time\n\ndef lambat(data):\n    for i in range(len(data)):\n        for j in range(i + 1, len(data)):\n            if data[i] == data[j]:\n                return True\n    return False\n\ndef cepat(data):\n    sudah = set()\n    for x in data:\n        if x in sudah:\n            return True\n        sudah.add(x)\n    return False\n\ndata = list(range(3000))\nfor f in (lambat, cepat):\n    t = time.perf_counter()\n    hasil = f(data)\n    print(f.__name__, hasil, f"{(time.perf_counter() - t) * 1000:.1f} ms")',
    kunci="Pertanyaan 'apakah sudah pernah muncul?' → pakai set. Pertanyaan 'di indeks berapa?' → pakai dict."),
  langkah=[
    L("ct-duplikat", "Ada data kembar?", 1, "ada_duplikat",
      "Buat <code>ada_duplikat(data)</code> yang mengembalikan True jika ada nilai yang muncul lebih dari sekali. Tes terakhir memakai 200.000 data, jadi solusi O(n²) akan terlalu lambat (dihentikan setelah 10 detik).",
      'def ada_duplikat(data):\n    sudah = set()\n    for x in data:\n        if x in sudah:\n            return True\n        sudah.add(x)\n    return False\n',
      ["ada_duplikat([3, 1, 4, 1])", "ada_duplikat([1, 2, 3])", "ada_duplikat([])", 'ada_duplikat(["SO1", "so1"])', "ada_duplikat(list(range(200000)) + [199999])"],
      ["Ikuti fungsi cepat di contoh terpandu.", "Cara satu baris juga benar: len(set(data)) != len(data)."],
      "Mengubah pencarian di list menjadi pencarian di set adalah optimasi yang paling sering diminta pewawancara.",
      cek={"ada_duplikat([3, 1, 4, 1])": True}),
    "two-sum",
  ])

# ---------------------------------------------------------------- 2. baca → debugging
studi(id="ct-baca", topik="ct", setelah="baca", judul="Memperbaiki kode orang lain",
  contoh=dict(judul="Contoh: aliasing dan float",
    penjelasan="<p>Dua bug yang sering ditanam di soal debugging: fungsi yang diam-diam <b>mengubah data masukan</b> (karena list diteruskan sebagai objek yang sama), dan perbandingan <b>float</b> dengan <code>==</code>.</p>",
    kode='def naikkan(harga):\n    for i in range(len(harga)):\n        harga[i] = harga[i] * 2\n    return harga\n\nasli = [10, 20]\nbaru = naikkan(asli)\nprint(asli, baru)           # asli ikut berubah!\n\ndef naikkan_aman(harga):\n    return [h * 2 for h in harga]   # list baru\n\nasli = [10, 20]\nprint(naikkan_aman(asli), asli)\nprint(0.1 + 0.2 == 0.3, round(0.1 + 0.2, 2) == 0.3)',
    kunci="Kembalikan list BARU (comprehension) bila data masukan tidak boleh berubah. Bandingkan float setelah round atau dengan toleransi."),
  langkah=[
    L("ct-bug-pajak", "Perbaiki fungsi pajak", 2, "tambah_pajak",
      "Kode awal punya <b>dua bug</b>. <code>tambah_pajak(harga, persen)</code> seharusnya mengembalikan <b>list baru</b> berisi harga + pajak, dibulatkan 2 desimal, tanpa mengubah list <code>harga</code> yang diberikan.",
      'def tambah_pajak(harga, persen):\n    return [round(h * (1 + persen / 100), 2) for h in harga]\n',
      ["tambah_pajak([100, 19.99], 11)", 'h = [1000, 2500]\ntambah_pajak(h, 11)\nhasil = h', "tambah_pajak([], 11)", "tambah_pajak([0.1, 0.2], 10)"],
      ["Tes 2 memeriksa apakah list asli berubah. Kode awal menulis ke harga[i].", "Buat list baru dengan comprehension, dan bulatkan setiap nilai dengan round(..., 2)."],
      "Fungsi yang mengubah argumennya disebut punya efek samping. Di Odoo, dict vals yang dipakai ulang di beberapa create() menimbulkan bug serupa.",
      awal='def tambah_pajak(harga, persen):\n    for i in range(len(harga)):\n        harga[i] = harga[i] * (1 + persen / 100)\n    return harga\n',
      cek={"tambah_pajak([100, 19.99], 11)": [111.0, 22.19]}),
    L("ct-bug-lunas", "Perbaiki pencari pelunasan", 2, "cicilan_lunas",
      "Kode awal punya <b>tiga bug</b>. <code>cicilan_lunas(cicilan, total)</code> seharusnya mengembalikan <b>nomor cicilan (mulai 1)</b> saat jumlah pembayaran pertama kali mencapai atau melewati <code>total</code>, atau <code>-1</code> bila tidak pernah. Jumlah uang dibandingkan setelah dibulatkan 2 desimal.",
      'def cicilan_lunas(cicilan, total):\n    jumlah = 0\n    for i, c in enumerate(cicilan, start=1):\n        jumlah += c\n        if round(jumlah, 2) >= total:\n            return i\n    return -1\n',
      ["cicilan_lunas([100, 200, 300], 300)", "cicilan_lunas([0.1, 0.2], 0.3)", "cicilan_lunas([500], 300)", "cicilan_lunas([10, 10], 100)", "cicilan_lunas([], 1)"],
      ["Bug 1: range(1, len(...)) melewatkan cicilan pertama. Bug 2: == tidak menangkap 'melewati'. Bug 3: float 0.1 + 0.2.", "Pakai enumerate(cicilan, start=1) agar nomornya langsung mulai 1, lalu bandingkan round(jumlah, 2) >= total."],
      "Tiga jenis bug berbeda dalam lima baris: batas perulangan (off-by-one), operator perbandingan, dan presisi float. Biasakan menguji batas: tepat sama, melewati, dan tidak pernah tercapai.",
      awal='def cicilan_lunas(cicilan, total):\n    jumlah = 0\n    for i in range(1, len(cicilan)):\n        jumlah += cicilan[i]\n        if jumlah == total:\n            return i\n    return -1\n',
      cek={"cicilan_lunas([100, 200, 300], 300)": 2, "cicilan_lunas([0.1, 0.2], 0.3)": 2}),
  ])

# ---------------------------------------------------------------- 3. algo
studi(id="ct-algo", topik="ct", setelah="algo", judul="Stack dan 'urutkan dulu'",
  contoh=dict(judul="Contoh: stack untuk riwayat undo",
    penjelasan="<p>Stack adalah list yang hanya ditambah dan diambil dari ujung: <code>append</code> dan <code>pop</code>. Elemen terakhir masuk keluar pertama (LIFO), persis seperti tombol undo.</p>",
    kode='riwayat = []\nfor aksi in ["ketik A", "ketik B", "hapus B"]:\n    riwayat.append(aksi)\nprint(riwayat)\nprint("undo:", riwayat.pop())\nprint("undo:", riwayat.pop())\nprint(riwayat)\n\njadwal = [[9, 11], [8, 10], [13, 14]]\nprint(sorted(jadwal))     # urutkan berdasarkan jam mulai',
    kunci="Stack: append + pop. Banyak soal interval selesai dengan 'urutkan dulu, lalu bandingkan dengan elemen terakhir'."),
  langkah=["kurung", "gabung-interval"])

# ---------------------------------------------------------------- 4. otomasi
studi(id="ct-otomasi", topik="ct", setelah="otomasi", judul="Membersihkan data sebelum masuk Odoo",
  contoh=dict(judul="Contoh: regex + Counter pada log",
    penjelasan="<p>Pola kerja robot data: ambil teks mentah → ekstrak bagian penting dengan regex → hitung/ringkas → simpan. <code>re.sub</code> membersihkan, <code>re.findall</code> mengambil.</p>",
    kode='import re\nfrom collections import Counter\n\nlog = """10:01 ERROR [E102] Timeout\n10:02 INFO [I001] OK\n10:03 ERROR [E102] Timeout\n10:05 ERROR [E201] Captcha"""\nkode = re.findall(r"ERROR \\[(\\w+)\\]", log)\nprint(kode)\nprint(Counter(kode).most_common(1))\nprint(re.sub(r"\\D", "", "(0274) 512-345"))',
    kunci="Satu grup tangkap (...) di pola membuat findall mengembalikan isi grup saja."),
  langkah=["rpa-telepon", "rpa-log"])

# ---------------------------------------------------------------- 5. model
studi(id="ct-model", topik="ct", setelah="model", judul="Menyiapkan data untuk create()",
  contoh=dict(judul="Contoh: dict vals dan perintah One2many",
    penjelasan="<p><code>create()</code> menerima dict <i>vals</i>. Untuk One2many (misalnya baris order), nilainya list perintah: <code>(0, 0, {...})</code> = buat baris baru (sama dengan <code>Command.create({...})</code>), <code>(6, 0, [ids])</code> = ganti semua relasi Many2many.</p>",
    kode='baris = [("Kopi", 2, 15000), ("Teh", 1, 8000)]\nvals = {\n    "partner_id": 7,\n    "order_line": [\n        (0, 0, {"product_id": p, "product_uom_qty": q, "price_unit": h})\n        for p, q, h in baris\n    ],\n}\nprint(vals)\n# Di Odoo: self.env["sale.order"].create(vals)',
    kunci="(0, 0, vals) membuat baris baru. Tulis vals dengan list comprehension supaya rapi."),
  langkah=[
    L("ct-vals", "vals untuk Sales Order", 2, "vals_order",
      "Buat <code>vals_order(partner_id, baris)</code>. <code>baris</code> adalah list tuple <code>(product_id, qty, harga)</code>. Kembalikan dict vals dengan kunci <code>partner_id</code> dan <code>order_line</code> berisi perintah <code>(0, 0, {\"product_id\", \"product_uom_qty\", \"price_unit\"})</code>. Baris dengan qty ≤ 0 dilewati. Jika <code>baris</code> kosong, <code>order_line</code> berisi list kosong.",
      'def vals_order(partner_id, baris):\n    return {\n        "partner_id": partner_id,\n        "order_line": [\n            (0, 0, {"product_id": p, "product_uom_qty": q, "price_unit": h})\n            for p, q, h in baris if q > 0\n        ],\n    }\n',
      ["vals_order(7, [(1, 2, 15000.0), (2, 1, 8000.0)])", "vals_order(3, [])", "vals_order(5, [(9, 0, 100.0), (8, -1, 50.0), (4, 3, 1.5)])"],
      ["Mirip contoh, tambahkan saringan if q > 0 di comprehension.", "Kunci dict baris harus persis: product_id, product_uom_qty, price_unit."],
      "Menyiapkan vals dengan benar adalah separuh pekerjaan impor data dan integrasi API ke Odoo.",
      cek={"vals_order(3, [])": {"partner_id": 3, "order_line": []}}),
    L("ct-display", "Nama tampilan buku", 1, "_compute_display_name",
      "Tulis <code>_compute_display_name(self)</code> untuk recordset buku (field <code>name</code>, <code>isbn</code>). Isi <code>book.display_name</code> dengan <code>\"[ISBN] Judul\"</code>, atau judul saja bila ISBN kosong (False atau teks kosong).",
      'def _compute_display_name(self):\n    for book in self:\n        book.display_name = f"[{book.isbn}] {book.name}" if book.isbn else book.name\n',
      ['a = Record(name="Belajar Odoo", isbn="978-1", display_name=None)\nb = Record(name="Python Dasar", isbn=False, display_name=None)\n_compute_display_name(rs(a, b))\nhasil = [a.display_name, b.display_name]',
       'c = Record(name="Tanpa ISBN", isbn="", display_name=None)\n_compute_display_name(rs(c))\nhasil = c.display_name',
       '_compute_display_name(rs())\nhasil = "ok"'],
      ["for book in self, lalu isi book.display_name untuk SETIAP buku.", "Di Odoo field kosong bernilai False, jadi cukup if book.isbn."],
      "Sejak Odoo 17, nama tampilan dihitung dengan _compute_display_name (menggantikan name_get yang lama).",
      pre=PRE_ODOO, contoh=1,
      cek={'c = Record(name="Tanpa ISBN", isbn="", display_name=None)\n_compute_display_name(rs(c))\nhasil = c.display_name': "Tanpa ISBN"}),
  ])

# ---------------------------------------------------------------- 6. compute
studi(id="ct-compute", topik="ct", setelah="compute", judul="Compute denda dan constraint tanggal",
  contoh=dict(judul="Contoh: menghitung selisih hari",
    penjelasan="<p>Di Odoo, field Date bernilai objek <code>date</code>. Selisih dua tanggal adalah <code>timedelta</code>; <code>.days</code> memberi jumlah hari. Di latihan ini tanggal ditulis sebagai teks ISO lalu diubah dengan <code>date.fromisoformat</code>.</p>",
    kode='from datetime import date\n\njatuh_tempo = date.fromisoformat("2026-11-20")\nkembali = date.fromisoformat("2026-11-24")\nterlambat = (kembali - jatuh_tempo).days\nprint(terlambat, max(0, terlambat) * 2000)\nprint((date(2026, 11, 18) - jatuh_tempo).days)   # negatif = lebih awal',
    kunci="max(0, selisih) mencegah denda negatif. Field compute harus diisi untuk setiap record."),
  langkah=[
    L("ct-denda", "_compute_denda", 2, "_compute_denda",
      "Setiap peminjaman punya <code>date_due</code>, <code>date_return</code> (teks ISO, atau False bila belum kembali), dan <code>fee_per_day</code>. Tulis <code>_compute_denda(self)</code> yang mengisi <code>loan.days_late</code> dan <code>loan.fine</code>. Bila belum kembali, hitung terhadap konstanta <code>HARI_INI</code> (sudah tersedia). Keterlambatan tidak pernah negatif.",
      'from datetime import date\n\ndef _compute_denda(self):\n    for loan in self:\n        akhir = date.fromisoformat(loan.date_return or HARI_INI)\n        loan.days_late = max(0, (akhir - date.fromisoformat(loan.date_due)).days)\n        loan.fine = loan.days_late * loan.fee_per_day\n',
      ['a = Record(date_due="2026-11-20", date_return="2026-11-24", fee_per_day=2000, days_late=None, fine=None)\nb = Record(date_due="2026-11-25", date_return="2026-11-22", fee_per_day=2000, days_late=None, fine=None)\n_compute_denda(rs(a, b))\nhasil = [(a.days_late, a.fine), (b.days_late, b.fine)]',
       'c = Record(date_due="2026-11-14", date_return=False, fee_per_day=1500, days_late=None, fine=None)\n_compute_denda(rs(c))\nhasil = (c.days_late, c.fine)',
       '_compute_denda(rs())\nhasil = "ok"'],
      ["Tanggal akhir = date_return bila ada, selain itu HARI_INI. Ekspresi a or b memilih b bila a False.", "days_late = max(0, (akhir - jatuh_tempo).days), lalu fine = days_late × fee_per_day."],
      "Di Odoo sungguhan: @api.depends('date_due', 'date_return', 'fee_per_day'), dan HARI_INI diganti fields.Date.context_today(self). Field yang bergantung pada 'hari ini' sebaiknya tidak store=True karena tidak berubah sendiri tiap hari.",
      pre=PRE_ODOO + '\nHARI_INI = "2026-11-24"\n', contoh=1,
      cek={'c = Record(date_due="2026-11-14", date_return=False, fee_per_day=1500, days_late=None, fine=None)\n_compute_denda(rs(c))\nhasil = (c.days_late, c.fine)': (10, 15000)}),
    L("ct-constrains", "_check_peminjaman (constraint)", 2, "_check_peminjaman",
      "Tulis <code>_check_peminjaman(self)</code> untuk recordset peminjaman (<code>date_borrow</code>, <code>date_due</code> teks ISO, <code>book_ids</code> recordset). Lempar <code>ValidationError</code> bila <code>date_due</code> sebelum <code>date_borrow</code>, atau bila jumlah buku lebih dari 3. Peminjaman yang valid tidak boleh menimbulkan error.",
      'def _check_peminjaman(self):\n    for loan in self:\n        if loan.date_due < loan.date_borrow:\n            raise ValidationError("Tanggal kembali tidak boleh sebelum tanggal pinjam.")\n        if len(loan.book_ids) > 3:\n            raise ValidationError("Maksimal 3 buku per peminjaman.")\n',
      ['ok = Record(date_borrow="2026-11-24", date_due="2026-12-01", book_ids=rs(Record(), Record()))\n_check_peminjaman(rs(ok))\nhasil = "valid"',
       'x = Record(date_borrow="2026-11-24", date_due="2026-11-20", book_ids=rs(Record()))\ntry:\n    _check_peminjaman(rs(x))\n    hasil = "tidak error"\nexcept ValidationError:\n    hasil = "ValidationError"',
       'x = Record(date_borrow="2026-11-24", date_due="2026-11-30", book_ids=rs(Record(), Record(), Record(), Record()))\ntry:\n    _check_peminjaman(rs(x))\n    hasil = "tidak error"\nexcept ValidationError:\n    hasil = "ValidationError"',
       'x = Record(date_borrow="2026-11-24", date_due="2026-11-24", book_ids=rs(Record(), Record(), Record()))\n_check_peminjaman(rs(x))\nhasil = "valid"'],
      ["Teks ISO (YYYY-MM-DD) bisa dibandingkan langsung dengan < karena urutan abjadnya sama dengan urutan tanggal.", "len(loan.book_ids) memberi jumlah buku. raise ValidationError(\"pesan\")."],
      "Di Odoo: @api.constrains('date_borrow', 'date_due', 'book_ids'). Tanggal kembali di hari yang sama tetap valid, dan tepat 3 buku masih boleh: uji selalu nilai batasnya.",
      awal='def _check_peminjaman(self):\n    for loan in self:\n        pass\n',
      pre=PRE_ODOO, contoh=1,
      cek={'ok = Record(date_borrow="2026-11-24", date_due="2026-12-01", book_ids=rs(Record(), Record()))\n_check_peminjaman(rs(ok))\nhasil = "valid"': "valid"}),
  ])

# ---------------------------------------------------------------- 7. orm
studi(id="ct-orm", topik="ct", setelah="orm", judul="Domain dan rantai filtered → sorted → mapped",
  contoh=dict(judul="Contoh: domain sebagai data",
    penjelasan="<p>Domain Odoo hanyalah list tuple. Memahami cara mengevaluasinya membuatmu paham apa yang dilakukan <code>search()</code>. Pada recordset, operasi biasanya dirangkai: saring, urutkan, ambil nilai.</p>",
    kode='orders = [\n    {"name": "S1", "state": "sale", "amount": 500},\n    {"name": "S2", "state": "draft", "amount": 900},\n    {"name": "S3", "state": "sale", "amount": 1200},\n]\ndomain = [("state", "=", "sale"), ("amount", ">", 600)]\ncocok = [o for o in orders\n         if all({"=": o[f] == v, ">": o[f] > v}[op] for f, op, v in domain)]\nprint([o["name"] for o in cocok])\n\n# Rantai ala recordset Odoo:\nbesar = sorted((o for o in orders if o["state"] == "sale"), key=lambda o: -o["amount"])\nprint([o["name"] for o in besar])',
    kunci="search(domain) = saring dengan semua syarat (AND). filtered → sorted → mapped adalah rantai paling umum di kode Odoo."),
  langkah=[
    "odoo-domain",
    L("ct-rantai", "Peminjam terlambat terlama", 2, "terlambat_terlama",
      "Tulis <code>terlambat_terlama(loans, n)</code>. <code>loans</code> adalah recordset dengan field <code>state</code>, <code>days_late</code>, dan <code>member_id</code> (record dengan field <code>name</code>). Ambil peminjaman berstatus <code>\"borrowed\"</code> yang <code>days_late</code> &gt; 0, urutkan dari keterlambatan terbesar, lalu kembalikan list nama anggota (unik, urutan pertama kali muncul) maksimal n nama.",
      'def terlambat_terlama(loans, n):\n    telat = loans.filtered(lambda l: l.state == "borrowed" and l.days_late > 0)\n    nama = telat.sorted("days_late", reverse=True).mapped("member_id.name")\n    unik = []\n    for x in nama:\n        if x not in unik:\n            unik.append(x)\n    return unik[:n]\n',
      ['ani, budi, cita = Record(name="Ani"), Record(name="Budi"), Record(name="Cita")\nL = rs(Record(state="borrowed", days_late=3, member_id=ani), Record(state="returned", days_late=9, member_id=budi), Record(state="borrowed", days_late=7, member_id=cita), Record(state="borrowed", days_late=1, member_id=ani), Record(state="borrowed", days_late=0, member_id=budi))\nhasil = terlambat_terlama(L, 5)',
       'a = Record(name="A")\nhasil = terlambat_terlama(rs(Record(state="borrowed", days_late=2, member_id=a)), 0)',
       'hasil = terlambat_terlama(rs(), 3)'],
      ["Rangkai: loans.filtered(lambda l: ...).sorted(\"days_late\", reverse=True).mapped(\"member_id.name\").", "mapped pada field teks bisa berisi nama kembar; buang yang kembar dengan menjaga urutan, lalu potong [:n]."],
      "Rantai filtered → sorted → mapped ditulis hampir di setiap modul Odoo. Di Odoo sungguhan mapped(\"member_id\") (record) otomatis unik, sedangkan mapped(\"member_id.name\") (teks) bisa kembar.",
      pre=PRE_ODOO, contoh=1,
      cek={'hasil = terlambat_terlama(rs(), 3)': []}),
    "odoo-domain-polish",
  ])

# ---------------------------------------------------------------- 8. inherit
PRE_SALE = PRE_ODOO + '''
class SaleOrderBase:
    """Tiruan sale.order bawaan Odoo (jangan diubah)."""
    def __init__(self, name, amount_total, state="draft"):
        self.name = name
        self.amount_total = amount_total
        self.state = state
        self.log = []

    def action_confirm(self):
        if self.state not in ("draft", "sent"):
            raise UserError("Hanya quotation yang bisa dikonfirmasi.")
        self.state = "sale"
        self.log.append("confirmed")
        return True
'''
studi(id="ct-inherit", topik="ct", setelah="inherit", judul="Override action_confirm dengan super()",
  contoh=dict(judul="Contoh: menambah langkah tanpa menyalin kode induk",
    penjelasan="<p>Modul approval tidak menulis ulang konfirmasi Odoo. Ia hanya menambahkan pengecekan, lalu menyerahkan sisanya ke versi induk dengan <code>super()</code>. Dengan begitu langkah bawaan (dan modul lain yang juga meng-override) tetap berjalan.</p>",
    kode='class Induk:\n    def action_confirm(self):\n        print("induk: buat delivery & ubah state")\n        return True\n\nclass Approval(Induk):\n    def action_confirm(self):\n        print("approval: cek limit dulu")\n        return super().action_confirm()\n\nprint(Approval().action_confirm())',
    kunci="Override = cek tambahan, lalu return super().method(). Jangan lupa mengembalikan hasilnya."),
  langkah=[
    L("ct-override", "Approval di atas limit", 2, "SaleOrder",
      "Class <code>SaleOrderBase</code> (tiruan sale.order) sudah tersedia. Buat <code>SaleOrder(SaleOrderBase)</code> dengan atribut class <code>LIMIT = 10_000_000</code>. Override <code>action_confirm()</code>: order <b>draft/sent</b> dengan <code>amount_total</code> &gt; LIMIT berubah menjadi <code>\"to_approve\"</code>, menambah <code>\"menunggu approval\"</code> ke <code>self.log</code>, dan mengembalikan True. Selain itu jalankan versi induk. Tambahkan <code>action_approve(oleh_approver)</code>: jika bukan approver lempar <code>UserError</code>; jika state bukan <code>\"to_approve\"</code> lempar <code>UserError</code>; selain itu ubah state ke <code>\"draft\"</code> lalu panggil <b>versi induk</b> action_confirm.",
      'class SaleOrder(SaleOrderBase):\n    LIMIT = 10_000_000\n\n    def action_confirm(self):\n        if self.state in ("draft", "sent") and self.amount_total > self.LIMIT:\n            self.state = "to_approve"\n            self.log.append("menunggu approval")\n            return True\n        return super().action_confirm()\n\n    def action_approve(self, oleh_approver):\n        if not oleh_approver:\n            raise UserError("Hanya Amount Approver yang boleh menyetujui.")\n        if self.state != "to_approve":\n            raise UserError("Order tidak sedang menunggu approval.")\n        self.state = "draft"\n        return super().action_confirm()\n',
      ['o = SaleOrder("S1", 5_000_000)\no.action_confirm()\nhasil = (o.state, o.log)',
       'o = SaleOrder("S2", 25_000_000)\nr = o.action_confirm()\nhasil = (r, o.state, o.log)',
       'o = SaleOrder("S3", 25_000_000)\no.action_confirm()\ntry:\n    o.action_approve(False)\n    hasil = "tidak error"\nexcept UserError:\n    hasil = ("UserError", o.state)',
       'o = SaleOrder("S4", 25_000_000)\no.action_confirm()\no.action_approve(True)\nhasil = (o.state, o.log)',
       'o = SaleOrder("S5", 10_000_000)\no.action_confirm()\nhasil = o.state',
       'o = SaleOrder("S6", 50_000_000, state="sale")\ntry:\n    o.action_confirm()\n    hasil = "tidak error"\nexcept UserError:\n    hasil = "UserError"'],
      ["action_confirm: if syarat limit → ubah state, catat log, return True; else return super().action_confirm().", "action_approve tidak boleh memanggil self.action_confirm() (versi anak) karena order akan kembali ke to_approve. Panggil super().action_confirm() setelah state diubah ke draft."],
      "Tes 6 memastikan order yang sudah 'sale' tetap ditolak oleh logika induk, bukan diam-diam masuk approval. Inilah rancangan modul sale_amount_approval di portofoliomu.",
      awal='class SaleOrder(SaleOrderBase):\n    LIMIT = 10_000_000\n\n    def action_confirm(self):\n        pass\n\n    def action_approve(self, oleh_approver):\n        pass\n',
      pre=PRE_SALE, contoh=2,
      cek={'o = SaleOrder("S4", 25_000_000)\no.action_confirm()\no.action_approve(True)\nhasil = (o.state, o.log)': ("sale", ["menunggu approval", "confirmed"])}),
    "oop-warisan",
  ])

# ---------------------------------------------------------------- 9. view
studi(id="ct-view", topik="ct", setelah="view", judul="Menulis view XML Odoo 17",
  contoh=dict(judul="Contoh: struktur record view",
    penjelasan="<p>View adalah record <code>ir.ui.view</code>. Isinya: <code>name</code>, <code>model</code>, dan <code>arch</code> berisi XML tampilan. Di soal berikut kamu menulis XML-nya di dalam string Python <code>VIEW = \"\"\"...\"\"\"</code>, lalu pemeriksa menyebutkan bagian yang masih kurang satu per satu.</p><p class=\"kecil\">Ingat aturan Odoo 17: tidak ada <code>attrs</code>/<code>states</code>; kondisi ditulis langsung, misalnya <code>invisible=\"state != 'draft'\"</code>.</p>",
    kode='import xml.etree.ElementTree as ET\n\nVIEW = """\n<record id="library_tag_view_tree" model="ir.ui.view">\n    <field name="name">library.tag.tree</field>\n    <field name="model">library.tag</field>\n    <field name="arch" type="xml">\n        <tree>\n            <field name="name"/>\n            <field name="color"/>\n        </tree>\n    </field>\n</record>\n"""\nr = ET.fromstring(VIEW.strip())\nprint(r.tag, r.get("model"))\nprint([f.get("name") for f in r.iter("field")])',
    kunci="record → field name/model/arch → form → header (tombol + statusbar) + sheet (field-field)."),
  langkah=[
    L("ct-view-form", "Form view library.book", 2, "VIEW",
      "Isi variabel <code>VIEW</code> dengan record form view untuk model <code>library.book</code>: di dalam <code>&lt;form&gt;</code> ada <code>&lt;header&gt;</code> berisi tombol <code>action_make_available</code> (type object, berlabel, hanya tampil saat state draft) dan field <code>state</code> ber-widget statusbar; lalu <code>&lt;sheet&gt;</code> berisi field <code>name</code>, <code>author_id</code>, <code>isbn</code>. Tes memanggil <code>cek_form(VIEW)</code> yang harus mengembalikan list kosong.",
      'VIEW = """\n<record id="library_book_view_form" model="ir.ui.view">\n    <field name="name">library.book.form</field>\n    <field name="model">library.book</field>\n    <field name="arch" type="xml">\n        <form>\n            <header>\n                <button name="action_make_available" type="object" string="Tersedia"\n                        class="oe_highlight" invisible="state != \'draft\'"/>\n                <field name="state" widget="statusbar"/>\n            </header>\n            <sheet>\n                <group>\n                    <field name="name"/>\n                    <field name="author_id"/>\n                    <field name="isbn"/>\n                </group>\n            </sheet>\n        </form>\n    </field>\n</record>\n"""\n',
      ["cek_form(VIEW)", "len(cek_form(VIEW))", "VIEW.strip().startswith('<record')"],
      ["Mulai dari kerangka contoh terpandu, ganti <tree> dengan <form>, lalu tambahkan <header> dan <sheet>.", "Jalankan (▶) untuk melihat daftar masalah dari cek_form; perbaiki satu per satu."],
      "Pesan pemeriksa ini mirip yang akan kamu temui saat Odoo memuat XML: tag tidak tertutup, attrs di Odoo 17, field di tempat yang salah.",
      awal='VIEW = """\n<record id="library_book_view_form" model="ir.ui.view">\n    <field name="name">library.book.form</field>\n    <field name="model">library.book</field>\n    <field name="arch" type="xml">\n        <form>\n            <!-- tulis header dan sheet di sini -->\n        </form>\n    </field>\n</record>\n"""\n',
      pre=PRE_XML, contoh=1,
      cek={"cek_form(VIEW)": []}),
    L("ct-view-inherit", "Mewarisi form sale.order", 3, "VIEW",
      "Isi <code>VIEW</code> dengan view turunan untuk <code>sale.order</code> yang mewarisi <code>sale.view_order_form</code>. Ada dua xpath: (1) menambahkan field <code>x_approval_note</code> <b>setelah</b> field <code>partner_id</code>; (2) menambahkan tombol <code>action_amount_approve</code> (type object) <b>di dalam</b> <code>//header</code>, hanya tampil saat state <code>to_approve</code>, dan hanya untuk grup <code>sale_amount_approval.group_so_amount_approver</code>. Tes memanggil <code>cek_inherit(VIEW)</code>.",
      'VIEW = """\n<record id="view_order_form_amount_approval" model="ir.ui.view">\n    <field name="name">sale.order.form.amount.approval</field>\n    <field name="model">sale.order</field>\n    <field name="inherit_id" ref="sale.view_order_form"/>\n    <field name="arch" type="xml">\n        <xpath expr="//field[@name=\'partner_id\']" position="after">\n            <field name="x_approval_note"/>\n        </xpath>\n        <xpath expr="//header" position="inside">\n            <button name="action_amount_approve" type="object" string="Approve"\n                    class="oe_highlight" invisible="state != \'to_approve\'"\n                    groups="sale_amount_approval.group_so_amount_approver"/>\n        </xpath>\n    </field>\n</record>\n"""\n',
      ["cek_inherit(VIEW)", "len(cek_inherit(VIEW))", "'inherit_id' in VIEW"],
      ["Struktur: record ir.ui.view → field model, field inherit_id ref=\"sale.view_order_form\", field arch berisi dua <xpath>.", "Xpath pertama: expr=\"//field[@name='partner_id']\" position=\"after\". Xpath kedua: expr=\"//header\" position=\"inside\" dengan atribut groups pada tombol."],
      "Inilah persis view di modul sale_amount_approval-mu. Atribut groups di tombol hanya menyembunyikan tombol; pengecekan grup di method Python tetap wajib.",
      awal='VIEW = """\n<record id="view_order_form_amount_approval" model="ir.ui.view">\n    <field name="name">sale.order.form.amount.approval</field>\n    <field name="model">sale.order</field>\n    <field name="arch" type="xml">\n    </field>\n</record>\n"""\n',
      pre=PRE_XML, contoh=1,
      cek={"cek_inherit(VIEW)": []}),
  ])

# ---------------------------------------------------------------- 10. security
studi(id="ct-security", topik="ct", setelah="security", judul="Hak akses: ACL dan record rule",
  contoh=dict(judul="Contoh: membaca file ACL dengan csv",
    penjelasan="<p>File <code>ir.model.access.csv</code> adalah CSV biasa: satu baris per (model, grup). Empat kolom terakhir adalah izin baca, tulis, buat, hapus (1 = boleh, 0 = tidak).</p>",
    kode='import csv, io\n\nACL = """id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink\naccess_library_tag_user,library.tag user,model_library_tag,base.group_user,1,0,0,0"""\nfor b in csv.DictReader(io.StringIO(ACL)):\n    izin = [k[5:] for k in ("perm_read", "perm_write", "perm_create", "perm_unlink") if b[k] == "1"]\n    print(b["model_id:id"], b["group_id:id"], izin)',
    kunci="model_id:id = model_ + nama model dengan titik diganti garis bawah. Grup Manager meng-imply grup User."),
  langkah=[
    L("ct-acl", "ACL library.book", 2, "ACL",
      "Isi <code>ACL</code> (teks CSV) dengan header standar dan dua baris untuk model <code>library.book</code>: grup <code>group_library_user</code> hanya boleh membaca, grup <code>group_library_manager</code> boleh semuanya. Tes memanggil <code>cek_acl(ACL)</code>.",
      'ACL = """id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink\naccess_library_book_user,library.book user,model_library_book,group_library_user,1,0,0,0\naccess_library_book_manager,library.book manager,model_library_book,group_library_manager,1,1,1,1"""\n',
      ["cek_acl(ACL)", "len(cek_acl(ACL))", "ACL.strip().splitlines()[0].startswith('id,name')"],
      ["Salin header dari contoh terpandu, lalu tulis dua baris data.", "id baris harus unik, model_id:id = model_library_book, izin user 1,0,0,0 dan manager 1,1,1,1."],
      "Model baru tanpa baris ACL tidak bisa dibuka pengguna biasa, dan Odoo menulis peringatan di log. Ini kesalahan nomor satu pada modul pertama.",
      awal='ACL = """id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink\n"""\n',
      pre=PRE_XML, contoh=1,
      cek={"cek_acl(ACL)": []}),
    L("ct-rule", "Record rule: hanya milik sendiri", 2, "RULE",
      "Isi <code>RULE</code> dengan record <code>ir.rule</code> untuk model <code>library.loan</code> (ref <code>model_library_loan</code>) yang membuat anggota grup <code>group_library_user</code> hanya melihat peminjaman miliknya sendiri (<code>user_id</code> = pengguna login). Tes memanggil <code>cek_rule(RULE)</code>.",
      'RULE = """\n<record id="library_loan_rule_own" model="ir.rule">\n    <field name="name">Peminjaman milik sendiri</field>\n    <field name="model_id" ref="model_library_loan"/>\n    <field name="domain_force">[(\'user_id\', \'=\', user.id)]</field>\n    <field name="groups" eval="[(4, ref(\'group_library_user\'))]"/>\n</record>\n"""\n',
      ["cek_rule(RULE)", "len(cek_rule(RULE))", "'ir.rule' in RULE"],
      ["Empat field: name, model_id (ref), domain_force, groups (eval).", "Di domain_force, variabel user adalah pengguna yang sedang login: [('user_id', '=', user.id)]."],
      "ACL menentukan boleh membuka model; record rule menentukan record mana yang terlihat. Manager biasanya diberi rule lain dengan domain [(1, '=', 1)] agar melihat semua.",
      awal='RULE = """\n<record id="library_loan_rule_own" model="ir.rule">\n</record>\n"""\n',
      pre=PRE_XML, contoh=1,
      cek={"cek_rule(RULE)": []}),
  ])
