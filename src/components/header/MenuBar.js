import React from 'react'

export default function MenuBar({number, isNavOpen}) {
    const menuBarClass = "menu__bar-" + number;
    const menuBarClassActive = menuBarClass + "--active"
    return (
      <div
        className={isNavOpen ? menuBarClass + " " + menuBarClassActive : menuBarClass}
      ></div>
    );
}
