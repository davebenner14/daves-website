import React, { useState } from "react";
import SocialMedia from "../SocialMedia";
import { Nav, Logo, Name } from "./styled";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Nav isDarkMode={isDarkMode}>
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={handleScrollToTop}
      >
        <div className="image-container" style={{ margin: "0 10px" }}>
          <img
            src="https://i.imgur.com/sQM5hTD.png"
            alt="David Benner"
            style={{ maxWidth: "40px", maxHeight: "60px" }}
          />
        </div>
        <Name className="black-text" onClick={handleScrollToTop}>
          David Benner
        </Name>
      </div>
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Night Mode"}
      </button>
      <SocialMedia />
    </Nav>
  );
}

export default Navbar;
