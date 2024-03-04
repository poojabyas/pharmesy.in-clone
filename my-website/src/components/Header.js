import React from 'react';
import { Link } from 'react-router-dom';
import LoginPopup from './Login';


const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid black', position: 'fixed', width: '100%', top: 0, backgroundColor: '#fff', zIndex: 1000 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" alt="PharmEasy Logo" style={{ height: '40px', marginRight: '20px' }} />
        </div>
        <div>
          <p>Express delivery to <br/> 400001 Mumbai</p>
        </div>
      </div>
      <div style={{ marginRight: '70px', justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
        <button style={{ marginRight: '50px', width: '150px', height: '40px', textDecoration: 'none' }}>Download App</button>
        <span style={{ marginRight: '20px', cursor: 'pointer' }}>
          <LoginPopup/>
        </span>
        <Link to='/offers' style={{ textDecoration: 'none', marginRight: '20px' }}>Offers</Link>
        <Link to='/cart' style={{ textDecoration: 'none' }}>Cart</Link>
      </div>
      
    </div>
  );
};

export default Header;
