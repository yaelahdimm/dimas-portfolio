/*
 * Design: Liquid Editorial — Marquee/Ticker
 * Infinite scrolling text ticker for skills/services.
 * Font: Space Grotesk display.
 */

const items = [
  "Content Strategy",
  "Meta Ads",
  "Visual Storytelling",
  "Brand Identity",
  "Social Media",
  "Video Editing",
  "Graphic Design",
  "Campaign Optimization",
  "Lead Generation",
  "Digital Marketing",
];

export default function Marquee() {
  const duplicated = [...items, ...items];

  return (
    <div className="py-6 overflow-hidden border-y border-border/50 bg-secondary/30">
      <div className="marquee-track flex gap-8 whitespace-nowrap">
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="font-display text-lg sm:text-xl font-semibold text-muted-foreground/40 flex items-center gap-8 shrink-0"
          >
            {item}
            <span className="text-primary/30 text-sm">&#9670;</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
