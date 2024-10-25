import {
  faArrowRight,
  faClock,
  faFolder,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Activity from "../Activity";
import "./navigation.css";

const pages = [
  { id: "home", icon: faFolder, display: "Home" },
  { id: "favorites", icon: faStar, display: "Favorites" },
  { id: "watchlater", icon: faClock, display: "Watch Later" },
];

function SideBar() {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);

    navigate(`/${pageName}`);
  };

  const handleHoverState = (state) => {
    setSmall(!state);
    setShowActivities(state);
  };

  useEffect(() => {
    if (!showActivities) return;

    const accessToken = localStorage.getItem("accessToken");

    axios
      .get("/api/activity", {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setActivities(response.data);
      });
  }, [showActivities]);

  return (
    <nav
      className={`SideBar ${small ? "" : "open"}`}
      onMouseEnter={() => handleHoverState(true)}
      onMouseLeave={() => handleHoverState(false)}
    >
      <ul className="Navigation">
        {pages.map((page) => (
          <li
            className={`Navigation-link ${
              selected === page.id ? "selected" : ""
            }`}
            onClick={() => setPage(page.id)}
            key={page.id}
          >
            <FontAwesomeIcon icon={page.icon} />
            <span className="link-name">{page.display}</span>
            {selected === page.id && (
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
            )}
          </li>
        ))}
      </ul>
      {showActivities && (
        <div className="Activities">
          <h3>Latest Activities</h3>
          <ul className="activity-list">
            {activities.length ? (
              activities.slice(0, 10).map((act) => <Activity activity={act} />)
            ) : (
              <li>No activity yet...</li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default SideBar;
