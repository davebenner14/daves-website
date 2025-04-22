import React from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import WorkExperience from "../components/WorkExperience";
import AboutMe from "../components/AboutMe";
import Games from "../components/Games";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <IntroSection />

      <section id="work-experience" className="snap-start">
        <WorkExperience />
      </section>

      <section id="about" className="snap-start">
        <AboutMe />
      </section>

      <section id="games" className="snap-start">
        <Games />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
