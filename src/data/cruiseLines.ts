export type CruiseLine = {
  slug: string;
  name: string;
  segment: "Familiar" | "Premium" | "Lujo" | "Expedición" | "Boutique";
  bestFor: string;
  signatureShips: string[];
  routes: string[];
  cover: string;
};

// Las navieras con las que WTC opera reservas directas.
// Trabajamos con las 15 líneas más importantes del mundo, no solo las 4 destacadas.

export const cruiseLines: CruiseLine[] = [
  {
    slug: "disney-cruise-line",
    name: "Disney Cruise Line",
    segment: "Familiar",
    bestFor: "Familias con niños, primera experiencia en crucero, magia premium.",
    signatureShips: ["Disney Wish", "Disney Treasure", "Disney Dream", "Disney Fantasy", "Disney Magic"],
    routes: ["Caribe", "Bahamas", "Mediterráneo", "Alaska"],
    cover: "/paquetes/disney-cruise-line.jpg"
  },
  {
    slug: "royal-caribbean",
    name: "Royal Caribbean",
    segment: "Familiar",
    bestFor: "Aventureros que quieren los barcos más grandes, parques acuáticos y rocódromos.",
    signatureShips: ["Icon of the Seas", "Wonder of the Seas", "Symphony of the Seas", "Utopia of the Seas"],
    routes: ["Caribe", "Mediterráneo", "Bahamas", "Europa"],
    cover: "/paquetes/royal-caribbean.jpg"
  },
  {
    slug: "norwegian-cruise-line",
    name: "Norwegian Cruise Line",
    segment: "Premium",
    bestFor: "Freestyle Cruising: sin horarios fijos, sin código de vestimenta, libertad total.",
    signatureShips: ["Norwegian Aqua", "Norwegian Prima", "Norwegian Viva", "Norwegian Joy"],
    routes: ["Alaska", "Caribe", "Hawái", "Europa"],
    cover: "/paquetes/norwegian-cruise-line.jpg"
  },
  {
    slug: "celebrity-cruises",
    name: "Celebrity Cruises",
    segment: "Premium",
    bestFor: "Adultos sofisticados, gastronomía premium, sin niños en zonas seleccionadas.",
    signatureShips: ["Celebrity Ascent", "Celebrity Beyond", "Celebrity Edge", "Celebrity Apex"],
    routes: ["Caribe", "Mediterráneo", "Islas Griegas", "Japón", "Alaska"],
    cover: "/paquetes/celebrity-cruises.jpg"
  },
  {
    slug: "msc-cruises",
    name: "MSC Cruises",
    segment: "Premium",
    bestFor: "Estilo europeo, valor incomparable y rutas mediterráneas.",
    signatureShips: ["MSC World America", "MSC Seascape", "MSC Virtuosa", "MSC Bellissima"],
    routes: ["Mediterráneo", "Caribe", "Norte de Europa", "Emiratos"],
    cover: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80"
  },
  {
    slug: "costa-cruceros",
    name: "Costa Cruceros",
    segment: "Premium",
    bestFor: "Pasión italiana, pensión completa y rutas mediterráneas.",
    signatureShips: ["Costa Smeralda", "Costa Toscana", "Costa Esmeralda"],
    routes: ["Mediterráneo", "Norte de Europa", "Emiratos"],
    cover: "/paquetes/costa-esmeralda.jpg"
  },
  {
    slug: "carnival",
    name: "Carnival Cruise Line",
    segment: "Familiar",
    bestFor: "Fun Ships divertidos para jóvenes y grupos, mejor precio del mercado.",
    signatureShips: ["Carnival Jubilee", "Carnival Celebration", "Mardi Gras"],
    routes: ["Caribe", "Bahamas", "México (Cozumel)"],
    cover: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80"
  },
  {
    slug: "princess-cruises",
    name: "Princess Cruises",
    segment: "Premium",
    bestFor: "Cruceros temáticos, rutas en Alaska y experiencias gastronómicas.",
    signatureShips: ["Sun Princess", "Royal Princess", "Sky Princess"],
    routes: ["Alaska", "Caribe", "Mediterráneo", "Asia"],
    cover: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80"
  },
  {
    slug: "holland-america-line",
    name: "Holland America Line",
    segment: "Premium",
    bestFor: "Estilo holandés clásico, viajes pausados de larga duración.",
    signatureShips: ["Rotterdam VII", "Koningsdam", "Nieuw Statendam"],
    routes: ["Alaska", "Caribe", "Mediterráneo", "Vuelta al mundo"],
    cover: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80"
  },
  {
    slug: "virgin-voyages",
    name: "Virgin Voyages",
    segment: "Boutique",
    bestFor: "Adults Only (18+), estética rockstar y restaurantes premiados.",
    signatureShips: ["Scarlet Lady", "Valiant Lady", "Resilient Lady", "Brilliant Lady"],
    routes: ["Caribe", "Mediterráneo"],
    cover: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80"
  },
  {
    slug: "cunard",
    name: "Cunard Line",
    segment: "Lujo",
    bestFor: "Transatlánticos clásicos, etiqueta formal y elegancia británica.",
    signatureShips: ["Queen Mary 2", "Queen Anne", "Queen Victoria", "Queen Elizabeth"],
    routes: ["Transatlántico (NYC–Southampton)", "Vuelta al mundo", "Caribe"],
    cover: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80"
  },
  {
    slug: "viking",
    name: "Viking Ocean Cruises",
    segment: "Lujo",
    bestFor: "Adults Only, estética escandinava sobria, excursiones incluidas.",
    signatureShips: ["Viking Octantis", "Viking Polaris", "Viking Sky"],
    routes: ["Mediterráneo", "Norte de Europa", "Antártida", "Vuelta al mundo"],
    cover: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80"
  },
  {
    slug: "silversea",
    name: "Silversea",
    segment: "Lujo",
    bestFor: "All-inclusive ultra-lujo, mayordomo personal en todas las suites.",
    signatureShips: ["Silver Nova", "Silver Ray", "Silver Dawn"],
    routes: ["Mediterráneo", "Antártida", "Asia", "África"],
    cover: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80"
  },
  {
    slug: "seabourn",
    name: "Seabourn",
    segment: "Lujo",
    bestFor: "Yates de boutique ultra-lujo, máximo 600 huéspedes, todas las suites.",
    signatureShips: ["Seabourn Pursuit", "Seabourn Venture", "Seabourn Encore"],
    routes: ["Mediterráneo", "Antártida", "Galápagos", "Kimberley"],
    cover: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80"
  },
  {
    slug: "ritz-carlton-yacht",
    name: "The Ritz-Carlton Yacht Collection",
    segment: "Lujo",
    bestFor: "El estándar Ritz-Carlton en el mar, yates boutique.",
    signatureShips: ["Evrima", "Ilma", "Luminara"],
    routes: ["Mediterráneo", "Caribe", "Costa Rica & Panamá"],
    cover: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80"
  }
];
