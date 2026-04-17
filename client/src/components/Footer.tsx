/*
 * Footer — Minimal, elegant multi-page nav.
 * Design: Liquid Glass, pastel blue palette.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-12 lg:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-display font-bold text-xl tracking-tight hover:opacity-70 transition-opacity">
              dimas<span className="text-primary">.</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground">
              {t("footer.built")}
            </p>
          </div>

          {/* Center — Nav */}
          <nav className="flex items-center gap-6">
            {[
              { href: "/", label: t("nav.home") },
              { href: "/profile", label: t("nav.profile") },
              { href: "/work", label: t("nav.work") },
              { href: "/contact", label: t("nav.contact") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — Back to top + Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-4 py-2 glass-subtle rounded-full text-xs font-mono font-medium hover:scale-105 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Top
            </button>
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Dimas Stya Nugraha. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
