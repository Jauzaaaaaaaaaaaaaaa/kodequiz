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
<h4>Java itu apa, dan perlukah kamu mempelajarinya?</h4>
<p><b>Java</b> adalah bahasa pemrograman yang sangat populer untuk sistem besar: aplikasi bank, sistem perusahaan, dan aplikasi Android. Namanya mirip JavaScript, tapi keduanya bahasa yang <b>berbeda sama sekali</b>.</p>
<p><b>Kenapa bukan prioritas untukmu?</b> Jalur utamamu (Data Analyst, BI, Odoo Consultant) memakai SQL, Python, dan JavaScript. Java tetap berguna: banyak lowongan backend di Indonesia memakainya, dan cara Java menyusun program (OOP) sangat rapi untuk dipelajari.</p>
<h4>Program Java pertama</h4>
<pre><code>public class Main {
    public static void main(String[] args) {
        System.out.println("Halo, dunia!");
    }
}</code></pre>
<p>Bagi pemula, kode ini terlihat menakutkan untuk sekadar mencetak satu kalimat. Tenang, bacanya begini:</p>
<ol><li><code>public class Main { … }</code> = di Java, <b>semua kode harus berada di dalam class</b> (bungkusan). Nama class ini <code>Main</code>, dan nama filenya harus sama: <code>Main.java</code>.</li><li><code>public static void main(String[] args) { … }</code> = <b>pintu masuk program</b>. Saat program dijalankan, Java selalu mencari method bernama <code>main</code> dan mulai dari sana. Untuk sekarang, anggap baris ini "mantra wajib" yang dihafal saja; maknanya akan jelas di bab OOP.</li><li><code>System.out.println("Halo, dunia!");</code> = <b>cetak</b> teks lalu <b>pindah baris</b> (<code>ln</code> = <i>line</i>). Ada juga <code>System.out.print(…)</code> yang mencetak <b>tanpa</b> pindah baris, jadi cetakan berikutnya menempel di baris yang sama.</li><li>Setiap perintah diakhiri <b>titik koma</b> <code>;</code>, dan setiap blok dibungkus kurung kurawal <code>{ }</code>.</li></ol>
<h4>Variabel harus disebut tipenya</h4>
<p>Berbeda dengan Python, Java mewajibkan kamu <b>menyebut jenis data</b> saat membuat variabel. Java disebut <b>bertipe statis</b>: tipe diperiksa sebelum program jalan, sehingga banyak kesalahan ketahuan lebih awal.</p>
<pre><code>int     umur  = 22;          // bilangan bulat
double  harga = 150000.0;    // bilangan desimal
String  nama  = "Rina";      // teks (S kapital!)
char    kode  = 'A';         // SATU karakter, kutip tunggal
boolean aktif = true;        // benar/salah
final double PAJAK = 0.11;   // konstanta, tidak boleh diubah
var total = harga * 3;       // Java menebak tipenya sendiri (Java 10+)</code></pre>
<table class="mini-pivot"><tr><th>Tipe</th><th>Isi</th><th>Contoh</th></tr>
<tr><td><code>int</code></td><td>bilangan bulat</td><td><code>22</code></td></tr>
<tr><td><code>double</code></td><td>bilangan desimal</td><td><code>3.75</code></td></tr>
<tr><td><code>String</code></td><td>teks, kutip <b>ganda</b></td><td><code>"Rina"</code></td></tr>
<tr><td><code>char</code></td><td>satu huruf, kutip <b>tunggal</b></td><td><code>'A'</code></td></tr>
<tr><td><code>boolean</code></td><td>benar/salah</td><td><code>true</code>, <code>false</code></td></tr></table>
<ul><li><code>final</code> = variabel <b>tidak boleh diubah</b> lagi setelah diisi (konstanta).</li><li><code>var</code> = Java menyimpulkan tipenya dari isi. Tetap bertipe tetap, hanya tidak perlu ditulis.</li><li>Kalau tipe tidak cocok, misalnya <code>int umur = "dua puluh";</code>, program <b>gagal dikompilasi</b> (ditolak sebelum dijalankan).</li></ul>
<h4>Dua jebakan hitungan</h4>
<pre><code>System.out.println(7 / 2);      // 3    ← int dibagi int = int, sisa dibuang
System.out.println(7 / 2.0);    // 3.5  ← salah satu desimal, hasil desimal
System.out.println("Total: " + 2 + 3);    // Total: 23
System.out.println("Total: " + (2 + 3));  // Total: 5</code></pre>
<ul><li>Pembagian dua bilangan bulat menghasilkan bilangan bulat; bagian desimal <b>dibuang</b>.</li><li><code>+</code> dibaca dari kiri. Begitu bertemu teks, sisanya <b>disambung sebagai teks</b>: "Total: " + 2 = "Total: 2", lalu + 3 = "Total: 23". Pakai kurung supaya angkanya dijumlah dulu.</li></ul>
<div class="praktik"><b>Coba tanpa install:</b> cari "online Java compiler" di browser, tempel kode di atas, lalu tekan Run. Jika JDK sudah terpasang: simpan sebagai <code>Main.java</code>, lalu jalankan <code>java Main.java</code> di terminal.</div>
`},

{k:"kontrol",judul:"Kontrol Alur: if, switch, for, while",materi:`
<h4>Mengatur jalannya program</h4>
<p>Seperti di bahasa lain, Java bisa <b>memilih</b> (percabangan) dan <b>mengulang</b> (perulangan). Tulisannya mirip JavaScript.</p>
<h4>if, else if, else</h4>
<pre><code>int nilai = 75;
if (nilai &gt;= 80) {
    System.out.println("A");
} else if (nilai &gt;= 70) {
    System.out.println("B");
} else {
    System.out.println("C");
}
// B</code></pre>
<p>Syarat ditulis di dalam kurung <code>( )</code>, isinya di dalam kurung kurawal <code>{ }</code>. Java memeriksa dari atas dan berhenti di syarat pertama yang benar.</p>
<h4>switch modern (Java 14+)</h4>
<pre><code>String hari = "Sabtu";
String jenis = switch (hari) {
    case "Sabtu", "Minggu" -&gt; "Libur";
    default -&gt; "Kerja";
};
// jenis = "Libur"</code></pre>
<p><code>switch</code> mencocokkan satu nilai dengan beberapa kemungkinan. Bentuk modern memakai panah <code>-&gt;</code> dan bisa langsung menghasilkan nilai. <code>default</code> = kalau tidak ada yang cocok.</p>
<h4>Ternary: if satu baris</h4>
<pre><code>int qty = 5;
String label = qty &gt;= 5 ? "Grosir" : "Ecer";   // "Grosir"</code></pre>
<p>Bacanya: "apakah qty ≥ 5? <b>ya</b> → Grosir, <b>tidak</b> → Ecer".</p>
<h4>for: mengulang dengan hitungan</h4>
<pre><code>int total = 0;
for (int i = 1; i &lt;= 5; i++) {
    total += i;
}
// total = 1 + 2 + 3 + 4 + 5 = 15</code></pre>
<p>Tiga bagian di dalam kurung: <b>mulai</b> (<code>int i = 1</code>), <b>ulangi selama</b> (<code>i &lt;= 5</code>), dan <b>setiap putaran</b> (<code>i++</code>, tambah 1).</p>
<p>Loop di dalam loop: kalau loop luar berputar 3 kali dan loop dalam 2 kali, isi loop dalam dijalankan 3 × 2 = 6 kali.</p>
<h4>while: mengulang selama syarat benar</h4>
<pre><code>int saldo = 100, bulan = 0;
while (true) {
    saldo += 10;
    bulan++;
    if (saldo &gt;= 150) break;
}
// bulan = 5, saldo = 150</code></pre>
<p><code>while (true)</code> mengulang tanpa henti, sampai bertemu <code>break</code> yang <b>menghentikan loop seketika</b>. <code>continue</code> melewati sisa putaran dan lanjut ke putaran berikutnya.</p>
<h4>Jebakan paling terkenal di Java</h4>
<pre><code>String a = new String("Andi");
String b = "Andi";
System.out.println(a == b);        // false
System.out.println(a.equals(b));   // true</code></pre>
<p>Untuk teks (dan objek lain), <code>==</code> membandingkan <b>alamat penyimpanannya</b>, bukan isinya. Ibarat dua buku yang judul dan isinya sama persis, tapi disimpan di dua rak berbeda: <code>==</code> bertanya "apakah ini buku yang sama persis (rak yang sama)?", sedangkan <code>.equals()</code> bertanya "apakah isinya sama?".</p>
<div class="catatan">Selalu bandingkan teks dengan <code>a.equals(b)</code>, bukan <code>a == b</code>.</div>
<div class="praktik"><b>Coba sendiri:</b> tulis program yang mencetak angka 1 sampai 20, tapi untuk kelipatan 3 cetak "Fizz" sebagai gantinya.</div>
`},

{k:"array",judul:"Array & String",materi:`
<h4>Array: banyak nilai dalam satu variabel</h4>
<p><b>Array</b> adalah deretan nilai <b>bertipe sama</b> dengan jumlah tetap, seperti loker bernomor di stasiun: jumlah lokernya sudah ditentukan sejak awal.</p>
<pre><code>int[] angka = {3, 8, 2};
angka[0];          // 3   (indeks mulai dari 0)
angka[1];          // 8
angka.length;      // 3   ← jumlah isi, TANPA kurung</code></pre>
<ul><li><code>int[]</code> artinya "array berisi int".</li><li>Indeks (nomor urut) <b>dimulai dari 0</b>. Array berisi 3 nilai punya indeks 0, 1, 2.</li><li>Mengakses <code>angka[3]</code> membuat program error <code>ArrayIndexOutOfBoundsException</code>, artinya "nomor loker di luar jangkauan".</li></ul>
<h4>Mengolah array</h4>
<pre><code>int[] total = {14, 2, 6};
int jumlah = 0;
for (int t : total) {      // for-each: "untuk setiap t di total"
    jumlah += t;
}
// jumlah = 22

