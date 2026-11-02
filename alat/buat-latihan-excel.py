# Membuat ulang latihan/latihan-excel-penjualan.xlsx dan latihan/penjualan.csv.
# Pakai:  pip install openpyxl && python alat/buat-latihan-excel.py
import random, os
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.table import Table, TableStyleInfo
from openpyxl.formatting.rule import FormulaRule
from openpyxl.utils import get_column_letter

HIJAU="4A8C7F"; MUDA="E3F0EC"; KUNING="FAF1DE"; ABU="EEF1EA"
judulF=Font(name="Calibri",size=14,bold=True,color=HIJAU)
headF=Font(bold=True,color="FFFFFF"); headFill=PatternFill("solid",fgColor=HIJAU)
isiFill=PatternFill("solid",fgColor=KUNING); garis=Side(style="thin",color="D0D8D3")
kotak=Border(left=garis,right=garis,top=garis,bottom=garis)
RP='#,##0'

PENJ=[["Andi","Jakarta","Laptop",2,7000000],["Bima","Bandung","Mouse",10,150000],["Citra","Jakarta","Monitor",3,2000000],
["Andi","Surabaya","Mouse",5,150000],["Dewi","Bandung","Laptop",1,7000000],["Bima","Jakarta","Keyboard",4,300000],
["Citra","Surabaya","Laptop",1,7000000],["Andi","Jakarta","Monitor",2,2000000],["Dewi","Surabaya","Keyboard",6,300000],
["Bima","Bandung","Monitor",1,2000000]]
PROD=[["Laptop","Komputer",7000000],["Mouse","Aksesoris",150000],["Monitor","Komputer",2000000],["Keyboard","Aksesoris",300000]]

wb=Workbook()
def head(ws,row,cols,start=1):
    for i,c in enumerate(cols):
        x=ws.cell(row=row,column=start+i,value=c); x.font=headF; x.fill=headFill; x.border=kotak; x.alignment=Alignment(horizontal="center")
def lebar(ws,w):
    for i,x in enumerate(w): ws.column_dimensions[get_column_letter(i+1)].width=x
def tugas(ws,judul,teks):
    ws["A1"]=judul; ws["A1"].font=judulF
    for i,t in enumerate(teks): ws.cell(row=2+i,column=1,value=t).font=Font(italic=True,color="66756D")
def isian(ws,ref):
    c=ws[ref]; c.fill=isiFill; c.border=kotak
def cek(ws,isi,kunci,out,tipe="angka"):
    # kunci disimpan di kolom tersembunyi; cek membandingkan
    if tipe=="angka": f=f'=IF({isi}="","",IF(ROUND({isi},0)=ROUND({kunci},0),"✓ Benar","✗ Coba lagi"))'
    else: f=f'=IF({isi}="","",IF({isi}={kunci},"✓ Benar","✗ Coba lagi"))'
    ws[out]=f; ws[out].font=Font(bold=True)

# ---- Petunjuk ----
ws=wb.active; ws.title="Petunjuk"
lebar(ws,[100])
baris=["File latihan Excel — KodeQuiz","",
"Cara pakai:",
"1. Setiap sheet BabX berisi tugas sesuai bab di aplikasi KodeQuiz.",
"2. Isi sel berwarna KUNING dengan RUMUS (bukan mengetik angkanya).",
"3. Kolom 'Cek' langsung menampilkan ✓ Benar atau ✗ Coba lagi.",
"4. Laptop dengan region Indonesia: pemisah argumen adalah TITIK KOMA, contoh =SUMIFS(F2:F11;A2:A11;\"Andi\").",
"5. Kalau macet: buka bab yang sama di aplikasi → baca materi → pakai tombol 💡 Petunjuk atau 🏳️ Menyerah di soal.",
"",
"Sheet 'Penjualan' dan 'Produk' = data yang sama persis dengan di aplikasi (10 transaksi).",
"Sheet 'DataBesar' = 150 transaksi untuk latihan Pivot Table dan Conditional Formatting.",
"Sheet 'Pelanggan_Mentah', 'Transaksi', dan 'Komisi' = data untuk Bab 7–10 (teks, tanggal, lookup, error).",
"Jangan mengubah data asli. Kalau rusak, unduh ulang file ini dari aplikasi."]
for i,b in enumerate(baris):
    c=ws.cell(row=i+1,column=1,value=b)
    if i==0: c.font=judulF
    if i==2: c.font=Font(bold=True)

