import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Hotel, Plane, Car, Music, Trophy, Ship } from "lucide-react";

export const metadata = {
  title: "Experiencias 360° de lujo",
  description: "Hoteles, aviación privada, transporte VIP, conciertos hospitality, Mundial 2026, cruceros premium. WTC concierge de lujo."
};

const experiences = [
  {
    href: "/experiencias/mundial-2026",
    eyebrow: "Mundial FIFA 26™",
    title: "Hospitality oficial del Mundial",
    text: "16 sedes, 104 partidos. Trophy Lounge, Pitch View, Champions Club. Desde Inauguración hasta la Final.",
    icon: Trophy,
    img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1600&q=80",
    badge: "Junio – Julio 2026",
    span: "lg:col-span-2 lg:row-span-2"
  },
  {
    href: "/experiencias/hoteles",
    eyebrow: "Hoteles",
    title: "Alianza Grupo Posadas",
    text: "Live Aqua, Grand Fiesta Americana y Fiesta Americana con beneficios WTC: upgrade, late check-out y créditos de spa.",
    icon: Hotel,
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80",
    badge: "12 propiedades",
    span: ""
  },
  {
    href: "/experiencias/aviacion",
    eyebrow: "Aviación privada",
    title: "Jets & helicópteros",
    text: "Desde light jets Cessna hasta ultra long range Gulfstream G650ER. Helicópteros Bell y Airbus.",
    icon: Plane,
    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80",
    badge: "8 categorías",
    span: ""
  },
  {
    href: "/experiencias/conciertos",
    eyebrow: "Conciertos & eventos",
    title: "Palcos, Hospitality y Meet & Greet",
    text: "Rosalía, Karol G, Iron Maiden, Romeo Santos, Mon Laferte. Acceso oficial a hospitality OCESA y Zignia.",
    icon: Music,
    img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&q=80",
    badge: "16 conciertos 2026",
    span: ""
  },
  {
    href: "/experiencias/transporte",
    eyebrow: "Transporte terrestre",
    title: "Autos & Sprinters de lujo",
    text: "Mercedes Maybach, Rolls-Royce Cullinan, Range Rover, Sprinter First Class. Con chofer 24/7 o self-drive.",
    icon: Car,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
    badge: "8 vehículos premium",
    span: ""
  },
  {
    href: "/experiencias/cruceros",
    eyebrow: "Cruceros",
    title: "15 navieras del mundo",
    text: "Disney, Royal, Celebrity, Norwegian, MSC, Costa, Princess, Holland, Virgin, Cunard, Viking, Silversea, Seabourn, Ritz-Carlton, Carnival.",
    icon: Ship,
    img: "/paquetes/celebrity-cruises.jpg",
    badge: "Toda naviera",
    span: ""
  }
];

export default function ExperienciasPage() {
  return (
    <section className="container-x pt-32 lg:pt-40 pb-24">
      <p className="eyebrow text-sun-700">WTC 360°</p>
      <h1 className="mt-6 font-display text-display-xl max-w-4xl leading-[1.02]">
        Tu viaje no termina cuando aterrizas.<br/>
        <span className="italic text-sun">Apenas empieza.</span>
      </h1>
      <p className="mt-8 text-xl text-ink-600 max-w-3xl leading-relaxed">
        World Travel Co. opera el concierge 360° más completo de México:
        hoteles con alianza, aviación privada, transporte de lujo, hospitality
        para eventos y experiencias custom. Arma tu viaje como lo imagines —
        nosotros movemos cada pieza.
      </p>

      <div className="mt-16 grid lg:grid-cols-3 lg:grid-rows-2 gap-5">
        {experiences.map(e => (
          <Link key={e.href} href={e.href}
                className={`group relative rounded-[2rem] overflow-hidden block min-h-[280px] lg:min-h-[340px] ${e.span}`}>
            <Image src={e.img} alt={e.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/20" />

            <div className="absolute top-5 right-5">
              <span className="chip bg-white/15 backdrop-blur text-white border border-white/20">{e.badge}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 lg:p-10 text-white">
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-sun text-white">
                <e.icon className="h-5 w-5" />
              </span>
              <p className="mt-5 text-[11px] uppercase tracking-[0.22em] opacity-80">{e.eyebrow}</p>
              <h2 className={`font-display ${e.span.includes("col-span-2") ? "text-4xl lg:text-6xl" : "text-2xl lg:text-3xl"} mt-1 leading-tight`}>{e.title}</h2>
              <p className="mt-3 max-w-md text-sm lg:text-base opacity-90 leading-relaxed">{e.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Explorar <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* 360 strip */}
      <div className="mt-24 rounded-[2rem] bg-ink text-white p-10 lg:p-14 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div>
          <p className="eyebrow text-sun-300 before:bg-sun-300">Arma tu propio viaje</p>
          <h2 className="mt-6 font-display text-display-lg leading-[1.05]">
            ¿Quieres ver a Karol G en CDMX, dormir en Live Aqua, llegar en jet privado y cerrar con yate en Cancún?
          </h2>
          <p className="mt-6 text-white/80 text-lg max-w-2xl leading-relaxed">
            Combinamos cualquier hotel, vuelo, transporte y experiencia.
            Lo único que cambia es tu nivel de exigencia.
          </p>
          <Link href="/arma-tu-viaje" className="btn-primary mt-8">Empezar mi viaje a medida →</Link>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl border border-white/10 p-5">
            <p className="font-display text-3xl text-sun-300">+50</p>
            <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Proveedores</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <p className="font-display text-3xl text-sun-300">24/7</p>
            <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Concierge</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <p className="font-display text-3xl text-sun-300">5★</p>
            <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Estándar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
