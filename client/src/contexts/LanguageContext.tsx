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
