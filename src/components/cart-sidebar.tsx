import { Link } from "@tanstack/react-router";
import { MessageCircle, Minus, Plus, ShoppingBag, Sparkles, Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";

export function CartSidebar() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalItems, totalPrice } =
    useCart();
  const freeDeliveryTarget = 1000;
  const amountToFreeDelivery = Math.max(0, freeDeliveryTarget - totalPrice);
  const deliveryProgress = Math.min(100, (totalPrice / freeDeliveryTarget) * 100);

  function handleCheckout() {
    if (items.length === 0) return;
    const url = buildWhatsAppOrderUrl(items, totalPrice);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="playful-cart flex w-full flex-col p-0 sm:max-w-md">
        <SheetHeader className="playful-cart-header px-6 pb-6 pt-7">
          <span className="mb-2 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#d9544d]">
            <Sparkles className="h-3.5 w-3.5" /> Your box of happiness
          </span>
          <SheetTitle className="flex items-center gap-3 font-display text-3xl text-chocolate">
            <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-chocolate bg-[#ffe89d] shadow-[3px_3px_0_#5c3a21]">
              <ShoppingBag className="h-5 w-5" />
            </span>
            Your Cart
            {totalItems > 0 && (
              <span className="ml-auto rounded-full border border-chocolate bg-[#fff8ea] px-3 py-1 text-xs font-bold text-chocolate">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center text-coffee/60">
            <div className="empty-cart-icon">
              <ShoppingBag className="h-12 w-12" />
              <Sparkles className="absolute -right-3 -top-3 h-7 w-7 text-[#d9544d]" />
            </div>
            <p className="mt-4 font-display text-3xl font-semibold text-chocolate">So much room!</p>
            <p className="max-w-56 text-sm leading-relaxed">
              Add some freshly baked goodness to get started.
            </p>
            <Link
              to="/menu"
              onClick={closeCart}
              className="playful-button playful-button-dark mt-3"
            >
              Find a treat
            </Link>
          </div>
        ) : (
          <>
            <div className="px-6 pt-5">
              <p className="text-xs font-bold text-coffee/65">
                {amountToFreeDelivery > 0
                  ? `Add ₹${amountToFreeDelivery.toLocaleString("en-IN")} for free delivery`
                  : "Free delivery unlocked! 🎉"}
              </p>
              <div className="mt-2 h-2 overflow-hidden rounded-full border border-chocolate bg-[#fff8ea]">
                <div
                  className="h-full rounded-full bg-[#d9544d] transition-all duration-500"
                  style={{ width: `${deliveryProgress}%` }}
                />
              </div>
            </div>

            <ScrollArea className="flex-1 px-6">
              <div className="space-y-3 py-5">
                {items.map((item, index) => (
                  <div
                    key={item.name}
                    className="cart-item-card flex gap-4 mr-2"
                    style={{ animationDelay: `${index * -0.7}s` }}
                  >
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 border-chocolate bg-muted">
                      <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="pr-2 font-display text-lg font-semibold leading-tight text-chocolate">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeItem(item.name)}
                            className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-coffee/35 transition-colors hover:bg-[#f8c7d0] hover:text-[#d9544d]"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#d9544d]">
                          ₹{item.price.toLocaleString("en-IN")} each
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="cart-quantity">
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-display font-bold text-chocolate">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="cart-checkout space-y-4 px-6 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-coffee/70">Subtotal</span>
                <span className="font-display text-2xl font-semibold text-chocolate">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <Button
                onClick={handleCheckout}
                className="cart-checkout-button flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-white transition-all hover:bg-[#1ebe5d]"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" />
                Order via WhatsApp
              </Button>
              <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-coffee/45">
                We&apos;ll confirm availability and delivery time
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
