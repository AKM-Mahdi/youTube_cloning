import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../COMPONENTS/Footer/Footer";
import Header from "../COMPONENTS/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
