import React from "react";
import projectsData from "./projectsData";
import SingleProject from "./SingleProject";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__info">
        These are some projects I did for coding practice. You can visit{" "}
        <a
          className="portfolio-sections__link"
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/nysezgin"}
        >
          my GitHub page
        </a>{" "}
        to see their codes.
      </p>
      <div className="projects__wrapper">
        {projectsData.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}
