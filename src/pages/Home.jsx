import { useEffect, useState } from "react";
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

import image from '../assets/MambazimbiliButchery/img.jpg';
import image1 from '../assets/MambazimbiliButchery/img1.jpg';
import image2 from '../assets/MambazimbiliButchery/img2.jpg';
import image5 from '../assets/MambazimbiliButchery/img5.jpg';
import image7 from '../assets/MambazimbiliButchery/img7.jpg';

const featuredProducts = [
  {
    id: 1,
    name: "Premium Boerewors",
    description: "Traditional spiced South African sausage",
    price: 89.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Boerewors_raw.jpg"
  },
  {
    id: 2,
    name: "Rump Steak",
    description: "Juicy aged beef rump – braai ready",
    price: 149.99,
    image: "https://www.shutterstock.com/shutterstock/photos/333952742/display_1500/stock-photo-fresh-raw-beef-rump-steak-on-crumpled-paper-333952742.jpg"
  },
  {
    id: 3,
    name: "Peri-Peri Chicken Wings",
    description: "Marinated & flame-grilled perfection",
    price: 79.99,
    image: "https://assets.unileversolutions.com/recipes-v3/231301-default.png"
  },
];

// 🔥 Slider Images
const vibeImages = [
  image,
  image1,
  image2,
  image5,
  image7
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vibeImages.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-red-900 mb-12">
            Featured Cuts 🔥
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Butchery Vibe Slider Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="relative max-w-5xl mx-auto h-105 overflow-hidden rounded-2xl shadow-2xl">
            {vibeImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Mamba Zimbili Butchery"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <p className="text-2xl mt-10 text-gray-700">
            Visit us for the freshest selection in town
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
