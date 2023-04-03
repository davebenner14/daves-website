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
        <Logo
          src="assets/pngegg.png"
          alt="David Benner"
          style={{ maxWidth: "40px", maxHeight: "60px" }}
        />
        <Name onClick={handleScrollToTop}>David Benner</Name>
      </div>
      <SocialMedia />
    </Nav>
  );
}

export default Navbar;
