import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/general/Button";
import Input from "../../components/general/Input";
import "./auth.css";

/**
 * @param {string} username - the username controlled state
 * @param {string} password - the password controlled state
 * @param {Function} setUsername - The setState for the username state
 * @param {Function} setPassword - The setState for the password state
 */
function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="Login">
      <h3>Sign in with your account</h3>
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
        label="Sign In"
        className="auth-submit"
        icon={faKey}
        type="submit"
      />
    </div>
  );
}

export default Login;