int[] a = {5, 1, 4};
Arrays.sort(a);                          // urutkan: {1, 4, 5}
System.out.println(Arrays.toString(a));  // [1, 4, 5]</code></pre>
<ul><li><code>for (int t : total)</code> = <b>for-each</b>, mengambil setiap isi satu per satu tanpa perlu indeks.</li><li><code>Arrays.sort()</code> mengurutkan, <code>Arrays.toString()</code> mengubah array jadi teks yang bisa dicetak. Keduanya butuh <code>import java.util.Arrays;</code> di awal file.</li></ul>
<h4>String: mengolah teks</h4>
<pre><code>String kota = "Jakarta";
kota.length();            // 7    ← method, PAKAI kurung
kota.substring(0, 4);     // "Jaka"  (indeks 0 sampai sebelum 4)
kota.charAt(0);           // 'J'   satu karakter
kota.toUpperCase();       // "JAKARTA"
String[] bagian = "Andi,Jakarta,Laptop".split(",");
bagian[1];                // "Jakarta"</code></pre>
<div class="catatan">Perhatikan bedanya: array memakai <code>.length</code> <b>tanpa</b> kurung (properti), String memakai <code>.length()</code> <b>dengan</b> kurung (method). Ini sering membuat pemula error.</div>
<h4>String tidak bisa diubah (immutable)</h4>
<pre><code>String s = "data";
s.toUpperCase();
System.out.println(s);   // data   ← tidak berubah!

