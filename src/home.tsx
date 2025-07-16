import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import useAppData from "./assets/data";
import Navbar from './header';
import Footer from './footer';
import ClientReviewsSwiper from './assets/ClientReviewsSwiper';
import { Link, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import { useEffect,  useState } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAppDispatch } from './store/hooks';
import { setId } from './store/selectedIdSlice';


gsap.registerPlugin(ScrollTrigger)

const logos = [
  { src: '/Amazon-removebg-preview.png', alt: 'Amazon' },
  { src: '/Shopify-removebg-preview.png', alt: 'Shopify' },
  { src: '/Etsy-removebg-preview.png', alt: 'Etsy' },
  { src: '/Ebay-removebg-preview.png', alt: 'Ebay' },
  { src: '/WooCommerce-removebg-preview.png', alt: 'WooCommerce' },
];

 const cases = [
    {
      title: 'edureka!',
      image: '/edu.png',
      alt: 'Edureka',
      description:
        'By integrating CRM systems with their digital structures, Edureka streamlined customer information management, resulting in a 20% increase in repeat purchases, personalized marketing campaigns, and enhanced customer loyalty.',
    },
    {
      title: 'Livspace',
      image: '/livespace.pdf-removebg-preview.png',
      alt: 'Livspace',
      description:
        "Through experience testing, Livspace optimized their website's user interface, resulting in a 40% decrease in bounce rate, improved user engagement, and a 25% increase in online bookings.",
    },
    {
      title: 'LambdaTest',
      image: '/lambda.png',
      alt: 'LambdaTest',
      description:
        'Through our data research services, LambdaTest gained valuable insights into their target market, enabling them to refine their product offerings and increase customer satisfaction by 30%.',
    },
  ];

