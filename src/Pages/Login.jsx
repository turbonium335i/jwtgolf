import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div className="container">
      <form onSubmit={loginUser}>
        <input type="text" id="fname" name="username" placeholder="Username" />

        <input type="text" id="lname" name="password" placeholder="Password" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
