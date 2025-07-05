import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-white py-16 px-6 w-full">
      <div className="max-w-5xl mx-auto bg-black text-white rounded-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="py-8 px-6 text-center border-b border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold">Send Us A Message</h2>
          <p className="text-gray-300 mt-2 text-lg">We typically respond within 24 hours</p>
        </div>

        {/* Form Body */}
        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full border border-gray-500 bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-500 bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-500 bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-500 bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Right Message + Submit */}
          <div className="flex flex-col space-y-4 h-full">
            <textarea
              placeholder="Your Message"
              rows={9}
              className="w-full border border-gray-500 bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-white"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black hover:bg-white hover:text-black  text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
