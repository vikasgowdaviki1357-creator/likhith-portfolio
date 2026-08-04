import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Reveal from "./Reveal";
import profile from "../data/profile";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_z895u3e",
        "template_fgfjzm6",
        form.current,
        "7nhUi0-fwnqy-_8HM"
      )
      .then(() => {
        alert("✅ Message sent successfully!");

        form.current.reset();

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);

        alert("❌ Failed to send message. Please try again.");

        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-28 px-6">
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
              Get In Touch
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-3">
              Contact <span className="text-cyan-400">Me</span>
            </h2>

            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-14">

            {/* LEFT */}

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-5">
                Let's Build Something Amazing 🚀
              </h3>

              <p className="text-gray-400 leading-8 mb-10">
                I'm always open to internships, software development,
                freelance work, and exciting opportunities.
                Feel free to reach out anytime.
              </p>

              <div className="space-y-6">

                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:border-cyan-400 transition"
                >
                  <FaEnvelope className="text-cyan-400 text-2xl" />

                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-400">{profile.email}</p>
                  </div>
                </a>

                <a
                  href="tel:+919916204449"
                  className="flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:border-cyan-400 transition"
                >
                  <FaPhone className="text-cyan-400 text-2xl" />

                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-400">
                      +91 9916204449
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5">
                  <FaMapMarkerAlt className="text-cyan-400 text-2xl" />

                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-400">
                      Bengaluru, Karnataka
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Icons */}

              <div className="flex gap-6 mt-10">

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-2xl hover:bg-cyan-400 hover:text-black transition"
                >
                  <FaGithub />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-2xl hover:bg-cyan-400 hover:text-black transition"
                >
                  <FaLinkedin />
                </a>

              </div>

            </motion.div>

            {/* RIGHT FORM */}

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >

              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-[#111827] border border-white/10 outline-none mb-5 focus:border-cyan-400"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-[#111827] border border-white/10 outline-none mb-5 focus:border-cyan-400"
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-[#111827] border border-white/10 outline-none mb-5 focus:border-cyan-400"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
                className="w-full p-4 rounded-xl bg-[#111827] border border-white/10 outline-none mb-6 resize-none focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-3 bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition disabled:opacity-70"
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Message"}
              </button>

            </motion.form>

          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;