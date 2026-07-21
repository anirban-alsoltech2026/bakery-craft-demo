import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function ContactSection() {
  useReveal();
  return (
    <section className="playful-subpage subpage-mint pt-32 pb-28 lg:pt-40 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="reveal">
          <span className="section-kicker">Visit Us</span>
          <h2 className="playful-heading mt-3">Come say hello.</h2>
          <p className="mt-4 text-coffee/70 max-w-md">
            The kettle's on, the ovens are warm. We'd love to meet you.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { i: MapPin, t: "42, Baker Street, Connaught Place, New Delhi – 110001" },
              { i: Phone, t: "+91 98765 43210" },
              { i: Mail, t: "hello@goldencrust.in" },
              { i: Clock, t: "Tue–Sun · 7:00 – 19:00 · Closed Mondays" },
            ].map((row, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="contact-icon">
                  <row.i className="h-4 w-4" />
                </div>
                <div className="pt-2 text-coffee">{row.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            {[Instagram, Facebook, Twitter].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid h-11 w-11 place-items-center rounded-full bg-chocolate text-cream hover:bg-gold hover:text-coffee transition-colors"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="playful-map relative mt-10 grid aspect-[16/9] place-items-center overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#eed9c4_25%,transparent_25%,transparent_75%,#eed9c4_75%),linear-gradient(45deg,#eed9c4_25%,transparent_25%,transparent_75%,#eed9c4_75%)] bg-[length:24px_24px] bg-[position:0_0,12px_12px] opacity-40" />
            <div className="relative text-center text-coffee/70">
              <MapPin className="h-8 w-8 mx-auto text-gold" />
              <div className="mt-2 text-sm">Google Maps embed</div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — we'll reply soon!");
          }}
          className="playful-contact-card reveal h-fit p-8 sm:p-10"
        >
          <h3 className="font-display text-2xl text-chocolate">Send a message</h3>
          <div className="playful-form mt-6 grid gap-4">
            <input required placeholder="Full name" className="playful-input" />
            <input required type="email" placeholder="Email" className="playful-input" />
            <input placeholder="Subject" className="playful-input" />
            <textarea rows={5} placeholder="Your message" className="playful-input" />
            <button className="playful-button playful-button-dark">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
