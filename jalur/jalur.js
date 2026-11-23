/* ============================================================
   KodeQuiz — Jalur Karier (Data Analyst, Data Scientist & Cyber Security)
   Halaman jalur, studi kasus (Harvard), tutorial (Oxford), problem set (MIT),
   contoh bertahap, latihan bebas, kemajuan, navigasi tab dan alamat (#data-analyst).
   Data ada di js/data/jalur.js dan js/data/kasus.js; file ini sengaja di luar js/
   karena memakai DOM (alat/cek-soal.js menjalankan semua skrip js/ tanpa DOM).
   Memakai fungsi inti dari js/app.js (go, mulaiSesi, DATA, simpan, …) dan js/fitur/sql-lab.js (dataLab).
   ============================================================ */

DATA.kasus = DATA.kasus || {};
DATA.tutorial = DATA.tutorial || {};
DATA.catatan = DATA.catatan || {};
DATA.capstone = DATA.capstone || {};
DATA.bertahap = DATA.bertahap || {};

const kasusById = id => KASUS.find(k => k.id === id);
const idxSql = id => TANTANGAN_SQL.findIndex(T => T.id === id);
const sqlLulus = id => dataLab().lulus.includes(idxSql(id));
const kasusSelesai = id => !!(DATA.kasus[id] && DATA.kasus[id].pilih != null);
const kunciTut = (j, t) => j + "-" + t;
const tutorialSelesai = (j, t) => !!(DATA.tutorial[kunciTut(j, t)] && DATA.tutorial[kunciTut(j, t)].selesai);
const psetSkor = (j, t) => DATA.pset[j + "-" + t] || 0;
const idxModul = (topik, k) => MATERI[topik].findIndex(b => b.k === k);
const jalurUtama = () => DATA.pref.jalur || "da";
const WILAYAH = { Indonesia: "Indonesia", Global: "Global" };
// Urutan opsi keputusan kasus diacak secara stabil per kasus (opsi terkuat tidak selalu di posisi yang sama).
const urutKasus = K => permStabil(K.keputusan.opsi.length, K.id);   // permStabil di js/app.js
const hurufOpsi = (K, x) => HURUF[urutKasus(K).indexOf(x)];

/* ---------- Langkah-langkah satu tahap, dalam urutan belajar ---------- */
function itemTahap(j, t) {
  const J = JALUR[j], T = J.tahap[t], out = [];
  T.modul.forEach(k => out.push({ jenis: "Modul", label: MATERI[J.topik][idxModul(J.topik, k)].judul, selesai: babLulus(J.topik, k),
    buka: () => go("materi", { t: J.topik, i: idxModul(J.topik, k) }) }));
  T.sql.forEach(id => out.push({ jenis: "Tantangan SQL", label: TANTANGAN_SQL[idxSql(id)].judul, selesai: sqlLulus(id), buka: () => go("sqllab", { i: idxSql(id) }) }));
  out.push({ jenis: "Problem Set", label: `Problem Set Tahap ${t + 1}`, selesai: psetSkor(j, t) >= 70, buka: () => mulaiPset(j, t) });
  out.push({ jenis: "Tutorial", label: T.tutorial.judul, selesai: tutorialSelesai(j, t), buka: () => go("tutorial", { j, tahap: t }) });
  T.kasus.forEach(id => out.push({ jenis: "Studi kasus", label: kasusById(id).judul, selesai: kasusSelesai(id), buka: () => go("kasus", { id }) }));
  return out;
}
function progresJalur(j) {
  const J = JALUR[j], cap = DATA.capstone[j] || [];
  const semua = J.tahap.flatMap((_, t) => itemTahap(j, t));
  const selesai = semua.filter(x => x.selesai).length + J.capstone.langkah.filter((_, i) => cap[i]).length;
  const total = semua.length + J.capstone.langkah.length;
  return { selesai, total, persen: Math.round(selesai / total * 100) };
}
function langkahBerikut(j) {
  const J = JALUR[j];
  for (let t = 0; t < J.tahap.length; t++) {
    const x = itemTahap(j, t).find(x => !x.selesai);
    if (x) return { ...x, tahap: t };
  }
  return { jenis: "Capstone", label: J.capstone.judul, tahap: J.tahap.length, buka: () => { go("jalur", { j }); setTimeout(() => el("capstone-" + j)?.scrollIntoView({ behavior: "smooth" }), 350); } };
}
function mulaiPset(j, t) {
  // MIT: soal tahap ini + sebagian soal tahap sebelumnya (kumulatif dan bercampur)
  const J = JALUR[j], dariTahap = x => J.tahap[x].modul.flatMap(k => soalBab(J.topik, k));
  const nLalu = t ? 3 : 0;
  const lalu = t ? acak(J.tahap.slice(0, t).flatMap((_, x) => dariTahap(x))).slice(0, nLalu) : [];
  mulaiSesi(acak([...acak(dariTahap(t)).slice(0, 10 - lalu.length), ...lalu]), { tipe: "pset", jalur: j, tahap: t });
}

/* ============ Navigasi tab (atas di laptop, bawah di HP) & alamat ============ */
function tabUntuk(rt) {
  const a = rt.a || {};
  if (rt.r === "beranda") return "beranda";
  if (rt.r === "jalur" || rt.r === "tutorial") return a.j;
  if (rt.r === "kasus") return (kasusById(a.id) || {}).jalur;
  if (rt.r === "kemajuan") return "kemajuan";
  if (["materi", "topik", "bukubab"].includes(rt.r) && TOPIK_INFO[a.t] && TOPIK_INFO[a.t].grup === "jalur") return a.t;
  if (rt.r === "kuis" || rt.r === "hasil") return document.body.dataset.tab || "latihan";
  return "latihan";
}
function setelahRoute(rt) {
  const tab = tabUntuk(rt);
  document.body.dataset.tab = tab;
  document.querySelectorAll(".nav-utama [data-tab], .nav-bawah [data-tab]").forEach(b => {
    const on = b.dataset.tab === tab;
    b.classList.toggle("aktif", on);
    if (on) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
  });
  const a = rt.a || {};
  const h = rt.r === "jalur" ? JALUR[a.j].hash : rt.r === "kasus" ? "kasus-" + a.id : ["latihan", "kemajuan"].includes(rt.r) ? rt.r : rt.r === "beranda" ? "" : null;
  if (h !== null) try { history.replaceState(history.state, "", location.pathname + location.search + (h ? "#" + h : "")); } catch (e) { /* file:// lama */ }
}
async function bukaTab(tab) {
  const atas = NAV[NAV.length - 1];
  if (atas && atas.r === "kuis" && SESI && !(await konfirmasiKeluarKuis())) return;
  if (atas && atas.r === "kuis") SESI = null;
  NAV = [{ r: "beranda", a: {} }];
  if (tab !== "beranda") NAV.push(JALUR[tab] ? { r: "jalur", a: { j: tab } } : { r: tab, a: {} });
  denganTransisi(() => terapkanRoute(NAV[NAV.length - 1], "maju"), "maju");
  sinkronHistory();
}
const HASH_AWAL = location.hash;   // disimpan sebelum render beranda menghapus hash dari alamat
function ruteAwal() {
  const h = decodeURIComponent(HASH_AWAL.slice(1));
  if (!h) return;
  const j = Object.keys(JALUR).find(k => JALUR[k].hash === h);
  if (j) NAV = [{ r: "beranda", a: {} }, { r: "jalur", a: { j } }];
  else if (h === "latihan" || h === "kemajuan") NAV = [{ r: "beranda", a: {} }, { r: h, a: {} }];
  else if (h.startsWith("kasus-") && kasusById(h.slice(6))) {
    const k = kasusById(h.slice(6));
    NAV = [{ r: "beranda", a: {} }, { r: "jalur", a: { j: k.jalur } }, { r: "kasus", a: { id: k.id } }];
  } else return;
  terapkanRoute(NAV[NAV.length - 1], "maju");
  sinkronHistory();
}

