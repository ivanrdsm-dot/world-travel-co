import Link from "next/link";
import PackageCard from "./PackageCard";
import { featuredPackages } from "@/data/packages";

export default function FeaturedPackages() {
  const items = featuredPackages();
  return (
    <section className="container-x py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="eyebrow text-sun-700">Destacados</p>
          <h2 className="mt-6 font-display text-display-lg max-w-2xl">
            Lo que más se está reservando esta temporada.
          </h2>
        </div>
        <Link href="/paquetes" className="link-underline text-ink-700">Ver los 14 paquetes →</Link>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p, i) => (
          <PackageCard key={p.slug} p={p} priority={i < 2} />
        ))}
      </div>
    </section>
  );
}