s = s.toUpperCase();
System.out.println(s);   // DATA</code></pre>
<p>Method seperti <code>toUpperCase()</code> <b>membuat teks baru</b>, tidak mengubah yang lama. Kalau hasilnya tidak disimpan, hasilnya hilang. Simpan dengan <code>s = s.toUpperCase();</code>.</p>
<p>Untuk membandingkan isi teks, pakai <code>a.equals(b)</code> (lihat bab sebelumnya).</p>
<div class="praktik"><b>Coba sendiri:</b> buat array nilai <code>{80, 65, 90, 72}</code>, hitung rata-ratanya dengan for-each, lalu cetak nilai tertinggi setelah diurutkan.</div>
`},

{k:"oop",judul:"OOP: Class, Object, Inheritance, Interface",materi:`
<h4>OOP: menyusun program dari "benda"</h4>
<p><b>OOP</b> (<i>Object-Oriented Programming</i>) adalah cara menyusun program dari benda-benda yang punya <b>data</b> dan <b>kemampuan</b>. Java dibangun sepenuhnya dengan cara ini.</p>
<ul><li><b>Class</b> = <b>cetakan/rancangan</b>, misalnya rancangan "Produk".</li><li><b>Object</b> = <b>benda nyata</b> hasil cetakan, misalnya produk "Laptop seharga 8 juta".</li></ul>
<p>Satu class bisa menghasilkan banyak object, seperti satu cetakan kue menghasilkan banyak kue.</p>
<h4>Membuat class</h4>
<pre><code>class Produk {
    private String nama;
    private int harga;

    Produk(String nama, int harga) {
        this.nama = nama;
        this.harga = harga;
    }

    int getHarga() { return harga; }
    int totalHarga(int qty) { return harga * qty; }
}