/* ============ Beranda: sesi hari ini, kartu jalur, metode ============ */
function renderBerandaJalur() {
  const j = jalurUtama(), J = JALUR[j], n = langkahBerikut(j);
  el("sesi-2").innerHTML = `<span class="sesi-no">2</span>
    <div class="sesi-teks"><b>Pelajari yang baru · ${esc(J.nama)}</b><small>${esc(n.jenis)}${n.tahap < J.tahap.length ? ` · Tahap ${n.tahap + 1}` : ""}: ${esc(n.label)}</small></div>
    <button class="btn btn-utama" id="sesi-lanjut">Lanjutkan</button>`;
  el("sesi-lanjut").onclick = n.buka;
  const kasus = KASUS.find(k => k.jalur === j && !kasusSelesai(k.id));
  const sql = TANTANGAN_SQL.map((T, i) => ({ T, i })).find(x => (x.T.jalur === j) && !dataLab().lulus.includes(x.i));
  const terapkan = kasus ? { judul: "Studi kasus", ket: kasus.judul, buka: () => go("kasus", { id: kasus.id }) }
    : sql ? { judul: "Tantangan SQL", ket: sql.T.judul, buka: () => go("sqllab", { i: sql.i }) }
    : { judul: "Kuis acak jalur", ket: "Campuran soal semua jalur", buka: () => mulaiSesi(kumpulRandom(10, "jalur"), { tipe: "random" }) };
  el("sesi-3").innerHTML = `<span class="sesi-no">3</span>
    <div class="sesi-teks"><b>Terapkan · ${esc(terapkan.judul)}</b><small>${esc(terapkan.ket)}</small></div>
    <button class="btn btn-garis" id="sesi-terapkan">Buka</button>`;
  el("sesi-terapkan").onclick = terapkan.buka;

  el("hero-chip").innerHTML = [`${semuaSoal().length.toLocaleString("id-ID")} soal`, `${TANTANGAN_SQL.length} tantangan SQL`, `${KASUS.length} studi kasus`, `${BUKU_SET.length} buku PDF`].map(t => `<span>${t}</span>`).join("");
  // kartu bergaya "featured work": gambar 3D, label kapital, judul besar
  el("jalur-kartu").innerHTML = Object.values(JALUR).map(J => {
    const p = progresJalur(J.id), modul = MATERI[J.topik], kuasai = modul.filter(b => babLulus(J.topik, b.k)).length;
    const kasus = KASUS.filter(k => k.jalur === J.id);
    return `<button class="jalur-kartu ${J.kelas}" data-j="${J.id}">
      <span class="jk-media"><b class="jk-huruf" aria-hidden="true">${J.huruf || J.id.toUpperCase()}</b>
        ${J.id === jalurUtama() ? `<span class="jk-utama">Jalur utama</span>` : ""}<span class="jk-persen">${p.persen}%</span></span>
      <span class="jk-stat">${J.tahap.length} tahap • ${modul.length} modul • ${kasus.length} kasus • ${BANK[J.topik].length} soal • capstone</span>
      <b class="jk-nama">${esc(J.nama)}</b>
      <span class="jk-slogan">${esc(J.slogan)}</span>
      <span class="mini-bar"><span style="width:${p.persen}%"></span></span>
      <span class="jk-ket">${kuasai}/${modul.length} modul dikuasai</span></button>`;
  }).join("");
  el("jalur-kartu").querySelectorAll("[data-j]").forEach(b => b.onclick = () => go("jalur", { j: b.dataset.j }));

  el("metode-grid").innerHTML = METODE.map(m => `<div class="metode-item">
    <span class="metode-ikon" aria-hidden="true">${m.ikon}</span><span class="metode-asal">${esc(m.asal)}</span>
    <b>${esc(m.nama)}</b><p>${esc(m.inti)}</p><p class="metode-fitur"><b>Di KodeQuiz:</b> ${esc(m.fitur)}</p></div>`).join("");
}

