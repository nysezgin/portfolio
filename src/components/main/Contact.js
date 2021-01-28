import React from "react";
import SingleContact from "./SingleContact";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h1 className="contact__title">Contact</h1>
      <div className="contact__wrapper">
        <SingleContact
          iconClass={"fas fa-phone"}
          info={"(+90) 536 989 94 71"}
        />
        <SingleContact
          iconClass={"far fa-envelope"}
          info={"nysezgin@gmail.com"}
        />
        <a
          className="contact__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nysezgin"
        >
          <SingleContact
            iconClass={"fab fa-linkedin-in"}
            info={"My LinkedIn Profile"}
          />
        </a>
        <a
          className="contact__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/nysezgin/"
        >
          <SingleContact
            iconClass={"fab fa-instagram"}
            info={"My Instagram Page"}
          />
        </a>
      </div>
    </section>
  );
}
