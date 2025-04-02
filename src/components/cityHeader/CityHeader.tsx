import React, { useState } from 'react';
import './CityHeader.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const CityHeader = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const items = ['Bangalore', 'Chennai', 'Delhi', 'Gurgaon', 'Hyderabad', 'Kolkata', 'Mumbai', 'Noida', 'Pune', 'Agra', 'Bareilly', 'All Cities'];
  const handleCity = (message: string) => {
    console.log(message);
  };

  return (
    <header className="city-header">
      <div className="city-container">
        <div className="city-list">


          <ul style={{ listStyleType: "none", display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '0rem' }} >
            {items.map((item, index) => (
              // <div  >
              <li key={index} className="city-item" onMouseEnter={() => setIsEnabled(false)}
                onMouseLeave={() => setIsEnabled(true)} onClick={() => handleCity(item)} style={{ cursor: 'pointer' }}>{item}
                <MdKeyboardArrowDown />
                {/* {isEnabled ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowUp />
                  )} */}
              </li>
              // </div>
            ))}
          </ul>


          {/* <div className="city-item">Chennai <span><MdKeyboardArrowUp /></span></div>
                <div className="city-item">Delhi <span><MdKeyboardArrowUp /></span></div>
                <div className="city-item">Gurgaon <span><MdKeyboardArrowUp /></span></div>
                <div className="city-item">Hyderabad <span><MdKeyboardArrowUp /></span></div>
                <div className="city-item">Kolkata <span><MdKeyboardArrowUp /></span></div>
                <div className="city-item">Mumbai <span><MdKeyboardArrowUp /></span></div>
                <div className="city-item">Noida <span><MdKeyboardArrowUp /></span></div>
                <div className="city-item">Pune <span><MdKeyboardArrowUp /></span></div> */}
          {/* <div className="city-item all-cities">All Cities</div> */}
        </div>
      </div>
    </header>
  );
};

export default CityHeader;