import {NavLink} from "react-router-dom"
import "../../styles/dentists/dentists.css"
const SideMenu = () => {
  const classChange = (classObject) => {
    console.log(classObject)
    return classObject ? "active-link": "inactive-link"
  }
  return (
    <div className="side-menu-container">
      <ul>
        <li><NavLink className={({isActive}) => classChange(isActive)}to="/dentists-panel/profile">Perfil</NavLink></li>
        <li><NavLink className={({isActive}) => classChange(isActive)} to="/dentists-panel/schedules">Horarios</NavLink></li>
        <li><NavLink className={({isActive}) => classChange(isActive)} to="/dentists-panel/quotes">Citas</NavLink></li>
        <li>Cerrar Sesion</li>
      </ul>
    </div>
  )
}

export default SideMenu
