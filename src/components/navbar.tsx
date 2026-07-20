import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ShoppingBag, Search, Menu as MenuIcon, X, Wheat, ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/cart-context";

const links: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Menu", "/menu"],
  ["Gallery", "/gallery"],
  ["Custom Cakes", "/custom-cakes"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-chocolate/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-chocolate text-cream">
            <Wheat className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-chocolate">
            Golden Crust
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([l, h]) => (
            <Link
              key={l}
              to={h}
              className="text-sm font-medium text-yellow-600 hover:text-yellow-400 transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-chocolate/5 text-yellow-600 hover:text-yellow-400 transition-colors">
            <Search className="h-4 w-4" />
          </button>
          <button onClick={openCart} className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-chocolate/5 text-yellow-600 hover:text-yellow-400 transition-colors">
            <ShoppingBag className="h-4 w-4" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-gold text-[10px] font-bold text-coffee">
                {totalItems}
              </span>
            )}
          </button>
          <Link
            to="/menu"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-chocolate text-cream text-sm font-medium px-5 py-2.5 hover:bg-coffee transition-colors"
          >
            Order Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-chocolate/5 text-yellow-600 hover:text-yellow-400 transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-cream/95 backdrop-blur-xl border-t border-chocolate/10 mt-3">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {links.map(([l, h]) => (
              <Link
                key={l}
                to={h}
                onClick={() => setOpen(false)}
                className="py-2 text-yellow-600 hover:text-yellow-400"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
