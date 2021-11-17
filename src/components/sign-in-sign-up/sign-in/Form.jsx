import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StyledLogo } from "../../../styles/Navbar";
import logo from "../../../images/Logo.png";
import "../../../styles/sign-in-out.css";
import Button from "../../UI/Button";
import UseFormIn from "../UseFormIn";
import validate from "../ValidateInfo";
import { AuthContext } from "../../../context/auth-context";
const Form = (props) => {
  const { addAuthUser } = useContext(AuthContext);
  console.log("add auth user", addAuthUser);

  const { handleChange, values, handleSubmit, errors } = UseFormIn(props, validate, addAuthUser);
  const { authUser } = useContext(AuthContext);
  console.log("auth user", authUser);
  return (
    <>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <StyledLogo src={logo} alt="Logo" />
            <h2 className="title">Sign In</h2>
            <div className="form-input">
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input id="username" type="username" placeholder="username" name="username" values={values.username} onChange={handleChange} />
              </div>
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-input">
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input id="password" type="password" placeholder="Password" name="password" values={values.password} onChange={handleChange} />
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
