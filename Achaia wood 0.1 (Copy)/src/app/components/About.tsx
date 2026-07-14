import { Factory, Sparkles, Globe, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 lg:px-12 bg-[#1A120F] relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#C4A57B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C4A57B]/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1777793919056-72717077d724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdW1iZXIlMjB3b29kJTIwcGxhbmtzJTIwc3RhY2tlZCUyMHdhcmVob3VzZXxlbnwxfHx8fDE3ODM5NDg2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Achaia Wood warehouse"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-8 bg-[#1A120F] border border-[#C4A57B]/30 rounded-2xl px-8 py-5 shadow-xl hidden lg:block">
              <p
                className="text-[#C4A57B] text-5xl"
                style={{
                  fontFamily: "Cormorant, serif",
                  fontWeight: 700,
                }}
              >
                1950
              </p>
              <p className="text-[#8B7355] text-sm tracking-widest uppercase mt-1">
                Founded in Egypt
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 lg:pl-8">
            <div>
              <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
                Our Story
              </span>
              <h2
                className="text-5xl leading-tight text-[#D4C5B0] mt-4 mb-6"
                style={{
                  fontFamily: "Cormorant, serif",
                  fontWeight: 600,
                }}
              >
                Over 75 Years of Wood Excellence in Egypt
              </h2>
              <div className="w-20 h-1 bg-[#C4A57B] rounded-full" />
            </div>

            <div className="space-y-6 text-[#8B7355] leading-relaxed text-lg">
              <p>
                Founded in 1950, Antoine Youssef Achaia Sons is
                one of Egypt's oldest and most trusted names in
                wood trading and manufacturing. For over seven
                decades, we have supplied the Egyptian market
                with premium wood products sourced from around
                the world.
              </p>
              <p>
                We operate our own factory, allowing us to
                maintain strict quality control across
                everything we produce — from doors to MDF
                panels, plywood, block board, and natural
                veneer. Our steel and Turkish steel-wood doors
                bring durability alongside refined style.
              </p>
              <p>
                As a major distributor of laminate flooring —
                including AGT, TerraClick, VarioClick we offer
                many different thickness and resistance options
                to suit every budget and design vision.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="size-12 bg-[#2D1F1A] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A57B]/20">
                  <Factory className="size-6 text-[#C4A57B]" />
                </div>
                <div>
                  <h4
                    className="text-[#D4C5B0] mb-1 text-lg"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    Our Own Factory
                  </h4>
                  <p className="text-sm text-[#8B7355]">
                    In-house manufacturing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 bg-[#2D1F1A] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A57B]/20">
                  <Sparkles className="size-6 text-[#C4A57B]" />
                </div>
                <div>
                  <h4
                    className="text-[#D4C5B0] mb-1 text-lg"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    Premium Quality
                  </h4>
                  <p className="text-sm text-[#8B7355]">
                    Imported raw materials
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 bg-[#2D1F1A] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A57B]/20">
                  <Globe className="size-6 text-[#C4A57B]" />
                </div>
                <div>
                  <h4
                    className="text-[#D4C5B0] mb-1 text-lg"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    Competetive Pricing
                  </h4>
                  <p className="text-sm text-[#8B7355]">
                    Always Tracking Market Prices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 bg-[#2D1F1A] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A57B]/20">
                  <Award className="size-6 text-[#C4A57B]" />
                </div>
                <div>
                  <h4
                    className="text-[#D4C5B0] mb-1 text-lg"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    75+ Years
                  </h4>
                  <p className="text-sm text-[#8B7355]">
                    Trusted since 1950
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}