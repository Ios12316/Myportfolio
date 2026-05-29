import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">
            <h1 className="text-4xl font-bold text-gray-500"> Idowu Olakunle Samuel</h1>
            <div className="flex gap-8 text-lg">
                <a href="/" className="hover:text-blue-500 transition">Home</a>
                <Link to="/about" className="hover:text-blue-500 transition">About</Link>
                <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;