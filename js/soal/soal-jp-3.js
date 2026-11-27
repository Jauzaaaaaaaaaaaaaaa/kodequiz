// ============ JAVA & PHP — tambahan 2x lipat ============
// Dimuat SETELAH soal-latihan-ekstra.js. vr:"php" dijalankan oleh alat/cek-soal.js (PHP 8). vr:"java" dijalankan bila JDK
// terpasang; kode tanpa "class" dibungkus otomatis dalam main() dengan import java.util.*. Kunci di indeks 0 (opsi diacak).
(function () {
  const dk = MAT => (k, html) => { const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Pendalaman: pelan-pelan sampai paham</h4>' + html; };

  /* =================== JAVA (+69) =================== */
  const J = (k, lv, kode, o, e) => SOAL_JAVA.push({ k, t: "mc", lv, q: "Output kode ini:", kode, o, a: 0, vr: "java", e });
  const JM = (k, lv, q, o, e, kode) => SOAL_JAVA.push({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}) });
  const JI = (k, lv, q, a, e) => SOAL_JAVA.push({ k, t: "is", lv, q, a, e });
  // dasar (+8)
  J("dasar", 1, 'int a = 7 / 2;\nSystem.out.println(a);', ["3", "3.5", "4", "Error"], "Pembagian dua int menghasilkan int (desimal dibuang).");
  J("dasar", 1, 'double b = 7 / 2.0;\nSystem.out.println(b);', ["3.5", "3", "3.0", "4"], "Salah satu double membuat hasilnya double.");
  J("dasar", 1, 'System.out.println(10 % 3);', ["1", "3", "3.33", "0"], "% = sisa bagi.");
  J("dasar", 2, 'System.out.println("a" + 1 + 2);', ["a12", "a3", "3a", "Error"], "Dari kiri: \"a\" + 1 = \"a1\", lalu + 2 = \"a12\".");
  J("dasar", 2, 'System.out.println(1 + 2 + "a");', ["3a", "12a", "a3", "Error"], "1 + 2 = 3 dihitung dulu sebagai angka, baru disambung.");
  J("dasar", 2, 'char c = \'A\';\nSystem.out.println((char)(c + 1));', ["B", "66", "A1", "Error"], "char adalah angka Unicode; A (65) + 1 = 66 = B setelah di-cast ke char.");
  JM("dasar", 1, "Setiap pernyataan Java diakhiri dengan…", ["; (titik koma)", ": (titik dua)", "Enter saja", ". (titik)"], "Lupa titik koma = error kompilasi.");
  JI("dasar", 1, "Tipe data Java untuk teks: ____", ["string"], "String (huruf S besar).");
  // kontrol (+8)
  J("kontrol", 1, 'int n = 85;\nif (n >= 90) System.out.println("A");\nelse if (n >= 80) System.out.println("B");\nelse System.out.println("C");', ["B", "A", "C", "B\nC"], "Berhenti di syarat benar pertama.");
  J("kontrol", 1, 'int total = 0;\nfor (int i = 1; i <= 4; i++) total += i;\nSystem.out.println(total);', ["10", "4", "6", "15"], "1 + 2 + 3 + 4 = 10.");
  J("kontrol", 2, 'int i = 0;\nwhile (i < 3) {\n  System.out.println(i);\n  i++;\n}', ["0\n1\n2", "1\n2\n3", "0\n1\n2\n3", "3"], "while mengulang selama syarat benar.");
  J("kontrol", 2, 'int hari = 2;\nswitch (hari) {\n  case 1: System.out.println("Senin"); break;\n  case 2: System.out.println("Selasa"); break;\n  default: System.out.println("Lain");\n}', ["Selasa", "Selasa\nLain", "Senin", "Lain"], "break mencegah jatuh ke case berikutnya.");
  J("kontrol", 2, 'for (int i = 0; i < 5; i++) {\n  if (i == 3) break;\n  if (i == 1) continue;\n  System.out.println(i);\n}', ["0\n2", "0\n1\n2", "0\n2\n4", "2"], "continue melewati 1, break berhenti di 3.");
  J("kontrol", 2, 'int x = 5;\nString s = x % 2 == 0 ? "genap" : "ganjil";\nSystem.out.println(s);', ["ganjil", "genap", "true", "1"], "Operator ternary: syarat ? jikaBenar : jikaSalah.");
  JM("kontrol", 2, "do-while berbeda dengan while karena…", ["Isi do-while dijalankan minimal sekali sebelum syarat dicek", "Lebih cepat", "Tidak bisa berhenti", "Sama saja"], "Cocok untuk menu yang ditampilkan minimal sekali.");
  JI("kontrol", 1, "Kata kunci keluar dari loop: ____", ["break"], "break.");
  // array (+8)
  J("array", 1, 'int[] a = {3, 1, 2};\nSystem.out.println(a.length + " " + a[0]);', ["3 3", "3 1", "2 3", "Error"], "length adalah properti (tanpa kurung) untuk array.");
  J("array", 2, 'int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a));', ["[1, 2, 3]", "[3, 1, 2]", "1 2 3", "[3, 2, 1]"], "Arrays.sort mengurutkan array itu sendiri; Arrays.toString menampilkannya rapi.");
  J("array", 1, 'String s = "Java";\nSystem.out.println(s.length() + " " + s.charAt(1));', ["4 a", "4 J", "3 a", "Error"], "String memakai length() (dengan kurung).");
  J("array", 2, 'System.out.println("Programmer".substring(3, 7));', ["gram", "gramm", "ogra", "ram"], "substring(awal, akhir): indeks 3 sampai sebelum 7.");
  J("array", 2, 'String a = "kopi";\nString b = new String("kopi");\nSystem.out.println((a == b) + " " + a.equals(b));', ["false true", "true true", "false false", "true false"], "== membandingkan objek yang sama; equals membandingkan isi. Selalu pakai equals untuk String.");
  J("array", 2, 'StringBuilder sb = new StringBuilder("data");\nSystem.out.println(sb.reverse());', ["atad", "data", "DATA", "Error"], "StringBuilder bisa diubah; reverse membalik isinya.");
  J("array", 2, 'String[] k = "a,b,c".split(",");\nSystem.out.println(k.length + k[2]);', ["3c", "3", "c3", "Error"], "split menghasilkan array String; 3 + \"c\" disambung.");
  JI("array", 1, "Method String untuk membandingkan isi: ____()", ["equals"], "a.equals(b).");
  // oop (+8)
  J("oop", 1, 'public class Main {\n  static class Kucing {\n    String nama;\n    Kucing(String n) { nama = n; }\n    String suara() { return nama + ": meong"; }\n  }\n  public static void main(String[] args) {\n    System.out.println(new Kucing("Mochi").suara());\n  }\n}', ["Mochi: meong", "meong", "null: meong", "Error"], "Constructor mengisi field nama saat objek dibuat.");
  J("oop", 2, 'public class Main {\n  static class Hewan { String suara() { return "..."; } }\n  static class Anjing extends Hewan { String suara() { return "guk"; } }\n  public static void main(String[] args) {\n    Hewan h = new Anjing();\n    System.out.println(h.suara());\n  }\n}', ["guk", "...", "Error", "null"], "Polimorfisme: method yang dijalankan mengikuti objek aslinya (Anjing).");
  J("oop", 2, 'public class Main {\n  static class Akun {\n    private int saldo = 100;\n    int tarik(int n) { if (n <= saldo) saldo -= n; return saldo; }\n  }\n  public static void main(String[] args) {\n    Akun a = new Akun();\n    a.tarik(30);\n    System.out.println(a.tarik(500));\n  }\n}', ["70", "-430", "100", "Error"], "Penarikan 500 ditolak, saldo tetap 70. private menjaga saldo dari akses langsung.");
  JM("oop", 1, "Kata kunci untuk mewarisi class di Java:", ["extends", "inherits", "implements", "super"], "implements untuk interface.");
  JM("oop", 2, "Interface di Java berisi…", ["Kontrak method yang wajib diimplementasikan class yang memakai implements", "Field privat saja", "Objek", "Constructor"], "Satu class bisa implements banyak interface.");
  JM("oop", 2, "Enkapsulasi di Java biasanya dilakukan dengan…", ["Field private + method getter/setter publik", "Semua field public", "static", "final saja"], "Data dijaga dan divalidasi lewat method.");
  JM("oop", 2, "Kata kunci static pada method berarti…", ["Method milik class, bisa dipanggil tanpa membuat objek", "Method tidak bisa dipanggil", "Method privat", "Method diwariskan"], "Contoh: Math.max().");
  JI("oop", 1, "Kata kunci membuat objek baru: ____ Kucing(\"Mochi\")", ["new"], "new.");
  // koleksi (+8)
  J("koleksi", 1, 'ArrayList<String> d = new ArrayList<>();\nd.add("kopi");\nd.add("teh");\nSystem.out.println(d.size() + " " + d.get(1));', ["2 teh", "2 kopi", "1 teh", "Error"], "ArrayList bisa bertambah; get(1) = item kedua.");
  J("koleksi", 1, 'HashMap<String, Integer> h = new HashMap<>();\nh.put("kopi", 18000);\nSystem.out.println(h.get("kopi") + " " + h.getOrDefault("teh", 0));', ["18000 0", "18000 null", "kopi 0", "Error"], "getOrDefault memberi nilai cadangan bila kunci tidak ada.");
  J("koleksi", 2, 'try {\n  int x = 10 / 0;\n  System.out.println("ok");\n} catch (ArithmeticException e) {\n  System.out.println("tidak bisa dibagi nol");\n}', ["tidak bisa dibagi nol", "ok", "Infinity", "Error"], "Pembagian int dengan 0 melempar ArithmeticException.");
  J("koleksi", 2, 'List<Integer> a = List.of(5, 2, 8, 1);\nint total = a.stream().filter(x -> x > 2).mapToInt(x -> x).sum();\nSystem.out.println(total);', ["13", "16", "8", "15"], "Stream: saring yang > 2 (5, 8), lalu jumlahkan.");
  J("koleksi", 2, 'List<String> n = List.of("budi", "ani");\nSystem.out.println(n.stream().map(String::toUpperCase).sorted().toList());', ["[ANI, BUDI]", "[BUDI, ANI]", "[ani, budi]", "Error"], "map mengubah setiap item, sorted mengurutkan abjad.");
  JM("koleksi", 2, "Beda ArrayList dan array biasa:", ["ArrayList ukurannya bisa berubah; array ukurannya tetap sejak dibuat", "Sama saja", "Array bisa bertambah", "ArrayList hanya angka"], "ArrayList hanya menyimpan objek (Integer, bukan int).");
  JM("koleksi", 2, "Blok finally dijalankan…", ["Selalu, ada exception atau tidak", "Hanya saat error", "Tidak pernah", "Sebelum try"], "Untuk menutup sumber daya; atau pakai try-with-resources.");
  JI("koleksi", 1, "Koleksi pasangan kunci-nilai di Java: Hash____", ["map"], "HashMap.");
  // method (+14)
  J("method", 1, 'public class Main {\n  static int kuadrat(int x) { return x * x; }\n  public static void main(String[] args) {\n    System.out.println(kuadrat(3) + kuadrat(4));\n  }\n}', ["25", "7", "49", "34"], "9 + 16.");
  J("method", 2, 'public class Main {\n  static int tambah(int a, int b) { return a + b; }\n  static double tambah(double a, double b) { return a + b; }\n  public static void main(String[] args) {\n    System.out.println(tambah(2, 3) + " " + tambah(2.0, 3.0));\n  }\n}', ["5 5.0", "5.0 5.0", "5 5", "Error"], "Overloading: nama sama, parameter berbeda; Java memilih versi yang cocok tipenya.");
  J("method", 2, 'public class Main {\n  static void ubah(int x) { x = 99; }\n  public static void main(String[] args) {\n    int n = 5;\n    ubah(n);\n    System.out.println(n);\n  }\n}', ["5", "99", "0", "Error"], "Tipe primitif dikirim sebagai salinan nilai.");
  J("method", 2, 'public class Main {\n  static void ubah(int[] a) { a[0] = 99; }\n  public static void main(String[] args) {\n    int[] n = {5};\n    ubah(n);\n    System.out.println(n[0]);\n  }\n}', ["99", "5", "0", "Error"], "Array dikirim sebagai rujukan ke objek yang sama, jadi isinya bisa diubah.");
  J("method", 3, 'public class Main {\n  static int faktorial(int n) { return n <= 1 ? 1 : n * faktorial(n - 1); }\n  public static void main(String[] args) {\n    System.out.println(faktorial(5));\n  }\n}', ["120", "15", "5", "Error"], "Rekursi: 5 × 4 × 3 × 2 × 1.");
  J("method", 2, 'public class Main {\n  static int jumlah(int... angka) { int t = 0; for (int x : angka) t += x; return t; }\n  public static void main(String[] args) {\n    System.out.println(jumlah(1, 2, 3, 4));\n  }\n}', ["10", "4", "1234", "Error"], "Varargs (int...) menampung berapa pun argumen sebagai array.");
  J("method", 2, 'System.out.println(Math.max(4, 9) + " " + Math.round(2.5) + " " + Math.abs(-3));', ["9 3 3", "9 2 3", "4 3 -3", "9 3.0 3"], "Math.round(2.5) = 3 (dibulatkan ke atas pada .5) dan bertipe long.");
  J("method", 2, 'System.out.println(String.format("%.2f", 3.14159));', ["3.14", "3.1", "3.142", "3"], "%.2f = dua angka di belakang koma.");
  JM("method", 1, "Method void berarti…", ["Tidak mengembalikan nilai", "Mengembalikan teks", "Mengembalikan angka", "Error"], "Method dengan tipe int wajib return int.");
  JM("method", 2, "Variabel yang dideklarasikan di dalam blok for…", ["Hanya hidup di dalam blok itu (scope lokal)", "Bisa dipakai di seluruh class", "Global", "Static"], "Scope ditentukan kurung kurawal.");
  JM("method", 2, "Kata kunci final pada variabel berarti…", ["Nilainya tidak bisa diubah setelah diisi", "Variabel terakhir", "Wajib static", "Bisa diubah sekali lagi"], "Konstanta: static final double PAJAK = 0.11;");
  JM("method", 3, "Rekursi tanpa kondisi berhenti di Java berakhir dengan…", ["StackOverflowError", "NullPointerException", "Hasil 0", "Berjalan selamanya tanpa error"], "Setiap panggilan memakai memori stack.");
  JI("method", 1, "Tipe kembalian method yang tidak mengembalikan apa pun: ____", ["void"], "void.");
  JI("method", 2, "Nama konsep method sama dengan parameter berbeda: over____", ["loading"], "Overloading.");
  // modern (+15)
  J("modern", 1, 'var nama = "Rina";\nSystem.out.println(nama.length());', ["4", "Rina", "Error", "0"], "var (Java 10+) menebak tipe dari nilainya: String.");
  J("modern", 2, 'public class Main {\n  enum Status { DRAFT, AKTIF, SELESAI }\n  public static void main(String[] args) {\n    System.out.println(Status.AKTIF.ordinal() + " " + Status.values().length);\n  }\n}', ["1 3", "2 3", "1 2", "AKTIF 3"], "ordinal() = urutan mulai 0; values() = semua nilai enum.");
  J("modern", 2, 'public class Main {\n  record Produk(String nama, int harga) {}\n  public static void main(String[] args) {\n    Produk p = new Produk("Kopi", 18000);\n    System.out.println(p.nama() + " " + p.harga());\n  }\n}', ["Kopi 18000", "Produk[nama=Kopi]", "Error", "null 0"], "record (Java 16+) membuat class data dengan constructor dan getter otomatis.");
  J("modern", 2, 'public class Main {\n  record Titik(int x, int y) {}\n  public static void main(String[] args) {\n    System.out.println(new Titik(1, 2).equals(new Titik(1, 2)));\n  }\n}', ["true", "false", "Error", "Titik[x=1, y=2]"], "record membuat equals berdasarkan isi field.");
  J("modern", 2, 'Optional<String> o = Optional.empty();\nSystem.out.println(o.orElse("kosong"));', ["kosong", "null", "Error", "Optional.empty"], "Optional mencegah NullPointerException; orElse memberi cadangan.");
  J("modern", 2, 'int hari = 6;\nString jenis = switch (hari) {\n  case 6, 7 -> "akhir pekan";\n  default -> "hari kerja";\n};\nSystem.out.println(jenis);', ["akhir pekan", "hari kerja", "6", "Error"], "Switch expression (Java 14+) dengan panah tidak butuh break.");
  J("modern", 2, 'List<Integer> a = new ArrayList<>(List.of(3, 1, 2));\na.sort(Comparator.reverseOrder());\nSystem.out.println(a);', ["[3, 2, 1]", "[1, 2, 3]", "[3, 1, 2]", "Error"], "Comparator.reverseOrder mengurutkan dari besar.");
  J("modern", 3, 'String teks = """\n    Halo\n    Java""";\nSystem.out.println(teks.lines().count());', ["2", "1", "3", "Error"], "Text block (Java 15+) dengan tiga kutip; indentasi umum dibuang otomatis.");
  JM("modern", 2, "Generics seperti List<String> berguna untuk…", ["Kompiler memastikan isi koleksi bertipe tepat, tanpa cast manual", "Mempercepat program dua kali", "Membuat list kosong", "Wajib di semua kelas"], "Kesalahan tipe ketahuan saat kompilasi.");
  JM("modern", 2, "Checked exception (misalnya IOException) wajib…", ["Ditangkap dengan try-catch atau dideklarasikan dengan throws", "Diabaikan", "Ditulis di main saja", "Diubah menjadi int"], "RuntimeException tidak wajib ditangani.");
  JM("modern", 2, "try-with-resources: try (var r = new BufferedReader(...)) { … } memastikan…", ["Sumber daya ditutup otomatis setelah blok selesai", "Error diabaikan", "File dihapus", "Program lebih cepat"], "Pengganti finally untuk close().");
  JM("modern", 2, "Lambda x -> x * 2 di Java dipakai untuk…", ["Menulis fungsi singkat, misalnya di stream map/filter", "Membuat class", "Membuat enum", "Menangkap error"], "Bekerja dengan functional interface.");
  JM("modern", 3, "NullPointerException terjadi saat…", ["Memanggil method/field dari variabel yang berisi null", "Membagi dengan nol", "Indeks di luar batas", "Kompilasi gagal"], "Gunakan Optional atau cek null.");
  JI("modern", 1, "Kata kunci class data ringkas di Java 16+: ____", ["record"], "record.");
  JI("modern", 2, "Class pembungkus nilai yang mungkin kosong: ____<String>", ["optional"], "Optional.");

  /* =================== PHP (+68) =================== */
  const P = (k, lv, kode, o, e) => SOAL_PHP.push({ k, t: "mc", lv, q: "Output kode ini:", kode, o, a: 0, vr: "php", e });
  const PM = (k, lv, q, o, e, kode) => SOAL_PHP.push({ k, t: "mc", lv, q, o, a: 0, e, ...(kode ? { kode } : {}) });
  const PI = (k, lv, q, a, e) => SOAL_PHP.push({ k, t: "is", lv, q, a, e });
  // dasar (+7)
  P("dasar", 1, '$a = 5;\n$b = 3;\necho $a + $b;', ["8", "53", "Error", "$a + $b"], "Variabel PHP diawali $. + menjumlah angka.");
  P("dasar", 1, 'echo "5" . 3;', ["53", "8", "Error", "5 3"], "Titik (.) menyambung teks.");
  P("dasar", 2, 'echo "5" + 3;', ["8", "53", "Error", "5"], "+ selalu menjumlah; teks \"5\" diubah jadi angka.");
  P("dasar", 2, '$nama = "Rina";\necho "Halo $nama", \' dan $nama\';', ["Halo Rina dan $nama", "Halo Rina dan Rina", "Halo $nama dan $nama", "Error"], "Kutip ganda mengganti variabel; kutip tunggal menampilkan apa adanya.");
  P("dasar", 2, 'echo intdiv(7, 2), " ", 7 / 2, " ", 7 % 2, " ", 2 ** 3;', ["3 3.5 1 8", "3.5 3.5 1 8", "3 3 1 6", "3 3.5 1 6"], "intdiv = bagi bulat, / = bagi biasa, % = sisa, ** = pangkat.");
  PM("dasar", 1, "Kode PHP di file .php ditulis di antara…", ["<?php … ?>", "<script> … </script>", "{{ … }}", "<% … %>"], "Bagian di luarnya dikirim sebagai HTML biasa.");
  PI("dasar", 1, "Perintah menampilkan teks di PHP: ____ \"Halo\";", ["echo"], "echo.");
  // kontrol (+7)
  P("kontrol", 1, '$total = 0;\nfor ($i = 1; $i <= 4; $i++) {\n  $total += $i;\n}\necho $total;', ["10", "4", "6", "1234"], "1 + 2 + 3 + 4.");
  P("kontrol", 1, '$buah = ["apel", "jeruk", "mangga"];\necho count($buah), " ", $buah[1];', ["3 jeruk", "3 apel", "2 jeruk", "Error"], "Indeks array mulai 0; count menghitung isi.");
  P("kontrol", 2, '$harga = ["kopi" => 18000, "teh" => 12000];\nforeach ($harga as $nama => $h) {\n  echo "$nama=$h ";\n}', ["kopi=18000 teh=12000", "0=18000 1=12000", "kopi teh", "Error"], "Array asosiatif: foreach ($arr as $kunci => $nilai).");
  P("kontrol", 2, '$n = 85;\nif ($n >= 90) echo "A";\nelseif ($n >= 80) echo "B";\nelse echo "C";', ["B", "A", "C", "BC"], "elseif ditulis satu kata di PHP (else if juga sah).");
  P("kontrol", 2, '$a = [3, 1, 2];\nsort($a);\necho implode(",", $a);', ["1,2,3", "3,1,2", "3,2,1", "Error"], "sort mengubah array aslinya; implode menyambung dengan pemisah.");
  P("kontrol", 2, '$stok = 0;\necho $stok ?: "habis", " ", $stok ?? "kosong";', ["habis 0", "0 kosong", "habis kosong", "0 0"], "?: memakai cadangan bila nilai falsy (0); ?? hanya bila null/tidak ada.");
  PI("kontrol", 1, "Fungsi menghitung banyak isi array: ____()", ["count"], "count($arr).");
  // fungsi (+8)
  P("fungsi", 1, 'function luas($p, $l) {\n  return $p * $l;\n}\necho luas(4, 5);', ["20", "9", "45", "Error"], "Fungsi dengan return.");
  P("fungsi", 1, 'function sapa($nama = "Tamu") {\n  return "Halo $nama";\n}\necho sapa(), ", ", sapa("Ani");', ["Halo Tamu, Halo Ani", "Halo , Halo Ani", "Error", "Halo Ani, Halo Ani"], "Parameter dengan nilai bawaan.");
  P("fungsi", 2, '$a = [1, 2, 3, 4];\n$b = array_map(fn($x) => $x * 10, $a);\necho implode(" ", $b);', ["10 20 30 40", "1 2 3 4", "100", "Error"], "array_map menerapkan fungsi ke setiap isi; fn => adalah arrow function PHP 7.4+.");
  P("fungsi", 2, '$a = [5, 12, 8, 20];\n$b = array_filter($a, fn($x) => $x > 10);\necho implode(",", $b), " ", count($b);', ["12,20 2", "5,8 2", "12,20 4", "Error"], "array_filter menyimpan yang lolos (kunci asli dipertahankan).");
  P("fungsi", 2, 'echo array_sum([2, 4, 6]), " ", max([2, 9, 4]), " ", in_array(4, [2, 4]) ? "ada" : "tidak";', ["12 9 ada", "12 9 tidak", "3 9 ada", "Error"], "Fungsi array bawaan.");
  P("fungsi", 2, 'function tambah(int ...$angka): int {\n  return array_sum($angka);\n}\necho tambah(1, 2, 3);', ["6", "123", "3", "Error"], "...$angka menampung berapa pun argumen; tipe int dan kembalian int.");
  P("fungsi", 3, '$x = 1;\nfunction ubah() {\n  $x = 99;\n}\nubah();\necho $x;', ["1", "99", "Error", "null"], "Variabel di dalam fungsi PHP terpisah dari luar (tanpa global).");
  PI("fungsi", 1, "Fungsi menyambung array menjadi teks: ____(\",\", $arr)", ["implode"], "implode.");
  // web (+8)
  PM("web", 1, "Data form dengan method=\"post\" dibaca di PHP lewat…", ["$_POST['nama']", "$_GET['nama']", "$nama langsung", "request()"], "$_GET untuk data di URL.");
  PM("web", 1, "Menampilkan input pengguna ke HTML dengan aman:", ["echo htmlspecialchars($nama);", "echo $nama;", "eval($nama);", "print_r($nama);"], "Mencegah XSS (skrip sisipan).");
  PM("web", 2, "Menyimpan kata sandi pengguna dengan benar:", ["password_hash($pw, PASSWORD_DEFAULT) lalu cek dengan password_verify", "md5($pw)", "Simpan apa adanya", "base64_encode($pw)"], "md5 dan base64 tidak aman untuk kata sandi.");
  PM("web", 2, "Session dimulai dengan…", ["session_start() di awal skrip sebelum ada output", "start_session()", "$_SESSION = true", "cookie()"], "Lalu simpan data di $_SESSION['user_id'].");
  PM("web", 2, "Query database yang aman dari SQL injection:", ["$stmt = $pdo->prepare('SELECT * FROM user WHERE email = ?'); $stmt->execute([$email]);", "\"SELECT * FROM user WHERE email = '$email'\"", "Menghapus tanda kutip manual", "Memakai GET saja"], "Prepared statement memisahkan data dari perintah SQL.");
  PM("web", 2, "Mengarahkan pengguna ke halaman lain setelah login:", ["header('Location: dashboard.php'); exit;", "echo 'dashboard.php';", "redirect();", "goto dashboard;"], "exit mencegah sisa kode dijalankan.");
  PM("web", 2, "CSRF token pada form berguna untuk…", ["Memastikan form dikirim dari situsmu sendiri, bukan situs lain", "Mempercepat", "Validasi email", "Menyimpan gambar"], "Laravel menambahkannya otomatis dengan @csrf.");
  PI("web", 1, "Array PHP berisi data form method post: $_____", ["post"], "$_POST.");
  // oopdb (+8)
  P("oopdb", 1, 'class Kucing {\n  public function __construct(public string $nama) {}\n  public function suara(): string { return $this->nama . ": meong"; }\n}\necho (new Kucing("Mochi"))->suara();', ["Mochi: meong", "meong", "Error", ": meong"], "Constructor property promotion (PHP 8) membuat properti langsung dari parameter.");
  P("oopdb", 2, 'class Hewan { public function suara() { return "..."; } }\nclass Anjing extends Hewan { public function suara() { return "guk"; } }\n$h = [new Hewan(), new Anjing()];\nforeach ($h as $x) echo $x->suara(), " ";', ["... guk", "guk guk", "... ...", "Error"], "Override method di class turunan.");
  P("oopdb", 2, 'class Akun {\n  private int $saldo = 100;\n  public function tarik(int $n): int {\n    if ($n <= $this->saldo) $this->saldo -= $n;\n    return $this->saldo;\n  }\n}\n$a = new Akun();\n$a->tarik(30);\necho $a->tarik(500);', ["70", "-430", "100", "Error"], "private menjaga properti; penarikan 500 ditolak.");
  P("oopdb", 2, 'class Hitung {\n  public static int $n = 0;\n  public function __construct() { self::$n++; }\n}\nnew Hitung(); new Hitung();\necho Hitung::$n;', ["2", "1", "0", "Error"], "Properti static dibagi semua objek; diakses dengan self:: atau NamaClass::.");
  PM("oopdb", 2, "PDO di PHP adalah…", ["Lapisan akses database yang seragam untuk MySQL, PostgreSQL, SQLite, dll.", "Framework", "Template engine", "Server"], "Mendukung prepared statement.");
  PM("oopdb", 2, "Di Laravel, model Eloquent Produk::where('harga', '>', 10000)->get() setara dengan…", ["SELECT * FROM produks WHERE harga > 10000", "DELETE", "INSERT", "UPDATE"], "ORM Laravel.");
  PM("oopdb", 2, "Migration di Laravel berguna untuk…", ["Mencatat perubahan struktur tabel dalam kode sehingga bisa diterapkan di komputer lain", "Mengirim email", "Menyimpan session", "Membuat tampilan"], "php artisan migrate.");
  PI("oopdb", 1, "Kata kunci mewarisi class di PHP: ____", ["extends"], "extends.");
  // stringtgl (+15)
  P("stringtgl", 1, 'echo strlen("Halo"), " ", strtoupper("kopi"), " ", ucwords("andi santoso");', ["4 KOPI Andi Santoso", "4 Kopi Andi santoso", "5 KOPI Andi Santoso", "Error"], "Fungsi teks dasar PHP.");
  P("stringtgl", 1, 'echo str_repeat("ab", 3), " ", strrev("data");', ["ababab atad", "ab3 atad", "ababab data", "Error"], "str_repeat mengulang, strrev membalik.");
  P("stringtgl", 1, 'echo substr("Programmer", 3, 4);', ["gram", "ogra", "gramm", "ram"], "substr(teks, mulai, panjang): mulai indeks 3, ambil 4 karakter.");
  P("stringtgl", 2, 'echo str_replace(".", "", "1.250.000") + 1;', ["1250001", "1.250.0001", "1251", "Error"], "Titik dibuang, teks angka dijumlah.");
  P("stringtgl", 2, 'echo number_format(1250000, 0, ",", ".");', ["1.250.000", "1,250,000", "1250000", "1.250.000,00"], "number_format(angka, desimal, pemisah desimal, pemisah ribuan).");
  P("stringtgl", 2, '$k = explode(",", "apel,jeruk,mangga");\necho count($k), " ", trim("  rapi  "), "|";', ["3 rapi|", "1 rapi|", "3   rapi  |", "Error"], "explode memecah teks; trim membuang spasi tepi.");
  P("stringtgl", 2, 'var_dump(str_contains("kopi susu", "susu"), str_starts_with("INV-01", "INV"));', ["bool(true)\nbool(true)", "true true", "1 1", "bool(false)\nbool(true)"], "Fungsi PHP 8 untuk mengecek isi dan awalan teks.");
  P("stringtgl", 2, 'echo sprintf("%05.1f|%-5s|%03d", 3.14159, "ab", 7);', ["003.1|ab   |007", "3.1|ab|7", "00003.1|ab|007", "Error"], "%05.1f = lebar 5, 1 desimal, isi nol; %-5s = rata kiri lebar 5; %03d = 3 digit.");
  P("stringtgl", 2, 'echo date("Y-m-d", mktime(0, 0, 0, 11, 27, 2026));', ["2026-11-27", "27-11-2026", "2026/11/27", "Error"], "mktime(jam, menit, detik, bulan, tanggal, tahun) lalu diformat.");
  P("stringtgl", 2, '$a = new DateTime("2026-11-27");\n$b = new DateTime("2026-12-25");\necho $a->diff($b)->days;', ["28", "29", "27", "Error"], "diff memberi selisih; ->days dalam hari.");
  P("stringtgl", 2, '$d = new DateTime("2026-01-31");\n$d->modify("+1 day");\necho $d->format("d/m/Y");', ["01/02/2026", "32/01/2026", "31/01/2026", "Error"], "modify otomatis pindah bulan.");
  P("stringtgl", 2, 'echo preg_match_all("/\\d+/", "INV 12 dan 345", $m), " ", $m[0][1];', ["2 345", "2 12", "3 345", "Error"], "preg_match_all mengembalikan jumlah kecocokan; hasilnya di $m[0].");
  P("stringtgl", 3, 'echo preg_replace("/\\s+/", " ", "terlalu    banyak   spasi");', ["terlalu banyak spasi", "terlalubanyakspasi", "terlalu    banyak   spasi", "Error"], "Regex \\s+ = satu atau lebih spasi.");
  PM("stringtgl", 2, "Mengatur zona waktu agar date() sesuai WIB:", ["date_default_timezone_set('Asia/Jakarta')", "setTime('WIB')", "date('WIB')", "timezone = 7"], "Atau atur date.timezone di php.ini.");
  PI("stringtgl", 1, "Fungsi memecah teks menjadi array: ____(\",\", $teks)", ["explode"], "explode.");
  // modern (+15)
  P("modern", 1, '$status = "done";\necho match($status) {\n  "draft" => "Draf",\n  "done" => "Selesai",\n  default => "Lain",\n};', ["Selesai", "Draf", "Lain", "Error"], "match (PHP 8) membandingkan dengan === dan mengembalikan nilai.");
  P("modern", 1, 'echo json_encode(["nama" => "Ani", "nilai" => [90, 85]]);', ["{\"nama\":\"Ani\",\"nilai\":[90,85]}", "nama=Ani", "[\"Ani\",[90,85]]", "Error"], "json_encode mengubah array menjadi teks JSON.");
  P("modern", 2, '$data = json_decode(\'{"harga": 18000}\', true);\necho $data["harga"] + 2000;', ["20000", "180002000", "Error", "18000"], "json_decode dengan true menghasilkan array asosiatif.");
  P("modern", 2, 'function bagi(int $a, int $b): float {\n  if ($b === 0) throw new InvalidArgumentException("pembagi nol");\n  return $a / $b;\n}\ntry {\n  bagi(1, 0);\n} catch (InvalidArgumentException $e) {\n  echo "Error: ", $e->getMessage();\n}', ["Error: pembagi nol", "INF", "0", "Fatal error"], "throw dan try/catch dengan jenis exception yang tepat.");
  P("modern", 2, 'try {\n  echo "A";\n  throw new Exception("x");\n} catch (Exception $e) {\n  echo "B";\n} finally {\n  echo "C";\n}', ["ABC", "AC", "BC", "AB"], "finally selalu dijalankan.");
  P("modern", 2, '$user = null;\necho $user?->nama ?? "tamu";', ["tamu", "Error", "null", "nama"], "Nullsafe operator ?-> (PHP 8) berhenti bila null, lalu ?? memberi cadangan.");
  P("modern", 2, 'function info(string $nama, int $umur = 0) { return "$nama:$umur"; }\necho info(umur: 21, nama: "Ani");', ["Ani:21", "21:Ani", "Error", "Ani:0"], "Named arguments (PHP 8): urutan bebas.");
  P("modern", 2, '$a = [1, 2];\n$b = [...$a, 3];\n[$x, , $z] = $b;\necho $x + $z;', ["4", "3", "6", "Error"], "Spread array dan destructuring dengan melewati elemen.");
  P("modern", 2, 'enum Status: string {\n  case Draft = "draft";\n  case Done = "done";\n}\necho Status::from("done")->name;', ["Done", "done", "Draft", "Error"], "Backed enum (PHP 8.1): from() mencari case dari nilainya.");
  P("modern", 3, 'readonly class Titik {\n  public function __construct(public int $x, public int $y) {}\n}\n$t = new Titik(1, 2);\ntry {\n  $t->x = 5;\n} catch (Error $e) {\n  echo "tidak bisa diubah";\n}', ["tidak bisa diubah", "5", "1", "Fatal error tanpa pesan"], "readonly class (PHP 8.2): properti hanya bisa diisi sekali di constructor.");
  PM("modern", 1, "Composer adalah…", ["Pengelola paket (dependency) untuk PHP", "Framework", "Database", "Editor kode"], "composer require monolog/monolog.");
  PM("modern", 2, "File composer.json berisi…", ["Daftar paket yang dibutuhkan proyek dan pengaturan autoload", "Kode utama", "Kata sandi", "Data pengguna"], "Folder vendor/ tidak di-commit; dibuat ulang dengan composer install.");
  PM("modern", 2, "declare(strict_types=1); di awal file membuat…", ["PHP menolak tipe yang tidak cocok (misalnya teks ke parameter int) alih-alih mengubahnya diam-diam", "Kode lebih cepat", "Semua variabel global", "Wajib"], "Membantu menemukan bug lebih awal.");
  PI("modern", 1, "Ekspresi pengganti switch di PHP 8: ____()", ["match"], "match.");
  PI("modern", 2, "Pengelola paket PHP: ____", ["composer"], "Composer.");

  const DJ = dk(MATERI_JAVA), DP = dk(MATERI_PHP);
  DJ("dasar", `<h4>Kerangka program Java</h4><pre><code>public class Main {                         // nama class = nama file Main.java
    public static void main(String[] args) { // titik mulai program
        int umur = 21;                        // tipe wajib ditulis
        double ipk = 3.84;
        String nama = "Jauza";
        System.out.println(nama + " " + umur);
    }
}</code></pre><table class="mini-pivot"><tr><th>Tipe</th><th>Contoh</th></tr><tr><td>int / long</td><td>21 / 21L</td></tr><tr><td>double</td><td>3.84</td></tr><tr><td>boolean</td><td>true</td></tr><tr><td>char</td><td>'A'</td></tr><tr><td>String</td><td>"teks"</td></tr></table><p>Jebakan: int / int membuang desimal (7 / 2 = 3).</p>`);
  DJ("kontrol", `<h4>Kontrol alur Java vs Python</h4><table class="mini-pivot"><tr><th>Python</th><th>Java</th></tr><tr><td>if x &gt; 0:</td><td>if (x &gt; 0) { … }</td></tr><tr><td>for i in range(5):</td><td>for (int i = 0; i &lt; 5; i++) { … }</td></tr><tr><td>for x in data:</td><td>for (int x : data) { … }</td></tr><tr><td>while x &lt; 5:</td><td>while (x &lt; 5) { … }</td></tr></table><p>Blok Java ditandai kurung kurawal, bukan indentasi; tetap rapikan jorok agar mudah dibaca.</p>`);
  DJ("array", `<h4>Array vs String vs StringBuilder</h4><ul><li>Array: ukuran tetap, <code>a.length</code> (tanpa kurung).</li><li>String: tidak bisa diubah, <code>s.length()</code>, bandingkan dengan <code>equals</code>.</li><li>StringBuilder: teks yang bisa diubah, efisien untuk menyambung di dalam loop.</li></ul>`);
  DJ("oop", `<h4>Empat pilar OOP di Java</h4><pre><code>interface Bentuk { double luas(); }              // abstraksi
class Persegi implements Bentuk {
    private final double sisi;                      // enkapsulasi
    Persegi(double s) { sisi = s; }
    public double luas() { return sisi * sisi; }    // polimorfisme lewat interface
}
class Kubus extends Persegi { … }                   // pewarisan</code></pre>`);
  DJ("koleksi", `<h4>Koleksi dan stream</h4><pre><code>List&lt;Integer&gt; nilai = new ArrayList&lt;&gt;(List.of(80, 45, 92));
Map&lt;String, Integer&gt; harga = new HashMap&lt;&gt;();
harga.put("kopi", 18000);
int lulus = (int) nilai.stream().filter(n -&gt; n &gt;= 70).count();   // 2</code></pre><p>Tangani error dengan <code>try { … } catch (JenisException e) { … } finally { … }</code>.</p>`);
  DJ("method", `<h4>Method: nilai vs rujukan</h4><p>Java selalu mengirim <b>salinan</b>. Untuk tipe primitif (int, double) yang disalin nilainya, jadi variabel asal tidak berubah. Untuk objek/array yang disalin rujukannya, jadi isi objek bisa diubah dari dalam method.</p><table class="mini-pivot"><tr><th>Konsep</th><th>Contoh</th></tr><tr><td>Overloading</td><td>tambah(int,int) dan tambah(double,double)</td></tr><tr><td>Varargs</td><td>jumlah(int... angka)</td></tr><tr><td>Rekursi</td><td>faktorial(n) memanggil faktorial(n-1)</td></tr><tr><td>static</td><td>milik class: Math.max</td></tr></table>`);
  DJ("modern", `<h4>Fitur Java modern yang sering ditanyakan</h4><table class="mini-pivot"><tr><th>Fitur</th><th>Versi</th><th>Contoh</th></tr><tr><td>var</td><td>10</td><td>var daftar = new ArrayList&lt;String&gt;();</td></tr><tr><td>switch expression</td><td>14</td><td>case 6, 7 -&gt; "akhir pekan";</td></tr><tr><td>text block</td><td>15</td><td>"""…"""</td></tr><tr><td>record</td><td>16</td><td>record Produk(String nama, int harga) {}</td></tr><tr><td>Optional</td><td>8</td><td>o.orElse("kosong")</td></tr></table>`);
  DP("dasar", `<h4>PHP di dalam HTML</h4><pre><code>&lt;?php $nama = "Rina"; ?&gt;
&lt;h1&gt;Halo, &lt;?= htmlspecialchars($nama) ?&gt;&lt;/h1&gt;</code></pre><table class="mini-pivot"><tr><th>Ingin</th><th>PHP</th></tr><tr><td>sambung teks</td><td>.</td></tr><tr><td>variabel di teks</td><td>"Halo $nama" (kutip ganda)</td></tr><tr><td>bagi bulat</td><td>intdiv(7, 2)</td></tr><tr><td>pangkat</td><td>2 ** 3</td></tr></table>`);
  DP("kontrol", `<h4>Dua jenis array PHP</h4><pre><code>$buah = ["apel", "jeruk"];                    // berindeks 0, 1
$harga = ["kopi" =&gt; 18000, "teh" =&gt; 12000];  // asosiatif (kunci teks)
foreach ($harga as $nama =&gt; $h) { echo "$nama: $h\\n"; }</code></pre><p>Operator cadangan: <code>?:</code> (nilai falsy) dan <code>??</code> (null/tidak ada).</p>`);
  DP("fungsi", `<h4>Fungsi array yang wajib dikenal</h4><table class="mini-pivot"><tr><th>Fungsi</th><th>Kegunaan</th></tr><tr><td>count, array_sum, max, min</td><td>ringkasan</td></tr><tr><td>array_map</td><td>ubah setiap isi</td></tr><tr><td>array_filter</td><td>saring (kunci asli tetap)</td></tr><tr><td>in_array, array_search</td><td>cari</td></tr><tr><td>sort, rsort, usort</td><td>urutkan</td></tr><tr><td>implode / explode</td><td>array ↔ teks</td></tr></table>`);
  DP("web", `<h4>Empat aturan keamanan PHP web</h4><ol><li>Tampilkan input pengguna dengan <code>htmlspecialchars</code> (cegah XSS).</li><li>Query database dengan prepared statement PDO (cegah SQL injection).</li><li>Simpan kata sandi dengan <code>password_hash</code> / <code>password_verify</code>.</li><li>Lindungi form dengan token CSRF dan cek izin di server.</li></ol>`);
  DP("oopdb", `<h4>Dari PHP murni ke Laravel</h4><table class="mini-pivot"><tr><th>PHP murni</th><th>Laravel</th></tr><tr><td>PDO + SQL</td><td>Eloquent ORM</td></tr><tr><td>file per halaman</td><td>routes/web.php + Controller</td></tr><tr><td>echo HTML</td><td>Blade template</td></tr><tr><td>ALTER TABLE manual</td><td>migration</td></tr></table>`);
  DP("stringtgl", `<h4>Fungsi teks & tanggal yang sering dipakai</h4><table class="mini-pivot"><tr><th>Kebutuhan</th><th>Fungsi</th></tr><tr><td>panjang, huruf</td><td>strlen, strtoupper, ucwords</td></tr><tr><td>potong, ganti</td><td>substr, str_replace</td></tr><tr><td>format rupiah</td><td>number_format($n, 0, ",", ".")</td></tr><tr><td>cek isi</td><td>str_contains, str_starts_with</td></tr><tr><td>tanggal</td><td>new DateTime(), ->modify(), ->diff(), ->format()</td></tr><tr><td>pola</td><td>preg_match, preg_replace</td></tr></table>`);
  DP("modern", `<h4>PHP 8 yang membuat kode lebih rapi</h4><pre><code>$label = match($status) { "draft" =&gt; "Draf", "done" =&gt; "Selesai", default =&gt; "Lain" };
$nama  = $user?-&gt;profil?-&gt;nama ?? "tamu";
info(umur: 21, nama: "Ani");                       // named arguments
class Produk { public function __construct(public string $nama, public int $harga) {} }
enum Status: string { case Draft = "draft"; case Done = "done"; }</code></pre>`);
})();
