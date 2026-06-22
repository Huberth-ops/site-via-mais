"use client";

import { useMemo, useState } from "react";
import {
  ArrowIcon,
  HomeCheckIcon,
  SearchIcon,
} from "@/components/icons";
import { whatsappUrl } from "@/lib/site-config";

type LeadIntent = "search" | "delivery";

export function LeadQualifier() {
  const [intent, setIntent] = useState<LeadIntent>("search");
  const [propertyType, setPropertyType] = useState("Residencial");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [realEstateAgency, setRealEstateAgency] = useState("");

  const href = useMemo(() => {
    const details =
      intent === "search"
        ? [
            "Olá, quero ajuda da VIA+ para organizar minha busca de imóvel.",
            `Tipo: ${propertyType}.`,
            `Região ou bairro: ${location.trim() || "a definir"}.`,
            `Faixa de aluguel: ${budget.trim() || "a definir"}.`,
            `Descrição do imóvel desejado: ${description.trim() || "a definir"}.`,
          ]
        : [
            "Olá, quero ajuda da VIA+ para preparar a entrega de um imóvel.",
            `Tipo: ${propertyType}.`,
            `Endereço, bairro ou região: ${location.trim() || "a definir"}.`,
            `Previsão de vistoria ou entrega: ${date || "a definir"}.`,
            `Imobiliária ou responsável: ${realEstateAgency.trim() || "a definir"}.`,
          ];

    return whatsappUrl(details.join("\n"));
  }, [
    budget,
    date,
    description,
    intent,
    location,
    propertyType,
    realEstateAgency,
  ]);

  return (
    <div className="hero-lead-card">
      <div className="lead-card-heading">
        <span className="lead-card-icon">
          {intent === "search" ? <SearchIcon /> : <HomeCheckIcon />}
        </span>
        <div>
          <p>Conte sua necessidade</p>
          <h2>
            {intent === "search"
              ? "Que imóvel você procura?"
              : "Qual imóvel você vai entregar?"}
          </h2>
        </div>
      </div>

      <div className="lead-intent" role="group" aria-label="Escolha sua necessidade">
        <button
          className={intent === "search" ? "active" : ""}
          type="button"
          onClick={() => setIntent("search")}
          aria-pressed={intent === "search"}
        >
          <SearchIcon />
          Quero encontrar
        </button>
        <button
          className={intent === "delivery" ? "active" : ""}
          type="button"
          onClick={() => setIntent("delivery")}
          aria-pressed={intent === "delivery"}
        >
          <HomeCheckIcon />
          Quero entregar
        </button>
      </div>

      <div className="lead-fields">
        <label>
          <span>Tipo de imóvel</span>
          <select
            value={propertyType}
            onChange={(event) => setPropertyType(event.target.value)}
          >
            <option>Residencial</option>
            <option>Comercial</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Sala ou loja</option>
            <option>Galpão</option>
            <option>Outro</option>
          </select>
        </label>

        <label>
          <span>
            {intent === "search"
              ? "Região ou bairro desejado"
              : "Endereço, bairro ou região"}
          </span>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder={
              intent === "search"
                ? "Ex.: região central"
                : "Ex.: bairro Todos os Santos"
            }
            autoComplete={intent === "search" ? "address-level3" : "street-address"}
          />
        </label>

        {intent === "search" ? (
          <>
            <label>
              <span>Faixa de aluguel</span>
              <input
                type="text"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                placeholder="Ex.: até R$ 2.500"
                inputMode="decimal"
              />
            </label>
            <label>
              <span>Breve descrição do imóvel desejado</span>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Ex.: 3 quartos, 1 suíte, garagem e próximo a escolas"
                rows={3}
              />
            </label>
          </>
        ) : (
          <>
            <label>
              <span>Previsão de vistoria ou entrega</span>
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
            <label>
              <span>Imobiliária ou responsável pela locação</span>
              <input
                type="text"
                value={realEstateAgency}
                onChange={(event) => setRealEstateAgency(event.target.value)}
                placeholder="Ex.: nome da imobiliária, proprietário ou sem imobiliária"
              />
            </label>
          </>
        )}
      </div>

      <a
        className="button lead-submit"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {intent === "search"
          ? "Enviar busca no WhatsApp"
          : "Enviar dados da entrega"}
        <ArrowIcon />
      </a>

      <p className="lead-privacy">
        Nada é armazenado neste site. Informe apenas os dados necessários; você
        poderá revisar a mensagem antes de enviá-la no WhatsApp.
      </p>
    </div>
  );
}
