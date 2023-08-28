import Input from "./elements/Input";
import Select from "./elements/Select";
import Button from "./elements/Button";
import "../styles/register.css";
import HeaderBody from "./elements/HeaderBody";

const Register = () => {
  const sendFormRegister = () => {};
  const data = [
    {
      text: "Ciudad",
      value: "1",
    },
  ];
  return (
    <div className="register-container">
        <HeaderBody h1Text="Registrate" style={{ textAlign: "center", color: "#B573DC"}} />
      <form onSubmit={sendFormRegister}>
        <section className="personal-section">
          <Input placeholder="Nombre" labelText="Nombre:" />
          <Input placeholder="Apellido" labelText="Apellido:" />
          <Input placeholder="#######" labelText="DNI" />
          <Input type="tel" placeholder="xxx-xxx-xxx" labelText={`Telefono: (+595)`} />
          <hr />
        </section>
        <section className="direction-section">
          <Select options={data} labelText="Departamento" />
          <Select options={data} labelText="Ciudad" />
        </section>
        <Button buttonText="Enviar" />
      </form>
    </div>
  );
};

export default Register;
