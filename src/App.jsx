import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import OnlineStore from './pages/OnlineStore';
import FindStore from './pages/FindStore';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="relative min-h-screen">
          <Navbar />

          <main className="pt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/online-store" element={<OnlineStore />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/find-store" element={<FindStore />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>

          </main>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
