import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";

import leisurehub from "../assets/images/leisurehub.jpeg";
import plant from "../assets/images/plant.jpg";
import chatapp from "../assets/images/chatapp.png";
import aiCourse from "../assets/images/ai-course.png";

const projects = [
  {
    title: "Personalized Leisure Hub",
    image: leisurehub,
    description:
      "An AI-powered entertainment recommendation platform that integrates movies, music, and OTT content with personalized suggestions and an intuitive user experience.",
    tech: ["Flutter", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/817099/Personalized-Leisure-Hub",
  },

  {
    title: "Plant Disease Detection",
    image: plant,
    description:
      "Deep Learning application using CNN and TensorFlow to detect plant diseases from leaf images with high accuracy.",
    tech: ["Python", "TensorFlow", "CNN", "Streamlit"],
    github: "https://github.com/817099/Plant-disease-detection",
  },

  {
    title: "Real-Time Chat Application",
    image: chatapp,
    description:
      "WhatsApp-inspired real-time messaging application with authentication, online status, typing indicators, and Socket.IO.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
    github: "https://github.com/817099/chat-app",
  },

  {
  title: "AI Course Recommendation Agent",
  image: aiCourse,
  description:
    "An AI-powered Course Recommendation Agent built with Python, Streamlit, Sentence Transformers, and Google Gemini AI. It analyzes student profiles, identifies skill gaps, recommends personalized learning paths, and generates AI-powered career guidance using a hybrid recommendation engine.",
  tech: [
    "Python",
    "Streamlit",
    "Gemini AI",
    "Sentence Transformers",
    "Machine Learning",
  ],
  github: "https://github.com/817099/ai-course-recommendation-agent",
},
];

function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
              Portfolio
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-3">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>

            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

          </div>

          {/* Project Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, index) => (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-cyan-400 transition-all duration-300"
              >

                {/* Image */}

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}

                  <div className="flex flex-wrap gap-2 mb-8">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 rounded-full bg-cyan-400/20 text-cyan-300 text-sm border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* GitHub Button */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex justify-center items-center gap-3 bg-cyan-400 text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    <FaGithub />
                    View Source Code
                  </a>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Projects;