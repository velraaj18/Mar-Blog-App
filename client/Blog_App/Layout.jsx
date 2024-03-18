import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" px-40">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
