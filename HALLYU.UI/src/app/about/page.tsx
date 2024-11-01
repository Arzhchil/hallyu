import React from "react";
import Header from "@/app/components/Header-component";
import AboutComponent from "../components/About-component";
import Sidebar from "@/app/components/Sidebar-component";
import Footer from "../components/Footer-component";

const About: React.FC = () => {
  return (
    <div className="bg-orangeBG">
      <Header textColor="text-black" logoSrc="/Logo-black.svg" />
      <AboutComponent textColor="text-black" />
      <Footer></Footer>
      <Sidebar border="border-black" textColor="text-black" />
    </div>
  );
};

export default About;
