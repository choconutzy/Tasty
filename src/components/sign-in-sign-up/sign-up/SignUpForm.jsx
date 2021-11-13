import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../styles/Style.css";
import Form from "./Form";
import Panel from "./Panel";

const SignUpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="container sign-up-mode">
        {/* <Form /> */}
        <Panel />
        {!isSubmitted ? <Form submitForm={submitForm} /> : console.log(isSubmitted)}

        {/* {!isSubmitted ? <Form submitForm={submitForm} /> : <Navigate to="/" />} */}
      </div>
    </>
  );
};

export default SignUpForm;
