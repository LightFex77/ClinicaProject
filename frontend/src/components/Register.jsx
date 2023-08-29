import Input from "./elements/Input";
import Button from "./elements/Button";
import "../styles/register.css";
import HeaderBody from "./elements/HeaderBody";
import Select from "../components/elements/Select"
// import {useEffect, useState} from "react";


const Register = () => {

  const sendFormRegister = (e) => {
    e.preventDefault();
  };

  const departamentsData = [
    { name: "Asunción", value: 1 },
    { name: "Concepción", value: 2 },
    { name: "San Pedro", value: 3 },
    { name: "Cordillera", value: 4 },
    { name: "Guairá", value: 5 },
    { name: "Caaguazú", value: 6 },
    { name: "Caazapá", value: 7 },
    { name: "Itapúa", value: 8 },
    { name: "Misiones", value: 9 },
    { name: "Paraguarí", value: 10 },
    { name: "Alto Paraná", value: 11 },
    { name: "Central", value: 12 },
    { name: "Ñeembucú", value: 13 },
    { name: "Amambay", value: 14 },
    { name: "Canindeyú", value: 15 },
    { name: "Presidente Hayes", value: 16 },
    { name: "Boquerón", value: 17 },
    { name: "Alto Paraguay", value: 18 }
  ];
  
  console.log(departamentsData);
  
  return (
    <div className="register-container">
      <form onSubmit={sendFormRegister}>
      <HeaderBody h1Text="Registrate" style={{ textAlign: "center", color: "#B573DC"}} />
        <section className="personal-section">
          <Input placeholder="Nombre" labelText="Nombre" />
          <Input placeholder="Apellido" labelText="Apellido" />
          <Input placeholder="1234567" labelText="DNI" />
          <Input type="tel" placeholder="123456789" labelText={`Telefono (+595)`} />
        </section>
        <hr /><br />  
          <section className="direction-section">
            <Select options={departamentsData} propertyOption="name" propertyValue="value"/>
            <Input placeholder="Ciudad"/>
          </section>

        <Button buttonText="Enviar" />
      </form>
    </div>
  );
};

export default Register;
