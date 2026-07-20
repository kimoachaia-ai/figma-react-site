import {
  DoorOpen,
  Layers,
  FlipHorizontal,
  Armchair,
  Settings2,
} from "lucide-react";
import { Link } from "react-router";

const products = [
  {
    icon: DoorOpen,
    title: "Doors",
    to: "/products/doors",
    description:
      "A complete range of interior and exterior doors combining beauty with lasting durability — from classic wood to modern steel options.",
    features: [
      "Skin Doors",
      "Flush Doors",
      "Laminated Doors",
      "Steel Doors",
      "Turkish Steel Wood Doors",
    ],
  },
  {
    icon: Layers,
    title: "Wood Panels & Materials",
    to: "/products/wood-panels",
    description:
      "Premium engineered and natural wood panels for construction, furniture making, and interior finishing projects of all scales.",
    features: [
      "Block Board",
      "Plywood",
      "MDF",
      "Melamine",
      "Formica / HPL",
    ],
  },
  {
    icon: FlipHorizontal,
    title: "Lumber & Veneer",
    to: "/products/lumber-veneer",
    description:
      "Solid lumber and logs sourced globally, alongside high-quality natural and engineered veneer with edge banding solutions.",
    features: [
      "Lumber",
      "Natural Veneer",
      "Engineered Veneer",
      "Edge Banding",
    ],
  },
  {
    icon: Layers,
    title: "Flooring",
    to: "/products/flooring",
    description:
      "Distributor of Turkish laminate flooring (HDF) — offering a wide collection of styles and grades.",
    features: ["AGT", "TerraClick", "VarioClick"],
  },
  {
    icon: Armchair,
    title: "Furniture",
    to: "/products/furniture",
    description:
      "Quality furniture sourced and crafted to complement our wood and flooring collections — for homes, offices, and commercial spaces.",
    features: [
      "Kitchens",
      "Dressing Rooms",
      "Cabinets",
      "TV Units",
    ],
  },
  {
    icon: Settings2,
    title: "Custom Manufacturing",
    to: "/products/custom",
    description:
      "With our own factory, we can produce fully customized wood products built to your exact specifications — any design, dimension, or finish.",
    features: [
      "Made-to-order",
      "Custom dimensions & cuts",
      "Choose your finishes & veneers",
      "Bulk production capacity",
    ],
  },
];

export function Services() {
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
            What We Offer
          </span>
          <h2
            className="text-5xl leading-tight text-[#D4C5B0] mt-4 mb-6"
            style={{
              fontFamily: "Cormorant, serif",
              fontWeight: 600,
            }}
          >
            Our Product Lines
          </h2>
          <p className="text-[#8B7355] text-lg leading-relaxed">
            From raw timber to finished floors, Achaia Wood
            supplies everything your project needs — backed by
            75 years of expertise in the Egyptian market.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
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
                {product.title}
              </h3>

              <p className="text-[#8B7355] mb-6 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
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
          ))}
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
              Need a Custom Order or Bulk Supply?
            </h3>
            <p className="text-[#8B7355] text-lg mb-8 max-w-2xl mx-auto">
              Whether you are a contractor, designer, or
              retailer, we can meet your volume and
              specification requirements. Contact us for a
              tailored quote.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-2xl shadow-[#C4A57B]/20 duration-300"
            >
              <span className="text-lg font-medium">
                Get a Free Quote
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}