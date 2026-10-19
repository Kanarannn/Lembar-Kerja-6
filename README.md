# Nexora Digital

Situs profil Nexora Digital dibuat dengan React, Vite 8, Tailwind CSS 4, React Router DOM 7, dan Lucide React.

## Menjalankan secara lokal

Memerlukan Node.js 20.19 atau lebih baru (atau 22.12 ke atas), sesuai persyaratan Vite 8.

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan di terminal (biasanya http://localhost:5173).

```bash
npm run build
npm run preview
```

## Rute

| Path       | Halaman       |
| ---------- | ------------- |
| `/`        | Beranda       |
| `/about`   | Tentang Kami  |
| `/services`| Layanan       |
| `/contact` | Kontak        |
| `*`        | 404           |

Untuk hosting statis, arahkan rute yang tidak dikenal ke `index.html` agar halaman dapat dibuka langsung.

## Konten

| Konten                | Berkas                 |
| --------------------- | ---------------------- |
| Informasi perusahaan  | `src/data/company.js`  |
| Layanan dan alur kerja| `src/data/services.js` |
| Tim dan foto          | `src/data/team.js`     |
| Warna dan jenis huruf | `src/index.css`        |

Foto anggota tim berada di `src/photo/`.
