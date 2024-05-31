import "./AccueilPage.scss";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import dataArr from "../../../data/data.json";
import { useRef } from "react";
import AnnonceCard from "../../components/AnnonceCard/AnnonceCard";
import PropTypes from "prop-types";

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

AccueilPage.prototype = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  pictures: PropTypes.array,
  description: PropTypes.string,
  host: {
    name: PropTypes.string,
    picture: PropTypes.string,
  },
  rating: PropTypes.string,
  location: PropTypes.string,
  equipments: PropTypes.array,
  tags: PropTypes.array,
};

export default AccueilPage;