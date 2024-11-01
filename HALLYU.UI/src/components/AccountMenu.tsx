"use client";
import React, { useState } from "react";

interface AccountMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ isOpen, toggleMenu }) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const handleTabSwitch = (tab: "login" | "register") => {
    setActiveTab(tab);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40" onClick={toggleMenu} />}

      <div
        className={`max-w-[500px] fixed top-0 right-0 h-full w-full pr-[4rem] md:w-96 bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-0 ease-in-out`}
        onClick={handleMenuClick}
      >
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-black text-center mt-4 mb-4">
            HALLYU DANCE STUDIO
          </h2>

          <div className="flex justify-center bg-black py-6 mb-4">
            <button
              className={`text-white mx-2 focus:outline-none ${
                activeTab === "login" ? "underline" : ""
              }`}
              onClick={() => handleTabSwitch("login")}
            >
              Войти
            </button>
            <button
              className={`text-white mx-2 focus:outline-none ${
                activeTab === "register" ? "underline" : ""
              }`}
              onClick={() => handleTabSwitch("register")}
            >
              Зарегистрироваться
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            {activeTab === "login" ? (
              <div>
                <form className="flex flex-col space-y-4">
                  <input
                    type="email"
                    placeholder="Эл. почта"
                    className="border border-black p-2 text-black "
                  />
                  <input
                    type="password"
                    placeholder="Пароль"
                    className="border border-black p-2 text-black"
                  />
                  <a href="#" className="text-sm text-black underline self-end">
                    Забыли пароль
                  </a>
                  <button
                    type="submit"
                    className="mt-4 bg-red-500 text-black text-2xl py-2 rounded-xl"
                  >
                    Войти
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <p className="text-center text-gray-500">
                  Регистрация пока недоступна.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountMenu;
