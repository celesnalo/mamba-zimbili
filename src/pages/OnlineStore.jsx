import ProductCard from '../components/ProductCard';

const products = [
  // Beef
  { id: 1, name: "Boerewors", description: "Classic spiced", price: 89.99, category: "Beef", image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Boerewors_raw.jpg" },
  { id: 2, name: "Rump Steak", description: "Prime cut", price: 149.99, category: "Beef", image: "https://www.shutterstock.com/shutterstock/photos/333952742/display_1500/stock-photo-fresh-raw-beef-rump-steak-on-crumpled-paper-333952742.jpg" },
  { id: 3, name: "T-Bone Steak", description: "Bone-in perfection", price: 179.99, category: "Beef", image: "https://t3.ftcdn.net/jpg/02/97/34/36/360_F_297343686_3w6eT5sJRVmB4QW8uIjYxNO8YROBEnV8.jpg" },
  
  // Chicken
  { id: 4, name: "Peri-Peri Wings", description: "Spicy marinated", price: 79.99, category: "Chicken", image: "https://assets.unileversolutions.com/recipes-v3/231301-default.png" },
  { id: 5, name: "Whole Chicken", description: "Free-range", price: 109.99, category: "Chicken", image: "https://thumbs.dreamstime.com/b/boerewors-south-african-sausage-fresh-mint-garnish-sliced-raw-wooden-cutting-board-culinary-photo-ready-to-cook-butcher-389513908.jpg" }, // placeholder
  
  // Braai Packs
  { id: 6, name: "Weekend Braai Pack", description: "Boerewors + Steak + Wings", price: 399.99, category: "Packs", image: "https://static01.nyt.com/images/2016/05/25/dining/25AFRICA-slide-GENJ/25AFRICA-slide-GENJ-videoSixteenByNine3000.jpg?year=2016&h=1687&w=3000&s=40deb2c8b4858ee4fc2028bdcb3baa0c54b3da8fe917aacbe9db61439445ed3f&k=ZQJBKqZ0VN&tw=1" },
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