import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { contact } from "@/data/contact";
import { waLink } from "@/lib/utils";

export default function ContactCTA() {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white p-10 lg:p-16">
        <Image
          src="/paquetes/celebrity-cruises.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <div>
            <p className="eyebrow text-sun-300 before:bg-sun-300">El siguiente paso</p>
            <h2 className="mt-6 font-display text-display-lg max-w-xl">
              ¿Listo para empezar a armar tu viaje?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
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
          </div>

          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-white/60">Habla directo con</p>
            <p className="font-display text-3xl mt-2">{contact.whatsappOwner}</p>
            <p className="text-white/70 mt-1">{contact.whatsappDisplay}</p>
            <p className="text-white/50 text-sm mt-1">{contact.hours}</p>
            <div className="mt-5 pt-5 border-t border-white/10 space-y-1 text-sm">
              <p className="text-white/70">{contact.email}</p>
              <p className="text-white/50">{contact.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
