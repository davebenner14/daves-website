import React from "react";
import SocialMedia from "../SocialMedia";
import { Container, Logo } from "./styled";

function Nav() {
  return (
    <Container>
      <Logo
        src="https://i.imgur.com/EQYxQF5.png?1"
        alt="bennertech"
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      />
      <SocialMedia />
    </Container>
  );
}

export default Nav;
