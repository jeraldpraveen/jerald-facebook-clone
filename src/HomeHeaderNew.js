import React from "react";
import "./HomeHeaderNew.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HomeHeaderNew = (props) => {
  const user = props.user;
  const selected = props.selected;

  const collapseSearch = () => {
    document.getElementsByClassName("homeHeader__logo")[0].style.display =
      "block";
    document.getElementsByClassName("homeHeader__searchBack")[0].style.display =
      "none";
    document.getElementsByClassName("searchBox")[0].style.display = "none";
    document.getElementsByClassName("homeHeader__search")[0].style.display =
      "block";
    document.getElementsByClassName("dropdown-content3")[0].style.display =
      "none";
    document.getElementsByClassName("searchBox")[0].value = "";
  };
  const expandSearch = () => {
    document.getElementsByClassName("homeHeader__logo")[0].style.display =
      "none";
    document.getElementsByClassName("homeHeader__searchBack")[0].style.display =
      "block";
    document.getElementsByClassName("homeHeader__search")[0].style.display =
      "none";
    document.getElementsByClassName("searchBox")[0].style.display = "block";
  };
  const updateSearchResults = () => {};
  return (
    <div className="homeHeader">
      <div className="homeHeaderLogoAndSearch">
        <Link to="/">
          <img
            src="https://i.ibb.co/72dN4JJ/Facebook-icon-2019-1.png"
            class="homeHeader__logo"
          />
        </Link>
        <div className="homeHeader__searchBack" onClick={collapseSearch}>
          <ArrowBackIcon className="searchBackIcon" />
        </div>
        <div className="homeHeader__search" onClick={expandSearch}>
          <SearchIcon className="searchIcon" />
        </div>
        <input
          type="text"
          className="searchBox"
          placeholder="Search Facebook"
          onChange={updateSearchResults}
        />
        <div className="dropdown-content3">
          <ul id="list">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderNew;
