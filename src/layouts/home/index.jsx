import React from "react";
import Contact from "../../components/Contact";
import Headline from "../../components/Headline";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import About from "./modules/About";
import Clients from "./modules/Clients";
import Experience from "./modules/Experience";
import Projects from "./modules/Projects";
import Skills from "./modules/Skills";
import { Container } from "./styled";

function Home() {
  return (
    <Container>
      <Nav />
      <Section id="about">
        <About />
        <Headline />
      </Section>
      <Section id="skills" heading="Skills">
        <Skills />
      </Section>
      <Section id="clients" heading="Clients">
        <Clients />
      </Section>

      <Section id="experience" heading="Education & Experience">
        <Experience />
      </Section>
      <Section id="projects" heading="Projects">
        <Projects />
      </Section>
      <Section id="contact" heading="Contact">
        <Contact />
      </Section>
    </Container>
  );
}

export default Home;
