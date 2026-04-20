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
const ABOUT_IMG = "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776602743/IMG_3640.JPG_qv1btn.jpg";

const projects = [
  {
    id: "pt-din",
    companyKey: "project.1.company",
    dateKey: "project.1.date",
    titleKey: "project.1.title",
    tagsKey: "project.1.tags",
    image: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776601143/project-ads-SZDukkMZeqeqYj3ABe6DPm_gusj64.webp",
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
    image: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776601177/1_d0nuql.png",
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
    image: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776601179/2_zsi9t7.png",
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    handleSwipe(touchStart, endX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const endX = e.clientX;
    handleSwipe(touchStart, endX);
  };

  const handleSwipe = (startX: number, endX: number) => {
    if (!startX || !endX) return;
    const distance = startX - endX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="space-y-6">
      {/* Slider Container */}
      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setTouchStart(0)}
      >
        <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0">
              {/* Card Container */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 items-stretch">
                  {/* LEFT: Image with Caption */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-start p-6 md:p-8 bg-secondary/20 dark:bg-secondary/10"
                  >
                    <div className="relative w-full">
                      <div className="rounded-lg overflow-hidden aspect-[3/4] bg-secondary/50 mb-4">
                        <img
                          src={project.image}
                          alt={t(project.titleKey)}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </div>
                      {/* Caption */}
                      <h4 className="font-body text-sm lg:text-base font-semibold text-foreground leading-snug">
                        {t(project.titleKey)}
                      </h4>
                    </div>
                  </motion.div>

                  {/* RIGHT: Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col justify-center p-6 md:p-8 space-y-5"
                  >
                    {/* Header */}
                    <div>
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="font-display text-2xl lg:text-3xl font-bold">{t(project.companyKey)}</h3>
                        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t(project.dateKey)}</span>
                      </div>
                      <h4 className="font-body text-base lg:text-lg font-semibold text-primary">{t(project.titleKey)}</h4>
                    </div>

                    {/* Metrics */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-5 border border-border/30">
                      <div className="font-mono text-xs text-primary uppercase tracking-wider mb-4">Key Metrics</div>
                      <div className="space-y-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="pb-4 border-b border-border/20 last:pb-0 last:border-b-0">
                            <div className="font-display text-xl font-bold">{metric.value}</div>
                            <div className="font-body text-sm font-medium text-muted-foreground">{metric.label}</div>
                            <div className="font-body text-xs text-muted-foreground/70">{metric.detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools & Skills */}
                    <div>
                      <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">Tools & Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.slice(0, 4).map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full font-mono text-xs font-medium border border-border/30 hover:border-primary/50 transition-colors"
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
              <LetterReveal text="Dimas Stya" delay={0.3} />
              <br />
              <LetterReveal text="Nugraha" delay={0.5} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="font-display text-2xl lg:text-3xl font-semibold text-primary mb-6"
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="font-body text-base lg:text-lg text-muted-foreground max-w-2xl mb-12"
            >
              {t("hero.description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                {t("hero.cta1")}
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/20 text-foreground font-display font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                <ArrowDown className="w-5 h-5 mr-2" />
                {t("hero.cta2")}
              </Link>
              <a
                href={CV_URL}
                download
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/20 text-foreground font-display font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {t("hero.cta3")}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="py-12 lg:py-16 border-y border-border/30 bg-secondary/5">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-display text-lg font-semibold text-foreground/60 flex-shrink-0">
                {item} •
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">{t("home.selectedWork")}</h2>
            <p className="font-body text-muted-foreground text-lg">{t("home.selectedWorkDesc")}</p>
          </motion.div>

          <ProjectSlider />
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="py-20 lg:py-32 bg-secondary/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[3/4]"
            >
              <img src={ABOUT_IMG} alt="Dimas" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-display text-3xl lg:text-4xl font-bold">{t("home.about")}</h3>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">{t("home.aboutDesc")}</p>
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:gap-3 transition-all duration-300"
              >
                {t("home.learnMore")} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
