import Navbar from './header';
import Footer from './footer';
import "./button.css"
import Lenis from 'lenis';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useAppData from './assets/data';

function Casestudies() {
  const { data, loading: _loading } = useAppData()
  const word=data.mainkey.find((item)=>item.id==113)
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
      <div>
       <Helmet>
        <title>{word?.title}</title>
        <meta name="description" content={word?.description||"Transform your business with strategic virtual marketing campaigns and in-depth data analysis. Our dedicated team delivers exceptional results through innovative, tailored strategies."} />
        <meta name="keywords" content={Array.isArray(word?.metakeywords) ? word.metakeywords.join(",") : "B2B lead generation, digital marketing, sales growth, virtual marketing campaigns, data analysis, business transformation, LaCleo Digital"} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lacleodigital.com/" />
        <meta property="og:title" content="LaCleo Digital - B2B Lead Generation Specialists" />
        <meta property="og:description" content="Transform your business with strategic virtual marketing campaigns and in-depth data analysis." />
        <meta property="og:image" content="/icon.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lacleodigital.com/" />
        <meta property="twitter:title" content="LaCleo Digital - B2B Lead Generation Specialists" />
        <meta property="twitter:description" content="Transform your business with strategic virtual marketing campaigns and in-depth data analysis." />
        <meta property="twitter:image" content="/icon.png" />
      </Helmet>
        
      <section className='sticky top-0 z-50'><Navbar/></section>
        
      <header className="text-center py-10 sm:py-14 space-y-3 bg-[#4361ee] w-full px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
          Case Studies
        </h2>
        <h6 className="text-lg sm:text-xl text-gray-100 font-medium">
          •&nbsp; Real Results from Our Clients
        </h6>
      </header>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-10 sm:py-16 space-y-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Embark on Your E-Commerce Success Journey
        </h3>
        <p className="text-base sm:text-lg text-gray-600">
          In thе еvеr-еvolving world of е-commеrcе, staying ahead rеquirеs еxpеrtisе, innovation, and a customer-focused approach. Partner with <strong>LaClеo Digital</strong>, and let us help you craft a thriving online business. Together, we'll tell compelling stories, captivate your audience, and achieve remarkable success in the digital realm.
        </p>
        <p className="text-base sm:text-lg text-gray-600">
          Contact us today to start your e-commerce success journey.
        </p>
      </section>


  <section className="bg-[#4361ee] py-10 px-6">
                  <h3 className="text-center text-xl text-white font-semibold mb-5">Trusted by some of the biggest brands</h3>
                  <div className="flex justify-center items-center gap-4 flex-wrap ">
                    <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/img/binmile-removebg-preview.png" alt=""/></span>
                    <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/img/edureka-removebg-preview.png" alt=""/></span>
                    <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/img/isntamart-removebg-preview.png" alt=""/></span>
                    <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/img/lambdatest-removebg-preview.png" alt=""/></span>
                    <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/img/link-removebg-preview.png" alt=""/></span>
                    <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/img/livespace-removebg-preview.png" alt=""/></span>
                  </div>
                </section>
         
                <section className="relative bg-[#4361ee] mt-10 sm:mt-40 min-h-[50vh] sm:h-[85vh] p-6 sm:p-12">
        <div className="bg-white absolute w-[95vw] sm:w-[92vw] max-w-7xl rounded-3xl -top-16 sm:-top-28 shadow-2xl mx-auto flex flex-col-reverse sm:flex-row justify-between items-center gap-8 sm:gap-16 p-6 sm:p-12">
          {/* Left Text Content */}
          <div className="flex flex-col justify-center w-full sm:w-1/2 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Meezy</h2>
            <h5 className="text-[#4361ee] text-lg sm:text-xl font-semibold">MEEZY Sees YoY Growth</h5>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We helped generate leads from over 120 countries using high-ranking, industry-specific keywords. Our content-led strategy boosted engagement, while our telemarketing and customer support team empowered a global developer and QA community to respond to queries in real time.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full sm:w-1/2 flex justify-end">
            <div className="w-full h-[250px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md">
              <img
                src="/case-study-1.jpg"
                alt="Meezy Case Study"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

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
   
  )
}

export default Casestudies
