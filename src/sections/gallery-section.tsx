import { useState } from "react";
import { X } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import sourdough from "@/assets/sourdough.jpg";
import chocoCake from "@/assets/cake-chocolate.jpg";
import interior from "@/assets/bakery-interior.jpg";
import croissant from "@/assets/croissant.jpg";
import macarons from "@/assets/macarons.jpg";
import cinnamon from "@/assets/cinnamon-roll.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import cupcakes from "@/assets/cupcakes.jpg";

export function GallerySection() {
  useReveal();
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
    <section className="playful-gallery pt-32 pb-28 text-cream lg:pt-40 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 reveal">
          <div>
            <span className="section-kicker text-[#ffe89d]">Gallery</span>
            <h2 className="playful-heading mt-3 text-[#fff8ea]">From oven to table.</h2>
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
              className={`gallery-play-tile reveal group relative overflow-hidden ${im.span}`}
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
          <img src={open} alt="" className="max-h-[85vh] max-w-full rounded-2xl object-contain" />
        </div>
      )}
    </section>
  );
}
