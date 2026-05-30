import Hero from "../components/Hero.jsx";
import TechStack from "../components/TechStack.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import Services from "../components/Services.jsx";
import Projects from "../components/Projects.jsx";






function Home() {
    return (
        <div>
            <Hero />
            <TechStack />
            <AboutPreview />
            <Services />
            <Projects />
           
        </div>
    );
}

export default Home;