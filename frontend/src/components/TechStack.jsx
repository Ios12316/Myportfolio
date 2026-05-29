import { 
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGithub
} from "react-icons/fa";
import {
    SiExpress,
    SiMongodb,
    SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
const skills = [{
    name: "HTML",
    icon: <FaHtml5 size = {50} />,

},
{
    name: "CSS",
    icon: <FaCss3Alt size = {50} />,

},
{
    name: "JavaScript",
    icon: <FaJs size = {50} />,

},
{
    name: "React",
    icon: <FaReact size = {50} />,

},
{
    name: "Node.js",
    icon: <FaNodeJs size = {50} />,

},
{
    name: "Express",
    icon: <SiExpress size = {50} />,

},
{
    name: "MongoDB",
    icon: <SiMongodb size = {50} />,

},
{
    name: "Tailwind",
    icon: <SiTailwindcss size = {50} />,

},
{
    name: "GitHub",
    icon: <FaGithub size = {50} />,

},
];

export default function TechStack() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.7 }}
            
                >
                    My <span className="text-blue-500">Tech Stack</span>
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div key={index} 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.08 }}
                        className="flex flex-col items-center p-6 bg-[#111] border border-gray-800 rounded-2xl px-8 justify-center gap-4 hover:border-blue-500 transition cursor-pointer"
                        >
                            <div className="text-blue-500">
                                {skill.icon}

                            </div>
                            <h3 className="text-lg font-semibold">
                                {skill.name}
                            </h3>

                        </motion.div>
                    ))}

                </div>
                 
            </div>

        </section>
    )
}