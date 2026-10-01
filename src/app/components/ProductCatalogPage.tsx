import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, MessageCircle, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface ProductVariant {
  image: string;
  color: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brand?: string;
  variants: ProductVariant[];
  description: string;
  specs: string[]; // static specs — color is shown separately and updates with the carousel
}

interface ProductCatalogPageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  contactCategory: string;
  filters?: string[];
  filterKey?: (product: ProductItem) => string;
  products: ProductItem[];
}

function Lightbox({ variants, index, onClose, onNavigate }: {
  variants: ProductVariant[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const total = variants.length;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(isRtl ? (index - 1 + total) % total : (index + 1) % total);
      if (e.key === "ArrowLeft")  onNavigate(isRtl ? (index + 1) % total : (index - 1 + total) % total);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigate, index, total, isRtl]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const goNext = isRtl ? delta > 0 : delta < 0;
    if (Math.abs(delta) > 40) onNavigate(goNext ? (index + 1) % total : (index - 1 + total) % total);
    touchStartX.current = null;
  };

  const active = variants[index];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 size-10 bg-[#1A120F] hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center border border-[#C4A57B]/30 transition-all duration-200 z-10"
        aria-label="Close"
      >
        <X className="size-5" />
      </button>

      {/* Prev */}
      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(isRtl ? (index + 1) % total : (index - 1 + total) % total); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 size-11 bg-[#1A120F]/90 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center border border-[#C4A57B]/30 transition-all duration-200 z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}

      {/* Image */}
      <img
        src={active.image}
        alt={active.color}
        className="max-w-full max-h-[88vh] rounded-2xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(isRtl ? (index - 1 + total) % total : (index + 1) % total); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 size-11 bg-[#1A120F]/90 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center border border-[#C4A57B]/30 transition-all duration-200 z-10"
          aria-label="Next"
        >
          <ChevronRight className="size-5" />
        </button>
      )}

      {/* Counter + color label */}
      {total > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#C4A57B] text-sm font-medium bg-[#0A0806]/70 px-4 py-1.5 rounded-full backdrop-blur-sm">
            {active.color}
          </span>
          <div className="flex gap-2">
            {variants.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); onNavigate(i); }}
                className={`rounded-full transition-all duration-200 ${i === index ? "bg-[#C4A57B] w-5 h-2" : "bg-white/40 w-2 h-2"}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

function ProductCard({ product, contactCategory }: { product: ProductItem; contactCategory: string }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [current, setCurrent] = useState(0);

  const translateSpec = (spec: string) => {
    const key = `flooring.spec_${spec.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
    return t(key, spec);
  };
  const [lightbox, setLightbox] = useState(false);
  const goTo = (i: number) => setCurrent(i);
  const variants = product.variants;
  const total = variants.length;
  const activeVariant = variants[current];

  // Touch swipe — direction flipped in RTL
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const goNext = isRtl ? delta > 0 : delta < 0;
    if (Math.abs(delta) > 40) setCurrent((i) => goNext ? (i + 1) % total : (i - 1 + total) % total);
    touchStartX.current = null;
  };

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((i) => isRtl ? (i + 1) % total : (i - 1 + total) % total); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((i) => isRtl ? (i - 1 + total) % total : (i + 1) % total); };

  return (
    <>
      {lightbox && <Lightbox variants={variants} index={current} onClose={() => setLightbox(false)} onNavigate={goTo} />}

    <div className="group bg-gradient-to-b from-[#1E1410] to-[#0A0806] rounded-2xl overflow-hidden border border-[#C4A57B]/15 hover:border-[#C4A57B]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C4A57B]/8 flex flex-col">

      {/* Image carousel */}
      <div
        className="relative overflow-hidden aspect-[4/3] bg-[#1A120F] cursor-zoom-in"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={() => setLightbox(true)}
      >
        {variants.map((v, i) => (
          <img
            key={i}
            src={v.image}
            alt={i === current ? `${product.name} — ${v.color}` : ""}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Zoom hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-[#0A0806]/50 backdrop-blur-sm rounded-full p-2">
            <ZoomIn className="size-5 text-[#C4A57B]" />
          </div>
        </div>

        {/* Brand badge */}
        {product.brand && (
          <span className="absolute top-4 left-4 bg-[#0A0806]/80 backdrop-blur-sm text-[#C4A57B] text-xs font-medium px-3 py-1.5 rounded-full border border-[#C4A57B]/30 z-10">
            {product.brand}
          </span>
        )}

        {/* Prev / Next */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 size-9 bg-[#0A0806]/80 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-[#C4A57B]/40 z-10"
              aria-label="Previous color"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-9 bg-[#0A0806]/80 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-[#C4A57B]/40 z-10"
              aria-label="Next color"
            >
              <ChevronRight className="size-4" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {variants.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className={`rounded-full transition-all duration-200 ${
                    i === current
                      ? "bg-[#C4A57B] w-5 h-2"
                      : "bg-white/50 w-2 h-2 hover:bg-[#C4A57B]/70"
                  }`}
                  aria-label={`Color ${i + 1}`}
                />
              ))}
            </div>

            {/* Image counter */}
            <span className="absolute top-4 right-4 bg-[#0A0806]/75 backdrop-blur-sm text-[#D4C5B0] text-xs px-2.5 py-1 rounded-full z-10 font-medium">
              {current + 1} / {total}
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-xl text-[#D4C5B0] mb-2 leading-snug"
          style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
        >
          {product.name}
        </h3>

        <p className="text-[#8B7355] text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Color — own fixed-height row, truncated so it never wraps */}
        <div className="flex items-center gap-2 h-7 mb-3">
          <div className="size-2 rounded-full bg-[#C4A57B] flex-shrink-0" />
          <span className="text-sm text-[#C4A57B] font-medium truncate transition-all duration-200">
            {activeVariant.color}
          </span>
        </div>

        {/* Static spec pills — fixed-height container so cards stay uniform */}
        {product.specs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5 min-h-[28px]">
            {product.specs.map((spec) => (
              <span
                key={spec}
                className="text-xs text-[#8B7355] bg-[#2D1F1A] px-3 py-1 rounded-full border border-[#C4A57B]/15 self-start"
              >
                {translateSpec(spec)}
              </span>
            ))}
          </div>
        )}

        {/* Enquire button */}
        <div className="mt-auto">
          <Link
            to={`/contact?${new URLSearchParams({ category: contactCategory, product: `${product.name} — ${activeVariant.color}` }).toString()}`}
            className="flex items-center justify-center gap-2 w-full bg-[#C4A57B]/10 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] border border-[#C4A57B]/30 hover:border-[#C4A57B] px-5 py-3 rounded-xl transition-all duration-300 text-sm font-medium"
          >
            <MessageCircle className="size-4" />
            {t('common.enquire_product')}
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export function ProductCatalogPage({
  icon: Icon,
  title,
  subtitle,
  description,
  contactCategory,
  filters,
  filterKey,
  products,
}: ProductCatalogPageProps) {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const visibleProducts =
    activeFilter === "All" || !filterKey
      ? products
      : products.filter((p) => filterKey(p) === activeFilter);

  const allFilters = filters ? ["All", ...filters] : [];

  return (
    <div className="min-h-screen bg-[#0A0806]">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-[#1A120F] to-[#0A0806]">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={goToProducts}
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#C4A57B] transition-colors text-sm mb-10"
          >
            <ArrowLeft className="size-4" />
            {t('common.back_products')}
          </button>

          <div className="flex items-start gap-6">
            <div className="inline-flex items-center justify-center size-16 bg-[#C4A57B]/10 rounded-2xl border border-[#C4A57B]/20 flex-shrink-0 mt-1">
              <Icon className="size-8 text-[#C4A57B]" />
            </div>
            <div>
              <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
                {subtitle}
              </span>
              <h1
                className="text-4xl lg:text-5xl text-[#D4C5B0] mt-2 mb-4 leading-tight"
                style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
              >
                {title}
              </h1>
              <p className="text-[#8B7355] text-lg leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      {allFilters.length > 1 && (
        <div className="sticky top-24 z-40 bg-[#0A0806]/95 backdrop-blur-md border-b border-[#C4A57B]/10 px-6 lg:px-12 py-4">
          <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <span className="text-[#8B7355] text-sm flex-shrink-0 mr-2">{t('common.filter')}</span>
            {allFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeFilter === f
                    ? "bg-[#C4A57B] text-[#0A0806] border-[#C4A57B]"
                    : "text-[#8B7355] border-[#C4A57B]/20 hover:border-[#C4A57B]/50 hover:text-[#C4A57B]"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="text-[#8B7355]/50 text-sm ml-auto flex-shrink-0">
              {visibleProducts.length} {visibleProducts.length !== 1 ? t('common.products_count_other') : t('common.products_count_one')}
            </span>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {visibleProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} contactCategory={contactCategory} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-[#8B7355]">
              {t('common.no_products')}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2D1F1A] to-[#3E2723] rounded-3xl p-12 text-center border border-[#C4A57B]/20">
          <h3
            className="text-3xl text-[#D4C5B0] mb-4"
            style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
          >
            {t('common.catalog_cta_title')}
          </h3>
          <p className="text-[#8B7355] mb-8 max-w-xl mx-auto">
            {t('common.catalog_cta_sub')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-4 rounded-full hover:bg-[#D4C5B0] transition-all shadow-xl shadow-[#C4A57B]/20 duration-300 font-medium"
          >
            <ArrowRight className="size-4" />
            {t('common.contact_us')}
          </Link>
        </div>
      </section>
    </div>
  );
}
