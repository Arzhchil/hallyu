import React from "react";

interface InfoCardProps {
  smallText: string;
  bigText: string;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  smallText,
  bigText,
  borderColor,
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      className={`relative max-w-[50%] border-r-[1px] last:border-r-0 border-b-[1px] w-full h-[30vh] ${borderColor} ${backgroundColor} ${textColor}`}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center py-16">
        <div className="flex flex-col items-center">
          <span className="text-2xl mb-2">{smallText}</span>
          <h2 className="text-6xl font-bold">{bigText}</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
