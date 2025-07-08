import React from "react";
import headshot from "../assets/GenPol1.png";
import canadaMapBlur from "../assets/canadamap2.jpg";
import regionMap from "../assets/canadamap.jpg";

export default function PersonalBrand() {
  return (
    <>
      {/* Description */}
      <h2
        style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "#fff" }}
      >
        Personal Brand Template
      </h2>
      <p
        style={{
          color: "#ccc",
          fontSize: "1rem",
          lineHeight: "1.6",
          marginBottom: "2rem"
        }}
      >
        Based on chakau.ca, this layout is centered around the candidate as a
        person: their journey, their story, and their vision. Optimized for
        mobile, supports bilingual messaging, and includes areas for media,
        testimonials, and direct contact.
      </p>

      {/* === Preview Site Wrapper === */}
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid #333"
        }}
      >
        {/* 👤 NAVBAR */}
        <section
          style={{
            background: "#0d0d0d",
            borderBottom: "1px solid #444",
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
            MeetYourCandidate.ca
          </div>
          <nav style={{ display: "flex", gap: "1.25rem", fontSize: "0.9rem" }}>
            <a href="#" style={navLink}>
              Bio
            </a>
            <a href="#" style={navLink}>
              Platform
            </a>
            <a href="#" style={navLink}>
              Media
            </a>
            <a href="#" style={navLink}>
              Endorsements
            </a>
            <a href="#" style={navLink}>
              Contact
            </a>
          </nav>
        </section>

        {/* 👤 HERO/BIO SECTION */}
        <section
          style={{
            backgroundColor: "#121212",
            padding: "4rem 2rem",
            textAlign: "center",
            color: "#fff"
          }}
        >
          <img
            src={headshot}
            alt="Candidate"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1rem",
              border: "3px solid #fff"
            }}
          />
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "0.5rem"
            }}
          >
            Alex Smith
          </h1>
          <p
            style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}
          >
            Community leader, educator, and advocate for families — working to
            bring honest, energetic representation to our region.
          </p>
        </section>

        {/* 👤 PLATFORM */}
        <section
          style={{ padding: "3rem 2rem", background: "#fff", color: "#111" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "2rem"
            }}
          >
            Key Priorities
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem"
            }}
          >
            <div>
              <h4>Education Reform</h4>
              <p>Smaller class sizes, better resources, and fair funding.</p>
            </div>
            <div>
              <h4>Healthcare Access</h4>
              <p>Commitment to rural clinics and wait time reduction.</p>
            </div>
            <div>
              <h4>Affordability & Families</h4>
              <p>Affordable childcare and real solutions for cost-of-living.</p>
            </div>
          </div>
        </section>

        {/* 👤 MEDIA SECTION */}
        <section
          style={{
            backgroundImage: `url(${canadaMapBlur})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            padding: "4rem 2rem",
            color: "#fff",
            textAlign: "center"
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "900px",
              margin: "0 auto"
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              Watch Alex in the Community
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              From town halls to classroom visits — see the work in action.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1rem"
              }}
            >
              <button style={buttonStyle}>Watch Video</button>
              <button style={buttonStyle}>Read Interviews</button>
            </div>
          </div>
        </section>

        {/* 👤 TESTIMONIALS */}
        <section
          style={{ padding: "3rem 2rem", background: "#f1f1f1", color: "#111" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "2rem"
            }}
          >
            Community Endorsements
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem"
            }}
          >
            <blockquote style={quoteCard}>
              <p>
                “Alex has been a tireless advocate for our school board — we
                trust them to represent us.”
              </p>
              <footer>— J. Turner, Parent Council Chair</footer>
            </blockquote>
            <blockquote style={quoteCard}>
              <p>
                “I’ve worked with many candidates. Alex’s heart is real and
                their follow-through is unmatched.”
              </p>
              <footer>— M. Alvarez, Community Organizer</footer>
            </blockquote>
            <blockquote style={quoteCard}>
              <p>
                “This campaign actually listens to our concerns. Alex is what we
                need.”
              </p>
              <footer>— D. Singh, Small Business Owner</footer>
            </blockquote>
          </div>
        </section>

        {/* 👤 FOOTER */}
        <footer
          style={{
            background: "#111",
            color: "#888",
            padding: "1rem",
            textAlign: "center"
          }}
        >
          © 2025 MeetYourCandidate.ca — All rights reserved
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

const quoteCard = {
  background: "#fff",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  fontStyle: "italic",
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};
