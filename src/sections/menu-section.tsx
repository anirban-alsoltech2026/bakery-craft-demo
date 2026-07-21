import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useReveal } from "@/hooks/use-reveal";
import sourdough from "@/assets/sourdough.jpg";
import croissant from "@/assets/croissant.jpg";
import chocoCake from "@/assets/cake-chocolate.jpg";
import macarons from "@/assets/macarons.jpg";
import cinnamon from "@/assets/cinnamon-roll.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import customCake from "@/assets/custom-cake.jpg";

export type Product = {
  name: string;
  cat: string;
  desc: string;
  price: number;
  img: string;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Wild Sourdough",
    cat: "Bread",
    desc: "48-hour fermented, crackling crust.",
    price: 200,
    img: sourdough,
    badge: "Signature",
  },
  {
    name: "Butter Croissant",
    cat: "Pastries",
    desc: "72 layers of French butter.",
    price: 120,
    img: croissant,
  },
  {
    name: "Chocolate Truffle Cake",
    cat: "Cakes",
    desc: "Belgian dark chocolate, gold leaf.",
    price: 950,
    img: chocoCake,
    badge: "Best Seller",
  },
  {
    name: "Macaron Box",
    cat: "Macarons",
    desc: "Twelve seasonal flavors, hand piped.",
    price: 600,
    img: macarons,
  },
  {
    name: "Cinnamon Rolls",
    cat: "Pastries",
    desc: "Warm dough, brown sugar swirl.",
    price: 140,
    img: cinnamon,
    badge: "New",
  },
  {
    name: "Strawberry Cheesecake",
    cat: "Desserts",
    desc: "Vanilla bean, fresh berries.",
    price: 800,
    img: cheesecake,
  },
  {
    name: "Vanilla Cupcakes",
    cat: "Cupcakes",
    desc: "Madagascar vanilla buttercream.",
    price: 90,
    img: cupcakes,
  },
  {
    name: "Custom Celebration Cake",
    cat: "Custom",
    desc: "Designed for your day.",
    price: 3000,
    img: customCake,
    badge: "Made to Order",
  },
];

export function MenuSection({ onAdd }: { onAdd: (product: Product) => void }) {
  const cats = ["All", "Bread", "Pastries", "Cakes", "Macarons", "Cupcakes", "Desserts"];
  const [active, setActive] = useState("All");
  const list = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active);

  return (
    <section className="playful-subpage subpage-cream relative pt-32 pb-28 lg:pt-40 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal">
          <div className="max-w-xl">
            <span className="section-kicker">Our Menu</span>
            <h2 className="playful-heading mt-3">
              <em className="text-[#5C3A21] not-italic">Baked with love,</em>
              <br />
              <em className="text-[#d9544d] not-italic">served with care.</em>
            </h2>
          </div>
          <p className="max-w-md text-coffee/70">
            A rotating selection of our most-loved creations. Order online for same-day pickup or
            next-morning delivery.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 reveal">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`playful-filter ${active === c ? "is-active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((p, i) => (
            <article
              key={p.name}
              className="menu-play-card group reveal overflow-hidden transition-all duration-500"
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
                  onClick={() => onAdd(p)}
                  className="absolute bottom-3 right-3 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-[#d9544d] text-cream opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 hover:bg-chocolate"
                  aria-label={`Add ${p.name} to cart`}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                  {p.cat}
                </div>
                <h3 className="mt-1 font-display text-xl text-chocolate">{p.name}</h3>
                <p className="mt-1 text-sm text-coffee/70 line-clamp-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-chocolate">
                    ₹{p.price.toLocaleString("en-IN")}
                  </span>
                  <button
                    onClick={() => onAdd(p)}
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

export default function MenuPageContent() {
  useReveal();
  const { addItem } = useCart();
  return <MenuSection onAdd={(p) => addItem({ name: p.name, price: p.price, img: p.img })} />;
}
