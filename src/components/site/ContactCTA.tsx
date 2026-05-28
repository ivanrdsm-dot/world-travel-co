import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { contact } from "@/data/contact";
import { waLink } from "@/lib/utils";

export default function ContactCTA() {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white p-10 lg:p-16">
        {/* Subtle radial glow — no flyer image */}
        <div className="absolute inset-0 opacity-90 pointer-events-none"
             style={{
               background:
                 "radial-gradient(60% 80% at 100% 0%, rgba(242,107,58,0.28) 0%, transparent 60%), radial-gradient(80% 60% at 0% 100%, rgba(201,161,74,0.15) 0%, transparent 60%)"
             }} />

        <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <div>
            <p className="eyebrow text-sun-300 before:bg-sun-300">El siguiente paso</p>
            <h2 className="mt-6 font-display text-display-lg text-white leading-[1.05] max-w-2xl">
              ¿Listo para empezar a <em className="text-sun-300">armar tu viaje?</em>
            </h2>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              Cuéntanos a dónde quieres ir, cuándo y con quién. En menos de 24 h
              te enviamos opciones reales con precio final — no estimaciones.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={waLink("Hola WTC, vi su sitio y quiero cotizar un viaje.")}
                 target="_blank" rel="noreferrer"
                 className="btn-primary">
                <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
              </a>
              <Link href="/contacto" className="btn-ghost text-white border-white/30 hover:bg-white hover:text-ink">
                Llenar formulario <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Office location + logo footer strip */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-2.5">
                <Image src="/brand/isotipo-primario.png" alt="WTC" width={36} height={36} className="h-9 w-9 object-contain" />
                <span className="font-sans text-lg font-extrabold tracking-tight text-white">
                  world travel<span className="text-sun-300">.</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-sun-300" />
                {contact.address}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.08] border border-white/15 p-6 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-sun-300">Habla directo con</p>
            <p className="font-display text-4xl mt-3 text-white">{contact.whatsappOwner}</p>
            <p className="text-white/80 mt-2 text-base">{contact.whatsappDisplay}</p>
            <p className="text-white/60 text-sm mt-1 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {contact.hours}
            </p>
            <div className="mt-5 pt-5 border-t border-white/10 space-y-2 text-sm">
              <p className="text-white/85 flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-sun-300" /> {contact.email}</p>
              <p className="text-white/70 flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-sun-300" /> {contact.address}</p>
            </div>
            <a href={`https://wa.me/${contact.whatsappRaw}`} target="_blank" rel="noreferrer"
               className="btn-primary w-full mt-6 justify-center text-sm">
              <MessageCircle className="h-4 w-4" /> Chatear ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
