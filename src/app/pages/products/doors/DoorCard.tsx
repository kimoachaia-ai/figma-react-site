import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, DoorOpen, MessageCircle, X, ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface DoorVariant {
  image: string;
  color: string;
}

export interface DoorProduct {
  id: string;
  name: string;
  tag?: string;
  variants: DoorVariant[];
  description: string;
  specs: string[];
  veneerOptions?: string[];
}

function PlaceholderImg({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#2D1F1A] flex flex-col items-center justify-center gap-2">
      <DoorOpen className="size-10 text-[#C4A57B]/30" />
      <span className="text-[#8B7355]/60 text-xs text-center px-4">{label}</span>
    </div>
  );
}

// ── Expanded modal ─────────────────────────────────────────────────────────

function DoorModal({ product, index, onClose, onNavigate }: {
  product: DoorProduct;
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const total = product.variants.length;
  const active = product.variants[index];
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && total > 1) onNavigate(isRtl ? (index - 1 + total) % total : (index + 1) % total);
      if (e.key === "ArrowLeft"  && total > 1) onNavigate(isRtl ? (index + 1) % total : (index - 1 + total) % total);
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
    if (touchStartX.current === null || total <= 1) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const goNext = isRtl ? delta > 0 : delta < 0;
    if (Math.abs(delta) > 40) onNavigate(goNext ? (index + 1) % total : (index - 1 + total) % total);
    touchStartX.current = null;
  };

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
      >
        <X className="size-5" />
      </button>

      {/* Prev (left in LTR, right in RTL) */}
      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(isRtl ? (index + 1) % total : (index - 1 + total) % total); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 size-11 bg-[#1A120F]/90 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center border border-[#C4A57B]/30 transition-all duration-200 z-10"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}

      {/* Image */}
      {active.image ? (
        <img
          src={active.image}
          alt={product.name}
          className="max-w-full max-h-[88vh] rounded-2xl shadow-2xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <div className="w-80 h-[480px] rounded-2xl bg-[#2D1F1A] border border-[#C4A57B]/15 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <PlaceholderImg label={product.name} />
        </div>
      )}

      {/* Next (right in LTR, left in RTL) */}
      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(isRtl ? (index - 1 + total) % total : (index + 1) % total); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 size-11 bg-[#1A120F]/90 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center border border-[#C4A57B]/30 transition-all duration-200 z-10"
        >
          <ChevronRight className="size-5" />
        </button>
      )}

      {/* Dots + counter */}
      {total > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#C4A57B] text-sm font-medium bg-[#0A0806]/70 px-4 py-1.5 rounded-full backdrop-blur-sm">
            {index + 1} / {total}
          </span>
          <div className="flex gap-2">
            {product.variants.map((_, i) => (
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

// ── Card ───────────────────────────────────────────────────────────────────

export function DoorCard({ product, doorType }: { product: DoorProduct; doorType?: string }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [current, setCurrent] = useState(0);

  const translateDoorName = (name: string) => {
    const match = name.match(/^(.+?)\s+(\d+)$/);
    if (!match) return name;
    const [, prefix, num] = match;
    const key = `doors.name_${prefix.toLowerCase().replace(/\s+/g, '_')}`;
    return `${t(key, prefix)} ${num}`;
  };
  const [expanded, setExpanded] = useState(false);
  const [selectedVeneer, setSelectedVeneer] = useState(product.veneerOptions?.[0] ?? null);
  const variants = product.variants;
  const total = variants.length;

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || total <= 1) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const goNext = isRtl ? delta > 0 : delta < 0;
    if (Math.abs(delta) > 40) setCurrent((i) => goNext ? (i + 1) % total : (i - 1 + total) % total);
    touchStartX.current = null;
  };

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((i) => isRtl ? (i + 1) % total : (i - 1 + total) % total); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((i) => isRtl ? (i - 1 + total) % total : (i + 1) % total); };

  const enquireUrl = (() => {
    const params = new URLSearchParams({ category: "Doors" });
    if (doorType) params.set("doorType", doorType);
    if (selectedVeneer) params.set("veneer", selectedVeneer);
    params.set("product", product.name);
    return `/contact?${params.toString()}`;
  })();

  return (
    <>
      {expanded && (
        <DoorModal
          product={product}
          index={current}
          onClose={() => setExpanded(false)}
          onNavigate={setCurrent}
        />
      )}

      <div className="group bg-gradient-to-b from-[#1E1410] to-[#0A0806] rounded-2xl overflow-hidden border border-[#C4A57B]/15 hover:border-[#C4A57B]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C4A57B]/8 flex flex-col">

        {/* Image area */}
        <div
          className="relative overflow-hidden aspect-[3/4] bg-[#1A120F] cursor-pointer"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={() => setExpanded(true)}
        >
          {variants.map((v, i) =>
            v.image ? (
              <img
                key={i}
                src={v.image}
                alt={i === current ? product.name : ""}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              />
            ) : (
              <div key={i} className={`absolute inset-0 transition-opacity duration-300 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <PlaceholderImg label={product.name} />
              </div>
            )
          )}

          {/* Expand hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-[#0A0806]/50 backdrop-blur-sm rounded-full p-2">
              <ZoomIn className="size-5 text-[#C4A57B]" />
            </div>
          </div>

          {/* Tag */}
          {product.tag && (
            <span className="absolute top-4 left-4 bg-[#0A0806]/80 backdrop-blur-sm text-[#C4A57B] text-xs font-medium px-3 py-1.5 rounded-full border border-[#C4A57B]/30 z-10">
              {t(`doors.tag_${product.tag.toLowerCase()}`, product.tag)}
            </span>
          )}

          {/* Prev / Next */}
          {total > 1 && (
            <>
              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 size-9 bg-[#0A0806]/80 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-[#C4A57B]/40 z-10">
                <ChevronLeft className="size-4" />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 size-9 bg-[#0A0806]/80 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-[#C4A57B]/40 z-10">
                <ChevronRight className="size-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {variants.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                    className={`rounded-full transition-all duration-200 ${i === current ? "bg-[#C4A57B] w-5 h-2" : "bg-white/50 w-2 h-2"}`}
                  />
                ))}
              </div>
              <span className="absolute top-4 right-4 bg-[#0A0806]/75 backdrop-blur-sm text-[#D4C5B0] text-xs px-2.5 py-1 rounded-full z-10 font-medium">
                {current + 1} / {total}
              </span>
            </>
          )}
        </div>

        {/* Card footer */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3
            className="text-lg text-[#D4C5B0] leading-snug"
            style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
          >
            {translateDoorName(product.name)}
          </h3>

          {product.specs.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.specs.map((spec) => {
                const specKey = `doors.spec_${spec.toLowerCase().replace(/[\s-]+/g, '_')}`;
                return (
                  <span key={spec} className="text-xs text-[#8B7355] bg-[#2D1F1A] px-3 py-1 rounded-full border border-[#C4A57B]/15">
                    {t(specKey, spec)}
                  </span>
                );
              })}
            </div>
          )}

          {product.veneerOptions && product.veneerOptions.length > 0 && (
            <div className="mt-auto">
              <p className="text-[#8B7355]/70 text-xs uppercase tracking-widest mb-2">{t('common.veneer_label')}</p>
              <div className="flex rounded-xl overflow-hidden border border-[#C4A57B]/20 bg-[#0A0806]/40">
                {product.veneerOptions.map((opt) => {
                  const veneerKey = `doors.veneer_${opt.toLowerCase().replace(/\s+/g, '_')}`;
                  return (
                    <button
                      key={opt}
                      onClick={() => setSelectedVeneer(opt)}
                      className={`flex-1 py-2.5 text-sm font-medium transition-all duration-200 ${
                        selectedVeneer === opt
                          ? "bg-[#C4A57B] text-[#0A0806]"
                          : "text-[#8B7355] hover:text-[#C4A57B] hover:bg-[#C4A57B]/8"
                      }`}
                    >
                      {t(veneerKey, opt)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className={product.veneerOptions ? "pt-1" : "mt-auto pt-1"}>
            <Link
              to={enquireUrl}
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

// ── Grid + filter ──────────────────────────────────────────────────────────

export function DoorGrid({ products, filters, filterKey, doorType }: {
  products: DoorProduct[];
  filters?: string[];
  filterKey?: (p: DoorProduct) => string;
  doorType?: string;
}) {
  const { t } = useTranslation();
  const [active, setActive] = useState("All");
  const allFilters = filters ? ["All", ...filters] : [];
  const visible = active === "All" || !filterKey ? products : products.filter((p) => filterKey(p) === active);

  const filterLabel = (f: string) => {
    if (f === "All") return t('common.all');
    return t(`doors.tag_${f.toLowerCase()}`, f);
  };

  return (
    <div>
      {allFilters.length > 1 && (
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <span className="text-[#8B7355] text-sm">{t('common.filter')}</span>
          {allFilters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${active === f ? "bg-[#C4A57B] text-[#0A0806] border-[#C4A57B]" : "text-[#8B7355] border-[#C4A57B]/20 hover:border-[#C4A57B]/50 hover:text-[#C4A57B]"}`}
            >
              {filterLabel(f)}
            </button>
          ))}
          <span className="text-[#8B7355]/50 text-sm ml-auto">{visible.length} {visible.length !== 1 ? t('doors.design_other') : t('doors.design_one')}</span>
        </div>
      )}
      {visible.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((p) => <DoorCard key={p.id} product={p} doorType={doorType} />)}
        </div>
      ) : (
        <div className="text-center py-16 text-[#8B7355]">{t('doors.no_designs')}</div>
      )}
    </div>
  );
}

