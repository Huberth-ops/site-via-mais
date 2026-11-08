import Image from "next/image";
type BrandLogoProps = { variant?: "light" | "dark"; compact?: boolean };
export function BrandLogo({ compact = false }: BrandLogoProps) {
  return <span className={compact ? "brand-logo original-logo compact" : "brand-logo original-logo"}><Image src="/logo-via-mais-original.png" alt="VIA+ — Inteligência para alugar, tranquilidade para entregar." width={1254} height={1254} priority /></span>;
}
