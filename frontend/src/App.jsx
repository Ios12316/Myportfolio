import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";




function App() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white">
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default App;