import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/blog";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const ogTitle = encodeURIComponent(p.title);
  return {
    title: p.title,
    description: p.excerpt,
    openGraph: {
      title: p.title,
      description: p.excerpt,
      images: [`/api/og?title=${ogTitle}&eyebrow=Diario+WTC+%C2%B7+${encodeURIComponent(p.category)}&accent=ink`]
    }
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const others = posts.filter(o => o.slug !== p.slug).slice(0, 2);

  return (
    <article>
      <header className="container-x pt-32 lg:pt-40 max-w-3xl">
        <Link href="/blog" className="text-sm text-ink-500 hover:text-ink">← Volver al diario</Link>
        <div className="mt-6 flex items-center gap-2 text-sm text-ink-500">
          <span className="chip">{p.category}</span>
          <span>· {p.readingMinutes} min · {new Date(p.publishedAt).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
        <h1 className="mt-6 font-display text-display-xl leading-[1.02]">{p.title}</h1>
        <p className="mt-6 text-xl text-ink-600 leading-relaxed">{p.excerpt}</p>
      </header>

      <div className="container-x mt-14 max-w-5xl">
        <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden">
          <Image src={p.cover} alt={p.title} fill priority className="object-cover" />
        </div>
      </div>

      <div className="container-x mt-16 max-w-3xl space-y-10">
        {p.body.map((b, i) => (
          <section key={i}>
            {b.heading && <h2 className="font-display text-display-md">{b.heading}</h2>}
            <p className="mt-4 text-lg text-ink-700 leading-[1.75]">{b.text}</p>
          </section>
        ))}
      </div>

      {others.length > 0 && (
        <section className="container-x mt-24 pb-24">
          <h2 className="font-display text-display-md">Sigue leyendo</h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {others.map(o => (
              <Link key={o.slug} href={`/blog/${o.slug}`} className="group block card">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={o.cover} alt={o.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="chip">{o.category}</span>
                  <h3 className="mt-3 font-display text-2xl group-hover:text-sun transition-colors">{o.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
