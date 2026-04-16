/*
 * Design: Liquid Editorial — Experience Section
 * Clean timeline with impact-focused descriptions.
 * Font: Space Grotesk headings, DM Sans body, JetBrains Mono for dates.
 * Colors: cream bg, charcoal text, coral timeline accent.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "PT DIN",
    role: "Digital Marketing Staff",
    roleId: "Digital Marketing Staff",
    location: "Jakarta, Indonesia",
    date: "Sep 2025 - Mar 2026",
    highlights: [
      "Managed Meta Ads campaigns (Facebook & Instagram) generating qualified leads",
      "Optimized CPC, CTR, and conversion rates through data-driven A/B testing",
      "Developed campaign strategies with refined audience targeting and budget allocation",
    ],
    highlightsId: [
      "Mengelola kampanye Meta Ads (Facebook & Instagram) menghasilkan leads berkualitas",
      "Mengoptimalkan CPC, CTR, dan conversion rate melalui A/B testing berbasis data",
      "Mengembangkan strategi kampanye dengan targeting audiens dan alokasi budget yang tepat",
    ],
  },
  {
    company: "Kokyo Coffee",
    role: "Digital Marketing & Content Creator",
    roleId: "Digital Marketing & Content Creator",
    location: "Pangandaran, Indonesia",
    date: "May 2025 - Aug 2025",
    highlights: [
      "Built end-to-end digital marketing strategy from zero",
      "Managed social media operations including content planning and visual production",
      "Designed promotional materials and ran Meta Ads campaigns achieving target ROI",
    ],
    highlightsId: [
      "Membangun strategi digital marketing end-to-end dari nol",
      "Mengelola operasional media sosial termasuk perencanaan konten dan produksi visual",
      "Mendesain materi promosi dan menjalankan kampanye Meta Ads mencapai target ROI",
    ],
  },
  {
    company: "Krisna Beach Hotel",
    role: "Digital Marketing & Content Creator",
    roleId: "Digital Marketing & Content Creator",
    location: "Pangandaran, Indonesia",
    date: "Jul 2024 - May 2025",
    highlights: [
      "Developed hotel digital marketing strategy with daily content production",
      "Created consistent visual content across Instagram and Facebook platforms",
      "Executed seasonal campaigns that increased occupancy during off-peak periods",
    ],
    highlightsId: [
      "Mengembangkan strategi digital marketing hotel dengan produksi konten harian",
      "Membuat konten visual konsisten di platform Instagram dan Facebook",
      "Melaksanakan kampanye musiman yang meningkatkan okupansi di periode sepi",
    ],
  },
  {
    company: "Krisna Beach Hotel",
    role: "Front Office / Receptionist",
    roleId: "Front Office / Resepsionis",
    location: "Pangandaran, Indonesia",
    date: "Mar 2024 - Jun 2024",
    highlights: [
      "Managed guest check-in/check-out with professional hospitality service",
      "Handled reservations and supported marketing team with promotional tasks",
    ],
    highlightsId: [
      "Mengelola check-in/check-out tamu dengan layanan hospitality profesional",
      "Menangani reservasi dan mendukung tim marketing dengan tugas promosi",
    ],
  },
  {
    company: "PT Djasa Autosarana Transports",
    role: "Graphic Design Intern",
    roleId: "Magang Desain Grafis",
    location: "Jakarta, Indonesia",
    date: "Aug 2022 - Oct 2022",
    highlights: [
      "Created visual content for company social media campaigns",
      "Applied graphic design principles in real marketing projects",
    ],
    highlightsId: [
      "Membuat konten visual untuk kampanye media sosial perusahaan",
      "Menerapkan prinsip desain grafis dalam proyek marketing nyata",
    ],
  },
];

export default function Experience() {
  const { t, lang } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="experience" className="py-24 lg:py-36" ref={ref}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          {t("exp.label")}
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-16"
        >
          {t("exp.heading")}
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 lg:left-[200px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.date}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group relative grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 py-8 border-b border-border last:border-b-0 hover:bg-secondary/30 -mx-4 px-4 rounded-xl transition-colors duration-300"
              >
                {/* Date Column */}
                <div className="sm:text-right">
                  <div className="font-mono text-xs text-muted-foreground">
                    {exp.date}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground/60 mt-1 uppercase tracking-wider">
                    {exp.location}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-[196px] top-10 w-2 h-2 rounded-full bg-primary ring-4 ring-background hidden sm:block group-hover:scale-150 transition-transform" />

                {/* Content Column */}
                <div className="sm:pl-4">
                  <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <div className="font-body text-sm text-muted-foreground mb-3 italic">
                    {lang === "id" ? exp.roleId : exp.role}
                  </div>
                  <ul className="space-y-1.5">
                    {(lang === "id" ? exp.highlightsId : exp.highlights).map((h, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-8">
              <div className="sm:text-right">
                <div className="font-mono text-xs text-muted-foreground">2023</div>
                <div className="font-mono text-[10px] text-muted-foreground/60 mt-1 uppercase tracking-wider">
                  Jakarta, Indonesia
                </div>
              </div>
              <div className="sm:pl-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                  {lang === "id" ? "Pendidikan" : "Education"}
                </div>
                <h3 className="font-display font-bold text-lg">
                  Universitas Bina Sarana Informatika
                </h3>
                <div className="font-body text-sm text-muted-foreground">
                  {lang === "id" ? "S1 Ilmu Komunikasi" : "Bachelor of Communication Science"} — GPA: 3.36/4.00
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