/* ============ Halaman jalur ============ */
function cincin(persen, kelas = "") {
  const K = 2 * Math.PI * 34;
  return `<svg class="cincin-jalur ${kelas}" viewBox="0 0 80 80" role="img" aria-label="${persen}% selesai"><circle class="cj-latar" cx="40" cy="40" r="34"/>
    <circle class="cj-isi" cx="40" cy="40" r="34" style="stroke-dasharray:${K};stroke-dashoffset:${K * (1 - persen / 100)}"/><text x="40" y="45" text-anchor="middle">${persen}%</text></svg>`;
}
function renderJalur(j) {
  const ks = Object.keys(JALUR), J = JALUR[j], p = progresJalur(j), n = langkahBerikut(j), lain = JALUR[ks[(ks.indexOf(j) + 1) % ks.length]];
  const tahapKini = n.tahap;
  const cap = DATA.capstone[j] = DATA.capstone[j] || [];
  const w = el("jalur-isi");
  w.className = "jalur " + J.kelas;
  w.innerHTML = `
  <header class="jalur-hero">
    <div class="jh-teks">
      <p class="eyebrow">Jalur karier · ${J.tahap.length} tahap · capstone</p>
      <h1 class="jh-judul">${esc(J.nama)}</h1>
      <p class="jh-slogan">${esc(J.slogan)}</p>
      <p class="jh-desk">${esc(J.deskripsi)}</p>
      <div class="jh-aksi">
        <button class="btn btn-utama btn-besar" id="jh-lanjut">Lanjutkan: ${esc(n.label)}<small class="btn-ket">${esc(n.jenis)}${n.tahap < J.tahap.length ? ` · Tahap ${n.tahap + 1}` : ""}</small></button>
        ${j === jalurUtama() ? `<span class="jk-utama">Jalur utama di beranda</span>` : `<button class="btn btn-garis" id="jh-utama">Jadikan jalur utama</button>`}
      </div>
    </div>
    <div class="jh-prog">${cincin(p.persen)}<small>${p.selesai}/${p.total} langkah</small></div>
  </header>

  <section class="blok jalur-hari">
    <div>
      <h2 class="sec-judul">Sehari sebagai ${esc(J.peran || J.nama)}</h2>
      <p class="sec-sub">Gambaran umum hari kerja di perusahaan teknologi atau korporasi di Indonesia.</p>
      <ol class="garis-waktu">${J.hari.map(([jam, isi]) => `<li><span>${jam}</span><p>${esc(isi)}</p></li>`).join("")}</ol>
    </div>
    <div>
      <h3 class="sub-judul">Keterampilan inti</h3>
      <div class="chip-baris">${J.keterampilan.map(k => `<span class="chip-skill">${esc(k)}</span>`).join("")}</div>
      <h3 class="sub-judul">Alur setiap tahap</h3>
      <ol class="alur-tahap">
        <li><b>Modul</b><span>materi + contoh bertahap, lalu soal dengan kunci keyakinan</span></li>
        <li><b>Tantangan SQL</b><span>tes gaya interview: jalankan, lalu kumpulkan</span></li>
        <li><b>Problem Set</b><span>MIT: soal campuran tahap ini dan sebelumnya, lulus ≥ 70%</span></li>
        <li><b>Tutorial</b><span>Oxford: tulis jawaban, hadapi pertanyaan tutor, nilai diri</span></li>
        <li><b>Studi kasus</b><span>Harvard: putuskan dulu, baru diskusi dibuka</span></li>
      </ol>
    </div>
  </section>

  <section class="blok">
    <h2 class="sec-judul">Peta belajar</h2>
    <p class="sec-sub">Kerjakan berurutan. Tahap yang sedang berjalan terbuka otomatis.</p>
    <div class="peta">${J.tahap.map((T, t) => renderTahap(j, t, t === tahapKini)).join("")}</div>
  </section>

  <section class="blok capstone" id="capstone-${j}">
    <p class="eyebrow">Proyek akhir · portofolio</p>
    <h2 class="sec-judul">${esc(J.capstone.judul)}</h2>
    <p class="sec-sub">${esc(J.capstone.dataKet)}</p>
    <a class="btn btn-garis" href="${J.capstone.data}" download>⬇ Unduh dataset (.csv)</a>
    <ol class="cap-langkah">${J.capstone.langkah.map(([n, isi], i) => `<li><label class="cek-kotak"><input type="checkbox" data-cap="${i}" ${cap[i] ? "checked" : ""}><span></span></label>
      <div><b>${esc(n)}</b><p>${esc(isi)}</p></div></li>`).join("")}</ol>
    <details class="lab-lipat"><summary>Rubrik penilaian</summary><ul>${J.capstone.rubrik.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
      <p class="kecil">Nilai dirimu jujur dengan rubrik ini sebelum menaruh proyek di portofolio. Minta satu orang lain membaca memo atau model card-mu.</p></details>
  </section>

  <section class="blok">
    <h2 class="sec-judul">Studi kasus dunia kerja</h2>
    <p class="sec-sub">Situasi kerja dari Indonesia (perusahaan fiktif, konteks nyata) dan luar negeri (kejadian terdokumentasi). Kamu harus memutuskan sebelum diskusi terbuka.</p>
    <div class="kasus-grid">${KASUS.filter(k => k.jalur === j).map(kartuKasus).join("")}</div>
  </section>

  <button class="jalur-lain ${lain.kelas}" id="jalur-lain"><span>Jalur lain</span><b>${esc(lain.nama)} →</b><small>${esc(lain.slogan)}</small></button>`;

  el("jh-lanjut").onclick = n.buka;
  const u = el("jh-utama"); if (u) u.onclick = () => { DATA.pref.jalur = j; simpan(); renderJalur(j); toast(`${J.nama} menjadi jalur utama di beranda.`); };
  el("jalur-lain").onclick = () => go("jalur", { j: lain.id }, { replace: true });
  w.querySelectorAll("[data-cap]").forEach(c => c.onchange = () => { cap[+c.dataset.cap] = c.checked; simpan(); if (c.checked) { catatAktivitas(); RAYA.nada("klik"); } });
  w.querySelectorAll("[data-buka]").forEach(b => b.onclick = () => {
    const [t, i] = b.dataset.buka.split(":").map(Number);
    itemTahap(j, t)[i].buka();
  });
  w.querySelectorAll("[data-materi]").forEach(b => b.onclick = () => { const [t, k] = b.dataset.materi.split(":"); go("materi", { t, i: idxModul(t, k) }); });
  w.querySelectorAll("[data-kasus]").forEach(b => b.onclick = () => go("kasus", { id: b.dataset.kasus }));
}
function renderTahap(j, t, kini) {
  const J = JALUR[j], T = J.tahap[t], item = itemTahap(j, t), sel = item.filter(x => x.selesai).length;
  const tombol = (x, i, kelas = "") => `<button class="ti ${kelas} ${x.selesai ? "ti-ok" : ""}" data-buka="${t}:${i}"><span class="ti-st">${x.selesai ? "✓" : "○"}</span>
    <span class="ti-teks"><small>${esc(x.jenis)}</small>${esc(x.label)}</span></button>`;
  const modul = item.map((x, i) => [x, i]).filter(([x]) => x.jenis === "Modul");
  const sql = item.map((x, i) => [x, i]).filter(([x]) => x.jenis === "Tantangan SQL");
  const sisa = item.map((x, i) => [x, i]).filter(([x]) => !["Modul", "Tantangan SQL"].includes(x.jenis));
  const skor = psetSkor(j, t);
  return `<details class="tahap ${sel === item.length ? "tahap-tuntas" : ""} ${kini ? "tahap-kini" : ""}" ${kini ? "open" : ""}>
    <summary><span class="tahap-no">${t + 1}</span><span class="tahap-judul"><b>${esc(T.judul)}</b><small>${esc(T.tujuan)}</small></span>
      <span class="tahap-prog"><span class="mini-bar"><span style="width:${sel / item.length * 100}%"></span></span><small>${sel}/${item.length}</small></span></summary>
    <div class="tahap-isi">
      <h4>Modul</h4><div class="ti-grid">${modul.map(([x, i]) => {
        const k = T.modul[i], jml = soalBab(J.topik, k).length, pr = DATA.bab[J.topik + "-" + k];
        return tombol({ ...x, label: `${x.label} · ${jml} soal${pr ? ` · terbaik ${pr.persen}%` : ""}` }, i);
      }).join("")}</div>
      ${T.perkuat.length ? `<p class="perkuat">Perkuat dasar: ${T.perkuat.map(([tp, k]) => idxModul(tp, k) >= 0 ? `<button class="chip-link" data-materi="${tp}:${k}">${esc(TOPIK_INFO[tp].nama)} · ${esc(MATERI[tp][idxModul(tp, k)].judul.split(/ — | & |:/)[0])}${babLulus(tp, k) ? " ✓" : ""}</button>` : "").join("")}</p>` : ""}
      ${sql.length ? `<h4>Tantangan SQL (gaya tes interview)</h4><div class="ti-grid">${sql.map(([x, i]) => tombol(x, i)).join("")}</div>` : ""}
      <h4>Problem Set, Tutorial & Kasus</h4>
      <div class="ti-grid">${sisa.map(([x, i]) => tombol(x.jenis === "Problem Set" ? { ...x, label: `${x.label} · 10 soal campuran${skor ? ` · terbaik ${skor}%` : ""}` } : x, i, "ti-" + x.jenis.split(" ")[0].toLowerCase())).join("")}</div>
    </div></details>`;
}
function kartuKasus(k) {
  const s = DATA.kasus[k.id];
  return `<button class="kasus-kartu" data-kasus="${k.id}">
    <span class="kk-atas"><span class="kk-wilayah w-${k.wilayah === "Global" ? "gl" : "id"}">${WILAYAH[k.wilayah]}</span><span class="kk-industri">${esc(k.industri)}</span>${kasusSelesai(k.id) ? `<span class="tag-selesai">✓ Diputuskan</span>` : ""}</span>
    <b>${esc(k.judul)}</b><small>${esc(k.ringkas)}</small>${s && s.pilih != null ? "" : `<span class="kk-cta">Baca & putuskan →</span>`}</button>`;
}

