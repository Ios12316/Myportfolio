import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper.jsx";

function About() {
  return (
    <PageWrapper>
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* PAGE TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-gray-400 text-lg">
            Learn more about my journey, skills and goals.
          </p>
        </motion.div>

        {/* INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            Who I Am ?
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            I'm Samuel, a passionate Full Stack Developer who enjoys
            building modern web applications using React, Node.js,
            Express and MongoDB. I enjoy solving problems,
            learning new technologies and turning ideas into
            functional digital products.
          </p>
        </motion.div>

        {/* MY JOURNEY */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* <h2 className="text-3xl font-bold mb-6 text-blue-500">
            My Journey
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            My journey into software development started with a
            curiosity about how websites work. Over time I
            developed strong interests in frontend and backend
            development and began building real-world projects
            using the MERN stack.
          </p>
          TIMELINE */}
<div className="mb-20">
  <h2 className="text-3xl font-bold mb-12 text-blue-500">
    My Journey Timeline
  </h2>

  <div className="border-l-2 border-blue-500 pl-8 space-y-12">

    <div>
      <span className="text-blue-500 font-bold">
        2022
      </span>

      <h3 className="text-xl font-semibold mt-2">
        Started B.Sc. Economics
      </h3>

      <p className="text-gray-400 mt-2">
        Began my academic journey at Adekunle Ajasin
        University, Akungba-Akoko studying Economics.
      </p>
    </div>

    <div>
      <span className="text-blue-500 font-bold">
        February 2024
      </span>

      <h3 className="text-xl font-semibold mt-2">
        Started Learning Web Development
      </h3>

      <p className="text-gray-400 mt-2">
        Started learning HTML, CSS and JavaScript,
        building a strong foundation in frontend
        development.
      </p>
    </div>

    <div>
      <span className="text-blue-500 font-bold">
        2025
      </span>

      <h3 className="text-xl font-semibold mt-2">
        Transitioned Into Full Stack Development
      </h3>

      <p className="text-gray-400 mt-2">
        Expanded into backend development using
        Node.js, Express and MongoDB while building
        complete MERN stack applications.
      </p>
    </div>

    <div>
      <span className="text-blue-500 font-bold">
        2026
      </span>

      <h3 className="text-xl font-semibold mt-2">
        Built Real-World Projects
      </h3>

      <p className="text-gray-400 mt-2">
        Developed and deployed a Full Stack
        Authentication System and a Personal
        Portfolio Website.
      </p>
    </div>

    <div>
      <span className="text-blue-500 font-bold">
        Future Goal
      </span>

      <h3 className="text-xl font-semibold mt-2">
        Professional Software Engineer
      </h3>

      <p className="text-gray-400 mt-2">
        Continue growing as a Full Stack Developer,
        contribute to impactful projects and pursue
        international opportunities in technology.
      </p>
    </div>

  </div>
</div>
        </motion.div>

        {/* SKILLS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-blue-500">
            Core Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">
                Frontend
              </h3>

              <p className="text-gray-400">
                HTML, CSS, JavaScript, React,
                Tailwind CSS
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">
                Backend
              </h3>

              <p className="text-gray-400">
                Node.js, Express.js,
                MongoDB, REST APIs
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">
                Tools
              </h3>

              <p className="text-gray-400">
                Git, GitHub, Postman,
                Vercel
              </p>
            </div>

          </div>
        </div>

        {/* GOALS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            Career Goals
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            My goal is to continue improving as a software
            developer, contribute to impactful projects and
            collaborate with teams that build innovative
            solutions. I am committed to continuous learning
            and professional growth.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mb-8">
            Interested in working together?
          </p>

          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </div>
    </PageWrapper>
  );
}

export default About;