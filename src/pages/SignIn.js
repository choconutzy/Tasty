import React from "react";
import SignInForm from "../components/sign-in-sign-up/sign-in/SignInForm";
import { useNavigate } from "react-router-dom";
import IsLogin from "../components/sign-in-sign-up/IsLogin";
const SignIn = (props) => {
  const { loginHandler, isLoggedin } = IsLogin();
  let navigate = useNavigate();

  return (
    <>
      {!isLoggedin && <SignInForm onLogin={loginHandler} />}
      {isLoggedin && navigate("../", { replace: true })}
    </>
  );
};
export default SignIn;
