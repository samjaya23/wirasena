import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const root = new URL('../dist/', import.meta.url)
const template = await readFile(new URL('index.html', root), 'utf8')
const routes = {
  '/menu/': {
    title: 'Menu Ayam Hijrah — Ayam Bakar Madu dan Pilihan Lain',
    description: 'Lihat menu Ayam Hijrah: Ayam Bakar Madu, nasi, ayam pilihan, supporting menu, dan sambal signature.',
    heading: 'Menu Ayam Hijrah',
    copy: 'Ayam Bakar Madu, pilihan ayam, supporting menu, dan sambal signature dari Jagakarsa.',
  },
  '/menu/ayam-bakar-madu/': {
    title: 'Ayam Bakar Madu — Menu Signature Ayam Hijrah',
    description: 'Kenali Ayam Bakar Madu signature Ayam Hijrah: ayam berbumbu meresap, finishing madu, aroma bara, dan sambal khas dari Jagakarsa.',
    heading: 'Ayam Bakar Madu',
    copy: 'Ayam muda dengan bumbu meresap, finishing madu, aroma bara, dan sambal khas.',
  },
  '/pesan/': {
    title: 'Pesan Ayam Hijrah — Ayam Bakar Madu',
    description: 'Susun pesanan Ayam Hijrah dan pilih channel konfirmasi yang paling nyaman.',
    heading: 'Pesan Ayam Hijrah',
    copy: 'Susun pesananmu dan siapkan ringkasan untuk dikonfirmasi tim Ayam Hijrah.',
  },
  '/catering/': {
    title: 'Catering dan Nasi Box — Ayam Hijrah',
    description: 'Kebutuhan nasi box dan catering untuk kantor, meeting, sekolah, pengajian, gathering, dan acara.',
    heading: 'Catering Ayam Hijrah',
    copy: 'Nasi box yang enak untuk acara yang berarti.',
  },
  '/cerita-kami/': {
    title: 'Cerita Kami — Ayam Hijrah',
    description: 'Perjalanan Ayam Hijrah dari dapur rumah, tiga ekor ayam, hingga tumbuh bersama pelanggan.',
    heading: 'Cerita Kami',
    copy: 'Dari dapur rumah, sebuah keputusan untuk hijrah berubah menjadi usaha yang tumbuh bersama pelanggan.',
  },
  '/sedekah-langit/': {
    title: 'Sedekah Langit — Ayam Hijrah',
    description: 'Kenali semangat berbagi Ayam Hijrah melalui program Sedekah Langit.',
    heading: 'Sedekah Langit',
    copy: 'Makan enak. Berbagi kebaikan.',
  },
}

for (const [route, data] of Object.entries(routes)) {
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${data.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${data.description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://ayam-hijrah.pages.dev${route}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${data.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${data.description}" />`)
    .replace('<div id="root"></div>', `<div id="root"></div><noscript><main><h1>${data.heading}</h1><p>${data.copy}</p><p>JavaScript diperlukan untuk interaksi menu dan pemesanan.</p></main></noscript>`)
  const output = new URL(`.${route}index.html`, root)
  await mkdir(dirname(output.pathname), { recursive: true })
  await writeFile(output, html)
}
