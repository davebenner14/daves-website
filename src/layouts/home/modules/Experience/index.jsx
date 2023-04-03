import React from "react";
import { portfolioData } from "../../../../data";
import { Container, Pill } from "./styled";

function Experience() {
  return (
    <Container>
      {portfolioData.experience.map((experience) => (
        <div key={experience.id}>
          <a href={experience.link} target="_blank" rel="noopener noreferrer">
            <Pill>
              <img src={experience.image} alt={experience.title} />
            </Pill>
            <p>{experience.title}</p>
            <p>{experience.year}</p>
          </a>
        </div>
      ))}
    </Container>
  );
}

export default Experience;
