/* KodeQuiz — Code Runner melayang. Tombol kecil di kanan atas (selalu tampak, di semua layar) membuka laci
   editor + hasil, mirip OneCompiler:
   • HTML · CSS · JS  → pratinjau di iframe sandbox (tanpa allow-same-origin, jadi kode tidak bisa menyentuh
     data KodeQuiz) + console.log/error ditangkap ke panel Console.
   • Python           → Pyodide di Web Worker (dimuat dari CDN saat pertama dipakai), input() diketik langsung di Output
     seperti terminal,
     paket seperti pandas/numpy dimuat otomatis dari import. Tombol Stop menghentikan loop tak berujung.
   • SQL (SQLite)     → sql.js dari vendor/sql-asm.js (offline), database baru setiap Run.
   Kode tersimpan di localStorage 'kq-runner'. Pintasan: Ctrl+Enter = Run, Ctrl+Shift+K = buka/tutup. */
(function () {
  "use strict";
  const PYODIDE = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
  const CONTOH = {
    html: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello, World!</title>\n  </head>\n  <body>\n    <h1 class="title">Hello World!</h1>\n    <p id="currentTime"></p>\n  </body>\n</html>\n',
    css: ".title {\n  color: #5c6ac4;\n  font-family: Georgia, serif;\n}\n",
    js: 'document.getElementById("currentTime").textContent = new Date().toString();\nconsole.log("Halo dari script.js");\n',
    py: 'nama = input("Siapa namamu? ")\nprint(f"Halo, {nama}!")\n\nfor i in range(1, 4):\n    print(i, i * i)\n',
    sql: "CREATE TABLE siswa (nama TEXT, nilai INTEGER);\nINSERT INTO siswa VALUES ('Rina', 90), ('Budi', 85), ('Sari', 78);\n\nSELECT nama, nilai FROM siswa WHERE nilai > 80 ORDER BY nilai DESC;\n",
  };
  const FILE = {
    web: [["html", "index.html"], ["css", "styles.css"], ["js", "script.js"]],
    py: [["py", "main.py"]],
    sql: [["sql", "query.sql"]],
  };

  let S = { bahasa: "web", tab: "html" };
  try { S = Object.assign(S, JSON.parse(localStorage.getItem("kq-runner")) || {}); } catch (e) { /* mode privat */ }
  for (const k in CONTOH) if (typeof S[k] !== "string") S[k] = CONTOH[k];
  const simpan = () => { try { localStorage.setItem("kq-runner", JSON.stringify(S)); } catch (e) { /* abaikan */ } };

  /* ---------- Markup ---------- */
  const tombol = document.createElement("button");
  tombol.className = "rn-buka";
  tombol.type = "button";
  tombol.title = "Code Runner: jalankan kode dan lihat hasilnya (Ctrl+Shift+K)";
  tombol.setAttribute("aria-label", "Buka Code Runner");
  tombol.innerHTML = '<span aria-hidden="true">&lt;/&gt;</span> Run';

  const dlg = document.createElement("dialog");
  dlg.className = "rn";
  dlg.setAttribute("aria-label", "Code Runner");
  dlg.innerHTML = `
    <div class="rn-atas">
      <b class="rn-judul">Code Runner</b>
      <select class="rn-bahasa" aria-label="Bahasa">
        <option value="web">HTML · CSS · JS</option>
        <option value="py">Python</option>
        <option value="sql">SQL (SQLite)</option>
      </select>
      <button type="button" class="rn-jalan" title="Jalankan (Ctrl+Enter)">Run ▶</button>
      <button type="button" class="rn-kecil rn-contoh" title="Kembalikan kode contoh">Contoh</button>
      <button type="button" class="rn-kecil rn-tutup" aria-label="Tutup Code Runner" title="Tutup (Esc)">✕</button>
    </div>
    <div class="rn-tab" role="tablist"></div>
    <textarea class="rn-editor" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Editor kode"></textarea>
    <div class="rn-hasil">
      <div class="rn-hasil-label"><span class="rn-label-isi">Preview</span><span class="rn-status" aria-live="polite"></span></div>
      <iframe class="rn-frame" title="Hasil kode" sandbox="allow-scripts allow-modals allow-forms"></iframe>
      <div class="rn-konsol" aria-label="Output"></div>
    </div>`;
  const q = s => dlg.querySelector(s);
  const ui = {
    bahasa: q(".rn-bahasa"), jalan: q(".rn-jalan"), tab: q(".rn-tab"), editor: q(".rn-editor"),
    frame: q(".rn-frame"), konsol: q(".rn-konsol"),
    label: q(".rn-label-isi"), status: q(".rn-status"),
  };

  /* ---------- Tampilan ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function tulis(teks, jenis) {
    const p = document.createElement("div");
    p.className = "rn-baris" + (jenis ? " rn-" + jenis : "");
    p.textContent = teks;
    ui.konsol.appendChild(p);
    ui.konsol.scrollTop = ui.konsol.scrollHeight;
  }
  function render() {
    const web = S.bahasa === "web";
    if (!FILE[S.bahasa].some(f => f[0] === S.tab)) S.tab = FILE[S.bahasa][0][0];
    ui.bahasa.value = S.bahasa;
    ui.tab.innerHTML = FILE[S.bahasa].map(([k, nama]) =>
      `<button type="button" role="tab" data-k="${k}" aria-selected="${k === S.tab}">${nama}</button>`).join("");
    ui.editor.value = S[S.tab];
    ui.frame.hidden = !web;
    dlg.classList.toggle("rn-web", web);
    ui.label.textContent = web ? "Preview · Console" : "Output";
  }

  /* ---------- HTML · CSS · JS ---------- */
  // Menangkap console & error di dalam iframe lalu mengirimnya ke laci lewat postMessage.
  const PENANGKAP = `<script>(function(){function k(t,a){var s=[].map.call(a,function(x){if(x&&typeof x==="object"){try{return JSON.stringify(x)}catch(e){}}return String(x)}).join(" ");parent.postMessage({kqRunner:1,t:t,s:s},"*")}["log","info","warn","error"].forEach(function(m){var asli=console[m];console[m]=function(){k(m,arguments);asli.apply(console,arguments)}});addEventListener("error",function(e){k("error",[e.message+(e.lineno?" (baris "+e.lineno+")":"")])});addEventListener("unhandledrejection",function(e){k("error",["Promise ditolak: "+e.reason])})})();<\/script>`;
  function dokumenWeb() {
    let h = S.html;
    const css = "<style>\n" + S.css.replace(/<\/style/gi, "<\\/style") + "\n</style>";
    const js = "<script>\n" + S.js.replace(/<\/script/gi, "<\\/script") + "\n<\/script>";
    h = /<head[^>]*>/i.test(h) ? h.replace(/<head[^>]*>/i, m => m + PENANGKAP) : PENANGKAP + h;
    h = /<\/head>/i.test(h) ? h.replace(/<\/head>/i, m => css + m) : css + h;
    h = /<\/body>/i.test(h) ? h.replace(/<\/body>(?![\s\S]*<\/body>)/i, m => js + m) : h + js;
    return h;
  }
  window.addEventListener("message", e => {
    if (e.source !== ui.frame.contentWindow || !e.data || !e.data.kqRunner) return;
    tulis(e.data.s, e.data.t === "error" ? "galat" : e.data.t === "warn" ? "peringatan" : "");
  });

  /* ---------- Python (Pyodide di Worker) ---------- */
  // input() belum punya jawaban → simpan teks pertanyaannya lalu hentikan program. Setelah pengguna mengetik,
  // program dijalankan ulang dari awal dengan semua jawaban sejauh ini (worker tidak bisa menunggu secara sinkron).
  // shortcut: program diulang dari awal tiap input, jadi random/waktu bisa berubah; ganti ke SharedArrayBuffer bila perlu.
  const PY_INPUT = [
    "import builtins, sys",
    "class KqPerluInput(BaseException): pass",
    "def kq_input(prompt=''):",
    "    global __kq_tanya",
    "    prompt = str(prompt)",
    "    if not __kq_masuk:",
    "        __kq_tanya = prompt",
    "        raise KqPerluInput()",
    "    v = __kq_masuk.pop(0)",
    "    sys.stdout.write(prompt + v + '\\n')",
    "    return v",
    "builtins.input = kq_input",
  ].join("\n");
  const KODE_WORKER = `
    const PY_INPUT = ${JSON.stringify(PY_INPUT)};
    importScripts("${PYODIDE}pyodide.js");
    const siap = loadPyodide({ indexURL: "${PYODIDE}" });
    siap.then(() => postMessage({ t: "siap" }), e => postMessage({ t: "gagal", s: String(e) }));
    onmessage = async e => {
      const py = await siap;
      py.globals.set("__kq_masuk", py.toPy(e.data.masuk));
      py.globals.set("__kq_tanya", null);
      py.runPython(PY_INPUT);
      py.setStdout({ batched: s => postMessage({ t: "out", s }) });
      py.setStderr({ batched: s => postMessage({ t: "err", s }) });
      py.setStdin({ stdin: () => null });
      const g = py.globals.get("dict")();
      g.set("__name__", "__main__");
      try {
        await py.loadPackagesFromImports(e.data.kode, { messageCallback: s => postMessage({ t: "info", s }) });
        await py.runPythonAsync(e.data.kode, { globals: g });
      } catch (err) {
        const tanya = py.globals.get("__kq_tanya");
        if (tanya != null) { g.destroy(); return postMessage({ t: "tanya", s: tanya }); }
        const m = String(err.message || err), i = m.indexOf('File "<exec>"');   // buang baris internal Pyodide
        postMessage({ t: "err", s: i < 0 ? m : "Traceback (most recent call last):\\n  " + m.slice(i) });
      }
      g.destroy();
      postMessage({ t: "selesai" });
    };`;
  let worker = null, workerSiap = false, berjalan = false;
  function workerBaru() {
    const url = URL.createObjectURL(new Blob([KODE_WORKER], { type: "text/javascript" }));
    worker = new Worker(url);
    URL.revokeObjectURL(url);
    workerSiap = false;
    worker.onmessage = e => {
      const d = e.data;
      if (d.t === "siap") { workerSiap = true; ui.status.textContent = "Python siap"; }
      else if (d.t === "gagal") { tulis("Gagal memuat Python (perlu internet saat pertama kali): " + d.s, "galat"); hentikan(); }
      else if (d.t === "out") tulis(d.s);
      else if (d.t === "err") {
        tulis(d.s, "galat");
        const b = [...d.s.matchAll(/line (\d+)/g)].pop();   // baris terakhir di traceback = letak error di kodemu
        if (b && S.tab === "py" && window.tandaiBarisSalah) tandaiBarisSalah(ui.editor, [{ baris: +b[1], pesan: d.s }]);
      }
      else if (d.t === "info") tulis(d.s, "info");
      else if (d.t === "tanya") tanyaInput(d.s);
      else if (d.t === "selesai") selesai();
    };
    worker.onerror = e => { tulis("Worker error: " + e.message, "galat"); hentikan(); };
  }
  function jalanPython() {
    if (!worker) workerBaru();
    if (!workerSiap) ui.status.textContent = "Memuat Python (± 10 MB, sekali saja)…";
    if (window.tandaiBarisSalah) tandaiBarisSalah(ui.editor, []);
    worker.postMessage({ kode: S.py, masuk: masukan });
  }
  let masukan = [];
  function tanyaInput(teks) {
    ui.status.textContent = "Menunggu input… (ketik lalu Enter)";
    const b = document.createElement("label");
    b.className = "rn-baris rn-tanya";
    b.textContent = teks;
    const inp = document.createElement("input");
    inp.className = "rn-masuk";
    inp.setAttribute("aria-label", "Jawaban untuk input()");
    inp.autocomplete = "off"; inp.spellcheck = false;
    b.appendChild(inp);
    ui.konsol.appendChild(b);
    ui.konsol.scrollTop = ui.konsol.scrollHeight;
    inp.focus();
    inp.addEventListener("keydown", e => {
      if (e.key !== "Enter" || e.ctrlKey || e.metaKey) return;
      e.preventDefault();
      masukan.push(inp.value);
      ui.konsol.textContent = "";
      ui.status.textContent = "Menjalankan…";
      jalanPython();
    });
  }

  /* ---------- SQL (sql.js) ---------- */
  let SQLJS = null;
  function muatSql() {
    if (SQLJS) return Promise.resolve(SQLJS);
    return new Promise((res, rej) => {
      const go = () => initSqlJs().then(s => { SQLJS = s; res(s); }, rej);
      if (window.initSqlJs) return go();
      const sc = document.createElement("script");
      sc.src = "vendor/sql-asm.js";
      sc.onload = go;
      sc.onerror = () => rej(new Error("Gagal memuat vendor/sql-asm.js"));
      document.head.appendChild(sc);
    });
  }
  function jalanSql() {
    muatSql().then(SQL => {
      const db = new SQL.Database();
      try {
        const hasil = db.exec(S.sql);
        if (!hasil.length) tulis("Berhasil dijalankan. Tidak ada baris yang dikembalikan (tambahkan SELECT untuk melihat data).", "info");
        hasil.forEach(r => {
          const t = document.createElement("div");
          t.className = "rn-tabel";
          t.innerHTML = `<table><thead><tr>${r.columns.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${
            r.values.map(b => `<tr>${b.map(v => `<td>${v === null ? "<i>NULL</i>" : esc(v)}</td>`).join("")}</tr>`).join("")
          }</tbody></table><small>${r.values.length} baris</small>`;
          ui.konsol.appendChild(t);
        });
      } catch (err) { tulis(String(err.message || err), "galat"); }
      db.close();
      selesai();
    }, err => { tulis(err.message, "galat"); selesai(); });
  }

  /* ---------- Run / Stop ---------- */
  let mulaiPada = 0;
  function selesai() {
    berjalan = false;
    ui.jalan.textContent = "Run ▶";
    ui.jalan.classList.remove("rn-stop");
    ui.status.textContent = "Selesai dalam " + ((performance.now() - mulaiPada) / 1000).toFixed(2) + " dtk";
  }
  function hentikan() {
    if (worker) { worker.terminate(); worker = null; workerSiap = false; }
    if (berjalan) { tulis("Dihentikan.", "peringatan"); selesai(); }
  }
  function jalankan() {
    if (berjalan) return hentikan();
    ui.konsol.textContent = "";
    ui.status.textContent = "Menjalankan…";
    mulaiPada = performance.now();
    if (S.bahasa === "web") {
      ui.frame.srcdoc = dokumenWeb();
      ui.frame.onload = () => { ui.status.textContent = "Selesai"; };
      return;
    }
    berjalan = true;
    ui.jalan.textContent = "■ Stop";
    ui.jalan.classList.add("rn-stop");
    masukan = [];
    if (S.bahasa === "py") jalanPython(); else jalanSql();
  }

  /* ---------- Buka / tutup ---------- */
  // Dialog materi memakai showModal(), yang membuat sisa halaman tidak bisa diklik. Saat itu tombol ikut masuk ke
  // dialog tersebut, dan laci dibuka sebagai modal supaya berada di atasnya.
  const modalLain = () => [...document.querySelectorAll("dialog[open]")].find(d => d !== dlg && d.matches(":modal"));
  function buka() {
    render();
    if (modalLain()) dlg.showModal(); else dlg.show();
    tombol.setAttribute("aria-expanded", "true");
    ui.editor.focus();
  }
  function tutup() { dlg.close(); }
  dlg.addEventListener("close", () => { tombol.setAttribute("aria-expanded", "false"); tombol.focus({ preventScroll: true }); });
  tombol.addEventListener("click", () => (dlg.open ? tutup() : buka()));
  q(".rn-tutup").addEventListener("click", tutup);

  function pindahTombol() {
    const m = modalLain();
    (m || document.body).appendChild(tombol);
    if (m && dlg.open && !dlg.matches(":modal")) { dlg.close(); dlg.showModal(); }
  }

  /* ---------- Peristiwa editor ---------- */
  ui.bahasa.addEventListener("change", () => { S.bahasa = ui.bahasa.value; hentikan(); ui.konsol.textContent = ""; ui.status.textContent = ""; render(); simpan(); });
  ui.tab.addEventListener("click", e => {
    const b = e.target.closest("button[data-k]");
    if (!b) return;
    S.tab = b.dataset.k; render(); simpan(); ui.editor.focus();
  });
  ui.editor.addEventListener("input", () => { S[S.tab] = ui.editor.value; simpan(); });
  ui.jalan.addEventListener("click", jalankan);
  q(".rn-contoh").addEventListener("click", () => {
    FILE[S.bahasa].forEach(([k]) => { S[k] = CONTOH[k]; });
    render(); simpan();
  });
  if (window.pasangEditorBantu) pasangEditorBantu(ui.editor, () => S.tab);
  ui.editor.addEventListener("keydown", e => {
    if (e.key !== "Tab" || e.ctrlKey || e.altKey || e.metaKey) return;
    e.preventDefault();   // Tab = 2 spasi
    document.execCommand("insertText", false, "  ") || ui.editor.setRangeText("  ", ui.editor.selectionStart, ui.editor.selectionEnd, "end");
    S[S.tab] = ui.editor.value; simpan();
  });
  dlg.addEventListener("keydown", e => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); jalankan(); }
    if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); tutup(); }
  });
  document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.shiftKey && (e.key === "K" || e.key === "k")) { e.preventDefault(); dlg.open ? tutup() : buka(); }
  });

  function pasang() {
    document.body.appendChild(dlg);
    document.body.appendChild(tombol);
    tombol.setAttribute("aria-expanded", "false");
    document.querySelectorAll("dialog").forEach(d => {
      if (d !== dlg) new MutationObserver(pindahTombol).observe(d, { attributes: true, attributeFilter: ["open"] });
    });
  }
  if (document.body) pasang(); else document.addEventListener("DOMContentLoaded", pasang);
})();
