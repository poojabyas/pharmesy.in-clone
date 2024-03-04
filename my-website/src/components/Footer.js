// Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
          <div className="footer-section">
        <h3>Company</h3>
        <ul >
          <li><a href="/" >About Us</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href='/'>Partner With pharmeasy</a></li>
          <li><a href='/'>Sall at pharmeasy</a></li>
        </ul>
    
        <h3>Our Services</h3>
        <ul>
          <li><a href="/">Order Medicine</a></li>
          <li><a href="/">Healthcare Products</a></li>
          <li><a href="/">Lab Tests</a></li>
          <li><a href='/'>Fine Nearest Collection Center</a></li>
          
        </ul>
      </div> 
     
      <div className="footer-section">
        <h3>Featured Categories</h3>
        <ul>
        <li><a href="/">Top Products</a></li>
          <li><a href="/">Elderly Care</a></li>
          <li><a href="/">Personal Care</a></li>
          <li><a href="/">Healthcare Devices</a></li>
          <li><a href="/">Helloalth Food and Drinks</a></li>
          <li><a href="/">Skin Care</a></li>
          <li><a href="/">Mother and Baby Care</a></li>
          <li><a href="/">Accessories and Wearables</a></li>
          <li><a href="/">Fitness Supplements</a></li>
          <li><a href="/">Ayurvedic Care</a></li>
          <li><a href="/">Sexual Wellness</a></li>
          <li><a href="/">Mega Clearance Sale</a></li>
          <li><a href="/">Daibatic Care</a></li>
          <li><a href="/">Health Condition</a></li>
          <li><a href="/">Winter Store</a></li>
          <li><a href="/">Treanding Products</a></li>
          
          {/* Add categories */}
        </ul>
      </div>
      <div className="footer-section">
        <h3>Need Help</h3>
        <ul>
          <li><a href="/">Browse All Medicines</a></li>
          <li><a href="/">Browse All Molecules</a></li>
          <li><a href="/">Browse All Cities</a></li>
          <li><a href='/'>Browse All Areas</a></li>
          <li><a href='/'>Browse All Stores</a></li>
          <li><a href='/'>FAQs</a></li>
        </ul>
    
        <h3>Policy info</h3>
        <ul>
          <li><a href="/">Editorial Policy</a></li>
          <li><a href="/">Private Policy</a></li>
          <li><a href="/">Vulnerability Disclouser Policy</a></li>
          <li><a href='/'>Term and Condtions</a></li>
          <li><a href="/">Customer Support Policy</a></li>
          <li><a href="/">Return Policy</a></li>
          
        </ul>
      </div> 
      
      <div className="footer-section">
        <h3>Follow us on</h3>
        <ul className="social-links">
        <li><img src="https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=32x0" alt="instagram" /></li>
        <li><img src="https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=32x0" alt="facebook" /></li>
        <li><img src="https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=32x0" alt="youTube" /></li>
        <li><img src="https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=32x0" alt="Twitter" /></li>
          {/* <li><a href="https://www.instagram.com/">Instagram</a></li>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://www.youtube.com/">Youtube</a></li>
          <li><a href="https://twitter.com/">Twitter</a></li> */}
        </ul>
      </div>
      <div className="footer-section">
        <h3>Our Payment Partners</h3>
        <ul className="payment-partners">
          <li><img src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0" alt="GPay" /></li>
          <li><img src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0" alt="Paytm" /></li>
          <li><img src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0" alt="PhonePe" /></li>
          <li><img src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0" alt="" /></li>
          <li><img src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0" alt="" /></li>
          <li><img src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0" alt="" /></li>
          <li><img src="https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0" alt="" /></li>
          <li><img src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0" alt="" /></li>
          <li><img src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0" alt="visa" /></li>
          <li><img src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0" alt="RuPay" /></li>
          
         
        </ul>
      </div>
      <div className="copyright">
        <p>© 2024 PharmEasy. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
