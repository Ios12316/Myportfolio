import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h1 className="text-2xl font-bold text-blue-500">
            IDOWU OLAKUNLE SAMUEL.G
          </h1>

          <p className="text-gray-400 mt-2">
            Full Stack Developer
          </p>
        </div>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Ios12316"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/idowuolakunlesamuel/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/+2348137451940"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} IDOWU. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;