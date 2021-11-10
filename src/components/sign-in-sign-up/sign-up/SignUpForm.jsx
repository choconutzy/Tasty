import React from "react";
import "../styles/Style.css";
import Form from "./Form";
import Panel from "./Panel";

const SignUpForm = () => {
  return (
    <>
      <div className="container sign-up-mode">
        <Form />
        <Panel />
      </div>
    </>
  );
};

export default SignUpForm;
