import React from "react";
import "./portfolio.css";
import photo from "../../assets/trade.jpg"

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__item__image">
            <img src={photo} alt="pic" />
          </div>
          <h3>Python Web Server using fastAPI</h3>
          <a
            href="https://github.com/otie16/Simple-Python-Web-Server-using-FastApi"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item__image">
            <img src={photo} alt="pic" />
          </div>
          <h3>Python hangman game</h3>
          <a
            href="https://github.com/otie16/python_hangman_project_game"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item__image">
            <img src={photo} alt="pic" />
          </div>
          <h3>React and Node hostel app</h3>
          <a href="https://github.com/otie16/hostel-app-server" className="btn">
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
