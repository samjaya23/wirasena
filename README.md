# Ayam Hijrah Homepage

Homepage prototype untuk Ayam Hijrah — target deploy Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Build output berada di `dist/`.

## Cloudflare Pages

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22 atau versi LTS yang tersedia

## Catatan aset

Foto makanan pada prototype masih berupa placeholder visual dari remote image source. Ganti dengan foto asli Ayam Hijrah sebelum public launch agar sesuai prinsip `Real > Stock` pada report.

## Data yang masih perlu dikonfirmasi

- Logo vector/master resmi
- URL GoFood, GrabFood, dan WhatsApp resmi
- Harga dan availability menu
- Jam operasional
- Foto asli produk, outlet, founder, dan Sedekah Langit
- Rating dan review yang boleh ditampilkan
- Status halal/HaKI terbaru
- Paket, minimum order, dan area delivery catering

Deployment target: Cloudflare Pages project `ayam-hijrah`.

Trigger: Cloudflare Pages source-connected build.