# ---- Penjualan ----
ws=wb.create_sheet("Penjualan"); head(ws,1,["Sales","Wilayah","Produk","Qty","Harga","Total"])
for r,b in enumerate(PENJ,start=2):
    for c,v in enumerate(b,start=1): ws.cell(row=r,column=c,value=v).border=kotak
    ws.cell(row=r,column=6,value=f"=D{r}*E{r}").border=kotak
    ws.cell(row=r,column=5).number_format=RP; ws.cell(row=r,column=6).number_format=RP
lebar(ws,[10,12,12,7,13,14])

# ---- Produk ----
ws=wb.create_sheet("Produk"); head(ws,1,["Produk","Kategori","Harga"])
for r,b in enumerate(PROD,start=2):
    for c,v in enumerate(b,start=1): ws.cell(row=r,column=c,value=v).border=kotak
    ws.cell(row=r,column=3).number_format=RP
lebar(ws,[12,12,13])

# ---- Bab1 ----
ws=wb.create_sheet("Bab1-Dasar"); lebar(ws,[44,18,14,3,3])
tugas(ws,"Bab 1 — Rumus dasar & referensi",["Isi sel kuning dengan rumus yang mengacu ke sheet Penjualan (contoh: =SUM(Penjualan!F2:F11))."])
head(ws,4,["Pertanyaan","Rumusmu","Cek"])
soal=[("Total semua penjualan (SUM kolom Total)",45250000),("Total Qty terjual",35),("Banyaknya transaksi (COUNT)",10),
("Rata-rata Total per transaksi",4525000),("Total terbesar (MAX)",14000000),("Total terkecil (MIN)",750000)]
for i,(q,k) in enumerate(soal):
    r=5+i; ws.cell(row=r,column=1,value=q); isian(ws,f"B{r}"); ws[f"B{r}"].number_format=RP
    ws[f"E{r}"]=k; cek(ws,f"B{r}",f"E{r}",f"C{r}")
ws["A13"]="Latihan referensi absolut: tarif pajak di B14. Isi B16:B18 dengan Total × pajak, pakai $B$14, lalu tarik ke bawah."
ws["A13"].font=Font(italic=True,color="66756D")
ws["A14"]="Tarif pajak"; ws["B14"]=0.11; ws["B14"].number_format="0%"
head(ws,15,["Transaksi","Pajak (rumus)","Cek"])
for i in range(3):
    r=16+i; ws.cell(row=r,column=1,value=f"Penjualan baris {i+2}"); isian(ws,f"B{r}"); ws[f"B{r}"].number_format=RP
    ws[f"E{r}"]=PENJ[i][3]*PENJ[i][4]*0.11; cek(ws,f"B{r}",f"E{r}",f"C{r}")
ws.column_dimensions["E"].hidden=True

