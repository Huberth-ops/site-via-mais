import type { Metadata } from "next";
import { LocalSeoPage } from "@/components/local-seo-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pré-vistoria e entrega de imóvel em Montes Claros | Via Mais",
  description:
    "Consultoria para entrega de imóvel em Montes Claros e pré-vistoria orientativa antes da vistoria oficial da imobiliária, administradora ou parceiro responsável.",
  alternates: { canonical: "/pre-vistoria-entrega-imovel-montes-claros" },
};

export default function PreVistoriaEntregaImovelMontesClarosPage() {
  return (
    <LocalSeoPage
      eyebrow={`Entrega de imóvel · ${siteConfig.area}`}
      title={
        <>
          Pré-vistoria em Montes Claros{" "}
          <span>antes da entrega do imóvel.</span>
        </>
      }
      lead="A consultoria para entrega de imóvel em Montes Claros ajuda o inquilino a revisar documentos, entender o laudo de vistoria de entrada e organizar pendências antes da vistoria de saída."
      primaryCta="Preparar minha entrega"
      primaryMessage="Olá, quero orientação para entrega de imóvel em Montes Claros e entendo que a VIA+ não substitui a vistoria oficial da imobiliária ou parceiro."
      disclaimer="A VIA+ não substitui a vistoria oficial da imobiliária, administradora, proprietário ou parceiro designado, não emite laudo técnico ou pericial e não garante aprovação na devolução de imóvel."
      sections={[
        {
          title: "Preparação preventiva",
          text: "O atendimento é indicado para quem quer chegar à vistoria de saída com mais clareza sobre pintura, limpeza, instalações aparentes, conservação geral e itens descritos no laudo de vistoria de entrada.",
          items: [
            "Leitura orientativa do laudo de vistoria de entrada",
            "Organização de possíveis pendências",
            "Priorização do que merece atenção",
            "Apoio antes da devolução de imóvel",
          ],
        },
        {
          title: "Relatório orientativo",
          text: "Nos serviços de pré-vistoria, a VIA+ pode entregar um relatório preventivo com pontos observados visualmente para ajudar na organização da preparação.",
          items: [
            "Não é laudo de vistoria oficial",
            "Não possui natureza pericial",
            "Não substitui decisão da imobiliária ou parceiro",
            "Não altera obrigações contratuais da locação",
          ],
        },
      ]}
    />
  );
}
