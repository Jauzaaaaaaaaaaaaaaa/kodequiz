/* ============================================================
   📖 Book — belajar tanpa laptop
   • Daftar isi semua topik & bab, lanjutkan dari bab terakhir
   • Mode baca: materi + "Uji Diri" (ketuk jawaban → langsung dinilai,
     ikut tercatat di Ulangan Pintar), ukuran huruf bisa diatur
   • Rakit buku untuk dicetak / disimpan sebagai PDF (ukuran HP, A5, A4)
   • PDF siap pakai ada di folder buku/
   ============================================================ */

const BUKU_SET = [
  { id: "1", judul: "Excel & SQL",                         topik: ["excel", "sql"],                 file: "buku/KodeQuiz-Buku-1-Excel-SQL.pdf" },
  { id: "2", judul: "Dashboard, BI & Statistik",           topik: ["bi", "stat"],                   file: "buku/KodeQuiz-Buku-2-BI-Statistik.pdf" },
  { id: "3", judul: "ERP & Odoo",                          topik: ["erp"],                          file: "buku/KodeQuiz-Buku-3-ERP-Odoo.pdf" },
  { id: "4", judul: "Persiapan Karier",                    topik: ["karier"],                       file: "buku/KodeQuiz-Buku-4-Karier.pdf" },
  { id: "5", judul: "Coding Prioritas: Python & JavaScript", topik: ["python", "js"],               file: "buku/KodeQuiz-Buku-5-Python-JavaScript.pdf" },
  { id: "6", judul: "Coding Opsional: HTML, CSS, Java & PHP", topik: ["html", "css", "java", "php"], file: "buku/KodeQuiz-Buku-6-HTML-CSS-Java-PHP.pdf" },
];

