import { useState } from "react";
import Button from "../../elements/Button";
import MyQueries from "../modals/MyQueries";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ConsultsFilter = ({
  setSelectOption,
  toLookFor,
  handleFilterChange,
  dentists,
}) => {
  const uniqueValues = [...new Set(dentists.map((item) => item[toLookFor]))];
  const [ShowMyQueries, setShowMyQueries] = useState(false);

  return (
    <div className="consults-filter">
      {ShowMyQueries ? <MyQueries /> : null}
      <div className="consults-my-quotes">
        <p>Paciente: Juanito Quinto</p>
        <Button
          buttonText="Ver mis consultas"
          onClick={() => setShowMyQueries(true)}
        />
      </div>
      <div className="serach-filter">
        <p>Buscar por:</p>

        <span>
          <select onChange={handleFilterChange}>
            <option value="todos">Todos</option> {/* Opción "Todos" */}
            <option value="specialty">Servicios</option>
            <option value="location">Ubicación</option>
          </select>
          <select
            onChange={(e) => setSelectOption(e.target.value)}
            disabled={toLookFor === "todos"}
          >
            <option value="" hidden>
              {toLookFor === "specialty"
                ? "Selecciona una especialidad"
                : "Selecciona una ubicación"}
            </option>
            {uniqueValues.map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </select>
        </span>
      </div>
    </div>
  );
};

export default ConsultsFilter;
