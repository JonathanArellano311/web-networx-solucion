import { company, navigation, solutionAreas } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
            Empresa tecnológica integral para infraestructura, software y automatización.
          </p>
          <p className="mt-6 text-sm font-bold text-white/75">{company.tagline}</p>
        </div>
        <div>
          <h3 className="footer-title">Navegación</h3>
          {navigation.slice(0, 6).map((item) => (
            <a key={item.href} href={item.href} className="footer-link">
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h3 className="footer-title">Servicios</h3>
          {solutionAreas.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="footer-link">
              {item.kicker}
            </a>
          ))}
          <a href="/privacy" className="footer-link">Política de privacidad</a>
          <a href="/terms" className="footer-link">Términos y condiciones</a>
        </div>
        <div>
          <h3 className="footer-title">Contacto</h3>
          <p className="footer-copy">{company.email}</p>
          <p className="footer-copy">{company.phone}</p>
          <p className="footer-copy">{company.address}</p>
          <div className="mt-5 flex gap-3">
            <a href={company.socials.instagram} className="footer-pill">Instagram</a>
            <a href={company.socials.linkedin} className="footer-pill">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/45">
        © 2026 NetworX Solutions. Todos los derechos reservados.
      </div>
    </footer>
  );
}
