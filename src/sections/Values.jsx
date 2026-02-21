import { Shield, Scale, Lightbulb, Users, Award } from "lucide-react";

export default function Values() {
  const values = [
    {
      icon: Shield,
      title: "Protección",
      desc: "Blindamos lo que construyes.",
    },
    {
      icon: Scale,
      title: "Integridad",
      desc: "Ética en cada decisión.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      desc: "Soluciones creativas y actuales.",
    },
    {
      icon: Users,
      title: "Cercanía",
      desc: "Lenguaje claro y trato humano.",
    },
    {
      icon: Award,
      title: "Excelencia",
      desc: "Calidad en cada servicio.",
    },
  ];

  return (
    <section id="valores" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-900/10 bg-white px-4 py-2 sm:py-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.05)]">
            <span className="t-body text-[12px] text-primary-900/80">
              Valores
            </span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-accent-500" />
            <span className="t-body text-[12px] text-primary-900/70">
              Principios que nos definen
            </span>
          </div>

          <h2 className="mt-6 h-title text-3xl sm:text-4xl text-primary-900">
            Lo que guía cada decisión
          </h2>

          <p className="mt-4 t-body text-primary-900/75 text-[16px] leading-relaxed">
            Nuestro trabajo no solo se basa en conocimiento jurídico,
            sino en principios firmes que sostienen cada asesoría,
            cada contrato y cada estrategia.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="flex items-center rounded-3xl border border-primary-900/10 bg-white p-7
                           shadow-[0_10px_28px_rgba(0,0,0,0.05)]
                           hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]
                           transition"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary-900 text-secondary-50 grid place-items-center">
                  <Icon size={22} />
                </div>

                <div className="ml-4">
                  <h3 className="h-title text-primary-900 text-[20px]">
                    {value.title}
                  </h3>
                  <p className="mt-2 t-body text-primary-900/75 text-[14px] leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}