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
  const [visibleSections, setVisibleSections] = useState([]);

  const handleIntersection = (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .map((entry) => entry.target.id);
    setVisibleSections(visible);
  };

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Container>
      <Nav />
      <Section
        id="about"
        className={visibleSections.includes("about") ? "visible" : ""}
      >
        <About />
        <Headline />
      </Section>
      <Section
        id="skills"
        className={visibleSections.includes("skills") ? "visible" : ""}
        heading="Skills"
      >
        <Skills />
      </Section>
      <Section
        id="experience"
        className={visibleSections.includes("experience") ? "visible" : ""}
        heading="Education & Experience"
      >
        <Experience />
      </Section>
      <Section
        id="projects"
        className={visibleSections.includes("projects") ? "visible" : ""}
        heading="Projects"
      >
        <Projects />
      </Section>
      <Section
        id="contact"
        className={visibleSections.includes("contact") ? "visible" : ""}
        heading="Contact"
      >
        <Contact />
      </Section>
    </Container>
  );
}

export default Home;
