import React, { useState } from "react";
import Navbar from "./header/Navbar";
import Menu from "./header/MenuBar";

export default function Header({ isMobile }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <a className="logo" href="/">
        nysezgin.com
      </a>
      {isMobile && (
        <div className="menu" onClick={() => setIsNavOpen(!isNavOpen)}>
          <Menu number={"1"} isNavOpen={isNavOpen} />
          <Menu number={"2"} isNavOpen={isNavOpen} />
          <Menu number={"3"} isNavOpen={isNavOpen} />
        </div>
      )}
      <Navbar navbarOpen={isNavOpen} />
    </header>
  );
}
