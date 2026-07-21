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
          <div className="playful-map relative mt-10 aspect-[16/9] overflow-hidden">
            <iframe
              title="Alsol Technology Solution location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.20868280687!2d88.43091629999999!3d22.577151999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ed5e5b4e83%3A0xa3d163cd4913eb0b!2sAlsol%20Technology%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1784641484912!5m2!1sen!2sin"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
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