/* ============ Studi kasus (metode kasus Harvard Business School) ============ */
let TIMER_COLD = null;
function renderKasus(id) {
  clearInterval(TIMER_COLD);
  const K = kasusById(id), J = JALUR[K.jalur];
  const S = DATA.kasus[id] = DATA.kasus[id] || { persiapan: {}, cold: "", pilih: null, alasan: "" };
  const terkunci = S.pilih != null;
  const w = el("kasus-isi");
  w.className = "kasus " + J.kelas;
  w.innerHTML = `
  <p class="eyebrow">Studi kasus · ${esc(J.nama)} · ${esc(K.industri)}</p>
  <h2 class="set-h">${esc(K.judul)}</h2>
  <p class="kasus-meta"><span class="kk-wilayah w-${K.wilayah === "Global" ? "gl" : "id"}">${WILAYAH[K.wilayah]}</span> <b>Peranmu:</b> ${esc(K.peran)}</p>
  <ol class="kasus-langkah" aria-label="Alur kasus"><li>Baca</li><li>Persiapan</li><li>Cold call</li><li>Putuskan</li><li ${terkunci ? 'class="ok"' : ""}>Diskusi</li></ol>

  <section class="kasus-blok"><h3><span>1</span> Situasi</h3><div class="materi-kotak">${K.cerita}${K.exhibit}</div></section>

  <section class="kasus-blok"><h3><span>2</span> Pertanyaan persiapan</h3>
    <p class="sec-sub">Seperti mahasiswa HBS menyiapkan kasus sebelum kelas: jawab dulu, lalu baca penjelasannya.</p>
    <div class="persiapan">${K.persiapan.map((q, i) => { const u = acak(q.o.map((_, x) => x)); return `<div class="pq" data-q="${i}" data-urut="${u.join(",")}"><p class="pq-tanya"><b>${i + 1}.</b> ${esc(q.q)}</p>
      <div class="pq-opsi">${u.map((x, pos) => `<button class="pq-btn" data-x="${x}">${HURUF[pos]}. ${esc(q.o[x])}</button>`).join("")}</div><div class="pq-jelas"></div></div>`; }).join("")}</div></section>

  <section class="kasus-blok"><h3><span>3</span> Cold call</h3>
    <p class="sec-sub">Di kelas HBS, dosen bisa menunjuk siapa saja untuk membuka diskusi. Latih jawaban singkat dan terstruktur dalam 90 detik.</p>
    <div id="cold-wadah"></div></section>

  <section class="kasus-blok"><h3><span>4</span> Keputusanmu</h3>
    <p class="kasus-tanya"><b>${esc(K.keputusan.tanya)}</b></p>
    <div class="opsi-kasus">${urutKasus(K).map(x => { const o = K.keputusan.opsi[x]; return `<label class="ok-opsi ${S.pilih === x ? "dipilih" : ""}"><input type="radio" name="kasus-pilih" value="${x}" ${S.pilih === x ? "checked" : ""} ${terkunci ? "disabled" : ""}>
      <span class="ok-huruf">${hurufOpsi(K, x)}</span><span>${esc(o.teks)}</span></label>`; }).join("")}</div>
    <label class="kasus-label" for="kasus-alasan">Alasanmu (minimal 2 kalimat: data apa yang mendukung, dan risiko apa yang kamu terima)</label>
    <textarea id="kasus-alasan" class="tulis" rows="4" ${terkunci ? "readonly" : ""} placeholder="Saya memilih … karena …">${esc(S.alasan || "")}</textarea>
    ${terkunci ? `<p class="kecil">Keputusan dikunci ${S.t ? tglJam(S.t) : ""}. <button class="btn-mini" id="kasus-ulang">Putuskan ulang</button></p>` : `<button class="btn btn-utama" id="kasus-kunci">Kunci keputusan & buka diskusi</button>`}
  </section>

  <section class="kasus-blok ${terkunci ? "" : "tersembunyi"}" id="kasus-diskusi"><h3><span>5</span> Diskusi kelas</h3>
    <div class="diskusi">${urutKasus(K).map(x => [K.keputusan.opsi[x], x]).map(([o, x]) => `<div class="dk ${o.kuat ? "dk-kuat" : ""} ${S.pilih === x ? "dk-pilih" : ""}">
      <p class="dk-kepala"><span class="ok-huruf">${hurufOpsi(K, x)}</span>${S.pilih === x ? `<span class="tag-pilihanmu">pilihanmu</span>` : ""}${o.kuat ? `<span class="tag-kuat">argumen terkuat menurut catatan pengajar</span>` : ""}</p>
      <p class="dk-teks">${esc(o.teks)}</p><p>${esc(o.diskusi)}</p></div>`).join("")}</div>
    <div class="materi-kotak catatan-pengajar"><h4>Catatan pengajar</h4>${K.catatan}
      <h4>Pelajaran</h4><ul>${K.pelajaran.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
      ${K.sumber ? `<p class="kecil"><b>Sumber:</b> ${esc(K.sumber)}</p>` : `<p class="kecil">Perusahaan dan angka dalam kasus ini fiktif; situasinya diambil dari pola pekerjaan nyata.</p>`}
      <p class="perkuat">Modul terkait: ${K.modul.map(([jt, k]) => `<button class="chip-link" data-materi="${jt}:${k}">${esc(MATERI[jt][idxModul(jt, k)].judul)}</button>`).join("")}</p></div>
    <p class="kecil">Di kelas kasus, tidak ada satu jawaban yang mutlak benar. Yang dinilai adalah kualitas alasan: data yang dipakai, asumsi yang disadari, dan risiko yang dikelola.</p>
    <button class="btn btn-garis" id="kasus-berikut">Kasus berikutnya →</button>
  </section>`;

  // persiapan
  w.querySelectorAll(".pq").forEach(d => {
    const i = +d.dataset.q, q = K.persiapan[i], urut = d.dataset.urut.split(",").map(Number);
    const tampil = x => {
      d.querySelectorAll(".pq-btn").forEach(b => { const y = +b.dataset.x; b.disabled = true; b.classList.toggle("benar", y === q.a); b.classList.toggle("salah", y === x && x !== q.a); });
      d.querySelector(".pq-jelas").innerHTML = `<p class="${x === q.a ? "jb-ok" : "jb-no"}"><b>${x === q.a ? "✓ Tepat." : `✗ Jawaban yang tepat: ${HURUF[urut.indexOf(q.a)]}.`}</b> ${esc(q.e)}</p>`;
    };
    if (S.persiapan[i] != null) tampil(S.persiapan[i]);
    d.querySelectorAll(".pq-btn").forEach(b => b.onclick = () => { S.persiapan[i] = +b.dataset.x; simpan(); tampil(+b.dataset.x); RAYA.nada(+b.dataset.x === q.a ? "benar" : "klik"); });
  });
  renderColdCall(K, S);
  w.querySelectorAll("input[name=kasus-pilih]").forEach(r => r.onchange = () => w.querySelectorAll(".ok-opsi").forEach(l => l.classList.toggle("dipilih", l.contains(r) && r.checked)));
  el("kasus-alasan").oninput = e => { if (!terkunci) { S.alasan = e.target.value; simpan(); } };
  const kunci = el("kasus-kunci");
  if (kunci) kunci.onclick = () => {
    const pilih = w.querySelector("input[name=kasus-pilih]:checked"), alasan = el("kasus-alasan").value.trim();
    if (!pilih) return toast("Pilih satu keputusan dulu.");
    if (alasan.length < 60) return toast("Tulis alasanmu minimal dua kalimat (sekitar 60 karakter).");
    const pertama = !DATA.kasus[id].pernah;
    Object.assign(S, { pilih: +pilih.value, alasan, t: Date.now(), pernah: true });
    if (pertama) { DATA.xp += 30; catatStreak(); catatAktivitas(3); }
    simpan(); renderStat();
    renderKasus(id);
    if (pertama) RAYA.melayang(el("kasus-diskusi"), "+30 XP");
    setTimeout(() => { el("kasus-diskusi").scrollIntoView({ behavior: "smooth", block: "start" }); umumkanLencana(cekLencana()); }, 120);
  };
  const ulang = el("kasus-ulang");
  if (ulang) ulang.onclick = () => { S.pilih = null; simpan(); renderKasus(id); };
  w.querySelectorAll("[data-materi]").forEach(b => b.onclick = () => { const [t, k] = b.dataset.materi.split(":"); go("materi", { t, i: idxModul(t, k) }); });
  const daftar = KASUS.filter(k => k.jalur === K.jalur), nx = daftar[(daftar.indexOf(K) + 1) % daftar.length];
  el("kasus-berikut").textContent = `Kasus berikutnya: ${nx.judul} →`;
  el("kasus-berikut").onclick = () => go("kasus", { id: nx.id }, { replace: true });
}
function renderColdCall(K, S) {
  const w = el("cold-wadah");
  if (S.cold) {
    w.innerHTML = `<div class="cold-hasil"><p class="kecil">Pertanyaanmu: <i>${esc(S.coldTanya || "")}</i></p><p>${esc(S.cold)}</p>
      <button class="btn-mini" id="cold-lagi">Latih lagi dengan pertanyaan lain</button></div>`;
    el("cold-lagi").onclick = () => { S.cold = ""; simpan(); renderColdCall(K, S); el("cold-mulai").click(); };
    return;
  }
  w.innerHTML = `<button class="btn btn-garis" id="cold-mulai">🎤 Mulai cold call (90 detik)</button>`;
  el("cold-mulai").onclick = () => {
    const q = K.coldcall[Math.floor(Math.random() * K.coldcall.length)];
    let sisa = 90;
    w.innerHTML = `<div class="cold-aktif"><p class="cold-q">${esc(q)}</p><p class="cold-timer" id="cold-timer">1:30</p>
      <textarea id="cold-jawab" class="tulis" rows="3" placeholder="Jawab singkat: kesimpulan dulu, lalu satu angka pendukung."></textarea>
      <button class="btn btn-utama btn-kecil" id="cold-selesai">Selesai</button></div>`;
    el("cold-jawab").focus();
    const selesai = () => {
      clearInterval(TIMER_COLD);
      const v = (el("cold-jawab") || {}).value || "";
      if (!v.trim()) { toast("Waktu habis. Coba lagi: kesimpulan dulu, angka kemudian."); return renderColdCall(K, S); }
      S.cold = v.trim(); S.coldTanya = q; simpan(); catatAktivitas(); renderColdCall(K, S);
    };
    el("cold-selesai").onclick = selesai;
    clearInterval(TIMER_COLD);
    TIMER_COLD = setInterval(() => {
      sisa--;
      const t = el("cold-timer");
      if (!t) return clearInterval(TIMER_COLD);
      t.textContent = `${Math.floor(sisa / 60)}:${String(sisa % 60).padStart(2, "0")}`;
      t.classList.toggle("habis", sisa <= 15);
      if (sisa <= 0) selesai();
    }, 1000);
  };
}

