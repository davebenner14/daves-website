import React, { useState } from "react";
import { portfolioData } from "../../data";
import { Container } from "./styled";

function Headline() {
  const [randomColor, setRandomColor] = useState("#213547");

  const handleClick = () => {
    const color = "#" + (((1 << 24) * Math.random()) | 0).toString(16); // generate random hex color code
    setRandomColor(color);
  };

  return (
    <Container onClick={handleClick} style={{ backgroundColor: randomColor }}>
      <p>
        {portfolioData.name} - {portfolioData.jobTitle} - Mentor - Based in{" "}
        {portfolioData.country}
      </p>
    </Container>
  );
}

export default Headline;
