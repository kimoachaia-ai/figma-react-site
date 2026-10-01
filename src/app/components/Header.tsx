import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import achaiaLogo from "../../imports/achaia_wood-logo__1_.png";
import { LanguageSwitcher } from "./LanguageSwitcher";

const doorSubLinks = [
  { labelKey: "nav.flushDoors", to: "/products/doors/flush" },
  { labelKey: "nav.lacquerDoors", to: "/products/doors/lacquer" },
  { labelKey: "nav.skinDoors", to: "/products/doors/skin" },
  { labelKey: "nav.steelDoors", to: "/products/doors/steel" },
  { labelKey: "nav.pvcDoors", to: "/products/doors/pvc" },
  { labelKey: "nav.smartSolutions", to: "/products/doors/smart-solutions" },
];

const productLinks = [
  { labelKey: "nav.doors", to: "/products/doors", sub: doorSubLinks },
  { labelKey: "nav.flooring", to: "/products/flooring" },
  { labelKey: "nav.lumber", to: "/products/lumber-veneer" },
  { labelKey: "nav.furniture", to: "/products/furniture" },
  { labelKey: "nav.custom", to: "/products/custom" },
];

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileDoorsOpen, setMobileDoorsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileDoorsOpen(false);
  };

  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    closeMobileMenu();
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinkClass =
    "text-[#D4C5B0] hover:text-[#C4A57B] transition-colors text-[15px] tracking-wide";

  return (
    <header className="bg-[#0A0806]/95 backdrop-blur-md border-b border-[#C4A57B]/15 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3">
            <img src={achaiaLogo} alt="Achaia Wood Logo" className="h-16 w-16 object-contain" />
            <div className="text-[#C4A57B]">
              <h3 className="text-2xl tracking-tight leading-none" style={{ fontFamily: "Cormorant, serif", fontWeight: 700 }}>
                Achaia Wood
              </h3>
              <p className="text-[10px] text-[#8B7355] tracking-[0.2em] uppercase mt-0.5">Est. 1950 — Egypt</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <button onClick={() => scrollToSection("home")} className={navLinkClass}>{t('nav.home')}</button>
            <button onClick={() => scrollToSection("about")} className={navLinkClass}>{t('nav.about')}</button>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => { setProductsOpen(false); setDoorsOpen(false); }}
            >
              <button
                className={`${navLinkClass} flex items-center gap-1`}
                onClick={() => scrollToSection("services")}
              >
                {t('nav.products')}
                <ChevronDown className={`size-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                  <div className="bg-[#1A120F] border border-[#C4A57B]/20 rounded-2xl py-2 shadow-2xl shadow-black/40">
                    {productLinks.map((p) =>
                      p.sub ? (
                        /* Doors — hover reveals flyout */
                        <div
                          key={p.to}
                          className="relative"
                          onMouseEnter={() => setDoorsOpen(true)}
                          onMouseLeave={() => setDoorsOpen(false)}
                        >
                          <div className="flex items-center justify-between px-5 py-3 text-[#8B7355] hover:text-[#C4A57B] hover:bg-[#C4A57B]/5 transition-colors text-sm cursor-default">
                            <Link to={p.to} className="flex-1" onClick={() => { setProductsOpen(false); setDoorsOpen(false); }}>
                              {t(p.labelKey)}
                            </Link>
                            <ChevronRight className="size-3.5 flex-shrink-0" />
                          </div>

                          {doorsOpen && (
                            <div className="absolute left-full top-0 pl-2 w-52">
                              <div className="bg-[#1A120F] border border-[#C4A57B]/20 rounded-2xl py-2 shadow-2xl shadow-black/40">
                                {p.sub.map((s) => (
                                  <Link
                                    key={s.to}
                                    to={s.to}
                                    onClick={() => { setProductsOpen(false); setDoorsOpen(false); }}
                                    className="block px-5 py-2.5 text-[#8B7355] hover:text-[#C4A57B] hover:bg-[#C4A57B]/5 transition-colors text-sm"
                                  >
                                    {t(s.labelKey)}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={p.to}
                          to={p.to}
                          onClick={() => setProductsOpen(false)}
                          className="block px-5 py-3 text-[#8B7355] hover:text-[#C4A57B] hover:bg-[#C4A57B]/5 transition-colors text-sm"
                        >
                          {t(p.labelKey)}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className={navLinkClass}>{t('nav.contact')}</Link>
            <LanguageSwitcher />
          </nav>

          {/* CTA Button & Mobile Menu toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 bg-[#C4A57B] text-[#0A0806] px-7 py-3.5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-lg hover:shadow-[#C4A57B]/20 hover:-translate-y-0.5 duration-300 text-[15px] font-medium"
            >
              <Phone className="size-4" />
              <span>{t('common.get_quote')}</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#C4A57B]"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-8 border-t border-[#C4A57B]/15">
            <div className="flex flex-col gap-5">
              {/* Language Switcher at top of mobile menu */}
              <div className="pb-2 border-b border-[#C4A57B]/15">
                <LanguageSwitcher />
              </div>

              <button className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg text-left" onClick={() => scrollToSection("home")}>
                {t('nav.home')}
              </button>
              <button className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg text-left" onClick={() => scrollToSection("about")}>
                {t('nav.about')}
              </button>

              {/* Mobile Products — expandable */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                >
                  <span>{t('nav.products')}</span>
                  <ChevronDown className={`size-5 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileProductsOpen && (
                  <div className="flex flex-col gap-1 mt-2 pl-4 border-l border-[#C4A57B]/20">
                    {/* Doors — expandable sub-section */}
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-[#8B7355] hover:text-[#C4A57B] transition-colors py-2 text-base"
                        onClick={() => setMobileDoorsOpen((v) => !v)}
                      >
                        <span>{t('nav.doors')}</span>
                        <ChevronDown className={`size-4 transition-transform duration-200 ${mobileDoorsOpen ? "rotate-180" : ""}`} />
                      </button>

                      {mobileDoorsOpen && (
                        <div className="flex flex-col gap-1 pl-4 border-l border-[#C4A57B]/10 mb-1">
                          <Link
                            to="/products/doors"
                            onClick={closeMobileMenu}
                            className="text-[#8B7355]/70 hover:text-[#C4A57B] transition-colors py-1.5 text-sm"
                          >
                            {t('nav.allDoors')}
                          </Link>
                          {doorSubLinks.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              onClick={closeMobileMenu}
                              className="text-[#8B7355]/70 hover:text-[#C4A57B] transition-colors py-1.5 text-sm"
                            >
                              {t(s.labelKey)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Other product links */}
                    {productLinks.filter((p) => !p.sub).map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        onClick={closeMobileMenu}
                        className="text-[#8B7355] hover:text-[#C4A57B] transition-colors py-2 text-base"
                      >
                        {t(p.labelKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" onClick={closeMobileMenu} className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg">
                {t('nav.contact')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