# ---- Bab2 ----
ws=wb.create_sheet("Bab2-SUMIFS"); lebar(ws,[16,22,22,14,14,3,3,3])
tugas(ws,"Bab 2 — SUMIFS & COUNTIFS",["Isi kolom kuning dengan SUMIFS/COUNTIFS yang MENGACU ke sel nama di kolom A (jangan ketik \"Andi\" manual).","Tips: kunci range-nya dengan $ supaya bisa ditarik ke bawah: =SUMIFS(Penjualan!$F$2:$F$11, Penjualan!$A$2:$A$11, A5)"])
head(ws,4,["Sales","Total (SUMIFS)","Jumlah transaksi (COUNTIFS)","Cek total","Cek jumlah"])
tot={"Andi":18750000,"Bima":4700000,"Citra":13000000,"Dewi":8800000}; jml={"Andi":3,"Bima":3,"Citra":2,"Dewi":2}
for i,n in enumerate(["Andi","Bima","Citra","Dewi"]):
    r=5+i; ws[f"A{r}"]=n; isian(ws,f"B{r}"); isian(ws,f"C{r}"); ws[f"B{r}"].number_format=RP
    ws[f"G{r}"]=tot[n]; ws[f"H{r}"]=jml[n]; cek(ws,f"B{r}",f"G{r}",f"D{r}"); cek(ws,f"C{r}",f"H{r}",f"E{r}")
head(ws,11,["Pertanyaan dua syarat","Rumusmu","","Cek"])
q2=[("Total Andi di Jakarta",18000000),("Total Bandung selain Mouse",9000000),("Jumlah Laptop di luar Jakarta",2),("Jumlah transaksi 1–5 juta",5)]
for i,(q,k) in enumerate(q2):
    r=12+i; ws[f"A{r}"]=q; isian(ws,f"B{r}"); ws[f"G{r}"]=k; cek(ws,f"B{r}",f"G{r}",f"D{r}")
    if k>100: ws[f"B{r}"].number_format=RP
for c in "GH": ws.column_dimensions[c].hidden=True

# ---- Bab3 ----
ws=wb.create_sheet("Bab3-XLOOKUP"); lebar(ws,[12,12,16,14,14,14,3,3])
tugas(ws,"Bab 3 — XLOOKUP",["Isi Kategori dan Harga dengan XLOOKUP dari sheet Produk berdasarkan kolom B. Kunci range Produk dengan $.","Contoh: =XLOOKUP(B5, Produk!$A$2:$A$5, Produk!$B$2:$B$5, \"Tidak ada\")   (Excel 2016: pakai VLOOKUP(...,FALSE))"])
head(ws,4,["Sales","Produk","Kategori (XLOOKUP)","Harga (XLOOKUP)","Cek kategori","Cek harga"])
cari=[("Andi","Laptop"),("Bima","Mouse"),("Citra","Monitor"),("Dewi","Keyboard"),("Eka","Printer")]
pm={p[0]:p for p in PROD}
for i,(s,p) in enumerate(cari):
    r=5+i; ws[f"A{r}"]=s; ws[f"B{r}"]=p; isian(ws,f"C{r}"); isian(ws,f"D{r}"); ws[f"D{r}"].number_format=RP
    kat=pm[p][1] if p in pm else "Tidak ada"; har=pm[p][2] if p in pm else "Tidak ada"
    ws[f"G{r}"]=kat; ws[f"H{r}"]=har
    cek(ws,f"C{r}",f"G{r}",f"E{r}","teks"); cek(ws,f"D{r}",f"H{r}",f"F{r}","teks")
for c in "GH": ws.column_dimensions[c].hidden=True

# ---- Bab4 ----
ws=wb.create_sheet("Bab4-IF"); lebar(ws,[10,12,14,18,18,14,14,3,3])
tugas(ws,"Bab 4 — IF bertingkat, AND, OR",["Label: Total ≥ 5.000.000 → \"Tinggi\"; ≥ 1.500.000 → \"Sedang\"; selain itu → \"Rendah\".","Bonus: \"Bonus\" jika Wilayah Jakarta DAN Total ≥ 5.000.000, selain itu \"-\"."])
head(ws,4,["Sales","Wilayah","Total","Label (IF)","Bonus (IF+AND)","Cek label","Cek bonus"])
for i,b in enumerate(PENJ):
    r=5+i; t=b[3]*b[4]
    ws[f"A{r}"]=b[0]; ws[f"B{r}"]=b[1]; ws[f"C{r}"]=t; ws[f"C{r}"].number_format=RP
    isian(ws,f"D{r}"); isian(ws,f"E{r}")
    ws[f"H{r}"]="Tinggi" if t>=5e6 else "Sedang" if t>=1.5e6 else "Rendah"
    ws[f"I{r}"]="Bonus" if (b[1]=="Jakarta" and t>=5e6) else "-"
    cek(ws,f"D{r}",f"H{r}",f"F{r}","teks"); cek(ws,f"E{r}",f"I{r}",f"G{r}","teks")
