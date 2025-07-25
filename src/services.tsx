 import useAppData from "./assets/data"
import Navbar from './header';
import Footer from './footer';
import "./button.css"
import { useAppDispatch } from './store/hooks';
import { setId } from './store/selectedIdSlice';
import { useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function Services() {

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
  const { data, loading } = useAppData()
  const word=data.mainkey.find((item)=>item.id==112)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  

  if (loading) {
    return (
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
    );
  }
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
        
         <header className="text-center py-8 space-y-2 mt-5 bg-[#4361ee]">
         <h2 className="text-3xl text-white font-bold">Services</h2>
         <h6 className="text-lg text-white text-gray-500">Services &nbsp;•&nbsp; Digital Marketing &nbsp;•&nbsp; Social Media Marketing</h6>
       </header>
     
     
          <section className="px-6 py-12 max-w-5xl mx-auto space-y-4 ">
         <h3 className="text-2xl font-semibold text-center">LaClеo Digital: Your Idеal Partnеr for Social Mеdia Markеting</h3>
         <p>
           In today’s digital landscapе, Social Mеdia Markеting has bеcomе an indispеnsablе tool for businеssеs to rеach and еngagе thеir targеt audiеncе. LaClеo Digital helps you stay ahead with tailored strategies and deep expertise.
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
    
                <div className="flex flex-col gap-12 px-6 py-12 bg-white items-center">
  {data.maindata.map((item) => {
    const children = data.maindata2.filter((tab) => tab.id === item.id);
    const mainImg = data.mainimg.find((img) => img.id === item.id);
    const slug = item.promo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    return (
      <div
        key={item.id}
        className="w-full max-w-4xl p-6 border border-gray-200 rounded-xl space-y-6 shadow-sm"
      >
       <button
         onClick={() => {
           dispatch(setId(item.id));
           navigate(`/show/${slug}`);
           window.scrollTo(0, 0);
         }}
         className="w-full text-left"
         style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
       >
        {/* Parent Info */}
        <div className="flex items-center gap-4">
          {mainImg && (
            <img
              src={mainImg.imageurl}
              alt={item.promo}
              className="w-14 h-14 rounded-full object-cover"
            />
          )}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.promo}</h3>
            <p className="text-sm text-gray-600">{item.heading}</p>
          </div>
        </div>

        {/* Sub Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {children.map((child) => {
            const childImg = data.mainimg.find((img) => img.id === child.sid);
            const childSlug = child.promo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            return (
              <button
                key={child.sid}
                onClick={() => {
                  dispatch(setId(child.sid));
                  navigate(`/show/${childSlug}`);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-gray-300 transition duration-200 w-full text-left"
                style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
              >
                {childImg && (
                  <img
                    src={childImg.imageurl}
                    alt={child.promo}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">{child.promo}</h4>
                  <p className="text-xs text-gray-600">{child.heading}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Centered Button */}
        <div className="pt-4 text-center">
          <button
            onClick={() => {
              dispatch(setId(item.id));
              navigate(`/show/${slug}`);
              window.scrollTo(0, 0);
            }}
            className="inline-block text-sm font-medium text-[#4361ee] hover:underline bg-transparent border-0 cursor-pointer"
          >
            Learn more
          </button>
        </div>
        </button>
      </div>
    );
  })}
</div>



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

export default Services
