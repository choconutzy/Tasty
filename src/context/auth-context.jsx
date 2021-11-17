import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState();

  const addAuthUser = (username, email, password) => {
    setAuthUser({ username, email, password });
  };

  //   useEffect(() => {
  //     const newestUser = JSON.parse(sessionStorage.getItem("authuser"));
  //     setAuthUser(newestUser);
  //   }, []); // componentDidMount

  return <AuthContext.Provider value={{ authUser, addAuthUser }}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
