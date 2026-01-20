
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img src={"https://img.sanishtech.com/u/b0ef09744afa320ab58655ad2691c50f.png"} alt="Mamba Zimbili" className="h-16" />
          </div>
          <p>Fresh premium cuts daily. Built for the braai masters.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-400">Home</a></li>
            <li><a href="/online-store" className="hover:text-orange-400">Online Store</a></li>
            <li><a href="/recipes" className="hover:text-orange-400">Recipes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p>+27 66 058 2598</p>
          <p>info@mambazimbili.co.za</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow the Smoke</h4>
          <p>Instagram • Facebook • WhatsApp</p>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p>&copy; 2025 Mamba Zimbili Butchery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;