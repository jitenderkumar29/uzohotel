import React from 'react'
import './HeroBanner.css'
import HotelSearchBar from '../hotelSearchBar/HotelSearchBar'

function HeroBanner() {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '400px', overflow: 'hidden', marginTop: '-15px',

    }}>
      <img src="./src/assets/banner1.jpg" alt="Hero banner" style={{
        width: '100%', height: '100%', objectFit: 'cover'
      }}
      />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center',
        // color: 'white',
        // textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        <h2>Discover Premium Luxury Hotels Across 20+ Countries</h2 >
        {/* <p>Discover amazing places</p> */}

        <HotelSearchBar />

        {/* <div className="search-container">
          <form className="search-form">
            <input type="text" className="search-input" placeholder="Search by cities..." />
            <button type="submit" className="guest-room">
              1 Guest-1 Room
            </button>
            <button type="submit" className="search-bar-button">
              Search
            </button>
          </form>
        </div> */}

        {/* <button type="button" className="near-me-btn">
              <i className="fas fa-map-marker-alt"></i> 
              Nearby
            </button> */}

        {/* <input type="date" id="dateRange" name="dateRange" className="date-range-picker" /> */}
        {/* <input type="date" className="date-picker" id="dateRange" placeholder="From date" />
            <input type="date" className="date-picker" id="dateRange" placeholder="To date" /> */}
        {/* <i className="fas fa-search"></i>  */}



        {/* <div className="search-container"> */}

        {/* <div className="search-container">
            <div className="search-bar">
              <input type="text" className="search-item location" placeholder='Search City' />
              <button className="search-item near-me">Near me</button>
              <div className="search-item dates">
                <input type="date" className="search-item dates" name="date" /> –
                <input type="date" className="search-item dates" name="date" /></div>
              <div className="search-item">1 Room, 1 Guest</div>
              <button className="search-button">Search</button>

              <div className="search-item location">
              </div>
              <div className="search-item near-me">Near me</div>
              <input type="date" className="search-item dates" name="date" />
              <div className="search-item dates">Tue, 1 Apr – Wed, 2 Apr</div>

            </div>
          </div> */}


        {/* <button style={{
          padding: '10px 20px',
          backgroundColor: '#ff5722',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Book Now
        </button> */}
      </div>
    </div>
  )
}

export default HeroBanner
