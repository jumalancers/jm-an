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
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const areasRef = useRef(null);

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const areas = [
    {
      label: "Litigio Civil, Mercantil y Administrativo",
      description:
        "Defensa estratégica en juicios civiles, mercantiles y contra actos de autoridad.",
      href: "#litigio",
      icon: Gavel,
    },
    {
      label: "Derecho Corporativo",
      description:
        "Estructuración y reorganización legal de empresas con visión de crecimiento.",
      href: "#corporativo",
      icon: Building2,
    },
    {
      label: "Propiedad Intelectual",
      description:
        "Registro y defensa de marcas, activos intangibles y protección de branding.",
      href: "#propiedad",
      icon: BadgeCheck,
    },
    {
      label: "Derecho Contractual",
      description:
        "Redacción y revisión estratégica de contratos civiles y mercantiles.",
      href: "#contractual",
      icon: FileSignature,
    },
    {
      label: "Gestión Notarial",
      description:
        "Coordinación y formalización de actos jurídicos con certeza legal.",
      href: "#notarial",
      icon: Landmark,
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-primary-900/10 bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO */}
            <a href="#inicio" className="flex items-center">
              <img
                src="/logo.png"
                alt="Despacho Jurídico"
                className="h-26 w-auto object-contain"
              />
            </a>

            {/* DESKTOP */}
            <div className="hidden lg:flex items-center gap-8 t-body text-[14px]">
              <a
                href="#inicio"
                className="text-primary-900 hover:text-primary-900 transition-colors t-body font-semibold"
              >
                Inicio
              </a>

              {/* DROPDOWN AREAS */}
              <div className="relative" ref={areasRef}>
                <button
                  onClick={() => setAreasOpen((v) => !v)}
                  className="inline-flex items-center gap-2 text-primary-900 hover:text-primary-900 transition-colors t-body font-semibold"
                >
                  <Scale size={18} />
                  Áreas
                  <ChevronDown size={14} />
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
                className="text-primary-900 hover:text-primary-900 transition-colors t-body font-semibold"
              >
                Sobre el despacho
              </a>

              <a
                href="#consulta"
                className="text-primary-900 hover:text-primary-900 transition-colors t-body font-semibold"
              >
                Contacto
              </a>
            </div>

            {/* CTA DESKTOP */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5216632044384&text=%F0%9F%92%A1Hola%2C%20me%20interesa%20conocer%20sobre%20sus%20servicios%20legales%20"
                className="flex items-center gap-2 text-[13px] text-primary-900/80 hover:text-primary-900 transition-colors font-semibold t-body"
                target="_blanck"
              >
                <Phone size={15} />
                +52 166 320 44384
              </a>

              <a
                href="#consulta"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[14px] font-semibold
                           bg-accent-500 text-accent-50 hover:bg-accent-600 transition
                           shadow-[var(--shadow-soft)] focus-ring t-body"
              >
                <CalendarDays size={16} />
                Agendar consulta
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-primary-900/15 bg-secondary-50"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
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
            {" "}
            <div className="mt-3 rounded-2xl border border-primary-900/10 bg-secondary-50 shadow-[var(--shadow-card)] p-3 space-y-2">
              <a
                href="#inicio"
                className="block px-3 py-2 rounded-xl font-semibold text-primary-900 hover:bg-secondary-200/60"
              >
                Inicio
              </a>

              <div className="rounded-xl overflow-hidden">
                {/* Trigger */}
                <button
                  onClick={() => setMobileAreasOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-secondary-200/60 transition"
                >
                  <span className="font-semibold text-primary-900">Áreas</span>

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
                className="block px-3 py-2 rounded-xl font-semibold text-primary-900 hover:bg-secondary-200/60"
              >
                Sobre el despacho
              </a>

              <a
                href="#consulta"
                className="block px-3 py-2 rounded-xl font-semibold text-primary-900 hover:bg-secondary-200/60"
              >
                Contacto
              </a>

              <a
                href="#consulta"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold
                           bg-accent-500 text-accent-50 hover:bg-accent-600 transition
                           shadow-[var(--shadow-soft)] focus-ring"
              >
                <CalendarDays size={16} />
                Agendar consulta
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
