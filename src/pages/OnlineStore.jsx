import ProductCard from '../components/ProductCard';

const products = [
  // Beef
  { id: 1, name: "Weekend-Braai", description: "Classic spiced", price: 89.99, category: "Beef", image: "https://img.sanishtech.com/u/37911c9f36566209bf11a02ff08856f1.jpg" },
  { id: 2, name: "Full Plate", description: "Prime cut", price: 149.99, category: "Beef", image: "https://img.sanishtech.com/u/a6daec904d25fc72d4a1d1fef35e7484.jpg" },
  { id: 3, name: "T-Bone Steak", description: "Bone-in perfection", price: 179.99, category: "Beef", image: "https://img.sanishtech.com/u/a9e0b2b2ae63c887b96b0673d7c24993.jpg" },
  
  // Chicken
  { id: 4, name: "Peri-Peri Wings", description: "Spicy marinated", price: 79.99, category: "Chicken", image: "https://assets.unileversolutions.com/recipes-v3/231301-default.png" },
  { id: 5, name: "Chicken", description: "Free-range", price: 109.99, category: "Chicken", image: "https://img.sanishtech.com/u/68b9d0b80c8f5d683cb24cc85fdb6422.jpg" }, // placeholder
  
  // Braai Packs
  { id: 6, name: "Plate", description: "Boerewors + Steak + Wings", price: 399.99, category: "Packs", image: "https://img.sanishtech.com/u/37429a059efb5e596b477cef5f4a8560.jpg" },
];

const OnlineStore = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-red-900 mb-4">
        Online Store
      </h1>
      <p className="text-xl text-center text-gray-700 mb-16">
        Order fresh meat for pickup.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OnlineStore;