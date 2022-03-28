import React from "react";
import emailIcon from "../images/email-icon.png";

function Intro() {
  return (
    <div className="intro">
      <h1 className="intro--name">Mikhil Mohan. C</h1>
      <p className="intro--post">Blockchain Developer</p>
      <small className="intro--website">mikhil.website</small>
      <button className="intro--button">
        <img className="intro--email-logo" alt="email logo" src={emailIcon} />
        Email
      </button>
    </div>
  );
}

export default Intro;
