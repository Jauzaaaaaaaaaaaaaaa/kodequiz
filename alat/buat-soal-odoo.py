# Membuat js/soal/soal-erp-hitung.js: "Lab Hitung Odoo", ratusan soal angka untuk topik ERP & Odoo.
# Rumus disalin dari kode sumber Odoo 17 (dibaca 2026-11-23 di E:\odoo\odoo17\addons):
#   pricelist  product/models/product_pricelist_item.py  _compute_price
#   reorder    stock/models/stock_orderpoint.py          _compute_qty_to_order
#   pajak      account/models/account_tax.py             _compute_amount
#   satuan     uom/models/uom_uom.py                     _compute_quantity / _compute_price
#   termin     account/models/account_payment_term.py    _compute_terms / _get_due_date
#   AVCO       stock_account/models/stock_move.py        _product_price_update_before_done
#   landed     stock_landed_costs/models/stock_landed_cost.py compute_landed_cost
#   produksi   mrp/models/mrp_workorder.py               _get_duration_expected
#   CRM        crm/models/crm_lead.py                    _compute_prorated_revenue
# Pembulatan dihitung manual (Decimal) lalu dicocokkan dengan float_round asli Odoo bila
# E:\odoo\odoo17 ada (assert). Benih acak tetap: menjalankan ulang menghasilkan soal yang sama.
#
# Pakai:  python alat/buat-soal-odoo.py      (dari folder KUIS-KODING)
import importlib.util, json, math, os, random
from collections import deque
from datetime import date, timedelta
from decimal import Decimal, ROUND_HALF_UP, ROUND_CEILING, ROUND_FLOOR

R = random.Random(20261123)
SOAL, LIHAT = [], set()
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")


def _float_round_odoo():
    p = r"E:\odoo\odoo17\odoo\tools\float_utils.py"
    if not os.path.exists(p): return None
    spec = importlib.util.spec_from_file_location("float_utils_odoo", p)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    return m.float_round
FR = _float_round_odoo()


def bulat(x, presisi, cara="HALF-UP"):
    """Pembulatan ke kelipatan `presisi` seperti float_round Odoo (UP/DOWN = menjauhi/mendekati nol)."""
    q = Decimal(repr(round(x, 9))) / Decimal(repr(presisi))
    mode = {"HALF-UP": ROUND_HALF_UP, "UP": ROUND_CEILING if x >= 0 else ROUND_FLOOR,
            "DOWN": ROUND_FLOOR if x >= 0 else ROUND_CEILING}[cara]
    hasil = float(q.to_integral_value(rounding=mode) * Decimal(repr(presisi)))
    if FR:
        assert abs(hasil - FR(x, precision_rounding=presisi, rounding_method=cara)) < 1e-6, (x, presisi, cara)
    return hasil


def angka(x, d=None):
    if d is None: d = 0 if abs(x - round(x)) < 1e-9 else 2
    s = f"{x:,.{d}f}"
    return s.replace(",", "X").replace(".", ",").replace("X", ".")
def rp(x, d=None): return ("−" if x < -1e-9 else "") + "Rp " + angka(abs(x), d)
def pct(x): return f"{x:.2f}".rstrip("0").rstrip(".").replace(".", ",") + "%"
BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
def tgl(d): return f"{d.day} {BULAN[d.month - 1]} {d.year}"


def E(inti, poin, langkah, ingat):
    return "\n".join([inti] + ["• " + p for p in poin] + [f"{i}. {s}" for i, s in enumerate(langkah, 1)] + ["Ingat: " + ingat])


def mc(k, lv, q, benar, salah, e, h=None, kode=None):
    """salah = daftar (opsi, alasan). Opsi kembar dibuang; minimal 3 opsi."""
    opsi, w = [benar], [None]
    for o, a in salah:
        if o not in opsi:
            opsi.append(o); w.append(a)
    opsi, w = opsi[:4], w[:4]
    assert len(opsi) >= 3, (q, opsi)
    kunci = q + "\n" + (kode or "")
    if kunci in LIHAT: return
    LIHAT.add(kunci)
    s = {"k": k, "t": "mc", "lv": lv, "q": q, "o": opsi, "a": 0, "e": e, "w": w}
    if kode: s["kode"] = kode
    if h: s["h"] = h
    SOAL.append(s)


def mcn(k, lv, q, benar, salah, e, f=rp, h=None, kode=None):
    """Versi angka: benar & salah berupa angka, diformat dengan f. Ditambah pengecoh cadangan bila kurang."""
    cadangan = [(benar * 1.1, "Angka ini 10% lebih besar dari hasil yang benar; ulangi langkah di pembahasan."),
                (benar * 0.9, "Angka ini 10% lebih kecil dari hasil yang benar; ulangi langkah di pembahasan."),
                (benar * 2, "Hasil terhitung dua kali.")]
    mc(k, lv, q, f(benar), [(f(v), a) for v, a in list(salah) + cadangan], e, h, kode)


def isian(k, lv, q, jawab, e, h=None, kode=None):
    kunci = q + "\n" + (kode or "")
    if kunci in LIHAT: return
    LIHAT.add(kunci)
    s = {"k": k, "t": "is", "lv": lv, "q": q, "a": list(dict.fromkeys(jawab)), "e": e}
    if h: s["h"] = h
    if kode: s["kode"] = kode
    SOAL.append(s)


def jwb_bulat(n):  # jawaban isian angka bulat: "45000" (norm() di app.js juga menerima "45.000"/"Rp 45.000")
    assert abs(n - round(n)) < 1e-9, n
    return [str(int(round(n)))]


# =============================================================== 1. PRICELIST & DISKON
def odoo_formula(base, diskon=0.0, pembulatan=0.0, tambahan=0.0, min_margin=0.0, max_margin=0.0):
    """Salinan logika compute_price == 'formula' di product_pricelist_item.py (Odoo 17)."""
    batas = base
    harga = base - base * (diskon / 100)
    if pembulatan: harga = bulat(harga, pembulatan, "HALF-UP")
    if tambahan: harga += tambahan
    if min_margin: harga = max(harga, batas + min_margin)
    if max_margin: harga = min(harga, batas + max_margin)
    return harga


def bab_harga():
    k = "hargajual"
    for _ in range(7):
        P = R.randrange(40, 400) * 1000; d = R.choice([5, 10, 12.5, 15, 20, 25, 30, 35])
        h = P * (1 - d / 100); assert abs(h - odoo_formula(P, d)) < 1e-6
        mcn(k, 1, f"Aturan pricelist bertipe Discount {pct(d)} dari Sales Price. Sales Price produk {rp(P)}. Harga unit yang muncul di Sales Order adalah…",
            h, [(P * d / 100, "Itu besar potongannya saja, bukan harga setelah diskon."),
                (P * (1 + d / 100), "Diskon mengurangi harga, bukan menambah."),
                (P - d * 1000, "Persen harus dikalikan dengan harga, bukan dianggap ribuan rupiah.")],
            E("Rumus Odoo untuk tipe Discount: harga = base − base × diskon/100.", [],
              [f"Potongan = {rp(P)} × {pct(d)} = {rp(P * d / 100)}", f"Harga = {rp(P)} − {rp(P * d / 100)} = {rp(h)}"],
              "cara cepat: harga = base × (1 − diskon) = " + f"{rp(P)} × {angka(1 - d / 100, 3)}."))
    for _ in range(7):
        P = R.randrange(30, 300) * 1000 + R.choice([0, 250, 400, 600, 750]); d = R.choice([10, 15, 20, 25, 30])
        h = odoo_formula(P, d, 1000, -100)
        mentah = P * (1 - d / 100)
        mcn(k, 2, f"Aturan pricelist tipe Formula: Based on Sales Price, Discount {pct(d)}, Rounding Method 1.000, Extra Fee −100. Sales Price {rp(P)}. Harga akhir:",
            h, [(mentah - 100, "Pembulatan (Rounding Method) terlewat. Odoo membulatkan dulu sebelum Extra Fee."),
                (bulat(mentah - 100, 1000), "Urutannya terbalik: Extra Fee ditambahkan SETELAH pembulatan, sehingga hasil berakhiran 900."),
                (bulat(mentah, 1000), "Extra Fee −100 belum ditambahkan.")],
            E("Urutan rumus Formula di Odoo 17: diskon → pembulatan → Extra Fee → batas margin.", ["Trik harga cantik: bulatkan ke 1.000 lalu Extra Fee −100, hasilnya selalu berakhiran 900."],
              [f"Diskon: {rp(P)} × (1 − {pct(d)}) = {rp(mentah)}", f"Bulatkan ke kelipatan 1.000 terdekat (HALF-UP): {rp(bulat(mentah, 1000))}",
               f"Tambah Extra Fee −100: {rp(h)}"], "pembulatan Odoo memakai float_round HALF-UP: tepat di tengah (…500) dibulatkan ke atas."))
    for _ in range(6):
        C = R.randrange(20, 250) * 1000; m = R.choice([20, 25, 30, 40, 50])
        h = odoo_formula(C, -m)
        mcn(k, 2, f"Toko ingin harga jual = biaya + {m}%. Aturan pricelist: Based on Cost, Discount −{m}% (diskon negatif = markup). Cost produk {rp(C)}. Harga jual:",
            h, [(C / (1 - m / 100), f"Itu rumus margin {m}% dari harga jual (C ÷ (1 − m)), bukan markup dari biaya."),
                (C * (1 - m / 100), "Tanda minus pada diskon berarti harga NAIK, bukan turun."),
                (C + m * 1000, "Persen dikalikan dengan biaya, bukan dianggap ribuan rupiah.")],
            E("Diskon negatif di pricelist adalah cara Odoo membuat markup: base − base × (−m/100) = base × (1 + m/100).", [],
              [f"{rp(C)} × (1 + {m}/100) = {rp(h)}"], "markup dihitung dari BIAYA, margin dihitung dari HARGA JUAL."))
    for _ in range(6):
        C = R.randrange(50, 300) * 1000; m = R.choice([5, 8, 10]); M = R.choice([20000, 25000, 30000, 40000])
        mentah = C * (1 + m / 100); h = odoo_formula(C, -m, min_margin=M)
        mcn(k, 3, f"Aturan Formula: Based on Cost, Discount −{m}%, Min. Price Margin {rp(M)}. Cost {rp(C)}. Harga akhir:",
            h, [(mentah if h != mentah else C + M, "Batas Min. Price Margin belum dibandingkan." if h != mentah else "Hasil markup lebih besar dari batas minimum, jadi markup yang dipakai."),
                (mentah + M, "Min. Price Margin bukan ditambahkan, tetapi batas bawah: harga = maks(hasil, base + margin)."),
                (C + M if h != C + M else mentah + M, "Bandingkan dua angka lalu ambil yang LEBIH BESAR.")],
            E("Min. Price Margin menjaga laba minimum: harga = maks(hasil formula, base + min margin).", [],
              [f"Hasil markup: {rp(C)} × {angka(1 + m / 100, 2)} = {rp(mentah)}", f"Batas bawah: {rp(C)} + {rp(M)} = {rp(C + M)}",
               f"Ambil yang lebih besar: {rp(h)}"], "Max. Price Margin kebalikannya: harga = min(hasil, base + max margin)."))
    for _ in range(6):
        P = R.randrange(10, 90) * 1000; d1, d2 = R.choice([(5, 10), (10, 20), (8, 15), (5, 15)])
        q1, q2 = R.choice([(10, 50), (12, 48), (20, 100), (10, 100)])
        q = R.choice([R.randrange(1, q1), R.randrange(q1, q2), R.randrange(q2, q2 * 2)])
        d = 0 if q < q1 else (d1 if q < q2 else d2)
        h = q * P * (1 - d / 100)
        salah_d = d1 if d != d1 else d2
        mcn(k, 2, f"Pricelist bertingkat: Min. Quantity {q1} → diskon {d1}%, Min. Quantity {q2} → diskon {d2}%. Harga normal {rp(P)}. Pelanggan membeli {q} unit. Subtotal baris:",
            h, [(q * P * (1 - salah_d / 100), "Tingkat diskon salah. Odoo memakai aturan dengan Min. Quantity terbesar yang masih ≤ jumlah beli."),
                (q * P, "Diskon tingkat yang berlaku belum diterapkan.") if d else (q * P * (1 - d1 / 100), f"{q} unit belum mencapai Min. Quantity {q1}."),
                (P * (1 - d / 100), "Itu harga per unit, belum dikali jumlah.")],
            E("Aturan pricelist diurutkan dari Min. Quantity terbesar; aturan pertama yang cocok dipakai.", [],
              [f"{q} unit → tingkat yang berlaku: " + (f"diskon {d}%" if d else "harga normal"), f"Harga unit {rp(P * (1 - d / 100))}", f"Subtotal = {q} × {rp(P * (1 - d / 100))} = {rp(h)}"],
              "jumlah beli harus ≥ Min. Quantity, bukan sekadar mendekati."))
    for _ in range(6):
        a, b = R.choice([(10, 5), (20, 10), (15, 5), (10, 10), (25, 4), (30, 10)])
        tot = (1 - (1 - a / 100) * (1 - b / 100)) * 100
        mcn(k, 2, f"Pricelist memberi diskon {a}%, lalu sales menambah kolom Disc.% {b}% di baris Sales Order. Total potongan efektif dari harga normal adalah…",
            tot, [(a + b, "Diskon bertingkat tidak dijumlahkan, karena diskon kedua dihitung dari harga yang sudah turun."),
                  (a * b / 100, "Itu hanya hasil kali kedua persen."), (max(a, b), "Kedua diskon berlaku, bukan hanya yang terbesar.")],
            E("Diskon berurutan dikalikan: sisa harga = (1 − a)(1 − b).", [],
              [f"Sisa harga = {angka(1 - a / 100, 2)} × {angka(1 - b / 100, 2)} = {angka((1 - a / 100) * (1 - b / 100), 4)}", f"Potongan efektif = 1 − sisa = {pct(tot)}"],
              "rumus cepat: a + b − a×b. Contoh 10% dan 5%: 15 − 0,5 = 14,5%."), f=pct)
    for _ in range(7):
        C = R.randrange(20, 200) * 1000; m = R.choice([20, 25, 30, 40])
        P = C / (1 - m / 100)
        if abs(P - round(P)) > 1e-6: continue
        mcn(k, 3, f"Biaya produk {rp(C)}. Manajer ingin MARGIN {m}% dari harga jual (bukan markup). Harga jual minimum:",
            P, [(C * (1 + m / 100), f"Itu markup {m}% dari biaya; marginnya lebih kecil dari {m}%."),
                (C * (1 - m / 100), "Harga jual pasti lebih besar dari biaya."), (C + m * 1000, "Persen harus dihitung dari harga.")],
            E("Margin = (harga − biaya) ÷ harga. Dibalik: harga = biaya ÷ (1 − margin).", ["Di Odoo, modul sale_margin menghitung Margin dan Margin (%) per baris = margin ÷ subtotal."],
              [f"Harga = {rp(C)} ÷ (1 − {m}%) = {rp(C)} ÷ {angka(1 - m / 100, 2)} = {rp(P)}", f"Cek: ({rp(P)} − {rp(C)}) ÷ {rp(P)} = {m}%"],
              f"markup {m}% selalu menghasilkan margin di bawah {m}%."))
    for _ in range(6):
        C = R.randrange(20, 150) * 1000; P = C + R.randrange(5, 60) * 1000; q = R.randrange(2, 20)
        mg = (P - C) * q; mp = (P - C) / P * 100
        mcn(k, 2, f"Baris Sales Order: {q} unit × {rp(P)}, Cost produk {rp(C)}. Nilai Margin (%) yang ditampilkan modul sale_margin:",
            mp, [((P - C) / C * 100, "Itu markup (dibagi biaya). Margin (%) dibagi harga jual/subtotal."),
                 (C / P * 100, "Itu persentase biaya terhadap harga."), (mp * q, "Persentase tidak dikali jumlah unit.")],
            E("Margin (%) = Margin ÷ Subtotal.", [],
              [f"Margin = ({rp(P)} − {rp(C)}) × {q} = {rp(mg)}", f"Subtotal = {rp(P * q)}", f"Margin (%) = {rp(mg)} ÷ {rp(P * q)} = {pct(round(mp, 2))}"],
              "jumlah unit tidak mengubah persen margin, hanya nilai rupiahnya."), f=lambda x: pct(round(x, 2)))
    for _ in range(4):
        P = R.randrange(20, 90) * 1000; d = R.choice([10, 15, 20]); q = R.randrange(3, 12)
        h = q * P * (1 - d / 100)
        isian(k, 1, f"Harga {rp(P)}, diskon pricelist {d}%, beli {q} unit. Subtotal (angka saja, tanpa Rp)?", jwb_bulat(h),
              E("Subtotal = jumlah × harga × (1 − diskon).", [], [f"{q} × {rp(P)} = {rp(q * P)}", f"× (1 − {d}%) = {rp(h)}"], "kerjakan diskon per unit atau per total, hasilnya sama."))


