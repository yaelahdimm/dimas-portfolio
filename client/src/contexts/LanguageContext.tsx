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
    "nav.work": "Work",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero
    "hero.label": "Digital Creative",
    "hero.headline": "I craft stories that convert.",
    "hero.sub": "Content strategist, visual storyteller, and Meta Ads specialist turning brands into movements. Based in Jakarta, open worldwide.",
    "hero.cta.hire": "Hire Me",
    "hero.cta.work": "View Work",
    "hero.cta.cv": "Download CV",

    // About
    "about.label": "My Journey",
    "about.heading": "About",
    "about.p1": "I didn't start in marketing — I started with curiosity. A Communications degree from Universitas Bina Sarana Informatika gave me the theory, but the real education came from building brands from scratch.",
    "about.p2": "From running Meta Ads campaigns that actually convert, to designing scroll-stopping content for hotels and coffee shops, I've learned that great marketing isn't about shouting louder — it's about telling better stories.",
    "about.p3": "I combine visual storytelling with data-driven strategy. Every piece of content I create has a purpose: drive engagement, build awareness, or generate leads. No fluff, just results.",

    // Skills
    "skills.label": "What I Bring",
    "skills.heading": "Skills & Tools",

    // Projects
    "projects.label": "Selected Projects",
    "projects.heading": "Work",

    // Project 1
    "project.1.company": "PT DIN",
    "project.1.date": "Sep 2025 - Mar 2026",
    "project.1.title": "Scaling lead generation through Meta Ads optimization",
    "project.1.problem": "The company needed a consistent flow of qualified leads through digital channels, but existing campaigns had high CPC and low conversion rates.",
    "project.1.approach": "Rebuilt campaign structure from scratch — refined audience targeting, implemented A/B creative testing, and optimized budget allocation based on real-time performance data.",
    "project.1.result": "Reduced CPC significantly while increasing lead volume. Improved CTR and conversion rates across all active campaigns.",
    "project.1.tags": "Meta Ads,Lead Generation,CPC Optimization",
    "project.1.metric1": "Lower CPC",
    "project.1.metric1.label": "Cost efficiency improved",
    "project.1.metric2": "Higher CTR",
    "project.1.metric2.label": "Click-through rate boost",

    // Project 2
    "project.2.company": "Kokyo Coffee",
    "project.2.date": "May 2025 - Aug 2025",
    "project.2.title": "Building a coffee brand's digital presence from zero",
    "project.2.problem": "A local coffee shop in Pangandaran had no digital strategy — no content calendar, no ad campaigns, no brand consistency online.",
    "project.2.approach": "Developed end-to-end digital marketing strategy: content planning, visual identity for social media, Meta Ads campaigns targeting local and tourist audiences.",
    "project.2.result": "Grew social media following and engagement significantly. Ad campaigns achieved target KPI and ROI within the first month.",
    "project.2.tags": "Content Strategy,Branding,Meta Ads",
    "project.2.metric1": "Brand Growth",
    "project.2.metric1.label": "Social media presence built",
    "project.2.metric2": "Target ROI",
    "project.2.metric2.label": "Achieved within first month",

    // Project 3
    "project.3.company": "Krisna Beach Hotel",
    "project.3.date": "Jul 2024 - May 2025",
    "project.3.title": "Driving hotel occupancy through visual storytelling",
    "project.3.problem": "The hotel struggled with low occupancy during off-season and lacked a cohesive digital marketing strategy to attract guests.",
    "project.3.approach": "Created a full content ecosystem — daily social media content, seasonal campaigns, offline promotional materials, and visual storytelling that showcased the hotel experience.",
    "project.3.result": "Increased brand awareness and engagement. Seasonal campaigns contributed to higher occupancy rates during traditionally slow periods.",
    "project.3.tags": "Visual Storytelling,Content Creation,Seasonal Campaigns",
    "project.3.metric1": "Higher Occupancy",
    "project.3.metric1.label": "During off-season periods",
    "project.3.metric2": "Consistent Content",
    "project.3.metric2.label": "Daily multi-platform output",

    // Experience
    "exp.label": "Career Path",
    "exp.heading": "Experience",

    // Contact
    "contact.label": "Get In Touch",
    "contact.heading": "Let's work together.",
    "contact.sub": "Got a project in mind? Looking for a creative partner? I'm always open to new opportunities — remote, hybrid, or freelance.",
    "contact.cta": "Say Hello",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.linkedin": "LinkedIn",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Crafted with intention.",
  },
  id: {
    // Nav
    "nav.work": "Karya",
    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.experience": "Pengalaman",
    "nav.contact": "Kontak",

    // Hero
    "hero.label": "Digital Creative",
    "hero.headline": "Saya merancang cerita yang menghasilkan.",
    "hero.sub": "Content strategist, visual storyteller, dan Meta Ads specialist yang mengubah brand menjadi gerakan. Berbasis di Jakarta, terbuka untuk seluruh dunia.",
    "hero.cta.hire": "Hubungi Saya",
    "hero.cta.work": "Lihat Karya",
    "hero.cta.cv": "Unduh CV",

    // About
    "about.label": "Perjalanan Saya",
    "about.heading": "Tentang",
    "about.p1": "Saya tidak memulai dari marketing — saya memulai dari rasa ingin tahu. Gelar Ilmu Komunikasi dari Universitas Bina Sarana Informatika memberi saya teori, tapi pendidikan sesungguhnya datang dari membangun brand dari nol.",
    "about.p2": "Dari menjalankan kampanye Meta Ads yang benar-benar mengkonversi, hingga mendesain konten yang menghentikan scroll untuk hotel dan coffee shop, saya belajar bahwa marketing yang hebat bukan soal berteriak lebih keras — tapi soal bercerita lebih baik.",
    "about.p3": "Saya menggabungkan visual storytelling dengan strategi berbasis data. Setiap konten yang saya buat punya tujuan: mendorong engagement, membangun awareness, atau menghasilkan leads. Tanpa basa-basi, hanya hasil.",

    // Skills
    "skills.label": "Yang Saya Bawa",
    "skills.heading": "Keahlian & Alat",

    // Projects
    "projects.label": "Proyek Terpilih",
    "projects.heading": "Karya",

    // Project 1
    "project.1.company": "PT DIN",
    "project.1.date": "Sep 2025 - Mar 2026",
    "project.1.title": "Meningkatkan lead generation melalui optimasi Meta Ads",
    "project.1.problem": "Perusahaan membutuhkan aliran leads berkualitas melalui kanal digital, namun kampanye yang ada memiliki CPC tinggi dan conversion rate rendah.",
    "project.1.approach": "Membangun ulang struktur kampanye — memperbaiki targeting audiens, menerapkan A/B testing kreatif, dan mengoptimalkan alokasi budget berdasarkan data performa real-time.",
    "project.1.result": "Menurunkan CPC secara signifikan sambil meningkatkan volume leads. Meningkatkan CTR dan conversion rate di semua kampanye aktif.",
    "project.1.tags": "Meta Ads,Lead Generation,Optimasi CPC",
    "project.1.metric1": "CPC Lebih Rendah",
    "project.1.metric1.label": "Efisiensi biaya meningkat",
    "project.1.metric2": "CTR Lebih Tinggi",
    "project.1.metric2.label": "Peningkatan click-through rate",

    // Project 2
    "project.2.company": "Kokyo Coffee",
    "project.2.date": "Mei 2025 - Agu 2025",
    "project.2.title": "Membangun kehadiran digital brand kopi dari nol",
    "project.2.problem": "Coffee shop lokal di Pangandaran tidak memiliki strategi digital — tidak ada kalender konten, tidak ada kampanye iklan, tidak ada konsistensi brand online.",
    "project.2.approach": "Mengembangkan strategi digital marketing end-to-end: perencanaan konten, identitas visual untuk media sosial, kampanye Meta Ads yang menargetkan audiens lokal dan turis.",
    "project.2.result": "Menumbuhkan followers dan engagement media sosial secara signifikan. Kampanye iklan mencapai target KPI dan ROI dalam bulan pertama.",
    "project.2.tags": "Strategi Konten,Branding,Meta Ads",
    "project.2.metric1": "Pertumbuhan Brand",
    "project.2.metric1.label": "Kehadiran media sosial terbangun",
    "project.2.metric2": "Target ROI",
    "project.2.metric2.label": "Tercapai dalam bulan pertama",

    // Project 3
    "project.3.company": "Krisna Beach Hotel",
    "project.3.date": "Jul 2024 - Mei 2025",
    "project.3.title": "Mendorong okupansi hotel melalui visual storytelling",
    "project.3.problem": "Hotel mengalami okupansi rendah saat low season dan tidak memiliki strategi digital marketing yang kohesif untuk menarik tamu.",
    "project.3.approach": "Membuat ekosistem konten lengkap — konten media sosial harian, kampanye musiman, materi promosi offline, dan visual storytelling yang menampilkan pengalaman hotel.",
    "project.3.result": "Meningkatkan brand awareness dan engagement. Kampanye musiman berkontribusi pada tingkat okupansi yang lebih tinggi selama periode yang biasanya sepi.",
    "project.3.tags": "Visual Storytelling,Pembuatan Konten,Kampanye Musiman",
    "project.3.metric1": "Okupansi Naik",
    "project.3.metric1.label": "Selama periode low season",
    "project.3.metric2": "Konten Konsisten",
    "project.3.metric2.label": "Output harian multi-platform",

    // Experience
    "exp.label": "Perjalanan Karir",
    "exp.heading": "Pengalaman",

    // Contact
    "contact.label": "Hubungi Saya",
    "contact.heading": "Mari bekerja sama.",
    "contact.sub": "Punya proyek? Mencari partner kreatif? Saya selalu terbuka untuk peluang baru — remote, hybrid, atau freelance.",
    "contact.cta": "Sapa Saya",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.linkedin": "LinkedIn",

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
