import React, { useEffect, useState } from "react";
import headshot from "../assets/GenPol1.png";
import parallaxBg from "../assets/Ottawa.webp";
import ottawaMap from "../assets/OttawaMap.jpg";
import meetBg from "../assets/Paralax1.webp";
import togPolImg from "../assets/TogPol1.png";

export default function PersonalBrand() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "FR" : "EN"));
  };

  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      {/* === Description === */}
      <h2
        style={{
          fontSize: "1.75rem",
          marginBottom: "0.75rem",
          color: "#fff"
        }}
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
        Focus on the candidate, bio-driven, great for outreach.
      </p>

      {/* 👤 HERO / PARALLAX SECTION + NAVBAR */}
      <section
        style={{
          position: "relative",
          backgroundImage: `url(${parallaxBg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "70%",
          backgroundPosition: "center",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          color: "#fff"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(30, 90, 150, 0.25)",
            zIndex: 1
          }}
        />
        <div
          style={{
            backgroundColor: scrolled
              ? "rgba(30, 90, 150, 0.92)"
              : "transparent",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            transition: "background-color 0.4s ease"
          }}
        >
          <div
            style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#fff" }}
          >
            Jane Candidate
          </div>
          <div
            onClick={toggleLanguage}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.95rem",
              color: "#fff",
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            🇨🇦 <span>{language} ↓</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "4rem",
            padding: "0 2rem",
            position: "relative",
            zIndex: 2
          }}
        >
          <div style={{ flex: "1 1 300px", maxWidth: "600px" }}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem"
              }}
            >
              Meet Jane Candidate
            </h1>
            <h2
              style={{
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
                color: "#f1f1f1"
              }}
            >
              Votre candidate conservatrice du bon sens — Ottawa-Centre
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.5",
                maxWidth: "90%"
              }}
            >
              Putting Canada first. Standing for families, freedom, and a future
              built on common sense values.
            </p>
          </div>

          <div style={{ flex: "0 0 240px", textAlign: "center" }}>
            <img
              src={headshot}
              alt="Candidate"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "320px",
                objectFit: "cover",
                border: "none",
                borderRadius: "0",
                boxShadow: "none"
              }}
            />
          </div>
        </div>
      </section>

      {/* 🗳️ VOTING INFO SECTION */}
      <section
        style={{
          backgroundColor: "rgba(30, 90, 150, 0.92)",
          color: "#fff",
          padding: "4rem 2rem",
          opacity: 0,
          transform: "translateY(40px)",
          animation: "fadeUp 1s ease-out forwards",
          animationDelay: "0.2s"
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center"
          }}
        >
          <div style={{ flex: "1 1 400px", maxWidth: "600px" }}>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
              Make Your Vote Count
            </h2>
            <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
              <a
                href="https://www.elections.ca/Scripts/vis/FindED?L=e&QID=-1&PAGEID=20"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textDecoration: "underline"
                }}
              >
                Verify Your Voting Location Here
              </a>
            </p>
            <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
              Or call Elections Canada: <strong>1-866-546-7620</strong>
            </p>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
              Election Day:
            </h3>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
              <strong>APRIL 28</strong>
              <br />7 AM – 7 PM
            </p>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
              A Safer, Smarter Canada
            </h3>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
              <li>✔ End Catch-and-Release for Repeat Offenders</li>
              <li>✔ Life Sentences for Major Fentanyl Traffickers</li>
              <li>✔ Ban Hard Drugs in Our Communities</li>
              <li>✔ Cut Capital Gains Tax to Bring Jobs and Investment Back</li>
            </ul>
          </div>
          <div style={{ flex: "1 1 300px", maxWidth: "500px" }}>
            <img
              src={ottawaMap}
              alt="District Map"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                marginBottom: "1rem"
              }}
            />
            <p style={{ fontSize: "0.95rem" }}>
              This is your local voting district. Make sure you’re registered at
              the correct polling station.
            </p>
          </div>
        </div>
      </section>

      {/* 👤 MEET THE CANDIDATE SECTION */}
      <section
        style={{
          position: "relative",
          backgroundImage: `url(${meetBg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "75%",
          backgroundPosition: "center",
          color: "#fff",
          padding: "5rem 2rem"
        }}
      >
        {/* grey overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(128,128,128,0.4)",
            zIndex: 1
          }}
        />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            Meet the Candidate
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              margin: "0 auto 2.5rem",
              maxWidth: "900px"
            }}
          >
            Jane Candidate is a dedicated Canadian who has spent over two
            decades serving her community. With deep roots in Ottawa Centre,
            Jane brings strong conservative values focused on family, fiscal
            responsibility, and local prosperity. She believes in democracy,
            freedom, and the importance of protecting Canadian values.
          </p>

          {/* Single combined image */}
          <div style={{ marginBottom: "2.5rem" }}>
            <img
              src={togPolImg}
              alt="Candidate with spouse"
              style={{
                width: "600px",
                height: "auto",
                maxWidth: "100%"
              }}
            />
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            <strong>Donations are graciously accepted via:</strong>
            <br />
            1. Cheque to "Official Agent — Jane Candidate Campaign"
            <br />
            2. E-Transfer (please confirm name/address prior to sending)
            <br />
            <br />
            For donation coordination, please email us at{" "}
            <a
              href="mailto:contact@janecandidate.ca"
              style={{ color: "#aad6ff", textDecoration: "underline" }}
            >
              contact@janecandidate.ca
            </a>{" "}
            or call <strong>(555) 123-4567</strong>
          </p>
        </div>
      </section>

      {/* ⚪ FOOTER SECTION */}
      <footer
        style={{
          backgroundColor: "#fff",
          color: "#333",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <div style={{ display: "flex", gap: "1rem", fontSize: "1.2rem" }}>
          <a href="#" style={{ color: "#333", textDecoration: "none" }}>
            📘
          </a>
          <a href="#" style={{ color: "#333", textDecoration: "none" }}>
            🐦
          </a>
          <a href="#" style={{ color: "#333", textDecoration: "none" }}>
            📸
          </a>
        </div>
        <button
          style={{
            backgroundColor: "#1e5a96",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            fontSize: "0.95rem",
            cursor: "pointer"
          }}
        >
          Contact Us
        </button>
      </footer>

      {/* 🔧 FADE ANIMATION */}
      <style>
        {`
          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
