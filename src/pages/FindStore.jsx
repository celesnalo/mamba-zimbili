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
            Ward 20, Obanjeni Reserve<br />
            Kwa Makweqe Mtunzini, 3867<br />
            uMlalazi Municipality, KZN<br />
            South Africa
          </p>
          <p className="text-xl text-gray-700 mb-8">
            Open: Mon-Sun 8AM - 10PM<br />
            Phone: +27 66 058 2598
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6975.220076563329!2d31.69304566988734!3d-28.92338531371274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1efa018f8212207f%3A0x6f867ba30ddd5357!2sMamba%20Zimbili%20Butchery!5e1!3m2!1sen!2sza!4v1768904310291!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mamba Zimbili Butchery Location"
          />
        </div>
      </div>
    </div>
  );
};

export default FindStore;