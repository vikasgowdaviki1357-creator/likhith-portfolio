import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

import profile from "../data/profile";
import profileImage from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          {/* Availability */}

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-8">

            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-cyan-300">
              Available for Opportunities
            </span>

          </div>

          <p className="text-cyan-400 text-lg font-medium">
            Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-extrabold mt-3 leading-tight">

            Likhith

            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Gowda H R
            </span>

          </h1>

          <TypeAnimation
            sequence={[
              "Java Developer",
              2000,
              "Full Stack Developer",
              2000,
              "AI Enthusiast",
              2000,
              "React Developer",
              2000,
            ]}
            repeat={Infinity}
            speed={50}
            wrapper="h2"
            className="text-3xl mt-6 font-semibold text-gray-300"
          />

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">

            Passionate Computer Science Engineer building scalable
            applications using Java, React, Node.js, MongoDB,
            Artificial Intelligence, and modern web technologies.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href={profile.resume}
              download
              className="flex items-center gap-3 bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              View Projects
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-5 mt-10">

            {[
              {
                icon: <FaGithub />,
                link: profile.github,
              },
              {
                icon: <FaLinkedin />,
                link: profile.linkedin,
              },
              {
                icon: <FaEnvelope />,
                link: `mailto:${profile.email}`,
              },
            ].map((item, index) => (
              <motion.a
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                }}
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-cyan-400 hover:text-black transition"
              >
                {item.icon}
              </motion.a>
            ))}

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">
                4+
              </h2>

              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">
                1
              </h2>

              <p className="text-gray-400">
                Internship
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">
                8.77
              </h2>

              <p className="text-gray-400">
                CGPA
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[120px] opacity-30"></div>

            <img
              src={profileImage}
              alt="Profile"
              className="relative w-[380px] h-[380px] rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_70px_rgba(34,211,238,0.5)]"
            />

          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FaArrowDown className="text-cyan-400 text-2xl" />
      </motion.div>

    </section>
  );
}

export default Hero;