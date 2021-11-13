import React from "react";
import loginImg from "../../../images/loginImg.svg";
import "../styles/Style.css";

export default function Panel() {
  return (
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>Hello again!</h3>
        </div>
        <img src={loginImg} className="image" alt="" />
      </div>

      <div className="panel right-panel"></div>
    </div>
  );
}
