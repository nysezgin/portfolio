import React from 'react'
import nysezgin from "../images/nysezgin.jpg";

export default function Intro() {
    return (
      <section id="intro" className="intro">
        <h1 className="intro__title">Hi, I'm Yasin</h1>
        <p className="intro__info">A junior front-end developer</p>
        <img
          className="intro__image"
          src={nysezgin}
          alt="Necati Yasin Sezgin"
        />
      </section>
    );
}
