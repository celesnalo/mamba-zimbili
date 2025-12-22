import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = product => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = id =>
    setCart(cart =>
      cart.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );

  const decreaseQty = id =>
    setCart(cart =>
      cart
        .map(i =>
          i.id === id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter(i => i.quantity > 0)
    );

  const removeItem = id =>
    setCart(cart => cart.filter(i => i.id !== id));

  const clearCart = () => setCart([]);

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
