/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ConsultsTableProgram = ({filteredDentists}) => {
  return (
    <table className="consults-table">
        <thead>
          <tr className="consults-table-title">
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Localidad</th>
            <th>Horario</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          {filteredDentists.map((item, index) => (
            <tr key={index} className="consults-table-info">
              <td>{item.name}</td>
              <td>{item.specialty}</td>
              <td>{item.location}</td>
              <td>{item.hours}</td>
              <td>
                {item.photo}
                <span className="consults-buttons">
                  <button className="btn-profile">Ver perfil</button>
                  <button className="btn-program">Agendar</button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default ConsultsTableProgram
