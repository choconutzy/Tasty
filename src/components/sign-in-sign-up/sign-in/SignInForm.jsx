import React from "react";
import "../styles/Style.css";

import Form from "./Form";
import Panel from "./Panel";

const SignInForm = () => {
  return (
    <>
      <div className="container">
        <Form />
        <Panel />
      </div>
    </>
  );
};

export default SignInForm;
