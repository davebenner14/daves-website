import React from "react";
import { Container } from "./styled";

function Section({ heading, children }) {
  return (
    <Container>
      <h2>{heading}</h2>
      {children}
    </Container>
  );
}

export default Section;
