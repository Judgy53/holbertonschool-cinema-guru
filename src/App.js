import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Authentication from "./routes/auth/Authentication";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    axios
      .post("/api/auth", undefined, {
        authorization: `Bearer ${accessToken}`,
      })
      .then((response) => {
        console.log(response, response?.data);
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch((error) => {
        console.error("Error while trying to authenticate\n", error);
      });
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="Dashboard">{userUsername}</div>
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
