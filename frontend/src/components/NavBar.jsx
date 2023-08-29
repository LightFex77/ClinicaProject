import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="nav-container">
            <ul>
                <li><NavLink className={({isActive}) => isActive ? "activeLink" : ""} to="/">Inicio</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "activeLink" : ""} to="/specialists">Especialistas</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "activeLink" : ""} to="/services">Servcios</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "activeLink" : ""} to="/login">Iniciar Sesión</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar