import React from "react";
import canadaMap from "../assets/canada-political-map.avif";
import canadaMapBlur from "../assets/canadamap2.jpg";
import regionMap from "../assets/canadamap.jpg";

export default function ClassicCampaign() {
  return (
    <>
      {/* Description */}
      <h2
        style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "#fff" }}
      >
        Classic Campaign Template
      </h2>
      <p
        style={{
          color: "#ccc",
          fontSize: "1rem",
          lineHeight: "1.6",
          marginBottom: "2rem"
        }}
      >
        A bold, traditional design similar to cpcessex.ca. Includes a full-width
        hero image with a strong headline, donation and volunteer buttons, and a
        scrollable info section below. Ideal for local campaigns wanting to
        establish credibility and action fast.
      </p>

      {/* === Preview Site Wrapper === */}
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid #333"
        }}
      >
        {/* 🟥 NAVBAR */}
        <section
          style={{
            background: "#ffffff",
            borderBottom: "2px solid #ccc",
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
              color: "#cc0000"
            }}
          >
            YourCampaign.ca
          </div>
          <nav style={{ display: "flex", gap: "1.5rem", fontSize: "0.95rem" }}>
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

        {/* 🟥 HERO */}
        <section
          style={{
            backgroundImage: `url(${canadaMap})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",

            padding: "5rem 2rem",
            textAlign: "center",
            color: "#fff",
            position: "relative"
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.55)",
              padding: "3rem 1rem",
              maxWidth: "800px",
              margin: "0 auto",
              borderRadius: "8px"
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem"
              }}
            >
              Working for Our Community
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              A strong voice delivering results for local families and
              businesses.
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
          </div>
        </section>

        {/* 🟦 CONNECT WITH CANDIDATE */}
        <section
          style={{
            padding: "3rem 2rem",
            background: "#fff",
            color: "#111",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
            Meet Your Candidate
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
            With deep roots in the region, your candidate is committed to making
            life better for everyone. From standing up for jobs to improving
            local infrastructure, the mission is simple: strong, principled
            leadership. Get in touch or follow their journey.
          </p>

          {/* Social Media Buttons */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap"
            }}
          >
            <a href="#" style={socialButton}>
              Facebook
            </a>
            <a href="#" style={socialButton}>
              Instagram
            </a>
            <a href="#" style={socialButton}>
              LinkedIn
            </a>
          </div>
        </section>

        {/* 🟦 RIDING OVERVIEW */}
        <section
          style={{
            position: "relative",
            padding: "4rem 2rem",
            color: "#fff",
            textAlign: "center",
            backgroundImage: `url(${canadaMapBlur})`,
            backgroundAttachment: "fixed",
            backgroundSize: "80%",
            backgroundPosition: "center",
            zIndex: 1
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              backgroundColor: "rgba(0, 0, 0, 0.55)",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "900px",
              margin: "0 auto"
            }}
          >
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
              About the Riding
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
                <p>
                  Creating opportunity through jobs, supporting local
                  agriculture, investing in infrastructure, and keeping life
                  affordable for families.
                </p>
              </div>
              <div>
                <h3>Constituent Services</h3>
                <p>
                  Whether it’s navigating federal programs, passports, or
                  support services—our office is here to help.
                </p>
              </div>
              <div>
                <h3>Map & Boundaries</h3>
                <p>
                  The riding spans diverse communities, industries, and
                  heritage—each with a unique voice that deserves strong
                  representation.
                </p>
              </div>
            </div>

            {/* Overlay Region Map */}
            <img
              src={regionMap}
              alt="Regional Riding Map"
              style={{
                maxWidth: "300px",
                width: "100%",
                margin: "0 auto",
                display: "block",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
              }}
            />
          </div>
        </section>

        {/* 🟦 NEWS */}
        <section
          style={{ padding: "3rem 2rem", background: "#fff", color: "#111" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.75rem",
              marginBottom: "2rem"
            }}
          >
            Campaign News & Updates
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem"
            }}
          >
            <div style={newsCard}>
              <h4>Candidate Launches Local Jobs Plan</h4>
              <p>
                Focused investments to support skilled trades and youth
                employment.
              </p>
            </div>
            <div style={newsCard}>
              <h4>Town Hall Tour Underway</h4>
              <p>
                Residents are encouraged to join in and ask questions directly.
              </p>
            </div>
            <div style={newsCard}>
              <h4>Riding Office Opening Soon</h4>
              <p>
                Community members will soon have direct access to support and
                info.
              </p>
            </div>
          </div>
        </section>

        {/* 🟦 FOOTER */}
        <footer
          style={{
            background: "#222",
            color: "#ccc",
            padding: "1rem",
            textAlign: "center"
          }}
        >
          © 2025 YourCampaign.ca — All rights reserved
        </footer>
      </div>
    </>
  );
}

// 🔧 STYLES

const navLink = {
  color: "#cc0000",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.2s"
};

const socialButton = {
  backgroundColor: "#007BFF",
  color: "#fff",
  padding: "0.6rem 1.2rem",
  borderRadius: "30px",
  fontWeight: "500",
  fontSize: "0.95rem",
  textDecoration: "none",
  transition: "background-color 0.3s ease"
};

const buttonStyle = {
  backgroundColor: "#cc0000",
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "6px",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s"
};

const newsCard = {
  background: "#f1f1f1",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};
