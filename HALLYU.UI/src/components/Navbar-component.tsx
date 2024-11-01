"use client";
import React, { useState } from "react";
import Link from "next/link";
import AccountMenu from "./AccountMenu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <ul className="flex items-center">
          <li className="text-3xl mr-10">
            <Link href="/about">О студии</Link>
          </li>
          <li className="text-3xl mr-10">
            <Link href="/choreographers">Хореографы</Link>
          </li>
          <li className="text-3xl mr-10 last:mr-16">
            <Link href="#">Расписание</Link>
          </li>
        </ul>
        <button className="flex items-center text-2xl" onClick={toggleMenu}>
          Мой аккаунт
          <svg
            className="w-5 h-5 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>

      <AccountMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
