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
{k:"dasar",judul:"Dasar: Variabel, Tipe Data & Input/Output",materi:`
<h4>Python itu apa?</h4>
<p><b>Python</b> adalah bahasa pemrograman yang terkenal paling mudah dibaca. Kodenya mirip kalimat bahasa Inggris sederhana, jadi sering dipilih sebagai bahasa pertama. Python dipakai untuk analisis data, kecerdasan buatan, otomatisasi pekerjaan kantor, sampai sistem ERP seperti Odoo.</p>
<p>File Python berakhiran <b><code>.py</code></b>, misalnya <code>latihan.py</code>. Program dijalankan baris demi baris dari atas ke bawah.</p>
<div class="catatan">Tempat mencoba tanpa memasang apa pun: buka <b>Google Colab</b> (colab.research.google.com) atau situs <i>Python Tutor</i>, ketik kode, lalu tekan tombol putar.</div>
<h4>Menampilkan sesuatu: print()</h4>
<pre><code>print("Halo, dunia!")
print(2 + 3)</code></pre>
<p><code>print()</code> artinya "<b>tampilkan</b> ke layar". Apa pun di dalam kurung akan ditampilkan. Teks harus diapit tanda kutip; angka tidak.</p>
<h4>Variabel = kotak berlabel</h4>
<pre><code>nama = "Ryan"
umur = 22
print(nama, umur)     # Ryan 22</code></pre>
<p>Bayangkan kotak yang diberi label <code>nama</code> dan diisi tulisan "Ryan". Tanda <code>=</code> artinya <b>"isi dengan"</b>, bukan "sama dengan". Di Python kamu tidak perlu menulis jenis datanya; Python menebaknya sendiri dari isinya.</p>
<p>Aturan nama variabel:</p>
<ul><li>Boleh huruf, angka, dan garis bawah <code>_</code>, misalnya <code>nilai_akhir</code>, <code>data2</code>.</li><li><b>Tidak boleh diawali angka</b> (<code>2data</code> salah) dan tidak boleh ada spasi.</li><li>Huruf besar dan kecil dibedakan: <code>Nama</code> dan <code>nama</code> adalah dua variabel berbeda.</li></ul>
<p><code>#</code> menandai <b>komentar</b>, catatan untuk manusia yang diabaikan Python.</p>
<h4>Jenis data (tipe data)</h4>
<table class="mini-pivot"><tr><th>Tipe</th><th>Nama lengkap</th><th>Contoh</th><th>Artinya</th></tr>
<tr><td><code>str</code></td><td>string</td><td><code>"Ryan"</code></td><td>teks, selalu diapit kutip</td></tr>
<tr><td><code>int</code></td><td>integer</td><td><code>22</code></td><td>bilangan bulat</td></tr>
<tr><td><code>float</code></td><td>floating point</td><td><code>3.75</code></td><td>bilangan desimal (pakai <b>titik</b>, bukan koma)</td></tr>
<tr><td><code>bool</code></td><td>boolean</td><td><code>True</code>, <code>False</code></td><td>benar/salah (huruf depan kapital)</td></tr>
<tr><td><code>NoneType</code></td><td>–</td><td><code>None</code></td><td>"tidak ada nilai", kosong</td></tr></table>
<p>Cek tipe sebuah nilai dengan <code>type()</code>:</p>
<pre><code>type(3.14)    # &lt;class 'float'&gt;
type("5")     # &lt;class 'str'&gt;  ← ada kutip, jadi teks
type(True)    # &lt;class 'bool'&gt;</code></pre>
<h4>Menerima ketikan: input()</h4>
<pre><code>nama = input("Siapa namamu? ")
print("Halo", nama)</code></pre>
<p><code>input()</code> menampilkan pertanyaan, lalu <b>menunggu pengguna mengetik</b> dan menekan Enter. Penting: hasil <code>input()</code> <b>selalu berupa teks (str)</b>, walaupun yang diketik angka. Ketikan "25" adalah teks <code>"25"</code>, bukan angka 25.</p>
<h4>Mengubah tipe (konversi)</h4>
<pre><code>umur = int(input("Umur: "))   # teks "25" jadi angka 25
harga = float("3.5")          # teks jadi desimal 3.5
teks = str(100)               # angka jadi teks "100"
int(7.9)                      # 7  ← dipotong, BUKAN dibulatkan</code></pre>
<ul><li><code>int()</code> = jadikan bilangan bulat. Dari desimal, bagian belakang koma <b>dibuang</b> (7.9 jadi 7).</li><li><code>float()</code> = jadikan desimal.</li><li><code>str()</code> = jadikan teks.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat program yang menanyakan tahun lahir, mengubahnya dengan <code>int()</code>, lalu mencetak umurmu di tahun 2026.</div>
`},
{k:"operator",judul:"Operator: Aritmetika, Perbandingan & Logika",materi:`
<h4>Operator = tanda hitung dan bandingkan</h4>
<h4>Aritmetika</h4>
<table class="mini-pivot"><tr><th>Operator</th><th>Arti</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>+</code></td><td>tambah</td><td><code>7 + 2</code></td><td>9</td></tr>
<tr><td><code>-</code></td><td>kurang</td><td><code>7 - 2</code></td><td>5</td></tr>
<tr><td><code>*</code></td><td>kali</td><td><code>7 * 2</code></td><td>14</td></tr>
<tr><td><code>/</code></td><td>bagi (hasil selalu desimal)</td><td><code>7 / 2</code></td><td>3.5</td></tr>
<tr><td><code>//</code></td><td><b>bagi bulat</b> (buang sisa)</td><td><code>10 // 3</code></td><td>3</td></tr>
<tr><td><code>%</code></td><td><b>sisa bagi</b> (modulo)</td><td><code>10 % 3</code></td><td>1</td></tr>
<tr><td><code>**</code></td><td><b>pangkat</b></td><td><code>2 ** 3</code></td><td>8</td></tr></table>
<p>Cara memahami <code>//</code> dan <code>%</code>: 10 kue dibagi ke 3 anak. Tiap anak dapat <b>3</b> kue (<code>10 // 3</code>), dan <b>sisa 1</b> kue (<code>10 % 3</code>).</p>
<p><code>2 ** 3</code> artinya 2 × 2 × 2 = 8.</p>
<h4>Cara singkat mengubah variabel</h4>
<pre><code>x = 5
x += 3     # sama dengan x = x + 3  → 8
x -= 1     # x = x - 1  → 7
x *= 2     # x = x * 2  → 14</code></pre>
<h4>Membandingkan</h4>
<p>Hasil perbandingan selalu <code>True</code> atau <code>False</code>.</p>
<table class="mini-pivot"><tr><th>Operator</th><th>Arti</th></tr>
<tr><td><code>==</code></td><td>sama dengan</td></tr>
<tr><td><code>!=</code></td><td>tidak sama dengan</td></tr>
<tr><td><code>&gt;</code> / <code>&lt;</code></td><td>lebih besar / lebih kecil</td></tr>
<tr><td><code>&gt;=</code> / <code>&lt;=</code></td><td>lebih besar atau sama / lebih kecil atau sama</td></tr></table>
<div class="catatan">Perhatikan bedanya: satu <code>=</code> untuk <b>mengisi</b> variabel (<code>x = 5</code>), dua <code>==</code> untuk <b>menanyakan</b> apakah sama (<code>x == 5</code>).</div>
<pre><code>7 == "7"   # False  ← angka 7 dan teks "7" berbeda tipe</code></pre>
<h4>Logika: and, or, not</h4>
<p>Python memakai kata, bukan simbol:</p>
<ul><li><code>and</code> = <b>dan</b>: True kalau <b>semua</b> benar. <code>5 &gt; 3 and 2 &gt; 4</code> → False (yang kedua salah).</li><li><code>or</code> = <b>atau</b>: True kalau <b>salah satu</b> benar. <code>5 &gt; 3 or 2 &gt; 4</code> → True.</li><li><code>not</code> = <b>bukan</b>: membalik. <code>not True</code> → False.</li></ul>
<h4>Cek keanggotaan: in</h4>
<pre><code>"a" in ["a", "b"]     # True
"z" in "python"       # False</code></pre>
<p><code>in</code> bertanya "apakah ada <b>di dalam</b>?".</p>
<div class="praktik"><b>Coba sendiri:</b> hitung dengan Python: berapa kotak isi 12 yang dibutuhkan untuk 100 donat, dan berapa donat sisanya? (Petunjuk: <code>//</code> dan <code>%</code>.)</div>
`},
{k:"string",judul:"String: Indexing, Slicing & Method",materi:`
<h4>String = teks</h4>
<p><b>String</b> (<code>str</code>) adalah deretan karakter (huruf, angka, spasi, tanda baca) yang diapit kutip: <code>"halo"</code> atau <code>'halo'</code>.</p>
<h4>Menggabung dan mengulang</h4>
<pre><code>"a" + "b"     # "ab"     ← + menggabung teks
"ha" * 3      # "hahaha" ← * mengulang teks
len("Python") # 6        ← len = panjang (jumlah karakter)</code></pre>
<h4>Indeks: nomor setiap huruf</h4>
<p>Setiap huruf punya nomor urut, <b>dimulai dari 0</b>:</p>
<pre><code>s = "koding"
#    k o d i n g
#    0 1 2 3 4 5
#   -6-5-4-3-2-1
s[0]    # "k"   huruf pertama
s[-1]   # "g"   huruf terakhir (minus = dihitung dari belakang)</code></pre>
<p>Kenapa dari 0? Anggap indeks sebagai "berapa langkah dari awal". Huruf pertama berjarak 0 langkah.</p>
<h4>Slicing: memotong sebagian teks</h4>
<pre><code>s = "informatika"
s[0:4]   # "info"
s[2:]    # "formatika"  (dari indeks 2 sampai habis)
s[:3]    # "inf"        (dari awal sampai sebelum 3)</code></pre>
<p>Pola <code>s[awal:akhir]</code> mengambil dari <code>awal</code> sampai <b>sebelum</b> <code>akhir</code>. Jadi <code>s[0:4]</code> mengambil indeks 0, 1, 2, 3 (empat huruf). Ingat: angka akhir <b>tidak ikut</b>.</p>
<h4>Method string yang sering dipakai</h4>
<p><i>Method</i> adalah perintah yang menempel pada nilai, dipanggil dengan titik.</p>
<table class="mini-pivot"><tr><th>Kode</th><th>Hasil</th><th>Gunanya</th></tr>
<tr><td><code>"Halo".upper()</code></td><td><code>"HALO"</code></td><td>huruf besar semua</td></tr>
<tr><td><code>"Halo".lower()</code></td><td><code>"halo"</code></td><td>huruf kecil semua</td></tr>
<tr><td><code>"  hai  ".strip()</code></td><td><code>"hai"</code></td><td>buang spasi di awal dan akhir</td></tr>
<tr><td><code>"kopi".replace("k", "t")</code></td><td><code>"topi"</code></td><td>ganti teks</td></tr>
<tr><td><code>"a,b,c".split(",")</code></td><td><code>["a", "b", "c"]</code></td><td>pecah teks jadi list</td></tr>
<tr><td><code>"-".join(["a", "b"])</code></td><td><code>"a-b"</code></td><td>gabung list jadi teks, dengan penyambung <code>-</code></td></tr>
<tr><td><code>"python".count("o")</code></td><td><code>1</code></td><td>hitung kemunculan</td></tr>
<tr><td><code>"belajar".startswith("bel")</code></td><td><code>True</code></td><td>apakah diawali "bel"?</td></tr></table>
<p>Method seperti <code>upper()</code> <b>tidak mengubah</b> teks aslinya; ia membuat teks baru. Simpan hasilnya kalau perlu: <code>nama = nama.upper()</code>.</p>
<h4>f-string: menyisipkan variabel ke teks</h4>
<pre><code>nama = "Ryan"
umur = 22
print(f"Halo {nama}, umurmu {umur} tahun")
# Halo Ryan, umurmu 22 tahun</code></pre>
<p>Tambahkan huruf <code>f</code> sebelum kutip, lalu tulis nama variabel di dalam kurung kurawal <code>{ }</code>. Ini cara paling rapi menyusun kalimat dari data.</p>
<div class="praktik"><b>Coba sendiri:</b> dari <code>email = "rina.putri@gmail.com"</code>, ambil nama penggunanya (bagian sebelum <code>@</code>) dengan <code>split("@")</code>, lalu cetak dengan huruf kapital.</div>
`},
{k:"kondisi",judul:"Percabangan: if / elif / else",materi:`
<h4>Program yang bisa memilih</h4>
<p>Percabangan membuat program mengambil keputusan, seperti "kalau nilai ≥ 80 dapat A, kalau tidak…".</p>
<pre><code>nilai = 78
if nilai &gt;= 80:
    print("A")
elif nilai &gt;= 70:
    print("B")
else:
    print("C")</code></pre>
<ul><li><code>if syarat:</code> = "<b>jika</b> syarat benar, jalankan blok di bawahnya". Jangan lupa <b>titik dua</b> <code>:</code> di akhir baris.</li><li><code>elif</code> (singkatan <i>else if</i>) = "<b>kalau tidak, jika</b> …". Boleh lebih dari satu.</li><li><code>else:</code> = "<b>selain itu</b>", dijalankan kalau semua syarat di atas salah.</li><li>Python memeriksa dari atas dan <b>berhenti di syarat pertama yang benar</b>. 78 tidak ≥ 80 tapi ≥ 70, jadi tercetak "B".</li></ul>
<h4>Indentasi itu wajib</h4>
<p>Baris yang <b>menjorok ke dalam</b> (biasanya 4 spasi atau satu Tab) adalah isi dari <code>if</code>. Di bahasa lain blok ditandai kurung kurawal <code>{ }</code>; di Python, <b>jarak menjorok inilah penandanya</b>. Salah menjorok = error (<code>IndentationError</code>) atau program jalan dengan cara yang tidak kamu maksud.</p>
<h4>Menggabungkan syarat</h4>
<pre><code>if umur &gt;= 17 and punya_ktp:
    print("Boleh membuat SIM")</code></pre>
<p>Blok ini jalan hanya kalau <b>kedua</b> syarat benar.</p>
<h4>Nilai yang dianggap "salah" (falsy)</h4>
<p>Di dalam <code>if</code>, nilai-nilai ini dianggap False: <code>0</code>, <code>""</code> (teks kosong), <code>[]</code> (list kosong), <code>{}</code>, dan <code>None</code>. Jadi <code>bool("")</code> hasilnya <code>False</code>. Ini berguna untuk mengecek "apakah ada isinya?":</p>
<pre><code>if keranjang:            # True kalau keranjang tidak kosong
    print("Lanjut bayar")</code></pre>
<h4>if satu baris (ternary)</h4>
<pre><code>status = "Lulus" if nilai &gt;= 75 else "Gagal"</code></pre>
<p>Bacanya: "status = Lulus <b>jika</b> nilai ≥ 75, <b>kalau tidak</b> Gagal".</p>
<h4>Mengecek None</h4>
<p>Untuk memeriksa apakah variabel kosong (<code>None</code>), pakai <code>is</code> / <code>is not</code>:</p>
<pre><code>if data is not None:
    print("Ada datanya")</code></pre>
<p>Pembanding "tidak sama dengan" untuk nilai biasa adalah <code>!=</code>.</p>
<div class="praktik"><b>Coba sendiri:</b> buat program yang meminta suhu (angka), lalu mencetak "Dingin" (&lt; 20), "Sejuk" (20–29), atau "Panas" (≥ 30).</div>
`},
{k:"loop",judul:"Perulangan: for, while, range",materi:`
<h4>Perulangan = mengulang pekerjaan</h4>
<p>Komputer tidak pernah bosan. Mau mencetak 1.000 sertifikat atau memeriksa 10.000 baris data, cukup tulis perintahnya sekali dalam <b>loop</b>.</p>
<h4>for: ulangi untuk setiap isi</h4>
<pre><code>for huruf in "abc":
    print(huruf)
# a
# b
# c</code></pre>
<p>Bacanya: "<b>untuk setiap</b> <code>huruf</code> <b>di dalam</b> "abc", cetak hurufnya". Variabel <code>huruf</code> berganti isi di setiap putaran. <code>for</code> bisa dipakai pada teks, list, dan deretan angka.</p>
<h4>range(): membuat deretan angka</h4>
<pre><code>for i in range(3):
    print(i)        # 0, 1, 2</code></pre>
<table class="mini-pivot"><tr><th>Penulisan</th><th>Hasil</th><th>Penjelasan</th></tr>
<tr><td><code>range(3)</code></td><td>0, 1, 2</td><td>mulai 0, sampai <b>sebelum</b> 3</td></tr>
<tr><td><code>range(1, 5)</code></td><td>1, 2, 3, 4</td><td>mulai 1, sampai sebelum 5</td></tr>
<tr><td><code>range(2, 10, 3)</code></td><td>2, 5, 8</td><td>mulai 2, lompat 3, sampai sebelum 10</td></tr></table>
<p>Angka akhir <b>tidak pernah ikut</b>, sama seperti slicing.</p>
<p>Contoh menjumlah:</p>
<pre><code>total = 0
for i in range(1, 4):   # i = 1, 2, 3
    total += i
print(total)            # 6</code></pre>
<h4>while: ulangi selama syarat benar</h4>
<pre><code>saldo = 100
while saldo &gt; 0:
    saldo -= 30
    print(saldo)     # 70, 40, 10, -20</code></pre>
<p><code>while</code> terus mengulang <b>selama</b> syaratnya <code>True</code>. Pastikan ada sesuatu di dalam loop yang <b>mengubah</b> syarat itu. Kalau tidak, loop berjalan selamanya (<i>infinite loop</i>), misalnya <code>while True:</code> tanpa <code>break</code>, atau lupa mengurangi saldo. Hentikan program yang macet dengan <b>Ctrl + C</b>.</p>
<h4>break dan continue</h4>
<pre><code>for i in range(5):
    if i == 3:
        break
    print(i)          # 0, 1, 2</code></pre>
<ul><li><code>break</code> = <b>hentikan</b> loop sekarang juga. Begitu i = 3, loop berhenti, jadi hanya 0, 1, 2 yang tercetak.</li><li><code>continue</code> = <b>lewati</b> sisa putaran ini, langsung ke putaran berikutnya.</li></ul>
<h4>Loop di dalam loop</h4>
<pre><code>for i in range(2):
    for j in range(3):
        print(i, j)</code></pre>
<p>Loop dalam berjalan <b>penuh</b> untuk setiap putaran loop luar: 2 × 3 = <b>6 kali</b>. Seperti jam: jarum menit berputar penuh untuk setiap satu jam.</p>
<h4>Bonus: enumerate() dan zip()</h4>
<pre><code>for no, nama in enumerate(["Rina", "Budi"]):
    print(no, nama)          # 0 Rina, 1 Budi

list(zip([1, 2], ["a", "b"]))   # [(1, 'a'), (2, 'b')]</code></pre>
<ul><li><code>enumerate()</code> memberi <b>nomor urut sekaligus nilainya</b>.</li><li><code>zip()</code> <b>memasangkan</b> dua list seperti ritsleting: isi pertama dengan isi pertama, kedua dengan kedua.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> cetak tabel perkalian 7 (7 × 1 sampai 7 × 10) dengan <code>for</code> dan <code>range</code>.</div>
`},
{k:"list",judul:"List: Struktur Data Andalan",materi:`
<h4>List = daftar berisi banyak nilai</h4>
<p>Bayangkan daftar belanja. Daripada membuat variabel <code>barang1</code>, <code>barang2</code>, <code>barang3</code>, simpan semuanya dalam satu <b>list</b>:</p>
<pre><code>belanja = ["beras", "telur", "minyak"]
angka = [5, 7, 9]
campur = ["Rina", 20, True]   # boleh beda tipe</code></pre>
<p>List ditulis dengan kurung siku <code>[ ]</code>, isinya dipisah koma. List <b>terurut</b> dan <b>bisa diubah</b> (istilahnya <i>mutable</i>).</p>
<h4>Mengambil dan mengubah isi</h4>
<p>Sama seperti string, indeks dimulai dari <b>0</b>:</p>
<pre><code>angka = [5, 7, 9]
angka[0]      # 5   (pertama)
angka[-1]     # 9   (terakhir)
angka[1] = 99 # angka jadi [5, 99, 9]
angka[0:2]    # [5, 99]  (slicing)</code></pre>
<h4>Method dan fungsi list</h4>
<table class="mini-pivot"><tr><th>Kode</th><th>Fungsinya</th></tr>
<tr><td><code>a.append(9)</code></td><td><b>tambah</b> 9 di akhir</td></tr>
<tr><td><code>a.remove(7)</code></td><td>hapus isi yang <b>nilainya</b> 7 (yang pertama ditemukan)</td></tr>
<tr><td><code>a.pop()</code></td><td>buang isi terakhir</td></tr>
<tr><td><code>a.sort()</code></td><td><b>urutkan</b> dari kecil ke besar (list asli berubah)</td></tr>
<tr><td><code>a.reverse()</code></td><td><b>balik</b> urutan (list asli berubah)</td></tr>
<tr><td><code>len(a)</code></td><td><b>jumlah</b> isi</td></tr>
<tr><td><code>sum(a)</code></td><td><b>total</b> semua angka</td></tr>
<tr><td><code>max(a)</code> / <code>min(a)</code></td><td>nilai <b>terbesar</b> / <b>terkecil</b></td></tr>
<tr><td><code>[1, 2] + [3]</code></td><td>gabung list → <code>[1, 2, 3]</code></td></tr></table>
<pre><code>a = [3, 1, 2]
a.sort()
print(a)     # [1, 2, 3]</code></pre>
<h4>Jebakan: dua nama untuk satu list</h4>
<pre><code>a = [1, 2, 3]
b = a
b.append(4)
print(a)     # [1, 2, 3, 4]  ← a ikut berubah!</code></pre>
<p><code>b = a</code> <b>tidak membuat salinan</b>. Kedua nama menunjuk ke <b>list yang sama</b>, seperti dua nama panggilan untuk satu orang. Kalau ingin salinan terpisah, pakai <code>b = a.copy()</code>.</p>
<h4>List comprehension: membuat list dalam satu baris</h4>
<pre><code>kuadrat = [x * 2 for x in range(3)]
# [0, 2, 4]

genap = [x for x in range(6) if x % 2 == 0]
# [0, 2, 4]</code></pre>
<p>Bacanya dari tengah: "untuk setiap <code>x</code> di <code>range(6)</code>, <b>kalau</b> x genap, masukkan <code>x</code> ke list". Ini versi ringkas dari:</p>
<pre><code>genap = []
for x in range(6):
    if x % 2 == 0:
        genap.append(x)</code></pre>
<div class="praktik"><b>Coba sendiri:</b> buat list nilai <code>[80, 65, 90, 72]</code>. Cetak rata-ratanya dengan <code>sum()</code> dan <code>len()</code>, lalu buat list baru berisi nilai yang ≥ 75 saja dengan list comprehension.</div>
`},
{k:"koleksi",judul:"Dict, Tuple & Set",materi:`
<h4>Tiga wadah lain selain list</h4>
<p>List bagus untuk daftar berurutan. Tapi ada kebutuhan lain: data berlabel, data yang tidak boleh berubah, dan data tanpa duplikat. Python punya wadah khusus untuk masing-masing.</p>
<table class="mini-pivot"><tr><th>Wadah</th><th>Ditulis</th><th>Ciri utama</th><th>Contoh kegunaan</th></tr>
<tr><td>list</td><td><code>[1, 2, 3]</code></td><td>terurut, bisa diubah</td><td>daftar belanja</td></tr>
<tr><td>dict</td><td><code>{"nama": "Ryan"}</code></td><td>pasangan <b>kunci → nilai</b></td><td>data seorang mahasiswa</td></tr>
<tr><td>tuple</td><td><code>(1, 2, 3)</code></td><td>terurut, <b>tidak bisa diubah</b></td><td>koordinat, tanggal</td></tr>
<tr><td>set</td><td><code>{1, 2, 3}</code></td><td><b>tanpa urutan, tanpa duplikat</b></td><td>daftar unik</td></tr></table>
<h4>Dict: kamus kunci dan nilai</h4>
<p><b>Dict</b> (<i>dictionary</i>, kamus) menyimpan data dengan <b>label</b>. Seperti kamus: kamu mencari kata (kunci) untuk menemukan artinya (nilai).</p>
<pre><code>mhs = {"nama": "Ryan", "nim": "220103091"}

mhs["nama"]            # "Ryan"     ambil nilai lewat kuncinya
mhs["kota"] = "Solo"   # tambah pasangan baru
del mhs["nim"]         # hapus kunci "nim"
len(mhs)               # jumlah pasangan
"kota" in mhs          # True: apakah kunci ini ada?
mhs.keys()             # semua kunci
mhs.values()           # semua nilai</code></pre>
<p>Mengambil kunci yang <b>tidak ada</b> dengan <code>mhs["ipk"]</code> membuat error <code>KeyError</code>. Cara amannya:</p>
<pre><code>mhs.get("ipk", 0)      # kalau tidak ada, kembalikan 0 saja</code></pre>
<p>Mengulang kunci dan nilai sekaligus:</p>
<pre><code>for kunci, nilai in mhs.items():
    print(kunci, "=", nilai)</code></pre>
<h4>Tuple: list yang dikunci</h4>
<pre><code>titik = (3, 5)
titik[0]       # 3
titik[0] = 9   # TypeError! tuple tidak bisa diubah
tuple([1, 2])  # (1, 2): ubah list jadi tuple</code></pre>
<p>Tuple cocok untuk data yang memang <b>tidak seharusnya berubah</b>, misalnya koordinat peta atau pasangan (tahun, bulan). Karena dikunci, kamu terhindar dari mengubahnya secara tidak sengaja.</p>
<h4>Set: himpunan tanpa kembar</h4>
<pre><code>set([1, 2, 2, 3, 3])   # {1, 2, 3}  ← duplikat otomatis hilang
{1, 2} &amp; {2, 3}        # {2}        ← irisan: yang ada di keduanya
{1, 2} | {2, 3}        # {1, 2, 3}  ← gabungan</code></pre>
<p>Set seperti himpunan di pelajaran matematika SMP. Kegunaan paling sering: <b>membuang data ganda</b>, misalnya mencari daftar kota unik dari ribuan transaksi.</p>
<div class="praktik"><b>Coba sendiri:</b> buat dict harga <code>{"kopi": 15000, "teh": 8000}</code>. Tambahkan "roti", lalu cetak semua menu beserta harganya dengan <code>for … in harga.items()</code>.</div>
`},
{k:"fungsi",judul:"Fungsi: def, return, Parameter",materi:`
<h4>Fungsi = resep yang bisa dipakai ulang</h4>
<p>Kalau kamu menulis kode yang sama berulang-ulang, bungkus menjadi <b>fungsi</b>. Seperti resep: tulis sekali, pakai kapan saja hanya dengan menyebut namanya.</p>
<pre><code>def luas(p, l):
    return p * l

print(luas(4, 5))   # 20
print(luas(2, 3))   # 6</code></pre>
<ul><li><code>def</code> (singkatan <i>define</i>, mendefinisikan) = kata kunci untuk <b>membuat</b> fungsi.</li><li><code>luas</code> = nama fungsinya.</li><li><code>p</code> dan <code>l</code> = <b>parameter</b>, "bahan" yang diterima fungsi. Nilai yang dikirim saat memanggil (4 dan 5) disebut <b>argumen</b>.</li><li><code>return</code> = <b>mengembalikan hasil</b> ke pemanggil. Fungsi <b>tanpa <code>return</code></b> mengembalikan <code>None</code>.</li><li>Isi fungsi ditulis <b>menjorok</b> (indentasi), sama seperti <code>if</code>.</li></ul>
<h4>Nilai bawaan dan argumen bernama</h4>
<pre><code>def sapa(nama="Tamu"):
    return f"Halo, {nama}!"

sapa()            # "Halo, Tamu!"  ← nilai default dipakai
sapa("Rina")      # "Halo, Rina!"

def bagi(a, b):
    return a / b
bagi(b=2, a=10)   # 5.0  ← keyword argument: urutan bebas</code></pre>
<ul><li><code>nama="Tamu"</code> adalah <b>nilai default</b>, dipakai kalau argumen tidak dikirim.</li><li><code>bagi(b=2, a=10)</code> memakai <b>keyword argument</b>: menyebut nama parameternya, jadi urutannya bebas.</li></ul>
<h4>Mengembalikan beberapa nilai</h4>
<pre><code>def min_max(data):
    return min(data), max(data)

kecil, besar = min_max([4, 9, 2])   # kecil=2, besar=9</code></pre>
<p>Dipisah koma, hasilnya dibungkus menjadi <b>tuple</b>.</p>
<h4>Variabel lokal dan global</h4>
<p>Variabel yang dibuat <b>di dalam</b> fungsi bersifat <b>lokal</b>: hanya ada selama fungsi berjalan dan tidak dikenal di luar. Untuk mengubah variabel di luar fungsi dari dalam fungsi, harus ditulis <code>global nama_variabel</code> (sebaiknya jarang dipakai; lebih rapi memakai <code>return</code>).</p>
<h4>Hal lain yang perlu dikenal</h4>
<ul><li><b>Docstring</b>: teks dalam tiga kutip di baris pertama fungsi, berisi penjelasan fungsi itu.</li></ul>
<pre><code>def luas(p, l):
    """Menghitung luas persegi panjang."""
    return p * l</code></pre>
<ul><li><b>lambda</b>: fungsi kecil <b>tanpa nama</b> dalam satu baris. <code>kali2 = lambda x: x * 2</code> sama dengan fungsi yang mengembalikan <code>x * 2</code>.</li><li><b><code>*args</code></b>: menampung <b>berapa pun argumen</b> menjadi tuple. <code>def total(*args): return sum(args)</code> lalu <code>total(1, 2, 3)</code> = 6.</li><li><b>Rekursi</b>: fungsi yang <b>memanggil dirinya sendiri</b>, misalnya menghitung faktorial. Harus punya kondisi berhenti.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat fungsi <code>nilai_huruf(n)</code> yang mengembalikan "A", "B", atau "C" sesuai angka, lalu panggil untuk tiga nilai berbeda.</div>
`},
{k:"error",judul:"Error Handling & File",materi:`
<h4>Error itu biasa, yang penting ditangani</h4>
<p>Semua programmer, sehebat apa pun, setiap hari melihat error. Yang membedakan adalah programnya <b>tidak langsung mati</b> saat ada masalah. Bayangkan aplikasi kasir yang tertutup sendiri hanya karena kasir salah mengetik huruf di kolom jumlah, menyebalkan sekali.</p>
<h4>Mengenal jenis error</h4>
<p>Saat error, Python menampilkan nama error-nya di baris terakhir. Baca nama ini dulu; biasanya sudah menjelaskan masalahnya.</p>
<table class="mini-pivot"><tr><th>Error</th><th>Terjadi saat</th><th>Contoh</th></tr>
<tr><td><code>ValueError</code></td><td>nilainya tidak cocok</td><td><code>int("abc")</code></td></tr>
<tr><td><code>NameError</code></td><td>memakai variabel yang <b>belum dibuat</b> (atau salah ketik nama)</td><td><code>print(nilia)</code></td></tr>
<tr><td><code>IndexError</code></td><td>indeks di luar jangkauan</td><td><code>[1, 2][5]</code></td></tr>
<tr><td><code>KeyError</code></td><td>kunci dict tidak ada</td><td><code>{"a": 1}["b"]</code></td></tr>
<tr><td><code>ZeroDivisionError</code></td><td>membagi dengan nol</td><td><code>1 / 0</code></td></tr>
<tr><td><code>TypeError</code></td><td>operasi tidak cocok untuk tipe itu</td><td><code>"5" + 2</code></td></tr></table>
<h4>try dan except: "coba, kalau gagal tangkap"</h4>
<pre><code>try:
    n = int(input("Masukkan angka: "))
    print(100 / n)
except ValueError:
    print("Itu bukan angka!")
except ZeroDivisionError:
    print("Tidak bisa dibagi nol!")
finally:
    print("Selesai.")</code></pre>
<ol><li><code>try:</code> = <b>coba</b> jalankan kode di dalamnya.</li><li><code>except NamaError:</code> = kalau terjadi error jenis itu, <b>jalankan ini</b> sebagai gantinya, lalu program tetap lanjut.</li><li><code>finally:</code> = <b>selalu</b> dijalankan, error atau tidak. Biasanya untuk "beres-beres", misalnya menutup koneksi.</li></ol>
<h4>Membuat error sendiri: raise</h4>
<pre><code>if umur &lt; 0:
    raise ValueError("Umur tidak boleh negatif")</code></pre>
<p><code>raise</code> artinya "<b>lemparkan</b> error". Dipakai untuk menolak data yang jelas salah.</p>
<h4>pass: blok kosong</h4>
<p><code>pass</code> artinya "tidak melakukan apa-apa". Python mewajibkan setiap blok berisi minimal satu baris, jadi <code>pass</code> dipakai sebagai pengisi sementara.</p>
<h4>Membaca dan menulis file</h4>
<pre><code>with open("catatan.txt", "w") as f:
    f.write("Baris pertama\\n")

with open("catatan.txt", "r") as f:
    isi = f.read()</code></pre>
<ul><li><code>open(nama_file, mode)</code> membuka file.</li><li><code>with … as f:</code> membuat file <b>otomatis ditutup</b> setelah blok selesai, walaupun terjadi error. Ini cara paling aman.</li></ul>
<table class="mini-pivot"><tr><th>Mode</th><th>Arti</th></tr>
<tr><td><code>"r"</code></td><td><i>read</i>: <b>membaca</b> (bawaan)</td></tr>
<tr><td><code>"w"</code></td><td><i>write</i>: <b>menulis</b>; isi lama <b>dihapus</b> dan diganti</td></tr>
<tr><td><code>"a"</code></td><td><i>append</i>: <b>menambah</b> di akhir tanpa menghapus isi lama</td></tr></table>
<ul><li><code>f.read()</code> = baca seluruh isi sebagai <b>satu teks panjang</b>.</li><li><code>f.readlines()</code> = baca isi sebagai <b>list</b>, satu isi per baris.</li><li><code>\\n</code> di dalam teks berarti "pindah baris".</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat program yang meminta dua angka lalu membaginya. Tangani kasus pengguna mengetik huruf dan kasus pembagi nol.</div>
`},
{k:"oop",judul:"OOP: Class, Objek & Inheritance",materi:`
<h4>OOP: cara berpikir dengan "benda"</h4>
<p><b>OOP</b> singkatan <i>Object-Oriented Programming</i> (pemrograman berorientasi objek). Idenya: program disusun dari <b>benda-benda</b> yang punya <b>data</b> (ciri) dan <b>kemampuan</b> (aksi), seperti di dunia nyata.</p>
<p>Contoh: setiap mahasiswa punya ciri (nama, NIM) dan bisa melakukan sesuatu (menyapa, mendaftar kuliah).</p>
<h4>Class = cetakan, objek = hasil cetakan</h4>
<p>Bayangkan <b>cetakan kue</b>. Cetakannya cuma satu, tapi kue yang dihasilkan bisa banyak, masing-masing dengan topping berbeda.</p>
<ul><li><b>Class</b> = cetakannya (rancangan).</li><li><b>Objek</b> (<i>object</i> atau <i>instance</i>) = kue hasil cetakannya (benda nyata).</li></ul>
<pre><code>class Mahasiswa:
    def __init__(self, nama, nim):
        self.nama = nama
        self.nim = nim

    def sapa(self):
        return f"Halo, saya {self.nama}"

rina = Mahasiswa("Rina", "001")
budi = Mahasiswa("Budi", "002")
print(rina.sapa())    # Halo, saya Rina
print(budi.nama)      # Budi</code></pre>
<p>Penjelasan:</p>
<ol><li><code>class Mahasiswa:</code> = membuat cetakan bernama Mahasiswa. Nama class biasanya diawali huruf kapital.</li><li><code>__init__</code> = <b>konstruktor</b>, fungsi khusus yang <b>otomatis dijalankan saat objek baru dibuat</b>. Tugasnya mengisi data awal. (Namanya diapit dua garis bawah di kiri-kanan.)</li><li><code>self</code> = "<b>objek ini sendiri</b>". Saat <code>rina</code> dibuat, <code>self</code> adalah rina; saat <code>budi</code> dibuat, <code>self</code> adalah budi. <code>self</code> selalu jadi <b>parameter pertama</b> setiap method.</li><li><code>self.nama = nama</code> = membuat <b>atribut</b> (data milik objek), lalu mengisinya.</li><li><code>def sapa(self):</code> = <b>method</b>, yaitu fungsi milik class (kemampuan objek).</li><li><code>rina = Mahasiswa("Rina", "001")</code> = mencetak <b>objek</b> baru. <code>rina</code> adalah objek dari class Mahasiswa.</li></ol>
<h4>Inheritance: pewarisan</h4>
<pre><code>class Asisten(Mahasiswa):
    def __init__(self, nama, nim, matkul):
        super().__init__(nama, nim)
        self.matkul = matkul

    def sapa(self):
        return f"Halo, saya asisten {self.matkul}"</code></pre>
<ul><li><code>class Asisten(Mahasiswa):</code> = Asisten <b>mewarisi</b> semua isi Mahasiswa, seperti anak mewarisi sifat orang tua. Mahasiswa disebut class <b>induk</b>, Asisten class <b>anak</b>.</li><li><code>super().__init__(…)</code> = memanggil konstruktor <b>class induk</b>, supaya nama dan NIM tetap diisi dengan cara induknya.</li><li>Menulis ulang <code>sapa</code> dengan isi berbeda di class anak disebut <b>override</b> (menimpa).</li></ul>
<h4>Istilah lain</h4>
<ul><li><b>Enkapsulasi</b>: menyembunyikan detail di dalam class. Atribut berawalan dua garis bawah (<code>self.__saldo</code>) dianggap <b>privat</b>, tidak untuk diakses langsung dari luar.</li><li><code>isinstance(x, Mahasiswa)</code> = mengecek apakah <code>x</code> <b>objek dari class</b> Mahasiswa (atau turunannya).</li><li><code>__str__</code> = method khusus yang menentukan <b>teks yang tampil</b> saat objek di-<code>print()</code>.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> buat class <code>Rekening</code> dengan atribut <code>saldo</code> dan method <code>setor(jumlah)</code> serta <code>tarik(jumlah)</code> yang menolak penarikan melebihi saldo.</div>
`},
{k:"modul",judul:"Modul & Ekosistem Python",materi:`
<h4>Modul = kotak perkakas siap pakai</h4>
<p>Kamu tidak perlu menulis semuanya dari nol. Python sudah menyediakan banyak kode siap pakai yang dikelompokkan dalam <b>modul</b>. Seperti kotak perkakas: kalau butuh obeng, ambil dari kotaknya.</p>
<h4>Memakai modul: import</h4>
<pre><code>import math
math.sqrt(16)       # 4.0 (akar kuadrat)
math.pi             # 3.14159...
math.floor(3.7)     # 3 (bulatkan ke bawah)</code></pre>
<p><code>import math</code> = "ambil kotak perkakas bernama math". Setelah itu, isinya dipanggil dengan <code>math.nama_isi</code>.</p>
<h4>Mengambil satu alat saja</h4>
<pre><code>from random import randint
randint(1, 6)       # angka acak 1 sampai 6, seperti dadu</code></pre>
<p><code>from … import …</code> mengambil isi tertentu sehingga bisa langsung dipanggil <b>tanpa menulis nama modulnya</b>. Modul <code>random</code> berisi alat untuk keacakan, misalnya <code>random.shuffle(daftar)</code> untuk <b>mengacak urutan</b> list.</p>
<h4>Nama panggilan (alias)</h4>
<pre><code>import numpy as np
import pandas as pd</code></pre>
<p><code>as np</code> memberi <b>alias</b> (nama panggilan pendek), supaya cukup menulis <code>np.</code> alih-alih <code>numpy.</code>. Alias <code>np</code> dan <code>pd</code> sudah jadi kebiasaan semua programmer data.</p>
<h4>Modul bawaan dan paket tambahan</h4>
<ul><li><b>Modul bawaan</b> (<i>standard library</i>) sudah ikut terpasang bersama Python: <code>math</code>, <code>random</code>, <code>datetime</code>, <code>csv</code>, <code>os</code>.</li><li><b>Paket eksternal</b> dibuat komunitas dan perlu dipasang dulu lewat terminal (Command Prompt):</li></ul>
<pre><code>pip install pandas</code></pre>
<p><code>pip</code> adalah "toko aplikasi" untuk Python. Paket terkenal: <code>pandas</code> (olah tabel data), <code>numpy</code> (hitung angka), <code>matplotlib</code> (grafik), <code>requests</code> (ambil data dari internet).</p>
<h4>Baris <code>if __name__ == "__main__":</code></h4>
<pre><code>def hitung():
    ...

if __name__ == "__main__":
    hitung()</code></pre>
<p>Setiap file <code>.py</code> juga bisa di-<code>import</code> oleh file lain. Blok <code>if __name__ == "__main__":</code> hanya dijalankan <b>kalau file ini dijalankan langsung</b>, bukan saat di-import. Gunanya agar kode uji coba di file itu tidak ikut berjalan ketika file dipakai sebagai modul.</p>
<div class="praktik"><b>Coba sendiri:</b> buat program lempar dadu: pakai <code>random.randint(1, 6)</code> dalam loop 10 kali, lalu hitung berapa kali muncul angka 6.</div>
`},
];
