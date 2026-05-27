export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Guías" | "Cruceros" | "Tips" | "Destinos";
  readingMinutes: number;
  publishedAt: string;       // YYYY-MM-DD
  cover: string;
  body: { heading?: string; text: string }[];
};

export const posts: Post[] = [
  {
    slug: "mejor-epoca-para-visitar-japon",
    title: "La mejor época para visitar Japón (mes por mes)",
    excerpt:
      "De la floración del cerezo a la nieve de Hokkaido: el calendario definitivo para planear tu viaje a Japón.",
    category: "Guías",
    readingMinutes: 7,
    publishedAt: "2026-04-12",
    cover: "/paquetes/japon-samurai.jpg",
    body: [
      { heading: "Primavera (marzo–mayo)", text: "Sakura. El espectáculo más esperado del año. Las flores duran apenas dos semanas; reservar con 6 meses de anticipación es lo prudente. Tokio florece a finales de marzo, Kioto unos días después y Hokkaido recién en mayo." },
      { heading: "Verano (junio–agosto)", text: "Festivales de fuegos artificiales (hanabi), templos rodeados de hortensias y la magia de Kioto Gion Matsuri. Calor y humedad altos: lleva ropa ligera y reserva ryokans con aire acondicionado." },
      { heading: "Otoño (septiembre–noviembre)", text: "Momiji: los arces se tiñen de rojo. La temporada favorita de los fotógrafos. Clima fresco, días claros y precios más amables que en sakura." },
      { heading: "Invierno (diciembre–febrero)", text: "Onsens al aire libre, monos de nieve en Jigokudani y Hokkaido como capital mundial del polvo blanco. Tokio es seco y soleado: perfecto para visitar templos sin multitudes." },
      { heading: "Nuestra recomendación", text: "Si es tu primer Japón, abril (sakura) u octubre (otoño) son imbatibles. Para presupuesto ajustado, junio o noviembre te dan clima estable y precios más bajos." }
    ]
  },
  {
    slug: "como-elegir-tu-primer-crucero",
    title: "Cómo elegir tu primer crucero (sin equivocarte)",
    excerpt:
      "Disney, Royal, Norwegian, Celebrity… ¿cuál es para ti? Una guía honesta para no terminar en el barco equivocado.",
    category: "Cruceros",
    readingMinutes: 6,
    publishedAt: "2026-03-30",
    cover: "/paquetes/celebrity-cruises.jpg",
    body: [
      { heading: "Empieza por preguntarte: ¿con quién viajo?", text: "Familias con niños pequeños: Disney es imbatible. Parejas adultas: Celebrity o Royal Caribbean en clase superior. Grupos jóvenes: Norwegian por su libertad y go-karts en cubierta." },
      { heading: "Duración: ni mucho ni poco", text: "El primer crucero ideal son 7 noches. Suficiente para acostumbrarse al mar sin sentirse atrapado. Si dudas, prueba 4–5 noches por Bahamas antes de comprometerte con un Transatlántico." },
      { heading: "Cabina interior vs ocean view vs balcón", text: "Interior es el más económico y se duerme increíble. Balcón vale cada peso en rutas escénicas como Alaska o el Mediterráneo. Ocean view es el punto medio si te dan claustrofobia los espacios sin ventana." },
      { heading: "Lo que casi nadie te dice", text: "Los precios suben acercándose a la fecha. Reservar con 6–9 meses de anticipación te da mejor cabina y mejor precio. Y sí: la propina (gratuity) NO está incluida en el precio inicial." }
    ]
  },
  {
    slug: "que-empacar-para-alaska",
    title: "Qué empacar para un crucero por Alaska",
    excerpt: "Capas, capas y más capas. La lista definitiva para no congelarte ni cargar maletas innecesarias.",
    category: "Tips",
    readingMinutes: 5,
    publishedAt: "2026-03-15",
    cover: "/paquetes/norwegian-cruise-line.jpg",
    body: [
      { heading: "El principio de las capas", text: "Camiseta térmica + fleece + chamarra impermeable. Funcional desde cubierta del barco hasta una caminata frente al glaciar Hubbard." },
      { heading: "Lo que SIEMPRE se olvida", text: "Binoculares (ballenas, águilas, osos), repelente de mosquitos (sí, en Alaska hay), y un protector solar SPF 50: el reflejo del hielo quema más de lo que crees." },
      { heading: "Calzado", text: "Botas impermeables tipo trekking ligero. Olvida los tenis blancos: el muelle de Skagway es de madera mojada todo el día." }
    ]
  },
  {
    slug: "italia-en-10-dias-itinerario",
    title: "Italia en 10 días: el itinerario que de verdad funciona",
    excerpt: "Roma, Florencia, Venecia y Bolonia sin correr. Cómo distribuir tu tiempo (y tu dinero) para no salir agotado.",
    category: "Destinos",
    readingMinutes: 8,
    publishedAt: "2026-02-28",
    cover: "/paquetes/magia-italiana.jpg",
    body: [
      { heading: "Por qué 10 días, no 7", text: "Italia no se digiere en menos. Con 10 días puedes ver 4 ciudades sin sentir que es un sprint. Menos tiempo, y el Vaticano se convierte en una checklist en lugar de una experiencia." },
      { heading: "El orden importa", text: "Llega a Roma, baja a Florencia y termina en Venecia o Bolonia. Volar desde una ciudad distinta a la de llegada (open jaw) te ahorra un día de transporte." },
      { heading: "Trenes Frecciarossa", text: "El tren bala italiano es el secreto mejor guardado. Roma–Florencia en 1h30, Florencia–Venecia en 2h. Reserva clase Standard con anticipación y olvídate de manejar." },
      { heading: "Comida real", text: "Pasta cacio e pepe en Roma. Bistecca alla fiorentina en Florencia. Tagliatelle al ragú en Bolonia. Cicchetti con un Spritz en Venecia. Es un viaje gastronómico además de cultural." }
    ]
  },
  {
    slug: "todo-incluido-vs-tour-organizado",
    title: "Todo incluido vs Tour organizado: ¿cuál te conviene?",
    excerpt: "Resort de playa o circuito europeo. Cuándo elegir cada uno y por qué (casi) nadie se arrepiente de un buen tour.",
    category: "Tips",
    readingMinutes: 4,
    publishedAt: "2026-02-10",
    cover: "/paquetes/disney-cruise-line.jpg",
    body: [
      { heading: "Todo incluido: descanso puro", text: "Funciona cuando lo único que quieres es desconectar. Cancún, Punta Cana, Riviera Maya. Cero decisiones, máxima recarga." },
      { heading: "Tour organizado: cobertura máxima", text: "Quieres ver lo más posible de un país nuevo sin perder tiempo organizando trenes, hoteles ni traslados. Europa y Asia se aprovechan 10× con tour." },
      { heading: "El híbrido WTC", text: "Combinamos: 5 días de tour cultural + 5 días de playa. Lo mejor de los dos mundos. Pregúntanos por nuestras versiones híbridas." }
    ]
  }
];

export const getPost = (slug: string) => posts.find(p => p.slug === slug);
