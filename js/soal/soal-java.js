// ============ JAVA — bahasa BUKAN prioritas (opsional) ============
// 5 bab: dasar & tipe data, kontrol alur, array & String, OOP, koleksi & exception.
// vr:"java" → kode dijalankan dengan Java 21 oleh skrip verifikasi.
// Potongan kode tanpa "class" dianggap berada di dalam method main.

const SOAL_JAVA = [
// ---- BAB 1: Dasar & tipe data ----
{k:"dasar",t:"mc",lv:1,q:"Program Java mulai dijalankan dari method…",o:["public static void main(String[] args)","start()","run()","init()"],a:0,
 e:"Setiap program Java (yang berdiri sendiri) membutuhkan method main sebagai titik masuk. Semua kode berada di dalam class — Java sangat berorientasi objek.",
 w:[null,"start() dipakai di konteks lain (misal Thread), bukan titik masuk program.","run() bukan titik masuk program.","init() bukan titik masuk program Java biasa."]},
{k:"dasar",t:"mc",lv:1,q:"Output kode ini:",kode:"System.out.println(\"Halo\");\nSystem.out.print(\"Data\");\nSystem.out.print(\"Analis\");",o:["Halo\nDataAnalis","Halo Data Analis","HaloDataAnalis","Halo\nData\nAnalis"],a:0,vr:"java",
 e:"println mencetak lalu pindah baris; print tidak pindah baris. Jadi 'Data' dan 'Analis' menempel di baris kedua.",
 w:[null,"Tidak ada spasi yang dicetak di antara kata.","println pertama menambahkan pindah baris setelah 'Halo'.","print tidak menambahkan pindah baris."]},
{k:"dasar",t:"mc",lv:1,q:"Kode int umur = \"dua puluh\"; menghasilkan…",o:["Error saat kompilasi — Java bertipe statis; variabel int hanya boleh berisi bilangan bulat","umur bernilai 20","umur bernilai 0","Berjalan normal"],a:0,
 e:"Java (seperti C#, Kotlin, TypeScript) memeriksa tipe sebelum program dijalankan. Banyak kesalahan tertangkap lebih awal — beda dengan Python/JavaScript yang baru ketahuan saat program berjalan.",
 w:[null,"Java tidak menerjemahkan kata menjadi angka.","Nilai tidak diisi otomatis; kodenya tidak bisa dikompilasi.","Tipe data tidak cocok, jadi tidak bisa berjalan."]},
{k:"dasar",t:"mc",lv:2,q:"Output kode ini:",kode:"System.out.println(7 / 2);\nSystem.out.println(7 / 2.0);",o:["3\n3.5","3.5\n3.5","3\n3","4\n3.5"],a:0,vr:"java",
 e:"int ÷ int = int (desimal dibuang, bukan dibulatkan). Jika salah satu bilangan desimal (2.0), hasilnya double. Jebakan yang sama ada di SQL (SQLite/PostgreSQL).",
 w:[null,"7 / 2 dengan dua int menghasilkan int.","7 / 2.0 menghasilkan double karena 2.0 desimal.","Pembagian int membuang desimal, tidak membulatkan ke atas."]},
{k:"dasar",t:"mc",lv:2,q:"Output kode ini:",kode:"System.out.println(\"Total: \" + 2 + 3);\nSystem.out.println(2 + 3 + \" item\");",o:["Total: 23\n5 item","Total: 5\n5 item","Total: 23\n23 item","Total: 5\n23 item"],a:0,vr:"java",
 e:"Dikerjakan dari kiri. Baris 1: teks + 2 = teks, lalu + 3 ditempel → 'Total: 23'. Baris 2: 2 + 3 = 5 dulu (angka), baru digabung dengan teks. Sama persis dengan JavaScript. Pakai kurung: \"Total: \" + (2 + 3).",
 w:[null,"Setelah bertemu teks, + menjadi penggabungan.","Di baris 2, angka dijumlah dulu sebelum bertemu teks.","Terbalik."]},
{k:"dasar",t:"mc",lv:1,q:"Tipe data Java untuk menyimpan teks seperti nama pelanggan:",o:["String","char","int","boolean"],a:0,
 e:"String (huruf S kapital karena ia sebuah class). char hanya menyimpan SATU karakter dengan kutip tunggal: 'A'. Tipe primitif lain: int, long, double, boolean.",
 w:[null,"char hanya satu karakter.","int untuk bilangan bulat.","boolean untuk true/false."]},
{k:"dasar",t:"mc",lv:2,q:"Kata kunci final pada final double PAJAK = 0.11; artinya…",o:["Nilainya tidak bisa diubah setelah diisi (konstanta)","Variabel terakhir di program","Variabel akan dihapus","Hanya bisa dipakai sekali"],a:0,
 e:"final = konstanta. Konvensi penamaannya HURUF_BESAR. Mirip const di JavaScript.",
 w:[null,"Bukan soal urutan.","final tidak menghapus apa pun.","Konstanta bisa dibaca berkali-kali."]},
{k:"dasar",t:"is",lv:1,q:"Sejak Java 10, variabel lokal bisa dideklarasikan tanpa menulis tipenya dengan kata kunci ___ (contoh: ___ total = 0;)",a:["var"],
 h:"Sama dengan kata kunci lama di JavaScript.",
 e:"var total = 0; → Java menyimpulkan tipenya int. Tipenya tetap statis; hanya penulisannya yang lebih ringkas."},

// ---- BAB 2: Kontrol alur ----
{k:"kontrol",t:"mc",lv:1,q:"Output kode ini:",kode:"int nilai = 75;\nif (nilai >= 80) {\n    System.out.println(\"A\");\n} else if (nilai >= 70) {\n    System.out.println(\"B\");\n} else {\n    System.out.println(\"C\");\n}",o:["B","A","C","B\nC"],a:0,vr:"java",
 e:"Syarat diperiksa berurutan; 75 tidak ≥ 80, tapi ≥ 70 → B. Setelah satu cabang dijalankan, sisanya dilewati. Logikanya sama dengan IF bertingkat Excel dan CASE WHEN SQL.",
 w:[null,"75 belum mencapai 80.","Cabang else hanya jika semua syarat salah.","Hanya satu cabang yang dijalankan."]},
{k:"kontrol",t:"mc",lv:1,q:"Output kode ini:",kode:"int total = 0;\nfor (int i = 1; i <= 5; i++) {\n    total += i;\n}\nSystem.out.println(total);",o:["15","10","5","14"],a:0,vr:"java",
 e:"for (awal; syarat; langkah). i = 1..5 (karena <=), dijumlah: 1+2+3+4+5 = 15.",
 w:[null,"10 jika syaratnya i < 5.","5 hanya nilai terakhir i.","Tidak ada angka yang terlewat."]},
{k:"kontrol",t:"mc",lv:2,q:"Output kode ini (Java 14+):",kode:"String hari = \"Sabtu\";\nString jenis = switch (hari) {\n    case \"Sabtu\", \"Minggu\" -> \"Libur\";\n    default -> \"Kerja\";\n};\nSystem.out.println(jenis);",o:["Libur","Kerja","Sabtu","Error"],a:0,vr:"java",
 e:"Switch expression modern dengan panah (->) mengembalikan nilai dan tidak 'jatuh' ke case berikutnya. Satu case boleh berisi beberapa nilai yang dipisah koma.",
 w:[null,"default hanya jika tidak ada case yang cocok.","switch mengembalikan nilai case, bukan isi variabelnya.","Sintaks ini valid sejak Java 14."]},
{k:"kontrol",t:"mc",lv:1,q:"Output kode ini:",kode:"int qty = 5;\nSystem.out.println(qty >= 5 ? \"Grosir\" : \"Ecer\");",o:["Grosir","Ecer","true","5"],a:0,vr:"java",
 e:"Operator ternary: syarat ? nilai_jika_benar : nilai_jika_salah. Ringkas untuk pilihan sederhana; untuk logika panjang lebih jelas memakai if-else.",
 w:[null,"5 >= 5 bernilai benar.","Yang dicetak nilai pilihan, bukan hasil syaratnya.","Ternary mengembalikan salah satu teks."]},
{k:"kontrol",t:"mc",lv:3,q:"Output kode ini:",kode:"String a = new String(\"Andi\");\nString b = \"Andi\";\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));",o:["false\ntrue","true\ntrue","false\nfalse","true\nfalse"],a:0,vr:"java",
 e:"Untuk objek (termasuk String), == membandingkan REFERENSI (apakah objek yang sama), equals() membandingkan ISI. Selalu pakai .equals() untuk membandingkan teks di Java. Bug ini sangat sering ditanyakan di tes Java.",
 w:[null,"new String membuat objek baru, jadi == bernilai false.","equals membandingkan isi teks yang sama.","Terbalik."]},
{k:"kontrol",t:"mc",lv:2,q:"Output kode ini:",kode:"int n = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        n++;\n    }\n}\nSystem.out.println(n);",o:["6","5","3","2"],a:0,vr:"java",
 e:"Loop luar 3 kali × loop dalam 2 kali = 6. Pola ini muncul saat memproses tabel (baris × kolom).",
 w:[null,"Hitung ulang: 3 × 2.","3 hanya jumlah putaran luar.","2 hanya jumlah putaran dalam."]},
{k:"kontrol",t:"mc",lv:2,q:"Output kode ini:",kode:"int saldo = 100;\nint bulan = 0;\nwhile (true) {\n    saldo += 20;\n    bulan++;\n    if (saldo >= 150) break;\n}\nSystem.out.println(bulan);",o:["3","2","50","Loop tak berhenti"],a:0,vr:"java",
 e:"100 → 120 → 140 → 160. Di bulan ke-3 saldo ≥ 150, lalu break menghentikan loop. while (true) + break berguna saat syarat berhenti baru diketahui di tengah perulangan.",
 w:[null,"Setelah 2 bulan saldo baru 140.","50 adalah selisih yang dicari, bukan jumlah bulan.","break menghentikan loop."]},
{k:"kontrol",t:"is",lv:1,q:"Kata kunci untuk keluar dari loop seketika: ______",a:["break"],
 h:"Artinya 'patahkan/hentikan'.",
 e:"break keluar dari loop; continue melompat ke putaran berikutnya. Keduanya juga ada di Python, JavaScript, dan PHP."},

// ---- BAB 3: Array & String ----
{k:"array",t:"mc",lv:1,q:"Output kode ini:",kode:"int[] angka = {3, 8, 2};\nSystem.out.println(angka[1]);\nSystem.out.println(angka.length);",o:["8\n3","3\n3","8\n2","3\n2"],a:0,vr:"java",
 e:"Indeks dimulai dari 0, jadi angka[1] = 8. Panjang array adalah PROPERTI length (tanpa kurung), sedangkan panjang String adalah METHOD length() (dengan kurung).",
 w:[null,"Indeks 1 adalah elemen kedua.","Ada 3 elemen di array.","Keduanya keliru."]},
{k:"array",t:"mc",lv:2,q:"Mengakses angka[3] pada array int[] angka = {3, 8, 2} menghasilkan…",o:["ArrayIndexOutOfBoundsException","0","null","2"],a:0,
 e:"Indeks yang valid hanya 0 sampai length − 1 (0, 1, 2). Java melempar exception, bukan mengembalikan nilai kosong seperti JavaScript (undefined).",
 w:[null,"Java tidak mengembalikan nilai default untuk indeks di luar batas.","Array int tidak berisi null.","2 adalah isi indeks terakhir yang valid."]},
{k:"array",t:"mc",lv:1,q:"Output kode ini:",kode:"String kota = \"Jakarta\";\nSystem.out.println(kota.substring(0, 4));\nSystem.out.println(kota.charAt(0));",o:["Jaka\nJ","Jakar\nJ","Jaka\na","akar\nJ"],a:0,vr:"java",
 e:"substring(awal, akhir): mulai dari indeks awal sampai SEBELUM indeks akhir → indeks 0–3 → 'Jaka'. charAt(0) = karakter pertama 'J'. Sama dengan slicing Python [0:4].",
 w:[null,"Indeks akhir (4) tidak ikut diambil.","charAt(0) mengambil karakter pertama.","substring dimulai dari indeks 0."]},
{k:"array",t:"mc",lv:1,q:"Output kode ini:",kode:"int[] total = {14, 2, 6};\nint jumlah = 0;\nfor (int t : total) {\n    jumlah += t;\n}\nSystem.out.println(jumlah);",o:["22","3","14","146"],a:0,vr:"java",
 e:"Enhanced for (for-each) mengambil setiap elemen tanpa perlu indeks — mirip for t in total di Python. 14 + 2 + 6 = 22.",
 w:[null,"3 adalah panjang array.","Itu hanya elemen pertama.","Angka dijumlah, bukan digabung sebagai teks."]},
{k:"array",t:"mc",lv:2,q:"Output kode ini:",kode:"String s = \"data\";\ns.toUpperCase();\nSystem.out.println(s);",o:["data","DATA","Data","Error"],a:0,vr:"java",
 e:"String di Java bersifat immutable (tidak bisa diubah). toUpperCase() menghasilkan String BARU, tapi hasilnya tidak disimpan. Yang benar: s = s.toUpperCase(); — sama seperti string di Python dan JavaScript.",
 w:[null,"Hasil toUpperCase() tidak disimpan ke s.","Tidak ada perubahan pada s.","Kode ini valid."]},
{k:"array",t:"mc",lv:2,q:"Output kode ini:",kode:"int[] a = {5, 1, 4};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));",o:["[1, 4, 5]","[5, 4, 1]","[5, 1, 4]","1 4 5"],a:0,vr:"java",
 e:"Arrays.sort mengurutkan naik (langsung mengubah array-nya). Arrays.toString menampilkan isi array dengan rapi. Mencetak array langsung (println(a)) hanya menampilkan alamat seperti [I@1b6d3586.",
 w:[null,"sort mengurutkan naik, bukan turun.","Array sudah diurutkan sebelum dicetak.","toString menampilkan format dengan kurung siku dan koma."]},
{k:"array",t:"mc",lv:2,q:"Output kode ini:",kode:"String[] bagian = \"Andi,Jakarta,Laptop\".split(\",\");\nSystem.out.println(bagian.length + \" \" + bagian[2]);",o:["3 Laptop","3 Jakarta","2 Laptop","19 Laptop"],a:0,vr:"java",
 e:"split memecah teks berdasarkan pemisah menjadi array: [\"Andi\", \"Jakarta\", \"Laptop\"]. Dipakai saat membaca baris CSV — seperti Text to Columns di Excel.",
 w:[null,"Indeks 2 adalah elemen ketiga.","Ada 3 bagian setelah dipisah koma.","19 adalah panjang teks aslinya."]},
{k:"array",t:"is",lv:1,q:"Method String untuk membandingkan ISI teks di Java: a.______(b)",a:["equals"],
 h:"Artinya 'sama dengan'.",
 e:"a.equals(b) membandingkan isi. equalsIgnoreCase(b) membandingkan tanpa memedulikan huruf besar/kecil."},

// ---- BAB 4: OOP ----
{k:"oop",t:"mc",lv:1,q:"Beda class dan object:",o:["Class = cetakan/rancangan; object = hasil nyata yang dibuat dari class dengan new","Keduanya sama","Object = cetakan; class = hasilnya","Class hanya untuk angka"],a:0,
 e:"class Produk mendefinisikan field (nama, harga) dan method. new Produk(\"Mouse\", 150000) membuat satu object nyata. Konsep yang sama ada di Python (class) dan model Odoo.",
 w:[null,"Perannya berbeda.","Terbalik.","Class bisa memodelkan apa pun."]},
{k:"oop",t:"mc",lv:2,q:"Output kode ini:",kode:"class Produk {\n    String nama;\n    int harga;\n\n    Produk(String nama, int harga) {\n        this.nama = nama;\n        this.harga = harga;\n    }\n\n    int totalHarga(int qty) {\n        return harga * qty;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Produk p = new Produk(\"Mouse\", 150000);\n        System.out.println(p.totalHarga(3));\n    }\n}",o:["450000","150000","3","Mouse"],a:0,vr:"java",
 e:"Constructor mengisi field object; this.nama menunjuk field milik object, bukan parameter yang namanya sama. totalHarga(3) = 150.000 × 3 = 450.000.",
 w:[null,"Itu harga satuannya.","3 adalah qty yang dikirim.","Method mengembalikan angka, bukan nama."]},
{k:"oop",t:"mc",lv:2,q:"Prinsip encapsulation di Java biasanya diterapkan dengan…",o:["Field dibuat private, lalu diakses lewat method public (getter/setter) yang bisa memvalidasi nilai","Semua field dibuat public","Menghapus semua method","Memakai satu class untuk semua hal"],a:0,
 e:"Contoh: setHarga(int h) { if (h < 0) throw …; this.harga = h; } — harga negatif tidak bisa masuk. Data dilindungi dari perubahan sembarangan.",
 w:[null,"Field public bisa diubah tanpa validasi.","Method justru menjadi pintu akses yang aman.","Itu bertentangan dengan desain OOP yang baik."]},
{k:"oop",t:"mc",lv:3,q:"Output kode ini:",kode:"class Karyawan {\n    double gaji() { return 5000000; }\n}\n\nclass Sales extends Karyawan {\n    double komisi = 1000000;\n\n    @Override\n    double gaji() { return super.gaji() + komisi; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Karyawan k = new Sales();\n        System.out.println(k.gaji());\n    }\n}",o:["6000000.0","5000000.0","1000000.0","6000000"],a:0,vr:"java",
 e:"Inheritance (extends) + override + polymorphism: variabel bertipe Karyawan berisi object Sales, jadi yang dipanggil versi Sales. super.gaji() memanggil versi induknya (5 jt), ditambah komisi = 6 jt. double dicetak dengan .0.",
 w:[null,"Method yang dipanggil adalah versi Sales (object sebenarnya).","Itu hanya komisinya.","Tipe kembaliannya double, jadi dicetak 6000000.0."]},
{k:"oop",t:"mc",lv:2,q:"interface di Java berfungsi sebagai…",kode:"interface BisaDiekspor {\n    String keCsv();\n}\n\nclass Laporan implements BisaDiekspor {\n    public String keCsv() { return \"a,b,c\"; }\n}",o:["Kontrak: class yang implements wajib menyediakan semua method yang dideklarasikan","Class yang bisa langsung dibuat object-nya dengan new","Tempat menyimpan data","Pengganti method main"],a:0,
 e:"Interface menjamin kemampuan tertentu. Satu class bisa mengimplementasikan banyak interface, tapi hanya bisa extends satu class induk.",
 w:[null,"Interface tidak bisa langsung dibuat object-nya.","Interface tidak untuk menyimpan data object.","main tetap diperlukan sebagai titik masuk."]},
{k:"oop",t:"mc",lv:2,q:"Anggota class yang ditandai static…",o:["Milik class itu sendiri, bukan milik tiap object — dipanggil dengan NamaClass.anggota","Tidak bisa diubah","Hanya untuk teks","Otomatis dihapus"],a:0,
 e:"Contoh: Math.max(3, 8) dipanggil tanpa new Math(). Penghitung jumlah object yang sudah dibuat juga biasanya static. Bedakan dengan final (tidak bisa diubah).",
 w:[null,"Tidak bisa diubah adalah arti final.","static bisa untuk tipe apa pun.","static tidak terkait penghapusan."]},
{k:"oop",t:"mc",lv:2,q:"Urutan access modifier dari yang paling tertutup ke paling terbuka:",o:["private → (default/package) → protected → public","public → protected → private","protected → private → public","Semua sama"],a:0,
 e:"private: hanya di class itu. Default (tanpa kata kunci): satu package. protected: package + subclass. public: semua. Aturan praktis: mulai dari private, buka seperlunya.",
 w:[null,"Itu dari yang paling terbuka.","Urutannya keliru.","Tingkat aksesnya berbeda-beda."]},
{k:"oop",t:"is",lv:1,q:"Kata kunci untuk mewarisi class lain: class Sales ______ Karyawan",a:["extends"],
 h:"Artinya 'memperluas'.",
 e:"extends untuk class (hanya satu induk), implements untuk interface (boleh banyak). Di Python: class Sales(Karyawan); di Odoo: _inherit."},

// ---- BAB 5: Koleksi & exception ----
{k:"koleksi",t:"mc",lv:1,q:"Kelebihan ArrayList dibanding array biasa (int[]):",o:["Ukurannya bisa bertambah/berkurang otomatis dan punya method praktis (add, remove, contains)","Lebih cepat dalam semua kasus","Bisa menyimpan tipe primitif int langsung","Tidak perlu import"],a:0,
 e:"Array ukurannya tetap sejak dibuat. ArrayList tumbuh sesuai kebutuhan — mirip list di Python dan array di JavaScript.",
 w:[null,"Array biasa kadang lebih cepat.","ArrayList memakai class pembungkus (Integer), bukan int.","Perlu import java.util.ArrayList."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"ArrayList<String> sales = new ArrayList<>();\nsales.add(\"Andi\");\nsales.add(\"Bima\");\nsales.add(\"Citra\");\nsales.remove(\"Bima\");\nSystem.out.println(sales.size() + \" \" + sales.get(1));",o:["2 Citra","3 Bima","2 Bima","2 Andi"],a:0,vr:"java",
 e:"Setelah Bima dihapus, isinya [Andi, Citra] dan elemen di belakangnya bergeser maju. size() = 2, get(1) = Citra.",
 w:[null,"Bima sudah dihapus.","Elemen bergeser setelah penghapusan.","get(1) adalah elemen kedua."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"HashMap<String, Integer> stok = new HashMap<>();\nstok.put(\"Laptop\", 5);\nstok.put(\"Mouse\", 20);\nstok.put(\"Laptop\", 3);\nSystem.out.println(stok.get(\"Laptop\") + \" \" + stok.size());",o:["3 2","5 2","8 2","3 3"],a:0,vr:"java",
 e:"HashMap menyimpan pasangan kunci → nilai (seperti dict Python). Kunci bersifat unik: put dengan kunci yang sama MENIMPA nilai lama. Jadi Laptop = 3 dan jumlah kunci tetap 2.",
 w:[null,"Nilai 5 sudah ditimpa.","put tidak menjumlahkan nilai.","Kunci Laptop tidak bertambah, hanya diperbarui."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"String[] kota = {\"Jakarta\", \"Bandung\", \"Jakarta\"};\nHashMap<String, Integer> hitung = new HashMap<>();\nfor (String k : kota) {\n    hitung.put(k, hitung.getOrDefault(k, 0) + 1);\n}\nSystem.out.println(hitung.get(\"Jakarta\"));",o:["2","1","3","null"],a:0,vr:"java",
 e:"Pola menghitung frekuensi — versi Java dari d.get(k, 0) + 1 di Python. getOrDefault mengembalikan 0 jika kunci belum ada.",
 w:[null,"Jakarta muncul dua kali.","Bandung tidak ikut dihitung sebagai Jakarta.","Kunci Jakarta sudah diisi."]},
{k:"koleksi",t:"mc",lv:2,q:"Output kode ini:",kode:"try {\n    int x = Integer.parseInt(\"12a\");\n    System.out.println(x);\n} catch (NumberFormatException e) {\n    System.out.println(\"Bukan angka\");\n}",o:["Bukan angka","12","0","Program berhenti dengan error"],a:0,vr:"java",
 e:"parseInt gagal → melempar NumberFormatException → ditangkap catch. Baris println(x) tidak pernah dijalankan. Sama dengan try/except di Python.",
 w:[null,"parseInt tidak mengambil angka di depan secara otomatis.","Tidak ada nilai default; masuk ke catch.","Exception-nya ditangkap, jadi program tetap berjalan."]},
{k:"koleksi",t:"mc",lv:2,q:"Kenapa ArrayList<int> tidak bisa dipakai, sedangkan ArrayList<Integer> bisa?",o:["Generics hanya menerima tipe objek; int adalah tipe primitif, jadi dipakai pembungkusnya Integer","int terlalu kecil","Integer lebih cepat dari int","Itu hanya aturan penulisan, keduanya sama"],a:0,
 e:"Setiap tipe primitif punya class pembungkus: int → Integer, double → Double, boolean → Boolean. Java mengubah keduanya otomatis (autoboxing).",
 w:[null,"Bukan soal ukuran.","Integer justru sedikit lebih berat dari int.","ArrayList<int> tidak bisa dikompilasi."]},
{k:"koleksi",t:"mc",lv:3,q:"Output kode ini:",kode:"List<Integer> total = List.of(14, 2, 6, 7);\nint hasil = total.stream()\n                .filter(t -> t >= 6)\n                .mapToInt(Integer::intValue)\n                .sum();\nSystem.out.println(hasil);",o:["27","29","4","21"],a:0,vr:"java",
 e:"Stream API (Java 8+) mirip rantai filter-map-reduce di JavaScript atau pandas: ambil yang ≥ 6 (14, 6, 7) lalu jumlahkan = 27.",
 w:[null,"Itu jumlah semua angka.","4 adalah banyaknya elemen.","Angka 14 juga lolos filter."]},
{k:"koleksi",t:"mc",lv:1,q:"Di mana Java paling banyak dipakai di dunia kerja?",o:["Backend perusahaan besar (misal Spring Boot), sistem perbankan, dan aplikasi Android (bersama Kotlin)","Mendesain logo","Membuat spreadsheet","Hanya untuk tugas kuliah"],a:0,
 e:"Java banyak muncul di lowongan backend developer, terutama di bank, telko, dan perusahaan besar. Untuk jalur utamamu (Data/BI/Odoo), Java bukan prioritas — tapi konsep OOP-nya membantu memahami bahasa lain.",
 w:[null,"Desain grafis tidak memakai Java.","Spreadsheet memakai Excel/Sheets.","Java sangat banyak dipakai di industri."]}
];

const MATERI_JAVA = [
{k:"dasar",judul:"Dasar Java: Struktur Program & Tipe Data",materi:`
<p><b>Kenapa bukan prioritas untukmu?</b> Jalur utamamu (Data Analyst, BI, Odoo Consultant) memakai SQL, Python, dan JavaScript. Java tetap berguna: banyak lowongan backend di Indonesia memakainya, dan OOP-nya sangat rapi untuk dipelajari.</p>
<pre><code>public class Main {
    public static void main(String[] args) {     // titik masuk program
        int    umur  = 22;          // bilangan bulat
        double harga = 150000.0;    // desimal
        String nama  = "Rina";      // teks (class, S besar)
        char   kode  = 'A';         // satu karakter
        boolean aktif = true;
        final double PAJAK = 0.11;  // konstanta
        var total = harga * 3;      // tipe disimpulkan (Java 10+)

        System.out.println("Halo " + nama);   // cetak + pindah baris
    }
}</code></pre>
<ul>
<li>Java <b>bertipe statis</b>: tipe diperiksa sebelum program jalan → banyak bug tertangkap lebih awal.</li>
<li>Setiap pernyataan diakhiri <code>;</code>, blok memakai <code>{ }</code>.</li>
<li><code>7 / 2 = 3</code> (int ÷ int), <code>7 / 2.0 = 3.5</code>.</li>
<li><code>"Total: " + 2 + 3 = "Total: 23"</code> — gunakan kurung <code>(2 + 3)</code>.</li>
</ul>
<div class="praktik">🧪 <b>Coba tanpa install:</b> cari "online Java compiler" di browser, tempel kodenya, lalu tekan Run. Jika JDK sudah ter-install: simpan sebagai <code>Main.java</code>, lalu jalankan <code>java Main.java</code>.</div>`},

{k:"kontrol",judul:"Kontrol Alur: if, switch, for, while",materi:`
<pre><code>if (nilai &gt;= 80) { … } else if (nilai &gt;= 70) { … } else { … }

String jenis = switch (hari) {              // Java 14+
    case "Sabtu", "Minggu" -&gt; "Libur";
    default -&gt; "Kerja";
};

String label = qty &gt;= 5 ? "Grosir" : "Ecer";   // ternary

for (int i = 1; i &lt;= 5; i++) { … }
while (saldo &lt; 150) { … }                       // break / continue</code></pre>
<div class="catatan">⚠️ <b>Jebakan Java paling terkenal:</b> bandingkan teks dengan <code>a.equals(b)</code>, bukan <code>a == b</code>. <code>==</code> pada objek membandingkan alamatnya, bukan isinya.</div>`},

{k:"array",judul:"Array & String",materi:`
<pre><code>int[] angka = {3, 8, 2};
angka[0];          // 3 (indeks mulai 0)
angka.length;      // 3  ← properti, tanpa ()
Arrays.sort(angka);
Arrays.toString(angka);   // "[2, 3, 8]"

for (int a : angka) { … }  // for-each

String kota = "Jakarta";
kota.length();             // 7  ← method, pakai ()
kota.substring(0, 4);      // "Jaka"
kota.charAt(0);            // 'J'
kota.toUpperCase();        // "JAKARTA" (string baru!)
"a,b,c".split(",");        // ["a", "b", "c"]</code></pre>
<p>String <b>immutable</b>: method seperti <code>toUpperCase()</code> menghasilkan string baru, jadi simpan hasilnya: <code>s = s.toUpperCase();</code>.</p>`},

{k:"oop",judul:"OOP: Class, Object, Inheritance, Interface",materi:`
<pre><code>class Produk {
    private String nama;          // encapsulation: field private
    private int harga;

    Produk(String nama, int harga) {   // constructor
        this.nama = nama;
        this.harga = harga;
    }
    int getHarga() { return harga; }   // getter
    int totalHarga(int qty) { return harga * qty; }
}

class Karyawan { double gaji() { return 5_000_000; } }
class Sales extends Karyawan {          // inheritance
    @Override double gaji() { return super.gaji() + 1_000_000; }
}

interface BisaDiekspor { String keCsv(); }   // kontrak
class Laporan implements BisaDiekspor { public String keCsv() { return "…"; } }</code></pre>
<p><b>Empat pilar OOP:</b> encapsulation (lindungi data), inheritance (warisi), polymorphism (satu tipe banyak perilaku), abstraction (sembunyikan detail).</p>
<div class="catatan">🔗 Konsep yang sama ada di Python (<code>class Sales(Karyawan)</code>) dan di Odoo (<code>_inherit</code>). Belajar OOP di Java membantu memahami keduanya.</div>`},

{k:"koleksi",judul:"Koleksi (ArrayList, HashMap), Exception & Stream",materi:`
<pre><code>import java.util.*;

ArrayList&lt;String&gt; sales = new ArrayList&lt;&gt;();
sales.add("Andi"); sales.remove("Andi"); sales.size(); sales.get(0);

HashMap&lt;String, Integer&gt; stok = new HashMap&lt;&gt;();
stok.put("Laptop", 5);                       // kunci unik → put menimpa
stok.getOrDefault("Mouse", 0);

try {
    int x = Integer.parseInt("12a");
} catch (NumberFormatException e) {
    System.out.println("Bukan angka");
}

int hasil = List.of(14, 2, 6, 7).stream()
    .filter(t -&gt; t &gt;= 6).mapToInt(Integer::intValue).sum();   // 27</code></pre>
<p>Generics memakai class pembungkus: <code>ArrayList&lt;Integer&gt;</code>, bukan <code>&lt;int&gt;</code>.</p>
<div class="catatan">🧭 Java populer untuk backend (Spring Boot), perbankan, dan Android. Pelajari secukupnya agar bisa membaca kode dan lolos tes dasar; fokus utamamu tetap SQL, Python, dan JavaScript.</div>`}
];
