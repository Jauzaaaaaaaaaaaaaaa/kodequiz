// ============ Materi 2x lipat (bagian 2): JavaScript — "Latihan terpandu & kunci" per bab ============
// Dimuat PALING AKHIR. Contoh kode memakai penyambungan +, bukan template literal, supaya file ini aman. Kode di-escape otomatis.
(function () {
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const tambah = (k, h) => { const b = MATERI_JS.find(m => m.k === k); if (!b) throw new Error("bab tidak ada: " + k); b.materi += '<h4 class="pelengkap">Latihan terpandu &amp; kunci</h4>' + h; };
  // judul, kode, langkah[], kesalahan[], latihan[], kunci
  const J = (k, judul, kode, langkah, salah, latihan, kunci) => tambah(k,
    `<h4>Contoh terpandu: ${judul}</h4><pre><code>${esc(kode)}</code></pre><ol>${langkah.map(x => `<li>${x}</li>`).join("")}</ol>` +
    `<h4>Kesalahan yang sering terjadi</h4><ul>${salah.map(x => `<li>${x}</li>`).join("")}</ul>` +
    `<h4>Latihan mandiri</h4><ol>${latihan.map(x => `<li>${x}</li>`).join("")}</ol>` +
    `<details class="kunci-latihan"><summary>Lihat kunci jawaban (coba dulu sendiri)</summary><pre><code>${esc(kunci)}</code></pre></details>`);

  J("dasar", "kasir sederhana di console",
`const harga = 18500;              // angka, tanpa kutip
const qty = 2;
let total = harga * qty;           // let karena akan berubah
total = total - 2000;              // potongan
console.log("Total bayar: " + total);   // Total bayar: 35000
console.log(typeof total);              // number`,
    ["<code>const</code> untuk nilai yang tidak berubah, <code>let</code> untuk total yang diubah.", "Operator <code>*</code> dan <code>-</code> bekerja pada angka.", "<code>+</code> dengan teks menyambung, jadi angka di akhir ikut menjadi teks di dalam kalimat."],
    ["Memakai <code>var</code>: lingkupnya membingungkan, pakai let/const.", "Menulis angka dalam kutip (<code>\"18500\"</code>) lalu menjumlahkannya: hasilnya disambung.", "Mengubah <code>const</code>: TypeError."],
    ["Buat variabel nama dan umur, lalu cetak \"Rina berumur 21 tahun\".", "Ubah teks \"25\" menjadi angka lalu tambah 5.", "Cetak tipe dari null, undefined, [], dan {}."],
`const nama = "Rina", umur = 21;
console.log(nama + " berumur " + umur + " tahun");
console.log(Number("25") + 5);                  // 30
console.log(typeof null, typeof undefined, typeof [], typeof {});   // object undefined object object`);

  J("operator", "menghitung diskon bertingkat dengan aman",
`const belanja = 250000;
const member = true;
const diskon = member && belanja >= 200000 ? 0.15 : 0.05;
const bayar = belanja - belanja * diskon;
console.log(bayar);                    // 212500
console.log(belanja === "250000");     // false: tipe berbeda`,
    ["<code>&&</code> butuh kedua syarat benar.", "Ternary memilih 15% atau 5%.", "<code>===</code> membandingkan nilai DAN tipe, jadi angka ≠ teks."],
    ["Memakai <code>==</code> lalu bingung kenapa <code>\"\" == 0</code> bernilai true.", "Lupa urutan: <code>a + b * c</code> mengalikan dulu.", "Memakai <code>||</code> untuk nilai yang boleh 0 (stok 0 tertimpa); pakai <code>??</code>."],
    ["Hitung sisa bagi 47 oleh 5 dan hasil bagi bulatnya (Math.floor).", "Beri nilai bawaan 10 pada variabel stok yang mungkin undefined, tanpa menimpa 0.", "Cek apakah tahun 2028 kabisat dengan satu ekspresi boolean."],
`console.log(47 % 5, Math.floor(47 / 5));   // 2 9
let stok;                          // undefined
const s = stok ?? 10;              // 10 (0 tetap 0)
const th = 2028;
console.log(th % 4 === 0 && (th % 100 !== 0 || th % 400 === 0));   // true`);

  J("kondisiloop", "mencari angka pertama yang memenuhi syarat",
`const harga = [12000, 8000, 30000, 5000];
let pertamaMahal = null;
for (const h of harga) {
  if (h > 20000) {
    pertamaMahal = h;
    break;                 // berhenti begitu ketemu
  }
}
console.log(pertamaMahal); // 30000`,
    ["<code>for...of</code> mengambil isi array satu per satu.", "<code>break</code> menghentikan loop setelah temuan pertama.", "Nilai awal <code>null</code> menandai 'belum ketemu'."],
    ["Lupa <code>break</code> di switch sehingga case berikutnya ikut jalan.", "Mengira array kosong <code>[]</code> falsy; cek <code>arr.length === 0</code>.", "Loop while yang syaratnya tidak pernah berubah."],
    ["Cetak tabel perkalian 3 (3×1 sampai 3×10).", "Hitung berapa angka genap di [3, 8, 10, 7, 4].", "Dengan switch, ubah angka 1–3 menjadi 'Senin', 'Selasa', 'Rabu', selain itu 'Lainnya'."],
`for (let i = 1; i <= 10; i++) console.log("3 x " + i + " = " + 3 * i);
let genap = 0;
for (const n of [3, 8, 10, 7, 4]) if (n % 2 === 0) genap++;
console.log(genap);   // 3
function hari(n) {
  switch (n) {
    case 1: return "Senin";
    case 2: return "Selasa";
    case 3: return "Rabu";
    default: return "Lainnya";
  }
}`);

  J("fungsi", "fungsi validasi email sederhana",
`function emailValid(email) {
  const e = email.trim();
  return e.includes("@") && e.indexOf("@") > 0 && e.endsWith(".com");
}
console.log(emailValid(" rina@mail.com "));   // true
console.log(emailValid("@mail.com"));          // false`,
    ["Rapikan input dulu (<code>trim</code>).", "Gabungkan beberapa syarat dengan <code>&&</code>.", "Fungsi mengembalikan boolean sehingga mudah dipakai di <code>if</code>."],
    ["Memakai arrow function dengan kurung kurawal tapi lupa <code>return</code>.", "Mencetak di dalam fungsi, padahal pemanggil butuh nilai return.", "Memanggil arrow function yang disimpan di const sebelum barisnya."],
    ["Buat arrow function <code>luasLingkaran(r)</code> (Math.PI).", "Buat fungsi <code>salam(nama = \"Tamu\")</code>.", "Buat fungsi <code>maks(...angka)</code> tanpa Math.max."],
`const luasLingkaran = r => Math.PI * r * r;
function salam(nama = "Tamu") { return "Halo " + nama; }
function maks(...angka) {
  let m = angka[0];
  for (const a of angka) if (a > m) m = a;
  return m;
}`);

  J("array", "laporan keranjang dengan filter, map, reduce",
`const keranjang = [
  { nama: "Kopi", harga: 18000, qty: 2 },
  { nama: "Teh", harga: 12000, qty: 0 },
  { nama: "Roti", harga: 9000, qty: 3 },
];
const dibeli = keranjang.filter(i => i.qty > 0);
const baris = dibeli.map(i => i.nama + " x" + i.qty);
const total = dibeli.reduce((s, i) => s + i.harga * i.qty, 0);
console.log(baris.join(", "), total);   // Kopi x2, Roti x3 63000`,
    ["filter membuang item qty 0.", "map membuat teks ringkas setiap item.", "reduce menjumlah subtotal mulai dari 0."],
    ["<code>sort()</code> tanpa pembanding pada angka (diurutkan sebagai teks).", "Lupa nilai awal reduce (array kosong jadi error).", "Mengira <code>b = a</code> menyalin array."],
    ["Urutkan keranjang dari subtotal terbesar.", "Cek apakah ada item dengan harga di atas 15.000 (some).", "Buat salinan keranjang dengan qty setiap item ditambah 1 tanpa mengubah aslinya."],
`const urut = [...keranjang].sort((a, b) => b.harga * b.qty - a.harga * a.qty);
console.log(keranjang.some(i => i.harga > 15000));   // true
const baru = keranjang.map(i => ({ ...i, qty: i.qty + 1 }));`);

  J("strobj", "merapikan data pelanggan dari form",
`const masuk = { nama: "  rina PUTRI ", email: "Rina@Mail.COM", kota: "" };
const rapi = {
  nama: masuk.nama.trim().toLowerCase().split(" ").filter(Boolean)
        .map(k => k[0].toUpperCase() + k.slice(1)).join(" "),
  email: masuk.email.toLowerCase(),
  kota: masuk.kota || "Belum diisi",
};
console.log(rapi);   // { nama: 'Rina Putri', email: 'rina@mail.com', kota: 'Belum diisi' }`,
    ["split lalu filter(Boolean) membuang potongan kosong dari spasi ganda.", "Setiap kata: huruf pertama besar + sisanya.", "<code>||</code> memberi cadangan untuk teks kosong."],
    ["Lupa bahwa method teks tidak mengubah aslinya.", "Membaca properti yang tidak ada (undefined) lalu memanggil method di atasnya.", "Mengira spread menyalin objek di dalam objek (hanya dangkal)."],
    ["Dari objek {a:1, b:2, c:3}, buat array nama kunci yang nilainya > 1.", "Ambil nama dan email dengan destructuring dari objek rapi.", "Gabungkan dua objek pengaturan; nilai dari objek kedua menimpa."],
`const o = { a: 1, b: 2, c: 3 };
console.log(Object.keys(o).filter(k => o[k] > 1));   // ['b', 'c']
const { nama, email } = rapi;
const bawaan = { tema: "terang", bahasa: "id" };
const pilihan = { tema: "gelap" };
console.log({ ...bawaan, ...pilihan });   // { tema: 'gelap', bahasa: 'id' }`);

  J("dom", "penghitung karakter untuk kolom komentar",
`<textarea id="komentar" maxlength="200"></textarea>
<p id="sisa">200 karakter tersisa</p>
<script>
  const kotak = document.querySelector("#komentar");
  const info = document.querySelector("#sisa");
  kotak.addEventListener("input", () => {
    const sisa = 200 - kotak.value.length;
    info.textContent = sisa + " karakter tersisa";
    info.classList.toggle("hampir-habis", sisa < 20);
  });
</script>`,
    ["Ambil elemen dengan querySelector.", "Event <code>input</code> menyala setiap kali isi berubah.", "textContent aman untuk menampilkan teks; classList mengatur gaya lewat CSS."],
    ["Skrip dijalankan sebelum elemen ada (lupa defer/letak di akhir body).", "Memakai innerHTML untuk teks dari pengguna (rawan XSS).", "Lupa Number() saat membaca angka dari input."],
    ["Buat tombol yang menyembunyikan/menampilkan paragraf (hidden).", "Buat daftar yang bertambah setiap tombol 'Tambah' ditekan.", "Simpan isi textarea ke localStorage dan muat lagi saat halaman dibuka."],
`tombol.addEventListener("click", () => { paragraf.hidden = !paragraf.hidden; });

tambah.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  daftar.append(li);
});

kotak.value = localStorage.getItem("komentar") || "";
kotak.addEventListener("input", () => localStorage.setItem("komentar", kotak.value));`);

  J("async", "memuat data dengan status loading dan error",
`async function muatProduk() {
  status.textContent = "Memuat...";
  try {
    const res = await fetch("/api/produk.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    status.textContent = data.length + " produk dimuat";
    return data;
  } catch (err) {
    status.textContent = "Gagal memuat: " + err.message;
    return [];
  }
}`,
    ["Tampilkan status sebelum menunggu.", "Cek res.ok karena fetch tidak gagal untuk 404/500.", "try/catch menangkap error jaringan dan error yang kita lempar."],
    ["Lupa await sehingga yang tersimpan Promise, bukan data.", "Memakai await di luar fungsi async (di skrip biasa).", "Tidak menangani error sehingga halaman diam saja saat gagal."],
    ["Buat fungsi tunggu(ms) dengan Promise dan setTimeout.", "Muat dua URL bersamaan dan tunggu keduanya (Promise.all).", "Tebak urutan: log 'A', setTimeout 'B', Promise.then 'C', log 'D'."],
`const tunggu = ms => new Promise(r => setTimeout(r, ms));
const [a, b] = await Promise.all([fetch(url1).then(r => r.json()), fetch(url2).then(r => r.json())]);
// Urutan: A, D, C, B`);

  J("modern", "menulis ulang kode lama dengan gaya modern",
`// lama
var nama = user.nama;
var kota = user.alamat && user.alamat.kota ? user.alamat.kota : "-";
var gabung = list1.concat(list2);
// modern
const { nama: namaUser } = user;
const kotaUser = user.alamat?.kota ?? "-";
const gabungan = [...list1, ...list2];`,
    ["Destructuring mengambil properti lebih ringkas.", "Optional chaining ?. mencegah error bila alamat tidak ada.", "Spread menggabung array tanpa mengubah aslinya."],
    ["Memakai ?? padahal ingin mengganti teks kosong (?? hanya untuk null/undefined).", "Mengira spread menyalin dalam (deep copy).", "Destructuring properti yang tidak ada tanpa nilai bawaan."],
    ["Tukar dua variabel x dan y dengan destructuring.", "Ambil elemen pertama dan sisanya dari [5, 6, 7].", "Buat objek dari variabel harga dan stok dengan singkatan properti."],
`let x = 1, y = 2;
[x, y] = [y, x];
const [pertama, ...sisa] = [5, 6, 7];
const harga = 18000, stok = 5;
const produk = { harga, stok };`);

  J("kasus", "menebak output dengan tiga pertanyaan",
`console.log("1" + 1, "1" - 1);        // ?
console.log([2, 10, 1].sort());       // ?
const a = { n: 1 };
const b = a;
b.n = 2;
console.log(a.n);                     // ?`,
    ["Pertanyaan 1: ada teks? + menyambung → \"11\"; - selalu angka → 0.", "Pertanyaan 2: sort bawaan mengurutkan sebagai teks → [1, 10, 2].", "Pertanyaan 3: objek berbagi rujukan → a.n menjadi 2."],
    ["Lupa bahwa + dengan teks menyambung.", "Lupa sort bawaan berbasis teks.", "Mengira = menyalin objek."],
    ["Tebak: <code>console.log(typeof NaN, NaN === NaN)</code>.", "Tebak: <code>console.log([] + [], [] == false)</code>.", "Tebak: <code>console.log(0.1 + 0.2 === 0.3)</code>."],
`number false
"" true
false`);

  J("scope", "menyimpan data rahasia dengan closure",
`function buatDompet(awal) {
  let saldo = awal;                    // tidak bisa diakses dari luar
  return {
    setor: n => (saldo += n),
    tarik: n => {
      if (n > saldo) return "saldo kurang";
      saldo -= n;
      return saldo;
    },
    cek: () => saldo,
  };
}
const d = buatDompet(100);
d.tarik(30);
console.log(d.cek(), d.saldo);   // 70 undefined`,
    ["Variabel saldo hanya hidup di dalam buatDompet.", "Fungsi yang dikembalikan mengingat saldo (closure).", "Dari luar, saldo hanya bisa diubah lewat method yang disediakan."],
    ["Memakai var di loop dengan setTimeout (semua mencetak nilai terakhir).", "Mengira this di arrow function menunjuk objeknya.", "Membuat variabel global tanpa sengaja (lupa let/const)."],
    ["Buat fungsi buatPenghitung() yang mengembalikan fungsi naik dan reset.", "Perbaiki loop var berikut agar mencetak 0,1,2: for (var i=0;i&lt;3;i++) setTimeout(()=>console.log(i));", "Buat objek dengan method biasa yang memakai this.nama."],
`function buatPenghitung() {
  let n = 0;
  return { naik: () => ++n, reset: () => (n = 0) };
}
for (let i = 0; i < 3; i++) setTimeout(() => console.log(i));
const orang = { nama: "Ani", sapa() { return "Halo " + this.nama; } };`);

  J("event", "satu listener untuk banyak tombol hapus",
`<ul id="tugas">
  <li>Belajar SQL <button data-hapus>Hapus</button></li>
  <li>Latihan JS <button data-hapus>Hapus</button></li>
</ul>
<script>
  document.querySelector("#tugas").addEventListener("click", e => {
    const tombol = e.target.closest("[data-hapus]");
    if (!tombol) return;
    tombol.closest("li").remove();
  });
</script>`,
    ["Listener dipasang sekali di ul (event delegation).", "Klik di button menggelembung naik ke ul.", "closest mencari elemen terdekat yang cocok."],
    ["Memasang listener di setiap li (tidak berlaku untuk item baru).", "Lupa preventDefault di form submit.", "Melepas listener dengan fungsi baru yang berbeda (removeEventListener tidak berhasil)."],
    ["Tambahkan input + tombol untuk menambah tugas baru.", "Buat pintasan Ctrl+Enter untuk menambah tugas.", "Tandai tugas selesai saat teksnya diklik (toggle class)."],
`form.addEventListener("submit", e => {
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = input.value + " ";
  const b = document.createElement("button");
  b.dataset.hapus = "";
  b.textContent = "Hapus";
  li.append(b);
  tugas.append(li);
});
input.addEventListener("keydown", e => { if (e.ctrlKey && e.key === "Enter") form.requestSubmit(); });
tugas.addEventListener("click", e => { if (e.target.tagName === "LI") e.target.classList.toggle("selesai"); });`);

  J("kelas", "class Rekening dengan saldo privat",
`class Rekening {
  #saldo = 0;
  constructor(pemilik) { this.pemilik = pemilik; }
  setor(n) {
    if (n <= 0) throw new Error("nominal harus positif");
    this.#saldo += n;
    return this;
  }
  get saldo() { return this.#saldo; }
}
const r = new Rekening("Ani").setor(50000).setor(25000);
console.log(r.saldo);   // 75000`,
    ["#saldo privat: tidak bisa diubah langsung dari luar.", "setor mengembalikan this sehingga bisa dirangkai.", "getter saldo dibaca tanpa kurung."],
    ["Lupa new saat membuat objek.", "Lupa super() di constructor class turunan.", "Membuat semua properti publik sehingga bisa diubah sembarangan."],
    ["Tambahkan method tarik(n) yang menolak bila saldo kurang.", "Buat class Tabungan extends Rekening dengan method tambahBunga(persen).", "Tambahkan static method buatKosong(pemilik)."],
`tarik(n) {
  if (n > this.#saldo) throw new Error("saldo kurang");
  this.#saldo -= n;
  return this;
}
class Tabungan extends Rekening {
  tambahBunga(persen) { return this.setor(this.saldo * persen / 100); }
}
static buatKosong(pemilik) { return new Rekening(pemilik); }`);

  J("error", "parse JSON dari input dengan pesan yang ramah",
`function bacaPengaturan(teks) {
  try {
    const data = JSON.parse(teks);
    if (typeof data.tema !== "string") throw new TypeError("tema wajib berupa teks");
    return { ok: true, data };
  } catch (e) {
    return { ok: false, pesan: e.name + ": " + e.message };
  }
}
console.log(bacaPengaturan('{"tema":"gelap"}').ok);     // true
console.log(bacaPengaturan("{rusak").pesan);            // SyntaxError: ...`,
    ["JSON.parse bisa melempar SyntaxError.", "Validasi tambahan melempar TypeError sendiri.", "Fungsi mengembalikan objek hasil yang jelas, bukan membuat aplikasi berhenti."],
    ["Menangkap error lalu diam saja (catch kosong).", "Melempar teks, bukan new Error.", "Lupa .catch pada Promise sehingga muncul 'Uncaught (in promise)'."],
    ["Buat class ValidasiError extends Error dengan properti field.", "Bungkus fetch dengan try/catch/finally yang selalu menyembunyikan spinner.", "Tulis fungsi bagi(a, b) yang melempar RangeError bila b = 0."],
`class ValidasiError extends Error {
  constructor(pesan, field) { super(pesan); this.name = "ValidasiError"; this.field = field; }
}
try { await muat(); } catch (e) { tampilkan(e.message); } finally { spinner.hidden = true; }
function bagi(a, b) { if (b === 0) throw new RangeError("pembagi nol"); return a / b; }`);

  J("koleksi", "menghitung kata dengan Map dan membuang duplikat dengan Set",
`const teks = "kopi teh kopi susu teh kopi";
const hitung = new Map();
for (const k of teks.split(" ")) hitung.set(k, (hitung.get(k) ?? 0) + 1);
console.log([...hitung]);                 // [['kopi', 3], ['teh', 2], ['susu', 1]]
console.log([...new Set(teks.split(" "))].length);   // 3 kata unik`,
    ["Map menyimpan pasangan kata → jumlah.", "?? 0 memberi nilai awal untuk kata baru.", "Set membuang kembar; spread mengubahnya kembali ke array."],
    ["Lupa bulan Date dimulai dari 0.", "Membandingkan dua Date dengan === (membandingkan objek).", "Regex tanpa ^ dan $ sehingga sebagian teks saja yang cocok."],
    ["Urutkan hasil Map dari jumlah terbesar.", "Hitung selisih hari antara 28 November dan 25 Desember 2026.", "Validasi kode pos 5 digit dengan regex."],
`const urut = [...hitung].sort((a, b) => b[1] - a[1]);
const hari = (new Date(2026, 11, 25) - new Date(2026, 10, 28)) / 86400000;   // 27
const valid = /^\\d{5}$/.test("29432");   // true`);

  J("modul", "memecah kode menjadi modul",
`// format.js
export function rupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

// keranjang.js
import { rupiah } from "./format.js";
export default function totalTeks(items) {
  const total = items.reduce((s, i) => s + i.harga * i.qty, 0);
  return rupiah(total);
}

// main.js (dimuat dengan <script type="module" src="main.js">)
import totalTeks from "./keranjang.js";`,
    ["export bernama memakai kurung kurawal saat import.", "export default diimpor tanpa kurung kurawal.", "Modul harus dibuka lewat server (misalnya Live Server), bukan file://."],
    ["Lupa type=\"module\" di tag script.", "Lupa ekstensi .js pada path import di browser.", "Membuka file langsung dari folder (CORS error)."],
    ["Tambahkan export const PPN = 0.11 di format.js dan pakai di keranjang.js.", "Salin objek pengaturan dalam (deep) dengan structuredClone.", "Ubah objek ke teks JSON rapi berindentasi 2."],
`export const PPN = 0.11;
import { rupiah, PPN } from "./format.js";
const salinan = structuredClone(pengaturan);
console.log(JSON.stringify(pengaturan, null, 2));`);

  J("frontend", "memperbarui state tanpa mengubah aslinya (pola React)",
`let keranjang = [{ id: 1, qty: 1 }, { id: 2, qty: 3 }];

// tambah qty id 2
keranjang = keranjang.map(i => i.id === 2 ? { ...i, qty: i.qty + 1 } : i);
// hapus id 1
keranjang = keranjang.filter(i => i.id !== 1);
// tambah item baru
keranjang = [...keranjang, { id: 3, qty: 1 }];
console.log(keranjang);   // [{ id: 2, qty: 4 }, { id: 3, qty: 1 }]`,
    ["map mengganti satu item dengan salinan baru.", "filter membuang item.", "spread membuat array baru. Di React, hasilnya diberikan ke setKeranjang."],
    ["Memakai push/splice pada state React (tampilan tidak ikut berubah).", "Lupa prop key saat menampilkan daftar.", "Menampilkan angka 0 karena memakai length && ..."],
    ["Tulis fungsi kurangiQty(keranjang, id) yang menghapus item bila qty jadi 0.", "Tulis tipe TypeScript untuk item keranjang.", "Tulis JSX daftar keranjang dengan key."],
`function kurangiQty(k, id) {
  return k.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i).filter(i => i.qty > 0);
}
interface Item { id: number; qty: number; }
{keranjang.map(i => <li key={i.id}>Produk {i.id}: {i.qty}</li>)}`);
})();
