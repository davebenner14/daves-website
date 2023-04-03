import React from "react";
import { portfolioData } from "../../../../data";
import { Container, Pill } from "./styled";

function Skills() {
  return (
    <Container>
      {portfolioData.skills.map((skill) => (
        <div key={skill.id}>
          <a href={skill.link} target="_blank" rel="noopener noreferrer">
            <Pill>
              <img src={skill.image} alt={skill.title} />
            </Pill>
            <p>{skill.title}</p>
          </a>
        </div>
      ))}
    </Container>
  );
}

export default Skills;
