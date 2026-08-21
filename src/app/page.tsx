"use client";

import AIChatbot from "./components/AIChatbot";
import AIContentGenerator from "./components/AIContentGenerator";
import AIImageGenerator from "./components/AIImageGenerator";
import AITextSummarizer from "./components/AITextSummarizer";
import CTAButton from "./components/CTAButton";
import { useLanguage } from "./components/LanguageProvider";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage();
  const lines = (value: string) => value.split("\n").map((line) => <span key={line}>{line}<br /></span>);

  return (
    <div className="page-shell">
      <section className="hero section-wrap" id="platform">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="eyebrow-dot" />{t.home.eyebrow}</p>
          <h1>{lines(t.home.title)}</h1>
          <p className="hero-description">{t.home.description}</p>
          <div className="hero-actions"><CTAButton>{t.home.primary}<span>↗</span></CTAButton><a className="text-link" href="#tools">{t.home.secondary}<span>↓</span></a></div>
          <div className="hero-trust"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><span>{t.home.trusted}</span></div>
        </div>
        <div className="hero-visual reveal-up delay-1">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-image-frame"><div className="hero-dashboard"><div className="dashboard-label">AI—BOOST / STUDIO</div><div className="dashboard-title">Make room<br />for better ideas.</div><div className="dashboard-chart"><span /><span /><span /><span /><span /><span /></div><div className="dashboard-footer"><span>FOCUS SESSION</span><strong>08:42</strong></div></div><div className="image-grain" /></div>
          <div className="status-float"><span className="live-dot" /><div><strong>{t.home.signal}</strong><small>{t.home.signalText}</small></div></div>
          <div className="number-float"><strong>4.9</strong><span>✦✦✦✦✦</span><small>loved by creators</small></div>
        </div>
      </section>

      <section className="marquee-band"><div className="marquee-track"><span>THINK CLEARER</span><i>✳</i><span>MAKE FASTER</span><i>✳</i><span>GO FURTHER</span><i>✳</i><span>THINK CLEARER</span><i>✳</i></div></section>

      <section className="stats-strip section-wrap"><div><strong>4×</strong><span>{t.home.points[0]}</span></div><div><strong>10 min</strong><span>{t.home.points[2]}</span></div><div><strong>6</strong><span>{t.home.trusted}</span></div></section>

      <section className="audience-section section-wrap"><div className="section-heading"><div><p className="eyebrow">{t.home.featureEyebrow}</p><h2>{t.home.featureTitle}</h2></div><p>{t.home.featureText}</p></div><div className="audience-grid"><article><span>01</span><h3>{t.home.personal}</h3><p>{t.home.personalText}</p><a className="text-link" href="#tools">{t.home.primary}<span>↗</span></a></article><article><span>02</span><h3>{t.home.agency}</h3><p>{t.home.agencyText}</p><Link className="text-link" href="/services">{t.nav.tools}<span>↗</span></Link></article><article><span>03</span><h3>{t.home.toolsEyebrow}</h3><p>{t.home.toolsText}</p><Link className="text-link" href="/contact">{t.nav.contact}<span>↗</span></Link></article></div></section>

      <section className="section-wrap tools-section" id="tools">
        <div className="section-heading"><div><p className="eyebrow">{t.home.toolsEyebrow}</p><h2>{t.home.toolsTitle}</h2></div><p>{t.home.toolsText}</p></div>
        <div className="tool-grid"><AIChatbot /><AITextSummarizer /><AIContentGenerator /><AIImageGenerator /></div>
      </section>

      <section className="feature-band section-wrap">
        <div className="feature-visual"><div className="feature-window"><div className="window-top"><span /><span /><span /><small>ai-boost / studio</small></div><div className="window-body"><div className="window-line line-long" /><div className="window-line line-short" /><div className="window-grid"><div /><div /><div /></div><div className="window-cursor">✦</div></div></div><span className="feature-tag">BUILT FOR MOMENTUM</span></div>
        <div className="feature-copy"><p className="eyebrow">{t.home.featureEyebrow}</p><h2>{lines(t.home.featureTitle)}</h2><p>{t.home.featureText}</p><ul>{t.home.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul><a className="text-link dark-link" href="#pricing">{t.home.primary}<span>↗</span></a></div>
      </section>

      <section className="process-band section-wrap"><div className="process-intro"><p className="eyebrow">{t.home.pricingEyebrow}</p><h2>{lines(t.home.pricingTitle)}</h2><p>{t.home.description}</p></div><div className="home-process"><div><span>01</span><strong>{t.home.points[0]}</strong><small>{t.home.toolsText}</small></div><div><span>02</span><strong>{t.home.points[1]}</strong><small>{t.home.featureText}</small></div><div><span>03</span><strong>{t.home.points[2]}</strong><small>{t.home.agencyText}</small></div></div></section>

      <section className="quote-band section-wrap"><span className="quote-mark">“</span><blockquote>{t.home.trusted}. {t.home.finaleText}</blockquote><div><span className="quote-line" />AI—BOOST PRO / STUDIO</div></section>

      <section className="pricing-section section-wrap" id="pricing"><div className="section-heading pricing-heading"><div><p className="eyebrow">{t.home.pricingEyebrow}</p><h2>{lines(t.home.pricingTitle)}</h2></div><p>Simple by design. Powerful by nature.<br />{t.home.agencyText}</p></div><div className="pricing-grid"><article className="price-card"><span className="plan-number">01</span><h3>{t.home.personal}</h3><p>{t.home.personalText}</p><div className="price"><strong>$79</strong><span>/ one-time</span></div><a href="mailto:info@aiboostpro.com" className="price-button">{t.home.buy}<span>↗</span></a></article><article className="price-card featured-price"><span className="plan-number">02</span><div className="popular-label">MOST POPULAR</div><h3>{t.home.agency}</h3><p>{t.home.agencyText}</p><div className="price"><strong>$149</strong><span>/ one-time</span></div><a href="mailto:info@aiboostpro.com" className="price-button">{t.home.buy}<span>↗</span></a></article></div></section>

      <section className="final-cta section-wrap"><div><p className="eyebrow">AI—BOOST PRO</p><h2>{t.home.finale}</h2><p>{t.home.finaleText}</p></div><CTAButton>{t.nav.demo}<span>↗</span></CTAButton></section>
    </div>
  );
}