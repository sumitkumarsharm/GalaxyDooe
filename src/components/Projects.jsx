import React, { useEffect, useRef, useState } from "react";
import { assets, projectsData } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
    // const navigate = useNavigate();

  // 🧩 Responsive card count
  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(3); // Show 3 on laptop
      } else if (window.innerWidth >= 640) {
        setCardToShow(2); // Show 2 on tablet
      } else {
        setCardToShow(1); // Show 1 on mobile
      }
    };
    updateCardToShow();
    window.addEventListener("resize", updateCardToShow);
    return () => window.removeEventListener("resize", updateCardToShow);
  }, []);

  // 🧭 Next / Prev controls
  const nextProject = () => {
    setIsTransitioning(true);
    const totalCards = projectsData.length + 1; // Include last “See All” card
    if (currentIndex >= totalCards - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevProject = () => {
    setIsTransitioning(true);
    const totalCards = projectsData.length + 1;
    if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalCards - 1);
      }, 700);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // 🖐️ Touch / Swipe logic
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) nextProject();
    if (swipeDistance < -50) prevProject();
  };

  // 🧮 Calculate translate percentage
  const totalCards = projectsData.length + 1;
  const translatePercent = (100 / cardToShow) * currentIndex;

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 font-light">
          completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 mx-auto max-w-80">
        Crafting spaces and build your dream house into reality
      </p>

      {/* ----- Buttons ------- */}
      <div className="flex justify-end items-center gap-4 mb-8">
        <button
          onClick={prevProject}
          className="border-2 border-transparent bg-gray-300 rounded hover:border-blue-500 hover:bg-transparent transition-all duration-300 cursor-pointer px-3 py-3"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="border-2 border-transparent bg-gray-300 rounded hover:border-blue-500 hover:bg-transparent transition-all duration-300 cursor-pointer px-3 py-3"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* ----- Slider Container ------- */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex gap-8 ${
            isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${translatePercent}%)`,
          }}
        >
          {/* Project Cards */}
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative shrink-0 w-full sm:w-1/2 lg:w-1/3 group transition-all duration-700 ease-in-out cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded shadow-md"
              />
              <div className="absolute -bottom-32 group-hover:bottom-0 left-0 w-full p-4 transition-all duration-700 ease-in-out bg-linear-to-t from-gray-700 to-gray-700/10">
                <h2 className="text-2xl font-semibold mt-4 text-white">
                  {project.title}
                </h2>
                <p className="text-white text-sm">
                  {project.price} | {project.location}
                </p>
              </div>
            </div>
          ))}

          {/* “See All Projects” Card */}
          <div
            
            className="relative shrink-0 w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-center items-center bg-gray-200 rounded shadow-md hover:bg-gray-300 transition-all duration-500 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300">
                <img
                  src={assets.right_arrow}
                  alt="Go to all projects"
                  className="w-6 h-6 invert"
                />
              </div>
              <p className="mt-4 text-gray-700 font-semibold">
                See All Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
