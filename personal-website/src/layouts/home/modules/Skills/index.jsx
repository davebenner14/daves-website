import React from "react";
import { portfolioData } from "../../../../data";

function Skills() {
  return (
    <Container>
      {portfolioData.skills.map((skill) => (
        <div key={skill.id}>
          <Pill>
            <img src={skill.image} alt={skill.title} />
          </Pill>
          <p>{skill.title}</p>
        </div>
      ))}
    </Container>
  );
}

export default Skills;
