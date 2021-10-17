import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory("");

  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        className="login__logo"
      />
      <div className="login__container">
        <h3>Log In To Facebook</h3>
        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="login__login">Log In</button>
          <div className="sideinfo">
            <h5>Forgotten Password?</h5>
            <h6 className="dot">.</h6>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <h5 className="rtd">Sign up for Facebook</h5>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
