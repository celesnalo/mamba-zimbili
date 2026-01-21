import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
        <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between relative">

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50"
          >
            <img
              src="https://img.sanishtech.com/u/b0ef09744afa320ab58655ad2691c50f.png"
              alt="Mamba Zimbili Butchery"
              className="h-24 md:h-32 w-auto object-contain"
            />
          </Link>

          {/* Center Navigation (Desktop) */}
          <ul className="hidden md:flex flex-1 justify-center items-center space-x-10 lg:space-x-14 text-orange-500 text-sm lg:text-base font-bold uppercase">
            <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-300">About</Link></li>
            <li><Link to="/online-store" className="hover:text-orange-300">Online Store</Link></li>
            <li><Link to="/find-store" className="hover:text-orange-300">Find Store</Link></li>
          </ul>

          {/* Desktop Cart + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            {/*<Link to="/cart" className="relative text-orange-500 text-2xl">
              🛒
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link> */}

            <Link
              to="/find-store"
              className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 font-bold uppercase transition"
            >
              Visit Us
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-4 md:hidden ml-auto z-50">
            {/* Mobile Cart */}
            {/*<Link to="/cart" className="relative text-orange-500 text-2xl">
              🛒
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link> */}

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-500 text-3xl"
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 z-40 transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-orange-500 text-2xl font-bold uppercase">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/online-store" onClick={() => setIsOpen(false)}>Online Store</Link>
          <Link to="/find-store" onClick={() => setIsOpen(false)}>Find Store</Link>
          {/*
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="relative"
          >
            Cart 🛒 {itemCount > 0 && `(${itemCount})`}
          </Link> */}

          <Link
            to="/find-store"
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-orange-600 text-white px-10 py-4 font-bold uppercase"
          >
            Visit Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
