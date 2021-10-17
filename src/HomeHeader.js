import React from "react";
import "./HomeHeader.css";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import TelegramIcon from "@material-ui/icons/Telegram";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function HomeHeader() {
  const history = useHistory("");

  const logout = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        history.push("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="homeHeader">
      <div className="homeHeader__left">
        <Link to="/">
          <img
            src="https://as1.ftcdn.net/v2/jpg/04/32/86/42/1000_F_432864205_aaLreq5kBDWUqDqgczdEM0aVP1bXCTTc.jpg"
            alt="facebook_logo"
            className="homeHeader__logo"
          />
        </Link>
      </div>

      <div className="homeHeader_inputSearch">
        <SearchIcon className="homeHeader__inputButton" />
        <input className="homeHeader__input" type="text" placeholder="Search" />
      </div>

      <div className="homeHeader__icons">
        <section>
          <Avatar className="homeHeader__avatar" alt="" src="" />
          <h3 className="homeHeader__name">Jerald Praveen</h3>
        </section>
        <h3 className="homeHeader__dash"> | </h3>
        <section>
          <h3 className="homeHeader__name">Home</h3>
        </section>
        <h3 className="homeHeader__dash"> | </h3>
        <section>
          <h3 className="homeHeader__name">Find Friends</h3>
        </section>
        <h3 className="homeHeader__dash"> | </h3>
        <section>
          <h3 className="homeHeader__name">Create</h3>
        </section>
        <h3 className="homeHeader__dash"> | </h3>
        <section>
          <GroupAddIcon />
        </section>
        <h3 className="homeHeader__dash"> | </h3>
        <section>
          <TelegramIcon />
        </section>
        <h3 className="homeHeader__dash"> | </h3>
        <section>
          <NotificationsIcon />
        </section>
        <h3 className="homeHeader__dash"> | </h3>
        <section>
          <AssignmentIndIcon />
        </section>
        <h3 className="homeHeader__dash"> | </h3>

        <section>
          <div className="dropdown">
            <ArrowDropDownIcon className="dropdown" />
            <div className="dropdown-content">
              <a onClick={logout}>
                <p>Logout</p>
              </a>
            </div>
          </div>
        </section>

        <h3 className="homeHeader__dash"> | </h3>
      </div>
    </div>
  );
}

export default HomeHeader;
