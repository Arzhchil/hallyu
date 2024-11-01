import React from "react";
import HeroBanner from "./HeroBannerVideo-component";
import FlippingBanner from "./FlippingBanner-component";
import Gallery from "./Gallery-component";
import DividingBlock from "./DividingBlock-component";
import WatchStudio from "./WatchStudio-component";
import InfoCard from "./InfoCard-component";

const Main: React.FC = () => {
  return (
    <main className="pr-[4rem]">
      <HeroBanner></HeroBanner>
      <FlippingBanner></FlippingBanner>
      <Gallery />
      <DividingBlock
        bgColor="bg-orangeBG"
        text="СЛЕДИТЕ ЗА НАМИ @hallyudancestudio"
      ></DividingBlock>
      <WatchStudio
        backgroundImage="/img/studio-img.jpg"
        titleText="Посмотрите на нашу студию изнутри!"
        buttonText="Подробнее о нас"
        borderColor="border-white"
      ></WatchStudio>

      <div className="flex flex-wrap">
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

export default Main;
