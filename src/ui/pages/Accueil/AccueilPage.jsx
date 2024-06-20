import "./AccueilPage.scss";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import dataArr from "../../../data/data.json";
import { useRef } from "react";
import LogementCard from "../../components/LogementCard/LogementCard";
import PropTypes from "prop-types";
import image from "../../../assets/images/home_header_bg.png";

const AccueilPage = () => {
  const annonceArr = useRef(dataArr);

  return (
    <>
      <NavbarComponent />
      <Header image={image} text="Chez vous, partout et ailleurs" />
      <section className="container">
        {annonceArr.current.map((annonce, i) => {
          return <LogementCard {...annonce} key={i} />;
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
