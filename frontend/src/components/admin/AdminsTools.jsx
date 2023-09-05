import { useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { getUser, updateRol } from "./admin.utils/updateUser";

const AdminsTools = () => {
  const [searchUser, setSearchUser] = useState("");
  const [userData, setUserData] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // Estado para el rol seleccionado

  const onSumbirUser = async (e) => {
    e.preventDefault();
    const response = await getUser(searchUser);
    setUserData(response);
    setSelectedRole(response.user.rol); // Establecer el rol seleccionado
  };

  const onClickConfirmated = async (id, rol) => {
    const parseId = parseInt(id) 
    await updateRol(parseId, rol);
  }

  // Lista de roles disponibles
  const roles = ["ODT", "PTT", "ADM"];

  return (
    <div className="admin-search-users">
      <form className="admin-form" onSubmit={onSumbirUser}>
        <span className="admin-title">
          <h1>Gestionar Usuarios</h1>
          <hr />
        </span>
        <div className="admin-form-search">
          <span className="admin-input">
            <Input
              placeholder="Id, Email, Telefono"
              onChange={(e) => setSearchUser(e.target.value)}
            />
          </span>
          <span className="admin-btn">
            <Button buttonText="Buscar" />
          </span>
        </div>
      </form>
      <div className="waiting-search">
        {userData && (
          <table border="1">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Numero de Telefono</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userData.user.id}</td>
                <td>
                  {userData.user.name} {userData.user.last_name}
                </td>
                <td>{userData.user.email}</td>
                <td>{userData.user.phone_number}</td>
                <td className="admin-select-rol">
                  <select
                    value={selectedRole} // Valor seleccionado
                    onChange={(e) => setSelectedRole(e.target.value)} // Manejar el cambio
                  >
                    {roles.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        )}
        <Button buttonText="Confirmar cambios" onClick={() => onClickConfirmated(userData.user.id, selectedRole)}/>
      </div>
    </div>
  );
};

export default AdminsTools;
