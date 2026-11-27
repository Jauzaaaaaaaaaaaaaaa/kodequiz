/* ============================================================
   Menu ☰ + pencarian seluruh KodeQuiz, dan Pustaka (ringkasan video + peta belajar).
   Data video & peta: js/data/pustaka.js (dibuat alat/buat-pustaka.py dari video yang dirangkum).
   ============================================================ */

/* ---------- Indeks pencarian (dibuat sekali, saat menu pertama dibuka) ---------- */
let CARI_INDEKS = null;
const polos = html => String(html || "").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ");
const normCari = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
function indeksCari() {
  if (CARI_INDEKS) return CARI_INDEKS;
  const I = [];
  const tambah = (jenis, judul, sub, teks, buka) => I.push({ jenis, judul, sub, j: normCari(judul), t: normCari(judul + " " + sub + " " + teks), buka });
  Object.keys(MATERI).forEach(t => MATERI[t].forEach((bab, i) =>
    tambah("Materi", bab.judul, TOPIK_INFO[t] ? TOPIK_INFO[t].nama : t, polos(bab.materi), () => go("materi", { t, i }))));
  STUDI_PY.forEach(S => tambah(S.ujian ? "Coding Test Besar" : "Studi Kasus", S.judul, (TOPIK_INFO[S.topik] || {}).nama || S.topik,
    S.langkah.map(L => L.judul + " " + polos(L.soal)).join(" "), () => go("praktik", { id: S.id })));
  TANTANGAN_PY.forEach(T => tambah("Lab Coding Test", T.judul, KATEGORI_PY[T.kategori], polos(T.soal), () => go("pylab", { f: "semua", id: T.id })));
  TANTANGAN_SQL.forEach((T, i) => tambah("Lab SQL", T.judul, "SQL", polos(T.soal), () => go("sqllab", { i })));
  if (typeof KAMUS_KODING !== "undefined") KAMUS_KODING.forEach(K => tambah("Kamus", K.kata, KAMUS_GRUP[K.g], K.arti, () => go("kamus", { q: K.kata })));
  if (typeof PUSTAKA !== "undefined") PUSTAKA.forEach(V => tambah("Video", V.judul, `${V.kanal} · ${V.bahasa === "id" ? "Indonesia" : "Inggris"}`,
    [V.ringkasan, ...V.poin, ...V.langkah, ...V.istilah, V.kenapa].join(" "), () => go("pustaka", { tab: "video", id: V.id })));
  if (typeof PETA_BELAJAR !== "undefined") PETA_BELAJAR.forEach(P => tambah("Peta Belajar", P.judul, `${P.langkah.length} langkah`,
    P.langkah.map(L => L.judul + " " + L.isi).join(" "), () => go("pustaka", { tab: "peta", peta: P.id })));
  return (CARI_INDEKS = I);
}
function cari(q) {
  const kata = normCari(q).split(/\s+/).filter(k => k.length > 1);
  if (!kata.length) return [];
  return indeksCari()
    .filter(x => kata.every(k => x.t.includes(k)))
    .map(x => ({ x, skor: kata.filter(k => x.j.includes(k)).length * 10 + (x.jenis === "Materi" ? 2 : 0) + (x.jenis === "Video" ? 1 : 0) }))
    .sort((a, b) => b.skor - a.skor || a.x.judul.localeCompare(b.x.judul))
    .slice(0, 40).map(r => r.x);
}

