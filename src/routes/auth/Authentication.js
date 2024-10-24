import { useEffect, useState } from "react";
import Button from "../../components/general/Button";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";

/**
 * @param {Function} setIsLoggedIn - The setState for the isLoggedin state
 * @param {Function} setUserUsername - The setState for the userUsername state
 */
function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [_switch]);

  return (
    <form className="Authentication">
      <div className="auth-window">
        <div className="auth-tabs">
          <Button
            label="Sign In"
            onClick={() => setSwitch(true)}
            className={`auth-switch ${_switch ? "active" : ""}`}
          />
          <Button
            label="Sign Up"
            onClick={() => setSwitch(false)}
            className={`auth-switch ${_switch ? "" : "active"}`}
          />
        </div>
        {_switch ? (
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        )}
      </div>
    </form>
  );
}

export default Authentication;
