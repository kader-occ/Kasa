import React from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";

const ErrorPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Error 404 !</h1>
            <h6>Page non trouvée !</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
