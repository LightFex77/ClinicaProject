import Button from "../elements/Button";
import Input from "../elements/Input";

const AdminsTools = () => {
  return (
    <div className="admin-search-users">
      <form className="admin-form">
        <span className="admin-title">
          <h1>Gestionar Usuarios</h1>
          <hr />
        </span>
        <div className="admin-form-search">
          <span className="admin-input"><Input placeholder="Id, Email, Telefono" /></span>
          <span className="admin-btn"><Button buttonText="Buscar"/></span>
        </div>
      </form>
      <div className="waiting-search">
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
              <td>Dato 1</td>
              <td>Dato 2</td>
              <td>Dato 3</td>
              <td>Dato 4</td>
              <td className="admin-select-rol">
                <select />
              </td>
            </tr>
          </tbody>
        </table>
        <Button buttonText="Confirmar cambios"/>
      </div>
    </div>
  );
};

export default AdminsTools;
