// eslint-disable-next-line react/prop-types
const Input = ({type, labelText, placeholder, error, value, onChange}) => {
  return (
    <div className="element-components">
      <label htmlFor="inputElement">
        {labelText}
      <input id= "inputElement"type={type} placeholder={placeholder} value={value} onChange={onChange}/>
      <span style={{color:"red", height: "1rem"}}>
        {error}
      </span>
      </label>
    </div>
  );
};

export default Input