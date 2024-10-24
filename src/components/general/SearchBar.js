import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css";

/**
 * @param {Object} props - Component Properties
 * @param {string} props.title - The controlled state
 * @param {Function} props.setTitle - The setState function
 * @param {Object} [props.inputAttributes] - Other input attributes
 */
function SearchBar({ title, setTitle, inputAttributes }) {
  const handleInput = (e) => setTitle(e.target.value);

  return (
    <label className="SearchBar">
      <FontAwesomeIcon icon={faMagnifyingGlass} />;
      <input
        type="search"
        value={title}
        onChange={handleInput}
        {...inputAttributes}
      />
    </label>
  );
}

export default SearchBar;
