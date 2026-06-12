import { motion} from "framer-motion";
import profilepic from "../assets/profilepic.jpeg";




function Hero() {
    return (
       <section className="min-h-screen md:min-h-[90vh] flex items-center justify-center px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                initial={{opacity: 0, x: -80}}
                animate={{opacity: 1, x: 0}}
                transition={{ duration: 1
                }}>
                    <p className="text-blue-500 text-lg mb-4">Full Stack Developer</p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"> Hi, I'm <br /> 
                    <span className="text-gray-500">Idowu Olakunle Samuel</span></h1>
                    <p className="text-gray-400 text-lg leading-8 mb-8">I build modern, scalable and responsive web applications with clean user experiences and powerful backend systems.</p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <a 
                            href="#projects" 
                            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition text-center"
                        >
                            View Projects
                        </a>

                        <a 
                            href="/contact" 
                            className="border border-gray-700 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition text-center"
                        >
                            Contact Me
                        </a>
                    </div>
                    
                </motion.div>

                <motion.div
                initial={{opacity: 0, x: 80}}
                animate={{opacity: 1, x: 0}}
                transition={{ duration: 1}}
                className="flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
                        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full border-4 border-blue-500 overflow-hidden flex items-center justify-center bg-[#111]">
                            <img src={profilepic} alt="Idowu Olakunle Samuel" className="w-full h-full object-cover"/>
                        </div>

                    </div>
                </motion.div>
                
            </div>
       </section>
    );
}

export default Hero;