import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import useLanguage from "../hooks/useLanguage";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer
      className="
        bg-[var(--color-footer-bg)] text-[var(--color-footer-text)]
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center">
              <img
                src="/logo.png"
                alt="Despacho Jurídico"
                className="h-24 w-auto object-contain"
              />
            </a>

            <p className="mt-4 t-body text-[14px] leading-relaxed text-[var(--color-footer-muted)]">
              {t.footer.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/jmyan_abogados"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-10 w-10 rounded-xl flex items-center justify-center
                  border border-[var(--color-footer-border)]
                  bg-white/5
                  hover:bg-accent-500 hover:text-white transition
                "
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61561466949460&ref=NONE_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-10 w-10 rounded-xl flex items-center justify-center
                  border border-[var(--color-footer-border)]
                  bg-white/5
                  hover:bg-accent-500 hover:text-white transition
                "
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <div className="t-body font-semibold text-[14px] mb-4">
              {t.footer.navigation}
            </div>
            <ul className="space-y-3 t-body text-[14px] text-[var(--color-footer-muted)]">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-accent-400 transition"
                >
                  {t.footer.servicios}
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-accent-400 transition">
                  {t.footer.sobre}
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-accent-400 transition">
                  {t.footer.equipo}
                </a>
              </li>
              <li>
                <a href="#valores" className="hover:text-accent-400 transition">
                  {t.footer.valores}
                </a>
              </li>
              <li>
                <a
                  href="#consulta"
                  className="hover:text-accent-400 transition"
                >
                  {t.footer.contacto}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="t-body font-semibold text-[14px] mb-4">
              {t.footer.contacto}
            </div>
            <ul className="space-y-4 t-body text-[14px] text-[var(--color-footer-muted)]">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent-400" />
                <a
                  href="tel:+526632044384"
                  className="hover:text-accent-400 transition"
                >
                  +52 663 204 4384
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent-400" />
                <a
                  href="mailto:contacto@jmyanabogados.com"
                  className="hover:text-accent-400 transition"
                >
                  contacto@jmyanabogados.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="t-body font-semibold text-[14px] mb-4">
              {t.footer.legal}
            </div>
            <ul className="space-y-3 t-body text-[14px] text-[var(--color-footer-muted)]">
              <li>
                <a
                  href="/AvisoDePrivacidad.pdf"
                  className="hover:text-accent-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-[var(--color-footer-border)]" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] t-body text-[var(--color-footer-muted)]">
          <div>© {year} JM & AN. {t.footer.rights}</div>

          <p className="text-[13px] flex items-center gap-1">
            {t.footer.madeBy}
            <a
              href="https://jumalancers.com/"
              target="_blank"
              rel="noreferrer"
              className="relative font-semibold text-accent-400 transition-colors hover:text-accent-300
                         after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                         after:bg-accent-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Jumalancers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
