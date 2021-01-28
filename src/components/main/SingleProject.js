import React from "react";

export default function SingleProject({ id, label, link, image }) {
  return (
    <a
      className="projects__link"
      target="_blank"
      rel="noreferrer"
      href={link}
    >
      <img className="projects__image" src={image} alt="" />
      <p className="projects__label">{label}</p>
    </a>
  );
}
