import React from "react";
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
      <Headline />
      <Section>
        <About />
      </Section>
      {/* <Section heading="Clients">
        <Clients />
      </Section> */}
      {/* This Section is currently grayed out because there are no Clients... once acquired enough, can easily add them with their logos on /Clients folder */}
      <Section heading="Skills">
        <Skills />
      </Section>
      <Section heading="Education & Experience">
        <Experience />
      </Section>
      <Section heading="Projects">
        <Projects />
      </Section>
      <Section heading="Contact">
        <p>Contact</p>
      </Section>
    </Container>
  );
}

export default Home;
