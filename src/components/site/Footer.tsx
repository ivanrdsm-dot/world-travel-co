import Link from "next/link";
import Image from "next/image";
import { contact } from "@/data/contact";
import { Instagram, Facebook, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-ink text-ink-200">
      <div className="container-x py-20 grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/brand/isotipo.png" alt="WTC" width={48} height={48} className="invert" />
            <span className="font-sans text-2xl font-extrabold tracking-tight text-white">world travel<span className="text-sun">.</span></span>
          </Link>
          <p className="mt-6 text-ink-300 leading-relaxed max-w-md">
            Diseñamos viajes que se sienten hechos a la medida. Cruceros, tours
            culturales y experiencias de lujo con asesoría personalizada de
            principio a fin.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href={contact.social.instagram} target="_blank" rel="noreferrer"
               className="h-10 w-10 grid place-items-center rounded-full border border-ink-700 hover:bg-sun hover:border-sun text-white transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={contact.social.facebook} target="_blank" rel="noreferrer"
               className="h-10 w-10 grid place-items-center rounded-full border border-ink-700 hover:bg-sun hover:border-sun text-white transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={`mailto:${contact.email}`}
               className="h-10 w-10 grid place-items-center rounded-full border border-ink-700 hover:bg-sun hover:border-sun text-white transition-colors">
              <Mail className="h-4 w-4" />
            </a>
            <a href={`https://wa.me/${contact.whatsappRaw}`} target="_blank" rel="noreferrer"
               className="h-10 w-10 grid place-items-center rounded-full border border-ink-700 hover:bg-sun hover:border-sun text-white transition-colors">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-ink-400 mb-5">Experiencias 360°</h4>
          <ul className="space-y-3">
            <li><Link href="/experiencias/mundial-2026" className="hover:text-white">Mundial 2026</Link></li>
            <li><Link href="/experiencias/hoteles"      className="hover:text-white">Hoteles</Link></li>
            <li><Link href="/experiencias/aviacion"     className="hover:text-white">Jets privados</Link></li>
            <li><Link href="/experiencias/transporte"   className="hover:text-white">Transporte VIP</Link></li>
            <li><Link href="/experiencias/conciertos"   className="hover:text-white">Conciertos</Link></li>
            <li><Link href="/experiencias/cruceros"     className="hover:text-white">Cruceros</Link></li>
            <li><Link href="/arma-tu-viaje"             className="hover:text-white">Arma tu viaje</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-ink-400 mb-5">Catálogo</h4>
          <ul className="space-y-3">
            <li><Link href="/paquetes" className="hover:text-white">Todos los paquetes</Link></li>
            <li><Link href="/paquetes?type=crucero" className="hover:text-white">Cruceros disponibles</Link></li>
            <li><Link href="/paquetes?type=tour" className="hover:text-white">Tours con vuelo</Link></li>
            <li><Link href="/paquetes?region=Caribe" className="hover:text-white">Caribe</Link></li>
            <li><Link href="/paquetes?region=Europa" className="hover:text-white">Europa</Link></li>
            <li><Link href="/blog" className="hover:text-white">Diario WTC</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-ink-400 mb-5">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-1 text-sun" /><span>{contact.whatsappDisplay}<br/><span className="text-ink-400">{contact.whatsappOwner} · WhatsApp</span></span></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-1 text-sun" /><span>{contact.email}</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 text-sun" /><span>{contact.address}<br/><span className="text-ink-400">{contact.hours}</span></span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800/60">
        <div className="container-x py-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <p>© {new Date().getFullYear()} World Travel Co. Todos los derechos reservados.</p>
          <p className="opacity-80">Precios en MXN/USD por persona en ocupación doble, sujetos a disponibilidad y cambio sin previo aviso.</p>
        </div>
      </div>
    </footer>
  );
}
