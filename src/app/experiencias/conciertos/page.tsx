import Image from "next/image";
import { concerts } from "@/data/concerts";
import { formatMXN, waLink } from "@/lib/utils";
import { Calendar, MapPin, MessageCircle, Music, Ticket } from "lucide-react";

export const metadata = {
  title: "Conciertos · Palcos VIP y Hospitality",
  description: "Rosalía, Karol G, Iron Maiden, Romeo Santos, Mon Laferte y más. Acceso a hospitality oficial OCESA y Zignia Live."
};

const monthOrder = ["mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"] as const;

function monthOf(date: string) {
  return new Date(date).toLocaleDateString("es-MX", { month: "long" });
}

function formatDates(dates: string[]) {
  return dates.map(d => new Date(d).toLocaleDateString("es-MX", { day: "2-digit", month: "short" })).join(" · ");
}

export default function ConciertosPage() {
  const byMonth: Record<string, typeof concerts> = {};
  concerts.forEach(c => {
    const m = monthOf(c.dates[0]);
    (byMonth[m] ||= []).push(c);
  });

  return (
    <>
      <section className="relative pt-32 lg:pt-40 pb-16 hero-radial">
        <div className="container-x">
          <p className="eyebrow text-sun-700">Calendario 2026 · CDMX, MTY, GDL</p>
          <h1 className="mt-6 font-display text-display-xl leading-[1.02] max-w-4xl">
            Palcos, hospitality y meet & greet.<br/>
            <span className="italic text-sun">Sin filas, sin reventa.</span>
          </h1>
          <p className="mt-8 text-lg text-ink-600 max-w-2xl leading-relaxed">
            Operamos acceso oficial a hospitality y palcos VIP con los
            promotores líderes: OCESA, Zignia Live y CIE. Lo que ves aquí
            es lo que está abierto a venta hoy.
          </p>
        </div>
      </section>

      <section className="container-x py-12">
        {monthOrder.map(month => {
          const items = byMonth[month];
          if (!items?.length) return null;
          return (
            <div key={month} className="mb-16 last:mb-0">
              <div className="flex items-baseline gap-6 mb-8">
                <h2 className="font-display text-display-md capitalize">{month}</h2>
                <span className="text-ink-400 text-sm">{items.length} concierto{items.length === 1 ? "" : "s"}</span>
                <span className="flex-1 border-t border-ink/10" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(c => (
                  <article key={c.slug} className="card overflow-hidden group">
                    <div className="relative aspect-[4/5]">
                      <Image src={c.cover} alt={c.artist} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/15" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="chip bg-white/95 text-ink"><Music className="h-3 w-3" /> {c.category}</span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`chip ${
                          c.status === "Sold out (resale)" ? "bg-red-600 text-white" :
                          c.status === "Pocas entradas"    ? "bg-sun text-white" :
                                                              "bg-emerald-600 text-white"
                        }`}>{c.status}</span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <h3 className="font-display text-3xl lg:text-4xl leading-[0.95] tracking-tight"
                            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}>
                          {c.artist}
                        </h3>
                        <p className="mt-3 text-sm flex items-center gap-1.5 opacity-95"><Calendar className="h-3.5 w-3.5" /> {formatDates(c.dates)}</p>
                        <p className="text-sm flex items-center gap-1.5 mt-1 opacity-95"><MapPin className="h-3.5 w-3.5" /> {c.venue} · {c.city}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-xs uppercase tracking-widest text-ink-500">Hospitality disponible</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {c.hospitality.map(h => (
                          <span key={h} className="chip"><Ticket className="h-3 w-3" /> {h}</span>
                        ))}
                      </div>
                      {c.notes && <p className="text-xs text-ink-500 mt-4 italic">{c.notes}</p>}
                      <div className="mt-5 pt-5 border-t border-ink/5 flex items-end justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-ink-500">Hospitality desde</p>
                          <p className="font-display text-xl mt-0.5">{formatMXN(c.fromPriceMXN)}</p>
                        </div>
                        <a href={waLink(`Hola WTC, quiero hospitality para ${c.artist} el ${formatDates(c.dates)}.`)}
                           target="_blank" rel="noreferrer"
                           className="btn-primary text-xs px-4 py-2">
                          <MessageCircle className="h-3.5 w-3.5" /> Cotizar
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

      <section className="container-x py-16">
        <div className="rounded-[2rem] bg-ink text-white p-10 lg:p-14 grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <div>
            <p className="eyebrow text-sun-300 before:bg-sun-300">No ves el evento que buscas</p>
            <h2 className="mt-6 font-display text-display-lg leading-[1.05]">
              Operamos cualquier evento mundial:<br/>
              <span className="italic text-sun-300">F1, Champions, NFL, US Open.</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-xl">
              Si tiene boleto, tiene hospitality. Y nosotros la conseguimos.
            </p>
          </div>
          <a href={waLink("Hola WTC, busco hospitality para un evento que no está en su sitio.")}
             target="_blank" rel="noreferrer"
             className="btn-primary justify-center">Cotizar evento custom →</a>
        </div>
      </section>
    </>
  );
}
