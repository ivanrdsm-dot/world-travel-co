export type Currency = "MXN" | "USD";

export type Package = {
  slug: string;
  type: "crucero" | "tour";
  region: "Caribe" | "Mediterráneo" | "Europa" | "Asia" | "Norteamérica" | "Oceanía";
  brand?: string;                 // Disney, Royal Caribbean, Celebrity, Norwegian, Costa…
  ship?: string;
  title: string;                  // CARIBE, JAPÓN, MAGIA ITALIANA…
  subtitle: string;               // Línea de naviera o "El camino del samurái"
  hero: string;                   // /paquetes/xxx.jpg
  gallery?: string[];
  durationDays: number;
  durationNights: number;
  fromPrice: number;
  fromTax: number;
  currency: Currency;
  flightIncluded: boolean;
  cabinNote?: string;             // INTERIOR / OCEAN VIEW / HABITACIÓN DOBLE
  pricingNote: string;            // "por persona en cabina interior"
  departureMonths: string[];      // ["AGO","SEP","OCT",…]
  departureYears: number[];
  nextDeparture?: string;         // "08 AGO 2026"
  ports: string[];
  highlights: string[];
  inclusions: string[];
  itinerary?: { day: number; title: string; description: string }[];
  ref: string;                    // viaje.mt/XXXXX
  badges?: string[];              // ["Vuelo incluido", "Pensión completa", "Estándar"]
};

