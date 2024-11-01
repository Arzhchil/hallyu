import React from "react";
import HeroBannerImg from "./HeroBannerImg";
import DividingBlock from "./DividingBlock-component";
import ChoreographersGallery from "./ChoreographersGallery-component";
import InfoCard from "./InfoCard-component";

interface ChoreographersComponentProps {
  textColor?: string;
}

const ChoreographersComponent: React.FC<ChoreographersComponentProps> = ({
  textColor,
}) => {
  return (
    <main className={`${textColor} pr-[4rem]`}>
      <HeroBannerImg></HeroBannerImg>
      <DividingBlock text="НАШИ ХОРЕОГРАФЫ" bgColor="bg-white"></DividingBlock>
      <ChoreographersGallery></ChoreographersGallery>
      <div className="flex flex-wrap text-black">
        <InfoCard
          borderColor="border-white"
          smallText="FAQ"
          bigText="FAQ"
          backgroundColor="bg-black"
          textColor="text-white"
        />
        <InfoCard
          borderColor="border-white"
          smallText="КОНТАКТЫ"
          bigText="КОНТАКТЫ"
          backgroundColor="bg-black"
          textColor="text-white"
        />
      </div>
    </main>
  );
};

export default ChoreographersComponent;
