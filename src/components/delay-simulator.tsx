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
  const [propertyType, setPropertyType] = useState<"apartment" | "house">(
    "apartment",
  );
  const [condo, setCondo] = useState("250");
  const [iptu, setIptu] = useState("900");
  const [tlrs, setTlrs] = useState("180");
  const result = useMemo(
    () =>
      calculateDelayCost(
        Number(rent.replace(",", ".")),
        Number(days.replace(",", ".")),
        propertyType === "apartment" ? Number(condo.replace(",", ".")) : 0,
        Number(iptu.replace(",", ".")),
        Number(tlrs.replace(",", ".")),
      ),
    [condo, days, iptu, propertyType, rent, tlrs],
  );

  const costs = result
    ? [
        ["Aluguel", result.rentCost],
        ["Condomínio", result.condoCost],
        ["IPTU", result.iptuCost],
        ["TLRS", result.tlrsCost],
      ].filter(([, value]) => Number(value) > 0)
    : [];
  const maxCost = Math.max(...costs.map(([, value]) => Number(value)), 1);

  return (
    <div className="simulator-card">
      <div className="simulator-heading">
        <p className="comparison-label">Simulador de atraso na entrega</p>
        <h3>Veja o custo que continua correndo a cada dia</h3>
      </div>

      <div className="property-type-toggle" role="group" aria-label="Tipo de imóvel">
        <button
          type="button"
          className={propertyType === "apartment" ? "active" : ""}
          onClick={() => setPropertyType("apartment")}
        >
          Apartamento
        </button>
        <button
          type="button"
          className={propertyType === "house" ? "active" : ""}
          onClick={() => setPropertyType("house")}
        >
          Casa
        </button>
      </div>

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
        {propertyType === "apartment" && (
          <label>
            <span>Condomínio mensal</span>
            <span className="input-prefix">
              <b>R$</b>
              <input
                inputMode="decimal"
                min="0"
                onChange={(event) => setCondo(event.target.value)}
                type="number"
                value={condo}
              />
            </span>
          </label>
        )}
        <label>
          <span>IPTU anual do carnê</span>
          <span className="input-prefix">
            <b>R$</b>
            <input
              inputMode="decimal"
              min="0"
              onChange={(event) => setIptu(event.target.value)}
              type="number"
              value={iptu}
            />
          </span>
        </label>
        <label>
          <span>TLRS anual do carnê</span>
          <span className="input-prefix">
            <b>R$</b>
            <input
              inputMode="decimal"
              min="0"
              onChange={(event) => setTlrs(event.target.value)}
              type="number"
              value={tlrs}
            />
          </span>
        </label>
      </div>

      <div className="simulator-result" aria-live="polite">
        {result ? (
          <>
            <p>Total proporcional estimado para {result.days} dias</p>
            <strong>{currency.format(result.estimatedCost)}</strong>
            <div className="cost-bars light" aria-label="Composição do custo do atraso">
              {costs.map(([label, value]) => (
                <div key={String(label)}>
                  <span>{label}</span>
                  <b>{currency.format(Number(value))}</b>
                  <i style={{ width: `${(Number(value) / maxCost) * 100}%` }} />
                </div>
              ))}
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
        Cenário inicial ilustrativo e editável. Em Montes Claros, IPTU e TLRS
        variam conforme o cadastro e o carnê do imóvel. Condomínio varia por
        edifício e pode não existir. Água, energia, multas e outras cobranças
        contratuais não estão incluídas.
      </p>

      <p className="research-source">
        Referências consultadas em 21/06/2026:{" "}
        <a
          href="https://financas.montesclaros.mg.gov.br/comunicado/iptu-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          IPTU 2026
        </a>
        ,{" "}
        <a
          href="https://financas.montesclaros.mg.gov.br/comunicado/tlrs-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          TLRS 2026
        </a>{" "}
        e{" "}
        <a
          href="https://www.vivareal.com.br/aluguel/minas-gerais/montes-claros/apartamento_residencial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          amostra de condomínios anunciados
        </a>
        .
      </p>
    </div>
  );
}
