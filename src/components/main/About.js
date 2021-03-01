import React from "react";
import SingleSkill from "./SingleSkill";
import nysezgin from "../images/nysezgin.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <h1 className="about__title">About</h1>
      <p className="about__info">
        <img
          className="about__image"
          src={nysezgin}
          alt="Necati Yasin Sezgin"
        />
        I am someone who likes games and passionate about making them. I spend
        all my free time to work on my game projects, improve my programming
        skills and learn new things about game development. My game engine of
        choice is Unity.
      </p>
      <section className="skills">
        <h3 className="skills__title">Skills</h3>
        <ul className="skills__list">
          <SingleSkill iconClass="unity" label="Unity" />
          <li className="skills__item">
            <i className="skills__icon fas fa-file-code"></i>
            <p className="skills__label">C#</p>
          </li>
          <SingleSkill iconClass="js-square" label="JavaScript" />
          <SingleSkill iconClass="github" label="GitHub" />
          <SingleSkill iconClass="html5" label="HTML5" />
          <SingleSkill iconClass="css3" label="CSS3" />
          <SingleSkill iconClass="react" label="React JS" />
        </ul>
      </section>
    </section>
  );
}
