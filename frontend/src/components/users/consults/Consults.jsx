import { useState } from "react";
import { dentists } from "../../../data";
import ConsultsFilter from "./ConsultsFilter";
import ConsultsTableProgram from "./ConsultsTableProgram";
// import {Link} from "react-router-dom";

const Consults = () => {
  const [selectOption, setSelectOption] = useState("");
  const [toLookFor, setToLookFor] = useState("todos");

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setToLookFor(selectedValue);

    // Si se selecciona "Todos", establecer selectOption como una cadena vacía para mostrar todo
    if (selectedValue === "todos") {
      setSelectOption("");
    }
  };

  // Filtra solo si se selecciona una especialidad o ubicación específica
  const filteredDentists =
    toLookFor !== "todos"
      ? dentists.filter((item) => {
          if (toLookFor === "specialty") {
            return item.specialty === selectOption;
          } else if (toLookFor === "location") {
            return item.location === selectOption;
          }
          return true; // Mostrar todos los dentistas si no se ha seleccionado una opción
        })
      : dentists; // Si se selecciona "Todos", muestra todos los dentistas

  return (
    <div className="consults-container">
      <ConsultsFilter
        setSelectOption={setSelectOption}
        toLookFor={toLookFor}
        handleFilterChange={handleFilterChange}
        dentists={dentists}
      />
      <ConsultsTableProgram filteredDentists={filteredDentists} />
    </div>
  );
};

export default Consults;
