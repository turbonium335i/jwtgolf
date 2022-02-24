import React from "react";

const SignUp = ({ mstat, messageback }) => {
  let sendData = async () => {
    const api_userName = document.getElementById("userName").value;
    const api_nameName = document.getElementById("nameName").value;
    const api_email = document.getElementById("email").value;
    const api_password = document.getElementById("password").value;

    if (1 === 1) {
      console.log("data sent from front");

      fetch("http://127.0.0.1:8000/reactMakeUser", {
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
          }
        });
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