for c in "HI": ws.column_dimensions[c].hidden=True

# ---- DataBesar (untuk pivot & CF) ----
random.seed(7)
ws=wb.create_sheet("DataBesar"); head(ws,1,["Tanggal","Sales","Wilayah","Produk","Kategori","Qty","Harga","Total"])
sales=["Andi","Bima","Citra","Dewi","Eka"]; wil=["Jakarta","Bandung","Surabaya","Medan"]
from datetime import date,timedelta
for r in range(2,152):
    p=random.choice(PROD); q=random.choice([1,1,1,2,2,3,4,5,6,8,10]) if p[0] in ("Mouse","Keyboard") else random.choice([1,1,1,2,2,3])
    d=date(2026,1,1)+timedelta(days=random.randint(0,89))
    vals=[d,random.choice(sales),random.choice(wil),p[0],p[1],q,p[2]]
    for c,v in enumerate(vals,start=1): ws.cell(row=r,column=c,value=v)
    ws.cell(row=r,column=1).number_format="dd/mm/yyyy"; ws.cell(row=r,column=7).number_format=RP
    ws.cell(row=r,column=8,value=f"=F{r}*G{r}").number_format=RP
lebar(ws,[12,9,11,11,12,6,13,14])
t=Table(displayName="DataPenjualan",ref="A1:H151"); t.tableStyleInfo=TableStyleInfo(name="TableStyleLight9",showRowStripes=True); ws.add_table(t)

# ---- Bab5 ----
ws=wb.create_sheet("Bab5-Pivot"); lebar(ws,[110])
tugas(ws,"Bab 5 — Pivot Table (pakai sheet DataBesar)",[
"Data di sheet DataBesar sudah berbentuk Excel Table (namanya DataPenjualan), jadi baris baru otomatis ikut terbaca.",
"Tugas 1: Insert → PivotTable → Rows = Sales, Values = Sum of Total. Siapa sales terbaik?",
"Tugas 2: Rows = Wilayah, Values = Sum of Total. Urutkan dari terbesar (klik kanan → Sort → Largest to Smallest).",
"Tugas 3: Rows = Sales, Columns = Kategori, Values = Sum of Total (tabel silang).",
"Tugas 4: Tambahkan Tanggal ke Rows lalu Group by Months → tren penjualan per bulan.",
"Tugas 5: Cocokkan Grand Total pivot dengan =SUM(DataPenjualan[Total]). Harus sama!",
"Tugas 6: Tambahkan 1 baris data baru di bawah DataBesar, lalu klik kanan pivot → Refresh. Apakah angkanya berubah?",
"Tulis jawaban tugas 1 & 2 di sel B11 dan B12 (sebagai catatan untuk dirimu sendiri)."])
ws["A11"]="Sales terbaik:"; ws["A12"]="Wilayah terbesar:"
for r in (11,12): ws[f"A{r}"].font=Font(bold=True); ws.column_dimensions["B"].width=20; isian(ws,f"B{r}")
lebar(ws,[110,20])

