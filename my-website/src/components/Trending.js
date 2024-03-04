import React, { useRef } from 'react';

const Trending = () => {
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
        <h1>Trending Near You</h1>
        <p>Popular in your city </p>
        
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={scrollLeft}>&lt;</button>
        <div
          ref={containerRef}
          style={{
            display: 'flex',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            gap: '30px',
            padding: '20px 0',
            width: 'calc(100% - 40px)'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <img src='https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=1440x0' alt='img' style={{ width: '170px', height: '170px' }} />
            <p>Liveasy wellness Calcium magnesium...</p>
            <h5>₹365.39(39%)</h5>
          </div>
          <div style={{ textAlign: 'center' }}>
        <img src='https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1698385993.jpg?dim=1440x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
        <p>Everherb karela jamun juice..</p>
            <h5>₹207.48(48%)</h5>
        </div>

        <div style={{ textAlign: 'center' }}>
        <img src='https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1440x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
        <p>Shelcal 500mg Strip Of 15 Tablets</p>
            <h5>₹132.79(8%)</h5>
        </div>
        
        <div style={{ textAlign: 'center' }}>
        <img src='https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1440x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
        <p>Evion 400mg Strip Of 20 Capsule</p>
            <h5>₹72.66(8%)</h5>
        </div>
        
        <div style={{ textAlign: 'center' }}>
        <img src='https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1690272738.jpg?dim=1440x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
        <p>Pharmeasy Pill Box Organizer</p>
            <h5>₹254.49(49%)</h5>
        </div>
        
        <div style={{ textAlign: 'center' }}>
        <img src='https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
        <p>Dr. Morepen Gluco One Bg 03 Glucometer Test Strips Box Of 50</p>
            <h5>₹602.79(29%)</h5>
        </div>
        
        <div style={{ textAlign: 'center' }}>
        <img src='https://cdn01.pharmeasy.in/dam/products_otc/F01746/pharmeasy-optima-all-in-one-vaporizer-2-1697003288.jpg?dim=1440x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
        <p>Pharmeasy Optima All In One Vaporizer</p>
            <h5>₹305.49(49%)</h5>
        </div>
        
        <div style={{ textAlign: 'center' }}>
        <img src='https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablet-with-essential-zinc-vitamins-for-daily-immunity-energy-2-1677155713.jpg?dim=1024x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
        <p>Supradyn Daily Multivitamin With Essential Zinc, Vitamins, For Immunity &amp; Energy Strip Of 15 Tablets</p>
            <h5>₹54.31(10%)</h5>
        </div>
        
        <div style={{ textAlign: 'center' }}>
        <img src='https://cdn01.pharmeasy.in/dam/products_otc/188996/zincovit-strip-of-15-tablets-green-2-1702990444.jpg?dim=1024x0' alt='img' style={{ width: '170px', height: '170px' }}></img>
        <p>Zincovit Strip Of 15 Tablets (Green)</p>
            <h5>₹99.00(10%)</h5>
        </div>
        </div>
        <button onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default Trending;
