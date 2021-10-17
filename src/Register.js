import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState([]);
  const [gender, setGender] = useState("");
  const history = useHistory("");

  const register = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        const docData = {
          uid: auth.user.uid,
          displayName: firstName + " " + lastName,
          email: auth.user.email,
          photoURL:
            "https://scontent.fsxv1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=VmoUYsvkMUAAX9LjphC&_nc_ht=scontent.fsxv1-1.fna&oh=4e3bdf95449954f2f266599ec66b4f1b&oe=61920478",
          birthday,
          gender,
          bio: "",
        };
        try {
          const uniqueId = "users/" + auth.user.uid;
          const newRecord = doc(db, uniqueId);
          setDoc(newRecord, docData);
        } catch (e) {
          alert(e.message);
        }
      })
      .then((success) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="register">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        className="register__logo"
      />
      <div className="register__container">
        <h1>Sign Up</h1>
        <p>Its quick and easy</p>
        <div className="hr3">
          <form onSubmit={register}>
            <div className="row">
              <input
                className="register__input"
                required
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                type="name"
                placeholder="First Name"
              />
              <input
                className="register__input"
                required
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                type="name"
                placeholder="Last Name"
              />
            </div>
            <center>
              <input
                className="register__input"
                type="email"
                required
                placeholder="Email Address"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className="register__input"
                type="password"
                required
                placeholder="New Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </center>
            <center>
              <h5 className="register__label">Date Of Birth</h5>
              <input
                className="register__date"
                type="date"
                required
                onChange={(event) => setBirthday(event.target.value)}
              />
            </center>
            <h5 className="register__label">Gender</h5>
            <div className="register__radiocontainer">
              <div className="wrapper">
                <label htmlFor="male">Male </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                  onChange={(event) => setGender(event.target.value)}
                />
              </div>
              <div className="wrapper">
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  required
                  onChange={(event) => setGender(event.target.value)}
                />
              </div>
              <div className="wrapper">
                <label htmlFor="other">Other</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  required
                  onChange={(event) => setGender(event.target.value)}
                />
              </div>
            </div>
            <p className="register__policy">
              By clicking Sign Up, you agree to our <span>Terms</span>, Data{" "}
              Policy
            </p>
            <center>
              <button className="register__button">Sign Up</button>
            </center>
            <center>
              <Link to="/login">
                <p>Already have an account ?</p>
              </Link>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
