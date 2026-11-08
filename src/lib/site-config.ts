import type { SiteConfig } from "@/lib/types";

const fallbackUrl = "https://www.viamaisconsultoria.com.br";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl;

export const siteConfig: SiteConfig = {
  name: "VIA+",
  legalName: "VIA+ Soluções para Locação e Entrega",
  slogan: "Inteligência para alugar, tranquilidade para entregar.",
  description:
    "Prepare a entrega do seu imóvel com a VIA+. Pré-vistoria, contratação de prestadores, reparos e acompanhamento completo em Montes Claros/MG.",
  area: "Montes Claros/MG e região",
  city: "Montes Claros",
  state: "Minas Gerais",
  country: "Brasil",
  whatsapp: "5538999079952",
  whatsappDisplay: "(38) 99907-9952",
  instagramUrl: "https://www.instagram.com/viamaisbuscaeentregadeimoveis",
  siteUrl: rawSiteUrl.trim().replace(/\/$/, ""),
  services: [
  {
    "id": "gestao",
    "number": "01",
    "title": "Gestão completa da entrega",
    "description": "Organizamos a preparação do imóvel, contratamos prestadores e acompanhamos os reparos aprovados até a preparação final.",
    "benefits": [
      "Análise orientativa dos documentos e laudo de entrada",
      "Pré-vistoria presencial e organização das pendências",
      "Orçamento integrado e contratação de prestadores",
      "Coordenação de pintura, limpeza e reparos aprovados",
      "Acompanhamento da execução e dos prazos acordados",
      "Verificação final, apoio à vistoria quando contratado e organização das chaves"
    ],
    "disclaimer": "Escopo e condições definidos no orçamento. Não substitui vistoria oficial nem garante aprovação."
  },
  {
    "id": "pre-vistoria",
    "number": "02",
    "title": "Pré-vistoria avulsa",
    "description": "Identifique possíveis pendências antes da vistoria oficial, com visita presencial e relatório preventivo e orientativo.",
    "benefits": [
      "Observação visual do imóvel",
      "Relatório de Pendências e Reparos Recomendados"
    ],
    "disclaimer": "Escopo e condições definidos no orçamento. Não substitui vistoria oficial nem garante aprovação."
  },
  {
    "id": "pendencias",
    "number": "03",
    "title": "Resolução de pendências após vistoria",
    "description": "Já recebeu apontamentos? Levantamos os serviços, contratamos prestadores e coordenamos os reparos para preparar uma nova conferência.",
    "benefits": [
      "Organização dos apontamentos",
      "Orçamento e acompanhamento dos reparos aprovados"
    ],
    "disclaimer": "Escopo e condições definidos no orçamento. Não substitui vistoria oficial nem garante aprovação."
  },
  {
    "id": "proprietarios",
    "number": "04",
    "title": "Assessoria para proprietários",
    "description": "Avaliação visual preventiva da conservação e organização de melhorias antes de uma nova locação.",
    "benefits": [
      "Identificação de necessidades de conservação",
      "Planejamento e coordenação de melhorias aprovadas"
    ],
    "disclaimer": "Escopo e condições definidos no orçamento. Não substitui vistoria oficial nem garante aprovação."
  },
  {
    "id": "pesquisa",
    "number": "05",
    "title": "Busca orientada de imóveis",
    "description": "Organizamos opções públicas conforme seu perfil, orçamento e localização. Serviço complementar para imóveis residenciais e comerciais.",
    "benefits": [
      "Pesquisa por critérios",
      "Resumo de opções para comparação"
    ],
    "disclaimer": "Sem negociação ou intermediação de locações."
  }
],
  faqs: [
  {
    "question": "Como funciona a assessoria completa para entrega de imóveis?",
    "answer": "Avaliamos a necessidade, organizamos as pendências e apresentamos o orçamento integrado. Após aprovação, contratamos prestadores, coordenamos os reparos e acompanhamos a preparação da entrega."
  },
  {
    "question": "A VIA+ contrata profissionais para executar os reparos?",
    "answer": "Sim. Na assessoria completa, a VIA+ organiza os serviços necessários, contrata prestadores para os reparos aprovados e acompanha a execução. Assim, você não precisa administrar individualmente cada profissional."
  },
  {
    "question": "Posso deixar as chaves do imóvel com a VIA+?",
    "answer": "Sim, mediante autorização e condições previamente acertadas sobre guarda, acesso ao imóvel e devolução das chaves."
  },
  {
    "question": "Preciso estar presente durante a execução dos serviços?",
    "answer": "As etapas contratadas podem ser acompanhadas pela VIA+, com acesso autorizado. A necessidade de presença é combinada conforme os serviços."
  },
  {
    "question": "A VIA+ realiza pintura, limpeza e pequenos reparos?",
    "answer": "A VIA+ contrata e coordena prestadores que executam os serviços aprovados. Atividades regulamentadas exigem profissionais legalmente habilitados quando aplicável."
  },
  {
    "question": "Já fiz a vistoria de saída e apareceram pendências. Vocês podem resolver?",
    "answer": "Podemos levantar os serviços necessários, contratar prestadores e acompanhar os reparos aprovados para preparar o imóvel para eventual retorno ou conferência."
  },
  {
    "question": "A VIA+ acompanha a vistoria oficial da imobiliária?",
    "answer": "Podemos apoiar o agendamento e acompanhar a vistoria quando isso estiver incluído na contratação. A vistoria e a decisão de aprovação permanecem com os responsáveis pela locação."
  },
  {
    "question": "A pré-vistoria garante aprovação na entrega?",
    "answer": "Não. O relatório é preventivo e orientativo. A aprovação depende da vistoria oficial e das condições contratuais; podem existir apontamentos posteriores."
  },
  {
    "question": "Qual é o melhor momento para contratar a VIA+?",
    "answer": "Assim que decidir desocupar o imóvel, para organizar documentos, serviços e prazos. Também atendemos quem já recebeu apontamentos de saída."
  },
  {
    "question": "Como é calculado o valor da assessoria?",
    "answer": "O orçamento considera as necessidades do imóvel e o escopo aprovado. Pré-vistoria, gestão e acompanhamento podem integrar o pacote. Valores, responsabilidades e condições são informados antes da contratação."
  },
  {
    "question": "A VIA+ atende imóveis comerciais?",
    "answer": "Sim. Atendemos imóveis residenciais e comerciais em Montes Claros/MG e região, conforme avaliação e escopo."
  },
  {
    "question": "A VIA+ também atende proprietários?",
    "answer": "Sim. Oferecemos avaliação visual preventiva da conservação e organização de melhorias antes de uma nova locação, sem caráter pericial ou de vistoria oficial."
  },
  {
    "question": "A contratação da VIA+ é obrigatória se minha imobiliária indicar?",
    "answer": "Não. A contratação é opcional e independente dos serviços da imobiliária. A indicação não condiciona a vistoria ou a devolução das chaves à contratação da VIA+."
  },
  {
    "question": "Como funciona o pagamento?",
    "answer": "Após a aprovação do orçamento, o pagamento é realizado conforme as condições apresentadas na proposta, diretamente ao prestador responsável pelo recebimento. Os serviços incluídos e seus valores são informados antes da contratação."
  },
  {
    "question": "A pré-vistoria está incluída?",
    "answer": "Na assessoria completa, a pré-vistoria pode fazer parte do pacote contratado, conforme o orçamento aprovado. Também oferecemos pré-vistoria avulsa."
  }
],
};

export function whatsappUrl(message?: string) {
  const text =
    message ||
    "Olá! Estou entregando um imóvel em Montes Claros e gostaria de um orçamento para a assessoria completa da VIA+.";
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
