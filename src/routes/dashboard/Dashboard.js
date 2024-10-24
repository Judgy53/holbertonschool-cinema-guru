import Header from "../../components/navigation/Header";
import "./dashboard.css";

/**
 * @param {Object} props - the component properties
 * @param {string} props.userUsername - The state for the username
 * @param {Function} props.setIsLoggedIn - The setState for the isLoggedin state
 */
function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="Dashboard">
      <Header setIsLoggedIn={setIsLoggedIn} userUsername={userUsername} />
    </div>
  );
}

export default Dashboard;
