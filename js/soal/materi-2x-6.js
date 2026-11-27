// ============ Materi 2x lipat (bagian 6): Java, PHP, Git, BI, Statistik, Karier ============
// Kode contoh ditulis dengan String.raw (R`...`) agar garis miring terbalik tetap utuh.
(function () {
  const R = String.raw;
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const tambah = (MAT, k, judul, h) => { const b = MAT.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">' + judul + '</h4>' + h; };
  const li = a => a.map(x => `<li>${x}</li>`).join("");
  const cekH = qa => `<h4>Cek pemahaman</h4><ol class="cek-paham">${qa.map(([q, a]) => `<li>${q}<details><summary>Lihat jawaban</summary><p>${a}</p></details></li>`).join("")}</ol>`;
  const tabel = (judul, baris) => `<h4>${judul}</h4><table class="mini-pivot">${baris.map((b, i) => `<tr>${b.map(x => i ? `<td>${x}</td>` : `<th>${x}</th>`).join("")}</tr>`).join("")}</table>`;
  const blok = (judul, kode, langkah, salah, latihan, kunci) =>
    `<h4>Contoh terpandu: ${judul}</h4><pre><code>${esc(kode)}</code></pre><ol>${li(langkah)}</ol>` +
    `<h4>Kesalahan yang sering terjadi</h4><ul>${li(salah)}</ul>` +
    `<h4>Latihan mandiri</h4><ol>${li(latihan)}</ol>` +
    `<details class="kunci-latihan"><summary>Lihat kunci jawaban (coba dulu sendiri)</summary><pre><code>${esc(kunci)}</code></pre></details>`;
  // satu bab = contoh terpandu + cek pemahaman (+ tabel ringkas opsional)
  const bab = MAT => (k, judul, kode, langkah, salah, latihan, kunci, qa, ekstra) =>
    tambah(MAT, k, "Latihan terpandu &amp; kunci", blok(judul, kode, langkah, salah, latihan, kunci) + cekH(qa) + (ekstra || ""));

  /* ======================= Java (7 bab) ======================= */
  const J = bab(MATERI_JAVA);
  J("dasar", "kasir sederhana dengan tipe data yang tepat",
R`public class Kasir {
    public static void main(String[] args) {
        String barang = "Kopi Susu";
        int jumlah = 3;
        long harga = 18000L;          // uang dalam rupiah: pakai bilangan bulat
        double pajak = 0.11;
        long subtotal = harga * jumlah;
        long ppn = Math.round(subtotal * pajak);
        System.out.println(barang + " x" + jumlah);
        System.out.println("Subtotal: " + subtotal);
        System.out.println("PPN     : " + ppn);
        System.out.println("Total   : " + (subtotal + ppn));
    }
}`,
    ["Nama class harus sama dengan nama file: Kasir.java.", "Uang rupiah disimpan sebagai long agar tidak ada pecahan aneh dari double.", "Math.round membulatkan PPN ke rupiah terdekat.", "Tanda kurung pada (subtotal + ppn) mencegah penggabungan teks."],
    ["Menulis \"Total: \" + subtotal + ppn → angka digabung sebagai teks, bukan dijumlah.", "Pembagian int: 7 / 2 menghasilkan 3, bukan 3.5.", "Lupa titik koma atau huruf besar-kecil salah (string vs String)."],
    ["Hitung kembalian bila pelanggan membayar 100.000.", "Hitung rata-rata 3 nilai int dengan hasil desimal.", "Ubah teks \"25\" menjadi angka lalu kalikan 2."],
R`long bayar = 100000L;
long kembali = bayar - (subtotal + ppn);      // 100000 - 59940 = 40060

int a = 7, b = 8, c = 9;
double rata = (a + b + c) / 3.0;              // 3.0 memaksa pembagian desimal

int n = Integer.parseInt("25") * 2;           // 50`,
    [["Kenapa 5 / 2 di Java menghasilkan 2?", "Kedua operand int sehingga hasilnya int; bagian desimal dibuang. Pakai 5 / 2.0."], ["Beda int dan long?", "int sampai sekitar 2,1 miliar; long jauh lebih besar dan cocok untuk uang atau hitungan besar."], ["Apa itu main?", "Titik masuk program: public static void main(String[] args)."], ["Kenapa String ditulis huruf besar?", "String adalah class, bukan tipe primitif seperti int."]],
    tabel("Tipe data yang sering dipakai", [["Tipe", "Contoh", "Catatan"], ["int", "42", "bilangan bulat"], ["long", "18000L", "bulat besar"], ["double", "3.14", "desimal"], ["boolean", "true", "benar/salah"], ["char", "'A'", "satu karakter, kutip tunggal"], ["String", "\"Halo\"", "teks, kutip ganda"]]));

  J("kontrol", "menentukan grade dan menghitung bunga tabungan",
R`int nilai = 78;
String grade;
if (nilai >= 85) grade = "A";
else if (nilai >= 70) grade = "B";
else if (nilai >= 55) grade = "C";
else grade = "D";
System.out.println("Grade " + grade);

double saldo = 1_000_000;
int tahun = 0;
while (saldo < 1_500_000) {
    saldo = saldo * 1.05;        // bunga 5% per tahun
    tahun++;
}
System.out.println(tahun + " tahun");   // 9 tahun`,
    ["if-else if diperiksa dari atas; yang pertama benar dipakai.", "while dipakai saat jumlah ulangan belum diketahui.", "Garis bawah pada 1_000_000 hanya pemisah agar mudah dibaca."],
    ["Membandingkan String dengan == (pakai .equals).", "Lupa break di switch lama sehingga case berikutnya ikut jalan.", "Loop while tanpa perubahan variabel → tidak berhenti."],
    ["Tulis switch untuk nama hari dari angka 1–7.", "Cetak bilangan genap 2 sampai 20 dengan for.", "Hitung jumlah digit dari 12345."],
R`String hari = switch (n) {
    case 1 -> "Senin"; case 2 -> "Selasa"; case 3 -> "Rabu";
    case 4 -> "Kamis"; case 5 -> "Jumat"; case 6 -> "Sabtu";
    case 7 -> "Minggu"; default -> "tidak valid";
};

for (int i = 2; i <= 20; i += 2) System.out.println(i);

int x = 12345, jumlah = 0;
while (x > 0) { jumlah += x % 10; x /= 10; }   // 15`,
    [["Beda while dan do-while?", "do-while menjalankan isi minimal sekali sebelum memeriksa syarat."], ["Apa fungsi continue?", "Melewati sisa isi loop dan lanjut ke putaran berikutnya."], ["Kenapa \"a\" == \"a\" kadang true kadang false?", "== membandingkan alamat objek; pakai equals untuk isi teks."], ["Apa keuntungan switch dengan tanda panah (->)?", "Tidak perlu break dan bisa langsung mengembalikan nilai."]]);

  J("array", "statistik nilai ujian dari array",
R`int[] nilai = {78, 92, 65, 88, 70};
int total = 0, maks = nilai[0];
for (int n : nilai) {
    total += n;
    if (n > maks) maks = n;
}
double rata = (double) total / nilai.length;
System.out.printf("Rata-rata %.1f, tertinggi %d%n", rata, maks);

String nama = "  budi santoso ";
String rapi = nama.trim().toUpperCase();
System.out.println(rapi + " (" + rapi.length() + " huruf)");`,
    ["for-each membaca setiap isi array tanpa indeks.", "(double) total mengubah ke desimal sebelum dibagi.", "printf dengan %.1f menampilkan satu angka desimal.", "Method String tidak mengubah aslinya; hasil disimpan ke variabel baru."],
    ["Mengakses nilai[5] pada array panjang 5 → ArrayIndexOutOfBoundsException.", "Tertukar: array memakai length (tanpa kurung), String memakai length().", "Menggabungkan String di loop besar tanpa StringBuilder."],
    ["Urutkan array nilai dari kecil ke besar.", "Hitung berapa nilai ≥ 75.", "Balik teks \"KODE\" menjadi \"EDOK\"."],
R`java.util.Arrays.sort(nilai);                 // [65, 70, 78, 88, 92]

int lulus = 0;
for (int n : nilai) if (n >= 75) lulus++;    // 3

String balik = new StringBuilder("KODE").reverse().toString();`,
    [["Indeks pertama array?", "0. Indeks terakhir = length − 1."], ["Bisakah ukuran array diubah?", "Tidak. Untuk ukuran berubah pakai ArrayList."], ["Apa hasil \"Java\".charAt(1)?", "'a'."], ["Kenapa StringBuilder lebih cepat di loop?", "String tidak bisa diubah, setiap + membuat objek baru; StringBuilder mengubah isi yang sama."]]);

  J("oop", "rekening bank dengan enkapsulasi dan pewarisan",
R`class Rekening {
    private final String pemilik;
    protected long saldo;

    Rekening(String pemilik, long awal) { this.pemilik = pemilik; this.saldo = awal; }

    void setor(long x) {
        if (x <= 0) throw new IllegalArgumentException("Setoran harus positif");
        saldo += x;
    }
    boolean tarik(long x) {
        if (x > saldo) return false;
        saldo -= x;
        return true;
    }
    long getSaldo() { return saldo; }
}

class Tabungan extends Rekening {
    Tabungan(String p, long awal) { super(p, awal); }
    void bungaBulanan() { saldo += Math.round(saldo * 0.003); }
}`,
    ["private menyembunyikan data; perubahan hanya lewat method.", "Validasi di setor mencegah saldo rusak.", "extends mewarisi semua method; super(...) memanggil constructor induk.", "protected bisa diakses kelas turunan."],
    ["Membuat semua field public sehingga saldo bisa diubah sembarangan.", "Lupa memanggil super(...) saat induk tidak punya constructor kosong.", "Override tanpa @Override sehingga salah ketik nama tidak terdeteksi."],
    ["Buat interface BisaTransfer dengan method transfer(Rekening tujuan, long x).", "Override toString agar mencetak 'Rekening Budi: 500000'.", "Buat kelas Giro yang boleh minus sampai −1 juta."],
R`interface BisaTransfer { boolean transfer(Rekening tujuan, long x); }

@Override
public String toString() { return "Rekening " + pemilik + ": " + saldo; }

class Giro extends Rekening {
    Giro(String p, long awal) { super(p, awal); }
    @Override
    boolean tarik(long x) {
        if (saldo - x < -1_000_000) return false;
        saldo -= x;
        return true;
    }
}`,
    [["Empat pilar OOP?", "Enkapsulasi, pewarisan, polimorfisme, abstraksi."], ["Beda abstract class dan interface?", "Abstract class bisa punya field dan constructor, hanya bisa diwarisi satu. Interface berisi kontrak method dan bisa diimplementasi banyak."], ["Apa itu polimorfisme?", "Variabel bertipe induk bisa menunjuk objek turunan, dan method yang dipanggil mengikuti objek sebenarnya."], ["Kenapa field final?", "Nilainya tidak bisa diubah setelah diisi di constructor."]]);

  J("koleksi", "keranjang belanja dengan ArrayList, HashMap, dan Stream",
R`import java.util.*;
import java.util.stream.*;

record Item(String nama, String kategori, long harga, int qty) {}

List<Item> keranjang = new ArrayList<>(List.of(
    new Item("Kopi", "minuman", 18000, 2),
    new Item("Roti", "makanan", 12000, 3),
    new Item("Teh",  "minuman",  8000, 1)));

long total = keranjang.stream().mapToLong(i -> i.harga() * i.qty()).sum();

Map<String, Long> perKategori = keranjang.stream()
    .collect(Collectors.groupingBy(Item::kategori,
             Collectors.summingLong(i -> i.harga() * i.qty())));
// {minuman=44000, makanan=36000}`,
    ["List.of membuat daftar awal; dibungkus ArrayList agar bisa ditambah.", "mapToLong + sum menjumlah subtotal.", "groupingBy mengelompokkan per kategori dan menjumlah di tiap kelompok."],
    ["Mengubah list di dalam for-each → ConcurrentModificationException.", "Memakai List.of lalu add → UnsupportedOperationException.", "HashMap mengira urutan tetap (pakai LinkedHashMap atau TreeMap)."],
    ["Ambil nama barang yang harganya ≥ 10.000.", "Hitung frekuensi kata dalam kalimat dengan HashMap.", "Hapus item qty 0 dengan aman."],
R`List<String> mahal = keranjang.stream()
    .filter(i -> i.harga() >= 10000).map(Item::nama).toList();   // [Kopi, Roti]

Map<String, Integer> frek = new HashMap<>();
for (String k : "aku suka kopi aku suka teh".split(" "))
    frek.merge(k, 1, Integer::sum);

keranjang.removeIf(i -> i.qty() == 0);`,
    [["Kapan memakai Set?", "Saat butuh nilai unik tanpa duplikat."], ["Apa fungsi getOrDefault?", "Mengambil nilai Map atau cadangan bila kunci tidak ada."], ["Kenapa ArrayList&lt;int&gt; tidak boleh?", "Generics butuh objek; pakai Integer."], ["Beda map dan filter di Stream?", "map mengubah setiap elemen; filter memilih elemen yang memenuhi syarat."]]);

  J("method", "fungsi bantu dengan overloading dan rekursi",
R`static long luas(long sisi) { return sisi * sisi; }
static long luas(long p, long l) { return p * l; }          // overloading

static long faktorial(int n) {
    if (n <= 1) return 1;          // kasus dasar
    return n * faktorial(n - 1);   // kasus rekursif
}

static int cariBiner(int[] arr, int target) {
    int kiri = 0, kanan = arr.length - 1;
    while (kiri <= kanan) {
        int tengah = (kiri + kanan) / 2;
        if (arr[tengah] == target) return tengah;
        if (arr[tengah] < target) kiri = tengah + 1; else kanan = tengah - 1;
    }
    return -1;
}`,
    ["Dua method luas dengan parameter berbeda = overloading.", "Rekursi wajib punya kasus dasar agar berhenti.", "Binary search membagi dua ruang pencarian setiap langkah (O(log n)); array harus terurut."],
    ["Rekursi tanpa kasus dasar → StackOverflowError.", "Mengira parameter objek disalin penuh (yang disalin referensinya).", "Overloading hanya beda tipe kembalian (tidak sah)."],
    ["Tulis fibonacci rekursif.", "Tulis method varargs total(int... angka).", "Tulis method yang menukar dua isi array."],
R`static long fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }

static int total(int... angka) {
    int t = 0;
    for (int a : angka) t += a;
    return t;
}

static void tukar(int[] a, int i, int j) { int s = a[i]; a[i] = a[j]; a[j] = s; }`,
    [["Java pass-by-value atau reference?", "Selalu pass-by-value; untuk objek, yang disalin adalah nilai referensinya."], ["Apa arti static?", "Milik class, bisa dipanggil tanpa membuat objek."], ["Kompleksitas binary search?", "O(log n)."], ["Kapan iterasi lebih baik dari rekursi?", "Saat kedalaman besar (risiko stack overflow) atau rekursi menghitung ulang hal yang sama."]]);

  J("modern", "status pesanan dengan enum, record, Optional, dan exception",
R`enum Status { BARU, DIBAYAR, DIKIRIM, SELESAI }

record Pesanan(String id, long total, Status status) {
    Pesanan {
        if (total < 0) throw new IllegalArgumentException("total negatif");
    }
}

static Optional<Pesanan> cari(List<Pesanan> semua, String id) {
    return semua.stream().filter(p -> p.id().equals(id)).findFirst();
}

String info = cari(daftar, "SO-7")
    .map(p -> p.id() + " " + p.status())
    .orElse("tidak ditemukan");

try {
    int n = Integer.parseInt("12a");
} catch (NumberFormatException e) {
    System.out.println("Input bukan angka");
}`,
    ["enum membatasi nilai status yang sah.", "record membuat class data dengan constructor, getter, equals otomatis; blok compact memvalidasi.", "Optional memaksa pemanggil menangani kasus tidak ada.", "catch hanya jenis error yang diharapkan."],
    ["Memanggil optional.get() tanpa cek → NoSuchElementException.", "catch (Exception e) {} kosong yang menyembunyikan masalah.", "Membandingkan enum dengan String."],
    ["Tulis switch yang memberi label Indonesia untuk setiap Status.", "Buat generic method yang mengembalikan elemen terbesar dari List.", "Pakai try-with-resources untuk membaca file."],
R`String label = switch (s) {
    case BARU -> "Menunggu bayar"; case DIBAYAR -> "Diproses";
    case DIKIRIM -> "Dalam perjalanan"; case SELESAI -> "Selesai";
};

static <T extends Comparable<T>> T terbesar(List<T> xs) { return Collections.max(xs); }

try (var br = new BufferedReader(new FileReader("data.txt"))) {
    System.out.println(br.readLine());
} catch (IOException e) { System.out.println("Gagal membaca: " + e.getMessage()); }`,
    [["Beda checked dan unchecked exception?", "Checked (misalnya IOException) wajib ditangani atau dideklarasikan; unchecked (RuntimeException) tidak wajib."], ["Apa itu var?", "Tipe variabel lokal ditebak compiler dari nilainya; tetap bertipe statis."], ["Kenapa record cocok untuk DTO?", "Ringkas, tidak bisa diubah, dan equals/hashCode otomatis."], ["Fungsi finally?", "Selalu dijalankan, cocok untuk merapikan sumber daya."]]);

  /* ======================= PHP (7 bab) ======================= */
  const P = bab(MATERI_PHP);
  P("dasar", "struk belanja sederhana",
R`<?php
$barang = "Kopi Susu";
$harga  = 18000;
$jumlah = 3;
$subtotal = $harga * $jumlah;
$ppn = round($subtotal * 0.11);

echo "Barang  : $barang x $jumlah\n";
echo "Subtotal: Rp " . number_format($subtotal, 0, ',', '.') . "\n";
echo "PPN     : Rp " . number_format($ppn, 0, ',', '.') . "\n";
echo "Total   : Rp " . number_format($subtotal + $ppn, 0, ',', '.') . "\n";`,
    ["Variabel PHP diawali $.", "Kutip ganda membaca variabel di dalam teks; kutip tunggal tidak.", "Titik (.) menggabungkan teks.", "number_format memberi pemisah ribuan gaya Indonesia."],
    ["Memakai + untuk menggabung teks.", "Lupa titik koma di akhir baris.", "Menulis '$barang' dengan kutip tunggal lalu heran variabel tidak terbaca."],
    ["Cetak 'Halo, Budi!' dari variabel $nama.", "Hitung luas lingkaran jari-jari 7 dengan 2 angka desimal.", "Cek tipe data '12' dan 12."],
R`$nama = "Budi";
echo "Halo, $nama!";

echo number_format(M_PI * 7 ** 2, 2);    // 153.94

var_dump("12", 12);    // string(2) "12"  int(12)`,
    [["Beda echo dan print_r?", "echo untuk teks; print_r/var_dump untuk melihat isi array atau objek."], ["Apa hasil \"5\" + \"3\" di PHP?", "8, karena + selalu operasi angka."], ["Beda == dan ===?", "== membandingkan nilai setelah konversi; === juga mengecek tipe. Biasakan ===."], ["Di mana kode PHP dijalankan?", "Di server; browser hanya menerima HTML hasilnya."]]);

  P("kontrol", "rekap nilai siswa dengan array asosiatif",
R`<?php
$nilai = ["Ani" => 88, "Budi" => 72, "Citra" => 95, "Dodi" => 58];

foreach ($nilai as $nama => $n) {
    if ($n >= 85)      $grade = "A";
    elseif ($n >= 70)  $grade = "B";
    else               $grade = "C";
    echo "$nama: $n ($grade)\n";
}

$lulus = 0;
foreach ($nilai as $n) {
    if ($n < 60) continue;
    $lulus++;
}
echo "Lulus: $lulus dari " . count($nilai);`,
    ["Array asosiatif memakai kunci teks (nama) dan nilai.", "foreach dengan $kunci => $nilai membaca keduanya.", "elseif ditulis menyatu di PHP.", "continue melewati siswa yang tidak lulus."],
    ["Mengakses kunci yang tidak ada → warning 'Undefined array key'.", "Lupa & saat ingin mengubah nilai di foreach.", "Memakai = (isi) di if, bukan === (bandingkan)."],
    ["Cari nama dengan nilai tertinggi.", "Tambahkan 5 poin ke semua nilai.", "Tampilkan label hari dengan match dari angka 1–7."],
R`$terbaik = array_search(max($nilai), $nilai);   // "Citra"

foreach ($nilai as &$n) { $n += 5; }
unset($n);   // putuskan referensi setelah loop

$hari = match ($k) {
    1 => "Senin", 2 => "Selasa", 3 => "Rabu", 4 => "Kamis",
    5 => "Jumat", 6 => "Sabtu", 7 => "Minggu", default => "tidak valid",
};`,
    [["Fungsi isset($a['x'])?", "Mengecek kunci ada dan tidak null tanpa memicu warning."], ["Beda for dan foreach?", "for memakai penghitung; foreach langsung membaca isi array."], ["Apa itu null coalescing ??", "$a ?? 'cadangan': pakai $a bila ada dan tidak null."], ["Kenapa unset($n) setelah foreach referensi?", "Agar variabel referensi tidak tanpa sengaja mengubah elemen terakhir di loop berikutnya."]]);

  P("fungsi", "fungsi bantu harga dan fungsi array bawaan",
R`<?php
function hargaAkhir(float $harga, float $diskon = 0, float $pajak = 0.11): float {
    $setelahDiskon = $harga * (1 - $diskon);
    return round($setelahDiskon * (1 + $pajak));
}

echo hargaAkhir(100000);           // 111000
echo hargaAkhir(100000, 0.1);      // 99900

$produk = [
    ["nama" => "Kopi", "harga" => 18000],
    ["nama" => "Roti", "harga" => 12000],
    ["nama" => "Teh",  "harga" =>  8000],
];
$mahal = array_filter($produk, fn($p) => $p["harga"] >= 10000);
$nama  = array_map(fn($p) => $p["nama"], $produk);
$total = array_sum(array_column($produk, "harga"));   // 38000
usort($produk, fn($a, $b) => $a["harga"] <=> $b["harga"]);`,
    ["Parameter bawaan ($diskon = 0) membuat argumen opsional.", "Deklarasi tipe float dan : float membantu menangkap kesalahan.", "fn(...) => ... adalah arrow function singkat.", "<=> (spaceship) mengembalikan -1, 0, 1 untuk usort."],
    ["array_filter mempertahankan kunci lama; pakai array_values bila butuh indeks rapi.", "Variabel luar tidak terlihat di function biasa (pakai parameter atau use).", "Tertukar urutan argumen array_map (fungsi dulu) dan array_filter (array dulu)."],
    ["Fungsi diskonBertingkat: ≥ 1 jt 10%, ≥ 500 rb 5%, selain itu 0.", "Ambil daftar nama yang diurutkan alfabet.", "Hitung rata-rata harga."],
R`function diskonBertingkat(float $total): float {
    return match (true) {
        $total >= 1000000 => 0.10,
        $total >= 500000  => 0.05,
        default           => 0,
    };
}

$nama = array_column($produk, "nama");
sort($nama);

$rata = array_sum(array_column($produk, "harga")) / count($produk);`,
    [["Apa fungsi strict_types?", "declare(strict_types=1) membuat PHP menolak tipe yang salah, bukan mengubahnya diam-diam."], ["Beda sort dan usort?", "sort mengurutkan nilai sederhana; usort memakai fungsi pembanding sendiri."], ["Apa itu closure dengan use?", "Fungsi anonim yang membawa variabel luar: function() use ($x) {...}."], ["Bagaimana mengembalikan beberapa nilai?", "Kembalikan array lalu bongkar: [$a, $b] = f();"]]);

  P("web", "form kontak yang aman",
R`<?php
session_start();
if (empty($_SESSION['token'])) $_SESSION['token'] = bin2hex(random_bytes(16));

$galat = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!hash_equals($_SESSION['token'], $_POST['token'] ?? '')) die('Token tidak valid');
    $nama  = trim($_POST['nama'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
    if ($nama === '')  $galat[] = 'Nama wajib diisi';
    if (!$email)       $galat[] = 'Email tidak valid';
    if (!$galat) { /* simpan ke database dengan prepared statement */ }
}
?>
<form method="post">
  <input type="hidden" name="token" value="<?= $_SESSION['token'] ?>">
  <input name="nama" value="<?= htmlspecialchars($nama ?? '') ?>">
  <input name="email" type="email">
  <button>Kirim</button>
</form>`,
    ["Token CSRF disimpan di session dan dicocokkan saat POST.", "trim dan filter_var memvalidasi input.", "htmlspecialchars saat menampilkan kembali input mencegah XSS.", "Data disimpan hanya bila tidak ada galat."],
    ["Menampilkan $_POST mentah ke halaman (XSS).", "Memasukkan input ke SQL dengan penggabungan teks (SQL injection).", "session_start dipanggil setelah ada output HTML."],
    ["Tampilkan daftar galat di atas form dengan aman.", "Simpan nama ke cookie 'nama' selama 7 hari.", "Redirect ke terima-kasih.php setelah sukses (pola PRG)."],
R`<?php foreach ($galat as $g): ?>
  <p class="galat"><?= htmlspecialchars($g) ?></p>
<?php endforeach; ?>

setcookie('nama', $nama, ['expires' => time() + 7 * 86400, 'httponly' => true, 'samesite' => 'Lax']);

header('Location: terima-kasih.php');
exit;`,
    [["Beda $_GET dan $_POST?", "$_GET dari URL (query string); $_POST dari badan form method post."], ["Kenapa password disimpan dengan password_hash?", "Hash satu arah dengan salt; bila database bocor password asli tidak terbaca. Cek dengan password_verify."], ["Apa itu pola PRG?", "Post-Redirect-Get: setelah POST sukses, redirect agar refresh tidak mengirim ulang form."], ["Fungsi httponly pada cookie?", "Cookie tidak bisa dibaca JavaScript, mengurangi dampak XSS."]]);

  P("oopdb", "class repository produk dengan PDO",
R`<?php
class ProdukRepo {
    public function __construct(private PDO $db) {}

    public function cari(string $kata): array {
        $st = $this->db->prepare("SELECT id, nama, harga FROM produk WHERE nama LIKE ? ORDER BY nama");
        $st->execute(["%$kata%"]);
        return $st->fetchAll(PDO::FETCH_ASSOC);
    }

    public function tambah(string $nama, int $harga): int {
        $st = $this->db->prepare("INSERT INTO produk (nama, harga) VALUES (:n, :h)");
        $st->execute([':n' => $nama, ':h' => $harga]);
        return (int) $this->db->lastInsertId();
    }
}

$db = new PDO('mysql:host=localhost;dbname=toko;charset=utf8mb4', 'user', 'rahasia',
              [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
$repo = new ProdukRepo($db);
print_r($repo->cari('kopi'));`,
    ["Constructor promotion (private PDO $db) membuat properti sekaligus.", "prepare + execute memisahkan data dari perintah SQL (aman dari injection).", "ERRMODE_EXCEPTION membuat error database dilempar sebagai exception.", "Repository mengumpulkan semua query produk di satu tempat."],
    ["Menulis \"... WHERE nama = '$nama'\" langsung.", "Menyimpan password database di file yang ikut ter-commit.", "Tidak memakai transaksi untuk beberapa perubahan yang harus sukses bersama."],
    ["Tambah method ubahHarga(int $id, int $harga).", "Bungkus pemindahan stok dua gudang dalam transaksi.", "Tulis route Laravel yang mengembalikan produk sebagai JSON."],
R`public function ubahHarga(int $id, int $harga): bool {
    $st = $this->db->prepare("UPDATE produk SET harga = ? WHERE id = ?");
    return $st->execute([$harga, $id]);
}

$db->beginTransaction();
try {
    $db->prepare("UPDATE stok SET qty = qty - ? WHERE gudang = 'A' AND produk_id = ?")->execute([5, 1]);
    $db->prepare("UPDATE stok SET qty = qty + ? WHERE gudang = 'B' AND produk_id = ?")->execute([5, 1]);
    $db->commit();
} catch (Throwable $e) { $db->rollBack(); throw $e; }

// routes/api.php (Laravel)
Route::get('/produk', fn() => Produk::orderBy('nama')->get());`,
    [["Apa itu MVC?", "Model (data), View (tampilan), Controller (penghubung permintaan dan logika)."], ["Fungsi Eloquent di Laravel?", "ORM: setiap tabel diwakili class Model sehingga query ditulis seperti Produk::where(...)->get()."], ["Kenapa memakai interface di PHP?", "Menentukan kontrak method sehingga implementasi bisa diganti, misalnya repo database dan repo uji."], ["Apa itu migration di Laravel?", "File PHP yang mendefinisikan perubahan struktur tabel dan bisa dijalankan atau dibatalkan."]]);

  P("stringtgl", "membersihkan teks dan menghitung umur faktur",
R`<?php
$hp = "+62 812-3456-7890";
$angka = preg_replace('/\D/', '', $hp);            // 6281234567890
if (str_starts_with($angka, '62')) $angka = '0' . substr($angka, 2);

$slug = strtolower(trim(preg_replace('/[^A-Za-z0-9]+/', '-', "Kopi Susu Gula Aren!"), '-'));
// kopi-susu-gula-aren

$faktur = new DateTime('2026-10-15');
$hariIni = new DateTime('2026-11-28');
$umur = $faktur->diff($hariIni)->days;              // 44
$tempo = (clone $faktur)->modify('+30 days')->format('d-m-Y');   // 14-11-2026
echo $umur > 30 ? "Terlambat $umur hari" : "Aman";`,
    ["\\D berarti 'bukan digit'; preg_replace menghapus semuanya.", "str_starts_with lebih jelas daripada substr untuk cek awalan.", "Slug: ganti selain huruf-angka dengan '-', rapikan ujungnya.", "DateTime::diff memberi selisih hari; clone agar tanggal asli tidak berubah."],
    ["modify mengubah objek asli (pakai DateTimeImmutable atau clone).", "strlen menghitung byte, bukan huruf, untuk teks beraksen (pakai mb_strlen).", "Regex tanpa pembatas / di awal dan akhir."],
    ["Validasi kode pos 5 digit.", "Ambil semua angka dari teks 'Invoice 12 dan 45'.", "Tampilkan tanggal hari ini format Y-m-d."],
R`$sah = preg_match('/^\d{5}$/', $kodepos) === 1;

preg_match_all('/\d+/', 'Invoice 12 dan 45', $m);    // $m[0] = ['12', '45']

echo date('Y-m-d');`,
    [["Beda str_contains dan strpos?", "str_contains mengembalikan true/false; strpos mengembalikan posisi atau false (hati-hati posisi 0)."], ["Fungsi sprintf?", "Menyusun teks dengan format, misalnya sprintf('%05d', 42) → 00042."], ["Kenapa memakai DateTimeImmutable?", "Setiap perubahan menghasilkan objek baru sehingga tanggal asal aman."], ["Apa arti ^ dan $ di regex?", "Awal dan akhir teks."]]);

  P("modern", "endpoint API JSON dengan exception dan Composer",
R`<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';

final class ProdukTidakAda extends RuntimeException {}

function ambilProduk(PDO $db, int $id): array {
    $st = $db->prepare('SELECT id, nama, harga FROM produk WHERE id = ?');
    $st->execute([$id]);
    return $st->fetch(PDO::FETCH_ASSOC) ?: throw new ProdukTidakAda("Produk $id tidak ada");
}

header('Content-Type: application/json');
try {
    $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT) ?: throw new InvalidArgumentException('id wajib angka');
    echo json_encode(ambilProduk($db, $id), JSON_UNESCAPED_UNICODE);
} catch (ProdukTidakAda $e) {
    http_response_code(404);
    echo json_encode(['galat' => $e->getMessage()]);
} catch (InvalidArgumentException $e) {
    http_response_code(400);
    echo json_encode(['galat' => $e->getMessage()]);
}`,
    ["strict_types menolak tipe salah.", "vendor/autoload.php dari Composer memuat library otomatis.", "throw sebagai ekspresi (PHP 8) membuat pengecekan singkat.", "Exception berbeda dipetakan ke kode HTTP berbeda (404, 400)."],
    ["Mengirim pesan error database mentah ke pengguna.", "Lupa header Content-Type sehingga klien membaca sebagai HTML.", "json_encode gagal diam-diam pada teks non-UTF-8 (pakai JSON_THROW_ON_ERROR)."],
    ["Baca badan permintaan JSON dari POST.", "Buat enum StatusPesanan dengan label.", "Tambahkan readonly property di class Produk."],
R`$data = json_decode(file_get_contents('php://input'), true, flags: JSON_THROW_ON_ERROR);

enum StatusPesanan: string {
    case Baru = 'baru';
    case Dikirim = 'dikirim';
    public function label(): string {
        return match ($this) { self::Baru => 'Menunggu', self::Dikirim => 'Dalam perjalanan' };
    }
}

final class Produk {
    public function __construct(public readonly int $id, public readonly string $nama) {}
}`,
    [["Fungsi composer.json?", "Mencatat library yang dipakai proyek dan aturan autoload; composer install memasangnya."], ["Beda Exception dan Error di PHP 8?", "Keduanya Throwable. Error untuk kesalahan mesin (misalnya TypeError), Exception untuk kondisi yang bisa ditangani aplikasi."], ["Apa itu named arguments?", "Memanggil fungsi dengan nama parameter: json_decode($s, flags: JSON_THROW_ON_ERROR)."], ["Kenapa vendor/ tidak di-commit?", "Bisa dibangun ulang dari composer.lock; ukurannya besar."]]);

  /* ======================= Git (4 bab) ======================= */
  const G = bab(MATERI_GIT);
  G("dasar", "membuat repository portofolio dari nol",
R`git init portofolio
cd portofolio
git config user.name "Nama Anda"
git config user.email "email@contoh.com"

echo "# Portofolio" > README.md
git status                 # README.md: untracked
git add README.md          # masuk staging
git commit -m "Tambah README awal"
git log --oneline          # a1b2c3d Tambah README awal

echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Abaikan folder dependensi dan file rahasia"`,
    ["git init membuat folder .git berisi riwayat.", "Tiga area: working directory → staging (add) → repository (commit).", "Pesan commit menjelaskan apa yang berubah, dalam kalimat perintah singkat.", ".gitignore mencegah file rahasia dan folder besar ikut masuk."],
    ["git add . lalu ikut memasukkan .env berisi kunci API.", "Pesan commit 'update' atau 'fix' tanpa keterangan.", "Membuat repo di dalam repo lain tanpa sengaja."],
    ["Lihat perubahan yang belum di-stage dan yang sudah di-stage.", "Batalkan stage satu file tanpa menghapus perubahannya.", "Lihat siapa mengubah setiap baris README."],
R`git diff            # belum di-stage
git diff --staged   # sudah di-stage

git restore --staged README.md

git blame README.md`,
    [["Apa isi satu commit?", "Potret seluruh file yang dilacak saat itu, pesan, penulis, waktu, dan penunjuk ke commit induk."], ["Beda untracked dan modified?", "Untracked belum pernah dilacak Git; modified sudah dilacak dan berubah sejak commit terakhir."], ["File sudah ter-commit lalu ditambahkan ke .gitignore. Apakah hilang dari repo?", "Tidak. Hapus dari pelacakan dengan git rm --cached nama_file lalu commit."], ["Kenapa commit kecil lebih baik?", "Mudah dibaca, ditinjau, dan dibatalkan bila ada masalah."]],
    tabel("Perintah harian", [["Perintah", "Gunanya"], ["git status", "lihat keadaan"], ["git add &lt;file&gt;", "masukkan ke staging"], ["git commit -m", "simpan potret"], ["git log --oneline", "riwayat singkat"], ["git diff", "lihat perubahan"]]));

  G("cabang", "fitur baru di branch dan menyelesaikan konflik",
R`git switch -c fitur/kontak        # buat dan pindah ke branch baru
# ... ubah index.html, commit ...
git switch main
git merge fitur/kontak

# Bila konflik:
# <<<<<<< HEAD
# <h1>Portofolio Jauza</h1>
# =======
# <h1>Portofolio Data & ERP</h1>
# >>>>>>> fitur/kontak

# 1. buka file, pilih/gabungkan isi, hapus penanda <<<<<<< ======= >>>>>>>
# 2. git add index.html
# 3. git commit          (menyelesaikan merge)
git branch -d fitur/kontak`,
    ["Branch adalah garis kerja terpisah; main tetap stabil.", "Konflik terjadi bila dua branch mengubah baris yang sama.", "Bagian HEAD = isi branch saat ini; bagian bawah = isi branch yang digabung.", "Setelah diselesaikan, add dan commit."],
    ["Commit file yang masih berisi penanda konflik.", "Bekerja lama di branch tanpa mengambil perubahan main sehingga konflik menumpuk.", "Menghapus branch yang belum di-merge dengan -D."],
    ["Batalkan merge yang sedang konflik.", "Lihat grafik branch di terminal.", "Ambil perubahan terbaru main ke branch fitur sebelum merge."],
R`git merge --abort

git log --oneline --graph --all

git switch fitur/kontak
git merge main        # atau: git rebase main`,
    [["Apa itu fast-forward merge?", "Main tidak punya commit baru sejak branch dibuat, jadi penunjuk main cukup digeser ke ujung branch tanpa commit merge."], ["Beda merge dan rebase?", "merge membuat commit penggabung; rebase memindahkan commit branch ke atas ujung main sehingga riwayat lurus."], ["Kapan tidak boleh rebase?", "Pada branch yang sudah dipakai orang lain, karena riwayatnya ditulis ulang."], ["Nama branch yang baik?", "Jelas tujuannya: fitur/kontak, perbaikan/login-gagal."]]);

  G("remote", "kolaborasi lewat GitHub dan pull request",
R`git remote add origin https://github.com/nama/portofolio.git
git push -u origin main

git switch -c fitur/dark-mode
# ... commit ...
git push -u origin fitur/dark-mode
# buka GitHub → Compare & pull request → tulis ringkasan → minta review

# rekan meminta perubahan:
# ... perbaiki, commit ...
git push                     # PR otomatis diperbarui

# setelah PR di-merge di GitHub:
git switch main
git pull
git branch -d fitur/dark-mode`,
    ["origin adalah nama remote utama.", "-u menyambungkan branch lokal dengan branch remote sehingga cukup git push.", "Pull request = permintaan agar perubahan ditinjau dan digabung.", "Setelah merge, tarik main terbaru dan hapus branch lokal."],
    ["Push langsung ke main di proyek tim.", "PR besar berisi banyak hal tidak terkait sehingga sulit ditinjau.", "git pull saat ada perubahan lokal belum di-commit → konflik membingungkan."],
    ["Lihat daftar remote dan alamatnya.", "Ambil perubahan remote tanpa menggabung.", "Salin repo orang lain ke komputer."],
R`git remote -v

git fetch origin
git log main..origin/main --oneline    # lihat commit yang belum ada di lokal

git clone https://github.com/nama/repo.git`,
    [["Beda fetch dan pull?", "fetch hanya mengunduh; pull = fetch + merge (atau rebase)."], ["Apa itu fork?", "Salinan repo milik orang lain di akun Anda, dipakai untuk mengusulkan perubahan lewat PR."], ["Isi deskripsi PR yang baik?", "Apa yang berubah, kenapa, cara menguji, dan tangkapan layar bila ada perubahan tampilan."], ["Kenapa push ditolak (rejected)?", "Remote punya commit yang belum ada di lokal; pull dulu, selesaikan konflik, lalu push."]]);

  G("rapi", "membatalkan kesalahan dengan aman",
R`# salah ketik pesan commit terakhir (belum di-push)
git commit --amend -m "Tambah halaman kontak"

# lupa memasukkan satu file ke commit terakhir
git add kontak.css
git commit --amend --no-edit

# membuang perubahan file yang belum di-commit
git restore index.html

# membatalkan commit yang SUDAH di-push (aman untuk tim)
git revert a1b2c3d

# menyimpan pekerjaan setengah jadi sementara
git stash
git switch main      # perbaiki hal mendesak
git switch -
git stash pop`,
    ["amend hanya untuk commit yang belum dibagikan.", "restore membuang perubahan lokal (tidak bisa dikembalikan).", "revert membuat commit baru yang membalik perubahan, riwayat tetap utuh.", "stash menyimpan perubahan sementara agar bisa pindah branch."],
    ["git reset --hard tanpa sadar menghapus pekerjaan yang belum di-commit.", "Force push ke main bersama.", "Commit file rahasia lalu hanya menghapusnya di commit berikutnya (masih ada di riwayat)."],
    ["Mundurkan commit terakhir tapi pertahankan perubahannya di file.", "Temukan commit yang hilang setelah reset.", "Beri tag versi v1.0 lalu kirim ke remote."],
R`git reset --soft HEAD~1      # perubahan kembali ke staging

git reflog                   # cari hash sebelum reset
git reset --hard <hash>

git tag v1.0
git push origin v1.0`,
    [["Beda reset --soft, --mixed, --hard?", "soft: perubahan tetap di staging; mixed (bawaan): perubahan di working directory; hard: perubahan dibuang."], ["Kunci API terlanjur di-push. Langkah pertama?", "Cabut/ganti kunci itu di layanan penyedia, baru bersihkan riwayat."], ["Apa itu reflog?", "Catatan lokal setiap pergerakan HEAD, penyelamat setelah reset atau rebase keliru."], ["Kapan memakai tag?", "Menandai rilis atau versi penting, misalnya v1.0."]]);

  /* ======================= BI (4 bab) ======================= */
  const B = (k, judul, isi, qa) => tambah(MATERI_BI, k, "Studi kasus terpandu &amp; kunci", `<h4>Kasus: ${judul}</h4>` + isi + cekH(qa));
  B("bidasar", "dashboard penjualan untuk manajer toko",
    `<p>Manajer hanya punya waktu 1 menit tiap pagi. Pertanyaan utamanya: apakah penjualan sesuai target, produk mana yang turun, cabang mana yang butuh perhatian.</p>` +
    `<ol><li><b>Tentukan keputusan dulu</b>: menambah stok, memberi promo, atau menegur cabang.</li><li><b>Pilih KPI</b>: omzet vs target, margin kotor, jumlah transaksi, nilai rata-rata transaksi.</li><li><b>Dimensi</b>: tanggal, cabang, kategori produk. <b>Metrik</b>: omzet, qty, margin.</li><li><b>Tata letak</b>: kartu KPI di atas (dengan perbandingan bulan lalu), tren harian di tengah, tabel cabang di bawah.</li><li><b>Filter</b>: periode dan cabang saja; jangan sepuluh filter.</li></ol>` +
    tabel("Contoh kartu KPI", [["KPI", "Nilai", "vs bulan lalu", "Status"], ["Omzet", "Rp 1,2 M", "+8%", "di atas target"], ["Margin kotor", "32%", "−2 poin", "perlu dicek"], ["Transaksi", "15.400", "+5%", "baik"], ["Rata-rata transaksi", "Rp 78 rb", "+3%", "baik"]]),
    [["Beda dimensi dan metrik?", "Dimensi adalah cara mengelompokkan (kota, bulan); metrik adalah angka yang dihitung (omzet, jumlah)."], ["Kenapa KPI perlu pembanding?", "Angka tunggal tidak menunjukkan baik atau buruk; target atau periode lalu memberi konteks."], ["Berapa KPI ideal di satu halaman?", "Sekitar 3–6 yang terkait langsung dengan keputusan."], ["Apa itu leading dan lagging indicator?", "Lagging menunjukkan hasil (omzet); leading memberi tanda lebih awal (jumlah pengunjung, penawaran terkirim)."]]);
  B("visual", "memperbaiki grafik yang menyesatkan",
    `<p>Laporan lama memakai pie chart 12 kategori, grafik batang dengan sumbu mulai dari 90, dan grafik 3D. Tugas Anda menggantinya dengan visual yang jujur.</p>` +
    `<ol><li>Pie 12 kategori → <b>batang horizontal</b> diurutkan dari terbesar, 5 teratas + 'Lainnya'.</li><li>Sumbu batang dimulai dari <b>0</b>; batang yang terpotong membesar-besarkan selisih.</li><li>3D → 2D datar; efek 3D mendistorsi ukuran.</li><li>Tren bulanan → <b>garis</b>; tambahkan garis target putus-putus.</li><li>Warna: satu warna netral, satu warna sorot untuk hal yang ingin ditekankan.</li></ol>` +
    tabel("Pertanyaan → grafik", [["Pertanyaan", "Grafik"], ["perubahan dari waktu ke waktu", "garis"], ["membandingkan kategori", "batang (urutkan)"], ["komposisi 2–4 bagian", "batang bertumpuk / donut"], ["hubungan dua angka", "scatter"], ["sebaran nilai", "histogram / box plot"], ["angka tunggal penting", "kartu KPI"]]),
    [["Kapan sumbu garis boleh tidak mulai dari 0?", "Pada grafik garis yang menunjukkan perubahan kecil, asalkan sumbu diberi label jelas; untuk batang tetap dari 0."], ["Kenapa batang diurutkan?", "Mata langsung menemukan terbesar dan terkecil tanpa membaca semua label."], ["Apa itu data-ink ratio?", "Porsi tinta yang benar-benar menyampaikan data; buang garis kisi tebal, bayangan, dan hiasan."], ["Bagaimana membantu pembaca buta warna?", "Hindari merah-hijau saja, beri label langsung, pakai perbedaan terang-gelap."]]);
  B("model", "membangun star schema dari data penjualan",
    `<p>Data mentah adalah satu tabel besar berisi tanggal, nama pelanggan, kota, produk, kategori, harga, dan qty yang berulang di jutaan baris.</p>` +
    `<ol><li>Pisahkan <b>fakta</b>: Fakta_Penjualan (id_tanggal, id_pelanggan, id_produk, qty, omzet).</li><li>Buat <b>dimensi</b>: Dim_Tanggal (tanggal, bulan, kuartal, tahun), Dim_Pelanggan (nama, kota, segmen), Dim_Produk (nama, kategori, merek).</li><li>Relasi satu-ke-banyak dari dimensi ke fakta, arah filter tunggal.</li><li>Di Power Query: hapus duplikat, ubah tipe data, rapikan teks, isi nilai kosong.</li><li>Tandai Dim_Tanggal sebagai tabel tanggal agar fungsi waktu bekerja.</li></ol>` +
    `<pre><code>${esc("Fakta_Penjualan  N ──── 1  Dim_Produk\n        │ N\n        └──── 1  Dim_Pelanggan\n        │ N\n        └──── 1  Dim_Tanggal")}</code></pre>`,
    [["Kenapa tidak satu tabel besar saja?", "Data berulang membuat ukuran besar dan rawan beda ejaan; star schema lebih cepat dan konsisten."], ["Apa isi tabel fakta?", "Kunci ke dimensi dan angka yang dijumlah (qty, omzet)."], ["Apa itu granularity?", "Tingkat detail satu baris fakta, misalnya satu baris per item per transaksi."], ["Kenapa butuh tabel tanggal sendiri?", "Agar ada setiap hari (termasuk hari tanpa penjualan) dan kolom bulan/kuartal konsisten untuk time intelligence."]]);
  B("dax", "ukuran DAX untuk laporan bulanan",
    `<p>Manajer minta: total omzet, omzet bulan lalu, pertumbuhan, dan kontribusi kategori.</p>` +
    `<pre><code>${esc(`Omzet = SUM(Fakta_Penjualan[omzet])
Omzet Bulan Lalu = CALCULATE([Omzet], DATEADD(Dim_Tanggal[tanggal], -1, MONTH))
Pertumbuhan % = DIVIDE([Omzet] - [Omzet Bulan Lalu], [Omzet Bulan Lalu])
Kontribusi % = DIVIDE([Omzet], CALCULATE([Omzet], ALL(Dim_Produk[kategori])))
Omzet YTD = TOTALYTD([Omzet], Dim_Tanggal[tanggal])`)}</code></pre>` +
    `<ol><li>Measure dihitung sesuai filter visual (konteks filter), bukan per baris.</li><li>CALCULATE mengubah konteks filter; DATEADD menggeser periode.</li><li>DIVIDE aman dari pembagian nol.</li><li>ALL melepas filter kategori sehingga pembagi menjadi total semua kategori.</li><li>Di Looker Studio, padanannya calculated field seperti SUM(omzet) dan perbandingan periode bawaan.</li></ol>`,
    [["Beda calculated column dan measure?", "Column dihitung per baris dan disimpan; measure dihitung saat ditampilkan sesuai filter."], ["Kenapa pakai DIVIDE, bukan /?", "DIVIDE mengembalikan kosong atau nilai cadangan saat pembagi nol."], ["Apa fungsi ALL?", "Mengabaikan filter pada tabel/kolom tertentu."], ["Kenapa DATEADD butuh tabel tanggal yang lengkap?", "Fungsi waktu bergantung pada deret tanggal tanpa celah."]]);

  /* ======================= Statistik (4 bab) ======================= */
  const S = (k, judul, isi, qa) => tambah(MATERI_STAT, k, "Studi kasus terpandu &amp; kunci", `<h4>Kasus: ${judul}</h4>` + isi + cekH(qa));
  S("deskriptif", "gaji 7 karyawan dan satu direktur",
    `<p>Gaji (juta): 5, 5, 6, 6, 7, 7, 8, dan direktur 60.</p>` +
    `<ol><li>Rata-rata = 104 / 8 = <b>13</b> juta, padahal 7 dari 8 orang bergaji ≤ 8 juta.</li><li>Median: urutkan, ambil tengah (6 dan 7) → <b>6,5</b> juta, lebih mewakili.</li><li>Modus: 5, 6, 7 (masing-masing dua kali).</li><li>Rentang = 60 − 5 = 55; IQR (Q3 − Q1) jauh lebih kecil dan tidak terpengaruh direktur.</li><li>Laporkan median + IQR untuk data miring; rata-rata + simpangan baku untuk data simetris.</li></ol>` +
    `<pre><code>${esc(`import statistics as st
gaji = [5, 5, 6, 6, 7, 7, 8, 60]
st.mean(gaji), st.median(gaji), st.multimode(gaji), st.stdev(gaji)
# (13, 6.5, [5, 6, 7], 19.44...)`)}</code></pre>`,
    [["Kapan median lebih baik dari rata-rata?", "Saat ada outlier atau data miring, seperti gaji dan harga rumah."], ["Apa arti simpangan baku besar?", "Data menyebar jauh dari rata-rata."], ["Bagaimana mendeteksi outlier dengan IQR?", "Nilai di bawah Q1 − 1,5×IQR atau di atas Q3 + 1,5×IQR."], ["Data 2, 4, 4, 4, 5, 5, 7, 9: rata-rata?", "40 / 8 = 5."]]);
  S("metrik", "menghitung metrik e-commerce satu bulan",
    `<p>Pengunjung 20.000, pesanan 500, omzet Rp 150 jt, biaya iklan Rp 25 jt, pelanggan baru 300, pelanggan awal bulan 1.000 dan 80 berhenti.</p>` +
    tabel("Hitungan", [["Metrik", "Rumus", "Hasil"], ["Conversion rate", "500 / 20.000", "2,5%"], ["AOV", "150 jt / 500", "Rp 300.000"], ["CAC", "25 jt / 300", "Rp 83.333"], ["ROAS", "150 jt / 25 jt", "6×"], ["Churn", "80 / 1.000", "8%"], ["Retensi", "1 − churn", "92%"]]) +
    `<p>Bila margin kotor 30% dan pelanggan rata-rata membeli 4 kali setahun, CLV kasar = 300.000 × 30% × 4 = Rp 360.000 per tahun, sehingga CLV : CAC ≈ 4,3 : 1 (sehat bila di atas 3).</p>`,
    [["Conversion naik dari 2% ke 2,5%, pengunjung tetap 20.000. Tambahan pesanan?", "100 pesanan (400 → 500)."], ["Kenapa ROAS tinggi belum tentu untung?", "ROAS memakai omzet, bukan laba; margin tipis bisa membuat iklan tetap rugi."], ["Apa itu cohort retention?", "Persentase pelanggan dari bulan daftar yang sama yang masih aktif di bulan-bulan berikutnya."], ["Rumus pertumbuhan MoM?", "(bulan ini − bulan lalu) / bulan lalu."]]);
  S("kritis", "A/B test tombol checkout",
    `<p>Versi A: 5.000 pengunjung, 200 beli (4,0%). Versi B: 5.000 pengunjung, 240 beli (4,8%).</p>` +
    `<ol><li>Hipotesis nol: tidak ada beda konversi. Tentukan α = 0,05 sebelum melihat hasil.</li><li>Hitung uji dua proporsi; z ≈ 1,95 dan p-value ≈ 0,051 — sedikit di atas 0,05, jadi belum signifikan walau terlihat naik.</li><li>Cek ukuran efek: naik 0,8 poin (20% relatif) — apakah berarti secara bisnis?</li><li>Jangan berhenti lebih awal saat hasil terlihat bagus (peeking); lanjutkan sampai ukuran sampel yang direncanakan.</li><li>Pastikan pembagian acak dan periode sama (tidak satu versi saat gajian).</li></ol>` +
    `<pre><code>${esc(`from statsmodels.stats.proportion import proportions_ztest
z, p = proportions_ztest([240, 200], [5000, 5000])
print(round(z, 2), round(p, 3))   # 1.95 0.051`)}</code></pre>`,
    [["Es krim dan kasus tenggelam naik bersamaan. Kesimpulan?", "Korelasi, bukan sebab-akibat; keduanya dipicu cuaca panas (variabel pengganggu)."], ["Apa itu survivorship bias?", "Hanya melihat yang 'bertahan', misalnya meniru startup sukses tanpa melihat yang gagal dengan cara sama."], ["Arti p-value 0,03?", "Bila sebenarnya tidak ada beda, peluang melihat hasil sejauh ini atau lebih ekstrem sekitar 3%."], ["Kenapa sampel kecil berbahaya?", "Hasil sangat dipengaruhi kebetulan; selisih besar bisa muncul tanpa efek nyata."]]);
  S("segmentasi", "segmentasi RFM 6 pelanggan",
    `<p>Skor 1–3 untuk Recency (hari sejak beli terakhir, makin kecil makin baik), Frequency (jumlah transaksi), Monetary (total belanja).</p>` +
    tabel("Hasil skor", [["Pelanggan", "R (hari)", "F", "M (rb)", "Skor RFM", "Segmen"], ["Ani", "3", "12", "4.500", "3-3-3", "Juara"], ["Budi", "40", "8", "2.100", "2-3-2", "Setia"], ["Citra", "5", "1", "150", "3-1-1", "Baru"], ["Dodi", "120", "6", "1.800", "1-2-2", "Berisiko pergi"], ["Eka", "200", "1", "90", "1-1-1", "Hilang"], ["Fajar", "15", "3", "600", "3-2-1", "Potensial"]]) +
    `<ol><li>Juara: beri akses awal produk baru, minta ulasan.</li><li>Berisiko pergi: kirim penawaran 'kami rindu Anda'.</li><li>Baru: edukasi produk dan voucher pembelian kedua.</li><li>Untuk K-Means, standarkan R, F, M dulu (z-score) agar Monetary yang besar tidak mendominasi; pilih k dengan elbow dan silhouette.</li></ol>`,
    [["Kenapa data perlu distandarkan sebelum K-Means?", "K-Means memakai jarak; fitur berskala besar akan mendominasi tanpa standarisasi."], ["Arti silhouette mendekati 1?", "Titik sangat cocok dengan klasternya dan jauh dari klaster lain."], ["Apa kelemahan K-Means?", "Harus menentukan k, peka outlier, dan menganggap klaster berbentuk bulat."], ["Bagaimana menjelaskan klaster ke tim pemasaran?", "Beri nama dan profil (rata-rata R, F, M), lalu satu tindakan untuk tiap segmen."]]);

  /* ======================= Karier (5 bab) ======================= */
  const K = (k, isi, qa) => tambah(MATERI_KARIER, k, "Contoh &amp; latihan", isi + cekH(qa));
  K("portofolio", `<h4>Contoh: skripsi menjadi studi kasus</h4><ol><li><b>Masalah</b>: toko online sulit menentukan promosi untuk 2.000 pelanggan.</li><li><b>Data</b>: transaksi 12 bulan, dibersihkan dengan Python.</li><li><b>Metode</b>: RFM + K-Means (k = 4, silhouette 0,52).</li><li><b>Hasil</b>: 4 segmen dengan rekomendasi; segmen 'berisiko pergi' 18% pelanggan.</li><li><b>Tautan</b>: notebook, dashboard, dan ringkasan satu halaman.</li></ol>`,
    [["Bagian apa yang paling dibaca perekrut?", "Masalah dan hasil di bagian atas; buat ringkas dan berangka."], ["Perlu mencantumkan kode?", "Ya, tautkan repositori yang rapi dengan README, tapi ringkasan tetap bisa dipahami tanpa membuka kode."]]);
  K("cv", `<h4>Ubah tugas menjadi dampak</h4><table class="mini-pivot"><tr><th>Sebelum</th><th>Sesudah</th></tr><tr><td>Membuat laporan penjualan</td><td>Menyusun dashboard penjualan mingguan yang memangkas waktu rekap dari 4 jam menjadi 30 menit</td></tr><tr><td>Membantu input data Odoo</td><td>Memigrasikan 1.200 data produk ke Odoo dengan template import dan validasi sebelum go-live</td></tr></table>`,
    [["Rumus kalimat pencapaian?", "Kata kerja + apa yang dikerjakan + hasil terukur (angka, waktu, persen)."], ["Berapa halaman CV fresh graduate?", "Satu halaman."]]);
  K("lowongan", `<h4>Latihan membaca lowongan</h4><p>Iklan: \"Data Analyst — SQL, Excel/Power BI, komunikasi, pengalaman dashboard\". Tandai kata kunci wajib (SQL, Power BI, dashboard), cocokkan dengan bukti di CV (proyek dashboard, sertifikat), dan tulis ulang ringkasan CV memakai istilah yang sama.</p>`,
    [["Kalau hanya memenuhi 70% syarat?", "Tetap melamar; tonjolkan bukti untuk syarat utama."], ["Kenapa CV disesuaikan per lowongan?", "Sistem ATS dan perekrut mencari kata kunci yang sama dengan iklan."]]);
  K("wawancara", `<h4>Contoh jawaban STAR</h4><p><b>S</b>: data penjualan dari 3 cabang tidak cocok. <b>T</b>: saya diminta menyatukan laporan sebelum rapat bulanan. <b>A</b>: membuat kunci produk standar, membersihkan duplikat dengan Python, dan memvalidasi total per cabang. <b>R</b>: laporan selesai 2 hari lebih cepat dan selisih data turun dari 6% menjadi di bawah 1%.</p>`,
    [["Berapa lama jawaban STAR ideal?", "Sekitar 1–2 menit; bagian Action paling panjang."], ["Pertanyaan apa yang sebaiknya diajukan ke pewawancara?", "Ukuran keberhasilan 90 hari pertama, alat yang dipakai tim, dan tantangan terbesar posisi itu."]]);
  K("melamar", `<h4>Target mingguan yang terukur</h4><ol><li>10 lamaran yang disesuaikan.</li><li>3 pesan ke alumni atau perekrut di LinkedIn.</li><li>1 unggahan proyek atau pembelajaran.</li><li>Catat di spreadsheet: tanggal, posisi, status, tindak lanjut.</li></ol>`,
    [["Apa isi headline LinkedIn yang baik?", "Peran yang dituju + keahlian utama, misalnya 'Data Analyst | SQL · Python · Power BI · Odoo'."], ["Kapan menindaklanjuti lamaran?", "Sekitar 7–10 hari kerja setelah melamar bila belum ada kabar."]]);
})();
