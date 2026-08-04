import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import profile from "../data/profile";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1120]/70 backdrop-blur-2xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <h1 className="text-3xl font-extrabold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Likhith
              </span>

              <span className="text-white">.</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                activeClass="text-cyan-400 after:w-full"
                className="relative cursor-pointer text-gray-300 hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#111827] border-t border-white/10">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-5 text-gray-300 hover:bg-cyan-400 hover:text-black transition cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

          <div className="px-8 py-5">
            <a
              href={profile.resume}
              download
              className="flex items-center justify-center gap-2 bg-cyan-400 text-black py-3 rounded-xl font-semibold"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;