/*
 * Design: Liquid Editorial — Footer
 * Minimal footer with copyright and back-to-top.
 * Font: JetBrains Mono for footer text.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-sm">
            dimas<span className="text-primary">.</span>
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Dimas Stya Nugraha. {t("footer.rights")}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-muted-foreground">
            {t("footer.built")}
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
