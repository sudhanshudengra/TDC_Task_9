
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PartnerCarousel = () => {
  const partners = [
    { name: 'IndiGo', logo: '/indigo-logo.jpg' },
    { name: 'Vistara', logo: '/vistara-logo.webp' },
    { name: 'MakeMyTrip', logo: '/makemytrip-logo.jpg' },
    { name: 'Air Canada', logo: '/aircanada-logo.jpg' },
    { name: 'Air India', logo: '/airindia-logo.jpg' },
    { name: 'Visa', logo: '/visa-logo.jpg' },
    { name: 'Google Flights', logo: '/googleflights-logo.jpg' },
    { name: 'Skyscanner', logo: '/skyscanner-logo.jpg' },
  ];

  return (
    <div className="bg-gray-100 md:p-4">
      <div className="max-w-screen-xl md:mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600 underline">Our Special Partners</h2>
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2500}
        >
          {partners.map((partner, index) => (
            <div key={index} className='rounded-3xl md:mx-80'>
              <img src={partner.logo} alt={partner.name} className=" object-cover" />
              {/* <p className="text-center">{partner.name}</p> */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PartnerCarousel;
