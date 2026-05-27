import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/blog";

export const metadata = {
  title: "Guías de viaje",
  description: "Artículos, tips y guías honestas para planear mejor tu próximo viaje."
};

export default function BlogPage() {
  const [feature, ...rest] = posts;
  return (
    <section className="container-x pt-32 lg:pt-40 pb-24">
      <p className="eyebrow text-sun-700">Diario WTC</p>
      <h1 className="mt-6 font-display text-display-xl max-w-3xl">
        Guías de viaje <span className="italic text-sun">sin paja</span>.
      </h1>
      <p className="mt-6 text-lg text-ink-600 max-w-2xl">
        Lo que un asesor de WTC te diría en una llamada de 30 minutos, pero por escrito.
      </p>

      {/* featured */}
      <Link href={`/blog/${feature.slug}`}
            className="group block mt-16 grid lg:grid-cols-2 gap-10 items-center rounded-[2rem] overflow-hidden">
        <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-[2rem] overflow-hidden">
          <Image src={feature.cover} alt={feature.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="px-2">
          <div className="flex items-center gap-2 text-sm text-ink-500">
            <span className="chip">{feature.category}</span>
            <span>· {feature.readingMinutes} min · {new Date(feature.publishedAt).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <h2 className="mt-5 font-display text-display-lg group-hover:text-sun transition-colors">{feature.title}</h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">{feature.excerpt}</p>
          <span className="mt-8 inline-flex items-center gap-2 link-underline text-ink-700">Leer la guía →</span>
        </div>
      </Link>

      <div className="mt-20 grid lg:grid-cols-3 gap-6">
        {rest.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block card">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={p.cover} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-ink-500">
                <span className="chip">{p.category}</span>
                <span>· {p.readingMinutes} min</span>
              </div>
              <h3 className="mt-3 font-display text-2xl group-hover:text-sun transition-colors">{p.title}</h3>
              <p className="mt-2 text-ink-600 text-sm leading-relaxed">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
