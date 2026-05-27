export type Vehicle = {
  slug: string;
  category: "Sedán Lujo" | "SUV Lujo" | "SUV Blindada" | "Van VIP" | "Limusina" | "Deportivo";
  make: string;
  model: string;
  year: number;
  capacity: number;
  luggageCapacity: number;
  perks: string[];
  hourlyRateMXN: number;
  dailyRateMXN: number;
  airportRateMXN?: number;     // Trayecto aeropuerto–hotel
  cover: string;
  highlights: string[];
};

export const fleet: Vehicle[] = [
  {
    slug: "mercedes-s580",
    category: "Sedán Lujo",
    make: "Mercedes-Benz",
    model: "S 580 Maybach",
    year: 2025,
    capacity: 3,
    luggageCapacity: 3,
    perks: ["Asientos masaje y reclinables", "Mini bar refrigerado", "Wi-Fi 5G", "Burmester 4D"],
    hourlyRateMXN: 3200,
    dailyRateMXN: 22000,
    airportRateMXN: 4800,
    cover: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
    highlights: [
      "El estándar mundial del transporte ejecutivo de lujo.",
      "Asientos traseros con función masaje y respaldo reclinable.",
      "Pantallas individuales y conexión 5G a bordo."
    ]
  },
  {
    slug: "rolls-royce-cullinan",
    category: "SUV Lujo",
    make: "Rolls-Royce",
    model: "Cullinan",
    year: 2024,
    capacity: 4,
    luggageCapacity: 4,
    perks: ["Asientos con suspensión activa", "Headliner Starlight", "Champagne cooler"],
    hourlyRateMXN: 7800,
    dailyRateMXN: 58000,
    cover: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80",
    highlights: [
      "El SUV más exclusivo del mundo.",
      "Headliner con 1,344 fibras ópticas que simulan un cielo estrellado.",
      "Ideal para galas, bodas y arribos VIP."
    ]
  },
  {
    slug: "range-rover-autobiography",
    category: "SUV Lujo",
    make: "Range Rover",
    model: "Autobiography LWB",
    year: 2025,
    capacity: 4,
    luggageCapacity: 5,
    perks: ["Asientos masaje", "Mesa central plegable", "Refrigerador integrado"],
    hourlyRateMXN: 3800,
    dailyRateMXN: 26000,
    airportRateMXN: 5400,
    cover: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80",
    highlights: [
      "Capacidad off-road real con el lujo de una limusina inglesa.",
      "Cabina trasera con configuración 'Executive Class'.",
      "Perfecto para viajes a viñedos en Valle de Guadalupe o haciendas en Yucatán."
    ]
  },
  {
    slug: "cadillac-escalade-esv",
    category: "SUV Lujo",
    make: "Cadillac",
    model: "Escalade ESV Premium",
    year: 2025,
    capacity: 7,
    luggageCapacity: 7,
    perks: ["AKG Studio Reference 36 bocinas", "Pantallas individuales", "Asientos masaje"],
    hourlyRateMXN: 2800,
    dailyRateMXN: 19500,
    airportRateMXN: 4200,
    cover: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&q=80",
    highlights: [
      "El SUV ejecutivo americano por excelencia.",
      "Capacidad para 7 pasajeros sin sacrificar equipaje.",
      "Ideal para arribos en aeropuerto con séquito o equipo de producción."
    ]
  },
  {
    slug: "suburban-blindada-nivel-vi",
    category: "SUV Blindada",
    make: "Chevrolet",
    model: "Suburban Premier Blindada Nivel VI",
    year: 2025,
    capacity: 7,
    luggageCapacity: 5,
    perks: ["Blindaje certificado", "Vidrios opacos", "Chofer escolta certificado", "Comunicación encriptada"],
    hourlyRateMXN: 4500,
    dailyRateMXN: 32000,
    cover: "https://images.unsplash.com/photo-1581547246434-a8efb78c5e0d?w=1600&q=80",
    highlights: [
      "Blindaje balístico Nivel VI: protección contra rifles de asalto.",
      "Conductor con curso de manejo evasivo y seguridad privada.",
      "Para VIPs, ejecutivos C-level y figuras públicas."
    ]
  },
  {
    slug: "mercedes-sprinter-vip",
    category: "Van VIP",
    make: "Mercedes-Benz",
    model: "Sprinter VIP First Class",
    year: 2025,
    capacity: 12,
    luggageCapacity: 12,
    perks: ["12 asientos de piel Captain", "TV 32\"", "Mini cocina", "Mesa de juntas", "Wi-Fi 5G"],
    hourlyRateMXN: 3600,
    dailyRateMXN: 26000,
    airportRateMXN: 6500,
    cover: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&q=80",
    highlights: [
      "Configuración First Class para 12 pasajeros con asientos individuales.",
      "Ideal para tours privados, despedidas de soltera o equipos corporativos.",
      "Operamos rutas largas: CDMX–Valle de Bravo, Cancún–Tulum, Querétaro–San Miguel de Allende."
    ]
  },
  {
    slug: "limo-cadillac-stretch",
    category: "Limusina",
    make: "Cadillac",
    model: "Stretch Limo 120\"",
    year: 2024,
    capacity: 10,
    luggageCapacity: 4,
    perks: ["Bar premium", "Sistema de sonido inmersivo", "Iluminación ambiente", "Champagne incluido"],
    hourlyRateMXN: 4200,
    dailyRateMXN: 28000,
    cover: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?w=1600&q=80",
    highlights: [
      "Limusina clásica para celebraciones especiales.",
      "Servicio puerta a puerta con chofer en frac.",
      "Recorridos nocturnos por Polanco, Reforma o Roma–Condesa."
    ]
  },
  {
    slug: "lamborghini-urus",
    category: "Deportivo",
    make: "Lamborghini",
    model: "Urus Performante",
    year: 2024,
    capacity: 4,
    luggageCapacity: 2,
    perks: ["666 CV Twin-turbo V8", "Modo Strada/Sport/Corsa/Rally", "Conductor instructor opcional"],
    hourlyRateMXN: 8800,
    dailyRateMXN: 72000,
    cover: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80",
    highlights: [
      "El Super-SUV más rápido del mundo con 666 caballos.",
      "Renta con chofer-instructor o self-drive con licencia internacional.",
      "Disponible para sesiones de foto, eventos y road trips Cabo–Loreto."
    ]
  }
];

export const transportServices = [
  {
    title: "Traslado aeropuerto Meet & Greet VIP",
    description: "Asistente bilingüe te recibe en puerta de avión, gestiona maletas y migración FastPass, te lleva a tu vehículo en pista.",
    fromMXN: 5800
  },
  {
    title: "Chofer 24/7 dedicado",
    description: "Tu propio chofer y vehículo durante toda tu estancia. Disponible 16 horas/día, paquetes desde 3 días.",
    fromMXN: 26000
  },
  {
    title: "Caravana protocolo",
    description: "Convoy de 2 a 5 vehículos con coordinación radio. Para ejecutivos, artistas y delegaciones.",
    fromMXN: 48000
  },
  {
    title: "Renta de yate o velero con tripulación",
    description: "Yates desde 60 pies en Cancún, Cabo y Acapulco. Catering chef privado opcional.",
    fromMXN: 95000
  }
];
