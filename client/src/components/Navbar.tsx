/*
 * Design: Liquid Glass — Premium Multi-page Navbar
 * Sticky glass morphism nav with smooth page transitions.
 * Font: Space Grotesk for nav links.
 * Colors: pastel blue accent, glass background.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const handleToggleTheme = () => toggleTheme?.();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/profile", label: t("nav.profile") },
    { href: "/work", label: t("nav.work") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-xl tracking-tight hover:opacity-70 transition-opacity duration-300"
          >
            dimas<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-display text-sm font-medium transition-colors duration-300 group"
              >
                <span className={`relative z-10 ${
                  location === link.href
                    ? "text-primary"
                    : "text-foreground/70 group-hover:text-foreground"
                }`}>
                  {link.label}
                </span>
                {location === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-subtle text-xs font-mono font-medium hover:scale-105 transition-all duration-300"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {lang.toUpperCase()}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={handleToggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-subtle text-xs font-mono font-medium hover:scale-105 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1.5"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-3.5 h-3.5" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5" />
                      <span>Dark</span>
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display text-3xl font-bold transition-colors duration-300 ${
                      location === link.href
                        ? "text-primary"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="flex items-center gap-3 mt-4"
              >
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full glass-subtle text-sm font-mono font-medium"
                  aria-label="Toggle language"
                >
                  <Globe className="w-4 h-4" />
                  {lang.toUpperCase()}
                </button>
                <button
                  onClick={handleToggleTheme}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full glass-subtle text-sm font-mono font-medium"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <><Sun className="w-4 h-4" /><span>Light</span></>
                  ) : (
                    <><Moon className="w-4 h-4" /><span>Dark</span></>
                  )}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
