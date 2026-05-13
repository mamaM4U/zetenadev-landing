export type Locale = 'en' | 'id';

export const whatsappNumber = '6285946500018';
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello ZetenaDev, I want to discuss a project.')}`;

export const nav = {
  en: { services: 'Services', work: 'Work', process: 'Process', quality: 'Quality', cta: 'Discuss Project', langHref: '/id/', langLabel: 'ID' },
  id: { services: 'Layanan', work: 'Karya', process: 'Proses', quality: 'Kualitas', cta: 'Diskusi Project', langHref: '/', langLabel: 'EN' },
};

export const copy = {
  en: {
    eyebrow: 'Websites • Mobile Apps • Digital Systems',
    heroTitle: 'Sharp digital products for teams moving forward.',
    heroBody: 'ZetenaDev helps businesses, schools, organizations, sports clubs, and service teams build websites, apps, and systems that look credible, work reliably, and are ready to grow.',
    primaryCta: 'Discuss via WhatsApp',
    secondaryCta: 'View Selected Work',
    proof: ['Design direction', 'Web & mobile development', 'Automation', 'Maintenance'],
    trustTitle: 'Built for many fields, not locked to one industry.',
    trustBody: 'From archery clubs and service businesses to schools and organizations, we shape technology around the way your team actually works.',
    servicesTitle: 'What we build',
    servicesBody: 'Every service is designed to turn unclear ideas into structured, launch-ready digital products.',
    industriesTitle: 'Designed for real-world operators',
    workTitle: 'Selected work',
    workBody: 'Real projects across sports, service businesses, and personal digital identity.',
    processTitle: 'How we move',
    qualityTitle: 'No fake SEO promises. Clean foundations instead.',
    qualityBody: 'We do not guarantee instant Google ranking. We build technical SEO foundations: semantic structure, metadata, sitemap, performance-minded pages, responsive layouts, and share-ready Open Graph previews.',
    finalTitle: 'Have a project that needs to look sharp and work properly?',
    finalBody: 'Send us the idea. We will help clarify the scope, direction, and most sensible first version.',
    footer: 'Web, app, and digital system development partner.',
  },
  id: {
    eyebrow: 'Website • Mobile Apps • Sistem Digital',
    heroTitle: 'Produk digital tajam untuk tim yang bergerak maju.',
    heroBody: 'ZetenaDev membantu UMKM, sekolah, organisasi, club olahraga, dan bisnis jasa membangun website, aplikasi, dan sistem yang terlihat kredibel, berjalan rapi, dan siap berkembang.',
    primaryCta: 'Diskusi via WhatsApp',
    secondaryCta: 'Lihat Karya',
    proof: ['Arah desain', 'Web & mobile development', 'Automation', 'Maintenance'],
    trustTitle: 'Dibangun untuk banyak bidang, bukan terkunci di satu industri.',
    trustBody: 'Dari club panahan dan bisnis jasa sampai sekolah dan organisasi, kami membentuk teknologi mengikuti cara kerja tim kamu.',
    servicesTitle: 'Yang kami bangun',
    servicesBody: 'Setiap layanan dirancang untuk mengubah ide yang masih kabur menjadi produk digital yang terstruktur dan siap rilis.',
    industriesTitle: 'Dirancang untuk operator dunia nyata',
    workTitle: 'Karya pilihan',
    workBody: 'Project nyata di bidang olahraga, jasa, dan identitas digital personal.',
    processTitle: 'Cara kami bergerak',
    qualityTitle: 'Tidak ada janji SEO palsu. Fondasi bersih saja.',
    qualityBody: 'Kami tidak menjanjikan ranking Google instan. Kami membangun fondasi technical SEO: struktur semantik, metadata, sitemap, performa, layout responsive, dan Open Graph yang siap dibagikan.',
    finalTitle: 'Punya project yang harus terlihat tajam dan berjalan benar?',
    finalBody: 'Kirim idenya. Kami bantu rapikan scope, arah, dan versi pertama yang paling masuk akal.',
    footer: 'Partner pengembangan web, aplikasi, dan sistem digital.',
  },
};

export const services = {
  en: [
    { title: 'Web Presence', body: 'Company profiles, landing pages, portfolios, catalogues, and event pages built to earn trust quickly.', icon: '/images/s_6.png' },
    { title: 'Apps & Systems', body: 'Web apps, dashboards, admin panels, mobile apps, booking, membership, and internal tools.', icon: '/images/s_1.png' },
    { title: 'Automation & Integration', body: 'API integrations, WhatsApp flows, reporting pipelines, chatbots, and operational automation.', icon: '/images/s_5.png' },
    { title: 'Brand & Digital Direction', body: 'Messaging, content structure, visual direction, and launch-ready digital presentation.', icon: '/images/s_3.png' },
  ],
  id: [
    { title: 'Web Presence', body: 'Company profile, landing page, portfolio, katalog, dan halaman event yang cepat membangun kepercayaan.', icon: '/images/s_6.png' },
    { title: 'Apps & Systems', body: 'Web app, dashboard, admin panel, mobile app, booking, membership, dan internal tools.', icon: '/images/s_1.png' },
    { title: 'Automation & Integration', body: 'Integrasi API, alur WhatsApp, laporan otomatis, chatbot, dan automation operasional.', icon: '/images/s_5.png' },
    { title: 'Brand & Digital Direction', body: 'Messaging, struktur konten, arah visual, dan presentasi digital yang siap diluncurkan.', icon: '/images/s_3.png' },
  ],
};

export const industries = {
  en: ['SMEs & local brands', 'Schools & institutions', 'Sports clubs', 'Organizations', 'Service businesses', 'Personal brands'],
  id: ['UMKM & brand lokal', 'Sekolah & instansi', 'Club olahraga', 'Organisasi', 'Bisnis jasa', 'Personal brand'],
};

export const works = {
  en: [
    { name: 'IHC Archery', type: 'Sports club', body: 'A digital presence for a focused archery community.', href: '#' },
    { name: 'Andal Service', type: 'Service business', body: 'Clear service communication designed for customer trust.', href: '#' },
    { name: 'Afdrian', type: 'Personal portfolio', body: 'A dual-theme digital identity for a senior developer.', href: 'https://afdrian.com' },
  ],
  id: [
    { name: 'IHC Archery', type: 'Club olahraga', body: 'Presence digital untuk komunitas panahan yang fokus.', href: '#' },
    { name: 'Andal Service', type: 'Bisnis jasa', body: 'Komunikasi layanan yang jelas untuk membangun kepercayaan pelanggan.', href: '#' },
    { name: 'Afdrian', type: 'Portfolio personal', body: 'Identitas digital dual-theme untuk senior developer.', href: 'https://afdrian.com' },
  ],
};

export const process = {
  en: [
    ['01', 'Discover', 'We clarify the audience, goal, constraints, and the version worth building first.'],
    ['02', 'Direct', 'We shape the visual direction, content structure, and user journey.'],
    ['03', 'Build', 'We develop the product with clean implementation and deployment discipline.'],
    ['04', 'Launch & Improve', 'We ship, observe, maintain, and refine based on real needs.'],
  ],
  id: [
    ['01', 'Discover', 'Kami rapikan audience, tujuan, batasan, dan versi pertama yang layak dibangun.'],
    ['02', 'Direct', 'Kami bentuk arah visual, struktur konten, dan alur pengguna.'],
    ['03', 'Build', 'Kami bangun produk dengan implementasi bersih dan disiplin deploy.'],
    ['04', 'Launch & Improve', 'Kami rilis, pantau, rawat, dan tingkatkan sesuai kebutuhan nyata.'],
  ],
};
