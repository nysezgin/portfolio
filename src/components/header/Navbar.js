import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar({ handleNavOpen, isMobile, isNavOpen }) {
  return (
    <nav className={isMobile && isNavOpen ? "navbar navbar--active" : "navbar"}>
      <ul className="navbar__list">
        <NavbarItem handleNavOpen={handleNavOpen} itemName="intro" />
        <NavbarItem handleNavOpen={handleNavOpen} itemName="projects" />
        <NavbarItem handleNavOpen={handleNavOpen} itemName="about" />
        <NavbarItem handleNavOpen={handleNavOpen} itemName="contact" />
      </ul>
      <div
        className={
          isMobile && isNavOpen
            ? "navbar__overlay navbar__overlay--active"
            : "navbar__overlay"
        }
        onClick={handleNavOpen}
      />
    </nav>
  );
}
