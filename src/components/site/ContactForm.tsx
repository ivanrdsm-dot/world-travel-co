"use client";

import { useState } from "react";
import { contact } from "@/data/contact";
import { waLink } from "@/lib/utils";
import { MessageCircle, Send } from "lucide-react";

const destinos = ["Caribe", "Mediterráneo", "Europa", "Japón", "Corea", "Alaska", "Hawái", "Aún no lo sé"];
const tipos    = ["Crucero", "Tour cultural", "Luna de miel", "Familia", "Grupo", "Sorpréndeme"];

export default function ContactForm() {
  const [data, setData] = useState({
    nombre: "", email: "", telefono: "",
    destino: "Caribe", tipo: "Crucero", personas: "2", mes: "", presupuesto: "",
    mensaje: ""
  });
  const [sent, setSent] = useState(false);

  const handleWA = () => {
    const lines = [
      `Hola WTC, soy ${data.nombre || "[nombre]"}.`,
      `Me interesa: ${data.tipo} a ${data.destino}.`,
      `Personas: ${data.personas}. Mes tentativo: ${data.mes || "flexible"}.`,
      data.presupuesto ? `Presupuesto aprox: ${data.presupuesto}.` : "",
      data.mensaje ? `Detalles: ${data.mensaje}` : "",
      data.email ? `Email: ${data.email}` : "",
      data.telefono ? `Tel: ${data.telefono}` : ""
    ].filter(Boolean).join("\n");
    window.open(waLink(lines), "_blank");
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Cotización · ${data.tipo} a ${data.destino}`;
    const body = [
      `Nombre: ${data.nombre}`,
      `Email: ${data.email}`,
      `Tel: ${data.telefono}`,
      "",
      `Tipo: ${data.tipo}`,
      `Destino: ${data.destino}`,
      `Personas: ${data.personas}`,
      `Mes: ${data.mes}`,
      `Presupuesto: ${data.presupuesto}`,
      "",
      data.mensaje
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const update = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData(d => ({ ...d, [k]: e.target.value }));

  return (
    <form onSubmit={handleEmail} className="rounded-3xl bg-white border border-ink/5 shadow-soft p-6 lg:p-10">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nombre" required value={data.nombre} onChange={update("nombre")} />
        <Field label="Email" type="email" required value={data.email} onChange={update("email")} />
        <Field label="Teléfono / WhatsApp" value={data.telefono} onChange={update("telefono")} />
        <SelectF label="Tipo de viaje" value={data.tipo} onChange={update("tipo")} options={tipos} />
        <SelectF label="Destino" value={data.destino} onChange={update("destino")} options={destinos} />
        <Field label="Personas" type="number" min="1" value={data.personas} onChange={update("personas")} />
        <Field label="Mes tentativo" value={data.mes} onChange={update("mes")} placeholder="Ej. Diciembre 2026" />
        <Field label="Presupuesto aprox." value={data.presupuesto} onChange={update("presupuesto")} placeholder="USD/MXN o rango" />
      </div>
      <label className="block mt-5">
        <span className="text-xs uppercase tracking-widest text-ink-500 font-semibold">Detalles del viaje soñado</span>
        <textarea rows={4} value={data.mensaje} onChange={update("mensaje")}
                  className="mt-2 w-full rounded-2xl border border-ink/10 bg-bone px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sun resize-none" />
      </label>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <button type="button" onClick={handleWA} className="btn-primary flex-1 justify-center">
          <MessageCircle className="h-4 w-4" /> Enviar por WhatsApp
        </button>
        <button type="submit" className="btn-dark flex-1 justify-center">
          <Send className="h-4 w-4" /> Enviar por email
        </button>
      </div>

      {sent && (
        <p className="mt-5 text-sm text-sun-700">
          ✓ Abrimos tu cliente de correo. Si no se abrió, escríbenos directo a <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>.
        </p>
      )}

      <p className="text-xs text-ink-500 mt-6">
        Tus datos solo se usan para responder a tu cotización. No compartimos información con terceros.
      </p>
    </form>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-ink-500 font-semibold">{label}{props.required && " *"}</span>
      <input {...props}
             className="mt-2 w-full rounded-full border border-ink/10 bg-bone px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sun" />
    </label>
  );
}

function SelectF({ label, options, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-ink-500 font-semibold">{label}</span>
      <select {...props}
              className="mt-2 w-full rounded-full border border-ink/10 bg-bone px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sun appearance-none">
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
