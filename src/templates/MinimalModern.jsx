import React from "react";
import canadaMap from "../assets/canada-political-map.avif";
import canadaMapBlur from "../assets/canadamap2.jpg";
import regionMap from "../assets/canadamap.jpg";

export default function MinimalModern() {
  return (
    <>
      {/* Description */}
      <h2
        style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "#fff" }}
      >
        Minimal Modern Template
      </h2>
      <p
        style={{
          color: "#ccc",
          fontSize: "1rem",
          lineHeight: "1.6",
          marginBottom: "2rem"
        }}
      >
        Inspired by michaelbarrett.ca, this layout features high contrast, clean
        spacing, bold fonts, and fast mobile responsiveness. Ideal for
        candidates who want a modern look with serious performance.
      </p>

      {/* === Preview Site Wrapper === */}
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid #333"
        }}
      >
        {/* ⬛ NAVBAR */}
        <section
          style={{
            background: "#111",
            borderBottom: "1px solid #333",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              color: "#fff"
            }}
          >
            ModernCampaign.ca
          </div>
          <nav style={{ display: "flex", gap: "1.25rem", fontSize: "0.9rem" }}>
            <a href="#" style={navLink}>
              About
            </a>
            <a href="#" style={navLink}>
              Platform
            </a>
            <a href="#" style={navLink}>
              Riding
            </a>
            <a href="#" style={navLink}>
              News
            </a>
            <a href="#" style={navLink}>
              Contact
            </a>
          </nav>
        </section>

        {/* ⬛ HERO */}
        <section
          style={{
            backgroundColor: "#1a1a1a",
            padding: "4rem 2rem",
            textAlign: "center",
            color: "#fff"
          }}
        >
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}
          >
            Modern Leadership for a New Generation
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              maxWidth: "700px",
              margin: "0 auto 2rem"
            }}
          >
            Focused, responsive, and ready to serve. This design is built for
            speed and clarity on all devices.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap"
            }}
          >
            <button style={buttonStyle}>Donate</button>
            <button style={buttonStyle}>Volunteer</button>
          </div>
        </section>

        {/* ⬛ CANDIDATE */}
        <section
          style={{
            padding: "3rem 2rem",
            background: "#fff",
            color: "#111",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Meet the Candidate
          </h2>
          <p style={{ maxWidth: "680px", margin: "0 auto", lineHeight: "1.6" }}>
            A strong voice in Parliament, committed to accountability and
            community results. Let's build a stronger future — together.
          </p>
        </section>

        {/* ⬛ RIDING OVERVIEW */}
        <section
          style={{
            padding: "4rem 2rem",
            textAlign: "center",
            color: "#fff",
            backgroundImage: `url(${canadaMapBlur})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "900px",
              margin: "0 auto"
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              Your Riding. Your Future.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
                marginBottom: "2rem"
              }}
            >
              <div>
                <h3>Local Priorities</h3>
                <p>Affordable housing, infrastructure, and public safety.</p>
              </div>
              <div>
                <h3>Constituent Services</h3>
                <p>Direct access to your MP's office — in person or online.</p>
              </div>
              <div>
                <h3>Boundary Info</h3>
                <p>Serving diverse communities across our region.</p>
              </div>
            </div>
            <img
              src={regionMap}
              alt="Map"
              style={{
                maxWidth: "280px",
                width: "100%",
                margin: "0 auto",
                display: "block",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
              }}
            />
          </div>
        </section>

        {/* ⬛ NEWS */}
        <section
          style={{ padding: "3rem 2rem", background: "#f8f8f8", color: "#111" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "2rem"
            }}
          >
            Updates & Initiatives
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem"
            }}
          >
            <div style={newsCard}>
              <h4>Expanding Local Broadband</h4>
              <p>New investments to close the digital divide in rural areas.</p>
            </div>
            <div style={newsCard}>
              <h4>Small Business Roundtables</h4>
              <p>Monthly town halls focused on local economic growth.</p>
            </div>
            <div style={newsCard}>
              <h4>New Volunteer Portal</h4>
              <p>Streamlined sign-ups and event tracking on all devices.</p>
            </div>
          </div>
        </section>

        {/* ⬛ FOOTER */}
        <footer
          style={{
            background: "#111",
            color: "#888",
            padding: "1rem",
            textAlign: "center"
          }}
        >
          © 2025 ModernCampaign.ca — All rights reserved
        </footer>
      </div>
    </>
  );
}

// 🔧 STYLES
const navLink = {
  color: "#eee",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.2s"
};

const buttonStyle = {
  backgroundColor: "#000",
  border: "1px solid #fff",
  padding: "0.75rem 1.5rem",
  borderRadius: "6px",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s"
};

const newsCard = {
  background: "#fff",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
};
