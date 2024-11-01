import React from "react";

interface SideBarProps {
  border?: string;
  textColor?: string;
  bgColor?: string;
}

const Sidebar: React.FC<SideBarProps> = ({ border, textColor, bgColor }) => {
  return (
    <div
      className={`fixed right-0 top-0 h-full flex flex-col justify-between z-40 w-16 border-l-[0.5px] ${border} ${bgColor}`}
    >
      <div className="p-2 flex items-center justify-center"></div>

      <div
        className={`p-5 transform rotate-90 mb-20 border-l-[0.5px] ${border}`}
      >
        <button className={`${textColor} whitespace-nowrap`}>ЗАПИСАТЬСЯ</button>
      </div>
    </div>
  );
};

export default Sidebar;
