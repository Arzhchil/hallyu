"use client";

import React, { useState, useRef } from "react";

type Direction = "top" | "right" | "bottom" | "left";

type ChoreographerCardProps = {
  name: string;
  image: string;
};

const ChoreographerCard: React.FC<ChoreographerCardProps> = ({
  name,
  image,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("top");
  const [colorIndex, setColorIndex] = useState<number>(0);

  const colors = ["#FF473B", "#94C2FF", "#FFC003"];

  const getDirection = (
    event: React.MouseEvent,
    element: HTMLElement
  ): Direction => {
    const w = element.offsetWidth;
    const h = element.offsetHeight;
    const x = (event.pageX - element.offsetLeft - w / 2) * (w > h ? h / w : 1);
    const y = (event.pageY - element.offsetTop - h / 2) * (h > w ? w / h : 1);
    const d =
      Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

    const directions: Direction[] = ["top", "right", "bottom", "left"];
    return directions[d];
  };

  const handleMouseEnter = (event: React.MouseEvent) => {
    if (cardRef.current) {
      const dir = getDirection(event, cardRef.current);
      setDirection(dir);
      setIsHovered(true);

      const possibleIndices = colors
        .map((_, index) => index)
        .filter((index) => index !== colorIndex);

      const newColorIndex =
        possibleIndices[Math.floor(Math.random() * possibleIndices.length)];

      setColorIndex(newColorIndex);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (cardRef.current) {
      const dir = getDirection(event, cardRef.current);
      setDirection(dir);
      setIsHovered(false);
    }
  };

  const getOverlayStyle = () => {
    const baseStyle = {
      position: "absolute" as "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors[colorIndex],
      transition: "transform 0.3s ease-out",
      pointerEvents: "none" as "none",
    };

    const transforms: { [key in Direction]: string } = {
      top: "translateY(-101%)",
      bottom: "translateY(101%)",
      left: "translateX(-101%)",
      right: "translateX(101%)",
    };

    return {
      ...baseStyle,
      transform: isHovered
        ? "translate(0, 0)"
        : transforms[direction] || "translate(0, 0)",
    };
  };

  return (
    <div
      className="relative text-center flex flex-col pt-8 overflow-hidden w-full group"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={getOverlayStyle()}></div>
      <div className="relative z-10 w-full">
        <div className="rounded-full overflow-hidden w-96 h-96 transform translate-y-[10%] mx-auto">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transform transition-transform duration-300 ease-out group-hover:scale-125"
          />
        </div>
        <div className="flex items-center justify-between border-t-[1px] border-b-[1px] border-black w-full px-8 pt-8">
          <p className="text-3xl font-bold text-black uppercase">{name}</p>
          <div className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoreographerCard;
