import { NavLink } from "react-router-dom";
import "../../styles/dentists/dentists.css";
const SideMenu = () => {
  const classChange = (classObject) => {
    console.log(classObject);
    return classObject ? "active-link" : "inactive-link";
  };
  return (
    <div className="side-menu-container">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => classChange(isActive)}
            to="/dentists-panel/profile"
          >
            Perfil
            <i className="fa-regular fa-user"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => classChange(isActive)}
            to="/dentists-panel/schedules"
          >
            Horarios
            <i className="fa-solid fa-calendar-days"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => classChange(isActive)}
            to="/dentists-panel/quotes"
          >
            Agenda
            <i className="fa-solid fa-book-medical"></i>
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => classChange(isActive)} to="/">
            Cerrar Sesion
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
