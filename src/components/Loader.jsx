import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-[9999]"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Likhith
      </motion.h1>

      <p className="text-gray-400 mt-6 text-lg">
        Loading Portfolio...
      </p>

      <div className="mt-8 w-56 h-2 rounded-full bg-gray-800 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-full bg-cyan-400"
        />

      </div>

    </motion.div>
  );
}

export default Loader;