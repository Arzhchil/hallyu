import React from 'react';

const HeroBannerImg: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform"
        src="/img/hero-banner-img.jpg"
      />
    </div>
  );
};

export default HeroBannerImg;
