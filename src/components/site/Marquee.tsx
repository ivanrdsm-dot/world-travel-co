const brands = [
  "Disney Cruise Line",
  "Royal Caribbean",
  "Norwegian Cruise Line",
  "Celebrity Cruises",
  "Costa Cruceros",
  "Aeroméxico",
  "Frecciarossa",
  "Shinkansen"
];

export default function Marquee() {
  const items = [...brands, ...brands];
  return (
    <section className="border-y border-ink/10 bg-bone overflow-hidden">
      <div className="ticker-track py-6 text-ink-500">
        {items.map((b, i) => (
          <span key={i} className="font-display text-2xl lg:text-3xl tracking-tight">
            {b} <span className="text-sun mx-6">✱</span>
          </span>
        ))}
      </div>
    </section>
  );
}
