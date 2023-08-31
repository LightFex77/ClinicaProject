import "../../styles/headerNav.css";
import image from "../../assets/images/pngwing.png";
import NavBar from "./NavBar";


const Header = () => {
  return (
    <div className="top-page">
    <header className="header-container">
      <div className="header-logo">
      <img src={image}/>
        Miracles
       
      </div>
    </header>
    <NavBar />
    </div>
    )
}

export default Header
