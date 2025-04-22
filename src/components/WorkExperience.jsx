import React, { useState, useEffect, useRef } from "react";

export default function WorkExperience() {
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

  // Clone first and last slide for infinite-loop effect
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [current, setCurrent] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Start autoplay on mount
  useEffect(() => {
    startSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleNext, 3000);
  };
  const pauseSlide = () => clearInterval(intervalRef.current);
  const resumeSlide = () => startSlide();

  const handlePrev = () => {
    pauseSlide();
    setCurrent((c) => c - 1);
  };
  const handleNext = () => {
    pauseSlide();
    setCurrent((c) => c + 1);
  };

  const handleTransitionEnd = () => {
    // Jump to real slide without animation at boundaries
    if (current < 1) {
      setTransitionEnabled(false);
      setCurrent(slides.length);
    } else if (current > slides.length) {
      setTransitionEnabled(false);
      setCurrent(1);
    }
  };

  // Re-enable transition after reposition
  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => setTransitionEnabled(true), 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  // Calculate real slide index for dot indicators
  const realIndex = (current - 1 + slides.length) % slides.length;

  // Get hovered slide data (persistent until next hover)
  const hoveredSlide = slides.find((s) => s.id === hoveredId);

  return (
    <section className="w-full bg-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-sans font-semibold text-3xl md:text-5xl text-center text-gray-900 mb-4">
          Triangle Dynamics is a freelance web developing company I started to
          create professional‑looking websites
        </h2>
        <p className="font-sans text-lg md:text-xl text-center text-gray-600 mb-12">
          Here are a few of my clients
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ marginBottom: "66px" }}
        onMouseEnter={pauseSlide}
        onMouseLeave={resumeSlide}
        onClick={(e) => {
          const { left, width } = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - left;
          x < width / 2 ? handlePrev() : handleNext();
        }}
      >
        <div
          ref={sliderRef}
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            transitionEnabled
              ? "transition-transform duration-1000 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredId(slide.id)}
                className="relative flex-shrink-0 w-[80%] mx-[10%] h-[600px] md:h-[900px] cursor-pointer"
              >
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <div
                    className={`w-full h-full rounded-lg bg-center bg-cover transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100 filter-none"
                        : "opacity-50 filter grayscale"
                    }`}
                    style={{ backgroundImage: `url('${slide.src}')` }}
                  />
                </a>

                {/* Overlay with description and button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-20">
                  <p className="font-sans text-sm text-gray-800 mb-2">
                    {slide.desc}
                  </p>
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-6 py-3 rounded-full uppercase text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hover Popup (persistent until next hover) */}
      {hoveredSlide && (
        <div className="max-w-4xl mx-auto px-4 mb-6 bg-transparent p-6">
          <div className="font-sans font-bold text-4xl md:text-5xl text-center text-gray-900 mb-4">
            {hoveredSlide.title}
          </div>
          <p className="font-sans text-base md:text-lg leading-relaxed text-center text-gray-700 max-w-2xl mx-auto">
            {hoveredSlide.details}
          </p>
        </div>
      )}

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-4 mt-4 mb-24">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx + 1)}
            className={`w-3 h-3 rounded-full bg-gray-400 focus:outline-none ${
              realIndex === idx ? "bg-gray-800" : "opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