// ── Page shell ─────────────────────────────────────────────────────────────

export function DoorPageShell({ title, subtitle, description, icon: Icon, doorType, children }: {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  doorType?: string;
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0A0806]">
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-[#1A120F] to-[#0A0806]">
        <div className="max-w-7xl mx-auto">
          <Link to="/products/doors" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#C4A57B] transition-colors text-sm mb-10">
            <ChevronLeft className="size-4" />
            {t('common.back_doors')}
          </Link>
          <div className="flex items-start gap-6">
            <div className="inline-flex items-center justify-center size-16 bg-[#C4A57B]/10 rounded-2xl border border-[#C4A57B]/20 flex-shrink-0 mt-1">
              <Icon className="size-8 text-[#C4A57B]" />
            </div>
            <div>
              <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">{subtitle}</span>
              <h1 className="text-4xl lg:text-5xl text-[#D4C5B0] mt-2 mb-4 leading-tight" style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}>
                {title}
              </h1>
              <p className="text-[#8B7355] text-lg leading-relaxed max-w-2xl">{description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">{children}</div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2D1F1A] to-[#3E2723] rounded-3xl p-12 text-center border border-[#C4A57B]/20">
          <h3 className="text-3xl text-[#D4C5B0] mb-4" style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}>
            {t('doors.shell_cta_title')}
          </h3>
          <p className="text-[#8B7355] mb-8 max-w-xl mx-auto">
            {t('doors.shell_cta_sub')}
          </p>
          <Link
            to={`/contact?category=Doors${doorType ? `&doorType=${encodeURIComponent(doorType)}` : ""}`}
            className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-4 rounded-full hover:bg-[#D4C5B0] transition-all shadow-xl shadow-[#C4A57B]/20 duration-300 font-medium"
          >
            {t('common.contact_us')}
          </Link>
        </div>
      </section>
    </div>
  );
}
