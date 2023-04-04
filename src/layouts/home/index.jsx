import React, { useEffect, useRef } from "react";
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
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 1000);
        }
      });
    }, options);
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container>
      <Nav />
      <Section id="about" ref={useRef()} className="hidden">
        <About />
        <Headline />
      </Section>
      <Section id="skills" ref={useRef()} className="hidden" heading="Skills">
        <Skills />
      </Section>
      <Section
        id="experience"
        ref={useRef()}
        className="hidden"
        heading="Education & Experience"
      >
        <Experience />
      </Section>
      <Section
        id="projects"
        ref={useRef()}
        className="hidden"
        heading="Projects"
      >
        <Projects />
      </Section>
      <Section id="contact" ref={useRef()} className="hidden" heading="Contact">
        <Contact />
      </Section>
    </Container>
  );
}

export default Home;
