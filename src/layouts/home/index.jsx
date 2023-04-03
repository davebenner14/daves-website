import React, { useState, useEffect } from "react";
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
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setSkillsVisible(true), 500);
    setTimeout(() => setExperienceVisible(true), 1000);
    setTimeout(() => setProjectsVisible(true), 1500);
    setTimeout(() => setContactVisible(true), 2000);
  }, []);

  return (
    <Container>
      <Nav />
      <Section>
        <About />
        <Headline />
      </Section>
      <Section className={skillsVisible ? "fade-in" : ""} heading="Skills">
        <Skills />
      </Section>
      <Section
        className={experienceVisible ? "fade-in" : ""}
        heading="Education & Experience"
      >
        <Experience />
      </Section>
      <Section className={projectsVisible ? "fade-in" : ""} heading="Projects">
        <Projects />
      </Section>
      <Section className={contactVisible ? "fade-in" : ""} heading="Contact">
        <Contact />
      </Section>
    </Container>
  );
}

export default Home;
