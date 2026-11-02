// ============ PYTHON — 150 soal, 11 bab dengan materi ============
// Format: t: "mc" (pilihan ganda) / "is" (isian), lv: 1-3, k: kategori bab
const SOAL_PYTHON = [
// ---- BAB 1: dasar (15) ----
{k:"dasar",t:"mc",lv:1,q:"Fungsi untuk menampilkan output ke layar:",o:["echo()","print()","console.log()","printf()"],a:1,e:"print() adalah fungsi bawaan Python untuk output."},
{k:"dasar",t:"mc",lv:1,q:"Ekstensi file Python adalah…",o:[".pt",".pyt",".py",".python"],a:2,e:"File Python berekstensi .py"},
{k:"dasar",t:"mc",lv:1,q:"Cara membuat komentar satu baris:",o:["// komentar","<!-- komentar -->","# komentar","/* komentar */"],a:2,e:"Python memakai tanda pagar (#)."},
{k:"dasar",t:"mc",lv:1,q:"Cara benar mendeklarasikan variabel:",o:["int x = 5","var x = 5","x = 5","let x = 5"],a:2,e:"Python tidak butuh kata kunci tipe: cukup x = 5."},
{k:"dasar",t:"mc",lv:1,q:"Nama variabel yang TIDAK valid:",o:["nama_siswa","_total","2angka","skorAkhir"],a:2,e:"Nama variabel tidak boleh diawali angka."},
{k:"dasar",t:"mc",lv:1,q:"Tipe data dari 3.14 adalah…",o:["int","float","str","decimal"],a:1,e:"Bilangan desimal bertipe float."},
{k:"dasar",t:"mc",lv:1,q:"Tipe data dari True adalah…",o:["int","str","bool","float"],a:2,e:"True dan False bertipe bool."},
{k:"dasar",t:"mc",lv:1,q:"Fungsi untuk mengetahui tipe sebuah nilai:",o:["typeof()","type()","dtype()","kind()"],a:1,e:"type(x) mengembalikan tipe data x."},
{k:"dasar",t:"mc",lv:1,q:"input() selalu mengembalikan data bertipe…",o:["int","str","float","bool"],a:1,e:"Hasil input() selalu string; konversi dengan int()/float() bila perlu."},
{k:"dasar",t:"mc",lv:2,q:"Cara mengubah string \"25\" menjadi bilangan bulat:",o:["num(\"25\")","int(\"25\")","parse(\"25\")","str(25)"],a:1,e:"int() mengonversi ke integer."},
{k:"dasar",t:"mc",lv:2,q:"Hasil print(int(7.9)) adalah…",o:["8","7.9","7","error"],a:2,e:"int() memotong desimal (bukan membulatkan): 7."},
{k:"dasar",t:"mc",lv:2,q:"Hasil print(type(\"5\")) menunjukkan…",o:["int","str","float","number"],a:1,e:"Angka dalam tanda kutip adalah string."},
{k:"dasar",t:"is",lv:1,q:"Nilai kosong/tidak ada di Python ditulis ____",a:["none"],e:"None mewakili ketiadaan nilai."},
{k:"dasar",t:"is",lv:1,q:"Fungsi untuk menerima ketikan pengguna: ____()",a:["input"],e:"input() membaca teks dari keyboard."},
{k:"dasar",t:"is",lv:2,q:"Fungsi konversi ke bilangan desimal: ____(\"3.5\")",a:["float"],e:"float() mengonversi ke bilangan desimal."},
// ---- BAB 2: operator (13) ----
{k:"operator",t:"mc",lv:1,q:"Hasil print(2 ** 3):",o:["6","8","9","23"],a:1,e:"** adalah pangkat: 2³ = 8."},
{k:"operator",t:"mc",lv:1,q:"Hasil print(10 // 3):",o:["3.33","3","4","1"],a:1,e:"// pembagian bulat (buang desimal)."},
{k:"operator",t:"mc",lv:1,q:"Hasil print(10 % 3):",o:["3","0","1","3.3"],a:2,e:"% modulus = sisa bagi. 10÷3 sisa 1."},
{k:"operator",t:"mc",lv:1,q:"Hasil print(7 / 2):",o:["3","3.5","4","3,5"],a:1,e:"Operator / selalu menghasilkan float."},
{k:"operator",t:"mc",lv:1,q:"Perbedaan = dan == :",o:["sama saja","= penugasan, == perbandingan","== penugasan, = perbandingan","keduanya perbandingan"],a:1,e:"= memberi nilai; == membandingkan."},
{k:"operator",t:"mc",lv:2,q:"x = 5; x += 3; nilai x sekarang…",o:["5","3","8","53"],a:2,e:"x += 3 sama dengan x = x + 3."},
{k:"operator",t:"mc",lv:2,q:"Hasil print(5 > 3 and 2 > 4):",o:["True","False","error","None"],a:1,e:"and butuh keduanya benar; 2>4 salah → False."},
{k:"operator",t:"mc",lv:2,q:"Hasil print(5 > 3 or 2 > 4):",o:["True","False","error","None"],a:0,e:"or cukup salah satu benar."},
{k:"operator",t:"mc",lv:2,q:"Hasil print(not True):",o:["True","False","0","error"],a:1,e:"not membalik nilai boolean."},
{k:"operator",t:"mc",lv:2,q:"Hasil print(7 == \"7\"):",o:["True","False","error","7"],a:1,e:"int dan str berbeda tipe → False."},
{k:"operator",t:"mc",lv:3,q:"Operator untuk mengecek keanggotaan (\"a\" ada di list?):",o:["has","in","of","inside"],a:1,e:"\"a\" in daftar → True jika ada."},
{k:"operator",t:"is",lv:1,q:"Operator pangkat di Python ditulis ____",a:["**"],e:"2 ** 4 = 16."},
{k:"operator",t:"is",lv:2,q:"Operator logika \"dan\" di Python: ____",a:["and"],e:"Python memakai kata: and, or, not."},
// ---- BAB 3: string (15) ----
{k:"string",t:"mc",lv:1,q:"Hasil print(\"a\" + \"b\"):",o:["ab","a+b","error","a b"],a:0,e:"+ pada string = penggabungan."},
{k:"string",t:"mc",lv:1,q:"Hasil print(\"ha\" * 3):",o:["hahaha","ha3","error","hhaaa"],a:0,e:"String × angka = pengulangan."},
{k:"string",t:"mc",lv:1,q:"Hasil print(len(\"Python\")):",o:["5","6","7","error"],a:1,e:"\"Python\" = 6 karakter."},
{k:"string",t:"mc",lv:1,q:"s = \"koding\"; print(s[0]) menghasilkan…",o:["k","o","g","koding"],a:0,e:"Indeks dimulai dari 0."},
{k:"string",t:"mc",lv:2,q:"s = \"informatika\"; print(s[0:4]):",o:["info","infor","nfor","tika"],a:0,e:"Slicing [0:4] = indeks 0–3."},
{k:"string",t:"mc",lv:2,q:"print(\"python\"[-1]) menghasilkan…",o:["p","n","o","error"],a:1,e:"Indeks -1 = karakter terakhir."},
{k:"string",t:"mc",lv:2,q:"Method mengubah semua huruf jadi kecil:",o:["small()","lower()","down()","mini()"],a:1,e:"\"ABC\".lower() → \"abc\"."},
{k:"string",t:"mc",lv:2,q:"Method menghapus spasi di awal & akhir string:",o:["clean()","trim()","strip()","cut()"],a:2,e:"Python memakai strip(), bukan trim()."},
{k:"string",t:"mc",lv:2,q:"nama=\"Ryan\"; cara benar menyisipkan ke string:",o:["print(f\"Halo {nama}\")","print(\"Halo {nama}\")","print(\"Halo\" nama)","print($\"Halo {nama}\")"],a:0,e:"f-string: awali dengan f, variabel dalam { }."},
{k:"string",t:"mc",lv:2,q:"Method mengganti kata: s.____(\"a\",\"b\")",o:["swap","change","replace","edit"],a:2,e:"replace(lama, baru) mengganti substring."},
{k:"string",t:"mc",lv:3,q:"\"a,b,c\".split(\",\") menghasilkan…",o:["\"abc\"","[\"a\",\"b\",\"c\"]","(\"a\",\"b\",\"c\")","error"],a:1,e:"split memecah string menjadi list."},
{k:"string",t:"mc",lv:3,q:"\"-\".join([\"a\",\"b\"]) menghasilkan…",o:["ab","a-b","[a-b]","error"],a:1,e:"join menggabungkan list dengan pemisah."},
{k:"string",t:"mc",lv:3,q:"\"python\".count(\"o\") menghasilkan…",o:["0","1","2","o"],a:1,e:"count menghitung kemunculan substring."},
{k:"string",t:"is",lv:2,q:"Method huruf kapital semua: teks.____()",a:["upper"],e:"upper() mengubah jadi huruf besar."},
{k:"string",t:"is",lv:3,q:"\"belajar\".startswith(\"bel\") mengembalikan ____",a:["true"],e:"startswith mengecek awalan string → True."},
// ---- BAB 4: kondisi (12) ----
{k:"kondisi",t:"mc",lv:1,q:"Penulisan if yang benar:",o:["if x > 5 then:","if (x > 5) { }","if x > 5:","when x > 5:"],a:2,e:"if kondisi: lalu blok menjorok (indentasi)."},
{k:"kondisi",t:"mc",lv:1,q:"Blok kode Python dibedakan dengan…",o:["kurung kurawal","titik koma","indentasi","kata end"],a:2,e:"Indentasi (biasanya 4 spasi) menentukan blok."},
{k:"kondisi",t:"mc",lv:1,q:"Kata kunci untuk kondisi alternatif kedua:",o:["elseif","elif","else if","ef"],a:1,e:"Python memakai elif."},
{k:"kondisi",t:"mc",lv:2,q:"x=10. Output dari: if x>5: print(\"A\") else: print(\"B\")",o:["A","B","AB","error"],a:0,e:"10 > 5 benar → cabang if dijalankan."},
{k:"kondisi",t:"mc",lv:2,q:"Hasil bool(\"\") adalah…",o:["True","False","error","None"],a:1,e:"String kosong bernilai False (falsy)."},
{k:"kondisi",t:"mc",lv:2,q:"Nilai yang dianggap False:",o:["1","\"0\"","0","\"False\""],a:2,e:"0, \"\", [], None → falsy. \"0\" adalah string berisi → truthy."},
{k:"kondisi",t:"mc",lv:2,q:"nilai=75. if nilai>=75: print(\"Lulus\"). Outputnya…",o:["Lulus","tidak ada","error","False"],a:0,e:">= berarti lebih besar ATAU sama dengan."},
{k:"kondisi",t:"mc",lv:3,q:"Ternary yang benar:",o:["x = \"A\" if n>5 else \"B\"","x = if n>5 \"A\" else \"B\"","x = n>5 ? \"A\" : \"B\"","x = (n>5) then A"],a:0,e:"Bentuk: nilai_jika_benar if kondisi else nilai_jika_salah."},
{k:"kondisi",t:"mc",lv:3,q:"if umur>=17 and punya_ktp: … berjalan jika…",o:["salah satu benar","keduanya benar","keduanya salah","umur saja"],a:1,e:"and menuntut semua kondisi benar."},
{k:"kondisi",t:"mc",lv:3,q:"Pengecekan x bukan None yang paling dianjurkan:",o:["if x != None:","if x is not None:","if not x == None:","if x <> None:"],a:1,e:"Gunakan is/is not untuk None."},
{k:"kondisi",t:"is",lv:1,q:"Kata kunci cabang terakhir jika semua kondisi gagal: ____:",a:["else"],e:"else menangani sisa kasus."},
{k:"kondisi",t:"is",lv:2,q:"Operator \"tidak sama dengan\": x ____ y",a:["!="],e:"!= berarti tidak sama dengan."},
// ---- BAB 5: loop (15) ----
{k:"loop",t:"mc",lv:1,q:"Output: for i in range(3): print(i)",o:["1 2 3","0 1 2","0 1 2 3","1 2"],a:1,e:"range(3) = 0,1,2 (batas atas tak termasuk)."},
{k:"loop",t:"mc",lv:1,q:"range(1, 5) menghasilkan…",o:["1,2,3,4,5","1,2,3,4","0,1,2,3,4","2,3,4,5"],a:1,e:"Mulai 1, berhenti sebelum 5."},
{k:"loop",t:"mc",lv:1,q:"Kata kunci menghentikan loop lebih awal:",o:["stop","exit","break","end"],a:2,e:"break keluar dari loop."},
{k:"loop",t:"mc",lv:1,q:"Kata kunci melewati satu iterasi:",o:["skip","pass","continue","next"],a:2,e:"continue lompat ke iterasi berikutnya."},
{k:"loop",t:"mc",lv:2,q:"range(2, 10, 3) menghasilkan…",o:["2,5,8","2,4,6,8","3,6,9","2,5,8,11"],a:0,e:"Mulai 2, langkah 3: 2,5,8."},
{k:"loop",t:"mc",lv:2,q:"while berjalan selama…",o:["kondisi False","kondisi True","10 kali","selamanya selalu"],a:1,e:"while mengulang selama kondisinya True."},
{k:"loop",t:"mc",lv:2,q:"Kode yang menyebabkan infinite loop:",o:["while True: (tanpa break)","for i in range(3):","while x < 5: x += 1","for x in [1,2]:"],a:0,e:"while True tanpa break tak pernah berhenti."},
{k:"loop",t:"mc",lv:2,q:"total=0; for i in range(1,4): total+=i. Nilai total:",o:["3","6","10","4"],a:1,e:"1+2+3 = 6."},
{k:"loop",t:"mc",lv:2,q:"Cara mengulangi setiap huruf dalam string s:",o:["for h in s:","for h of s:","foreach h in s:","loop s:"],a:0,e:"String bisa langsung diiterasi dengan for…in."},
{k:"loop",t:"mc",lv:3,q:"Fungsi untuk mendapat indeks sekaligus nilai saat loop:",o:["index()","enumerate()","count()","pairs()"],a:1,e:"for i, v in enumerate(daftar):"},
{k:"loop",t:"mc",lv:3,q:"Output: for i in range(5): if i==3: break; print(i)  (print di dalam loop)",o:["0 1 2","0 1 2 3","3 4","0 1 2 3 4"],a:0,e:"Saat i=3 loop berhenti sebelum print."},
{k:"loop",t:"mc",lv:3,q:"Loop bersarang: for i in range(2): for j in range(3): … dieksekusi berapa kali?",o:["5","6","2","3"],a:1,e:"2 × 3 = 6 kali."},
{k:"loop",t:"mc",lv:3,q:"zip([1,2],[\"a\",\"b\"]) memasangkan menjadi…",o:["(1,\"a\"),(2,\"b\")","[1,2,\"a\",\"b\"]","{1:2}","error"],a:0,e:"zip menggabungkan elemen sejajar dari beberapa iterable."},
{k:"loop",t:"is",lv:1,q:"Fungsi pembuat deret angka untuk loop: for i in ____(10):",a:["range"],e:"range menghasilkan deret angka."},
{k:"loop",t:"is",lv:2,q:"Loop yang mengulang selama kondisi benar: ____ x < 10:",a:["while"],e:"while mengulang berdasarkan kondisi."},
// ---- BAB 6: list (15) ----
{k:"list",t:"mc",lv:1,q:"Cara membuat list:",o:["a = (1,2,3)","a = {1,2,3}","a = [1,2,3]","a = <1,2,3>"],a:2,e:"List memakai kurung siku [ ]."},
{k:"list",t:"mc",lv:1,q:"angka=[5,7,9]; angka[0] adalah…",o:["5","7","9","error"],a:0,e:"Indeks 0 = elemen pertama."},
{k:"list",t:"mc",lv:1,q:"Method menambah elemen di akhir list:",o:["add()","push()","insert()","append()"],a:3,e:"append(x) menambah di akhir."},
{k:"list",t:"mc",lv:1,q:"Fungsi menghitung jumlah elemen list:",o:["size()","count()","len()","length()"],a:2,e:"len(daftar)."},
{k:"list",t:"mc",lv:2,q:"a=[1,2,3]; a[1]=9; a menjadi…",o:["[9,2,3]","[1,9,3]","[1,2,9]","error"],a:1,e:"List mutable — indeks 1 diganti."},
{k:"list",t:"mc",lv:2,q:"Method menghapus elemen berdasarkan NILAI:",o:["remove()","pop()","delete()","del()"],a:0,e:"remove(nilai); pop(indeks) berdasarkan posisi."},
{k:"list",t:"mc",lv:2,q:"a=[3,1,2]; a.sort(); a menjadi…",o:["[3,1,2]","[1,2,3]","[3,2,1]","[2,1,3]"],a:1,e:"sort() mengurutkan naik secara langsung (in-place)."},
{k:"list",t:"mc",lv:2,q:"a=[1,2,3]; a[-1] adalah…",o:["1","2","3","error"],a:2,e:"-1 = elemen terakhir."},
{k:"list",t:"mc",lv:2,q:"Hasil [1,2] + [3]:",o:["[1,2,3]","[6]","[[1,2],3]","error"],a:0,e:"+ menggabungkan dua list."},
{k:"list",t:"mc",lv:2,q:"Fungsi menjumlahkan semua elemen [1,2,3]:",o:["total()","sum()","add()","plus()"],a:1,e:"sum([1,2,3]) = 6."},
{k:"list",t:"mc",lv:3,q:"Hasil [x*2 for x in range(3)]:",o:["[0,2,4]","[2,4,6]","[0,1,2]","error"],a:0,e:"List comprehension: 0,2,4."},
{k:"list",t:"mc",lv:3,q:"[x for x in range(6) if x%2==0] menghasilkan…",o:["[0,2,4]","[1,3,5]","[2,4,6]","[0,1,2]"],a:0,e:"Comprehension dengan filter genap."},
{k:"list",t:"mc",lv:3,q:"a=[1,2,3]; b=a; b.append(4). Isi a sekarang…",o:["[1,2,3]","[1,2,3,4]","error","[4]"],a:1,e:"b=a menunjuk objek yang sama — gunakan a.copy() agar terpisah."},
{k:"list",t:"is",lv:2,q:"Fungsi mencari nilai terbesar list: ____([4,9,2])",a:["max"],e:"max() nilai terbesar; min() terkecil."},
{k:"list",t:"is",lv:3,q:"Method membalik urutan list secara langsung: a.____()",a:["reverse"],e:"reverse() membalik list in-place."},
// ---- BAB 7: koleksi (15) ----
{k:"koleksi",t:"mc",lv:1,q:"Struktur data pasangan kunci→nilai:",o:["list","tuple","dict","set"],a:2,e:"Dictionary: {\"kunci\": nilai}."},
{k:"koleksi",t:"mc",lv:1,q:"d={\"nama\":\"Ryan\"}; cara mengambil nilainya:",o:["d.nama","d->nama","d[\"nama\"]","d(nama)"],a:2,e:"Akses dict dengan kunci dalam kurung siku."},
{k:"koleksi",t:"mc",lv:1,q:"Struktur terurut yang TIDAK bisa diubah:",o:["list","dict","tuple","set"],a:2,e:"Tuple immutable, ditulis dengan ( )."},
{k:"koleksi",t:"mc",lv:1,q:"Struktur tanpa urutan dan otomatis tanpa duplikat:",o:["list","set","tuple","dict"],a:1,e:"Set menyimpan elemen unik."},
{k:"koleksi",t:"mc",lv:2,q:"Hasil set([1,2,2,3,3]):",o:["[1,2,3]","{1,2,3}","(1,2,3)","{1,2,2,3,3}"],a:1,e:"set menghapus duplikat."},
{k:"koleksi",t:"mc",lv:2,q:"Cara menambah pasangan baru ke dict d:",o:["d.add(\"kota\",\"Solo\")","d[\"kota\"]=\"Solo\"","d.append(\"kota\")","d+\"kota\""],a:1,e:"Assign langsung: d[\"kunci\"] = nilai."},
{k:"koleksi",t:"mc",lv:2,q:"Method dict mengambil semua kunci:",o:["keys()","all()","index()","names()"],a:0,e:"d.keys(); nilai: d.values(); pasangan: d.items()."},
{k:"koleksi",t:"mc",lv:2,q:"d.get(\"x\", 0) berguna karena…",o:["lebih cepat","tidak error jika kunci tak ada (kembalikan default)","menghapus x","mengurutkan"],a:1,e:"get mengembalikan default alih-alih KeyError."},
{k:"koleksi",t:"mc",lv:2,q:"t=(1,2,3); t[0]=9 menghasilkan…",o:["(9,2,3)","error","(1,9,3)","9"],a:1,e:"Tuple tidak bisa diubah → TypeError."},
{k:"koleksi",t:"mc",lv:3,q:"Cara loop kunci dan nilai dict sekaligus:",o:["for k,v in d.items():","for k,v in d:","for d.pairs():","loop d:"],a:0,e:"items() menghasilkan pasangan (kunci, nilai)."},
{k:"koleksi",t:"mc",lv:3,q:"len({\"a\":1,\"b\":2}) menghasilkan…",o:["1","2","3","4"],a:1,e:"len dict = jumlah pasangan."},
{k:"koleksi",t:"mc",lv:3,q:"Menghapus kunci \"x\" dari dict d:",o:["d.remove(\"x\")","del d[\"x\"]","d.delete(\"x\")","d - \"x\""],a:1,e:"del d[\"kunci\"] atau d.pop(\"kunci\")."},
{k:"koleksi",t:"mc",lv:3,q:"{1,2} & {2,3} (irisan set) menghasilkan…",o:["{1,2,3}","{2}","{1,3}","error"],a:1,e:"& = irisan; | = gabungan; - = selisih."},
{k:"koleksi",t:"is",lv:2,q:"\"kota\" ____ d mengecek apakah kunci ada di dict",a:["in"],e:"Operator in mengecek keberadaan kunci."},
{k:"koleksi",t:"is",lv:3,q:"Fungsi mengubah list menjadi tuple: ____([1,2])",a:["tuple"],e:"tuple() mengonversi iterable ke tuple."},
// ---- BAB 8: fungsi (15) ----
{k:"fungsi",t:"mc",lv:1,q:"Kata kunci membuat fungsi:",o:["function","func","def","fn"],a:2,e:"def nama_fungsi():"},
{k:"fungsi",t:"mc",lv:1,q:"Kata kunci mengembalikan nilai dari fungsi:",o:["give","return","back","out"],a:1,e:"return mengirim hasil ke pemanggil."},
{k:"fungsi",t:"mc",lv:1,q:"def sapa(nama): … . nama disebut…",o:["argumen","parameter","variabel global","atribut"],a:1,e:"Parameter di definisi; argumen saat pemanggilan."},
{k:"fungsi",t:"mc",lv:2,q:"def f(x): return x*2. Hasil print(f(4)):",o:["4","8","x*2","error"],a:1,e:"f(4) mengembalikan 8."},
{k:"fungsi",t:"mc",lv:2,q:"Fungsi tanpa return mengembalikan…",o:["0","\"\"","None","error"],a:2,e:"Tanpa return, hasilnya None."},
{k:"fungsi",t:"mc",lv:2,q:"def f(nama=\"Tamu\"): … . \"Tamu\" adalah…",o:["parameter wajib","nilai default","konstanta","global"],a:1,e:"Nilai default dipakai jika argumen tidak diberikan."},
{k:"fungsi",t:"mc",lv:2,q:"Memanggil f(b=2, a=1) memakai…",o:["positional argument","keyword argument","default","lambda"],a:1,e:"Keyword argument menyebut nama parameternya."},
{k:"fungsi",t:"mc",lv:2,q:"Variabel yang dibuat di dalam fungsi bersifat…",o:["global","lokal","statis","permanen"],a:1,e:"Variabel lokal hanya hidup di dalam fungsinya."},
{k:"fungsi",t:"mc",lv:3,q:"lambda x: x+1 adalah…",o:["fungsi anonim satu ekspresi","loop","class","error"],a:0,e:"lambda membuat fungsi kecil tanpa nama."},
{k:"fungsi",t:"mc",lv:3,q:"*args pada parameter menampung…",o:["argumen posisi bebas (tuple)","keyword bebas (dict)","satu argumen","file"],a:0,e:"*args → tuple; **kwargs → dict keyword."},
{k:"fungsi",t:"mc",lv:3,q:"Fungsi bisa mengembalikan lebih dari satu nilai lewat…",o:["tidak bisa","return a, b (tuple)","dua return","global"],a:1,e:"return a, b mengembalikan tuple yang bisa di-unpack."},
{k:"fungsi",t:"mc",lv:3,q:"Fungsi yang memanggil dirinya sendiri disebut…",o:["loop","rekursif","lambda","callback"],a:1,e:"Rekursi butuh kondisi berhenti (base case)."},
{k:"fungsi",t:"mc",lv:3,q:"Teks dokumentasi di baris pertama fungsi disebut…",o:["komentar","docstring","header","meta"],a:1,e:"Docstring ditulis dengan \"\"\" \"\"\" dan bisa dibaca help()."},
{k:"fungsi",t:"is",lv:2,q:"Kata kunci mengakses variabel global di dalam fungsi: ____ skor",a:["global"],e:"global memberi akses tulis ke variabel global."},
{k:"fungsi",t:"is",lv:3,q:"Fungsi anonim dibuat dengan kata kunci ____",a:["lambda"],e:"lambda x: x*2"},
// ---- BAB 9: error & file (12) ----
{k:"error",t:"mc",lv:1,q:"Blok penanganan error di Python:",o:["try/catch","try/except","do/rescue","if/error"],a:1,e:"Python memakai try…except."},
{k:"error",t:"mc",lv:2,q:"int(\"abc\") memunculkan error jenis…",o:["TypeError","ValueError","KeyError","NameError"],a:1,e:"Nilai tidak valid untuk konversi → ValueError."},
{k:"error",t:"mc",lv:2,q:"Mengakses variabel yang belum dibuat menimbulkan…",o:["ValueError","NameError","IndexError","KeyError"],a:1,e:"NameError: variabel tidak dikenal."},
{k:"error",t:"mc",lv:2,q:"a=[1,2]; a[5] menimbulkan…",o:["IndexError","KeyError","ValueError","None"],a:0,e:"Indeks di luar jangkauan → IndexError."},
{k:"error",t:"mc",lv:2,q:"Blok yang SELALU dijalankan (ada error ataupun tidak):",o:["else","finally","always","end"],a:1,e:"finally cocok untuk bersih-bersih (menutup file, dll)."},
{k:"error",t:"mc",lv:3,q:"Cara membuka file yang otomatis menutup:",o:["open(f).close()","with open(f) as x:","read(f)","auto open(f)"],a:1,e:"with … as menutup file otomatis."},
{k:"error",t:"mc",lv:3,q:"Mode \"w\" pada open() berarti…",o:["baca","tulis (timpa isi lama)","tambah di akhir","baca-tulis"],a:1,e:"\"r\" baca, \"w\" tulis-timpa, \"a\" append."},
{k:"error",t:"mc",lv:3,q:"Mode untuk menambah teks di akhir file tanpa menghapus:",o:["\"r\"","\"w\"","\"a\"","\"x\""],a:2,e:"\"a\" = append."},
{k:"error",t:"mc",lv:3,q:"Melempar error secara manual memakai…",o:["throw","raise","error()","panic"],a:1,e:"raise ValueError(\"pesan\")."},
{k:"error",t:"mc",lv:3,q:"f.read() vs f.readlines():",o:["sama","read=1 string utuh, readlines=list per baris","readlines lebih cepat","read per baris"],a:1,e:"read() seluruh isi; readlines() list baris."},
{k:"error",t:"is",lv:2,q:"try: x=1/0 → except ____Error: menangkap pembagian nol",a:["zerodivision"],e:"1/0 memunculkan ZeroDivisionError."},
{k:"error",t:"is",lv:3,q:"Kata kunci placeholder blok kosong agar tidak error: ____",a:["pass"],e:"pass = tidak melakukan apa-apa."},
// ---- BAB 10: oop (13) ----
{k:"oop",t:"mc",lv:2,q:"Kata kunci membuat class:",o:["object","class","struct","type"],a:1,e:"class Mahasiswa:"},
{k:"oop",t:"mc",lv:2,q:"Method __init__ berperan sebagai…",o:["destructor","konstruktor (inisialisasi objek)","import","loop"],a:1,e:"__init__ dipanggil otomatis saat objek dibuat."},
{k:"oop",t:"mc",lv:2,q:"Parameter self merujuk pada…",o:["class","objek/instance yang dipakai","modul","global"],a:1,e:"self = instance yang sedang memanggil method."},
{k:"oop",t:"mc",lv:2,q:"m = Mahasiswa(). m disebut…",o:["class","objek/instance","method","atribut"],a:1,e:"Objek adalah hasil 'cetakan' dari class."},
{k:"oop",t:"mc",lv:2,q:"self.nama = nama di dalam __init__ membuat…",o:["variabel lokal","atribut objek","fungsi","class baru"],a:1,e:"Atribut melekat pada tiap objek."},
{k:"oop",t:"mc",lv:3,q:"class Dosen(Pegawai): berarti…",o:["Dosen berisi Pegawai","Dosen mewarisi Pegawai (inheritance)","keduanya sama","error"],a:1,e:"Inheritance: Dosen mendapat atribut & method Pegawai."},
{k:"oop",t:"mc",lv:3,q:"Fungsi memanggil konstruktor class induk:",o:["parent()","super().__init__()","base()","init.parent()"],a:1,e:"super() mengakses class induk."},
{k:"oop",t:"mc",lv:3,q:"Method dengan nama sama tapi perilaku beda di class anak disebut…",o:["overloading","overriding","inheritance","encapsulation"],a:1,e:"Override: class anak menimpa method induk."},
{k:"oop",t:"mc",lv:3,q:"Atribut dengan awalan __ (dua underscore) bersifat…",o:["publik","privat (name mangling)","statis","global"],a:1,e:"__x menandakan privat — bagian dari enkapsulasi."},
{k:"oop",t:"mc",lv:3,q:"isinstance(x, Mahasiswa) mengecek…",o:["x class atau bukan","apakah x objek dari Mahasiswa","jumlah objek","nama x"],a:1,e:"isinstance mengecek tipe/kelas objek."},
{k:"oop",t:"mc",lv:3,q:"Prinsip menyembunyikan detail internal class disebut…",o:["inheritance","polymorphism","enkapsulasi","abstraksi total"],a:2,e:"Enkapsulasi membungkus data + method dan membatasi akses."},
{k:"oop",t:"is",lv:2,q:"Parameter pertama setiap method instance: ____",a:["self"],e:"self selalu parameter pertama method."},
{k:"oop",t:"is",lv:3,q:"Method spesial dipanggil print(objek): __ ____ __",a:["str"],e:"__str__ menentukan representasi teks objek."},
// ---- BAB 11: modul (10) ----
{k:"modul",t:"mc",lv:1,q:"Kata kunci memuat modul:",o:["include","import","using","load"],a:1,e:"import math"},
{k:"modul",t:"mc",lv:2,q:"Modul standar untuk angka acak:",o:["math","random","numpy","rand"],a:1,e:"random.randint(a,b) contohnya."},
{k:"modul",t:"mc",lv:2,q:"from math import sqrt memungkinkan…",o:["sqrt() langsung tanpa math.","semua fungsi math","error","import ganda"],a:0,e:"from…import mengambil fungsi tertentu saja."},
{k:"modul",t:"mc",lv:2,q:"import numpy as np. \"np\" disebut…",o:["variabel","alias","fungsi","class"],a:1,e:"as memberi nama singkat (alias)."},
{k:"modul",t:"mc",lv:2,q:"math.sqrt(16) menghasilkan…",o:["4.0","8","256","error"],a:0,e:"sqrt = akar kuadrat, hasil float."},
{k:"modul",t:"mc",lv:3,q:"Perintah memasang paket eksternal:",o:["python get","pip install nama","import install","apt python"],a:1,e:"pip adalah package manager Python."},
{k:"modul",t:"mc",lv:3,q:"random.randint(1, 6) menghasilkan…",o:["1-5","1-6 (keduanya termasuk)","0-6","0-5"],a:1,e:"randint inklusif di kedua ujung — cocok untuk dadu."},
{k:"modul",t:"mc",lv:3,q:"if __name__ == \"__main__\": berguna untuk…",o:["import cepat","kode hanya jalan saat file dieksekusi langsung","loop utama","error handling"],a:1,e:"Blok ini tidak ikut jalan saat file di-import modul lain."},
{k:"modul",t:"is",lv:2,q:"Modul standar berisi sqrt, pi, floor: import ____",a:["math"],e:"math berisi fungsi matematika."},
{k:"modul",t:"is",lv:3,q:"Fungsi mengacak urutan list: random.____(daftar)",a:["shuffle"],e:"random.shuffle mengacak list di tempat."},
];