/* ---------- Menu ☰ ---------- */
const MENU_PINTAS = [
  ["🏠", "Beranda", () => keBeranda()],
  ["📚", "Pustaka: ringkasan video", () => go("pustaka", { tab: "video" })],
  ["🗺️", "Peta belajar per bahasa", () => go("pustaka", { tab: "peta" })],
  ["🔤", "Kamus kata koding", () => go("kamus", {})],
  ["🐍", "Lab Coding Test", () => go("pylab", {})],
  ["🧪", "Lab SQL", () => go("sqllab", {})],
  ["🧩", "Latihan & semua topik", () => go("latihan")],
  ["📖", "Book", () => go("buku")],
  ["📈", "Kemajuan", () => go("kemajuan")],
];
function bukaMenu() {
  const d = el("dlg-menu");
  // Pustaka baru ditampilkan setelah ada isinya (masih disusun)
  const adaPustaka = typeof PUSTAKA !== "undefined" && PUSTAKA.length > 0;
  el("menu-pintas").innerHTML = MENU_PINTAS.map(([ikon, nama], i) => !adaPustaka && /Pustaka|Peta/.test(nama) ? "" : `<button class="menu-item" data-i="${i}"><span aria-hidden="true">${ikon}</span>${esc(nama)}</button>`).join("");
  el("menu-pintas").querySelectorAll("[data-i]").forEach(b => b.onclick = () => { d.close(); MENU_PINTAS[+b.dataset.i][2](); });
  d.showModal();
  el("menu-cari").focus();
  renderHasilCari();
}
function renderHasilCari() {
  const q = el("menu-cari").value.trim(), wadah = el("menu-hasil");
  el("menu-pintas").classList.toggle("tersembunyi", !!q);
  if (!q) { wadah.innerHTML = `<p class="kecil">Cari materi, studi kasus, tantangan, atau ringkasan video. Contoh: <i>flexbox</i>, <i>join</i>, <i>compute odoo</i>, <i>closure</i>.</p>`; return; }
  const r = cari(q);
  wadah.innerHTML = r.length
    ? `<p class="kecil">${r.length === 40 ? "40+" : r.length} hasil</p>` + r.map((x, i) => `<button class="hasil-cari" data-i="${i}"><span class="chip-kecil">${esc(x.jenis)}</span><b>${esc(x.judul)}</b><small>${esc(x.sub)}</small></button>`).join("")
    : `<p class="cek-kosong">Tidak ada hasil untuk “${esc(q)}”. Coba kata lain atau lebih umum.</p>`;
  wadah.querySelectorAll("[data-i]").forEach(b => b.onclick = () => { el("dlg-menu").close(); r[+b.dataset.i].buka(); });
}

