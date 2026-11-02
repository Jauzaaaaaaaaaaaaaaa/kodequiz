/* ============================================================
   Belajar dari Awal — mesin proyek langkah demi langkah
   • Editor 3 file (index.html, style.css, app.js) tersimpan otomatis
   • Pratinjau "Hasil kamu" vs "Target" (kode jawaban langkah ini)
   • Console mini (console.log & error dari kodemu)
   • Pengecekan otomatis di iframe tersembunyi
   Butuh: app.js (el, esc, DATA, simpan, go, tanya, toast)
   ============================================================ */

const FILE_INFO = {
  html: { nama: "index.html", label: "HTML" },
  css:  { nama: "style.css",  label: "CSS"  },
  js:   { nama: "app.js",     label: "JS"   },
};

function dataProyek() {
  if (!DATA.proyek) DATA.proyek = { kode: { html: "", css: "", js: "" }, lulus: [], tab: "html" };
  return DATA.proyek;
}

/* ---------- Kode jawaban per langkah (dari proyek-blok.js) ---------- */
function blokTerlihat(n, file) {
  return PROYEK_BLOK.filter(b => b.file === file && b.s <= n && (b.sampai == null || n < b.sampai));
}
function kodeReferensi(n) {
  const r = {};
  ["html", "css", "js"].forEach(f => r[f] = blokTerlihat(n, f).map(b => b.kode).join(""));
  return r;
}
// Potongan kode BARU di langkah n, digabung jika bersebelahan
function instruksiLangkah(n) {
  const out = [];
  ["html", "css", "js"].forEach(f => {
    let cur = null;
    blokTerlihat(n, f).forEach(b => {
      if (b.s === n) {
        if (cur) cur.kode += b.kode;
        else { cur = { file: f, letak: b.letak, kode: b.kode }; out.push(cur); }
      } else cur = null;
    });
  });
  return out;
}

