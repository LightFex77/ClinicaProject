import {NavLink} from "react-router-dom"

const NavBar = () => {
  const classChange = (classObject) => {
    return classObject ? "active-link": "inactive-link"
  }
  return (
    <nav className="nav-container">
      <NavLink className={({isActive}) => classChange(isActive)} to="/">Inicio</NavLink>
      <NavLink className={({isActive}) => classChange(isActive)} to="/services">Servicios</NavLink>
      <NavLink className={({isActive}) => classChange(isActive)} to="/consult">Consultar</NavLink>
      <NavLink className={({isActive}) => classChange(isActive)} to="/login">Iniciar Sesion</NavLink>
    </nav>
  )
}

export default NavBar
