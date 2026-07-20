import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import achaiaLogo from "../../imports/achaia_wood-logo__1_.png";

const productLinks = [
  { label: "Doors", to: "/products/doors" },
  { label: "Wood Panels & Materials", to: "/products/wood-panels" },
  { label: "Lumber & Veneer", to: "/products/lumber-veneer" },
  { label: "Laminate Flooring", to: "/products/flooring" },
  { label: "Furniture", to: "/products/furniture" },
  { label: "Custom Manufacturing", to: "/products/custom" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    closeMobileMenu();
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for the home page to mount before scrolling
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
            <img
              src={achaiaLogo}
              alt="Achaia Wood Logo"
              className="h-16 w-16 object-contain"
            />
            <div className="text-[#C4A57B]">
              <h3
                className="text-2xl tracking-tight leading-none"
                style={{ fontFamily: "Cormorant, serif", fontWeight: 700 }}
              >
                Achaia Wood
              </h3>
              <p className="text-[10px] text-[#8B7355] tracking-[0.2em] uppercase mt-0.5">
                Est. 1950 — Egypt
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <button onClick={() => scrollToSection("home")} className={navLinkClass}>Home</button>
            <button onClick={() => scrollToSection("about")} className={navLinkClass}>About</button>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`${navLinkClass} flex items-center gap-1`}
                onClick={() => navigate("/#services")}
              >
                Products
                <ChevronDown className={`size-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                  <div className="bg-[#1A120F] border border-[#C4A57B]/20 rounded-2xl py-2 shadow-2xl shadow-black/40">
                    {productLinks.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        className="block px-5 py-3 text-[#8B7355] hover:text-[#C4A57B] hover:bg-[#C4A57B]/5 transition-colors text-sm"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className={navLinkClass}>Contact</Link>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 bg-[#C4A57B] text-[#0A0806] px-7 py-3.5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-lg hover:shadow-[#C4A57B]/20 hover:-translate-y-0.5 duration-300 text-[15px] font-medium"
            >
              <Phone className="size-4" />
              <span>Get Quote</span>
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
              <button
                className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg text-left"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg text-left"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>

              {/* Mobile products — expandable */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                >
                  <span>Products</span>
                  <ChevronDown className={`size-5 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileProductsOpen && (
                  <div className="flex flex-col gap-1 mt-2 pl-4 border-l border-[#C4A57B]/20">
                    {productLinks.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        className="text-[#8B7355] hover:text-[#C4A57B] transition-colors py-2 text-base"
                        onClick={closeMobileMenu}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
