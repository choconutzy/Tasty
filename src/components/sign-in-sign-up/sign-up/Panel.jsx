import React from "react";
import registerImg from "../../../images/registerImg.svg";
import "../../../styles/sign-in-out.css";

function Panel() {
  return (
    <div>
      <div className="panels-container">
        <div className="panel left-panel"></div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Hello!</h3>
            <p>We are glad to see you</p>
          </div>
          <img src={registerImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Panel;
