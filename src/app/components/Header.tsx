import { Menu, X, Phone } from "lucide-react";
import achaiaLogo from "../../imports/achaia_wood-logo__1_.png";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0A0806]/95 backdrop-blur-md border-b border-[#C4A57B]/15 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Tree / wood mark icon */}
            <img
              src={achaiaLogo}
              alt="Achaia Wood Logo"
              className="h-16 w-16 object-contain"
            />
            <div className="text-[#C4A57B]">
              <h3
                className="text-2xl tracking-tight leading-none"
                style={{
                  fontFamily: "Cormorant, serif",
                  fontWeight: 700,
                }}
              >
                Achaia Wood
              </h3>
              <p className="text-[10px] text-[#8B7355] tracking-[0.2em] uppercase mt-0.5">
                Est. 1950 — Egypt
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="#home"
              className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors text-[15px] tracking-wide"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors text-[15px] tracking-wide"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors text-[15px] tracking-wide"
            >
              Gallery
            </a>
            <a
              href="#services"
              className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors text-[15px] tracking-wide"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors text-[15px] tracking-wide"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-[#C4A57B] text-[#0A0806] px-7 py-3.5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-lg hover:shadow-[#C4A57B]/20 hover:-translate-y-0.5 duration-300 text-[15px] font-medium"
            >
              <Phone className="size-4" />
              <span>Get Quote</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#C4A57B]"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-8 border-t border-[#C4A57B]/15">
            <div className="flex flex-col gap-5">
              <a
                href="#home"
                className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg"
              >
                Gallery
              </a>
              <a
                href="#services"
                className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg"
              >
                Products
              </a>
              <a
                href="#contact"
                className="text-[#D4C5B0] hover:text-[#C4A57B] transition-colors py-2 text-lg"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}