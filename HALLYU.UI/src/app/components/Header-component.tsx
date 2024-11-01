import React from "react";
import Navbar from "../../components/Navbar-component";
import Link from "next/link";

interface HeaderProps {
  textColor?: string;
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({
  textColor = "text-white",
  logoSrc = "/Logo-white.svg",
}) => {
  return (
    <header
      className={`${textColor} absolute top-0 left-0 w-full p-4 pr-20 bg-transparent z-40`}
    >
      <div className="flex justify-between">
        <Link href="/" className="logo">
          <img src={logoSrc} alt="Logo" />
        </Link>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;
