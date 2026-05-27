export type Concert = {
  slug: string;
  artist: string;
  dates: string[];               // ["2026-05-27"]
  venue: string;
  city: string;
  category: "Pop" | "Rock" | "Reggaetón" | "Regional" | "Festival" | "Sinfónico" | "Latino" | "Metal";
  status: "Próximamente" | "Pocas entradas" | "Sold out (resale)";
  hospitality: ("Palco VIP" | "Meet & Greet" | "Hospitality Lounge" | "Boletos Premium" | "Suite Corporativa")[];
  fromPriceMXN: number;          // Hospitality desde
  cover: string;
  notes?: string;
};

// Información obtenida del calendario CONCIERTOS 2026 — actualizada 2026-05-27.
// WTC opera acceso a palcos, hospitality y meet & greet en colaboración
// con los promotores oficiales (OCESA, Zignia Live, GNP Seguros).

export const concerts: Concert[] = [
  {
    slug: "mon-laferte-monterrey",
    artist: "Mon Laferte",
    dates: ["2026-05-27"],
    venue: "Auditorio Banamex",
    city: "Monterrey, Nuevo León",
    category: "Latino",
    status: "Pocas entradas",
    hospitality: ["Palco VIP", "Boletos Premium"],
    fromPriceMXN: 8500,
    cover: "/concerts/mon-laferte-mty.jpg"
  },
  {
    slug: "caifanes-cdmx",
    artist: "Caifanes",
    dates: ["2026-05-29", "2026-05-30"],
    venue: "Auditorio Nacional",
    city: "Ciudad de México",
    category: "Rock",
    status: "Pocas entradas",
    hospitality: ["Palco VIP", "Hospitality Lounge"],
    fromPriceMXN: 6800,
    cover: "/concerts/caifanes.jpg"
  },
  {
    slug: "mon-laferte-cdmx",
    artist: "Mon Laferte",
    dates: ["2026-05-29", "2026-05-30"],
    venue: "Palacio de los Deportes",
    city: "Ciudad de México",
    category: "Latino",
    status: "Sold out (resale)",
    hospitality: ["Palco VIP", "Meet & Greet"],
    fromPriceMXN: 12500,
    cover: "/concerts/mon-laferte-cdmx.jpg"
  },
  {
    slug: "gloria-trevi-cdmx",
    artist: "Gloria Trevi",
    dates: ["2026-06-20"],
    venue: "Auditorio Nacional",
    city: "Ciudad de México",
    category: "Pop",
    status: "Próximamente",
    hospitality: ["Palco VIP", "Hospitality Lounge", "Boletos Premium"],
    fromPriceMXN: 9200,
    cover: "/concerts/gloria-trevi.jpg"
  },
  {
    slug: "grupo-firme-cdmx",
    artist: "Grupo Firme",
    dates: ["2026-07-17"],
    venue: "Estadio GNP Seguros",
    city: "Ciudad de México",
    category: "Regional",
    status: "Próximamente",
    hospitality: ["Palco VIP", "Suite Corporativa", "Boletos Premium"],
    fromPriceMXN: 7800,
    cover: "/concerts/grupo-firme.jpg"
  },
  {
    slug: "el-tri-cdmx",
    artist: "El Tri",
    dates: ["2026-07-25"],
    venue: "Palacio de los Deportes",
    city: "Ciudad de México",
    category: "Rock",
    status: "Próximamente",
    hospitality: ["Palco VIP", "Hospitality Lounge"],
    fromPriceMXN: 5400,
    cover: "/concerts/el-tri.jpg"
  },
  {
    slug: "mijares-sinfonico",
    artist: "Mijares Sinfónico",
    dates: ["2026-07-31"],
    venue: "Auditorio Nacional",
    city: "Ciudad de México",
    category: "Sinfónico",
    status: "Próximamente",
    hospitality: ["Palco VIP", "Boletos Premium"],
    fromPriceMXN: 6200,
    cover: "/concerts/mijares-sinfonico.jpg"
  },
  {
    slug: "rosalia-cdmx",
    artist: "Rosalía",
    dates: ["2026-08-22", "2026-08-24", "2026-08-26", "2026-08-28", "2026-08-29"],
    venue: "Palacio de los Deportes",
    city: "Ciudad de México",
    category: "Latino",
    status: "Sold out (resale)",
    hospitality: ["Palco VIP", "Meet & Greet", "Hospitality Lounge"],
    fromPriceMXN: 18500,
    cover: "/concerts/rosalia.jpg",
    notes: "5 fechas con tour LUX. Hospitality muy limitada — recomendamos reservar con 30+ días."
  },
  {
    slug: "yuridia-cdmx",
    artist: "Yuridia",
    dates: ["2026-09-03", "2026-09-04"],
    venue: "Estadio GNP Seguros",
    city: "Ciudad de México",
    category: "Pop",
    status: "Próximamente",
    hospitality: ["Palco VIP", "Hospitality Lounge", "Boletos Premium"],
    fromPriceMXN: 8200,
    cover: "/concerts/yuridia.jpg"
  },
  {
    slug: "warped-tour-cdmx",
    artist: "Warped Tour",
    dates: ["2026-09-12", "2026-09-13"],
    venue: "Autódromo Hermanos Rodríguez",
    city: "Ciudad de México",
    category: "Festival",
    status: "Próximamente",
    hospitality: ["Hospitality Lounge", "Boletos Premium"],
    fromPriceMXN: 14500,
    cover: "/concerts/warped-tour.jpg",
    notes: "Festival de 2 días con headliners punk/rock. Hospitality incluye barras premium y áreas con sombra."
  },
  {
    slug: "young-miko-cdmx",
    artist: "Young Miko",
    dates: ["2026-09-22"],
    venue: "Palacio de los Deportes",
    city: "Ciudad de México",
    category: "Reggaetón",
    status: "Pocas entradas",
    hospitality: ["Palco VIP", "Meet & Greet"],
    fromPriceMXN: 11200,
    cover: "/concerts/young-miko.jpg"
  },
  {
    slug: "iron-maiden-cdmx",
    artist: "Iron Maiden",
    dates: ["2026-10-02"],
    venue: "Estadio GNP Seguros",
    city: "Ciudad de México",
    category: "Metal",
    status: "Próximamente",
    hospitality: ["Palco VIP", "Suite Corporativa", "Hospitality Lounge"],
    fromPriceMXN: 10800,
    cover: "/concerts/iron-maiden.jpg",
    notes: "Future Past World Tour. Acceso VIP incluye early entry y catering premium."
  },
  {
    slug: "romeo-santos-prince-royce-cdmx",
    artist: "Romeo Santos & Prince Royce",
    dates: ["2026-10-25", "2026-10-26"],
    venue: "Palacio de los Deportes",
    city: "Ciudad de México",
    category: "Latino",
    status: "Pocas entradas",
    hospitality: ["Palco VIP", "Meet & Greet", "Hospitality Lounge"],
    fromPriceMXN: 13800,
    cover: "/concerts/romeo-santos.jpg"
  },
  {
    slug: "karol-g-cdmx",
    artist: "Karol G",
    dates: ["2026-11-13", "2026-11-14", "2026-11-15"],
    venue: "Estadio GNP Seguros",
    city: "Ciudad de México",
    category: "Reggaetón",
    status: "Sold out (resale)",
    hospitality: ["Palco VIP", "Meet & Greet", "Suite Corporativa"],
    fromPriceMXN: 16500,
    cover: "/concerts/karol-g.jpg",
    notes: "Tropicoqueta Tour. Las 3 fechas agotadas en preventa — gestionamos hospitality oficial."
  },
  {
    slug: "deep-purple-guadalajara",
    artist: "Deep Purple",
    dates: ["2026-12-16"],
    venue: "Arena Guadalajara",
    city: "Guadalajara, Jalisco",
    category: "Rock",
    status: "Próximamente",
    hospitality: ["Palco VIP", "Boletos Premium"],
    fromPriceMXN: 7400,
    cover: "/concerts/deep-purple-gdl.jpg"
  },
  {
    slug: "deep-purple-cdmx",
    artist: "Deep Purple",
    dates: ["2026-12-19"],
    venue: "Estadio Fray Nano",
    city: "Ciudad de México",
    category: "Rock",
    status: "Próximamente",
    hospitality: ["Palco VIP", "Hospitality Lounge"],
    fromPriceMXN: 7400,
    cover: "/concerts/deep-purple-cdmx.jpg"
  }
];

export const getConcert = (slug: string) => concerts.find(c => c.slug === slug);

export const concertCategories = ["Pop", "Rock", "Reggaetón", "Regional", "Festival", "Sinfónico", "Latino", "Metal"] as const;
