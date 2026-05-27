export type WCVenue = {
  slug: string;
  stadium: string;
  city: string;
  country: "México" | "Estados Unidos" | "Canadá";
  capacity: number;
  matches: string[];        // ["Inauguración 11 jun", "16vos", "Octavos"]
  notes: string;
  cover: string;
};

export type HospitalityCategory = {
  slug: string;
  name: string;
  badge: "Top" | "Premium" | "Premium+" | "Elite";
  pricePerMatchUSD: number;     // por persona
  capacityPerSuite?: string;
  features: string[];
  bestFor: string;
};

// ⚽ Información oficial FIFA World Cup 26™ — 11 jun – 19 jul 2026
// 16 sedes en 3 países (México, USA, Canadá). 48 selecciones, 104 partidos.
// Estadio Banorte (Azteca) será el primer estadio del mundo en albergar 3 Copas del Mundo.
// WTC opera hospitality oficial a través del programa On Location, agente exclusivo
// de FIFA para experiencias de hospitalidad.

export const venues: WCVenue[] = [
  // 🇲🇽 MÉXICO
  {
    slug: "estadio-banorte-azteca-cdmx",
    stadium: "Estadio Banorte (Azteca)",
    city: "Ciudad de México",
    country: "México",
    capacity: 87000,
    matches: ["Partido inaugural 11 jun 2026", "3 partidos fase de grupos", "Octavos de final"],
    notes: "Único estadio del mundo en albergar 3 Copas del Mundo (1970, 1986, 2026). Sede del partido inaugural.",
    cover: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1600&q=80"
  },
  {
    slug: "estadio-akron-guadalajara",
    stadium: "Estadio Akron",
    city: "Guadalajara, Jalisco",
    country: "México",
    capacity: 48071,
    matches: ["3 partidos fase de grupos", "16vos de final"],
    notes: "Casa de las Chivas Rayadas. Diseño icónico de vidrio volcánico.",
    cover: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1600&q=80"
  },
  {
    slug: "estadio-bbva-monterrey",
    stadium: "Estadio BBVA",
    city: "Monterrey, Nuevo León",
    country: "México",
    capacity: 53500,
    matches: ["3 partidos fase de grupos", "16vos de final"],
    notes: "Casa de Rayados. Vista al Cerro de la Silla — uno de los estadios más fotogénicos del mundo.",
    cover: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1600&q=80"
  },

  // 🇺🇸 ESTADOS UNIDOS
  {
    slug: "metlife-stadium-nynj",
    stadium: "MetLife Stadium",
    city: "Nueva York / Nueva Jersey",
    country: "Estados Unidos",
    capacity: 82500,
    matches: ["3 partidos fase de grupos", "Octavos", "Cuartos", "FINAL 19 jul 2026"],
    notes: "Sede de la GRAN FINAL del Mundial 2026 el 19 de julio.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "att-stadium-dallas",
    stadium: "AT&T Stadium",
    city: "Dallas, Texas",
    country: "Estados Unidos",
    capacity: 80000,
    matches: ["4 partidos fase de grupos", "Octavos", "Cuartos", "SEMIFINAL"],
    notes: "Casa de los Dallas Cowboys. Sede de una semifinal — la otra es Atlanta.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "mercedes-benz-stadium-atlanta",
    stadium: "Mercedes-Benz Stadium",
    city: "Atlanta, Georgia",
    country: "Estados Unidos",
    capacity: 75000,
    matches: ["3 partidos fase de grupos", "Octavos", "Cuartos", "SEMIFINAL"],
    notes: "Sede de una de las dos semifinales. Techo retráctil oculorítmico único en el mundo.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "sofi-stadium-los-angeles",
    stadium: "SoFi Stadium",
    city: "Los Ángeles, California",
    country: "Estados Unidos",
    capacity: 70240,
    matches: ["4 partidos fase de grupos", "Octavos", "Cuartos"],
    notes: "Estadio más nuevo y caro de la NFL. Sede del Super Bowl LVI.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "hard-rock-stadium-miami",
    stadium: "Hard Rock Stadium",
    city: "Miami, Florida",
    country: "Estados Unidos",
    capacity: 65326,
    matches: ["3 partidos fase de grupos", "Octavos", "TERCER LUGAR 18 jul"],
    notes: "Sede del partido por el tercer lugar el 18 de julio. Casa de los Miami Dolphins.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "gillette-stadium-boston",
    stadium: "Gillette Stadium",
    city: "Boston / Foxborough",
    country: "Estados Unidos",
    capacity: 65878,
    matches: ["4 partidos fase de grupos", "Octavos", "Cuartos"],
    notes: "Casa de los Patriots. Sede de cuartos de final.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "lincoln-financial-philadelphia",
    stadium: "Lincoln Financial Field",
    city: "Filadelfia, Pensilvania",
    country: "Estados Unidos",
    capacity: 67594,
    matches: ["3 partidos fase de grupos", "Octavos"],
    notes: "Casa de los Eagles. Centro histórico de USA, sede emblemática.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "nrg-stadium-houston",
    stadium: "NRG Stadium",
    city: "Houston, Texas",
    country: "Estados Unidos",
    capacity: 72220,
    matches: ["4 partidos fase de grupos", "Octavos"],
    notes: "Casa de los Texans. Techo retráctil y ambiente vibrante para fan zones.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "arrowhead-kansas-city",
    stadium: "Arrowhead Stadium",
    city: "Kansas City, Missouri",
    country: "Estados Unidos",
    capacity: 76416,
    matches: ["4 partidos fase de grupos", "Octavos"],
    notes: "El estadio más ruidoso del mundo (récord Guinness). Ambiente único.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "levis-stadium-bay-area",
    stadium: "Levi's® Stadium",
    city: "San Francisco Bay Area",
    country: "Estados Unidos",
    capacity: 68500,
    matches: ["5 partidos fase de grupos", "Octavos"],
    notes: "Casa de los 49ers. Más alto número de partidos de fase de grupos.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "lumen-field-seattle",
    stadium: "Lumen Field",
    city: "Seattle, Washington",
    country: "Estados Unidos",
    capacity: 68740,
    matches: ["4 partidos fase de grupos", "Octavos"],
    notes: "Casa de Sounders FC. Ambiente futbolero más fuerte de Estados Unidos.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },

  // 🇨🇦 CANADÁ
  {
    slug: "bmo-field-toronto",
    stadium: "BMO Field",
    city: "Toronto, Ontario",
    country: "Canadá",
    capacity: 45500,
    matches: ["5 partidos fase de grupos", "Octavos"],
    notes: "Casa de Toronto FC. Ampliado a 45,500 plazas para el Mundial.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  },
  {
    slug: "bc-place-vancouver",
    stadium: "BC Place",
    city: "Vancouver, British Columbia",
    country: "Canadá",
    capacity: 54500,
    matches: ["5 partidos fase de grupos", "16vos"],
    notes: "Casa de los Whitecaps. Único techo retráctil de su tipo en Canadá.",
    cover: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80"
  }
];

export const hospitalityCategories: HospitalityCategory[] = [
  {
    slug: "trophy-lounge",
    name: "Trophy Lounge",
    badge: "Elite",
    pricePerMatchUSD: 12500,
    capacityPerSuite: "10–20 personas",
    features: [
      "Asientos premium en la zona central inferior, primera fila visual",
      "Lounge privado climatizado con cocina gourmet de chef estrella Michelin",
      "Barra ilimitada con vinos finos, champagne y mixología premium",
      "Acceso 3 horas antes y 2 horas después del partido",
      "Programa de leyendas FIFA: encuentros con ex-jugadores",
      "Regalo oficial FIFA conmemorativo"
    ],
    bestFor: "La experiencia más exclusiva, ideal para C-level y celebraciones únicas en la vida."
  },
  {
    slug: "pitch-view",
    name: "Pitch View Suite",
    badge: "Premium+",
    pricePerMatchUSD: 7800,
    capacityPerSuite: "12–18 personas",
    features: [
      "Suite privada al nivel del campo con vista a la línea de banda",
      "Catering gourmet servido en suite, barra premium con vinos",
      "Acceso a la pista de calentamiento antes del partido",
      "Estacionamiento VIP en sede",
      "Programa de DJ y entretenimiento privado en lounge"
    ],
    bestFor: "Grupos corporativos y experiencias compartidas con clientes."
  },
  {
    slug: "champions-club",
    name: "Champions Club",
    badge: "Premium",
    pricePerMatchUSD: 4900,
    features: [
      "Asientos categoría 1 en zona central",
      "Acceso a lounge compartido con buffet de chef + barra premium",
      "Acceso 2.5 horas antes y 1 hora después",
      "Programa de DJ y entretenimiento",
      "Áreas dedicadas con vista al campo"
    ],
    bestFor: "Experiencia premium con costo más accesible — la favorita de los aficionados serios."
  },
  {
    slug: "match-club",
    name: "Match Club",
    badge: "Top",
    pricePerMatchUSD: 2400,
    features: [
      "Asientos categoría 1 en zona privilegiada",
      "Acceso a Match Club Lounge con bocadillos y bebidas premium",
      "Acceso 1.5 horas antes y 30 min después",
      "Entrada anticipada al estadio para evitar filas",
      "Programa de juegos y trivias FIFA"
    ],
    bestFor: "Entrada a hospitality sin el costo de las categorías top."
  },
  {
    slug: "fifa-lounge",
    name: "FIFA Lounge",
    badge: "Premium",
    pricePerMatchUSD: 3800,
    features: [
      "Lounge compartido al nivel mezzanine con vista al campo",
      "Mesas servidas, catering de chef y barra premium",
      "Música en vivo y entretenimiento curado",
      "Acceso a galería de la historia del Mundial"
    ],
    bestFor: "Atmósfera social con catering elevado — ideal para parejas."
  }
];

// Paquetes WTC que combinan match + hotel + experiencia local
export const wcPackages = [
  {
    slug: "final-mundial-nyc-3-noches",
    name: "FINAL del Mundial · NYC · 3 noches",
    description: "Boleto categoría 1 a la final del 19 de julio en MetLife Stadium + 3 noches en hotel 5★ en Manhattan + traslados privados.",
    fromPriceUSD: 18500,
    perks: ["Hospitality Champions Club", "Hotel 5★ Manhattan", "Sprinter VIP a estadio", "Tour Statue of Liberty privado"]
  },
  {
    slug: "inauguracion-cdmx-experiencia-completa",
    name: "Inauguración · CDMX · La experiencia completa",
    description: "Partido inaugural del Mundial 26™ en el Estadio Banorte (Azteca) + Grand Fiesta Americana Chapultepec + tour Teotihuacán + cena privada en Pujol.",
    fromPriceUSD: 9800,
    perks: ["Hospitality Pitch View", "Grand Fiesta Americana Chapultepec", "Tour Teotihuacán privado", "Cena Pujol"]
  },
  {
    slug: "semifinal-atlanta-vip",
    name: "Semifinal · Atlanta · VIP weekend",
    description: "Una de las dos semifinales en Mercedes-Benz Stadium + suite St. Regis Atlanta + cena con ex-jugador FIFA Legend.",
    fromPriceUSD: 14200,
    perks: ["Trophy Lounge", "St. Regis Atlanta", "Cena con FIFA Legend", "Tour CNN HQ privado"]
  },
  {
    slug: "fan-tour-mexico-3-sedes",
    name: "Fan Tour México · 3 sedes",
    description: "Fase de grupos en CDMX + Guadalajara + Monterrey. 3 partidos, 10 noches, vuelos domésticos privados incluidos.",
    fromPriceUSD: 22500,
    perks: ["3 Champions Club tickets", "Hoteles Grand Fiesta Americana", "Vuelos domésticos privados", "Tours culturales en cada ciudad"]
  }
];
