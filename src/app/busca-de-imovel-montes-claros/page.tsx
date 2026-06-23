import type { Metadata } from "next";
import { LocalSeoPage } from "@/components/local-seo-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Busca de imóvel em Montes Claros | Via Mais",
  description:
    "Apoio para busca de imóvel em Montes Claros, incluindo imóvel para alugar, imóvel comercial e organização de opções públicas sem substituir imobiliária ou corretor.",
  alternates: { canonical: "/busca-de-imovel-montes-claros" },
};

export default function BuscaDeImovelMontesClarosPage() {
  return (
    <LocalSeoPage
      eyebrow={`Pesquisa orientada · ${siteConfig.area}`}
      title={
        <>
          Busca de imóvel em Montes Claros{" "}
          <span>com critérios claros.</span>
        </>
      }
      lead="A VIA+ organiza opções públicas de imóvel para alugar em Montes Claros conforme perfil, localização, faixa de aluguel, tipo de imóvel e prioridades informadas pelo cliente."
      primaryCta="Quero apoio na busca"
      primaryMessage="Olá, quero apoio na busca de imóvel em Montes Claros e entendo que a VIA+ não substitui imobiliária ou corretor."
      disclaimer="A VIA+ não anuncia imóveis, não capta imóveis, não intermedeia locação de imóveis em Montes Claros, não negocia contratos e não substitui imobiliária ou corretor de imóveis."
      sections={[
        {
          title: "Quando faz sentido",
          text: "O serviço ajuda quem está sem tempo para filtrar anúncios dispersos ou precisa comparar opções com mais organização antes de conversar com o anunciante, corretor ou imobiliária.",
          items: [
            "Imóvel para alugar em Montes Claros",
            "Imóvel comercial em Montes Claros",
            "Locação residencial com critérios definidos",
            "Comparação inicial de localização, valor e estrutura",
          ],
        },
        {
          title: "O que a VIA+ entrega",
          text: "A entrega é uma organização orientativa das opções públicas encontradas, com pontos relevantes para o cliente avaliar antes de avançar nas tratativas.",
          items: [
            "Resumo das opções compatíveis com o perfil",
            "Critérios para comparação",
            "Observações sobre pontos de atenção",
            "Próximos passos sugeridos para contato com os responsáveis",
          ],
        },
      ]}
    />
  );
}
