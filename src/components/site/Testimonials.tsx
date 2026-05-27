import { Quote } from "lucide-react";

const items = [
  {
    quote: "Hicimos el crucero de Disney por Bahamas y todo, desde la cabina hasta las propinas, fue exactamente como Lau nos lo describió. Sin sorpresas.",
    author: "Mariana & Carlos",
    trip: "Disney Dream — Bahamas",
    rating: 5
  },
  {
    quote: "Mi marido y yo no éramos personas de tours, hasta que vivimos el de Italia. Bolonia fue el highlight inesperado del viaje. Gracias WTC.",
    author: "Patricia G.",
    trip: "Magia Italiana 10 días",
    rating: 5
  },
  {
    quote: "Japón con guía en español cambió la experiencia. Mis hijos siguen hablando del shibori en Arimatsu. Volveremos.",
    author: "Familia Estrada",
    trip: "Camino del Samurái",
    rating: 5
  },
  {
    quote: "Reservamos Alaska con 8 meses de anticipación tal como nos sugirieron. Subimos categoría de cabina por casi el mismo precio. Asesoría real.",
    author: "Ricardo M.",
    trip: "Norwegian Jade — Alaska",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="relative bg-sea text-white overflow-hidden">
      <div className="container-x py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-end">
          <div>
            <p className="eyebrow text-sun-300 before:bg-sun-300">Lo que dicen</p>
            <h2 className="mt-6 font-display text-display-lg">
              No vendemos viajes.<br/>
              <span className="italic text-sun-300">Vendemos regresos felices.</span>
            </h2>
          </div>
          <p className="text-lg opacity-80 leading-relaxed">
            Cada testimonio es de un viajero que regresó, nos escribió y nos
            mandó fotos. Algunos volvieron 3 veces. Ese es el negocio: gente
            que confía y trae a sus amigos.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-3xl border border-white/10 p-7 bg-white/[0.03] backdrop-blur-sm">
              <Quote className="h-6 w-6 text-sun-300" />
              <blockquote className="mt-5 text-[15px] leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <p className="font-semibold">{t.author}</p>
                <p className="text-xs text-white/60 mt-0.5">{t.trip}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
