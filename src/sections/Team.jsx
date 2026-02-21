import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export default function Team() {
  const [openId, setOpenId] = useState(null);

  const team = [
    {
      id: "julian",
      name: "Julián Isaí Moya Gil",
      title: "Socio fundador | Litigio y Estrategia",
      bio: "Enfoque en litigio civil, mercantil y administrativo con visión estratégica. Acompaña a empresas en escenarios de conflicto, recuperación y defensa, priorizando evidencia, táctica y estructura.",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "angel",
      name: "Ángel Alberto Nieves Manzo",
      title: "Socio fundador | Corporativo y Contratos",
      bio: "Especializado en estructuración corporativa y documentación legal para empresas en crecimiento. Trabaja con constitución, poderes, actas y contratos para reducir riesgo y dar certeza a cada decisión.",
      photo:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "asociado1",
      name: "Asociado(a) Legal",
      title: "Propiedad Intelectual",
      bio: "Apoya el registro, seguimiento y defensa de marcas. Integra estrategias de protección para branding y activos intangibles, alineando lo legal con la expansión comercial.",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "asociado2",
      name: "Asociado(a) Legal",
      title: "Gestión Notarial y Documental",
      bio: "Coordina procesos notariales y regularización documental. Acompaña operaciones que requieren formalidad, revisando requisitos y cuidando que todo quede jurídicamente blindado antes de firmar.",
      photo:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="equipo" className="py-16 sm:py-20 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-900/10 bg-secondary-50 px-4 py-2 sm:py-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
            <span className="t-body text-[12px] text-primary-900/80">
              El equipo
            </span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-accent-500" />
            <span className="t-body text-[12px] text-primary-900/70">
              Experiencia + enfoque de negocio
            </span>
          </div>

          <h2 className="mt-6 h-title text-3xl sm:text-4xl text-primary-900">
            Personas reales, estrategia real
          </h2>

          <p className="mt-4 t-body text-primary-900/75 text-[16px] leading-relaxed">
            Conoce a quienes te acompañan en cada etapa: desde estructurar tu empresa
            hasta defenderla cuando importa.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => {
            const isOpen = openId === person.id;

            return (
              <article
                key={person.id}
                className={[
                  "group relative rounded-3xl overflow-hidden",
                  "border border-primary-900/10 bg-white",
                  "shadow-[0_10px_28px_rgba(0,0,0,0.05)]",
                ].join(" ")}
              >
                {/* Click layer */}
                <button
                  type="button"
                  onClick={() => toggle(person.id)}
                  className="relative block w-full text-left"
                  aria-expanded={isOpen}
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-130 w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />

                    {/* Overlay gradient bottom for readability */}
                    <div className="pointer-events-none absolute inset-0 bg-lineal-to-t from-black/25 via-black/0 to-black/0" />

                    {/* Arrow button */}
                    <div className="absolute bottom-4 right-4">
                      <div
                        className={[
                          "h-11 w-11 rounded-3xl grid place-items-center",
                          "border border-white/20 bg-black/20 backdrop-blur",
                          "text-secondary-50",
                          "transition",
                          isOpen ? "rotate-90" : "group-hover:rotate-12",
                        ].join(" ")}
                        title={isOpen ? "Cerrar" : "Ver bio"}
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Slide-up panel */}
                  <div
                    className={[
                      "absolute left-0 right-0 bottom-0",
                      "bg-secondary-50/95 backdrop-blur",
                      "border-t border-primary-900/10",
                      "transition-transform duration-300",
                      isOpen ? "translate-y-0" : "translate-y-full",
                    ].join(" ")}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="t-body font-semibold text-primary-900 text-[15px] leading-snug">
                            {person.name}
                          </div>
                          <div className="mt-1 t-body text-[13px] text-primary-900/70">
                            {person.title}
                          </div>
                        </div>

                        <div className="shrink-0">
                          <div className="h-9 w-9 rounded-xl border border-primary-900/10 bg-white grid place-items-center text-primary-900/70">
                            <X size={16} />
                          </div>
                        </div>
                      </div>

                      <p className="mt-3 t-body text-[13px] text-muted leading-relaxed">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}