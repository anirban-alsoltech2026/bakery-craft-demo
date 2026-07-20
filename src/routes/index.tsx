import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Star,
  Wheat,
  Leaf,
  ChefHat,
  Cake,
  Truck,
  Award,
  CakeSlice,
  ArrowRight,
  Plus,
  Minus,
  Mouse,
} from "lucide-react";

import hero from "@/assets/hero-bread.jpg";

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

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Freshly baked artisan bread"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/40 to-coffee/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee/70 via-transparent to-transparent" />

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-coffee/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-soft">
            <CakeSlice className="h-3.5 w-3.5" /> Est. 2004 · Family Bakery
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-8xl font-medium text-cream text-balance leading-[1.02]">
            Freshly Baked
            <br />
            <span className="italic text-gold-soft">Every Morning.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-cream/80 leading-relaxed">
            Handcrafted breads, pastries, cakes and desserts made with the finest organic
            ingredients — slow-fermented, wood-fired, and delivered warm.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-coffee hover:bg-gold-soft transition-all hover:scale-105 shadow-lg shadow-gold/20"
            >
              Order Online
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/menu"
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-yellow-600/60 text-xs uppercase tracking-widest">
        <span className="font-bold text-yellow-600/80 animate-pulse">Scroll</span>
        <Mouse className="text-yellow-600/80 animate-pulse"/>
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
            Small details. <em className="text-gold not-italic">Big flavor.</em>
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
                <h3 className="mt-5 font-display text-2xl text-chocolate">{it.t}</h3>
                <p className="mt-2 text-coffee/70">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const list = [
    {
      n: "Sophia Bennett",
      r: "Regular customer",
      q: "The sourdough is unreal — crackling crust, tender inside. It's a Sunday ritual now.",
      stars: 5,
    },
    {
      n: "Marcus Chen",
      r: "Café owner",
      q: "We supply Golden Crust pastries in our shop. Consistent quality, always warm.",
      stars: 5,
    },
    {
      n: "Amelia Rossi",
      r: "Wedding client",
      q: "Our wedding cake was breathtaking. Guests are still talking about it a year later.",
      stars: 5,
    },
    {
      n: "Daniel Park",
      r: "New father",
      q: "Cinnamon rolls saved my Sunday mornings. My kids call it 'the good bakery'.",
      stars: 5,
    },
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
              &ldquo;{c.q}&rdquo;
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
            <div
              key={s.t}
              className="reveal text-center relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
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
    {
      q: "Do you offer same-day delivery?",
      a: "Yes — orders placed before 2pm arrive the same day within our delivery zone. Others ship next morning fresh.",
    },
    {
      q: "Can I customize a cake?",
      a: "Absolutely. Fill in our custom cake form or visit the Custom Cakes page. We respond within 24 hours.",
    },
    {
      q: "Do you accommodate allergies?",
      a: "We offer gluten-free, vegan and nut-free options daily. Note allergies at checkout and our team will confirm.",
    },
    {
      q: "What payment methods do you accept?",
      a: "All major cards, UPI (GPay, PhonePe, Paytm), and cash on delivery.",
    },
    {
      q: "How fresh is your bread?",
      a: "Every loaf is baked the morning it's sold. Nothing sits overnight — anything unsold is donated to local shelters.",
    },
    {
      q: "How should I store my bread?",
      a: "Keep in the paper bag we provide, cut-side down. For longer storage, slice and freeze — reheats beautifully.",
    },
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
                  <span className="font-display text-lg sm:text-xl text-chocolate">{item.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-chocolate/20 text-chocolate">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-coffee/70 leading-relaxed">{item.a}</p>
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

/* ---------- Home Page ---------- */
function HomePage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <Why />
      <Testimonials />
      <Process />
      <FAQ />
      <Newsletter />
    </div>
  );
}
