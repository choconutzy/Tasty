import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";

function Dropdown(props) {
  // auth user
  const authUser = JSON.parse(sessionStorage.getItem("authuser"));
  let username = "username";
  if (authUser && authUser !== undefined) {
    username = authUser.username;
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <p className={item.cName} to={item.path} onClick={props.onLogout}>
                <i className={item.icon} style={{ color: "white" }}></i>
                {item.title === "Username" ? " " + username : " " + item.title}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
