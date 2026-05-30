import Hero from "../components/Hero.jsx";
import TechStack from "../components/TechStack.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import Services from "../components/Services.jsx";
import Projects from "../components/Projects.jsx";
import PageWrapper from "../components/PageWrapper.jsx";







function Home() {
    return (
        <div>
            <PageWrapper>
            <Hero />
            <TechStack />
            <AboutPreview />
            <Services />
            <Projects />
            </PageWrapper>
           
        </div>
    );
}

export default Home;