Produk p = new Produk("Mouse", 150000);
p.totalHarga(2);     // 300000</code></pre>
<ol><li><code>private String nama;</code> = <b>field</b>, data milik setiap object. <code>private</code> artinya hanya bisa diakses dari dalam class ini.</li><li><code>Produk(String nama, int harga) { … }</code> = <b>constructor</b>, kode yang dijalankan <b>saat object dibuat</b>. Namanya sama dengan nama class.</li><li><code>this.nama = nama;</code> = <code>this</code> artinya "object ini sendiri". Baris ini mengisi field <code>nama</code> milik object dengan parameter <code>nama</code>.</li><li><code>getHarga()</code> = <b>getter</b>, method untuk membaca data private dari luar dengan cara yang terkendali.</li><li><code>new Produk(…)</code> = <b>membuat object</b> baru dari class.</li></ol>
<h4>Empat pilar OOP</h4>
<table class="mini-pivot"><tr><th>Pilar</th><th>Artinya</th><th>Contoh</th></tr>
<tr><td>Encapsulation (pembungkusan)</td><td><b>lindungi data</b>: field dibuat <code>private</code>, diakses lewat getter/setter</td><td>saldo rekening tidak bisa diubah sembarangan</td></tr>
<tr><td>Inheritance (pewarisan)</td><td>class anak <b>mewarisi</b> isi class induk</td><td>Sales mewarisi Karyawan</td></tr>
<tr><td>Polymorphism (banyak bentuk)</td><td>method yang sama berperilaku beda di class berbeda</td><td>gaji Sales beda cara hitungnya dengan gaji Karyawan biasa</td></tr>
<tr><td>Abstraction (abstraksi)</td><td><b>sembunyikan detail</b>, tampilkan yang penting saja</td><td>kamu menekan tombol "kirim" tanpa perlu tahu isi jaringan</td></tr></table>
<h4>Inheritance: extends</h4>
<pre><code>class Karyawan {
    double gaji() { return 5_000_000; }
}
class Sales extends Karyawan {
    @Override
    double gaji() { return super.gaji() + 1_000_000; }
}
// new Sales().gaji() = 6000000.0</code></pre>
<ul><li><code>extends</code> = "<b>mewarisi</b>". Sales otomatis punya semua isi Karyawan.</li><li><code>@Override</code> = penanda bahwa method ini <b>menimpa</b> method induk dengan isi baru.</li><li><code>super.gaji()</code> = panggil versi <b>milik induk</b> (5 juta), lalu ditambah 1 juta.</li><li><code>5_000_000</code> = garis bawah hanya untuk memudahkan membaca angka, sama dengan 5000000.</li></ul>
<h4>Interface: kontrak</h4>
<pre><code>interface BisaDiekspor {
    String keCsv();
}
class Laporan implements BisaDiekspor {
    public String keCsv() { return "…"; }
}</code></pre>
<p><b>Interface</b> adalah <b>kontrak/janji</b>: "siapa pun yang memakai interface ini <b>wajib</b> punya method <code>keCsv()</code>". <code>implements</code> artinya "menandatangani kontrak itu".</p>
<h4>static dan access modifier</h4>
<ul><li><code>static</code> = milik <b>class</b>, bukan milik setiap object. Contoh: penghitung jumlah produk yang dibuat, yang nilainya sama untuk semua object.</li><li><b>Access modifier</b> mengatur siapa yang boleh mengakses, dari paling tertutup ke paling terbuka: <code>private</code> (hanya class itu) → <i>default</i>/tanpa tulisan (satu package) → <code>protected</code> (package + class turunan) → <code>public</code> (semua).</li></ul>
<div class="catatan">Konsep yang sama ada di Python (<code>class Sales(Karyawan)</code>) dan di Odoo (<code>_inherit</code>). Belajar OOP di Java membantu memahami keduanya.</div>
`},

{k:"koleksi",judul:"Koleksi (ArrayList, HashMap), Exception & Stream",materi:`
<h4>Koleksi: wadah yang lebih fleksibel dari array</h4>
<p>Array punya kelemahan: <b>ukurannya tetap</b>. Begitu dibuat berisi 3, tidak bisa ditambah jadi 4. Java menyediakan <b>koleksi</b> yang lebih luwes.</p>
<h4>ArrayList: daftar yang bisa memanjang</h4>
<pre><code>import java.util.*;

