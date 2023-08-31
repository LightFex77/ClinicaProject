import {dentists} from "../../dentists";

const Consults = () => {
  return (
    <div className="consults-container">
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Especialidad</th>
                <th>Localidad</th>
                <th>Horario</th>
                <th>Perfil</th>
            </tr>
        </thead>
        <tbody>
            {dentists.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.specialty}</td>
                    <td>{item.location}</td>
                    <td>{item.hours}</td>
                    <td>{item.photo}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Consults;
