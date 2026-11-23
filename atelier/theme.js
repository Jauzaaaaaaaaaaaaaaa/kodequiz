// Layar pembuka gaya studio: huruf "K" dari kotak-kotak piksel muncul satu per satu,
// penghitung besar 000→100 di kiri bawah (diisi atelier.js), latar gelap pekat.
(function () {
  var K = ["10001", "10010", "11100", "10010", "10001"], n = 0, sel = "";
  K.join("").split("").forEach(function (b) { sel += b === "1" ? '<i class="on" style="--d:' + (n++) + '"></i>' : "<i></i>"; });
  window.AT = { label: "kodequiz", ms: 1400, intro: '<div class="kq-piksel" aria-hidden="true">' + sel + "</div>" };
})();
