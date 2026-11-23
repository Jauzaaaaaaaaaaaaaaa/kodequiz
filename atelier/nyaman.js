/* KodeQuiz nyaman di mata: tombol ukuran huruf (Aa) di topbar dan pengingat istirahat mata 20-20-20.
   Berdiri sendiri (tidak menyentuh app.js). Setelan disimpan di localStorage 'kq-nyaman'.
   Sengaja di folder atelier/, bukan js/, supaya tidak ikut dijalankan alat/cek-soal.js yang tanpa DOM. */
(function () {
  'use strict';
  var KUNCI = 'kq-nyaman';
  var SKALA = [1, 1.0625, 1.125, 1.25];
  var NAMA = ['normal', 'sedikit besar', 'besar', 'paling besar'];
  var set = { skala: 1, istirahat: true };
  try { Object.assign(set, JSON.parse(localStorage.getItem(KUNCI)) || {}); } catch (e) { /* mode privat */ }
  var simpan = function () { try { localStorage.setItem(KUNCI, JSON.stringify(set)); } catch (e) { /* abaikan */ } };
  var root = document.documentElement;
  root.style.setProperty('--skala', set.skala);

  function pasangTombol() {
    var tempat = document.querySelector('.topbar-stat');
    if (!tempat) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'nav-btn ikon kq-aa';
    b.textContent = 'Aa';
    var label = function () {
      var i = Math.max(0, SKALA.indexOf(set.skala));
      b.dataset.tingkat = i + 1;
      b.title = 'Ukuran huruf: ' + NAMA[i] + ' (klik untuk mengganti)';
      b.setAttribute('aria-label', b.title);
    };
    label();
    b.addEventListener('click', function () {
      set.skala = SKALA[(Math.max(0, SKALA.indexOf(set.skala)) + 1) % SKALA.length];
      root.style.setProperty('--skala', set.skala);
      simpan();
      label();
    });
    tempat.insertBefore(b, document.getElementById('btn-tema'));
  }

  function pengingat() {
    var BATAS = 20 * 60 * 1000, aktif = 0, lalu = performance.now(), mundur = 0;
    var PESAN = 'Sudah 20 menit menatap layar. Istirahatkan mata: lihat benda sejauh ±6 meter selama 20 detik.';
    var kotak = document.createElement('div');
    kotak.className = 'kq-istirahat';
    kotak.setAttribute('role', 'status');
    kotak.innerHTML = '<p></p><button type="button" class="btn btn-utama btn-kecil" data-aksi="mulai">Mulai 20 detik</button>' +
      '<button type="button" class="btn btn-garis btn-kecil" data-aksi="nanti">Nanti</button>' +
      '<button type="button" class="kq-tutup" data-aksi="matikan" title="Jangan ingatkan lagi" aria-label="Jangan ingatkan lagi">×</button>';
    document.body.appendChild(kotak);
    var teks = kotak.querySelector('p');
    var tombol = kotak.querySelectorAll('button');
    var tutup = function () {
      kotak.classList.remove('tampil');
      clearInterval(mundur);
      tombol.forEach(function (x) { x.hidden = false; });
    };
    kotak.addEventListener('click', function (e) {
      var aksi = e.target.getAttribute('data-aksi');
      if (aksi === 'nanti') { tutup(); aktif = BATAS - 5 * 60 * 1000; }
      if (aksi === 'matikan') { tutup(); set.istirahat = false; simpan(); }
      if (aksi === 'mulai') {
        var sisa = 20;
        tombol.forEach(function (x) { x.hidden = true; });
        teks.textContent = 'Lihat ke kejauhan dulu… 20';
        mundur = setInterval(function () {
          sisa--;
          teks.textContent = sisa > 0 ? 'Lihat ke kejauhan dulu… ' + sisa : 'Selesai. Selamat lanjut belajar.';
          if (sisa <= 0) { clearInterval(mundur); setTimeout(tutup, 1800); aktif = 0; }
        }, 1000);
      }
    });
    setInterval(function () {
      var kini = performance.now();
      if (document.visibilityState === 'visible') aktif += kini - lalu;
      lalu = kini;
      if (set.istirahat && aktif >= BATAS && !kotak.classList.contains('tampil')) {
        teks.textContent = PESAN;
        kotak.classList.add('tampil');
      }
    }, 15000);
  }

  function mulai() { pasangTombol(); pengingat(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mulai);
  else mulai();
})();
