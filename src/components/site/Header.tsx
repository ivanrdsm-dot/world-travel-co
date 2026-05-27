"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Trophy, Hotel, Plane, Car, Music, Ship, Sparkles, ChevronDown } from "lucide-react";
import { cn, waLink } from "@/lib/utils";

const experiences = [
  { href: "/experiencias/mundial-2026", label: "Mundial 2026",  desc: "Hospitality oficial FIFA", icon: Trophy },
  { href: "/experiencias/hoteles",       label: "Hoteles",        desc: "Alianza Grupo Posadas",     icon: Hotel },
  { href: "/experiencias/aviacion",      label: "Jets privados", desc: "8 categorías + helicópteros", icon: Plane },
  { href: "/experiencias/transporte",    label: "Transporte VIP", desc: "Maybach, Sprinter, Cullinan", icon: Car },
  { href: "/experiencias/conciertos",    label: "Conciertos",     desc: "Palcos y hospitality",       icon: Music },
  { href: "/experiencias/cruceros",      label: "Cruceros",       desc: "15 navieras del mundo",      icon: Ship },
  { href: "/arma-tu-viaje",              label: "Arma tu viaje",  desc: "Concierge 360°",             icon: Sparkles }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);   // mobile
  const [drop, setDrop]         = useState(false);   // desktop dropdown

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      {/* TOP BANNER · Mundial */}
      <Link href="/experiencias/mundial-2026"
            className="fixed top-0 inset-x-0 z-[60] bg-ink text-white text-xs lg:text-sm py-2 px-4 text-center hover:bg-ink-800 transition-colors">
        <span className="text-sun-300 font-semibold">⚽ FIFA World Cup 26™</span>
        <span className="opacity-80"> · 11 jun – 19 jul · </span>
        <span className="underline underline-offset-2">Reserva hospitality oficial →</span>
      </Link>

      <header
        className={cn(
          "fixed top-9 inset-x-0 z-50 transition-all",
          scrolled ? "bg-bone/85 backdrop-blur-md border-b border-ink/5" : "bg-transparent"
        )}
      >
        <div className="container-x flex h-16 lg:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/brand/isotipo-primario.png" alt="WTC" width={36} height={36} className="h-9 w-9 object-contain" />
            <span className="font-sans text-lg lg:text-[19px] font-extrabold tracking-tight">
              world travel<span className="text-sun">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <div
              className="relative"
              onMouseEnter={() => setDrop(true)}
              onMouseLeave={() => setDrop(false)}
            >
              <button className="text-sm font-medium text-ink-700 hover:text-ink transition-colors inline-flex items-center gap-1">
                Experiencias <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {drop && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <div className="w-[640px] rounded-3xl bg-white shadow-soft border border-ink/5 p-3 grid grid-cols-2 gap-1">
                    {experiences.map(e => (
                      <Link key={e.href} href={e.href}
                            onClick={() => setDrop(false)}
                            className="flex items-start gap-3 p-3 rounded-2xl hover:bg-bone transition-colors">
                        <span className="h-10 w-10 rounded-xl bg-sun-100 text-sun-700 grid place-items-center shrink-0">
                          <e.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-semibold text-sm">{e.label}</p>
                          <p className="text-xs text-ink-500">{e.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/paquetes" className="text-sm font-medium text-ink-700 hover:text-ink">Paquetes</Link>
            <Link href="/blog"     className="text-sm font-medium text-ink-700 hover:text-ink">Guías</Link>
            <Link href="/contacto" className="text-sm font-medium text-ink-700 hover:text-ink">Contacto</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/arma-tu-viaje" className="btn-ghost text-xs">Arma tu viaje</Link>
            <a href={waLink("Hola WTC, quiero cotizar un viaje.")}
               target="_blank" rel="noreferrer" className="btn-primary text-xs">
              Cotizar WhatsApp
            </a>
          </div>

          <button aria-label="Menú"
                  className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-ink/10"
                  onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] bg-bone lg:hidden overflow-y-auto">
          <div className="container-x flex h-16 items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
              <Image src="/brand/isotipo-primario.png" alt="WTC" width={36} height={36} />
              <span className="font-sans text-lg font-extrabold tracking-tight">world travel<span className="text-sun">.</span></span>
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Cerrar"
                    className="h-10 w-10 grid place-items-center rounded-full border border-ink/10">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="container-x pt-8 pb-16">
            <p className="text-xs uppercase tracking-widest text-ink-500 mb-4">Experiencias 360°</p>
            <div className="grid gap-2">
              {experiences.map(e => (
                <Link key={e.href} href={e.href} onClick={() => setOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-ink/5">
                  <span className="h-10 w-10 rounded-xl bg-sun-100 text-sun-700 grid place-items-center">
                    <e.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">{e.label}</p>
                    <p className="text-xs text-ink-500">{e.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-ink/10 grid gap-2">
              <Link href="/paquetes" onClick={() => setOpen(false)} className="font-display text-3xl">Paquetes</Link>
              <Link href="/blog"     onClick={() => setOpen(false)} className="font-display text-3xl">Guías</Link>
              <Link href="/contacto" onClick={() => setOpen(false)} className="font-display text-3xl">Contacto</Link>
            </div>
            <a href={waLink("Hola WTC, quiero cotizar un viaje.")}
               target="_blank" rel="noreferrer"
               className="btn-primary mt-8 w-full justify-center"
               onClick={() => setOpen(false)}>
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
