import type { Metadata } from "next";
import { LocalSeoPage } from "@/components/local-seo-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Clientes indicados por imobiliárias | Via Mais Montes Claros",
  description: "Um único contato para organizar orçamentos, contratar prestadores e acompanhar reparos dos clientes da sua imobiliária em Montes Claros.",
  alternates: { canonical: "/clientes-indicados-por-imobiliarias" },
};

export default function ClientesIndicadosPorImobiliariasPage() {
  return (
    <LocalSeoPage
      eyebrow={`Parcerias e indicações · ${siteConfig.area}`}
      title={
        <>
          Um único contato para organizar os reparos dos seus clientes.{" "}

        </>
      }
      lead="Sua imobiliária pode encaminhar o cliente à VIA+. Levantamos as necessidades, organizamos os serviços, contratamos prestadores e acompanhamos a execução, centralizando a comunicação sobre reparos e prazos."
      primaryCta="Quero conhecer a parceria para imobiliárias"
      primaryMessage="Olá! Quero conhecer a parceria para imobiliárias."
      disclaimer="A VIA+ não substitui imobiliária, corretor de imóveis, administradora, parceiro responsável, vistoria oficial, laudo de vistoria da imobiliária, negociação ou qualquer ato de corretagem."
      sections={[
        {
          title: "Como a indicação funciona",
          text: "A imobiliária, o corretor, o proprietário ou o parceiro podem indicar a VIA+ para organizar orçamentos, contratar prestadores e acompanhar pendências antes ou após a vistoria. A contratação é opcional e independente dos serviços da imobiliária. Aviso prévio, obrigações contratuais e prazo de devolução devem ser observados caso a caso.",
          items: [
            "Centralização do atendimento e dos orçamentos",
            "Organização de pendências antes da entrega",
            "Contratação e acompanhamento dos prestadores",
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
