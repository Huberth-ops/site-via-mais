import {
  ArrowIcon,
  CheckIcon,
  ClockIcon,
  FileIcon,
  HomeCheckIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { BrandLogo } from "@/components/brand-logo";
import { DelaySimulator } from "@/components/delay-simulator";
import { LeadQualifier } from "@/components/lead-qualifier";
import { SearchCostCalculator } from "@/components/search-cost-calculator";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

const attentionPoints = [
  "Pintura",
  "Limpeza",
  "Hidráulica aparente",
  "Instalações elétricas aparentes",
  "Portas e fechaduras",
  "Janelas",
  "Área externa",
  "Itens descritos no laudo",
  "Conservação geral",
];

const processSteps = [
  ["Você entra em contato", "Conte se precisa encontrar ou entregar."],
  ["Entendemos a necessidade", "Explicamos o serviço e seus limites."],
  ["Organizamos o atendimento", "Definimos documentos, local e condições."],
  ["Realizamos o serviço", "Pesquisa, consultoria ou pré-vistoria."],
  ["Você recebe os próximos passos", "Informações claras para seguir."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organizacao`,
      name: siteConfig.legalName,
      alternateName: ["Via Mais", "VIA Mais", "VIA+"],
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/logo-via-mais.svg`,
      slogan: siteConfig.slogan,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+55-38-99907-9952",
        areaServed: "BR-MG",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.siteUrl}/#negocio`,
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
      telephone: "+55-38-99907-9952",
      description: siteConfig.description,
      areaServed: {
        "@type": "City",
        name: siteConfig.city,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: "MG",
        addressCountry: "BR",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.siteUrl}/#servico`,
      name: siteConfig.name,
      provider: { "@id": `${siteConfig.siteUrl}/#organizacao` },
      areaServed: `${siteConfig.city}, ${siteConfig.state}`,
      serviceType: [
        "Busca de imóvel em Montes Claros",
        "Locação de imóveis em Montes Claros",
        "Imóvel para alugar em Montes Claros",
        "Imóvel comercial em Montes Claros",
        "Entrega de imóvel em Montes Claros",
        "Consultoria para entrega de imóvel em Montes Claros",
        "Pré-vistoria em Montes Claros",
        "Pesquisa orientada de imóveis para locação",
        "Consultoria para entrega de imóvel alugado",
        "Pré-vistoria orientativa",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços VIA+ em Montes Claros",
        itemListElement: siteConfig.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            areaServed: `${siteConfig.city}, ${siteConfig.state}`,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.siteUrl}/#faq`,
      mainEntity: siteConfig.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <div className="container header-inner">
          <a className="logo-link" href="#inicio" aria-label="VIA+ — início">
            <BrandLogo variant="light" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#busca">Busca</a>
            <a href="#entrega">Entrega</a>
            <a href="#imobiliarias">Imobiliárias</a>
            <a href="/busca-de-imovel-montes-claros">Guias locais</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <a
            className="button button-small header-cta"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <details className="mobile-nav">
            <summary aria-label="Abrir menu">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Navegação móvel">
              <a href="#servicos">Serviços</a>
              <a href="#busca">Busca de imóveis</a>
              <a href="#entrega">Preparação para entrega</a>
              <a href="#imobiliarias">Imobiliárias</a>
              <a href="/busca-de-imovel-montes-claros">Guias locais</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#faq">Dúvidas</a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">VIA+ · {siteConfig.area}</p>
              <h1>
                Encontre opções com mais clareza.{" "}
                <span>Prepare a entrega com antecedência.</span>
              </h1>
              <p className="hero-lead">
                A VIA+ ajuda famílias e empresas na busca de imóvel em Montes
                Claros e orienta inquilinos na entrega de imóvel alugado antes
                da vistoria oficial da imobiliária, proprietário ou parceiro
                designado.
              </p>
              <div className="hero-actions">
                <a className="button" href="#busca">
                  Quero encontrar
                  <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#entrega">
                  Quero preparar a entrega
                </a>
              </div>
              <p className="hero-note">
                <ShieldIcon />
                Atuação orientativa e organizacional. Sem substituir
                imobiliárias, corretores de imóveis, locação ou vistorias
                oficiais.
              </p>
            </div>

            <LeadQualifier />
          </div>
        </section>

        <section className="trust-strip" aria-label="Diferenciais">
          <div className="container trust-grid">
            <span><ShieldIcon /> Limites transparentes</span>
            <span><ClockIcon /> Menos improviso</span>
            <span><FileIcon /> Processo documentado</span>
            <span><HomeCheckIcon /> Atendimento presencial</span>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow dark">Serviços</p>
              <h2>Organização para diferentes momentos da locação</h2>
              <p>
                Escolha o ponto em que precisa de apoio. Cada serviço apresenta
                com clareza o que está — e o que não está — incluído.
              </p>
            </div>
            <div className="services-grid">
              {siteConfig.services.map((service) => (
                <article className="service-card" key={service.id}>
                  <div className="service-number">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="check-list">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>
                        <CheckIcon />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="card-disclaimer">{service.disclaimer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="busca">
          <div className="container split-layout">
            <div>
              <p className="eyebrow dark">Pesquisa orientada</p>
              <h2>Busca de imóvel em Montes Claros sem perder tempo com opções fora do perfil</h2>
              <p className="section-lead">
                A VIA+ reúne e organiza opções públicas de imóvel para alugar
                em Montes Claros conforme localização, faixa de aluguel,
                estrutura e prioridades informadas por você. O apoio vale para
                imóvel residencial e imóvel comercial em Montes Claros.
              </p>
              <p>
                Importante: a VIA+ não anuncia imóveis, não intermedeia locação
                de imóveis em Montes Claros, não negocia contratos e não
                substitui imobiliária ou corretor de imóveis. Visitas,
                propostas e condições devem ser tratadas diretamente com o
                anunciante, corretor ou imobiliária responsável.
              </p>
              <ul className="feature-list">
                <li><CheckIcon /> Perfil definido antes da pesquisa</li>
                <li><CheckIcon /> Opções reunidas em um único resumo</li>
                <li><CheckIcon /> Apoio residencial e comercial</li>
                <li><CheckIcon /> Comparação inicial mais clara</li>
              </ul>
              <a
                className="text-link"
                href="/busca-de-imovel-montes-claros"
              >
                Ver página sobre busca de imóvel em Montes Claros <ArrowIcon />
              </a>
              <a
                className="text-link"
                href={whatsappUrl(
                  "Olá, quero explicar o imóvel que procuro e entender a Pesquisa Orientada da VIA+.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explicar o imóvel que procuro <ArrowIcon />
              </a>
            </div>
            <SearchCostCalculator />
          </div>
        </section>

        <section className="section dark-section" id="entrega">
          <div className="container split-layout">
            <div>
              <p className="eyebrow">Preparação para entrega</p>
              <h2>Entrega de imóvel em Montes Claros com preparação antes da vistoria oficial</h2>
              <p className="section-lead">
                A consultoria para entrega de imóvel em Montes Claros e a
                pré-vistoria em Montes Claros ajudam o inquilino a ler o laudo
                de vistoria de entrada, revisar o estado atual do imóvel e
                organizar possíveis reparos antes da vistoria de saída e da
                devolução de imóvel.
              </p>
              <p>
                Esse apoio é preventivo e orientativo. A VIA+ não substitui a
                vistoria oficial da imobiliária, administradora, proprietário ou
                parceiro designado, não emite laudo técnico ou pericial e não
                garante aprovação na entrega.
              </p>
              <div className="attention-tags">
                {attentionPoints.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>
            <DelaySimulator />
          </div>
        </section>

        <section className="section">
          <div className="container section-heading centered">
            <p className="eyebrow dark">Guias locais</p>
            <h2>Guias rápidos por necessidade</h2>
            <p>
              Páginas específicas ajudam o cliente certo a entender o serviço
              sem confundir a VIA+ com imobiliária, corretor ou vistoria
              oficial.
            </p>
            <div className="local-links">
              <a href="/busca-de-imovel-montes-claros">
                Busca de imóvel em Montes Claros
              </a>
              <a href="/pre-vistoria-entrega-imovel-montes-claros">
                Pré-vistoria e entrega de imóvel
              </a>
              <a href="/clientes-indicados-por-imobiliarias">
                Clientes indicados por imobiliárias
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow dark">Comparativo</p>
              <h2>Improvisar no final ou organizar com antecedência?</h2>
            </div>
            <div className="comparison-grid">
              <article className="comparison-card muted">
                <span>Sem orientação prévia</span>
                <h3>Decisões perto da vistoria</h3>
                <ul>
                  <li>Dificuldade para interpretar documentos</li>
                  <li>Pendências descobertas tarde</li>
                  <li>Reparos sem ordem de prioridade</li>
                  <li>Menos tempo para decidir</li>
                </ul>
              </article>
              <article className="comparison-card highlighted">
                <span>Com apoio da VIA+</span>
                <h3>Próximos passos mais claros</h3>
                <ul>
                  <li>Documentos analisados de forma orientativa</li>
                  <li>Pontos de atenção organizados</li>
                  <li>Relatório nos serviços de pré-vistoria</li>
                  <li>Preparação iniciada com antecedência</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="como-funciona">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark">Como funciona</p>
              <h2>Um processo simples, presencial e transparente</h2>
            </div>
            <ol className="timeline">
              {processSteps.map(([title, text], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section report-section">
          <div className="container split-layout">
            <div className="report-mockup">
              <div className="report-header">
                <BrandLogo compact />
                <span>Exemplo demonstrativo</span>
              </div>
              <h3>Relatório de Pendências e Reparos Recomendados</h3>
              {[
                ["Pintura", "Quarto principal", "Verificar acabamento"],
                ["Hidráulica", "Cozinha", "Revisar sifão aparente"],
                ["Limpeza", "Área externa", "Organizar antes da vistoria"],
              ].map(([category, place, action]) => (
                <div className="report-row" key={category}>
                  <b>{category}</b>
                  <span>{place}</span>
                  <small>{action}</small>
                </div>
              ))}
            </div>
            <div>
              <p className="eyebrow dark">Entregável</p>
              <h2>Um registro claro para organizar a preparação</h2>
              <p className="section-lead">
                Nos serviços de pré-vistoria, a VIA+ entrega um relatório com
                itens observados, localização, situação visual e recomendação
                de verificação ou reparo.
              </p>
              <div className="notice">
                <ShieldIcon />
                <p>
                  O documento é preventivo e orientativo. Não substitui o laudo
                  da imobiliária, não possui natureza pericial e não garante
                  aprovação na vistoria oficial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="imobiliarias">
          <div className="container split-layout">
            <div>
              <p className="eyebrow dark">Parcerias e indicações</p>
              <h2>Atendemos clientes indicados por imobiliárias</h2>
              <p className="section-lead">
                A VIA+ pode atender inquilinos indicados por imobiliárias,
                corretores de imóveis, proprietários ou empresas parceiras em
                Montes Claros. O objetivo é ajudar o cliente a compreender
                documentos, organizar possíveis pendências e se preparar com
                antecedência para a entrega do imóvel.
              </p>
              <p>
                O atendimento não altera responsabilidades da locação: a
                imobiliária, o corretor, o proprietário ou o parceiro designado
                continuam responsáveis pela vistoria oficial, pelo laudo de
                vistoria, pelas condições contratuais, pela negociação e pela
                decisão final sobre a devolução do imóvel.
              </p>
            </div>
            <div className="notice">
              <ShieldIcon />
              <p>
                A VIA+ atua como apoio orientativo e organizacional. Não
                substitui imobiliária, corretor de imóveis, administradora,
                vistoria oficial ou parceiro responsável pela locação.
              </p>
            </div>
          </div>
        </section>

        <section className="section dark-section about-section" id="quem-somos">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Quem somos</p>
              <h2>Experiência prática para orientar com mais clareza</h2>
              <p>
                A VIA+ nasceu da experiência de profissionais que acompanham
                rotinas de vistoria, locação e entrega de imóveis.
              </p>
            </div>
            <div className="team-grid">
              <article>
                <div className="team-initial">HP</div>
                <div>
                  <h3>Huberth Paulo</h3>
                  <p>Vistoriador profissional</p>
                  <strong>Aproximadamente 9 anos de experiência</strong>
                </div>
              </article>
              <article>
                <div className="team-initial">RG</div>
                <div>
                  <h3>Rogério Gomes</h3>
                  <p>Vistoriador profissional</p>
                  <strong>Aproximadamente 11 anos de experiência</strong>
                </div>
              </article>
            </div>
            <p className="experience-note">
              Informações profissionais fornecidas pelos responsáveis e sujeitas
              à validação documental antes da publicação definitiva.
            </p>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro">
              <p className="eyebrow dark">Perguntas frequentes</p>
              <h2>Respostas diretas antes de você decidir</h2>
              <p>
                Transparência faz parte do serviço. Veja os limites, documentos
                e responsabilidades de cada etapa.
              </p>
              <a
                className="button"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tirar outra dúvida
                <WhatsAppIcon />
              </a>
            </div>
            <div className="faq-list">
              {siteConfig.faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container cta-layout">
            <div>
              <p className="eyebrow">Próximo passo</p>
              <h2>Organize agora o que pode virar pressa depois</h2>
              <p>
                Conte se você está procurando um imóvel ou se preparando para
                uma entrega. A VIA+ explica o caminho com clareza.
              </p>
            </div>
            <a
              className="button button-light"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Conversar com a VIA+
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <BrandLogo variant="light" />
            <p>{siteConfig.slogan}</p>
          </div>
          <div>
            <b>Atendimento</b>
            <p>{siteConfig.area}</p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              {siteConfig.whatsappDisplay}
            </a>
          </div>
          <div>
            <b>Limites de atuação</b>
            <p>
              A VIA+ não realiza vistoria oficial, não emite laudo técnico e
              não substitui corretores, imobiliárias ou profissionais habilitados.
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} VIA+. Todos os direitos reservados.</span>
          <span>Conteúdo e simuladores de caráter informativo.</span>
        </div>
      </footer>

      <a
        className="mobile-whatsapp"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a VIA+ no WhatsApp"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </>
  );
}
