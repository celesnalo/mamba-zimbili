
const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <img
        src={"https://img.sanishtech.com/u/f93891ce85c3f415bad05881f1d90247.jpg"}
        alt="Flame-grilled shisanyama perfection"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
          Flame-Grilled. Real Flavour.
        </h1>

        <p className="text-2xl md:text-4xl lg:text-5xl mb-12 font-light">
          Brisket, short ribs, wors, pork, wings, crocodile, kidneys, liver & more!
        </p>

        <p className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto">
          Combos served with uphuthu, chutney & chakalaka.
          <br />
          Ward 20, Obanjeni — Order early, taste the tradition! 🔥
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/online-store"
            className="bg-orange-600 hover:bg-orange-500 px-10 py-6 text-2xl font-bold transition"
          >
            Order Now
          </a>

          <a
            href="/find-store"
            className="border-4 border-white hover:bg-white hover:text-black px-10 py-6 text-2xl font-bold transition"
          >
            Visit Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
