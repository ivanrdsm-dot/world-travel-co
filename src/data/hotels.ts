export type Hotel = {
  slug: string;
  brand: "Live Aqua" | "Grand Fiesta Americana" | "Fiesta Americana" | "Fiesta Americana Vacation Club" | "The Explorean";
  name: string;
  city: string;
  state: string;
  country: "México" | "Estados Unidos";
  category: "Resort" | "City" | "Boutique" | "Adults Only" | "All Inclusive";
  guests: "Adults Only" | "Familia" | "Bodas" | "Negocios";
  rooms: number;
  fromPrice: number;       // MXN por noche en habitación doble
  currency: "MXN";
  cover: string;
  amenities: string[];
  highlights: string[];
  wtcPerks: string[];
};

// ⭐ Alianza WTC con Grupo Posadas
// Beneficios negociados directamente con la cadena: upgrade sujeto a disponibilidad,
// crédito de spa, check-out tardío y bienvenida especial.

export const hotels: Hotel[] = [
  {
    slug: "live-aqua-beach-resort-cancun",
    brand: "Live Aqua",
    name: "Live Aqua Beach Resort Cancún",
    city: "Cancún",
    state: "Quintana Roo",
    country: "México",
    category: "Adults Only",
    guests: "Adults Only",
    rooms: 371,
    fromPrice: 8400,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80",
    amenities: ["All Inclusive Premium", "Spa Feel®", "5 albercas", "Beachfront", "7 restaurantes"],
    highlights: [
      "Adults Only frente al Mar Caribe en la Zona Hotelera de Cancún.",
      "Spa Feel®, uno de los más reconocidos del Caribe Mexicano.",
      "Programa Hand of Feel: tu host personal antes y durante la estancia."
    ],
    wtcPerks: ["Upgrade sujeto a disponibilidad", "Crédito de USD 100 en spa", "Botella de espumoso de bienvenida"]
  },
  {
    slug: "grand-fiesta-americana-coral-beach-cancun",
    brand: "Grand Fiesta Americana",
    name: "Grand Fiesta Americana Coral Beach Cancún",
    city: "Cancún",
    state: "Quintana Roo",
    country: "México",
    category: "Resort",
    guests: "Familia",
    rooms: 602,
    fromPrice: 9200,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80",
    amenities: ["AAA Five Diamond", "Gem Spa 40,000 sq ft", "Kids Club", "8 restaurantes"],
    highlights: [
      "Único AAA Five Diamond en Cancún por más de 20 años consecutivos.",
      "Suites con vistas frontales al Mar Caribe.",
      "Gem Spa Premium: el spa más grande del Caribe Mexicano."
    ],
    wtcPerks: ["Upgrade de categoría sujeto a disponibilidad", "Desayuno gourmet incluido", "Late check-out 4 pm"]
  },
  {
    slug: "fiesta-americana-condesa-cancun",
    brand: "Fiesta Americana",
    name: "Fiesta Americana Condesa Cancún All Inclusive",
    city: "Cancún",
    state: "Quintana Roo",
    country: "México",
    category: "All Inclusive",
    guests: "Familia",
    rooms: 502,
    fromPrice: 6900,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80",
    amenities: ["All Inclusive", "5 restaurantes", "Kids Club", "Mini Club", "Domo arquitectónico icónico"],
    highlights: [
      "El icónico hotel del Caribe Mexicano con su domo de palapa más grande del mundo.",
      "Frente a la mejor playa de la Zona Hotelera de Cancún.",
      "Perfecto para familias multi-generacionales."
    ],
    wtcPerks: ["Upgrade sujeto a disponibilidad", "Crédito USD 50 en bar premium", "Suite Connecting para familias"]
  },
  {
    slug: "live-aqua-san-miguel-allende",
    brand: "Live Aqua",
    name: "Live Aqua Urban Resort San Miguel de Allende",
    city: "San Miguel de Allende",
    state: "Guanajuato",
    country: "México",
    category: "Boutique",
    guests: "Adults Only",
    rooms: 153,
    fromPrice: 7400,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=80",
    amenities: ["Spa Feel®", "Cocina de autor", "Vinoteca", "Terrazas con vista al centro"],
    highlights: [
      "En el corazón patrimonial de San Miguel de Allende.",
      "Arquitectura colonial restaurada con sensibilidad contemporánea.",
      "A 8 minutos caminando del Jardín y la Parroquia."
    ],
    wtcPerks: ["Upgrade a Junior Suite sujeto a disponibilidad", "Cata de vinos privada", "Welcome amenity local"]
  },
  {
    slug: "grand-fiesta-americana-los-cabos",
    brand: "Grand Fiesta Americana",
    name: "Grand Fiesta Americana Los Cabos All Inclusive Golf & Spa",
    city: "San José del Cabo",
    state: "Baja California Sur",
    country: "México",
    category: "All Inclusive",
    guests: "Familia",
    rooms: 249,
    fromPrice: 11800,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1600&q=80",
    amenities: ["All Inclusive Premium", "Cabo Real Golf Course", "Spa Sōmma", "Frente al Mar de Cortés"],
    highlights: [
      "Frente al Cabo Real Golf Course, uno de los mejores del país.",
      "Una de las pocas playas nadables en Los Cabos.",
      "Spa Sōmma con cabinas frente al mar."
    ],
    wtcPerks: ["Upgrade sujeto a disponibilidad", "Green fees con descuento", "Tratamiento de spa de cortesía"]
  },
  {
    slug: "fiesta-americana-puerto-vallarta",
    brand: "Fiesta Americana",
    name: "Fiesta Americana Puerto Vallarta All Inclusive & Spa",
    city: "Puerto Vallarta",
    state: "Jalisco",
    country: "México",
    category: "All Inclusive",
    guests: "Familia",
    rooms: 291,
    fromPrice: 5900,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80",
    amenities: ["All Inclusive", "Spa Gem", "Beachfront Banderas", "Kids Club Coquitos"],
    highlights: [
      "Pioneros del all-inclusive premium en Puerto Vallarta.",
      "Frente a una de las playas más tranquilas de Banderas.",
      "Cerca del Malecón y zona romántica."
    ],
    wtcPerks: ["Upgrade sujeto a disponibilidad", "Cena romántica en playa", "Early check-in"]
  },
  {
    slug: "live-aqua-monterrey-valle",
    brand: "Live Aqua",
    name: "Live Aqua Residence Club Monterrey Valle",
    city: "Monterrey",
    state: "Nuevo León",
    country: "México",
    category: "City",
    guests: "Negocios",
    rooms: 200,
    fromPrice: 4900,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
    amenities: ["Spa Feel®", "Coworking premium", "Rooftop bar", "Steakhouse"],
    highlights: [
      "El hotel urbano más sofisticado de San Pedro Garza García.",
      "Vista al Cerro de la Silla desde rooftop privado.",
      "Concierge Hand of Feel para itinerario corporativo o de placer."
    ],
    wtcPerks: ["Upgrade sujeto a disponibilidad", "Crédito en bar rooftop", "Acceso a sala VIP"]
  },
  {
    slug: "fiesta-americana-reforma",
    brand: "Fiesta Americana",
    name: "Fiesta Americana Reforma CDMX",
    city: "Ciudad de México",
    state: "CDMX",
    country: "México",
    category: "City",
    guests: "Negocios",
    rooms: 610,
    fromPrice: 3900,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80",
    amenities: ["Sky Lounge piso 28", "Spa Gem", "5 restaurantes", "A 5 min de Polanco"],
    highlights: [
      "Sobre Paseo de la Reforma con vistas al Castillo de Chapultepec.",
      "A pasos del Auditorio Nacional — perfecto para asistentes a conciertos.",
      "Sky Lounge con vista privilegiada al skyline de CDMX."
    ],
    wtcPerks: ["Upgrade sujeto a disponibilidad", "Late check-out", "Bienvenida con dulces típicos"]
  },
  {
    slug: "grand-fiesta-americana-chapultepec",
    brand: "Grand Fiesta Americana",
    name: "Grand Fiesta Americana Chapultepec",
    city: "Ciudad de México",
    state: "CDMX",
    country: "México",
    category: "City",
    guests: "Negocios",
    rooms: 203,
    fromPrice: 5200,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80",
    amenities: ["Vista al Bosque de Chapultepec", "Spa Gem", "Concierge personalizado"],
    highlights: [
      "Frente al Bosque de Chapultepec con vistas inigualables.",
      "A minutos de Polanco, Auditorio Nacional y Museo Soumaya.",
      "Concierge bilingüe para reservar conciertos, palcos y experiencias."
    ],
    wtcPerks: ["Upgrade sujeto a disponibilidad", "Desayuno gourmet", "Acceso ejecutivo"]
  },
  {
    slug: "fiesta-americana-merida",
    brand: "Fiesta Americana",
    name: "Fiesta Americana Mérida",
    city: "Mérida",
    state: "Yucatán",
    country: "México",
    category: "City",
    guests: "Familia",
    rooms: 350,
    fromPrice: 3400,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=80",
    amenities: ["Spa", "Restaurante regional", "Centro de negocios", "Cerca del centro histórico"],
    highlights: [
      "Punto de partida ideal para explorar Yucatán y Chichén Itzá.",
      "Cocina yucateca premiada en restaurante interno.",
      "WTC organiza tours a cenotes y zonas arqueológicas."
    ],
    wtcPerks: ["Tour gratis a Mérida histórico", "Late check-out", "Welcome amenity"]
  },
  {
    slug: "the-explorean-cozumel",
    brand: "The Explorean",
    name: "The Explorean Cozumel by Fiesta Americana",
    city: "Cozumel",
    state: "Quintana Roo",
    country: "México",
    category: "Adults Only",
    guests: "Adults Only",
    rooms: 56,
    fromPrice: 9800,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1600&q=80",
    amenities: ["All Inclusive Aventura", "Excursiones incluidas", "Spa", "Yoga frente al mar"],
    highlights: [
      "Concepto único: All-Inclusive de aventura para adultos.",
      "Excursiones (snorkel, kayak, ciclismo) ya incluidas en la tarifa.",
      "Solo 56 villas para máxima exclusividad."
    ],
    wtcPerks: ["Cena privada en playa", "Tour de snorkel premium", "Crédito en spa USD 75"]
  },
  {
    slug: "live-aqua-punta-cana",
    brand: "Live Aqua",
    name: "Live Aqua Beach Resort Punta Cana",
    city: "Punta Cana",
    state: "La Altagracia",
    country: "México", // técnicamente RD pero gestionado por Posadas
    category: "Adults Only",
    guests: "Adults Only",
    rooms: 348,
    fromPrice: 12400,
    currency: "MXN",
    cover: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80",
    amenities: ["Adults Only", "Spa Feel®", "8 restaurantes", "Premium Adults Beach"],
    highlights: [
      "Adults Only frente a Playa Uvero Alto, una de las más vírgenes de Punta Cana.",
      "Cocina de autor con chefs internacionales.",
      "Acceso al Premium Adults Beach Club."
    ],
    wtcPerks: ["Upgrade sujeto a disponibilidad", "Cena romántica en playa", "Spa amenity"]
  }
];

export const getHotel = (slug: string) => hotels.find(h => h.slug === slug);
export const hotelsByBrand = (brand: Hotel["brand"]) => hotels.filter(h => h.brand === brand);
