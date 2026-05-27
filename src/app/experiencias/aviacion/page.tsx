import Image from "next/image";
import Link from "next/link";
import { fleet, aviationFAQs } from "@/data/aviation";
import { formatUSD, waLink } from "@/lib/utils";
import { Plane, MessageCircle, Clock, Users, Briefcase, Gauge } from "lucide-react";

export const metadata = {
  title: "Jets privados y helicópteros",
  description: "Renta de jets privados Cessna, Embraer, Bombardier, Gulfstream y helicópteros Bell y Airbus con WTC."
};

const categoryOrder = [
  "Light Jet", "Midsize Jet", "Super Midsize Jet", "Heavy Jet", "Ultra Long Range", "Helicóptero"
] as const;

export default function AviacionPage() {
  return (
    <>
      <section className="relative min-h-[88svh] flex items-end overflow-hidden bg-ink text-white">
        <Image src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=2000&q=80"
               alt="Jet privado" fill priority className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="container-x relative pb-16 lg:pb-24">
          <p className="eyebrow text-sun-300 before:bg-sun-300">Aviación privada</p>
          <h1 className="mt-6 font-display text-display-2xl leading-[0.95] max-w-5xl">
            Donde quieras.<br/>
            <span className="italic text-sun-300">Cuando lo decidas.</span>
          </h1>
          <p className="mt-8 text-xl text-white/80 max-w-2xl leading-relaxed">
            8 categorías de aeronaves con tripulación, catering gourmet y FBO
            VIP. Cotizamos en menos de 2 horas. Volamos en menos de 24 h.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={waLink("Hola WTC, quiero cotizar un jet privado.")} target="_blank" rel="noreferrer"
               className="btn-primary"><MessageCircle className="h-4 w-4" /> Cotizar ahora</a>
            <a href="#flota" className="btn-ghost text-white border-white/30 hover:bg-white hover:text-ink">
              Ver la flota
            </a>
          </div>
        </div>
      </section>

      <section id="flota" className="container-x py-20 lg:py-28">
        {categoryOrder.map(cat => {
          const items = fleet.filter(f => f.category === cat);
          if (!items.length) return null;
          return (
            <div key={cat} className="mb-16 last:mb-0">
              <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
                <div>
                  <p className="eyebrow text-sun-700">{cat === "Helicóptero" ? "Rotores" : "Categoría"}</p>
                  <h2 className="mt-4 font-display text-display-md">{cat}</h2>
                </div>
                <p className="text-ink-500 text-sm">{items.length} aeronave{items.length === 1 ? "" : "s"}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {items.map(a => (
                  <article key={a.slug} className="card overflow-hidden">
                    <div className="relative aspect-[16/9]">
                      <Image src={a.cover} alt={a.model} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="chip bg-white/95 text-ink"><Plane className="h-3 w-3" /> {a.manufacturer}</span>
                      </div>
                      <div className="absolute bottom-4 left-5 text-white">
                        <h3 className="font-display text-3xl">{a.model}</h3>
                      </div>
                    </div>

                    <div className="p-6 lg:p-7">
                      <div className="grid grid-cols-4 gap-3">
                        <Stat icon={Users}     label="Pax"     value={a.capacity.toString()} />
                        <Stat icon={Gauge}     label="kts"     value={a.cruiseKts.toString()} />
                        <Stat icon={Clock}     label="nm"      value={a.rangeNm.toLocaleString()} />
                        <Stat icon={Briefcase} label="bag m³"  value={a.baggageM3.toString()} />
                      </div>

                      <p className="text-sm text-ink-600 mt-5 leading-relaxed">{a.highlights[0]}</p>

                      <div className="mt-5">
                        <p className="text-[10px] uppercase tracking-widest text-ink-500">Mejor para</p>
                        <p className="text-sm mt-1">{a.bestFor.join(" · ")}</p>
                      </div>

                      <div className="mt-6 pt-6 border-t border-ink/5 flex items-end justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-ink-500">Tarifa por hora</p>
                          <p className="font-display text-2xl mt-0.5">
                            {formatUSD(a.hourlyRateUSD.low)}<span className="text-ink-400 text-sm">–{formatUSD(a.hourlyRateUSD.high)}</span>
                          </p>
                        </div>
                        <a href={waLink(`Hola WTC, quiero cotizar el ${a.manufacturer} ${a.model}.`)}
                           target="_blank" rel="noreferrer" className="btn-primary text-xs px-4 py-2">
                          Cotizar →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* FAQ */}
      <section className="container-x py-20">
        <p className="eyebrow text-sun-700">Preguntas frecuentes</p>
        <h2 className="mt-6 font-display text-display-lg max-w-2xl">Lo que más nos preguntan.</h2>
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {aviationFAQs.map(f => (
            <details key={f.q} className="rounded-3xl bg-white border border-ink/5 p-6 lg:p-7 group">
              <summary className="cursor-pointer font-display text-xl flex justify-between gap-4">
                {f.q}
                <span className="text-sun-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-ink-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="text-center">
      <Icon className="h-4 w-4 text-sun mx-auto" />
      <p className="font-display text-xl mt-1">{value}</p>
      <p className="text-[10px] uppercase tracking-widest text-ink-500">{label}</p>
    </div>
  );
}
