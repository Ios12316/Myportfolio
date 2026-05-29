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
    SiVercel,
} from "react-icons/si";
import { motion } from "framer-motion";


const frontendSkills = [
    {
        name: "HTML",
        icon: <FaHtml5 size={50} />,
    },
    {
        name: "CSS",
        icon: <FaCss3Alt size={50} />,
    },
    {
        name: "JavaScript",
        icon: <FaJs size={50} />,
    },
    {
        name: "React",
        icon: <FaReact size={50} />,
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss size={50} />,
    },
];

const backendSkills = [
    {
        name: "Node.js",
        icon: <FaNodeJs size={50} />,
    },
    {
        name: "Express",
        icon: <SiExpress size={50} />,
    },
    {
        name: "JavaScript",
        icon: <FaJs size={50} />,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb size={50} />,
    },
    {
        name: "GitHub",
        icon: <FaGithub size={50} />,
    },
    {
        name: "Vercel",
        icon: <SiVercel size={50} />,
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

                <div className="space-y-16">
                
                    <div>
                        <motion.h3 
                            className="text-2xl font-bold mb-8 text-blue-400 border-b border-gray-800 pb-2 inline-block"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Frontend Development
                        </motion.h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {frontendSkills.map((skill, index) => (
                                <motion.div key={index} 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.08 }}
                                className="flex flex-col items-center p-6 bg-gradient-to-br from-[#111] to-[#181818] border border-gray-800 rounded-2xl px-8 justify-center gap-4 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition cursor-pointer"
                                >
                                    <div className="text-blue-500">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-200">
                                        {skill.name}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    
                    <div>
                        <motion.h3 
                            className="text-2xl font-bold mb-8 text-emerald-400 border-b border-gray-800 pb-2 inline-block"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Backend & Tools
                        </motion.h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {backendSkills.map((skill, index) => (
                                <motion.div key={index} 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.08 }}
                                className="flex flex-col items-center p-6 bg-gradient-to-br from-[#111] to-[#181818] border border-gray-800 rounded-2xl px-8 justify-center gap-4 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition cursor-pointer"
                                >
                                    <div className="text-emerald-500">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-200">
                                        {skill.name}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}