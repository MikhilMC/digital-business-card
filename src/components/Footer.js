import React from "react";
import facebookIcon from "../images/facebook-icon.png";
import githubIcon from "../images/github-icon.png";
import instagramIcon from "../images/instagram-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import twitterIcon from "../images/twitter-icon.png";

function Footer() {
  return (
    <div className="footer">
      <a href="link" id="twitter-logo">
        <img alt="twitter logo" src={twitterIcon} />
      </a>
      <a href="link" id="facebook-logo">
        <img alt="facebook logo" src={facebookIcon} />
      </a>
      <a href="link" id="instagram-logo">
        <img alt="instagram logo" src={instagramIcon} />
      </a>
      <a href="link" id="linkedin-logo">
        <img alt="linkedin logo" src={linkedinIcon} />
      </a>
      <a href="link" id="github-logo">
        <img alt="github logo" src={githubIcon} />
      </a>
    </div>
  );
}

export default Footer;
