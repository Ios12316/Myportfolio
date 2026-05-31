import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import home from "../assets/home.png";
import login from "../assets/login.png";
import signup from "../assets/signup.png";
import dashboard from "../assets/dashboard.png";

const projects = [
  {
    title: "My Portfolio Website",
    description:
      "A modern responsive portfolio website built with React and Tailwind CSS.",

    image: [ image1, image2 ],

    tech: ["React", "Tailwind", "Framer Motion"],

    github: "https://github.com/Ios12316/Myportfolio.git",
    live: "https://idowuolakunleportfolio.vercel.app",
  },

 {
  title: "Full Stack Authentication System",

  description:
    "A full stack authentication application built with React, Node.js, Express and MongoDB. Users can register, login, access protected routes and manage authentication securely.",

  image: [ home, login, signup, dashboard ],

  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
  ],

  github: "https://github.com/Ios12316/Architectural_Portfolio",

  live: "https://idowuolakunleproject.vercel.app/",
},
];

function ProjectImageSlider({ images, title }) {
  const imageList = Array.isArray(images) ? images : [images];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (imageList.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList, isHovered]);

  const handleNext = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };

  const handleDotClick = (index, e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex(index);
  };

  if (imageList.length === 0) return null;

  return (
    <div 
      className="relative h-56 w-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={imageList[currentIndex]}
          alt={`${title} - slide ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-300 pointer-events-none" />

      {imageList.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 font-bold"
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 font-bold"
            aria-label="Next image"
          >
            &#10095;
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleDotClick(idx, e)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? "bg-blue-500 scale-125 shadow-md shadow-blue-500/50" 
                    : "bg-white/50 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 transition"
            >

              {/* IMAGE */}
              <ProjectImageSlider images={project.image} title={project.title} />

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="border border-gray-700 hover:border-blue-500 px-5 py-3 rounded-xl transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;