function dataBuku() {
  DATA.buku = DATA.buku || {};
  DATA.buku.dibaca = DATA.buku.dibaca || {};
  DATA.buku.ukuran = DATA.buku.ukuran || 1;
  return DATA.buku;
}
const urutanTopik = () => Object.keys(GRUP).flatMap(g => Object.keys(TOPIK_INFO).filter(t => TOPIK_INFO[t].grup === g));
const URUTAN_BAB = () => urutanTopik().flatMap(t => MATERI[t].map((_, i) => ({ t, i })));
const kunciBab = (t, i) => t + "-" + MATERI[t][i].k;
const opsiKode = o => /^=|^SELECT|^WITH|\n|^<|^[.#@:$[{]|=>|^df|^pd\.|^fields\.|^grid-|^font-/.test(o);

/* ---------- Daftar isi ---------- */
function renderBuku() {
  const b = dataBuku();
  const semua = URUTAN_BAB();
  const sudah = semua.filter(x => b.dibaca[kunciBab(x.t, x.i)]).length;
  el("buku-prog-teks").textContent = `${sudah} / ${semua.length} bab selesai dibaca`;
  el("buku-prog-isi").style.width = (sudah / semua.length * 100) + "%";

  // lanjutkan: buku PDF terakhir (jika ada) + bab interaktif
  const lanjut = el("buku-lanjut"), kartu = [];
  const tp = b.terakhirPdf && BUKU_SET.find(x => x.id === b.terakhirPdf.id);
  if (tp) {
    const dp = (b.pdf || {})[tp.id] || {};
    kartu.push(`<button class="buku-lanjut buku-lanjut-pdf muncul" data-pdf="${tp.id}">
      <span class="buku-lanjut-ikon">📕</span>
      <span><small>Lanjutkan buku PDF</small><b>Buku ${tp.id} — ${esc(tp.judul)} · hal ${dp.hal || 1}${dp.total ? "/" + dp.total : ""}</b></span>
      <span class="buku-lanjut-panah">→</span></button>`);
  }
  const t0 = b.terakhir && MATERI[b.terakhir.t] && MATERI[b.terakhir.t][b.terakhir.i] ? b.terakhir : null;
  const target = t0 || semua.find(x => !b.dibaca[kunciBab(x.t, x.i)]) || semua[0];
  kartu.push(`<button class="buku-lanjut muncul" data-bab="1">
      <span class="buku-lanjut-ikon">📖</span>
      <span><small>${t0 ? "Lanjutkan bab interaktif" : "Mulai bab interaktif"}</small>
      <b>${esc(TOPIK_INFO[target.t].nama)} · Bab ${target.i + 1}: ${esc(MATERI[target.t][target.i].judul)}</b></span>
      <span class="buku-lanjut-panah">→</span></button>`);
  lanjut.innerHTML = kartu.join("");
  lanjut.querySelectorAll("[data-pdf]").forEach(x => x.onclick = () => go("pdf", { b: x.dataset.pdf }));
  lanjut.querySelectorAll("[data-bab]").forEach(x => x.onclick = () => go("bukubab", target));

  // rak buku PDF (dibaca langsung di website)
  renderRakPdf();
  const hp = halPdfDibaca();
  el("buku-rak-ket").textContent = hp ? `${hp} halaman sudah kamu baca` : "Ketuk sampul untuk mulai membaca";

  // daftar isi per grup
  const w = el("buku-daftar");
  w.innerHTML = "";
  Object.keys(GRUP).forEach(g => {
    const topik = Object.keys(TOPIK_INFO).filter(t => TOPIK_INFO[t].grup === g);
    const sec = document.createElement("section");
    sec.className = "buku-grup";
    sec.innerHTML = `<h3 class="sec-judul">${GRUP[g].nama}</h3>`;
    topik.forEach(t => {
      const info = TOPIK_INFO[t];
      const dibaca = MATERI[t].filter((_, i) => b.dibaca[kunciBab(t, i)]).length;
      const d = document.createElement("details");
      d.className = "buku-topik " + info.kelas;
      if (b.terakhir && b.terakhir.t === t) d.open = true;
      d.innerHTML = `<summary><span class="kartu-ikon">${info.ikon}</span>
          <span class="buku-topik-nama"><b>${info.nama}</b><small>${MATERI[t].length} bab · ${BANK[t].length} soal · ${dibaca} dibaca</small></span>
          ${info.prioritas !== undefined ? chipPrioritas(info) : ""}</summary>
        <ol class="buku-bab">${MATERI[t].map((bab, i) => `<li><button data-t="${t}" data-i="${i}" class="${b.dibaca[kunciBab(t, i)] ? "dibaca" : ""}">
          <span class="buku-bab-no">${i + 1}</span><span class="buku-bab-judul">${esc(bab.judul)}</span>
          <span class="buku-bab-st">${b.dibaca[kunciBab(t, i)] ? "✓" : soalBab(t, bab.k).length + " soal"}</span></button></li>`).join("")}</ol>`;
      sec.appendChild(d);
    });
    w.appendChild(sec);
  });
  w.querySelectorAll(".buku-bab button").forEach(btn => btn.onclick = () => go("bukubab", { t: btn.dataset.t, i: +btn.dataset.i }));
}

/* ---------- Mode baca ---------- */
let BACA = null;
function kartuSoalBuku(s, n) {
  const tb = s.tb ? [].concat(s.tb) : [];
  return `<div class="bq" data-n="${n}">
    <div class="bq-kepala"><span class="bq-no">${n + 1}</span><span class="chip-kecil">${LV_NAMA[s.lv]}</span>${s.t === "is" ? '<span class="chip-kecil">isian</span>' : ""}</div>
    ${tb.map(renderDataset).join("")}
    <p class="bq-q">${esc(s.q)}</p>
    ${s.kode ? `<pre class="kode-soal"><code>${esc(s.kode)}</code></pre>` : ""}
    ${s.t === "mc"
      ? `<div class="bq-opsi">${s.o.map((o, i) => `<button class="opsi${opsiKode(o) ? " opsi-kode" : ""}" data-i="${i}"><span class="opsi-huruf">${HURUF[i]}</span><span class="opsi-teks">${esc(o)}</span></button>`).join("")}</div>`
      : `<p class="bq-isian">✍️ Jawab dulu di kepala atau di kertas, lalu buka jawabannya dan nilai dirimu sendiri.</p>`}
    <div class="bq-aksi">
      ${s.h ? `<button class="btn-bantuan bq-petunjuk">💡 Petunjuk</button>` : ""}
      <button class="btn-bantuan bq-buka">${s.t === "mc" ? "🏳️ Lihat jawaban" : "👀 Lihat jawaban"}</button>
    </div>
    <div class="bq-jawab"></div>
  </div>`;
}
function renderBukuBab(t, i) {
  const b = dataBuku();
  const bab = MATERI[t][i], info = TOPIK_INFO[t];
  const soal = soalBab(t, bab.k);
  BACA = { t, i, soal };
  b.terakhir = { t, i }; simpan();

  const isi = el("baca-isi");
  isi.style.setProperty("--baca-skala", b.ukuran);
  isi.innerHTML = `
    <p class="eyebrow">${esc(info.nama)} · Bab ${i + 1} dari ${MATERI[t].length}</p>
    <h1 class="baca-h1">${esc(bab.judul)}</h1>
    <div class="baca-materi materi-kotak">${isiMateri(bab.materi)}</div>
    <section class="ujidiri">
      <h2>🧠 Uji Diri <span class="chip-kecil">${soal.length} soal</span></h2>
      <p class="kecil">Ketuk jawabanmu — langsung diperiksa, dapat XP, dan ikut dihitung di Ulangan Pintar. Butuh bantuan? Pakai 💡 atau 🏳️.</p>
      ${soal.map(kartuSoalBuku).join("")}
    </section>`;
  el("baca-judul-kecil").textContent = `${info.nama} · Bab ${i + 1}`;

  const urut = URUTAN_BAB(), pos = urut.findIndex(x => x.t === t && x.i === i);
  const prev = urut[pos - 1], next = urut[pos + 1];
  el("btn-baca-prev").disabled = !prev;
  el("btn-baca-next").disabled = !next;
  el("btn-baca-prev").onclick = () => prev && go("bukubab", prev, { replace: true });
  el("btn-baca-next").onclick = () => next && go("bukubab", next, { replace: true });
  el("btn-baca-next").textContent = next && next.t !== t ? `${TOPIK_INFO[next.t].nama} →` : "Berikutnya →";
  segarkanTombolSelesai();
  setTimeout(perbaruiBarBaca, 50);
}
function segarkanTombolSelesai() {
  const k = kunciBab(BACA.t, BACA.i), ok = !!dataBuku().dibaca[k];
  const btn = el("btn-baca-selesai");
  btn.textContent = ok ? "✓ Sudah dibaca" : "✓ Tandai selesai dibaca";
  btn.classList.toggle("btn-utama", !ok);
  btn.classList.toggle("btn-garis", ok);
}
function tandaiSelesai() {
  const b = dataBuku(), k = kunciBab(BACA.t, BACA.i);
  if (b.dibaca[k]) { delete b.dibaca[k]; simpan(); segarkanTombolSelesai(); return; }
  b.dibaca[k] = Date.now();
  catatStreak(); simpan();
  segarkanTombolSelesai();
  RAYA.ledakan(el("btn-baca-selesai")); RAYA.nada("klik");
  toast("Bab ditandai selesai dibaca 📖");
  umumkanLencana(cekLencana());
}
function catatJawabanBuku(s, benar, elemen) {
  nilaiKartu(s.id, benar);
  catatStreak();
  if (benar) {
    const xp = Math.ceil(s.lv * 5);
    DATA.xp += xp; DATA.statistik.benar++;
    RAYA.ledakan(elemen); RAYA.nada("benar"); RAYA.melayang(elemen, `+${xp} XP`);
  } else RAYA.nada("salah");
  simpan(); renderStat();
  umumkanLencana(cekLencana());
}
function tanganiKlikBaca(e) {
  const kartu = e.target.closest(".bq");
  if (!kartu || !BACA) return;
  const s = BACA.soal[+kartu.dataset.n];
  const jawab = kartu.querySelector(".bq-jawab");
  const tampilkan = (status, pilihan, ekstra = "") => {
    kartu.classList.add("terjawab");
    if (s.t === "mc") kartu.querySelectorAll(".opsi").forEach((b, i) => {
      b.disabled = true;
      if (i === s.a) b.classList.add("benar"); else if (i === pilihan) b.classList.add("salah");
    });
    const kelas = status === "benar" ? "fb-benar" : status === "salah" ? "fb-salah" : "fb-menyerah";
    const judul = status === "benar" ? "✓ Benar!" : status === "salah" ? "✗ Kurang tepat." : "Ini jawabannya:";
    jawab.innerHTML = `<div class="feedback ${kelas} muncul"><strong class="fb-judul">${judul}</strong>${panelPenjelasan(s, status, pilihan)}${ekstra}</div>`;
    const aksi = kartu.querySelector(".bq-aksi"); if (aksi) aksi.remove();
  };
  const opsi = e.target.closest(".opsi");
  if (opsi && !opsi.disabled && !kartu.classList.contains("terjawab")) {
    const i = +opsi.dataset.i, benar = i === s.a;
    tampilkan(benar ? "benar" : "salah", i);
    catatJawabanBuku(s, benar, opsi);
    return;
  }
  if (e.target.closest(".bq-petunjuk")) {
    const btn = e.target.closest(".bq-petunjuk");
    btn.outerHTML = `<p class="bq-hint">💡 ${esc(s.h)}</p>`;
    return;
  }
  if (e.target.closest(".bq-buka")) {
    if (s.t === "is") {
      tampilkan("menyerah", null, `<div class="bq-nilai"><span>Jawabanmu tadi…</span>
        <button class="btn btn-kecil btn-utama" data-nilai="1">✓ Benar</button>
        <button class="btn btn-kecil btn-garis" data-nilai="0">✗ Salah</button></div>`);
    } else tampilkan("menyerah", null);
    return;
  }
  const nilai = e.target.closest("[data-nilai]");
  if (nilai) {
    const benar = nilai.dataset.nilai === "1";
    nilai.parentElement.innerHTML = benar ? "<b>✓ Tercatat benar.</b>" : "<b>Tercatat — soal ini akan muncul lagi di Ulangan Pintar.</b>";
    catatJawabanBuku(s, benar, jawab);
  }
}
function ubahUkuranBaca(d) {
  const b = dataBuku();
  b.ukuran = Math.min(1.5, Math.max(0.85, Math.round((b.ukuran + d) * 100) / 100));
  el("baca-isi").style.setProperty("--baca-skala", b.ukuran);
  simpan();
  toast(`Ukuran huruf ${Math.round(b.ukuran * 100)}%`);
}
function perbaruiBarBaca() {
  const atas = NAV[NAV.length - 1];
  if (!atas || atas.r !== "bukubab") return;
  const a = el("baca-isi"), r = a.getBoundingClientRect();
  const total = a.offsetHeight - innerHeight * 0.6;
  const p = Math.max(0, Math.min(1, -r.top / Math.max(1, total)));
  el("baca-bar-isi").style.width = (p * 100) + "%";
}

/* ---------- Buku cetak / PDF ---------- */
function soalCetak(s) {
  const tb = s.tb ? [].concat(s.tb) : [];       // tabel dicetak sekali di awal Uji Diri
  return `<li class="c-q">${tb.length ? `<p class="c-pakai">📄 Data: ${tb.map(n => esc(DATASET[n].nama)).join(", ")}</p>` : ""}<p class="c-tanya">${esc(s.q)}</p>
    ${s.kode ? `<pre><code>${esc(s.kode)}</code></pre>` : ""}
    ${s.t === "mc" ? `<ol class="c-opsi" type="A">${s.o.map(o => `<li>${esc(o)}</li>`).join("")}</ol>` : `<p class="c-isian">Jawab: ______________________</p>`}</li>`;
}
function kunciCetak(s) {
  const lain = s.t === "mc" && s.w ? s.o.map((_, i) => i).filter(i => i !== s.a && s.w[i]) : [];
  return `<li><b>${esc(teksJawabanBenar(s))}</b> — ${esc(s.e)}${lain.length
    ? `<ul class="c-w">${lain.map(i => `<li><b>${HURUF[i]}:</b> ${esc(s.w[i])}</li>`).join("")}</ul>` : ""}</li>`;
}
function lampiranLab() {
  return `<section class="c-bab" id="c-lab"><p class="c-label">SQL · Lampiran</p><h2>Tantangan Lab SQL</h2>
    <p>Tulis query-nya di kertas atau di Lab SQL aplikasi, lalu cocokkan dengan jawaban di bawah. Tabel yang dipakai:</p>
    ${["pelanggan", "produk", "pesanan"].map(renderDataset).join("")}
    <ol class="c-soal">${TANTANGAN_SQL.map(T => `<li class="c-q"><p class="c-tanya"><b>${esc(T.judul)}.</b> ${T.soal}</p></li>`).join("")}</ol>
    <div class="c-kunci"><h3>Jawaban Lab SQL</h3><ol>${TANTANGAN_SQL.map(T => `<li><pre><code>${esc(T.jawab)}</code></pre><p>${esc(T.jelas)}</p></li>`).join("")}</ol></div></section>`;
}
function rakitBuku(topikList, judul) {
  const tgl = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  const jmlSoal = topikList.reduce((n, t) => n + BANK[t].length, 0);
  const jmlBab = topikList.reduce((n, t) => n + MATERI[t].length, 0);
  const toc = [], isi = [];
  topikList.forEach((t, ti) => {
    const info = TOPIK_INFO[t];
    toc.push(`<li><a href="#c-${t}">${esc(info.nama)}</a><ol>${MATERI[t].map(b => `<li><a href="#c-${t}-${b.k}">${esc(b.judul)}</a></li>`).join("")}${t === "sql" ? `<li><a href="#c-lab">Lampiran: Tantangan Lab SQL</a></li>` : ""}</ol></li>`);
    isi.push(`<section class="c-topik" id="c-${t}"><p class="c-label">Bagian ${ti + 1}</p><h1>${esc(info.nama)}</h1>
      ${info.prioritas !== undefined ? `<p class="c-prio">${info.prioritas ? "★ Prioritas #" + info.prioritas : "Bukan prioritas (opsional)"} — ${esc(info.alasan || "")}</p>` : ""}
      ${info.ket ? `<p>${esc(info.ket)}</p>` : ""}<p class="c-kecil">${MATERI[t].length} bab · ${BANK[t].length} soal</p></section>`);
    MATERI[t].forEach((b, i) => {
      const soal = soalBab(t, b.k);
      const id = `${t}-${b.k}`;
      isi.push(`<section class="c-bab" id="c-${id}"><p class="c-label">${esc(info.nama)} · Bab ${i + 1}</p><h2>${esc(b.judul)}</h2>
        <p class="c-lompat">Lompat ke: <a href="#u-${id}">🧠 Uji Diri</a> · <a href="#k-${id}">🔑 Kunci & Pembahasan</a></p>
        <div class="c-materi">${isiMateri(b.materi)}</div>
        <h3 class="c-uji" id="u-${id}">🧠 Uji Diri — ${soal.length} soal</h3>
        ${(() => { const tb = [...new Set(soal.flatMap(q => q.tb ? [].concat(q.tb) : []))];
          return tb.length ? `<div class="c-data"><p class="c-label">Data yang dipakai soal-soal bab ini</p>${tb.map(renderDataset).join("")}</div>` : ""; })()}
        <ol class="c-soal">${soal.map(soalCetak).join("")}</ol>
        <div class="c-kunci" id="k-${id}"><h3>Kunci & Pembahasan · ${esc(info.nama)} Bab ${i + 1}</h3>
          <p class="c-lompat"><a href="#u-${id}">← Kembali ke soal</a> · <a href="#c-${id}">Awal bab</a></p>
          <ol>${soal.map(kunciCetak).join("")}</ol></div></section>`);
    });
    if (t === "sql") isi.push(lampiranLab());
  });
  return `<section class="c-sampul"><p class="c-logo">🌿 KodeQuiz Book</p><h1>${esc(judul)}</h1>
      <p class="c-sub">${jmlBab} bab · ${jmlSoal} soal dengan pembahasan</p>
      <div class="c-cara"><b>Cara memakai buku ini</b><ol><li>Baca materi tiap bab (±3–5 menit).</li><li>Kerjakan <i>Uji Diri</i> tanpa melihat kunci — di kepala atau di kertas.</li><li>Cocokkan dengan <i>Kunci & Pembahasan</i> di akhir bab. Baca juga kenapa pilihan lain salah.</li><li>Soal yang salah? Tandai, lalu ulangi besok di aplikasi lewat Ulangan Pintar.</li></ol></div>
      <p class="c-kecil">Dibuat ${tgl}</p></section>
    <section class="c-toc"><h2>Daftar Isi</h2><ol>${toc.join("")}</ol></section>${isi.join("")}`;
}
const UKURAN_CETAK = {
  hp: "@page { size: 108mm 192mm; margin: 8mm 6mm 10mm; }",
  a5: "@page { size: A5; margin: 13mm 12mm 15mm; }",
  a4: "@page { size: A4; margin: 16mm 16mm 18mm; }",
};
function siapkanCetak(topikList, judul, ukuran = "hp") {
  el("cetak").innerHTML = rakitBuku(topikList, judul);
  el("cetak").dataset.ukuran = ukuran;
  let st = el("gaya-cetak");
  if (!st) { st = document.createElement("style"); st.id = "gaya-cetak"; document.head.appendChild(st); }
  st.textContent = `@media print { ${UKURAN_CETAK[ukuran] || UKURAN_CETAK.hp} }`;
  document.title = "KodeQuiz Book — " + judul;
}
function dialogCetak() {
  const tp = urutanTopik();
  tanya({
    judul: "🖨️ Cetak / simpan sebagai PDF",
    lebar: true,
    html: `<p>Pilih topik. Setiap bab berisi materi, soal Uji Diri, lalu kunci & pembahasan di akhir bab.</p>
      <div class="cetak-pilih">${tp.map(t => `<label class="cetak-cek"><input type="checkbox" value="${t}" ${BUKU_SET[0].topik.includes(t) ? "checked" : ""}>
        <span>${esc(TOPIK_INFO[t].nama)} <small>${BANK[t].length} soal</small></span></label>`).join("")}</div>
      <p><b>Ukuran halaman</b></p>
      <div class="cetak-ukuran">
        <label><input type="radio" name="uk" value="hp" checked> 📱 Layar HP <small>(paling nyaman dibaca di HP)</small></label>
        <label><input type="radio" name="uk" value="a5"> Kertas A5</label>
        <label><input type="radio" name="uk" value="a4"> Kertas A4</label>
      </div>
      <p class="kecil">Di jendela cetak, pilih tujuan <b>"Simpan sebagai PDF"</b> untuk mendapat file PDF, lalu kirim ke HP-mu.</p>`,
    ya: "Buka jendela cetak", tidak: "Batal",
  }).then(ok => {
    if (!ok) return;
    const dipilih = [...document.querySelectorAll(".cetak-pilih input:checked")].map(x => x.value);
    const uk = (document.querySelector(".cetak-ukuran input:checked") || {}).value || "hp";
    if (!dipilih.length) return toast("Pilih minimal satu topik.");
    const judul = dipilih.length === 1 ? TOPIK_INFO[dipilih[0]].nama : dipilih.map(t => TOPIK_INFO[t].nama).join(", ");
    siapkanCetak(dipilih, judul, uk);
    setTimeout(() => window.print(), 120);
  });
  // nilai input dibaca sebelum modal ditutup → simpan pilihan saat diubah
}
window.addEventListener("afterprint", () => { el("cetak").innerHTML = ""; document.title = "KodeQuiz — Coding, Data & Karier"; });

function pasangBuku() {
  el("baca-isi").addEventListener("click", tanganiKlikBaca);
  el("btn-baca-daftar").onclick = () => { if (NAV.length > 1 && NAV[NAV.length - 2].r === "buku") kembali(); else go("buku"); };
  el("btn-baca-kecil").onclick = () => ubahUkuranBaca(-0.1);
  el("btn-baca-besar").onclick = () => ubahUkuranBaca(0.1);
  el("btn-baca-selesai").onclick = tandaiSelesai;
  el("btn-buku-cetak").onclick = dialogCetak;
  addEventListener("scroll", perbaruiBarBaca, { passive: true });
}

// dipakai skrip pembuat PDF (Playwright)
window.KQBuku = { siapkanCetak, BUKU_SET };
