// ============ GIT & GITHUB — 4 bab ============
// Disusun dari MDN Learn (Version control), Pro Git (git-scm.com/book), dan materi Programmer Zaman Now / WPU.
// Soal konsep (tidak dieksekusi); perintah yang dipakai berlaku untuk Git 2.23+ (git switch / git restore).

const SOAL_GIT = [
// ---- BAB 1: konsep dasar ----
{k:"dasar",t:"mc",lv:1,q:"Beda Git dan GitHub:",o:["Git adalah alat pencatat riwayat perubahan di komputermu; GitHub adalah layanan online untuk menyimpan dan berbagi repository Git","Keduanya sama","GitHub adalah versi baru Git","Git hanya bisa dipakai lewat GitHub"],a:0,
 e:"Git berjalan di komputermu, bahkan tanpa internet. GitHub (juga GitLab, Bitbucket) adalah 'rumah online' untuk repository Git: tempat cadangan, kolaborasi, dan etalase portofolio.\n• Analogi: Git = kamera yang memotret perubahan; GitHub = album online tempat foto disimpan dan dibagikan.",
 w:[null,"Fungsinya berbeda.","GitHub bukan versi Git, tapi layanan yang memakai Git.","Git bisa dipakai sepenuhnya offline."]},
{k:"dasar",t:"mc",lv:1,q:"Perintah untuk mulai melacak sebuah folder proyek dengan Git:",o:["git init","git start","git new","git create"],a:0,
 e:"git init membuat folder tersembunyi .git yang menyimpan seluruh riwayat proyek. Jalankan sekali saja per proyek, di folder utama proyek. Menghapus folder .git = menghapus seluruh riwayat.",
 w:[null,"Perintah itu tidak ada.","Perintah itu tidak ada.","Perintah itu tidak ada."]},
{k:"dasar",t:"mc",lv:2,q:"Urutan tiga 'tempat' perubahan di Git:",o:["Working directory → staging area → repository","Repository → staging → working directory","Staging → GitHub → komputer","Folder → zip → email"],a:0,
 e:"1. Working directory: file yang sedang kamu edit.\n2. Staging area (index): 'keranjang' berisi perubahan yang dipilih untuk disimpan, lewat git add.\n3. Repository: riwayat permanen, lewat git commit.\nStaging memungkinkan kamu menyimpan sebagian perubahan saja dalam satu commit.",
 w:[null,"Terbalik.","GitHub bukan bagian dari tiga area lokal.","Git tidak bekerja dengan zip."]},
{k:"dasar",t:"mc",lv:1,q:"Kamu mengubah index.html dan style.css, tapi hanya ingin menyimpan perubahan index.html di commit berikutnya. Perintahnya:",o:["git add index.html lalu git commit -m \"…\"","git save index.html","git add . lalu git commit","git push index.html"],a:0,
 e:"git add memasukkan file tertentu ke staging; commit hanya menyimpan yang ada di staging. style.css tetap berubah di folder dan bisa di-commit nanti.\n• git add . memasukkan SEMUA perubahan di folder.",
 w:[null,"Perintah git save tidak ada.","Itu ikut memasukkan style.css.","push mengirim ke GitHub, bukan menyimpan commit."]},
{k:"dasar",t:"mc",lv:1,q:"Perintah untuk melihat file mana yang berubah, mana yang sudah di-staging, dan mana yang belum dilacak:",o:["git status","git log","git show","git check"],a:0,
 e:"git status adalah perintah yang paling sering dipakai. Biasakan menjalankannya sebelum add dan sebelum commit, supaya tidak ada file yang tertinggal atau ikut tanpa sengaja.",
 w:[null,"git log menampilkan riwayat commit.","git show menampilkan isi satu commit.","Perintah itu tidak ada."]},
{k:"dasar",t:"mc",lv:2,q:"Pesan commit yang paling baik:",o:["Tambah validasi email di form pendaftaran","update","perbaikan","asdfgh"],a:0,
 e:"Pesan commit dibaca orang lain (dan dirimu enam bulan lagi). Tulis APA yang berubah dengan kalimat perintah singkat (sekitar 50 karakter). Kalau perlu, tambahkan baris kosong lalu penjelasan KENAPA.",
 w:[null,"Tidak menjelaskan apa pun.","Perbaikan apa?","Tidak bermakna."]},
{k:"dasar",t:"mc",lv:1,q:"Menampilkan riwayat commit secara ringkas satu baris per commit:",o:["git log --oneline","git history","git status --short","git list"],a:0,
 e:"Setiap baris menampilkan potongan hash (misalnya a1b2c3d) dan pesan commit. Tambahkan --graph --all untuk melihat cabang dalam bentuk gambar garis.",
 w:[null,"Perintah itu tidak ada.","Itu ringkasan status file, bukan riwayat.","Perintah itu tidak ada."]},
{k:"dasar",t:"mc",lv:2,q:"Beda git diff dan git diff --staged:",o:["git diff = perubahan yang BELUM di-add; --staged = perubahan yang sudah di-add dan akan masuk commit","Sama saja","--staged menampilkan perubahan di GitHub","git diff hanya untuk file baru"],a:0,
 e:"Sebelum commit, jalankan git diff --staged untuk memeriksa sekali lagi isi yang akan disimpan. Baris diawali + berarti ditambahkan, - berarti dihapus.",
 w:[null,"Isinya berbeda.","Keduanya membandingkan perubahan lokal.","File baru yang belum dilacak justru tidak tampil di git diff."]},
{k:"dasar",t:"mc",lv:1,q:"Pertama kali memakai Git di komputer baru, kamu perlu mengatur…",o:["git config --global user.name \"Nama\" dan user.email \"email\"","Password GitHub di setiap file","Alamat IP komputer","Nama folder .git"],a:0,
 e:"Nama dan email dicatat di setiap commit sebagai penulisnya. Pakai email yang sama dengan akun GitHub agar commit terhubung ke profilmu. Cek pengaturan dengan git config --list.",
 w:[null,"Password tidak pernah ditaruh di file.","Git tidak butuh alamat IP.","Nama folder .git tidak diubah."]},
{k:"dasar",t:"mc",lv:2,q:"Yang sebaiknya dimasukkan ke .gitignore:",o:["node_modules/, .venv/, .env, file log dan hasil build","index.html","README.md","package.json"],a:0,
 e:".gitignore berisi pola file yang tidak boleh dilacak:\n• Bisa dibuat ulang: node_modules/, .venv/, dist/, __pycache__/\n• Rahasia: .env, kunci API, file kredensial\n• Sampah sistem: .DS_Store, Thumbs.db, *.log",
 w:[null,"Itu kode utama.","README justru wajib ada.","package.json dibutuhkan untuk npm install."]},
{k:"dasar",t:"mc",lv:2,q:"Commit di Git paling tepat digambarkan sebagai…",o:["Foto (snapshot) seluruh proyek pada satu saat, punya ID unik (hash) dan menunjuk commit sebelumnya","Salinan zip proyek","File yang dikirim ke GitHub","Satu baris perubahan saja"],a:0,
 e:"Setiap commit punya hash SHA-1 seperti a1b2c3d…, penulis, waktu, pesan, dan tautan ke commit induknya. Rangkaian tautan itulah riwayat proyek. Git menyimpannya secara hemat: file yang tidak berubah tidak disalin ulang.",
 w:[null,"Git tidak membuat zip.","Commit tetap lokal sampai di-push.","Satu commit bisa berisi banyak file."]},
{k:"dasar",t:"mc",lv:2,q:"HEAD di Git menunjuk ke…",o:["Commit (biasanya ujung cabang) tempat kamu sedang berada","Commit pertama proyek","Server GitHub","File paling atas di folder"],a:0,
 e:"HEAD adalah penanda 'kamu ada di sini'. Biasanya menunjuk cabang aktif (misalnya main), dan cabang itu menunjuk commit terbarunya. HEAD~1 berarti satu commit sebelum HEAD.",
 w:[null,"Commit pertama disebut root commit.","HEAD itu lokal.","HEAD tidak berhubungan dengan urutan file."]},
{k:"dasar",t:"is",lv:1,q:"Perintah untuk memasukkan perubahan file ke staging area: git ____ nama-file",a:["add"],
 e:"git add . memasukkan semua perubahan; git add -p memilih potongan perubahan satu per satu."},
{k:"dasar",t:"is",lv:1,q:"Nama file berisi daftar pola file yang tidak dilacak Git (tulis dengan titik di depan): ____",a:[".gitignore"],
 e:"Situs gitignore.io atau template GitHub menyediakan .gitignore siap pakai untuk Node, Python, Java, dan lain-lain."},

// ---- BAB 2: branch & merge ----
{k:"cabang",t:"mc",lv:1,q:"Gunanya branch (cabang) di Git:",o:["Mengerjakan fitur atau perbaikan secara terpisah tanpa mengganggu kode utama yang sudah stabil","Membuat cadangan ke flashdisk","Mempercepat komputer","Menghapus riwayat lama"],a:0,
 e:"Bayangkan main sebagai jalan raya utama yang harus selalu bisa dilalui. Fitur baru dikerjakan di jalan cabang. Kalau sudah jadi dan diuji, cabang digabung (merge) kembali ke main. Kalau gagal, cabang cukup dibuang.",
 w:[null,"Branch tidak menyalin ke perangkat lain.","Tidak berhubungan dengan kecepatan.","Branch justru menambah jalur riwayat."]},
{k:"cabang",t:"mc",lv:1,q:"Membuat branch baru bernama fitur-login sekaligus pindah ke sana:",o:["git switch -c fitur-login","git branch fitur-login --go","git new fitur-login","git merge fitur-login"],a:0,
 e:"git switch -c (create) = buat lalu pindah. Perintah lama yang setara: git checkout -b fitur-login. Pindah ke branch yang sudah ada: git switch main.",
 w:[null,"Opsi --go tidak ada.","Perintah itu tidak ada.","merge untuk menggabungkan."]},
{k:"cabang",t:"mc",lv:1,q:"Melihat daftar branch lokal dan branch yang sedang aktif:",o:["git branch","git log","git remote","git status --all"],a:0,
 e:"Branch aktif ditandai bintang (*). git branch -a juga menampilkan branch di remote (GitHub). git branch -d nama menghapus branch yang sudah digabung.",
 w:[null,"git log menampilkan commit.","git remote menampilkan alamat server.","Opsi --all tidak berlaku untuk status."]},
{k:"cabang",t:"mc",lv:2,q:"Fitur di branch fitur-login sudah selesai. Cara menggabungkannya ke main:",o:["git switch main lalu git merge fitur-login","git merge main dari dalam fitur-login saja","git push fitur-login main","git commit --merge"],a:0,
 e:"merge menarik perubahan DARI branch yang disebut KE branch yang sedang aktif. Jadi pindah dulu ke tujuan (main), lalu sebut sumbernya. Di tim, penggabungan ke main biasanya lewat Pull Request di GitHub agar ditinjau dulu.",
 w:[null,"Itu menarik main ke fitur-login, kebalikannya.","push mengirim ke remote, bukan merge lokal.","Opsi itu tidak ada."]},
{k:"cabang",t:"mc",lv:2,q:"Merge 'fast-forward' terjadi ketika…",o:["main tidak punya commit baru sejak branch dibuat, jadi penunjuk main cukup digeser maju","Terjadi konflik","Branch dihapus otomatis","Commit digabung jadi satu"],a:0,
 e:"Kalau main diam saja sementara fitur maju, Git tidak perlu membuat commit gabungan; ia hanya memajukan penunjuk main ke ujung fitur. Kalau keduanya sama-sama maju, Git membuat merge commit yang punya dua induk.",
 w:[null,"Fast-forward justru tanpa konflik.","Branch tidak dihapus otomatis.","Itu squash."]},
{k:"cabang",t:"mc",lv:2,q:"Setelah merge, file berisi tanda seperti ini. Artinya?",kode:"<<<<<<< HEAD\n<h1>Selamat Datang</h1>\n=======\n<h1>Halo, Pelanggan!</h1>\n>>>>>>> fitur-sapaan",o:["Konflik: baris yang sama diubah berbeda di dua branch; kamu harus memilih atau menggabungkan manual","File rusak dan harus dihapus","Git menambahkan komentar otomatis","Merge berhasil sempurna"],a:0,
 e:"Bagian atas (HEAD) = versi branch aktif, bagian bawah = versi branch yang digabung.\n1. Edit file: pilih salah satu atau gabungkan, lalu HAPUS ketiga baris penanda.\n2. git add nama-file\n3. git commit (pesan merge sudah disiapkan)\nKonflik itu normal, bukan bencana. VS Code menyediakan tombol Accept Current / Incoming / Both.",
 w:[null,"File bisa diperbaiki.","Penanda harus dihapus manual, bukan komentar.","Merge berhenti menunggu konflik diselesaikan."]},
{k:"cabang",t:"mc",lv:3,q:"Kebiasaan yang paling mengurangi konflik merge di tim:",o:["Branch berumur pendek, sering menarik perubahan terbaru dari main, dan commit kecil-kecil","Bekerja berbulan-bulan di satu branch tanpa sinkron","Semua orang langsung commit ke main tanpa pull","Mengedit file yang sama bersamaan"],a:0,
 e:"Semakin lama branch terpisah, semakin jauh bedanya dengan main, semakin besar konfliknya. Gabungkan sering, sinkron sering (git pull atau git merge main ke branch-mu), dan bagi pekerjaan agar tidak mengedit bagian yang sama.",
 w:[null,"Itu resep konflik besar.","Perubahan orang lain akan tertimpa atau ditolak.","Justru sumber konflik."]},
{k:"cabang",t:"mc",lv:2,q:"Kamu sedang setengah jalan mengedit, lalu harus pindah branch untuk memperbaiki bug darurat. Belum ingin commit. Perintahnya:",o:["git stash, pindah branch, lalu nanti git stash pop","git reset --hard","Hapus perubahan lalu ketik ulang","git commit -m \"wip\" di branch orang lain"],a:0,
 e:"git stash menyimpan perubahan yang belum di-commit ke 'laci' sementara dan mengembalikan folder ke keadaan bersih. git stash pop mengeluarkannya lagi. git stash list melihat isi laci.",
 w:[null,"reset --hard MENGHAPUS perubahanmu.","Tidak perlu, ada stash.","Mengotori riwayat branch lain."]},
{k:"cabang",t:"mc",lv:3,q:"Beda merge dan rebase:",o:["Merge menyatukan dengan commit gabungan dan menjaga riwayat apa adanya; rebase memindahkan commit-mu ke atas ujung terbaru sehingga riwayat lurus","Rebase menghapus branch","Merge hanya untuk GitHub","Tidak ada bedanya"],a:0,
 e:"Rebase menulis ulang commit (hash-nya berubah). Aturan emas: jangan rebase commit yang sudah di-push dan dipakai orang lain. Untuk pemula, merge lebih aman.",
 w:[null,"Rebase tidak menghapus branch.","Merge bekerja lokal.","Hasil riwayatnya berbeda."]},
{k:"cabang",t:"mc",lv:1,q:"Nama branch yang paling rapi:",o:["fitur/keranjang-belanja","Branch Baru Ani (2)","test123","asdf"],a:0,
 e:"Pola umum: jenis/deskripsi-singkat, huruf kecil, dipisah strip. Contoh: fitur/login-google, perbaikan/total-pajak, dokumen/readme. Hindari spasi.",
 w:[null,"Spasi dan kurung menyulitkan perintah.","Tidak menjelaskan isi.","Tidak bermakna."]},
{k:"cabang",t:"mc",lv:2,q:"Setelah branch fitur-login di-merge ke main, menghapus branch lokalnya:",o:["git branch -d fitur-login","git delete fitur-login","git rm fitur-login","git switch -d fitur-login"],a:0,
 e:"-d hanya menghapus kalau sudah di-merge (aman). -D memaksa hapus walaupun belum di-merge. Commit-nya tetap ada di main karena sudah digabung.",
 w:[null,"Perintah itu tidak ada.","git rm untuk menghapus file.","switch tidak menghapus branch."]},
{k:"cabang",t:"is",lv:1,q:"Perintah untuk menggabungkan branch lain ke branch aktif: git ____ nama-branch",a:["merge"],
 e:"Kalau ada konflik, selesaikan, git add, lalu git commit. Batal di tengah jalan: git merge --abort."},
{k:"cabang",t:"is",lv:2,q:"Perintah untuk menyimpan sementara perubahan yang belum di-commit: git ____",a:["stash"],
 e:"git stash pop mengembalikan dan menghapus dari laci; git stash apply mengembalikan tanpa menghapus."},

// ---- BAB 3: GitHub & kolaborasi ----
{k:"remote",t:"mc",lv:1,q:"Mengunduh repository dari GitHub lengkap dengan seluruh riwayatnya:",o:["git clone https://github.com/pengguna/proyek.git","git download …","git pull https://… (di folder kosong tanpa repo)","Download ZIP selalu setara"],a:0,
 e:"clone membuat folder baru berisi kode, folder .git dengan seluruh riwayat, dan remote bernama origin yang sudah terhubung. Download ZIP hanya memberi file tanpa riwayat dan tanpa koneksi ke GitHub.",
 w:[null,"Perintah itu tidak ada.","pull butuh repository yang sudah ada.","ZIP tidak membawa riwayat Git."]},
{k:"remote",t:"mc",lv:1,q:"Proyek lokal sudah punya commit. Kamu baru membuat repo kosong di GitHub. Menghubungkannya:",o:["git remote add origin https://github.com/kamu/proyek.git","git connect github","git clone ke folder yang sama","git push --new"],a:0,
 e:"origin adalah nama panggilan (alias) untuk alamat remote, supaya tidak perlu mengetik URL panjang. Cek dengan git remote -v.",
 w:[null,"Perintah itu tidak ada.","clone membuat repo baru, bukan menghubungkan.","Opsi itu tidak ada."]},
{k:"remote",t:"mc",lv:1,q:"git push -u origin main yang pertama kali berfungsi untuk…",o:["Mengirim commit branch main ke GitHub dan mengingat pasangan branch-nya, jadi berikutnya cukup git push","Mengunduh dari GitHub","Menghapus branch di GitHub","Membuat akun GitHub"],a:0,
 e:"-u (upstream) menautkan main lokal dengan origin/main. Setelah itu git push dan git pull tanpa argumen sudah tahu ke mana.",
 w:[null,"Itu pull.","push tidak menghapus.","Akun dibuat di situs GitHub."]},
{k:"remote",t:"mc",lv:2,q:"git pull pada dasarnya sama dengan…",o:["git fetch (unduh perubahan) lalu git merge (gabungkan ke branch aktif)","git push","git clone ulang","git commit"],a:0,
 e:"fetch hanya mengunduh tanpa mengubah file kerjamu, jadi aman untuk 'mengintip' dulu (git log origin/main). pull langsung menggabungkan, sehingga bisa memunculkan konflik.",
 w:[null,"push mengirim, bukan mengambil.","clone untuk pertama kali saja.","commit menyimpan perubahan lokal."]},
{k:"remote",t:"mc",lv:2,q:"git push ditolak dengan pesan 'Updates were rejected because the remote contains work that you do not have locally'. Langkah yang benar:",o:["git pull dulu, selesaikan konflik bila ada, lalu git push lagi","git push --force","Hapus repo di GitHub","Clone ulang dan ketik ulang perubahan"],a:0,
 e:"Ada orang lain (atau kamu dari komputer lain) yang sudah push lebih dulu. Ambil dan gabungkan perubahannya, baru kirim. --force akan MENIMPA pekerjaan orang lain; hampir tidak pernah boleh dipakai di branch bersama.",
 w:[null,"--force menghapus commit orang lain di remote.","Berlebihan dan merusak riwayat.","Tidak perlu."]},
{k:"remote",t:"mc",lv:1,q:"Pull Request (PR) di GitHub adalah…",o:["Permintaan agar perubahan di sebuah branch ditinjau lalu digabung ke branch lain (biasanya main)","Perintah git pull di situs","Permintaan pertemanan","Laporan bug"],a:0,
 e:"Di PR, rekan tim membaca perubahan baris demi baris, memberi komentar, meminta revisi, dan menyetujui. Tes otomatis (CI) juga berjalan di sini. Baru setelah disetujui, PR di-merge.",
 w:[null,"Namanya mirip, tapi bukan perintah git pull.","Bukan fitur sosial.","Laporan bug disebut Issue."]},
{k:"remote",t:"mc",lv:2,q:"Ingin menyumbang perbaikan ke proyek open source milik orang lain yang kamu tidak punya akses tulisnya. Alurnya:",o:["Fork → clone fork-mu → branch → commit → push ke fork → buat Pull Request ke repo asli","Langsung push ke repo asli","Email file ke pemilik","Clone lalu push --force"],a:0,
 e:"Fork = salinan repo di akun GitHub-mu sendiri. Kamu bebas push ke fork, lalu mengajukan PR ke repo asli. Pemilik yang memutuskan apakah digabung.",
 w:[null,"Tanpa izin tulis, push ditolak.","Tidak bisa ditinjau dengan baik.","Tetap ditolak tanpa izin."]},
{k:"remote",t:"mc",lv:2,q:"GitHub tidak menerima password akun biasa untuk git push lewat HTTPS. Penggantinya:",o:["Personal Access Token, kunci SSH, atau login lewat Git Credential Manager / GitHub CLI","Password diketik di file README","Mematikan keamanan akun","Tidak bisa push sama sekali"],a:0,
 e:"Sejak 2021 GitHub mewajibkan token atau SSH. Cara paling mudah di Windows: Git for Windows sudah membawa Git Credential Manager yang membuka jendela login browser. Alternatif: gh auth login.",
 w:[null,"Jangan pernah menaruh password di file.","Jangan pernah.","Bisa, dengan token atau SSH."]},
{k:"remote",t:"mc",lv:1,q:"File yang otomatis tampil di halaman depan repository GitHub dan berfungsi sebagai 'brosur' proyek:",o:["README.md","index.html","LICENSE.txt","package.json"],a:0,
 e:"README.md (ditulis dengan Markdown) menjawab: proyek ini apa, tangkapan layar, cara memasang dan menjalankan, teknologi yang dipakai, dan apa yang kamu pelajari. Rekruter sering hanya membaca README.",
 w:[null,"index.html tidak dirender di halaman repo.","LICENSE menjelaskan izin pakai.","package.json untuk npm."]},
{k:"remote",t:"mc",lv:2,q:"Cara gratis menayangkan situs statis (HTML/CSS/JS) langsung dari repository GitHub:",o:["GitHub Pages","GitHub Actions saja tanpa hosting","Gist","GitHub Copilot"],a:0,
 e:"Aktifkan di Settings → Pages, pilih branch dan folder. Situs tayang di namakamu.github.io/proyek. Cocok untuk portofolio. Netlify dan Vercel adalah alternatif populer.",
 w:[null,"Actions untuk otomatisasi; Pages yang menayangkan.","Gist untuk potongan kode.","Copilot asisten AI menulis kode."]},
{k:"remote",t:"mc",lv:2,q:"Fitur GitHub untuk mencatat bug, ide, dan tugas, yang bisa ditautkan ke Pull Request:",o:["Issues","Wiki","Releases","Stars"],a:0,
 e:"Menulis 'Fixes #12' di deskripsi PR otomatis menutup issue nomor 12 saat PR di-merge. Projects (papan Kanban) menyusun issue menjadi rencana kerja.",
 w:[null,"Wiki untuk dokumentasi panjang.","Releases untuk versi rilis.","Stars tanda suka."]},
{k:"remote",t:"mc",lv:3,q:"Di branch-mu, git status menulis 'Your branch is behind origin/main by 3 commits, and can be fast-forwarded'. Artinya:",o:["Ada 3 commit baru di GitHub yang belum kamu ambil; git pull akan memajukan branch-mu tanpa konflik","Kamu punya 3 commit yang belum di-push","3 file rusak","Kamu harus push --force"],a:0,
 e:"behind = tertinggal (remote lebih maju). ahead = kamu punya commit yang belum di-push. diverged = keduanya punya commit masing-masing, pull akan melakukan merge dan mungkin konflik.",
 w:[null,"Itu kondisi 'ahead'.","Tidak ada hubungannya dengan file rusak.","Jangan force; cukup pull."]},
{k:"remote",t:"is",lv:1,q:"Nama bawaan untuk remote utama setelah git clone: ____",a:["origin"],
 e:"Nama lain yang sering dipakai: upstream, untuk repo asli saat kamu bekerja di fork."},
{k:"remote",t:"is",lv:2,q:"Perintah untuk mengunduh perubahan dari remote TANPA langsung menggabungkannya: git ____",a:["fetch"],
 e:"Setelah fetch, lihat dengan git log main..origin/main, lalu gabungkan dengan git merge origin/main bila sudah yakin."},

// ---- BAB 4: membatalkan & kebiasaan profesional ----
{k:"rapi",t:"mc",lv:1,q:"Kamu mengacak-acak style.css dan ingin mengembalikannya ke versi commit terakhir (perubahan belum di-add):",o:["git restore style.css","git revert style.css","git delete style.css","git push style.css"],a:0,
 e:"git restore membuang perubahan di working directory untuk file itu. HATI-HATI: perubahan yang belum di-commit dan dibuang tidak bisa dikembalikan. Perintah lama yang setara: git checkout -- style.css.",
 w:[null,"revert untuk membatalkan commit.","Perintah itu tidak ada.","push mengirim ke remote."]},
{k:"rapi",t:"mc",lv:1,q:"File rahasia.txt sudah terlanjur di-git add, tapi belum di-commit. Mengeluarkannya dari staging tanpa menghapus isinya:",o:["git restore --staged rahasia.txt","git rm rahasia.txt","git reset --hard","git commit --undo"],a:0,
 e:"--staged hanya menurunkan file dari 'keranjang' staging; file dan isinya tetap ada di folder. Lalu tambahkan ke .gitignore bila memang tidak boleh dilacak.",
 w:[null,"git rm menghapus file dari folder juga.","reset --hard membuang semua perubahan.","Opsi itu tidak ada."]},
{k:"rapi",t:"mc",lv:2,q:"Baru saja commit tapi salah ketik di pesannya (belum di-push). Memperbaikinya:",o:["git commit --amend -m \"Pesan yang benar\"","git revert HEAD","Buat repo baru","git push --fix"],a:0,
 e:"--amend mengganti commit terakhir (pesan dan/atau isinya: git add file-yang-lupa lalu git commit --amend). Karena hash-nya berubah, JANGAN amend commit yang sudah di-push ke branch bersama.",
 w:[null,"revert membuat commit pembatal baru, berlebihan untuk salah ketik.","Berlebihan.","Opsi itu tidak ada."]},
{k:"rapi",t:"mc",lv:2,q:"Sebuah commit yang sudah di-push ke main ternyata membawa bug. Cara membatalkan yang AMAN untuk tim:",o:["git revert <hash>: membuat commit baru yang membalik perubahan itu","git reset --hard <hash> lalu push --force","Hapus repository","Edit riwayat di GitHub"],a:0,
 e:"revert tidak menghapus riwayat, hanya menambah commit 'kebalikan'. Riwayat tetap jujur dan rekan tim tidak terganggu. reset + force push menulis ulang riwayat bersama dan bisa menghilangkan pekerjaan orang lain.",
 w:[null,"Merusak riwayat bersama.","Berlebihan.","GitHub tidak menyediakan edit riwayat seperti itu."]},
{k:"rapi",t:"mc",lv:3,q:"Bahaya utama git reset --hard:",o:["Semua perubahan yang belum di-commit dibuang permanen dan branch dipindah ke commit tujuan","Tidak ada bahayanya","Hanya menghapus di GitHub","Menghapus Git dari komputer"],a:0,
 e:"Tiga mode reset:\n• --soft: pindah branch, perubahan tetap di staging.\n• --mixed (bawaan): pindah branch, perubahan kembali ke working directory.\n• --hard: pindah branch DAN buang semua perubahan.\nKalau sudah terlanjur, commit yang 'hilang' masih bisa dicari lewat git reflog (selama belum dibersihkan).",
 w:[null,"Perubahan bisa hilang permanen.","reset bekerja lokal.","Git tetap terpasang."]},
{k:"rapi",t:"mc",lv:3,q:"Kamu terlanjur push file .env berisi API key ke repo publik. Tindakan PALING penting:",o:["Segera cabut (revoke) dan buat ulang API key itu, baru bersihkan file dan tambahkan ke .gitignore","Cukup hapus file lalu commit lagi","Ganti nama file","Jadikan repo private, selesai"],a:0,
 e:"Bot memindai GitHub publik dan bisa menemukan kunci dalam hitungan menit. Menghapus file di commit baru tidak menghapusnya dari riwayat. Anggap kunci sudah bocor: cabut dulu. Setelah itu bersihkan riwayat (git filter-repo / BFG) bila perlu.",
 w:[null,"Kunci masih ada di riwayat commit.","Isinya tetap bocor.","Kunci mungkin sudah tersalin sebelum diprivatkan."]},
{k:"rapi",t:"mc",lv:2,q:"File config.local.json sudah lama dilacak Git. Kamu menambahkannya ke .gitignore, tapi Git tetap mencatat perubahannya. Kenapa dan solusinya?",o:[".gitignore hanya berlaku untuk file yang belum dilacak; jalankan git rm --cached config.local.json lalu commit","Harus restart komputer","Nama di .gitignore harus huruf kapital",".gitignore harus di folder .git"],a:0,
 e:"git rm --cached berhenti melacak file tanpa menghapusnya dari folder. Setelah commit itu, .gitignore akan mengabaikannya.",
 w:[null,"Tidak berhubungan.","Huruf harus sama persis dengan nama file.",".gitignore diletakkan di folder proyek."]},
{k:"rapi",t:"mc",lv:2,q:"Konvensi pesan commit 'Conventional Commits'. Mana yang benar untuk menambah fitur baru?",o:["feat: tambah filter kategori di halaman produk","FEATURE!!! filter","tambah: filter","fix: tambah filter kategori"],a:0,
 e:"Awalan umum:\n• feat: fitur baru\n• fix: perbaikan bug\n• docs: dokumentasi\n• style: format kode (tanpa ubah logika)\n• refactor: rapikan struktur\n• test: tes\n• chore: urusan lain (dependensi, konfigurasi)\nBanyak tim memakainya untuk membuat catatan rilis otomatis.",
 w:[null,"Tidak mengikuti format.","Awalan itu tidak dikenal konvensinya.","fix untuk perbaikan, bukan fitur."]},
{k:"rapi",t:"mc",lv:2,q:"Kebiasaan commit yang paling baik:",o:["Commit kecil, satu perubahan logis per commit, sering","Satu commit besar di akhir minggu","Commit hanya kalau semua fitur selesai","Commit setiap kali menekan Ctrl+S tanpa pesan"],a:0,
 e:"Commit kecil mudah ditinjau, mudah dicari saat ada bug (git bisect), dan mudah dibatalkan satu per satu dengan revert. Tapi tetap bermakna: jangan commit kode yang tidak bisa jalan ke main.",
 w:[null,"Sulit ditinjau dan dibatalkan.","Risiko kehilangan pekerjaan.","Riwayat jadi tidak bermakna."]},
{k:"rapi",t:"mc",lv:2,q:"Mencari siapa dan di commit mana sebuah baris kode terakhir diubah:",o:["git blame nama-file","git who","git log --author saja","git status"],a:0,
 e:"git blame menampilkan, untuk setiap baris, hash commit, penulis, dan tanggal terakhir diubah. Gunanya bukan menyalahkan orang, tapi memahami konteks: buka commit itu untuk membaca alasan perubahannya. VS Code dan GitHub menampilkan hal yang sama secara visual.",
 w:[null,"Perintah itu tidak ada.","--author menyaring commit, bukan per baris.","status tidak menampilkan riwayat."]},
{k:"rapi",t:"mc",lv:1,q:"Menandai commit sebagai versi rilis v1.0.0:",o:["git tag v1.0.0 lalu git push origin v1.0.0","git branch v1.0.0","git commit -m v1.0.0","git release v1.0.0"],a:0,
 e:"Tag adalah label permanen pada satu commit (tidak bergerak seperti branch). Pola penomoran MAJOR.MINOR.PATCH (semantic versioning). GitHub Releases dibuat dari tag.",
 w:[null,"Branch bergerak, tag tidak.","Pesan commit bukan penanda versi.","Perintah itu tidak ada di Git."]},
{k:"rapi",t:"is",lv:1,q:"Perintah untuk membatalkan sebuah commit dengan membuat commit kebalikan (aman untuk riwayat bersama): git ____ <hash>",a:["revert"],
 e:"revert aman di branch bersama; reset dan amend hanya untuk commit lokal yang belum di-push."},
{k:"rapi",t:"is",lv:2,q:"Perintah untuk melihat jejak semua posisi HEAD, berguna menyelamatkan commit yang 'hilang': git ____",a:["reflog"],
 e:"Dari reflog, temukan hash commit yang hilang lalu git switch -c penyelamat <hash>."}
];

