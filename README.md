# World Travel Co. — Sitio web v1

Sitio editorial premium para **World Travel Co.** construido con **Next.js 15 + Tailwind CSS**, optimizado para conversión vía WhatsApp.

---

## ⚡ Cómo correrlo (3 comandos)

```bash
cd "ENTREGABLE WTC/SITIO"
npm install
npm run dev
```

Abre **http://localhost:3000**

> Requiere Node 18.18+. Recomendado Node 20 LTS.

---

## 🚀 Para subir a producción (Vercel — gratis y en 2 min)

1. Sube esta carpeta a un repo de GitHub.
2. Entra a [vercel.com/new](https://vercel.com/new), conecta el repo.
3. Vercel detecta Next.js automático. **Deploy**.
4. Conecta tu dominio `wtravelcompany.com` en *Project → Settings → Domains*.

---

## 📁 Estructura

```
SITIO/
├─ public/
│  ├─ brand/        ← logos PNG (horizontal, vertical, isotipo)
│  └─ paquetes/     ← las 9 imágenes de los paquetes
├─ src/
│  ├─ app/
│  │  ├─ page.tsx                  ← Home (one-page)
│  │  ├─ paquetes/page.tsx         ← Listado + buscador con filtros
│  │  ├─ paquetes/[slug]/page.tsx  ← Detalle de cada paquete (14 páginas auto)
│  │  ├─ blog/page.tsx             ← Listado del diario
│  │  ├─ blog/[slug]/page.tsx      ← Artículos
│  │  ├─ contacto/page.tsx         ← Formulario + WhatsApp
│  │  ├─ not-found.tsx
│  │  ├─ globals.css
│  │  └─ layout.tsx                ← Header + Footer + WhatsApp FAB
│  ├─ components/site/             ← Todos los componentes UI
│  ├─ data/
│  │  ├─ packages.ts               ← ⭐ DATOS DE LOS 14 PAQUETES
│  │  ├─ blog.ts                   ← ⭐ 5 ARTÍCULOS
│  │  └─ contact.ts                ← ⭐ WHATSAPP, EMAIL, RRSS
│  └─ lib/utils.ts
├─ tailwind.config.ts              ← Sistema de diseño (colores WTC + tipografía)
└─ package.json
```

---

## 🎨 Sistema de diseño

**Filosofía:** Editorial Premium — inspirado en Airbnb + Wired. Tipografía grande, fotos full-bleed, mucho espacio en blanco, calidez de marca.

| Token       | Valor                                                       |
|-------------|-------------------------------------------------------------|
| `--sun`     | `#F26B3A` (naranja vibrante de tu logo)                     |
| `--ink`     | `#0F1A24` (azul carbón profundo)                            |
| `--bone`    | `#FBF8F3` (crema base, sensación papel premium)             |
| `--sea`     | `#0B2B3B` (azul océano para secciones oscuras)              |
| `--gold`    | `#C9A14A` (acento para detalles)                            |
| Fuente texto| **Manrope** (Google Fonts)                                  |
| Fuente display | **Fraunces** serif italic — para titulares aspiracionales |
| Bordes      | radios grandes (1.25 – 2 rem) para sensación premium        |

Editar en `tailwind.config.ts`.

---

## ✏️ ¿Dónde edito X?

| Quieres cambiar…                | Edita…                              |
|---------------------------------|-------------------------------------|
| WhatsApp / email / dirección    | `src/data/contact.ts`               |
| Datos de un paquete             | `src/data/packages.ts`              |
| Agregar un paquete nuevo        | Empuja un objeto al array `packages` |
| Artículo del blog               | `src/data/blog.ts`                  |
| Colores / tipografía            | `tailwind.config.ts`                |
| Logo                            | `public/brand/`                     |
| Imagen hero de un paquete       | `public/paquetes/` + ruta `hero`    |
| Testimonios                     | `src/components/site/Testimonials.tsx` |

---

## 📦 Catálogo cargado (14 paquetes)

**Cruceros (10):**
- Celebrity Ascent® — Caribe
- Celebrity Infinity® — Islas Griegas
- Celebrity Millennium® — Japón
- Disney Magic® — Caribe
- Disney Dream® — Bahamas
- Disney Treasure® — Caribe
- Royal Caribbean (Icon / Wonder / Legend) — Bahamas + Mediterráneo
- Norwegian Jade® — Alaska
- Norwegian Prima® — Caribe
- Norwegian Pride of America® — Hawái

**Tours con vuelo (4):**
- Japón: El Camino del Samurái 武士の道 (Aeroméxico)
- Mega Japón y Corea
- Magia Italiana (Roma–Florencia–Venecia–Bolonia)
- Pasión Italiana + Mediterráneo (Costa Esmeralda)

---

## 📝 Pendiente para v2 (cuando estés listo)

- [ ] Cambiar Instagram/Facebook/TikTok reales en `src/data/contact.ts`
- [ ] Conectar formulario a Resend / Formspree / Plunk para emails automáticos
- [ ] Agregar imágenes reales de cada destino (no solo el flyer del paquete)
- [ ] Conectar Google Analytics 4 (`NEXT_PUBLIC_GA_ID` en layout)
- [ ] Sitemap.xml dinámico + robots.txt
- [ ] Versionar en GitHub y deploy a Vercel con dominio
- [ ] Sumar 3-4 testimonios reales con foto del cliente

---

Hecho con cariño para que **WTC** se vea como la agencia premium que es. ✈
