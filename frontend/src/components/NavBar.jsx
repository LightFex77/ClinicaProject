import { NavLink } from "react-router-dom"
import "../styles/nav.css";
import logo from "../assets/pngwing.png"

const NavBar = () => {
    return(
        <div className="nav-container">
            <div className="nav-logo-img"><img src={logo}/>Miracles</div>
            <ul>
                <li><NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/">Inicio</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/specialists">Especialistas</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/services">Servcios</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/login">Iniciar Sesión</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar