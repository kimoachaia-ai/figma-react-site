import {
  DoorOpen,
  FlipHorizontal,
  Layers,
  Armchair,
  Settings2,
} from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const productDefs = [
  {
    icon: DoorOpen,
    key: "doors",
    to: "/products/doors",
  },
  {
    icon: Layers,
    key: "flooring",
    to: "/products/flooring",
  },
  {
    icon: FlipHorizontal,
    key: "lumber",
    to: "/products/lumber-veneer",
  },
  {
    icon: Armchair,
    key: "furniture",
    to: "/products/furniture",
  },
  {
    icon: Settings2,
    key: "custom",
    to: "/products/custom",
  },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="py-32 px-6 lg:px-12 bg-[#1A120F] relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C4A57B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
            {t('services.badge')}
          </span>
          <h2
            className="text-5xl leading-tight text-[#D4C5B0] mt-4 mb-6"
            style={{
              fontFamily: "Cormorant, serif",
              fontWeight: 600,
            }}
          >
            {t('services.title')}
          </h2>
          <p className="text-[#8B7355] text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productDefs.map((product, index) => {
            const features = t(`services.products.${product.key}.features`, { returnObjects: true }) as string[];
            return (
              <Link
                key={index}
                to={product.to}
                className="group bg-gradient-to-br from-[#2D1F1A] to-[#1A120F] rounded-3xl p-10 hover:shadow-2xl hover:shadow-[#C4A57B]/10 transition-all duration-500 border border-[#C4A57B]/15 hover:border-[#C4A57B]/30 hover:-translate-y-2 block"
              >
                <div className="inline-flex items-center justify-center size-16 bg-[#C4A57B]/10 rounded-2xl mb-6 group-hover:bg-[#C4A57B] group-hover:scale-110 transition-all duration-500 border border-[#C4A57B]/20">
                  <product.icon className="size-8 text-[#C4A57B] group-hover:text-[#0A0806] transition-colors duration-500" />
                </div>

                <h3
                  className="text-2xl text-[#D4C5B0] mb-4"
                  style={{
                    fontFamily: "Cormorant, serif",
                    fontWeight: 600,
                  }}
                >
                  {t(`services.products.${product.key}.title`)}
                </h3>

                <p className="text-[#8B7355] mb-6 leading-relaxed">
                  {t(`services.products.${product.key}.description`)}
                </p>

                <ul className="space-y-3">
                  {Array.isArray(features) && features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-[#8B7355]"
                    >
                      <div className="size-1.5 bg-[#C4A57B] rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-br from-[#2D1F1A] to-[#3E2723] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-[#C4A57B]/20">
          <div className="relative z-10">
            <h3
              className="text-4xl mb-4 text-[#D4C5B0]"
              style={{
                fontFamily: "Cormorant, serif",
                fontWeight: 600,
              }}
            >
              {t('services.cta_title')}
            </h3>
            <p className="text-[#8B7355] text-lg mb-8 max-w-2xl mx-auto">
              {t('services.cta_sub')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-2xl shadow-[#C4A57B]/20 duration-300"
            >
              <span className="text-lg font-medium">
                {t('services.cta_btn')}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
