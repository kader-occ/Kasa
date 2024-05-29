import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccueilPage from "../ui/pages/Accueil/AccueilPage";
import ErrorPage from "../ui/pages/Error/ErrorPage";
import AboutPage from "../ui/pages/About/AboutPage";

const Navigation = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index path="/" element={<AccueilPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
