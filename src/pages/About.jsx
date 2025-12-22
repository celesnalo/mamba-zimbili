const About = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-red-900 mb-12">
        About Mamba Zimbili Butchery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Born from the heart of South African shisanyama culture, Mamba Zimbili Butchery brings you premium, fresh cuts straight from local farms. We're all about that real flame-grilled flavor — no shortcuts, just quality meat that makes every braai legendary.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            From traditional boerewors to prime steaks and spicy peri-peri marinades, we hand-select every piece for tenderness and taste. Visit us or order online — we're here to fuel your next gathering.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://blog.caterwize.co.za/wp-content/uploads/2024/03/selective-focus-of-african-american-male-butcher-i-2023-11-27-05-11-51-utc-scaled.jpg" 
            alt="Butcher preparing fresh meat"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-900 mb-8">Our Promise: Fresh. Local. Flame-Ready. 🔥</h2>
      </div>
    </div>
  );
};

export default About;