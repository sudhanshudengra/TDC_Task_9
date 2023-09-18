

import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const TourismCarousel = () => {

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-600 underline">World's Trending Locations</h2>
        {/* Carousel */}
        <div className="w-full max-w-xl mx-auto">
      <Carousel Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        <div>
          <img src="/image_1.jpg" alt="Tourist Place 1" />
        </div>
        <div>
          <img src="/image_2.jpg" alt="Tourist Place 2" />
        </div>
        <div>
            <img src="/image_3.jpg" alt="Tourist Place 3" />
        </div>
        <div>
            <img src="/image_4.jpg" alt="Tourist Place 4" />
        </div>
        <div>
            <img src="/image_5.jpg" alt="Tourist Place 5" />
        </div>
        <div>
            <img src="/image_6.jpg" alt="Tourist Place 6" />
        </div>
        <div>
            <img src="/image_7.jpg" alt="Tourist Place 7" />
        </div>
        <div>
            <img src="/image_8.webp" alt="Tourist Place 8" />
        </div>
        <div>
            <img src="/image_9.webp" alt="Tourist Place 9" />
        </div>
        <div>
            <img src="/image_10.webp" alt="Tourist Place 10" />
        </div>
        {/* Add more image slides */}
      </Carousel>
    </div>

        {/* Special Offers */}
<div className="mt-4">
  <h2 className="text-3xl font-semibold text-blue-500 underline">Special Offers</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Offer 1 */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Offer content */}
      <h3 className="text-lg font-semibold text-red-600">ICICI Bank - Platinum Credit Card</h3>
      <p className='text-amber-700'>0% APR for the first 12 months</p>
    </div>

    {/* Offer 2 */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Offer content */}
      <h3 className="text-lg font-semibold text-green-500">HDFC Bank - Gold Card</h3>
      <p className='text-cyan-400'>Cashback rewards on all purchases</p>
    </div>

    {/* Offer 3 */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Offer content */}
      <h3 className="text-lg font-semibold text-indigo-500">CITI Bank - Black Gold Card</h3>
      <p className='text-teal-600'>10% instant discount</p>
    </div>


  </div>
</div>

      </div>
    </div>
  );
};

export default TourismCarousel;
