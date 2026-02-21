import {
  Scale,
  Building2,
  BadgeCheck,
  FileSignature,
  Landmark,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: "Litigio Civil, Mercantil y Administrativo",
      intro:
        "Cuando hay que defender, defendemos con estrategia.",
      points: [
        "Juicios civiles y mercantiles",
        "Recuperación de cartera",
        "Conflictos entre socios",
        "Defensa contra actos administrativos",
        "Estrategia procesal integral",
      ],
      closing:
        "No improvisamos litigios. Construimos defensas sólidas desde el primer día.",
    },
    {
      icon: Building2,
      title: "Derecho Corporativo",
      intro:
        "Tu empresa debe estar bien estructurada antes de crecer.",
      points: [
        "Constitución de sociedades",
        "Fusiones y escisiones",
        "Reformas estatutarias",
        "Otorgamiento y revocación de poderes",
        "Actas de asamblea",
        "Cumplimiento normativo",
      ],
      closing:
        "Un negocio mal estructurado es un riesgo innecesario.",
    },
    {
      icon: BadgeCheck,
      title: "Propiedad Intelectual",
      intro:
        "Tu marca es tu activo más valioso. Protégelo.",
      points: [
        "Registro de marcas ante IMPI",
        "Contestación de impedimentos",
        "Declaraciones de uso y renovaciones",
        "Defensa administrativa",
        "Estrategias de protección de branding",
      ],
      closing:
        "Sin protección, tu marca está expuesta.",
    },
    {
      icon: FileSignature,
      title: "Derecho Contractual",
      intro:
        "Un buen contrato evita un mal juicio.",
      points: [
        "Contratos civiles y mercantiles",
        "Contratos de prestación de servicios",
        "NDA y confidencialidad",
        "Licencias de marca",
        "Contratos societarios y comerciales",
      ],
      closing:
        "Cada cláusula importa. Cada palabra protege.",
    },
    {
      icon: Landmark,
      title: "Gestión Notarial",
      intro:
        "Formalidad y certeza legal en cada operación.",
      points: [
        "Testamentos",
        "Compraventas",
        "Donaciones",
        "Protocolización de sentencias",
        "Regularización documental",
      ],
      closing:
        "Nos aseguramos de que todo esté jurídicamente blindado antes de firmar.",
    },
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="h-title text-3xl sm:text-4xl text-primary-900">
            Servicios legales para proteger y hacer crecer tu negocio
          </h2>

          <p className="mt-4 t-body text-primary-900/75 text-[16px]">
            En JM & AN no solo resolvemos problemas legales.
            Diseñamos estrategias para que tu negocio crezca con seguridad,
            estructura y protección.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl bg-white border border-primary-900/10 p-8
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
            Solicitar asesoría estratégica
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}