# ---- Bab6 ----
ws=wb.create_sheet("Bab6-CF"); lebar(ws,[110])
tugas(ws,"Bab 6 — Conditional Formatting (pakai sheet DataBesar)",[
"Tugas 1: Pilih kolom Total → Home → Conditional Formatting → Highlight Cells Rules → Greater Than → 5000000.",
"Tugas 2: Pilih A2:H151 → New Rule → Use a formula → =$H2>=10000000 → warna hijau muda. Seluruh baris ikut berwarna.",
"Tugas 3: Pilih kolom Qty → Data Bars.",
"Tugas 4: New Rule dengan formula =$B2=\"Eka\" → warna biru muda. Berapa baris yang terwarnai? (Cek dengan COUNTIF.)",
"Tugas 5: Buka Manage Rules, lalu ubah urutan rule. Perhatikan rule mana yang menang saat bertabrakan.",
"Contoh hasil yang benar ada di sheet 'Contoh-CF' (jangan dilihat sebelum mencoba sendiri 😉)."])
ws2=wb.create_sheet("Contoh-CF"); head(ws2,1,["Sales","Wilayah","Produk","Qty","Harga","Total"])
for r,b in enumerate(PENJ,start=2):
    for c,v in enumerate(b,start=1): ws2.cell(row=r,column=c,value=v)
    ws2.cell(row=r,column=6,value=f"=D{r}*E{r}").number_format=RP; ws2.cell(row=r,column=5).number_format=RP
ws2.conditional_formatting.add("A2:F11",FormulaRule(formula=["$F2>=5000000"],fill=PatternFill("solid",fgColor="E4F3EA"),font=Font(bold=True)))
ws2["H1"]="Aturan: =$F2>=5000000 diterapkan ke A2:F11"; ws2["H1"].font=Font(italic=True,color="66756D")
lebar(ws2,[10,12,12,7,13,14,3,44])


# =================== v4: Bab 7–10 ===================
from datetime import date as _d
def cek_persis(ws,isi,kunci,out):
    ws[out]=f'=IF({isi}="","",IF(EXACT({isi},{kunci}),"✓ Benar","✗ Coba lagi"))'; ws[out].font=Font(bold=True)
KOTOR=[["  rina wulandari","jakarta","0812-3456-7890","Rina.W@Mail.com","INV-2026-001"],
["TONO SAPUTRA","Bandung ","081298765432","tono@mail.com","INV-2026-002"],
["Sari   Dewi","JAKARTA","0813-2222-1111","sari.dewi@mail.com","INV-2026-003"],
["budi hartono","Surabaya","0857-1111-2222","budi@mail.com","INV-2026-004"],
["Lia Amelia","bandung","0813-7777-8888","LIA@MAIL.COM","INV-2026-005"],
["TONO SAPUTRA","Bandung ","081298765432","tono@mail.com","INV-2026-002"]]
ws=wb.create_sheet("Pelanggan_Mentah"); head(ws,1,["Nama","Kota","Telepon","Email","Kode"])
for r,b in enumerate(KOTOR,start=2):
    for c,v in enumerate(b,start=1): ws.cell(row=r,column=c,value=v).border=kotak
lebar(ws,[20,12,16,22,15])
TRX=[("INV-01",_d(2026,1,3),"Andi",14000000,_d(2026,1,10)),("INV-02",_d(2026,1,15),"Bima",1500000,_d(2026,2,20)),
("INV-03",_d(2026,1,28),"Citra",6000000,_d(2026,2,5)),("INV-04",_d(2026,2,2),"Andi",750000,_d(2026,2,2)),
("INV-05",_d(2026,2,14),"Dewi",7000000,_d(2026,3,30)),("INV-06",_d(2026,2,27),"Bima",1200000,_d(2026,3,6)),
("INV-07",_d(2026,3,5),"Citra",7000000,_d(2026,3,12)),("INV-08",_d(2026,3,18),"Andi",4000000,None)]
ws=wb.create_sheet("Transaksi"); head(ws,1,["Faktur","Tanggal","Sales","Total","Tgl_Bayar"])
for r,b in enumerate(TRX,start=2):
    for c,v in enumerate(b,start=1):
        x=ws.cell(row=r,column=c,value=v); x.border=kotak
    ws.cell(row=r,column=2).number_format="dd/mm/yyyy"; ws.cell(row=r,column=5).number_format="dd/mm/yyyy"; ws.cell(row=r,column=4).number_format=RP
