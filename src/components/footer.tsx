import { Wheat, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-coffee text-cream/80 pt-20 pb-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-coffee">
              <Wheat className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl text-cream">Golden Crust</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream/60 leading-relaxed">
            Handcrafted bread and pastries baked with patience, in small batches, since 2004.
          </p>
        </div>
        {[
          { t: "Quick Links", l: [["Home", "/"], ["About", "/about"], ["Menu", "/menu"], ["Gallery", "/gallery"]] },
          { t: "Services", l: [["Custom Cakes", "/custom-cakes"], ["Wholesale", "#"], ["Catering", "#"], ["Delivery", "#"]] },
          {
            t: "Contact",
            l: [
              ["42 Baker Street", "#"],
              ["Connaught Place, New Delhi", "#"],
              ["+91 98765 43210", "#"],
              ["hello@goldencrust.in", "#"],
            ],
          },
        ].map((col) => (
          <div key={col.t}>
            <div className="font-display text-cream text-lg">{col.t}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {col.l.map(([x, to]) => (
                <li key={x}>
                  <Link to={to} className="hover:text-gold transition-colors">
                    {x}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/50">
        <div>&copy; {new Date().getFullYear()} Golden Crust Bakery. All rights reserved.</div>
        <div className="flex gap-3">
          {[Instagram, Facebook, Twitter].map((I, i) => (
            <a
              key={i}
              href="#"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 hover:bg-gold hover:text-coffee hover:border-transparent transition-colors"
            >
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
