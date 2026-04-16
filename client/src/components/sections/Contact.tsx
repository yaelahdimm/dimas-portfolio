/*
 * Design: Liquid Editorial — Contact Section
 * Portrait on left, contact info and CTAs on right.
 * Font: Space Grotesk headings, DM Sans body.
 * Colors: cream bg, coral CTA buttons.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, ArrowUpRight } from "lucide-react";

const PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/about-portrait-9g8QP26eGLr3r8wcMzTYbw.webp";

export default function Contact() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const contactLinks = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "styanugrahadimas@gmail.com",
      href: "mailto:styanugrahadimas@gmail.com",
    },
    {
      icon: MessageCircle,
      label: t("contact.whatsapp"),
      value: "+62 838-2717-6778",
      href: "https://wa.me/6283827176778",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      value: "Dimas Stya Nugraha",
      href: "https://www.linkedin.com/in/dimas-stya-nugraha",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-36 bg-secondary/50" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Portrait Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary max-w-sm mx-auto lg:mx-0">
              <img
                src={PORTRAIT}
                alt="Dimas Stya Nugraha"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-label mb-4"
            >
              {t("contact.label")}
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              {t("contact.heading")}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              {t("contact.sub")}
            </motion.p>

            {/* Contact Links */}
            <div className="space-y-4 mb-10">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                        {link.label}
                      </div>
                      <div className="font-body text-sm font-medium truncate">
                        {link.value}
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="mailto:styanugrahadimas@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-base rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                {t("contact.cta")}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
