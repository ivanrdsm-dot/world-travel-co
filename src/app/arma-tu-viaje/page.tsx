"use client";

import { useState } from "react";
import { Plane, Hotel, Car, Music, Trophy, Ship, Sparkles, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/utils";

type Module = "vuelo" | "hotel" | "transporte" | "evento" | "mundial" | "crucero" | "experiencia";

const modules: { id: Module; label: string; icon: any; description: string }[] = [
  { id: "vuelo",       label: "Vuelo privado",   icon: Plane,    description: "Jet o helicóptero entre ciudades o destinos" },
  { id: "hotel",       label: "Hotel 5★",         icon: Hotel,    description: "Live Aqua, Grand Fiesta Americana o boutique" },
  { id: "transporte",  label: "Transporte VIP",   icon: Car,      description: "Sprinter, Maybach, Range Rover con chofer" },
  { id: "evento",      label: "Concierto",        icon: Music,    description: "Palco VIP, hospitality o meet & greet" },
  { id: "mundial",     label: "Mundial 2026",     icon: Trophy,   description: "Hospitality oficial FIFA en cualquier sede" },
  { id: "crucero",     label: "Crucero",          icon: Ship,     description: "Cualquiera de las 15 navieras top" },
  { id: "experiencia", label: "Experiencia única",icon: Sparkles, description: "Cata privada, helicóptero, cena con chef estrella" }
];

export default function ArmaTuViajePage() {
  const [selected, setSelected] = useState<Set<Module>>(new Set());
  const [data, setData] = useState({
    nombre: "", whatsapp: "", personas: "2", fechas: "", presupuesto: "", detalles: ""
  });

  const toggle = (m: Module) => {
    const s = new Set(selected);
    s.has(m) ? s.delete(m) : s.add(m);
    setSelected(s);
  };

  const sendWA = () => {
    const items = Array.from(selected).map(s => modules.find(m => m.id === s)?.label).join(", ");
    const msg = [
      `Hola WTC, soy ${data.nombre || "[nombre]"} y quiero armar un viaje 360°.`,
      "",
      `🎯 Quiero incluir: ${items || "—"}`,
      `👥 Personas: ${data.personas}`,
      `📅 Fechas: ${data.fechas || "flexible"}`,
      `💰 Presupuesto: ${data.presupuesto || "—"}`,
      "",
      data.detalles ? `Detalles:\n${data.detalles}` : "",
      data.whatsapp ? `Mi WhatsApp: ${data.whatsapp}` : ""
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="container-x pt-32 lg:pt-40 pb-24">
      <p className="eyebrow text-sun-700">Concierge 360°</p>
      <h1 className="mt-6 font-display text-display-xl max-w-4xl leading-[1.02]">
        Arma tu viaje como tú lo imaginas.<br/>
        <span className="italic text-sun">Nosotros lo orquestamos.</span>
      </h1>
      <p className="mt-8 text-lg text-ink-600 max-w-2xl leading-relaxed">
        Elige los módulos que necesitas. Te respondemos con propuesta concreta,
        proveedores y precio en menos de 24 horas hábiles.
      </p>

      {/* MODULE SELECTION */}
      <div className="mt-14">
        <p className="text-xs uppercase tracking-widest text-ink-500 mb-5 font-semibold">1 · Elige los componentes de tu viaje</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map(m => {
            const active = selected.has(m.id);
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => toggle(m.id)}
                className={`text-left rounded-3xl border p-6 transition-all ${
                  active
                    ? "bg-ink text-white border-ink shadow-glow"
                    : "bg-white border-ink/10 hover:border-sun"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className={`inline-grid h-12 w-12 place-items-center rounded-2xl ${
                    active ? "bg-sun text-white" : "bg-sun-100 text-sun-700"
                  }`}>
                    <m.icon className="h-5 w-5" />
                  </span>
                  <span className={`h-7 w-7 rounded-full grid place-items-center text-sm ${
                    active ? "bg-sun text-white" : "border border-ink/15 text-ink-400"
                  }`}>
                    {active ? "✓" : "+"}
                  </span>
                </div>
                <h3 className="font-display text-xl mt-5">{m.label}</h3>
                <p className={`mt-2 text-sm ${active ? "text-white/70" : "text-ink-500"}`}>{m.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* DETAILS */}
      <div className="mt-14 rounded-[2rem] bg-white border border-ink/5 shadow-soft p-6 lg:p-10">
        <p className="text-xs uppercase tracking-widest text-ink-500 mb-5 font-semibold">2 · Cuéntanos más</p>
        <div className="grid sm:grid-cols-2 gap-5">
          <F label="Nombre"           value={data.nombre}       onChange={v => setData(d => ({ ...d, nombre: v }))} />
          <F label="WhatsApp"          value={data.whatsapp}     onChange={v => setData(d => ({ ...d, whatsapp: v }))} />
          <F label="Personas"          value={data.personas}     onChange={v => setData(d => ({ ...d, personas: v }))} />
          <F label="Fechas tentativas" value={data.fechas}       onChange={v => setData(d => ({ ...d, fechas: v }))} placeholder="ej. 1ª quincena de julio" />
          <F label="Presupuesto"       value={data.presupuesto}  onChange={v => setData(d => ({ ...d, presupuesto: v }))} placeholder="USD/MXN total o por persona" className="sm:col-span-2" />
        </div>
        <label className="block mt-5">
          <span className="text-xs uppercase tracking-widest text-ink-500 font-semibold">¿Algo más que debamos saber?</span>
          <textarea rows={4} value={data.detalles} onChange={e => setData(d => ({ ...d, detalles: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-bone px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sun resize-none"
                    placeholder="ej. luna de miel, cumpleaños de mi mamá, equipo de 8 ejecutivos, alergias…" />
        </label>

        <button
          type="button"
          onClick={sendWA}
          disabled={selected.size === 0 || !data.nombre}
          className="btn-primary w-full mt-7 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <MessageCircle className="h-4 w-4" />
          {selected.size === 0 ? "Elige al menos un módulo" : "Enviar a WTC por WhatsApp →"}
        </button>
        <p className="text-xs text-ink-500 text-center mt-3">
          Respondemos en &lt; 1 hora hábil. Sin compromiso de compra.
        </p>
      </div>
    </section>
  );
}

function F({ label, value, onChange, placeholder, className = "" }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-widest text-ink-500 font-semibold">{label}</span>
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
             className="mt-2 w-full rounded-full border border-ink/10 bg-bone px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sun" />
    </label>
  );
}
