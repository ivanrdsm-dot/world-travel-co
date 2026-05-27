import PackagesExplorer from "@/components/site/PackagesExplorer";

type SP = { type?: string; region?: string };

export const metadata = {
  title: "Paquetes de viaje · Cruceros y tours",
  description: "Explora todos los cruceros y tours organizados por World Travel Co. Caribe, Mediterráneo, Asia, Europa, Alaska y Hawái."
};

export default async function PaquetesPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  return (
    <section className="container-x pt-32 lg:pt-40 pb-24">
      <p className="eyebrow text-sun-700">Catálogo</p>
      <h1 className="mt-6 font-display text-display-xl max-w-3xl">
        Encuentra el viaje que llevas <span className="italic text-sun">tiempo</span> imaginando.
      </h1>
      <p className="mt-6 text-lg text-ink-600 max-w-2xl">
        Cruceros con las navieras top del mundo y tours con guía en español.
        Usa los filtros para reducir las opciones según tu estilo de viaje.
      </p>

      <div className="mt-12">
        <PackagesExplorer initial={{
          type:   (["crucero","tour"].includes(sp.type ?? "") ? sp.type : "all") as any,
          region: (sp.region as any) ?? "all"
        }} />
      </div>
    </section>
  );
}
