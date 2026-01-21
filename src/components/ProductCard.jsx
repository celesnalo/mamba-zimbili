import { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 800);
  };

  return (
    <div
      className={`bg-white border-4 border-gray-300 overflow-hidden transform transition-all duration-300 ${
        added ? "scale-105 border-green-500" : ""
      }`}
    >
      <img
        src={product.image || "/assets/placeholder-meat.jpg"}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>

        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        {/* Price and Add to Cart */}
        {/*<div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-red-900">
            R{product.price}
            <span className="text-sm font-normal"> /kg</span>
          </span>

          <button
            onClick={handleAdd}
            className={`px-6 py-3 font-semibold transition-all duration-300 ${
              added
                ? "bg-green-600 text-white"
                : "bg-red-900 hover:bg-red-800 text-white"
            }`}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>*/}
      </div>
    </div>
  );
};

export default ProductCard;
