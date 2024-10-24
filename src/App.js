import axios from "axios";
import { useEffect, useState } from "react";

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
        <div className="Authentication"></div>
      )}
    </div>
  );
}

export default App;
