import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/general/Button";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";

/**
 * @param {Object} props - the component properties
 * @param {Function} props.setIsLoggedIn - The setState for the isLoggedin state
 * @param {Function} props.setUserUsername - The setState for the userUsername state
 */
function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = `/api/auth/${_switch ? "login" : "register"}`;
    axios
      .post(url, { username, password })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error while submitting form\n", error);
      });
  };

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [_switch]);

  return (
    <form className="Authentication" onSubmit={handleSubmit}>
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
