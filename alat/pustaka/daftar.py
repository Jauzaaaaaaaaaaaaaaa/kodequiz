# -*- coding: utf-8 -*-
# Daftar video Pustaka KodeQuiz (kurasi). Setiap entri: url, topik (kunci TOPIK_INFO), bab [(topik, kunci_bab)],
# level 1–3, tes (berguna untuk tes kerja), kenapa (alasan menonton, ditulis setelah rangkuman dibaca).
# Entri tanpa "kenapa" belum ditampilkan di situs.

def V(url, topik, bab=(), level=1, tes=False, kenapa="", **kw):
    return dict(url=url, topik=list(topik), bab=list(bab), level=level, tes=tes, kenapa=kenapa, **kw)

VIDEO = [
    # ---- gelombang 1 (2026-11-24) ----
    V("https://www.youtube.com/watch?v=NBZ9Ro6UKV8", ["html"], [("html", "struktur")]),
    V("https://www.youtube.com/watch?v=jxlzq_4bHW4", ["html"], [("html", "struktur")]),
    V("https://www.youtube.com/watch?v=u044iM9xsWU", ["css"], [("css", "layout")]),
    V("https://www.youtube.com/watch?v=K74l26pE4YA", ["css"], [("css", "layout")]),
    V("https://www.youtube.com/watch?v=rg7Fvvl3taU", ["css"], [("css", "posisi"), ("css", "gridlanjut")]),
    V("https://www.youtube.com/watch?v=RvYYCGs45L4", ["js"], [("js", "async")]),
    V("https://www.youtube.com/watch?v=UgEaJBz3bjY", ["js"], [("js", "strobj")]),
    V("https://www.youtube.com/watch?v=fmZX-5r0t5E", ["python"], [("python", "dasar")]),
    V("https://www.youtube.com/watch?v=h0nxCDiD-zg", ["sql"], [("sql", "select"), ("sql", "join")]),
    V("https://www.youtube.com/watch?v=-fW2X7fh7Yg", ["sql"], [("sql", "groupby")], tes=True),
    V("https://www.youtube.com/watch?v=O32HmSmdZ0U", ["erp", "ct"], [("ct", "model"), ("ct", "view"), ("erp", "viewxml")], level=2),
    V("https://www.youtube.com/watch?v=G1clo4yPUBM", ["erp", "ct"], [("ct", "inherit")], level=2),
]
