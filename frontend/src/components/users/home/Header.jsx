import "../../../styles/headerNav.css";
import image from "../../../assets/images/pngwing.png";
import NavBar from "./NavBar";
import Button from "../../elements/Button";
import { useState } from "react";
import { showLogin, showRegister } from "../../../utils/showLogins";

// eslint-disable-next-line react/prop-types
const Header = ({navBar}) => {

  const [showL, sethowL] = useState(false);
  const [showR, sethowR] = useState(false);

  return (
    <div className="top-page">
        {showLogin(showL, sethowL)}
        {showRegister(showR, sethowR)}
      <header className="header-container">
        <div className="header-logo">
          <img src={image} />
          Miracles
        </div>
        <div className="header-btn">
          <Button buttonText="Iniciar Sesion" onClick={() => sethowL(true)}/>
          <Button buttonText="Registrarse" onClick={() => sethowR(true)}></Button>
        </div>
      </header>
      {navBar ? <NavBar /> : null}
    </div>
  );
};

export default Header;
