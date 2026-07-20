import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingUI() {
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
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
        <div className="h-full bg-gold origin-left" style={{ transform: `scaleX(${scroll})` }} />
      </div>
      <a
        href="#"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
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
