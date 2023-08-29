// eslint-disable-next-line react/prop-types
const Input = ({type, labelText, placeholder, error, value, onChange, id, name}) => {
  return (
      <label htmlFor={id} className="element-components">
        {labelText}
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} name={name}/>
      <span style={{color:"red", height: "1rem"}}>
        {error}
      </span>
      </label>
  );
};

export default Input