lebar(ws,[9,12,9,13,12])
ws=wb.create_sheet("Komisi"); head(ws,1,["Batas_Bawah","Komisi"])
for r,(bb,k) in enumerate([(0,0.02),(5000000,0.03),(10000000,0.05)],start=2):
    ws.cell(row=r,column=1,value=bb).number_format=RP; ws.cell(row=r,column=2,value=k).number_format="0%"
lebar(ws,[13,9])

# ---- Bab7: Teks & pembersihan ----
def trim(x): return " ".join(x.split())
def proper(x): return " ".join(w[:1].upper()+w[1:].lower() for w in x.split(" "))
ws=wb.create_sheet("Bab7-Teks"); lebar(ws,[5,20,12,16,13,12,10,10,10,10,10,3,3,3,3,3,3])
tugas(ws,"Bab 7 — Teks & membersihkan data (pakai sheet Pelanggan_Mentah)",[
"Isi kolom kuning dengan rumus yang mengacu ke Pelanggan_Mentah baris yang sama (baris 5 di sini = baris 2 di sana). Lalu tarik ke bawah.",
"B: =PROPER(TRIM(Pelanggan_Mentah!A2))   C: kota rapi   D: telepon tanpa '-' (SUBSTITUTE)   E: username email, huruf kecil (LOWER + LEFT + FIND)",
"F: berapa kali NAMA RAPI muncul di kolom B → =COUNTIF($B$5:$B$10,B5). Hasil 2 = duplikat. Lalu coba Data → Remove Duplicates di salinan datanya."])
head(ws,4,["No","Nama rapi","Kota rapi","Telepon","Username","Kemunculan","Cek B","Cek C","Cek D","Cek E","Cek F"])
nama_rapi=[proper(trim(k[0])) for k in KOTOR]
for i,k in enumerate(KOTOR):
    r=5+i; ws[f"A{r}"]=i+1
    for c in "BCDEF": isian(ws,f"{c}{r}")
    kunci=[nama_rapi[i], proper(trim(k[1])), k[2].replace("-",""), k[3][:k[3].index("@")].lower(), nama_rapi.count(nama_rapi[i])]
    for c,v in zip("MNOPQ",kunci): ws[f"{c}{r}"]=v
    for isi,kc,out in zip("BCDE","MNOP","GHIJ"): cek_persis(ws,f"{isi}{r}",f"{kc}{r}",f"{out}{r}")
    cek(ws,f"F{r}",f"Q{r}",f"K{r}")
for c in "MNOPQ": ws.column_dimensions[c].hidden=True

# ---- Bab8: Tanggal ----
ws=wb.create_sheet("Bab8-Tanggal"); lebar(ws,[9,10,12,14,16,9,9,9,9,3,3,3,3,3])
tugas(ws,"Bab 8 — Tanggal & waktu (pakai sheet Transaksi)",[
"B: =MONTH(Transaksi!B2)   C: lama bayar dalam hari =Transaksi!E2-Transaksi!B2 (INV-08 belum bayar → kosongkan)",
"D: =IF(C5>30,\"Telat\",\"Tepat waktu\") (kecuali INV-08)   E: akhir bulan faktur =EOMONTH(Transaksi!B2,0) — format sebagai tanggal",
"Lalu kerjakan 3 pertanyaan ringkasan di bawah tabel."])
head(ws,4,["Faktur","Bulan","Lama bayar","Status","Akhir bulan","Cek B","Cek C","Cek D","Cek E"])
from calendar import monthrange
for i,t in enumerate(TRX):
    r=5+i; ws[f"A{r}"]=t[0]
    isian(ws,f"B{r}"); isian(ws,f"E{r}"); ws[f"E{r}"].number_format="dd/mm/yyyy"
    ws[f"K{r}"]=t[1].month; cek(ws,f"B{r}",f"K{r}",f"F{r}")
    eom=_d(t[1].year,t[1].month,monthrange(t[1].year,t[1].month)[1]); ws[f"N{r}"]=eom; ws[f"N{r}"].number_format="dd/mm/yyyy"
    cek(ws,f"E{r}",f"N{r}",f"I{r}")
    if t[4]:
        isian(ws,f"C{r}"); isian(ws,f"D{r}")
        lama=(t[4]-t[1]).days; ws[f"L{r}"]=lama; ws[f"M{r}"]="Telat" if lama>30 else "Tepat waktu"
        cek(ws,f"C{r}",f"L{r}",f"G{r}"); cek(ws,f"D{r}",f"M{r}",f"H{r}","teks")
    else:
        ws[f"C{r}"]="(belum bayar)"; ws[f"C{r}"].font=Font(italic=True,color="66756D")