/* ============ Tutorial (sistem tutorial Oxford) ============ */
const NILAI_RUBRIK = ["Belum", "Sebagian", "Sudah"];
function renderTutorial(j, t) {
  const J = JALUR[j], T = J.tahap[t].tutorial, key = kunciTut(j, t);
  const S = DATA.tutorial[key] = DATA.tutorial[key] || { esai: "", kirim: false, jawab: [], nilai: [], selesai: false };
  const w = el("tutorial-isi");
  w.className = "tutorial " + J.kelas;
  const nJawab = S.jawab.length, semuaDijawab = S.kirim && nJawab >= T.pertanyaan.length;
  w.innerHTML = `
  <p class="eyebrow">Tutorial · ${esc(J.nama)} · Tahap ${t + 1}</p>
  <h2 class="set-h">${esc(T.judul)}</h2>
  <p class="set-sub">Seperti tutorial di Oxford: kamu menulis dulu, lalu tutor menantang jawabanmu dengan pertanyaan, baru kamu membandingkan dengan jawaban model dan menilai diri sendiri.</p>
  <ol class="kasus-langkah"><li class="${S.kirim ? "ok" : ""}">Tulis</li><li class="${semuaDijawab ? "ok" : ""}">Pertanyaan tutor</li><li class="${S.selesai ? "ok" : ""}">Bandingkan & nilai</li></ol>

  <section class="kasus-blok"><h3><span>1</span> Tugas tertulis</h3>
    <div class="materi-kotak"><p>${esc(T.tugas)}</p></div>
    <textarea id="tut-esai" class="tulis" rows="8" ${S.kirim ? "readonly" : ""} placeholder="Tulis dengan kata-katamu sendiri. Tidak perlu sempurna; yang penting jujur dengan pemahamanmu sekarang.">${esc(S.esai)}</textarea>
    <p class="kecil" id="tut-hitung"></p>
    ${S.kirim ? "" : `<button class="btn btn-utama" id="tut-kirim">Kirim ke tutor</button>`}
  </section>

  <section class="kasus-blok ${S.kirim ? "" : "tersembunyi"}"><h3><span>2</span> Pertanyaan tutor</h3>
    <p class="sec-sub">Tutor tidak memberi jawaban. Ia menanyakan alasanmu. Jawab satu per satu.</p>
    ${T.pertanyaan.map((q, i) => i < nJawab ? `<div class="tut-qa"><p class="tut-q">🎓 ${esc(q)}</p><p class="tut-a">${esc(S.jawab[i])}</p></div>`
      : i === nJawab && S.kirim ? `<div class="tut-qa aktif"><p class="tut-q">🎓 ${esc(q)}</p><textarea id="tut-jawab" class="tulis" rows="3" placeholder="Jawabanmu…"></textarea>
        <button class="btn btn-utama btn-kecil" id="tut-jawab-kirim">Jawab</button></div>` : "").join("")}
  </section>

  <section class="kasus-blok ${semuaDijawab ? "" : "tersembunyi"}"><h3><span>3</span> Jawaban model & penilaian diri</h3>
    <div class="materi-kotak">${T.model}</div>
    <p class="sec-sub">Bandingkan dengan tulisanmu. Untuk setiap kriteria, pilih sejujurnya.</p>
    <div class="rubrik">${T.rubrik.map((r, i) => `<div class="rb-baris"><span>${esc(r)}</span><span class="segmen">${NILAI_RUBRIK.map((n, v) => `<button data-r="${i}" data-v="${v}" class="${S.nilai[i] === v ? "aktif" : ""}">${n}</button>`).join("")}</span></div>`).join("")}</div>
    <div id="tut-umpan"></div>
    <button class="btn btn-utama" id="tut-selesai">${S.selesai ? "Perbarui penilaian" : "Simpan penilaian & selesai"}</button>
    <button class="btn-mini" id="tut-ulang">Ulangi tutorial dari awal</button>
  </section>`;

  const esai = el("tut-esai"), hitung = () => { const n = esai.value.trim().split(/\s+/).filter(Boolean).length; el("tut-hitung").textContent = `${n} kata${S.kirim ? "" : " · disarankan sekitar 150"}`; };
  hitung();
  esai.oninput = () => { if (!S.kirim) { S.esai = esai.value; simpan(); } hitung(); };
  const kirim = el("tut-kirim");
  if (kirim) kirim.onclick = () => {
    if (esai.value.trim().split(/\s+/).length < 40) return toast("Tulis minimal sekitar 40 kata supaya tutor punya bahan untuk ditanyakan.");
    S.esai = esai.value.trim(); S.kirim = true; simpan(); catatAktivitas(2); renderTutorial(j, t);
  };
  const jb = el("tut-jawab-kirim");
  if (jb) { el("tut-jawab").focus({ preventScroll: true }); jb.onclick = () => {
    const v = el("tut-jawab").value.trim();
    if (v.length < 30) return toast("Jawab dengan satu-dua kalimat yang menjelaskan alasanmu.");
    S.jawab.push(v); simpan(); catatAktivitas(); renderTutorial(j, t);
  }; }
  w.querySelectorAll("[data-r]").forEach(b => b.onclick = () => { S.nilai[+b.dataset.r] = +b.dataset.v; simpan(); renderUmpanTutorial(T, S); w.querySelectorAll(`[data-r="${b.dataset.r}"]`).forEach(x => x.classList.toggle("aktif", x === b)); });
  renderUmpanTutorial(T, S);
  el("tut-selesai").onclick = () => {
    if (T.rubrik.some((_, i) => S.nilai[i] == null)) return toast("Nilai semua kriteria dulu.");
    const pertama = !S.selesai;
    S.selesai = true; S.t = Date.now();
    if (pertama) { DATA.xp += 25; catatStreak(); catatAktivitas(2); RAYA.konfeti(1, el("tut-selesai")); RAYA.nada("menang"); }
    simpan(); renderStat(); umumkanLencana(cekLencana());
    toast(pertama ? "Tutorial selesai. +25 XP" : "Penilaian diperbarui.");
    go("jalur", { j }, { replace: true });
  };
  el("tut-ulang").onclick = () => tanya({ judul: "Ulangi tutorial?", pesan: "Tulisan dan jawabanmu untuk tutorial ini akan dihapus. XP yang sudah didapat tetap.", ya: "Ulangi", bahaya: true })
    .then(ok => { if (!ok) return; DATA.tutorial[key] = { esai: "", kirim: false, jawab: [], nilai: [], selesai: S.selesai }; simpan(); renderTutorial(j, t); });
}
function renderUmpanTutorial(T, S) {
  const nilai = T.rubrik.map((_, i) => S.nilai[i]);
  if (nilai.some(v => v == null)) { el("tut-umpan").innerHTML = ""; return; }
  const skor = nilai.reduce((a, b) => a + b, 0), maks = T.rubrik.length * 2;
  const fokus = T.rubrik.filter((_, i) => nilai[i] < 2);
  el("tut-umpan").innerHTML = `<div class="feedback ${skor === maks ? "fb-benar" : "fb-petunjuk"}"><b>Skor ${skor}/${maks}.</b>
    ${fokus.length ? `Fokus perbaikan berikutnya: ${fokus.map(f => `<i>${esc(f.toLowerCase())}</i>`).join("; ")}. Tulis ulang bagian itu besok tanpa melihat jawaban model.` : "Semua kriteria terpenuhi. Coba jelaskan ulang topik ini kepada orang lain minggu depan."}</div>`;
}

