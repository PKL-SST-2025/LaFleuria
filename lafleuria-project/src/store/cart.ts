import { createSignal } from "solid-js";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const [cart, setCart] = createSignal<CartItem[]>([]);

export function addToCart(product: Omit<CartItem, "quantity">) {
  setCart((prev) => {
    const existing = prev.find((item) => item.id === product.id);
    if (existing) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
}

export function removeFromCart(id: number) {
  setCart((prev) => prev.filter((item) => item.id !== id));
}

export function updateQuantity(id: number, qty: number) {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
    )
  );
}

// ✅ export dua-duanya
export { cart, setCart };
