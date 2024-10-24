import { faKey, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/general/Button";
import Input from "../../components/general/Input";
import "./auth.css";

/**
 * @param {Object} props - the component properties
 * @param {string} props.username - the username controlled state
 * @param {string} props.password - the password controlled state
 * @param {Function} props.setUsername - The setState for the username state
 * @param {Function} props.setPassword - The setState for the password state
 */
function Register({ username, password, setUsername, setPassword }) {
  return (
    <div className="Register">
      <h3>Create a new account</h3>
      <Input
        type="text"
        label="Username"
        value={username}
        setValue={setUsername}
        icon={faUser}
        className="auth-field"
      />
      <Input
        type="password"
        label="Password"
        value={password}
        setValue={setPassword}
        icon={faKey}
        className="auth-field"
      />
      <Button
        label="Sign Up"
        className="auth-submit"
        icon={faPlus}
        type="submit"
      />
    </div>
  );
}

export default Register;
