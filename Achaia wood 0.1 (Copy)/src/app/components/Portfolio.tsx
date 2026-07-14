import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Steel & Wood Door Range",
    category: "Doors",
    image:
      "https://images.unsplash.com/photo-1536160885591-301854e2ed04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b29kZW4lMjBkb29ycyUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc4Mzk0ODYyNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Laminate Flooring",
    category: "Flooring",
    image:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yaW5nJTIwbGFtaW5hdGUlMjBmbG9vcnxlbnwxfHx8fDE3ODM5NDg2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Wood Furniture Collection",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1587006158786-7b79525a2147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnVybml0dXJlJTIwc2hvd3Jvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3ODM5NDg2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Wood And Veneer",
    category: "Wood",
    image:
      "https://images.unsplash.com/photo-1636478910715-0c21e7647590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b29kJTIwcGFuZWxzJTIwcGx5d29vZCUyMGx1bWJlciUyMHdhcmVob3VzZSUyMEVneXB0fGVufDF8fHx8MTc4Mzk0ODYyNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

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
            style={{
              fontFamily: "Cormorant, serif",
              fontWeight: 600,
            }}
          >
            A Glimpse of What We Offer
          </h2>
          <p className="text-[#8B7355] text-lg leading-relaxed">
            From elegant wood doors to Laminated flooring,
            Veneer to finished furniture — explore the range of
            products Achaia Wood has been delivering to Egypt
            since 1950.
          </p>
        </div>

        {/* Portfolio Grid - Masonry Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#C4A57B]/20 transition-all duration-500 border border-[#C4A57B]/10 ${
                index === 0 || index === 5
                  ? "md:row-span-2"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    index === 0 || index === 5
                      ? "h-[700px]"
                      : "h-[450px]"
                  }`}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/95 via-[#0A0806]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sm tracking-wider uppercase text-[#C4A57B] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.category}
                  </span>
                  <h3
                    className="text-3xl mb-3 text-[#D4C5B0]"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#C4A57B] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm">
                      View Project
                    </span>
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 right-6 bg-[#1A120F]/90 backdrop-blur-sm text-[#C4A57B] text-xs px-4 py-2 rounded-full shadow-lg border border-[#C4A57B]/20 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                {item.category}
              </div>
            </div>
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
            <span className="text-lg font-medium">
              Start Your Project
            </span>
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}