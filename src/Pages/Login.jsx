import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import SignUp from "../Pages/SignUp";

const Login = ({ mstat, messageback }) => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div className="container">
      <h1 className="text-secondary">Login</h1>

      <form onSubmit={loginUser}>
        <input type="text" id="fname" name="username" placeholder="Username" />{" "}
        &nbsp;
        <input
          type="password"
          id="lname"
          name="password"
          placeholder="Password"
        />
        &nbsp;
        <input
          type="submit"
          className="  btn-warning text-dark "
          value="Login"
        />
      </form>
      <br />
      <br />
      <br />
      <br />
      <SignUp mstat={mstat} messageback={messageback} />
    </div>
  );
};

export default Login;
