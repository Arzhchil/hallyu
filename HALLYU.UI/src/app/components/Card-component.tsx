import React from "react";

interface CardProps {
  imageSrc: string;
  smallText: string;
  bigText: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, smallText, bigText }) => {
  return (
    <div
      className="relative max-w-[50%] w-full h-screen bg-cover border-r-[1px] border-y-[1px] border-white"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-between items-center text-white py-16">
        <div className="flex flex-col items-center">
          <span className="text-lg mb-2">{smallText}</span>
          <h2 className="text-3xl font-bold">{bigText}</h2>
        </div>

        <button className="bg-white text-black font-bold text-xl px-5 py-3 rounded-full">
          Показать больше
        </button>
      </div>
    </div>
  );
};

export default Card;
