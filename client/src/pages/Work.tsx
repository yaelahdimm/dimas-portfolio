/*
 * Work Page — Full Showcase with Case Studies
 * Photo grid + Video reels + Project case studies with goals and achievements.
 * Design: Liquid Glass, pastel blue palette.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Instagram, Play, ExternalLink, TrendingDown, Users, Zap } from "lucide-react";
import { Link } from "wouter";

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

const caseStudies = [
  {
    id: "pt-din",
    company: "PT DIN",
    role: "Digital Marketing Staff",
    period: "September 2025 - March 2026",
    goal: "Reduce Cost Per Click (CPC) from $3 to under $1 within one month through strategic optimization",
    approach: [
      "Analyzed campaign performance across all ad sets using Meta Ads Manager",
      "Implemented A/B testing on audience targeting, ad creatives, and bidding strategies",
      "Optimized landing pages for better conversion rates to improve quality score",
      "Refined audience segmentation to target high-intent prospects",
      "Adjusted budget allocation to top-performing ad sets",
    ],
    result: {
      metric: "CPC Reduced by 67%",
      achievement: "Successfully decreased Cost Per Click from $3.00 to $0.89 in 4 weeks",
      impact: "Increased lead volume by 3.5x while maintaining quality standards",
    },
    tools: ["Meta Ads", "CPC Optimization", "Campaign Analysis", "A/B Testing"],
    link: "https://www.instagram.com/pt.din/",
  },
  {
    id: "kokyo",
    company: "Kokyo Coffee",
    role: "Digital Marketing & Content Creator",
    period: "May 2025 - August 2025",
    goal: "Build brand awareness from zero and establish community engagement through authentic storytelling",
    approach: [
      "Developed comprehensive content strategy focused on visual storytelling",
      "Created consistent daily content showcasing cafe ambiance, products, and customer stories",
      "Produced high-quality reels and carousel posts highlighting the coffee experience",
      "Collaborated with local community for user-generated content campaigns",
      "Ran targeted Meta Ads to drive foot traffic and online engagement",
    ],
    result: {
      metric: "Community-Driven Growth",
      achievement: "Successfully launched brand from zero to engaged community of followers",
      impact: "Increased brand awareness, drove consistent foot traffic, and established Kokyo as a community gathering spot",
    },
    tools: ["Content Strategy", "Visual Storytelling", "Meta Ads", "Video Editing", "Community Management"],
    link: "https://www.instagram.com/kokyo.coffee/",
  },
  {
    id: "krisna",
    company: "Krisna Beach Hotel",
    role: "Digital Marketing & Content Creator",
    period: "July 2024 - May 2025",
    goal: "Increase hotel occupancy during peak and low seasons through seasonal campaigns and visual content",
    approach: [
      "Developed seasonal marketing strategies aligned with high and low season patterns",
      "Produced premium visual content showcasing rooms, amenities, and guest experiences",
      "Created engaging reels featuring sunset views, pool activities, and dining experiences",
      "Executed targeted campaigns promoting special events and seasonal packages",
      "Analyzed content performance to optimize future campaign strategies",
    ],
    result: {
      metric: "Occupancy Rate Improvement",
      achievement: "Increased hotel bookings through effective visual storytelling and seasonal campaigns",
      impact: "Drove consistent occupancy during both peak and low seasons, improved booking conversion rates",
    },
    tools: ["Content Creation", "Visual Storytelling", "Seasonal Campaigns", "Meta Ads", "Analytics"],
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
              A curated collection of projects where I combined strategy, creativity, and data-driven optimization to deliver measurable results for brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="section-label mb-3">CASE STUDIES</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Projects with Impact
            </h2>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Left: Company Info */}
                  <div className="lg:col-span-1">
                    <div className="mb-6">
                      <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
                        {study.company}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mb-3">
                        {study.role}
                      </p>
                      <p className="font-mono text-xs text-primary/70 uppercase tracking-wider">
                        {study.period}
                      </p>
                    </div>

                    {/* Goal Box */}
                    <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/10">
                      <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2">Goal</div>
                      <p className="font-body text-sm font-medium leading-snug">
                        {study.goal}
                      </p>
                    </div>

                    {/* Tools */}
                    <div>
                      <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
                        Tools & Skills
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 glass-subtle rounded-full font-mono text-xs font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Approach */}
                  <div className="lg:col-span-1">
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
                      Approach
                    </div>
                    <ul className="space-y-3">
                      {study.approach.map((point, j) => (
                        <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Results */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 h-full flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-xs text-primary uppercase tracking-wider mb-3">
                          Result
                        </div>
                        <div className="mb-6">
                          <div className="font-display text-2xl lg:text-3xl font-bold text-primary mb-2">
                            {study.result.metric}
                          </div>
                          <p className="font-body text-sm font-medium mb-4">
                            {study.result.achievement}
                          </p>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            <strong>Impact:</strong> {study.result.impact}
                          </p>
                        </div>
                      </div>

                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-body text-sm font-medium"
                      >
                        View on Instagram
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHOTO GRID ===== */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="section-label mb-3">VISUAL CONTENT</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Photo Storytelling
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
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="section-label mb-3">VIDEO CONTENT</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Reels & Motion
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

      {/* ===== CTA ===== */}
      <section className="py-16 lg:py-24">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-lg text-muted-foreground mb-6">
              Interested in collaborating on your next project?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
