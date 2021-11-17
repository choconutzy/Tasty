import React from "react";
import "../../../styles/sign-in-out.css";
import { NavLink } from "react-router-dom";
import { StyledLogo } from "../../../styles/Navbar";
import logo from "../../../images/Logo.png";
import Button from "../../UI/Button";
import UseFormUp from "../UseFormUp";
import validate from "../ValidateInfoUp";
const Form = (props) => {
  const { handleChange, values, handleSubmit, errors } = UseFormUp(props, validate);

  return (
    <>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-up-form">
            <StyledLogo src={logo} alt="Logo" />
            <h2 className="title">Sign Up</h2>
            <div className="form-input">
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input id="username" type="text" name="username" placeholder="Username" value={values.username} onChange={handleChange} />
              </div>
              {errors.username && <p>{errors.username}</p>}
            </div>

            <div className="form-input">
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input id="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
              </div>
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div className="form-input">
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input id="password" type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
              </div>
              {errors.password && <p>{errors.password}</p>}
            </div>

            <div className="form-input">
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input id="password2" type="password" name="password2" placeholder="Confirm Password" value={values.password2} onChange={handleChange} />
              </div>
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
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
