import React from "react";
import genPol2 from "../assets/GenPol2.png";
import picnicImg from "../assets/picnic.png";

export default function MinimalModern() {
  return (
    <>
      {/* Description */}
      <h2
        style={{
          fontSize: "1.75rem",
          marginBottom: "0.75rem",
          color: "#fff"
        }}
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

      {/* ⬛ NAVBAR */}
      <nav
        style={{
          backgroundColor: "#fff",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          fontSize: "1rem",
          fontWeight: "500"
        }}
      >
        <div style={{ fontSize: "1.25rem", color: "#111" }}>John Doe</div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a href="#" style={{ color: "#111", textDecoration: "none" }}>
            Meet John
          </a>
          <a href="#" style={{ color: "#111", textDecoration: "none" }}>
            Volunteer
          </a>
          <a href="#" style={{ color: "#111", textDecoration: "none" }}>
            Lawn Sign
          </a>
          <button className="mm-btn donate-now">Donate Now</button>
        </div>
      </nav>

      {/* ⬛ HERO */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden"
        }}
      >
        <img
          src={genPol2}
          alt="Hero"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "6rem",
            left: "2rem",
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            zIndex: 2
          }}
        >
          John Doe
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: 2
          }}
        >
          <button className="mm-btn volunteer">Volunteer</button>
          <button className="mm-btn lawn-sign">Lawn Sign</button>
          <button className="mm-btn donate">Donate</button>
        </div>
      </section>

      {/* 👥 SUPPORT FORM SECTION */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#f5f5f5",
          color: "#111"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.75rem",
            marginBottom: "1.5rem"
          }}
        >
          Can I count on your support?
        </h2>
        <form style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "1rem",
              rowGap: "1.5rem",
              marginBottom: "2rem"
            }}
          >
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                First Name *
              </label>
              <input
                type="text"
                placeholder="E.g. John"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  minHeight: "3rem"
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                Last Name *
              </label>
              <input
                type="text"
                placeholder="E.g. John"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  minHeight: "3rem"
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                Postal Code
              </label>
              <input
                type="text"
                placeholder="K0E 1G0"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  minHeight: "3rem"
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                Email Address *
              </label>
              <input
                type="email"
                placeholder="E.g. john@doe.com"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  minHeight: "3rem"
                }}
              />
            </div>
          </div>
          <button
            style={{
              backgroundColor: "#cc0000",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
              display: "block",
              width: "100%"
            }}
          >
            I'm In!
          </button>
        </form>
      </section>

      {/* 👤 ABOUT SECTION */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#fff",
          color: "#111"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          <div>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
              About John Doe
            </h2>
            <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
              John Doe is a dedicated elected representative in his first term,
              committed to community, transparency, and progress.
            </p>
            <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
              In this critical role, he advocates for accountability, local
              economic development, and social unity.
            </p>
            <p style={{ lineHeight: "1.6", marginBottom: "1.5rem" }}>
              His commitment is demonstrated through active community events and
              ongoing constituent outreach.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
          <div>
            <img
              src={picnicImg}
              alt="Picnic"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 🔗 SOCIAL SECTION */}
      <section
        style={{
          padding: "2rem 0",
          textAlign: "center",
          backgroundColor: "#fff",
          color: "#003366"
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            color: "#003366"
          }}
        >
          Stay Connected
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            fontSize: "1.5rem"
          }}
        >
          <a href="#" style={{ color: "#003366", textDecoration: "none" }}>
            📘
          </a>
          <a href="#" style={{ color: "#003366", textDecoration: "none" }}>
            🐦
          </a>
          <a href="#" style={{ color: "#003366", textDecoration: "none" }}>
            📸
          </a>
          <a href="#" style={{ color: "#003366", textDecoration: "none" }}>
            ▶️
          </a>
        </div>
      </section>

      {/* ⚪ FOOTER */}
      <footer
        style={{
          backgroundColor: "#003366",
          color: "#fff",
          textAlign: "center",
          padding: "2rem 0"
        }}
      >
        <div style={{ fontSize: "1.25rem" }}>John Doe</div>
        <div style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>
          Authorized by the official agent for John Doe
        </div>
      </footer>

      {/* Inline CSS for buttons */}
      <style>
        {`
          .mm-btn {
            flex: 1;
            padding: 1rem 0;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
            margin: 0;
          }
          .mm-btn + .mm-btn {
            margin-left: -1px;
          }
          .mm-btn:hover {
            background-color: #888 !important;
          }
          .volunteer {
            background-color: #003366;
            color: #fff;
          }
          .lawn-sign {
            background-color: #4da6ff;
            color: #fff;
          }
          .donate {
            background-color: #cc0000;
            color: #fff;
          }
          .donate-now {
            background-color: #cc0000;
            color: #fff;
            padding: 0.5rem 1.25rem;
            border-radius: 999px;
          }
          .donate-now:hover {
            background-color: #888 !important;
          }
          .read-more-btn {
            background-color: #cc0000;
            color: #fff;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .read-more-btn:hover {
            background-color: #888 !important;
          }
        `}
      </style>
    </>
  );
}