export const packages: Package[] = [
  // ─────────────────────────────  CRUCEROS  ─────────────────────────────
  {
    slug: "celebrity-caribe-ascent",
    type: "crucero",
    region: "Caribe",
    brand: "Celebrity Cruises",
    ship: "Celebrity Ascent®",
    title: "Caribe",
    subtitle: "Celebrity Ascent®",
    hero: "/paquetes/celebrity-cruises.jpg",
    durationDays: 11,
    durationNights: 10,
    fromPrice: 16960,
    fromTax: 8153,
    currency: "MXN",
    flightIncluded: false,
    cabinNote: "D1 · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["DIC"],
    departureYears: [2026],
    nextDeparture: "14 DIC 2026",
    ports: ["Fort Lauderdale", "Philipsburg", "Port Castries", "Saint George"],
    highlights: [
      "11 días a bordo del Celebrity Ascent®, el más nuevo de la flota Edge Series.",
      "Islas paradisíacas de las Antillas Menores con aguas turquesa.",
      "Servicio Modern Luxury™ con gastronomía a cargo de chefs Michelin.",
      "Suites con vistas al mar, spa Canyon Ranch® y entretenimiento de Broadway."
    ],
    inclusions: [
      "Cabina interior por persona en ocupación doble",
      "Pensión completa a bordo (desayuno, comida, cena y snacks)",
      "Entretenimiento, gimnasio y piscinas",
      "Asistencia 24/7 de WTC durante el viaje"
    ],
    ref: "60803",
    badges: ["Edge Series"]
  },
  {
    slug: "celebrity-islas-griegas-infinity",
    type: "crucero",
    region: "Mediterráneo",
    brand: "Celebrity Cruises",
    ship: "Celebrity Infinity®",
    title: "Islas Griegas",
    subtitle: "Celebrity Infinity®",
    hero: "/paquetes/celebrity-cruises.jpg",
    durationDays: 9,
    durationNights: 7,
    fromPrice: 20243,
    fromTax: 8360,
    currency: "MXN",
    flightIncluded: false,
    cabinNote: "I2 · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["AGO"],
    departureYears: [2027],
    nextDeparture: "08 AGO 2027",
    ports: ["Pireo", "Mykonos", "Kusadasi", "Rodas", "Santorini"],
    highlights: [
      "Recorre la cuna de la civilización occidental por el Mar Egeo.",
      "Atardeceres en Santorini y noches blancas en Mykonos.",
      "Ruinas de Éfeso desde Kusadasi y la fortaleza medieval de Rodas.",
      "Cocina mediterránea premium y bares con vista al mar."
    ],
    inclusions: [
      "7 noches a bordo del Celebrity Infinity®",
      "Todas las comidas a bordo",
      "Excursiones opcionales en cada puerto",
      "Asesoría experta WTC pre y post viaje"
    ],
    ref: "60838",
    badges: []
  },
  {
    slug: "celebrity-japon-millennium",
    type: "crucero",
    region: "Asia",
    brand: "Celebrity Cruises",
    ship: "Celebrity Millennium®",
    title: "Japón",
    subtitle: "Celebrity Millennium®",
    hero: "/paquetes/celebrity-cruises.jpg",
    durationDays: 14,
    durationNights: 13,
    fromPrice: 26617,
    fromTax: 7171,
    currency: "MXN",
    flightIncluded: false,
    cabinNote: "11 · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["JUL"],
    departureYears: [2027],
    nextDeparture: "25 JUL 2027",
    ports: ["Tokio", "Shimizu", "Kioto", "Kochi", "Busan", "Hakodate", "Aomori"],
    highlights: [
      "Templos milenarios en Kioto y la electrizante Tokio.",
      "Cruza el Mar de Japón hasta Busan, Corea del Sur.",
      "Hakodate y Aomori, el norte salvaje y gastronómico.",
      "Excursiones culturales con guías locales."
    ],
    inclusions: [
      "13 noches en cabina interior por persona en ocupación doble",
      "Comidas y bebidas no alcohólicas a bordo",
      "Espectáculos, gym y piscinas climatizadas",
      "Coordinación de traslados de WTC"
    ],
    ref: "60849",
    badges: []
  },
  {
    slug: "disney-caribe-magic",
    type: "crucero",
    region: "Caribe",
    brand: "Disney Cruise Line",
    ship: "Disney Magic®",
    title: "Caribe",
    subtitle: "Disney Magic®",
    hero: "/paquetes/disney-cruise-line.jpg",
    durationDays: 12,
    durationNights: 11,
    fromPrice: 1160,
    fromTax: 217,
    currency: "USD",
    flightIncluded: false,
    cabinNote: "11B · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["DIC"],
    departureYears: [2026],
    nextDeparture: "09 DIC 2026",
    ports: ["Galveston", "Puerto Progreso"],
    highlights: [
      "Magia Disney para toda la familia con personajes en vivo.",
      "Camarotes con literas para niños y áreas exclusivas para adultos.",
      "Broadway en alta mar: Frozen, Aladdin y Beauty and the Beast.",
      "Castaway Cay, la isla privada de Disney en Bahamas (en variantes)."
    ],
    inclusions: [
      "Cabina interior categoría 11B en ocupación doble",
      "Buffet, restaurantes temáticos y room service 24h",
      "Entretenimiento Disney y clubes para todas las edades",
      "Asesor WTC dedicado para familias"
    ],
    ref: "60768",
    badges: ["Disney Magic"]
  },
  {
    slug: "disney-bahamas-dream",
    type: "crucero",
    region: "Caribe",
    brand: "Disney Cruise Line",
    ship: "Disney Dream®",
    title: "Bahamas",
    subtitle: "Disney Dream®",
    hero: "/paquetes/disney-cruise-line.jpg",
    durationDays: 12,
    durationNights: 11,
    fromPrice: 1324,
    fromTax: 231,
    currency: "USD",
    flightIncluded: false,
    cabinNote: "11B · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["DIC"],
    departureYears: [2026],
    nextDeparture: "14 DIC 2026",
    ports: ["Fort Lauderdale", "Lookout Cay at Lighthouse Point", "Castaway Cay"],
    highlights: [
      "Dos paradas en las islas privadas Disney en Bahamas.",
      "Aqua Duck, el primer río de aguas rápidas en alta mar.",
      "Encuentros exclusivos con personajes Marvel y Star Wars.",
      "Spa Senses para escapadas adultas en cubierta 11."
    ],
    inclusions: [
      "11 noches a bordo del Disney Dream®",
      "Acceso a islas privadas de Disney",
      "Comidas y shows tipo Broadway",
      "Equipaje y traslado desde puerto coordinado"
    ],
    ref: "60882",
    badges: ["Castaway Cay"]
  },
  {
    slug: "disney-caribe-treasure",
    type: "crucero",
    region: "Caribe",
    brand: "Disney Cruise Line",
    ship: "Disney Treasure®",
    title: "Caribe",
    subtitle: "Disney Treasure®",
    hero: "/paquetes/disney-cruise-line.jpg",
    durationDays: 8,
    durationNights: 7,
    fromPrice: 2380,
    fromTax: 406,
    currency: "USD",
    flightIncluded: false,
    cabinNote: "11B · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["FEB"],
    departureYears: [2027],
    nextDeparture: "20 FEB 2027",
    ports: ["Puerto Cañaveral", "Cozumel", "George Town", "Falmouth", "Castaway Cay"],
    highlights: [
      "Disney Treasure, el barco más nuevo de la flota.",
      "Inspirado en aventuras alrededor del mundo.",
      "Nuevo restaurante Plaza de Coco con show en vivo de Coco.",
      "Lounge Skipper Society temático de Jungle Cruise."
    ],
    inclusions: [
      "7 noches en cabina interior 11B",
      "Cinco puertos del Caribe occidental + Castaway Cay",
      "Pensión completa con bebidas básicas",
      "Asesoría WTC pre-embarque"
    ],
    ref: "60773",
    badges: ["Estreno 2027"]
  },
  {
    slug: "royal-caribbean-bahamas-icon",
    type: "crucero",
    region: "Caribe",
    brand: "Royal Caribbean",
    ship: "Icon of the Seas®",
    title: "Bahamas",
    subtitle: "Icon of the Seas® · Wonder · Legend",
    hero: "/paquetes/royal-caribbean.jpg",
    durationDays: 7,
    durationNights: 6,
    fromPrice: 6105,
    fromTax: 5698,
    currency: "MXN",
    flightIncluded: false,
    cabinNote: "4V · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["NOV", "ABR", "AGO"],
    departureYears: [2026, 2027],
    nextDeparture: "13 NOV 2026",
    ports: ["Puerto Cañaveral", "Gran Turca", "Nassau", "Miami", "Isla Coco Cay", "Barcelona", "Palma de Mallorca", "La Spezia", "Civitavecchia", "Nápoles"],
    highlights: [
      "Icon of the Seas®: el crucero más grande del mundo.",
      "Coco Cay, isla privada con el waterpark más grande del Caribe.",
      "Más de 40 restaurantes, bares y experiencias gastronómicas.",
      "Variantes en Wonder of the Seas y Legend of the Seas (Mediterráneo)."
    ],
    inclusions: [
      "Cabina interior categoría 4V",
      "Comidas en restaurantes principales",
      "Acceso a piscinas, FlowRider y rocódromo",
      "Asesoría WTC para excursiones"
    ],
    ref: "60375",
    badges: ["Icon of the Seas"]
  },
  {
    slug: "norwegian-alaska-jade",
    type: "crucero",
    region: "Norteamérica",
    brand: "Norwegian Cruise Line",
    ship: "Norwegian Jade®",
    title: "Alaska",
    subtitle: "Norwegian Jade®",
    hero: "/paquetes/norwegian-cruise-line.jpg",
    durationDays: 8,
    durationNights: 7,
    fromPrice: 7997,
    fromTax: 6011,
    currency: "MXN",
    flightIncluded: false,
    cabinNote: "IA · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["JUN"],
    departureYears: [2026],
    nextDeparture: "29 JUN 2026",
    ports: ["Columbia Británica", "Inside Passage", "Ketchikan", "Juneau", "Skagway", "Icy Strait Point", "Glaciar Hubbard", "Anchorage"],
    highlights: [
      "Glaciares colosales: Hubbard, Margerie y el Inside Passage.",
      "Avistamiento de ballenas, osos y águilas calvas en su hábitat.",
      "Tours en hidroavión, salmoneras y trenes históricos en Skagway.",
      "Filosofía Freestyle Cruising: sin horarios, sin código de vestimenta."
    ],
    inclusions: [
      "7 noches a bordo del Norwegian Jade®",
      "Pensión completa en restaurantes principales",
      "Acceso a spa, casino y entretenimiento",
      "Asesor de viaje WTC dedicado"
    ],
    ref: "60554",
    badges: ["Verano 2026"]
  },
  {
    slug: "norwegian-caribe-prima",
    type: "crucero",
    region: "Caribe",
    brand: "Norwegian Cruise Line",
    ship: "Norwegian Prima®",
    title: "Caribe",
    subtitle: "Norwegian Prima®",
    hero: "/paquetes/norwegian-cruise-line.jpg",
    durationDays: 8,
    durationNights: 7,
    fromPrice: 13643,
    fromTax: 3643,
    currency: "MXN",
    flightIncluded: false,
    cabinNote: "IA · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["OCT"],
    departureYears: [2026],
    nextDeparture: "11 OCT 2026",
    ports: ["Puerto Cañaveral", "Great Stirrup Cay", "Falmouth", "Gran Caimán", "Cozumel"],
    highlights: [
      "Norwegian Prima®, debut de la clase Prima con diseño de lujo escandinavo.",
      "El primer go-kart de tres pisos en alta mar.",
      "Indulge Food Hall con 11 conceptos gastronómicos.",
      "Ozone, plataforma infinita sobre el mar."
    ],
    inclusions: [
      "Cabina interior categoría IA",
      "Comidas en restaurantes principales",
      "Acceso a parque acuático y go-karts (con cuota)",
      "Asesoría WTC pre y post viaje"
    ],
    ref: "60923",
    badges: []
  },
  {
    slug: "norwegian-hawai-pride-of-america",
    type: "crucero",
    region: "Norteamérica",
    brand: "Norwegian Cruise Line",
    ship: "Pride of America®",
    title: "Hawái",
    subtitle: "Norwegian Pride of America®",
    hero: "/paquetes/norwegian-cruise-line.jpg",
    durationDays: 8,
    durationNights: 7,
    fromPrice: 26030,
    fromTax: 7828,
    currency: "MXN",
    flightIncluded: false,
    cabinNote: "IA · Interior",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["AGO"],
    departureYears: [2026],
    nextDeparture: "01 AGO 2026",
    ports: ["Honolulu (Oahu)", "Kahului (Maui)", "Hilo (Big Island)", "Kona", "Nawiliwili (Kauai)"],
    highlights: [
      "El único crucero que navega Hawái todo el año con bandera estadounidense.",
      "4 islas, 4 culturas, una experiencia tropical inigualable.",
      "Volcán Kilauea, Camino a Hana y playas vírgenes de Kauai.",
      "Luaus tradicionales y snorkel en arrecifes protegidos."
    ],
    inclusions: [
      "7 noches a bordo del Pride of America®",
      "Tour 4 islas hawaianas",
      "Acceso a piscinas, spa y restaurantes principales",
      "Asesoría WTC con sugerencias de excursiones"
    ],
    ref: "60640",
    badges: ["Solo Hawái"]
  },

  // ─────────────────────────────  TOURS  ─────────────────────────────
  {
    slug: "japon-camino-del-samurai",
    type: "tour",
    region: "Asia",
    brand: "Aeroméxico",
    title: "Japón",
    subtitle: "El Camino del Samurái 武士の道",
    hero: "/paquetes/japon-samurai.jpg",
    durationDays: 12,
    durationNights: 9,
    fromPrice: 1999,
    fromTax: 999,
    currency: "USD",
    flightIncluded: true,
    cabinNote: "Habitación doble",
    pricingNote: "por persona en habitación doble",
    departureMonths: ["ENE","ABR","JUN","OCT","DIC"],
    departureYears: [2026, 2027],
    nextDeparture: "04 ENE 2026",
    ports: ["Hiroshima", "Osaka", "Kioto", "Nagoya", "Arimatsu", "Tokio"],
    highlights: [
      "Memorial de la Paz en Hiroshima y la Isla de Miyajima.",
      "Bosque de Bambú de Arashiyama y Templo Dorado en Kioto.",
      "Castillo de Osaka y Distrito Dotonbori al anochecer.",
      "Pueblo histórico Arimatsu, cuna del shibori (tintado tradicional).",
      "3 noches en Tokio: Shibuya, Akihabara y excursión al Monte Fuji."
    ],
    inclusions: [
      "Vuelo redondo Aeroméxico desde CDMX",
      "9 noches en hoteles 4★ con desayuno",
      "Tren bala (Shinkansen) en trayectos clave",
      "Guía en español y traslados privados",
      "Visitas y entradas conforme itinerario"
    ],
    itinerary: [
      { day: 1, title: "CDMX → Tokio", description: "Vuelo Aeroméxico directo. Cruce de la línea internacional de cambio de fecha." },
      { day: 2, title: "Llegada a Hiroshima", description: "Vuelo doméstico a Hiroshima. Memorial de la Paz y registro en hotel." },
      { day: 3, title: "Miyajima · Hiroshima", description: "Excursión a la isla sagrada con su tori flotante. Tarde libre." },
      { day: 4, title: "Hiroshima → Osaka", description: "Tren bala a Osaka. Tour del castillo y noche en Dotonbori." },
      { day: 5, title: "Kioto", description: "Templo Dorado, Bosque de Bambú y barrio de geishas en Gion." },
      { day: 6, title: "Nara · Kioto", description: "Templo Todai-ji, ciervos sagrados y mercado Nishiki." },
      { day: 7, title: "Nagoya · Arimatsu", description: "Castillo de Nagoya, pueblo Arimatsu y taller de shibori." },
      { day: 8, title: "Nagoya → Tokio", description: "Shinkansen a Tokio. Tarde libre en Shibuya." },
      { day: 9, title: "Tokio · Monte Fuji", description: "Excursión al Lago Kawaguchiko con vistas al Fuji." },
      { day: 10, title: "Tokio libre", description: "Día libre: Akihabara, TeamLab, Disneyland o compras." },
      { day: 11, title: "Tokio → CDMX", description: "Vuelo de regreso." },
      { day: 12, title: "Llegada a México", description: "Llegada a CDMX." }
    ],
    ref: "30208",
    badges: ["Vuelo incluido", "Aeroméxico"]
  },
  {
    slug: "mega-japon-y-corea",
    type: "tour",
    region: "Asia",
    title: "Mega Japón y Corea",
    subtitle: "Dos países, una aventura inolvidable",
    hero: "/paquetes/mega-japon-corea.jpg",
    durationDays: 14,
    durationNights: 12,
    fromPrice: 2999,
    fromTax: 999,
    currency: "USD",
    flightIncluded: true,
    cabinNote: "Habitación doble",
    pricingNote: "por persona en habitación doble",
    departureMonths: ["AGO","SEP","OCT","NOV","DIC"],
    departureYears: [2026],
    nextDeparture: "31 AGO 2026",
    ports: ["Narita", "Tokio", "Kioto", "Osaka", "Seúl", "Gangnam", "Gyeongju", "Busan"],
    highlights: [
      "Lo mejor de Japón en 7 días + Corea del Sur en 5 días.",
      "Vuelos internacionales y doméstico Tokio–Seúl incluidos.",
      "Templo Bulguksa y Cueva Seokguram, patrimonios de UNESCO en Gyeongju.",
      "Gangnam moderno y mercado tradicional Namdaemun en Seúl.",
      "Tren bala KTX entre Seúl, Gyeongju y Busan."
    ],
    inclusions: [
      "Vuelos internacionales y doméstico",
      "12 noches en hoteles 4★ con desayuno",
      "Trenes bala Shinkansen y KTX",
      "Guías locales en español",
      "Traslados y excursiones conforme itinerario"
    ],
    ref: "30202",
    badges: ["Vuelo incluido", "Mega"]
  },
  {
    slug: "magia-italiana",
    type: "tour",
    region: "Europa",
    title: "Magia Italiana",
    subtitle: "Roma · Florencia · Venecia · Bolonia",
    hero: "/paquetes/magia-italiana.jpg",
    gallery: ["/paquetes/magia-italiana.jpg", "/paquetes/magia-italiana-vertical.jpg"],
    durationDays: 10,
    durationNights: 8,
    fromPrice: 1299,
    fromTax: 899,
    currency: "USD",
    flightIncluded: true,
    cabinNote: "Habitación doble",
    pricingNote: "por persona en habitación doble",
    departureMonths: ["AGO","SEP","OCT","NOV","DIC"],
    departureYears: [2026],
    nextDeparture: "23 AGO 2026",
    ports: ["Roma", "Florencia", "Venecia", "Bolonia"],
    highlights: [
      "Coliseo, Foro Romano y Plaza de San Pedro en el Vaticano.",
      "Galería Uffizi y Duomo en Florencia.",
      "Paseo en góndola por los canales de Venecia.",
      "Bolonia: la ciudad gastronómica por excelencia.",
      "Trenes de alta velocidad Frecciarossa entre ciudades."
    ],
    inclusions: [
      "Vuelo redondo desde CDMX",
      "8 noches en hoteles céntricos 4★ con desayuno",
      "Trenes Frecciarossa en clase Standard",
      "Guías locales en español en cada ciudad",
      "Traslados aeropuerto–hotel–aeropuerto"
    ],
    itinerary: [
      { day: 1, title: "CDMX → Roma", description: "Vuelo transatlántico nocturno." },
      { day: 2, title: "Llegada a Roma", description: "Traslado al hotel. Tarde libre por el centro histórico." },
      { day: 3, title: "Roma Clásica", description: "Coliseo, Foro Romano, Fontana di Trevi y Plaza de España." },
      { day: 4, title: "Vaticano", description: "Museos Vaticanos, Capilla Sixtina y Basílica de San Pedro." },
      { day: 5, title: "Roma → Florencia", description: "Frecciarossa a Florencia. Visita al Duomo y Ponte Vecchio." },
      { day: 6, title: "Florencia · Toscana", description: "Galería Uffizi y excursión opcional a Pisa o Siena." },
      { day: 7, title: "Florencia → Bolonia → Venecia", description: "Parada gastronómica en Bolonia y traslado a Venecia." },
      { day: 8, title: "Venecia", description: "Plaza San Marcos, paseo en góndola y mercado de Rialto." },
      { day: 9, title: "Venecia → CDMX", description: "Traslado al aeropuerto y vuelo de regreso." },
      { day: 10, title: "Llegada a México", description: "Llegada a CDMX." }
    ],
    ref: "12337",
    badges: ["Vuelo incluido", "Estándar"]
  },
  {
    slug: "pasion-italiana-mediterraneo-costa-esmeralda",
    type: "crucero",
    region: "Mediterráneo",
    brand: "Costa Cruceros",
    ship: "Costa Esmeralda®",
    title: "Pasión Italiana y Mediterráneo",
    subtitle: "A bordo del Costa Esmeralda®",
    hero: "/paquetes/costa-esmeralda.jpg",
    durationDays: 18,
    durationNights: 16,
    fromPrice: 1999,
    fromTax: 899,
    currency: "USD",
    flightIncluded: true,
    cabinNote: "Cabina interior · Pensión completa",
    pricingNote: "por persona en cabina interior",
    departureMonths: ["AGO","SEP"],
    departureYears: [2026],
    nextDeparture: "AGO 2026",
    ports: ["Barcelona", "Ibiza", "Palermo", "Civitavecchia", "Roma", "Florencia", "Venecia", "Bolonia", "Savona", "Marsella"],
    highlights: [
      "Combo perfecto: 8 noches por Italia + 7 noches de crucero por el Mediterráneo.",
      "Costa Esmeralda®, el crucero más eco-eficiente con GNL.",
      "Pensión completa a bordo + tours por las ciudades imperdibles.",
      "Vuelo incluido desde Ciudad de México."
    ],
    inclusions: [
      "Vuelo redondo CDMX–Europa",
      "8 noches por Italia (Roma–Florencia–Venecia–Bolonia)",
      "7 noches de crucero Costa Esmeralda® en pensión completa",
      "Trenes y traslados conforme itinerario",
      "Guías locales en español"
    ],
    ref: "12473",
    badges: ["Vuelo incluido", "Pensión completa"]
  }
];

export const getPackage = (slug: string) => packages.find(p => p.slug === slug);
export const cruisePackages = () => packages.filter(p => p.type === "crucero");
export const tourPackages = () => packages.filter(p => p.type === "tour");
export const featuredPackages = () => [
  packages.find(p => p.slug === "japon-camino-del-samurai")!,
  packages.find(p => p.slug === "disney-bahamas-dream")!,
  packages.find(p => p.slug === "magia-italiana")!,
  packages.find(p => p.slug === "norwegian-alaska-jade")!,
];
