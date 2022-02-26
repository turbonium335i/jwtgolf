import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ mstat, messageback }) => {
  let navigate = useNavigate();

  let sendData = async () => {
    const api_userName = document.getElementById("userName").value;
    const api_nameName = document.getElementById("nameName").value;
    const api_email = document.getElementById("email").value;
    const api_password = document.getElementById("password").value;
    const api_password2 = document.getElementById("password2").value;

    if (
      api_password === api_password2 &&
      api_password.length > 6 &&
      api_userName !== "" &&
      api_userName.length > 6 &&
      api_nameName !== "" &&
      api_nameName.length > 1 &&
      api_email !== "" &&
      api_email.length > 6
    ) {
      console.log("data sent from front");

      fetch("https://pertinacity1.pythonanywhere.com/reactMakeUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          api_userName: api_userName,
          api_nameName: api_nameName,
          api_email: api_email,
          api_password: api_password,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("data", data);
          if (data === "SomethingWrong") {
            messageback("Error! Duplicate Username or Email");
            mstat();
          } else {
            messageback("Account Created: " + api_userName);
            mstat();
            // navigate("/login");
          }
        });
    } else {
      messageback("Error! Form Incorrect");
      mstat();
    }
  };

  return (
    <div className="container bg-secondary">
      <form>
        <h3>OnWear Golf Sign Up</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            id="userName"
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            id="nameName"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-password"
            id="password2"
          />
        </div>
        <br />
        <div className="  text-center">
          <button
            type="button"
            className="btn btn-lg btn-dark btn-block "
            onClick={sendData}
          >
            Sign Up
          </button>
          <br />
          <br />
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
