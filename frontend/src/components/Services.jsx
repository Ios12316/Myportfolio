import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern and user-friendly interfaces with React, JavaScript and Tailwind CSS.",
    icon: <FaCode size={40} />,
  },

  {
    title: "Backend Development",
    description:
      "Creating secure REST APIs, authentication systems and scalable server-side applications with Node.js and Express.",
    icon: <FaServer size={40} />,
  },

  {
    title: "Database Design",
    description:
      "Designing and managing MongoDB databases with efficient data structures and relationships.",
    icon: <FaDatabase size={40} />,
  },
];

function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-blue-500">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="text-blue-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;