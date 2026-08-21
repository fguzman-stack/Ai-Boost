"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

export default function ServicesPage() {
  const { t } = useLanguage();
  const copy = t.services;
  return <div className="inner-page services-page"><section className="inner-hero section-wrap"><div><p className="eyebrow"><span className="eyebrow-dot" />{copy.eyebrow}</p><h1>{copy.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h1><p className="inner-lead">{copy.text}</p></div><div className="service-number"><strong>∞</strong><span>AI / 2026</span></div></section><section className="service-cards section-wrap">{copy.cards.map((card, index) => <article className={`service-card service-card-${index + 1}`} key={card.title}><span className="card-index">0{index + 1}</span><h2>{card.title}</h2><p>{card.text}</p><span className="card-arrow">↗</span></article>)}</section><section className="process-section section-wrap"><div className="section-heading"><div><p className="eyebrow">{copy.processTitle}</p><h2>{copy.processTitle}</h2></div><Link className="text-link dark-link" href="/contact">{copy.cta}<span>↗</span></Link></div><div className="process-grid">{copy.process.map((step, index) => <div className="process-step" key={step}><span>0{index + 1}</span><strong>{step}</strong><i>↗</i></div>)}</div></section></div>;
}
