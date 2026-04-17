/*
 * Work Page — Full Showcase
 * Photo grid (6 photos, 4:5 aspect) + Video reels section (5 reels, 9:16 aspect).
 * Design: Liquid Glass, pastel blue palette.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Instagram, Play, ExternalLink } from "lucide-react";

const photos = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/kokyo-1-RWVdogU4TpTmnLiz5P7Kmf.webp",
    brand: "Kokyo Coffee",
    desc: "Latte art & cafe ambiance",
    link: "https://www.instagram.com/kokyo.coffee/",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/krisna-1-LR8oRDbZnU3UhuwUQyw4Ld.webp",
    brand: "Krisna Beach Hotel",
    desc: "Beachfront luxury",
    link: "https://www.instagram.com/krisnabeachhotel/",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/kokyo-2-92m3WD4AwP3REFPcVDZc9L.webp",
    brand: "Kokyo Coffee",
    desc: "Menu & product showcase",
    link: "https://www.instagram.com/kokyo.coffee/",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/krisna-2-RRkVqvFSYnA355XqD6cpa4.webp",
    brand: "Krisna Beach Hotel",
    desc: "Tropical resort vibes",
    link: "https://www.instagram.com/krisnabeachhotel/",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/kokyo-3-4zgtsa6Xse4zZCkFC3XH8P.webp",
    brand: "Kokyo Coffee",
    desc: "Brand identity & lifestyle",
    link: "https://www.instagram.com/kokyo.coffee/",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/krisna-3-4n9ww3ttwr7Cpyv9SLjViM.webp",
    brand: "Krisna Beach Hotel",
    desc: "Sunset pool experience",
    link: "https://www.instagram.com/krisnabeachhotel/",
  },
];

const reels = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/reel-kokyo-1-ctFyZKvMRQfJa3dd29vkzQ.webp",
    brand: "Kokyo Coffee",
    title: "Latte Art Process",
    link: "https://www.instagram.com/kokyo.coffee/",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/reel-kokyo-2-WhqX2czamEW2wegBBbvfPy.webp",
    brand: "Kokyo Coffee",
    title: "Cafe Experience",
    link: "https://www.instagram.com/kokyo.coffee/",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/reel-krisna-1-3uKEw9ThKKq5t7x7vGsEur.webp",
    brand: "Krisna Beach Hotel",
    title: "Sunrise Balcony View",
    link: "https://www.instagram.com/krisnabeachhotel/",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/reel-krisna-2-AnNbFfUY96QG5XLKVEjsC4.webp",
    brand: "Krisna Beach Hotel",
    title: "Pool Party Vibes",
    link: "https://www.instagram.com/krisnabeachhotel/",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/reel-krisna-3-S2Qyi5Bz7aPvmg8kVgBBrm.webp",
    brand: "Krisna Beach Hotel",
    title: "Beachfront Dinner",
    link: "https://www.instagram.com/krisnabeachhotel/",
  },
];

export default function Work() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-4">{t("work.label")}</div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t("work.heading")}
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A curated collection of content I've created for brands across hospitality and lifestyle.
              Each piece is crafted with purpose — to engage, inspire, and convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== PHOTO GRID ===== */}
      <section className="pb-24 lg:pb-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="section-label mb-3">{t("work.photos.label")}</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              {t("work.photos.heading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {photos.map((photo, i) => (
              <motion.a
                key={i}
                href={photo.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={photo.src}
                    alt={photo.desc}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 sm:p-5">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Instagram className="w-3.5 h-3.5 text-white/80" />
                      <span className="font-mono text-[11px] text-white/80 uppercase tracking-wider">
                        {photo.brand}
                      </span>
                    </div>
                    <p className="font-body text-sm text-white/90">{photo.desc}</p>
                    <div className="flex items-center gap-1 mt-2 text-white/60">
                      <ExternalLink className="w-3 h-3" />
                      <span className="font-mono text-[10px]">View on Instagram</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEO REELS ===== */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="section-label mb-3">{t("work.reels.label")}</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              {t("work.reels.heading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {reels.map((reel, i) => (
              <motion.a
                key={i}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-[9/16]">
                  <img
                    src={reel.src}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                  <div className="font-mono text-[10px] text-white/60 uppercase tracking-wider mb-0.5">
                    {reel.brand}
                  </div>
                  <p className="font-display text-xs sm:text-sm font-semibold text-white leading-tight">
                    {reel.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
