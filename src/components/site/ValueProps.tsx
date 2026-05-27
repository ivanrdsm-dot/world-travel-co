import { Headphones, ShieldCheck, Sparkles, Wallet } from "lucide-react";

const items = [
  { icon: Headphones,  title: "Asesoría 1 a 1",       text: "Un humano que conoce tu destino, no un chatbot. Antes, durante y después del viaje." },
  { icon: ShieldCheck, title: "Reservas seguras",     text: "Trabajamos con las navieras y operadores líderes del mundo. Pagos protegidos." },
  { icon: Sparkles,    title: "Experiencias curadas", text: "Cada itinerario está hecho por viajeros, para viajeros. Sin paquetes genéricos." },
  { icon: Wallet,      title: "Precio transparente",  text: "Lo que ves es lo que pagas. Impuestos y propinas siempre desglosados." }
];

export default function ValueProps() {
  return (
    <section className="container-x py-24">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-end">
        <div>
          <p className="eyebrow text-sun-700">Por qué WTC</p>
          <h2 className="mt-6 font-display text-display-lg text-ink-900">
            Una agencia que <span className="italic text-sun">viaja contigo</span>, no que te vende un boleto.
          </h2>
        </div>
        <p className="text-lg text-ink-600 leading-relaxed">
          Llevamos años armando los viajes con los que la gente vuelve y nos
          escribe gracias. No vendemos catálogos, vendemos memorias bien
          planeadas — con la naviera correcta, el hotel correcto y el guía que
          de verdad sabe.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="card p-7">
            <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-sun-100 text-sun-700">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-2xl mt-5">{title}</h3>
            <p className="text-ink-600 mt-2 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
