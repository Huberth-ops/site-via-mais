import type { SiteConfig } from "@/lib/types";

const fallbackUrl = "https://www.viamaisconsultoria.com.br";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl;

export const siteConfig: SiteConfig = {
  name: "VIA+",
  legalName: "VIA+ Soluções para Locação e Entrega",
  slogan: "Inteligência para alugar, tranquilidade para entregar.",
  description:
    "A VIA+ organiza a busca de imóvel em Montes Claros e orienta a preparação para entrega de imóvel alugado, sem substituir imobiliárias, corretores ou a vistoria oficial.",
  area: "Montes Claros/MG e região",
  city: "Montes Claros",
  state: "Minas Gerais",
  country: "Brasil",
  whatsapp: "5538999079952",
  whatsappDisplay: "(38) 99907-9952",
  siteUrl: rawSiteUrl.trim().replace(/\/$/, ""),
  services: [
    {
      id: "pesquisa",
      number: "01",
      title: "Pesquisa Orientada de Imóveis",
      description:
        "Busca de imóvel em Montes Claros com pesquisa e organização de opções públicas de locação conforme perfil, faixa de valor, localização, tipo de imóvel e necessidade.",
      benefits: [
        "Imóvel para alugar em Montes Claros com critérios definidos",
        "Imóvel comercial em Montes Claros quando essa for a necessidade",
        "Opções mais alinhadas ao perfil",
        "Menos tempo em anúncios dispersos",
        "Organização para comparar alternativas",
        "Atendimento residencial e comercial",
      ],
      disclaimer:
        "Não inclui negociação, intermediação da locação, anúncio de imóveis, representação de imobiliária ou atuação como corretor de imóveis.",
    },
    {
      id: "consultoria",
      number: "02",
      title: "Consultoria para Entrega",
      description:
        "Consultoria para entrega de imóvel em Montes Claros com leitura orientativa de contrato, laudo ou termo de vistoria de entrada e organização dos próximos passos.",
      benefits: [
        "Entendimento dos documentos",
        "Pontos que merecem atenção",
        "Preparação para vistoria de saída",
        "Organização para devolução de imóvel",
        "Sequência de ações mais clara",
        "Orientação antes da vistoria oficial",
      ],
      disclaimer:
        "Não inclui visita ao imóvel, emissão de laudo de vistoria, vistoria oficial ou decisão sobre aprovação da entrega.",
    },
    {
      id: "pre-vistoria",
      number: "03",
      title: "Pré-vistoria Orientativa",
      description:
        "Pré-vistoria em Montes Claros com visita presencial para observação visual do imóvel com base no laudo de entrada e nos documentos apresentados.",
      benefits: [
        "Verificação visual orientativa",
        "Registro de possíveis pendências",
        "Relatório de Pendências e Reparos Recomendados",
        "Preparação anterior à vistoria oficial",
      ],
      disclaimer:
        "Não é vistoria oficial da imobiliária ou parceiro, perícia, laudo técnico, avaliação estrutural ou garantia de aprovação.",
    },
    {
      id: "assessoria",
      number: "04",
      title: "Pré-vistoria com Assessoria",
      description:
        "Pré-vistoria orientativa, relatório preventivo e apoio na organização da preparação até a data de entrega do imóvel.",
      benefits: [
        "Priorização de pendências",
        "Organização dos reparos",
        "Acompanhamento dos próximos passos",
        "Mais clareza durante a preparação",
      ],
      disclaimer:
        "Reparos, serviços especializados, vistoria oficial e tratativas de locação permanecem separados e sob responsabilidade dos profissionais competentes.",
    },
  ],
  faqs: [
    {
      question: "A VIA+ realiza a vistoria oficial do imóvel?",
      answer:
        "Não. A vistoria oficial permanece sob responsabilidade da imobiliária, proprietário, administradora ou parceiro designado.",
    },
    {
      question: "A VIA+ emite laudo técnico?",
      answer:
        "Não. A VIA+ não emite laudo técnico, pericial, oficial ou laudo de vistoria da imobiliária.",
    },
    {
      question: "Qual documento é entregue na pré-vistoria?",
      answer:
        "Um Relatório de Pendências e Reparos Recomendados, de caráter preventivo e orientativo.",
    },
    {
      question: "O relatório substitui o laudo da imobiliária?",
      answer:
        "Não. Ele serve para organizar a preparação antes da vistoria oficial e não substitui o laudo de vistoria de entrada, saída ou devolução feito pela imobiliária ou parceiro responsável.",
    },
    {
      question: "A VIA+ garante aprovação na entrega?",
      answer:
        "Não. A decisão depende da vistoria oficial, do contrato, do laudo e dos responsáveis pelo processo.",
    },
    {
      question: "Qual é a diferença entre consultoria e pré-vistoria?",
      answer:
        "A consultoria orienta a leitura dos documentos e os próximos passos. A pré-vistoria inclui visita ao imóvel, observação visual e relatório.",
    },
    {
      question: "A pré-vistoria identifica problemas estruturais?",
      answer:
        "Não. Suspeitas estruturais, elétricas, hidráulicas ou outras situações técnicas devem ser avaliadas por profissional legalmente habilitado.",
    },
    {
      question: "A VIA+ executa reformas ou reparos?",
      answer:
        "Não como parte automática do serviço. Quando necessário, o cliente deve contratar profissionais adequados para cada atividade.",
    },
    {
      question: "Quanto tempo antes da entrega devo procurar a VIA+?",
      answer:
        "Preferencialmente assim que decidir desocupar o imóvel, para haver tempo de analisar documentos e organizar possíveis pendências.",
    },
    {
      question: "O que preciso apresentar?",
      answer:
        "Sempre que possível, contrato, laudo ou termo de vistoria de entrada, registros fotográficos e comunicações relacionadas ao imóvel.",
    },
    {
      question: "E se o laudo de entrada estiver incompleto?",
      answer:
        "A VIA+ poderá orientar com base no material disponível, deixando claras as limitações da análise.",
    },
    {
      question: "A VIA+ negocia aluguel ou contrato?",
      answer:
        "Não. A VIA+ não negocia contratos, valores, aluguel de imóveis ou condições de locação em nome do cliente.",
    },
    {
      question: "A VIA+ agenda visitas aos imóveis encontrados?",
      answer:
        "A organização da pesquisa não inclui intermediação. Agendamentos, propostas, visitas comerciais e negociações devem ser feitos com o anunciante, corretor de imóveis ou imobiliária responsável.",
    },
    {
      question: "A busca substitui um corretor?",
      answer:
        "Não. A VIA+ organiza opções públicas conforme o perfil do cliente; atos de corretagem, captação, negociação e fechamento de locação permanecem com corretores de imóveis e imobiliárias habilitadas.",
    },
    {
      question: "Vocês atendem imóveis residenciais e comerciais?",
      answer:
        "Sim, conforme a natureza da pesquisa ou da preparação solicitada.",
    },
    {
      question: "A VIA+ atende proprietários e imobiliárias?",
      answer:
        "Pode atender clientes indicados por proprietários, imobiliárias e corretores, desde que o escopo seja previamente definido e respeite os limites do serviço. A VIA+ não substitui a imobiliária, o corretor ou a vistoria oficial.",
    },
    {
      question: "O atendimento é online?",
      answer:
        "Não nesta primeira fase. Os serviços serão presenciais em Montes Claros/MG e região.",
    },
    {
      question: "Qual é o valor?",
      answer:
        "O valor depende do serviço, do imóvel e do deslocamento. A VIA+ informa as condições antes da contratação.",
    },
  ],
};

export function whatsappUrl(message?: string) {
  const text =
    message ||
    "Olá, quero saber mais sobre os serviços da VIA+. Minha necessidade é: encontrar um imóvel / preparar uma entrega.";
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
