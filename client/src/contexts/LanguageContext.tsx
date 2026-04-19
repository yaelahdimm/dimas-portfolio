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
    "hero.sub": "Content strategist, visual storyteller, and Meta Ads specialist turning brands into movements. Based in Jakarta, open worldwide.",
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
    "profile.p1": "I didn't start in marketing — I started with curiosity. A Communications degree from Universitas Bina Sarana Informatika gave me the theory, but the real education came from building brands from scratch.",
    "profile.p2": "From running Meta Ads campaigns that actually convert, to designing scroll-stopping content for hotels and coffee shops, I've learned that great marketing isn't about shouting louder — it's about telling better stories.",
    "profile.p3": "I combine visual storytelling with data-driven strategy. Every piece of content I create has a purpose: drive engagement, build awareness, or generate leads. No fluff, just results.",
    "profile.skills.label": "What I Bring",
    "profile.skills.heading": "Skills & Tools",
    "profile.exp.label": "Career Path",
    "profile.exp.heading": "Experience",

    // Work Page
    "work.label": "Portfolio",
    "work.heading": "My Work",
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

    // Project Narratives (Work Page)
    "projects.ptdin.narrative": "PT DIN, a dynamic Jakarta-based company, faced a critical challenge in their digital advertising strategy: their Cost Per Click (CPC) was hovering at $3, making their lead generation campaigns unsustainable and inefficient. The goal was clear—optimize campaigns to reduce CPC below $1 while maintaining lead quality.\n\nI took ownership of their Meta Ads strategy from day one. Working with their Facebook and Instagram ad accounts, I conducted a comprehensive analysis of all active campaigns using Meta Ads Manager. I identified underperforming ad sets, audience segments with high costs, and creative variations that weren't resonating.\n\nThe optimization process involved multiple layers of strategy: A/B testing on audience targeting to find high-intent prospects, creative testing to improve engagement rates, and strategic bidding adjustments. I refined landing page experiences to improve conversion rates, which directly improved Quality Scores in Meta's algorithm. Budget allocation was carefully adjusted to prioritize top-performing ad sets while pausing or restructuring underperformers.\n\nWithin four weeks, the results were measurable and significant. CPC dropped from $3.00 to $0.89—a 67% reduction. But the impact went beyond the metric itself: lead volume increased by 3.5x, meaning the company could generate substantially more qualified leads at a fraction of the previous cost. This transformation made their digital marketing budget work harder and smarter.",
    "projects.kokyo.narrative": "Kokyo Coffee, a specialty coffee shop in Pangandaran, had a vision to become more than just a cafe—they wanted to build a community. When I joined as Digital Marketing & Content Creator, the challenge was to launch their brand into the digital space with authenticity and visual storytelling that would resonate with both locals and visitors.\n\nStarting from scratch, I developed a comprehensive digital marketing strategy focused on three pillars: awareness through consistent visual content, engagement through community interaction, and sales through targeted promotions. The strategy wasn't about aggressive selling—it was about inviting people into the Kokyo experience.\n\nI managed their social media brand accounts with meticulous content planning. Every post was intentional: showcasing the latte art process, capturing the ambiance of the cafe, highlighting the products, and telling stories of the Kokyo experience. I produced high-quality visual content including feed posts, carousel collections, and video reels that emphasized the craft and care behind every cup.\n\nBeyond organic content, I designed promotional materials—posters, banners, and digital campaign assets—that maintained visual consistency. I ran targeted Meta Ads campaigns to drive both online engagement and foot traffic to the physical location, optimizing for both awareness and conversions.\n\nThe collaborative spirit was essential. I worked closely with the Kokyo team on promotional events and seasonal campaigns, ensuring that every marketing initiative aligned with the brand's values and community-first approach. The result was a thriving online presence that translated into a loyal community of customers who didn't just visit Kokyo—they became part of it.",
    "projects.krisna.narrative": "Krisna Beach Hotel, a tropical resort in Pangandaran, needed a digital presence that captured the essence of their offering: luxury, relaxation, and unforgettable experiences by the beach. My role as Digital Marketing & Content Creator was to translate that vision into compelling digital content and strategic campaigns.\n\nI started by developing a comprehensive hotel digital marketing strategy that recognized the seasonal nature of the hospitality business. High season and low season require different approaches, different messaging, and different promotional tactics. I created daily content plans that adapted to these rhythms while maintaining consistent brand identity.\n\nThe visual content production was central to the strategy. I designed and produced consistent, high-quality visual content for Instagram and Facebook—feed posts that showcased rooms and amenities, reels that captured the guest experience (sunset views, pool activities, dining moments), and stories that created a sense of immediacy and exclusivity. Every piece of content was crafted to inspire bookings.\n\nBeyond digital, I created offline promotional materials—flyers, posters, banners, and backdrops—that extended the brand presence into physical spaces. These materials supported promotional events and seasonal campaigns designed to drive occupancy during both peak and slower periods.\n\nThe work involved analyzing content performance and engagement metrics to understand what resonated with the audience. This data-driven approach informed ongoing content refinement and campaign optimization. I promoted hotel events through effective visual storytelling, ensuring that special occasions and seasonal packages received the attention they deserved.\n\nThe result was a cohesive digital and physical presence that elevated Krisna Beach Hotel's visibility and appeal, driving consistent bookings throughout the year.",

    // Contact Page
    "contact.label": "Get In Touch",
    "contact.heading": "Let's work together.",
    "contact.sub": "Got a project in mind? Looking for a creative partner? I'm always open to new opportunities — remote, hybrid, or freelance.",
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
    "hero.sub": "Content strategist, visual storyteller, dan Meta Ads specialist yang mengubah brand menjadi gerakan. Berbasis di Jakarta, terbuka untuk seluruh dunia.",
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
    "profile.p1": "Saya tidak memulai dari marketing — saya memulai dari rasa ingin tahu. Gelar Ilmu Komunikasi dari Universitas Bina Sarana Informatika memberi saya teori, tapi pendidikan sesungguhnya datang dari membangun brand dari nol.",
    "profile.p2": "Dari menjalankan kampanye Meta Ads yang benar-benar mengkonversi, hingga mendesain konten yang menghentikan scroll untuk hotel dan coffee shop, saya belajar bahwa marketing yang hebat bukan soal berteriak lebih keras — tapi soal bercerita lebih baik.",
    "profile.p3": "Saya menggabungkan visual storytelling dengan strategi berbasis data. Setiap konten yang saya buat punya tujuan: mendorong engagement, membangun awareness, atau menghasilkan leads. Tanpa basa-basi, hanya hasil.",
    "profile.skills.label": "Yang Saya Bawa",
    "profile.skills.heading": "Keahlian & Alat",
    "profile.exp.label": "Perjalanan Karir",
    "profile.exp.heading": "Pengalaman",

    // Work Page
    "work.label": "Portofolio",
    "work.heading": "Karya Saya",
    "work.photos.label": "Konten Foto",
    "work.photos.heading": "Visual Storytelling",
    "work.reels.label": "Video Reels",
    "work.reels.heading": "Konten Video",

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

    // Project Narratives (Work Page)
    "projects.ptdin.narrative": "PT DIN, sebuah perusahaan dinamis berbasis Jakarta, menghadapi tantangan kritis dalam strategi iklan digital mereka: Cost Per Click (CPC) mereka berada di $3, membuat kampanye lead generation mereka tidak berkelanjutan dan tidak efisien. Tujuannya jelas—optimalkan kampanye untuk mengurangi CPC di bawah $1 sambil mempertahankan kualitas lead.\n\nSaya mengambil alih strategi Meta Ads mereka sejak hari pertama. Bekerja dengan akun Facebook dan Instagram mereka, saya melakukan analisis komprehensif terhadap semua kampanye aktif menggunakan Meta Ads Manager. Saya mengidentifikasi ad set yang underperform, segmen audiens dengan biaya tinggi, dan variasi kreatif yang tidak resonan.\n\nProses optimasi melibatkan multiple layer strategi: A/B testing pada targeting audiens untuk menemukan prospek high-intent, testing kreatif untuk meningkatkan engagement rate, dan penyesuaian bidding strategis. Saya menyempurnakan pengalaman landing page untuk meningkatkan conversion rate, yang secara langsung meningkatkan Quality Score di algoritma Meta. Alokasi budget disesuaikan dengan hati-hati untuk memprioritaskan ad set berkinerja terbaik sambil menghentikan atau merestruktur yang underperform.\n\nDalam empat minggu, hasilnya terukur dan signifikan. CPC turun dari $3.00 menjadi $0.89—pengurangan 67%. Namun dampaknya melampaui metrik itu sendiri: volume lead meningkat 3.5x, berarti perusahaan dapat menghasilkan jauh lebih banyak lead berkualitas dengan biaya sebelumnya. Transformasi ini membuat budget digital marketing mereka bekerja lebih keras dan lebih cerdas.",
    "projects.kokyo.narrative": "Kokyo Coffee, sebuah specialty coffee shop di Pangandaran, memiliki visi untuk menjadi lebih dari sekadar kafe—mereka ingin membangun komunitas. Ketika saya bergabung sebagai Digital Marketing & Content Creator, tantangannya adalah meluncurkan brand mereka ke ruang digital dengan autentisitas dan visual storytelling yang resonan dengan lokal dan pengunjung.\n\nMulai dari nol, saya mengembangkan strategi digital marketing komprehensif yang berfokus pada tiga pilar: awareness melalui konten visual konsisten, engagement melalui interaksi komunitas, dan sales melalui promosi targeted. Strategi ini bukan tentang penjualan agresif—ini tentang mengundang orang ke pengalaman Kokyo.\n\nSaya mengelola akun brand media sosial mereka dengan perencanaan konten yang cermat. Setiap post itu intentional: menampilkan proses latte art, menangkap ambiance kafe, menyoroti produk, dan menceritakan kisah pengalaman Kokyo. Saya memproduksi konten visual berkualitas tinggi termasuk feed posts, carousel collections, dan video reels yang menekankan keahlian dan perhatian di balik setiap cangkir.\n\nBeyond konten organik, saya merancang materi promosi—poster, banner, dan aset kampanye digital—yang mempertahankan konsistensi visual. Saya menjalankan kampanye Meta Ads targeted untuk mendorong engagement online dan foot traffic ke lokasi fisik, mengoptimalkan untuk awareness dan conversions.\n\nSemangat kolaboratif sangat penting. Saya bekerja erat dengan tim Kokyo pada event promosi dan kampanye musiman, memastikan setiap inisiatif marketing sejalan dengan nilai brand dan pendekatan community-first. Hasilnya adalah kehadiran online yang berkembang yang diterjemahkan menjadi komunitas pelanggan setia yang tidak hanya mengunjungi Kokyo—mereka menjadi bagian darinya.",
    "projects.krisna.narrative": "Krisna Beach Hotel, sebuah resort tropis di Pangandaran, membutuhkan kehadiran digital yang menangkap esensi penawaran mereka: kemewahan, relaksasi, dan pengalaman tak terlupakan di pantai. Peran saya sebagai Digital Marketing & Content Creator adalah menerjemahkan visi itu menjadi konten digital yang menarik dan kampanye strategis.\n\nSaya mulai dengan mengembangkan strategi digital marketing hotel komprehensif yang mengakui sifat musiman bisnis perhotelan. High season dan low season memerlukan pendekatan berbeda, messaging berbeda, dan taktik promosi berbeda. Saya membuat rencana konten harian yang beradaptasi dengan ritme ini sambil mempertahankan identitas brand konsisten.\n\nProduksi konten visual adalah inti strategi. Saya merancang dan memproduksi konten visual berkualitas tinggi konsisten untuk Instagram dan Facebook—feed posts yang menampilkan kamar dan amenities, reels yang menangkap guest experience (sunset views, pool activities, dining moments), dan stories yang menciptakan rasa immediacy dan eksklusivitas. Setiap piece konten dirancang untuk menginspirasi bookings.\n\nBeyond digital, saya membuat materi promosi offline—flyer, poster, banner, dan backdrop—yang memperluas brand presence ke ruang fisik. Materi ini mendukung event promosi dan kampanye musiman yang dirancang untuk mendorong okupansi selama periode peak dan slower.\n\nPekerjaan melibatkan analisis content performance dan engagement metrics untuk memahami apa yang resonan dengan audiens. Pendekatan data-driven ini menginformasikan refinement konten berkelanjutan dan optimasi kampanye. Saya mempromosikan hotel events melalui visual storytelling efektif, memastikan occasion khusus dan paket musiman menerima perhatian yang mereka layak.\n\nHasilnya adalah kehadiran digital dan fisik kohesif yang meningkatkan visibilitas dan appeal Krisna Beach Hotel, mendorong bookings konsisten sepanjang tahun.",

    // Contact Page
    "contact.label": "Hubungi Saya",
    "contact.heading": "Mari bekerja sama.",
    "contact.sub": "Punya proyek? Mencari partner kreatif? Saya selalu terbuka untuk peluang baru — remote, hybrid, atau freelance.",
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
