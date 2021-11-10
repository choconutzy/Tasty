import React from "react";
import "../styles/Style.css";
import { NavLink } from "react-router-dom";
import { StyledLogo } from "../../../styles/Navbar";
import logo from "../../../images/Logo.png";
import Button from "../../UI/Button";
const Form = () => {
  return (
    <>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-up-form">
            <StyledLogo src={logo} alt="Logo" />
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" />
            </div>
            {/* <input type="submit" value="Sign Up" className="btn solid" /> */}
            <Button label="Sign up" />
            <span className="ask-register-login">
              Already have an account?
              <NavLink to="/sign-in"> Sign in</NavLink>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
