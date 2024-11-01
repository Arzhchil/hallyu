import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-8 mr-[4rem]">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex mb-8 md:mb-0 pl-5">
          <div className="mr-12">
            <h2 className="text-orange-500 font-semibold mb-4">Занятия</h2>
            <ul className="text-gray-700">
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">
                  Расписание
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">
                  Хореографы
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">
                  Записаться
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-orange-500 font-semibold mb-4">Информация</h2>
            <ul className="text-gray-700">
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">
                  О студии
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-500">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute left-1/2 pr-16 transform -translate-x-1/2 text-center">
          <h1 className="text-7xl font-bold text-black">HALLYÜ</h1>
          <h2 className="text-lg text-black">DANCE STUDIO</h2>
          <p className="text-gray-700">KAZAN</p>
          <p className="text-gray-700">@hallyudancestudio</p>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-300 w-full"></div>

      <div className="mt-4 text-left text-gray-500 pl-5">
        <p>© 2024 HALLYÜ Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