function Home() {
  const [showContent, setShowContent] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, loading } = useAppData();
  const word=data.mainkey.find((item)=>item.id==111)

  useEffect(() => {
    if (loading) return;
    // ✅ Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })

    // Smooth scroll animation loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // ✅ Sync Lenis with ScrollTrigger
    ScrollTrigger.scrollerProxy(window, {
      scrollTop(value) {
        return value !== undefined ? window.scrollTo(0, value) : window.scrollY
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    ScrollTrigger.addEventListener('refresh', () => lenis.raf(Date.now()))
    ScrollTrigger.refresh()

    // ✅ GSAP Timeline
    const loader = document.getElementById("loader");
    const mainTL = gsap.timeline();
    mainTL
      .to("#loader-box", {
        duration: 0.1,
        delay: 0.5,
        ease: "power2.out",
      })
      .to("#loader-box", {
        duration: 0.1,
        opacity: 0,
        ease: "power2.inOut",
      })
      .to("#loader", {
        duration: 1,
        y: "-100%",
        ease: "power2.inOut",
        onComplete: () => {
          if (loader) loader.style.display = "none";
          setShowContent(true);
        },
      })
      // (do not include main content entrance GSAP here)
  }, [loading]);

  useEffect(() => {
    if (!showContent) return;
    // Main content entrance timeline (after loader)
    const tl = gsap.timeline();
    tl.from("#nav", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from("#herotext", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "+=0.1")
    .from("#herovideo", {
      x: 110,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    }, "-=0.5")
    .from("#services", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    .from("#texti", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    ;

    // Typewriter
    document.querySelectorAll(".typewriter").forEach((element, index) => {
      const el = element as HTMLElement;
      el.style.width = "0";
      el.style.overflow = "hidden";
      el.style.whiteSpace = "nowrap";
      gsap.to(el, {
        width: el.scrollWidth + "px",
        duration: 2,
        delay: 1.2 + (index * 0.4),
        ease: "power2.inOut"
      });
    });
  
    // ScrollTrigger fade-in for .fade-in elements
    document.querySelectorAll(".fade-in").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    });
    // Section reveals for #why-choose-us
    gsap.from("#why-choose-us", {
      scrollTrigger: {
        trigger: "#why-choose-us",
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
    // Cleanup for this effect
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [showContent]);

  
  
  return (
    <>
      <div id="loader" className="fixed inset-0 w-screen h-screen flex justify-center items-center z-50 bg-black">
        <div id="loader-box" className="flex w-screen h-screen justify-center items-center absolute">
          <div className="text-center">
            <div className="text-white text-4xl sm:text-6xl md:text-7xl font-bold mb-4 animate-pulse">
              LaCleo Digital
            </div>
            <div className="w-32 h-1 bg-white/30 rounded-full mx-auto overflow-hidden">
              <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="w-full h-full   text-white">B2B lead generation specialist</div>
          </div>
        </div>
      </div>
      {showContent && (
        <>
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
          <section id='nav' className='sticky top-0 z-50'><Navbar/></section>
    <section className="relative min-h-screen flex items-center overflow-hidden mt-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Hero Text */}
        <div className="flex-1 text-center lg:text-left space-y-6" id="hero-text">
          <div id='herotext' className="space-y-4 mt-3">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
              <span className="inline-block wave-text text-blue-600">
                <span>B</span>
                <span>2</span>
                <span>B</span>
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 typewriter">
              Lead Generation
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 typewriter">
              Specialists
            </h3>
            <p className="text-2xl md:text-4xl font-semibold text-green-600 animate-bounce typewriter">
              For Sales Growth
            </p>
          </div>

          <p id='texti' className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed  ">
            Transform your business with strategic virtual marketing campaigns and in-depth data analysis. 
            Our dedicated team delivers exceptional results through innovative, tailored strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              to="/contactus"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Hero Video */}
        <div id="herovideo" className="flex-1 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <video
              src="/Project Proposal Presentation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative rounded-2xl shadow-2xl w-full max-w-lg aspect-video"
            ></video>
          </div>
        </div>

      </div>
    </section>
   <div id='services' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
    {data.maindata.map((item) => {
  const imgItem = data.mainimg.find((stem) => stem.id === item.id);

  return (
    <div
      key={item.id}
      className="block bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full"
    >
      <button
        onClick={() => { dispatch(setId(item.id)); navigate(`/show/${item.promo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`); window.scrollTo(0, 0); }}
        className="flex flex-col items-center gap-4 w-full no-underline"
      >
        {/* Image */}
        <div className="rounded-full h-20 w-20 overflow-hidden">
          {imgItem && (
            <img
              src={imgItem.imageurl}
              alt={item.promo}
              className="object-cover w-full h-full rounded-full"
            />
          )}
        </div>

        {/* Promo title */}
        <h3 className="text-xl font-semibold text-black">{item.promo}</h3>

        {/* Heading */}
        <p className="text-sm px-2 text-black">{item.heading}</p>

        {/* Learn More Button */}
        <span className="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium transition">
          Learn more →
        </span>
      </button>
    </div>
  );
})}
</div>


         <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="why-choose-us">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16" id="why-title">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose LaCleo?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are committed to your success and growth through innovative solutions
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" id="features-grid">
          
          {/* Feature 1 */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
            <p className="text-gray-600 leading-relaxed">
              Experienced professionals dedicated to delivering exceptional results with cutting-edge strategies.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tailored Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Customized strategies that align perfectly with your unique business goals and requirements.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Results</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced analytics and data insights to optimize performance and maximize your ROI.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Some Of Our Case Studies</h2>
        <p className="text-lg text-gray-600 mt-2 mb-10">Dive Deeper Into Our Client Work</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 hover:border-black shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className='w-full h-64 flex items-center justify-center mb-6'>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full  object-contain mb-6"
              /></div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

     
         <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-blue-50 rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-[#4361ee] rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Targeted Approach</h3>
            <p className="text-gray-600">
              Customized strategies designed specifically for your business needs and objectives
            </p>
          </div>

          <div className="text-center p-8 bg-green-50 rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:bg-green-100 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Measurable Results</h3>
            <p className="text-gray-600">
              Track your progress with detailed analytics and comprehensive reporting
            </p>
          </div>

          <div className="text-center p-8 bg-purple-50 rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:bg-purple-100 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Implementation</h3>
            <p className="text-gray-600">
              Quick setup and immediate impact on your business growth
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Consultation', desc: 'We analyze your needs and goals' },
              { title: 'Strategy', desc: 'We develop a custom plan' },
              { title: 'Implementation', desc: 'We execute the strategy' },
              { title: 'Optimization', desc: 'We monitor and improve' }
            ].map((step, index) => (
              <div className="text-center group transition-all duration-300 hover:scale-105 hover:bg-blue-50 rounded-xl p-4 cursor-pointer" key={index}>
                <div className="w-12 h-12 bg-[#4361ee] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">{step.title}</h4>
                <p className="text-sm text-gray-600 group-hover:text-blue-800 transition-colors duration-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="text-center space-y-4 w-full max-w-full px-4 py-10 bg-gradient-to-b from-blue-900 to-blue-600 rounded-b-md">
      <h2 className="text-3xl font-bold text-white">Affiliate Partner</h2>
      <p className="text-white">We have partnered with top brands</p>

      <div className="bg-white h-[15vh] w-full overflow-hidden rounded-md shadow-md">
        <Swiper
          modules={[Autoplay]}
          className="w-full h-[10vh]"
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center bg-white h-[10vh] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain max-w-full"
                loading="lazy"
                draggable="false"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
     <div className=" bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Client Reviews</h1>
      <ClientReviewsSwiper />
    </div>
    <Footer></Footer>
        </>
      )}
    </>
  )
}

export default Home
