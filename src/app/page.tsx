import { ServiceVideo } from "@/components/service-video";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { DelaySimulator } from "@/components/delay-simulator";
import { SearchCostCalculator } from "@/components/search-cost-calculator";
import { LeadQualifier } from "@/components/lead-qualifier";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

const services = siteConfig.services.filter(s => s.id !== "pendencias");
const faqs = [siteConfig.faqs[0], siteConfig.faqs[1], siteConfig.faqs[2], siteConfig.faqs[5],
 { question: "A VIA+ faz a vistoria oficial ou garante aprovação?", answer: "Não. A vistoria oficial e a aprovação permanecem com os responsáveis pela locação. Nossa pré-vistoria é preventiva e orientativa." },
 { question: "Como solicitar um orçamento?", answer: "Conte sua necessidade pelo WhatsApp. Avaliamos o imóvel e apresentamos os serviços, valores e condições antes da contratação. O pagamento segue a proposta, diretamente ao prestador responsável pelo recebimento." }];
const destinations = ["/pre-vistoria-entrega-imovel-montes-claros", "/pre-vistoria-entrega-imovel-montes-claros", "#contato", "/busca-de-imovel-montes-claros"];
const labels = ["Quero entregar meu imóvel", "Solicitar pré-vistoria", "Sou proprietário", "Quero encontrar um imóvel"];
const schema = { "@context": "https://schema.org", "@graph": [
 { "@type": "Organization", "@id": siteConfig.siteUrl + "/#organizacao", name: siteConfig.name, url: siteConfig.siteUrl, logo: siteConfig.siteUrl + "/logo-via-mais-original.png", telephone: "+5538999079952", areaServed: "Montes Claros/MG e região", sameAs: [siteConfig.instagramUrl] },
 { "@type": "WebSite", name: siteConfig.name, url: siteConfig.siteUrl, inLanguage: "pt-BR" },
 ...services.map(s => ({ "@type": "Service", name: s.title, description: s.description, provider: { "@id": siteConfig.siteUrl + "/#organizacao" }, areaServed: "Montes Claros/MG e região" })),
 { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }
] };
export default function Home() {
 return <div className="refresh-home">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
 <header className="site-header"><div className="container header-inner">
 <Link className="logo-link" href="/" aria-label="VIA+ início"><BrandLogo /></Link>
 <nav className="desktop-nav" aria-label="Principal"><a href="#servicos">Serviços</a><a href="#videos">Vídeos</a><a href="#simuladores">Simuladores</a><a href="#como-funciona">Como funciona</a><a href="#contato">Contato</a></nav>
 <a className="button button-small" href={whatsappUrl()}><WhatsAppIcon />Vamos conversar</a>
 <details className="mobile-nav"><summary aria-label="Abrir menu"><span/><span/><span/></summary><nav aria-label="Menu móvel"><a href="#servicos">Serviços</a><a href="#videos">Vídeos</a><a href="#simuladores">Simuladores</a><a href="#como-funciona">Como funciona</a><a href="#contato">Contato</a></nav></details>
 </div></header>
 <main>
 <section className="fresh-hero" id="inicio"><div className="container fresh-hero-layout"><div>
 <p className="eyebrow dark">Montes Claros / MG e região</p>
 <h1>Entrega de imóvel,<br/><em>sem complicação.</em></h1>
 <p className="fresh-subtitle">Você cuida da mudança.<br/>A VIA+ organiza a entrega.</p>
 <p className="fresh-lead">Identificamos pendências, contratamos prestadores e acompanhamos os reparos aprovados para preparar seu imóvel para a entrega.</p>
 <a className="button" href={whatsappUrl("Olá! Estou entregando um imóvel e gostaria de um orçamento para a gestão completa da entrega.")}>Quero ajuda para entregar meu imóvel <ArrowIcon /></a>
 <a className="fresh-secondary" href="#servicos">Conhecer os serviços ↓</a>
 </div><div className="hero-video"><ServiceVideo id="antecipacao" /></div></div></section>
 <section className="section" id="servicos"><div className="container"><p className="eyebrow dark">Nossos serviços</p><h2>Como a VIA+ pode ajudar você?</h2><div className="fresh-services">
 {services.map((s,i)=><article className={i===0?"fresh-service primary":"fresh-service"} key={s.id} id={s.id==="proprietarios"?"proprietarios":undefined}><span className="service-index">0{i+1}{i===0?" / Solução completa":""}</span><h3>{s.id==="proprietarios"?"Relatório para proprietários":s.title}</h3><p>{s.description}</p><a href={whatsappUrl(i===2?"Olá! Sou proprietário e gostaria de informações sobre o relatório preventivo do meu imóvel.":`Olá! Gostaria de saber mais sobre ${s.title}.`)}>{labels[i]} <ArrowIcon /></a><a className="service-detail" href={destinations[i]}>Saiba mais</a></article>)}
 </div></div></section>
 <section className="section fresh-benefits"><div className="container"><p className="eyebrow dark">Mais praticidade</p><h2>Menos preocupações com a entrega.</h2><div className="benefit-row">{[["Um único contato","Atendimento centralizado."],["Prestadores contratados","Profissionais para os serviços aprovados."],["Reparos acompanhados","Andamento e prazos combinados."],["Preparação organizada","Verificação final e apoio à devolução."]].map(([t,p])=><article key={t}><CheckIcon/><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
 <section className="section home-video-section" id="videos" aria-labelledby="videos-heading"><div className="container">
 <p className="eyebrow dark">Veja na prática</p><h2 id="videos-heading">Sua entrega, explicada em vídeos</h2>
 <p>Escolha um assunto para assistir: da identificação das pendências aos limites da vistoria.</p>
 <div className="home-video-groups">
 <details className="home-video-group" open><summary><span>01</span><strong>Pré-vistoria e pendências</strong><small>1 vídeo</small></summary><ServiceVideo id="detalhes" /></details>
 <details className="home-video-group"><summary><span>02</span><strong>Planejamento da entrega</strong><small>1 vídeo</small></summary><ServiceVideo id="planejamento" /></details>
 <details className="home-video-group"><summary><span>03</span><strong>Vistoria oficial e limites de atuação</strong><small>1 vídeo</small></summary><ServiceVideo id="limites" /></details>
 </div></div></section>
 <section className="section" id="simuladores"><div className="container simulator-shell"><p className="eyebrow dark">Planeje com clareza</p><h2>Simule os custos da sua locação</h2><p>Explore seu cenário. Estas estimativas não são preços dos serviços da VIA+.</p><details className="calculator-panel" open><summary>Atraso na entrega <span>Aluguel e encargos proporcionais</span></summary><DelaySimulator /></details><details className="calculator-panel"><summary>Tempo e deslocamentos na busca <span>Pesquisa e visitas ao imóvel</span></summary><SearchCostCalculator /></details></div></section>
 <section className="section fresh-process" id="como-funciona"><div className="container"><p className="eyebrow dark">Do primeiro contato às chaves</p><h2>Como funciona a gestão da entrega?</h2><ol className="fresh-steps">{[["Avaliamos e planejamos","Entendemos sua necessidade, verificamos possíveis pendências e organizamos o orçamento."],["Contratamos e acompanhamos","Após a aprovação, contratamos prestadores e acompanhamos os serviços combinados."],["Preparamos a entrega","Verificamos os reparos e apoiamos a etapa final da devolução, conforme contratado."]].map(([t,p],i)=><li key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></li>)}</ol><a className="button" href={whatsappUrl()}>Solicitar meu orçamento <ArrowIcon /></a></div></section>
 <section className="section" id="quem-somos"><div className="container fresh-about"><div><p className="eyebrow dark">Conheça a VIA+</p><h2>Um olhar atento para cada etapa.</h2><p>A VIA+ atua na preparação de imóveis em Montes Claros e região, reunindo avaliação visual, organização de pendências e coordenação de prestadores. Nosso trabalho conecta o planejamento à preparação final da entrega.</p><a className="text-link" href="/pre-vistoria-entrega-imovel-montes-claros">Conheça o atendimento <ArrowIcon /></a></div><aside><p className="eyebrow dark">Para imobiliárias</p><h3>Um contato. Reparos organizados.</h3><p>Apoio aos clientes indicados, antes ou depois da vistoria. Contratação sempre opcional.</p><a className="text-link" href="/clientes-indicados-por-imobiliarias">Conhecer a parceria <ArrowIcon /></a></aside></div></section>
 <section className="section fresh-contact" id="contato"><div className="container"><div className="faq-layout"><div><p className="eyebrow dark">Dúvidas e contato</p><h2>Precisa entregar seu imóvel?</h2><p>Conte o que precisa. Vamos avaliar sua situação e orientar os próximos passos.</p><a className="button" href={whatsappUrl()}><WhatsAppIcon/>Conversar pelo WhatsApp</a></div><div className="faq-list">{faqs.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></div><details className="contact-expander"><summary>Prefere adiantar as informações do imóvel?</summary><LeadQualifier /></details><p className="fresh-limits">A VIA+ não realiza vistoria oficial, perícia ou intermediação imobiliária e não garante aprovação. Guarda de chaves mediante autorização. <a href="/o-que-a-via-mais-nao-faz">Conheça os limites do atendimento.</a></p></div></section>
 </main><footer className="site-footer"><div className="container fresh-footer"><span className="footer-brand-name" aria-label="VIA Mais">VIA<span>+</span></span><div><p>{siteConfig.slogan}</p><p>{siteConfig.area}</p><a href={whatsappUrl()}>{siteConfig.whatsappDisplay}</a></div><div><a href="/busca-de-imovel-montes-claros">Busca de imóveis</a><a href="/clientes-indicados-por-imobiliarias">Imobiliárias</a><a href={siteConfig.instagramUrl}>Instagram</a></div></div></footer>
 <a className="mobile-whatsapp" href={whatsappUrl()} aria-label="Conversar pelo WhatsApp"><WhatsAppIcon/>WhatsApp</a>
 </div>;
}
