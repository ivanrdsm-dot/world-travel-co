import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Hotel, Plane, Car, Music, Trophy, Ship, Sparkles } from "lucide-react";

const tiles = [
  { href: "/experiencias/mundial-2026", icon: Trophy,   label: "Mundial 2026",   tag: "Hospitality oficial",   img: "/universe/mundial.jpg",    span: "lg:col-span-2 lg:row-span-2" },
  { href: "/experiencias/hoteles",      icon: Hotel,    label: "Hoteles 5★",      tag: "Alianza Posadas",       img: "/universe/hoteles.jpg",    span: "" },
  { href: "/experiencias/aviacion",     icon: Plane,    label: "Jets privados",   tag: "Cessna · Gulfstream",   img: "/universe/jets.jpg",       span: "" },
  { href: "/experiencias/transporte",   icon: Car,      label: "Transporte VIP",  tag: "Maybach · Cullinan",    img: "/universe/transporte.jpg", span: "" },
  { href: "/experiencias/conciertos",   icon: Music,    label: "Conciertos",      tag: "Palcos & Hospitality",  img: "/universe/conciertos.jpg", span: "" },
  { href: "/experiencias/cruceros",     icon: Ship,     label: "Cruceros",        tag: "15 navieras",           img: "/universe/cruceros.jpg",   span: "" },
  { href: "/arma-tu-viaje",             icon: Sparkles, label: "Arma tu viaje",   tag: "Concierge 360°",        img: "/universe/concierge.jpg",  span: "" }
];

export default function ExperienceUniverse() {
  return (
    <section className="container-x py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="eyebrow text-sun-700">WTC 360°</p>
          <h2 className="mt-6 font-display text-display-lg max-w-3xl">
            Un solo concierge.<br/>
            <em className="text-sun">Todas las piezas de tu viaje.</em>
          </h2>
        </div>
        <Link href="/experiencias" className="link-underline text-ink-700">
          Ver todas las experiencias →
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-5">
        {tiles.map(t => {
          const big = t.span.includes("col-span-2");
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`group relative rounded-[2rem] overflow-hidden block isolate
                          min-h-[240px] lg:min-h-[280px] ${t.span}`}
            >
              <Image
                src={t.img}
                alt={t.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={big ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                priority={big}
              />

              {/* Triple-stop gradient guarantees text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/15" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink/40" />

              {/* Top-right arrow */}
              <span className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25
                                grid place-items-center text-white group-hover:bg-sun group-hover:border-sun
                                transition-all duration-300">
                <ArrowUpRight className="h-4 w-4" />
              </span>

              {/* Top-left chip */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full
                                bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1.5
                                text-white text-[10px] uppercase tracking-[0.18em] font-semibold">
                {t.tag}
              </span>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-white">
                <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-sun text-white shadow-glow">
                  <t.icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3
                  className={`mt-5 font-display leading-[0.95] tracking-tight
                              ${big ? "text-5xl lg:text-7xl" : "text-3xl lg:text-4xl"}`}
                  style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
                >
                  {t.label}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
