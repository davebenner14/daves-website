import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  const panelImages = [
    "/Assets/About%20Me%20Assets/Panel1.jpg",
    "/Assets/About%20Me%20Assets/Panel2.jpg",
    "/Assets/About%20Me%20Assets/Panel3.jpg",
    "/Assets/About%20Me%20Assets/Panel4.webp",
    "/Assets/About%20Me%20Assets/Panel5.jpg",
    "/Assets/About%20Me%20Assets/Panel6.jpg"
  ];

  const panelTitles = [
    "Education & Foundations",
    "Coding Journey & Expertise",
    "Aviation & Precision",
    "Sales Management & Technical Leadership",
    "Oil & Drilling Technology",
    "Gamer & Vintage Collector"
  ];

  const panelSummaries = [
    "Graduated Laurier with dual majors in Political Science & Philosophy.",
    "Over five years crafting React/Node web applications with robust integrations.",
    "Licensed commercial pilot with extensive multi-engine IFR experience.",
    "Led sales & tech teams at Simply Smart Home, boosting conversions by 20%.",
    "Planned directional drilling operations at Axis Energy using real-time telemetry.",
    "Avid vintage game collector, curating NES/SNES and preserving gaming history."
  ];

  const panelContent = [
    <>
      <p className="text-gray-800 mb-2">
        I graduated from Wilfrid Laurier University with a double major in
        Political Science and Philosophy, blending analytical rigor with
        critical thinking. My academic journey honed my research skills, writing
        clarity, and capacity to tackle complex problems.
      </p>
      <p className="text-gray-800">
        Beyond university, I completed the General Assembly Software Engineering
        Immersive in 2021, mastering full‑stack development—including
        JavaScript, React, Node.js, and Express—and gained hands‑on experience
        building production‑ready applications under tight deadlines.
      </p>
    </>,
    <>
      <p className="text-gray-800 mb-2">
        Since first writing my own scripts in 2019, I’ve immersed myself in web
        development, building everything from simple landing pages to complex
        e-commerce platforms. Over five years, I’ve delivered solutions using
        React, Express.js, PostgreSQL, and MongoDB.
      </p>
      <p className="text-gray-800 mb-2">
        My specialization includes integrating payment gateways (Stripe, PayPal,
        QuickBooks), designing responsive interfaces, and optimizing database
        schemas. I strive for clean code, effective state management, and
        scalable architectures in every project.
      </p>
      <p className="text-gray-800">
        I’m constantly expanding my skill set—experimenting with Docker for
        containerization, exploring Tailwind CSS for utility‑first styling, and
        leveraging AI tools like ChatGPT to streamline development workflows.
      </p>
    </>,
    <>
      <p className="text-gray-800 mb-2">
        As a licensed commercial pilot with both PPL and CPL written exams
        completed, I’ve logged hours mastering multi-engine IFR operations. My
        aviation training sharpened my attention to detail, situational
        awareness, and safety‑first mindset.
      </p>
      <p className="text-gray-800">
        Flying demands rigorous pre‑flight planning, precise execution, and
        continuous monitoring—skills that translate directly to writing robust,
        error‑resistant code and managing complex projects with multiple moving
        parts.
      </p>
    </>,
    <>
      <p className="text-gray-800 mb-2">
        At Simply Smart Home, I led both sales and tech support teams, driving a
        20% increase in lead conversion by combining data‑driven strategies with
        hands‑on technical training. I bridged the gap between customer needs
        and technical solutions daily.
      </p>
      <p className="text-gray-800">
        My role involved product walkthroughs, troubleshooting smart home
        installations, and developing training materials—ensuring every client
        enjoyed a seamless experience and teams stayed aligned on best
        practices.
      </p>
    </>,
    <>
      <p className="text-gray-800 mb-2">
        During my tenure with Axis Energy in Alberta, I worked on directional
        drilling operations, utilizing advanced downhole tools and real‑time
        telemetry. This role demanded strong mathematical skills and the ability
        to interpret complex data under pressure.
      </p>
      <p className="text-gray-800">
        Leveraging technology and precision, I collaborated with engineers to
        plan well trajectories, optimize drilling parameters, and minimize
        operational downtime—reinforcing my aptitude for technical
        problem‑solving in high-stakes environments.
      </p>
    </>,
    <>
      <p className="text-gray-800 mb-2">
        Outside of work, I’m an avid collector of vintage video games—curating
        NES, SNES, and early console titles. I research market trends, preserve
        rare cartridges, and trade in communities passionate about gaming
        history.
      </p>
      <p className="text-gray-800">
        This hobby keeps me connected to pixel art aesthetics, inspires creative
        UI designs, and underscores my appreciation for legacy systems—reminding
        me that great user experiences transcend technology eras.
      </p>
    </>
  ];

  const [playingVideoIdx, setPlayingVideoIdx] = useState(null);
  const [expandedIdx, setExpandedIdx] = useState(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    if (playingVideoIdx !== null) {
      const timer = setTimeout(() => {
        setExpandedIdx(playingVideoIdx);
        setPlayingVideoIdx(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [playingVideoIdx]);

  useEffect(() => {
    if (expandedIdx !== null) {
      panelRefs.current[expandedIdx]?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [expandedIdx]);

  const handleSectionClick = () => {
    setExpandedIdx(null);
  };

  return (
    <section
      onClick={handleSectionClick}
      className={`bg-white min-h-screen ${
        expandedIdx !== null ? "bg-opacity-50" : "bg-opacity-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-display text-gray-900 mb-12 text-center"
        >
          A little about me
        </motion.h2>
        <div className="relative grid grid-cols-2 gap-[2vw]">
          {panelImages.map((img, idx) => {
            const isExpanded = expandedIdx === idx;
            const hidden = expandedIdx !== null && !isExpanded;
            const isPlaying = playingVideoIdx === idx;

            return (
              <motion.div
                key={idx}
                ref={(el) => (panelRefs.current[idx] = el)}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isExpanded) {
                    setExpandedIdx(null);
                  } else {
                    setPlayingVideoIdx(idx);
                  }
                }}
                initial={{ opacity: 0 }}
                animate={
                  hidden
                    ? { opacity: 0 }
                    : isExpanded
                    ? {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                        width: "60vw",
                        height: "auto",
                        opacity: 1,
                        zIndex: 20
                      }
                    : { opacity: 1 }
                }
                transition={{ duration: 0.5 }}
                className={`relative cursor-pointer rounded-lg w-full h-[60vh] transition-opacity overflow-hidden ${
                  hidden ? "pointer-events-none" : ""
                }`}
              >
                {isPlaying ? (
                  <video
                    className="w-full h-[40vh] object-cover"
                    autoPlay
                    muted
                  >
                    <source
                      src={img.replace(/\.\w+$/, ".mp4")}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <div
                    className="w-full h-[40vh] bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                )}

                {!isPlaying && (
                  <div className="bg-white p-6">
                    {!isExpanded ? (
                      <>
                        <h3 className="text-gray-900 font-semibold text-xl md:text-2xl mb-2">
                          {panelTitles[idx]}
                        </h3>
                        <p className="text-gray-800">{panelSummaries[idx]}</p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-gray-900 font-semibold text-2xl mb-4">
                          {panelTitles[idx]}
                        </h3>
                        <div className="text-gray-800 space-y-4">
                          {panelContent[idx]}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
