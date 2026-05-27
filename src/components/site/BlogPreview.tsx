import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/blog";

export default function BlogPreview() {
  const top = posts.slice(0, 3);
  return (
    <section className="container-x py-24">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <p className="eyebrow text-sun-700">Guías</p>
          <h2 className="mt-6 font-display text-display-lg max-w-2xl">
            Para que viajes sabiendo, no improvisando.
          </h2>
        </div>
        <Link href="/blog" className="link-underline text-ink-700">Ir al blog →</Link>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {top.map((p, i) => (
          <Link key={p.slug} href={`/blog/${p.slug}`}
                className={`group block card overflow-hidden ${i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}`}>
            <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
              <Image src={p.cover} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-ink-500">
                <span className="chip">{p.category}</span>
                <span>· {p.readingMinutes} min</span>
              </div>
              <h3 className={`mt-4 font-display ${i === 0 ? "text-3xl" : "text-2xl"} leading-tight group-hover:text-sun transition-colors`}>
                {p.title}
              </h3>
              <p className="mt-3 text-ink-600 text-sm leading-relaxed">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
