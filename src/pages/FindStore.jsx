const FindStore = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-red-900 mb-12">
        Find Our Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Visit Us In Person</h2>
          <p className="text-xl text-gray-700 mb-4">
            Mamba Zimbili Butchery<br />
            123 Braai Street, Soweto<br />
            Johannesburg, South Africa
          </p>
          <p className="text-xl text-gray-700 mb-8">
            Open: Mon-Sun 8AM - 8PM<br />
            Phone: +27 11 123 4567
          </p>
          <div className="inline-block">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/029/912/417/non_2x/map-pointer-with-store-pin-point-shop-stock-illustration-vector.jpg" 
              alt="Store location pin"
              className="w-64"
            />
          </div>
        </div>

        <div className="bg-gray-200 border-4 border-dashed rounded-2xl h-96 flex items-center justify-center">
          <p className="text-2xl text-gray-500">Google Maps Embed Here (Coming Soon)</p>
        </div>
      </div>
    </div>
  );
};

export default FindStore;