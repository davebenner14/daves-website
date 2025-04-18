import React, { useState, useEffect, useRef } from "react";

export default function WorkExperience() {
  const slides = [
    {
      id: 1,
      src: "/Assets/slide1.webp",
      link: "https://bellevilleclub.ca/",
      desc: "Belleville Club"
    },
    {
      id: 2,
      src: "/Assets/slide2.jpg",
      link: "https://www.ptemployment.org/",
      desc: "Pathways to Employment"
    },
    {
      id: 3,
      src: "/Assets/slide3.webp",
      link: "https://cpcessex.ca/",
      desc: "CPC Essex"
    }
  ];

  // For infinite‑loop effect
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const [current, setCurrent] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

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
    if (current === 0) {
      setTransitionEnabled(false);
      setCurrent(slides.length);
    } else if (current === slides.length + 1) {
      setTransitionEnabled(false);
      setCurrent(1);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const node = sliderRef.current;
      node.style.transition = "none";
      node.style.transform = `translateX(-${current * 100}%)`;
      requestAnimationFrame(() => {
        node.style.transition = "transform 1s ease-in-out";
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled, current]);

  const handleContainerClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    x < rect.width / 2 ? handlePrev() : handleNext();
  };

  const realIndex = (current - 1 + slides.length) % slides.length;

  return (
    <section className="w-full bg-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-gray-900 font-bold uppercase tracking-wide text-3xl md:text-5xl text-center drop-shadow-md mb-4">
          Triangle Dynamics is a freelance web developing company I started to
          create professional‑looking websites
        </h2>
        <p className="text-teal-600 font-semibold uppercase tracking-wider text-lg md:text-xl text-center mb-12">
          Here are a few of my clients
        </p>
      </div>

      {/* Slide Carousel */}
      <div
        className="relative w-full overflow-hidden"
        style={{ marginBottom: "66px" }}
        onMouseEnter={pauseSlide}
        onMouseLeave={resumeSlide}
        onClick={handleContainerClick}
      >
        <div
          ref={sliderRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={idx}
                className="group relative flex-shrink-0 w-[80%] mx-[10%] h-[600px] md:h-[900px] cursor-pointer"
              >
                {/* Background image */}
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

                {/* DEBUG overlay: always visible */}
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <span className="text-red-500 text-6xl font-bold">test</span>
                </div>

                {/* Existing overlay (desc + button) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-20">
                  <p className="text-black text-sm font-medium mb-2">
                    {slide.desc}
                  </p>
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-3 rounded-full"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-4 mt-4 mb-24">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx + 1)}
            className={`w-5 h-5 rounded-full bg-gray-500 focus:outline-none ${
              realIndex === idx ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
