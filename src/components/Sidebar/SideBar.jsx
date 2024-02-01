import {
  RiPieChartLine,
  RiUpload2Line,
  RiFileTextLine,
  RiCalendarLine,
  RiNotification2Line,
  RiSettings3Line,
} from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

import styles from "./Sidebar.module.css";

import { GiHamburgerMenu } from "react-icons/gi";



const SideBar = ({ setOpenSideBar, openSideBar }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(1); 
  const { logout } = useAuth0();

  const navLinks = [
    { icon: <RiPieChartLine />, text: "Dashboard" },
    { icon: <RiUpload2Line />, text: "Upload" },
    { icon: <RiFileTextLine />, text: "Invoice" },
    { icon: <RiCalendarLine />, text: "Calendar" },
    { icon: <RiNotification2Line />, text: "Notification" },
    { icon: <RiSettings3Line />, text: "Settings" },
  ];

  const handleToggleMenu = () => {
    setOpenSideBar((prev) => !prev);
  };

  const handleNavLinkClick = (index) => {
    setActiveLinkIndex(index);
  };

  return (
    <div className={`${styles["sidebar"]} ${openSideBar ? styles["hide"] : null}`}>
      <div className={styles["sidebar__container"]}>
        <div className={styles["profile-logo-div"]}>
          <GiHamburgerMenu onClick={handleToggleMenu} />
          <h5>BASE</h5>
        </div>
        <div className={styles["profile-logo-div-2"]}>
          <h5>BASE</h5>
        </div>

        <ul className={styles["nav__links"]}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${styles["nav__link"]} ${index === 1 ? styles["active"] : ""}`}
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleNavLinkClick(index)}
              >
                {link.icon}
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles["signOut-btn"]}
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;