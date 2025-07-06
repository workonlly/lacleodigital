import { useEffect, useState, useRef } from 'react';
import * as XLSX from 'xlsx';

interface Review {
  Name: string;
  Region: string;
  Review: string;
}

export default function ClientReviewsSwiper() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const res = await fetch('/Client.csv');
        const text = await res.text();

        const workbook = XLSX.read(text, { type: 'string' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data: Review[] = XLSX.utils.sheet_to_json(sheet, { defval: '' });

        // Duplicate the data for infinite scrolling
        const duplicatedData = [...data, ...data, ...data];
        setReviews(duplicatedData);
      } catch (err) {
        console.error('❌ Error loading CSV:', err);
      }
    };

    fetchCSV();
  }, []);

  useEffect(() => {
    if (scrollerRef.current && reviews.length > 0) {
      const scroller = scrollerRef.current;
      
      console.log('Starting animation with', reviews.length, 'reviews');
      
      // Clean up any existing animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Simple, direct animation
      let position = 0;
      const speed = 1; // pixels per frame
      
      const move = () => {
        position += speed;
        
        // Calculate when to reset (one full set of cards)
        const oneSetWidth = (320 + 16) * (reviews.length / 3);
        
        if (position >= oneSetWidth) {
          position = 0;
        }
        
        // Apply the transform
        scroller.style.transform = `translateX(-${position}px)`;
        
        // Continue the animation
        animationRef.current = requestAnimationFrame(move);
      };

      // Start immediately
      move();

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [reviews]);

  const generateRandomStars = (min = 3, max = 5) => {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    return '⭐'.repeat(count);
  };

  if (reviews.length === 0) {
    return (
      <div className="w-full py-10 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-gray-600">Loading reviews...</p>
      </div>
    );
  }

  return (
    <div className="w-full py-10 bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Infinite Scroller Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-purple-50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Container */}
        <div
          ref={scrollerRef}
          className="flex gap-4 pointer-events-none"
          style={{ width: 'max-content' }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              {/* Star Rating */}
              <div className="text-yellow-500 text-xl mb-3">
                {generateRandomStars()}
              </div>
              
              {/* Review Content */}
              <div className="mb-4">
                <p className="text-gray-700 italic leading-relaxed">
                  "{review.Review || 'Great service and professional team!'}"
                </p>
              </div>
              
              {/* Client Info */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800 text-lg">
                  {review.Name || 'Anonymous Client'}
                </p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {review.Region || 'Global'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
