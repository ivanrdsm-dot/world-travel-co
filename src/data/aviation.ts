export type Aircraft = {
  slug: string;
  category: "Light Jet" | "Midsize Jet" | "Super Midsize Jet" | "Heavy Jet" | "Ultra Long Range" | "Helicóptero";
  model: string;
  manufacturer: string;
  capacity: number;
  rangeNm: number;            // millas náuticas
  cruiseKts: number;
  cabinHeightM: number;
  baggageM3: number;
  hourlyRateUSD: { low: number; high: number };
  cover: string;
  highlights: string[];
  bestFor: string[];          // ["Cabo desde CDMX", "Aspen weekend"]
};

export const fleet: Aircraft[] = [
  {
    slug: "cessna-citation-cj3",
    category: "Light Jet",
    model: "Citation CJ3+",
    manufacturer: "Cessna",
    capacity: 6,
    rangeNm: 2040,
    cruiseKts: 416,
    cabinHeightM: 1.45,
    baggageM3: 1.98,
    hourlyRateUSD: { low: 3800, high: 5200 },
    cover: "/aircraft/cessna-cj3.jpg",
    highlights: [
      "El light jet más popular para vuelos cortos privados.",
      "Cabina cómoda para 6 pasajeros con baño privado.",
      "Operación desde pistas pequeñas: ideal para destinos secundarios."
    ],
    bestFor: ["CDMX → Cabo San Lucas", "CDMX → Mérida", "MTY → Vallarta"]
  },
  {
    slug: "embraer-phenom-300",
    category: "Light Jet",
    model: "Phenom 300E",
    manufacturer: "Embraer",
    capacity: 8,
    rangeNm: 2010,
    cruiseKts: 464,
    cabinHeightM: 1.51,
    baggageM3: 2.43,
    hourlyRateUSD: { low: 4200, high: 5800 },
    cover: "/aircraft/phenom-300.jpg",
    highlights: [
      "El light jet más vendido del mundo durante 10 años consecutivos.",
      "Cabina de stand-up con la tecnología de cockpit más moderna del segmento.",
      "Ideal para vuelos hasta de 4 horas."
    ],
    bestFor: ["CDMX → Aspen", "CDMX → Los Cabos", "MTY → Miami"]
  },
  {
    slug: "hawker-800xp",
    category: "Midsize Jet",
    model: "Hawker 800XP",
    manufacturer: "Hawker Beechcraft",
    capacity: 8,
    rangeNm: 2540,
    cruiseKts: 448,
    cabinHeightM: 1.75,
    baggageM3: 1.42,
    hourlyRateUSD: { low: 5400, high: 6800 },
    cover: "/aircraft/hawker-800xp.jpg",
    highlights: [
      "Midsize jet probado con cabina amplia y baño completo.",
      "Excelente costo–desempeño para grupos de 6–8.",
      "Velocidad transcontinental sin escalas en rutas medias."
    ],
    bestFor: ["MX → Costa Este USA", "CDMX → NYC con 1 parada", "MX → Aspen non-stop"]
  },
  {
    slug: "challenger-350",
    category: "Super Midsize Jet",
    model: "Challenger 350",
    manufacturer: "Bombardier",
    capacity: 9,
    rangeNm: 3200,
    cruiseKts: 470,
    cabinHeightM: 1.85,
    baggageM3: 2.40,
    hourlyRateUSD: { low: 6800, high: 9200 },
    cover: "/aircraft/challenger-350.jpg",
    highlights: [
      "Cabina plana (flat floor) de 28 pies — la más amplia de su categoría.",
      "Sin escalas CDMX–NY o CDMX–LA con 8 pasajeros.",
      "Tecnología de conectividad satelital de banda ancha."
    ],
    bestFor: ["CDMX → Nueva York non-stop", "CDMX → Los Ángeles", "Bodas destino con grupo"]
  },
  {
    slug: "gulfstream-g450",
    category: "Heavy Jet",
    model: "G450",
    manufacturer: "Gulfstream",
    capacity: 14,
    rangeNm: 4350,
    cruiseKts: 488,
    cabinHeightM: 1.88,
    baggageM3: 4.36,
    hourlyRateUSD: { low: 9800, high: 13500 },
    cover: "/aircraft/gulfstream-g450.jpg",
    highlights: [
      "Heavy jet con tres zonas de cabina y cama completa.",
      "Sin escalas CDMX–Madrid o CDMX–Buenos Aires.",
      "Cocina caliente, baño con ducha en configuración premium."
    ],
    bestFor: ["CDMX → Madrid non-stop", "CDMX → Buenos Aires", "Grupos VIP transatlánticos"]
  },
  {
    slug: "gulfstream-g650er",
    category: "Ultra Long Range",
    model: "G650ER",
    manufacturer: "Gulfstream",
    capacity: 18,
    rangeNm: 7500,
    cruiseKts: 516,
    cabinHeightM: 1.91,
    baggageM3: 5.10,
    hourlyRateUSD: { low: 14500, high: 19500 },
    cover: "/aircraft/gulfstream-g650er.jpg",
    highlights: [
      "El jet privado más rápido del mundo (Mach 0.925 máximo).",
      "CDMX → Tokio o CDMX → Sídney sin escalas.",
      "100 ventanas panorámicas más grandes que cualquier competidor."
    ],
    bestFor: ["CDMX → Tokio non-stop", "CDMX → Dubai", "Tour mundial corporativo"]
  },
  {
    slug: "bell-407gxi",
    category: "Helicóptero",
    model: "407GXi",
    manufacturer: "Bell",
    capacity: 6,
    rangeNm: 337,
    cruiseKts: 133,
    cabinHeightM: 1.30,
    baggageM3: 0.45,
    hourlyRateUSD: { low: 2400, high: 3200 },
    cover: "/aircraft/bell-407.jpg",
    highlights: [
      "El helicóptero ejecutivo más confiable del mercado.",
      "Configuración VIP de 6 plazas en piel.",
      "Ideal para traslados CDMX–Acapulco o Cancún–Tulum sin tráfico."
    ],
    bestFor: ["CDMX → Acapulco (45 min)", "Cancún → Tulum (25 min)", "Tour panorámico aéreo"]
  },
  {
    slug: "airbus-h145",
    category: "Helicóptero",
    model: "H145",
    manufacturer: "Airbus",
    capacity: 8,
    rangeNm: 360,
    cruiseKts: 133,
    cabinHeightM: 1.30,
    baggageM3: 1.20,
    hourlyRateUSD: { low: 3200, high: 4500 },
    cover: "/aircraft/airbus-h145.jpg",
    highlights: [
      "Bimotor: el helicóptero más seguro del mercado civil.",
      "Cabina configurable para 8 pasajeros + 2 tripulantes.",
      "Volamos a Avándaro, Tepoztlán o yates en Acapulco."
    ],
    bestFor: ["CDMX → Valle de Bravo", "CDMX → Tepoztlán", "Heli-tour Riviera Maya"]
  }
];

export const aviationFAQs = [
  { q: "¿Cuánto cuesta rentar un jet privado por hora?",
    a: "Depende de la categoría: light jet desde USD 3,800/h, midsize desde USD 5,400/h, heavy jet desde USD 9,800/h. Cotizamos el viaje completo incluyendo hora vuelta, tarifa de aeropuerto y catering." },
  { q: "¿Cuánto se reserva con anticipación?",
    a: "Ideal 7+ días. Tenemos disponibilidad para vuelos en 24–48 h sujeto a posicionamiento del avión." },
  { q: "¿Incluye catering, traslado terrestre y aduana?",
    a: "Sí. WTC coordina catering gourmet, FBO de salida y llegada, traslado privado y trámites de inmigración VIP." },
  { q: "¿Pueden operar en pistas pequeñas?",
    a: "Sí. Light jets como el Phenom 300 y CJ3+ operan en pistas desde 1,200 m — destinos como Mazamitla, Huatulco, Bahías de Loreto." }
];
