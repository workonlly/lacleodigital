import Navbar from './header';
import Footer from './footer';
import "./button.css"

function Blog() {
  return (
    <div>
    <section className='sticky top-5 z-50'><Navbar/></section>
      
       <header className="text-center py-8 space-y-2 mt-5 bg-[#4361ee]">
       <h2 className="text-3xl text-white font-bold">Blog</h2>
       <h6 className="text-lg text-white text-gray-500">Services &nbsp;•&nbsp; Digital Marketing &nbsp;•&nbsp; Social Media Marketing</h6>
     </header>


<section className="bg-[#4361ee] py-10 px-6">
                <h3 className="text-center text-xl text-white font-semibold mb-5">Trusted by some of the biggest brands</h3>
                <div className="flex justify-center items-center gap-4 flex-wrap wave-text">
                  <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/public/img/binmile-removebg-preview.png" alt=""/></span>
                  <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/public/img/edureka-removebg-preview.png" alt=""/></span>
                  <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/public/img/isntamart-removebg-preview.png" alt=""/></span>
                  <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/public/img/lambdatest-removebg-preview.png" alt=""/></span>
                  <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/public/img/link-removebg-preview.png" alt=""/></span>
                  <span className=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="/public/img/livespace-removebg-preview.png" alt=""/></span>
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

export default Blog
