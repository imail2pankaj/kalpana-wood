import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "bedroom-set",
    title: "Bedroom Sets",
    description: "Complete custom bedroom furniture — beds, wardrobes, dressing units, and side tables crafted from premium hardwood.",
    image: "/product_bedroom.png",
    tag: "Most Popular",
    tagColor: "bg-[#c97d20]",
    waText: "Bedroom Set",
  },
  {
    id: "dining-set",
    title: "Dining Tables & Chairs",
    description: "Solid wood dining sets for every family size. From 4-seater to 12-seater, custom dimensions available.",
    image: "/product_dining.png",
    tag: "Premium",
    tagColor: "bg-[#8f4a16]",
    waText: "Dining Table Set",
  },
  {
    id: "wardrobe",
    title: "Wardrobes & Almirahs",
    description: "Custom-designed wardrobes with sliding or hinged doors, internal shelving, mirror panels and more.",
    image: "/product_wardrobe.png",
    tag: "Custom",
    tagColor: "bg-[#5e3115]",
    waText: "Wardrobe",
  },
  {
    id: "sofa-set",
    title: "Sofa & Drawing Room Sets",
    description: "Hand-carved wooden sofa frames with your choice of fabric. Traditional to contemporary styles available.",
    image: "/product_sofa.png",
    tag: "Artisan",
    tagColor: "bg-[#743b16]",
    waText: "Sofa Set",
  },
  {
    id: "wooden-doors",
    title: "Wooden Doors & Windows",
    description: "Solid teak and hardwood doors with intricate carved panel designs. Built for longevity and elegance.",
    image: "/product_door.png",
    tag: "Heritage",
    tagColor: "bg-[#b06318]",
    waText: "Wooden Door",
  },
  {
    id: "wood-articles",
    title: "Wood Working Articles",
    description: "Decorative wooden items, custom cabinets, shelves, TV units, pooja units, and all kinds of wood-based articles.",
    image: "/furniture_collection.png",
    tag: "Specialty",
    tagColor: "bg-[#c97d20]",
    waText: "Wood Working Articles",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#1a0f08] overflow-hidden relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c97d20 0, #c97d20 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="wood-divider" />
            <span className="text-[#c97d20] text-xs font-inter font-semibold tracking-[0.18em] uppercase">
              What We Make
            </span>
            <div className="wood-divider" />
          </div>
          <h2
            className="font-playfair font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            Wood Working Articles &{" "}
            <span className="shimmer-text">All Kind Of Furniture</span>
          </h2>
          <p className="text-white/60 font-inter max-w-2xl mx-auto leading-relaxed">
            From a single decorative piece to complete home furnishing — every
            item is handcrafted with care, quality materials, and your exact
            requirements in mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              id={`service-${product.id}`}
              className="reveal service-card group bg-[#2c1a0e]/60 border border-white/5 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/80 to-transparent" />
                <div className={`absolute top-4 left-4 ${product.tagColor} text-white text-[10px] font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>
                  {product.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-playfair font-semibold text-white text-lg mb-2 group-hover:text-[#e8bb6e] transition-colors">
                  {product.title}
                </h3>
                <p className="text-white/55 font-inter text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <a
                  href={`http://wa.me/9879254882?text=I'm interested in ${encodeURIComponent(product.waText)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#e8bb6e] text-sm font-inter font-semibold hover:gap-3 transition-all duration-200"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-white/50 font-inter text-sm mb-5">
            Don't see what you need? We build anything in wood.
          </p>
          <a
            href="http://wa.me/9879254882?text=I%20want%20to%20make%20custom%20furniture"
            target="_blank" rel="noopener noreferrer"
            id="services-custom-cta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#c97d20] to-[#8f4a16] text-white font-inter font-semibold shadow-lg shadow-amber-900/40 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Request Custom Order
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
