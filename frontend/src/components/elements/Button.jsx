/* eslint-disable react/prop-types */
const Button = ({buttonText, onClick, error, labelText}) => {
  return (
      <label htmlFor="buttonElement" className="element-components">
        {labelText}
        <button id="buttonElement" onClick={onClick}>{buttonText}</button>
        <span style={{color:"red", height: "1rem"}}>
        {error}
      </span>
      </label>
  );
};

export default Button
