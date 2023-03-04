import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./footer.css";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        OTY
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/otobong-edoho-ba38aa184/">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/otobongedoho2">
          <BsTwitter />
        </a>
        <a href="https://github.com/otie16">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
