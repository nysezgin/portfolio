import React from "react";
import gameProjectsData from "./gameProjectsData";
import SingleProject from "./SingleProject";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h1 className="projects__title">Projects</h1>
      {/* <p className="projects__info">
        These are my project.
      </p> */}
      <div className="projects__wrapper">
        {gameProjectsData.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}
