import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccueilPage from "../UI/pages/Accueil/AccueilPage";
import ErrorPage from "../UI/pages/Error/ErrorPage";
import AboutPage from "../UI/pages/About/AboutPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<AccueilPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
