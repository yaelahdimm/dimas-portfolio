/*
 * Home Page — Branding + Teaser
 * Hero with kinetic name, marquee ticker, selected work grid, about teaser.
 * Design: Liquid Glass, pastel blue palette.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/hero-blue-JD8yEEkvYqxjJoHXcbh76q.webp";
const CV_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/DimasStyaNugraha_2ae7d949.pdf";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/about-portrait_acf2b6e4.png";

const selectedProjects = [
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/kokyo-1-RWVdogU4TpTmnLiz5P7Kmf.webp",
    companyKey: "project.2.company",
    titleKey: "project.2.title",
    tagsKey: "project.2.tags",
  },
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/krisna-1-LR8oRDbZnU3UhuwUQyw4Ld.webp",
    companyKey: "project.3.company",
    titleKey: "project.3.title",
    tagsKey: "project.3.tags",
  },
  {
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/kokyo-3-4zgtsa6Xse4zZCkFC3XH8P.webp",
    companyKey: "project.1.company",
    titleKey: "project.1.title",
    tagsKey: "project.1.tags",
  },
];

const marqueeItems = [
  "Content Strategy", "Meta Ads", "Visual Storytelling", "Brand Identity",
  "Social Media", "Video Editing", "Graphic Design", "Lead Generation",
  "Campaign Optimization", "Digital Marketing",
];

function LetterReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split("").map((letter, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.035,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-40 dark:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-label mb-6"
            >
              {t("hero.label")}
            </motion.div>

            <h1 className="font-display font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight mb-8">
              <LetterReveal text="Dimas Stya" delay={0.4} />
              <br />
              <LetterReveal text="Nugraha" delay={0.8} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6 leading-tight"
            >
              {t("hero.headline")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              {t("hero.sub")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Briefcase className="w-4 h-4" />
                {t("hero.cta.hire")}
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-foreground/20 font-display font-semibold text-sm rounded-full hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300"
              >
                {t("hero.cta.work")}
                <ArrowDown className="w-4 h-4" />
              </Link>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 glass font-display font-semibold text-sm rounded-full hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                {t("hero.cta.cv")}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="border-y border-border/50 bg-secondary/30 py-4 overflow-hidden">
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .marquee-track { animation: marquee 25s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="marquee-track flex whitespace-nowrap" style={{ width: "max-content" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 font-display text-sm font-medium text-muted-foreground/60 flex items-center gap-3">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </span>
          ))}
        </div>
      </div>

      {/* ===== SELECTED WORK ===== */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="section-label mb-4">{t("selected.label")}</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("selected.heading")}
            </h2>
          </motion.div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Large card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 group"
            >
              <Link href="/work" className="block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={selectedProjects[0].img}
                    alt={t(selectedProjects[0].titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="font-mono text-xs text-white/70 uppercase tracking-wider mb-2">
                      {t(selectedProjects[0].companyKey)}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white leading-snug">
                      {t(selectedProjects[0].titleKey)}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Two stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8">
              {selectedProjects.slice(1).map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
                  className="group flex-1"
                >
                  <Link href="/work" className="block h-full">
                    <div className="relative overflow-hidden rounded-2xl h-full min-h-[200px]">
                      <img
                        src={project.img}
                        alt={t(project.titleKey)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="font-mono text-xs text-white/70 uppercase tracking-wider mb-1">
                          {t(project.companyKey)}
                        </div>
                        <h3 className="font-display text-base font-bold text-white leading-snug">
                          {t(project.titleKey)}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-foreground/15 font-display font-semibold text-sm rounded-full hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 group"
            >
              {t("selected.cta")}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={ABOUT_IMG}
                    alt="Dimas Stya Nugraha"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                {/* Glass stat card */}
                <div className="absolute -bottom-6 -right-4 lg:-right-8 glass rounded-xl p-4 sm:p-5">
                  <div className="font-display text-3xl font-bold text-primary">3+</div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="section-label mb-4">{t("teaser.label")}</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                {t("teaser.heading")}
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                {t("teaser.text")}
              </p>
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
              >
                {t("teaser.cta")}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
