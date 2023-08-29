// eslint-disable-next-line react/prop-types
const Input = ({type, labelText, placeholder, error, value, onChange}) => {
  return (
      <label htmlFor="inputElement" className="element-components">
        {labelText}
      <input id= "inputElement"type={type} placeholder={placeholder} value={value} onChange={onChange}/>
      <span style={{color:"red", height: "1rem"}}>
        {error}
      </span>
      </label>
  );
};

export default Input