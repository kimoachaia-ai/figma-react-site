import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import flooringImg from "../../imports/parquet_home_page_me.png";
import kitchenImg from "../../imports/ChatGPT_Image_Jun_17__2026__01_19_10_PM.png";
import veneerImg from "../../imports/veneer_sheets.jpg";

const featuredItem = {
  title: "Laminate Flooring",
  category: "Flooring",
  to: "/products/flooring",
  image: flooringImg,
};

const gridItems = [
  {
    title: "Steel & Wood Door Range",
    category: "Doors",
    to: "/products/doors",
    image:
      "https://images.unsplash.com/photo-1536160885591-301854e2ed04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b29kZW4lMjBkb29ycyUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc4Mzk0ODYyNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Custom Kitchens & Cabinetry",
    category: "Furniture",
    to: "/products/furniture",
    image: kitchenImg,
  },
  {
    title: "Wood & Veneer",
    category: "Lumber & Veneer",
    to: "/products/lumber-veneer",
    image: veneerImg,
  },
];

function CardOverlay({ category, title }: { category: string; title: string }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/95 via-[#0A0806]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-sm tracking-wider uppercase text-[#C4A57B] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {category}
          </span>
          <h3
            className="text-3xl mb-3 text-[#D4C5B0]"
            style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
          >
            {title}
          </h3>
          <div className="flex items-center gap-2 text-[#C4A57B] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-sm">View Products</span>
            <ArrowUpRight className="size-5" />
          </div>
        </div>
      </div>
      <div className="absolute top-6 right-6 bg-[#1A120F]/90 backdrop-blur-sm text-[#C4A57B] text-xs px-4 py-2 rounded-full shadow-lg border border-[#C4A57B]/20 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
        {category}
      </div>
    </>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0806] to-[#1A120F] relative"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">
            Product Gallery
          </span>
          <h2
            className="text-5xl leading-tight text-[#D4C5B0] mt-4 mb-6"
            style={{ fontFamily: "Cormorant, serif", fontWeight: 600 }}
          >
            A Glimpse of What We Offer
          </h2>
          <p className="text-[#8B7355] text-lg leading-relaxed">
            From elegant wood doors to laminate flooring, veneer to finished
            kitchens — explore the range Achaia Wood has delivered since 1950.
          </p>
        </div>

        {/* Featured card — full width */}
        <Link
          to={featuredItem.to}
          className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#C4A57B]/20 transition-all duration-500 border border-[#C4A57B]/10 block mb-8"
        >
          <ImageWithFallback
            src={featuredItem.image}
            alt={featuredItem.title}
            className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <CardOverlay category={featuredItem.category} title={featuredItem.title} />
        </Link>

        {/* 3-column grid below */}
        <div className="grid md:grid-cols-3 gap-8">
          {gridItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#C4A57B]/20 transition-all duration-500 border border-[#C4A57B]/10"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-[380px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <CardOverlay category={item.category} title={item.title} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#8B7355] mb-6 text-lg">
            Ready to bring your vision to life?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#C4A57B] text-[#0A0806] px-9 py-5 rounded-full hover:bg-[#D4C5B0] transition-all shadow-2xl shadow-[#C4A57B]/10 hover:shadow-[#C4A57B]/20 hover:-translate-y-1 duration-300"
          >
            <span className="text-lg font-medium">Start Your Project</span>
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