# =============================================================== 2. PAJAK
def pajak(base, tarif, tipe="percent", termasuk=False):
    """Salinan account_tax._compute_amount (Odoo 17) untuk satu pajak."""
    if tipe == "percent" and not termasuk: return base * tarif / 100
    if tipe == "percent" and termasuk: return base - base / (1 + tarif / 100)
    if tipe == "division" and not termasuk: return base / (1 - tarif / 100) - base
    if tipe == "division" and termasuk: return base - base * tarif / 100


def bab_pajak():
    k = "pajak"
    for _ in range(7):
        P = R.randrange(10, 500) * 1000; q = R.randrange(1, 15); t = 11
        sub = P * q; tx = pajak(sub, t)
        mcn(k, 1, f"Faktur: {q} unit × {rp(P)}, pajak 11% (Price Included tidak dicentang). Nilai Total faktur:",
            sub + tx, [(sub, "Itu Untaxed Amount, belum ditambah pajak."), (tx, "Itu nilai pajaknya saja."),
                       (sub * 1.12, "Tarif 12% dipakai; soal ini memakai pajak 11%.")],
            E("Pajak tidak termasuk harga: pajak = subtotal × tarif, total = subtotal + pajak.", [],
              [f"Subtotal = {q} × {rp(P)} = {rp(sub)}", f"Pajak = {rp(sub)} × 11% = {rp(tx)}", f"Total = {rp(sub + tx)}"], "Untaxed Amount + Taxes = Total."))
    for _ in range(7):
        t = R.choice([11, 12]); base = R.randrange(10, 400) * 1000; P = base * (1 + t / 100)
        tx = pajak(P, t, termasuk=True); assert abs(tx - base * t / 100) < 1e-6
        mcn(k, 2, f"Harga jual {rp(P)} SUDAH termasuk pajak {t}% (Included in Price dicentang). Besar pajaknya:",
            tx, [(P * t / 100, f"Pajak termasuk harga tidak dihitung {t}% × harga, karena harga itu sudah memuat pajak."),
                 (P * t / (100 + t) * (100 + t) / (100 - t), "Rumus pembaginya salah; pakai harga ÷ (1 + tarif)."),
                 (base, "Itu DPP (harga sebelum pajak), bukan pajaknya.")],
            E("Rumus Odoo pajak included: pajak = harga − harga ÷ (1 + tarif).", [],
              [f"DPP = {rp(P)} ÷ {angka(1 + t / 100, 2)} = {rp(base)}", f"Pajak = {rp(P)} − {rp(base)} = {rp(tx)}"],
              "harga 111.000 dengan pajak 11% included = 100.000 + 11.000, bukan 111.000 × 11%."))
    for _ in range(6):
        B = R.randrange(10, 900) * 1000
        efektif = B * 12 / 100 * 11 / 12; assert abs(efektif - pajak(B, 11)) < 1e-6
        mcn(k, 2, f"Barang tidak mewah dijual {rp(B)} (sebelum pajak). PPN 12% dihitung dari DPP nilai lain 11/12 × harga jual. Besar PPN:",
            efektif, [(B * 0.12, "Untuk barang tidak mewah, 12% dikalikan DPP nilai lain (11/12 × harga), bukan harga penuh."),
                      (B * 11 / 12, "Itu DPP nilai lain, belum dikali 12%."), (B * 0.12 * 11 / 100, "Pengalinya 11/12, bukan 11%.")],
            E("PPN = 12% × (11/12 × harga) = 11% × harga.", ["Itu sebabnya lokalisasi Indonesia Odoo 17 (l10n_id) memasang pajak barang tidak mewah dengan nilai 11% walau labelnya di faktur '12%'; barang mewah memakai 12% penuh."],
              [f"DPP nilai lain = 11/12 × {rp(B)} = {rp(B * 11 / 12, 2)}", f"PPN = 12% × DPP = {rp(efektif)}"],
              "aturan pajak bisa berubah; cek peraturan terbaru sebelum mengatur tarif di klien."))
    for _ in range(6):
        S = R.randrange(5, 200) * 100000
        ppn = S * 0.11; pph = S * 0.02; bayar = S + ppn - pph
        mcn(k, 3, f"Tagihan jasa dari vendor: DPP {rp(S)}, PPN 11%, dan PPh 23 2% dipotong (pajak bernilai negatif −2%). Berapa yang ditransfer ke vendor?",
            bayar, [(S + ppn, "PPh 23 belum dipotong."), (S + ppn + pph, "PPh 23 adalah potongan, bukan tambahan."),
                    (S - pph, "PPN tetap dibayar ke vendor.")],
            E("PPh 23 di Odoo dibuat sebagai pajak persen bernilai negatif, jadi mengurangi total tagihan.", ["PPh yang dipotong menjadi utang pajak kita, lalu disetor ke negara."],
              [f"PPN = 11% × {rp(S)} = {rp(ppn)}", f"PPh 23 = 2% × {rp(S)} = {rp(pph)}", f"Dibayar = {rp(S)} + {rp(ppn)} − {rp(pph)} = {rp(bayar)}"],
              "DPP untuk PPN dan PPh 23 sama, yaitu nilai jasa sebelum pajak."))
    for _ in range(5):
        base = R.randrange(10, 200) * 1000; t = R.choice([10, 20, 25])
        tx = pajak(base, t, "division")
        mcn(k, 3, f"Pajak bertipe 'Percentage of Price Tax Included' (amount_type division) {t}%, tidak termasuk harga. Base {rp(base)}. Pajaknya:",
            tx, [(base * t / 100, "Itu rumus pajak persen biasa."), (base - base * t / 100, "Itu rumus division bila pajak sudah termasuk harga."),
                 (base * t / (100 + t), "Pembaginya (1 − tarif), bukan (1 + tarif).")],
            E("Tipe division: total = base ÷ (1 − tarif), jadi pajak = base ÷ (1 − tarif) − base.", ["Dipakai bila pajak harus tepat tarif% dari TOTAL (misalnya pajak tertentu di Brasil)."],
              [f"Total = {rp(base)} ÷ {angka(1 - t / 100, 2)} = {rp(base / (1 - t / 100), 2)}", f"Pajak = {rp(tx, 2)}", f"Cek: {rp(tx, 2)} ÷ total = {t}%"],
              "percent dihitung dari base, division dihitung dari total.")
             , f=lambda x: rp(x, 2))
    for _ in range(5):
        base = R.randrange(10, 300) * 1000; a = R.choice([5, 10]); b = 11
        total = base * (1 + a / 100) * (1 + b / 100)
        mcn(k, 3, f"Dua pajak di satu baris: Cukai {a}% dengan 'Affect Base of Subsequent Taxes' dicentang, lalu PPN 11%. Base {rp(base)}. Total baris:",
            total, [(base * (1 + (a + b) / 100), "Itu bila kedua pajak dihitung dari base yang sama (opsi Affect Base tidak dicentang)."),
                    (base * (1 + b / 100), "Cukai belum dihitung."), (base * (1 + a / 100) + base * a / 100, "PPN belum dihitung.")],
            E("Affect Base of Subsequent Taxes (include_base_amount) membuat pajak berikutnya dihitung dari base + pajak sebelumnya.", [],
              [f"Cukai = {a}% × {rp(base)} = {rp(base * a / 100)}", f"Base PPN = {rp(base * (1 + a / 100))}", f"PPN = 11% × {rp(base * (1 + a / 100))} = {rp(base * (1 + a / 100) * 0.11, 2)}", f"Total = {rp(total, 2)}"],
              "urutan pajak (kolom Sequence) menentukan siapa memengaruhi siapa."), f=lambda x: rp(x, 2))
    for _ in range(4):
        n = R.choice([3, 4, 6]); P = R.choice([1050, 1150, 1250, 1350, 950])
        per_baris = n * bulat(P * 0.11, 1); global_ = bulat(n * P * 0.11, 1)
        if per_baris == global_: continue
        mcn(k, 3, f"Faktur berisi {n} baris, masing-masing {rp(P)} dengan pajak 11%. Presisi mata uang 1 rupiah, Tax Calculation Rounding Method = Round per Line. Total pajak:",
            per_baris, [(global_, "Itu hasil Round Globally (dijumlah dulu, baru dibulatkan sekali)."), (n * P * 0.11, "Pajak harus dibulatkan ke presisi mata uang."),
                        (P * 0.11, "Itu pajak satu baris saja.")],
            E("Round per Line: pajak tiap baris dibulatkan dulu, lalu dijumlahkan. Round Globally: dijumlah dulu, dibulatkan sekali.", [],
              [f"Pajak satu baris = 11% × {rp(P)} = {angka(P * 0.11, 2)} → dibulatkan {rp(bulat(P * 0.11, 1))}", f"× {n} baris = {rp(per_baris)}", f"Bandingkan Round Globally: {rp(global_)}"],
              "selisih kecil seperti ini sering membuat total faktur Odoo beda 1–2 rupiah dengan e-Faktur atau Excel; samakan metodenya di Settings."))
    for _ in range(4):
        P = R.randrange(10, 99) * 1000; q = R.randrange(2, 10)
        isian(k, 1, f"{q} unit × {rp(P)}, pajak 11% tidak termasuk harga. Besar pajak (angka saja)?", jwb_bulat(round(q * P * 0.11, 6)),
              E("Pajak = subtotal × 11%.", [], [f"Subtotal {rp(q * P)}", f"× 11% = {rp(q * P * 0.11)}"], "11% = kali 0,11."))


# =============================================================== 3. SATUAN UKUR (UoM)
def bab_satuan():
    k = "satuan"
    for _ in range(7):
        n = R.choice([6, 10, 12, 20, 24, 36, 48]); b = R.randrange(2, 30)
        mcn(k, 1, f"Satuan 'Box' bertipe Bigger than the reference Unit of Measure dengan Ratio {n} (1 Box = {n} Units). Gudang menerima {b} Box. Stok dalam Units:",
            b * n, [(b / n, "Satuan lebih besar dikali ratio, bukan dibagi."), (b + n, "Ratio adalah pengali."), (b * n * 2, "Dikali dua kali.")],
            E("Satuan lebih besar → kalikan ratio untuk ke satuan referensi.", ["Di Odoo, factor Box = 1/ratio, dan rumusnya qty ÷ factor_asal × factor_tujuan."],
              [f"{b} Box ÷ (1/{n}) × 1 = {b * n} Units"], "Units adalah satuan referensi kategori Unit."), f=lambda x: angka(x) + " Units")
    for _ in range(7):
        n = R.choice([6, 12, 24]); u = R.randrange(n + 1, n * 9)
        if u % n == 0: continue
        h = bulat(u / n, 0.01, "UP"); h1 = bulat(u / n, 1, "UP")
        mc(k, 2, f"Produk {u} Units dikonversi ke 'Pack of {n}' (presisi pembulatan 0,01). Odoo mengonversi kuantitas dengan rounding_method UP. Hasilnya:",
           angka(h) + " Pack", [(angka(round(u / n, 2)) + " Pack", "Pembulatan biasa (setengah ke atas); fungsi konversi Odoo membulatkan ke ATAS.") if round(u / n, 2) != h else (angka(h1) + " Pack", "Itu bila presisinya 1."),
                                 (angka(u * n) + " Pack", "Dari satuan kecil ke besar dibagi ratio."), (angka(math.floor(u / n)) + " Pack", "Sisa unit tidak boleh dibuang.")],
           E("uom._compute_quantity default memakai rounding_method='UP' terhadap presisi satuan tujuan.", [],
             [f"{u} ÷ {n} = {angka(u / n, 4)}", f"Dibulatkan ke atas ke kelipatan 0,01 → {angka(h)}"], "presisi satuan diatur di kolom Rounding Precision pada Units of Measure."))
    for _ in range(6):
        g = R.randrange(50, 5000, 50)
        mcn(k, 1, f"Kategori Weight: kg adalah referensi, g bertipe Smaller dengan Ratio 1.000. Resep membutuhkan {angka(g)} g. Dalam kg:",
            g / 1000, [(g * 1000, "Satuan lebih kecil ke referensi dibagi ratio."), (g / 100, "1 kg = 1.000 g, bukan 100 g."), (g / 10, "1 kg = 1.000 g.")],
            E("Satuan lebih kecil → bagi ratio untuk ke satuan referensi.", [], [f"{angka(g)} ÷ 1.000 = {angka(g / 1000, 3)} kg"], "factor g = 1.000, factor kg = 1."),
            f=lambda x: angka(x, 3 if abs(x * 100 - round(x * 100)) > 1e-9 else None) + " kg")
    for _ in range(7):
        n = R.choice([12, 24, 30, 40]); P = n * R.randrange(2, 30) * 1000
        mcn(k, 2, f"Purchase UoM produk = Box isi {n}, satuan jual = Units. Vendor menjual {rp(P)} per Box. Cost per Unit yang tercatat:",
            P / n, [(P * n, "Harga per satuan besar dibagi isi untuk mendapat harga per satuan kecil."), (P, "Itu harga per Box."), (P / n * 1.11, "Pajak tidak masuk ke cost bila PPN-nya bisa dikreditkan.")],
            E("Konversi HARGA kebalikan dari konversi kuantitas (uom._compute_price): harga per Box ÷ isi = harga per Unit.", [],
              [f"{rp(P)} ÷ {n} = {rp(P / n)} per Unit"], "kuantitas Box→Unit dikali, harga Box→Unit dibagi."))
    for _ in range(6):
        n = R.choice([6, 10, 12, 24]); q = R.randrange(n + 1, n * 12)
        if q % n == 0: continue
        h = math.ceil(q / n)
        isian(k, 2, f"Pesanan {q} Units, vendor hanya menjual per Box isi {n} (Rounding Precision Box = 1, pembulatan UP). Berapa Box yang dipesan?", jwb_bulat(h),
              E("Dengan presisi 1 dan pembulatan UP, sisa unit membuat satu Box tambahan.", [], [f"{q} ÷ {n} = {angka(q / n, 2)}", f"Naik ke {h} Box"], f"kelebihan {h * n - q} Units akan menjadi stok."))
    for _ in range(4):
        L = R.choice([0.5, 1, 1.5, 2]); m = R.randrange(10, 200)
        mcn(k, 2, f"Kain disimpan dalam meter (m). Satu baju butuh {angka(L)} m. Untuk {m} baju, kebutuhan kain dalam cm (Smaller, ratio 100):",
            L * m * 100, [(L * m, "Itu masih dalam meter."), (L * m * 1000, "1 m = 100 cm."), (L * 100, "Belum dikali jumlah baju.")],
            E("Hitung kebutuhan dalam satuan asal, lalu konversi.", [], [f"{angka(L)} × {m} = {angka(L * m)} m", f"× 100 = {angka(L * m * 100)} cm"], "konversi hanya bisa di dalam satu kategori (Length)."),
            f=lambda x: angka(x) + " cm")


# =============================================================== 4. FORECAST, REORDERING RULE & LEAD TIME
def to_order(forecast, mn, mx, kelipatan=0):
    """stock_orderpoint._compute_qty_to_order (tanpa visibility days)."""
    if not forecast < mn: return 0
    q = max(mn, mx) - forecast
    sisa = q % kelipatan if kelipatan > 0 else 0
    if sisa > 0: q += kelipatan - sisa
    return q


