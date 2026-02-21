import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-secondary-50">
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
            <p className="t-body text-secondary-50/80 text-[14px] leading-relaxed">
              Asesoría jurídica integral para emprendedores y empresas en
              crecimiento. Estructura, protección y defensa estratégica.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/jmyan_abogados"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-secondary-50/10 flex items-center justify-center
               hover:bg-accent-500 hover:text-white transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61561466949460&ref=NONE_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-secondary-50/10 flex items-center justify-center
               hover:bg-accent-500 hover:text-white transition"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <div className="t-body font-semibold text-[14px] mb-4">
              Navegación
            </div>
            <ul className="space-y-3 t-body text-[14px] text-secondary-50/80">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-accent-400 transition"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-accent-400 transition">
                  Sobre el despacho
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-accent-400 transition">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#valores" className="hover:text-accent-400 transition">
                  Valores
                </a>
              </li>
              <li>
                <a
                  href="#consulta"
                  className="hover:text-accent-400 transition"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="t-body font-semibold text-[14px] mb-4">
              Contacto
            </div>
            <ul className="space-y-4 t-body text-[14px] text-secondary-50/80">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent-400" />
                <a
                  href="tel:+5216632044384"
                  className="hover:text-accent-400 transition"
                >
                  +52 166 320 44384
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent-400" />
                <a
                  href="mailto:contacto@jman.com"
                  className="hover:text-accent-400 transition"
                >
                  contacto@jman.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="t-body font-semibold text-[14px] mb-4">
              Información legal
            </div>
            <ul className="space-y-3 t-body text-[14px] text-secondary-50/80">
              <li>
                <a
                  href="/aviso-de-privacidad"
                  className="hover:text-accent-400 transition"
                >
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/terminos-y-condiciones"
                  className="hover:text-accent-400 transition"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-secondary-50/20" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-secondary-50/60 t-body">
          <div>© {year} JM & AN. Todos los derechos reservados.</div>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made by
            <a
              href="https://jumalancers.com/"
              target="_blank"
              className="relative font-semibold text-blue-400 transition-all duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Jumalancers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
