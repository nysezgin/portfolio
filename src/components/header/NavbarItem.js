import React from "react";

export default function NavbarItem({ handleNavOpen, itemName }) {
  return (
    <li className="navbar__item">
      <a className="navbar__link" onClick={()=> handleNavOpen()} href={"#" + itemName}>
        {itemName}
      </a>
    </li>
  );
}
