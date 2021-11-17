import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState();

  const addAuthUser = (username, email, password) => {
    setAuthUser({ username, email, password });
  };

  return <AuthContext.Provider value={{ authUser, addAuthUser }}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
