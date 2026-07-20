import { MessageCircle, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";

export function CartSidebar() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalItems, totalPrice } =
    useCart();

  function handleCheckout() {
    if (items.length === 0) return;
    const url = buildWhatsAppOrderUrl(items, totalPrice);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="flex items-center gap-2 font-display text-xl text-chocolate">
            <ShoppingBag className="h-5 w-5 text-gold" />
            Your Cart
            {totalItems > 0 && (
              <span className="ml-auto text-sm font-normal text-coffee/60">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-coffee/50">
            <ShoppingBag className="h-16 w-16" />
            <p className="font-display text-lg text-coffee/40">Your cart is empty</p>
            <p className="text-sm text-center max-w-48">
              Add some freshly baked goodness to get started!
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.name}>
                    <div className="flex gap-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="text-sm font-medium text-chocolate">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => removeItem(item.name)}
                              className="text-coffee/30 hover:text-red-500 transition-colors"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="mt-0.5 text-sm font-semibold text-gold">
                            ₹{item.price.toLocaleString("en-IN")}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="grid h-7 w-7 place-items-center rounded-full border border-border text-coffee hover:bg-chocolate/5 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium text-chocolate">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="grid h-7 w-7 place-items-center rounded-full border border-border text-coffee hover:bg-chocolate/5 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <Separator className="mt-4" />
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-coffee/70">Subtotal</span>
                <span className="font-display text-xl font-semibold text-chocolate">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors flex items-center justify-center gap-2"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" />
                Order via WhatsApp
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
