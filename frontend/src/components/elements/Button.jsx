/* eslint-disable react/prop-types */
const Button = ({buttonText, onClick, error, labelText}) => {
  return (
      <label className="element-components">
        {labelText}
        <button onClick={onClick}>{buttonText}</button>
        <span style={{color:"red", height: "1rem"}}>
        {error}
      </span>
      </label>
  );
};

export default Button
