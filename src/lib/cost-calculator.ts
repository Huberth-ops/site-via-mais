import type {
  DelayCalculation,
  SearchCostCalculation,
} from "@/lib/types";

export function calculateDelayCost(
  monthlyRent: number,
  days: number,
  monthlyCondo = 0,
  annualIptu = 0,
  annualTlrs = 0,
): DelayCalculation | null {
  if (
    !Number.isFinite(monthlyRent) ||
    !Number.isFinite(days) ||
    !Number.isFinite(monthlyCondo) ||
    !Number.isFinite(annualIptu) ||
    !Number.isFinite(annualTlrs) ||
    monthlyRent <= 0 ||
    days <= 0 ||
    monthlyCondo < 0 ||
    annualIptu < 0 ||
    annualTlrs < 0
  ) {
    return null;
  }

  const normalizedDays = Math.floor(days);
  const dailyCost = monthlyRent / 30;
  const rentCost = dailyCost * normalizedDays;
  const condoCost = (monthlyCondo / 30) * normalizedDays;
  const iptuCost = (annualIptu / 365) * normalizedDays;
  const tlrsCost = (annualTlrs / 365) * normalizedDays;

  return {
    monthlyRent,
    monthlyCondo,
    annualIptu,
    annualTlrs,
    days: normalizedDays,
    dailyCost,
    rentCost,
    condoCost,
    iptuCost,
    tlrsCost,
    estimatedCost: rentCost + condoCost + iptuCost + tlrsCost,
  };
}

export function calculateSearchCost(
  hourlyCost: number,
  hours: number,
  visits: number,
  transportPerVisit: number,
): SearchCostCalculation | null {
  const values = [hourlyCost, hours, visits, transportPerVisit];

  if (
    values.some((value) => !Number.isFinite(value) || value < 0) ||
    (hours <= 0 && visits <= 0)
  ) {
    return null;
  }

  const laborCost = hourlyCost * hours;
  const transportCost = Math.floor(visits) * transportPerVisit;

  return {
    hourlyCost,
    hours,
    visits: Math.floor(visits),
    transportPerVisit,
    laborCost,
    transportCost,
    estimatedCost: laborCost + transportCost,
  };
}
