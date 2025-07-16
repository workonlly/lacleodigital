import Navbar from './header';
import Footer from './footer';
import "./button.css"
import { Helmet } from 'react-helmet-async';
import useAppData from './assets/data';
import  UseBucketFiles from './assets/blogimg';
import { useState } from 'react';

function Blog() {
  const { data, loading: _appLoading } = useAppData();
  const word=data.mainkey.find((item)=>item.id==115)
  const { data: images, loading: _imagesLoading, error: _error } = UseBucketFiles();
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
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
        <h2 className="text-3xl text-white font-bold">Blog</h2>
        <h6 className="text-lg text-white text-gray-500">Services &nbsp;•&nbsp; Digital Marketing &nbsp;•&nbsp; Social Media Marketing</h6>
      </header>
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
      {/* blog */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.blog && Array.isArray(data.blog) ? data.blog.map((item, index) => (
              <article
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => { setSelectedPost(item); setModalOpen(true); }}
              >
                {images && images[index] && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={images[index]}
                      alt={item.heading}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                {item.image && (
                  <div className="w-full h-32 flex items-center justify-center mb-3">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="h-full rounded object-contain"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {item.heading}
                  </h3>
                  <p
                    className="text-gray-600 text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                  <div className="mt-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            )) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">Loading blog posts...</p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Modal for full blog post */}
      {modalOpen && selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl h-[90vh] overflow-y-auto p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedPost.heading}</h2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.description }}
            />
          </div>
        </div>
      )}
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
