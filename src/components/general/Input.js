import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css";

/**
 * @param {Object} props - Component Properties
 * @param {string} props.label - the input label
 * @param {string} props.type - input type
 * @param {string} props.className - input custom classes
 * @param {any} props.value - controlled state
 * @param {Function} props.setValue - The setState function of the above state
 * @param {FontAwesomeIcon} [props.icon] - An icon to decorate the input with
 * @param {Object} [props.inputAttributes] - Other input attributes
 */
function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
}) {
  const handleInput = (e) => setValue(e.target.value);

  return (
    <label className={`Input ${className ?? ""}`}>
      <span>
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}:
      </span>
      <input
        type={type}
        onChange={handleInput}
        {...inputAttributes}
        value={value}
      />
    </label>
  );
}

export default Input;
