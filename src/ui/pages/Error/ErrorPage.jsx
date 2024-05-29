import React from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