const MATERI_PYTHON = [
{k:"dasar",judul:"Dasar: Variabel, Tipe Data & Input/Output",materi:`<p>Python menyimpan data dalam <b>variabel</b> — tanpa perlu menulis tipenya:</p><pre><code>nama = "Ryan"      # str (teks)
umur = 22          # int (bulat)
ipk = 3.75         # float (desimal)
lulus = True       # bool</code></pre><p><b>print()</b> menampilkan output, <b>input()</b> menerima ketikan (selalu str, konversi dengan <code>int()</code>/<code>float()</code>):</p><pre><code>umur = int(input("Umur: "))
print("Umurmu", umur)</code></pre><p>Komentar diawali <code>#</code>. Nama variabel tidak boleh diawali angka. Nilai kosong ditulis <code>None</code>.</p>`},
{k:"operator",judul:"Operator: Aritmetika, Perbandingan & Logika",materi:`<p>Aritmetika: <code>+ - * /</code>, lalu tiga yang khas Python:</p><pre><code>2 ** 3   # pangkat  = 8
10 // 3  # bagi bulat = 3
10 % 3   # sisa bagi  = 1</code></pre><p>Perbandingan menghasilkan bool: <code>== != &gt; &lt; &gt;= &lt;=</code>. Ingat: <code>=</code> memberi nilai, <code>==</code> membandingkan.</p><p>Logika memakai kata: <code>and</code> (semua benar), <code>or</code> (salah satu benar), <code>not</code> (membalik). Singkatan: <code>x += 3</code> sama dengan <code>x = x + 3</code>.</p>`},
{k:"string",judul:"String: Indexing, Slicing & Method",materi:`<p>String adalah deretan karakter berindeks mulai <b>0</b>; indeks negatif dihitung dari belakang:</p><pre><code>s = "informatika"
s[0]    # "i"
s[-1]   # "a"
s[0:4]  # "info"  (slicing: awal:akhir, akhir tak termasuk)</code></pre><p>Method penting: <code>upper() lower() strip() replace(a,b) split(",") count(x)</code> dan <code>len(s)</code> untuk panjang. Menyisipkan variabel paling rapi dengan <b>f-string</b>:</p><pre><code>print(f"Halo {nama}, umurmu {umur}")</code></pre>`},
{k:"kondisi",judul:"Percabangan: if / elif / else",materi:`<p>Python menentukan blok kode dengan <b>indentasi</b> (4 spasi), bukan kurung kurawal:</p><pre><code>if nilai >= 80:
    print("A")
elif nilai >= 70:
    print("B")
else:
    print("C")</code></pre><p>Nilai yang dianggap <b>False</b> (falsy): <code>0</code>, <code>""</code>, <code>[]</code>, <code>None</code>. Ternary satu baris: <code>status = "Lulus" if n >= 75 else "Gagal"</code>. Untuk None gunakan <code>is not None</code>.</p>`},
{k:"loop",judul:"Perulangan: for, while, range",materi:`<p><b>for</b> mengulang tiap elemen; <b>range(awal, akhir, langkah)</b> membuat deret (akhir tak termasuk):</p><pre><code>for i in range(3):       # 0 1 2
    print(i)
for i in range(2, 10, 3): # 2 5 8
    ...</code></pre><p><b>while</b> mengulang selama kondisi True — pastikan kondisinya bisa berubah agar tidak infinite loop. <code>break</code> menghentikan loop, <code>continue</code> melompati satu iterasi. Bonus mahir: <code>enumerate()</code> memberi indeks+nilai, <code>zip()</code> memasangkan dua list.</p>`},
{k:"list",judul:"List: Struktur Data Andalan",materi:`<p>List: koleksi terurut yang bisa diubah (mutable), ditulis <code>[ ]</code>:</p><pre><code>a = [3, 1, 2]
a.append(9)   # tambah di akhir
a.remove(1)   # hapus nilai 1
a.sort()      # urutkan
len(a), sum(a), max(a), min(a)</code></pre><p>Indeks & slicing sama seperti string: <code>a[0]</code>, <code>a[-1]</code>, <code>a[1:3]</code>. <b>Hati-hati:</b> <code>b = a</code> menunjuk list yang sama — pakai <code>a.copy()</code>. Cara jenius membuat list: <b>list comprehension</b>:</p><pre><code>genap = [x for x in range(10) if x % 2 == 0]</code></pre>`},
{k:"koleksi",judul:"Dict, Tuple & Set",materi:`<p><b>Dict</b> menyimpan pasangan kunci→nilai:</p><pre><code>mhs = {"nama": "Ryan", "nim": "220103091"}
mhs["nama"]          # akses
mhs["kota"] = "Solo" # tambah
mhs.get("ipk", 0)    # aman, ada default
for k, v in mhs.items(): ...</code></pre><p><b>Tuple</b> <code>(1, 2)</code>: terurut tapi <i>tidak bisa diubah</i> — cocok untuk data tetap. <b>Set</b> <code>{1, 2, 3}</code>: tanpa urutan, otomatis tanpa duplikat; operasi: <code>&amp;</code> irisan, <code>|</code> gabungan.</p>`},
{k:"fungsi",judul:"Fungsi: def, return, Parameter",materi:`<p>Fungsi membungkus kode agar bisa dipakai ulang:</p><pre><code>def luas(p, l=1):        # l punya nilai default
    return p * l

print(luas(4, 5))        # 20
print(luas(p=4))         # keyword argument</code></pre><p>Tanpa <code>return</code>, fungsi mengembalikan <code>None</code>. Variabel di dalam fungsi bersifat <b>lokal</b>. Bisa mengembalikan banyak nilai: <code>return a, b</code>. Fungsi mini satu baris: <code>kali2 = lambda x: x * 2</code>. <code>*args</code> menampung argumen bebas.</p>`},
{k:"error",judul:"Error Handling & File",materi:`<p>Tangani error agar program tidak crash:</p><pre><code>try:
    n = int(input("Angka: "))
except ValueError:
    print("Itu bukan angka!")
finally:
    print("Selalu jalan")</code></pre><p>Error umum: <b>ValueError</b> (nilai salah), <b>NameError</b> (variabel tak dikenal), <b>IndexError</b>, <b>ZeroDivisionError</b>. Membaca/menulis file paling aman dengan <code>with</code> (auto-close):</p><pre><code>with open("data.txt", "r") as f:   # "w" tulis, "a" tambah
    isi = f.read()</code></pre>`},
{k:"oop",judul:"OOP: Class, Objek & Inheritance",materi:`<p>Class = cetakan; objek = hasil cetakannya:</p><pre><code>class Mahasiswa:
    def __init__(self, nama):   # konstruktor
        self.nama = nama        # atribut
    def sapa(self):
        return f"Halo, {self.nama}"

m = Mahasiswa("Ryan")   # objek
print(m.sapa())</code></pre><p><code>self</code> merujuk objek yang sedang dipakai. <b>Inheritance</b>: <code>class Asisten(Mahasiswa):</code> mewarisi semuanya; <code>super().__init__()</code> memanggil konstruktor induk; method bisa di-<i>override</i>. Awalan <code>__</code> menandakan atribut privat (enkapsulasi).</p>`},
{k:"modul",judul:"Modul & Ekosistem Python",materi:`<p>Modul = kumpulan kode siap pakai:</p><pre><code>import math
math.sqrt(16)            # 4.0

from random import randint
randint(1, 6)            # dadu: 1-6

import numpy as np       # alias</code></pre><p>Paket eksternal dipasang lewat terminal: <code>pip install nama_paket</code>. Idiom penting di file yang bisa di-import: <code>if __name__ == "__main__":</code> — blok itu hanya jalan saat file dieksekusi langsung.</p>`},
];
