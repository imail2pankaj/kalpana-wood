import { Sparkles, Layers, CircleDollarSign, Clock, Award, MapPin, Star } from "lucide-react";

const reasons = [
  {
    id: "custom-design",
    icon: Sparkles,
    title: "100% Custom Design",
    description: "Every piece is built from scratch based on your dimensions, style preferences, and space requirements. No catalogue limitations.",
  },
  {
    id: "premium-wood",
    icon: Layers,
    title: "Premium Quality Wood",
    description: "We use only the finest grade teak, sheesham, and hardwoods — sourced for durability, grain beauty, and resistance to warping.",
  },
  {
    id: "fair-pricing",
    icon: CircleDollarSign,
    title: "Honest & Fair Pricing",
    description: "Transparent pricing with no hidden costs. We provide a clear quote before work begins and stick to it.",
  },
  {
    id: "timely-delivery",
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and schedule. Every project comes with a clear timeline that we commit to and deliver on.",
  },
  {
    id: "experienced-craftsmen",
    icon: Award,
    title: "Skilled Craftsmen",
    description: "15+ years of woodworking mastery under Kalpesh M. Makwana's personal supervision. Every joint, every finish — done right.",
  },
  {
    id: "local-trust",
    icon: MapPin,
    title: "Trusted in Morbi & Gujarat",
    description: "Over 2000 satisfied customers across Morbi and Gujarat trust us for their home and commercial furniture needs.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#fdf8f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="wood-divider" />
            <span className="text-[#c97d20] text-xs font-inter font-semibold tracking-[0.18em] uppercase">
              Why Choose Us
            </span>
            <div className="wood-divider" />
          </div>
          <h2
            className="font-playfair font-bold text-[#351706] mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            The Kalpana Wood{" "}
            <span className="text-[#c97d20] italic">Difference</span>
          </h2>
          <p className="text-[#5e3115]/70 font-inter max-w-2xl mx-auto leading-relaxed">
            When you choose Kalpana Wood, you choose decades of expertise,
            uncompromising quality, and furniture that truly lasts a lifetime.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              id={`why-${id}`}
              className="reveal group bg-white rounded-2xl p-7 border border-[#e8bb6e]/20 shadow-sm hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c97d20]/15 to-[#c97d20]/5 text-[#c97d20] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-playfair font-semibold text-[#351706] text-lg mb-3">{title}</h3>
              <p className="text-[#5e3115]/65 font-inter text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 reveal bg-gradient-to-r from-[#351706] via-[#5e3115] to-[#351706] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #c97d20 0%, transparent 50%), radial-gradient(circle at 80% 50%, #e8bb6e 0%, transparent 50%)",
            }}
          />

          {/* Large decorative quote */}
          <div className="text-[#c97d20]/40 text-[6rem] font-playfair leading-none mb-2 relative z-10 select-none">
            &ldquo;
          </div>

          <p className="font-playfair italic text-white text-xl sm:text-2xl leading-relaxed mb-6 relative z-10 max-w-3xl mx-auto -mt-10">
            Kalpesh bhai made our complete bedroom set exactly as we wanted.
            Quality is outstanding and the price was very reasonable. Highly
            recommended to everyone in Morbi!
          </p>

          <div className="flex items-center justify-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-[#c97d20] flex items-center justify-center font-playfair font-bold text-white">
              R
            </div>
            <div className="text-left">
              <div className="text-[#e8bb6e] font-inter font-semibold text-sm">Rajesh Patel</div>
              <div className="text-white/50 font-inter text-xs">Satisfied Customer, Morbi</div>
            </div>
            <div className="flex gap-1 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#e8bb6e] fill-[#e8bb6e]" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
