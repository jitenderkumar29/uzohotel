import { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBed, FaUser } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HotelSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(2025, 3, 2), // Wed, 2 Apr 2025
    new Date(2025, 3, 3)  // Thu, 3 Apr 2025
  ]);
  const [startDate, endDate] = dateRange;
  const [showRoomGuestSelector, setShowRoomGuestSelector] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search-section">
          <div className="search-input-group">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by city, hotel"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="divider"></div>

        <div className="search-section">
          <button className="filter-button">
            <FaMapMarkerAlt className="filter-icon" />
            <span>Near me</span>
          </button>
        </div>

        <div className="divider"></div>

        <div className="search-section">
          <div className="date-picker-container">
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(dates) => setDateRange(dates)}
              dateFormat="EEE, d MMM"
              className="date-range-input"
            />
          </div>
        </div>

        <div className="divider"></div>

        <div className="search-section">
          <div className="room-guest-selector" onClick={() => setShowRoomGuestSelector(!showRoomGuestSelector)}>
            <div className="room-guest-item">
              <FaBed className="selector-icon" />
              <span>{roomCount} Room</span>
            </div>
            <div className="room-guest-item">
              <FaUser className="selector-icon" />
              <span>{guestCount} Guest</span>
            </div>
            <div className="room-guest-item">
              <FaUser className="selector-icon" />
              <span>{childrenCount} Children</span>
            </div>
          </div>
        </div>

        <button className="search-button">
          <FaSearch className="search-button-icon" />
          <span>Search</span>
        </button>
      </div>

      {showRoomGuestSelector && (
        <div className="room-guest-popup">
          <div className="counter">
            <span>Rooms</span>
            <div className="counter-controls">
              <button onClick={() => setRoomCount(Math.max(1, roomCount - 1))}>-</button>
              <span>{roomCount}</span>
              <button onClick={() => setRoomCount(roomCount + 1)}>+</button>
            </div>
          </div>
          <div className="counter">
            <span>Guests</span>
            <div className="counter-controls">
              <button onClick={() => setGuestCount(Math.max(1, guestCount - 1))}>-</button>
              <span>{guestCount}</span>
              <button onClick={() => setGuestCount(guestCount + 1)}>+</button>
            </div>
          </div>
          <div className="counter">
            <span>Children</span>
            <div className="counter-controls">
              <button onClick={() => setChildrenCount(Math.max(1, guestCount - 1))}>-</button>
              <span>{guestCount}</span>
              <button onClick={() => setChildrenCount(guestCount + 1)}>+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// CSS Styles
const styles = `
  .search-container {
    position: relative;
    // max-width: 800px;
    margin: 20px auto;
    font-family: 'Segoe UI', sans-serif;
  }

  .search-bar {
    display: flex;
    align-items: center;
    background: white;
    border-radius: 30px;
    padding: 5px 5px 5px 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    gap: 5px;
    
  }

  /* Specific styles for the input section */
  .search-input-section {
    flex: 1;
    min-width: 200px;
  }

  .search-section {
    padding: 8px 0;
  }

  .search-input-group {
    display: flex;
    align-items: center;
    min-width: 200px;
  }

  .search-icon {
    color: #888;
    margin-right: 10px;
    font-size: 16px;
  }

  .search-input {
    border: none;
    padding: 8px 0;
    font-size: 14px;
    outline: none;
    min-width: 200px;
    color: black;
  }



  /* Ensure placeholder visibility */
  .search-input::placeholder {
    color: #888;
    opacity: 1; /* Firefox */
  }

  .search-input:-ms-input-placeholder {
    color: #888; /* Internet Explorer */
  }

  .search-input::-ms-input-placeholder {
    color: #888; /* Microsoft Edge */
  }



  .divider {
    width: 1px;
    height: 30px;
    background: #eee;
  }

  .filter-button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    white-space: nowrap;
  }

  .filter-icon {
    margin-right: 8px;
    color: #ff5a5f;
    font-size: 14px;
  }

  .date-picker-container {
    padding: 0 12px;
  }

  .date-range-input {
    border: none;
    background: transparent;
    padding: 8px 0;
    width: 180px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
  }

  .room-guest-selector {
    display: flex;
    gap: 15px;
    padding: 0 12px;
    cursor: pointer;
  }

  .room-guest-item {
    display: flex;
    align-items: center;
    font-size: 14px;
    white-space: nowrap;
  }

  .selector-icon {
    margin-right: 8px;
    color: #888;
    font-size: 14px;
  }

  .search-button {
    display: flex;
    align-items: center;
    background: #ff5a5f;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 12px 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s;
    white-space: nowrap;
  }

  .search-button:hover {
    background: #e04a50;
  }

  .search-button-icon {
    margin-right: 8px;
    font-size: 14px;
  }

  .room-guest-popup {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-top: 5px;
    z-index: 10;
    width: 200px;
  }

  .counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .counter:last-child {
    margin-bottom: 0;
  }

  .counter span {
    font-size: 14px;
  }

  .counter-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .counter-controls button {
    background: #f5f5f5;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .search-bar {
      flex-wrap: wrap;
      padding: 15px;
    }

    .divider {
      display: none;
    }

    .search-section {
      width: 100%;
      margin-bottom: 10px;
    }

    .search-input {
      width: 100%;
    }

    .room-guest-popup {
      left: 0;
      right: auto;
    }
  }
`;

// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default HotelSearchBar;