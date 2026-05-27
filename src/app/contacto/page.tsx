import ContactForm from "@/components/site/ContactForm";
import { contact } from "@/data/contact";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contacto · Cotiza tu viaje",
  description: "Cotiza tu próximo viaje con WTC. WhatsApp, email y formulario de contacto."
};

export default function ContactoPage() {
  return (
    <section className="container-x pt-32 lg:pt-40 pb-24">
      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-16">
        <div>
          <p className="eyebrow text-sun-700">Hablemos</p>
          <h1 className="mt-6 font-display text-display-xl leading-[1.02]">
            Cuéntanos a dónde quieres ir.<br/>
            <span className="italic text-sun">El resto lo armamos nosotros.</span>
          </h1>
          <p className="mt-8 text-lg text-ink-600 max-w-xl leading-relaxed">
            Llena el formulario, escríbenos por WhatsApp o mándanos un email.
            En menos de 24 horas hábiles tendrás una propuesta real con precio
            final, hoteles, vuelos y todo lo que necesitas.
          </p>

          <div className="mt-12 space-y-5">
            <Row icon={MessageCircle} label="WhatsApp" value={contact.whatsappDisplay}
                 sub={`${contact.whatsappOwner} · respuesta < 1 h`}
                 href={`https://wa.me/${contact.whatsappRaw}`} />
            <Row icon={Mail} label="Email" value={contact.email}
                 href={`mailto:${contact.email}`} />
            <Row icon={MapPin} label="Oficina" value={contact.address} sub={contact.hours} />
            <Row icon={Clock} label="Horario de atención" value={contact.hours} />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function Row({ icon: Icon, label, value, sub, href }:
  { icon: any; label: string; value: string; sub?: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 group">
      <span className="h-12 w-12 rounded-2xl bg-sun-100 text-sun-700 grid place-items-center shrink-0 group-hover:bg-sun group-hover:text-white transition-colors">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-ink-500">{label}</p>
        <p className="font-display text-2xl mt-0.5">{value}</p>
        {sub && <p className="text-sm text-ink-500 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
  return href
    ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a>
    : content;
}
