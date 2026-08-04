import { motion } from "framer-motion";
import Reveal from "./Reveal";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTensorflow,
  SiPython,
  SiFlutter,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-cyan-400" /> },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
              Expertise
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-3">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>

            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

          </div>

          {/* Categories */}

          <div className="space-y-14">

            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
              >

                <h3 className="text-2xl font-bold mb-8 text-cyan-400">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                  {category.skills.map((skill) => (

                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                      }}
                      transition={{ duration: 0.25 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-cyan-400"
                    >

                      <div className="flex flex-col items-center">

                        <div className="text-5xl mb-5">
                          {skill.icon}
                        </div>

                        <h4 className="text-lg font-semibold">
                          {skill.name}
                        </h4>

                      </div>

                    </motion.div>

                  ))}

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Skills;