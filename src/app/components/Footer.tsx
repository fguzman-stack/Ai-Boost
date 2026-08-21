"use client";

import { useLanguage } from "./LanguageProvider";
import Link from "next/link";

const Footer = () => {
  const { t } = useLanguage();
  return <footer className="site-footer"><div className="footer-main"><Link href="/" className="brand"><span className="brand-mark">✳</span><span>AI—Boost</span></Link><p>{t.footer.note}</p><a className="footer-contact" href="mailto:info@aiboostpro.com">{t.footer.contact} <span>↗</span></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AI-Boost Pro</span><span>{t.footer.rights}</span><span>ES / EN</span></div></footer>;
};

export default Footer; 