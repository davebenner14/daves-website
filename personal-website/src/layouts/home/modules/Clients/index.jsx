import React from "react";
import { portfolioData } from "../../../../data";
import { Container } from "./styled";

function Clients() {
  return (
    <Container>
      {portfolioData.companyLogos.map((logo) => (
        <img key={logo.id} src={logo.image} alt={logo.title} />
      ))}
    </Container>
  );
}

export default Clients;
