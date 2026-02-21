import useLanguage from "../hooks/useLanguage";

const logos = [
  { src: "/Logos/empresa1.gif", alt: "Empresa 1" },
  { src: "/Logos/empresa2.gif", alt: "Empresa 2" },
  { src: "/Logos/empresa3.gif", alt: "Empresa 3" },
  { src: "/Logos/empresa4.gif", alt: "Empresa 4" },
  { src: "/Logos/empresa5.jpg", alt: "Empresa 5" },
  { src: "/Logos/empresa6.gif", alt: "Empresa 6" },
  { src: "/Logos/empresa7.gif", alt: "Empresa 7" },
  { src: "/Logos/empresa8.svg", alt: "Empresa 8" },
  { src: "/Logos/empresa9.gif", alt: "Empresa 9" },
  { src: "/Logos/empresa10.jpg", alt: "Empresa 10" },
  { src: "/Logos/empresa11.gif", alt: "Empresa 11" },
  { src: "/Logos/empresa12.GIF", alt: "Empresa 12" },
  { src: "/Logos/empresa13.gif", alt: "Empresa 13" },
  { src: "/Logos/empresa14.gif", alt: "Empresa 14" },
  { src: "/Logos/empresa15.png", alt: "Empresa 15" },
  { src: "/Logos/empresa16.gif", alt: "Empresa 16" },
  { src: "/Logos/empresa17.gif", alt: "Empresa 17" },
  { src: "/Logos/empresa18.gif", alt: "Empresa 18" },
  { src: "/Logos/empresa19.gif", alt: "Empresa 19" },
  { src: "/Logos/empresa20.gif", alt: "Empresa 20" },
  { src: "/Logos/empresa21.jpg", alt: "Empresa 21" },
];

function MarqueeRow({ items, reverse = false, duration = 28 }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className={[
          "flex w-max items-center gap-10 sm:gap-14 lg:gap-16",
          "animate-marquee",
          reverse ? "animate-marquee-reverse" : "",
          "hover:[animation-play-state:paused]",
        ].join(" ")}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((logo, idx) => (
          <div
            key={`${logo.src}-${idx}`}
            className="flex items-center justify-center"
          >
            <div
              className={[
                "h-18 sm:h-24 lg:h-24",
                "px-4 sm:px-6",
                "grid place-items-center",
              ].join(" ")}
              title={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-18 sm:h-24 lg:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>

      {/* fades laterales (premium) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-linear-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-linear-to-l from-bg to-transparent" />
    </div>
  );
}

export default function TestimonialsLogos() {
  const { t } = useLanguage();
  
  return (
    <section id="clientes" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="h-title text-3xl sm:text-4xl text-primary-900">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 t-body text-primary-900/75 text-[16px]">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Rows */}
        <div className="mt-20 space-y-10">
          <MarqueeRow items={logos} duration={40} />
          <MarqueeRow items={logos} reverse duration={44} />
        </div>
      </div>

      {/* CSS de animación */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-marquee-reverse {
          animation-name: marqueeReverse;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
}
