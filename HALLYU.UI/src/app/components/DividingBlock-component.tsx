import React from "react";

interface DividingBlockProps {
  text: string;
  bgColor: string;
}

const DividingBlock: React.FC<DividingBlockProps> = ({ text, bgColor }) => {
  return (
    <div
      className={`${bgColor} text-black py-10 px-10 text-center border-y-[0.5px] border-black`}
    >
      <h3 className="text-3xl font-bold ">{text}</h3>
    </div>
  );
};

export default DividingBlock;
