import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Search,
  Menu as MenuIcon,
  X,
  Star,
  Wheat,
  Leaf,
  ChefHat,
  Cake,
  Truck,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  ArrowUp,
  Plus,
  Minus,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import hero from "@/assets/hero-bread.jpg";
import interior from "@/assets/bakery-interior.jpg";
import croissant from "@/assets/croissant.jpg";
import chocoCake from "@/assets/cake-chocolate.jpg";
import sourdough from "@/assets/sourdough.jpg";
import macarons from "@/assets/macarons.jpg";
import cinnamon from "@/assets/cinnamon-roll.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import customCake from "@/assets/custom-cake.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/* ---------- Reveal on scroll ---------- */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Navbar ---------- */
function Navbar({ cartCount }: { cartCount: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Menu", "#menu"],
    ["Gallery", "#gallery"],
    ["Custom Cakes", "#custom"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-chocolate/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-chocolate text-cream">
            <Wheat className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-chocolate">
            Golden Crust
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="text-sm font-medium text-coffee/80 hover:text-chocolate transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-chocolate/5 text-coffee">
            <Search className="h-4 w-4" />
          </button>
          <button className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-chocolate/5 text-coffee">
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-gold text-[10px] font-bold text-coffee">
                {cartCount}
              </span>
            )}
          </button>
          <a
            href="#menu"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-chocolate text-cream text-sm font-medium px-5 py-2.5 hover:bg-coffee transition-colors"
          >
            Order Now <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-chocolate/5 text-coffee"
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
              <a
                key={l}
                href={h}
                onClick={() => setOpen(false)}
                className="py-2 text-coffee/80 hover:text-chocolate"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Freshly baked artisan bread"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/40 to-coffee/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee/70 via-transparent to-transparent" />

      {/* floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold-soft/40 blur-sm animate-float-slow"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            width: `${6 + (i % 4) * 3}px`,
            height: `${6 + (i % 4) * 3}px`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${7 + (i % 5)}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-coffee/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-soft">
            <Sparkles className="h-3.5 w-3.5" /> Est. 2004 · Family Bakery
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-8xl font-medium text-cream text-balance leading-[1.02]">
            Freshly Baked
            <br />
            <span className="italic text-gold-soft">Every Morning.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-cream/80 leading-relaxed">
            Handcrafted breads, pastries, cakes and desserts made with the
            finest organic ingredients — slow-fermented, wood-fired, and
            delivered warm.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-coffee hover:bg-gold-soft transition-all hover:scale-105 shadow-lg shadow-gold/20"
            >
              Order Online
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/15 transition-colors"
            >
              View Menu
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8 text-cream/70">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-cream bg-gradient-to-br from-gold to-chocolate"
                  />
                ))}
              </div>
              <span className="text-sm">15,000+ happy customers</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
              <span className="text-sm ml-1">4.9 · Google Reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60 text-xs uppercase tracking-widest">
        <span>Scroll</span>
        <span className="h-10 w-px bg-cream/40 animate-pulse" />
      </div>
    </section>
  );
}

/* ---------- Animated counter ---------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const dur = 1500;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={interior}
              alt="Golden Crust bakery interior"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1400}
              height={1600}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-cream border border-border rounded-2xl p-6 shadow-xl max-w-[220px]">
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
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-chocolate leading-tight">
            Twenty years of <em className="text-gold not-italic">slow craft</em>{" "}
            & good bread.
          </h2>
          <p className="mt-6 text-coffee/80 leading-relaxed">
            Golden Crust began in 2004 as a small family kitchen with a single
            wood-fired oven and a stubborn belief: real bread takes time.
            Three generations later, we still mill our own flour, feed the same
            sourdough starter, and bake every loaf by hand before sunrise.
          </p>
          <p className="mt-4 text-coffee/70 leading-relaxed">
            Every recipe honors tradition — organic ingredients, no shortcuts,
            no additives — served with the warmth of a family table.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { n: 20, s: "+", label: "Years of Experience" },
              { n: 15000, s: "+", label: "Happy Customers" },
              { n: 80, s: "+", label: "Products Daily" },
              { n: 100, s: "%", label: "Fresh Ingredients" },
            ].map((s) => (
              <div key={s.label} className="border-t border-chocolate/15 pt-4">
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

/* ---------- Featured Menu ---------- */
type Product = {
  name: string;
  cat: string;
  desc: string;
  price: number;
  img: string;
  badge?: string;
};
const PRODUCTS: Product[] = [
  { name: "Wild Sourdough", cat: "Bread", desc: "48-hour fermented, crackling crust.", price: 8, img: sourdough, badge: "Signature" },
  { name: "Butter Croissant", cat: "Pastries", desc: "72 layers of French butter.", price: 4.5, img: croissant },
  { name: "Chocolate Truffle Cake", cat: "Cakes", desc: "Belgian dark chocolate, gold leaf.", price: 38, img: chocoCake, badge: "Best Seller" },
  { name: "Macaron Box", cat: "Macarons", desc: "Twelve seasonal flavors, hand piped.", price: 24, img: macarons },
  { name: "Cinnamon Rolls", cat: "Pastries", desc: "Warm dough, brown sugar swirl.", price: 5.5, img: cinnamon, badge: "New" },
  { name: "Strawberry Cheesecake", cat: "Desserts", desc: "Vanilla bean, fresh berries.", price: 32, img: cheesecake },
  { name: "Vanilla Cupcakes", cat: "Cupcakes", desc: "Madagascar vanilla buttercream.", price: 3.5, img: cupcakes },
  { name: "Custom Celebration Cake", cat: "Custom", desc: "Designed for your day.", price: 120, img: customCake, badge: "Made to Order" },
];

function Menu({ onAdd }: { onAdd: () => void }) {
  const cats = ["All", "Bread", "Pastries", "Cakes", "Macarons", "Cupcakes", "Desserts"];
  const [active, setActive] = useState("All");
  const list = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active);

  return (
    <section id="menu" className="relative py-28 lg:py-36 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Featured
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-chocolate leading-tight">
              Baked with love,
              <br />
              <em className="text-gold not-italic">served with care.</em>
            </h2>
          </div>
          <p className="max-w-md text-coffee/70">
            A rotating selection of our most-loved creations. Order online for
            same-day pickup or next-morning delivery.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 reveal">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-chocolate text-cream"
                  : "bg-cream text-coffee/70 hover:bg-chocolate/10 border border-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((p, i) => (
            <article
              key={p.name}
              className="group reveal bg-cream rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={900}
                  height={900}
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-cream/85 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-chocolate">
                    {p.badge}
                  </span>
                )}
                <button
                  onClick={onAdd}
                  className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-chocolate text-cream translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all hover:bg-gold hover:text-coffee"
                  aria-label={`Add ${p.name} to cart`}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                  {p.cat}
                </div>
                <h3 className="mt-1 font-display text-xl text-chocolate">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-coffee/70 line-clamp-1">
                  {p.desc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-chocolate">
                    ${p.price.toFixed(2)}
                  </span>
                  <button
                    onClick={onAdd}
                    className="text-xs font-semibold uppercase tracking-widest text-chocolate hover:text-gold transition-colors"
                  >
                    Add +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose Us ---------- */
function Why() {
  const items = [
    { icon: Wheat, t: "Fresh Daily", d: "Every loaf baked before sunrise." },
    { icon: Leaf, t: "Organic Ingredients", d: "Locally sourced, certified organic." },
    { icon: ChefHat, t: "Skilled Bakers", d: "Third-generation master bakers." },
    { icon: Cake, t: "Custom Cakes", d: "Designed for your celebration." },
    { icon: Truck, t: "Same-Day Delivery", d: "Warm at your door in 60 mins." },
    { icon: Award, t: "Premium Quality", d: "Award-winning artisan craft." },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            Why Golden Crust
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-chocolate">
            Small details.{" "}
            <em className="text-gold not-italic">Big flavor.</em>
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-cream p-8 hover:border-gold transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-chocolate text-gold-soft group-hover:bg-gold group-hover:text-coffee transition-colors">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-chocolate">
                  {it.t}
                </h3>
                <p className="mt-2 text-coffee/70">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  const imgs = [
    { src: sourdough, span: "row-span-2" },
    { src: chocoCake, span: "" },
    { src: interior, span: "row-span-2" },
    { src: croissant, span: "" },
    { src: macarons, span: "" },
    { src: cinnamon, span: "" },
    { src: cheesecake, span: "row-span-2" },
    { src: cupcakes, span: "" },
  ];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-28 lg:py-36 bg-coffee text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Gallery
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
              From oven to table.
            </h2>
          </div>
          <p className="max-w-md text-cream/70">
            Peek inside the ovens and hands that shape your morning.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {imgs.map((im, i) => (
            <button
              key={i}
              onClick={() => setOpen(im.src)}
              className={`reveal relative overflow-hidden rounded-2xl group ${im.span}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={im.src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-coffee/0 group-hover:bg-coffee/30 transition-colors" />
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 bg-coffee/95 backdrop-blur flex items-center justify-center p-6 animate-fade-up"
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={open}
            alt=""
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const list = [
    { n: "Sophia Bennett", r: "Regular customer", q: "The sourdough is unreal — crackling crust, tender inside. It's a Sunday ritual now.", stars: 5 },
    { n: "Marcus Chen", r: "Café owner", q: "We supply Golden Crust pastries in our shop. Consistent quality, always warm.", stars: 5 },
    { n: "Amelia Rossi", r: "Wedding client", q: "Our wedding cake was breathtaking. Guests are still talking about it a year later.", stars: 5 },
    { n: "Daniel Park", r: "New father", q: "Cinnamon rolls saved my Sunday mornings. My kids call it 'the good bakery'.", stars: 5 },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % list.length), 5000);
    return () => clearInterval(t);
  }, [list.length]);
  const c = list[i];
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            Kind Words
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-chocolate">
            Loved by our neighbors.
          </h2>
        </div>
        <div className="mt-12 relative min-h-[240px]">
          <div key={i} className="animate-fade-up">
            <div className="flex justify-center gap-1 text-gold mb-6">
              {Array.from({ length: c.stars }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="font-display text-2xl sm:text-3xl text-coffee italic leading-relaxed text-balance">
              "{c.q}"
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold to-chocolate" />
              <div className="text-left">
                <div className="font-semibold text-chocolate">{c.n}</div>
                <div className="text-sm text-coffee/60">{c.r}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {list.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${
                k === i ? "w-8 bg-chocolate" : "w-1.5 bg-chocolate/20"
              }`}
              aria-label={`Testimonial ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Custom Cakes ---------- */
function CustomCakes() {
  return (
    <section id="custom" className="relative py-28 lg:py-36 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal order-2 lg:order-1">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            Custom Cakes
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-chocolate leading-tight">
            Design your{" "}
            <em className="text-gold not-italic">dream cake.</em>
          </h2>
          <p className="mt-6 text-coffee/80 leading-relaxed">
            Birthdays, anniversaries, weddings — every custom cake is a
            conversation. Tell us your vision and we'll craft something
            unforgettable.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch within 24 hours.");
            }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input required placeholder="Your name" className="rounded-xl bg-cream border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
            <input required type="email" placeholder="Email" className="rounded-xl bg-cream border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
            <select className="rounded-xl bg-cream border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold sm:col-span-2">
              <option>Occasion — Birthday</option>
              <option>Occasion — Anniversary</option>
              <option>Occasion — Wedding</option>
              <option>Occasion — Corporate</option>
            </select>
            <textarea placeholder="Tell us about your cake..." rows={4} className="sm:col-span-2 rounded-xl bg-cream border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
            <button className="sm:col-span-2 rounded-full bg-chocolate text-cream px-6 py-3.5 font-semibold hover:bg-coffee transition-colors inline-flex items-center justify-center gap-2">
              Send Inquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="reveal order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={customCake} alt="Custom wedding cake" className="h-full w-full object-cover" loading="lazy" width={1400} height={1600} />
          </div>
          <div className="absolute -top-4 -left-4 rounded-2xl bg-gold text-coffee px-5 py-3 font-display font-semibold shadow-xl rotate-[-3deg]">
            From $120
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  const steps = [
    { t: "Choose", d: "Browse our fresh daily menu." },
    { t: "Order", d: "Checkout in under a minute." },
    { t: "We Bake", d: "Made from scratch that morning." },
    { t: "Delivered", d: "Warm at your door, same day." },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-chocolate">
            Four simple steps.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.t} className="reveal text-center relative" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cream border-2 border-gold font-display text-xl font-semibold text-chocolate relative z-10">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display text-xl text-chocolate">{s.t}</h3>
              <p className="mt-1 text-sm text-coffee/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const qa = [
    { q: "Do you offer same-day delivery?", a: "Yes — orders placed before 2pm arrive the same day within our delivery zone. Others ship next morning fresh." },
    { q: "Can I customize a cake?", a: "Absolutely. Fill in our custom cake form above with your occasion, size and flavor. We respond within 24 hours." },
    { q: "Do you accommodate allergies?", a: "We offer gluten-free, vegan and nut-free options daily. Note allergies at checkout and our team will confirm." },
    { q: "What payment methods do you accept?", a: "All major cards, Apple Pay, Google Pay and cash on pickup." },
    { q: "How fresh is your bread?", a: "Every loaf is baked the morning it's sold. Nothing sits overnight — anything unsold is donated to local shelters." },
    { q: "How should I store my bread?", a: "Keep in the paper bag we provide, cut-side down. For longer storage, slice and freeze — reheats beautifully." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 lg:py-36 bg-muted/50">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">FAQ</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-chocolate">Good to know.</h2>
        </div>
        <div className="mt-12 divide-y divide-chocolate/15 border-y border-chocolate/15">
          {qa.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg sm:text-xl text-chocolate">
                    {item.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-chocolate/20 text-chocolate">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-coffee/70 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Newsletter ---------- */
function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-chocolate text-cream p-10 sm:p-16 grain">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                Join The Table
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
                Get 10% off your <em className="text-gold-soft not-italic">first order</em>.
              </h2>
              <p className="mt-4 text-cream/70">
                Weekly specials, seasonal menus, and the occasional croissant secret.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                required
                type="email"
                placeholder="you@breakfast.com"
                className="flex-1 rounded-full bg-cream/10 border border-cream/20 px-5 py-3.5 text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="rounded-full bg-gold text-coffee px-6 py-3.5 font-semibold hover:bg-gold-soft transition-colors">
                {done ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Visit Us</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-chocolate leading-tight">
            Come say hello.
          </h2>
          <p className="mt-4 text-coffee/70 max-w-md">
            The kettle's on, the ovens are warm. We'd love to meet you.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { i: MapPin, t: "42 Bakers Lane, Old Town, Portland OR" },
              { i: Phone, t: "+1 (503) 555-0142" },
              { i: Mail, t: "hello@goldencrust.com" },
              { i: Clock, t: "Tue–Sun · 7:00 – 19:00 · Closed Mondays" },
            ].map((row, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream border border-border text-chocolate">
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
          <div className="mt-10 aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-muted grid place-items-center relative">
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
          className="reveal rounded-3xl bg-cream border border-border p-8 sm:p-10 h-fit"
        >
          <h3 className="font-display text-2xl text-chocolate">Send a message</h3>
          <div className="mt-6 grid gap-4">
            <input required placeholder="Full name" className="rounded-xl bg-background border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
            <input required type="email" placeholder="Email" className="rounded-xl bg-background border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
            <input placeholder="Subject" className="rounded-xl bg-background border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
            <textarea rows={5} placeholder="Your message" className="rounded-xl bg-background border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
            <button className="rounded-full bg-chocolate text-cream px-6 py-3.5 font-semibold hover:bg-coffee transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
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
            Handcrafted bread and pastries baked with patience, in small batches,
            since 2004.
          </p>
        </div>
        {[
          { t: "Quick Links", l: ["Home", "About", "Menu", "Gallery"] },
          { t: "Services", l: ["Custom Cakes", "Wholesale", "Catering", "Delivery"] },
          { t: "Contact", l: ["42 Bakers Lane", "Portland, OR", "+1 (503) 555-0142", "hello@goldencrust.com"] },
        ].map((col) => (
          <div key={col.t}>
            <div className="font-display text-cream text-lg">{col.t}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {col.l.map((x) => (
                <li key={x}>
                  <a href="#" className="hover:text-gold transition-colors">{x}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/50">
        <div>© {new Date().getFullYear()} Golden Crust Bakery. All rights reserved.</div>
        <div className="flex gap-3">
          {[Instagram, Facebook, Twitter].map((I, i) => (
            <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 hover:bg-gold hover:text-coffee hover:border-transparent transition-colors">
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating utilities ---------- */
function FloatingUI() {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setScroll(p);
      setShow(h.scrollTop > 600);
    };
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      {/* progress */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
        <div className="h-full bg-gold origin-left" style={{ transform: `scaleX(${scroll})` }} />
      </div>
      {/* WhatsApp */}
      <a
        href="#"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {/* back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-chocolate text-cream shadow-xl transition-all ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}

/* ---------- Cookies ---------- */
function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(!localStorage.getItem("gc-cookies")), 1200);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xl rounded-2xl bg-cream/95 backdrop-blur border border-border shadow-2xl p-4 flex items-center gap-4 animate-fade-up">
      <p className="text-sm text-coffee/80 flex-1">
        We use cookies to make your visit warm and buttery.
      </p>
      <button
        onClick={() => {
          localStorage.setItem("gc-cookies", "1");
          setShow(false);
        }}
        className="rounded-full bg-chocolate text-cream text-sm font-medium px-4 py-2"
      >
        Accept
      </button>
    </div>
  );
}

/* ---------- Page ---------- */
function HomePage() {
  useReveal();
  const [cart, setCart] = useState(0);
  return (
    <div className="bg-background text-foreground">
      <Navbar cartCount={cart} />
      <main>
        <Hero />
        <About />
        <Menu onAdd={() => setCart((c) => c + 1)} />
        <Why />
        <Gallery />
        <Testimonials />
        <CustomCakes />
        <Process />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <FloatingUI />
      <CookieBanner />
    </div>
  );
}
