import { Link } from "react-router";
import { ChevronLeft, ArrowRight, Shuffle, Ruler, Palette, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FoldingDoorsPage() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Ruler,
      title: t('folding_doors.h1_title'),
      body: t('folding_doors.h1_body'),
    },
    {
      icon: Palette,
      title: t('folding_doors.h2_title'),
      body: t('folding_doors.h2_body'),
    },
    {
      icon: Layers,
      title: t('folding_doors.h3_title'),
      body: t('folding_doors.h3_body'),
    },
  ];

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
                  {t('folding_doors.badge')}
                </span>
                <h1
                  className="text-5xl lg:text-6xl text-[#D4C5B0] mt-2 leading-tight"
                  style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
                >
                  {t('folding_doors.title')}
                </h1>
              </div>
            </div>
            <p className="text-[#8B7355] text-lg leading-relaxed mb-8">
              {t('folding_doors.p1')}
            </p>
            <p className="text-[#8B7355] text-lg leading-relaxed">
              {t('folding_doors.p2')}
            </p>
          </div>

          {/* Images stacked */}
          <div className="grid grid-cols-2 gap-4 h-[520px]">
            <div className="rounded-2xl overflow-hidden bg-[#2D1F1A] border border-[#C4A57B]/15 flex items-center justify-center">
              <Shuffle className="size-16 text-[#C4A57B]/20" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex-1 rounded-2xl overflow-hidden bg-[#2D1F1A] border border-[#C4A57B]/15 flex items-center justify-center">
                <Shuffle className="size-10 text-[#C4A57B]/20" />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden bg-[#1A120F] border border-[#C4A57B]/15 flex items-center justify-center">
                <Shuffle className="size-10 text-[#C4A57B]/20" />
              </div>
            </div>
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
            {t('folding_doors.highlights_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="bg-[#2D1F1A] rounded-2xl p-8 border border-[#C4A57B]/15">
                <div className="inline-flex items-center justify-center size-12 bg-[#C4A57B]/10 rounded-xl border border-[#C4A57B]/20 mb-5">
                  <h.icon className="size-6 text-[#C4A57B]" />
                </div>
                <h3
                  className="text-xl text-[#D4C5B0] mb-3"
                  style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
                >
                  {h.title}
                </h3>
                <p className="text-[#8B7355] text-sm leading-relaxed">{h.body}</p>
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
            {t('folding_doors.cta_title')}
          </h2>
          <p className="text-[#8B7355] text-lg mb-10 leading-relaxed">
            {t('folding_doors.cta_sub')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-10 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-xl shadow-[#C4A57B]/20 duration-300 font-medium text-lg"
          >
            {t('folding_doors.cta_btn')}
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
