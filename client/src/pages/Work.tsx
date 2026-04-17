/*
 * Work Page — Brand-Focused Editorial Layout
 * Each project organized as a complete section with narrative, visuals, and achievements.
 * Design: Article-style storytelling with integrated media.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Instagram, Play, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    id: "pt-din",
    brand: "PT DIN",
    role: "Digital Marketing Staff",
    period: "September 2025 - March 2026",
    location: "Jakarta, Indonesia",
    color: "from-blue-500/20 to-cyan-500/20",
    narrative: `PT DIN, a dynamic Jakarta-based company, faced a critical challenge in their digital advertising strategy: their Cost Per Click (CPC) was hovering at $3, making their lead generation campaigns unsustainable and inefficient. The goal was clear—optimize campaigns to reduce CPC below $1 while maintaining lead quality.

I took ownership of their Meta Ads strategy from day one. Working with their Facebook and Instagram ad accounts, I conducted a comprehensive analysis of all active campaigns using Meta Ads Manager. I identified underperforming ad sets, audience segments with high costs, and creative variations that weren't resonating.

The optimization process involved multiple layers of strategy: A/B testing on audience targeting to find high-intent prospects, creative testing to improve engagement rates, and strategic bidding adjustments. I refined landing page experiences to improve conversion rates, which directly improved Quality Scores in Meta's algorithm. Budget allocation was carefully adjusted to prioritize top-performing ad sets while pausing or restructuring underperformers.

Within four weeks, the results were measurable and significant. CPC dropped from $3.00 to $0.89—a 67% reduction. But the impact went beyond the metric itself: lead volume increased by 3.5x, meaning the company could generate substantially more qualified leads at a fraction of the previous cost. This transformation made their digital marketing budget work harder and smarter.`,
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
    instagramLink: "https://www.instagram.com/pt.din/",
  },
  {
    id: "kokyo",
    brand: "Kokyo Coffee",
    role: "Digital Marketing & Content Creator",
    period: "May 2025 - August 2025",
    location: "Pangandaran, Indonesia",
    color: "from-amber-500/20 to-orange-500/20",
    narrative: `Kokyo Coffee, a specialty coffee shop in Pangandaran, had a vision to become more than just a cafe—they wanted to build a community. When I joined as Digital Marketing & Content Creator, the challenge was to launch their brand into the digital space with authenticity and visual storytelling that would resonate with both locals and visitors.

Starting from scratch, I developed a comprehensive digital marketing strategy focused on three pillars: awareness through consistent visual content, engagement through community interaction, and sales through targeted promotions. The strategy wasn't about aggressive selling—it was about inviting people into the Kokyo experience.

I managed their social media brand accounts with meticulous content planning. Every post was intentional: showcasing the latte art process, capturing the ambiance of the cafe, highlighting the products, and telling stories of the Kokyo experience. I produced high-quality visual content including feed posts, carousel collections, and video reels that emphasized the craft and care behind every cup.

Beyond organic content, I designed promotional materials—posters, banners, and digital campaign assets—that maintained visual consistency. I ran targeted Meta Ads campaigns to drive both online engagement and foot traffic to the physical location, optimizing for both awareness and conversions.

The collaborative spirit was essential. I worked closely with the Kokyo team on promotional events and seasonal campaigns, ensuring that every marketing initiative aligned with the brand's values and community-first approach. The result was a thriving online presence that translated into a loyal community of customers who didn't just visit Kokyo—they became part of it.`,
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
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/kokyo-1-RWVdogU4TpTmnLiz5P7Kmf.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/kokyo-3-4zgtsa6Xse4zZCkFC3XH8P.webp",
    ],
    instagramLink: "https://www.instagram.com/kokyo.coffee/",
  },
  {
    id: "krisna",
    brand: "Krisna Beach Hotel",
    role: "Digital Marketing & Content Creator",
    period: "July 2024 - May 2025",
    location: "Pangandaran, Indonesia",
    color: "from-teal-500/20 to-blue-500/20",
    narrative: `Krisna Beach Hotel, a tropical resort in Pangandaran, needed a digital presence that captured the essence of their offering: luxury, relaxation, and unforgettable experiences by the beach. My role as Digital Marketing & Content Creator was to translate that vision into compelling digital content and strategic campaigns.

I started by developing a comprehensive hotel digital marketing strategy that recognized the seasonal nature of the hospitality business. High season and low season require different approaches, different messaging, and different promotional tactics. I created daily content plans that adapted to these rhythms while maintaining consistent brand identity.

The visual content production was central to the strategy. I designed and produced consistent, high-quality visual content for Instagram and Facebook—feed posts that showcased rooms and amenities, reels that captured the guest experience (sunset views, pool activities, dining moments), and stories that created a sense of immediacy and exclusivity. Every piece of content was crafted to inspire bookings.

Beyond digital, I created offline promotional materials—flyers, posters, banners, and backdrops—that extended the brand presence into physical spaces. These materials supported promotional events and seasonal campaigns designed to drive occupancy during both peak and slower periods.

The work involved analyzing content performance and engagement metrics to understand what resonated with the audience. This data-driven approach informed ongoing content refinement and campaign optimization. I promoted hotel events through effective visual storytelling, ensuring that special occasions and seasonal packages received the attention they deserved.

The result was a cohesive digital and physical presence that elevated Krisna Beach Hotel's visibility and appeal, driving consistent bookings throughout the year.`,
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
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/krisna-1-LR8oRDbZnU3UhuwUQyw4Ld.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663565070617/6UrdsYvWgvxtjH3oZEHsTo/krisna-3-4n9ww3ttwr7Cpyv9SLjViM.webp",
    ],
    instagramLink: "https://www.instagram.com/krisnabeachhotel/",
  },
];

const reels = {
  kokyo: [
    { id: "kokyo-1", title: "Latte Art Process", brand: "Kokyo Coffee" },
    { id: "kokyo-2", title: "Cafe Experience", brand: "Kokyo Coffee" },
  ],
  krisna: [
    { id: "krisna-1", title: "Sunrise Balcony View", brand: "Krisna Beach Hotel" },
    { id: "krisna-2", title: "Pool Party Vibes", brand: "Krisna Beach Hotel" },
    { id: "krisna-3", title: "Beachfront Dinner", brand: "Krisna Beach Hotel" },
  ],
};

export default function Work() {
  const { t } = useLanguage();

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
      {projects.map((project, projectIndex) => (
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

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start mb-12">
              {/* Left: Narrative */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {project.narrative.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Right: Key Info & Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-1"
              >
                {/* Metrics */}
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

                {/* Tools */}
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

                {/* Instagram Link */}
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
            </div>

            {/* Key Activities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
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

            {/* Visual Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-display text-xl font-bold mb-6">Visual Work</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {project.images.map((image, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-xl">
                    <div className="aspect-[4/3]">
                      <img
                        src={image}
                        alt={`${project.brand} visual content`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                ))}
              </div>

              {/* Video Reels */}
              {(project.id === "kokyo" || project.id === "krisna") && (
                <div>
                  <h4 className="font-body text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Video Reels</h4>
                  <div className={`grid gap-4 ${project.id === "kokyo" ? "grid-cols-2" : "grid-cols-3"}`}>
                    {(project.id === "kokyo" ? reels.kokyo : reels.krisna).map((reel) => (
                      <motion.button
                        key={reel.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden rounded-lg bg-secondary/50 aspect-[9/16] flex items-center justify-center cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-primary/50"
                        onClick={() => {
                          // Placeholder for video link - to be added later
                          console.log(`Video clicked: ${reel.id}`);
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p className="font-display text-xs sm:text-sm font-semibold text-white leading-tight">
                            {reel.title}
                          </p>
                          <p className="font-mono text-[10px] text-white/60 mt-1">{reel.brand}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
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
