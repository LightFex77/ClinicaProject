// eslint-disable-next-line react/prop-types
const Input = ({type, labelText, placeholder, error, value, onChange, id, name, onBlur}) => {
  return (
      <label htmlFor={id} className="element-components">
        {labelText}
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} onBlur={onBlur}/>
      <span style={{color:"red", height: "1rem"}}>
        {error}
      </span>
      </label>
  );
};

export default Input