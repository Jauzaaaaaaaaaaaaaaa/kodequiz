# -*- coding: utf-8 -*-
"""Pustaka KodeQuiz: ringkasan video YouTube + peta belajar → js/data/pustaka.js

Pakai:
  python -I alat/buat-pustaka.py --ambil   # rangkum video baru lewat alat lokal http://localhost:8765 (D:\\rangkum app)
  python -I alat/buat-pustaka.py           # bangun ulang js/data/pustaka.js dari cache

Daftar video (metadata kurasi: topik, bab terkait, level, alasan) ada di alat/pustaka/daftar.py,
peta belajar di alat/pustaka/peta.py. Hasil mentah alat perangkum (berisi transkrip) disimpan di
alat/video-cache/ dan TIDAK ikut ke situs maupun GitHub; yang masuk ke situs hanya ringkasan.
"""
import json, os, re, sys, time, urllib.parse, urllib.request

DIR = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(DIR, "..")
CACHE = os.path.join(DIR, "video-cache")
API = "http://localhost:8765/api?url="

ns = {}
for f in ("daftar.py", "peta.py"):
    p = os.path.join(DIR, "pustaka", f)
    if os.path.exists(p):
        exec(compile(open(p, encoding="utf-8").read(), p, "exec"), ns)
VIDEO, PETA = ns.get("VIDEO", []), ns.get("PETA", [])


def vid_id(url):
    m = re.search(r"(?:v=|youtu\.be/|shorts/|embed/)([\w-]{11})", url)
    if not m:
        raise SystemExit("URL YouTube tidak dikenali: " + url)
    return m.group(1)


def ambil_json(url, batas):
    with urllib.request.urlopen(url, timeout=batas) as r:
        return json.loads(r.read().decode("utf-8"))


def ambil():
    os.makedirs(CACHE, exist_ok=True)
    for v in VIDEO:
        i = vid_id(v["url"])
        p = os.path.join(CACHE, i + ".json")
        if os.path.exists(p) and json.load(open(p, encoding="utf-8")).get("ai"):
            continue
        print(f"→ {i} ({', '.join(v['topik'])}) ...", flush=True)
        mulai = time.time()
        try:
            d = ambil_json(API + urllib.parse.quote(f"https://www.youtube.com/watch?v={i}"), 420)
        except Exception as e:
            print(f"   ✗ server: {e}"); continue
        if d.get("error"):
            print(f"   ✗ {d['error']}"); continue
        try:   # judul & nama kanal asli
            o = ambil_json("https://www.youtube.com/oembed?format=json&url=" + urllib.parse.quote(f"https://www.youtube.com/watch?v={i}"), 30)
            d["meta"] = {"judul": o.get("title", ""), "kanal": o.get("author_name", "")}
        except Exception:
            d["meta"] = {}
        json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False)
        print(f"   {'✓' if d.get('ai') else '△ tanpa AI: ' + str(d.get('ai_error', ''))[:80]} {d['meta'].get('judul', '')[:70]} ({time.time() - mulai:.0f} dtk)", flush=True)


KATA_ID = set("yang dan ini itu kita kalian adalah dengan untuk tidak akan bisa juga sudah atau karena jadi kalau seperti".split())


def bahasa(d):
    kata = re.findall(r"[a-z]+", " ".join(p["teks"] for p in d.get("lengkap", [])[:300]).lower())
    return "id" if kata and sum(k in KATA_ID for k in kata) / len(kata) > 0.04 else "en"


def bangun():
    keluar, gagal = [], []
    for v in VIDEO:
        i = vid_id(v["url"])
        p = os.path.join(CACHE, i + ".json")
        if not os.path.exists(p):
            gagal.append(i + " (belum diambil)"); continue
        d = json.load(open(p, encoding="utf-8"))
        a = d.get("ai")
        if not a:
            gagal.append(i + " (rangkuman AI belum ada)"); continue
        if not v.get("kenapa"):
            gagal.append(i + " (belum dikurasi: isi kenapa di daftar.py)"); continue
        meta = d.get("meta", {})
        keluar.append({
            "id": "yt-" + i, "yt": i, "judul": v.get("judul") or meta.get("judul") or a["judul"], "kanal": v.get("kanal") or meta.get("kanal", "YouTube"),
            "durasi": d.get("durasi", 0), "bahasa": v.get("bahasa") or bahasa(d), "topik": v["topik"], "bab": [list(x) for x in v.get("bab", [])],
            "level": v.get("level", 1), "tes": v.get("tes", False), "kenapa": v["kenapa"],
            "ringkasan": a["ringkasan"].strip(), "poin": a["poin_utama"][:8], "langkah": a["langkah"][:12], "istilah": a["teknologi"][:12],
        })
    ids = {x["id"] for x in keluar}
    for P in PETA:
        for L in P["langkah"]:
            L["video"] = [x for x in L.get("video", []) if x in ids]   # video yang belum dirangkum tidak ditampilkan
    js = ("// DIBUAT OTOMATIS oleh alat/buat-pustaka.py — jangan edit manual.\n"
          "// Ringkasan video YouTube (dibuat dari transkrip lewat alat perangkum lokal, lalu dikurasi) dan peta belajar.\n"
          f"const PUSTAKA = {json.dumps(keluar, ensure_ascii=False, indent=0)};\n"
          f"const PETA_BELAJAR = {json.dumps(PETA, ensure_ascii=False, indent=0)};\n")
    open(os.path.join(ROOT, "js", "data", "pustaka.js"), "w", encoding="utf-8", newline="\n").write(js)
    print(f"{len(keluar)} video, {len(PETA)} peta belajar ditulis ke js/data/pustaka.js")
    for g in gagal:
        print("  · lewati", g)


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    if "--ambil" in sys.argv:
        ambil()
    bangun()
