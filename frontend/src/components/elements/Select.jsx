/* eslint-disable react/prop-types */
const Select = ({ labelText, error, options, propertyOption, propertyValue, onChange }) => {
  return (
      <label htmlFor="selectElement" className="element-components">
        {labelText}
        <select id="selectElement" onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option[propertyValue]}>
              {option[propertyOption]}
            </option>
          ))}
        </select>
        <span style={{ color: "red", height: "1rem" }}>{error}</span>
      </label>
  );
};

export default Select;
