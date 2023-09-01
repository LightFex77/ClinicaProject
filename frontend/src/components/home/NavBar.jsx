import {NavLink} from "react-router-dom";
// import Button from "../elements/Button";

const NavBar = () => {
  const classChange = (classObject) => {
    return classObject ? "active-link": "inactive-link"
  }
  return (
    <nav className="nav-container">
      <NavLink className={({isActive}) => classChange(isActive)} to="/">Inicio</NavLink>
      <NavLink className={({isActive}) => classChange(isActive)} to="/consultas">Consultas</NavLink>
      <NavLink className={({isActive}) => classChange(isActive)} to="/acerca-de">Acerca de</NavLink>
      {/* <Button buttonText="Iniciar Sesion"/> */}
    </nav>
  )
}

export default NavBar
