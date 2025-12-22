import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const BUSINESS_WHATSAPP = "27762392923";

const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    total
  } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Load saved customer
  useEffect(() => {
    const saved = localStorage.getItem("customer");
    if (saved) {
      const c = JSON.parse(saved);
      setName(c.name);
      setPhone(c.phone);
    }
  }, []);

  const handleCheckout = () => {
    if (!name || !phone || cart.length === 0) return;

    const orderRef = `ORD-${Date.now().toString().slice(-6)}`;

    localStorage.setItem(
      "customer",
      JSON.stringify({ name, phone })
    );

    const lines = cart
      .map(
        i =>
          `• ${i.name} x${i.quantity} – R${(
            i.price * i.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const message = `
🛒 *New Order*
📦 *Ref:* ${orderRef}

👤 *Customer:* ${name}
📱 *Phone:* ${phone}

${lines}

--------------------
💰 *Total:* R${total.toFixed(2)}

Payment will be made in-store.
`;

    const encoded = encodeURIComponent(message);
    const isMobile = /Android|iPhone/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${BUSINESS_WHATSAPP}&text=${encoded}`
      : `https://wa.me/${BUSINESS_WHATSAPP}?text=${encoded}`;

    window.location.href = url;
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-6">Your cart is empty 🛒</h2>
        <a
          href="/online-store"
          className="bg-orange-500 text-white px-8 py-4 text-xl font-bold"
        >
          Add Items
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-5xl font-bold text-center text-red-900 mb-10">
        Your Cart
      </h1>

      {cart.map(item => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h3 className="text-xl font-bold">{item.name}</h3>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 bg-gray-200"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 bg-gray-200"
              >
                +
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-red-600 font-bold"
              >
                🗑
              </button>
            </div>
          </div>

          <div className="font-bold">
            R{(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}

      <div className="mt-8 text-2xl font-bold text-right">
        Total: <span className="text-red-900">R{total.toFixed(2)}</span>
      </div>

      {/* CUSTOMER FORM */}
      <div className="mt-10 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border px-4 py-3"
        />

        <input
          type="tel"
          placeholder="WhatsApp Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="w-full border px-4 py-3"
        />
      </div>

      <button
        onClick={handleCheckout}
        className="w-full bg-green-600 hover:bg-green-700 text-white text-2xl font-bold py-5 mt-8"
      >
        Checkout via WhatsApp
      </button>
    </div>
  );
};

export default Cart;
