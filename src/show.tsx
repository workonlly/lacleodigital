import useAppData from "./assets/data";
import Navbar from './header';
import Footer from './footer';
import "./button.css";
import Lenis from 'lenis';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { setId } from './store/selectedIdSlice';
import { useNavigate } from 'react-router-dom';

function Show() {
  const { data, loading } = useAppData();
  const id = useAppSelector(state => state.name.id);
  const word = data.mainkey.find((item) => item.id === (id ?? 111));

  const mainItem = data.maindata.find(item => item.id === (id ?? 111));
  const subItem = data.maindata2.find(sub => sub.sid === (id ?? 111));

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  if (loading) {
    return (
      <div id="loader" className="fixed inset-0 w-screen h-screen flex justify-center items-center z-50 bg-black">
      <div id="loader-box" className="flex w-screen h-screen justify-center items-center absolute">
        <div className="text-center">
          <div className="text-white text-4xl sm:text-6xl md:text-7xl font-bold mb-4 animate-pulse">
            LaCleo Digital
          </div>
          <div className="w-32 h-1 bg-white/30 rounded-full mx-auto overflow-hidden flex flex-col">
            <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
          </div>
          <div className="w-full h-full   text-white">B2B lead generation specialist</div>
        </div>
      </div>
    </div>
    );
  }

  const subItems = data.maindata2.filter(sub => sub.id === (id ?? 0));
  const text = mainItem?.text || subItem?.text;

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
        <meta property="og:image" content="/public/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lacleodigital.com/" />
        <meta property="twitter:title" content="LaCleo Digital - B2B Lead Generation Specialists" />
        <meta property="twitter:description" content="Transform your business with strategic virtual marketing campaigns and in-depth data analysis." />
        <meta property="twitter:image" content="/public/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" />
      </Helmet>
      
      {/* Navbar */}
      <section className="sticky top-0 z-50">
        <Navbar />
      </section>

      {/* Header Section */}
      <header className="text-center py-8 space-y-2 mt-5 bg-[#4361ee]">
        <h2 className="text-3xl text-white font-bold">
          {mainItem?.promo || subItem?.promo}
        </h2>
        <h6 className="text-lg text-white flex flex-wrap justify-center gap-2">
  {(
    Array.isArray(mainItem?.keywords)
      ? mainItem?.keywords
      : Array.isArray(subItem?.keywords)
        ? subItem?.keywords
        : mainItem?.keywords || subItem?.keywords
          ? [mainItem?.keywords || subItem?.keywords]
          : []
  ).map((kw, idx) => (
    <span key={idx} className="bg-white/20 px-2 py-0.5 rounded text-white">
      {kw}
    </span>
  ))}
</h6>
      </header>

      {/* Section Heading & Paragraph */}
      <section className="container mx-auto px-4 py-8 sm:py-12 space-y-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-center">
          {mainItem?.secheading || subItem?.secheading}
        </h3>
        <p className="text-center text-base sm:text-lg">
          {mainItem?.secpara || subItem?.secpara}
        </p>
      </section>

      {/* Trusted By Logos */}
      <section className="bg-[#4361ee] py-10 px-6">
        <h3 className="text-center text-xl text-white font-semibold mb-5">
          Trusted by some of the biggest brands
        </h3>
        <div className="flex justify-center items-center gap-4 flex-wrap ">
          {[
            "binmile", "edureka", "isntamart", "lambdatest", "link", "livespace"
          ].map((logo, idx) => (
            <span key={idx} className="w-28 bg-[#4361ee] flex justify-center items-center">
              <img src={`/img/${logo}-removebg-preview.png`} alt={logo} />
            </span>
          ))}
        </div>
      </section>

      {/* Rich Text Content Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 leading-relaxed content-center prose max-w-4xl">
        <div
          dangerouslySetInnerHTML={{ __html: text || "<p>No content available.</p>" }}
        />
      </section>

      {/* Sub Items Display */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
        {subItems.map((item) => {
          const subImg = data.mainimg.find(img => img.id === item.sid);
          const subSlug = item.promo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          return (
            <div
              key={item.sid}
              className="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full max-w-sm mx-auto"
            >
              <button
                onClick={() => {
                  dispatch(setId(item.sid));
                  navigate(`/show/${subSlug}`);
                  window.scrollTo(0, 0);
                }}
                className="flex flex-col items-center gap-4 w-full no-underline bg-transparent border-0 cursor-pointer"
              >
                <div className="rounded-full h-20 w-20 overflow-hidden ">
                  <img
                    src={subImg?.imageurl }
                    alt={item.promo}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                <h3 className="text-xl font-semibold text-black">{item.promo}</h3>
                <p className="text-sm px-2 text-gray-700">{item.heading}</p>

                                 <span className="text-black px-4 py-1.5 hover:text-white hover:bg-black rounded-full text-sm font-medium transition-all border border-black">
                   Learn more →
                 </span>
               </button>
            </div>
          );
        })}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Show;
