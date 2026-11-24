/* ============================================================
   Bantuan mengetik ala VS Code untuk semua editor KodeQuiz (textarea):
   • Autocomplete: tag HTML setelah "<", properti CSS, kata kunci + nama di kodemu (Python/JS/SQL).
     ↑/↓ pilih, Enter/Tab pakai, Esc tutup.
   • Tag penutup otomatis: <strong> → <strong>|</strong>.
   • Pasangan otomatis: ( [ { " ' ` ; mengetik penutup yang sudah ada hanya menggeser kursor;
     Backspace di antara pasangan kosong menghapus keduanya.
   Teks disisipkan lewat execCommand("insertText") supaya Ctrl+Z tetap berfungsi.
   Pakai: pasangEditorBantu(textarea, () => "html" | "css" | "js" | "py" | "sql")
   ============================================================ */
(function () {
  const daftar = s => s.trim().split(/\s+/);
  const TAG = daftar(`!DOCTYPE a abbr address article aside audio b blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd label legend li link main map mark menu meta meter nav noscript object ol optgroup option output p picture pre progress q s samp script search section select slot small source span strong style sub summary sup table tbody td template textarea tfoot th thead time title tr track u ul var video wbr`);
  const KOSONG = new Set(daftar("area base br col embed hr img input link meta source track wbr !DOCTYPE"));
  const CSS = daftar(`align-content align-items align-self animation animation-delay animation-duration animation-name background background-color background-image background-position background-size border border-bottom border-collapse border-color border-left border-radius border-right border-style border-top border-width bottom box-shadow box-sizing color column-gap content cursor display filter flex flex-basis flex-direction flex-grow flex-shrink flex-wrap float font font-family font-size font-style font-weight gap grid grid-area grid-column grid-row grid-template-areas grid-template-columns grid-template-rows height inset justify-content justify-items left letter-spacing line-height list-style margin margin-bottom margin-left margin-right margin-top max-height max-width min-height min-width object-fit opacity outline overflow padding padding-bottom padding-left padding-right padding-top place-items position right row-gap text-align text-decoration text-shadow text-transform top transform transition transition-duration vertical-align visibility white-space width word-break z-index`);
  const NILAI_CSS = daftar(`absolute auto block bold center column flex grid hidden inherit inline inline-block none nowrap pointer relative repeat row solid space-around space-between sticky transparent uppercase wrap`);
  const KATA = {
    py: daftar(`False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield abs all any bool dict enumerate filter float input int isinstance len list map max min open print range reversed round set sorted str sum tuple zip append extend items keys values get split join strip lower upper replace startswith endswith format`),
    js: daftar(`async await break case catch class const continue default delete do else export extends false finally for function if import in instanceof let new null of return switch this throw true try typeof undefined var while yield console log Array Object JSON Math Number String Promise Map Set Date document window addEventListener querySelector querySelectorAll getElementById textContent innerHTML classList forEach map filter reduce find some every includes push pop slice splice sort join split length toFixed parseInt stringify parse`),
    sql: daftar(`SELECT FROM WHERE AND OR NOT IN IS NULL AS ON JOIN LEFT INNER GROUP BY HAVING ORDER ASC DESC LIMIT DISTINCT COUNT SUM AVG MIN MAX ROUND COALESCE CASE WHEN THEN ELSE END WITH UNION ALL LIKE BETWEEN OVER PARTITION RANK ROW_NUMBER DENSE_RANK LAG LEAD strftime date INSERT INTO VALUES UPDATE SET DELETE CREATE TABLE INTEGER TEXT REAL pelanggan produk pesanan pengguna transaksi langganan log_login log_web`),
  };
  const PASANGAN = { "(": ")", "[": "]", "{": "}", '"': '"', "'": "'", "`": "`" };
  const PENUTUP = new Set([")", "]", "}", '"', "'", "`"]);

  let kotak = null, aktif = null;   // aktif = { ta, saran: [], pilih, awal, jenis }
  function buatKotak() {
    kotak = document.createElement("ul");
    kotak.className = "eb-saran";
    kotak.setAttribute("role", "listbox");
    kotak.hidden = true;
    kotak.addEventListener("mousedown", e => {   // mousedown agar textarea tidak kehilangan fokus
      const li = e.target.closest("li");
      if (!li) return;
      e.preventDefault();
      aktif.pilih = +li.dataset.i; terapkan();
    });
  }
  function tutup() { if (kotak) kotak.hidden = true; aktif = null; }

  // Posisi kursor di layar: salin gaya textarea ke div cermin, ukur posisi penanda.
  function posisiKursor(ta) {
    const g = getComputedStyle(ta), c = document.createElement("div");
    for (const p of ["fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "tabSize", "paddingTop", "paddingLeft", "paddingRight", "borderTopWidth", "borderLeftWidth", "boxSizing", "width"]) c.style[p] = g[p];
    c.style.cssText += ";position:absolute;visibility:hidden;white-space:pre-wrap;word-wrap:break-word;top:0;left:-9999px;overflow:hidden";
    if (g.whiteSpace === "pre") c.style.whiteSpace = "pre";
    c.textContent = ta.value.slice(0, ta.selectionStart);
    const tanda = document.createElement("span");
    tanda.textContent = "​";
    c.appendChild(tanda);
    document.body.appendChild(c);
    const r = ta.getBoundingClientRect(), x = r.left + tanda.offsetLeft - ta.scrollLeft, y = r.top + tanda.offsetTop - ta.scrollTop + (parseFloat(g.lineHeight) || 20);
    c.remove();
    return { x: Math.min(x, innerWidth - 240), y: Math.min(y, innerHeight - 40) };
  }

  // Bahasa di posisi kursor: di dalam <style> = css, di dalam <script> = js
  function modeDi(ta, mode) {
    if (mode !== "html") return mode;
    const s = ta.value.slice(0, ta.selectionStart).toLowerCase();
    if (s.lastIndexOf("<style") > s.lastIndexOf("</style")) return "css";
    if (s.lastIndexOf("<script") > s.lastIndexOf("</script")) return "js";
    return "html";
  }

  // Pencocokan ala VS Code: awalan dulu, lalu huruf berurutan (sto → strong). Huruf pertama harus sama.
  function cocokkan(daftar, awalan, maks) {
    const a = awalan.toLowerCase();
    // skor = jumlah posisi huruf yang cocok; makin kecil makin rapat (sto: strong 0+1+3 lebih baik dari section 0+3+5)
    const skor = x => { let i = 0, t = 0; [...x.toLowerCase()].forEach((c, j) => { if (c === a[i]) { t += j; i++; } }); return i === a.length ? t : -1; };
    const lain = x => x.toLowerCase() !== a && (!a || x[0].toLowerCase() === a[0]);
    const awal = daftar.filter(x => lain(x) && x.toLowerCase().startsWith(a));
    const fuzzy = daftar.filter(x => lain(x) && !x.toLowerCase().startsWith(a) && skor(x) >= 0).sort((x, y) => skor(x) - skor(y));
    return [...awal, ...fuzzy].slice(0, maks);
  }
  function cariSaran(ta, mode) {
    const sebelum = ta.value.slice(0, ta.selectionStart), m = modeDi(ta, mode);
    if (m === "html") {
      const t = sebelum.match(/<([!a-zA-Z][\w-]*)?$/);
      if (!t) return null;
      const awalan = (t[1] || "").toLowerCase();
      return { awal: sebelum.length - (t[1] || "").length, jenis: "tag", saran: cocokkan(TAG, awalan, 12) };
    }
    if (m === "css") {
      const prop = sebelum.match(/(?:^|[{;\s])([a-z-]+)$/);
      if (!prop) return null;
      const awalan = prop[1], diNilai = /:[^;{}]*$/.test(sebelum);
      const sumber = diNilai ? NILAI_CSS : CSS;
      return { awal: sebelum.length - awalan.length, jenis: diNilai ? "nilai" : "prop", saran: cocokkan(sumber, awalan, 10) };
    }
    const w = sebelum.match(/[A-Za-z_][\w]*$/);
    if (!w || w[0].length < 2) return null;
    const awalan = w[0];
    const dariKode = new Set((ta.value.match(/[A-Za-z_]\w{2,}/g) || []).filter(x => x !== awalan));
    const semua = [...new Set([...(KATA[m] || []), ...dariKode])];
    return { awal: sebelum.length - awalan.length, jenis: "kata", saran: cocokkan(semua.sort((a, b) => a.length - b.length), awalan, 8) };
  }

  function tampil(ta, mode) {
    const h = cariSaran(ta, mode);
    if (!h || !h.saran.length) return tutup();
    if (!kotak) buatKotak();
    if (!kotak.isConnected) document.body.appendChild(kotak);
    // laci Code Runner memakai <dialog> modal: kotak harus berada di dalam dialog agar terlihat
    const dlg = ta.closest("dialog");
    if (dlg && kotak.parentNode !== dlg) dlg.appendChild(kotak);
    if (!dlg && kotak.parentNode !== document.body) document.body.appendChild(kotak);
    aktif = { ta, mode, ...h, pilih: 0 };
    kotak.innerHTML = h.saran.map((s, i) => `<li role="option" data-i="${i}" class="${i ? "" : "aktif"}"><span class="eb-ikon">${h.jenis === "tag" ? "&lt;&gt;" : h.jenis === "kata" ? "ab" : "#"}</span>${s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]))}</li>`).join("");
    const p = posisiKursor(ta);
    kotak.style.left = p.x + "px"; kotak.style.top = p.y + "px";
    kotak.hidden = false;
  }
  function geser(d) {
    aktif.pilih = (aktif.pilih + d + aktif.saran.length) % aktif.saran.length;
    [...kotak.children].forEach((li, i) => li.classList.toggle("aktif", i === aktif.pilih));
    kotak.children[aktif.pilih].scrollIntoView({ block: "nearest" });
  }
  function sisip(ta, teks) {
    ta.focus();
    if (!document.execCommand("insertText", false, teks)) {   // cadangan bila execCommand tidak didukung
      ta.setRangeText(teks, ta.selectionStart, ta.selectionEnd, "end");
      ta.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }
  function terapkan() {
    const { ta, awal, saran, pilih, jenis } = aktif, kata = saran[pilih];
    ta.setSelectionRange(awal, ta.selectionStart);
    tutup();
    if (jenis === "prop") sisip(ta, kata + ": ");
    else if (kata === "!DOCTYPE") sisip(ta, "!DOCTYPE html>");
    else sisip(ta, kata);
  }

  function saatTombol(e, ta, ambilMode) {
    if (aktif && aktif.ta === ta) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); e.stopImmediatePropagation(); return geser(e.key === "ArrowDown" ? 1 : -1); }
      if ((e.key === "Enter" || e.key === "Tab") && !e.ctrlKey && !e.metaKey && !e.shiftKey) { e.preventDefault(); e.stopImmediatePropagation(); return terapkan(); }
      if (e.key === "Escape") { e.preventDefault(); e.stopImmediatePropagation(); return tutup(); }
    }
    if (e.ctrlKey || e.metaKey || e.altKey || ta.selectionStart !== ta.selectionEnd) return;
    const mode = modeDi(ta, ambilMode()), i = ta.selectionStart, v = ta.value, depan = v[i] || "", belakang = v[i - 1] || "";
    // Enter di antara { } ( ) [ ] atau <tag></tag>: buka blok, penutup turun ke baris sendiri
    if (e.key === "Enter" && !e.shiftKey && (PASANGAN[belakang] === depan && "([{".includes(belakang) || (belakang === ">" && v.slice(i, i + 2) === "</"))) {
      e.preventDefault(); e.stopImmediatePropagation();
      const ind = v.slice(v.lastIndexOf("\n", i - 1) + 1, i).match(/^\s*/)[0], satu = mode === "py" ? "    " : "  ";
      sisip(ta, "\n" + ind + satu + "\n" + ind);
      ta.setSelectionRange(i + 1 + ind.length + satu.length, i + 1 + ind.length + satu.length);
      return;
    }
    // tag penutup otomatis
    if (e.key === ">" && mode === "html") {
      const t = v.slice(0, i).match(/<([a-zA-Z][\w-]*)(?:\s[^<>]*)?$/);
      if (t && !KOSONG.has(t[1].toLowerCase()) && !/\/\s*$/.test(v.slice(0, i))) {
        e.preventDefault(); tutup();
        sisip(ta, `></${t[1]}>`);
        ta.setSelectionRange(i + 1, i + 1);
        return;
      }
    }
    // mengetik penutup yang sudah ada di depan kursor: cukup lompati
    if (PENUTUP.has(e.key) && depan === e.key && belakang !== "\\") { e.preventDefault(); ta.setSelectionRange(i + 1, i + 1); return; }
    // pasangan otomatis, hanya bila setelah kursor kosong/spasi/penutup; kutip tidak dipasangkan setelah huruf (mis. don't)
    if (e.key in PASANGAN && (!depan || /[\s)\]}>,;:]/.test(depan))) {
      const kutip = PASANGAN[e.key] === e.key;
      if (kutip && /[\w\\]/.test(belakang)) return;
      if (kutip && mode === "html" && !/[=\s(]/.test(belakang) && e.key === "'") return;
      e.preventDefault();
      sisip(ta, e.key + PASANGAN[e.key]);
      ta.setSelectionRange(i + 1, i + 1);
      return;
    }
    // Backspace di antara pasangan kosong
    if (e.key === "Backspace" && PASANGAN[belakang] && PASANGAN[belakang] === depan) {
      e.preventDefault();
      ta.setSelectionRange(i - 1, i + 1);
      sisip(ta, "");
    }
  }

  window.pasangEditorBantu = function (ta, ambilMode) {
    if (!ta || ta.dataset.ebPasang) return;
    ta.dataset.ebPasang = "1";
    ta.setAttribute("autocomplete", "off");
    // capture: berjalan sebelum handler editor lain (Tab, Enter, Ctrl+Enter)
    ta.addEventListener("keydown", e => saatTombol(e, ta, ambilMode), true);
    ta.addEventListener("input", e => {
      if (e.inputType && !/^insert/.test(e.inputType)) return tutup();   // menghapus tidak memunculkan saran
      tampil(ta, ambilMode());
    });
    ta.addEventListener("blur", () => setTimeout(() => { if (aktif && aktif.ta === ta && document.activeElement !== ta) tutup(); }, 120));
    ta.addEventListener("scroll", tutup);
    ta.addEventListener("click", tutup);
  };

  /* ---------- Garis merah di baris yang error (ala VS Code) ----------
     Lapisan transparan di atas textarea dengan teks yang sama; baris bermasalah diberi garis bergelombang.
     tandaiBarisSalah(ta, [{ baris: 3, pesan: "NameError: ..." }]) — baris mulai 1. Hilang saat baris itu diubah. */
  const SALIN = ["fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "tabSize", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "boxSizing", "whiteSpace", "wordWrap", "overflowWrap"];
  function lapisan(ta) {
    if (ta._ebLapis) return ta._ebLapis;
    const L = document.createElement("div");
    L.className = "eb-lapis";
    L.setAttribute("aria-hidden", "true");
    const induk = ta.parentNode;
    if (getComputedStyle(induk).position === "static") induk.style.position = "relative";
    induk.insertBefore(L, ta.nextSibling);
    ta.addEventListener("scroll", () => { L.scrollTop = ta.scrollTop; L.scrollLeft = ta.scrollLeft; });
    ta.addEventListener("input", () => { if (ta._ebSalah) gambar(ta); });
    new ResizeObserver(() => { if (ta._ebSalah) gambar(ta); }).observe(ta);
    return (ta._ebLapis = L);
  }
  function gambar(ta) {
    const L = lapisan(ta), g = getComputedStyle(ta);
    // baris yang isinya sudah diubah tidak lagi ditandai
    ta._ebSalah = ta._ebSalah.filter(s => ta.value.split("\n")[s.baris - 1] === s.teks);
    if (!ta._ebSalah.length) { L.hidden = true; return; }
    SALIN.forEach(p => L.style[p] = g[p]);
    L.style.borderColor = "transparent";
    L.style.left = ta.offsetLeft + "px"; L.style.top = ta.offsetTop + "px";
    L.style.width = ta.offsetWidth + "px"; L.style.height = ta.offsetHeight + "px";
    const peta = new Map(ta._ebSalah.map(s => [s.baris, s.pesan]));
    const e = s => s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
    L.innerHTML = ta.value.split("\n").map((b, i) => peta.has(i + 1)
      ? `<span class="eb-baris-salah">${e(b) || "&nbsp;&nbsp;&nbsp;&nbsp;"}</span>` : e(b)).join("\n") + "\n";
    L.hidden = false;
    L.scrollTop = ta.scrollTop; L.scrollLeft = ta.scrollLeft;
  }
  window.tandaiBarisSalah = function (ta, daftar) {
    if (!ta) return;
    const baris = ta.value.split("\n");
    ta._ebSalah = (daftar || []).filter(s => s.baris >= 1 && s.baris <= baris.length).map(s => ({ ...s, teks: baris[s.baris - 1] }));
    if (!ta._ebSalah.length) { if (ta._ebLapis) ta._ebLapis.hidden = true; return; }
    gambar(ta);
  };
  // Baris kemunculan TERAKHIR potongan teks (misalnya token dari pesan SQL: near "x": syntax error)
  window.barisDariTeks = function (kode, potongan) {
    const i = potongan ? kode.lastIndexOf(potongan) : -1;   // SQLite menyebut token terakhir yang dibacanya
    return i < 0 ? null : kode.slice(0, i).split("\n").length;
  };
})();
