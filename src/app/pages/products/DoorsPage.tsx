import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, DoorOpen, Shield, Shuffle, Layers, Paintbrush, Droplets } from "lucide-react";
import { useTranslation } from "react-i18next";

const doorTypeDefs = [
  {
    to: "/products/doors/flush",
    icon: Layers,
    titleKey: "doors.flush_title",
    subtitleKey: "doors.flush_sub",
    descKey: "doors.flush_desc",
    featureKeys: ["doors.flush_feature1", "doors.flush_feature2", "doors.flush_feature3"],
  },
  {
    to: "/products/doors/lacquer",
    icon: Paintbrush,
    titleKey: "doors.lacquer_title",
    subtitleKey: "doors.lacquer_sub",
    descKey: "doors.lacquer_desc",
    featureKeys: ["doors.lacquer_feature1", "doors.lacquer_feature2", "doors.lacquer_feature3"],
  },
  {
    to: "/products/doors/skin",
    icon: DoorOpen,
    titleKey: "doors.skin_title",
    subtitleKey: "doors.skin_sub",
    descKey: "doors.skin_desc",
    featureKeys: ["doors.skin_feature1", "doors.skin_feature2", "doors.skin_feature3"],
  },
  {
    to: "/products/doors/pvc",
    icon: Droplets,
    titleKey: "doors.pvc_title",
    subtitleKey: "doors.pvc_sub",
    descKey: "doors.pvc_desc",
    featureKeys: ["doors.pvc_feature1", "doors.pvc_feature2", "doors.pvc_feature3"],
  },
  {
    to: "/products/doors/smart-solutions",
    icon: Shuffle,
    titleKey: "doors.smart_title",
    subtitleKey: "doors.smart_sub",
    descKey: "doors.smart_desc",
    featureKeys: ["doors.smart_feature1", "doors.smart_feature2", "doors.smart_feature3"],
  },
  {
    to: "/products/doors/steel",
    icon: Shield,
    titleKey: "doors.steel_title",
    subtitleKey: "doors.steel_sub",
    descKey: "doors.steel_desc",
    featureKeys: ["doors.steel_feature1", "doors.steel_feature2", "doors.steel_feature3"],
    highlight: true,
  },
];

export function DoorsPage() {
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
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-[#1A120F] to-[#0A0806]">
        <div className="max-w-7xl mx-auto">
          <button onClick={goToProducts} className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#C4A57B] transition-colors text-sm mb-10">
            <ArrowLeft className="size-4" />
            {t('common.back_products')}
          </button>
          <div className="flex items-start gap-6">
            <div className="inline-flex items-center justify-center size-16 bg-[#C4A57B]/10 rounded-2xl border border-[#C4A57B]/20 flex-shrink-0 mt-1">
              <DoorOpen className="size-8 text-[#C4A57B]" />
            </div>
            <div>
              <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">{t('doors.page_sub')}</span>
              <h1 className="text-4xl lg:text-5xl text-[#D4C5B0] mt-2 mb-4 leading-tight" style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}>
                {t('doors.page_title')}
              </h1>
              <p className="text-[#8B7355] text-lg leading-relaxed max-w-2xl">
                {t('doors.page_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Door type selector */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doorTypeDefs.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className={`group relative flex flex-col p-8 rounded-3xl border transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl ${
                  d.highlight
                    ? "bg-gradient-to-br from-[#1E1410] to-[#0D0A08] border-[#C4A57B]/30 hover:border-[#C4A57B]/60 hover:shadow-[#C4A57B]/10"
                    : "bg-gradient-to-br from-[#2D1F1A] to-[#1A120F] border-[#C4A57B]/15 hover:border-[#C4A57B]/35 hover:shadow-[#C4A57B]/8"
                }`}
              >
                <div className={`inline-flex items-center justify-center size-14 rounded-2xl mb-6 border transition-all duration-400 group-hover:scale-110 ${
                  d.highlight
                    ? "bg-[#C4A57B]/15 border-[#C4A57B]/30 group-hover:bg-[#C4A57B] group-hover:border-[#C4A57B]"
                    : "bg-[#C4A57B]/10 border-[#C4A57B]/20 group-hover:bg-[#C4A57B] group-hover:border-[#C4A57B]"
                }`}>
                  <d.icon className="size-7 text-[#C4A57B] group-hover:text-[#0A0806] transition-colors duration-400" />
                </div>

                <span className="text-[#C4A57B] text-xs tracking-widest uppercase font-medium mb-2">{t(d.subtitleKey)}</span>

                <h2 className="text-2xl text-[#D4C5B0] mb-3" style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}>
                  {t(d.titleKey)}
                </h2>

                <p className="text-[#8B7355] text-sm leading-relaxed mb-6 flex-1">{t(d.descKey)}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {d.featureKeys.map((fk) => (
                    <span key={fk} className="text-xs text-[#8B7355] bg-[#0A0806]/60 px-3 py-1 rounded-full border border-[#C4A57B]/15">
                      {t(fk)}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#C4A57B] text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  <span>{t('doors.browse_collection')}</span>
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
