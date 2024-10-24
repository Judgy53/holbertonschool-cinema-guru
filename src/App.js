import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    axios
      .post("/api/auth", undefined, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
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
        <Dashboard setIsLoggedIn={setIsLoggedIn} userUsername={userUsername} />
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </div>
  );
}

export default App;
