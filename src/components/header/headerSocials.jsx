import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const headerSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default headerSocials;
