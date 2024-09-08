import { useState, useEffect } from 'react';

const logos = [
  '/pfizer_logo.svg.svg',  // Replace with the actual paths to your logos
  '/ferring_logo.svg.svg',
  '/merck_logo.svg.svg',
  '/pfizer_logo.svg.svg',  // Replace with the actual paths to your logos
  '/ferring_logo.svg.svg',
  '/merck_logo.svg.svg',
];

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 8000); // Change every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {logos.map((logo, index) => (
          <div className="logo-slide" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
