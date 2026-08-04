import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

function About() {
  const stats = [
    {
      icon: <FaGraduationCap />,
      value: "8.77",
      label: "CGPA",
    },
    {
      icon: <FaLaptopCode />,
      value: "4+",
      label: "Projects",
    },
    {
      icon: <FaBriefcase />,
      value: "1",
      label: "Internship",
    },
    {
      icon: <FaAward />,
      value: "2026",
      label: "Graduate",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 bg-transparent"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-[6px] text-sm">
              Know Me
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold mt-3">
              About{" "}
              <span className="text-cyan-400">
                Me
              </span>
            </h2>

            <div className="w-28 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>

          </div>

          {/* Glass Card */}

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 md:p-14"
          >

            <p className="text-lg md:text-xl text-gray-300 leading-9 text-center">

              Hi! I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Likhith Gowda H R
              </span>
              , a Computer Science Engineering student passionate about
              Java Development, Full Stack Web Development, and Artificial
              Intelligence.

              <br />
              <br />

              I enjoy building scalable applications, solving real-world
              problems, and continuously learning modern technologies.
              My goal is to become a Software Engineer who creates
              impactful digital solutions.

            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#111827]/70 border border-white/10 rounded-2xl p-8 text-center shadow-lg"
                >

                  <div className="text-cyan-400 text-4xl flex justify-center mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-4xl font-bold">
                    {item.value}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.label}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>
      </Reveal>
    </section>
  );
}

export default About;