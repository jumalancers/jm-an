import {
  Handshake,
  ClipboardCheck,
  BadgePercent,
  ShieldCheck,
  ArrowRight,
  FileText,
} from "lucide-react";
import useLanguage from "../hooks/useLanguage";

export default function AliadosSection() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t.aliados.stepstitleA,
      desc: t.aliados.stepsdescA,
      icon: ClipboardCheck,
    },
    {
      title: t.aliados.stepstitleB,
      desc: t.aliados.stepsdescB,
      icon: Handshake,
    },
    {
      title: t.aliados.stepstitleC,
      desc: t.aliados.stepsdescC,
      icon: ShieldCheck,
    },
    {
      title: t.aliados.stepstitleD,
      desc: t.aliados.stepsdescD,
      icon: BadgePercent,
    },
  ];

  return (
    <section id="aliados" className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-900/10 bg-secondary-50 px-4 py-1.5">
              <span className="t-body text-[12px] text-primary-900/80">
                {t.aliados.badgeA}
              </span>
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              <span className="t-body text-[12px] text-primary-900/70">
                {t.aliados.badgeB}
              </span>
            </div>

            <h2 className="mt-6 h-title text-3xl sm:text-4xl text-primary-900 leading-tight">
              {t.aliados.titleA}{" "}
              <span className="text-accent-600 text-important">
                {t.aliados.titleB}
              </span>
            </h2>

            <p className="mt-4 t-body text-[15px] sm:text-[16px] text-primary-900/80 leading-relaxed max-w-2xl">
              {t.aliados.desc}
            </p>

            {/* Bullet list */}
            <ul className="mt-6 space-y-3">
              {t.aliados.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-500 shrink-0" />
                  <span className="t-body text-[14px] text-primary-900/80">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right card */}
          <div className="lg:col-span-5">
            <div
              className="
                rounded-3xl border border-primary-900/10 bg-secondary-50 p-6 sm:p-7
                shadow-[var(--shadow-soft)]
              "
            >
              <div className="grid items-start gap-3 grid-cols-[auto_1fr]">
                <div className="grid place-items-center h-11 w-11 rounded-2xl bg-primary-900 text-secondary-50">
                  <Handshake size={20} />
                </div>
                <div>
                  <div className="t-body font-semibold text-primary-900">
                    {t.aliados.ideal}
                  </div>
                  <p className="mt-1 t-body text-[14px] text-primary-900/75 leading-relaxed">
                    {t.aliados.idealDesc}
                  </p>
                </div>
              </div>

              <div className="mt-6 h-px bg-primary-900/10" />

              <div className="mt-6">
                <div className="t-body text-[13px] text-primary-900/70">
                    {t.aliados.comision}
                </div>
                <div className="mt-1 h-title text-2xl text-primary-900">
                  10% – 15%
                </div>
                <div className="mt-2 t-body text-[13px] text-primary-900/70 leading-relaxed">
                    {t.aliados.comisionDesc}
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#consulta"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3
                             bg-accent-500 text-accent-50 hover:bg-accent-600 transition
                             shadow-[0_8px_20px_rgba(0,0,0,0.06)] focus-ring t-body font-semibold text-[14px]"
                >
                    {t.aliados.cta}
                    <ArrowRight size={16} />
                </a>

                <a
                  href="/Aliados.pdf"
                  target="_blanck"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3
                             border border-primary-900/15 bg-bg hover:bg-secondary-100 transition
                             focus-ring t-body font-semibold text-[14px] text-primary-900"
                >
                  <FileText size={16} />
                  {t.aliados.terms}
                </a>
              </div>

              <p className="mt-4 t-body text-[12px] text-primary-900/60 leading-relaxed">
                {t.aliados.note}
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-14 sm:mt-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="t-body text-[13px] text-primary-900/70">
                {t.aliados.how}
              </div>
              <h3 className="mt-1 h-title text-2xl text-primary-900">
                {t.aliados.howHighlight}
              </h3>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-3xl border border-primary-900/10 bg-secondary-50 p-5
                             shadow-[0_8px_18px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-10 w-10 rounded-2xl bg-primary-900 text-secondary-50">
                      <Icon size={18} />
                    </div>
                    <div className="t-body font-semibold text-primary-900">
                      {s.title}
                    </div>
                  </div>
                  <p className="mt-3 t-body text-[13px] text-primary-900/75 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Fine print row */}
          <div className="mt-8 rounded-3xl border border-primary-900/10 bg-secondary-50 p-6">
            <div className="grid gap-4 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="t-body font-semibold text-primary-900">
                    {t.aliados.printTitle}
                </div>
                <p className="mt-1 t-body text-[14px] text-primary-900/75 leading-relaxed">
                    {t.aliados.printDesc}
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="/Aliados.pdf"
                  target="_blanck"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3
                             border border-primary-900/15 bg-bg hover:bg-secondary-100 transition
                             focus-ring t-body font-semibold text-[14px] text-primary-900 w-full lg:w-auto"
                >
                    {t.aliados.terms}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
