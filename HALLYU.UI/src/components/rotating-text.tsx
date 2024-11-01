"use client";

import React, { useState, useEffect } from "react";
import styles from "./rotating-text.module.css";

interface RotatingTextProps {
  texts: string[];
  interval?: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  interval = 3000,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(styles.cubeFlipIn);

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];

    const switchText = () => {
      setAnimationClass(styles.cubeFlipOut);

      const flipOutTimeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);

        setAnimationClass(styles.cubeFlipIn);
      }, 500);

      timeoutIds.push(flipOutTimeout);
    };

    const intervalId = setInterval(switchText, interval);
    timeoutIds.push(intervalId);

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [texts, interval]);

  return (
    <div className="relative inline-block perspective-1000 max-w-4xl">
      <h3 className={`text-9xl font-bold ${animationClass}`}>
        {texts[currentTextIndex]}
      </h3>
    </div>
  );
};

export default RotatingText;
