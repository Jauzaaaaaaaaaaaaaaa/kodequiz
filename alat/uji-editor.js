// Uji pemeriksa indentasi Python di js/fitur/editor-bantu.js.  Pakai: node alat/uji-editor.js
const fs = require("fs"), path = require("path"), assert = require("assert");
global.window = global;
global.document = { createElement: () => ({}) };
eval(fs.readFileSync(path.join(__dirname, "../js/fitur/editor-bantu.js"), "utf8"));
const kasus = [
  ["def f(x):\n    if x > 0:\n    return 1\n    return 0", [3]],   // lupa menjorok setelah if
  ["def f(x):\nreturn x", [2]],
  ["x = 1\n    y = 2", [2]],                                       // menjorok tanpa titik dua
  ["for i in range(3):\n    if i:\n        print(i)\n  print(0)", [4]],   // jorok tidak sejajar blok mana pun
  ["def f():\n    a = [1,\n  2]\n    return a", []],               // isi kurung boleh bebas
  ['s = """\n  teks\n"""\nif s:\n    print(s)', []],                // teks tiga kutip
  ['d = {"a": 1}\nprint(d)', []],
  ["if x:  # komentar\n    pass\nelse:\n    pass", []],
  ["x = 1 + \\\n    2", []],                                        // sambung baris dengan \
];
for (const [kode, harap] of kasus) assert.deepStrictEqual(cekIndenPy(kode).map(m => m.baris), harap, kode);
console.log(`✓ ${kasus.length} kasus indentasi lulus`);
