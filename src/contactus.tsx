import Navbar from './header';
import Footer from './footer';
import "./button.css"
import Lenis from 'lenis';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useAppData from './assets/data';


const ContactUs = () => {
  const { data, loading: _loading } = useAppData()
  const word=data.mainkey.find((item)=>item.id==116)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return (
    <div className="w-full">
      <Helmet>
        <title>{word?.title}</title>
        <meta name="description" content={word?.description||"Transform your business with strategic virtual marketing campaigns and in-depth data analysis. Our dedicated team delivers exceptional results through innovative, tailored strategies."} />
        <meta name="keywords" content={Array.isArray(word?.metakeywords) ? word.metakeywords.join(",") : "B2B lead generation, digital marketing, sales growth, virtual marketing campaigns, data analysis, business transformation, LaCleo Digital"} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lacleodigital.com/" />
        <meta property="og:title" content="LaCleo Digital - B2B Lead Generation Specialists" />
        <meta property="og:description" content="Transform your business with strategic virtual marketing campaigns and in-depth data analysis." />
        <meta property="og:image" content="/public/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lacleodigital.com/" />
        <meta property="twitter:title" content="LaCleo Digital - B2B Lead Generation Specialists" />
        <meta property="twitter:description" content="Transform your business with strategic virtual marketing campaigns and in-depth data analysis." />
        <meta property="twitter:image" content="/public/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" />
      </Helmet>
      
        <section className='sticky top-0 z-50'><Navbar/></section>
      {/* Header */}
      <header className="text-center py-8 sm:py-10 mt-5 space-y-2 bg-[#4361ee] w-full px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact Us</h2>
        <h6 className="text-base sm:text-lg text-white">•&nbsp; Contact</h6>
      </header>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 space-y-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-center">Gеt In Touch Today</h3>
        <p className="text-center text-base sm:text-lg">
          At LaClеo Digital, we are passionate about driving businesses ahead through innovation. 
          We believe in pushing boundaries, exploring new possibilities, and embracing cutting-edge 
          technologies to help our clients thrive in the digital landscape. We are dedicated to delivering 
          exceptional results and taking your business to the next level.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="relative flex flex-col lg:flex-row gap-6 justify-center px-6 py-10 max-w-7xl mx-auto">
  {/* Office Info Card */}
  <div className="bg-gradient-to-br from-[#3a54e1] to-[#5c7cfa] w-full lg:w-1/2 rounded-2xl shadow-xl p-8 lg:p-12 flex flex-col gap-6 transform transition hover:-translate-y-1 hover:shadow-2xl">
    <div className="text-white text-2xl lg:text-3xl font-extrabold">🌍 Our Offices</div>
    <p className="text-white text-lg">We have our offices in India and UAE</p>
    <div className="bg-white text-black rounded-xl p-5 flex flex-col gap-3 text-base sm:text-lg font-medium">
      <div>
        <strong>India Office:</strong><br />
        Amrapali Eden Park, F 27 B -1 Near HDFC bank,<br />
        Fatehpur, F Block Sector 50 Noida,<br />
        Uttar Pradesh 201301
      </div>
      <div>
        <strong>UAE Office:</strong><br />
        Vianet Capital, DIFC, Dubai, UAE
      </div>
    </div>
  </div>

  {/* Contact Info Card */}
  <div className="bg-gradient-to-br from-[#3a54e1] to-[#5c7cfa] w-full lg:w-1/2 rounded-2xl shadow-xl p-8 lg:p-12 flex flex-col gap-6 transform transition hover:-translate-y-1 hover:shadow-2xl">
    <div className="text-white text-2xl lg:text-3xl font-extrabold">📞 Available 24×7</div>
    <p className="text-white text-lg">We are available round the clock to serve businesses globally</p>
    <div className="bg-white text-black rounded-xl p-5 flex flex-col gap-3 text-base sm:text-lg font-medium">
      <div>Email: <a href="mailto:info@lacleodigital.com" className="text-blue-600 underline">info@lacleodigital.com</a></div>
      <div>WhatsApp: <a href="https://wa.me/917428149253" className="text-blue-600 underline">+91-7428149253</a></div>
      <div>
        Book a 30 Minute Meeting: <br />
        <a href="https://calendly.com/lacleodigital" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          calendly.com/lacleodigital
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <a href="https://www.facebook.com/lacleodigital" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
          <img src="/images__1_-removebg-preview.png" alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/lacleodigital/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
          <img src="/images-removebg-preview (1).png" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/company/lacleodigital/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
          <img src="/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector-removebg-preview.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        {/* Add more icons as needed */}
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="bg-gray-50 container mx-auto px-4 py-8 sm:py-12 space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-center">Why LaCleo Is Your Ideal Partner</h3>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
          <li><strong>Customized Strategies:</strong> Tailored plans aligned with your unique business goals and market needs.</li>
          <li><strong>Data-Driven:</strong> Analytics-based decision-making to refine campaigns and optimize ROI.</li>
          <li><strong>Creative Brilliance:</strong> Visually appealing content and compelling messaging to captivate your audience.</li>
          <li><strong>Transparent Communication:</strong> Regular updates and collaborative planning to keep you informed and involved.</li>
          <li><strong>Proven Results:</strong> A track record of successful projects and satisfied clients.</li>
        </ul>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;