import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/uzoNavbar/UzoNavbar.tsx';
import CityHeader from './components/cityHeader/CityHeader';
import HeroBanner from './components/heroBanner/HeroBanner.tsx';
import PremiumSection from './components/premiumSection/PremiumSection.tsx';
import PopularDestination from './components/popularDestination/PopularDestination.tsx';
import Footer from './components/footer/Footer.tsx';

const App = () => {
  return (

    // <div>
    // <div className="App">
    <>
      <Navbar />
      <CityHeader />
      <HeroBanner />
      <PremiumSection />
      <PopularDestination />
      <Footer />
    </>
    // </div>
  )
}

export default App
