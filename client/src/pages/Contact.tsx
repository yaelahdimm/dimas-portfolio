/*
 * Contact Page — Conversion
 * Clean contact section with email, WhatsApp, LinkedIn.
 * Design: Liquid Glass, pastel blue palette.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowUpRight, MapPin, Send } from "lucide-react";

const ABOUT_IMG = "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776412196/Pas_Foto2_ttb6wu.png";

const contactMethods = [
  {
    icon: Mail,
    labelKey: "contact.email",
    value: "dimastyanugraha@gmail.com",
    href: "mailto:dimastyanugraha@gmail.com",
  },
  {
    icon: Phone,
    labelKey: "contact.whatsapp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: Linkedin,
    labelKey: "contact.linkedin",
    value: "Dimas Stya Nugraha",
    href: "https://www.linkedin.com/in/dimas-stya-nugraha/",
  },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column — Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label mb-4">{t("contact.label")}</div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t("contact.heading")}
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
                {t("contact.sub")}
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-12">
                {contactMethods.map((method, i) => (
                  <motion.a
                    key={i}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl group hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                        {t(method.labelKey)}
                      </div>
                      <div className="font-body text-sm font-medium">{method.value}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">Jakarta, Indonesia — Open to remote work worldwide</span>
              </motion.div>
            </motion.div>

            {/* Right Column — Visual + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col"
            >
              {/* Portrait */}
              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src={ABOUT_IMG}
                  alt="Dimas Stya Nugraha"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
              </div>

              {/* Quick Contact Card */}
              <div className="glass rounded-2xl p-8 flex-1 flex flex-col justify-center">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Ready to start a project?
                </h3>
                <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                  Whether you need content strategy, social media management, or Meta Ads expertise — I'm here to help your brand grow.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:dimastyanugraha@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    {t("contact.cta")}
                  </a>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-foreground/15 font-display font-semibold text-sm rounded-full hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
