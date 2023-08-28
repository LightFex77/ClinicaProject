/* eslint-disable react/prop-types */
export const Button = ({buttonText, onClick, error, labelText}) => {
  return (
    <div className="button-element">
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
