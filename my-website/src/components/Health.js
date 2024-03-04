import React, { useRef } from 'react';

const Health = () => {
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
        <h1>Health Articles</h1>
        <p>Get up-to-date on our latest health updates</p>
        
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
            width: 'calc(100% - 40px)', // Adjust the width as needed
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <img src='https://dermalife.co.in/blog/wp-content/uploads/2023/07/Dermalife.webp' alt='img' style={{ width: '290px' }} />
            <p>Yoga Asan for Hair Growth</p>
          </div>
          <div>
        <img src='https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/27074509/378.jpg?dim=1440x0' alt='img' style={{ width: '250px' }}></img>
        <p>Yoga For Constipetion</p>
        </div>

        <div>
        <img src='https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/26094442/449.jpg?dim=1440x0' alt='img' style={{ width: '250px' }}></img>
        <p>Low Platelate Count </p>
        </div>
        
        <div>
        <img src='https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/26093504/456.jpg?dim=1440x0' alt='img' style={{ width: '250px' }}></img>
        <p>Low RBC count A Compherihance</p>
        </div>
        
        <div>
        <img src='https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/26091715/458.jpg?dim=1440x0' alt='img' style={{ width: '250px' }}></img>
        <p>High MCH understanding its</p>
        </div>
        
        <div>
        <img src='https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/02/26085254/460.jpg?dim=1440x0' alt='img' style={{ width: '250px' }}></img>
        <p>Can CBC test Detect Cancer</p>
        </div>
        
        </div>
        <button onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default Health;
