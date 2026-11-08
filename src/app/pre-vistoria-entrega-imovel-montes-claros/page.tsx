import { ServiceVideo } from "@/components/service-video";
import type { Metadata } from "next";
import { LocalSeoPage } from "@/components/local-seo-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pré-vistoria e entrega de imóvel em Montes Claros | Via Mais",
  description:
    "Gestão da entrega em Montes Claros: pré-vistoria, orçamento integrado, contratação de prestadores e acompanhamento dos reparos.",
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
      lead="Da pré-vistoria à preparação final: a VIA+ organiza as pendências, contrata prestadores e acompanha os reparos aprovados para a devolução do imóvel alugado."
      primaryCta="Preparar minha entrega"
      primaryMessage="Olá! Estou entregando um imóvel em Montes Claros e gostaria de um orçamento para a assessoria completa da VIA+."
      disclaimer="A VIA+ não substitui a vistoria oficial da imobiliária, administradora, proprietário ou parceiro designado, não emite laudo técnico ou pericial e não garante aprovação na devolução de imóvel."
      sections={[
{ title: "Gestão completa da entrega", text: "Avaliamos documentos e necessidades, organizamos o orçamento e coordenamos os serviços aprovados.", items: ["Pré-vistoria presencial e identificação de pendências", "Contratação de prestadores para pintura, limpeza e reparos", "Acompanhamento da execução e prazos acordados", "Verificação final e apoio à vistoria oficial quando contratado", "Organização da devolução das chaves"] },
{ title: "Orçamento integrado e pagamento", text: "Pré-vistoria, gestão e acompanhamento podem integrar o pacote. A proposta define escopo, valor total, responsabilidades, pagamento e condições antes da contratação. O pagamento é feito diretamente ao prestador responsável pelo recebimento, conforme a proposta." },
{ title: "Chaves e acesso ao imóvel", text: "Você pode deixar as chaves com a VIA+ mediante autorização e condições combinadas de guarda, acesso e devolução. Assim, não precisa acompanhar individualmente cada prestador." },
{ title: "Já recebeu apontamentos?", text: "Também organizamos pendências após a vistoria de saída, contratamos prestadores e acompanhamos os reparos aprovados para eventual retorno ou conferência." },
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
    ><div className="container video-collection"><ServiceVideo id="planejamento" /><ServiceVideo id="antecipacao" /></div></LocalSeoPage>
  );
}
