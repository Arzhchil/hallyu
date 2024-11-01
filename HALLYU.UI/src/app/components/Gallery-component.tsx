import React from "react";
import Card from "./Card-component";

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-wrap">
      <Card
        imageSrc="/img/choreo-img.jpg"
        smallText="한류"
        bigText="ХОРЕОГРАФЫ"
      />
      <Card
        imageSrc="/img/schedule-img.png"
        smallText="안녕하세요"
        bigText="РАСПИСАНИЕ"
      />
    </div>
  );
};

export default Gallery;
