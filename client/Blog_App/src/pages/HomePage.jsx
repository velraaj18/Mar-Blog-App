import React from "react";
import Header from "../../Header";
import Section from "../../Section";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Section />
      <Section />
      <Section />
    </div>
  );
};

export default HomePage;
