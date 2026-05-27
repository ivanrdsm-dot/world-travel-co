import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Hotel, Plane, Car, Music, Trophy, Ship, Sparkles } from "lucide-react";

const tiles = [
  { href: "/experiencias/mundial-2026", icon: Trophy, label: "Mundial 2026",   tag: "Hospitality oficial",       img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1200&q=80",          span: "lg:col-span-2 lg:row-span-2" },
  { href: "/experiencias/hoteles",      icon: Hotel,  label: "Hoteles 5★",      tag: "Alianza Posadas",           img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=80",          span: "" },
  { href: "/experiencias/aviacion",     icon: Plane,  label: "Jets privados",   tag: "Cessna · Gulfstream",        img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1000&q=80",          span: "" },
  { href: "/experiencias/transporte",   icon: Car,    label: "Transporte VIP",  tag: "Maybach · Cullinan",         img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=80",          span: "" },
  { href: "/experiencias/conciertos",   icon: Music,  label: "Conciertos",      tag: "Palcos & Hospitality",       img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&q=80",          span: "" },
  { href: "/experiencias/cruceros",     icon: Ship,   label: "Cruceros",        tag: "15 navieras",                img: "/paquetes/celebrity-cruises.jpg",                                                    span: "" },
  { href: "/arma-tu-viaje",             icon: Sparkles, label: "Arma tu viaje", tag: "Concierge 360°",             img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1000&q=80",          span: "" }
];

export default function ExperienceUniverse() {
  return (
    <section className="container-x py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="eyebrow text-sun-700">WTC 360°</p>
          <h2 className="mt-6 font-display text-display-lg max-w-3xl">
            Un solo concierge.<br/>
            <span className="italic text-sun">Todas las piezas de tu viaje.</span>
          </h2>
        </div>
        <Link href="/experiencias" className="link-underline text-ink-700">Ver todas las experiencias →</Link>
      </div>

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-5">
        {tiles.map(t => (
          <Link key={t.href} href={t.href}
                className={`group relative rounded-[2rem] overflow-hidden block min-h-[200px] lg:min-h-[260px] ${t.span}`}>
            <Image src={t.img} alt={t.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                   sizes="(max-width: 768px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-ink/10" />
            <div className="absolute inset-x-0 bottom-0 p-5 lg:p-7 text-white">
              <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-sun text-white">
                <t.icon className="h-4 w-4" />
              </span>
              <h3 className={`mt-4 font-display ${t.span.includes("col-span-2") ? "text-4xl lg:text-6xl" : "text-2xl"} leading-tight`}>
                {t.label}
              </h3>
              <p className="text-xs uppercase tracking-widest opacity-80 mt-1">{t.tag}</p>
              <ArrowUpRight className="absolute top-5 right-5 h-5 w-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
