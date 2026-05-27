import type { MetadataRoute } from "next";
import { packages } from "@/data/packages";
import { posts } from "@/data/blog";

const BASE = "https://world-travel-co.vercel.app";
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/paquetes",
    "/blog",
    "/contacto",
    "/arma-tu-viaje",
    "/experiencias",
    "/experiencias/mundial-2026",
    "/experiencias/hoteles",
    "/experiencias/aviacion",
    "/experiencias/transporte",
    "/experiencias/conciertos",
    "/experiencias/cruceros"
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.startsWith("/experiencias/mundial") ? 0.95 : 0.8
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${BASE}/paquetes/${p.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...packageRoutes, ...blogRoutes];
}
