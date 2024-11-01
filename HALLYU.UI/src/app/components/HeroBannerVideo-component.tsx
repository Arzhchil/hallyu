import React from "react";

const HeroBannerVideo: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform"
        src="/videos/banner-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default HeroBannerVideo;
