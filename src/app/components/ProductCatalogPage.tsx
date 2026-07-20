import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
  filters?: string[];
  filterKey?: (product: ProductItem) => string;
  products: ProductItem[];
}

function ProductCard({ product }: { product: ProductItem }) {
  const [current, setCurrent] = useState(0);
  const variants = product.variants;
  const total = variants.length;
  const activeVariant = variants[current];

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((i) => (i - 1 + total) % total);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((i) => (i + 1) % total);
  };

  return (
    <div className="group bg-gradient-to-b from-[#1E1410] to-[#0A0806] rounded-2xl overflow-hidden border border-[#C4A57B]/15 hover:border-[#C4A57B]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C4A57B]/8 flex flex-col">

      {/* Image carousel — all images rendered and stacked, only active one visible */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#1A120F]">
        {variants.map((v, i) => (
          <img
            key={i}
            src={v.image}
            alt={i === current ? `${product.name} — ${v.color}` : ""}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Brand badge */}
        {product.brand && (
          <span className="absolute top-4 left-4 bg-[#0A0806]/80 backdrop-blur-sm text-[#C4A57B] text-xs font-medium px-3 py-1.5 rounded-full border border-[#C4A57B]/30 z-10">
            {product.brand}
          </span>
        )}

        {/* Prev / Next — only shown when multiple variants */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 size-8 bg-[#0A0806]/70 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-[#C4A57B]/20"
              aria-label="Previous color"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-8 bg-[#0A0806]/70 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-[#C4A57B]/20"
              aria-label="Next color"
            >
              <ChevronRight className="size-4" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {variants.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                  className={`rounded-full transition-all duration-200 ${
                    i === current
                      ? "bg-[#C4A57B] w-4 h-1.5"
                      : "bg-[#C4A57B]/40 w-1.5 h-1.5"
                  }`}
                  aria-label={`Color ${i + 1}`}
                />
              ))}
            </div>

            {/* Image counter */}
            <span className="absolute top-4 right-4 bg-[#0A0806]/70 backdrop-blur-sm text-[#8B7355] text-xs px-2 py-1 rounded-full">
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
                {spec}
              </span>
            ))}
          </div>
        )}

        {/* Enquire button */}
        <div className="mt-auto">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 w-full bg-[#C4A57B]/10 hover:bg-[#C4A57B] text-[#C4A57B] hover:text-[#0A0806] border border-[#C4A57B]/30 hover:border-[#C4A57B] px-5 py-3 rounded-xl transition-all duration-300 text-sm font-medium"
          >
            <MessageCircle className="size-4" />
            Enquire About This Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProductCatalogPage({
  icon: Icon,
  title,
  subtitle,
  description,
  filters,
  filterKey,
  products,
}: ProductCatalogPageProps) {
  const [activeFilter, setActiveFilter] = useState("All");

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
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#C4A57B] transition-colors text-sm mb-10"
          >
            <ArrowLeft className="size-4" />
            Back to Products
          </Link>

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
            <span className="text-[#8B7355] text-sm flex-shrink-0 mr-2">Filter:</span>
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
              {visibleProducts.length} product{visibleProducts.length !== 1 ? "s" : ""}
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-[#8B7355]">
              No products found for this filter.
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
            Need Help Choosing or a Bulk Quote?
          </h3>
          <p className="text-[#8B7355] mb-8 max-w-xl mx-auto">
            Our team can help you find the right product for your project and provide pricing for any quantity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-4 rounded-full hover:bg-[#D4C5B0] transition-all shadow-xl shadow-[#C4A57B]/20 duration-300 font-medium"
          >
            <ArrowRight className="size-4" />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
