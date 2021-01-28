import "./reset.css";
import "./App.scss";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  //// IsMobile Check
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
    
  }, []);
  const isMobile = size < 768;
  return (
    <>
      <Header isMobile={isMobile} />
      <Main />
    </>
  );
}

export default App;
