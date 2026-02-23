import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  CalendarDays,
  Scale,
  Gavel,
  Building2,
  BadgeCheck,
  FileSignature,
  Landmark,
  Sun,
  Moon,
} from "lucide-react";

import useTheme from "../hooks/useTheme";
import useLanguage from "../hooks/useLanguage";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const areasRef = useRef(null);

  const { theme, toggleTheme } = useTheme();
  const { lang, changeLanguage, t } = useLanguage();

  // Close dropdown outside click + ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (areasRef.current && !areasRef.current.contains(e.target)) {
        setAreasOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setAreasOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileOpen]);

  const areas = [
    {
      label: t.areas.litigation.title,
      description: t.areas.litigation.desc,
      href: "#litigio",
      icon: Gavel,
    },
    {
      label: t.areas.corporate.title,
      description: t.areas.corporate.desc,
      href: "#corporativo",
      icon: Building2,
    },
    {
      label: t.areas.ip.title,
      description: t.areas.ip.desc,
      href: "#propiedad",
      icon: BadgeCheck,
    },
    {
      label: t.areas.contracts.title,
      description: t.areas.contracts.desc,
      href: "#contractual",
      icon: FileSignature,
    },
    {
      label: t.areas.notarial.title,
      description: t.areas.notarial.desc,
      href: "#notarial",
      icon: Landmark,
    },
  ];

  const toggleLang = () => changeLanguage(lang === "es" ? "en" : "es");

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-primary-900/10 bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO */}
            <a href="#inicio" className="flex items-center">
              <img
                src="/logo.png"
                alt="JM & AN"
                className="h-24 w-auto object-contain" /* <- h-26 no existe */
              />
            </a>

            {/* DESKTOP */}
            <div className="hidden lg:flex items-end gap-8 t-body text-[14px]">
              <a
                href="#inicio"
                className="text-primary-900 hover:text-primary-900 transition-colors font-semibold"
              >
                {t.nav.home}
              </a>

              {/* DROPDOWN AREAS */}
              <div className="relative" ref={areasRef}>
                <button
                  onClick={() => setAreasOpen((v) => !v)}
                  className="flex items-center text-primary-900 hover:text-primary-900 transition-colors font-semibold"
                  aria-expanded={areasOpen}
                  aria-haspopup="menu"
                >
                  <Scale size={18} className="mr-2" />
                  {t.nav.areas}
                  <ChevronDown size={14} className="ml-2" />
                </button>

                <div
                  className={`absolute left-0 mt-4 w-80 rounded-2xl border border-primary-900/10 bg-secondary-50 shadow-[var(--shadow-card)] p-2 ${
                    areasOpen ? "block" : "hidden"
                  }`}
                >
                  {areas.map((area) => {
                    const Icon = area.icon;

                    return (
                      <a
                        key={area.href}
                        href={area.href}
                        onClick={() => setAreasOpen(false)}
                        className="flex gap-3 rounded-xl p-3 hover:bg-secondary-200/60 transition"
                      >
                        <div className="mt-1 text-primary-800">
                          <Icon size={20} />
                        </div>

                        <div>
                          <div className="font-semibold text-primary-900">
                            {area.label}
                          </div>
                          <div className="text-[13px] text-muted leading-snug">
                            {area.description}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <a
                href="#sobre"
                className="text-primary-900 hover:text-primary-900 transition-colors font-semibold"
              >
                {t.nav.about}
              </a>

              <a
                href="#consulta"
                className="text-primary-900 hover:text-primary-900 transition-colors font-semibold"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* CTA DESKTOP */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language (flags) */}
              <button
                type="button"
                onClick={toggleLang}
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-secondary-100 transition"
                aria-label={lang === "es" ? t.nav.langToEN : t.nav.langToES}
                title={lang === "es" ? t.nav.langToEN : t.nav.langToES}
              >
                {lang === "es" ? (
                  <span className="fi fi-us"></span>
                ) : (
                  <span className="fi fi-mx"></span>
                )}
              </button>

              {/* Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-secondary-100 transition"
                aria-label={theme === "dark" ? t.nav.light : t.nav.dark}
                title={theme === "dark" ? t.nav.light : t.nav.dark}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="https://api.whatsapp.com/send?phone=5216632044384&text=%F0%9F%92%A1Hola%2C%20me%20interesa%20conocer%20sobre%20sus%20servicios%20legales%20"
                className="flex items-center gap-2 text-[13px] text-primary-900/80 hover:text-primary-900 transition-colors font-semibold t-body"
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={15} />
                +52 663 204 4384
              </a>

              <a
                href="#consulta"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[14px] font-semibold
                           bg-accent-500 text-accent-50 hover:bg-accent-600 transition
                           shadow-[var(--shadow-soft)] focus-ring t-body"
              >
                <CalendarDays size={16} />
                {t.nav.schedule}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center">
                {/* Language (flags) */}
                <button
                  type="button"
                  onClick={toggleLang}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 hover:bg-secondary-100 font-semibold transition"
                  aria-label={lang === "es" ? t.nav.langToEN : t.nav.langToES}
                >
                  {lang === "es" ? (
                    <span className="fi fi-us"></span>
                  ) : (
                    <span className="fi fi-mx"></span>
                  )}
                </button>

                {/* Theme */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 hover:bg-secondary-100 font-semibold transition"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-primary-900/15 bg-secondary-50"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`
              ${mobileOpen ? "block" : "hidden"}
              lg:hidden
              max-h-[calc(100vh-120px)]
              overflow-y-auto
              pb-6
            `}
          >
            <div className="mt-3 rounded-2xl border border-primary-900/10 bg-secondary-50 shadow-[var(--shadow-card)] p-3 space-y-2">
              <a
                href="#inicio"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-xl font-semibold text-primary-900 hover:bg-secondary-200/60"
              >
                {t.nav.home}
              </a>

              <div className="rounded-xl overflow-hidden">
                {/* Trigger */}
                <button
                  onClick={() => setMobileAreasOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-secondary-200/60 transition"
                >
                  <span className="font-semibold text-primary-900">
                    {t.nav.areas}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileAreasOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    mobileAreasOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-2 space-y-2 px-1 pb-2">
                      {areas.map((area) => {
                        const Icon = area.icon;

                        return (
                          <a
                            key={area.href}
                            href={area.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileAreasOpen(false);
                            }}
                            className="flex items-start gap-3 rounded-xl p-3 hover:bg-secondary-200/60 transition"
                          >
                            <Icon size={18} className="mt-1 text-primary-800" />
                            <div>
                              <div className="font-semibold text-primary-900">
                                {area.label}
                              </div>
                              <div className="text-[13px] text-muted leading-snug">
                                {area.description}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#sobre"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-xl font-semibold text-primary-900 hover:bg-secondary-200/60"
              >
                {t.nav.about}
              </a>

              <a
                href="#consulta"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-xl font-semibold text-primary-900 hover:bg-secondary-200/60"
              >
                {t.nav.contact}
              </a>

              <a
                href="#consulta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold
                           bg-accent-500 text-accent-50 hover:bg-accent-600 transition
                           shadow-[var(--shadow-soft)] focus-ring"
              >
                <CalendarDays size={16} />
                {t.nav.schedule}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
