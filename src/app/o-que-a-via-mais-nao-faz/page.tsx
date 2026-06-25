import type { Metadata } from "next";
import { LocalSeoPage } from "@/components/local-seo-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "O que a VIA+ não faz | Limites de atuação em Montes Claros",
  description:
    "Entenda por que a VIA+ não é imobiliária, não substitui corretores, não faz vistoria oficial e não emite laudo técnico em Montes Claros.",
  alternates: { canonical: "/o-que-a-via-mais-nao-faz" },
};

const faqs = [
  {
    question: "A VIA+ é uma imobiliária?",
    answer:
      "Não. A VIA+ atua como apoio orientativo e organizacional para busca de imóveis e preparação de entrega, sem anunciar, captar, intermediar ou fechar locações.",
  },
  {
    question: "A VIA+ substitui corretor de imóveis?",
    answer:
      "Não. Corretores e imobiliárias continuam responsáveis por visitas comerciais, propostas, negociação, intermediação e fechamento de locação.",
  },
  {
    question: "A VIA+ faz vistoria oficial?",
    answer:
      "Não. A vistoria oficial permanece sob responsabilidade da imobiliária, administradora, proprietário ou parceiro designado.",
  },
  {
    question: "O relatório da VIA+ é um laudo técnico?",
    answer:
      "Não. O relatório é preventivo e orientativo. Ele organiza pontos observados visualmente, mas não possui natureza pericial ou técnica.",
  },
  {
    question: "A VIA+ garante aprovação na entrega do imóvel?",
    answer:
      "Não. A aprovação depende da vistoria oficial, do contrato, do laudo de entrada e dos responsáveis pela locação.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function OQueAViaMaisNaoFazPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalSeoPage
        eyebrow={`Limites de atuação · ${siteConfig.area}`}
        title={
          <>
            O que a VIA+ não faz{" "}
            <span>também faz parte da transparência.</span>
          </>
        }
        lead="A VIA+ ajuda pessoas, empresas e clientes indicados por imobiliárias a organizar a busca, a entrega e a pré-vistoria de imóveis alugados em Montes Claros, sempre com limites claros de atuação."
        primaryCta="Entender meu caso"
        primaryMessage="Olá, quero entender se a VIA+ pode ajudar no meu caso e sei que o serviço não substitui imobiliária, corretor ou vistoria oficial."
        disclaimer="A VIA+ não é imobiliária, não substitui corretor de imóveis, não intermedeia locações, não realiza vistoria oficial, não emite laudo técnico e não garante aprovação na entrega do imóvel."
        sections={[
          {
            title: "Não somos imobiliária",
            text: "A VIA+ não anuncia imóveis, não capta imóveis, não administra carteira de locação e não fecha contratos. O apoio é organizar informações para que o cliente avance com mais clareza.",
            items: [
              "Sem intermediação de locação",
              "Sem negociação de aluguel",
              "Sem captação ou anúncio de imóveis",
              "Sem representação de imobiliária",
            ],
          },
          {
            title: "Não substituímos corretores",
            text: "A pesquisa orientada reúne opções públicas e ajuda o cliente a comparar critérios. Visitas, propostas, condições e fechamento seguem com anunciante, corretor ou imobiliária responsável.",
            items: [
              "Busca organizada por perfil",
              "Comparação inicial mais clara",
              "Próximos passos sugeridos",
              "Responsabilidades comerciais preservadas",
            ],
          },
          {
            title: "Não fazemos vistoria oficial",
            text: "A pré-vistoria da VIA+ é preventiva e orientativa. Ela ajuda o inquilino a se preparar antes da vistoria de saída, mas não substitui o procedimento oficial.",
            items: [
              "Observação visual do imóvel",
              "Organização de possíveis pendências",
              "Relatório preventivo",
              "Sem decisão sobre aprovação",
            ],
          },
          {
            title: "Não emitimos laudo técnico",
            text: "O relatório da VIA+ não tem natureza pericial, estrutural ou técnica. Suspeitas elétricas, hidráulicas, estruturais ou especializadas devem ser avaliadas por profissional habilitado.",
            items: [
              "Sem laudo pericial",
              "Sem avaliação estrutural",
              "Sem garantia de aprovação",
              "Sem substituição do laudo da imobiliária",
            ],
          },
        ]}
      />
    </>
  );
}
