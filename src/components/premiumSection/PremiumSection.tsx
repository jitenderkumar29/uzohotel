import React from 'react';
import uzoImage from '../../assets/premium_section4.jpg'; // Adjust path as needed
import './PremiumSection.css';

const PremiumSection = () => {
  return (
    <div className="hero-container">
      <img
        src={uzoImage}
        alt="Luxury hotel"
        className="hero-image"
      />
      <div className="hero-content">
        <p>Company Serviced</p>
        <h2>India's no 1 premium value hotels</h2>
        <button className="booking-btn">Book Now</button>
      </div>
    </div>
    // <div className="premium-card">
    //   <div className="image-container">
    //     <img
    //       src={uzoImage}
    //       alt="Premium hotel section"
    //       className="premium-image"
    //     />
    //     <div className="text-overlay">
    //       <p>Company Serviced</p>
    //       <h3>India's no 1 premium value hotels</h3>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PremiumSection;