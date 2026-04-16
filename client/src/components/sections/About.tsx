/*
 * Design: Liquid Editorial — About Section
 * Story-driven narrative with portrait image.
 * Asymmetric two-column layout: story left, portrait right.
 * Font: Space Grotesk headings, DM Sans body.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/about-portrait-9g8QP26eGLr3r8wcMzTYbw.webp";

export default function About() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 lg:py-36" ref={ref}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          {t("about.label")}
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-16"
        >
          {t("about.heading")}
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg leading-relaxed text-foreground"
            >
              <span className="font-display font-bold text-xl">{t("about.p1").split(" — ")[0]} —</span>{" "}
              {t("about.p1").split(" — ").slice(1).join(" — ")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-lg leading-relaxed text-muted-foreground"
            >
              {t("about.p2")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-lg leading-relaxed text-muted-foreground"
            >
              {t("about.p3")}
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-border"
            >
              <div>
                <div className="font-display font-bold text-3xl lg:text-4xl text-primary">3+</div>
                <div className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="font-display font-bold text-3xl lg:text-4xl text-primary">5+</div>
                <div className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">Brands Built</div>
              </div>
              <div>
                <div className="font-display font-bold text-3xl lg:text-4xl text-primary">10+</div>
                <div className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">Campaigns Run</div>
              </div>
            </motion.div>
          </div>

          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={PORTRAIT}
                  alt="Dimas Stya Nugraha"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-primary/5 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
