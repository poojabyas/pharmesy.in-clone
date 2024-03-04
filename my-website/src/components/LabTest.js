import React, { useRef } from 'react';

const LabTest = () => {
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
        <h1>Lab Tests by Health Concern</h1>
        <p>Powered by  </p>
        <img src='https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0' alt='img' style={{width: '100px'}}></img>
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
            width: 'calc(100% - 40px)', 
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0' alt='img' style={{ width: '170px' }} />
          </div>
          <div>
        <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
        </div>

        <div>
        <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
        </div>
        
        <div>
        <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
        </div>
        
        <div>
        <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
        </div>
        
        <div>
        <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
        </div>
        
        <div>
        <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/6b775dd8478-covid.png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
        </div>
        
        <div>
        <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
        </div>
        
        <div>
        <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
        </div>
        
        <div>
        <img src='https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0' alt='img' style={{ width: '170px' }}></img>
        </div>
        </div>
        <button onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default LabTest;
