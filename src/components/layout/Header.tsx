"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#inicio" className="flex items-center" aria-label="Ir al inicio">
        <Logo variant="light" />
      </a>

      <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#contacto" className="hidden rounded-full bg-ember px-5 py-3 text-sm font-black text-white transition hover:bg-flame lg:inline-flex">
        Hablar con un experto
      </a>

      <button
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
        type="button"
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
      >
        <Menu size={22} />
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="flex items-center justify-between">
          <Logo variant="light" />
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white"
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
        </div>
        <div className="mt-12 grid gap-5">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-2xl font-black text-white">
              {item.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-ember px-6 py-4 text-center font-black text-white">
            Hablar con un experto
          </a>
        </div>
      </div>
    </header>
  );
}
