import React from "react";
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className=".contact__option-icon" />
            <h4>Email</h4>
            <h5>otobongedoho18@gmail.com</h5>
            <a
              href="mailto:otobongedoho18@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className=".contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Otobong Godwin</h5>
            <a
              href="https://web.facebook.com/otobong.godwin.35"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className=".contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348081512182</h5>
            <a
              href="http://api.whatsapp.com/send?phone=2348081512182"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form className="contact-form">
          <input
            type="text"
            name="name"
            className="contact-name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            className="contact-email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
