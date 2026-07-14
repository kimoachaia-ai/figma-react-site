import { ArrowRight, Calendar, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A0806] via-[#1A120F] to-[#2D1F1A]"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L60 60M60 0L0 60' stroke='%23C4A57B' stroke-width='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2D1F1A] backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#C4A57B]/20">
              <Calendar className="size-4 text-[#C4A57B]" />
              <span className="text-[#D4C5B0] text-sm tracking-wide">
                Egypt's Wood Specialist Since 1950
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#D4C5B0] tracking-tight"
              style={{
                fontFamily: "Cormorant, serif",
                fontWeight: 600,
              }}
            >
              Premium Wood,{" "}
              <span className="text-[#C4A57B] italic block mt-2">
                Doors & Flooring
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#8B7355] leading-relaxed">
              Antoine Youssef Achaia Sons — one of Egypt's
              oldest trading and manufacturing companies in
              wood. From panels and lumber to fine doors and
              Laminated floors, we supply the quality your
              project deserves.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-2xl shadow-[#C4A57B]/10 hover:shadow-[#C4A57B]/20 hover:-translate-y-1 duration-300"
              >
                <span className="text-lg font-medium">
                  Request a Quote
                </span>
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-[#2D1F1A] text-[#C4A57B] px-9 py-5 rounded-full hover:bg-[#3E2723] transition-all border border-[#C4A57B]/30 duration-300"
              >
                <span className="text-lg">Our Products</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="size-12 bg-[#2D1F1A] rounded-full flex items-center justify-center border border-[#C4A57B]/20">
                  <Calendar className="size-6 text-[#C4A57B]" />
                </div>
                <div>
                  <p
                    className="text-2xl text-[#D4C5B0]"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    75+ Years
                  </p>
                  <p className="text-sm text-[#8B7355]">
                    In Business Since 1950
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-12 bg-[#2D1F1A] rounded-full flex items-center justify-center border border-[#C4A57B]/20">
                  <Shield className="size-6 text-[#C4A57B]" />
                </div>
                <div>
                  <p
                    className="text-2xl text-[#D4C5B0]"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    Our Own Factory
                  </p>
                  <p className="text-sm text-[#8B7355]">
                    Manufacturing & Trading
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Creative Image Layout */}
          <div className="relative hidden lg:block">
            <div className="relative h-[700px] w-full">
              {/* Top Circle */}
              <div className="absolute top-0 right-0 w-[320px] h-[320px] rounded-full overflow-hidden shadow-2xl border-4 border-[#C4A57B]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1603673298820-40d77252226d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkb29ycyUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc4Mzk0ODYyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Premium wooden doors"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A57B]/10 to-transparent" />
              </div>

              {/* Middle Circle */}
              <div className="absolute top-32 left-0 w-[340px] h-[340px] rounded-full overflow-hidden shadow-2xl border-4 border-[#C4A57B]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1585128792020-803d29415281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yaW5nJTIwbGFtaW5hdGUlMjBmbG9vcnxlbnwxfHx8fDE3ODM5NDg2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hardwood flooring"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A57B]/10 to-transparent" />
              </div>

              {/* Bottom Circle */}
              <div className="absolute bottom-0 right-12 w-[280px] h-[280px] rounded-full overflow-hidden shadow-2xl border-4 border-[#C4A57B]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587006158786-7b79525a2147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnVybml0dXJlJTIwc2hvd3Jvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3ODM5NDg2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wood furniture"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A57B]/10 to-transparent" />
              </div>

              <div className="absolute top-40 right-32 w-32 h-32 bg-[#C4A57B]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-40 left-32 w-40 h-40 bg-[#C4A57B]/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden rounded-3xl overflow-hidden shadow-2xl border border-[#C4A57B]/20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603673298820-40d77252226d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkb29ycyUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc4Mzk0ODYyNXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Achaia Wood products"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-[#8B7355] animate-bounce">
          <span className="text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C4A57B] to-transparent" />
        </div>
      </div>
    </section>
  );
}