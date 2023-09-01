import "../../styles/headerNav.css";
import image from "../../assets/images/pngwing.png";
import NavBar from "./NavBar";
import Button from "../elements/Button";

const Header = () => {
  return (
    <div className="top-page">
      <header className="header-container">
        <div className="header-logo">
          <img src={image} />
          Miracles
        </div>
        <div className="header-btn">
          <Button buttonText="Iniciar Sesion" />
          <Button buttonText="Registrarse"></Button>
        </div>
      </header>
      <NavBar />
    </div>
  );
};

export default Header;
