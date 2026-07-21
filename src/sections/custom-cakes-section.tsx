import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import customCake from "@/assets/custom-cake.jpg";

export function CustomCakesSection() {
  useReveal();
  return (
    <section className="playful-subpage subpage-yellow relative pt-32 pb-28 lg:pt-40 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal order-2 lg:order-1">
          <span className="section-kicker">Custom Cakes</span>
          <h2 className="playful-heading mt-3">
            Design your <em className="text-[#d9544d] not-italic">dream cake.</em>
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
            className="playful-form mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <input required placeholder="Your name" className="playful-input" />
            <input required type="email" placeholder="Email" className="playful-input" />
            <select className="playful-input sm:col-span-2">
              <option>Occasion — Birthday</option>
              <option>Occasion — Anniversary</option>
              <option>Occasion — Wedding</option>
              <option>Occasion — Corporate</option>
            </select>
            <textarea
              placeholder="Tell us about your cake..."
              rows={4}
              className="playful-input sm:col-span-2"
            />
            <button className="playful-button playful-button-dark sm:col-span-2">
              Send Inquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="reveal order-1 lg:order-2 relative">
          <div className="subpage-portrait relative aspect-[4/5] overflow-hidden">
            <img
              src={customCake}
              alt="Custom wedding cake"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1400}
              height={1600}
            />
          </div>
          <div className="floating-price absolute -left-4 -top-4 rotate-[-3deg]">From ₹3,000</div>
        </div>
      </div>
    </section>
  );
}
