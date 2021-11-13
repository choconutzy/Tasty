import React from "react";
import { NavLink } from "react-router-dom";
import { StyledLogo } from "../../../styles/Navbar";
import logo from "../../../images/Logo.png";
import "../styles/Style.css";
import Button from "../../UI/Button";
const Form = () => {
  return (
    <>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <StyledLogo src={logo} alt="Logo" />

            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <Button label="Sign in" />

            <span className="ask-register-login">
              Not registered yet?
              <NavLink to="/sign-up"> Sign Up</NavLink>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
