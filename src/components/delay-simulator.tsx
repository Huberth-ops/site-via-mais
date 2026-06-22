"use client";

import { useMemo, useState } from "react";
import { calculateDelayCost } from "@/lib/cost-calculator";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function DelaySimulator() {
  const [rent, setRent] = useState("2000");
  const [days, setDays] = useState("10");
  const result = useMemo(
    () =>
      calculateDelayCost(
        Number(rent.replace(",", ".")),
        Number(days.replace(",", ".")),
      ),
    [rent, days],
  );

  return (
    <div className="simulator-card">
      <div className="simulator-fields">
        <label>
          <span>Valor mensal do aluguel</span>
          <span className="input-prefix">
            <b>R$</b>
            <input
              inputMode="decimal"
              min="0"
              name="rent"
              onChange={(event) => setRent(event.target.value)}
              type="number"
              value={rent}
            />
          </span>
        </label>
        <label>
          <span>Dias adicionais</span>
          <input
            inputMode="numeric"
            min="1"
            name="days"
            onChange={(event) => setDays(event.target.value)}
            type="number"
            value={days}
          />
        </label>
      </div>

      <div className="simulator-result" aria-live="polite">
        {result ? (
          <>
            <p>Custo proporcional estimado</p>
            <strong>{currency.format(result.estimatedCost)}</strong>
            <div className="result-breakdown">
              <span>Valor diário</span>
              <b>{currency.format(result.dailyCost)}</b>
              <span>Período calculado</span>
              <b>{result.days} dias</b>
            </div>
          </>
        ) : (
          <>
            <p>Preencha valores maiores que zero</p>
            <strong>—</strong>
          </>
        )}
      </div>

      <p className="legal-note">
        Resultado meramente ilustrativo. Contrato, condomínio, consumo,
        tributos e outras taxas podem alterar o custo real.
      </p>
    </div>
  );
}
