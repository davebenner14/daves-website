import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  const panelImages = [
    "/Assets/AboutMeAssets/Panel1.jpg",
    "/Assets/AboutMeAssets/Panel2.jpg",
    "/Assets/AboutMeAssets/Panel3.jpg",
    "/Assets/AboutMeAssets/Panel4.webp",
    "/Assets/AboutMeAssets/Panel5.jpg",
    "/Assets/AboutMeAssets/Panel6.jpg"
  ];

  const panelContent = [
    <>
      <h3 className="text-white text-2xl font-bold mb-2">Education</h3>
      <p className="text-white">
        I attended Wilfrid Laurier University, played collegiate football, and
        graduated with a double major in Political Science and Philosophy.
      </p>
    </>,
    <>
      <h3 className="text-white text-2xl font-bold mb-2">Coding Journey</h3>
      <p className="text-white">
        I began coding in 2019 and immersed myself in technology. After
        completing the General Assembly bootcamp in 2021, I’ve challenged myself
        daily to grow my skills.
      </p>
    </>,
    <>
      <h3 className="text-white text-2xl font-bold mb-2">Aviation</h3>
      <p className="text-white">
        I obtained my Commercial Multi-engine IFR pilot license in a notably
        short span of time. Flying remains a significant passion of mine.
      </p>
    </>,
    <>
      <h3 className="text-white text-2xl font-bold mb-2">Sales & Tech</h3>
      <p className="text-white">
        Returning to Ontario, I managed sales and installations at Simply Smart
        Home, integrating hardware and software to create seamless smart home
        experiences.
      </p>
    </>,
    <>
      <h3 className="text-white text-2xl font-bold mb-2">Oil & Drilling</h3>
      <p className="text-white">
        In Alberta with Axis Energy, I worked in directional drilling—a field
        requiring advanced math and technology to drill wells at multiple
        angles.
      </p>
    </>,
    <>
      <h3 className="text-white text-2xl font-bold mb-2">Gamer & Collector</h3>
      <p className="text-white">
        I’m an avid collector of vintage video games, from classic NES
        cartridges to early console gems, preserving nostalgia and gaming
        history.
      </p>
    </>
  ];

  const [expandedIdx, setExpandedIdx] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (expandedIdx !== null && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [expandedIdx]);

  const handleSectionClick = () => setExpandedIdx(null);

  return (
    <section
      ref={sectionRef}
      onClick={handleSectionClick}
      className="relative snap-start bg-white min-h-screen"
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

            return (
              <motion.div
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedIdx(isExpanded ? null : idx);
                }}
                initial={{ opacity: 0, scale: 1 }}
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
                        height: "60vh",
                        scale: 1,
                        opacity: 1,
                        zIndex: 20
                      }
                    : { opacity: 1 }
                }
                transition={{ duration: 0.5 }}
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "8px solid white"
                }}
                className={
                  `cursor-pointer rounded-lg flex flex-col items-start justify-center p-6 w-full h-[60vh] ` +
                  (hidden ? "pointer-events-none" : "")
                }
              >
                {panelContent[idx]}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
