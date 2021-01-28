import React from "react";
import SingleSkill from "./SingleSkill";
import nysezgin from "../images/nysezgin.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <h1 className="about__title">About</h1>
      <p className="about__info">
      <img className="about__image" src={nysezgin} alt="Necati Yasin Sezgin" />
        I'm a self-taught coder, interested in front-end development. I like
        coding and spend all my free time practicing. I follow mobile first
        approach, BEM methodology and responsive web design on my work.
      </p>
      <section className="skills">
        <h3 className="skills__title">Skills</h3>
        <ul className="skills__list">
          <SingleSkill iconClass="html5" label="HTML5" />
          <SingleSkill iconClass="css3" label="CSS3" />
          <SingleSkill iconClass="js-square" label="JavaScript" />
          <SingleSkill iconClass="sass" label="SASS" />
          <SingleSkill iconClass="react" label="React JS" />
        </ul>
      </section>
    </section>
  );
}