/* ============ Materi jalur: self-explanation & posisi di peta ============ */
function jalurSetelahMateri(t, i) {
  if (!TOPIK_INFO[t] || TOPIK_INFO[t].grup !== "jalur") return;
  const J = JALUR[t], k = MATERI[t][i].k, tahap = J.tahap.findIndex(T => T.modul.includes(k));
  el("materi-eyebrow").textContent = `${J.nama} · Tahap ${tahap + 1}: ${J.tahap[tahap].judul} · Modul ${i + 1} dari ${MATERI[t].length}`;
  const kunci = t + "-" + k, box = document.createElement("div");
  box.className = "jelaskan";
  box.innerHTML = `<h4>✎ Jelaskan dengan kata-katamu</h4>
    <p class="kecil">Tanpa melihat materi di atas, tulis 2–3 kalimat seolah menjelaskan kepada teman yang baru belajar. Menjelaskan sendiri (self-explanation) membuat konsep lebih melekat, dan tutor Oxford di akhir tahap akan meminta hal serupa.</p>
    <textarea class="tulis" rows="3" placeholder="Intinya, …">${esc(DATA.catatan[kunci] || "")}</textarea><small class="kecil jelaskan-st"></small>`;
  el("materi-isi").appendChild(box);
  const ta = box.querySelector("textarea"), st = box.querySelector(".jelaskan-st");
  let jeda = null;
  ta.oninput = () => { clearTimeout(jeda); jeda = setTimeout(() => { DATA.catatan[kunci] = ta.value; simpan(); st.textContent = "Tersimpan."; }, 400); };
  // Lembar kunci jawaban bergambar (alat/buat-kunci-gambar.js). Gambar di dalam <details> tertutup baru dimuat saat dibuka.
  const kg = typeof KUNCI_GAMBAR !== "undefined" && KUNCI_GAMBAR[t] && KUNCI_GAMBAR[t][k];
  if (kg) {
    const d = document.createElement("details");
    d.className = "kunci-gambar";
    d.innerHTML = `<summary>🖼 Kunci jawaban modul ini · ${kg.length} gambar HD</summary>
      <p class="kecil">Buka setelah mengerjakan soal. Ketuk gambar untuk melihat ukuran penuh (lebar 2160 px), atau unduh untuk disimpan di galeri HP. Urutan opsi di kuis diacak, jadi cocokkan teks jawabannya.</p>
      <div class="kg-grid">${kg.map((f, i) => `<figure><a href="${f}" target="_blank" rel="noopener"><img src="${f}" alt="Lembar kunci jawaban ${i + 1} dari ${kg.length}" loading="lazy"></a>
        <figcaption>Lembar ${i + 1} · <a href="${f}" download>Unduh</a></figcaption></figure>`).join("")}</div>`;
    el("materi-isi").appendChild(d);
  }
}

