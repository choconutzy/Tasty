import React from "react";
import SignUpForm from "../components/sign-in-sign-up/sign-up/SignUpForm";
import { useNavigate } from "react-router-dom";
import IsLogin from "../components/sign-in-sign-up/IsLogin";
const SignUp = () => {
  const { isLoggedin } = IsLogin();

  let navigate = useNavigate();

  return (
    <div>
      {!isLoggedin && <SignUpForm />}

      {isLoggedin && navigate("../sign-in", { replace: true })}
    </div>
  );
};
export default SignUp;
