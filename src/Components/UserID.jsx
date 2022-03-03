import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
const UserID = () => {
  let { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <span className="text-success">{user.username} </span>
      ) : (
        <span className="text-secondary">Guest</span>
      )}
    </>
  );
};

export default UserID;
