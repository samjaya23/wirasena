import { useEffect, useState } from 'react'
import './styles.css'

const menuItems = [
  {
    name: 'Ayam Bakar Madu',
    category: 'signature',
    description: 'Ayam bakar signature dengan glaze madu dan sambal khas.',
    price: 'Rp 26.000',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Nasi Ayam Bakar Madu',
    category: 'signature',
    description: 'Paket lengkap untuk makan siang atau makan malam.',
    price: 'Rp 33.000',
    badge: 'Favorit',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Sambal Signature',
    category: 'sambal',
    description: 'Pelengkap dengan karakter pedas dan gurih yang kuat.',
    price: 'Rp 8.000',
    badge: 'Pelengkap',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85',
  },
]

const categories = [
  { label: 'Signature', value: 'signature' },
  { label: 'Ayam', value: 'ayam' },
  { label: 'Sambal', value: 'sambal' },
]

const Icon = ({ name, size = 20 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    flame: <><path d="M12 21c4.5 0 7-3 7-6.5 0-2.6-1.4-4.9-3.7-6.8.1 2.2-1.1 3.5-2.1 4.1.1-3.5-1.5-6.2-4.6-8.8.2 3.4-3.6 5.5-3.6 10.2C5 18 8.1 21 12 21Z" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

function App() {
  const [activeCategory, setActiveCategory] = useState('signature')
  const [orderOpen, setOrderOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [noticeOpen, setNoticeOpen] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('modal-open', orderOpen || mobileOpen)
    return () => document.body.classList.remove('modal-open')
  }, [orderOpen, mobileOpen])

  const visibleItems = menuItems.filter((item) => item.category === activeCategory)

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="site-shell">
      {noticeOpen && (
        <div className="announcement">
          <div className="container announcement-inner">
            <span><span className="announcement-dot" /> Pesan nasi box untuk meeting, gathering, dan acara.</span>
            <button className="announcement-close" onClick={() => setNoticeOpen(false)} aria-label="Tutup pengumuman"><Icon name="close" size={16} /></button>
          </div>
        </div>
      )}

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Ayam Hijrah home">
            <span className="brand-mark">AH</span>
            <span className="brand-wordmark"><strong>Ayam</strong><em>Hijrah</em></span>
          </a>
          <nav className={`desktop-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Navigasi utama">
            <button onClick={() => scrollTo('menu')}>Menu</button>
            <button onClick={() => scrollTo('catering')}>Catering</button>
            <button onClick={() => scrollTo('cerita')}>Cerita Kami</button>
            <button onClick={() => scrollTo('sedekah')}>Sedekah Langit</button>
            <button onClick={() => scrollTo('partnership')}>Partnership</button>
          </nav>
          <div className="nav-actions">
            <button className="button button-primary button-small" onClick={() => setOrderOpen(true)}>Pesan Sekarang <Icon name="arrow" size={16} /></button>
            <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={mobileOpen}><Icon name={mobileOpen ? 'close' : 'menu'} size={22} /></button>
          </div>
        </div>
        {mobileOpen && (
          <div className="mobile-panel">
            <div className="container mobile-panel-inner">
              <button onClick={() => scrollTo('menu')}>Menu <Icon name="arrow" size={17} /></button>
              <button onClick={() => scrollTo('catering')}>Catering <Icon name="arrow" size={17} /></button>
              <button onClick={() => scrollTo('cerita')}>Cerita Kami <Icon name="arrow" size={17} /></button>
              <button onClick={() => scrollTo('sedekah')}>Sedekah Langit <Icon name="arrow" size={17} /></button>
              <button onClick={() => scrollTo('partnership')}>Partnership <Icon name="arrow" size={17} /></button>
              <button className="button button-primary mobile-order" onClick={() => { setMobileOpen(false); setOrderOpen(true) }}>Pesan Sekarang <Icon name="arrow" size={17} /></button>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero section-dark">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Signature Ayam Hijrah</div>
              <h1>Ayam Bakar Madu<br /><span>yang bikin balik lagi.</span></h1>
              <p className="hero-lead">Ayam empuk dengan bumbu meresap, finishing madu yang khas, dan sambal penuh karakter.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => setOrderOpen(true)}>Pesan Sekarang <Icon name="arrow" size={18} /></button>
                <button className="button button-ghost" onClick={() => scrollTo('menu')}>Lihat Menu</button>
              </div>
              <div className="hero-meta"><span className="meta-icon"><Icon name="pin" size={15} /></span> Lahir dari Jagakarsa sejak 2020</div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <img src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1400&q=90" alt="Ayam bakar dengan glaze madu dan grill mark" />
                <div className="hero-image-overlay" />
              </div>
              <div className="hero-stamp"><span>HONEY</span><strong>×</strong><span>FIRE</span></div>
              <div className="hero-note"><span className="note-dot" /> Bumbu meresap. Bara terasa.</div>
            </div>
          </div>
        </section>

        <section className="quick-strip">
          <div className="container quick-grid">
            <button onClick={() => setOrderOpen(true)}><span className="quick-icon"><Icon name="flame" size={20} /></span><span><strong>Pesan delivery</strong><small>GoFood · GrabFood · WhatsApp</small></span><Icon name="arrow" size={18} /></button>
            <button onClick={() => scrollTo('menu')}><span className="quick-icon honey-icon">✦</span><span><strong>Lihat menu signature</strong><small>Ayam Bakar Madu & pelengkap</small></span><Icon name="arrow" size={18} /></button>
            <button onClick={() => scrollTo('lokasi')}><span className="quick-icon"><Icon name="pin" size={20} /></span><span><strong>Datang ke outlet</strong><small>Jl. Sirsak No.21, Jagakarsa</small></span><Icon name="arrow" size={18} /></button>
          </div>
        </section>

        <section className="formula section-cream" id="formula">
          <div className="container">
            <div className="section-intro centered"><div className="eyebrow"><span className="eyebrow-line" /> Kenapa berbeda</div><h2>Bukan sekadar<br /><span>ayam bakar.</span></h2><p>Lima langkah sederhana yang membuat rasa Ayam Hijrah punya karakter sendiri.</p></div>
            <div className="formula-grid">
              {[
                ['01', 'Ayam', 'Ayam muda dengan tekstur yang nyaman disantap.'],
                ['02', 'Bumbu', 'Bumbu dimasukkan agar rasa tidak berhenti di permukaan.'],
                ['03', 'Madu', 'Finishing madu memberi glaze manis yang khas.'],
                ['04', 'Bara Api', 'Dibakar untuk aroma dan grill mark yang menggoda.'],
                ['05', 'Sambal', 'Sambal khas sebagai penyeimbang rasa.'],
              ].map(([number, title, copy], index) => (
                <div className={`formula-item ${index === 2 ? 'formula-item-highlight' : ''}`} key={number}>
                  <span className="formula-number">{number}</span><div className="formula-icon">{index === 2 ? '✦' : index === 3 ? '⌁' : index === 4 ? '♨' : index === 0 ? '◒' : '◌'}</div><h3>{title}</h3><p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="menu-section section-light" id="menu">
          <div className="container">
            <div className="section-heading-row"><div><div className="eyebrow"><span className="eyebrow-line" /> Wajib coba</div><h2>Menu favorit<br /><span>Ayam Hijrah.</span></h2></div><button className="text-link desktop-only" onClick={() => setOrderOpen(true)}>Pesan dari menu <Icon name="arrow" size={18} /></button></div>
            <div className="category-tabs" role="tablist" aria-label="Kategori menu">{categories.map((category) => <button key={category.value} role="tab" aria-selected={activeCategory === category.value} className={activeCategory === category.value ? 'active' : ''} onClick={() => setActiveCategory(category.value)}>{category.label}</button>)}</div>
            <div className="menu-grid">{visibleItems.map((item) => <article className="product-card" key={item.name}><div className="product-image-wrap"><img src={item.image} alt={item.name} /><span className="product-badge">{item.badge}</span></div><div className="product-info"><div><h3>{item.name}</h3><p>{item.description}</p></div><div className="product-bottom"><strong>{item.price}</strong><button onClick={() => setOrderOpen(true)}>Pesan <Icon name="arrow" size={15} /></button></div></div></article>)}</div>
            <div className="mobile-center"><button className="button button-secondary" onClick={() => setOrderOpen(true)}>Lihat semua menu <Icon name="arrow" size={16} /></button></div>
          </div>
        </section>

        <section className="proof-section section-cream">
          <div className="container proof-layout"><div className="proof-score"><span className="score-star">★</span><strong>4,7</strong><span>/ 5</span><small>Google Business Profile<br /><em>Data perlu diverifikasi ulang</em></small></div><div className="proof-quote"><div className="quote-mark">“</div><blockquote>Rasa yang familiar, tapi punya karakter sendiri. Ayamnya empuk dan sambalnya bikin ingin pesan lagi.</blockquote><div className="quote-source">Contoh format review pelanggan <span>·</span> Ganti dengan review terverifikasi</div></div><div className="proof-side"><span className="proof-label">Ditemukan di</span><strong>Google · GrabFood<br />Media · e-Order</strong><button className="text-link">Lihat cerita kami <Icon name="arrow" size={16} /></button></div></div>
        </section>

        <section className="catering section-dark" id="catering">
          <div className="container catering-grid"><div className="catering-image"><img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85" alt="Nasi box untuk kebutuhan catering" /><div className="image-caption"><span>Untuk acara</span><strong>yang berarti.</strong></div></div><div className="catering-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Nasi box & catering</div><h2>Butuh 10, 50,<br /><span>bahkan ratusan box?</span></h2><p>Nasi box yang enak untuk kantor, meeting, sekolah, pengajian, gathering, dan acara.</p><div className="catering-points"><span>✓ Paket fleksibel</span><span>✓ Tim siap membantu</span><span>✓ Pesan lebih terarah</span></div><button className="button button-primary" onClick={() => scrollTo('partnership')}>Minta Penawaran Catering <Icon name="arrow" size={18} /></button><small className="disclaimer">Kapasitas, minimum order, dan area delivery mengikuti konfirmasi terbaru tim Ayam Hijrah.</small></div></div>
        </section>

        <section className="story section-light" id="cerita">
          <div className="container story-grid"><div className="story-copy"><div className="eyebrow"><span className="eyebrow-line" /> Cerita kami</div><h2>Berawal dari<br /><span>3 ekor ayam.</span></h2><p>Dari dapur rumah, sebuah keputusan untuk hijrah berubah menjadi usaha yang tumbuh bersama pelanggan.</p><div className="story-timeline"><div><strong>2020</strong><span>Rumah</span></div><i /><div><strong>Hari ini</strong><span>Terus bertumbuh</span></div></div><button className="text-link" onClick={() => scrollTo('sedekah')}>Baca cerita lengkap <Icon name="arrow" size={18} /></button></div><div className="story-collage"><div className="story-main-image"><img src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1100&q=85" alt="Ayam bakar di atas meja makan" /></div><div className="story-small-image"><img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=85" alt="Suasana dapur dan persiapan makanan" /></div><div className="story-label">Dari Jagakarsa<br /><strong>untuk lebih banyak cerita.</strong></div></div></div>
        </section>

        <section className="sedekah section-honey" id="sedekah">
          <div className="container sedekah-grid"><div className="sedekah-copy"><div className="eyebrow"><span className="eyebrow-line" /> Sedekah Langit</div><h2>Makan enak.<br /><span>Berbagi kebaikan.</span></h2><p>Bagi Ayam Hijrah, perjalanan ini bukan hanya tentang bertumbuh sebagai usaha. Sedekah Langit menjadi ruang untuk berbagi melalui makanan dan mengajak lebih banyak orang ikut dalam kebaikan.</p><div className="sedekah-actions"><button className="button button-dark" onClick={() => scrollTo('partnership')}>Kenal program <Icon name="arrow" size={17} /></button><button className="text-link text-link-dark">Ikut berbagi <Icon name="arrow" size={17} /></button></div><small className="disclaimer">Cerita aktivitas dan mekanisme kontribusi akan ditampilkan berdasarkan dokumentasi terverifikasi.</small></div><div className="sedekah-art"><div className="sun-disc" /><div className="share-card"><span className="share-icon">✦</span><strong>Yang baik,<br />dibagikan.</strong><small>HONEY × FIRE × HIJRAH</small></div><div className="art-leaf leaf-one" /><div className="art-leaf leaf-two" /></div></div>
        </section>

        <section className="location section-cream" id="lokasi">
          <div className="container location-grid"><div className="map-placeholder"><div className="map-pattern" /><div className="map-pin"><Icon name="pin" size={22} /></div><span>Jagakarsa, Jakarta Selatan</span></div><div className="location-copy"><div className="eyebrow"><span className="eyebrow-line" /> Temui kami</div><h2>Hari ini mau<br /><span>Ayam Hijrah?</span></h2><p>Datang ke outlet atau pesan dari channel favoritmu.</p><div className="address"><Icon name="pin" size={20} /><div><strong>Ayam Hijrah Jagakarsa</strong><span>Jl. Sirsak No.21, Jagakarsa,<br />Jakarta Selatan</span></div></div><div className="hours"><strong>Jam buka</strong><span>Perbarui melalui CMS</span></div><div className="location-actions"><button className="button button-primary" onClick={() => setOrderOpen(true)}>Pesan Sekarang <Icon name="arrow" size={17} /></button><button className="button button-secondary">Petunjuk Arah <Icon name="pin" size={17} /></button></div></div></div>
        </section>

        <section className="final-cta section-dark" id="partnership"><div className="container final-cta-inner"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Sampai jumpa di meja makan</div><h2>Hari ini mau<br /><span>Ayam Hijrah?</span></h2><button className="button button-primary button-large" onClick={() => setOrderOpen(true)}>Pesan Sekarang <Icon name="arrow" size={19} /></button><p>Ayam Bakar Madu yang bikin balik lagi.</p></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div><a className="brand brand-footer" href="#top"><span className="brand-mark">AH</span><span className="brand-wordmark"><strong>Ayam</strong><em>Hijrah</em></span></a><p>Ayam Bakar Madu dengan rasa yang punya cerita.</p><div className="socials"><a href="#instagram" aria-label="Instagram"><Icon name="instagram" size={18} /></a><a href="#location" aria-label="Lokasi"><Icon name="pin" size={18} /></a></div></div><div><h3>Jelajahi</h3><a href="#menu">Menu</a><a href="#catering">Catering</a><a href="#cerita">Cerita Kami</a><a href="#sedekah">Sedekah Langit</a></div><div><h3>Pesan</h3><a href="#gofood">GoFood</a><a href="#grabfood">GrabFood</a><a href="#whatsapp">WhatsApp</a><a href="#lokasi">Lokasi Outlet</a></div><div><h3>Kontak</h3><span>Jl. Sirsak No.21<br />Jagakarsa, Jakarta Selatan</span><a href="#whatsapp">WhatsApp resmi</a></div></div><div className="container footer-bottom"><span>© 2026 Ayam Hijrah. Semua hak dilindungi.</span><span>Privacy · Terms</span></div></footer>

      {orderOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOrderOpen(false)}><div className="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-title"><button className="modal-close" onClick={() => setOrderOpen(false)} aria-label="Tutup order router"><Icon name="close" size={21} /></button><span className="modal-kicker">Pesan Ayam Hijrah</span><h2 id="order-title">Mau pesan<br /><span>lewat mana?</span></h2><p>Pilih channel yang paling nyaman untukmu.</p><div className="order-options"><a href="#gofood" onClick={() => setOrderOpen(false)}><span className="channel-icon gofood">G</span><span><strong>GoFood</strong><small>Pesan delivery</small></span><Icon name="arrow" size={17} /></a><a href="#grabfood" onClick={() => setOrderOpen(false)}><span className="channel-icon grab">G</span><span><strong>GrabFood</strong><small>Pesan delivery</small></span><Icon name="arrow" size={17} /></a><a href="#whatsapp" onClick={() => setOrderOpen(false)}><span className="channel-icon wa">W</span><span><strong>WhatsApp</strong><small>Chat untuk pesan</small></span><Icon name="arrow" size={17} /></a><a href="#lokasi" onClick={() => { setOrderOpen(false); scrollTo('lokasi') }}><span className="channel-icon outlet"><Icon name="pin" size={18} /></span><span><strong>Datang ke outlet</strong><small>Jagakarsa, Jakarta Selatan</small></span><Icon name="arrow" size={17} /></a></div><small className="modal-note">Link order akan dihubungkan setelah channel resmi dikonfirmasi.</small></div></div>}

      <button className="mobile-sticky-order" onClick={() => setOrderOpen(true)}>Pesan Sekarang <Icon name="arrow" size={17} /></button>
    </div>
  )
}

export default App
