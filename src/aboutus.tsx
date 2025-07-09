import Navbar from './header';
import Footer from './footer';
import "./button.css"
import { Helmet } from 'react-helmet-async';
import useAppData from './assets/data';

function Aboutus() {
  const { data, loading: _loading } = useAppData()
  const word=data.mainkey.find((item)=>item.id==114)
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
      
      <section className='sticky top-5 z-50'><Navbar/></section>
        
      <header className="text-center py-12 space-y-2 bg-[#4361ee] px-4">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">About Us</h2>
  <h6 className="text-lg sm:text-xl text-gray-200 font-medium">•&nbsp; Who We Are</h6>
</header>


<section className="px-6 py-12 max-w-6xl mx-auto space-y-6 text-center">
  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">From Planning to Hyper Growth</h3>
  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
    LaCleo Digital is a leading agency specializing in digital marketing and technology services. With a passion for innovation and a commitment to delivering exceptional results, we empower businesses to thrive in the digital landscape.
  </p>
  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
    Our comprehensive suite of services includes <strong>Digital Marketing, Digital Experience Testing, Data Research, Integration Engineering, E-Commerce Consulting, Customer Support Services</strong>, and more.
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

                <section className="px-6 py-16 max-w-6xl mx-auto space-y-12 text-gray-700 leading-relaxed text-justify">
  <p>
    At LaCleo Digital, we understand that every business is unique. That’s why we take a personalized approach to our services—tailoring strategies to meet each client’s specific needs. We believe in long-term partnerships based on trust, collaboration, and mutual success.
  </p>
  <p>
    Our team consists of industry experts who stay ahead of the latest trends and technologies. With deep knowledge and vast experience, we provide strategic insights and implement cutting-edge solutions that deliver measurable results.
  </p>

  <section className="space-y-2">
    <h3 className="text-xl sm:text-2xl font-bold text-[#4361ee]">📈 Results-Driven Approach</h3>
    <p>
      We are committed to delivering impactful, measurable results. Whether it’s increasing brand visibility, boosting traffic, improving conversion rates, or enhancing customer satisfaction—we align our strategy to your goals.
    </p>
  </section>

 <section className="space-y-2">
    <h3 className="text-xl sm:text-2xl font-bold text-[#4361ee]">👥 Client-Centric Focus</h3>
    <p>
      We prioritize understanding your business, your audience, and your industry. This allows us to build strategies that resonate, differentiate your brand, and drive meaningful engagement.
    </p>
  </section>


  <section className="space-y-2">
    <h3 className="text-xl sm:text-2xl font-bold text-[#4361ee]">🤝 Collaboration & Transparency</h3>
    <p>
      We believe in the power of collaboration. Our team works closely with clients—maintaining open communication, sharing regular updates, and ensuring full transparency throughout the project lifecycle.
    </p>
  </section>


  <section className="space-y-2">
    <h3 className="text-xl sm:text-2xl font-bold text-[#4361ee]">🚀 Innovation & Technology</h3>
    <p>
      We harness the latest tools, creative methods, and data-driven insights to deliver breakthrough solutions. Our approach merges creativity with industry best practices to keep your business ahead of the competition.
    </p>
  </section>

  
  <section className="space-y-2">
    <h3 className="text-xl sm:text-2xl font-bold text-[#4361ee]">💬 Exceptional Customer Support</h3>
    <p>
      Our clients are our top priority. We provide responsive, reliable support—ensuring your questions are answered and your concerns are addressed promptly at every stage.
    </p>
  </section>
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

export default Aboutus
