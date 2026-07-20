import { Facebook, MapPin, Globe, Instagram, Phone } from 'lucide-react';
import achaiaLogo from "../../imports/achaia_wood-logo__1_.png";

export function Footer() {
  return (
    <footer className="bg-[#0A0806] text-[#8B7355] border-t border-[#C4A57B]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={achaiaLogo} alt="Achaia Wood Logo" className="h-10 w-10 object-contain" />
              <h3 className="text-2xl text-[#C4A57B]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 700 }}>
                Achaia Wood
              </h3>
            </div>
            <p className="text-[#8B7355] leading-relaxed mb-2 text-sm">
              Antoine Youssef Achaia Sons
            </p>
            <p className="text-[#8B7355] leading-relaxed mb-6">
              One of Egypt's oldest wood trading and manufacturing companies.
              Supplying premium doors, panels, flooring, and furniture since 1950.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/AchaiaWood"
                target="_blank"
                rel="noopener noreferrer"
                className="size-11 bg-[#2D1F1A] rounded-full flex items-center justify-center hover:bg-[#C4A57B] transition-all duration-300 hover:scale-110 border border-[#C4A57B]/20"
              >
                <Facebook className="size-5 text-[#C4A57B] hover:text-[#0A0806]" />
              </a>
              <a
                href="https://www.instagram.com/achaiawood/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-11 bg-[#2D1F1A] rounded-full flex items-center justify-center hover:bg-[#C4A57B] transition-all duration-300 hover:scale-110 border border-[#C4A57B]/20"
              >
                <Instagram className="size-5 text-[#C4A57B] hover:text-[#0A0806]" />
              </a>
              <a
                href="https://maps.app.goo.gl/uQvk5nmmGU2pHfNb8"
                target="_blank"
                rel="noopener noreferrer"
                className="size-11 bg-[#2D1F1A] rounded-full flex items-center justify-center hover:bg-[#C4A57B] transition-all duration-300 hover:scale-110 border border-[#C4A57B]/20"
              >
                <MapPin className="size-5 text-[#C4A57B] hover:text-[#0A0806]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-6 text-[#D4C5B0]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-3 text-[#8B7355]">
              <li><a href="#home" className="hover:text-[#C4A57B] transition-colors inline-block hover:translate-x-1 duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-[#C4A57B] transition-colors inline-block hover:translate-x-1 duration-300">About Us</a></li>
              <li><a href="#services" className="hover:text-[#C4A57B] transition-colors inline-block hover:translate-x-1 duration-300">Products</a></li>
              <li><a href="#portfolio" className="hover:text-[#C4A57B] transition-colors inline-block hover:translate-x-1 duration-300">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#C4A57B] transition-colors inline-block hover:translate-x-1 duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl mb-6 text-[#D4C5B0]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}>
              Our Products
            </h4>
            <ul className="space-y-3 text-[#8B7355]">
              <li>Wood & Steel Doors</li>
              <li>Plywood & Block Board</li>
              <li>MDF & Melamine</li>
              <li>Natural & Engineered Veneer</li>
              <li>Laminate Flooring</li>
              <li>Furniture</li>
              <li>Custom Manufacturing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-6 text-[#D4C5B0]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}>
              Find Us
            </h4>
            <ul className="space-y-4 text-[#8B7355]">
              <li className="flex items-start gap-3">
                <Phone className="size-5 mt-0.5 flex-shrink-0 text-[#C4A57B]" />
                <div className="select-all cursor-text">
                  +20 1271242220<br />+20 1271242221
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="size-5 mt-0.5 flex-shrink-0 text-[#C4A57B]" />
                <div>
                  <a href="https://www.facebook.com/AchaiaWood" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A57B] transition-colors">
                    facebook.com/AchaiaWood
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="size-5 mt-0.5 flex-shrink-0 text-[#C4A57B]" />
                <div>
                  <a href="https://www.instagram.com/achaiawood/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A57B] transition-colors">
                    @achaiawood
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-5 mt-0.5 flex-shrink-0 text-[#C4A57B]" />
                <div>
                  <a href="https://maps.app.goo.gl/uQvk5nmmGU2pHfNb8" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A57B] transition-colors">
                    Egypt — Trading & Manufacturing ↗
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C4A57B]/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#8B7355] text-sm">
            <p>
              © {new Date().getFullYear()} Antoine Youssef Achaia Sons. All rights reserved. Est. 1950 — Egypt.
            </p>
            <div className="flex gap-8">
              <a href="https://www.achaiawood.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A57B] transition-colors">
                achaiawood.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
