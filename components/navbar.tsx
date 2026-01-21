"use client";

import { useState } from "react";
import { AlignJustify, X, Globe } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
// Locale-aware navigation utilities from next-intl
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { label: t("services"), href: "/services" },
    { label: t("projects"), href: "/projects" },
    { label: t("about"), href: "/about" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const switchLocale = (newLocale: string) => {
    // Use next-intl's router which handles locale switching automatically
    router.replace(pathname, { locale: newLocale });
    setIsLangOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-neutral-800/50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/logo/logo.png"
              alt="Lansor Agency Logo"
              width={40}
              height={40}
              className="w-10 h-10"
              priority
            />
            <span className="hidden sm:block text-lg font-semibold text-white">
              Lansor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-neutral-800"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{locale}</span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-xl">
                  <button
                    onClick={() => switchLocale("en")}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-neutral-800 transition-colors ${
                      locale === "en"
                        ? "text-primary bg-primary/10"
                        : "text-neutral-300"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLocale("ro")}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-neutral-800 transition-colors ${
                      locale === "ro"
                        ? "text-primary bg-primary/10"
                        : "text-neutral-300"
                    }`}
                  >
                    Română
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-full transition-all duration-300"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <AlignJustify className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-neutral-800">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-neutral-300 hover:text-white transition-colors text-lg font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex gap-2 py-2">
                <button
                  onClick={() => {
                    switchLocale("en");
                    closeMenu();
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    locale === "en"
                      ? "bg-primary text-white"
                      : "bg-neutral-800 text-neutral-300"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    switchLocale("ro");
                    closeMenu();
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    locale === "ro"
                      ? "bg-primary text-white"
                      : "bg-neutral-800 text-neutral-300"
                  }`}
                >
                  RO
                </button>
              </div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="block w-full text-center px-5 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300 mt-4"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
