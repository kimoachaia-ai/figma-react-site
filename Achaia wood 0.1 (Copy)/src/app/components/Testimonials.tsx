import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    rating: 5,
    text: 'The custom dining table they crafted for our family is absolutely stunning. The attention to detail and quality of craftsmanship exceeded our expectations. It\'s become the heart of our home.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    name: 'David Thompson',
    role: 'Business Owner',
    rating: 5,
    text: 'They transformed our office with beautiful built-in cabinetry and custom desks. Professional service from start to finish. The quality speaks for itself.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    rating: 5,
    text: 'I\'ve worked with many carpenters, and these craftsmen are truly exceptional. Their ability to execute complex designs with precision is remarkable. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Homeowner',
    rating: 5,
    text: 'The custom built-in shelving they created for our living room is both beautiful and functional. They listened to our needs and delivered beyond what we imagined.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
  {
    name: 'Jessica Williams',
    role: 'Restaurant Owner',
    rating: 5,
    text: 'They built all the custom furniture for our restaurant. The craftsmanship is outstanding and has held up beautifully. Our customers constantly compliment the woodwork.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
  },
  {
    name: 'Robert Anderson',
    role: 'Architect',
    rating: 5,
    text: 'Their woodworking expertise and attention to architectural details make them my go-to for custom millwork. They understand design intent and execute flawlessly.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-[#1A120F] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#C4A57B]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[#C4A57B] text-sm tracking-widest uppercase font-medium">Testimonials</span>
          <h2 
            className="text-5xl leading-tight text-[#D4C5B0] mt-4 mb-6"
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}
          >
            Trusted by Hundreds of Satisfied Clients
          </h2>
          <p className="text-[#8B7355] text-lg leading-relaxed">
            Don't just take our word for it. Here's what our clients say about 
            working with us on their custom furniture projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#2D1F1A] to-[#1A120F] rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#C4A57B]/10 transition-all duration-500 border border-[#C4A57B]/15 relative group hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 size-14 bg-[#C4A57B] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Quote className="size-7 text-[#0A0806]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-5 text-[#C4A57B] fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#8B7355] leading-relaxed mb-8 text-[15px]">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#C4A57B]/15">
                <div className="size-14 rounded-full overflow-hidden bg-[#2D1F1A] flex-shrink-0 border border-[#C4A57B]/20">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p 
                    className="text-[#D4C5B0] text-lg mb-0.5"
                    style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#8B7355]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 bg-gradient-to-br from-[#2D1F1A] to-[#3E2723] rounded-3xl p-12 md:p-16 relative overflow-hidden border border-[#C4A57B]/20">
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20 0v40M0 20h40" stroke="%23C4A57B" stroke-width="0.5"/%3E%3C/svg%3E")',
          }} />

          <div className="relative z-10 grid sm:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl mb-3 text-[#C4A57B]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}>
                500+
              </p>
              <p className="text-[#8B7355]">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl mb-3 text-[#C4A57B]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}>
                5.0
              </p>
              <p className="text-[#8B7355]">Average Rating</p>
            </div>
            <div>
              <p className="text-5xl mb-3 text-[#C4A57B]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}>
                95%
              </p>
              <p className="text-[#8B7355]">Repeat Customers</p>
            </div>
            <div>
              <p className="text-5xl mb-3 text-[#C4A57B]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}>
                25
              </p>
              <p className="text-[#8B7355]">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
