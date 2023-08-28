/* eslint-disable react/prop-types */
const Select = ({ labelText, error, options }) => {
  return (
    <div className="select-element">
      <label htmlFor="selectElement">
        {labelText}
        <select id="selectElement">
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <span style={{ color: "red", height: "1rem" }}>{error}</span>
      </label>
    </div>
  );
};

export default Select;
