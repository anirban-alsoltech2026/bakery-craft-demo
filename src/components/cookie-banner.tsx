import { useEffect, useState } from "react";

export function CookieBanner() {
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
