import React from 'react';

const ExampleComponent = () => {
  return (
    
       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <img src='https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0'alt='img' style={{ width: '100px' }}></img>
        <h4 style={{ margin: '10px 0' }}>Medicine</h4>  
        <p>UPTO 25% OFF</p>
      </div>
      <div>
      <img src='https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0' alt='img' style={{width: '100px'}}></img>
      <h4 style={{margin: '10px '}}>Lab Test</h4>  
      <p>UPTO 25% OFF</p>
      </div>

     
      <div>
      <img src='https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0' alt='img' style={{width: '100px'}}></img>
      <h4 style={{margin: '10px '}}>Health Care</h4>  
      <p>UPTO 60% OFF</p>
      </div>

      <div>
      <img src='https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0' alt='img' style={{width: '100px'}}></img>
      <h4 style={{margin: '10px '}}>Health Blogs</h4>
      </div>

      <div>
      <img src='https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0'alt='img' style={{width: '100px'}}></img>
      <h4 style={{margin: '10px '}}>PLUS</h4>  
      <p>Save 5% Extra</p>
      </div>

      <div>
      <img src='https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0' alt='img' style={{width: '100px'}}></img>
      <h4 style={{margin: '10px '}}>Offers</h4>
      </div>

      <div>
      <img src='https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0'alt='img' style={{width: '100px'}}></img>
      <h4 style={{margin: '10px '}}>Value Store</h4>  
      <p>UPTO 50% OFF</p>
      </div>
    </div>
    
  );
}

export default ExampleComponent;
