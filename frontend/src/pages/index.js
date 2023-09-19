// pages/index.js

import Header from '../components/header';
import TourismCarousel from '../components/TourismCarousel';
import PartnerCarousel from '../components/PartnerCarousel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />

      <TourismCarousel />
      
      <PartnerCarousel />
      
      <Footer />
    </div>
  );
}
