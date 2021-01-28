import "./reset.css";
import "./App.scss";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  //// IsMobile Check
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);
  const isMobile = size < 1024;
  return (
    <>
      <Header isMobile={isMobile} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
