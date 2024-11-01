import React from "react";

interface AboutInfoBlockProps {
  imagePath?: string;
}

const AboutInfoBlock: React.FC<AboutInfoBlockProps> = ({
  imagePath = "/img/studio-street-img.jpg",
}) => {
  return (
    <div className="flex items-center p-8">
      <img src={imagePath} alt="Studio" className="w-1/2 h-auto object-cover" />
      <div className="ml-8 text-black">
        <p className="mb-4">
          Танцевальная студия HALY&Ugrave; открылась в&nbsp;подвальном помещении
          в&nbsp;2024&nbsp;году. С&nbsp;тех пор она продолжает расти
          и&nbsp;принимает студентов всех возрастов, с&nbsp;любым образованием
          и&nbsp;уровнем опыта.
        </p>
        <p className="mb-4" >
          Располагаясь в&nbsp;Казани, здание имеет два полностью оборудованных
          зала и&nbsp;штатным персоналом.
        </p>
        <p>
          HALY&Ugrave; приглашает вас раскрыть свой творческий потенциал
          и&nbsp;найти сообщество наставников и&nbsp;коллег, которое никогда
          не&nbsp;перестанет вдохновлять друг друга
        </p>
      </div>
    </div>
  );
};

export default AboutInfoBlock;