/* ---------- Pustaka ---------- */
const durasiTeks = s => s >= 3600 ? `${Math.floor(s / 3600)} j ${Math.round(s % 3600 / 60)} m` : `${Math.max(1, Math.round(s / 60))} menit`;
const namaTopik = t => (TOPIK_INFO[t] || {}).nama || t;
/* ---------- Kamus kata koding ---------- */
const KAMUS_GRUP = { ui: "Tampilan (UI)", web: "HTML · CSS · JS", dasar: "Konsep pemrograman", data: "Data & database", alat: "Alat kerja & Git", net: "Internet & server" };
function renderKamus(a) {
  const g = a.g || "semua", input = el("kamus-cari");
  if (a.q !== undefined) input.value = a.q;
  el("kamus-ket").textContent = `${KAMUS_KODING.length} istilah yang sering muncul saat belajar dan bekerja. Ketik untuk mencari.`;
  el("kamus-filter").innerHTML = [["semua", "Semua"], ...Object.entries(KAMUS_GRUP)].map(([k, nama]) =>
    `<button class="lingkup ${k === g ? "aktif" : ""}" data-g="${k}">${esc(nama)} <small>${k === "semua" ? KAMUS_KODING.length : KAMUS_KODING.filter(K => K.g === k).length}</small></button>`).join("");
  el("kamus-filter").querySelectorAll("[data-g]").forEach(b => b.onclick = () => go("kamus", { g: b.dataset.g, q: input.value }, { replace: true }));
  const isi = () => {
    const q = normCari(input.value.trim());
    const daftar = KAMUS_KODING.filter(K => (g === "semua" || K.g === g) && (!q || normCari(K.kata + " " + K.arti).includes(q)))
      .sort((x, y) => normCari(x.kata).startsWith(q) === normCari(y.kata).startsWith(q) ? x.kata.localeCompare(y.kata) : normCari(x.kata).startsWith(q) ? -1 : 1);
    el("kamus-daftar").innerHTML = daftar.length
      ? daftar.map(K => `<div class="kamus-item"><dt>${esc(K.kata)} <small>${esc(KAMUS_GRUP[K.g])}</small></dt><dd>${esc(K.arti)}</dd></div>`).join("")
      : `<p class="cek-kosong">Istilah itu belum ada di kamus. Coba kata lain, atau cari di menu ☰.</p>`;
  };
  input.oninput = isi;
  isi();
}
function renderPustaka(a) {
  const tab = a.tab || "video";
  document.querySelectorAll(".pus-tab").forEach(b => { const on = b.dataset.tab === tab; b.classList.toggle("aktif", on); b.setAttribute("aria-selected", on); });
  el("pus-video").classList.toggle("tersembunyi", tab !== "video");
  el("pus-peta").classList.toggle("tersembunyi", tab !== "peta");
  const n = typeof PUSTAKA !== "undefined" ? PUSTAKA.length : 0;
  el("pus-ket").textContent = `${n} video dirangkum dari kanal Indonesia dan luar negeri · ${typeof PETA_BELAJAR !== "undefined" ? PETA_BELAJAR.length : 0} peta belajar`;
  if (tab === "peta") return renderPeta(a.peta);
  const f = a.topik || "semua", bhs = a.bahasa || "semua";
  const topik = [...new Set((PUSTAKA || []).flatMap(V => V.topik))];
  el("pus-filter").innerHTML = [["semua", "Semua"], ...topik.map(t => [t, namaTopik(t)])].map(([k, nama]) =>
    `<button class="lingkup ${k === f ? "aktif" : ""}" data-t="${k}">${esc(nama)} <small>${k === "semua" ? n : PUSTAKA.filter(V => V.topik.includes(k)).length}</small></button>`).join("") +
    `<span class="pus-bahasa">${[["semua", "Semua bahasa"], ["id", "🇮🇩 Indonesia"], ["en", "🌐 Inggris"]].map(([k, nama]) => `<button class="lingkup ${k === bhs ? "aktif" : ""}" data-b="${k}">${nama}</button>`).join("")}</span>`;
  el("pus-filter").querySelectorAll("[data-t]").forEach(b => b.onclick = () => go("pustaka", { tab, topik: b.dataset.t, bahasa: bhs }, { replace: true }));
  el("pus-filter").querySelectorAll("[data-b]").forEach(b => b.onclick = () => go("pustaka", { tab, topik: f, bahasa: b.dataset.b }, { replace: true }));
  const daftar = (PUSTAKA || []).filter(V => (f === "semua" || V.topik.includes(f)) && (bhs === "semua" || V.bahasa === bhs));
  el("pus-daftar").innerHTML = daftar.length ? daftar.map(kartuVideo).join("") : `<p class="cek-kosong">Belum ada video untuk pilihan ini. Pustaka terus ditambah.</p>`;
  el("pus-daftar").querySelectorAll("[data-bab]").forEach(b => b.onclick = () => { const [t, k] = b.dataset.bab.split("|"); go("materi", { t, i: MATERI[t].findIndex(m => m.k === k) }); });
  if (a.id) setTimeout(() => { const k = document.getElementById("vid-" + a.id); if (k) { k.open = true; k.scrollIntoView({ block: "start" }); } }, 80);
}
function kartuVideo(V) {
  const bab = (V.bab || []).filter(([t, k]) => MATERI[t] && MATERI[t].some(m => m.k === k));
  return `<details class="pus-kartu" id="vid-${esc(V.id)}">
    <summary><span class="pus-judul"><b>${esc(V.judul)}</b><small>${esc(V.kanal)} · ${durasiTeks(V.durasi)} · ${V.bahasa === "id" ? "🇮🇩 Indonesia" : "🌐 Inggris"} · ${["", "Pemula", "Menengah", "Lanjut"][V.level]}${V.tes ? " · 🎯 tes kerja" : ""}</small></span></summary>
    <p class="pus-kenapa"><b>Kenapa ditonton:</b> ${esc(V.kenapa)}</p>
    <p>${esc(V.ringkasan)}</p>
    <h4 class="lab-sub">Poin utama</h4><ul>${V.poin.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
    ${V.langkah.length ? `<h4 class="lab-sub">Langkah praktik</h4><ol>${V.langkah.map(x => `<li>${esc(x)}</li>`).join("")}</ol>` : ""}
    ${V.istilah.length ? `<p>${V.istilah.map(x => `<span class="tag-skill">${esc(x)}</span>`).join(" ")}</p>` : ""}
    <p class="pus-aksi"><a class="btn btn-utama btn-kecil" href="https://www.youtube.com/watch?v=${encodeURIComponent(V.yt)}" target="_blank" rel="noopener">▶ Tonton di YouTube</a>
      ${bab.map(([t, k]) => `<button class="btn btn-garis btn-kecil" data-bab="${t}|${k}">📘 ${esc(namaTopik(t))}: ${esc(MATERI[t].find(m => m.k === k).judul)}</button>`).join(" ")}</p>
    <p class="kecil">Ringkasan dibuat dari transkrip video lalu diperiksa; tonton videonya untuk penjelasan lengkap. Hak cipta video milik pembuatnya.</p>
  </details>`;
}
function renderPeta(id) {
  const P = (PETA_BELAJAR || []).find(x => x.id === id) || (PETA_BELAJAR || [])[0];
  el("pus-filter").innerHTML = (PETA_BELAJAR || []).map(x => `<button class="lingkup ${P && x.id === P.id ? "aktif" : ""}" data-p="${x.id}">${esc(x.judul)}</button>`).join("");
  el("pus-filter").querySelectorAll("[data-p]").forEach(b => b.onclick = () => go("pustaka", { tab: "peta", peta: b.dataset.p }, { replace: true }));
  if (!P) { el("pus-peta").innerHTML = `<p class="cek-kosong">Peta belajar sedang disusun.</p>`; return; }
  const vid = id => (PUSTAKA || []).find(V => V.id === id);
  el("pus-peta").innerHTML = `<p>${esc(P.pengantar)}</p><ol class="peta-langkah">${P.langkah.map((L, i) => `<li>
      <h4>${esc(L.judul)}</h4><p>${esc(L.isi)}</p>
      <p class="pus-aksi">${(L.bab || []).filter(([t, k]) => MATERI[t] && MATERI[t].some(m => m.k === k)).map(([t, k]) => `<button class="btn btn-garis btn-kecil" data-bab="${t}|${k}">📘 ${esc(MATERI[t].find(m => m.k === k).judul)}</button>`).join(" ")}
      ${(L.video || []).filter(vid).map(v => `<button class="btn btn-garis btn-kecil" data-vid="${v}">▶ ${esc(vid(v).judul)}</button>`).join(" ")}</p></li>`).join("")}</ol>`;
  el("pus-peta").querySelectorAll("[data-bab]").forEach(b => b.onclick = () => { const [t, k] = b.dataset.bab.split("|"); go("materi", { t, i: MATERI[t].findIndex(m => m.k === k) }); });
  el("pus-peta").querySelectorAll("[data-vid]").forEach(b => b.onclick = () => go("pustaka", { tab: "video", id: b.dataset.vid }));
}
function pasangPustaka() {
  el("btn-menu").onclick = bukaMenu;
  el("menu-cari").addEventListener("input", renderHasilCari);
  el("menu-tutup").onclick = () => el("dlg-menu").close();
  el("dlg-menu").addEventListener("click", e => { if (e.target === el("dlg-menu")) el("dlg-menu").close(); });   // klik latar menutup
  document.querySelectorAll(".pus-tab").forEach(b => b.onclick = () => go("pustaka", { tab: b.dataset.tab }, { replace: true }));
  document.addEventListener("keydown", e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); bukaMenu(); } });
}
