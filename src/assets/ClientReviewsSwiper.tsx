import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import * as XLSX from 'xlsx';

interface Review {
  Name: string;
  Region: string;
  Review: string;
}

export default function ClientReviewsSwiper() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const res = await fetch('/Client.csv');
        const text = await res.text();

        const workbook = XLSX.read(text, { type: 'string' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data: Review[] = XLSX.utils.sheet_to_json(sheet, { defval: '' });

        setReviews(data);
        setLoading(false);
      } catch (err) {
        console.error('❌ Error loading CSV:', err);
        setLoading(false);
      }
    };

    fetchCSV();
  }, []);

  const generateRandomStars = (min = 3, max = 5) => {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    return '⭐'.repeat(count);
  };

  if (loading) {
    return (
      <div className="w-full py-10 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-gray-600">Loading reviews...</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="w-full py-10 text-center">
        <p className="text-gray-600">No reviews available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="w-full py-10 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="client-reviews-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 h-full">
                {/* Star Rating */}
                <div className="text-yellow-500 text-xl mb-3">
                  {generateRandomStars()}
                </div>
                
                {/* Review Content */}
                <div className="mb-4 flex-grow">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{review.Review || 'Great service and professional team!'}"
                  </p>
                </div>
                
                {/* Client Info */}
                <div className="border-t pt-4 mt-auto">
                  <p className="font-semibold text-gray-800 text-lg">
                    {review.Name || 'Anonymous Client'}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {review.Region || 'Global'}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        

      </div>
    </div>
  );
}
