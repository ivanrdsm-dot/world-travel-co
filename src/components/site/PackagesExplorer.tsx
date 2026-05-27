"use client";

import { useMemo, useState } from "react";
import PackageCard from "./PackageCard";
import { packages, type Package } from "@/data/packages";
import { Search } from "lucide-react";

type Filters = {
  q: string;
  type: "all" | "crucero" | "tour";
  region: "all" | "Caribe" | "Mediterráneo" | "Europa" | "Asia" | "Norteamérica";
  flight: "all" | "yes" | "no";
  sort: "destacados" | "precio-asc" | "precio-desc" | "duracion";
};

const regions: Filters["region"][] = ["all", "Caribe", "Mediterráneo", "Europa", "Asia", "Norteamérica"];

export default function PackagesExplorer({
  initial
}: { initial?: Partial<Filters> }) {
  const [f, setF] = useState<Filters>({
    q: "", type: "all", region: "all", flight: "all", sort: "destacados",
    ...initial
  });

  const filtered = useMemo<Package[]>(() => {
    let list = packages.slice();
    if (f.type !== "all") list = list.filter(p => p.type === f.type);
    if (f.region !== "all") list = list.filter(p => p.region === f.region);
    if (f.flight !== "all") list = list.filter(p => (f.flight === "yes" ? p.flightIncluded : !p.flightIncluded));
    if (f.q.trim()) {
      const q = f.q.toLowerCase();
      list = list.filter(p =>
        [p.title, p.subtitle, p.brand, p.ship, ...p.ports, ...(p.highlights ?? [])]
          .filter(Boolean).join(" ").toLowerCase().includes(q)
      );
    }
    switch (f.sort) {
      case "precio-asc":  list.sort((a, b) => a.fromPrice - b.fromPrice); break;
      case "precio-desc": list.sort((a, b) => b.fromPrice - a.fromPrice); break;
      case "duracion":    list.sort((a, b) => b.durationDays - a.durationDays); break;
    }
    return list;
  }, [f]);

  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setF(prev => ({ ...prev, [k]: v }));

  return (
    <>
      <div className="sticky top-16 lg:top-20 z-30 bg-bone/85 backdrop-blur-md -mx-5 lg:-mx-8 xl:-mx-12 px-5 lg:px-8 xl:px-12 border-y border-ink/5">
        <div className="py-4 grid lg:grid-cols-[1fr_auto_auto_auto_auto] gap-3 items-center">
          <label className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
            <input
              value={f.q}
              onChange={e => set("q", e.target.value)}
              placeholder="Buscar destino, naviera, puerto…"
              className="w-full rounded-full border border-ink/10 bg-white pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sun"
            />
          </label>

          <Select label="Tipo" value={f.type} onChange={(v) => set("type", v as any)}
                  options={[["all","Todos"],["crucero","Cruceros"],["tour","Tours"]]} />
          <Select label="Región" value={f.region} onChange={(v) => set("region", v as any)}
                  options={regions.map(r => [r, r === "all" ? "Todas" : r] as [string, string])} />
          <Select label="Vuelo" value={f.flight} onChange={(v) => set("flight", v as any)}
                  options={[["all","Cualquiera"],["yes","Vuelo incluido"],["no","Solo terrestre"]]} />
          <Select label="Orden" value={f.sort} onChange={(v) => set("sort", v as any)}
                  options={[["destacados","Destacados"],["precio-asc","Precio ↑"],["precio-desc","Precio ↓"],["duracion","Duración"]]} />
        </div>
      </div>

      <div className="mt-8 mb-4 flex items-center justify-between text-sm text-ink-500">
        <p>{filtered.length} paquete{filtered.length === 1 ? "" : "s"} encontrado{filtered.length === 1 ? "" : "s"}</p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-ink/15 p-16 text-center">
          <p className="font-display text-2xl">Sin resultados</p>
          <p className="text-ink-500 mt-2 text-sm">Prueba quitar algún filtro o buscar otro destino.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => <PackageCard key={p.slug} p={p} priority={i < 3} />)}
        </div>
      )}
    </>
  );
}

function Select({
  label, value, onChange, options
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: [string, string][];
}) {
  return (
    <label className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest text-ink-400 pointer-events-none">
        {label}
      </span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="appearance-none rounded-full border border-ink/10 bg-white pl-[5.25rem] pr-9 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sun"
      >
        {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
      <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.53a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
    </label>
  );
}
