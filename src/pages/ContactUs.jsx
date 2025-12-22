const ContactUs = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-red-900 mb-12">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-700 mb-8">
            Questions about orders, special cuts, or bulk braai packs? Drop us a message — we're here to help!
          </p>

          <div className="space-y-4 text-lg">
            <p>📞 +27 11 123 4567</p>
            <p>✉️ info@mambazimbili.co.za</p>
            <p>📍 123 Braai Street, Soweto, JHB</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://img.freepik.com/premium-vector/contact-us-poster-envelope-with-letter-business-correspondence-advertising-marketing-corporate-email-technical-customer-support-landing-page-design-flat-vector-illustration_1136916-1901.jpg" 
            alt="Contact illustration"
            className="w-full"
          />
        </div>
      </div>

      {/* Simple form placeholder */}
      <div className="mt-20 max-w-2xl mx-auto bg-gray-100 p-10 rounded-2xl">
        <h3 className="text-3xl font-bold text-center mb-8">Send Us a Message</h3>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg border" />
          <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg border" />
          <textarea placeholder="Your Message" rows="6" className="w-full p-4 rounded-lg border"></textarea>
          <button type="submit" className="bg-red-900 hover:bg-red-800 text-white px-10 py-4 text-xl font-bold rounded-lg w-full transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;