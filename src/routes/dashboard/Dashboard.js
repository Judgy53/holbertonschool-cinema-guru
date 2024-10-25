import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";
import "./dashboard.css";

/**
 * @param {Object} props - the component properties
 * @param {string} props.userUsername - The state for the username
 * @param {Function} props.setIsLoggedIn - The setState for the isLoggedin state
 */
function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="Dashboard">
        <Header setIsLoggedIn={setIsLoggedIn} userUsername={userUsername} />
        <div className="Main">
          <SideBar />
          <Routes>
            <Route path="/home" element={<div className="home">Home</div>} />
            <Route
              path="/favorites"
              element={<div className="favorites">Favorites</div>}
            />
            <Route
              path="/watchlater"
              element={<div className="watchlater">Watch Later</div>}
            />
            <Route path="*" element={<Navigate to="/home" replace={true} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
