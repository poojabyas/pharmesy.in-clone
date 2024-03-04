import React from 'react';

const InfoComponent = () => {
  return (
    <div style={{ margin: '20px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>What Our Customers Have to Say</h2>
      <div style={{ display: 'flex',  gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1, padding: '20px', borderRadius: '10px',backgroundColor:'#e9f0ef' }}>
            <h3>Nisha Tomer</h3>
            <p style={{ fontStyle: 'italic' }}>March 22, 2023</p>
            <p>
              I love using the PharmEasy app! They have everything related to health, like medicines, lab tests, and other healthcare essentials, at GREAT prices. Their service is amazing and quick, and the app is also easy to use.
            </p>
          </div>

          <div style={{flex: 1, padding: '20px', borderRadius: '10px',backgroundColor:'#e9f0ef' }}>
            <h3>Arvind Dingwani</h3>
            <p style={{ fontStyle: 'italic' }}>February 26, 2023</p>
            <p>
              I was a bit doubtful about using an online pharmacy, but PharmEasy exceeded my expectations. The discount coupons were great, prices were very reasonable, and the delivery was quick and smooth. I would definitely use it again.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1, padding: '20px', borderRadius: '10px',backgroundColor:'#e9f0ef' }}>
            <h3>Shreya Sharma</h3>
            <p style={{ fontStyle: 'italic' }}>April 15, 2023</p>
            <p>
              I can't recommend the PharmEasy app enough! It's the perfect one-stop shop for my whole family's healthcare needs. The offers you can get here are beyond what other platforms offer. Customer service, including returns, is also very convenient. This app deserves 5 stars.
            </p>
          </div>

          <div style={{ flex: 1, padding: '20px', borderRadius: '10px',backgroundColor:'#e9f0ef'}}>
            <h3>Rajeev Kapoor</h3>
            <p style={{ fontStyle: 'italic' }}>January 3, 2023</p>
            <p>
              I recently started using PharmEasy, and I'm already a fan. They have a vast selection of products at affordable prices, which is a huge relief for my wallet. Their delivery is always prompt, and their customer service is top-notch. Thank you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
 