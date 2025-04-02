import { FaApple, FaGooglePlay, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  // Popular destinations data
  const popularDestinations = [
    "Hotels near me", "Hotels in Goa", "Hotels in Puri", "Hotels in Mahabaleshwar",
    "Hotels in Jajpur", "Hotels in Shimla", "Hotels in Manali", "Hotels in Udaipur",
    "Hotels in Mussoorie", "Hotels in Pondicherry", "Hotels in Delhi", "Hotels in Mumbai"
  ];

  const internationalDestinations = [
    "OYO Hotel UK", "OYO Hotel USA", "OYO Hotel Mexico", "OYO Hotel Brasil",
    "Hotels in Japan", "OYO Hotel Indonesia", "OYO Vacation Homes in Europe"
  ];

  return (
    <footer className="oyo-footer">
      <div className="footer-Title-Main">
        <h1 style={{ display: 'inline' }} className="footer-title">OYO - World's leading chain of hotels and homes</h1>
        <h1 style={{ display: 'inline' }} className="footer-subtitle">Join our network and grow your business!
        </h1>
      </div>
      {/* Combined Top and Middle Section */}
      <hr />
      <div className="footer-main">
        <div className="container">
          <div className="footer-main-content">

            {/* Right Side - Links */}
            <div className="footer-links">
              <div className="links-column">
                <h3 className="column-title">About Us</h3>
                <ul>
                  <li><a href="#">Teams / Careers</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>

              <div className="links-column">
                <h3 className="column-title">Official OYO Blog</h3>
                <ul>
                  <li><a href="#">Investor Relations</a></li>
                  <li><a href="#">OYO Circle</a></li>
                  <li><a href="#">OYO Frames</a></li>
                </ul>
              </div>

              <div className="links-column">
                <h3 className="column-title">Terms and conditions</h3>
                <ul>
                  <li><a href="#">Guest Policies</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Trust And Safety</a></li>
                </ul>
              </div>

              <div className="links-column">
                <h3 className="column-title">Cyber Security Awareness</h3>
                <ul>
                  <li><a href="#">Responsible Disclosure</a></li>
                  <li><a href="#">Advertise your Homes</a></li>
                  <li><a href="#" className="highlight-link">List your property</a></li>
                </ul>
              </div>
            </div>

            {/* Left Side - Brand and Download */}
            <div className="brand-download">
              {/* <h1 className="footer-title">OYO - World's leading chain of hotels and homes</h1>
              <h2 className="footer-subtitle">Download OYO app for exciting offers.</h2> */}

              <div className="download-buttons">
                <a href="#" className="download-btn">
                  <FaApple className="store-icon" />
                  <div>
                    <span>Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </a>
                <a href="#" className="download-btn">
                  <FaGooglePlay className="store-icon" />
                  <div>
                    <span>Get it on</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="destinations-section">
        <div className="container">
          <h3 className="destinations-title">
            <FaMapMarkerAlt className="location-icon" />
            Popular Destinations
          </h3>
          <div className="destinations-grid">
            {popularDestinations.map((destination, index) => (
              <a href="#" key={index} className="destination-link">{destination}</a>
            ))}
          </div>
        </div>
      </div>

      {/* International Destinations */}
      <div className="international-section">
        <div className="container">
          <div className="destinations-grid">
            {internationalDestinations.map((destination, index) => (
              <a href="#" key={index} className="destination-link">{destination}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">2025 © Balfour Beatty</p>
        </div>
      </div>
    </footer>
  );
};

// CSS Styles
const styles = `
  .oyo-footer {
    background-color: #f8f8f8;
    color: #333;
    font-family: 'Segoe UI', sans-serif;
    font-size: 14px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Main Content Section */
  .footer-main {
    padding: 20px 0;
    // padding: 40px 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .footer-main-content {
    display: flex;
    gap: 40px;
  }

  .brand-download {
    flex: 1;
    max-width: 350px;
  }

  .footer-title {
    // font-size: 24px;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0px;
    // margin-bottom: 10px;
    color: #222;
  }

  .footer-subtitle {
    font-size: 20px;
    // font-size: 18px;
    font-weight: 700;
    margin-bottom: 0px;
    // margin-bottom: 25px;
    color: #222;
    margin-left: 20px;
  }

  .download-buttons {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .download-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 10px 15px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    width: 200px;
    
  }

  .download-btn:hover {
    border-color: #ff5a5f;
  }

  .download-btn div {
    display: flex;
    flex-direction: column;
  }

  .download-btn span {
    font-size: 12px;
  }

  .download-btn strong {
    font-size: 16px;
    font-weight: 600;
  }

  .store-icon {
    font-size: 24px;
    color: #333;
  }

  /* Links Section */
  .footer-links {
    // flex: 4;
    display: flex;
    flex-wrap: wrap;
    // gap: 30px;
    flex-direction: row;
  }

  .links-column {
    min-width: 150px;
  }

  .links-column h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #222;
  }

  .links-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .links-column a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .links-column a:hover {
    color: #ff5a5f;
  }

  .highlight-link {
    color: #ff5a5f !important;
    font-weight: 600;
  }

  /* Destinations Section */
  .destinations-section, .international-section {
    padding: 25px 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .destinations-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    margin-bottom: 15px;
    color: #222;
  }

  .location-icon {
    color: #ff5a5f;
  }

  .destinations-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;
  }

  .destination-link {
    color: #666;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s ease;
  }

  .destination-link:hover {
    color: #ff5a5f;
  }

  /* Bottom Section */
  .footer-bottom {
    padding: 20px 0;
    text-align: center;
  }

  .copyright {
    color: #888;
    font-size: 13px;
    margin: 0;
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .footer-main-content {
      flex-direction: column;
      gap: 30px;
    }

    .brand-download {
      // max-width: 100%;
    }

    .download-buttons {
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    .footer-title {
      font-size: 20px;
    }

    .footer-subtitle {
      font-size: 16px;
    }

    .footer-links {
      gap: 10px;
    }

    .destinations-grid {
      gap: 10px 15px;
    }

    .destination-link {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    .download-buttons {
      flex-direction: column;
    }

    .download-btn {
      width: 100%;
    }
  }
`;

// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Footer;