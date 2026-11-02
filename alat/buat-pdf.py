# Membuat ulang 6 PDF Book (ukuran layar HP) di folder buku/ dari isi aplikasi.
# Pakai:  pip install playwright && playwright install chromium
#         python alat/buat-pdf.py
import asyncio, sys
from playwright.async_api import async_playwright
import pathlib
ROOT = str(pathlib.Path(__file__).resolve().parent.parent)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        page = await b.new_page()
        await page.goto("file://" + ROOT + "/index.html")
        await page.wait_for_timeout(1500)
        sets = await page.evaluate("KQBuku.BUKU_SET")
        for s in sets:
            await page.evaluate("([t, j]) => KQBuku.siapkanCetak(t, j, 'hp')", [s["topik"], f"Buku {s['id']} — {s['judul']}"])
            await page.wait_for_timeout(400)
            await page.pdf(path=f"{ROOT}/{s['file']}", prefer_css_page_size=True, print_background=True, outline=True, tagged=True)
            print("✓", s["file"])
        await b.close()
    # info halaman & ukuran → js/data/buku-info.js (dipakai rak buku di aplikasi)
    import os, re, json
    info = {}
    for s in sets:
        f = os.path.join(ROOT, s["file"])
        try:
            import pypdf
            hal = len(pypdf.PdfReader(f).pages)
        except Exception:
            hal = len(re.findall(rb"/Type\s*/Page[^s]", open(f, "rb").read()))
        info[s["id"]] = {"hal": hal, "kb": round(os.path.getsize(f) / 1024)}
    with open(os.path.join(ROOT, "js", "data", "buku-info.js"), "w") as fo:
        fo.write("// Info buku PDF di folder buku/ (jumlah halaman & ukuran). Dibuat otomatis oleh alat/buat-pdf.py.\n")
        fo.write("const BUKU_INFO = " + json.dumps(info) + ";\n")
    print("info:", info)
asyncio.run(main())
