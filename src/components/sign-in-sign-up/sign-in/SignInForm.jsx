import React from "react";
import "../../../styles/sign-in-out.css";
import Form from "./Form";
import Panel from "./Panel";

const SignInForm = (props) => {
  return (
    <>
      <div className="container-sign">
        <Form onLogin={props.onLogin} />
        <Panel />
      </div>
    </>
  );
};

export default SignInForm;
