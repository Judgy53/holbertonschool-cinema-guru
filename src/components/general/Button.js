import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css";

/**
 * @param {Object} props - Component Properties
 * @param {string} props.label - the input label
 * @param {string} props.className - input custom classes
 * @param {FontAwesomeIcon} [props.icon] - An icon to decorate the button with
 * @param {Function} [props.onClick] - the onClick handler for the button
 * @param {string} [props.type] - Type of the button
 */
function Button({
  label,
  className,
  icon,
  onClick = () => {},
  type = "button",
}) {
  return (
    <button
      className={`Button ${className ?? ""}`}
      type={type}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
}

export default Button;
