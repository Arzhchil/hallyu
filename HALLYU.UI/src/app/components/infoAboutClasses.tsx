import React from "react";

const InfoAboutClasses: React.FC = () => {
  return (
    <div className="flex justify-between items-start p-6">
      <h3 className="text-black text-2xl font-bold">Очные занятия</h3>
      <p className=" justify-self-end text-black  max-w-[42rem] pr-60">
        В HALLYU DANCE STUDIO проводится до 8 занятий в день. Занятия можно
        забронировать на веб-сайте HALLYU DANCE STUDIO или через наш телеграм
        канал.
      </p>
    </div>
  );
};

export default InfoAboutClasses;