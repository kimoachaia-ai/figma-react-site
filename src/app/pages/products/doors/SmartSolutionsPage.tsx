import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, ArrowRight, Shuffle, Ruler, Palette, Layers, MessageCircle, ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ImageLightbox } from "../../../components/ImageLightbox";

const IMAGES = [
  "https://lh3.googleusercontent.com/d/1EE2iUaG3m0mdnBfVr53zEMLSEl5J9sqc",
  "https://lh3.googleusercontent.com/d/1ICDzhwh6fcnJi08nPiU135crQgTXz0Ed",
  "https://lh3.googleusercontent.com/d/1_gnQkkmttyRGtxupPrBIZ1jwRWKdtvKq",
  "https://lh3.googleusercontent.com/d/1jhpLu2gRGGl6zWrb7ZKE4RcL0iyMqRHj",
  "https://lh3.googleusercontent.com/d/1nPsoXi9LnsZcKef28tjsCQO49zZljPbE",
];

// English values for URL params
const systemTypeValues = [
  "Folding Doors",
  "Sliding Doors",
  "Hidden / Flush-wall Doors",
  "Pocket Doors",
  "Barn Doors",
];

const systemTypeTranslationKeys = [
  "smartSolutions.folding",
  "smartSolutions.sliding",
  "smartSolutions.hidden",
  "smartSolutions.pocket",
  "smartSolutions.barn",
];

const highlightDefs = [
  { icon: Ruler,   titleKey: "smartSolutions.h1_title", bodyKey: "smartSolutions.h1_body" },
  { icon: Palette, titleKey: "smartSolutions.h2_title", bodyKey: "smartSolutions.h2_body" },
  { icon: Layers,  titleKey: "smartSolutions.h3_title", bodyKey: "smartSolutions.h3_body" },
];


export function SmartSolutionsPage() {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0806]">
      {/* Back */}
      <div className="px-6 lg:px-12 pt-10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/products/doors"
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#C4A57B] transition-colors text-sm"
          >
            <ChevronLeft className="size-4" />
            {t('common.back_doors')}
          </Link>
        </div>
      </div>

      {/* Hero split */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-start gap-5 mb-6">
              <div className="inline-flex items-center justify-center size-14 bg-[#C4A57B]/10 rounded-2xl border border-[#C4A57B]/20 flex-shrink-0 mt-1">
                <Shuffle className="size-7 text-[#C4A57B]" />
              </div>
              <div>
                <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
                  {t('smartSolutions.hero_badge')}
                </span>
                <h1
                  className="text-5xl lg:text-6xl text-[#D4C5B0] mt-2 leading-tight"
                  style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
                >
                  {t('smartSolutions.hero_title')}
                </h1>
              </div>
            </div>
            <p className="text-[#8B7355] text-lg leading-relaxed mb-6">
              {t('smartSolutions.hero_p1')}
            </p>
            <p className="text-[#8B7355] text-lg leading-relaxed mb-10">
              {t('smartSolutions.hero_p2')}
            </p>

            {/* System type cards */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {systemTypeValues.map((val, i) => (
                  <Link
                    key={val}
                    to={`/contact?${new URLSearchParams({ category: "Doors", doorType: "Smart Solutions", product: val }).toString()}`}
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
                        {t(systemTypeTranslationKeys[i])}
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
                to="/contact?category=Doors&doorType=Smart+Solutions"
                className="group flex items-center justify-between bg-[#1A120F] rounded-2xl px-6 py-4 border border-dashed border-[#C4A57B]/25 hover:border-[#C4A57B]/50 hover:bg-[#C4A57B]/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-[#C4A57B]/10 border border-[#C4A57B]/20 flex items-center justify-center">
                    <MessageCircle className="size-3 text-[#C4A57B]" />
                  </div>
                  <span className="text-sm text-[#8B7355] group-hover:text-[#C4A57B] transition-colors duration-200">{t('common.enquire_all_smart')}</span>
                </div>
                <ArrowRight className="size-4 text-[#8B7355]/40 group-hover:text-[#C4A57B] group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            </div>
          </div>

          {/* Hero mini-gallery: 3 images */}
          <div className="grid grid-cols-2 gap-3 h-[520px]">
            <button
              onClick={() => setLightboxIndex(0)}
              className="group relative rounded-2xl overflow-hidden border border-[#C4A57B]/15 hover:border-[#C4A57B]/40 transition-all duration-300 row-span-2"
            >
              <img src={IMAGES[0]} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </button>
            <button
              onClick={() => setLightboxIndex(1)}
              className="group relative rounded-2xl overflow-hidden border border-[#C4A57B]/15 hover:border-[#C4A57B]/40 transition-all duration-300"
            >
              <img src={IMAGES[1]} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </button>
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

      {/* Highlights */}
      <section className="px-6 lg:px-12 py-16 bg-[#1A120F]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl text-[#D4C5B0] mb-12 text-center"
            style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
          >
            {t('smartSolutions.highlights_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlightDefs.map((h) => (
              <div key={h.titleKey} className="bg-[#2D1F1A] rounded-2xl p-8 border border-[#C4A57B]/15">
                <div className="inline-flex items-center justify-center size-12 bg-[#C4A57B]/10 rounded-xl border border-[#C4A57B]/20 mb-5">
                  <h.icon className="size-6 text-[#C4A57B]" />
                </div>
                <h3
                  className="text-xl text-[#D4C5B0] mb-3"
                  style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
                >
                  {t(h.titleKey)}
                </h3>
                <p className="text-[#8B7355] text-sm leading-relaxed">{t(h.bodyKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl lg:text-5xl text-[#D4C5B0] mb-6"
            style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
          >
            {t('smartSolutions.cta_title')}
          </h2>
          <p className="text-[#8B7355] text-lg mb-10 leading-relaxed">
            {t('smartSolutions.cta_sub')}
          </p>
          <Link
            to="/contact?category=Doors&doorType=Smart+Solutions"
            className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-10 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-xl shadow-[#C4A57B]/20 duration-300 font-medium text-lg"
          >
            {t('common.get_quote')}
            <ArrowRight className="size-5" />
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
