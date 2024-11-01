import React from "react";

interface WatchStudioProps {
  backgroundImage: string;
  titleText: string;
  buttonText: string;
  borderColor: string;
}

const WatchStudio: React.FC<WatchStudioProps> = ({
  backgroundImage,
  titleText,
  buttonText,
  borderColor,
}) => {
  return (
    <div className={`relative h-screen bg-gray-800 ${borderColor} border-b`}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute bottom-10 left-10 z-10 text-white">
        <h1 className="text-7xl font-serif mb-4 max-w-4xl font-bold">
          {titleText}
        </h1>
        <button className="py-2 border-b border-white text-xl flex items-center justify-between w-auto">
          <span className="text-3xl">{buttonText}</span>
          <svg
            width="100"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-10"
          >
            <line
              x1="0"
              y1="50"
              x2="100"
              y2="50"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="60"
              y1="30"
              x2="100"
              y2="50"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="60"
              y1="70"
              x2="100"
              y2="50"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WatchStudio;
