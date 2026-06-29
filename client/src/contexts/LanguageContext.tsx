import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.profile": "Profile",
    "nav.work": "Work",
    "nav.contact": "Contact",

    // Hero
    "hero.label": "Digital Creative",
    "hero.headline": "I craft stories that convert.",
    "hero.sub": "Digital Marketing and Social Media professional experienced in managing brand social media operations, content strategy, Meta Ads campaigns, and visual content production across hospitality, F&B, and corporate environments. Based in Jakarta, open worldwide.",
    "hero.cta.hire": "Hire Me",
    "hero.cta.work": "View Work",
    "hero.cta.cv": "Download CV",

    // Selected Work (Home)
    "selected.label": "Selected Projects",
    "selected.heading": "Recent Work",
    "selected.cta": "View All Work",

    // About Teaser (Home)
    "teaser.label": "Who I Am",
    "teaser.heading": "Digital creative with a passion for storytelling.",
    "teaser.text": "I combine visual storytelling with data-driven strategy. Every piece of content I create has a purpose: drive engagement, build awareness, or generate leads.",
    "teaser.cta": "Read My Story",

    // Profile Page
    "profile.label": "My Journey",
    "profile.heading": "About",
    "profile.p1": "I'm a Digital Marketing and Social Media professional with hands-on experience across hospitality, F&B, and corporate sectors. My background in Communication Science from Universitas Bina Sarana Informatika (GPA: 3.36/4.00) combined with practical experience has shaped my approach to brand building and digital strategy.",
    "profile.p2": "I specialize in campaign planning, creative testing, and performance monitoring. From optimizing Meta Ads campaigns to managing social media operations and creating promotional assets, I focus on measurable outcomes: lead generation, brand awareness, engagement, and conversion goals.",
    "profile.p3": "I combine visual storytelling with data-driven strategy. Every piece of content I create has a purpose: drive engagement, build awareness, or generate leads. No fluff, just results.",
    "profile.skills.label": "What I Bring",
    "profile.skills.heading": "Skills & Tools",
    "profile.exp.label": "Career Path",
    "profile.exp.heading": "Experience",

    // Work Page
    "work.label": "Portfolio",
    "work.heading": "My Work",
    "work.description": "A collection of strategic digital marketing projects where I combined content strategy, visual storytelling, and data-driven optimization to build brands and drive measurable business results.",
    "work.photos.label": "Photo Content",
    "work.photos.heading": "Visual Storytelling",
    "work.reels.label": "Video Reels",
    "work.reels.heading": "Motion Content",

    // Project Cards
    "project.1.company": "PT DIN",
    "project.1.date": "Sep 2025 - Mar 2026",
    "project.1.title": "Scaling lead generation through Meta Ads optimization",
    "project.1.tags": "Meta Ads,Lead Generation,CPC Optimization",

    "project.2.company": "Kokyo Coffee",
    "project.2.date": "May 2025 - Aug 2025",
    "project.2.title": "Building a coffee brand's digital presence from zero",
    "project.2.tags": "Content Strategy,Branding,Meta Ads",

    "project.3.company": "Krisna Beach Hotel",
    "project.3.date": "Jul 2024 - May 2025",
    "project.3.title": "Driving hotel occupancy through visual storytelling",
    "project.3.tags": "Visual Storytelling,Content Creation,Seasonal Campaigns",

    "project.4.company": "PT Krisna Beach Hotel",
    "project.4.date": "Mar 2024 - Jun 2024",
    "project.4.title": "Front Office Operations & Guest Services",
    "project.4.tags": "Customer Service,Operations,Guest Relations",

    "project.5.company": "PT Djasa Autosarana Transports",
    "project.5.date": "Aug 2022 - Oct 2022",
    "project.5.title": "Visual Content Creation & Branding",
    "project.5.tags": "Graphic Design,Visual Content,Photography",

    // Project Narratives (Work Page)
    "projects.ptdin.narrative": "PT DIN, a dynamic Jakarta-based company, faced a critical challenge in their digital advertising strategy: their Cost Per Click (CPC) was hovering at $3, making their lead generation campaigns unsustainable and inefficient. The goal was clear—optimize campaigns to reduce CPC below $1 while maintaining lead quality.\n\nI took ownership of their Meta Ads strategy from day one. Working with their Facebook and Instagram ad accounts, I conducted a comprehensive analysis of all active campaigns using Meta Ads Manager. I identified underperforming ad sets, audience segments with high costs, and creative variations that weren't resonating.\n\nThe optimization process involved multiple layers of strategy: A/B testing on audience targeting to find high-intent prospects, creative testing to improve engagement rates, and strategic bidding adjustments. I refined landing page experiences to improve conversion rates, which directly improved Quality Scores in Meta's algorithm. Budget allocation was carefully adjusted to prioritize top-performing ad sets while pausing or restructuring underperformers.\n\nWithin four weeks, the results were measurable and significant. CPC dropped from $3.00 to $0.89—a 67% reduction. But the impact went beyond the metric itself: lead volume increased by 3.5x, meaning the company could generate substantially more qualified leads at a fraction of the previous cost. This transformation made their digital marketing budget work harder and smarter.",
    "projects.kokyo.narrative": "Kokyo Coffee, a specialty coffee shop in Pangandaran, had a vision to become more than just a cafe—they wanted to build a community. When I joined as Digital Marketing & Content Creator, the challenge was to launch their brand into the digital space with authenticity and visual storytelling that would resonate with both locals and visitors.\n\nStarting from scratch, I developed a comprehensive digital marketing strategy focused on three pillars: awareness through consistent visual content, engagement through community interaction, and sales through targeted promotions. The strategy wasn't about aggressive selling—it was about inviting people into the Kokyo experience.\n\nI managed their social media brand accounts with meticulous content planning. Every post was intentional: showcasing the latte art process, capturing the ambiance of the cafe, highlighting the products, and telling stories of the Kokyo experience. I produced high-quality visual content including feed posts, carousel collections, and video reels that emphasized the craft and care behind every cup.\n\nBeyond organic content, I designed promotional materials—posters, banners, and digital campaign assets—that maintained visual consistency. I ran targeted Meta Ads campaigns to drive both online engagement and foot traffic to the physical location, optimizing for both awareness and conversions.\n\nThe collaborative spirit was essential. I worked closely with the Kokyo team on promotional events and seasonal campaigns, ensuring that every marketing initiative aligned with the brand's values and community-first approach. The result was a thriving online presence that translated into a loyal community of customers who didn't just visit Kokyo—they became part of it.",
    "projects.krisna.narrative": "Krisna Beach Hotel, a tropical resort in Pangandaran, needed a digital presence that captured the essence of their offering: luxury, relaxation, and unforgettable experiences by the beach. My role as Digital Marketing & Content Creator was to translate that vision into compelling digital content and strategic campaigns.\n\nI started by developing a comprehensive hotel digital marketing strategy that recognized the seasonal nature of the hospitality business. High season and low season require different approaches, different messaging, and different promotional tactics. I created daily content plans that adapted to these rhythms while maintaining consistent brand identity.\n\nThe visual content production was central to the strategy. I designed and produced consistent, high-quality visual content for Instagram and Facebook—feed posts that showcased rooms and amenities, reels that captured the guest experience (sunset views, pool activities, dining moments), and stories that created a sense of immediacy and exclusivity. Every piece of content was crafted to inspire bookings.\n\nBeyond digital, I created offline promotional materials—flyers, posters, banners, and backdrops—that extended the brand presence into physical spaces. These materials supported promotional events and seasonal campaigns designed to drive occupancy during both peak and slower periods.\n\nThe work involved analyzing content performance and engagement metrics to understand what resonated with the audience. This data-driven approach informed ongoing content refinement and campaign optimization. I promoted hotel events through effective visual storytelling, ensuring that special occasions and seasonal packages received the attention they deserved.\n\nThe result was a cohesive digital and physical presence that elevated Krisna Beach Hotel's visibility and appeal, driving consistent bookings throughout the year.",

    // Contact Page
    "contact.label": "Get In Touch",
    "contact.heading": "Let's work together.",
    "contact.sub": "Got a project in mind? Looking for a creative partner? I'm always open to new opportunities — remote, hybrid, or freelance. Reach out via email, WhatsApp, or LinkedIn.",
    "contact.cta": "Say Hello",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.linkedin": "LinkedIn",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Crafted with intention.",
  },
  id: {
    // Nav
    "nav.home": "Beranda",
    "nav.profile": "Profil",
    "nav.work": "Karya",
    "nav.contact": "Kontak",

    // Hero
    "hero.label": "Digital Creative",
    "hero.headline": "Saya merancang cerita yang menghasilkan.",
    "hero.sub": "Profesional Digital Marketing dan Social Media berpengalaman dalam mengelola operasi media sosial brand, strategi konten, kampanye Meta Ads, dan produksi konten visual di sektor perhotelan, F&B, dan korporat. Berbasis di Jakarta, terbuka untuk seluruh dunia.",
    "hero.cta.hire": "Hubungi Saya",
    "hero.cta.work": "Lihat Karya",
    "hero.cta.cv": "Unduh CV",

    // Selected Work (Home)
    "selected.label": "Proyek Terpilih",
    "selected.heading": "Karya Terbaru",
    "selected.cta": "Lihat Semua Karya",

    // About Teaser (Home)
    "teaser.label": "Siapa Saya",
    "teaser.heading": "Digital creative dengan passion untuk storytelling.",
    "teaser.text": "Saya menggabungkan visual storytelling dengan strategi berbasis data. Setiap konten yang saya buat punya tujuan: mendorong engagement, membangun awareness, atau menghasilkan leads.",
    "teaser.cta": "Baca Cerita Saya",

    // Profile Page
    "profile.label": "Perjalanan Saya",
    "profile.heading": "Tentang",
    "profile.p1": "Saya adalah profesional Digital Marketing dan Social Media dengan pengalaman praktis di sektor perhotelan, F&B, dan korporat. Latar belakang saya di Ilmu Komunikasi dari Universitas Bina Sarana Informatika (IPK: 3.36/4.00) dikombinasikan dengan pengalaman praktis telah membentuk pendekatan saya terhadap brand building dan strategi digital.",
    "profile.p2": "Saya spesialis dalam perencanaan kampanye, creative testing, dan performance monitoring. Dari mengoptimalkan kampanye Meta Ads hingga mengelola operasi media sosial dan membuat aset promosi, saya fokus pada hasil yang terukur: lead generation, brand awareness, engagement, dan conversion goals.",
    "profile.p3": "Saya menggabungkan visual storytelling dengan strategi berbasis data. Setiap konten yang saya buat punya tujuan: mendorong engagement, membangun awareness, atau menghasilkan leads. Tanpa basa-basi, hanya hasil.",
    "profile.skills.label": "Yang Saya Bawa",
    "profile.skills.heading": "Keahlian & Alat",
    "profile.exp.label": "Perjalanan Karir",
    "profile.exp.heading": "Pengalaman",
    // Work Page
    "work.label": "Portofolio",
    "work.heading": "Karya Saya",
    "work.description": "Koleksi proyek pemasaran digital strategis di mana saya menggabungkan strategi konten, visual storytelling, dan optimasi berbasis data untuk membangun merek dan mendorong hasil bisnis yang terukur.",
    "work.photos.label": "Konten Foto",
    "work.photos.heading": "Visual Storytelling",
    "work.reels.label": "Video Reels",
    "work.reels.heading": "Konten Motion",

    // Project Cards
    "project.1.company": "PT DIN",
    "project.1.date": "Sep 2025 - Mar 2026",
    "project.1.title": "Meningkatkan lead generation melalui optimasi Meta Ads",
    "project.1.tags": "Meta Ads,Lead Generation,Optimasi CPC",

    "project.2.company": "Kokyo Coffee",
    "project.2.date": "Mei 2025 - Agu 2025",
    "project.2.title": "Membangun kehadiran digital brand kopi dari nol",
    "project.2.tags": "Strategi Konten,Branding,Meta Ads",

    "project.3.company": "Krisna Beach Hotel",
    "project.3.date": "Jul 2024 - Mei 2025",
    "project.3.title": "Mendorong okupansi hotel melalui visual storytelling",
    "project.3.tags": "Visual Storytelling,Pembuatan Konten,Kampanye Musiman",

    "project.4.company": "PT Krisna Beach Hotel",
    "project.4.date": "Mar 2024 - Jun 2024",
    "project.4.title": "Operasi Front Office & Layanan Tamu",
    "project.4.tags": "Layanan Pelanggan,Operasi,Hubungan Tamu",

    "project.5.company": "PT Djasa Autosarana Transports",
    "project.5.date": "Agu 2022 - Okt 2022",
    "project.5.title": "Pembuatan Konten Visual & Branding",
    "project.5.tags": "Graphic Design,Konten Visual,Fotografi",

    // Project Narratives (Work Page)
    "projects.ptdin.narrative": "PT DIN, sebuah perusahaan dinamis berbasis Jakarta, menghadapi tantangan kritis dalam strategi iklan digital mereka: Cost Per Click (CPC) mereka berada di $3, membuat kampanye lead generation mereka tidak berkelanjutan dan tidak efisien. Tujuannya jelas—optimalkan kampanye untuk mengurangi CPC di bawah $1 sambil mempertahankan kualitas lead.\n\nSaya mengambil alih strategi Meta Ads mereka sejak hari pertama. Bekerja dengan akun Facebook dan Instagram mereka, saya melakukan analisis komprehensif terhadap semua kampanye aktif menggunakan Meta Ads Manager. Saya mengidentifikasi ad set yang underperform, segmen audiens dengan biaya tinggi, dan variasi kreatif yang tidak resonan.\n\nProses optimasi melibatkan multiple layer strategi: A/B testing pada targeting audiens untuk menemukan prospek high-intent, testing kreatif untuk meningkatkan engagement rate, dan penyesuaian bidding strategis. Saya menyempurnakan pengalaman landing page untuk meningkatkan conversion rate, yang secara langsung meningkatkan Quality Score di algoritma Meta. Alokasi budget disesuaikan dengan hati-hati untuk memprioritaskan ad set berkinerja terbaik sambil menghentikan atau merestruktur yang underperform.\n\nDalam empat minggu, hasilnya terukur dan signifikan. CPC turun dari $3.00 menjadi $0.89—pengurangan 67%. Namun dampaknya melampaui metrik itu sendiri: volume lead meningkat 3.5x, berarti perusahaan dapat menghasilkan jauh lebih banyak lead berkualitas dengan biaya sebelumnya. Transformasi ini membuat budget digital marketing mereka bekerja lebih keras dan lebih cerdas.",
    "projects.kokyo.narrative": "Kokyo Coffee, sebuah specialty coffee shop di Pangandaran, memiliki visi untuk menjadi lebih dari sekadar kafe—mereka ingin membangun komunitas. Ketika saya bergabung sebagai Digital Marketing & Content Creator, tantangannya adalah meluncurkan brand mereka ke ruang digital dengan autentisitas dan visual storytelling yang resonan dengan lokal dan pengunjung.\n\nMulai dari nol, saya mengembangkan strategi digital marketing komprehensif yang berfokus pada tiga pilar: awareness melalui konten visual konsisten, engagement melalui interaksi komunitas, dan sales melalui promosi targeted. Strategi ini bukan tentang penjualan agresif—ini tentang mengundang orang ke pengalaman Kokyo.\n\nSaya mengelola akun brand media sosial mereka dengan perencanaan konten yang cermat. Setiap post itu intentional: menampilkan proses latte art, menangkap ambiance kafe, menyoroti produk, dan menceritakan kisah pengalaman Kokyo. Saya memproduksi konten visual berkualitas tinggi termasuk feed posts, carousel collections, dan video reels yang menekankan keahlian dan perhatian di balik setiap cangkir.\n\nBeyond konten organik, saya merancang materi promosi—poster, banner, dan aset kampanye digital—yang mempertahankan konsistensi visual. Saya menjalankan kampanye Meta Ads targeted untuk mendorong engagement online dan foot traffic ke lokasi fisik, mengoptimalkan untuk awareness dan conversions.\n\nSemangat kolaboratif sangat penting. Saya bekerja erat dengan tim Kokyo pada event promosi dan kampanye musiman, memastikan setiap inisiatif marketing sejalan dengan nilai brand dan pendekatan community-first. Hasilnya adalah kehadiran online yang berkembang yang diterjemahkan menjadi komunitas pelanggan setia yang tidak hanya mengunjungi Kokyo—mereka menjadi bagian darinya.",
    "projects.krisna.narrative": "Krisna Beach Hotel, sebuah resort tropis di Pangandaran, membutuhkan kehadiran digital yang menangkap esensi penawaran mereka: kemewahan, relaksasi, dan pengalaman tak terlupakan di pantai. Peran saya sebagai Digital Marketing & Content Creator adalah menerjemahkan visi itu menjadi konten digital yang menarik dan kampanye strategis.\n\nSaya mulai dengan mengembangkan strategi digital marketing hotel komprehensif yang mengakui sifat musiman bisnis perhotelan. High season dan low season memerlukan pendekatan berbeda, messaging berbeda, dan taktik promosi berbeda. Saya membuat rencana konten harian yang beradaptasi dengan ritme ini sambil mempertahankan identitas brand konsisten.\n\nProduksi konten visual adalah inti strategi. Saya merancang dan memproduksi konten visual berkualitas tinggi konsisten untuk Instagram dan Facebook—feed posts yang menampilkan kamar dan amenities, reels yang menangkap guest experience (sunset views, pool activities, dining moments), dan stories yang menciptakan rasa immediacy dan eksklusivitas. Setiap piece konten dirancang untuk menginspirasi bookings.\n\nBeyond digital, saya membuat materi promosi offline—flyer, poster, banner, dan backdrop—yang memperluas brand presence ke ruang fisik. Materi ini mendukung event promosi dan kampanye musiman yang dirancang untuk mendorong okupansi selama periode peak dan slower.\n\nPekerjaan melibatkan analisis content performance dan engagement metrics untuk memahami apa yang resonan dengan audiens. Pendekatan data-driven ini menginformasikan refinement konten berkelanjutan dan optimasi kampanye. Saya mempromosikan hotel events melalui visual storytelling efektif, memastikan occasion khusus dan paket musiman menerima perhatian yang mereka layak.\n\nHasilnya adalah kehadiran digital dan fisik kohesif yang meningkatkan visibilitas dan appeal Krisna Beach Hotel, mendorong bookings konsisten sepanjang tahun.",

    // Contact Page
    "contact.label": "Hubungi Saya",
    "contact.heading": "Mari bekerja sama.",
    "contact.sub": "Punya proyek? Mencari partner kreatif? Saya selalu terbuka untuk peluang baru — remote, hybrid, atau freelance. Hubungi saya melalui email, WhatsApp, atau LinkedIn.",
    "contact.cta": "Sapa Saya",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.linkedin": "LinkedIn",
    "contact.form.name": "Nama Anda",
    "contact.form.email": "Email Anda",
    "contact.form.message": "Pesan Anda",
    "contact.form.send": "Kirim Pesan",

    // Footer
    "footer.rights": "Hak cipta dilindungi.",
    "footer.built": "Dibuat dengan niat.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "id" : "en"));
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[lang][key] || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
