import React from "react";
import { FaRegBell } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Profile = ({ setOpenSideBar }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const imageStyle = {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
  };

  const bellStyle = {
    fontSize: "20px",
  };

  const handleToggleMenu = () => {
    console.log("open menu");
    setOpenSideBar((prev) => !prev);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={styles["profile-header-div"]}>
        <div className={styles["profile-logo-div"]}>
          <GiHamburgerMenu onClick={handleToggleMenu} />

          <h6>BASE</h6>
        </div>
        <div className={styles["profile-auth0-div"]}>
          <FaRegBell style={bellStyle} />
          <img src={user.picture} alt={user.name} style={imageStyle} />
        </div>
      </div>
    )
  );
};

export default Profile;
