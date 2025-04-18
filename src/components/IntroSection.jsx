// src/components/IntroSection.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function IntroSection() {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section
      style={{
        backgroundColor: "rgb(0,0,0)",
        color: "#ffffff",
        scrollSnapAlign: "start",
        scrollSnapStop: "always"
      }}
      className="w-full min-h-screen flex flex-col items-center justify-start"
    >
      {/* Video + overlayed content */}
      <div
        className="relative w-full flex justify-center mb-8 mt-[250px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src="/Assets/TriangleDynamicsLogoVideo1.mp4"
          loop
          muted
          playsInline
          className="w-full h-auto object-contain"
        />

        {/* Overlay wrapper nudged down just a bit */}
        <div
          className="absolute inset-x-0 top-[-30%] flex flex-col items-center pointer-events-none"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(2rem,8vw,5rem)] text-white"
          >
            Welcome
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 max-w-lg text-center text-[clamp(1rem,4vw,2.5rem)] text-white"
          >
            My name is David Benner. This site is designed to tell you a little
            bit about myself, show off some of my work experience, and highlight
            some of my skills.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
