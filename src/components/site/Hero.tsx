import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Ship, Plane } from "lucide-react";
import { waLink } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden hero-radial pt-36 lg:pt-44 pb-20 lg:pb-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-end">
          {/* Left */}
          <div>
            <p className="eyebrow text-sun-700">Concierge 360° de lujo · México</p>
            <h1 className="mt-6 font-display text-display-2xl text-ink-900">
              Hoteles. Jets. Cruceros. Conciertos. Mundial.
              <span className="italic text-sun"> Una sola agencia</span>.
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-ink-600 max-w-xl leading-relaxed">
              World Travel Co. opera el concierge 360° más completo de México:
              hoteles 5★ con alianza Fiesta Americana, jets privados, transporte
              VIP, hospitality oficial del Mundial 2026, palcos para conciertos
              y experiencias hechas a medida.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/arma-tu-viaje" className="btn-dark">
                Arma tu viaje 360° <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/experiencias/mundial-2026" className="btn-ghost">
                Mundial 2026 hospitality
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <dt className="text-xs uppercase tracking-widest text-ink-500">Paquetes activos</dt>
                <dd className="font-display text-3xl lg:text-4xl mt-1">+14</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-ink-500">Destinos</dt>
                <dd className="font-display text-3xl lg:text-4xl mt-1">5 continentes</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-ink-500">Asesoría</dt>
                <dd className="font-display text-3xl lg:text-4xl mt-1">24/7</dd>
              </div>
            </dl>
          </div>

          {/* Right — collage */}
          <div className="relative h-[520px] lg:h-[640px]">
            <div className="absolute right-0 top-0 w-[78%] h-[55%] rounded-[2rem] overflow-hidden shadow-soft">
              <Image src="/paquetes/japon-samurai.jpg" alt="Japón" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <p className="text-xs uppercase tracking-widest opacity-80">Asia</p>
                <p className="font-display text-2xl">Japón</p>
              </div>
            </div>
            <div className="absolute left-0 bottom-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden shadow-soft animate-floaty">
              <Image src="/paquetes/royal-caribbean.jpg" alt="Bahamas" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <p className="text-xs uppercase tracking-widest opacity-80">Caribe</p>
                <p className="font-display text-2xl">Bahamas</p>
              </div>
            </div>
            <div className="absolute right-0 bottom-2 w-[42%] h-[36%] rounded-[2rem] overflow-hidden shadow-soft">
              <Image src="/paquetes/magia-italiana.jpg" alt="Italia" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <p className="text-xs uppercase tracking-widest opacity-80">Europa</p>
                <p className="font-display text-2xl">Italia</p>
              </div>
            </div>
            {/* badge */}
            <div className="absolute -left-3 top-6 hidden lg:flex items-center gap-3 rounded-full bg-white shadow-soft px-4 py-3 text-sm">
              <span className="h-9 w-9 rounded-full bg-sun text-white grid place-items-center">
                <Compass className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="font-semibold">Asesoría 1 a 1</p>
                <p className="text-xs text-ink-500">Sin chatbots</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick categories strip */}
      <div className="container-x mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: Ship,  label: "Cruceros · 15 navieras",   href: "/experiencias/cruceros" },
            { icon: Plane, label: "Jets privados",             href: "/experiencias/aviacion" },
            { icon: Compass, label: "Mundial 2026 hospitality", href: "/experiencias/mundial-2026" },
            { icon: Compass, label: "Concierge 360°",          href: "/arma-tu-viaje" }
          ].map(c => (
            <Link key={c.label} href={c.href}
                  className="flex items-center gap-4 rounded-2xl bg-white border border-ink/5 p-4 hover:border-sun transition-colors">
              <span className="h-12 w-12 rounded-xl bg-sun-100 text-sun-700 grid place-items-center">
                <c.icon className="h-5 w-5" />
              </span>
              <span className="font-medium">{c.label}</span>
              <ArrowRight className="ml-auto h-4 w-4 text-ink-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
