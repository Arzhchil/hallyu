import React from "react";
import RotatingText from "../../components/rotating-text";

const FlippingBanner: React.FC = () => {
  return (
    <div className="p-10 pt-4 text-center space-y-20 mb-20">
      <h1 className="text-xl font-light uppercase tracking-wide mb-[10vh]">
        HALLYŰ Dance Studio
      </h1>
      <div className="">
        <h2 className="text-4xl font-normal mb-[4vh]">
          WE&nbsp;DON&rsquo;T NEED
        </h2>

        <RotatingText
          texts={[
            "A STAGE TO DANCE",
            "A SPOTLIGHT TO SHINE",
            "DIRECTIONS TO MOVE",
            "OPPONENTS TO WIN",
          ]}
          interval={1500}
        />
      </div>
      <div className="flex justify-center items-center min-h-fit">
        <button className="py-2 border-b border-white text-xl flex items-center justify-between w-auto">
          <span className="text-3xl">Подробнее о нас</span>
          <svg
            width="140"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-10"
          >
            <line
              x1="0"
              y1="50"
              x2="140"
              y2="50"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="100"
              y1="30"
              x2="140"
              y2="50"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="100"
              y1="70"
              x2="140"
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

export default FlippingBanner;
