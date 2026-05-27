import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const dests = [
  { name: "Caribe",         img: "/paquetes/disney-cruise-line.jpg",     href: "/paquetes?region=Caribe",         tag: "11 paquetes" },
  { name: "Japón",          img: "/paquetes/japon-samurai.jpg",          href: "/paquetes?region=Asia",           tag: "3 paquetes" },
  { name: "Italia",         img: "/paquetes/magia-italiana.jpg",         href: "/paquetes?region=Europa",         tag: "2 paquetes" },
  { name: "Alaska",         img: "/paquetes/norwegian-cruise-line.jpg",  href: "/paquetes?region=Norteamérica",   tag: "Solo verano" },
  { name: "Mediterráneo",   img: "/paquetes/costa-esmeralda.jpg",        href: "/paquetes?region=Mediterráneo",   tag: "Crucero + tour" },
  { name: "Islas Griegas",  img: "/paquetes/celebrity-cruises.jpg",      href: "/paquetes",                        tag: "Mar Egeo" }
];

export default function DestinationsGrid() {
  return (
    <section className="container-x py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="eyebrow text-sun-700">Destinos</p>
          <h2 className="mt-6 font-display text-display-lg max-w-2xl">
            5 continentes, una sola agencia que sabe cómo armarlos.
          </h2>
        </div>
        <Link href="/paquetes" className="link-underline text-ink-700">Ver todos los destinos →</Link>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {dests.map((d, i) => (
          <Link
            key={d.name}
            href={d.href}
            className={[
              "group relative rounded-3xl overflow-hidden block",
              i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/5]"
            ].join(" ")}
          >
            <Image src={d.img} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw"/>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-widest opacity-80">{d.tag}</p>
                <h3 className={`font-display ${i === 0 ? "text-5xl lg:text-7xl" : "text-3xl lg:text-4xl"}`}>{d.name}</h3>
              </div>
              <span className="h-11 w-11 rounded-full bg-white/15 backdrop-blur grid place-items-center group-hover:bg-sun transition-colors">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
