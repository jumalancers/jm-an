import {
  Scale,
  Building2,
  BadgeCheck,
  FileSignature,
  Landmark,
  ArrowRight,
} from "lucide-react";
import useLanguage from "../hooks/useLanguage";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Scale,
      id: "litigio",
      title: t.services.titleA,
      intro: t.services.introA,
      points: t.services.pointsA,
      closing: t.services.closingA,
    },
    {
      icon: Building2,
      id: "corporativo",
      title: t.services.titleB,
      intro: t.services.introB,
      points: t.services.pointsB,
      closing: t.services.closingB,
    },
    {
      icon: BadgeCheck,
      id: "propiedad",
      title: t.services.titleC,
      intro: t.services.introC,
      points: t.services.pointsC,
      closing: t.services.closingC,
    },
    {
      icon: FileSignature,
      id: "contractual",
      title: t.services.titleD,
      intro: t.services.introD,
      points: t.services.pointsD,
      closing: t.services.closingD,
    },
    {
      icon: Landmark,
      id: "notarial",
      title: t.services.titleE,
      intro: t.services.introE,
      points: t.services.pointsE,
      closing: t.services.closingE,
    },
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="h-title text-3xl sm:text-4xl text-primary-900">
            {t.services.title}
          </h2>

          <p className="mt-4 t-body text-primary-900/75 text-[16px]">
            {t.services.desc}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                id={service.id}
                key={service.title}
                className="rounded-3xl bg-secondary-50 border border-primary-900/10 p-8
                           shadow-[0_12px_30px_rgba(0,0,0,0.05)]
                           hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                           transition duration-300"
              >
                <div className="grid items-center gap-3 grid-cols-[auto_1fr]">
                  <div className="h-12 w-12 rounded-2xl bg-primary-900 text-secondary-50 grid place-items-center">
                    <Icon size={22} />
                  </div>

                  <h3 className="t-body font-semibold text-primary-900 text-[18px] leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-5 t-body text-primary-900/75 text-[14px]">
                  {service.intro}
                </p>

                <ul className="mt-6 space-y-2 text-[14px] t-body text-primary-900/80">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[13px] text-primary-900/70 t-body italic">
                  {service.closing}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#consulta"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3
                       bg-accent-500 text-accent-50 font-semibold
                       hover:bg-accent-600 transition
                       shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
          >
            {t.services.cta}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
