import React from "react";
import Headline from "../../components/Headline";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import About from "./modules/About";
import { Container } from "./styled";

function Home() {
  return (
    <Container>
      <Nav />
      <Headline />
      <Section>
        <About />
      </Section>
      <Section heading="Clients">
        <p>Clients</p>
      </Section>
      <Section heading="Skills">
        <p>Skills</p>
      </Section>
      <Section heading="Education & Experience">
        <p>Experience</p>
      </Section>
      <Section heading="Projects">
        <p>Projects</p>
      </Section>
      <Section heading="Contact">
        <p>Contact</p>
      </Section>
    </Container>
  );
}

export default Home;
