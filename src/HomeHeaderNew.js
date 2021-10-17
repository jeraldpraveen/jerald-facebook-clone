import React, { useState, useEffect } from "react";
import "./HomeHeaderNew.css";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { userCollection } from "./firebase";
import { getDocs, onSnapshot } from "firebase/firestore";
import { Avatar } from "@material-ui/core";

const HomeHeaderNew = ({ user, selected }) => {
  const history = useHistory("");
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  if (user === false) {
    history.push("/login");
  }

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

  const updateSearchResults = (event) => {
    setSearchTerm(event.target.value);
    document.getElementsByClassName("dropdown-content3")[0].style.display =
      "block";
  };

  useEffect(() => {
    onSnapshot(userCollection, (querySnapshot) => {
      const dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
      });
      setAllUsers(dataArray);
      if (allUsers !== undefined) {
        const finalUsers = allUsers.filter((user) => {
          return (
            user.displayName.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
            -1
          );
        });
        setFilteredUsers(finalUsers);
      }
    });
  }, [searchTerm]);

  return (
    <div className="homeHeader">
      <div className="homeHeaderLogoAndSearch">
        <Link to="/">
          <img
            src="https://i.ibb.co/72dN4JJ/Facebook-icon-2019-1.png"
            className="homeHeader__logo"
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
            {allUsers !== undefined &&
              filteredUsers.map((user1) => {
                return (
                  <li>
                    <a onClick={collapseSearch} href="/">
                      <Avatar className="searchAvatar" src={user1.photoURL} />
                      <h3 className="seacrchH3">{user1.displayName}</h3>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderNew;
