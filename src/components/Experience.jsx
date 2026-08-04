import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";
import Reveal from "./Reveal";

function Experience() {
  const technologies = [
    {
      name: "React",
      icon: <FaReact className="text-sky-400" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-white" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
    },
    {
      name: "Socket.IO",
      icon: <SiSocketdotio className="text-white" />,
    },
  ];

  return (
    <section id="experience" className="py-28 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
              Journey
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-3">
              Work <span className="text-cyan-400">Experience</span>
            </h2>

            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

          </div>

          {/* Timeline */}

          <div className="relative">

            <div className="absolute left-6 top-0 h-full w-1 bg-cyan-400 rounded-full"></div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative pl-20"
            >

              {/* Timeline Icon */}

              <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-black text-xl" />
              </div>

              {/* Experience Card */}

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                  <div>

                    <h3 className="text-3xl font-bold">
                      Full Stack Developer Intern
                    </h3>

                    <p className="text-cyan-400 text-xl mt-2">
                      SuprMentr
                    </p>

                  </div>

                  <span className="mt-4 md:mt-0 px-4 py-2 rounded-full bg-cyan-400/20 text-cyan-300 text-sm">
                    Internship
                  </span>

                </div>

                <p className="text-gray-400 mt-6 leading-8">

                  Worked on modern full-stack web applications using React,
                  Node.js, Express.js, MongoDB, and Socket.IO. Built
                  responsive user interfaces, developed REST APIs,
                  integrated databases, and created a real-time chat
                  application inspired by WhatsApp.

                </p>

                {/* Highlights */}

                <div className="mt-8">

                  <h4 className="text-xl font-semibold mb-4">
                    Highlights
                  </h4>

                  <ul className="space-y-3 text-gray-300">

                    <li>✔ Developed responsive React.js applications.</li>

                    <li>✔ Built REST APIs using Node.js and Express.</li>

                    <li>✔ Integrated MongoDB for efficient data management.</li>

                    <li>✔ Developed a real-time chat application using Socket.IO.</li>

                    <li>✔ Designed a WhatsApp-inspired responsive interface.</li>

                  </ul>

                </div>

                {/* Tech Stack */}

                <div className="mt-10">

                  <h4 className="text-xl font-semibold mb-5">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-4">

                    {technologies.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.08 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-white/10"
                      >
                        <span className="text-xl">
                          {tech.icon}
                        </span>

                        <span>{tech.name}</span>
                      </motion.div>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Experience;