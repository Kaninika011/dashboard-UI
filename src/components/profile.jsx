import React from "react";
import { FaRegBell } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const profileStyle = {
    position: "fixed",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    zIndex: "1000",
    textAlign: "left",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
  };

  const imageStyle = {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    marginRight: "10px", 
  };

  const bellStyle = {
    fontSize: "20px",
    marginRight: "2rem",
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={profileStyle}>
        <FaRegBell style={bellStyle} />
        <img src={user.picture} alt={user.name} style={imageStyle} />
      </div>
    )
  );
};

export default Profile;
