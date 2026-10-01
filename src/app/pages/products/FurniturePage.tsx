import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Armchair, ArrowLeft, ArrowRight, MessageCircle, ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ImageLightbox } from "../../components/ImageLightbox";

const IMAGES = [
  "https://lh3.googleusercontent.com/d/1MbFU4ONLXK2Oyy4ryyLfB7cKtK7vsuvi",
  "https://lh3.googleusercontent.com/d/1Y8NM7eX-6EIfdKywD0NxNACSafcRHN8q",
  "https://lh3.googleusercontent.com/d/1f_3yqG5tQCJiua_osWAZvK3NZxuX7KAH",
  "https://lh3.googleusercontent.com/d/1msUbnNEERYdU0rngEGj2jm6sIzklvCe_",
  "https://lh3.googleusercontent.com/d/1qMu5ohEMzIFA_0JHQaNLzPmO1YcJB95P",
];

export function FurniturePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goToProducts = () => {
    navigate("/");
    setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const features = [
    t('furniture.f1'),
    t('furniture.f2'),
    t('furniture.f3'),
    t('furniture.f4'),
    t('furniture.f5'),
  ];

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
                  <Armchair className="size-8 text-[#C4A57B]" />
                </div>
                <div>
                  <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
                    {t('furniture.subtitle')}
                  </span>
                  <h1
                    className="text-5xl lg:text-6xl text-[#D4C5B0] mt-2 leading-tight"
                    style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
                  >
                    {t('furniture.title')}
                  </h1>
                </div>
              </div>
              <p className="text-[#8B7355] text-lg leading-relaxed mb-10">
                {t('furniture.description')}
              </p>
              <Link
                to={`/contact?${new URLSearchParams({ category: "Furniture" }).toString()}`}
                className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-8 py-4 rounded-full hover:bg-[#D4C5B0] transition-all shadow-xl shadow-[#C4A57B]/20 hover:-translate-y-0.5 duration-300 font-medium"
              >
                <span>{t('common.request_quote')}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Hero mini-gallery: 3 images */}
            <div className="grid grid-cols-2 gap-3 h-[440px]">
              {/* Tall left image */}
              <button
                onClick={() => setLightboxIndex(0)}
                className="group relative rounded-2xl overflow-hidden border border-[#C4A57B]/15 hover:border-[#C4A57B]/40 transition-all duration-300 row-span-2"
              >
                <img src={IMAGES[0]} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </button>
              {/* Top right */}
              <button
                onClick={() => setLightboxIndex(1)}
                className="group relative rounded-2xl overflow-hidden border border-[#C4A57B]/15 hover:border-[#C4A57B]/40 transition-all duration-300"
              >
                <img src={IMAGES[1]} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </button>
              {/* Bottom right */}
              <button
                onClick={() => setLightboxIndex(2)}
                className="group relative rounded-2xl overflow-hidden border border-[#C4A57B]/15 hover:border-[#C4A57B]/40 transition-all duration-300"
              >
                <img src={IMAGES[2]} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full gallery strip */}
      <section className="px-6 lg:px-12 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-3 h-64">
            {IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative rounded-xl overflow-hidden border border-[#C4A57B]/15 hover:border-[#C4A57B]/50 transition-all duration-300"
              >
                <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="size-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                <span className="absolute bottom-2 right-2 text-[#C4A57B]/70 text-xs font-medium bg-[#0A0806]/60 px-2 py-0.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {i + 1}/{IMAGES.length}
                </span>
              </button>
            ))}
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
            <div className="grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <Link
                  key={i}
                  to={`/contact?${new URLSearchParams({ category: "Furniture", subType: f }).toString()}`}
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
                      {f}
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
              to={`/contact?${new URLSearchParams({ category: "Furniture", subType: "All" }).toString()}`}
              className="group flex items-center justify-between mt-3 bg-[#1A120F] rounded-2xl px-6 py-4 border border-dashed border-[#C4A57B]/25 hover:border-[#C4A57B]/50 hover:bg-[#C4A57B]/5 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="size-6 rounded-full bg-[#C4A57B]/10 border border-[#C4A57B]/20 flex items-center justify-center">
                  <MessageCircle className="size-3 text-[#C4A57B]" />
                </div>
                <span className="text-sm text-[#8B7355] group-hover:text-[#C4A57B] transition-colors duration-200">{t('common.enquire_all')}</span>
              </div>
              <ArrowRight className="size-4 text-[#8B7355]/40 group-hover:text-[#C4A57B] group-hover:translate-x-0.5 transition-all duration-200" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-[#2D1F1A] to-[#1A120F] rounded-3xl p-10 border border-[#C4A57B]/15">
            <h2
              className="text-3xl text-[#D4C5B0] mb-6"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
            >
              {t('common.about_product_line')}
            </h2>
            <p className="text-[#8B7355] leading-relaxed text-lg">{t('furniture.details')}</p>
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
            {t('common.custom_cta_title')}
          </h3>
          <p className="text-[#8B7355] text-lg mb-8 max-w-xl mx-auto">
            {t('common.custom_cta_sub')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-2xl shadow-[#C4A57B]/20 duration-300 font-medium text-lg"
          >
            {t('common.get_free_quote')}
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={IMAGES}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
