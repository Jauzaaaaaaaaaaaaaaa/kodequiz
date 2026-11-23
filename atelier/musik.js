/* KodeQuiz — musik belajar lo-fi. Lagu ORISINAL yang disintesis langsung oleh Web Audio (tanpa berkas audio,
   tanpa AI lain). Gayanya terinspirasi lo-fi hip hop / city pop kafe (seperti "Caramel Cream Latte." dari Loaf.,
   yang diberikan pengguna sebagai contoh), tetapi akor, ritme, dan melodinya dibuat sendiri; tidak ada melodi
   lagu lain yang disalin.
   Isi: piano elektrik FM dengan tremolo dan goyangan pita, bas lembut, drum berayun 84 BPM, desis piringan hitam,
   melodi pentatonik yang berganti tiap frase. Intro tanpa drum, jeda singkat setiap 16 birama, dua bagian akor.
   Tidak pernah berbunyi sebelum tombol ♪ ditekan. Berhenti saat tab disembunyikan (hemat baterai/CPU).
   Setelan di localStorage 'kq-musik' {nyala, vol}. Berdiri sendiri; di atelier/ supaya tidak ikut cek-soal. */
(function () {
  'use strict';
  var KUNCI = 'kq-musik';
  var set = { nyala: false, vol: 0.5 };
  try { Object.assign(set, JSON.parse(localStorage.getItem(KUNCI)) || {}); } catch (e) { /* mode privat */ }
  var simpan = function () { try { localStorage.setItem(KUNCI, JSON.stringify(set)); } catch (e) { /* abaikan */ } };
  var AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;

  var BPM = 84, STEP = 60 / BPM / 4, AYUN = STEP * 0.17, MAJU = 0.15;
  var mtof = function (m) { return 440 * Math.pow(2, (m - 69) / 12); };
  // [nada piano (MIDI), bas]
  var BAGIAN = [
    [[[53, 57, 60, 64, 67], 41], [[52, 55, 59, 62], 40], [[55, 61, 65, 69], 45], [[53, 57, 60, 64], 38],
     [[58, 62, 65, 69], 43], [[52, 58, 62, 69], 36], [[55, 60, 64, 67], 45], [[53, 58, 60, 67], 36]],
    [[[57, 60, 62, 65], 46], [[55, 60, 64, 67], 45], [[53, 57, 60, 64], 38], [[53, 56, 60, 67], 37],
     [[51, 55, 58, 62], 36], [[51, 57, 62, 65], 41], [[57, 62, 65, 69], 46], [[53, 58, 60, 67], 36]],
  ];
  var MELODI = [72, 74, 77, 79, 81, 84, 86];        // F pentatonik: C D F G A C D
  var POLA_PIANO = [[[0, 1.7], [6, 0.45], [10, 0.9]], [[0, 0.9], [3, 0.45], [8, 1.4]], [[0, 2.6], [11, 0.5]], [[2, 0.5], [6, 0.9], [12, 0.8]]];
  var acak = function (n) { var x = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };   // acak berbenih, lagu tetap sama

  var ctx = null, master, bus = {}, langkah = 0, waktu = 0, pewaktu = 0, debu = null, goyang = null;

  function siapkan() {
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = set.vol * 0.32;
    var hangat = ctx.createBiquadFilter(); hangat.type = 'lowpass'; hangat.frequency.value = 5200;
    var tekan = ctx.createDynamicsCompressor(); tekan.threshold.value = -18; tekan.ratio.value = 3;
    master.connect(hangat); hangat.connect(tekan); tekan.connect(ctx.destination);
    // piano: tremolo → tekan saat kick (efek "pompa" lo-fi) → lowpass
    bus.piano = ctx.createGain(); bus.redam = ctx.createGain();
    var trem = ctx.createOscillator(), tremG = ctx.createGain(); trem.frequency.value = 4.2; tremG.gain.value = 0.12;
    trem.connect(tremG); tremG.connect(bus.piano.gain); trem.start();
    var lpP = ctx.createBiquadFilter(); lpP.type = 'lowpass'; lpP.frequency.value = 3000;
    bus.piano.connect(bus.redam); bus.redam.connect(lpP); lpP.connect(master);
    bus.drum = ctx.createGain(); bus.drum.gain.value = 0.85;
    var lpD = ctx.createBiquadFilter(); lpD.type = 'lowpass'; lpD.frequency.value = 6500;
    bus.drum.connect(lpD); lpD.connect(master);
    bus.bas = ctx.createGain(); bus.bas.gain.value = 0.9; bus.bas.connect(master);
    bus.lead = ctx.createGain(); bus.lead.gain.value = 0.55; bus.lead.connect(master);
    // goyangan pita: detune pelan ±7 sen untuk semua nada piano dan melodi
    goyang = ctx.createGain(); goyang.gain.value = 7;
    var lfo = ctx.createOscillator(); lfo.frequency.value = 0.35; lfo.connect(goyang); lfo.start();
    // derau putih untuk drum
    bus.derau = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    var d = bus.derau.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    // desis dan letupan piringan hitam
    var vb = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate), v = vb.getChannelData(0);
    for (var j = 0; j < v.length; j++) v[j] = (Math.random() * 2 - 1) * 0.012 + (Math.random() < 0.0007 ? (Math.random() * 2 - 1) * 0.6 : 0);
    debu = ctx.createBufferSource(); debu.buffer = vb; debu.loop = true;
    var hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 900;
    var dg = ctx.createGain(); dg.gain.value = 0.22;
    debu.connect(hp); hp.connect(dg); dg.connect(master); debu.start();
  }

  function env(g, t, puncak, serang, lama) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(puncak, t + serang);
    g.gain.exponentialRampToValueAtTime(0.0001, t + lama);
  }
  function piano(t, m, lama, kuat) {
    var f = mtof(m), o = ctx.createOscillator(), mod = ctx.createOscillator(), mg = ctx.createGain(), g = ctx.createGain();
    o.frequency.value = f; mod.frequency.value = f;
    mg.gain.setValueAtTime(f * 1.1 * kuat, t); mg.gain.exponentialRampToValueAtTime(f * 0.06, t + 0.5);
    mod.connect(mg); mg.connect(o.frequency); goyang.connect(o.detune);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.11 * kuat, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.035 * kuat, t + 0.45);
    g.gain.exponentialRampToValueAtTime(0.0001, t + lama + 0.5);
    o.connect(g); g.connect(bus.piano);
    o.start(t); mod.start(t); o.stop(t + lama + 0.6); mod.stop(t + lama + 0.6);
    o.onended = function () { goyang.disconnect(o.detune); };   // lepas sambungan supaya tidak menumpuk saat diputar berjam-jam
  }
  function bas(t, m, lama) {
    var o = ctx.createOscillator(), lp = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = 'triangle'; o.frequency.value = mtof(m); lp.type = 'lowpass'; lp.frequency.value = 620;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.42, t + 0.012);
    g.gain.setTargetAtTime(0.25, t + 0.05, 0.12); g.gain.setTargetAtTime(0.0001, t + lama, 0.05);
    o.connect(lp); lp.connect(g); g.connect(bus.bas); o.start(t); o.stop(t + lama + 0.4);
  }
  function lead(t, m, lama) {
    var o = ctx.createOscillator(), g = ctx.createGain(), vib = ctx.createOscillator(), vg = ctx.createGain();
    o.type = 'triangle'; o.frequency.value = mtof(m); vib.frequency.value = 5; vg.gain.value = 9;
    vib.connect(vg); vg.connect(o.detune); goyang.connect(o.detune);
    env(g, t, 0.07, 0.025, lama + 0.35);
    o.connect(g); g.connect(bus.lead); o.start(t); vib.start(t); o.stop(t + lama + 0.4); vib.stop(t + lama + 0.4);
    o.onended = function () { goyang.disconnect(o.detune); };
  }
  function kick(t, kuat) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(115, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
    env(g, t, 0.85 * kuat, 0.004, 0.42);
    o.connect(g); g.connect(bus.drum); o.start(t); o.stop(t + 0.45);
    bus.redam.gain.setValueAtTime(0.72, t); bus.redam.gain.linearRampToValueAtTime(1, t + 0.28);   // piano sedikit mengalah saat kick
  }
  function derau(t, jenis, frek, puncak, lama) {
    var s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = bus.derau; f.type = jenis; f.frequency.value = frek; f.Q.value = 0.8;
    env(g, t, puncak, 0.002, lama);
    s.connect(f); f.connect(g); g.connect(bus.drum); s.start(t, Math.random() * 0.5); s.stop(t + lama + 0.05);
  }
  function snare(t, kuat) {
    derau(t, 'bandpass', 1700, 0.3 * kuat, 0.2);
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(200, t); o.frequency.exponentialRampToValueAtTime(150, t + 0.08);
    env(g, t, 0.16 * kuat, 0.003, 0.12); o.connect(g); g.connect(bus.drum); o.start(t); o.stop(t + 0.15);
  }

  function mainkan(n, t0) {
    var birama = Math.floor(n / 16), s = n % 16, t = t0 + (s % 2 ? AYUN : 0);
    var frase = Math.floor(birama / 8), akor = BAGIAN[frase % 2][birama % 8], berikut = BAGIAN[Math.floor((birama + 1) / 8) % 2][(birama + 1) % 8];
    var intro = birama < 4, jeda = !intro && birama % 16 >= 14, r = acak(n * 7.3 + 1);
    // piano: pola iringan berbeda per birama, akor digenjreng tipis
    POLA_PIANO[Math.floor(acak(birama * 3.1) * POLA_PIANO.length)].forEach(function (p) {
      if (p[0] !== s) return;
      akor[0].forEach(function (m, i) { piano(t + i * 0.011 + acak(n + i) * 0.006, m, p[1] * STEP * 4, 0.75 + acak(n * 1.7 + i) * 0.3); });
    });
    if (!intro) {
      // bas: akar, kelima, oktaf, dan nada pendekat ke akor berikutnya
      if (s === 0) bas(t, akor[1], STEP * 5);
      else if (s === 7 && r < 0.55) bas(t, akor[1] + 12, STEP * 1.6);
      else if (s === 10) bas(t, akor[1] + 7, STEP * 3);
      else if (s === 14 && r < 0.5) bas(t, berikut[1] - 1, STEP * 1.6);
      if (!jeda) {
        if (s === 0 || s === 10 || (s === 7 && r < 0.4)) kick(t, s === 0 ? 1 : 0.8);
        if (s === 4 || s === 12) snare(t, 0.9);
      }
      if (s % 2 === 0) derau(t, 'highpass', 7600, (s % 4 === 0 ? 0.06 : 0.04) * (0.8 + r * 0.4), s === 14 && r < 0.3 ? 0.22 : 0.045);
      // melodi pada setiap frase ganjil: motif dua birama, berganti tiap frase
      if (frase % 2 === 1 && !jeda) {
        var benih = frase * 31 + (birama % 2) * 7 + s;
        if (acak(benih) < 0.3) {
          var idx = Math.floor(acak(benih * 2.7) * MELODI.length);
          lead(t, MELODI[idx], STEP * (acak(benih * 5.1) < 0.4 ? 3 : 1.5));
        }
      }
    }
  }
  function jadwal() {
    while (waktu < ctx.currentTime + MAJU) { mainkan(langkah, waktu); waktu += STEP; langkah++; }
  }

  function mulai() {
    if (!ctx) siapkan();
    ctx.resume();
    if (!pewaktu) { waktu = ctx.currentTime + 0.12; pewaktu = setInterval(jadwal, 25); }
  }
  function berhenti() {
    clearInterval(pewaktu); pewaktu = 0;
    if (ctx) ctx.suspend();
  }

  var tombol;
  function tampilkan() {
    if (!tombol) return;
    tombol.classList.toggle('kq-musik-nyala', !!set.nyala);
    tombol.setAttribute('aria-pressed', set.nyala ? 'true' : 'false');
    tombol.title = set.nyala ? 'Musik lo-fi menyala (klik untuk mematikan)' : 'Putar musik lo-fi untuk belajar';
  }
  function ubah(nyala) {
    set.nyala = nyala; simpan(); tampilkan();
    if (nyala) mulai(); else berhenti();
  }
  function pasang() {
    var tempat = document.querySelector('.topbar-stat');
    if (!tempat) return;
    tombol = document.createElement('button');
    tombol.type = 'button';
    tombol.className = 'nav-btn ikon kq-musik';
    tombol.innerHTML = '<span class="kq-eq" aria-hidden="true"><i></i><i></i><i></i></span><span class="kq-not" aria-hidden="true">♪</span>';
    tombol.setAttribute('aria-label', 'Musik lo-fi');
    tombol.addEventListener('click', function () { ubah(!set.nyala); });
    tempat.insertBefore(tombol, document.getElementById('btn-tema'));
    tampilkan();
    // pernah dinyalakan: browser melarang bunyi otomatis, jadi lanjut setelah interaksi pertama
    if (set.nyala) {
      var sekali = function (e) {
        if (e.target.closest && e.target.closest('.kq-musik')) return;
        document.removeEventListener('pointerdown', sekali, true); document.removeEventListener('keydown', sekali, true);
        if (set.nyala) mulai();
      };
      document.addEventListener('pointerdown', sekali, true); document.addEventListener('keydown', sekali, true);
    }
  }
  document.addEventListener('visibilitychange', function () {
    if (!ctx || !set.nyala) return;
    if (document.hidden) { clearInterval(pewaktu); pewaktu = 0; ctx.suspend(); } else mulai();
  });

  window.KQMusik = {
    nyala: function () { return !!set.nyala; },
    ubah: ubah,
    vol: function () { return set.vol; },
    aturVol: function (v) { set.vol = Math.min(1, Math.max(0, +v)); simpan(); if (master) master.gain.setTargetAtTime(set.vol * 0.32, ctx.currentTime, 0.05); },
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pasang); else pasang();
})();
