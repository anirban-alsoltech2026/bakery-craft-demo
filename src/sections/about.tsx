import { Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Counter } from "@/components/counter";
import interior from "@/assets/bakery-interior.jpg";

export function About() {
  useReveal();
  return (
    <section className="playful-subpage subpage-pink relative pt-32 pb-28 lg:pt-40 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="subpage-portrait relative aspect-[4/5] overflow-hidden">
            <img
              src={interior}
              alt="Golden Crust bakery interior"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1400}
              height={1600}
            />
          </div>
          <div className="floating-note absolute -bottom-6 -right-6 hidden max-w-[220px] p-6 sm:block">
            <div className="flex items-center gap-2 text-gold">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-sm text-coffee/80 italic">
              "The best croissants I've ever had outside of Paris."
            </p>
            <p className="mt-2 text-xs font-medium text-chocolate">— Emily R.</p>
          </div>
        </div>

        <div className="reveal">
          <span className="section-kicker">Our Story</span>
          <h2 className="playful-heading mt-3">
            Twenty years of <em className="text-[#d9544d] not-italic">slow craft</em> & good bread.
          </h2>
          <p className="mt-6 text-coffee/80 leading-relaxed">
            Golden Crust began in 2004 as a small family kitchen with a single wood-fired oven and a
            stubborn belief: real bread takes time. Three generations later, we still mill our own
            flour, feed the same sourdough starter, and bake every loaf by hand before sunrise.
          </p>
          <p className="mt-4 text-coffee/70 leading-relaxed">
            Every recipe honors tradition — organic ingredients, no shortcuts, no additives — served
            with the warmth of a family table.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { n: 20, s: "+", label: "Years of Experience" },
              { n: 15000, s: "+", label: "Happy Customers" },
              { n: 80, s: "+", label: "Products Daily" },
              { n: 100, s: "%", label: "Fresh Ingredients" },
            ].map((s) => (
              <div key={s.label} className="subpage-stat">
                <div className="font-display text-4xl text-chocolate font-medium">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="text-sm text-coffee/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
