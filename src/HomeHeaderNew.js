import React from "react";
import "./HomeHeaderNew.css";
import { Link } from "react-router-dom";

const HomeHeaderNew = (props) => {
  const user = props.user;
  const selected = props.selected;

  const collapseSearch = () => {};
  const expandSearch = () => {};
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
          <i className="searchBackIcon" />
        </div>
        <div className="homeHeader__search" onClick={expandSearch}>
          <i className="searchIcon" />
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
