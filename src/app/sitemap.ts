import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/busca-de-imovel-montes-claros", priority: 0.85 },
    { path: "/pre-vistoria-entrega-imovel-montes-claros", priority: 0.85 },
    { path: "/clientes-indicados-por-imobiliarias", priority: 0.75 },
  ] as const;

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
