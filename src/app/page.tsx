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
        "Pesquisa orientada de imóveis para locação",
        "Consultoria para entrega de imóvel alugado",
        "Pré-vistoria orientativa",
      ],
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
                A VIA+ ajuda famílias e empresas a organizar a pesquisa por
                imóveis para locação e orienta inquilinos na preparação antes
                da vistoria oficial.
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
                Atuação orientativa e organizacional. Sem substituir corretores,
                imobiliárias ou vistorias oficiais.
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
              <h2>Pare de perder tempo com opções fora do perfil</h2>
              <p className="section-lead">
                A VIA+ reúne e organiza opções públicas conforme localização,
                faixa de valor, estrutura e prioridades informadas por você.
                Depois, negociações e visitas seguem com o anunciante, corretor
                ou imobiliária responsável.
              </p>
              <ul className="feature-list">
                <li><CheckIcon /> Perfil definido antes da pesquisa</li>
                <li><CheckIcon /> Opções reunidas em um único resumo</li>
                <li><CheckIcon /> Apoio residencial e comercial</li>
                <li><CheckIcon /> Comparação inicial mais clara</li>
              </ul>
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
              <h2>Não espere a vistoria final para descobrir o que merece atenção</h2>
              <p className="section-lead">
                Ler o laudo de entrada, revisar o estado atual do imóvel e
                organizar possíveis reparos com antecedência ajuda você a
                chegar à vistoria oficial com mais clareza.
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
