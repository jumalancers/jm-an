import { GraduationCap, ShieldCheck, Target, Scale } from "lucide-react";
import useLanguage from "../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Target,
      title: t.about.pillarsTitleA,
      desc: t.about.pillarsDescA,
    },
    {
      icon: ShieldCheck,
      title: t.about.pillarsTitleB,
      desc: t.about.pillarsDescB,
    },
    {
      icon: Scale,
      title: t.about.pillarsTitleC,
      desc: t.about.pillarsDescC,
    },
  ];

  const founders = [
    {
      name: t.about.nameA,
      alias: t.about.aliasA,
      role: t.about.roleA,
      detail: t.about.detailA,
    },
    {
      name: t.about.nameB,
      alias: t.about.aliasB,
      role: t.about.roleB,
      detail: t.about.detailB,
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-900/10 bg-secondary-50 px-4 py-2 sm:py-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
            <span className="t-body text-[12px] text-primary-900/80">
              {t.about.badgeA}
            </span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-accent-500" />
            <span className="t-body text-[12px] text-primary-900/70">
              {t.about.badgeB}
            </span>
          </div>

          <h2 className="mt-6 h-title text-3xl sm:text-4xl text-primary-900">
            {t.about.title}
          </h2>

          <p className="mt-4 t-body text-primary-900/75 text-[16px] leading-relaxed">
            {t.about.desc1}&reg;
            {t.about.desc2}
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
                {t.about.quoteBadge}
              </div>
              <p className="mt-3 h-title text-primary-900 text-[22px] sm:text-[24px] leading-snug">
                {t.about.quoteBadgeDesc}
              </p>

              <div className="mt-5 flex items-center gap-2 t-body text-[13px] text-primary-900/70">
                <GraduationCap size={16} className="text-primary-800" />
                {t.about.quoteBadgeExtra}
              </div>
            </div>

            {/* Pillars */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-primary-900/10 bg-secondary-50 p-5
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
            <div className="rounded-3xl border border-primary-900/10 bg-secondary-50 p-7 sm:p-8 shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
              <div className="t-body text-[13px] text-primary-900/60">
                {t.about.foundersBadge}
              </div>

              <div className="mt-5 space-y-4">
                {founders.map((f) => (
                  <div
                    key={f.name}
                    className="rounded-2xl border border-primary-900/10 bg-secondary-100 p-5"
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
                {t.about.foundersNote}
              </div>

              <a
                href="#consulta"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3
                           bg-accent-500 text-accent-50 font-semibold t-body
                           hover:bg-accent-600 transition
                           shadow-[0_8px_20px_rgba(0,0,0,0.08)] focus-ring"
              >
                {t.about.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
