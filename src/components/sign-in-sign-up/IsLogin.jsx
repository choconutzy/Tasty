import { useState, useEffect } from "react";

function IsSignUp() {
  const [isLoggedin, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedin") === "1");

  useEffect(() => {
    const checkLogin = sessionStorage.getItem("isLoggedin");

    if (checkLogin === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (userdata) => {
    sessionStorage.setItem("isLoggedin", "1");
    const usersExistData = JSON.parse(localStorage.getItem("usersdata"));
    const detailUser = usersExistData.find((e) => e.username === userdata.username);
    sessionStorage.setItem("authuser", JSON.stringify(detailUser));

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("authuser");
    sessionStorage.removeItem("isLoggedin");
    setIsLoggedIn(false);
  };

  return { loginHandler, logoutHandler, isLoggedin };
}

export default IsSignUp;
