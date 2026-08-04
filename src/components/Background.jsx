import { motion } from "framer-motion";

const circles = [
  { size: 250, top: "10%", left: "8%", delay: 0 },
  { size: 180, top: "60%", left: "70%", delay: 1 },
  { size: 140, top: "25%", left: "75%", delay: 2 },
  { size: 200, top: "75%", left: "20%", delay: 1.5 },
];

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">

      {circles.map((circle, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={{ y: [-20, 20, -20] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: circle.delay,
          }}
          className="absolute rounded-full bg-cyan-500/10 blur-3xl"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
          }}
        />
      ))}

    </div>
  );
}

export default Background;