/* ---------- Merakit dokumen pratinjau ---------- */
function helperPratinjau(mode, seed) {
  const kirim = (jenis, isi) => { try { parent.postMessage({ kqPratinjau: true, mode, jenis, isi }, "*"); } catch (e) {} };
  ["log", "warn", "error"].forEach(k => {
    const asli = console[k];
    console[k] = function (...a) {
      kirim(k, a.map(x => { try { return typeof x === "object" ? JSON.stringify(x) : String(x); } catch (e) { return String(x); } }).join(" "));
      asli.apply(console, a);
    };
  });
  addEventListener("error", e => kirim("error", e.message + (e.lineno ? " (baris " + e.lineno + ")" : "")));
  document.addEventListener("submit", e => {
    if (!e.defaultPrevented) { e.preventDefault(); kirim("info", "Form dikirim, tapi belum ada JavaScript yang menanganinya (dibuat di langkah 12)."); }
  });
  if (mode !== "kamu") {               // tes & target: localStorage palsu agar tidak mengganggu datamu
    const mem = Object.assign({}, seed || {});
    const palsu = {
      getItem: k => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); },
      removeItem: k => { delete mem[k]; }, clear: () => { for (const k in mem) delete mem[k]; },
      get length() { return Object.keys(mem).length; }, key: i => Object.keys(mem)[i] || null,
    };
    try { Object.defineProperty(window, "localStorage", { value: palsu, configurable: true }); } catch (e) {}
  }
}
function rakitDokumen(kode, mode, seed) {
  let html = kode.html || "";
  const css = (kode.css || "").replace(/<\/style/gi, "<\\/style");
  const js = (kode.js || "").replace(/<\/script/gi, "<\\/script");
  const helper = `<script>(${helperPratinjau.toString()})(${JSON.stringify(mode)}, ${JSON.stringify(seed || {})});<\/script>`;
  html = /<head[^>]*>/i.test(html) ? html.replace(/<head[^>]*>/i, m => m + helper) : helper + html;
  html = html.replace(/<link[^>]*href=["']style\.css["'][^>]*>/i, () => `<style>${css}</style>`);
  html = html.replace(/<script[^>]*src=["']app\.js["'][^>]*>\s*<\/script>/i, () => `<script>${js}<\/script>`);
  return html;
}
function muatIframe(ifr, dok) {
  return new Promise(res => {
    let selesai = false;
    const beres = () => { if (!selesai) { selesai = true; res(); } };
    ifr.onload = () => setTimeout(beres, 40);
    setTimeout(beres, 4000);
    ifr.srcdoc = dok;
  });
}

/* ---------- Pesan console dari iframe ---------- */
const KONSOL = { kamu: [], tes: [] };
window.addEventListener("message", e => {
  const d = e.data;
  if (!d || !d.kqPratinjau) return;
  if (d.mode === "kamu") { KONSOL.kamu.push(d); renderKonsol(); }
  if (d.mode === "tes") KONSOL.tes.push(d);
});

/* ============ Layar daftar langkah ============ */
function langkahTerbuka() {
  const p = dataProyek();
  let i = 0;
  while (i < PROYEK.langkah.length && p.lulus.includes(i)) i++;
  return i; // indeks langkah pertama yang belum lulus
}
function renderProyekDaftar() {
  const p = dataProyek();
  const total = PROYEK.langkah.length, lulus = p.lulus.length;
  el("proyek-judul").textContent = PROYEK.judul;
  el("proyek-ringkas").textContent = PROYEK.ringkas;
  el("proyek-progres-teks").textContent = `${lulus} / ${total} langkah selesai`;
  el("proyek-progres-isi").style.width = (lulus / total * 100) + "%";
  const buka = langkahTerbuka();
  const btnLanjut = el("btn-proyek-lanjut");
  btnLanjut.textContent = lulus === 0 ? "Mulai dari langkah 1 →" : buka >= total ? "Lihat hasil akhir →" : `Lanjutkan langkah ${buka + 1} →`;
  btnLanjut.onclick = () => go("langkah", { i: Math.min(buka, total - 1) });
  el("proyek-selesai").classList.toggle("tersembunyi", lulus < total);

  const wadah = el("daftar-langkah");
  wadah.innerHTML = "";
  PROYEK.langkah.forEach((L, i) => {
    const sudah = p.lulus.includes(i), kunci = i > buka;
    const b = document.createElement("button");
    b.className = "bab-item muncul" + (sudah ? " bab-selesai" : "") + (kunci ? " bab-kunci" : "");
    b.style.animationDelay = (i * 25) + "ms";
    b.innerHTML = `<span class="bab-no">${i + 1}</span>
      <span class="bab-isi"><b>${esc(L.judul)}</b><small>${L.file.map(f => FILE_INFO[f].nama).join(" · ")}</small></span>
      <span class="bab-status">${sudah ? "✓" : kunci ? "🔒" : "→"}</span>`;
    b.onclick = () => kunci ? toast("Selesaikan langkah " + (buka + 1) + " dulu, ya.") : go("langkah", { i });
    wadah.appendChild(b);
  });
}

/* ============ Layar satu langkah ============ */
let LANGKAH = 0;
let timerSimpan = null;

function renderLangkah(i) {
  LANGKAH = i;
  const L = PROYEK.langkah[i], n = i + 1, p = dataProyek();
  el("langkah-eyebrow").textContent = `Langkah ${n} dari ${PROYEK.langkah.length}`;
  el("langkah-judul").textContent = L.judul;
  el("langkah-bar").style.width = (n / PROYEK.langkah.length * 100) + "%";
  el("langkah-tujuan").textContent = L.tujuan;
  el("langkah-penjelasan").innerHTML = L.penjelasan;
  el("langkah-konsep").classList.toggle("tersembunyi", !L.konsep);
  el("langkah-konsep-isi").textContent = L.konsep || "";
  el("langkah-harapan").textContent = L.harapan;

  // potongan kode yang perlu diketik
  const ins = el("langkah-instruksi");
  ins.innerHTML = "";
  instruksiLangkah(n).forEach(x => {
    const d = document.createElement("div");
    d.className = "instruksi";
    d.innerHTML = `<div class="instruksi-head"><span class="file-chip f-${x.file}">${FILE_INFO[x.file].nama}</span>
      ${x.letak ? `<span class="instruksi-letak">📍 ${esc(x.letak)}</span>` : ""}</div>
      <pre><code>${esc(x.kode.replace(/\n+$/, ""))}</code></pre>`;
    ins.appendChild(d);
  });

  // tab editor: pilih file utama langkah ini
  p.tab = L.file.includes(p.tab) ? p.tab : L.file[0];
  renderTabEditor();
  isiEditor();

  // tombol navigasi langkah
  el("btn-langkah-prev").disabled = i === 0;
  el("btn-langkah-prev").onclick = () => go("langkah", { i: i - 1 }, { replace: true });
  aturTombolNext();
  el("hasil-cek").innerHTML = `<p class="cek-kosong">Ketik kodenya, lalu tekan <b>▶ Cek kodeku</b>. Pratinjau di bawah ter-update otomatis saat kamu mengetik.</p>`;
  el("panel-lulus").classList.add("tersembunyi");
  pilihTabPratinjau("kamu");
  segarkanPratinjau(true);
  muatTarget();
}
function aturTombolNext() {
  const i = LANGKAH, p = dataProyek(), akhir = i === PROYEK.langkah.length - 1;
  const btn = el("btn-langkah-next");
  btn.disabled = !p.lulus.includes(i);
  btn.textContent = akhir ? "Selesai 🎉" : "Langkah berikutnya →";
  btn.onclick = () => akhir ? go("proyek", {}, { replace: true }) : go("langkah", { i: i + 1 }, { replace: true });
}

/* ---------- Editor ---------- */
function renderTabEditor() {
  const p = dataProyek(), L = PROYEK.langkah[LANGKAH];
  document.querySelectorAll(".tab-file").forEach(t => {
    const f = t.dataset.file;
    t.classList.toggle("aktif", f === p.tab);
    t.classList.toggle("tab-tugas", L.file.includes(f));
  });
}
function isiEditor() {
  const p = dataProyek(), ta = el("editor-teks");
  ta.value = p.kode[p.tab];
  ta.placeholder = p.kode[p.tab] ? "" : `File ${FILE_INFO[p.tab].nama} masih kosong. Mulai ketik di sini…`;
  ta.scrollTop = 0;
  renderNomorBaris();
}
function renderNomorBaris() {
  const ta = el("editor-teks");
  const jml = ta.value.split("\n").length;
  let s = "";
  for (let i = 1; i <= Math.max(jml, 1); i++) s += i + "\n";
  el("editor-nomor").textContent = s;
  el("editor-nomor").scrollTop = ta.scrollTop;
}
function saatKetik() {
  const p = dataProyek(), ta = el("editor-teks");
  p.kode[p.tab] = ta.value;
  renderNomorBaris();
  clearTimeout(timerSimpan);
  timerSimpan = setTimeout(() => { simpan(); segarkanPratinjau(); }, 600);
}
function tanganiTombolEditor(e) {
  const ta = e.target;
  if (e.key === "Tab") {                        // Tab = 2 spasi, bukan pindah fokus
    e.preventDefault();
    const a = ta.selectionStart, b = ta.selectionEnd;
    ta.value = ta.value.slice(0, a) + "  " + ta.value.slice(b);
    ta.selectionStart = ta.selectionEnd = a + 2;
    saatKetik();
  } else if (e.key === "Enter") {               // pertahankan indentasi baris sebelumnya
    const a = ta.selectionStart;
    const awalBaris = ta.value.lastIndexOf("\n", a - 1) + 1;
    const indent = (ta.value.slice(awalBaris, a).match(/^\s*/) || [""])[0];
    if (indent) {
      e.preventDefault();
      ta.value = ta.value.slice(0, a) + "\n" + indent + ta.value.slice(ta.selectionEnd);
      ta.selectionStart = ta.selectionEnd = a + 1 + indent.length;
      saatKetik();
    }
  } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault(); cekLangkah();
  }
}

/* ---------- Pratinjau ---------- */
let TAB_PRATINJAU = "kamu";
function pilihTabPratinjau(t) {
  TAB_PRATINJAU = t;
  document.querySelectorAll(".tab-pratinjau").forEach(b => b.classList.toggle("aktif", b.dataset.tab === t));
  el("frame-kamu").classList.toggle("tersembunyi", t !== "kamu");
  el("frame-target").classList.toggle("tersembunyi", t !== "target");
  el("konsol").classList.toggle("tersembunyi", t !== "konsol");
  el("pratinjau-ket").textContent =
    t === "kamu" ? "Ini hasil kodemu. Ter-update otomatis saat mengetik." :
    t === "target" ? "Ini SEHARUSNYA tampilan setelah langkah ini selesai." :
    "Pesan dari console.log() dan error JavaScript di kodemu.";
}
function segarkanPratinjau(paksa) {
  const p = dataProyek();
  KONSOL.kamu = [];
  renderKonsol();
  el("frame-kamu").srcdoc = rakitDokumen(p.kode, "kamu");
}
function muatTarget() {
  el("frame-target").srcdoc = rakitDokumen(kodeReferensi(LANGKAH + 1), "target");
}
function renderKonsol() {
  const k = el("konsol");
  if (!k) return;
  const err = KONSOL.kamu.filter(x => x.jenis === "error").length;
  el("badge-konsol").textContent = KONSOL.kamu.length ? KONSOL.kamu.length : "";
  el("badge-konsol").className = "badge-kecil" + (err ? " badge-merah" : "");
  k.innerHTML = KONSOL.kamu.length
    ? KONSOL.kamu.map(x => `<div class="log log-${x.jenis}">${x.jenis === "error" ? "⛔ " : x.jenis === "info" ? "ℹ️ " : "› "}${esc(x.isi)}</div>`).join("")
    : `<div class="log log-kosong">Belum ada pesan. Tulis console.log("halo") di app.js untuk mencoba.</div>`;
}

/* ---------- Pengecekan otomatis ---------- */
async function buatKonteks(kode, seed) {
  const ifr = el("frame-tes");
  KONSOL.tes = [];
  await muatIframe(ifr, rakitDokumen(kode, "tes", seed));
  const doc = ifr.contentDocument, win = ifr.contentWindow;
  const c = {
    doc, win, kode,
    $: s => doc.querySelector(s),
    $$: s => [...doc.querySelectorAll(s)],
    teks: s => { const x = doc.querySelector(s); return x ? x.textContent.trim() : null; },
    gaya: (s, prop) => { const x = doc.querySelector(s); return x ? win.getComputedStyle(x)[prop] : null; },
    ev: x => win.eval(x),
    tunggu: ms => new Promise(r => setTimeout(r, ms)),
    error: () => KONSOL.tes.filter(x => x.jenis === "error").map(x => x.isi),
    isiForm: () => {
      const set = (id, v) => { const x = doc.getElementById(id); if (x) x.value = v; };
      set("sales", "Bima"); set("produk", "Webcam"); set("qty", "2"); set("harga", "500000");
      const f = doc.getElementById("form-transaksi");
      if (f) f.requestSubmit ? f.requestSubmit() : f.dispatchEvent(new win.Event("submit", { cancelable: true }));
    },
    muatUlang: sd => buatKonteks(kode, sd),
  };
  return c;
}
async function cekLangkah() {
  const L = PROYEK.langkah[LANGKAH], p = dataProyek();
  simpan();
  const wadah = el("hasil-cek");
  wadah.innerHTML = `<p class="cek-kosong">⏳ Mengecek kodemu…</p>`;
  el("btn-cek").disabled = true;

  const hasil = [];
  for (const cek of L.cek) {
    let ok = false, pesan = "";
    try {
      const c = await buatKonteks(p.kode);         // muat ulang tiap cek → tidak saling mengganggu
      ok = !!(await cek.f(c));
    } catch (e) { ok = false; pesan = e.message; }
    hasil.push({ cek, ok, pesan });
  }
  // cek tambahan: tidak ada error JavaScript (mulai langkah yang memakai JS)
  if (LANGKAH >= 7) {
    await buatKonteks(p.kode);
    const err = KONSOL.tes.filter(x => x.jenis === "error").map(x => x.isi);
    hasil.push({ cek: { t: "Tidak ada error JavaScript", h: "Buka tab Console di pratinjau untuk melihat pesan errornya. Cek ejaan, tanda kurung, dan kurung kurawal yang belum ditutup." }, ok: err.length === 0, pesan: err[0] || "" });
  }
  el("btn-cek").disabled = false;

  const lulus = hasil.every(h => h.ok);
  wadah.innerHTML = hasil.map((h, k) => `
    <div class="cek-item ${h.ok ? "cek-ok" : "cek-gagal"} muncul" style="animation-delay:${k * 60}ms">
      <span class="cek-ikon">${h.ok ? "✓" : "✗"}</span>
      <div><b>${esc(h.cek.t)}</b>
      ${!h.ok ? `<p class="cek-hint">💡 ${esc(h.cek.h || "")}${h.pesan ? `<br><code>${esc(h.pesan)}</code>` : ""}</p>` : ""}</div>
    </div>`).join("");

  if (lulus) {
    const pertamaKali = !p.lulus.includes(LANGKAH);
    if (pertamaKali) { p.lulus.push(LANGKAH); DATA.xp += 25; }
    catatStreak(); simpan(); renderStat();
    el("panel-lulus").classList.remove("tersembunyi");
    // perayaan: langkah terakhir = sangat meriah
    if (LANGKAH === PROYEK.langkah.length - 1) { RAYA.konfeti(3); RAYA.nada("menang"); }
    else { RAYA.konfeti(1, el("panel-lulus")); RAYA.nada("benar"); }
    if (pertamaKali) RAYA.melayang(el("btn-cek"), "+25 XP");
    umumkanLencana(cekLencana());
    el("lulus-teks").textContent = LANGKAH === PROYEK.langkah.length - 1
      ? "Proyekmu selesai! Unduh file-nya dan publikasikan di GitHub & Netlify."
      : `Langkah ${LANGKAH + 1} beres. +25 XP. Lanjut ke langkah ${LANGKAH + 2}?`;
    aturTombolNext();
    segarkanPratinjau();
  } else {
    const gagal = hasil.filter(h => !h.ok).length;
    toast(`${gagal} pengecekan belum lolos. Baca petunjuknya, lalu coba lagi.`);
  }
}

/* ---------- Petunjuk & menyerah ---------- */
function petunjukLangkah() {
  const L = PROYEK.langkah[LANGKAH];
  const n = LANGKAH + 1;
  const ref = kodeReferensi(n), p = dataProyek();
  const beda = L.file.filter(f => p.kode[f].trim() !== ref[f].trim());
  const pesan = beda.length
    ? `Bandingkan file ${beda.map(f => FILE_INFO[f].nama).join(" dan ")} dengan potongan kode di kotak "Ketik kode ini". Kesalahan paling umum: tanda kutip, kurung tutup, titik koma, dan ejaan id/class. Huruf besar-kecil juga berpengaruh.`
    : "Isi file-mu sudah sama dengan kode jawaban. Tekan ▶ Cek kodeku.";
  tanya({ judul: "💡 Petunjuk", pesan, ya: "Oke", tanpaBatal: true });
}
function lihatJawabanLangkah() {
  const L = PROYEK.langkah[LANGKAH], ref = kodeReferensi(LANGKAH + 1);
  const isi = L.file.map(f => `<p class="jawab-file"><span class="file-chip f-${f}">${FILE_INFO[f].nama}</span> — isi lengkap file setelah langkah ini:</p><pre class="jawab-kode"><code>${esc(ref[f])}</code></pre>`).join("");
  tanya({
    judul: "🏳️ Kode jawaban lengkap",
    html: `<p>Tidak apa-apa melihat jawaban — yang penting kamu <b>memahami kenapa</b> kodenya begitu. Baca baris per baris, bandingkan dengan kodemu, lalu cari bedanya.</p>${isi}
           <p class="kecil">Tombol di bawah akan <b>menimpa</b> file ${L.file.map(f => FILE_INFO[f].nama).join(", ")} milikmu dengan kode ini.</p>`,
    ya: "Pakai kode ini", tidak: "Tutup, aku coba sendiri", lebar: true,
  }).then(ok => {
    if (!ok) return;
    const p = dataProyek();
    L.file.forEach(f => p.kode[f] = ref[f]);
    simpan(); isiEditor(); segarkanPratinjau();
    toast("Kode jawaban dipakai. Tekan ▶ Cek kodeku.");
  });
}

/* ---------- Unduh & reset ---------- */
function unduhFile(nama, isi) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([isi], { type: "text/plain;charset=utf-8" }));
  a.download = nama;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
function unduhProyek(file) {
  const p = dataProyek();
  if (file) return unduhFile(FILE_INFO[file].nama, p.kode[file]);
  const dok = rakitDokumen(p.kode, "kamu").replace(/<script>\(function helperPratinjau[\s\S]*?<\/script>/, "");
  unduhFile("salesku-satu-file.html", dok);
}
function resetProyek() {
  tanya({ judul: "Mulai ulang proyek?", pesan: "Semua kode dan progres proyek SalesKu akan dihapus. XP yang sudah didapat tetap ada.", ya: "Ya, mulai ulang", bahaya: true })
    .then(ok => { if (!ok) return; DATA.proyek = null; dataProyek(); simpan(); renderProyekDaftar(); toast("Proyek dikosongkan. Selamat mulai lagi!"); });
}

/* ---------- Pasang event (dipanggil sekali dari app.js) ---------- */
function pasangProyek() {
  const ta = el("editor-teks");
  ta.addEventListener("input", saatKetik);
  ta.addEventListener("keydown", tanganiTombolEditor);
  ta.addEventListener("scroll", () => el("editor-nomor").scrollTop = ta.scrollTop);
  document.querySelectorAll(".tab-file").forEach(t => t.onclick = () => {
    dataProyek().tab = t.dataset.file; renderTabEditor(); isiEditor(); ta.focus();
  });
  document.querySelectorAll(".tab-pratinjau").forEach(b => b.onclick = () => pilihTabPratinjau(b.dataset.tab));
  el("btn-cek").onclick = cekLangkah;
  el("btn-petunjuk-langkah").onclick = petunjukLangkah;
  el("btn-jawaban-langkah").onclick = lihatJawabanLangkah;
  el("btn-muat-ulang").onclick = () => segarkanPratinjau(true);
  el("btn-hapus-simpanan").onclick = () => { try { localStorage.removeItem("saleskuData"); } catch (e) {} segarkanPratinjau(true); toast("Data tersimpan di pratinjau dihapus."); };
  el("btn-lulus-lanjut").onclick = () => el("btn-langkah-next").click();
  el("btn-proyek-daftar").onclick = () => go("proyek", {}, { replace: true });
  el("btn-reset-proyek").onclick = resetProyek;
  document.querySelectorAll("[data-unduh]").forEach(b => b.onclick = () => unduhProyek(b.dataset.unduh));
}
