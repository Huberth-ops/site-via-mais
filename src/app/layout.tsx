import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site-config";
import "@fontsource-variable/montserrat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Via Mais | Busca e Preparação para Entrega de Imóveis",
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  alternates: { canonical: "/" },
  keywords: [
    "VIA+",
    "Via Mais",
    "busca de imóveis",
    "locação de imóveis",
    "entrega de imóveis",
    "pré-vistoria orientativa",
    "Montes Claros",
    "Minas Gerais",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.name,
    title: "VIA+ | Busca e entrega inteligente de imóveis",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIA+ | Busca e entrega inteligente de imóveis",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2326",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