def bab_reorder():
    k = "reorder"
    for _ in range(7):
        oh, inc, out = R.randrange(0, 80), R.randrange(0, 60), R.randrange(0, 90)
        f = oh + inc - out
        mcn(k, 1, f"On Hand {oh}, barang masuk terjadwal (receipt) {inc}, barang keluar terjadwal (delivery) {out}. Forecasted quantity:",
            f, [(oh + inc + out, "Barang keluar mengurangi, bukan menambah."), (oh - inc + out, "Tanda masuk dan keluar tertukar."), (oh, "Itu stok fisik saat ini, belum memperhitungkan jadwal.")],
            E("Forecasted = On Hand + masuk terjadwal − keluar terjadwal.", [], [f"{oh} + {inc} − {out} = {f}"], "forecast boleh negatif, artinya pesanan pelanggan melebihi stok."), f=angka)
    for _ in range(9):
        mn = R.choice([10, 15, 20, 25, 30]); mx = mn + R.choice([20, 30, 40, 50]); f = R.randrange(-15, mn)
        h = to_order(f, mn, mx)
        mcn(k, 2, f"Reordering rule: Min {mn}, Max {mx}, Multiple Quantity 0. Forecast {f}. Nilai To Order:",
            h, [(mx - mn, "Odoo memesan sampai Max dihitung dari forecast, bukan selisih Max − Min."), (mn - f, "Targetnya Max, bukan Min."),
                (mx - abs(f) if f < 0 else mx, "Forecast negatif harus ditutup juga: Max − (−x) = Max + x." if f < 0 else "Forecast belum dikurangkan.")],
            E("Bila forecast < Min: To Order = Max − forecast.", [], [f"{f} < {mn}? ya → pesan", f"{mx} − ({f}) = {h}"], "pemicu memakai tanda < (lebih kecil), bukan ≤."), f=angka)
    for _ in range(9):
        mn = R.choice([10, 20, 30]); mx = mn + R.choice([25, 37, 45, 50]); f = R.randrange(-5, mn); m = R.choice([6, 10, 12, 24])
        h = to_order(f, mn, mx, m); kasar = mx - f
        if h == kasar: continue
        mcn(k, 3, f"Reordering rule: Min {mn}, Max {mx}, Multiple Quantity {m}. Forecast {f}. Nilai To Order:",
            h, [(kasar, "Belum dibulatkan ke atas ke kelipatan Multiple Quantity."), (kasar - kasar % m, "Odoo membulatkan ke ATAS, bukan ke bawah."),
                (math.ceil(kasar / m), "Itu jumlah kelipatannya; kalikan dengan Multiple Quantity.")],
            E("To Order = Max − forecast, lalu dinaikkan ke kelipatan Multiple Quantity berikutnya.", ["Contoh resmi dokumentasi Odoo 17: Max 20, forecast 7 → butuh 13 → kelipatan 3 → 15."],
              [f"{mx} − ({f}) = {kasar}", f"{kasar} ÷ {m} = {angka(kasar / m, 2)} → naik ke {math.ceil(kasar / m)} kelipatan", f"{math.ceil(kasar / m)} × {m} = {h}"],
              "stok setelah pesanan bisa melewati Max karena pembulatan kelipatan."), f=angka)
    for _ in range(4):
        mn = R.choice([10, 20, 30]); mx = mn + 40
        mc(k, 2, f"Reordering rule Min {mn}, Max {mx}. Forecast tepat {mn}. Apakah Odoo membuat RFQ?", "Tidak, To Order = 0",
           [("Ya, To Order = " + angka(mx - mn), "Pemicunya forecast < Min. Forecast yang SAMA dengan Min belum memicu."),
            ("Ya, To Order = " + angka(mx), "Forecast tidak nol."), ("Ya, To Order = " + angka(mn), "Bukan rumus Odoo.")],
           E("Kode Odoo: float_compare(qty_forecast, product_min_qty) < 0.", [], ["Forecast = Min → perbandingan bernilai 0, bukan < 0", "To Order = 0"], "kalau ingin memesan saat stok menyentuh Min, naikkan Min satu angka."))
    for _ in range(6):
        d = date(2026, R.randrange(1, 12), R.randrange(1, 28)); vl = R.choice([3, 5, 7, 10, 14]); dp = R.choice([0, 1, 2]); ps = R.choice([0, 1, 2])
        h = d + timedelta(days=vl + dp + ps)
        mc(k, 2, f"Hari ini {tgl(d)}. Vendor Lead Time {vl} hari, Days to Purchase {dp}, Purchase Security Lead Time {ps}. Tanggal forecast (barang diperkirakan tiba) yang dipakai reordering rule:",
           tgl(h), [(tgl(d + timedelta(days=vl)), "Days to Purchase dan security lead time juga dijumlahkan."), (tgl(d + timedelta(days=vl + dp)), "Purchase Security Lead Time belum ditambahkan." if ps else "Hitung ulang jumlah harinya."),
                    (tgl(d + timedelta(days=vl + dp + ps + 1)), "Kelebihan satu hari."), (tgl(d + timedelta(days=vl + dp + ps - 1)), "Kurang satu hari."), (tgl(d - timedelta(days=vl + dp + ps)), "Lead time dihitung MAJU dari hari ini.")],
           E("Forecasted date = hari ini + semua lead time pembelian (dokumentasi Odoo 17, Replenishment Information).", [],
             [f"{vl} + {dp} + {ps} = {vl + dp + ps} hari", f"{tgl(d)} + {vl + dp + ps} hari = {tgl(h)}"], "lead time memakai hari kalender, akhir pekan tidak dilewati."))
    for _ in range(5):
        d = date(2026, R.randrange(1, 12), R.randrange(1, 28)); a, b = sorted(R.sample([2, 3, 5, 7, 8, 10, 12], 2))
        mc(k, 2, f"Quotation dikonfirmasi {tgl(d)} dengan dua produk: Customer Lead Time {a} dan {b} hari. Shipping Policy 'When all products are ready'. Tanggal pengiriman yang dijanjikan:",
           tgl(d + timedelta(days=b)), [(tgl(d + timedelta(days=a)), "Itu kebijakan 'As soon as possible' (lead time terpendek)."), (tgl(d + timedelta(days=a + b)), "Lead time tidak dijumlahkan; ambil yang terpanjang."),
                                         (tgl(d), "Pengiriman butuh lead time.")],
           E("'When all products are ready' memakai lead time TERPANJANG; 'As soon as possible' memakai yang TERPENDEK.", [],
             [f"maks({a}, {b}) = {b} hari", f"{tgl(d)} + {b} = {tgl(d + timedelta(days=b))}"], "contoh resmi: lead time 8 dan 5 hari dari 2 April → 7 April (ASAP) atau 10 April (all ready)."))
    for _ in range(5):
        kirim = date(2026, R.randrange(1, 12), R.randrange(10, 28)); ml = R.choice([3, 5, 7, 14]); ms = R.choice([0, 1, 2])
        h = kirim - timedelta(days=ml + ms)
        mc(k, 3, f"Pengiriman ke pelanggan dijadwalkan {tgl(kirim)}. Manufacturing Lead Time BoM {ml} hari, Manufacturing Security Lead Time {ms} hari. Paling lambat MO dimulai:",
           tgl(h), [(tgl(kirim + timedelta(days=ml + ms)), "Lead time produksi dihitung MUNDUR dari tanggal kirim."), (tgl(kirim - timedelta(days=ml)), "Security lead time juga mengurangi." if ms else "Hitung ulang."),
                    (tgl(kirim - timedelta(days=ml + ms - 1)), "Kurang satu hari."), (tgl(kirim - timedelta(days=ml + ms + 1)), "Kelebihan satu hari.")],
           E("Penjadwalan mundur: mulai MO = tanggal kirim − manufacturing lead time − security lead time.", [],
             [f"{ml} + {ms} = {ml + ms} hari", f"{tgl(kirim)} − {ml + ms} hari = {tgl(h)}"], "contoh dokumentasi: kirim 15 Agustus, lead time 14 hari → MO mulai 1 Agustus."))
    for _ in range(6):
        d = R.randrange(5, 60); L = R.choice([3, 5, 7, 10, 14]); ss = R.randrange(5, 50)
        rop = d * L + ss
        mcn(k, 2, f"Teori persediaan untuk mengisi Min: rata-rata keluar {d} unit/hari, lead time vendor {L} hari, safety stock {ss} unit. Reorder point (nilai Min yang disarankan):",
            rop, [(d * L, "Safety stock belum ditambahkan."), (d + L + ss, "Permintaan harian dikali lead time, bukan dijumlah."), (d * L * 2 + ss, "Permintaan selama lead time dihitung sekali.")],
            E("Reorder point = permintaan selama lead time + safety stock. Angka ini lalu diisikan sebagai Min di reordering rule.", ["Odoo tidak menghitung ROP otomatis; konsultan yang menghitungnya dari data penjualan (misalnya laporan Moves Analysis)."],
              [f"{d} × {L} = {d * L}", f"+ {ss} = {rop}"], "safety stock menutup permintaan yang lebih tinggi dari rata-rata."), f=angka)
    for _ in range(5):
        D = R.choice([1200, 2400, 3600, 4800, 6000, 9600]); S = R.choice([50000, 75000, 100000, 150000]); H = R.choice([2000, 3000, 4000, 6000])
        eoq = math.sqrt(2 * D * S / H)
        mcn(k, 3, f"Teori EOQ: permintaan {angka(D)} unit/tahun, biaya sekali pesan {rp(S)}, biaya simpan {rp(H)} per unit per tahun. EOQ (dibulatkan ke unit terdekat) — cocok sebagai jarak Max − Min:",
            round(eoq), [(round(2 * D * S / H), "Hasilnya harus diakarkan."), (round(math.sqrt(D * S / H)), "Angka 2 di dalam akar terlewat."), (round(math.sqrt(2 * D * H / S)), "S dan H tertukar.")],
            E("EOQ = √(2 × D × S ÷ H), jumlah pesanan yang membuat biaya pesan + biaya simpan paling kecil.", ["Odoo tidak punya kolom EOQ; hasilnya dipakai untuk menentukan Max (≈ Min + EOQ) atau Multiple Quantity."],
              [f"2 × {angka(D)} × {angka(S)} = {angka(2 * D * S)}", f"÷ {angka(H)} = {angka(2 * D * S / H, 2)}", f"√ = {angka(eoq, 2)} ≈ {round(eoq)}"],
              "naikkan biaya pesan → EOQ membesar; naikkan biaya simpan → EOQ mengecil."), f=angka)


# =============================================================== 5. VALUASI PERSEDIAAN
def fifo_keluar(lapisan, q):
    """Konsumsi lapisan FIFO (antrian [jumlah, harga]); mengembalikan nilai keluar."""
    nilai, sisa = 0, q
    while sisa > 0:
        j, h = lapisan[0]
        ambil = min(j, sisa); nilai += ambil * h; sisa -= ambil
        if ambil == j: lapisan.popleft()
        else: lapisan[0] = [j - ambil, h]
    return nilai


def avco_masuk(q0, c0, q1, c1):
    return (c0 * q0 + c1 * q1) / (q0 + q1)


def bab_valuasi():
    k = "valuasi"
    for _ in range(26):
        a, b = R.randrange(5, 40), R.randrange(5, 40); ca = R.randrange(10, 60) * 1000; cb = ca + R.choice([-4, -2, 2, 4, 5, 6, 10]) * 1000
        s = R.randrange(1, a + b)
        lap = deque([[a, ca], [b, cb]]); fifo = fifo_keluar(lap, s); sisa_fifo = sum(j * h for j, h in lap)
        avg = round(avco_masuk(a, ca, b, cb), 2); avco = round(s * avg, 2)  # Odoo menyimpan cost 2 desimal (Product Price)
        manual = min(s, a) * ca + max(0, s - a) * cb; assert abs(manual - fifo) < 1e-6
        tabel = f"Beli 1 : {a} unit @ {rp(ca)}\nBeli 2 : {b} unit @ {rp(cb)}\nJual   : {s} unit"
        jenis = R.choice(["fifo", "avco", "sisa", "selisih"])
        if jenis == "fifo":
            mcn(k, 2, "Costing Method FIFO. Berapa nilai HPP (COGS) penjualan ini?", fifo,
                [(avco, "Itu hasil AVCO."), (s * cb, "FIFO mengambil harga lapisan TERTUA dulu."), (s * ca if s > a else s * cb, "Lapisan pertama habis, sisanya memakai harga lapisan kedua." if s > a else "Lapisan pertama masih cukup.")],
                E("FIFO: unit yang keluar dinilai dengan harga lapisan masuk paling awal.", [],
                  [f"Ambil {min(s, a)} unit dari Beli 1 × {rp(ca)} = {rp(min(s, a) * ca)}"] + ([f"Sisa {s - a} unit dari Beli 2 × {rp(cb)} = {rp((s - a) * cb)}"] if s > a else []) + [f"HPP = {rp(fifo)}"],
                  "di Odoo setiap penerimaan membuat stock.valuation.layer; FIFO mengurangi remaining_qty lapisan tertua."), kode=tabel, f=lambda x: rp(x, None))
        elif jenis == "avco":
            mcn(k, 2, "Costing Method AVCO (Average Cost). Berapa nilai HPP penjualan ini?", avco,
                [(fifo, "Itu hasil FIFO."), (s * (ca + cb) / 2, "Rata-rata harus ditimbang dengan jumlah unit, bukan rata-rata dua harga."), (s * cb, "AVCO memakai harga rata-rata, bukan harga terakhir.")],
                E("Rumus Odoo 17: cost baru = (cost lama × qty lama + harga masuk × qty masuk) ÷ (qty lama + qty masuk).", [],
                  [f"Rata-rata = ({angka(ca)}×{a} + {angka(cb)}×{b}) ÷ {a + b} = {rp(avg, 2)}", f"HPP = {s} × {rp(avg, 2)} = {rp(avco, 2)}"],
                  "Odoo menyimpan cost dengan presisi Product Price (default 2 desimal), jadi bisa ada selisih sen."), kode=tabel, f=lambda x: rp(x, 2))
        elif jenis == "sisa":
            mcn(k, 3, "Costing Method FIFO. Berapa nilai persediaan yang tersisa setelah penjualan?", sisa_fifo,
                [((a + b - s) * avg, "Itu nilai sisa versi AVCO."), ((a + b - s) * ca, "Sisa FIFO berasal dari lapisan TERBARU."), (a * ca + b * cb - s * cb, "HPP FIFO memakai harga tertua dulu.")],
                E("Nilai sisa = total nilai masuk − HPP.", [], [f"Total masuk = {rp(a * ca + b * cb)}", f"HPP FIFO = {rp(fifo)}", f"Sisa = {rp(sisa_fifo)}"],
                  "dalam FIFO, sisa stok dinilai dengan harga pembelian terbaru."), kode=tabel, f=lambda x: rp(x, 2))
        else:
            mcn(k, 3, "Selisih HPP FIFO dikurangi HPP AVCO untuk penjualan ini (bisa negatif)?", fifo - avco,
                [(avco - fifo, "Urutan pengurangannya terbalik."), (0, "Kedua metode hanya sama bila harga beli sama atau semua stok terjual."), (abs(cb - ca) * s, "Selisih harga dikali semua unit terlalu besar.")],
                E("Saat harga naik, FIFO memberi HPP lebih rendah (laba lebih tinggi) daripada AVCO; saat harga turun sebaliknya.", [],
                  [f"HPP FIFO = {rp(fifo)}", f"HPP AVCO = {rp(avco, 2)}", f"Selisih = {rp(fifo - avco, 2)}"], "pilihan metode mengubah laba di laporan, bukan jumlah unit."), kode=tabel, f=lambda x: rp(x, 2))
    for _ in range(7):
        q0, c0 = R.randrange(5, 50), R.randrange(10, 80) * 1000; q1, c1 = R.randrange(5, 50), R.randrange(10, 80) * 1000
        nb = avco_masuk(q0, c0, q1, c1)
        mcn(k, 2, f"AVCO: stok {q0} unit dengan cost {rp(c0)}. Datang {q1} unit dengan harga {rp(c1)}. Cost produk yang baru (2 desimal):",
            round(nb, 2), [((c0 + c1) / 2, "Rata-rata sederhana mengabaikan jumlah unit."), (c1, "AVCO tidak langsung memakai harga terakhir."), ((c0 * q0 + c1 * q1) / q1, "Pembaginya total unit.")],
            E("AVCO = nilai total ÷ unit total.", [], [f"Nilai lama {rp(c0 * q0)} + nilai masuk {rp(c1 * q1)} = {rp(c0 * q0 + c1 * q1)}", f"÷ {q0 + q1} unit = {rp(nb, 2)}"],
              "penjualan tidak mengubah cost AVCO; hanya penerimaan yang mengubahnya."), f=lambda x: rp(x, 2))
    for _ in range(5):
        std, beli, q = R.randrange(20, 90) * 1000, 0, R.randrange(5, 40)
        beli = std + R.choice([-5, -3, 2, 4, 7]) * 1000
        mcn(k, 2, f"Costing Method Standard Price, cost standar {rp(std)}. Dibeli {q} unit seharga {rp(beli)}/unit. Nilai persediaan yang tercatat untuk penerimaan ini:",
            q * std, [(q * beli, "Metode Standard selalu memakai cost standar, bukan harga PO."), (q * (beli - std), "Itu selisih harga (price difference)."), (std, "Belum dikali jumlah unit.")],
            E("Standard Price: stok masuk dan keluar dinilai dengan cost di form produk.", ["Selisih harga beli vs standar masuk ke akun Price Difference (bila valuasi otomatis)."],
              [f"{q} × {rp(std)} = {rp(q * std)}", f"Selisih harga = {q} × ({rp(beli)} − {rp(std)}) = {rp(q * (beli - std))}"], "dokumentasi Odoo: Standard memakai cost produk walau harga PO berbeda."))
    for _ in range(4):
        a, ca, b, cb, s = R.randrange(5, 20), R.randrange(10, 40) * 1000, R.randrange(5, 20), 0, 0
        cb = ca + R.randrange(1, 8) * 1000; s = a + R.randrange(1, b)
        lap = deque([[a, ca], [b, cb]]); h = fifo_keluar(lap, s)
        isian(k, 2, f"FIFO: beli {a} unit @ {angka(ca)}, lalu {b} unit @ {angka(cb)}. Jual {s} unit. HPP (angka saja)?", jwb_bulat(h),
              E("Habiskan lapisan pertama dulu.", [], [f"{a} × {angka(ca)} = {angka(a * ca)}", f"{s - a} × {angka(cb)} = {angka((s - a) * cb)}", f"Total {angka(h)}"], "lapisan tertua keluar duluan."))


