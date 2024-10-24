import "./general.css";

/**
 * @param {Object} props - Component Properties
 * @param {string} props.label - the input label
 * @param {string[]} props.options - Array of select options
 * @param {string} props.className - input custom classes
 * @param {any} props.value - controlled state
 * @param {Function} props.setValue - The setState function of the above state
 */
function SelectInput({ label, options, className, value, setValue }) {
  const handleSelect = (e) => setValue(e.target.value);

  return (
    <label className={`SelectInput ${className}`}>
      <span>{label}:</span>
      <select onChange={handleSelect} value={value}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectInput;
