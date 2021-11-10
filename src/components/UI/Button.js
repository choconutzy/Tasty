import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    // <Link to="sign-up">
    <button type="submit" className="btn">
      {props.label}
    </button>
    // </Link>
  );
}
