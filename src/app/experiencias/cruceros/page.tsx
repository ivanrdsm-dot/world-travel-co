import Image from "next/image";
import Link from "next/link";
import { cruiseLines } from "@/data/cruiseLines";
import { packages } from "@/data/packages";
import PackageCard from "@/components/site/PackageCard";
import { Ship, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cruceros · 15 navieras del mundo",
  description: "Disney, Royal Caribbean, Norwegian, Celebrity, MSC, Costa, Princess, Holland America, Virgin, Cunard, Viking, Silversea, Seabourn, Ritz-Carlton y Carnival con WTC."
};

const segmentOrder = ["Familiar", "Premium", "Lujo", "Boutique", "Expedición"] as const;

export default function CrucerosPage() {
  const cruisePackages = packages.filter(p => p.type === "crucero");

  return (
    <>
      <section className="relative pt-32 lg:pt-40 pb-16 hero-radial">
        <div className="container-x grid lg:grid-cols-[1.3fr_1fr] gap-12 items-end">
          <div>
            <p className="eyebrow text-sun-700">Cruceros</p>
            <h1 className="mt-6 font-display text-display-xl leading-[1.02]">
              15 navieras.<br/>
              <span className="italic text-sun">Una sola agencia</span> que las opera todas.
            </h1>
            <p className="mt-8 text-lg text-ink-600 max-w-xl leading-relaxed">
              Desde el barco más grande del mundo (Icon of the Seas) hasta los
              yates boutique de Ritz-Carlton y Silversea. Cotizamos cualquier
              naviera con tarifas oficiales y nuestras amenidades negociadas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/paquetes?type=crucero" className="btn-primary">
                Ver cruceros disponibles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
            <Image src="/paquetes/celebrity-cruises.jpg" alt="Crucero" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* CRUISE LINES BY SEGMENT */}
      <section className="container-x py-16">
        <p className="eyebrow text-sun-700">Por segmento</p>
        <h2 className="mt-6 font-display text-display-lg max-w-3xl">Encuentra tu naviera ideal.</h2>

        {segmentOrder.map(seg => {
          const items = cruiseLines.filter(c => c.segment === seg);
          if (!items.length) return null;
          return (
            <div key={seg} className="mt-14">
              <h3 className="font-display text-2xl mb-6">{seg}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map(c => (
                  <article key={c.slug} className="card overflow-hidden">
                    <div className="relative aspect-[16/10]">
                      <Image src={c.cover} alt={c.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                      <div className="absolute bottom-4 left-5 text-white">
                        <span className="chip bg-white/95 text-ink"><Ship className="h-3 w-3" /> {c.segment}</span>
                        <h4 className="font-display text-2xl mt-2">{c.name}</h4>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-ink-600 leading-relaxed">{c.bestFor}</p>
                      <div className="mt-4">
                        <p className="text-[10px] uppercase tracking-widest text-ink-500">Barcos insignia</p>
                        <p className="text-xs mt-1">{c.signatureShips.slice(0, 3).join(" · ")}</p>
                      </div>
                      <div className="mt-3">
                        <p className="text-[10px] uppercase tracking-widest text-ink-500">Rutas</p>
                        <p className="text-xs mt-1">{c.routes.join(" · ")}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* AVAILABLE PACKAGES */}
      <section className="container-x py-16">
        <p className="eyebrow text-sun-700">Cruceros disponibles ahora</p>
        <h2 className="mt-6 font-display text-display-lg max-w-3xl">10 itinerarios activos.</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cruisePackages.map(p => <PackageCard key={p.slug} p={p} />)}
        </div>
      </section>
    </>
  );
}