# =============================================================== 6. LANDED COST
def bab_landed():
    k = "landed"
    for _ in range(32):
        n = R.choice([2, 3])
        produk = [(nm, R.randrange(5, 60), R.randrange(1, 20), R.randrange(10, 200) * 1000) for nm in R.sample(["Kursi", "Meja", "Lemari", "Rak", "Lampu"], n)]
        L = R.randrange(10, 200) * 10000
        metode = R.choice(["equal", "by_quantity", "by_current_cost_price", "by_weight"])
        tq = sum(q for _, q, _, _ in produk); tw = sum(q * w for _, q, w, _ in produk); tc = sum(q * c for _, q, _, c in produk)
        def bagian(p):
            nm, q, w, c = p
            return {"equal": L / n, "by_quantity": L * q / tq, "by_current_cost_price": L * q * c / tc, "by_weight": L * q * w / tw}[metode]
        target = R.choice(produk); hasil = bulat(bagian(target), 0.01)
        label = {"equal": "Equal", "by_quantity": "By Quantity", "by_current_cost_price": "By Current Cost", "by_weight": "By Weight"}[metode]
        kode = "\n".join(f"{nm:7}: {q:>3} unit, berat {w} kg/unit, cost {angka(c)}/unit" for nm, q, w, c in produk)
        lain = {m: {"equal": L / n, "by_quantity": L * target[1] / tq, "by_current_cost_price": L * target[1] * target[3] / tc, "by_weight": L * target[1] * target[2] / tw}[m] for m in ["equal", "by_quantity", "by_current_cost_price", "by_weight"] if m != metode}
        nama_m = {"equal": "Equal", "by_quantity": "By Quantity", "by_current_cost_price": "By Current Cost", "by_weight": "By Weight"}
        dasar = {"equal": f"{rp(L)} ÷ {n} baris", "by_quantity": f"{rp(L)} × {target[1]} ÷ {tq} unit", "by_current_cost_price": f"{rp(L)} × {angka(target[1] * target[3])} ÷ {angka(tc)}", "by_weight": f"{rp(L)} × {target[1] * target[2]} kg ÷ {tw} kg"}[metode]
        if R.random() < 0.7:
            mcn(k, 2 if metode in ("equal", "by_quantity") else 3, f"Ongkos kirim (landed cost) {rp(L)} dibagi dengan metode {label} ke penerimaan ini. Bagian untuk {target[0]}:",
                hasil, [(bulat(v, 0.01), f"Itu hasil metode {nama_m[m]}.") for m, v in lain.items()],
                E(f"Metode {label}: " + {"equal": "dibagi rata per baris penerimaan.", "by_quantity": "sebanding jumlah unit.", "by_current_cost_price": "sebanding nilai (qty × cost) tiap baris.", "by_weight": "sebanding total berat (qty × berat per unit)."}[metode],
                  ["Kode Odoo 17 (stock_landed_cost.compute_landed_cost) membulatkan tiap bagian HALF-UP ke presisi mata uang; sisa pembulatan ditaruh di baris terakhir."],
                  [f"Bagian {target[0]} = {dasar} = {rp(hasil, 2)}"], "landed cost hanya bisa dipakai pada produk dengan valuasi FIFO atau AVCO dan Inventory Valuation Automated."),
                kode=kode, f=lambda x: rp(x, 2))
        else:
            per_unit = target[3] + hasil / target[1]
            mcn(k, 3, f"Landed cost {rp(L)} dibagi {label}. Setelah divalidasi, berapa cost per unit {target[0]} yang baru (2 desimal)?",
                round(per_unit, 2), [(round(target[3] + hasil, 2), "Bagian landed cost harus dibagi jumlah unit produk itu."), (target[3], "Landed cost menambah nilai persediaan."),
                                     (round(target[3] + L / target[1], 2), "Yang ditambahkan hanya BAGIAN produk ini, bukan seluruh ongkos.")],
                E("Cost baru per unit = cost lama + (bagian landed cost ÷ jumlah unit).", [],
                  [f"Bagian {target[0]} = {dasar} = {rp(hasil, 2)}", f"÷ {target[1]} unit = {rp(hasil / target[1], 2)}", f"Cost baru = {rp(target[3])} + {rp(hasil / target[1], 2)} = {rp(per_unit, 2)}"],
                  "bila sebagian unit sudah terjual, porsi landed cost-nya langsung dibebankan ke HPP, bukan ke stok."), kode=kode, f=lambda x: rp(x, 2))


# =============================================================== 7. PRODUKSI (MRP)
def durasi(q, kapasitas, siklus, efisiensi, setup, cleanup):
    """mrp_workorder._get_duration_expected (dengan operation): setup + cleanup + ceil(q/kapasitas) × siklus × 100/efisiensi."""
    return setup + cleanup + math.ceil(q / kapasitas) * siklus * 100 / efisiensi


