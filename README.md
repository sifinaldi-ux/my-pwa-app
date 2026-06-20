# My PWA App (Praktikum React + PWA)

Starter project ini sudah berisi struktur dasar Create React App dengan
konfigurasi PWA (manifest, service worker, icon) sesuai modul praktikum.

## 1. Install dependencies

```bash
npm install
```

> Catatan: `node_modules` TIDAK disertakan di dalam zip ini (ukurannya besar),
> jadi wajib jalankan `npm install` dulu sebelum `npm start`.

## 2. Jalankan secara lokal

```bash
npm start
```

Buka `http://localhost:3000`, lalu cek di Chrome DevTools:
- **Application > Manifest** — pastikan nama, icon, theme color terbaca.
- **Application > Service Workers** — pastikan service worker terdaftar
  (catatan: di mode development, register() tetap dipanggil tapi service
  worker hanya benar-benar aktif penuh di production build).
- **Lighthouse audit** (Ctrl+Shift+P → "Lighthouse") untuk skor PWA.

## 3. Build untuk produksi

```bash
npm run build
```

Folder `build/` akan berisi file statis siap deploy, lengkap dengan
service worker dan manifest yang sudah di-precache.

## 4. Deploy ke Netlify

Ada dua cara, pilih salah satu:

### Cara A — Drag & drop (paling cepat, tanpa GitHub)
1. Jalankan `npm run build` di komputer kamu.
2. Buka https://app.netlify.com/ dan login/daftar.
3. Di dashboard, cari area **"Add new site" → "Deploy manually"**.
4. Drag folder `build/` (bukan folder project, tapi folder hasil build-nya)
   ke area drop tersebut.
5. Netlify otomatis upload dan memberi URL `https://nama-acak.netlify.app`.

### Cara B — Lewat GitHub (auto-deploy setiap push)
1. Push folder project ini ke repository GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit PWA"
   git branch -M main
   git remote add origin <url-repo-github-kamu>
   git push -u origin main
   ```
2. Buka https://app.netlify.com/ → **"Add new site" → "Import an existing project"**.
3. Pilih **GitHub**, lalu authorize dan pilih repo yang baru di-push.
4. Isi konfigurasi build:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
5. Klik **Deploy site**. Netlify akan build otomatis dan memberi URL live.
6. Setiap kali kamu `git push` lagi, Netlify otomatis build ulang & deploy.

### 5. Uji hasil deploy
- Buka URL Netlify di Chrome.
- Cek lagi DevTools > Application > Manifest & Service Worker — sekarang harus
  benar-benar aktif karena sudah HTTPS (syarat wajib service worker).
- Coba matikan koneksi internet (DevTools > Network > Offline) lalu reload
  — halaman tetap muncul karena sudah di-cache oleh service worker.
- Di HP (Chrome Android): buka URL, klik menu "⋮" → **"Add to Home screen"**
  untuk install sebagai app.

## Struktur folder

```
my-pwa-app/
├── public/
│   ├── icons/
│   │   ├── icon-192x192.png
│   │   └── icon-512x512.png
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── service-worker.js
│   └── serviceWorkerRegistration.js
├── package.json
└── README.md
```

Icon di `public/icons/` pada zip ini adalah placeholder sederhana
(background biru + teks "PWA"). Ganti dengan logo asli kamu sebelum deploy
final, ukuran 192x192 dan 512x512 px, format PNG.
