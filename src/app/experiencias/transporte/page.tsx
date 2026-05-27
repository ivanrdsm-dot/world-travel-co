import Image from "next/image";
import { fleet, transportServices } from "@/data/transport";
import { formatMXN, waLink } from "@/lib/utils";
import { MessageCircle, Users, Briefcase } from "lucide-react";

export const metadata = {
  title: "Transporte terrestre de lujo",
  description: "Mercedes Maybach, Rolls-Royce Cullinan, Range Rover, Sprinter VIP, Lamborghini Urus y servicios chofer 24/7."
};

const categoryOrder = ["Sedán Lujo", "SUV Lujo", "SUV Blindada", "Van VIP", "Limusina", "Deportivo"] as const;

export default function TransportePage() {
  return (
    <>
      <section className="container-x pt-32 lg:pt-40 pb-16">
        <p className="eyebrow text-sun-700">Transporte terrestre</p>
        <h1 className="mt-6 font-display text-display-xl leading-[1.02] max-w-4xl">
          Llegar es parte de la experiencia.<br/>
          <span className="italic text-sun">Si lo hacemos bien.</span>
        </h1>
        <p className="mt-8 text-lg text-ink-600 max-w-2xl leading-relaxed">
          Flota propia y aliada de vehículos premium con choferes bilingües
          certificados. Renta por hora, día completo o servicio dedicado
          durante toda tu estancia.
        </p>
      </section>

      {/* Services pills */}
      <section className="container-x pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {transportServices.map(s => (
            <div key={s.title} className="rounded-3xl bg-white border border-ink/5 p-6 shadow-soft">
              <p className="font-display text-xl">{s.title}</p>
              <p className="text-sm text-ink-600 mt-3 leading-relaxed">{s.description}</p>
              <p className="text-[10px] uppercase tracking-widest text-ink-500 mt-5">Desde</p>
              <p className="font-display text-2xl text-sun-700">{formatMXN(s.fromMXN)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section className="container-x py-16">
        {categoryOrder.map(cat => {
          const items = fleet.filter(f => f.category === cat);
          if (!items.length) return null;
          return (
            <div key={cat} className="mb-16 last:mb-0">
              <h2 className="font-display text-display-md mb-8">{cat}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(v => (
                  <article key={v.slug} className="card overflow-hidden group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={v.cover} alt={`${v.make} ${v.model}`} fill
                             className="object-cover transition-transform duration-700 group-hover:scale-105"
                             sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
                      <div className="absolute bottom-4 left-5 text-white">
                        <p className="text-[11px] uppercase tracking-[0.22em] font-semibold opacity-90">{v.year} · {v.make}</p>
                        <h3 className="font-display text-2xl lg:text-3xl mt-1 tracking-tight leading-[1.0]"
                            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}>
                          {v.model}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-ink-500">
                        <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {v.capacity} pax</span>
                        <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {v.luggageCapacity} bag</span>
                      </div>
                      <p className="mt-4 text-sm text-ink-600 leading-relaxed line-clamp-3">{v.highlights[0]}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {v.perks.slice(0, 2).map(p => <span key={p} className="chip text-[10px]">{p}</span>)}
                      </div>
                      <div className="mt-6 pt-6 border-t border-ink/5 grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-ink-500">Por hora</p>
                          <p className="font-display text-lg">{formatMXN(v.hourlyRateMXN)}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-ink-500">Día</p>
                          <p className="font-display text-lg">{formatMXN(v.dailyRateMXN)}</p>
                        </div>
                      </div>
                      <a href={waLink(`Hola WTC, quiero cotizar ${v.make} ${v.model}.`)}
                         target="_blank" rel="noreferrer"
                         className="btn-primary w-full mt-5 justify-center text-sm">
                        <MessageCircle className="h-4 w-4" /> Cotizar
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
