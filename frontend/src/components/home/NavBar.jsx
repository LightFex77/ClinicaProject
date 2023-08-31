import {NavLink} from "react-router-dom"

const NavBar = () => {
  const classChange = (classObject) => {
    return classObject ? "active-link": "inactive-link"
  }
  return (
    <nav className="nav-container">
      <NavLink className={({isActive}) => classChange(isActive)} to="/">Inicio</NavLink>
      <NavLink className={({isActive}) => classChange(isActive)} to="/consultas">Consultas</NavLink>
      <NavLink className={({isActive}) => classChange(isActive)} to="/acerca-de">Acerca de</NavLink>
      <NavLink className={({isActive}) => classChange(isActive)} to="/iniciar-sesion">Iniciar Sesion</NavLink>
    </nav>
  )
}

export default NavBar
