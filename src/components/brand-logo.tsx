type BrandLogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function BrandLogo({
  variant = "dark",
  compact = false,
}: BrandLogoProps) {
  const primary = variant === "light" ? "#ffffff" : "#1f2326";
  const accent = "#0d6b68";

  return (
    <span className="brand-logo" aria-label="VIA+">
      <svg
        aria-hidden="true"
        viewBox={compact ? "0 0 214 76" : "0 0 285 92"}
        role="img"
      >
        <g fill="none" strokeLinecap="square" strokeWidth="12">
          <path d="M18 20 48 70 78 20" stroke={primary} />
          <path d="M101 20v50" stroke={primary} />
          <path d="M130 70 166 18l36 52" stroke={accent} />
          <path d="M151 54h30M166 40v29" stroke={accent} strokeWidth="6" />
          <path d="M226 27h45M248.5 4.5v45" stroke={accent} />
        </g>
      </svg>
    </span>
  );
}
