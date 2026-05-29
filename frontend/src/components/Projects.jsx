import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website built with React and Tailwind CSS.",

    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",

    tech: ["React", "Tailwind", "Framer Motion"],

    github: "https://github.com/Ios12316/Myportfolio.git",
    live: "https://myportfolio-puce-mu.vercel.app",
  },

  {
    title: "Authentication API",
    description:
      "Secure backend authentication system using Node.js, Express and MongoDB.",

    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",

    tech: ["Node.js", "Express", "MongoDB"],

    github: "https://github.com/",
    live: "https://render.com/",
  },

  {
    title: "Full Stack Blog App",
    description:
      "A complete MERN stack blog application with authentication and CRUD operations.",

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",

    tech: ["React", "Node.js", "MongoDB"],

    github: "https://github.com/",
    live: "https://vercel.com/",
  },
];

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
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

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