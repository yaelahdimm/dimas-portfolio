/*
 * Design: Liquid Editorial — Hero Section
 * Large kinetic name reveal, value proposition, CTAs.
 * Fluid abstract background image with overlay.
 * Font: Space Grotesk display, DM Sans body.
 * Colors: cream bg, charcoal text, coral CTAs.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/hero-bg-8cFjM8JVUnVBtEfpbp9x49.webp";
const CV_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/DimasStyaNugraha_2ae7d949.pdf";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-25 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-label mb-6"
          >
            {t("hero.label")}
          </motion.div>

          {/* Name - Kinetic Typography */}
          <h1 className="font-display font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight mb-8">
            {"Dimas".split("").map((letter, i) => (
              <motion.span
                key={`f-${i}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <br className="sm:hidden" />
            <span className="inline-block w-[0.3em]" />
            {"Stya".split("").map((letter, i) => (
              <motion.span
                key={`m-${i}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <br />
            {"Nugraha".split("").map((letter, i) => (
              <motion.span
                key={`l-${i}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6 leading-tight"
          >
            {t("hero.headline")}
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            {t("hero.sub")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Briefcase className="w-4 h-4" />
              {t("hero.cta.hire")}
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-foreground/20 font-display font-semibold text-sm rounded-full hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300"
            >
              {t("hero.cta.work")}
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary font-display font-semibold text-sm rounded-full hover:bg-secondary/80 hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              {t("hero.cta.cv")}
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
