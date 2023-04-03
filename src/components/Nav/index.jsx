import React from "react";
import SocialMedia from "../SocialMedia";
import { Nav, Logo, Name } from "./styled";

function Navbar() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Nav>
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
        <Name onClick={handleScrollToTop}>David Benner</Name>
      </div>
      <SocialMedia />
    </Nav>
  );
}

export default Navbar;