head(ws,14,["Pertanyaan","","","Rumusmu","Cek"])
q8=[("Total penjualan Februari (SUMIFS + DATE)",8950000),("Jumlah faktur belum dibayar (COUNTBLANK)",1),("Hari kerja 2–6 Maret 2026 (NETWORKDAYS)",5)]
for i,(q,k) in enumerate(q8):
    r=15+i; ws[f"A{r}"]=q; isian(ws,f"D{r}"); ws[f"K{r}"]=k; cek(ws,f"D{r}",f"K{r}",f"E{r}")
    if k>100: ws[f"D{r}"].number_format=RP
for c in "KLMN": ws.column_dimensions[c].hidden=True

# ---- Bab9: INDEX-MATCH & tarif bertingkat ----
ws=wb.create_sheet("Bab9-Lookup"); lebar(ws,[44,16,12,3,3,3,3])
tugas(ws,"Bab 9 — INDEX-MATCH, pencarian dua arah & tarif bertingkat",[
"Pakai sheet Produk dan Komisi. Untuk komisi: =VLOOKUP(B10,Komisi!$A$2:$B$4,2,TRUE) atau =XLOOKUP(B10,Komisi!$A$2:$A$4,Komisi!$B$2:$B$4,,-1)."])
head(ws,3,["Pertanyaan","Rumusmu","Cek"])
q9=[("Posisi 'Monitor' di Produk!A2:A5 (MATCH)",3,"angka"),("Harga Keyboard (INDEX + MATCH)",300000,"angka"),
("Nama produk yang harganya 2.000.000 — cari ke KIRI (INDEX + MATCH)","Monitor","teks")]
for i,(q,k,tp) in enumerate(q9):
    r=4+i; ws[f"A{r}"]=q; isian(ws,f"B{r}"); ws[f"E{r}"]=k
    if tp=="angka": cek(ws,f"B{r}",f"E{r}",f"C{r}")
    else: cek_persis(ws,f"B{r}",f"E{r}",f"C{r}")
    if k==300000: ws[f"B{r}"].number_format=RP
head(ws,8,["Komisi per sales (total dari bab SUMIFS)","Total","Komisi %","Cek"])
for i,(n,t) in enumerate([("Andi",18750000),("Bima",4700000),("Citra",13000000),("Dewi",8800000)]):
    r=9+i; ws[f"A{r}"]=n; ws[f"B{r}"]=t; ws[f"B{r}"].number_format=RP; isian(ws,f"C{r}"); ws[f"C{r}"].number_format="0%"
    k=0.05 if t>=10e6 else 0.03 if t>=5e6 else 0.02; ws[f"F{r}"]=k
    ws[f"D{r}"]=f'=IF(C{r}="","",IF(ROUND(C{r},4)=ROUND(F{r},4),"✓ Benar","✗ Coba lagi"))'; ws[f"D{r}"].font=Font(bold=True)
ws["A15"]="Tabel target (juta rupiah):"; ws["A15"].font=Font(bold=True)
head(ws,16,["Sales","Jan","Feb","Mar"])
TG={"Andi":[15,16,18],"Bima":[6,6,7],"Citra":[10,12,12],"Dewi":[8,9,9]}
for i,(n,v) in enumerate(TG.items()):
    r=17+i; ws[f"A{r}"]=n
    for j,x in enumerate(v): ws.cell(row=r,column=2+j,value=x)
