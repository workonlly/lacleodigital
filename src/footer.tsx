

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const profiles = [
  {
    href: 'https://www.upwork.com/ag/lacleodgital/',
    src: '/imo/Upwork-2-removebg-preview.png',
    alt: 'Upwork',
  },
  {
    href: 'https://www.freelancer.in/u/lacleodigital',
    src: '/imo/freela-removebg-preview.png',
    alt: 'Freelancer',
  },
  {
    href: 'https://clutch.co/profile/lacleodigital',
    src: '/imo/2223-removebg-preview.png',
    alt: 'Clutch',
  },
  {
    href: 'https://www.guru.com/freelancers/la-cleo-digital',
    src: '/imo/gur-removebg-preview.png',
    alt: 'Guru',
  },
  {
    href: 'https://www.fiverr.com/lacleodigital',
    src: '/imo/fiverrrr-removebg-preview.png',
    alt: 'Fiverr',
  },
  {
    href: 'https://www.trustpilot.com/review/lacleodigital.com',
    src: '/newint-removebg-preview.png',
    alt: 'Fiverr',
  },
];

function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const SERVICE_ID = (import.meta.env as any).VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = (import.meta.env as any).VITE_EMAILJS_TEMPLATE_ID;
  const TEMPLATE_ID_2 = (import.meta.env as any).VITE_EMAILJS_TEMPLATE_ID_2;
  const PUBLIC_KEY = (import.meta.env as any).VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus(null);
    let success = false;
    // First template
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    )
    .then(
      () => {
        success = true;
        setStatus('Message sent!');
        form.current?.reset();
      },
      () => {
        if (!success) setStatus('Failed to send message. Please try again.');
      }
    );
    // Second template
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID_2,
      form.current,
      PUBLIC_KEY
    )
    .then(
      () => {
        success = true;
        setStatus('Message sent!');
        form.current?.reset();
      },
      () => {
        if (!success) setStatus('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <>
     <section className="bg-white py-16 px-6 w-full">
      <div className="max-w-5xl mx-auto bg-black text-white rounded-2xl overflow-hidden shadow-lg">
        <div className="py-8 px-6 text-center border-b border-white/20">
          <h2 className="text-3xl  md:text-4xl font-bold">Send Us A Message</h2>
          <p className="text-gray-300 mt-2 text-lg">We typically respond within 24 hours</p>
        </div>

       
        <form ref={form} onSubmit={sendEmail} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="w-full border border-gray-500 bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-gray-500 bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-gray-500 bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full border border-gray-500 bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="flex flex-col space-y-4 h-full">
            <textarea
            name='description'
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
            {status && <div className="text-sm mt-2 text-green-400">{status}</div>}
          </div>
        </form>
      </div>
    </section>

<div className="text-center bg-black py-16 px-6 w-full overflow-x-hidden rounded-t-md">
      <h1 className="text-4xl font-bold text-blue-600 mb-3">Our Profiles</h1>
      <p className="text-lg text-gray-300 mb-10">
        We are highly rated by our customers
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
        {profiles.map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300  hover:scale-110"
          >
            <img
              src={src}
              alt={alt}
              className="w-40 h-15 object-contain rounded-md shadow-md  "
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
       <footer className="bg-black text-white py-12 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-wrap justify-between gap-y-10">

        {/* Column 1 - Navigation */}
        <div className="space-y-2 min-w-[150px] flex flex-col w-full sm:w-auto">
          {[
            ['Home', '/'],
            ['Services', '/services'],
            ['Case Studies', '/casestudies'],
            ['About Us', '/aboutus'],
            ['Blog', '/blog'],
            ['Contact Us', '/contactus'],
          ].map(([label, link]) => (
            <Link
              key={label}
              to={link}
              className="nav-link text-base font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Column 2 - Can dynamically inject in future */}
        <div id="import2" className="w-full sm:w-auto" />

        {/* Column 3 - Contact & Social */}
        <div className="space-y-2 w-full sm:w-auto flex flex-col text-left">
          <Link
            to="/contactus"
            className="nav-link text-base font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black transition"
          >
            Book A Consultation
          </Link>
          <Link
            to="/privacy"
            className="nav-link text-base font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="nav-link text-base font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black transition"
          >
            Terms of Service
          </Link>

          <div className="text-sm text-white mt-4 px-4">
            <p>
              Email:{' '}
              <a href="mailto:Faizan@lacleodigital.com" className="underline">
              Faizan@lacleodigital.com
              </a>
            </p>
            <p>
              WhatsApp:{' '}
              <a href="https://wa.me/917428149253" className="underline">
                +91-7428149253
              </a>
            </p>
          </div>

          <div className="flex gap-4 text-xl mt-4 px-4 text-white">
            {[
              ['fab fa-facebook-f', '#'],
              ['fab fa-instagram', '#'],
              ['fab fa-pinterest-p', '#'],
              ['fab fa-linkedin-in', '#'],
              ['fab fa-whatsapp', '#'],
              ['fas fa-envelope', '#'],
            ].map(([icon, link], i) => (
              <a
                key={i}
                href={link}
                className="hover:bg-white/70 hover:text-black p-2 rounded-md transition"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-white px-4">
        &copy; La Cleo Digital Private Limited | All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer
