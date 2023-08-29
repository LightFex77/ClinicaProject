import { NavLink } from "react-router-dom"
import "../styles/nav.css";

const NavBar = () => {
    return(
        <div className="nav-container">
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