/* ---------- Contoh bertahap (worked → faded → mandiri): periksa isian ---------- */
function periksaBertahap(blok) {
  const isian = [...blok.querySelectorAll(".bt-isian")], hasil = blok.querySelector(".bt-hasil");
  let benar = 0, terisi = 0;
  isian.forEach(inp => {
    const v = inp.value.trim();
    inp.classList.remove("benar", "salah");
    if (!v) return;
    terisi++;
    const ok = inp.dataset.jawab.split("|").some(x => norm(x) === norm(v));
    inp.classList.add(ok ? "benar" : "salah");
    if (ok) benar++;
  });
  if (terisi < isian.length) { hasil.textContent = `Isi semua kotak dulu (${terisi}/${isian.length}).`; return; }
  if (benar < isian.length) { hasil.textContent = `${benar}/${isian.length} benar. Coba lagi, atau buka pembahasan.`; RAYA.nada("klik"); return; }
  hasil.textContent = "✓ Semua benar. Baca pembahasannya untuk memastikan alasanmu juga tepat.";
  const id = blok.dataset.id;
  if (id && !DATA.bertahap[id]) { DATA.bertahap[id] = Date.now(); DATA.xp += 5; catatAktivitas(); simpan(); renderStat(); RAYA.melayang(hasil, "+5 XP"); }
  RAYA.nada("benar");
}
document.addEventListener("click", e => { const b = e.target.closest(".bt-cek"); if (b) periksaBertahap(b.closest(".bertahap")); });
document.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.classList && e.target.classList.contains("bt-isian")) { e.preventDefault(); periksaBertahap(e.target.closest(".bertahap")); } });

/* ============ Kemajuan ============ */
function renderKemajuan() {
  const L = infoLevel(DATA.xp), kartu = Object.values(DATA.kartu);
  const b = kartu.reduce((n, k) => n + (k.b || 0), 0), s = kartu.reduce((n, k) => n + (k.s || 0), 0);
  const hariAktif = Object.keys(DATA.harian).length, { due, buta } = hitungJatuhTempo();
  const kal = ["yakin", "ragu", "tebak"].map(y => { const k = DATA.kalibrasi[y] || { b: 0, s: 0 }, n = k.b + k.s; return { y, n, p: n ? Math.round(k.b / n * 100) : null }; });
  const ky = kal[0];
  const saranKal = !ky.n ? "Belum ada data. Kunci jawaban dengan tingkat keyakinan di setiap kuis untuk melihat kalibrasimu."
    : ky.n < 10 ? "Datanya masih sedikit. Teruskan; setelah 10 jawaban 'Yakin' polanya mulai terlihat."
    : ky.p >= 85 ? "Kalibrasi bagus: saat kamu yakin, kamu biasanya benar."
    : ky.p >= 70 ? "Cukup baik, tetapi ada beberapa miskonsepsi. Latih titik buta sampai habis."
    : "Kamu sering yakin padahal salah. Pelankan sedikit: sebelum mengunci, sebutkan alasanmu dalam hati.";
  const topik = Object.keys(TOPIK_INFO).map(t => ({ t, ...persenTopik(t) })).sort((a, b) => b.persen - a.persen);
  const lemah = Object.entries(DATA.bab).filter(([, v]) => v.persen < 70).sort((a, b) => a[1].persen - b[1].persen).slice(0, 5)
    .map(([key, v]) => { const i = key.indexOf("-"), t = key.slice(0, i), k = key.slice(i + 1); return MATERI[t] ? { t, k, i: idxModul(t, k), v } : null; }).filter(x => x && x.i >= 0);
  const keputusan = KASUS.filter(k => kasusSelesai(k.id));

  el("kemajuan-isi").innerHTML = `
  <div class="km-ringkas">
    <div class="km-angka"><b>Lv ${L.lv}</b><small>${esc(L.nama)} · ${DATA.xp.toLocaleString("id-ID")} XP</small></div>
    <div class="km-angka"><b>${DATA.streak.hari}</b><small>hari beruntun</small></div>
    <div class="km-angka"><b>${hariAktif}</b><small>hari aktif</small></div>
    <div class="km-angka"><b>${(b + s) ? Math.round(b / (b + s) * 100) + "%" : "–"}</b><small>ketepatan (${(b + s).toLocaleString("id-ID")} jawaban)</small></div>
  </div>

  <section class="blok"><h2 class="sec-judul">Aktivitas 16 minggu</h2>
    <p class="sec-sub">Setiap kotak satu hari. Makin gelap, makin banyak soal, tantangan, kasus, dan tutorial yang dikerjakan. Belajar sedikit tetapi rutin lebih kuat daripada maraton.</p>
    ${petaAktivitas()}</section>

  <section class="blok"><h2 class="sec-judul">Jalur karier</h2><div class="km-jalur">${Object.values(JALUR).map(J => {
    const p = progresJalur(J.id), n = langkahBerikut(J.id);
    return `<div class="km-j ${J.kelas}"><p class="km-j-kepala"><b>${esc(J.nama)}</b><span>${p.persen}%</span></p>
      ${J.tahap.map((T, t) => { const it = itemTahap(J.id, t), sel = it.filter(x => x.selesai).length;
        return `<div class="km-tahap"><small>${t + 1}. ${esc(T.judul)}</small><span class="mini-bar"><span style="width:${sel / it.length * 100}%"></span></span><small>${sel}/${it.length}</small></div>`; }).join("")}
      <button class="btn-mini km-lanjut" data-j="${J.id}">Berikutnya: ${esc(n.label)} →</button></div>`;
  }).join("")}</div></section>

  <section class="blok"><h2 class="sec-judul">Kalibrasi keyakinan</h2>
    <p class="sec-sub">Dari fitur kunci jawaban (Peer Instruction, Eric Mazur). Idealnya: jawaban "Yakin" hampir selalu benar, dan "Menebak" sekitar setengahnya.</p>
    <div class="km-kal">${kal.map(k => `<div class="km-kal-baris"><span class="km-kal-y">${{ yakin: "Yakin", ragu: "Ragu", tebak: "Menebak" }[k.y]}</span>
      <span class="mini-bar"><span style="width:${k.p || 0}%"></span></span><span>${k.p == null ? "–" : k.p + "% benar"} <small>(${k.n})</small></span></div>`).join("")}</div>
    <p class="km-saran">${saranKal}</p>
    <div class="km-aksi"><button class="btn btn-utama" id="km-buta" ${buta ? "" : "disabled"}>🎯 Latih titik buta (${buta})</button>
      <button class="btn btn-garis" id="km-ulang" ${due ? "" : "disabled"}>Ulangan Pintar (${due} jatuh tempo)</button></div>
  </section>

  <section class="blok"><h2 class="sec-judul">Penguasaan per topik</h2>
    <div class="km-topik">${topik.map(x => `<button class="km-t ${TOPIK_INFO[x.t].kelas}" data-t="${x.t}"><span>${esc(TOPIK_INFO[x.t].nama)}</span>
      <span class="mini-bar"><span style="width:${x.persen}%"></span></span><small>${x.selesai}/${x.total} bab</small></button>`).join("")}</div>
    ${lemah.length ? `<h3 class="sub-judul">Bab yang perlu diulang (skor terbaik &lt; 70%)</h3><div class="ti-grid">${lemah.map(x => `<button class="ti" data-lemah="${x.t}:${x.i}"><span class="ti-st">${x.v.persen}%</span>
      <span class="ti-teks"><small>${esc(TOPIK_INFO[x.t].nama)}</small>${esc(MATERI[x.t][x.i].judul)}</span></button>`).join("")}</div>` : ""}
  </section>

  <section class="blok"><h2 class="sec-judul">Keputusan kasus</h2>
    ${keputusan.length ? `<div class="km-kasus">${keputusan.map(k => { const S = DATA.kasus[k.id], o = k.keputusan.opsi[S.pilih];
      return `<button class="km-k" data-kasus="${k.id}"><b>${esc(k.judul)}</b><small>Pilihanmu: ${hurufOpsi(k, S.pilih)}${o.kuat ? " · sama dengan argumen terkuat catatan pengajar" : " · bandingkan lagi dengan diskusi kelas"}</small></button>`; }).join("")}</div>`
      : `<p class="cek-kosong">Belum ada kasus yang diputuskan. Mulai dari halaman jalur.</p>`}
  </section>`;
  renderLencana();
  el("km-buta").onclick = () => mulaiSesi(acak(semuaSoal().filter(x => DATA.kartu[x.id] && DATA.kartu[x.id].tb)).slice(0, 15), { tipe: "buta" });
  el("km-ulang").onclick = () => mulaiSesi(kumpulPintar(15), { tipe: "pintar" });
  document.querySelectorAll(".km-lanjut").forEach(x => x.onclick = () => langkahBerikut(x.dataset.j).buka());
  document.querySelectorAll(".km-t").forEach(x => x.onclick = () => TOPIK_INFO[x.dataset.t].grup === "jalur" ? go("jalur", { j: x.dataset.t }) : go("topik", { t: x.dataset.t }));
  document.querySelectorAll("[data-lemah]").forEach(x => x.onclick = () => { const [t, i] = x.dataset.lemah.split(":"); go("materi", { t, i: +i }); });
  document.querySelectorAll("#kemajuan-isi [data-kasus]").forEach(x => x.onclick = () => go("kasus", { id: x.dataset.kasus }));
}
function petaAktivitas() {
  const MINGGU = 16, hari = new Date(); hari.setHours(0, 0, 0, 0);
  const mulai = new Date(hari); mulai.setDate(hari.getDate() - ((hari.getDay() + 6) % 7) - (MINGGU - 1) * 7);   // Senin, 15 minggu lalu
  const sel = [];
  for (let d = new Date(mulai); d <= hari; d.setDate(d.getDate() + 1)) {
    const n = DATA.harian[tglISO(d)] || 0, lv = n === 0 ? 0 : n < 10 ? 1 : n < 25 ? 2 : 3;
    sel.push(`<i class="pa-${lv}" title="${d.toLocaleDateString("id-ID", { weekday: "short", day: "numeric", month: "short" })}: ${n} aktivitas"></i>`);
  }
  return `<div class="peta-aktif" role="img" aria-label="Peta aktivitas belajar 16 minggu terakhir">${sel.join("")}</div>
    <p class="pa-legenda"><small>Sedikit</small><i class="pa-0"></i><i class="pa-1"></i><i class="pa-2"></i><i class="pa-3"></i><small>Banyak</small></p>`;
}

/* ---------- Media 3D beranda: klik untuk ganti warna, sedikit paralaks ----------
   Empat varian dirender dari susunan objek yang sama (alat/render-3d.html ?warna=0..3), jadi yang berubah hanya warnanya.
   Pergantian memakai dua gambar bertumpuk dan transisi opacity; paralaks hanya transform. */
(function () {
  const fig = el("hero-media");
  if (!fig) return;
  const img = fig.querySelector("img"), N = 4;
  const sumber = k => ({ src: `atelier/img/hero-3d-${k}-2000.webp`, srcset: `atelier/img/hero-3d-${k}-1000.webp 1000w, atelier/img/hero-3d-${k}-2000.webp 2000w` });
  let k = 0, sibuk = false;
  const ganti = () => {
    if (sibuk) return;
    sibuk = true; k = (k + 1) % N;
    const baru = img.cloneNode();
    Object.assign(baru, sumber(k));
    baru.classList.add("hero-baru");
    baru.onload = () => { fig.appendChild(baru); requestAnimationFrame(() => baru.classList.add("tampil")); setTimeout(() => { img.src = baru.src; img.srcset = baru.srcset; baru.remove(); sibuk = false; }, 650); };
    baru.onerror = () => { sibuk = false; };
    fig.classList.add("diklik");
    if (typeof RAYA !== "undefined" && RAYA.nada) RAYA.nada("klik");
  };
  fig.addEventListener("click", ganti);
  fig.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ganti(); } });
  // varian lain dimuat diam-diam setelah halaman tenang, supaya klik pertama langsung berganti
  const muatDulu = () => { for (let i = 1; i < N; i++) { const p = new Image(); Object.assign(p, sumber(i)); p.sizes = img.sizes; } };
  (window.requestIdleCallback || (f => setTimeout(f, 2500)))(muatDulu);
  if (matchMedia("(pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let raf = 0;
    fig.addEventListener("pointermove", e => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = fig.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        fig.style.setProperty("--px", (x * -18).toFixed(1) + "px");
        fig.style.setProperty("--py", (y * -12).toFixed(1) + "px");
      });
    });
    fig.addEventListener("pointerleave", () => { fig.style.setProperty("--px", "0px"); fig.style.setProperty("--py", "0px"); });
  }
})();

el("btn-ke-metode").onclick = () => el("metode-judul").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });

/* ---------- Pasang tombol tab ---------- */
document.querySelectorAll(".nav-utama [data-tab], .nav-bawah [data-tab]").forEach(b => b.onclick = () => bukaTab(b.dataset.tab));