const MATERI_GIT = [
{k:"dasar",judul:"Konsep Git: Repository, Commit & Tiga Area",materi:`
<!--pemula--><h4>Untuk pemula: Git = tombol "simpan sebagai" yang pintar</h4>
<p>Pernah punya file <i>skripsi_final.docx</i>, <i>skripsi_final2.docx</i>, <i>skripsi_final_BENERAN.docx</i>? Git menyelesaikan masalah itu untuk kode. Setiap kali pekerjaan mencapai titik yang layak disimpan, kamu membuat <b>commit</b>: foto seluruh proyek beserta catatan "apa yang berubah". Kamu bisa melihat riwayat, membandingkan, dan kembali ke foto mana pun.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>repository (repo)</td><td>folder proyek yang riwayatnya dilacak Git</td></tr>
<tr><td>commit</td><td>satu foto (snapshot) proyek + pesan + penulis + waktu</td></tr>
<tr><td>staging area</td><td>"keranjang" berisi perubahan yang akan masuk commit berikutnya</td></tr>
<tr><td>hash</td><td>ID unik commit, contoh <code>a1b2c3d</code></td></tr>
<tr><td>HEAD</td><td>penanda "kamu sedang di sini"</td></tr>
<tr><td>GitHub</td><td>layanan online untuk menyimpan dan berbagi repo</td></tr></table><!--/pemula-->
<h4>1. Memasang dan mengatur Git</h4>
<pre><code>git --version                                   # cek sudah terpasang (Windows: pasang "Git for Windows")
git config --global user.name "Nama Kamu"
git config --global user.email "email@akun-github.com"
git config --global init.defaultBranch main     # nama cabang utama "main"</code></pre>
<h4>2. Tiga area Git</h4>
<pre><code>  Working directory  --git add--&gt;  Staging area  --git commit--&gt;  Repository (.git)
  (file yang diedit)              (keranjang)                     (riwayat permanen)</code></pre>
<p>Kenapa ada staging? Supaya satu commit berisi <b>satu perubahan yang utuh</b>. Kalau kamu memperbaiki bug dan sekaligus mengganti warna tombol, kamu bisa membuat dua commit terpisah dengan meng-<code>add</code> file yang berbeda.</p>
<h4>3. Alur kerja harian</h4>
<pre><code>git init                       # sekali di awal proyek
git status                     # apa yang berubah?
git add index.html             # masukkan satu file ke staging
git add .                      # atau semua perubahan
git diff --staged              # periksa isi yang akan di-commit
git commit -m "Tambah halaman kontak"
git log --oneline              # lihat riwayat ringkas</code></pre>
<table class="mini-pivot"><tr><th>Perintah</th><th>Gunanya</th></tr>
<tr><td><code>git status</code></td><td>daftar file berubah / di-staging / belum dilacak</td></tr>
<tr><td><code>git diff</code></td><td>baris yang berubah tapi belum di-add</td></tr>
<tr><td><code>git diff --staged</code></td><td>baris yang sudah di-add</td></tr>
<tr><td><code>git log --oneline --graph</code></td><td>riwayat ringkas bergambar cabang</td></tr>
<tr><td><code>git show a1b2c3d</code></td><td>isi satu commit</td></tr></table>
<h4>4. Pesan commit yang baik</h4>
<ul><li>Kalimat perintah singkat (±50 karakter): "Tambah validasi email", "Perbaiki total pajak yang salah".</li><li>Satu commit = satu perubahan logis.</li><li>Kalau perlu penjelasan, tambahkan baris kosong lalu paragraf <b>kenapa</b> perubahan dibuat.</li></ul>
<h4>5. .gitignore</h4>
<pre><code># dependensi (bisa dipasang ulang)
node_modules/
.venv/
vendor/
# hasil build
dist/
__pycache__/
# rahasia
.env
*.key
# sampah sistem
.DS_Store
Thumbs.db
*.log</code></pre>
<div class="catatan">Git melacak perubahan teks dengan sangat baik (kode, CSV, Markdown). File besar seperti video atau dataset ratusan MB sebaiknya tidak di-commit; GitHub menolak file di atas 100 MB. Untuk itu ada Git LFS atau penyimpanan terpisah.</div>
<div class="praktik"><b>Coba sendiri:</b> buat folder <code>latihan-git</code>, jalankan <code>git init</code>, buat <code>index.html</code>, commit. Ubah judulnya, lihat <code>git diff</code>, commit lagi. Tambahkan <code>.gitignore</code> berisi <code>rahasia.txt</code>, buat file itu, dan buktikan dengan <code>git status</code> bahwa ia tidak muncul.</div>
`},
{k:"cabang",judul:"Branch, Merge & Menyelesaikan Konflik",materi:`
<!--pemula--><h4>Untuk pemula: branch = dunia paralel yang aman</h4>
<p>Kamu ingin mencoba desain baru tanpa merusak situs yang sudah jalan. Dengan branch, kamu membuat "salinan jalur" riwayat. Bereksperimen sebebasnya di sana. Kalau berhasil, gabungkan ke jalur utama. Kalau gagal, tinggalkan saja; jalur utama tidak tersentuh. Membuat branch di Git sangat ringan, hanya beberapa byte.</p><!--/pemula-->
<h4>1. Perintah branch</h4>
<pre><code>git branch                     # daftar branch, * = aktif
git switch -c fitur/keranjang  # buat dan pindah
git switch main                # pindah ke main
git branch -d fitur/keranjang  # hapus (yang sudah di-merge)
git log --oneline --graph --all</code></pre>
<p>Perintah lama yang masih sering ditemui di tutorial: <code>git checkout -b nama</code> (= <code>switch -c</code>) dan <code>git checkout nama</code> (= <code>switch</code>).</p>
<h4>2. Merge: menggabungkan</h4>
<pre><code>git switch main               # pindah ke TUJUAN
git merge fitur/keranjang     # tarik dari SUMBER</code></pre>
<table class="mini-pivot"><tr><th>Jenis</th><th>Kapan terjadi</th><th>Hasil</th></tr>
<tr><td>fast-forward</td><td>main tidak bergerak sejak branch dibuat</td><td>penunjuk main digeser maju, tanpa commit baru</td></tr>
<tr><td>merge commit</td><td>main dan branch sama-sama punya commit baru</td><td>commit gabungan dengan dua induk</td></tr>
<tr><td>konflik</td><td>baris yang sama diubah berbeda di kedua sisi</td><td>Git berhenti dan meminta kamu memutuskan</td></tr></table>
<h4>3. Menyelesaikan konflik langkah demi langkah</h4>
<pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
&lt;h1&gt;Selamat Datang&lt;/h1&gt;
=======
&lt;h1&gt;Halo, Pelanggan!&lt;/h1&gt;
&gt;&gt;&gt;&gt;&gt;&gt;&gt; fitur/sapaan</code></pre>
<ol><li><code>git status</code> menunjukkan file mana yang konflik ("both modified").</li><li>Buka file. Bagian antara <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> dan <code>=======</code> adalah versimu (HEAD); antara <code>=======</code> dan <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> adalah versi branch lain.</li><li>Tulis versi akhir yang benar (pilih salah satu atau gabungkan), lalu <b>hapus ketiga baris penanda</b>.</li><li><code>git add nama-file</code></li><li><code>git commit</code></li></ol>
<p>Batal di tengah jalan: <code>git merge --abort</code>. Di VS Code, konflik tampil berwarna dengan tombol <i>Accept Current</i>, <i>Accept Incoming</i>, <i>Accept Both</i>.</p>
<h4>4. stash: laci sementara</h4>
<pre><code>git stash            # simpan perubahan yang belum di-commit
git switch main      # pindah dengan folder bersih
# ... perbaiki bug darurat, commit ...
git switch fitur/keranjang
git stash pop        # keluarkan lagi</code></pre>
<h4>5. Merge vs rebase</h4>
<table class="mini-pivot"><tr><th></th><th>merge</th><th>rebase</th></tr>
<tr><td>Riwayat</td><td>apa adanya, ada commit gabungan</td><td>lurus, seolah dikerjakan berurutan</td></tr>
<tr><td>Hash commit</td><td>tetap</td><td>berubah (ditulis ulang)</td></tr>
<tr><td>Aman untuk commit yang sudah dibagikan?</td><td>ya</td><td><b>tidak</b></td></tr></table>
<h4>6. Strategi branch di tim (GitHub Flow)</h4>
<ol><li><code>main</code> selalu stabil dan siap tayang.</li><li>Setiap pekerjaan di branch sendiri: <code>fitur/…</code>, <code>perbaikan/…</code>.</li><li>Push branch, buka Pull Request, minta review.</li><li>Tes otomatis lulus + disetujui → merge ke main → hapus branch.</li></ol>
<div class="praktik"><b>Coba sendiri (sengaja membuat konflik):</b> di <code>main</code>, ubah <code>&lt;h1&gt;</code> lalu commit. Buat branch <code>coba</code> dari commit sebelumnya (<code>git switch -c coba HEAD~1</code>), ubah <code>&lt;h1&gt;</code> yang sama dengan teks lain, commit. Kembali ke main, <code>git merge coba</code>, lalu selesaikan konfliknya.</div>
`},
{k:"remote",judul:"GitHub: Remote, Push, Pull Request & Kolaborasi",materi:`
<!--pemula--><h4>Untuk pemula: dari laptop ke dunia</h4>
<p>Sampai sekarang semua riwayat ada di laptopmu. Kalau laptop rusak, hilang semua. GitHub menyimpan salinan repo secara online, memudahkan kerja bareng tim, dan menjadi <b>portofolio</b>: rekruter teknologi hampir selalu membuka profil GitHub pelamar.</p>
<table class="mini-pivot"><tr><th>Istilah</th><th>Artinya</th></tr>
<tr><td>remote</td><td>salinan repo di server (GitHub)</td></tr>
<tr><td>origin</td><td>nama panggilan remote utama</td></tr>
<tr><td>clone</td><td>unduh repo lengkap dengan riwayatnya</td></tr>
<tr><td>push / pull</td><td>kirim commit ke remote / ambil commit dari remote</td></tr>
<tr><td>fork</td><td>salinan repo orang lain di akunmu</td></tr>
<tr><td>Pull Request (PR)</td><td>permintaan meninjau dan menggabungkan perubahan</td></tr></table><!--/pemula-->
<h4>1. Menghubungkan proyek lokal ke GitHub</h4>
<pre><code># 1. buat repo kosong di github.com (tanpa README agar tidak bentrok)
git remote add origin https://github.com/kamu/toko-kopi.git
git branch -M main
git push -u origin main          # pertama kali; berikutnya cukup: git push</code></pre>
<p>Saat diminta login, Git for Windows membuka jendela browser (Git Credential Manager). Password akun biasa tidak diterima untuk push; GitHub memakai login browser, Personal Access Token, atau kunci SSH.</p>
<h4>2. Mengambil perubahan</h4>
<table class="mini-pivot"><tr><th>Perintah</th><th>Apa yang terjadi</th></tr>
<tr><td><code>git clone URL</code></td><td>unduh repo baru (sekali)</td></tr>
<tr><td><code>git fetch</code></td><td>unduh commit baru tanpa mengubah file kerja</td></tr>
<tr><td><code>git pull</code></td><td>fetch + merge ke branch aktif</td></tr>
<tr><td><code>git push</code></td><td>kirim commit lokal ke remote</td></tr></table>
<p>Arti pesan <code>git status</code> soal remote: <b>behind</b> = GitHub punya commit yang belum kamu ambil (cukup <code>git pull</code>); <b>ahead</b> = kamu punya commit yang belum di-push; <b>diverged</b> = keduanya punya commit masing-masing, pull akan menggabungkan dan mungkin konflik.</p>
<p>Kebiasaan aman setiap mulai kerja: <code>git switch main</code> → <code>git pull</code> → buat branch baru. Setiap selesai: commit → <code>git push</code>.</p>
<div class="catatan">Pesan "rejected… remote contains work that you do not have" artinya ada commit baru di GitHub. Jalankan <code>git pull</code>, selesaikan konflik bila ada, lalu <code>git push</code>. Jangan <code>git push --force</code> di branch bersama: itu menimpa pekerjaan orang lain.</div>
<h4>3. Alur Pull Request</h4>
<pre><code>git switch -c fitur/filter-kategori
# ... kerja, commit beberapa kali ...
git push -u origin fitur/filter-kategori
# buka GitHub → tombol "Compare &amp; pull request"</code></pre>
<ol><li>Tulis judul jelas dan deskripsi: apa yang berubah, kenapa, cara mengujinya, tangkapan layar bila ada tampilan.</li><li>Tautkan issue: "Closes #12".</li><li>Rekan memberi komentar per baris; perbaiki dengan commit tambahan di branch yang sama (PR otomatis ikut ter-update).</li><li>Setelah disetujui dan tes otomatis (GitHub Actions) lulus, klik Merge, lalu hapus branch.</li></ol>
<h4>4. Menyumbang ke proyek orang lain</h4>
<pre><code>Fork di GitHub → git clone fork-mu → git switch -c perbaikan/typo
→ commit → git push → buat PR dari fork-mu ke repo asli
git remote add upstream https://github.com/pemilik/proyek.git   # agar bisa sinkron
git fetch upstream &amp;&amp; git merge upstream/main</code></pre>
<h4>5. GitHub sebagai portofolio</h4>
<ul><li><b>README.md</b> yang bagus: judul, satu kalimat tujuan, tangkapan layar/GIF, tautan demo, teknologi, cara menjalankan, apa yang kamu pelajari.</li><li><b>GitHub Pages</b> (Settings → Pages) untuk menayangkan situs statis gratis.</li><li><b>Profile README</b>: buat repo bernama sama dengan username-mu; isinya tampil di halaman profil.</li><li>Riwayat commit yang rapi dan konsisten lebih meyakinkan daripada satu commit raksasa "upload proyek".</li></ul>
<div class="praktik"><b>Coba sendiri:</b> push proyek latihanmu ke GitHub dengan README lengkap, aktifkan GitHub Pages, lalu buat satu branch, ubah sesuatu, dan buat Pull Request ke main milikmu sendiri untuk merasakan alurnya.</div>
`},
{k:"rapi",judul:"Membatalkan Perubahan & Kebiasaan Profesional",materi:`
<!--pemula--><h4>Untuk pemula: hampir semua kesalahan di Git bisa diperbaiki</h4>
<p>Salah satu manfaat terbesar Git adalah rasa aman: selama perubahan sudah di-commit, hampir selalu bisa dikembalikan. Bab ini adalah "kotak P3K" Git. Ingat satu aturan: perintah yang <b>menulis ulang riwayat</b> (<code>reset</code>, <code>amend</code>, <code>rebase</code>) hanya untuk commit yang <b>belum di-push</b>.</p><!--/pemula-->
<h4>1. Tabel "aku ingin membatalkan…"</h4>
<table class="mini-pivot"><tr><th>Situasi</th><th>Perintah</th><th>Aman setelah push?</th></tr>
<tr><td>Buang editan file yang belum di-add</td><td><code>git restore file</code></td><td>– (belum commit; editan hilang permanen)</td></tr>
<tr><td>Keluarkan file dari staging</td><td><code>git restore --staged file</code></td><td>–</td></tr>
<tr><td>Perbaiki pesan/isi commit terakhir</td><td><code>git commit --amend</code></td><td>tidak</td></tr>
<tr><td>Batalkan commit terakhir, perubahan tetap ada</td><td><code>git reset --soft HEAD~1</code></td><td>tidak</td></tr>
<tr><td>Batalkan commit yang sudah dibagikan</td><td><code>git revert &lt;hash&gt;</code></td><td><b>ya</b></td></tr>
<tr><td>Berhenti melacak file (tetap di folder)</td><td><code>git rm --cached file</code></td><td>ya</td></tr>
<tr><td>Cari commit yang "hilang"</td><td><code>git reflog</code></td><td>–</td></tr></table>
<h4>2. Tiga mode reset</h4>
<pre><code>git reset --soft HEAD~1    # mundur 1 commit; perubahan tetap di staging
git reset HEAD~1           # (mixed) mundur; perubahan kembali jadi belum di-add
git reset --hard HEAD~1    # mundur DAN buang perubahan. Hati-hati!</code></pre>
<h4>3. Kalau rahasia terlanjur di-commit</h4>
<ol><li><b>Cabut dan buat ulang</b> kunci/password itu di layanan aslinya. Ini langkah terpenting.</li><li>Tambahkan file ke <code>.gitignore</code>, jalankan <code>git rm --cached .env</code>, commit.</li><li>Kalau repo publik, bersihkan riwayat dengan <code>git filter-repo</code> atau BFG, lalu minta tim clone ulang.</li><li>Ke depan: simpan rahasia di <code>.env</code> (diabaikan Git) dan sediakan <code>.env.example</code> berisi nama variabel tanpa nilai.</li></ol>
<h4>4. Pesan commit gaya Conventional Commits</h4>
<pre><code>feat: tambah filter kategori di halaman produk
fix: total pajak dibulatkan dua kali
docs: perbarui cara instalasi di README
refactor: pisahkan fungsi hitung ke harga.js
test: tambah tes diskon 0 dan 100 persen
chore: naikkan versi vite ke 5.4</code></pre>
<h4>5. Alat menelusuri riwayat</h4>
<table class="mini-pivot"><tr><th>Perintah</th><th>Gunanya</th></tr>
<tr><td><code>git log -p file</code></td><td>riwayat perubahan satu file lengkap dengan diff</td></tr>
<tr><td><code>git log --author="Ani" --since="2 weeks ago"</code></td><td>saring riwayat</td></tr>
<tr><td><code>git blame file</code></td><td>siapa dan kapan tiap baris terakhir diubah</td></tr>
<tr><td><code>git bisect</code></td><td>mencari commit penyebab bug dengan pencarian biner</td></tr>
<tr><td><code>git tag v1.0.0</code></td><td>menandai versi rilis</td></tr></table>
<h4>6. Kebiasaan yang membuatmu terlihat profesional</h4>
<ul><li><code>git status</code> sebelum <code>add</code>, <code>git diff --staged</code> sebelum <code>commit</code>.</li><li>Commit kecil dan bermakna; jangan commit kode yang rusak ke main.</li><li>Pull sebelum mulai kerja, push setiap selesai sesi.</li><li>Satu branch per fitur, hapus setelah di-merge.</li><li>Tidak pernah commit <code>node_modules</code>, <code>.venv</code>, <code>.env</code>, atau file berukuran besar.</li><li>README selalu diperbarui.</li></ul>
<div class="praktik"><b>Coba sendiri:</b> di repo latihan, (1) commit dengan pesan salah lalu perbaiki dengan <code>--amend</code>; (2) buat commit "rusak" lalu batalkan dengan <code>git revert</code>; (3) <code>git reset --hard HEAD~1</code> lalu selamatkan commit itu kembali lewat <code>git reflog</code>.</div>
`}
];
