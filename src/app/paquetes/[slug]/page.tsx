import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPackage, packages } from "@/data/packages";
import { formatMXN, formatUSD, waLink } from "@/lib/utils";
import { ArrowRight, Calendar, Check, Anchor, MessageCircle, Plane, Ship } from "lucide-react";
import PackageCard from "@/components/site/PackageCard";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return packages.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${p.subtitle}`,
    description: p.highlights[0]
  };
}

export default async function PackageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) notFound();

  const price = p.currency === "MXN" ? formatMXN(p.fromPrice) : formatUSD(p.fromPrice);
  const tax = p.currency === "MXN" ? formatMXN(p.fromTax) : formatUSD(p.fromTax);
  const Icon = p.type === "crucero" ? Ship : Plane;
  const related = packages
    .filter(o => o.slug !== p.slug && (o.region === p.region || o.type === p.type))
    .slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[88svh] min-h-[640px] overflow-hidden">
        <Image src={p.hero} alt={p.title} fill priority className="object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/90" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-x pb-16 lg:pb-24 text-white">
            <Link href="/paquetes" className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
              ← Volver al catálogo
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip bg-white/15 backdrop-blur text-white border border-white/20">
                <Icon className="h-3 w-3" /> {p.type === "crucero" ? "Crucero" : "Tour"}
              </span>
              {p.brand && <span className="chip bg-white/15 backdrop-blur text-white border border-white/20">{p.brand}</span>}
              {p.badges?.map(b => <span key={b} className="chip bg-sun text-white">{b}</span>)}
            </div>

            <h1 className="mt-6 font-display text-display-xl max-w-4xl leading-[0.95]">
              {p.title}
            </h1>
            <p className="mt-3 font-display text-2xl lg:text-3xl text-white/80 italic">{p.subtitle}</p>

            <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
                <Stat label="Duración" value={`${p.durationDays} días`} />
                <Stat label="Noches" value={`${p.durationNights}`} />
                <Stat label="Próxima salida" value={p.nextDeparture ?? "—"} />
                <Stat label="Cabina / hab." value={p.cabinNote ?? "—"} />
              </dl>

              <div className="rounded-2xl bg-white text-ink p-6 lg:min-w-[320px] shadow-soft">
                <p className="text-[11px] uppercase tracking-widest text-ink-500">Desde</p>
                <p className="font-display text-4xl mt-1">{price}</p>
                <p className="text-xs text-ink-500 mt-1">+ {tax} de impuestos · {p.pricingNote}</p>
                <a href={waLink(`Hola WTC, me interesa el paquete ${p.title} (${p.subtitle}). ¿Disponibilidad para ${p.nextDeparture ?? "fechas próximas"}?`)}
                   target="_blank" rel="noreferrer"
                   className="btn-primary w-full mt-5 justify-center">
                  <MessageCircle className="h-4 w-4" /> Cotizar por WhatsApp
                </a>
                <Link href="/contacto" className="btn-ghost w-full mt-2 justify-center">
                  Cotizar por formulario
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container-x py-20 lg:py-28 grid lg:grid-cols-[1.6fr_1fr] gap-16">
        <div>
          <h2 className="font-display text-display-md">Lo que vivirás</h2>
          <ul className="mt-8 space-y-5">
            {p.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 h-6 w-6 grid place-items-center rounded-full bg-sun-100 text-sun-700 shrink-0 font-display text-sm">{i + 1}</span>
                <p className="text-lg leading-relaxed text-ink-700">{h}</p>
              </li>
            ))}
          </ul>

          {p.itinerary && (
            <>
              <h2 className="font-display text-display-md mt-20">Itinerario día por día</h2>
              <ol className="mt-8 border-l border-ink/10">
                {p.itinerary.map(d => (
                  <li key={d.day} className="relative pl-8 pb-8 last:pb-0">
                    <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-sun ring-4 ring-bone" />
                    <p className="text-xs uppercase tracking-widest text-ink-500">Día {d.day}</p>
                    <h3 className="font-display text-2xl mt-1">{d.title}</h3>
                    <p className="text-ink-600 mt-2 leading-relaxed">{d.description}</p>
                  </li>
                ))}
              </ol>
            </>
          )}

          <h2 className="font-display text-display-md mt-20">Incluye</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {p.inclusions.map(inc => (
              <li key={inc} className="flex items-start gap-3 rounded-2xl bg-white border border-ink/5 p-4">
                <Check className="h-5 w-5 text-sun shrink-0 mt-0.5" />
                <span className="text-ink-700">{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <div className="card p-7">
            <p className="eyebrow text-sun-700">Información clave</p>

            <h3 className="font-display text-xl mt-5 flex items-center gap-2"><Anchor className="h-4 w-4 text-sun" /> {p.type === "crucero" ? "Puertos" : "Ciudades"}</h3>
            <p className="mt-2 text-ink-600 text-sm leading-relaxed">{p.ports.join(" · ")}</p>

            <h3 className="font-display text-xl mt-6 flex items-center gap-2"><Calendar className="h-4 w-4 text-sun" /> Salidas</h3>
            <p className="mt-2 text-ink-600 text-sm">
              {p.departureMonths.join(", ")} {p.departureYears.length === 1 ? `· ${p.departureYears[0]}` : `· ${p.departureYears.join(" y ")}`}
            </p>

            <h3 className="font-display text-xl mt-6">Referencia</h3>
            <p className="mt-2 text-ink-600 text-sm">viaje.mt/{p.ref}</p>

            <a href={waLink(`Hola WTC, ¿podemos agendar una llamada para hablar del paquete ${p.title}?`)}
               target="_blank" rel="noreferrer"
               className="btn-dark w-full mt-7 justify-center">
              Hablar con un asesor <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="text-xs text-ink-500 mt-4 leading-relaxed">
            Precios publicados de carácter informativo. Cotización formal sujeta
            a requerimientos específicos del cliente y disponibilidad.
          </p>
        </aside>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-x pb-24">
          <h2 className="font-display text-display-md">También podría interesarte</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(r => <PackageCard key={r.slug} p={r} />)}
          </div>
        </section>
      )}
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-widest text-white/60">{label}</dt>
      <dd className="font-display text-2xl mt-1">{value}</dd>
    </div>
  );
}
