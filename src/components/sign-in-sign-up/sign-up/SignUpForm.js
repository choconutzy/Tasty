import React, { useState } from "react";
import "../../../styles/sign-in-out.css";
import Form from "./Form";
import Panel from "./Panel";

const SignUpForm = () => {
  return (
    <>
      <div className="container-sign sign-up-mode">
        <Form />
        <Panel />
      </div>
    </>
  );
};

export default SignUpForm;