def bab_produksi():
    k = "produksi"
    for _ in range(8):
        bq = R.choice([1, 2, 5, 10]); c = R.randrange(1, 9) * R.choice([1, 2, 3]); Q = bq * R.randrange(2, 30) + R.choice([0, 0, bq // 2])
        h = c * Q / bq
        if abs(h - round(h, 2)) > 1e-9: continue
        mcn(k, 2, f"BoM menghasilkan {bq} unit produk dan memakai {c} unit komponen A. Manufacturing Order dibuat untuk {Q} unit. Kebutuhan komponen A:",
            h, [(c * Q, "Kuantitas BoM belum diperhitungkan; komponen ditulis untuk {bq} unit hasil.".format(bq=bq)) if bq > 1 else (c * Q + c, "Hitung ulang."),
                (c / bq, "Belum dikali kuantitas MO."), (c * bq * Q, "Seharusnya dibagi kuantitas BoM, bukan dikali.")],
            E("Kebutuhan = qty komponen × (qty MO ÷ qty BoM).", [], [f"{Q} ÷ {bq} = {angka(Q / bq)} kali resep", f"× {c} = {angka(h)} unit"], "Quantity di atas BoM adalah jumlah HASIL satu resep."), f=angka)
    for _ in range(6):
        Q = R.randrange(5, 60); a = R.randrange(2, 5); b = R.randrange(2, 6)
        mcn(k, 2, f"Produk Meja (BoM: {a} Kaki Set). Kaki Set adalah Kit (BoM type Kit: {b} kaki kayu). Untuk {Q} meja, berapa kaki kayu yang diambil dari gudang?",
            Q * a * b, [(Q * a, "Kit 'meledak' menjadi komponennya; yang diambil kaki kayu, bukan Kaki Set."), (Q * b, "Kebutuhan Kaki Set per meja belum dikali."), (Q * (a + b), "Hubungannya perkalian bertingkat.")],
            E("BoM Kit tidak punya stok sendiri; saat dipakai Odoo menggantinya dengan komponen Kit.", [], [f"{Q} meja × {a} Kaki Set = {Q * a}", f"{Q * a} × {b} kaki kayu = {Q * a * b}"], "Kit cocok untuk bundel produk, bukan barang yang benar-benar dirakit dan disimpan."), f=angka)
    for _ in range(10):
        Q = R.randrange(10, 120); cap = R.choice([1, 1, 2, 4, 5]); cyc = R.choice([2, 3, 4, 5, 6, 10]); ef = R.choice([80, 100, 100, 120, 125]); su = R.choice([0, 10, 15, 30]); cl = R.choice([0, 5, 10])
        h = durasi(Q, cap, cyc, ef, su, cl)
        if abs(h - round(h, 2)) > 1e-9: continue
        mcn(k, 3, f"Work center: Capacity {cap}, Time Efficiency {ef}%, Setup Time {su} menit, Cleanup Time {cl} menit. Operasi butuh {cyc} menit per siklus. MO {Q} unit. Expected Duration (menit):",
            h, [(su + cl + Q * cyc * 100 / ef, "Capacity belum dipakai: satu siklus memproses beberapa unit sekaligus.") if cap > 1 else (Q * cyc + su + cl if ef != 100 else h + su, "Efisiensi belum dipakai." if ef != 100 else "Setup dihitung dua kali."),
                (su + cl + math.ceil(Q / cap) * cyc * ef / 100, "Efisiensi membagi, bukan mengali: 200% = dua kali lebih cepat.") if ef != 100 else (math.ceil(Q / cap) * cyc, "Setup dan Cleanup belum ditambahkan."),
                (math.ceil(Q / cap) * cyc * 100 / ef, "Setup dan Cleanup Time belum ditambahkan.") if su + cl else (h + cyc, "Kelebihan satu siklus.")],
            E("Rumus Odoo 17: setup + cleanup + ⌈qty ÷ capacity⌉ × waktu siklus × 100 ÷ efisiensi.", [],
              [f"Jumlah siklus = ⌈{Q} ÷ {cap}⌉ = {math.ceil(Q / cap)}", f"Waktu kerja = {math.ceil(Q / cap)} × {cyc} × 100 ÷ {ef} = {angka(math.ceil(Q / cap) * cyc * 100 / ef, 2)}", f"+ {su} + {cl} = {angka(h, 2)} menit"],
              "efisiensi 200% membuat pekerjaan 1 jam selesai 30 menit (contoh dokumentasi resmi)."), f=lambda x: angka(x, 2 if abs(x - round(x)) > 1e-9 else None) + " menit")
    for _ in range(8):
        Q = R.randrange(5, 50); bahan = R.randrange(20, 150) * 1000; menit = R.choice([60, 90, 120, 150, 180, 240]); tarif = R.choice([60000, 90000, 120000, 150000])
        tot = Q * bahan + menit / 60 * tarif
        mcn(k, 3, f"MO {Q} unit. Biaya komponen {rp(bahan)} per unit hasil. Work order berjalan {menit} menit di work center dengan Cost per hour {rp(tarif)}. Cost per unit hasil:",
            tot / Q, [(bahan + menit * tarif / Q, "Menit harus diubah ke jam dulu (÷ 60)."), (bahan, "Biaya work center belum dimasukkan."), (bahan + menit / 60 * tarif, "Biaya work center harus dibagi jumlah unit.")],
            E("Cost MO = komponen + (durasi jam × Cost per hour); dibagi qty untuk cost per unit.", [],
              [f"Komponen = {Q} × {rp(bahan)} = {rp(Q * bahan)}", f"Work center = {angka(menit / 60, 2)} jam × {rp(tarif)} = {rp(menit / 60 * tarif)}", f"Total {rp(tot)} ÷ {Q} = {rp(tot / Q, 2)}"],
              "laporan MO Overview (Cost Analysis) menampilkan rincian ini."), f=lambda x: rp(x, 2))
    for _ in range(6):
        Q = R.randrange(50, 1000); y = R.choice([90, 95, 96, 98, 80])
        h = math.ceil(Q / (y / 100))
        mcn(k, 2, f"Proses punya yield {y}% (sisanya cacat). Untuk mendapat {Q} unit baik, minimal berapa unit yang harus diproduksi?",
            h, [(math.ceil(Q * (1 + (100 - y) / 100)), f"Menambah {100 - y}% dari target tidak cukup, karena cacat dihitung dari jumlah yang diproduksi."), (Q, "Belum memperhitungkan cacat."), (math.floor(Q / (y / 100)), "Harus dibulatkan ke atas.")],
            E("Unit diproduksi = target ÷ yield, dibulatkan ke atas.", [], [f"{Q} ÷ {angka(y / 100, 2)} = {angka(Q / (y / 100), 2)}", f"Naik ke {h}"], "÷ 0,95 tidak sama dengan × 1,05."), f=angka)
    for _ in range(6):
        A, P, Qu = R.choice([0.8, 0.85, 0.9, 0.95]), R.choice([0.75, 0.8, 0.9, 0.95]), R.choice([0.95, 0.97, 0.98, 0.99])
        oee = A * P * Qu * 100
        mcn(k, 2, f"Rumus OEE standar industri: Availability {pct(A * 100)}, Performance {pct(P * 100)}, Quality {pct(Qu * 100)}. Nilai OEE:",
            round(oee, 1), [(round((A + P + Qu) / 3 * 100, 1), "OEE adalah hasil KALI ketiga faktor, bukan rata-rata."), (round(min(A, P, Qu) * 100, 1), "Bukan faktor terkecil."), (round(A * P * 100, 1), "Quality belum dikalikan.")],
            E("OEE = Availability × Performance × Quality.", ["Odoo menampilkan OEE dan OEE Target di work center sebagai ukuran waktu produktif."],
              [f"{angka(A, 2)} × {angka(P, 2)} × {angka(Qu, 2)} = {angka(oee / 100, 4)}", f"= {pct(round(oee, 1))}"], "OEE 85% dianggap kelas dunia untuk manufaktur diskrit."), f=lambda x: pct(x))


# =============================================================== 8. JURNAL OTOMATIS
def bab_jurnal():
    k = "jurnal"
    for _ in range(8):
        S = R.randrange(10, 900) * 10000; ppn = S * 0.11
        baris = R.choice(["piutang", "pendapatan", "ppn"])
        nilai = {"piutang": S + ppn, "pendapatan": S, "ppn": ppn}[baris]
        nama = {"piutang": "Debit akun Piutang Usaha (Account Receivable)", "pendapatan": "Kredit akun Pendapatan Penjualan", "ppn": "Kredit akun PPN Keluaran"}[baris]
        mcn(k, 2, f"Faktur pelanggan diposting: subtotal {rp(S)}, PPN 11%. Berapa nilai baris jurnal: {nama}?",
            nilai, [(v, a) for v, a in [(S + ppn, "Itu nilai Piutang (total faktur)."), (S, "Itu nilai Pendapatan (tanpa pajak)."), (ppn, "Itu nilai PPN Keluaran."), (S - ppn, "Tidak ada baris bernilai subtotal − pajak.")] if abs(v - nilai) > 1e-9],
            E("Jurnal faktur pelanggan: Debit Piutang = total; Kredit Pendapatan = subtotal; Kredit PPN Keluaran = pajak.", [],
              [f"Piutang {rp(S + ppn)} = Pendapatan {rp(S)} + PPN {rp(ppn)}"], "total debit selalu sama dengan total kredit."))
    for _ in range(7):
        usd = R.randrange(1, 50) * 100; k1 = R.randrange(155, 168) * 100; k2 = k1 + R.choice([-300, -200, -100, 100, 150, 200, 300])
        sel = usd * (k2 - k1)
        mcn(k, 3, f"Faktur ke pelanggan luar negeri USD {angka(usd)} dicatat saat kurs Rp {angka(k1)}. Dibayar saat kurs Rp {angka(k2)}. Selisih kurs yang dicatat Odoo (positif = laba, negatif = rugi):",
            sel, [(-sel, "Tandanya terbalik: piutang valas yang dibayar dengan kurs lebih tinggi menghasilkan LABA."), (usd * k2, "Itu nilai rupiah pembayaran, bukan selisih."), (k2 - k1, "Selisih kurs harus dikali nilai USD.")],
            E("Selisih kurs realisasi = nilai valas × (kurs bayar − kurs faktur), untuk piutang.", ["Odoo membuat jurnal otomatis di Exchange Difference Journal saat rekonsiliasi."],
              [f"{angka(usd)} × ({angka(k2)} − {angka(k1)}) = {rp(sel)}"], "untuk UTANG valas tandanya terbalik: kurs naik = rugi."))
    for _ in range(6):
        q = R.randrange(2, 40); c = R.randrange(20, 300) * 1000; p = c + R.randrange(5, 100) * 1000
        mcn(k, 2, f"Anglo-Saxon, valuasi otomatis. Dikirim {q} unit (cost {rp(c)}, harga jual {rp(p)}). Nilai baris Debit Cost of Goods Sold saat faktur diposting:",
            q * c, [(q * p, "COGS memakai COST, bukan harga jual."), (q * (p - c), "Itu laba kotor."), (c, "Belum dikali jumlah unit.")],
            E("Anglo-Saxon: saat faktur, Debit COGS / Kredit Stock Output sebesar qty × cost.", ["Saat pengiriman: Debit Stock Output / Kredit Stock Valuation."],
              [f"{q} × {rp(c)} = {rp(q * c)}"], "Continental tidak membuat jurnal COGS per faktur; beban diakui saat pembelian."))
    for _ in range(5):
        d = [R.randrange(1, 90) * 100000 for _ in range(3)]; kr = [R.randrange(1, 90) * 100000 for _ in range(2)]
        hil = sum(d) - sum(kr)
        if hil <= 0: continue
        kode = f"Debit : {', '.join(angka(x) for x in d)}\nKredit: {', '.join(angka(x) for x in kr)}, ?"
        mcn(k, 2, "Jurnal manual ini belum seimbang. Berapa nilai baris kredit yang hilang supaya Odoo mau memposting?",
            hil, [(sum(d) + sum(kr), "Dicari selisih, bukan jumlah semua."), (sum(kr) - sum(d) + 2 * sum(kr), "Hitung ulang."), (sum(d), "Kredit yang sudah ada belum dikurangkan.")],
            E("Odoo menolak jurnal yang total debit ≠ total kredit.", [], [f"Total debit {angka(sum(d))}", f"Total kredit sekarang {angka(sum(kr))}", f"Kurang {angka(hil)}"], "pesan galat 'The entry is not balanced' berarti hal ini."), kode=kode)
    for _ in range(5):
        S = R.randrange(10, 300) * 100000; dp = R.choice([10, 20, 30, 50])
        sisa = S * (1 - dp / 100)
        mcn(k, 2, f"Sales Order {rp(S)} (sebelum pajak). Dibuat faktur Down Payment {dp}% lalu dibayar. Saat faktur akhir dibuat, Untaxed Amount faktur akhir:",
            sisa, [(S, "Faktur akhir mengurangkan down payment yang sudah difakturkan."), (S * dp / 100, "Itu nilai down payment."), (S * (1 + dp / 100), "Down payment mengurangi, bukan menambah.")],
            E("Faktur akhir memuat semua baris + satu baris down payment bernilai negatif.", [], [f"DP = {dp}% × {rp(S)} = {rp(S * dp / 100)}", f"Akhir = {rp(S)} − {rp(S * dp / 100)} = {rp(sisa)}"], "baris DP bernilai negatif di faktur akhir."))


# =============================================================== 9. TERMIN BAYAR, DISKON BAYAR AWAL & CASH ROUNDING
def akhir_bulan(d):
    n = date(d.year + (d.month == 12), d.month % 12 + 1, 1)
    return n - timedelta(days=1)


def bab_termin():
    k = "termin"
    for _ in range(7):
        T = R.randrange(10, 500) * 10000; p = R.choice([20, 25, 30, 40, 50])
        a = bulat(T * p / 100, 0.01); b = T - a
        mcn(k, 1, f"Payment term: {p}% segera, sisanya (Balance) 30 hari. Total faktur {rp(T)}. Angsuran kedua:",
            b, [(a, "Itu angsuran pertama."), (T * (100 - p) / 100 * 1.11, "Persentase sudah dihitung dari total yang termasuk pajak."), (T, "Itu total faktur.")],
            E("Baris terakhir payment term selalu mengambil SISA (balance).", [], [f"Angsuran 1 = {p}% × {rp(T)} = {rp(a)}", f"Angsuran 2 = {rp(T)} − {rp(a)} = {rp(b)}"], "persentase dihitung dari total faktur termasuk pajak."))
    for _ in range(8):
        d = date(2026, R.randrange(1, 13), R.randrange(1, 29)); n = R.choice([0, 10, 15, 30]); tipe = R.choice(["days_after", "days_after_end_of_month", "days_after_end_of_next_month"])
        if tipe == "days_after": h = d + timedelta(days=n)
        elif tipe == "days_after_end_of_month": h = akhir_bulan(d) + timedelta(days=n)
        else: h = akhir_bulan(akhir_bulan(d) + timedelta(days=1)) + timedelta(days=n)
        label = {"days_after": "Days after invoice date", "days_after_end_of_month": "Days after end of month", "days_after_end_of_next_month": "Days after end of next month"}[tipe]
        alt = [d + timedelta(days=n), akhir_bulan(d) + timedelta(days=n), akhir_bulan(akhir_bulan(d) + timedelta(days=1)) + timedelta(days=n), d + timedelta(days=n + 30)]
        mc(k, 2, f"Faktur bertanggal {tgl(d)}. Baris payment term: {n} hari, tipe '{label}'. Jatuh temponya:",
           tgl(h), [(tgl(x), "Itu hasil tipe lain atau hitungan dasar yang salah.") for x in alt if x != h],
           E("Odoo 17 _get_due_date: days after = tanggal + n; end of month = akhir bulan faktur + n; end of next month = akhir bulan berikutnya + n.", [],
             [f"Titik awal: " + {"days_after": tgl(d), "days_after_end_of_month": tgl(akhir_bulan(d)), "days_after_end_of_next_month": tgl(akhir_bulan(akhir_bulan(d) + timedelta(days=1)))}[tipe], f"+ {n} hari = {tgl(h)}"],
             "'end of month' sering dipakai supplier: semua faktur bulan ini jatuh tempo di tanggal yang sama."))
    for _ in range(8):
        S = R.randrange(10, 300) * 100000; t = 0.11; T = S * (1 + t); dsk = R.choice([1, 2, 3, 5]); mode = R.choice(["included", "excluded"])
        bayar = T * (1 - dsk / 100) if mode == "included" else T - S * dsk / 100
        lain = T - S * dsk / 100 if mode == "included" else T * (1 - dsk / 100)
        mcn(k, 3, f"Payment term dengan Early Discount {dsk}% bila bayar dalam 10 hari, Cash Discount Tax Reduction = '{'On early payment' if mode == 'included' else 'Never'}'. Untaxed {rp(S)}, pajak 11%. Pelanggan membayar cepat. Nilai yang dibayar:",
            bayar, [(lain, "Itu hasil pengaturan Tax Reduction yang lain."), (T, "Diskon bayar cepat belum diterapkan."), (S * (1 - dsk / 100), "Pajak tetap dibayar.")],
            E("Kode Odoo 17: 'On early payment' (included) → total × (1 − diskon); 'Never' (excluded) → total − untaxed × diskon.", ["'On early payment' juga ikut mengurangi pajak; 'Never' membuat pajak tetap penuh."],
              [f"Total = {rp(S)} × 1,11 = {rp(T)}", ("Bayar = " + f"{rp(T)} × (1 − {dsk}%)" if mode == "included" else f"Bayar = {rp(T)} − {dsk}% × {rp(S)}") + f" = {rp(bayar, 2)}"],
              "early discount hanya tersedia pada payment term satu baris 100%."), f=lambda x: rp(x, 2))
    for _ in range(9):
        x = R.randrange(10000, 999999) + R.choice([0, 0.5]); p = R.choice([100, 500, 1000]); cara = R.choice(["HALF-UP", "UP", "DOWN"])
        h = bulat(x, p, cara)
        lain = [(bulat(x, p, c), f"Itu hasil metode {c}.") for c in ["HALF-UP", "UP", "DOWN"] if c != cara] + [(x, "Total belum dibulatkan.")]
        mcn(k, 2, f"Cash Rounding: Rounding Precision {angka(p)}, Rounding Method {cara}. Total faktur {rp(x, None)}. Total setelah pembulatan:",
            h, lain, E("account.cash.rounding.round = float_round(total, presisi, metode). Selisihnya dicatat sebagai baris pembulatan.", [],
                       [f"{rp(x, None)} → kelipatan {angka(p)} ({cara}) = {rp(h)}", f"Selisih = {rp(h - x, None)}"], "HALF-UP ke terdekat, UP selalu naik, DOWN selalu turun (menjauhi/mendekati nol)."))
    for _ in range(4):
        T = R.randrange(10, 900) * 10000; a = R.randrange(1, 9) * T // 10
        isian(k, 1, f"Faktur {rp(T)} dibayar sebagian {rp(a)}. Amount Due yang tersisa (angka saja)?", jwb_bulat(T - a),
              E("Amount Due = total − pembayaran yang sudah direkonsiliasi.", [], [f"{angka(T)} − {angka(a)} = {angka(T - a)}"], "status faktur menjadi 'Partial' sampai lunas."))


# =============================================================== 10. PENYUSUTAN ASET
def bab_penyusutan():
    k = "penyusutan"
    for _ in range(8):
        C = R.randrange(10, 300) * 1000000; sv = R.choice([0, C // 10, C // 20]); n = R.choice([3, 4, 5, 8, 10]); t = R.randrange(1, n)
        th = (C - sv) / n; nb = C - th * t
        if R.random() < 0.5:
            mcn(k, 1, f"Aset {rp(C)}, nilai sisa (Not Depreciable Value) {rp(sv)}, metode Straight Line {n} tahun. Penyusutan per tahun:",
                th, [(C / n, "Nilai sisa tidak ikut disusutkan.") if sv else (C / (n - 1), "Pembaginya jumlah tahun."), ((C + sv) / n, "Nilai sisa dikurangkan, bukan ditambah."), (C - sv, "Belum dibagi umur.")],
                E("Straight Line: (cost − nilai sisa) ÷ jumlah periode.", [], [f"({rp(C)} − {rp(sv)}) ÷ {n} = {rp(th)}"], "setiap entri sama besar."))
        else:
            mcn(k, 2, f"Aset {rp(C)}, nilai sisa {rp(sv)}, Straight Line {n} tahun. Nilai buku setelah {t} tahun:",
                nb, [(C - C / n * t, "Penyusutan dihitung dari (cost − nilai sisa).") if sv else (C - th * (t + 1), "Kelebihan satu tahun."), (th * t, "Itu akumulasi penyusutan, bukan nilai buku."), (C - th * (t - 1), "Kurang satu tahun.")],
                E("Nilai buku = cost − akumulasi penyusutan.", [], [f"Per tahun {rp(th)}", f"Akumulasi {t} tahun = {rp(th * t)}", f"Nilai buku = {rp(nb)}"], "nilai buku akhir = nilai sisa."))
    for _ in range(8):
        C = R.randrange(10, 200) * 1000000; f = R.choice([0.2, 0.25, 0.3, 0.4, 0.5]); t = R.randrange(1, 4)
        sisa = C; rinci = []
        for i in range(t):
            e = sisa * f; rinci.append(f"Tahun {i + 1}: {rp(sisa, 2)} × {angka(f, 2)} = {rp(e, 2)}"); sisa -= e
        e_next = sisa * f
        mcn(k, 3, f"Metode Declining, Declining Factor {pct(f * 100)}, cost {rp(C)}, nilai sisa 0. Berapa penyusutan tahun ke-{t + 1}?",
            e_next, [(C * f, "Declining dihitung dari NILAI SISA BUKU, bukan cost awal."), (C * f * (1 - f) if t > 1 else C * f * f, "Itu penyusutan tahun ke-2." if t > 1 else "Faktor dikalikan ke nilai buku sisa, bukan ke penyusutan tahun lalu."), (C * f * (1 - f * t), "Bukan pengurangan linear.")],
            E("Declining: penyusutan = nilai buku sisa × faktor; entri terakhir mengambil sisa agar nilai buku 0.", [], rinci + [f"Sisa buku {rp(sisa, 2)} × {angka(f, 2)} = {rp(e_next, 2)}"],
              "angkanya mengecil tiap tahun (deret geometri: C × f × (1 − f)^(t))."), f=lambda x: rp(x, 2))
    for _ in range(6):
        C = R.randrange(12, 240) * 1000000; n = R.choice([4, 5, 8]); bln = R.randrange(2, 12)
        mulai = date(2026, bln, 1); hari = (date(2026, 12, 31) - mulai).days + 1
        th = C / n; pertama = th * hari / 365
        mcn(k, 3, f"Aset {rp(C)}, Straight Line {n} tahun, periode tahunan, Prorata Temporis aktif dengan Prorata Date {tgl(mulai)} (tahun 365 hari). Penyusutan tahun pertama:",
            pertama, [(th, "Prorata Temporis memotong tahun pertama sesuai jumlah hari."), (th * (13 - bln) / 12, "Itu prorata per bulan; Odoo 17 menghitung per hari."), (th * (bln - 1) / 12, "Yang dihitung adalah sisa tahun SETELAH tanggal mulai.")],
            E("Prorata Temporis: penyusutan pertama = penyusutan setahun × hari terpakai ÷ hari dalam periode.", ["Sisa penyusutan yang terpotong muncul di akhir masa pakai."],
              [f"Per tahun {rp(th)}", f"Hari dari {tgl(mulai)} s.d. 31 Desember = {hari}", f"{rp(th)} × {hari}/365 = {rp(pertama, 2)}"], "tanpa prorata, Odoo menganggap aset dipakai penuh sejak awal periode."), f=lambda x: rp(x, 2))
    for _ in range(4):
        C = R.randrange(10, 100) * 1000000; n = R.choice([4, 5, 10])
        f = 2 / n
        mcn(k, 2, f"Teori: metode saldo menurun ganda (double declining) untuk umur {n} tahun memakai faktor 2 ÷ umur. Aset {rp(C)}. Penyusutan tahun pertama:",
            C * f, [(C / n, "Itu garis lurus."), (C * f * (1 - f), "Itu tahun kedua."), (C * 2, "Faktornya 2 ÷ umur, bukan 2.")],
            E("Double declining = nilai buku × (2 ÷ umur). Di Odoo, isi Declining Factor dengan 2/umur.", [], [f"Faktor = 2 ÷ {n} = {pct(f * 100)}", f"{rp(C)} × {pct(f * 100)} = {rp(C * f)}"], "metode ini membebankan biaya lebih besar di awal."))


# =============================================================== 11. CRM & PIPELINE
def bab_pipeline():
    k = "pipeline"
    for _ in range(7):
        E_ = R.randrange(5, 500) * 100000; p = R.choice([10, 20, 25, 30, 40, 50, 60, 70, 90])
        mcn(k, 1, f"Opportunity: Expected Revenue {rp(E_)}, Probability {p}%. Prorated Revenue di Odoo:",
            round(E_ * p / 100, 2), [(E_, "Prorated harus dikali probabilitas."), (E_ * (100 - p) / 100, "Itu peluang KALAH, bukan menang."), (E_ / p, "Persen dikalikan, bukan dibagi.")],
            E("crm.lead._compute_prorated_revenue = expected_revenue × probability ÷ 100.", [], [f"{rp(E_)} × {p}% = {rp(E_ * p / 100)}"], "prorated revenue dipakai untuk forecast penjualan tertimbang."))
    for _ in range(7):
        ops = [(R.randrange(5, 200) * 100000, R.choice([10, 20, 30, 50, 70, 90])) for _ in range(R.choice([3, 4]))]
        tot = sum(e * p / 100 for e, p in ops); kode = "\n".join(f"Opp {i + 1}: {angka(e)} @ {p}%" for i, (e, p) in enumerate(ops, 0))
        mcn(k, 2, "Pipeline tim berisi opportunity berikut. Total forecast tertimbang (jumlah Prorated Revenue):",
            tot, [(sum(e for e, _ in ops), "Itu total Expected Revenue tanpa bobot."), (sum(e for e, _ in ops) * sum(p for _, p in ops) / len(ops) / 100, "Rata-rata probabilitas tidak boleh dipakai; tiap opp punya bobot sendiri."),
                  (max(e * p / 100 for e, p in ops), "Itu hanya satu opportunity.")],
            E("Forecast tertimbang = Σ (expected revenue × probability).", [], [f"Opp {i + 1}: {rp(e * p / 100)}" for i, (e, p) in enumerate(ops)] + [f"Jumlah = {rp(tot)}"], "lihat di CRM > Reporting > Pipeline, ukuran Prorated Revenue."), kode=kode)
    for _ in range(6):
        won, lost = R.randrange(5, 80), R.randrange(5, 120)
        wr = won / (won + lost) * 100
        mcn(k, 2, f"Bulan ini tim menutup {won} opportunity Won dan {lost} Lost. Win rate:",
            round(wr, 1), [(round(won / lost * 100, 1), "Pembaginya semua yang sudah selesai (won + lost)."), (round(lost / (won + lost) * 100, 1), "Itu loss rate."), (won, "Itu jumlah, bukan persen.")],
            E("Win rate = won ÷ (won + lost).", [], [f"{won} ÷ {won + lost} = {pct(round(wr, 1))}"], "opportunity yang masih terbuka tidak masuk hitungan."), f=lambda x: pct(x))
    for _ in range(7):
        target = R.randrange(10, 200) * 10000000; deal = R.randrange(5, 50) * 1000000; wr = R.choice([10, 20, 25, 40]); kv = R.choice([20, 25, 50])
        opp = math.ceil(target / deal / (wr / 100)); leads = math.ceil(opp / (kv / 100))
        mcn(k, 3, f"Target omzet {rp(target)}. Rata-rata nilai deal {rp(deal)}, win rate {wr}%, konversi lead → opportunity {kv}%. Minimal berapa LEAD yang dibutuhkan?",
            leads, [(opp, "Itu jumlah opportunity; masih perlu dibagi konversi lead."), (math.ceil(target / deal), "Itu deal yang harus menang."), (math.ceil(target / deal / (wr / 100) * (kv / 100)), "Konversi membagi, bukan mengali.")],
            E("Hitung mundur corong penjualan: deal → opportunity → lead, setiap langkah dibagi rasionya lalu dibulatkan ke atas.", [],
              [f"Deal menang = {angka(target)} ÷ {angka(deal)} = {angka(target / deal, 2)}", f"Opportunity = ÷ {wr}% → {opp}", f"Lead = {opp} ÷ {kv}% → {leads}"], "naikkan win rate sedikit dan kebutuhan lead turun banyak."), f=angka)
    for _ in range(4):
        rev = R.randrange(12, 120) * 1000000; bln = R.choice([12, 6, 3])
        mcn(k, 2, f"Recurring revenue {rp(rev)} dengan Recurring Plan {bln} bulan. Expected MRR di Odoo:",
            rev / bln, [(rev * bln, "Nilai dibagi jumlah bulan plan."), (rev / 12, "Dibagi jumlah bulan plan ini.") if bln != 12 else (rev / 6, "Plan ini 12 bulan."), (rev, "Itu nilai per plan.")],
            E("Expected MRR = recurring revenue ÷ jumlah bulan plan.", [], [f"{rp(rev)} ÷ {bln} = {rp(rev / bln, 2)}"], "MRR = Monthly Recurring Revenue."), f=lambda x: rp(x, 2))


# =============================================================== 12. KPI, POS & PROYEK
def bab_kpi():
    k = "kpi"
    for _ in range(6):
        hpp = R.randrange(100, 900) * 1000000; awal = R.randrange(50, 400) * 1000000; akhir = R.randrange(50, 400) * 1000000
        rata = (awal + akhir) / 2; to = hpp / rata; dio = 365 / to
        if R.random() < 0.5:
            mcn(k, 2, f"HPP setahun {rp(hpp)}, persediaan awal {rp(awal)}, akhir {rp(akhir)}. Inventory turnover (kali per tahun, 2 desimal):",
                round(to, 2), [(round(hpp / akhir, 2), "Pakai rata-rata persediaan awal dan akhir."), (round(rata / hpp, 2), "Rumusnya terbalik."), (round(hpp / (awal + akhir), 2), "Persediaan harus dirata-rata (÷ 2).")],
                E("Turnover = HPP ÷ rata-rata persediaan.", [], [f"Rata-rata = ({angka(awal)} + {angka(akhir)}) ÷ 2 = {angka(rata)}", f"{angka(hpp)} ÷ {angka(rata)} = {angka(to, 2)} kali"], "data HPP dari laporan laba rugi Odoo, persediaan dari Inventory Valuation."), f=lambda x: angka(x, 2) + " kali")
        else:
            mcn(k, 3, f"HPP setahun {rp(hpp)}, persediaan rata-rata {rp(rata)}. Days Inventory Outstanding (DIO, 365 hari, dibulatkan 1 desimal):",
                round(dio, 1), [(round(to, 1), "Itu turnover; DIO = 365 ÷ turnover."), (round(365 * to, 1), "365 dibagi turnover, bukan dikali."), (round(rata / hpp * 30, 1), "Gunakan 365 hari.")],
                E("DIO = 365 ÷ turnover = persediaan rata-rata ÷ HPP × 365.", [], [f"Turnover = {angka(to, 4)}", f"365 ÷ {angka(to, 4)} = {angka(dio, 1)} hari"], "makin kecil DIO makin cepat barang berputar."), f=lambda x: angka(x, 1) + " hari")
    for _ in range(6):
        ar = R.randrange(50, 500) * 1000000; rev = R.randrange(300, 3000) * 1000000
        dso = ar / rev * 365
        mcn(k, 2, f"Piutang usaha akhir tahun {rp(ar)}, penjualan kredit setahun {rp(rev)}. DSO (365 hari, 1 desimal):",
            round(dso, 1), [(round(rev / ar, 1), "Itu perputaran piutang (kali), bukan hari."), (round(ar / rev * 30, 1), "Pakai 365 hari untuk data setahun."), (round(rev / ar * 365, 1), "Rumus terbalik.")],
            E("DSO = piutang ÷ penjualan kredit × jumlah hari.", ["Aged Receivable di Odoo membantu melihat piutang mana yang membuat DSO tinggi."], [f"{angka(ar)} ÷ {angka(rev)} × 365 = {angka(dso, 1)} hari"], "DSO tinggi = uang lama tertahan di pelanggan."), f=lambda x: angka(x, 1) + " hari")
    for _ in range(7):
        awal = R.randrange(2, 20) * 100000; tunai = R.randrange(10, 200) * 10000; keluar = R.randrange(0, 30) * 10000; sel = R.choice([-5000, -2000, 0, 1000, 3000, 10000])
        harus = awal + tunai - keluar; hitung = harus + sel
        mcn(k, 2, f"Sesi POS: kas awal (Opening Cash) {rp(awal)}, penjualan tunai {rp(tunai)}, kas keluar (Cash Out) {rp(keluar)}. Kasir menghitung uang di laci {rp(hitung)}. Selisih (Difference) saat closing:",
            sel, [(-sel if sel else 5000, "Tandanya terbalik: Difference = dihitung − seharusnya." if sel else "Uang sama dengan seharusnya."), (hitung - awal - tunai, "Cash Out belum diperhitungkan."), (hitung - tunai, "Kas awal juga bagian dari uang di laci.")],
            E("Expected = kas awal + tunai masuk − kas keluar; Difference = counted − expected.", [], [f"Expected = {angka(awal)} + {angka(tunai)} − {angka(keluar)} = {angka(harus)}", f"Difference = {angka(hitung)} − {angka(harus)} = {angka(sel)}"],
              "selisih dicatat ke akun Cash Difference Gain/Loss pada jurnal kas POS."), f=rp)
    for _ in range(6):
        j = R.randrange(10, 160); tarif = R.choice([150000, 200000, 250000, 350000]); biaya = R.choice([60000, 80000, 100000, 120000])
        mg = j * (tarif - biaya)
        mcn(k, 2, f"Proyek ditagih per jam (timesheet): {j} jam × tarif jual {rp(tarif)}. Biaya karyawan (HR cost) {rp(biaya)}/jam. Margin proyek di Project Profitability:",
            mg, [(j * tarif, "Itu pendapatan; margin = pendapatan − biaya."), (j * biaya, "Itu biaya timesheet."), (tarif - biaya, "Belum dikali jumlah jam.")],
            E("Margin proyek = jam × (tarif − biaya per jam).", [], [f"Pendapatan = {j} × {angka(tarif)} = {angka(j * tarif)}", f"Biaya = {j} × {angka(biaya)} = {angka(j * biaya)}", f"Margin = {angka(mg)}"], "biaya per jam diisi di form karyawan (tab HR Settings)."))
    for _ in range(6):
        F = R.randrange(10, 200) * 1000000; p = R.randrange(50, 500) * 1000; v = p - R.randrange(10, 40) * 1000
        bep = math.ceil(F / (p - v))
        mcn(k, 3, f"Biaya tetap per bulan {rp(F)}, harga jual {rp(p)}/unit, biaya variabel {rp(v)}/unit. Titik impas (unit, dibulatkan ke atas):",
            bep, [(math.ceil(F / p), "Pembaginya margin kontribusi (harga − biaya variabel), bukan harga."), (math.ceil(F / v), "Pembaginya margin kontribusi."), (math.floor(F / (p - v)), "Harus dibulatkan ke atas agar benar-benar impas.")],
            E("BEP unit = biaya tetap ÷ (harga − biaya variabel).", [], [f"Margin kontribusi = {angka(p)} − {angka(v)} = {angka(p - v)}", f"{angka(F)} ÷ {angka(p - v)} = {angka(F / (p - v), 2)} → {bep} unit"], "angka ini dibandingkan dengan laporan penjualan Odoo per bulan."), f=angka)
    for _ in range(5):
        rev = R.randrange(100, 900) * 1000000; hpp = rev * R.choice([0.55, 0.6, 0.65, 0.7, 0.72])
        gm = (rev - hpp) / rev * 100
        mcn(k, 1, f"Laporan Profit and Loss: penjualan {rp(rev)}, HPP {rp(hpp)}. Gross margin (%):",
            round(gm, 1), [(round(hpp / rev * 100, 1), "Itu rasio HPP."), (round((rev - hpp) / hpp * 100, 1), "Itu markup (dibagi HPP)."), (round(rev / hpp, 1), "Bukan rumus margin.")],
            E("Gross margin = (penjualan − HPP) ÷ penjualan.", [], [f"Laba kotor = {angka(rev)} − {angka(hpp)} = {angka(rev - hpp)}", f"÷ {angka(rev)} = {pct(round(gm, 1))}"], "dibaca di Accounting > Reporting > Profit and Loss."), f=lambda x: pct(x))


# =============================================================== MATERI
P = lambda s: s.strip()
MATERI = [
("hargajual", "🧮 Lab Hitung: Pricelist, Diskon & Margin", P("""
<!--pemula--><h4>Untuk pemula: pricelist itu daftar harga yang bisa "berpikir"</h4>
<p>Toko punya satu <b>Sales Price</b> di form produk. Tapi pelanggan grosir minta harga lebih murah, member dapat diskon, dan Lebaran ada promo. Daripada mengetik harga manual di setiap pesanan, Odoo memakai <b>pricelist</b>: kumpulan <b>aturan</b> yang menghitung harga otomatis.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>Sales Price</td><td>harga jual normal di form produk</td></tr>
<tr><td>Cost</td><td>biaya/modal per unit</td></tr>
<tr><td>Min. Quantity</td><td>aturan baru berlaku bila jumlah beli ≥ angka ini</td></tr>
<tr><td>markup</td><td>laba dibanding BIAYA: (harga − biaya) ÷ biaya</td></tr>
<tr><td>margin</td><td>laba dibanding HARGA JUAL: (harga − biaya) ÷ harga</td></tr></table>
<p>Aktifkan dulu: Sales &gt; Configuration &gt; Settings &gt; Pricelists. Lalu Sales &gt; Products &gt; Pricelists.</p><!--/pemula-->
<h4>Tiga tipe aturan (kolom Price Type / compute_price)</h4>
<table class="mini-pivot"><tr><th>Tipe</th><th>Rumus Odoo 17</th></tr>
<tr><td>Fixed Price</td><td>harga = angka tetap</td></tr>
<tr><td>Discount</td><td>harga = base − base × diskon/100</td></tr>
<tr><td>Formula</td><td>diskon → pembulatan → Extra Fee → batas margin</td></tr></table>
<p>Kode sumbernya (<code>product_pricelist_item.py</code>, <code>_compute_price</code>) urutannya persis seperti ini:</p>
<pre><code>batas  = base                                   # base = Sales Price, Cost, atau pricelist lain
harga  = base - base * (diskon / 100)
harga  = float_round(harga, precision_rounding=pembulatan)   # bila diisi, HALF-UP
harga += extra_fee                              # boleh negatif
harga  = max(harga, batas + min_margin)         # bila diisi
harga  = min(harga, batas + max_margin)         # bila diisi</code></pre>
<p><b>Contoh harga cantik.</b> Sales Price 74.300, diskon 10%, pembulatan 1.000, Extra Fee −100:</p>
<ol><li>74.300 × 0,9 = 66.870</li><li>Bulatkan ke kelipatan 1.000 → 67.000</li><li>Tambah −100 → <b>66.900</b></li></ol>
<p>Kalau Extra Fee ditambahkan sebelum pembulatan, hasilnya 67.000 (salah urutan). Itu jebakan favorit di soal.</p>
<h4>Diskon negatif = markup</h4>
<p>Based on Cost dengan Discount −30% artinya harga = cost × 1,3. Cost 50.000 → 65.000.</p>
<h4>Markup vs margin (paling sering keliru)</h4>
<pre><code>markup = (harga - biaya) / biaya       biaya 80.000, harga 100.000 → 25%
margin = (harga - biaya) / harga                                   → 20%
harga untuk margin m  = biaya / (1 - m)     80.000 / 0,8 = 100.000
harga untuk markup m  = biaya × (1 + m)     80.000 × 1,25 = 100.000</code></pre>
<p>Modul <b>sale_margin</b> menampilkan Margin dan Margin (%) per baris; persennya dibagi subtotal (harga jual), jadi itu margin, bukan markup.</p>
<h4>Diskon bertingkat tidak dijumlahkan</h4>
<p>Pricelist 10% lalu Disc.% baris 5%: sisa harga = 0,9 × 0,95 = 0,855 → potongan <b>14,5%</b>, bukan 15%. Rumus cepat: a + b − a×b.</p>
<h4>Aturan bertingkat (quantity break)</h4>
<p>Odoo mengurutkan aturan dari Min. Quantity terbesar dan memakai aturan pertama yang cocok. Min 10 → 5%, Min 50 → 10%: beli 49 dapat 5%, beli 50 dapat 10%.</p>
<div class="catatan">⚠️ Kolom Min. Quantity dibandingkan dengan jumlah di baris pesanan dalam satuan produk. Kalau pelanggan memesan dalam Box, Odoo mengonversinya dulu.</div>
<div class="praktik"><b>Coba sendiri di Odoo lokalmu:</b> buat pricelist "Grosir" dengan aturan Formula (diskon 12%, pembulatan 1.000, Extra Fee −100), pasang ke satu pelanggan, buat quotation, lalu cocokkan harganya dengan hitunganmu di kertas.</div>
""")),
("pajak", "🧮 Lab Hitung: Pajak di Odoo (PPN, PPh 23, Included/Excluded)", P("""
<!--pemula--><h4>Untuk pemula: kenapa pajak perlu dihitung sistem?</h4>
<p>Setiap faktur di Indonesia umumnya memuat PPN. Kalau harga ditulis "sudah termasuk pajak", pajaknya harus <b>dikeluarkan</b> dari harga; kalau "belum termasuk", pajaknya <b>ditambahkan</b>. Salah satu centang saja membuat ribuan faktur salah.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>DPP</td><td>Dasar Pengenaan Pajak, angka yang dikali tarif</td></tr>
<tr><td>PPN Keluaran / Masukan</td><td>PPN dari penjualan kita / PPN dari pembelian kita</td></tr>
<tr><td>Included in Price</td><td>centang bila harga di produk sudah memuat pajak</td></tr>
<tr><td>PPh 23</td><td>pajak penghasilan atas jasa yang DIPOTONG pembeli (umumnya 2%)</td></tr></table><!--/pemula-->
<h4>Rumus persis Odoo 17 (account_tax.py, _compute_amount)</h4>
<pre><code>percent,  tidak included : pajak = base × t
percent,  included       : pajak = base − base / (1 + t)
division, tidak included : pajak = base / (1 − t) − base
division, included       : pajak = base × t
fixed                    : pajak = qty × nominal</code></pre>
<p><b>Contoh included:</b> harga 111.000 termasuk PPN 11% → DPP = 111.000 ÷ 1,11 = 100.000, pajak = 11.000. Bukan 111.000 × 11% = 12.210.</p>
<h4>PPN 12% dengan DPP nilai lain 11/12</h4>
<p>Untuk barang/jasa tidak mewah, PPN = 12% × (11/12 × harga) = <b>11% × harga</b>. Di kode lokalisasi Indonesia Odoo 17 (<code>l10n_id</code>, dibaca dari kode sumber), pajak "Non-luxury Good" memang bernilai <b>11</b> dengan label faktur "12%", sedangkan barang mewah 12%.</p>
<pre><code>Harga 1.200.000 (tidak mewah)
DPP nilai lain = 11/12 × 1.200.000 = 1.100.000
PPN            = 12% × 1.100.000   = 132.000   (= 11% × 1.200.000)</code></pre>
<h4>PPh 23 sebagai pajak negatif</h4>
<p>Pajak bertipe percent dengan nilai −2%. Tagihan jasa 10.000.000: PPN +1.100.000, PPh 23 −200.000 → ditransfer <b>10.900.000</b>. PPh yang dipotong kita setor sendiri ke negara.</p>
<h4>Beberapa pajak dalam satu baris</h4>
<p>Opsi <b>Affect Base of Subsequent Taxes</b> membuat pajak berikutnya dihitung dari base + pajak ini. Cukai 10% lalu PPN 11% atas 100.000: 100.000 → 110.000 → PPN 12.100 → total 122.100. Tanpa opsi itu: 100.000 + 10.000 + 11.000 = 121.000.</p>
<h4>Round per Line vs Round Globally</h4>
<p>Accounting &gt; Settings &gt; Rounding Method. Per line: bulatkan pajak tiap baris lalu jumlahkan. Globally: jumlahkan dulu lalu bulatkan sekali. Selisih 1–2 rupiah dengan e-Faktur biasanya berasal dari sini.</p>
<div class="catatan">⚠️ Tarif dan aturan pajak bisa berubah. Sebelum mengatur pajak di perusahaan klien, cocokkan dengan peraturan terbaru dan konsultan pajak mereka.</div>
<div class="praktik"><b>Coba sendiri:</b> di Accounting &gt; Configuration &gt; Taxes, duplikat pajak 11%, centang Included in Price, pasang di produk ber-Sales Price 111.000, lalu lihat baris pajak di faktur.</div>
""")),
("satuan", "🧮 Lab Hitung: Satuan Ukur (UoM) & Pembulatan", P("""
<!--pemula--><h4>Untuk pemula: beli per dus, jual per biji</h4>
<p>Toko membeli air mineral per <b>dus isi 24</b>, tapi menjual per <b>botol</b>. Odoo harus tahu bahwa 1 dus = 24 botol agar stok tidak kacau. Itulah <b>Units of Measure (UoM)</b>.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>kategori</td><td>kelompok satuan yang bisa saling dikonversi: Unit, Weight, Volume, Length, Time</td></tr>
<tr><td>Reference</td><td>satuan acuan dalam kategori (Units, kg, L, m)</td></tr>
<tr><td>Bigger / Smaller</td><td>lebih besar / kecil dari referensi, dengan Ratio</td></tr>
<tr><td>Rounding Precision</td><td>kelipatan terkecil satuan itu (1 = bilangan bulat, 0,01 = dua desimal)</td></tr></table>
<p>Aktifkan di Inventory &gt; Configuration &gt; Settings &gt; Units of Measure.</p><!--/pemula-->
<h4>Rumus Odoo 17 (uom_uom.py)</h4>
<pre><code>factor  : Smaller → ratio (g: 1000) ; Bigger → 1/ratio (Box isi 12: 1/12)
qty     : qty_tujuan = qty / factor_asal × factor_tujuan, lalu dibulatkan UP
harga   : harga_tujuan = harga × factor_asal / factor_tujuan</code></pre>
<p><b>Kuantitas dan harga bergerak berlawanan.</b> 3 Box (isi 12) = 36 Units, tetapi harga 120.000/Box = 10.000/Unit.</p>
<p><b>Pembulatan UP.</b> <code>_compute_quantity</code> memakai <code>rounding_method='UP'</code>. 50 Units ke Pack isi 12 (presisi 0,01): 50 ÷ 12 = 4,1666… → <b>4,17</b>. Bila presisi Pack = 1 → <b>5</b> Pack.</p>
<pre><code>2,5 kg  → g   : 2,5 / 1 × 1000 = 2.500 g
750 g   → kg  : 750 / 1000      = 0,75 kg
3 Box   → Unit: 3 / (1/12) × 1  = 36</code></pre>
<div class="catatan">⚠️ Satuan beda kategori tidak bisa dikonversi (kg ke Units). Odoo menolak dengan galat "doesn't belong to the same category". Untuk "1 karung = 25 kg", buat produk dengan UoM kg dan Purchase UoM "Karung 25 kg" di kategori Weight.</div>
<div class="praktik"><b>Coba sendiri:</b> buat UoM "Dus 24" (Bigger, ratio 24), pasang sebagai Purchase UoM produk, buat PO 5 Dus, validasi penerimaan, lalu lihat stok bertambah 120 Units.</div>
""")),
("reorder", "🧮 Lab Hitung: Forecast, Reordering Rule & Lead Time", P("""
<!--pemula--><h4>Untuk pemula: jangan sampai rak kosong</h4>
<p>Penjual bakso tahu: kalau mi tinggal sedikit, ia harus pesan sebelum habis, karena pemasok butuh waktu mengirim. Odoo melakukan hal yang sama dengan <b>reordering rule</b>: "kalau perkiraan stok di bawah Min, pesan sampai Max."</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>On Hand</td><td>stok fisik sekarang</td></tr>
<tr><td>Forecasted</td><td>On Hand + barang akan masuk − barang akan keluar</td></tr>
<tr><td>Min / Max</td><td>batas bawah pemicu / target setelah diisi</td></tr>
<tr><td>Multiple Quantity</td><td>pesanan dibulatkan ke atas ke kelipatan ini (isi dus, MOQ)</td></tr>
<tr><td>lead time</td><td>jeda hari antara memesan dan barang datang</td></tr></table><!--/pemula-->
<h4>Rumus persis Odoo 17 (stock_orderpoint.py)</h4>
<pre><code>jika forecast &lt; Min:                       # tanda &lt; , bukan &lt;=
    to_order = max(Min, Max) − forecast
    sisa = to_order % Multiple
    jika sisa &gt; 0: to_order += Multiple − sisa  # naik ke kelipatan berikutnya
kalau tidak: to_order = 0</code></pre>
<p>Contoh resmi dokumentasi: Max 20, forecast 7 → butuh 13 → Multiple 3 → <b>15</b>.</p>
<p>Forecast negatif (pesanan melebihi stok) ikut ditutup: Min 10, Max 40, forecast −15 → 40 − (−15) = <b>55</b>.</p>
<h4>Lead time (hari kalender)</h4>
<pre><code>Pembelian : tanggal forecast = hari ini + Vendor Lead Time + Days to Purchase + Purchase Security Lead Time
Penjualan : tanggal kirim    = konfirmasi + Customer Lead Time (dimajukan oleh Sales Security Lead Time)
Produksi  : mulai MO         = tanggal kirim − Manufacturing Lead Time − Manufacturing Security Lead Time
Shipping Policy: As soon as possible = lead time terpendek; When all products are ready = terpanjang</code></pre>
<h4>Mengisi Min dan Max secara ilmiah (teori persediaan)</h4>
<p>Odoo tidak menghitung angka ini; konsultan yang menghitung dari data:</p>
<pre><code>Min (reorder point) = permintaan harian × lead time + safety stock
EOQ                 = √(2 × D × S ÷ H)      D: permintaan/tahun, S: biaya pesan, H: biaya simpan/unit/tahun
Max                 ≈ Min + EOQ</code></pre>
<p>Contoh: keluar 20/hari, lead time 7 hari, safety stock 30 → Min = 170. D = 4.800, S = 100.000, H = 6.000 → EOQ = √160.000 = 400 → Max ≈ 570.</p>
<div class="catatan">⚠️ Reordering rule dengan Trigger Auto dijalankan scheduler (default harian). Trigger Manual hanya menampilkan saran di Inventory &gt; Operations &gt; Replenishment, lalu tombol Order Once.</div>
<div class="praktik"><b>Coba sendiri:</b> pasang reordering rule Min 10, Max 37, Multiple 12 pada produk dengan forecast 4. Tebak To Order di kertas (37 − 4 = 33 → 36), lalu buka Replenishment dan cocokkan.</div>
""")),
("valuasi", "🧮 Lab Hitung: Valuasi Persediaan FIFO, AVCO & Standard", P("""
<!--pemula--><h4>Untuk pemula: barang sama, harga beli beda</h4>
<p>Kamu beli 10 kaos @50.000 bulan lalu dan 10 kaos @60.000 minggu ini. Lalu terjual 12 kaos. Berapa modal (HPP) 12 kaos itu? Jawabannya tergantung <b>metode valuasi</b>.</p>
<table class="mini-pivot"><tr><th>Metode</th><th>Ide</th><th>HPP 12 kaos</th></tr>
<tr><td>FIFO</td><td>yang masuk duluan keluar duluan</td><td>10×50.000 + 2×60.000 = 620.000</td></tr>
<tr><td>AVCO</td><td>rata-rata tertimbang</td><td>12 × 55.000 = 660.000</td></tr>
<tr><td>Standard</td><td>pakai cost tetap di form produk</td><td>12 × cost standar</td></tr></table><!--/pemula-->
<h4>Di mana diatur</h4>
<p>Inventory &gt; Configuration &gt; Product Categories: <b>Costing Method</b> (Standard / FIFO / AVCO) dan <b>Inventory Valuation</b> (Manual = periodik, Automated = perpetual, jurnal dibuat otomatis tiap pergerakan stok).</p>
<h4>Rumus AVCO persis Odoo 17 (stock_account/stock_move.py)</h4>
<pre><code>cost_baru = (cost_lama × qty_lama + harga_masuk × qty_masuk) / (qty_lama + qty_masuk)</code></pre>
<p>Penjualan TIDAK mengubah cost AVCO; hanya penerimaan. Cost disimpan dengan presisi Product Price (default 2 desimal).</p>
<h4>FIFO dan lapisan (stock.valuation.layer)</h4>
<p>Setiap penerimaan membuat satu lapisan berisi qty, nilai, dan <code>remaining_qty</code>. Pengiriman FIFO menghabiskan lapisan tertua dulu, jadi <b>sisa stok FIFO dinilai dengan harga terbaru</b>.</p>
<pre><code>Beli 1: 10 @ 50.000 | Beli 2: 10 @ 60.000 | Jual 12
FIFO  HPP = 620.000, sisa 8 × 60.000 = 480.000
AVCO  HPP = 660.000, sisa 8 × 55.000 = 440.000
Total keduanya sama: 1.100.000 (yang berbeda hanya pembagiannya)</code></pre>
<p>Harga naik → FIFO memberi HPP lebih rendah, laba lebih tinggi. Harga turun → sebaliknya.</p>
<h4>Standard Price</h4>
<p>Stok dinilai dengan cost standar walau harga PO berbeda; selisihnya (price difference) masuk akun Price Difference bila valuasi otomatis.</p>
<h4>Akun yang terlibat (valuasi Automated)</h4>
<table class="mini-pivot"><tr><th>Kejadian</th><th>Jurnal (Anglo-Saxon)</th></tr>
<tr><td>Barang diterima</td><td>Dr Stock Valuation / Cr Stock Input</td></tr>
<tr><td>Vendor bill</td><td>Dr Stock Input / Cr Account Payable</td></tr>
<tr><td>Barang dikirim</td><td>Dr Stock Output / Cr Stock Valuation</td></tr>
<tr><td>Faktur pelanggan</td><td>Dr COGS / Cr Stock Output (+ jurnal pendapatan)</td></tr></table>
<div class="catatan">⚠️ Mengganti Costing Method di kategori yang sudah punya stok akan menilai ulang semua stok itu. Lakukan di awal implementasi, bukan di tengah tahun buku.</div>
<div class="praktik"><b>Coba sendiri:</b> set kategori ke AVCO + Automated, terima 10 @50.000 dan 10 @60.000, kirim 12, lalu buka Inventory &gt; Reporting &gt; Valuation dan cocokkan dengan hitunganmu.</div>
""")),
("landed", "🧮 Lab Hitung: Landed Cost (Ongkos Impor & Kirim)", P("""
<!--pemula--><h4>Untuk pemula: modal barang bukan cuma harga beli</h4>
<p>Kamu impor kursi dan meja. Selain harga barang, ada ongkos kapal, bea masuk, dan asuransi. Biaya-biaya itu harus ditambahkan ke modal setiap barang, supaya laba yang dihitung jujur. Di Odoo ini disebut <b>Landed Costs</b>.</p>
<table class="mini-pivot"><tr><th>Metode bagi (Split Method)</th><th>Dasar pembagian</th></tr>
<tr><td>Equal</td><td>dibagi rata per baris penerimaan</td></tr>
<tr><td>By Quantity</td><td>sebanding jumlah unit</td></tr>
<tr><td>By Current Cost</td><td>sebanding nilai barang (qty × cost)</td></tr>
<tr><td>By Weight / By Volume</td><td>sebanding total berat / volume</td></tr></table><!--/pemula-->
<h4>Rumus persis Odoo 17 (stock_landed_cost.py)</h4>
<pre><code>By Quantity    : bagian = biaya × qty_baris / total_qty
By Weight      : bagian = biaya × berat_baris / total_berat     (berat_baris = qty × berat/unit)
By Current Cost: bagian = biaya × nilai_baris / total_nilai
Equal          : bagian = biaya / jumlah_baris
tiap bagian dibulatkan HALF-UP ke presisi mata uang; selisih pembulatan masuk baris terakhir</code></pre>
<p><b>Contoh.</b> Ongkos 1.000.000. Kursi 30 unit × 2 kg, cost 100.000; Meja 10 unit × 12 kg, cost 400.000.</p>
<pre><code>By Quantity : Kursi 1.000.000 × 30/40   = 750.000   Meja 250.000
By Weight   : Kursi 1.000.000 × 60/180  = 333.333,33 Meja 666.666,67
By Cost     : Kursi 1.000.000 × 3jt/7jt = 428.571,43 Meja 571.428,57
Equal       : 500.000 masing-masing</code></pre>
<p>Cost per unit kursi yang baru (By Quantity) = 100.000 + 750.000 ÷ 30 = <b>125.000</b>.</p>
<p>Pilih metode yang paling mewakili pemicu biaya: ongkos kapal → berat/volume; bea masuk → nilai barang; biaya administrasi → equal.</p>
<div class="catatan">⚠️ Syarat: aktifkan Landed Costs di Inventory Settings, kategori produk memakai FIFO/AVCO dan Inventory Valuation Automated, dan produk biaya (misalnya "Ongkos Kapal") bertipe Service dengan centang Is a Landed Cost.</div>
<div class="praktik"><b>Coba sendiri:</b> buat penerimaan dua produk, lalu Inventory &gt; Operations &gt; Landed Costs, pilih receipt-nya, isi biaya 1.000.000 By Weight, klik Compute dan bandingkan dengan hitunganmu.</div>
""")),
("produksi", "🧮 Lab Hitung: Manufaktur (BoM, Durasi Work Order, Cost, OEE)", P("""
<!--pemula--><h4>Untuk pemula: resep dan dapur</h4>
<p><b>Bill of Materials (BoM)</b> adalah resep: untuk membuat sejumlah produk butuh bahan apa saja. <b>Work center</b> adalah dapurnya (mesin atau meja kerja). <b>Manufacturing Order (MO)</b> adalah perintah memasak sejumlah porsi.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>Quantity BoM</td><td>jumlah HASIL dari satu resep (bisa 1, 10, 100)</td></tr>
<tr><td>Kit</td><td>BoM yang tidak diproduksi; saat dijual/dipakai diganti komponennya</td></tr>
<tr><td>Capacity</td><td>berapa unit diproses bersamaan dalam satu siklus</td></tr>
<tr><td>Time Efficiency</td><td>100% normal, 200% dua kali lebih cepat</td></tr>
<tr><td>Setup / Cleanup Time</td><td>waktu persiapan / beres-beres per work order</td></tr></table><!--/pemula-->
<h4>Kebutuhan komponen</h4>
<pre><code>kebutuhan = qty_komponen × qty_MO / qty_BoM
BoM 10 roti memakai 2 kg tepung → MO 35 roti butuh 2 × 35/10 = 7 kg</code></pre>
<p>Kit bertingkat dikali berantai: 1 meja butuh 1 Kaki Set, dan Kaki Set adalah Kit berisi 4 kaki kayu → 20 meja × 1 × 4 = 80 kaki kayu.</p>
<h4>Durasi work order (mrp_workorder.py, _get_duration_expected)</h4>
<pre><code>durasi = setup + cleanup + ⌈qty / capacity⌉ × waktu_siklus × 100 / efisiensi
MO 25, capacity 4, siklus 6 menit, efisiensi 120%, setup 15, cleanup 5
= 15 + 5 + ⌈6,25⌉ × 6 × 100/120 = 20 + 7 × 5 = 55 menit</code></pre>
<h4>Biaya MO</h4>
<pre><code>cost MO       = Σ komponen + Σ (durasi jam × Cost per hour work center)
cost per unit = cost MO / qty</code></pre>
<h4>Yield dan OEE</h4>
<pre><code>unit diproduksi = ⌈target / yield⌉            1.000 unit baik, yield 95% → 1.053
OEE (rumus industri) = Availability × Performance × Quality   0,9 × 0,95 × 0,99 = 84,6%</code></pre>
<p>Ingat: ÷ 0,95 tidak sama dengan × 1,05 (1.000 × 1,05 = 1.050 masih kurang).</p>
<div class="catatan">⚠️ Work order dan work center baru muncul setelah Manufacturing &gt; Settings &gt; Work Orders diaktifkan. Biaya work center masuk ke cost produk bila kategori produk memakai FIFO/AVCO.</div>
<div class="praktik"><b>Coba sendiri:</b> buat work center "Perakitan" (Capacity 2, efisiensi 100%, setup 10), BoM dengan operasi 6 menit, lalu MO 9 unit. Tebak expected duration (10 + 5 × 6 = 40 menit) dan cek di tab Work Orders.</div>
""")),
("jurnal", "🧮 Lab Hitung: Jurnal Otomatis, Kurs & Down Payment", P("""
<!--pemula--><h4>Untuk pemula: setiap klik menghasilkan jurnal</h4>
<p>Konsultan ERP harus bisa menebak jurnal yang dibuat Odoo sebelum tombol ditekan. Aturan dasarnya: <b>total debit = total kredit</b>. Aset dan beban bertambah di debit; utang, modal, dan pendapatan bertambah di kredit.</p><!--/pemula-->
<h4>Pola jurnal yang wajib hafal</h4>
<table class="mini-pivot"><tr><th>Dokumen</th><th>Debit</th><th>Kredit</th></tr>
<tr><td>Faktur pelanggan 10jt + PPN 11%</td><td>Piutang 11.100.000</td><td>Pendapatan 10.000.000; PPN Keluaran 1.100.000</td></tr>
<tr><td>Pembayaran pelanggan</td><td>Bank (Outstanding Receipts)</td><td>Piutang</td></tr>
<tr><td>Vendor bill 5jt + PPN 11%</td><td>Beban/Stock Input 5.000.000; PPN Masukan 550.000</td><td>Utang 5.550.000</td></tr>
<tr><td>Pengiriman (Anglo-Saxon)</td><td>Stock Output</td><td>Stock Valuation</td></tr>
<tr><td>Faktur (Anglo-Saxon)</td><td>COGS</td><td>Stock Output</td></tr></table>
<h4>Selisih kurs</h4>
<pre><code>Piutang valas : selisih = nilai valas × (kurs bayar − kurs faktur)   positif = laba
Utang valas   : selisih = nilai valas × (kurs faktur − kurs bayar)   kurs naik = rugi
USD 1.000, kurs faktur 16.000, kurs bayar 16.200 → piutang laba 200.000</code></pre>
<p>Odoo membuat jurnal selisih kurs di Exchange Difference Journal saat pembayaran direkonsiliasi.</p>
<h4>Down payment</h4>
<p>SO 100jt, faktur DP 30% = 30jt. Faktur akhir memuat semua baris + baris DP −30jt → Untaxed 70jt.</p>
<h4>Jurnal tidak seimbang</h4>
<p>Odoo menolak posting dengan pesan "The entry is not balanced". Cari selisih total debit − total kredit.</p>
<div class="praktik"><b>Coba sendiri:</b> posting faktur 10.000.000 + PPN, buka tab Journal Items, dan pastikan tiga baris di atas muncul persis.</div>
""")),
("termin", "🧮 Lab Hitung: Payment Terms, Diskon Bayar Cepat & Cash Rounding", P("""
<!--pemula--><h4>Untuk pemula: kapan dan berapa pelanggan membayar</h4>
<p><b>Payment term</b> mengatur jadwal bayar: "30% di depan, sisanya 30 hari" atau "bayar akhir bulan berikutnya". Odoo membuat satu baris piutang per angsuran dengan jatuh temponya masing-masing.</p><!--/pemula-->
<h4>Rumus Odoo 17 (account_payment_term.py)</h4>
<pre><code>angsuran persen  = total × persen   (total TERMASUK pajak)
angsuran terakhir = sisa (balance), apa pun tipenya
jatuh tempo:
  Days after invoice date        = tanggal faktur + n
  Days after end of month        = akhir bulan faktur + n
  Days after end of next month   = akhir bulan berikutnya + n</code></pre>
<p>Faktur 15 Maret, 10 hari "end of month" → 31 Maret + 10 = <b>10 April</b>.</p>
<h4>Early Discount (diskon bayar cepat)</h4>
<pre><code>'On early payment' (included) : bayar = total × (1 − d)          pajak ikut turun
'Never'            (excluded) : bayar = total − untaxed × d      pajak tetap penuh
Untaxed 10.000.000, pajak 11%, diskon 2%:
  included → 11.100.000 × 0,98 = 10.878.000
  excluded → 11.100.000 − 200.000 = 10.900.000</code></pre>
<p>Early discount hanya bisa pada payment term satu baris 100%.</p>
<h4>Cash Rounding</h4>
<pre><code>round = float_round(total, Rounding Precision, Rounding Method)
123.456 → presisi 500: HALF-UP 123.500 | UP 123.500 | DOWN 123.000
123.200 → presisi 500: HALF-UP 123.000 | UP 123.500 | DOWN 123.000</code></pre>
<p>Selisihnya ditambahkan sebagai baris pembulatan (Add a rounding line) atau dimasukkan ke pajak terbesar.</p>
<div class="praktik"><b>Coba sendiri:</b> buat payment term "30% Now, Balance 30 Days", pakai di faktur 11.100.000, lalu lihat dua baris piutang di Journal Items.</div>
""")),
("penyusutan", "🧮 Lab Hitung: Penyusutan Aset Tetap", P("""
<!--pemula--><h4>Untuk pemula: nilai laptop turun tiap tahun</h4>
<p>Perusahaan membeli mesin 120 juta yang dipakai 5 tahun. Biayanya tidak dibebankan sekaligus, tetapi dicicil tiap periode: itulah <b>penyusutan (depreciation)</b>. Di Odoo ada di Accounting &gt; Accounting &gt; Assets (aplikasi Enterprise).</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>Original Value</td><td>harga perolehan aset</td></tr>
<tr><td>Not Depreciable Value</td><td>nilai sisa yang tidak disusutkan</td></tr>
<tr><td>Book Value</td><td>nilai buku = harga perolehan − akumulasi penyusutan</td></tr>
<tr><td>Prorata Temporis</td><td>penyusutan pertama dipotong sesuai hari pemakaian</td></tr></table><!--/pemula-->
<h4>Metode di Odoo 17 (dokumentasi resmi)</h4>
<pre><code>Straight Line : (cost − nilai sisa) / jumlah periode             semua entri sama
Declining     : nilai buku sisa × Declining Factor                entri mengecil, terakhir = sisa
Declining then Straight Line : seperti Declining, tetapi tidak pernah di bawah angka Straight Line</code></pre>
<p><b>Contoh Straight Line.</b> 120jt, nilai sisa 20jt, 5 tahun → 20jt/tahun; nilai buku setelah 2 tahun = 80jt.</p>
<p><b>Contoh Declining 40%.</b> 100jt → tahun 1: 40jt (sisa 60jt) → tahun 2: 24jt (sisa 36jt) → tahun 3: 14,4jt. Deret geometri: C × f × (1 − f)<sup>t</sup>.</p>
<p><b>Prorata Temporis.</b> 60jt, 5 tahun (12jt/tahun), mulai 1 Oktober: 92 hari terpakai → 12jt × 92/365 = 3.024.657,53 di tahun pertama.</p>
<p><b>Double declining (teori akuntansi):</b> faktor = 2 ÷ umur. Umur 5 tahun → isi Declining Factor 40%.</p>
<div class="catatan">⚠️ Untuk pajak di Indonesia, kelompok harta dan tarif penyusutan fiskal diatur UU PPh; laporan komersial dan fiskal bisa memakai metode berbeda. Pastikan klien memilih yang benar.</div>
<div class="praktik"><b>Latihan kertas:</b> buat tabel penyusutan Declining 30% untuk aset 50jt selama 4 tahun; baris terakhir harus menghabiskan sisa nilai buku.</div>
""")),
("pipeline", "🧮 Lab Hitung: CRM Pipeline & Forecast Penjualan", P("""
<!--pemula--><h4>Untuk pemula: menebak omzet dengan peluang</h4>
<p>Sales punya 10 calon deal. Tidak semuanya akan menang. Daripada menjumlah semua nilai deal (terlalu optimis), Odoo mengalikan setiap deal dengan peluang menangnya. Hasilnya disebut <b>Prorated Revenue</b>.</p><!--/pemula-->
<h4>Rumus Odoo 17 (crm_lead.py)</h4>
<pre><code>prorated_revenue = round(expected_revenue × probability / 100, 2)
Expected MRR     = recurring_revenue / jumlah bulan Recurring Plan</code></pre>
<p>Probability diisi otomatis oleh <b>Predictive Lead Scoring</b> (model naive Bayes dari data won/lost lama; variabel wajib Stage dan Team). Kalau diubah manual, otomatisasinya berhenti untuk opp itu.</p>
<h4>Metrik corong penjualan</h4>
<pre><code>forecast tertimbang = Σ expected × probability
win rate            = won / (won + lost)          opp yang masih terbuka tidak dihitung
lead dibutuhkan     = target / nilai deal / win rate / konversi lead→opp  (tiap langkah bulatkan ke atas)</code></pre>
<p><b>Contoh.</b> Target 1 M, deal rata-rata 50jt, win rate 25%, konversi 20%: 20 deal → 80 opportunity → <b>400 lead</b>.</p>
<div class="praktik"><b>Coba sendiri:</b> CRM &gt; Reporting &gt; Pipeline, ganti ukuran ke Prorated Revenue dan kelompokkan per Salesperson.</div>
""")),
("kpi", "🧮 Lab Hitung: KPI Bisnis, Kas POS & Profitabilitas Proyek", P("""
<!--pemula--><h4>Untuk pemula: angka yang ditanyakan manajer</h4>
<p>Setelah ERP berjalan, manajer bertanya: "barang kita berputar berapa kali?", "pelanggan bayar rata-rata berapa hari?", "proyek ini untung tidak?". Konsultan harus bisa menghitungnya dari laporan Odoo.</p><!--/pemula-->
<pre><code>Gross margin        = (penjualan − HPP) / penjualan
Inventory turnover  = HPP / rata-rata persediaan        rata-rata = (awal + akhir) / 2
DIO                 = 365 / turnover
DSO                 = piutang / penjualan kredit × 365
BEP (unit)          = biaya tetap / (harga − biaya variabel)       bulatkan ke atas
Kas POS expected    = kas awal + tunai masuk − kas keluar
Difference          = uang dihitung − expected
Margin proyek       = jam × (tarif jual − biaya per jam)</code></pre>
<p><b>Contoh.</b> HPP 600jt, persediaan awal 100jt, akhir 140jt → rata-rata 120jt → turnover 5 kali → DIO 73 hari.</p>
<p><b>Sumber data di Odoo:</b> Profit and Loss dan Balance Sheet (Accounting &gt; Reporting), Aged Receivable, Inventory Valuation, POS Sessions (tombol Close Session menampilkan Expected vs Counted), dan Project &gt; Reporting &gt; Project Profitability.</p>
<div class="praktik"><b>Coba sendiri:</b> ekspor Profit and Loss setahun dari Odoo lokalmu ke Excel, lalu hitung gross margin dan bandingkan dengan bab Excel/BI KodeQuiz.</div>
""")),
]


for fn in [bab_harga, bab_pajak, bab_satuan, bab_reorder, bab_valuasi, bab_landed, bab_produksi, bab_jurnal, bab_termin, bab_penyusutan, bab_pipeline, bab_kpi]:
    fn()

assert {m[0] for m in MATERI} == {s["k"] for s in SOAL}, ({m[0] for m in MATERI} ^ {s["k"] for s in SOAL})
for s in SOAL:
    if s["t"] == "mc": assert len(set(s["o"])) == len(s["o"]) and s["w"][0] is None


def js(o): return json.dumps(o, ensure_ascii=False)
baris = ["// ============ LAB HITUNG ODOO (dibuat program: alat/buat-soal-odoo.py) ============",
         "// JANGAN diedit manual. Ubah generatornya lalu jalankan: python alat/buat-soal-odoo.py",
         "// Rumus mengikuti kode sumber Odoo 17; pembulatan dicocokkan dengan float_round Odoo (assert).", "",
         "MATERI_ERP.push(", *[f"{{k:{js(k)},judul:{js(j)},materi:{js(m)}}}," for k, j, m in MATERI], ");", "",
         "SOAL_ERP.push(", *[js(s) + "," for s in SOAL], ");", ""]
with open(os.path.join(ROOT, "js", "soal", "soal-erp-hitung.js"), "w", encoding="utf-8", newline="\n") as f:
    f.write("\n".join(baris))
from collections import Counter
print(len(SOAL), "soal |", dict(Counter(s["k"] for s in SOAL)), "| float_round Odoo:", "dipakai" if FR else "TIDAK ada")
