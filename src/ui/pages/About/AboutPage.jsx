import React from "react";
import "./AboutPage.scss";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Footer from "../../layouts/Footer/Footer";
import image from "../../../assets/images/about_header_bg.png";
import Collapse from "../../components/Collapse/Collapse";

const AboutPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="header container">
        <img src={image} alt="header background" className="header-image" />
        <div className="overlay"></div>
      </div>
      <div className="container">
        <Collapse
          label="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes"
        />
        <Collapse
          label="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa.Tous comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
        />
        <Collapse
          label="Service"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa.Tous comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
        />
        <Collapse
          label="Securité"
          text="La sécurité est la priorité de Kasa.Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établie par nos services.En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous orgnisont également des ateliers sur la securité domestique de nos hôtes."
        />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
