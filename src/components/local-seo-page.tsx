import type { ReactNode } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import {
  ArrowIcon,
  CheckIcon,
  InstagramIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

type LocalSeoPageProps = {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  primaryCta: string;
  primaryMessage: string;
  sections: Array<{
    title: string;
    text: string;
    items?: string[];
  }>;
  disclaimer: string;
};

export function LocalSeoPage({
  eyebrow,
  title,
  lead,
  primaryCta,
  primaryMessage,
  sections,
  disclaimer,
}: LocalSeoPageProps) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo-link" href="/" aria-label="VIA+ — início">
            <BrandLogo variant="light" />
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#busca">Busca</Link>
            <Link href="/#entrega">Entrega</Link>
            <Link href="/#imobiliarias">Imobiliárias</Link>
            <Link href="/o-que-a-via-mais-nao-faz">Limites</Link>
            <Link href="/#faq">Dúvidas</Link>
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
        </div>
      </header>

      <main>
        <section className="hero compact-hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout compact-hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="hero-lead">{lead}</p>
              <div className="hero-actions">
                <a
                  className="button"
                  href={whatsappUrl(primaryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCta}
                  <ArrowIcon />
                </a>
                <Link className="button button-secondary" href="/">
                  Voltar para a página inicial
                </Link>
              </div>
              <p className="hero-note">
                <ShieldIcon />
                A VIA+ atua como apoio orientativo e organizacional. Não
                substitui imobiliária, corretor de imóveis, administradora,
                vistoria oficial ou parceiro responsável pela locação.
              </p>
            </div>
            <div className="notice hero-notice">
              <ShieldIcon />
              <p>{disclaimer}</p>
            </div>
          </div>
        </section>

        <section className="section section-tinted">
          <div className="container services-grid">
            {sections.map((section) => (
              <article className="service-card" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                {section.items ? (
                  <ul className="check-list">
                    {section.items.map((item) => (
                      <li key={item}>
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="container cta-layout">
            <div>
              <p className="eyebrow">Próximo passo</p>
              <h2>Explique sua situação para a VIA+</h2>
              <p>
                Conte se você está buscando imóvel, preparando uma entrega ou
                recebeu indicação de uma imobiliária. O escopo será explicado
                com clareza antes do atendimento.
              </p>
            </div>
            <a
              className="button button-light"
              href={whatsappUrl(primaryMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Conversar no WhatsApp
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
              A VIA+ não realiza vistoria oficial, não emite laudo técnico e não
              substitui corretores, imobiliárias, administradoras ou parceiros
              responsáveis pela locação.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
