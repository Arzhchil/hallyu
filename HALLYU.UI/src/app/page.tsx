import React from "react";
import Header from "@/app/components/Header-component";
import Sidebar from "./components/Sidebar-component";
import Main from "./components/Main-component";
import Footer from "./components/Footer-component";

const Home: React.FC = () => {
  return (
    <div>
      <Header textColor="text-white" logoSrc="/Logo-white.svg" />
      <Main></Main>
      <Footer></Footer>
      <Sidebar
        border="border-white"
        textColor="text-white"
        bgColor="bg-black"
      />
    </div>
  );
};

export default Home;
