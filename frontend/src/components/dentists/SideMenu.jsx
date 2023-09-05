import "../../styles/dentists/dentists.css"

const SideMenu = () => {
  return (
    <div className="side-menu-container">
      <ul>
        <li style={{color: "white", backgroundColor: "#B26EB2"}}>Perfil</li>
        <li>Horarios</li>
        <li>Citas</li>
        <li>Cerrar Sesion</li>
      </ul>
    </div>
  )
}

export default SideMenu
