import React from "react";
import { NavLink } from "react-router-dom";
import { StyledLogo } from "../../../styles/Navbar";
import logo from "../../../images/Logo.png";
import "../styles/Style.css";
import Button from "../../UI/Button";
import SigninFunction from "../SigninFunction";
import validate from "../ValidateInfo";
const Form = (submitForm) => {
  const { handleChange, values, handleSubmit, errors } = SigninFunction(submitForm, validate);

  return (
    <>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <StyledLogo src={logo} alt="Logo" />
            <div className="form-input">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input id="username" type="text" nama="username" placeholder="Username" value={values.username} onChange={handleChange} />
              </div>
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-input">
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input id="password" type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
              </div>
              {errors.password && <p>{errors.password}</p>}
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
