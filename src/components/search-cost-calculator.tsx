"use client";

import { useMemo, useState } from "react";
import { calculateSearchCost } from "@/lib/cost-calculator";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function SearchCostCalculator() {
  const [hourlyCost, setHourlyCost] = useState("40");
  const [hours, setHours] = useState("20");
  const [visits, setVisits] = useState("4");
  const [transport, setTransport] = useState("50");

  const result = useMemo(
    () =>
      calculateSearchCost(
        Number(hourlyCost),
        Number(hours),
        Number(visits),
        Number(transport),
      ),
    [hourlyCost, hours, transport, visits],
  );

  const maxCost = result
    ? Math.max(result.laborCost, result.transportCost, 1)
    : 1;

  return (
    <div className="cost-comparison cost-calculator">
      <p className="comparison-label">Custo potencial sem filtro inicial</p>
      <h3>Quanto a procura pode consumir da sua operação?</h3>

      <div className="compact-fields">
        <label>
          <span>Custo por hora</span>
          <input
            type="number"
            min="0"
            value={hourlyCost}
            onChange={(event) => setHourlyCost(event.target.value)}
          />
        </label>
        <label>
          <span>Horas na pesquisa</span>
          <input
            type="number"
            min="0"
            value={hours}
            onChange={(event) => setHours(event.target.value)}
          />
        </label>
        <label>
          <span>Visitas</span>
          <input
            type="number"
            min="0"
            value={visits}
            onChange={(event) => setVisits(event.target.value)}
          />
        </label>
        <label>
          <span>Custo por visita</span>
          <input
            type="number"
            min="0"
            value={transport}
            onChange={(event) => setTransport(event.target.value)}
          />
        </label>
      </div>

      {result && (
        <>
          <div className="impact-total">
            <span>Custo indireto estimado</span>
            <strong>{currency.format(result.estimatedCost)}</strong>
            <small>
              {result.hours} horas e {result.visits} deslocamentos/visitas
            </small>
          </div>

          <div className="cost-bars" aria-label="Composição do custo da pesquisa">
            <div>
              <span>Tempo de trabalho</span>
              <b>{currency.format(result.laborCost)}</b>
              <i style={{ width: `${(result.laborCost / maxCost) * 100}%` }} />
            </div>
            <div>
              <span>Deslocamentos</span>
              <b>{currency.format(result.transportCost)}</b>
              <i style={{ width: `${(result.transportCost / maxCost) * 100}%` }} />
            </div>
          </div>
        </>
      )}

      <p className="legal-note">
        Cenário editável e meramente ilustrativo. Não representa economia
        garantida nem o preço do serviço da VIA+.
      </p>
    </div>
  );
}
