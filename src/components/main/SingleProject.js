import React from "react";

export default function SingleProject({
  id,
  label,
  link,
  image,
  genre,
  date,
  engine,
  platform,
  about,
}) {
  return (
    <div className="projects__container">
      <img className="projects__image" src={image} alt="" />
      <div className="projects__info">
        <h2 className="projects__name">{label}</h2>
        <div className="projects__info-wrapper">
          <p className="projects__label">Link:</p>
          {link}
        </div>
        <div className="projects__info-wrapper">
          <p className="projects__label">Genre:</p>
          <p className="projects__label-info">{genre}</p>
        </div>
        <div className="projects__info-wrapper">
          <p className="projects__label">Date:</p>
          <p className="projects__label-info">{date}</p>
        </div>
        <div className="projects__info-wrapper">
          <p className="projects__label">Engine:</p>
          <p className="projects__label-info">{engine}</p>
        </div>
        <div className="projects__info-wrapper">
          <p className="projects__label">Platform:</p>
          <p className="projects__label-info">{platform}</p>
        </div>
        <p className="projects__label-info-about">{about}</p>
      </div>
    </div>
  );
}
