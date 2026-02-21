import {
  ArrowRight,
  Phone,
  CalendarDays,
  ShieldCheck,
  Scale,
  Building2,
  BadgeCheck,
  FileSignature,
} from "lucide-react";

export default function Hero() {
  const points = [
    {
      icon: BadgeCheck,
      title: "Marca protegida",
      desc: "Registro y defensa ante IMPI.",
    },
    {
      icon: FileSignature,
      title: "Contratos claros",
      desc: "NDA, servicios, licencias y acuerdos.",
    },
    {
      icon: Building2,
      title: "Estructura corporativa",
      desc: "Sociedades, actas y poderes listos para crecer.",
    },
    {
      icon: Scale,
      title: "Litigio estratégico",
      desc: "Cobranza, socios y actos de autoridad.",
    },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6">
            {/* Top badge */}
            <div
              className="
              hidden sm:inline-flex
  flex-col sm:flex-row
  items-start sm:items-center
  gap-1 sm:gap-2
  rounded-2xl
  border border-primary-900/10
  bg-secondary-50
  px-4 py-2
  sm:px-4 sm:py-1.5
  max-w-fit
  shadow-[0_4px_14px_rgba(0,0,0,0.05)]
"
            >
              <span className="t-body text-[11px] sm:text-[12px] text-primary-900/80 leading-snug">
                Para emprendedores y empresas en crecimiento
              </span>

              {/* Separador solo en sm+ */}
              <span className="hidden sm:inline h-1 w-1 rounded-full bg-accent-500" />

              <span className="t-body text-[11px] sm:text-[12px] text-primary-900/70 leading-snug">
                Prevención + defensa
              </span>
            </div>

            <h1 className="mt-6 sm:mt-7 h-title text-primary-900 text-[34px] leading-[1.08] sm:text-5xl sm:leading-[1.05]">
              Crece con{" "}
              <span className="text-accent-600 text-important">
                estructura legal
              </span>{" "}
              y respalda cada decisión.
            </h1>

            <p className="mt-4 sm:mt-5 t-body text-[15px] sm:text-[17px] text-primary-900/80 max-w-xl">
              Armamos la base legal para que tu negocio avance con orden: marca,
              contratos y estructura corporativa. Y si hay conflicto, litigamos
              con estrategia para proteger tu patrimonio y tu operación.
            </p>

            {/* CTA */}
            <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:flex sm:flex-row gap-3">
              <a
                href="#consulta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 t-body text-[15px] font-semibold
                           bg-accent-500 text-accent-50 hover:bg-accent-600 transition
                           shadow-[0_8px_20px_rgba(0,0,0,0.08)] focus-ring"
              >
                <CalendarDays size={18} />
                Agendar consulta
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+520000000000"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 t-body text-[15px] font-semibold
                           border border-primary-900/15 bg-secondary-50
                           hover:bg-secondary-100 transition
                           shadow-[0_6px_16px_rgba(0,0,0,0.06)] focus-ring"
              >
                <Phone size={18} />
                Llamar
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 t-body text-[13px] text-primary-900/70">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary-800" />
                Atención confidencial
              </span>
              <span className="hidden sm:inline h-1 w-1 rounded-full bg-primary-900/25" />
              <span className="inline-flex items-center gap-2">
                <Scale size={16} className="text-primary-800" />
                Estrategia procesal integral
              </span>
              <span className="hidden sm:inline h-1 w-1 rounded-full bg-primary-900/25" />
              <span className="inline-flex items-center gap-2">
                <Building2 size={16} className="text-primary-800" />
                Enfoque de negocio
              </span>
            </div>

            {/* Small separator detail */}
            <div className="mt-7 sm:mt-8 h-px w-full bg-primary-900/10" />

            {/* Mini points */}
            <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-primary-900/10 bg-secondary-50 p-4
                               shadow-[0_6px_18px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid place-items-center h-9 w-9 rounded-xl bg-primary-900 text-secondary-50 shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="t-body font-semibold text-primary-900 text-[14px]">
                          {p.title}
                        </div>
                        <div className="t-body text-[12px] text-muted leading-snug">
                          {p.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-black/25 z-10" />

                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Reunión corporativa"
                  className="w-full object-cover h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px]"
                  loading="lazy"
                />
              </div>

              {/* Small corner badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1 backdrop-blur">
                  <ShieldCheck size={16} className="text-secondary-50" />
                  <span className="t-body text-[12px] text-secondary-50/90">
                    Asesoría confidencial
                  </span>
                </div>
              </div>

              {/* Under image micro-note */}
              <div className="mt-3 sm:mt-4 flex justify-start sm:justify-end">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary-900/10 bg-secondary-50 px-3 py-1 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                  <span className="t-body text-[12px] text-primary-900/70">
                    Estructura, cumplimiento y defensa
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
