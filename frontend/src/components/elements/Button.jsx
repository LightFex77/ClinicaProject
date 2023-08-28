/* eslint-disable react/prop-types */
const Button = ({buttonText, onClick, error, labelText}) => {
  return (
    <div className="element-components">
      <label htmlFor="buttonEelement">
        {labelText}
        <button id="buttonElement" onClick={onClick}>{buttonText}</button>
        <span style={{color:"red", height: "1rem"}}>
        {error}
      </span>
      </label>
    </div>
  );
};

export default Button
