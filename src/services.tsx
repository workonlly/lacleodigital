 import useAppData from "./assets/data"
import Navbar from './header';
import Footer from './footer';
import "./button.css"
import { Link } from 'react-router-dom';
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

  

  if (loading) return <p>Loading data...</p>
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
                  <div className="flex justify-center items-center gap-4 flex-wrap wave-text">
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

    return (
      <div
        key={item.id}
        className="w-full max-w-4xl p-6 border border-gray-200 rounded-xl space-y-6 shadow-sm"
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
            return (
              <Link
                key={child.sid}
                to={`/show?id=${child.sid}`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-gray-300 transition duration-200"
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
              </Link>
            );
          })}
        </div>

        {/* Centered Button */}
        <div className="pt-4 text-center">
          <Link
            to={`/show?id=${item.id}`}
            className="inline-block text-sm font-medium text-[#4361ee] hover:underline"
          >
            View full details →
          </Link>
        </div>
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
