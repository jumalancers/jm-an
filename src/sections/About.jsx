import { GraduationCap, ShieldCheck, Target, Scale } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: "Estrategia antes que reacción",
      desc: "Prevenimos riesgos y, si hay conflicto, actuamos con un plan claro desde el primer día.",
    },
    {
      icon: ShieldCheck,
      title: "Protección de negocio y patrimonio",
      desc: "Cuidamos la operación, los acuerdos, la marca y la estructura legal que sostiene el crecimiento.",
    },
    {
      icon: Scale,
      title: "Certeza jurídica en cada decisión",
      desc: "Reducimos incertidumbre con documentación sólida, orden y ejecución legal coherente.",
    },
  ];

  const founders = [
    {
      name: "Julián Isaí Moya Gil",
      alias: "Julian M. Gil",
      role: "Socio fundador",
      detail:
        "Abogado egresado de la Facultad de Derecho UABC, Campus Tijuana.",
    },
    {
      name: "Ángel Alberto Nieves Manzo",
      alias: "Ángel Nieves",
      role: "Socio fundador",
      detail:
        "Abogado egresado de la Facultad de Derecho UABC, Campus Tijuana.",
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-900/10 bg-secondary-50 px-4 py-2 sm:py-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
            <span className="t-body text-[12px] text-primary-900/80">
              Sobre el despacho
            </span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-accent-500" />
            <span className="t-body text-[12px] text-primary-900/70">
              Historia, misión y enfoque
            </span>
          </div>

          <h2 className="mt-6 h-title text-3xl sm:text-4xl text-primary-900">
            Asesoría jurídica integral para negocios que están creciendo
          </h2>

          <p className="mt-4 t-body text-primary-900/75 text-[16px] leading-relaxed">
            JM & AN nace con una idea simple: que emprender y escalar no
            implique caminar a ciegas en lo legal. Acompañamos a nuestros
            clientes a proteger sus activos, consolidar sus empresas y tomar
            decisiones con seguridad jurídica.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-primary-900/10" />

        {/* Content grid */}
        <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Quote + pillars */}
          <div className="lg:col-span-7">
            {/* Quote card */}
            <div className="rounded-3xl border border-primary-900/10 bg-secondary-50 p-7 sm:p-8 shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
              <div className="t-body text-[13px] text-primary-900/60">
                Nuestra misión
              </div>
              <p className="mt-3 h-title text-primary-900 text-[22px] sm:text-[24px] leading-snug">
                “Proteger y pontenciar a emprendedores y empresas mediante
                soluciones legales integrales, con un enfoque estratégico en
                propiedad intelectual y derecho corporativo.”
              </p>

              <div className="mt-5 flex items-center gap-2 t-body text-[13px] text-primary-900/70">
                <GraduationCap size={16} className="text-primary-800" />
                Egresados de UABC, Campus Tijuana
              </div>
            </div>

            {/* Pillars */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-primary-900/10 bg-white p-5
                               shadow-[0_6px_18px_rgba(0,0,0,0.04)]"
                  >
                    <div className="h-10 w-10 rounded-2xl bg-primary-900 text-secondary-50 grid place-items-center">
                      <Icon size={18} />
                    </div>
                    <div className="mt-4 t-body font-semibold text-primary-900 text-[14px]">
                      {p.title}
                    </div>
                    <div className="mt-2 t-body text-[13px] text-muted leading-snug">
                      {p.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Founders */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-primary-900/10 bg-white p-7 sm:p-8 shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
              <div className="t-body text-[13px] text-primary-900/60">
                Fundadores
              </div>

              <div className="mt-5 space-y-4">
                {founders.map((f) => (
                  <div
                    key={f.name}
                    className="rounded-2xl border border-primary-900/10 bg-secondary-50 p-5"
                  >
                    <div className="t-body font-semibold text-primary-900 text-[15px] leading-snug">
                      {f.name}{" "}
                      <span className="font-normal text-primary-900/65">
                        ({f.alias})
                      </span>
                    </div>
                    <div className="mt-1 t-body text-[13px] text-primary-900/70">
                      {f.role}
                    </div>
                    <div className="mt-3 t-body text-[13px] text-muted leading-snug">
                      {f.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Small note */}
              <div className="mt-6 t-body text-[13px] text-primary-900/75 leading-relaxed">
                Trabajamos con una visión práctica: orden legal, documentación
                sólida y estrategia. Nuestro objetivo es que tu negocio avance
                con estructura y que, si hay conflicto, estés listo.
              </div>

              <a
                href="#consulta"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3
                           bg-accent-500 text-accent-50 font-semibold t-body
                           hover:bg-accent-600 transition
                           shadow-[0_8px_20px_rgba(0,0,0,0.08)] focus-ring"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
