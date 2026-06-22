import type { DelayCalculation } from "@/lib/types";

export function calculateDelayCost(
  monthlyRent: number,
  days: number,
): DelayCalculation | null {
  if (
    !Number.isFinite(monthlyRent) ||
    !Number.isFinite(days) ||
    monthlyRent <= 0 ||
    days <= 0
  ) {
    return null;
  }

  const normalizedDays = Math.floor(days);
  const dailyCost = monthlyRent / 30;

  return {
    monthlyRent,
    days: normalizedDays,
    dailyCost,
    estimatedCost: dailyCost * normalizedDays,
  };
}