ArrayList&lt;String&gt; sales = new ArrayList&lt;&gt;();
sales.add("Andi");       // tambah
sales.add("Bima");
sales.get(0);            // "Andi"  ambil berdasarkan indeks
sales.size();            // 2       jumlah isi
sales.remove("Andi");    // hapus</code></pre>
<ul><li><code>ArrayList</code> <b>bisa bertambah dan berkurang</b> isinya kapan saja. Inilah kelebihan utamanya dibanding array biasa.</li><li><code>&lt;String&gt;</code> di dalam kurung sudut disebut <b>generics</b>: menyebut jenis isi daftarnya.</li><li>Generics hanya menerima <b>class</b>, bukan tipe dasar. Jadi tulis <code>ArrayList&lt;Integer&gt;</code>, bukan <code>ArrayList&lt;int&gt;</code>. <code>Integer</code> adalah "pembungkus" (<i>wrapper class</i>) untuk <code>int</code>; begitu juga <code>Double</code> untuk <code>double</code>.</li></ul>
<h4>HashMap: pasangan kunci dan nilai</h4>
<pre><code>HashMap&lt;String, Integer&gt; stok = new HashMap&lt;&gt;();
stok.put("Laptop", 5);
stok.put("Laptop", 7);          // kunci sama → nilai lama DITIMPA
stok.get("Laptop");             // 7
stok.getOrDefault("Mouse", 0);  // 0, karena Mouse belum ada</code></pre>
<p><b>HashMap</b> seperti buku telepon: cari berdasarkan <b>kunci</b> (nama), dapat <b>nilainya</b> (nomor). Kunci harus unik; <code>put</code> dengan kunci yang sudah ada akan <b>mengganti</b> nilainya. <code>getOrDefault</code> memberi nilai cadangan kalau kuncinya tidak ada. Pola ini sering dipakai untuk <b>menghitung kemunculan</b>, misalnya berapa kali setiap kota muncul.</p>
<h4>Exception: menangani error</h4>
<pre><code>try {
    int x = Integer.parseInt("12a");
    System.out.println(x);
} catch (NumberFormatException e) {
    System.out.println("Bukan angka");
}
// Bukan angka</code></pre>
<ul><li><code>Integer.parseInt("12")</code> mengubah teks menjadi angka. Kalau teksnya bukan angka, terjadi <b>exception</b> (error saat program berjalan) bernama <code>NumberFormatException</code>.</li><li><code>try</code> = <b>coba</b> jalankan. <code>catch</code> = kalau terjadi error jenis itu, <b>tangkap</b> dan jalankan kode penggantinya. Program tidak berhenti mendadak.</li></ul>
<h4>Stream: mengolah daftar seperti rantai</h4>
<pre><code>int hasil = List.of(14, 2, 6, 7).stream()
    .filter(t -&gt; t &gt;= 6)
    .mapToInt(Integer::intValue)
    .sum();
// 14 + 6 + 7 = 27</code></pre>
<p>Bacanya seperti jalur produksi:</p>
<ol><li><code>List.of(…)</code> = buat daftar.</li><li><code>.stream()</code> = alirkan isinya satu per satu.</li><li><code>.filter(t -&gt; t &gt;= 6)</code> = <b>saring</b>, hanya yang ≥ 6 (14, 6, 7). <code>t -&gt; …</code> adalah fungsi singkat (<i>lambda</i>).</li><li><code>.mapToInt(…).sum()</code> = ubah ke angka lalu <b>jumlahkan</b>: 27.</li></ol>
<p>Ini mirip <code>filter</code> dan <code>reduce</code> di JavaScript atau Python.</p>
<div class="catatan">Java populer untuk backend (Spring Boot), perbankan, dan Android. Pelajari secukupnya agar bisa membaca kode dan lolos tes dasar; fokus utamamu tetap SQL, Python, dan JavaScript.</div>
`}
];
