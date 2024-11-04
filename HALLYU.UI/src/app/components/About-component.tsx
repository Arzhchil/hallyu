import React from "react";
import BigLetters from "./BigLetters-component";
import AboutInfoBlock from "./About-InfoBlock-component";
import DividingBlock from "./DividingBlock-component";
import InfoAboutClasses from "./infoAboutClasses";
import WatchStudio from "./WatchStudio-component";
import InfoCard from "./InfoCard-component";

interface AboutComponentProps {
  textColor?: string;
}

const AboutComponent: React.FC<AboutComponentProps> = ({
  textColor = "text-white",
}) => {
  return (
    <main className={`${textColor} pt-[6rem] pr-[4rem]`}>
      <BigLetters></BigLetters>
      <AboutInfoBlock></AboutInfoBlock>
      <DividingBlock bgColor="bg-orangeBG" text="KOREAN WAVE"></DividingBlock>
      <InfoAboutClasses></InfoAboutClasses>
      <WatchStudio
        backgroundImage="/img/level-img.png"
        titleText="Мы предлагаем индивидуальные и очные занятия"
        buttonText="Подробнее"
        borderColor="border-black"
      ></WatchStudio>
      <div className="flex flex-wrap">
        <InfoCard borderColor="border-black" smallText="FAQ" bigText="FAQ" />
        <InfoCard
          borderColor="border-black"
          smallText="КОНТАКТЫ"
          bigText="КОНТАКТЫ"
        />
      </div>
    </main>
  );
};

export default AboutComponent;
