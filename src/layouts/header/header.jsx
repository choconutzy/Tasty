import React from "react";

import "../../components/navbar/Navbar";
import "../../styles/Style.css";
import Navbar from "../../components/navbar/Navbar";
import IsLogin from "./IsLogin";
function Header() {
  const { loginHandler, logoutHandler, isLoggedin } = IsLogin();

  // let navigate = useNavigate();
  return (
    <>
      <Navbar checkLoggedin={isLoggedin} onLogin={loginHandler} onLogout={logoutHandler} />
    </>
  );
}

export default Header;
