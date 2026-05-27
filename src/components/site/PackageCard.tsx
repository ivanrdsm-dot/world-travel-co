import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plane, Ship, Calendar } from "lucide-react";
import type { Package } from "@/data/packages";
import { formatMXN, formatUSD } from "@/lib/utils";

export default function PackageCard({ p, priority }: { p: Package; priority?: boolean }) {
  const price = p.currency === "MXN" ? formatMXN(p.fromPrice) : formatUSD(p.fromPrice);
  const tax = p.currency === "MXN" ? formatMXN(p.fromTax) : formatUSD(p.fromTax);
  const Icon = p.type === "crucero" ? Ship : Plane;

  return (
    <Link
      href={`/paquetes/${p.slug}`}
      className="group relative block card hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={p.hero}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="chip bg-white/95 text-ink">
            <Icon className="h-3 w-3" /> {p.type === "crucero" ? "Crucero" : "Tour"}
          </span>
          {p.flightIncluded && (
            <span className="chip bg-sun text-white">✈︎ Vuelo incluido</span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-[11px] uppercase tracking-[0.22em] opacity-80">{p.brand ?? p.region}</p>
          <h3 className="font-display text-3xl lg:text-4xl mt-1 leading-none">{p.title}</h3>
          <p className="mt-1 text-sm opacity-90">{p.subtitle}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-ink-500">
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.durationDays} días · {p.durationNights} noches</span>
          {p.nextDeparture && <span>· Próx. salida {p.nextDeparture}</span>}
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-ink-500">Desde</p>
            <p className="font-display text-2xl text-ink-900">{price} <span className="text-sm text-ink-500 font-sans">+ {tax} imp</span></p>
            <p className="text-[11px] text-ink-500 mt-0.5">{p.pricingNote}</p>
          </div>
          <span className="h-11 w-11 rounded-full bg-ink-100 grid place-items-center group-hover:bg-sun group-hover:text-white transition-colors">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
