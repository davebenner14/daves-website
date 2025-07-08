import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import ClassicCampaign from "../templates/ClassicCampaign";
import MinimalModern from "../templates/MinimalModern";
import PersonalBrand from "../templates/PersonalBrand";

export default function Templates() {
  const [active, setActive] = useState(null);

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "#121212",
          minHeight: "100vh",
          paddingTop: "60px",
          padding: "2rem",
          color: "#fff"
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "2.75rem",
              fontWeight: 700,
              marginBottom: "1rem"
            }}
          >
            Website Template Examples
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#ccc",
              marginBottom: "3rem"
            }}
          >
            Below are three sample layouts designed specifically for political
            campaigns and personal brands. Each one is clean, mobile-friendly,
            and tailored for action. Click on a card to learn more.
          </p>

          {/* CARD GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem"
            }}
          >
            <div
              style={{
                background: "#1f1f1f",
                padding: "1.5rem",
                borderRadius: "12px",
                cursor: "pointer"
              }}
              onClick={() => setActive("classic")}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                Classic Campaign
              </h3>
              <p style={{ color: "#aaa" }}>
                Full-width hero, strong CTA buttons, patriotic color theme.
              </p>
            </div>
            <div
              style={{
                background: "#1f1f1f",
                padding: "1.5rem",
                borderRadius: "12px",
                cursor: "pointer"
              }}
              onClick={() => setActive("modern")}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                Minimal Modern
              </h3>
              <p style={{ color: "#aaa" }}>
                Clean layout, bold fonts, sleek blocks, mobile-first design.
              </p>
            </div>
            <div
              style={{
                background: "#1f1f1f",
                padding: "1.5rem",
                borderRadius: "12px",
                cursor: "pointer"
              }}
              onClick={() => setActive("brand")}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                Personal Brand
              </h3>
              <p style={{ color: "#aaa" }}>
                Focus on the candidate, bio-driven, great for outreach.
              </p>
            </div>
          </div>

          {/* Render Selected Template Component */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: "#1f1f1f",
                  padding: "2rem",
                  borderRadius: "12px"
                }}
              >
                {active === "classic" && <ClassicCampaign />}
                {active === "modern" && <MinimalModern />}
                {active === "brand" && <PersonalBrand />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
