import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({ loginStatus, setLoginStatus }) => {
  const navigate = useNavigate();
  const IsLogin = useSelector((state) => state.auth.authenticate);

  const goToLoginPage = () => {
    if (loginStatus) {
      setLoginStatus(false);
    } else {
      navigate("/login");
    }
  };

  const menuList = [
    "men",
    "divided",
    "women",
    "children",
    "young",
    "H&M Home",
    "sale",
    "continue",
  ];

  const search = (event) => {
    if (event.key == "Enter") {
      console.log("search: ", event);
      console.log("keyword: ", event.target.value);

      navigate(`/?q=${event.target.value}`);
    }
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLoginPage}>
          <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
          <div>{IsLogin ? "Logout" : "Login"}</div>
        </div>
      </div>
      <div className="nav-logo" onClick={goToHomePage}>
        <img
          width="100"
          src="https://kingswaymall.com/wp-content/uploads/2021/11/cd5917492a04f794eb4531d72e0a07ddf1429788.png"
        ></img>
      </div>
      <div className="nav-menu-area">
        <ul className="nav-menu">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="nav-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <div>
            <input
              className="nav-search-input"
              type="text"
              onKeyUp={(event) => search(event)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
