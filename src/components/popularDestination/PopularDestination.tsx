import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PopularDestination = () => {
  const destinations = [
    {
      name: "New Delhi",
      code: "DELHI",
      properties: 4688,
      image: "./src/assets/delhiindiagate.jpg"
    },
    {
      name: "Mumbai",
      code: "RAHARABITRA",
      properties: 1766,
      image: "./src/assets/mumbaitaj.jpg"
    },
    {
      name: "Goa",
      code: "GOA",
      properties: 4728,
      image: "./src/assets/goabeach.jpg"
    },
    {
      name: "Chennai",
      code: "Tamil Nadu",
      properties: 1401,
      image: "./src/assets/chennai.jpeg"
    },
    {
      name: "Noida",
      code: "uttar Pradesh",
      properties: 1401,
      image: "./src/assets/noidamall.jpg"
    }
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="destinations-slider-container">
      <h2 className="section-title">Popular Destinations</h2>

      <div className="slider-wrapper">
        <button className="nav-button left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="destinations-slider" ref={sliderRef}>
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <div className="card-image-container">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image"
                />
              </div>
              <div className="card-content">
                <h3 className="city-name">{destination.name}</h3>
                <p className="city-code">{destination.code}</p>
                <div className="properties-count">
                  {destination.properties.toLocaleString()} Properties →
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
// CSS Styles
const styles = `
  .destinations-slider-container {
    max-width: 1200px;
    margin: 10px auto;
    padding: 0 20px;
    font-family: 'Segoe UI', sans-serif;
    position: relative;
  }

  .section-title {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
    // text-align: center;
  }

  .slider-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .destinations-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 20px;
    padding: 10px 0;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }

  .destinations-slider::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }

  .destination-card {
    flex: 0 0 280px;
    scroll-snap-align: start;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .destination-card:hover {
    transform: translateY(-5px);
  }

  .card-image-container {
    height: 180px;
    overflow: hidden;
  }

  .destination-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .destination-card:hover .destination-image {
    transform: scale(1.05);
  }

  .card-content {
    padding: 20px;
  }

  .city-name {
    font-size: 20px;
    margin: 0 0 5px 0;
    color: #222;
  }

  .city-code {
    font-size: 14px;
    color: #666;
    margin: 0 0 15px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .properties-count {
    font-size: 16px;
    color: #ff5a5f;
    font-weight: 600;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 2;
    transition: all 0.3s ease;
  }

  .nav-button:hover {
    background: #ff5a5f;
    color: white;
  }

  .left {
    left: -20px;
  }

  .right {
    right: -20px;
  }

  @media (max-width: 768px) {
    .nav-button {
      display: none;
    }

    .destinations-slider {
      padding: 10px 20px;
    }

    .destination-card {
      flex: 0 0 85%;
    }
  }
`;

// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


export default PopularDestination
