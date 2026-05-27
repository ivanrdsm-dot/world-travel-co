import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x pt-40 pb-24 text-center">
      <p className="eyebrow text-sun-700 justify-center inline-flex">404</p>
      <h1 className="mt-6 font-display text-display-xl">Esta ruta no existe.</h1>
      <p className="mt-4 text-lg text-ink-600 max-w-md mx-auto">
        Pero hay cientos de rutas reales en el mundo esperándote. Empieza por nuestro catálogo.
      </p>
      <Link href="/paquetes" className="btn-primary mt-10">Ver paquetes →</Link>
    </section>
  );
}
