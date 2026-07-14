import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import achaiaLogo from "../../imports/achaia_wood-logo__1_.png";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0806] to-[#1A120F] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C4A57B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
            Get in Touch
          </span>
          <h2
            className="text-5xl leading-tight text-[#D4C5B0] mt-4 mb-6"
            style={{
              fontFamily: "Cormorant, serif",
              fontWeight: 600,
            }}
          >
            Request a Quote or Enquire About Our Products
          </h2>
          <p className="text-[#8B7355] text-lg leading-relaxed">
            Whether you need doors, panels, flooring, or
            furniture — our team at Achaia Wood is ready to
            help. Reach out in English or Arabic.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone Numbers */}
              <div className="flex items-start gap-5 bg-[#1A120F] rounded-2xl p-6 shadow-lg border border-[#C4A57B]/20">
                <div className="size-14 bg-[#C4A57B]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A57B]/20">
                  <Phone className="size-6 text-[#C4A57B]" />
                </div>
                <div>
                  <p className="text-sm text-[#8B7355] mb-1">
                    Call or Message us on WhatsApp
                  </p>
                  <p
                    className="text-[#D4C5B0] text-xl select-all cursor-text"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    +20 1271242220 <br />
                    +20 1271242221
                  </p>
                </div>
              </div>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/AchaiaWood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 bg-[#1A120F] rounded-2xl p-6 shadow-lg hover:shadow-[#C4A57B]/10 transition-all group border border-[#C4A57B]/20"
              >
                <div className="size-14 bg-[#C4A57B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C4A57B] transition-colors flex-shrink-0 border border-[#C4A57B]/20">
                  <Mail className="size-6 text-[#C4A57B] group-hover:text-[#0A0806] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#8B7355] mb-1">
                    Facebook
                  </p>
                  <p
                    className="text-[#D4C5B0] text-xl"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    /AchaiaWood
                  </p>
                </div>
              </a>

              {/* Languages */}
              <a
                href="https://www.instagram.com/achaiawood/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 bg-[#1A120F] rounded-2xl p-6 shadow-lg hover:shadow-[#C4A57B]/10 transition-all group border border-[#C4A57B]/20"
              >
                <div className="size-14 bg-[#C4A57B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C4A57B] transition-colors flex-shrink-0 border border-[#C4A57B]/20">
                  <Instagram className="size-6 text-[#C4A57B] group-hover:text-[#0A0806] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#8B7355] mb-1">
                    Instagram
                  </p>
                  <p
                    className="text-[#D4C5B0] text-xl"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    @achaiawood
                  </p>
                </div>
              </a>
            </div>

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/uQvk5nmmGU2pHfNb8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 bg-[#1A120F] rounded-2xl p-6 shadow-lg border border-[#C4A57B]/20 hover:border-[#C4A57B]/50 transition-colors duration-300"
            >
              <div className="size-14 bg-[#C4A57B]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A57B]/20">
                <MapPin className="size-6 text-[#C4A57B]" />
              </div>
              <div>
                <p className="text-sm text-[#8B7355] mb-1">
                  Location
                </p>
                <p
                  className="text-[#D4C5B0] text-lg"
                  style={{
                    fontFamily: "Cormorant, serif",
                    fontWeight: 600,
                  }}
                >
                  Egypt
                  <br />
                  (Trading & Manufacturing)
                </p>
                <p className="text-[#C4A57B] text-xs mt-1">
                  View on Google Maps ↗
                </p>
              </div>
            </a>

            {/* Image */}
            <div>
              <img
                src={achaiaLogo}
                alt="Achaia Wood Logo"
                className="w-[300px] h-[300px] object-contain rounded-full mx-auto"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-[#1A120F] rounded-3xl p-10 md:p-12 shadow-xl border border-[#C4A57B]/20">
            <h3
              className="text-3xl text-[#D4C5B0] mb-8"
              style={{
                fontFamily: "Cormorant, serif",
                fontWeight: 600,
              }}
            >
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#8B7355] mb-2 text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-xl bg-[#0A0806] border border-[#C4A57B]/20 focus:outline-none focus:ring-2 focus:ring-[#C4A57B] focus:border-transparent text-[#D4C5B0] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[#8B7355] mb-2 text-sm font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 rounded-xl bg-[#0A0806] border border-[#C4A57B]/20 focus:outline-none focus:ring-2 focus:ring-[#C4A57B] focus:border-transparent text-[#D4C5B0] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#8B7355] mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-4 rounded-xl bg-[#0A0806] border border-[#C4A57B]/20 focus:outline-none focus:ring-2 focus:ring-[#C4A57B] focus:border-transparent text-[#D4C5B0] transition-all"
                />
              </div>

              <div>
                <label className="block text-[#8B7355] mb-2 text-sm font-medium">
                  Project Type
                </label>
                <select className="w-full px-5 py-4 rounded-xl bg-[#0A0806] border border-[#C4A57B]/20 focus:outline-none focus:ring-2 focus:ring-[#C4A57B] focus:border-transparent text-[#D4C5B0] transition-all">
                  <option>Select a product category</option>
                  <option>Doors</option>
                  <option>Wood Panels</option>
                  <option>Lumber & Veneer</option>
                  <option>Laminate Flooring</option>
                  <option>Furniture</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#8B7355] mb-2 text-sm font-medium">
                  Project Details
                </label>
                <textarea
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl bg-[#0A0806] border border-[#C4A57B]/20 focus:outline-none focus:ring-2 focus:ring-[#C4A57B] focus:border-transparent text-[#D4C5B0] resize-none transition-all"
                  placeholder="Tell us about your project, dimensions, style preferences, timeline, and any other details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-2xl shadow-[#C4A57B]/20 hover:-translate-y-1 duration-300 text-lg font-medium"
              >
                <span>Send Message</span>
                <Send className="size-5" />
              </button>

              <p className="text-sm text-[#8B7355] text-center">
                We'll respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}