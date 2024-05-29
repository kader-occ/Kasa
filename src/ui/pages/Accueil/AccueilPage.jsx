import "./AccueilPage.scss";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import dataArr from "../../../data/data.json";
import { useRef } from "react";
import AnnonceCard from "../../components/AnnonceCard/AnnonceCard";

const AccueilPage = () => {
  const annonceArr = useRef(dataArr);

  return (
    <>
      <NavbarComponent />
      <Header />
      <section className="container">
        {annonceArr.current.map((annonce, i) => {
          return <AnnonceCard {...annonce} key={i} />;
        })}
      </section>
      <Footer />
    </>
  );
};

export default AccueilPage;
