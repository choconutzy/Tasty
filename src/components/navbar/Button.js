import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 120px;
  height: 50px;
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  background-color: var(--primary);

  &:hover {
    padding: 6px 18px;
    transition: all 0.3s ease-out;
    background-color: transparent;
    /* black-navbar */
    color: #fff;
    /* white-navbar */
    /* color: #f7c325; */
    border-radius: 4px;
    border: 2px solid var(--primary);
    transition: all 0.3s ease-out;
  }
`;

export default function Button() {
  return (
    <NavLink to="/sign-in">
      <StyledButton className="btn">Sign in</StyledButton>
    </NavLink>
  );
}
