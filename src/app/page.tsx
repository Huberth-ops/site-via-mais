
import {
  ArrowIcon,
  CheckIcon,
  ClockIcon,
  FileIcon,
  HomeCheckIcon,
  InstagramIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { BrandLogo } from "@/components/brand-logo";
import { DelaySimulator } from "@/components/delay-simulator";
import { LeadQualifier } from "@/components/lead-qualifier";

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
["Você entra em contato", "Informe a situação do imóvel, a previsão de desocupação e suas necessidades."],
["Avaliamos o imóvel", "Analisamos documentos, realizamos a pré-vistoria quando contratada e identificamos pendências."],
["Apresentamos o orçamento", "Definimos serviços, valores, responsabilidades e condições para sua aprovação."],
["Contratamos e acompanhamos os prestadores", "Coordenamos os serviços aprovados e acompanhamos o andamento e os prazos acordados."],
["Preparamos a entrega", "Conferimos os serviços, apoiamos a vistoria oficial quando contratado e organizamos a devolução das chaves."]
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${siteConfig.siteUrl}/#website`, url: siteConfig.siteUrl, name: siteConfig.name, inLanguage: "pt-BR" },
    {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organizacao`,
      name: siteConfig.legalName,
      alternateName: ["Via Mais", "VIA Mais", "VIA+"],
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/logo-via-mais.svg`,
      slogan: siteConfig.slogan,
      sameAs: [siteConfig.instagramUrl],
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
      "@type": "Service",
      "@id": `${siteConfig.siteUrl}/#servico`,
      name: siteConfig.name,
      provider: { "@id": `${siteConfig.siteUrl}/#organizacao` },
      areaServed: `${siteConfig.city}, ${siteConfig.state}`,
      serviceType: "Gestão completa da entrega de imóveis",
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
            <a href="#proprietarios">Proprietários</a>
            <a href="#entrega">Entrega</a>
            <a href="#imobiliarias">Imobiliárias</a>

            <a href="/o-que-a-via-mais-nao-faz">Limites</a>
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
              <a href="/o-que-a-via-mais-nao-faz">Limites</a>
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
              <h1>Entrega de imóvel em Montes Claros <span>sem complicação</span></h1>
              <h2 className="hero-promise">Deixe as chaves conosco. A VIA+ cuida da preparação da sua entrega.</h2><p className="hero-lead">Identificamos pendências, organizamos os reparos, contratamos prestadores e acompanhamos os serviços até a preparação final do imóvel. Você centraliza o atendimento e ganha praticidade.</p>
              <div className="hero-actions">
                <a className="button" href={whatsappUrl()}>
                  Quero ajuda para entregar meu imóvel
                  <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#como-funciona">
                  Entenda como funciona
                </a>
              </div>
              <p className="hero-note">
                <ShieldIcon />
                Guarda de chaves mediante autorização e condições combinadas. A vistoria oficial e sua aprovação permanecem com os responsáveis pela locação.
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
              <h2>Gestão completa, do orçamento à preparação final</h2>
              <p>
                Escolha o ponto em que precisa de apoio. Cada serviço apresenta
                com clareza o que está — e o que não está — incluído.
              </p>
            </div>
            <div className="services-grid">
              {siteConfig.services.map((service) => (
                <article className={`service-card ${service.id === "gestao" ? "service-featured" : ""}`} id={service.id === "proprietarios" ? "proprietarios" : undefined} key={service.id}>
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
                  <p className="card-disclaimer">{service.disclaimer}</p><a className="text-link" href={whatsappUrl(`Olá! Gostaria de saber mais sobre ${service.title}.`)}>Solicitar orçamento <ArrowIcon /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="busca"><div className="container"><p className="eyebrow dark">Serviço complementar</p><h2>Também procura um imóvel?</h2><p>Organizamos opções públicas conforme seu perfil, sem intermediação da locação.</p><a className="text-link" href="/busca-de-imovel-montes-claros">Conhecer a busca orientada <ArrowIcon /></a></div></section>

        <section className="section dark-section" id="entrega">
          <div className="container split-layout">
            <div>
              <p className="eyebrow">Preparação para entrega</p>
              <h2>Entrega de imóvel em Montes Claros com preparação antes da vistoria oficial</h2>
              <p className="section-lead">
                A VIA+ coordena a preparação e os reparos aprovados. Dias adicionais podem representar aluguel e encargos: simule seu cenário e organize o cronograma com antecedência.
              </p>
              <p>
                A contratação depende de avaliação e orçamento aprovado. A VIA+ não substitui a
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
              <a href="/o-que-a-via-mais-nao-faz">
                O que a VIA+ não faz
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
            </ol><a className="button" href={whatsappUrl()}>Quero deixar minha entrega com a VIA+</a>
          </div>
        </section>

        <section className="section"><div className="container"><p className="eyebrow dark">Você cuida da mudança</p><h2>Nós cuidamos da preparação da entrega.</h2><p className="section-lead">Você não precisa procurar pedreiro, pintor, eletricista ou profissional de limpeza. A VIA+ organiza os serviços e contrata prestadores para os reparos aprovados, acompanha os prazos e mantém você informado.</p><ul className="feature-list">{["Pintura e retoques","Limpeza geral","Reparos hidráulicos","Reparos elétricos simples, por profissionais habilitados quando aplicável","Portas, fechaduras e dobradiças","Ajustes de acabamentos e pequenas manutenções"].map(item=><li key={item}><CheckIcon />{item}</li>)}</ul><p>Serviços sujeitos à avaliação, aprovação do orçamento e disponibilidade. Você pode deixar as chaves sob nossa responsabilidade mediante autorização e condições acertadas.</p><a className="button" href={whatsappUrl()}>Quero um orçamento para minha entrega</a></div></section><section className="section report-section">
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

        <section className="section section-tinted" id="imobiliarias"><div className="container"><p className="eyebrow dark">Para imobiliárias</p><h2>Um único contato para organizar os reparos dos seus clientes.</h2><p className="section-lead">Em vez de administrar diferentes contatos de pintores, profissionais de manutenção e limpeza, sua imobiliária pode encaminhar o cliente à VIA+. Nós levantamos as necessidades, organizamos os serviços, contratamos os prestadores e acompanhamos a execução.</p><p>Centralização do atendimento, organização dos orçamentos e acompanhamento das pendências antes ou após a vistoria. A contratação é sempre opcional e independente.</p><a className="button" href={whatsappUrl("Olá! Quero conhecer a parceria para imobiliárias.")}>Quero conhecer a parceria para imobiliárias</a><a className="text-link" href="/clientes-indicados-por-imobiliarias">Entenda o atendimento por indicação <ArrowIcon /></a></div></section>

        <section className="section" id="quem-somos"><div className="container"><div className="section-heading"><p className="eyebrow dark">Por que VIA+</p><h2>Por que deixar a entrega do seu imóvel com a VIA+?</h2><p>Você não precisa administrar sozinho orçamentos, profissionais, reparos e prazos. A VIA+ organiza e acompanha as etapas contratadas para uma entrega mais tranquila.</p></div><div className="services-grid">{[
["Um único ponto de contato","Centralizamos a comunicação sobre a preparação e os reparos."],
["Contratação de prestadores","Contratamos os profissionais adequados aos serviços aprovados."],
["Acompanhamento dos reparos","Monitoramos execução, andamento e prazos combinados."],
["Preparação até a entrega","Verificamos os serviços realizados e apoiamos o processo de devolução."]
].map(([title,text])=><article className="service-card" key={title}><HomeCheckIcon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

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
                Conte em que etapa está sua entrega. Vamos organizar o orçamento e os próximos passos.
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
            <a
              className="footer-social-link"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da VIA+"
            >
              <InstagramIcon />
              Instagram
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
