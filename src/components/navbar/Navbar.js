import React, { useState } from "react";
import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from "../../images/Logo.png";
import { StyledLogo, StyledNavLink } from "../../styles/Navbar";

// hide navbar on some pages
const pathsToHide = ["/sign-up", "/sign-in"];

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // hide navbar on some pages
  const { pathname } = useLocation();
  if (pathsToHide.includes(pathname)) {
    return <></>;
  }
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          <StyledLogo src={logo} alt="Logo" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-links active" : "nav-links")} onClick={closeMobileMenu}>
              <StyledNavLink>Home</StyledNavLink>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/recipes" className={({ isActive }) => (isActive ? "nav-links active" : "nav-links")} onClick={closeMobileMenu}>
              <StyledNavLink>Recipes</StyledNavLink>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-recipes" className={({ isActive }) => (isActive ? "nav-links active" : "nav-links")} onClick={closeMobileMenu}>
              <StyledNavLink>My Recipes</StyledNavLink>
            </NavLink>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLink to={pathname} className="nav-links" onClick={closeMobileMenu}>
              <StyledNavLink>
                <i className="fas fa-user-circle"></i> <i className="fas fa-caret-down" />
              </StyledNavLink>
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <NavLink to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              <StyledNavLink>Sign Up</StyledNavLink>
            </NavLink>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
