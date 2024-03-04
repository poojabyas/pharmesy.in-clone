import React, { useState, useEffect } from 'react';

const Sliding = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); //  duration 

    return () => clearInterval(intervalId);
  }, [images]); 

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: `${(index - currentImageIndex) * 100}%`,
            transition: 'left 0.5s ease'
          }}
        />
      ))}
    </div>
  );
};

export default Sliding;
