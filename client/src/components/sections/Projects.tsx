/*
 * Design: Liquid Editorial — Projects/Work Section
 * Editorial project cards with split layout (text left, image right).
 * Each card shows: number, company, headline, problem/approach/result, tags, metrics.
 * Font: Space Grotesk headings, DM Sans body, JetBrains Mono for tags.
 * Colors: cream bg, charcoal text, coral accents on hover.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECT_IMAGES = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/project-ads-gSDaeEAuRgHxngkYBnoYzn.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/project-coffee-juubhxy2GsquMv7jyUJNyV.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/project-hotel-XqdZrvqb2Qm5pWLuxnp8oc.webp",
];

function ProjectCard({ index, image }: { index: number; image: string }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const num = index + 1;
  const prefix = `project.${num}`;

  const tags = t(`${prefix}.tags`).split(",");

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
    >
      {/* Text Side */}
      <div className="p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
        <div>
          {/* Number & Company */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary font-semibold">
              0{num}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {t(`${prefix}.company`)} / {t(`${prefix}.date`)}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-2xl leading-tight mb-6 group-hover:text-primary transition-colors duration-300">
            {t(`${prefix}.title`)}
          </h3>

          {/* Problem / Approach / Result */}
          <div className="space-y-4 mb-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1.5">Problem</div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t(`${prefix}.problem`)}
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1.5">Approach</div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t(`${prefix}.approach`)}
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1.5">Result</div>
              <p className="font-body text-sm text-foreground leading-relaxed font-medium">
                {t(`${prefix}.result`)}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="flex gap-8 pt-6 border-t border-border">
          <div>
            <div className="font-display font-bold text-lg text-primary">
              {t(`${prefix}.metric1`)}
            </div>
            <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
              {t(`${prefix}.metric1.label`)}
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-lg text-primary">
              {t(`${prefix}.metric2`)}
            </div>
            <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
              {t(`${prefix}.metric2.label`)}
            </div>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden order-1 lg:order-2">
        <img
          src={image}
          alt={t(`${prefix}.title`)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="work" className="py-24 lg:py-36" ref={ref}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          {t("projects.label")}
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-16"
        >
          {t("projects.heading")}
        </motion.h2>

        {/* Project Cards */}
        <div className="space-y-8">
          {PROJECT_IMAGES.map((image, i) => (
            <ProjectCard key={i} index={i} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
