import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProductPageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  details: string;
  imageSrc: string;
}

export function ProductPage({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  details,
  imageSrc,
}: ProductPageProps) {
  return (
    <div className="min-h-screen bg-[#0A0806]">
      {/* Hero */}
      <section className="py-28 px-6 lg:px-12 bg-gradient-to-b from-[#1A120F] to-[#0A0806] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4A57B]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#C4A57B] transition-colors text-sm mb-10"
          >
            <ArrowLeft className="size-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center size-20 bg-[#C4A57B]/10 rounded-2xl mb-8 border border-[#C4A57B]/20">
                <Icon className="size-10 text-[#C4A57B]" />
              </div>
              <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
                {subtitle}
              </span>
              <h1
                className="text-5xl lg:text-6xl text-[#D4C5B0] mt-4 mb-6 leading-tight"
                style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
              >
                {title}
              </h1>
              <p className="text-[#8B7355] text-lg leading-relaxed mb-10">
                {description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-8 py-4 rounded-full hover:bg-[#D4C5B0] transition-all shadow-xl shadow-[#C4A57B]/20 hover:-translate-y-0.5 duration-300 font-medium"
              >
                <span>Request a Quote</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#C4A57B]/15 shadow-2xl">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features + Details */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Feature list */}
          <div>
            <h2
              className="text-3xl text-[#D4C5B0] mb-8"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
            >
              What We Offer
            </h2>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-4 text-[#8B7355]">
                  <div className="size-2 bg-[#C4A57B] rounded-full flex-shrink-0" />
                  <span className="text-lg">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="bg-gradient-to-br from-[#2D1F1A] to-[#1A120F] rounded-3xl p-10 border border-[#C4A57B]/15">
            <h2
              className="text-3xl text-[#D4C5B0] mb-6"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
            >
              About This Product Line
            </h2>
            <p className="text-[#8B7355] leading-relaxed text-lg">{details}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2D1F1A] to-[#3E2723] rounded-3xl p-12 text-center border border-[#C4A57B]/20">
          <h3
            className="text-4xl text-[#D4C5B0] mb-4"
            style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
          >
            Need a Custom Order or Bulk Supply?
          </h3>
          <p className="text-[#8B7355] text-lg mb-8 max-w-xl mx-auto">
            Our team is ready to help with specifications, pricing, and delivery. Reach out in English or Arabic.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-2xl shadow-[#C4A57B]/20 duration-300 font-medium text-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
