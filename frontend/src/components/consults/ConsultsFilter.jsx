import Button from "../elements/Button";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ConsultsFilter = ({ setSelectOption, toLookFor, handleFilterChange, dentists }) => {
  return (
    <div className="consults-filter">
    <select onChange={handleFilterChange}>
      <option value="todos">Todos</option> {/* Opción "Todos" */}
      <option value="specialty">Servicios</option>
      <option value="location">Ubicación</option>
    </select>
    <select
      onChange={(e) => setSelectOption(e.target.value)}
      disabled={toLookFor === "todos"} // Deshabilitar el segundo select si la opción seleccionada es "Todos"
    >
      <option value="" hidden>
        {toLookFor === "specialty" ? "Selecciona una especialidad" : "Selecciona una ubicación"}
      </option>
      {dentists.map((item, index) => (
        <option value={item[toLookFor]} key={index}>
          {item[toLookFor]}
        </option>
      ))}
    </select>
    <span className="consults-filter-change">
        <Button buttonText="Ver mis citas"/>
      </span>
  </div>
  );
};

export default ConsultsFilter;
