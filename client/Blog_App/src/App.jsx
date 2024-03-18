import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
