import React, { useRef } from "react";

const Launches = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h2>New Launches</h2>
      <p>New wellness range just for you!</p>

      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          flexWrap: "nowrap",
          gap: "30px",
          padding: "20px 0",
          width: "calc(100% - 40px)", 
        }}
        ref={containerRef}
      >
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/F62337/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-30-tablets-2-1705307308.jpg?dim=1440x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
          <p>Top Products</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-2-1707378524.jpg?dim=1440x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
          <p>Elderly Care</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/Y67472/new-i-site-plus-strip-of-10-tablets-2-1700739837.jpg?dim=1440x0' alt='personal care' style={{ width: '170px', height: '170px' }}></img>
          <p>personal Care</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=256x0' alt='heath' style={{ width: '170px', height: '170px' }}></img>
          <p>Healthcare Devices</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/U52681/pharmeasy-multivitamin-and-pharmeasy-calcium-magnesium-vitamin-d3-tablets-pack-of-260-combo-pack-6.1-1708504260.jpg?dim=1440x0' alt='food' style={{ width: '170px', height: '170px' }}></img>
          <p>Health Food and Drinks</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/L07650/durex-real-feel-condoms-pack-of-10-2-1685367850.jpg?dim=1440x0' alt='food' style={{ width: '170px', height: '170px' }}></img>
          <p>Skin Care</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/J79149/liveasy-skin-care-nail-paint-remover-120ml-2-1679553332.jpg?dim=1440x0' alt='food' style={{ width: '170px', height: '170px' }}></img>
          <p>Mother and Baby Care</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/C55755/coq-man-nutraceutical-for-adults-men-strip-of-10-tablets-2-1705398026.jpg?dim=1440x0' alt='food' style={{ width: '170px', height: '170px' }}></img>
          <p>Accessories and Wearables</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/Q13555/volini-joint-xpert-pain-relief-gel-tube-of-50gm-2-1705324367.jpg?dim=1440x0' alt='food' style={{ width: '170px', height: '170px' }}></img>
          <p>Fitness Supplements</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/U16920/baidyanath-nagpur-ashwagandha-tablet-60-tablets-immunity-and-strength-2-1677243413.jpg?dim=1440x0' alt='food' style={{ width: '170px', height: '170px' }}></img>
          <p>Health Condition</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/H63559/moov-cream-30gm-2-1679653763.jpg?dim=1440x0' alt='food' style={{ width: '170px', height: '170px' }}></img>
          <p>Winter Store</p>
        </div>
        <div>
          <img src='https://cdn01.pharmeasy.in/dam/products_otc/O57113/dabur-honey-with-20-extra-bottle-of-300gm-2-1708929109.jpg?dim=1440x0' alt='food' style={{ width: '170px', height: '170px' }}></img>
          <p>Tranding Products</p>
        </div>
      </div>
    </div>
  );
};

export default Launches;
