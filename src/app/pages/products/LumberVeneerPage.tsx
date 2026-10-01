import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, FlipHorizontal, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const images = [
  {
    src: "https://images.unsplash.com/photo-1769430838012-8e1270d41f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Stacked wood boards in a warehouse",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1634672652995-ee7525bce595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Hardwood planks stacked side by side",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1736506159776-22ca388780fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Natural wood veneer grain close-up",
    span: "",
  },
];

// English values kept for URL params
const featureValues = [
  "Solid Lumber & Timber",
  "MDF & HDF Boards",
  "Particle Board & Chipboard",
  "Natural Wood Veneer",
  "Engineered Veneer",
  "Edge Banding",
];

const featureTranslationKeys = ["lumber.f1", "lumber.f2", "lumber.f3", "lumber.f4", "lumber.f5", "lumber.f6"];

export function LumberVeneerPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0A0806]">

      {/* Hero */}
      <section className="py-28 px-6 lg:px-12 bg-gradient-to-b from-[#1A120F] to-[#0A0806] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4A57B]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative">
          <button
            onClick={goToProducts}
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#C4A57B] transition-colors text-sm mb-10"
          >
            <ArrowLeft className="size-4" />
            {t('common.back_products')}
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="flex items-start gap-5 mb-6">
                <div className="inline-flex items-center justify-center size-16 bg-[#C4A57B]/10 rounded-2xl border border-[#C4A57B]/20 flex-shrink-0 mt-1">
                  <FlipHorizontal className="size-8 text-[#C4A57B]" />
                </div>
                <div>
                  <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
                    {t('lumber.badge')}
                  </span>
                  <h1
                    className="text-5xl lg:text-6xl text-[#D4C5B0] mt-2 leading-tight"
                    style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
                  >
                    {t('lumber.title')}
                  </h1>
                </div>
              </div>
              <p className="text-[#8B7355] text-lg leading-relaxed mb-10">
                {t('lumber.desc')}
              </p>
              <Link
                to={`/contact?${new URLSearchParams({ category: "Wood, Lumber & Veneer" }).toString()}`}
                className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-8 py-4 rounded-full hover:bg-[#D4C5B0] transition-all shadow-xl shadow-[#C4A57B]/20 hover:-translate-y-0.5 duration-300 font-medium"
              >
                <span>{t('common.request_quote')}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Multi-image grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[440px]">
              {/* Large left image — spans both rows */}
              <div className="row-span-2 rounded-2xl overflow-hidden border border-[#C4A57B]/15">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Top-right */}
              <div className="rounded-2xl overflow-hidden border border-[#C4A57B]/15">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom-right */}
              <div className="rounded-2xl overflow-hidden border border-[#C4A57B]/15">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Details */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2
              className="text-3xl text-[#D4C5B0] mb-8"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
            >
              {t('common.what_we_offer')}
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {featureValues.map((val, i) => (
                  <Link
                    key={val}
                    to={`/contact?${new URLSearchParams({ category: "Wood, Lumber & Veneer", subType: val }).toString()}`}
                    className="group relative flex flex-col bg-gradient-to-br from-[#261810] to-[#160E0A] rounded-2xl border border-[#C4A57B]/22 hover:border-[#C4A57B]/60 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-[#C4A57B]/10"
                  >
                    <div className="absolute inset-0 bg-[#C4A57B]/0 group-hover:bg-[#C4A57B]/6 transition-colors duration-300 pointer-events-none" />
                    <div className="relative p-6 flex flex-col flex-1 min-h-[155px]">
                      <span className="text-[#C4A57B]/40 text-xs font-mono mb-3 group-hover:text-[#C4A57B]/60 transition-colors duration-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-[#D4C5B0] text-xl leading-snug flex-1"
                        style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
                      >
                        {t(featureTranslationKeys[i])}
                      </span>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#C4A57B]/15 group-hover:border-[#C4A57B]/30 transition-colors duration-300">
                        <span className="text-xs text-[#8B7355] group-hover:text-[#C4A57B] transition-colors duration-200">{t('common.enquire')}</span>
                        <ArrowRight className="size-3 text-[#8B7355]/50 group-hover:text-[#C4A57B] group-hover:translate-x-0.5 transition-all duration-200" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                to={`/contact?${new URLSearchParams({ category: "Wood, Lumber & Veneer", subType: "All" }).toString()}`}
                className="group flex items-center justify-between bg-[#1A120F] rounded-2xl px-6 py-4 border border-dashed border-[#C4A57B]/25 hover:border-[#C4A57B]/50 hover:bg-[#C4A57B]/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-[#C4A57B]/10 border border-[#C4A57B]/20 flex items-center justify-center">
                    <MessageCircle className="size-3 text-[#C4A57B]" />
                  </div>
                  <span className="text-sm text-[#8B7355] group-hover:text-[#C4A57B] transition-colors duration-200">{t('common.enquire_all_materials')}</span>
                </div>
                <ArrowRight className="size-4 text-[#8B7355]/40 group-hover:text-[#C4A57B] group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2D1F1A] to-[#1A120F] rounded-3xl p-10 border border-[#C4A57B]/15">
            <h2
              className="text-3xl text-[#D4C5B0] mb-6"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
            >
              {t('lumber.about_title')}
            </h2>
            <p className="text-[#8B7355] leading-relaxed text-lg">
              {t('lumber.about_body')}
            </p>
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
            {t('lumber.cta_title')}
          </h3>
          <p className="text-[#8B7355] text-lg mb-8 max-w-xl mx-auto">
            {t('lumber.cta_sub')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-2xl shadow-[#C4A57B]/20 duration-300 font-medium text-lg"
          >
            {t('common.get_free_quote')}
          </Link>
        </div>
      </section>
    </div>
  );
}
