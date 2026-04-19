/*
 * Work Page — Brand-Focused Editorial Layout
 * Each project organized as a complete section with narrative, visuals, and achievements.
 * Design: Article-style storytelling with integrated media.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Play, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const projects = [
  {
    id: "pt-din",
    brand: "PT DIN",
    role: "Digital Marketing Staff",
    period: "September 2025 - March 2026",
    location: "Jakarta, Indonesia",
    color: "from-blue-500/20 to-cyan-500/20",
    narrativeKey: "projects.ptdin.narrative",
    metrics: [
      { label: "CPC Reduction", value: "67%", detail: "$3.00 → $0.89" },
      { label: "Lead Volume Increase", value: "3.5x", detail: "While maintaining quality" },
      { label: "Timeline", value: "4 weeks", detail: "From analysis to optimization" },
    ],
    keyActivities: [
      "Managed and ran digital ad campaigns using Meta Ads (Facebook & Instagram)",
      "Developed campaign strategy and determined target audience segments",
      "Performed CPC optimization through A/B testing and creative refinement",
      "Monitored and analyzed ad performance using CPC, CTR, and conversion metrics",
      "Optimized targeting, creative variations, and budget allocation",
      "Managed company social media accounts and supported digital content creation",
    ],
    tools: ["Meta Ads Manager", "Campaign Optimization", "A/B Testing", "Audience Targeting", "Budget Management"],
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/hero-blue-JD8yEEkvYqxjJoHXcbh76q.webp",
    ],
  },
  {
    id: "kokyo",
    brand: "Kokyo Coffee",
    role: "Digital Marketing & Content Creator",
    period: "May 2025 - August 2025",
    location: "Pangandaran, Indonesia",
    color: "from-amber-500/20 to-orange-500/20",
    narrativeKey: "projects.kokyo.narrative",
    metrics: [
      { label: "Brand Launch", value: "Zero to Community", detail: "Established engaged following" },
      { label: "Content Strategy", value: "Consistent Daily", detail: "Visual storytelling focus" },
      { label: "Community Impact", value: "High", detail: "Became gathering spot" },
    ],
    keyActivities: [
      "Developed digital marketing strategy and content planning for awareness, engagement, and sales",
      "Managed social media brand accounts with strategic content planning and visual production",
      "Ran and optimized Meta Ads campaigns to achieve target KPI and ROI",
      "Designed promotional materials including posters, banners, and digital campaign content",
      "Collaborated with team on promotional events, seasonal campaigns, and branding activities",
      "Produced high-quality visual content including reels, carousel posts, and stories",
    ],
    tools: ["Content Strategy", "Visual Storytelling", "Meta Ads", "Graphic Design", "Community Management", "Video Editing"],
    images: [
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419547/project-kokyo-3_q0olhx.png",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419547/project-kokyo-1_bj4f2t.png",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419546/project-kokyo-6_xzqcg5.png",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419546/project-kokyo-2_dxq7mp.png",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419546/project-kokyo-4_shcnqa.png",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419544/project-kokyo-5_mjx7ww.jpg",
    ],
    instagramLink: "https://www.instagram.com/kokyo.co/",
    videos: [
      { id: "kokyo-1", title: "Latte Art Process", thumbnail: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419546/video-kokyo-1.jpg" },
      { id: "kokyo-2", title: "Cafe Experience", thumbnail: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419546/video-kokyo-2.jpg" },
    ],
  },
  {
    id: "krisna",
    brand: "Krisna Beach Hotel",
    role: "Digital Marketing & Content Creator",
    period: "July 2024 - May 2025",
    location: "Pangandaran, Indonesia",
    color: "from-teal-500/20 to-blue-500/20",
    narrativeKey: "projects.krisna.narrative",
    metrics: [
      { label: "Content Production", value: "Consistent", detail: "Feed, reels, stories daily" },
      { label: "Seasonal Campaigns", value: "High & Low Season", detail: "Optimized for occupancy" },
      { label: "Booking Impact", value: "Improved", detail: "Year-round occupancy" },
    ],
    keyActivities: [
      "Developed hotel digital marketing strategy and daily content plans",
      "Designed and produced consistent visual content on Instagram and Facebook",
      "Created feed posts, reels, and stories showcasing rooms, amenities, and experiences",
      "Created offline promotional materials (flyers, posters, banners, backdrops)",
      "Executed seasonal campaigns (high/low season) to increase hotel occupancy",
      "Promoted hotel events through effective visual storytelling",
      "Analyzed content performance and engagement metrics for optimization",
    ],
    tools: ["Content Strategy", "Visual Storytelling", "Seasonal Campaigns", "Meta Ads", "Graphic Design", "Analytics"],
    images: [
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419662/project-krisna-6_cf7bvk.jpg",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419662/project-krisna-5_nmz8ak.jpg",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419661/project-krisna-4_dbwqhh.jpg",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419661/project-krisna-3_edwtbr.jpg",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419661/project-krisna-2_qd228m.jpg",
      "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419660/project-krisna-1_qu1rwg.jpg",
    ],
    instagramLink: "https://www.instagram.com/krisnabeachhotel/",
    videos: [
      { id: "krisna-1", title: "Sunrise Balcony View", thumbnail: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419660/video-krisna-1.jpg" },
      { id: "krisna-2", title: "Pool Party Vibes", thumbnail: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419660/video-krisna-2.jpg" },
      { id: "krisna-3", title: "Beachfront Dinner", thumbnail: "https://res.cloudinary.com/djqh6g7bm/image/upload/v1776419660/video-krisna-3.jpg" },
    ],
  },
];

interface SliderProps {
  images: string[];
  videos?: { id: string; title: string; thumbnail: string }[];
  instagramLink: string;
}

interface ProjectData {
  id: string;
  brand: string;
  role: string;
  period: string;
  location: string;
  color: string;
  narrativeKey: string;
  metrics: { label: string; value: string; detail: string }[];
  keyActivities: string[];
  tools: string[];
  images: string[];
  instagramLink?: string;
  videos?: { id: string; title: string; thumbnail: string }[];
}

function ImageSlider({ images, videos = [], instagramLink }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allSlides = [...images, ...videos.map(v => v.thumbnail)];
  const totalSlides = allSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const isVideo = (index: number) => index >= images.length;

  return (
    <div className="relative w-full max-w-[360px] mx-auto lg:mx-0 lg:ml-6">
      <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-secondary/50">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {allSlides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {isVideo(index) && (
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {allSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="py-16 lg:py-24 border-b border-border/30">
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
            <p className="font-body text-lg text-muted-foreground max-w-3xl leading-relaxed">
              A collection of strategic digital marketing projects where I combined content strategy, visual storytelling, and data-driven optimization to build brands and drive measurable business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== PROJECT SECTIONS ===== */}
      {projects.map((project) => (
        <section key={project.id} className="py-24 lg:py-32 border-b border-border/30 last:border-b-0">
          <div className="container">
            {/* Project Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12 lg:mb-16"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{project.brand}</h2>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {project.period}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="font-body">{project.role}</span>
                <span>•</span>
                <span className="font-body">{project.location}</span>
              </div>
            </motion.div>

            {(project.id === "kokyo" || project.id === "krisna") && (
              <>
                {/* ROW 1: Slider + Intro */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
                  {/* Left: Slider */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full flex justify-center lg:justify-start lg:pl-4"
                  >
                    <ImageSlider
                      images={project.images}
                      videos={project.videos}
                      instagramLink={project.instagramLink || ""}
                    />
                  </motion.div>

                  {/* Right: Intro */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full max-w-[620px]"
                  >
                    <div className="prose prose-sm dark:prose-invert">
                      {(project as ProjectData).narrativeKey && t((project as ProjectData).narrativeKey).split("\n\n").slice(0, 2).map((paragraph, i) => (
                        <p key={i} className="font-body text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0 text-justify">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* ROW 2: Metrics + Main Story */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                  {/* Left: Metrics */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col w-full max-w-[480px]"
                  >
                    <div className={`bg-gradient-to-br ${project.color} rounded-xl p-6 mb-6 border border-border/30`}>
                      <div className="font-mono text-xs text-primary uppercase tracking-wider mb-4">Key Metrics</div>
                      <div className="space-y-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="pb-4 border-b border-border/20 last:pb-0 last:border-b-0">
                            <div className="font-display text-2xl font-bold mb-1">{metric.value}</div>
                            <div className="font-body text-xs font-medium mb-1">{metric.label}</div>
                            <div className="font-body text-xs text-muted-foreground">{metric.detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">Tools & Skills</div>
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

                    <a
                      href={project.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-body text-sm font-medium"
                    >
                      View on Instagram
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>

                  {/* Right: Main Story */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full max-w-[620px]"
                  >
                    <div className="prose prose-sm dark:prose-invert">
                      {(project as ProjectData).narrativeKey && t((project as ProjectData).narrativeKey).split("\n\n").slice(2).map((paragraph, i) => (
                        <p key={i} className="font-body text-base text-muted-foreground leading-relaxed mb-6 last:mb-0 text-justify">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </>
            )}

            {project.id === "pt-din" && (
              <>
                {/* PT DIN: Text-focused case study */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2"
                  >
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      {(project as ProjectData).narrativeKey && t((project as ProjectData).narrativeKey).split("\n\n").map((paragraph, i) => (
                        <p key={i} className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0 text-justify">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-1"
                  >
                    <div className={`bg-gradient-to-br ${project.color} rounded-xl p-6 mb-6 border border-border/30`}>
                      <div className="font-mono text-xs text-primary uppercase tracking-wider mb-4">Key Metrics</div>
                      <div className="space-y-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="pb-4 border-b border-border/20 last:pb-0 last:border-b-0">
                            <div className="font-display text-2xl font-bold mb-1">{metric.value}</div>
                            <div className="font-body text-xs font-medium mb-1">{metric.label}</div>
                            <div className="font-body text-xs text-muted-foreground">{metric.detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">Tools & Skills</div>
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
                  </motion.div>
                </div>
              </>
            )}

            {/* ROW 3: Key Activities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h3 className="font-display text-xl font-bold mb-6">Key Activities & Responsibilities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyActivities.map((activity, i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ===== CTA ===== */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Ready to collaborate?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm available for full-time, freelance, and project-based opportunities. Let's discuss how I can help your brand grow.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
