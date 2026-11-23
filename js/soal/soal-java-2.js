// ============ JAVA lanjutan — bab 6–7 ============
// Method & rekursi, lalu fitur Java modern (enum, record, generics, exception, Optional).
// vr:"java" → dijalankan dengan JDK 17+ oleh alat/cek-soal.js bila javac terpasang.

SOAL_JAVA.push(
// ---- BAB 6: method ----
{k:"method",t:"mc",lv:1,q:"Output kode ini:",kode:"public class Main {\n    static int kuadrat(int x) {\n        return x * x;\n    }\n    public static void main(String[] args) {\n        System.out.println(kuadrat(5));\n    }\n}",o:["25","10","5","Error"],a:0,vr:"java",
 e:"Bagian method: static (milik class, bisa dipanggil dari main tanpa objek), int (tipe nilai kembali), kuadrat (nama), (int x) (parameter). return mengirim hasil ke pemanggil.",
 w:[null,"x dikali x, bukan dikali 2.","Yang dicetak hasil return, bukan argumennya.","Kodenya sah."]},
{k:"method",t:"mc",lv:2,q:"Output kode ini:",kode:"public class Main {\n    static int tambah(int a, int b) { return a + b; }\n    static double tambah(double a, double b) { return a + b; }\n    public static void main(String[] args) {\n        System.out.println(tambah(2, 3));\n        System.out.println(tambah(2.0, 3));\n    }\n}",o:["5 lalu 5.0","5 lalu 5","5.0 lalu 5.0","Error: nama method kembar"],a:0,vr:"java",vx:"5\n5.0",
 e:"Overloading: beberapa method boleh bernama sama asalkan parameternya berbeda (jumlah atau tipe). Java memilih versi yang paling cocok dengan argumen.\n• tambah(2, 3): dua int → versi int → 5.\n• tambah(2.0, 3): ada double → versi double → 5.0.",
 w:[null,"Panggilan kedua memakai versi double.","Panggilan pertama memakai versi int.","Overloading itu sah."]},
{k:"method",t:"mc",lv:2,q:"Output kode ini:",kode:"public class Main {\n    static void ubah(int x) {\n        x = 99;\n    }\n    public static void main(String[] args) {\n        int nilai = 10;\n        ubah(nilai);\n        System.out.println(nilai);\n    }\n}",o:["10","99","0","Error"],a:0,vr:"java",
 e:"Java selalu pass by value: yang dikirim ke method adalah SALINAN nilainya. Mengubah x di dalam method tidak menyentuh variabel nilai di main.\n• Kalau ingin hasilnya, kembalikan dengan return lalu simpan: nilai = ubah(nilai);",
 w:[null,"Yang diubah hanya salinan.","nilai sudah diisi 10.","Kodenya sah."]},
{k:"method",t:"mc",lv:3,q:"Output kode ini:",kode:"public class Main {\n    static void ubah(int[] arr) {\n        arr[0] = 99;\n    }\n    public static void main(String[] args) {\n        int[] data = {10, 20};\n        ubah(data);\n        System.out.println(data[0]);\n    }\n}",o:["99","10","20","Error"],a:0,vr:"java",
 e:"Masih pass by value, tapi yang disalin adalah ALAMAT (referensi) array. Salinan alamat menunjuk array yang sama, jadi mengubah isinya terlihat dari main.\n• Bedanya: arr = new int[]{1}; di dalam method TIDAK akan mengubah data di main.",
 w:[null,"Isi array diubah lewat referensi yang sama.","Yang diubah indeks 0.","Kodenya sah."]},
{k:"method",t:"mc",lv:2,q:"Output kode ini:",kode:"String s = \"Java\";\ns.concat(\" 21\");\nSystem.out.println(s);",o:["Java","Java 21","21","Error"],a:0,vr:"java",
 e:"String di Java immutable (tidak bisa diubah). concat membuat String BARU dan mengembalikannya; karena tidak disimpan, hasilnya hilang. Cara benar: s = s.concat(\" 21\"); atau s += \" 21\";",
 w:[null,"Hasil concat tidak disimpan ke s.","s masih berisi teks lama.","Kodenya sah."]},
{k:"method",t:"mc",lv:2,q:"Output kode ini:",kode:"public class Main {\n    static long faktorial(int n) {\n        if (n <= 1) return 1;\n        return n * faktorial(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(faktorial(5));\n    }\n}",o:["120","15","24","StackOverflowError"],a:0,vr:"java",
 e:"Rekursi: 5 × 4 × 3 × 2 × 1 = 120. Kasus dasar n <= 1 menghentikan pemanggilan. Tanpa kasus dasar, Java melempar StackOverflowError.\n• Tipe long dipakai karena faktorial cepat melampaui batas int (20! sudah butuh long).",
 w:[null,"Itu penjumlahan.","Itu 4!.","Ada kasus dasar."]},
{k:"method",t:"mc",lv:2,q:"Output kode ini:",kode:"public class Main {\n    static int total(int... angka) {\n        int t = 0;\n        for (int a : angka) t += a;\n        return t;\n    }\n    public static void main(String[] args) {\n        System.out.println(total(4, 5, 6) + \" \" + total());\n    }\n}",o:["15 0","15","Error: total() butuh argumen","456 0"],a:0,vr:"java",
 e:"int... (varargs) menerima nol atau lebih argumen dan memperlakukannya sebagai array. total() tanpa argumen sah dan menghasilkan array kosong, jadi 0.",
 w:[null,"total() juga dicetak.","Varargs boleh kosong.","Angka dijumlah, bukan digabung."]},
{k:"method",t:"mc",lv:1,q:"Output kode ini:",kode:"System.out.println(7 / 2 + \" \" + 7 % 2 + \" \" + 7 / 2.0);",o:["3 1 3.5","3.5 1 3.5","3 1 3","4 1 3.5"],a:0,vr:"java",
 e:"Pembagian dua int membuang desimal: 7 / 2 = 3. % (modulo) memberi sisa: 1. Kalau salah satu double, hasilnya double: 7 / 2.0 = 3.5.\n• Jebakan rata-rata: (a + b) / 2 dengan int bisa kehilangan .5; pakai (a + b) / 2.0.",
 w:[null,"Pembagian int tidak menghasilkan desimal.","7 / 2.0 menghasilkan double.","Desimal dibuang, bukan dibulatkan ke atas."]},
{k:"method",t:"mc",lv:2,q:"Output kode ini:",kode:"int skor = 72;\nString hasil = skor >= 75 ? \"Lulus\" : \"Remedial\";\nSystem.out.println(hasil);",o:["Remedial","Lulus","72","Error"],a:0,vr:"java",
 e:"Operator ternary: syarat ? nilaiJikaBenar : nilaiJikaSalah. 72 >= 75 salah, jadi \"Remedial\". Cocok untuk pilihan sederhana; untuk logika panjang pakai if-else.",
 w:[null,"72 kurang dari 75.","Yang dicetak hasil, bukan skor.","Ternary sah di Java."]},
{k:"method",t:"mc",lv:2,q:"Di dalam method static main, kamu memanggil method sapa() yang TIDAK static. Apa yang terjadi?",o:["Compile error: method non-static tidak bisa dipanggil tanpa objek","Berjalan normal","Error saat program berjalan","sapa() otomatis menjadi static"],a:0,
 e:"Method non-static milik objek. Dari main (static) kamu harus membuat objek dulu: new Main().sapa(); atau jadikan sapa static. Pesan error-nya: non-static method sapa() cannot be referenced from a static context.",
 w:[null,"Kompilator menolaknya.","Ditolak sejak kompilasi.","Java tidak mengubahnya otomatis."]},
{k:"method",t:"mc",lv:2,q:"Variabel i dideklarasikan di for (int i = 0; i < 3; i++) { }. Setelah perulangan, System.out.println(i); menghasilkan…",o:["Compile error: i tidak dikenal di luar for","3","2","0"],a:0,
 e:"Scope variabel di Java dibatasi kurung kurawal tempat ia dibuat. i hanya hidup di dalam for. Kalau butuh nilainya setelah perulangan, deklarasikan int i; sebelum for.",
 w:[null,"i sudah 'mati' setelah for.","i tidak bisa diakses.","i tidak bisa diakses."]},
{k:"method",t:"mc",lv:1,q:"Output kode ini:",kode:"System.out.println(Math.max(3, 9) + Math.abs(-2) + Math.round(2.5));",o:["14","12","13","Error"],a:0,vr:"java",
 e:"Math.max(3, 9) = 9, Math.abs(-2) = 2, Math.round(2.5) = 3 (dibulatkan ke atas, seperti JavaScript). 9 + 2 + 3 = 14.",
 w:[null,"Math.round(2.5) = 3, bukan 1.","Math.round(2.5) dibulatkan ke 3.","Semua method Math itu sah."]},
{k:"method",t:"is",lv:1,q:"Tipe kembalian untuk method yang tidak mengembalikan nilai: public static ____ cetak()",a:["void"],
 e:"Method void cukup melakukan sesuatu (mencetak, mengubah data) tanpa return nilai. return; boleh dipakai untuk keluar lebih awal."},
{k:"method",t:"is",lv:2,q:"Istilah untuk beberapa method bernama sama dengan parameter berbeda dalam satu class: method ____",a:["overloading"],
 e:"Overloading (satu class, parameter beda) berbeda dengan overriding (class anak menimpa method induk dengan parameter sama)."},

// ---- BAB 7: Java modern ----
{k:"modern",t:"mc",lv:1,q:"Output kode ini:",kode:"public class Main {\n    enum Hari { SENIN, SELASA, RABU }\n    public static void main(String[] args) {\n        Hari h = Hari.SELASA;\n        System.out.println(h + \" \" + h.ordinal());\n    }\n}",o:["SELASA 1","SELASA 2","1 SELASA","selasa 1"],a:0,vr:"java",
 e:"enum adalah tipe dengan daftar nilai tetap (hari, status pesanan, level). Lebih aman dari String karena salah ketik langsung ditolak kompilator. ordinal() = urutan mulai 0.",
 w:[null,"ordinal dimulai dari 0.","Urutan cetaknya nama dulu.","Nama enum dicetak persis seperti ditulis."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini (Java 14+):",kode:"int bulan = 2;\nString musim = switch (bulan) {\n    case 12, 1, 2 -> \"hujan\";\n    case 6, 7, 8 -> \"kemarau\";\n    default -> \"peralihan\";\n};\nSystem.out.println(musim);",o:["hujan","kemarau","peralihan","Error: butuh break"],a:0,vr:"java",
 e:"Switch expression modern: memakai tanda ->, satu case boleh berisi beberapa nilai, langsung menghasilkan nilai, dan tidak perlu break (tidak ada fall-through yang membuat bug).",
 w:[null,"2 termasuk case pertama.","2 cocok dengan case pertama.","Bentuk panah tidak butuh break."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini (Java 16+):",kode:"public class Main {\n    record Titik(int x, int y) {}\n    public static void main(String[] args) {\n        Titik p = new Titik(3, 4);\n        System.out.println(p + \" \" + p.x() + \" \" + p.equals(new Titik(3, 4)));\n    }\n}",o:["Titik[x=3, y=4] 3 true","Titik@1b6d3586 3 false","(3, 4) 3 true","Error"],a:0,vr:"java",
 e:"record membuat class penyimpan data dalam satu baris: constructor, accessor x() dan y(), toString, equals, dan hashCode dibuat otomatis. Nilainya tidak bisa diubah (immutable). Mirip @dataclass di Python.",
 w:[null,"record punya toString dan equals berdasarkan isi.","Format toString record memakai kurung siku.","Kodenya sah."]},
{k:"modern",t:"mc",lv:2,q:"Kenapa List<int> angka = new ArrayList<>(); ditolak?",o:["Generics hanya menerima tipe objek; pakai List<Integer>","ArrayList tidak boleh berisi angka","Harus ditulis List[int]","Karena <> harus diisi"],a:0,
 e:"Generics (<…>) bekerja dengan objek, bukan tipe primitif. Setiap primitif punya pembungkus: int → Integer, double → Double, boolean → Boolean, char → Character. Java mengubah bolak-balik otomatis (autoboxing), jadi angka.add(5) tetap bisa.",
 w:[null,"Boleh, asal memakai Integer.","Sintaks itu bukan Java.","Diamond <> kosong itu sah sejak Java 7."]},
{k:"modern",t:"mc",lv:3,q:"Output kode ini:",kode:"import java.util.*;\n\npublic class Main {\n    static <T> T pertama(List<T> daftar) {\n        return daftar.get(0);\n    }\n    public static void main(String[] args) {\n        String s = pertama(List.of(\"kopi\", \"teh\"));\n        Integer n = pertama(List.of(7, 8));\n        System.out.println(s + n);\n    }\n}",o:["kopi7","kopi8","15","Error: tipe tidak cocok"],a:0,vr:"java",
 e:"<T> membuat method generik: satu method bekerja untuk berbagai tipe, dan kompilator tetap memastikan tipenya benar (dari List<String> keluar String). String + Integer menjadi penggabungan teks.",
 w:[null,"get(0) mengambil item pertama.","String ditambah angka menjadi teks.","Tipe T disimpulkan otomatis."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"try {\n    int hasil = 10 / 0;\n    System.out.println(hasil);\n} catch (ArithmeticException e) {\n    System.out.println(\"Gagal: \" + e.getMessage());\n} finally {\n    System.out.println(\"selesai\");\n}",o:["Gagal: / by zero lalu selesai","Infinity lalu selesai","0","Program berhenti dengan error"],a:0,vr:"java",vx:"Gagal: / by zero\nselesai",
 e:"Membagi int dengan 0 melempar ArithmeticException. catch menangkapnya, finally selalu jalan.\n• Catatan: 10.0 / 0 (double) TIDAK error, hasilnya Infinity.",
 w:[null,"Infinity hanya untuk pembagian double.","Baris println(hasil) tidak tercapai.","Error sudah ditangkap catch."]},
{k:"modern",t:"mc",lv:2,q:"Beda checked dan unchecked exception di Java:",o:["Checked (misal IOException) wajib ditangani dengan try/catch atau throws; unchecked (RuntimeException) tidak wajib","Checked lebih cepat","Unchecked tidak bisa ditangkap","Tidak ada bedanya"],a:0,
 e:"Kompilator memaksa kita memikirkan kegagalan yang wajar terjadi (file tidak ada, jaringan putus) → checked. Kesalahan logika program (null, indeks di luar batas, bagi nol) → unchecked turunan RuntimeException.",
 w:[null,"Bukan soal kecepatan.","Unchecked tetap bisa ditangkap.","Perlakuan kompilatornya berbeda."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"public class Main {\n    static class SaldoKurangException extends Exception {\n        SaldoKurangException(String pesan) { super(pesan); }\n    }\n    static void tarik(int saldo, int jumlah) throws SaldoKurangException {\n        if (jumlah > saldo) throw new SaldoKurangException(\"Saldo kurang \" + (jumlah - saldo));\n    }\n    public static void main(String[] args) {\n        try {\n            tarik(50000, 80000);\n        } catch (SaldoKurangException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",o:["Saldo kurang 30000","Saldo kurang -30000","80000","Tidak mencetak apa-apa"],a:0,vr:"java",
 e:"Exception buatan sendiri dibuat dengan extends Exception (checked) atau RuntimeException (unchecked). Kata kunci throws di header method memberi tahu pemanggil bahwa method ini bisa melempar exception tersebut.",
 w:[null,"80000 - 50000 = 30000.","Yang dicetak pesan exception.","Exception dilempar karena 80000 > 50000."]},
{k:"modern",t:"mc",lv:2,q:"try (BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"))) { … } disebut try-with-resources. Keuntungannya:",o:["File otomatis ditutup setelah blok selesai, walaupun terjadi error","Membaca file lebih cepat","Tidak perlu catch sama sekali","File otomatis dibuat kalau belum ada"],a:0,
 e:"Objek di dalam kurung try (yang mengimplementasi AutoCloseable) otomatis di-close(). Ini mencegah kebocoran file dan koneksi database yang lupa ditutup. Python punya hal serupa: with open(...) as f.",
 w:[null,"Kecepatan baca tidak berubah.","IOException tetap perlu ditangani.","File tidak dibuat otomatis."]},
{k:"modern",t:"mc",lv:3,q:"Output kode ini:",kode:"public class Main {\n    interface Salam {\n        String nama();\n        default String sapa() { return \"Halo, \" + nama(); }\n    }\n    record Tamu(String nama) implements Salam {}\n    public static void main(String[] args) {\n        System.out.println(new Tamu(\"Rina\").sapa());\n    }\n}",o:["Halo, Rina","Halo, null","Error: sapa belum diimplementasi","Rina"],a:0,vr:"java",
 e:"Interface adalah kontrak (daftar method yang wajib dimiliki). Sejak Java 8, interface boleh punya default method yang sudah berisi. Record Tamu otomatis punya nama() sehingga memenuhi kontrak Salam.",
 w:[null,"nama() dari record berisi Rina.","default method sudah berisi kode.","sapa() menambahkan Halo."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"import java.util.Optional;\n\npublic class Main {\n    public static void main(String[] args) {\n        Optional<String> email = Optional.ofNullable(null);\n        System.out.println(email.orElse(\"belum diisi\"));\n    }\n}",o:["belum diisi","null","NullPointerException","Optional.empty"],a:0,vr:"java",
 e:"Optional adalah 'kotak yang mungkin kosong'. Daripada mengembalikan null dan berisiko NullPointerException, method mengembalikan Optional, lalu pemanggil memutuskan: orElse(cadangan), ifPresent(...), map(...).",
 w:[null,"orElse memberi nilai cadangan.","ofNullable aman untuk null.","orElse mengembalikan isinya atau cadangan."]},
{k:"modern",t:"mc",lv:2,q:"Output kode ini:",kode:"String a = \"kopi\";\nString b = new String(\"kopi\");\nSystem.out.println((a == b) + \" \" + a.equals(b));",o:["false true","true true","true false","false false"],a:0,vr:"java",
 e:"== membandingkan alamat objek (apakah objek yang sama). equals membandingkan isi. new String membuat objek baru, jadi == false walaupun isinya sama.\nIngat: selalu bandingkan String dengan equals (atau equalsIgnoreCase).",
 w:[null,"b adalah objek baru.","equals membandingkan isi.","Isinya sama."]},
{k:"modern",t:"mc",lv:1,q:"var total = 0; di Java 10+ berarti…",o:["Tipe total disimpulkan kompilator menjadi int; tetap bertipe tetap","total boleh berisi tipe apa saja seperti JavaScript","total menjadi konstanta","Sintaks salah"],a:0,
 e:"var hanya menyingkat penulisan; tipenya ditentukan dari nilai awal dan tidak bisa berubah. total = \"teks\"; tetap ditolak. Hanya boleh untuk variabel lokal yang langsung diberi nilai.",
 w:[null,"Java tetap bertipe statis.","Konstanta memakai final.","var sah sejak Java 10."]},
{k:"modern",t:"is",lv:1,q:"Kata kunci Java 16+ untuk membuat class data immutable dalam satu baris: ____ Titik(int x, int y) {}",a:["record"],
 e:"record otomatis punya constructor, accessor, equals, hashCode, dan toString."},
{k:"modern",t:"is",lv:2,q:"Kata kunci agar sebuah class memenuhi kontrak interface: class Tamu ____ Salam",a:["implements"],
 e:"extends untuk mewarisi class (hanya satu), implements untuk interface (boleh banyak, dipisah koma)."}
);

MATERI_JAVA.push(
{k:"method",judul:"Method, Overloading, Scope & Rekursi",materi:`
<!--pemula--><h4>Untuk pemula: method = resep yang bisa dipakai berulang</h4>
<p>Method adalah sekumpulan perintah yang diberi nama. Daripada menulis rumus luas persegi berkali-kali, kamu menulisnya sekali di method <code>luas</code>, lalu cukup memanggil <code>luas(5)</code>. Kalau rumusnya salah, cukup diperbaiki di satu tempat.</p>
<table class="mini-pivot"><tr><th>Bagian</th><th>Contoh</th><th>Arti</th></tr>
<tr><td>akses</td><td><code>public</code> / <code>private</code></td><td>siapa yang boleh memanggil</td></tr>
<tr><td><code>static</code></td><td><code>static</code></td><td>milik class, dipanggil tanpa objek</td></tr>
<tr><td>tipe kembalian</td><td><code>int</code>, <code>String</code>, <code>void</code></td><td>jenis hasil; void = tanpa hasil</td></tr>
<tr><td>nama</td><td><code>hitungDiskon</code></td><td>camelCase, diawali kata kerja</td></tr>
<tr><td>parameter</td><td><code>(int harga, int persen)</code></td><td>bahan yang diterima</td></tr></table><!--/pemula-->
<h4>1. Menulis dan memanggil method</h4>
<pre><code>public class Toko {
    static int hargaDiskon(int harga, int persen) {
        return harga - harga * persen / 100;
    }

    static void cetakStruk(String nama, int harga) {      // void: tidak mengembalikan nilai
        System.out.println(nama + " ........ Rp" + harga);
    }

    public static void main(String[] args) {
        int akhir = hargaDiskon(20000, 15);   // 17000
        cetakStruk("Kopi Susu", akhir);
    }
}</code></pre>
<h4>2. Overloading: nama sama, parameter beda</h4>
<pre><code>static int luas(int sisi)                  { return sisi * sisi; }
static int luas(int panjang, int lebar)    { return panjang * lebar; }
static double luas(double jariJari)        { return Math.PI * jariJari * jariJari; }

luas(4);       // persegi → 16
luas(4, 5);    // persegi panjang → 20
luas(2.0);     // lingkaran → 12.566…</code></pre>
<p>Java memilih versi berdasarkan jumlah dan tipe argumen. Tipe kembalian saja yang berbeda <b>tidak cukup</b> untuk overloading.</p>
<h4>3. Pass by value: yang dikirim selalu salinan</h4>
<table class="mini-pivot"><tr><th>Yang dikirim</th><th>Yang disalin</th><th>Efek mengubah di dalam method</th></tr>
<tr><td>primitif (<code>int</code>, <code>double</code>)</td><td>nilainya</td><td>variabel asli <b>tidak</b> berubah</td></tr>
<tr><td>objek / array</td><td>alamatnya</td><td>isi objek <b>ikut</b> berubah; mengganti objeknya tidak</td></tr></table>
<p>String istimewa karena <b>immutable</b>: method seperti <code>concat</code>, <code>toUpperCase</code>, <code>replace</code> selalu membuat String baru. Simpan hasilnya: <code>s = s.trim();</code>. Untuk menyusun teks panjang dalam perulangan, pakai <code>StringBuilder</code>.</p>
<h4>4. Scope variabel</h4>
<pre><code>int total = 0;                      // hidup di seluruh main
for (int i = 0; i &lt; 3; i++) {       // i hanya hidup di dalam for
    int bonus = i * 10;             // bonus hanya hidup di dalam { }
    total += bonus;
}
// System.out.println(i);           // compile error: i tidak dikenal</code></pre>
<h4>5. Varargs dan operator yang sering menjebak</h4>
<pre><code>static int total(int... angka) {    // boleh total(), total(1), total(1, 2, 3)
    int t = 0;
    for (int a : angka) t += a;
    return t;
}
7 / 2      // 3   (int / int membuang desimal)
7 / 2.0    // 3.5
7 % 2      // 1   (sisa bagi; n % 2 == 0 berarti genap)
nilai &gt;= 75 ? "Lulus" : "Remedial"   // ternary</code></pre>
<h4>6. Rekursi</h4>
<pre><code>static int fibonacci(int n) {
    if (n &lt;= 1) return n;                       // kasus dasar
    return fibonacci(n - 1) + fibonacci(n - 2); // langkah rekursif
}
// fibonacci(10) = 55

static long faktorial(int n) {                  // 5! = 5 × 4 × 3 × 2 × 1 = 120
    if (n &lt;= 1) return 1;
    return n * faktorial(n - 1);                // long: faktorial cepat melampaui batas int
}</code></pre>
<div class="catatan">Kesalahan klasik pemula: memanggil method non-static dari <code>main</code>. Pesan error-nya "non-static method cannot be referenced from a static context". Solusinya: tambahkan <code>static</code>, atau buat objek dulu (<code>new Toko().cetak()</code>).</div>
<div class="praktik"><b>Coba sendiri:</b> buat method <code>isPrima(int n)</code>, <code>rataRata(int... nilai)</code>, dan versi overload <code>rataRata(double... nilai)</code>. Lalu buat method rekursif <code>jumlahDigit(int n)</code> dan uji dengan 2026 (hasilnya 10).</div>
`},
{k:"modern",judul:"Java Modern: Enum, Record, Generics, Exception & Optional",materi:`
<!--pemula--><h4>Untuk pemula: Java tahun 2026 jauh lebih ringkas</h4>
<p>Banyak tutorial Java lama penuh kode panjang. Java versi baru (17, 21, LTS = didukung jangka panjang) punya fitur yang membuat kode lebih pendek dan lebih aman. Lowongan backend (Spring Boot) dan Android (Kotlin, yang mirip) mengharapkan kamu mengenalnya.</p>
<table class="mini-pivot"><tr><th>Fitur</th><th>Versi</th><th>Gunanya</th></tr>
<tr><td><code>enum</code></td><td>5</td><td>daftar nilai tetap (status, hari)</td></tr>
<tr><td>Generics <code>&lt;T&gt;</code></td><td>5</td><td>koleksi yang tipenya pasti</td></tr>
<tr><td><code>Optional</code>, lambda, Stream</td><td>8</td><td>menghindari null, mengolah koleksi</td></tr>
<tr><td><code>var</code></td><td>10</td><td>menyingkat deklarasi lokal</td></tr>
<tr><td>switch expression <code>-&gt;</code></td><td>14</td><td>switch tanpa break</td></tr>
<tr><td><code>record</code></td><td>16</td><td>class data satu baris</td></tr></table><!--/pemula-->
<h4>1. enum</h4>
<pre><code>enum Status { BARU, DIPROSES, DIKIRIM, SELESAI }

Status s = Status.DIKIRIM;
s.name();        // "DIKIRIM"
s.ordinal();     // 2
Status.valueOf("BARU");
for (Status x : Status.values()) System.out.println(x);</code></pre>
<p>Enum lebih aman daripada String: <code>"dikrim"</code> (salah ketik) tidak terdeteksi, sedangkan <code>Status.DIKRIM</code> langsung ditolak kompilator.</p>
<h4>2. switch expression</h4>
<pre><code>String label = switch (s) {
    case BARU, DIPROSES -&gt; "Sedang disiapkan";
    case DIKIRIM        -&gt; "Dalam perjalanan";
    case SELESAI        -&gt; "Sudah diterima";
};</code></pre>
<h4>3. record</h4>
<pre><code>record Produk(String nama, int harga) {
    Produk {                                    // validasi di constructor ringkas
        if (harga &lt; 0) throw new IllegalArgumentException("harga negatif");
    }
    int hargaPpn() { return harga * 111 / 100; }
}
var p = new Produk("Kopi", 18000);
p.nama();      // "Kopi" (bukan getNama())
p;             // Produk[nama=Kopi, harga=18000]</code></pre>
<h4>4. Generics</h4>
<pre><code>List&lt;String&gt; nama = new ArrayList&lt;&gt;();        // hanya boleh String
Map&lt;String, Integer&gt; stok = new HashMap&lt;&gt;();   // kunci String, nilai Integer

static &lt;T&gt; T pertama(List&lt;T&gt; daftar) { return daftar.get(0); }</code></pre>
<p>Tipe primitif tidak boleh di dalam <code>&lt; &gt;</code>: pakai pembungkusnya (<code>Integer</code>, <code>Double</code>, <code>Boolean</code>, <code>Character</code>).</p>
<h4>5. Exception</h4>
<table class="mini-pivot"><tr><th>Jenis</th><th>Contoh</th><th>Wajib ditangani?</th></tr>
<tr><td>checked</td><td><code>IOException</code>, <code>SQLException</code></td><td>ya: try/catch atau <code>throws</code></td></tr>
<tr><td>unchecked</td><td><code>NullPointerException</code>, <code>ArithmeticException</code>, <code>IndexOutOfBoundsException</code>, <code>IllegalArgumentException</code></td><td>tidak (tapi sebaiknya dicegah)</td></tr></table>
<pre><code>try (var br = Files.newBufferedReader(Path.of("data.csv"))) {   // otomatis ditutup
    String baris;
    while ((baris = br.readLine()) != null) {
        System.out.println(baris);
    }
} catch (IOException e) {
    System.out.println("Gagal membaca: " + e.getMessage());
} finally {
    System.out.println("selesai");
}

int x = 10 / 0;     // ArithmeticException dengan pesan "/ by zero"
double y = 10.0 / 0; // TIDAK error: hasilnya Infinity</code></pre>
<h4>Interface dan default method</h4>
<pre><code>interface Salam {
    String nama();                                        // kontrak: wajib dimiliki
    default String sapa() { return "Halo, " + nama(); }  // sudah berisi (Java 8+)
}
record Tamu(String nama) implements Salam {}            // nama() dari record memenuhi kontrak
new Tamu("Rina").sapa();                                 // "Halo, Rina"</code></pre>
<p><code>extends</code> untuk mewarisi class (hanya satu), <code>implements</code> untuk interface (boleh banyak).</p>
<h4>6. Optional dan perbandingan String</h4>
<pre><code>Optional&lt;String&gt; cari(int id) { … }
cari(7).orElse("tidak ditemukan");
cari(7).map(String::toUpperCase).ifPresent(System.out::println);

"kopi".equals(input)            // aman walau input null
a == b                          // membandingkan alamat objek, BUKAN isi</code></pre>
<div class="catatan">Peta belajar setelah ini: Stream API (sudah ada di bab Koleksi), Maven/Gradle untuk mengelola paket, JUnit untuk testing, lalu Spring Boot untuk membuat REST API. Konsep OOP, exception, dan koleksi yang kamu pelajari di sini dipakai langsung di sana.</div>
<div class="praktik"><b>Coba sendiri:</b> buat <code>enum Kategori</code>, <code>record Produk(String nama, Kategori kategori, int harga)</code> dengan validasi harga, lalu <code>List&lt;Produk&gt;</code> berisi 5 produk. Cetak label tiap kategori dengan switch expression, dan buat method yang mengembalikan <code>Optional&lt;Produk&gt;</code> termahal.</div>
`}
);
