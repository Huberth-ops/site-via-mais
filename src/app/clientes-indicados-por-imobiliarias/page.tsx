import type { Metadata } from "next";
import { LocalSeoPage } from "@/components/local-seo-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Clientes indicados por imobiliárias | Via Mais Montes Claros",
  description:
    "A VIA+ atende clientes indicados por imobiliárias, corretores, proprietários e parceiros em Montes Claros, com apoio orientativo que não substitui a locação nem a vistoria oficial.",
  alternates: { canonical: "/clientes-indicados-por-imobiliarias" },
};

export default function ClientesIndicadosPorImobiliariasPage() {
  return (
    <LocalSeoPage
      eyebrow={`Parcerias e indicações · ${siteConfig.area}`}
      title={
        <>
          Atendemos clientes indicados por imobiliárias{" "}
          <span>com limites claros.</span>
        </>
      }
      lead="A VIA+ pode atender clientes indicados por imobiliárias, corretores de imóveis, proprietários ou parceiros em Montes Claros para apoiar a organização da busca, da preparação para entrega ou da leitura orientativa de documentos."
      primaryCta="Falar sobre indicação"
      primaryMessage="Olá, quero falar sobre cliente indicado por imobiliária/corretor e entendo que a VIA+ atua apenas como apoio orientativo."
      disclaimer="A VIA+ não substitui imobiliária, corretor de imóveis, administradora, parceiro responsável, vistoria oficial, laudo de vistoria da imobiliária, negociação ou qualquer ato de corretagem."
      sections={[
        {
          title: "Como a indicação funciona",
          text: "A imobiliária, o corretor, o proprietário ou o parceiro podem indicar a VIA+ quando o cliente precisa de apoio organizacional, sem transferir responsabilidades da locação.",
          items: [
            "Apoio para entender documentos",
            "Organização de pendências antes da entrega",
            "Pesquisa orientada de opções públicas",
            "Comunicação clara sobre limites do serviço",
          ],
        },
        {
          title: "O que permanece com a imobiliária",
          text: "A responsabilidade por vistoria oficial, laudo de vistoria, condições contratuais, negociação, aprovação, cobrança e decisão final continua com os responsáveis pela locação.",
          items: [
            "Vistoria oficial de entrada ou saída",
            "Laudo oficial da imobiliária ou parceiro",
            "Negociação de aluguel de imóveis",
            "Intermediação e fechamento de locação",
          ],
        },
      ]}
    />
  );
}
