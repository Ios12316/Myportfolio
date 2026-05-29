import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 text-lg mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Passionate About Building Modern Web Applications
          </h2>

          <p className="text-gray-400 leading-8 text-lg mb-6">
            I am a full stack developer passionate about
            creating responsive, scalable and user-friendly
            applications using modern technologies.
          </p>

          <p className="text-gray-400 leading-8 text-lg mb-8">
            I enjoy building both frontend interfaces and
            backend systems while continuously improving my
            development skills through real-world projects.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition">
              Download CV
            </button>
            <Link to="/about" className="border border-gray-700 hover:border-blue-500 px-8 py-4 rounded-xl text-lg font-semibold transition inline-flex items-center justify-center">
              Read More
            </Link>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >

        

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 transition">
            <h3 className="text-5xl font-bold text-blue-500 mb-3">
              2+
            </h3>

            <p className="text-gray-400">
              Years Learning
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 transition">
            <h3 className="text-5xl font-bold text-blue-500 mb-3">
              100%
            </h3>

            <p className="text-gray-400">
              Dedication
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 transition">
            <h3 className="text-5xl font-bold text-blue-500 mb-3">
              Full
            </h3>

            <p className="text-gray-400">
              Stack Focus
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default AboutPreview;