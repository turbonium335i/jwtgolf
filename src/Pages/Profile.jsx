import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const Profile = () => {
  let { user } = useContext(AuthContext);

  return (
    <div className="container bg-dark text-secondary">
      Profile
      {user ? (
        <h1 className="text-warning">{user.username}_ssss</h1>
      ) : (
        <h1 className="text-secondary">Guest</h1>
      )}
    </div>
  );
};

export default Profile;
