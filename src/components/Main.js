import React from "react";
import About from "./main/About";
import Contact from "./main/Contact";
import Intro from "./main/Intro";
import Projects from "./main/Projects";

export default function Main() {
  return (
    <main>
      <Intro />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
