"use client";

import CTAButton from "../components/CTAButton";
import { useLanguage } from "../components/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();
  const copy = t.contact;

  return <div className="inner-page contact-page"><section className="inner-hero section-wrap"><div><p className="eyebrow"><span className="eyebrow-dot" />{copy.eyebrow}</p><h1>{copy.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h1><p className="inner-lead">{copy.text}</p></div><div className="contact-orbit"><span>✳</span><strong>AI—BOOST</strong><small>FOR AI BUSINESSES</small></div></section><section className="contact-layout section-wrap"><div className="contact-aside"><div className="availability"><span className="live-dot" /><div><strong>{copy.availability}</strong><small>{copy.response}</small></div></div><div className="contact-detail"><span className="detail-index">01</span><p>{copy.detail}</p><a href="mailto:info@aiboostpro.com">info@aiboostpro.com <span>↗</span></a></div><div className="contact-detail"><span className="detail-index">02</span><p>AI-Boost Pro Studio<br />Remote · Worldwide</p></div></div><form className="contact-form"><div className="form-row"><label><span>{copy.name}</span><input type="text" placeholder={copy.name} required /></label><label><span>{copy.email}</span><input type="email" placeholder={copy.email} required /></label></div><label><span>{copy.message}</span><textarea placeholder={copy.message} required /></label><div className="form-submit"><span>AI—BOOST / STUDIO</span><CTAButton>{copy.send}<span>↗</span></CTAButton></div></form></section></div>;
}
