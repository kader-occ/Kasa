import "./App.css";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
};

export default App;
