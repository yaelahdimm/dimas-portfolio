/*
 * Profile Page — Storytelling
 * About narrative, skills & tools grid, experience timeline.
 * Design: Liquid Glass, pastel blue palette.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Camera, Film, Palette, BarChart3, Megaphone, PenTool,
  Briefcase
} from "lucide-react";

const ABOUT_IMG = "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776412196/Pas_Foto2_ttb6wu.png";

const skills = [
  { icon: Megaphone, name: "Meta Ads", desc: "Campaign strategy & optimization" },
  { icon: Camera, name: "Content Creation", desc: "Photo & visual storytelling" },
  { icon: Film, name: "Video Editing", desc: "Reels, short-form & long-form" },
  { icon: Palette, name: "Graphic Design", desc: "Brand identity & social assets" },
  { icon: BarChart3, name: "Analytics", desc: "Data-driven decision making" },
  { icon: PenTool, name: "Copywriting", desc: "Captions, ads & brand voice" },
];

const tools = [
  "Meta Ads", "Facebook Ads", "Instagram Ads", "Meta Business Suite",
  "Adobe Photoshop", "Adobe Lightroom", "Canva", "Adobe Illustrator",
  "CapCut", "Google Workspace", "Microsoft Office", "Notion",
  "ChatGPT", "Google Gemini", "Perplexity AI"
];

const experiences = [
  {
    type: "work" as const,
    companyKey: "project.1.company",
    role: "Digital Marketing Staff",
    roleId: "Staf Pemasaran Digital",
    dateKey: "project.1.date",
    points: [
      "Managed Facebook and Instagram Meta Ads campaigns for lead generation",
      "Planned campaign strategy, audience targeting, and budget allocation",
      "Optimized targeting, creatives, and campaign budget to improve lead quality and cost efficiency",
      "Reduced CPC from $3.00 to $0.89 (67% reduction) and increased lead volume by 3.5x",
    ],
    pointsId: [
      "Mengelola kampanye Meta Ads Facebook dan Instagram untuk lead generation",
      "Merencanakan strategi kampanye, targeting audiens, dan alokasi budget",
      "Mengoptimalkan targeting, kreatif, dan budget kampanye untuk meningkatkan kualitas lead dan efisiensi biaya",
      "Mengurangi CPC dari $3.00 menjadi $0.89 (pengurangan 67%) dan meningkatkan volume lead sebesar 3.5x",
    ],
  },
  {
    type: "work" as const,
    companyKey: "project.2.company",
    role: "Digital Marketing & Content Creator",
    roleId: "Digital Marketing & Content Creator",
    dateKey: "project.2.date",
    points: [
      "Developed digital marketing and content strategies for brand awareness and sales growth",
      "Managed social media operations, content planning, and audience engagement",
      "Created promotional designs and digital campaign assets (posters, banners, social content)",
      "Executed and optimized Meta Ads campaigns for promotional goals and campaign reach",
    ],
    pointsId: [
      "Mengembangkan strategi digital marketing dan konten untuk awareness dan pertumbuhan penjualan",
      "Mengelola operasi media sosial, perencanaan konten, dan engagement audiens",
      "Membuat desain promosi dan aset kampanye digital (poster, banner, konten sosial)",
      "Melaksanakan dan mengoptimalkan kampanye Meta Ads untuk tujuan promosi dan jangkauan kampanye",
    ],
  },
  {
    type: "work" as const,
    companyKey: "project.3.company",
    role: "Digital Marketing & Content Creator",
    roleId: "Digital Marketing & Content Creator",
    dateKey: "project.3.date",
    points: [
      "Developed hotel digital marketing strategies recognizing seasonal hospitality business patterns",
      "Produced Instagram and Facebook content (feed posts, reels, stories) showcasing rooms and guest experiences",
      "Created offline promotional materials (flyers, posters, banners, backdrops) for events and campaigns",
      "Analyzed content performance and engagement to optimize promotional strategies and drive bookings",
    ],
    pointsId: [
      "Mengembangkan strategi digital marketing hotel yang mempertimbangkan pola bisnis perhotelan musiman",
      "Memproduksi konten Instagram dan Facebook (feed posts, reels, stories) menampilkan kamar dan pengalaman tamu",
      "Membuat materi promosi offline (flyer, poster, banner, backdrop) untuk event dan kampanye",
      "Menganalisis performa konten dan engagement untuk mengoptimalkan strategi promosi dan mendorong pemesanan",
    ],
  },

];

export default function Profile() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      {/* ===== ABOUT STORY ===== */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-32">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={ABOUT_IMG}
                    alt="Dimas Stya Nugraha"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { num: "3+", label: "Years" },
                    { num: "10+", label: "Projects" },
                    { num: "3", label: "Brands" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="glass rounded-xl p-3 text-center"
                    >
                      <div className="font-display text-2xl font-bold text-primary">{stat.num}</div>
                      <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="section-label mb-4">{t("profile.label")}</div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
                {t("profile.heading")}
              </h1>

              <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
                <p>{t("profile.p1")}</p>
                <p>{t("profile.p2")}</p>
                <p>{t("profile.p3")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS & TOOLS ===== */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="section-label mb-4">{t("profile.skills.label")}</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              {t("profile.skills.heading")}
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-6 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{skill.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6">Tools I Use</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2 glass-subtle rounded-full font-mono text-xs font-medium hover:scale-105 transition-transform duration-300"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="section-label mb-4">{t("profile.exp.label")}</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              {t("profile.exp.heading")}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-16 lg:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-6 top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>

                  <div className="glass rounded-xl p-6">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="font-mono text-xs text-primary uppercase tracking-wider">
                          {t(exp.companyKey)}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {t(exp.dateKey)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-3">
                      {lang === "id" ? exp.roleId : exp.role}
                    </h3>
                    <ul className="space-y-2">
                      {(lang === "id" ? exp.pointsId : exp.points).map((point, j) => (
                        <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
