import Link from "next/link";
import Image from "next/image";
import { Trophy, ArrowRight } from "lucide-react";

export default function WorldCupBanner() {
  return (
    <section className="container-x py-12">
      <Link href="/experiencias/mundial-2026"
            className="group relative block rounded-[2rem] overflow-hidden bg-ink text-white">
        <Image src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=2000&q=80"
               alt="" fill className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative p-10 lg:p-16 grid lg:grid-cols-[1.6fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="chip bg-sun text-white"><Trophy className="h-3 w-3" /> Hospitality oficial</span>
              <span className="chip bg-white/15 backdrop-blur text-white border border-white/20">11 jun – 19 jul 2026</span>
            </div>
            <h2 className="mt-5 font-display text-display-lg leading-[1.05] max-w-3xl">
              El Mundial 26™ se vive donde haya hospitality. <span className="italic text-sun-300">Y nosotros la tenemos en las 16 sedes.</span>
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl">
              Trophy Lounge, Pitch View, Champions Club. Desde el partido
              inaugural en el Estadio Banorte hasta la Final en MetLife Stadium.
            </p>
          </div>
          <span className="btn-primary self-start lg:self-center">
            Ver hospitality <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </section>
  );
}
