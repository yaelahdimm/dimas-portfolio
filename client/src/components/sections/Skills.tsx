/*
 * Design: Liquid Editorial — Skills & Tools Section
 * Clean card grid grouped by category.
 * Font: Space Grotesk headings, JetBrains Mono for tool names.
 * Colors: cream cards with coral category accents.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import {
  Megaphone,
  Palette,
  Video,
  Bot,
  BarChart3,
  Layout,
  Globe,
} from "lucide-react";

const skillCategories = [
  {
    icon: Megaphone,
    titleKey: "Digital Marketing & Ads",
    tools: ["Meta Ads", "Google Ads", "Meta Business Suite", "Lead Gen Campaigns", "Campaign Optimization"],
  },
  {
    icon: Layout,
    titleKey: "Social Media & Content",
    tools: ["Content Creation", "Content Strategy", "Branding", "Visual Storytelling", "Customer Engagement"],
  },
  {
    icon: Palette,
    titleKey: "Graphic Design",
    tools: ["Canva", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    icon: Video,
    titleKey: "Photo & Video Editing",
    tools: ["Adobe Lightroom", "CapCut"],
  },
  {
    icon: Bot,
    titleKey: "AI Tools",
    tools: ["ChatGPT", "Google Gemini", "Perplexity AI", "AI Image & Video Gen"],
  },
  {
    icon: BarChart3,
    titleKey: "Analytics & SEO",
    tools: ["Basic SEO", "Performance Analytics", "CPC/CTR Tracking"],
  },
  {
    icon: Globe,
    titleKey: "Office & Collaboration",
    tools: ["Microsoft Office", "Google Workspace", "Notion", "Public Speaking", "Event Management"],
  },
];

export default function Skills() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="skills" className="py-24 lg:py-36 bg-secondary/50" ref={ref}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          {t("skills.label")}
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-16"
        >
          {t("skills.heading")}
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-base">
                    {category.titleKey}
                  </h3>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
