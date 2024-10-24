import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigation.css";

/**
 * @param {Object} props - the component properties
 * @param {string} props.userUsername - the controlled state of the username
 * @param {Function} props.setIsLoggedIn - the setState for the isLoggedIn state
 */
function Header({ userUsername, setIsLoggedIn }) {
  const logout = (e) => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="Header">
      <p className="title">Cinema Guru</p>
      <div className="user">
        <img
          src="https://picsum.photos/100/100"
          alt="Profile of the logged in user"
          className="profile-pic"
        />
        <p className="welcome">Welcome, {userUsername}!</p>
        <span className="logout" onClick={logout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          Logout
        </span>
      </div>
    </nav>
  );
}

export default Header;
