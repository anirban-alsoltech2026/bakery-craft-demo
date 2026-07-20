import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import customCake from "@/assets/custom-cake.jpg";

export function CustomCakesSection() {
  useReveal();
  return (
    <section className="relative pt-32 pb-28 lg:pt-40 lg:pb-36 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal order-2 lg:order-1">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            Custom Cakes
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-chocolate leading-tight">
            Design your <em className="text-gold not-italic">dream cake.</em>
          </h2>
          <p className="mt-6 text-coffee/80 leading-relaxed">
            Birthdays, anniversaries, weddings — every custom cake is a conversation. Tell us your
            vision and we'll craft something unforgettable.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch within 24 hours.");
            }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              required
              placeholder="Your name"
              className="rounded-xl bg-cream border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="rounded-xl bg-cream border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <select className="rounded-xl bg-cream border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold sm:col-span-2">
              <option>Occasion — Birthday</option>
              <option>Occasion — Anniversary</option>
              <option>Occasion — Wedding</option>
              <option>Occasion — Corporate</option>
            </select>
            <textarea
              placeholder="Tell us about your cake..."
              rows={4}
              className="sm:col-span-2 rounded-xl bg-cream border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="sm:col-span-2 rounded-full bg-chocolate text-cream px-6 py-3.5 font-semibold hover:bg-coffee transition-colors inline-flex items-center justify-center gap-2">
              Send Inquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="reveal order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src={customCake}
              alt="Custom wedding cake"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1400}
              height={1600}
            />
          </div>
          <div className="absolute -top-4 -left-4 rounded-2xl bg-gold text-coffee px-5 py-3 font-display font-semibold shadow-xl rotate-[-3deg]">
            From ₹3,000
          </div>
        </div>
      </div>
    </section>
  );
}
