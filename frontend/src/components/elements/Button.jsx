/* eslint-disable react/prop-types */
const Button = ({buttonText, onClick, labelText}) => {
  return (
      <label className="element-components">
        {labelText}
        <button onClick={onClick}>{buttonText}</button>
      </label>
  );
};

export default Button
