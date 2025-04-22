import React, { useState, useEffect, useRef } from "react";

export default function WorkExperience() {
  // ─── Your slides data ──────────────────────────────────────────────────
  const slides = [
    {
      id: 1,
      src: "/Assets/slide1.webp",
      link: "https://bellevilleclub.ca/",
      desc: "Belleville Club",
      title: "The Belleville Club",
      details:
        "Led a full WordPress migration from legacy PHP to a modern theme, preserving original design fidelity; developed custom Gutenberg blocks for event booking and membership registration; integrated WooCommerce for seamless payments; optimized site speed by 35% using Cloudflare CDN, asset minification, and advanced SEO techniques; implemented automated backups and monitoring."
    },
    {
      id: 2,
      src: "/Assets/slide2.jpg",
      link: "https://www.ptemployment.org/",
      desc: "Pathways to Employment",
      title: "Pathways to Employment",
      details:
        "Rebuilt the entire frontend in React with a responsive, accessible UI; architected a Node/Express backend with RESTful APIs and PostgreSQL; implemented secure authentication (traditional + Google OAuth); integrated Stripe for live class payments and QuickBooks SDK for automated monthly billing; developed a real-time interactive calendar with class scheduling, notifications, and dynamic filters."
    },
    {
      id: 3,
      src: "/Assets/slide3.webp",
      link: "https://cpcessex.ca/",
      desc: "CPC Essex",
      title: "CPC Essex",
      details:
        "Created custom donation and e-commerce modules in WordPress through bespoke plugins; engineered an intuitive CMS for managing campaign posts, events, and news with dynamic tagging; integrated PayPal and Stripe for donation flows; streamlined content workflows with custom taxonomy filters; implemented performance optimizations for high-traffic periods."
    }
  ];

  // ─── Carousel infra ───────────────────────────────────────────────────
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [current, setCurrent] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  // ─── Mobile detection ─────────────────────────────────────────────────
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ─── Autoplay & navigation ────────────────────────────────────────────
  const intervalRef = useRef(null);
  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent((c) => c + 1), 3000);
  };
  const pauseAuto = () => clearInterval(intervalRef.current);
  const resumeAuto = () => startAuto();
  const handlePrev = () => {
    pauseAuto();
    setCurrent((c) => c - 1);
  };
  const handleNext = () => {
    pauseAuto();
    setCurrent((c) => c + 1);
  };

  const handleTransitionEnd = () => {
    if (current < 1) {
      setTransitionEnabled(false);
      setCurrent(slides.length);
    } else if (current > slides.length) {
      setTransitionEnabled(false);
      setCurrent(1);
    }
  };
  useEffect(() => {
    if (!transitionEnabled) {
      const t = setTimeout(() => setTransitionEnabled(true), 50);
      return () => clearTimeout(t);
    }
  }, [transitionEnabled]);

  // ─── Which slide’s details to show ────────────────────────────────────
  const activeSlide = slides[(current - 1 + slides.length) % slides.length];
  const detailsSlide = isMobile
    ? activeSlide
    : slides.find((s) => s.id === hoveredId);

  // ─── Render ──────────────────────────────────────────────────────────
  return (
    <section className="w-full bg-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 mb-4">
          Triangle Dynamics is a freelance web developing company I started...
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-12">
          Here are a few of my clients
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
        onClick={(e) => {
          const { left, width } = e.currentTarget.getBoundingClientRect();
          e.clientX - left < width / 2 ? handlePrev() : handleNext();
        }}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            transitionEnabled
              ? "transition-transform duration-1000 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((slide, idx) => {
            if (!slide) return null;
            const isActive = idx === current;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredId(slide.id)}
                className="
                  relative flex-shrink-0
                  w-[80%] mx-[10%]
                  h-auto md:h-[900px]
                  cursor-pointer
                "
              >
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={slide.src}
                    alt={slide.desc}
                    className={`
                      w-full h-auto md:h-[900px]
                      object-cover rounded-lg
                      transition-opacity duration-500
                      ${
                        isActive
                          ? "opacity-100 filter-none"
                          : "opacity-50 filter grayscale"
                      }
                    `}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details */}
      {detailsSlide && (
        <div className="max-w-4xl mx-auto px-4 mb-6 p-6">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            {detailsSlide.title}
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-center text-gray-700 max-w-2xl mx-auto">
            {detailsSlide.details}
          </p>
        </div>
      )}

      {/* Dots */}
      <div className="flex justify-center space-x-4 mt-4 mb-24">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx + 1)}
            className={`
              w-3 h-3 rounded-full focus:outline-none
              ${
                (current - 1 + slides.length) % slides.length === idx
                  ? "bg-gray-800"
                  : "bg-gray-400 opacity-50"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}
