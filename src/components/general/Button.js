import "./general.css";

/**
 * @param {Object} props - Component Properties
 * @param {string} props.label - the input label
 * @param {string} props.className - input custom classes
 * @param {Function} props.onClick - the onClick handler for the button
 * @param {FontAwesomeIcon} [props.icon] - An icon to decorate the button with
 */
function Button({ label, className, onClick, icon }) {
  return (
    <button className={`Button ${className}`} type="button" onClick={onClick}>
      {icon}
      {label}
    </button>
  );
}

export default Button;
