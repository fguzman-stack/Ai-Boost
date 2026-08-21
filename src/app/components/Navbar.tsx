"use client";

import { useLanguage } from "./LanguageProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const sectionHref = (section: string) => pathname === "/" ? section : `/${section}`;

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link href="/" className="brand"><span className="brand-mark">✳</span><span>AI—Boost</span></Link>
        <div className="nav-links"><Link href={sectionHref("#platform")}>{t.nav.platform}</Link><Link href={sectionHref("#tools")}>{t.nav.tools}</Link><Link href={sectionHref("#pricing")}>{t.nav.pricing}</Link><Link href="/contact">{t.nav.contact}</Link></div>
        <div className="nav-actions">
          <label className="language-switcher"><span className="sr-only">Language</span><select value={language} onChange={(event) => setLanguage(event.target.value as typeof language)} aria-label="Language selector"><option value="es">ES</option><option value="en">EN</option><option value="fr">FR</option><option value="de">DE</option><option value="pt">PT</option><option value="it">IT</option></select></label>
          <a className="nav-cta" href="#pricing">{t.nav.demo}<span>↗</span></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 