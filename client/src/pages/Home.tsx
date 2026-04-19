/*
 * Home Page — Branding + Teaser
 * Hero with kinetic name, marquee ticker, horizontal project slider, about teaser.
 * Design: Liquid Glass, pastel blue palette.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/hero-blue-JD8yEEkvYqxjJoHXcbh76q.webp";
const CV_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/DimasStyaNugraha_2ae7d949.pdf";
const ABOUT_IMG = "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776412196/Pas_Foto2_ttb6wu.png";

const projects = [
  {
    id: "pt-din",
    companyKey: "project.1.company",
    dateKey: "project.1.date",
    titleKey: "project.1.title",
    tagsKey: "project.1.tags",
    image: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419547/project-kokyo-1_bj4f2t.png",
    metrics: [
      { value: "67%", label: "CPC Reduction", detail: "$3.00 → $0.89" },
      { value: "3.5x", label: "Lead Volume", detail: "Increase" },
    ],
    tools: ["Meta Ads Manager", "Campaign Optimization", "A/B Testing", "Audience Targeting", "Budget Management"],
  },
  {
    id: "kokyo",
    companyKey: "project.2.company",
    dateKey: "project.2.date",
    titleKey: "project.2.title",
    tagsKey: "project.2.tags",
    image: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419546/project-kokyo-2_abc123.png",
    metrics: [
      { value: "Zero to Community", label: "Brand Launch", detail: "Engaged following" },
      { value: "Daily", label: "Content", detail: "Visual storytelling" },
    ],
    tools: ["Content Strategy", "Visual Storytelling", "Meta Ads", "Graphic Design", "Community Management"],
  },
  {
    id: "krisna",
    companyKey: "project.3.company",
    dateKey: "project.3.date",
    titleKey: "project.3.title",
    tagsKey: "project.3.tags",
    image: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419660/project-krisna-1_qu1rwg.jpg",
    metrics: [
      { value: "Consistent", label: "Content Production", detail: "Daily posts" },
      { value: "High & Low", label: "Seasonal Campaigns", detail: "Optimized occupancy" },
    ],
    tools: ["Content Strategy", "Visual Storytelling", "Seasonal Campaigns", "Meta Ads", "Graphic Design"],
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

function ProjectSlider() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setAutoPlay(false);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="space-y-6">
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* LEFT: Image Slider (40%) */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center lg:justify-start"
                >
                  <div className="relative w-full max-w-[280px]">
                    <div className="rounded-xl overflow-hidden aspect-[4/5] bg-secondary/50">
                      <img
                        src={project.image}
                        alt={t(project.titleKey)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                      {[0, 1, 2].map((i) => (
                        <button
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === 0 ? "bg-primary w-4" : "bg-primary/30 hover:bg-primary/50"
                          }`}
                          aria-label={`Image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT: Content (60%) */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col justify-center space-y-6"
                >
                  {/* Header */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-display text-2xl lg:text-3xl font-bold">{t(project.companyKey)}</h3>
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t(project.dateKey)}</span>
                    </div>
                    <h4 className="font-body text-base lg:text-lg font-semibold text-primary mb-2">{t(project.titleKey)}</h4>
                  </div>

                  {/* Metrics */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-border/30">
                    <div className="font-mono text-xs text-primary uppercase tracking-wider mb-3">Key Metrics</div>
                    <div className="space-y-3">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="pb-3 border-b border-border/20 last:pb-0 last:border-b-0">
                          <div className="font-display text-xl font-bold">{metric.value}</div>
                          <div className="font-body text-xs font-medium text-muted-foreground">{metric.label}</div>
                          <div className="font-body text-xs text-muted-foreground/70">{metric.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Skills */}
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Tools & Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 glass-subtle rounded-full font-mono text-xs font-medium border border-border/30"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group w-fit"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar Indicator */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1 bg-border/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{currentIndex + 1} / {projects.length}</span>
      </div>
    </div>
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

      {/* ===== SELECTED PROJECTS (HORIZONTAL SLIDER) ===== */}
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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <ProjectSlider />
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
