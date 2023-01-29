import React from "react";
import "./header.css";
import CTA from "./CTA";
import Photo from "../../assets/oto_photo.png";
import HeaderSocials from "./headerSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Otobong Godwin</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Photo} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
