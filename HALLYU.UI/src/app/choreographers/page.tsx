import React from "react";
import ChoreographersComponent from "../components/Choreographers-component";
import Header from "../components/Header-component";
import Sidebar from "../components/Sidebar-component";
import Footer from "../components/Footer-component";

const ChoreographersPage = () => {
  return (
    <div className="bg-white">
      <Header></Header>
      <ChoreographersComponent></ChoreographersComponent>
      <Footer></Footer>
      <Sidebar border="border-white" textColor="text-white" bgColor="bg-black" />
    </div>
  );
};

export default ChoreographersPage;
