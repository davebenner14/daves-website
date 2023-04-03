import { Category, Container, Image, ProjectContainer, Title } from "./styled";
import React from "react";
import { portfolioData } from "../../../../data";

function Projects() {
  return (
    <Container>
      {portfolioData.projects.map((project) => (
        <ProjectContainer key={project.id}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Image src={project.image} alt={project.title} />
            <Category>{project.category}</Category>
            <Title>{project.title}</Title>
          </a>
        </ProjectContainer>
      ))}
    </Container>
  );
}

export default Projects;
