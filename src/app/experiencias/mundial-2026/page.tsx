import Image from "next/image";
import { venues, hospitalityCategories, wcPackages } from "@/data/worldcup";
import { formatUSD, waLink } from "@/lib/utils";
import { Trophy, MapPin, Users, Calendar, MessageCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "Mundial FIFA 26™ · Hospitality oficial",
  description: "Hospitality oficial del Mundial 2026 en las 16 sedes. Trophy Lounge, Pitch View, Champions Club y Match Club. Inauguración 11 jun, Final 19 jul."
};

const countryOrder = ["México", "Estados Unidos", "Canadá"] as const;

export default function MundialPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92svh] flex items-end overflow-hidden bg-ink text-white">
        <Image src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=2000&q=80"
               alt="Estadio Mundial" fill priority className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/40" />

        <div className="container-x relative pb-20 lg:pb-28">
          <div className="flex items-center gap-3">
            <span className="chip bg-sun text-white"><Trophy className="h-3 w-3" /> Hospitality oficial</span>
            <span className="chip bg-white/15 backdrop-blur text-white border border-white/20">11 jun – 19 jul 2026</span>
          </div>

          <h1 className="mt-6 font-display text-display-2xl leading-[0.95] max-w-5xl">
            FIFA World Cup 26™.<br/>
            <span className="italic text-sun-300">Estarás del lado correcto del campo.</span>
          </h1>
          <p className="mt-8 text-xl text-white/85 max-w-3xl leading-relaxed">
            16 sedes, 48 selecciones, 104 partidos. WTC opera hospitality
            oficial en colaboración con On Location, agente exclusivo de FIFA.
            Desde la inauguración en el Estadio Banorte (Azteca) hasta la
            <strong> Final del 19 de julio en MetLife Stadium</strong>.
          </p>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl">
            <Stat n="16" l="Sedes" />
            <Stat n="48" l="Selecciones" />
            <Stat n="104" l="Partidos" />
            <Stat n="3" l="Países anfitriones" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={waLink("Hola WTC, quiero hospitality para el Mundial 2026.")}
               target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle className="h-4 w-4" /> Cotizar hospitality
            </a>
            <a href="#sedes" className="btn-ghost text-white border-white/30 hover:bg-white hover:text-ink">
              Ver las 16 sedes
            </a>
          </div>
        </div>
      </section>

      {/* HOSPITALITY TIERS */}
      <section className="container-x py-20 lg:py-28">
        <p className="eyebrow text-sun-700">Categorías oficiales</p>
        <h2 className="mt-6 font-display text-display-lg max-w-3xl">
          5 niveles de hospitality. De Pitch View a Trophy Lounge.
        </h2>
        <p className="mt-5 text-lg text-ink-600 max-w-2xl">
          Cada categoría está certificada por FIFA y operada por On Location.
          Los precios son por persona, por partido.
        </p>

        <div className="mt-14 grid lg:grid-cols-5 gap-4">
          {hospitalityCategories.map(c => (
            <article key={c.slug} className="rounded-3xl bg-white border border-ink/5 p-6 flex flex-col">
              <span className={`chip self-start ${
                c.badge === "Elite" ? "bg-ink text-white" :
                c.badge === "Premium+" ? "bg-sun text-white" :
                c.badge === "Premium"  ? "bg-sun-100 text-sun-700" :
                                          "bg-ink-100 text-ink-700"
              }`}>
                {c.badge}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight">{c.name}</h3>
              <p className="mt-3 text-[11px] uppercase tracking-widest text-ink-500">Desde / persona / partido</p>
              <p className="font-display text-2xl text-sun-700">{formatUSD(c.pricePerMatchUSD)}</p>
              {c.capacityPerSuite && <p className="text-xs text-ink-500 mt-1">{c.capacityPerSuite}</p>}
              <ul className="mt-5 space-y-2 text-sm flex-1">
                {c.features.slice(0, 4).map(f => (
                  <li key={f} className="flex gap-2"><Sparkles className="h-3.5 w-3.5 text-sun mt-0.5 shrink-0" /> <span className="text-ink-600">{f}</span></li>
                ))}
              </ul>
              <p className="mt-5 pt-5 border-t border-ink/5 text-xs italic text-ink-500">{c.bestFor}</p>
            </article>
          ))}
        </div>
      </section>

      {/* VENUES BY COUNTRY */}
      <section id="sedes" className="bg-bone py-20 lg:py-28">
        <div className="container-x">
          <p className="eyebrow text-sun-700">Las 16 sedes</p>
          <h2 className="mt-6 font-display text-display-lg max-w-3xl">3 países. La Copa más grande de la historia.</h2>

          {countryOrder.map(country => {
            const items = venues.filter(v => v.country === country);
            const flag = country === "México" ? "🇲🇽" : country === "Estados Unidos" ? "🇺🇸" : "🇨🇦";
            return (
              <div key={country} className="mt-16">
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-3xl">{flag}</span>
                  <h3 className="font-display text-3xl">{country}</h3>
                  <span className="text-ink-400 text-sm">{items.length} sede{items.length === 1 ? "" : "s"}</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map(v => {
                    const isFinal     = v.matches.some(m => m.toUpperCase().includes("FINAL 19"));
                    const isInaugural = v.matches.some(m => m.toLowerCase().includes("inaugural"));
                    const isSemi      = v.matches.some(m => m.toUpperCase().includes("SEMIFINAL"));
                    const badge = isFinal ? "FINAL" : isInaugural ? "INAUGURAL" : isSemi ? "SEMIFINAL" : null;
                    return (
                      <article key={v.slug} className="card overflow-hidden group">
                        <div className="relative aspect-[16/11] overflow-hidden">
                          <Image src={v.cover} alt={v.stadium} fill
                                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                                 sizes="(max-width: 768px) 100vw, 33vw" />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/15" />
                          {badge && (
                            <span className="absolute top-3 right-3 chip bg-sun text-white text-[10px]">
                              ⭐ {badge}
                            </span>
                          )}
                          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                            <p className="text-[10px] uppercase tracking-[0.22em] font-semibold opacity-90 flex items-center gap-1.5">
                              <MapPin className="h-3 w-3" /> {v.city}
                            </p>
                            <h4 className="font-display text-2xl lg:text-3xl mt-1 leading-[1.05] tracking-tight"
                                style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}>
                              {v.stadium}
                            </h4>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-3 text-sm text-ink-500">
                            <span className="inline-flex items-center gap-1.5">
                              <Users className="h-3.5 w-3.5" /> {v.capacity.toLocaleString()} plazas
                            </span>
                          </div>
                          <ul className="mt-4 space-y-1.5 text-sm">
                            {v.matches.map(m => (
                              <li key={m} className="flex gap-2 text-ink-700">
                                <Calendar className="h-3.5 w-3.5 mt-0.5 text-sun shrink-0" /> {m}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs text-ink-500 mt-4 italic leading-relaxed">{v.notes}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WTC PACKAGES */}
      <section className="container-x py-20 lg:py-28">
        <p className="eyebrow text-sun-700">Paquetes WTC</p>
        <h2 className="mt-6 font-display text-display-lg max-w-3xl">
          Hospitality + hotel + traslados + experiencia local.
        </h2>
        <p className="mt-5 text-lg text-ink-600 max-w-2xl">
          Combinamos cada elemento para que el partido sea solo el clímax
          de un viaje impecable.
        </p>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {wcPackages.map(p => (
            <article key={p.slug} className="rounded-3xl bg-ink text-white overflow-hidden grid sm:grid-cols-[1fr_1.4fr]">
              <div className="relative min-h-[200px]">
                <Image src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80"
                       alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />
              </div>
              <div className="p-7 flex flex-col">
                <span className="chip bg-sun text-white self-start"><Trophy className="h-3 w-3" /> Paquete WTC</span>
                <h3 className="font-display text-2xl mt-4 leading-tight">{p.name}</h3>
                <p className="mt-3 text-white/80 text-sm leading-relaxed">{p.description}</p>
                <ul className="mt-4 space-y-1 text-xs text-white/70">
                  {p.perks.map(perk => <li key={perk}>✓ {perk}</li>)}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/60">Desde / persona</p>
                    <p className="font-display text-3xl text-sun-300">{formatUSD(p.fromPriceUSD)}</p>
                  </div>
                  <a href={waLink(`Hola WTC, me interesa el paquete ${p.name}.`)}
                     target="_blank" rel="noreferrer"
                     className="btn-primary text-xs px-4 py-2">Cotizar →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-5xl text-sun-300">{n}</p>
      <p className="text-xs uppercase tracking-widest text-white/70 mt-1">{l}</p>
    </div>
  );
}
