import Image from "next/image";
import Link from "next/link";
import { hotels } from "@/data/hotels";
import { formatMXN, waLink } from "@/lib/utils";
import { Check, MapPin, MessageCircle, Star } from "lucide-react";

export const metadata = {
  title: "Hoteles · Alianza Grupo Posadas",
  description: "Live Aqua, Grand Fiesta Americana, Fiesta Americana y The Explorean con beneficios exclusivos WTC."
};

const brandOrder = ["Live Aqua", "Grand Fiesta Americana", "Fiesta Americana", "The Explorean"] as const;

export default function HotelesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 lg:pt-40 pb-16 hero-radial">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <div>
            <p className="eyebrow text-sun-700">Alianza estratégica · Grupo Posadas</p>
            <h1 className="mt-6 font-display text-display-xl leading-[1.02]">
              12 hoteles 5★.<br/>
              <span className="italic text-sun">Beneficios que solo WTC ofrece.</span>
            </h1>
            <p className="mt-8 text-lg text-ink-600 max-w-xl leading-relaxed">
              Trabajamos directo con Grupo Posadas — la cadena hotelera más
              grande de México. Nuestros clientes reciben upgrade sujeto a
              disponibilidad, late check-out, créditos de spa y amenidades
              de bienvenida en cada estancia.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {brandOrder.map(b => (
                <a key={b} href={`#${b.toLowerCase().replace(/\s+/g, "-")}`} className="chip">{b}</a>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80"
                   alt="Hotel pool" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* PERKS BAR */}
      <section className="container-x py-10">
        <div className="rounded-3xl bg-ink text-white p-8 lg:p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["Upgrade", "Sujeto a disponibilidad al check-in"],
            ["Late check-out", "Hasta 4 pm sin costo"],
            ["Crédito de spa", "Desde USD 50 por estancia"],
            ["Welcome amenity", "Champagne, dulces locales o flores"]
          ].map(([t, s]) => (
            <div key={t}>
              <p className="text-xs uppercase tracking-widest text-sun-300">Beneficio WTC</p>
              <p className="font-display text-xl mt-2">{t}</p>
              <p className="text-sm text-white/70 mt-1">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GRID POR MARCA */}
      {brandOrder.map(brand => {
        const items = hotels.filter(h => h.brand === brand);
        if (!items.length) return null;
        return (
          <section key={brand} id={brand.toLowerCase().replace(/\s+/g, "-")} className="container-x py-16">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
              <div>
                <p className="eyebrow text-sun-700">Marca</p>
                <h2 className="mt-4 font-display text-display-lg">{brand}</h2>
              </div>
              <p className="text-ink-500 text-sm">{items.length} propiedad{items.length === 1 ? "" : "es"}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(h => (
                <article key={h.slug} className="card overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image src={h.cover} alt={h.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="chip bg-white/95 text-ink"><Star className="h-3 w-3 fill-current" /> {h.category}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-1.5 text-xs">
                      <MapPin className="h-3.5 w-3.5" /> {h.city}, {h.state}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl leading-tight">{h.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {h.amenities.slice(0, 3).map(a => <span key={a} className="chip text-[10px]">{a}</span>)}
                    </div>
                    <p className="mt-4 text-sm text-ink-600 leading-relaxed line-clamp-3">{h.highlights[0]}</p>

                    <div className="mt-5 pt-5 border-t border-ink/5 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-ink-500">Desde / noche</p>
                        <p className="font-display text-2xl mt-0.5">{formatMXN(h.fromPrice)}</p>
                      </div>
                      <a href={waLink(`Hola WTC, quiero cotizar ${h.name}.`)}
                         target="_blank" rel="noreferrer"
                         className="btn-primary text-xs px-4 py-2">
                        <MessageCircle className="h-3.5 w-3.5" /> Cotizar
                      </a>
                    </div>

                    <details className="mt-4">
                      <summary className="cursor-pointer text-xs uppercase tracking-widest text-sun-700 font-semibold">Beneficios WTC</summary>
                      <ul className="mt-3 space-y-2">
                        {h.wtcPerks.map(p => (
                          <li key={p} className="flex items-start gap-2 text-sm text-ink-600">
                            <Check className="h-4 w-4 text-sun shrink-0 mt-0.5" /> <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="container-x py-20">
        <div className="rounded-[2rem] bg-bone border border-ink/10 p-10 lg:p-14 text-center">
          <p className="eyebrow text-sun-700 justify-center inline-flex">Reserva con WTC</p>
          <h2 className="mt-6 font-display text-display-lg max-w-3xl mx-auto">
            Reservar directo con un hotel y reservar con WTC <span className="italic text-sun">no</span> cuesta lo mismo.
          </h2>
          <p className="mt-6 text-lg text-ink-600 max-w-2xl mx-auto">
            Mismo precio público + nuestros beneficios negociados + concierge antes,
            durante y después del viaje. No cobramos extra.
          </p>
          <Link href="/contacto" className="btn-primary mt-8">Cotizar mi hotel →</Link>
        </div>
      </section>
    </>
  );
}
