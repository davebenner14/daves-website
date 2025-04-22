import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logoUrl = "/Assets/TDnobackground.png";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);
  const navRef = useRef(null);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work Experience", href: "#work-experience" },
    { label: "Games", href: "#games" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchOpen && navRef.current && !navRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const found = window.find ? window.find(searchQuery) : false;
      if (!found) alert(`No matches for “${searchQuery}”`);
    }
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(31, 31, 31, 0.8)",
        backdropFilter: "blur(8px)",
        zIndex: 50
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "44px"
        }}
      >
        <a href="/">
          <img src={logoUrl} alt="Logo" style={{ height: "32px" }} />
        </a>

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            style={{
              color: "#fff",
              fontSize: "12px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#A855F7")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            {item.label}
          </a>
        ))}

        <button
          aria-label="Search"
          aria-expanded={searchOpen}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setSearchOpen((o) => !o)}
          onMouseEnter={(e) =>
            (e.currentTarget.firstChild.style.stroke = "#A855F7")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.firstChild.style.stroke = "#fff")
          }
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {searchOpen && (
          <motion.div
            key="search-dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              position: "absolute",
              top: "44px",
              left: 0,
              right: 0,
              backgroundColor: "rgba(31, 31, 31, 0.8)",
              backdropFilter: "blur(8px)"
            }}
          >
            <div
              style={{
                padding: "12px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "90%",
                  maxWidth: "600px"
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search Davebenner.ca"
                  style={{
                    flex: 1,
                    marginLeft: "8px",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    fontSize: "14px"
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "16px",
                  width: "90%",
                  maxWidth: "600px",
                  color: "#fff"
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 600 }}>
                  Quick Links
                </div>
                <ul
                  style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}
                >
                  {["Quick Link 1", "Quick Link 2", "Quick Link 3"].map((l) => (
                    <li
                      key={l}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "8px",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: 500
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>→</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
