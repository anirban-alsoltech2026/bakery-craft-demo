import type { CartItem } from "@/context/cart-context";

/** WhatsApp number in international format — no spaces, no '+' */
export const WHATSAPP_NUMBER = "+919064286385";

/**
 * Builds a wa.me deep-link URL with a pre-typed order message.
 *
 * Example message:
 *   🧁 *New Order from Golden Crust Bakery*
 *
 *   1. Classic Croissant × 2 — ₹320
 *   2. Sourdough Loaf × 1 — ₹350
 *
 *   *Total: ₹670*
 *
 *   Please confirm my order. Thank you! 🙏
 */
export function buildWhatsAppOrderUrl(items: CartItem[], totalPrice: number): string {
  const lines = items.map(
    (item, idx) =>
      `${idx + 1}. ${item.name} × ${item.quantity} — ₹${(item.price * item.quantity).toLocaleString("en-IN")}`,
  );

  const message = [
    "🧁 *New Order from Golden Crust Bakery*",
    "",
    ...lines,
    "",
    `*Total: ₹${totalPrice.toLocaleString("en-IN")}*`,
    "",
    "Please confirm my order. Thank you! 🙏",
  ].join("\n");

  // wa.me requires the number WITHOUT '+' or spaces
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
