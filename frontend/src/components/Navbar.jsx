import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => window.location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-500 whitespace-nowrap">
         IDOWU OLAKUNLE SAMUEL.G
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a
              href="/"
              className={
                isActive("/")
                  ? "text-blue-500"
                  : "hover:text-blue-500 transition"
              }
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className={
                isActive("/about")
                  ? "text-blue-500"
                  : "hover:text-blue-500 transition"
              }
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className={
                isActive("/contact")
                  ? "text-blue-500"
                  : "hover:text-blue-500 transition"
              }
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800">
          <ul className="flex flex-col items-center gap-6 py-6">

            <li>
              <a
                href="/"
                className={
                  isActive("/")
                    ? "text-blue-500"
                    : "hover:text-blue-500 transition"
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className={
                  isActive("/about")
                    ? "text-blue-500"
                    : "hover:text-blue-500 transition"
                }
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className={
                  isActive("/contact")
                    ? "text-blue-500"
                    : "hover:text-blue-500 transition"
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;