ws["A22"]="Target Citra bulan Feb — INDEX(B17:D20, MATCH(…), MATCH(…)):"; isian(ws,"B22"); ws["E22"]=12; cek(ws,"B22","E22","C22")
ws["A24"]="Bonus (Excel 365 / Google Sheets): =UNIQUE(Penjualan!A2:A11), =SORT(UNIQUE(Penjualan!C2:C11)), =FILTER(Penjualan!A2:F11, Penjualan!B2:B11=\"Bandung\")"
ws["A24"].font=Font(italic=True,color="66756D")
for c in "EF": ws.column_dimensions[c].hidden=True

# ---- Bab10: Error & data rapi ----
ws=wb.create_sheet("Bab10-Error"); lebar(ws,[12,14,8,18,12,3,3])
tugas(ws,"Bab 10 — Error, IFERROR/IFNA & data rapi",[
"D: harga satuan =IFERROR(B5/C5,0) — baris dengan Qty 0 tidak boleh menampilkan #DIV/0!.",
"Tabel kedua: kategori produk dengan =IFNA(XLOOKUP(A13,Produk!$A$2:$A$5,Produk!$B$2:$B$5),\"Tidak ada\") (atau IFERROR+VLOOKUP)."])
head(ws,4,["Produk","Total","Qty","Harga satuan","Cek"])
for i,(p,t,q) in enumerate([("Laptop",14000000,2),("Mouse",1500000,10),("Monitor",600000,0),("Keyboard",750000,5),("Printer",0,0)]):
    r=5+i; ws[f"A{r}"]=p; ws[f"B{r}"]=t; ws[f"C{r}"]=q; ws[f"B{r}"].number_format=RP; isian(ws,f"D{r}"); ws[f"D{r}"].number_format=RP
    ws[f"G{r}"]=t/q if q else 0; cek(ws,f"D{r}",f"G{r}",f"E{r}")
head(ws,12,["Produk","Kategori","","","Cek"])
for i,p in enumerate(["Laptop","Printer","Mouse","Tablet"]):
    r=13+i; ws[f"A{r}"]=p; isian(ws,f"B{r}"); ws[f"G{r}"]=pm[p][1] if p in pm else "Tidak ada"; cek_persis(ws,f"B{r}",f"G{r}",f"E{r}")
ws["A19"]="Nilai 1,4 — 1,4 — 1,4 ada di B20:B22. Tulis total SETELAH dibulatkan per baris: =ROUND(B20,0)+ROUND(B21,0)+ROUND(B22,0)"
ws["A19"].font=Font(italic=True,color="66756D")
for r in (20,21,22): ws[f"B{r}"]=1.4; ws[f"B{r}"].number_format="0"
ws["A23"]="Total bulat:"; isian(ws,"B23"); ws["G23"]=3; cek(ws,"B23","G23","E23")
ws["A25"]="Tugas tanpa cek: buat dropdown Data Validation (Jakarta, Bandung, Surabaya) di sel B26, lalu coba ketik 'Jakrta'."
ws["A25"].font=Font(italic=True,color="66756D"); ws["A26"]="Wilayah:"; isian(ws,"B26")
ws.column_dimensions["G"].hidden=True

for s in wb.worksheets: s.sheet_view.showGridLines = s.title in ("Penjualan","Produk","DataBesar","Contoh-CF","Pelanggan_Mentah","Transaksi","Komisi")
wb.save(os.path.join(ROOT, "latihan", "latihan-excel-penjualan.xlsx"))
# CSV untuk Google Sheets/Looker Studio
import csv
with open(os.path.join(ROOT, "latihan", "penjualan.csv"),"w",newline="") as f:
    w=csv.writer(f); w.writerow(["Sales","Wilayah","Produk","Qty","Harga","Total"])
    for b in PENJ: w.writerow(b+[b[3]*b[4]])
print("ok")
